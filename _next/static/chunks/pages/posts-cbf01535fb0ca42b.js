(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [679],
  {
    5794: function (n, t, e) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/posts",
        function () {
          return e(6472);
        },
      ]);
    },
    6472: function (n, t, e) {
      "use strict";
      e.r(t),
        e.d(t, {
          __N_SSG: function () {
            return r;
          },
          default: function () {
            return u;
          },
        });
      var s = e(5893),
        i = e(1664),
        c = e.n(i),
        r = !0;
      function u(n) {
        let { posts: t } = n;
        return (0, s.jsxs)("div", {
          className: "mx-auto max-w-screen-lg",
          children: [
            (0, s.jsx)("h1", {
              className: "text-7xl mt-10 font-semibold",
              children: "Blog",
            }),
            (0, s.jsx)("ul", {
              children: t.map((n) =>
                (0, s.jsx)(
                  "li",
                  {
                    children: (0, s.jsx)(c(), {
                      href: "/posts/".concat(n.id),
                      children: (0, s.jsxs)("text", {
                        children: [n.title, " - ", n.date],
                      }),
                    }),
                  },
                  n.id,
                ),
              ),
            }),
          ],
        });
      }
    },
  },
  function (n) {
    n.O(0, [774, 888, 179], function () {
      return n((n.s = 5794));
    }),
      (_N_E = n.O());
  },
]);
