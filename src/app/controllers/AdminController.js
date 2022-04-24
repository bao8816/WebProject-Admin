class AdminController {    
    //GET "/"
    dashboard(req, res) {
        res.render('dashboard', {layout: 'dashboard-layout'})
    };

    //GET "/profile"
    show_profile(req, res) {
        res.render('my-profile/profile', {layout: 'my-profile-layout'})
    };
};

module.exports = new AdminController;
