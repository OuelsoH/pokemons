const express = require("express")
const app = express()
const env = require("./config/env")
const router = require ("./routes/pokemon.route.js")
const morgan = require("morgan")
const mysql = require("mysql")
const db = require("./config/db.js")

app.use(morgan("dev"))



db.connect((err)=>{
    if(err) throw err;
    console.log(` Database:${process.env.DB_NAME}, hosted on: ${process.env.DB_HOST}`)
})



app.use("/api/pokemon",router)





app.listen(env.port, env.hostName, ()=>{
    console.log(`app listenning at http://${env.hostName}:${env.port}`)
})