const express = require('express')
const pinRouter = express.Router()
const {
    createPin,
} = require("../controllers/pin.controller")

pinRouter.post("/", createPin) // we need validation here

module.exports = pinRouter