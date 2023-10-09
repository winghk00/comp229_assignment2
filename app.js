var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Marketplace');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

var indexRouter = require('./routes/index');
//var products = require('./routes/products');
const productController = require('./controllers/products.controller');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// Listen on port 8080
app.listen(8080, () => console.log('Server is running on port 8080...'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
//app.use('/products', products);
// Get all products
app.get('/api/products', productController.getAllProducts);

// Get product by ID
app.get('/api/products/:id', productController.getProductById);

// Add new product
app.post('/api/products', productController.addProduct);

// Update product by ID
app.put('/api/products/:id', productController.updateProduct);

// Delete product by ID
app.delete('/api/products/:id', productController.deleteProduct);

// Delete all products
app.delete('/api/products', productController.deleteAllProducts);

// Find products by name
app.get('/api/products', productController.findProductsByName);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
