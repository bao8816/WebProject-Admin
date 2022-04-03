const products = require('../models/Product');
const { multipleMongooseToObject } = require('../../util/mongoose');

class AdminController {
    //GET "/"
    home(req, res) {
        res.render('home', {layout: 'home-layout'})
    };

    //GET "/upload"
    upload(req, res) {
        res.render('upload', {layout: 'upload-layout'})
    };

    //GET "/dashboard"
    dashboard(req, res) {
        res.render('dashboard', {layout: 'dashboard-layout'})
    };

    //GET "/profile"
    profile(req, res) {
        res.render('profile', {layout: 'profile-layout'})
    };

    //GET "/login"
    login(req, res) {
        res.render('login', {layout: 'iden-layout'})
    };

    //GET "/signup"
    signup(req, res) {
        res.render('signup', {layout: 'iden-layout'})
    };
};

module.exports = new AdminController;
