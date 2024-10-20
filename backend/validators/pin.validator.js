const { Joi, validate } = require("express-validation")

const createPinValidator = validate({
    body: Joi.object({
        username: Joi.string().required().messages({
            "any.required": "username is required",
        }),
        title: Joi.string().min(3).max(60).required()
            .messages({
                "any.required": "title is required",
                "string.min": "title must be at least 3 characters long",
                "string.max": "title should not exceed 60 characters",
            }),
        description: Joi.string().min(3).max(255).required()
            .messages({
                "any.required": "description is required",
                "string.min": "description must be at least 3 characters long",
                "string.max": "description should not exceed 255 characters",
            }),
        rating: Joi.number().min(0).max(5).required()
            .messages({
                "number.base": "rating must be a number",
                "number.min": "rating must be at least 0",
                "number.max": "rating cannot be more than 5",
                "any.required": "rating is required",
            }),
        lat: Joi.number().required().precision(8)
            .messages({
                "any.required": "lat is required",
                "number.base": "lat must be a number",
                "number.precision": "lat must be a number with 8 decimal places",
            }),
        lng: Joi.number().required().precision(8)
            .messages({
                "any.required": "lng is required",
                "number.base": "lng must be a number",
                "number.precision": "lng must be a number with 8 decimal places",
            }),
    })
})

module.exports = {
    createPinValidator,
}