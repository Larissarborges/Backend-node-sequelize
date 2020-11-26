const { User, sequelize } = require('../database/models')

class UserController {
    async createUser(req, res) {
        const { email, name, localization, avatar, username, bio } = req.body
        const newUser = await User.create({ email, name, localization, avatar, username, bio })
        res.json(newUser)
    }
    
    async getUsers(req, res) {
        const allUsers = await User.findAll()
        res.json(allUsers)
    }

    async getUser(req, res) {
        const { username } = req.params
        const oneUser = await User.findAll({
            where: {
                username: username
            }
        })
        res.json(oneUser)
    }

    async updateUser(req, res) {
        const { username } = req.params
        const { email, name, localization, avatar, bio } = req.body
        const updatedUser = await User.update({ email, name, localization, avatar, bio}, {
            where: {
                username: username
            }
        })
        res.send('User updated') 
    }

    async deleteUser(req, res) {
        const { username } = req.params
        const deletedUser = await User.destroy({
            where: {
                username: username
            }
        })
        res.send('User deleted')
    }
}

module.exports = new UserController()



