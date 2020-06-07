const Database = require('../db/index.js')

const pool = Database.startPool()

//get a user page
const getPage = (req, res) => {
  let query = {
		text: `SELECT * from app.pages WHERE id=$1`,
		values:  [req.param.id]
	}

	pool.query(query)
	.then(result => {
		const page = result.rows[0]
		res.status(200).json({ page })
	})
	.catch(err => res.status(500).json({ error: err.stack }))
}

//list all pages
const listPages = (req, res) => {
	let query = { text: `SELECT * from app.pages` }	
  pool.query(query)
	.then(result => {
		const pages = result.rows
		res.status(200).json(pages)
	})
	.catch(err => res.status(500).json({ error: err }))
}

module.exports = {
	getPage,
	listPages
}