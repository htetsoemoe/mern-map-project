const UserService = require("../services/user.service")
const bcrypt = require("bcrypt")

const createUser =  async (req, res) => {
    try {
        const userService = new UserService()
        const { username, email, password } = req.body

        const existedUser = await userService.getExistedUserByUserName(username)
        console.log(`Existed user: ${existedUser}`)

        if (existedUser) {
            return res.status(400).json({
                success: false,
                message: "USERNAME_ALREADY_EXISTED",
                error: "Username is already existed",
            })
        }

        res.status(201).json({
            data: "Hello from create user, this is a Thindingyut Holidays",
            success: true,
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