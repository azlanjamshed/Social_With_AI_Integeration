const express = require("express");
const userModel = require("../models/user.model");
const router = express.Router();

const jwt = require("jsonwebtoken");
router.post("/register", async (req, res) => {
    const { username, password } = req.body;
    const existinguser = await userModel.findOne({ username });
    if (existinguser) {
        return res.status(409).json({
            message: "username already exists",
        });
    }

    const user = await userModel.create({
        username,
        password,
    });
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    res.cookie("token", token)
    res.status(201).json({
        message: "user registered successful",
        user,
    });
});

module.exports = router;
