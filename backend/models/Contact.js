const mongoose=require('mongoose')
const Schema=mongoose.Schema

const contactSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true

    },
    age:Number
  
})
module.exports=mongoose.model('Contact',contactSchema);

