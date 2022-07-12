import React from "react";
import styles from "../../css/splash.css";
import spinner from "/svg/spinner.svg";
const Loader = ({ show = true }) => {
  return (
    <div className="spinner">
      <img src={spinner} />
    </div>
  );
};

export default Loader;
