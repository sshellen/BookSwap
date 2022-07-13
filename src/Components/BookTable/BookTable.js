import React from "react";
import { Link } from "react-router-dom";
import Checkbox from "../Checkbox";
import "./css/index.css";
const BookTable = ({
  list,
  onClickHandler,
  bookListHandler,
  interestedHandler,
}) => {
  return (
    <div className="results">
      <table className="bookList">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col" width={"20%"}>
              Genre
            </th>
            <th scope="col">Owner</th>
            <th scope="col" style={{ textAlign: "center" }}>
              Interested
            </th>
          </tr>
        </thead>
        <tbody>
          {list.map((book, ind) => (
            <tr key={`row${ind}`}>
              <td>
                <a href="#" onClick={() => onClickHandler(book)}>
                  {book.title}
                </a>
                <div className="byLine">{book.author}</div>
              </td>
              <td>
                <h3 className="mobile">Genre:</h3>
                {book.genre}
              </td>
              <td>
                <h3 className="mobile">Owner:</h3>
                <a href="#" onClick={(e) => bookListHandler(e, book.owner)}>
                  {book.owner}
                </a>
              </td>
              <td>
                <label htmlFor={`row${ind}`} className="mobile">
                  Interested:
                </label>
                <Checkbox
                  id={`row${ind}`}
                  name={book.title}
                  style={{ width: "30px" }}
                  checked={book.interested}
                  callback={interestedHandler}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookTable;
