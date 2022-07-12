import React from "react";
import ReactMarkdown from "react-markdown/index";
import { RenderTemplate } from "./LightboxTemplates";
import closeIcon from "/img/close.png";

class BookDeets extends React.Component {
  putFocus() {
    let pageStart = document.getElementById("bookTitle");
    pageStart.focus();
  }

  render() {
    const { book, closeHandler, open } = this.props;
    if (open === true) {
      return (
        <RenderTemplate>
          <div id="lightbox" className="lightbox" tabIndex={0}>
            <div className="close">
              <a onClick={closeHandler} tabIndex={0}>
                <img src={closeIcon} alt="Click to close lighbox." />
              </a>
            </div>

            <div className="content" id="bookTitle" tabIndex={0}>
              <h2>{book.title}</h2>
              <div className="byLine">by {book.author}</div>
              <p>
                <ReactMarkdown children={book.description} />
              </p>

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

export default BookDeets;
