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
    },
    { 
        timestamps: true 
    }
);

module.exports = mongoose.model('Order', Order);
 