const express = require("express");
const path = require("path");
const bodyparser = require("body-parser");
const session = require("express-session");
const{v4:uuidv4} = require("uuid");
const router = require("./views/router");
const nocache = require('nocache');

const app = express(); //for creating app variable.

const port = process.env.PORT||3001; //For creating Port variable.
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.set('view engine','ejs');
app.use(nocache());


//load static files
app.use('/static',express.static(path.join(__dirname,'public')));
app.use('/assets',express.static(path.join(__dirname,'public/assets')));

app.use(session({
    secret:uuidv4(),
    resave:false,
    saveUninitialized:true
}));

app.use('/route',router);

app.get('/',(req,res)=>{
    res.render('base',{title:"Login System"});
})

app.listen(port,()=>{console.log("Listnening to the server on http://localhost:3001")});