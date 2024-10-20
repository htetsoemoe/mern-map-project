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

module.exports = {
    createPin,
}