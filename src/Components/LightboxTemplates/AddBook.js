import React from "react";
import { RenderTemplate } from "./LightboxTemplates";
import { connect } from "react-redux";
import closeIcon from "/img/close.png";

class AddBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = { submitSuccess: false };
  }
  putFocus() {
    let pageStart = document.getElementById("addBookTitle");
    pageStart.focus();
  }

  handleSubmit = (form) => {
    let formData = new FormData(form);

    let newBook = [...formData].reduce((acc, field) => {
      let obj = (acc[field[0]] = field[1]);
      return (acc = { ...acc, obj });
    }, {});
    this.props.addBook(newBook);
    this.setState({ submitSuccess: true });
  };

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
    let fieldsToCheck = ["bookTitle", "bookAuthor", "bookDescription"];
    let errors = false;

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
    if (errors) {
      this.setState({ submitSuccess: "false" }, () => {
        document.getElementById("alertMessage").focus({ preventScroll: false });
      });
    } else {
      this.handleSubmit(e.target);
    }
  };

  render() {
    const { spotlight, closeHandler, open } = this.props;
    if (open === true) {
      return (
        <RenderTemplate>
          <div id="lightbox" className="lightbox" tabIndex={0}>
            <div className="close">
              <a onClick={closeHandler} href="#" tabIndex={0}>
                <img src={closeIcon} alt="Click to close lighbox." />
              </a>
            </div>
            {this.state.submitSuccess === false ? (
              <div className="content" id="addBookLightbox" tabIndex={0}>
                {this.state.submitSuccess === "false" && (
                  <div className="alertMessage" id="alertMessage" tabIndex={0}>
                    <p>
                      There are required fields on this page that have not been
                      filled out.
                    </p>

                    <p>Please see errors below.</p>
                  </div>
                )}
                <form
                  className="addBookForm"
                  onSubmit={(e) => {
                    this.onSubmit(e, [
                      "bookTitle",
                      "bookAuthor",
                      "bookDescription",
                    ]);
                    return false;
                  }}
                >
                  <div className="lightboxCols">
                    <div className="rightCol" tabIndex={0}>
                      <h2>Add a Book</h2>

                      <div className="formRow">
                        <input
                          type="hidden"
                          name="active"
                          defaultValue={true}
                        />
                        <label htmlFor="bookTitle" className="required">
                          Title<sup>*</sup>
                        </label>
                        <input
                          type="text"
                          id="bookTitle"
                          name="title"
                          defaultValue=""
                        />
                      </div>
                      <div className="formRow">
                        <label htmlFor="bookAuthor" className="required">
                          Author<sup>*</sup>
                        </label>
                        <input
                          type="text"
                          id="bookAuthor"
                          name="author"
                          defaultValue=""
                        />
                      </div>
                      <div className="formRow">
                        <label htmlFor="bookDescription" className="required">
                          Description<sup>*</sup>
                        </label>

                        <textarea
                          id="bookDescription"
                          name="description"
                          rows="10"
                        ></textarea>
                      </div>
                      <div className="formRow">
                        <label htmlFor="bookGenre">Genre</label>
                        <select name="genre" id="bookGenre">
                          <option value="Fiction">Fiction</option>
                          <option value="sciFi">Sci-Fi</option>
                          <option value="nonFiction">Non Fiction</option>
                          <option value="Fantasy">Fantasy</option>
                          <option value="Biography">Biography</option>
                          <option value="History">History</option>
                        </select>
                      </div>
                      <div className="formRow">
                        <label htmlFor="publishedBy">Published by</label>
                        <input
                          type="text"
                          id="publishedBy"
                          name="published"
                          defaultValue=""
                        />
                      </div>
                    </div>
                    <div className="requiredFields">
                      <sup>*</sup>Required fields
                    </div>
                  </div>
                  <div className="buttonRow">
                    <button className="cancelButton" onClick={closeHandler}>
                      <span className="visuallyHidden">
                        Click to close light-box.
                      </span>
                      CANCEL
                    </button>
                    <button type="submit" className="buttonBlue">
                      SUBMIT
                    </button>
                  </div>
                </form>
                <div tabIndex={0} onFocus={this.putFocus} />
              </div>
            ) : (
              <div className="content" id="addBookLightbox" tabIndex={0}>
                <h3>You've successfully added a book to your list.</h3>

                <div className="buttonRow">
                  <button className="buttonBlue" onClick={closeHandler}>
                    <span className="visuallyHidden">
                      Click to close light-box.
                    </span>
                    CLOSE
                  </button>
                </div>
                <div tabIndex={0} onFocus={this.putFocus} />
              </div>
            )}
          </div>
        </RenderTemplate>
      );
    } else {
      return null;
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addBook: (book) => {
      dispatch({ type: "ADD_BOOK", book });
    },
  };
};

export default connect("", mapDispatchToProps)(AddBook);
