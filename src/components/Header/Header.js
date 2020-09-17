import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import "./style.css";

const Header = () => {
  // let navIcon = 'menu-outline'

  let onNavMenuClick = () => {
    setOpen(!open);
    $(".js--main-nav").slideToggle(200);
  };

  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {}, []);

  return (
    <header>
      <nav>
        <div className="row container">
          RBCPC Preschool
          <ul className="main-nav js--main-nav">
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/programs">Programs</Link>
            </li>
            <li>
              <Link to="/programs">Tuition</Link>
            </li>
            <li>
              <Link to="/programs">Parents</Link>
            </li>
            <li>
              <Link to="/programs">Special Events</Link>
            </li>
          </ul>
          <Link
            ref={ref}
            onClick={onNavMenuClick}
            to=""
            className="mobile-nav-icon js--nav-icon"
          >
            <ion-icon
              name={`${open ? "close-outline" : "menu-outline"}`}
            ></ion-icon>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
