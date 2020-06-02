var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	// res.render('index', { title: 'Express' });
	res.send('Welcome to the bridal app')
});


router.get('/hello', function(req, res, next) {
  res.json({message: "Hello there!"})
});
module.exports = router;
