const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
    createdAt: {type: Date, default: Date.now, select: false},
    updatedAt: {type: Date, default: Date.now, select: false},
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

module.exports = mongoose.model('Order', Order);
 