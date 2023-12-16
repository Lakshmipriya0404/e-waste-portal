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
            <p className={styles.text_question}>What is E-Waste?</p>
            <br />
            <br />
            <p className={styles.text_answer}>
            E-waste, or electronic waste, refers to discarded electrical or electronic devices that have reached the end of their life cycle or are no longer in use. This category of waste encompasses a diverse range of items, including but not limited to computers, laptops, smartphones, tablets, printers, refrigerators, washing machines, and other household and industrial electronic equipment.
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
            <p className={styles.text_question}>Why should we dispose safely?</p>
            <br />
            <br />
            <p className={styles.text_answer}>
            With the global surge in electronic device consumption, effective disposal is crucial. Proper management involves recycling and responsible disposal to minimize environmental impact and health risks. Recycling e-waste not only addresses environmental concerns but also allows for the recovery of valuable materials, contributing to sustainable resource management and the reduction of electronic waste's adverse effects on our planet.
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
                <img src={tick} /> &nbsp; &nbsp; Use certified e-waste recycling facilities that adhere to environmental standards.
              </li>
              <li>
                {" "}
                <img src={tick} /> &nbsp; &nbsp; Erase personal data from devices before disposal to protect your privacy.
              </li>
              <li>
                {" "}
                <img src={tick} /> &nbsp; &nbsp; Remove and properly dispose of batteries before recycling electronic devices.
              </li>
              <li>
                {" "}
                <img src={tick} /> &nbsp; &nbsp; Familiarize yourself with local regulations and guidelines for e-waste disposal.
              </li>
              <li>
                {" "}
                <img src={tick} /> &nbsp; &nbsp; Consider donating or selling still-functional electronics to extend their lifespan.
              </li>
            </ul>
          </div>

          <div className={styles.text}>
            <p className={styles.text_title_disposal}>Don'ts!</p>
            <br />
            <br />
            <ul className={styles.text_disposal}>
              <li> ❌ &nbsp; &nbsp; Dispose of electronic devices in regular trash bins. E-waste requires special handling.</li>
              <li> ❌ &nbsp; &nbsp; Engage in illegal dumping of e-waste, as it poses environmental and health risks.</li>
              <li> ❌ &nbsp; &nbsp; Contribute to landfill waste; choose recycling methods to recover valuable materials.</li>
              <li> ❌ &nbsp; &nbsp; Burn electronic devices, as it releases toxic fumes and pollutants.
              </li>
              <li> ❌ &nbsp; &nbsp; Export of e-waste without proper verification.
              </li>
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
