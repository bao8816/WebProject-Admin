const express = require('express');
const router = express.Router();
const profilesController = require('../app/controllers/ProfilesController');


router.get('/:slug', profilesController.show_each);
router.get('/', profilesController.show_profiles);

module.exports = router;
