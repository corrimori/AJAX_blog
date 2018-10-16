module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: 'AJAXblog'
    },
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  },

  test: {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: 'AJAXblog_test'
    },
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  }
}
