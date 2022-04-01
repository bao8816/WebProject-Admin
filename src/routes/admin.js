const express = require('express')
const router = express.Router()
const adminController = require('../app/controllers/AdminController')

router.use('/upload', adminController.upload)
router.use('/dashboard', adminController.dashboard)
router.use('/profile', adminController.profile)
router.use('/login', adminController.login)
router.use('/signup', adminController.signup)
router.use('/', adminController.home)

module.exports = router