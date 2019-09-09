const Mongoose = require('mongoose');

const UserSchema = Mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    loggedHours: {
        type: Array,
        require: true
    },
    submittedDate: {
        type: Date,
        required: true
    }
});

module.exports = UserSchema;