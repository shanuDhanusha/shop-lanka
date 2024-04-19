const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const studentRoutes=require("./routes/student.js");
const reviewRoutes=require("./routes/review.js");

app.listen(5000, () => console.log('Server listening on port 5000'));
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://deshan:dha%40201233@shops.bvhxsev.mongodb.net/shops', { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected', () => console.log('Connected to MongoDB!'));//conect momgo 

app.use('/student',studentRoutes);//use student route file //student==. is fontend call file name 
app.use('/review',reviewRoutes);

mongoose.connection.on('error', (error) => console.error('Error connecting to MongoDB:', error))
