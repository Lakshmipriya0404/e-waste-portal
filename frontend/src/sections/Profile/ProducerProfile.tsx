//producer profile
import React from "react";
import styles from "./ProducerProfile.module.css";
import coins from "../../assets/UserDashboard-Credit_Money_Image-removebg-preview.png";

const Profile = () => {
  const subHeaders = ["NAME", "CATEGORY", "PHONE NO", "EMAIL ID", "ADDRESS"];
  const subValues = [
    "John Doe",
    "Category",
    "123-456-7890",
    "john@example.com",
    "123 Main St",
  ];

  return (
    <div className={styles.profilewrap}>
      <div className={styles.creditcard}>
        <div className={styles.creditcardText}>
          <h1>Kartavya Points Earned!</h1>
          <p>180 Kp</p>
        </div>
        <div className={styles.creditcardImage}>
        <img src={coins} />
        </div>
      </div>
      <div className={styles.profile}>
        <div className={styles.header}>Your Profile!</div>
        {subHeaders.map((header, index) => (
          <div key={index} className={styles.row}>
            <p className={styles.subheader}>{header}</p>
            <p className={styles.subvalue}>{subValues[index]}</p>
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

export default Profile;
