// Home.js

import React from "react";
import styles from "./Home.module.css";
import { useTranslation} from "react-i18next";
import Carousel from "../../components/Slider/Carousel";
import Contactus from "../../sections/Contactus/Contactus";
import logo from "../../assets/E_-_KARTAVYA__1_-removebg-preview.png";
import logogovt from "../../assets/Group 1000002792Homepage-GovtLogo.png";
import stat from "../../assets/info cust.png";
import bharate from "../../assets/BharatE_logo.png";

const Home = () => {
  const handleClick=()=>{
    window.location.href='https://github.com/Lakshmipriya0404/e-waste-portal/tree/priya/frontend/src/components';
  }
  const {t,i18n} =useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      <div className={styles.homewrap}>
        <div className={styles.container2}>
          <button className="translate-button" onClick={() => changeLanguage('hin')}> हिंदी </button>
          <button className="translate-button" onClick={() => changeLanguage('en')}> English </button>
        <div className={styles.image}>
          <img className={styles.govtLogo} src={logogovt} alt="Govt Logo" />
        </div>
        </div>
        <div className={styles.container1}>
          <div className={styles.container3}>
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
            <div className={styles.stata}>
              <img className={styles.statlogo} src={stat} alt="User Statistics"/>
            </div>
           
          </div>
          </div>
          
          <div className={styles.second}>
            <Carousel />
          </div>
        </div>
        <div className={styles.container4}>
        <button className={styles.chat_button} onClick={handleClick}>
         <img className={styles.bharat} src={bharate} alt="BharatE Chatbox"/>
        </button>
        </div>
      </div>
      <Contactus />
    </>
  );
};

export default Home;
