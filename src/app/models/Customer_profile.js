const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseAlgolia = require('mongoose-algolia');

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
    appId: 'VV3TFI93CX',
    apiKey: '4a0d45969d3b5e8f7f0866e1f4ba7fee',
    indexName: 'customer_profiles',
    selector: '-author',
});

const Model = mongoose.model('Customer_profile', Customer_profile);
Model.SyncToAlgolia();
Model.SetAlgoliaSettings({
    searchableAttributes: ['email', 'name', 'phone', 'address', 'gender'],
})

module.exports = mongoose.model('Customer_profile', Customer_profile);