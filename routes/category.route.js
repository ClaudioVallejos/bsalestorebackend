const express = require('express');
const router = express.Router();

const { showAllCategories, showOneCategory, showSpecificCategory } = require('../controllers/category.controller');


// entry points
router.route('/categories').get(showAllCategories);
router.route('/category/:id').get(showOneCategory);
router.route('/category/search/:inputText').get(showSpecificCategory);

module.exports = router;