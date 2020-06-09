
const { upload, mutlerUploader } = require("../controllers/mutler");

//mutler image upload route
router.post("/uploadmutler", upload.single("imageData"), (req, res) => mutlerUploader(req, res));