import React from "react";
import styles from "./Dashboard.module.css";
import {
  faUser,
  faMapMarkerAlt,
  faCalendar,
  faClock,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profile from "../../assets/profile.png";

const Dashboard = () => {
  const itemsListIcon = [
    faUser,
    faMapMarkerAlt,
    faCalendar,
    faClock,
    faAngleRight,
  ];
  const itemsListName = [
    "Profile",
    "Nearest E-waste Facilitator",
    "Recent Requests",
    "Disposal History",
    "Signed Out",
  ];

  return (
    <div className={styles.mainwrap}>
      <div className={styles.sideboard}>
        <img src={profile} alt="" />
        <div className={styles.welcome}>Hello User</div>
        <button className={styles.sidebtn}>Dashboard</button>
        <div className={styles.sidebarlist}>
          <ul>
            {itemsListIcon.map((icon, index) => (
              <li key={index}>
                <div className={styles.item}>
                  <FontAwesomeIcon icon={icon} />
                  <div className={styles.text}>{itemsListName[index]}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.mainboard}></div>
    </div>
  );
};

export default Dashboard;
