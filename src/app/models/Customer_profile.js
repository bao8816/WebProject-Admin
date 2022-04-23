const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Customer_profile = new Schema({
    email: {type: String, required: true},
    name: {type: String, required: true},
    birth: Date,
    gender: String,
    phone: String,
    address: String,
    },
    { 
        timestamps: true 
    }
);

module.exports = mongoose.model('Customer_profile', Customer_profile);