module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('Repository', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        user_username: {
          allowNull: false,
          type: Sequelize.STRING,
          references: {
            key: 'username',
            model: 'User'
          },
        },
        name: {
          type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        isPublic: {
            type: Sequelize.BOOLEAN
        },
        slug: {
            type: Sequelize.STRING
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
      return queryInterface.dropTable('Repository');
    }
  };