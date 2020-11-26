module.exports = (sequelize, DataTypes) => {
    const UserFollowers = sequelize.define('UserFollowers', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        follower_username: {
            allowNull: false,
            type: DataTypes.STRING,
            references: {
                key: 'username',
                model: 'User'
            },
        },
        following_username: {
            allowMull: false,
            type: DataTypes.STRING,
            references: {
                key: 'username',
                model: 'User',
            },
        },
    },
    )

    return UserFollowers
}


