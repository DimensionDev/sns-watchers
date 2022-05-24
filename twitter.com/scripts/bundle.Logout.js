;(window.webpackJsonp = window.webpackJsonp || []).push([
  [66],
  {
    okjw: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'LogoutErrorScreen', function () {
          return U
        })
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('1Pcy'),
        l = n.n(i),
        s = n('5Yy7'),
        u = n.n(s),
        f = n('2VqO'),
        h = n.n(f),
        d = n('KEM+'),
        p = n.n(d),
        g = (n('2G9S'), n('7x/C'), n('JtPf'), n('Qavd'), n('KqXw'), n('MvUL'), n('ERkP')),
        y = n.n(g),
        E = n('KkUe'),
        L = n('5oBF'),
        v = n('rxPX'),
        A = n('0KEI'),
        w = Object(v.a)()
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(A.createLocalApiErrorHandlerWithContextFactory)('LOGOUT_ERROR_SCREEN'),
              logout: E.a,
              sendAllPreviews: L.g,
            }
          })
          .withAnalytics({ page: 'logout_error' }),
        m = n('kGix'),
        b = n('v//M'),
        O = n('3XMw'),
        S = n.n(O),
        _ = n('yoO3'),
        C = n('5FtR'),
        D = n('0zXz'),
        k = n('BTou'),
        x = n('feu+'),
        M = n('sgih'),
        R = S.a.ae1bbb26,
        F = S.a.a5077d3d,
        P = S.a.gc6866f7,
        T = S.a.c20aaf3d,
        H = S.a.c55f5c9a,
        U = (function (e) {
          u()(n, e)
          var t = h()(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              p()(l()(e), 'state', { fetchStatus: m.a.LOADED }),
              p()(l()(e), '_renderError', function () {
                return y.a.createElement(
                  _.a,
                  null,
                  y.a.createElement(x.a, {
                    actionLabel: F,
                    headline: T,
                    isFullHeightOnMobile: !0,
                    onAction: e._handleRefresh,
                    onClose: e._handleRefresh,
                    onSecondaryAction: e._handleLogout,
                    secondaryActionLabel: R,
                    subtext: H,
                    withCloseButton: !1,
                  }),
                )
              }),
              p()(l()(e), '_redirectToHome', function () {
                return y.a.createElement(C.a, { to: '/' })
              }),
              p()(l()(e), '_handleLogout', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler,
                  r = t.logout,
                  a = t.sendAllPreviews
                e.setState({ fetchStatus: m.a.LOADING }),
                  a().finally(function () {
                    r({ redirectAfterLogout: '/' }).catch(function (t) {
                      return e.setState({ fetchStatus: m.a.LOADED }), n({ showToast: !0 })(t)
                    })
                  })
              }),
              p()(l()(e), '_handleRefresh', function (e) {
                k.a.flushHTMLCache(), window.location.replace('/')
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.location,
                    t = this.state.fetchStatus
                  return t === m.a.LOADED
                    ? (e.state && e.state.error) || e.query.testing
                      ? this._renderError()
                      : this._redirectToHome()
                    : y.a.createElement(
                        M.a,
                        { type: 'full' },
                        y.a.createElement(b.a, {
                          fetchStatus: t,
                          loadingMessage: P,
                          onRequestRetry: this._handleLogout,
                          render: D.a,
                        }),
                      )
                },
              },
            ]),
            n
          )
        })(y.a.Component)
      t.default = w(U)
    },
    'x/Xu': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'LogoutScreen', function () {
          return q
        })
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('1Pcy'),
        l = n.n(i),
        s = n('5Yy7'),
        u = n.n(s),
        f = n('2VqO'),
        h = n.n(f),
        d = n('KEM+'),
        p = n.n(d),
        g = (n('2G9S'), n('7x/C'), n('JtPf'), n('Qavd'), n('ERkP')),
        y = n.n(g),
        E = n('KkUe'),
        L = n('5oBF'),
        v = n('G6rE'),
        A = n('rxPX'),
        w = n('0KEI'),
        m = Object(A.a)()
          .propsFromState(function () {
            return { loggedInUser: v.e.selectLoggedInUser }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)('LOGOUT_SCREEN'),
              logout: E.a,
              sendAllPreviews: L.g,
            }
          })
          .withAnalytics({ page: 'logout' }),
        b = n('kGix'),
        O = n('v//M'),
        S = n('3Wr5'),
        _ = n('3XMw'),
        C = n.n(_),
        D = n('lUZE'),
        k = n('8jkQ'),
        x = n('yoO3'),
        M = n('0zXz'),
        R = n('pxuL'),
        F = n('eb3s'),
        P = n('sgih'),
        T = n('rHpw'),
        H = C.a.a3fad4f2,
        U = C.a.f12b4db4,
        G = C.a.ae1bbb26,
        j = C.a.ia5ff8b6,
        B = C.a.ea3750c3,
        I = C.a.gc6866f7,
        X = function (e) {
          var t = e.query.redirect_after_logout
          return 'string' == typeof t ? t : Array.isArray(t) && 'string' == typeof t[0] ? t[0] : void 0
        },
        q = (function (e) {
          u()(n, e)
          var t = h()(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              p()(l()(e), 'state', { fetchStatus: b.a.LOADED }),
              p()(l()(e), '_render', function () {
                var t = e.props.loggedInUser,
                  n = Object(S.a)().hasMultiAccountCookie
                return y.a.createElement(
                  x.a,
                  null,
                  y.a.createElement(F.a, {
                    Icon: D.a,
                    allowBackNavigation: !0,
                    confirmButtonLabel: G,
                    confirmButtonType: 'primary',
                    enableMaskForDismiss: !0,
                    headline: n && t ? U({ screenName: t.screen_name }) : H,
                    iconStyle: K.icon,
                    onCancel: e._handleCancel,
                    onConfirm: e._handleLogout,
                    text: n ? B : j,
                  }),
                )
              }),
              p()(l()(e), '_handleLogout', function () {
                var t = Object(S.a)().hasMultiAccountCookie,
                  n = e.props,
                  r = n.createLocalApiErrorHandler,
                  a = n.location,
                  o = n.logout,
                  c = n.sendAllPreviews
                e.setState({ fetchStatus: b.a.LOADING })
                var i = X(a) || (t ? 'https://'.concat(window.location.host, '/account/switch') : void 0)
                c().finally(function () {
                  o({ redirectAfterLogout: i }).catch(function (t) {
                    return e.setState({ fetchStatus: b.a.LOADED }), r({ showToast: !0 })(t)
                  })
                })
              }),
              p()(l()(e), '_handleCancel', function () {
                var t = e.props,
                  n = t.history,
                  r = t.location,
                  a = X(r)
                a && k.b.isTwitterUrl(a) ? k.b.navigateTo(a) : n.goBack()
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this.context.incrementDmDrawerSuppressorCount()
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this.context.decrementDmDrawerSuppressorCount()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.state.fetchStatus
                  return e === b.a.LOADED
                    ? this._render()
                    : y.a.createElement(
                        P.a,
                        { type: 'full' },
                        y.a.createElement(O.a, {
                          fetchStatus: e,
                          loadingMessage: I,
                          onRequestRetry: this._handleLogout,
                          render: M.a,
                        }),
                      )
                },
              },
            ]),
            n
          )
        })(y.a.Component)
      p()(q, 'contextType', R.a)
      var K = T.a.create(function (e) {
          return { icon: { color: e.colors.brandColor, height: e.spaces.space40 } }
        }),
        N = m(q)
      t.default = N
    },
  },
])
//# sourceMappingURL=WIPED
