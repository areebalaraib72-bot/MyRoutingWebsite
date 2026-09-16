//---importing express
const express=require("express");


//---create application
const app=express();

//----set port
const port=5000;

//---Home route
app.get("/",(req,res)=>{
    res.send("habiba is learning");
});

//---about route
app.get("/",(req,res)=>{
    res.send("huda is learning")
});

//--about contact
app.get("/",(req,res)=>{
    res.send("contact")
});

//---finding erroe 404
app.use((req,res)=>{
    res.status(404).send("404-page not found");
});

//---start the server
app.listen(port,()=>{
    console.log("server is runningon http://localhost:${PORT}");
});