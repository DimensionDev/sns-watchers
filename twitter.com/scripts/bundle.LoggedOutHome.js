;(window.webpackJsonp = window.webpackJsonp || []).push([
  [62],
  {
    '21nk': function (e, t, n) {
      'use strict'
      var a = n('I9iR'),
        r = n('3KVO'),
        o = n('yLYC'),
        i = n('Ud88'),
        c = (n('/2Cm'), n('aQQo').useTrackLoadQueryInRender),
        s = (n('ERkP').useDebugValue, n('K1lQ').__internal),
        l = s.fetchQueryDeduped,
        u = s.fetchQuery
      e.exports = function (e, t, n) {
        c()
        var s,
          d = i(),
          p = t.fetchKey,
          h = t.fetchPolicy,
          m = t.source,
          f = t.variables,
          g = t.networkCacheConfig,
          b = o(e, f, g)
        if ('PreloadedQuery_DEPRECATED' === t.kind)
          b.request.node.params.name !== t.name && a(!1),
            (s = {
              componentDisplayName: 'usePreloadedQuery()',
              fetchKey: p,
              fetchObservable: l(d, b.request.identifier, function () {
                return d === t.environment && null != m
                  ? d.executeWithSource({ operation: b, source: m })
                  : d.execute({ operation: b })
              }),
              fetchPolicy: h,
              query: b,
              renderPolicy: null == n ? void 0 : n.UNSTABLE_renderPolicy,
            })
        else {
          var y = u(d, b)
          s = {
            componentDisplayName: 'usePreloadedQuery()',
            fetchObservable: null != m && d === t.environment ? m.ifEmpty(y) : (t.environment, y),
            fetchKey: p,
            fetchPolicy: h,
            query: b,
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
        i = n('Hde2'),
        c = n('bojF'),
        s = n('3XMw'),
        l = n.n(s),
        u = n('lUZE'),
        d = n('1f8Q'),
        p = n('rHpw'),
        h = n('MWbm'),
        m = n('yiKp'),
        f = n.n(m),
        g = (n('M+/F'), n('z84I'), n('uFXj'), n('2G9S'), n('FQwk')),
        b = n('iCMz'),
        y = n('Rp9C'),
        S = n('72nz'),
        v = n('Irs7'),
        _ = n('htQn'),
        E = n('t62R'),
        k = l.a.d228a9a0,
        w = l.a.jae84f3a,
        I = { section: 'logged_out_search', component: 'trend' },
        C = function (e) {
          var t = e.position,
            n = e.trend,
            a = Object(v.b)(),
            r = o.a.useMemo(
              function () {
                return [f()(f()({}, y.a.getTrendItem(n)), {}, { position: t })]
              },
              [n, t],
            )
          o.a.useEffect(
            function () {
              a.scribe(f()(f()({}, I), {}, { action: 'impression', data: { items: r } }))
            },
            [a, r],
          )
          var i = '/search?src=logged_out_home_trend_click&vertical=trends&q='.concat(encodeURIComponent(n))
          return o.a.createElement(
            _.a,
            {
              accessibilityRole: 'listitem',
              onClick: function () {
                return a.scribe(f()(f()({}, I), {}, { action: 'click', data: { items: r } }))
              },
              withInteractiveStyling: !1,
            },
            o.a.createElement(E.b, { color: 'gray700', key: n, link: i, size: 'body', style: R.searchTrend }, n),
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
              style: [R.searchTrends, 'left' === t && R.searchTrendsLeft],
            },
            n.map(function (e, t) {
              return o.a.createElement(C, { key: e, position: t, trend: e })
            }),
            o.a.createElement(
              _.a,
              { accessibilityRole: 'listitem', withInteractiveStyling: !1 },
              o.a.createElement(E.b, { link: '/explore', style: R.searchTrend }, k),
            ),
          )
        },
        T = function (e) {
          var t = e.alignment,
            n = e.deviceSize,
            a = e.trendResults,
            r = 'tablet' !== n && 'desktop' !== n
          return o.a.createElement(
            h.a,
            {
              style: [
                R.searchBoxTrendsContainer,
                r && R.searchBoxTrendsContainerMobile,
                'tablet' === n && R.searchBoxTrendsContainerTablet,
                'desktop' === n && R.searchBoxTrendsContainerDesktop,
              ],
            },
            o.a.createElement(
              h.a,
              { style: R.searchBox },
              o.a.createElement(S.default, { forceVdlDisable: !1, isOnHomepage: !0, shouldHandleSearchShortcut: !0 }),
            ),
            a && o.a.createElement(x, { alignment: t, deviceSize: n, trendResults: a }),
          )
        },
        R = p.a.create(function (e) {
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
        B = function (e) {
          var t = e.deviceSize,
            n = e.scribeNamespace,
            a = e.trendResults,
            r = function () {
              return o.a.createElement(b.a, {
                buttonSize: 'large',
                loginButtonType: 'primaryOutlined',
                scribeNamespace: f()(
                  f()({}, n),
                  {},
                  { component: 'signup_callout', element: 'form', section: 'front' },
                ),
                signupButtonType: 'primaryFilled',
              })
            }
          return o.a.createElement(
            o.a.Fragment,
            null,
            'desktop' !== t
              ? o.a.createElement(i.a, { style: R.bottomBarForMobile }, r())
              : o.a.createElement(
                  h.a,
                  { style: R.searchNavBar },
                  o.a.createElement(h.a, { style: R.searchNavButtons }, r()),
                ),
            o.a.createElement(
              h.a,
              { style: [R.searchRoot, 'desktop' !== t && R.searchRootMobile] },
              o.a.createElement(u.a, { style: R.twitterIconSearch }),
              o.a.createElement(T, { deviceSize: t, trendResults: a }),
            ),
            o.a.createElement(
              c.CookieComplianceBannerPadder,
              null,
              o.a.createElement(
                h.a,
                { style: [R.searchHomeFooter, 'desktop' !== t && R.searchHomeFooterMobile] },
                o.a.createElement(g.a, { align: 'center' }),
              ),
            ),
          )
        },
        L = l.a.g0ff1ca8,
        O = l.a.g3aa4a89,
        D = p.a.create(function (e) {
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
              { style: [R.searchRoot, 'desktop' !== t && R.searchRootMobile, D.searchRootWithBanner] },
              o.a.createElement(u.a, { style: R.twitterIconSearch }),
              o.a.createElement(T, { deviceSize: t, trendResults: n }),
            ),
            o.a.createElement(
              c.CookieComplianceBannerPadder,
              null,
              o.a.createElement(
                i.a,
                { style: D.bottomBarBanner },
                o.a.createElement(d.a, { buttonSize: 'large', fullWidth: !0, subtext: O, text: L }),
              ),
            ),
          )
        },
        A = n('n0Rl'),
        F = n('RgK2'),
        U = n.n(F),
        z = n('kGix'),
        N = (n('enFi'), n('ddV6')),
        H = n.n(N),
        j = (n('0zG9'), n('UpKB')),
        M = n('v6aA'),
        q = n('5P4+'),
        V = n('kG2l'),
        W = n('JkIr'),
        K = n('0yYu'),
        Q = n('/yvb'),
        G = n('AS3p'),
        X = n('1zbE'),
        J = l.a.ca86b62c,
        Y = l.a.aa95ddc0,
        Z = l.a.b0dbe914,
        $ = l.a.ae03a21c,
        ee = 360,
        te = function (e) {
          var t = e.buttonState,
            n = e.cookieComplianceFS,
            a = e.deviceSize,
            r = o.a.useContext(M.a).featureSwitches,
            i = Object(G.c)(r) === G.a.AcceptAllCookies,
            c = o.a.useState(i),
            s = H()(c, 2),
            l = s[0],
            u = s[1],
            d = 'tablet' !== a && 'desktop' !== a
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(V.a, {
              buttonSize: 'medium',
              buttonState: t,
              customWidth: d ? 300 : ee,
              isCookieCompliant: n ? l : void 0,
              onPress: function () {
                u(!0)
              },
              style: [ne.ctaButton, ne.ssoButtonStyles, d && ne.containerThin],
            }),
            o.a.createElement(j.a, {
              buttonSize: 'medium',
              buttonState: t,
              style: [ne.ctaButton, ne.ssoButtonStyles, { marginBottom: 0 }, d && ne.containerThin],
            }),
          )
        },
        ne = p.a.create(function (e) {
          return {
            containerThin: { width: 300 },
            ctaButton: { maxWidth: ''.concat(q.a, 'px'), flex: 1 },
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
            gapContainer: { marginVertical: e.spaces.space4, maxWidth: ''.concat(q.a, 'px'), width: ee },
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
            a = e.scribeNamespace,
            r = e.trendResults,
            i = o.a.useState(X.a.SignUp),
            s = H()(i, 2),
            d = s[0],
            p = s[1],
            m = Object(v.b)(),
            b = 'tablet' !== n && 'desktop' !== n,
            y = function () {
              m.scribe(
                f()(
                  f()({}, a),
                  {},
                  { section: 'front', component: 'signup_callout', element: 'form', action: 'signup' },
                ),
              )
            },
            S = function () {
              m.scribe(
                f()(
                  f()({}, a),
                  {},
                  { section: 'front', component: 'signup_callout', element: 'form', action: 'login' },
                ),
              )
            },
            _ =
              (function () {
                switch (d) {
                  case X.a.SignUp:
                    return {
                      loginSignUpButtonLabel: Y,
                      loginSignUpButtonLink: {
                        pathname: '/i/flow/signup',
                        state: { input: { requested_variant: JSON.stringify({ signup_type: X.b }) } },
                      },
                      handleLoginSignUpButton: y,
                    }
                  case X.a.LogIn:
                    return { loginSignUpButtonLabel: Z, loginSignUpButtonLink: '/login', handleLoginSignUpButton: S }
                  default:
                    return
                }
              })() || {},
            k = _.handleLoginSignUpButton,
            w = _.loginSignUpButtonLabel,
            I = _.loginSignUpButtonLink,
            C = o.a.createElement(
              h.a,
              { style: [ne.footerContainer, b && ne.containerThin] },
              o.a.createElement(E.b, { color: 'gray700', size: 'subtext2', style: ne.ctaText }, X.c),
              o.a.createElement(
                E.b,
                { align: 'left', style: !n && ne.ctaText, testID: W.a.logInSignUpFooter, weight: 'medium' },
                (function () {
                  switch (d) {
                    case X.a.SignUp:
                      return (
                        (e = {
                          onPress: function () {
                            return p(X.a.LogIn)
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
                          return p(X.a.SignUp)
                        },
                      })
                    default:
                      return
                  }
                  var e
                })(),
              ),
            ),
            x = o.a.createElement(
              o.a.Fragment,
              null,
              o.a.createElement(te, { buttonState: d, cookieComplianceFS: t, deviceSize: n }),
              o.a.createElement(
                h.a,
                { style: [ne.gapContainer, b && ne.containerThin] },
                o.a.createElement(K.a, {
                  borderColor: 'nestedBorderColor',
                  label: o.a.createElement(E.b, { children: J }),
                }),
              ),
              o.a.createElement(
                Q.a,
                {
                  backgroundColor: 'white',
                  borderColor: 'gray200',
                  color: 'gray1100',
                  link: I,
                  onPress: k,
                  size: 'medium',
                  style: [ne.ctaButton, ne.ssoButtonStyles, b && ne.containerThin],
                  testID: W.a.signupButton,
                },
                w,
              ),
            ),
            B = o.a.createElement(
              c.CookieComplianceBannerPadder,
              null,
              o.a.createElement(
                h.a,
                { style: [R.searchHomeFooter, { marginBottom: '0' }] },
                o.a.createElement(g.a, { align: 'center' }),
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
                      b && ne.headerMobile,
                      'tablet' === n && ne.headerTablet,
                      'desktop' === n && ne.headerDesktop,
                    ],
                  },
                  o.a.createElement(u.a, { style: [R.twitterIconSearch, ne.twitterIconSearchLeft] }),
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
                o.a.createElement(T, { alignment: 'left', deviceSize: n, trendResults: r }),
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
                x,
                C,
              ),
            ),
            B,
          )
        },
        re = Object.freeze({ original: 'original', banner: 'banner', split: 'split' }),
        oe = void 0 !== a ? a : (a = n('x1T0')),
        ie = Object(A.b)(oe, { errorConfig: { context: 'LOGGED_OUT_SEARCH_SCREEN' } })
      t.b = function (e) {
        var t = e.cookieComplianceFS,
          n = e.deviceSize,
          a = e.scribeNamespace,
          r = e.variation
        return o.a.createElement(ie, {
          render: function (e) {
            var i,
              c = e.data,
              s = e.fetchStatus,
              l =
                (e.retry,
                s === z.a.LOADED
                  ? null == c || null === (i = c.logged_out_trends_list) || void 0 === i
                    ? void 0
                    : i.trends
                  : void 0)
            return r === re.original
              ? o.a.createElement(B, { deviceSize: n, scribeNamespace: a, trendResults: l })
              : r === re.banner
              ? o.a.createElement(P, { deviceSize: n, trendResults: l })
              : r === re.split
              ? o.a.createElement(ae, { cookieComplianceFS: t, deviceSize: n, scribeNamespace: a, trendResults: l })
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
        return o
      }),
        n.d(t, 'b', function () {
          return i
        }),
        n.d(t, 'c', function () {
          return c
        }),
        n.d(t, 'e', function () {
          return u
        }),
        n.d(t, 'd', function () {
          return d
        })
      n('3voH')
      var a = 'https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png',
        r = 'https://abs.twimg.com/sticky/illustrations/lohp_1302x955.png',
        o = 380,
        i = 2 * o,
        c = 1.15 * o,
        s = 500,
        l = 1e3,
        u = function (e, t) {
          return { deviceSize: e > l ? 'desktop' : e > s ? 'tablet' : void 0, showLoginForm: e / 2 > 500 && t >= 750 }
        },
        d = function (e) {
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
              { uri: t ? a : r, width: 1302, height: 955 },
            ],
            original: { url: t ? a : r, width: 1302, height: 958 },
          }
        }
    },
    '72nz': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'SearchBoxContainer', function () {
          return ct
        })
      var a = n('yiKp'),
        r = n.n(a),
        o = n('97Jx'),
        i = n.n(o),
        c = n('VrFO'),
        s = n.n(c),
        l = n('Y9Ll'),
        u = n.n(l),
        d = n('1Pcy'),
        p = n.n(d),
        h = n('5Yy7'),
        m = n.n(h),
        f = n('2VqO'),
        g = n.n(f),
        b = n('KEM+'),
        y = n.n(b),
        S = n('RhWx'),
        v = n.n(S),
        _ =
          (n('2G9S'),
          n('tQbP'),
          n('z84I'),
          n('hBvt'),
          n('ho0z'),
          n('KqXw'),
          n('WNMA'),
          n('MvUL'),
          n('3uku'),
          n('ERkP')),
        E = n.n(_),
        k = n('+Kfv'),
        w = n('wtjx'),
        I = n('rxPX'),
        C = Object(I.a)()
          .propsFromActions(function () {
            return { addQuery: w.a }
          })
          .withAnalytics({ component: 'search_box' }),
        x = n('Hw0q'),
        T = n('3XMw'),
        R = n.n(T),
        B = n('8jkQ'),
        L = n('u3ZE'),
        O = n('rRIm'),
        D = n('Rp9C'),
        P =
          (n('LW0h'),
          n('7x/C'),
          n('vrRf'),
          n('5BYb'),
          n('+KXO'),
          n('jQ3i'),
          n('x4t0'),
          n('M+/F'),
          n('wFPu'),
          n('vfdX'),
          n('lnti')),
        A = n('hqKg'),
        F = n('3IPs'),
        U = n('M0jS'),
        z = n('G6rE'),
        N = n('k49u'),
        H = n('J4ZH'),
        j = n('0KEI'),
        M = n('v4XE'),
        q = n('kGix'),
        V = function (e) {
          return (
            Object(N.c)(e, N.a.GenericUserNotFound) ||
            Object(N.c)(e, N.a.OtherUserSuspended) ||
            Object(N.c)(e, N.a.AddressBookLookupNotFound)
          )
        },
        W = Object(I.a)()
          .propsFromState(function () {
            var e = Object(A.createSelector)(w.g, z.e.selectFetchStatuses, function (e, t) {
                var n = Object(P.a)(
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
                return (e[q.a.FAILED] || []).map(function (e) {
                  return e.id
                })
              }),
              n = Object(A.createSelector)(e, z.e.selectErrors, function (e, t) {
                return (e[q.a.FAILED] || [])
                  .filter(function (e) {
                    var n = e.id
                    return V(t[n] || {})
                  })
                  .map(function (e) {
                    return e.id
                  })
              }),
              a = Object(A.createSelector)(e, z.e.selectErrors, function (e, t) {
                var n = (e[q.a.FAILED] || []).filter(function (e) {
                  var n = e.id
                  return !V(t[n] || {})
                })
                return (e[q.a.LOADING] || []).length > 0
                  ? q.a.LOADING
                  : (e[q.a.LOADED] || []).length > 0
                  ? q.a.LOADED
                  : n.length > 0
                  ? q.a.FAILED
                  : q.a.NONE
              }),
              o = Object(A.createSelector)(w.g, function (e) {
                return e.map(function (e) {
                  return r()(r()({}, e), {}, { category: F.b.RecentSearch })
                })
              }),
              i = Object(A.createSelector)(M.d, function (e) {
                return e.map(function (e) {
                  return { keyword: { query: e.query }, savedSearchId: e.id_str, category: F.b.SavedSearch }
                })
              })
            return {
              isRecentSearchDataLoaded: w.e,
              recentSearches: o,
              usersFetchStatus: a,
              invalidRecentSearchUserIds: n,
              failedRecentSearchUserIds: t,
              savedSearches: i,
            }
          })
          .adjustStateProps(function (e) {
            var t = e.failedRecentSearchUserIds,
              n = e.invalidRecentSearchUserIds,
              a = e.isRecentSearchDataLoaded,
              r = e.recentSearches,
              o = e.savedSearches,
              i = e.usersFetchStatus,
              c = !r.filter(function (e) {
                var t = e.user
                return t && n.indexOf(t.id) < 0
              }).length,
              s = i !== q.a.LOADING && a && c ? q.a.LOADED : i
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
              clearAll: w.b,
              createLocalApiErrorHandler: Object(j.createLocalApiErrorHandlerWithContextFactory)('SEARCH_ONE_CLICK'),
              deleteSavedSearch: M.a,
              fetchRecentSearchesIfNeeded: w.c,
              fetchSavedSearchesIfNeeded: M.b,
              fetchUsersIfNeeded: z.e.fetchManyIfNeeded,
              fetchUsersPresenceIfNeeded: U.b.fetchManyIfNeeded,
              removeQuery: w.d,
            }
          })
          .withAnalytics({ element: 'typeahead' }),
        K = n('sYRn'),
        Q = n('v//M'),
        G = n('7nmT'),
        X = n.n(G),
        J = (n('1t7P'), n('jQ/y'), n('m3Bd')),
        Y = n.n(J),
        Z = n('hOZg'),
        $ = n('5T6p'),
        ee = n('MWbm'),
        te = n('/yvb'),
        ne = n('rHpw'),
        ae = ['id', 'onRemove'],
        re = R.a.e68b09b4,
        oe = (function (e) {
          m()(n, e)
          var t = g()(n)
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
                    a = Y()(e, ae)
                  return t
                    ? E.a.createElement(
                        ee.a,
                        { style: ie.root },
                        E.a.createElement($.a, a),
                        E.a.createElement(te.a, {
                          accessibilityLabel: re,
                          icon: E.a.createElement(Z.a, null),
                          onPress: n,
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
        ie = ne.a.create(function (e) {
          return { root: { flexDirection: 'row', justifyContent: 'space-between' }, button: { alignSelf: 'center' } }
        }),
        ce = oe,
        se = n('j7Bv'),
        le = n('5mJL'),
        ue = n('t62R'),
        de = n('EHV7'),
        pe = E.a.createElement(Z.a, null),
        he = R.a.e68b09b4,
        me = (function (e) {
          m()(n, e)
          var t = g()(n)
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
                  var i = o ? 'xxxLarge' : 'xLarge',
                    c = E.a.createElement(se.a, { Icon: de.a, color: 'primary', size: i, style: fe.searchIcon })
                  return E.a.createElement(
                    le.a,
                    { avatarCell: c, avatarSize: i, cellStyle: fe.bodyColumn },
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
        ge = function (e, t) {
          return z.e.select(e, t.id)
        },
        be = function (e, t) {
          return Object(U.c)(e, t.id)
        },
        ye = Object(I.a)().propsFromState(function () {
          return { user: ge, userSpace: be }
        }),
        Se = n('v6aA'),
        ve = n('IMA+'),
        _e = E.a.createElement(Z.a, null),
        Ee = R.a.e68b09b4,
        ke = R.a.fd06b02f,
        we = (function (e) {
          m()(n, e)
          var t = g()(n)
          function n() {
            var e
            s()(this, n)
            for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              y()(p()(e), '_handleAvatarClick', function () {
                e.props.userSpace || e._handleClick()
              }),
              y()(p()(e), '_handleClick', function () {
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
                    i = this.context.featureSwitches
                  if (!a) return null
                  var c = r && i.isTrue('voice_rooms_recent_search_audiospace_ring_enabled') ? r : void 0
                  c && (c.accessibilityLabel = ke({ screenName: a.screen_name }))
                  var s = E.a.createElement(te.a, {
                    accessibilityLabel: Ee,
                    icon: _e,
                    onPress: t,
                    size: 'small',
                    type: 'brandText',
                  })
                  return E.a.createElement(ve.a, {
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
                    presenceIndicator: c,
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
      y()(we, 'contextType', Se.a)
      var Ie = ye.forwardRef(we),
        Ce = n('oQhu'),
        xe = n('hiGS'),
        Te = n('Gfoi'),
        Re = E.a.createElement(Z.a, null),
        Be = E.a.createElement(xe.a, null),
        Le = Object(Ce.a)(function (e) {
          return e === F.b.SavedSearch ? 'destructiveText' : 'brandText'
        }),
        Oe = Object(Ce.a)(function (e) {
          return e === F.b.SavedSearch ? Be : Re
        }),
        De = (function (e) {
          m()(n, e)
          var t = g()(n)
          function n() {
            var e
            s()(this, n)
            for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              y()(p()(e), '_getButtonType', function () {
                var t = e.props.category
                return Le(t)
              }),
              y()(p()(e), '_getRemoveIcon', function () {
                var t = e.props.category
                return Oe(t)
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
                    r = E.a.createElement(se.a, { Icon: Te.a, color: 'neutral', size: a, style: Pe.searchIcon })
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
        Ae = De,
        Fe = n('htQn'),
        Ue = (function (e) {
          m()(n, e)
          var t = g()(n)
          function n(e, a) {
            var r
            return (
              s()(this, n),
              (r = t.call(this, e, a)),
              y()(p()(r), '_renderSearchItem', function () {
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
                  ? E.a.createElement(Ie, {
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
                  ? E.a.createElement(ce, {
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
              y()(p()(r), '_handleItemRef', function (e) {
                r._itemRef = e
              }),
              y()(p()(r), '_handleOnRemove', function (e) {
                var t = r.props,
                  n = t.index,
                  a = t.item
                ;(0, t.onRemoveQuery)(a, n), e.stopPropagation()
              }),
              y()(p()(r), '_handleOnClick', function () {
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
                    { viewType: 'search_item' },
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
      y()(Ue, 'contextType', Se.a)
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
        Ne = Ue,
        He = n('4ZbN'),
        je = n('eb3s'),
        Me = n('MXDK'),
        qe = R.a.ee295fbe,
        Ve = { headline: R.a.f45c425f, text: R.a.caae4dd9, confirmButtonLabel: R.a.dbd5d40f },
        We = R.a.a8d68f61,
        Ke = R.a.c6530778,
        Qe = R.a.e047b8fa,
        Ge = ['user', 'keyword'],
        Xe = (function (e) {
          m()(n, e)
          var t = g()(n)
          function n(e, a) {
            var o
            s()(this, n),
              (o = t.call(this, e, a)),
              y()(p()(o), '_withNewTypeaheadUI', !1),
              y()(p()(o), '_getRecentSearchItems', function () {
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
              y()(p()(o), '_render', function () {
                var e = o.props,
                  t = e.domId,
                  n = e.savedSearches,
                  a = 0 === o._getNumOfSearchItems(),
                  r = o._getRecentSearchItems()
                return a
                  ? E.a.createElement(
                      ee.a,
                      { style: Je.emptyState, testID: He.a.typeaheadEmptySearch },
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
                              { style: Je.header, testID: He.a.typeaheadRecentSearchesHeader },
                              E.a.createElement(ue.b, { numberOfLines: 1, size: 'headline1', weight: 'bold' }, We),
                              E.a.createElement(
                                te.a,
                                { onPress: o._handleClearAllClick, size: 'xSmall', type: 'brandText' },
                                Qe,
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
                                testID: He.a.typeaheadSavedSearchesHeader,
                              },
                              E.a.createElement(ue.b, { numberOfLines: 1, size: 'headline1', weight: 'bold' }, Ke),
                            ),
                            o._renderSavedSearches(),
                          )
                        : null,
                    )
              }),
              y()(p()(o), '_renderRecentSearchItem', function (e, t) {
                var n = o.props.ariaDescendantId,
                  a = o.state.focusIndex === t
                return E.a.createElement(Ne, {
                  domId: a ? n : void 0,
                  index: t,
                  item: e,
                  key: o._chooseKeyType(e, t),
                  onItemClick: o._handleOnItemClick,
                  onRemoveQuery: o._handleRemoveQuery,
                  ref: a ? o._setFocusedItemRef : void 0,
                  testID: He.a.typeaheadRecentSearchesItem,
                })
              }),
              y()(p()(o), '_chooseKeyType', function (e, t) {
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
              y()(p()(o), '_renderSavedSearches', function () {
                var e = o.props,
                  t = e.ariaDescendantId,
                  n = e.savedSearches,
                  a = o.state.focusIndex,
                  r = o._getRecentSearchItems(),
                  i = v()(n)
                return (
                  i.reverse(),
                  E.a.createElement(
                    ee.a,
                    { testID: He.a.typeaheadSavedSearchesContainer },
                    i.map(function (e, n) {
                      var i = a === n + r.length
                      return E.a.createElement(Ne, {
                        domId: i ? t : void 0,
                        index: n,
                        item: e,
                        key: e.savedSearchId,
                        onItemClick: o._handleOnItemClick,
                        onRemoveQuery: o._handleRemoveQuery,
                        ref: i ? o._setFocusedItemRef : void 0,
                        testID: He.a.typeaheadSavedSearchesItem,
                      })
                    }),
                  )
                )
              }),
              y()(p()(o), '_getNumOfSearchItems', function () {
                var e = o.props.savedSearches,
                  t = o._getRecentSearchItems()
                return e.length + t.length
              }),
              y()(p()(o), '_handleUsersRetry', function () {
                o._fetchUsersDetailsIfNeeded()
              }),
              y()(p()(o), '_fetchUsersDetailsIfNeeded', function () {
                var e = o.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.fetchUsersIfNeeded,
                  a = e.fetchUsersPresenceIfNeeded,
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
                n(u).catch(t({})),
                  l && s.isTrue('voice_rooms_recent_search_audiospace_ring_enabled') && a(u).catch(t({}))
              }),
              y()(p()(o), '_handleRemoveQuery', function (e, t) {
                var n = o.props,
                  a = n.analytics,
                  r = n.removeQuery
                switch (e.category) {
                  case F.b.RecentSearch:
                    var i = { keyword: e.keyword, user: e.user, topic: e.topic, event: e.event }
                    r(i), o._resetFocus()
                    var c = D.a.forRecentSearchResult(i, t),
                      s = o._handleRemoveAction(e)
                    c && a.scribe({ action: s, data: { items: [c] } })
                    break
                  case F.b.SavedSearch:
                    o.setState({ shouldShowDeleteSavedSearchConfirmation: !0, savedSearchIdToDelete: e.savedSearchId })
                    break
                  default:
                    return
                }
              }),
              y()(p()(o), '_handleRemoveAction', function (e) {
                return e.user
                  ? 'clear_user'
                  : e.topic
                  ? 'clear_topic_interests'
                  : e.event
                  ? 'clear_event'
                  : 'clear_topic'
              }),
              y()(p()(o), '_handleClearAllClick', function () {
                o.setState({ shouldShowClearAllConfirmationSheet: !0 })
              }),
              y()(p()(o), '_handleOnClearAllConfirm', function () {
                var e = o.props,
                  t = e.analytics
                ;(0, e.clearAll)(), t.scribeAction('clear_all'), o.setState({ shouldShowClearAllConfirmationSheet: !1 })
              }),
              y()(p()(o), '_handleOnClearAllCancel', function () {
                o.setState({ shouldShowClearAllConfirmationSheet: !1 })
              }),
              y()(p()(o), '_handleOnDeleteSavedSearchConfirm', function () {
                var e = o.props,
                  t = e.analytics,
                  n = e.deleteSavedSearch,
                  a = e.savedSearches,
                  r = o.state.savedSearchIdToDelete,
                  i = a.findIndex(function (e) {
                    return e.savedSearchId === r
                  }),
                  c = a[i]
                if (r) {
                  n(r)
                  var s = c && D.a.forSavedSearchResult(c.keyword.query, i)
                  s && t.scribe({ element: 'saved_search', action: 'delete', data: { items: [s] } })
                }
                o.setState({ shouldShowDeleteSavedSearchConfirmation: !1, savedSearchIdToDelete: void 0 })
              }),
              y()(p()(o), '_handleOnDeleteSavedSearchCancel', function () {
                o.setState({ shouldShowDeleteSavedSearchConfirmation: !1, savedSearchIdToDelete: void 0 })
              }),
              y()(p()(o), '_handleOnItemClick', function (e, t) {
                var n = o.props,
                  a = n.onDismiss
                ;(0, n.onItemClick)(e, t), o._scribeClick(e, t), a && a()
              }),
              y()(p()(o), '_scribeRecentSearchImpression', function () {
                var e = o.props,
                  t = e.analytics,
                  n = e.recentSearches
                if (n && n.length) {
                  var a = Object(P.a)(
                    n.map(function (e, t) {
                      return D.a.forRecentSearchResult(e, t)
                    }),
                  )
                  t.scribe({ action: 'impression', data: { items: a } })
                }
              }),
              y()(p()(o), '_scribeSavedSearchImpression', function () {
                var e = o.props,
                  t = e.analytics,
                  n = e.savedSearches
                if (n && n.length) {
                  var a = Object(P.a)(
                    n.map(function (e, t) {
                      return D.a.forSavedSearchResult(e.keyword.query, t)
                    }),
                  )
                  t.scribe({ element: 'saved_search', action: 'impression', data: { items: a } })
                }
              }),
              y()(p()(o), '_scribeClick', function (e, t) {
                var n = o.props.analytics
                switch (e.category) {
                  case F.b.SavedSearch:
                    var a = D.a.forSavedSearchResult(e.query, t)
                    n.scribe({ element: 'typeahead', action: 'click', data: { targets: [a] } })
                    break
                  case F.b.RecentSearch:
                    var i
                    e.recentSearchType &&
                      (i =
                        e.recentSearchType === F.a.User
                          ? { user: { type: F.a.User, id: e.query } }
                          : e.recentSearchType === F.a.Event && e.queryMetadata && e.queryMetadata.title
                          ? { event: r()(r()({}, e.queryMetadata), {}, { type: F.a.Event, id: e.query }) }
                          : e.recentSearchType === F.a.Topic && e.queryMetadata && e.queryMetadata.name
                          ? { topic: r()(r()({}, e.queryMetadata), {}, { type: F.a.Topic, id: e.query }) }
                          : { keyword: { type: F.a.Keyword, query: e.query } })
                    var c = i && D.a.forRecentSearchResult(i, t)
                    c && n.scribe({ action: 'click', data: { targets: [c] } })
                }
              }),
              y()(p()(o), '_setFocusedItemRef', function (e) {
                ;(o._focusedItemRef = e),
                  e &&
                    o._shouldScrollToFocusedItem &&
                    (Object(Me.c)(o._getScrollParent(), o._getFocusedItem()), (o._shouldScrollToFocusedItem = !1))
              }),
              y()(p()(o), 'hasFocusedItem', function () {
                return o._getNumOfSearchItems() > 0
              }),
              y()(p()(o), 'selectFocusedItem', function () {
                if (o.hasFocusedItem()) {
                  var e = o._focusedItemRef && o._focusedItemRef.searchItemData
                  e && o._handleOnItemClick(e, o.state.focusIndex)
                }
              }),
              y()(p()(o), '_setFocusIndex', function (e, t) {
                var n = o.props.onItemFocusChanged
                ;(o._shouldScrollToFocusedItem = t), o.setState({ focusIndex: e }), n && n()
              }),
              y()(p()(o), '_resetFocus', function () {
                o._setFocusIndex(-1)
              }),
              y()(p()(o), 'focusNext', function () {
                var e = o.state.focusIndex,
                  t = o._getNumOfSearchItems()
                if (0 !== t) {
                  var n = e + 1 >= t ? 0 : e + 1
                  o._setFocusIndex(n, !0)
                }
              }),
              y()(p()(o), 'focusPrevious', function () {
                var e = o.state.focusIndex,
                  t = o._getNumOfSearchItems()
                if (0 !== t) {
                  var n = e - 1 < 0 ? t - 1 : e - 1
                  o._setFocusIndex(n, !0)
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
                  [].concat(Ge, [i ? 'topic' : '', c ? 'event' : ''])),
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
                      ? E.a.createElement(je.a, {
                          confirmButtonLabel: Ve.confirmButtonLabel,
                          confirmButtonType: 'destructiveFilled',
                          headline: Ve.headline,
                          onCancel: this._handleOnClearAllCancel,
                          onConfirm: this._handleOnClearAllConfirm,
                          testID: He.a.deleteRecentSearchesDialog,
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
                    var e = Object(Me.a)(X.a.findDOMNode(this))
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
      y()(Xe, 'contextType', Se.a)
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
        Ye = W.forwardRef(Xe),
        Ze = 'SearchBox_Search_Input',
        $e = n('TnY3'),
        et = n('GZwR'),
        tt = n('4e/K'),
        nt = R.a.ib2e46ee,
        at = R.a.hbc99b02,
        rt = /^(\w+)$/,
        ot = [et.a.Events, et.a.Users, et.a.Topics],
        it = function (e) {
          return '@' === e[0] ? e.substring(1) : e
        },
        ct = (function (e) {
          m()(n, e)
          var t = g()(n)
          function n(e, a) {
            var o, c
            return (
              s()(this, n),
              (c = t.call(this, e, a)),
              y()(p()(c), '_withNewTypeaheadUI', !1),
              y()(p()(c), '_reorderResults', function (e, t, n, a) {
                var r = Object(et.f)(t, et.b.User),
                  o = Object(et.f)(t, et.b.NoResult),
                  i = Object(et.f)(n, et.b.Topic),
                  s = Object(et.f)(n, et.b.NoResult),
                  l = Object(et.f)(a, et.b.Event),
                  u = [].concat(v()(Object(et.e)(i)), v()(Object(et.e)(r))),
                  d = (
                    't1' === c._rankedTypeaheadExperimentalValue
                      ? u.sort(function (e, t) {
                          return t.rank - e.rank
                        })
                      : 't3' === c._rankedTypeaheadExperimentalValue
                      ? (function (e) {
                          for (var t = v()(e), n = e.length - 1; n > 0; n--) {
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
                return d.unshift.apply(d, v()(s)), d.unshift.apply(d, v()(l)), d.push.apply(d, v()(o)), e ? [e, d] : [d]
              }),
              y()(p()(c), '_renderSearchBoxEmptyState', function (e) {
                return E.a.createElement(Ye, i()({}, e, { onItemClick: c._handleSearchItemClick }))
              }),
              y()(p()(c), '_handleSearchItemClick', function (e) {
                var t = e.category,
                  n = e.link,
                  a = e.query,
                  o = e.queryMetadata,
                  i = e.recentSearchType,
                  s = c.props.addQuery
                t === F.b.SavedSearch
                  ? c._submitQuery({ query: a, shouldAddToRecentSearch: !1, src: L.a.SavedSearchClick })
                  : i === F.a.Keyword
                  ? c._submitQuery({ query: a, shouldAddToRecentSearch: !0, src: L.a.RecentSearchClick })
                  : i === F.a.Event
                  ? (c._routeTransition({ pathname: '/i/events/'.concat(a) }),
                    o && o.title && s({ event: r()(r()({}, o), {}, { id: a, type: F.a.Event }) }))
                  : i === F.a.Topic
                  ? (c._routeTransition({ pathname: '/i/topics/'.concat(a) }),
                    o && o.name && s({ topic: r()(r()({}, o), {}, { id: a, type: F.a.Topic }) }))
                  : n && (c._routeTransition({ pathname: '/'.concat(n) }), s({ user: { id: a, type: F.a.User } }))
              }),
              y()(p()(c), '_handleSearchShortcut', function (e) {
                var t = c._inputRef
                t && (e && t.setQuery(e), t.focus())
              }),
              y()(p()(c), '_getUserExactMatch', function (e) {
                e.hasResults, e.isLoaded
                var t = e.query,
                  n = it(t)
                if (n.match(rt))
                  return {
                    id: ''.concat(t, '_no_result_user'),
                    type: et.b.NoResult,
                    data: { text: at({ screenName: n }), type: 'user' },
                  }
              }),
              y()(p()(c), '_handleOnDismiss', function () {
                var e = c.props.history,
                  t = e.location,
                  n = t.state || {}
                if (n.searchFocused) {
                  var a = r()(r()({}, t), {}, { state: r()(r()({}, n), {}, { lockScroll: !1, searchFocused: !1 }) })
                  e.replace(a)
                }
              }),
              y()(p()(c), '_handleOnFocus', function () {
                var e = c.props,
                  t = e.analytics,
                  n = e.history,
                  a = n.location,
                  o = a.state || {}
                if (!o.searchFocused) {
                  var i = r()(r()({}, a), {}, { state: r()(r()({}, o), {}, { searchFocused: !0, lockScroll: !0 }) })
                  t.scribe({ action: 'focus_field' }), n.push(i)
                }
              }),
              y()(p()(c), '_handleChange', function (e) {
                var t,
                  n = c.props.history.location
                !c._rankedTypeaheadExperimentalValue &&
                  null !== (t = n.state) &&
                  void 0 !== t &&
                  t.searchFocused &&
                  (c._rankedTypeaheadExperimentalValue = c.context.featureSwitches.getStringValue(
                    'responsive_web_ranked_typeahead',
                    't2',
                  )),
                  c.setState({ query: e })
              }),
              y()(p()(c), '_handleTypeaheadSubmit', function () {
                var e = c.state,
                  t = e.items,
                  n = e.query,
                  a = c.props.analytics
                ;/^\s*$/.test(n) ||
                  (a.scribe({
                    action: 'search',
                    data: { items: D.a.forTypeaheadResults(t), search_details: { query: n } },
                  }),
                  c._submitQuery({ query: n, shouldAddToRecentSearch: !0 }))
              }),
              y()(p()(c), '_handleItemClick', function (e, t) {
                var n = c.props.addQuery,
                  a = c.state.query
                switch (e.type) {
                  case et.b.User:
                    if (e.data.id_str) n({ user: { id: e.data.id_str, type: F.a.User } })
                    c._routeTransition({ pathname: '/'.concat(e.data.screen_name) })
                    break
                  case et.b.Topic:
                  case et.b.Hashtag:
                    c._submitQuery({ query: e.data.topic, shouldAddToRecentSearch: !0, src: L.a.TypeaheadClick })
                    break
                  case et.b.Event:
                    e.data && e.data.url
                      ? c._routeTransition({ pathname: B.b.parseInternalUrl(e.data.url) })
                      : c._submitQuery({ query: e.data.topic, src: L.a.TypeaheadClick })
                    break
                  case et.b.NoResult:
                    var r = e.data.type
                    'user' === r
                      ? c._routeTransition({ pathname: '/'.concat(it(a)) })
                      : 'topic' === r &&
                        c._submitQuery({ query: a, shouldAddToRecentSearch: !0, src: L.a.TypeaheadClick })
                }
              }),
              y()(p()(c), '_handleItemsChanged', function (e) {
                c.setState({ items: e })
              }),
              y()(p()(c), '_routeTransition', function (e) {
                var t = e.params,
                  n = e.pathname,
                  a = e.query,
                  o = e.src,
                  i = c.props,
                  s = i.history,
                  l = i.location,
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
              y()(p()(c), '_submitQuery', function (e) {
                var t = e.query,
                  n = e.shouldAddToRecentSearch,
                  a = void 0 !== n && n,
                  r = e.src,
                  o = void 0 === r ? L.a.Typed : r,
                  i = c.props,
                  s = i.addQuery,
                  l = i.mode,
                  u = i.onSubmit,
                  d = i.searchFilters,
                  p = i.searchRoute
                ;(u && u(t, o, c.state.lastSubmittedQuery === t), a) && s({ keyword: { query: t, type: F.a.Keyword } })
                var h = Object(F.g)({ query: t, querySrc: o, mode: l, searchFilters: d })
                c._routeTransition({ pathname: p, params: h, src: o }), c.setState({ lastSubmittedQuery: t })
              }),
              y()(p()(c), '_setInputRef', function (e) {
                c._inputRef = e
              }),
              (c.state = {
                query: e.initialValue,
                items: [],
                lastSubmittedQuery: Object(x.a)(null === (o = e.location.query) || void 0 === o ? void 0 : o.q),
              }),
              (c._withNewTypeaheadUI = c.context.featureSwitches.isTrue(
                'responsive_web_account_search_readability_enabled',
              )),
              c
            )
          }
          return (
            u()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this.props.shouldHandleSearchShortcut &&
                    (this._unregisterSearchShortcutHandler = Object(O.b)(this._handleSearchShortcut))
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
                    i = e.placeholder,
                    c = this.state.query,
                    s = (o.state || {}).searchPrefill,
                    l = this.props.initialValue || s,
                    u = !!o.state && !!o.state.searchFocused,
                    d =
                      't1' === this._rankedTypeaheadExperimentalValue || 't3' === this._rankedTypeaheadExperimentalValue
                  return E.a.createElement(
                    k.a,
                    { viewType: 'search_field' },
                    E.a.createElement(
                      ee.a,
                      { style: st.root },
                      E.a.createElement(tt.default, {
                        filter: ot,
                        forceVdlDisable: t,
                        getTopicExactMatch: c ? et.h : void 0,
                        getUserExactMatch: c ? this._getUserExactMatch : void 0,
                        initialValue: l,
                        inputStyle: st.input,
                        isCompact: n,
                        isInSidebar: a,
                        isOnHomepage: r,
                        onDismiss: this._handleOnDismiss,
                        onFocus: this._handleOnFocus,
                        onItemClick: this._handleItemClick,
                        onItemsChanged: this._handleItemsChanged,
                        onQueryChange: this._handleChange,
                        onSubmit: this._handleTypeaheadSubmit,
                        orderResults: d ? this._reorderResults : void 0,
                        placeholder: i,
                        ref: this._setInputRef,
                        renderEmptyState: this._renderSearchBoxEmptyState,
                        rounded: !0,
                        shouldAutoFocus: u,
                        shouldClearOnSelect: !0,
                        shouldDeferPrefetch: !0,
                        source: et.d.SearchBox,
                        testID: Ze,
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
      y()(ct, 'defaultProps', {
        initialValue: '',
        isInSidebar: !1,
        placeholder: nt,
        searchRoute: '/search',
        forceVdlDisable: !0,
      }),
        y()(ct, 'contextType', Se.a)
      var st = ne.a.create(function (e) {
        return {
          root: { alignItems: 'stretch', flexBasis: 0, flexDirection: 'row', flexGrow: 1 },
          input: { flexShrink: 1 },
        }
      })
      t.default = Object($e.a)(C(ct))
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
        d = n('KUGV'),
        p = n('Irs7'),
        h = n('MWbm'),
        m = n('t62R'),
        f = n('cHvH'),
        g = n('rHpw'),
        b = n('/yvb'),
        y = n('3XMw'),
        S = n.n(y),
        v = S.a.d8817e36,
        _ = S.a.b9288ee6,
        E = S.a.i1390ec2,
        k = { page: 'cookie_compliance_banner' }
      function w() {
        var e = r.a.createElement(
          S.a.I18NFormatMessage,
          { $i18n: 'ad048ab9' },
          r.a.createElement(
            m.b,
            {
              color: 'buttonWhite',
              link: 'https://help.twitter.com/rules-and-policies/twitter-cookies',
              withUnderline: !0,
            },
            S.a.id7ef73f,
          ),
        )
        return r.a.createElement(C, { body: e, title: E })
      }
      function I(e) {
        var t = r.a.createElement(
          S.a.I18NFormatMessage,
          { $i18n: 'bc8736af' },
          r.a.createElement(
            m.b,
            { accessibilityRole: 'button', color: 'buttonWhite', onClick: e.onExpand, withUnderline: !0 },
            S.a.gfb2ba0f,
          ),
        )
        return r.a.createElement(C, { body: t, title: E })
      }
      function C(e) {
        return r.a.createElement(
          h.a,
          { style: T.cookieComplianceMessageWrap },
          r.a.createElement(m.b, { color: 'buttonWhite', size: 'headline2', weight: 'medium' }, e.title),
          r.a.createElement(
            m.b,
            { color: 'buttonWhite', size: 'subtext2', style: T.cookieComplianceExpandedDetails },
            e.body,
          ),
        )
      }
      var x = r.a.forwardRef(function (e, t) {
          var n = Object(p.b)()
          r.a.useEffect(
            function () {
              n.scribe(c()(c()({}, k), {}, { action: 'impression' }))
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
                  o.scribe(c()(c()({}, k), {}, { action: 'click', element: 'expand_message' })), a(!0)
                },
              }
            })(),
            i = a.expand,
            s = a.isExpanded,
            m = (function () {
              var e = Object(p.b)(),
                t = r.a.useContext(o.a).featureSwitches,
                n = r.a.useState(function () {
                  return u.e(t) && !Object(d.a)()
                }),
                a = l()(n, 2),
                i = a[0],
                s = a[1]
              return {
                isBannerOpen: i,
                acceptAllCookies: function () {
                  e.scribe(c()(c()({}, k), {}, { action: 'click', element: 'accept_all' })), u.b(t), s(!1)
                },
                refuseNonEssentialCookies: function () {
                  e.scribe(c()(c()({}, k), {}, { action: 'click', element: 'refuse_non_essential' })), u.d(t), s(!1)
                },
              }
            })(),
            y = m.acceptAllCookies,
            S = m.isBannerOpen,
            E = m.refuseNonEssentialCookies
          return S
            ? r.a.createElement(f.a, null, function (e) {
                var n = e.windowWidth < g.a.theme.breakpoints.xLarge
                return r.a.createElement(
                  h.a,
                  { ref: t, style: [T.root, n && T.rootNarrow] },
                  s ? r.a.createElement(w, null) : r.a.createElement(I, { onExpand: i }),
                  r.a.createElement(
                    h.a,
                    { style: [T.buttonContainer, n && T.buttonContainerNarrow] },
                    r.a.createElement(
                      b.a,
                      {
                        dominantColor: 'buttonAlwaysBlack',
                        onPress: y,
                        size: 'medium',
                        style: [T.ctaButton, n && T.ctaButtonNarrow],
                        type: g.a.isDarkMode() ? 'onMediaDominantColorFilled' : 'onMediaWhiteFilled',
                      },
                      v,
                    ),
                    r.a.createElement(
                      b.a,
                      {
                        dominantColor: 'buttonAlwaysBlack',
                        onPress: E,
                        size: 'medium',
                        style: [T.ctaButton, n && T.ctaButtonNarrow],
                        type: g.a.isDarkMode() ? 'onMediaDominantColorFilled' : 'onMediaWhiteFilled',
                      },
                      _,
                    ),
                  ),
                )
              })
            : null
        }),
        T = g.a.create(function (e) {
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
        R = n('97Jx'),
        B = n.n(R),
        L = n('VrFO'),
        O = n.n(L),
        D = n('Y9Ll'),
        P = n.n(D),
        A = n('1Pcy'),
        F = n.n(A),
        U = n('5Yy7'),
        z = n.n(U),
        N = n('2VqO'),
        H = n.n(N),
        j = n('KEM+'),
        M = n.n(j),
        q = (n('hBvt'), n('RqPI')),
        V = n('rxPX'),
        W = Object(V.a)().propsFromState(function () {
          return { currentCountry: q.y }
        }),
        K = n('cnVF'),
        Q = n('mrHL'),
        G =
          (n('vrRf'),
          function (e, t, n) {
            return e.indexOf(t.toLowerCase()) > -1 && '1' !== n
          }),
        X = S.a.ia5e7487,
        J = (function (e) {
          z()(n, e)
          var t = H()(n)
          function n(e, a) {
            var o
            O()(this, n),
              (o = t.call(this, e, a)),
              M()(F()(o), 'state', { euWarningIsOpen: !1 }),
              M()(F()(o), '_renderMessage', function () {
                return r.a.createElement(
                  m.b,
                  { color: 'white', size: 'subtext2' },
                  r.a.createElement(
                    S.a.I18NFormatMessage,
                    { $i18n: 'i3c34582' },
                    r.a.createElement(
                      m.b,
                      {
                        color: 'white',
                        link: 'https://help.twitter.com/rules-and-policies/twitter-cookies',
                        style: Y.link,
                      },
                      S.a.fd0ff73b,
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
            var i = o.props.currentCountry,
              c = o.context.featureSwitches,
              s = c.getArrayValue('responsive_web_eu_countries', []),
              l = Object(Q.d)({ featureSwitches: c, cookieName: K.k })
            return (o.state = { euWarningIsOpen: !!i && G(s, i, l) }), o
          }
          return (
            P()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this
                  return this.state.euWarningIsOpen
                    ? r.a.createElement(f.a, null, function (t) {
                        var n = t.windowWidth < g.a.theme.breakpoints.medium
                        return r.a.createElement(
                          h.a,
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
      M()(J, 'contextType', o.a)
      var Y = g.a.create(function (e) {
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
          return r.a.createElement(J, B()({}, e, { innerRef: t }))
        }),
        $ = W.forwardRef(Z),
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
        i = n.n(o),
        c = n('Y9Ll'),
        s = n.n(c),
        l = n('1Pcy'),
        u = n.n(l),
        d = n('5Yy7'),
        p = n.n(d),
        h = n('2VqO'),
        m = n.n(h),
        f = n('KEM+'),
        g = n.n(f),
        b = (n('2G9S'), n('ho0z'), n('0zG9'), n('ERkP')),
        y = n.n(b),
        S = n('/yvb'),
        v = n('hUVV'),
        _ = n('3XMw'),
        E = n.n(_),
        k = n('iKTg'),
        w = n('TaB8'),
        I = n('1zbE'),
        C = n('Ukpf'),
        x = n('cnVF'),
        T = n('TnY3'),
        R = n('0+0m'),
        B = n('v6aA'),
        L = n('2qJZ'),
        O = E.a.ib65b1c6,
        D = E.a.f55cebb7,
        P = E.a.g61ed8a4,
        A = { clientId: R.a, scope: 'name email', usePopup: !0 },
        F = (function (e) {
          p()(n, e)
          var t = m()(n)
          function n() {
            var e
            i()(this, n)
            for (var a = arguments.length, o = new Array(a), c = 0; c < a; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              g()(u()(e), 'state', { isScriptLoaded: !1 }),
              g()(
                u()(e),
                '_is3rdPartyIntegrationDisabled',
                Object(w.a)('responsive_web_3rd_party_category_sign_in_with_apple', e.context.featureSwitches),
              ),
              g()(u()(e), '_initAppleIDAuth', function () {
                var t = window.AppleID,
                  n = e.props.fetchSsoInitToken,
                  a = Object(L.c)(e.context.featureSwitches) ? 'https://'.concat(L.b) : 'https://'.concat(L.a)
                t &&
                  n(x.A.Apple).then(function (e) {
                    var n = e.state
                    t.auth.init(r()(r()({}, A), {}, { redirectURI: a, state: n }))
                  })
              }),
              g()(u()(e), '_handleOnPress', function () {
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
                            cookie_personalization_settings: c && {
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
                      t.error !== R.f
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
                    o = n === I.a.SignUp ? O : D
                  return this._is3rdPartyIntegrationDisabled
                    ? null
                    : y.a.createElement(S.a, {
                        backgroundColor: 'white',
                        borderColor: 'gray200',
                        children: o,
                        color: 'gray1100',
                        disabled: !r,
                        icon: y.a.createElement(k.a, null),
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
      g()(F, 'contextType', B.a),
        g()(F, 'defaultProps', { buttonSize: 'xLarge', buttonState: 'signup' }),
        (t.a = Object(T.a)(Object(v.a)(F)))
    },
    bCEw: function (e, t, n) {
      'use strict'
      var a = n('IGGJ')(n('K1iM')),
        r = n('23An'),
        o = n('Ud88'),
        i = n('aQQo'),
        c = i.loadQuery,
        s = i.useTrackLoadQueryInRender,
        l = n('ERkP'),
        u = l.useCallback,
        d = l.useEffect,
        p = l.useRef,
        h = l.useState,
        m = n('K1lQ').getRequest,
        f = { kind: 'NullQueryReference' }
      function g(e) {
        return 'PreloadableConcreteRequest' === e.kind
          ? void 0 !== e.params.metadata.live
          : void 0 !== m(e).params.metadata.live
      }
      e.exports = function (e, t) {
        var n = null != t ? t : f,
          i = o()
        s()
        var l = r(),
          m = p(new Set([n])),
          b = h(function () {
            return n
          }),
          y = b[0],
          S = b[1],
          v = h(function () {
            return n
          }),
          _ = v[0],
          E = v[1]
        n !== _ && (m.current.add(n), E(n), S(n))
        var k = u(
            function () {
              l.current && (m.current.add(f), S(f))
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
                  o = c(null !== (r = null == n ? void 0 : n.__environment) && void 0 !== r ? r : i, e, t, a)
                m.current.add(o), S(o)
              }
            },
            [i, e, S, l],
          ),
          I = p(!1)
        return (
          d(function () {
            return function () {
              I.current = !0
            }
          }, []),
          d(
            function () {
              if (!0 === I.current)
                return (
                  (I.current = !1),
                  void (
                    'NullQueryReference' !== y.kind &&
                    w(y.variables, { fetchPolicy: y.fetchPolicy, networkCacheConfig: y.networkCacheConfig })
                  )
                )
              var t = m.current
              if (l.current) {
                var n,
                  r = (0, a.default)(t)
                try {
                  for (r.s(); !(n = r.n()).done; ) {
                    var o = n.value
                    if (o === y) break
                    t.delete(o),
                      'NullQueryReference' !== o.kind &&
                        (g(e) ? o.dispose && o.dispose() : o.releaseQuery && o.releaseQuery())
                  }
                } catch (i) {
                  r.e(i)
                } finally {
                  r.f()
                }
              }
            },
            [y, l, w, e],
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
                      (g(e) ? r.dispose && r.dispose() : r.releaseQuery && r.releaseQuery())
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
          ['NullQueryReference' === y.kind ? null : y, w, k]
        )
      }
    },
    bojF: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CookieComplianceBannerPadder', function () {
          return _e
        }),
        n.d(t, 'LoggedOutHome', function () {
          return Ee
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
        h = n('2VqO'),
        m = n.n(h),
        f = n('KEM+'),
        g = n.n(f),
        b = n('ddV6'),
        y = n.n(b),
        S = (n('0zG9'), n('z84I'), n('ERkP')),
        v = n.n(S),
        _ = n('UpKB'),
        E = n('zI2C'),
        k = n('Hde2'),
        w = n('Chb3'),
        I = n('zh9S'),
        C = n('RqPI'),
        x = n('rxPX'),
        T = Object(x.a)()
          .propsFromState(function () {
            return { userLanguage: C.o }
          })
          .propsFromActions(function () {
            return { scribeAction: I.c }
          }),
        R = n('H1k/'),
        B = n('SrtL'),
        L = n('FQwk'),
        O = n('kG2l'),
        D = n('muX9'),
        P = n('6oVL'),
        A = n('rJoH'),
        F = n('yoO3'),
        U = n('Es6L'),
        z = n('JkIr'),
        N = n('MWbm'),
        H = n('t62R'),
        j = n('/yvb'),
        M = n('0yYu'),
        q = n('cHvH'),
        V = n('TIdA'),
        W = n('A91F'),
        K = n('rHpw'),
        Q = n('pxuL'),
        G = n('5P4+'),
        X = n('7JQg'),
        J = n('AS3p'),
        Y = n('0+0m'),
        Z = n('3XMw'),
        $ = n.n(Z),
        ee = n('VwDm'),
        te = n('wz7L'),
        ne = n('dFWS'),
        ae = n('lUZE'),
        re = n('3rEN'),
        oe = n('1zbE'),
        ie = n('XJCT'),
        ce = [
          { text: $.a.a62c9c33, Icon: ee.a },
          { text: $.a.cf39fca2, Icon: te.a },
          { text: $.a.j86184fd, Icon: ne.a },
        ],
        se = $.a.d1091f50,
        le = $.a.d9e109ae,
        ue = $.a.f86f23b5,
        de = $.a.eba1b197,
        pe = $.a.a565833d,
        he = $.a.aa95ddc0,
        me = $.a.fa811c30,
        fe = $.a.e919c3bc,
        ge = $.a.b0dbe914,
        be = $.a.e5b0e543,
        ye = $.a.h0ff39da,
        Se = $.a.j3f49ff6,
        ve = $.a.ca86b62c
      function _e(e) {
        var t = v.a.useState(0),
          n = y()(t, 2),
          a = n[0],
          r = n[1],
          o = v.a.useCallback(function (e) {
            r(e || 0)
          }, [])
        return v.a.createElement(
          v.a.Fragment,
          null,
          v.a.createElement(w.a.Configure, { hideCookieBannerPicker: !0 }),
          v.a.createElement(k.a, null, v.a.createElement(R.a, { onHeightChange: o })),
          v.a.createElement(N.a, { style: [{ marginBottom: a }, we.bannerPadderChildren] }, e.children),
        )
      }
      var Ee = (function (e) {
        p()(n, e)
        var t = m()(n)
        function n(e, a) {
          var o
          return (
            i()(this, n),
            (o = t.call(this, e, a)),
            g()(
              u()(o),
              '_thirdPartySsoButtonsEnabled',
              o.context.featureSwitches.isTrue('responsive_web_third_party_sso_buttons_enabled'),
            ),
            g()(
              u()(o),
              '_ssoInSliShowProminentLoginButton',
              o.context.featureSwitches.isTrue('responsive_web_sso_in_sli_show_prominent_login_button'),
            ),
            g()(
              u()(o),
              '_isPlaceholderSIWGButtonEnabled',
              o.context.featureSwitches.isTrue('responsive_web_placeholder_siwg_button_enabled'),
            ),
            g()(
              u()(o),
              '_cookieComplianceGingersnapEnabled',
              o.context.featureSwitches.isTrue('responsive_web_cookie_compliance_gingersnap_enabled'),
            ),
            g()(
              u()(o),
              '_searchHomePageVariation',
              o.context.featureSwitches.getStringValue('responsive_web_search_home_page_design_variation'),
            ),
            g()(
              u()(o),
              '_googleOneTapEverywhereEnabled',
              o.context.featureSwitches.isTrue('responsive_web_google_one_tap_everywhere_enabled'),
            ),
            g()(u()(o), '_renderLoginSignupButtons', function (e) {
              var t = e ? we.ctaButton : we.ctaButtonMobile
              return v.a.createElement(
                N.a,
                { style: !o._thirdPartySsoButtonsEnabled && 'tablet' === e && we.ctaButtonContainer },
                o._thirdPartySsoButtonsEnabled
                  ? v.a.createElement(
                      v.a.Fragment,
                      null,
                      o._renderSSOButtons(e),
                      o._ssoInSliShowProminentLoginButton
                        ? o._renderProminentLoginButtonVariation(e)
                        : o._renderLessProminentLoginButtonVariation(e),
                    )
                  : v.a.createElement(
                      v.a.Fragment,
                      null,
                      v.a.createElement(
                        j.a,
                        {
                          link: '/i/flow/signup',
                          onPress: o._handleSignupButton,
                          size: 'xLarge',
                          style: [t, 'tablet' === e && we.ctaButtonSplitSpacing],
                          testID: z.a.signupButton,
                          type: 'brandFilled',
                        },
                        pe,
                      ),
                      v.a.createElement(
                        j.a,
                        {
                          link: '/login',
                          onPress: o._handleLoginButton,
                          size: 'xLarge',
                          style: t,
                          testID: z.a.loginButton,
                          type: 'brandOutlined',
                        },
                        fe,
                      ),
                    ),
              )
            }),
            g()(u()(o), '_renderSSOButtons', function (e) {
              var t = o.state,
                n = t.buttonState,
                a = t.isCookieCompliant,
                r = e ? we.ctaButton : we.ctaButtonMobile
              return v.a.createElement(
                v.a.Fragment,
                null,
                v.a.createElement(O.a, {
                  buttonSize: 'medium',
                  buttonState: n,
                  displayType: o._googleOneTapEverywhereEnabled ? Y.e.Button : void 0,
                  isCookieCompliant:
                    o._cookieComplianceGingersnapEnabled && o._isPlaceholderSIWGButtonEnabled ? a : void 0,
                  onPress: o._handleCookieCompliance,
                  style: [r, 'tablet' === e && we.ctaButtonSplitSpacing, we.ssoButtonStyles],
                }),
                v.a.createElement(_.a, {
                  buttonSize: 'medium',
                  buttonState: n,
                  style: [
                    r,
                    'tablet' === e && we.ctaButtonSplitSpacing,
                    we.ssoButtonStyles,
                    o._ssoInSliShowProminentLoginButton && { marginBottom: 0 },
                  ],
                }),
              )
            }),
            g()(u()(o), '_renderProminentLoginButtonVariation', function (e) {
              var t = e ? we.ctaButton : we.ctaButtonMobile
              return v.a.createElement(
                v.a.Fragment,
                null,
                v.a.createElement(
                  N.a,
                  { style: we.gapContainer },
                  v.a.createElement(M.a, { label: v.a.createElement(H.b, { children: ve }) }),
                ),
                v.a.createElement(
                  j.a,
                  {
                    link: {
                      pathname: '/i/flow/signup',
                      state: { input: { requested_variant: JSON.stringify({ signup_type: oe.b }) } },
                    },
                    onPress: o._handleSignupButton,
                    size: 'medium',
                    style: [t, 'tablet' === e && we.ctaButtonSplitSpacing, we.ssoButtonStyles],
                    testID: z.a.signupButton,
                    type: 'brandFilled',
                  },
                  he,
                ),
                v.a.createElement(H.b, { color: 'gray700', size: 'subtext3', style: [t, { width: Y.b }] }, oe.c),
                v.a.createElement(
                  N.a,
                  { style: we.signInButtonContainer },
                  v.a.createElement(H.b, { size: 'headline2', style: t, weight: 'bold' }, me),
                  v.a.createElement(
                    j.a,
                    {
                      link: '/login',
                      onPress: o._handleLoginButton,
                      size: 'medium',
                      style: [t, 'tablet' === e && we.ctaButtonSplitSpacing, we.ssoButtonStyles],
                      testID: z.a.loginButton,
                      type: 'brandOutlined',
                    },
                    be,
                  ),
                ),
              )
            }),
            g()(u()(o), '_renderLessProminentLoginButtonVariation', function (e) {
              var t = o.state.buttonState,
                n = e ? we.ctaButton : we.ctaButtonMobile,
                a = o._getLoginSignupProps() || {},
                r = a.handleLoginSignUpButton,
                i = a.loginSignUpButtonLabel,
                c = a.loginSignUpButtonLink
              return v.a.createElement(
                v.a.Fragment,
                null,
                v.a.createElement(
                  j.a,
                  {
                    backgroundColor: 'white',
                    borderColor: 'gray200',
                    color: 'gray1100',
                    link: c,
                    onPress: r,
                    size: 'medium',
                    style: [n, 'tablet' === e && we.ctaButtonSplitSpacing, we.ssoButtonStyles],
                    testID: t === oe.a.LogIn ? z.a.loginButton : z.a.signupButton,
                  },
                  i,
                ),
                t === oe.a.SignUp
                  ? v.a.createElement(H.b, { color: 'gray700', size: 'subtext2', style: n }, oe.c)
                  : null,
                v.a.createElement(H.b, { testID: z.a.logInSignUpFooter }, o._getLoginSignupFooter()),
              )
            }),
            g()(u()(o), '_renderUsernameInputField', function () {
              return v.a.createElement(
                N.a,
                { style: ke.inputContainer },
                v.a.createElement(ie.b, {
                  onChange: o._handleUsernameChange,
                  onSubmitEditing: o._handleSubmitEditing,
                  style: ke.input,
                }),
              )
            }),
            g()(u()(o), '_renderHalfForm', function () {
              var e = o.state.usernameValue
              return v.a.createElement(
                N.a,
                { style: [ke.container, ke.halfForm] },
                o._renderUsernameInputField(),
                v.a.createElement(
                  j.a,
                  {
                    link: { pathname: '/login', query: { username_or_email: e } },
                    onPress: o._handleHalfFormLoginClick,
                    size: 'xLarge',
                    style: ke.submitButtonStyle,
                    type: 'brandOutlined',
                  },
                  fe,
                ),
              )
            }),
            g()(u()(o), '_getLoginSignupProps', function () {
              switch (o.state.buttonState) {
                case oe.a.SignUp:
                  return {
                    loginSignUpButtonLabel: he,
                    loginSignUpButtonLink: {
                      pathname: '/i/flow/signup',
                      state: { input: { requested_variant: JSON.stringify({ signup_type: oe.b }) } },
                    },
                    handleLoginSignUpButton: o._handleSignupButton,
                  }
                case oe.a.LogIn:
                  return {
                    loginSignUpButtonLabel: ge,
                    loginSignUpButtonLink: '/login',
                    handleLoginSignUpButton: o._handleLoginButton,
                  }
                default:
                  return
              }
            }),
            g()(u()(o), '_getLoginSignupFooter', function () {
              var e
              switch (o.state.buttonState) {
                case oe.a.SignUp:
                  return (
                    (e = {
                      onPress: function () {
                        return o.setState({ buttonState: oe.a.LogIn })
                      },
                    }.onPress),
                    v.a.createElement(
                      $.a.I18NFormatMessage,
                      { $i18n: 'c83ef3f5' },
                      v.a.createElement(H.b, { color: 'link', onPress: e }, $.a.fb9dd9b0),
                    )
                  )
                case oe.a.LogIn:
                  return (function (e) {
                    var t = e.onPress
                    return v.a.createElement(
                      $.a.I18NFormatMessage,
                      { $i18n: 'i89d7b70' },
                      v.a.createElement(H.b, { color: 'link', onPress: t }, $.a.ie4dd8d6),
                    )
                  })({
                    onPress: function () {
                      return o.setState({ buttonState: oe.a.SignUp })
                    },
                  })
                default:
                  return
              }
            }),
            g()(u()(o), '_handleHalfFormLoginClick', function () {
              var e = o.props,
                t = e.scribeAction,
                n = e.scribeNamespace
              t(r()(r()({}, n), {}, { component: 'half_form', element: 'login', action: 'click' }))
            }),
            g()(u()(o), '_handleSubmitEditing', function () {
              o.setState({ autoSubmit: !0 })
            }),
            g()(u()(o), '_handleSignupButton', function () {
              var e = o.props,
                t = e.scribeAction,
                n = e.scribeNamespace
              t(
                r()(
                  r()({}, n),
                  {},
                  { section: 'front', component: 'signup_callout', element: 'form', action: 'signup' },
                ),
              )
            }),
            g()(u()(o), '_handleLoginButton', function () {
              var e = o.props,
                t = e.scribeAction,
                n = e.scribeNamespace
              t(
                r()(
                  r()({}, n),
                  {},
                  { section: 'front', component: 'signup_callout', element: 'form', action: 'login' },
                ),
              )
            }),
            g()(u()(o), '_handleUsernameChange', function (e) {
              o.setState({ usernameValue: e.target.value })
            }),
            g()(u()(o), '_handleCookieCompliance', function () {
              o.setState({ isCookieCompliant: !0 })
            }),
            (o.state = {
              autoSubmit: !1,
              buttonState: 'signup',
              isCookieCompliant: Object(J.c)(o.context.featureSwitches) === J.a.AcceptAllCookies,
            }),
            o
          )
        }
        return (
          s()(n, [
            {
              key: 'componentDidMount',
              value: function () {
                Object(U.a)() && this.context.setSideNavSupport(!1)
              },
            },
            {
              key: 'componentWillUnmount',
              value: function () {
                Object(U.a)() && this.context.setSideNavSupport(!0)
              },
            },
            {
              key: 'render',
              value: function () {
                var e = this,
                  t = this.props.scribeNamespace,
                  n = !!re.a[this._searchHomePageVariation]
                return v.a.createElement(
                  F.a,
                  null,
                  v.a.createElement(B.a, { title: ye }),
                  v.a.createElement(A.a, {
                    canonical: 'https://twitter.com/',
                    description: Se,
                    title: ye,
                    type: 'website',
                  }),
                  v.a.createElement(E.a, { deepLink: 'twitter://' }),
                  v.a.createElement(
                    D.a,
                    null,
                    v.a.createElement('meta', { content: 'NOODP', name: 'robots' }),
                    v.a.createElement('meta', { content: Se, name: 'description' }),
                  ),
                  v.a.createElement(q.a, null, function (a) {
                    var r = a.windowHeight,
                      o = a.windowWidth,
                      i = Object(G.e)(o, r),
                      c = i.deviceSize,
                      s = i.showLoginForm
                    return v.a.createElement(
                      N.a,
                      { style: we.root },
                      n
                        ? v.a.createElement(re.b, {
                            cookieComplianceFS:
                              e._cookieComplianceGingersnapEnabled && e._isPlaceholderSIWGButtonEnabled,
                            deviceSize: c,
                            scribeNamespace: t,
                            variation: re.a[e._searchHomePageVariation],
                          })
                        : v.a.createElement(
                            v.a.Fragment,
                            null,
                            v.a.createElement(
                              N.a,
                              { style: [we.main, 'desktop' === c && we.mainWide] },
                              e._renderCTA({ deviceSize: c, showLoginForm: s }),
                              e._renderHero(c),
                            ),
                            v.a.createElement(_e, null, v.a.createElement(L.a, { align: 'center' })),
                          ),
                    )
                  }),
                )
              },
            },
            {
              key: '_renderHero',
              value: function (e) {
                var t = Object(G.d)(this.props.userLanguage),
                  n = t.original,
                  a = t.variants
                return v.a.createElement(
                  N.a,
                  { style: [we.block, we.communication, we.blockHero] },
                  v.a.createElement(
                    N.a,
                    { style: we.blockImg },
                    v.a.createElement(V.a, {
                      accessibilityLabel: '',
                      aspectMode: W.a.COVER,
                      backgroundColor: K.a.theme.colors.blue500,
                      customVariants: a,
                      draggable: !1,
                      image: n,
                    }),
                    v.a.createElement(ae.a, { style: [we.twitterIconHero, 'desktop' === e && we.twitterIconHeroWide] }),
                  ),
                )
              },
            },
            {
              key: '_renderCommunicationItems',
              value: function () {
                var e = ce.length
                return v.a.createElement(
                  N.a,
                  { style: we.communicationItems },
                  ce.map(function (t, n) {
                    var a = t.Icon,
                      r = t.text,
                      o = n + 1 === e
                    return v.a.createElement(
                      N.a,
                      { key: r, style: [we.communicationItem, o && we.communicationItemLast] },
                      v.a.createElement(a, { style: we.communicationItemIcon }),
                      v.a.createElement(
                        H.b,
                        { color: 'white', size: 'headline1', style: we.communicationItemText, weight: 'bold' },
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
                  a = this.state.buttonState
                return v.a.createElement(
                  N.a,
                  { style: [we.block, we.blockCTA, 'tablet' === t && we.blockTabletCTA] },
                  n ? this._renderLoginForm() : null,
                  v.a.createElement(
                    N.a,
                    { style: [we.blockInnerWrapper, 'desktop' === t && we.blockInnerWrapperWide] },
                    v.a.createElement(ae.a, { style: we.twitterIcon }),
                    v.a.createElement(
                      H.b,
                      { extendedWidth: !0, style: t ? we.ctaTitleLarge : we.ctaTitle, weight: 'bold' },
                      de,
                    ),
                    v.a.createElement(
                      H.b,
                      {
                        extendedWidth: !0,
                        size: t ? 'title2' : 'title4',
                        style: t ? we.ctaTextLarge : we.ctaText,
                        weight: 'bold',
                      },
                      this._thirdPartySsoButtonsEnabled ? (a === oe.a.SignUp ? le : ue) : le,
                    ),
                    this._renderLoginSignupButtons(t),
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
                  ? v.a.createElement(
                      N.a,
                      { style: ke.container },
                      v.a.createElement(
                        P.a,
                        {
                          autoSubmit: t,
                          horizontalLayout: !0,
                          submitButtonSize: 'xLarge',
                          submitButtonStyle: ke.submitButtonStyle,
                          submitButtonType: 'brandOutlined',
                        },
                        this._renderUsernameInputField(),
                        v.a.createElement(
                          N.a,
                          { style: ke.inputContainer },
                          v.a.createElement(ie.a, { onSubmitEditing: this._handleSubmitEditing, style: ke.input }),
                          v.a.createElement(
                            H.b,
                            {
                              link: {
                                pathname: 'https://twitter.com/account/begin_password_reset'.concat(a),
                                external: !0,
                                openInSameFrame: !0,
                              },
                              size: 'subtext2',
                              style: ke.forgotPassword,
                            },
                            se,
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
      })(v.a.Component)
      g()(Ee, 'contextType', Q.a)
      var ke = K.a.create(function (e) {
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
        we = K.a.create(function (e) {
          return {
            root: { flex: 1 },
            main: { minHeight: 'auto' },
            mainWide: { flex: 'auto', flexDirection: 'row-reverse' },
            block: { justifyContent: 'center', padding: e.spaces.space16 },
            blockHero: { flex: 1, padding: 0, minHeight: '45vh' },
            blockImg: r()(
              r()({}, K.a.absoluteFillObject),
              {},
              { flex: 1, resizeMode: 'cover', justifyContent: 'center', backgroundColor: e.colors.primary },
            ),
            blockCTA: { minWidth: '45vw' },
            blockTabletCTA: { maxWidth: '600px', margin: 'auto', width: '100%' },
            blockInnerWrapper: { width: '100%', padding: e.spaces.space20 },
            blockInnerWrapperWide: { minWidth: ''.concat(G.c, 'px'), maxWidth: ''.concat(G.b, 'px') },
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
              maxWidth: ''.concat(G.a, 'px'),
              paddingVertical: e.spaces.space16,
            },
            communicationItemText: { lineHeight: '30px', marginLeft: e.spaces.space16 },
            seeWhatsHappening: { marginTop: e.spaces.space20 },
            happeningButton: { marginBottom: e.spaces.space16 },
            joinToday: { marginTop: e.spaces.space64, marginBottom: e.spaces.space16 },
            ctaTitle: {
              fontSize: e.spaces.space40,
              letterSpacing: -0.8,
              lineHeight: ''.concat(K.a.theme.spacesPx.space40 + K.a.theme.spacesPx.space12, 'px'),
              marginVertical: e.spaces.space40,
            },
            ctaTitleLarge: {
              fontSize: e.spaces.space64,
              letterSpacing: -1.2,
              lineHeight: ''.concat(K.a.theme.spacesPx.space64 + K.a.theme.spacesPx.space20, 'px'),
              marginVertical: e.spaces.space48,
            },
            ctaText: { marginBottom: e.spaces.space20 },
            ctaTextLarge: { marginBottom: e.spaces.space32 },
            ctaButtonContainer: { flexDirection: 'row' },
            ctaButton: { marginBottom: e.spaces.space20, maxWidth: ''.concat(G.a, 'px'), flex: 1 },
            ssoButtonStyles: { marginBottom: e.spaces.space8, width: Y.b, height: e.spaces.space40, flex: 'none' },
            signInButtonContainer: { marginTop: K.a.theme.spaces.space40 },
            gapContainer: { marginVertical: e.spaces.space4, maxWidth: ''.concat(G.a, 'px'), width: Y.b },
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
            twitterIconHeroWide: { height: '50%', maxHeight: ''.concat(G.a, 'px') },
            bannerPadderChildren: { transitionProperty: 'margin-bottom', transitionDuration: '100ms' },
          }
        })
      t.default = Object(X.c)({ page: 'front' })(T(Ee))
    },
    hiGS: function (e, t, n) {
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
        i = n.n(o),
        c = n('Y9Ll'),
        s = n.n(c),
        l = n('1Pcy'),
        u = n.n(l),
        d = n('5Yy7'),
        p = n.n(d),
        h = n('2VqO'),
        m = n.n(h),
        f = n('KEM+'),
        g = n.n(f),
        b = (n('2G9S'), n('lTEL'), n('7x/C'), n('87if'), n('ZUdG'), n('kYxP'), n('ERkP')),
        y = n.n(b),
        S = n('pXBW'),
        v = n('6/RC'),
        _ = n('UIzd'),
        E = n.n(_),
        k = n('kGix')
      n.d(t, 'a', function () {
        return k.a
      })
      var w = n('fs1G'),
        I = n('0KEI'),
        C = n('lU4h'),
        x = n.n(C),
        T = n('21nk'),
        R = n.n(T),
        B = n('bCEw'),
        L = n.n(B),
        O = n('Ud88'),
        D = n.n(O),
        P = function (e) {
          return (0, e.render)({ fetchStatus: k.a.LOADING, data: null, error: null, retry: w.a })
        },
        A = (function (e) {
          p()(n, e)
          var t = m()(n)
          function n() {
            var e
            i()(this, n)
            for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o]
            return (e = t.call.apply(t, [this].concat(r))), g()(u()(e), 'state', { error: null }), e
          }
          return (
            s()(
              n,
              [
                {
                  key: 'componentDidCatch',
                  value: function (e, t) {
                    if (!(e instanceof S.a)) throw e
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
        F = function (e) {
          var t = e.query,
            n = e.queryRef,
            a = e.render,
            r = R()(t, n)
          return a({ fetchStatus: k.a.LOADED, data: r, error: null, retry: w.a })
        },
        U = function (e, t) {
          if (v.canUseDOM)
            return function (n) {
              var a = n.fetchPolicy,
                o = void 0 === a ? 'store-or-network' : a,
                i = n.render,
                c = n.variables,
                s = L()(e),
                l = r()(s, 2),
                u = l[0],
                d = l[1],
                p = Object(I.useCreateLocalApiErrorHandler)(t.errorConfig.context),
                h = x()(c),
                m = r()(h, 1)[0],
                f = y.a.useCallback(
                  function () {
                    d(m, { fetchPolicy: 'network-only' })
                  },
                  [d, m],
                )
              return (
                y.a.useLayoutEffect(
                  function () {
                    d(m, { fetchPolicy: o })
                  },
                  [o, d, m],
                ),
                u
                  ? y.a.createElement(
                      y.a.Suspense,
                      { fallback: y.a.createElement(P, { render: i }) },
                      y.a.createElement(
                        A,
                        { errorHandler: p(t.errorConfig.options || {}), key: u.fetchKey, retry: f },
                        function (t, n) {
                          return t
                            ? i({ fetchStatus: k.a.FAILED, error: t, data: null, retry: n })
                            : y.a.createElement(F, { query: e, queryRef: u, render: i })
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
              c = D()(),
              s = Object(I.useCreateLocalApiErrorHandler)(t.errorConfig.context),
              l = x()(i),
              u = r()(l, 1)[0],
              d = n.get(c)
            if (d) return d
            var p = y.a.lazy(function () {
              return E()(c, e, u)
                .toPromise()
                .then(
                  function (e) {
                    return o({ fetchStatus: k.a.LOADED, data: e, error: null, retry: w.a })
                  },
                  function (e) {
                    return e instanceof S.a
                      ? (s(t.errorConfig.options || {})(e),
                        o({ fetchStatus: k.a.FAILED, data: null, error: e, retry: w.a }))
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
          return b
        })
      var a = n('RhWx'),
        r = n.n(a),
        o = n('yiKp'),
        i = n.n(o),
        c =
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
        return n && (r = n && (1 === n.length ? n[0] : n[1])), a ? i()(i()({}, a.scope), {}, { src: t, q: r }) : null
      }
      function d(e, t) {
        var n = t.slice(0, e),
          a = t.slice(e, t.length),
          r = n.search(s.b.WordEnd),
          o = r >= 0 ? n.slice(r) : '',
          i = a.search(s.b.WordBoundary),
          c = o + a.slice(0, i)
        return c.trim() ? { start: r, end: e + i, word: c } : { start: -1, end: -1, word: '' }
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
      var f = Object(c.a)(function (e) {
          return {
            bottom: 0,
            paddingBottom: 'calc(2.5 * '.concat(l.a.theme.spaces.space64, ')'),
            position: 'fixed',
            top: ''.concat(e, 'px'),
            transform: [{ translate3d: '0,0,0' }],
          }
        }),
        g = 0,
        b = function () {
          return 'typeaheadDropdown-'.concat((g += 1))
        }
    },
    rRIm: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return q
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
        h = n('2VqO'),
        m = n.n(h),
        f = n('KEM+'),
        g = n.n(f),
        b = (n('2G9S'), n('KqXw'), n('LJOr'), n('ERkP')),
        y = n.n(b),
        S = n('sTyV'),
        v = n('6/RC'),
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
        I = n('3XMw'),
        C = n.n(I),
        x = n('OrGc'),
        T = n('QK5w'),
        R = n('aITJ'),
        B = n('MWbm'),
        L = n('TnY3'),
        O = n('rHpw'),
        D = n('t62R'),
        P = n('v6aA'),
        A = n('uScj'),
        F = n('fs1G'),
        U = n('BcsE'),
        z = n('VPAj'),
        N = C.a.b47e760d,
        H = C.a.fd2c7b43,
        j = new A.a(),
        M = function (e) {
          if (e.target instanceof HTMLInputElement) {
            var t = e.target.tagName.toLowerCase()
            return 'input' === t || 'textarea' === t
          }
          return !1
        },
        q = function (e) {
          return v.canUseDOM ? j.subscribe(e).unsubscribe : F.a
        },
        V = (function (e) {
          p()(n, e)
          var t = m()(n)
          function n() {
            var e
            i()(this, n)
            for (var a = arguments.length, o = new Array(a), c = 0; c < a; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              g()(u()(e), '_bindKeyboardShortcuts', function () {
                var t,
                  n,
                  a = e.props,
                  o = a.history,
                  i = a.loggedInUserScreenName,
                  c = function (e) {
                    return function (t) {
                      t.preventDefault(),
                        j.getListeners().length
                          ? j.notify(e)
                          : o.push({ pathname: '/explore', state: { searchFocused: !0, searchPrefill: e } })
                    }
                  },
                  s =
                    ((t = {}),
                    g()(t, x.e.search, c()),
                    g()(t, x.e.goToUser, c('@')),
                    g()(t, x.e.openKeyboardShortcuts, function () {
                      return o.push('/i/keyboard_shortcuts')
                    }),
                    g()(t, x.e.goExplore, function () {
                      return o.push('/explore')
                    }),
                    g()(t, x.e.goSettings, function () {
                      return o.push('/settings')
                    }),
                    t),
                  l = function (e) {
                    var t
                    return (
                      (t = {}),
                      g()(t, x.e.goProfile, function () {
                        return o.push('/'.concat(e))
                      }),
                      g()(t, x.e.goLikes, function () {
                        return o.push('/'.concat(e, '/likes'))
                      }),
                      g()(t, x.e.goLists, function () {
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
                          g()({}, x.e.goTopArticles, function () {
                            return o.push('/i/articles')
                          }),
                        )
                      : i
                      ? l(i)
                      : {},
                  p = r()(
                    r()(r()({}, s), d),
                    {},
                    ((n = {}),
                    g()(n, x.e.goHome, function () {
                      return o.push('/home')
                    }),
                    g()(n, x.e.goDisplay, function () {
                      return o.push('/i/display')
                    }),
                    g()(n, x.e.goNotifications, function () {
                      return o.push('/notifications')
                    }),
                    g()(n, x.e.goMentions, function () {
                      return o.push('/notifications/mentions')
                    }),
                    g()(n, x.e.goMessages, function () {
                      return o.push('/messages')
                    }),
                    g()(n, x.e.newMessage, function () {
                      return o.push('/messages/compose')
                    }),
                    g()(n, x.e.newTweet, function () {
                      return o.push('/compose/tweet')
                    }),
                    g()(n, x.e.goMomentMaker, function () {
                      return o.push('/i/moment_maker')
                    }),
                    g()(n, x.e.goBookmarks, function () {
                      return o.push('/i/bookmarks')
                    }),
                    n),
                  ),
                  h = e.props.loggedInUserScreenName ? p : s
                e._unbindKeyboardShortcuts = Object(S.a)(h)
              }),
              g()(u()(e), '_handleKeyDown', function (t) {
                M(t) ||
                  'Backspace' !== t.key ||
                  ((e._backspaceDown = Date.now()), t.preventDefault(), t.stopPropagation())
              }),
              g()(u()(e), '_handleKeyUp', function (t) {
                if (!M(t) && 'Backspace' === t.key) {
                  t.preventDefault(), t.stopPropagation()
                  var n = e._backspaceDown,
                    a = !!Object(U.a)(n) && Date.now() - n < 500,
                    r = Object(T.a)({}, { location: e.props.location })
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
                    R.b.isKaiOS() &&
                      _.a.isStandaloneApp() &&
                      (document.addEventListener('keydown', this._handleKeyDown),
                      document.addEventListener('keyup', this._handleKeyUp))
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._unbindKeyboardShortcuts && this._unbindKeyboardShortcuts(),
                    R.b.isKaiOS() &&
                      _.a.isStandaloneApp() &&
                      (document.removeEventListener('keydown', this._handleKeyDown),
                      document.removeEventListener('keyup', this._handleKeyUp))
                },
              },
              {
                key: 'render',
                value: function () {
                  return this.props.loggedInUserScreenName
                    ? y.a.createElement(
                        B.a,
                        { accessibilityLevel: 2, accessibilityRole: 'heading', style: O.a.visuallyHidden },
                        y.a.createElement(D.b, null, N),
                        y.a.createElement(D.b, { focusable: !1, link: '/i/keyboard_shortcuts' }, H),
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(y.a.Component)
      g()(V, 'contextType', P.a)
      var W = w(V),
        K = v.canUseDOM ? Object(L.a)(W) : Object(z.a)(null)
      t.a = K
    },
    sYRn: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        o = n('eb3s'),
        i = n('3XMw'),
        c = n.n(i),
        s = n('4ZbN'),
        l = c.a.hffea05c,
        u = c.a.j037e373,
        d = c.a.d96cf7cd
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
          return I
        })
      var a = n('KEM+'),
        r = n.n(a),
        o = n('RhWx'),
        i = n.n(o),
        c = n('yiKp'),
        s = n.n(c),
        l = n('T0aG'),
        u = n.n(l),
        d = (n('yH/f'), n('2G9S'), n('LW0h'), n('7x/C'), n('JtPf'), n('oEOe')),
        p = n('kGix'),
        h = n('Ssj5'),
        m = n('SrIh'),
        f = n('RqPI'),
        g = 'savedSearches',
        b = { fetchStatus: p.a.NONE, savedSearches: [] },
        y = Object.freeze({
          REQUEST: 'rweb/savedSearches/FETCH_SAVED_SEARCHES_REQUEST',
          SUCCESS: 'rweb/savedSearches/FETCH_SAVED_SEARCHES_SUCCESS',
          FAILURE: 'rweb/savedSearches/FETCH_SAVED_SEARCHES_FAILURE',
        }),
        S = Object.freeze({
          REQUEST: 'rweb/savedSearches/SAVE_SEARCH_REQUEST',
          SUCCESS: 'rweb/savedSearches/SAVE_SEARCH_SUCCESS',
          FAILURE: 'rweb/savedSearches/SAVE_SEARCH_FAILURE',
        }),
        v = Object.freeze({
          REQUEST: 'rweb/savedSearches/DELETE_SAVED_SEARCH_REQUEST',
          SUCCESS: 'rweb/savedSearches/DELETE_SAVED_SEARCH_SUCCESS',
          FAILURE: 'rweb/savedSearches/DELETE_SAVED_SEARCH_FAILURE',
        })
      function _() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b,
          t = arguments.length > 1 ? arguments[1] : void 0
        switch (t.type) {
          case y.SUCCESS:
            var n = t.payload,
              a = Array.isArray(n)
            return (
              a ||
                Object(m.a)('Saved search results are not type array', { extra: { savedSearchResultsType: u()(n) } }),
              s()(s()({}, e), {}, { fetchStatus: p.a.LOADED, savedSearches: a && n ? n : [] })
            )
          case y.FAILURE:
            return s()(s()({}, e), {}, { fetchStatus: p.a.FAILED })
          case S.SUCCESS:
            return s()(
              s()({}, e),
              {},
              { savedSearches: t.payload ? [].concat(i()(e.savedSearches), [t.payload]) : e.savedSearches },
            )
          case v.SUCCESS:
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
      h.a.register(r()({}, g, _))
      var E = function (e) {
          return e.savedSearches.savedSearches
        },
        k = function (e) {
          return function (t, n, a) {
            var r = a.api
            return Object(d.b)(t, { request: r.SavedSearches.create, params: { query: e } })({
              actionTypes: S,
              context: 'SAVE_SEARCH',
            })
          }
        },
        w = function (e) {
          return function (t, n, a) {
            var r = a.api
            return Object(d.b)(t, { request: r.SavedSearches.destroy, params: { id: e } })({
              actionTypes: v,
              context: 'DELETE_SAVED_SEARCH',
            })
          }
        },
        I = function () {
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
                      actionTypes: y,
                      context: 'FETCH_SAVED_SEARCHES',
                    })
                  })
              : Promise.resolve()
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
                args: [{ kind: 'Literal', name: 's', value: 22 }],
                concreteType: 'LoggedOutTrendsList',
                kind: 'LinkedField',
                name: 'logged_out_trends_list',
                plural: !1,
                selections: [{ alias: null, args: null, kind: 'ScalarField', name: 'trends', storageKey: null }],
                storageKey: 'logged_out_trends_list(s:22)',
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
