import React from "react";
import styles from "./FacilityLocator.module.css";

const FacilityLocator = () => {
  const resultHeaders = [
    "Facilitator Name",
    "Location",
    "Contact No",
    "Distance",
  ];
  const resultData = [
    {
      name: "ABC",
      location: "kk nagar",
      contactNo: 23456781,
      distance: "2kms",
    },
    {
      name: "ABC",
      location: "kk nagar",
      contactNo: 23456781,
      distance: "2kms",
    },
    {
      name: "ABC",
      location: "kk nagar",
      contactNo: 23456781,
      distance: "2kms",
    },
  ];
  return (
    <>
      <div className={styles.locatorwrapper}>
        <div className={styles.header}>
          <h2>Nearest E-Waste Facilitator</h2>
          <p>
            Find your nearest E-Waste Facilitator location with your current
            location or pincode
          </p>
        </div>
        <div className={styles.locator}>
          <button>Current Location</button>
          <div>Enter Pincode:</div>
          <input type="text" />
          <button>FIND</button>
        </div>
        <div className={styles.resultwrap}>
          <div className={styles.resulttable}>
            <table className={styles.output}>
              <thead>
                <tr>
                  {resultHeaders.map((header, index) => (
                    <th key={index}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {resultData.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {Object.values(row).map((item, columnIndex) => (
                      <td key={columnIndex}>{item}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default FacilityLocator;
