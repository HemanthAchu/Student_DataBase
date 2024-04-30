
const mongooes =require('mongoose')

const usersSchema =new mongooes.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    address:{
        type:String
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    gender:{
        type:String
    },
    mobile:{
        type:String
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:String
    },
    course:{
        type:String
    },
})

const users = mongooes.model("users",usersSchema)
module.exports=users