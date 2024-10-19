const mongoose = require('mongoose')
const pinSchemaModel = require('../models/pin.model')

module.exports = class PinService {
    constructor() {
        this.pinCollectionName = `pins`
        this.pinModel = mongoose.model(
            this.pinCollectionName,
            pinSchemaModel
        )
    }

    async testing() {
        console.log("Pin service is working")
    }

    async createPin(pinData) {
        return this.pinModel.create(pinData)
    }

    async getAllPins() {
        return this.pinModel.find()
    }
}