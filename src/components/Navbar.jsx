import React from "react";
import { Link } from "react-router-dom";
// import logo from "../assets/cruelty-icon-v.png";

const Navbar = () => {
  return (
    <div className="">
      <ul className="flex py-8 bg-rose-950 justify-evenly text-neutral-200">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Animal Cruelty</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
