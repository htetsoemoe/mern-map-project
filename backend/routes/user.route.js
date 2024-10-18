const express = require('express')
const userRouter = express.Router()
const {
    createUserValidator,
} = require("../validators/user.validator")
const {
    createUser,
} = require("../controllers/user.controller")

userRouter.post("/", createUserValidator, createUser) // we need validator here

module.exports = userRouter