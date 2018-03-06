var mongoose=require('../db/db');

var Sdept=mongoose.Schema({
    deptName:{
        type:String,
        unique:true
    },
    isDel:{
        type:Boolean,
        default:false
    }
})

var dept=mongoose.model("dept",Sdept);

module.exports=dept;