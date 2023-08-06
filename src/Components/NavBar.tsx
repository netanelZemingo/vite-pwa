import React from "react";
import { Link } from "react-router-dom";
import InstallPwaBtn from "./InstallPwaBtn";
import Share from "./Share";

const NavBar = () => {
  return (
    <div>
      <InstallPwaBtn />
      <Share />
      <Link to={"/1"}> Network Only </Link>
      <Link to={"/2"}> Cache First</Link>
      <Link to={"/3"}> StaleWhileRevalidate</Link>
    </div>
  );
};

export default NavBar;
