const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Admin_profile = new Schema({
    email: {type: String, required: true},
    name: String,
    birth: String,
    gender: String,
    phone: { type: String, unique: true },
    address: String,
    slug: { type: String, slug: 'email', unique: true },
    image: String,
    },
    { 
        timestamps: true 
    }
);

module.exports = mongoose.model('Admin_profile', Admin_profile);
