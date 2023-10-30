import React, { useState } from "react";
import EventGallery from "./pages/Gallery/EventGallery";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const [isGalleryDropdownOpen, setIsGalleryDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isAdmissionDropdownOpen, setIsAdmissionDropdownOpen] = useState(false);

  const handleHoverGallery = () => setIsGalleryDropdownOpen(true);
  const handleLeaveGallery = () => setIsGalleryDropdownOpen(false);

  const handleHoverAbout = () => setIsAboutDropdownOpen(true);
  const handleLeaveAbout = () => setIsAboutDropdownOpen(false);

  const handleHoverAdmission = () => setIsAdmissionDropdownOpen(true);
  const handleLeaveAdmission = () => setIsAdmissionDropdownOpen(false);

  return (
    <nav>
      <Link to="/" className="title" onClick={closeMobileMenu}>
        <img className="lj-logo" src="/Home_Images/lj-logo-new.png" />
      </Link>
      <div className={"menu"} onClick={handleClick}>
        <i
          className={
            click ? "fa-solid fa-xmark fa-xl" : "fa-solid fa-bars fa-xl"
          }
        />
      </div>
      <ul className={click ? "open" : ""}>
        <li>
          <NavLink to="/home" onClick={closeMobileMenu}>
            Home
          </NavLink>
        </li>
        <li>
          <div
            onMouseEnter={handleHoverAbout}
            onMouseLeave={handleLeaveAbout}
            className="nav-link"
          >
            About Us
            <i className="fa-solid fa-angle-down" />
            {isAboutDropdownOpen && (
              <div className="dropdown-content">
                <Link to="/about/vision&mission" onClick={handleLeaveAbout}>
                  Vision & Mission
                </Link>
                <Link to="/about/director-message" onClick={handleLeaveAbout}>
                  Director Message
                </Link>
                <Link to="/about/management" onClick={handleLeaveAbout}>
                  Management
                </Link>
                <Link to="/about/teams" onClick={handleLeaveAbout}>
                  Team Little Jewels
                </Link>
              </div>
            )}
          </div>
        </li>
        <li>
          <div
            onMouseEnter={handleHoverGallery}
            onMouseLeave={handleLeaveGallery}
            className="nav-link"
          >
            Gallery
            <i className="fa-solid fa-angle-down" />
            {isGalleryDropdownOpen && (
              <div className="dropdown-content">
                <Link to="/gallery/events" onClick={handleLeaveGallery}>
                  Events
                </Link>
                <Link to="/gallery/celebrations" onClick={handleLeaveGallery}>
                  Activities
                  {/* the code and resources of Activities are named as Celebrations in website folder */}
                </Link>
                <Link to="/gallery/achievements" onClick={handleLeaveGallery}>
                  Achievements
                </Link>
                <Link
                  to="/gallery/sportsandwellness"
                  onClick={handleLeaveGallery}
                >
                  Sports and Wellness
                </Link>
                <Link to="/gallery/media" onClick={handleLeaveGallery}>
                  Media Coverage
                </Link>
              </div>
            )}
          </div>
        </li>
        <li>
          <NavLink to="/academics" onClick={closeMobileMenu}>
            Academics
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={closeMobileMenu}>
            Careers
          </NavLink>
        </li>
        <li>
          <div
            onMouseEnter={handleHoverAdmission}
            onMouseLeave={handleLeaveAdmission}
            className="nav-link"
          >
            Admission
            <i className="fa-solid fa-angle-down" />
            {isAdmissionDropdownOpen && (
              <div className="dropdown-content">
                <Link
                  to="/admission/enquiry-form"
                  onClick={handleLeaveAdmission}
                >
                  Enquiry Form
                </Link>
                <Link
                  to="/admission/admission-guidelines"
                  onClick={handleLeaveAdmission}
                >
                  Admission Guidelines
                </Link>
                {/* <NavLink to="/admission" onClick={closeMobileMenu}>
            Admission
          </NavLink> */}
              </div>
            )}
          </div>
        </li>
        <li>
          <NavLink to="/badjate-group" onClick={closeMobileMenu}>
            Badjate Group
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
