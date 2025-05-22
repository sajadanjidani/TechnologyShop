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
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <Slider className="w-full h-full rounded-2xl" {...settings}>
      {images.map((src, index) => (
        <div
          className="w-full h-full rounded-2xl overflow-hidden relative"
          key={index}
        >
          <img
            src={src}
            alt={`slide-${index}`}
            className="w-full h-64 sm:h-[440px] transition-all duration-500"
          />
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider;
