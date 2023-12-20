import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import styles from "./Contactus.module.css";
import artimg from "../../assets/LeafButterfly.jpg";
import contactbulb from "../../assets/ContactUs_Bulb.jpg";

const Contactus = () => {
  return (
    <div className={styles.container2}>
      <div className={styles.art}>
        <img src={artimg} alt="" />
      </div>
      <div className={styles.contact}>
        <div className={styles.header}>
          <div className={styles.headertext}>Contact us</div>
          <div className={styles.bulb}>
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
  );
};

export default Contactus;
