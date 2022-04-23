const express = require('express');
const router = express.Router();
const adminController = require('../app/controllers/AdminController');

router.get('/profile', adminController.show_profile);
router.get('/dashboard-customer',adminController.show_customer);
router.get('/', adminController.dashboard);
router.get('/order', adminController.show_order)
module.exports = router;
