const Order = require('../models/Order');
const Product = require('../models/Product');
const Customer_profile = require('../models/Customer_profile');
const { multipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');


class AdminController {    
    //GET "/"
    dashboard(req, res) {
        
        Order.find({})
            .sort({ createdAt: -1 })
            .then(orders => {
                Customer_profile.find({})
                    .sort({ createdAt: -1 })
                    .then(profiles => {
                        res.render('dashboard', {
                            layout: 'dashboard-layout',
                            orders: multipleMongooseToObject(orders),
                            profiles: multipleMongooseToObject(profiles),
                            recent_orders: orders.slice(0, 3),
                            recent_profiles: profiles.slice(0, 3),
                            count_order: orders.length,
                            count_profile: profiles.length
                        });
                        
                    })
                    .catch(err => {
                        console.log(err);
                    });
            })
            .catch(err => {
                console.log(err);
            });

    };
};

module.exports = new AdminController;
