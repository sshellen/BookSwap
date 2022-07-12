import React from "react";
import { connect } from "react-redux";
import BookDeets from "/src/Components/LightboxTemplates/BookDeets";
import BookList from "/src/Components/LightboxTemplates/BookList";
import AddBook from "/src/Components/LightboxTemplates/AddBook";
import Header from "/src/Components/Header/Header";
import { Link } from "react-router-dom";
import Footer from "/src/Components/Footer/Footer";
import "./css/index.css";
import leftArrow from "/svg/leftArrow.svg";
import myBooksHero from "/img/myBooks.png";
import addBookIcon from "/img/addBook.png";
import booksTitle from "/svg/mybooksTitle.svg";

class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookDetails: {},
      sortedList: [],
      showDetails: false,
      addBook: false,
      bookList: false,
      owner: "",
      showContextMenu: false,
    };
    this.pendingSwaps = 0;
  }

  quickSort = (array, sortBy) => {
    if (array.length < 2) {
      return array;
    }

    const pivotIndex = array.length - 1;
    const pivot = array[pivotIndex];
    const left = [];
    const right = [];

    for (let i = 0; i < pivotIndex; i++) {
      const item = array[i];
      item[sortBy] < pivot[sortBy] ? left.push(item) : right.push(item);
    }

    return [
      ...this.quickSort(left, sortBy),
      pivot,
      ...this.quickSort(right, sortBy),
    ];
  };

  filterAndSort = (list) => {
    let sortBy = document.getElementById("sortBy").value;

    let sortedList = this.quickSort(list, sortBy);

    this.setState({ sortedList });
  };

  showDetails = (book) => {
    this.setState({ showContextMenu: false }, () => {
      this.setState({ showDetails: true, bookDetails: book });
      this.content.classList.add("fixed");
    });
  };

  addBook = () => {
    event.preventDefault();
    this.setState({ showContextMenu: false }, () => {
      this.setState({ addBook: true });
      this.content.classList.add("fixed");
    });
  };

  bookList = (event, owner) => {
    event.preventDefault();
    this.setState({ showContextMenu: false }, () => {
      this.setState({ bookList: true, owner });
      this.content.classList.add("fixed");
    });
  };
  closeDetails = () => {
    event.preventDefault();
    this.setState({ showDetails: false, addBook: false, bookList: false });
    this.content.classList.remove("fixed");
  };

  openCloseMenu = (category) => {
    event.preventDefault();
    let id = event.target.id;

    let open = event.target.classList.contains("open");
    if (open) {
      event.target.classList.remove("open");
      document.getElementById(category + "List").classList.remove("open");
    } else {
      event.target.classList.add("open");
      document.getElementById(category + "List").classList.add("open");
    }
  };

  componentDidMount() {
    this.content = document.getElementsByTagName("body")[0];
    this.sortMenuForm = document.getElementById("sortMenuForm");
    this.sortMenuForm.addEventListener("change", () =>
      this.filterAndSort(this.props.myBooks)
    );

    this.filterAndSort(this.props.myBooks);

    this.pendingSwaps = this.props.matches.length;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.myBooks !== this.props.myBooks) {
      this.filterAndSort(this.props.myBooks);
    }
  }
  checkInterested = (title) => {
    let interested = this.props.interested.filter(
      (book) => book.title === title
    );

    return interested;
  };

  componentWillUnmount() {
    window.removeEventListener("click", this.closeMenus);
  }

  render() {
    const { myBooks, matches, interested } = this.props;

    return (
      <div id="myBooks">
        <Header />
        <div className="main">
          <div className="hero">
            <div className="pageTitle">
              <img src={booksTitle} />
            </div>
            <img src={myBooksHero} />
          </div>
          <div className="section">
            <div className="wrapper">
              <div className="twoCol">
                <h2>
                  My Booklist{" "}
                  <span>
                    <img src={addBookIcon} width="13px" />
                    <a href="#" onClick={this.addBook}>
                      Add A Book
                    </a>
                  </span>
                </h2>

                <form id="sortMenuForm" className="sortMenu">
                  <label htmlFor="sortBy">Sort by:</label>
                  <select id="sortBy">
                    <option value="title">Title</option>
                    <option value="genre">Genre</option>
                  </select>
                </form>
              </div>
              <div className="space20" />
              <div className="availableBooks">
                <table id="myBooksTable">
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Genre</th>
                      <th>Users Interested</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.sortedList.map((book, index) => (
                      <tr key={`myBook${index}`}>
                        <td>
                          {" "}
                          <h3 className="mobile">Book Title:</h3>
                          <a href="#" onClick={() => this.showDetails(book)}>
                            {book.title}
                          </a>
                        </td>
                        <td>
                          <h3 className="mobile">Book Genre:</h3>
                          {book.genre}
                        </td>
                        <td>
                          <h3 className="mobile">Users Interested:</h3>
                          <div>
                            {this.checkInterested(book.title).length > 0
                              ? this.checkInterested(book.title).map(
                                  (obj, index) => (
                                    <div key={`interested${index}`}>
                                      <a
                                        href="#"
                                        onClick={(event) =>
                                          this.bookList(event, obj.user)
                                        }
                                      >
                                        {obj.user}
                                      </a>
                                      <div className="space10" />
                                    </div>
                                  )
                                )
                              : ""}{" "}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="space20" />
            <div className="tableButton wrapper">
              <button
                type="submit"
                className="buttonBlue"
                onClick={() => this.addBook()}
              >
                ADD A BOOK
              </button>
            </div>

            <div className="space40" />
            <div className="wrapper">
              <h2>Pending Swaps</h2>
              <div className="carousel">
                <div className="border"></div>
                <div className="books">
                  {this.pendingSwaps > 0 &&
                    this.props.matches.map((match, index) => (
                      <div key={`pendingSwap${index}`}>
                        {match.theirBook.title}{" "}
                        <i style={{ margin: "0 10px", fontWeight: "bold" }}>
                          for
                        </i>
                        {match.myBook.title}
                      </div>
                    ))}

                  {this.pendingSwaps === 0 && (
                    <h3>You have no pending swaps at this time.</h3>
                  )}
                </div>
                <div className="border" />
              </div>
              <div className="space10" />

              <Link to="/books" className="ctaLink">
                <img src={leftArrow} />
                <span>FIND BOOKS</span>
              </Link>

              <div className="space40" />
              <h2>Recent Swaps</h2>
              <div className="carousel">
                <div className="border"></div>
                <div className="books">
                  <div>
                    The Rum Diary
                    <i style={{ margin: "0 10px", fontWeight: "bold" }}>for</i>
                    Absurdistan
                  </div>
                  <div>
                    The Castle
                    <i style={{ margin: "0 10px", fontWeight: "bold" }}>for</i>
                    Johathan Strange &amp; Mr Norrell
                  </div>
                  <div>
                    A Wild Sheep Chase
                    <i style={{ margin: "0 10px", fontWeight: "bold" }}>for</i>
                    Choke
                  </div>
                </div>
                <div className="border" />
              </div>
            </div>
          </div>
          <Footer />
        </div>

        <BookDeets
          open={this.state.showDetails}
          book={this.state.bookDetails}
          closeHandler={this.closeDetails}
        />
        <AddBook open={this.state.addBook} closeHandler={this.closeDetails} />
        <BookList
          open={this.state.bookList}
          owner={this.state.owner}
          closeHandler={this.closeDetails}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setMyBooks: (myBooks) => {
      dispatch({ type: "SET_MY_BOOKS", myBooks });
    },
    setBookList: (bookList) => {
      dispatch({ type: "SET_BOOK_LIST", bookList });
    },
    setBookActivation: (bookTitle, active) => {
      dispatch({ type: "SET_BOOK_ACTIVATION", bookTitle, active });
    },
  };
};

const mapStateToProps = (state) => {
  return {
    myBooks: state.myBooks,
    matches: state.matches,
    interested: state.interested,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Books);
