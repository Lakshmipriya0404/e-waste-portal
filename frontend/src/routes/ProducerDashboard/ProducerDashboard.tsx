import React from "react";
import styles from "./ProducerDashboard.module.css";
import Sidebar from "../../sections/Sidebar/Sidebar";
import Profile from "../../sections/Profile/ProducerProfile";
import FacilityLocator from "../../sections/Locator/FacilityLocator";
import RecentRequest from "../../sections/RecentRequest/RecentRequest";
import Disposal_History from "../../sections/Disposal_History/Disposal_History";
import RequestQueue from "../../sections/RequestQueue/RequestQueue";
import AboutFacilitator from "../../sections/AboutFacilitator/AboutFacilitator";

const Dashboard = () => {
  return (
    <div className={styles.mainwrap}>
      <Sidebar />
      <div className={styles.mainboard}>
        {/* <Profile />
        <FacilityLocator />
        <RecentRequest />
        <Disposal_History />
        <RequestQueue /> */}
        <AboutFacilitator/>
      </div>
    </div>
  );
};

export default Dashboard;
