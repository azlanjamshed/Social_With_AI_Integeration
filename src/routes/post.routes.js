const express = require("express")
const jwt = require("jsonwebtoken")
const router = express.Router()
const userModel = require("../models/user.model")
const authMiddleware = require("../middleware/auth.middleware")
const multer = require("multer")
const controller = require("../controller/post.controller")
const upload = multer({ storage: multer.memoryStorage() })

router.post("/", authMiddleware, upload.single("image"), controller.postController)





module.exports = router