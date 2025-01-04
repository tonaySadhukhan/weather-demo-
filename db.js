const mongoose=require('mongoose');
const mongoURI=process.env.mongourl;

if (!mongoURI) {
    console.error('MongoDB connection string is not defined in environment variables');
    process.exit(1);
}

mongoose.connect(mongoURI);
const db=mongoose.connection;

db.on('connected',()=>{
    console.log('Mongoose default connection is open to ',mongoURI);
});
db.on('disconnected',()=>{
    console.log('disconnected to mongodb');
});
db.on('error',(err)=>{
    console.log('error in connection',err);
});

module.exports=db;