module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('Token', {
        user_username: {
          allowNull: false,
          type: Sequelize.STRING,
          references: {
            key: 'username',
            model: 'User'
          },
        },
        date: {
          type: Sequelize.DATE
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
      return queryInterface.dropTable('Token');
    }
  };