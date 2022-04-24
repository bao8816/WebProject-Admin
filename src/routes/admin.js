const express = require('express');
const router = express.Router();
const adminController = require('../app/controllers/AdminController');

router.get('/profile', adminController.show_profile);
router.get('/', adminController.dashboard);

module.exports = router;
