const Admin_profile = require('../models/Admin_profile');
const Admin_account = require('../models/Admin_account');
const { multipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');
const bcrypt = require('bcryptjs/dist/bcrypt');

class MyProfileController {
    //GET "/profile"
    show_my_profile(req, res) {
        if (!req.user) {
            res.redirect('/login');
        }
        else {
            Admin_profile.findOne({email: req.user.email})
                .then(profile => {
                    res.render('my-profile/profile', {
                        layout: 'my-profile-layout',
                        profile: mongooseToObject(profile)
                    });
                })
        }
    };

    //GET "/profile/update-profile"
    show_update_profile(req, res) {
        if (!req.user) {
            res.redirect('/login');
        }
        else {
            Admin_profile.findOne({email: req.user.email})
                .then(profile => {
                    res.render('my-profile/update', {
                        layout: 'my-profile-layout',
                        profile: mongooseToObject(profile)
                    });
                })
        }
    };

    //PUT "/profile/:id"
    update_profile(req, res, next) {
        if (!req.user) {
            res.redirect('/login');
        }
        else {
            Admin_profile.updateOne({_id: req.params.id}, req.body)
                .then(() => {
                    res.redirect('/profile');
                })
                .catch(next);
            }
        }

    //GET "/profile/change-password"
    show_change_password(req, res) {
        if (!req.user) {
            res.redirect('/login');
        }
        else {
            res.render('my-profile/change-password', {
                layout: 'my-profile-layout'
            });
        }
    };

    //PUT "/profile/change-password"
    change_password(req, res, next) {
        if (!req.user) {
            res.redirect('/login');
        }
        else {
            Admin_account.findOne({email: req.user.email})
                .then(account => {
                    if (bcrypt.compareSync(req.body.old_password, account.password)) {
                        bcrypt.hash(req.body.new_password, 10, (err, hash) => {
                            if (err) {
                                return next(err);
                            }
                            Admin_account.updateOne({_id: account._id}, {password: hash})
                                .then(() => {
                                    res.redirect('/profile');
                                })
                                .catch(next);
                        })
                    }
                    else {
                        res.redirect('/profile/change-password');
                    }
                })
        }
    };

}

module.exports = new MyProfileController;
