import React from "react";
import styles from "./Home.module.css";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import Carousel from "../../components/Slider/Carousel";
import artimg from "../../assets/LeafButterfly.png";
import contactbulb from "../../assets/ContactUs_Bulb.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  return (
    <div className={styles.homewrap}>
      <div className={styles.container1}>
        <div className={styles.first}>
          <div className={styles.title}>E-Swachh</div>
          <div className={styles.subtitle}>
            The green future of e-waste disposal
          </div>
        </div>
        <div className={styles.second}>
          <Carousel />
        </div>
      </div>
      <div className={styles.container2}>
        <div className={styles.art}>
          <img src={artimg} alt="" />
        </div>
        <div className={styles.contact}>
          <div className={styles.header}>
            <div className="text">Contact us</div>
            <div className="bulb">
              <img src={contactbulb} alt="" />
            </div>
          </div>
          <a className="phone" href="">
            <FontAwesomeIcon icon={faPhone} />
            <div className={styles.text}>+91 9876543210</div>
          </a>
          <a className="mail" href="">
            <FontAwesomeIcon icon={faEnvelope} />
            <div className={styles.text}>greenprint@gmail.com</div>
          </a>
          <a className="insta" href="">
            <FontAwesomeIcon icon={faInstagram} />
            <div className={styles.text}>The Green Print</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
