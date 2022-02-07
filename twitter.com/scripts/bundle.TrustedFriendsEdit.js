;(window.webpackJsonp = window.webpackJsonp || []).push([
  [98],
  {
    LgYn: function (e, t, a) {
      'use strict'
      a.r(t)
      var n = a('ddV6'),
        c = a.n(n),
        o = a('ERkP'),
        r = a.n(o),
        p = a('jHSc'),
        s = a('7JQg'),
        i = a('rHpw'),
        d = a('zCf4'),
        l = i.a.create(function (e) {
          return {
            error: { paddingHorizontal: e.spaces.space16, paddingBottom: e.spaces.space12 },
            root: { paddingHorizontal: e.spaces.space20, paddingVertical: e.spaces.space20 },
            text: { paddingHorizontal: e.spaces.space16 },
          }
        })
      t.default = function () {
        var e = r.a.useState(!0),
          t = c()(e, 2),
          a = t[0],
          n = t[1],
          o = Object(d.f)()
        return r.a.createElement(
          s.b,
          null,
          a
            ? r.a.createElement(p.b, {
                containerStyle: l.root,
                onBackClick: function () {
                  n(!1), o.push('/compose/tweet')
                },
                title: 'Edit your Twitter Circle',
              })
            : null,
        )
      }
    },
  },
])
//# sourceMappingURL=WIPED
