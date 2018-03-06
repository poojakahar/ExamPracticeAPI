var express=require('express');
var bodyParser=require('body-parser');
var router=require('./rotuer/router');

var app=express();

app.use(bodyParser.json());

router.router(app);

app.listen(3000,()=>{
    console.log("Connected to 3000")
})