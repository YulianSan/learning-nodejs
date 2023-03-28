const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    deleted: {
        require: false,
        type: Date,
    },
    
},{timestamps: true});

const User = mongoose.model('User', userSchema);

module.exports = User;