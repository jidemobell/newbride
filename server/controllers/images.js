const multer = require('multer')





const storage = multer.diskStorage({
	destination: function(req, file, callback){
		callback(null, './uploads')
	},
	filename: function(req, file, callback){
		callback(null, file.fieldname + '-' + Date.now()) //orginalName
	}
})


const fileFilter = (req, file, callback) => {
	if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
		callback(null, true)
	}else{
		callback(null, false)
	}
}

 const upload = multer({
	storage: storage,
	// fileFilter: fileFilter,
	// limits: {
	// 	fileSize: 1024 * 1024 * 5
	// }
})

//  const uploadImage = async(req, res) => {
// 	console.log(req.body)
// 		const { imageName } = req.body
// 		const { imgData } = req.file.path  //inspect
		
// 	query = {
// 		text: `INSERT INTO bridal_app.images (name,image_url) VALUES ($1, $2)`,
// 		values: [imageName, imgData]
// 	}

// 	try {
// 		const result = await pool.query(query)
// 		res.status(200).send(result.res)
// 	} catch (error) {
// 		 next(error)
// 	}
// }

module.exports = {
	upload,
	// uploadImage
}