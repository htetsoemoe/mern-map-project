const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchemaModel = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            min: 3,
            max: 20,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            max: 50,
        },
        password: {
            type: String,
            required: true,
            min: 6,
        },
    },
    { timestamps: true },
)

module.exports = userSchemaModel
