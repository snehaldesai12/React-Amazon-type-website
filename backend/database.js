const {Pool} = require("pg");

const pool = new Pool({

    user: "postgres",
    password: "user12",
    host: "localhost",
    port: 5432,
    database: "mywebsite_db"
});

module.exports = pool;