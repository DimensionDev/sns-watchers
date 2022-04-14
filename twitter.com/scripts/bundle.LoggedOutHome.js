;(window.webpackJsonp = window.webpackJsonp || []).push([
  [63],
  {
    '35hZ': function (e, t, n) {
      'use strict'
      var a = n('EORa').useTrackLoadQueryInRender,
        r = n('h2Du'),
        o = n('6zvL'),
        i = n('PJTX'),
        c = n('I9iR'),
        s = (n('ERkP').useDebugValue, n('e1/f').__internal),
        l = s.fetchQueryDeduped,
        u = s.fetchQuery
      n('/2Cm')
      e.exports = function (e, t, n) {
        a()
        var s,
          d = i(),
          p = t.fetchKey,
          m = t.fetchPolicy,
          f = t.source,
          g = t.variables,
          h = t.networkCacheConfig,
          b = o(e, g, h)
        if ('PreloadedQuery_DEPRECATED' === t.kind)
          b.request.node.params.name !== t.name && c(!1),
            (s = {
              componentDisplayName: 'usePreloadedQuery()',
              fetchKey: p,
              fetchObservable: l(d, b.request.identifier, function () {
                return d === t.environment && null != f
                  ? d.executeWithSource({ operation: b, source: f })
                  : d.execute({ operation: b })
              }),
              fetchPolicy: m,
              query: b,
              renderPolicy: null == n ? void 0 : n.UNSTABLE_renderPolicy,
            })
        else {
          var y = u(d, b)
          s = {
            componentDisplayName: 'usePreloadedQuery()',
            fetchObservable: null != f && d === t.environment ? f.ifEmpty(y) : (t.environment, y),
            fetchKey: p,
            fetchPolicy: m,
            query: b,
            renderPolicy: null == n ? void 0 : n.UNSTABLE_renderPolicy,
          }
        }
        return r(s)
      }
    },
    '3rEN': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return re
      })
      n('yH/f'), n('KqXw'), n('Ysgh')
      var a,
        r = n('ERkP'),
        o = n.n(r),
        i = n('Hde2'),
        c = n('bojF'),
        s = n('3XMw'),
        l = n.n(s),
        u = n('lUZE'),
        d = n('1f8Q'),
        p = n('rHpw'),
        m = n('MWbm'),
        f = n('yiKp'),
        g = n.n(f),
        h = (n('M+/F'), n('z84I'), n('uFXj'), n('2G9S'), n('FQwk')),
        b = n('iCMz'),
        y = n('Rp9C'),
        v = n('72nz'),
        E = n('Irs7'),
        k = n('htQn'),
        S = n('t62R'),
        w = l.a.d228a9a0,
        x = l.a.jae84f3a,
        B = { section: 'logged_out_search', component: 'trend' },
        C = function (e) {
          var t = e.position,
            n = e.trend,
            a = Object(E.b)(),
            r = o.a.useMemo(
              function () {
                return [g()(g()({}, y.a.getTrendItem(n)), {}, { position: t })]
              },
              [n, t],
            )
          o.a.useEffect(
            function () {
              a.scribe(g()(g()({}, B), {}, { action: 'impression', data: { items: r } }))
            },
            [a, r],
          )
          var i = '/search?src=logged_out_home_trend_click&vertical=trends&q='.concat(encodeURIComponent(n))
          return o.a.createElement(
            k.a,
            {
              accessibilityRole: 'listitem',
              onClick: function () {
                return a.scribe(g()(g()({}, B), {}, { action: 'click', data: { items: r } }))
              },
              withInteractiveStyling: !1,
            },
            o.a.createElement(S.b, { color: 'gray700', key: n, link: i, size: 'body', style: T.searchTrend }, n),
          )
        },
        _ = function (e) {
          var t = e.alignment,
            n = (e.deviceSize, e.trendResults.slice(0, 5))
          return o.a.createElement(
            m.a,
            {
              accessibilityLabel: x,
              accessibilityRole: 'list',
              style: [T.searchTrends, 'left' === t && T.searchTrendsLeft],
            },
            n.map(function (e, t) {
              return o.a.createElement(C, { key: e, position: t, trend: e })
            }),
            o.a.createElement(
              k.a,
              { accessibilityRole: 'listitem', withInteractiveStyling: !1 },
              o.a.createElement(S.b, { link: '/explore', style: T.searchTrend }, w),
            ),
          )
        },
        I = function (e) {
          var t = e.alignment,
            n = e.deviceSize,
            a = e.trendResults,
            r = 'tablet' !== n && 'desktop' !== n
          return o.a.createElement(
            m.a,
            {
              style: [
                T.searchBoxTrendsContainer,
                r && T.searchBoxTrendsContainerMobile,
                'tablet' === n && T.searchBoxTrendsContainerTablet,
                'desktop' === n && T.searchBoxTrendsContainerDesktop,
              ],
            },
            o.a.createElement(
              m.a,
              { style: T.searchBox },
              o.a.createElement(v.default, { forceVdlDisable: !1, isOnHomepage: !0, shouldHandleSearchShortcut: !0 }),
            ),
            a && o.a.createElement(_, { alignment: t, deviceSize: n, trendResults: a }),
          )
        },
        T = p.a.create(function (e) {
          return {
            bottomBarForMobile: {
              backgroundColor: e.colors.navigationBackground,
              borderTopColor: e.colors.borderColor,
              borderTopStyle: 'solid',
              borderTopWidth: e.borderWidths.small,
              padding: 'calc('.concat(e.spaces.space16, ' + ').concat(p.a.iPhoneOffsetBottom, ')'),
            },
            searchHomeFooter: { backgroundColor: e.colors.gray50 },
            searchHomeFooterMobile: {
              marginBottom: 'calc('.concat(e.spaces.space56, ' + ').concat(e.spaces.space4, ')'),
            },
            searchRoot: { flex: 1, alignItems: 'center', marginTop: '25vh', zIndex: 1 },
            searchRootMobile: { marginBottom: '55vh' },
            searchBox: { width: '100%', height: e.spaces.space40, marginBottom: e.spaces.space12, zIndex: 1 },
            searchBoxTrendsContainer: { width: '100%' },
            searchBoxTrendsContainerMobile: { paddingHorizontal: e.spaces.space16 },
            searchBoxTrendsContainerTablet: { maxWidth: 'calc('.concat(e.spaces.space36, ' * 10)') },
            searchBoxTrendsContainerDesktop: {
              alignItems: 'center',
              maxWidth: 'calc('.concat(e.spaces.space48, ' * 10)'),
              minHeight: 'calc('.concat(e.spaces.space12, ' * 10)'),
            },
            searchNavBar: {
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
              margin: 'calc('.concat(e.spaces.space40, ' + ').concat(e.spaces.space2, ')'),
            },
            searchNavButtons: { flexDirection: 'row' },
            searchTrend: { marginTop: e.spaces.space12, marginRight: e.spaces.space16 },
            searchTrends: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' },
            searchTrendsLeft: { justifyContent: 'flex-start' },
            twitterIconSearch: {
              alignSelf: 'center',
              color: e.colors.brandColor,
              marginBottom: 'calc('.concat(e.spaces.space36, ' + ').concat(e.spaces.space2, ')'),
              height: e.spaces.space48,
            },
          }
        }),
        L = function (e) {
          var t = e.deviceSize,
            n = e.trendResults,
            a = function () {
              return o.a.createElement(b.a, {
                buttonSize: 'large',
                loginButtonType: 'primaryOutlined',
                scribeNamespace: { component: 'signup_callout', element: 'form', section: 'front' },
                signupButtonType: 'primaryFilled',
              })
            }
          return o.a.createElement(
            o.a.Fragment,
            null,
            'desktop' !== t
              ? o.a.createElement(i.a, { style: T.bottomBarForMobile }, a())
              : o.a.createElement(
                  m.a,
                  { style: T.searchNavBar },
                  o.a.createElement(m.a, { style: T.searchNavButtons }, a()),
                ),
            o.a.createElement(
              m.a,
              { style: [T.searchRoot, 'desktop' !== t && T.searchRootMobile] },
              o.a.createElement(u.a, { style: T.twitterIconSearch }),
              o.a.createElement(I, { deviceSize: t, trendResults: n }),
            ),
            o.a.createElement(
              c.CookieComplianceBannerPadder,
              null,
              o.a.createElement(
                m.a,
                { style: [T.searchHomeFooter, 'desktop' !== t && T.searchHomeFooterMobile] },
                o.a.createElement(h.a, { align: 'center' }),
              ),
            ),
          )
        },
        P = l.a.g0ff1ca8,
        z = l.a.g3aa4a89,
        O = p.a.create(function (e) {
          return {
            bottomBarBanner: {
              paddingBottom: p.a.iPhoneOffsetBottom,
              backgroundColor: e.colors.primary,
              boxShadow: e.boxShadows.medium,
            },
            searchRootWithBanner: { marginTop: '30vh', marginBottom: '0' },
          }
        }),
        R = function (e) {
          var t = e.deviceSize,
            n = e.trendResults
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(
              m.a,
              { style: [T.searchRoot, 'desktop' !== t && T.searchRootMobile, O.searchRootWithBanner] },
              o.a.createElement(u.a, { style: T.twitterIconSearch }),
              o.a.createElement(I, { deviceSize: t, trendResults: n }),
            ),
            o.a.createElement(
              c.CookieComplianceBannerPadder,
              null,
              o.a.createElement(
                i.a,
                { style: O.bottomBarBanner },
                o.a.createElement(d.a, { buttonSize: 'large', fullWidth: !0, subtext: z, text: P }),
              ),
            ),
          )
        },
        F = n('n0Rl'),
        W = n('RgK2'),
        H = n.n(W),
        D = n('kGix'),
        M = (n('YWiL'), n('ddV6')),
        j = n.n(M),
        A = (n('0zG9'), n('UpKB')),
        N = n('v6aA'),
        V = n('5P4+'),
        U = n('kG2l'),
        G = n('JkIr'),
        K = n('0yYu'),
        q = n('/yvb'),
        Q = n('AS3p'),
        J = n('1zbE'),
        X = l.a.ca86b62c,
        Y = l.a.aa95ddc0,
        Z = l.a.b0dbe914,
        $ = l.a.ae03a21c,
        ee = 360,
        te = function (e) {
          var t = e.buttonState,
            n = e.cookieComplianceFS,
            a = e.deviceSize,
            r = o.a.useContext(N.a).featureSwitches,
            i = Object(Q.c)(r) === Q.a.AcceptAllCookies,
            c = o.a.useState(i),
            s = j()(c, 2),
            l = s[0],
            u = s[1],
            d = 'tablet' !== a && 'desktop' !== a
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(U.a, {
              buttonSize: 'medium',
              buttonState: t,
              customWidth: d ? 300 : ee,
              isCookieCompliant: n ? l : void 0,
              onPress: function () {
                u(!0)
              },
              style: [ne.ctaButton, ne.ssoButtonStyles, d && ne.containerThin],
            }),
            o.a.createElement(A.a, {
              buttonSize: 'medium',
              buttonState: t,
              style: [ne.ctaButton, ne.ssoButtonStyles, { marginBottom: 0 }, d && ne.containerThin],
            }),
          )
        },
        ne = p.a.create(function (e) {
          return {
            containerThin: { width: 300 },
            ctaButton: { maxWidth: ''.concat(V.a, 'px'), flex: 1 },
            ctaText: { marginBottom: e.spaces.space32 },
            ctaTitle: {
              fontSize: e.spaces.space40,
              lineHeight: e.spaces.space40,
              marginBottom: e.spaces.space32,
              letterSpacing: 'calc(-'.concat(e.spacesPx.space4, ' / 10)'),
            },
            ctaTitleMedium: {
              fontSize: e.spaces.space48,
              lineHeight: e.spaces.space48,
              marginBottom: e.spaces.space32,
              letterSpacing: 'calc(-'.concat(e.spacesPx.space4, ' / 10)'),
            },
            ctaTitleLarge: {
              fontSize: e.spaces.space64,
              lineHeight: e.spaces.space64,
              marginBottom: e.spaces.space48,
              letterSpacing: 'calc(-'.concat(e.spacesPx.space4, ' / 10)'),
            },
            footerContainer: { width: ee },
            gapContainer: { marginVertical: e.spaces.space4, maxWidth: ''.concat(V.a, 'px'), width: ee },
            headerMobile: { paddingHorizontal: e.spaces.space16 },
            headerTablet: { maxWidth: ee },
            headerDesktop: { maxWidth: 'calc('.concat(e.spaces.space48, ' * 10)') },
            splitContainer: { minHeight: 'auto', flexGrow: 1, flexDirection: 'column' },
            splitContainerWide: { flex: 'auto', flexDirection: 'row' },
            splitItem: {
              width: '50%',
              alignItems: 'center',
              justifyContent: 'flex-end',
              paddingBottom: '31vh',
              flexGrow: 1,
            },
            splitItemTablet: { justifyContent: 'center' },
            splitItemMobile: { width: '100%', marginTop: e.spaces.space56, paddingBottom: '0' },
            splitItemGray: { backgroundColor: e.colors.gray50, paddingTop: e.spaces.space24 },
            ssoButtonStyles: { marginBottom: e.spaces.space16, width: ee, height: e.spaces.space40, flex: 'none' },
            twitterIconSearchLeft: { alignSelf: 'flex-start', marginBottom: e.spaces.space48 },
          }
        }),
        ae = function (e) {
          var t = e.cookieComplianceFS,
            n = e.deviceSize,
            a = e.trendResults,
            r = o.a.useState(J.a.SignUp),
            i = j()(r, 2),
            s = i[0],
            d = i[1],
            p = Object(E.b)(),
            f = 'tablet' !== n && 'desktop' !== n,
            g = function () {
              p.scribe({ section: 'front', component: 'signup_callout', element: 'form', action: 'signup' })
            },
            b = function () {
              p.scribe({ section: 'front', component: 'signup_callout', element: 'form', action: 'login' })
            },
            y =
              (function () {
                switch (s) {
                  case J.a.SignUp:
                    return {
                      loginSignUpButtonLabel: Y,
                      loginSignUpButtonLink: {
                        pathname: '/i/flow/signup',
                        state: { input: { requested_variant: JSON.stringify({ signup_type: J.b }) } },
                      },
                      handleLoginSignUpButton: g,
                    }
                  case J.a.LogIn:
                    return { loginSignUpButtonLabel: Z, loginSignUpButtonLink: '/login', handleLoginSignUpButton: b }
                  default:
                    return
                }
              })() || {},
            v = y.handleLoginSignUpButton,
            k = y.loginSignUpButtonLabel,
            w = y.loginSignUpButtonLink,
            x = o.a.createElement(
              m.a,
              { style: [ne.footerContainer, f && ne.containerThin] },
              o.a.createElement(S.b, { color: 'gray700', size: 'subtext2', style: ne.ctaText }, J.c),
              o.a.createElement(
                S.b,
                { align: 'left', style: !n && ne.ctaText, testID: G.a.logInSignUpFooter, weight: 'medium' },
                (function () {
                  switch (s) {
                    case J.a.SignUp:
                      return (
                        (e = {
                          onPress: function () {
                            return d(J.a.LogIn)
                          },
                        }.onPress),
                        o.a.createElement(
                          l.a.I18NFormatMessage,
                          { $i18n: 'c83ef3f5' },
                          o.a.createElement(S.b, { color: 'link', onPress: e }, l.a.fb9dd9b0),
                        )
                      )
                    case J.a.LogIn:
                      return (function (e) {
                        var t = e.onPress
                        return o.a.createElement(
                          l.a.I18NFormatMessage,
                          { $i18n: 'i89d7b70' },
                          o.a.createElement(S.b, { color: 'link', onPress: t }, l.a.ie4dd8d6),
                        )
                      })({
                        onPress: function () {
                          return d(J.a.SignUp)
                        },
                      })
                    default:
                      return
                  }
                  var e
                })(),
              ),
            ),
            B = o.a.createElement(
              o.a.Fragment,
              null,
              o.a.createElement(te, { buttonState: s, cookieComplianceFS: t, deviceSize: n }),
              o.a.createElement(
                m.a,
                { style: [ne.gapContainer, f && ne.containerThin] },
                o.a.createElement(K.a, {
                  borderColor: 'nestedBorderColor',
                  label: o.a.createElement(S.b, { children: X }),
                }),
              ),
              o.a.createElement(
                q.a,
                {
                  backgroundColor: 'white',
                  borderColor: 'gray200',
                  color: 'alwaysBaseGray1100',
                  link: w,
                  onPress: v,
                  size: 'medium',
                  style: [ne.ctaButton, ne.ssoButtonStyles, f && ne.containerThin],
                  testID: G.a.signupButton,
                },
                k,
              ),
            ),
            C = o.a.createElement(
              c.CookieComplianceBannerPadder,
              null,
              o.a.createElement(
                m.a,
                { style: [T.searchHomeFooter, { marginBottom: '0' }] },
                o.a.createElement(h.a, { align: 'center' }),
              ),
            )
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(
              m.a,
              { style: [ne.splitContainer, 'desktop' === n && ne.splitContainerWide] },
              o.a.createElement(
                m.a,
                {
                  style: [
                    ne.splitItem,
                    'desktop' !== n && ne.splitItemMobile,
                    'tablet' === n && ne.splitItemTablet,
                    { zIndex: '1' },
                  ],
                },
                o.a.createElement(
                  m.a,
                  {
                    style: [
                      f && ne.headerMobile,
                      'tablet' === n && ne.headerTablet,
                      'desktop' === n && ne.headerDesktop,
                    ],
                  },
                  o.a.createElement(u.a, { style: [T.twitterIconSearch, ne.twitterIconSearchLeft] }),
                  o.a.createElement(
                    S.b,
                    {
                      extendedWidth: !0,
                      style: 'desktop' === n ? ne.ctaTitleLarge : 'tablet' === n ? ne.ctaTitleMedium : ne.ctaTitle,
                      weight: 'bold',
                    },
                    $,
                  ),
                ),
                o.a.createElement(I, { alignment: 'left', deviceSize: n, trendResults: a }),
              ),
              o.a.createElement(
                m.a,
                {
                  style: [
                    ne.splitItem,
                    ne.splitItemGray,
                    'desktop' !== n && ne.splitItemMobile,
                    'tablet' === n && ne.splitItemTablet,
                  ],
                },
                B,
                x,
              ),
            ),
            C,
          )
        },
        re = Object.freeze({ original: 'original', banner: 'banner', split: 'split' }),
        oe = void 0 !== a ? a : (a = n('x1T0')),
        ie = Object(F.b)(oe, { errorConfig: { context: 'LOGGED_OUT_SEARCH_SCREEN' } })
      t.b = function (e) {
        var t = e.cookieComplianceFS,
          n = e.deviceSize,
          a = e.variation
        return o.a.createElement(ie, {
          render: function (e) {
            var r,
              i = e.data,
              c = e.fetchStatus,
              s =
                (e.retry,
                c === D.a.LOADED
                  ? null == i || null === (r = i.logged_out_trends_list) || void 0 === r
                    ? void 0
                    : r.trends
                  : void 0)
            return a === re.original
              ? o.a.createElement(L, { deviceSize: n, trendResults: s })
              : a === re.banner
              ? o.a.createElement(R, { deviceSize: n, trendResults: s })
              : a === re.split
              ? o.a.createElement(ae, { cookieComplianceFS: t, deviceSize: n, trendResults: s })
              : null
          },
          variables: H.a,
        })
      }
    },
    '5P4+': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return i
      }),
        n.d(t, 'b', function () {
          return c
        }),
        n.d(t, 'c', function () {
          return s
        }),
        n.d(t, 'e', function () {
          return p
        }),
        n.d(t, 'd', function () {
          return m
        })
      n('3voH')
      var a = n('0+0m'),
        r = 'https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png',
        o = 'https://abs.twimg.com/sticky/illustrations/lohp_1302x955.png',
        i = 380,
        c = 2 * i,
        s = 1.15 * i,
        l = 500,
        u = 1e3,
        d = 350,
        p = function (e, t) {
          return {
            deviceSize: e > u ? 'desktop' : e > l ? 'tablet' : void 0,
            showLoginForm: e / 2 > 500 && t >= 750,
            ssoButtonsWidth: e < d ? a.f : a.b,
          }
        },
        m = function (e) {
          var t = null == e ? void 0 : e.startsWith('en')
          return {
            variants: [
              {
                uri: t
                  ? 'https://abs.twimg.com/sticky/illustrations/lohp_en_850x623.png'
                  : 'https://abs.twimg.com/sticky/illustrations/lohp_850x623.png',
                width: 850,
                height: 623,
              },
              { uri: t ? r : o, width: 1302, height: 955 },
            ],
            original: { url: t ? r : o, width: 1302, height: 958 },
          }
        }
    },
    AS3p: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return i
      }),
        n.d(t, 'c', function () {
          return c
        }),
        n.d(t, 'b', function () {
          return s
        }),
        n.d(t, 'd', function () {
          return l
        }),
        n.d(t, 'e', function () {
          return p
        })
      n('yH/f')
      var a = n('SrIh'),
        r = n('JbbX'),
        o = 1e3,
        i = Object.freeze({
          AcceptAllCookies: 'acceptAllCookies',
          RefuseNonEssentialCookies: 'refuseNonEssentialCookies',
          Invalid: 'invalid',
          NotSet: 'notSet',
        })
      function c(e) {
        var t = Object(r.a)(e)
        return t
          ? u(t)
            ? d(t)
              ? t[1]
                ? i.AcceptAllCookies
                : t[2]
                ? i.RefuseNonEssentialCookies
                : (Object(a.a)('Invalid consent signal state'), i.Invalid)
              : i.NotSet
            : i.Invalid
          : i.NotSet
      }
      function s(e) {
        Object(r.b)({ consent_version: 2, text_version: o, 1: !0 }, e)
      }
      function l(e) {
        Object(r.b)({ consent_version: 2, text_version: o, 2: !0 }, e)
      }
      function u(e) {
        return !(e[1] && e[2])
      }
      function d(e) {
        return e[1] || e[2]
      }
      function p(e) {
        var t = Object(r.a)(e)
        return !t || !u(t) || !d(t) || t.consent_version < 2 || t.text_version < o
      }
    },
    Chb3: function (e, t, n) {
      'use strict'
      var a = n('ddV6'),
        r = n.n(a),
        o = (n('jQ3i'), n('ERkP')),
        i = n.n(o),
        c = n('Hde2'),
        s = n('H1k/'),
        l = n('zCf4'),
        u = n('496R')
      function d(e) {
        return !['/i/flow/login'].includes(e)
      }
      function p() {
        var e = Object(l.g)(),
          t = i.a.useState(function () {
            return d(e.pathname)
          }),
          n = r()(t, 2),
          a = n[0],
          o = n[1]
        return (
          i.a.useEffect(
            function () {
              o(d(e.pathname))
            },
            [o, e],
          ),
          a
        )
      }
      t.a = Object(u.a)(function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { hideCookieBannerPicker: !1 },
          t = p()
        return !e.hideCookieBannerPicker && t ? i.a.createElement(c.a, null, i.a.createElement(s.a, null)) : null
      })
    },
    'H1k/': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return ne
      })
      var a = n('ERkP'),
        r = n.n(a),
        o = n('v6aA'),
        i = n('yiKp'),
        c = n.n(i),
        s = n('ddV6'),
        l = n.n(s),
        u = n('AS3p'),
        d = n('Irs7'),
        p = n('aITJ'),
        m = n('MWbm'),
        f = n('t62R'),
        g = n('cHvH'),
        h = n('rHpw'),
        b = n('/yvb'),
        y = n('3XMw'),
        v = n.n(y),
        E = v.a.d8817e36,
        k = v.a.b9288ee6,
        S = v.a.i1390ec2,
        w = { page: 'cookie_compliance_banner' }
      function x() {
        var e = r.a.createElement(
          v.a.I18NFormatMessage,
          { $i18n: 'ad048ab9' },
          r.a.createElement(
            f.b,
            {
              color: 'buttonWhite',
              link: 'https://help.twitter.com/rules-and-policies/twitter-cookies',
              withUnderline: !0,
            },
            v.a.id7ef73f,
          ),
        )
        return r.a.createElement(C, { body: e, title: S })
      }
      function B(e) {
        var t = r.a.createElement(
          v.a.I18NFormatMessage,
          { $i18n: 'bc8736af' },
          r.a.createElement(
            f.b,
            { accessibilityRole: 'button', color: 'buttonWhite', onClick: e.onExpand, withUnderline: !0 },
            v.a.gfb2ba0f,
          ),
        )
        return r.a.createElement(C, { body: t, title: S })
      }
      function C(e) {
        return r.a.createElement(
          m.a,
          { style: I.cookieComplianceMessageWrap },
          r.a.createElement(f.b, { color: 'buttonWhite', size: 'headline2', weight: 'medium' }, e.title),
          r.a.createElement(
            f.b,
            { color: 'buttonWhite', size: 'subtext2', style: I.cookieComplianceExpandedDetails },
            e.body,
          ),
        )
      }
      var _ = r.a.forwardRef(function (e, t) {
          var n = Object(d.b)()
          r.a.useEffect(
            function () {
              n.scribe(c()(c()({}, w), {}, { action: 'impression' }))
            },
            [n],
          )
          var a = (function () {
              var e = r.a.useState(!1),
                t = l()(e, 2),
                n = t[0],
                a = t[1],
                o = Object(d.b)()
              return {
                isExpanded: n,
                expand: function () {
                  o.scribe(c()(c()({}, w), {}, { action: 'click', element: 'expand_message' })), a(!0)
                },
              }
            })(),
            i = a.expand,
            s = a.isExpanded,
            f = (function () {
              var e = Object(d.b)(),
                t = r.a.useContext(o.a).featureSwitches,
                n = r.a.useState(function () {
                  return u.e(t) && !p.b.getTwitterAppVersion()
                }),
                a = l()(n, 2),
                i = a[0],
                s = a[1]
              return {
                isBannerOpen: i,
                acceptAllCookies: function () {
                  e.scribe(c()(c()({}, w), {}, { action: 'click', element: 'accept_all' })), u.b(t), s(!1)
                },
                refuseNonEssentialCookies: function () {
                  e.scribe(c()(c()({}, w), {}, { action: 'click', element: 'refuse_non_essential' })), u.d(t), s(!1)
                },
              }
            })(),
            y = f.acceptAllCookies,
            v = f.isBannerOpen,
            S = f.refuseNonEssentialCookies
          return v
            ? r.a.createElement(g.a, null, function (e) {
                var n = e.windowWidth < h.a.theme.breakpoints.xLarge
                return r.a.createElement(
                  m.a,
                  { ref: t, style: [I.root, n && I.rootNarrow] },
                  s ? r.a.createElement(x, null) : r.a.createElement(B, { onExpand: i }),
                  r.a.createElement(
                    m.a,
                    { style: [I.buttonContainer, n && I.buttonContainerNarrow] },
                    r.a.createElement(
                      b.a,
                      {
                        dominantColor: 'alwaysBaseGray1100',
                        onPress: y,
                        size: 'medium',
                        style: [I.ctaButton, n && I.ctaButtonNarrow],
                        type: h.a.isDarkMode() ? 'onMediaDominantColorFilled' : 'onMediaWhiteFilled',
                      },
                      E,
                    ),
                    r.a.createElement(
                      b.a,
                      {
                        dominantColor: 'alwaysBaseGray1100',
                        onPress: S,
                        size: 'medium',
                        style: [I.ctaButton, n && I.ctaButtonNarrow],
                        type: h.a.isDarkMode() ? 'onMediaDominantColorFilled' : 'onMediaWhiteFilled',
                      },
                      k,
                    ),
                  ),
                )
              })
            : null
        }),
        I = h.a.create(function (e) {
          return {
            root: {
              alignItems: 'center',
              boxShadow: e.boxShadows.xSmall,
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-evenly',
              paddingVertical: e.componentDimensions.gutterVertical,
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              backgroundColor: e.colors.buttonBlack,
            },
            rootNarrow: {
              flexDirection: 'column',
              paddingVertical: e.componentDimensions.gutterVertical,
              paddingTop: e.spaces.space20,
              backgroundColor: e.colors.buttonBlack,
            },
            buttonContainer: {
              flexDirection: 'column',
              marginVertical: e.spaces.space16,
              marginLeft: e.spaces.space20,
            },
            buttonContainerNarrow: {
              width: '100%',
              maxWidth: 550,
              marginLeft: 0,
              flexDirection: 'column',
              flexWrap: 'wrap',
            },
            ctaButton: {
              height: e.spaces.space40,
              marginBottom: e.spaces.space8,
              width: 420,
              flexGrow: 0,
              flexShrink: 0,
            },
            ctaButtonNarrow: { marginLeft: 0, width: '100%' },
            cookieComplianceMessageWrap: { flex: 1, maxWidth: 640 },
            cookieComplianceExpandedDetails: { marginTop: e.spaces.space8, marginBottom: e.spaces.space8 },
            background: { backgroundColor: e.colors.buttonBlack },
          }
        }),
        T = n('97Jx'),
        L = n.n(T),
        P = n('VrFO'),
        z = n.n(P),
        O = n('Y9Ll'),
        R = n.n(O),
        F = n('1Pcy'),
        W = n.n(F),
        H = n('5Yy7'),
        D = n.n(H),
        M = n('2VqO'),
        j = n.n(M),
        A = n('KEM+'),
        N = n.n(A),
        V = (n('hBvt'), n('RqPI')),
        U = n('rxPX'),
        G = Object(U.a)().propsFromState(function () {
          return { currentCountry: V.z }
        }),
        K = n('cnVF'),
        q = n('mrHL'),
        Q =
          (n('vrRf'),
          function (e, t, n) {
            return e.indexOf(t.toLowerCase()) > -1 && '1' !== n
          }),
        J = v.a.ia5e7487,
        X = (function (e) {
          D()(n, e)
          var t = j()(n)
          function n(e, a) {
            var o
            z()(this, n),
              (o = t.call(this, e, a)),
              N()(W()(o), 'state', { euWarningIsOpen: !1 }),
              N()(W()(o), '_renderMessage', function () {
                return r.a.createElement(
                  f.b,
                  { color: 'white', size: 'subtext2' },
                  r.a.createElement(
                    v.a.I18NFormatMessage,
                    { $i18n: 'i3c34582' },
                    r.a.createElement(
                      f.b,
                      {
                        color: 'white',
                        link: 'https://help.twitter.com/rules-and-policies/twitter-cookies',
                        style: Y.link,
                      },
                      v.a.fd0ff73b,
                    ),
                  ),
                )
              }),
              N()(W()(o), '_handleEUBannerClose', function () {
                !(function (e) {
                  Object(q.e)(K.k, '1', { featureSwitches: e })
                })(o.context.featureSwitches),
                  o.setState({ euWarningIsOpen: !1 })
              })
            var i = o.props.currentCountry,
              c = o.context.featureSwitches,
              s = c.getArrayValue('responsive_web_eu_countries', []),
              l = Object(q.d)({ featureSwitches: c, cookieName: K.k })
            return (o.state = { euWarningIsOpen: !!i && Q(s, i, l) }), o
          }
          return (
            R()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this
                  return this.state.euWarningIsOpen
                    ? r.a.createElement(g.a, null, function (t) {
                        var n = t.windowWidth < h.a.theme.breakpoints.medium
                        return r.a.createElement(
                          m.a,
                          { ref: e.props.innerRef, style: [Y.root, n && Y.rootNarrow] },
                          e._renderMessage(),
                          r.a.createElement(
                            b.a,
                            {
                              onPress: e._handleEUBannerClose,
                              size: 'medium',
                              style: [Y.closeButton, n && Y.closeButtonNarrow],
                              type: 'onMediaOutlined',
                            },
                            J,
                          ),
                        )
                      })
                    : null
                },
              },
            ]),
            n
          )
        })(r.a.Component)
      N()(X, 'contextType', o.a)
      var Y = h.a.create(function (e) {
          return {
            root: {
              alignItems: 'center',
              boxShadow: e.boxShadows.medium,
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-evenly',
              backgroundColor: e.colors.alwaysBaseGray1100,
              paddingHorizontal: e.spaces.space20,
              paddingVertical: e.spaces.space20,
            },
            rootNarrow: { flexDirection: 'column' },
            container: { alignItems: 'center', flexShrink: 1 },
            closeButton: { marginLeft: e.spaces.space12, marginTop: 0, flexGrow: 0, flexShrink: 0 },
            closeButtonNarrow: { marginLeft: 0, marginTop: e.spaces.space12, width: '100%' },
            link: { textDecorationLine: 'underline' },
          }
        }),
        Z = r.a.forwardRef(function (e, t) {
          return r.a.createElement(X, L()({}, e, { innerRef: t }))
        }),
        $ = G.forwardRef(Z),
        ee = n('+d3d')
      function te(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
          n = r.a.useMemo(
            function () {
              return Object(ee.a)(function (t) {
                if (e)
                  if (t) {
                    var n = t.getBoundingClientRect()
                    n && e(n)
                  } else e(null)
              }, t)
            },
            [e, t],
          )
        return r.a.useCallback(
          function (t) {
            if ('function' == typeof e) {
              var a,
                r = n.bind(null, t)
              return (
                r(),
                window.addEventListener('resize', r),
                t && (a = new ResizeObserver(r)).observe(t),
                function () {
                  window.removeEventListener('resize', r), a && a.disconnect(), n.cancel()
                }
              )
            }
          },
          [e, n],
        )
      }
      function ne(e) {
        var t,
          n = r.a.useContext(o.a).featureSwitches,
          a =
            ((t = e.onHeightChange),
            te(
              r.a.useMemo(
                function () {
                  return 'function' == typeof t
                    ? function (e) {
                        t(e ? e.height : null)
                      }
                    : void 0
                },
                [t],
              ),
            ))
        return n.isTrue('responsive_web_cookie_compliance_banner_enabled')
          ? r.a.createElement(_, { ref: a })
          : r.a.createElement($, { ref: a })
      }
    },
    JkIr: function (e, t, n) {
      'use strict'
      t.a = { signupButton: 'signupButton', loginButton: 'loginButton', logInSignUpFooter: 'logInSignUpFooter' }
    },
    UpKB: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        o = n('VrFO'),
        i = n.n(o),
        c = n('Y9Ll'),
        s = n.n(c),
        l = n('1Pcy'),
        u = n.n(l),
        d = n('5Yy7'),
        p = n.n(d),
        m = n('2VqO'),
        f = n.n(m),
        g = n('KEM+'),
        h = n.n(g),
        b = (n('2G9S'), n('ho0z'), n('0zG9'), n('ERkP')),
        y = n.n(b),
        v = n('/yvb'),
        E = n('hUVV'),
        k = n('3XMw'),
        S = n.n(k),
        w = n('iKTg'),
        x = n('TaB8'),
        B = n('1zbE'),
        C = n('Ukpf'),
        _ = n('cnVF'),
        I = n('TnY3'),
        T = n('0+0m'),
        L = n('v6aA'),
        P = n('2qJZ'),
        z = S.a.ib65b1c6,
        O = S.a.f55cebb7,
        R = S.a.g61ed8a4,
        F = { clientId: T.a, scope: 'name email', usePopup: !0 },
        W = (function (e) {
          p()(n, e)
          var t = f()(n)
          function n() {
            var e
            i()(this, n)
            for (var a = arguments.length, o = new Array(a), c = 0; c < a; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              h()(u()(e), 'state', { isScriptLoaded: !1 }),
              h()(
                u()(e),
                '_is3rdPartyIntegrationDisabled',
                Object(x.a)('responsive_web_3rd_party_category_sign_in_with_apple', e.context.featureSwitches),
              ),
              h()(u()(e), '_initAppleIDAuth', function () {
                var t = window.AppleID,
                  n = e.props.fetchSsoInitToken,
                  a = Object(P.c)(e.context.featureSwitches) ? 'https://'.concat(P.b) : 'https://'.concat(P.a)
                t &&
                  n(_.A.Apple).then(function (e) {
                    var n = e.state
                    t.auth.init(r()(r()({}, F), {}, { redirectURI: a, state: n }))
                  })
              }),
              h()(u()(e), '_handleOnPress', function () {
                var t = window.AppleID,
                  n = e.props,
                  a = n.analytics,
                  r = n.buttonState,
                  o = n.history,
                  i = n.personalizationSettings,
                  c = n.shouldPropagateP13nSettings,
                  s = n.ssoInitTokens,
                  l = i || {},
                  u = l.allowCookieUse,
                  d = l.allowDeviceAccess,
                  p = l.allowPartnerships,
                  m = l.allowPersonalization
                a.scribe({ component: 'apple_sign_in', element: r, action: 'click' }),
                  t.auth
                    .signIn()
                    .then(function (e) {
                      a.scribe({ component: 'apple_sign_in', element: r, action: 'success' })
                      var t = e.user && e.user.name && e.user.name.firstName && e.user.name.lastName
                      o.push({
                        pathname: '/i/flow/single_sign_on',
                        state: {
                          input: {
                            cookie_personalization_settings: c && {
                              allow_cookie_use: !!u,
                              allow_device_personalization: !!d,
                              allow_partnerships: !!p,
                              allow_ads_personalization: !!m,
                            },
                            requested_variant: JSON.stringify({
                              display_name: t && ''.concat(e.user.name.firstName, ' ').concat(e.user.name.lastName),
                              id_token: e.authorization.id_token,
                              provider: _.A.Apple,
                              state: s[_.A.Apple],
                            }),
                          },
                        },
                      })
                    })
                    .catch(function (t) {
                      var n = e.props.addToast
                      t.error !== T.g
                        ? (a.scribe({ component: 'apple_sign_in', element: r, action: 'failure' }), n({ text: R }))
                        : a.scribe({ component: 'apple_sign_in', element: 'auth', action: 'user_closed_popup' })
                    })
              }),
              e
            )
          }
          return (
            s()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this
                  this._is3rdPartyIntegrationDisabled ||
                    C.a.inject({
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
                    r = this.state.isScriptLoaded,
                    o = n === B.a.SignUp ? z : O
                  return this._is3rdPartyIntegrationDisabled
                    ? null
                    : y.a.createElement(v.a, {
                        backgroundColor: 'white',
                        borderColor: 'gray200',
                        children: o,
                        color: 'alwaysBaseGray1100',
                        disabled: !r,
                        icon: y.a.createElement(w.a, null),
                        onPress: this._handleOnPress,
                        size: t,
                        style: a,
                      })
                },
              },
            ]),
            n
          )
        })(y.a.PureComponent)
      h()(W, 'contextType', L.a),
        h()(W, 'defaultProps', { buttonSize: 'xLarge', buttonState: 'signup' }),
        (t.a = Object(I.a)(Object(E.a)(W)))
    },
    XiYe: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = a.useEffect,
        o = a.useRef
      e.exports = function () {
        var e = o(!0)
        return (
          r(function () {
            return (
              (e.current = !0),
              function () {
                e.current = !1
              }
            )
          }, []),
          e
        )
      }
    },
    bojF: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CookieComplianceBannerPadder', function () {
          return be
        }),
        n.d(t, 'LoggedOutHome', function () {
          return ye
        })
      var a = n('yiKp'),
        r = n.n(a),
        o = n('VrFO'),
        i = n.n(o),
        c = n('Y9Ll'),
        s = n.n(c),
        l = n('1Pcy'),
        u = n.n(l),
        d = n('5Yy7'),
        p = n.n(d),
        m = n('2VqO'),
        f = n.n(m),
        g = n('KEM+'),
        h = n.n(g),
        b = n('ddV6'),
        y = n.n(b),
        v = (n('0zG9'), n('z84I'), n('ERkP')),
        E = n.n(v),
        k = n('UpKB'),
        S = n('zI2C'),
        w = n('Hde2'),
        x = n('Chb3'),
        B = n('RqPI'),
        C = n('rxPX'),
        _ = Object(C.a)()
          .propsFromState(function () {
            return { userLanguage: B.p }
          })
          .withAnalytics({ page: 'front' }),
        I = n('H1k/'),
        T = n('SrtL'),
        L = n('FQwk'),
        P = n('kG2l'),
        z = n('muX9'),
        O = n('3XMw'),
        R = n.n(O),
        F = n('6oVL'),
        W = n('rJoH'),
        H = n('yoO3'),
        D = n('Es6L'),
        M = n('JkIr'),
        j = n('MWbm'),
        A = n('0yYu'),
        N = n('t62R'),
        V = n('/yvb'),
        U = n('cHvH'),
        G = n('TIdA'),
        K = n('A91F'),
        q = n('rHpw'),
        Q = n('pxuL'),
        J = n('5P4+'),
        X = n('AS3p'),
        Y = n('0+0m'),
        Z = n('VwDm'),
        $ = n('wz7L'),
        ee = n('dFWS'),
        te = n('lUZE'),
        ne = n('3rEN'),
        ae = n('1zbE'),
        re = n('XJCT'),
        oe = [
          { text: R.a.a62c9c33, Icon: Z.a },
          { text: R.a.cf39fca2, Icon: $.a },
          { text: R.a.j86184fd, Icon: ee.a },
        ],
        ie = R.a.d1091f50,
        ce = R.a.d9e109ae,
        se = R.a.eba1b197,
        le = R.a.a565833d,
        ue = R.a.aa95ddc0,
        de = R.a.fa811c30,
        pe = R.a.e919c3bc,
        me = R.a.e5b0e543,
        fe = R.a.h0ff39da,
        ge = R.a.j3f49ff6,
        he = R.a.ca86b62c
      function be(e) {
        var t = E.a.useState(0),
          n = y()(t, 2),
          a = n[0],
          r = n[1],
          o = E.a.useCallback(function (e) {
            r(e || 0)
          }, [])
        return E.a.createElement(
          E.a.Fragment,
          null,
          E.a.createElement(x.a.Configure, { hideCookieBannerPicker: !0 }),
          E.a.createElement(w.a, null, E.a.createElement(I.a, { onHeightChange: o })),
          E.a.createElement(j.a, { style: [{ marginBottom: a }, Ee.bannerPadderChildren] }, e.children),
        )
      }
      var ye = (function (e) {
        p()(n, e)
        var t = f()(n)
        function n(e, a) {
          var o
          return (
            i()(this, n),
            (o = t.call(this, e, a)),
            h()(
              u()(o),
              '_thirdPartySsoButtonsEnabled',
              o.context.featureSwitches.isTrue('responsive_web_third_party_sso_buttons_enabled'),
            ),
            h()(
              u()(o),
              '_isPlaceholderSIWGButtonEnabled',
              o.context.featureSwitches.isTrue('responsive_web_placeholder_siwg_button_enabled'),
            ),
            h()(
              u()(o),
              '_cookieComplianceGingersnapEnabled',
              o.context.featureSwitches.isTrue('responsive_web_cookie_compliance_gingersnap_enabled'),
            ),
            h()(
              u()(o),
              '_searchHomePageVariation',
              o.context.featureSwitches.getStringValue('responsive_web_search_home_page_design_variation'),
            ),
            h()(u()(o), '_renderLoginSignupButtons', function (e, t) {
              var n = e ? Ee.ctaButton : Ee.ctaButtonMobile
              return E.a.createElement(
                j.a,
                { style: !o._thirdPartySsoButtonsEnabled && 'tablet' === e && Ee.ctaButtonContainer },
                o._thirdPartySsoButtonsEnabled
                  ? E.a.createElement(
                      E.a.Fragment,
                      null,
                      o._renderSSOButtons(e, t),
                      E.a.createElement(
                        j.a,
                        { style: Ee.gapContainer },
                        E.a.createElement(A.a, { label: E.a.createElement(N.b, { children: he }) }),
                      ),
                      E.a.createElement(
                        V.a,
                        {
                          link: {
                            pathname: '/i/flow/signup',
                            state: { input: { requested_variant: JSON.stringify({ signup_type: ae.b }) } },
                          },
                          onPress: o._handleSignupButton,
                          size: 'medium',
                          style: [n, 'tablet' === e && Ee.ctaButtonSplitSpacing, Ee.ssoButtonStyles],
                          testID: M.a.signupButton,
                          type: 'brandFilled',
                        },
                        ue,
                      ),
                      E.a.createElement(N.b, { color: 'gray700', size: 'subtext3', style: [n, { width: Y.b }] }, ae.c),
                      E.a.createElement(
                        j.a,
                        { style: Ee.signInButtonContainer },
                        E.a.createElement(N.b, { size: 'headline2', style: n, weight: 'bold' }, de),
                        E.a.createElement(
                          V.a,
                          {
                            link: '/login',
                            onPress: o._handleLoginButton,
                            size: 'medium',
                            style: [n, 'tablet' === e && Ee.ctaButtonSplitSpacing, Ee.ssoButtonStyles],
                            testID: M.a.loginButton,
                            type: 'brandOutlined',
                          },
                          me,
                        ),
                      ),
                    )
                  : E.a.createElement(
                      E.a.Fragment,
                      null,
                      E.a.createElement(
                        V.a,
                        {
                          link: '/i/flow/signup',
                          onPress: o._handleSignupButton,
                          size: 'xLarge',
                          style: [n, 'tablet' === e && Ee.ctaButtonSplitSpacing],
                          testID: M.a.signupButton,
                          type: 'brandFilled',
                        },
                        le,
                      ),
                      E.a.createElement(
                        V.a,
                        {
                          link: '/login',
                          onPress: o._handleLoginButton,
                          size: 'xLarge',
                          style: n,
                          testID: M.a.loginButton,
                          type: 'brandOutlined',
                        },
                        pe,
                      ),
                    ),
              )
            }),
            h()(u()(o), '_renderSSOButtons', function (e, t) {
              var n = o.state,
                a = n.buttonState,
                i = n.isCookieCompliant,
                c = e ? Ee.ctaButton : Ee.ctaButtonMobile,
                s = r()(r()({}, Ee.ssoButtonStyles), {}, { width: t })
              return E.a.createElement(
                E.a.Fragment,
                null,
                E.a.createElement(P.a, {
                  buttonSize: 'medium',
                  buttonState: a,
                  customWidth: t,
                  displayType: Y.e.Button,
                  isCookieCompliant:
                    o._cookieComplianceGingersnapEnabled && o._isPlaceholderSIWGButtonEnabled ? i : void 0,
                  onPress: o._handleCookieCompliance,
                  style: [c, 'tablet' === e && Ee.ctaButtonSplitSpacing, s],
                }),
                E.a.createElement(k.a, {
                  buttonSize: 'medium',
                  buttonState: a,
                  style: [c, 'tablet' === e && Ee.ctaButtonSplitSpacing, Ee.ssoButtonStyles, Ee.appleSsoButton],
                }),
              )
            }),
            h()(u()(o), '_renderUsernameInputField', function () {
              return E.a.createElement(
                j.a,
                { style: ve.inputContainer },
                E.a.createElement(re.b, {
                  onChange: o._handleUsernameChange,
                  onSubmitEditing: o._handleSubmitEditing,
                  style: ve.input,
                }),
              )
            }),
            h()(u()(o), '_renderHalfForm', function () {
              var e = o.state.usernameValue
              return E.a.createElement(
                j.a,
                { style: [ve.container, ve.halfForm] },
                o._renderUsernameInputField(),
                E.a.createElement(
                  V.a,
                  {
                    link: { pathname: '/login', query: { username_or_email: e } },
                    onPress: o._handleHalfFormLoginClick,
                    size: 'xLarge',
                    style: ve.submitButtonStyle,
                    type: 'brandOutlined',
                  },
                  pe,
                ),
              )
            }),
            h()(u()(o), '_handleHalfFormLoginClick', function () {
              o.props.analytics.scribe({ component: 'half_form', element: 'login', action: 'click' })
            }),
            h()(u()(o), '_handleSubmitEditing', function () {
              o.setState({ autoSubmit: !0 })
            }),
            h()(u()(o), '_handleSignupButton', function () {
              o.props.analytics.scribe({
                section: 'front',
                component: 'signup_callout',
                element: 'form',
                action: 'signup',
              })
            }),
            h()(u()(o), '_handleLoginButton', function () {
              o.props.analytics.scribe({
                section: 'front',
                component: 'signup_callout',
                element: 'form',
                action: 'login',
              })
            }),
            h()(u()(o), '_handleUsernameChange', function (e) {
              o.setState({ usernameValue: e.target.value })
            }),
            h()(u()(o), '_handleCookieCompliance', function () {
              o.setState({ isCookieCompliant: !0 })
            }),
            (o.state = {
              autoSubmit: !1,
              buttonState: 'signup',
              isCookieCompliant: Object(X.c)(o.context.featureSwitches) === X.a.AcceptAllCookies,
            }),
            o
          )
        }
        return (
          s()(n, [
            {
              key: 'componentDidMount',
              value: function () {
                Object(D.a)() && this.context.setSideNavSupport(!1)
              },
            },
            {
              key: 'componentWillUnmount',
              value: function () {
                Object(D.a)() && this.context.setSideNavSupport(!0)
              },
            },
            {
              key: 'render',
              value: function () {
                var e = this,
                  t = !!ne.a[this._searchHomePageVariation]
                return E.a.createElement(
                  H.a,
                  null,
                  E.a.createElement(T.a, { title: fe }),
                  E.a.createElement(W.a, {
                    canonical: 'https://twitter.com/',
                    description: ge,
                    title: fe,
                    type: 'website',
                  }),
                  E.a.createElement(S.a, { deepLink: 'twitter://' }),
                  E.a.createElement(
                    z.a,
                    null,
                    E.a.createElement('meta', { content: 'NOODP', name: 'robots' }),
                    E.a.createElement('meta', { content: ge, name: 'description' }),
                  ),
                  E.a.createElement(U.a, null, function (n) {
                    var a = n.windowHeight,
                      r = n.windowWidth,
                      o = Object(J.e)(r, a),
                      i = o.deviceSize,
                      c = o.showLoginForm,
                      s = o.ssoButtonsWidth
                    return E.a.createElement(
                      j.a,
                      { style: Ee.root },
                      t
                        ? E.a.createElement(ne.b, {
                            cookieComplianceFS:
                              e._cookieComplianceGingersnapEnabled && e._isPlaceholderSIWGButtonEnabled,
                            deviceSize: i,
                            variation: ne.a[e._searchHomePageVariation],
                          })
                        : E.a.createElement(
                            E.a.Fragment,
                            null,
                            E.a.createElement(
                              j.a,
                              { style: [Ee.main, 'desktop' === i && Ee.mainWide] },
                              e._renderCTA({ deviceSize: i, showLoginForm: c, ssoButtonsWidth: s }),
                              e._renderHero(i),
                            ),
                            E.a.createElement(be, null, E.a.createElement(L.a, { align: 'center' })),
                          ),
                    )
                  }),
                )
              },
            },
            {
              key: '_renderHero',
              value: function (e) {
                var t = Object(J.d)(this.props.userLanguage),
                  n = t.original,
                  a = t.variants
                return E.a.createElement(
                  j.a,
                  { style: [Ee.block, Ee.communication, Ee.blockHero] },
                  E.a.createElement(
                    j.a,
                    { style: Ee.blockImg },
                    E.a.createElement(G.a, {
                      accessibilityLabel: '',
                      aspectMode: K.a.COVER,
                      backgroundColor: q.a.theme.colors.blue500,
                      customVariants: a,
                      draggable: !1,
                      image: n,
                    }),
                    E.a.createElement(te.a, { style: [Ee.twitterIconHero, 'desktop' === e && Ee.twitterIconHeroWide] }),
                  ),
                )
              },
            },
            {
              key: '_renderCommunicationItems',
              value: function () {
                var e = oe.length
                return E.a.createElement(
                  j.a,
                  { style: Ee.communicationItems },
                  oe.map(function (t, n) {
                    var a = t.Icon,
                      r = t.text,
                      o = n + 1 === e
                    return E.a.createElement(
                      j.a,
                      { key: r, style: [Ee.communicationItem, o && Ee.communicationItemLast] },
                      E.a.createElement(a, { style: Ee.communicationItemIcon }),
                      E.a.createElement(
                        N.b,
                        { color: 'white', size: 'headline1', style: Ee.communicationItemText, weight: 'bold' },
                        r,
                      ),
                    )
                  }),
                )
              },
            },
            {
              key: '_renderCTA',
              value: function (e) {
                var t = e.deviceSize,
                  n = e.showLoginForm,
                  a = e.ssoButtonsWidth
                return E.a.createElement(
                  j.a,
                  { style: [Ee.block, Ee.blockCTA, 'tablet' === t && Ee.blockTabletCTA] },
                  n ? this._renderLoginForm() : null,
                  E.a.createElement(
                    j.a,
                    { style: [Ee.blockInnerWrapper, 'desktop' === t && Ee.blockInnerWrapperWide] },
                    E.a.createElement(te.a, { style: Ee.twitterIcon }),
                    E.a.createElement(
                      N.b,
                      { extendedWidth: !0, style: t ? Ee.ctaTitleLarge : Ee.ctaTitle, weight: 'bold' },
                      se,
                    ),
                    E.a.createElement(
                      N.b,
                      {
                        extendedWidth: !0,
                        size: t ? 'title2' : 'title4',
                        style: t ? Ee.ctaTextLarge : Ee.ctaText,
                        weight: 'bold',
                      },
                      ce,
                    ),
                    this._renderLoginSignupButtons(t, a),
                  ),
                )
              },
            },
            {
              key: '_renderLoginForm',
              value: function () {
                var e = this.state,
                  t = e.autoSubmit,
                  n = e.usernameValue,
                  a = n ? '?account_identifier='.concat(n) : '',
                  r = this.context.featureSwitches.getValue('responsive_web_inline_login_box_enabled'),
                  o = 'full' === r
                return 'none' === r
                  ? null
                  : 'half' === r
                  ? this._renderHalfForm()
                  : o
                  ? E.a.createElement(
                      j.a,
                      { style: ve.container },
                      E.a.createElement(
                        F.a,
                        {
                          autoSubmit: t,
                          horizontalLayout: !0,
                          submitButtonSize: 'xLarge',
                          submitButtonStyle: ve.submitButtonStyle,
                          submitButtonType: 'brandOutlined',
                        },
                        this._renderUsernameInputField(),
                        E.a.createElement(
                          j.a,
                          { style: ve.inputContainer },
                          E.a.createElement(re.a, { onSubmitEditing: this._handleSubmitEditing, style: ve.input }),
                          E.a.createElement(
                            N.b,
                            {
                              link: {
                                pathname: 'https://twitter.com/account/begin_password_reset'.concat(a),
                                external: !0,
                                openInSameFrame: !0,
                              },
                              size: 'subtext2',
                              style: ve.forgotPassword,
                            },
                            ie,
                          ),
                        ),
                      ),
                    )
                  : void 0
              },
            },
          ]),
          n
        )
      })(E.a.Component)
      h()(ye, 'contextType', Q.a)
      var ve = q.a.create(function (e) {
          return {
            container: {
              alignItems: 'center',
              paddingHorizontal: e.spaces.space32,
              position: 'absolute',
              top: e.spaces.space16,
              left: '0px',
              maxWidth: '100%',
            },
            submitButtonStyle: { marginBottom: e.spaces.space4 },
            halfForm: { flexDirection: 'row', justifyContent: 'center' },
            inputContainer: { flexShrink: 1, width: '225px' },
            input: { paddingLeft: 0, paddingTop: 0, paddingBottom: 0 },
            forgotPassword: {
              height: 0,
              overflowY: 'visible',
              marginLeft: e.spaces.space12,
              marginTop: e.spaces.space4,
            },
          }
        }),
        Ee = q.a.create(function (e) {
          return {
            root: { flex: 1 },
            main: { minHeight: 'auto' },
            mainWide: { flex: 'auto', flexDirection: 'row-reverse' },
            block: { justifyContent: 'center', padding: e.spaces.space16 },
            blockHero: { flex: 1, padding: 0, minHeight: '45vh' },
            blockImg: r()(
              r()({}, q.a.absoluteFillObject),
              {},
              { flex: 1, resizeMode: 'cover', justifyContent: 'center', backgroundColor: e.colors.primary },
            ),
            blockCTA: { minWidth: '45vw' },
            blockTabletCTA: { maxWidth: '600px', margin: 'auto', width: '100%' },
            blockInnerWrapper: { width: '100%', padding: e.spaces.space20 },
            blockInnerWrapperWide: { minWidth: ''.concat(J.c, 'px'), maxWidth: ''.concat(J.b, 'px') },
            bottomButton: { flexGrow: 1, maxWidth: '180px' },
            bottomButtonLeft: { marginRight: '10px' },
            bottomButtonRight: { marginLeft: '10px' },
            bottomButtonsBlock: { flexDirection: 'row', paddingTop: e.spaces.space40, paddingBottom: e.spaces.space32 },
            communication: { backgroundColor: e.colors.blue300, overflow: 'hidden' },
            communicationItem: { flexDirection: 'row', marginBottom: '40px' },
            communicationItemIcon: { color: e.colors.white, flexShrink: 0, fontSize: e.fontSizes.title4 },
            communicationItemLast: { marginBottom: 0 },
            communicationItems: {
              alignSelf: 'center',
              maxWidth: ''.concat(J.a, 'px'),
              paddingVertical: e.spaces.space16,
            },
            communicationItemText: { lineHeight: '30px', marginLeft: e.spaces.space16 },
            seeWhatsHappening: { marginTop: e.spaces.space20 },
            happeningButton: { marginBottom: e.spaces.space16 },
            joinToday: { marginTop: e.spaces.space64, marginBottom: e.spaces.space16 },
            ctaTitle: {
              fontSize: e.spaces.space40,
              letterSpacing: -0.8,
              lineHeight: ''.concat(q.a.theme.spacesPx.space40 + q.a.theme.spacesPx.space12, 'px'),
              marginVertical: e.spaces.space40,
            },
            ctaTitleLarge: {
              fontSize: e.spaces.space64,
              letterSpacing: -1.2,
              lineHeight: ''.concat(q.a.theme.spacesPx.space64 + q.a.theme.spacesPx.space20, 'px'),
              marginVertical: e.spaces.space48,
            },
            ctaText: { marginBottom: e.spaces.space20 },
            ctaTextLarge: { marginBottom: e.spaces.space32 },
            ctaButtonContainer: { flexDirection: 'row' },
            ctaButton: { marginBottom: e.spaces.space20, maxWidth: ''.concat(J.a, 'px'), flex: 1 },
            ssoButtonStyles: { marginBottom: e.spaces.space8, width: Y.b, height: e.spaces.space40, flex: 'none' },
            appleSsoButton: { marginBottom: 0 },
            signInButtonContainer: { marginTop: q.a.theme.spaces.space40 },
            gapContainer: { marginVertical: e.spaces.space4, maxWidth: ''.concat(J.a, 'px'), width: Y.b },
            ctaButtonMobile: { marginBottom: e.spaces.space16 },
            ctaButtonSplitSpacing: { marginRight: e.spaces.space20 },
            twitterIcon: {
              alignSelf: 'flex-start',
              color: e.colors.brandColor,
              height: '3rem',
              paddingBottom: e.spaces.space12,
            },
            twitterIconBg: { color: e.colors.blue500, maxWidth: 'none', position: 'absolute' },
            twitterIconBgNarrow: { height: '60vh', top: '-10vh', right: '-10vh' },
            twitterIconBgWide: { height: '160vh', top: '-30vh', right: '-50vh' },
            twitterIconHero: {
              color: e.colors.whiteOnColor,
              justifyContent: 'center',
              height: 'fit-content',
              padding: e.spaces.space32,
            },
            twitterIconHeroWide: { height: '50%', maxHeight: ''.concat(J.a, 'px') },
            bannerPadderChildren: { transitionProperty: 'margin-bottom', transitionDuration: '100ms' },
          }
        }),
        ke = _(ye)
      t.default = ke
    },
    dFWS: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        o = n('ERkP'),
        i = n.n(o),
        c = n('Lsrn'),
        s = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [c.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z',
              }),
            ),
          )
        }
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
    iKTg: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        o = n('ERkP'),
        i = n.n(o),
        c = n('Lsrn'),
        s = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [c.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z',
              }),
            ),
          )
        }
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
    k5o5: function (e, t, n) {
      'use strict'
      var a = n('IGGJ')(n('K1iM')),
        r = n('EORa'),
        o = r.loadQuery,
        i = r.useTrackLoadQueryInRender,
        c = n('XiYe'),
        s = n('PJTX'),
        l = n('ERkP'),
        u = l.useCallback,
        d = l.useEffect,
        p = l.useRef,
        m = l.useState,
        f = n('e1/f').getRequest,
        g = { kind: 'NullQueryReference' }
      function h(e) {
        return 'PreloadableConcreteRequest' === e.kind
          ? void 0 !== e.params.metadata.live
          : void 0 !== f(e).params.metadata.live
      }
      e.exports = function (e, t) {
        var n = null != t ? t : g,
          r = s()
        i()
        var l = c(),
          f = p(new Set([n])),
          b = m(function () {
            return n
          }),
          y = b[0],
          v = b[1],
          E = m(function () {
            return n
          }),
          k = E[0],
          S = E[1]
        n !== k && (f.current.add(n), S(n), v(n))
        var w = u(
            function () {
              l.current && (f.current.add(g), v(g))
            },
            [l],
          ),
          x = u(
            function (t, n) {
              var a =
                null != n && n.hasOwnProperty('__environment')
                  ? {
                      fetchPolicy: n.fetchPolicy,
                      networkCacheConfig: n.networkCacheConfig,
                      __nameForWarning: n.__nameForWarning,
                    }
                  : n
              if (l.current) {
                var i,
                  c = o(null !== (i = null == n ? void 0 : n.__environment) && void 0 !== i ? i : r, e, t, a)
                f.current.add(c), v(c)
              }
            },
            [r, e, v, l],
          ),
          B = p(!1)
        return (
          d(function () {
            return function () {
              B.current = !0
            }
          }, []),
          d(
            function () {
              if (!0 === B.current)
                return (
                  (B.current = !1),
                  void (
                    'NullQueryReference' !== y.kind &&
                    x(y.variables, { fetchPolicy: y.fetchPolicy, networkCacheConfig: y.networkCacheConfig })
                  )
                )
              var t = f.current
              if (l.current) {
                var n,
                  r = (0, a.default)(t)
                try {
                  for (r.s(); !(n = r.n()).done; ) {
                    var o = n.value
                    if (o === y) break
                    t.delete(o),
                      'NullQueryReference' !== o.kind &&
                        (h(e) ? o.dispose && o.dispose() : o.releaseQuery && o.releaseQuery())
                  }
                } catch (i) {
                  r.e(i)
                } finally {
                  r.f()
                }
              }
            },
            [y, l, x, e],
          ),
          d(
            function () {
              return function () {
                var t,
                  n = (0, a.default)(f.current)
                try {
                  for (n.s(); !(t = n.n()).done; ) {
                    var r = t.value
                    'NullQueryReference' !== r.kind &&
                      (h(e) ? r.dispose && r.dispose() : r.releaseQuery && r.releaseQuery())
                  }
                } catch (o) {
                  n.e(o)
                } finally {
                  n.f()
                }
              }
            },
            [e],
          ),
          ['NullQueryReference' === y.kind ? null : y, x, w]
        )
      }
    },
    n0Rl: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return M
      })
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
        m = n('2VqO'),
        f = n.n(m),
        g = n('KEM+'),
        h = n.n(g),
        b = (n('2G9S'), n('lTEL'), n('7x/C'), n('87if'), n('ZUdG'), n('kYxP'), n('ERkP')),
        y = n.n(b),
        v = n('pXBW'),
        E = n('6/RC'),
        k = n('P74S'),
        S = n.n(k),
        w = n('kGix')
      n.d(t, 'a', function () {
        return w.a
      })
      var x = n('tI3i'),
        B = n.n(x),
        C = n('fs1G'),
        _ = n('0KEI'),
        I = n('VYI2'),
        T = n.n(I),
        L = n('35hZ'),
        P = n.n(L),
        z = n('k5o5'),
        O = n.n(z),
        R = n('PJTX'),
        F = n.n(R),
        W = function (e) {
          return (0, e.render)({ fetchStatus: w.a.LOADING, data: null, error: null, retry: C.a })
        },
        H = (function (e) {
          p()(n, e)
          var t = f()(n)
          function n() {
            var e
            i()(this, n)
            for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o]
            return (e = t.call.apply(t, [this].concat(r))), h()(u()(e), 'state', { error: null }), e
          }
          return (
            s()(
              n,
              [
                {
                  key: 'componentDidCatch',
                  value: function (e, t) {
                    if (!(e instanceof v.a)) throw e
                    this.props.errorHandler(e)
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    return this.props.children(this.state.error, this.props.retry)
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromError',
                  value: function (e) {
                    return { error: e }
                  },
                },
              ],
            ),
            n
          )
        })(y.a.Component),
        D = function (e) {
          var t = e.query,
            n = e.queryRef,
            a = e.render,
            r = P()(t, n)
          return a({ fetchStatus: w.a.LOADED, data: r, error: null, retry: C.a })
        },
        M = function (e, t) {
          if (E.canUseDOM)
            return function (n) {
              var a = n.fetchPolicy,
                o = void 0 === a ? 'store-or-network' : a,
                i = n.render,
                c = n.variables,
                s = O()(e),
                l = r()(s, 2),
                u = l[0],
                d = l[1],
                p = Object(_.useCreateLocalApiErrorHandler)(t.errorConfig.context),
                m = T()(c),
                f = r()(m, 1)[0],
                g = y.a.useCallback(
                  function () {
                    d(f, { fetchPolicy: 'network-only' })
                  },
                  [d, f],
                )
              return (
                y.a.useLayoutEffect(
                  function () {
                    d(f, { fetchPolicy: o })
                  },
                  [o, d, f],
                ),
                u
                  ? y.a.createElement(
                      y.a.Suspense,
                      { fallback: y.a.createElement(W, { render: i }) },
                      y.a.createElement(
                        H,
                        { errorHandler: p(t.errorConfig.options || {}), key: u.fetchKey, retry: g },
                        function (t, n) {
                          return t
                            ? i({ fetchStatus: w.a.FAILED, error: t, data: null, retry: n })
                            : y.a.createElement(D, { query: e, queryRef: u, render: i })
                        },
                      ),
                    )
                  : null
              )
            }
          var n = new WeakMap()
          return function (a) {
            a.fetchPolicy
            var o = a.render,
              i = a.variables,
              c = F()(),
              s = Object(_.useCreateLocalApiErrorHandler)(t.errorConfig.context),
              l = T()(i),
              u = r()(l, 1)[0],
              d = n.get(c)
            if (d) return d
            var p = y.a.lazy(function () {
              return S()(c, e, u)
                .toPromise()
                .then(
                  function (e) {
                    return (
                      B()(e, 'Fetch query returned empty data'),
                      o({ fetchStatus: w.a.LOADED, data: e, error: null, retry: C.a })
                    )
                  },
                  function (e) {
                    return e instanceof v.a
                      ? (s(t.errorConfig.options || {})(e),
                        o({ fetchStatus: w.a.FAILED, data: null, error: e, retry: C.a }))
                      : y.a.createElement(function () {
                          throw e
                        })
                  },
                )
                .then(function (e) {
                  return { default: n.set(c, e).get.bind(n, c) }
                })
            })
            return y.a.createElement(y.a.Suspense, null, y.a.createElement(p, null))
          }
        }
    },
    wz7L: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        o = n('ERkP'),
        i = n.n(o),
        c = n('Lsrn'),
        s = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [c.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M16.695 13.037c1.185 0 2.51-.132 3.368-1.11.72-.823.952-2.08.715-3.847-.333-2.478-1.86-3.956-4.083-3.956-2.225 0-3.75 1.48-4.084 3.956-.236 1.766-.002 3.023.717 3.846.858.98 2.184 1.11 3.368 1.11zM14.098 8.28c.134-.992.648-2.656 2.598-2.656 1.948 0 2.463 1.664 2.597 2.655.174 1.293.054 2.187-.358 2.657-.367.42-1.036.6-2.238.6s-1.87-.18-2.24-.6c-.412-.47-.533-1.364-.36-2.658zm9.788 11.222c-.763-3.066-3.72-5.208-7.19-5.208-1.765 0-3.392.558-4.67 1.505-1.278-.948-2.905-1.506-4.67-1.506-3.47 0-6.428 2.142-7.19 5.208-.156.625-.025 1.265.356 1.754.37.473.94.744 1.567.744h19.87c.628 0 1.2-.27 1.57-.745.382-.49.512-1.13.356-1.753zm-1.537.83c-.09.11-.22.168-.39.168h-7.413c.078-.32.084-.66 0-.998-.25-1-.75-1.888-1.41-2.65.993-.665 2.223-1.058 3.558-1.058 2.78 0 5.14 1.674 5.735 4.07.044.174.014.344-.08.467zM7.354 20.5H2.09c-.17 0-.3-.057-.388-.168-.096-.123-.126-.294-.083-.47.596-2.395 2.954-4.068 5.735-4.068 2.78 0 5.14 1.674 5.735 4.07.043.174.014.344-.082.467-.088.113-.22.17-.388.17H7.355zm.001-7.463c1.185 0 2.51-.132 3.367-1.11.72-.823.953-2.08.716-3.847-.333-2.478-1.86-3.956-4.083-3.956-2.225 0-3.75 1.48-4.084 3.956-.236 1.766-.002 3.023.717 3.846.858.98 2.184 1.11 3.368 1.11zM4.758 8.28c.134-.992.648-2.656 2.598-2.656 1.948 0 2.463 1.664 2.597 2.655.174 1.293.053 2.187-.358 2.658-.368.42-1.037.6-2.238.6-1.202 0-1.87-.18-2.24-.6-.412-.47-.533-1.365-.36-2.66z',
              }),
            ),
          )
        }
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
    x1T0: function (e, t, n) {
      'use strict'
      var a,
        r = {
          fragment: {
            argumentDefinitions: [],
            kind: 'Fragment',
            metadata: null,
            name: 'LoggedOutSearchHomeTrendsListQuery',
            selections: (a = [
              {
                alias: null,
                args: [{ kind: 'Literal', name: 's', value: 23 }],
                concreteType: 'LoggedOutTrendsList',
                kind: 'LinkedField',
                name: 'logged_out_trends_list',
                plural: !1,
                selections: [{ alias: null, args: null, kind: 'ScalarField', name: 'trends', storageKey: null }],
                storageKey: 'logged_out_trends_list(s:23)',
              },
            ]),
            type: 'Query',
            abstractKey: null,
          },
          kind: 'Request',
          operation: {
            argumentDefinitions: [],
            kind: 'Operation',
            name: 'LoggedOutSearchHomeTrendsListQuery',
            selections: a,
          },
          params: {
            id: 'jFSVxO6XekDkqa9LhEqxug',
            metadata: {},
            name: 'LoggedOutSearchHomeTrendsListQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(r.hash = 'd776a0f7400b83db0b925f0352d2b751'), (e.exports = r)
    },
  },
])
//# sourceMappingURL=WIPED
