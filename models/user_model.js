const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const User = Schema({
    username : {
        type : String,
        unique : true,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true,
    }
})