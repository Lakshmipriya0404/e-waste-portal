import React from "react";
import { Outlet } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div>NavBar</div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default NavBar;
