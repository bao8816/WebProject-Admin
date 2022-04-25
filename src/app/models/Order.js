const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseAlgolia = require('mongoose-algolia');

const Order = new Schema({
    email: {type: String, required: true, unique: true, ref: 'Customer_profile'},
    products: [
        {
            product_id: {type: String, required: true, ref: 'Product'},
            quantity: {type: Number, required: true},
        }
    ],
    price: { type: Number },
    status: { type: Boolean, require: true },
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
    }
);

Order.pre('save', function(next) {
    this.price = this.products.reduce((acc, cur) => {
        return acc + cur.product_id.price * cur.quantity;
    }, 0);
    next();
});

Order.pre('update', function(next) {
    this.price = this.products.reduce((acc, cur) => {
        return acc + cur.product_id.price * cur.quantity;
    }, 0);
    next();
});

Order.plugin(mongooseAlgolia, {
    appId: 'VV3TFI93CX',
    apiKey: '4a0d45969d3b5e8f7f0866e1f4ba7fee',
    indexName: 'orders',
    selector: '-author',
    populate: {
        path: 'products.product_id',
    },
});

const Model = mongoose.model('Order', Order);
Model.SyncToAlgolia();
Model.SetAlgoliaSettings({
    searchableAttributes: ['email', 'products.product_id.name', 'products.product_id.category'],
})

module.exports = mongoose.model('Order', Order);
 