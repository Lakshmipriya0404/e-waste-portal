import React from "react";
import styles from "./Dashboard.module.css";
import Sidebar from "../../sections/Sidebar/Sidebar";
import Profile from "../../sections/Profile/ProducerProfile";
import FacilityLocator from "../../sections/Locator/FacilityLocator";

const Dashboard = () => {
  return (
    <div className={styles.mainwrap}>
      <Sidebar />
      <div className={styles.mainboard}>
        <Profile />
        <FacilityLocator />
      </div>
    </div>
  );
};

export default Dashboard;
