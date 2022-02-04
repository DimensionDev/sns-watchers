;(window.webpackJsonp = window.webpackJsonp || []).push([
  [63],
  {
    '1cTF': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'LoginScreen', function () {
          return we
        }),
        n.d(t, 'styles', function () {
          return Ce
        })
      var a = n('yiKp'),
        r = n.n(a),
        i = n('VrFO'),
        o = n.n(i),
        c = n('Y9Ll'),
        s = n.n(c),
        l = n('1Pcy'),
        d = n.n(l),
        p = n('5Yy7'),
        u = n.n(p),
        h = n('2VqO'),
        g = n.n(h),
        m = n('KEM+'),
        f = n.n(m),
        b = (n('TJCb'), n('/gI4'), n('rbfH'), n('jbUL'), n('0zG9'), n('ERkP')),
        y = n.n(b),
        v = n('6/RC'),
        _ = n('zh9S'),
        E = n('RqPI'),
        w = n('hqKg'),
        C = n('3XMw'),
        S = n.n(C),
        L = n('aTAq'),
        R = n('G6rE'),
        O = n('oEGd'),
        x = {
          BadSessionLoginVerification: S.a.f8ad0091,
          ExpiredLoginVerification: S.a.h2c7767e,
          OverLimitLoginVerificationAttempts: S.a.e83047c2,
          OfflineCodeSync: S.a.g4b108ee,
        },
        k = Object(w.createSelector)(
          function (e, t) {
            return (
              E.i(e) ||
              (Object(L.a)(t.location.query.login_verification_error)
                ? x[t.location.query.login_verification_error]
                : void 0)
            )
          },
          function (e, t) {
            return (
              t.location.query &&
              (Object(L.a)(t.location.query.username_or_email) ? t.location.query.username_or_email : void 0)
            )
          },
          E.r,
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
          function (e, t, n, a, r, i, o, c) {
            return {
              errorMessage: e,
              loginId: t,
              loginReturnPath: n,
              loggedInUser: c,
              shouldChallenge: a,
              shouldDisableUsernameLogin: r,
              shouldDisableEmailLogin: i,
              shouldDisablePhoneLogin: o,
            }
          },
        ),
        I = { scribeAction: _.c, scribePageImpression: _.d },
        P = Object(O.g)(k, I),
        T = (n('2G9S'), n('7x/C'), n('DZ+c'), n('KqXw'), n('MvUL'), n('ho0z'), n('SrtL')),
        D = n('lUZE'),
        F = n('8jkQ'),
        U = n('yoO3'),
        j = 'LoginPage_Continue_Button',
        A = n('sgih'),
        V = n('mw9i'),
        z = n('t62R'),
        M = n('jhWN'),
        q = n('jV+4'),
        N = n('/yvb'),
        H = n('Irs7'),
        B = S.a.d98c140e,
        W = S.a.e55188f0,
        G = S.a.d55d8fe1,
        X = S.a.c3d89aca,
        J = S.a.g806008e,
        K = (function (e) {
          u()(n, e)
          var t = g()(n)
          function n() {
            var e
            o()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              f()(d()(e), '_handleContinuePress', function () {
                var t = e.props,
                  n = t.analytics,
                  a = t.history,
                  r = t.location.query,
                  i = r && r.redirect_after_login ? r.redirect_after_login.toString() : void 0,
                  o = i && F.b.makeSafeForTwitterRedirect(i)
                i && o
                  ? (n.scribeAction('redirect'), window.location.assign(o))
                  : (n.scribeAction('redirecthome'), a.replace('/home'))
              }),
              f()(d()(e), '_handleSwitchAccountPress', function () {
                var t = e.props,
                  n = t.analytics,
                  a = t.history
                n.scribeAction('switch'), a.replace('/account/switch')
              }),
              e
            )
          }
          return (
            s()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.loggedInUser
                  return y.a.createElement(
                    U.a,
                    null,
                    y.a.createElement(T.a, { title: B }),
                    y.a.createElement(
                      A.a,
                      { type: 'full' },
                      y.a.createElement(
                        V.a,
                        { style: [Ce.root, Ce.center], withGutter: !0 },
                        y.a.createElement(D.a, { style: Ce.icon }),
                        y.a.createElement(
                          z.b,
                          {
                            accessibilityRole: 'heading',
                            align: 'center',
                            size: 'title4',
                            style: Ce.heading,
                            weight: 'bold',
                          },
                          W,
                        ),
                        y.a.createElement(M.a, { size: 'jumbo', uri: e.profile_image_url_https }),
                        y.a.createElement(q.a, {
                          badgeContext: 'account',
                          isProtected: e.protected,
                          isVerified: e.verified,
                          name: e.name,
                          screenName: e.screen_name,
                          style: [Ce.gutter, Ce.center],
                          withStackedLayout: !0,
                        }),
                        y.a.createElement(z.b, { align: 'center', style: Ce.gutter }, G),
                        y.a.createElement(
                          N.a,
                          { onPress: this._handleContinuePress, style: Ce.gutter, testID: j, type: 'brandFilled' },
                          X,
                        ),
                        y.a.createElement(
                          z.b,
                          {
                            accessibilityRole: 'link',
                            align: 'center',
                            color: 'link',
                            onPress: this._handleSwitchAccountPress,
                            style: Ce.gutter,
                          },
                          J,
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
        Y = Object(H.a)(K, { page: 'login', section: 'continue' }),
        Q = n('mrHL'),
        Z = n('cnVF'),
        $ = n('YeIG'),
        ee = n('TaB8')
      var te = n('5S/X'),
        ne = n('6oVL'),
        ae = n('Lam0'),
        re = n('5FtR'),
        ie = n('Es6L'),
        oe = n('MWbm'),
        ce = n('pxuL'),
        se = n('4zmP'),
        le = n('pjBI'),
        de = n('rHpw'),
        pe = n('7JQg'),
        ue = n('XJCT'),
        he = S.a.d1091f50,
        ge = S.a.eab9ceb1,
        me = S.a.g2b8acd4,
        fe = S.a.bdc9d8a2,
        be = S.a.c2ab20ab,
        ye = S.a.id312f0a,
        ve = S.a.caac124e,
        _e = S.a.ab77e0b8,
        Ee = { page: 'login' },
        we = (function (e) {
          u()(n, e)
          var t = g()(n)
          function n(e, a) {
            var i
            o()(this, n)
            var c = e.loginId
            ;(i = t.call(this, e, a)),
              f()(d()(i), '_recaptchaEnabled', !1),
              f()(d()(i), '_renderLogin', function () {
                return y.a.createElement(
                  U.a,
                  null,
                  y.a.createElement(T.a, { title: fe }),
                  y.a.createElement(oe.a, { style: [Ce.root, Ce.container] }, i._renderContent()),
                )
              }),
              f()(d()(i), '_renderContent', function () {
                var e = i.props,
                  t = e.errorMessage,
                  n = e.loginId,
                  a = e.loginReturnPath,
                  r = e.shouldDisableEmailLogin,
                  o = e.shouldDisablePhoneLogin,
                  c = e.shouldDisableUsernameLogin,
                  s = i.state,
                  l = s.autoSubmit,
                  d = s.passwordValue,
                  p = s.recaptchaSuccessToken,
                  u = s.recaptchaTermAccepted,
                  h = s.usernameValue,
                  g = !!p,
                  m = i._recaptchaEnabled && !g,
                  f = !(i._recaptchaEnabled && u)
                return y.a.createElement(
                  y.a.Fragment,
                  null,
                  y.a.createElement(
                    oe.a,
                    { style: Ce.marginHorizontal },
                    y.a.createElement(D.a, { style: Ce.icon }),
                    y.a.createElement(
                      z.b,
                      {
                        accessibilityRole: 'heading',
                        extendedWidth: !0,
                        size: 'title2',
                        style: Ce.heading,
                        weight: 'bold',
                      },
                      me,
                    ),
                    t ? y.a.createElement(se.a, { text: t, type: 'danger' }) : null,
                    f ? i._renderAlternativeLoginMethodCopy() : null,
                    g ? y.a.createElement(z.b, { style: Ce.passedChallengeCopy }, be) : null,
                  ),
                  y.a.createElement(
                    ne.a,
                    {
                      autoSubmit: l,
                      hideSubmitButton: m,
                      loginReturnPath: a,
                      submitButtonDisabled: i._hasMissingFields(),
                      submitButtonSize: 'xLarge',
                      submitButtonStyle: Ce.submitButton,
                    },
                    y.a.createElement(ue.b, {
                      autoFocus: !n,
                      onChange: i._handleUsernameFieldChange,
                      onSubmitEditing: i._handleSubmitEditing,
                      value: h,
                      withEmailDisabled: r,
                      withPhoneDisabled: o,
                      withUsernameDisabled: c,
                    }),
                    m
                      ? null
                      : y.a.createElement(ue.a, {
                          autoFocus: !!n,
                          onChange: i._handlePasswordFieldChange,
                          onSubmitEditing: i._handleSubmitEditing,
                          value: d,
                        }),
                    i._recaptchaEnabled
                      ? y.a.createElement('input', {
                          defaultValue: p,
                          name: 'g-recaptcha-response',
                          style: { display: 'none' },
                        })
                      : null,
                  ),
                  y.a.createElement(
                    oe.a,
                    { style: Ce.marginHorizontal },
                    i._recaptchaEnabled && !g ? i._renderRecaptcha() : null,
                    y.a.createElement(
                      z.b,
                      { align: 'center', style: Ce.links },
                      y.a.createElement(
                        le.a,
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
                          he,
                        ),
                        y.a.createElement(z.b, { link: '/i/flow/signup' }, ge),
                      ),
                    ),
                  ),
                )
              }),
              f()(d()(i), '_renderAlternativeLoginMethodCopy', function () {
                var e,
                  t = i.props,
                  n = t.shouldDisableEmailLogin,
                  a = t.shouldDisablePhoneLogin,
                  r = t.shouldDisableUsernameLogin
                return (
                  r ? (e = ye) : a ? (e = _e) : n && (e = ve),
                  a || n || r ? y.a.createElement(z.b, { color: 'magenta500' }, e) : null
                )
              }),
              f()(d()(i), '_renderRecaptcha', function () {
                var e = i.state.usernameValue
                return y.a.createElement(ae.a, {
                  nextButtonDisabled: !e,
                  onChange: i._handleRecaptchaStateChange,
                  onConsent: i._handleRecaptchaTermAccepted,
                  withConsentForm: !0,
                })
              }),
              f()(d()(i), '_hasMissingFields', function () {
                var e = i.state,
                  t = e.passwordValue
                return !e.usernameValue || !t
              }),
              f()(d()(i), '_handlePasswordFieldChange', function (e) {
                i.setState({ passwordValue: e.target.value })
              }),
              f()(d()(i), '_handleUsernameFieldChange', function (e) {
                i.setState({ usernameValue: e.target.value })
              }),
              f()(d()(i), '_handleSubmitEditing', function () {
                i._hasMissingFields() || i.setState({ autoSubmit: !0 })
              }),
              f()(d()(i), '_handleRecaptchaStateChange', function (e) {
                var t = e ? 'passed' : 'expired'
                ;(0, i.props.scribeAction)(r()(r()({}, Ee), {}, { section: 'recaptcha', action: t })),
                  e && i.setState({ recaptchaSuccessToken: e })
              }),
              f()(d()(i), '_handleRecaptchaTermAccepted', function () {
                ;(0, i.props.scribeAction)(
                  r()(r()({}, Ee), {}, { section: 'recaptcha', component: 'terms', action: 'accepted' }),
                ),
                  i.setState({ recaptchaTermAccepted: !0 })
              }),
              (i._continueEnabled =
                i.context.featureSwitches.isTrue('responsive_web_continue_as_always_enabled') ||
                ('true' === e.location.query.showContinuePrompt &&
                  i.context.featureSwitches.isTrue('responsive_web_continue_as_param_enabled'))),
              (i._shouldRedirectToOCFLoginFlow = !te.b && i.context.featureSwitches.isTrue('stateful_login_enabled'))
            var s,
              l = e.shouldChallenge
            return (
              (i._recaptchaEnabled =
                !!l &&
                ((s = i.context.featureSwitches),
                !Object(ee.a)('responsive_web_3rd_party_category_google_recaptcha', s))),
              (i.state = { autoSubmit: !1, recaptchaTermAccepted: !1, usernameValue: c || '', passwordValue: '' }),
              i
            )
          }
          return (
            s()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.errorMessage,
                    n = e.scribeNamespace,
                    a = e.scribePageImpression
                  this._unsetFlashMessage(this.props),
                    Object(ie.a)() && this.context.setSideNavSupport(!1),
                    t && a(r()(r()({}, n), {}, { section: 'error' })),
                    this._recaptchaEnabled && a(r()(r()({}, n), {}, { section: 'recaptcha' }))
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
                    return y.a.createElement(Y, { history: n, location: a, loggedInUser: r })
                  if (this._shouldRedirectToOCFLoginFlow) {
                    var i = v.canUseDOM && !Object($.a)(a.query) ? btoa(JSON.stringify(a.query)) : '',
                      o = i ? encodeURIComponent(JSON.stringify({ requested_variant: i })) : '',
                      c = o ? '/i/flow/login?input_flow_data='.concat(o) : '/i/flow/login'
                    return y.a.createElement(re.a, { to: c })
                  }
                  return this._renderLogin()
                },
              },
              {
                key: '_unsetFlashMessage',
                value: function (e) {
                  e.errorMessage && Object(Q.c)(Z.n, { featureSwitches: this.context.featureSwitches })
                },
              },
            ]),
            n
          )
        })(y.a.Component)
      f()(we, 'contextType', ce.a)
      var Ce = de.a.create(function (e) {
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
      t.default = Object(pe.c)(Ee)(P(we))
    },
    Lam0: function (e, t, n) {
      'use strict'
      ;(function (e) {
        n.d(t, 'a', function () {
          return x
        })
        var a = n('VrFO'),
          r = n.n(a),
          i = n('Y9Ll'),
          o = n.n(i),
          c = n('1Pcy'),
          s = n.n(c),
          l = n('5Yy7'),
          d = n.n(l),
          p = n('2VqO'),
          u = n.n(p),
          h = n('KEM+'),
          g = n.n(h),
          m = n('ERkP'),
          f = n.n(m),
          b = n('t+RT'),
          y = n('MWbm'),
          v = n('t62R'),
          _ = n('/yvb'),
          E = n('rHpw'),
          w = n('3XMw'),
          C = n.n(w),
          S = C.a.c1df579e,
          L = C.a.b60eba9e,
          R = C.a.ba939777,
          O = C.a.bc6efc72,
          x = (function (t) {
            d()(a, t)
            var n = u()(a)
            function a(t, i) {
              var o
              return (
                r()(this, a),
                (o = n.call(this, t, i)),
                g()(s()(o), '_handlePass', function (e) {
                  var t = o.props.onChange
                  t &&
                    setTimeout(function () {
                      return t(e)
                    }, 1e3)
                }),
                g()(s()(o), '_handleConsent', function () {
                  var e = o.props.onConsent
                  o.setState({ termsAccepted: !0 }), e && e()
                }),
                (o.state = { termsAccepted: !1 }),
                (e.recaptchaOptions = { useRecaptchaNet: !0 }),
                o
              )
            }
            return (
              o()(a, [
                {
                  key: '_renderConsentForm',
                  value: function () {
                    var e = this.props.nextButtonDisabled
                    return f.a.createElement(
                      y.a,
                      null,
                      f.a.createElement(v.b, { style: k.guideCopy }, L),
                      f.a.createElement(
                        y.a,
                        { style: k.button },
                        f.a.createElement(
                          _.a,
                          { disabled: e, onPress: this._handleConsent, size: 'xLarge', type: 'brandOutlined' },
                          S,
                        ),
                      ),
                      f.a.createElement(
                        v.b,
                        { color: 'gray700' },
                        f.a.createElement(
                          C.a.I18NFormatMessage,
                          { $i18n: 'hc37d3ba' },
                          f.a.createElement(v.b, { link: 'https://policies.google.com/privacy' }, O),
                        ),
                      ),
                    )
                  },
                },
                {
                  key: '_renderRecaptcha',
                  value: function () {
                    var e = this.props.withConsentForm
                    return f.a.createElement(
                      f.a.Fragment,
                      null,
                      e
                        ? f.a.createElement(
                            y.a,
                            { style: k.recaptchaTitle },
                            f.a.createElement(v.b, { style: k.guideCopy }, R),
                          )
                        : null,
                      f.a.createElement(
                        y.a,
                        { style: k.container },
                        f.a.createElement(b.a, {
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
          })(f.a.Component),
          k = E.a.create(function (e) {
            return {
              container: { margin: 'auto', transitionProperty: 'opacity', transitionDelay: '2s' },
              button: { paddingVertical: e.spaces.space20 },
              guideCopy: { paddingTop: e.spaces.space12 },
              recaptchaTitle: { paddingBottom: e.spaces.space20 },
            }
          })
      }.call(this, n('fRV1')))
    },
    't+RT': function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        i = n('aWzz'),
        o = n.n(i)
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
        var i = a.prototype
        return (
          (i.getValue = function () {
            return this.props.grecaptcha && void 0 !== this._widgetId
              ? this.props.grecaptcha.getResponse(this._widgetId)
              : null
          }),
          (i.getWidgetId = function () {
            return this.props.grecaptcha && void 0 !== this._widgetId ? this._widgetId : null
          }),
          (i.execute = function () {
            var e = this.props.grecaptcha
            if (e && void 0 !== this._widgetId) return e.execute(this._widgetId)
            this._executeRequested = !0
          }),
          (i.reset = function () {
            this.props.grecaptcha && void 0 !== this._widgetId && this.props.grecaptcha.reset(this._widgetId)
          }),
          (i.handleExpired = function () {
            this.props.onExpired ? this.props.onExpired() : this.props.onChange && this.props.onChange(null)
          }),
          (i.handleErrored = function () {
            this.props.onErrored && this.props.onErrored()
          }),
          (i.explicitRender = function () {
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
          (i.componentDidMount = function () {
            this.explicitRender()
          }),
          (i.componentDidUpdate = function () {
            this.explicitRender()
          }),
          (i.componentWillUnmount = function () {
            void 0 !== this._widgetId && (this.delayOfCaptchaIframeRemoving(), this.reset())
          }),
          (i.delayOfCaptchaIframeRemoving = function () {
            var e = document.createElement('div')
            for (document.body.appendChild(e), e.style.display = 'none'; this.captcha.firstChild; )
              e.appendChild(this.captcha.firstChild)
            setTimeout(function () {
              document.body.removeChild(e)
            }, 5e3)
          }),
          (i.handleRecaptchaRef = function (e) {
            this.captcha = e
          }),
          (i.render = function () {
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
                    i = Object.keys(e)
                  for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n])
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
          sitekey: o.a.string.isRequired,
          onChange: o.a.func,
          grecaptcha: o.a.object,
          theme: o.a.oneOf(['dark', 'light']),
          type: o.a.oneOf(['image', 'audio']),
          tabindex: o.a.number,
          onExpired: o.a.func,
          onErrored: o.a.func,
          size: o.a.oneOf(['compact', 'normal', 'invisible']),
          stoken: o.a.string,
          hl: o.a.string,
          badge: o.a.oneOf(['bottomright', 'bottomleft', 'inline']),
        }),
        (l.defaultProps = {
          onChange: function () {},
          theme: 'light',
          type: 'image',
          tabindex: 0,
          size: 'normal',
          badge: 'bottomright',
        })
      var d = n('oXkQ'),
        p = n.n(d)
      function u() {
        return (u =
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
        g = 0
      function m() {
        return ('undefined' != typeof window && window.recaptchaOptions) || {}
      }
      var f,
        b,
        y = 'onloadcallback',
        v = m(),
        _ = ((f = function () {
          var e = m(),
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
              function i(e, n) {
                var a
                return ((a = t.call(this, e, n) || this).state = {}), (a.__scriptURL = ''), a
              }
              ;(r = t),
                ((n = i).prototype = Object.create(r.prototype)),
                (n.prototype.constructor = n),
                (n.__proto__ = r)
              var o = i.prototype
              return (
                (o.asyncScriptLoaderGetScriptLoaderID = function () {
                  return (
                    this.__scriptLoaderID || (this.__scriptLoaderID = 'async-script-loader-' + g++),
                    this.__scriptLoaderID
                  )
                }),
                (o.setupScriptURL = function () {
                  return (this.__scriptURL = 'function' == typeof f ? f() : f), this.__scriptURL
                }),
                (o.asyncScriptLoaderHandleLoad = function (e) {
                  var t = this
                  this.setState(e, function () {
                    return t.props.asyncScriptOnLoad && t.props.asyncScriptOnLoad(t.state)
                  })
                }),
                (o.asyncScriptLoaderTriggerOnScriptLoaded = function () {
                  var e = h[this.__scriptURL]
                  if (!e || !e.loaded) throw new Error('Script is not loaded.')
                  for (var t in e.observers) e.observers[t](e)
                  delete window[b.callbackName]
                }),
                (o.componentDidMount = function () {
                  var e = this,
                    t = this.setupScriptURL(),
                    n = this.asyncScriptLoaderGetScriptLoaderID(),
                    a = b,
                    r = a.globalName,
                    i = a.callbackName,
                    o = a.scriptId
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
                  ;(l.src = t), (l.async = !0), o && (l.id = o)
                  var d = function (e) {
                    if (h[t]) {
                      var n = h[t].observers
                      for (var a in n) e(n[a]) && delete n[a]
                    }
                  }
                  i &&
                    'undefined' != typeof window &&
                    (window[i] = function () {
                      return e.asyncScriptLoaderTriggerOnScriptLoaded()
                    }),
                    (l.onload = function () {
                      var e = h[t]
                      e &&
                        ((e.loaded = !0),
                        d(function (t) {
                          return !i && (t(e), !0)
                        }))
                    }),
                    (l.onerror = function () {
                      var e = h[t]
                      e &&
                        ((e.errored = !0),
                        d(function (t) {
                          return t(e), !0
                        }))
                    }),
                    document.body.appendChild(l)
                }),
                (o.componentWillUnmount = function () {
                  var e = this.__scriptURL
                  if (!0 === b.removeOnUnmount)
                    for (var t = document.getElementsByTagName('script'), n = 0; n < t.length; n += 1)
                      t[n].src.indexOf(e) > -1 && t[n].parentNode && t[n].parentNode.removeChild(t[n])
                  var a = h[e]
                  a &&
                    (delete a.observers[this.asyncScriptLoaderGetScriptLoaderID()],
                    !0 === b.removeOnUnmount && delete h[e])
                }),
                (o.render = function () {
                  var t = b.globalName,
                    n = this.props,
                    r = (n.asyncScriptOnLoad, n.forwardedRef),
                    i = (function (e, t) {
                      if (null == e) return {}
                      var n,
                        a,
                        r = {},
                        i = Object.keys(e)
                      for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n])
                      return r
                    })(n, ['asyncScriptOnLoad', 'forwardedRef'])
                  return (
                    t && 'undefined' != typeof window && (i[t] = void 0 !== window[t] ? window[t] : void 0),
                    (i.ref = r),
                    Object(a.createElement)(e, i)
                  )
                }),
                i
              )
            })(a.Component),
            r = Object(a.forwardRef)(function (e, t) {
              return Object(a.createElement)(n, u({}, e, { forwardedRef: t }))
            })
          return (
            (r.displayName = 'AsyncScriptLoader(' + t + ')'), (r.propTypes = { asyncScriptOnLoad: o.a.func }), p()(r, e)
          )
        })(l)
      t.a = _
    },
  },
])
//# sourceMappingURL=WIPED
