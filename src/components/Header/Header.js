import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Header = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  let onNavMenuClick = () => {
    let container = document.querySelector(".js--main-nav");
    setOpen(!open);
    if (!container.classList.contains("active")) {
      container.classList.add("active");
      container.style.height = "auto";

      let height = container.clientHeight + "px";

      container.style.height = "0px";

      setTimeout(function () {
        container.style.height = height;
      }, 0);
    } else {
      container.style.height = "0px";

      container.addEventListener(
        "transitionend",
        function () {
          container.classList.remove("active");
          container.style.height = null;
        },
        {
          once: true,
        }
      );
    }
  };

  useEffect(() => {}, []);

  return (
    <header>
      <nav>
        <div className="container">
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
