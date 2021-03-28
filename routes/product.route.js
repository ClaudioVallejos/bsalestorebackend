const express = require('express');
const router = express.Router();

const { showAllProducts, showOneProduct, searchProduct } = require('../controllers/product.controller');

router.route('/').get(showAllProducts);
router.route('/product/:id').get(showOneProduct);
router.route('/product/search/:inputText').get(searchProduct);

module.exports = router;