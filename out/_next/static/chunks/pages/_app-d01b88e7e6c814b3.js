(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    6840: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return n(8969);
        },
      ]);
    },
    3991: function (e, t) {
      "use strict";
      var n, r;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          PrefetchKind: function () {
            return n;
          },
          ACTION_REFRESH: function () {
            return o;
          },
          ACTION_NAVIGATE: function () {
            return l;
          },
          ACTION_RESTORE: function () {
            return a;
          },
          ACTION_SERVER_PATCH: function () {
            return u;
          },
          ACTION_PREFETCH: function () {
            return i;
          },
          ACTION_FAST_REFRESH: function () {
            return c;
          },
          ACTION_SERVER_ACTION: function () {
            return s;
          },
        });
      let o = "refresh",
        l = "navigate",
        a = "restore",
        u = "server-patch",
        i = "prefetch",
        c = "fast-refresh",
        s = "server-action";
      ((r = n || (n = {})).AUTO = "auto"),
        (r.FULL = "full"),
        (r.TEMPORARY = "temporary"),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    1516: function (e, t, n) {
      "use strict";
      function r(e, t, n, r) {
        return !1;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getDomainLocale", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        n(2387),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    5569: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return g;
          },
        });
      let r = n(8754),
        o = r._(n(7294)),
        l = n(4532),
        a = n(3353),
        u = n(1410),
        i = n(9064),
        c = n(370),
        s = n(9955),
        f = n(4224),
        d = n(508),
        p = n(1516),
        h = n(4266),
        x = n(3991),
        m = new Set();
      function y(e, t, n, r, o, l) {
        if (!l && !(0, a.isLocalURL)(t)) return;
        if (!r.bypassPrefetchedCheck) {
          let o =
              void 0 !== r.locale
                ? r.locale
                : "locale" in e
                ? e.locale
                : void 0,
            l = t + "%" + n + "%" + o;
          if (m.has(l)) return;
          m.add(l);
        }
        let u = l ? e.prefetch(t, o) : e.prefetch(t, n, r);
        Promise.resolve(u).catch((e) => {});
      }
      function b(e) {
        return "string" == typeof e ? e : (0, u.formatUrl)(e);
      }
      let v = o.default.forwardRef(function (e, t) {
          let n, r;
          let {
            href: u,
            as: m,
            children: v,
            prefetch: g = null,
            passHref: j,
            replace: _,
            shallow: N,
            scroll: O,
            locale: E,
            onClick: C,
            onMouseEnter: P,
            onTouchStart: k,
            legacyBehavior: T = !1,
            ...M
          } = e;
          (n = v),
            T &&
              ("string" == typeof n || "number" == typeof n) &&
              (n = o.default.createElement("a", null, n));
          let R = o.default.useContext(s.RouterContext),
            A = o.default.useContext(f.AppRouterContext),
            w = null != R ? R : A,
            I = !R,
            L = !1 !== g,
            S = null === g ? x.PrefetchKind.AUTO : x.PrefetchKind.FULL,
            { href: U, as: F } = o.default.useMemo(() => {
              if (!R) {
                let e = b(u);
                return { href: e, as: m ? b(m) : e };
              }
              let [e, t] = (0, l.resolveHref)(R, u, !0);
              return { href: e, as: m ? (0, l.resolveHref)(R, m) : t || e };
            }, [R, u, m]),
            K = o.default.useRef(U),
            H = o.default.useRef(F);
          T && (r = o.default.Children.only(n));
          let D = T ? r && "object" == typeof r && r.ref : t,
            [V, X, q] = (0, d.useIntersection)({ rootMargin: "200px" }),
            z = o.default.useCallback(
              (e) => {
                (H.current !== F || K.current !== U) &&
                  (q(), (H.current = F), (K.current = U)),
                  V(e),
                  D &&
                    ("function" == typeof D
                      ? D(e)
                      : "object" == typeof D && (D.current = e));
              },
              [F, D, U, q, V],
            );
          o.default.useEffect(() => {
            w && X && L && y(w, U, F, { locale: E }, { kind: S }, I);
          }, [F, U, X, E, L, null == R ? void 0 : R.locale, w, I, S]);
          let B = {
            ref: z,
            onClick(e) {
              T || "function" != typeof C || C(e),
                T &&
                  r.props &&
                  "function" == typeof r.props.onClick &&
                  r.props.onClick(e),
                w &&
                  !e.defaultPrevented &&
                  (function (e, t, n, r, l, u, i, c, s, f) {
                    let { nodeName: d } = e.currentTarget,
                      p = "A" === d.toUpperCase();
                    if (
                      p &&
                      ((function (e) {
                        let t = e.currentTarget,
                          n = t.getAttribute("target");
                        return (
                          (n && "_self" !== n) ||
                          e.metaKey ||
                          e.ctrlKey ||
                          e.shiftKey ||
                          e.altKey ||
                          (e.nativeEvent && 2 === e.nativeEvent.which)
                        );
                      })(e) ||
                        (!s && !(0, a.isLocalURL)(n)))
                    )
                      return;
                    e.preventDefault();
                    let h = () => {
                      let e = null == i || i;
                      "beforePopState" in t
                        ? t[l ? "replace" : "push"](n, r, {
                            shallow: u,
                            locale: c,
                            scroll: e,
                          })
                        : t[l ? "replace" : "push"](r || n, {
                            forceOptimisticNavigation: !f,
                            scroll: e,
                          });
                    };
                    s ? o.default.startTransition(h) : h();
                  })(e, w, U, F, _, N, O, E, I, L);
            },
            onMouseEnter(e) {
              T || "function" != typeof P || P(e),
                T &&
                  r.props &&
                  "function" == typeof r.props.onMouseEnter &&
                  r.props.onMouseEnter(e),
                w &&
                  (L || !I) &&
                  y(
                    w,
                    U,
                    F,
                    { locale: E, priority: !0, bypassPrefetchedCheck: !0 },
                    { kind: S },
                    I,
                  );
            },
            onTouchStart(e) {
              T || "function" != typeof k || k(e),
                T &&
                  r.props &&
                  "function" == typeof r.props.onTouchStart &&
                  r.props.onTouchStart(e),
                w &&
                  (L || !I) &&
                  y(
                    w,
                    U,
                    F,
                    { locale: E, priority: !0, bypassPrefetchedCheck: !0 },
                    { kind: S },
                    I,
                  );
            },
          };
          if ((0, i.isAbsoluteUrl)(F)) B.href = F;
          else if (!T || j || ("a" === r.type && !("href" in r.props))) {
            let e = void 0 !== E ? E : null == R ? void 0 : R.locale,
              t =
                (null == R ? void 0 : R.isLocaleDomain) &&
                (0, p.getDomainLocale)(
                  F,
                  e,
                  null == R ? void 0 : R.locales,
                  null == R ? void 0 : R.domainLocales,
                );
            B.href =
              t ||
              (0, h.addBasePath)(
                (0, c.addLocale)(F, e, null == R ? void 0 : R.defaultLocale),
              );
          }
          return T
            ? o.default.cloneElement(r, B)
            : o.default.createElement("a", { ...M, ...B }, n);
        }),
        g = v;
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    508: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "useIntersection", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let r = n(7294),
        o = n(29),
        l = "function" == typeof IntersectionObserver,
        a = new Map(),
        u = [];
      function i(e) {
        let { rootRef: t, rootMargin: n, disabled: i } = e,
          c = i || !l,
          [s, f] = (0, r.useState)(!1),
          d = (0, r.useRef)(null),
          p = (0, r.useCallback)((e) => {
            d.current = e;
          }, []);
        (0, r.useEffect)(() => {
          if (l) {
            if (c || s) return;
            let e = d.current;
            if (e && e.tagName) {
              let r = (function (e, t, n) {
                let {
                  id: r,
                  observer: o,
                  elements: l,
                } = (function (e) {
                  let t;
                  let n = { root: e.root || null, margin: e.rootMargin || "" },
                    r = u.find(
                      (e) => e.root === n.root && e.margin === n.margin,
                    );
                  if (r && (t = a.get(r))) return t;
                  let o = new Map(),
                    l = new IntersectionObserver((e) => {
                      e.forEach((e) => {
                        let t = o.get(e.target),
                          n = e.isIntersecting || e.intersectionRatio > 0;
                        t && n && t(n);
                      });
                    }, e);
                  return (
                    (t = { id: n, observer: l, elements: o }),
                    u.push(n),
                    a.set(n, t),
                    t
                  );
                })(n);
                return (
                  l.set(e, t),
                  o.observe(e),
                  function () {
                    if ((l.delete(e), o.unobserve(e), 0 === l.size)) {
                      o.disconnect(), a.delete(r);
                      let e = u.findIndex(
                        (e) => e.root === r.root && e.margin === r.margin,
                      );
                      e > -1 && u.splice(e, 1);
                    }
                  }
                );
              })(e, (e) => e && f(e), {
                root: null == t ? void 0 : t.current,
                rootMargin: n,
              });
              return r;
            }
          } else if (!s) {
            let e = (0, o.requestIdleCallback)(() => f(!0));
            return () => (0, o.cancelIdleCallback)(e);
          }
        }, [c, n, t, s, d.current]);
        let h = (0, r.useCallback)(() => {
          f(!1);
        }, []);
        return [p, s, h];
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    8969: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        });
      var r = n(5893);
      n(7952);
      var o = n(9008),
        l = n.n(o),
        a = n(7294),
        u = n(1664),
        i = n.n(u),
        c = () => {
          let [e, t] = (0, a.useState)(!1);
          return (0, r.jsxs)("div", {
            className:
              "nav-container bg-gray-30 text-black p-10 flex justify-between item-top",
            children: [
              (0, r.jsx)("div", {
                className: "logo text-left font-bold",
                children: (0, r.jsx)(i(), {
                  href: "/",
                  className:
                    "text-2xl md:text-4xl hover:text-gray-400 transition duration-200",
                  children: "t-ngtn",
                }),
              }),
              (0, r.jsxs)("div", {
                className: "flex flex-col",
                children: [
                  (0, r.jsx)("div", {
                    className: "md:hidden",
                    children: (0, r.jsx)("button", {
                      onClick: () => {
                        t(!e);
                      },
                      className:
                        "text-gray-800 hover:text-gray-600 focus:text-gray-600 focus:outline-none",
                      children: (0, r.jsxs)("div", {
                        className: "space-y-2 mr-0",
                        children: [
                          (0, r.jsx)("span", {
                            className:
                              "block w-8 h-0.5 bg-gray-800 transform transition duration-1000 ".concat(
                                e ? "rotate-45 translate-y-2" : "",
                              ),
                          }),
                          (0, r.jsx)("span", {
                            className:
                              "block w-8 h-0.5 bg-gray-800 transition duration-300 ".concat(
                                e ? "opacity-0" : "",
                              ),
                          }),
                          (0, r.jsx)("span", {
                            className:
                              "block w-8 h-0.5 bg-gray-800 transform transition duration-300 ".concat(
                                e ? "-rotate-45 -translate-y-2" : "",
                              ),
                          }),
                        ],
                      }),
                    }),
                  }),
                  (0, r.jsx)("div", {
                    className: "nav-list ".concat(
                      e ? "block" : "hidden",
                      " md:block",
                    ),
                    children: (0, r.jsxs)("ul", {
                      className:
                        "flex flex-col md:flex-row justify-end text-right text-3xl text-slate-800",
                      children: [
                        (0, r.jsx)("li", {
                          className: "mr-6 mt-6 md:mt-0",
                          children: (0, r.jsx)(i(), {
                            href: "/about",
                            className:
                              "text-2xl md:text-4xl hover:text-gray-400 transition duration-200",
                            children: "about",
                          }),
                        }),
                        (0, r.jsx)("li", {
                          className: "mr-6 mt-6 md:mt-0",
                          children: (0, r.jsx)(i(), {
                            href: "/contact",
                            className:
                              "text-2xl md:text-4xl hover:text-gray-400 transition duration-200",
                            children: "contact",
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          });
        };
      function s(e) {
        let { children: t } = e;
        return (0, r.jsxs)("div", {
          className: "flex flex-col min-h-screen",
          children: [
            (0, r.jsx)(c, {}),
            (0, r.jsx)("main", {
              className: "flex-1 bg-gray-30 text-slate-800",
              children: t,
            }),
          ],
        });
      }
      function f(e) {
        let { Component: t, pageProps: n } = e;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsxs)(l(), {
              children: [
                (0, r.jsx)("title", { children: "t-ngtn home page" }),
                (0, r.jsx)("meta", {
                  name: "description",
                  content: "t-ngtn's portfolio and blog site",
                }),
                (0, r.jsx)("link", { rel: "icon", href: "/favicon.ico" }),
              ],
            }),
            (0, r.jsx)(s, { children: (0, r.jsx)(t, { ...n }) }),
          ],
        });
      }
    },
    7952: function () {},
    9008: function (e, t, n) {
      e.exports = n(2636);
    },
    1664: function (e, t, n) {
      e.exports = n(5569);
    },
  },
  function (e) {
    var t = function (t) {
      return e((e.s = t));
    };
    e.O(0, [774, 179], function () {
      return t(6840), t(6885);
    }),
      (_N_E = e.O());
  },
]);
