(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [646],
  {
    7411: function (n, t, e) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/posts/[id]",
        function () {
          return e(3839);
        },
      ]);
    },
    3839: function (n, t, e) {
      "use strict";
      e.r(t),
        e.d(t, {
          __N_SSG: function () {
            return _;
          },
        });
      var u = e(5893),
        _ = !0;
      t.default = function (n) {
        let { post: t } = n;
        return (0, u.jsxs)("div", {
          children: [
            (0, u.jsx)("h1", { children: t.title }),
            (0, u.jsx)("div", {
              dangerouslySetInnerHTML: { __html: t.content },
            }),
          ],
        });
      };
    },
  },
  function (n) {
    n.O(0, [774, 888, 179], function () {
      return n((n.s = 7411));
    }),
      (_N_E = n.O());
  },
]);
