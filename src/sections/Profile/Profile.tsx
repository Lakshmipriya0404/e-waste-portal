import React from "react";
import styles from "./Profile.module.css";

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
      <div className={styles.creditcard}></div>
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

export default Profile;
