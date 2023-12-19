import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Carousel.module.css";
import img1 from "../../assets/slide1.png";
import img2 from "../../assets/slide2.png";
import img3 from "../../assets/slide3.png";

interface CarouselProps {}

const Carousel: React.FC<CarouselProps> = () => {
  // const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    // afterChange: (index: number) => setActiveIndex(index),
  };

  return (
    <div className={styles.carousel}>
      <Slider {...settings}>
        <div className={styles.slide}>
          <img src={img1} alt="Nature Image #1" />
        </div>
        <div className={styles.slide}>
          <img src={img2} alt="Nature Image #2" />
        </div>
        <div className={styles.slide}>
          <img src={img3} alt="Nature Image #3" />
        </div>
      </Slider>
      {/* <p>Current Slide: {activeIndex + 1}</p> */}
    </div>
  );
};

export default Carousel;
