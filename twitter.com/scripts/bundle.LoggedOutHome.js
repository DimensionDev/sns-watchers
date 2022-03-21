;(window.webpackJsonp = window.webpackJsonp || []).push([
  [63],
  {
    '21nk': function (e, t, a) {
      'use strict'
      var n = a('I9iR'),
        r = a('3KVO'),
        o = a('yLYC'),
        i = a('Ud88'),
        c = (a('/2Cm'), a('aQQo').useTrackLoadQueryInRender),
        s = (a('ERkP').useDebugValue, a('K1lQ').__internal),
        l = s.fetchQueryDeduped,
        u = s.fetchQuery
      e.exports = function (e, t, a) {
        c()
        var s,
          d = i(),
          h = t.fetchKey,
          p = t.fetchPolicy,
          m = t.source,
          f = t.variables,
          y = t.networkCacheConfig,
          g = o(e, f, y)
        if ('PreloadedQuery_DEPRECATED' === t.kind)
          g.request.node.params.name !== t.name && n(!1),
            (s = {
              componentDisplayName: 'usePreloadedQuery()',
              fetchKey: h,
              fetchObservable: l(d, g.request.identifier, function () {
                return d === t.environment && null != m
                  ? d.executeWithSource({ operation: g, source: m })
                  : d.execute({ operation: g })
              }),
              fetchPolicy: p,
              query: g,
              renderPolicy: null == a ? void 0 : a.UNSTABLE_renderPolicy,
            })
        else {
          var b = u(d, g)
          s = {
            componentDisplayName: 'usePreloadedQuery()',
            fetchObservable: null != m && d === t.environment ? m.ifEmpty(b) : (t.environment, b),
            fetchKey: h,
            fetchPolicy: p,
            query: g,
            renderPolicy: null == a ? void 0 : a.UNSTABLE_renderPolicy,
          }
        }
        return r(s)
      }
    },
    '23An': function (e, t, a) {
      'use strict'
      var n = a('ERkP'),
        r = n.useEffect,
        o = n.useRef
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
    '3rEN': function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return re
      })
      a('yH/f'), a('KqXw'), a('Ysgh')
      var n,
        r = a('ERkP'),
        o = a.n(r),
        i = a('Hde2'),
        c = a('bojF'),
        s = a('3XMw'),
        l = a.n(s),
        u = a('lUZE'),
        d = a('1f8Q'),
        h = a('rHpw'),
        p = a('MWbm'),
        m = a('yiKp'),
        f = a.n(m),
        y = (a('M+/F'), a('z84I'), a('uFXj'), a('2G9S'), a('FQwk')),
        g = a('iCMz'),
        b = a('Rp9C'),
        v = a('72nz'),
        S = a('Irs7'),
        _ = a('htQn'),
        E = a('t62R'),
        w = l.a.d228a9a0,
        k = l.a.jae84f3a,
        C = { section: 'logged_out_search', component: 'trend' },
        x = function (e) {
          var t = e.position,
            a = e.trend,
            n = Object(S.b)(),
            r = o.a.useMemo(
              function () {
                return [f()(f()({}, b.a.getTrendItem(a)), {}, { position: t })]
              },
              [a, t],
            )
          o.a.useEffect(
            function () {
              n.scribe(f()(f()({}, C), {}, { action: 'impression', data: { items: r } }))
            },
            [n, r],
          )
          var i = '/search?src=logged_out_home_trend_click&vertical=trends&q='.concat(encodeURIComponent(a))
          return o.a.createElement(
            _.a,
            {
              accessibilityRole: 'listitem',
              onClick: function () {
                return n.scribe(f()(f()({}, C), {}, { action: 'click', data: { items: r } }))
              },
              withInteractiveStyling: !1,
            },
            o.a.createElement(E.b, { color: 'gray700', key: a, link: i, size: 'body', style: T.searchTrend }, a),
          )
        },
        I = function (e) {
          var t = e.alignment,
            a = (e.deviceSize, e.trendResults.slice(0, 5))
          return o.a.createElement(
            p.a,
            {
              accessibilityLabel: k,
              accessibilityRole: 'list',
              style: [T.searchTrends, 'left' === t && T.searchTrendsLeft],
            },
            a.map(function (e, t) {
              return o.a.createElement(x, { key: e, position: t, trend: e })
            }),
            o.a.createElement(
              _.a,
              { accessibilityRole: 'listitem', withInteractiveStyling: !1 },
              o.a.createElement(E.b, { link: '/explore', style: T.searchTrend }, w),
            ),
          )
        },
        R = function (e) {
          var t = e.alignment,
            a = e.deviceSize,
            n = e.trendResults,
            r = 'tablet' !== a && 'desktop' !== a
          return o.a.createElement(
            p.a,
            {
              style: [
                T.searchBoxTrendsContainer,
                r && T.searchBoxTrendsContainerMobile,
                'tablet' === a && T.searchBoxTrendsContainerTablet,
                'desktop' === a && T.searchBoxTrendsContainerDesktop,
              ],
            },
            o.a.createElement(
              p.a,
              { style: T.searchBox },
              o.a.createElement(v.default, { forceVdlDisable: !1, isOnHomepage: !0, shouldHandleSearchShortcut: !0 }),
            ),
            n && o.a.createElement(I, { alignment: t, deviceSize: a, trendResults: n }),
          )
        },
        T = h.a.create(function (e) {
          return {
            bottomBarForMobile: {
              backgroundColor: e.colors.navigationBackground,
              borderTopColor: e.colors.borderColor,
              borderTopStyle: 'solid',
              borderTopWidth: e.borderWidths.small,
              padding: 'calc('.concat(e.spaces.space16, ' + ').concat(h.a.iPhoneOffsetBottom, ')'),
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
        B = function (e) {
          var t = e.deviceSize,
            a = e.trendResults,
            n = function () {
              return o.a.createElement(g.a, {
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
              ? o.a.createElement(i.a, { style: T.bottomBarForMobile }, n())
              : o.a.createElement(
                  p.a,
                  { style: T.searchNavBar },
                  o.a.createElement(p.a, { style: T.searchNavButtons }, n()),
                ),
            o.a.createElement(
              p.a,
              { style: [T.searchRoot, 'desktop' !== t && T.searchRootMobile] },
              o.a.createElement(u.a, { style: T.twitterIconSearch }),
              o.a.createElement(R, { deviceSize: t, trendResults: a }),
            ),
            o.a.createElement(
              c.CookieComplianceBannerPadder,
              null,
              o.a.createElement(
                p.a,
                { style: [T.searchHomeFooter, 'desktop' !== t && T.searchHomeFooterMobile] },
                o.a.createElement(y.a, { align: 'center' }),
              ),
            ),
          )
        },
        O = l.a.g0ff1ca8,
        L = l.a.g3aa4a89,
        D = h.a.create(function (e) {
          return {
            bottomBarBanner: {
              paddingBottom: h.a.iPhoneOffsetBottom,
              backgroundColor: e.colors.primary,
              boxShadow: e.boxShadows.medium,
            },
            searchRootWithBanner: { marginTop: '30vh', marginBottom: '0' },
          }
        }),
        P = function (e) {
          var t = e.deviceSize,
            a = e.trendResults
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(
              p.a,
              { style: [T.searchRoot, 'desktop' !== t && T.searchRootMobile, D.searchRootWithBanner] },
              o.a.createElement(u.a, { style: T.twitterIconSearch }),
              o.a.createElement(R, { deviceSize: t, trendResults: a }),
            ),
            o.a.createElement(
              c.CookieComplianceBannerPadder,
              null,
              o.a.createElement(
                i.a,
                { style: D.bottomBarBanner },
                o.a.createElement(d.a, { buttonSize: 'large', fullWidth: !0, subtext: L, text: O }),
              ),
            ),
          )
        },
        F = a('n0Rl'),
        A = a('RgK2'),
        z = a.n(A),
        H = a('kGix'),
        U = (a('enFi'), a('ddV6')),
        j = a.n(U),
        M = (a('0zG9'), a('UpKB')),
        N = a('v6aA'),
        V = a('5P4+'),
        W = a('kG2l'),
        q = a('JkIr'),
        K = a('0yYu'),
        Q = a('/yvb'),
        G = a('AS3p'),
        X = a('1zbE'),
        Y = l.a.ca86b62c,
        J = l.a.aa95ddc0,
        Z = l.a.b0dbe914,
        $ = l.a.ae03a21c,
        ee = 360,
        te = function (e) {
          var t = e.buttonState,
            a = e.cookieComplianceFS,
            n = e.deviceSize,
            r = o.a.useContext(N.a).featureSwitches,
            i = Object(G.c)(r) === G.a.AcceptAllCookies,
            c = o.a.useState(i),
            s = j()(c, 2),
            l = s[0],
            u = s[1],
            d = 'tablet' !== n && 'desktop' !== n
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(W.a, {
              buttonSize: 'medium',
              buttonState: t,
              customWidth: d ? 300 : ee,
              isCookieCompliant: a ? l : void 0,
              onPress: function () {
                u(!0)
              },
              style: [ae.ctaButton, ae.ssoButtonStyles, d && ae.containerThin],
            }),
            o.a.createElement(M.a, {
              buttonSize: 'medium',
              buttonState: t,
              style: [ae.ctaButton, ae.ssoButtonStyles, { marginBottom: 0 }, d && ae.containerThin],
            }),
          )
        },
        ae = h.a.create(function (e) {
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
        ne = function (e) {
          var t = e.cookieComplianceFS,
            a = e.deviceSize,
            n = e.trendResults,
            r = o.a.useState(X.a.SignUp),
            i = j()(r, 2),
            s = i[0],
            d = i[1],
            h = Object(S.b)(),
            m = 'tablet' !== a && 'desktop' !== a,
            f = function () {
              h.scribe({ section: 'front', component: 'signup_callout', element: 'form', action: 'signup' })
            },
            g = function () {
              h.scribe({ section: 'front', component: 'signup_callout', element: 'form', action: 'login' })
            },
            b =
              (function () {
                switch (s) {
                  case X.a.SignUp:
                    return {
                      loginSignUpButtonLabel: J,
                      loginSignUpButtonLink: {
                        pathname: '/i/flow/signup',
                        state: { input: { requested_variant: JSON.stringify({ signup_type: X.b }) } },
                      },
                      handleLoginSignUpButton: f,
                    }
                  case X.a.LogIn:
                    return { loginSignUpButtonLabel: Z, loginSignUpButtonLink: '/login', handleLoginSignUpButton: g }
                  default:
                    return
                }
              })() || {},
            v = b.handleLoginSignUpButton,
            _ = b.loginSignUpButtonLabel,
            w = b.loginSignUpButtonLink,
            k = o.a.createElement(
              p.a,
              { style: [ae.footerContainer, m && ae.containerThin] },
              o.a.createElement(E.b, { color: 'gray700', size: 'subtext2', style: ae.ctaText }, X.c),
              o.a.createElement(
                E.b,
                { align: 'left', style: !a && ae.ctaText, testID: q.a.logInSignUpFooter, weight: 'medium' },
                (function () {
                  switch (s) {
                    case X.a.SignUp:
                      return (
                        (e = {
                          onPress: function () {
                            return d(X.a.LogIn)
                          },
                        }.onPress),
                        o.a.createElement(
                          l.a.I18NFormatMessage,
                          { $i18n: 'c83ef3f5' },
                          o.a.createElement(E.b, { color: 'link', onPress: e }, l.a.fb9dd9b0),
                        )
                      )
                    case X.a.LogIn:
                      return (function (e) {
                        var t = e.onPress
                        return o.a.createElement(
                          l.a.I18NFormatMessage,
                          { $i18n: 'i89d7b70' },
                          o.a.createElement(E.b, { color: 'link', onPress: t }, l.a.ie4dd8d6),
                        )
                      })({
                        onPress: function () {
                          return d(X.a.SignUp)
                        },
                      })
                    default:
                      return
                  }
                  var e
                })(),
              ),
            ),
            C = o.a.createElement(
              o.a.Fragment,
              null,
              o.a.createElement(te, { buttonState: s, cookieComplianceFS: t, deviceSize: a }),
              o.a.createElement(
                p.a,
                { style: [ae.gapContainer, m && ae.containerThin] },
                o.a.createElement(K.a, {
                  borderColor: 'nestedBorderColor',
                  label: o.a.createElement(E.b, { children: Y }),
                }),
              ),
              o.a.createElement(
                Q.a,
                {
                  backgroundColor: 'white',
                  borderColor: 'gray200',
                  color: 'gray1100',
                  link: w,
                  onPress: v,
                  size: 'medium',
                  style: [ae.ctaButton, ae.ssoButtonStyles, m && ae.containerThin],
                  testID: q.a.signupButton,
                },
                _,
              ),
            ),
            x = o.a.createElement(
              c.CookieComplianceBannerPadder,
              null,
              o.a.createElement(
                p.a,
                { style: [T.searchHomeFooter, { marginBottom: '0' }] },
                o.a.createElement(y.a, { align: 'center' }),
              ),
            )
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(
              p.a,
              { style: [ae.splitContainer, 'desktop' === a && ae.splitContainerWide] },
              o.a.createElement(
                p.a,
                {
                  style: [
                    ae.splitItem,
                    'desktop' !== a && ae.splitItemMobile,
                    'tablet' === a && ae.splitItemTablet,
                    { zIndex: '1' },
                  ],
                },
                o.a.createElement(
                  p.a,
                  {
                    style: [
                      m && ae.headerMobile,
                      'tablet' === a && ae.headerTablet,
                      'desktop' === a && ae.headerDesktop,
                    ],
                  },
                  o.a.createElement(u.a, { style: [T.twitterIconSearch, ae.twitterIconSearchLeft] }),
                  o.a.createElement(
                    E.b,
                    {
                      extendedWidth: !0,
                      style: 'desktop' === a ? ae.ctaTitleLarge : 'tablet' === a ? ae.ctaTitleMedium : ae.ctaTitle,
                      weight: 'bold',
                    },
                    $,
                  ),
                ),
                o.a.createElement(R, { alignment: 'left', deviceSize: a, trendResults: n }),
              ),
              o.a.createElement(
                p.a,
                {
                  style: [
                    ae.splitItem,
                    ae.splitItemGray,
                    'desktop' !== a && ae.splitItemMobile,
                    'tablet' === a && ae.splitItemTablet,
                  ],
                },
                C,
                k,
              ),
            ),
            x,
          )
        },
        re = Object.freeze({ original: 'original', banner: 'banner', split: 'split' }),
        oe = void 0 !== n ? n : (n = a('x1T0')),
        ie = Object(F.b)(oe, { errorConfig: { context: 'LOGGED_OUT_SEARCH_SCREEN' } })
      t.b = function (e) {
        var t = e.cookieComplianceFS,
          a = e.deviceSize,
          n = e.variation
        return o.a.createElement(ie, {
          render: function (e) {
            var r,
              i = e.data,
              c = e.fetchStatus,
              s =
                (e.retry,
                c === H.a.LOADED
                  ? null == i || null === (r = i.logged_out_trends_list) || void 0 === r
                    ? void 0
                    : r.trends
                  : void 0)
            return n === re.original
              ? o.a.createElement(B, { deviceSize: a, trendResults: s })
              : n === re.banner
              ? o.a.createElement(P, { deviceSize: a, trendResults: s })
              : n === re.split
              ? o.a.createElement(ne, { cookieComplianceFS: t, deviceSize: a, trendResults: s })
              : null
          },
          variables: z.a,
        })
      }
    },
    '4ZbN': function (e, t, a) {
      'use strict'
      t.a = {
        deleteRecentSearchesDialog: 'deleteRecentSearchesDialog',
        deleteSavedSearchDialog: 'deleteSavedSearchDialog',
        typeaheadEmptySearch: 'typeaheadEmptySearch',
        typeaheadRecentSearchesHeader: 'typeaheadRecentSearchesHeader',
        typeaheadRecentSearchesItem: 'typeaheadRecentSearchesItem',
        typeaheadSavedSearchesContainer: 'typeaheadSavedSearchesContainer',
        typeaheadSavedSearchesHeader: 'typeaheadSavedSearchesHeader',
        typeaheadSavedSearchesItem: 'typeaheadSavedSearchesItem',
      }
    },
    '5P4+': function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return i
      }),
        a.d(t, 'b', function () {
          return c
        }),
        a.d(t, 'c', function () {
          return s
        }),
        a.d(t, 'e', function () {
          return h
        }),
        a.d(t, 'd', function () {
          return p
        })
      a('3voH')
      var n = a('0+0m'),
        r = 'https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png',
        o = 'https://abs.twimg.com/sticky/illustrations/lohp_1302x955.png',
        i = 380,
        c = 2 * i,
        s = 1.15 * i,
        l = 500,
        u = 1e3,
        d = 350,
        h = function (e, t) {
          return {
            deviceSize: e > u ? 'desktop' : e > l ? 'tablet' : void 0,
            showLoginForm: e / 2 > 500 && t >= 750,
            ssoButtonsWidth: e < d ? n.f : n.b,
          }
        },
        p = function (e) {
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
    '72nz': function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'SearchBoxContainer', function () {
          return ut
        })
      var n = a('yiKp'),
        r = a.n(n),
        o = a('97Jx'),
        i = a.n(o),
        c = a('VrFO'),
        s = a.n(c),
        l = a('Y9Ll'),
        u = a.n(l),
        d = a('1Pcy'),
        h = a.n(d),
        p = a('5Yy7'),
        m = a.n(p),
        f = a('2VqO'),
        y = a.n(f),
        g = a('KEM+'),
        b = a.n(g),
        v = a('RhWx'),
        S = a.n(v),
        _ =
          (a('tQbP'),
          a('2G9S'),
          a('z84I'),
          a('hBvt'),
          a('ho0z'),
          a('KqXw'),
          a('WNMA'),
          a('MvUL'),
          a('3uku'),
          a('jQ3i'),
          a('ERkP')),
        E = a.n(_),
        w = a('+Kfv'),
        k = a('lnti'),
        C = a('wtjx'),
        x = a('rxPX'),
        I = Object(x.a)()
          .propsFromActions(function () {
            return { addQuery: C.a }
          })
          .withAnalytics({ component: 'search_box' }),
        R = a('Hw0q'),
        T = a('3XMw'),
        B = a.n(T),
        O = a('8jkQ'),
        L = a('u3ZE'),
        D = a('rRIm'),
        P = a('Rp9C'),
        F =
          (a('LW0h'),
          a('7x/C'),
          a('vrRf'),
          a('5BYb'),
          a('+KXO'),
          a('x4t0'),
          a('M+/F'),
          a('wFPu'),
          a('vfdX'),
          a('hqKg')),
        A = a('3IPs'),
        z = a('M0jS'),
        H = a('G6rE'),
        U = a('k49u'),
        j = a('J4ZH'),
        M = a('0KEI'),
        N = a('v4XE'),
        V = a('kGix'),
        W = function (e) {
          return (
            Object(U.c)(e, U.a.GenericUserNotFound) ||
            Object(U.c)(e, U.a.OtherUserSuspended) ||
            Object(U.c)(e, U.a.AddressBookLookupNotFound)
          )
        },
        q = Object(x.a)()
          .propsFromState(function () {
            var e = Object(F.createSelector)(C.g, H.e.selectFetchStatuses, function (e, t) {
                var a = Object(k.a)(
                  e.map(function (e) {
                    var a,
                      n = null === (a = e.user) || void 0 === a ? void 0 : a.id
                    return n && t[n] ? { id: n, fetchStatus: t[n] } : void 0
                  }),
                )
                return Object(j.a)(a, function (e) {
                  return e.fetchStatus
                })
              }),
              t = Object(F.createSelector)(e, function (e) {
                return (e[V.a.FAILED] || []).map(function (e) {
                  return e.id
                })
              }),
              a = Object(F.createSelector)(e, H.e.selectErrors, function (e, t) {
                return (e[V.a.FAILED] || [])
                  .filter(function (e) {
                    var a = e.id
                    return W(t[a] || {})
                  })
                  .map(function (e) {
                    return e.id
                  })
              }),
              n = Object(F.createSelector)(e, H.e.selectErrors, function (e, t) {
                var a = (e[V.a.FAILED] || []).filter(function (e) {
                  var a = e.id
                  return !W(t[a] || {})
                })
                return (e[V.a.LOADING] || []).length > 0
                  ? V.a.LOADING
                  : (e[V.a.LOADED] || []).length > 0
                  ? V.a.LOADED
                  : a.length > 0
                  ? V.a.FAILED
                  : V.a.NONE
              }),
              o = Object(F.createSelector)(C.g, function (e) {
                return e.map(function (e) {
                  return r()(r()({}, e), {}, { category: A.b.RecentSearch })
                })
              }),
              i = Object(F.createSelector)(N.d, function (e) {
                return e.map(function (e) {
                  return { keyword: { query: e.query }, savedSearchId: e.id_str, category: A.b.SavedSearch }
                })
              })
            return {
              isRecentSearchDataLoaded: C.e,
              recentSearches: o,
              usersFetchStatus: n,
              invalidRecentSearchUserIds: a,
              failedRecentSearchUserIds: t,
              savedSearches: i,
            }
          })
          .adjustStateProps(function (e) {
            var t = e.failedRecentSearchUserIds,
              a = e.invalidRecentSearchUserIds,
              n = e.isRecentSearchDataLoaded,
              r = e.recentSearches,
              o = e.savedSearches,
              i = e.usersFetchStatus,
              c = !r.filter(function (e) {
                var t = e.user
                return t && a.indexOf(t.id) < 0
              }).length,
              s = i !== V.a.LOADING && n && c ? V.a.LOADED : i
            return {
              failedRecentSearchUserIds: t,
              invalidRecentSearchUserIds: a,
              recentSearches: r,
              fetchStatus: s,
              savedSearches: o,
            }
          })
          .propsFromActions(function () {
            return {
              clearAll: C.b,
              createLocalApiErrorHandler: Object(M.createLocalApiErrorHandlerWithContextFactory)('SEARCH_ONE_CLICK'),
              deleteSavedSearch: N.a,
              fetchRecentSearchesIfNeeded: C.c,
              fetchSavedSearchesIfNeeded: N.b,
              fetchUsersIfNeeded: H.e.fetchManyIfNeeded,
              fetchUsersPresenceIfNeeded: z.b.fetchManyIfNeeded,
              removeQuery: C.d,
            }
          })
          .withAnalytics({ element: 'typeahead' }),
        K = a('sYRn'),
        Q = a('v//M'),
        G = a('7nmT'),
        X = a.n(G),
        Y = (a('1t7P'), a('jQ/y'), a('m3Bd')),
        J = a.n(Y),
        Z = a('hOZg'),
        $ = a('5T6p'),
        ee = a('MWbm'),
        te = a('/yvb'),
        ae = a('rHpw'),
        ne = ['id', 'onRemove'],
        re = B.a.e68b09b4,
        oe = (function (e) {
          m()(a, e)
          var t = y()(a)
          function a() {
            return s()(this, a), t.apply(this, arguments)
          }
          return (
            u()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.id,
                    a = e.onRemove,
                    n = J()(e, ne)
                  return t
                    ? E.a.createElement(
                        ee.a,
                        { style: ie.root },
                        E.a.createElement($.a, n),
                        E.a.createElement(te.a, {
                          accessibilityLabel: re,
                          icon: E.a.createElement(Z.a, null),
                          onPress: a,
                          size: 'small',
                          style: ie.button,
                          type: 'brandText',
                        }),
                      )
                    : null
                },
              },
              {
                key: 'searchItemData',
                get: function () {
                  var e = this.props,
                    t = e.id,
                    a = e.image,
                    n = e.supportText,
                    r = e.title
                  return {
                    category: A.b.RecentSearch,
                    query: t,
                    recentSearchType: A.a.Event,
                    queryMetadata: { id: t, image: a, title: r, supportText: n },
                  }
                },
              },
            ]),
            a
          )
        })(E.a.PureComponent),
        ie = ae.a.create(function (e) {
          return { root: { flexDirection: 'row', justifyContent: 'space-between' }, button: { alignSelf: 'center' } }
        }),
        ce = oe,
        se = a('j7Bv'),
        le = a('5mJL'),
        ue = a('t62R'),
        de = a('EHV7'),
        he = E.a.createElement(Z.a, null),
        pe = B.a.e68b09b4,
        me = (function (e) {
          m()(a, e)
          var t = y()(a)
          function a() {
            return s()(this, a), t.apply(this, arguments)
          }
          return (
            u()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.description,
                    a = e.id,
                    n = e.name,
                    r = e.onRemove,
                    o = e.withNewTypeaheadUI
                  if (!a) return null
                  var i = o ? 'xxxLarge' : 'xLarge',
                    c = E.a.createElement(se.a, { Icon: de.a, color: 'primary', size: i, style: fe.searchIcon })
                  return E.a.createElement(
                    le.a,
                    { avatarCell: c, avatarSize: i, cellStyle: fe.bodyColumn },
                    E.a.createElement(
                      ee.a,
                      null,
                      E.a.createElement(ue.b, { numberOfLines: 1, weight: 'bold', withHashflags: !0 }, n),
                      E.a.createElement(ue.b, { color: 'gray700', numberOfLines: 1, withHashflags: !0 }, t),
                    ),
                    E.a.createElement(te.a, {
                      accessibilityLabel: pe,
                      icon: he,
                      onPress: r,
                      size: 'small',
                      type: 'brandText',
                    }),
                  )
                },
              },
              {
                key: 'searchItemData',
                get: function () {
                  var e = this.props,
                    t = e.description,
                    a = e.id,
                    n = e.name
                  return a
                    ? {
                        category: A.b.RecentSearch,
                        query: a,
                        recentSearchType: A.a.Topic,
                        queryMetadata: { id: a, name: n, description: t },
                      }
                    : null
                },
              },
            ]),
            a
          )
        })(E.a.Component),
        fe = ae.a.create(function (e) {
          return {
            bodyColumn: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
            searchIcon: { marginRight: e.spaces.space12 },
          }
        }),
        ye = function (e, t) {
          return H.e.select(e, t.id)
        },
        ge = function (e, t) {
          return Object(z.c)(e, t.id)
        },
        be = Object(x.a)().propsFromState(function () {
          return { user: ye, userSpace: ge }
        }),
        ve = a('v6aA'),
        Se = a('IMA+'),
        _e = E.a.createElement(Z.a, null),
        Ee = B.a.e68b09b4,
        we = B.a.fd06b02f,
        ke = (function (e) {
          m()(a, e)
          var t = y()(a)
          function a() {
            var e
            s()(this, a)
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              b()(h()(e), '_handleAvatarClick', function () {
                e.props.userSpace || e._handleClick()
              }),
              b()(h()(e), '_handleClick', function () {
                var t = e.props,
                  a = t.index,
                  n = t.onItemClick,
                  r = e.searchItemData
                r && n(r, a)
              }),
              e
            )
          }
          return (
            u()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.onRemove,
                    a = e.style,
                    n = e.user,
                    r = e.userSpace,
                    o = e.withNewTypeaheadUI,
                    i = this.context.featureSwitches
                  if (!n) return null
                  var c = r && i.isTrue('voice_rooms_recent_search_audiospace_ring_enabled') ? r : void 0
                  c && (c.accessibilityLabel = we({ screenName: n.screen_name }))
                  var s = E.a.createElement(te.a, {
                    accessibilityLabel: Ee,
                    icon: _e,
                    onPress: t,
                    size: 'small',
                    type: 'brandText',
                  })
                  return E.a.createElement(Se.a, {
                    avatarSize: 'xLarge',
                    avatarUri: n.profile_image_url_https,
                    decoration: s,
                    displayMode: o ? 'ExperimentalUserTypeahead' : 'UserCompact',
                    isProtected: n.protected,
                    isVerified: n.verified,
                    name: n.name,
                    onAvatarClick: this._handleAvatarClick,
                    onCellClick: this._handleClick,
                    onScreenNameClick: this._handleClick,
                    presenceIndicator: c,
                    screenName: n.screen_name,
                    style: a,
                    userId: n.id_str,
                    withInteractiveStyling: !1,
                    withLink: !1,
                    withUsernameCenterAligned: !0,
                  })
                },
              },
              {
                key: 'searchItemData',
                get: function () {
                  return this.props.user
                    ? {
                        category: A.b.RecentSearch,
                        link: this.props.user.screen_name,
                        query: this.props.id,
                        recentSearchType: A.a.User,
                      }
                    : null
                },
              },
            ]),
            a
          )
        })(E.a.Component)
      b()(ke, 'contextType', ve.a)
      var Ce = be.forwardRef(ke),
        xe = a('oQhu'),
        Ie = a('hiGS'),
        Re = a('Gfoi'),
        Te = E.a.createElement(Z.a, null),
        Be = E.a.createElement(Ie.a, null),
        Oe = Object(xe.a)(function (e) {
          return e === A.b.SavedSearch ? 'destructiveText' : 'brandText'
        }),
        Le = Object(xe.a)(function (e) {
          return e === A.b.SavedSearch ? Be : Te
        }),
        De = (function (e) {
          m()(a, e)
          var t = y()(a)
          function a() {
            var e
            s()(this, a)
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              b()(h()(e), '_getButtonType', function () {
                var t = e.props.category
                return Oe(t)
              }),
              b()(h()(e), '_getRemoveIcon', function () {
                var t = e.props.category
                return Le(t)
              }),
              e
            )
          }
          return (
            u()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.onRemove,
                    a = e.query,
                    n = e.withNewTypeaheadUI ? 'xxxLarge' : 'xLarge',
                    r = E.a.createElement(se.a, { Icon: Re.a, color: 'neutral', size: n, style: Pe.searchIcon })
                  return E.a.createElement(
                    le.a,
                    { avatarCell: r, avatarSize: n, cellStyle: Pe.bodyColumn },
                    E.a.createElement(ue.b, { numberOfLines: 1, withHashflags: !0 }, a),
                    E.a.createElement(te.a, {
                      accessibilityLabel: '',
                      icon: this._getRemoveIcon(),
                      onPress: t,
                      size: 'small',
                      type: this._getButtonType(),
                    }),
                  )
                },
              },
              {
                key: 'searchItemData',
                get: function () {
                  var e = this.props,
                    t = e.category
                  return {
                    category: t,
                    query: e.query,
                    recentSearchType: t === A.b.RecentSearch ? A.a.Keyword : void 0,
                  }
                },
              },
            ]),
            a
          )
        })(E.a.Component),
        Pe = ae.a.create(function (e) {
          return {
            bodyColumn: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
            searchIcon: { marginRight: e.spaces.space12, borderWidth: 0, backgroundColor: 'none' },
          }
        }),
        Fe = De,
        Ae = a('htQn'),
        ze = { viewType: 'search_item' },
        He = (function (e) {
          m()(a, e)
          var t = y()(a)
          function a(e, n) {
            var r
            return (
              s()(this, a),
              (r = t.call(this, e, n)),
              b()(h()(r), '_renderSearchItem', function () {
                var e = r.props,
                  t = e.index,
                  a = e.item,
                  n = e.onItemClick
                return a.keyword
                  ? E.a.createElement(Fe, {
                      category: a.category,
                      onRemove: r._handleOnRemove,
                      query: a.keyword.query,
                      ref: r._handleItemRef,
                      withNewTypeaheadUI: r._withNewTypeaheadUI,
                    })
                  : a.user
                  ? E.a.createElement(Ce, {
                      id: a.user.id || '',
                      index: t,
                      onItemClick: n,
                      onRemove: r._handleOnRemove,
                      ref: r._handleItemRef,
                      style: Ue.itemPadding,
                      withNewTypeaheadUI: r._withNewTypeaheadUI,
                    })
                  : a.topic
                  ? E.a.createElement(me, {
                      description: a.topic.description || '',
                      id: a.topic.id,
                      name: a.topic.name || '',
                      onRemove: r._handleOnRemove,
                      ref: r._handleItemRef,
                      withNewTypeaheadUI: r._withNewTypeaheadUI,
                    })
                  : a.event
                  ? E.a.createElement(ce, {
                      id: a.event.id,
                      image: a.event.image || { url: '', height: 0, width: 0 },
                      onRemove: r._handleOnRemove,
                      ref: r._handleItemRef,
                      supportText: a.event.supportText || '',
                      title: a.event.title || '',
                      withNewTypeaheadUI: r._withNewTypeaheadUI,
                    })
                  : null
              }),
              b()(h()(r), '_handleItemRef', function (e) {
                r._itemRef = e
              }),
              b()(h()(r), '_handleOnRemove', function (e) {
                var t = r.props,
                  a = t.index,
                  n = t.item
                ;(0, t.onRemoveQuery)(n, a), e.stopPropagation()
              }),
              b()(h()(r), '_handleOnClick', function () {
                var e = r.props,
                  t = e.index,
                  a = e.item,
                  n = e.onItemClick
                a.user || (r.searchItemData && n(r.searchItemData, t))
              }),
              (r._withNewTypeaheadUI = r.context.featureSwitches.isTrue(
                'responsive_web_account_search_readability_enabled',
              )),
              r
            )
          }
          return (
            u()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.domId,
                    a = e.item,
                    n = e.testID
                  return E.a.createElement(
                    w.a,
                    { behavioralEventContext: ze },
                    E.a.createElement(
                      Ae.a,
                      {
                        accessibilityRole: 'option',
                        accessibilityState: { selected: !!t },
                        focusable: !0,
                        nativeID: t,
                        onClick: this._handleOnClick,
                        style: [Ue.root, t && Ue.focused, !(null != a && a.user) && Ue.itemPadding],
                        testID: n,
                      },
                      this._renderSearchItem(),
                    ),
                  )
                },
              },
              {
                key: 'searchItemData',
                get: function () {
                  return this._itemRef ? this._itemRef.searchItemData : null
                },
              },
            ]),
            a
          )
        })(E.a.Component)
      b()(He, 'contextType', ve.a)
      var Ue = ae.a.create(function (e) {
          return {
            root: { cursor: 'pointer' },
            itemPadding: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            focused: { backgroundColor: e.colors.gray0 },
          }
        }),
        je = He,
        Me = a('4ZbN'),
        Ne = a('eb3s'),
        Ve = a('MXDK'),
        We = B.a.ee295fbe,
        qe = { headline: B.a.f45c425f, text: B.a.caae4dd9, confirmButtonLabel: B.a.dbd5d40f },
        Ke = B.a.a8d68f61,
        Qe = B.a.c6530778,
        Ge = B.a.e047b8fa,
        Xe = ['user', 'keyword'],
        Ye = (function (e) {
          m()(a, e)
          var t = y()(a)
          function a(e, n) {
            var o
            s()(this, a),
              (o = t.call(this, e, n)),
              b()(h()(o), '_withNewTypeaheadUI', !1),
              b()(h()(o), '_getRecentSearchItems', function () {
                var e = o.props,
                  t = e.failedRecentSearchUserIds,
                  a = e.recentSearches,
                  n = o.state.allowedRecentSearchItems,
                  r = a
                    .filter(function (e) {
                      var a = e.user
                      return !a || t.indexOf(a.id) < 0
                    })
                    .filter(function (e) {
                      return Object.keys(e).some(function (e) {
                        return n.includes(e)
                      })
                    })
                return r.length > 15 ? r.slice(0, 15) : r
              }),
              b()(h()(o), '_render', function () {
                var e = o.props,
                  t = e.domId,
                  a = e.savedSearches,
                  n = 0 === o._getNumOfSearchItems(),
                  r = o._getRecentSearchItems()
                return n
                  ? E.a.createElement(
                      ee.a,
                      { style: Je.emptyState, testID: Me.a.typeaheadEmptySearch },
                      E.a.createElement(ue.b, { align: 'center', color: 'gray700' }, We),
                    )
                  : E.a.createElement(
                      ee.a,
                      { accessibilityRole: 'listbox', nativeID: t },
                      r.length > 0
                        ? E.a.createElement(
                            E.a.Fragment,
                            null,
                            E.a.createElement(
                              ee.a,
                              { style: Je.header, testID: Me.a.typeaheadRecentSearchesHeader },
                              E.a.createElement(ue.b, { numberOfLines: 1, size: 'headline1', weight: 'bold' }, Ke),
                              E.a.createElement(
                                te.a,
                                { onPress: o._handleClearAllClick, size: 'xSmall', type: 'brandText' },
                                Ge,
                              ),
                            ),
                            r.map(function (e, t) {
                              return o._renderRecentSearchItem(e, t)
                            }),
                          )
                        : null,
                      a.length > 0
                        ? E.a.createElement(
                            E.a.Fragment,
                            null,
                            E.a.createElement(
                              ee.a,
                              {
                                accessibilityHidden: !0,
                                style: [Je.header, Je.borderTop],
                                testID: Me.a.typeaheadSavedSearchesHeader,
                              },
                              E.a.createElement(ue.b, { numberOfLines: 1, size: 'headline1', weight: 'bold' }, Qe),
                            ),
                            o._renderSavedSearches(),
                          )
                        : null,
                    )
              }),
              b()(h()(o), '_renderRecentSearchItem', function (e, t) {
                var a = o.props.ariaDescendantId,
                  n = o.state.focusIndex === t
                return E.a.createElement(je, {
                  domId: n ? a : void 0,
                  index: t,
                  item: e,
                  key: o._chooseKeyType(e, t),
                  onItemClick: o._handleOnItemClick,
                  onRemoveQuery: o._handleRemoveQuery,
                  ref: n ? o._setFocusedItemRef : void 0,
                  testID: Me.a.typeaheadRecentSearchesItem,
                })
              }),
              b()(h()(o), '_chooseKeyType', function (e, t) {
                return e.keyword
                  ? 'keyword_'.concat(e.keyword.query)
                  : e.user
                  ? 'user_'.concat(e.user.id)
                  : e.topic
                  ? 'topic_'.concat(e.topic.id)
                  : e.event
                  ? 'event_'.concat(e.event.id)
                  : ''.concat(t)
              }),
              b()(h()(o), '_renderSavedSearches', function () {
                var e = o.props,
                  t = e.ariaDescendantId,
                  a = e.savedSearches,
                  n = o.state.focusIndex,
                  r = o._getRecentSearchItems(),
                  i = S()(a)
                return (
                  i.reverse(),
                  E.a.createElement(
                    ee.a,
                    { testID: Me.a.typeaheadSavedSearchesContainer },
                    i.map(function (e, a) {
                      var i = n === a + r.length
                      return E.a.createElement(je, {
                        domId: i ? t : void 0,
                        index: a,
                        item: e,
                        key: e.savedSearchId,
                        onItemClick: o._handleOnItemClick,
                        onRemoveQuery: o._handleRemoveQuery,
                        ref: i ? o._setFocusedItemRef : void 0,
                        testID: Me.a.typeaheadSavedSearchesItem,
                      })
                    }),
                  )
                )
              }),
              b()(h()(o), '_getNumOfSearchItems', function () {
                var e = o.props.savedSearches,
                  t = o._getRecentSearchItems()
                return e.length + t.length
              }),
              b()(h()(o), '_handleUsersRetry', function () {
                o._fetchUsersDetailsIfNeeded()
              }),
              b()(h()(o), '_fetchUsersDetailsIfNeeded', function () {
                var e = o.props,
                  t = e.createLocalApiErrorHandler,
                  a = e.fetchUsersIfNeeded,
                  n = e.fetchUsersPresenceIfNeeded,
                  r = e.invalidRecentSearchUserIds,
                  i = e.recentSearches,
                  c = o.context,
                  s = c.featureSwitches,
                  l = c.loggedInUserId,
                  u = (function (e, t) {
                    return e
                      .map(function (e) {
                        var t
                        return null == e || null === (t = e.user) || void 0 === t ? void 0 : t.id
                      })
                      .filter(Boolean)
                      .filter(function (e) {
                        return t.indexOf(e) < 0
                      })
                  })(i, r)
                a(u).catch(t({})),
                  l && s.isTrue('voice_rooms_recent_search_audiospace_ring_enabled') && n(u).catch(t({}))
              }),
              b()(h()(o), '_handleRemoveQuery', function (e, t) {
                var a = o.props,
                  n = a.analytics,
                  r = a.removeQuery
                switch (e.category) {
                  case A.b.RecentSearch:
                    var i = { keyword: e.keyword, user: e.user, topic: e.topic, event: e.event }
                    r(i), o._resetFocus()
                    var c = P.a.forRecentSearchResult(i, t),
                      s = o._handleRemoveAction(e)
                    c && n.scribe({ action: s, data: { items: [c] } })
                    break
                  case A.b.SavedSearch:
                    o.setState({ shouldShowDeleteSavedSearchConfirmation: !0, savedSearchIdToDelete: e.savedSearchId })
                    break
                  default:
                    return
                }
              }),
              b()(h()(o), '_handleRemoveAction', function (e) {
                return e.user
                  ? 'clear_user'
                  : e.topic
                  ? 'clear_topic_interests'
                  : e.event
                  ? 'clear_event'
                  : 'clear_topic'
              }),
              b()(h()(o), '_handleClearAllClick', function () {
                o.setState({ shouldShowClearAllConfirmationSheet: !0 })
              }),
              b()(h()(o), '_handleOnClearAllConfirm', function () {
                var e = o.props,
                  t = e.analytics
                ;(0, e.clearAll)(), t.scribeAction('clear_all'), o.setState({ shouldShowClearAllConfirmationSheet: !1 })
              }),
              b()(h()(o), '_handleOnClearAllCancel', function () {
                o.setState({ shouldShowClearAllConfirmationSheet: !1 })
              }),
              b()(h()(o), '_handleOnDeleteSavedSearchConfirm', function () {
                var e = o.props,
                  t = e.analytics,
                  a = e.deleteSavedSearch,
                  n = e.savedSearches,
                  r = o.state.savedSearchIdToDelete,
                  i = n.findIndex(function (e) {
                    return e.savedSearchId === r
                  }),
                  c = n[i]
                if (r) {
                  a(r)
                  var s = c && P.a.forSavedSearchResult(c.keyword.query, i)
                  s && t.scribe({ element: 'saved_search', action: 'delete', data: { items: [s] } })
                }
                o.setState({ shouldShowDeleteSavedSearchConfirmation: !1, savedSearchIdToDelete: void 0 })
              }),
              b()(h()(o), '_handleOnDeleteSavedSearchCancel', function () {
                o.setState({ shouldShowDeleteSavedSearchConfirmation: !1, savedSearchIdToDelete: void 0 })
              }),
              b()(h()(o), '_handleOnItemClick', function (e, t) {
                var a = o.props,
                  n = a.onDismiss
                ;(0, a.onItemClick)(e, t), o._scribeClick(e, t), n && n()
              }),
              b()(h()(o), '_scribeRecentSearchImpression', function () {
                var e = o.props,
                  t = e.analytics,
                  a = e.recentSearches
                if (a && a.length) {
                  var n = Object(k.a)(
                    a.map(function (e, t) {
                      return P.a.forRecentSearchResult(e, t)
                    }),
                  )
                  t.scribe({ action: 'impression', data: { items: n } })
                }
              }),
              b()(h()(o), '_scribeSavedSearchImpression', function () {
                var e = o.props,
                  t = e.analytics,
                  a = e.savedSearches
                if (a && a.length) {
                  var n = Object(k.a)(
                    a.map(function (e, t) {
                      return P.a.forSavedSearchResult(e.keyword.query, t)
                    }),
                  )
                  t.scribe({ element: 'saved_search', action: 'impression', data: { items: n } })
                }
              }),
              b()(h()(o), '_scribeClick', function (e, t) {
                var a = o.props.analytics
                switch (e.category) {
                  case A.b.SavedSearch:
                    var n = P.a.forSavedSearchResult(e.query, t)
                    a.scribe({ element: 'typeahead', action: 'click', data: { targets: [n] } })
                    break
                  case A.b.RecentSearch:
                    var i
                    e.recentSearchType &&
                      (i =
                        e.recentSearchType === A.a.User
                          ? { user: { type: A.a.User, id: e.query } }
                          : e.recentSearchType === A.a.Event && e.queryMetadata && e.queryMetadata.title
                          ? { event: r()(r()({}, e.queryMetadata), {}, { type: A.a.Event, id: e.query }) }
                          : e.recentSearchType === A.a.Topic && e.queryMetadata && e.queryMetadata.name
                          ? { topic: r()(r()({}, e.queryMetadata), {}, { type: A.a.Topic, id: e.query }) }
                          : { keyword: { type: A.a.Keyword, query: e.query } })
                    var c = i && P.a.forRecentSearchResult(i, t)
                    c && a.scribe({ action: 'click', data: { targets: [c] } })
                }
              }),
              b()(h()(o), '_setFocusedItemRef', function (e) {
                ;(o._focusedItemRef = e),
                  e &&
                    o._shouldScrollToFocusedItem &&
                    (Object(Ve.c)(o._getScrollParent(), o._getFocusedItem()), (o._shouldScrollToFocusedItem = !1))
              }),
              b()(h()(o), 'hasFocusedItem', function () {
                return o._getNumOfSearchItems() > 0
              }),
              b()(h()(o), 'selectFocusedItem', function () {
                if (o.hasFocusedItem()) {
                  var e = o._focusedItemRef && o._focusedItemRef.searchItemData
                  e && o._handleOnItemClick(e, o.state.focusIndex)
                }
              }),
              b()(h()(o), '_setFocusIndex', function (e, t) {
                var a = o.props.onItemFocusChanged
                ;(o._shouldScrollToFocusedItem = t), o.setState({ focusIndex: e }), a && a()
              }),
              b()(h()(o), '_resetFocus', function () {
                o._setFocusIndex(-1)
              }),
              b()(h()(o), 'focusNext', function () {
                var e = o.state.focusIndex,
                  t = o._getNumOfSearchItems()
                if (0 !== t) {
                  var a = e + 1 >= t ? 0 : e + 1
                  o._setFocusIndex(a, !0)
                }
              }),
              b()(h()(o), 'focusPrevious', function () {
                var e = o.state.focusIndex,
                  t = o._getNumOfSearchItems()
                if (0 !== t) {
                  var a = e - 1 < 0 ? t - 1 : e - 1
                  o._setFocusIndex(a, !0)
                }
              })
            var i,
              c,
              l = o.context.featureSwitches
            return (
              (o.state = {
                focusIndex: 0,
                shouldShowClearAllConfirmationSheet: !1,
                shouldShowDeleteSavedSearchConfirmation: !1,
                allowedRecentSearchItems:
                  ((i = !0 === l.getValueWithoutScribeImpression('responsive_web_recent_searches_topics_enabled')),
                  (c = !0 === l.getValueWithoutScribeImpression('responsive_web_recent_searches_events_enabled')),
                  [].concat(Xe, [i ? 'topic' : '', c ? 'event' : ''])),
              }),
              (o._withNewTypeaheadUI = o.context.featureSwitches.isTrue(
                'responsive_web_account_search_readability_enabled',
              )),
              o
            )
          }
          return (
            u()(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.createLocalApiErrorHandler,
                    a = e.fetchRecentSearchesIfNeeded,
                    n = e.fetchSavedSearchesIfNeeded,
                    r = e.recentSearches,
                    o = e.savedSearches
                  a(),
                    n().catch(t({})),
                    this._fetchUsersDetailsIfNeeded(),
                    this._scribeRecentSearchImpression(),
                    this._scribeSavedSearchImpression(),
                    ((r && r.length) || (o && o.length)) && this._resetFocus()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t = this.props,
                    a = t.recentSearches,
                    n = t.savedSearches
                  e.recentSearches !== a &&
                    (this._fetchUsersDetailsIfNeeded(), this._resetFocus(), this._scribeRecentSearchImpression()),
                    e.savedSearches !== n && (this._resetFocus(), this._scribeSavedSearchImpression())
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    a = e.style,
                    n = this.state,
                    r = n.shouldShowClearAllConfirmationSheet,
                    o = n.shouldShowDeleteSavedSearchConfirmation
                  return E.a.createElement(
                    ee.a,
                    { style: a },
                    E.a.createElement(Q.a, {
                      fetchStatus: t,
                      onRequestRetry: this._handleUsersRetry,
                      render: this._render,
                    }),
                    r
                      ? E.a.createElement(Ne.a, {
                          confirmButtonLabel: qe.confirmButtonLabel,
                          confirmButtonType: 'destructiveFilled',
                          headline: qe.headline,
                          onCancel: this._handleOnClearAllCancel,
                          onConfirm: this._handleOnClearAllConfirm,
                          testID: Me.a.deleteRecentSearchesDialog,
                          text: qe.text,
                        })
                      : null,
                    o
                      ? E.a.createElement(K.a, {
                          onCancel: this._handleOnDeleteSavedSearchCancel,
                          onConfirm: this._handleOnDeleteSavedSearchConfirm,
                        })
                      : null,
                  )
                },
              },
              {
                key: '_getScrollParent',
                value: function () {
                  if (!this._scrollParent) {
                    var e = Object(Ve.a)(X.a.findDOMNode(this))
                    this._scrollParent = e === window ? null : e
                  }
                  return this._scrollParent
                },
              },
              {
                key: '_getFocusedItem',
                value: function () {
                  var e = this._focusedItemRef && X.a.findDOMNode(this._focusedItemRef)
                  return e instanceof Element ? e : null
                },
              },
            ]),
            a
          )
        })(E.a.Component)
      b()(Ye, 'contextType', ve.a)
      var Je = ae.a.create(function (e) {
          return {
            emptyState: { padding: e.spaces.space12, paddingTop: e.spaces.space20 },
            borderTop: { borderTopColor: e.colors.borderColor, borderTopStyle: 'solid', borderTopWidth: 1 },
            header: {
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: e.componentDimensions.gutterVertical,
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
            },
          }
        }),
        Ze = q.forwardRef(Ye),
        $e = 'SearchBox_Search_Input',
        et = a('TnY3'),
        tt = a('GZwR'),
        at = a('4e/K'),
        nt = B.a.ib2e46ee,
        rt = B.a.hbc99b02,
        ot = /^(\w+)$/,
        it = [tt.a.Events, tt.a.Users, tt.a.Topics],
        ct = function (e) {
          return '@' === e[0] ? e.substring(1) : e
        },
        st = { viewType: 'search_field' },
        lt = ['t1', 't3', 't4'],
        ut = (function (e) {
          m()(a, e)
          var t = y()(a)
          function a(e, n) {
            var o, c
            return (
              s()(this, a),
              (c = t.call(this, e, n)),
              b()(h()(c), '_withNewTypeaheadUI', !1),
              b()(h()(c), '_orderResults', function (e, t, a, n) {
                return 't4' === c._rankedTypeaheadExperimentalValue
                  ? c._reorderResults(e, t, a, n)
                  : c._flattenResults(e, t, a, n)
              }),
              b()(h()(c), '_reorderResults', function (e, t, a, n) {
                var r = Object(tt.f)(t, tt.b.User),
                  o = Object(tt.f)(t, tt.b.NoResult),
                  i = r.sort(function (e, t) {
                    var a = e.rounded_score,
                      n = void 0 === a ? 0 : a,
                      r = t.rounded_score
                    return (void 0 === r ? 0 : r) - n
                  }),
                  c = [].concat(S()(i), S()(o))
                return Object(k.a)([e, n.length ? n : void 0, a.length ? a : void 0, c.length ? c : void 0])
              }),
              b()(h()(c), '_flattenResults', function (e, t, a, n) {
                var r = Object(tt.f)(t, tt.b.User),
                  o = Object(tt.f)(t, tt.b.NoResult),
                  i = Object(tt.f)(a, tt.b.Topic),
                  s = Object(tt.f)(a, tt.b.NoResult),
                  l = Object(tt.f)(n, tt.b.Event),
                  u = [].concat(S()(Object(tt.e)(i)), S()(Object(tt.e)(r))),
                  d = (
                    't1' === c._rankedTypeaheadExperimentalValue
                      ? u.sort(function (e, t) {
                          return t.rank - e.rank
                        })
                      : 't3' === c._rankedTypeaheadExperimentalValue
                      ? (function (e) {
                          for (var t = S()(e), a = e.length - 1; a > 0; a--) {
                            var n = Math.floor(Math.random() * (a + 1)),
                              r = t[n],
                              o = t[a]
                            ;(t[a] = r), (t[n] = o)
                          }
                          return t
                        })(u)
                      : u
                  ).map(function (e) {
                    var t = e.item
                    e.rank
                    return t
                  })
                return d.unshift.apply(d, S()(s)), d.unshift.apply(d, S()(l)), d.push.apply(d, S()(o)), e ? [e, d] : [d]
              }),
              b()(h()(c), '_renderSearchBoxEmptyState', function (e) {
                return E.a.createElement(Ze, i()({}, e, { onItemClick: c._handleSearchItemClick }))
              }),
              b()(h()(c), '_handleSearchItemClick', function (e) {
                var t = e.category,
                  a = e.link,
                  n = e.query,
                  o = e.queryMetadata,
                  i = e.recentSearchType,
                  s = c.props.addQuery
                t === A.b.SavedSearch
                  ? c._submitQuery({ query: n, shouldAddToRecentSearch: !1, src: L.a.SavedSearchClick })
                  : i === A.a.Keyword
                  ? c._submitQuery({ query: n, shouldAddToRecentSearch: !0, src: L.a.RecentSearchClick })
                  : i === A.a.Event
                  ? (c._routeTransition({ pathname: '/i/events/'.concat(n) }),
                    o && o.title && s({ event: r()(r()({}, o), {}, { id: n, type: A.a.Event }) }))
                  : i === A.a.Topic
                  ? (c._routeTransition({ pathname: '/i/topics/'.concat(n) }),
                    o && o.name && s({ topic: r()(r()({}, o), {}, { id: n, type: A.a.Topic }) }))
                  : a && (c._routeTransition({ pathname: '/'.concat(a) }), s({ user: { id: n, type: A.a.User } }))
              }),
              b()(h()(c), '_handleSearchShortcut', function (e) {
                var t = c._inputRef
                t && (e && t.setQuery(e), t.focus())
              }),
              b()(h()(c), '_getUserExactMatch', function (e) {
                e.hasResults, e.isLoaded
                var t = e.query,
                  a = ct(t)
                if (a.match(ot))
                  return {
                    id: ''.concat(t, '_no_result_user'),
                    type: tt.b.NoResult,
                    data: { text: rt({ screenName: a }), type: 'user' },
                  }
              }),
              b()(h()(c), '_handleOnDismiss', function () {
                var e = c.props.history,
                  t = e.location,
                  a = t.state || {}
                if (a.searchFocused) {
                  var n = r()(r()({}, t), {}, { state: r()(r()({}, a), {}, { lockScroll: !1, searchFocused: !1 }) })
                  e.replace(n)
                }
              }),
              b()(h()(c), '_handleOnFocus', function () {
                var e = c.props,
                  t = e.analytics,
                  a = e.history,
                  n = a.location,
                  o = n.state || {}
                if (!o.searchFocused) {
                  var i = r()(r()({}, n), {}, { state: r()(r()({}, o), {}, { searchFocused: !0, lockScroll: !0 }) })
                  t.scribe({ action: 'focus_field' }), a.push(i)
                }
              }),
              b()(h()(c), '_handleChange', function (e) {
                var t,
                  a = c.props.history.location
                !c._rankedTypeaheadExperimentalValue &&
                  null !== (t = a.state) &&
                  void 0 !== t &&
                  t.searchFocused &&
                  (c._rankedTypeaheadExperimentalValue = c.context.featureSwitches.getStringValue(
                    'responsive_web_ranked_typeahead',
                    't2',
                  )),
                  c.setState({ query: e })
              }),
              b()(h()(c), '_handleTypeaheadSubmit', function () {
                var e = c.state,
                  t = e.items,
                  a = e.query,
                  n = c.props.analytics
                ;/^\s*$/.test(a) ||
                  (n.scribe({
                    action: 'search',
                    data: { items: P.a.forTypeaheadResults(t), search_details: { query: a } },
                  }),
                  c._submitQuery({ query: a, shouldAddToRecentSearch: !0 }))
              }),
              b()(h()(c), '_handleItemClick', function (e, t) {
                var a = c.props.addQuery,
                  n = c.state.query
                switch (e.type) {
                  case tt.b.User:
                    if (e.data.id_str) a({ user: { id: e.data.id_str, type: A.a.User } })
                    c._routeTransition({ pathname: '/'.concat(e.data.screen_name) })
                    break
                  case tt.b.Topic:
                  case tt.b.Hashtag:
                    c._submitQuery({ query: e.data.topic, shouldAddToRecentSearch: !0, src: L.a.TypeaheadClick })
                    break
                  case tt.b.Event:
                    e.data && e.data.url
                      ? c._routeTransition({ pathname: O.b.parseInternalUrl(e.data.url) })
                      : c._submitQuery({ query: e.data.topic, src: L.a.TypeaheadClick })
                    break
                  case tt.b.NoResult:
                    var r = e.data.type
                    'user' === r
                      ? c._routeTransition({ pathname: '/'.concat(ct(n)) })
                      : 'topic' === r &&
                        c._submitQuery({ query: n, shouldAddToRecentSearch: !0, src: L.a.TypeaheadClick })
                }
              }),
              b()(h()(c), '_handleItemsChanged', function (e) {
                c.setState({ items: e })
              }),
              b()(h()(c), '_routeTransition', function (e) {
                var t = e.params,
                  a = e.pathname,
                  n = e.query,
                  o = e.src,
                  i = c.props,
                  s = i.history,
                  l = i.location,
                  u = r()(
                    r()({}, l),
                    {},
                    {
                      pathname: a,
                      search: '',
                      query: t || (n ? { q: n, src: o } : {}),
                      state: r()(r()({}, l.state), {}, { searchFocused: !1, lockScroll: !1 }),
                    },
                  )
                s.replace(u)
              }),
              b()(h()(c), '_submitQuery', function (e) {
                var t = e.query,
                  a = e.shouldAddToRecentSearch,
                  n = void 0 !== a && a,
                  r = e.src,
                  o = void 0 === r ? L.a.Typed : r,
                  i = c.props,
                  s = i.addQuery,
                  l = i.mode,
                  u = i.onSubmit,
                  d = i.searchFilters,
                  h = i.searchRoute
                ;(u && u(t, o, c.state.lastSubmittedQuery === t), n) && s({ keyword: { query: t, type: A.a.Keyword } })
                var p = Object(A.g)({ query: t, querySrc: o, mode: l, searchFilters: d })
                c._routeTransition({ pathname: h, params: p, src: o }), c.setState({ lastSubmittedQuery: t })
              }),
              b()(h()(c), '_setInputRef', function (e) {
                c._inputRef = e
              }),
              (c.state = {
                query: e.initialValue,
                items: [],
                lastSubmittedQuery: Object(R.a)(null === (o = e.location.query) || void 0 === o ? void 0 : o.q),
              }),
              (c._withNewTypeaheadUI = c.context.featureSwitches.isTrue(
                'responsive_web_account_search_readability_enabled',
              )),
              c
            )
          }
          return (
            u()(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  this.props.shouldHandleSearchShortcut &&
                    (this._unregisterSearchShortcutHandler = Object(D.b)(this._handleSearchShortcut))
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._unregisterSearchShortcutHandler && this._unregisterSearchShortcutHandler()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.forceVdlDisable,
                    a = e.isCompact,
                    n = e.isInSidebar,
                    r = e.isOnHomepage,
                    o = e.location,
                    i = e.placeholder,
                    c = this.state.query,
                    s = (o.state || {}).searchPrefill,
                    l = this.props.initialValue || s,
                    u = !!o.state && !!o.state.searchFocused,
                    d = lt.includes(this._rankedTypeaheadExperimentalValue)
                  return E.a.createElement(
                    w.a,
                    { behavioralEventContext: st },
                    E.a.createElement(
                      ee.a,
                      { style: dt.root },
                      E.a.createElement(at.default, {
                        filter: it,
                        forceVdlDisable: t,
                        getTopicExactMatch: c ? tt.h : void 0,
                        getUserExactMatch: c ? this._getUserExactMatch : void 0,
                        initialValue: l,
                        inputStyle: dt.input,
                        isCompact: a,
                        isInSidebar: n,
                        isOnHomepage: r,
                        onDismiss: this._handleOnDismiss,
                        onFocus: this._handleOnFocus,
                        onItemClick: this._handleItemClick,
                        onItemsChanged: this._handleItemsChanged,
                        onQueryChange: this._handleChange,
                        onSubmit: this._handleTypeaheadSubmit,
                        orderResults: d ? this._orderResults : void 0,
                        placeholder: i,
                        ref: this._setInputRef,
                        renderEmptyState: this._renderSearchBoxEmptyState,
                        rounded: !0,
                        shouldAutoFocus: u,
                        shouldClearOnSelect: !0,
                        shouldDeferPrefetch: !0,
                        source: tt.d.SearchBox,
                        testID: $e,
                        withFixedPositioning: !0,
                        withFocusStyling: !0,
                        withSectionDivider: !this._withNewTypeaheadUI,
                      }),
                    ),
                  )
                },
              },
            ]),
            a
          )
        })(E.a.Component)
      b()(ut, 'defaultProps', {
        initialValue: '',
        isInSidebar: !1,
        placeholder: nt,
        searchRoute: '/search',
        forceVdlDisable: !0,
      }),
        b()(ut, 'contextType', ve.a)
      var dt = ae.a.create(function (e) {
        return {
          root: { alignItems: 'stretch', flexBasis: 0, flexDirection: 'row', flexGrow: 1 },
          input: { flexShrink: 1 },
        }
      })
      t.default = Object(et.a)(I(ut))
    },
    AS3p: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return i
      }),
        a.d(t, 'c', function () {
          return c
        }),
        a.d(t, 'b', function () {
          return s
        }),
        a.d(t, 'd', function () {
          return l
        }),
        a.d(t, 'e', function () {
          return h
        })
      a('yH/f')
      var n = a('SrIh'),
        r = a('JbbX'),
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
                : (Object(n.a)('Invalid consent signal state'), i.Invalid)
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
      function h(e) {
        var t = Object(r.a)(e)
        return !t || !u(t) || !d(t) || t.consent_version < 2 || t.text_version < o
      }
    },
    Chb3: function (e, t, a) {
      'use strict'
      var n = a('ddV6'),
        r = a.n(n),
        o = (a('jQ3i'), a('ERkP')),
        i = a.n(o),
        c = a('Hde2'),
        s = a('H1k/'),
        l = a('zCf4'),
        u = a('496R')
      function d(e) {
        return !['/i/flow/login'].includes(e)
      }
      function h() {
        var e = Object(l.g)(),
          t = i.a.useState(function () {
            return d(e.pathname)
          }),
          a = r()(t, 2),
          n = a[0],
          o = a[1]
        return (
          i.a.useEffect(
            function () {
              o(d(e.pathname))
            },
            [o, e],
          ),
          n
        )
      }
      t.a = Object(u.a)(function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { hideCookieBannerPicker: !1 },
          t = h()
        return !e.hideCookieBannerPicker && t ? i.a.createElement(c.a, null, i.a.createElement(s.a, null)) : null
      })
    },
    FITr: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        o = a('ERkP'),
        i = a.n(o),
        c = a('Lsrn'),
        s = a('k/Ka'),
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
                d: 'M20.235 14.61c-.375-1.745-2.342-3.506-4.01-4.125l-.544-4.948 1.495-2.242c.157-.236.172-.538.037-.787-.134-.25-.392-.403-.675-.403h-9.14c-.284 0-.542.154-.676.403-.134.25-.12.553.038.788l1.498 2.247-.484 4.943c-1.668.62-3.633 2.38-4.004 4.116-.04.16-.016.404.132.594.103.132.304.29.68.29H8.64l2.904 6.712c.078.184.26.302.458.302s.38-.118.46-.302l2.903-6.713h4.057c.376 0 .576-.156.68-.286.146-.188.172-.434.135-.59z',
              }),
            ),
          )
        }
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
    'H1k/': function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return ae
      })
      var n = a('ERkP'),
        r = a.n(n),
        o = a('v6aA'),
        i = a('yiKp'),
        c = a.n(i),
        s = a('ddV6'),
        l = a.n(s),
        u = a('AS3p'),
        d = a('KUGV'),
        h = a('Irs7'),
        p = a('MWbm'),
        m = a('t62R'),
        f = a('cHvH'),
        y = a('rHpw'),
        g = a('/yvb'),
        b = a('3XMw'),
        v = a.n(b),
        S = v.a.d8817e36,
        _ = v.a.b9288ee6,
        E = v.a.i1390ec2,
        w = { page: 'cookie_compliance_banner' }
      function k() {
        var e = r.a.createElement(
          v.a.I18NFormatMessage,
          { $i18n: 'ad048ab9' },
          r.a.createElement(
            m.b,
            {
              color: 'buttonWhite',
              link: 'https://help.twitter.com/rules-and-policies/twitter-cookies',
              withUnderline: !0,
            },
            v.a.id7ef73f,
          ),
        )
        return r.a.createElement(x, { body: e, title: E })
      }
      function C(e) {
        var t = r.a.createElement(
          v.a.I18NFormatMessage,
          { $i18n: 'bc8736af' },
          r.a.createElement(
            m.b,
            { accessibilityRole: 'button', color: 'buttonWhite', onClick: e.onExpand, withUnderline: !0 },
            v.a.gfb2ba0f,
          ),
        )
        return r.a.createElement(x, { body: t, title: E })
      }
      function x(e) {
        return r.a.createElement(
          p.a,
          { style: R.cookieComplianceMessageWrap },
          r.a.createElement(m.b, { color: 'buttonWhite', size: 'headline2', weight: 'medium' }, e.title),
          r.a.createElement(
            m.b,
            { color: 'buttonWhite', size: 'subtext2', style: R.cookieComplianceExpandedDetails },
            e.body,
          ),
        )
      }
      var I = r.a.forwardRef(function (e, t) {
          var a = Object(h.b)()
          r.a.useEffect(
            function () {
              a.scribe(c()(c()({}, w), {}, { action: 'impression' }))
            },
            [a],
          )
          var n = (function () {
              var e = r.a.useState(!1),
                t = l()(e, 2),
                a = t[0],
                n = t[1],
                o = Object(h.b)()
              return {
                isExpanded: a,
                expand: function () {
                  o.scribe(c()(c()({}, w), {}, { action: 'click', element: 'expand_message' })), n(!0)
                },
              }
            })(),
            i = n.expand,
            s = n.isExpanded,
            m = (function () {
              var e = Object(h.b)(),
                t = r.a.useContext(o.a).featureSwitches,
                a = r.a.useState(function () {
                  return u.e(t) && !Object(d.a)()
                }),
                n = l()(a, 2),
                i = n[0],
                s = n[1]
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
            b = m.acceptAllCookies,
            v = m.isBannerOpen,
            E = m.refuseNonEssentialCookies
          return v
            ? r.a.createElement(f.a, null, function (e) {
                var a = e.windowWidth < y.a.theme.breakpoints.xLarge
                return r.a.createElement(
                  p.a,
                  { ref: t, style: [R.root, a && R.rootNarrow] },
                  s ? r.a.createElement(k, null) : r.a.createElement(C, { onExpand: i }),
                  r.a.createElement(
                    p.a,
                    { style: [R.buttonContainer, a && R.buttonContainerNarrow] },
                    r.a.createElement(
                      g.a,
                      {
                        dominantColor: 'buttonAlwaysBlack',
                        onPress: b,
                        size: 'medium',
                        style: [R.ctaButton, a && R.ctaButtonNarrow],
                        type: y.a.isDarkMode() ? 'onMediaDominantColorFilled' : 'onMediaWhiteFilled',
                      },
                      S,
                    ),
                    r.a.createElement(
                      g.a,
                      {
                        dominantColor: 'buttonAlwaysBlack',
                        onPress: E,
                        size: 'medium',
                        style: [R.ctaButton, a && R.ctaButtonNarrow],
                        type: y.a.isDarkMode() ? 'onMediaDominantColorFilled' : 'onMediaWhiteFilled',
                      },
                      _,
                    ),
                  ),
                )
              })
            : null
        }),
        R = y.a.create(function (e) {
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
        T = a('97Jx'),
        B = a.n(T),
        O = a('VrFO'),
        L = a.n(O),
        D = a('Y9Ll'),
        P = a.n(D),
        F = a('1Pcy'),
        A = a.n(F),
        z = a('5Yy7'),
        H = a.n(z),
        U = a('2VqO'),
        j = a.n(U),
        M = a('KEM+'),
        N = a.n(M),
        V = (a('hBvt'), a('RqPI')),
        W = a('rxPX'),
        q = Object(W.a)().propsFromState(function () {
          return { currentCountry: V.y }
        }),
        K = a('cnVF'),
        Q = a('mrHL'),
        G =
          (a('vrRf'),
          function (e, t, a) {
            return e.indexOf(t.toLowerCase()) > -1 && '1' !== a
          }),
        X = v.a.ia5e7487,
        Y = (function (e) {
          H()(a, e)
          var t = j()(a)
          function a(e, n) {
            var o
            L()(this, a),
              (o = t.call(this, e, n)),
              N()(A()(o), 'state', { euWarningIsOpen: !1 }),
              N()(A()(o), '_renderMessage', function () {
                return r.a.createElement(
                  m.b,
                  { color: 'white', size: 'subtext2' },
                  r.a.createElement(
                    v.a.I18NFormatMessage,
                    { $i18n: 'i3c34582' },
                    r.a.createElement(
                      m.b,
                      {
                        color: 'white',
                        link: 'https://help.twitter.com/rules-and-policies/twitter-cookies',
                        style: J.link,
                      },
                      v.a.fd0ff73b,
                    ),
                  ),
                )
              }),
              N()(A()(o), '_handleEUBannerClose', function () {
                !(function (e) {
                  Object(Q.e)(K.k, '1', { featureSwitches: e })
                })(o.context.featureSwitches),
                  o.setState({ euWarningIsOpen: !1 })
              })
            var i = o.props.currentCountry,
              c = o.context.featureSwitches,
              s = c.getArrayValue('responsive_web_eu_countries', []),
              l = Object(Q.d)({ featureSwitches: c, cookieName: K.k })
            return (o.state = { euWarningIsOpen: !!i && G(s, i, l) }), o
          }
          return (
            P()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this
                  return this.state.euWarningIsOpen
                    ? r.a.createElement(f.a, null, function (t) {
                        var a = t.windowWidth < y.a.theme.breakpoints.medium
                        return r.a.createElement(
                          p.a,
                          { ref: e.props.innerRef, style: [J.root, a && J.rootNarrow] },
                          e._renderMessage(),
                          r.a.createElement(
                            g.a,
                            {
                              onPress: e._handleEUBannerClose,
                              size: 'medium',
                              style: [J.closeButton, a && J.closeButtonNarrow],
                              type: 'onMediaOutlined',
                            },
                            X,
                          ),
                        )
                      })
                    : null
                },
              },
            ]),
            a
          )
        })(r.a.Component)
      N()(Y, 'contextType', o.a)
      var J = y.a.create(function (e) {
          return {
            root: {
              alignItems: 'center',
              boxShadow: e.boxShadows.medium,
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-evenly',
              backgroundColor: e.colors.gray1100,
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
          return r.a.createElement(Y, B()({}, e, { innerRef: t }))
        }),
        $ = q.forwardRef(Z),
        ee = a('+d3d')
      function te(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
          a = r.a.useMemo(
            function () {
              return Object(ee.a)(function (t) {
                if (e)
                  if (t) {
                    var a = t.getBoundingClientRect()
                    a && e(a)
                  } else e(null)
              }, t)
            },
            [e, t],
          )
        return r.a.useCallback(
          function (t) {
            if ('function' == typeof e) {
              var n,
                r = a.bind(null, t)
              return (
                r(),
                window.addEventListener('resize', r),
                t && (n = new ResizeObserver(r)).observe(t),
                function () {
                  window.removeEventListener('resize', r), n && n.disconnect(), a.cancel()
                }
              )
            }
          },
          [e, a],
        )
      }
      function ae(e) {
        var t,
          a = r.a.useContext(o.a).featureSwitches,
          n =
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
        return a.isTrue('responsive_web_cookie_compliance_banner_enabled')
          ? r.a.createElement(I, { ref: n })
          : r.a.createElement($, { ref: n })
      }
    },
    JkIr: function (e, t, a) {
      'use strict'
      t.a = { signupButton: 'signupButton', loginButton: 'loginButton', logInSignUpFooter: 'logInSignUpFooter' }
    },
    Nqmc: function (e, t, a) {
      'use strict'
      var n = a('m3Bd'),
        r = a.n(n),
        o = a('VrFO'),
        i = a.n(o),
        c = a('Y9Ll'),
        s = a.n(c),
        l = a('5Yy7'),
        u = a.n(l),
        d = a('2VqO'),
        h = a.n(d),
        p = a('KEM+'),
        m = a.n(p),
        f = (a('hBvt'), a('uFXj'), a('2G9S'), a('SV7d')),
        y = a('ERkP'),
        g = a.n(y),
        b = a('t62R'),
        v = a('5mJL'),
        S = a('nBUg'),
        _ = a('qjak'),
        E = a('dC06'),
        w = a('rHpw'),
        k = a('XIXT'),
        C = a('yDX5'),
        x = a('MWbm'),
        I = [
          'avatarSize',
          'bottomControl',
          'iconStyle',
          'nativeID',
          'onLayout',
          'rightControl',
          'style',
          'testID',
          'textColor',
          'textSize',
          'topControl',
          'weight',
          'withBottomBorder',
          'withLeftPadding',
          'withTextCentered',
        ],
        R = { viewType: 'social_context' },
        T = (function (e) {
          u()(a, e)
          var t = h()(a)
          function a() {
            return i()(this, a), t.apply(this, arguments)
          }
          return (
            s()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    a = t.avatarSize,
                    n = t.bottomControl,
                    o = t.iconStyle,
                    i = t.nativeID,
                    c = t.onLayout,
                    s = t.rightControl,
                    l = t.style,
                    u = t.testID,
                    d = t.textColor,
                    h = t.textSize,
                    p = t.topControl,
                    m = t.weight,
                    y = (t.withBottomBorder, t.withLeftPadding),
                    E = (t.withTextCentered, r()(t, I)),
                    w = Object(_.a)(E),
                    k = w.Icon,
                    C = w.accessibilityLabel,
                    T = w.link,
                    O = w.text,
                    L = g.a.createElement(
                      b.b,
                      { accessibilityLabel: C, color: d, nativeID: i, numberOfLines: 2, size: h, testID: u, weight: m },
                      O,
                    ),
                    D = this._getStyles(),
                    P = D.cellStyle,
                    F = D.viewStyle
                  return O
                    ? g.a.createElement(S.b.UseProps, null, function (t) {
                        return g.a.createElement(
                          f.a,
                          { behavioralEventContext: R },
                          g.a.createElement(
                            g.a.Fragment,
                            null,
                            p || null,
                            g.a.createElement(
                              x.a,
                              {
                                onLayout: c,
                                style: [l, F, t.socialContextRefreshEnabled() && !y && B.socialContextRefresh],
                              },
                              g.a.createElement(
                                v.a,
                                {
                                  avatarCell: k || (y ? null : void 0),
                                  avatarCellStyle: [
                                    o,
                                    B.socialContextIconColumn,
                                    !y && B.unsetIconWidth,
                                    t.socialContextRefreshEnabled() && !y && B.socialContextRefreshIcon,
                                  ],
                                  avatarSize: a,
                                  cellStyle: P,
                                },
                                g.a.createElement(
                                  x.a,
                                  { style: B.cellWrapper },
                                  g.a.createElement(
                                    x.a,
                                    {
                                      style: [
                                        B.socialContextTextColumn,
                                        t.socialContextRefreshEnabled() && !y && B.socialContextRefreshTextColumn,
                                      ],
                                    },
                                    T ? e._renderLink(T, L) : L,
                                  ),
                                  s || null,
                                ),
                              ),
                              n || null,
                            ),
                          ),
                        )
                      })
                    : null
                },
              },
              {
                key: '_renderLink',
                value: function (e, t) {
                  var a = this.props,
                    n = a.contextType,
                    r = a.nativeID,
                    o = a.onClick,
                    i = a.retweetData,
                    c = a.textColor,
                    s = a.topicData,
                    l = (i || {}).screenName,
                    u = g.a.createElement(b.b, { color: c, link: e, nativeID: r, onClick: o }, t)
                  return n === E.a.Topic && s
                    ? g.a.createElement(k.a, { topicId: s.topicId }, u)
                    : n === E.a.Retweet && l
                    ? g.a.createElement(C.a, { screenName: l }, u)
                    : u
                },
              },
              {
                key: '_getStyles',
                value: function () {
                  var e = this.props,
                    t = e.bottomControl,
                    a = e.contextType,
                    n = e.withBottomBorder,
                    r = e.withTextCentered,
                    o = a === E.a.TextOnly,
                    i = n ? [B.bottomBorderMargin, t && B.bottomBorder] : [],
                    c = n && !t ? [B.bottomBorder] : []
                  return (
                    o && c.push(B.topicContext),
                    r && c.push(B.socialContextTextCentered),
                    { viewStyle: i, cellStyle: c }
                  )
                },
              },
            ]),
            a
          )
        })(g.a.PureComponent)
      m()(T, 'defaultProps', {
        iconSize: 'small',
        textColor: 'gray700',
        textSize: 'subtext2',
        withBottomBorder: !1,
        withLeftPadding: !0,
        withTextCentered: !1,
      })
      var B = w.a.create(function (e) {
        return {
          socialContextIconColumn: { alignItems: 'flex-end', justifyContent: 'center' },
          bottomBorderMargin: { marginBottom: e.componentDimensions.gutterVertical },
          cellWrapper: { flexDirection: 'row' },
          bottomBorder: {
            paddingBottom: e.spaces.space4,
            borderBottomStyle: 'solid',
            borderBottomWidth: e.borderWidths.small,
            borderBottomColor: e.colors.borderColor,
          },
          topicContext: { paddingBottom: 'calc('.concat(e.spaces.space4, ' + ').concat(e.spaces.space2, ')') },
          socialContextTextColumn: { alignItems: 'flex-start', flexShrink: 1, justifyContent: 'center' },
          unsetIconWidth: { flexBasis: 'unset' },
          socialContextRefreshIcon: { marginRight: e.spaces.space8 },
          socialContextRefresh: { marginBottom: e.spaces.space8 },
          socialContextRefreshTextColumn: { minHeight: e.spaces.space32 },
          socialContextTextCentered: { justifyContent: 'center' },
        }
      })
      t.a = T
    },
    UpKB: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        o = a('VrFO'),
        i = a.n(o),
        c = a('Y9Ll'),
        s = a.n(c),
        l = a('1Pcy'),
        u = a.n(l),
        d = a('5Yy7'),
        h = a.n(d),
        p = a('2VqO'),
        m = a.n(p),
        f = a('KEM+'),
        y = a.n(f),
        g = (a('2G9S'), a('ho0z'), a('0zG9'), a('ERkP')),
        b = a.n(g),
        v = a('/yvb'),
        S = a('hUVV'),
        _ = a('3XMw'),
        E = a.n(_),
        w = a('iKTg'),
        k = a('TaB8'),
        C = a('1zbE'),
        x = a('Ukpf'),
        I = a('cnVF'),
        R = a('TnY3'),
        T = a('0+0m'),
        B = a('v6aA'),
        O = a('2qJZ'),
        L = E.a.ib65b1c6,
        D = E.a.f55cebb7,
        P = E.a.g61ed8a4,
        F = { clientId: T.a, scope: 'name email', usePopup: !0 },
        A = (function (e) {
          h()(a, e)
          var t = m()(a)
          function a() {
            var e
            i()(this, a)
            for (var n = arguments.length, o = new Array(n), c = 0; c < n; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              y()(u()(e), 'state', { isScriptLoaded: !1 }),
              y()(
                u()(e),
                '_is3rdPartyIntegrationDisabled',
                Object(k.a)('responsive_web_3rd_party_category_sign_in_with_apple', e.context.featureSwitches),
              ),
              y()(u()(e), '_initAppleIDAuth', function () {
                var t = window.AppleID,
                  a = e.props.fetchSsoInitToken,
                  n = Object(O.c)(e.context.featureSwitches) ? 'https://'.concat(O.b) : 'https://'.concat(O.a)
                t &&
                  a(I.A.Apple).then(function (e) {
                    var a = e.state
                    t.auth.init(r()(r()({}, F), {}, { redirectURI: n, state: a }))
                  })
              }),
              y()(u()(e), '_handleOnPress', function () {
                var t = window.AppleID,
                  a = e.props,
                  n = a.analytics,
                  r = a.buttonState,
                  o = a.history,
                  i = a.personalizationSettings,
                  c = a.shouldPropagateP13nSettings,
                  s = a.ssoInitTokens,
                  l = i || {},
                  u = l.allowCookieUse,
                  d = l.allowDeviceAccess,
                  h = l.allowPartnerships,
                  p = l.allowPersonalization
                n.scribe({ component: 'apple_sign_in', element: r, action: 'click' }),
                  t.auth
                    .signIn()
                    .then(function (e) {
                      n.scribe({ component: 'apple_sign_in', element: r, action: 'success' })
                      var t = e.user && e.user.name && e.user.name.firstName && e.user.name.lastName
                      o.push({
                        pathname: '/i/flow/single_sign_on',
                        state: {
                          input: {
                            cookie_personalization_settings: c && {
                              allow_cookie_use: !!u,
                              allow_device_personalization: !!d,
                              allow_partnerships: !!h,
                              allow_ads_personalization: !!p,
                            },
                            requested_variant: JSON.stringify({
                              display_name: t && ''.concat(e.user.name.firstName, ' ').concat(e.user.name.lastName),
                              id_token: e.authorization.id_token,
                              provider: I.A.Apple,
                              state: s[I.A.Apple],
                            }),
                          },
                        },
                      })
                    })
                    .catch(function (t) {
                      var a = e.props.addToast
                      t.error !== T.g
                        ? (n.scribe({ component: 'apple_sign_in', element: r, action: 'failure' }), a({ text: P }))
                        : n.scribe({ component: 'apple_sign_in', element: 'auth', action: 'user_closed_popup' })
                    })
              }),
              e
            )
          }
          return (
            s()(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this
                  this._is3rdPartyIntegrationDisabled ||
                    x.a.inject({
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
                    a = e.buttonState,
                    n = e.style,
                    r = this.state.isScriptLoaded,
                    o = a === C.a.SignUp ? L : D
                  return this._is3rdPartyIntegrationDisabled
                    ? null
                    : b.a.createElement(v.a, {
                        backgroundColor: 'white',
                        borderColor: 'gray200',
                        children: o,
                        color: 'gray1100',
                        disabled: !r,
                        icon: b.a.createElement(w.a, null),
                        onPress: this._handleOnPress,
                        size: t,
                        style: n,
                      })
                },
              },
            ]),
            a
          )
        })(b.a.PureComponent)
      y()(A, 'contextType', B.a),
        y()(A, 'defaultProps', { buttonSize: 'xLarge', buttonState: 'signup' }),
        (t.a = Object(R.a)(Object(S.a)(A)))
    },
    aPcQ: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        o = a('ERkP'),
        i = a.n(o),
        c = a('Lsrn'),
        s = a('k/Ka'),
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
                d: 'M20 16H5.81l2.72-2.72c.294-.293.294-.768 0-1.06s-.767-.294-1.06 0l-4 4c-.293.292-.293.767 0 1.06l4 4c.146.147.338.22.53.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06L5.81 17.5H20c.414 0 .75-.337.75-.75S20.414 16 20 16zm.53-9.28l-4-4c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l2.72 2.72H4c-.414 0-.75.337-.75.75S3.586 8 4 8h14.19l-2.72 2.72c-.294.293-.294.768 0 1.06.146.147.338.22.53.22s.384-.073.53-.22l4-4c.293-.293.293-.767 0-1.06z',
              }),
            ),
          )
        }
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
    bCEw: function (e, t, a) {
      'use strict'
      var n = a('IGGJ')(a('K1iM')),
        r = a('23An'),
        o = a('Ud88'),
        i = a('aQQo'),
        c = i.loadQuery,
        s = i.useTrackLoadQueryInRender,
        l = a('ERkP'),
        u = l.useCallback,
        d = l.useEffect,
        h = l.useRef,
        p = l.useState,
        m = a('K1lQ').getRequest,
        f = { kind: 'NullQueryReference' }
      function y(e) {
        return 'PreloadableConcreteRequest' === e.kind
          ? void 0 !== e.params.metadata.live
          : void 0 !== m(e).params.metadata.live
      }
      e.exports = function (e, t) {
        var a = null != t ? t : f,
          i = o()
        s()
        var l = r(),
          m = h(new Set([a])),
          g = p(function () {
            return a
          }),
          b = g[0],
          v = g[1],
          S = p(function () {
            return a
          }),
          _ = S[0],
          E = S[1]
        a !== _ && (m.current.add(a), E(a), v(a))
        var w = u(
            function () {
              l.current && (m.current.add(f), v(f))
            },
            [l],
          ),
          k = u(
            function (t, a) {
              var n =
                null != a && a.hasOwnProperty('__environment')
                  ? {
                      fetchPolicy: a.fetchPolicy,
                      networkCacheConfig: a.networkCacheConfig,
                      __nameForWarning: a.__nameForWarning,
                    }
                  : a
              if (l.current) {
                var r,
                  o = c(null !== (r = null == a ? void 0 : a.__environment) && void 0 !== r ? r : i, e, t, n)
                m.current.add(o), v(o)
              }
            },
            [i, e, v, l],
          ),
          C = h(!1)
        return (
          d(function () {
            return function () {
              C.current = !0
            }
          }, []),
          d(
            function () {
              if (!0 === C.current)
                return (
                  (C.current = !1),
                  void (
                    'NullQueryReference' !== b.kind &&
                    k(b.variables, { fetchPolicy: b.fetchPolicy, networkCacheConfig: b.networkCacheConfig })
                  )
                )
              var t = m.current
              if (l.current) {
                var a,
                  r = (0, n.default)(t)
                try {
                  for (r.s(); !(a = r.n()).done; ) {
                    var o = a.value
                    if (o === b) break
                    t.delete(o),
                      'NullQueryReference' !== o.kind &&
                        (y(e) ? o.dispose && o.dispose() : o.releaseQuery && o.releaseQuery())
                  }
                } catch (i) {
                  r.e(i)
                } finally {
                  r.f()
                }
              }
            },
            [b, l, k, e],
          ),
          d(
            function () {
              return function () {
                var t,
                  a = (0, n.default)(m.current)
                try {
                  for (a.s(); !(t = a.n()).done; ) {
                    var r = t.value
                    'NullQueryReference' !== r.kind &&
                      (y(e) ? r.dispose && r.dispose() : r.releaseQuery && r.releaseQuery())
                  }
                } catch (o) {
                  a.e(o)
                } finally {
                  a.f()
                }
              }
            },
            [e],
          ),
          ['NullQueryReference' === b.kind ? null : b, k, w]
        )
      }
    },
    bojF: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'CookieComplianceBannerPadder', function () {
          return ge
        }),
        a.d(t, 'LoggedOutHome', function () {
          return be
        })
      var n = a('yiKp'),
        r = a.n(n),
        o = a('VrFO'),
        i = a.n(o),
        c = a('Y9Ll'),
        s = a.n(c),
        l = a('1Pcy'),
        u = a.n(l),
        d = a('5Yy7'),
        h = a.n(d),
        p = a('2VqO'),
        m = a.n(p),
        f = a('KEM+'),
        y = a.n(f),
        g = a('ddV6'),
        b = a.n(g),
        v = (a('0zG9'), a('z84I'), a('ERkP')),
        S = a.n(v),
        _ = a('UpKB'),
        E = a('zI2C'),
        w = a('Hde2'),
        k = a('Chb3'),
        C = a('RqPI'),
        x = a('rxPX'),
        I = Object(x.a)()
          .propsFromState(function () {
            return { userLanguage: C.o }
          })
          .withAnalytics({ page: 'front' }),
        R = a('H1k/'),
        T = a('SrtL'),
        B = a('FQwk'),
        O = a('kG2l'),
        L = a('muX9'),
        D = a('3XMw'),
        P = a.n(D),
        F = a('6oVL'),
        A = a('rJoH'),
        z = a('yoO3'),
        H = a('Es6L'),
        U = a('JkIr'),
        j = a('MWbm'),
        M = a('0yYu'),
        N = a('t62R'),
        V = a('/yvb'),
        W = a('cHvH'),
        q = a('TIdA'),
        K = a('A91F'),
        Q = a('rHpw'),
        G = a('pxuL'),
        X = a('5P4+'),
        Y = a('AS3p'),
        J = a('0+0m'),
        Z = a('VwDm'),
        $ = a('wz7L'),
        ee = a('dFWS'),
        te = a('lUZE'),
        ae = a('3rEN'),
        ne = a('1zbE'),
        re = a('XJCT'),
        oe = [
          { text: P.a.a62c9c33, Icon: Z.a },
          { text: P.a.cf39fca2, Icon: $.a },
          { text: P.a.j86184fd, Icon: ee.a },
        ],
        ie = P.a.d1091f50,
        ce = P.a.d9e109ae,
        se = P.a.eba1b197,
        le = P.a.a565833d,
        ue = P.a.aa95ddc0,
        de = P.a.fa811c30,
        he = P.a.e919c3bc,
        pe = P.a.e5b0e543,
        me = P.a.h0ff39da,
        fe = P.a.j3f49ff6,
        ye = P.a.ca86b62c
      function ge(e) {
        var t = S.a.useState(0),
          a = b()(t, 2),
          n = a[0],
          r = a[1],
          o = S.a.useCallback(function (e) {
            r(e || 0)
          }, [])
        return S.a.createElement(
          S.a.Fragment,
          null,
          S.a.createElement(k.a.Configure, { hideCookieBannerPicker: !0 }),
          S.a.createElement(w.a, null, S.a.createElement(R.a, { onHeightChange: o })),
          S.a.createElement(j.a, { style: [{ marginBottom: n }, Se.bannerPadderChildren] }, e.children),
        )
      }
      var be = (function (e) {
        h()(a, e)
        var t = m()(a)
        function a(e, n) {
          var o
          return (
            i()(this, a),
            (o = t.call(this, e, n)),
            y()(
              u()(o),
              '_thirdPartySsoButtonsEnabled',
              o.context.featureSwitches.isTrue('responsive_web_third_party_sso_buttons_enabled'),
            ),
            y()(
              u()(o),
              '_isPlaceholderSIWGButtonEnabled',
              o.context.featureSwitches.isTrue('responsive_web_placeholder_siwg_button_enabled'),
            ),
            y()(
              u()(o),
              '_cookieComplianceGingersnapEnabled',
              o.context.featureSwitches.isTrue('responsive_web_cookie_compliance_gingersnap_enabled'),
            ),
            y()(
              u()(o),
              '_searchHomePageVariation',
              o.context.featureSwitches.getStringValue('responsive_web_search_home_page_design_variation'),
            ),
            y()(u()(o), '_renderLoginSignupButtons', function (e, t) {
              var a = e ? Se.ctaButton : Se.ctaButtonMobile
              return S.a.createElement(
                j.a,
                { style: !o._thirdPartySsoButtonsEnabled && 'tablet' === e && Se.ctaButtonContainer },
                o._thirdPartySsoButtonsEnabled
                  ? S.a.createElement(
                      S.a.Fragment,
                      null,
                      o._renderSSOButtons(e, t),
                      S.a.createElement(
                        j.a,
                        { style: Se.gapContainer },
                        S.a.createElement(M.a, { label: S.a.createElement(N.b, { children: ye }) }),
                      ),
                      S.a.createElement(
                        V.a,
                        {
                          link: {
                            pathname: '/i/flow/signup',
                            state: { input: { requested_variant: JSON.stringify({ signup_type: ne.b }) } },
                          },
                          onPress: o._handleSignupButton,
                          size: 'medium',
                          style: [a, 'tablet' === e && Se.ctaButtonSplitSpacing, Se.ssoButtonStyles],
                          testID: U.a.signupButton,
                          type: 'brandFilled',
                        },
                        ue,
                      ),
                      S.a.createElement(N.b, { color: 'gray700', size: 'subtext3', style: [a, { width: J.b }] }, ne.c),
                      S.a.createElement(
                        j.a,
                        { style: Se.signInButtonContainer },
                        S.a.createElement(N.b, { size: 'headline2', style: a, weight: 'bold' }, de),
                        S.a.createElement(
                          V.a,
                          {
                            link: '/login',
                            onPress: o._handleLoginButton,
                            size: 'medium',
                            style: [a, 'tablet' === e && Se.ctaButtonSplitSpacing, Se.ssoButtonStyles],
                            testID: U.a.loginButton,
                            type: 'brandOutlined',
                          },
                          pe,
                        ),
                      ),
                    )
                  : S.a.createElement(
                      S.a.Fragment,
                      null,
                      S.a.createElement(
                        V.a,
                        {
                          link: '/i/flow/signup',
                          onPress: o._handleSignupButton,
                          size: 'xLarge',
                          style: [a, 'tablet' === e && Se.ctaButtonSplitSpacing],
                          testID: U.a.signupButton,
                          type: 'brandFilled',
                        },
                        le,
                      ),
                      S.a.createElement(
                        V.a,
                        {
                          link: '/login',
                          onPress: o._handleLoginButton,
                          size: 'xLarge',
                          style: a,
                          testID: U.a.loginButton,
                          type: 'brandOutlined',
                        },
                        he,
                      ),
                    ),
              )
            }),
            y()(u()(o), '_renderSSOButtons', function (e, t) {
              var a = o.state,
                n = a.buttonState,
                i = a.isCookieCompliant,
                c = e ? Se.ctaButton : Se.ctaButtonMobile,
                s = r()(r()({}, Se.ssoButtonStyles), {}, { width: t })
              return S.a.createElement(
                S.a.Fragment,
                null,
                S.a.createElement(O.a, {
                  buttonSize: 'medium',
                  buttonState: n,
                  customWidth: t,
                  displayType: J.e.Button,
                  isCookieCompliant:
                    o._cookieComplianceGingersnapEnabled && o._isPlaceholderSIWGButtonEnabled ? i : void 0,
                  onPress: o._handleCookieCompliance,
                  style: [c, 'tablet' === e && Se.ctaButtonSplitSpacing, s],
                }),
                S.a.createElement(_.a, {
                  buttonSize: 'medium',
                  buttonState: n,
                  style: [c, 'tablet' === e && Se.ctaButtonSplitSpacing, Se.ssoButtonStyles, Se.appleSsoButton],
                }),
              )
            }),
            y()(u()(o), '_renderUsernameInputField', function () {
              return S.a.createElement(
                j.a,
                { style: ve.inputContainer },
                S.a.createElement(re.b, {
                  onChange: o._handleUsernameChange,
                  onSubmitEditing: o._handleSubmitEditing,
                  style: ve.input,
                }),
              )
            }),
            y()(u()(o), '_renderHalfForm', function () {
              var e = o.state.usernameValue
              return S.a.createElement(
                j.a,
                { style: [ve.container, ve.halfForm] },
                o._renderUsernameInputField(),
                S.a.createElement(
                  V.a,
                  {
                    link: { pathname: '/login', query: { username_or_email: e } },
                    onPress: o._handleHalfFormLoginClick,
                    size: 'xLarge',
                    style: ve.submitButtonStyle,
                    type: 'brandOutlined',
                  },
                  he,
                ),
              )
            }),
            y()(u()(o), '_handleHalfFormLoginClick', function () {
              o.props.analytics.scribe({ component: 'half_form', element: 'login', action: 'click' })
            }),
            y()(u()(o), '_handleSubmitEditing', function () {
              o.setState({ autoSubmit: !0 })
            }),
            y()(u()(o), '_handleSignupButton', function () {
              o.props.analytics.scribe({
                section: 'front',
                component: 'signup_callout',
                element: 'form',
                action: 'signup',
              })
            }),
            y()(u()(o), '_handleLoginButton', function () {
              o.props.analytics.scribe({
                section: 'front',
                component: 'signup_callout',
                element: 'form',
                action: 'login',
              })
            }),
            y()(u()(o), '_handleUsernameChange', function (e) {
              o.setState({ usernameValue: e.target.value })
            }),
            y()(u()(o), '_handleCookieCompliance', function () {
              o.setState({ isCookieCompliant: !0 })
            }),
            (o.state = {
              autoSubmit: !1,
              buttonState: 'signup',
              isCookieCompliant: Object(Y.c)(o.context.featureSwitches) === Y.a.AcceptAllCookies,
            }),
            o
          )
        }
        return (
          s()(a, [
            {
              key: 'componentDidMount',
              value: function () {
                Object(H.a)() && this.context.setSideNavSupport(!1)
              },
            },
            {
              key: 'componentWillUnmount',
              value: function () {
                Object(H.a)() && this.context.setSideNavSupport(!0)
              },
            },
            {
              key: 'render',
              value: function () {
                var e = this,
                  t = !!ae.a[this._searchHomePageVariation]
                return S.a.createElement(
                  z.a,
                  null,
                  S.a.createElement(T.a, { title: me }),
                  S.a.createElement(A.a, {
                    canonical: 'https://twitter.com/',
                    description: fe,
                    title: me,
                    type: 'website',
                  }),
                  S.a.createElement(E.a, { deepLink: 'twitter://' }),
                  S.a.createElement(
                    L.a,
                    null,
                    S.a.createElement('meta', { content: 'NOODP', name: 'robots' }),
                    S.a.createElement('meta', { content: fe, name: 'description' }),
                  ),
                  S.a.createElement(W.a, null, function (a) {
                    var n = a.windowHeight,
                      r = a.windowWidth,
                      o = Object(X.e)(r, n),
                      i = o.deviceSize,
                      c = o.showLoginForm,
                      s = o.ssoButtonsWidth
                    return S.a.createElement(
                      j.a,
                      { style: Se.root },
                      t
                        ? S.a.createElement(ae.b, {
                            cookieComplianceFS:
                              e._cookieComplianceGingersnapEnabled && e._isPlaceholderSIWGButtonEnabled,
                            deviceSize: i,
                            variation: ae.a[e._searchHomePageVariation],
                          })
                        : S.a.createElement(
                            S.a.Fragment,
                            null,
                            S.a.createElement(
                              j.a,
                              { style: [Se.main, 'desktop' === i && Se.mainWide] },
                              e._renderCTA({ deviceSize: i, showLoginForm: c, ssoButtonsWidth: s }),
                              e._renderHero(i),
                            ),
                            S.a.createElement(ge, null, S.a.createElement(B.a, { align: 'center' })),
                          ),
                    )
                  }),
                )
              },
            },
            {
              key: '_renderHero',
              value: function (e) {
                var t = Object(X.d)(this.props.userLanguage),
                  a = t.original,
                  n = t.variants
                return S.a.createElement(
                  j.a,
                  { style: [Se.block, Se.communication, Se.blockHero] },
                  S.a.createElement(
                    j.a,
                    { style: Se.blockImg },
                    S.a.createElement(q.a, {
                      accessibilityLabel: '',
                      aspectMode: K.a.COVER,
                      backgroundColor: Q.a.theme.colors.blue500,
                      customVariants: n,
                      draggable: !1,
                      image: a,
                    }),
                    S.a.createElement(te.a, { style: [Se.twitterIconHero, 'desktop' === e && Se.twitterIconHeroWide] }),
                  ),
                )
              },
            },
            {
              key: '_renderCommunicationItems',
              value: function () {
                var e = oe.length
                return S.a.createElement(
                  j.a,
                  { style: Se.communicationItems },
                  oe.map(function (t, a) {
                    var n = t.Icon,
                      r = t.text,
                      o = a + 1 === e
                    return S.a.createElement(
                      j.a,
                      { key: r, style: [Se.communicationItem, o && Se.communicationItemLast] },
                      S.a.createElement(n, { style: Se.communicationItemIcon }),
                      S.a.createElement(
                        N.b,
                        { color: 'white', size: 'headline1', style: Se.communicationItemText, weight: 'bold' },
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
                  a = e.showLoginForm,
                  n = e.ssoButtonsWidth
                return S.a.createElement(
                  j.a,
                  { style: [Se.block, Se.blockCTA, 'tablet' === t && Se.blockTabletCTA] },
                  a ? this._renderLoginForm() : null,
                  S.a.createElement(
                    j.a,
                    { style: [Se.blockInnerWrapper, 'desktop' === t && Se.blockInnerWrapperWide] },
                    S.a.createElement(te.a, { style: Se.twitterIcon }),
                    S.a.createElement(
                      N.b,
                      { extendedWidth: !0, style: t ? Se.ctaTitleLarge : Se.ctaTitle, weight: 'bold' },
                      se,
                    ),
                    S.a.createElement(
                      N.b,
                      {
                        extendedWidth: !0,
                        size: t ? 'title2' : 'title4',
                        style: t ? Se.ctaTextLarge : Se.ctaText,
                        weight: 'bold',
                      },
                      ce,
                    ),
                    this._renderLoginSignupButtons(t, n),
                  ),
                )
              },
            },
            {
              key: '_renderLoginForm',
              value: function () {
                var e = this.state,
                  t = e.autoSubmit,
                  a = e.usernameValue,
                  n = a ? '?account_identifier='.concat(a) : '',
                  r = this.context.featureSwitches.getValue('responsive_web_inline_login_box_enabled'),
                  o = 'full' === r
                return 'none' === r
                  ? null
                  : 'half' === r
                  ? this._renderHalfForm()
                  : o
                  ? S.a.createElement(
                      j.a,
                      { style: ve.container },
                      S.a.createElement(
                        F.a,
                        {
                          autoSubmit: t,
                          horizontalLayout: !0,
                          submitButtonSize: 'xLarge',
                          submitButtonStyle: ve.submitButtonStyle,
                          submitButtonType: 'brandOutlined',
                        },
                        this._renderUsernameInputField(),
                        S.a.createElement(
                          j.a,
                          { style: ve.inputContainer },
                          S.a.createElement(re.a, { onSubmitEditing: this._handleSubmitEditing, style: ve.input }),
                          S.a.createElement(
                            N.b,
                            {
                              link: {
                                pathname: 'https://twitter.com/account/begin_password_reset'.concat(n),
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
          a
        )
      })(S.a.Component)
      y()(be, 'contextType', G.a)
      var ve = Q.a.create(function (e) {
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
        Se = Q.a.create(function (e) {
          return {
            root: { flex: 1 },
            main: { minHeight: 'auto' },
            mainWide: { flex: 'auto', flexDirection: 'row-reverse' },
            block: { justifyContent: 'center', padding: e.spaces.space16 },
            blockHero: { flex: 1, padding: 0, minHeight: '45vh' },
            blockImg: r()(
              r()({}, Q.a.absoluteFillObject),
              {},
              { flex: 1, resizeMode: 'cover', justifyContent: 'center', backgroundColor: e.colors.primary },
            ),
            blockCTA: { minWidth: '45vw' },
            blockTabletCTA: { maxWidth: '600px', margin: 'auto', width: '100%' },
            blockInnerWrapper: { width: '100%', padding: e.spaces.space20 },
            blockInnerWrapperWide: { minWidth: ''.concat(X.c, 'px'), maxWidth: ''.concat(X.b, 'px') },
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
              maxWidth: ''.concat(X.a, 'px'),
              paddingVertical: e.spaces.space16,
            },
            communicationItemText: { lineHeight: '30px', marginLeft: e.spaces.space16 },
            seeWhatsHappening: { marginTop: e.spaces.space20 },
            happeningButton: { marginBottom: e.spaces.space16 },
            joinToday: { marginTop: e.spaces.space64, marginBottom: e.spaces.space16 },
            ctaTitle: {
              fontSize: e.spaces.space40,
              letterSpacing: -0.8,
              lineHeight: ''.concat(Q.a.theme.spacesPx.space40 + Q.a.theme.spacesPx.space12, 'px'),
              marginVertical: e.spaces.space40,
            },
            ctaTitleLarge: {
              fontSize: e.spaces.space64,
              letterSpacing: -1.2,
              lineHeight: ''.concat(Q.a.theme.spacesPx.space64 + Q.a.theme.spacesPx.space20, 'px'),
              marginVertical: e.spaces.space48,
            },
            ctaText: { marginBottom: e.spaces.space20 },
            ctaTextLarge: { marginBottom: e.spaces.space32 },
            ctaButtonContainer: { flexDirection: 'row' },
            ctaButton: { marginBottom: e.spaces.space20, maxWidth: ''.concat(X.a, 'px'), flex: 1 },
            ssoButtonStyles: { marginBottom: e.spaces.space8, width: J.b, height: e.spaces.space40, flex: 'none' },
            appleSsoButton: { marginBottom: 0 },
            signInButtonContainer: { marginTop: Q.a.theme.spaces.space40 },
            gapContainer: { marginVertical: e.spaces.space4, maxWidth: ''.concat(X.a, 'px'), width: J.b },
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
            twitterIconHeroWide: { height: '50%', maxHeight: ''.concat(X.a, 'px') },
            bannerPadderChildren: { transitionProperty: 'margin-bottom', transitionDuration: '100ms' },
          }
        }),
        _e = I(be)
      t.default = _e
    },
    dC06: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return n
      })
      a('yH/f'), a('ERkP')
      var n = Object.freeze({
        Community: 'Community',
        Pin: 'Pin',
        Retweet: 'Retweet',
        Like: 'Like',
        Follow: 'Follow',
        Moment: 'Moment',
        NewTweets: 'NewTweets',
        Reply: 'Reply',
        Conversation: 'Conversation',
        TextOnly: 'TextOnly',
        Facepile: 'Facepile',
        Feedback: 'Feedback',
        Topic: 'Topic',
        List: 'List',
        Location: 'Location',
        Megaphone: 'Megaphone',
        Bird: 'Bird',
        NewUser: 'NewUser',
        SmartBlockExpiration: 'SmartBlockExpiration',
        FollowMutual: 'FollowMutual',
        FollowFollowing: 'FollowFollowing',
        FollowFollowed: 'FollowFollowed',
        SocialProof: 'SocialProof',
        Spaces: 'Spaces',
        Sparkle: 'Sparkle',
        Trending: 'Trending',
      })
    },
    dFWS: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        o = a('ERkP'),
        i = a.n(o),
        c = a('Lsrn'),
        s = a('k/Ka'),
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
    hiGS: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        o = a('ERkP'),
        i = a.n(o),
        c = a('Lsrn'),
        s = a('k/Ka'),
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
                d: 'M20.746 5.236h-3.75V4.25c0-1.24-1.01-2.25-2.25-2.25h-5.5c-1.24 0-2.25 1.01-2.25 2.25v.986h-3.75c-.414 0-.75.336-.75.75s.336.75.75.75h.368l1.583 13.262c.216 1.193 1.31 2.027 2.658 2.027h8.282c1.35 0 2.442-.834 2.664-2.072l1.577-13.217h.368c.414 0 .75-.336.75-.75s-.335-.75-.75-.75zM8.496 4.25c0-.413.337-.75.75-.75h5.5c.413 0 .75.337.75.75v.986h-7V4.25zm8.822 15.48c-.1.55-.664.795-1.18.795H7.854c-.517 0-1.083-.246-1.175-.75L5.126 6.735h13.74L17.32 19.732z',
              }),
              i.a.createElement('path', {
                d: 'M10 17.75c.414 0 .75-.336.75-.75v-7c0-.414-.336-.75-.75-.75s-.75.336-.75.75v7c0 .414.336.75.75.75zm4 0c.414 0 .75-.336.75-.75v-7c0-.414-.336-.75-.75-.75s-.75.336-.75.75v7c0 .414.336.75.75.75z',
              }),
            ),
          )
        }
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
    iKTg: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        o = a('ERkP'),
        i = a.n(o),
        c = a('Lsrn'),
        s = a('k/Ka'),
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
    n0Rl: function (e, t, a) {
      'use strict'
      a.d(t, 'b', function () {
        return z
      })
      var n = a('ddV6'),
        r = a.n(n),
        o = a('VrFO'),
        i = a.n(o),
        c = a('Y9Ll'),
        s = a.n(c),
        l = a('1Pcy'),
        u = a.n(l),
        d = a('5Yy7'),
        h = a.n(d),
        p = a('2VqO'),
        m = a.n(p),
        f = a('KEM+'),
        y = a.n(f),
        g = (a('2G9S'), a('lTEL'), a('7x/C'), a('87if'), a('ZUdG'), a('kYxP'), a('ERkP')),
        b = a.n(g),
        v = a('pXBW'),
        S = a('6/RC'),
        _ = a('UIzd'),
        E = a.n(_),
        w = a('kGix')
      a.d(t, 'a', function () {
        return w.a
      })
      var k = a('fs1G'),
        C = a('0KEI'),
        x = a('lU4h'),
        I = a.n(x),
        R = a('21nk'),
        T = a.n(R),
        B = a('bCEw'),
        O = a.n(B),
        L = a('Ud88'),
        D = a.n(L),
        P = function (e) {
          return (0, e.render)({ fetchStatus: w.a.LOADING, data: null, error: null, retry: k.a })
        },
        F = (function (e) {
          h()(a, e)
          var t = m()(a)
          function a() {
            var e
            i()(this, a)
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o]
            return (e = t.call.apply(t, [this].concat(r))), y()(u()(e), 'state', { error: null }), e
          }
          return (
            s()(
              a,
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
            a
          )
        })(b.a.Component),
        A = function (e) {
          var t = e.query,
            a = e.queryRef,
            n = e.render,
            r = T()(t, a)
          return n({ fetchStatus: w.a.LOADED, data: r, error: null, retry: k.a })
        },
        z = function (e, t) {
          if (S.canUseDOM)
            return function (a) {
              var n = a.fetchPolicy,
                o = void 0 === n ? 'store-or-network' : n,
                i = a.render,
                c = a.variables,
                s = O()(e),
                l = r()(s, 2),
                u = l[0],
                d = l[1],
                h = Object(C.useCreateLocalApiErrorHandler)(t.errorConfig.context),
                p = I()(c),
                m = r()(p, 1)[0],
                f = b.a.useCallback(
                  function () {
                    d(m, { fetchPolicy: 'network-only' })
                  },
                  [d, m],
                )
              return (
                b.a.useLayoutEffect(
                  function () {
                    d(m, { fetchPolicy: o })
                  },
                  [o, d, m],
                ),
                u
                  ? b.a.createElement(
                      b.a.Suspense,
                      { fallback: b.a.createElement(P, { render: i }) },
                      b.a.createElement(
                        F,
                        { errorHandler: h(t.errorConfig.options || {}), key: u.fetchKey, retry: f },
                        function (t, a) {
                          return t
                            ? i({ fetchStatus: w.a.FAILED, error: t, data: null, retry: a })
                            : b.a.createElement(A, { query: e, queryRef: u, render: i })
                        },
                      ),
                    )
                  : null
              )
            }
          var a = new WeakMap()
          return function (n) {
            n.fetchPolicy
            var o = n.render,
              i = n.variables,
              c = D()(),
              s = Object(C.useCreateLocalApiErrorHandler)(t.errorConfig.context),
              l = I()(i),
              u = r()(l, 1)[0],
              d = a.get(c)
            if (d) return d
            var h = b.a.lazy(function () {
              return E()(c, e, u)
                .toPromise()
                .then(
                  function (e) {
                    return o({ fetchStatus: w.a.LOADED, data: e, error: null, retry: k.a })
                  },
                  function (e) {
                    return e instanceof v.a
                      ? (s(t.errorConfig.options || {})(e),
                        o({ fetchStatus: w.a.FAILED, data: null, error: e, retry: k.a }))
                      : b.a.createElement(function () {
                          throw e
                        })
                  },
                )
                .then(function (e) {
                  return { default: a.set(c, e).get.bind(a, c) }
                })
            })
            return b.a.createElement(b.a.Suspense, null, b.a.createElement(h, null))
          }
        }
    },
    qjak: function (e, t, a) {
      'use strict'
      a('hBvt'), a('ho0z')
      var n = a('ERkP'),
        r = a.n(n),
        o = a('t62R'),
        i = a('MAI/'),
        c = a('shC7'),
        s = a('dC06'),
        l = a('rHpw'),
        u = a('3XMw'),
        d = a.n(u),
        h = a('FITr'),
        p = a('yVEN'),
        m = a('uCrx'),
        f = a('6ZHn'),
        y = a('GcQN'),
        g = a('x0mb'),
        b = a('Hp3u'),
        v = a('yiKp'),
        S = a.n(v),
        _ = a('Lsrn'),
        E = a('k/Ka'),
        w = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(E.a)(
            'svg',
            S()(
              S()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [_.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M19.75 2H4.25C3.01 2 2 3.01 2 4.25v13.003c0 1.24 1.01 2.25 2.25 2.25h4.56l2.59 3.45c.142.19.364.3.6.3.235 0 .457-.11.598-.3l2.588-3.45h4.563c1.24 0 2.25-1.01 2.25-2.25V4.25C22 3.01 20.99 2 19.75 2zM6.963 12.375c-.76 0-1.375-.616-1.375-1.375s.616-1.375 1.375-1.375S8.338 10.24 8.338 11s-.616 1.375-1.375 1.375zm4.85 0c-.76 0-1.375-.616-1.375-1.375s.616-1.375 1.375-1.375 1.375.616 1.375 1.375-.616 1.375-1.375 1.375zm4.85 0c-.76 0-1.375-.616-1.375-1.375s.616-1.375 1.375-1.375c.76 0 1.375.616 1.375 1.375s-.616 1.375-1.375 1.375z',
              }),
            ),
          )
        }
      w.metadata = { width: 24, height: 24 }
      var k = w,
        C = a('EHV7'),
        x = a('wpLu'),
        I = a('EfHu'),
        R = a('cOhU'),
        T = a('cap5'),
        B = a('r9x5'),
        O = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(E.a)(
            'svg',
            S()(
              S()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [_.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M12 1.25C6.072 1.25 1.25 6.072 1.25 12S6.072 22.75 12 22.75 22.75 17.928 22.75 12 17.928 1.25 12 1.25zm3.75 12.257c-.038 0-.074-.003-.11-.008l-3.667-.54s-.28-.048-.292-.053c-.343-.07-.602-.372-.602-.735V6.417c0-.414.336-.75.75-.75s.75.336.75.75v5.115l3.28.483c.41.06.692.44.632.852-.055.372-.375.64-.74.64z',
              }),
            ),
          )
        }
      O.metadata = { width: 24, height: 24 }
      var L = O,
        D = a('0qK0'),
        P = a('aPcQ'),
        F = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(E.a)(
            'svg',
            S()(
              S()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [_.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M8.417 11.816c1.355 0 2.872-.15 3.84-1.256.813-.93 1.077-2.367.806-4.392-.38-2.826-2.116-4.513-4.645-4.513-2.53 0-4.267 1.687-4.646 4.513-.273 2.025-.01 3.462.805 4.393.968 1.108 2.485 1.257 3.84 1.257zm8.28 7.42c-.88-3.526-4.283-5.99-8.28-5.99-3.998 0-7.403 2.464-8.28 5.99-.172.692-.03 1.4.395 1.94.408.52 1.04.82 1.733.82H14.57c.69 0 1.323-.3 1.73-.82.425-.54.568-1.246.396-1.94zM23.24 3.47h-5.624l1.64-1.642c.315-.316.315-.827 0-1.143-.316-.315-.826-.316-1.143 0l-2.96 2.96c-.16.16-.238.366-.238.572 0 .207.08.414.237.57l2.96 2.962c.16.156.365.234.572.234s.413-.08.57-.236c.316-.316.316-.828 0-1.144l-1.64-1.64h5.623c.414 0 .75-.336.75-.75s-.334-.747-.748-.747z',
              }),
            ),
          )
        }
      F.metadata = { width: 24, height: 24 }
      var A = F,
        z = a('lUZE'),
        H = d.a.jb767df7,
        U = d.a.bb3323fa,
        j = d.a.db0798ed,
        M = d.a.dc716ec8,
        N = function (e) {
          return r.a.createElement(o.b, { dir: c.a.getConstants().isRTL ? 'rtl' : 'ltr', withHashflags: !0 }, e)
        },
        V = function (e, t) {
          return t
            ? H
            : (function (e) {
                var t = N(e)
                return r.a.createElement(d.a.I18NFormatMessage, { $i18n: 'h99e9c95' }, t)
              })(e)
        },
        W = l.a.create(function (e) {
          return {
            small: { height: e.lineHeights.subtext3, width: e.lineHeights.subtext3 },
            large: { height: e.lineHeights.subtext1, width: e.lineHeights.subtext1 },
            xLarge: { height: e.lineHeights.headline1, width: e.lineHeights.headline1 },
          }
        }),
        q = l.a.create(function (e) {
          return {
            circle: { color: e.colors.primary, width: '0.5em' },
            colorDeepGray: { color: e.colors.gray700 },
            colorBlue: { color: e.colors.blue500 },
            colorGreen: { color: e.colors.green500 },
            colorOrange: { color: e.colors.orange500 },
            colorPrimary: { color: e.colors.primary },
            colorRed: { color: e.colors.magenta500 },
            grayscaleImage: { borderRadius: e.borderRadii.infinite, filter: 'grayscale(100%)' },
            brandColor: { color: e.colors.brandColor },
          }
        })
      t.a = function (e) {
        var t = e.contextType,
          a = e.iconSize,
          n = e.link,
          o = e.retweetData,
          c = e.text,
          l = e.topicData,
          u = e.userAvatarUrls,
          d = o || {},
          v = d.isSelfRetweet,
          S = d.name,
          _ = d.screenName,
          E = (function (e, t) {
            var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
              n = W[t],
              o = [q.colorDeepGray, n],
              c = r.a.createElement(h.a, { style: o }),
              l = r.a.createElement(p.a, { style: o }),
              u = r.a.createElement(m.a, { style: o }),
              d = r.a.createElement(f.a, { style: o }),
              v = r.a.createElement(y.a, { style: o }),
              S = r.a.createElement(g.a, { style: q.circle }),
              _ = r.a.createElement(b.a, { style: o }),
              E = r.a.createElement(k, { style: o }),
              w = r.a.createElement(C.a, { style: o }),
              O = r.a.createElement(x.a, { style: o }),
              F = r.a.createElement(I.a, { style: o }),
              H = r.a.createElement(R.a, { style: o }),
              U = r.a.createElement(T.a, { style: o }),
              j = r.a.createElement(B.a, { style: o }),
              M = r.a.createElement(L, { style: o }),
              N = r.a.createElement(D.a, { style: o }),
              V = r.a.createElement(P.a, { style: o }),
              K = r.a.createElement(A, { style: o }),
              Q = r.a.createElement(i.a, { borderColor: 'cellBackground', userAvatarSize: t, userAvatarUrls: a }),
              G = r.a.createElement(z.a, { style: o })
            switch (e) {
              case s.a.Pin:
                return c
              case s.a.Retweet:
                return l
              case s.a.Like:
                return u
              case s.a.Follow:
                return d
              case s.a.Moment:
                return v
              case s.a.NewTweets:
                return S
              case s.a.Reply:
              case s.a.Conversation:
                return _
              case s.a.Feedback:
                return E
              case s.a.Topic:
                return w
              case s.a.List:
                return O
              case s.a.Location:
                return F
              case s.a.Community:
                return H
              case s.a.Spaces:
                return U
              case s.a.Sparkle:
                return j
              case s.a.SmartBlockExpiration:
                return M
              case s.a.SocialProof:
              case s.a.FollowFollowed:
                return K
              case s.a.FollowMutual:
                return V
              case s.a.FollowFollowing:
                return N
              case s.a.Facepile:
                return Q
              case s.a.Bird:
                return G
              case s.a.TextOnly:
              default:
                return null
            }
          })(t, a, u)
        switch (t) {
          case s.a.Retweet:
            return { Icon: E, text: c || V(S, v), link: _ ? 'https://twitter.com/'.concat(_) : void 0 }
          case s.a.Pin:
            return { Icon: E, text: c || U }
          case s.a.Topic:
            return {
              Icon: E,
              accessibilityLabel:
                'Recommendation' === (null == l ? void 0 : l.functionalityType) ||
                'RecWithEducation' === (null == l ? void 0 : l.functionalityType)
                  ? M({ topicName: c })
                  : j({ topicName: c }),
              text: c ? N(c) : null,
              link: n,
            }
          default:
            return { Icon: E, text: c ? N(c) : null, link: n }
        }
      }
    },
    r9x5: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        o = a('ERkP'),
        i = a.n(o),
        c = a('Lsrn'),
        s = a('k/Ka'),
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
                d: 'M22.772 10.506l-5.618-2.192-2.16-6.5c-.102-.307-.39-.514-.712-.514s-.61.207-.712.513l-2.16 6.5-5.62 2.192c-.287.112-.477.39-.477.7s.19.585.478.698l5.62 2.192 2.16 6.5c.102.306.39.513.712.513s.61-.207.712-.513l2.16-6.5 5.62-2.192c.287-.112.477-.39.477-.7s-.19-.585-.478-.697zM7.413 4.562c0-.414-.336-.75-.75-.75h-1.88V2.05c0-.414-.337-.75-.75-.75s-.75.336-.75.75v1.762H1.5c-.414 0-.75.336-.75.75s.336.75.75.75h1.782v1.762c0 .414.336.75.75.75s.75-.336.75-.75V5.312h1.88c.415 0 .75-.336.75-.75zm1.785 14.872h-1.1v-1.016c0-.414-.335-.75-.75-.75s-.75.336-.75.75v1.016H5.57c-.414 0-.75.336-.75.75s.336.75.75.75H6.6v1.016c0 .414.335.75.75.75s.75-.336.75-.75v-1.016h1.098c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z',
              }),
            ),
          )
        }
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
    rRIm: function (e, t, a) {
      'use strict'
      a.d(t, 'b', function () {
        return V
      })
      var n = a('yiKp'),
        r = a.n(n),
        o = a('VrFO'),
        i = a.n(o),
        c = a('Y9Ll'),
        s = a.n(c),
        l = a('1Pcy'),
        u = a.n(l),
        d = a('5Yy7'),
        h = a.n(d),
        p = a('2VqO'),
        m = a.n(p),
        f = a('KEM+'),
        y = a.n(f),
        g = (a('2G9S'), a('KqXw'), a('LJOr'), a('ERkP')),
        b = a.n(g),
        v = a('sTyV'),
        S = a('6/RC'),
        _ = a('sebV'),
        E = a('G6rE'),
        w = a('rxPX'),
        k = Object(w.a)()
          .propsFromState(function () {
            return { loggedInUser: E.e.selectLoggedInUser }
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUser
            return { loggedInUserScreenName: t ? t.screen_name : void 0 }
          }),
        C = a('3XMw'),
        x = a.n(C),
        I = a('OrGc'),
        R = a('QK5w'),
        T = a('aITJ'),
        B = a('MWbm'),
        O = a('TnY3'),
        L = a('rHpw'),
        D = a('t62R'),
        P = a('v6aA'),
        F = a('uScj'),
        A = a('fs1G'),
        z = a('BcsE'),
        H = a('VPAj'),
        U = x.a.b47e760d,
        j = x.a.fd2c7b43,
        M = new F.a(),
        N = function (e) {
          if (e.target instanceof HTMLInputElement) {
            var t = e.target.tagName.toLowerCase()
            return 'input' === t || 'textarea' === t
          }
          return !1
        },
        V = function (e) {
          return S.canUseDOM ? M.subscribe(e).unsubscribe : A.a
        },
        W = (function (e) {
          h()(a, e)
          var t = m()(a)
          function a() {
            var e
            i()(this, a)
            for (var n = arguments.length, o = new Array(n), c = 0; c < n; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              y()(u()(e), '_bindKeyboardShortcuts', function () {
                var t,
                  a,
                  n = e.props,
                  o = n.history,
                  i = n.loggedInUserScreenName,
                  c = function (e) {
                    return function (t) {
                      t.preventDefault(),
                        M.getListeners().length
                          ? M.notify(e)
                          : o.push({ pathname: '/explore', state: { searchFocused: !0, searchPrefill: e } })
                    }
                  },
                  s =
                    ((t = {}),
                    y()(t, I.e.search, c()),
                    y()(t, I.e.goToUser, c('@')),
                    y()(t, I.e.openKeyboardShortcuts, function () {
                      return o.push('/i/keyboard_shortcuts')
                    }),
                    y()(t, I.e.goExplore, function () {
                      return o.push('/explore')
                    }),
                    y()(t, I.e.goSettings, function () {
                      return o.push('/settings')
                    }),
                    t),
                  l = function (e) {
                    var t
                    return (
                      (t = {}),
                      y()(t, I.e.goProfile, function () {
                        return o.push('/'.concat(e))
                      }),
                      y()(t, I.e.goLikes, function () {
                        return o.push('/'.concat(e, '/likes'))
                      }),
                      y()(t, I.e.goLists, function () {
                        return o.push('/'.concat(e, '/lists'))
                      }),
                      t
                    )
                  },
                  u = e.context.userClaims.isTrueAndEnabled('subscriptions_feature_1007'),
                  d =
                    i && u
                      ? r()(
                          r()({}, l(i)),
                          {},
                          y()({}, I.e.goTopArticles, function () {
                            return o.push('/i/articles')
                          }),
                        )
                      : i
                      ? l(i)
                      : {},
                  h = r()(
                    r()(r()({}, s), d),
                    {},
                    ((a = {}),
                    y()(a, I.e.goHome, function () {
                      return o.push('/home')
                    }),
                    y()(a, I.e.goDisplay, function () {
                      return o.push('/i/display')
                    }),
                    y()(a, I.e.goNotifications, function () {
                      return o.push('/notifications')
                    }),
                    y()(a, I.e.goMentions, function () {
                      return o.push('/notifications/mentions')
                    }),
                    y()(a, I.e.goMessages, function () {
                      return o.push('/messages')
                    }),
                    y()(a, I.e.newMessage, function () {
                      return o.push('/messages/compose')
                    }),
                    y()(a, I.e.newTweet, function () {
                      return o.push('/compose/tweet')
                    }),
                    y()(a, I.e.goMomentMaker, function () {
                      return o.push('/i/moment_maker')
                    }),
                    y()(a, I.e.goBookmarks, function () {
                      return o.push('/i/bookmarks')
                    }),
                    a),
                  ),
                  p = e.props.loggedInUserScreenName ? h : s
                e._unbindKeyboardShortcuts = Object(v.a)(p)
              }),
              y()(u()(e), '_handleKeyDown', function (t) {
                N(t) ||
                  'Backspace' !== t.key ||
                  ((e._backspaceDown = Date.now()), t.preventDefault(), t.stopPropagation())
              }),
              y()(u()(e), '_handleKeyUp', function (t) {
                if (!N(t) && 'Backspace' === t.key) {
                  t.preventDefault(), t.stopPropagation()
                  var a = e._backspaceDown,
                    n = !!Object(z.a)(a) && Date.now() - a < 500,
                    r = Object(R.a)({}, { location: e.props.location })
                  n && r ? e.props.history.goBack() : window.close()
                }
              }),
              e
            )
          }
          return (
            s()(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._bindKeyboardShortcuts(),
                    T.b.isKaiOS() &&
                      _.a.isStandaloneApp() &&
                      (document.addEventListener('keydown', this._handleKeyDown),
                      document.addEventListener('keyup', this._handleKeyUp))
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._unbindKeyboardShortcuts && this._unbindKeyboardShortcuts(),
                    T.b.isKaiOS() &&
                      _.a.isStandaloneApp() &&
                      (document.removeEventListener('keydown', this._handleKeyDown),
                      document.removeEventListener('keyup', this._handleKeyUp))
                },
              },
              {
                key: 'render',
                value: function () {
                  return this.props.loggedInUserScreenName
                    ? b.a.createElement(
                        B.a,
                        { accessibilityLevel: 2, accessibilityRole: 'heading', style: L.a.visuallyHidden },
                        b.a.createElement(D.b, null, U),
                        b.a.createElement(D.b, { focusable: !1, link: '/i/keyboard_shortcuts' }, j),
                      )
                    : null
                },
              },
            ]),
            a
          )
        })(b.a.Component)
      y()(W, 'contextType', P.a)
      var q = k(W),
        K = S.canUseDOM ? Object(O.a)(q) : Object(H.a)(null)
      t.a = K
    },
    sYRn: function (e, t, a) {
      'use strict'
      var n = a('ERkP'),
        r = a.n(n),
        o = a('eb3s'),
        i = a('3XMw'),
        c = a.n(i),
        s = a('4ZbN'),
        l = c.a.hffea05c,
        u = c.a.j037e373,
        d = c.a.d96cf7cd
      t.a = function (e) {
        var t = e.onCancel,
          a = e.onConfirm
        return r.a.createElement(o.a, {
          confirmButtonLabel: d,
          confirmButtonType: 'destructiveFilled',
          headline: l,
          onCancel: t,
          onConfirm: a,
          testID: s.a.deleteSavedSearchDialog,
          text: u,
        })
      }
    },
    u3ZE: function (e, t, a) {
      'use strict'
      t.a = {
        AdvancedSearchPage: 'advanced_search_page',
        CashtagClick: 'cashtag_click',
        HashtagClick: 'hashtag_click',
        PromotedTrendClick: 'promoted_trend_click',
        RecentSearchClick: 'recent_search_click',
        SavedSearchClick: 'saved_search_click',
        RelatedQueryClick: 'related_query_click',
        SpellingCorrectionClick: 'spelling_correction_click',
        SpellingCorrectionRevertClick: 'spelling_suggestion_revert_click',
        SpellingExpansionClick: 'spelling_expansion_click',
        SpellingExpansionRevertClick: 'spelling_expansion_revert_click',
        SpellingSuggestionClick: 'spelling_suggestion_click',
        TrendClick: 'trend_click',
        TrendView: 'trend_view',
        TypeaheadClick: 'typeahead_click',
        Typed: 'typed_query',
        TweetDetailQuoteTweet: 'tdqt',
      }
    },
    v4XE: function (e, t, a) {
      'use strict'
      a.d(t, 'd', function () {
        return E
      }),
        a.d(t, 'c', function () {
          return w
        }),
        a.d(t, 'a', function () {
          return k
        }),
        a.d(t, 'b', function () {
          return C
        })
      var n = a('KEM+'),
        r = a.n(n),
        o = a('RhWx'),
        i = a.n(o),
        c = a('yiKp'),
        s = a.n(c),
        l = a('T0aG'),
        u = a.n(l),
        d = (a('yH/f'), a('2G9S'), a('LW0h'), a('7x/C'), a('JtPf'), a('oEOe')),
        h = a('kGix'),
        p = a('Ssj5'),
        m = a('SrIh'),
        f = a('RqPI'),
        y = 'savedSearches',
        g = { fetchStatus: h.a.NONE, savedSearches: [] },
        b = Object.freeze({
          REQUEST: 'rweb/savedSearches/FETCH_SAVED_SEARCHES_REQUEST',
          SUCCESS: 'rweb/savedSearches/FETCH_SAVED_SEARCHES_SUCCESS',
          FAILURE: 'rweb/savedSearches/FETCH_SAVED_SEARCHES_FAILURE',
        }),
        v = Object.freeze({
          REQUEST: 'rweb/savedSearches/SAVE_SEARCH_REQUEST',
          SUCCESS: 'rweb/savedSearches/SAVE_SEARCH_SUCCESS',
          FAILURE: 'rweb/savedSearches/SAVE_SEARCH_FAILURE',
        }),
        S = Object.freeze({
          REQUEST: 'rweb/savedSearches/DELETE_SAVED_SEARCH_REQUEST',
          SUCCESS: 'rweb/savedSearches/DELETE_SAVED_SEARCH_SUCCESS',
          FAILURE: 'rweb/savedSearches/DELETE_SAVED_SEARCH_FAILURE',
        })
      function _() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g,
          t = arguments.length > 1 ? arguments[1] : void 0
        switch (t.type) {
          case b.SUCCESS:
            var a = t.payload,
              n = Array.isArray(a)
            return (
              n ||
                Object(m.a)('Saved search results are not type array', { extra: { savedSearchResultsType: u()(a) } }),
              s()(s()({}, e), {}, { fetchStatus: h.a.LOADED, savedSearches: n && a ? a : [] })
            )
          case b.FAILURE:
            return s()(s()({}, e), {}, { fetchStatus: h.a.FAILED })
          case v.SUCCESS:
            return s()(
              s()({}, e),
              {},
              { savedSearches: t.payload ? [].concat(i()(e.savedSearches), [t.payload]) : e.savedSearches },
            )
          case S.SUCCESS:
            return t.payload
              ? s()(
                  s()({}, e),
                  {},
                  {
                    savedSearches: e.savedSearches.filter(function (e) {
                      return e.id_str !== t.payload.id_str
                    }),
                  },
                )
              : e
          default:
            return e
        }
      }
      p.a.register(r()({}, y, _))
      var E = function (e) {
          return e.savedSearches.savedSearches
        },
        w = function (e) {
          return function (t, a, n) {
            var r = n.api
            return Object(d.b)(t, { request: r.SavedSearches.create, params: { query: e } })({
              actionTypes: v,
              context: 'SAVE_SEARCH',
            })
          }
        },
        k = function (e) {
          return function (t, a, n) {
            var r = n.api
            return Object(d.b)(t, { request: r.SavedSearches.destroy, params: { id: e } })({
              actionTypes: S,
              context: 'DELETE_SAVED_SEARCH',
            })
          }
        },
        C = function () {
          return function (e, t, a) {
            a.api
            var n = t()
            return Object(f.m)(n)
              ? (function (e) {
                  return e.savedSearches.fetchStatus
                })(n) === h.a.LOADED
                ? Promise.resolve()
                : e(function (e, t, a) {
                    var n = a.api
                    return Object(d.b)(e, { request: n.SavedSearches.fetch, params: {} })({
                      actionTypes: b,
                      context: 'FETCH_SAVED_SEARCHES',
                    })
                  })
              : Promise.resolve()
          }
        }
    },
    wtjx: function (e, t, a) {
      'use strict'
      a.d(t, 'g', function () {
        return m
      }),
        a.d(t, 'f', function () {
          return f
        }),
        a.d(t, 'e', function () {
          return y
        }),
        a.d(t, 'd', function () {
          return S
        }),
        a.d(t, 'b', function () {
          return E
        }),
        a.d(t, 'a', function () {
          return k
        }),
        a.d(t, 'c', function () {
          return C
        })
      var n = a('KEM+'),
        r = a.n(n),
        o = a('yiKp'),
        i = a.n(o),
        c = (a('7x/C'), a('JtPf'), a('LW0h'), a('Ee2X'), a('Ssj5')),
        s = a('RqPI'),
        l = 'recentSearches',
        u = 'rweb.recentSearches',
        d = function (e) {
          return function (t, a, n) {
            return n.userPersistence.set(u, { recentSearches: e }).catch(function () {
              Promise.resolve()
            })
          }
        },
        h = function (e, t) {
          var a = []
          if (e && e.user) {
            var n = e.user
            a = t.filter(function (e) {
              return e.keyword || e.topic || e.event || (e.user && e.user.id !== n.id)
            })
          } else if (e && e.topic) {
            var r = e.topic
            a = t.filter(function (e) {
              return e.keyword || e.user || e.event || (e.topic && e.topic.id !== r.id)
            })
          } else if (e && e.event) {
            var o = e.event
            a = t.filter(function (e) {
              return e.keyword || e.user || e.topic || (e.event && e.event.id !== o.id)
            })
          } else if (e && e.keyword) {
            var i = e.keyword
            a = t.filter(function (e) {
              return (e.keyword && e.keyword.query !== i.query) || e.user || e.topic || e.event
            })
          }
          return a
        },
        p = { fetched: !1, recentSearches: [] }
      var m = function (e) {
          return e.recentSearches.recentSearches
        },
        f = function (e) {
          return m(e)[0] || null
        },
        y = function (e) {
          return e.recentSearches.fetched
        },
        g = 'rweb/recentSearches/INIT_FROM_CACHE',
        b = function (e) {
          return { type: g, payload: e }
        },
        v = 'rweb/recentSearches/REMOVE_QUERY',
        S = function (e) {
          return function (t, a, n) {
            n.userPersistence
            t({ payload: e, type: v })
            var r = a().recentSearches
            return Object(s.m)(a()) ? t(d(r.recentSearches)) : Promise.resolve()
          }
        },
        _ = 'rweb/recentSearches/CLEAR_ALL',
        E = function () {
          return function (e, t, a) {
            a.userPersistence
            e({ type: _ })
            var n = t().recentSearches
            return Object(s.m)(t()) ? e(d(n.recentSearches)) : Promise.resolve()
          }
        },
        w = 'rweb/recentSearches/ADD_QUERY',
        k = function (e) {
          return function (t, a, n) {
            n.userPersistence
            t({ payload: e, type: w })
            var r = a().recentSearches
            return Object(s.m)(a()) ? t(d(r.recentSearches)) : Promise.resolve()
          }
        },
        C = function () {
          return function (e, t, a) {
            a.userPersistence
            return t().recentSearches.fetched
              ? Promise.resolve()
              : e(function (e, t, a) {
                  var n = a.userPersistence,
                    r = t()
                  return Object(s.m)(r)
                    ? n
                        .get(u)
                        .then(function (t) {
                          e(b(t))
                        })
                        .catch(function () {
                          e(b())
                        })
                    : (e(b()), Promise.resolve())
                })
          }
        }
      c.a.register(
        r()({}, l, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case w:
              var a = t.payload,
                n = a ? h(a, e.recentSearches) : []
              return n.length > 49 && n.splice(49, 1), a && n.unshift(a), i()(i()({}, e), {}, { recentSearches: n })
            case v:
              var r = t.payload,
                o = r ? h(r, e.recentSearches) : []
              return i()(i()({}, e), {}, { recentSearches: o })
            case _:
              return { fetched: !0, recentSearches: [] }
            case g:
              return i()(i()(i()({}, e), t.payload), {}, { fetched: !0 })
            default:
              return e
          }
        }),
      )
    },
    wz7L: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        o = a('ERkP'),
        i = a.n(o),
        c = a('Lsrn'),
        s = a('k/Ka'),
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
    x0mb: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        o = a('ERkP'),
        i = a.n(o),
        c = a('Lsrn'),
        s = a('k/Ka'),
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
                d: 'M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75z',
              }),
            ),
          )
        }
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
    x1T0: function (e, t, a) {
      'use strict'
      a.r(t)
      var n,
        r = {
          fragment: {
            argumentDefinitions: [],
            kind: 'Fragment',
            metadata: null,
            name: 'LoggedOutSearchHomeTrendsListQuery',
            selections: (n = [
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
            selections: n,
          },
          params: {
            id: 'jFSVxO6XekDkqa9LhEqxug',
            metadata: {},
            name: 'LoggedOutSearchHomeTrendsListQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(r.hash = 'd776a0f7400b83db0b925f0352d2b751'), (t.default = r)
    },
  },
])
//# sourceMappingURL=WIPED
