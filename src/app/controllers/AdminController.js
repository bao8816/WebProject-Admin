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

    // //GET "/login"
    // login(req, res) {
    //     res.render('login', {layout: 'iden-layout'})
    // };

    // //GET "/signup"
    // signup(req, res) {
    //     res.render('signup', {layout: 'iden-layout'})
    // };

    //GET "/dashboard-customer"
    show_customer(req,res){
        res.render('dashboard-customer', {layout:'dashboardcustomer-layout'})
    }

    // //POST "/signup"
    // signupr(req, res, next){
    //     var regExp = /^[A-Za-z][\w$.]+@[\w]+\.\w+$/;
    //     if (regExp.test(req.body.email) && (req.body.password == req.body.rpassword)) {
    //         Admin_account.find({email: req.body.email})
    //             .then(data => {
    //                 if (data[0] == undefined){
    //                     const account=new Admin_account(req.body);
    //                     account.save()
    //                         .then(()=> res.redirect('/'))
    //                         .catch(error=>{
    //                     });
    //                 } else {
    //                     res.render('signup', {layout: 'iden-layout',errors: 'Error! Email already exists!'})
    //                 }
    //             });
    //     }  else {
    //         res.render('signup', {layout: 'iden-layout',errors: 'Error! email is incorrect,can not register'})
    //     };
    // };

    // //POST "/login"
    // loginr(req, res, next){
    //     var regExp = /^[A-Za-z][\w$.]+@[\w]+\.\w+$/;
    //     if (regExp.test(req.body.email)) {
    //         Admin_account.find({email: req.body.email})
    //             .then(data => {
    //                 if (data[0]!=undefined){
    //                     if(data[0].email==req.body.email && data[0].password==req.body.password){
    //                         res.redirect('/')
    //                     } else  res.render('login', {layout: 'iden-layout',errors: 'Error! Email/Password is incorrect!'})
    //                 } else {
    //                     res.render('login', {layout: 'iden-layout',errors: 'Error! Unregistered email'})
    //                 }
    //             });
    //     }  else {
    //         res.render('login', {layout: 'iden-layout',errors: 'Error! email is incorrect'})
    //     };
    // };
};

module.exports = new AdminController;
