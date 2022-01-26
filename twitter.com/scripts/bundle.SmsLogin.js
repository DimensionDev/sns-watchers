;(window.webpackJsonp = window.webpackJsonp || []).push([
  [91],
  {
    '0crt': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'SmsLoginScreen', function () {
          return $
        })
      n('OZaJ'), n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('VrFO'),
        i = n.n(r),
        o = n('Y9Ll'),
        c = n.n(o),
        a = n('1Pcy'),
        l = n.n(a),
        s = n('5Yy7'),
        u = n.n(s),
        m = n('N+ot'),
        p = n.n(m),
        f = n('AuHH'),
        d = n.n(f),
        h = n('KEM+'),
        b = n.n(h),
        g = (n('MvUL'), n('KqXw'), n('ERkP')),
        y = n('zh9S'),
        v = n('RqPI'),
        _ = n('hqKg'),
        E = n('0KEI'),
        L = n('oEGd'),
        S = n('kGix'),
        O = n('G6rE'),
        k = Object(_.createSelector)(
          function (e) {
            var t = v.h(e)
            return t ? Object(O.f)(['screen_name'])(e, t) : S.a.LOADING
          },
          v.u,
          S.d,
        ),
        w = Object(_.createSelector)(
          k,
          function (e) {
            var t = v.h(e),
              n = t && O.e.select(e, t)
            return n && n.screen_name
          },
          v.t,
          v.h,
          v.r,
          v.g,
          function (e, t, n, r, i, o) {
            var c = n ? 'true' === n.sms.eligible : void 0
            return {
              fetchStatus: e,
              isSmsEligible: c,
              loginReturnPath: i,
              phoneNumber: n ? n.sms.phone_number : void 0,
              shouldRedirectToEmailLiteLogin: !c && !!o,
              userId: r,
              userScreenName: t,
            }
          },
        ),
        P = {
          createLocalApiErrorHandler: Object(E.createLocalApiErrorHandlerWithContextFactory)('SMS_LOGIN_SCREEN'),
          fetchOneUserIfNeeded: O.e.fetchOneIfNeeded,
          fetchOneFactorLoginEligibility: v.c,
          scribeAction: y.c,
          setLoginReturnPath: v.y,
        },
        R = Object(L.g)(w, P),
        B = n('GOQE'),
        j = n('v//M'),
        C = n('3XMw'),
        T = n.n(C),
        N = n('lUZE'),
        A = n('6oVL'),
        I = n('yoO3'),
        F = 'legalTerm',
        U = n('fEA7'),
        D = n.n(U),
        x = n('mw9i'),
        M = n('t62R'),
        H = n('rHpw'),
        z = n('7JQg')
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
      function q(e) {
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
      function K(e) {
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
            r = d()(e)
          if (t) {
            var i = d()(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var V = T.a.f0816dee,
        W = T.a.f9c558ae,
        J = T.a.haa104f0,
        X = T.a.h25bc383,
        Y = T.a.ecde12c1,
        Z = T.a.j4824c52,
        Q = T.a.fca32b2f,
        $ = (function (e) {
          u()(n, e)
          var t = K(n)
          function n(e) {
            var r
            return (
              i()(this, n),
              (r = t.call(this, e)),
              b()(l()(r), '_renderContent', function () {
                var e = r.props,
                  t = e.loginReturnPath,
                  n = e.phoneNumber,
                  i = e.userScreenName,
                  o = i ? '/login?username_or_email='.concat(encodeURIComponent(i)) : '/login'
                return g.createElement(
                  x.a,
                  { style: ee.root, withGutter: !0 },
                  g.createElement(N.a, { style: ee.icon }),
                  g.createElement(
                    M.b,
                    {
                      accessibilityRole: 'heading',
                      align: 'center',
                      size: 'title4',
                      style: ee.heading,
                      weight: 'bold',
                    },
                    W({ userScreenName: i }),
                  ),
                  g.createElement(
                    M.b,
                    { align: 'center', color: 'gray700', size: 'body', style: ee.phoneNumberText },
                    Y({ phoneNumber: n }),
                  ),
                  g.createElement(
                    A.a,
                    {
                      formActionUrl: '/login/error_options_sms',
                      loginReturnPath: t,
                      submitButtonLabel: J,
                      submitButtonStyle: ee.submitButton,
                    },
                    g.createElement('input', { name: 'session[username_or_email]', type: 'hidden', value: i }),
                  ),
                  g.createElement(
                    M.b,
                    { align: 'center', style: ee.buttonWrapper },
                    g.createElement(
                      M.b,
                      { align: 'center', link: o, onClick: r._handleScribePasswordLoginClick, weight: 'bold' },
                      X,
                    ),
                  ),
                  g.createElement(
                    M.b,
                    { style: ee.legalTerm },
                    g.createElement(M.b, { align: 'center', color: 'gray700', size: 'subtext2', weight: 'normal' }, Z),
                    ' ',
                    g.createElement(
                      M.b,
                      {
                        align: 'center',
                        link: o,
                        onClick: r._handleUpdatePhoneNumberClick,
                        size: 'subtext2',
                        testID: F,
                      },
                      Q,
                    ),
                  ),
                )
              }),
              b()(l()(r), '_handleFetchUserAndLoginEligibility', function () {
                var e = r.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.fetchOneFactorLoginEligibility,
                  i = e.fetchOneUserIfNeeded,
                  o = e.userId
                o ? (n().catch(t()), i(o).catch(t(B.a))) : r._redirectToLoginPage()
              }),
              b()(l()(r), '_handleScribePasswordLoginClick', function () {
                var e = r.props
                ;(0, e.scribeAction)(q(q({}, e.scribeNamespace), {}, { element: 'password_login', action: 'click' }))
              }),
              b()(l()(r), '_handleUpdatePhoneNumberClick', function () {
                var e = r.props,
                  t = e.scribeAction,
                  n = e.scribeNamespace
                ;(0, e.setLoginReturnPath)('/settings/phone'),
                  t(q(q({}, n), {}, { element: 'update_phone_number', action: 'click' }))
              }),
              b()(l()(r), '_redirectToLoginPage', function (e) {
                var t = r.props,
                  n = t.history,
                  i = t.shouldRedirectToEmailLiteLogin,
                  o = i ? '/i/flow/lite_login' : '/login',
                  c = i ? void 0 : { username_or_email: e }
                n.replace({ pathname: o, query: c })
              }),
              (r._mobileLoginToken = D.a.v1().replace(/-/g, '')),
              r
            )
          }
          return (
            c()(n, [
              {
                key: 'UNSAFE_componentWillReceiveProps',
                value: function (e) {
                  var t = e.fetchStatus,
                    n = e.isSmsEligible,
                    r = e.userScreenName
                  t !== S.a.LOADED || n || this._redirectToLoginPage(r)
                },
              },
              {
                key: 'UNSAFE_componentWillMount',
                value: function () {
                  this._handleFetchUserAndLoginEligibility()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props.fetchStatus
                  return g.createElement(
                    I.a,
                    null,
                    g.createElement(j.a, {
                      accessibilityLabel: V,
                      fetchStatus: e,
                      onRequestRetry: this._handleFetchUserAndLoginEligibility,
                      render: this._renderContent,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(g.Component)
      b()($, 'defaultProps', { loginReturnPath: '/' })
      var ee = H.a.create(function (e) {
        return {
          root: { marginTop: e.spaces.space48 },
          icon: { color: e.colors.brandColor, height: e.spaces.space40, marginBottom: e.spaces.space12 },
          heading: { marginTop: e.spaces.space64, width: '100%' },
          phoneNumberText: { marginTop: e.spaces.space16, marginBottom: e.spaces.space48 },
          buttonWrapper: { marginTop: e.spaces.space20 },
          legalTerm: { marginTop: e.spaces.space32, textAlign: 'center' },
          submitButton: { alignSelf: 'center' },
        }
      })
      t.default = Object(z.c)({ page: 'login_sms' })(R($))
    },
    '6oVL': function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('ddV6'),
        i = n.n(r),
        o = n('VrFO'),
        c = n.n(o),
        a = n('Y9Ll'),
        l = n.n(a),
        s = n('1Pcy'),
        u = n.n(s),
        m = n('5Yy7'),
        p = n.n(m),
        f = n('N+ot'),
        d = n.n(f),
        h = n('AuHH'),
        b = n.n(h),
        g = n('KEM+'),
        y = n.n(g),
        v = (n('2G9S'), n('MvUL'), n('KqXw'), n('Ysgh'), n('ERkP')),
        _ = n('3XMw'),
        E = n.n(_),
        L = n('cnVF'),
        S = n('Ukpf'),
        O = n('BTou'),
        k = n('mrHL'),
        w = 'LoginForm_Login_Button',
        P = n('fEA7'),
        R = n.n(P),
        B = n('MWbm'),
        j = n('Irs7'),
        C = n('v6aA'),
        T = n('/yvb'),
        N = n('rHpw')
      function A(e) {
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
            var i = b()(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return d()(this, n)
        }
      }
      var I = E.a.e919c3bc,
        F = (function (e) {
          p()(n, e)
          var t = A(n)
          function n() {
            var e
            c()(this, n)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              y()(u()(e), '_mobileLoginToken', R.a.v1().replace(/-/g, '')),
              y()(u()(e), '_handleSubmit', function () {
                var t = e.props,
                  n = t.analytics,
                  r = t.onSubmit
                if ((n.scribe({ action: 'submit' }), O.a.flushHTMLCache(), e._setLoginCookie(), r))
                  return r(e._form.elements), !1
              }),
              y()(u()(e), '_handleSubmitButtonClick', function () {
                !1 !== e._handleSubmit() && e._form.submit()
              }),
              y()(u()(e), '_setFormRef', function (t) {
                t && (e._form = t)
              }),
              y()(u()(e), '_setLoginCookie', function () {
                var t = new Date(Date.now())
                t.setTime(t.getTime() + 3e5),
                  Object(k.e)(L.q, e._mobileLoginToken, {
                    featureSwitches: e.context.featureSwitches,
                    cookieOptions: { domain: void 0, expires: t },
                  })
              }),
              e
            )
          }
          return (
            l()(n, [
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  this.props.autoSubmit && !e.autoSubmit && this._handleSubmitButtonClick()
                },
              },
              {
                key: 'componentDidMount',
                value: function () {
                  S.a.inject({ scriptId: 'jsInstLibrary', src: 'https://twitter.com/i/js_inst?c_name=ui_metrics' })
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
                    c = e.loginReturnPath,
                    a = e.submitButtonDisabled,
                    l = e.submitButtonLabel,
                    s = e.submitButtonSize,
                    u = e.submitButtonStyle,
                    m = e.submitButtonType,
                    p = 'string' == typeof c ? c.split('?') : [],
                    f = i()(p, 2),
                    d = f[0],
                    h = f[1],
                    b = encodeURI(d || '/'),
                    g = h ? '?'.concat(h) : '',
                    y = ''.concat('').concat(b).concat(g),
                    _ = v.createElement(
                      B.a,
                      { style: o && U.horizontalFields },
                      v.createElement('input', { name: 'redirect_after_login', type: 'hidden', value: y }),
                      v.createElement('input', { name: 'remember_me', type: 'hidden', value: '1' }),
                      v.createElement('input', {
                        name: 'authenticity_token',
                        type: 'hidden',
                        value: this._mobileLoginToken,
                      }),
                      v.createElement('input', { name: 'wfa', type: 'hidden', value: '1' }),
                      v.createElement('input', { autoComplete: 'off', name: 'ui_metrics', type: 'hidden' }),
                      t,
                      r
                        ? null
                        : v.createElement(
                            B.a,
                            { style: o && U.loginButtonContainer },
                            v.createElement(
                              T.a,
                              {
                                disabled: a,
                                onPress: this._handleSubmitButtonClick,
                                size: s,
                                style: u,
                                testID: w,
                                type: m,
                              },
                              l,
                            ),
                          ),
                    )
                  return v.createElement(
                    B.a,
                    { style: U.loginForm },
                    v.createElement('form', {
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
        })(v.Component)
      y()(F, 'contextType', C.a),
        y()(F, 'defaultProps', {
          autoSubmit: !1,
          formActionUrl: '/sessions',
          hideSubmitButton: !1,
          submitButtonDisabled: !1,
          submitButtonLabel: I,
          submitButtonType: 'brandFilled',
        })
      var U = N.a.create(function (e) {
        return {
          horizontalFields: { flexDirection: 'row', justifyContent: 'center', alignItems: 'stretch' },
          loginForm: { width: '100%' },
          loginButtonContainer: { flexDirection: 'column', justifyContent: 'center' },
        }
      })
      t.a = Object(j.a)(F, { element: 'inline_login_form' })
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
            var i = document.createElement('script')
            ;(i.src = r),
              (i.id = n),
              (i.async = !0),
              (i.defer = !0),
              document.body.appendChild(i),
              (i.onload = function () {
                t && t()
              })
          }
        },
        replace: function (e) {
          var t,
            n = e.callback,
            i = e.scriptId,
            o = e.src,
            c = document.getElementById(i)
          c && (null === (t = c.parentNode) || void 0 === t || t.removeChild(c))
          r.inject({ callback: n, scriptId: i, src: o })
        },
      }
      t.a = r
    },
  },
])
//# sourceMappingURL=WIPED
