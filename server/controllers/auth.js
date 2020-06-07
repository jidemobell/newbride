const bcrypt = require('bcryptjs')
const Database = require('../db/index.js')

const { generateToken } = require('../helper/helpers')



const adminLogin = (req, res) => {
	const user = res.req.user
	res.json({
		success: true,
		user: res.req.user,
		token: generateToken(res.req.user)
	})
}



const registerAdmin = (req, res) => {
	console.log('registering......')
		const { username, password, role_type } = req.body
		
		bcrypt.hash(password, 10)
		.then(hash => {
			let pool = Database.startPool()
			console.log('password', password)
			console.log('hashed', hash)
			let query = {
				text: `INSERT INTO app.users (username, password, role_type) VALUES ($1, $2, $3)`,
				values: [username, hash, role_type]
			}
			pool.query(query, (err, result) => {
				if(err) res.status(500).json({ error: error })
				res.status(200).send(result.res)
			}) 
		})
		.catch(error => res.status(500).json(error.stack));
}



logoutUser = (req, res) => {
	
}

module.exports = {
	adminLogin,
	registerAdmin
}
