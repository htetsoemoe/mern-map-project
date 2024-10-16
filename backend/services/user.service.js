const mongoose = require('mongoose');
const userSchemaModel = require('../models/user.model');

module.exports = class UserService {
    constructor() {
        this.userCollectionName = `users`
        this.userModel = mongoose.model(
            this.userCollectionName,
            userSchemaModel
        )
    }

    async getExistedUserByUserName(username) {
        return this.userModel.findOne({ username })
    }

    async createUser(userData) {
        return this.userModel.create(userData)
    }
}