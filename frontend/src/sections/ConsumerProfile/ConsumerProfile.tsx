//producer profile
import React from "react";
import styles from "./ConsumerProfile.module.css";
// import img1 from "../../assets/Rating.png";

const ConsumerProfile = () => {
  const subHeaders = ["Company Name", "EPR Id","Category", "Contact Number", "Email Id", "Location", "Google Map Link", "Operational Hours", "Website", "Doorstep Collection?"];
  const subValues = [
    "John Doe",
    "13456",
    "Collector, Recycler",
    "123-456-7890",
    "john@example.com",
    "Chennai",
    "www.google.com/maps/abcd=38",
    " 8.00am to 10.00pm",
    "www.company1.com",
    "No",
  ];

  return (
    <div className={styles.profilewrap}>
      <div className={styles.profile}>
        <div className={styles.header}>Your Profile!</div>
        {subHeaders.map((header, index) => (
          <div key={index} className={styles.row}>
            <div className={styles.subheader}>{header}</div>
            <div className={styles.subvalue}>{subValues[index]}</div>
          </div>
        ))}
      </div>
      <div className={styles.button}>
        <button>Edit Profile</button>
        <button>Change Password</button>
      </div>
    </div>
  );
};

export default ConsumerProfile;
