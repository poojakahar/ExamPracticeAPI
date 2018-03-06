exports.router=(app)=>{
    var deptController=require('../controller/deptController');

    //dept
    app.get("/dept",deptController.getAll);
    app.get("/dept/:id",deptController.getOne);
    app.post("/dept",deptController.add);
    app.put("/dept/:id",deptController.upd);
    app.delete("/dept/:id",deptController.del);

    //emp
    app.get("/emp",deptController.getAll);
    app.get("/emp/:id",deptController.getOne);
    app.post("/emp",deptController.add);
    app.put("/emp/:id",deptController.upd);
    app.delete("/emp/:id",deptController.del);
}