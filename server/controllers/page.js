const Database = require('../db/index')

const pool = new Database().startPool()


const getPage = (req, res) => {
  let query = {
		text: `SELECT * from bridal_app.pages WHERE id=$1`,
		values:  [req.param.id]
	}

	pool.query(query)
	.then(result => {
		const page = result.rows[0]
		res.status(200).json({ page })
	})
	.catch(err => res.status(500).json({ error: err.stack }))
}


const listPages = (req, res) => {
	let query = {
		text: `SELECT * from bridal_app.pages`,
	}

	pool.query(query)
	.then(result => {
		const pages = result.rows
		console.log('all the pages', pages)
		res.status(200).json(pages)
	})
	.catch(err => res.status(500).json({ error: err.stack }))
}

module.exports = {
	getPage,
	listPages
}