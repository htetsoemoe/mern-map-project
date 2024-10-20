const express = require('express')
const pinRouter = express.Router()
const {
    createPinValidator,
} = require("../validators/pin.validator")
const {
    createPin,
} = require("../controllers/pin.controller")

pinRouter.post("/", createPinValidator, createPin)

module.exports = pinRouter