const express = require('express');
const router = express.Router();
const myProfileController = require('../app/controllers/MyProfileController');

router.get('/update-profile', myProfileController.show_update_profile);
router.get('/change-password', myProfileController.show_change_password);
router.put('/change-password', myProfileController.change_password);
router.put('/:id', myProfileController.update_profile);
router.get('/', myProfileController.show_my_profile);

module.exports = router;
