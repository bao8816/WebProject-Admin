const express = require('express');
const router = express.Router();
const myProfileController = require('../app/controllers/MyProfileController');

router.get('/', myProfileController.show_my_profile);

module.exports = router;
