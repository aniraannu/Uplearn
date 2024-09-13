//Import Mongoose
const mongoose = require("mongoose");
//Connection string
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/edu_learn_DB"
);
//Export connection
module.exports = mongoose.connection;
