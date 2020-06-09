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



//middleware for mutler upload operation
const mutlerUploader = (req, res) => {
  const { imageName } = req.body;
  const { path } = req.file;
  let query = {
    text: `INSERT INTO app.images (name,image_url) VALUES ($1, $2)`,
    values: [imageName, path],
  };
  pool
    .query(query)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => console.log(err));
}


module.exports = {
	mutlerUploader,
	upload,
}