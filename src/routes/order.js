const express = require('express');
const router = express.Router();
const orderController = require('../app/controllers/OrderController');

router.get('/:id', orderController.show_each);
router.get('/', orderController.show_order);

module.exports = router;