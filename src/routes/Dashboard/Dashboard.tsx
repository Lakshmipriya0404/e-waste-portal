import React from "react";
import styles from "./Dashboard.module.css";
import Sidebar from "../../sections/Sidebar/Sidebar";
import Profile from "../../sections/Profile/ProducerProfile";
import FacilityLocator from "../../sections/Locator/FacilityLocator";
import RecentRequest from "../../sections/RecentRequest/RecentRequest";
import Disposal_History from "../../sections/Disposal_History/Disposal_History";

const Dashboard = () => {
  return (
    <div className={styles.mainwrap}>
      <Sidebar />
      <div className={styles.mainboard}>
        <Profile />
        {/* <FacilityLocator />
        <RecentRequest/>
        <Disposal_History/> */}
      </div>
    </div>
  );
};

export default Dashboard;
