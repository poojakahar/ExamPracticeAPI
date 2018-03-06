var mongoose=require('mongoose');

mongoose.connect("mongodb://localhost:27017/ExamPractice").then((db)=>{
    console.log("Connected Sucess");
},(err)=>{
    console.log("Fail Connect: " + err);
}).catch((err)=>{
    console.log("Fail Connect: " + err);
})

module.exports=mongoose