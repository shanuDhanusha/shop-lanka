const express = require('express');
const app = express();

const studentRoutes=require("./routes/student.js");

app.listen(5000, () => console.log('Server listening on port 5000'));
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://deshan:dha%40201233@shops.bvhxsev.mongodb.net/shops', { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected', () => console.log('Connected to MongoDB!'));//conect momgo 

app.use('/student',studentRoutes);//use student route file //student==. is fontend call file name 

mongoose.connection.on('error', (error) => console.error('Error connecting to MongoDB:', error))
