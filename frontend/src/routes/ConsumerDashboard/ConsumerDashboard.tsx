import React, { useState } from "react";
import styles from "./ConsumerDashboard.module.css";
import ConsumerProfile from "../../sections/ConsumerProfile/ConsumerProfile";
import ConsumerSidebar from "../../sections/ConsumerSidebar/ConsumerSidebar";
import RequestQueue from "../../sections/RequestQueue/RequestQueue";
import OrderHistory from "../../sections/OrderHistory/OrderHistory";
import OrderDetails from "../../sections/OrderDetails/OrderDetails";
import RequestDetails from "../../sections/RequestDetails/RequestDetails";
import AddProductModal from "../../components/AddProductModal/AddProductModal";
import Popup from "../../components/Popuppage/Popup";
import Home from "../Home/Home";

const ConsumerDashboard = () => {
  const [selectedItem, setSelectedItem] = useState("Profile");
  const renderComponent = () => {
    switch (selectedItem) {
      case "Request Queue":
        return <RequestQueue />;
      case "Order History":
        return <OrderHistory />;
      default:
        return <ConsumerProfile />;
    }
  };
  return (
    <div className={styles.mainwrap}>
      <ConsumerSidebar onSelectItem={setSelectedItem} />
      <div className={styles.mainboard}>{renderComponent()}</div>
    </div>
  );
};

export default ConsumerDashboard;
