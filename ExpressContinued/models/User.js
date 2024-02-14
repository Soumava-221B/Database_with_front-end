const mongoose = require('mongoose');

// create a structure of how you want the data to be stored
const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: String,
    email: {
        unique: true,
        type: String
    }

});

// give this structure a name ... it will be a model

const User = mongoose.model('User', userSchema);
module.exports = User;