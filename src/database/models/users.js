const mongoose = require("mongoose")
const schema = new mongoose.Schema({
    login: {
        type: 'string',
        unique: true,
        required: true
    }, 
    password: {
        type: 'string',
        unique: false,
        required: true
    }
})

const user = mongoose.model('users', schema)

const newUser = new user({
    login: "myLogin", 
    password: "myPassword"
})

newUser.save((err)=>{
    if(err) return false
})