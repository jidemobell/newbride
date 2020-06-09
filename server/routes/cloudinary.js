var express = require("express");
const router = express.Router();





const cloudinary = require("../controllers/cloudinary")



//fetch updated uploaded files json details from
//clodinary just after uploading image using clodinary
//upload widget from front end
router.post("/push/getcloudinaryphotos", (req, res) => cloudinary.getImageFromCloudinaryAPI(req, res));

//list all cloudinary image details 
router.get("/listcloudinaryphotos", (req, res) => cloudinary.listCloudinaryImagesFromDB(req, res));

//attach an image to a page
router.post("/linktopage", (req, res) => cloudinary.attachImageTopage(req, res))

//remove an image from page
router.post("/unlink/frompage", (req, res) => cloudinary.removeImageFromPage(req, res))

//list al images on a page
router.post("/get/page/images", (req, res) => cloudinary.listImagesForAPage(req, res))

//delete image from gallery
router.post("/delete/from/gallery", (req, res) => cloudinary.deleteImageFromGallery(req, res))

module.exports = router;
