const List_order=require('../models/List_order');
class AdminController {    
    //GET "/"
    dashboard(req, res) {
        res.render('dashboard', {layout: 'dashboard-layout'})
    };

    //GET "/profile"
    show_profile(req, res) {
        res.render('my-profile/profile', {layout: 'my-profile-layout'})
    };

    show_order(req,res,next){
        
        res.render('dashboard-order', {layout:'order-layout',list_orders: List_order})
                      
      }
};

module.exports = new AdminController;
