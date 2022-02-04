;(window.webpackJsonp = window.webpackJsonp || []).push([
  [111],
  {
    rFDg: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'UserRedirectScreen', function () {
          return j
        })
      var n,
        o = r('VrFO'),
        c = r.n(o),
        a = r('Y9Ll'),
        i = r.n(a),
        u = r('1Pcy'),
        s = r.n(u),
        d = r('5Yy7'),
        l = r.n(d),
        f = r('2VqO'),
        h = r.n(f),
        p = r('KEM+'),
        m = r.n(p),
        y = (r('2G9S'), r('KqXw'), r('MvUL'), r('ERkP')),
        v = r.n(y),
        E = (r('WNMA'), r('G6rE')),
        w = r('rxPX'),
        I = r('0KEI'),
        S = function (e, t) {
          var r
          return null === (r = t.match) || void 0 === r ? void 0 : r.params.userId
        },
        _ = function (e, t) {
          return E.e.select(e, S(0, t))
        },
        A = function (e, t) {
          return E.e.selectFetchStatus(e, S(0, t))
        },
        U = Object(w.a)()
          .propsFromState(function () {
            return { fetchStatus: A, user: _, userId: S }
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
              fetchUserIfNeeded: E.e.fetchOneIfNeeded,
            }
          })
          .withAnalytics({ page: 'user_redirect' }),
        L = r('k49u'),
        R = r('LVU8'),
        k =
          ((n = {}),
          m()(n, L.a.AddressBookLookupNotFound, { customAction: R.c }),
          m()(n, L.a.GenericUserNotFound, { customAction: R.c }),
          m()(n, L.a.OtherUserSuspended, { customAction: R.c }),
          m()(n, 'showToast', !0),
          n),
        N = r('v//M'),
        g = r('7JQg'),
        T = r('yoO3'),
        C = r('wiP2'),
        F = r('MWbm'),
        O = r('mw9i'),
        b = r('rHpw').a.create(function (e) {
          return { flexGrow: { flexGrow: 1 } }
        }),
        G = Object(g.c)()(function (e) {
          var t = e.children,
            r = e.containerStyle,
            n = e.documentTitle,
            o = e.onLayout,
            c = e.renderHeader,
            a = e.rightControl,
            i = e.title
          return v.a.createElement(
            T.a,
            null,
            v.a.createElement(
              F.a,
              { onLayout: o, style: b.flexGrow },
              c
                ? v.a.createElement(C.a.Configure, { documentTitle: n, headerless: !0 }, c())
                : v.a.createElement(C.a.Configure, { backLocation: '/', documentTitle: n, rightControl: a, title: i }),
              v.a.createElement(O.a, { style: [b.flexGrow, r] }, t),
            ),
          )
        }),
        M = r('3XMw'),
        P = r.n(M),
        x = r('0zXz'),
        H = P.a.fa98627a,
        j = (function (e) {
          l()(r, e)
          var t = h()(r)
          function r() {
            var e
            c()(this, r)
            for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++) o[a] = arguments[a]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              m()(s()(e), 'fetchAndRedirectIfNeeded', function () {
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
              m()(s()(e), '_handleRetry', function () {
                e._handleLoadUser()
              }),
              m()(s()(e), '_handleLoadUser', function () {
                var t = e.props,
                  r = t.createLocalApiErrorHandler
                ;(0, t.fetchUserIfNeeded)(t.userId).catch(r(k))
              }),
              e
            )
          }
          return (
            i()(r, [
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
                  return v.a.createElement(
                    G,
                    { title: H },
                    v.a.createElement(N.a, { fetchStatus: e, onRequestRetry: this._handleRetry, render: x.a }),
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
        })(v.a.Component)
      t.default = U(j)
    },
  },
])
//# sourceMappingURL=WIPED
