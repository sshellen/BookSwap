import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import "./css/index.css";
import logo from "/svg/logo.svg";
import avatar from "/img/avatar.png";

const Header = (link) => {
  let menuOpen = false;
  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (e.target.id === "dropDownLink" && menuOpen === false) {
        showOptions("accountDropDown", e);
      } else {
        hideOptions("accountDropDown");
      }
    });
    window.addEventListener("keyup", (e) => {
      let keyCode = e.keyCode || e.which;
      if (typeof keyCode !== "undefined" && keyCode === 13) {
        if (e.target.id === "dropDownLink" && menuOpen === false) {
          showOptions("accountDropDown", e);
        } else {
          hideOptions("accountDropDown");
        }
      }
    });
  }, []);

  const showOptions = (id, e) => {
    let margin =
      window.innerWidth > 1440 ? Math.round((window.innerWidth - 1440) / 2) : 0;
    let target = e.target.getBoundingClientRect();
    let menu = document.getElementById(id);
    menu.style.left = Math.round(target.x) - margin - 20 + "px";
    menu.style.top = Math.round(target.y + target.height) + "px";
    menu.classList.add("showMenu");
    menuOpen = true;
  };
  const hideOptions = (id) => {
    let menu = document.getElementById(id);
    if (menu) {
      menu.classList.remove("showMenu");
      menuOpen = false;
    }
  };

  return (
    <div id="header">
      <div className="blueBg wrapper desktop">
        <div className="header">
          <div className="logo">
            <Link to="/myBooks">
              {" "}
              <img src={logo} />
            </Link>
          </div>
          <div className="nav">
            <Link to="/about">ABOUT</Link>
            <Link to="/mybooks">MY BOOKS</Link>
            <Link to="/books">FIND BOOKS</Link>
            <Link to="/matches">MY MATCHES</Link>
          </div>

          <div id="login">
            <img
              tabIndex={0}
              src={avatar}
              style={{ width: "40px" }}
              alt="Click to open account settings"
              id="dropDownLink"
            />
          </div>
        </div>
        <div className="pulldownMenu" id="accountDropDown">
          <ul>
            <li>
              <Link to={"/profile"}>Settings</Link>
            </li>
            <li>Messages</li>
            <li>
              <Link to="/home">Sign Out</Link>
            </li>
          </ul>
        </div>
      </div>
      <HamburgerMenu />
    </div>
  );
};

export default Header;
