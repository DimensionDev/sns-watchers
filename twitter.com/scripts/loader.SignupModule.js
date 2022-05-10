;(window.webpackJsonp = window.webpackJsonp || []).push([
  [184],
  {
    '6vad': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return m
      })
      n('yH/f')
      var a = n('ERkP'),
        i = n.n(a),
        o = n('t62R'),
        r = n('EHV7'),
        s = n('rHpw'),
        l = s.a.create(function (e) {
          return {
            icon: {
              color: e.colors.primary,
              height: e.fontSizes.title4,
              paddingRight: e.spaces.space12,
              width: e.fontSizes.title4,
            },
          }
        }),
        c = n('7Mjr'),
        u = n('I4+6'),
        p = n('cm6r'),
        d = n('MWbm'),
        m = Object.freeze({ TopicFilled: 'TOPIC_FILLED' })
      var y = s.a.create(function (e) {
        return {
          root: {
            justifyContent: 'space-between',
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.componentDimensions.gutterVertical,
          },
          mainContent: { flexDirection: 'row' },
          subtext: { alignSelf: 'flex-start' },
          withSubtext: { alignSelf: 'center' },
          icon: { alignSelf: 'flex-start', height: e.spaces.space20, justifyContent: 'center' },
          iconArrow: { color: e.colors.text },
          rightControlGroup: { flexDirection: 'row', justifyContent: 'flex-end', flexGrow: 1, alignSelf: 'center' },
        }
      })
      t.b = function (e) {
        var t = e.icon,
          n = e.landingUrl,
          a = e.nativeID,
          g = e.rightControl,
          h = e.style,
          b = e.subtext,
          f = e.testID,
          w = e.text,
          S = (function (e) {
            switch (e) {
              case m.TopicFilled:
                return i.a.createElement(r.a, { style: l.icon })
              default:
                return null
            }
          })(t),
          _ = b ? null : y.withSubtext,
          v = u.a.generate({
            backgroundColor: s.a.theme.colors.gray0,
            color: s.a.theme.colors.cellBackground,
            customFocusBackgroundColor: s.a.theme.colors.gray0,
            customHoverBackgroundColor: s.a.theme.colors.gray0,
            customPressedBackgroundColor: s.a.theme.colors.gray0,
          })
        return i.a.createElement(
          p.a,
          {
            interactiveStyles: n ? v : null,
            link: null == n ? void 0 : n.url,
            nativeID: a,
            style: [y.root, h],
            testID: f,
          },
          i.a.createElement(
            d.a,
            { accessibilityLevel: 2, accessibilityRole: 'heading', style: y.mainContent },
            i.a.createElement(d.a, { style: y.icon }, S),
            i.a.createElement(
              o.b,
              { numberOfLines: 3, size: 'headline1', style: _, weight: 'heavy', withHashflags: !0 },
              w,
            ),
            i.a.createElement(
              d.a,
              { style: y.rightControlGroup },
              n ? i.a.createElement(d.a, { style: _ }, i.a.createElement(c.a, { style: y.iconArrow })) : null,
              g ? i.a.createElement(d.a, null, g) : null,
            ),
          ),
          b
            ? i.a.createElement(
                o.b,
                { color: 'gray700', numberOfLines: 2, size: 'subtext2', style: y.subtext, withHashflags: !0 },
                b,
              )
            : null,
        )
      }
    },
    UpKB: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        i = n.n(a),
        o = n('VrFO'),
        r = n.n(o),
        s = n('Y9Ll'),
        l = n.n(s),
        c = n('1Pcy'),
        u = n.n(c),
        p = n('5Yy7'),
        d = n.n(p),
        m = n('2VqO'),
        y = n.n(m),
        g = n('KEM+'),
        h = n.n(g),
        b = (n('2G9S'), n('ho0z'), n('0zG9'), n('ERkP')),
        f = n.n(b),
        w = n('/yvb'),
        S = n('hUVV'),
        _ = n('3XMw'),
        v = n.n(_),
        k = n('iKTg'),
        E = n('TaB8'),
        C = n('1zbE'),
        z = n('Ukpf'),
        x = n('cnVF'),
        P = n('TnY3'),
        I = n('0+0m'),
        A = n('v6aA'),
        B = n('2qJZ'),
        L = v.a.ib65b1c6,
        D = v.a.f55cebb7,
        O = v.a.g61ed8a4,
        j = { clientId: I.a, scope: 'name email', usePopup: !0 },
        T = (function (e) {
          d()(n, e)
          var t = y()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++) o[s] = arguments[s]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              h()(u()(e), 'state', { isScriptLoaded: !1 }),
              h()(
                u()(e),
                '_is3rdPartyIntegrationDisabled',
                Object(E.a)('responsive_web_3rd_party_category_sign_in_with_apple', e.context.featureSwitches),
              ),
              h()(u()(e), '_initAppleIDAuth', function () {
                var t = window.AppleID,
                  n = e.props.fetchSsoInitToken,
                  a = Object(B.c)(e.context.featureSwitches) ? 'https://'.concat(B.b) : 'https://'.concat(B.a)
                t &&
                  n(x.A.Apple).then(function (e) {
                    var n = e.state
                    t.auth.init(i()(i()({}, j), {}, { redirectURI: a, state: n }))
                  })
              }),
              h()(u()(e), '_handleOnPress', function () {
                var t = window.AppleID,
                  n = e.props,
                  a = n.analytics,
                  i = n.buttonState,
                  o = n.history,
                  r = n.personalizationSettings,
                  s = n.shouldPropagateP13nSettings,
                  l = n.ssoInitTokens,
                  c = r || {},
                  u = c.allowCookieUse,
                  p = c.allowDeviceAccess,
                  d = c.allowPartnerships,
                  m = c.allowPersonalization
                a.scribe({ component: 'apple_sign_in', element: i, action: 'click' }),
                  t.auth
                    .signIn()
                    .then(function (e) {
                      a.scribe({ component: 'apple_sign_in', element: i, action: 'success' })
                      var t = e.user && e.user.name && e.user.name.firstName && e.user.name.lastName
                      o.push({
                        pathname: '/i/flow/single_sign_on',
                        state: {
                          input: {
                            cookie_personalization_settings: s && {
                              allow_cookie_use: !!u,
                              allow_device_personalization: !!p,
                              allow_partnerships: !!d,
                              allow_ads_personalization: !!m,
                            },
                            requested_variant: JSON.stringify({
                              display_name: t && ''.concat(e.user.name.firstName, ' ').concat(e.user.name.lastName),
                              id_token: e.authorization.id_token,
                              provider: x.A.Apple,
                              state: l[x.A.Apple],
                            }),
                          },
                        },
                      })
                    })
                    .catch(function (t) {
                      var n = e.props.addToast
                      t.error !== I.g
                        ? (a.scribe({ component: 'apple_sign_in', element: i, action: 'failure' }), n({ text: O }))
                        : a.scribe({ component: 'apple_sign_in', element: 'auth', action: 'user_closed_popup' })
                    })
              }),
              e
            )
          }
          return (
            l()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this
                  this._is3rdPartyIntegrationDisabled ||
                    z.a.inject({
                      callback: function () {
                        e._initAppleIDAuth(), e.setState({ isScriptLoaded: !0 })
                      },
                      scriptId: 'signInWithAppleJsLibrary',
                      src: 'https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js',
                    })
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.buttonSize,
                    n = e.buttonState,
                    a = e.style,
                    i = this.state.isScriptLoaded,
                    o = n === C.a.SignUp ? L : D
                  return this._is3rdPartyIntegrationDisabled
                    ? null
                    : f.a.createElement(w.a, {
                        backgroundColor: 'white',
                        borderColor: 'gray200',
                        children: o,
                        color: 'alwaysBaseGray1100',
                        disabled: !i,
                        icon: f.a.createElement(k.a, null),
                        onPress: this._handleOnPress,
                        size: t,
                        style: a,
                      })
                },
              },
            ]),
            n
          )
        })(f.a.PureComponent)
      h()(T, 'contextType', A.a),
        h()(T, 'defaultProps', { buttonSize: 'xLarge', buttonState: 'signup' }),
        (t.a = Object(P.a)(Object(S.a)(T)))
    },
    iKTg: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        i = n.n(a),
        o = n('ERkP'),
        r = n.n(o),
        s = n('Lsrn'),
        l = n('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            i()(
              i()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
    sojc: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'SignupModuleContainer', function () {
          return H
        })
      var a = n('VrFO'),
        i = n.n(a),
        o = n('Y9Ll'),
        r = n.n(o),
        s = n('1Pcy'),
        l = n.n(s),
        c = n('5Yy7'),
        u = n.n(c),
        p = n('2VqO'),
        d = n.n(p),
        m = n('KEM+'),
        y = n.n(m),
        g = (n('2G9S'), n('ERkP')),
        h = n.n(g),
        b = (n('0zG9'), n('UpKB')),
        f = n('v6aA'),
        w = n('kG2l'),
        S = n('3XMw'),
        _ = n.n(S),
        v = n('N5qz'),
        k = n('MWbm'),
        E = n('rHpw'),
        C = n('6vad'),
        z = n('t62R'),
        x = n('cHvH'),
        P = n('/yvb'),
        I = n('0+0m'),
        A = n('1zbE'),
        B = _.a.a565833d,
        L = _.a.aa95ddc0,
        D = _.a.b50ea616,
        O = _.a.ie8e1ffc,
        j = E.a.create(function (e) {
          return {
            buttonContainer: {
              marginTop: e.spaces.space16,
              marginBottom: e.spaces.space16,
              marginLeft: e.spaces.space12,
              marginRight: e.spaces.space12,
            },
            ssoButtonStyles: { marginBottom: e.spaces.space12 },
            buttonStyles: { width: I.b, height: e.spaces.space40 },
            narrowButtonStyles: { width: I.f },
            moduleContent: { paddingLeft: e.spaces.space12, paddingRight: e.spaces.space12 },
            footerLabel: { marginBottom: e.spaces.space16 },
          }
        }),
        T = function (e) {
          var t = e.onSignupClick,
            n = h.a.useContext(f.a).featureSwitches.isTrue('responsive_web_third_party_sso_buttons_enabled')
          return h.a.createElement(
            k.a,
            { accessibilityLabel: B, accessibilityRole: 'summary' },
            h.a.createElement(C.b, { text: D }),
            h.a.createElement(z.b, { color: 'gray700', size: 'subtext2', style: j.moduleContent }, O),
            h.a.createElement(x.a, null, function (e) {
              var a = e.windowWidth,
                i = v.a.isTwoColumnSmallLayout(a)
              return h.a.createElement(
                k.a,
                { style: j.buttonContainer },
                n
                  ? h.a.createElement(
                      h.a.Fragment,
                      null,
                      h.a.createElement(w.a, {
                        buttonSize: 'medium',
                        buttonState: A.a.SignUp,
                        customWidth: i ? I.f : void 0,
                        displayType: I.e.Button,
                        style: [j.ssoButtonStyles, j.buttonStyles, i && j.narrowButtonStyles],
                      }),
                      h.a.createElement(b.a, {
                        buttonSize: 'medium',
                        buttonState: A.a.SignUp,
                        style: [j.ssoButtonStyles, j.buttonStyles, i && j.narrowButtonStyles],
                      }),
                      h.a.createElement(
                        P.a,
                        {
                          accessibilityRole: 'link',
                          backgroundColor: 'white',
                          borderColor: 'gray200',
                          color: 'alwaysBaseGray1100',
                          link: {
                            pathname: '/i/flow/signup',
                            state: { input: { requested_variant: JSON.stringify({ signup_type: A.b }) } },
                          },
                          onPress: t,
                          size: 'medium',
                          style: [j.buttonStyles, i && j.narrowButtonStyles],
                        },
                        L,
                      ),
                    )
                  : h.a.createElement(
                      P.a,
                      {
                        accessibilityRole: 'link',
                        link: '/i/flow/signup',
                        onPress: t,
                        size: 'medium',
                        type: 'brandFilled',
                      },
                      B,
                    ),
              )
            }),
            n
              ? h.a.createElement(
                  z.b,
                  { color: 'gray700', size: 'subtext2', style: [j.moduleContent, j.footerLabel] },
                  A.c,
                )
              : null,
          )
        },
        R = n('Irs7'),
        H = (function (e) {
          u()(n, e)
          var t = d()(n)
          function n() {
            var e
            i()(this, n)
            for (var a = arguments.length, o = new Array(a), r = 0; r < a; r++) o[r] = arguments[r]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              y()(l()(e), '_handleSignupClick', function () {
                e.props.analytics.scribeAction('signup')
              }),
              e
            )
          }
          return (
            r()(n, [
              {
                key: 'render',
                value: function () {
                  return h.a.createElement(T, { onSignupClick: this._handleSignupClick })
                },
              },
            ]),
            n
          )
        })(h.a.Component)
      t.default = Object(R.a)(H, { component: 'signup_module' })
    },
  },
])
//# sourceMappingURL=WIPED
