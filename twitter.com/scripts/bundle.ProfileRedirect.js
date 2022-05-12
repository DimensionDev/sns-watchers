;(window.webpackJsonp = window.webpackJsonp || []).push([
  [80],
  {
    dgvO: function (e, n, r) {
      'use strict'
      r.r(n),
        r.d(n, 'ProfileRedirect', function () {
          return p
        })
      r('KqXw'), r('MvUL')
      var t = r('ERkP'),
        c = r.n(t),
        a = r('G6rE'),
        o = r('rxPX'),
        u = function (e) {
          var n = a.e.selectLoggedInUser(e)
          return n ? n.screen_name : void 0
        },
        i = Object(o.a)().propsFromState(function () {
          return { screenName: u }
        }),
        s = r('kGix'),
        f = r('v//M'),
        d = r('0zXz'),
        p = function (e) {
          var n = e.history,
            r = e.screenName
          return (
            c.a.useEffect(
              function () {
                n.replace('/'.concat(r || ''))
              },
              [n, r],
            ),
            c.a.createElement(f.a, { fetchStatus: s.a.LOADING, render: d.a })
          )
        }
      n.default = i(p)
    },
  },
])
//# sourceMappingURL=WIPED
