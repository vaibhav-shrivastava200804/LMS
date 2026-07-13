import mysql from "mysql2/promise";
import env from "./env.js";

const pool = mysql.createPool({
    host: env.database.host,
    user: env.database.username,
    password: env.database.password,
    database: env.database.name,
    port: env.database.port,

    waitForConnections: true,

    connectionLimit: 20,

    queueLimit: 0,

    multipleStatements: false,
    ssl: {
    minVersion: "TLSv1.2",
    rejectUnauthorized: true,
  },
});

export default pool;