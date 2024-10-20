const express = require('express')
const pinRouter = express.Router()
const {
    createPinValidator,
} = require("../validators/pin.validator")
const {
    createPin,
    getAllPins,
} = require("../controllers/pin.controller")

pinRouter.post("/", createPinValidator, createPin)
pinRouter.get("/", getAllPins)

module.exports = pinRouter