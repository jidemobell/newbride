require("dotenv").config();
const {
  CLOUDINARY_CLOUDNAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
} = process.env;

var express = require("express");
const router = express.Router();
const cloudinary = require("cloudinary");

const { upload } = require("../controllers/images");
const Database = require("../db/index.js");
const pool = Database.startPool();

//configure cloudinary, move to a service later
cloudinary.config({
  cloud_name: CLOUDINARY_CLOUDNAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

//mutler image upload route
router.post("/uploadmutler", upload.single("imageData"), (req, res, next) => {
  console.log("loading....");
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
});

//fetch all uploaded images
router.get("/fetchimages", (req, res) => {
  let query = {
    text: `select * from app.images`,
  };

  pool
    .query(query)
    .then((result) => {
      res.status(200).send(result.rows);
    })
    .catch((err) => console.log(err));
});


//fetch updated uploaded files json details from
//clodinary just after uploading image using clodinary
//upload widget from front end
router.get("/getcloudinaryphotos", (req, res) => {
  cloudinary.v2.api.resources(
    {
      type: "upload",
      prefix: "prinmia/",
    },
    (error, result) => {
      if (error) console.log(error);
      const data = result.resources;
      async function updateClodinaryPhotos() {
        for (let [i, photo] of data.entries()) {
          const { public_id, url, created_at } = photo;
          let query = {
            text: `INSERT INTO app.cloudinary (public_id, url, uploaded_at) VALUES ($1, $2, $3) ON CONFLICT ON CONSTRAINT cloudinary_public_id_key DO NOTHING;`,
            values: [public_id, url, created_at],
          };
          pool
            .query(query)
            .then(() => "done")
            .catch((err) => console.log(err));
          if (i == data.length - 1) return "done";
        }
      }
      updateClodinaryPhotos()
        .then((message) => message)
        .catch((err) => console.log(err));
    }
  );
});


//list all cloudinary image details 
router.get("/listcloudinaryphotos", (req, res) => {
  let query = {
    text: `select * from app.cloudinary`,
  };

  pool
    .query(query)
    .then((result) => {
      res.status(200).send(result.rows);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
