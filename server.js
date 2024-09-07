const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./routes/authroute');
const protectedT = require('./routes/protectedT');

//Enviroment variable
dotenv.config();

const app = express();

//Middleware for incoming JSON data
app.use(express.json());

//Routes
app.use('/api/auth', authRoute);
app.use('/api/protected', protectedT);

//Connect to MongoDB
mongoose.connect(process.env.MONGO_URL)
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