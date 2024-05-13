const express=require('express');
const routes=express.Router()

let Review=require("../models/Review");
const { model } = require('mongoose');

routes.use(express.json());

routes.route('/reviewAdd').post((req,res)=>{

    const{review,reviewCatagory,reviewUser,productID}=req.body;

    const productsRieview=new Review({
        review,
        reviewCatagory,
        reviewUser,
        productID
    })

    productsRieview.save().then(()=>{
        res.send("review added");
    }).catch((error)=>{
        console.log("Error review addded:",error)
    })

});


/////// get review.................................../////

routes.route('/reviewGet').get((req,res)=>{
    Review.find().then((reviews)=>{
        res.json(reviews)
    }).catch((error)=>{
        console.log("review get error:",error);
    })
});

/// update review.....................///

routes.route('/reviewUpdate').put(async(req,res)=>{

   let object=req.body;
   let id=object.data.reviewId;
   let update_review=object.data.review;
   let update_catagory=object.data.reviewCatagory;

    console.log("dsfsdfsdf",id )
    console.log("hiiii",update_review)
     
    
   const update=await Review.findByIdAndUpdate({ _id:id },{review:update_review,reviewCatagory:update_catagory},{new:true}).then(()=>{

    res.status(200).send({sta:"user update"});

  }).catch((error)=>{
    console.log("Error update:",error);
  }) 

});

///// delete review............////

routes.route('/reviewDelete').delete(async(req,res)=>{

   let id=req.body;

   await Review.findOneAndDelete({_id:id.id}).then(()=>{
    res.status(200).send({state:"review deleted"});
   }).catch((error)=>{
     console.log("Error Delete:",error)
   })

});

module.exports=routes;