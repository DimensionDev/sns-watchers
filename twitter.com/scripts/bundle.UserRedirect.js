;(window.webpackJsonp = window.webpackJsonp || []).push([
  [106],
  {
    rFDg: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'UserRedirectScreen', function () {
          return D
        })
      r('OZaJ')
      var n,
        o = r('VrFO'),
        c = r.n(o),
        a = r('Y9Ll'),
        u = r.n(a),
        i = r('1Pcy'),
        s = r.n(i),
        l = r('5Yy7'),
        d = r.n(l),
        f = r('N+ot'),
        h = r.n(f),
        p = r('AuHH'),
        y = r.n(p),
        m = r('KEM+'),
        v = r.n(m),
        E = (r('2G9S'), r('MvUL'), r('KqXw'), r('ERkP')),
        w = (r('WNMA'), r('G6rE')),
        R = r('rxPX'),
        I = r('0KEI'),
        S = function (e, t) {
          var r
          return null === (r = t.match) || void 0 === r ? void 0 : r.params.userId
        },
        A = function (e, t) {
          return w.e.select(e, S(0, t))
        },
        _ = function (e, t) {
          return w.e.selectFetchStatus(e, S(0, t))
        },
        U = Object(R.a)()
          .propsFromState(function () {
            return { fetchStatus: _, user: A, userId: S }
          })
          .adjustStateProps(function (e) {
            var t = e.fetchStatus,
              r = e.user,
              n = e.userId
            return { fetchStatus: t, screenName: null == r ? void 0 : r.screen_name, userId: n }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(I.createLocalApiErrorHandlerWithContextFactory)(
                'USER_REDIRECT_SCREEN',
              ),
              fetchUserIfNeeded: w.e.fetchOneIfNeeded,
            }
          })
          .withAnalytics({ page: 'user_redirect' }),
        L = r('k49u'),
        N = r('LVU8'),
        k =
          ((n = {}),
          v()(n, L.a.AddressBookLookupNotFound, { customAction: N.c }),
          v()(n, L.a.GenericUserNotFound, { customAction: N.c }),
          v()(n, L.a.OtherUserSuspended, { customAction: N.c }),
          v()(n, 'showToast', !0),
          n),
        g = r('v//M'),
        O = r('7JQg'),
        T = r('yoO3'),
        C = r('wiP2'),
        F = r('MWbm'),
        P = r('mw9i'),
        b = r('rHpw').a.create(function (e) {
          return { flexGrow: { flexGrow: 1 } }
        }),
        x = Object(O.c)()(function (e) {
          var t = e.children,
            r = e.containerStyle,
            n = e.documentTitle,
            o = e.onLayout,
            c = e.renderHeader,
            a = e.rightControl,
            u = e.title
          return E.createElement(
            T.a,
            null,
            E.createElement(
              F.a,
              { onLayout: o, style: b.flexGrow },
              c
                ? E.createElement(C.a.Configure, { documentTitle: n, headerless: !0 }, c())
                : E.createElement(C.a.Configure, { backLocation: '/', documentTitle: n, rightControl: a, title: u }),
              E.createElement(P.a, { style: [b.flexGrow, r] }, t),
            ),
          )
        }),
        G = r('3XMw')
      function H(e) {
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
          var r,
            n = y()(e)
          if (t) {
            var o = y()(this).constructor
            r = Reflect.construct(n, arguments, o)
          } else r = n.apply(this, arguments)
          return h()(this, r)
        }
      }
      var M = r.n(G).a.fa98627a,
        j = function () {
          return null
        },
        D = (function (e) {
          d()(r, e)
          var t = H(r)
          function r() {
            var e
            c()(this, r)
            for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++) o[a] = arguments[a]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              v()(s()(e), 'fetchAndRedirectIfNeeded', function () {
                var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                  r = e.props,
                  n = r.location.query,
                  o = r.screenName
                o && n && n.user_id
                  ? e._redirectToUserIntent(o)
                  : o
                  ? e._redirectToProfileScreen(o)
                  : t && e._handleLoadUser()
              }),
              v()(s()(e), '_handleRetry', function () {
                e._handleLoadUser()
              }),
              v()(s()(e), '_handleLoadUser', function () {
                var t = e.props,
                  r = t.createLocalApiErrorHandler
                ;(0, t.fetchUserIfNeeded)(t.userId).catch(r(k))
              }),
              e
            )
          }
          return (
            u()(r, [
              {
                key: 'componentDidMount',
                value: function () {
                  this.fetchAndRedirectIfNeeded()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  this.fetchAndRedirectIfNeeded(e.userId !== this.props.userId)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props.fetchStatus
                  return E.createElement(
                    x,
                    { title: M },
                    E.createElement(g.a, { fetchStatus: e, onRequestRetry: this._handleRetry, render: j }),
                  )
                },
              },
              {
                key: '_redirectToProfileScreen',
                value: function (e) {
                  this.props.history.replace('/'.concat(e))
                },
              },
              {
                key: '_redirectToUserIntent',
                value: function (e) {
                  this.props.history.replace('/intent/user?screen_name='.concat(e))
                },
              },
            ]),
            r
          )
        })(E.Component)
      t.default = U(D)
    },
  },
])
//# sourceMappingURL=WIPED
