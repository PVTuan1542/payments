import React from "react";
import "../../Style/Header/SliceShowImage.css";

function SliceShowImage() {
  return (
    <header className="header-container">
      <div className="slideshow-container">
        <div className="slideshow">
          <img
            src="https://s3-media0.fl.yelpcdn.com/educatorphoto/ccPzYQQGD-GXSUadmL3SPw/o.jpg"
            alt=""
            className="slide"
          />
          <img
            src="https://s3-media0.fl.yelpcdn.com/educatorphoto/SzdbzhpbM0KKyr2dYu24rA/o.jpg"
            alt=""
            className="slide"
          />
          <img
            src="https://s3-media0.fl.yelpcdn.com/educatorphoto/ccPzYQQGD-GXSUadmL3SPw/o.jpg"
            alt=""
            className="slide"
          />
          <img
            src="https://s3-media0.fl.yelpcdn.com/educatorphoto/ccPzYQQGD-GXSUadmL3SPw/o.jpg"
            alt=""
            className="slide"
          />
        </div>
      </div>
      <div className="header-content"></div>
    </header>
  );
}

export default SliceShowImage;
