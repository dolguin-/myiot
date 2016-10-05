module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: process.env.RDS_HOSTNAME || '127.0.0.1',
      database: process.env.RDS_DATABASE || 'myiot',
      user:     process.env.RDS_USERNAME || 'root',
      password: process.env.RDS_PASSWORD || 'onlymine'
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    const: {
      DATABASE_DATE_FORMAT: 'YYYY-MM-DD HH:mm:ss'
    }
  },
  production: {
    client: 'mysql',
    connection: {
      host: process.env.RDS_HOSTNAME,
      database: process.env.RDS_DATABASE || 'myiot',
      user:     process.env.RDS_USERNAME,
      password: process.env.RDS_PASSWORD
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    const: {
      DATABASE_DATE_FORMAT: 'YYYY-MM-DD HH:mm:ss'
    }
  }
};