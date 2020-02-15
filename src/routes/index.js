const express = require('express')

const router = express.Router()


// ****welcome message*****
router.get('/', (req, res) => {
  res.status(200).send('welcome to bridals cms')
});


//****user logins ***/
router.get('/', (req, res) => {
	res.status(200)
})