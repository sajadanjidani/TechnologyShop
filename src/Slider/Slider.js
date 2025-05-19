import React from "react";
import Slider from "react-slick";

const ImageSlider = () => {
  const images = [
    "/image/sliderImage/laptopPhoto.avif",
    "/image/sliderImage/consoleShop.jpg",
    "/image/sliderImage/pcShop.jpg",
    "/image/sliderImage/premiumPhone.avif",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
      <Slider {...settings}>
      {images.map((src, index) => (
          <div key={index}>
          <img src={src} alt={`slide-${index}`} style={{ width: "100%", height: "100%"}} />
          </div>
      ))}
      </Slider>
  );
};

export default ImageSlider;
