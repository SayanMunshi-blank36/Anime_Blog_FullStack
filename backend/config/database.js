// // strapi-api/config/database.js
// const parse = require("pg-connection-string").parse;

// module.exports = ({ env }) => {
//   if (env("NODE_ENV") === "production") {
//     const config = parse(process.env.DATABASE_URL);
//     return {
//       defaultConnection: "default",
//       connections: {
//         default: {
//           connector: "bookshelf",
//           settings: {
//             client: "postgres",
//             host: config.host,
//             port: config.port,
//             database: config.database,
//             username: config.user,
//             password: config.password,
//           },
//           options: {
//             ssl: false,
//           },
//         },
//       },
//     };
//   }

//   return {
//     defaultConnection: "default",
//     connection: {
//       client: "postgres",
//       connection: {
//         host: env("DATABASE_HOST", "localhost"),
//         port: env.int("DATABASE_PORT", 5432),
//         database: env("DATABASE_NAME", "animeBlog"),
//         user: env("DATABASE_USERNAME", "postgres"),
//         password: env("DATABASE_PASSWORD", "deathnote@36"),
//         schema: env("DATABASE_SCHEMA", "public"), // Not required
//         ssl:
//           process.env.NODE_ENV !== "production"
//             ? false
//             : { rejectUnauthorized: false },
//       },
//     },
//   };
// };

// strapi-api/config/database.js
module.exports = ({ env }) => ({
  defaultConnection: "default",
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "localhost"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "animeBlog"),
      user: env("DATABASE_USERNAME", "postgres"),
      password: env("DATABASE_PASSWORD", "deathnote@36"),
      schema: env("DATABASE_SCHEMA", "public"), // Not required
      ssl:
        process.env.NODE_ENV !== "production"
          ? false
          : { rejectUnauthorized: false },
    },
  },
});

// const path = require('path');

// module.exports = ({ env }) => ({
//   connection: {
//     client: 'sqlite',
//     connection: {
//       filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
//     },
//     useNullAsDefault: true,
//   },
// });
