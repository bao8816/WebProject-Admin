const Order = require('../models/Order');
const { multipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');

class OrderController {
    show_order(req, res, next) {
        Order.find({})
            .then(orders => {
                res.render('orders/dashboard-order', {
                    layout: 'order-layout',
                    orders: multipleMongooseToObject(orders),
                    products: orders.products
                });
            })
            .catch(err => {
                next(err);
            });
    }

}

module.exports = new OrderController;
