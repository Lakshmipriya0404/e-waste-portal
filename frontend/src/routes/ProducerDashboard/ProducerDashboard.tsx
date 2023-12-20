import React, { useEffect, useState } from "react";
import styles from "./ProducerDashboard.module.css";
import ProducerSidebar from "../../sections/ProducerSidebar/ProducerSidebar";
import Profile from "../../sections/Profile/ProducerProfile";
import FacilityLocator from "../../sections/Locator/FacilityLocator";
import RecentRequest from "../../sections/RecentRequest/RecentRequest";
import Disposal_History from "../../sections/Disposal_History/Disposal_History";
import { useLocation } from "react-router-dom";
import { ProducerData } from "../../api";

const Dashboard = () => {
  const [selectedItem, setSelectedItem] = useState("Profile");
  const [producerData, setProducerData] = useState(null); // State to store producer data
  const location = useLocation();

  useEffect(() => {
    // Access email from location state when component mounts
    const emailFromState = location.state?.email;

    // Fetch producer data when email changes
    if (emailFromState) {
      getProducerData(emailFromState);
    }
  }, [location.state]);

  const getProducerData = async (email: string) => {
    try {
      const response = await ProducerData(email);
      setProducerData(response.data);
    } catch (error) {
      console.error("Error fetching producer data:", error);
    }
  };

  const renderComponent = () => {
    switch (selectedItem) {
      case "Nearest E-waste Facilitator":
        return <FacilityLocator />;
      case "Recent Requests":
        return <RecentRequest />;
      case "Disposal History":
        return <Disposal_History />;
      default:
        return <Profile data={producerData} />;
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
