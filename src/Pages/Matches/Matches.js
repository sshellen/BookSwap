import React from "react";
import { connect } from "react-redux";
import BookDeets from "/src/Components/LightboxTemplates/BookDeets";
import BookList from "/src/Components/LightboxTemplates/BookList";
import Header from "/src/Components/Header/Header";
import Footer from "/src/Components/Footer/Footer";
import "./css/index.css";
import matchTitle from "/svg/matchesTitle.svg";
import matchesHero from "/img/matches.png";
import swapIcon from "/svg/swapIcon.svg";
import { Link } from "react-router-dom";

class Matches extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookDetails: {},
      showDetails: false,
      bookList: false,
      theOnesILike: [],
      theOnesTheyLike: [],
      showContextMenu: false,
      owner: "",
      books: [],
      matches: [],
      selected: [],
      rowsSelected: [],
      theChosen: [],
      myBook: {},
      theirBook: {},
    };
  }

  getBook = (title) => {
    return this.state.books.filter((book) => book.title === title);
  };

  addToSelected = (e, myBook, theirBook) => {
    let title = e.target.value;
    let theChosen = this.state.theOnesTheyLike.filter(
      (book) => book.title === title
    );
    let theOnesTheyLike = this.state.theOnesTheyLike.filter(
      (book) => book.title !== title
    );

    this.setState({
      theOnesTheyLike,
      rowsSelected: [
        ...this.state.rowsSelected,
        {
          [e.target.name]: e.target.value,
          theChosen: [...this.state.theChosen, ...theChosen],
          myBook,
          theirBook,
        },
      ],
    });
  };

  includesTitle = (title) => {
    let selection = this.state.rowsSelected.reduce((acc, obj) => {
      for (let key in obj) {
        if (key === title) {
          acc = obj[key];
        }
      }
      return acc;
    }, "");
    return selection;
  };

  takeOffList = (e, bookTitle) => {
    e.preventDefault();

    let index = this.state.rowsSelected.reduce((acc, obj, index) => {
      for (let key in obj) {
        if (key === bookTitle) {
          acc = index;
        }
      }
      return acc;
    }, 0);

    this.setState({
      theOnesTheyLike: [
        ...this.state.theOnesTheyLike,
        ...this.state.rowsSelected[index].theChosen,
      ],
      rowsSelected: this.state.rowsSelected
        .slice(0, index)
        .concat(
          this.state.rowsSelected.slice(
            index + 1,
            this.state.rowsSelected.length
          )
        ),
    });
  };

  showDetails = (title) => {
    event.preventDefault();
    let book = this.getBook(title)[0];
    this.setState({ showContextMenu: false }, () => {
      this.setState({ showDetails: true, bookDetails: book });
      this.content.classList.add("fixed");
    });
  };

  closeDetails = () => {
    event.preventDefault();
    this.setState({ showDetails: false, bookList: false });
    this.content.classList.remove("fixed");
  };

  onSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);

    let updatedMatches = this.props.matches.reduce((acc, match, index) => {
      if (e.target["checkbox" + index]) {
        acc = acc.concat({
          ...match,
          selectedForSwap: e.target["checkbox" + index].checked,
        });
      } else {
        acc = acc.concat({
          ...match,
          selectedForSwap: match.selectedForSwap,
        });
      }
      return acc;
    }, []);

    this.props.setMatchesSelected(this.state.rowsSelected);
    this.props.history.push("/confirmation");
  };

  componentDidMount() {
    this.content = document.getElementsByTagName("body")[0];
    let theOnesILike = this.theOnesILike(this.props.allBooks);
    let theOnesTheyLike = this.props.interested;

    this.setState({
      books: [...this.props.allBooks, ...this.props.myBooks],
    });
    this.setState({ theOnesILike, theOnesTheyLike });
  }

  bookList = (event, owner) => {
    event.preventDefault();
    this.setState({ showContextMenu: false }, () => {
      this.setState({ bookList: true, owner });
      this.content.classList.add("fixed");
    });
  };

  theOnesILike = (allBooks) => {
    return allBooks.filter((book) => book.interested === true);
  };

  theOnesTheyLike = (allBooks, interested) => {
    let matches = allBooks.reduce((acc, book) => {
      let match = interested.filter(
        (obj) => book.interested === true && book.owner === obj.user
      );
      return (acc = acc.concat(match));
    }, []);
    return matches;
  };

  userInterest = (owner, myBook) => {
    return (
      this.props.interested.filter(
        (book) =>
          book.user === owner &&
          book.title === myBook.title &&
          myBook.user === owner
      ).length > 0
    );
  };

  componentWillUnmount() {
    window.removeEventListener("click", this.closeMenus);
  }

  render() {
    const { matches, myBooks, allBooks, interested } = this.props;

    return (
      <div id="bookSwapMatches">
        <Header />
        <div className="main">
          <div className="hero">
            <div className="pageTitle">
              <img src={matchTitle} />
            </div>
            <img src={matchesHero} />
          </div>
          <form
            name="matchForm"
            onSubmit={(e) => {
              this.onSubmit(e);
              return false;
            }}
          >
            <div className="section">
              <div className="wrapper">
                <h2>Select which book to swap for.</h2>
                {this.state.theOnesILike.length === 0 ? (
                  <p>
                    You have no matches to show at this time. Make sure that you
                    have selected books that you are interested in. Visit the{" "}
                    <Link to="/books">Find Books</Link> page to see books
                    offered by other users.
                  </p>
                ) : (
                  <table className="matchTable">
                    <thead>
                      <tr>
                        <th>Their book</th>
                        <th>
                          <i>for</i>
                        </th>
                        <th>your book</th>
                      </tr>
                    </thead>
                    {this.state.theOnesILike.map((theirBook, index) => (
                      <tbody key={`tableRowForMatches${index}`}>
                        <tr className={index % 2 === 0 ? "even" : ""}>
                          <td className="book">
                            <h3 className="mobile">Their book:</h3>
                            <a
                              href="#"
                              onClick={() => this.showDetails(theirBook.title)}
                              className="bookTitle"
                            >
                              {theirBook.title}
                            </a>

                            <div className="byLine">by {theirBook.author}</div>
                            <div className="ownedBy">
                              Owned by
                              <br />
                              <a
                                href="#"
                                onClick={(event) =>
                                  this.bookList(event, theirBook.owner)
                                }
                              >
                                {theirBook.owner}
                              </a>
                            </div>
                          </td>
                          <td>
                            <div className="desktop">
                              <img src={swapIcon} alt="swap for" />
                            </div>
                            <h3 className="mobile">
                              <i>swap for...</i>
                            </h3>
                          </td>

                          {this.includesTitle(theirBook.title) !== "" ? (
                            <td>
                              <h3 className="mobile">Your book:</h3>{" "}
                              <div>{this.includesTitle(theirBook.title)}</div>
                              <div className="space10" />
                              <button
                                className="cancelButton"
                                onClick={(e) =>
                                  this.takeOffList(e, theirBook.title)
                                }
                              >
                                CANCEL
                              </button>
                            </td>
                          ) : (
                            <td className="myBook" id={theirBook.title}>
                              <h3 className="mobile">Your book:</h3>
                              {this.state.theOnesTheyLike.map(
                                (myBook, index) =>
                                  this.userInterest(
                                    theirBook.owner,
                                    myBook
                                  ) && (
                                    <div
                                      className="formRow"
                                      key={`myBook${index}`}
                                      id={`myBook${index}`}
                                    >
                                      <input
                                        type="radio"
                                        name={theirBook.title}
                                        defaultValue={myBook.title}
                                        id={`input${index}`}
                                        onClick={(e) =>
                                          this.addToSelected(
                                            e,
                                            myBook,
                                            theirBook
                                          )
                                        }
                                      />
                                      <label htmlFor={`input${index}`}>
                                        <a
                                          href="#"
                                          onClick={() =>
                                            this.showDetails(myBook.title)
                                          }
                                        >
                                          {myBook.title}
                                        </a>
                                      </label>
                                    </div>
                                  )
                              )}
                            </td>
                          )}
                        </tr>
                      </tbody>
                    ))}
                  </table>
                )}
              </div>
            </div>
            <div className="tableButton wrapper">
              <button type="submit" className="buttonBlue">
                CONFIRM SWAPS
              </button>
            </div>
          </form>
          <Footer />
        </div>

        <BookDeets
          open={this.state.showDetails}
          book={this.state.bookDetails}
          closeHandler={this.closeDetails}
        />
        <BookList
          open={this.state.bookList}
          closeHandler={this.closeDetails}
          owner={this.state.owner}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setMatchesSelected: (matches) => {
      dispatch({ type: "SET_MATCHES_SELECTED", matches });
    },
  };
};

const mapStateToProps = (state) => {
  return {
    matches: state.matches,
    myBooks: state.myBooks,
    interested: state.interested,
    allBooks: state.allBooks,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Matches);
