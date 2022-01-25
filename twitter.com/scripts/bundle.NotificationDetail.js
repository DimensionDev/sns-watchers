;(window.webpackJsonp = window.webpackJsonp || []).push([
  [70],
  {
    TvXc: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'SafetyReportNotificationScreen', function () {
          return T
        })
      n('OZaJ')
      var r = n('VrFO'),
        o = n.n(r),
        i = n('Y9Ll'),
        a = n.n(i),
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
        m = n('jHSc'),
        _ = n('qzfk'),
        w = n('3XMw'),
        k = n.n(w),
        g = n('8jkQ'),
        R = n('5FtR'),
        O = n('/yvb'),
        U = n('bPFD'),
        P = n('rHpw'),
        S = n('7JQg')
      function j(e) {
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
      var E = k.a.c380d684,
        x = k.a.f15bfdb3,
        q = k.a.c7714935,
        F = k.a.b772cd65,
        T = (function (e) {
          s()(n, e)
          var t = j(n)
          function n() {
            var e
            o()(this, n)
            for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              d()(l()(e), '_handleDone', function () {
                e.props.history.replace('/notifications')
              }),
              e
            )
          }
          return (
            a()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.history,
                    t = this._getSafeUrl(),
                    n = this._getTitle(t),
                    r = this._getParams(),
                    o = b.createElement(O.a, { onPress: this._handleDone, size: 'small', type: 'brandFilled' }, F),
                    i = -1 !== (null == t ? void 0 : t.indexOf('appealable_label'))
                  return t
                    ? b.createElement(
                        m.b,
                        {
                          backButtonType: i ? 'back' : 'close',
                          backLocation: '/notifications',
                          history: e,
                          rightControl: i ? o : void 0,
                          title: n,
                        },
                        b.createElement(U.a, {
                          allowForms: !0,
                          src: 'https://twitter.com/'.concat(t, '?').concat(r),
                          style: C.iframe,
                        }),
                      )
                    : b.createElement(R.a, { to: '/notifications' })
                },
              },
              {
                key: '_getSafeUrl',
                value: function () {
                  var e = this.props.location,
                    t = e.query && 'string' == typeof e.query.relativeUrl ? e.query.relativeUrl : void 0
                  if (t && g.b.isSafetyNotificationsUrl(t)) return t
                },
              },
              {
                key: '_getTitle',
                value: function (e) {
                  return null != e && e.endsWith('review_settings')
                    ? x
                    : -1 !== (null == e ? void 0 : e.indexOf('appealable_label'))
                    ? q
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
                      client_app_id: Object(_.a)().clientAppId,
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
        })(b.PureComponent),
        C = P.a.create(function (e) {
          return { iframe: { flexGrow: 1, flexShrink: 1 } }
        })
      t.default = Object(S.c)({ page: 'ntab', section: 'safety_report_notification' })(T)
    },
  },
])
//# sourceMappingURL=WIPED
