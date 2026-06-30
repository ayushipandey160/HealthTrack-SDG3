const mongoose=require('mongoose');
module.exports=mongoose.model('Reminder',new mongoose.Schema({
medicine:String,time:String,userId:String
}));