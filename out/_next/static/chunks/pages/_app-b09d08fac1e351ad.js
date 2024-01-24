(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    6840: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return n(6521);
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
            return l;
          },
          ACTION_NAVIGATE: function () {
            return o;
          },
          ACTION_RESTORE: function () {
            return u;
          },
          ACTION_SERVER_PATCH: function () {
            return a;
          },
          ACTION_PREFETCH: function () {
            return i;
          },
          ACTION_FAST_REFRESH: function () {
            return c;
          },
          ACTION_SERVER_ACTION: function () {
            return f;
          },
        });
      let l = "refresh",
        o = "navigate",
        u = "restore",
        a = "server-patch",
        i = "prefetch",
        c = "fast-refresh",
        f = "server-action";
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
            return _;
          },
        });
      let r = n(8754),
        l = r._(n(7294)),
        o = n(4532),
        u = n(3353),
        a = n(1410),
        i = n(9064),
        c = n(370),
        f = n(9955),
        s = n(4224),
        d = n(508),
        p = n(1516),
        h = n(4266),
        x = n(3991),
        v = new Set();
      function y(e, t, n, r, l, o) {
        if (!o && !(0, u.isLocalURL)(t)) return;
        if (!r.bypassPrefetchedCheck) {
          let l =
              void 0 !== r.locale
                ? r.locale
                : "locale" in e
                ? e.locale
                : void 0,
            o = t + "%" + n + "%" + l;
          if (v.has(o)) return;
          v.add(o);
        }
        let a = o ? e.prefetch(t, l) : e.prefetch(t, n, r);
        Promise.resolve(a).catch((e) => {});
      }
      function b(e) {
        return "string" == typeof e ? e : (0, a.formatUrl)(e);
      }
      let m = l.default.forwardRef(function (e, t) {
          let n, r;
          let {
            href: a,
            as: v,
            children: m,
            prefetch: _ = null,
            passHref: g,
            replace: j,
            shallow: O,
            scroll: E,
            locale: C,
            onClick: N,
            onMouseEnter: P,
            onTouchStart: T,
            legacyBehavior: M = !1,
            ...R
          } = e;
          (n = m),
            M &&
              ("string" == typeof n || "number" == typeof n) &&
              (n = l.default.createElement("a", null, n));
          let k = l.default.useContext(f.RouterContext),
            A = l.default.useContext(s.AppRouterContext),
            I = null != k ? k : A,
            w = !k,
            L = !1 !== _,
            S = null === _ ? x.PrefetchKind.AUTO : x.PrefetchKind.FULL,
            { href: U, as: F } = l.default.useMemo(() => {
              if (!k) {
                let e = b(a);
                return { href: e, as: v ? b(v) : e };
              }
              let [e, t] = (0, o.resolveHref)(k, a, !0);
              return { href: e, as: v ? (0, o.resolveHref)(k, v) : t || e };
            }, [k, a, v]),
            K = l.default.useRef(U),
            H = l.default.useRef(F);
          M && (r = l.default.Children.only(n));
          let D = M ? r && "object" == typeof r && r.ref : t,
            [V, X, q] = (0, d.useIntersection)({ rootMargin: "200px" }),
            z = l.default.useCallback(
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
          l.default.useEffect(() => {
            I && X && L && y(I, U, F, { locale: C }, { kind: S }, w);
          }, [F, U, X, C, L, null == k ? void 0 : k.locale, I, w, S]);
          let B = {
            ref: z,
            onClick(e) {
              M || "function" != typeof N || N(e),
                M &&
                  r.props &&
                  "function" == typeof r.props.onClick &&
                  r.props.onClick(e),
                I &&
                  !e.defaultPrevented &&
                  (function (e, t, n, r, o, a, i, c, f, s) {
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
                        (!f && !(0, u.isLocalURL)(n)))
                    )
                      return;
                    e.preventDefault();
                    let h = () => {
                      let e = null == i || i;
                      "beforePopState" in t
                        ? t[o ? "replace" : "push"](n, r, {
                            shallow: a,
                            locale: c,
                            scroll: e,
                          })
                        : t[o ? "replace" : "push"](r || n, {
                            forceOptimisticNavigation: !s,
                            scroll: e,
                          });
                    };
                    f ? l.default.startTransition(h) : h();
                  })(e, I, U, F, j, O, E, C, w, L);
            },
            onMouseEnter(e) {
              M || "function" != typeof P || P(e),
                M &&
                  r.props &&
                  "function" == typeof r.props.onMouseEnter &&
                  r.props.onMouseEnter(e),
                I &&
                  (L || !w) &&
                  y(
                    I,
                    U,
                    F,
                    { locale: C, priority: !0, bypassPrefetchedCheck: !0 },
                    { kind: S },
                    w,
                  );
            },
            onTouchStart(e) {
              M || "function" != typeof T || T(e),
                M &&
                  r.props &&
                  "function" == typeof r.props.onTouchStart &&
                  r.props.onTouchStart(e),
                I &&
                  (L || !w) &&
                  y(
                    I,
                    U,
                    F,
                    { locale: C, priority: !0, bypassPrefetchedCheck: !0 },
                    { kind: S },
                    w,
                  );
            },
          };
          if ((0, i.isAbsoluteUrl)(F)) B.href = F;
          else if (!M || g || ("a" === r.type && !("href" in r.props))) {
            let e = void 0 !== C ? C : null == k ? void 0 : k.locale,
              t =
                (null == k ? void 0 : k.isLocaleDomain) &&
                (0, p.getDomainLocale)(
                  F,
                  e,
                  null == k ? void 0 : k.locales,
                  null == k ? void 0 : k.domainLocales,
                );
            B.href =
              t ||
              (0, h.addBasePath)(
                (0, c.addLocale)(F, e, null == k ? void 0 : k.defaultLocale),
              );
          }
          return M
            ? l.default.cloneElement(r, B)
            : l.default.createElement("a", { ...R, ...B }, n);
        }),
        _ = m;
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
        l = n(29),
        o = "function" == typeof IntersectionObserver,
        u = new Map(),
        a = [];
      function i(e) {
        let { rootRef: t, rootMargin: n, disabled: i } = e,
          c = i || !o,
          [f, s] = (0, r.useState)(!1),
          d = (0, r.useRef)(null),
          p = (0, r.useCallback)((e) => {
            d.current = e;
          }, []);
        (0, r.useEffect)(() => {
          if (o) {
            if (c || f) return;
            let e = d.current;
            if (e && e.tagName) {
              let r = (function (e, t, n) {
                let {
                  id: r,
                  observer: l,
                  elements: o,
                } = (function (e) {
                  let t;
                  let n = { root: e.root || null, margin: e.rootMargin || "" },
                    r = a.find(
                      (e) => e.root === n.root && e.margin === n.margin,
                    );
                  if (r && (t = u.get(r))) return t;
                  let l = new Map(),
                    o = new IntersectionObserver((e) => {
                      e.forEach((e) => {
                        let t = l.get(e.target),
                          n = e.isIntersecting || e.intersectionRatio > 0;
                        t && n && t(n);
                      });
                    }, e);
                  return (
                    (t = { id: n, observer: o, elements: l }),
                    a.push(n),
                    u.set(n, t),
                    t
                  );
                })(n);
                return (
                  o.set(e, t),
                  l.observe(e),
                  function () {
                    if ((o.delete(e), l.unobserve(e), 0 === o.size)) {
                      l.disconnect(), u.delete(r);
                      let e = a.findIndex(
                        (e) => e.root === r.root && e.margin === r.margin,
                      );
                      e > -1 && a.splice(e, 1);
                    }
                  }
                );
              })(e, (e) => e && s(e), {
                root: null == t ? void 0 : t.current,
                rootMargin: n,
              });
              return r;
            }
          } else if (!f) {
            let e = (0, l.requestIdleCallback)(() => s(!0));
            return () => (0, l.cancelIdleCallback)(e);
          }
        }, [c, n, t, f, d.current]);
        let h = (0, r.useCallback)(() => {
          s(!1);
        }, []);
        return [p, f, h];
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    6521: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var r = n(5893);
      n(7952);
      var l = n(9008),
        o = n.n(l),
        u = n(1664),
        a = n.n(u),
        i = () =>
          (0, r.jsxs)("div", {
            className:
              "nav-container bg-gray-30 text-black p-10 flex justify-between items-center",
            children: [
              (0, r.jsx)("div", {
                className: "logo text-left text-3xl font-bold",
                children: (0, r.jsx)(a(), {
                  href: "/",
                  className: "hover:text-gray-400 transition duration-200",
                  children: "t-ngtn",
                }),
              }),
              (0, r.jsx)("div", {
                className: "nav-list text-right text-3xl text-slate-800",
                children: (0, r.jsxs)("ul", {
                  className: "flex justify-end",
                  children: [
                    (0, r.jsx)("li", {
                      className: "mr-6",
                      children: (0, r.jsx)(a(), {
                        href: "/about",
                        className:
                          "hover:text-gray-400 transition duration-200",
                        children: "about",
                      }),
                    }),
                    (0, r.jsx)("li", {
                      className: "mr-6",
                      children: (0, r.jsx)(a(), {
                        href: "/contact",
                        className:
                          "hover:text-gray-400 transition duration-200",
                        children: "contact",
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        c = () =>
          (0, r.jsx)("footer", {
            className: "bg-gray-30",
            children: (0, r.jsx)("div", {
              className:
                "max-w-4xl w-full mx-auto h-24 flex items-center justify-center text-slate-800",
              children: (0, r.jsx)("div", { children: "\xa9 t-ngtn" }),
            }),
          });
      function f(e) {
        let { children: t } = e;
        return (0, r.jsxs)("div", {
          className: "flex flex-col min-h-screen",
          children: [
            (0, r.jsx)(i, {}),
            (0, r.jsx)("main", {
              className: "flex-1 bg-gray-30 text-slate-800",
              children: t,
            }),
            (0, r.jsx)(c, {}),
          ],
        });
      }
      function s(e) {
        let { Component: t, pageProps: n } = e;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsxs)(o(), {
              children: [
                (0, r.jsx)("title", { children: "t-ngtn home page" }),
                (0, r.jsx)("meta", {
                  name: "description",
                  content: "t-ngtn's portfolio and blog site",
                }),
                (0, r.jsx)("link", { rel: "icon", href: "/favicon.ico" }),
              ],
            }),
            (0, r.jsx)(f, { children: (0, r.jsx)(t, { ...n }) }),
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
