var mongoose=require('../db/db');

var Semp=mongoose.Schema({
    empName:{
        type:String,
    },
    designation:{
        type:String
    },
    salary:{
        type:Number
    },
    gender:{
        type:String
    },
    hobby:{
        type:Array
    },
    deptId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:['dept']
    },
    isDel:{
        type:Boolean,
        default:false
    }
})

var emp=mongoose.model("emp",Semp);

module.exports=emp;