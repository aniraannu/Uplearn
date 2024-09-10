//Import Mongoose
const { connect, connection } = require('mongoose');
//Connection string
const connectionString = 'mongodb://127.0.0.1:27017/eplatformDB';
//connect to MongoDB
connect(connectionString);
//Export connection
module.exports = connection;