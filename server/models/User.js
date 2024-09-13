// models for users
const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

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

const User = model("User", userSchema);
module.exports = User;
