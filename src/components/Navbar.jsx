import React from "react";
import { Link } from "react-router-dom";
// import './component.css';
const Navbar = () => {
  return (
    <div className="comp">
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/service"}>Service</Link>
    </div>
  );
};

export default Navbar;
