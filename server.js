const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const auth = require('./server/routes/auth');
const protectedT = require('./server/routes/protectedT');

//Enviroment variable
dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

//Middleware for incoming POST data
app.use(express.urlencoded({ extended: true }));
//Middleware for incoming JSON data
app.use(express.json());
app.use(routes);

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

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});