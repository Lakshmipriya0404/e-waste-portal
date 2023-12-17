import React from "react";
import styles from "./FacilityLocator.module.css";

const FacilityLocator = () => {
  return (
    <>
      <div className={styles.locatorwrapper}>
        <div className={styles.header}>
          <h2>Nearest E-Waste Facilitator</h2>
          <p>
            Find your nearest E-Waste Facilitator location with your current
            location or pincode
          </p>
          <button>Current Location</button>
          <div>Enter Pincode:</div>
          <input type="text" />
          <button>FIND</button>
        </div>
      </div>
    </>
  );
};

export default FacilityLocator;
