;(window.webpackJsonp = window.webpackJsonp || []).push([
  [69],
  {
    '0kTQ': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return l
      })
      var a,
        r = n('KEM+'),
        o = n.n(r),
        c = n('k49u'),
        i = n('LVU8'),
        u = n('3XMw'),
        s = n.n(u).a.b20a3893,
        l =
          ((a = {}),
          o()(a, c.a.AppInReadOnlyMode, { customAction: i.b }),
          o()(a, c.a.TargetUserNotFound, { toast: { text: s } }),
          o()(a, 'showToast', !0),
          a)
    },
    '1UMd': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'MultiAccountScreen', function () {
          return le
        })
      var a = n('yiKp'),
        r = n.n(a),
        o = n('VrFO'),
        c = n.n(o),
        i = n('Y9Ll'),
        u = n.n(i),
        s = n('1Pcy'),
        l = n.n(s),
        d = n('5Yy7'),
        h = n.n(d),
        m = n('2VqO'),
        f = n.n(m),
        p = n('KEM+'),
        g = n.n(p),
        b = (n('2G9S'), n('z84I'), n('ho0z'), n('7x/C'), n('JtPf'), n('Qavd'), n('ERkP')),
        _ = n.n(b),
        S = n('EPsT'),
        E = n('hqKg'),
        C = n('zh9S'),
        w = n('5oBF'),
        A = n('qtu+'),
        v = n('G6rE'),
        y = n('0KEI'),
        k = n('oEGd'),
        L = n('auX9'),
        M = n('KkUe'),
        I = Object(E.createSelector)(v.e.selectLoggedInUser, L.g, L.j, function (e, t, n) {
          return { loggedInUser: e, fetchStatus: t, users: n }
        }),
        T = {
          fetchMultiAccountListIfNeeded: L.d,
          createLocalApiErrorHandler: Object(y.createLocalApiErrorHandlerWithContextFactory)(
            'ACCOUNT_SWITCHER_MULTI_LIST_FETCH',
          ),
          logout: M.a,
          logoutAll: M.b,
          scribeAction: C.c,
          sendAllPreviews: w.f,
          switchAccount: A.a,
        },
        F = Object(k.g)(I, T),
        H = n('kGix'),
        V = n('v//M'),
        B = n('jHSc'),
        U = n('3XMw'),
        O = n.n(U),
        j = n('IMYl'),
        R = n('0kTQ'),
        x = 'AccountSwitcher_Add_Button',
        P = 'AccountSwitcher_Switch_Button',
        N = n('MWbm'),
        W = n('jtO7'),
        z = n('t62R'),
        q = n('0yYu'),
        D = n('IMA+'),
        K = n('Znyr'),
        Y = n('rHpw'),
        G = n('v6aA'),
        J = n('7JQg'),
        Q = O.a.b8e1d524,
        X = O.a.j0a8da6e,
        Z = O.a.b6bd6ae3,
        $ = O.a.d2b8e92b,
        ee = O.a.dc65b3e4,
        te = O.a.i859a9d3,
        ne = 'https://help.twitter.com/managing-your-account/managing-multiple-twitter-accounts',
        ae = O.a.ae1bbb26,
        re = O.a.bade139e,
        oe = O.a.ae33b982,
        ce = O.a.fa07bf68,
        ie = O.a.d86bbf0f,
        ue = O.a.h6beb5fa,
        se = { page: 'account_switcher' },
        le = (function (e) {
          h()(n, e)
          var t = f()(n)
          function n() {
            var e
            c()(this, n)
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              g()(l()(e), 'state', { spinner: !1 }),
              g()(l()(e), '_render', function () {
                var t = e.context.featureSwitches.getNumberValue('responsive_web_multiple_account_limit', 5),
                  n = e.props.users.length >= t
                return _.a.createElement(
                  _.a.Fragment,
                  null,
                  e._renderUsers(),
                  _.a.createElement(W.a, {
                    align: 'left',
                    color: 'primary',
                    disabled: n,
                    label: X,
                    onPress: e._handleAddAccount,
                    testID: x,
                  }),
                  _.a.createElement(
                    N.a,
                    { style: [de.whiteBackground, de.infoText] },
                    _.a.createElement(
                      z.b,
                      { color: 'gray700' },
                      (n ? ee : $)({ maxAccounts: t }),
                      ' ',
                      _.a.createElement(z.b, { link: ne }, te),
                    ),
                  ),
                  _.a.createElement(q.a, null),
                  _.a.createElement(S.a, {
                    color: 'red500',
                    confirmationSheetConfirmButtonLabel: ae,
                    confirmationSheetConfirmButtonType: 'primary',
                    confirmationSheetHeadline: oe,
                    confirmationSheetText: ce,
                    key: 'logoutAllButton',
                    label: re,
                    onConfirmationSheetConfirm: e._handleLogoutAll,
                    withBottomBorder: !1,
                  }),
                )
              }),
              g()(l()(e), '_renderUsers', function () {
                var t = e.props,
                  n = t.loggedInUser,
                  a = t.users
                return _.a.createElement(
                  _.a.Fragment,
                  null,
                  a.map(function (t) {
                    var a = n && t.user_id === n.id_str
                    return _.a.createElement(D.a, {
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
                      style: de.whiteBackground,
                      testID: P,
                      userId: t.user_id,
                      withLink: !1,
                    })
                  }),
                )
              }),
              g()(l()(e), '_renderCurrentUserCheckmark', function () {
                return _.a.createElement(j.a, { accessibilityLabel: Z, style: de.iconCheckMark })
              }),
              g()(l()(e), '_renderBadge', function (e) {
                return e
                  ? _.a.createElement(
                      N.a,
                      null,
                      _.a.createElement(K.a, {
                        count: e,
                        standalone: !0,
                        truncatedCountFormatter: ue,
                        unreadCountLabel: ie,
                      }),
                    )
                  : null
              }),
              g()(l()(e), '_handleFetch', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchMultiAccountListIfNeeded)().catch(n())
              }),
              g()(l()(e), '_handleAddAccount', function () {
                var t = e.props,
                  n = t.history
                ;(0, t.scribeAction)(r()(r()({}, se), {}, { element: 'sign_in', action: 'click' })),
                  e.context.featureSwitches.isTrue('stateful_login_enabled')
                    ? n.push('/i/flow/login')
                    : n.push('/account/add')
              }),
              g()(l()(e), '_handleSwitchAccount', function (t, n) {
                return function () {
                  var a = e.props,
                    o = a.createLocalApiErrorHandler,
                    c = a.scribeAction,
                    i = a.switchAccount
                  e.setState({ spinner: !0 }),
                    c(
                      r()(
                        r()({}, se),
                        {},
                        { element: n ? 'account_bubble_badged' : 'account_bubble', action: 'click' },
                      ),
                    ),
                    i({ user_id: t }).catch(function (t) {
                      return e.setState({ spinner: !1 }), o(R.a)(t)
                    })
                }
              }),
              g()(l()(e), '_handleLogoutAll', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler,
                  a = t.logoutAll,
                  o = t.scribeAction,
                  c = t.sendAllPreviews
                e.setState({ spinner: !0 }),
                  o(r()(r()({}, se), {}, { element: 'logout_all', action: 'click' })),
                  c().finally(function () {
                    a().catch(function (t) {
                      return e.setState({ spinner: !1 }), n()(t)
                    })
                  })
              }),
              e
            )
          }
          return (
            u()(n, [
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
                  return _.a.createElement(
                    B.b,
                    { history: n, title: Q },
                    _.a.createElement(V.a, {
                      fetchStatus: a ? H.a.LOADING : t,
                      onRequestRetry: this._handleFetch,
                      render: this._render,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(_.a.Component)
      g()(le, 'contextType', G.a)
      var de = Y.a.create(function (e) {
        return {
          iconCheckMark: { color: e.colors.primary, fontSize: '1.2em' },
          infoText: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 },
          whiteBackground: { backgroundColor: e.colors.cellBackground },
        }
      })
      t.default = Object(J.a)(se)(F(le))
    },
    EPsT: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return S
      })
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('1Pcy'),
        u = n.n(i),
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
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.align,
                    n = e.color,
                    a = e.confirmationSheetConfirmButtonLabel,
                    r = e.confirmationSheetConfirmButtonType,
                    o = e.confirmationSheetHeadline,
                    c = e.confirmationSheetText,
                    i = e.label
                  return g.a.createElement(
                    g.a.Fragment,
                    null,
                    g.a.createElement(b.a, { align: t, color: n, label: i, onPress: this._handleClick }),
                    this.state.showConfirmation
                      ? g.a.createElement(_.a, {
                          confirmButtonLabel: a,
                          confirmButtonType: r,
                          headline: o,
                          onCancel: this._handleCancel,
                          onConfirm: this._handleConfirm,
                          text: c,
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
          return R
        })
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('1Pcy'),
        u = n.n(i),
        s = n('5Yy7'),
        l = n.n(s),
        d = n('2VqO'),
        h = n.n(d),
        m = n('KEM+'),
        f = n.n(m),
        p = (n('2G9S'), n('ERkP')),
        g = n.n(p),
        b = n('hqKg'),
        _ = n('oEGd'),
        S = n('auX9'),
        E = n('0KEI'),
        C = Object(b.createSelector)(S.f, S.g, S.j, function (e, t, n) {
          return { errorMessage: e, fetchStatus: t, multiAccountListLength: n.length }
        }),
        w = {
          fetchMultiAccountListIfNeeded: S.d,
          createLocalApiErrorHandler: Object(E.createLocalApiErrorHandlerWithContextFactory)(
            'ACCOUNT_SWITCHER_MULTI_ADD',
          ),
          addAccount: S.a,
          resetErrorMessages: S.e,
        },
        A = Object(_.g)(C, w),
        v = n('jHSc'),
        y = n('3Wr5'),
        k = n('3XMw'),
        L = n.n(k),
        M = n('6oVL'),
        I = n('5FtR'),
        T = n('t62R'),
        F = n('G1WX'),
        H = n('rHpw'),
        V = n('v6aA'),
        B = n('7JQg'),
        U = n('XJCT'),
        O = L.a.b8e1d524,
        j = L.a.j0a8da6e,
        R = (function (e) {
          l()(n, e)
          var t = h()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), c = 0; c < a; c++) o[c] = arguments[c]
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
                  ? g.a.createElement(I.a, { to: '/account/switch' })
                  : g.a.createElement(
                      g.a.Fragment,
                      null,
                      g.a.createElement(
                        T.b,
                        {
                          accessibilityRole: 'heading',
                          align: 'center',
                          size: 'headline1',
                          style: x.heading,
                          weight: 'bold',
                        },
                        j,
                      ),
                      n ? g.a.createElement(T.b, { color: 'magenta500', style: x.errorMessage }, n) : null,
                      g.a.createElement(
                        M.a,
                        {
                          autoSubmit: r,
                          hideSubmitButton: !1,
                          loginReturnPath: '/account/switch',
                          onSubmit: e._handleSubmit,
                          submitButtonDisabled: e._hasMissingFields(),
                          submitButtonSize: 'xLarge',
                          submitButtonStyle: x.submitButton,
                        },
                        g.a.createElement(U.b, {
                          onChange: e._handleUsernameFieldChange,
                          onSubmitEditing: e._handleSubmitEditing,
                          value: e.state.usernameValue,
                        }),
                        g.a.createElement(U.a, {
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
                    c = o.passwordValue,
                    i = o.usernameValue,
                    u = t.namedItem('ui_metrics')
                  a({ username: i, password: c, redirectAfterLogin: '/home', uiMetrics: u ? u.value : void 0 }).catch(
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
            c()(n, [
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
                    v.b,
                    { backLocation: '/account/switch', history: n, title: O },
                    a
                      ? g.a.createElement(F.a, {
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
      f()(R, 'contextType', V.a)
      var x = H.a.create(function (e) {
        return {
          submitButton: { marginHorizontal: e.spaces.space12 },
          heading: { marginVertical: e.spaces.space40 },
          errorMessage: { marginHorizontal: e.spaces.space12 },
        }
      })
      t.default = Object(B.a)({ page: 'account_switcher', section: 'login' })(A(R))
    },
    jtO7: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        o = n('m3Bd'),
        c = n.n(o),
        i = n('ERkP'),
        u = n.n(i),
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
          i = c()(e, f),
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
            r()({}, i, { interactiveStyles: g, style: p.root }),
            u.a.createElement(s.b, { align: n, color: a }, o),
          ),
        )
      }
    },
    'qtu+': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return i
      })
      var a = n('4+NY'),
        r = n('oEOe'),
        o = n('5oBF'),
        c = {
          REQUEST: 'rweb/multiAccount/SWITCH_REQUEST',
          SUCCESS: 'rweb/multiAccount/SWITCH_SUCCESS',
          FAILURE: 'rweb/multiAccount/SWITCH_FAILURE',
        },
        i = function (e) {
          return function (t, n, i) {
            var u = i.api,
              s = Object(r.b)(t, { request: u.Auth.switch, params: e })
            return t(Object(o.f)()).then(function () {
              return t(Object(a.b)()).then(function () {
                return s({ actionTypes: c, context: 'SWITCH' }).then(function () {
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
