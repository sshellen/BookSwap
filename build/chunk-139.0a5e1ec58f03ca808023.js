"use strict";
(self.webpackChunkBookSwap = self.webpackChunkBookSwap || []).push([
  [139],
  {
    6718: function (n, e, t) {
      var o = t(7294);
      e.Z = function (n) {
        var e = n.name,
          t = n.id,
          i = n.checked,
          A = n.callback;
        return o.createElement(
          "div",
          { className: "checkboxWrapper" },
          o.createElement("div", {
            className: i ? "checkbox checked" : "checkbox",
            onClick: function (n) {
              return (function (n, e) {
                n.preventDefault();
                var t = n.target,
                  o = t.nextElementSibling;
                t.classList.contains("checked")
                  ? t.classList.remove("checked")
                  : t.classList.add("checked"),
                  o.dispatchEvent(new MouseEvent("click")),
                  A && A(o.checked, o.name);
              })(n);
            },
          }),
          o.createElement("input", {
            type: "checkbox",
            name: e,
            id: t,
            value: t,
            defaultChecked: i,
          })
        );
      };
    },
    3818: function (n, e, t) {
      var o = t(5671),
        i = t(3144),
        A = t(136),
        r = t(6215),
        l = t(1120),
        a = t(7294),
        s = t(3792),
        c = t(5284);
      function d(n) {
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
            o = (0, l.Z)(n);
          if (e) {
            var i = (0, l.Z)(this).constructor;
            t = Reflect.construct(o, arguments, i);
          } else t = o.apply(this, arguments);
          return (0, r.Z)(this, t);
        };
      }
      var u = (function (n) {
        (0, A.Z)(t, n);
        var e = d(t);
        function t() {
          return (0, o.Z)(this, t), e.apply(this, arguments);
        }
        return (
          (0, i.Z)(t, [
            {
              key: "putFocus",
              value: function () {
                document.getElementById("bookTitle").focus();
              },
            },
            {
              key: "render",
              value: function () {
                var n = this.props,
                  e = n.book,
                  t = n.closeHandler;
                return !0 === n.open
                  ? a.createElement(
                      c.J,
                      null,
                      a.createElement(
                        "div",
                        { id: "lightbox", className: "lightbox", tabIndex: 0 },
                        a.createElement(
                          "div",
                          { className: "close" },
                          a.createElement(
                            "a",
                            { onClick: t, tabIndex: 0 },
                            a.createElement("img", {
                              src: "/img/close.png",
                              alt: "Click to close lighbox.",
                            })
                          )
                        ),
                        a.createElement(
                          "div",
                          {
                            className: "content",
                            id: "bookTitle",
                            tabIndex: 0,
                          },
                          a.createElement("h2", null, e.title),
                          a.createElement(
                            "div",
                            { className: "byLine" },
                            "by ",
                            e.author
                          ),
                          a.createElement(
                            "p",
                            null,
                            a.createElement(s.D, { children: e.description })
                          ),
                          a.createElement(
                            "div",
                            { className: "buttonRow" },
                            a.createElement(
                              "button",
                              { className: "buttonBlue", onClick: t },
                              a.createElement(
                                "span",
                                { className: "visuallyHidden" },
                                "Click to close light-box."
                              ),
                              "CLOSE"
                            )
                          ),
                          a.createElement("div", {
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
          t
        );
      })(a.Component);
      e.Z = u;
    },
    7005: function (n, e, t) {
      var o = t(5671),
        i = t(3144),
        A = t(7326),
        r = t(136),
        l = t(6215),
        a = t(1120),
        s = t(4942),
        c = t(7294),
        d = t(8216),
        u = t(5284),
        f = t(6718);
      function p(n) {
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
            o = (0, a.Z)(n);
          if (e) {
            var i = (0, a.Z)(this).constructor;
            t = Reflect.construct(o, arguments, i);
          } else t = o.apply(this, arguments);
          return (0, l.Z)(this, t);
        };
      }
      var x = (function (n) {
        (0, r.Z)(t, n);
        var e = p(t);
        function t(n) {
          var i;
          return (
            (0, o.Z)(this, t),
            (i = e.call(this, n)),
            (0, s.Z)((0, A.Z)(i), "interestedHandler", function (n, e) {
              i.props.setBookInterest(n, e);
            }),
            i
          );
        }
        return (
          (0, i.Z)(t, [
            {
              key: "putFocus",
              value: function () {
                document.getElementById("bookListTitle").focus();
              },
            },
            {
              key: "render",
              value: function () {
                var n = this,
                  e = this.props,
                  t = e.owner,
                  o = void 0 === t ? "" : t,
                  i = e.closeHandler;
                return !0 === e.open
                  ? c.createElement(
                      u.J,
                      null,
                      c.createElement(
                        "div",
                        { id: "lightbox", className: "lightbox", tabIndex: 0 },
                        c.createElement(
                          "div",
                          { className: "close" },
                          c.createElement(
                            "a",
                            { onClick: i, tabIndex: 0 },
                            c.createElement("img", {
                              src: "/img/close.png",
                              alt: "Click to close lighbox.",
                            })
                          )
                        ),
                        c.createElement(
                          "div",
                          {
                            className: "content",
                            id: "bookListTitle",
                            tabIndex: 0,
                          },
                          c.createElement(
                            "h2",
                            null,
                            "Booklist for ",
                            this.props.owner
                          ),
                          c.createElement(
                            "table",
                            { id: "usersBookList" },
                            c.createElement(
                              "thead",
                              null,
                              c.createElement(
                                "tr",
                                null,
                                c.createElement("th", null, "Title"),
                                c.createElement("th", null, "Genre"),
                                c.createElement("th", null, "Interested")
                              )
                            ),
                            c.createElement(
                              "tbody",
                              null,
                              this.props.allBooks.map(function (e, t) {
                                return (
                                  e.owner &&
                                  e.owner === o &&
                                  c.createElement(
                                    "tr",
                                    { key: "bookInLightbox".concat(t) },
                                    c.createElement("td", null, e.title),
                                    c.createElement("td", null, e.genre),
                                    c.createElement(
                                      "td",
                                      { align: "center" },
                                      " ",
                                      c.createElement(f.Z, {
                                        name: e.title,
                                        style: { width: "30px" },
                                        checked: e.interested,
                                        callback: n.interestedHandler,
                                      })
                                    )
                                  )
                                );
                              })
                            )
                          ),
                          c.createElement(
                            "div",
                            { className: "buttonRow" },
                            c.createElement(
                              "button",
                              { className: "buttonBlue", onClick: i },
                              c.createElement(
                                "span",
                                { className: "visuallyHidden" },
                                "Click to close light-box."
                              ),
                              "CLOSE"
                            )
                          ),
                          c.createElement("div", {
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
          t
        );
      })(c.Component);
      e.Z = (0, d.$j)(
        function (n) {
          return { allBooks: n.allBooks };
        },
        function (n) {
          return {
            setBookInterest: function (e, t) {
              n({ type: "SET_BOOK_INTEREST", interested: e, title: t });
            },
          };
        }
      )(x);
    },
    5284: function (n, e, t) {
      t.d(e, {
        J: function () {
          return k;
        },
      });
      var o = t(5671),
        i = t(3144),
        A = t(136),
        r = t(6215),
        l = t(1120),
        a = t(7294),
        s = t(3935),
        c = t(3379),
        d = t.n(c),
        u = t(7795),
        f = t.n(u),
        p = t(569),
        x = t.n(p),
        B = t(3565),
        h = t.n(B),
        g = t(9216),
        m = t.n(g),
        E = t(4589),
        b = t.n(E),
        C = t(1679),
        w = {};
      (w.styleTagTransform = b()),
        (w.setAttributes = h()),
        (w.insert = x().bind(null, "head")),
        (w.domAPI = f()),
        (w.insertStyleElement = m());
      d()(C.Z, w), C.Z && C.Z.locals && C.Z.locals;
      function y(n) {
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
            o = (0, l.Z)(n);
          if (e) {
            var i = (0, l.Z)(this).constructor;
            t = Reflect.construct(o, arguments, i);
          } else t = o.apply(this, arguments);
          return (0, r.Z)(this, t);
        };
      }
      var k = (function (n) {
        (0, A.Z)(t, n);
        var e = y(t);
        function t(n) {
          return (0, o.Z)(this, t), e.call(this, n);
        }
        return (
          (0, i.Z)(t, [
            {
              key: "resizeContent",
              value: function () {
                (this.lbDiv = document.getElementById("lightbox")),
                  (this.lbDiv.style.width = window.innerWidth + "px"),
                  (this.lbDiv.style.height = window.innerHeight + "px");
              },
            },
            {
              key: "componentDidMount",
              value: function () {
                document.body.classList.add("fixed"),
                  this.resizeContent(),
                  document.getElementById("lightbox").focus(),
                  window.addEventListener("resize", this.resizeContent);
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                document.body.classList.remove("fixed"),
                  window.removeEventListener("resize", this.resizeContent);
              },
            },
            {
              key: "render",
              value: function () {
                return s.createPortal(this.props.children, document.body);
              },
            },
          ]),
          t
        );
      })(a.Component);
    },
    6908: function (n, e, t) {
      var o = t(7537),
        i = t.n(o),
        A = t(3645),
        r = t.n(A)()(i());
      r.push([
        n.id,
        "@media only screen and (max-width: 599px) {\n}\n",
        "",
        {
          version: 3,
          sources: [
            "webpack://./src/Components/LightboxTemplates/css/600Max.css",
          ],
          names: [],
          mappings: "AAAA;AACA",
          sourcesContent: ["@media only screen and (max-width: 599px) {\n}\n"],
          sourceRoot: "",
        },
      ]),
        (e.Z = r);
    },
    731: function (n, e, t) {
      var o = t(7537),
        i = t.n(o),
        A = t(3645),
        r = t.n(A)()(i());
      r.push([
        n.id,
        "@media only screen and (max-width: 899px) {\n  .lightbox {\n    position: absolute;\n    background-color: #fff;\n    top: 0;\n    left: 0;\n    z-index: 1000;\n    padding: 40px;\n    box-sizing: border-box;\n    overflow: auto;\n  }\n\n  .fixed {\n    position: fixed;\n  }\n  .lightbox .close {\n    display: flex;\n    width: 100%;\n    justify-content: flex-end;\n  }\n  .lightbox .close img {\n    width: 30px;\n    height: 30px;\n    padding: 0 0 20px 0;\n  }\n\n  .buttonBlue,\n  .cancelButton {\n    font-size: 12px;\n    padding: 8px 15px;\n  }\n}\n",
        "",
        {
          version: 3,
          sources: [
            "webpack://./src/Components/LightboxTemplates/css/900Max.css",
          ],
          names: [],
          mappings:
            "AAAA;EACE;IACE,kBAAkB;IAClB,sBAAsB;IACtB,MAAM;IACN,OAAO;IACP,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,cAAc;EAChB;;EAEA;IACE,eAAe;EACjB;EACA;IACE,aAAa;IACb,WAAW;IACX,yBAAyB;EAC3B;EACA;IACE,WAAW;IACX,YAAY;IACZ,mBAAmB;EACrB;;EAEA;;IAEE,eAAe;IACf,iBAAiB;EACnB;AACF",
          sourcesContent: [
            "@media only screen and (max-width: 899px) {\n  .lightbox {\n    position: absolute;\n    background-color: #fff;\n    top: 0;\n    left: 0;\n    z-index: 1000;\n    padding: 40px;\n    box-sizing: border-box;\n    overflow: auto;\n  }\n\n  .fixed {\n    position: fixed;\n  }\n  .lightbox .close {\n    display: flex;\n    width: 100%;\n    justify-content: flex-end;\n  }\n  .lightbox .close img {\n    width: 30px;\n    height: 30px;\n    padding: 0 0 20px 0;\n  }\n\n  .buttonBlue,\n  .cancelButton {\n    font-size: 12px;\n    padding: 8px 15px;\n  }\n}\n",
          ],
          sourceRoot: "",
        },
      ]),
        (e.Z = r);
    },
    1679: function (n, e, t) {
      var o = t(7537),
        i = t.n(o),
        A = t(3645),
        r = t.n(A),
        l = t(5033),
        a = t(731),
        s = t(6908),
        c = r()(i());
      c.i(l.Z),
        c.i(a.Z),
        c.i(s.Z),
        c.push([
          n.id,
          "\n",
          "",
          { version: 3, sources: [], names: [], mappings: "", sourceRoot: "" },
        ]),
        (e.Z = c);
    },
    5033: function (n, e, t) {
      var o = t(7537),
        i = t.n(o),
        A = t(3645),
        r = t.n(A)()(i());
      r.push([
        n.id,
        '.lightbox {\n  position: absolute;\n  background: #fff;\n  color: #242124;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 1000;\n  background-color: #fff;\n  padding: 50px;\n  box-sizing: border-box;\n  overflow: auto;\n}\n.lightbox h2 {\n  margin-bottom: 0;\n}\n.lightbox .byLine {\n  margin: 0;\n}\n.lightbox .content {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  justify-content: flex-start;\n  width: 100%;\n}\n.lightbox .content p {\n  font-family: "Lato", sans-serif;\n  font-size: 14px;\n  color: #242124;\n  margin: 10px 0 30px 0;\n  max-width: 500px;\n}\n\n.fixed {\n  position: fixed;\n}\n\n.lightbox .close {\n  display: flex;\n  width: 100%;\n  justify-content: flex-end;\n}\n\n.lightbox .close img {\n  width: 30px;\n  height: 30px;\n}\n\n.lightbox .buttonRow {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: flex-start;\n  margin-top: 50px;\n}\n\n.lightbox .container {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */\n}\n\n/* Then style the iframe to fit in the container div with full height and width */\n.lightbox .responsive-iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n}\n.lightbox .formRow {\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: flex-start;\n  align-items: flex-start;\n  margin: 10px 0;\n}\n.lightbox .formRow label {\n  font-family: lato, sans-serif;\n  font-size: 14px;\n  font-weight: bold;\n}\n.lightbox .formRow input,\n.lightbox .formRow textarea {\n  border: 1px solid #999;\n  width: 300px;\n  padding: 5px;\n  box-sizing: border-box;\n}\n.lightbox .formRow select {\n  -webkit-appearance: none;\n  border: 1px solid #999;\n  padding: 5px 40px 5px 5px;\n  background-color: #fff;\n  font-size: 14px;\n  background-image: url("/img/arrowDown.png");\n  background-position: top 8px right 6px;\n  background-repeat: no-repeat;\n  background-size: 12px;\n  margin: 0;\n  border-radius: 0;\n}\n.lightbox .requiredTag {\n  white-space: nowrap;\n  font-size: 11px;\n  padding: 5px;\n  margin-right: 5px;\n  font-weight: bold;\n}\n.lightbox .requiredTag:after {\n  content: "\\BB";\n}\n.lightbox .addBookForm .requiredFields {\n  margin-top: 20px;\n  font-size: 12px;\n}\n.lightbox .addBookForm .buttonBar {\n  display: flex;\n  width: 100%;\n  max-width: 600px;\n  justify-content: flex-end;\n}\n.lightbox .addBookForm .formRow.required input,\n.lightbox .addBookForm .formRow.required textarea {\n  border-color: #bd3913;\n}\n.lightbox .addBookForm.formRow.required label {\n  color: #bd3913;\n}\n.lightbox .alertMessage {\n  margin: 20px 0;\n  color: #900;\n  background-color: #f8e8e8;\n  border: 1px solid #bd3913;\n  padding: 0 10px;\n  width: 300px;\n  box-sizing: border-box;\n  font-size: 14px;\n  font-family: lato, sans-serif;\n}\n.lightbox .alertMessage p {\n  margin: 10px 5px;\n}\n#usersBookList {\n  font-family: lato, sans-serif;\n  font-size: 14px;\n}\n\n#usersBookList tr th,\n#usersBookList tr td {\n  text-align: left;\n  padding-right: 20px;\n}\n\n#usersBookList td:nth-child(3) {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n#usersBookList tr th {\n  padding-bottom: 10px;\n}\n#usersBookList tr td {\n  padding-bottom: 10px;\n}\n',
        "",
        {
          version: 3,
          sources: [
            "webpack://./src/Components/LightboxTemplates/css/styles.css",
          ],
          names: [],
          mappings:
            "AAAA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,cAAc;EACd,YAAY;EACZ,MAAM;EACN,OAAO;EACP,aAAa;EACb,sBAAsB;EACtB,aAAa;EACb,sBAAsB;EACtB,cAAc;AAChB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,SAAS;AACX;AACA;EACE,aAAa;EACb,iBAAiB;EACjB,mBAAmB;EACnB,2BAA2B;EAC3B,WAAW;AACb;AACA;EACE,+BAA+B;EAC/B,eAAe;EACf,cAAc;EACd,qBAAqB;EACrB,gBAAgB;AAClB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,WAAW;EACX,yBAAyB;AAC3B;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,yBAAyB;EACzB,uBAAuB;EACvB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,WAAW;EACX,mBAAmB,EAAE,gDAAgD;AACvE;;AAEA,iFAAiF;AACjF;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,SAAS;EACT,QAAQ;EACR,WAAW;EACX,YAAY;AACd;AACA;EACE,aAAa;EACb,wBAAwB;EACxB,2BAA2B;EAC3B,uBAAuB;EACvB,cAAc;AAChB;AACA;EACE,6BAA6B;EAC7B,eAAe;EACf,iBAAiB;AACnB;AACA;;EAEE,sBAAsB;EACtB,YAAY;EACZ,YAAY;EACZ,sBAAsB;AACxB;AACA;EACE,wBAAwB;EACxB,sBAAsB;EACtB,yBAAyB;EACzB,sBAAsB;EACtB,eAAe;EACf,2CAA2C;EAC3C,sCAAsC;EACtC,4BAA4B;EAC5B,qBAAqB;EACrB,SAAS;EACT,gBAAgB;AAClB;AACA;EACE,mBAAmB;EACnB,eAAe;EACf,YAAY;EACZ,iBAAiB;EACjB,iBAAiB;AACnB;AACA;EACE,cAAc;AAChB;AACA;EACE,gBAAgB;EAChB,eAAe;AACjB;AACA;EACE,aAAa;EACb,WAAW;EACX,gBAAgB;EAChB,yBAAyB;AAC3B;AACA;;EAEE,qBAAqB;AACvB;AACA;EACE,cAAc;AAChB;AACA;EACE,cAAc;EACd,WAAW;EACX,yBAAyB;EACzB,yBAAyB;EACzB,eAAe;EACf,YAAY;EACZ,sBAAsB;EACtB,eAAe;EACf,6BAA6B;AAC/B;AACA;EACE,gBAAgB;AAClB;AACA;EACE,6BAA6B;EAC7B,eAAe;AACjB;;AAEA;;EAEE,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,oBAAoB;AACtB;AACA;EACE,oBAAoB;AACtB",
          sourcesContent: [
            '.lightbox {\n  position: absolute;\n  background: #fff;\n  color: #242124;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 1000;\n  background-color: #fff;\n  padding: 50px;\n  box-sizing: border-box;\n  overflow: auto;\n}\n.lightbox h2 {\n  margin-bottom: 0;\n}\n.lightbox .byLine {\n  margin: 0;\n}\n.lightbox .content {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  justify-content: flex-start;\n  width: 100%;\n}\n.lightbox .content p {\n  font-family: "Lato", sans-serif;\n  font-size: 14px;\n  color: #242124;\n  margin: 10px 0 30px 0;\n  max-width: 500px;\n}\n\n.fixed {\n  position: fixed;\n}\n\n.lightbox .close {\n  display: flex;\n  width: 100%;\n  justify-content: flex-end;\n}\n\n.lightbox .close img {\n  width: 30px;\n  height: 30px;\n}\n\n.lightbox .buttonRow {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: flex-start;\n  margin-top: 50px;\n}\n\n.lightbox .container {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */\n}\n\n/* Then style the iframe to fit in the container div with full height and width */\n.lightbox .responsive-iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n}\n.lightbox .formRow {\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: flex-start;\n  align-items: flex-start;\n  margin: 10px 0;\n}\n.lightbox .formRow label {\n  font-family: lato, sans-serif;\n  font-size: 14px;\n  font-weight: bold;\n}\n.lightbox .formRow input,\n.lightbox .formRow textarea {\n  border: 1px solid #999;\n  width: 300px;\n  padding: 5px;\n  box-sizing: border-box;\n}\n.lightbox .formRow select {\n  -webkit-appearance: none;\n  border: 1px solid #999;\n  padding: 5px 40px 5px 5px;\n  background-color: #fff;\n  font-size: 14px;\n  background-image: url("/img/arrowDown.png");\n  background-position: top 8px right 6px;\n  background-repeat: no-repeat;\n  background-size: 12px;\n  margin: 0;\n  border-radius: 0;\n}\n.lightbox .requiredTag {\n  white-space: nowrap;\n  font-size: 11px;\n  padding: 5px;\n  margin-right: 5px;\n  font-weight: bold;\n}\n.lightbox .requiredTag:after {\n  content: "\\BB";\n}\n.lightbox .addBookForm .requiredFields {\n  margin-top: 20px;\n  font-size: 12px;\n}\n.lightbox .addBookForm .buttonBar {\n  display: flex;\n  width: 100%;\n  max-width: 600px;\n  justify-content: flex-end;\n}\n.lightbox .addBookForm .formRow.required input,\n.lightbox .addBookForm .formRow.required textarea {\n  border-color: #bd3913;\n}\n.lightbox .addBookForm.formRow.required label {\n  color: #bd3913;\n}\n.lightbox .alertMessage {\n  margin: 20px 0;\n  color: #900;\n  background-color: #f8e8e8;\n  border: 1px solid #bd3913;\n  padding: 0 10px;\n  width: 300px;\n  box-sizing: border-box;\n  font-size: 14px;\n  font-family: lato, sans-serif;\n}\n.lightbox .alertMessage p {\n  margin: 10px 5px;\n}\n#usersBookList {\n  font-family: lato, sans-serif;\n  font-size: 14px;\n}\n\n#usersBookList tr th,\n#usersBookList tr td {\n  text-align: left;\n  padding-right: 20px;\n}\n\n#usersBookList td:nth-child(3) {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n#usersBookList tr th {\n  padding-bottom: 10px;\n}\n#usersBookList tr td {\n  padding-bottom: 10px;\n}\n',
          ],
          sourceRoot: "",
        },
      ]),
        (e.Z = r);
    },
  },
]);
//# sourceMappingURL=chunk-139.0a5e1ec58f03ca808023.js.map
