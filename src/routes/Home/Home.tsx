import React from "react";
import styles from "./Home.module.css";
import Slider from "react-slick";

const Home = () => {
  return (
    <div className={styles.homewrap}>
      <div className={styles.first}>
        <div className={styles.title}>E-Swachh</div>
        <div className={styles.subtitle}>
          The green future of e-waste disposal
        </div>
      </div>
      <Slider />
    </div>
  );
};

export default Home;
