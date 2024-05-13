const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');

const studentRoutes = require("./routes/student.js");
const reviewRoutes = require("./routes/review.js");
const productRoutes = require("./routes/product.js");

app.use(cors());
app.use(express.static(path.join(__dirname, 'uploads')));

app.use('/student', studentRoutes);
app.use('/review', reviewRoutes);
app.use('/product', productRoutes);


app.listen(5000, () => console.log('Server listening on port 5000'));

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://deshan:dha%40201233@shops.bvhxsev.mongodb.net/shops', { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected', () => console.log('Connected to MongoDB!'));

mongoose.connection.on('error', (error) => console.error('Error connecting to MongoDB:', error));
