const Admin_profile = require('../models/Admin_profile');
const Customer_profile = require('../models/Customer_profile');
const { multipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');


class ProfileController {
    //GET "/dashboard-profiles"
    show_profiles(req, res, next) {
        if(!req.user) {
            res.redirect('/login');
        }
        else {
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
    }

    //GET "/[profile-slug]"
    show_each(req, res, next) {
        if(!req.user) {
            res.redirect('/login');
        }
        else{
            Admin_profile.findOne({email: req.params.slug})
                .then(admin_profile => {
                    res.render('profiles/profile-detail', {
                        layout: 'profiles-layout',
                        profile: mongooseToObject(admin_profile)
                    });
                
                })
                .catch(next);
            
            Customer_profile.findOne({email: req.params.slug})
                .then(customer_profile => {
                    res.render('profiles/profile-detail', {
                        layout: 'profiles-layout',
                        profile: mongooseToObject(customer_profile)
                    });
                })
                .catch(next);
        }
    }

    //GET "/dashboard-profiles/male-ad-filter"
    male_ad_filter(req, res, next) {
        if(!req.user) {
            res.redirect('/login');
        }
        else {
            Admin_profile.find({gender: 'Male'})
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
    }

    //GET "/dashboard-profiles/female-ad-filter"
    female_ad_filter(req, res, next) {
        if(!req.user) {
            res.redirect('/login');
        }
        else {
            Admin_profile.find({gender: 'Female'})
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
    }

    //GET "/dashboard-profiles/male-cus-filter"
    male_cus_filter(req, res, next) {
        if(!req.user) {
            res.redirect('/login');
        }
        else {
            Admin_profile.find({})
                .then(admin_profiles => {
                    Customer_profile.find({gender: 'Male'})
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
    }

    //GET "/dashboard-profiles/female-cus-filter"
    female_cus_filter(req, res, next) {
        if(!req.user) {
            res.redirect('/login');
        }
        else {
            Admin_profile.find({})
                .then(admin_profiles => {
                    Customer_profile.find({gender: 'Female'})
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
    }

    //GET "/dashboard-profiles/email-ad-sort"
    email_ad_sort(req, res, next) {
        if(!req.user) {
            res.redirect('/login');
        }
        else {
            Admin_profile.find({})
                .sort({email: 1})
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
    }

    //GET "/dashboard-profiles/name-ad-sort"
    name_ad_sort(req, res, next) {
        if(!req.user) {
            res.redirect('/login');
        }
        else {
            Admin_profile.find({})
                .sort({name: 1})
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
    }

    //GET "/dashboard-profiles/email-cus-sort"
    email_cus_sort(req, res, next) {
        if(!req.user) {
            res.redirect('/login');
        }
        else {
            Admin_profile.find({})
                .then(admin_profiles => {
                    Customer_profile.find({})
                        .sort({email: 1})
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
    }

    //GET "/dashboard-profiles/name-cus-sort"
    name_cus_sort(req, res, next) {
        if(!req.user) {
            res.redirect('/login');
        }
        else {
            Admin_profile.find({})
                .then(admin_profiles => {
                    Customer_profile.find({})
                        .sort({name: 1})
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
    }

}

module.exports = new ProfileController;
