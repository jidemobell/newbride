const express = require('express')
const router = express.Router() 

const { body, validationResult } = require('express-validator')
const { login, registerAdmin, adminLogin } = require('../controllers/auth')





const loginValidationCheck = [
	body('username').isLength({ min: 4 }).matches(/^[a-z]/i),
	body('password')
		.isLength({min: 8})
		// .matches(/^[\w ]+$/)
		// .matches(/\d/)
		// .matches(/[A-Z]/)
		.not()
		.matches(/\s/)
]


router.post('/login',loginValidationCheck, (req, res) => {
	const {username} = req.body
	const errors = validationResult(req)
	if(!errors.isEmpty()) {
		return res.status(422).json ({
			errors: errors.array()
		})
	}
  username === 'admin' ?  adminLogin(req, res) : login(req, res)
})


router.post('/admin/register',loginValidationCheck, (req, res) => {
	const errors = validationResult(req)
	if(!errors.isEmpty()) {
		return res.status(422).json ({
			errors: errors.array()
		})
	}
  registerAdmin(req, res)
})


module.exports = router