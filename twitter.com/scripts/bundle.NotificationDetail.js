;(window.webpackJsonp = window.webpackJsonp || []).push([
  [74],
  {
    TvXc: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'SafetyReportNotificationScreen', function () {
          return x
        })
      var a = n('VrFO'),
        i = n.n(a),
        r = n('Y9Ll'),
        o = n.n(r),
        c = n('1Pcy'),
        l = n.n(c),
        s = n('5Yy7'),
        p = n.n(s),
        f = n('2VqO'),
        u = n.n(f),
        d = n('KEM+'),
        y = n.n(d),
        b =
          (n('2G9S'),
          n('KqXw'),
          n('MvUL'),
          n('vrRf'),
          n('mlET'),
          n('7xRU'),
          n('z84I'),
          n('LW0h'),
          n('7x/C'),
          n('+KXO'),
          n('ERkP')),
        h = n.n(b),
        v = n('jHSc'),
        m = n('qzfk'),
        _ = n('3XMw'),
        w = n.n(_),
        k = n('8jkQ'),
        g = n('5FtR'),
        U = n('/yvb'),
        O = n('bPFD'),
        S = n('rHpw'),
        j = n('7JQg'),
        E = w.a.c380d684,
        P = w.a.f15bfdb3,
        R = w.a.c7714935,
        q = w.a.b772cd65,
        x = (function (e) {
          p()(n, e)
          var t = u()(n)
          function n() {
            var e
            i()(this, n)
            for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              y()(l()(e), '_handleDone', function () {
                e.props.history.replace('/notifications')
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.history,
                    t = this._getSafeUrl(),
                    n = this._getTitle(t),
                    a = this._getParams(),
                    i = h.a.createElement(U.a, { onPress: this._handleDone, size: 'small', type: 'brandFilled' }, q),
                    r = -1 !== (null == t ? void 0 : t.indexOf('appealable_label'))
                  return t
                    ? h.a.createElement(
                        v.b,
                        {
                          backButtonType: r ? 'back' : 'close',
                          backLocation: '/notifications',
                          history: e,
                          rightControl: r ? i : void 0,
                          title: n,
                        },
                        h.a.createElement(O.a, {
                          allowForms: !0,
                          src: 'https://twitter.com/'.concat(t, '?').concat(a),
                          style: C.iframe,
                        }),
                      )
                    : h.a.createElement(g.a, { to: '/notifications' })
                },
              },
              {
                key: '_getSafeUrl',
                value: function () {
                  var e = this.props.location,
                    t = e.query && 'string' == typeof e.query.relativeUrl ? e.query.relativeUrl : void 0
                  if (t && k.b.isSafetyNotificationsUrl(t)) return t
                },
              },
              {
                key: '_getTitle',
                value: function (e) {
                  return null != e && e.endsWith('review_settings')
                    ? P
                    : -1 !== (null == e ? void 0 : e.indexOf('appealable_label'))
                    ? R
                    : E
                },
              },
              {
                key: '_getParams',
                value: function () {
                  var e = this.props.scribeNamespace,
                    t = {
                      client_location: [e.page, e.section, e.component].join(':'),
                      client_referer: window.location.pathname,
                      client_app_id: Object(m.a)().clientAppId,
                    }
                  return Object.keys(t)
                    .filter(function (e) {
                      return !!t[e]
                    })
                    .map(function (e) {
                      return ''.concat(encodeURIComponent(e), '=').concat(encodeURIComponent(t[e]))
                    })
                    .join('&')
                },
              },
            ]),
            n
          )
        })(h.a.PureComponent),
        C = S.a.create(function (e) {
          return { iframe: { flexGrow: 1, flexShrink: 1 } }
        })
      t.default = Object(j.a)({ page: 'ntab', section: 'safety_report_notification' })(x)
    },
  },
])
//# sourceMappingURL=WIPED
