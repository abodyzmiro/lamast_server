const express=require("express");
var cors =require ("cors");
const mongoose =require ("mongoose")
const app =express()
app.use (express.json());
app.use (cors());

const mongooseLink="mongodb+srv://abodyzmiro2005:abodyzmiro2005@cluster0.qkj7hlq.mongodb.net/"

mongoose.connect(mongooseLink);
mongoose.connection.on ("connected", ()=>{
    console.log ("mongo connected");
});

app.get('/app',(req, res) => {
    res.status(200).json({
        nem:"abody",
        age:19
    });
} ) ;

module.exports=app;

