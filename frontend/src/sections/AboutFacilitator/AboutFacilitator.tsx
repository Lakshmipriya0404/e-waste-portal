import React, { useState } from "react";
import styles from "./AboutFacilitator.module.css";
import back from "../../assets/arrow-left.png";
import { FacilityData } from "../Locator/FacilityLocator";
import ProductDetails from "../ProductDetails/ProductDetails";

interface AboutFacilitatorProps {
  company?: FacilityData;
}

const AboutFacilitator: React.FC<AboutFacilitatorProps> = ({ company }) => {
  const [sendRequest, setSendRequest] = useState(false);
  if (!company) {
    return <div>Loading...</div>; // or handle the undefined case appropriately
  }
  const subHeaders = [
    "NAME",
    "CATEGORY",
    "PHONE NO",
    "EMAIL ID",
    "ADDRESS",
    "OPERATIONAL HOURS",
    "DOOR STEP COLLECTION",
  ];
  const subValues = [
    company!.cname,
    company!.category,
    company!.phone,
    company!.email,
    company!.address,
    company!.start_time + "-" + company!.end_time,
    "Yes",
  ];

  return (
    <>
      {!sendRequest && (
        <div className={styles.aboutfwrap}>
          <div className={styles.header}>
            <a href="">
              <img src={back} alt="Back" />
            </a>
            <h2>About Facilitator</h2>
          </div>
          {subHeaders.map((header, index) => (
            <div key={index} className={styles.row}>
              <div className={styles.subheader}>{header}</div>
              <div className={styles.subvalue}>{subValues[index]}</div>
            </div>
          ))}
          <div className={styles.button}>
            <button onClick={() => setSendRequest(true)}>Send Request</button>
          </div>
        </div>
      )}
      {sendRequest && <ProductDetails />}
    </>
  );
};

export default AboutFacilitator;
