const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /.+\@.+\..+/ // Basic email validation
    },
    password: {
        type: String,
        required: true,
        minlength: 6 // Minimum password length
    },
}, { timestamps: true });

const User = mongoose.model('User ', userSchema);

module.exports = User;