const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    login: {
        type: String,
        min: 6,
        max: 40,
        required: true
    }, 
    email: {
        type: String,
        min: 3,
        max: 40,
        required: true
    },
    password: {
        type: String,
        min: 6,
        max: 1024,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    phone: {
        type: String,
        min: 6,
        max: 20
    },
    firstname: {
        type: String,
        min: 1,
        max: 40
    },
    lastname: {
        type: String,
        min: 1,
        max: 40
    }
})

module.exports = mongoose.model("User" , userSchema);