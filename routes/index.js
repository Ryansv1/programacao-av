var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Wiki Home page');
});

router.get('/about', function(req, res, next) {
  res.send('about this wiki');
});

module.exports = router;
