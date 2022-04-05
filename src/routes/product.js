const express = require('express');
const router = express.Router();
const productController = require('../app/controllers/ProductController');

router.get('/upload-page', productController.show_upload);
router.post('/upload', productController.upload);
router.get('/', productController.show);

module.exports = router;
