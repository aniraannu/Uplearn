const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    title: { 
        type: String,
        required: true },

        description: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        reviews: [{
            type: Schema.Types.ObjectId, ref: 'Review'
        }],
        createdAt: {
            type: Date,
            default: Date.now
        }
});

module.exports = mongoose.model('Course', courseSchema);