const express = require('express');
const router = express.Router();
const productController = require('../app/controllers/ProductController');

router.get('/upload-page', productController.show_upload);
router.post('/upload', productController.upload);
router.put('/:id', productController.update);
router.delete('/:id', productController.delete);
router.get('/:slug', productController.show_update);
router.get('/', productController.show);

module.exports = router;
