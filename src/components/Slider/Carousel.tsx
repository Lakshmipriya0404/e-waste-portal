import React from "react";
import Slider from "react-slick";
import img1 from "../../assets/slide1.jpg";
import img2 from "../../assets/slide2.jpeg";
import img3 from "../../assets/slide3.jpeg";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <img src={img1} alt="Image 1" />
        </div>
        <div>
          <img src={img2} alt="Image 2" />
        </div>
        <div>
          <img src={img3} alt="Image 3" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
