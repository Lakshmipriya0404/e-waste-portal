import React from "react";
import styles from "./Home.module.css";
import Carousel from "../../components/Slider/Carousel";
import Contactus from "../../sections/Contactus/Contactus";
const Home = () => {
  return (
    <>
      <div className={styles.homewrap}>
        <div className={styles.container1}>
          <div className={styles.first}>
            <div className={styles.firsttext}>
              <div className={styles.title}>E-KARTAVYA</div><br/>
              <div className={styles.subtitle}>
                The Green  Future of E-Waste Disposal
              </div>
            </div>
          </div>
          <div className={styles.second}>
            <Carousel />
          </div>
        </div>
      </div>
      <Contactus />
    </>
  );
};

export default Home;
