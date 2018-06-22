var express = require('express');
var router = express.Router();
var request = require('request');

//var key = 'apikey=0df993c66c0c636e29ecbb5344252a4a';
var apiUrl = 'https://api.douban.com/v2/movie/search?q='

//https://api.douban.com/v2/movie/search?q=张艺谋
//https://api.douban.com/v2/movie/search?start=30&q=张艺谋

/* GET movies listing. */
router.get('/', function(req, res, next) {
	
	//decode Chinese characters or Russian characters
  var movieParameter = encodeURIComponent(req.query['searchMovie']);
  //console.log(movieParameter);

  var searchMovie = apiUrl + movieParameter;

  	request(searchMovie, function (error, response, body) {

		  if (!error && response.statusCode == 200) {
		    res.render('search', { movies: JSON.parse(body) });
		  } else {
		  	res.status(500).send('Something is wrong with the API !');
		  }

	});
});

module.exports = router;
