;(window.webpackJsonp = window.webpackJsonp || []).push([
  [63],
  {
    okjw: function (t, e, n) {
      'use strict'
      n.r(e),
        n.d(e, 'LogoutErrorScreen', function () {
          return G
        })
      n('OZaJ')
      var r = n('VrFO'),
        o = n.n(r),
        a = n('Y9Ll'),
        c = n.n(a),
        i = n('1Pcy'),
        u = n.n(i),
        l = n('5Yy7'),
        s = n.n(l),
        f = n('N+ot'),
        h = n.n(f),
        d = n('AuHH'),
        p = n.n(d),
        y = n('KEM+'),
        g = n.n(y),
        v = (n('2G9S'), n('Qavd'), n('JtPf'), n('7x/C'), n('MvUL'), n('KqXw'), n('ERkP')),
        E = n.n(v),
        L = n('KkUe'),
        A = n('5oBF'),
        b = n('rxPX'),
        m = n('0KEI'),
        w = Object(b.a)()
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)('LOGOUT_ERROR_SCREEN'),
              logout: L.a,
              sendAllPreviews: A.f,
            }
          })
          .withAnalytics({ page: 'logout_error' }),
        O = n('kGix'),
        R = n('v//M'),
        _ = n('3XMw'),
        S = n.n(_),
        C = n('yoO3'),
        D = n('5FtR'),
        k = n('BTou'),
        x = n('feu+'),
        H = n('sgih')
      function M(t) {
        var e = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (t) {
            return !1
          }
        })()
        return function () {
          var n,
            r = p()(t)
          if (e) {
            var o = p()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      var P = S.a.ae1bbb26,
        B = S.a.a5077d3d,
        T = S.a.gc6866f7,
        U = S.a.c20aaf3d,
        j = S.a.c55f5c9a,
        F = function () {
          return null
        },
        G = (function (t) {
          s()(n, t)
          var e = M(n)
          function n() {
            var t
            o()(this, n)
            for (var r = arguments.length, a = new Array(r), c = 0; c < r; c++) a[c] = arguments[c]
            return (
              (t = e.call.apply(e, [this].concat(a))),
              g()(u()(t), 'state', { fetchStatus: O.a.LOADED }),
              g()(u()(t), '_renderError', function () {
                return E.a.createElement(
                  C.a,
                  null,
                  E.a.createElement(x.a, {
                    actionLabel: B,
                    headline: U,
                    isFullHeightOnMobile: !0,
                    onAction: t._handleRefresh,
                    onClose: t._handleRefresh,
                    onSecondaryAction: t._handleLogout,
                    secondaryActionLabel: P,
                    subtext: j,
                    withCloseButton: !1,
                  }),
                )
              }),
              g()(u()(t), '_redirectToHome', function () {
                return E.a.createElement(D.a, { to: '/' })
              }),
              g()(u()(t), '_handleLogout', function () {
                var e = t.props,
                  n = e.createLocalApiErrorHandler,
                  r = e.logout,
                  o = e.sendAllPreviews
                t.setState({ fetchStatus: O.a.LOADING }),
                  o().finally(function () {
                    r({ redirectAfterLogout: '/' }).catch(function (e) {
                      return t.setState({ fetchStatus: O.a.LOADED }), n({ showToast: !0 })(e)
                    })
                  })
              }),
              g()(u()(t), '_handleRefresh', function (t) {
                k.a.flushHTMLCache(), window.location.replace('/')
              }),
              t
            )
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var t = this.props.location,
                    e = this.state.fetchStatus
                  return e === O.a.LOADED
                    ? (t.state && t.state.error) || t.query.testing
                      ? this._renderError()
                      : this._redirectToHome()
                    : E.a.createElement(
                        H.a,
                        { type: 'full' },
                        E.a.createElement(R.a, {
                          fetchStatus: e,
                          loadingMessage: T,
                          onRequestRetry: this._handleLogout,
                          render: F,
                        }),
                      )
                },
              },
            ]),
            n
          )
        })(E.a.Component)
      e.default = w(G)
    },
    'x/Xu': function (t, e, n) {
      'use strict'
      n.r(e),
        n.d(e, 'LogoutScreen', function () {
          return Z
        })
      n('OZaJ')
      var r = n('VrFO'),
        o = n.n(r),
        a = n('Y9Ll'),
        c = n.n(a),
        i = n('1Pcy'),
        u = n.n(i),
        l = n('5Yy7'),
        s = n.n(l),
        f = n('N+ot'),
        h = n.n(f),
        d = n('AuHH'),
        p = n.n(d),
        y = n('KEM+'),
        g = n.n(y),
        v = (n('2G9S'), n('Qavd'), n('JtPf'), n('7x/C'), n('ERkP')),
        E = n.n(v),
        L = n('hqKg'),
        A = n('KkUe'),
        b = n('5oBF'),
        m = n('G6rE'),
        w = n('0KEI'),
        O = n('oEGd'),
        R = Object(L.createSelector)(m.e.selectLoggedInUser, function (t) {
          return { loggedInUser: t }
        }),
        _ = {
          createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)('LOGOUT_SCREEN'),
          logout: A.a,
          sendAllPreviews: b.f,
        },
        S = Object(O.g)(R, _),
        C = n('kGix'),
        D = n('v//M'),
        k = n('3Wr5'),
        x = n('3XMw'),
        H = n.n(x),
        M = n('lUZE'),
        P = n('8jkQ'),
        B = n('yoO3'),
        T = n('pxuL'),
        U = n('eb3s'),
        j = n('sgih'),
        F = n('rHpw'),
        G = n('7JQg')
      function I(t) {
        var e = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (t) {
            return !1
          }
        })()
        return function () {
          var n,
            r = p()(t)
          if (e) {
            var o = p()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      var K = H.a.a3fad4f2,
        N = H.a.f12b4db4,
        J = H.a.ae1bbb26,
        q = H.a.ia5ff8b6,
        X = H.a.ea3750c3,
        Q = H.a.gc6866f7,
        W = function () {
          return null
        },
        Y = function (t) {
          var e = t.query.redirect_after_logout
          return 'string' == typeof e ? e : Array.isArray(e) && 'string' == typeof e[0] ? e[0] : void 0
        },
        Z = (function (t) {
          s()(n, t)
          var e = I(n)
          function n() {
            var t
            o()(this, n)
            for (var r = arguments.length, a = new Array(r), c = 0; c < r; c++) a[c] = arguments[c]
            return (
              (t = e.call.apply(e, [this].concat(a))),
              g()(u()(t), 'state', { fetchStatus: C.a.LOADED }),
              g()(u()(t), '_render', function () {
                var e = t.props.loggedInUser,
                  n = Object(k.a)().hasMultiAccountCookie
                return E.a.createElement(
                  B.a,
                  null,
                  E.a.createElement(U.a, {
                    Icon: M.a,
                    allowBackNavigation: !0,
                    confirmButtonLabel: J,
                    confirmButtonType: 'primary',
                    enableMaskForDismiss: !0,
                    headline: n && e ? N({ screenName: e.screen_name }) : K,
                    iconStyle: V.icon,
                    onCancel: t._handleCancel,
                    onConfirm: t._handleLogout,
                    text: n ? X : q,
                  }),
                )
              }),
              g()(u()(t), '_handleLogout', function () {
                var e = Object(k.a)().hasMultiAccountCookie,
                  n = t.props,
                  r = n.createLocalApiErrorHandler,
                  o = n.location,
                  a = n.logout,
                  c = n.sendAllPreviews
                t.setState({ fetchStatus: C.a.LOADING })
                var i = Y(o) || (e ? 'https://'.concat(window.location.host, '/account/switch') : void 0)
                c().finally(function () {
                  a({ redirectAfterLogout: i }).catch(function (e) {
                    return t.setState({ fetchStatus: C.a.LOADED }), r({ showToast: !0 })(e)
                  })
                })
              }),
              g()(u()(t), '_handleCancel', function () {
                var e = t.props,
                  n = e.history,
                  r = e.location,
                  o = Y(r)
                o && P.b.isTwitterUrl(o) ? P.b.navigateTo(o) : n.goBack()
              }),
              t
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
                  var t = this.state.fetchStatus
                  return t === C.a.LOADED
                    ? this._render()
                    : E.a.createElement(
                        j.a,
                        { type: 'full' },
                        E.a.createElement(D.a, {
                          fetchStatus: t,
                          loadingMessage: Q,
                          onRequestRetry: this._handleLogout,
                          render: W,
                        }),
                      )
                },
              },
            ]),
            n
          )
        })(E.a.Component)
      g()(Z, 'contextType', T.a)
      var V = F.a.create(function (t) {
        return { icon: { color: t.colors.brandColor, height: t.spaces.space40 } }
      })
      e.default = Object(G.c)({ page: 'logout' })(S(Z))
    },
  },
])
//# sourceMappingURL=WIPED
