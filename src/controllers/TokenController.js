const { User, Token, sequelize } = require('../database/models')

class TokenController {
    async verifyUser(req, res) {
        const { username } = req.query
        
        const existUsername = await User.findAll({ where: { username: username }}) 
        if (!existUsername) {
            return res.send(404)
        } else {
            const verifiedUser = await Token.create({ username, newDate })
        }
    }
}

module.exports = new TokenController()