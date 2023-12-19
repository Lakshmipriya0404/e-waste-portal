import React from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";

interface NavItemProps {
  path: string;
  name: string;
}

const NavItem: React.FC<NavItemProps> = ({ path, name }) => {
  return (
    <div className={styles.navitems}>
      <Link to={path}>{name}</Link>
    </div>
  );
};

export default NavItem;
