import React from "react";
import styles from "./Ecoprints.module.css";
import img1 from "../../assets/AboutPage-Recycle_Image.jpg";
import tick from "../../assets/Completed_Tick-removebg-preview.png";
import rules from "../../assets/EcoPrintsPage-Rules.png";
import stat from "../../assets/Ecoprintspage-statistics.png";
import portal from "../../assets/EcoPrintsPage-Eportal.png";

const Ecoprints = () => {
  return (
    <div>
      <div className={styles.main_container}>
        <div>
          <h1 className={styles.title_ecoprints}>Eco Prints</h1>
        </div>

        <div className={styles.text_container}>
          <div className={styles.text}>
            <p className={styles.text_question_answer}>What is E-Waste?</p>
            <br />
            <br />
            <p className={styles.text_question_answer}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className={styles.image}>
            <img src={img1} />
          </div>
        </div>

        <div className={styles.text_container}>
          <div className={styles.image}>
            <img src={img1} />
          </div>
          <div className={styles.text}>
            <p className={styles.text_question_answer}>What is E-Waste?</p>
            <br />
            <br />
            <p className={styles.text_question_answer}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <div>
          <h1 className={styles.title_disposal}>Disposal of E-Waste</h1>
        </div>

        <div className={styles.text_container_disposal}>
          <div className={styles.text}>
            <p className={styles.text_title_disposal}>Do's!</p>
            <br />
            <br />
            <ul className={styles.text_disposal}>
              <li>
                {" "}
                <img src={tick} /> &nbsp; &nbsp; Lorem ipsum dolor sit amet
              </li>
              <li>
                {" "}
                <img src={tick} /> &nbsp; &nbsp; consectetur adipiscing elit
              </li>
              <li>
                {" "}
                <img src={tick} /> &nbsp; &nbsp; sed do eiusmod tempor
                incididunt
              </li>
              <li>
                {" "}
                <img src={tick} /> &nbsp; &nbsp; ut labore et dolore magna
                aliqua
              </li>
            </ul>
          </div>

          <div className={styles.text}>
            <p className={styles.text_title_disposal}>Don'ts!</p>
            <br />
            <br />
            <ul className={styles.text_disposal}>
              <li> ❌ &nbsp; &nbsp; Lorem ipsum dolor sit amet</li>
              <li> ❌ &nbsp; &nbsp; consectetur adipiscing elit</li>
              <li> ❌ &nbsp; &nbsp; sed do eiusmod tempor incididunt</li>
              <li> ❌ &nbsp; &nbsp; ut labore et dolore magna aliqua</li>
            </ul>
          </div>
        </div>

        <div className={styles.title_explore_more}>
          <p className={styles.title_disposal}>Explore More!</p>
            <br />
            <br />
          <div className={styles.text_explore_more}>

            <ul>
              <li>
               <a href=""> <img src={rules} />  &nbsp; E-Waste Management Rules</a> &emsp; &emsp; 
                <a href=""><img src={stat} /> &nbsp; E-Waste Statistics in India &ensp;</a>
              </li>
            </ul>
          
          </div>

          <div className={styles.text_explore_more}>

            <ul>
              <li>
              <a href=""> <img src={portal} />  &nbsp; ERP Portal for E-Waste Management</a> &emsp; &emsp; 
              </li>
            </ul>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecoprints;
