require('dotenv').config()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

function generateToken(user){
	const payload = {sub:user.id}
	console.log(process.env.SECRET);
  return jwt.sign(payload, process.env.SECRET, { expiresIn: "7d" })	 
}

async function verifyPassword(password, data){
	 const match = await bcrypt.compare(password, data.password)
	 return match
}

module.exports = { generateToken, verifyPassword }