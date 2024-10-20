require('dotenv').config()
const express = require('express')
const connectDB = require('./db/connectDB')
const cors = require('cors')
const { validateRequest } = require('./utils')
const userRouter = require('./routes/user.route')
const pinRouter = require('./routes/pin.route')

const app = express()
const PORT = process.env.PORT || 3500
app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello World from map project")
})
app.use("/api/v1/users", userRouter)
app.use("/api/v1/pins", pinRouter)

app.use(validateRequest)

app.listen(PORT, () => {
    connectDB()
    console.log(`Server is running on port 3500`)
})