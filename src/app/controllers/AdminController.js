const products = require('../models/Product');
const { multipleMongooseToObject } = require('../../util/mongoose');
const List_oders=require('../models/List_oder');
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
        res.render('dashboard-customer', {layout:'dashboard-layout'})
    }

    show_order(req,res,next){
         
        List_oders.find({})
        .then(list_oders=>res.render('dashboard-order', {layout:'dashboard-layout'}))
        .catch(next)          
      }
};

module.exports = new AdminController;
