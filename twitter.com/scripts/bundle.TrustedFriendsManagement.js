;(window.webpackJsonp = window.webpackJsonp || []).push([
  [101],
  {
    '/uhu': function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'TRUSTED_FRIENDS_LEARN_MORE_URL', function () {
          return E
        }),
        a.d(t, 'TrustedFriendsManagementScreen', function () {
          return g
        })
      a('lTEL'), a('7x/C'), a('JtPf'), a('87if'), a('kYxP'), a('KqXw'), a('WNMA')
      var n = a('ERkP'),
        r = a.n(n),
        c = a('jHSc'),
        s = a('3XMw'),
        i = a.n(s),
        l = a('/de5'),
        u = a('wytG'),
        d = a('7JQg'),
        o = a('k/OQ'),
        m = a('zCf4'),
        b = i.a.ad964e3f,
        f = i.a.d0748dae,
        p = i.a.ef8f5d90,
        E = 'https://help.twitter.com/using-twitter/twitter-circle',
        h = { page: 'trusted_friends_edit' },
        w = Object(u.a)(function () {
          return Promise.all([a.e(0), a.e(3), a.e(4), a.e(7), a.e(110)]).then(a.bind(null, 'gzLP'))
        }),
        k = Object(u.a)(function () {
          return Promise.all([a.e(0), a.e(3), a.e(4), a.e(7), a.e(110)]).then(a.bind(null, 'W8UM'))
        }),
        g = function (e) {
          var t = e.history,
            a = e.location,
            n = e.match.params.trustedFriendsId,
            s = r.a.useCallback(
              function () {
                if (!n) return null
                var e = [
                  { to: { pathname: '/i/circles/'.concat(n, '/members'), state: a.state }, label: f, key: f },
                  { to: { pathname: '/i/circles/'.concat(n, '/members/suggested'), state: a.state }, label: p, key: p },
                ]
                return r.a.createElement(o.a, { accessibilityLabel: b, links: e })
              },
              [a, n],
            )
          return r.a.createElement(
            d.c,
            { namespace: h },
            r.a.createElement(
              c.b,
              { backButtonType: 'close', history: t, secondaryBar: s(), title: b },
              n
                ? r.a.createElement(
                    m.d,
                    null,
                    r.a.createElement(
                      m.b,
                      { exact: !0, path: '/i/circles/'.concat(n, '/members') },
                      r.a.createElement(w, { trustedFriendsId: n }),
                    ),
                    r.a.createElement(
                      m.b,
                      { exact: !0, path: '/i/circles/'.concat(n, '/members/suggested') },
                      r.a.createElement(k, { trustedFriendsId: n }),
                    ),
                  )
                : r.a.createElement(l.b, e),
            ),
          )
        }
      t.default = g
    },
  },
])
//# sourceMappingURL=WIPED
