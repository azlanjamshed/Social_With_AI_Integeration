const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    image: String,
    caption: String,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users"
    }
})

const postModel = mongoose.model("Posts", postSchema);

module.exports = postModel