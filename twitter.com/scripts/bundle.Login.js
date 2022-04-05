;(window.webpackJsonp = window.webpackJsonp || []).push([
  [63],
  {
    '1cTF': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'LoginScreen', function () {
          return _e
        }),
        n.d(t, 'styles', function () {
          return we
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
        m = n.n(h),
        g = (n('TJCb'), n('/gI4'), n('rbfH'), n('jbUL'), n('0zG9'), n('ERkP')),
        f = n.n(g),
        b = n('6/RC'),
        y = n('RqPI'),
        v = n('3XMw'),
        _ = n.n(v),
        w = n('aTAq'),
        E = n('G6rE'),
        C = n('rxPX'),
        S = function (e, t) {
          return (
            t.location.query &&
            (Object(w.a)(t.location.query.username_or_email) ? t.location.query.username_or_email : void 0)
          )
        },
        L = function (e, t) {
          return (
            y.i(e) ||
            (Object(w.a)(t.location.query.login_verification_error)
              ? I[t.location.query.login_verification_error]
              : void 0)
          )
        },
        R = function (e, t) {
          return (
            !!t.location.pathname && ('/login/check' === t.location.pathname || '/login/check/' === t.location.pathname)
          )
        },
        O = function (e, t) {
          return 'true' === t.location.query.username_disabled
        },
        x = function (e, t) {
          return 'true' === t.location.query.email_disabled
        },
        k = function (e, t) {
          return 'true' === t.location.query.phone_disabled
        },
        I = {
          BadSessionLoginVerification: _.a.f8ad0091,
          ExpiredLoginVerification: _.a.h2c7767e,
          OverLimitLoginVerificationAttempts: _.a.e83047c2,
          OfflineCodeSync: _.a.g4b108ee,
        },
        P = Object(C.a)()
          .propsFromState(function () {
            return {
              errorMessage: L,
              loginId: S,
              loginReturnPath: y.s,
              loggedInUser: E.e.selectLoggedInUser,
              shouldChallenge: R,
              shouldDisableUsernameLogin: O,
              shouldDisableEmailLogin: x,
              shouldDisablePhoneLogin: k,
            }
          })
          .withAnalytics({ page: 'login' }),
        T = (n('2G9S'), n('7x/C'), n('DZ+c'), n('KqXw'), n('MvUL'), n('ho0z'), n('SrtL')),
        F = n('lUZE'),
        D = n('8jkQ'),
        U = n('yoO3'),
        j = 'LoginPage_Continue_Button',
        V = n('sgih'),
        A = n('mw9i'),
        z = n('t62R'),
        M = n('jhWN'),
        q = n('jV+4'),
        N = n('/yvb'),
        H = n('Irs7'),
        B = _.a.d98c140e,
        W = _.a.e55188f0,
        X = _.a.d55d8fe1,
        G = _.a.c3d89aca,
        J = _.a.g806008e,
        Y = (function (e) {
          d()(n, e)
          var t = u()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              m()(s()(e), '_handleContinuePress', function () {
                var t = e.props,
                  n = t.analytics,
                  a = t.history,
                  r = t.location.query,
                  i = r && r.redirect_after_login ? r.redirect_after_login.toString() : void 0,
                  o = i && D.b.makeSafeForTwitterRedirect(i)
                i && o
                  ? (n.scribeAction('redirect'), window.location.assign(o))
                  : (n.scribeAction('redirecthome'), a.replace('/home'))
              }),
              m()(s()(e), '_handleSwitchAccountPress', function () {
                var t = e.props,
                  n = t.analytics,
                  a = t.history
                n.scribeAction('switch'), a.replace('/account/switch')
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.loggedInUser
                  return f.a.createElement(
                    U.a,
                    null,
                    f.a.createElement(T.a, { title: B }),
                    f.a.createElement(
                      V.a,
                      { type: 'full' },
                      f.a.createElement(
                        A.a,
                        { style: [we.root, we.center], withGutter: !0 },
                        f.a.createElement(F.a, { style: we.icon }),
                        f.a.createElement(
                          z.b,
                          {
                            accessibilityRole: 'heading',
                            align: 'center',
                            size: 'title4',
                            style: we.heading,
                            weight: 'bold',
                          },
                          W,
                        ),
                        f.a.createElement(M.a, { size: 'jumbo', uri: e.profile_image_url_https }),
                        f.a.createElement(q.a, {
                          badgeContext: 'account',
                          isProtected: e.protected,
                          isVerified: e.verified,
                          name: e.name,
                          screenName: e.screen_name,
                          style: [we.gutter, we.center],
                          withStackedLayout: !0,
                        }),
                        f.a.createElement(z.b, { align: 'center', style: we.gutter }, X),
                        f.a.createElement(
                          N.a,
                          { onPress: this._handleContinuePress, style: we.gutter, testID: j, type: 'brandFilled' },
                          G,
                        ),
                        f.a.createElement(
                          z.b,
                          {
                            accessibilityRole: 'link',
                            align: 'center',
                            color: 'link',
                            onPress: this._handleSwitchAccountPress,
                            style: we.gutter,
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
        })(f.a.Component),
        K = Object(H.a)(Y, { page: 'login', section: 'continue' }),
        Z = n('mrHL'),
        Q = n('cnVF'),
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
        pe = n('XJCT'),
        ue = _.a.d1091f50,
        he = _.a.eab9ceb1,
        me = _.a.g2b8acd4,
        ge = _.a.bdc9d8a2,
        fe = _.a.c2ab20ab,
        be = _.a.id312f0a,
        ye = _.a.caac124e,
        ve = _.a.ab77e0b8,
        _e = (function (e) {
          d()(n, e)
          var t = u()(n)
          function n(e, a) {
            var i
            r()(this, n)
            var o = e.loginId
            ;(i = t.call(this, e, a)),
              m()(s()(i), '_recaptchaEnabled', !1),
              m()(s()(i), '_renderLogin', function () {
                return f.a.createElement(
                  U.a,
                  null,
                  f.a.createElement(T.a, { title: ge }),
                  f.a.createElement(oe.a, { style: [we.root, we.container] }, i._renderContent()),
                )
              }),
              m()(s()(i), '_renderContent', function () {
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
                  m = !!p,
                  g = i._recaptchaEnabled && !m,
                  b = !(i._recaptchaEnabled && u)
                return f.a.createElement(
                  f.a.Fragment,
                  null,
                  f.a.createElement(
                    oe.a,
                    { style: we.marginHorizontal },
                    f.a.createElement(F.a, { style: we.icon }),
                    f.a.createElement(
                      z.b,
                      {
                        accessibilityRole: 'heading',
                        extendedWidth: !0,
                        size: 'title2',
                        style: we.heading,
                        weight: 'bold',
                      },
                      me,
                    ),
                    t ? f.a.createElement(se.a, { text: t, type: 'danger' }) : null,
                    b ? i._renderAlternativeLoginMethodCopy() : null,
                    m ? f.a.createElement(z.b, { style: we.passedChallengeCopy }, fe) : null,
                  ),
                  f.a.createElement(
                    ne.a,
                    {
                      autoSubmit: l,
                      hideSubmitButton: g,
                      loginReturnPath: a,
                      submitButtonDisabled: i._hasMissingFields(),
                      submitButtonSize: 'xLarge',
                      submitButtonStyle: we.submitButton,
                    },
                    f.a.createElement(pe.b, {
                      autoFocus: !n,
                      onChange: i._handleUsernameFieldChange,
                      onSubmitEditing: i._handleSubmitEditing,
                      value: h,
                      withEmailDisabled: r,
                      withPhoneDisabled: o,
                      withUsernameDisabled: c,
                    }),
                    g
                      ? null
                      : f.a.createElement(pe.a, {
                          autoFocus: !!n,
                          onChange: i._handlePasswordFieldChange,
                          onSubmitEditing: i._handleSubmitEditing,
                          value: d,
                        }),
                    i._recaptchaEnabled
                      ? f.a.createElement('input', {
                          defaultValue: p,
                          name: 'g-recaptcha-response',
                          style: { display: 'none' },
                        })
                      : null,
                  ),
                  f.a.createElement(
                    oe.a,
                    { style: we.marginHorizontal },
                    i._recaptchaEnabled && !m ? i._renderRecaptcha() : null,
                    f.a.createElement(
                      z.b,
                      { align: 'center', style: we.links },
                      f.a.createElement(
                        le.a,
                        null,
                        f.a.createElement(
                          z.b,
                          {
                            link: {
                              pathname: 'https://twitter.com/account/begin_password_reset',
                              external: !0,
                              openInSameFrame: !0,
                            },
                          },
                          ue,
                        ),
                        f.a.createElement(z.b, { link: '/i/flow/signup' }, he),
                      ),
                    ),
                  ),
                )
              }),
              m()(s()(i), '_renderAlternativeLoginMethodCopy', function () {
                var e,
                  t = i.props,
                  n = t.shouldDisableEmailLogin,
                  a = t.shouldDisablePhoneLogin,
                  r = t.shouldDisableUsernameLogin
                return (
                  r ? (e = be) : a ? (e = ve) : n && (e = ye),
                  a || n || r ? f.a.createElement(z.b, { color: 'magenta500' }, e) : null
                )
              }),
              m()(s()(i), '_renderRecaptcha', function () {
                var e = i.state.usernameValue
                return f.a.createElement(ae.a, {
                  nextButtonDisabled: !e,
                  onChange: i._handleRecaptchaStateChange,
                  onConsent: i._handleRecaptchaTermAccepted,
                  withConsentForm: !0,
                })
              }),
              m()(s()(i), '_hasMissingFields', function () {
                var e = i.state,
                  t = e.passwordValue
                return !e.usernameValue || !t
              }),
              m()(s()(i), '_handlePasswordFieldChange', function (e) {
                i.setState({ passwordValue: e.target.value })
              }),
              m()(s()(i), '_handleUsernameFieldChange', function (e) {
                i.setState({ usernameValue: e.target.value })
              }),
              m()(s()(i), '_handleSubmitEditing', function () {
                i._hasMissingFields() || i.setState({ autoSubmit: !0 })
              }),
              m()(s()(i), '_handleRecaptchaStateChange', function (e) {
                var t = e ? 'passed' : 'expired'
                i.props.analytics.scribe({ section: 'recaptcha', action: t }),
                  e && i.setState({ recaptchaSuccessToken: e })
              }),
              m()(s()(i), '_handleRecaptchaTermAccepted', function () {
                i.props.analytics.scribe({ section: 'recaptcha', component: 'terms', action: 'accepted' }),
                  i.setState({ recaptchaTermAccepted: !0 })
              }),
              (i._continueEnabled =
                i.context.featureSwitches.isTrue('responsive_web_continue_as_always_enabled') ||
                ('true' === e.location.query.showContinuePrompt &&
                  i.context.featureSwitches.isTrue('responsive_web_continue_as_param_enabled'))),
              (i._shouldRedirectToOCFLoginFlow = !te.b && i.context.featureSwitches.isTrue('stateful_login_enabled'))
            var c,
              l = e.shouldChallenge
            return (
              (i._recaptchaEnabled =
                !!l &&
                ((c = i.context.featureSwitches),
                !Object(ee.a)('responsive_web_3rd_party_category_google_recaptcha', c))),
              (i.state = { autoSubmit: !1, recaptchaTermAccepted: !1, usernameValue: o || '', passwordValue: '' }),
              i
            )
          }
          return (
            o()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.analytics,
                    n = e.errorMessage
                  this._unsetFlashMessage(this.props),
                    Object(ie.a)() && this.context.setSideNavSupport(!1),
                    n && t.scribePageImpression({ section: 'error', action: 'show' }),
                    this._recaptchaEnabled && t.scribePageImpression({ section: 'recaptcha', action: 'show' })
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
                    return f.a.createElement(K, { history: n, location: a, loggedInUser: r })
                  if (this._shouldRedirectToOCFLoginFlow) {
                    var i = b.canUseDOM && !Object($.a)(a.query) ? btoa(JSON.stringify(a.query)) : '',
                      o = i ? encodeURIComponent(JSON.stringify({ requested_variant: i })) : '',
                      c = o ? '/i/flow/login?input_flow_data='.concat(o) : '/i/flow/login'
                    return f.a.createElement(re.a, { to: c })
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
        })(f.a.Component)
      m()(_e, 'contextType', ce.a)
      var we = de.a.create(function (e) {
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
        }),
        Ee = P(_e)
      t.default = Ee
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
          m = n.n(h),
          g = n('ERkP'),
          f = n.n(g),
          b = n('t+RT'),
          y = n('MWbm'),
          v = n('t62R'),
          _ = n('/yvb'),
          w = n('rHpw'),
          E = n('3XMw'),
          C = n.n(E),
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
                m()(s()(o), '_handlePass', function (e) {
                  var t = o.props.onChange
                  t &&
                    setTimeout(function () {
                      return t(e)
                    }, 1e3)
                }),
                m()(s()(o), '_handleConsent', function () {
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
          k = w.a.create(function (e) {
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
        m = 0
      function g() {
        return ('undefined' != typeof window && window.recaptchaOptions) || {}
      }
      var f,
        b,
        y = 'onloadcallback',
        v = g(),
        _ = ((f = function () {
          var e = g(),
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
                    this.__scriptLoaderID || (this.__scriptLoaderID = 'async-script-loader-' + m++),
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
