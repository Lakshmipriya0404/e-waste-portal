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
        <p className={styles.title_ewsachh}>E - Kartavya</p>
      </div>

      <div className={styles.text_container}>
        <p className={styles.content_ewsachh}>
        Welcome to our platform dedicated to responsible e-waste disposal. Committed to sustainability, we connect you with certified recyclers, promoting a greener, cleaner future. Join us in recycling responsibly!
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
          "Our mission is to revolutionize e-waste management, fostering a sustainable future. We aim to connect individuals and businesses with responsible recycling options, minimizing environmental impact and promoting circular economies globally."
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
          "Our vision is a world where electronic waste is efficiently managed, contributing to a circular economy. We envision widespread awareness, responsible disposal practices, and sustainable resource recovery for a cleaner planet."
        </p>
      </div>
    </div>
  );
};

export default About;
