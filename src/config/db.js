const mysql = require("mysql");

const db = mysql.createConnection({
    host: "localhost",
    post: "3306", 
    user: "root",
    password: "142508",
    database: "sys",
});

db.connect();

module.exports = db;