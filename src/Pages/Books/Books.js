import React from "react";
import { connect } from "react-redux";
import BookTable from "/src/Components/BookTable/BookTable";
import BookDeets from "/src/Components/LightboxTemplates/BookDeets";
import BookList from "/src/Components/LightboxTemplates/BookList";
import Header from "/src/Components/Header/Header";
import Checkbox from "/src/Components/Checkbox";
import Footer from "/src/Components/Footer/Footer";
import "./css/index.css";
import findBooks from "/svg/findBooks.svg";
import bookShelf from "/img/bookshelf.png";

class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookDetails: {},
      sortedList: [],
      showDetails: false,
      addBook: false,
      bookList: false,
      showContextMenu: false,
      owner: "",
    };
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
    let filters = Array.prototype.slice
      .call(this.filtersForm)
      .reduce((acc, val) => {
        if (val.checked === true) acc = acc.concat(val.name);
        return acc;
      }, []);

    let listToSort =
      filters.length === 0
        ? list
        : list.filter(
            (val) => filters.includes(val.owner) || filters.includes(val.genre)
          );

    let sortedList = this.quickSort(listToSort, sortBy);

    this.setState({ sortedList });
  };

  showDetails = (book) => {
    event.preventDefault();
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
    this.filtersForm = document
      .getElementById("booklistFilters")
      .querySelectorAll("input");
    this.sortMenuForm = document.getElementById("sortMenuForm");
    this.content = document.getElementsByTagName("body")[0];

    this.filtersForm.forEach((checkbox) => {
      checkbox.addEventListener("click", () =>
        this.filterAndSort(this.props.allBooks)
      );
    });

    this.sortMenuForm.addEventListener("change", () =>
      this.filterAndSort(this.props.allBooks)
    );

    this.filterAndSort(this.props.allBooks);
  }

  interestedHandler = (interested, title) => {
    this.props.setBookInterest(interested, title);
  };

  componentWillUnmount() {
    window.removeEventListener("click", this.closeMenus);
  }

  render() {
    const { myBooks, matches, allBooks } = this.props;

    return (
      <div id="bookSwapFindBooks">
        <Header />
        <div className="main">
          <div className="hero">
            <div className="pageTitle">
              <img src={findBooks} />
            </div>
            <img src={bookShelf} />
          </div>

          <div className="findBooks section">
            <div className="wrapper">
              <div className="twoCol">
                <h2>Book List</h2>

                <form id="sortMenuForm" className="sortMenu">
                  <label htmlFor="sortBy">Sort by:</label>
                  <select id="sortBy">
                    <option value="title">Title</option>
                    <option value="genre">Genre</option>
                    <option value="owner">Owner</option>
                  </select>
                </form>
              </div>
              <p>
                Mark any book that you may want to trade for as "interested".
              </p>
            </div>

            <div className="wrapper">
              <div className="twoCol formAndFilter">
                <form id="booklistFilters" className="filter">
                  <label>
                    <a
                      href="#"
                      className="open"
                      id="genreLabel"
                      onClick={() => this.openCloseMenu("genre")}
                    >
                      Genre
                    </a>
                  </label>
                  <ul id="genreList" className="open">
                    <li>
                      <Checkbox name="Fiction" />
                      <label htmlFor="Fiction">Fiction</label>
                    </li>
                    <li>
                      <Checkbox name="Sci-Fi" />
                      <label htmlFor="Sci-Fi">Sci-Fi</label>
                    </li>
                    <li>
                      <Checkbox name="Non Fiction" />
                      <label htmlFor="Non Fiction">Non Fiction</label>
                    </li>
                    <li>
                      <Checkbox name="Fantasy" />
                      <label htmlFor="Fantasy">Fantasy</label>
                    </li>
                    <li>
                      <Checkbox name="Biography" />
                      <label htmlFor="Biography">Biography</label>
                    </li>
                    <li>
                      <Checkbox name="History" />
                      <label htmlFor="Histroy">History</label>
                    </li>
                  </ul>
                </form>
                <BookTable
                  list={this.state.sortedList}
                  onClickHandler={this.showDetails}
                  bookListHandler={this.bookList}
                  interestedHandler={this.interestedHandler}
                />
              </div>

              <div className="space20" />
              <div className="dashedLine" />
              <div className="space20" />
              <div className="tableButton">
                <button
                  type="submit"
                  className="buttonBlue"
                  onClick={() => this.props.history.push("/matches")}
                >
                  SEE YOUR MATCHES
                </button>
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
    setBookInterest: (interested, title) => {
      dispatch({ type: "SET_BOOK_INTEREST", interested, title });
    },
  };
};

const mapStateToProps = (state) => {
  return {
    myBooks: state.myBooks,
    matches: state.matches,
    allBooks: state.allBooks,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Books);
