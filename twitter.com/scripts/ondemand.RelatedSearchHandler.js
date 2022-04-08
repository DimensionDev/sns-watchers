;(window.webpackJsonp = window.webpackJsonp || []).push([
  [231],
  {
    sc5C: function (e, n, t) {
      'use strict'
      t.r(n)
      var a = t('ezF+'),
        r = (t('hBvt'), t('ERkP')),
        o = t.n(r),
        i = t('u3ZE'),
        c = t('htQn'),
        l = t('t62R')
      function u(e) {
        var n,
          t = e.entry,
          a = null == t || null === (n = t.content) || void 0 === n ? void 0 : n.relatedSearch.text,
          r = o.a.useMemo(
            function () {
              return { pathname: '/search', query: { q: a, src: i.a.RelatedQueryClick } }
            },
            [a],
          )
        return o.a.createElement(c.a, { link: r, style: s.link }, o.a.createElement(l.b, null, a))
      }
      var s = t('rHpw').a.create(function (e) {
          return {
            link: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
          }
        }),
        d = o.a.memo(u),
        p = a.b({ component: d }).getHandler()
      n.default = p
    },
  },
])
//# sourceMappingURL=WIPED
