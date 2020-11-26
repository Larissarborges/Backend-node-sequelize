module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('User', {
        username: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.STRING
        },
        email: {
          type: Sequelize.STRING
        },
        name: {
          type: Sequelize.STRING
        },
        localization: {
            type: Sequelize.STRING
        },
        avatar: {
            type: Sequelize.STRING
        },
        bio: {
            type: Sequelize.TEXT
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
      return queryInterface.dropTable('User');
    }
  };