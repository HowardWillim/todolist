const express = require("express");
const bodyParser=require("body-parser");

const app=express();
let items=[];
let works=[]
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))

app.get("/",(req,res)=>{
    var today=new Date();
    var options={
        weekday:"long",
        day:"numeric",
        month:"long"
    }

    var day =today.toLocaleDateString("en-US",options)

    res.render("list",{kindOfDay:day,values: items})
})

app.get("/Work",(req,res)=>{
    res.render("list",{kindOfDay:"Work",values:works})
})

app.post("/",(req,res)=>{
    var item =req.body.newItem;
    if(req.body.list = 'Work'){
        works.push(item);
        res.redirect("/Work")
    }
    else{
    

    items.push(item);
    res.redirect("/")}
})
app.listen(3000,()=>{
    console.log("This is running on port 3000");
})

