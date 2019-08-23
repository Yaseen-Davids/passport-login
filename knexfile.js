// UPDATE THIS WITH .env
const
  host = "localhost",
  username = "admin",
  password = "admin",
  port = "5432",
  db = "UsersLogin";

module.exports = {
  development: {
    client: "pg",
    connection: `postgres://${username}:${password}@${host}:${port}/${db}`,
    migrations: {
      directory: __dirname + "/migrations",
    },
    seeds: {
      directory: __dirname + "/seeds",
    },
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + "/migrations",
    },
    seeds: {
      directory: __dirname + "/seeds/production",
    },
  }
}