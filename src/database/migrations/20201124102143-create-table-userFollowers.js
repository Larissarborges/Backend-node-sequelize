module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('UserFollowers', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        follower_username: {
          allowNull: false,
          type: Sequelize.STRING,
          references: {
            key: 'username',
            model: 'User'
          },
        },
        following_username: {
          allowMull: false,
          type: Sequelize.STRING,
          references: {
            key: 'username',
            model: 'User',
          },
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      });
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('UserFollowers');
    }
  };