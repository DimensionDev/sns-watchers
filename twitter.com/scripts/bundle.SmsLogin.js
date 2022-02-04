;(window.webpackJsonp = window.webpackJsonp || []).push([
  [93],
  {
    '0crt': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'SmsLoginScreen', function () {
          return Q
        })
      var i = n('yiKp'),
        a = n.n(i),
        o = n('VrFO'),
        r = n.n(o),
        c = n('Y9Ll'),
        l = n.n(c),
        s = n('1Pcy'),
        u = n.n(s),
        m = n('5Yy7'),
        p = n.n(m),
        h = n('2VqO'),
        d = n.n(h),
        b = n('KEM+'),
        g = n.n(b),
        f = (n('KqXw'), n('MvUL'), n('ERkP')),
        _ = n.n(f),
        y = n('zh9S'),
        E = n('RqPI'),
        v = n('hqKg'),
        L = n('0KEI'),
        S = n('oEGd'),
        k = n('kGix'),
        w = n('G6rE'),
        T = Object(v.createSelector)(
          function (e) {
            var t = E.h(e)
            return t ? Object(w.f)(['screen_name'])(e, t) : k.a.LOADING
          },
          E.u,
          k.d,
        ),
        C = Object(v.createSelector)(
          T,
          function (e) {
            var t = E.h(e),
              n = t && w.e.select(e, t)
            return n && n.screen_name
          },
          E.t,
          E.h,
          E.r,
          E.g,
          function (e, t, n, i, a, o) {
            var r = n ? 'true' === n.sms.eligible : void 0
            return {
              fetchStatus: e,
              isSmsEligible: r,
              loginReturnPath: a,
              phoneNumber: n ? n.sms.phone_number : void 0,
              shouldRedirectToEmailLiteLogin: !r && !!o,
              userId: i,
              userScreenName: t,
            }
          },
        ),
        B = {
          createLocalApiErrorHandler: Object(L.createLocalApiErrorHandlerWithContextFactory)('SMS_LOGIN_SCREEN'),
          fetchOneUserIfNeeded: w.e.fetchOneIfNeeded,
          fetchOneFactorLoginEligibility: E.c,
          scribeAction: y.c,
          setLoginReturnPath: E.z,
        },
        O = Object(S.g)(C, B),
        P = n('GOQE'),
        R = n('v//M'),
        A = n('3XMw'),
        N = n.n(A),
        F = n('lUZE'),
        U = n('6oVL'),
        I = n('yoO3'),
        j = 'legalTerm',
        D = n('fEA7'),
        x = n.n(D),
        M = n('mw9i'),
        z = n('t62R'),
        q = n('rHpw'),
        V = n('7JQg'),
        G = N.a.f0816dee,
        H = N.a.f9c558ae,
        K = N.a.haa104f0,
        W = N.a.h25bc383,
        Y = N.a.ecde12c1,
        X = N.a.j4824c52,
        J = N.a.fca32b2f,
        Q = (function (e) {
          p()(n, e)
          var t = d()(n)
          function n(e) {
            var i
            return (
              r()(this, n),
              (i = t.call(this, e)),
              g()(u()(i), '_renderContent', function () {
                var e = i.props,
                  t = e.loginReturnPath,
                  n = e.phoneNumber,
                  a = e.userScreenName,
                  o = a ? '/login?username_or_email='.concat(encodeURIComponent(a)) : '/login'
                return _.a.createElement(
                  M.a,
                  { style: Z.root, withGutter: !0 },
                  _.a.createElement(F.a, { style: Z.icon }),
                  _.a.createElement(
                    z.b,
                    { accessibilityRole: 'heading', align: 'center', size: 'title4', style: Z.heading, weight: 'bold' },
                    H({ userScreenName: a }),
                  ),
                  _.a.createElement(
                    z.b,
                    { align: 'center', color: 'gray700', size: 'body', style: Z.phoneNumberText },
                    Y({ phoneNumber: n }),
                  ),
                  _.a.createElement(
                    U.a,
                    {
                      formActionUrl: '/login/error_options_sms',
                      loginReturnPath: t,
                      submitButtonLabel: K,
                      submitButtonStyle: Z.submitButton,
                    },
                    _.a.createElement('input', { name: 'session[username_or_email]', type: 'hidden', value: a }),
                  ),
                  _.a.createElement(
                    z.b,
                    { align: 'center', style: Z.buttonWrapper },
                    _.a.createElement(
                      z.b,
                      { align: 'center', link: o, onClick: i._handleScribePasswordLoginClick, weight: 'bold' },
                      W,
                    ),
                  ),
                  _.a.createElement(
                    z.b,
                    { style: Z.legalTerm },
                    _.a.createElement(
                      z.b,
                      { align: 'center', color: 'gray700', size: 'subtext2', weight: 'normal' },
                      X,
                    ),
                    ' ',
                    _.a.createElement(
                      z.b,
                      {
                        align: 'center',
                        link: o,
                        onClick: i._handleUpdatePhoneNumberClick,
                        size: 'subtext2',
                        testID: j,
                      },
                      J,
                    ),
                  ),
                )
              }),
              g()(u()(i), '_handleFetchUserAndLoginEligibility', function () {
                var e = i.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.fetchOneFactorLoginEligibility,
                  a = e.fetchOneUserIfNeeded,
                  o = e.userId
                o ? (n().catch(t()), a(o).catch(t(P.a))) : i._redirectToLoginPage()
              }),
              g()(u()(i), '_handleScribePasswordLoginClick', function () {
                var e = i.props,
                  t = e.scribeAction,
                  n = e.scribeNamespace
                t(a()(a()({}, n), {}, { element: 'password_login', action: 'click' }))
              }),
              g()(u()(i), '_handleUpdatePhoneNumberClick', function () {
                var e = i.props,
                  t = e.scribeAction,
                  n = e.scribeNamespace
                ;(0, e.setLoginReturnPath)('/settings/phone'),
                  t(a()(a()({}, n), {}, { element: 'update_phone_number', action: 'click' }))
              }),
              g()(u()(i), '_redirectToLoginPage', function (e) {
                var t = i.props,
                  n = t.history,
                  a = t.shouldRedirectToEmailLiteLogin,
                  o = a ? '/i/flow/lite_login' : '/login',
                  r = a ? void 0 : { username_or_email: e }
                n.replace({ pathname: o, query: r })
              }),
              (i._mobileLoginToken = x.a.v1().replace(/-/g, '')),
              i
            )
          }
          return (
            l()(n, [
              {
                key: 'UNSAFE_componentWillReceiveProps',
                value: function (e) {
                  var t = e.fetchStatus,
                    n = e.isSmsEligible,
                    i = e.userScreenName
                  t !== k.a.LOADED || n || this._redirectToLoginPage(i)
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
                  return _.a.createElement(
                    I.a,
                    null,
                    _.a.createElement(R.a, {
                      accessibilityLabel: G,
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
        })(_.a.Component)
      g()(Q, 'defaultProps', { loginReturnPath: '/' })
      var Z = q.a.create(function (e) {
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
      t.default = Object(V.c)({ page: 'login_sms' })(O(Q))
    },
    '6oVL': function (e, t, n) {
      'use strict'
      var i = n('ddV6'),
        a = n.n(i),
        o = n('VrFO'),
        r = n.n(o),
        c = n('Y9Ll'),
        l = n.n(c),
        s = n('1Pcy'),
        u = n.n(s),
        m = n('5Yy7'),
        p = n.n(m),
        h = n('2VqO'),
        d = n.n(h),
        b = n('KEM+'),
        g = n.n(b),
        f = (n('2G9S'), n('KqXw'), n('MvUL'), n('Ysgh'), n('ERkP')),
        _ = n.n(f),
        y = n('3XMw'),
        E = n.n(y),
        v = n('cnVF'),
        L = n('Ukpf'),
        S = n('BTou'),
        k = n('mrHL'),
        w = 'LoginForm_Login_Button',
        T = n('fEA7'),
        C = n.n(T),
        B = n('MWbm'),
        O = n('Irs7'),
        P = n('v6aA'),
        R = n('/yvb'),
        A = n('rHpw'),
        N = E.a.e919c3bc,
        F = (function (e) {
          p()(n, e)
          var t = d()(n)
          function n() {
            var e
            r()(this, n)
            for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              g()(u()(e), '_mobileLoginToken', C.a.v1().replace(/-/g, '')),
              g()(u()(e), '_handleSubmit', function () {
                var t = e.props,
                  n = t.analytics,
                  i = t.onSubmit
                if ((n.scribe({ action: 'submit' }), S.a.flushHTMLCache(), e._setLoginCookie(), i))
                  return i(e._form.elements), !1
              }),
              g()(u()(e), '_handleSubmitButtonClick', function () {
                !1 !== e._handleSubmit() && e._form.submit()
              }),
              g()(u()(e), '_setFormRef', function (t) {
                t && (e._form = t)
              }),
              g()(u()(e), '_setLoginCookie', function () {
                var t = new Date(Date.now())
                t.setTime(t.getTime() + 3e5),
                  Object(k.e)(v.q, e._mobileLoginToken, {
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
                  L.a.inject({ scriptId: 'jsInstLibrary', src: 'https://twitter.com/i/js_inst?c_name=ui_metrics' })
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    n = e.formActionUrl,
                    i = e.hideSubmitButton,
                    o = e.horizontalLayout,
                    r = e.loginReturnPath,
                    c = e.submitButtonDisabled,
                    l = e.submitButtonLabel,
                    s = e.submitButtonSize,
                    u = e.submitButtonStyle,
                    m = e.submitButtonType,
                    p = 'string' == typeof r ? r.split('?') : [],
                    h = a()(p, 2),
                    d = h[0],
                    b = h[1],
                    g = encodeURI(d || '/'),
                    f = b ? '?'.concat(b) : '',
                    y = ''.concat('').concat(g).concat(f),
                    E = _.a.createElement(
                      B.a,
                      { style: o && U.horizontalFields },
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
                      i
                        ? null
                        : _.a.createElement(
                            B.a,
                            { style: o && U.loginButtonContainer },
                            _.a.createElement(
                              R.a,
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
                  return _.a.createElement(
                    B.a,
                    { style: U.loginForm },
                    _.a.createElement('form', {
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
        })(_.a.Component)
      g()(F, 'contextType', P.a),
        g()(F, 'defaultProps', {
          autoSubmit: !1,
          formActionUrl: '/sessions',
          hideSubmitButton: !1,
          submitButtonDisabled: !1,
          submitButtonLabel: N,
          submitButtonType: 'brandFilled',
        })
      var U = A.a.create(function (e) {
        return {
          horizontalFields: { flexDirection: 'row', justifyContent: 'center', alignItems: 'stretch' },
          loginForm: { width: '100%' },
          loginButtonContainer: { flexDirection: 'column', justifyContent: 'center' },
        }
      })
      t.a = Object(O.a)(F, { element: 'inline_login_form' })
    },
  },
])
//# sourceMappingURL=WIPED
