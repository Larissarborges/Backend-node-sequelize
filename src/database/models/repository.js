module.exports = (sequelize, DataTypes) => {
    const Repository = sequelize.define('Repository', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      user_username: {
        allowNull: false,
          type: DataTypes.STRING,
          references: {
            key: 'username',
            model: 'User'
          },
      },
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      isPublic: DataTypes.BOOLEAN,
      slug: DataTypes.STRING,
    }, {
      tableName: 'Repository'
    })

    Repository.associate = function(models) {
      Repository.belongsToMany(models.User, {
        through: models.RepositoryStar,
        as: 'userStars',
        foreignKey: 'repository_id',
        otherKey: 'user_username'
      });
    }

    return Repository
  }
  