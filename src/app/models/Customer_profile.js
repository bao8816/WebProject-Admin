const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseAlgolia = require('mongoose-algolia');
const config = require('../config/index.js');

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
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
    }
);

Customer_profile.plugin(mongooseAlgolia, {
    appId: config.APP_ID,
    apiKey: config.API_KEY,
    indexName: 'customer_profiles',
    selector: '-author',
});

const Model = mongoose.model('Customer_profile', Customer_profile);
Model.SyncToAlgolia();
Model.SetAlgoliaSettings({
    searchableAttributes: ['email', 'name', 'phone', 'address', 'gender'],
})

module.exports = mongoose.model('Customer_profile', Customer_profile);