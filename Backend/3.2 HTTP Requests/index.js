import express from "express";
const app = express();
const port=3000;

app.get("/",(req,res)=>{
    res.send("<h1>This is my Homepage</h1> <p>Welcome. Explore, discover, and enjoy everything we have to offer, all in one place!</p>")
})
app.get("/about",(req,res)=>{
    res.send("<h1>This is about page</h1><p>Learn more about who we are, what we do, and the values that drive us forward.</p>")
})
app.get("/contact",(req,res)=>{
    res.send("<h1>This is my Contact page/h1><p>Have questions or need assistance? Reach out to us through our contact form, email, or phone—we’re here to help!</p")
})
app.listen(port,()=>{
    console.log("listening to 3000")
})