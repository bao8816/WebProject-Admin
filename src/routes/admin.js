const express = require('express');
const router = express.Router();
const adminController = require('../app/controllers/AdminController');

router.get('/profile', adminController.profile);
router.get('/dashboard-customer',adminController.show_customer);
router.get('/', adminController.dashboard);
router.get('/oder',adminController.oder_list)
module.exports = router;
