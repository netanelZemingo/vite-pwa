import React from "react";
import { Link } from "react-router-dom";
import InstallPwaBtn from "./InstallPwaBtn";
import Share from "./Share";

const NavBar = () => {
  return (
    <div>
      <InstallPwaBtn />
      <Share />
      <Link to={"/1"}> page 1</Link>
      <Link to={"/2"}> page 2</Link>
    </div>
  );
};

export default NavBar;
