const jwt = require('jsonwebtoken')
const bycrpt = require('bcrypt')

const queryHelper = require('./util/index')
const pool = require('./db/index')


const secret = process.env.SECRET || 'my secret'
var query;


const login = async (req, res) => {
	const { username, password } = req.body;
	if(!username || !password )
	return res.status(400).json({ error: 'Username or password is Empty' });
	
	query = `SELECT * FROM users WHERE username=${username}`;
	/**
	 * if user does not exist redirect ti signup
	 */
  try {
		const result = await pool.query(query);
		
		//if no such data is returned
		if(result.rowCount === 0) 
		return res.status(401).json({ error: 'Username or password invalid' });
				
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

module.exports = login;
