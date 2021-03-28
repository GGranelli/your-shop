import React from "react";

export function renderImgStandard(img, text, index) {
  index++;
  return (
    <React.Fragment>
      {/* <div className="img-container"> */}
      <div className="img-standard">
        <img className="img-content" alt="description" src={img} key={index} />
      </div>
      <div className="text-area">{text}</div>
      {/* </div> */}
    </React.Fragment>
  );
}

export function renderImgLarge(img, text) {
  <React.Fragment>
    <div className="img-containerL">
      <div className="img-large">
        <img alt="description" src={img} />
      </div>
      <div className="text-area">{text}</div>
    </div>
  </React.Fragment>;
}
