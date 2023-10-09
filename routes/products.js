const express = require('express');
const router = express.Router();
const { getProducts } = require('../controllers/products.controller');

// GET all products
router.get('/', getProducts);
router.get('/:_id', userController.find)

// POST a new product
// DELETE a product
// UPDATE a product

module.exports = router;