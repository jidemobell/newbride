import React, { useRef, useState, useEffect } from "react";




export default function Images({imageGallery}) {
	const uploadInput = useRef(null);	
	const [,setUploadedImage] = useState()


	const onButtonClick = () => uploadInput.current.click();
  const handleUpload = e => {
    e.preventDefault();
    let imgObject = new FormData();

    imgObject.append("imageName", `mutler-image-${Date.now()}`);
    imgObject.append("imageData", e.target.files[0]);

    setUploadedImage(URL.createObjectURL(e.target.files[0]));
	};

  return (
    <section className="users" style={{ marginTop: "30px" }}>
      <div className="tabs is-boxed">
        <ul>
          <li className="is-active">
            <a href="http://fake">
              <span className="icon is-small">
                <i className="fas fa-image" aria-hidden="true"></i>
              </span>
              <span>Add Image</span>
            </a>
          </li>
          <li>
            <a href="http://fake">
              <span className="icon is-small">
                <i className="fas fa-music" aria-hidden="true"></i>
              </span>
              <span style={{ fontSize: "20px", fontWeight: "bolder" }}>+</span>
            </a>
          </li>
        </ul>
      </div>
      <section className="flex-col center">
        <div
          className="gallery"
          style={{ overflow: "scroll", padding: "10px" }}
        >
          {
						(imageGallery.map((image) => {
							return (
								<img 
									src={`http://localhost:5000/${image.image_url}`} 
									alt="uploading" 
									style={{ width: "120px", height: "120px", margin: "5px" }} 
									key={image.id} 
								/> 
							)            
						}))
					}
					{/* <img src={uploadedImage} 5. alt="uploading" style={{ width: "200px" }} /> */}
        </div>
        {/* <button className="theme-button" type="file">UPLOAD</button> */}
        <div className="upload-wrapper flex-col center">
          <input
            type="file"
						name="file"
						// accept="image/*"
            // style={{ display: "hidden" }}
            onChange={handleUpload}
            ref={uploadInput}
            className="upload-btn"
          />
          <button
            id="btn"
            className="theme-button upload-button"
            onClick={onButtonClick}
          >
            UPLOAD IMAGE
          </button>
        </div>
      </section>
    </section>
  );
}
