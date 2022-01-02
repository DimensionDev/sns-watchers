;(window.webpackJsonp = window.webpackJsonp || []).push([
  [63],
  {
    okjw: function (t, e, n) {
      'use strict'
      n.r(e),
        n.d(e, 'LogoutErrorScreen', function () {
          return F
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
        E = n('KkUe'),
        L = n('5oBF'),
        A = n('rxPX'),
        b = n('0KEI'),
        m = Object(A.a)()
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(b.createLocalApiErrorHandlerWithContextFactory)('LOGOUT_ERROR_SCREEN'),
              logout: E.a,
              sendAllPreviews: L.f,
            }
          })
          .withAnalytics({ page: 'logout_error' }),
        w = n('kGix'),
        O = n('v//M'),
        R = n('3XMw'),
        _ = n.n(R),
        S = n('yoO3'),
        C = n('5FtR'),
        D = n('BTou'),
        k = n('feu+'),
        x = n('sgih')
      function H(t) {
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
      var M = _.a.ae1bbb26,
        P = _.a.a5077d3d,
        B = _.a.gc6866f7,
        T = _.a.c20aaf3d,
        U = _.a.c55f5c9a,
        j = function () {
          return null
        },
        F = (function (t) {
          s()(n, t)
          var e = H(n)
          function n() {
            var t
            o()(this, n)
            for (var r = arguments.length, a = new Array(r), c = 0; c < r; c++) a[c] = arguments[c]
            return (
              (t = e.call.apply(e, [this].concat(a))),
              g()(u()(t), 'state', { fetchStatus: w.a.LOADED }),
              g()(u()(t), '_renderError', function () {
                return v.createElement(
                  S.a,
                  null,
                  v.createElement(k.a, {
                    actionLabel: P,
                    headline: T,
                    isFullHeightOnMobile: !0,
                    onAction: t._handleRefresh,
                    onClose: t._handleRefresh,
                    onSecondaryAction: t._handleLogout,
                    secondaryActionLabel: M,
                    subtext: U,
                    withCloseButton: !1,
                  }),
                )
              }),
              g()(u()(t), '_redirectToHome', function () {
                return v.createElement(C.a, { to: '/' })
              }),
              g()(u()(t), '_handleLogout', function () {
                var e = t.props,
                  n = e.createLocalApiErrorHandler,
                  r = e.logout,
                  o = e.sendAllPreviews
                t.setState({ fetchStatus: w.a.LOADING }),
                  o().finally(function () {
                    r({ redirectAfterLogout: '/' }).catch(function (e) {
                      return t.setState({ fetchStatus: w.a.LOADED }), n({ showToast: !0 })(e)
                    })
                  })
              }),
              g()(u()(t), '_handleRefresh', function (t) {
                D.a.flushHTMLCache(), window.location.replace('/')
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
                  return e === w.a.LOADED
                    ? (t.state && t.state.error) || t.query.testing
                      ? this._renderError()
                      : this._redirectToHome()
                    : v.createElement(
                        x.a,
                        { type: 'full' },
                        v.createElement(O.a, {
                          fetchStatus: e,
                          loadingMessage: B,
                          onRequestRetry: this._handleLogout,
                          render: j,
                        }),
                      )
                },
              },
            ]),
            n
          )
        })(v.Component)
      e.default = m(F)
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
        E = n('hqKg'),
        L = n('KkUe'),
        A = n('5oBF'),
        b = n('G6rE'),
        m = n('0KEI'),
        w = n('oEGd'),
        O = Object(E.createSelector)(b.e.selectLoggedInUser, function (t) {
          return { loggedInUser: t }
        }),
        R = {
          createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)('LOGOUT_SCREEN'),
          logout: L.a,
          sendAllPreviews: A.f,
        },
        _ = Object(w.g)(O, R),
        S = n('kGix'),
        C = n('v//M'),
        D = n('3Wr5'),
        k = n('3XMw'),
        x = n.n(k),
        H = n('lUZE'),
        M = n('8jkQ'),
        P = n('yoO3'),
        B = n('pxuL'),
        T = n('eb3s'),
        U = n('sgih'),
        j = n('rHpw'),
        F = n('7JQg')
      function G(t) {
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
      var I = x.a.a3fad4f2,
        K = x.a.f12b4db4,
        N = x.a.ae1bbb26,
        J = x.a.ia5ff8b6,
        q = x.a.ea3750c3,
        X = x.a.gc6866f7,
        Q = function () {
          return null
        },
        W = function (t) {
          var e = t.query.redirect_after_logout
          return 'string' == typeof e ? e : Array.isArray(e) && 'string' == typeof e[0] ? e[0] : void 0
        },
        Y = (function (t) {
          s()(n, t)
          var e = G(n)
          function n() {
            var t
            o()(this, n)
            for (var r = arguments.length, a = new Array(r), c = 0; c < r; c++) a[c] = arguments[c]
            return (
              (t = e.call.apply(e, [this].concat(a))),
              g()(u()(t), 'state', { fetchStatus: S.a.LOADED }),
              g()(u()(t), '_render', function () {
                var e = t.props.loggedInUser,
                  n = Object(D.a)().hasMultiAccountCookie
                return v.createElement(
                  P.a,
                  null,
                  v.createElement(T.a, {
                    Icon: H.a,
                    allowBackNavigation: !0,
                    confirmButtonLabel: N,
                    confirmButtonType: 'primary',
                    enableMaskForDismiss: !0,
                    headline: n && e ? K({ screenName: e.screen_name }) : I,
                    iconStyle: Z.icon,
                    onCancel: t._handleCancel,
                    onConfirm: t._handleLogout,
                    text: n ? q : J,
                  }),
                )
              }),
              g()(u()(t), '_handleLogout', function () {
                var e = Object(D.a)().hasMultiAccountCookie,
                  n = t.props,
                  r = n.createLocalApiErrorHandler,
                  o = n.location,
                  a = n.logout,
                  c = n.sendAllPreviews
                t.setState({ fetchStatus: S.a.LOADING })
                var i = W(o) || (e ? 'https://'.concat(window.location.host, '/account/switch') : void 0)
                c().finally(function () {
                  a({ redirectAfterLogout: i }).catch(function (e) {
                    return t.setState({ fetchStatus: S.a.LOADED }), r({ showToast: !0 })(e)
                  })
                })
              }),
              g()(u()(t), '_handleCancel', function () {
                var e = t.props,
                  n = e.history,
                  r = e.location,
                  o = W(r)
                o && M.b.isTwitterUrl(o) ? M.b.navigateTo(o) : n.goBack()
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
                  return t === S.a.LOADED
                    ? this._render()
                    : v.createElement(
                        U.a,
                        { type: 'full' },
                        v.createElement(C.a, {
                          fetchStatus: t,
                          loadingMessage: X,
                          onRequestRetry: this._handleLogout,
                          render: Q,
                        }),
                      )
                },
              },
            ]),
            n
          )
        })(v.Component)
      g()(Y, 'contextType', B.a)
      var Z = j.a.create(function (t) {
        return { icon: { color: t.colors.brandColor, height: t.spaces.space40 } }
      })
      e.default = Object(F.c)({ page: 'logout' })(_(Y))
    },
  },
])
//# sourceMappingURL=WIPED
