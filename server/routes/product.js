const express=require('express');
const routes=express.Router();
const multer = require('multer');
let Product=require("../models/Product");
const { model } = require('mongoose');

routes.use(express.json());

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

routes.route('/viewProductByName/:id').get((req,res) => {

    const productName = req.params.id;

    Product.findOne({ name: productName }, (err, product) => {
        if (err) {
            console.error("Error:", err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }
        return res.status(200).json(product);
    });

});

routes.route('/viewProductByUser/:id').get((req,res) => {

    const productName = req.params.id;

    Product.findOne({ addUser: productName }, (err, product) => {
        if (err) {
            console.error("Error:", err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }
        return res.status(200).json(product);
    });

});

routes.route('/addProduct').post(upload.single('image'),(req, res) => {

    try {

        console.log("Method Called");
        let imageURL = '';

        // Check if a file was uploaded
        if (req.file) {
            imageURL = `/uploads/${req.file.filename}`; // Assuming 'uploads' is accessible in frontend
        }

        const newProduct = new productModel({
            productName: req.body.productName,
            description: req.body.description,
            image: imageURL, // Store the image URL if uploaded
            addUser: req.body.addUser
        });

        const savedProduct = newProduct.save();
        res.json(savedProduct); // Send the saved product object as a response
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }

})

module.exports=routes;