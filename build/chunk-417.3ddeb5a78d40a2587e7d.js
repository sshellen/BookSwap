"use strict";
(self.webpackChunkBookSwap = self.webpackChunkBookSwap || []).push([
  [417],
  {
    2302: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return x;
          },
        });
      var o = n(5671),
        r = n(3144),
        a = n(136),
        i = n(6215),
        s = n(1120),
        c = n(7294),
        u = n(7382),
        l = n(4557),
        p = n(4585),
        d = n(3379),
        f = n.n(d),
        m = n(7795),
        h = n.n(m),
        b = n(569),
        g = n.n(b),
        y = n(3565),
        A = n.n(y),
        w = n(9216),
        v = n.n(w),
        E = n(4589),
        k = n.n(E),
        C = n(8820),
        Z = {};
      (Z.styleTagTransform = k()),
        (Z.setAttributes = A()),
        (Z.insert = g().bind(null, "head")),
        (Z.domAPI = h()),
        (Z.insertStyleElement = v());
      f()(C.Z, Z), C.Z && C.Z.locals && C.Z.locals;
      function P(e) {
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
            o = (0, s.Z)(e);
          if (t) {
            var r = (0, s.Z)(this).constructor;
            n = Reflect.construct(o, arguments, r);
          } else n = o.apply(this, arguments);
          return (0, i.Z)(this, n);
        };
      }
      var x = (function (e) {
        (0, a.Z)(n, e);
        var t = P(n);
        function n(e) {
          return (0, o.Z)(this, n), t.call(this, e);
        }
        return (
          (0, r.Z)(n, [
            {
              key: "render",
              value: function () {
                return c.createElement(
                  "div",
                  { id: "aboutPage" },
                  c.createElement(l.Z, null),
                  c.createElement(
                    "div",
                    { className: "main" },
                    c.createElement(
                      "div",
                      { className: "hero" },
                      c.createElement(
                        "div",
                        { className: "pageTitle" },
                        c.createElement("img", { src: "/svg/aboutTitle.svg" })
                      ),
                      c.createElement("img", { src: "/img/about.png" })
                    ),
                    c.createElement(
                      "div",
                      { className: "section" },
                      c.createElement(
                        "div",
                        { className: "wrapper" },
                        c.createElement("h2", null, "What is Book Swap?"),
                        c.createElement(
                          "div",
                          { className: "twoCol" },
                          c.createElement(
                            "p",
                            null,
                            "There comes a time in a book worms life when they are faced with the challenge of what to do with their crowded book shelves. The options tend to be buying more book shelves, selling their books to a used book store, or donating books to a library or NPO.",
                            c.createElement("br", null),
                            c.createElement("br", null),
                            "Book Swap gives avid readers another option in controlling their book flow. Readers can keep their book shelves in equilibrium by swapping their books for others. It gives readers a chance to inspire others with their fav books that are just collecting dust."
                          ),
                          c.createElement("div", { className: "gutter" }, " "),
                          c.createElement("img", {
                            src: "/img/trade.png",
                            width: "100%",
                          })
                        ),
                        c.createElement("div", { className: "divider" }),
                        c.createElement("h2", null, "How it works."),
                        c.createElement(
                          "div",
                          { className: "twoCol" },
                          c.createElement(
                            "p",
                            null,
                            "Once you've signed up, add books to your",
                            " ",
                            c.createElement(
                              u.Link,
                              { to: "/myBooks" },
                              "book list"
                            ),
                            " and",
                            " ",
                            c.createElement(
                              u.Link,
                              { to: "/books" },
                              "find books"
                            ),
                            " that interest you.",
                            c.createElement("br", null),
                            c.createElement("br", null),
                            "Show interest in other users' books by checking the Interested box for the respective book. Book Swap will show you your",
                            " ",
                            c.createElement(
                              u.Link,
                              { to: "/matches" },
                              "matches"
                            ),
                            " if there is a mutual interest between users' books."
                          ),
                          c.createElement("div", { className: "gutter" }, " "),
                          c.createElement(
                            "p",
                            null,
                            "When you confirm interest in swapping with someone else, they will be notified of your interest via email. Likewise, you may receive messages from interested parties wanting to swap with you. You can also keep track of your message threads through your Book Swap account."
                          )
                        )
                      )
                    ),
                    c.createElement(p.Z, null)
                  )
                );
              },
            },
          ]),
          n
        );
      })(c.Component);
    },
    2576: function (e, t, n) {
      var o = n(7537),
        r = n.n(o),
        a = n(3645),
        i = n.n(a)()(r());
      i.push([
        e.id,
        "@media only screen and (max-width: 599px) {\n}\n",
        "",
        {
          version: 3,
          sources: ["webpack://./src/Pages/About/css/600Max.css"],
          names: [],
          mappings: "AAAA;AACA",
          sourcesContent: ["@media only screen and (max-width: 599px) {\n}\n"],
          sourceRoot: "",
        },
      ]),
        (t.Z = i);
    },
    4255: function (e, t, n) {
      var o = n(7537),
        r = n.n(o),
        a = n(3645),
        i = n.n(a)()(r());
      i.push([
        e.id,
        "@media only screen and (max-width: 899px) {\n  #aboutPage .twoCol p,\n  #aboutPage .twoCol img {\n    width: 50%;\n    font-size: 13px;\n  }\n\n  #aboutPage .pageTitle img {\n    height: 30px;\n  }\n  #aboutPage .divider {\n    margin: 30px 0;\n    border-top: 1px dashed #999999;\n  }\n}\n",
        "",
        {
          version: 3,
          sources: ["webpack://./src/Pages/About/css/900Max.css"],
          names: [],
          mappings:
            "AAAA;EACE;;IAEE,UAAU;IACV,eAAe;EACjB;;EAEA;IACE,YAAY;EACd;EACA;IACE,cAAc;IACd,8BAA8B;EAChC;AACF",
          sourcesContent: [
            "@media only screen and (max-width: 899px) {\n  #aboutPage .twoCol p,\n  #aboutPage .twoCol img {\n    width: 50%;\n    font-size: 13px;\n  }\n\n  #aboutPage .pageTitle img {\n    height: 30px;\n  }\n  #aboutPage .divider {\n    margin: 30px 0;\n    border-top: 1px dashed #999999;\n  }\n}\n",
          ],
          sourceRoot: "",
        },
      ]),
        (t.Z = i);
    },
    8820: function (e, t, n) {
      var o = n(7537),
        r = n.n(o),
        a = n(3645),
        i = n.n(a),
        s = n(8406),
        c = n(4255),
        u = n(2576),
        l = i()(r());
      l.i(s.Z),
        l.i(c.Z),
        l.i(u.Z),
        l.push([
          e.id,
          "\n",
          "",
          { version: 3, sources: [], names: [], mappings: "", sourceRoot: "" },
        ]),
        (t.Z = l);
    },
    8406: function (e, t, n) {
      var o = n(7537),
        r = n.n(o),
        a = n(3645),
        i = n.n(a)()(r());
      i.push([
        e.id,
        "#aboutPage .twoCol p,\n#aboutPage .twoCol img {\n  width: 50%;\n}\n\n#aboutPage .pageTitle img {\n  height: 50px;\n}\n#aboutPage .divider {\n  margin: 30px 0;\n  border-top: 1px dashed #999999;\n}\n",
        "",
        {
          version: 3,
          sources: ["webpack://./src/Pages/About/css/styles.css"],
          names: [],
          mappings:
            "AAAA;;EAEE,UAAU;AACZ;;AAEA;EACE,YAAY;AACd;AACA;EACE,cAAc;EACd,8BAA8B;AAChC",
          sourcesContent: [
            "#aboutPage .twoCol p,\n#aboutPage .twoCol img {\n  width: 50%;\n}\n\n#aboutPage .pageTitle img {\n  height: 50px;\n}\n#aboutPage .divider {\n  margin: 30px 0;\n  border-top: 1px dashed #999999;\n}\n",
          ],
          sourceRoot: "",
        },
      ]),
        (t.Z = i);
    },
    7326: function (e, t, n) {
      function o(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      n.d(t, {
        Z: function () {
          return o;
        },
      });
    },
    5671: function (e, t, n) {
      function o(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      n.d(t, {
        Z: function () {
          return o;
        },
      });
    },
    3144: function (e, t, n) {
      function o(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o);
        }
      }
      function r(e, t, n) {
        return (
          t && o(e.prototype, t),
          n && o(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    1120: function (e, t, n) {
      function o(e) {
        return (
          (o = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          o(e)
        );
      }
      n.d(t, {
        Z: function () {
          return o;
        },
      });
    },
    136: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var o = n(9611);
      function r(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t && (0, o.Z)(e, t);
      }
    },
    6215: function (e, t, n) {
      function o(e) {
        return (
          (o =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          o(e)
        );
      }
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var r = n(7326);
      function a(e, t) {
        if (t && ("object" === o(t) || "function" == typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return (0, r.Z)(e);
      }
    },
    885: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var o = n(181);
      function r(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var o,
                r,
                a = [],
                i = !0,
                s = !1;
              try {
                for (
                  n = n.call(e);
                  !(i = (o = n.next()).done) &&
                  (a.push(o.value), !t || a.length !== t);
                  i = !0
                );
              } catch (c) {
                (s = !0), (r = c);
              } finally {
                try {
                  i || null == n.return || n.return();
                } finally {
                  if (s) throw r;
                }
              }
              return a;
            }
          })(e, t) ||
          (0, o.Z)(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
    },
  },
]);
//# sourceMappingURL=chunk-417.3ddeb5a78d40a2587e7d.js.map
