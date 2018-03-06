var dept=require('../model/dept');

exports.add=(req,res)=>{
    var d=new dept();

    d.deptName=req.body.deptName;
    //d.isDel=false;

    d.save().then((docs)=>{
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

    dept.findOneAndUpdate({_id:id,isDel:false},{
        $set:{
            deptName:req.body.deptName
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

    dept.findOne({_id:id,isDel:false}).then((docs)=>{
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
    dept.find({isDel:false}).then((docs)=>{
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

    dept.findOne({_id:id,isDel:false}).then((docs)=>{

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