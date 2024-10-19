const PinService = require("../services/pin.service")

const createPin = async (req, res) => {
    try {
        const pinService = new PinService()
        const { username, title, description, rating, lat, lng } = req.body
        console.log(`${username} ${title} ${description} ${rating} ${lat} ${lng}`)

        await pinService.testing()
        res.status(201).json({
            data: "Create pin successfully",
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