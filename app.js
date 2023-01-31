const express = require("express");
const bodyParser = require("body-parser");
const date= require(__dirname + "/views/date.js")
//const request = require("request")

const app = express();
let items = [];
let workItems=[];
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"));

app.get("/", function(req,res){
    

    //if (currentDay === 6 || currentDay === 0 ){
        //day="weekend"
        //res.send("It's the weekend")
       // res.render('list', {kindOfDay:day})
    //}else{
       // day="weekday"
        //res.write("<h1>OOH!! Shucks it's not the weekend</h1>")
        //res.write("<h1>Boo! I have to work</h1>")
        // res.send()
    //Switch case example

    /* switch(currentDay){
        case 0:
        day="Sunday";
        break;
        case 1:
        day="Monday";
        break;
        case 2:
        day="Tuesday";
        break;
        case 3:
        day="Wednesday";
        break;
        case 4:
        day="Thursday";
        break;
        case 5:
        day="Friday";
        break;
        case 6:
        day="Saturday";
        break;
    default:
        console.log("Error: current is equal to" + currentDay);
    }*/
        let day= date.getDate();
        res.render('list', {listTitle:day , newListItems:items})
    
       
    
    
    //res.send("Hello")
})

app.post("/", function(req,res){
    console.log(req.body);
    let item= req.body.newItem;
    if (req.body.listButton === "Work"){
        workItems.push(item)
        res.redirect("/work")
    }else{
        items.push(item);
        res.redirect("/");
    }
    

})

app.get("/work" , function(req,res){
    res.render("list", {listTitle: "Work List", newListItems:workItems})
})

app.post("/work", function(req,res){
    let item=req.body.newItem;
    workItems.push(item);
    res.redirect("/work");

})

app.get("/about", function(req,res){
    res.render("about");
})

app.listen(3000, function(){
    console.log("Server is running on port 3000")
})