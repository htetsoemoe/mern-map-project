require('dotenv').config()
const express = require('express')
const connectDB = require('./db/connectDB')
const { validateRequest } = require('./utils')
const userRouter = require('./routes/user.route')

const app = express()
const PORT = process.env.PORT || 3500
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello World from map project")
})
app.use("/api/v1/users", userRouter)

app.use(validateRequest)

app.listen(PORT, () => {
    connectDB()
    console.log(`Server is running on port 3500`)
})