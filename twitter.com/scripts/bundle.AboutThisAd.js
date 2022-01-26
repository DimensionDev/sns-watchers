;(window.webpackJsonp = window.webpackJsonp || []).push([
  [25],
  {
    bv0X: function (t, e, r) {
      'use strict'
      r.r(e),
        r.d(e, 'AboutThisAdScreen', function () {
          return l
        })
      var n = r('ERkP'),
        o = (r('WNMA'), r('KqXw'), r('rxPX')),
        a = function (t, e) {
          return e.match.params.impressionId
        },
        s = Object(o.a)().propsFromState(function () {
          return { impressionId: a }
        }),
        i = r('jHSc'),
        c = r('3XMw'),
        u = r.n(c),
        p = r('bPFD'),
        b = r('rHpw'),
        d = u.a.fb4ee11c,
        l = function (t) {
          var e = t.history,
            r = t.impressionId
          return n.createElement(
            i.b,
            { history: e, title: d },
            n.createElement(p.a, { allowForms: !0, src: '/about-ads?aid='.concat(r || ''), style: b.a.absoluteFill }),
          )
        }
      e.default = s(l)
    },
  },
])
//# sourceMappingURL=WIPED
