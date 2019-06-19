(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    166: function(e) {
      e.exports = {
        init: {
          chat: {
            statuses: ["Chatting with Ai", "Ai is thinking", "Typing"],
            status: 0,
            questions: [{ index: 0, from: 0, content: "hi there." }],
            answers: [],
            remote: !1
          }
        },
        greetings: [
          { content: "hi there ," },
          { content: "hi," },
          { contet: "what is your name," },
          {
            references: { work: "/" },
            content:
              "I am a bot built by Tim, for introducing him,I am a bot built by Tim, for introducing him,I am a bot built by Tim, for introducing him, <a href=/> a</a>"
          }
        ],
        about_bot: [
          {
            content:
              "I am a bot designed to introduce Tim to you. You can chat with me by typing or you can go through to know about him."
          },
          {
            content:
              "By the way, I am not so smart to chat with human, but I'll do my best."
          }
        ],
        others: [
          [{ index: 4, from: 0, references: { work: "/" }, content: "..." }]
        ]
      };
    },
    312: function(e, t) {
      function n(e) {
        var t = new Error("Cannot find module '" + e + "'");
        throw ((t.code = "MODULE_NOT_FOUND"), t);
      }
      (n.keys = function() {
        return [];
      }),
        (n.resolve = n),
        (e.exports = n),
        (n.id = 312);
    },
    319: function(e, t) {},
    351: function(e, t, n) {
      e.exports = n(823);
    },
    360: function(e, t, n) {},
    361: function(e, t, n) {},
    499: function(e, t) {},
    501: function(e, t) {},
    536: function(e, t) {},
    538: function(e, t) {},
    572: function(e, t) {
      function n(e) {
        var t = new Error("Cannot find module '" + e + "'");
        throw ((t.code = "MODULE_NOT_FOUND"), t);
      }
      (n.keys = function() {
        return [];
      }),
        (n.resolve = n),
        (e.exports = n),
        (n.id = 572);
    },
    579: function(e, t) {
      function n(e) {
        var t = new Error("Cannot find module '" + e + "'");
        throw ((t.code = "MODULE_NOT_FOUND"), t);
      }
      (n.keys = function() {
        return [];
      }),
        (n.resolve = n),
        (e.exports = n),
        (n.id = 579);
    },
    810: function(e, t) {},
    811: function(e, t) {},
    823: function(e, t, n) {
      "use strict";
      n.r(t);
      var a = n(0),
        r = n.n(a),
        o = n(31),
        i = n.n(o),
        s = n(62),
        c = n(50),
        u = n(325),
        l = { showBar: !1, title: "Tim's Portfolio", size: "medium" },
        m = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : l,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case "HIDE_SIDEBAR":
              return Object.assign({}, e, { showBar: !1 });
            case "SHOW_SIDEBAR":
              return Object.assign({}, e, { showBar: !0 });
            case "TOGGLE_SIDEBAR":
              return Object.assign({}, e, { showBar: !t.showing });
            case "DEVICE_SIZE":
              return Object.assign({}, e, { size: t.size });
            default:
              return e;
          }
        },
        f = n(108),
        d = n(166).init.chat,
        g = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : d,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case "UPDATE_CHATTING":
              return Object.assign({}, e, { status: t.status });
            case "QUESTION":
              return Object.assign({}, e, {
                questions: [].concat(Object(f.a)(e.questions), [
                  { id: e.questions.length, from: t.from, content: t.question }
                ])
              });
            case "ANSWER":
              return Object.assign({}, e, {
                questions: [].concat(
                  Object(f.a)(e.questions.slice(0, e.questions.length - 1)),
                  [{ id: e.questions.length, from: t.from, content: t.answer }]
                ),
                status: 0
              });
            case "ANSWERING":
              return Object.assign({}, e, {
                questions: [].concat(Object(f.a)(e.questions), [
                  { id: e.questions.length, from: 0, waiting: !0, content: "" }
                ]),
                status: 1
              });
            default:
              return e;
          }
        },
        h = Object(c.c)({ root: m, chat: g }),
        p = ("object" === typeof window &&
          window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
          ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
              trace: !0,
              traceLimit: 20
            })
          : c.d)(Object(c.a)(u.a)),
        b = Object(c.e)(h, p),
        E = (n(360), n(156)),
        w = n(837),
        y = n(834),
        O = n(349),
        v = n(840),
        k = (n(361), n(326)),
        j = n(327),
        _ = n(346),
        x = n(328),
        S = n(347),
        I = n(838),
        z = n(833),
        q = n(835),
        T = n(839),
        D = n(836),
        A = n(15),
        N = n.n(A),
        C = n(105),
        U = n(363).NlpManager,
        B = n(166),
        R = new U({ languages: ["en"] }),
        M = (function() {
          var e = Object(C.a)(
            N.a.mark(function e() {
              return N.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), R.train();
                    case 2:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function() {
            return e.apply(this, arguments);
          };
        })(),
        L = (function() {
          var e = Object(C.a)(
            N.a.mark(function e(t) {
              var n;
              return N.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), M();
                    case 2:
                      return (e.next = 4), R.process("en", t);
                    case 4:
                      return (
                        (n = e.sent), console.log(n), e.abrupt("return", n)
                      );
                    case 7:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function(t) {
            return e.apply(this, arguments);
          };
        })(),
        W = function(e) {
          return new Promise(function(t, n) {
            setTimeout(
              function() {
                try {
                  var a =
                    B.greetings[Math.floor(Math.random() * B.greetings.length)];
                  console.log("resolve" + e), t(a.content);
                } catch (r) {
                  console.log("reject" + e), n(r);
                }
              },
              (function() {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 3e3;
                return Math.random() * e + 1;
              })(3800)
            );
          });
        },
        G = n(329),
        P = n.n(G),
        H = function(e) {
          var t = e.type,
            n = e.color;
          return r.a.createElement(P.a, {
            type: t,
            color: n,
            height: 40,
            width: 80
          });
        },
        V = function(e) {
          var t = 0 === e.item.from;
          return e.item.waiting
            ? r.a.createElement(H, { type: "bubbles" })
            : r.a.createElement(
                O.a,
                {
                  align: t ? "start" : "end",
                  alignContent: t ? "start" : "end",
                  alignSelf: t ? "start" : "end",
                  animation: t ? "fadeIn" : "slideLeft",
                  background: t ? { color: "dark-1" } : { color: "neutral-3" },
                  flex: !1,
                  justify: t ? "start" : "end",
                  margin: { top: "xsmall", left: "", right: "" },
                  pad: "small",
                  round: t ? { corner: "right" } : { corner: "left" }
                },
                r.a.createElement(I.a, { size: "small" }, e.item.content)
              );
        },
        X = (function(e) {
          function t(e) {
            var n;
            return (
              Object(k.a)(this, t),
              ((n = Object(_.a)(this, Object(x.a)(t).call(this, e))).state = {
                question: "",
                loading: !1
              }),
              n
            );
          }
          return (
            Object(S.a)(t, e),
            Object(j.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this,
                    t = function(t) {
                      e.props.ask(t),
                        e.props.answering(),
                        W(t).then(function(t) {
                          e.props.answer(t), e.setState({ question: "" });
                        }),
                        L(t).then(function(t) {
                          e.props.answer(t.srcAnswer),
                            e.setState({ question: "" });
                        });
                    };
                  return r.a.createElement(
                    O.a,
                    {
                      background: this.props.background,
                      justify: "start",
                      margin: { top: "xsmall", left: "large", right: "large" },
                      align: "start",
                      alignContent: "start",
                      alignSelf: "center",
                      fill: "horizontal",
                      height: "750px",
                      gap: "small",
                      round: !0,
                      elevation: "medium"
                    },
                    r.a.createElement(
                      O.a,
                      {
                        direction: "row",
                        align: "center",
                        alignContent: "center",
                        justify: "center",
                        background: "light-1",
                        pad: {
                          left: "medium",
                          right: "left",
                          vertical: "small"
                        },
                        elevation: "medium",
                        round: { size: "medium", corner: "top" },
                        fill: "horizontal"
                      },
                      r.a.createElement(
                        I.a,
                        { size: "xsmall" },
                        this.props.statuses[this.props.status]
                      )
                    ),
                    r.a.createElement(
                      O.a,
                      { fill: !0, overflow: "auto" },
                      r.a.createElement(
                        z.a,
                        { items: this.props.questions },
                        function(e, t) {
                          return r.a.createElement(V, { item: e, key: t });
                        }
                      )
                    ),
                    r.a.createElement(
                      O.a,
                      {
                        direction: "row",
                        align: "end",
                        alignContent: "start",
                        background: "light-2",
                        pad: {
                          left:
                            "small" === this.props.size ||
                            "xsmall" === this.props.size
                              ? "medium"
                              : "small",
                          right:
                            "small" === this.props.size ||
                            "xsmall" === this.props.size
                              ? "medium"
                              : "small",
                          top:
                            "small" === this.props.size ||
                            "xsmall" === this.props.size
                              ? "medium"
                              : "small",
                          bottom: "xsmall"
                        },
                        elevation: "medium",
                        round: { size: "medium", corner: "bottom" },
                        fill: "horizontal"
                      },
                      r.a.createElement(q.a, {
                        primary: !0,
                        value: this.state.question,
                        onChange: function(t) {
                          e.setState({ question: t.target.value }),
                            e.props.typing();
                        },
                        onKeyDown: function(n) {
                          "Enter" === n.key &&
                            1 !== e.props.status &&
                            t(e.state.question);
                        }
                      }),
                      r.a.createElement(
                        T.a,
                        {
                          disabled: 1 === this.props.status,
                          icon: r.a.createElement(D.a, { size: "small" }),
                          primary: !0,
                          type: "button",
                          margin: { left: "small" },
                          onClick: function() {
                            t(e.state.question);
                          },
                          reverse: !1
                        },
                        '""'
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(r.a.Component),
        F = Object(s.b)(
          function(e, t) {
            return {
              status: e.chat.status,
              statuses: e.chat.statuses,
              questions: e.chat.questions,
              remote: e.chat.remote,
              size: e.root.size,
              background: t.background
            };
          },
          function(e) {
            return {
              ask: function(t) {
                e(
                  (function(e) {
                    return {
                      type: "QUESTION",
                      question: e,
                      from:
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 1
                    };
                  })(t)
                );
              },
              answer: function(t) {
                e(
                  (function(e) {
                    return {
                      type: "ANSWER",
                      answer: e,
                      from:
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 0
                    };
                  })(t)
                );
              },
              answering: function() {
                e({ type: "ANSWERING" });
              },
              typing: function() {
                e({ type: "UPDATE_CHATTING", status: 2 });
              }
            };
          }
        )(X),
        J = n(49),
        Q = function(e) {
          return r.a.createElement(
            v.a,
            {
              rows: ["small", "medium"],
              columns: ["medium", "large"],
              gap: "small",
              areas: [
                { name: "header", start: [0, 0], end: [1, 0] },
                { name: "nav", start: [0, 1], end: [0, 1] },
                { name: "main", start: [1, 1], end: [1, 1] }
              ]
            },
            r.a.createElement(O.a, { gridArea: "header", background: "brand" }),
            r.a.createElement(O.a, { gridArea: "nav", background: "light-5" }),
            r.a.createElement(O.a, { gridArea: "main", background: "light-2" })
          );
        },
        Z = function(e) {
          return r.a.createElement(O.a, e, r.a.createElement(Q, null));
        },
        K = function(e) {
          return r.a.createElement(O.a, e, "about Ai bot");
        },
        Y = function(e) {
          return r.a.createElement(
            J.c,
            null,
            r.a.createElement(J.a, { path: "/home", component: Z }),
            r.a.createElement(J.a, { path: "/ai", component: K })
          );
        },
        $ = {
          global: {
            colors: { brand: "#228BE6", "chat-background": "#00739D" },
            font: { family: "Roboto", size: "14px", height: "20px" }
          }
        },
        ee = Object(s.b)(null, function(e) {
          return {
            updateDeviceSize: function(t) {
              e(
                (function(e) {
                  return { type: "DEVICE_SIZE", size: e };
                })(t)
              );
            }
          };
        })(function(e) {
          return r.a.createElement(
            E.a,
            null,
            r.a.createElement(
              w.a,
              { theme: $, full: !0 },
              r.a.createElement(y.a.Consumer, null, function(t) {
                return (
                  console.log(t),
                  e.updateDeviceSize(t),
                  r.a.createElement(
                    O.a,
                    {
                      fill: !0,
                      background: { color: "neutral-3", opacity: !0 }
                    },
                    r.a.createElement(
                      v.a,
                      {
                        fill: !0,
                        areas: [
                          { name: "c1", start: [0, 0], end: [0, 0] },
                          { name: "c2", start: [1, 0], end: [1, 0] },
                          { name: "c3", start: [2, 0], end: [2, 0] }
                        ],
                        columns: ["flex", "medium", "flex"],
                        rows: ["flex"],
                        gap: "small"
                      },
                      r.a.createElement(O.a, {
                        gridArea: "c1",
                        background: ""
                      }),
                      r.a.createElement(
                        O.a,
                        {
                          background: { color: "", opacity: !0 },
                          gridArea: "c3",
                          justify: "center"
                        },
                        r.a.createElement(Y, null)
                      ),
                      r.a.createElement(
                        O.a,
                        {
                          flex: !0,
                          align: "center",
                          alignContent: "center",
                          alignSelf: "center",
                          animation: "zoomIn",
                          background: {},
                          gridArea: "c2",
                          width: "medium",
                          justify: "center"
                        },
                        r.a.createElement(F, {
                          background: { color: "chat-background", opacity: !0 }
                        })
                      )
                    )
                  )
                );
              })
            )
          );
        });
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      i.a.render(
        r.a.createElement(s.a, { store: b }, r.a.createElement(ee, null)),
        document.getElementById("root")
      ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready.then(function(e) {
            e.unregister();
          });
    }
  },
  [[351, 1, 2]]
]);
//# sourceMappingURL=main.12e8b8db.chunk.js.map
