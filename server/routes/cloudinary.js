var express = require("express");
const router = express.Router();





const {fetchCloudinaryImagesFromDb,getImageFromCloudinaryAPI, listCloudinaryImagesFromDB} = require("../controllers/cloudinary")

//fetch all uploaded images
// router.get("/fetchimages", (req, res) => fetchCloudinaryImagesFromDb(req, res));


//fetch updated uploaded files json details from
//clodinary just after uploading image using clodinary
//upload widget from front end
router.get("/getcloudinaryphotos", (req, res) => getImageFromCloudinaryAPI(req, res));


//list all cloudinary image details 
router.get("/listcloudinaryphotos", (req, res) => listCloudinaryImagesFromDB(req, res));

module.exports = router;
