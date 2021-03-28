import React from "react";
import Modal from "react-bootstrap/Modal";
import { isMobile } from "react-device-detect";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const ModalSlide = ({ show, close, slides, currentSlide }) => {
  return (
    <Modal
      show={show}
      onHide={close}
      id={!isMobile ? "modal-slide" : "modal-slide-mobile"}
    >
      <CarouselProvider
        naturalSlideWidth={!isMobile ? 100 : 20}
        naturalSlideHeight={!isMobile ? 58.3 : 32}
        totalSlides={slides.length}
        currentSlide={currentSlide}
      >
        <Slider>
          {slides.map((slide) => (
            <Slide index={slide.key}>
              <div className="slide-container">
                <div className={!isMobile ? "slide-img" : "slide-img-mobile"}>
                  <img
                    className="slide-img-content"
                    src={slide.img}
                    alt="description"
                  />
                </div>
                <div
                  className={
                    !isMobile ? "slide-content" : "slide-content-mobile"
                  }
                >
                  <span id="lorem-ipsum">LOREM IPSUM</span>
                  <div className="slide-title">{slide.title}</div>
                  {!isMobile && (
                    <div className="slide-description">{slide.description}</div>
                  )}
                </div>
              </div>
            </Slide>
          ))}
        </Slider>
        {!isMobile && <ButtonBack className="btn-prev" />}
        {!isMobile && <ButtonNext className="btn-next" />}
      </CarouselProvider>
    </Modal>
  );
};

export default ModalSlide;

/* <Modal show={show} onHide={close} style={{ overflow: "visible" }}>
      <div className="slide-container">
        <div className="slide-img">
          <img src={slides[currentSlide].img} alt="description" />
        </div>
        <div className="slide-content">
          <div className="slide-title">{slides[currentSlide].title}</div>
          <div className="slide-description">
            {slides[currentSlide].description}
          </div>
        </div>
      </div>
      {currentSlide < slides.length - 1 && (
        <button className="btn-next" onClick={() => next(currentSlide)} />
      )}
      {currentSlide > 0 && (
        <button className="btn-prev" onClick={() => prev(currentSlide)} />
      )}
    </Modal> */
