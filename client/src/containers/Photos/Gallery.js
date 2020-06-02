import React, { useState } from "react";
// import { Image, CloudinaryContext, Transformation } from "cloudinary-react";
import "../../css/gallery.css";

export default function Gallery({ data }) {
  const [gallery] = useState(data);

  return (
    <section style={{ margin: "20px" }} id="gallery-main">
      {gallery.map((photo) => {
        return (
          <div className="image-container">
            <div className="x-closer"></div>
            <span className="closer">X</span>
            <img
              src={photo.url}
              alt={``}
              key={photo.public_id}
              className="gallery-image"
            />
          </div>
        );
      })}
    </section>
  );
}
