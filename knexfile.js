require("dotenv").config();

module.exports = {
  // npm install sqlite3
  // https://docs.microsoft.com/pt-br/windows/dev-environment/javascript/nodejs-on-windows
  development: {
    client: process.env.CLIENT || "mysql2",
    connection: {
      host: "localhost",
      user: process.env.USER || "root",
      password: process.env.PASSWORD || "",
      database: process.env.DATABASE || "job_quest",
      port: process.env.PORTDB || 3306,
    },
    migrations: {
      directory: "database/migrations",
    },
    seeds: {
      directory: "database/seeds",
    },
  },

  // staging: {
  //   client: process.env.CLIENT || 'mysql2',
  //   connection: {
  //     database: process.env.DATABASE || 'job_quest',
  //     user: process.env.USER || 'root',
  //     password: process.env.PASSWORD || '',
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },

  // production: {
  //   client: process.env.CLIENT || 'mysql2',
  //   connection: {
  //     database: process.env.DATABASE || 'job_quest',
  //     user: process.env.USER || 'root',
  //     password: process.env.PASSWORD || '',
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }
};
