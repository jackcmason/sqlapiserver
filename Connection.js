const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    user: "user",
    password: "pass",
    database: "database"
});

module.exports = connection;
