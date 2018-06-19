var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('this is search page');
  res.render('search');
});

module.exports = router;
