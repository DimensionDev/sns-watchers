;(window.webpackJsonp = window.webpackJsonp || []).push([
  [227],
  {
    sc5C: function (e, n, t) {
      'use strict'
      t.r(n)
      var r = t('ezF+'),
        a = t('ERkP'),
        c = t.n(a),
        o = t('VPAj'),
        i = t('VrFO'),
        u = t.n(i),
        s = t('Y9Ll'),
        l = t.n(s),
        p = t('5Yy7'),
        h = t.n(p),
        m = t('2VqO'),
        d = t.n(m),
        k = (t('hBvt'), t('u3ZE')),
        f = t('htQn'),
        w = t('t62R'),
        y = t('rHpw'),
        g = (function (e) {
          h()(t, e)
          var n = d()(t)
          function t() {
            return u()(this, t), n.apply(this, arguments)
          }
          return (
            l()(t, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.searchTerm,
                    n = { pathname: '/search', query: { q: e, src: k.a.RelatedQueryClick } }
                  return c.a.createElement(f.a, { link: n, style: v.link }, c.a.createElement(w.b, null, e))
                },
              },
            ]),
            t
          )
        })(c.a.PureComponent),
        v = y.a.create(function (e) {
          return {
            link: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
          }
        }),
        V = g,
        b = r.g({
          component: V,
          selectData: Object(o.a)({}),
          createProps: function (e) {
            return { searchTerm: e.entry.content.relatedSearch.text }
          },
        })
      n.default = b
    },
  },
])
//# sourceMappingURL=WIPED
