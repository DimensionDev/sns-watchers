;(window.webpackJsonp = window.webpackJsonp || []).push([
  [62],
  {
    '1cTF': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'LoginScreen', function () {
          return Re
        }),
        n.d(t, 'styles', function () {
          return Oe
        })
      n('OZaJ'), n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var a = n('VrFO'),
        r = n.n(a),
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
        y = n.n(b),
        v = n('6/RC'),
        _ = n('zh9S'),
        w = n('RqPI'),
        E = n('hqKg'),
        S = n('3XMw'),
        L = n.n(S),
        C = n('aTAq'),
        R = n('G6rE'),
        O = n('oEGd'),
        k = {
          BadSessionLoginVerification: L.a.f8ad0091,
          ExpiredLoginVerification: L.a.h2c7767e,
          OverLimitLoginVerificationAttempts: L.a.e83047c2,
          OfflineCodeSync: L.a.g4b108ee,
        },
        x = Object(E.createSelector)(
          function (e, t) {
            return (
              w.i(e) ||
              (Object(C.a)(t.location.query.login_verification_error)
                ? k[t.location.query.login_verification_error]
                : void 0)
            )
          },
          function (e, t) {
            return (
              t.location.query &&
              (Object(C.a)(t.location.query.username_or_email) ? t.location.query.username_or_email : void 0)
            )
          },
          w.r,
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
          R.e.selectLoggedInUser,
          function (e, t, n, a, r, o, i, c) {
            return {
              errorMessage: e,
              loginId: t,
              loginReturnPath: n,
              loggedInUser: c,
              shouldChallenge: a,
              shouldDisableUsernameLogin: r,
              shouldDisableEmailLogin: o,
              shouldDisablePhoneLogin: i,
            }
          },
        ),
        P = { scribeAction: _.c, scribePageImpression: _.d },
        D = Object(O.g)(x, P),
        F = (n('2G9S'), n('7x/C'), n('DZ+c'), n('MvUL'), n('KqXw'), n('ho0z'), n('SrtL')),
        j = n('lUZE'),
        T = n('8jkQ'),
        I = n('yoO3'),
        B = 'LoginPage_Continue_Button',
        U = n('sgih'),
        A = n('mw9i'),
        z = n('t62R'),
        M = n('jhWN'),
        V = n('jV+4'),
        H = n('/yvb'),
        N = n('Irs7')
      function q(e) {
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
            a = m()(e)
          if (t) {
            var r = m()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return p()(this, n)
        }
      }
      var X = L.a.d98c140e,
        W = L.a.e55188f0,
        J = L.a.d55d8fe1,
        G = L.a.c3d89aca,
        Y = L.a.g806008e,
        K = (function (e) {
          u()(n, e)
          var t = q(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              g()(s()(e), '_handleContinuePress', function () {
                var t = e.props,
                  n = t.analytics,
                  a = t.history,
                  r = t.location.query,
                  o = r && r.redirect_after_login ? r.redirect_after_login.toString() : void 0,
                  i = o && T.b.makeSafeForTwitterRedirect(o)
                o && i
                  ? (n.scribeAction('redirect'), window.location.assign(i))
                  : (n.scribeAction('redirecthome'), a.replace('/home'))
              }),
              g()(s()(e), '_handleSwitchAccountPress', function () {
                var t = e.props,
                  n = t.analytics,
                  a = t.history
                n.scribeAction('switch'), a.replace('/account/switch')
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
                  return y.a.createElement(
                    I.a,
                    null,
                    y.a.createElement(F.a, { title: X }),
                    y.a.createElement(
                      U.a,
                      { type: 'full' },
                      y.a.createElement(
                        A.a,
                        { style: [Oe.root, Oe.center], withGutter: !0 },
                        y.a.createElement(j.a, { style: Oe.icon }),
                        y.a.createElement(
                          z.b,
                          {
                            accessibilityRole: 'heading',
                            align: 'center',
                            size: 'title4',
                            style: Oe.heading,
                            weight: 'bold',
                          },
                          W,
                        ),
                        y.a.createElement(M.a, { size: 'jumbo', uri: e.profile_image_url_https }),
                        y.a.createElement(V.a, {
                          badgeContext: 'account',
                          isProtected: e.protected,
                          isVerified: e.verified,
                          name: e.name,
                          screenName: e.screen_name,
                          style: [Oe.gutter, Oe.center],
                          withStackedLayout: !0,
                        }),
                        y.a.createElement(z.b, { align: 'center', style: Oe.gutter }, J),
                        y.a.createElement(
                          H.a,
                          { onPress: this._handleContinuePress, style: Oe.gutter, testID: B, type: 'brandFilled' },
                          G,
                        ),
                        y.a.createElement(
                          z.b,
                          {
                            accessibilityRole: 'link',
                            align: 'center',
                            color: 'link',
                            onPress: this._handleSwitchAccountPress,
                            style: Oe.gutter,
                          },
                          Y,
                        ),
                      ),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(y.a.Component),
        Z = Object(N.a)(K, { page: 'login', section: 'continue' }),
        Q = n('mrHL'),
        $ = n('cnVF'),
        ee = n('YeIG'),
        te = n('TaB8')
      var ne = n('5S/X'),
        ae = n('6oVL'),
        re = n('Lam0'),
        oe = n('5FtR'),
        ie = n('Es6L'),
        ce = n('MWbm'),
        se = n('pxuL'),
        le = n('4zmP'),
        ue = n('pjBI'),
        de = n('rHpw'),
        pe = n('7JQg'),
        he = n('XJCT')
      function me(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function fe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? me(Object(n), !0).forEach(function (t) {
                g()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : me(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function ge(e) {
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
            a = m()(e)
          if (t) {
            var r = m()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return p()(this, n)
        }
      }
      var be = L.a.d1091f50,
        ye = L.a.eab9ceb1,
        ve = L.a.g2b8acd4,
        _e = L.a.bdc9d8a2,
        we = L.a.c2ab20ab,
        Ee = L.a.id312f0a,
        Se = L.a.caac124e,
        Le = L.a.ab77e0b8,
        Ce = { page: 'login' },
        Re = (function (e) {
          u()(n, e)
          var t = ge(n)
          function n(e, a) {
            var o
            r()(this, n)
            var i = e.loginId
            ;(o = t.call(this, e, a)),
              g()(s()(o), '_recaptchaEnabled', !1),
              g()(s()(o), '_renderLogin', function () {
                return y.a.createElement(
                  I.a,
                  null,
                  y.a.createElement(F.a, { title: _e }),
                  y.a.createElement(ce.a, { style: [Oe.root, Oe.container] }, o._renderContent()),
                )
              }),
              g()(s()(o), '_renderContent', function () {
                var e = o.props,
                  t = e.errorMessage,
                  n = e.loginId,
                  a = e.loginReturnPath,
                  r = e.shouldDisableEmailLogin,
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
                return y.a.createElement(
                  y.a.Fragment,
                  null,
                  y.a.createElement(
                    ce.a,
                    { style: Oe.marginHorizontal },
                    y.a.createElement(j.a, { style: Oe.icon }),
                    y.a.createElement(
                      z.b,
                      {
                        accessibilityRole: 'heading',
                        extendedWidth: !0,
                        size: 'title2',
                        style: Oe.heading,
                        weight: 'bold',
                      },
                      ve,
                    ),
                    t ? y.a.createElement(le.a, { text: t, type: 'danger' }) : null,
                    g ? o._renderAlternativeLoginMethodCopy() : null,
                    m ? y.a.createElement(z.b, { style: Oe.passedChallengeCopy }, we) : null,
                  ),
                  y.a.createElement(
                    ae.a,
                    {
                      autoSubmit: l,
                      hideSubmitButton: f,
                      loginReturnPath: a,
                      submitButtonDisabled: o._hasMissingFields(),
                      submitButtonSize: 'xLarge',
                      submitButtonStyle: Oe.submitButton,
                    },
                    y.a.createElement(he.b, {
                      autoFocus: !n,
                      onChange: o._handleUsernameFieldChange,
                      onSubmitEditing: o._handleSubmitEditing,
                      value: h,
                      withEmailDisabled: r,
                      withPhoneDisabled: i,
                      withUsernameDisabled: c,
                    }),
                    f
                      ? null
                      : y.a.createElement(he.a, {
                          autoFocus: !!n,
                          onChange: o._handlePasswordFieldChange,
                          onSubmitEditing: o._handleSubmitEditing,
                          value: u,
                        }),
                    o._recaptchaEnabled
                      ? y.a.createElement('input', {
                          defaultValue: d,
                          name: 'g-recaptcha-response',
                          style: { display: 'none' },
                        })
                      : null,
                  ),
                  y.a.createElement(
                    ce.a,
                    { style: Oe.marginHorizontal },
                    o._recaptchaEnabled && !m ? o._renderRecaptcha() : null,
                    y.a.createElement(
                      z.b,
                      { align: 'center', style: Oe.links },
                      y.a.createElement(
                        ue.a,
                        null,
                        y.a.createElement(
                          z.b,
                          {
                            link: {
                              pathname: 'https://twitter.com/account/begin_password_reset',
                              external: !0,
                              openInSameFrame: !0,
                            },
                          },
                          be,
                        ),
                        y.a.createElement(z.b, { link: '/i/flow/signup' }, ye),
                      ),
                    ),
                  ),
                )
              }),
              g()(s()(o), '_renderAlternativeLoginMethodCopy', function () {
                var e,
                  t = o.props,
                  n = t.shouldDisableEmailLogin,
                  a = t.shouldDisablePhoneLogin,
                  r = t.shouldDisableUsernameLogin
                return (
                  r ? (e = Ee) : a ? (e = Le) : n && (e = Se),
                  a || n || r ? y.a.createElement(z.b, { color: 'magenta500' }, e) : null
                )
              }),
              g()(s()(o), '_renderRecaptcha', function () {
                var e = o.state.usernameValue
                return y.a.createElement(re.a, {
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
                ;(0, o.props.scribeAction)(fe(fe({}, Ce), {}, { section: 'recaptcha', action: t })),
                  e && o.setState({ recaptchaSuccessToken: e })
              }),
              g()(s()(o), '_handleRecaptchaTermAccepted', function () {
                ;(0, o.props.scribeAction)(
                  fe(fe({}, Ce), {}, { section: 'recaptcha', component: 'terms', action: 'accepted' }),
                ),
                  o.setState({ recaptchaTermAccepted: !0 })
              }),
              (o._continueEnabled =
                o.context.featureSwitches.isTrue('responsive_web_continue_as_always_enabled') ||
                ('true' === e.location.query.showContinuePrompt &&
                  o.context.featureSwitches.isTrue('responsive_web_continue_as_param_enabled'))),
              (o._shouldRedirectToOCFLoginFlow = !ne.b && o.context.featureSwitches.isTrue('stateful_login_enabled'))
            var c,
              l = e.shouldChallenge
            return (
              (o._recaptchaEnabled =
                !!l &&
                ((c = o.context.featureSwitches),
                !Object(te.a)('responsive_web_3rd_party_category_google_recaptcha', c))),
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
                    a = e.scribePageImpression
                  this._unsetFlashMessage(this.props),
                    Object(ie.a)() && this.context.setSideNavSupport(!1),
                    t && a(fe(fe({}, n), {}, { section: 'error' })),
                    this._recaptchaEnabled && a(fe(fe({}, n), {}, { section: 'recaptcha' }))
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
                  Object(ie.a)() && this.context.setSideNavSupport(!0)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.errorMessage,
                    n = e.history,
                    a = e.location,
                    r = e.loggedInUser
                  if (this._continueEnabled && r && !t)
                    return y.a.createElement(Z, { history: n, location: a, loggedInUser: r })
                  if (this._shouldRedirectToOCFLoginFlow) {
                    var o = v.canUseDOM && !Object(ee.a)(a.query) ? btoa(JSON.stringify(a.query)) : '',
                      i = o ? encodeURIComponent(JSON.stringify({ requested_variant: o })) : '',
                      c = i ? '/i/flow/login?input_flow_data='.concat(i) : '/i/flow/login'
                    return y.a.createElement(oe.a, { to: c })
                  }
                  return this._renderLogin()
                },
              },
              {
                key: '_unsetFlashMessage',
                value: function (e) {
                  e.errorMessage && Object(Q.c)($.n, { featureSwitches: this.context.featureSwitches })
                },
              },
            ]),
            n
          )
        })(y.a.Component)
      g()(Re, 'contextType', se.a)
      var Oe = de.a.create(function (e) {
        return {
          root: { marginTop: e.spaces.space20 },
          marginHorizontal: { marginHorizontal: de.a.theme.spaces.space16 },
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
      t.default = Object(pe.c)(Ce)(D(Re))
    },
    '6oVL': function (e, t, n) {
      'use strict'
      n('OZaJ')
      var a = n('ddV6'),
        r = n.n(a),
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
        _ = n.n(v),
        w = n('3XMw'),
        E = n.n(w),
        S = n('cnVF'),
        L = n('Ukpf'),
        C = n('BTou'),
        R = n('mrHL'),
        O = 'LoginForm_Login_Button',
        k = n('fEA7'),
        x = n.n(k),
        P = n('MWbm'),
        D = n('Irs7'),
        F = n('v6aA'),
        j = n('/yvb'),
        T = n('rHpw')
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
            a = g()(e)
          if (t) {
            var r = g()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return m()(this, n)
        }
      }
      var B = E.a.e919c3bc,
        U = (function (e) {
          p()(n, e)
          var t = I(n)
          function n() {
            var e
            i()(this, n)
            for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              y()(u()(e), '_mobileLoginToken', x.a.v1().replace(/-/g, '')),
              y()(u()(e), '_handleSubmit', function () {
                var t = e.props,
                  n = t.analytics,
                  a = t.onSubmit
                if ((n.scribe({ action: 'submit' }), C.a.flushHTMLCache(), e._setLoginCookie(), a))
                  return a(e._form.elements), !1
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
                  Object(R.e)(S.q, e._mobileLoginToken, {
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
                  L.a.inject({ scriptId: 'jsInstLibrary', src: 'https://twitter.com/i/js_inst?c_name=ui_metrics' })
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    n = e.formActionUrl,
                    a = e.hideSubmitButton,
                    o = e.horizontalLayout,
                    i = e.loginReturnPath,
                    c = e.submitButtonDisabled,
                    s = e.submitButtonLabel,
                    l = e.submitButtonSize,
                    u = e.submitButtonStyle,
                    d = e.submitButtonType,
                    p = 'string' == typeof i ? i.split('?') : [],
                    h = r()(p, 2),
                    m = h[0],
                    f = h[1],
                    g = encodeURI(m || '/'),
                    b = f ? '?'.concat(f) : '',
                    y = ''.concat('').concat(g).concat(b),
                    v = _.a.createElement(
                      P.a,
                      { style: o && A.horizontalFields },
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
                      a
                        ? null
                        : _.a.createElement(
                            P.a,
                            { style: o && A.loginButtonContainer },
                            _.a.createElement(
                              j.a,
                              {
                                disabled: c,
                                onPress: this._handleSubmitButtonClick,
                                size: l,
                                style: u,
                                testID: O,
                                type: d,
                              },
                              s,
                            ),
                          ),
                    )
                  return _.a.createElement(
                    P.a,
                    { style: A.loginForm },
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
      y()(U, 'contextType', F.a),
        y()(U, 'defaultProps', {
          autoSubmit: !1,
          formActionUrl: '/sessions',
          hideSubmitButton: !1,
          submitButtonDisabled: !1,
          submitButtonLabel: B,
          submitButtonType: 'brandFilled',
        })
      var A = T.a.create(function (e) {
        return {
          horizontalFields: { flexDirection: 'row', justifyContent: 'center', alignItems: 'stretch' },
          loginForm: { width: '100%' },
          loginButtonContainer: { flexDirection: 'column', justifyContent: 'center' },
        }
      })
      t.a = Object(D.a)(U, { element: 'inline_login_form' })
    },
    Lam0: function (e, t, n) {
      'use strict'
      ;(function (e) {
        n.d(t, 'a', function () {
          return D
        })
        n('OZaJ')
        var a = n('VrFO'),
          r = n.n(a),
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
          y = n.n(b),
          v = n('t+RT'),
          _ = n('MWbm'),
          w = n('t62R'),
          E = n('/yvb'),
          S = n('rHpw'),
          L = n('3XMw'),
          C = n.n(L)
        function R(e) {
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
              a = m()(e)
            if (t) {
              var r = m()(this).constructor
              n = Reflect.construct(a, arguments, r)
            } else n = a.apply(this, arguments)
            return p()(this, n)
          }
        }
        var O = C.a.c1df579e,
          k = C.a.b60eba9e,
          x = C.a.ba939777,
          P = C.a.bc6efc72,
          D = (function (t) {
            u()(a, t)
            var n = R(a)
            function a(t, o) {
              var i
              return (
                r()(this, a),
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
              i()(a, [
                {
                  key: '_renderConsentForm',
                  value: function () {
                    var e = this.props.nextButtonDisabled
                    return y.a.createElement(
                      _.a,
                      null,
                      y.a.createElement(w.b, { style: F.guideCopy }, k),
                      y.a.createElement(
                        _.a,
                        { style: F.button },
                        y.a.createElement(
                          E.a,
                          { disabled: e, onPress: this._handleConsent, size: 'xLarge', type: 'brandOutlined' },
                          O,
                        ),
                      ),
                      y.a.createElement(
                        w.b,
                        { color: 'gray700' },
                        y.a.createElement(
                          C.a.I18NFormatMessage,
                          { $i18n: 'hc37d3ba' },
                          y.a.createElement(w.b, { link: 'https://policies.google.com/privacy' }, P),
                        ),
                      ),
                    )
                  },
                },
                {
                  key: '_renderRecaptcha',
                  value: function () {
                    var e = this.props.withConsentForm
                    return y.a.createElement(
                      y.a.Fragment,
                      null,
                      e
                        ? y.a.createElement(
                            _.a,
                            { style: F.recaptchaTitle },
                            y.a.createElement(w.b, { style: F.guideCopy }, x),
                          )
                        : null,
                      y.a.createElement(
                        _.a,
                        { style: F.container },
                        y.a.createElement(v.a, {
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
              a
            )
          })(y.a.Component),
          F = S.a.create(function (e) {
            return {
              container: { margin: 'auto', transitionProperty: 'opacity', transitionDelay: '2s' },
              button: { paddingVertical: e.spaces.space20 },
              guideCopy: { paddingTop: e.spaces.space12 },
              recaptchaTitle: { paddingBottom: e.spaces.space20 },
            }
          })
      }.call(this, n('yLpj')))
    },
    XJCT: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return v
      }),
        n.d(t, 'b', function () {
          return O
        })
      var a = n('97Jx'),
        r = n.n(a),
        o = n('m3Bd'),
        i = n.n(o),
        c = n('ERkP'),
        s = n.n(c),
        l = n('t62R'),
        u = n('3XMw'),
        d = n.n(u),
        p = (n('yH/f'), n('ho0z'), n('p+r5')),
        h = Object.freeze({ password: 'password', username: 'username_or_email' }),
        m = function (e) {
          var t = e.name,
            n = i()(e, ['name'])
          return s.a.createElement(
            p.a,
            r()({ autoCapitalize: 'none', autoCorrect: !1, name: 'session['.concat(t, ']'), spellCheck: 'false' }, n),
          )
        },
        f = d.a.d1091f50,
        g = s.a.createElement(
          l.b,
          { link: { external: !0, pathname: 'https://twitter.com/account/begin_password_reset', openInSameFrame: !0 } },
          f,
        ),
        b = d.a.dec3c9b8,
        y = function (e) {
          var t = e.helperText,
            n = e.label,
            a = e.withForgotPasswordLink,
            o = i()(e, ['helperText', 'label', 'withForgotPasswordLink'])
          return s.a.createElement(
            m,
            r()({}, o, { helperText: a ? g : t, label: n || b, name: h.password, type: 'password' }),
          )
        }
      y.defaultProps = { autoFocus: !1, withForgotPasswordLink: !1 }
      var v = y,
        _ = n('v6aA'),
        w = function (e) {
          return e.isTrue('responsive_web_login_input_type_email_enabled') ? 'email' : void 0
        },
        E = d.a.e1ec8c17,
        S = d.a.d0a750f2,
        L = d.a.e2dd29b5,
        C = d.a.jb4eb245,
        R = function (e) {
          var t = e.autoFocus,
            n = e.label,
            a = e.withEmailDisabled,
            o = e.withPhoneDisabled,
            c = e.withUsernameDisabled,
            l = i()(e, ['autoFocus', 'label', 'withEmailDisabled', 'withPhoneDisabled', 'withUsernameDisabled']),
            u = s.a.useContext(_.a).featureSwitches,
            d = E
          return (
            c ? (d = S) : o ? (d = C) : a && (d = L),
            s.a.createElement(m, r()({}, l, { autoFocus: t, label: n || d, name: h.username, type: w(u) }))
          )
        }
      R.defaultProps = { autoFocus: !0, withUsernameDisabled: !1, withPhoneDisabled: !1, withEmailDisabled: !1 }
      var O = R
    },
    't+RT': function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        o = n('aWzz'),
        i = n.n(o)
      function c() {
        return (c =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
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
        function a() {
          var t
          return (
            ((t = e.call(this) || this).handleExpired = t.handleExpired.bind(s(t))),
            (t.handleErrored = t.handleErrored.bind(s(t))),
            (t.handleRecaptchaRef = t.handleRecaptchaRef.bind(s(t))),
            t
          )
        }
        ;(n = e), ((t = a).prototype = Object.create(n.prototype)), (t.prototype.constructor = t), (t.__proto__ = n)
        var o = a.prototype
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
                    a,
                    r = {},
                    o = Object.keys(e)
                  for (a = 0; a < o.length; a++) (n = o[a]), t.indexOf(n) >= 0 || (r[n] = e[n])
                  return r
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
            return r.a.createElement('div', c({}, t, { ref: this.handleRecaptchaRef }))
          }),
          a
        )
      })(r.a.Component)
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
              for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
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
              var n, r
              function o(e, n) {
                var a
                return ((a = t.call(this, e, n) || this).state = {}), (a.__scriptURL = ''), a
              }
              ;(r = t),
                ((n = o).prototype = Object.create(r.prototype)),
                (n.prototype.constructor = n),
                (n.__proto__ = r)
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
                    a = b,
                    r = a.globalName,
                    o = a.callbackName,
                    i = a.scriptId
                  if ((r && void 0 !== window[r] && (h[t] = { loaded: !0, observers: {} }), h[t])) {
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
                      for (var a in n) e(n[a]) && delete n[a]
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
                  var a = h[e]
                  a &&
                    (delete a.observers[this.asyncScriptLoaderGetScriptLoaderID()],
                    !0 === b.removeOnUnmount && delete h[e])
                }),
                (i.render = function () {
                  var t = b.globalName,
                    n = this.props,
                    r = (n.asyncScriptOnLoad, n.forwardedRef),
                    o = (function (e, t) {
                      if (null == e) return {}
                      var n,
                        a,
                        r = {},
                        o = Object.keys(e)
                      for (a = 0; a < o.length; a++) (n = o[a]), t.indexOf(n) >= 0 || (r[n] = e[n])
                      return r
                    })(n, ['asyncScriptOnLoad', 'forwardedRef'])
                  return (
                    t && 'undefined' != typeof window && (o[t] = void 0 !== window[t] ? window[t] : void 0),
                    (o.ref = r),
                    Object(a.createElement)(e, o)
                  )
                }),
                o
              )
            })(a.Component),
            r = Object(a.forwardRef)(function (e, t) {
              return Object(a.createElement)(n, p({}, e, { forwardedRef: t }))
            })
          return (
            (r.displayName = 'AsyncScriptLoader(' + t + ')'), (r.propTypes = { asyncScriptOnLoad: i.a.func }), d()(r, e)
          )
        })(l)
      t.a = _
    },
  },
])
//# sourceMappingURL=WIPED
