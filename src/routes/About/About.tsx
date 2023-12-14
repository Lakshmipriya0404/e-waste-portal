import React from "react";
import styles from "./About.module.css";
import mission from "../../assets/AboutPage-Recycle_Image.jpg";
import vision from "../../assets/AboutPage-Vision_Bulb.jpg";

const About = () => {
  return (
    <div className={styles.main_container}>
      <div>
        <h1 className={styles.title_aboutus}>About Us</h1>
      </div>

      <div>
        <p className={styles.title_ewsachh}>E Swachh</p>
      </div>

      <div className={styles.text_container}>
        <p className={styles.content_ewsachh}>
          "We are lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        </p>
      </div>

      <div className={styles.mission_vision}>
        <div className={styles.image_mission_vision}>
          <img src={mission} />
        </div>
        <div className={styles.text_mission_vision}>
          <p className={styles.title_mission_vision}>Our Mission</p>
        </div>
      </div>

      <div className={styles.text_container}>
        <p className={styles.content_ewsachh}>
          "We are lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        </p>
      </div>

      <div className={styles.mission_vision}>
        <div className={styles.image_mission_vision}>
          <img src={vision} />
        </div>
        <div className={styles.text_mission_vision}>
          <p className={styles.title_mission_vision}>Our Vision</p>
        </div>
      </div>

      <div className={styles.text_container}>
        <p className={styles.content_ewsachh}>
          "We are lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        </p>
      </div>
    </div>
  );
};

export default About;
