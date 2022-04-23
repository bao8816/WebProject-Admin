const Admin_profile = require('../models/Admin_profile');
const Customer_profile = require('../models/Customer_profile');
const { multipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');

class ProfileController {
    //GET "/dashboard-profiles"
    show_profiles(req, res) {
        
        res.render('profiles/dashboard-profiles', {layout:'profiles-layout'})
        
    }
}

module.exports = new ProfileController;