const mangoose = require('mongoose')
 
mangoose.connect('mongodb://localhost:27017/studentDB',{
    useNewUrlParser: true

},
err => {
    if(!err) {
        console.log('connection succeeded')
    } else {
        console.log('Error in connection'+err)
    }
})
require('./student.model')