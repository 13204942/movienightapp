var express = require('express');
var router = express.Router();
var request = require('request');

//API variables
var apiUrl = 'http://api.douban.com/v2/movie/'

/* GET users listing. */
router.get('/:id', function(req, res, next) {

	var id = req.params.id;

	var detailMovie = apiUrl + 'subject/' + id;

	request(detailMovie, function (error, response, body) {
	  if (!error && response.statusCode == 200) {
	    //console.log(body) // Print the google web page.
	    //console.log(body);
	    res.render('details', { movie: JSON.parse(body) });
	    //res.send(body);
	  } else {
	  	res.status(500).send('Oops ! Failed to request API data,');
	  }
	});

});

module.exports = router;
