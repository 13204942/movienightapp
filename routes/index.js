var express = require('express');
var router = express.Router();
var request = require('request');

//API variables
var key = 'apikey=0df993c66c0c636e29ecbb5344252a4a';
var apiUrl = 'http://api.douban.com/v2/movie/'

/* GET home page. */
router.get('/', function(req, res, next) {

	var topMovie = apiUrl + 'weekly?' + key;

	request(topMovie, function (error, response, body) {
	  if (!error && response.statusCode == 200) {
	    //console.log(body) // Print the google web page.
	    //console.log(body);
	    res.render('index', { movies: JSON.parse(body) });
	    //res.send(body);
	  } else {
	  	res.status(500).send('Something is wrong with the API !');
	  }
	});
  //res.render('index', { title: 'Express' });
});

module.exports = router;
