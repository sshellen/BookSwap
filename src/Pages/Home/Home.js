import React from "react";
import { connect } from "react-redux";
import "./css/index.css";
import logo from "/svg/logo.svg";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { submitSuccess: null, passwordMatch: true };
  }
  clearErrors = (formEls) => {
    Array.prototype.slice.call(formEls).map((formEl) => {
      formEl.parentNode.classList.remove("required");

      if (formEl.parentNode.getElementsByClassName("requiredTag")[0]) {
        formEl.parentNode.getElementsByClassName("requiredTag")[0].remove();
      }
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    let formEls = e.target.elements;
    this.clearErrors(formEls);
    let fieldsToCheck = [
      "name",
      "email",
      "username",
      "password",
      "passwordCopy",
    ];
    let errors = false;
    let passwordMatch = true;
    Array.prototype.slice.call(formEls).map((formEl) => {
      if (fieldsToCheck.includes(formEl.name) && formEl.value === "") {
        formEl.parentNode.classList.add("required");
        let requiredField = document.createElement("span");
        requiredField.className = "requiredTag";
        requiredField.appendChild(document.createTextNode("REQUIRED FIELD "));

        formEl.parentNode
          .getElementsByTagName("label")[0]
          .prepend(requiredField);
        errors = true;
      }
    });

    if (formEls["password"].value !== formEls["passwordCopy"].value) {
      passwordMatch = false;
      this.setState({ passwordMatch: false });
    }

    if (errors === false && passwordMatch === true) {
      this.submitProfile(e.target);
    } else {
      this.setState({ submitSuccess: !errors, passwordMatch }, () => {
        document.getElementById("alertMessage").focus({ preventScroll: false });
      });
    }
  };

  submitProfile = (form) => {
    let formData = new FormData(form);

    let profile = [...formData].reduce((acc, field) => {
      if (field[0] !== "passwordCopy") {
        let obj = (acc[field[0]] = field[1]);
        acc = { ...acc, obj };
      }
      return acc;
    }, {});

    this.props.updateProfile(profile);
    this.props.history.push("/myBooks");
  };
  render() {
    return (
      <div id="homePage" className="section">
        <img src={logo} className="logo" />
        <h3 className="tagline">
          Keep your bookshelf in order. Trade instead of save.
        </h3>
        <div className="dashedLine wrapper" />
        <div className="twoCol">
          <h4>Sign In</h4>
          <form
            className="profileForm"
            onSubmit={(e) => {
              this.props.history.push("/myBooks");
              return false;
            }}
          >
            <div className="formRow">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                defaultValue=""
              />
            </div>
            <div className="formRow">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                defaultValue=""
              />
            </div>

            <div className="buttonRow">
              <button className="buttonBlue" type="submit">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
        <div className="dashedLine wrapper" />
        <div
          className={
            this.state.submitSuccess === false ||
            this.state.passwordMatch === false
              ? "alertMessage"
              : ""
          }
          id="alertMessage"
          tabIndex={0}
        >
          {this.state.passwordMatch === false && (
            <p>Your passwords don't match.</p>
          )}
          {this.state.submitSuccess === false && (
            <>
              <p>
                There are required fields on this page that have not been filled
                out.
              </p>

              <p>Please see errors below.</p>
            </>
          )}
        </div>
        <div className="twoCol">
          <h4>Sign Up</h4>
          <form
            className="profileForm"
            onSubmit={(e) => {
              this.onSubmit(e);
              return false;
            }}
          >
            <div className="formRow">
              <label htmlFor="name">
                Name<sup>*</sup>
              </label>
              <input type="text" id="name" name="name" defaultValue="" />
            </div>
            <div className="formRow">
              <label htmlFor="email">
                Email<sup>*</sup>
              </label>
              <input type="text" id="email" name="email" defaultValue="" />
            </div>
            <div className="formRow">
              <label htmlFor="username">
                Username<sup>*</sup>
              </label>
              <input
                type="text"
                id="username"
                name="username"
                defaultValue=""
              />
            </div>
            <div className="formRow">
              <label htmlFor="password">
                Password<sup>*</sup>
              </label>
              <input
                type="password"
                id="password"
                name="password"
                defaultValue=""
              />
            </div>
            <div className="formRow">
              <label htmlFor="passwordCopy">
                Re-Type Password<sup>*</sup>
              </label>
              <input
                type="password"
                id="passwordCopy"
                name="passwordCopy"
                defaultValue=""
              />
            </div>
            <div className="requiredFields">
              <sup>*</sup>Required fields
            </div>
            <div className="buttonRow">
              <button className="buttonBlue" type="submit">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateProfile: (profile) => {
      dispatch({ type: "UPDATE_PROFILE", profile });
    },
  };
};

export default connect("", mapDispatchToProps)(Home);
