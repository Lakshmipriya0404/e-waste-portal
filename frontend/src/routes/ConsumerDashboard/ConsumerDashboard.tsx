import React from "react";
import styles from "./ConsumerDashboard.module.css";
import ConsumerProfile from "../../sections/ConsumerProfile/ConsumerProfile";
import ConsumerSidebar from "../../sections/ConsumerSidebar/ConsumerSidebar";
import RequestQueue from "../../sections/RequestQueue/RequestQueue";
import OrderHistory from "../../sections/OrderHistory/OrderHistory";
import OrderDetails from "../../sections/OrderDetails/OrderDetails";
import RequestDetails from "../../sections/RequestDetails/RequestDetails";
import AddProductModal from "../../components/AddProductModal/AddProductModal";
import Popup from "../../components/Popuppage/Popup";

const ConsumerDashboard = () => {
  return (
    <div className={styles.mainwrap}>
      <ConsumerSidebar />
      <div className={styles.mainboard}>
        {/* <ConsumerProfile />
        <RequestQueue />
        <OrderDetails/>
        <RequestDetails/> */}

      </div>
    </div>
  );
};

export default ConsumerDashboard;
