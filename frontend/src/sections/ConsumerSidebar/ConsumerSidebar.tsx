import React from "react";
import {
  faUser,
  faCalendar,
  faClock,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profile from "../../assets/consumer_Icon.png";
import styles from "./ConsumerSidebar.module.css";

interface ConsumerSidebarProps {
  onSelectItem: (itemName: string) => void;
}
const ConsumerSidebar: React.FC<ConsumerSidebarProps> = ({ onSelectItem }) => {
  const itemsListIcon = [faUser, faCalendar, faClock, faAngleRight];
  const itemsListName = [
    "Profile",
    "Request Queue",
    "Order History",
    "Signed Out",
  ];
  return (
    <div className={styles.sideboard}>
      <img className={styles.profileimg} src={profile} alt="" />
      <div className={styles.welcome}>Hello Consumer</div>
      <button className={styles.sidebtn}>Dashboard</button>
      <div className={styles.sidebarlist}>
        <ul className={styles.listgroup}>
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

export default ConsumerSidebar;
