export default ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST"),
      port: env.int("DATABASE_PORT"),
      database: env("DATABASE_NAME"),
      user: env("DATABASE_USERNAME"),
      password: env("DATABASE_PASSWORD"),
      schema: env("DATABASE_SCHEMA"),
      ssl: {
        ca: Buffer.from(env("DATABASE_SSL_CA"), "base64").toString("ascii"),
      },
    },
    debug: false,
  },
});
