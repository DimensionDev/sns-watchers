;(window.webpackJsonp = window.webpackJsonp || []).push([
  [26],
  {
    '14LL': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'AccountScreen', function () {
          return H
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
        d = n.n(m),
        h = n('G6rE'),
        y = n('rxPX'),
        g = Object(y.a)()
          .propsFromState(function () {
            return { loggedInUser: h.e.selectLoggedInUser }
          })
          .withAnalytics({ page: 'me' }),
        v = n('VN5n'),
        w = n('3XMw'),
        b = n.n(w),
        E = n('yoO3'),
        N = n('wiP2'),
        O = n('MWbm'),
        R = n('Irs7'),
        k = n('jV+4'),
        P = n('rHpw')
      function U(e) {
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
      var B = b.a.i5f7b6b8,
        H = (function (e) {
          i()(n, e)
          var t = U(n)
          function n() {
            return a()(this, n), t.apply(this, arguments)
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  return d.a.createElement(
                    E.a,
                    null,
                    d.a.createElement(
                      N.a.Configure,
                      { documentTitle: B, title: this._renderUserName() },
                      d.a.createElement(O.a, { style: I.dashmenu }, d.a.createElement(v.a, null)),
                    ),
                  )
                },
              },
              {
                key: '_renderUserName',
                value: function () {
                  var e = this.props.loggedInUser
                  return e
                    ? d.a.createElement(k.a, {
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
        })(d.a.Component),
        I = P.a.create(function (e) {
          return { dashmenu: { marginBottom: e.componentDimensions.appBarHeight } }
        })
      t.default = Object(R.a)(g(H))
    },
  },
])
//# sourceMappingURL=WIPED
