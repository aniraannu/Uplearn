const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const { Schema, model } = mongoose;

// Schema for user
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Hashing the password before saving the user
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  //Salt is making the password complex, it helps improve security.
  const complex = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, complex);
  next();
});

//Method to compare the password for login
userSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

// Course Schema
const courseSchema = new Schema({
  title: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  reviews: [{
    type: Schema.Types.ObjectId,
    ref: 'Review'
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

//Review Schema
const reviewSchema = new Schema({
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

//Export all models
const User = model("User", userSchema);
const Course = model("Course", courseSchema);
const Review = model("Review", reviewSchema);

module.exports = { User, Course, Review };
