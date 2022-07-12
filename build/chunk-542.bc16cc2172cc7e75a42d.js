"use strict";
(self.webpackChunkBookSwap = self.webpackChunkBookSwap || []).push([
  [542],
  {
    8542: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return N;
          },
        });
      var o = t(2982),
        r = t(5671),
        a = t(3144),
        i = t(7326),
        s = t(136),
        A = t(6215),
        l = t(1120),
        c = t(4942),
        p = t(7294),
        m = t(8216),
        f = t(3379),
        u = t.n(f),
        d = t(7795),
        g = t.n(d),
        E = t(569),
        h = t.n(E),
        B = t(3565),
        C = t.n(B),
        x = t(9216),
        w = t.n(x),
        b = t(4589),
        y = t.n(b),
        P = t(5511),
        v = {};
      (v.styleTagTransform = y()),
        (v.setAttributes = C()),
        (v.insert = h().bind(null, "head")),
        (v.domAPI = g()),
        (v.insertStyleElement = w());
      u()(P.Z, v), P.Z && P.Z.locals && P.Z.locals;
      function R(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          n &&
            (o = o.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, o);
        }
        return t;
      }
      function Z(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? R(Object(t), !0).forEach(function (n) {
                (0, c.Z)(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : R(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      function j(e) {
        var n = (function () {
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
          var t,
            o = (0, l.Z)(e);
          if (n) {
            var r = (0, l.Z)(this).constructor;
            t = Reflect.construct(o, arguments, r);
          } else t = o.apply(this, arguments);
          return (0, A.Z)(this, t);
        };
      }
      var k = (function (e) {
          (0, s.Z)(t, e);
          var n = j(t);
          function t(e) {
            var a;
            return (
              (0, r.Z)(this, t),
              (a = n.call(this, e)),
              (0, c.Z)((0, i.Z)(a), "clearErrors", function (e) {
                Array.prototype.slice.call(e).map(function (e) {
                  e.parentNode.classList.remove("required"),
                    e.parentNode.getElementsByClassName("requiredTag")[0] &&
                      e.parentNode
                        .getElementsByClassName("requiredTag")[0]
                        .remove();
                });
              }),
              (0, c.Z)((0, i.Z)(a), "onSubmit", function (e) {
                e.preventDefault();
                var n = e.target.elements;
                a.clearErrors(n);
                var t = [
                    "name",
                    "email",
                    "username",
                    "password",
                    "passwordCopy",
                  ],
                  o = !1,
                  r = !0;
                Array.prototype.slice.call(n).map(function (e) {
                  if (t.includes(e.name) && "" === e.value) {
                    e.parentNode.classList.add("required");
                    var n = document.createElement("span");
                    (n.className = "requiredTag"),
                      n.appendChild(document.createTextNode("REQUIRED FIELD ")),
                      e.parentNode.getElementsByTagName("label")[0].prepend(n),
                      (o = !0);
                  }
                }),
                  n.password.value !== n.passwordCopy.value &&
                    ((r = !1), a.setState({ passwordMatch: !1 })),
                  !1 === o && !0 === r
                    ? a.submitProfile(e.target)
                    : a.setState(
                        { submitSuccess: !o, passwordMatch: r },
                        function () {
                          document
                            .getElementById("alertMessage")
                            .focus({ preventScroll: !1 });
                        }
                      );
              }),
              (0, c.Z)((0, i.Z)(a), "submitProfile", function (e) {
                var n = new FormData(e),
                  t = (0, o.Z)(n).reduce(function (e, n) {
                    if ("passwordCopy" !== n[0]) {
                      var t = (e[n[0]] = n[1]);
                      e = Z(Z({}, e), {}, { obj: t });
                    }
                    return e;
                  }, {});
                a.props.updateProfile(t), a.props.history.push("/myBooks");
              }),
              (a.state = { submitSuccess: null, passwordMatch: !0 }),
              a
            );
          }
          return (
            (0, a.Z)(t, [
              {
                key: "render",
                value: function () {
                  var e = this;
                  return p.createElement(
                    "div",
                    { id: "homePage", className: "section" },
                    p.createElement("img", {
                      src: "/svg/logo.svg",
                      className: "logo",
                    }),
                    p.createElement(
                      "h3",
                      { className: "tagline" },
                      "Keep your bookshelf in order. Trade instead of save."
                    ),
                    p.createElement("div", { className: "dashedLine wrapper" }),
                    p.createElement(
                      "div",
                      { className: "twoCol" },
                      p.createElement("h4", null, "Sign In"),
                      p.createElement(
                        "form",
                        {
                          className: "profileForm",
                          onSubmit: function (n) {
                            return e.props.history.push("/myBooks"), !1;
                          },
                        },
                        p.createElement(
                          "div",
                          { className: "formRow" },
                          p.createElement(
                            "label",
                            { htmlFor: "username" },
                            "Username"
                          ),
                          p.createElement("input", {
                            type: "text",
                            id: "username",
                            name: "username",
                            defaultValue: "",
                          })
                        ),
                        p.createElement(
                          "div",
                          { className: "formRow" },
                          p.createElement(
                            "label",
                            { htmlFor: "password" },
                            "Password"
                          ),
                          p.createElement("input", {
                            type: "password",
                            id: "password",
                            name: "password",
                            defaultValue: "",
                          })
                        ),
                        p.createElement(
                          "div",
                          { className: "buttonRow" },
                          p.createElement(
                            "button",
                            { className: "buttonBlue", type: "submit" },
                            "SUBMIT"
                          )
                        )
                      )
                    ),
                    p.createElement("div", { className: "dashedLine wrapper" }),
                    p.createElement(
                      "div",
                      {
                        className:
                          !1 === this.state.submitSuccess ||
                          !1 === this.state.passwordMatch
                            ? "alertMessage"
                            : "",
                        id: "alertMessage",
                        tabIndex: 0,
                      },
                      !1 === this.state.passwordMatch &&
                        p.createElement(
                          "p",
                          null,
                          "Your passwords don't match."
                        ),
                      !1 === this.state.submitSuccess &&
                        p.createElement(
                          p.Fragment,
                          null,
                          p.createElement(
                            "p",
                            null,
                            "There are required fields on this page that have not been filled out."
                          ),
                          p.createElement("p", null, "Please see errors below.")
                        )
                    ),
                    p.createElement(
                      "div",
                      { className: "twoCol" },
                      p.createElement("h4", null, "Sign Up"),
                      p.createElement(
                        "form",
                        {
                          className: "profileForm",
                          onSubmit: function (n) {
                            return e.onSubmit(n), !1;
                          },
                        },
                        p.createElement(
                          "div",
                          { className: "formRow" },
                          p.createElement(
                            "label",
                            { htmlFor: "name" },
                            "Name",
                            p.createElement("sup", null, "*")
                          ),
                          p.createElement("input", {
                            type: "text",
                            id: "name",
                            name: "name",
                            defaultValue: "",
                          })
                        ),
                        p.createElement(
                          "div",
                          { className: "formRow" },
                          p.createElement(
                            "label",
                            { htmlFor: "email" },
                            "Email",
                            p.createElement("sup", null, "*")
                          ),
                          p.createElement("input", {
                            type: "text",
                            id: "email",
                            name: "email",
                            defaultValue: "",
                          })
                        ),
                        p.createElement(
                          "div",
                          { className: "formRow" },
                          p.createElement(
                            "label",
                            { htmlFor: "username" },
                            "Username",
                            p.createElement("sup", null, "*")
                          ),
                          p.createElement("input", {
                            type: "text",
                            id: "username",
                            name: "username",
                            defaultValue: "",
                          })
                        ),
                        p.createElement(
                          "div",
                          { className: "formRow" },
                          p.createElement(
                            "label",
                            { htmlFor: "password" },
                            "Password",
                            p.createElement("sup", null, "*")
                          ),
                          p.createElement("input", {
                            type: "password",
                            id: "password",
                            name: "password",
                            defaultValue: "",
                          })
                        ),
                        p.createElement(
                          "div",
                          { className: "formRow" },
                          p.createElement(
                            "label",
                            { htmlFor: "passwordCopy" },
                            "Re-Type Password",
                            p.createElement("sup", null, "*")
                          ),
                          p.createElement("input", {
                            type: "password",
                            id: "passwordCopy",
                            name: "passwordCopy",
                            defaultValue: "",
                          })
                        ),
                        p.createElement(
                          "div",
                          { className: "requiredFields" },
                          p.createElement("sup", null, "*"),
                          "Required fields"
                        ),
                        p.createElement(
                          "div",
                          { className: "buttonRow" },
                          p.createElement(
                            "button",
                            { className: "buttonBlue", type: "submit" },
                            "SUBMIT"
                          )
                        )
                      )
                    )
                  );
                },
              },
            ]),
            t
          );
        })(p.Component),
        N = (0, m.$j)("", function (e) {
          return {
            updateProfile: function (n) {
              e({ type: "UPDATE_PROFILE", profile: n });
            },
          };
        })(k);
    },
    2024: function (e, n, t) {
      var o = t(7537),
        r = t.n(o),
        a = t(3645),
        i = t.n(a)()(r());
      i.push([
        e.id,
        "@media only screen and (max-width: 599px) {\n}\n",
        "",
        {
          version: 3,
          sources: ["webpack://./src/Pages/Home/css/600Max.css"],
          names: [],
          mappings: "AAAA;AACA",
          sourcesContent: ["@media only screen and (max-width: 599px) {\n}\n"],
          sourceRoot: "",
        },
      ]),
        (n.Z = i);
    },
    6297: function (e, n, t) {
      var o = t(7537),
        r = t.n(o),
        a = t(3645),
        i = t.n(a)()(r());
      i.push([
        e.id,
        "@media only screen and (max-width: 899px) {\n}\n",
        "",
        {
          version: 3,
          sources: ["webpack://./src/Pages/Home/css/900Max.css"],
          names: [],
          mappings: "AAAA;AACA",
          sourcesContent: ["@media only screen and (max-width: 899px) {\n}\n"],
          sourceRoot: "",
        },
      ]),
        (n.Z = i);
    },
    5511: function (e, n, t) {
      var o = t(7537),
        r = t.n(o),
        a = t(3645),
        i = t.n(a),
        s = t(801),
        A = t(6297),
        l = t(2024),
        c = i()(r());
      c.i(s.Z),
        c.i(A.Z),
        c.i(l.Z),
        c.push([
          e.id,
          "\n",
          "",
          { version: 3, sources: [], names: [], mappings: "", sourceRoot: "" },
        ]),
        (n.Z = c);
    },
    801: function (e, n, t) {
      var o = t(7537),
        r = t.n(o),
        a = t(3645),
        i = t.n(a)()(r());
      i.push([
        e.id,
        '#homePage {\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  vh: 100%;\n  background-color: #00aeef;\n}\n#homePage .twoCol {\n  width: 400px;\n}\n#homePage .twoCol h4 {\n  color: #f5f5f5;\n  width: 100px;\n  margin: 10px 0;\n}\n#homePage .logo {\n  margin-top: 40px;\n}\nh3.tagline {\n  font-family: lato, sans-serif;\n  font-size: 18px;\n  color: #f5f5f5;\n  font-weight: 900;\n  margin: 10px 0 20px 0;\n}\n#homePage .content {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  justify-content: flex-start;\n  width: 100%;\n}\n#homePage .content p {\n  font-family: "Lato", sans-serif;\n  font-size: 14px;\n  color: #242124;\n  margin: 10px 0 30px 0;\n  max-width: 500px;\n}\n#homePage .buttonRow {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: flex-start;\n  margin-top: 20px;\n}\n#homePage .section {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: center;\n  position: relative;\n  overflow: hidden;\n  margin-top: 60px;\n  width: 100%;\n}\n#homePage form {\n  width: 300px;\n  box-sizing: border-box;\n}\n#homePage .formRow {\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: flex-start;\n  align-items: flex-start;\n  margin: 10px 0;\n}\n#homePage .formRow label {\n  font-family: lato, sans-serif;\n  color: #f5f5f5;\n  font-size: 12px;\n  font-weight: bold;\n}\n#homePage .formRow input,\n#homePage .formRow textarea {\n  border: none;\n  width: 300px;\n  padding: 5px;\n  box-sizing: border-box;\n}\n#homePage .formRow select {\n  -webkit-appearance: none;\n  border: 1px solid #999;\n  padding: 5px 40px 5px 5px;\n  background-color: #fff;\n  font-size: 14px;\n  background-image: url("/img/arrowDown.png");\n  background-position: top 8px right 6px;\n  background-repeat: no-repeat;\n  background-size: 12px;\n  margin: 0;\n  border-radius: 0;\n}\n#homePage .requiredTag {\n  white-space: nowrap;\n  font-size: 11px;\n  padding: 5px;\n  margin-right: 5px;\n  font-weight: bold;\n}\n#homePage .requiredTag:after {\n  content: "\\BB";\n}\n#homePage .profileForm .requiredFields {\n  margin-top: 20px;\n  font-size: 12px;\n  color: #f5f5f5;\n}\n#homePage .profileForm .buttonBar {\n  display: flex;\n  width: 100%;\n  max-width: 600px;\n  justify-content: flex-end;\n}\n#homePage .profileForm .formRow.required input,\n#homePage .profileForm .formRow.required textarea {\n  border: none;\n}\n#homePage .profileForm .formRow.required label {\n  color: #fff;\n}\n#homePage .alertMessage {\n  margin: 20px 0;\n  color: #900;\n  background-color: #f8e8e8;\n  border: 1px solid #bd3913;\n  padding: 0 10px;\n  width: 400px;\n  box-sizing: border-box;\n  font-size: 14px;\n  font-family: lato, sans-serif;\n}\n#homePage .alertMessage p {\n  margin: 10px 5px;\n}\n#homePage .buttonBlue {\n  background-color: #f5f5f5;\n  color: #1172a3;\n  font-size: 12px;\n  padding: 8px 10px;\n}\n#homePage .dashedLine {\n  border-bottom: 1px dashed #f5f5f5;\n  height: 1px;\n  width: 400px;\n  margin: 40px 0;\n}\n',
        "",
        {
          version: 3,
          sources: ["webpack://./src/Pages/Home/css/styles.css"],
          names: [],
          mappings:
            "AAAA;EACE,aAAa;EACb,wBAAwB;EACxB,mBAAmB;EACnB,uBAAuB;EACvB,WAAW;EACX,QAAQ;EACR,yBAAyB;AAC3B;AACA;EACE,YAAY;AACd;AACA;EACE,cAAc;EACd,YAAY;EACZ,cAAc;AAChB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,6BAA6B;EAC7B,eAAe;EACf,cAAc;EACd,gBAAgB;EAChB,qBAAqB;AACvB;AACA;EACE,aAAa;EACb,iBAAiB;EACjB,mBAAmB;EACnB,2BAA2B;EAC3B,WAAW;AACb;AACA;EACE,+BAA+B;EAC/B,eAAe;EACf,cAAc;EACd,qBAAqB;EACrB,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,yBAAyB;EACzB,uBAAuB;EACvB,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,qBAAqB;EACrB,uBAAuB;EACvB,kBAAkB;EAClB,gBAAgB;EAChB,gBAAgB;EAChB,WAAW;AACb;AACA;EACE,YAAY;EACZ,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,wBAAwB;EACxB,2BAA2B;EAC3B,uBAAuB;EACvB,cAAc;AAChB;AACA;EACE,6BAA6B;EAC7B,cAAc;EACd,eAAe;EACf,iBAAiB;AACnB;AACA;;EAEE,YAAY;EACZ,YAAY;EACZ,YAAY;EACZ,sBAAsB;AACxB;AACA;EACE,wBAAwB;EACxB,sBAAsB;EACtB,yBAAyB;EACzB,sBAAsB;EACtB,eAAe;EACf,2CAA2C;EAC3C,sCAAsC;EACtC,4BAA4B;EAC5B,qBAAqB;EACrB,SAAS;EACT,gBAAgB;AAClB;AACA;EACE,mBAAmB;EACnB,eAAe;EACf,YAAY;EACZ,iBAAiB;EACjB,iBAAiB;AACnB;AACA;EACE,cAAc;AAChB;AACA;EACE,gBAAgB;EAChB,eAAe;EACf,cAAc;AAChB;AACA;EACE,aAAa;EACb,WAAW;EACX,gBAAgB;EAChB,yBAAyB;AAC3B;AACA;;EAEE,YAAY;AACd;AACA;EACE,WAAW;AACb;AACA;EACE,cAAc;EACd,WAAW;EACX,yBAAyB;EACzB,yBAAyB;EACzB,eAAe;EACf,YAAY;EACZ,sBAAsB;EACtB,eAAe;EACf,6BAA6B;AAC/B;AACA;EACE,gBAAgB;AAClB;AACA;EACE,yBAAyB;EACzB,cAAc;EACd,eAAe;EACf,iBAAiB;AACnB;AACA;EACE,iCAAiC;EACjC,WAAW;EACX,YAAY;EACZ,cAAc;AAChB",
          sourcesContent: [
            '#homePage {\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  vh: 100%;\n  background-color: #00aeef;\n}\n#homePage .twoCol {\n  width: 400px;\n}\n#homePage .twoCol h4 {\n  color: #f5f5f5;\n  width: 100px;\n  margin: 10px 0;\n}\n#homePage .logo {\n  margin-top: 40px;\n}\nh3.tagline {\n  font-family: lato, sans-serif;\n  font-size: 18px;\n  color: #f5f5f5;\n  font-weight: 900;\n  margin: 10px 0 20px 0;\n}\n#homePage .content {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  justify-content: flex-start;\n  width: 100%;\n}\n#homePage .content p {\n  font-family: "Lato", sans-serif;\n  font-size: 14px;\n  color: #242124;\n  margin: 10px 0 30px 0;\n  max-width: 500px;\n}\n#homePage .buttonRow {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: flex-start;\n  margin-top: 20px;\n}\n#homePage .section {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: center;\n  position: relative;\n  overflow: hidden;\n  margin-top: 60px;\n  width: 100%;\n}\n#homePage form {\n  width: 300px;\n  box-sizing: border-box;\n}\n#homePage .formRow {\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: flex-start;\n  align-items: flex-start;\n  margin: 10px 0;\n}\n#homePage .formRow label {\n  font-family: lato, sans-serif;\n  color: #f5f5f5;\n  font-size: 12px;\n  font-weight: bold;\n}\n#homePage .formRow input,\n#homePage .formRow textarea {\n  border: none;\n  width: 300px;\n  padding: 5px;\n  box-sizing: border-box;\n}\n#homePage .formRow select {\n  -webkit-appearance: none;\n  border: 1px solid #999;\n  padding: 5px 40px 5px 5px;\n  background-color: #fff;\n  font-size: 14px;\n  background-image: url("/img/arrowDown.png");\n  background-position: top 8px right 6px;\n  background-repeat: no-repeat;\n  background-size: 12px;\n  margin: 0;\n  border-radius: 0;\n}\n#homePage .requiredTag {\n  white-space: nowrap;\n  font-size: 11px;\n  padding: 5px;\n  margin-right: 5px;\n  font-weight: bold;\n}\n#homePage .requiredTag:after {\n  content: "\\BB";\n}\n#homePage .profileForm .requiredFields {\n  margin-top: 20px;\n  font-size: 12px;\n  color: #f5f5f5;\n}\n#homePage .profileForm .buttonBar {\n  display: flex;\n  width: 100%;\n  max-width: 600px;\n  justify-content: flex-end;\n}\n#homePage .profileForm .formRow.required input,\n#homePage .profileForm .formRow.required textarea {\n  border: none;\n}\n#homePage .profileForm .formRow.required label {\n  color: #fff;\n}\n#homePage .alertMessage {\n  margin: 20px 0;\n  color: #900;\n  background-color: #f8e8e8;\n  border: 1px solid #bd3913;\n  padding: 0 10px;\n  width: 400px;\n  box-sizing: border-box;\n  font-size: 14px;\n  font-family: lato, sans-serif;\n}\n#homePage .alertMessage p {\n  margin: 10px 5px;\n}\n#homePage .buttonBlue {\n  background-color: #f5f5f5;\n  color: #1172a3;\n  font-size: 12px;\n  padding: 8px 10px;\n}\n#homePage .dashedLine {\n  border-bottom: 1px dashed #f5f5f5;\n  height: 1px;\n  width: 400px;\n  margin: 40px 0;\n}\n',
          ],
          sourceRoot: "",
        },
      ]),
        (n.Z = i);
    },
    7326: function (e, n, t) {
      function o(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      t.d(n, {
        Z: function () {
          return o;
        },
      });
    },
    5671: function (e, n, t) {
      function o(e, n) {
        if (!(e instanceof n))
          throw new TypeError("Cannot call a class as a function");
      }
      t.d(n, {
        Z: function () {
          return o;
        },
      });
    },
    3144: function (e, n, t) {
      function o(e, n) {
        for (var t = 0; t < n.length; t++) {
          var o = n[t];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o);
        }
      }
      function r(e, n, t) {
        return (
          n && o(e.prototype, n),
          t && o(e, t),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      t.d(n, {
        Z: function () {
          return r;
        },
      });
    },
    1120: function (e, n, t) {
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
      t.d(n, {
        Z: function () {
          return o;
        },
      });
    },
    136: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return r;
        },
      });
      var o = t(9611);
      function r(e, n) {
        if ("function" != typeof n && null !== n)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(n && n.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          n && (0, o.Z)(e, n);
      }
    },
    6215: function (e, n, t) {
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
      t.d(n, {
        Z: function () {
          return a;
        },
      });
      var r = t(7326);
      function a(e, n) {
        if (n && ("object" === o(n) || "function" == typeof n)) return n;
        if (void 0 !== n)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return (0, r.Z)(e);
      }
    },
  },
]);
//# sourceMappingURL=chunk-542.bc16cc2172cc7e75a42d.js.map
