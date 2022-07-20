import React from "react";
import { Link } from "react-router-dom";
import "./css/index.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="links">
        <div>
          <h3>ABOUT</h3>
          <ul>
            <Link to="/about">How It Works</Link>
          </ul>
        </div>
        <div>
          <h3>ACCOUNT</h3>
          <ul>
            <li>
              <Link to="/profile">Settings</Link>
            </li>
            <li>Messages</li>
          </ul>
        </div>
        <div>
          <h3>OPTIONS</h3>
          <ul>
            <li>
              <Link to="/mybooks">My Books</Link>
            </li>
            <li>
              <Link to="/books">Find Books</Link>
            </li>
            <li>
              <Link to="/matches">Matches</Link>
            </li>
          </ul>
        </div>
        <img
          src="http://www.blue-bee.com/img/cleardot.png"
          alt=""
          width="1px"
          height="1px"
        />
      </div>
      <div className="copyright">&copy;2022 BookSwap</div>
    </div>
  );
};

export default Footer;
