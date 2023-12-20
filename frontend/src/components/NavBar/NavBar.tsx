import React from "react";
import styles from "./NavBar.module.css";
import { Outlet } from "react-router-dom";
import { NavRoutes } from "./NavRoutes";
import NavItem from "./NavItem";
import ProgressBar from "./ProgressBar";
import calculateScrollPercent from "../../utils/scrollPercent";
import logo from "../../assets/E_-_KARTAVYA__1_-removebg-preview.png";

const NavBar: React.FC = () => {
  const calculateNavbarStyle = (scrollPercentage: number) => {
    const navbarOpacity = 1 - scrollPercentage / 500;
    return {
      opacity: navbarOpacity,
    };
  };

  const scrollPercentage = calculateScrollPercent();
  const navbarStyle = calculateNavbarStyle(scrollPercentage);
  return (
    <div className={styles.navwrap}>
      <ProgressBar scrollPercent={scrollPercentage} />
      <div className={styles.nav}>
        <div className={styles.image}>
          <img className={styles.pageLogo} src={logo} />
        </div>
        {NavRoutes.slice(0, 8).map((route, index) => (
          <NavItem key={index} path={route.path} name={route.meta.name} />
        ))}
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default NavBar;
