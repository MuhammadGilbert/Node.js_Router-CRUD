"use strict"

const mysql = require("mysql")

//koneksi
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "router",
    multipleStatements: true,
})

module.exports = db;