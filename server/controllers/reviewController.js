const Review = require('../models/reviewModel');
const Course = require('../models/courseModel');

// Add new review
exports.addReview = async ( req, res) => {
    const { courseId, comment } = req.body;

    try{
        //Check if learner took the course
        const review = new Review({
            courseId, 
            //only if user has a login
            userId: req.user._id,
            comment
        });

        await review.save();

        //Update the course's new reviews
        await Course.findByIdAndUpdate(courseId, {
            $push: { reviews: review._id }
        });

        res.status(201).json({ message: 'Review added successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to add review', error });
    }
};

// Get rall the reviews for a specific course
exports.getCourseReviews = async (req,res) => {
    const { courseId } = req.params; 

    try{ 
        const reviews = await Review.find({ courseId }).populate('userId', 'user');
        res.status(200).json(reviews);
        } catch (error) {
        res.status(500).json({ message: 'Failed to get reviews', error });
    }
}