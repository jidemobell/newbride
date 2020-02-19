var express = require('express');
var router = express.Router();

const Database = require('../db/index')
const pool = new Database().startPool()

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/admin', function(req, res){
	// const { username, passwqord } = req.body
	
})


module.exports = router;
