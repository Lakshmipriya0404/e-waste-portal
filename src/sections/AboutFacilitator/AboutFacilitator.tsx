import React from "react";
import styles from "./AboutFacilitator.module.css";

const AboutFacilitator = () => {
  const subHeaders = ["NAME", "CATEGORY", "PHONE NO", "EMAIL ID", "ADDRESS"];
  const subValues = [
    "John Doe",
    "Category",
    "123-456-7890",
    "john@example.com",
    "123 Main St",
  ];
  return (
    <div className={styles.aboutfwrap}>
      <div className={styles.header}>
        <a href="">back icon</a>
        <h2>About Facilitator</h2>
      </div>
      {subHeaders.map((header, index) => (
        <div key={index} className={styles.row}>
          <div className={styles.subheader}>{header}</div>
          <div className={styles.subvalue}>{subValues[index]}</div>
        </div>
      ))}
      <button>SEND REQUEST</button>
    </div>
  );
};

export default AboutFacilitator;
