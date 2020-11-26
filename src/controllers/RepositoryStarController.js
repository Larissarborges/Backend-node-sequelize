const { RepositoryStar, sequelize } = require('../database/models')

class RepositoryStarController {
    async createStar(req, res) {
       const { username, repository } = req.body
       const createdStar = await RepositoryStar.create({user_username: username, repository_id: repository})
       res.json(createdStar) 
    }

    async getStars(req, res) {
        const { id } = req.params
        const allStars = await RepositoryStar.findAll({
            where: {
                repository_id: id
            }
        })
        res.json(allStars)
    }

    async deleteStar(req, res) {
        const { username, repository } = req.body
        const allStars = await RepositoryStar.destroy({
            where: {
                user_username: username,
                repository_id: repository
            }
        })
        res.json('Star deleted')    
    }
}

module.exports = new RepositoryStarController()