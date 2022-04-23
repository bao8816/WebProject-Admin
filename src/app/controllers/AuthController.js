const Admin_account = require('../models/Admin_account');
const bcrypt = require('bcryptjs');
const { multipleMongooseToObject } = require('../../util/mongoose');

class AuthController {
    show_login(req, res) {
        res.render('login', {layout: 'iden-layout'})

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
                            res.redirect('/login');
                        })
                        .catch(err => {
                            next(err);
                        })
                })
            })
    }
}

module.exports = new AuthController
