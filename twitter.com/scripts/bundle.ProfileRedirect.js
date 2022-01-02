;(window.webpackJsonp = window.webpackJsonp || []).push([
  [77],
  {
    dgvO: function (e, n, r) {
      'use strict'
      r.r(n),
        r.d(n, 'ProfileRedirect', function () {
          return d
        })
      r('MvUL'), r('KqXw')
      var t = r('ERkP'),
        c = r('G6rE'),
        o = r('rxPX'),
        u = function (e) {
          var n = c.e.selectLoggedInUser(e)
          return n ? n.screen_name : void 0
        },
        a = Object(o.a)().propsFromState(function () {
          return { screenName: u }
        }),
        i = r('kGix'),
        s = r('v//M'),
        f = function () {
          return null
        },
        d = function (e) {
          var n = e.history,
            r = e.screenName
          return (
            t.useEffect(
              function () {
                n.replace('/'.concat(r || ''))
              },
              [n, r],
            ),
            t.createElement(s.a, { fetchStatus: i.a.LOADING, render: f })
          )
        }
      n.default = a(d)
    },
  },
])
//# sourceMappingURL=WIPED
