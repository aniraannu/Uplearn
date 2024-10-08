const { Schema, model } = require("mongoose");
// const bcrypt = require("bcrypt");

// //Method to compare the password for login
// userSchema.methods.comparePassword = function (password) {
//   return bcrypt.compare(password, this.password);
// };


//Review Schema
const reviewSchema = new Schema({
  courseId: {
    type: Schema.Types.ObjectId,
    ref: 'Course',
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
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

//Export all models
const Review = model("Review", reviewSchema);

module.exports = Review;
