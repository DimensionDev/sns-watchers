;(window.webpackJsonp = window.webpackJsonp || []).push([
  [29],
  {
    '14LL': function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'AccountScreen', function () {
          return V
        })
      var r = t('VrFO'),
        a = t.n(r),
        o = t('Y9Ll'),
        c = t.n(o),
        i = t('5Yy7'),
        s = t.n(i),
        u = t('2VqO'),
        l = t.n(u),
        m = (t('ho0z'), t('ERkP')),
        p = t.n(m),
        d = t('G6rE'),
        f = t('rxPX'),
        g = Object(f.a)()
          .propsFromState(function () {
            return { loggedInUser: d.e.selectLoggedInUser }
          })
          .withAnalytics({ page: 'me' }),
        h = t('VN5n'),
        w = t('3XMw'),
        y = t.n(w),
        b = t('yoO3'),
        E = t('wiP2'),
        v = t('MWbm'),
        k = t('Irs7'),
        N = t('jV+4'),
        O = t('rHpw'),
        U = y.a.i5f7b6b8,
        V = (function (e) {
          s()(t, e)
          var n = l()(t)
          function t() {
            return a()(this, t), n.apply(this, arguments)
          }
          return (
            c()(t, [
              {
                key: 'render',
                value: function () {
                  return p.a.createElement(
                    b.a,
                    null,
                    p.a.createElement(
                      E.a.Configure,
                      { documentTitle: U, title: this._renderUserName() },
                      p.a.createElement(v.a, { style: I.dashmenu }, p.a.createElement(h.a, null)),
                    ),
                  )
                },
              },
              {
                key: '_renderUserName',
                value: function () {
                  var e = this.props.loggedInUser
                  return e
                    ? p.a.createElement(N.a, {
                        badgeContext: 'account',
                        isProtected: e.protected,
                        isVerified: e.verified,
                        name: e.name,
                        screenName: e.screen_name,
                        translatorType: e.translator_type,
                        withScreenName: !1,
                      })
                    : null
                },
              },
            ]),
            t
          )
        })(p.a.Component),
        I = O.a.create(function (e) {
          return { dashmenu: { marginBottom: e.componentDimensions.appBarHeight } }
        })
      n.default = Object(k.a)(g(V))
    },
  },
])
//# sourceMappingURL=WIPED
