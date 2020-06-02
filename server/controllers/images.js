const multer = require('multer')




//configure mutler destination and generated filename
const storage = multer.diskStorage({
	destination: function(req, file, callback){
		callback(null, './uploads')
	},
	filename: function(req, file, callback){
		callback(null, file.fieldname + '-' + Date.now()) //orginalName
	}
})

//filter allowed image types to be uploaded
const fileFilter = (req, file, callback) => {
	if(file.mimetype === 'image/jpeg' 
	|| file.mimetype === 'image/png'
	|| file.mimetype === 'image/jpg'){
		callback(null, true)
	}else{
		callback(null, false)
	}
}

 const upload = multer({
	storage: storage,
	fileFilter: fileFilter,
	limits: {
		fileSize: 1024 * 1024 * 5
	}
})


module.exports = {
	upload,
}