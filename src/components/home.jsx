import { renderImgStandard } from "./common/renderImage";
import React from "react";

const Home = ({ images, openModal }) => {
  return (
    <div className="home-body">
      {images.map((img) => (
        <div
          key={img.key}
          className="img-container"
          onClick={() => openModal(img.key)}
        >
          {renderImgStandard(img.img, img.title, openModal)}
        </div>
      ))}
    </div>
  );
};

export default Home;
