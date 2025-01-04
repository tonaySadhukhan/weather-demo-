const mongoose=require('mongoose');
const schema=new mongoose.Schema({
    temp:{
        type:Number,
        required:true
    }
});
module.exports=mongoose.model('weather',schema);