class AdminController {    
    //GET "/"
    dashboard(req, res) {
        res.render('dashboard', {layout: 'dashboard-layout'})
    };
};

module.exports = new AdminController;
