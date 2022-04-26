const express = require('express');
const router = express.Router();
const profilesController = require('../app/controllers/ProfilesController');

router.get('/male-ad-filter', profilesController.male_ad_filter)
router.get('/female-ad-filter', profilesController.female_ad_filter)
router.get('/male-cus-filter', profilesController.male_cus_filter)
router.get('/female-cus-filter', profilesController.female_cus_filter)

router.get('/email-ad-sort', profilesController.email_ad_sort)
router.get('/name-ad-sort', profilesController.name_ad_sort)
router.get('/email-cus-sort', profilesController.email_cus_sort)
router.get('/name-cus-sort', profilesController.name_cus_sort)

router.get('/:slug', profilesController.show_each);
router.get('/', profilesController.show_profiles);

module.exports = router;
