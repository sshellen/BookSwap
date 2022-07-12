import React from "react";
import { connect } from "react-redux";
import { RenderTemplate } from "./LightboxTemplates";
import Checkbox from "../Checkbox";
import closeIcon from "/img/close.png";
class BookList extends React.Component {
  constructor(props) {
    super(props);
  }
  putFocus() {
    let pageStart = document.getElementById("bookListTitle");
    pageStart.focus();
  }

  interestedHandler = (interested, title) => {
    this.props.setBookInterest(interested, title);
  };

  render() {
    const { owner = "", closeHandler, open } = this.props;
    if (open === true) {
      return (
        <RenderTemplate>
          <div id="lightbox" className="lightbox" tabIndex={0}>
            <div className="close">
              <a onClick={closeHandler} tabIndex={0}>
                <img src={closeIcon} alt="Click to close lighbox." />
              </a>
            </div>

            <div className="content" id="bookListTitle" tabIndex={0}>
              <h2>Booklist for {this.props.owner}</h2>
              <table id="usersBookList">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Interested</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.allBooks.map(
                    (book, index) =>
                      book.owner &&
                      book.owner === owner && (
                        <tr key={`bookInLightbox${index}`}>
                          <td>{book.title}</td>
                          <td>{book.genre}</td>
                          <td align="center">
                            {" "}
                            <Checkbox
                              name={book.title}
                              style={{ width: "30px" }}
                              checked={book.interested}
                              callback={this.interestedHandler}
                            />
                          </td>
                        </tr>
                      )
                  )}
                </tbody>
              </table>

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
    setBookInterest: (interested, title) => {
      dispatch({ type: "SET_BOOK_INTEREST", interested, title });
    },
  };
};

const mapStateToProps = (state) => {
  return {
    allBooks: state.allBooks,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
