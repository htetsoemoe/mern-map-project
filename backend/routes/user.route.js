const express = require('express')
const userRouter = express.Router()
const {
    createUserValidator,
    loginUserValidator,
} = require("../validators/user.validator")
const {
    createUser,
    loginUser,
} = require("../controllers/user.controller")

userRouter.post("/", createUserValidator, createUser)
userRouter.post("/login", loginUserValidator, loginUser)

module.exports = userRouter