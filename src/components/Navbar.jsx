import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <nav>
      <Link to="/" className="title">
        <img className="lj-logo" src="./src/assets/img/lj-logo.png" />
      </Link>
      <div className={"menu"} onClick={handleClick}>
        <i
          className={
            click ? "fa-solid fa-xmark fa-xl" : "fa-solid fa-bars fa-xl"
          }
        />
      </div>
      <ul className={click ? "open" : "close"}>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">
            About Us
            <i className="fa-solid fa-angle-down" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/gallery">
            Gallery
            <i className="fa-solid fa-angle-down" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/academics">Academics</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact Us</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
