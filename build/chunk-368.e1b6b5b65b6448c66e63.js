"use strict";
(self.webpackChunkBookSwap = self.webpackChunkBookSwap || []).push([
  [368],
  {
    4368: function (n, e, o) {
      o.r(e),
        o.d(e, {
          default: function () {
            return z;
          },
        });
      var t = o(2982),
        s = o(5671),
        i = o(3144),
        a = o(7326),
        l = o(136),
        r = o(6215),
        A = o(1120),
        d = o(4942),
        c = o(7294),
        p = o(8216),
        k = o(6718),
        b = o(3379),
        m = o.n(b),
        B = o(7795),
        u = o.n(B),
        E = o(569),
        w = o.n(E),
        C = o(3565),
        f = o.n(C),
        h = o(9216),
        g = o.n(h),
        x = o(4589),
        F = o.n(x),
        S = o(330),
        y = {};
      (y.styleTagTransform = F()),
        (y.setAttributes = f()),
        (y.insert = w().bind(null, "head")),
        (y.domAPI = u()),
        (y.insertStyleElement = g());
      m()(S.Z, y), S.Z && S.Z.locals && S.Z.locals;
      var L = function (n) {
          var e = n.list,
            o = n.onClickHandler,
            t = n.bookListHandler,
            s = n.interestedHandler;
          return c.createElement(
            "div",
            { className: "results" },
            c.createElement(
              "table",
              { className: "bookList" },
              c.createElement(
                "thead",
                null,
                c.createElement(
                  "tr",
                  null,
                  c.createElement("th", { scope: "col" }, "Title"),
                  c.createElement(
                    "th",
                    { scope: "col", width: "20%" },
                    "Genre"
                  ),
                  c.createElement("th", { scope: "col" }, "Owner"),
                  c.createElement(
                    "th",
                    { scope: "col", style: { textAlign: "center" } },
                    "Interested"
                  )
                )
              ),
              c.createElement(
                "tbody",
                null,
                e.map(function (n, e) {
                  return c.createElement(
                    "tr",
                    { key: "row" + e },
                    c.createElement(
                      "td",
                      null,
                      c.createElement(
                        "h3",
                        { className: "mobile" },
                        "Book Title:"
                      ),
                      c.createElement(
                        "a",
                        {
                          href: "#",
                          onClick: function () {
                            return o(n);
                          },
                        },
                        n.title
                      ),
                      c.createElement("div", { className: "byLine" }, n.author)
                    ),
                    c.createElement(
                      "td",
                      null,
                      c.createElement(
                        "h3",
                        { className: "mobile" },
                        "Book Genre:"
                      ),
                      n.genre
                    ),
                    c.createElement(
                      "td",
                      null,
                      c.createElement(
                        "h3",
                        { className: "mobile" },
                        "Book Owner:"
                      ),
                      c.createElement(
                        "a",
                        {
                          href: "#",
                          onClick: function (e) {
                            return t(e, n.owner);
                          },
                        },
                        n.owner
                      )
                    ),
                    c.createElement(
                      "td",
                      null,
                      c.createElement(
                        "h3",
                        { className: "mobile" },
                        "Interested"
                      ),
                      c.createElement(k.Z, {
                        name: n.title,
                        style: { width: "30px" },
                        checked: n.interested,
                        callback: s,
                      })
                    )
                  );
                })
              )
            )
          );
        },
        v = o(3818),
        I = o(7005),
        Z = o(4557),
        T = o(4585),
        N = o(3552),
        M = {};
      (M.styleTagTransform = F()),
        (M.setAttributes = f()),
        (M.insert = w().bind(null, "head")),
        (M.domAPI = u()),
        (M.insertStyleElement = g());
      m()(N.Z, M), N.Z && N.Z.locals && N.Z.locals;
      function W(n) {
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
          var o,
            t = (0, A.Z)(n);
          if (e) {
            var s = (0, A.Z)(this).constructor;
            o = Reflect.construct(t, arguments, s);
          } else o = t.apply(this, arguments);
          return (0, r.Z)(this, o);
        };
      }
      var D = (function (n) {
          (0, l.Z)(o, n);
          var e = W(o);
          function o(n) {
            var i;
            return (
              (0, s.Z)(this, o),
              (i = e.call(this, n)),
              (0, d.Z)((0, a.Z)(i), "quickSort", function (n, e) {
                if (n.length < 2) return n;
                for (
                  var o = n.length - 1, s = n[o], a = [], l = [], r = 0;
                  r < o;
                  r++
                ) {
                  var A = n[r];
                  A[e] < s[e] ? a.push(A) : l.push(A);
                }
                return [].concat(
                  (0, t.Z)(i.quickSort(a, e)),
                  [s],
                  (0, t.Z)(i.quickSort(l, e))
                );
              }),
              (0, d.Z)((0, a.Z)(i), "filterAndSort", function (n) {
                var e = document.getElementById("sortBy").value,
                  o = Array.prototype.slice
                    .call(i.filtersForm)
                    .reduce(function (n, e) {
                      return !0 === e.checked && (n = n.concat(e.name)), n;
                    }, []),
                  t =
                    0 === o.length
                      ? n
                      : n.filter(function (n) {
                          return o.includes(n.owner) || o.includes(n.genre);
                        }),
                  s = i.quickSort(t, e);
                i.setState({ sortedList: s });
              }),
              (0, d.Z)((0, a.Z)(i), "showDetails", function (n) {
                event.preventDefault(),
                  i.setState({ showContextMenu: !1 }, function () {
                    i.setState({ showDetails: !0, bookDetails: n }),
                      i.content.classList.add("fixed");
                  });
              }),
              (0, d.Z)((0, a.Z)(i), "addBook", function () {
                event.preventDefault(),
                  i.setState({ showContextMenu: !1 }, function () {
                    i.setState({ addBook: !0 }),
                      i.content.classList.add("fixed");
                  });
              }),
              (0, d.Z)((0, a.Z)(i), "bookList", function (n, e) {
                n.preventDefault(),
                  i.setState({ showContextMenu: !1 }, function () {
                    i.setState({ bookList: !0, owner: e }),
                      i.content.classList.add("fixed");
                  });
              }),
              (0, d.Z)((0, a.Z)(i), "closeDetails", function () {
                event.preventDefault(),
                  i.setState({ showDetails: !1, addBook: !1, bookList: !1 }),
                  i.content.classList.remove("fixed");
              }),
              (0, d.Z)((0, a.Z)(i), "openCloseMenu", function (n) {
                event.preventDefault();
                event.target.id;
                event.target.classList.contains("open")
                  ? (event.target.classList.remove("open"),
                    document
                      .getElementById(n + "List")
                      .classList.remove("open"))
                  : (event.target.classList.add("open"),
                    document.getElementById(n + "List").classList.add("open"));
              }),
              (0, d.Z)((0, a.Z)(i), "interestedHandler", function (n, e) {
                i.props.setBookInterest(n, e);
              }),
              (i.state = {
                bookDetails: {},
                sortedList: [],
                showDetails: !1,
                addBook: !1,
                bookList: !1,
                showContextMenu: !1,
                owner: "",
              }),
              i
            );
          }
          return (
            (0, i.Z)(o, [
              {
                key: "componentDidMount",
                value: function () {
                  var n = this;
                  (this.filtersForm = document
                    .getElementById("booklistFilters")
                    .querySelectorAll("input")),
                    (this.sortMenuForm =
                      document.getElementById("sortMenuForm")),
                    (this.content = document.getElementsByTagName("body")[0]),
                    this.filtersForm.forEach(function (e) {
                      e.addEventListener("click", function () {
                        return n.filterAndSort(n.props.allBooks);
                      });
                    }),
                    this.sortMenuForm.addEventListener("change", function () {
                      return n.filterAndSort(n.props.allBooks);
                    }),
                    this.filterAndSort(this.props.allBooks);
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
                  e.myBooks, e.matches, e.allBooks;
                  return c.createElement(
                    "div",
                    { id: "bookSwapFindBooks" },
                    c.createElement(Z.Z, null),
                    c.createElement(
                      "div",
                      { className: "main" },
                      c.createElement(
                        "div",
                        { className: "hero" },
                        c.createElement(
                          "div",
                          { className: "pageTitle" },
                          c.createElement("img", { src: "/svg/findBooks.svg" })
                        ),
                        c.createElement("img", { src: "/img/bookshelf.png" })
                      ),
                      c.createElement(
                        "div",
                        { className: "findBooks section" },
                        c.createElement(
                          "div",
                          { className: "wrapper" },
                          c.createElement(
                            "div",
                            { className: "twoCol" },
                            c.createElement("h2", null, "Book List"),
                            c.createElement(
                              "form",
                              { id: "sortMenuForm", className: "sortMenu" },
                              c.createElement(
                                "label",
                                { htmlFor: "sortBy" },
                                "Sort by:"
                              ),
                              c.createElement(
                                "select",
                                { id: "sortBy" },
                                c.createElement(
                                  "option",
                                  { value: "title" },
                                  "Title"
                                ),
                                c.createElement(
                                  "option",
                                  { value: "genre" },
                                  "Genre"
                                ),
                                c.createElement(
                                  "option",
                                  { value: "owner" },
                                  "Owner"
                                )
                              )
                            )
                          ),
                          c.createElement(
                            "p",
                            null,
                            'Mark any book that you may want to trade for as "interested".'
                          )
                        ),
                        c.createElement(
                          "div",
                          { className: "wrapper" },
                          c.createElement(
                            "div",
                            { className: "twoCol formAndFilter" },
                            c.createElement(
                              "form",
                              { id: "booklistFilters", className: "filter" },
                              c.createElement(
                                "label",
                                null,
                                c.createElement(
                                  "a",
                                  {
                                    href: "#",
                                    className: "open",
                                    id: "genreLabel",
                                    onClick: function () {
                                      return n.openCloseMenu("genre");
                                    },
                                  },
                                  "Genre"
                                )
                              ),
                              c.createElement(
                                "ul",
                                { id: "genreList", className: "open" },
                                c.createElement(
                                  "li",
                                  null,
                                  c.createElement(k.Z, { name: "Fiction" }),
                                  c.createElement(
                                    "label",
                                    { htmlFor: "Fiction" },
                                    "Fiction"
                                  )
                                ),
                                c.createElement(
                                  "li",
                                  null,
                                  c.createElement(k.Z, { name: "Sci-Fi" }),
                                  c.createElement(
                                    "label",
                                    { htmlFor: "Sci-Fi" },
                                    "Sci-Fi"
                                  )
                                ),
                                c.createElement(
                                  "li",
                                  null,
                                  c.createElement(k.Z, { name: "Non Fiction" }),
                                  c.createElement(
                                    "label",
                                    { htmlFor: "Non Fiction" },
                                    "Non Fiction"
                                  )
                                ),
                                c.createElement(
                                  "li",
                                  null,
                                  c.createElement(k.Z, { name: "Fantasy" }),
                                  c.createElement(
                                    "label",
                                    { htmlFor: "Fantasy" },
                                    "Fantasy"
                                  )
                                ),
                                c.createElement(
                                  "li",
                                  null,
                                  c.createElement(k.Z, { name: "Biography" }),
                                  c.createElement(
                                    "label",
                                    { htmlFor: "Biography" },
                                    "Biography"
                                  )
                                ),
                                c.createElement(
                                  "li",
                                  null,
                                  c.createElement(k.Z, { name: "History" }),
                                  c.createElement(
                                    "label",
                                    { htmlFor: "Histroy" },
                                    "History"
                                  )
                                )
                              )
                            ),
                            c.createElement(L, {
                              list: this.state.sortedList,
                              onClickHandler: this.showDetails,
                              bookListHandler: this.bookList,
                              interestedHandler: this.interestedHandler,
                            })
                          ),
                          c.createElement("div", { className: "space20" }),
                          c.createElement("div", { className: "dashedLine" }),
                          c.createElement("div", { className: "space20" }),
                          c.createElement(
                            "div",
                            { className: "tableButton" },
                            c.createElement(
                              "button",
                              {
                                type: "submit",
                                className: "buttonBlue",
                                onClick: function () {
                                  return n.props.history.push("/matches");
                                },
                              },
                              "SEE YOUR MATCHES"
                            )
                          )
                        )
                      ),
                      c.createElement(T.Z, null)
                    ),
                    c.createElement(v.Z, {
                      open: this.state.showDetails,
                      book: this.state.bookDetails,
                      closeHandler: this.closeDetails,
                    }),
                    c.createElement(I.Z, {
                      open: this.state.bookList,
                      owner: this.state.owner,
                      closeHandler: this.closeDetails,
                    })
                  );
                },
              },
            ]),
            o
          );
        })(c.Component),
        z = (0, p.$j)(
          function (n) {
            return {
              myBooks: n.myBooks,
              matches: n.matches,
              allBooks: n.allBooks,
            };
          },
          function (n) {
            return {
              setMyBooks: function (e) {
                n({ type: "SET_MY_BOOKS", myBooks: e });
              },
              setBookList: function (e) {
                n({ type: "SET_BOOK_LIST", bookList: e });
              },
              setBookInterest: function (e, o) {
                n({ type: "SET_BOOK_INTEREST", interested: e, title: o });
              },
            };
          }
        )(D);
    },
    9804: function (n, e, o) {
      var t = o(7537),
        s = o.n(t),
        i = o(3645),
        a = o.n(i)()(s());
      a.push([
        n.id,
        "@media only screen and (max-width: 599px) {\n}\n",
        "",
        {
          version: 3,
          sources: ["webpack://./src/Components/BookTable/css/600Max.css"],
          names: [],
          mappings: "AAAA;AACA",
          sourcesContent: ["@media only screen and (max-width: 599px) {\n}\n"],
          sourceRoot: "",
        },
      ]),
        (e.Z = a);
    },
    2741: function (n, e, o) {
      var t = o(7537),
        s = o.n(t),
        i = o(3645),
        a = o.n(i)()(s());
      a.push([
        n.id,
        "@media only screen and (max-width: 899px) {\n  #bookSwapFindBooks .desktop {\n    display: none;\n  }\n  #bookSwapFindBooks .mobile {\n    display: block;\n  }\n  #bookSwapFindBooks h3 {\n    margin: 0 10px 0 0;\n    padding: 0;\n    font-size: 14px;\n  }\n  #bookSwapFindBooks .pageTitle img {\n    height: 30px;\n  }\n\n  #bookSwapFindBooks .results {\n    flex: 1 1 auto;\n    box-sizing: border-box;\n    width: 100%;\n  }\n  #bookSwapFindBooks .bookList thead {\n    display: none;\n  }\n  #bookSwapFindBooks .bookList tbody tr {\n    display: flex;\n    flex-flow: column;\n    width: 100%;\n    border: 1px solid #ccc;\n    padding: 20px;\n    margin-bottom: 20px;\n    box-sizing: border-box;\n  }\n\n  #bookSwapFindBooks .bookList tbody tr td {\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: flex-start;\n    align-items: flex-start;\n    padding: 0 0 20px 0;\n    border-bottom: none;\n  }\n\n  #bookSwapFindBooks .bookList tbody tr:last-child td {\n    border-bottom: none;\n  }\n  #bookSwapFindBooks .bookList {\n    width: 100%;\n  }\n\n  #bookSwapFindBooks .bookList tbody td:last-child {\n    text-align: left;\n    width: auto;\n  }\n  #bookSwapFindBooks .bookList td .byLine {\n    display: none;\n  }\n  #bookSwapFindBooks .bookList td a.bookTitle {\n    font-weight: bold;\n  }\n}\n",
        "",
        {
          version: 3,
          sources: ["webpack://./src/Components/BookTable/css/900Max.css"],
          names: [],
          mappings:
            "AAAA;EACE;IACE,aAAa;EACf;EACA;IACE,cAAc;EAChB;EACA;IACE,kBAAkB;IAClB,UAAU;IACV,eAAe;EACjB;EACA;IACE,YAAY;EACd;;EAEA;IACE,cAAc;IACd,sBAAsB;IACtB,WAAW;EACb;EACA;IACE,aAAa;EACf;EACA;IACE,aAAa;IACb,iBAAiB;IACjB,WAAW;IACX,sBAAsB;IACtB,aAAa;IACb,mBAAmB;IACnB,sBAAsB;EACxB;;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,2BAA2B;IAC3B,uBAAuB;IACvB,mBAAmB;IACnB,mBAAmB;EACrB;;EAEA;IACE,mBAAmB;EACrB;EACA;IACE,WAAW;EACb;;EAEA;IACE,gBAAgB;IAChB,WAAW;EACb;EACA;IACE,aAAa;EACf;EACA;IACE,iBAAiB;EACnB;AACF",
          sourcesContent: [
            "@media only screen and (max-width: 899px) {\n  #bookSwapFindBooks .desktop {\n    display: none;\n  }\n  #bookSwapFindBooks .mobile {\n    display: block;\n  }\n  #bookSwapFindBooks h3 {\n    margin: 0 10px 0 0;\n    padding: 0;\n    font-size: 14px;\n  }\n  #bookSwapFindBooks .pageTitle img {\n    height: 30px;\n  }\n\n  #bookSwapFindBooks .results {\n    flex: 1 1 auto;\n    box-sizing: border-box;\n    width: 100%;\n  }\n  #bookSwapFindBooks .bookList thead {\n    display: none;\n  }\n  #bookSwapFindBooks .bookList tbody tr {\n    display: flex;\n    flex-flow: column;\n    width: 100%;\n    border: 1px solid #ccc;\n    padding: 20px;\n    margin-bottom: 20px;\n    box-sizing: border-box;\n  }\n\n  #bookSwapFindBooks .bookList tbody tr td {\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: flex-start;\n    align-items: flex-start;\n    padding: 0 0 20px 0;\n    border-bottom: none;\n  }\n\n  #bookSwapFindBooks .bookList tbody tr:last-child td {\n    border-bottom: none;\n  }\n  #bookSwapFindBooks .bookList {\n    width: 100%;\n  }\n\n  #bookSwapFindBooks .bookList tbody td:last-child {\n    text-align: left;\n    width: auto;\n  }\n  #bookSwapFindBooks .bookList td .byLine {\n    display: none;\n  }\n  #bookSwapFindBooks .bookList td a.bookTitle {\n    font-weight: bold;\n  }\n}\n",
          ],
          sourceRoot: "",
        },
      ]),
        (e.Z = a);
    },
    330: function (n, e, o) {
      var t = o(7537),
        s = o.n(t),
        i = o(3645),
        a = o.n(i),
        l = o(9158),
        r = o(2741),
        A = o(9804),
        d = a()(s());
      d.i(l.Z),
        d.i(r.Z),
        d.i(A.Z),
        d.push([
          n.id,
          "\n",
          "",
          { version: 3, sources: [], names: [], mappings: "", sourceRoot: "" },
        ]),
        (e.Z = d);
    },
    9158: function (n, e, o) {
      var t = o(7537),
        s = o.n(t),
        i = o(3645),
        a = o.n(i)()(s());
      a.push([
        n.id,
        "#bookSwapFindBooks .desktop {\n  display: block;\n}\n#bookSwapFindBooks .mobile {\n  display: none;\n}\n#bookSwapFindBooks.pageTitle {\n  bottom: 1px;\n}\n#bookSwapFindBooks .pageTitle img {\n  height: 50px;\n}\n#bookSwapFindBooks .results {\n  flex: 1 1 auto;\n  box-sizing: border-box;\n}\n#bookSwapFindBooks .bookList tbody tr:first-child td {\n  padding: 0 0 20px 0;\n}\n#bookSwapFindBooks .bookList tbody tr td {\n  border-bottom: 1px dashed #999;\n  padding: 20px 0;\n}\n#bookSwapFindBooks .bookList tbody tr:last-child td {\n  border-bottom: none;\n}\n#bookSwapFindBooks .bookList tbody td:last-child {\n  text-align: center;\n  width: 30px;\n}\n#bookSwapFindBooks .bookList {\n  width: 100%;\n}\n#bookSwapFindBooks .bookList td {\n  vertical-align: top;\n}\n#bookSwapFindBooks .bookList td .byLine {\n  font-size: 14px;\n}\n#bookSwapFindBooks .bookList td a.bookTitle {\n  font-weight: bold;\n}\n#bookSwapFindBooks .bookList th {\n  text-align: left;\n  padding-bottom: 20px;\n}\n",
        "",
        {
          version: 3,
          sources: ["webpack://./src/Components/BookTable/css/styles.css"],
          names: [],
          mappings:
            "AAAA;EACE,cAAc;AAChB;AACA;EACE,aAAa;AACf;AACA;EACE,WAAW;AACb;AACA;EACE,YAAY;AACd;AACA;EACE,cAAc;EACd,sBAAsB;AACxB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,8BAA8B;EAC9B,eAAe;AACjB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,kBAAkB;EAClB,WAAW;AACb;AACA;EACE,WAAW;AACb;AACA;EACE,mBAAmB;AACrB;AACA;EACE,eAAe;AACjB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,gBAAgB;EAChB,oBAAoB;AACtB",
          sourcesContent: [
            "#bookSwapFindBooks .desktop {\n  display: block;\n}\n#bookSwapFindBooks .mobile {\n  display: none;\n}\n#bookSwapFindBooks.pageTitle {\n  bottom: 1px;\n}\n#bookSwapFindBooks .pageTitle img {\n  height: 50px;\n}\n#bookSwapFindBooks .results {\n  flex: 1 1 auto;\n  box-sizing: border-box;\n}\n#bookSwapFindBooks .bookList tbody tr:first-child td {\n  padding: 0 0 20px 0;\n}\n#bookSwapFindBooks .bookList tbody tr td {\n  border-bottom: 1px dashed #999;\n  padding: 20px 0;\n}\n#bookSwapFindBooks .bookList tbody tr:last-child td {\n  border-bottom: none;\n}\n#bookSwapFindBooks .bookList tbody td:last-child {\n  text-align: center;\n  width: 30px;\n}\n#bookSwapFindBooks .bookList {\n  width: 100%;\n}\n#bookSwapFindBooks .bookList td {\n  vertical-align: top;\n}\n#bookSwapFindBooks .bookList td .byLine {\n  font-size: 14px;\n}\n#bookSwapFindBooks .bookList td a.bookTitle {\n  font-weight: bold;\n}\n#bookSwapFindBooks .bookList th {\n  text-align: left;\n  padding-bottom: 20px;\n}\n",
          ],
          sourceRoot: "",
        },
      ]),
        (e.Z = a);
    },
    2462: function (n, e, o) {
      var t = o(7537),
        s = o.n(t),
        i = o(3645),
        a = o.n(i)()(s());
      a.push([
        n.id,
        "@media only screen and (max-width: 599px) {\n}\n",
        "",
        {
          version: 3,
          sources: ["webpack://./src/Pages/Books/css/600Max.css"],
          names: [],
          mappings: "AAAA;AACA",
          sourcesContent: ["@media only screen and (max-width: 599px) {\n}\n"],
          sourceRoot: "",
        },
      ]),
        (e.Z = a);
    },
    1593: function (n, e, o) {
      var t = o(7537),
        s = o.n(t),
        i = o(3645),
        a = o.n(i)()(s());
      a.push([
        n.id,
        "@media only screen and (max-width: 899px) {\n  #bookSwapFindBooks .desktop {\n    display: none;\n  }\n  #bookSwapFindBooks .mobile {\n    display: block;\n  }\n  #bookSwapFindBooks .pageTitle img {\n    height: 30px;\n  }\n  #bookSwapFindBooks .formAndFilter {\n    display: flex;\n    flex-flow: column nowrap;\n    width: 100%;\n    align-items: flex-start;\n    justify-content: space-between;\n    box-sizing: border-box;\n  }\n  #bookSwapFindBooks .formAndFilter #genreLabel {\n    margin-bottom: 20px;\n  }\n\n  #bookSwapFindBooks #genreList,\n  #bookSwapFindBooks #genreList.open {\n    display: flex;\n    flex-direction: row;\n    flex-flow: row wrap;\n    margin-bottom: 20px;\n  }\n  #bookSwapFindBooks .filter label a,\n  #bookSwapFindBooks .filter label a.open {\n    background-image: none;\n  }\n  #bookSwapFindBooks #genreList li {\n    display: flex;\n    flex-flow: row;\n    align-items: center;\n  }\n\n  #bookSwapFindBooks #genreList li {\n    margin-right: 20px;\n    font-size: 14px;\n  }\n  #bookSwapFindBooks .twoCol .gutter {\n    width: 40px;\n  }\n  .sortMenu select {\n    font-size: 12px;\n  }\n}\n",
        "",
        {
          version: 3,
          sources: ["webpack://./src/Pages/Books/css/900Max.css"],
          names: [],
          mappings:
            "AAAA;EACE;IACE,aAAa;EACf;EACA;IACE,cAAc;EAChB;EACA;IACE,YAAY;EACd;EACA;IACE,aAAa;IACb,wBAAwB;IACxB,WAAW;IACX,uBAAuB;IACvB,8BAA8B;IAC9B,sBAAsB;EACxB;EACA;IACE,mBAAmB;EACrB;;EAEA;;IAEE,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,mBAAmB;EACrB;EACA;;IAEE,sBAAsB;EACxB;EACA;IACE,aAAa;IACb,cAAc;IACd,mBAAmB;EACrB;;EAEA;IACE,kBAAkB;IAClB,eAAe;EACjB;EACA;IACE,WAAW;EACb;EACA;IACE,eAAe;EACjB;AACF",
          sourcesContent: [
            "@media only screen and (max-width: 899px) {\n  #bookSwapFindBooks .desktop {\n    display: none;\n  }\n  #bookSwapFindBooks .mobile {\n    display: block;\n  }\n  #bookSwapFindBooks .pageTitle img {\n    height: 30px;\n  }\n  #bookSwapFindBooks .formAndFilter {\n    display: flex;\n    flex-flow: column nowrap;\n    width: 100%;\n    align-items: flex-start;\n    justify-content: space-between;\n    box-sizing: border-box;\n  }\n  #bookSwapFindBooks .formAndFilter #genreLabel {\n    margin-bottom: 20px;\n  }\n\n  #bookSwapFindBooks #genreList,\n  #bookSwapFindBooks #genreList.open {\n    display: flex;\n    flex-direction: row;\n    flex-flow: row wrap;\n    margin-bottom: 20px;\n  }\n  #bookSwapFindBooks .filter label a,\n  #bookSwapFindBooks .filter label a.open {\n    background-image: none;\n  }\n  #bookSwapFindBooks #genreList li {\n    display: flex;\n    flex-flow: row;\n    align-items: center;\n  }\n\n  #bookSwapFindBooks #genreList li {\n    margin-right: 20px;\n    font-size: 14px;\n  }\n  #bookSwapFindBooks .twoCol .gutter {\n    width: 40px;\n  }\n  .sortMenu select {\n    font-size: 12px;\n  }\n}\n",
          ],
          sourceRoot: "",
        },
      ]),
        (e.Z = a);
    },
    3552: function (n, e, o) {
      var t = o(7537),
        s = o.n(t),
        i = o(3645),
        a = o.n(i),
        l = o(3931),
        r = o(1593),
        A = o(2462),
        d = a()(s());
      d.i(l.Z),
        d.i(r.Z),
        d.i(A.Z),
        d.push([
          n.id,
          "\n",
          "",
          { version: 3, sources: [], names: [], mappings: "", sourceRoot: "" },
        ]),
        (e.Z = d);
    },
    3931: function (n, e, o) {
      var t = o(7537),
        s = o.n(t),
        i = o(3645),
        a = o.n(i)()(s());
      a.push([
        n.id,
        "#bookSwapFindBooks.pageTitle {\n  bottom: 1px;\n}\n#bookSwapFindBooks .pageTitle img {\n  height: 50px;\n}\n",
        "",
        {
          version: 3,
          sources: ["webpack://./src/Pages/Books/css/styles.css"],
          names: [],
          mappings: "AAAA;EACE,WAAW;AACb;AACA;EACE,YAAY;AACd",
          sourcesContent: [
            "#bookSwapFindBooks.pageTitle {\n  bottom: 1px;\n}\n#bookSwapFindBooks .pageTitle img {\n  height: 50px;\n}\n",
          ],
          sourceRoot: "",
        },
      ]),
        (e.Z = a);
    },
  },
]);
//# sourceMappingURL=chunk-368.e1b6b5b65b6448c66e63.js.map
