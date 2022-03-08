;(window.webpackJsonp = window.webpackJsonp || []).push([
  [71],
  {
    '0kTQ': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return l
      })
      var a,
        r = n('KEM+'),
        o = n.n(r),
        i = n('k49u'),
        c = n('LVU8'),
        u = n('3XMw'),
        s = n.n(u).a.b20a3893,
        l =
          ((a = {}),
          o()(a, i.a.AppInReadOnlyMode, { customAction: c.b }),
          o()(a, i.a.TargetUserNotFound, { toast: { text: s } }),
          o()(a, 'showToast', !0),
          a)
    },
    '1UMd': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'MultiAccountScreen', function () {
          return ae
        })
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('1Pcy'),
        u = n.n(c),
        s = n('5Yy7'),
        l = n.n(s),
        d = n('2VqO'),
        h = n.n(d),
        m = n('KEM+'),
        f = n.n(m),
        p = (n('2G9S'), n('z84I'), n('ho0z'), n('7x/C'), n('JtPf'), n('Qavd'), n('ERkP')),
        g = n.n(p),
        b = n('EPsT'),
        _ = n('hqKg'),
        S = n('5oBF'),
        E = n('qtu+'),
        w = n('G6rE'),
        C = n('rxPX'),
        y = n('0KEI'),
        A = n('auX9'),
        v = n('KkUe'),
        k =
          (Object(_.createSelector)(w.e.selectLoggedInUser, A.g, A.j, function (e, t, n) {
            return { loggedInUser: e, fetchStatus: t, users: n }
          }),
          Object(C.a)()
            .propsFromState(function () {
              return { loggedInUser: w.e.selectLoggedInUser, fetchStatus: A.g, users: A.j }
            })
            .propsFromActions(function () {
              return {
                fetchMultiAccountListIfNeeded: A.d,
                createLocalApiErrorHandler: Object(y.createLocalApiErrorHandlerWithContextFactory)(
                  'ACCOUNT_SWITCHER_MULTI_LIST_FETCH',
                ),
                logout: v.a,
                logoutAll: v.b,
                sendAllPreviews: S.g,
                switchAccount: E.a,
              }
            })
            .withAnalytics({ page: 'account_switcher' })),
        L = n('kGix'),
        M = n('v//M'),
        I = n('jHSc'),
        F = n('3XMw'),
        T = n.n(F),
        H = n('IMYl'),
        U = n('0kTQ'),
        V = 'AccountSwitcher_Add_Button',
        B = 'AccountSwitcher_Switch_Button',
        O = n('MWbm'),
        x = n('jtO7'),
        P = n('t62R'),
        R = n('0yYu'),
        j = n('IMA+'),
        N = n('Znyr'),
        W = n('rHpw'),
        z = n('v6aA'),
        D = T.a.b8e1d524,
        q = T.a.j0a8da6e,
        X = T.a.b6bd6ae3,
        Y = T.a.d2b8e92b,
        K = T.a.dc65b3e4,
        G = T.a.i859a9d3,
        J = 'https://help.twitter.com/managing-your-account/managing-multiple-twitter-accounts',
        Q = T.a.ae1bbb26,
        Z = T.a.bade139e,
        $ = T.a.ae33b982,
        ee = T.a.fa07bf68,
        te = T.a.d86bbf0f,
        ne = T.a.h6beb5fa,
        ae = (function (e) {
          l()(n, e)
          var t = h()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              f()(u()(e), 'state', { spinner: !1 }),
              f()(u()(e), '_render', function () {
                var t = e.context.featureSwitches.getNumberValue('responsive_web_multiple_account_limit', 5),
                  n = e.props.users.length >= t
                return g.a.createElement(
                  g.a.Fragment,
                  null,
                  e._renderUsers(),
                  g.a.createElement(x.a, {
                    align: 'left',
                    color: 'primary',
                    disabled: n,
                    label: q,
                    onPress: e._handleAddAccount,
                    testID: V,
                  }),
                  g.a.createElement(
                    O.a,
                    { style: [re.whiteBackground, re.infoText] },
                    g.a.createElement(
                      P.b,
                      { color: 'gray700' },
                      (n ? K : Y)({ maxAccounts: t }),
                      ' ',
                      g.a.createElement(P.b, { link: J }, G),
                    ),
                  ),
                  g.a.createElement(R.a, null),
                  g.a.createElement(b.a, {
                    color: 'red500',
                    confirmationSheetConfirmButtonLabel: Q,
                    confirmationSheetConfirmButtonType: 'primary',
                    confirmationSheetHeadline: $,
                    confirmationSheetText: ee,
                    key: 'logoutAllButton',
                    label: Z,
                    onConfirmationSheetConfirm: e._handleLogoutAll,
                    withBottomBorder: !1,
                  }),
                )
              }),
              f()(u()(e), '_renderUsers', function () {
                var t = e.props,
                  n = t.loggedInUser,
                  a = t.users
                return g.a.createElement(
                  g.a.Fragment,
                  null,
                  a.map(function (t) {
                    var a = n && t.user_id === n.id_str
                    return g.a.createElement(j.a, {
                      avatarUri: t.avatar_image_url,
                      badgeContext: 'account',
                      decoration: a ? e._renderCurrentUserCheckmark() : e._renderBadge(t.badgeCount),
                      displayMode: 'UserCompact',
                      isProtected: t.is_protected,
                      isVerified: t.is_verified,
                      key: t.screen_name,
                      name: t.name,
                      onCellClick: a ? void 0 : e._handleSwitchAccount(t.user_id, !!t.badgeCount),
                      screenName: t.screen_name,
                      style: re.whiteBackground,
                      testID: B,
                      userId: t.user_id,
                      withLink: !1,
                    })
                  }),
                )
              }),
              f()(u()(e), '_renderCurrentUserCheckmark', function () {
                return g.a.createElement(H.a, { accessibilityLabel: X, style: re.iconCheckMark })
              }),
              f()(u()(e), '_renderBadge', function (e) {
                return e
                  ? g.a.createElement(
                      O.a,
                      null,
                      g.a.createElement(N.a, {
                        count: e,
                        standalone: !0,
                        truncatedCountFormatter: ne,
                        unreadCountLabel: te,
                      }),
                    )
                  : null
              }),
              f()(u()(e), '_handleFetch', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchMultiAccountListIfNeeded)().catch(n())
              }),
              f()(u()(e), '_handleAddAccount', function () {
                var t = e.props,
                  n = t.analytics,
                  a = t.history
                n.scribe({ element: 'sign_in', action: 'click' }),
                  e.context.featureSwitches.isTrue('stateful_login_enabled')
                    ? a.push('/i/flow/login')
                    : a.push('/account/add')
              }),
              f()(u()(e), '_handleSwitchAccount', function (t, n) {
                return function () {
                  var a = e.props,
                    r = a.analytics,
                    o = a.createLocalApiErrorHandler,
                    i = a.switchAccount
                  e.setState({ spinner: !0 }),
                    r.scribe({ element: n ? 'account_bubble_badged' : 'account_bubble', action: 'click' }),
                    i({ user_id: t }).catch(function (t) {
                      return e.setState({ spinner: !1 }), o(U.a)(t)
                    })
                }
              }),
              f()(u()(e), '_handleLogoutAll', function () {
                var t = e.props,
                  n = t.analytics,
                  a = t.createLocalApiErrorHandler,
                  r = t.logoutAll,
                  o = t.sendAllPreviews
                e.setState({ spinner: !0 }),
                  n.scribe({ element: 'logout_all', action: 'click' }),
                  o().finally(function () {
                    r().catch(function (t) {
                      return e.setState({ spinner: !1 }), a()(t)
                    })
                  })
              }),
              e
            )
          }
          return (
            i()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  ;(0, this.props.fetchMultiAccountListIfNeeded)()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    n = e.history,
                    a = this.state.spinner
                  return g.a.createElement(
                    I.b,
                    { history: n, title: D },
                    g.a.createElement(M.a, {
                      fetchStatus: a ? L.a.LOADING : t,
                      onRequestRetry: this._handleFetch,
                      render: this._render,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      f()(ae, 'contextType', z.a)
      var re = W.a.create(function (e) {
          return {
            iconCheckMark: { color: e.colors.primary, fontSize: '1.2em' },
            infoText: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 },
            whiteBackground: { backgroundColor: e.colors.cellBackground },
          }
        }),
        oe = k(ae)
      t.default = oe
    },
    EPsT: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return S
      })
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('1Pcy'),
        u = n.n(c),
        s = n('5Yy7'),
        l = n.n(s),
        d = n('2VqO'),
        h = n.n(d),
        m = n('KEM+'),
        f = n.n(m),
        p = n('ERkP'),
        g = n.n(p),
        b = n('jtO7'),
        _ = n('eb3s'),
        S = (function (e) {
          l()(n, e)
          var t = h()(n)
          function n(e) {
            var a
            return (
              r()(this, n),
              (a = t.call(this, e)),
              f()(u()(a), '_handleClick', function (e) {
                a.setState({ showConfirmation: !0 })
              }),
              f()(u()(a), '_handleCancel', function () {
                a.setState({ showConfirmation: !1 })
              }),
              f()(u()(a), '_handleConfirm', function () {
                a.setState({ showConfirmation: !1 }), a.props.onConfirmationSheetConfirm()
              }),
              (a.state = { showConfirmation: !1 }),
              a
            )
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.align,
                    n = e.color,
                    a = e.confirmationSheetConfirmButtonLabel,
                    r = e.confirmationSheetConfirmButtonType,
                    o = e.confirmationSheetHeadline,
                    i = e.confirmationSheetText,
                    c = e.label
                  return g.a.createElement(
                    g.a.Fragment,
                    null,
                    g.a.createElement(b.a, { align: t, color: n, label: c, onPress: this._handleClick }),
                    this.state.showConfirmation
                      ? g.a.createElement(_.a, {
                          confirmButtonLabel: a,
                          confirmButtonType: r,
                          headline: o,
                          onCancel: this._handleCancel,
                          onConfirm: this._handleConfirm,
                          text: i,
                        })
                      : null,
                  )
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      f()(S, 'defaultProps', { color: 'red500', align: 'center' })
    },
    U13f: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'MultiAccountLoginScreen', function () {
          return B
        })
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('1Pcy'),
        u = n.n(c),
        s = n('5Yy7'),
        l = n.n(s),
        d = n('2VqO'),
        h = n.n(d),
        m = n('KEM+'),
        f = n.n(m),
        p = (n('2G9S'), n('ERkP')),
        g = n.n(p),
        b = n('auX9'),
        _ = n('rxPX'),
        S = n('0KEI'),
        E = function (e) {
          return Object(b.j)(e).length
        },
        w = Object(_.a)()
          .propsFromState(function () {
            return { errorMessage: b.f, fetchStatus: b.g, multiAccountListLength: E }
          })
          .propsFromActions(function () {
            return {
              addAccount: b.a,
              createLocalApiErrorHandler: Object(S.createLocalApiErrorHandlerWithContextFactory)(
                'ACCOUNT_SWITCHER_MULTI_ADD',
              ),
              fetchMultiAccountListIfNeeded: b.d,
              resetErrorMessages: b.e,
            }
          })
          .withAnalytics({ page: 'account_switcher', section: 'login' }),
        C = n('jHSc'),
        y = n('3Wr5'),
        A = n('3XMw'),
        v = n.n(A),
        k = n('6oVL'),
        L = n('5FtR'),
        M = n('t62R'),
        I = n('G1WX'),
        F = n('rHpw'),
        T = n('v6aA'),
        H = n('XJCT'),
        U = v.a.b8e1d524,
        V = v.a.j0a8da6e,
        B = (function (e) {
          l()(n, e)
          var t = h()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              f()(u()(e), 'state', {
                autoSubmit: !1,
                passwordValue: '',
                passwordValueSet: !1,
                usernameValue: '',
                usernameValueSet: !1,
              }),
              f()(u()(e), '_render', function () {
                var t = e.props,
                  n = t.errorMessage,
                  a = t.multiAccountListLength,
                  r = e.state.autoSubmit,
                  o = e.context.featureSwitches.getNumberValue('responsive_web_multiple_account_limit', 5)
                return a && a >= o
                  ? g.a.createElement(L.a, { to: '/account/switch' })
                  : g.a.createElement(
                      g.a.Fragment,
                      null,
                      g.a.createElement(
                        M.b,
                        {
                          accessibilityRole: 'heading',
                          align: 'center',
                          size: 'headline1',
                          style: O.heading,
                          weight: 'bold',
                        },
                        V,
                      ),
                      n ? g.a.createElement(M.b, { color: 'magenta500', style: O.errorMessage }, n) : null,
                      g.a.createElement(
                        k.a,
                        {
                          autoSubmit: r,
                          hideSubmitButton: !1,
                          loginReturnPath: '/account/switch',
                          onSubmit: e._handleSubmit,
                          submitButtonDisabled: e._hasMissingFields(),
                          submitButtonSize: 'xLarge',
                          submitButtonStyle: O.submitButton,
                        },
                        g.a.createElement(H.b, {
                          onChange: e._handleUsernameFieldChange,
                          onSubmitEditing: e._handleSubmitEditing,
                          value: e.state.usernameValue,
                        }),
                        g.a.createElement(H.a, {
                          onChange: e._handlePasswordFieldChange,
                          onSubmitEditing: e._handleSubmitEditing,
                          value: e.state.passwordValue,
                          withForgotPasswordLink: !0,
                        }),
                      ),
                    )
              }),
              f()(u()(e), '_hasMissingFields', function () {
                var t = e.state,
                  n = t.passwordValueSet
                return !t.usernameValueSet || !n
              }),
              f()(u()(e), '_testInputTruthy', function (e) {
                return e && e.target && !!e.target.value
              }),
              f()(u()(e), '_handleUsernameFieldChange', function (t) {
                e.setState({ usernameValueSet: e._testInputTruthy(t) }), e.setState({ usernameValue: t.target.value })
              }),
              f()(u()(e), '_handlePasswordFieldChange', function (t) {
                e.setState({ passwordValueSet: e._testInputTruthy(t) }), e.setState({ passwordValue: t.target.value })
              }),
              f()(u()(e), '_handleSubmit', function (t) {
                var n = e.props,
                  a = n.addAccount,
                  r = n.createLocalApiErrorHandler
                if (!e._hasMissingFields()) {
                  var o = e.state,
                    i = o.passwordValue,
                    c = o.usernameValue,
                    u = t.namedItem('ui_metrics')
                  a({ username: c, password: i, redirectAfterLogin: '/home', uiMetrics: u ? u.value : void 0 }).catch(
                    r({}),
                  )
                }
              }),
              f()(u()(e), '_handleSubmitEditing', function () {
                e._hasMissingFields() || e.setState({ autoSubmit: !0 })
              }),
              f()(u()(e), '_handleFetch', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchMultiAccountListIfNeeded)().catch(n())
              }),
              e
            )
          }
          return (
            i()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  ;(0, this.props.fetchMultiAccountListIfNeeded)()
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  ;(0, this.props.resetErrorMessages)()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    n = e.history,
                    a = Object(y.a)().hasMultiAccountCookie
                  return g.a.createElement(
                    C.b,
                    { backLocation: '/account/switch', history: n, title: U },
                    a
                      ? g.a.createElement(I.a, {
                          fetchStatus: t,
                          onRequestRetry: this._handleFetch,
                          render: this._render,
                        })
                      : this._render(),
                  )
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      f()(B, 'contextType', T.a)
      var O = F.a.create(function (e) {
          return {
            submitButton: { marginHorizontal: e.spaces.space12 },
            heading: { marginVertical: e.spaces.space40 },
            errorMessage: { marginHorizontal: e.spaces.space12 },
          }
        }),
        x = w(B)
      t.default = x
    },
    jtO7: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        o = n('m3Bd'),
        i = n.n(o),
        c = n('ERkP'),
        u = n.n(c),
        s = n('t62R'),
        l = n('I4+6'),
        d = n('cm6r'),
        h = n('rHpw'),
        m = n('MWbm'),
        f = ['align', 'color', 'label'],
        p = h.a.create(function (e) {
          return {
            container: { backgroundColor: e.colors.cellBackground },
            root: {
              justifyContent: 'center',
              minHeight: e.spaces.space48,
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.spaces.space16,
            },
          }
        })
      t.a = function (e) {
        var t = e.align,
          n = void 0 === t ? 'center' : t,
          a = e.color,
          o = e.label,
          c = i()(e, f),
          g = l.a.generate({
            backgroundColor: h.a.theme.colors.transparent,
            color: h.a.theme.colors[a],
            insetFocusRing: !0,
          })
        return u.a.createElement(
          m.a,
          { style: p.container },
          u.a.createElement(
            d.a,
            r()({}, c, { interactiveStyles: g, style: p.root }),
            u.a.createElement(s.b, { align: n, color: a }, o),
          ),
        )
      }
    },
    'qtu+': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return c
      })
      var a = n('4+NY'),
        r = n('oEOe'),
        o = n('5oBF'),
        i = {
          REQUEST: 'rweb/multiAccount/SWITCH_REQUEST',
          SUCCESS: 'rweb/multiAccount/SWITCH_SUCCESS',
          FAILURE: 'rweb/multiAccount/SWITCH_FAILURE',
        },
        c = function (e) {
          return function (t, n, c) {
            var u = c.api,
              s = Object(r.b)(t, { request: u.Auth.switch, params: e })
            return t(Object(o.g)()).then(function () {
              return t(Object(a.b)()).then(function () {
                return s({ actionTypes: i, context: 'SWITCH' }).then(function () {
                  window.location.assign('/home')
                })
              })
            })
          }
        }
    },
  },
])
//# sourceMappingURL=WIPED
