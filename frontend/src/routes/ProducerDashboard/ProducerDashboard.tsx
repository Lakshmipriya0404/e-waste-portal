import React, { useState } from "react";
import styles from "./ProducerDashboard.module.css";
import ProducerSidebar from "../../sections/ProducerSidebar/ProducerSidebar";
import Profile from "../../sections/Profile/ProducerProfile";
import FacilityLocator from "../../sections/Locator/FacilityLocator";
import RecentRequest from "../../sections/RecentRequest/RecentRequest";
import Disposal_History from "../../sections/Disposal_History/Disposal_History";
// import RequestQueue from "../../sections/RequestQueue/RequestQueue";
// import AboutFacilitator from "../../sections/AboutFacilitator/AboutFacilitator";

const Dashboard = () => {
  const [selectedItem, setSelectedItem] = useState("Profile");
  const renderComponent = () => {
    switch (selectedItem) {
      case "Nearest E-waste Facilitator":
        return <FacilityLocator />;
      case "Recent Requests":
        return <RecentRequest />;
      case "Disposal History":
        return <Disposal_History />;
      default:
        return <Profile />;
    }
  };

  return (
    <div className={styles.mainwrap}>
      <ProducerSidebar onSelectItem={setSelectedItem} />
      <div className={styles.mainboard}>{renderComponent()}</div>
    </div>
  );
};

export default Dashboard;
