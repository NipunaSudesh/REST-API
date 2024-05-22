const express=require("express");
const bodyPaeser=require("body-parser");
const cors=require("cors");

const app=express();
app.use(cors());

const PORT =5000;
app.use(bodyPaeser.json());

app.listen(PORT,()=>{
    console.log("server is up and running on port "+port)
});