const { hostname } = require("os")
const path = require("path")
require("dotenv").config({path:"../.env"})

const env = {
    port:process.env.port,
    hostName:process.env.hostname,
    appName:process.env.APP_NAME,
    dbName:process.env.DB_NAME,
    dbUser:process.env.DB_USER,
    dbPassword:process.env.DB_PASSWORD,
    dbHostname:process.env.DB_HOSTNAME


}

module.exports = env