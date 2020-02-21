const jwt = require('jsonwebtoken')
const bycrpt = require('bcrypt')

const Database = require('../db/index')

const pool = new Database().startPool()
const secret = process.env.SECRET || 'my secret'
var query;


const login = async (req, res) => {
	const { username, password } = req.body;
	if(!username || !password )
	return res.status(400).json({ error: 'Username or password is Empty' });
	
	query = {
		text: `SELECT username from pg_user WHERE username=$1`,
		values:  [username]
	}
  try {
		const result = await pool.query(query);
		if(result.rowCount === 0) 
		return res.status(401).json({ error: 'User does not exist' });			
		//match password
		const isMatch = await bycrpt.compare(password, result.password)
		if(!isMatch)
		return res
			 .status(401)
			 .json({error: 'the password is not correct'})
		//generate web token
		const payload = {
			id: result.id
		}
    const token = jwt.sign(payload, secret, { expiresIn: 60 * 60 * 24 })
		res.status(200).json({ token, user })
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
}


const adminLogin = async (req, res) => {
	const { username, password } = req.body;
	if(!username || !password )
	return res.status(400).json({ error: 'Username or password is Empty' });
	query = {
		text: `SELECT * from bridal_app.users WHERE username=$1`,
		values:  [username]
	}
	let query2 = {
		text: `SELECT * from bridal_app.users WHERE username=$1 and password = bridal_app.crypt($2, password)`,
		values:  [username, password]
	}
  try {
		const result = await pool.query(query);
		if(result.rowCount === 0) 
		return res.status(401).json({ error: 'User does not exist' });				
		//match password
		const isMatch = await pool.query(query2)
		if(isMatch.rowCount === 0)
		return res
			 .status(401)
			 .json({error: 'the password is not correct'})
		// generate web token
		const user = result.rows[0]
		const payload = {
			id:user.id
		}
    const token = jwt.sign(payload, secret, { expiresIn: 60 * 60 * 24 })
		res.status(200).json({ token, user })
	} catch (error) {
		res.status(500).json({ error: error.stack });
	}
}



const registerAdmin = async (req, res) => {
	const { username, password, role_type } = req.body
	query = {
		text: `INSERT INTO bridal_app.users (username, password, role_type) VALUES ($1, bridal_app.crypt($2, bridal_app.gen_salt('bf')), $3)`,
		values: [username, password, role_type]
	}
	try {
		const result = await pool.query(query)
		res.status(200).send(result.res)
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
}

module.exports = {
	login,
	adminLogin,
	registerAdmin
}
