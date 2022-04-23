const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Admin_profile = new Schema({
    email: {type: String, required: true},
    name: String,
    birth: String,
    gender: String,
    phone: String,
    address: String,
    },
    { 
        timestamps: true 
    }
);

module.exports = mongoose.model('Admin_profile', Admin_profile);