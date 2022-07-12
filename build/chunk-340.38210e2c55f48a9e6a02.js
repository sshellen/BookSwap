"use strict";
(self.webpackChunkBookSwap = self.webpackChunkBookSwap || []).push([
  [340],
  {
    340: function (n, e, t) {
      t.r(e),
        t.d(e, {
          default: function () {
            return z;
          },
        });
      var a = t(2982),
        o = t(5671),
        i = t(3144),
        r = t(7326),
        l = t(136),
        s = t(6215),
        c = t(1120),
        A = t(4942),
        m = t(7294),
        f = t(8216),
        d = t(7382),
        p = t(3818),
        h = t(7005),
        u = t(4557),
        E = t(4585),
        b = t(3379),
        g = t.n(b),
        B = t(7795),
        C = t.n(B),
        x = t(569),
        w = t.n(x),
        k = t(3565),
        y = t.n(k),
        v = t(9216),
        T = t.n(v),
        I = t(4589),
        N = t.n(I),
        Z = t(2305),
        P = {};
      (P.styleTagTransform = N()),
        (P.setAttributes = y()),
        (P.insert = w().bind(null, "head")),
        (P.domAPI = C()),
        (P.insertStyleElement = T());
      g()(Z.Z, P), Z.Z && Z.Z.locals && Z.Z.locals;
      function D(n) {
        var e = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (n) {
            return !1;
          }
        })();
        return function () {
          var t,
            a = (0, c.Z)(n);
          if (e) {
            var o = (0, c.Z)(this).constructor;
            t = Reflect.construct(a, arguments, o);
          } else t = a.apply(this, arguments);
          return (0, s.Z)(this, t);
        };
      }
      var S = (function (n) {
          (0, l.Z)(t, n);
          var e = D(t);
          function t(n) {
            var a;
            return (
              (0, o.Z)(this, t),
              (a = e.call(this, n)),
              (0, A.Z)((0, r.Z)(a), "getBook", function (n) {
                return a.state.books.filter(function (e) {
                  return e.title === n;
                });
              }),
              (0, A.Z)((0, r.Z)(a), "showDetails", function (n) {
                event.preventDefault();
                var e = a.getBook(n)[0];
                a.setState({ showContextMenu: !1 }, function () {
                  a.setState({ showDetails: !0, bookDetails: e }),
                    a.content.classList.add("fixed");
                });
              }),
              (0, A.Z)((0, r.Z)(a), "closeDetails", function () {
                event.preventDefault(),
                  a.setState({ showDetails: !1 }),
                  a.content.classList.remove("fixed");
              }),
              (0, A.Z)((0, r.Z)(a), "bookList", function (n, e) {
                n.preventDefault(),
                  a.setState({ showContextMenu: !1 }, function () {
                    a.setState({ bookList: !0, owner: e }),
                      a.content.classList.add("fixed");
                  });
              }),
              (a.state = {
                bookDetails: {},
                bookList: !1,
                owner: "",
                showDetails: !1,
                showContextMenu: !1,
                books: [],
              }),
              (a.pendingSwaps = 0),
              a
            );
          }
          return (
            (0, i.Z)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  (this.content = document.getElementsByTagName("body")[0]),
                    this.setState({
                      books: [].concat(
                        (0, a.Z)(this.props.allBooks),
                        (0, a.Z)(this.props.myBooks)
                      ),
                    }),
                    (this.swapCount = this.props.matches.length),
                    (this.pendingSwaps = this.props.matches.length > 0);
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  window.removeEventListener("click", this.closeMenus);
                },
              },
              {
                key: "render",
                value: function () {
                  var n = this,
                    e = this.props;
                  e.matches, e.myBooks;
                  return m.createElement(
                    "div",
                    { id: "confirmationPage" },
                    m.createElement(u.Z, null),
                    m.createElement(
                      "div",
                      { className: "main" },
                      m.createElement(
                        "div",
                        { className: "hero" },
                        m.createElement(
                          "div",
                          { className: "pageTitle" },
                          m.createElement("img", {
                            src: "/svg/confirmTitle.svg",
                          })
                        ),
                        m.createElement("img", { src: "/img/confirmation.png" })
                      ),
                      m.createElement(
                        "div",
                        { className: "section" },
                        m.createElement(
                          "div",
                          { className: "wrapper" },
                          0 === this.swapCount &&
                            m.createElement(
                              "p",
                              null,
                              "There are no matches selected for swapping to show. Make sure that you have matches and that you have selected those that you want to swap by visiting your",
                              " ",
                              m.createElement(
                                d.Link,
                                { to: "/matches" },
                                "matches"
                              )
                            ),
                          this.swapCount > 0 &&
                            m.createElement(
                              m.Fragment,
                              null,
                              m.createElement(
                                "h2",
                                null,
                                "You’ve requested the following swaps:"
                              ),
                              m.createElement(
                                "table",
                                { className: "confirmationTable" },
                                m.createElement(
                                  "thead",
                                  null,
                                  m.createElement(
                                    "tr",
                                    null,
                                    m.createElement("th", null, "Their book"),
                                    m.createElement(
                                      "th",
                                      null,
                                      m.createElement("i", null, "for")
                                    ),
                                    m.createElement("th", null, "your book")
                                  )
                                ),
                                this.props.matches.map(function (e, t) {
                                  return m.createElement(
                                    "tbody",
                                    { key: "confirmationTableRow".concat(t) },
                                    m.createElement(
                                      "tr",
                                      { className: t % 2 == 0 ? "even" : "" },
                                      m.createElement(
                                        "td",
                                        { className: "book" },
                                        m.createElement(
                                          "h3",
                                          { className: "mobile" },
                                          "Their book:"
                                        ),
                                        m.createElement(
                                          "a",
                                          {
                                            href: "#",
                                            onClick: function () {
                                              return n.showDetails(
                                                e.theirBook.title
                                              );
                                            },
                                            className: "bookTitle",
                                          },
                                          e.theirBook.title
                                        ),
                                        m.createElement(
                                          "div",
                                          { className: "byLine" },
                                          "by ",
                                          e.theirBook.author
                                        ),
                                        m.createElement(
                                          "div",
                                          { className: "ownedBy" },
                                          "Owned by",
                                          m.createElement("br", null),
                                          m.createElement(
                                            "a",
                                            {
                                              href: "#",
                                              onClick: function (t) {
                                                return n.bookList(
                                                  t,
                                                  e.theirBook.owner
                                                );
                                              },
                                            },
                                            e.theirBook.owner
                                          )
                                        )
                                      ),
                                      m.createElement(
                                        "td",
                                        null,
                                        m.createElement(
                                          "div",
                                          { className: "desktop" },
                                          m.createElement("img", {
                                            src: "/svg/swapIcon.svg",
                                            alt: "swap for",
                                          })
                                        ),
                                        m.createElement(
                                          "h3",
                                          { className: "mobile" },
                                          m.createElement("i", null, "for...")
                                        )
                                      ),
                                      m.createElement(
                                        "td",
                                        { className: "myBook" },
                                        m.createElement(
                                          "h3",
                                          { className: "mobile" },
                                          "Your book:"
                                        ),
                                        m.createElement(
                                          "a",
                                          {
                                            href: "#",
                                            onClick: function () {
                                              return n.showDetails(
                                                e.myBook.title
                                              );
                                            },
                                            className: "bookTitle",
                                          },
                                          e.myBook.title
                                        ),
                                        m.createElement(
                                          "div",
                                          { className: "byLine" },
                                          "by ",
                                          e.myBook.author
                                        )
                                      )
                                    )
                                  );
                                })
                              ),
                              m.createElement("div", { className: "space20" }),
                              m.createElement(
                                "p",
                                null,
                                "You will receive an email at",
                                " ",
                                m.createElement(
                                  "strong",
                                  null,
                                  this.props.profile.email
                                ),
                                " from the respective owners of the books if they are interested in swapping with you."
                              ),
                              m.createElement("div", { className: "space40" }),
                              m.createElement("h2", null, "Pending Swaps"),
                              m.createElement(
                                "div",
                                { className: "carousel" },
                                m.createElement("div", { className: "border" }),
                                m.createElement(
                                  "div",
                                  { className: "books" },
                                  this.pendingSwaps > 0 &&
                                    this.props.matches.map(function (n, e) {
                                      return m.createElement(
                                        "div",
                                        { key: "swap".concat(e) },
                                        n.theirBook.title,
                                        " ",
                                        m.createElement(
                                          "i",
                                          { style: { margin: "0 10px" } },
                                          "for"
                                        ),
                                        n.myBook.title
                                      );
                                    }),
                                  0 === this.pendingSwaps &&
                                    m.createElement(
                                      "h3",
                                      null,
                                      "You have no pending swaps at this time."
                                    )
                                ),
                                m.createElement("div", { className: "border" })
                              ),
                              m.createElement("div", { className: "space10" }),
                              m.createElement(
                                d.Link,
                                { to: "/books", className: "ctaLink" },
                                m.createElement("img", {
                                  src: "/svg/leftArrow.svg",
                                }),
                                m.createElement("span", null, "FIND BOOKS")
                              ),
                              m.createElement("div", { className: "space40" }),
                              m.createElement("h2", null, "Recent Swaps"),
                              m.createElement(
                                "div",
                                { className: "carousel" },
                                m.createElement("div", { className: "border" }),
                                m.createElement(
                                  "div",
                                  { className: "books" },
                                  m.createElement(
                                    "div",
                                    null,
                                    "The Rum Diary",
                                    m.createElement(
                                      "i",
                                      { style: { margin: "0 10px" } },
                                      "for"
                                    ),
                                    "Absurdistan"
                                  ),
                                  m.createElement(
                                    "div",
                                    null,
                                    "The Castle",
                                    m.createElement(
                                      "i",
                                      { style: { margin: "0 10px" } },
                                      "for"
                                    ),
                                    "Johathan Strange & Mr Norrell"
                                  ),
                                  m.createElement(
                                    "div",
                                    null,
                                    "A Wild Sheep Chase",
                                    m.createElement(
                                      "i",
                                      { style: { margin: "0 10px" } },
                                      "for"
                                    ),
                                    "Choke"
                                  )
                                ),
                                m.createElement("div", { className: "border" })
                              )
                            )
                        )
                      ),
                      m.createElement(E.Z, null)
                    ),
                    m.createElement(p.Z, {
                      open: this.state.showDetails,
                      book: this.state.bookDetails,
                      closeHandler: this.closeDetails,
                    }),
                    m.createElement(h.Z, {
                      open: this.state.bookList,
                      owner: this.state.owner,
                      closeHandler: this.closeDetails,
                    })
                  );
                },
              },
            ]),
            t
          );
        })(m.Component),
        z = (0, f.$j)(function (n) {
          return {
            matches: n.matches,
            myBooks: n.myBooks,
            allBooks: n.allBooks,
          };
        }, "")(S);
    },
    5872: function (n, e, t) {
      var a = t(7537),
        o = t.n(a),
        i = t(3645),
        r = t.n(i)()(o());
      r.push([
        n.id,
        "@media only screen and (max-width: 599px) {\n}\n",
        "",
        {
          version: 3,
          sources: ["webpack://./src/Pages/Confirmation/css/600Max.css"],
          names: [],
          mappings: "AAAA;AACA",
          sourcesContent: ["@media only screen and (max-width: 599px) {\n}\n"],
          sourceRoot: "",
        },
      ]),
        (e.Z = r);
    },
    5816: function (n, e, t) {
      var a = t(7537),
        o = t.n(a),
        i = t(3645),
        r = t.n(i)()(o());
      r.push([
        n.id,
        "@media only screen and (max-width: 899px) {\n  #confirmationPage .pageTitle img {\n    height: 30px;\n  }\n  #confirmationPage .desktop {\n    display: none;\n  }\n  #confirmationPage .mobile {\n    display: block;\n  }\n  #confirmationPage h3 {\n    font-size: 14px;\n    padding: 0;\n    margin: 5px 0;\n  }\n\n  .confirmationTable {\n    width: 100%;\n    box-sizing: border-box;\n    text-align: center;\n  }\n  .confirmationTable tr {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n    width: 100%;\n    border: 1px solid #ccc;\n    box-sizing: border-box;\n    padding: 20px;\n    margin-bottom: 30px;\n  }\n  .confirmationTable td {\n    height: auto;\n    font-size: 14px;\n  }\n  .confirmationTable thead {\n    display: none;\n  }\n  .confirmationTable th {\n    display: none;\n  }\n  .confirmationTable td,\n  .confirmationTable th {\n    text-align: left;\n  }\n\n  .confirmationTable td:nth-child(1),\n  .confirmationTable td:nth-child(2),\n  .confirmationTable td:nth-child(3) {\n    width: 100%;\n    text-align: left;\n  }\n  .confirmationTable td:nth-child(2) {\n    margin: 20px 0;\n    text-align: center;\n    background-color: #f5f5f5;\n  }\n  #confirmationPage .formRow {\n    display: flex;\n    flex-flow: row nowrap;\n    justify-content: flex-start;\n    align-items: center;\n    margin: 10px 0;\n  }\n  .confirmationTable tr,\n  .confirmationTable tr.even {\n    background-color: #fff;\n  }\n  .confirmationTable .cancelButton {\n    font-size: 12px;\n    border: 1px solid #fff;\n    border-radius: 25px;\n    padding: 8px 15px;\n    margin-right: 10px;\n  }\n}\n",
        "",
        {
          version: 3,
          sources: ["webpack://./src/Pages/Confirmation/css/900Max.css"],
          names: [],
          mappings:
            "AAAA;EACE;IACE,YAAY;EACd;EACA;IACE,aAAa;EACf;EACA;IACE,cAAc;EAChB;EACA;IACE,eAAe;IACf,UAAU;IACV,aAAa;EACf;;EAEA;IACE,WAAW;IACX,sBAAsB;IACtB,kBAAkB;EACpB;EACA;IACE,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,8BAA8B;IAC9B,WAAW;IACX,sBAAsB;IACtB,sBAAsB;IACtB,aAAa;IACb,mBAAmB;EACrB;EACA;IACE,YAAY;IACZ,eAAe;EACjB;EACA;IACE,aAAa;EACf;EACA;IACE,aAAa;EACf;EACA;;IAEE,gBAAgB;EAClB;;EAEA;;;IAGE,WAAW;IACX,gBAAgB;EAClB;EACA;IACE,cAAc;IACd,kBAAkB;IAClB,yBAAyB;EAC3B;EACA;IACE,aAAa;IACb,qBAAqB;IACrB,2BAA2B;IAC3B,mBAAmB;IACnB,cAAc;EAChB;EACA;;IAEE,sBAAsB;EACxB;EACA;IACE,eAAe;IACf,sBAAsB;IACtB,mBAAmB;IACnB,iBAAiB;IACjB,kBAAkB;EACpB;AACF",
          sourcesContent: [
            "@media only screen and (max-width: 899px) {\n  #confirmationPage .pageTitle img {\n    height: 30px;\n  }\n  #confirmationPage .desktop {\n    display: none;\n  }\n  #confirmationPage .mobile {\n    display: block;\n  }\n  #confirmationPage h3 {\n    font-size: 14px;\n    padding: 0;\n    margin: 5px 0;\n  }\n\n  .confirmationTable {\n    width: 100%;\n    box-sizing: border-box;\n    text-align: center;\n  }\n  .confirmationTable tr {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n    width: 100%;\n    border: 1px solid #ccc;\n    box-sizing: border-box;\n    padding: 20px;\n    margin-bottom: 30px;\n  }\n  .confirmationTable td {\n    height: auto;\n    font-size: 14px;\n  }\n  .confirmationTable thead {\n    display: none;\n  }\n  .confirmationTable th {\n    display: none;\n  }\n  .confirmationTable td,\n  .confirmationTable th {\n    text-align: left;\n  }\n\n  .confirmationTable td:nth-child(1),\n  .confirmationTable td:nth-child(2),\n  .confirmationTable td:nth-child(3) {\n    width: 100%;\n    text-align: left;\n  }\n  .confirmationTable td:nth-child(2) {\n    margin: 20px 0;\n    text-align: center;\n    background-color: #f5f5f5;\n  }\n  #confirmationPage .formRow {\n    display: flex;\n    flex-flow: row nowrap;\n    justify-content: flex-start;\n    align-items: center;\n    margin: 10px 0;\n  }\n  .confirmationTable tr,\n  .confirmationTable tr.even {\n    background-color: #fff;\n  }\n  .confirmationTable .cancelButton {\n    font-size: 12px;\n    border: 1px solid #fff;\n    border-radius: 25px;\n    padding: 8px 15px;\n    margin-right: 10px;\n  }\n}\n",
          ],
          sourceRoot: "",
        },
      ]),
        (e.Z = r);
    },
    2305: function (n, e, t) {
      var a = t(7537),
        o = t.n(a),
        i = t(3645),
        r = t.n(i),
        l = t(6884),
        s = t(5816),
        c = t(5872),
        A = r()(o());
      A.i(l.Z),
        A.i(s.Z),
        A.i(c.Z),
        A.push([
          n.id,
          "\n",
          "",
          { version: 3, sources: [], names: [], mappings: "", sourceRoot: "" },
        ]),
        (e.Z = A);
    },
    6884: function (n, e, t) {
      var a = t(7537),
        o = t.n(a),
        i = t(3645),
        r = t.n(i)()(o());
      r.push([
        n.id,
        ".confirmationTable {\n  width: 100%;\n}\n#confirmationPage .mobile {\n  display: none;\n}\n#confirmationPage .pageTitle img {\n  height: 50px;\n}\n.confirmationTable td {\n  height: 100px;\n  font-size: 14px;\n}\n.confirmationTable th {\n  margin-bottom: 20px;\n}\n.confirmationTable td,\n.confirmationTable th {\n  text-align: left;\n}\n.confirmationTable tr {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  justify-content: space-between;\n  width: 100%;\n  box-sizing: border-box;\n  padding: 20px;\n}\n.confirmationTable td,\n.confirmationTable th {\n  width: 200px;\n}\n.confirmationTable td:nth-child(2),\n.confirmationTable th:nth-child(2) {\n  width: 60px;\n  text-align: center;\n}\n.confirmationTable tr.even {\n  background-color: #f5f5f5;\n}\n\n.ownedBy {\n  margin-top: 20px;\n}\n.select {\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: flex-start;\n  justify-content: center;\n}\n",
        "",
        {
          version: 3,
          sources: ["webpack://./src/Pages/Confirmation/css/styles.css"],
          names: [],
          mappings:
            "AAAA;EACE,WAAW;AACb;AACA;EACE,aAAa;AACf;AACA;EACE,YAAY;AACd;AACA;EACE,aAAa;EACb,eAAe;AACjB;AACA;EACE,mBAAmB;AACrB;AACA;;EAEE,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,8BAA8B;EAC9B,WAAW;EACX,sBAAsB;EACtB,aAAa;AACf;AACA;;EAEE,YAAY;AACd;AACA;;EAEE,WAAW;EACX,kBAAkB;AACpB;AACA;EACE,yBAAyB;AAC3B;;AAEA;EACE,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,qBAAqB;EACrB,uBAAuB;EACvB,uBAAuB;AACzB",
          sourcesContent: [
            ".confirmationTable {\n  width: 100%;\n}\n#confirmationPage .mobile {\n  display: none;\n}\n#confirmationPage .pageTitle img {\n  height: 50px;\n}\n.confirmationTable td {\n  height: 100px;\n  font-size: 14px;\n}\n.confirmationTable th {\n  margin-bottom: 20px;\n}\n.confirmationTable td,\n.confirmationTable th {\n  text-align: left;\n}\n.confirmationTable tr {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  justify-content: space-between;\n  width: 100%;\n  box-sizing: border-box;\n  padding: 20px;\n}\n.confirmationTable td,\n.confirmationTable th {\n  width: 200px;\n}\n.confirmationTable td:nth-child(2),\n.confirmationTable th:nth-child(2) {\n  width: 60px;\n  text-align: center;\n}\n.confirmationTable tr.even {\n  background-color: #f5f5f5;\n}\n\n.ownedBy {\n  margin-top: 20px;\n}\n.select {\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: flex-start;\n  justify-content: center;\n}\n",
          ],
          sourceRoot: "",
        },
      ]),
        (e.Z = r);
    },
  },
]);
//# sourceMappingURL=chunk-340.38210e2c55f48a9e6a02.js.map
