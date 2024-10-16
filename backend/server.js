const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const connectDB = require('./db/connectDB')

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3500
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello World from map project")
})

app.listen(PORT, () => {
    connectDB()
    console.log(`Server is running on port 3500`)
})