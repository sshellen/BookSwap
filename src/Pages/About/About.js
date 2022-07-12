import React from "react";

import { Link } from "react-router-dom";
import Header from "/src/Components/Header/Header";

import Footer from "/src/Components/Footer/Footer";
import "./css/index.css";
import tradeImg from "/img/trade.png";
import aboutTitle from "/svg/aboutTitle.svg";
import aboutHero from "/img/about.png";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="aboutPage">
        <Header />
        <div className="main">
          <div className="hero">
            <div className="pageTitle">
              <img src={aboutTitle} />
            </div>
            <img src={aboutHero} />
          </div>

          <div className="section">
            <div className="wrapper">
              <h2>What is Book Swap?</h2>
              <div className="twoCol">
                <p>
                  There comes a time in a book worms life when they are faced
                  with the challenge of what to do with their crowded book
                  shelves. The options tend to be buying more book shelves,
                  selling their books to a used book store, or donating books to
                  a library or NPO.
                  <br />
                  <br />
                  Book Swap gives avid readers another option in controlling
                  their book flow. Readers can keep their book shelves in
                  equilibrium by swapping their books for others. It gives
                  readers a chance to inspire others with their fav books that
                  are just collecting dust.
                </p>
                <div className="gutter">&nbsp;</div>

                <img src={tradeImg} width="100%" />
              </div>
              <div className="divider" />
              <h2>How it works.</h2>
              <div className="twoCol">
                <p>
                  Once you've signed up, add books to your{" "}
                  <Link to="/myBooks">book list</Link> and{" "}
                  <Link to="/books">find books</Link> that interest you.
                  <br />
                  <br />
                  Show interest in other users' books by checking the Interested
                  box for the respective book. Book Swap will show you your{" "}
                  <Link to="/matches">matches</Link> if there is a mutual
                  interest between users' books.
                </p>
                <div className="gutter">&nbsp;</div>
                <p>
                  When you confirm interest in swapping with someone else, they
                  will be notified of your interest via email. Likewise, you may
                  receive messages from interested parties wanting to swap with
                  you. You can also keep track of your message threads through
                  your Book Swap account.
                </p>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default About;
