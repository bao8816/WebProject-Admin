const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Admin_account = require('../models/Admin_account');
const mongooseAlgolia = require('mongoose-algolia');
const config = require('../config');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Admin_profile = new Schema({
    email: {type: String, required: true, ref: 'Admin_account'},
    name: {type: String, required: true},
    birth: String,
    gender: String,
    phone: { type: String, unique: true },
    address: String,
    slug: { type: String, slug: 'email', unique: true },
    image: String,
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
    }
);

Admin_profile.plugin(mongooseAlgolia, {
    appId: config.APP_ID,
    apiKey: config.API_KEY,
    indexName: 'admin_profiles',
    selector: '-author',
});

const Model = mongoose.model('Admin_profile', Admin_profile);
Model.SyncToAlgolia();
Model.SetAlgoliaSettings({
    searchableAttributes: ['email', 'name', 'phone', 'address', 'gender'],
})

module.exports = mongoose.model('Admin_profile', Admin_profile);
