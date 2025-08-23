
const postModel = require("../models/post.model")
const userModel = require("../models/user.model")
const generateCaption = require("../service/ai.service");
const fileUpload = require("../service/storage.service");
const { v4: uuidv4 } = require('uuid')

async function postController(req, res) {
    const file = req.file;
    console.log("File received:-", file);
    if (!file) {
        return res.status(400).json({ error: "No file uploaded" });
    }

    const base64ImageFile = Buffer.from(file.buffer).toString('base64')

    const caption = await generateCaption(base64ImageFile)
    console.log("caption result:-", caption);

    const result = await fileUpload(file.buffer, uuidv4())
    console.log("file upload:-", JSON.stringify(result, null, 2));

    const post = await postModel.create({
        caption: caption,
        image: result.url,
        user: req.user._id
    })
    res.status(201).json({
        message: "post created successfully",
        post
    })

}

module.exports = { postController }