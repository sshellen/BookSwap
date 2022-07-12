"use strict";
(self.webpackChunkBookSwap = self.webpackChunkBookSwap || []).push([
  [199],
  {
    9199: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return P;
          },
        });
      var o = n(2982),
        a = n(5671),
        s = n(3144),
        l = n(7326),
        r = n(136),
        i = n(6215),
        c = n(1120),
        m = n(4942),
        d = n(7294),
        u = n(8216),
        A = n(3818),
        p = n(7005),
        E = n(5284);
      function B(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? B(Object(n), !0).forEach(function (t) {
                (0, m.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : B(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function h(e) {
        var t = (function () {
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
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            o = (0, c.Z)(e);
          if (t) {
            var a = (0, c.Z)(this).constructor;
            n = Reflect.construct(o, arguments, a);
          } else n = o.apply(this, arguments);
          return (0, i.Z)(this, n);
        };
      }
      var b = (function (e) {
          (0, r.Z)(n, e);
          var t = h(n);
          function n(e) {
            var s;
            return (
              (0, a.Z)(this, n),
              (s = t.call(this, e)),
              (0, m.Z)((0, l.Z)(s), "handleSubmit", function (e) {
                var t = new FormData(e),
                  n = (0, o.Z)(t).reduce(function (e, t) {
                    var n = (e[t[0]] = t[1]);
                    return f(f({}, e), {}, { obj: n });
                  }, {});
                s.props.addBook(n), s.setState({ submitSuccess: !0 });
              }),
              (0, m.Z)((0, l.Z)(s), "clearErrors", function (e) {
                Array.prototype.slice.call(e).map(function (e) {
                  e.parentNode.classList.remove("required"),
                    e.parentNode.getElementsByClassName("requiredTag")[0] &&
                      e.parentNode
                        .getElementsByClassName("requiredTag")[0]
                        .remove();
                });
              }),
              (0, m.Z)((0, l.Z)(s), "onSubmit", function (e) {
                e.preventDefault();
                var t = e.target.elements;
                s.clearErrors(t);
                var n = ["bookTitle", "bookAuthor", "bookDescription"],
                  o = !1;
                Array.prototype.slice.call(t).map(function (e) {
                  if (n.includes(e.name) && "" === e.value) {
                    e.parentNode.classList.add("required");
                    var t = document.createElement("span");
                    (t.className = "requiredTag"),
                      t.appendChild(document.createTextNode("REQUIRED FIELD ")),
                      e.parentNode.getElementsByTagName("label")[0].prepend(t),
                      (o = !0);
                  }
                }),
                  o
                    ? s.setState({ submitSuccess: "false" }, function () {
                        document
                          .getElementById("alertMessage")
                          .focus({ preventScroll: !1 });
                      })
                    : s.handleSubmit(e.target);
              }),
              (s.state = { submitSuccess: !1 }),
              s
            );
          }
          return (
            (0, s.Z)(n, [
              {
                key: "putFocus",
                value: function () {
                  document.getElementById("addBookTitle").focus();
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props,
                    n = (t.spotlight, t.closeHandler);
                  return !0 === t.open
                    ? d.createElement(
                        E.J,
                        null,
                        d.createElement(
                          "div",
                          {
                            id: "lightbox",
                            className: "lightbox",
                            tabIndex: 0,
                          },
                          d.createElement(
                            "div",
                            { className: "close" },
                            d.createElement(
                              "a",
                              { onClick: n, href: "#", tabIndex: 0 },
                              d.createElement("img", {
                                src: "/img/close.png",
                                alt: "Click to close lighbox.",
                              })
                            )
                          ),
                          !1 === this.state.submitSuccess
                            ? d.createElement(
                                "div",
                                {
                                  className: "content",
                                  id: "addBookLightbox",
                                  tabIndex: 0,
                                },
                                "false" === this.state.submitSuccess &&
                                  d.createElement(
                                    "div",
                                    {
                                      className: "alertMessage",
                                      id: "alertMessage",
                                      tabIndex: 0,
                                    },
                                    d.createElement(
                                      "p",
                                      null,
                                      "There are required fields on this page that have not been filled out."
                                    ),
                                    d.createElement(
                                      "p",
                                      null,
                                      "Please see errors below."
                                    )
                                  ),
                                d.createElement(
                                  "form",
                                  {
                                    className: "addBookForm",
                                    onSubmit: function (t) {
                                      return e.onSubmit(t), !1;
                                    },
                                  },
                                  d.createElement(
                                    "div",
                                    { className: "lightboxCols" },
                                    d.createElement(
                                      "div",
                                      { className: "rightCol", tabIndex: 0 },
                                      d.createElement("h2", null, "Add a Book"),
                                      d.createElement(
                                        "div",
                                        { className: "formRow" },
                                        d.createElement("input", {
                                          type: "hidden",
                                          name: "active",
                                          defaultValue: !0,
                                        }),
                                        d.createElement(
                                          "label",
                                          {
                                            htmlFor: "bookTitle",
                                            className: "required",
                                          },
                                          "Title",
                                          d.createElement("sup", null, "*")
                                        ),
                                        d.createElement("input", {
                                          type: "text",
                                          id: "bookTitle",
                                          name: "title",
                                          defaultValue: "",
                                        })
                                      ),
                                      d.createElement(
                                        "div",
                                        { className: "formRow" },
                                        d.createElement(
                                          "label",
                                          {
                                            htmlFor: "bookAuthor",
                                            className: "required",
                                          },
                                          "Author",
                                          d.createElement("sup", null, "*")
                                        ),
                                        d.createElement("input", {
                                          type: "text",
                                          id: "bookAuthor",
                                          name: "author",
                                          defaultValue: "",
                                        })
                                      ),
                                      d.createElement(
                                        "div",
                                        { className: "formRow" },
                                        d.createElement(
                                          "label",
                                          {
                                            htmlFor: "bookDescription",
                                            className: "required",
                                          },
                                          "Description",
                                          d.createElement("sup", null, "*")
                                        ),
                                        d.createElement("textarea", {
                                          id: "bookDescription",
                                          name: "description",
                                          rows: "10",
                                        })
                                      ),
                                      d.createElement(
                                        "div",
                                        { className: "formRow" },
                                        d.createElement(
                                          "label",
                                          { htmlFor: "bookGenre" },
                                          "Genre"
                                        ),
                                        d.createElement(
                                          "select",
                                          { name: "genre", id: "bookGenre" },
                                          d.createElement(
                                            "option",
                                            { value: "Fiction" },
                                            "Fiction"
                                          ),
                                          d.createElement(
                                            "option",
                                            { value: "sciFi" },
                                            "Sci-Fi"
                                          ),
                                          d.createElement(
                                            "option",
                                            { value: "nonFiction" },
                                            "Non Fiction"
                                          ),
                                          d.createElement(
                                            "option",
                                            { value: "Fantasy" },
                                            "Fantasy"
                                          ),
                                          d.createElement(
                                            "option",
                                            { value: "Biography" },
                                            "Biography"
                                          ),
                                          d.createElement(
                                            "option",
                                            { value: "History" },
                                            "History"
                                          )
                                        )
                                      ),
                                      d.createElement(
                                        "div",
                                        { className: "formRow" },
                                        d.createElement(
                                          "label",
                                          { htmlFor: "publishedBy" },
                                          "Published by"
                                        ),
                                        d.createElement("input", {
                                          type: "text",
                                          id: "publishedBy",
                                          name: "published",
                                          defaultValue: "",
                                        })
                                      )
                                    ),
                                    d.createElement(
                                      "div",
                                      { className: "requiredFields" },
                                      d.createElement("sup", null, "*"),
                                      "Required fields"
                                    )
                                  ),
                                  d.createElement(
                                    "div",
                                    { className: "buttonRow" },
                                    d.createElement(
                                      "button",
                                      { className: "cancelButton", onClick: n },
                                      d.createElement(
                                        "span",
                                        { className: "visuallyHidden" },
                                        "Click to close light-box."
                                      ),
                                      "CANCEL"
                                    ),
                                    d.createElement(
                                      "button",
                                      {
                                        type: "submit",
                                        className: "buttonBlue",
                                      },
                                      "SUBMIT"
                                    )
                                  )
                                ),
                                d.createElement("div", {
                                  tabIndex: 0,
                                  onFocus: this.putFocus,
                                })
                              )
                            : d.createElement(
                                "div",
                                {
                                  className: "content",
                                  id: "addBookLightbox",
                                  tabIndex: 0,
                                },
                                d.createElement(
                                  "h3",
                                  null,
                                  "You've successfully added a book to your list."
                                ),
                                d.createElement(
                                  "div",
                                  { className: "buttonRow" },
                                  d.createElement(
                                    "button",
                                    { className: "buttonBlue", onClick: n },
                                    d.createElement(
                                      "span",
                                      { className: "visuallyHidden" },
                                      "Click to close light-box."
                                    ),
                                    "CLOSE"
                                  )
                                ),
                                d.createElement("div", {
                                  tabIndex: 0,
                                  onFocus: this.putFocus,
                                })
                              )
                        )
                      )
                    : null;
                },
              },
            ]),
            n
          );
        })(d.Component),
        y = (0, u.$j)("", function (e) {
          return {
            addBook: function (t) {
              e({ type: "ADD_BOOK", book: t });
            },
          };
        })(b),
        k = n(4557),
        g = n(7382),
        v = n(4585),
        C = n(3379),
        x = n.n(C),
        w = n(7795),
        N = n.n(w),
        T = n(569),
        Z = n.n(T),
        I = n(3565),
        S = n.n(I),
        D = n(9216),
        L = n.n(D),
        O = n(4589),
        F = n.n(O),
        j = n(1523),
        M = {};
      (M.styleTagTransform = F()),
        (M.setAttributes = S()),
        (M.insert = Z().bind(null, "head")),
        (M.domAPI = N()),
        (M.insertStyleElement = L());
      x()(j.Z, M), j.Z && j.Z.locals && j.Z.locals;
      function R(e) {
        var t = (function () {
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
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            o = (0, c.Z)(e);
          if (t) {
            var a = (0, c.Z)(this).constructor;
            n = Reflect.construct(o, arguments, a);
          } else n = o.apply(this, arguments);
          return (0, i.Z)(this, n);
        };
      }
      var q = (function (e) {
          (0, r.Z)(n, e);
          var t = R(n);
          function n(e) {
            var s;
            return (
              (0, a.Z)(this, n),
              (s = t.call(this, e)),
              (0, m.Z)((0, l.Z)(s), "quickSort", function (e, t) {
                if (e.length < 2) return e;
                for (
                  var n = e.length - 1, a = e[n], l = [], r = [], i = 0;
                  i < n;
                  i++
                ) {
                  var c = e[i];
                  c[t] < a[t] ? l.push(c) : r.push(c);
                }
                return [].concat(
                  (0, o.Z)(s.quickSort(l, t)),
                  [a],
                  (0, o.Z)(s.quickSort(r, t))
                );
              }),
              (0, m.Z)((0, l.Z)(s), "filterAndSort", function (e) {
                var t = document.getElementById("sortBy").value,
                  n = s.quickSort(e, t);
                s.setState({ sortedList: n });
              }),
              (0, m.Z)((0, l.Z)(s), "showDetails", function (e) {
                s.setState({ showContextMenu: !1 }, function () {
                  s.setState({ showDetails: !0, bookDetails: e }),
                    s.content.classList.add("fixed");
                });
              }),
              (0, m.Z)((0, l.Z)(s), "addBook", function () {
                event.preventDefault(),
                  s.setState({ showContextMenu: !1 }, function () {
                    s.setState({ addBook: !0 }),
                      s.content.classList.add("fixed");
                  });
              }),
              (0, m.Z)((0, l.Z)(s), "bookList", function (e, t) {
                e.preventDefault(),
                  s.setState({ showContextMenu: !1 }, function () {
                    s.setState({ bookList: !0, owner: t }),
                      s.content.classList.add("fixed");
                  });
              }),
              (0, m.Z)((0, l.Z)(s), "closeDetails", function () {
                event.preventDefault(),
                  s.setState({ showDetails: !1, addBook: !1, bookList: !1 }),
                  s.content.classList.remove("fixed");
              }),
              (0, m.Z)((0, l.Z)(s), "openCloseMenu", function (e) {
                event.preventDefault();
                event.target.id;
                event.target.classList.contains("open")
                  ? (event.target.classList.remove("open"),
                    document
                      .getElementById(e + "List")
                      .classList.remove("open"))
                  : (event.target.classList.add("open"),
                    document.getElementById(e + "List").classList.add("open"));
              }),
              (0, m.Z)((0, l.Z)(s), "checkInterested", function (e) {
                return s.props.interested.filter(function (t) {
                  return t.title === e;
                });
              }),
              (s.state = {
                bookDetails: {},
                sortedList: [],
                showDetails: !1,
                addBook: !1,
                bookList: !1,
                owner: "",
                showContextMenu: !1,
              }),
              (s.pendingSwaps = 0),
              s
            );
          }
          return (
            (0, s.Z)(n, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  (this.content = document.getElementsByTagName("body")[0]),
                    (this.sortMenuForm =
                      document.getElementById("sortMenuForm")),
                    this.sortMenuForm.addEventListener("change", function () {
                      return e.filterAndSort(e.props.myBooks);
                    }),
                    this.filterAndSort(this.props.myBooks),
                    (this.pendingSwaps = this.props.matches.length);
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
                  var e = this,
                    t = this.props;
                  t.myBooks, t.matches, t.interested;
                  return d.createElement(
                    "div",
                    { id: "myBooks" },
                    d.createElement(k.Z, null),
                    d.createElement(
                      "div",
                      { className: "main" },
                      d.createElement(
                        "div",
                        { className: "hero" },
                        d.createElement(
                          "div",
                          { className: "pageTitle" },
                          d.createElement("img", {
                            src: "/svg/mybooksTitle.svg",
                          })
                        ),
                        d.createElement("img", { src: "/img/myBooks.png" })
                      ),
                      d.createElement(
                        "div",
                        { className: "section" },
                        d.createElement(
                          "div",
                          { className: "wrapper" },
                          d.createElement(
                            "div",
                            { className: "twoCol" },
                            d.createElement(
                              "h2",
                              null,
                              "My Booklist",
                              " ",
                              d.createElement(
                                "span",
                                null,
                                d.createElement("img", {
                                  src: "/img/addBook.png",
                                  width: "13px",
                                }),
                                d.createElement(
                                  "a",
                                  { href: "#", onClick: this.addBook },
                                  "Add A Book"
                                )
                              )
                            ),
                            d.createElement(
                              "form",
                              { id: "sortMenuForm", className: "sortMenu" },
                              d.createElement(
                                "label",
                                { htmlFor: "sortBy" },
                                "Sort by:"
                              ),
                              d.createElement(
                                "select",
                                { id: "sortBy" },
                                d.createElement(
                                  "option",
                                  { value: "title" },
                                  "Title"
                                ),
                                d.createElement(
                                  "option",
                                  { value: "genre" },
                                  "Genre"
                                )
                              )
                            )
                          ),
                          d.createElement("div", { className: "space20" }),
                          d.createElement(
                            "div",
                            { className: "availableBooks" },
                            d.createElement(
                              "table",
                              { id: "myBooksTable" },
                              d.createElement(
                                "thead",
                                null,
                                d.createElement(
                                  "tr",
                                  null,
                                  d.createElement("th", null, "Title"),
                                  d.createElement("th", null, "Genre"),
                                  d.createElement(
                                    "th",
                                    null,
                                    "Users Interested"
                                  )
                                )
                              ),
                              d.createElement(
                                "tbody",
                                null,
                                this.state.sortedList.map(function (t, n) {
                                  return d.createElement(
                                    "tr",
                                    { key: "myBook".concat(n) },
                                    d.createElement(
                                      "td",
                                      null,
                                      " ",
                                      d.createElement(
                                        "h3",
                                        { className: "mobile" },
                                        "Book Title:"
                                      ),
                                      d.createElement(
                                        "a",
                                        {
                                          href: "#",
                                          onClick: function () {
                                            return e.showDetails(t);
                                          },
                                        },
                                        t.title
                                      )
                                    ),
                                    d.createElement(
                                      "td",
                                      null,
                                      d.createElement(
                                        "h3",
                                        { className: "mobile" },
                                        "Book Genre:"
                                      ),
                                      t.genre
                                    ),
                                    d.createElement(
                                      "td",
                                      null,
                                      d.createElement(
                                        "h3",
                                        { className: "mobile" },
                                        "Users Interested:"
                                      ),
                                      d.createElement(
                                        "div",
                                        null,
                                        e.checkInterested(t.title).length > 0
                                          ? e
                                              .checkInterested(t.title)
                                              .map(function (t, n) {
                                                return d.createElement(
                                                  "div",
                                                  null,
                                                  d.createElement(
                                                    "a",
                                                    {
                                                      key: "interestedLink".concat(
                                                        n
                                                      ),
                                                      href: "#",
                                                      onClick: function (n) {
                                                        return e.bookList(
                                                          n,
                                                          t.user
                                                        );
                                                      },
                                                    },
                                                    t.user
                                                  ),
                                                  d.createElement("div", {
                                                    className: "space10",
                                                  })
                                                );
                                              })
                                          : "",
                                        " "
                                      )
                                    )
                                  );
                                })
                              )
                            )
                          )
                        ),
                        d.createElement("div", { className: "space20" }),
                        d.createElement(
                          "div",
                          { className: "tableButton wrapper" },
                          d.createElement(
                            "button",
                            {
                              type: "submit",
                              className: "buttonBlue",
                              onClick: function () {
                                return e.addBook();
                              },
                            },
                            "ADD A BOOK"
                          )
                        ),
                        d.createElement("div", { className: "space40" }),
                        d.createElement(
                          "div",
                          { className: "wrapper" },
                          d.createElement("h2", null, "Pending Swaps"),
                          d.createElement(
                            "div",
                            { className: "carousel" },
                            d.createElement("div", { className: "border" }),
                            d.createElement(
                              "div",
                              { className: "books" },
                              this.pendingSwaps > 0 &&
                                this.props.matches.map(function (e, t) {
                                  return d.createElement(
                                    "div",
                                    { key: "pendingSwap".concat(t) },
                                    e.theirBook.title,
                                    " ",
                                    d.createElement(
                                      "i",
                                      {
                                        style: {
                                          margin: "0 10px",
                                          fontWeight: "bold",
                                        },
                                      },
                                      "for"
                                    ),
                                    e.myBook.title
                                  );
                                }),
                              0 === this.pendingSwaps &&
                                d.createElement(
                                  "h3",
                                  null,
                                  "You have no pending swaps at this time."
                                )
                            ),
                            d.createElement("div", { className: "border" })
                          ),
                          d.createElement("div", { className: "space10" }),
                          d.createElement(
                            g.Link,
                            { to: "/books", className: "ctaLink" },
                            d.createElement("img", {
                              src: "/svg/leftArrow.svg",
                            }),
                            d.createElement("span", null, "FIND BOOKS")
                          ),
                          d.createElement("div", { className: "space40" }),
                          d.createElement("h2", null, "Recent Swaps"),
                          d.createElement(
                            "div",
                            { className: "carousel" },
                            d.createElement("div", { className: "border" }),
                            d.createElement(
                              "div",
                              { className: "books" },
                              d.createElement(
                                "div",
                                null,
                                "The Rum Diary",
                                d.createElement(
                                  "i",
                                  {
                                    style: {
                                      margin: "0 10px",
                                      fontWeight: "bold",
                                    },
                                  },
                                  "for"
                                ),
                                "Absurdistan"
                              ),
                              d.createElement(
                                "div",
                                null,
                                "The Castle",
                                d.createElement(
                                  "i",
                                  {
                                    style: {
                                      margin: "0 10px",
                                      fontWeight: "bold",
                                    },
                                  },
                                  "for"
                                ),
                                "Johathan Strange & Mr Norrell"
                              ),
                              d.createElement(
                                "div",
                                null,
                                "A Wild Sheep Chase",
                                d.createElement(
                                  "i",
                                  {
                                    style: {
                                      margin: "0 10px",
                                      fontWeight: "bold",
                                    },
                                  },
                                  "for"
                                ),
                                "Choke"
                              )
                            ),
                            d.createElement("div", { className: "border" })
                          )
                        )
                      ),
                      d.createElement(v.Z, null)
                    ),
                    d.createElement(A.Z, {
                      open: this.state.showDetails,
                      book: this.state.bookDetails,
                      closeHandler: this.closeDetails,
                    }),
                    d.createElement(y, {
                      open: this.state.addBook,
                      closeHandler: this.closeDetails,
                    }),
                    d.createElement(p.Z, {
                      open: this.state.bookList,
                      owner: this.state.owner,
                      closeHandler: this.closeDetails,
                    })
                  );
                },
              },
            ]),
            n
          );
        })(d.Component),
        P = (0, u.$j)(
          function (e) {
            return {
              myBooks: e.myBooks,
              matches: e.matches,
              interested: e.interested,
            };
          },
          function (e) {
            return {
              setMyBooks: function (t) {
                e({ type: "SET_MY_BOOKS", myBooks: t });
              },
              setBookList: function (t) {
                e({ type: "SET_BOOK_LIST", bookList: t });
              },
              setBookActivation: function (t, n) {
                e({ type: "SET_BOOK_ACTIVATION", bookTitle: t, active: n });
              },
            };
          }
        )(q);
    },
    5686: function (e, t, n) {
      var o = n(7537),
        a = n.n(o),
        s = n(3645),
        l = n.n(s)()(a());
      l.push([
        e.id,
        "@media only screen and (max-width: 599px) {\n}\n",
        "",
        {
          version: 3,
          sources: ["webpack://./src/Pages/MyBooks/css/600Max.css"],
          names: [],
          mappings: "AAAA;AACA",
          sourcesContent: ["@media only screen and (max-width: 599px) {\n}\n"],
          sourceRoot: "",
        },
      ]),
        (t.Z = l);
    },
    900: function (e, t, n) {
      var o = n(7537),
        a = n.n(o),
        s = n(3645),
        l = n.n(s)()(a());
      l.push([
        e.id,
        "@media only screen and (max-width: 899px) {\n  #myBooks .desktop {\n    display: none;\n  }\n  #myBooks .mobile {\n    display: block;\n  }\n  #myBooks h3 {\n    margin: 0 10px 0 0;\n    padding: 0;\n    font-size: 14px;\n  }\n  #myBooks .pageTitle img {\n    height: 30px;\n  }\n\n  #myBooks thead {\n    display: none;\n  }\n  #myBooksTable tr {\n    display: flex;\n    flex-flow: column;\n    border: 1px solid #ccc;\n    padding: 20px;\n    margin-bottom: 20px;\n  }\n  #myBooksTable td {\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: flex-start;\n    align-items: flex-start;\n    vertical-align: top;\n    font-size: 14px;\n  }\n\n  .sortMenu select {\n    font-size: 12px;\n  }\n  #myBooks h2 span {\n    font-size: 14px;\n  }\n  #myBooksTable tbody tr td {\n    border-bottom: none;\n    padding: 10px 0;\n  }\n\n  #myBooks .buttonBlue {\n    font-size: 12px;\n    border: 1px solid #fff;\n    padding: 8px 15px;\n  }\n}\n",
        "",
        {
          version: 3,
          sources: ["webpack://./src/Pages/MyBooks/css/900Max.css"],
          names: [],
          mappings:
            "AAAA;EACE;IACE,aAAa;EACf;EACA;IACE,cAAc;EAChB;EACA;IACE,kBAAkB;IAClB,UAAU;IACV,eAAe;EACjB;EACA;IACE,YAAY;EACd;;EAEA;IACE,aAAa;EACf;EACA;IACE,aAAa;IACb,iBAAiB;IACjB,sBAAsB;IACtB,aAAa;IACb,mBAAmB;EACrB;EACA;IACE,aAAa;IACb,mBAAmB;IACnB,2BAA2B;IAC3B,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;EACjB;;EAEA;IACE,eAAe;EACjB;EACA;IACE,eAAe;EACjB;EACA;IACE,mBAAmB;IACnB,eAAe;EACjB;;EAEA;IACE,eAAe;IACf,sBAAsB;IACtB,iBAAiB;EACnB;AACF",
          sourcesContent: [
            "@media only screen and (max-width: 899px) {\n  #myBooks .desktop {\n    display: none;\n  }\n  #myBooks .mobile {\n    display: block;\n  }\n  #myBooks h3 {\n    margin: 0 10px 0 0;\n    padding: 0;\n    font-size: 14px;\n  }\n  #myBooks .pageTitle img {\n    height: 30px;\n  }\n\n  #myBooks thead {\n    display: none;\n  }\n  #myBooksTable tr {\n    display: flex;\n    flex-flow: column;\n    border: 1px solid #ccc;\n    padding: 20px;\n    margin-bottom: 20px;\n  }\n  #myBooksTable td {\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: flex-start;\n    align-items: flex-start;\n    vertical-align: top;\n    font-size: 14px;\n  }\n\n  .sortMenu select {\n    font-size: 12px;\n  }\n  #myBooks h2 span {\n    font-size: 14px;\n  }\n  #myBooksTable tbody tr td {\n    border-bottom: none;\n    padding: 10px 0;\n  }\n\n  #myBooks .buttonBlue {\n    font-size: 12px;\n    border: 1px solid #fff;\n    padding: 8px 15px;\n  }\n}\n",
          ],
          sourceRoot: "",
        },
      ]),
        (t.Z = l);
    },
    1523: function (e, t, n) {
      var o = n(7537),
        a = n.n(o),
        s = n(3645),
        l = n.n(s),
        r = n(5952),
        i = n(900),
        c = n(5686),
        m = l()(a());
      m.i(r.Z),
        m.i(i.Z),
        m.i(c.Z),
        m.push([
          e.id,
          "\n",
          "",
          { version: 3, sources: [], names: [], mappings: "", sourceRoot: "" },
        ]),
        (t.Z = m);
    },
    5952: function (e, t, n) {
      var o = n(7537),
        a = n.n(o),
        s = n(3645),
        l = n.n(s)()(a());
      l.push([
        e.id,
        "#myBooks .pageTitle img {\n  height: 50px;\n}\n#myBooks .mobile {\n  display: none;\n}\n#myBooks .desktop {\n  display: block;\n}\n#myBooks .pageTitle {\n  bottom: 1px;\n}\n#myBooksTable {\n  width: 100%;\n}\n#myBooksTable td {\n  vertical-align: top;\n}\n\n#myBooksTable td a.bookTitle {\n  font-weight: bold;\n}\n#myBooksTable th {\n  text-align: left;\n  padding-bottom: 20px;\n}\n\n#myBooksTable tbody tr:first-child td {\n  padding: 0 0 20px 0;\n}\n#myBooksTable tbody tr td {\n  border-bottom: 1px dashed #999;\n  padding: 20px 0;\n}\n#myBooksTable tbody tr:last-child td {\n  border-bottom: none;\n}\n#myBooks h2 span {\n  display: inline-flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-end;\n  margin-left: 20px;\n  font-family: lato, sans-serif;\n  font-size: 16px;\n}\n#myBooks h2 span img {\n  margin-right: 5px;\n}\n#myBooks h2 a,\n#myBooks h2 a:active,\n#myBooks h2 a:visited {\n  color: #1172a3;\n  text-decoration: none;\n}\n#myBooks h2 a:hover {\n  text-decoration: underline;\n}\n",
        "",
        {
          version: 3,
          sources: ["webpack://./src/Pages/MyBooks/css/styles.css"],
          names: [],
          mappings:
            "AAAA;EACE,YAAY;AACd;AACA;EACE,aAAa;AACf;AACA;EACE,cAAc;AAChB;AACA;EACE,WAAW;AACb;AACA;EACE,WAAW;AACb;AACA;EACE,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;AACnB;AACA;EACE,gBAAgB;EAChB,oBAAoB;AACtB;;AAEA;EACE,mBAAmB;AACrB;AACA;EACE,8BAA8B;EAC9B,eAAe;AACjB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,oBAAoB;EACpB,mBAAmB;EACnB,mBAAmB;EACnB,yBAAyB;EACzB,iBAAiB;EACjB,6BAA6B;EAC7B,eAAe;AACjB;AACA;EACE,iBAAiB;AACnB;AACA;;;EAGE,cAAc;EACd,qBAAqB;AACvB;AACA;EACE,0BAA0B;AAC5B",
          sourcesContent: [
            "#myBooks .pageTitle img {\n  height: 50px;\n}\n#myBooks .mobile {\n  display: none;\n}\n#myBooks .desktop {\n  display: block;\n}\n#myBooks .pageTitle {\n  bottom: 1px;\n}\n#myBooksTable {\n  width: 100%;\n}\n#myBooksTable td {\n  vertical-align: top;\n}\n\n#myBooksTable td a.bookTitle {\n  font-weight: bold;\n}\n#myBooksTable th {\n  text-align: left;\n  padding-bottom: 20px;\n}\n\n#myBooksTable tbody tr:first-child td {\n  padding: 0 0 20px 0;\n}\n#myBooksTable tbody tr td {\n  border-bottom: 1px dashed #999;\n  padding: 20px 0;\n}\n#myBooksTable tbody tr:last-child td {\n  border-bottom: none;\n}\n#myBooks h2 span {\n  display: inline-flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-end;\n  margin-left: 20px;\n  font-family: lato, sans-serif;\n  font-size: 16px;\n}\n#myBooks h2 span img {\n  margin-right: 5px;\n}\n#myBooks h2 a,\n#myBooks h2 a:active,\n#myBooks h2 a:visited {\n  color: #1172a3;\n  text-decoration: none;\n}\n#myBooks h2 a:hover {\n  text-decoration: underline;\n}\n",
          ],
          sourceRoot: "",
        },
      ]),
        (t.Z = l);
    },
  },
]);
//# sourceMappingURL=chunk-199.55cf7d5bbd03b7a0553a.js.map
