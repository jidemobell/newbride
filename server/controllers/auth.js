const bcrypt = require('bcryptjs')
const Database = require('../db/index.js')
const queries = require('../constants/queryConstants')

const { generateToken } = require('../helper/helpers')



const adminLogin = (req, res) => {
	res.json({
		success: true,
		user: res.req.user,
		token: generateToken(res.req.user)
	})
}



const registerAdmin = (req, res) => {
		const { username, password, role_type } = req.body
		
		bcrypt.hash(password, 10)
		.then(hash => {
			let pool = Database.startPool()
			let query = {
				text: queries.ADMIN_REGISTER_QUERY,
				values: [username, hash, role_type]
			}
			pool.query(query, (err, result) => {
				if(err) res.status(500).json({ error: error })
				res.status(200).send(result.res)
			}) 
		})
		.catch(error => res.status(500).json(error.stack));
}


module.exports = {
	adminLogin,
	registerAdmin
}
