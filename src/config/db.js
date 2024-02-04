const mysql = require("mysql")
const env = require("./env")

const db = mysql.createConnection({
    host:env.dbHostname,
    user:env.dbUser,
    password:env.dbPassword,
    database:env.dbName


})

module .exports = db 