module.exports = (sequelize, DataTypes) => {
    const RepositoryStar = sequelize.define('RepositoryStar', {
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
        repository_id: {
            allowMull: false,
            type: DataTypes.INTEGER,
            references: {
                key: 'id',
                model: 'Repository',
            },
        }, 
    }, {
        tableName: 'RepositoryStar'
    })
        
    return RepositoryStar
}
