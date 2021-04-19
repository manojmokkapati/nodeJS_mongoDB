const mongoose = require('mongoose')
var studentschema = new mongoose.Schema({

    fullName:{
        type:String,
        required:'this fields is required'
    },
    email:{
        type:String,
        required:'this fields is required'
    },
    mobile:{
        type:Number,
        required:'this fields is required'
    },
    city:{
        type:String,
        required:'this fields is required'
    },
})
mongoose.model("student",studentschema);