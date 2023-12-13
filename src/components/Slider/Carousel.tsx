import React, { useState } from "react";
import styles from "./Carousel.module.css";
import img1 from "../../assets/slide1.jpg";
import img2 from "../../assets/slide2.jpeg";
import img3 from "../../assets/slide3.jpeg";

const Carousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleButtonClick = (offset: number) => {
    const newIndex = (activeIndex + offset + 3) % 3; // Assuming 3 slides in the carousel
    setActiveIndex(newIndex);
  };

  return (
    <div className={styles.carousel}>
      <button
        className={styles.btnprev}
        data-carousel-button="prev"
        onClick={() => handleButtonClick(-1)}
      >
        &#8656;
      </button>
      <button
        className={styles.btnnext}
        data-carousel-button="next"
        onClick={() => handleButtonClick(1)}
      >
        &#8658;
      </button>
      <ul data-slides>
        <li className={styles.slide} data-active={activeIndex === 0}>
          <img src={img1} alt="Nature Image #1" />
        </li>
        <li className={styles.slide} data-active={activeIndex === 1}>
          <img src={img2} alt="Nature Image #2" />
        </li>
        <li className={styles.slide} data-active={activeIndex === 2}>
          <img src={img3} alt="Nature Image #3" />
        </li>
      </ul>
    </div>
  );
};

export default Carousel;
