module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('RepositoryStar', {
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
        repository_id: {
          allowMull: false,
          type: Sequelize.INTEGER,
          references: {
            key: 'id',
            model: 'Repository',
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
      return queryInterface.dropTable('RepositoryStar');
    }
  };