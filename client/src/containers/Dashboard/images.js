import React from "react";
import {  useSelector, useDispatch } from "react-redux";

import Gallery from "../Photos/Gallery";
import { pullImages, listCloudinaryPhotos } from "../../redux/actions/photos";




export default function Images({token}) {
	const cloudinaryArray = useSelector(state => state.photos.photos);

	
	const dispatch = useDispatch()
  let widgetWindow = window.cloudinary.createUploadWidget(
    {
      cloudName: process.env.REACT_APP_CLOUDINARY_CLOUDNAME,
      uploadPreset: process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET,
      theme: "white",
    },
    (err, result) => {
      if (!err && result && result.event === "success") {  
				dispatch(pullImages(token));
				setInterval(dispatch(listCloudinaryPhotos), 2000)
				// console.log(result.info);
      }
    }
  );

  const handleUpload = () => {
    let windowFeatures = `width=500,height=600,left=200,top=200`;
    widgetWindow.open(``, ``, windowFeatures);
	};
	

  return (
    <section className="users" style={{ marginTop: "30px" }}>
      <section className="flex-col">
        <div>
          <Gallery data={cloudinaryArray  === undefined ? [] : cloudinaryArray} />
        </div>
        <div className="upload-wrapper flex-col center">
          <button
            id="btn"
            className="theme-button upload-button"
            onClick={handleUpload}
          >
            UPLOAD IMAGE
          </button>
        </div>
      </section>
    </section>
  );
}
