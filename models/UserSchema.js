const Mongoose = require('mongoose');

const UserSchema = Mongoose.Schema({
    name: String,
    email: String,
    loggedHours: Array
});

module.exports = UserSchema;