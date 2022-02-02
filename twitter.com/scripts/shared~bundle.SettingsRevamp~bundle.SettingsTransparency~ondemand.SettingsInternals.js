;(window.webpackJsonp = window.webpackJsonp || []).push([
  [11],
  {
    '55TG': function (t, e, r) {
      'use strict'
      r.d(e, 'a', function () {
        return m
      }),
        r.d(e, 'b', function () {
          return b
        })
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        o = r.n(n),
        a = (r('2G9S'), r('kGix')),
        i = r('XMGw'),
        c = r('Ssj5'),
        l = r('oEOe')
      function s(t, e) {
        var r = Object.keys(t)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t)
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function u(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {}
          e % 2
            ? s(Object(r), !0).forEach(function (e) {
                o()(t, e, r[e])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : s(Object(r)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
              })
        }
        return t
      }
      var d = 'verifyPassword',
        p = 'rweb/'.concat(i.a, '/').concat(d),
        f = Object(l.a)(p, 'VERIFY_PASSWORD'),
        h = { fetchStatus: a.a.NONE }
      c.a.register(
        o()({}, d, function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          switch (e.type) {
            case f.REQUEST:
              return u(u({}, t), {}, { fetchStatus: a.a.LOADING })
            case f.SUCCESS:
              return u(u({}, t), {}, { fetchStatus: a.a.LOADED })
            case f.FAILURE:
              return u(u({}, t), {}, { error: e.payload, fetchStatus: a.a.FAILED })
            default:
              return t
          }
        }),
      )
      var m = function (t) {
          return t.verifyPassword.fetchStatus
        },
        b = function (t) {
          return function (e, r, n) {
            var o = n.api
            return Object(l.b)(e, { params: { password: t }, request: o.Settings.verifyPassword })({
              actionTypes: f,
              context: 'VERIFY_PASSWORD',
            })
          }
        }
    },
    '7FtF': function (t, e, r) {
      'use strict'
      r('OZaJ')
      var n = r('VrFO'),
        o = r.n(n),
        a = r('Y9Ll'),
        i = r.n(a),
        c = r('1Pcy'),
        l = r.n(c),
        s = r('5Yy7'),
        u = r.n(s),
        d = r('N+ot'),
        p = r.n(d),
        f = r('AuHH'),
        h = r.n(f),
        m = r('KEM+'),
        b = r.n(m),
        y = (r('2G9S'), r('ERkP')),
        v = r.n(y),
        w = r('P1r1'),
        g = r('G6rE'),
        O = r('rxPX'),
        E = r('0KEI'),
        S = Object(O.a)()
          .propsFromState(function () {
            return { fetchStatus: w.o, loggedInUser: g.e.selectLoggedInUser }
          })
          .propsFromActions(function () {
            return {
              fetchSettingsIfNeeded: w.f,
              createLocalApiErrorHandler: Object(E.createLocalApiErrorHandlerWithContextFactory)('SETTINGS_LOADER'),
            }
          }),
        B = r('v//M'),
        C = r('3XMw'),
        P = r.n(C),
        k = r('M2mT'),
        D = 'settingsDetailSave',
        R = r('mw9i'),
        _ = r('0yYu'),
        j = r('/yvb'),
        x = r('rHpw')
      function L(t) {
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
          var r,
            n = h()(t)
          if (e) {
            var o = h()(this).constructor
            r = Reflect.construct(n, arguments, o)
          } else r = n.apply(this, arguments)
          return p()(this, r)
        }
      }
      var F = P.a.i2209530,
        H = (function (t) {
          u()(r, t)
          var e = L(r)
          function r() {
            var t
            o()(this, r)
            for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++) a[i] = arguments[i]
            return (
              (t = e.call.apply(e, [this].concat(a))),
              b()(l()(t), '_renderWithFetchSettings', function () {
                var e = t.props.fetchStatus
                return v.a.createElement(B.a, { fetchStatus: e, onRequestRetry: t._handleFetch, render: t._render })
              }),
              b()(l()(t), '_render', function () {
                var e = t.props,
                  r = e.children,
                  n = e.onSubmit,
                  o = e.submitDisabled,
                  a = e.submitLabel,
                  i = e.submitType,
                  c = e.withMarginBottom
                return v.a.createElement(
                  R.a,
                  { style: [T.contentRoot, c && T.withMarginBottom] },
                  r,
                  n
                    ? v.a.createElement(
                        v.a.Fragment,
                        null,
                        v.a.createElement(_.a, null),
                        v.a.createElement(
                          R.a,
                          { style: T.buttonContainer },
                          v.a.createElement(j.a, { disabled: o, onPress: n, style: T.button, testID: D, type: i }, a),
                        ),
                      )
                    : null,
                )
              }),
              b()(l()(t), '_handleFetch', function () {
                var e = t.props,
                  r = e.createLocalApiErrorHandler
                ;(0, e.fetchSettingsIfNeeded)().catch(r())
              }),
              t
            )
          }
          return (
            i()(r, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._handleFetch()
                },
              },
              {
                key: 'getBackLocation',
                value: function () {
                  var t = this.props,
                    e = t.location,
                    r = t.loggedInUser ? '/settings' : '/settings/account/personalization'
                  return e && e.pathname === r ? '/' : r
                },
              },
              {
                key: 'render',
                value: function () {
                  var t = this.props,
                    e = t.loggedInUser,
                    r = t.onBackClick,
                    n = t.rightControl,
                    o = t.screenType,
                    a = t.secondaryBar,
                    i = t.title,
                    c = t.withBottomBorder,
                    l = this.getBackLocation(),
                    s = e ? '@'.concat(e.screen_name) : void 0
                  return v.a.createElement(
                    k.a,
                    {
                      backLocation: l,
                      onBackClick: r,
                      rightControl: n,
                      screenType: o,
                      secondaryBar: a,
                      showSubtitleOnWideDetail: !1,
                      subtitle: s,
                      title: i,
                      withBottomBorder: c,
                    },
                    e ? this._renderWithFetchSettings() : this._render(),
                  )
                },
              },
            ]),
            r
          )
        })(v.a.Component)
      b()(H, 'defaultProps', { submitLabel: F, submitType: 'brandFilled', withMarginBottom: !0 })
      var T = x.a.create(function (t) {
        return {
          contentRoot: {
            backgroundColor: t.colors.cellBackground,
            backgroundClip: 'content-box',
            justifyContent: 'flex-start',
          },
          buttonContainer: {
            backgroundColor: t.colors.cellBackground,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginVertical: 0,
            marginHorizontal: 'auto',
            paddingVertical: t.spaces.space12,
            paddingHorizontal: 0,
          },
          button: { marginVertical: 0, marginHorizontal: t.spaces.space12 },
          withMarginBottom: {
            marginBottom: 'calc('.concat(t.spaces.space64, ' + ').concat(x.a.iPhoneOffsetBottom, ')'),
          },
        }
      })
      e.a = S(H)
    },
    M2mT: function (t, e, r) {
      'use strict'
      r('OZaJ')
      var n = r('m3Bd'),
        o = r.n(n),
        a = r('VrFO'),
        i = r.n(a),
        c = r('Y9Ll'),
        l = r.n(c),
        s = r('1Pcy'),
        u = r.n(s),
        d = r('5Yy7'),
        p = r.n(d),
        f = r('N+ot'),
        h = r.n(f),
        m = r('AuHH'),
        b = r.n(m),
        y = r('KEM+'),
        v = r.n(y),
        w = (r('2G9S'), r('i4UL'), r('+/5o')),
        g = r('ERkP'),
        O = r.n(g),
        E = r('HPNB'),
        S = r('VAZu'),
        B = r('wiP2'),
        C = r('Es6L'),
        P = (r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn'), r('rHpw'))
      function k(t, e) {
        var r = Object.keys(t)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t)
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function D(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {}
          e % 2
            ? k(Object(r), !0).forEach(function (e) {
                v()(t, e, r[e])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : k(Object(r)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
              })
        }
        return t
      }
      var R = P.a.create(function (t) {
          return {
            fill: { flex: 1, alignSelf: 'stretch' },
            viewportView: D(D({}, P.a.absoluteFillObject), {}, { overflowY: 'auto' }),
            appBarContainer: {
              position: 'sticky',
              top: 0,
              backfaceVisibility: 'hidden',
              zIndex: t.componentZIndices.appBarZIndex,
            },
          }
        }),
        _ = r('MWbm'),
        j = r('yw4N'),
        x = r('TnY3'),
        L = r('cHvH'),
        F = r('3xLC')
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
          var r,
            n = b()(t)
          if (e) {
            var o = b()(this).constructor
            r = Reflect.construct(n, arguments, o)
          } else r = n.apply(this, arguments)
          return h()(this, r)
        }
      }
      var T = (function (t) {
        p()(r, t)
        var e = H(r)
        function r() {
          var t
          i()(this, r)
          for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++) o[a] = arguments[a]
          return (
            (t = e.call.apply(e, [this].concat(o))),
            v()(u()(t), '_renderChildren', function () {
              var e = t.props.children
              return t.context.rootDetailPerColumnScroll
                ? O.a.createElement(
                    _.a,
                    { style: R.fill },
                    O.a.createElement(j.a, { style: R.viewportView }, t._renderInlineNav({ isTwoColumnLayout: !0 }), e),
                  )
                : e
            }),
            t
          )
        }
        return (
          l()(r, [
            {
              key: 'render',
              value: function () {
                var t = this
                return O.a.createElement(L.a, null, function (e) {
                  var r = e.windowWidth
                  return E.a.isTwoColumnLayout(r) ? t._renderForTwoColumnLayout() : t._renderForOneColumnLayout()
                })
              },
            },
            {
              key: '_renderForOneColumnLayout',
              value: function () {
                var t = this.props,
                  e = t.children,
                  r =
                    (t.leftControl,
                    t.screenType,
                    t.showSubtitleOnRoot,
                    t.showSubtitleOnWideDetail,
                    t.withBottomBorder,
                    t.withDetailOpen,
                    o()(t, [
                      'children',
                      'leftControl',
                      'screenType',
                      'showSubtitleOnRoot',
                      'showSubtitleOnWideDetail',
                      'withBottomBorder',
                      'withDetailOpen',
                    ]))
                return O.a.createElement(
                  O.a.Fragment,
                  null,
                  Object(C.a)()
                    ? this._renderInlineNav({ isTwoColumnLayout: !1 })
                    : O.a.createElement(B.a.Configure, r),
                  e,
                )
              },
            },
            {
              key: '_renderForTwoColumnLayout',
              value: function () {
                var t = this.context.rootDetailPerColumnScroll
                return O.a.createElement(
                  O.a.Fragment,
                  null,
                  !t && this._renderInlineNav({ isTwoColumnLayout: !0 }),
                  this._renderChildren(),
                )
              },
            },
            {
              key: '_renderInlineNav',
              value: function (t) {
                var e = t.isTwoColumnLayout,
                  r = this.props,
                  n = r.SideNavButton,
                  o = r.TabBar,
                  a = r.TeamsSwitcher,
                  i = r.backLocation,
                  c = r.documentTitle,
                  l = r.headerless,
                  s = r.history,
                  u = r.leftControl,
                  d = r.middleControl,
                  p = r.onBackClick,
                  f = r.rightControl,
                  h = r.screenType,
                  m = r.searchBoxOptions,
                  b = r.secondaryBar,
                  y = r.showSubtitleOnRoot,
                  v = r.showSubtitleOnWideDetail,
                  g = r.subtitle,
                  E = r.title,
                  C = r.titleIconCell,
                  P = r.titleIconCellSize,
                  k = r.withBottomBorder,
                  D = r.withDetailOpen,
                  j = r.withSearchBox,
                  x = r.withTweetButton,
                  L = 'root' === h,
                  F = 'secondaryRoot' === h,
                  H = 'primaryDetail' === h,
                  T = (H && v) || (L && y),
                  A = L || (H && e),
                  I = L ? w.c : H ? w.a : void 0,
                  M = O.a.createElement(
                    _.a,
                    { style: R.appBarContainer },
                    O.a.createElement(S.a, {
                      backLocation: i,
                      fixed: !1,
                      hideBackButton: A,
                      history: s,
                      leftControl: u,
                      middleControl: d,
                      onBackClick: p,
                      rightControl: f,
                      secondaryBar: b,
                      subtitle: T ? g : void 0,
                      title: E,
                      titleDomId: I,
                      titleIconCell: C,
                      titleIconCellSize: P,
                      withBottomBorder: k,
                    }),
                  ),
                  z =
                    L || (F && D)
                      ? null
                      : O.a.createElement(B.a.Configure, {
                          SideNavButton: n,
                          TabBar: o,
                          TeamsSwitcher: a,
                          backLocation: i,
                          documentTitle: c,
                          headerless: l,
                          middleControl: d,
                          onBackClick: p,
                          rightControl: f,
                          searchBoxOptions: m,
                          subtitle: g,
                          title: E,
                          withSearchBox: j,
                          withTweetButton: x,
                        })
                return O.a.createElement(O.a.Fragment, null, z, M)
              },
            },
          ]),
          r
        )
      })(O.a.Component)
      v()(T, 'contextType', F.a),
        v()(T, 'defaultProps', { screenType: 'secondaryDetail', showSubtitleOnWideDetail: !0 })
      e.a = Object(x.a)(T)
    },
    PK8P: function (t, e, r) {
      'use strict'
      r('OZaJ')
      var n = r('VrFO'),
        o = r.n(n),
        a = r('Y9Ll'),
        i = r.n(a),
        c = r('1Pcy'),
        l = r.n(c),
        s = r('5Yy7'),
        u = r.n(s),
        d = r('N+ot'),
        p = r.n(d),
        f = r('AuHH'),
        h = r.n(f),
        m = r('KEM+'),
        b = r.n(m),
        y = (r('2G9S'), r('ERkP')),
        v = r.n(y),
        w = r('k49u'),
        g = r('hqKg'),
        O = r('0KEI'),
        E = r('oEGd'),
        S = r('55TG'),
        B = Object(g.createSelector)(S.a, function (t) {
          return { verifyPasswordFetchStatus: t }
        }),
        C = {
          verifyPassword: S.b,
          createLocalApiErrorHandler: Object(O.createLocalApiErrorHandlerWithContextFactory)('PASSWORD_GATEWAY'),
        },
        P = Object(E.g)(B, C, null, { pure: !1 }),
        k = r('kGix'),
        D = r('v//M'),
        R = r('3XMw'),
        _ = r.n(R),
        j = r('5FtR'),
        x = r('iCwC'),
        L = r('MWbm'),
        F = r('TnY3'),
        H = r('t62R'),
        T = r('6vad'),
        A = r('p+r5'),
        I = r('mw9i'),
        M = r('/yvb'),
        z = r('rHpw'),
        V = r('v6aA')
      function W(t) {
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
          var r,
            n = h()(t)
          if (e) {
            var o = h()(this).constructor
            r = Reflect.construct(n, arguments, o)
          } else r = n.apply(this, arguments)
          return p()(this, r)
        }
      }
      var N = _.a.fe36fe1f,
        Y = _.a.dec3c9b8,
        G = _.a.hccd9dbd,
        K = _.a.d1091f50,
        q = _.a.g9677c6d,
        Z = _.a.c8cb0b4c,
        U = (function (t) {
          u()(r, t)
          var e = W(r)
          function r() {
            var t
            o()(this, r)
            for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++) a[i] = arguments[i]
            return (
              (t = e.call.apply(e, [this].concat(a))),
              b()(l()(t), 'state', { password: '' }),
              b()(
                l()(t),
                '_passwordlessSsoEnabled',
                t.context.featureSwitches.isTrue('responsive_web_passwordless_sso_enabled'),
              ),
              b()(l()(t), '_handlePasswordSubmit', function () {
                var e,
                  r = t.props,
                  n = r.createLocalApiErrorHandler,
                  o = r.verifyPassword,
                  a = t.state.password
                '' !== a &&
                  o(a)
                    .then(function () {
                      t.setState({ password: '', verificationRequired: !1 }), t._makeFetch()
                    })
                    .catch(
                      n(
                        ((e = {}),
                        b()(e, w.a.InvalidCurrentPassword, {
                          customAction: function () {
                            return t.setState({ passwordError: Z })
                          },
                        }),
                        b()(e, 'showToast', !0),
                        e),
                      ),
                    )
              }),
              b()(l()(t), '_makeFetch', function () {
                var e,
                  r = t.props,
                  n = r.createLocalApiErrorHandler
                ;(0, r.fetch)()
                  .then(function () {
                    t.setState({ verificationRequired: !1 })
                  })
                  .catch(
                    n(
                      ((e = {}),
                      b()(e, w.a.PasswordVerificationRequired, {
                        customAction: function () {
                          t.setState({ verificationRequired: !0 })
                        },
                      }),
                      b()(e, 'showToast', !1),
                      e),
                    ),
                  )
              }),
              b()(l()(t), '_handleFetch', t._makeFetch),
              b()(l()(t), '_handleChange', function (e) {
                t.setState({ passwordError: void 0, password: e.target.value })
              }),
              t
            )
          }
          return (
            i()(r, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._makeFetch()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (t) {
                  t.fetchStatus === k.a.LOADED && this.props.fetchStatus === k.a.NONE && this._makeFetch()
                },
              },
              {
                key: '_renderPasswordPrompt',
                value: function () {
                  var t = this.props.titleHeader,
                    e = this.state.passwordError,
                    r = v.a.createElement(
                      H.b,
                      {
                        link: {
                          pathname: 'https://twitter.com/account/begin_password_reset',
                          external: !0,
                          openInSameFrame: !0,
                        },
                      },
                      K,
                    )
                  return v.a.createElement(
                    v.a.Fragment,
                    null,
                    t ? v.a.createElement(T.b, { text: t }) : null,
                    v.a.createElement(
                      L.a,
                      { style: [x.a.viewItem, x.a.bottomBorder] },
                      v.a.createElement(H.b, { color: 'gray700', size: 'subtext2' }, G),
                    ),
                    v.a.createElement(A.a, {
                      errorText: e,
                      helperText: r,
                      invalid: !!e,
                      label: Y,
                      name: 'current_password',
                      onChange: this._handleChange,
                      onSubmitEditing: this._handlePasswordSubmit,
                      type: 'password',
                      value: this.state.password,
                    }),
                    v.a.createElement(
                      I.a,
                      { style: X.buttonContainer },
                      v.a.createElement(
                        M.a,
                        { disabled: !1, onPress: this._handlePasswordSubmit, style: X.button, type: 'brandFilled' },
                        q,
                      ),
                    ),
                  )
                },
              },
              {
                key: 'render',
                value: function () {
                  var t = this.props,
                    e = t.fetchStatus,
                    r = t.location,
                    n = t.render,
                    o = this.state.verificationRequired,
                    a = e === k.a.FAILED && o
                  return v.a.createElement(
                    v.a.Fragment,
                    null,
                    a
                      ? this._passwordlessSsoEnabled
                        ? v.a.createElement(j.a, {
                            to: {
                              pathname: '/i/flow/verify_account_ownership',
                              state: { input: { requested_variant: r.pathname } },
                            },
                          })
                        : this._renderPasswordPrompt()
                      : v.a.createElement(D.a, { fetchStatus: e, onRequestRetry: this._handleFetch, render: n }),
                  )
                },
              },
            ]),
            r
          )
        })(v.a.Component)
      b()(U, 'contextType', V.a), b()(U, 'defaultProps', { titleHeader: N })
      var X = z.a.create(function (t) {
          return {
            buttonContainer: {
              flexDirection: 'row',
              justifyContent: 'flex-end',
              marginVertical: 0,
              marginHorizontal: 'auto',
              paddingBottom: t.spaces.space12,
              paddingHorizontal: 0,
            },
            button: { marginVertical: 0, marginHorizontal: t.componentDimensions.gutterHorizontal },
          }
        }),
        J = P(U)
      e.a = Object(F.a)(J)
    },
    iCwC: function (t, e, r) {
      'use strict'
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        o = r.n(n),
        a = r('rHpw')
      function i(t, e) {
        var r = Object.keys(t)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t)
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function c(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {}
          e % 2
            ? i(Object(r), !0).forEach(function (e) {
                o()(t, e, r[e])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : i(Object(r)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
              })
        }
        return t
      }
      var l = function (t) {
        return { borderBottomColor: t.colors.borderColor, borderBottomStyle: 'solid', borderBottomWidth: '1px' }
      }
      e.a = a.a.create(function (t) {
        return {
          descriptionText: {
            paddingHorizontal: t.componentDimensions.gutterHorizontal,
            paddingVertical: t.spaces.space16,
          },
          searchBox: { margin: t.spaces.space4 },
          infoText: {
            paddingHorizontal: t.componentDimensions.gutterHorizontal,
            paddingVertical: t.componentDimensions.gutterVertical,
          },
          linkItem: { padding: t.spaces.space12, backgroundColor: t.colors.cellBackground },
          viewItem: {
            paddingHorizontal: t.componentDimensions.gutterHorizontal,
            paddingVertical: t.componentDimensions.gutterVertical,
            backgroundColor: t.colors.cellBackground,
          },
          calloutTextBlock: {
            paddingVertical: t.spaces.space20,
            paddingHorizontal: t.componentDimensions.gutterHorizontal,
          },
          bottomBorder: c({}, l(t)),
        }
      })
    },
    o1YB: function (t, e, r) {
      'use strict'
      r('OZaJ')
      var n = r('VrFO'),
        o = r.n(n),
        a = r('Y9Ll'),
        i = r.n(a),
        c = r('1Pcy'),
        l = r.n(c),
        s = r('5Yy7'),
        u = r.n(s),
        d = r('N+ot'),
        p = r.n(d),
        f = r('AuHH'),
        h = r.n(f),
        m = r('KEM+'),
        b = r.n(m),
        y = (r('2G9S'), r('uFXj'), r('ERkP')),
        v = r.n(y),
        w = r('t62R'),
        g = r('rHpw'),
        O = r('MWbm')
      function E(t) {
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
          var r,
            n = h()(t)
          if (e) {
            var o = h()(this).constructor
            r = Reflect.construct(n, arguments, o)
          } else r = n.apply(this, arguments)
          return p()(this, r)
        }
      }
      var S = (function (t) {
        u()(r, t)
        var e = E(r)
        function r() {
          var t
          o()(this, r)
          for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++) a[i] = arguments[i]
          return (
            (t = e.call.apply(e, [this].concat(a))),
            b()(l()(t), '_renderSubtextAndLink', function () {
              var e = t.props.subtext
              return v.a.createElement(w.b, { color: 'gray700', size: 'subtext2' }, e, ' ', t._renderLearnMore())
            }),
            b()(l()(t), '_renderLearnMore', function () {
              var e = t.props,
                r = e.learnMoreLabel,
                n = e.learnMoreLink
              return n && r ? v.a.createElement(w.b, { link: n, size: 'subtext2' }, r) : null
            }),
            t
          )
        }
        return (
          i()(r, [
            {
              key: 'render',
              value: function () {
                var t = this.props,
                  e = t.label,
                  r = t.learnMoreLabel,
                  n = t.learnMoreLink,
                  o = t.subtext,
                  a = t.withBottomBorder
                return v.a.createElement(
                  O.a,
                  { style: [B.root, a && B.bottomBorder] },
                  v.a.createElement(w.b, null, e),
                  o
                    ? r && n
                      ? this._renderSubtextAndLink()
                      : v.a.createElement(w.b, { color: 'gray700', size: 'subtext2' }, o)
                    : null,
                )
              },
            },
          ]),
          r
        )
      })(v.a.Component)
      b()(S, 'defaultProps', { withBottomBorder: !0 })
      var B = g.a.create(function (t) {
        return {
          root: {
            backgroundColor: t.colors.cellBackground,
            paddingHorizontal: t.componentDimensions.gutterHorizontal,
            paddingVertical: t.componentDimensions.gutterVertical,
          },
          bottomBorder: {
            borderBottomWidth: t.borderWidths.small,
            borderBottomStyle: 'solid',
            borderBottomColor: t.colors.borderColor,
          },
        }
      })
      e.a = S
    },
  },
])
//# sourceMappingURL=WIPED
