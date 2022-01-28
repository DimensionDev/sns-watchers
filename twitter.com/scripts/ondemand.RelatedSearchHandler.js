;(window.webpackJsonp = window.webpackJsonp || []).push([
  [226],
  {
    sc5C: function (t, e, n) {
      'use strict'
      n.r(e)
      var r = n('ezF+'),
        c = n('ERkP'),
        o = n.n(c),
        a = n('VPAj'),
        u = (n('OZaJ'), n('VrFO')),
        i = n.n(u),
        l = n('Y9Ll'),
        s = n.n(l),
        f = n('5Yy7'),
        p = n.n(f),
        h = n('N+ot'),
        y = n.n(h),
        d = n('AuHH'),
        m = n.n(d),
        v = (n('hBvt'), n('u3ZE')),
        k = n('htQn'),
        R = n('t62R'),
        w = n('rHpw')
      function g(t) {
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
            r = m()(t)
          if (e) {
            var c = m()(this).constructor
            n = Reflect.construct(r, arguments, c)
          } else n = r.apply(this, arguments)
          return y()(this, n)
        }
      }
      var H = (function (t) {
          p()(n, t)
          var e = g(n)
          function n() {
            return i()(this, n), e.apply(this, arguments)
          }
          return (
            s()(n, [
              {
                key: 'render',
                value: function () {
                  var t = this.props.searchTerm,
                    e = { pathname: '/search', query: { q: t, src: v.a.RelatedQueryClick } }
                  return o.a.createElement(k.a, { link: e, style: P.link }, o.a.createElement(R.b, null, t))
                },
              },
            ]),
            n
          )
        })(o.a.PureComponent),
        P = w.a.create(function (t) {
          return {
            link: {
              paddingHorizontal: t.componentDimensions.gutterHorizontal,
              paddingVertical: t.componentDimensions.gutterVertical,
            },
          }
        }),
        b = H,
        E = r.g({
          component: b,
          selectData: Object(a.a)({}),
          createProps: function (t) {
            return { searchTerm: t.entry.content.relatedSearch.text }
          },
        })
      e.default = E
    },
  },
])
//# sourceMappingURL=WIPED
