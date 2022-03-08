;(window.webpackJsonp = window.webpackJsonp || []).push([
  [99],
  {
    '0crt': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'SmsLoginScreen', function () {
          return K
        })
      var i = n('VrFO'),
        a = n.n(i),
        r = n('Y9Ll'),
        o = n.n(r),
        c = n('1Pcy'),
        l = n.n(c),
        s = n('5Yy7'),
        u = n.n(s),
        m = n('2VqO'),
        p = n.n(m),
        h = n('KEM+'),
        d = n.n(h),
        g = (n('KqXw'), n('MvUL'), n('ERkP')),
        b = n.n(g),
        f = n('RqPI'),
        y = n('hqKg'),
        _ = n('rxPX'),
        E = n('0KEI'),
        L = n('kGix'),
        S = n('G6rE'),
        v = Object(y.createSelector)(
          function (e) {
            var t = f.h(e)
            return t ? Object(S.f)(['screen_name'])(e, t) : L.a.LOADING
          },
          f.u,
          L.d,
        ),
        k = function (e) {
          var t = f.h(e),
            n = t && S.e.select(e, t)
          return n && n.screen_name
        },
        w = Object(_.a)()
          .propsFromState(function () {
            return {
              fetchStatus: v,
              loginEligibility: f.t,
              loginReturnPath: f.r,
              emailLiteLoginUserId: f.g,
              userId: f.h,
              userScreenName: k,
            }
          })
          .adjustStateProps(function (e) {
            var t = e.emailLiteLoginUserId,
              n = e.fetchStatus,
              i = e.loginEligibility,
              a = e.loginReturnPath,
              r = e.userId,
              o = e.userScreenName,
              c = i ? 'true' === i.sms.eligible : void 0
            return {
              fetchStatus: n,
              isSmsEligible: c,
              loginReturnPath: a,
              phoneNumber: i ? i.sms.phone_number : void 0,
              shouldRedirectToEmailLiteLogin: !c && !!t,
              userId: r,
              userScreenName: o,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(E.createLocalApiErrorHandlerWithContextFactory)('SMS_LOGIN_SCREEN'),
              fetchOneUserIfNeeded: S.e.fetchOneIfNeeded,
              fetchOneFactorLoginEligibility: f.c,
              setLoginReturnPath: f.z,
            }
          })
          .withAnalytics({ page: 'login_sms' }),
        P = n('GOQE'),
        T = n('v//M'),
        C = n('3XMw'),
        R = n.n(C),
        B = n('lUZE'),
        F = n('6oVL'),
        I = n('yoO3'),
        N = 'legalTerm',
        O = n('fEA7'),
        U = n.n(O),
        A = n('mw9i'),
        j = n('t62R'),
        x = n('rHpw'),
        D = R.a.f0816dee,
        M = R.a.f9c558ae,
        z = R.a.haa104f0,
        q = R.a.h25bc383,
        V = R.a.ecde12c1,
        G = R.a.j4824c52,
        H = R.a.fca32b2f,
        K = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n(e) {
            var i
            return (
              a()(this, n),
              (i = t.call(this, e)),
              d()(l()(i), '_renderContent', function () {
                var e = i.props,
                  t = e.loginReturnPath,
                  n = e.phoneNumber,
                  a = e.userScreenName,
                  r = a ? '/login?username_or_email='.concat(encodeURIComponent(a)) : '/login'
                return b.a.createElement(
                  A.a,
                  { style: W.root, withGutter: !0 },
                  b.a.createElement(B.a, { style: W.icon }),
                  b.a.createElement(
                    j.b,
                    { accessibilityRole: 'heading', align: 'center', size: 'title4', style: W.heading, weight: 'bold' },
                    M({ userScreenName: a }),
                  ),
                  b.a.createElement(
                    j.b,
                    { align: 'center', color: 'gray700', size: 'body', style: W.phoneNumberText },
                    V({ phoneNumber: n }),
                  ),
                  b.a.createElement(
                    F.a,
                    {
                      formActionUrl: '/login/error_options_sms',
                      loginReturnPath: t,
                      submitButtonLabel: z,
                      submitButtonStyle: W.submitButton,
                    },
                    b.a.createElement('input', { name: 'session[username_or_email]', type: 'hidden', value: a }),
                  ),
                  b.a.createElement(
                    j.b,
                    { align: 'center', style: W.buttonWrapper },
                    b.a.createElement(
                      j.b,
                      { align: 'center', link: r, onClick: i._handleScribePasswordLoginClick, weight: 'bold' },
                      q,
                    ),
                  ),
                  b.a.createElement(
                    j.b,
                    { style: W.legalTerm },
                    b.a.createElement(
                      j.b,
                      { align: 'center', color: 'gray700', size: 'subtext2', weight: 'normal' },
                      G,
                    ),
                    ' ',
                    b.a.createElement(
                      j.b,
                      {
                        align: 'center',
                        link: r,
                        onClick: i._handleUpdatePhoneNumberClick,
                        size: 'subtext2',
                        testID: N,
                      },
                      H,
                    ),
                  ),
                )
              }),
              d()(l()(i), '_handleFetchUserAndLoginEligibility', function () {
                var e = i.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.fetchOneFactorLoginEligibility,
                  a = e.fetchOneUserIfNeeded,
                  r = e.userId
                r ? (n().catch(t()), a(r).catch(t(P.a))) : i._redirectToLoginPage()
              }),
              d()(l()(i), '_handleScribePasswordLoginClick', function () {
                i.props.analytics.scribe({ element: 'password_login', action: 'click' })
              }),
              d()(l()(i), '_handleUpdatePhoneNumberClick', function () {
                var e = i.props,
                  t = e.analytics
                ;(0, e.setLoginReturnPath)('/settings/phone'),
                  t.scribe({ element: 'update_phone_number', action: 'click' })
              }),
              d()(l()(i), '_redirectToLoginPage', function (e) {
                var t = i.props,
                  n = t.history,
                  a = t.shouldRedirectToEmailLiteLogin,
                  r = a ? '/i/flow/lite_login' : '/login',
                  o = a ? void 0 : { username_or_email: e }
                n.replace({ pathname: r, query: o })
              }),
              (i._mobileLoginToken = U.a.v1().replace(/-/g, '')),
              i
            )
          }
          return (
            o()(n, [
              {
                key: 'UNSAFE_componentWillReceiveProps',
                value: function (e) {
                  var t = e.fetchStatus,
                    n = e.isSmsEligible,
                    i = e.userScreenName
                  t !== L.a.LOADED || n || this._redirectToLoginPage(i)
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
                  return b.a.createElement(
                    I.a,
                    null,
                    b.a.createElement(T.a, {
                      accessibilityLabel: D,
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
        })(b.a.Component)
      d()(K, 'defaultProps', { loginReturnPath: '/' })
      var W = x.a.create(function (e) {
          return {
            root: { marginTop: e.spaces.space48 },
            icon: { color: e.colors.brandColor, height: e.spaces.space40, marginBottom: e.spaces.space12 },
            heading: { marginTop: e.spaces.space64, width: '100%' },
            phoneNumberText: { marginTop: e.spaces.space16, marginBottom: e.spaces.space48 },
            buttonWrapper: { marginTop: e.spaces.space20 },
            legalTerm: { marginTop: e.spaces.space32, textAlign: 'center' },
            submitButton: { alignSelf: 'center' },
          }
        }),
        X = w(K)
      t.default = X
    },
    '6oVL': function (e, t, n) {
      'use strict'
      var i = n('ddV6'),
        a = n.n(i),
        r = n('VrFO'),
        o = n.n(r),
        c = n('Y9Ll'),
        l = n.n(c),
        s = n('1Pcy'),
        u = n.n(s),
        m = n('5Yy7'),
        p = n.n(m),
        h = n('2VqO'),
        d = n.n(h),
        g = n('KEM+'),
        b = n.n(g),
        f = (n('2G9S'), n('KqXw'), n('MvUL'), n('Ysgh'), n('ERkP')),
        y = n.n(f),
        _ = n('3XMw'),
        E = n.n(_),
        L = n('cnVF'),
        S = n('Ukpf'),
        v = n('BTou'),
        k = n('mrHL'),
        w = 'LoginForm_Login_Button',
        P = n('fEA7'),
        T = n.n(P),
        C = n('MWbm'),
        R = n('Irs7'),
        B = n('v6aA'),
        F = n('/yvb'),
        I = n('rHpw'),
        N = E.a.e919c3bc,
        O = (function (e) {
          p()(n, e)
          var t = d()(n)
          function n() {
            var e
            o()(this, n)
            for (var i = arguments.length, a = new Array(i), r = 0; r < i; r++) a[r] = arguments[r]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              b()(u()(e), '_mobileLoginToken', T.a.v1().replace(/-/g, '')),
              b()(u()(e), '_handleSubmit', function () {
                var t = e.props,
                  n = t.analytics,
                  i = t.onSubmit
                if ((n.scribe({ action: 'submit' }), v.a.flushHTMLCache(), e._setLoginCookie(), i))
                  return i(e._form.elements), !1
              }),
              b()(u()(e), '_handleSubmitButtonClick', function () {
                !1 !== e._handleSubmit() && e._form.submit()
              }),
              b()(u()(e), '_setFormRef', function (t) {
                t && (e._form = t)
              }),
              b()(u()(e), '_setLoginCookie', function () {
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
                    i = e.hideSubmitButton,
                    r = e.horizontalLayout,
                    o = e.loginReturnPath,
                    c = e.submitButtonDisabled,
                    l = e.submitButtonLabel,
                    s = e.submitButtonSize,
                    u = e.submitButtonStyle,
                    m = e.submitButtonType,
                    p = 'string' == typeof o ? o.split('?') : [],
                    h = a()(p, 2),
                    d = h[0],
                    g = h[1],
                    b = encodeURI(d || '/'),
                    f = g ? '?'.concat(g) : '',
                    _ = ''.concat('').concat(b).concat(f),
                    E = y.a.createElement(
                      C.a,
                      { style: r && U.horizontalFields },
                      y.a.createElement('input', { name: 'redirect_after_login', type: 'hidden', value: _ }),
                      y.a.createElement('input', { name: 'remember_me', type: 'hidden', value: '1' }),
                      y.a.createElement('input', {
                        name: 'authenticity_token',
                        type: 'hidden',
                        value: this._mobileLoginToken,
                      }),
                      y.a.createElement('input', { name: 'wfa', type: 'hidden', value: '1' }),
                      y.a.createElement('input', { autoComplete: 'off', name: 'ui_metrics', type: 'hidden' }),
                      t,
                      i
                        ? null
                        : y.a.createElement(
                            C.a,
                            { style: r && U.loginButtonContainer },
                            y.a.createElement(
                              F.a,
                              {
                                disabled: c,
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
                  return y.a.createElement(
                    C.a,
                    { style: U.loginForm },
                    y.a.createElement('form', {
                      action: n,
                      children: E,
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
        })(y.a.Component)
      b()(O, 'contextType', B.a),
        b()(O, 'defaultProps', {
          autoSubmit: !1,
          formActionUrl: '/sessions',
          hideSubmitButton: !1,
          submitButtonDisabled: !1,
          submitButtonLabel: N,
          submitButtonType: 'brandFilled',
        })
      var U = I.a.create(function (e) {
        return {
          horizontalFields: { flexDirection: 'row', justifyContent: 'center', alignItems: 'stretch' },
          loginForm: { width: '100%' },
          loginButtonContainer: { flexDirection: 'column', justifyContent: 'center' },
        }
      })
      t.a = Object(R.a)(O, { element: 'inline_login_form' })
    },
  },
])
//# sourceMappingURL=WIPED
