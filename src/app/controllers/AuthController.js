const Admin_account = require('../models/Admin_account');
const Admin_profile = require('../models/Admin_profile');
const bcrypt = require('bcryptjs');
const { multipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');

class AuthController {
    show_login(req, res) {
        res.render('login', {layout: 'iden-layout'})

    }

    show_login_error(req, res) {
        res.render('login', {
            layout: 'iden-layout',
            error: 'Email or password is incorrect!'
        })
    }

    show_signup(req, res) {
        res.render('signup', {layout: 'iden-layout'})
    }

    logout (req, res) {
        req.logout();
        res.redirect('/');
    }

    signup (req, res, next) {
        const { username, password } = req.body;
        Admin_account.findOne({ email: username })
            .then(user => {
                if (user) {
                    return res.render('signup', {
                        layout: 'iden-layout',
                        error: 'Email already exists!'
                    })
                }
                bcrypt.hash(password, 10, (err, hash) => {
                    if (err) {
                        return next(err);
                    }
                    const newUser = new Admin_account({
                        email: username,
                        password: hash
                    });
                    newUser.save()
                        .then(() => {
                            res.redirect('/information');
                        })
                        .catch(err => {
                            next(err);
                        })

                    // const newProfile = new Admin_profile({
                    //     email: username,
                    //     name: '',
                    //     birth: '',
                    //     gender: '',
                    //     phone: '',
                    //     address: ''
                    // });
                    // newProfile.save()
                })
            })
    }

    //GET '/information'
    show_information_form(req, res) {
        res.render('information-form', {layout: 'iden-layout'})
    }

    //PUT '/information'
    information(req, res, next) {
        const newProfile = new Admin_profile({
            email: req.body.email,
            name: req.body.name,
            birth: req.body.birth,
            gender: req.body.gender,
            phone: req.body.phone,
            address: req.body.address,
            image: req.body.image,
        })
        newProfile.save()
            .then(() => {
                res.redirect('/login');
            })
            .catch(err => {
                next(err);
            })
        }

}

module.exports = new AuthController
