const express = require('express');
const router = express.Router();
const adminController = require('../app/controllers/AdminController');

router.get('/upload', adminController.upload);
router.get('/dashboard', adminController.dashboard);
router.get('/profile', adminController.profile);
router.get('/login', adminController.login);
router.get('/signup', adminController.signup);
router.get('/dashboard-customer',adminController.edit);
router.get('/', adminController.home);

module.exports = router;
