const { User, Repository, sequelize } = require('../database/models')

class RepositoryController {
    async createRepository(req, res) {
        const { username } = req.params
        const { name, description, isPublic, slug } = req.body
        const newRepository = await Repository.create({ name, description, isPublic, slug: `${slug}${username}${name}`, user_username: username })
        res.json(newRepository)
    }

    async getRepositories(req, res) {
        const { username } = req.params
        const allRepositories = await Repository.findAll({
            include: [{model: User, as: 'userStars'}],
            where: {
                user_username: username
            }
        })
        res.json({data: allRepositories, count: allRepositories.length})
    }

    async updateRepository(req, res) {
        const { id } = req.params
        const { name, description, isPublic, slug } = req.body
        const updatedRepository = await Repository.update({ name, description, isPublic, slug}, {
            where: {
                id: id
            }
        })
        res.json('Repository updated')
    }

    async deleteRepository(req, res) {
        const { id } = req.params
        const deletedRepository = await Repository.destroy({
            where: {
                id: id
            }
        })
        res.json('Repository deleted')
    }
}

module.exports = new RepositoryController()