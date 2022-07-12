"use strict";
(self.webpackChunkBookSwap = self.webpackChunkBookSwap || []).push([
  [39],
  {
    4585: function (n, e, o) {
      o.d(e, {
        Z: function () {
          return B;
        },
      });
      var t = o(7294),
        l = o(7382),
        a = o(3379),
        A = o.n(a),
        r = o(7795),
        i = o.n(r),
        s = o(569),
        d = o.n(s),
        c = o(3565),
        p = o.n(c),
        u = o(9216),
        m = o.n(u),
        E = o(4589),
        f = o.n(E),
        C = o(2125),
        h = {};
      (h.styleTagTransform = f()),
        (h.setAttributes = p()),
        (h.insert = d().bind(null, "head")),
        (h.domAPI = i()),
        (h.insertStyleElement = m());
      A()(C.Z, h), C.Z && C.Z.locals && C.Z.locals;
      var B = function () {
        return t.createElement(
          "div",
          { className: "footer" },
          t.createElement(
            "div",
            { className: "links" },
            t.createElement(
              "div",
              null,
              t.createElement("h3", null, "ABOUT"),
              t.createElement(
                "ul",
                null,
                t.createElement(l.Link, { to: "/about" }, "How It Works")
              )
            ),
            t.createElement(
              "div",
              null,
              t.createElement("h3", null, "ACCOUNT"),
              t.createElement(
                "ul",
                null,
                t.createElement(
                  "li",
                  null,
                  t.createElement(l.Link, { to: "/profile" }, "Settings")
                ),
                t.createElement("li", null, "Messages")
              )
            ),
            t.createElement(
              "div",
              null,
              t.createElement("h3", null, "OPTIONS"),
              t.createElement(
                "ul",
                null,
                t.createElement(
                  "li",
                  null,
                  t.createElement(l.Link, { to: "/mybooks" }, "My Books")
                ),
                t.createElement(
                  "li",
                  null,
                  t.createElement(l.Link, { to: "/books" }, "Find Books")
                ),
                t.createElement(
                  "li",
                  null,
                  t.createElement(l.Link, { to: "/matches" }, "Matches")
                )
              )
            )
          ),
          t.createElement("div", { className: "copyright" }, "©2022 BookSwap ")
        );
      };
    },
    4557: function (n, e, o) {
      o.d(e, {
        Z: function () {
          return k;
        },
      });
      var t = o(7294),
        l = o(7382),
        a = o(885),
        A = function () {
          var n = (0, t.useState)("closed"),
            e = (0, a.Z)(n, 2),
            o = e[0],
            A = e[1];
          t.useEffect = function () {};
          return t.createElement(
            "div",
            { className: "blueBg wrapper mobile" },
            t.createElement(
              "div",
              { className: "header" },
              t.createElement(
                "div",
                { className: "logo" },
                t.createElement(
                  l.Link,
                  { to: "/myBooks" },
                  t.createElement("img", { src: "/svg/logo.svg" })
                )
              ),
              t.createElement(
                "div",
                { className: "nav" },
                t.createElement(
                  "a",
                  {
                    href: "#",
                    onClick: function () {
                      A("closed" === o ? "open" : "closed");
                    },
                    id: "closeIcon",
                  },
                  t.createElement("img", {
                    src:
                      "closed" === o
                        ? "/img/hamburgerMenu.png"
                        : "/img/whiteCloseIcon.png",
                    className: "hamburgerIcon",
                  })
                )
              )
            ),
            t.createElement(
              "div",
              { className: "open" === o ? "menu open" : "menu" },
              t.createElement(
                "ul",
                null,
                t.createElement(
                  "li",
                  null,
                  t.createElement(l.Link, { to: "/about" }, "ABOUT")
                ),
                t.createElement(
                  "li",
                  null,
                  t.createElement(l.Link, { to: "/mybooks" }, "MY BOOKS")
                ),
                t.createElement(
                  "li",
                  null,
                  t.createElement(l.Link, { to: "/books" }, "FIND BOOKS")
                ),
                t.createElement(
                  "li",
                  null,
                  t.createElement(l.Link, { to: "matches" }, "MATCHES")
                ),
                t.createElement(
                  "li",
                  null,
                  "ACCOUNT",
                  t.createElement(
                    "ul",
                    null,
                    t.createElement(
                      "li",
                      null,
                      t.createElement(
                        l.Link,
                        {
                          to: "profile",
                          onBlur: function () {
                            document.getElementById("closeIcon").focus();
                          },
                        },
                        "SETTINGS"
                      )
                    ),
                    t.createElement("li", null, "MESSAGES")
                  )
                )
              )
            )
          );
        },
        r = o(3379),
        i = o.n(r),
        s = o(7795),
        d = o.n(s),
        c = o(569),
        p = o.n(c),
        u = o(3565),
        m = o.n(u),
        E = o(9216),
        f = o.n(E),
        C = o(4589),
        h = o.n(C),
        B = o(8800),
        g = {};
      (g.styleTagTransform = h()),
        (g.setAttributes = m()),
        (g.insert = p().bind(null, "head")),
        (g.domAPI = d()),
        (g.insertStyleElement = f());
      i()(B.Z, g), B.Z && B.Z.locals && B.Z.locals;
      var k = function (n) {
        var e = !1;
        (0, t.useEffect)(function () {
          window.addEventListener("click", function (n) {
            "dropDownLink" === n.target.id && !1 === e
              ? o("accountDropDown", n)
              : a("accountDropDown");
          }),
            window.addEventListener("keyup", function (n) {
              var t = n.keyCode || n.which;
              void 0 !== t &&
                13 === t &&
                ("dropDownLink" === n.target.id && !1 === e
                  ? o("accountDropDown", n)
                  : a("accountDropDown"));
            });
        }, []);
        var o = function (n, o) {
            var t =
                window.innerWidth > 1440
                  ? Math.round((window.innerWidth - 1440) / 2)
                  : 0,
              l = o.target.getBoundingClientRect(),
              a = document.getElementById(n);
            (a.style.left = Math.round(l.x) - t - 20 + "px"),
              (a.style.top = Math.round(l.y + l.height) + "px"),
              a.classList.add("showMenu"),
              (e = !0);
          },
          a = function (n) {
            var o = document.getElementById(n);
            o && (o.classList.remove("showMenu"), (e = !1));
          };
        return t.createElement(
          "div",
          { id: "header" },
          t.createElement(
            "div",
            { className: "blueBg wrapper desktop" },
            t.createElement(
              "div",
              { className: "header" },
              t.createElement(
                "div",
                { className: "logo" },
                t.createElement(
                  l.Link,
                  { to: "/myBooks" },
                  " ",
                  t.createElement("img", { src: "/svg/logo.svg" })
                )
              ),
              t.createElement(
                "div",
                { className: "nav" },
                t.createElement(l.Link, { to: "/about" }, "ABOUT"),
                t.createElement(l.Link, { to: "/mybooks" }, "MY BOOKS"),
                t.createElement(l.Link, { to: "/books" }, "FIND BOOKS"),
                t.createElement(l.Link, { to: "/matches" }, "MY MATCHES")
              ),
              t.createElement(
                "div",
                { id: "login" },
                t.createElement("img", {
                  tabIndex: 0,
                  src: "/img/avatar.png",
                  style: { width: "40px" },
                  alt: "Click to open account settings",
                  id: "dropDownLink",
                })
              )
            ),
            t.createElement(
              "div",
              { className: "pulldownMenu", id: "accountDropDown" },
              t.createElement(
                "ul",
                null,
                t.createElement(
                  "li",
                  null,
                  t.createElement(l.Link, { to: "/profile" }, "Settings")
                ),
                t.createElement("li", null, "Messages"),
                t.createElement(
                  "li",
                  null,
                  t.createElement(l.Link, { to: "/home" }, "Sign Out")
                )
              )
            )
          ),
          t.createElement(A, null)
        );
      };
    },
    5349: function (n, e, o) {
      var t = o(7537),
        l = o.n(t),
        a = o(3645),
        A = o.n(a)()(l());
      A.push([
        n.id,
        "@media only screen and (max-width: 599px) {\n}\n",
        "",
        {
          version: 3,
          sources: ["webpack://./src/Components/Footer/css/600Max.css"],
          names: [],
          mappings: "AAAA;AACA",
          sourcesContent: ["@media only screen and (max-width: 599px) {\n}\n"],
          sourceRoot: "",
        },
      ]),
        (e.Z = A);
    },
    6573: function (n, e, o) {
      var t = o(7537),
        l = o.n(t),
        a = o(3645),
        A = o.n(a)()(l());
      A.push([
        n.id,
        "@media only screen and (max-width: 899px) {\n  .footer .links {\n    display: flex;\n    flex-wrap: wrap;\n    font-size: 12px;\n  }\n  .footer .links div {\n    margin-right: 20px;\n  }\n  .footer .links h3 {\n    margin-bottom: 10px;\n    font-size: 12px;\n  }\n  .footer .links ul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n  }\n  .footer .links ul li {\n    margin: 10px 0;\n  }\n}\n",
        "",
        {
          version: 3,
          sources: ["webpack://./src/Components/Footer/css/900Max.css"],
          names: [],
          mappings:
            "AAAA;EACE;IACE,aAAa;IACb,eAAe;IACf,eAAe;EACjB;EACA;IACE,kBAAkB;EACpB;EACA;IACE,mBAAmB;IACnB,eAAe;EACjB;EACA;IACE,gBAAgB;IAChB,SAAS;IACT,UAAU;EACZ;EACA;IACE,cAAc;EAChB;AACF",
          sourcesContent: [
            "@media only screen and (max-width: 899px) {\n  .footer .links {\n    display: flex;\n    flex-wrap: wrap;\n    font-size: 12px;\n  }\n  .footer .links div {\n    margin-right: 20px;\n  }\n  .footer .links h3 {\n    margin-bottom: 10px;\n    font-size: 12px;\n  }\n  .footer .links ul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n  }\n  .footer .links ul li {\n    margin: 10px 0;\n  }\n}\n",
          ],
          sourceRoot: "",
        },
      ]),
        (e.Z = A);
    },
    2125: function (n, e, o) {
      var t = o(7537),
        l = o.n(t),
        a = o(3645),
        A = o.n(a),
        r = o(8106),
        i = o(6573),
        s = o(5349),
        d = A()(l());
      d.i(r.Z),
        d.i(i.Z),
        d.i(s.Z),
        d.push([
          n.id,
          "\n",
          "",
          { version: 3, sources: [], names: [], mappings: "", sourceRoot: "" },
        ]),
        (e.Z = d);
    },
    8106: function (n, e, o) {
      var t = o(7537),
        l = o.n(t),
        a = o(3645),
        A = o.n(a)()(l());
      A.push([
        n.id,
        ".footer {\n  background-color: #00aeef;\n  width: 100%;\n  margin-top: 100px;\n  color: #fff;\n  padding: 30px 40px;\n  box-sizing: border-box;\n}\n.footer .links {\n  display: flex;\n  flex-flow: row;\n  align-items: flex-start;\n  justify-content: flex-start;\n  font-size: 14px;\n}\n.footer .links a,\n.footer .links a:hover,\n.footer .links a:visited,\n.footer .links a:active {\n  color: #fff;\n}\n.footer .links div {\n  margin-right: 16%;\n}\n.footer .links h3 {\n  margin-bottom: 10px;\n  font-size: 14px;\n}\n.footer .links ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.footer .links ul li {\n  margin: 10px 0;\n}\n.footer .copyright {\n  text-align: center;\n  font-size: 12px;\n  margin-top: 50px;\n}\n",
        "",
        {
          version: 3,
          sources: ["webpack://./src/Components/Footer/css/styles.css"],
          names: [],
          mappings:
            "AAAA;EACE,yBAAyB;EACzB,WAAW;EACX,iBAAiB;EACjB,WAAW;EACX,kBAAkB;EAClB,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,cAAc;EACd,uBAAuB;EACvB,2BAA2B;EAC3B,eAAe;AACjB;AACA;;;;EAIE,WAAW;AACb;AACA;EACE,iBAAiB;AACnB;AACA;EACE,mBAAmB;EACnB,eAAe;AACjB;AACA;EACE,gBAAgB;EAChB,SAAS;EACT,UAAU;AACZ;AACA;EACE,cAAc;AAChB;AACA;EACE,kBAAkB;EAClB,eAAe;EACf,gBAAgB;AAClB",
          sourcesContent: [
            ".footer {\n  background-color: #00aeef;\n  width: 100%;\n  margin-top: 100px;\n  color: #fff;\n  padding: 30px 40px;\n  box-sizing: border-box;\n}\n.footer .links {\n  display: flex;\n  flex-flow: row;\n  align-items: flex-start;\n  justify-content: flex-start;\n  font-size: 14px;\n}\n.footer .links a,\n.footer .links a:hover,\n.footer .links a:visited,\n.footer .links a:active {\n  color: #fff;\n}\n.footer .links div {\n  margin-right: 16%;\n}\n.footer .links h3 {\n  margin-bottom: 10px;\n  font-size: 14px;\n}\n.footer .links ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.footer .links ul li {\n  margin: 10px 0;\n}\n.footer .copyright {\n  text-align: center;\n  font-size: 12px;\n  margin-top: 50px;\n}\n",
          ],
          sourceRoot: "",
        },
      ]),
        (e.Z = A);
    },
    2077: function (n, e, o) {
      var t = o(7537),
        l = o.n(t),
        a = o(3645),
        A = o.n(a)()(l());
      A.push([
        n.id,
        "@media only screen and (max-width: 599px) {\n}\n",
        "",
        {
          version: 3,
          sources: ["webpack://./src/Components/Header/css/600Max.css"],
          names: [],
          mappings: "AAAA;AACA",
          sourcesContent: ["@media only screen and (max-width: 599px) {\n}\n"],
          sourceRoot: "",
        },
      ]),
        (e.Z = A);
    },
    4036: function (n, e, o) {
      var t = o(7537),
        l = o.n(t),
        a = o(3645),
        A = o.n(a)()(l());
      A.push([
        n.id,
        "@media only screen and (max-width: 899px) {\n  #header .desktop {\n    display: none;\n  }\n  #header .mobile {\n    display: block;\n  }\n\n  #header .header {\n    display: flex;\n    flex-flow: row nowrap;\n    width: 100%;\n    align-items: center;\n    padding: 10px 0 5px 0;\n  }\n\n  #header .header .logo img {\n    width: 120px;\n  }\n  #header .header .hamburgerIcon {\n    height: 15px;\n  }\n  #header .menu.open {\n    display: block;\n  }\n  #header .menu {\n    display: none;\n  }\n  #header .menu {\n    color: #f5f5f5;\n    border-top: solid 1px #f5f5f5;\n    width: 100%;\n    background-color: #00aeef;\n  }\n  #header .menu ul {\n    margin: 10px 0;\n  }\n  #header .menu a {\n    color: #f5f5f5;\n  }\n  #header .menu ul li {\n    list-style: none;\n    padding-bottom: 10px;\n    font-size: 13px;\n  }\n}\n",
        "",
        {
          version: 3,
          sources: ["webpack://./src/Components/Header/css/900Max.css"],
          names: [],
          mappings:
            "AAAA;EACE;IACE,aAAa;EACf;EACA;IACE,cAAc;EAChB;;EAEA;IACE,aAAa;IACb,qBAAqB;IACrB,WAAW;IACX,mBAAmB;IACnB,qBAAqB;EACvB;;EAEA;IACE,YAAY;EACd;EACA;IACE,YAAY;EACd;EACA;IACE,cAAc;EAChB;EACA;IACE,aAAa;EACf;EACA;IACE,cAAc;IACd,6BAA6B;IAC7B,WAAW;IACX,yBAAyB;EAC3B;EACA;IACE,cAAc;EAChB;EACA;IACE,cAAc;EAChB;EACA;IACE,gBAAgB;IAChB,oBAAoB;IACpB,eAAe;EACjB;AACF",
          sourcesContent: [
            "@media only screen and (max-width: 899px) {\n  #header .desktop {\n    display: none;\n  }\n  #header .mobile {\n    display: block;\n  }\n\n  #header .header {\n    display: flex;\n    flex-flow: row nowrap;\n    width: 100%;\n    align-items: center;\n    padding: 10px 0 5px 0;\n  }\n\n  #header .header .logo img {\n    width: 120px;\n  }\n  #header .header .hamburgerIcon {\n    height: 15px;\n  }\n  #header .menu.open {\n    display: block;\n  }\n  #header .menu {\n    display: none;\n  }\n  #header .menu {\n    color: #f5f5f5;\n    border-top: solid 1px #f5f5f5;\n    width: 100%;\n    background-color: #00aeef;\n  }\n  #header .menu ul {\n    margin: 10px 0;\n  }\n  #header .menu a {\n    color: #f5f5f5;\n  }\n  #header .menu ul li {\n    list-style: none;\n    padding-bottom: 10px;\n    font-size: 13px;\n  }\n}\n",
          ],
          sourceRoot: "",
        },
      ]),
        (e.Z = A);
    },
    8800: function (n, e, o) {
      var t = o(7537),
        l = o.n(t),
        a = o(3645),
        A = o.n(a),
        r = o(1645),
        i = o(4036),
        s = o(2077),
        d = A()(l());
      d.i(r.Z),
        d.i(i.Z),
        d.i(s.Z),
        d.push([
          n.id,
          "\n",
          "",
          { version: 3, sources: [], names: [], mappings: "", sourceRoot: "" },
        ]),
        (e.Z = d);
    },
    1645: function (n, e, o) {
      var t = o(7537),
        l = o.n(t),
        a = o(3645),
        A = o.n(a)()(l());
      A.push([
        n.id,
        '#header .mobile {\n  display: none;\n}\n#header .desktop .pulldownMenu {\n  display: none;\n  position: absolute;\n  color: #fff;\n  font-family: "Lato", sans-serif;\n  font-size: 14px;\n  margin-left: -10px;\n  padding-top: 10px;\n  z-index: 100;\n}\n#header .desktop .pulldownMenu ul {\n  background-color: #00aeef;\n  border: 1px solid #00aeef;\n  margin: 0;\n  padding: 0;\n}\n#header .header .logo img {\n  width: 200px;\n}\n#header .header {\n  display: flex;\n  flex-flow: row nowrap;\n  width: 100%;\n  align-items: flex-end;\n  padding: 10px 0 5px 0;\n}\n#header .header.wrapper {\n  background-color: #00aeef;\n}\n#header .header .nav {\n  justify-content: flex-end;\n  text-align: right;\n  margin-left: auto;\n  font-family: lato;\n}\n#header .header .nav a {\n  font-family: Lato, Helvetica, sans-serif;\n  font-size: 14px;\n  color: #fff;\n  text-decoration: none;\n  margin-right: 20px;\n}\n#header .desktop .pulldownMenu ul li {\n  margin: 0;\n  padding: 10px 10px;\n  list-style: none;\n  cursor: pointer;\n}\n#header .desktop .pulldownMenu ul li a,\n#header .desktop .pulldownMenu ul li a:visited,\n#header .desktop .pulldownMenu ul li a:active,\n#header .desktop .pulldownMenu ul li a:hover {\n  color: #fff;\n  text-decoration: none;\n}\n#header .desktop.pulldownMenu ul li:hover a,\n#header .desktop .pulldownMenu ul li:hover a:visited,\n#header .desktop .pulldownMenu ul li:hover a:active,\n#header .desktop .pulldownMenu ul li:hover a:hover {\n  color: #1172a3;\n  text-decoration: none;\n}\n\n#header .desktop .pulldownMenu ul li:hover {\n  background-color: #fff;\n  color: #1172a3;\n}\n#header .desktop .pulldownMenu.showMenu {\n  display: block;\n  z-index: 100;\n}\n',
        "",
        {
          version: 3,
          sources: ["webpack://./src/Components/Header/css/styles.css"],
          names: [],
          mappings:
            "AAAA;EACE,aAAa;AACf;AACA;EACE,aAAa;EACb,kBAAkB;EAClB,WAAW;EACX,+BAA+B;EAC/B,eAAe;EACf,kBAAkB;EAClB,iBAAiB;EACjB,YAAY;AACd;AACA;EACE,yBAAyB;EACzB,yBAAyB;EACzB,SAAS;EACT,UAAU;AACZ;AACA;EACE,YAAY;AACd;AACA;EACE,aAAa;EACb,qBAAqB;EACrB,WAAW;EACX,qBAAqB;EACrB,qBAAqB;AACvB;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,yBAAyB;EACzB,iBAAiB;EACjB,iBAAiB;EACjB,iBAAiB;AACnB;AACA;EACE,wCAAwC;EACxC,eAAe;EACf,WAAW;EACX,qBAAqB;EACrB,kBAAkB;AACpB;AACA;EACE,SAAS;EACT,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;AACjB;AACA;;;;EAIE,WAAW;EACX,qBAAqB;AACvB;AACA;;;;EAIE,cAAc;EACd,qBAAqB;AACvB;;AAEA;EACE,sBAAsB;EACtB,cAAc;AAChB;AACA;EACE,cAAc;EACd,YAAY;AACd",
          sourcesContent: [
            '#header .mobile {\n  display: none;\n}\n#header .desktop .pulldownMenu {\n  display: none;\n  position: absolute;\n  color: #fff;\n  font-family: "Lato", sans-serif;\n  font-size: 14px;\n  margin-left: -10px;\n  padding-top: 10px;\n  z-index: 100;\n}\n#header .desktop .pulldownMenu ul {\n  background-color: #00aeef;\n  border: 1px solid #00aeef;\n  margin: 0;\n  padding: 0;\n}\n#header .header .logo img {\n  width: 200px;\n}\n#header .header {\n  display: flex;\n  flex-flow: row nowrap;\n  width: 100%;\n  align-items: flex-end;\n  padding: 10px 0 5px 0;\n}\n#header .header.wrapper {\n  background-color: #00aeef;\n}\n#header .header .nav {\n  justify-content: flex-end;\n  text-align: right;\n  margin-left: auto;\n  font-family: lato;\n}\n#header .header .nav a {\n  font-family: Lato, Helvetica, sans-serif;\n  font-size: 14px;\n  color: #fff;\n  text-decoration: none;\n  margin-right: 20px;\n}\n#header .desktop .pulldownMenu ul li {\n  margin: 0;\n  padding: 10px 10px;\n  list-style: none;\n  cursor: pointer;\n}\n#header .desktop .pulldownMenu ul li a,\n#header .desktop .pulldownMenu ul li a:visited,\n#header .desktop .pulldownMenu ul li a:active,\n#header .desktop .pulldownMenu ul li a:hover {\n  color: #fff;\n  text-decoration: none;\n}\n#header .desktop.pulldownMenu ul li:hover a,\n#header .desktop .pulldownMenu ul li:hover a:visited,\n#header .desktop .pulldownMenu ul li:hover a:active,\n#header .desktop .pulldownMenu ul li:hover a:hover {\n  color: #1172a3;\n  text-decoration: none;\n}\n\n#header .desktop .pulldownMenu ul li:hover {\n  background-color: #fff;\n  color: #1172a3;\n}\n#header .desktop .pulldownMenu.showMenu {\n  display: block;\n  z-index: 100;\n}\n',
          ],
          sourceRoot: "",
        },
      ]),
        (e.Z = A);
    },
  },
]);
//# sourceMappingURL=chunk-39.9b2686aae4004869bb77.js.map
