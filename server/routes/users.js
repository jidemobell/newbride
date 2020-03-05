var express = require('express');
var router = express.Router();
const {passport} = require('../services/passport')
const Database = require('../db/index')


const pool = new Database().startPool()
const requireAuth = passport.authenticate('jwt', {session: false})

router.get('/dashboard', requireAuth, (req, res) => {
	let query = {
		text: `SELECT * from bridal_app.users WHERE id=$1`,
		values:  [req.user.id]
	}

	pool.query(query)
	.then(result => {
		const user = result.rows[0]
		res.status(200).json({ user })
	})
	.catch(err => res.status(500).json({ error: err.stack }))
	
})


module.exports = router;
