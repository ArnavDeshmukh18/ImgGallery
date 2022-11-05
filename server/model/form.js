const mongoose = require("mongoose")
const validator = require("validator")

const formSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"name is required"],
        minlength:[3,"min 3 letter"]
    },
    email:{
        type:String,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("email is invalid")
            }
        }
    },
    photo:{
        data:Buffer,
        contentType:String,
    },
})

module.exports = (mongoose.model("User",formSchema))