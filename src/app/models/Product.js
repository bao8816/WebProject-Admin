const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Product = new Schema({
    name: String,
    description: String,
    image: String,
    price: Number,
    slug: { type: String, slug: 'name', unique: true },
});

module.exports = mongoose.model('Product', Product);
