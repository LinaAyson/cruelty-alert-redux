import React from "react";
import { Link } from "react-router-dom";
// import logo from "../assets/cruelty-icon-v.png";

const Navbar = () => {
  return (
    <header>
      <ul className="flex py-8 text-lg font-bold bg-rose-950 justify-evenly text-neutral-200 ">
        <li>
          <Link to="/" className="hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:underline">
            About Animal Cruelty
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
