const Course = require('../models/course');

// Get all course
exports.getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find().populate('reviews');
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ message: 'Failed to find course', error });
    }
};

// Get a specific course by ID
exports.getCourseById = async (req, res) => {
    const { id } = req.params;

    try {
        const course = await Course.findById(id).populate({
            path: 'reviews',
            populate: {
                path: 'userId',
                select: 'name'
            }
        });
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }
        res.status(200).json(course);
    } catch (error) {
        res.status(500).json({ message: 'Failed to find course', error });
    }
};