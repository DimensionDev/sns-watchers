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
        k = n('0zXz'),
        x = n('BTou'),
        H = n('feu+'),
        M = n('sgih')
      function P(t) {
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
      var B = S.a.ae1bbb26,
        T = S.a.a5077d3d,
        U = S.a.gc6866f7,
        j = S.a.c20aaf3d,
        F = S.a.c55f5c9a,
        G = (function (t) {
          s()(n, t)
          var e = P(n)
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
                  E.a.createElement(H.a, {
                    actionLabel: T,
                    headline: j,
                    isFullHeightOnMobile: !0,
                    onAction: t._handleRefresh,
                    onClose: t._handleRefresh,
                    onSecondaryAction: t._handleLogout,
                    secondaryActionLabel: B,
                    subtext: F,
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
                x.a.flushHTMLCache(), window.location.replace('/')
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
                        M.a,
                        { type: 'full' },
                        E.a.createElement(R.a, {
                          fetchStatus: e,
                          loadingMessage: U,
                          onRequestRetry: this._handleLogout,
                          render: k.a,
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
          return Y
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
        T = n('0zXz'),
        U = n('pxuL'),
        j = n('eb3s'),
        F = n('sgih'),
        G = n('rHpw'),
        I = n('7JQg')
      function K(t) {
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
      var N = H.a.a3fad4f2,
        J = H.a.f12b4db4,
        X = H.a.ae1bbb26,
        q = H.a.ia5ff8b6,
        z = H.a.ea3750c3,
        Q = H.a.gc6866f7,
        W = function (t) {
          var e = t.query.redirect_after_logout
          return 'string' == typeof e ? e : Array.isArray(e) && 'string' == typeof e[0] ? e[0] : void 0
        },
        Y = (function (t) {
          s()(n, t)
          var e = K(n)
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
                  E.a.createElement(j.a, {
                    Icon: M.a,
                    allowBackNavigation: !0,
                    confirmButtonLabel: X,
                    confirmButtonType: 'primary',
                    enableMaskForDismiss: !0,
                    headline: n && e ? J({ screenName: e.screen_name }) : N,
                    iconStyle: Z.icon,
                    onCancel: t._handleCancel,
                    onConfirm: t._handleLogout,
                    text: n ? z : q,
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
                var i = W(o) || (e ? 'https://'.concat(window.location.host, '/account/switch') : void 0)
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
                  o = W(r)
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
                        F.a,
                        { type: 'full' },
                        E.a.createElement(D.a, {
                          fetchStatus: t,
                          loadingMessage: Q,
                          onRequestRetry: this._handleLogout,
                          render: T.a,
                        }),
                      )
                },
              },
            ]),
            n
          )
        })(E.a.Component)
      g()(Y, 'contextType', U.a)
      var Z = G.a.create(function (t) {
        return { icon: { color: t.colors.brandColor, height: t.spaces.space40 } }
      })
      e.default = Object(I.c)({ page: 'logout' })(S(Y))
    },
  },
])
//# sourceMappingURL=WIPED
