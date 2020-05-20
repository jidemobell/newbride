import React, { useRef, useState, useEffect } from "react";
import {  useSelector, useDispatch } from "react-redux";

import Gallery from "../Photos/Gallery";
import { pullImages, listCloudinaryPhotos } from "../../redux/actions/photos";
// import Lazyload from "react-lazyload";
// import Spinner from "../../components/Spinner";

console.log(process.env)

export default function Images( ) {
	// const newStateGallery = useSelector(state => state.photos.photos)
	
	const cloudinaryArray = useSelector(state => state.photos.photos);

	// const [data, setData] = useState(imageGallery)
	
	const dispatch = useDispatch()
	// console.log('gallery', imageGallery)
  // const [uploading, setUploading] = useState(false);

  // const handleUpload = e => {
  //   e.preventDefault();
  //   // setUploading(true);
  //   let imgObject = new FormData();
  //   imgObject.append("imageName", `mutler-image-${Date.now()}`);
  //   imgObject.append("imageData", e.target.files[0]);
  //   // setUploadedImage(URL.createObjectURL(e.target.files[0]))
  //   uploadAction(imgObject);
  //   (() => uploadStatus ? uploadTriggered : setUploadStatus(false))()
	// };

  let widgetWindow = window.cloudinary.createUploadWidget(
    {
      cloudName: process.env.REACT_APP_CLOUDINARY_CLOUDNAME,
      uploadPreset: process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET,
      theme: "white",
    },
    (err, result) => {
      if (!err && result && result.event === "success") {  
				dispatch(pullImages());
				setInterval(dispatch(listCloudinaryPhotos), 2000)
				console.log(result.info);
      }
    }
  );

  const handleUpload = () => {
    let windowFeatures = `width=500,height=600,left=200,top=200`;
    widgetWindow.open(``, ``, windowFeatures);
	};
	
	// useEffect(() => dispatch(listCloudinaryPhotos()), [dispatch])

  return (
    <section className="users" style={{ marginTop: "30px" }}>
      <section className="flex-col">
        <div>
          <Gallery data={cloudinaryArray  == undefined ? [] : cloudinaryArray} />
        </div>
        <div className="upload-wrapper flex-col center">
          {/* <input
            type="file"
            name="file"
            // accept="image/*"
            // style={{ display: "hidden" }}
            onChange={handleUpload}
            ref={uploadInput}
            className="upload-btn"
          /> */}
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
