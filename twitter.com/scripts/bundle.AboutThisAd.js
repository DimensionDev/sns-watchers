;(window.webpackJsonp = window.webpackJsonp || []).push([
  [29],
  {
    bv0X: function (t, e, n) {
      'use strict'
      n.r(e),
        n.d(e, 'AboutThisAdScreen', function () {
          return w
        })
      var r = n('ERkP'),
        a = n.n(r),
        o = (n('KqXw'), n('WNMA'), n('rxPX')),
        s = function (t, e) {
          return e.match.params.impressionId
        },
        i = Object(o.a)().propsFromState(function () {
          return { impressionId: s }
        }),
        c = n('jHSc'),
        u = n('3XMw'),
        p = n.n(u),
        b = n('bPFD'),
        d = n('rHpw'),
        l = p.a.fb4ee11c,
        w = function (t) {
          var e = t.history,
            n = t.impressionId
          return a.a.createElement(
            c.b,
            { history: e, title: l },
            a.a.createElement(b.a, { allowForms: !0, src: '/about-ads?aid='.concat(n || ''), style: d.a.absoluteFill }),
          )
        }
      e.default = i(w)
    },
  },
])
//# sourceMappingURL=WIPED
