const { Joi, validate } = require("express-validation")

const createUserValidator = validate({
    body: Joi.object({
        username: Joi.string().max(25).required()
            .messages({ "any.required": "username is required" }),
        email: Joi.string().email().required()
            .messages({ "any.required": "email is required" }),
        password: Joi.string().min(6).required()
            .messages({
                "any.required": "password is required",
                "string.min": "password must be at least 6 characters long",
            }),
    })
})

const loginUserValidator = validate({
    body: Joi.object({
        username: Joi.string().max(25).required()
            .messages({ "any.required": "username is required" }),
        password: Joi.string().min(6).required()
            .messages({
                "any.required": "password is required",
                "string.min": "password must be at least 6 characters long",
            }),
    })
})

module.exports = {
    createUserValidator,
    loginUserValidator,
}