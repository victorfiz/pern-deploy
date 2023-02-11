const Pool = require("pg").Pool

const pool = new Pool({
    user: "postgres",
    password: "Fire1303",
    host: "localhost",
    port:"5432",
    database:"PERN_Todo",
});

module.exports = pool;