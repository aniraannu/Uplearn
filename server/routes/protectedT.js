// Protected tokens
const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/authMiddle');

// Routes for only authorized learners and users
router.get('/learner-content', verifyToken, (req, res) => {
    res.json({ message: 'Welcome! You have access to UpLearn!'});
});

module.exports = router;