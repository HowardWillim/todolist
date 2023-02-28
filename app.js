const express = require("express");
const bodyParser=require("body-parser");

const app=express();
app.set('view engine', 'ejs');

app.get("/",(req,res)=>{

    var today= new Date();
    var currentDay =today.getDay();
    var day="";
    var days={
        1:"Monday",
        2:"Tuesday",
        3:"Wednesday",
        4:"Thursday",
        5:"Friday",
        6:"Saturday",
        7:"Sunday"
    }

    day=days[currentDay];
    res.render("list",{kindOfDay:day})
})


app.listen(3000,()=>{
    console.log("This is running on port 3000");
})

