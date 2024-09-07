const  express = require('express');
const router = express.Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Register new learner
router.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;
        let learner = await learner.findOne({ username });
        if (learner) return res.status(400).json({ message: 'User already exists'});

        learner = new User({ username, password});
        await learner.save();
        res.status(201).json({ message: 'User registered successfully'});
    } catch (err) {
        res.status(500).json({ message: 'Server error'});
    }
});

//Login learner and generate a token


