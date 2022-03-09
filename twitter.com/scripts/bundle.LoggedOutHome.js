;(window.webpackJsonp = window.webpackJsonp || []).push([
  [66],
  {
    '21nk': function (e, t, n) {
      'use strict'
      var a = n('I9iR'),
        r = n('3KVO'),
        o = n('yLYC'),
        c = n('Ud88'),
        i = (n('/2Cm'), n('aQQo').useTrackLoadQueryInRender),
        s = (n('ERkP').useDebugValue, n('K1lQ').__internal),
        l = s.fetchQueryDeduped,
        u = s.fetchQuery
      e.exports = function (e, t, n) {
        i()
        var s,
          d = c(),
          p = t.fetchKey,
          h = t.fetchPolicy,
          m = t.source,
          f = t.variables,
          y = t.networkCacheConfig,
          g = o(e, f, y)
        if ('PreloadedQuery_DEPRECATED' === t.kind)
          g.request.node.params.name !== t.name && a(!1),
            (s = {
              componentDisplayName: 'usePreloadedQuery()',
              fetchKey: p,
              fetchObservable: l(d, g.request.identifier, function () {
                return d === t.environment && null != m
                  ? d.executeWithSource({ operation: g, source: m })
                  : d.execute({ operation: g })
              }),
              fetchPolicy: h,
              query: g,
              renderPolicy: null == n ? void 0 : n.UNSTABLE_renderPolicy,
            })
        else {
          var b = u(d, g)
          s = {
            componentDisplayName: 'usePreloadedQuery()',
            fetchObservable: null != m && d === t.environment ? m.ifEmpty(b) : (t.environment, b),
            fetchKey: p,
            fetchPolicy: h,
            query: g,
            renderPolicy: null == n ? void 0 : n.UNSTABLE_renderPolicy,
          }
        }
        return r(s)
      }
    },
    '23An': function (e, t, n) {
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
    '3rEN': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return re
      })
      n('yH/f'), n('KqXw'), n('Ysgh')
      var a,
        r = n('ERkP'),
        o = n.n(r),
        c = n('Hde2'),
        i = n('bojF'),
        s = n('3XMw'),
        l = n.n(s),
        u = n('lUZE'),
        d = n('1f8Q'),
        p = n('rHpw'),
        h = n('MWbm'),
        m = n('yiKp'),
        f = n.n(m),
        y = (n('M+/F'), n('z84I'), n('uFXj'), n('2G9S'), n('FQwk')),
        g = n('iCMz'),
        b = n('Rp9C'),
        v = n('72nz'),
        S = n('Irs7'),
        _ = n('htQn'),
        E = n('t62R'),
        k = l.a.d228a9a0,
        w = l.a.jae84f3a,
        C = { section: 'logged_out_search', component: 'trend' },
        I = function (e) {
          var t = e.position,
            n = e.trend,
            a = Object(S.b)(),
            r = o.a.useMemo(
              function () {
                return [f()(f()({}, b.a.getTrendItem(n)), {}, { position: t })]
              },
              [n, t],
            )
          o.a.useEffect(
            function () {
              a.scribe(f()(f()({}, C), {}, { action: 'impression', data: { items: r } }))
            },
            [a, r],
          )
          var c = '/search?src=logged_out_home_trend_click&vertical=trends&q='.concat(encodeURIComponent(n))
          return o.a.createElement(
            _.a,
            {
              accessibilityRole: 'listitem',
              onClick: function () {
                return a.scribe(f()(f()({}, C), {}, { action: 'click', data: { items: r } }))
              },
              withInteractiveStyling: !1,
            },
            o.a.createElement(E.b, { color: 'gray700', key: n, link: c, size: 'body', style: T.searchTrend }, n),
          )
        },
        x = function (e) {
          var t = e.alignment,
            n = (e.deviceSize, e.trendResults.slice(0, 5))
          return o.a.createElement(
            h.a,
            {
              accessibilityLabel: w,
              accessibilityRole: 'list',
              style: [T.searchTrends, 'left' === t && T.searchTrendsLeft],
            },
            n.map(function (e, t) {
              return o.a.createElement(I, { key: e, position: t, trend: e })
            }),
            o.a.createElement(
              _.a,
              { accessibilityRole: 'listitem', withInteractiveStyling: !1 },
              o.a.createElement(E.b, { link: '/explore', style: T.searchTrend }, k),
            ),
          )
        },
        R = function (e) {
          var t = e.alignment,
            n = e.deviceSize,
            a = e.trendResults,
            r = 'tablet' !== n && 'desktop' !== n
          return o.a.createElement(
            h.a,
            {
              style: [
                T.searchBoxTrendsContainer,
                r && T.searchBoxTrendsContainerMobile,
                'tablet' === n && T.searchBoxTrendsContainerTablet,
                'desktop' === n && T.searchBoxTrendsContainerDesktop,
              ],
            },
            o.a.createElement(
              h.a,
              { style: T.searchBox },
              o.a.createElement(v.default, { forceVdlDisable: !1, isOnHomepage: !0, shouldHandleSearchShortcut: !0 }),
            ),
            a && o.a.createElement(x, { alignment: t, deviceSize: n, trendResults: a }),
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
        O = function (e) {
          var t = e.deviceSize,
            n = e.trendResults,
            a = function () {
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
              ? o.a.createElement(c.a, { style: T.bottomBarForMobile }, a())
              : o.a.createElement(
                  h.a,
                  { style: T.searchNavBar },
                  o.a.createElement(h.a, { style: T.searchNavButtons }, a()),
                ),
            o.a.createElement(
              h.a,
              { style: [T.searchRoot, 'desktop' !== t && T.searchRootMobile] },
              o.a.createElement(u.a, { style: T.twitterIconSearch }),
              o.a.createElement(R, { deviceSize: t, trendResults: n }),
            ),
            o.a.createElement(
              i.CookieComplianceBannerPadder,
              null,
              o.a.createElement(
                h.a,
                { style: [T.searchHomeFooter, 'desktop' !== t && T.searchHomeFooterMobile] },
                o.a.createElement(y.a, { align: 'center' }),
              ),
            ),
          )
        },
        B = l.a.g0ff1ca8,
        D = l.a.g3aa4a89,
        L = p.a.create(function (e) {
          return {
            bottomBarBanner: {
              paddingBottom: p.a.iPhoneOffsetBottom,
              backgroundColor: e.colors.primary,
              boxShadow: e.boxShadows.medium,
            },
            searchRootWithBanner: { marginTop: '30vh', marginBottom: '0' },
          }
        }),
        P = function (e) {
          var t = e.deviceSize,
            n = e.trendResults
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(
              h.a,
              { style: [T.searchRoot, 'desktop' !== t && T.searchRootMobile, L.searchRootWithBanner] },
              o.a.createElement(u.a, { style: T.twitterIconSearch }),
              o.a.createElement(R, { deviceSize: t, trendResults: n }),
            ),
            o.a.createElement(
              i.CookieComplianceBannerPadder,
              null,
              o.a.createElement(
                c.a,
                { style: L.bottomBarBanner },
                o.a.createElement(d.a, { buttonSize: 'large', fullWidth: !0, subtext: D, text: B }),
              ),
            ),
          )
        },
        A = n('n0Rl'),
        F = n('RgK2'),
        U = n.n(F),
        j = n('kGix'),
        z = (n('enFi'), n('ddV6')),
        H = n.n(z),
        N = (n('0zG9'), n('UpKB')),
        M = n('v6aA'),
        W = n('5P4+'),
        q = n('kG2l'),
        V = n('JkIr'),
        K = n('0yYu'),
        Q = n('/yvb'),
        G = n('AS3p'),
        X = n('1zbE'),
        Y = l.a.ca86b62c,
        J = l.a.aa95ddc0,
        Z = l.a.b0dbe914,
        $ = l.a.ae03a21c,
        ee = 360,
        te = function (e) {
          var t = e.buttonState,
            n = e.cookieComplianceFS,
            a = e.deviceSize,
            r = o.a.useContext(M.a).featureSwitches,
            c = Object(G.c)(r) === G.a.AcceptAllCookies,
            i = o.a.useState(c),
            s = H()(i, 2),
            l = s[0],
            u = s[1],
            d = 'tablet' !== a && 'desktop' !== a
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(q.a, {
              buttonSize: 'medium',
              buttonState: t,
              customWidth: d ? 300 : ee,
              isCookieCompliant: n ? l : void 0,
              onPress: function () {
                u(!0)
              },
              style: [ne.ctaButton, ne.ssoButtonStyles, d && ne.containerThin],
            }),
            o.a.createElement(N.a, {
              buttonSize: 'medium',
              buttonState: t,
              style: [ne.ctaButton, ne.ssoButtonStyles, { marginBottom: 0 }, d && ne.containerThin],
            }),
          )
        },
        ne = p.a.create(function (e) {
          return {
            containerThin: { width: 300 },
            ctaButton: { maxWidth: ''.concat(W.a, 'px'), flex: 1 },
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
            gapContainer: { marginVertical: e.spaces.space4, maxWidth: ''.concat(W.a, 'px'), width: ee },
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
            r = o.a.useState(X.a.SignUp),
            c = H()(r, 2),
            s = c[0],
            d = c[1],
            p = Object(S.b)(),
            m = 'tablet' !== n && 'desktop' !== n,
            f = function () {
              p.scribe({ section: 'front', component: 'signup_callout', element: 'form', action: 'signup' })
            },
            g = function () {
              p.scribe({ section: 'front', component: 'signup_callout', element: 'form', action: 'login' })
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
            k = b.loginSignUpButtonLink,
            w = o.a.createElement(
              h.a,
              { style: [ne.footerContainer, m && ne.containerThin] },
              o.a.createElement(E.b, { color: 'gray700', size: 'subtext2', style: ne.ctaText }, X.c),
              o.a.createElement(
                E.b,
                { align: 'left', style: !n && ne.ctaText, testID: V.a.logInSignUpFooter, weight: 'medium' },
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
              o.a.createElement(te, { buttonState: s, cookieComplianceFS: t, deviceSize: n }),
              o.a.createElement(
                h.a,
                { style: [ne.gapContainer, m && ne.containerThin] },
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
                  link: k,
                  onPress: v,
                  size: 'medium',
                  style: [ne.ctaButton, ne.ssoButtonStyles, m && ne.containerThin],
                  testID: V.a.signupButton,
                },
                _,
              ),
            ),
            I = o.a.createElement(
              i.CookieComplianceBannerPadder,
              null,
              o.a.createElement(
                h.a,
                { style: [T.searchHomeFooter, { marginBottom: '0' }] },
                o.a.createElement(y.a, { align: 'center' }),
              ),
            )
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(
              h.a,
              { style: [ne.splitContainer, 'desktop' === n && ne.splitContainerWide] },
              o.a.createElement(
                h.a,
                {
                  style: [
                    ne.splitItem,
                    'desktop' !== n && ne.splitItemMobile,
                    'tablet' === n && ne.splitItemTablet,
                    { zIndex: '1' },
                  ],
                },
                o.a.createElement(
                  h.a,
                  {
                    style: [
                      m && ne.headerMobile,
                      'tablet' === n && ne.headerTablet,
                      'desktop' === n && ne.headerDesktop,
                    ],
                  },
                  o.a.createElement(u.a, { style: [T.twitterIconSearch, ne.twitterIconSearchLeft] }),
                  o.a.createElement(
                    E.b,
                    {
                      extendedWidth: !0,
                      style: 'desktop' === n ? ne.ctaTitleLarge : 'tablet' === n ? ne.ctaTitleMedium : ne.ctaTitle,
                      weight: 'bold',
                    },
                    $,
                  ),
                ),
                o.a.createElement(R, { alignment: 'left', deviceSize: n, trendResults: a }),
              ),
              o.a.createElement(
                h.a,
                {
                  style: [
                    ne.splitItem,
                    ne.splitItemGray,
                    'desktop' !== n && ne.splitItemMobile,
                    'tablet' === n && ne.splitItemTablet,
                  ],
                },
                C,
                w,
              ),
            ),
            I,
          )
        },
        re = Object.freeze({ original: 'original', banner: 'banner', split: 'split' }),
        oe = void 0 !== a ? a : (a = n('x1T0')),
        ce = Object(A.b)(oe, { errorConfig: { context: 'LOGGED_OUT_SEARCH_SCREEN' } })
      t.b = function (e) {
        var t = e.cookieComplianceFS,
          n = e.deviceSize,
          a = e.variation
        return o.a.createElement(ce, {
          render: function (e) {
            var r,
              c = e.data,
              i = e.fetchStatus,
              s =
                (e.retry,
                i === j.a.LOADED
                  ? null == c || null === (r = c.logged_out_trends_list) || void 0 === r
                    ? void 0
                    : r.trends
                  : void 0)
            return a === re.original
              ? o.a.createElement(O, { deviceSize: n, trendResults: s })
              : a === re.banner
              ? o.a.createElement(P, { deviceSize: n, trendResults: s })
              : a === re.split
              ? o.a.createElement(ae, { cookieComplianceFS: t, deviceSize: n, trendResults: s })
              : null
          },
          variables: U.a,
        })
      }
    },
    '4ZbN': function (e, t, n) {
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
    '5P4+': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return c
      }),
        n.d(t, 'b', function () {
          return i
        }),
        n.d(t, 'c', function () {
          return s
        }),
        n.d(t, 'e', function () {
          return p
        }),
        n.d(t, 'd', function () {
          return h
        })
      n('3voH')
      var a = n('0+0m'),
        r = 'https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png',
        o = 'https://abs.twimg.com/sticky/illustrations/lohp_1302x955.png',
        c = 380,
        i = 2 * c,
        s = 1.15 * c,
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
        h = function (e) {
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
    '72nz': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'SearchBoxContainer', function () {
          return ut
        })
      var a = n('yiKp'),
        r = n.n(a),
        o = n('97Jx'),
        c = n.n(o),
        i = n('VrFO'),
        s = n.n(i),
        l = n('Y9Ll'),
        u = n.n(l),
        d = n('1Pcy'),
        p = n.n(d),
        h = n('5Yy7'),
        m = n.n(h),
        f = n('2VqO'),
        y = n.n(f),
        g = n('KEM+'),
        b = n.n(g),
        v = n('RhWx'),
        S = n.n(v),
        _ =
          (n('tQbP'),
          n('2G9S'),
          n('z84I'),
          n('hBvt'),
          n('ho0z'),
          n('KqXw'),
          n('WNMA'),
          n('MvUL'),
          n('3uku'),
          n('jQ3i'),
          n('ERkP')),
        E = n.n(_),
        k = n('+Kfv'),
        w = n('lnti'),
        C = n('wtjx'),
        I = n('rxPX'),
        x = Object(I.a)()
          .propsFromActions(function () {
            return { addQuery: C.a }
          })
          .withAnalytics({ component: 'search_box' }),
        R = n('Hw0q'),
        T = n('3XMw'),
        O = n.n(T),
        B = n('8jkQ'),
        D = n('u3ZE'),
        L = n('rRIm'),
        P = n('Rp9C'),
        A =
          (n('LW0h'),
          n('7x/C'),
          n('vrRf'),
          n('5BYb'),
          n('+KXO'),
          n('x4t0'),
          n('M+/F'),
          n('wFPu'),
          n('vfdX'),
          n('hqKg')),
        F = n('3IPs'),
        U = n('M0jS'),
        j = n('G6rE'),
        z = n('k49u'),
        H = n('J4ZH'),
        N = n('0KEI'),
        M = n('v4XE'),
        W = n('kGix'),
        q = function (e) {
          return (
            Object(z.c)(e, z.a.GenericUserNotFound) ||
            Object(z.c)(e, z.a.OtherUserSuspended) ||
            Object(z.c)(e, z.a.AddressBookLookupNotFound)
          )
        },
        V = Object(I.a)()
          .propsFromState(function () {
            var e = Object(A.createSelector)(C.g, j.e.selectFetchStatuses, function (e, t) {
                var n = Object(w.a)(
                  e.map(function (e) {
                    var n,
                      a = null === (n = e.user) || void 0 === n ? void 0 : n.id
                    return a && t[a] ? { id: a, fetchStatus: t[a] } : void 0
                  }),
                )
                return Object(H.a)(n, function (e) {
                  return e.fetchStatus
                })
              }),
              t = Object(A.createSelector)(e, function (e) {
                return (e[W.a.FAILED] || []).map(function (e) {
                  return e.id
                })
              }),
              n = Object(A.createSelector)(e, j.e.selectErrors, function (e, t) {
                return (e[W.a.FAILED] || [])
                  .filter(function (e) {
                    var n = e.id
                    return q(t[n] || {})
                  })
                  .map(function (e) {
                    return e.id
                  })
              }),
              a = Object(A.createSelector)(e, j.e.selectErrors, function (e, t) {
                var n = (e[W.a.FAILED] || []).filter(function (e) {
                  var n = e.id
                  return !q(t[n] || {})
                })
                return (e[W.a.LOADING] || []).length > 0
                  ? W.a.LOADING
                  : (e[W.a.LOADED] || []).length > 0
                  ? W.a.LOADED
                  : n.length > 0
                  ? W.a.FAILED
                  : W.a.NONE
              }),
              o = Object(A.createSelector)(C.g, function (e) {
                return e.map(function (e) {
                  return r()(r()({}, e), {}, { category: F.b.RecentSearch })
                })
              }),
              c = Object(A.createSelector)(M.d, function (e) {
                return e.map(function (e) {
                  return { keyword: { query: e.query }, savedSearchId: e.id_str, category: F.b.SavedSearch }
                })
              })
            return {
              isRecentSearchDataLoaded: C.e,
              recentSearches: o,
              usersFetchStatus: a,
              invalidRecentSearchUserIds: n,
              failedRecentSearchUserIds: t,
              savedSearches: c,
            }
          })
          .adjustStateProps(function (e) {
            var t = e.failedRecentSearchUserIds,
              n = e.invalidRecentSearchUserIds,
              a = e.isRecentSearchDataLoaded,
              r = e.recentSearches,
              o = e.savedSearches,
              c = e.usersFetchStatus,
              i = !r.filter(function (e) {
                var t = e.user
                return t && n.indexOf(t.id) < 0
              }).length,
              s = c !== W.a.LOADING && a && i ? W.a.LOADED : c
            return {
              failedRecentSearchUserIds: t,
              invalidRecentSearchUserIds: n,
              recentSearches: r,
              fetchStatus: s,
              savedSearches: o,
            }
          })
          .propsFromActions(function () {
            return {
              clearAll: C.b,
              createLocalApiErrorHandler: Object(N.createLocalApiErrorHandlerWithContextFactory)('SEARCH_ONE_CLICK'),
              deleteSavedSearch: M.a,
              fetchRecentSearchesIfNeeded: C.c,
              fetchSavedSearchesIfNeeded: M.b,
              fetchUsersIfNeeded: j.e.fetchManyIfNeeded,
              fetchUsersPresenceIfNeeded: U.b.fetchManyIfNeeded,
              removeQuery: C.d,
            }
          })
          .withAnalytics({ element: 'typeahead' }),
        K = n('sYRn'),
        Q = n('v//M'),
        G = n('7nmT'),
        X = n.n(G),
        Y = (n('1t7P'), n('jQ/y'), n('m3Bd')),
        J = n.n(Y),
        Z = n('hOZg'),
        $ = n('5T6p'),
        ee = n('MWbm'),
        te = n('/yvb'),
        ne = n('rHpw'),
        ae = ['id', 'onRemove'],
        re = O.a.e68b09b4,
        oe = (function (e) {
          m()(n, e)
          var t = y()(n)
          function n() {
            return s()(this, n), t.apply(this, arguments)
          }
          return (
            u()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.id,
                    n = e.onRemove,
                    a = J()(e, ae)
                  return t
                    ? E.a.createElement(
                        ee.a,
                        { style: ce.root },
                        E.a.createElement($.a, a),
                        E.a.createElement(te.a, {
                          accessibilityLabel: re,
                          icon: E.a.createElement(Z.a, null),
                          onPress: n,
                          size: 'small',
                          style: ce.button,
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
                    n = e.image,
                    a = e.supportText,
                    r = e.title
                  return {
                    category: F.b.RecentSearch,
                    query: t,
                    recentSearchType: F.a.Event,
                    queryMetadata: { id: t, image: n, title: r, supportText: a },
                  }
                },
              },
            ]),
            n
          )
        })(E.a.PureComponent),
        ce = ne.a.create(function (e) {
          return { root: { flexDirection: 'row', justifyContent: 'space-between' }, button: { alignSelf: 'center' } }
        }),
        ie = oe,
        se = n('j7Bv'),
        le = n('5mJL'),
        ue = n('t62R'),
        de = n('EHV7'),
        pe = E.a.createElement(Z.a, null),
        he = O.a.e68b09b4,
        me = (function (e) {
          m()(n, e)
          var t = y()(n)
          function n() {
            return s()(this, n), t.apply(this, arguments)
          }
          return (
            u()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.description,
                    n = e.id,
                    a = e.name,
                    r = e.onRemove,
                    o = e.withNewTypeaheadUI
                  if (!n) return null
                  var c = o ? 'xxxLarge' : 'xLarge',
                    i = E.a.createElement(se.a, { Icon: de.a, color: 'primary', size: c, style: fe.searchIcon })
                  return E.a.createElement(
                    le.a,
                    { avatarCell: i, avatarSize: c, cellStyle: fe.bodyColumn },
                    E.a.createElement(
                      ee.a,
                      null,
                      E.a.createElement(ue.b, { numberOfLines: 1, weight: 'bold', withHashflags: !0 }, a),
                      E.a.createElement(ue.b, { color: 'gray700', numberOfLines: 1, withHashflags: !0 }, t),
                    ),
                    E.a.createElement(te.a, {
                      accessibilityLabel: he,
                      icon: pe,
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
                    n = e.id,
                    a = e.name
                  return n
                    ? {
                        category: F.b.RecentSearch,
                        query: n,
                        recentSearchType: F.a.Topic,
                        queryMetadata: { id: n, name: a, description: t },
                      }
                    : null
                },
              },
            ]),
            n
          )
        })(E.a.Component),
        fe = ne.a.create(function (e) {
          return {
            bodyColumn: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
            searchIcon: { marginRight: e.spaces.space12 },
          }
        }),
        ye = function (e, t) {
          return j.e.select(e, t.id)
        },
        ge = function (e, t) {
          return Object(U.c)(e, t.id)
        },
        be = Object(I.a)().propsFromState(function () {
          return { user: ye, userSpace: ge }
        }),
        ve = n('v6aA'),
        Se = n('IMA+'),
        _e = E.a.createElement(Z.a, null),
        Ee = O.a.e68b09b4,
        ke = O.a.fd06b02f,
        we = (function (e) {
          m()(n, e)
          var t = y()(n)
          function n() {
            var e
            s()(this, n)
            for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              b()(p()(e), '_handleAvatarClick', function () {
                e.props.userSpace || e._handleClick()
              }),
              b()(p()(e), '_handleClick', function () {
                var t = e.props,
                  n = t.index,
                  a = t.onItemClick,
                  r = e.searchItemData
                r && a(r, n)
              }),
              e
            )
          }
          return (
            u()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.onRemove,
                    n = e.style,
                    a = e.user,
                    r = e.userSpace,
                    o = e.withNewTypeaheadUI,
                    c = this.context.featureSwitches
                  if (!a) return null
                  var i = r && c.isTrue('voice_rooms_recent_search_audiospace_ring_enabled') ? r : void 0
                  i && (i.accessibilityLabel = ke({ screenName: a.screen_name }))
                  var s = E.a.createElement(te.a, {
                    accessibilityLabel: Ee,
                    icon: _e,
                    onPress: t,
                    size: 'small',
                    type: 'brandText',
                  })
                  return E.a.createElement(Se.a, {
                    avatarSize: 'xLarge',
                    avatarUri: a.profile_image_url_https,
                    decoration: s,
                    displayMode: o ? 'ExperimentalUserTypeahead' : 'UserCompact',
                    isProtected: a.protected,
                    isVerified: a.verified,
                    name: a.name,
                    onAvatarClick: this._handleAvatarClick,
                    onCellClick: this._handleClick,
                    onScreenNameClick: this._handleClick,
                    presenceIndicator: i,
                    screenName: a.screen_name,
                    style: n,
                    userId: a.id_str,
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
                        category: F.b.RecentSearch,
                        link: this.props.user.screen_name,
                        query: this.props.id,
                        recentSearchType: F.a.User,
                      }
                    : null
                },
              },
            ]),
            n
          )
        })(E.a.Component)
      b()(we, 'contextType', ve.a)
      var Ce = be.forwardRef(we),
        Ie = n('oQhu'),
        xe = n('hiGS'),
        Re = n('Gfoi'),
        Te = E.a.createElement(Z.a, null),
        Oe = E.a.createElement(xe.a, null),
        Be = Object(Ie.a)(function (e) {
          return e === F.b.SavedSearch ? 'destructiveText' : 'brandText'
        }),
        De = Object(Ie.a)(function (e) {
          return e === F.b.SavedSearch ? Oe : Te
        }),
        Le = (function (e) {
          m()(n, e)
          var t = y()(n)
          function n() {
            var e
            s()(this, n)
            for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              b()(p()(e), '_getButtonType', function () {
                var t = e.props.category
                return Be(t)
              }),
              b()(p()(e), '_getRemoveIcon', function () {
                var t = e.props.category
                return De(t)
              }),
              e
            )
          }
          return (
            u()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.onRemove,
                    n = e.query,
                    a = e.withNewTypeaheadUI ? 'xxxLarge' : 'xLarge',
                    r = E.a.createElement(se.a, { Icon: Re.a, color: 'neutral', size: a, style: Pe.searchIcon })
                  return E.a.createElement(
                    le.a,
                    { avatarCell: r, avatarSize: a, cellStyle: Pe.bodyColumn },
                    E.a.createElement(ue.b, { numberOfLines: 1, withHashflags: !0 }, n),
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
                    recentSearchType: t === F.b.RecentSearch ? F.a.Keyword : void 0,
                  }
                },
              },
            ]),
            n
          )
        })(E.a.Component),
        Pe = ne.a.create(function (e) {
          return {
            bodyColumn: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
            searchIcon: { marginRight: e.spaces.space12, borderWidth: 0, backgroundColor: 'none' },
          }
        }),
        Ae = Le,
        Fe = n('htQn'),
        Ue = { viewType: 'search_item' },
        je = (function (e) {
          m()(n, e)
          var t = y()(n)
          function n(e, a) {
            var r
            return (
              s()(this, n),
              (r = t.call(this, e, a)),
              b()(p()(r), '_renderSearchItem', function () {
                var e = r.props,
                  t = e.index,
                  n = e.item,
                  a = e.onItemClick
                return n.keyword
                  ? E.a.createElement(Ae, {
                      category: n.category,
                      onRemove: r._handleOnRemove,
                      query: n.keyword.query,
                      ref: r._handleItemRef,
                      withNewTypeaheadUI: r._withNewTypeaheadUI,
                    })
                  : n.user
                  ? E.a.createElement(Ce, {
                      id: n.user.id || '',
                      index: t,
                      onItemClick: a,
                      onRemove: r._handleOnRemove,
                      ref: r._handleItemRef,
                      style: ze.itemPadding,
                      withNewTypeaheadUI: r._withNewTypeaheadUI,
                    })
                  : n.topic
                  ? E.a.createElement(me, {
                      description: n.topic.description || '',
                      id: n.topic.id,
                      name: n.topic.name || '',
                      onRemove: r._handleOnRemove,
                      ref: r._handleItemRef,
                      withNewTypeaheadUI: r._withNewTypeaheadUI,
                    })
                  : n.event
                  ? E.a.createElement(ie, {
                      id: n.event.id,
                      image: n.event.image || { url: '', height: 0, width: 0 },
                      onRemove: r._handleOnRemove,
                      ref: r._handleItemRef,
                      supportText: n.event.supportText || '',
                      title: n.event.title || '',
                      withNewTypeaheadUI: r._withNewTypeaheadUI,
                    })
                  : null
              }),
              b()(p()(r), '_handleItemRef', function (e) {
                r._itemRef = e
              }),
              b()(p()(r), '_handleOnRemove', function (e) {
                var t = r.props,
                  n = t.index,
                  a = t.item
                ;(0, t.onRemoveQuery)(a, n), e.stopPropagation()
              }),
              b()(p()(r), '_handleOnClick', function () {
                var e = r.props,
                  t = e.index,
                  n = e.item,
                  a = e.onItemClick
                n.user || (r.searchItemData && a(r.searchItemData, t))
              }),
              (r._withNewTypeaheadUI = r.context.featureSwitches.isTrue(
                'responsive_web_account_search_readability_enabled',
              )),
              r
            )
          }
          return (
            u()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.domId,
                    n = e.item,
                    a = e.testID
                  return E.a.createElement(
                    k.a,
                    { behavioralEventContext: Ue },
                    E.a.createElement(
                      Fe.a,
                      {
                        accessibilityRole: 'option',
                        accessibilityState: { selected: !!t },
                        focusable: !0,
                        nativeID: t,
                        onClick: this._handleOnClick,
                        style: [ze.root, t && ze.focused, !(null != n && n.user) && ze.itemPadding],
                        testID: a,
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
            n
          )
        })(E.a.Component)
      b()(je, 'contextType', ve.a)
      var ze = ne.a.create(function (e) {
          return {
            root: { cursor: 'pointer' },
            itemPadding: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            focused: { backgroundColor: e.colors.gray0 },
          }
        }),
        He = je,
        Ne = n('4ZbN'),
        Me = n('eb3s'),
        We = n('MXDK'),
        qe = O.a.ee295fbe,
        Ve = { headline: O.a.f45c425f, text: O.a.caae4dd9, confirmButtonLabel: O.a.dbd5d40f },
        Ke = O.a.a8d68f61,
        Qe = O.a.c6530778,
        Ge = O.a.e047b8fa,
        Xe = ['user', 'keyword'],
        Ye = (function (e) {
          m()(n, e)
          var t = y()(n)
          function n(e, a) {
            var o
            s()(this, n),
              (o = t.call(this, e, a)),
              b()(p()(o), '_withNewTypeaheadUI', !1),
              b()(p()(o), '_getRecentSearchItems', function () {
                var e = o.props,
                  t = e.failedRecentSearchUserIds,
                  n = e.recentSearches,
                  a = o.state.allowedRecentSearchItems,
                  r = n
                    .filter(function (e) {
                      var n = e.user
                      return !n || t.indexOf(n.id) < 0
                    })
                    .filter(function (e) {
                      return Object.keys(e).some(function (e) {
                        return a.includes(e)
                      })
                    })
                return r.length > 15 ? r.slice(0, 15) : r
              }),
              b()(p()(o), '_render', function () {
                var e = o.props,
                  t = e.domId,
                  n = e.savedSearches,
                  a = 0 === o._getNumOfSearchItems(),
                  r = o._getRecentSearchItems()
                return a
                  ? E.a.createElement(
                      ee.a,
                      { style: Je.emptyState, testID: Ne.a.typeaheadEmptySearch },
                      E.a.createElement(ue.b, { align: 'center', color: 'gray700' }, qe),
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
                              { style: Je.header, testID: Ne.a.typeaheadRecentSearchesHeader },
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
                      n.length > 0
                        ? E.a.createElement(
                            E.a.Fragment,
                            null,
                            E.a.createElement(
                              ee.a,
                              {
                                accessibilityHidden: !0,
                                style: [Je.header, Je.borderTop],
                                testID: Ne.a.typeaheadSavedSearchesHeader,
                              },
                              E.a.createElement(ue.b, { numberOfLines: 1, size: 'headline1', weight: 'bold' }, Qe),
                            ),
                            o._renderSavedSearches(),
                          )
                        : null,
                    )
              }),
              b()(p()(o), '_renderRecentSearchItem', function (e, t) {
                var n = o.props.ariaDescendantId,
                  a = o.state.focusIndex === t
                return E.a.createElement(He, {
                  domId: a ? n : void 0,
                  index: t,
                  item: e,
                  key: o._chooseKeyType(e, t),
                  onItemClick: o._handleOnItemClick,
                  onRemoveQuery: o._handleRemoveQuery,
                  ref: a ? o._setFocusedItemRef : void 0,
                  testID: Ne.a.typeaheadRecentSearchesItem,
                })
              }),
              b()(p()(o), '_chooseKeyType', function (e, t) {
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
              b()(p()(o), '_renderSavedSearches', function () {
                var e = o.props,
                  t = e.ariaDescendantId,
                  n = e.savedSearches,
                  a = o.state.focusIndex,
                  r = o._getRecentSearchItems(),
                  c = S()(n)
                return (
                  c.reverse(),
                  E.a.createElement(
                    ee.a,
                    { testID: Ne.a.typeaheadSavedSearchesContainer },
                    c.map(function (e, n) {
                      var c = a === n + r.length
                      return E.a.createElement(He, {
                        domId: c ? t : void 0,
                        index: n,
                        item: e,
                        key: e.savedSearchId,
                        onItemClick: o._handleOnItemClick,
                        onRemoveQuery: o._handleRemoveQuery,
                        ref: c ? o._setFocusedItemRef : void 0,
                        testID: Ne.a.typeaheadSavedSearchesItem,
                      })
                    }),
                  )
                )
              }),
              b()(p()(o), '_getNumOfSearchItems', function () {
                var e = o.props.savedSearches,
                  t = o._getRecentSearchItems()
                return e.length + t.length
              }),
              b()(p()(o), '_handleUsersRetry', function () {
                o._fetchUsersDetailsIfNeeded()
              }),
              b()(p()(o), '_fetchUsersDetailsIfNeeded', function () {
                var e = o.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.fetchUsersIfNeeded,
                  a = e.fetchUsersPresenceIfNeeded,
                  r = e.invalidRecentSearchUserIds,
                  c = e.recentSearches,
                  i = o.context,
                  s = i.featureSwitches,
                  l = i.loggedInUserId,
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
                  })(c, r)
                n(u).catch(t({})),
                  l && s.isTrue('voice_rooms_recent_search_audiospace_ring_enabled') && a(u).catch(t({}))
              }),
              b()(p()(o), '_handleRemoveQuery', function (e, t) {
                var n = o.props,
                  a = n.analytics,
                  r = n.removeQuery
                switch (e.category) {
                  case F.b.RecentSearch:
                    var c = { keyword: e.keyword, user: e.user, topic: e.topic, event: e.event }
                    r(c), o._resetFocus()
                    var i = P.a.forRecentSearchResult(c, t),
                      s = o._handleRemoveAction(e)
                    i && a.scribe({ action: s, data: { items: [i] } })
                    break
                  case F.b.SavedSearch:
                    o.setState({ shouldShowDeleteSavedSearchConfirmation: !0, savedSearchIdToDelete: e.savedSearchId })
                    break
                  default:
                    return
                }
              }),
              b()(p()(o), '_handleRemoveAction', function (e) {
                return e.user
                  ? 'clear_user'
                  : e.topic
                  ? 'clear_topic_interests'
                  : e.event
                  ? 'clear_event'
                  : 'clear_topic'
              }),
              b()(p()(o), '_handleClearAllClick', function () {
                o.setState({ shouldShowClearAllConfirmationSheet: !0 })
              }),
              b()(p()(o), '_handleOnClearAllConfirm', function () {
                var e = o.props,
                  t = e.analytics
                ;(0, e.clearAll)(), t.scribeAction('clear_all'), o.setState({ shouldShowClearAllConfirmationSheet: !1 })
              }),
              b()(p()(o), '_handleOnClearAllCancel', function () {
                o.setState({ shouldShowClearAllConfirmationSheet: !1 })
              }),
              b()(p()(o), '_handleOnDeleteSavedSearchConfirm', function () {
                var e = o.props,
                  t = e.analytics,
                  n = e.deleteSavedSearch,
                  a = e.savedSearches,
                  r = o.state.savedSearchIdToDelete,
                  c = a.findIndex(function (e) {
                    return e.savedSearchId === r
                  }),
                  i = a[c]
                if (r) {
                  n(r)
                  var s = i && P.a.forSavedSearchResult(i.keyword.query, c)
                  s && t.scribe({ element: 'saved_search', action: 'delete', data: { items: [s] } })
                }
                o.setState({ shouldShowDeleteSavedSearchConfirmation: !1, savedSearchIdToDelete: void 0 })
              }),
              b()(p()(o), '_handleOnDeleteSavedSearchCancel', function () {
                o.setState({ shouldShowDeleteSavedSearchConfirmation: !1, savedSearchIdToDelete: void 0 })
              }),
              b()(p()(o), '_handleOnItemClick', function (e, t) {
                var n = o.props,
                  a = n.onDismiss
                ;(0, n.onItemClick)(e, t), o._scribeClick(e, t), a && a()
              }),
              b()(p()(o), '_scribeRecentSearchImpression', function () {
                var e = o.props,
                  t = e.analytics,
                  n = e.recentSearches
                if (n && n.length) {
                  var a = Object(w.a)(
                    n.map(function (e, t) {
                      return P.a.forRecentSearchResult(e, t)
                    }),
                  )
                  t.scribe({ action: 'impression', data: { items: a } })
                }
              }),
              b()(p()(o), '_scribeSavedSearchImpression', function () {
                var e = o.props,
                  t = e.analytics,
                  n = e.savedSearches
                if (n && n.length) {
                  var a = Object(w.a)(
                    n.map(function (e, t) {
                      return P.a.forSavedSearchResult(e.keyword.query, t)
                    }),
                  )
                  t.scribe({ element: 'saved_search', action: 'impression', data: { items: a } })
                }
              }),
              b()(p()(o), '_scribeClick', function (e, t) {
                var n = o.props.analytics
                switch (e.category) {
                  case F.b.SavedSearch:
                    var a = P.a.forSavedSearchResult(e.query, t)
                    n.scribe({ element: 'typeahead', action: 'click', data: { targets: [a] } })
                    break
                  case F.b.RecentSearch:
                    var c
                    e.recentSearchType &&
                      (c =
                        e.recentSearchType === F.a.User
                          ? { user: { type: F.a.User, id: e.query } }
                          : e.recentSearchType === F.a.Event && e.queryMetadata && e.queryMetadata.title
                          ? { event: r()(r()({}, e.queryMetadata), {}, { type: F.a.Event, id: e.query }) }
                          : e.recentSearchType === F.a.Topic && e.queryMetadata && e.queryMetadata.name
                          ? { topic: r()(r()({}, e.queryMetadata), {}, { type: F.a.Topic, id: e.query }) }
                          : { keyword: { type: F.a.Keyword, query: e.query } })
                    var i = c && P.a.forRecentSearchResult(c, t)
                    i && n.scribe({ action: 'click', data: { targets: [i] } })
                }
              }),
              b()(p()(o), '_setFocusedItemRef', function (e) {
                ;(o._focusedItemRef = e),
                  e &&
                    o._shouldScrollToFocusedItem &&
                    (Object(We.c)(o._getScrollParent(), o._getFocusedItem()), (o._shouldScrollToFocusedItem = !1))
              }),
              b()(p()(o), 'hasFocusedItem', function () {
                return o._getNumOfSearchItems() > 0
              }),
              b()(p()(o), 'selectFocusedItem', function () {
                if (o.hasFocusedItem()) {
                  var e = o._focusedItemRef && o._focusedItemRef.searchItemData
                  e && o._handleOnItemClick(e, o.state.focusIndex)
                }
              }),
              b()(p()(o), '_setFocusIndex', function (e, t) {
                var n = o.props.onItemFocusChanged
                ;(o._shouldScrollToFocusedItem = t), o.setState({ focusIndex: e }), n && n()
              }),
              b()(p()(o), '_resetFocus', function () {
                o._setFocusIndex(-1)
              }),
              b()(p()(o), 'focusNext', function () {
                var e = o.state.focusIndex,
                  t = o._getNumOfSearchItems()
                if (0 !== t) {
                  var n = e + 1 >= t ? 0 : e + 1
                  o._setFocusIndex(n, !0)
                }
              }),
              b()(p()(o), 'focusPrevious', function () {
                var e = o.state.focusIndex,
                  t = o._getNumOfSearchItems()
                if (0 !== t) {
                  var n = e - 1 < 0 ? t - 1 : e - 1
                  o._setFocusIndex(n, !0)
                }
              })
            var c,
              i,
              l = o.context.featureSwitches
            return (
              (o.state = {
                focusIndex: 0,
                shouldShowClearAllConfirmationSheet: !1,
                shouldShowDeleteSavedSearchConfirmation: !1,
                allowedRecentSearchItems:
                  ((c = !0 === l.getValueWithoutScribeImpression('responsive_web_recent_searches_topics_enabled')),
                  (i = !0 === l.getValueWithoutScribeImpression('responsive_web_recent_searches_events_enabled')),
                  [].concat(Xe, [c ? 'topic' : '', i ? 'event' : ''])),
              }),
              (o._withNewTypeaheadUI = o.context.featureSwitches.isTrue(
                'responsive_web_account_search_readability_enabled',
              )),
              o
            )
          }
          return (
            u()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.createLocalApiErrorHandler,
                    n = e.fetchRecentSearchesIfNeeded,
                    a = e.fetchSavedSearchesIfNeeded,
                    r = e.recentSearches,
                    o = e.savedSearches
                  n(),
                    a().catch(t({})),
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
                    n = t.recentSearches,
                    a = t.savedSearches
                  e.recentSearches !== n &&
                    (this._fetchUsersDetailsIfNeeded(), this._resetFocus(), this._scribeRecentSearchImpression()),
                    e.savedSearches !== a && (this._resetFocus(), this._scribeSavedSearchImpression())
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    n = e.style,
                    a = this.state,
                    r = a.shouldShowClearAllConfirmationSheet,
                    o = a.shouldShowDeleteSavedSearchConfirmation
                  return E.a.createElement(
                    ee.a,
                    { style: n },
                    E.a.createElement(Q.a, {
                      fetchStatus: t,
                      onRequestRetry: this._handleUsersRetry,
                      render: this._render,
                    }),
                    r
                      ? E.a.createElement(Me.a, {
                          confirmButtonLabel: Ve.confirmButtonLabel,
                          confirmButtonType: 'destructiveFilled',
                          headline: Ve.headline,
                          onCancel: this._handleOnClearAllCancel,
                          onConfirm: this._handleOnClearAllConfirm,
                          testID: Ne.a.deleteRecentSearchesDialog,
                          text: Ve.text,
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
                    var e = Object(We.a)(X.a.findDOMNode(this))
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
            n
          )
        })(E.a.Component)
      b()(Ye, 'contextType', ve.a)
      var Je = ne.a.create(function (e) {
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
        Ze = V.forwardRef(Ye),
        $e = 'SearchBox_Search_Input',
        et = n('TnY3'),
        tt = n('GZwR'),
        nt = n('4e/K'),
        at = O.a.ib2e46ee,
        rt = O.a.hbc99b02,
        ot = /^(\w+)$/,
        ct = [tt.a.Events, tt.a.Users, tt.a.Topics],
        it = function (e) {
          return '@' === e[0] ? e.substring(1) : e
        },
        st = { viewType: 'search_field' },
        lt = ['t1', 't3', 't4'],
        ut = (function (e) {
          m()(n, e)
          var t = y()(n)
          function n(e, a) {
            var o, i
            return (
              s()(this, n),
              (i = t.call(this, e, a)),
              b()(p()(i), '_withNewTypeaheadUI', !1),
              b()(p()(i), '_orderResults', function (e, t, n, a) {
                return 't4' === i._rankedTypeaheadExperimentalValue
                  ? i._reorderResults(e, t, n, a)
                  : i._flattenResults(e, t, n, a)
              }),
              b()(p()(i), '_reorderResults', function (e, t, n, a) {
                var r = Object(tt.f)(t, tt.b.User),
                  o = Object(tt.f)(t, tt.b.NoResult),
                  c = r.sort(function (e, t) {
                    var n = e.rounded_score,
                      a = void 0 === n ? 0 : n,
                      r = t.rounded_score
                    return (void 0 === r ? 0 : r) - a
                  }),
                  i = [].concat(S()(c), S()(o))
                return Object(w.a)([e, a.length ? a : void 0, n.length ? n : void 0, i.length ? i : void 0])
              }),
              b()(p()(i), '_flattenResults', function (e, t, n, a) {
                var r = Object(tt.f)(t, tt.b.User),
                  o = Object(tt.f)(t, tt.b.NoResult),
                  c = Object(tt.f)(n, tt.b.Topic),
                  s = Object(tt.f)(n, tt.b.NoResult),
                  l = Object(tt.f)(a, tt.b.Event),
                  u = [].concat(S()(Object(tt.e)(c)), S()(Object(tt.e)(r))),
                  d = (
                    't1' === i._rankedTypeaheadExperimentalValue
                      ? u.sort(function (e, t) {
                          return t.rank - e.rank
                        })
                      : 't3' === i._rankedTypeaheadExperimentalValue
                      ? (function (e) {
                          for (var t = S()(e), n = e.length - 1; n > 0; n--) {
                            var a = Math.floor(Math.random() * (n + 1)),
                              r = t[a],
                              o = t[n]
                            ;(t[n] = r), (t[a] = o)
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
              b()(p()(i), '_renderSearchBoxEmptyState', function (e) {
                return E.a.createElement(Ze, c()({}, e, { onItemClick: i._handleSearchItemClick }))
              }),
              b()(p()(i), '_handleSearchItemClick', function (e) {
                var t = e.category,
                  n = e.link,
                  a = e.query,
                  o = e.queryMetadata,
                  c = e.recentSearchType,
                  s = i.props.addQuery
                t === F.b.SavedSearch
                  ? i._submitQuery({ query: a, shouldAddToRecentSearch: !1, src: D.a.SavedSearchClick })
                  : c === F.a.Keyword
                  ? i._submitQuery({ query: a, shouldAddToRecentSearch: !0, src: D.a.RecentSearchClick })
                  : c === F.a.Event
                  ? (i._routeTransition({ pathname: '/i/events/'.concat(a) }),
                    o && o.title && s({ event: r()(r()({}, o), {}, { id: a, type: F.a.Event }) }))
                  : c === F.a.Topic
                  ? (i._routeTransition({ pathname: '/i/topics/'.concat(a) }),
                    o && o.name && s({ topic: r()(r()({}, o), {}, { id: a, type: F.a.Topic }) }))
                  : n && (i._routeTransition({ pathname: '/'.concat(n) }), s({ user: { id: a, type: F.a.User } }))
              }),
              b()(p()(i), '_handleSearchShortcut', function (e) {
                var t = i._inputRef
                t && (e && t.setQuery(e), t.focus())
              }),
              b()(p()(i), '_getUserExactMatch', function (e) {
                e.hasResults, e.isLoaded
                var t = e.query,
                  n = it(t)
                if (n.match(ot))
                  return {
                    id: ''.concat(t, '_no_result_user'),
                    type: tt.b.NoResult,
                    data: { text: rt({ screenName: n }), type: 'user' },
                  }
              }),
              b()(p()(i), '_handleOnDismiss', function () {
                var e = i.props.history,
                  t = e.location,
                  n = t.state || {}
                if (n.searchFocused) {
                  var a = r()(r()({}, t), {}, { state: r()(r()({}, n), {}, { lockScroll: !1, searchFocused: !1 }) })
                  e.replace(a)
                }
              }),
              b()(p()(i), '_handleOnFocus', function () {
                var e = i.props,
                  t = e.analytics,
                  n = e.history,
                  a = n.location,
                  o = a.state || {}
                if (!o.searchFocused) {
                  var c = r()(r()({}, a), {}, { state: r()(r()({}, o), {}, { searchFocused: !0, lockScroll: !0 }) })
                  t.scribe({ action: 'focus_field' }), n.push(c)
                }
              }),
              b()(p()(i), '_handleChange', function (e) {
                var t,
                  n = i.props.history.location
                !i._rankedTypeaheadExperimentalValue &&
                  null !== (t = n.state) &&
                  void 0 !== t &&
                  t.searchFocused &&
                  (i._rankedTypeaheadExperimentalValue = i.context.featureSwitches.getStringValue(
                    'responsive_web_ranked_typeahead',
                    't2',
                  )),
                  i.setState({ query: e })
              }),
              b()(p()(i), '_handleTypeaheadSubmit', function () {
                var e = i.state,
                  t = e.items,
                  n = e.query,
                  a = i.props.analytics
                ;/^\s*$/.test(n) ||
                  (a.scribe({
                    action: 'search',
                    data: { items: P.a.forTypeaheadResults(t), search_details: { query: n } },
                  }),
                  i._submitQuery({ query: n, shouldAddToRecentSearch: !0 }))
              }),
              b()(p()(i), '_handleItemClick', function (e, t) {
                var n = i.props.addQuery,
                  a = i.state.query
                switch (e.type) {
                  case tt.b.User:
                    if (e.data.id_str) n({ user: { id: e.data.id_str, type: F.a.User } })
                    i._routeTransition({ pathname: '/'.concat(e.data.screen_name) })
                    break
                  case tt.b.Topic:
                  case tt.b.Hashtag:
                    i._submitQuery({ query: e.data.topic, shouldAddToRecentSearch: !0, src: D.a.TypeaheadClick })
                    break
                  case tt.b.Event:
                    e.data && e.data.url
                      ? i._routeTransition({ pathname: B.b.parseInternalUrl(e.data.url) })
                      : i._submitQuery({ query: e.data.topic, src: D.a.TypeaheadClick })
                    break
                  case tt.b.NoResult:
                    var r = e.data.type
                    'user' === r
                      ? i._routeTransition({ pathname: '/'.concat(it(a)) })
                      : 'topic' === r &&
                        i._submitQuery({ query: a, shouldAddToRecentSearch: !0, src: D.a.TypeaheadClick })
                }
              }),
              b()(p()(i), '_handleItemsChanged', function (e) {
                i.setState({ items: e })
              }),
              b()(p()(i), '_routeTransition', function (e) {
                var t = e.params,
                  n = e.pathname,
                  a = e.query,
                  o = e.src,
                  c = i.props,
                  s = c.history,
                  l = c.location,
                  u = r()(
                    r()({}, l),
                    {},
                    {
                      pathname: n,
                      search: '',
                      query: t || (a ? { q: a, src: o } : {}),
                      state: r()(r()({}, l.state), {}, { searchFocused: !1, lockScroll: !1 }),
                    },
                  )
                s.replace(u)
              }),
              b()(p()(i), '_submitQuery', function (e) {
                var t = e.query,
                  n = e.shouldAddToRecentSearch,
                  a = void 0 !== n && n,
                  r = e.src,
                  o = void 0 === r ? D.a.Typed : r,
                  c = i.props,
                  s = c.addQuery,
                  l = c.mode,
                  u = c.onSubmit,
                  d = c.searchFilters,
                  p = c.searchRoute
                ;(u && u(t, o, i.state.lastSubmittedQuery === t), a) && s({ keyword: { query: t, type: F.a.Keyword } })
                var h = Object(F.g)({ query: t, querySrc: o, mode: l, searchFilters: d })
                i._routeTransition({ pathname: p, params: h, src: o }), i.setState({ lastSubmittedQuery: t })
              }),
              b()(p()(i), '_setInputRef', function (e) {
                i._inputRef = e
              }),
              (i.state = {
                query: e.initialValue,
                items: [],
                lastSubmittedQuery: Object(R.a)(null === (o = e.location.query) || void 0 === o ? void 0 : o.q),
              }),
              (i._withNewTypeaheadUI = i.context.featureSwitches.isTrue(
                'responsive_web_account_search_readability_enabled',
              )),
              i
            )
          }
          return (
            u()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this.props.shouldHandleSearchShortcut &&
                    (this._unregisterSearchShortcutHandler = Object(L.b)(this._handleSearchShortcut))
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
                    n = e.isCompact,
                    a = e.isInSidebar,
                    r = e.isOnHomepage,
                    o = e.location,
                    c = e.placeholder,
                    i = this.state.query,
                    s = (o.state || {}).searchPrefill,
                    l = this.props.initialValue || s,
                    u = !!o.state && !!o.state.searchFocused,
                    d = lt.includes(this._rankedTypeaheadExperimentalValue)
                  return E.a.createElement(
                    k.a,
                    { behavioralEventContext: st },
                    E.a.createElement(
                      ee.a,
                      { style: dt.root },
                      E.a.createElement(nt.default, {
                        filter: ct,
                        forceVdlDisable: t,
                        getTopicExactMatch: i ? tt.h : void 0,
                        getUserExactMatch: i ? this._getUserExactMatch : void 0,
                        initialValue: l,
                        inputStyle: dt.input,
                        isCompact: n,
                        isInSidebar: a,
                        isOnHomepage: r,
                        onDismiss: this._handleOnDismiss,
                        onFocus: this._handleOnFocus,
                        onItemClick: this._handleItemClick,
                        onItemsChanged: this._handleItemsChanged,
                        onQueryChange: this._handleChange,
                        onSubmit: this._handleTypeaheadSubmit,
                        orderResults: d ? this._orderResults : void 0,
                        placeholder: c,
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
            n
          )
        })(E.a.Component)
      b()(ut, 'defaultProps', {
        initialValue: '',
        isInSidebar: !1,
        placeholder: at,
        searchRoute: '/search',
        forceVdlDisable: !0,
      }),
        b()(ut, 'contextType', ve.a)
      var dt = ne.a.create(function (e) {
        return {
          root: { alignItems: 'stretch', flexBasis: 0, flexDirection: 'row', flexGrow: 1 },
          input: { flexShrink: 1 },
        }
      })
      t.default = Object(et.a)(x(ut))
    },
    AS3p: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return c
      }),
        n.d(t, 'c', function () {
          return i
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
        c = Object.freeze({
          AcceptAllCookies: 'acceptAllCookies',
          RefuseNonEssentialCookies: 'refuseNonEssentialCookies',
          Invalid: 'invalid',
          NotSet: 'notSet',
        })
      function i(e) {
        var t = Object(r.a)(e)
        return t
          ? u(t)
            ? d(t)
              ? t[1]
                ? c.AcceptAllCookies
                : t[2]
                ? c.RefuseNonEssentialCookies
                : (Object(a.a)('Invalid consent signal state'), c.Invalid)
              : c.NotSet
            : c.Invalid
          : c.NotSet
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
        c = n.n(o),
        i = n('Hde2'),
        s = n('H1k/'),
        l = n('zCf4'),
        u = n('496R')
      function d(e) {
        return !['/i/flow/login'].includes(e)
      }
      function p() {
        var e = Object(l.g)(),
          t = c.a.useState(function () {
            return d(e.pathname)
          }),
          n = r()(t, 2),
          a = n[0],
          o = n[1]
        return (
          c.a.useEffect(
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
        return !e.hideCookieBannerPicker && t ? c.a.createElement(i.a, null, c.a.createElement(s.a, null)) : null
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
        c = n('yiKp'),
        i = n.n(c),
        s = n('ddV6'),
        l = n.n(s),
        u = n('AS3p'),
        d = n('KUGV'),
        p = n('Irs7'),
        h = n('MWbm'),
        m = n('t62R'),
        f = n('cHvH'),
        y = n('rHpw'),
        g = n('/yvb'),
        b = n('3XMw'),
        v = n.n(b),
        S = v.a.d8817e36,
        _ = v.a.b9288ee6,
        E = v.a.i1390ec2,
        k = { page: 'cookie_compliance_banner' }
      function w() {
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
        return r.a.createElement(I, { body: e, title: E })
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
        return r.a.createElement(I, { body: t, title: E })
      }
      function I(e) {
        return r.a.createElement(
          h.a,
          { style: R.cookieComplianceMessageWrap },
          r.a.createElement(m.b, { color: 'buttonWhite', size: 'headline2', weight: 'medium' }, e.title),
          r.a.createElement(
            m.b,
            { color: 'buttonWhite', size: 'subtext2', style: R.cookieComplianceExpandedDetails },
            e.body,
          ),
        )
      }
      var x = r.a.forwardRef(function (e, t) {
          var n = Object(p.b)()
          r.a.useEffect(
            function () {
              n.scribe(i()(i()({}, k), {}, { action: 'impression' }))
            },
            [n],
          )
          var a = (function () {
              var e = r.a.useState(!1),
                t = l()(e, 2),
                n = t[0],
                a = t[1],
                o = Object(p.b)()
              return {
                isExpanded: n,
                expand: function () {
                  o.scribe(i()(i()({}, k), {}, { action: 'click', element: 'expand_message' })), a(!0)
                },
              }
            })(),
            c = a.expand,
            s = a.isExpanded,
            m = (function () {
              var e = Object(p.b)(),
                t = r.a.useContext(o.a).featureSwitches,
                n = r.a.useState(function () {
                  return u.e(t) && !Object(d.a)()
                }),
                a = l()(n, 2),
                c = a[0],
                s = a[1]
              return {
                isBannerOpen: c,
                acceptAllCookies: function () {
                  e.scribe(i()(i()({}, k), {}, { action: 'click', element: 'accept_all' })), u.b(t), s(!1)
                },
                refuseNonEssentialCookies: function () {
                  e.scribe(i()(i()({}, k), {}, { action: 'click', element: 'refuse_non_essential' })), u.d(t), s(!1)
                },
              }
            })(),
            b = m.acceptAllCookies,
            v = m.isBannerOpen,
            E = m.refuseNonEssentialCookies
          return v
            ? r.a.createElement(f.a, null, function (e) {
                var n = e.windowWidth < y.a.theme.breakpoints.xLarge
                return r.a.createElement(
                  h.a,
                  { ref: t, style: [R.root, n && R.rootNarrow] },
                  s ? r.a.createElement(w, null) : r.a.createElement(C, { onExpand: c }),
                  r.a.createElement(
                    h.a,
                    { style: [R.buttonContainer, n && R.buttonContainerNarrow] },
                    r.a.createElement(
                      g.a,
                      {
                        dominantColor: 'buttonAlwaysBlack',
                        onPress: b,
                        size: 'medium',
                        style: [R.ctaButton, n && R.ctaButtonNarrow],
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
                        style: [R.ctaButton, n && R.ctaButtonNarrow],
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
        T = n('97Jx'),
        O = n.n(T),
        B = n('VrFO'),
        D = n.n(B),
        L = n('Y9Ll'),
        P = n.n(L),
        A = n('1Pcy'),
        F = n.n(A),
        U = n('5Yy7'),
        j = n.n(U),
        z = n('2VqO'),
        H = n.n(z),
        N = n('KEM+'),
        M = n.n(N),
        W = (n('hBvt'), n('RqPI')),
        q = n('rxPX'),
        V = Object(q.a)().propsFromState(function () {
          return { currentCountry: W.y }
        }),
        K = n('cnVF'),
        Q = n('mrHL'),
        G =
          (n('vrRf'),
          function (e, t, n) {
            return e.indexOf(t.toLowerCase()) > -1 && '1' !== n
          }),
        X = v.a.ia5e7487,
        Y = (function (e) {
          j()(n, e)
          var t = H()(n)
          function n(e, a) {
            var o
            D()(this, n),
              (o = t.call(this, e, a)),
              M()(F()(o), 'state', { euWarningIsOpen: !1 }),
              M()(F()(o), '_renderMessage', function () {
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
              M()(F()(o), '_handleEUBannerClose', function () {
                !(function (e) {
                  Object(Q.e)(K.k, '1', { featureSwitches: e })
                })(o.context.featureSwitches),
                  o.setState({ euWarningIsOpen: !1 })
              })
            var c = o.props.currentCountry,
              i = o.context.featureSwitches,
              s = i.getArrayValue('responsive_web_eu_countries', []),
              l = Object(Q.d)({ featureSwitches: i, cookieName: K.k })
            return (o.state = { euWarningIsOpen: !!c && G(s, c, l) }), o
          }
          return (
            P()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this
                  return this.state.euWarningIsOpen
                    ? r.a.createElement(f.a, null, function (t) {
                        var n = t.windowWidth < y.a.theme.breakpoints.medium
                        return r.a.createElement(
                          h.a,
                          { ref: e.props.innerRef, style: [J.root, n && J.rootNarrow] },
                          e._renderMessage(),
                          r.a.createElement(
                            g.a,
                            {
                              onPress: e._handleEUBannerClose,
                              size: 'medium',
                              style: [J.closeButton, n && J.closeButtonNarrow],
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
            n
          )
        })(r.a.Component)
      M()(Y, 'contextType', o.a)
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
          return r.a.createElement(Y, O()({}, e, { innerRef: t }))
        }),
        $ = V.forwardRef(Z),
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
          ? r.a.createElement(x, { ref: a })
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
        c = n.n(o),
        i = n('Y9Ll'),
        s = n.n(i),
        l = n('1Pcy'),
        u = n.n(l),
        d = n('5Yy7'),
        p = n.n(d),
        h = n('2VqO'),
        m = n.n(h),
        f = n('KEM+'),
        y = n.n(f),
        g = (n('2G9S'), n('ho0z'), n('0zG9'), n('ERkP')),
        b = n.n(g),
        v = n('/yvb'),
        S = n('hUVV'),
        _ = n('3XMw'),
        E = n.n(_),
        k = n('iKTg'),
        w = n('TaB8'),
        C = n('1zbE'),
        I = n('Ukpf'),
        x = n('cnVF'),
        R = n('TnY3'),
        T = n('0+0m'),
        O = n('v6aA'),
        B = n('2qJZ'),
        D = E.a.ib65b1c6,
        L = E.a.f55cebb7,
        P = E.a.g61ed8a4,
        A = { clientId: T.a, scope: 'name email', usePopup: !0 },
        F = (function (e) {
          p()(n, e)
          var t = m()(n)
          function n() {
            var e
            c()(this, n)
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              y()(u()(e), 'state', { isScriptLoaded: !1 }),
              y()(
                u()(e),
                '_is3rdPartyIntegrationDisabled',
                Object(w.a)('responsive_web_3rd_party_category_sign_in_with_apple', e.context.featureSwitches),
              ),
              y()(u()(e), '_initAppleIDAuth', function () {
                var t = window.AppleID,
                  n = e.props.fetchSsoInitToken,
                  a = Object(B.c)(e.context.featureSwitches) ? 'https://'.concat(B.b) : 'https://'.concat(B.a)
                t &&
                  n(x.A.Apple).then(function (e) {
                    var n = e.state
                    t.auth.init(r()(r()({}, A), {}, { redirectURI: a, state: n }))
                  })
              }),
              y()(u()(e), '_handleOnPress', function () {
                var t = window.AppleID,
                  n = e.props,
                  a = n.analytics,
                  r = n.buttonState,
                  o = n.history,
                  c = n.personalizationSettings,
                  i = n.shouldPropagateP13nSettings,
                  s = n.ssoInitTokens,
                  l = c || {},
                  u = l.allowCookieUse,
                  d = l.allowDeviceAccess,
                  p = l.allowPartnerships,
                  h = l.allowPersonalization
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
                            cookie_personalization_settings: i && {
                              allow_cookie_use: !!u,
                              allow_device_personalization: !!d,
                              allow_partnerships: !!p,
                              allow_ads_personalization: !!h,
                            },
                            requested_variant: JSON.stringify({
                              display_name: t && ''.concat(e.user.name.firstName, ' ').concat(e.user.name.lastName),
                              id_token: e.authorization.id_token,
                              provider: x.A.Apple,
                              state: s[x.A.Apple],
                            }),
                          },
                        },
                      })
                    })
                    .catch(function (t) {
                      var n = e.props.addToast
                      t.error !== T.g
                        ? (a.scribe({ component: 'apple_sign_in', element: r, action: 'failure' }), n({ text: P }))
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
                    I.a.inject({
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
                    o = n === C.a.SignUp ? D : L
                  return this._is3rdPartyIntegrationDisabled
                    ? null
                    : b.a.createElement(v.a, {
                        backgroundColor: 'white',
                        borderColor: 'gray200',
                        children: o,
                        color: 'gray1100',
                        disabled: !r,
                        icon: b.a.createElement(k.a, null),
                        onPress: this._handleOnPress,
                        size: t,
                        style: a,
                      })
                },
              },
            ]),
            n
          )
        })(b.a.PureComponent)
      y()(F, 'contextType', O.a),
        y()(F, 'defaultProps', { buttonSize: 'xLarge', buttonState: 'signup' }),
        (t.a = Object(R.a)(Object(S.a)(F)))
    },
    bCEw: function (e, t, n) {
      'use strict'
      var a = n('IGGJ')(n('K1iM')),
        r = n('23An'),
        o = n('Ud88'),
        c = n('aQQo'),
        i = c.loadQuery,
        s = c.useTrackLoadQueryInRender,
        l = n('ERkP'),
        u = l.useCallback,
        d = l.useEffect,
        p = l.useRef,
        h = l.useState,
        m = n('K1lQ').getRequest,
        f = { kind: 'NullQueryReference' }
      function y(e) {
        return 'PreloadableConcreteRequest' === e.kind
          ? void 0 !== e.params.metadata.live
          : void 0 !== m(e).params.metadata.live
      }
      e.exports = function (e, t) {
        var n = null != t ? t : f,
          c = o()
        s()
        var l = r(),
          m = p(new Set([n])),
          g = h(function () {
            return n
          }),
          b = g[0],
          v = g[1],
          S = h(function () {
            return n
          }),
          _ = S[0],
          E = S[1]
        n !== _ && (m.current.add(n), E(n), v(n))
        var k = u(
            function () {
              l.current && (m.current.add(f), v(f))
            },
            [l],
          ),
          w = u(
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
                var r,
                  o = i(null !== (r = null == n ? void 0 : n.__environment) && void 0 !== r ? r : c, e, t, a)
                m.current.add(o), v(o)
              }
            },
            [c, e, v, l],
          ),
          C = p(!1)
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
                    w(b.variables, { fetchPolicy: b.fetchPolicy, networkCacheConfig: b.networkCacheConfig })
                  )
                )
              var t = m.current
              if (l.current) {
                var n,
                  r = (0, a.default)(t)
                try {
                  for (r.s(); !(n = r.n()).done; ) {
                    var o = n.value
                    if (o === b) break
                    t.delete(o),
                      'NullQueryReference' !== o.kind &&
                        (y(e) ? o.dispose && o.dispose() : o.releaseQuery && o.releaseQuery())
                  }
                } catch (c) {
                  r.e(c)
                } finally {
                  r.f()
                }
              }
            },
            [b, l, w, e],
          ),
          d(
            function () {
              return function () {
                var t,
                  n = (0, a.default)(m.current)
                try {
                  for (n.s(); !(t = n.n()).done; ) {
                    var r = t.value
                    'NullQueryReference' !== r.kind &&
                      (y(e) ? r.dispose && r.dispose() : r.releaseQuery && r.releaseQuery())
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
          ['NullQueryReference' === b.kind ? null : b, w, k]
        )
      }
    },
    bojF: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CookieComplianceBannerPadder', function () {
          return ge
        }),
        n.d(t, 'LoggedOutHome', function () {
          return be
        })
      var a = n('yiKp'),
        r = n.n(a),
        o = n('VrFO'),
        c = n.n(o),
        i = n('Y9Ll'),
        s = n.n(i),
        l = n('1Pcy'),
        u = n.n(l),
        d = n('5Yy7'),
        p = n.n(d),
        h = n('2VqO'),
        m = n.n(h),
        f = n('KEM+'),
        y = n.n(f),
        g = n('ddV6'),
        b = n.n(g),
        v = (n('0zG9'), n('z84I'), n('ERkP')),
        S = n.n(v),
        _ = n('UpKB'),
        E = n('zI2C'),
        k = n('Hde2'),
        w = n('Chb3'),
        C = n('RqPI'),
        I = n('rxPX'),
        x = Object(I.a)()
          .propsFromState(function () {
            return { userLanguage: C.o }
          })
          .withAnalytics({ page: 'front' }),
        R = n('H1k/'),
        T = n('SrtL'),
        O = n('FQwk'),
        B = n('kG2l'),
        D = n('muX9'),
        L = n('3XMw'),
        P = n.n(L),
        A = n('6oVL'),
        F = n('rJoH'),
        U = n('yoO3'),
        j = n('Es6L'),
        z = n('JkIr'),
        H = n('MWbm'),
        N = n('0yYu'),
        M = n('t62R'),
        W = n('/yvb'),
        q = n('cHvH'),
        V = n('TIdA'),
        K = n('A91F'),
        Q = n('rHpw'),
        G = n('pxuL'),
        X = n('5P4+'),
        Y = n('AS3p'),
        J = n('0+0m'),
        Z = n('VwDm'),
        $ = n('wz7L'),
        ee = n('dFWS'),
        te = n('lUZE'),
        ne = n('3rEN'),
        ae = n('1zbE'),
        re = n('XJCT'),
        oe = [
          { text: P.a.a62c9c33, Icon: Z.a },
          { text: P.a.cf39fca2, Icon: $.a },
          { text: P.a.j86184fd, Icon: ee.a },
        ],
        ce = P.a.d1091f50,
        ie = P.a.d9e109ae,
        se = P.a.eba1b197,
        le = P.a.a565833d,
        ue = P.a.aa95ddc0,
        de = P.a.fa811c30,
        pe = P.a.e919c3bc,
        he = P.a.e5b0e543,
        me = P.a.h0ff39da,
        fe = P.a.j3f49ff6,
        ye = P.a.ca86b62c
      function ge(e) {
        var t = S.a.useState(0),
          n = b()(t, 2),
          a = n[0],
          r = n[1],
          o = S.a.useCallback(function (e) {
            r(e || 0)
          }, [])
        return S.a.createElement(
          S.a.Fragment,
          null,
          S.a.createElement(w.a.Configure, { hideCookieBannerPicker: !0 }),
          S.a.createElement(k.a, null, S.a.createElement(R.a, { onHeightChange: o })),
          S.a.createElement(H.a, { style: [{ marginBottom: a }, Se.bannerPadderChildren] }, e.children),
        )
      }
      var be = (function (e) {
        p()(n, e)
        var t = m()(n)
        function n(e, a) {
          var o
          return (
            c()(this, n),
            (o = t.call(this, e, a)),
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
              var n = e ? Se.ctaButton : Se.ctaButtonMobile
              return S.a.createElement(
                H.a,
                { style: !o._thirdPartySsoButtonsEnabled && 'tablet' === e && Se.ctaButtonContainer },
                o._thirdPartySsoButtonsEnabled
                  ? S.a.createElement(
                      S.a.Fragment,
                      null,
                      o._renderSSOButtons(e, t),
                      S.a.createElement(
                        H.a,
                        { style: Se.gapContainer },
                        S.a.createElement(N.a, { label: S.a.createElement(M.b, { children: ye }) }),
                      ),
                      S.a.createElement(
                        W.a,
                        {
                          link: {
                            pathname: '/i/flow/signup',
                            state: { input: { requested_variant: JSON.stringify({ signup_type: ae.b }) } },
                          },
                          onPress: o._handleSignupButton,
                          size: 'medium',
                          style: [n, 'tablet' === e && Se.ctaButtonSplitSpacing, Se.ssoButtonStyles],
                          testID: z.a.signupButton,
                          type: 'brandFilled',
                        },
                        ue,
                      ),
                      S.a.createElement(M.b, { color: 'gray700', size: 'subtext3', style: [n, { width: J.b }] }, ae.c),
                      S.a.createElement(
                        H.a,
                        { style: Se.signInButtonContainer },
                        S.a.createElement(M.b, { size: 'headline2', style: n, weight: 'bold' }, de),
                        S.a.createElement(
                          W.a,
                          {
                            link: '/login',
                            onPress: o._handleLoginButton,
                            size: 'medium',
                            style: [n, 'tablet' === e && Se.ctaButtonSplitSpacing, Se.ssoButtonStyles],
                            testID: z.a.loginButton,
                            type: 'brandOutlined',
                          },
                          he,
                        ),
                      ),
                    )
                  : S.a.createElement(
                      S.a.Fragment,
                      null,
                      S.a.createElement(
                        W.a,
                        {
                          link: '/i/flow/signup',
                          onPress: o._handleSignupButton,
                          size: 'xLarge',
                          style: [n, 'tablet' === e && Se.ctaButtonSplitSpacing],
                          testID: z.a.signupButton,
                          type: 'brandFilled',
                        },
                        le,
                      ),
                      S.a.createElement(
                        W.a,
                        {
                          link: '/login',
                          onPress: o._handleLoginButton,
                          size: 'xLarge',
                          style: n,
                          testID: z.a.loginButton,
                          type: 'brandOutlined',
                        },
                        pe,
                      ),
                    ),
              )
            }),
            y()(u()(o), '_renderSSOButtons', function (e, t) {
              var n = o.state,
                a = n.buttonState,
                c = n.isCookieCompliant,
                i = e ? Se.ctaButton : Se.ctaButtonMobile,
                s = r()(r()({}, Se.ssoButtonStyles), {}, { width: t })
              return S.a.createElement(
                S.a.Fragment,
                null,
                S.a.createElement(B.a, {
                  buttonSize: 'medium',
                  buttonState: a,
                  customWidth: t,
                  displayType: J.e.Button,
                  isCookieCompliant:
                    o._cookieComplianceGingersnapEnabled && o._isPlaceholderSIWGButtonEnabled ? c : void 0,
                  onPress: o._handleCookieCompliance,
                  style: [i, 'tablet' === e && Se.ctaButtonSplitSpacing, s],
                }),
                S.a.createElement(_.a, {
                  buttonSize: 'medium',
                  buttonState: a,
                  style: [i, 'tablet' === e && Se.ctaButtonSplitSpacing, Se.ssoButtonStyles, Se.appleSsoButton],
                }),
              )
            }),
            y()(u()(o), '_renderUsernameInputField', function () {
              return S.a.createElement(
                H.a,
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
                H.a,
                { style: [ve.container, ve.halfForm] },
                o._renderUsernameInputField(),
                S.a.createElement(
                  W.a,
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
          s()(n, [
            {
              key: 'componentDidMount',
              value: function () {
                Object(j.a)() && this.context.setSideNavSupport(!1)
              },
            },
            {
              key: 'componentWillUnmount',
              value: function () {
                Object(j.a)() && this.context.setSideNavSupport(!0)
              },
            },
            {
              key: 'render',
              value: function () {
                var e = this,
                  t = !!ne.a[this._searchHomePageVariation]
                return S.a.createElement(
                  U.a,
                  null,
                  S.a.createElement(T.a, { title: me }),
                  S.a.createElement(F.a, {
                    canonical: 'https://twitter.com/',
                    description: fe,
                    title: me,
                    type: 'website',
                  }),
                  S.a.createElement(E.a, { deepLink: 'twitter://' }),
                  S.a.createElement(
                    D.a,
                    null,
                    S.a.createElement('meta', { content: 'NOODP', name: 'robots' }),
                    S.a.createElement('meta', { content: fe, name: 'description' }),
                  ),
                  S.a.createElement(q.a, null, function (n) {
                    var a = n.windowHeight,
                      r = n.windowWidth,
                      o = Object(X.e)(r, a),
                      c = o.deviceSize,
                      i = o.showLoginForm,
                      s = o.ssoButtonsWidth
                    return S.a.createElement(
                      H.a,
                      { style: Se.root },
                      t
                        ? S.a.createElement(ne.b, {
                            cookieComplianceFS:
                              e._cookieComplianceGingersnapEnabled && e._isPlaceholderSIWGButtonEnabled,
                            deviceSize: c,
                            variation: ne.a[e._searchHomePageVariation],
                          })
                        : S.a.createElement(
                            S.a.Fragment,
                            null,
                            S.a.createElement(
                              H.a,
                              { style: [Se.main, 'desktop' === c && Se.mainWide] },
                              e._renderCTA({ deviceSize: c, showLoginForm: i, ssoButtonsWidth: s }),
                              e._renderHero(c),
                            ),
                            S.a.createElement(ge, null, S.a.createElement(O.a, { align: 'center' })),
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
                  n = t.original,
                  a = t.variants
                return S.a.createElement(
                  H.a,
                  { style: [Se.block, Se.communication, Se.blockHero] },
                  S.a.createElement(
                    H.a,
                    { style: Se.blockImg },
                    S.a.createElement(V.a, {
                      accessibilityLabel: '',
                      aspectMode: K.a.COVER,
                      backgroundColor: Q.a.theme.colors.blue500,
                      customVariants: a,
                      draggable: !1,
                      image: n,
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
                  H.a,
                  { style: Se.communicationItems },
                  oe.map(function (t, n) {
                    var a = t.Icon,
                      r = t.text,
                      o = n + 1 === e
                    return S.a.createElement(
                      H.a,
                      { key: r, style: [Se.communicationItem, o && Se.communicationItemLast] },
                      S.a.createElement(a, { style: Se.communicationItemIcon }),
                      S.a.createElement(
                        M.b,
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
                  n = e.showLoginForm,
                  a = e.ssoButtonsWidth
                return S.a.createElement(
                  H.a,
                  { style: [Se.block, Se.blockCTA, 'tablet' === t && Se.blockTabletCTA] },
                  n ? this._renderLoginForm() : null,
                  S.a.createElement(
                    H.a,
                    { style: [Se.blockInnerWrapper, 'desktop' === t && Se.blockInnerWrapperWide] },
                    S.a.createElement(te.a, { style: Se.twitterIcon }),
                    S.a.createElement(
                      M.b,
                      { extendedWidth: !0, style: t ? Se.ctaTitleLarge : Se.ctaTitle, weight: 'bold' },
                      se,
                    ),
                    S.a.createElement(
                      M.b,
                      {
                        extendedWidth: !0,
                        size: t ? 'title2' : 'title4',
                        style: t ? Se.ctaTextLarge : Se.ctaText,
                        weight: 'bold',
                      },
                      ie,
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
                  ? S.a.createElement(
                      H.a,
                      { style: ve.container },
                      S.a.createElement(
                        A.a,
                        {
                          autoSubmit: t,
                          horizontalLayout: !0,
                          submitButtonSize: 'xLarge',
                          submitButtonStyle: ve.submitButtonStyle,
                          submitButtonType: 'brandOutlined',
                        },
                        this._renderUsernameInputField(),
                        S.a.createElement(
                          H.a,
                          { style: ve.inputContainer },
                          S.a.createElement(re.a, { onSubmitEditing: this._handleSubmitEditing, style: ve.input }),
                          S.a.createElement(
                            M.b,
                            {
                              link: {
                                pathname: 'https://twitter.com/account/begin_password_reset'.concat(a),
                                external: !0,
                                openInSameFrame: !0,
                              },
                              size: 'subtext2',
                              style: ve.forgotPassword,
                            },
                            ce,
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
        _e = x(be)
      t.default = _e
    },
    dFWS: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        o = n('ERkP'),
        c = n.n(o),
        i = n('Lsrn'),
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
                style: [i.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            c.a.createElement(
              'g',
              null,
              c.a.createElement('path', {
                d: 'M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z',
              }),
            ),
          )
        }
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
    hiGS: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        o = n('ERkP'),
        c = n.n(o),
        i = n('Lsrn'),
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
                style: [i.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            c.a.createElement(
              'g',
              null,
              c.a.createElement('path', {
                d: 'M20.746 5.236h-3.75V4.25c0-1.24-1.01-2.25-2.25-2.25h-5.5c-1.24 0-2.25 1.01-2.25 2.25v.986h-3.75c-.414 0-.75.336-.75.75s.336.75.75.75h.368l1.583 13.262c.216 1.193 1.31 2.027 2.658 2.027h8.282c1.35 0 2.442-.834 2.664-2.072l1.577-13.217h.368c.414 0 .75-.336.75-.75s-.335-.75-.75-.75zM8.496 4.25c0-.413.337-.75.75-.75h5.5c.413 0 .75.337.75.75v.986h-7V4.25zm8.822 15.48c-.1.55-.664.795-1.18.795H7.854c-.517 0-1.083-.246-1.175-.75L5.126 6.735h13.74L17.32 19.732z',
              }),
              c.a.createElement('path', {
                d: 'M10 17.75c.414 0 .75-.336.75-.75v-7c0-.414-.336-.75-.75-.75s-.75.336-.75.75v7c0 .414.336.75.75.75zm4 0c.414 0 .75-.336.75-.75v-7c0-.414-.336-.75-.75-.75s-.75.336-.75.75v7c0 .414.336.75.75.75z',
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
        c = n.n(o),
        i = n('Lsrn'),
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
                style: [i.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            c.a.createElement(
              'g',
              null,
              c.a.createElement('path', {
                d: 'M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z',
              }),
            ),
          )
        }
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
    kIAd: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      }),
        n.d(t, 'b', function () {
          return o
        })
      var a = n('0vv5'),
        r = 500,
        o = {
          scoper: [
            {
              type: 'dmUserSearch',
              regexp: /^[@＠]?(.*)|^$/,
              srcInputs: ['compose_message'],
              scope: { result_type: 'users', count: 20 },
            },
            {
              type: 'username',
              regexp: /^[@＠](\w{1,20})/,
              srcInputs: ['compose'],
              scope: { result_type: 'users', count: 20 },
            },
            { type: 'hashtag', regexp: n.n(a).a, srcInputs: ['compose'], scope: { result_type: 'topics', count: 20 } },
            { type: 'topic', regexp: /(.+)/, srcInputs: ['search_box'], scope: { result_type: 'all' } },
            {
              type: 'ttt',
              regexp: /(.+)/,
              srcInputs: ['welcome_flow'],
              scope: { count: 10, result_type: 'topics,ttt' },
            },
          ],
          WordBoundary: /[!'%&'()*+,\\\-./:;<=>?[\]^{|}~\s]|$/,
          WordEnd: /[^!'%&'()*+,\\\-./:;<=>?[\]^{|}~\s]+$/,
        }
    },
    n0Rl: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return U
      })
      var a = n('ddV6'),
        r = n.n(a),
        o = n('VrFO'),
        c = n.n(o),
        i = n('Y9Ll'),
        s = n.n(i),
        l = n('1Pcy'),
        u = n.n(l),
        d = n('5Yy7'),
        p = n.n(d),
        h = n('2VqO'),
        m = n.n(h),
        f = n('KEM+'),
        y = n.n(f),
        g = (n('2G9S'), n('lTEL'), n('7x/C'), n('87if'), n('ZUdG'), n('kYxP'), n('ERkP')),
        b = n.n(g),
        v = n('pXBW'),
        S = n('6/RC'),
        _ = n('UIzd'),
        E = n.n(_),
        k = n('kGix')
      n.d(t, 'a', function () {
        return k.a
      })
      var w = n('fs1G'),
        C = n('0KEI'),
        I = n('lU4h'),
        x = n.n(I),
        R = n('21nk'),
        T = n.n(R),
        O = n('bCEw'),
        B = n.n(O),
        D = n('Ud88'),
        L = n.n(D),
        P = function (e) {
          return (0, e.render)({ fetchStatus: k.a.LOADING, data: null, error: null, retry: w.a })
        },
        A = (function (e) {
          p()(n, e)
          var t = m()(n)
          function n() {
            var e
            c()(this, n)
            for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o]
            return (e = t.call.apply(t, [this].concat(r))), y()(u()(e), 'state', { error: null }), e
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
        })(b.a.Component),
        F = function (e) {
          var t = e.query,
            n = e.queryRef,
            a = e.render,
            r = T()(t, n)
          return a({ fetchStatus: k.a.LOADED, data: r, error: null, retry: w.a })
        },
        U = function (e, t) {
          if (S.canUseDOM)
            return function (n) {
              var a = n.fetchPolicy,
                o = void 0 === a ? 'store-or-network' : a,
                c = n.render,
                i = n.variables,
                s = B()(e),
                l = r()(s, 2),
                u = l[0],
                d = l[1],
                p = Object(C.useCreateLocalApiErrorHandler)(t.errorConfig.context),
                h = x()(i),
                m = r()(h, 1)[0],
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
                      { fallback: b.a.createElement(P, { render: c }) },
                      b.a.createElement(
                        A,
                        { errorHandler: p(t.errorConfig.options || {}), key: u.fetchKey, retry: f },
                        function (t, n) {
                          return t
                            ? c({ fetchStatus: k.a.FAILED, error: t, data: null, retry: n })
                            : b.a.createElement(F, { query: e, queryRef: u, render: c })
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
              c = a.variables,
              i = L()(),
              s = Object(C.useCreateLocalApiErrorHandler)(t.errorConfig.context),
              l = x()(c),
              u = r()(l, 1)[0],
              d = n.get(i)
            if (d) return d
            var p = b.a.lazy(function () {
              return E()(i, e, u)
                .toPromise()
                .then(
                  function (e) {
                    return o({ fetchStatus: k.a.LOADED, data: e, error: null, retry: w.a })
                  },
                  function (e) {
                    return e instanceof v.a
                      ? (s(t.errorConfig.options || {})(e),
                        o({ fetchStatus: k.a.FAILED, data: null, error: e, retry: w.a }))
                      : b.a.createElement(function () {
                          throw e
                        })
                  },
                )
                .then(function (e) {
                  return { default: n.set(i, e).get.bind(n, i) }
                })
            })
            return b.a.createElement(b.a.Suspense, null, b.a.createElement(p, null))
          }
        }
    },
    oEoC: function (e, t, n) {
      'use strict'
      n.d(t, 'e', function () {
        return u
      }),
        n.d(t, 'c', function () {
          return d
        }),
        n.d(t, 'b', function () {
          return p
        }),
        n.d(t, 'g', function () {
          return h
        }),
        n.d(t, 'a', function () {
          return m
        }),
        n.d(t, 'd', function () {
          return f
        }),
        n.d(t, 'f', function () {
          return g
        })
      var a = n('RhWx'),
        r = n.n(a),
        o = n('yiKp'),
        c = n.n(o),
        i =
          (n('hBpG'),
          n('7x/C'),
          n('vrRf'),
          n('KqXw'),
          n('WNMA'),
          n('M+/F'),
          n('LJOr'),
          n('tVqn'),
          n('jwue'),
          n('+oxZ'),
          n('z84I'),
          n('LW0h'),
          n('2G9S'),
          n('oQhu')),
        s = n('kIAd'),
        l = n('rHpw')
      function u(e, t) {
        var n,
          a = s.b.scoper.find(function (a) {
            if (-1 !== a.srcInputs.indexOf(t)) return (n = e.match(a.regexp))
          }),
          r = ''
        return n && (r = n && (1 === n.length ? n[0] : n[1])), a ? c()(c()({}, a.scope), {}, { src: t, q: r }) : null
      }
      function d(e, t) {
        var n = t.slice(0, e),
          a = t.slice(e, t.length),
          r = n.search(s.b.WordEnd),
          o = r >= 0 ? n.slice(r) : '',
          c = a.search(s.b.WordBoundary),
          i = o + a.slice(0, c)
        return i.trim() ? { start: r, end: e + c, word: i } : { start: -1, end: -1, word: '' }
      }
      function p() {
        return 'typeaheadFocus-'.concat(Math.random())
      }
      function h(e) {
        var t = e.altKey,
          n = e.ctrlKey,
          a = e.metaKey
        return !(t || n || a)
      }
      function m(e, t) {
        var n = []
        e.forEach(function (e) {
          var a = t.find(function (t) {
            return t.id === e.id
          })
          a && a.data && a.data.result_context ? n.push(a) : n.push(e)
        })
        var a = n.map(function (e) {
            return e.id
          }),
          o = t.filter(function (e) {
            return a.indexOf(e.id) < 0
          })
        return [].concat(n, r()(o))
      }
      var f = Object(i.a)(function (e) {
          return {
            bottom: 0,
            paddingBottom: 'calc(2.5 * '.concat(l.a.theme.spaces.space64, ')'),
            position: 'fixed',
            top: ''.concat(e, 'px'),
            transform: [{ translate3d: '0,0,0' }],
          }
        }),
        y = 0,
        g = function () {
          return 'typeaheadDropdown-'.concat((y += 1))
        }
    },
    rRIm: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return W
      })
      var a = n('yiKp'),
        r = n.n(a),
        o = n('VrFO'),
        c = n.n(o),
        i = n('Y9Ll'),
        s = n.n(i),
        l = n('1Pcy'),
        u = n.n(l),
        d = n('5Yy7'),
        p = n.n(d),
        h = n('2VqO'),
        m = n.n(h),
        f = n('KEM+'),
        y = n.n(f),
        g = (n('2G9S'), n('KqXw'), n('LJOr'), n('ERkP')),
        b = n.n(g),
        v = n('sTyV'),
        S = n('6/RC'),
        _ = n('sebV'),
        E = n('G6rE'),
        k = n('rxPX'),
        w = Object(k.a)()
          .propsFromState(function () {
            return { loggedInUser: E.e.selectLoggedInUser }
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUser
            return { loggedInUserScreenName: t ? t.screen_name : void 0 }
          }),
        C = n('3XMw'),
        I = n.n(C),
        x = n('OrGc'),
        R = n('QK5w'),
        T = n('aITJ'),
        O = n('MWbm'),
        B = n('TnY3'),
        D = n('rHpw'),
        L = n('t62R'),
        P = n('v6aA'),
        A = n('uScj'),
        F = n('fs1G'),
        U = n('BcsE'),
        j = n('VPAj'),
        z = I.a.b47e760d,
        H = I.a.fd2c7b43,
        N = new A.a(),
        M = function (e) {
          if (e.target instanceof HTMLInputElement) {
            var t = e.target.tagName.toLowerCase()
            return 'input' === t || 'textarea' === t
          }
          return !1
        },
        W = function (e) {
          return S.canUseDOM ? N.subscribe(e).unsubscribe : F.a
        },
        q = (function (e) {
          p()(n, e)
          var t = m()(n)
          function n() {
            var e
            c()(this, n)
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              y()(u()(e), '_bindKeyboardShortcuts', function () {
                var t,
                  n,
                  a = e.props,
                  o = a.history,
                  c = a.loggedInUserScreenName,
                  i = function (e) {
                    return function (t) {
                      t.preventDefault(),
                        N.getListeners().length
                          ? N.notify(e)
                          : o.push({ pathname: '/explore', state: { searchFocused: !0, searchPrefill: e } })
                    }
                  },
                  s =
                    ((t = {}),
                    y()(t, x.e.search, i()),
                    y()(t, x.e.goToUser, i('@')),
                    y()(t, x.e.openKeyboardShortcuts, function () {
                      return o.push('/i/keyboard_shortcuts')
                    }),
                    y()(t, x.e.goExplore, function () {
                      return o.push('/explore')
                    }),
                    y()(t, x.e.goSettings, function () {
                      return o.push('/settings')
                    }),
                    t),
                  l = function (e) {
                    var t
                    return (
                      (t = {}),
                      y()(t, x.e.goProfile, function () {
                        return o.push('/'.concat(e))
                      }),
                      y()(t, x.e.goLikes, function () {
                        return o.push('/'.concat(e, '/likes'))
                      }),
                      y()(t, x.e.goLists, function () {
                        return o.push('/'.concat(e, '/lists'))
                      }),
                      t
                    )
                  },
                  u = e.context.userClaims.isTrueAndEnabled('subscriptions_feature_1007'),
                  d =
                    c && u
                      ? r()(
                          r()({}, l(c)),
                          {},
                          y()({}, x.e.goTopArticles, function () {
                            return o.push('/i/articles')
                          }),
                        )
                      : c
                      ? l(c)
                      : {},
                  p = r()(
                    r()(r()({}, s), d),
                    {},
                    ((n = {}),
                    y()(n, x.e.goHome, function () {
                      return o.push('/home')
                    }),
                    y()(n, x.e.goDisplay, function () {
                      return o.push('/i/display')
                    }),
                    y()(n, x.e.goNotifications, function () {
                      return o.push('/notifications')
                    }),
                    y()(n, x.e.goMentions, function () {
                      return o.push('/notifications/mentions')
                    }),
                    y()(n, x.e.goMessages, function () {
                      return o.push('/messages')
                    }),
                    y()(n, x.e.newMessage, function () {
                      return o.push('/messages/compose')
                    }),
                    y()(n, x.e.newTweet, function () {
                      return o.push('/compose/tweet')
                    }),
                    y()(n, x.e.goMomentMaker, function () {
                      return o.push('/i/moment_maker')
                    }),
                    y()(n, x.e.goBookmarks, function () {
                      return o.push('/i/bookmarks')
                    }),
                    n),
                  ),
                  h = e.props.loggedInUserScreenName ? p : s
                e._unbindKeyboardShortcuts = Object(v.a)(h)
              }),
              y()(u()(e), '_handleKeyDown', function (t) {
                M(t) ||
                  'Backspace' !== t.key ||
                  ((e._backspaceDown = Date.now()), t.preventDefault(), t.stopPropagation())
              }),
              y()(u()(e), '_handleKeyUp', function (t) {
                if (!M(t) && 'Backspace' === t.key) {
                  t.preventDefault(), t.stopPropagation()
                  var n = e._backspaceDown,
                    a = !!Object(U.a)(n) && Date.now() - n < 500,
                    r = Object(R.a)({}, { location: e.props.location })
                  a && r ? e.props.history.goBack() : window.close()
                }
              }),
              e
            )
          }
          return (
            s()(n, [
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
                        O.a,
                        { accessibilityLevel: 2, accessibilityRole: 'heading', style: D.a.visuallyHidden },
                        b.a.createElement(L.b, null, z),
                        b.a.createElement(L.b, { focusable: !1, link: '/i/keyboard_shortcuts' }, H),
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(b.a.Component)
      y()(q, 'contextType', P.a)
      var V = w(q),
        K = S.canUseDOM ? Object(B.a)(V) : Object(j.a)(null)
      t.a = K
    },
    sYRn: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        o = n('eb3s'),
        c = n('3XMw'),
        i = n.n(c),
        s = n('4ZbN'),
        l = i.a.hffea05c,
        u = i.a.j037e373,
        d = i.a.d96cf7cd
      t.a = function (e) {
        var t = e.onCancel,
          n = e.onConfirm
        return r.a.createElement(o.a, {
          confirmButtonLabel: d,
          confirmButtonType: 'destructiveFilled',
          headline: l,
          onCancel: t,
          onConfirm: n,
          testID: s.a.deleteSavedSearchDialog,
          text: u,
        })
      }
    },
    u3ZE: function (e, t, n) {
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
    v4XE: function (e, t, n) {
      'use strict'
      n.d(t, 'd', function () {
        return E
      }),
        n.d(t, 'c', function () {
          return k
        }),
        n.d(t, 'a', function () {
          return w
        }),
        n.d(t, 'b', function () {
          return C
        })
      var a = n('KEM+'),
        r = n.n(a),
        o = n('RhWx'),
        c = n.n(o),
        i = n('yiKp'),
        s = n.n(i),
        l = n('T0aG'),
        u = n.n(l),
        d = (n('yH/f'), n('2G9S'), n('LW0h'), n('7x/C'), n('JtPf'), n('oEOe')),
        p = n('kGix'),
        h = n('Ssj5'),
        m = n('SrIh'),
        f = n('RqPI'),
        y = 'savedSearches',
        g = { fetchStatus: p.a.NONE, savedSearches: [] },
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
            var n = t.payload,
              a = Array.isArray(n)
            return (
              a ||
                Object(m.a)('Saved search results are not type array', { extra: { savedSearchResultsType: u()(n) } }),
              s()(s()({}, e), {}, { fetchStatus: p.a.LOADED, savedSearches: a && n ? n : [] })
            )
          case b.FAILURE:
            return s()(s()({}, e), {}, { fetchStatus: p.a.FAILED })
          case v.SUCCESS:
            return s()(
              s()({}, e),
              {},
              { savedSearches: t.payload ? [].concat(c()(e.savedSearches), [t.payload]) : e.savedSearches },
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
      h.a.register(r()({}, y, _))
      var E = function (e) {
          return e.savedSearches.savedSearches
        },
        k = function (e) {
          return function (t, n, a) {
            var r = a.api
            return Object(d.b)(t, { request: r.SavedSearches.create, params: { query: e } })({
              actionTypes: v,
              context: 'SAVE_SEARCH',
            })
          }
        },
        w = function (e) {
          return function (t, n, a) {
            var r = a.api
            return Object(d.b)(t, { request: r.SavedSearches.destroy, params: { id: e } })({
              actionTypes: S,
              context: 'DELETE_SAVED_SEARCH',
            })
          }
        },
        C = function () {
          return function (e, t, n) {
            n.api
            var a = t()
            return Object(f.m)(a)
              ? (function (e) {
                  return e.savedSearches.fetchStatus
                })(a) === p.a.LOADED
                ? Promise.resolve()
                : e(function (e, t, n) {
                    var a = n.api
                    return Object(d.b)(e, { request: a.SavedSearches.fetch, params: {} })({
                      actionTypes: b,
                      context: 'FETCH_SAVED_SEARCHES',
                    })
                  })
              : Promise.resolve()
          }
        }
    },
    wtjx: function (e, t, n) {
      'use strict'
      n.d(t, 'g', function () {
        return m
      }),
        n.d(t, 'f', function () {
          return f
        }),
        n.d(t, 'e', function () {
          return y
        }),
        n.d(t, 'd', function () {
          return S
        }),
        n.d(t, 'b', function () {
          return E
        }),
        n.d(t, 'a', function () {
          return w
        }),
        n.d(t, 'c', function () {
          return C
        })
      var a = n('KEM+'),
        r = n.n(a),
        o = n('yiKp'),
        c = n.n(o),
        i = (n('7x/C'), n('JtPf'), n('LW0h'), n('Ee2X'), n('Ssj5')),
        s = n('RqPI'),
        l = 'recentSearches',
        u = 'rweb.recentSearches',
        d = function (e) {
          return function (t, n, a) {
            return a.userPersistence.set(u, { recentSearches: e }).catch(function () {
              Promise.resolve()
            })
          }
        },
        p = function (e, t) {
          var n = []
          if (e && e.user) {
            var a = e.user
            n = t.filter(function (e) {
              return e.keyword || e.topic || e.event || (e.user && e.user.id !== a.id)
            })
          } else if (e && e.topic) {
            var r = e.topic
            n = t.filter(function (e) {
              return e.keyword || e.user || e.event || (e.topic && e.topic.id !== r.id)
            })
          } else if (e && e.event) {
            var o = e.event
            n = t.filter(function (e) {
              return e.keyword || e.user || e.topic || (e.event && e.event.id !== o.id)
            })
          } else if (e && e.keyword) {
            var c = e.keyword
            n = t.filter(function (e) {
              return (e.keyword && e.keyword.query !== c.query) || e.user || e.topic || e.event
            })
          }
          return n
        },
        h = { fetched: !1, recentSearches: [] }
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
          return function (t, n, a) {
            a.userPersistence
            t({ payload: e, type: v })
            var r = n().recentSearches
            return Object(s.m)(n()) ? t(d(r.recentSearches)) : Promise.resolve()
          }
        },
        _ = 'rweb/recentSearches/CLEAR_ALL',
        E = function () {
          return function (e, t, n) {
            n.userPersistence
            e({ type: _ })
            var a = t().recentSearches
            return Object(s.m)(t()) ? e(d(a.recentSearches)) : Promise.resolve()
          }
        },
        k = 'rweb/recentSearches/ADD_QUERY',
        w = function (e) {
          return function (t, n, a) {
            a.userPersistence
            t({ payload: e, type: k })
            var r = n().recentSearches
            return Object(s.m)(n()) ? t(d(r.recentSearches)) : Promise.resolve()
          }
        },
        C = function () {
          return function (e, t, n) {
            n.userPersistence
            return t().recentSearches.fetched
              ? Promise.resolve()
              : e(function (e, t, n) {
                  var a = n.userPersistence,
                    r = t()
                  return Object(s.m)(r)
                    ? a
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
      i.a.register(
        r()({}, l, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case k:
              var n = t.payload,
                a = n ? p(n, e.recentSearches) : []
              return a.length > 49 && a.splice(49, 1), n && a.unshift(n), c()(c()({}, e), {}, { recentSearches: a })
            case v:
              var r = t.payload,
                o = r ? p(r, e.recentSearches) : []
              return c()(c()({}, e), {}, { recentSearches: o })
            case _:
              return { fetched: !0, recentSearches: [] }
            case g:
              return c()(c()(c()({}, e), t.payload), {}, { fetched: !0 })
            default:
              return e
          }
        }),
      )
    },
    wz7L: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        o = n('ERkP'),
        c = n.n(o),
        i = n('Lsrn'),
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
                style: [i.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            c.a.createElement(
              'g',
              null,
              c.a.createElement('path', {
                d: 'M16.695 13.037c1.185 0 2.51-.132 3.368-1.11.72-.823.952-2.08.715-3.847-.333-2.478-1.86-3.956-4.083-3.956-2.225 0-3.75 1.48-4.084 3.956-.236 1.766-.002 3.023.717 3.846.858.98 2.184 1.11 3.368 1.11zM14.098 8.28c.134-.992.648-2.656 2.598-2.656 1.948 0 2.463 1.664 2.597 2.655.174 1.293.054 2.187-.358 2.657-.367.42-1.036.6-2.238.6s-1.87-.18-2.24-.6c-.412-.47-.533-1.364-.36-2.658zm9.788 11.222c-.763-3.066-3.72-5.208-7.19-5.208-1.765 0-3.392.558-4.67 1.505-1.278-.948-2.905-1.506-4.67-1.506-3.47 0-6.428 2.142-7.19 5.208-.156.625-.025 1.265.356 1.754.37.473.94.744 1.567.744h19.87c.628 0 1.2-.27 1.57-.745.382-.49.512-1.13.356-1.753zm-1.537.83c-.09.11-.22.168-.39.168h-7.413c.078-.32.084-.66 0-.998-.25-1-.75-1.888-1.41-2.65.993-.665 2.223-1.058 3.558-1.058 2.78 0 5.14 1.674 5.735 4.07.044.174.014.344-.08.467zM7.354 20.5H2.09c-.17 0-.3-.057-.388-.168-.096-.123-.126-.294-.083-.47.596-2.395 2.954-4.068 5.735-4.068 2.78 0 5.14 1.674 5.735 4.07.043.174.014.344-.082.467-.088.113-.22.17-.388.17H7.355zm.001-7.463c1.185 0 2.51-.132 3.367-1.11.72-.823.953-2.08.716-3.847-.333-2.478-1.86-3.956-4.083-3.956-2.225 0-3.75 1.48-4.084 3.956-.236 1.766-.002 3.023.717 3.846.858.98 2.184 1.11 3.368 1.11zM4.758 8.28c.134-.992.648-2.656 2.598-2.656 1.948 0 2.463 1.664 2.597 2.655.174 1.293.053 2.187-.358 2.658-.368.42-1.037.6-2.238.6-1.202 0-1.87-.18-2.24-.6-.412-.47-.533-1.365-.36-2.66z',
              }),
            ),
          )
        }
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
    x1T0: function (e, t, n) {
      'use strict'
      n.r(t)
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
      ;(r.hash = 'd776a0f7400b83db0b925f0352d2b751'), (t.default = r)
    },
  },
])
//# sourceMappingURL=WIPED
