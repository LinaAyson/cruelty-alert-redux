import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <ul className="flex p-4 bg-rose-950 justify-evenly text-neutral-200">
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
  );
};

export default Navbar;
