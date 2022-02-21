;(window.webpackJsonp = window.webpackJsonp || []).push([
  [100],
  {
    '/uhu': function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'TrustedFriendsManagementScreen', function () {
          return w
        })
      a('lTEL'), a('7x/C'), a('JtPf'), a('87if'), a('kYxP'), a('KqXw'), a('WNMA')
      var n = a('ERkP'),
        r = a.n(n),
        c = a('jHSc'),
        s = a('3XMw'),
        l = a.n(s),
        i = a('/de5'),
        u = a('wytG'),
        m = a('7JQg'),
        d = a('k/OQ'),
        o = a('zCf4'),
        b = l.a.ad964e3f,
        f = l.a.f0ab07f4,
        p = l.a.ba5a88e3,
        h = { page: 'trusted_friends_edit' },
        E = Object(u.a)(function () {
          return Promise.all([a.e(0), a.e(3), a.e(4), a.e(6), a.e(109)]).then(a.bind(null, 'gzLP'))
        }),
        k = Object(u.a)(function () {
          return Promise.all([a.e(0), a.e(3), a.e(4), a.e(6), a.e(109)]).then(a.bind(null, 'W8UM'))
        }),
        w = function (e) {
          var t = e.history,
            a = e.location,
            n = e.match.params.trustedFriendsId,
            s = r.a.useCallback(
              function () {
                var e = f({ memberCount: 3 })
                if (!n) return null
                var t = [
                  { to: { pathname: '/i/circles/'.concat(n, '/members'), state: a.state }, label: e, key: e },
                  { to: { pathname: '/i/circles/'.concat(n, '/members/suggested'), state: a.state }, label: p, key: p },
                ]
                return r.a.createElement(d.a, { accessibilityLabel: b, links: t })
              },
              [a, n],
            )
          return r.a.createElement(
            m.c,
            { namespace: h },
            r.a.createElement(
              c.b,
              { backButtonType: 'close', history: t, secondaryBar: s(), title: b },
              n
                ? r.a.createElement(
                    o.d,
                    null,
                    r.a.createElement(
                      o.b,
                      { exact: !0, path: '/i/circles/'.concat(n, '/members') },
                      r.a.createElement(E, { trustedFriendsId: n }),
                    ),
                    r.a.createElement(
                      o.b,
                      { exact: !0, path: '/i/circles/'.concat(n, '/members/suggested') },
                      r.a.createElement(k, { trustedFriendsId: n }),
                    ),
                  )
                : r.a.createElement(i.b, e),
            ),
          )
        }
      t.default = w
    },
  },
])
//# sourceMappingURL=WIPED
