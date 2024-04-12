const express=require('express');
const routes=express.Router()

let Review=require("../models/Review");
const { model } = require('mongoose');

routes.use(express.json());

////// add review ................................../////

routes.route('/reviewAdd').post((req,res)=>{

    const{review,reviewUser,productID}=req.body;

    const productsRieview=new Review({
        review,
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

routes.route('').get((req,res)=>{
    Review.find().then((reviews)=>{
        res.json(reviews)
    }).catch((error)=>{
        console.log("review get error:",error);
    })
});

////// get id reviews .........................../////

routes.route('/reviewUnque/:id').get((req,res)=>{
    console.log("herrrrrrrr")
    let id=req.query.id;
   
    try {
        console.log("inside")

        // Find the review by its ID
        // const review = await Review.findById(id);

        const review = 'adfasfad'; 
        if (!review) {
            // If review is not found, send 404 Not Found response
            return res.status(404).json({ error: 'Review not found' });
        }

        // If review is found, send it back as JSON response
        res.status(200).json(review);
    } catch (error) {
        // Handle any errors
        console.error('Error finding review by ID:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports=routes;