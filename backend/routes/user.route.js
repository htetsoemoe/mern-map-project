const express = require('express')
const userRouter = express.Router()
const {
    createUser,
} = require("../controllers/user.controller")

userRouter.post("/", createUser) // we need validator here

module.exports = userRouter