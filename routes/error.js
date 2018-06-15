var createError = require('http-errors');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(300).send('Something broke!');
  //next(createError(300));
});

module.exports = router;
