const express = require('express');
const router = express.Router();
const adminController = require('../app/controllers/AdminController');

router.get('/profile', adminController.profile);
router.get('/login', adminController.login);
router.get('/signup', adminController.signup);
router.get('/dashboard-customer',adminController.show_customer);
router.get('/', adminController.dashboard);

module.exports = router;
