const Order = require('../models/Order');
const Product = require('../models/Product');
const Customer_profile = require('../models/Customer_profile');
const { multipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');

class OrderController {
    //GET "/dashboard-order"
    show_order(req, res, next) {
        if(!req.user) {
            res.redirect('/login');
        }
        else {
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

    //GET "/dashboard-order/[order-id]"
    show_each(req, res, next) {
        if(!req.user) {
            res.redirect('/login');
        }
        else {

            Order.findOne({slug: req.params.slug})
                .populate({
                    path: 'products.product_id',
                })
                .then(order => {
                    res.render('orders/order-detail', {
                        layout: 'order-layout',
                        order: mongooseToObject(order)
                    });
                    // res.json(order)
                })
                .catch(err => {
                    next(err);
                });
        }
    }

}

module.exports = new OrderController;
