;(window.webpackJsonp = window.webpackJsonp || []).push([
  [109],
  {
    rFDg: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'UserRedirectScreen', function () {
          return J
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
        w = r.n(E),
        R = (r('WNMA'), r('G6rE')),
        I = r('rxPX'),
        S = r('0KEI'),
        A = function (e, t) {
          var r
          return null === (r = t.match) || void 0 === r ? void 0 : r.params.userId
        },
        _ = function (e, t) {
          return R.e.select(e, A(0, t))
        },
        U = function (e, t) {
          return R.e.selectFetchStatus(e, A(0, t))
        },
        L = Object(I.a)()
          .propsFromState(function () {
            return { fetchStatus: U, user: _, userId: A }
          })
          .adjustStateProps(function (e) {
            var t = e.fetchStatus,
              r = e.user,
              n = e.userId
            return { fetchStatus: t, screenName: null == r ? void 0 : r.screen_name, userId: n }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(S.createLocalApiErrorHandlerWithContextFactory)(
                'USER_REDIRECT_SCREEN',
              ),
              fetchUserIfNeeded: R.e.fetchOneIfNeeded,
            }
          })
          .withAnalytics({ page: 'user_redirect' }),
        N = r('k49u'),
        k = r('LVU8'),
        g =
          ((n = {}),
          v()(n, N.a.AddressBookLookupNotFound, { customAction: k.c }),
          v()(n, N.a.GenericUserNotFound, { customAction: k.c }),
          v()(n, N.a.OtherUserSuspended, { customAction: k.c }),
          v()(n, 'showToast', !0),
          n),
        O = r('v//M'),
        T = r('7JQg'),
        C = r('yoO3'),
        F = r('wiP2'),
        P = r('MWbm'),
        b = r('mw9i'),
        x = r('rHpw').a.create(function (e) {
          return { flexGrow: { flexGrow: 1 } }
        }),
        G = Object(T.c)()(function (e) {
          var t = e.children,
            r = e.containerStyle,
            n = e.documentTitle,
            o = e.onLayout,
            c = e.renderHeader,
            a = e.rightControl,
            u = e.title
          return w.a.createElement(
            C.a,
            null,
            w.a.createElement(
              P.a,
              { onLayout: o, style: x.flexGrow },
              c
                ? w.a.createElement(F.a.Configure, { documentTitle: n, headerless: !0 }, c())
                : w.a.createElement(F.a.Configure, { backLocation: '/', documentTitle: n, rightControl: a, title: u }),
              w.a.createElement(b.a, { style: [x.flexGrow, r] }, t),
            ),
          )
        }),
        H = r('3XMw')
      function M(e) {
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
      var j = r.n(H).a.fa98627a,
        D = function () {
          return null
        },
        J = (function (e) {
          d()(r, e)
          var t = M(r)
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
                ;(0, t.fetchUserIfNeeded)(t.userId).catch(r(g))
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
                  return w.a.createElement(
                    G,
                    { title: j },
                    w.a.createElement(O.a, { fetchStatus: e, onRequestRetry: this._handleRetry, render: D }),
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
        })(w.a.Component)
      t.default = L(J)
    },
  },
])
//# sourceMappingURL=WIPED
