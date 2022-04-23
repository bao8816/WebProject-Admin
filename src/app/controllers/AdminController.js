const products = require('../models/Product');
const { multipleMongooseToObject } = require('../../util/mongoose');

class AdminController {    
    //GET "/"
    dashboard(req, res) {
        res.render('dashboard', {layout: 'dashboard-layout'})
    };

    //GET "/profile"
    show_profile(req, res) {
        res.render('profile/profile', {layout: 'profile-layout'})
    };

    //GET "/dashboard-customer"
    show_customer(req,res){
        res.render('dashboard-customer', {layout:'dashboard-layout'})
    }

    show_order(req,res){
        res.render('dashboard-order', {layout:'dashboard-layout'})
    }
};

module.exports = new AdminController;
