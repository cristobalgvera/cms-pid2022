import path from "path";
import fs from "fs";

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
        // From ./dist folder
        ca: fs
          .readFileSync(
            path.join(__dirname, "..", "..", "ca-certificate-2021.crt")
          )
          .toString(),
      },
    },
    debug: false,
  },
});
