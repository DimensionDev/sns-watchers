;(window.webpackJsonp = window.webpackJsonp || []).push([
  [232],
  {
    sc5C: function (e, t, n) {
      'use strict'
      n.r(t)
      var r = n('ezF+'),
        a = n('ERkP'),
        c = n.n(a),
        o = n('VPAj'),
        i = (n('hBvt'), n('u3ZE')),
        l = n('htQn'),
        s = n('t62R')
      function u(e) {
        var t = e.searchTerm,
          n = { pathname: '/search', query: { q: t, src: i.a.RelatedQueryClick } }
        return c.a.createElement(l.a, { link: n, style: p.link }, c.a.createElement(s.b, null, t))
      }
      var p = n('rHpw').a.create(function (e) {
          return {
            link: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
          }
        }),
        m = c.a.memo(u),
        d = r.g({
          component: m,
          selectData: Object(o.a)({}),
          createProps: function (e) {
            return { searchTerm: e.entry.content.relatedSearch.text }
          },
        })
      t.default = d
    },
  },
])
//# sourceMappingURL=WIPED
