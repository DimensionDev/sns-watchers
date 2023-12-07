'use strict'
;(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
  ['bundle.LoggedOutHome'],
  {
    967006: function _(e, t, n) {
      n.d(t, {
        Z: function Z() {
          return l
        },
      })
      var a = n(202784),
        o = n(963752),
        i = n(272175),
        c = n(645184),
        r = n.n(c)().c39b0e24
      var l = function l(e) {
        var t = e.deepLink,
          n = r
        return t
          ? a.createElement(
              i.ql,
              null,
              a.createElement('meta', { content: t, property: 'al:ios:url' }),
              a.createElement('meta', { content: o.AF, property: 'al:ios:app_store_id' }),
              a.createElement('meta', { content: n, property: 'al:ios:app_name' }),
              a.createElement('meta', { content: t, property: 'al:android:url' }),
              a.createElement('meta', { content: 'com.twitter.android', property: 'al:android:package' }),
              a.createElement('meta', { content: n, property: 'al:android:app_name' }),
            )
          : null
      }
    },
    1778: function _(e, t, n) {
      n.d(t, {
        Z: function Z() {
          return i
        },
      })
      n(334115), n(200634)
      var a = n(202784),
        o = n(272175)
      var i = function i(e) {
        var t = e.canonical,
          n = e.description,
          i = void 0 === n ? '' : n,
          c = e.image,
          r = e.imageAlt,
          l = e.imageH,
          s = e.imageType,
          p = e.imageW,
          m = e.title,
          u = e.ttl,
          d = e.type
        return a.createElement(
          o.ql,
          null,
          d ? a.createElement('meta', { content: d, property: 'og:type' }) : null,
          t ? a.createElement('meta', { content: t, property: 'og:url' }) : null,
          m ? a.createElement('meta', { content: m, property: 'og:title' }) : null,
          a.createElement('meta', { content: i, property: 'og:description' }),
          c ? a.createElement('meta', { content: c, property: 'og:image' }) : null,
          s ? a.createElement('meta', { content: s, property: 'og:image:type' }) : null,
          p ? a.createElement('meta', { content: p, property: 'og:image:width' }) : null,
          l ? a.createElement('meta', { content: l, property: 'og:image:height' }) : null,
          r ? a.createElement('meta', { content: r, property: 'og:image:alt' }) : null,
          u ? a.createElement('meta', { content: u, property: 'og:ttl' }) : null,
        )
      }
    },
    529082: function _(e, t, n) {
      n.r(t),
        n.d(t, {
          CookieComplianceBannerPadder: function CookieComplianceBannerPadder() {
            return ae
          },
          LoggedOutHome: function LoggedOutHome() {
            return oe
          },
          default: function _default() {
            return ce
          },
        })
      var a = n(133028),
        o = n(709249),
        i = n(887371),
        c = n(545754),
        r = n(486906),
        l = n(196234),
        s = (n(606710), n(543450), n(202784)),
        p = n(272175),
        m = n(325686),
        u = n(123162),
        d = n(436934),
        g = n(229496),
        h = n(854044),
        b = n(973186),
        f = n(645184),
        y = n.n(f),
        E = n(954170),
        S = n(529219),
        B = n(164843),
        x = n(721783),
        Z = n(962230),
        k = n(354987),
        _ = n(744402),
        w = n(967006),
        v = n(1778),
        C = n(907604),
        I = n(567304),
        P = n(544337),
        T = n(896958),
        W = n(963705),
        L = n(384361),
        z = n(158721),
        H = n(185114),
        D = n(977559),
        A = n(855258),
        O = n(392160),
        F = n(467935)
      var j = (0, O.Z)()
        .propsFromState(function () {
          return { userLanguage: F.VT }
        })
        .withAnalytics({ page: 'front' })
      n(344112)
      var G = 380,
        M = 500,
        N = 1e3,
        q = 350
      var V = 'signupButton',
        U = 'loginButton'
      var J = [
          { text: y().a62c9c34, Icon: E['default'] },
          { text: y().cf39fca2, Icon: S['default'] },
          { text: y().j86184fe, Icon: B['default'] },
        ],
        K = y().ac2035f2,
        R = y().eba1b198,
        Q = y().a565833e,
        X = y().fa811c30,
        Y = y().e919c3bc,
        $ = y().e5b0e544,
        ee = y().a4298bc0,
        te = y().j3f49ff6,
        ne = y().ca86b62c
      function ae(e) {
        var t = s.useState(0),
          n = (0, l.Z)(t, 2),
          a = n[0],
          o = n[1],
          i = s.useCallback(function (e) {
            o(e || 0)
          }, [])
        return s.createElement(
          s.Fragment,
          null,
          s.createElement(C.Z.Configure, { hideCookieBannerPicker: !0 }),
          s.createElement(k.Z, null, s.createElement(I.Z, { onHeightChange: i })),
          s.createElement(m.Z, { style: [{ marginBottom: a }, ie.bannerPadderChildren] }, e.children),
        )
      }
      var oe = (function (e) {
        ;(0, c.Z)(n, e)
        var t = (0, r.Z)(n)
        function n(e, i) {
          var c
          return (
            (0, o.Z)(this, n),
            ((c = t.call(this, e, i))._thirdPartySsoButtonsEnabled = c.context.featureSwitches.isTrue(
              'responsive_web_third_party_sso_buttons_enabled',
            )),
            (c._isPlaceholderSIWGButtonEnabled = c.context.featureSwitches.isTrue(
              'responsive_web_placeholder_siwg_button_enabled',
            )),
            (c._cookieComplianceGingersnapEnabled = c.context.featureSwitches.isTrue(
              'responsive_web_cookie_compliance_gingersnap_enabled',
            )),
            (c._renderLoginSignupButtons = function (e, t) {
              var n = e ? ie.ctaButton : ie.ctaButtonMobile,
                a = (0, A.M5)(c.context.featureSwitches).signUpLabel
              return s.createElement(
                m.Z,
                { style: !c._thirdPartySsoButtonsEnabled && 'tablet' === e && ie.ctaButtonContainer },
                c._thirdPartySsoButtonsEnabled
                  ? s.createElement(
                      s.Fragment,
                      null,
                      c._renderSSOButtons(e, t),
                      s.createElement(
                        m.Z,
                        { style: ie.gapContainer },
                        s.createElement(u.Z, { label: s.createElement(d.ZP, { children: ne }) }),
                      ),
                      s.createElement(
                        g.ZP,
                        {
                          link: {
                            pathname: '/i/flow/signup',
                            state: { input: { requested_variant: JSON.stringify({ signup_type: A.mk }) } },
                          },
                          onPress: c._handleSignupButton,
                          size: 'medium',
                          style: [n, 'tablet' === e && ie.ctaButtonSplitSpacing, ie.ssoButtonStyles],
                          testID: V,
                          type: 'brandFilled',
                        },
                        a,
                      ),
                      s.createElement(d.ZP, { color: 'gray700', size: 'subtext3', style: [n, { width: H.fI }] }, A.K2),
                      s.createElement(
                        m.Z,
                        { style: ie.signInButtonContainer },
                        s.createElement(d.ZP, { size: 'headline2', style: n, weight: 'bold' }, X),
                        s.createElement(
                          g.ZP,
                          {
                            link: '/login',
                            onPress: c._handleLoginButton,
                            size: 'medium',
                            style: [n, 'tablet' === e && ie.ctaButtonSplitSpacing, ie.ssoButtonStyles],
                            testID: U,
                            type: 'brandOutlined',
                          },
                          $,
                        ),
                      ),
                    )
                  : s.createElement(
                      s.Fragment,
                      null,
                      s.createElement(
                        g.ZP,
                        {
                          link: '/i/flow/signup',
                          onPress: c._handleSignupButton,
                          size: 'xLarge',
                          style: [n, 'tablet' === e && ie.ctaButtonSplitSpacing],
                          testID: V,
                          type: 'brandFilled',
                        },
                        Q,
                      ),
                      s.createElement(
                        g.ZP,
                        {
                          link: '/login',
                          onPress: c._handleLoginButton,
                          size: 'xLarge',
                          style: n,
                          testID: U,
                          type: 'brandOutlined',
                        },
                        Y,
                      ),
                    ),
              )
            }),
            (c._renderSSOButtons = function (e, t) {
              var n = c.state,
                o = n.buttonState,
                i = n.isCookieCompliant,
                r = e ? ie.ctaButton : ie.ctaButtonMobile,
                l = (0, a.Z)((0, a.Z)({}, ie.ssoButtonStyles), {}, { width: t })
              return s.createElement(
                s.Fragment,
                null,
                s.createElement(z.Z, {
                  buttonSize: 'medium',
                  buttonState: o,
                  customWidth: t,
                  displayType: H.qv.Button,
                  isCookieCompliant:
                    c._cookieComplianceGingersnapEnabled && c._isPlaceholderSIWGButtonEnabled ? i : void 0,
                  onPress: c._handleCookieCompliance,
                  style: [r, 'tablet' === e && ie.ctaButtonSplitSpacing, l],
                }),
                s.createElement(L.Z, {
                  buttonSize: 'medium',
                  buttonState: o,
                  style: [r, 'tablet' === e && ie.ctaButtonSplitSpacing, ie.ssoButtonStyles, ie.appleSsoButton],
                }),
              )
            }),
            (c._handleSignupButton = function () {
              c.props.analytics.scribe({
                section: 'front',
                component: 'signup_callout',
                element: 'form',
                action: 'signup',
              })
            }),
            (c._handleLoginButton = function () {
              c.props.analytics.scribe({
                section: 'front',
                component: 'signup_callout',
                element: 'form',
                action: 'login',
              })
            }),
            (c._handleCookieCompliance = function () {
              c.setState({ isCookieCompliant: !0 })
            }),
            (c.state = {
              buttonState: (0, A.BG)(c.context.featureSwitches),
              isCookieCompliant: (0, P.D0)(c.context.featureSwitches) === P.fD.AcceptAllCookies,
            }),
            c
          )
        }
        return (
          (0, i.Z)(n, [
            {
              key: 'componentDidMount',
              value: function value() {
                ;(0, D.ZP)() && this.context.setSideNavSupport(!1)
              },
            },
            {
              key: 'componentWillUnmount',
              value: function value() {
                ;(0, D.ZP)() && this.context.setSideNavSupport(!0)
              },
            },
            {
              key: 'componentDidUpdate',
              value: function value() {
                ;(0, D.ZP)() && this.context.setSideNavSupport(!1)
              },
            },
            {
              key: 'render',
              value: function value() {
                var e = this
                return s.createElement(
                  W.Z,
                  null,
                  s.createElement(T.Z, { title: ee }),
                  s.createElement(v.Z, {
                    canonical: 'https://twitter.com/',
                    description: te,
                    title: ee,
                    type: 'website',
                  }),
                  s.createElement(w.Z, { deepLink: 'twitter://' }),
                  s.createElement(
                    p.ql,
                    null,
                    s.createElement('meta', { content: 'NOODP', name: 'robots' }),
                    s.createElement('meta', { content: te, name: 'description' }),
                  ),
                  s.createElement(h.ZP, null, function (t) {
                    t.windowHeight
                    var n = (function (e, t) {
                        return {
                          deviceSize: e > N ? 'desktop' : e > M ? 'tablet' : void 0,
                          ssoButtonsWidth: e < q ? H.ND : H.fI,
                        }
                      })(t.windowWidth),
                      a = n.deviceSize,
                      o = n.ssoButtonsWidth
                    return s.createElement(
                      m.Z,
                      { style: ie.root },
                      s.createElement(
                        m.Z,
                        { style: [ie.main, 'desktop' === a && ie.mainWide] },
                        e._renderCTA({ deviceSize: a, ssoButtonsWidth: o }),
                        'desktop' === a ? e._renderHero() : null,
                      ),
                      s.createElement(ae, null, s.createElement(_.Z, { align: 'center' })),
                    )
                  }),
                )
              },
            },
            {
              key: '_renderHero',
              value: function value() {
                return s.createElement(
                  m.Z,
                  { style: [ie.block, ie.communication, ie.blockHero] },
                  s.createElement(
                    m.Z,
                    { style: ie.blockImg },
                    s.createElement(x['default'], { style: ie.twitterIconHero }),
                  ),
                )
              },
            },
            {
              key: '_renderCommunicationItems',
              value: function value() {
                var e = J.length
                return s.createElement(
                  m.Z,
                  { style: ie.communicationItems },
                  J.map(function (t, n) {
                    var a = t.Icon,
                      o = t.text,
                      i = n + 1 === e
                    return s.createElement(
                      m.Z,
                      { key: o, style: [ie.communicationItem, i && ie.communicationItemLast] },
                      s.createElement(a, { style: ie.communicationItemIcon }),
                      s.createElement(
                        d.ZP,
                        { color: 'white', size: 'headline1', style: ie.communicationItemText, weight: 'bold' },
                        o,
                      ),
                    )
                  }),
                )
              },
            },
            {
              key: '_renderCTA',
              value: function value(e) {
                var t = e.deviceSize,
                  n = e.ssoButtonsWidth
                return s.createElement(
                  m.Z,
                  { style: [ie.block, ie.blockCTA, 'tablet' === t && ie.blockTabletCTA] },
                  s.createElement(
                    m.Z,
                    { style: [ie.blockInnerWrapper, 'desktop' === t && ie.blockInnerWrapperWide] },
                    'desktop' === t ? null : s.createElement(x['default'], { style: ie.twitterIcon }),
                    s.createElement(
                      d.ZP,
                      { extendedWidth: !0, style: t ? ie.ctaTitleLarge : ie.ctaTitle, weight: 'bold' },
                      R,
                    ),
                    s.createElement(
                      d.ZP,
                      {
                        extendedWidth: !0,
                        size: t ? 'title2' : 'title4',
                        style: t ? ie.ctaTextLarge : ie.ctaText,
                        weight: 'bold',
                      },
                      K,
                    ),
                    this._renderLoginSignupButtons(t, n),
                  ),
                )
              },
            },
          ]),
          n
        )
      })(s.Component)
      oe.contextType = Z.Z
      var ie = b.Z.create(function (e) {
        return {
          root: { flex: 1 },
          main: { minHeight: 'auto' },
          mainWide: { flex: 'auto', flexDirection: 'row-reverse' },
          block: { justifyContent: 'center', padding: e.spaces.space16 },
          blockHero: { flex: 1, padding: 0, minHeight: '45vh' },
          blockImg: (0, a.Z)(
            (0, a.Z)({}, b.Z.absoluteFillObject),
            {},
            { flex: 1, resizeMode: 'cover', justifyContent: 'center' },
          ),
          blockCTA: { minWidth: '45vw' },
          blockTabletCTA: { maxWidth: '600px', margin: 'auto', width: '100%' },
          blockInnerWrapper: { width: '100%', padding: e.spaces.space20 },
          blockInnerWrapperWide: { minWidth: ''.concat(436.99999999999994, 'px'), maxWidth: ''.concat(760, 'px') },
          bottomButton: { flexGrow: 1, maxWidth: '180px' },
          bottomButtonLeft: { marginEnd: '10px' },
          bottomButtonRight: { marginStart: '10px' },
          bottomButtonsBlock: { flexDirection: 'row', paddingTop: e.spaces.space40, paddingBottom: e.spaces.space32 },
          communication: { overflow: 'hidden' },
          communicationItem: { flexDirection: 'row', marginBottom: '40px' },
          communicationItemIcon: { color: e.colors.white, flexShrink: 0, fontSize: e.fontSizes.title4 },
          communicationItemLast: { marginBottom: 0 },
          communicationItems: { alignSelf: 'center', maxWidth: ''.concat(G, 'px'), paddingVertical: e.spaces.space16 },
          communicationItemText: { lineHeight: '30px', marginStart: e.spaces.space16 },
          seeWhatsHappening: { marginTop: e.spaces.space20 },
          happeningButton: { marginBottom: e.spaces.space16 },
          joinToday: { marginTop: e.spaces.space64, marginBottom: e.spaces.space16 },
          ctaTitle: {
            fontSize: e.spaces.space40,
            letterSpacing: -0.8,
            lineHeight: ''.concat(b.Z.theme.spacesPx.space40 + b.Z.theme.spacesPx.space12, 'px'),
            marginVertical: e.spaces.space40,
          },
          ctaTitleLarge: {
            fontSize: e.spaces.space64,
            letterSpacing: -1.2,
            lineHeight: ''.concat(b.Z.theme.spacesPx.space64 + b.Z.theme.spacesPx.space20, 'px'),
            marginVertical: e.spaces.space48,
          },
          ctaText: { marginBottom: e.spaces.space20 },
          ctaTextLarge: { marginBottom: e.spaces.space32 },
          ctaButtonContainer: { flexDirection: 'row' },
          ctaButton: { marginBottom: e.spaces.space20, maxWidth: ''.concat(G, 'px'), flex: 1 },
          ssoButtonStyles: { marginBottom: e.spaces.space8, width: H.fI, height: e.spaces.space40, flex: 'none' },
          appleSsoButton: { marginBottom: 0 },
          twitterIcon: {
            alignSelf: 'flex-start',
            color: e.colors.brandColor,
            height: '3rem',
            paddingBottom: e.spaces.space12,
          },
          signInButtonContainer: { marginTop: b.Z.theme.spaces.space40 },
          gapContainer: { marginVertical: e.spaces.space4, maxWidth: ''.concat(G, 'px'), width: H.fI },
          ctaButtonMobile: { marginBottom: e.spaces.space16 },
          ctaButtonSplitSpacing: { marginEnd: e.spaces.space20 },
          twitterIconHero: {
            color: e.colors.brandColor,
            height: '50%',
            justifyContent: 'center',
            maxHeight: ''.concat(G, 'px'),
            padding: e.spaces.space32,
          },
          bannerPadderChildren: { transitionProperty: 'margin-bottom', transitionDuration: '100ms' },
        }
      })
      var ce = j(oe)
    },
  },
])

//# sourceMappingURL=WIPED
