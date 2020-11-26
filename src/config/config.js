module.exports = {
    development: {
      username: "root",
      password: "root",
      host: "localhost",
      dialect: "sqlite",
      seederStorage: "sequelize",
      seederStorageTableName: "SequelizeData",
      storage: "./database.sqlite",
      define: { 
        charset: "utf8", 
        dialectOptions: { "collate": "utf8_general_ci" }, 
      },
      pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
      },
    },
    test: {
      username: "root",
      password: "root",
      host: "localhost",
      dialect: "sqlite",
      seederStorage: "sequelize",
      seederStorageTableName: "SequelizeData",
      storage: "./tests/database.test.sqlite",
      define: { 
        charset: "utf8", 
        dialectOptions: { "collate": "utf8_general_ci" }, 
      },
    },
    staging: {
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      host: process.env.DB_HOST,
      dialect: "postgres",
      port: process.env.DB_PORT,//25060,
      seederStorage: "sequelize",
      seederStorageTableName: "SequelizeData",
      dialectOptions: {
        ssl: true
      },
      define: { 
        charset: "utf8", 
        dialectOptions: { "collate": "utf8_general_ci" }, 
      },
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
    },
    production: {
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      host: process.env.DB_HOST,
      dialect: "postgres",
      port: process.env.DB_PORT,//25060,
      seederStorage: "sequelize",
      seederStorageTableName: "SequelizeData",
      dialectOptions: {
        ssl: true
      },
      define: { 
        charset: "utf8", 
        dialectOptions: { "collate": "utf8_general_ci" }, 
      },
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
    },
  };