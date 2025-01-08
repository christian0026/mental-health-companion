const express = require('express');
const { createCategory, getCategories } = require('../controllers/categoryController');
const router = express.Router();

//Route to create a new category
router.post('/', createCategory);
router.get('/', getCategories);

module.exports = router;