module.exports = ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      host: env("DATABASE_HOST", "127.0.0.1"),
      port: env.int("DATABASE_PORT", 3306),
      database: env("DATABASE_NAME", "pie_test_db"),
      user: env("DATABASE_USERNAME", "root"),
      password: env("DATABASE_PASSWORD", "Qwerty123"),
      ssl: env.bool("DATABASE_SSL", false),
    },
    acquireConnectionTimeout: env.int("DATABASE_CONNECTION_TIMEOUT", 60000),
  },
});
