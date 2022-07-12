import React, { useState, useEffect } from "react";
import closeIcon from "/img/close.png";

const ShowDeets = ({ title, onClickHandler }) => {
  const [details, setDetails] = useState({});

  const isEmpty = (obj) => {
    return Object.keys(obj).length === 0;
  };

  useEffect(() => {
    import("/data/bookList.js").then((data) => {
      console.log(data.default);
      let book = data.default.filter((book) => book.title === title);
      setDetails(book[0]);
    });
  }, []);

  return (
    <>
      {!isEmpty(details) > 0 && (
        <div className="lightBox">
          <div className="wrapper">
            <div className="bookDetails">
              <div className="summary">
                <h3 className="title">{details.title}</h3>
                <p>
                  <strong>{details.author}</strong>
                  <br />
                  <i>{details.published}</i>
                </p>
                <p>{details.summary}</p>
                <button className="buttonBlue" onClick={onClickHandler}>
                  DONE
                </button>
              </div>
            </div>
            <a href="#" className="close" onClick={onClickHandler}>
              <img src={closeIcon} />
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default ShowDeets;
