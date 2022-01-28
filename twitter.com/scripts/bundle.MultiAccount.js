;(window.webpackJsonp = window.webpackJsonp || []).push([
  [66],
  {
    '0kTQ': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return s
      })
      var r,
        a = n('KEM+'),
        o = n.n(a),
        i = n('k49u'),
        c = n('LVU8'),
        u = n('3XMw'),
        l = n.n(u).a.b20a3893,
        s =
          ((r = {}),
          o()(r, i.a.AppInReadOnlyMode, { customAction: c.b }),
          o()(r, i.a.TargetUserNotFound, { toast: { text: l } }),
          o()(r, 'showToast', !0),
          r)
    },
    '1UMd': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'MultiAccountScreen', function () {
          return me
        })
      n('OZaJ'), n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('1Pcy'),
        u = n.n(c),
        l = n('5Yy7'),
        s = n.n(l),
        d = n('N+ot'),
        f = n.n(d),
        m = n('AuHH'),
        h = n.n(m),
        p = n('KEM+'),
        b = n.n(p),
        g = (n('2G9S'), n('z84I'), n('ho0z'), n('Qavd'), n('JtPf'), n('7x/C'), n('ERkP')),
        y = n.n(g),
        _ = n('EPsT'),
        v = n('hqKg'),
        w = n('zh9S'),
        S = n('5oBF'),
        E = n('qtu+'),
        C = n('G6rE'),
        A = n('0KEI'),
        k = n('oEGd'),
        L = n('auX9'),
        B = n('KkUe'),
        O = Object(v.createSelector)(C.e.selectLoggedInUser, L.g, L.j, function (e, t, n) {
          return { loggedInUser: e, fetchStatus: t, users: n }
        }),
        F = {
          fetchMultiAccountListIfNeeded: L.d,
          createLocalApiErrorHandler: Object(A.createLocalApiErrorHandlerWithContextFactory)(
            'ACCOUNT_SWITCHER_MULTI_LIST_FETCH',
          ),
          logout: B.a,
          logoutAll: B.b,
          scribeAction: w.c,
          sendAllPreviews: S.f,
          switchAccount: E.a,
        },
        R = Object(k.g)(O, F),
        T = n('kGix'),
        M = n('v//M'),
        I = n('jHSc'),
        P = n('3XMw'),
        j = n.n(P),
        H = n('IMYl'),
        U = n('0kTQ'),
        x = 'AccountSwitcher_Add_Button',
        D = 'AccountSwitcher_Switch_Button',
        V = n('MWbm'),
        z = n('jtO7'),
        N = n('t62R'),
        W = n('0yYu'),
        J = n('IMA+'),
        K = n('Znyr'),
        X = n('rHpw'),
        Y = n('v6aA'),
        q = n('7JQg')
      function G(e, t) {
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
      function Q(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? G(Object(n), !0).forEach(function (t) {
                b()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : G(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function Z(e) {
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
      var $ = j.a.b8e1d524,
        ee = j.a.j0a8da6e,
        te = j.a.b6bd6ae3,
        ne = j.a.d2b8e92b,
        re = j.a.dc65b3e4,
        ae = j.a.i859a9d3,
        oe = 'https://help.twitter.com/managing-your-account/managing-multiple-twitter-accounts',
        ie = j.a.ae1bbb26,
        ce = j.a.bade139e,
        ue = j.a.ae33b982,
        le = j.a.fa07bf68,
        se = j.a.d86bbf0f,
        de = j.a.h6beb5fa,
        fe = { page: 'account_switcher' },
        me = (function (e) {
          s()(n, e)
          var t = Z(n)
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
                return y.a.createElement(
                  y.a.Fragment,
                  null,
                  e._renderUsers(),
                  y.a.createElement(z.a, {
                    align: 'left',
                    color: 'primary',
                    disabled: n,
                    label: ee,
                    onPress: e._handleAddAccount,
                    testID: x,
                  }),
                  y.a.createElement(
                    V.a,
                    { style: [he.whiteBackground, he.infoText] },
                    y.a.createElement(
                      N.b,
                      { color: 'gray700' },
                      (n ? re : ne)({ maxAccounts: t }),
                      ' ',
                      y.a.createElement(N.b, { link: oe }, ae),
                    ),
                  ),
                  y.a.createElement(W.a, null),
                  y.a.createElement(_.a, {
                    color: 'red500',
                    confirmationSheetConfirmButtonLabel: ie,
                    confirmationSheetConfirmButtonType: 'primary',
                    confirmationSheetHeadline: ue,
                    confirmationSheetText: le,
                    key: 'logoutAllButton',
                    label: ce,
                    onConfirmationSheetConfirm: e._handleLogoutAll,
                    withBottomBorder: !1,
                  }),
                )
              }),
              b()(u()(e), '_renderUsers', function () {
                var t = e.props,
                  n = t.loggedInUser,
                  r = t.users
                return y.a.createElement(
                  y.a.Fragment,
                  null,
                  r.map(function (t) {
                    var r = n && t.user_id === n.id_str
                    return y.a.createElement(J.a, {
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
                      style: he.whiteBackground,
                      testID: D,
                      userId: t.user_id,
                      withLink: !1,
                    })
                  }),
                )
              }),
              b()(u()(e), '_renderCurrentUserCheckmark', function () {
                return y.a.createElement(H.a, { accessibilityLabel: te, style: he.iconCheckMark })
              }),
              b()(u()(e), '_renderBadge', function (e) {
                return e
                  ? y.a.createElement(
                      V.a,
                      null,
                      y.a.createElement(K.a, {
                        count: e,
                        standalone: !0,
                        truncatedCountFormatter: de,
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
                ;(0, t.scribeAction)(Q(Q({}, fe), {}, { element: 'sign_in', action: 'click' })),
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
                    o(Q(Q({}, fe), {}, { element: n ? 'account_bubble_badged' : 'account_bubble', action: 'click' })),
                    i({ user_id: t }).catch(function (t) {
                      return e.setState({ spinner: !1 }), a(U.a)(t)
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
                  a(Q(Q({}, fe), {}, { element: 'logout_all', action: 'click' })),
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
                  return y.a.createElement(
                    I.b,
                    { history: n, title: $ },
                    y.a.createElement(M.a, {
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
        })(y.a.Component)
      b()(me, 'contextType', Y.a)
      var he = X.a.create(function (e) {
        return {
          iconCheckMark: { color: e.colors.primary, fontSize: '1.2em' },
          infoText: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 },
          whiteBackground: { backgroundColor: e.colors.cellBackground },
        }
      })
      t.default = Object(q.c)(fe)(R(me))
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
        l = n('1Pcy'),
        s = n.n(l),
        d = n('5Yy7'),
        f = n.n(d),
        m = n('N+ot'),
        h = n.n(m),
        p = n('AuHH'),
        b = n.n(p),
        g = n('KEM+'),
        y = n.n(g),
        _ = (n('2G9S'), n('MvUL'), n('KqXw'), n('Ysgh'), n('ERkP')),
        v = n.n(_),
        w = n('3XMw'),
        S = n.n(w),
        E = n('cnVF'),
        C = n('Ukpf'),
        A = n('BTou'),
        k = n('mrHL'),
        L = 'LoginForm_Login_Button',
        B = n('fEA7'),
        O = n.n(B),
        F = n('MWbm'),
        R = n('Irs7'),
        T = n('v6aA'),
        M = n('/yvb'),
        I = n('rHpw')
      function P(e) {
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
      var j = S.a.e919c3bc,
        H = (function (e) {
          f()(n, e)
          var t = P(n)
          function n() {
            var e
            i()(this, n)
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              y()(s()(e), '_mobileLoginToken', O.a.v1().replace(/-/g, '')),
              y()(s()(e), '_handleSubmit', function () {
                var t = e.props,
                  n = t.analytics,
                  r = t.onSubmit
                if ((n.scribe({ action: 'submit' }), A.a.flushHTMLCache(), e._setLoginCookie(), r))
                  return r(e._form.elements), !1
              }),
              y()(s()(e), '_handleSubmitButtonClick', function () {
                !1 !== e._handleSubmit() && e._form.submit()
              }),
              y()(s()(e), '_setFormRef', function (t) {
                t && (e._form = t)
              }),
              y()(s()(e), '_setLoginCookie', function () {
                var t = new Date(Date.now())
                t.setTime(t.getTime() + 3e5),
                  Object(k.e)(E.q, e._mobileLoginToken, {
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
                  C.a.inject({ scriptId: 'jsInstLibrary', src: 'https://twitter.com/i/js_inst?c_name=ui_metrics' })
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
                    l = e.submitButtonSize,
                    s = e.submitButtonStyle,
                    d = e.submitButtonType,
                    f = 'string' == typeof i ? i.split('?') : [],
                    m = a()(f, 2),
                    h = m[0],
                    p = m[1],
                    b = encodeURI(h || '/'),
                    g = p ? '?'.concat(p) : '',
                    y = ''.concat('').concat(b).concat(g),
                    _ = v.a.createElement(
                      F.a,
                      { style: o && U.horizontalFields },
                      v.a.createElement('input', { name: 'redirect_after_login', type: 'hidden', value: y }),
                      v.a.createElement('input', { name: 'remember_me', type: 'hidden', value: '1' }),
                      v.a.createElement('input', {
                        name: 'authenticity_token',
                        type: 'hidden',
                        value: this._mobileLoginToken,
                      }),
                      v.a.createElement('input', { name: 'wfa', type: 'hidden', value: '1' }),
                      v.a.createElement('input', { autoComplete: 'off', name: 'ui_metrics', type: 'hidden' }),
                      t,
                      r
                        ? null
                        : v.a.createElement(
                            F.a,
                            { style: o && U.loginButtonContainer },
                            v.a.createElement(
                              M.a,
                              {
                                disabled: c,
                                onPress: this._handleSubmitButtonClick,
                                size: l,
                                style: s,
                                testID: L,
                                type: d,
                              },
                              u,
                            ),
                          ),
                    )
                  return v.a.createElement(
                    F.a,
                    { style: U.loginForm },
                    v.a.createElement('form', {
                      action: n,
                      children: _,
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
        })(v.a.Component)
      y()(H, 'contextType', T.a),
        y()(H, 'defaultProps', {
          autoSubmit: !1,
          formActionUrl: '/sessions',
          hideSubmitButton: !1,
          submitButtonDisabled: !1,
          submitButtonLabel: j,
          submitButtonType: 'brandFilled',
        })
      var U = I.a.create(function (e) {
        return {
          horizontalFields: { flexDirection: 'row', justifyContent: 'center', alignItems: 'stretch' },
          loginForm: { width: '100%' },
          loginButtonContainer: { flexDirection: 'column', justifyContent: 'center' },
        }
      })
      t.a = Object(R.a)(H, { element: 'inline_login_form' })
    },
    EPsT: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return S
      })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('1Pcy'),
        u = n.n(c),
        l = n('5Yy7'),
        s = n.n(l),
        d = n('N+ot'),
        f = n.n(d),
        m = n('AuHH'),
        h = n.n(m),
        p = n('KEM+'),
        b = n.n(p),
        g = n('ERkP'),
        y = n.n(g),
        _ = n('jtO7'),
        v = n('eb3s')
      function w(e) {
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
      var S = (function (e) {
        s()(n, e)
        var t = w(n)
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
                return y.a.createElement(
                  y.a.Fragment,
                  null,
                  y.a.createElement(_.a, { align: t, color: n, label: c, onPress: this._handleClick }),
                  this.state.showConfirmation
                    ? y.a.createElement(v.a, {
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
      })(y.a.Component)
      b()(S, 'defaultProps', { color: 'red500', align: 'center' })
    },
    U13f: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'MultiAccountLoginScreen', function () {
          return V
        })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('1Pcy'),
        u = n.n(c),
        l = n('5Yy7'),
        s = n.n(l),
        d = n('N+ot'),
        f = n.n(d),
        m = n('AuHH'),
        h = n.n(m),
        p = n('KEM+'),
        b = n.n(p),
        g = (n('2G9S'), n('ERkP')),
        y = n.n(g),
        _ = n('hqKg'),
        v = n('oEGd'),
        w = n('auX9'),
        S = n('0KEI'),
        E = Object(_.createSelector)(w.f, w.g, w.j, function (e, t, n) {
          return { errorMessage: e, fetchStatus: t, multiAccountListLength: n.length }
        }),
        C = {
          fetchMultiAccountListIfNeeded: w.d,
          createLocalApiErrorHandler: Object(S.createLocalApiErrorHandlerWithContextFactory)(
            'ACCOUNT_SWITCHER_MULTI_ADD',
          ),
          addAccount: w.a,
          resetErrorMessages: w.e,
        },
        A = Object(v.g)(E, C),
        k = n('jHSc'),
        L = n('3Wr5'),
        B = n('3XMw'),
        O = n.n(B),
        F = n('6oVL'),
        R = n('5FtR'),
        T = n('t62R'),
        M = n('G1WX'),
        I = n('rHpw'),
        P = n('v6aA'),
        j = n('7JQg'),
        H = n('XJCT')
      function U(e) {
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
      var x = O.a.b8e1d524,
        D = O.a.j0a8da6e,
        V = (function (e) {
          s()(n, e)
          var t = U(n)
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
                  ? y.a.createElement(R.a, { to: '/account/switch' })
                  : y.a.createElement(
                      y.a.Fragment,
                      null,
                      y.a.createElement(
                        T.b,
                        {
                          accessibilityRole: 'heading',
                          align: 'center',
                          size: 'headline1',
                          style: z.heading,
                          weight: 'bold',
                        },
                        D,
                      ),
                      n ? y.a.createElement(T.b, { color: 'magenta500', style: z.errorMessage }, n) : null,
                      y.a.createElement(
                        F.a,
                        {
                          autoSubmit: a,
                          hideSubmitButton: !1,
                          loginReturnPath: '/account/switch',
                          onSubmit: e._handleSubmit,
                          submitButtonDisabled: e._hasMissingFields(),
                          submitButtonSize: 'xLarge',
                          submitButtonStyle: z.submitButton,
                        },
                        y.a.createElement(H.b, {
                          onChange: e._handleUsernameFieldChange,
                          onSubmitEditing: e._handleSubmitEditing,
                          value: e.state.usernameValue,
                        }),
                        y.a.createElement(H.a, {
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
                    r = Object(L.a)().hasMultiAccountCookie
                  return y.a.createElement(
                    k.b,
                    { backLocation: '/account/switch', history: n, title: x },
                    r
                      ? y.a.createElement(M.a, {
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
        })(y.a.Component)
      b()(V, 'contextType', P.a)
      var z = I.a.create(function (e) {
        return {
          submitButton: { marginHorizontal: e.spaces.space12 },
          heading: { marginVertical: e.spaces.space40 },
          errorMessage: { marginHorizontal: e.spaces.space12 },
        }
      })
      t.default = Object(j.c)({ page: 'account_switcher', section: 'login' })(A(V))
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
        return _
      }),
        n.d(t, 'b', function () {
          return L
        })
      var r = n('97Jx'),
        a = n.n(r),
        o = n('m3Bd'),
        i = n.n(o),
        c = n('ERkP'),
        u = n.n(c),
        l = n('t62R'),
        s = n('3XMw'),
        d = n.n(s),
        f = (n('yH/f'), n('ho0z'), n('p+r5')),
        m = Object.freeze({ password: 'password', username: 'username_or_email' }),
        h = function (e) {
          var t = e.name,
            n = i()(e, ['name'])
          return u.a.createElement(
            f.a,
            a()({ autoCapitalize: 'none', autoCorrect: !1, name: 'session['.concat(t, ']'), spellCheck: 'false' }, n),
          )
        },
        p = d.a.d1091f50,
        b = u.a.createElement(
          l.b,
          { link: { external: !0, pathname: 'https://twitter.com/account/begin_password_reset', openInSameFrame: !0 } },
          p,
        ),
        g = d.a.dec3c9b8,
        y = function (e) {
          var t = e.helperText,
            n = e.label,
            r = e.withForgotPasswordLink,
            o = i()(e, ['helperText', 'label', 'withForgotPasswordLink'])
          return u.a.createElement(
            h,
            a()({}, o, { helperText: r ? b : t, label: n || g, name: m.password, type: 'password' }),
          )
        }
      y.defaultProps = { autoFocus: !1, withForgotPasswordLink: !1 }
      var _ = y,
        v = n('v6aA'),
        w = function (e) {
          return e.isTrue('responsive_web_login_input_type_email_enabled') ? 'email' : void 0
        },
        S = d.a.e1ec8c17,
        E = d.a.d0a750f2,
        C = d.a.e2dd29b5,
        A = d.a.jb4eb245,
        k = function (e) {
          var t = e.autoFocus,
            n = e.label,
            r = e.withEmailDisabled,
            o = e.withPhoneDisabled,
            c = e.withUsernameDisabled,
            l = i()(e, ['autoFocus', 'label', 'withEmailDisabled', 'withPhoneDisabled', 'withUsernameDisabled']),
            s = u.a.useContext(v.a).featureSwitches,
            d = S
          return (
            c ? (d = E) : o ? (d = A) : r && (d = C),
            u.a.createElement(h, a()({}, l, { autoFocus: t, label: n || d, name: m.username, type: w(s) }))
          )
        }
      k.defaultProps = { autoFocus: !0, withUsernameDisabled: !1, withPhoneDisabled: !1, withEmailDisabled: !1 }
      var L = k
    },
    jtO7: function (e, t, n) {
      'use strict'
      var r = n('97Jx'),
        a = n.n(r),
        o = n('m3Bd'),
        i = n.n(o),
        c = n('ERkP'),
        u = n.n(c),
        l = n('t62R'),
        s = n('I4+6'),
        d = n('cm6r'),
        f = n('rHpw'),
        m = n('MWbm'),
        h = f.a.create(function (e) {
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
          r = e.color,
          o = e.label,
          c = i()(e, ['align', 'color', 'label']),
          p = s.a.generate({
            backgroundColor: f.a.theme.colors.transparent,
            color: f.a.theme.colors[r],
            insetFocusRing: !0,
          })
        return u.a.createElement(
          m.a,
          { style: h.container },
          u.a.createElement(
            d.a,
            a()({}, c, { interactiveStyles: p, style: h.root }),
            u.a.createElement(l.b, { align: n, color: r }, o),
          ),
        )
      }
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
              l = Object(a.b)(t, { request: u.Auth.switch, params: e })
            return t(Object(o.f)()).then(function () {
              return t(Object(r.b)()).then(function () {
                return l({ actionTypes: i, context: 'SWITCH' }).then(function () {
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
