const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseAlgolia = require('mongoose-algolia');
mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Product = new Schema({
    name: {type: String, required: true},
    description: String,
    image: String,
    price: Number,
    slug: { type: String, slug: 'name', unique: true },
    category: String,
    inventory: Number,
    sold: {type: Number, default: 0},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
    }
);


Product.plugin(mongooseAlgolia, {
    appId: 'VV3TFI93CX',
    apiKey: '4a0d45969d3b5e8f7f0866e1f4ba7fee', 
    indexName: 'products',
    selector: '-author',
});

const Model = mongoose.model('Product', Product);

Model.SyncToAlgolia();
Model.SetAlgoliaSettings({
    searchableAttributes: ['name', 'category'],
})

module.exports = mongoose.model('Product', Product);
