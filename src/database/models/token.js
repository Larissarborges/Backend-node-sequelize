module.exports = (sequelize, DataTypes) => {
    const Token = sequelize.define('Token', {
        user_username: {
            allowNull: false,
            type: DataTypes.STRING,
              references: {
                key: 'username',
                model: 'User'
              },
          },
      date: DataTypes.DATE,
    }, {
      tableName: 'Token'
    })
  
    return Token
  }
  
  
  