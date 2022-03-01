;(window.webpackJsonp = window.webpackJsonp || []).push([
  [66],
  {
    okjw: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'LogoutErrorScreen', function () {
          return j
        })
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('1Pcy'),
        l = n.n(i),
        u = n('5Yy7'),
        s = n.n(u),
        f = n('2VqO'),
        h = n.n(f),
        d = n('KEM+'),
        g = n.n(d),
        p = (n('2G9S'), n('7x/C'), n('JtPf'), n('Qavd'), n('KqXw'), n('MvUL'), n('ERkP')),
        E = n.n(p),
        y = n('KkUe'),
        L = n('5oBF'),
        v = n('rxPX'),
        b = n('0KEI'),
        A = Object(v.a)()
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(b.createLocalApiErrorHandlerWithContextFactory)('LOGOUT_ERROR_SCREEN'),
              logout: y.a,
              sendAllPreviews: L.g,
            }
          })
          .withAnalytics({ page: 'logout_error' }),
        w = n('kGix'),
        m = n('v//M'),
        O = n('3XMw'),
        _ = n.n(O),
        S = n('yoO3'),
        C = n('5FtR'),
        D = n('0zXz'),
        k = n('BTou'),
        M = n('feu+'),
        R = n('sgih'),
        x = _.a.ae1bbb26,
        T = _.a.a5077d3d,
        H = _.a.gc6866f7,
        P = _.a.c20aaf3d,
        U = _.a.c55f5c9a,
        j = (function (e) {
          s()(n, e)
          var t = h()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), c = 0; c < a; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              g()(l()(e), 'state', { fetchStatus: w.a.LOADED }),
              g()(l()(e), '_renderError', function () {
                return E.a.createElement(
                  S.a,
                  null,
                  E.a.createElement(M.a, {
                    actionLabel: T,
                    headline: P,
                    isFullHeightOnMobile: !0,
                    onAction: e._handleRefresh,
                    onClose: e._handleRefresh,
                    onSecondaryAction: e._handleLogout,
                    secondaryActionLabel: x,
                    subtext: U,
                    withCloseButton: !1,
                  }),
                )
              }),
              g()(l()(e), '_redirectToHome', function () {
                return E.a.createElement(C.a, { to: '/' })
              }),
              g()(l()(e), '_handleLogout', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler,
                  a = t.logout,
                  r = t.sendAllPreviews
                e.setState({ fetchStatus: w.a.LOADING }),
                  r().finally(function () {
                    a({ redirectAfterLogout: '/' }).catch(function (t) {
                      return e.setState({ fetchStatus: w.a.LOADED }), n({ showToast: !0 })(t)
                    })
                  })
              }),
              g()(l()(e), '_handleRefresh', function (e) {
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
                  return t === w.a.LOADED
                    ? (e.state && e.state.error) || e.query.testing
                      ? this._renderError()
                      : this._redirectToHome()
                    : E.a.createElement(
                        R.a,
                        { type: 'full' },
                        E.a.createElement(m.a, {
                          fetchStatus: t,
                          loadingMessage: H,
                          onRequestRetry: this._handleLogout,
                          render: D.a,
                        }),
                      )
                },
              },
            ]),
            n
          )
        })(E.a.Component)
      t.default = A(j)
    },
    'x/Xu': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'LogoutScreen', function () {
          return z
        })
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('1Pcy'),
        l = n.n(i),
        u = n('5Yy7'),
        s = n.n(u),
        f = n('2VqO'),
        h = n.n(f),
        d = n('KEM+'),
        g = n.n(d),
        p = (n('2G9S'), n('7x/C'), n('JtPf'), n('Qavd'), n('ERkP')),
        E = n.n(p),
        y = n('hqKg'),
        L = n('KkUe'),
        v = n('5oBF'),
        b = n('G6rE'),
        A = n('0KEI'),
        w = n('oEGd'),
        m = Object(y.createSelector)(b.e.selectLoggedInUser, function (e) {
          return { loggedInUser: e }
        }),
        O = {
          createLocalApiErrorHandler: Object(A.createLocalApiErrorHandlerWithContextFactory)('LOGOUT_SCREEN'),
          logout: L.a,
          sendAllPreviews: v.g,
        },
        _ = Object(w.g)(m, O),
        S = n('kGix'),
        C = n('v//M'),
        D = n('3Wr5'),
        k = n('3XMw'),
        M = n.n(k),
        R = n('lUZE'),
        x = n('8jkQ'),
        T = n('yoO3'),
        H = n('0zXz'),
        P = n('pxuL'),
        U = n('eb3s'),
        j = n('sgih'),
        F = n('rHpw'),
        G = n('7JQg'),
        I = M.a.a3fad4f2,
        q = M.a.f12b4db4,
        B = M.a.ae1bbb26,
        K = M.a.ia5ff8b6,
        X = M.a.ea3750c3,
        N = M.a.gc6866f7,
        J = function (e) {
          var t = e.query.redirect_after_logout
          return 'string' == typeof t ? t : Array.isArray(t) && 'string' == typeof t[0] ? t[0] : void 0
        },
        z = (function (e) {
          s()(n, e)
          var t = h()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), c = 0; c < a; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              g()(l()(e), 'state', { fetchStatus: S.a.LOADED }),
              g()(l()(e), '_render', function () {
                var t = e.props.loggedInUser,
                  n = Object(D.a)().hasMultiAccountCookie
                return E.a.createElement(
                  T.a,
                  null,
                  E.a.createElement(U.a, {
                    Icon: R.a,
                    allowBackNavigation: !0,
                    confirmButtonLabel: B,
                    confirmButtonType: 'primary',
                    enableMaskForDismiss: !0,
                    headline: n && t ? q({ screenName: t.screen_name }) : I,
                    iconStyle: Q.icon,
                    onCancel: e._handleCancel,
                    onConfirm: e._handleLogout,
                    text: n ? X : K,
                  }),
                )
              }),
              g()(l()(e), '_handleLogout', function () {
                var t = Object(D.a)().hasMultiAccountCookie,
                  n = e.props,
                  a = n.createLocalApiErrorHandler,
                  r = n.location,
                  o = n.logout,
                  c = n.sendAllPreviews
                e.setState({ fetchStatus: S.a.LOADING })
                var i = J(r) || (t ? 'https://'.concat(window.location.host, '/account/switch') : void 0)
                c().finally(function () {
                  o({ redirectAfterLogout: i }).catch(function (t) {
                    return e.setState({ fetchStatus: S.a.LOADED }), a({ showToast: !0 })(t)
                  })
                })
              }),
              g()(l()(e), '_handleCancel', function () {
                var t = e.props,
                  n = t.history,
                  a = t.location,
                  r = J(a)
                r && x.b.isTwitterUrl(r) ? x.b.navigateTo(r) : n.goBack()
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this.context.incrementDmDrawerInhibitorCount()
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this.context.decrementDmDrawerInhibitorCount()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.state.fetchStatus
                  return e === S.a.LOADED
                    ? this._render()
                    : E.a.createElement(
                        j.a,
                        { type: 'full' },
                        E.a.createElement(C.a, {
                          fetchStatus: e,
                          loadingMessage: N,
                          onRequestRetry: this._handleLogout,
                          render: H.a,
                        }),
                      )
                },
              },
            ]),
            n
          )
        })(E.a.Component)
      g()(z, 'contextType', P.a)
      var Q = F.a.create(function (e) {
        return { icon: { color: e.colors.brandColor, height: e.spaces.space40 } }
      })
      t.default = Object(G.a)({ page: 'logout' })(_(z))
    },
  },
])
//# sourceMappingURL=WIPED
