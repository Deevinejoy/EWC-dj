import React from "react";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="container-fluid ">
      <ul className="container nav-lists">
        <li className="nav-list">
          <Link to="home" spy={true} duration={100} smooth>
            Home
          </Link>
        </li>
        <li className="nav-list">
          <Link to="about" spy={true} duration={100} smooth>
            About
          </Link>
        </li>
        <li className="nav-list">
          <Link to="prog" spy={true} duration={100} smooth>
            Programs
          </Link>
        </li>
        <li className="nav-list">
          <Link to="contact" spy={true} duration={100} smooth>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
