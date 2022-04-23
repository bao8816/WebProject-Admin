const Admin_profile = require('../models/Admin_profile');
const Customer_profile = require('../models/Customer_profile');
const { multipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');


class ProfileController {
    //GET "/dashboard-profiles"
    show_profiles(req, res, next) {
        
        Admin_profile.find({})
            .then(admin_profiles => {
                Customer_profile.find({})
                    .then(customer_profiles => {
                        res.render('profiles/dashboard-profiles', {
                            layout: 'profiles-layout',
                            admin_profiles: multipleMongooseToObject(admin_profiles),
                            customer_profiles: multipleMongooseToObject(customer_profiles)
                        });
                    })
                    .catch(err => {
                        next(err);
                    });
            })
    }

    //GET "/[profile-slug]"
    show_each(req, res, next) {
        Admin_profile.findOne({slug: req.params.slug})
            .then(admin_profile => {
                res.render('profiles/profile-detail', {
                    layout: 'profiles-layout',
                    profile: mongooseToObject(admin_profile)
                });
               
            })
            .catch(next);
        
        Customer_profile.findOne({slug: req.params.slug})
            .then(customer_profile => {
                res.render('profiles/profile-detail', {
                    layout: 'profiles-layout',
                    profile: mongooseToObject(customer_profile)
                });
            })
    }
}

module.exports = new ProfileController;
