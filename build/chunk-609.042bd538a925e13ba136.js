"use strict";
(self.webpackChunkBookSwap = self.webpackChunkBookSwap || []).push([
  [609],
  {
    8921: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return F;
          },
        });
      var r = t(2982),
        o = t(5671),
        i = t(3144),
        a = t(7326),
        l = t(136),
        A = t(6215),
        s = t(1120),
        f = t(4942),
        p = t(7294),
        c = t(8216),
        u = t(4557),
        m = t(4585),
        d = t(3379),
        g = t.n(d),
        E = t(7795),
        C = t.n(E),
        B = t(569),
        x = t.n(B),
        b = t(3565),
        h = t.n(b),
        y = t(9216),
        w = t.n(y),
        P = t(4589),
        v = t.n(P),
        R = t(7196),
        j = {};
      (j.styleTagTransform = v()),
        (j.setAttributes = h()),
        (j.insert = x().bind(null, "head")),
        (j.domAPI = C()),
        (j.insertStyleElement = w());
      g()(R.Z, j), R.Z && R.Z.locals && R.Z.locals;
      function z(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function k(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? z(Object(t), !0).forEach(function (n) {
                (0, f.Z)(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : z(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      function Z(e) {
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
            r = (0, s.Z)(e);
          if (n) {
            var o = (0, s.Z)(this).constructor;
            t = Reflect.construct(r, arguments, o);
          } else t = r.apply(this, arguments);
          return (0, A.Z)(this, t);
        };
      }
      var N = [
          "Alabama",
          "Alaska",
          "Arizona",
          "Arkansas",
          "California",
          "Colorado",
          "Connecticut",
          "Delaware",
          "Florida",
          "Georgia",
          "Hawaii",
          "Idaho",
          "Illinois",
          "Indiana",
          "Iowa",
          "Kansas",
          "Kentucky",
          "Louisiana",
          "Maine",
          "Maryland",
          "Massachusetts",
          "Michigan",
          "Minnesota",
          "Mississippi",
          "Missouri",
          "Montana",
          "Nebraska",
          "Nevada",
          "New Hampshire",
          "New Jersey",
          "New Mexico",
          "New York",
          "North Carolina",
          "North Dakota",
          "Ohio",
          "Oklahoma",
          "Oregon",
          "Pennsylvania",
          "Rhode Island",
          "South Carolina",
          "South Dakota",
          "Tennessee",
          "Texas",
          "Utah",
          "Vermont",
          "Virginia",
          "Washington",
          "West Virginia",
          "Wisconsin",
          "Wyoming",
        ],
        S = (function (e) {
          (0, l.Z)(t, e);
          var n = Z(t);
          function t(e) {
            var i;
            return (
              (0, o.Z)(this, t),
              (i = n.call(this, e)),
              (0, f.Z)((0, a.Z)(i), "clearErrors", function (e) {
                Array.prototype.slice.call(e).map(function (e) {
                  e.parentNode.classList.remove("required"),
                    e.parentNode.getElementsByClassName("requiredTag")[0] &&
                      e.parentNode
                        .getElementsByClassName("requiredTag")[0]
                        .remove();
                });
              }),
              (0, f.Z)((0, a.Z)(i), "onSubmit", function (e) {
                e.preventDefault();
                var n = e.target.elements;
                i.clearErrors(n);
                var t = ["name", "email"],
                  r = !1;
                Array.prototype.slice.call(n).map(function (e) {
                  if (t.includes(e.name) && "" === e.value) {
                    e.parentNode.classList.add("required");
                    var n = document.createElement("span");
                    (n.className = "requiredTag"),
                      n.appendChild(document.createTextNode("REQUIRED FIELD ")),
                      e.parentNode.getElementsByTagName("label")[0].prepend(n),
                      (r = !0);
                  }
                }),
                  !1 === r
                    ? i.submitProfile(e.target)
                    : i.setState({ submitSuccess: !r }, function () {
                        document
                          .getElementById("alertMessage")
                          .focus({ preventScroll: !1 });
                      });
              }),
              (0, f.Z)((0, a.Z)(i), "submitProfile", function (e) {
                var n = new FormData(e),
                  t = (0, r.Z)(n).reduce(function (e, n) {
                    var t = (e[n[0]] = n[1]);
                    return (e = k(k({}, e), {}, { obj: t }));
                  }, {});
                i.props.updateProfile(t),
                  i.setState({ submitSuccess: !0, editProfile: !1 });
              }),
              (i.state = { submitSuccess: null, editProfile: !1 }),
              i
            );
          }
          return (
            (0, i.Z)(t, [
              {
                key: "render",
                value: function () {
                  var e = this;
                  this.props.profile;
                  return p.createElement(
                    "div",
                    { id: "profilePage" },
                    p.createElement(u.Z, null),
                    p.createElement(
                      "div",
                      { className: "main" },
                      p.createElement(
                        "div",
                        { className: "hero" },
                        p.createElement(
                          "div",
                          { className: "pageTitle" },
                          p.createElement("img", {
                            src: "/svg/settingsTitle.svg",
                          })
                        ),
                        p.createElement("img", { src: "/img/profile.png" })
                      ),
                      p.createElement(
                        "div",
                        { className: "section wrapper" },
                        p.createElement(
                          "form",
                          {
                            className: "profileForm",
                            onSubmit: function (n) {
                              return e.onSubmit(n), !1;
                            },
                          },
                          p.createElement(
                            "h2",
                            null,
                            "Profile",
                            p.createElement(
                              "a",
                              {
                                href: "#",
                                onClick: function (n) {
                                  n.preventDefault(),
                                    e.setState({ editProfile: !0 });
                                },
                                className: this.state.editProfile
                                  ? "hideLink"
                                  : "",
                                width: "30px",
                              },
                              p.createElement("img", {
                                src: "/svg/edit.svg",
                                width: "20px",
                              }),
                              " ",
                              p.createElement("span", null, "EDIT")
                            )
                          ),
                          !1 === this.state.editProfile
                            ? p.createElement(
                                "table",
                                { cellPadding: 0, cellSpacing: 0 },
                                p.createElement(
                                  "thead",
                                  null,
                                  p.createElement(
                                    "tr",
                                    { className: "visuallyHidden" },
                                    p.createElement("th", null, "Name"),
                                    p.createElement("th", null, "Value")
                                  )
                                ),
                                p.createElement(
                                  "tbody",
                                  null,
                                  p.createElement(
                                    "tr",
                                    { className: "grayBG" },
                                    p.createElement("td", null, " Full Name:"),
                                    p.createElement(
                                      "td",
                                      null,
                                      this.props.profile.name
                                    )
                                  ),
                                  p.createElement(
                                    "tr",
                                    null,
                                    p.createElement("td", null, " Email:"),
                                    p.createElement(
                                      "td",
                                      null,
                                      this.props.profile.email
                                    )
                                  ),
                                  p.createElement(
                                    "tr",
                                    { className: "grayBG" },
                                    p.createElement("td", null, "City:"),
                                    p.createElement(
                                      "td",
                                      null,
                                      this.props.profile.city
                                    )
                                  ),
                                  p.createElement(
                                    "tr",
                                    { c: !0 },
                                    p.createElement("td", null, "State:"),
                                    p.createElement(
                                      "td",
                                      null,
                                      this.props.profile.state
                                    )
                                  )
                                )
                              )
                            : p.createElement(
                                p.Fragment,
                                null,
                                p.createElement(
                                  "div",
                                  {
                                    className:
                                      !1 === this.state.submitSuccess
                                        ? "alertMessage"
                                        : "",
                                    id: "alertMessage",
                                    tabIndex: 0,
                                  },
                                  !1 === this.state.submitSuccess &&
                                    p.createElement(
                                      p.Fragment,
                                      null,
                                      p.createElement(
                                        "p",
                                        null,
                                        "There are required fields on this page that have not been filled out."
                                      ),
                                      p.createElement(
                                        "p",
                                        null,
                                        "Please see errors below."
                                      )
                                    )
                                ),
                                p.createElement(
                                  "div",
                                  { className: "formRow" },
                                  p.createElement(
                                    "label",
                                    { htmlFor: "name" },
                                    "Full Name",
                                    p.createElement("sup", null, "*")
                                  ),
                                  p.createElement("input", {
                                    type: "text",
                                    id: "name",
                                    name: "name",
                                    defaultValue: this.props.profile.name,
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
                                    defaultValue: this.props.profile.email,
                                  })
                                ),
                                p.createElement(
                                  "div",
                                  { className: "formRow" },
                                  p.createElement(
                                    "label",
                                    { htmlFor: "city" },
                                    "City"
                                  ),
                                  p.createElement("input", {
                                    type: "text",
                                    id: "city",
                                    name: "city",
                                    defaultValue: this.props.profile.city,
                                  })
                                ),
                                p.createElement(
                                  "div",
                                  { className: "formRow" },
                                  p.createElement(
                                    "label",
                                    { htmlFor: "state" },
                                    "State"
                                  ),
                                  p.createElement(
                                    "select",
                                    {
                                      type: "text",
                                      id: "state",
                                      name: "state",
                                      defaultValue: this.props.profile.state,
                                    },
                                    N.map(function (n) {
                                      return p.createElement(
                                        "option",
                                        {
                                          value: n,
                                          selected: e.props.profile.state === n,
                                        },
                                        n
                                      );
                                    })
                                  )
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
                                    {
                                      className: "cancelButton",
                                      type: "cancel",
                                      onClick: function () {
                                        return e.setState({ editProfile: !1 });
                                      },
                                    },
                                    "CANCEL"
                                  ),
                                  p.createElement(
                                    "button",
                                    { className: "buttonBlue", type: "submit" },
                                    "SUBMIT"
                                  )
                                )
                              )
                        )
                      ),
                      p.createElement(m.Z, null)
                    )
                  );
                },
              },
            ]),
            t
          );
        })(p.Component),
        F = (0, c.$j)(
          function (e) {
            return { profile: e.profile };
          },
          function (e) {
            return {
              updateProfile: function (n) {
                e({ type: "UPDATE_PROFILE", profile: n });
              },
            };
          }
        )(S);
    },
    7663: function (e, n, t) {
      var r = t(7537),
        o = t.n(r),
        i = t(3645),
        a = t.n(i)()(o());
      a.push([
        e.id,
        "@media only screen and (max-width: 599px) {\n}\n",
        "",
        {
          version: 3,
          sources: ["webpack://./src/Pages/Profile/css/600Max.css"],
          names: [],
          mappings: "AAAA;AACA",
          sourcesContent: ["@media only screen and (max-width: 599px) {\n}\n"],
          sourceRoot: "",
        },
      ]),
        (n.Z = a);
    },
    2260: function (e, n, t) {
      var r = t(7537),
        o = t.n(r),
        i = t(3645),
        a = t.n(i)()(o());
      a.push([
        e.id,
        "@media only screen and (max-width: 899px) {\n  #profilePage .pageTitle img {\n    height: 30px;\n  }\n  #profilePage table {\n    width: 100%;\n    font-size: 13px;\n  }\n\n  #profilePage .content p {\n    font-size: 13px;\n  }\n\n  #profilePage form {\n    width: 100%;\n    box-sizing: border-box;\n  }\n\n  #profilePage .formRow label {\n    font-size: 13px;\n  }\n  #profilePage .formRow input,\n  #profilePage .formRow select {\n    width: 100%;\n  }\n  #profilePage .formRow select {\n    font-size: 13px;\n  }\n\n  #profilePage .profileForm .requiredFields {\n    font-size: 12px;\n  }\n  #profilePage .profileForm .buttonBar {\n    width: 100%;\n  }\n\n  #profilePage .alertMessage {\n    width: 100%;\n  }\n\n  #profilePage h2 a {\n    font-size: 13px;\n  }\n  .buttonBlue,\n  .cancelButton {\n    font-size: 12px;\n\n    padding: 8px 15px;\n  }\n}\n",
        "",
        {
          version: 3,
          sources: ["webpack://./src/Pages/Profile/css/900Max.css"],
          names: [],
          mappings:
            "AAAA;EACE;IACE,YAAY;EACd;EACA;IACE,WAAW;IACX,eAAe;EACjB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,WAAW;IACX,sBAAsB;EACxB;;EAEA;IACE,eAAe;EACjB;EACA;;IAEE,WAAW;EACb;EACA;IACE,eAAe;EACjB;;EAEA;IACE,eAAe;EACjB;EACA;IACE,WAAW;EACb;;EAEA;IACE,WAAW;EACb;;EAEA;IACE,eAAe;EACjB;EACA;;IAEE,eAAe;;IAEf,iBAAiB;EACnB;AACF",
          sourcesContent: [
            "@media only screen and (max-width: 899px) {\n  #profilePage .pageTitle img {\n    height: 30px;\n  }\n  #profilePage table {\n    width: 100%;\n    font-size: 13px;\n  }\n\n  #profilePage .content p {\n    font-size: 13px;\n  }\n\n  #profilePage form {\n    width: 100%;\n    box-sizing: border-box;\n  }\n\n  #profilePage .formRow label {\n    font-size: 13px;\n  }\n  #profilePage .formRow input,\n  #profilePage .formRow select {\n    width: 100%;\n  }\n  #profilePage .formRow select {\n    font-size: 13px;\n  }\n\n  #profilePage .profileForm .requiredFields {\n    font-size: 12px;\n  }\n  #profilePage .profileForm .buttonBar {\n    width: 100%;\n  }\n\n  #profilePage .alertMessage {\n    width: 100%;\n  }\n\n  #profilePage h2 a {\n    font-size: 13px;\n  }\n  .buttonBlue,\n  .cancelButton {\n    font-size: 12px;\n\n    padding: 8px 15px;\n  }\n}\n",
          ],
          sourceRoot: "",
        },
      ]),
        (n.Z = a);
    },
    7196: function (e, n, t) {
      var r = t(7537),
        o = t.n(r),
        i = t(3645),
        a = t.n(i),
        l = t(7436),
        A = t(2260),
        s = t(7663),
        f = a()(o());
      f.i(l.Z),
        f.i(A.Z),
        f.i(s.Z),
        f.push([
          e.id,
          "\n",
          "",
          { version: 3, sources: [], names: [], mappings: "", sourceRoot: "" },
        ]),
        (n.Z = f);
    },
    7436: function (e, n, t) {
      var r = t(7537),
        o = t.n(r),
        i = t(3645),
        a = t.n(i)()(o());
      a.push([
        e.id,
        '#profilePage .content {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  justify-content: flex-start;\n  width: 100%;\n}\n#profilePage table {\n  width: 100%;\n  font-family: lato, sans-serif;\n  font-size: 14px;\n  border: 1px solid #eee;\n}\n#profilePage table tr td {\n  padding: 10px;\n}\n#profilePage .pageTitle img {\n  height: 50px;\n}\n#profilePage .content p {\n  font-family: "Lato", sans-serif;\n  font-size: 14px;\n  color: #242124;\n  margin: 10px 0 30px 0;\n  max-width: 500px;\n}\n#profilePage .buttonRow {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: flex-start;\n  margin-top: 50px;\n}\n#profilePage .section {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: center;\n  position: relative;\n  overflow: hidden;\n  margin-top: 60px;\n  width: 100%;\n}\n#profilePage form {\n  width: 500px;\n  box-sizing: border-box;\n}\n#profilePage .formRow {\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: flex-start;\n  align-items: flex-start;\n  margin: 10px 0;\n}\n#profilePage .formRow label {\n  font-family: lato, sans-serif;\n  color: #333;\n  font-size: 14px;\n}\n#profilePage .formRow input,\n#profilePage .formRow select {\n  border: 1px solid #ccc;\n  width: 500px;\n  padding: 5px;\n  box-sizing: border-box;\n}\n#profilePage .formRow select {\n  -webkit-appearance: none;\n\n  padding: 5px 40px 5px 5px;\n  background-color: #fff;\n  font-size: 14px;\n  background-image: url("/img/arrowDown.png");\n  background-position: top 8px right 6px;\n  background-repeat: no-repeat;\n  background-size: 12px;\n  margin: 0;\n  border-radius: 0;\n}\n#profilePage .requiredTag {\n  white-space: nowrap;\n  font-size: 11px;\n  padding: 5px;\n  margin-right: 5px;\n  font-weight: bold;\n}\n#profilePage .requiredTag:after {\n  content: "\\BB";\n}\n#profilePage .profileForm .requiredFields {\n  margin-top: 20px;\n  font-size: 12px;\n}\n#profilePage .profileForm .buttonBar {\n  display: flex;\n  width: 100%;\n  max-width: 600px;\n  justify-content: flex-end;\n}\n#profilePage .profileForm .formRow.required input,\n#profilePage .profileForm .formRow.required textarea {\n  border-color: #bd3913;\n}\n#profilePage .profileForm .formRow.required label {\n  color: #bd3913;\n}\n#profilePage .alertMessage {\n  margin: 20px 0;\n  color: #900;\n  background-color: #f8e8e8;\n  border: 1px solid #bd3913;\n  padding: 0 10px;\n  width: 500px;\n  box-sizing: border-box;\n  font-size: 14px;\n  font-family: lato, sans-serif;\n}\n#profilePage .alertMessage p {\n  margin: 10px 5px;\n}\n#profilePage h2 {\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n}\n#profilePage h2 a {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n  font-size: 14px;\n  margin-left: 20px;\n}\n#profilePage h2 a img {\n  margin-right: 5px;\n}\n#profilePage h2 a.hideLink {\n  display: none;\n}\n#profilePage table {\n  margin: 0;\n}\n#profilePage table tr td {\n  margin: 0;\n  vertical-align: center;\n}\n#profilePage table tr.grayBG td {\n  background-color: #f5f5f5;\n}\n',
        "",
        {
          version: 3,
          sources: ["webpack://./src/Pages/Profile/css/styles.css"],
          names: [],
          mappings:
            "AAAA;EACE,aAAa;EACb,iBAAiB;EACjB,mBAAmB;EACnB,2BAA2B;EAC3B,WAAW;AACb;AACA;EACE,WAAW;EACX,6BAA6B;EAC7B,eAAe;EACf,sBAAsB;AACxB;AACA;EACE,aAAa;AACf;AACA;EACE,YAAY;AACd;AACA;EACE,+BAA+B;EAC/B,eAAe;EACf,cAAc;EACd,qBAAqB;EACrB,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,yBAAyB;EACzB,uBAAuB;EACvB,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,qBAAqB;EACrB,uBAAuB;EACvB,kBAAkB;EAClB,gBAAgB;EAChB,gBAAgB;EAChB,WAAW;AACb;AACA;EACE,YAAY;EACZ,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,wBAAwB;EACxB,2BAA2B;EAC3B,uBAAuB;EACvB,cAAc;AAChB;AACA;EACE,6BAA6B;EAC7B,WAAW;EACX,eAAe;AACjB;AACA;;EAEE,sBAAsB;EACtB,YAAY;EACZ,YAAY;EACZ,sBAAsB;AACxB;AACA;EACE,wBAAwB;;EAExB,yBAAyB;EACzB,sBAAsB;EACtB,eAAe;EACf,2CAA2C;EAC3C,sCAAsC;EACtC,4BAA4B;EAC5B,qBAAqB;EACrB,SAAS;EACT,gBAAgB;AAClB;AACA;EACE,mBAAmB;EACnB,eAAe;EACf,YAAY;EACZ,iBAAiB;EACjB,iBAAiB;AACnB;AACA;EACE,cAAc;AAChB;AACA;EACE,gBAAgB;EAChB,eAAe;AACjB;AACA;EACE,aAAa;EACb,WAAW;EACX,gBAAgB;EAChB,yBAAyB;AAC3B;AACA;;EAEE,qBAAqB;AACvB;AACA;EACE,cAAc;AAChB;AACA;EACE,cAAc;EACd,WAAW;EACX,yBAAyB;EACzB,yBAAyB;EACzB,eAAe;EACf,YAAY;EACZ,sBAAsB;EACtB,eAAe;EACf,6BAA6B;AAC/B;AACA;EACE,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,qBAAqB;EACrB,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,2BAA2B;EAC3B,eAAe;EACf,iBAAiB;AACnB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,aAAa;AACf;AACA;EACE,SAAS;AACX;AACA;EACE,SAAS;EACT,sBAAsB;AACxB;AACA;EACE,yBAAyB;AAC3B",
          sourcesContent: [
            '#profilePage .content {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  justify-content: flex-start;\n  width: 100%;\n}\n#profilePage table {\n  width: 100%;\n  font-family: lato, sans-serif;\n  font-size: 14px;\n  border: 1px solid #eee;\n}\n#profilePage table tr td {\n  padding: 10px;\n}\n#profilePage .pageTitle img {\n  height: 50px;\n}\n#profilePage .content p {\n  font-family: "Lato", sans-serif;\n  font-size: 14px;\n  color: #242124;\n  margin: 10px 0 30px 0;\n  max-width: 500px;\n}\n#profilePage .buttonRow {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: flex-start;\n  margin-top: 50px;\n}\n#profilePage .section {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: center;\n  position: relative;\n  overflow: hidden;\n  margin-top: 60px;\n  width: 100%;\n}\n#profilePage form {\n  width: 500px;\n  box-sizing: border-box;\n}\n#profilePage .formRow {\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: flex-start;\n  align-items: flex-start;\n  margin: 10px 0;\n}\n#profilePage .formRow label {\n  font-family: lato, sans-serif;\n  color: #333;\n  font-size: 14px;\n}\n#profilePage .formRow input,\n#profilePage .formRow select {\n  border: 1px solid #ccc;\n  width: 500px;\n  padding: 5px;\n  box-sizing: border-box;\n}\n#profilePage .formRow select {\n  -webkit-appearance: none;\n\n  padding: 5px 40px 5px 5px;\n  background-color: #fff;\n  font-size: 14px;\n  background-image: url("/img/arrowDown.png");\n  background-position: top 8px right 6px;\n  background-repeat: no-repeat;\n  background-size: 12px;\n  margin: 0;\n  border-radius: 0;\n}\n#profilePage .requiredTag {\n  white-space: nowrap;\n  font-size: 11px;\n  padding: 5px;\n  margin-right: 5px;\n  font-weight: bold;\n}\n#profilePage .requiredTag:after {\n  content: "\\BB";\n}\n#profilePage .profileForm .requiredFields {\n  margin-top: 20px;\n  font-size: 12px;\n}\n#profilePage .profileForm .buttonBar {\n  display: flex;\n  width: 100%;\n  max-width: 600px;\n  justify-content: flex-end;\n}\n#profilePage .profileForm .formRow.required input,\n#profilePage .profileForm .formRow.required textarea {\n  border-color: #bd3913;\n}\n#profilePage .profileForm .formRow.required label {\n  color: #bd3913;\n}\n#profilePage .alertMessage {\n  margin: 20px 0;\n  color: #900;\n  background-color: #f8e8e8;\n  border: 1px solid #bd3913;\n  padding: 0 10px;\n  width: 500px;\n  box-sizing: border-box;\n  font-size: 14px;\n  font-family: lato, sans-serif;\n}\n#profilePage .alertMessage p {\n  margin: 10px 5px;\n}\n#profilePage h2 {\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n}\n#profilePage h2 a {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n  font-size: 14px;\n  margin-left: 20px;\n}\n#profilePage h2 a img {\n  margin-right: 5px;\n}\n#profilePage h2 a.hideLink {\n  display: none;\n}\n#profilePage table {\n  margin: 0;\n}\n#profilePage table tr td {\n  margin: 0;\n  vertical-align: center;\n}\n#profilePage table tr.grayBG td {\n  background-color: #f5f5f5;\n}\n',
          ],
          sourceRoot: "",
        },
      ]),
        (n.Z = a);
    },
    7326: function (e, n, t) {
      function r(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      t.d(n, {
        Z: function () {
          return r;
        },
      });
    },
    5671: function (e, n, t) {
      function r(e, n) {
        if (!(e instanceof n))
          throw new TypeError("Cannot call a class as a function");
      }
      t.d(n, {
        Z: function () {
          return r;
        },
      });
    },
    3144: function (e, n, t) {
      function r(e, n) {
        for (var t = 0; t < n.length; t++) {
          var r = n[t];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function o(e, n, t) {
        return (
          n && r(e.prototype, n),
          t && r(e, t),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      t.d(n, {
        Z: function () {
          return o;
        },
      });
    },
    1120: function (e, n, t) {
      function r(e) {
        return (
          (r = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          r(e)
        );
      }
      t.d(n, {
        Z: function () {
          return r;
        },
      });
    },
    136: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var r = t(9611);
      function o(e, n) {
        if ("function" != typeof n && null !== n)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(n && n.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          n && (0, r.Z)(e, n);
      }
    },
    6215: function (e, n, t) {
      function r(e) {
        return (
          (r =
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
          r(e)
        );
      }
      t.d(n, {
        Z: function () {
          return i;
        },
      });
      var o = t(7326);
      function i(e, n) {
        if (n && ("object" === r(n) || "function" == typeof n)) return n;
        if (void 0 !== n)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return (0, o.Z)(e);
      }
    },
    885: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var r = t(181);
      function o(e, n) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, n) {
            var t =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != t) {
              var r,
                o,
                i = [],
                a = !0,
                l = !1;
              try {
                for (
                  t = t.call(e);
                  !(a = (r = t.next()).done) &&
                  (i.push(r.value), !n || i.length !== n);
                  a = !0
                );
              } catch (A) {
                (l = !0), (o = A);
              } finally {
                try {
                  a || null == t.return || t.return();
                } finally {
                  if (l) throw o;
                }
              }
              return i;
            }
          })(e, n) ||
          (0, r.Z)(e, n) ||
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
//# sourceMappingURL=chunk-609.042bd538a925e13ba136.js.map
