const express = require('express')
const routes = express.Router()

const UserController = require('./controllers/UserController')
const FollowerController = require('./controllers/FollowerController')
const RepositoryController = require('./controllers/RepositoryController')
const RepositoryStarController = require('./controllers/RepositoryStarController')
const TokenController = require('./controllers/TokenController')

// CRUD - Users
routes.post('/users', UserController.createUser)
routes.get('/users', UserController.getUsers)
routes.get('/users/:username', UserController.getUser)
routes.put('/users/:username', UserController.updateUser)
routes.delete('/users/:username', UserController.deleteUser)

// CRUD - FOLLOWERS
routes.post('/followers', FollowerController.createFollower)
routes.get('/users/:username/followers', FollowerController.getFollowers)
routes.get('/users/:username/following', FollowerController.getFollowing)
routes.delete('/followers', FollowerController.deleteFollower)

// CRUD - REPOSITORIES
routes.post('/users/:username/repositories', RepositoryController.createRepository)
routes.get('/users/:username/repositories', RepositoryController.getRepositories)
routes.put('/users/repositories/:id', RepositoryController.updateRepository)
routes.delete('/users/repositories/:id', RepositoryController.deleteRepository)

// CRUD - REPOSITORYSTARS
routes.post('/stars', RepositoryStarController.createStar)
routes.get('/repositories/:id/stars', RepositoryStarController.getStars)
routes.delete('/stars', RepositoryStarController.deleteStar)

// TOKEN
routes.get('/auth', TokenController.verifyUser)

module.exports = routes