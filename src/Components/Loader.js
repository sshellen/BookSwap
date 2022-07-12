import React from "react";
import styles from "../../css/splash.css";
import spinner from "/img/close.png";
const Loader = ({ show = true }) => {
  return (
    <div className="spinner">
      <img src={spinner} />
    </div>
  );
};

export default Loader;
