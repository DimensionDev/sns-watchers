;(window.webpackJsonp = window.webpackJsonp || []).push([
  [65],
  {
    '0kTQ': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return l
      })
      var r,
        a = n('KEM+'),
        o = n.n(a),
        i = n('k49u'),
        c = n('LVU8'),
        u = n('3XMw'),
        s = n.n(u).a.b20a3893,
        l =
          ((r = {}),
          o()(r, i.a.AppInReadOnlyMode, { customAction: c.b }),
          o()(r, i.a.TargetUserNotFound, { toast: { text: s } }),
          o()(r, 'showToast', !0),
          r)
    },
    '1UMd': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'MultiAccountScreen', function () {
          return fe
        })
      n('OZaJ'), n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('1Pcy'),
        u = n.n(c),
        s = n('5Yy7'),
        l = n.n(s),
        d = n('N+ot'),
        f = n.n(d),
        m = n('AuHH'),
        h = n.n(m),
        p = n('KEM+'),
        b = n.n(p),
        g = (n('2G9S'), n('z84I'), n('ho0z'), n('Qavd'), n('JtPf'), n('7x/C'), n('ERkP')),
        y = n('EPsT'),
        _ = n('hqKg'),
        v = n('zh9S'),
        w = n('5oBF'),
        S = n('qtu+'),
        E = n('G6rE'),
        C = n('0KEI'),
        A = n('oEGd'),
        k = n('auX9'),
        L = n('KkUe'),
        B = Object(_.createSelector)(E.e.selectLoggedInUser, k.g, k.j, function (e, t, n) {
          return { loggedInUser: e, fetchStatus: t, users: n }
        }),
        O = {
          fetchMultiAccountListIfNeeded: k.d,
          createLocalApiErrorHandler: Object(C.createLocalApiErrorHandlerWithContextFactory)(
            'ACCOUNT_SWITCHER_MULTI_LIST_FETCH',
          ),
          logout: L.a,
          logoutAll: L.b,
          scribeAction: v.c,
          sendAllPreviews: w.f,
          switchAccount: S.a,
        },
        F = Object(A.g)(B, O),
        T = n('kGix'),
        M = n('v//M'),
        R = n('jHSc'),
        I = n('3XMw'),
        P = n.n(I),
        j = n('IMYl'),
        H = n('0kTQ'),
        U = 'AccountSwitcher_Add_Button',
        x = 'AccountSwitcher_Switch_Button',
        D = n('MWbm'),
        V = n('jtO7'),
        N = n('t62R'),
        z = n('0yYu'),
        W = n('IMA+'),
        J = n('Znyr'),
        K = n('rHpw'),
        X = n('v6aA'),
        Y = n('7JQg')
      function q(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function G(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? q(Object(n), !0).forEach(function (t) {
                b()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : q(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function Q(e) {
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
          var n,
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var Z = P.a.b8e1d524,
        $ = P.a.j0a8da6e,
        ee = P.a.b6bd6ae3,
        te = P.a.d2b8e92b,
        ne = P.a.dc65b3e4,
        re = P.a.i859a9d3,
        ae = 'https://help.twitter.com/managing-your-account/managing-multiple-twitter-accounts',
        oe = P.a.ae1bbb26,
        ie = P.a.bade139e,
        ce = P.a.ae33b982,
        ue = P.a.fa07bf68,
        se = P.a.d86bbf0f,
        le = P.a.h6beb5fa,
        de = { page: 'account_switcher' },
        fe = (function (e) {
          l()(n, e)
          var t = Q(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              b()(u()(e), 'state', { spinner: !1 }),
              b()(u()(e), '_render', function () {
                var t = e.context.featureSwitches.getNumberValue('responsive_web_multiple_account_limit', 5),
                  n = e.props.users.length >= t
                return g.createElement(
                  g.Fragment,
                  null,
                  e._renderUsers(),
                  g.createElement(V.a, {
                    align: 'left',
                    color: 'primary',
                    disabled: n,
                    label: $,
                    onPress: e._handleAddAccount,
                    testID: U,
                  }),
                  g.createElement(
                    D.a,
                    { style: [me.whiteBackground, me.infoText] },
                    g.createElement(
                      N.b,
                      { color: 'gray700' },
                      (n ? ne : te)({ maxAccounts: t }),
                      ' ',
                      g.createElement(N.b, { link: ae }, re),
                    ),
                  ),
                  g.createElement(z.a, null),
                  g.createElement(y.a, {
                    color: 'red500',
                    confirmationSheetConfirmButtonLabel: oe,
                    confirmationSheetConfirmButtonType: 'primary',
                    confirmationSheetHeadline: ce,
                    confirmationSheetText: ue,
                    key: 'logoutAllButton',
                    label: ie,
                    onConfirmationSheetConfirm: e._handleLogoutAll,
                    withBottomBorder: !1,
                  }),
                )
              }),
              b()(u()(e), '_renderUsers', function () {
                var t = e.props,
                  n = t.loggedInUser,
                  r = t.users
                return g.createElement(
                  g.Fragment,
                  null,
                  r.map(function (t) {
                    var r = n && t.user_id === n.id_str
                    return g.createElement(W.a, {
                      avatarUri: t.avatar_image_url,
                      badgeContext: 'account',
                      decoration: r ? e._renderCurrentUserCheckmark() : e._renderBadge(t.badgeCount),
                      displayMode: 'UserCompact',
                      isProtected: t.is_protected,
                      isVerified: t.is_verified,
                      key: t.screen_name,
                      name: t.name,
                      onCellClick: r ? void 0 : e._handleSwitchAccount(t.user_id, !!t.badgeCount),
                      screenName: t.screen_name,
                      style: me.whiteBackground,
                      testID: x,
                      userId: t.user_id,
                      withLink: !1,
                    })
                  }),
                )
              }),
              b()(u()(e), '_renderCurrentUserCheckmark', function () {
                return g.createElement(j.a, { accessibilityLabel: ee, style: me.iconCheckMark })
              }),
              b()(u()(e), '_renderBadge', function (e) {
                return e
                  ? g.createElement(
                      D.a,
                      null,
                      g.createElement(J.a, {
                        count: e,
                        standalone: !0,
                        truncatedCountFormatter: le,
                        unreadCountLabel: se,
                      }),
                    )
                  : null
              }),
              b()(u()(e), '_handleFetch', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchMultiAccountListIfNeeded)().catch(n())
              }),
              b()(u()(e), '_handleAddAccount', function () {
                var t = e.props,
                  n = t.history
                ;(0, t.scribeAction)(G(G({}, de), {}, { element: 'sign_in', action: 'click' })),
                  e.context.featureSwitches.isTrue('stateful_login_enabled')
                    ? n.push('/i/flow/login')
                    : n.push('/account/add')
              }),
              b()(u()(e), '_handleSwitchAccount', function (t, n) {
                return function () {
                  var r = e.props,
                    a = r.createLocalApiErrorHandler,
                    o = r.scribeAction,
                    i = r.switchAccount
                  e.setState({ spinner: !0 }),
                    o(G(G({}, de), {}, { element: n ? 'account_bubble_badged' : 'account_bubble', action: 'click' })),
                    i({ user_id: t }).catch(function (t) {
                      return e.setState({ spinner: !1 }), a(H.a)(t)
                    })
                }
              }),
              b()(u()(e), '_handleLogoutAll', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler,
                  r = t.logoutAll,
                  a = t.scribeAction,
                  o = t.sendAllPreviews
                e.setState({ spinner: !0 }),
                  a(G(G({}, de), {}, { element: 'logout_all', action: 'click' })),
                  o().finally(function () {
                    r().catch(function (t) {
                      return e.setState({ spinner: !1 }), n()(t)
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
                    r = this.state.spinner
                  return g.createElement(
                    R.b,
                    { history: n, title: Z },
                    g.createElement(M.a, {
                      fetchStatus: r ? T.a.LOADING : t,
                      onRequestRetry: this._handleFetch,
                      render: this._render,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(g.Component)
      b()(fe, 'contextType', X.a)
      var me = K.a.create(function (e) {
        return {
          iconCheckMark: { color: e.colors.primary, fontSize: '1.2em' },
          infoText: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 },
          whiteBackground: { backgroundColor: e.colors.cellBackground },
        }
      })
      t.default = Object(Y.c)(de)(F(fe))
    },
    '6oVL': function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('ddV6'),
        a = n.n(r),
        o = n('VrFO'),
        i = n.n(o),
        c = n('Y9Ll'),
        u = n.n(c),
        s = n('1Pcy'),
        l = n.n(s),
        d = n('5Yy7'),
        f = n.n(d),
        m = n('N+ot'),
        h = n.n(m),
        p = n('AuHH'),
        b = n.n(p),
        g = n('KEM+'),
        y = n.n(g),
        _ = (n('2G9S'), n('MvUL'), n('KqXw'), n('Ysgh'), n('ERkP')),
        v = n('3XMw'),
        w = n.n(v),
        S = n('cnVF'),
        E = n('Ukpf'),
        C = n('BTou'),
        A = n('mrHL'),
        k = 'LoginForm_Login_Button',
        L = n('fEA7'),
        B = n.n(L),
        O = n('MWbm'),
        F = n('Irs7'),
        T = n('v6aA'),
        M = n('/yvb'),
        R = n('rHpw')
      function I(e) {
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
          var n,
            r = b()(e)
          if (t) {
            var a = b()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      var P = w.a.e919c3bc,
        j = (function (e) {
          f()(n, e)
          var t = I(n)
          function n() {
            var e
            i()(this, n)
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              y()(l()(e), '_mobileLoginToken', B.a.v1().replace(/-/g, '')),
              y()(l()(e), '_handleSubmit', function () {
                var t = e.props,
                  n = t.analytics,
                  r = t.onSubmit
                if ((n.scribe({ action: 'submit' }), C.a.flushHTMLCache(), e._setLoginCookie(), r))
                  return r(e._form.elements), !1
              }),
              y()(l()(e), '_handleSubmitButtonClick', function () {
                !1 !== e._handleSubmit() && e._form.submit()
              }),
              y()(l()(e), '_setFormRef', function (t) {
                t && (e._form = t)
              }),
              y()(l()(e), '_setLoginCookie', function () {
                var t = new Date(Date.now())
                t.setTime(t.getTime() + 3e5),
                  Object(A.e)(S.q, e._mobileLoginToken, {
                    featureSwitches: e.context.featureSwitches,
                    cookieOptions: { domain: void 0, expires: t },
                  })
              }),
              e
            )
          }
          return (
            u()(n, [
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  this.props.autoSubmit && !e.autoSubmit && this._handleSubmitButtonClick()
                },
              },
              {
                key: 'componentDidMount',
                value: function () {
                  E.a.inject({ scriptId: 'jsInstLibrary', src: 'https://twitter.com/i/js_inst?c_name=ui_metrics' })
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    n = e.formActionUrl,
                    r = e.hideSubmitButton,
                    o = e.horizontalLayout,
                    i = e.loginReturnPath,
                    c = e.submitButtonDisabled,
                    u = e.submitButtonLabel,
                    s = e.submitButtonSize,
                    l = e.submitButtonStyle,
                    d = e.submitButtonType,
                    f = 'string' == typeof i ? i.split('?') : [],
                    m = a()(f, 2),
                    h = m[0],
                    p = m[1],
                    b = encodeURI(h || '/'),
                    g = p ? '?'.concat(p) : '',
                    y = ''.concat('').concat(b).concat(g),
                    v = _.createElement(
                      O.a,
                      { style: o && H.horizontalFields },
                      _.createElement('input', { name: 'redirect_after_login', type: 'hidden', value: y }),
                      _.createElement('input', { name: 'remember_me', type: 'hidden', value: '1' }),
                      _.createElement('input', {
                        name: 'authenticity_token',
                        type: 'hidden',
                        value: this._mobileLoginToken,
                      }),
                      _.createElement('input', { name: 'wfa', type: 'hidden', value: '1' }),
                      _.createElement('input', { autoComplete: 'off', name: 'ui_metrics', type: 'hidden' }),
                      t,
                      r
                        ? null
                        : _.createElement(
                            O.a,
                            { style: o && H.loginButtonContainer },
                            _.createElement(
                              M.a,
                              {
                                disabled: c,
                                onPress: this._handleSubmitButtonClick,
                                size: s,
                                style: l,
                                testID: k,
                                type: d,
                              },
                              u,
                            ),
                          ),
                    )
                  return _.createElement(
                    O.a,
                    { style: H.loginForm },
                    _.createElement('form', {
                      action: n,
                      children: v,
                      method: 'post',
                      noValidate: !0,
                      onSubmit: this._handleSubmit,
                      ref: this._setFormRef,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(_.Component)
      y()(j, 'contextType', T.a),
        y()(j, 'defaultProps', {
          autoSubmit: !1,
          formActionUrl: '/sessions',
          hideSubmitButton: !1,
          submitButtonDisabled: !1,
          submitButtonLabel: P,
          submitButtonType: 'brandFilled',
        })
      var H = R.a.create(function (e) {
        return {
          horizontalFields: { flexDirection: 'row', justifyContent: 'center', alignItems: 'stretch' },
          loginForm: { width: '100%' },
          loginButtonContainer: { flexDirection: 'column', justifyContent: 'center' },
        }
      })
      t.a = Object(F.a)(j, { element: 'inline_login_form' })
    },
    EPsT: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return w
      })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('1Pcy'),
        u = n.n(c),
        s = n('5Yy7'),
        l = n.n(s),
        d = n('N+ot'),
        f = n.n(d),
        m = n('AuHH'),
        h = n.n(m),
        p = n('KEM+'),
        b = n.n(p),
        g = n('ERkP'),
        y = n('jtO7'),
        _ = n('eb3s')
      function v(e) {
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
          var n,
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var w = (function (e) {
        l()(n, e)
        var t = v(n)
        function n(e) {
          var r
          return (
            a()(this, n),
            (r = t.call(this, e)),
            b()(u()(r), '_handleClick', function (e) {
              r.setState({ showConfirmation: !0 })
            }),
            b()(u()(r), '_handleCancel', function () {
              r.setState({ showConfirmation: !1 })
            }),
            b()(u()(r), '_handleConfirm', function () {
              r.setState({ showConfirmation: !1 }), r.props.onConfirmationSheetConfirm()
            }),
            (r.state = { showConfirmation: !1 }),
            r
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
                  r = e.confirmationSheetConfirmButtonLabel,
                  a = e.confirmationSheetConfirmButtonType,
                  o = e.confirmationSheetHeadline,
                  i = e.confirmationSheetText,
                  c = e.label
                return g.createElement(
                  g.Fragment,
                  null,
                  g.createElement(y.a, { align: t, color: n, label: c, onPress: this._handleClick }),
                  this.state.showConfirmation
                    ? g.createElement(_.a, {
                        confirmButtonLabel: r,
                        confirmButtonType: a,
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
      })(g.Component)
      b()(w, 'defaultProps', { color: 'red500', align: 'center' })
    },
    U13f: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'MultiAccountLoginScreen', function () {
          return D
        })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('1Pcy'),
        u = n.n(c),
        s = n('5Yy7'),
        l = n.n(s),
        d = n('N+ot'),
        f = n.n(d),
        m = n('AuHH'),
        h = n.n(m),
        p = n('KEM+'),
        b = n.n(p),
        g = (n('2G9S'), n('ERkP')),
        y = n('hqKg'),
        _ = n('oEGd'),
        v = n('auX9'),
        w = n('0KEI'),
        S = Object(y.createSelector)(v.f, v.g, v.j, function (e, t, n) {
          return { errorMessage: e, fetchStatus: t, multiAccountListLength: n.length }
        }),
        E = {
          fetchMultiAccountListIfNeeded: v.d,
          createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)(
            'ACCOUNT_SWITCHER_MULTI_ADD',
          ),
          addAccount: v.a,
          resetErrorMessages: v.e,
        },
        C = Object(_.g)(S, E),
        A = n('jHSc'),
        k = n('3Wr5'),
        L = n('3XMw'),
        B = n.n(L),
        O = n('6oVL'),
        F = n('5FtR'),
        T = n('t62R'),
        M = n('G1WX'),
        R = n('rHpw'),
        I = n('v6aA'),
        P = n('7JQg'),
        j = n('XJCT')
      function H(e) {
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
          var n,
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var U = B.a.b8e1d524,
        x = B.a.j0a8da6e,
        D = (function (e) {
          l()(n, e)
          var t = H(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              b()(u()(e), 'state', {
                autoSubmit: !1,
                passwordValue: '',
                passwordValueSet: !1,
                usernameValue: '',
                usernameValueSet: !1,
              }),
              b()(u()(e), '_render', function () {
                var t = e.props,
                  n = t.errorMessage,
                  r = t.multiAccountListLength,
                  a = e.state.autoSubmit,
                  o = e.context.featureSwitches.getNumberValue('responsive_web_multiple_account_limit', 5)
                return r && r >= o
                  ? g.createElement(F.a, { to: '/account/switch' })
                  : g.createElement(
                      g.Fragment,
                      null,
                      g.createElement(
                        T.b,
                        {
                          accessibilityRole: 'heading',
                          align: 'center',
                          size: 'headline1',
                          style: V.heading,
                          weight: 'bold',
                        },
                        x,
                      ),
                      n ? g.createElement(T.b, { color: 'magenta500', style: V.errorMessage }, n) : null,
                      g.createElement(
                        O.a,
                        {
                          autoSubmit: a,
                          hideSubmitButton: !1,
                          loginReturnPath: '/account/switch',
                          onSubmit: e._handleSubmit,
                          submitButtonDisabled: e._hasMissingFields(),
                          submitButtonSize: 'xLarge',
                          submitButtonStyle: V.submitButton,
                        },
                        g.createElement(j.b, {
                          onChange: e._handleUsernameFieldChange,
                          onSubmitEditing: e._handleSubmitEditing,
                          value: e.state.usernameValue,
                        }),
                        g.createElement(j.a, {
                          onChange: e._handlePasswordFieldChange,
                          onSubmitEditing: e._handleSubmitEditing,
                          value: e.state.passwordValue,
                          withForgotPasswordLink: !0,
                        }),
                      ),
                    )
              }),
              b()(u()(e), '_hasMissingFields', function () {
                var t = e.state,
                  n = t.passwordValueSet
                return !t.usernameValueSet || !n
              }),
              b()(u()(e), '_testInputTruthy', function (e) {
                return e && e.target && !!e.target.value
              }),
              b()(u()(e), '_handleUsernameFieldChange', function (t) {
                e.setState({ usernameValueSet: e._testInputTruthy(t) }), e.setState({ usernameValue: t.target.value })
              }),
              b()(u()(e), '_handlePasswordFieldChange', function (t) {
                e.setState({ passwordValueSet: e._testInputTruthy(t) }), e.setState({ passwordValue: t.target.value })
              }),
              b()(u()(e), '_handleSubmit', function (t) {
                var n = e.props,
                  r = n.addAccount,
                  a = n.createLocalApiErrorHandler
                if (!e._hasMissingFields()) {
                  var o = e.state,
                    i = o.passwordValue,
                    c = o.usernameValue,
                    u = t.namedItem('ui_metrics')
                  r({ username: c, password: i, redirectAfterLogin: '/home', uiMetrics: u ? u.value : void 0 }).catch(
                    a({}),
                  )
                }
              }),
              b()(u()(e), '_handleSubmitEditing', function () {
                e._hasMissingFields() || e.setState({ autoSubmit: !0 })
              }),
              b()(u()(e), '_handleFetch', function () {
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
                    r = Object(k.a)().hasMultiAccountCookie
                  return g.createElement(
                    A.b,
                    { backLocation: '/account/switch', history: n, title: U },
                    r
                      ? g.createElement(M.a, {
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
        })(g.Component)
      b()(D, 'contextType', I.a)
      var V = R.a.create(function (e) {
        return {
          submitButton: { marginHorizontal: e.spaces.space12 },
          heading: { marginVertical: e.spaces.space40 },
          errorMessage: { marginHorizontal: e.spaces.space12 },
        }
      })
      t.default = Object(P.c)({ page: 'account_switcher', section: 'login' })(C(D))
    },
    Ukpf: function (e, t, n) {
      'use strict'
      var r = {
        inject: function (e) {
          var t = e.callback,
            n = e.scriptId,
            r = e.src
          if (document.getElementById(n)) t && t()
          else {
            var a = document.createElement('script')
            ;(a.src = r),
              (a.id = n),
              (a.async = !0),
              (a.defer = !0),
              document.body.appendChild(a),
              (a.onload = function () {
                t && t()
              })
          }
        },
        replace: function (e) {
          var t,
            n = e.callback,
            a = e.scriptId,
            o = e.src,
            i = document.getElementById(a)
          i && (null === (t = i.parentNode) || void 0 === t || t.removeChild(i))
          r.inject({ callback: n, scriptId: a, src: o })
        },
      }
      t.a = r
    },
    XJCT: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return y
      }),
        n.d(t, 'b', function () {
          return k
        })
      var r = n('97Jx'),
        a = n.n(r),
        o = n('m3Bd'),
        i = n.n(o),
        c = n('ERkP'),
        u = n('t62R'),
        s = n('3XMw'),
        l = n.n(s),
        d = (n('yH/f'), n('ho0z'), n('p+r5')),
        f = Object.freeze({ password: 'password', username: 'username_or_email' }),
        m = function (e) {
          var t = e.name,
            n = i()(e, ['name'])
          return c.createElement(
            d.a,
            a()({ autoCapitalize: 'none', autoCorrect: !1, name: 'session['.concat(t, ']'), spellCheck: 'false' }, n),
          )
        },
        h = l.a.d1091f50,
        p = c.createElement(
          u.b,
          { link: { external: !0, pathname: 'https://twitter.com/account/begin_password_reset', openInSameFrame: !0 } },
          h,
        ),
        b = l.a.dec3c9b8,
        g = function (e) {
          var t = e.helperText,
            n = e.label,
            r = e.withForgotPasswordLink,
            o = i()(e, ['helperText', 'label', 'withForgotPasswordLink'])
          return c.createElement(
            m,
            a()({}, o, { helperText: r ? p : t, label: n || b, name: f.password, type: 'password' }),
          )
        }
      g.defaultProps = { autoFocus: !1, withForgotPasswordLink: !1 }
      var y = g,
        _ = n('v6aA'),
        v = function (e) {
          return e.isTrue('responsive_web_login_input_type_email_enabled') ? 'email' : void 0
        },
        w = l.a.e1ec8c17,
        S = l.a.d0a750f2,
        E = l.a.e2dd29b5,
        C = l.a.jb4eb245,
        A = function (e) {
          var t = e.autoFocus,
            n = e.label,
            r = e.withEmailDisabled,
            o = e.withPhoneDisabled,
            u = e.withUsernameDisabled,
            s = i()(e, ['autoFocus', 'label', 'withEmailDisabled', 'withPhoneDisabled', 'withUsernameDisabled']),
            l = c.useContext(_.a).featureSwitches,
            d = w
          return (
            u ? (d = S) : o ? (d = C) : r && (d = E),
            c.createElement(m, a()({}, s, { autoFocus: t, label: n || d, name: f.username, type: v(l) }))
          )
        }
      A.defaultProps = { autoFocus: !0, withUsernameDisabled: !1, withPhoneDisabled: !1, withEmailDisabled: !1 }
      var k = A
    },
    'qtu+': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return c
      })
      var r = n('4+NY'),
        a = n('oEOe'),
        o = n('5oBF'),
        i = {
          REQUEST: 'rweb/multiAccount/SWITCH_REQUEST',
          SUCCESS: 'rweb/multiAccount/SWITCH_SUCCESS',
          FAILURE: 'rweb/multiAccount/SWITCH_FAILURE',
        },
        c = function (e) {
          return function (t, n, c) {
            var u = c.api,
              s = Object(a.b)(t, { request: u.Auth.switch, params: e })
            return t(Object(o.f)()).then(function () {
              return t(Object(r.b)()).then(function () {
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
