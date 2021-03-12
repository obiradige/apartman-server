require("./db/db_connect")
const express = require("express")
const port = process.env.PORT || 3000

const app = express()

app.get("/",(req,res)=>{
    res.send("Hello World")
})




app.listen(port,()=>{
    console.log("listenin port 3000")
})