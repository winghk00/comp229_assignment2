var express = require('express');
var router = express.Router();
var apiRouter = require('./api');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ message: "Welcome to DressStore application." });
  //res.render('index', {data : { message: 'Welcome to DressStore application.' }});
});

router.use('/api', apiRouter)

module.exports = router;
