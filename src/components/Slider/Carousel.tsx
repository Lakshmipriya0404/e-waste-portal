import React, { useState, useEffect } from "react";
import styles from "./Carousel.module.css";
import img1 from "../../assets/slide1.jpg";
import img2 from "../../assets/slide2.jpeg";
import img3 from "../../assets/slide3.jpeg";

interface CarouselProps {}

const Carousel: React.FC<CarouselProps> = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleButtonClick = (offset: number) => {
    const newIndex = (activeIndex + offset + 3) % 3; // Assuming 3 slides in the carousel
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const handleClick = (event: Event) => {
      const button = event.target as HTMLElement;
      const offset = button.dataset.carouselButton === "next" ? 1 : -1;

      const slides = document.querySelector(
        "[data-slides]"
      ) as HTMLElement | null;
      if (!slides) return;

      const activeSlide = slides.querySelector(
        "[data-active]"
      ) as HTMLElement | null;
      if (!activeSlide) return;

      const slidesArray = Array.from(slides.children);
      const currentIndex = slidesArray.indexOf(activeSlide);
      const newIndex =
        (currentIndex + offset + slidesArray.length) % slidesArray.length;

      slidesArray.forEach((slide, index) => {
        if (index === newIndex) {
          slide.setAttribute("data-active", "true");
        } else {
          slide.removeAttribute("data-active");
        }
      });
    };

    const buttons = document.querySelectorAll("[data-carousel-button]");
    buttons.forEach((button) => {
      button.addEventListener("click", handleClick);
    });

    return () => {
      buttons.forEach((button) => {
        button.removeEventListener("click", handleClick);
      });
    };
  }, [activeIndex]);

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
