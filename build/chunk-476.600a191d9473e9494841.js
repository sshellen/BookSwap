"use strict";
(self.webpackChunkBookSwap = self.webpackChunkBookSwap || []).push([
  [476],
  {
    476: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return D;
          },
        });
      var a = n(2982),
        o = n(5671),
        c = n(3144),
        i = n(7326),
        l = n(136),
        s = n(6215),
        r = n(1120),
        A = n(4942),
        h = n(7294),
        m = n(8216),
        d = n(3818),
        p = n(7005),
        f = n(4557),
        u = n(4585),
        b = n(3379),
        E = n.n(b),
        B = n(7795),
        C = n.n(B),
        x = n(569),
        g = n.n(x),
        w = n(3565),
        k = n.n(w),
        y = n(9216),
        T = n.n(y),
        v = n(4589),
        S = n.n(v),
        Z = n(3626),
        I = {};
      (I.styleTagTransform = S()),
        (I.setAttributes = k()),
        (I.insert = g().bind(null, "head")),
        (I.domAPI = C()),
        (I.insertStyleElement = T());
      E()(Z.Z, I), Z.Z && Z.Z.locals && Z.Z.locals;
      function M(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function O(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? M(Object(n), !0).forEach(function (t) {
                (0, A.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : M(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function L(e) {
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
            a = (0, r.Z)(e);
          if (t) {
            var o = (0, r.Z)(this).constructor;
            n = Reflect.construct(a, arguments, o);
          } else n = a.apply(this, arguments);
          return (0, s.Z)(this, n);
        };
      }
      var j = (function (e) {
          (0, l.Z)(n, e);
          var t = L(n);
          function n(e) {
            var c;
            return (
              (0, o.Z)(this, n),
              (c = t.call(this, e)),
              (0, A.Z)((0, i.Z)(c), "getBook", function (e) {
                return c.state.books.filter(function (t) {
                  return t.title === e;
                });
              }),
              (0, A.Z)((0, i.Z)(c), "addToSelected", function (e, t, n) {
                var o,
                  i = e.target.value,
                  l = c.state.theOnesTheyLike.filter(function (e) {
                    return e.title === i;
                  }),
                  s = c.state.theOnesTheyLike.filter(function (e) {
                    return e.title !== i;
                  });
                c.setState({
                  theOnesTheyLike: s,
                  rowsSelected: [].concat((0, a.Z)(c.state.rowsSelected), [
                    ((o = {}),
                    (0, A.Z)(o, e.target.name, e.target.value),
                    (0, A.Z)(
                      o,
                      "theChosen",
                      [].concat((0, a.Z)(c.state.theChosen), (0, a.Z)(l))
                    ),
                    (0, A.Z)(o, "myBook", t),
                    (0, A.Z)(o, "theirBook", n),
                    o),
                  ]),
                });
              }),
              (0, A.Z)((0, i.Z)(c), "includesTitle", function (e) {
                return c.state.rowsSelected.reduce(function (t, n) {
                  for (var a in n) a === e && (t = n[a]);
                  return t;
                }, "");
              }),
              (0, A.Z)((0, i.Z)(c), "takeOffList", function (e, t) {
                e.preventDefault();
                var n = c.state.rowsSelected.reduce(function (e, n, a) {
                  for (var o in n) o === t && (e = a);
                  return e;
                }, 0);
                c.setState({
                  theOnesTheyLike: [].concat(
                    (0, a.Z)(c.state.theOnesTheyLike),
                    (0, a.Z)(c.state.rowsSelected[n].theChosen)
                  ),
                  rowsSelected: c.state.rowsSelected
                    .slice(0, n)
                    .concat(
                      c.state.rowsSelected.slice(
                        n + 1,
                        c.state.rowsSelected.length
                      )
                    ),
                });
              }),
              (0, A.Z)((0, i.Z)(c), "showDetails", function (e) {
                event.preventDefault();
                var t = c.getBook(e)[0];
                c.setState({ showContextMenu: !1 }, function () {
                  c.setState({ showDetails: !0, bookDetails: t }),
                    c.content.classList.add("fixed");
                });
              }),
              (0, A.Z)((0, i.Z)(c), "closeDetails", function () {
                event.preventDefault(),
                  c.setState({ showDetails: !1, bookList: !1 }),
                  c.content.classList.remove("fixed");
              }),
              (0, A.Z)((0, i.Z)(c), "onSubmit", function (e) {
                e.preventDefault();
                new FormData(e.target),
                  c.props.matches.reduce(function (t, n, a) {
                    return (t = e.target["checkbox" + a]
                      ? t.concat(
                          O(
                            O({}, n),
                            {},
                            {
                              selectedForSwap: e.target["checkbox" + a].checked,
                            }
                          )
                        )
                      : t.concat(
                          O(
                            O({}, n),
                            {},
                            { selectedForSwap: n.selectedForSwap }
                          )
                        ));
                  }, []);
                c.props.setMatchesSelected(c.state.rowsSelected),
                  c.props.history.push("/confirmation");
              }),
              (0, A.Z)((0, i.Z)(c), "bookList", function (e, t) {
                e.preventDefault(),
                  c.setState({ showContextMenu: !1 }, function () {
                    c.setState({ bookList: !0, owner: t }),
                      c.content.classList.add("fixed");
                  });
              }),
              (0, A.Z)((0, i.Z)(c), "theOnesILike", function (e) {
                return e.filter(function (e) {
                  return !0 === e.interested;
                });
              }),
              (0, A.Z)((0, i.Z)(c), "theOnesTheyLike", function (e, t) {
                return e.reduce(function (e, n) {
                  var a = t.filter(function (e) {
                    return !0 === n.interested && n.owner === e.user;
                  });
                  return e.concat(a);
                }, []);
              }),
              (0, A.Z)((0, i.Z)(c), "userInterest", function (e, t) {
                return (
                  c.props.interested.filter(function (n) {
                    return n.user === e && n.title === t.title && t.user === e;
                  }).length > 0
                );
              }),
              (c.state = {
                bookDetails: {},
                showDetails: !1,
                bookList: !1,
                theOnesILike: [],
                theOnesTheyLike: [],
                showContextMenu: !1,
                owner: "",
                books: [],
                matches: [],
                selected: [],
                rowsSelected: [],
                theChosen: [],
                myBook: {},
                theirBook: {},
              }),
              c
            );
          }
          return (
            (0, c.Z)(n, [
              {
                key: "componentDidMount",
                value: function () {
                  this.content = document.getElementsByTagName("body")[0];
                  var e = this.theOnesILike(this.props.allBooks),
                    t = this.props.interested;
                  this.setState({
                    books: [].concat(
                      (0, a.Z)(this.props.allBooks),
                      (0, a.Z)(this.props.myBooks)
                    ),
                  }),
                    this.setState({ theOnesILike: e, theOnesTheyLike: t });
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
                  t.matches, t.myBooks, t.allBooks, t.interested;
                  return h.createElement(
                    "div",
                    { id: "bookSwapMatches" },
                    h.createElement(f.Z, null),
                    h.createElement(
                      "div",
                      { className: "main" },
                      h.createElement(
                        "div",
                        { className: "hero" },
                        h.createElement(
                          "div",
                          { className: "pageTitle" },
                          h.createElement("img", {
                            src: "/svg/matchesTitle.svg",
                          })
                        ),
                        h.createElement("img", { src: "/img/matches.png" })
                      ),
                      h.createElement(
                        "form",
                        {
                          name: "matchForm",
                          onSubmit: function (t) {
                            return e.onSubmit(t), !1;
                          },
                        },
                        h.createElement(
                          "div",
                          { className: "section" },
                          h.createElement(
                            "div",
                            { className: "wrapper" },
                            h.createElement(
                              "h2",
                              null,
                              "Select which book to swap for."
                            ),
                            h.createElement(
                              "table",
                              { className: "matchTable" },
                              h.createElement(
                                "thead",
                                null,
                                h.createElement(
                                  "tr",
                                  null,
                                  h.createElement("th", null, "Their book"),
                                  h.createElement(
                                    "th",
                                    null,
                                    h.createElement("i", null, "for")
                                  ),
                                  h.createElement("th", null, "your book")
                                )
                              ),
                              this.state.theOnesILike.map(function (t, n) {
                                return h.createElement(
                                  "tbody",
                                  { key: "tableRowForMatches".concat(n) },
                                  h.createElement(
                                    "tr",
                                    { className: n % 2 == 0 ? "even" : "" },
                                    h.createElement(
                                      "td",
                                      { className: "book" },
                                      h.createElement(
                                        "h3",
                                        { className: "mobile" },
                                        "Their book:"
                                      ),
                                      h.createElement(
                                        "a",
                                        {
                                          href: "#",
                                          onClick: function () {
                                            return e.showDetails(t.title);
                                          },
                                          className: "bookTitle",
                                        },
                                        t.title
                                      ),
                                      h.createElement(
                                        "div",
                                        { className: "byLine" },
                                        "by ",
                                        t.author
                                      ),
                                      h.createElement(
                                        "div",
                                        { className: "ownedBy" },
                                        "Owned by",
                                        h.createElement("br", null),
                                        h.createElement(
                                          "a",
                                          {
                                            href: "#",
                                            onClick: function (n) {
                                              return e.bookList(n, t.owner);
                                            },
                                          },
                                          t.owner
                                        )
                                      )
                                    ),
                                    h.createElement(
                                      "td",
                                      null,
                                      h.createElement(
                                        "div",
                                        { className: "desktop" },
                                        h.createElement("img", {
                                          src: "/svg/swapIcon.svg",
                                          alt: "swap for",
                                        })
                                      ),
                                      h.createElement(
                                        "h3",
                                        { className: "mobile" },
                                        h.createElement(
                                          "i",
                                          null,
                                          "swap for..."
                                        )
                                      )
                                    ),
                                    "" !== e.includesTitle(t.title)
                                      ? h.createElement(
                                          "td",
                                          null,
                                          h.createElement(
                                            "h3",
                                            { className: "mobile" },
                                            "Your book:"
                                          ),
                                          " ",
                                          h.createElement(
                                            "div",
                                            null,
                                            e.includesTitle(t.title)
                                          ),
                                          h.createElement("div", {
                                            className: "space10",
                                          }),
                                          h.createElement(
                                            "button",
                                            {
                                              className: "cancelButton",
                                              onClick: function (n) {
                                                return e.takeOffList(
                                                  n,
                                                  t.title
                                                );
                                              },
                                            },
                                            "CANCEL"
                                          )
                                        )
                                      : h.createElement(
                                          "td",
                                          { className: "myBook", id: t.title },
                                          h.createElement(
                                            "h3",
                                            { className: "mobile" },
                                            "Your book:"
                                          ),
                                          e.state.theOnesTheyLike.map(function (
                                            n,
                                            a
                                          ) {
                                            return (
                                              e.userInterest(t.owner, n) &&
                                              h.createElement(
                                                "div",
                                                {
                                                  className: "formRow",
                                                  key: "myBook".concat(a),
                                                  id: "myBook".concat(a),
                                                },
                                                h.createElement("input", {
                                                  type: "radio",
                                                  name: t.title,
                                                  defaultValue: n.title,
                                                  id: "input".concat(a),
                                                  onClick: function (a) {
                                                    return e.addToSelected(
                                                      a,
                                                      n,
                                                      t
                                                    );
                                                  },
                                                }),
                                                h.createElement(
                                                  "label",
                                                  {
                                                    htmlFor: "input".concat(a),
                                                  },
                                                  h.createElement(
                                                    "a",
                                                    {
                                                      href: "#",
                                                      onClick: function () {
                                                        return e.showDetails(
                                                          n.title
                                                        );
                                                      },
                                                    },
                                                    n.title
                                                  )
                                                )
                                              )
                                            );
                                          })
                                        )
                                  )
                                );
                              })
                            )
                          )
                        ),
                        h.createElement(
                          "div",
                          { className: "tableButton wrapper" },
                          h.createElement(
                            "button",
                            { type: "submit", className: "buttonBlue" },
                            "CONFIRM SWAPS"
                          )
                        )
                      ),
                      h.createElement(u.Z, null)
                    ),
                    h.createElement(d.Z, {
                      open: this.state.showDetails,
                      book: this.state.bookDetails,
                      closeHandler: this.closeDetails,
                    }),
                    h.createElement(p.Z, {
                      open: this.state.bookList,
                      closeHandler: this.closeDetails,
                      owner: this.state.owner,
                    })
                  );
                },
              },
            ]),
            n
          );
        })(h.Component),
        D = (0, m.$j)(
          function (e) {
            return {
              matches: e.matches,
              myBooks: e.myBooks,
              interested: e.interested,
              allBooks: e.allBooks,
            };
          },
          function (e) {
            return {
              setMatchesSelected: function (t) {
                e({ type: "SET_MATCHES_SELECTED", matches: t });
              },
            };
          }
        )(j);
    },
    4597: function (e, t, n) {
      var a = n(7537),
        o = n.n(a),
        c = n(3645),
        i = n.n(c)()(o());
      i.push([
        e.id,
        "@media only screen and (max-width: 599px) {\n}\n",
        "",
        {
          version: 3,
          sources: ["webpack://./src/Pages/Matches/css/600Max.css"],
          names: [],
          mappings: "AAAA;AACA",
          sourcesContent: ["@media only screen and (max-width: 599px) {\n}\n"],
          sourceRoot: "",
        },
      ]),
        (t.Z = i);
    },
    7349: function (e, t, n) {
      var a = n(7537),
        o = n.n(a),
        c = n(3645),
        i = n.n(c)()(o());
      i.push([
        e.id,
        "@media only screen and (max-width: 899px) {\n  #bookSwapMatches .pageTitle img {\n    height: 30px;\n  }\n  #bookSwapMatches .desktop {\n    display: none;\n  }\n  #bookSwapMatches .mobile {\n    display: block;\n  }\n  #bookSwapMatches h3 {\n    font-size: 14px;\n    padding: 0;\n    margin: 5px 0;\n  }\n\n  .matchTable {\n    width: 100%;\n    box-sizing: border-box;\n    text-align: center;\n  }\n  .matchTable tr {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n    width: 100%;\n    border: 1px solid #ccc;\n    box-sizing: border-box;\n    padding: 20px;\n    margin-bottom: 30px;\n  }\n  .matchTable td {\n    height: auto;\n    font-size: 14px;\n  }\n  .matchTable thead {\n    display: none;\n  }\n  .matchTable th {\n    display: none;\n  }\n  .matchTable td,\n  .matchTable th {\n    text-align: left;\n  }\n\n  .matchTable td:nth-child(1),\n  .matchTable td:nth-child(2),\n  .matchTable td:nth-child(3) {\n    width: 100%;\n    text-align: left;\n  }\n  .matchTable td:nth-child(2) {\n    margin: 20px 0;\n    text-align: center;\n    background-color: #f5f5f5;\n  }\n  #bookSwapMatches .formRow {\n    display: flex;\n    flex-flow: row nowrap;\n    justify-content: flex-start;\n    align-items: center;\n    margin: 10px 0;\n  }\n  .matchTable tr,\n  .matchTable tr.even {\n    background-color: #fff;\n  }\n  .matchTable .cancelButton {\n    font-size: 12px;\n    border: 1px solid #fff;\n    border-radius: 25px;\n    padding: 8px 15px;\n    margin-right: 10px;\n  }\n}\n",
        "",
        {
          version: 3,
          sources: ["webpack://./src/Pages/Matches/css/900Max.css"],
          names: [],
          mappings:
            "AAAA;EACE;IACE,YAAY;EACd;EACA;IACE,aAAa;EACf;EACA;IACE,cAAc;EAChB;EACA;IACE,eAAe;IACf,UAAU;IACV,aAAa;EACf;;EAEA;IACE,WAAW;IACX,sBAAsB;IACtB,kBAAkB;EACpB;EACA;IACE,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,8BAA8B;IAC9B,WAAW;IACX,sBAAsB;IACtB,sBAAsB;IACtB,aAAa;IACb,mBAAmB;EACrB;EACA;IACE,YAAY;IACZ,eAAe;EACjB;EACA;IACE,aAAa;EACf;EACA;IACE,aAAa;EACf;EACA;;IAEE,gBAAgB;EAClB;;EAEA;;;IAGE,WAAW;IACX,gBAAgB;EAClB;EACA;IACE,cAAc;IACd,kBAAkB;IAClB,yBAAyB;EAC3B;EACA;IACE,aAAa;IACb,qBAAqB;IACrB,2BAA2B;IAC3B,mBAAmB;IACnB,cAAc;EAChB;EACA;;IAEE,sBAAsB;EACxB;EACA;IACE,eAAe;IACf,sBAAsB;IACtB,mBAAmB;IACnB,iBAAiB;IACjB,kBAAkB;EACpB;AACF",
          sourcesContent: [
            "@media only screen and (max-width: 899px) {\n  #bookSwapMatches .pageTitle img {\n    height: 30px;\n  }\n  #bookSwapMatches .desktop {\n    display: none;\n  }\n  #bookSwapMatches .mobile {\n    display: block;\n  }\n  #bookSwapMatches h3 {\n    font-size: 14px;\n    padding: 0;\n    margin: 5px 0;\n  }\n\n  .matchTable {\n    width: 100%;\n    box-sizing: border-box;\n    text-align: center;\n  }\n  .matchTable tr {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n    width: 100%;\n    border: 1px solid #ccc;\n    box-sizing: border-box;\n    padding: 20px;\n    margin-bottom: 30px;\n  }\n  .matchTable td {\n    height: auto;\n    font-size: 14px;\n  }\n  .matchTable thead {\n    display: none;\n  }\n  .matchTable th {\n    display: none;\n  }\n  .matchTable td,\n  .matchTable th {\n    text-align: left;\n  }\n\n  .matchTable td:nth-child(1),\n  .matchTable td:nth-child(2),\n  .matchTable td:nth-child(3) {\n    width: 100%;\n    text-align: left;\n  }\n  .matchTable td:nth-child(2) {\n    margin: 20px 0;\n    text-align: center;\n    background-color: #f5f5f5;\n  }\n  #bookSwapMatches .formRow {\n    display: flex;\n    flex-flow: row nowrap;\n    justify-content: flex-start;\n    align-items: center;\n    margin: 10px 0;\n  }\n  .matchTable tr,\n  .matchTable tr.even {\n    background-color: #fff;\n  }\n  .matchTable .cancelButton {\n    font-size: 12px;\n    border: 1px solid #fff;\n    border-radius: 25px;\n    padding: 8px 15px;\n    margin-right: 10px;\n  }\n}\n",
          ],
          sourceRoot: "",
        },
      ]),
        (t.Z = i);
    },
    3626: function (e, t, n) {
      var a = n(7537),
        o = n.n(a),
        c = n(3645),
        i = n.n(c),
        l = n(3059),
        s = n(7349),
        r = n(4597),
        A = i()(o());
      A.i(l.Z),
        A.i(s.Z),
        A.i(r.Z),
        A.push([
          e.id,
          "\n",
          "",
          { version: 3, sources: [], names: [], mappings: "", sourceRoot: "" },
        ]),
        (t.Z = A);
    },
    3059: function (e, t, n) {
      var a = n(7537),
        o = n.n(a),
        c = n(3645),
        i = n.n(c)()(o());
      i.push([
        e.id,
        '#bookSwapMatches .pageTitle {\n  bottom: 0px;\n}\n#bookSwapMatches .pageTitle img {\n  height: 50px;\n}\n#bookSwapMatches .mobile {\n  display: none;\n}\n#bookSwapMatches input[type="radio"] {\n  width: 20px;\n  height: 20px;\n  margin: 3px 5px 3px 0;\n  border-color: #999;\n}\n#bookSwapMatches form {\n  box-sizing: border-box;\n}\n#bookSwapMatches .formRow {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: center;\n  margin: 10px 0;\n}\n#bookSwapMatches .formRow label {\n  font-family: lato, sans-serif;\n  font-size: 14px;\n}\n.matchTable {\n  width: 100%;\n  box-sizing: border-box;\n}\n.matchTable td {\n  height: 100px;\n  font-size: 14px;\n}\n.matchTable th {\n  margin-bottom: 20px;\n}\n.matchTable td,\n.matchTable th {\n  text-align: left;\n}\n.matchTable td:nth-child(2),\n.matchTable th:nth-child(2) {\n  width: 60px;\n  text-align: center;\n}\n.matchTable td:nth-child(2) img {\n  width: 40px;\n  vertical-align: middle;\n}\n.matchTable td:nth-child(1),\n.matchTable th:nth-child(1),\n.matchTable td:nth-child(3),\n.matchTable th:nth-child(3) {\n  width: 200px;\n  text-align: left;\n}\n.matchTable tr {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  justify-content: space-between;\n  width: 100%;\n  box-sizing: border-box;\n  padding: 20px;\n}\n\n.matchTable tr.even {\n  background-color: #f5f5f5;\n}\n.ownedBy {\n  margin-top: 20px;\n}\n.select {\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: flex-start;\n  justify-content: flex-start;\n}\n',
        "",
        {
          version: 3,
          sources: ["webpack://./src/Pages/Matches/css/styles.css"],
          names: [],
          mappings:
            "AAAA;EACE,WAAW;AACb;AACA;EACE,YAAY;AACd;AACA;EACE,aAAa;AACf;AACA;EACE,WAAW;EACX,YAAY;EACZ,qBAAqB;EACrB,kBAAkB;AACpB;AACA;EACE,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,qBAAqB;EACrB,2BAA2B;EAC3B,mBAAmB;EACnB,cAAc;AAChB;AACA;EACE,6BAA6B;EAC7B,eAAe;AACjB;AACA;EACE,WAAW;EACX,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,eAAe;AACjB;AACA;EACE,mBAAmB;AACrB;AACA;;EAEE,gBAAgB;AAClB;AACA;;EAEE,WAAW;EACX,kBAAkB;AACpB;AACA;EACE,WAAW;EACX,sBAAsB;AACxB;AACA;;;;EAIE,YAAY;EACZ,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,8BAA8B;EAC9B,WAAW;EACX,sBAAsB;EACtB,aAAa;AACf;;AAEA;EACE,yBAAyB;AAC3B;AACA;EACE,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,qBAAqB;EACrB,uBAAuB;EACvB,2BAA2B;AAC7B",
          sourcesContent: [
            '#bookSwapMatches .pageTitle {\n  bottom: 0px;\n}\n#bookSwapMatches .pageTitle img {\n  height: 50px;\n}\n#bookSwapMatches .mobile {\n  display: none;\n}\n#bookSwapMatches input[type="radio"] {\n  width: 20px;\n  height: 20px;\n  margin: 3px 5px 3px 0;\n  border-color: #999;\n}\n#bookSwapMatches form {\n  box-sizing: border-box;\n}\n#bookSwapMatches .formRow {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: center;\n  margin: 10px 0;\n}\n#bookSwapMatches .formRow label {\n  font-family: lato, sans-serif;\n  font-size: 14px;\n}\n.matchTable {\n  width: 100%;\n  box-sizing: border-box;\n}\n.matchTable td {\n  height: 100px;\n  font-size: 14px;\n}\n.matchTable th {\n  margin-bottom: 20px;\n}\n.matchTable td,\n.matchTable th {\n  text-align: left;\n}\n.matchTable td:nth-child(2),\n.matchTable th:nth-child(2) {\n  width: 60px;\n  text-align: center;\n}\n.matchTable td:nth-child(2) img {\n  width: 40px;\n  vertical-align: middle;\n}\n.matchTable td:nth-child(1),\n.matchTable th:nth-child(1),\n.matchTable td:nth-child(3),\n.matchTable th:nth-child(3) {\n  width: 200px;\n  text-align: left;\n}\n.matchTable tr {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  justify-content: space-between;\n  width: 100%;\n  box-sizing: border-box;\n  padding: 20px;\n}\n\n.matchTable tr.even {\n  background-color: #f5f5f5;\n}\n.ownedBy {\n  margin-top: 20px;\n}\n.select {\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: flex-start;\n  justify-content: flex-start;\n}\n',
          ],
          sourceRoot: "",
        },
      ]),
        (t.Z = i);
    },
  },
]);
//# sourceMappingURL=chunk-476.600a191d9473e9494841.js.map
