const products = require('../models/Product');
const List_oders=require('../models/List_oder');
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

    show_order(req,res,next){
         
        List_oders.find({}).lean()
        .then(list_oders=>
            {
                list_oders=list_oders.map(List_oders=>List_oders)
                res.render('dashboard-order', {layout:'dashboard-layout',list_oders: list_oders})
            })
        
        .catch(next)          
      }
};

module.exports = new AdminController;
