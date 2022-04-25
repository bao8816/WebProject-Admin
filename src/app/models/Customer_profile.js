const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Customer_profile = new Schema({
    email: {type: String, required: true},
    name: String,
    birth: Date,
    gender: String,
    phone: { type: String, unique: true },
    address: String,
    slug: { type: String, slug: 'email', unique: true },
    image: String,
    createdAt: {type: Date, default: Date.now, select: false},
    updatedAt: {type: Date, default: Date.now, select: false},
    }
);

module.exports = mongoose.model('Customer_profile', Customer_profile);