require("dotenv").config()
const cloudinary = require("cloudinary")
const Database = require("../db/index.js")
const pool = Database.startPool()

const cloudinaryOptions =  {
  cloud_name: process.env.CLOUDINARY_CLOUDNAME,
  api_key:  process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
}


//configure cloudinary, move to a service later
cloudinary.config(cloudinaryOptions);


//fetch all cloudinary image urls from database 
const listCloudinaryImagesFromDB = (req, res) => {
  let query = {
   text: `select * from app.cloudinary`,
  }

  pool.query(query).then((result) => {
      res.status(200).send(result.rows);
    })
    .catch((err) => console.log(err));
};


//get an image from cloudinary API and save API details to the DB
const getImageFromCloudinaryAPI = (req, res) => {
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
};


// list all page images with their order



module.exports = {
  // fetchCloudinaryImagesFromDb,
  getImageFromCloudinaryAPI,
  listCloudinaryImagesFromDB,
};
