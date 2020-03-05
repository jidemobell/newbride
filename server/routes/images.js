var express = require('express');
const fs = require('fs')
var router = express.Router();
const { upload } = require('../controllers/images')

const Database = require('../db/index')

const pool = new Database().startPool()




router.post('/uploadmutler', upload.single('imageData'), (req, res, next) => {
	console.log("loading....")
		const { imageName } = req.body
		const { path } = req.file  //inspect
		// const img = {
		// 	contentType: req.file.mimetype,
		// 	image: fs.readFileSync(req.file.path).toString('base64')
		// }
    
		let query = {
			text: `INSERT INTO bridal_app.images (name,image_url) VALUES ($1, $2)`,
			values: [imageName, path]
		}	

		pool.query(query)
		.then((result) => {
			console.log(result)
			res.status(200).send(result)
		})
		.catch((err) => console.log(err))
})


router.get('/fetchimages', (req, res) => {
	let query = {
		text: `select * from bridal_app.images`,
	}	

	pool.query(query)
	.then((result) => {
		console.log(result)
		res.status(200).send(result.rows)
	})
	.catch((err) => console.log(err))
})


module.exports = router;