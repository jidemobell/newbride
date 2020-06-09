var express = require("express");
const router = express.Router();





const cloudinary = require("../controllers/cloudinary")

//fetch all uploaded images
// router.get("/fetchimages", (req, res) => fetchCloudinaryImagesFromDb(req, res));


//fetch updated uploaded files json details from
//clodinary just after uploading image using clodinary
//upload widget from front end
router.get("/getcloudinaryphotos", (req, res) => cloudinary.getImageFromCloudinaryAPI(req, res));

//list all cloudinary image details 
router.get("/listcloudinaryphotos", (req, res) => cloudinary.listCloudinaryImagesFromDB(req, res));

//attach an image to a page
router.post("/linktopage", (req, res) => cloudinary.attachImageTopage(req, res))

//remove an image from page
router.post("/unlink/frompage", (req, res) => cloudinary.removeImageFromPage(req, res))

//list al images on a page
router.post("/get/page/images", (req, res) => cloudinary.listImagesForAPage(req, res))

module.exports = router;
