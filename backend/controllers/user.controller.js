const UserService = require("../services/user.service")
const bcrypt = require("bcrypt")

const createUser = async (req, res) => {
    try {
        const userService = new UserService()
        const { username, email, password } = req.body

        // Check if username is already existed
        const existedUser = await userService.getExistedUserByUserName(username)
        if (existedUser) {
            return res.status(400).json({
                success: false,
                message: "USERNAME_ALREADY_EXISTED",
                error: "Username is already existed",
            })
        }

        // Generate hashed password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        // Create new user
        const newUser = await userService.createUser({
            username,
            email,
            password: hashedPassword,
        })

        const { password: pass, createdAt, updatedAt, __v, ...user } = newUser._doc

        res.status(201).json({
            user: user,
            success: true,
            message: "CREATE_NEW_USER_SUCCESS",
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "CREATE_USER_FAIL",
            error: error.message,
        })
    }
}

module.exports = {
    createUser,
}