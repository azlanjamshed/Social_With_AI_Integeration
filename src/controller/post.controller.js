
const postModel = require("../models/post.model")
const userModel = require("../models/user.model")
const generateCaption = require("../service/ai.service.")

async function postController(req, res) {
    const file = req.file;
    console.log("File received", file);
    const base64ImageFile = Buffer.from(file.buffer).toString('base64')

    const caption = await generateCaption(base64ImageFile)
    res.json({
        caption
    })



}

module.exports = { postController }