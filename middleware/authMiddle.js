const jwt = require('jsonwebtoken');

//Middleware to verify the token
const verifyToken = (req, res, next) => {
    const token = req.headers('Authorization');
    if (!token) return res.status(401).json({ message: 'No token, denied authorization'});

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
       // decoded learnerId
        req.learner = decoded;
        next();
    } catch (err) {
        res.status(401).json({ message: 'Invalid token'});
    }
};

module.exports = { verifyToken };