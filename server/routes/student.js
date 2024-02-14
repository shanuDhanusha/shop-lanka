const express =require("express");
const routes=express.Router();

let student=require('../models/Student.js'); // imports modules file 

//save data for document

routes.use(express.json());

routes.route('/add').post((req,res)=>{
   const{name,age,gender}=req.body

    const newStudent=new student({
        name,
        age,
        gender
    })

    newStudent.save().then(()=>{
        res.json("student Added")
    }).catch((error)=>{
        console.log("Error studen add:",error);
    })


});

// get studen data

routes.route('/').get((req,res)=>{

 student.find().then((student)=>{
    res.json(student)
 }).catch((error)=>{
    console.log("Error get student:",error)
 })


});

//update student

routes.route('/update/:id').put(async(req,res)=>{

  let studentId=req.params.id;
  const{age,name,gender}=req.body;

  const updateStudent={
    age,
    name,
    gender
  }

  const update=await student.findByIdAndUpdate(studentId,updateStudent).then(()=>{
    res.status(200).send({sta:"user update",user:updateStudent});
  }).catch((error)=>{
    console.log("Error update:",error);
  }) 

});

//delete student file

routes.route('/delete/:id').delete(async(req,res)=>{
  let userId=req.params.id;

      await student.findOneAndDelete(userId).then(()=>{
          res.status(200).send({state:"user deleted"});

      }).catch((error)=>{
        console.log("Error user delete :",error);
        res.status(500).send({state:"error ",err:error.message});
      })
});

// get data one user

routes.route('/userdata/:id').get(async(req,res)=>{
    let userId=req.params.id
    await student.findOne(userId).then((user)=>{
        res.status(200).send({state:"user data",user:user})
    }).catch((error)=>{
        console.log("Error user data",error.message)
        res.status(500).send({state:"user data error", error:error.message})
    })
})

module.exports=routes;
