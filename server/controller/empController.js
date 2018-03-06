var emp=require('../model/emp');

exports.add=(req,res)=>{
    var e=new emp();

    e.empName=req.body.empName;
    e.designation=req.body.designation;
    e.salary=req.body.salary;
    e.gender=req.body.gender;
    e.hobby=req.body.hobby;

    e.save().then((docs)=>{
        res.status(200).json(docs);
    },(err)=>{
        res.status(404).json(err);
    }).catch((err)=>{
        res.status(404).json(err);
    })
}

exports.upd=(req,res)=>{
    var id=req.params.id;

    if(id=="")
    {
        return res.status(404).json("ID is not define");
    }

    emp.findOneAndUpdate({_id:id,isDel:false},{
        $set:{
            empName:req.body.empName,
            designation:req.body.designation,
            salary:req.body.salary,
            gender:req.body.gender,
            hobby:req.body.hobby
        }
    }).then((docs)=>{
        if(!docs)
        {
            return res.status(404).json('Not found');
        }

        res.status(200).json(docs + " Sucess");
    },(err)=>{
        res.status(404).json(err);
    }).catch((err)=>{
        res.status(404).json(err);
    })
}

exports.del=(req,res)=>{
    var id=req.params.id;

    if(id=="")
    {
        return res.status(404).json("ID is not define");
    }

    emp.findOne({_id:id,isDel:false}).then((docs)=>{
        //res.status(200).json(docs);

        if(!docs)
        {
            return res.status(404).json('Record not found');
        }

        dept.findOneAndUpdate({_id:id},{
            $set:{
                isDel:true
            }
        }).then((docs)=>{
            res.status(200).json(docs + "Sccess");
        },(err)=>{
            res.status(404).json(err);
        }).catch((err)=>{
            res.status(404).json(err);
        })

    },(err)=>{
        res.status(404).json(err);
    }).catch((err)=>{
        res.status(404).json(err);
    })
}

exports.getAll=(req,res)=>{
    emp.find({isDel:false}).then((docs)=>{
        if(!docs)
        {
            return res.status(404).json('Not found');
        }

        res.status(200).json(docs);
    },(err)=>{
        res.status(404).json(err);
    }).catch((err)=>{
        res.status(404).json(err);
    })
}

exports.getOne=(req,res)=>{
    var id=req.params.id;

    if(id=="")
    {
        return res.status(404).json("ID is not define");
    }

    emp.findOne({_id:id,isDel:false}).then((docs)=>{

        if(!docs)
        {
            return res.status(404).json('Not found');
        }
        res.status(200).json(docs);
    },(err)=>{
        res.status(404).json(err);
    }).catch((err)=>{
        res.status(404).json(err);
    })
}