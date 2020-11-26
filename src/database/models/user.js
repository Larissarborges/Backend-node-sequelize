module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING
    },
    email: DataTypes.STRING,
    name: DataTypes.STRING,
    localization: DataTypes.STRING,
    avatar: DataTypes.STRING,
    bio: DataTypes.TEXT,
  }, {
    tableName: 'User'
  })

  User.associate = function(models) {
    User.belongsToMany(models.Repository, {
      through: models.RepositoryStar,
      as: 'stars',
      foreignKey: 'user_username',
      otherKey: 'repository_id'
    });
  }

  return User
}


