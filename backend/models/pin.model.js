const mongoose = require('mongoose')
const { Schema } = mongoose

const pinSchemaModel = new Schema(
    {
        username: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
            min: 3,
            max: 60,
        },
        description: {
            type: String,
            required: true,
            min: 3,
        },
        rating: {
            type: Number,
            required: true,
            min: 0,
            max: 5,
        },
        lat: {
            type: Number,
            required: true,
        },
        lng: {
            type: Number,
            required: true,
        },
    },
    { timestamps: true },
)

module.exports = pinSchemaModel