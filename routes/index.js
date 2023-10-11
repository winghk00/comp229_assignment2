var express = require('express');
var router = express.Router();
var apiRouter = require('./api');
var productController = require('../controllers/products.controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ message: "Welcome to DressStore application." });
  //res.render('index', {data : { message: 'Welcome to DressStore application.' }});
});

router.use('/api', apiRouter)

// Routes
// Get all products
router.get('/api/products', productController.getAllProducts);

// Get product by ID
router.get('/api/products/:id', productController.getProductById);

// Add new product
router.post('/api/products', productController.addProduct);

// Update product by ID
router.put('/api/products/:id', productController.updateProduct);

// Delete product by ID
router.delete('/api/products/:id', productController.deleteProduct);

// Delete all products
router.delete('/api/products', productController.deleteAllProducts);

module.exports = router;
