;(window.webpackJsonp = window.webpackJsonp || []).push([
  [62],
  {
    '1cTF': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'LoginScreen', function () {
          return Le
        }),
        n.d(t, 'styles', function () {
          return Re
        })
      n('OZaJ'), n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('1Pcy'),
        s = n.n(c),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('N+ot'),
        p = n.n(d),
        h = n('AuHH'),
        m = n.n(h),
        f = n('KEM+'),
        g = n.n(f),
        b = n('ERkP'),
        y = n('6/RC'),
        v = n('zh9S'),
        _ = n('RqPI'),
        w = n('hqKg'),
        E = n('3XMw'),
        S = n.n(E),
        C = n('aTAq'),
        L = n('G6rE'),
        R = n('oEGd'),
        O = {
          BadSessionLoginVerification: S.a.f8ad0091,
          ExpiredLoginVerification: S.a.h2c7767e,
          OverLimitLoginVerificationAttempts: S.a.e83047c2,
          OfflineCodeSync: S.a.g4b108ee,
        },
        k = Object(w.createSelector)(
          function (e, t) {
            return (
              _.i(e) ||
              (Object(C.a)(t.location.query.login_verification_error)
                ? O[t.location.query.login_verification_error]
                : void 0)
            )
          },
          function (e, t) {
            return (
              t.location.query &&
              (Object(C.a)(t.location.query.username_or_email) ? t.location.query.username_or_email : void 0)
            )
          },
          _.r,
          function (e, t) {
            return (
              !!t.location.pathname &&
              ('/login/check' === t.location.pathname || '/login/check/' === t.location.pathname)
            )
          },
          function (e, t) {
            return 'true' === t.location.query.username_disabled
          },
          function (e, t) {
            return 'true' === t.location.query.email_disabled
          },
          function (e, t) {
            return 'true' === t.location.query.phone_disabled
          },
          L.e.selectLoggedInUser,
          function (e, t, n, r, a, o, i, c) {
            return {
              errorMessage: e,
              loginId: t,
              loginReturnPath: n,
              loggedInUser: c,
              shouldChallenge: r,
              shouldDisableUsernameLogin: a,
              shouldDisableEmailLogin: o,
              shouldDisablePhoneLogin: i,
            }
          },
        ),
        x = { scribeAction: v.c, scribePageImpression: v.d },
        P = Object(R.g)(k, x),
        D = (n('2G9S'), n('7x/C'), n('DZ+c'), n('MvUL'), n('KqXw'), n('ho0z'), n('SrtL')),
        j = n('lUZE'),
        F = n('8jkQ'),
        I = n('yoO3'),
        T = 'LoginPage_Continue_Button',
        B = n('sgih'),
        U = n('mw9i'),
        A = n('t62R'),
        z = n('jhWN'),
        M = n('jV+4'),
        V = n('/yvb'),
        H = n('Irs7')
      function N(e) {
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
            r = m()(e)
          if (t) {
            var a = m()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var q = S.a.d98c140e,
        X = S.a.e55188f0,
        W = S.a.d55d8fe1,
        J = S.a.c3d89aca,
        G = S.a.g806008e,
        Y = (function (e) {
          u()(n, e)
          var t = N(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              g()(s()(e), '_handleContinuePress', function () {
                var t = e.props,
                  n = t.analytics,
                  r = t.history,
                  a = t.location.query,
                  o = a && a.redirect_after_login ? a.redirect_after_login.toString() : void 0,
                  i = o && F.b.makeSafeForTwitterRedirect(o)
                o && i
                  ? (n.scribeAction('redirect'), window.location.assign(i))
                  : (n.scribeAction('redirecthome'), r.replace('/home'))
              }),
              g()(s()(e), '_handleSwitchAccountPress', function () {
                var t = e.props,
                  n = t.analytics,
                  r = t.history
                n.scribeAction('switch'), r.replace('/account/switch')
              }),
              e
            )
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.loggedInUser
                  return b.createElement(
                    I.a,
                    null,
                    b.createElement(D.a, { title: q }),
                    b.createElement(
                      B.a,
                      { type: 'full' },
                      b.createElement(
                        U.a,
                        { style: [Re.root, Re.center], withGutter: !0 },
                        b.createElement(j.a, { style: Re.icon }),
                        b.createElement(
                          A.b,
                          {
                            accessibilityRole: 'heading',
                            align: 'center',
                            size: 'title4',
                            style: Re.heading,
                            weight: 'bold',
                          },
                          X,
                        ),
                        b.createElement(z.a, { size: 'jumbo', uri: e.profile_image_url_https }),
                        b.createElement(M.a, {
                          badgeContext: 'account',
                          isProtected: e.protected,
                          isVerified: e.verified,
                          name: e.name,
                          screenName: e.screen_name,
                          style: [Re.gutter, Re.center],
                          withStackedLayout: !0,
                        }),
                        b.createElement(A.b, { align: 'center', style: Re.gutter }, W),
                        b.createElement(
                          V.a,
                          { onPress: this._handleContinuePress, style: Re.gutter, testID: T, type: 'brandFilled' },
                          J,
                        ),
                        b.createElement(
                          A.b,
                          {
                            accessibilityRole: 'link',
                            align: 'center',
                            color: 'link',
                            onPress: this._handleSwitchAccountPress,
                            style: Re.gutter,
                          },
                          G,
                        ),
                      ),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(b.Component),
        K = Object(H.a)(Y, { page: 'login', section: 'continue' }),
        Z = n('mrHL'),
        Q = n('cnVF'),
        $ = n('YeIG'),
        ee = n('TaB8')
      var te = n('5S/X'),
        ne = n('6oVL'),
        re = n('Lam0'),
        ae = n('5FtR'),
        oe = n('Es6L'),
        ie = n('MWbm'),
        ce = n('pxuL'),
        se = n('4zmP'),
        le = n('pjBI'),
        ue = n('rHpw'),
        de = n('7JQg'),
        pe = n('XJCT')
      function he(e, t) {
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
      function me(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? he(Object(n), !0).forEach(function (t) {
                g()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : he(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function fe(e) {
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
            r = m()(e)
          if (t) {
            var a = m()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var ge = S.a.d1091f50,
        be = S.a.eab9ceb1,
        ye = S.a.g2b8acd4,
        ve = S.a.bdc9d8a2,
        _e = S.a.c2ab20ab,
        we = S.a.id312f0a,
        Ee = S.a.caac124e,
        Se = S.a.ab77e0b8,
        Ce = { page: 'login' },
        Le = (function (e) {
          u()(n, e)
          var t = fe(n)
          function n(e, r) {
            var o
            a()(this, n)
            var i = e.loginId
            ;(o = t.call(this, e, r)),
              g()(s()(o), '_recaptchaEnabled', !1),
              g()(s()(o), '_renderLogin', function () {
                return b.createElement(
                  I.a,
                  null,
                  b.createElement(D.a, { title: ve }),
                  b.createElement(ie.a, { style: [Re.root, Re.container] }, o._renderContent()),
                )
              }),
              g()(s()(o), '_renderContent', function () {
                var e = o.props,
                  t = e.errorMessage,
                  n = e.loginId,
                  r = e.loginReturnPath,
                  a = e.shouldDisableEmailLogin,
                  i = e.shouldDisablePhoneLogin,
                  c = e.shouldDisableUsernameLogin,
                  s = o.state,
                  l = s.autoSubmit,
                  u = s.passwordValue,
                  d = s.recaptchaSuccessToken,
                  p = s.recaptchaTermAccepted,
                  h = s.usernameValue,
                  m = !!d,
                  f = o._recaptchaEnabled && !m,
                  g = !(o._recaptchaEnabled && p)
                return b.createElement(
                  b.Fragment,
                  null,
                  b.createElement(
                    ie.a,
                    { style: Re.marginHorizontal },
                    b.createElement(j.a, { style: Re.icon }),
                    b.createElement(
                      A.b,
                      {
                        accessibilityRole: 'heading',
                        extendedWidth: !0,
                        size: 'title2',
                        style: Re.heading,
                        weight: 'bold',
                      },
                      ye,
                    ),
                    t ? b.createElement(se.a, { text: t, type: 'danger' }) : null,
                    g ? o._renderAlternativeLoginMethodCopy() : null,
                    m ? b.createElement(A.b, { style: Re.passedChallengeCopy }, _e) : null,
                  ),
                  b.createElement(
                    ne.a,
                    {
                      autoSubmit: l,
                      hideSubmitButton: f,
                      loginReturnPath: r,
                      submitButtonDisabled: o._hasMissingFields(),
                      submitButtonSize: 'xLarge',
                      submitButtonStyle: Re.submitButton,
                    },
                    b.createElement(pe.b, {
                      autoFocus: !n,
                      onChange: o._handleUsernameFieldChange,
                      onSubmitEditing: o._handleSubmitEditing,
                      value: h,
                      withEmailDisabled: a,
                      withPhoneDisabled: i,
                      withUsernameDisabled: c,
                    }),
                    f
                      ? null
                      : b.createElement(pe.a, {
                          autoFocus: !!n,
                          onChange: o._handlePasswordFieldChange,
                          onSubmitEditing: o._handleSubmitEditing,
                          value: u,
                        }),
                    o._recaptchaEnabled
                      ? b.createElement('input', {
                          defaultValue: d,
                          name: 'g-recaptcha-response',
                          style: { display: 'none' },
                        })
                      : null,
                  ),
                  b.createElement(
                    ie.a,
                    { style: Re.marginHorizontal },
                    o._recaptchaEnabled && !m ? o._renderRecaptcha() : null,
                    b.createElement(
                      A.b,
                      { align: 'center', style: Re.links },
                      b.createElement(
                        le.a,
                        null,
                        b.createElement(
                          A.b,
                          {
                            link: {
                              pathname: 'https://twitter.com/account/begin_password_reset',
                              external: !0,
                              openInSameFrame: !0,
                            },
                          },
                          ge,
                        ),
                        b.createElement(A.b, { link: '/i/flow/signup' }, be),
                      ),
                    ),
                  ),
                )
              }),
              g()(s()(o), '_renderAlternativeLoginMethodCopy', function () {
                var e,
                  t = o.props,
                  n = t.shouldDisableEmailLogin,
                  r = t.shouldDisablePhoneLogin,
                  a = t.shouldDisableUsernameLogin
                return (
                  a ? (e = we) : r ? (e = Se) : n && (e = Ee),
                  r || n || a ? b.createElement(A.b, { color: 'magenta500' }, e) : null
                )
              }),
              g()(s()(o), '_renderRecaptcha', function () {
                var e = o.state.usernameValue
                return b.createElement(re.a, {
                  nextButtonDisabled: !e,
                  onChange: o._handleRecaptchaStateChange,
                  onConsent: o._handleRecaptchaTermAccepted,
                  withConsentForm: !0,
                })
              }),
              g()(s()(o), '_hasMissingFields', function () {
                var e = o.state,
                  t = e.passwordValue
                return !e.usernameValue || !t
              }),
              g()(s()(o), '_handlePasswordFieldChange', function (e) {
                o.setState({ passwordValue: e.target.value })
              }),
              g()(s()(o), '_handleUsernameFieldChange', function (e) {
                o.setState({ usernameValue: e.target.value })
              }),
              g()(s()(o), '_handleSubmitEditing', function () {
                o._hasMissingFields() || o.setState({ autoSubmit: !0 })
              }),
              g()(s()(o), '_handleRecaptchaStateChange', function (e) {
                var t = e ? 'passed' : 'expired'
                ;(0, o.props.scribeAction)(me(me({}, Ce), {}, { section: 'recaptcha', action: t })),
                  e && o.setState({ recaptchaSuccessToken: e })
              }),
              g()(s()(o), '_handleRecaptchaTermAccepted', function () {
                ;(0, o.props.scribeAction)(
                  me(me({}, Ce), {}, { section: 'recaptcha', component: 'terms', action: 'accepted' }),
                ),
                  o.setState({ recaptchaTermAccepted: !0 })
              }),
              (o._continueEnabled =
                o.context.featureSwitches.isTrue('responsive_web_continue_as_always_enabled') ||
                ('true' === e.location.query.showContinuePrompt &&
                  o.context.featureSwitches.isTrue('responsive_web_continue_as_param_enabled'))),
              (o._shouldRedirectToOCFLoginFlow = !te.b && o.context.featureSwitches.isTrue('stateful_login_enabled'))
            var c,
              l = e.shouldChallenge
            return (
              (o._recaptchaEnabled =
                !!l &&
                ((c = o.context.featureSwitches),
                !Object(ee.a)('responsive_web_3rd_party_category_google_recaptcha', c))),
              (o.state = { autoSubmit: !1, recaptchaTermAccepted: !1, usernameValue: i || '', passwordValue: '' }),
              o
            )
          }
          return (
            i()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.errorMessage,
                    n = e.scribeNamespace,
                    r = e.scribePageImpression
                  this._unsetFlashMessage(this.props),
                    Object(oe.a)() && this.context.setSideNavSupport(!1),
                    t && r(me(me({}, n), {}, { section: 'error' })),
                    this._recaptchaEnabled && r(me(me({}, n), {}, { section: 'recaptcha' }))
                },
              },
              {
                key: 'componentDidUpdate',
                value: function () {
                  this._unsetFlashMessage(this.props)
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  Object(oe.a)() && this.context.setSideNavSupport(!0)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.errorMessage,
                    n = e.history,
                    r = e.location,
                    a = e.loggedInUser
                  if (this._continueEnabled && a && !t)
                    return b.createElement(K, { history: n, location: r, loggedInUser: a })
                  if (this._shouldRedirectToOCFLoginFlow) {
                    var o = y.canUseDOM && !Object($.a)(r.query) ? btoa(JSON.stringify(r.query)) : '',
                      i = o ? encodeURIComponent(JSON.stringify({ requested_variant: o })) : '',
                      c = i ? '/i/flow/login?input_flow_data='.concat(i) : '/i/flow/login'
                    return b.createElement(ae.a, { to: c })
                  }
                  return this._renderLogin()
                },
              },
              {
                key: '_unsetFlashMessage',
                value: function (e) {
                  e.errorMessage && Object(Z.c)(Q.n, { featureSwitches: this.context.featureSwitches })
                },
              },
            ]),
            n
          )
        })(b.Component)
      g()(Le, 'contextType', ce.a)
      var Re = ue.a.create(function (e) {
        return {
          root: { marginTop: e.spaces.space20 },
          marginHorizontal: { marginHorizontal: ue.a.theme.spaces.space16 },
          container: {
            maxWidth: 400,
            marginHorizontal: 'auto',
            width: '100%',
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
          },
          links: { marginTop: e.spaces.space20 },
          passedChallengeCopy: { marginVertical: e.spaces.space16 },
          submitButton: { marginVertical: e.spaces.space12, marginHorizontal: e.spaces.space12 },
          icon: { alignSelf: 'flex-start', color: e.colors.brandColor, height: e.spaces.space40 },
          heading: { marginHorizontal: 0, marginTop: e.spaces.space32, marginBottom: e.spaces.space12 },
          center: { flexDirection: 'column', alignItems: 'center' },
          gutter: { marginVertical: e.componentDimensions.gutterVertical },
        }
      })
      t.default = Object(de.c)(Ce)(P(Le))
    },
    '6oVL': function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('ddV6'),
        a = n.n(r),
        o = n('VrFO'),
        i = n.n(o),
        c = n('Y9Ll'),
        s = n.n(c),
        l = n('1Pcy'),
        u = n.n(l),
        d = n('5Yy7'),
        p = n.n(d),
        h = n('N+ot'),
        m = n.n(h),
        f = n('AuHH'),
        g = n.n(f),
        b = n('KEM+'),
        y = n.n(b),
        v = (n('2G9S'), n('MvUL'), n('KqXw'), n('Ysgh'), n('ERkP')),
        _ = n('3XMw'),
        w = n.n(_),
        E = n('cnVF'),
        S = n('Ukpf'),
        C = n('BTou'),
        L = n('mrHL'),
        R = 'LoginForm_Login_Button',
        O = n('fEA7'),
        k = n.n(O),
        x = n('MWbm'),
        P = n('Irs7'),
        D = n('v6aA'),
        j = n('/yvb'),
        F = n('rHpw')
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
            r = g()(e)
          if (t) {
            var a = g()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return m()(this, n)
        }
      }
      var T = w.a.e919c3bc,
        B = (function (e) {
          p()(n, e)
          var t = I(n)
          function n() {
            var e
            i()(this, n)
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              y()(u()(e), '_mobileLoginToken', k.a.v1().replace(/-/g, '')),
              y()(u()(e), '_handleSubmit', function () {
                var t = e.props,
                  n = t.analytics,
                  r = t.onSubmit
                if ((n.scribe({ action: 'submit' }), C.a.flushHTMLCache(), e._setLoginCookie(), r))
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
                  Object(L.e)(E.q, e._mobileLoginToken, {
                    featureSwitches: e.context.featureSwitches,
                    cookieOptions: { domain: void 0, expires: t },
                  })
              }),
              e
            )
          }
          return (
            s()(n, [
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
                    i = e.loginReturnPath,
                    c = e.submitButtonDisabled,
                    s = e.submitButtonLabel,
                    l = e.submitButtonSize,
                    u = e.submitButtonStyle,
                    d = e.submitButtonType,
                    p = 'string' == typeof i ? i.split('?') : [],
                    h = a()(p, 2),
                    m = h[0],
                    f = h[1],
                    g = encodeURI(m || '/'),
                    b = f ? '?'.concat(f) : '',
                    y = ''.concat('').concat(g).concat(b),
                    _ = v.createElement(
                      x.a,
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
                            x.a,
                            { style: o && U.loginButtonContainer },
                            v.createElement(
                              j.a,
                              {
                                disabled: c,
                                onPress: this._handleSubmitButtonClick,
                                size: l,
                                style: u,
                                testID: R,
                                type: d,
                              },
                              s,
                            ),
                          ),
                    )
                  return v.createElement(
                    x.a,
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
      y()(B, 'contextType', D.a),
        y()(B, 'defaultProps', {
          autoSubmit: !1,
          formActionUrl: '/sessions',
          hideSubmitButton: !1,
          submitButtonDisabled: !1,
          submitButtonLabel: T,
          submitButtonType: 'brandFilled',
        })
      var U = F.a.create(function (e) {
        return {
          horizontalFields: { flexDirection: 'row', justifyContent: 'center', alignItems: 'stretch' },
          loginForm: { width: '100%' },
          loginButtonContainer: { flexDirection: 'column', justifyContent: 'center' },
        }
      })
      t.a = Object(P.a)(B, { element: 'inline_login_form' })
    },
    Lam0: function (e, t, n) {
      'use strict'
      ;(function (e) {
        n.d(t, 'a', function () {
          return P
        })
        n('OZaJ')
        var r = n('VrFO'),
          a = n.n(r),
          o = n('Y9Ll'),
          i = n.n(o),
          c = n('1Pcy'),
          s = n.n(c),
          l = n('5Yy7'),
          u = n.n(l),
          d = n('N+ot'),
          p = n.n(d),
          h = n('AuHH'),
          m = n.n(h),
          f = n('KEM+'),
          g = n.n(f),
          b = n('ERkP'),
          y = n('t+RT'),
          v = n('MWbm'),
          _ = n('t62R'),
          w = n('/yvb'),
          E = n('rHpw'),
          S = n('3XMw'),
          C = n.n(S)
        function L(e) {
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
              r = m()(e)
            if (t) {
              var a = m()(this).constructor
              n = Reflect.construct(r, arguments, a)
            } else n = r.apply(this, arguments)
            return p()(this, n)
          }
        }
        var R = C.a.c1df579e,
          O = C.a.b60eba9e,
          k = C.a.ba939777,
          x = C.a.bc6efc72,
          P = (function (t) {
            u()(r, t)
            var n = L(r)
            function r(t, o) {
              var i
              return (
                a()(this, r),
                (i = n.call(this, t, o)),
                g()(s()(i), '_handlePass', function (e) {
                  var t = i.props.onChange
                  t &&
                    setTimeout(function () {
                      return t(e)
                    }, 1e3)
                }),
                g()(s()(i), '_handleConsent', function () {
                  var e = i.props.onConsent
                  i.setState({ termsAccepted: !0 }), e && e()
                }),
                (i.state = { termsAccepted: !1 }),
                (e.recaptchaOptions = { useRecaptchaNet: !0 }),
                i
              )
            }
            return (
              i()(r, [
                {
                  key: '_renderConsentForm',
                  value: function () {
                    var e = this.props.nextButtonDisabled
                    return b.createElement(
                      v.a,
                      null,
                      b.createElement(_.b, { style: D.guideCopy }, O),
                      b.createElement(
                        v.a,
                        { style: D.button },
                        b.createElement(
                          w.a,
                          { disabled: e, onPress: this._handleConsent, size: 'xLarge', type: 'brandOutlined' },
                          R,
                        ),
                      ),
                      b.createElement(
                        _.b,
                        { color: 'gray700' },
                        b.createElement(
                          C.a.I18NFormatMessage,
                          { $i18n: 'hc37d3ba' },
                          b.createElement(_.b, { link: 'https://policies.google.com/privacy' }, x),
                        ),
                      ),
                    )
                  },
                },
                {
                  key: '_renderRecaptcha',
                  value: function () {
                    var e = this.props.withConsentForm
                    return b.createElement(
                      b.Fragment,
                      null,
                      e
                        ? b.createElement(
                            v.a,
                            { style: D.recaptchaTitle },
                            b.createElement(_.b, { style: D.guideCopy }, k),
                          )
                        : null,
                      b.createElement(
                        v.a,
                        { style: D.container },
                        b.createElement(y.a, {
                          onChange: this._handlePass,
                          sitekey: '6LfOP30UAAAAAFBC4jbzu890rTdXBXBNHx9eVZEX',
                        }),
                      ),
                    )
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var e = this.props.withConsentForm,
                      t = this.state.termsAccepted
                    return e && !t ? this._renderConsentForm() : this._renderRecaptcha()
                  },
                },
              ]),
              r
            )
          })(b.Component),
          D = E.a.create(function (e) {
            return {
              container: { margin: 'auto', transitionProperty: 'opacity', transitionDelay: '2s' },
              button: { paddingVertical: e.spaces.space20 },
              guideCopy: { paddingTop: e.spaces.space12 },
              recaptchaTitle: { paddingBottom: e.spaces.space20 },
            }
          })
      }.call(this, n('yLpj')))
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
          return R
        })
      var r = n('97Jx'),
        a = n.n(r),
        o = n('m3Bd'),
        i = n.n(o),
        c = n('ERkP'),
        s = n('t62R'),
        l = n('3XMw'),
        u = n.n(l),
        d = (n('yH/f'), n('ho0z'), n('p+r5')),
        p = Object.freeze({ password: 'password', username: 'username_or_email' }),
        h = function (e) {
          var t = e.name,
            n = i()(e, ['name'])
          return c.createElement(
            d.a,
            a()({ autoCapitalize: 'none', autoCorrect: !1, name: 'session['.concat(t, ']'), spellCheck: 'false' }, n),
          )
        },
        m = u.a.d1091f50,
        f = c.createElement(
          s.b,
          { link: { external: !0, pathname: 'https://twitter.com/account/begin_password_reset', openInSameFrame: !0 } },
          m,
        ),
        g = u.a.dec3c9b8,
        b = function (e) {
          var t = e.helperText,
            n = e.label,
            r = e.withForgotPasswordLink,
            o = i()(e, ['helperText', 'label', 'withForgotPasswordLink'])
          return c.createElement(
            h,
            a()({}, o, { helperText: r ? f : t, label: n || g, name: p.password, type: 'password' }),
          )
        }
      b.defaultProps = { autoFocus: !1, withForgotPasswordLink: !1 }
      var y = b,
        v = n('v6aA'),
        _ = function (e) {
          return e.isTrue('responsive_web_login_input_type_email_enabled') ? 'email' : void 0
        },
        w = u.a.e1ec8c17,
        E = u.a.d0a750f2,
        S = u.a.e2dd29b5,
        C = u.a.jb4eb245,
        L = function (e) {
          var t = e.autoFocus,
            n = e.label,
            r = e.withEmailDisabled,
            o = e.withPhoneDisabled,
            s = e.withUsernameDisabled,
            l = i()(e, ['autoFocus', 'label', 'withEmailDisabled', 'withPhoneDisabled', 'withUsernameDisabled']),
            u = c.useContext(v.a).featureSwitches,
            d = w
          return (
            s ? (d = E) : o ? (d = C) : r && (d = S),
            c.createElement(h, a()({}, l, { autoFocus: t, label: n || d, name: p.username, type: _(u) }))
          )
        }
      L.defaultProps = { autoFocus: !0, withUsernameDisabled: !1, withPhoneDisabled: !1, withEmailDisabled: !1 }
      var R = L
    },
    't+RT': function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        a = n.n(r),
        o = n('aWzz'),
        i = n.n(o)
      function c() {
        return (c =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          }).apply(this, arguments)
      }
      function s(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return e
      }
      var l = (function (e) {
        var t, n
        function r() {
          var t
          return (
            ((t = e.call(this) || this).handleExpired = t.handleExpired.bind(s(t))),
            (t.handleErrored = t.handleErrored.bind(s(t))),
            (t.handleRecaptchaRef = t.handleRecaptchaRef.bind(s(t))),
            t
          )
        }
        ;(n = e), ((t = r).prototype = Object.create(n.prototype)), (t.prototype.constructor = t), (t.__proto__ = n)
        var o = r.prototype
        return (
          (o.getValue = function () {
            return this.props.grecaptcha && void 0 !== this._widgetId
              ? this.props.grecaptcha.getResponse(this._widgetId)
              : null
          }),
          (o.getWidgetId = function () {
            return this.props.grecaptcha && void 0 !== this._widgetId ? this._widgetId : null
          }),
          (o.execute = function () {
            var e = this.props.grecaptcha
            if (e && void 0 !== this._widgetId) return e.execute(this._widgetId)
            this._executeRequested = !0
          }),
          (o.reset = function () {
            this.props.grecaptcha && void 0 !== this._widgetId && this.props.grecaptcha.reset(this._widgetId)
          }),
          (o.handleExpired = function () {
            this.props.onExpired ? this.props.onExpired() : this.props.onChange && this.props.onChange(null)
          }),
          (o.handleErrored = function () {
            this.props.onErrored && this.props.onErrored()
          }),
          (o.explicitRender = function () {
            if (this.props.grecaptcha && this.props.grecaptcha.render && void 0 === this._widgetId) {
              var e = document.createElement('div')
              ;(this._widgetId = this.props.grecaptcha.render(e, {
                sitekey: this.props.sitekey,
                callback: this.props.onChange,
                theme: this.props.theme,
                type: this.props.type,
                tabindex: this.props.tabindex,
                'expired-callback': this.handleExpired,
                'error-callback': this.handleErrored,
                size: this.props.size,
                stoken: this.props.stoken,
                hl: this.props.hl,
                badge: this.props.badge,
              })),
                this.captcha.appendChild(e)
            }
            this._executeRequested &&
              this.props.grecaptcha &&
              void 0 !== this._widgetId &&
              ((this._executeRequested = !1), this.execute())
          }),
          (o.componentDidMount = function () {
            this.explicitRender()
          }),
          (o.componentDidUpdate = function () {
            this.explicitRender()
          }),
          (o.componentWillUnmount = function () {
            void 0 !== this._widgetId && (this.delayOfCaptchaIframeRemoving(), this.reset())
          }),
          (o.delayOfCaptchaIframeRemoving = function () {
            var e = document.createElement('div')
            for (document.body.appendChild(e), e.style.display = 'none'; this.captcha.firstChild; )
              e.appendChild(this.captcha.firstChild)
            setTimeout(function () {
              document.body.removeChild(e)
            }, 5e3)
          }),
          (o.handleRecaptchaRef = function (e) {
            this.captcha = e
          }),
          (o.render = function () {
            var e = this.props,
              t =
                (e.sitekey,
                e.onChange,
                e.theme,
                e.type,
                e.tabindex,
                e.onExpired,
                e.onErrored,
                e.size,
                e.stoken,
                e.grecaptcha,
                e.badge,
                e.hl,
                (function (e, t) {
                  if (null == e) return {}
                  var n,
                    r,
                    a = {},
                    o = Object.keys(e)
                  for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n])
                  return a
                })(e, [
                  'sitekey',
                  'onChange',
                  'theme',
                  'type',
                  'tabindex',
                  'onExpired',
                  'onErrored',
                  'size',
                  'stoken',
                  'grecaptcha',
                  'badge',
                  'hl',
                ]))
            return a.a.createElement('div', c({}, t, { ref: this.handleRecaptchaRef }))
          }),
          r
        )
      })(a.a.Component)
      ;(l.displayName = 'ReCAPTCHA'),
        (l.propTypes = {
          sitekey: i.a.string.isRequired,
          onChange: i.a.func,
          grecaptcha: i.a.object,
          theme: i.a.oneOf(['dark', 'light']),
          type: i.a.oneOf(['image', 'audio']),
          tabindex: i.a.number,
          onExpired: i.a.func,
          onErrored: i.a.func,
          size: i.a.oneOf(['compact', 'normal', 'invisible']),
          stoken: i.a.string,
          hl: i.a.string,
          badge: i.a.oneOf(['bottomright', 'bottomleft', 'inline']),
        }),
        (l.defaultProps = {
          onChange: function () {},
          theme: 'light',
          type: 'image',
          tabindex: 0,
          size: 'normal',
          badge: 'bottomright',
        })
      var u = n('oXkQ'),
        d = n.n(u)
      function p() {
        return (p =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          }).apply(this, arguments)
      }
      var h = {},
        m = 0
      function f() {
        return ('undefined' != typeof window && window.recaptchaOptions) || {}
      }
      var g,
        b,
        y = 'onloadcallback',
        v = f(),
        _ = ((g = function () {
          var e = f(),
            t = e.lang ? '&hl=' + e.lang : ''
          return (
            'https://' +
            (e.useRecaptchaNet ? 'recaptcha.net' : 'www.google.com') +
            '/recaptcha/api.js?onload=' +
            y +
            '&render=explicit' +
            t
          )
        }),
        (b = (b = { callbackName: y, globalName: 'grecaptcha', removeOnUnmount: v.removeOnUnmount || !1 }) || {}),
        function (e) {
          var t = e.displayName || e.name || 'Component',
            n = (function (t) {
              var n, a
              function o(e, n) {
                var r
                return ((r = t.call(this, e, n) || this).state = {}), (r.__scriptURL = ''), r
              }
              ;(a = t),
                ((n = o).prototype = Object.create(a.prototype)),
                (n.prototype.constructor = n),
                (n.__proto__ = a)
              var i = o.prototype
              return (
                (i.asyncScriptLoaderGetScriptLoaderID = function () {
                  return (
                    this.__scriptLoaderID || (this.__scriptLoaderID = 'async-script-loader-' + m++),
                    this.__scriptLoaderID
                  )
                }),
                (i.setupScriptURL = function () {
                  return (this.__scriptURL = 'function' == typeof g ? g() : g), this.__scriptURL
                }),
                (i.asyncScriptLoaderHandleLoad = function (e) {
                  var t = this
                  this.setState(e, function () {
                    return t.props.asyncScriptOnLoad && t.props.asyncScriptOnLoad(t.state)
                  })
                }),
                (i.asyncScriptLoaderTriggerOnScriptLoaded = function () {
                  var e = h[this.__scriptURL]
                  if (!e || !e.loaded) throw new Error('Script is not loaded.')
                  for (var t in e.observers) e.observers[t](e)
                  delete window[b.callbackName]
                }),
                (i.componentDidMount = function () {
                  var e = this,
                    t = this.setupScriptURL(),
                    n = this.asyncScriptLoaderGetScriptLoaderID(),
                    r = b,
                    a = r.globalName,
                    o = r.callbackName,
                    i = r.scriptId
                  if ((a && void 0 !== window[a] && (h[t] = { loaded: !0, observers: {} }), h[t])) {
                    var c = h[t]
                    return c && (c.loaded || c.errored)
                      ? void this.asyncScriptLoaderHandleLoad(c)
                      : void (c.observers[n] = function (t) {
                          return e.asyncScriptLoaderHandleLoad(t)
                        })
                  }
                  var s = {}
                  ;(s[n] = function (t) {
                    return e.asyncScriptLoaderHandleLoad(t)
                  }),
                    (h[t] = { loaded: !1, observers: s })
                  var l = document.createElement('script')
                  ;(l.src = t), (l.async = !0), i && (l.id = i)
                  var u = function (e) {
                    if (h[t]) {
                      var n = h[t].observers
                      for (var r in n) e(n[r]) && delete n[r]
                    }
                  }
                  o &&
                    'undefined' != typeof window &&
                    (window[o] = function () {
                      return e.asyncScriptLoaderTriggerOnScriptLoaded()
                    }),
                    (l.onload = function () {
                      var e = h[t]
                      e &&
                        ((e.loaded = !0),
                        u(function (t) {
                          return !o && (t(e), !0)
                        }))
                    }),
                    (l.onerror = function () {
                      var e = h[t]
                      e &&
                        ((e.errored = !0),
                        u(function (t) {
                          return t(e), !0
                        }))
                    }),
                    document.body.appendChild(l)
                }),
                (i.componentWillUnmount = function () {
                  var e = this.__scriptURL
                  if (!0 === b.removeOnUnmount)
                    for (var t = document.getElementsByTagName('script'), n = 0; n < t.length; n += 1)
                      t[n].src.indexOf(e) > -1 && t[n].parentNode && t[n].parentNode.removeChild(t[n])
                  var r = h[e]
                  r &&
                    (delete r.observers[this.asyncScriptLoaderGetScriptLoaderID()],
                    !0 === b.removeOnUnmount && delete h[e])
                }),
                (i.render = function () {
                  var t = b.globalName,
                    n = this.props,
                    a = (n.asyncScriptOnLoad, n.forwardedRef),
                    o = (function (e, t) {
                      if (null == e) return {}
                      var n,
                        r,
                        a = {},
                        o = Object.keys(e)
                      for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n])
                      return a
                    })(n, ['asyncScriptOnLoad', 'forwardedRef'])
                  return (
                    t && 'undefined' != typeof window && (o[t] = void 0 !== window[t] ? window[t] : void 0),
                    (o.ref = a),
                    Object(r.createElement)(e, o)
                  )
                }),
                o
              )
            })(r.Component),
            a = Object(r.forwardRef)(function (e, t) {
              return Object(r.createElement)(n, p({}, e, { forwardedRef: t }))
            })
          return (
            (a.displayName = 'AsyncScriptLoader(' + t + ')'), (a.propTypes = { asyncScriptOnLoad: i.a.func }), d()(a, e)
          )
        })(l)
      t.a = _
    },
  },
])
//# sourceMappingURL=WIPED
