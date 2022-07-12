import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import BookDeets from "/src/Components/LightboxTemplates/BookDeets";
import BookList from "/src/Components/LightboxTemplates/BookList";
import Header from "/src/Components/Header/Header";
import Footer from "/src/Components/Footer/Footer";
import "./css/index.css";
import pageTitle from "/svg/confirmTitle.svg";
import confHero from "/img/confirmation.png";
import swapIcon from "/svg/swapIcon.svg";
import leftArrow from "/svg/leftArrow.svg";

class Confirmation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookDetails: {},
      bookList: false,
      owner: "",
      showDetails: false,
      showContextMenu: false,
      books: [],
    };
    this.pendingSwaps = 0;
  }

  getBook = (title) => {
    return this.state.books.filter((book) => book.title === title);
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
    this.setState({ showDetails: false });
    this.content.classList.remove("fixed");
  };

  bookList = (event, owner) => {
    event.preventDefault();
    this.setState({ showContextMenu: false }, () => {
      this.setState({ bookList: true, owner });
      this.content.classList.add("fixed");
    });
  };

  componentDidMount() {
    this.content = document.getElementsByTagName("body")[0];
    this.setState({
      books: [...this.props.allBooks, ...this.props.myBooks],
    });
    this.swapCount = this.props.matches.length;
    this.pendingSwaps = this.props.matches.length > 0;
  }

  componentWillUnmount() {
    window.removeEventListener("click", this.closeMenus);
  }

  render() {
    const { matches, myBooks } = this.props;

    return (
      <div id="confirmationPage">
        <Header />
        <div className="main">
          <div className="hero">
            <div className="pageTitle">
              <img src={pageTitle} />
            </div>
            <img src={confHero} />
          </div>

          <div className="section">
            <div className="wrapper">
              {this.swapCount === 0 && (
                <p>
                  There are no matches selected for swapping to show. Make sure
                  that you have matches and that you have selected those that
                  you want to swap by visiting your{" "}
                  <Link to="/matches">matches</Link>
                </p>
              )}
              {this.swapCount > 0 && (
                <>
                  <h2>You’ve requested the following swaps:</h2>

                  <table className="confirmationTable">
                    <thead>
                      <tr>
                        <th>Their book</th>
                        <th>
                          <i>for</i>
                        </th>
                        <th>your book</th>
                      </tr>
                    </thead>
                    {this.props.matches.map((match, index) => (
                      <tbody key={`confirmationTableRow${index}`}>
                        <tr className={index % 2 === 0 ? "even" : ""}>
                          <td className="book">
                            <h3 className="mobile">Their book:</h3>
                            <a
                              href="#"
                              onClick={() =>
                                this.showDetails(match.theirBook.title)
                              }
                              className="bookTitle"
                            >
                              {match.theirBook.title}
                            </a>
                            <div className="byLine">
                              by {match.theirBook.author}
                            </div>
                            <div className="ownedBy">
                              Owned by
                              <br />
                              <a
                                href="#"
                                onClick={(event) =>
                                  this.bookList(event, match.theirBook.owner)
                                }
                              >
                                {match.theirBook.owner}
                              </a>
                            </div>
                          </td>
                          <td>
                            <div className="desktop">
                              <img src={swapIcon} alt="swap for" />
                            </div>
                            <h3 className="mobile">
                              <i>for...</i>
                            </h3>
                          </td>
                          <td className="myBook">
                            <h3 className="mobile">Your book:</h3>
                            <a
                              href="#"
                              onClick={() =>
                                this.showDetails(match.myBook.title)
                              }
                              className="bookTitle"
                            >
                              {match.myBook.title}
                            </a>
                            <div className="byLine">
                              by {match.myBook.author}
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    ))}
                  </table>
                  <div className="space20"></div>
                  <p>
                    You will receive an email at{" "}
                    <strong>{this.props.profile.email}</strong> from the
                    respective owners of the books if they are interested in
                    swapping with you.
                  </p>
                  <div className="space40" />
                  <h2>Pending Swaps</h2>
                  <div className="carousel">
                    <div className="border"></div>
                    <div className="books">
                      {this.pendingSwaps > 0 &&
                        this.props.matches.map((match, index) => (
                          <div key={`swap${index}`}>
                            {match.theirBook.title}{" "}
                            <i style={{ margin: "0 10px" }}>for</i>
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
                        The Rum Diary<i style={{ margin: "0 10px" }}>for</i>
                        Absurdistan
                      </div>
                      <div>
                        The Castle<i style={{ margin: "0 10px" }}>for</i>
                        Johathan Strange &amp; Mr Norrell
                      </div>
                      <div>
                        A Wild Sheep Chase
                        <i style={{ margin: "0 10px" }}>for</i>Choke
                      </div>
                    </div>
                    <div className="border" />
                  </div>
                </>
              )}
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

const mapStateToProps = (state) => {
  return {
    matches: state.matches,
    myBooks: state.myBooks,
    allBooks: state.allBooks,
  };
};

export default connect(mapStateToProps, "")(Confirmation);
