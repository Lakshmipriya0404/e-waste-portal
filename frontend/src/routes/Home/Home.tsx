// Home.js

import React from "react";
import styles from "./Home.module.css";
import Carousel from "../../components/Slider/Carousel";
import Contactus from "../../sections/Contactus/Contactus";
import logo from "../../assets/E_-_KARTAVYA__1_-removebg-preview.png";
import logogovt from "../../assets/Group 1000002792Homepage-GovtLogo.png";

const Home = () => {
  return (
    <>
      <div className={styles.homewrap}>
        <div className={styles.container2}>
        <div className={styles.image}>
          <img className={styles.govtLogo} src={logogovt} alt="Govt Logo" />
        </div>
        </div>
        <div className={styles.container1}>
          <div className={styles.first}>
            <div className={styles.firsttext}>
              <div className={styles.image}>
                <img className={styles.pageLogo} src={logo} alt="Page Logo" />
              </div>
              <br />
              <div className={styles.subtitle}>
                The Green Future of E-Waste Disposal
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
