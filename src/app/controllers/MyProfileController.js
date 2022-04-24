const Admin_profile = require('../models/Admin_profile');
const Admin_account = require('../models/Admin_account');
const { multipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');

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
}

module.exports = new MyProfileController;
