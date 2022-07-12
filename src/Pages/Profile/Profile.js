import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Header from "/src/Components/Header/Header";
import Footer from "/src/Components/Footer/Footer";
import "./css/index.css";
import profileTitle from "/svg/settingsTitle.svg";
import profileHero from "/img/profile.png";
import editIcon from "/svg/edit.svg";
const states = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { submitSuccess: null, editProfile: false };
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
    let fieldsToCheck = ["name", "email"];
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

    if (errors === false && passwordMatch === true) {
      this.submitProfile(e.target);
    } else {
      this.setState({ submitSuccess: !errors }, () => {
        document.getElementById("alertMessage").focus({ preventScroll: false });
      });
    }
  };

  submitProfile = (form) => {
    let formData = new FormData(form);

    let profile = [...formData].reduce((acc, field) => {
      let obj = (acc[field[0]] = field[1]);
      acc = { ...acc, obj };

      return acc;
    }, {});

    this.props.updateProfile(profile);
    this.setState({ submitSuccess: true, editProfile: false });
  };

  render() {
    const { profile } = this.props;
    return (
      <div id="profilePage">
        <Header />
        <div className="main">
          <div className="hero">
            <div className="pageTitle">
              <img src={profileTitle} />
            </div>
            <img src={profileHero} />
          </div>

          <div className="section wrapper">
            <form
              className="profileForm"
              onSubmit={(e) => {
                this.onSubmit(e);
                return false;
              }}
            >
              <h2>
                Profile
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    this.setState({ editProfile: true });
                  }}
                  className={this.state.editProfile ? "hideLink" : ""}
                  width="30px"
                >
                  <img src={editIcon} width="20px" /> <span>EDIT</span>
                </a>
              </h2>

              {this.state.editProfile === false ? (
                <table cellPadding={0} cellSpacing={0}>
                  <thead>
                    <tr className="visuallyHidden">
                      <th>Name</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="grayBG">
                      <td> Full Name:</td>
                      <td>{this.props.profile.name}</td>
                    </tr>
                    <tr>
                      <td> Email:</td>
                      <td>{this.props.profile.email}</td>
                    </tr>
                    <tr className="grayBG">
                      <td>City:</td>
                      <td>{this.props.profile.city}</td>
                    </tr>
                    <tr c>
                      <td>State:</td>
                      <td>{this.props.profile.state}</td>
                    </tr>
                  </tbody>
                </table>
              ) : (
                <>
                  <div
                    className={
                      this.state.submitSuccess === false ? "alertMessage" : ""
                    }
                    id="alertMessage"
                    tabIndex={0}
                  >
                    {this.state.submitSuccess === false && (
                      <>
                        <p>
                          There are required fields on this page that have not
                          been filled out.
                        </p>

                        <p>Please see errors below.</p>
                      </>
                    )}
                  </div>
                  <div className="formRow">
                    <label htmlFor="name">
                      Full Name<sup>*</sup>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      defaultValue={this.props.profile.name}
                    />
                  </div>
                  <div className="formRow">
                    <label htmlFor="email">
                      Email<sup>*</sup>
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      defaultValue={this.props.profile.email}
                    />
                  </div>
                  <div className="formRow">
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      defaultValue={this.props.profile.city}
                    />
                  </div>
                  <div className="formRow">
                    <label htmlFor="state">State</label>
                    <select
                      type="text"
                      id="state"
                      name="state"
                      defaultValue={this.props.profile.state}
                    >
                      {states.map((state) => (
                        <option
                          value={state}
                          selected={this.props.profile.state === state}
                        >
                          {state}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="requiredFields">
                    <sup>*</sup>Required fields
                  </div>
                  <div className="buttonRow">
                    <button
                      className="cancelButton"
                      type="cancel"
                      onClick={() => this.setState({ editProfile: false })}
                    >
                      CANCEL
                    </button>
                    <button className="buttonBlue" type="submit">
                      SUBMIT
                    </button>
                  </div>
                </>
              )}
            </form>
          </div>

          <Footer />
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

const mapStateToProps = (state) => {
  return {
    profile: state.profile,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
