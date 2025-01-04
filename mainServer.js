require('dotenv').config(); // Add this line to load environment variables
const express=require('express');
const app=express();
const mongoose=require('mongoose');
const db=require('./db');
const weather=require('./models/weather');

app.use(express.json()); // Add this line to parse JSON request bodies

app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.put('/add',async (req,res)=>{
    try{
    const data=req.body;
    if(data){
        const resule=await weather.updateOne({},{$set:{temp:data.temp}},{upsert:true});
        console.log(resule);
        res.status(200).json(resule);
    }
    else{
        res.status(400).json({message:"Invalid data"});
    }
}catch(err){
    console.log(err);
}

});
app.get('/temp',async (req,res)=>{
    try{
        const result=await weather.find();
        if(result){
        res.status(200).json(result);
        }
    }catch(err){
        console.log(err);
    }

});

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});
