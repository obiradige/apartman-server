const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test',{useNewUrlParser: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once("open",()=>{
    console.log("mongoose connect")
})
