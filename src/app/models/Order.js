const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Order = new Schema({
    email: {type: String, required: true, unique: true},
    products: [
        {
            product_id: {type: String, required: true},
            quantity: {type: Number, required: true},
        }
    ],
    price: { type: String },
    status: { type: Boolean, require: true },
    },
    { 
        timestamps: true 
    }
);

module.exports = mongoose.model('Order', Order);
 