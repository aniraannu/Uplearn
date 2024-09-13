const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    courseId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Course',
        required: true 
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    comment: {
        type: String,
        required: true,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;