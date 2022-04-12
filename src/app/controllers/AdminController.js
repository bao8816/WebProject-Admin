const products = require('../models/Product');
const Admin_account = require('../models/Admin_account');
const { multipleMongooseToObject } = require('../../util/mongoose');

class AdminController {    
    //GET "/"
    dashboard(req, res) {
        res.render('dashboard', {layout: 'dashboard-layout'})
    };

    //GET "/profile"
    profile(req, res) {
        res.render('profile', {layout: 'profile-layout'})
    };

    //GET "/dashboard-customer"
    show_customer(req,res){
        res.render('dashboard-customer', {layout:'dashboardcustomer-layout'})
    }
};

module.exports = new AdminController;
