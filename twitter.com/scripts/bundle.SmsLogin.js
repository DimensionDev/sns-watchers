;(window.webpackJsonp = window.webpackJsonp || []).push([
  [92],
  {
    '0crt': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'SmsLoginScreen', function () {
          return ee
        })
      n('OZaJ'), n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('VrFO'),
        i = n.n(r),
        o = n('Y9Ll'),
        a = n.n(o),
        c = n('1Pcy'),
        l = n.n(c),
        s = n('5Yy7'),
        u = n.n(s),
        m = n('N+ot'),
        p = n.n(m),
        f = n('AuHH'),
        d = n.n(f),
        h = n('KEM+'),
        b = n.n(h),
        g = (n('MvUL'), n('KqXw'), n('ERkP')),
        y = n.n(g),
        v = n('zh9S'),
        _ = n('RqPI'),
        E = n('hqKg'),
        L = n('0KEI'),
        S = n('oEGd'),
        O = n('kGix'),
        k = n('G6rE'),
        w = Object(E.createSelector)(
          function (e) {
            var t = _.h(e)
            return t ? Object(k.f)(['screen_name'])(e, t) : O.a.LOADING
          },
          _.u,
          O.d,
        ),
        P = Object(E.createSelector)(
          w,
          function (e) {
            var t = _.h(e),
              n = t && k.e.select(e, t)
            return n && n.screen_name
          },
          _.t,
          _.h,
          _.r,
          _.g,
          function (e, t, n, r, i, o) {
            var a = n ? 'true' === n.sms.eligible : void 0
            return {
              fetchStatus: e,
              isSmsEligible: a,
              loginReturnPath: i,
              phoneNumber: n ? n.sms.phone_number : void 0,
              shouldRedirectToEmailLiteLogin: !a && !!o,
              userId: r,
              userScreenName: t,
            }
          },
        ),
        R = {
          createLocalApiErrorHandler: Object(L.createLocalApiErrorHandlerWithContextFactory)('SMS_LOGIN_SCREEN'),
          fetchOneUserIfNeeded: k.e.fetchOneIfNeeded,
          fetchOneFactorLoginEligibility: _.c,
          scribeAction: v.c,
          setLoginReturnPath: _.z,
        },
        B = Object(S.g)(P, R),
        j = n('GOQE'),
        C = n('v//M'),
        T = n('3XMw'),
        N = n.n(T),
        A = n('lUZE'),
        I = n('6oVL'),
        F = n('yoO3'),
        U = 'legalTerm',
        D = n('fEA7'),
        x = n.n(D),
        M = n('mw9i'),
        H = n('t62R'),
        z = n('rHpw'),
        G = n('7JQg')
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
      function K(e) {
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
      function V(e) {
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
      var W = N.a.f0816dee,
        J = N.a.f9c558ae,
        X = N.a.haa104f0,
        Y = N.a.h25bc383,
        Z = N.a.ecde12c1,
        Q = N.a.j4824c52,
        $ = N.a.fca32b2f,
        ee = (function (e) {
          u()(n, e)
          var t = V(n)
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
                return y.a.createElement(
                  M.a,
                  { style: te.root, withGutter: !0 },
                  y.a.createElement(A.a, { style: te.icon }),
                  y.a.createElement(
                    H.b,
                    {
                      accessibilityRole: 'heading',
                      align: 'center',
                      size: 'title4',
                      style: te.heading,
                      weight: 'bold',
                    },
                    J({ userScreenName: i }),
                  ),
                  y.a.createElement(
                    H.b,
                    { align: 'center', color: 'gray700', size: 'body', style: te.phoneNumberText },
                    Z({ phoneNumber: n }),
                  ),
                  y.a.createElement(
                    I.a,
                    {
                      formActionUrl: '/login/error_options_sms',
                      loginReturnPath: t,
                      submitButtonLabel: X,
                      submitButtonStyle: te.submitButton,
                    },
                    y.a.createElement('input', { name: 'session[username_or_email]', type: 'hidden', value: i }),
                  ),
                  y.a.createElement(
                    H.b,
                    { align: 'center', style: te.buttonWrapper },
                    y.a.createElement(
                      H.b,
                      { align: 'center', link: o, onClick: r._handleScribePasswordLoginClick, weight: 'bold' },
                      Y,
                    ),
                  ),
                  y.a.createElement(
                    H.b,
                    { style: te.legalTerm },
                    y.a.createElement(
                      H.b,
                      { align: 'center', color: 'gray700', size: 'subtext2', weight: 'normal' },
                      Q,
                    ),
                    ' ',
                    y.a.createElement(
                      H.b,
                      {
                        align: 'center',
                        link: o,
                        onClick: r._handleUpdatePhoneNumberClick,
                        size: 'subtext2',
                        testID: U,
                      },
                      $,
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
                o ? (n().catch(t()), i(o).catch(t(j.a))) : r._redirectToLoginPage()
              }),
              b()(l()(r), '_handleScribePasswordLoginClick', function () {
                var e = r.props
                ;(0, e.scribeAction)(K(K({}, e.scribeNamespace), {}, { element: 'password_login', action: 'click' }))
              }),
              b()(l()(r), '_handleUpdatePhoneNumberClick', function () {
                var e = r.props,
                  t = e.scribeAction,
                  n = e.scribeNamespace
                ;(0, e.setLoginReturnPath)('/settings/phone'),
                  t(K(K({}, n), {}, { element: 'update_phone_number', action: 'click' }))
              }),
              b()(l()(r), '_redirectToLoginPage', function (e) {
                var t = r.props,
                  n = t.history,
                  i = t.shouldRedirectToEmailLiteLogin,
                  o = i ? '/i/flow/lite_login' : '/login',
                  a = i ? void 0 : { username_or_email: e }
                n.replace({ pathname: o, query: a })
              }),
              (r._mobileLoginToken = x.a.v1().replace(/-/g, '')),
              r
            )
          }
          return (
            a()(n, [
              {
                key: 'UNSAFE_componentWillReceiveProps',
                value: function (e) {
                  var t = e.fetchStatus,
                    n = e.isSmsEligible,
                    r = e.userScreenName
                  t !== O.a.LOADED || n || this._redirectToLoginPage(r)
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
                  return y.a.createElement(
                    F.a,
                    null,
                    y.a.createElement(C.a, {
                      accessibilityLabel: W,
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
        })(y.a.Component)
      b()(ee, 'defaultProps', { loginReturnPath: '/' })
      var te = z.a.create(function (e) {
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
      t.default = Object(G.c)({ page: 'login_sms' })(B(ee))
    },
    '6oVL': function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('ddV6'),
        i = n.n(r),
        o = n('VrFO'),
        a = n.n(o),
        c = n('Y9Ll'),
        l = n.n(c),
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
        _ = n.n(v),
        E = n('3XMw'),
        L = n.n(E),
        S = n('cnVF'),
        O = n('Ukpf'),
        k = n('BTou'),
        w = n('mrHL'),
        P = 'LoginForm_Login_Button',
        R = n('fEA7'),
        B = n.n(R),
        j = n('MWbm'),
        C = n('Irs7'),
        T = n('v6aA'),
        N = n('/yvb'),
        A = n('rHpw')
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
            var i = b()(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return d()(this, n)
        }
      }
      var F = L.a.e919c3bc,
        U = (function (e) {
          p()(n, e)
          var t = I(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              y()(u()(e), '_mobileLoginToken', B.a.v1().replace(/-/g, '')),
              y()(u()(e), '_handleSubmit', function () {
                var t = e.props,
                  n = t.analytics,
                  r = t.onSubmit
                if ((n.scribe({ action: 'submit' }), k.a.flushHTMLCache(), e._setLoginCookie(), r))
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
                  Object(w.e)(S.q, e._mobileLoginToken, {
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
                  O.a.inject({ scriptId: 'jsInstLibrary', src: 'https://twitter.com/i/js_inst?c_name=ui_metrics' })
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
                    a = e.loginReturnPath,
                    c = e.submitButtonDisabled,
                    l = e.submitButtonLabel,
                    s = e.submitButtonSize,
                    u = e.submitButtonStyle,
                    m = e.submitButtonType,
                    p = 'string' == typeof a ? a.split('?') : [],
                    f = i()(p, 2),
                    d = f[0],
                    h = f[1],
                    b = encodeURI(d || '/'),
                    g = h ? '?'.concat(h) : '',
                    y = ''.concat('').concat(b).concat(g),
                    v = _.a.createElement(
                      j.a,
                      { style: o && D.horizontalFields },
                      _.a.createElement('input', { name: 'redirect_after_login', type: 'hidden', value: y }),
                      _.a.createElement('input', { name: 'remember_me', type: 'hidden', value: '1' }),
                      _.a.createElement('input', {
                        name: 'authenticity_token',
                        type: 'hidden',
                        value: this._mobileLoginToken,
                      }),
                      _.a.createElement('input', { name: 'wfa', type: 'hidden', value: '1' }),
                      _.a.createElement('input', { autoComplete: 'off', name: 'ui_metrics', type: 'hidden' }),
                      t,
                      r
                        ? null
                        : _.a.createElement(
                            j.a,
                            { style: o && D.loginButtonContainer },
                            _.a.createElement(
                              N.a,
                              {
                                disabled: c,
                                onPress: this._handleSubmitButtonClick,
                                size: s,
                                style: u,
                                testID: P,
                                type: m,
                              },
                              l,
                            ),
                          ),
                    )
                  return _.a.createElement(
                    j.a,
                    { style: D.loginForm },
                    _.a.createElement('form', {
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
        })(_.a.Component)
      y()(U, 'contextType', T.a),
        y()(U, 'defaultProps', {
          autoSubmit: !1,
          formActionUrl: '/sessions',
          hideSubmitButton: !1,
          submitButtonDisabled: !1,
          submitButtonLabel: F,
          submitButtonType: 'brandFilled',
        })
      var D = A.a.create(function (e) {
        return {
          horizontalFields: { flexDirection: 'row', justifyContent: 'center', alignItems: 'stretch' },
          loginForm: { width: '100%' },
          loginButtonContainer: { flexDirection: 'column', justifyContent: 'center' },
        }
      })
      t.a = Object(C.a)(U, { element: 'inline_login_form' })
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
            a = document.getElementById(i)
          a && (null === (t = a.parentNode) || void 0 === t || t.removeChild(a))
          r.inject({ callback: n, scriptId: i, src: o })
        },
      }
      t.a = r
    },
  },
])
//# sourceMappingURL=WIPED
