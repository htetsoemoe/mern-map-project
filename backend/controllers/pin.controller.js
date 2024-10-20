const PinService = require("../services/pin.service")

const createPin = async (req, res) => {
    try {
        const pinData = req.body

        const pinService = new PinService()
        const savedPin = await pinService.createPin(pinData)

        res.status(201).json({
            data: savedPin,
            success: true,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "CREATE_PIN_FAIL",
            error: error.message,
        })
    }
}

const getAllPins = async (req, res) => {
    try {
        const pinService = new PinService()
        const pins = await pinService.getAllPins()

        res.status(200).json({
            data: pins,
            success: true,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "GET_ALL_PINS_FAIL",
            error: error.message,
        })
    }
}

module.exports = {
    createPin,
    getAllPins,
}