;(window.webpackJsonp = window.webpackJsonp || []).push([
  [25],
  {
    '14LL': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'AccountScreen', function () {
          return B
        })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        c = n.n(o),
        u = n('5Yy7'),
        i = n.n(u),
        s = n('N+ot'),
        l = n.n(s),
        f = n('AuHH'),
        p = n.n(f),
        m = (n('ho0z'), n('ERkP')),
        d = n('G6rE'),
        h = n('rxPX'),
        y = Object(h.a)()
          .propsFromState(function () {
            return { loggedInUser: d.e.selectLoggedInUser }
          })
          .withAnalytics({ page: 'me' }),
        g = n('VN5n'),
        v = n('3XMw'),
        w = n.n(v),
        b = n('yoO3'),
        E = n('wiP2'),
        N = n('MWbm'),
        O = n('Irs7'),
        R = n('jV+4'),
        k = n('rHpw')
      function P(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            r = p()(e)
          if (t) {
            var a = p()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return l()(this, n)
        }
      }
      var U = w.a.i5f7b6b8,
        B = (function (e) {
          i()(n, e)
          var t = P(n)
          function n() {
            return a()(this, n), t.apply(this, arguments)
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  return m.createElement(
                    b.a,
                    null,
                    m.createElement(
                      E.a.Configure,
                      { documentTitle: U, title: this._renderUserName() },
                      m.createElement(N.a, { style: H.dashmenu }, m.createElement(g.a, null)),
                    ),
                  )
                },
              },
              {
                key: '_renderUserName',
                value: function () {
                  var e = this.props.loggedInUser
                  return e
                    ? m.createElement(R.a, {
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
            n
          )
        })(m.Component),
        H = k.a.create(function (e) {
          return { dashmenu: { marginBottom: e.componentDimensions.appBarHeight } }
        })
      t.default = Object(O.a)(y(B))
    },
  },
])
//# sourceMappingURL=WIPED
