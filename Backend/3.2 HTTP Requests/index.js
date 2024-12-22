import express from "express";
const app = express();
const port=3000;

app.get("/",(req,res)=>{
    res.send("<h1>This is my Homepage</h1>")
})
app.get("/about",(req,res)=>{
    res.send("<h1>This is about page</h1>")
})
app.get("/contact",(req,res)=>{
    res.send("<h1>This is my Contact page/h1>")
})
app.listen(port,()=>{
    console.log("listening to 3000")
})