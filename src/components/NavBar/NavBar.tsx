import React from "react";
import styles from "./NavBar.module.css";
import { Outlet } from "react-router-dom";
import { NavRoutes } from "./NavRoutes";
import NavItem from "./NavItem";

const NavBar: React.FC = () => {
  return (
    <div className={styles.navwrap}>
      <div className={styles.nav}>
        <div className={styles.logo}></div>
        {NavRoutes.slice(0, 5).map((route, index) => (
          <NavItem key={index} path={route.path} name={route.meta.name} />
        ))}
        <div className={styles.navitems}>
          <div className={styles.login}>
            <button>LOGIN</button>
          </div>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default NavBar;
