import React from "react";
import Slider from "react-slick";

const FadeSlick = (props) => {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="banner-img imagesiny">
          <img loading="lazy" src="https://i.postimg.cc/g07x79fP/download.jpg" />
        </div>
        <div className="banner-img imagesiny">
          <img loading="lazy" src="https://i.postimg.cc/y628CXQ0/download.jpg" />
        </div>
      </Slider>
    </div>
  );
};

export default FadeSlick;
