const express = require('express');
const router = express.Router();
const productController = require('../app/controllers/ProductController');

router.get('/date-sort', productController.date_sort);
router.get('/price-sort', productController.price_sort);
router.get('/name-sort', productController.name_sort);

router.get('/burger-filter', productController.burger_filter);
router.get('/drink-filter', productController.drink_filter);
router.get('/snack-filter', productController.snack_filter);

router.get('/upload-page', productController.show_upload);
router.post('/upload', productController.upload);
router.put('/:id', productController.update);
router.delete('/:id', productController.delete);
router.get('/:slug', productController.show_update);

router.get('/', productController.show);

module.exports = router;
