const { UserFollowers, sequelize } = require('../database/models')

class FollowerController {
    async createFollower(req, res) {
        const { follower, following } = req.body
        const newFollower = await UserFollowers.create({ follower_username: follower, following_username: following })
        res.json(newFollower)
    }
    
    async getFollowers(req, res) {
        const { username } = req.params
        const allFollowers = await UserFollowers.findAll({
            where: {
                following_username: username
            }
        })
        res.json(allFollowers)
    }

    async getFollowing(req, res) {
        const { username } = req.params
        const allFollowing = await UserFollowers.findAll({
            where: {
                follower_username: username
            }
        })
        res.json(allFollowing)
    }

    async deleteFollower(req, res) {
        const { follower, following } = req.body
        const deletedFollower = await UserFollowers.destroy({ 
            where: {
                follower_username: follower, following_username: following
                } 
            })
        res.send('Follower deleted')
    }
}

module.exports = new FollowerController()



