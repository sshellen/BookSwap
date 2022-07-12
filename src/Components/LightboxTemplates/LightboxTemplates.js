import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";

class RenderTemplate extends React.Component {
  constructor(props) {
    super(props);
  }

  resizeContent() {
    this.lbDiv = document.getElementById("lightbox");
    this.lbDiv.style.width = window.innerWidth + "px";
    this.lbDiv.style.height = window.innerHeight + "px";
  }
  componentDidMount() {
    document.body.classList.add("fixed");
    this.resizeContent();
    document.getElementById("lightbox").focus();
    window.addEventListener("resize", this.resizeContent);
  }

  componentWillUnmount() {
    document.body.classList.remove("fixed");
    window.removeEventListener("resize", this.resizeContent);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, document.body);
  }
}

export { RenderTemplate };
