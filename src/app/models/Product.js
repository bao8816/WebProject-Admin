const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseAlgolia = require('mongoose-algolia');
const config = require('../../config/index.js');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Product = new Schema({
    name: {type: String, required: true},
    description: String,
    image: String,
    price: {type: Number, required: true},
    slug: { type: String, slug: 'name', unique: true },
    category: String,
    inventory: Number,
    sold: {type: Number, default: 0},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
    }
);


Product.plugin(mongooseAlgolia, {
    appId: config.APP_ID,
    apiKey: config.API_KEY,
    indexName: 'products',
    selector: '-author',
});

const Model = mongoose.model('Product', Product);

Model.SyncToAlgolia();
Model.SetAlgoliaSettings({
    searchableAttributes: ['name', 'category'],
})

module.exports = mongoose.model('Product', Product);
