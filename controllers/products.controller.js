const Product = require('../models/product.model');

// Get all products
exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err });
    }
}

exports.getProducts = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if(!product) {
            return res.status(404).json({ msg: 'Product not found' });
          }
          
          res.json(product);
    } catch (err) {
        res.status(500).json({ message: err });
    }
}