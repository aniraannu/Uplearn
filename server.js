const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const auth = require('./server/routes/auth');
const protectedT = require('./server/routes/protectedT');

//Enviroment variable
dotenv.config();

const app = express();

//Middleware for incoming JSON data
app.use(express.json());

//Defined mongoURI
const mongoURI = process.env.MONGO_URI;

//Routes
app.use('/server/routes/auth.js', auth);
app.use('/server/routes/protectedT.js', protectedT);

//Connect to MongoDB
mongoose.connect(mongoURI)
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});