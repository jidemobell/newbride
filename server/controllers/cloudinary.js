require("dotenv").config()
const cloudinary = require("cloudinary")

const Database = require("../db/index.js")
const pool = Database.startPool()
const apiQueries = require('../constants/queryConstants')

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
   text: apiQueries.LIST_CLOUDINARY_IMAGES,
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
            text: apiQueries.UPDATE_CLOUDINARY_FROM_API,
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

//attach an image to a page and keep the order
const attachImageTopage = (req, res) => {
	//this is not an update action. 
	//automatically the entry no is recieved as the next index and will be reserved
	const { page_name, image_id, entry_no } = req.body
  let query = {
		text: apiQueries.ATTACH_IMAGE_TO_PAGE,
		values: [page_name, image_id, entry_no]
	 }
 
	 pool.query(query).then((result) => {
			 res.status(200).send(result.rows);
		 })
		 .catch((err) => console.log(err));
}

const removeImageFromPage = (req,res) => {
	 //here we keep the order number;
	 const {entry_no} = req.body
	 let query = {
		text: apiQueries.REMOVE_IMAGE_FROM_PAGE,
		values: [entry_no]
	 }
	 pool.query(query).then((result) => {
		res.status(200).send(result.rows);
	})
	.catch((err) => console.log(err));
	 
}

//list all images being used on a page by order
listImagesForAPage = (req, res) => {
	const {page_name} = req.body
	let query = {
	 text: apiQueries.LIST_IMAGES_ON_PAGE,
	 values: [page_name]
	}
	pool.query(query).then((result) => {
	 res.status(200).send(result.rows);
 })
 .catch((err) => console.log(err));
}

module.exports = {
  getImageFromCloudinaryAPI,
	listCloudinaryImagesFromDB,
	attachImageTopage,
	removeImageFromPage,
	listImagesForAPage
};
