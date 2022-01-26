;(window.webpackJsonp = window.webpackJsonp || []).push([
  [221],
  {
    sc5C: function (t, e, n) {
      'use strict'
      n.r(e)
      var r = n('ezF+'),
        c = n('ERkP'),
        o = n('VPAj'),
        a = (n('OZaJ'), n('VrFO')),
        u = n.n(a),
        i = n('Y9Ll'),
        l = n.n(i),
        s = n('5Yy7'),
        f = n.n(s),
        p = n('N+ot'),
        h = n.n(p),
        y = n('AuHH'),
        d = n.n(y),
        m = (n('hBvt'), n('u3ZE')),
        v = n('htQn'),
        k = n('t62R'),
        R = n('rHpw')
      function w(t) {
        var e = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (t) {
            return !1
          }
        })()
        return function () {
          var n,
            r = d()(t)
          if (e) {
            var c = d()(this).constructor
            n = Reflect.construct(r, arguments, c)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      var g = (function (t) {
          f()(n, t)
          var e = w(n)
          function n() {
            return u()(this, n), e.apply(this, arguments)
          }
          return (
            l()(n, [
              {
                key: 'render',
                value: function () {
                  var t = this.props.searchTerm,
                    e = { pathname: '/search', query: { q: t, src: m.a.RelatedQueryClick } }
                  return c.createElement(v.a, { link: e, style: H.link }, c.createElement(k.b, null, t))
                },
              },
            ]),
            n
          )
        })(c.PureComponent),
        H = R.a.create(function (t) {
          return {
            link: {
              paddingHorizontal: t.componentDimensions.gutterHorizontal,
              paddingVertical: t.componentDimensions.gutterVertical,
            },
          }
        }),
        P = g,
        b = r.g({
          component: P,
          selectData: Object(o.a)({}),
          createProps: function (t) {
            return { searchTerm: t.entry.content.relatedSearch.text }
          },
        })
      e.default = b
    },
  },
])
//# sourceMappingURL=WIPED
