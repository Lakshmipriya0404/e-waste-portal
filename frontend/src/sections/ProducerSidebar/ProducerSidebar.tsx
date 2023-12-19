import React from "react";
import {
  faUser,
  faMapMarkerAlt,
  faCalendar,
  faClock,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profile from "../../assets/consumer_Icon.png";
import styles from "./ProducerSidebar.module.css";

interface ProducerSidebarProps {
  onSelectItem: (itemName: string) => void;
}

const Sidebar: React.FC<ProducerSidebarProps> = ({ onSelectItem }) => {
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
    <div className={styles.sideboard}>
      <img className={styles.profileimg} src={profile} alt="" />
      <div className={styles.welcome}>Hello User</div>
      <button className={styles.sidebtn} >Dashboard</button>
      <div className={styles.sidebarlist}>
        <ul>
          {itemsListIcon.map((icon, index) => (
            <li key={index} onClick={() => onSelectItem(itemsListName[index])}>
              <div className={styles.item}>
                <FontAwesomeIcon icon={icon} />
                <div className={styles.text}>{itemsListName[index]}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
