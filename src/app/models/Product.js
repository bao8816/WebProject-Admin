const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
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
    sold: Number,
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
    }
);

module.exports = mongoose.model('Product', Product);
