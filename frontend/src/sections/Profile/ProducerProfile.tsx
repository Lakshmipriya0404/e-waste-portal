import React from "react";
import styles from "./ProducerProfile.module.css";
import coins from "../../assets/UserDashboard-Credit_Money_Image-removebg-preview.png";

interface ProfileData {
  pname: string;
  category: string;
  email: string;
  phone: string;
  address: string;
  credits: number;
}

const Profile: React.FC<{ data: ProfileData | null }> = ({ data }) => {
  const subHeaders = ["NAME", "CATEGORY", "PHONE NO", "EMAIL ID", "ADDRESS"];
  const subValues = [
    data?.pname || "N/A",
    data?.category || "N/A",
    data?.phone || "N/A",
    data?.email || "N/A",
    data?.address || "N/A",
  ];

  return (
    <div className={styles.profilewrap}>
      <div className={styles.creditcard}>
        <div className={styles.creditcardText}>
          <h1>Kartavya Points Earned!</h1>
          <p>{data?.credits || 0} kp</p>
        </div>
        <div className={styles.creditcardImage}>
          <img src={coins} alt="Coins" />
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
