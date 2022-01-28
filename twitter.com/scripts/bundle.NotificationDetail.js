;(window.webpackJsonp = window.webpackJsonp || []).push([
  [71],
  {
    TvXc: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'SafetyReportNotificationScreen', function () {
          return C
        })
      n('OZaJ')
      var r = n('VrFO'),
        o = n.n(r),
        a = n('Y9Ll'),
        i = n.n(a),
        c = n('1Pcy'),
        l = n.n(c),
        f = n('5Yy7'),
        s = n.n(f),
        u = n('N+ot'),
        p = n.n(u),
        y = n('AuHH'),
        h = n.n(y),
        v = n('KEM+'),
        d = n.n(v),
        b =
          (n('2G9S'),
          n('MvUL'),
          n('KqXw'),
          n('vrRf'),
          n('mlET'),
          n('7xRU'),
          n('z84I'),
          n('LW0h'),
          n('+KXO'),
          n('ERkP')),
        m = n.n(b),
        _ = n('jHSc'),
        w = n('qzfk'),
        k = n('3XMw'),
        g = n.n(k),
        R = n('8jkQ'),
        O = n('5FtR'),
        U = n('/yvb'),
        P = n('bPFD'),
        S = n('rHpw'),
        j = n('7JQg')
      function E(e) {
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
            r = h()(e)
          if (t) {
            var o = h()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var x = g.a.c380d684,
        q = g.a.f15bfdb3,
        F = g.a.c7714935,
        T = g.a.b772cd65,
        C = (function (e) {
          s()(n, e)
          var t = E(n)
          function n() {
            var e
            o()(this, n)
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              d()(l()(e), '_handleDone', function () {
                e.props.history.replace('/notifications')
              }),
              e
            )
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.history,
                    t = this._getSafeUrl(),
                    n = this._getTitle(t),
                    r = this._getParams(),
                    o = m.a.createElement(U.a, { onPress: this._handleDone, size: 'small', type: 'brandFilled' }, T),
                    a = -1 !== (null == t ? void 0 : t.indexOf('appealable_label'))
                  return t
                    ? m.a.createElement(
                        _.b,
                        {
                          backButtonType: a ? 'back' : 'close',
                          backLocation: '/notifications',
                          history: e,
                          rightControl: a ? o : void 0,
                          title: n,
                        },
                        m.a.createElement(P.a, {
                          allowForms: !0,
                          src: 'https://twitter.com/'.concat(t, '?').concat(r),
                          style: H.iframe,
                        }),
                      )
                    : m.a.createElement(O.a, { to: '/notifications' })
                },
              },
              {
                key: '_getSafeUrl',
                value: function () {
                  var e = this.props.location,
                    t = e.query && 'string' == typeof e.query.relativeUrl ? e.query.relativeUrl : void 0
                  if (t && R.b.isSafetyNotificationsUrl(t)) return t
                },
              },
              {
                key: '_getTitle',
                value: function (e) {
                  return null != e && e.endsWith('review_settings')
                    ? q
                    : -1 !== (null == e ? void 0 : e.indexOf('appealable_label'))
                    ? F
                    : x
                },
              },
              {
                key: '_getParams',
                value: function () {
                  var e = this.props.scribeNamespace,
                    t = {
                      client_location: [e.page, e.section, e.component].join(':'),
                      client_referer: window.location.pathname,
                      client_app_id: Object(w.a)().clientAppId,
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
        })(m.a.PureComponent),
        H = S.a.create(function (e) {
          return { iframe: { flexGrow: 1, flexShrink: 1 } }
        })
      t.default = Object(j.c)({ page: 'ntab', section: 'safety_report_notification' })(C)
    },
  },
])
//# sourceMappingURL=WIPED
