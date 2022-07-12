import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HamburgerMenu = () => {
  const [menuState, setMenuState] = useState("closed");

  useEffect = () => {};

  const toggleMenu = () => {
    setMenuState(menuState === "closed" ? "open" : "closed");
  };

  const putFocus = () => {
    let menuStart = document.getElementById("closeIcon");
    menuStart.focus();
  };

  return (
    <div className="blueBg wrapper mobile">
      <div className="header">
        <div className="logo">
          <Link to="/myBooks">
            <img src="/svg/logo.svg" />
          </Link>
        </div>
        <div className="nav">
          <a href="#" onClick={toggleMenu} id="closeIcon">
            <img
              src={
                menuState === "closed"
                  ? "/img/hamburgerMenu.png"
                  : "/img/whiteCloseIcon.png"
              }
              className="hamburgerIcon"
            />
          </a>
        </div>
      </div>
      <div className={menuState === "open" ? "menu open" : "menu"}>
        <ul>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/mybooks">MY BOOKS</Link>
          </li>
          <li>
            <Link to="/books">FIND BOOKS</Link>
          </li>
          <li>
            <Link to="matches">MATCHES</Link>
          </li>
          <li>
            ACCOUNT
            <ul>
              <li>
                <Link to="profile" onBlur={putFocus}>
                  SETTINGS
                </Link>
              </li>
              <li>MESSAGES</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;