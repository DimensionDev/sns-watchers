;(window.webpackJsonp = window.webpackJsonp || []).push([
  [61, 186],
  {
    '0+0m': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      }),
        n.d(t, 'c', function () {
          return a
        }),
        n.d(t, 'b', function () {
          return o
        }),
        n.d(t, 'f', function () {
          return i
        }),
        n.d(t, 'd', function () {
          return c
        }),
        n.d(t, 'e', function () {
          return s
        })
      n('yH/f')
      var r = 'com.twitter.twitter.siwa',
        a = '49625052041-kgt0hghf445lmcmhijv46b715m2mpbct.apps.googleusercontent.com',
        o = 300,
        i = 'popup_closed_by_user',
        c = Object.freeze({ SignUp: 'signup_with', SignIn: 'signin_with' }),
        s = Object.freeze({ Button: 'button', Prompt: 'prompt' })
    },
    '1zbE': function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return s
      }),
        n.d(t, 'a', function () {
          return l
        }),
        n.d(t, 'c', function () {
          return u
        })
      n('yH/f')
      var r = n('ERkP'),
        a = n.n(r),
        o = n('t62R'),
        i = n('3XMw'),
        c = n.n(i),
        s = 'phone_email',
        l = Object.freeze({ LogIn: 'login', SignUp: 'signup' }),
        u = a.a.createElement(
          c.a.I18NFormatMessage,
          { $i18n: 'c4d3d078' },
          a.a.createElement(o.b, { link: 'https://twitter.com/tos' }, c.a.c8c5faad),
          a.a.createElement(o.b, { link: 'https://twitter.com/privacy' }, c.a.ba5b7ecb),
          a.a.createElement(o.b, { link: 'https://help.twitter.com/rules-and-policies/twitter-cookies' }, c.a.f4fe46c3),
        )
    },
    '21nk': function (e, t, n) {
      'use strict'
      var r = n('I9iR'),
        a = n('3KVO'),
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
          f = t.fetchPolicy,
          h = t.source,
          m = t.variables,
          b = t.networkCacheConfig,
          y = o(e, m, b)
        if ('PreloadedQuery_DEPRECATED' === t.kind)
          y.request.node.params.name !== t.name && r(!1),
            (s = {
              componentDisplayName: 'usePreloadedQuery()',
              fetchKey: p,
              fetchObservable: l(d, y.request.identifier, function () {
                return d === t.environment && null != h
                  ? d.executeWithSource({ operation: y, source: h })
                  : d.execute({ operation: y })
              }),
              fetchPolicy: f,
              query: y,
              renderPolicy: null == n ? void 0 : n.UNSTABLE_renderPolicy,
            })
        else {
          var g = u(d, y)
          s = {
            componentDisplayName: 'usePreloadedQuery()',
            fetchObservable: null != h && d === t.environment ? h.ifEmpty(g) : (t.environment, g),
            fetchKey: p,
            fetchPolicy: f,
            query: y,
            renderPolicy: null == n ? void 0 : n.UNSTABLE_renderPolicy,
          }
        }
        return a(s)
      }
    },
    '23An': function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        a = r.useEffect,
        o = r.useRef
      e.exports = function () {
        var e = o(!0)
        return (
          a(function () {
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
        return ce
      })
      n('yH/f'), n('Ysgh'), n('KqXw')
      var r = n('ERkP'),
        a = n.n(r),
        o = n('Hde2'),
        i = n('bojF'),
        c = n('3XMw'),
        s = n.n(c),
        l = n('lUZE'),
        u = n('1f8Q'),
        d = n('rHpw'),
        p = n('MWbm'),
        f = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('KEM+')),
        h = n.n(f),
        m = (n('M+/F'), n('z84I'), n('uFXj'), n('2G9S'), n('FQwk')),
        b = n('iCMz'),
        y = n('Rp9C'),
        g = n('72nz'),
        v = n('Irs7'),
        S = n('htQn'),
        _ = n('t62R')
      function E(e, t) {
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
      function w(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? E(Object(n), !0).forEach(function (t) {
                h()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : E(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var O = s.a.d228a9a0,
        k = s.a.jae84f3a,
        I = { section: 'logged_out_search', component: 'trend' },
        P = function (e) {
          var t = e.position,
            n = e.trend,
            r = Object(v.b)(),
            o = a.a.useMemo(
              function () {
                return [w(w({}, y.a.getTrendItem(n)), {}, { position: t })]
              },
              [n, t],
            )
          a.a.useEffect(
            function () {
              r.scribe(w(w({}, I), {}, { action: 'impression', data: { items: o } }))
            },
            [r, o],
          )
          var i = '/search?src=logged_out_home_trend_click&vertical=trends&q='.concat(encodeURIComponent(n))
          return a.a.createElement(
            S.a,
            {
              accessibilityRole: 'listitem',
              onClick: function () {
                return r.scribe(w(w({}, I), {}, { action: 'click', data: { items: o } }))
              },
              withInteractiveStyling: !1,
            },
            a.a.createElement(_.b, { color: 'gray700', key: n, link: i, size: 'body', style: x.searchTrend }, n),
          )
        },
        C = function (e) {
          var t = e.alignment,
            n = (e.deviceSize, e.trendResults.slice(0, 5))
          return a.a.createElement(
            p.a,
            {
              accessibilityLabel: k,
              accessibilityRole: 'list',
              style: [x.searchTrends, 'left' === t && x.searchTrendsLeft],
            },
            n.map(function (e, t) {
              return a.a.createElement(P, { key: e, position: t, trend: e })
            }),
            a.a.createElement(
              S.a,
              { accessibilityRole: 'listitem', withInteractiveStyling: !1 },
              a.a.createElement(_.b, { link: '/explore', style: x.searchTrend }, O),
            ),
          )
        },
        R = function (e) {
          var t = e.alignment,
            n = e.deviceSize,
            r = e.trendResults
          return a.a.createElement(
            p.a,
            { style: [x.searchBoxTrendsContainer, 'tablet' === n && x.searchBoxTrendsContainerThin] },
            a.a.createElement(
              p.a,
              { style: x.searchBox },
              a.a.createElement(g.default, { forceVdlDisable: !1, isOnHomepage: !0, shouldHandleSearchShortcut: !0 }),
            ),
            r && a.a.createElement(C, { alignment: t, deviceSize: n, trendResults: r }),
          )
        },
        x = d.a.create(function (e) {
          return {
            bottomBarForMobile: {
              backgroundColor: e.colors.navigationBackground,
              borderTopColor: e.colors.borderColor,
              borderTopStyle: 'solid',
              borderTopWidth: e.borderWidths.small,
              padding: 'calc('.concat(e.spaces.space16, ' + ').concat(d.a.iPhoneOffsetBottom, ')'),
            },
            searchHomeFooter: { backgroundColor: e.colors.gray50 },
            searchHomeFooterMobile: {
              marginBottom: 'calc('.concat(e.spaces.space56, ' + ').concat(e.spaces.space4, ')'),
            },
            searchRoot: { flex: 1, alignItems: 'center', marginTop: '25vh', zIndex: 1 },
            searchRootMobile: { marginBottom: '55vh' },
            searchBox: { width: '100%', height: e.spaces.space40, marginBottom: e.spaces.space12, zIndex: 1 },
            searchBoxTrendsContainer: {
              marginHorizontal: e.spaces.space16,
              alignItems: 'center',
              maxWidth: 'calc('.concat(e.spaces.space48, ' * 10)'),
            },
            searchBoxTrendsContainerThin: { maxWidth: 'calc('.concat(e.spaces.space36, ' * 10)') },
            searchNavBar: {
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
              margin: 'calc('.concat(e.spaces.space40, ' + ').concat(e.spaces.space2, ')'),
            },
            searchNavButtons: { flexDirection: 'row' },
            searchTrend: { marginTop: e.spaces.space12, marginRight: e.spaces.space8 },
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
        j = function (e) {
          var t = e.deviceSize,
            n = e.scribeNamespace,
            r = e.trendResults,
            c = function () {
              return a.a.createElement(b.a, {
                buttonSize: 'large',
                loginButtonType: 'primaryOutlined',
                scribeNamespace: w(w({}, n), {}, { component: 'signup_callout', element: 'form', section: 'front' }),
                signupButtonType: 'primaryFilled',
              })
            }
          return a.a.createElement(
            a.a.Fragment,
            null,
            'desktop' !== t
              ? a.a.createElement(o.a, { style: x.bottomBarForMobile }, c())
              : a.a.createElement(
                  p.a,
                  { style: x.searchNavBar },
                  a.a.createElement(p.a, { style: x.searchNavButtons }, c()),
                ),
            a.a.createElement(
              p.a,
              { style: [x.searchRoot, 'desktop' !== t && x.searchRootMobile] },
              a.a.createElement(l.a, { style: x.twitterIconSearch }),
              a.a.createElement(R, { deviceSize: t, trendResults: r }),
            ),
            a.a.createElement(
              i.CookieComplianceBannerPadder,
              null,
              a.a.createElement(
                p.a,
                { style: [x.searchHomeFooter, 'desktop' !== t && x.searchHomeFooterMobile] },
                a.a.createElement(m.a, { align: 'center' }),
              ),
            ),
          )
        },
        D = s.a.g0ff1ca8,
        T = s.a.g3aa4a89,
        L = d.a.create(function (e) {
          return {
            bottomBarBanner: {
              paddingBottom: d.a.iPhoneOffsetBottom,
              backgroundColor: e.colors.primary,
              boxShadow: e.boxShadows.medium,
            },
            searchRootWithBanner: { marginTop: '30vh', marginBottom: '0' },
          }
        }),
        B = function (e) {
          var t = e.deviceSize,
            n = e.trendResults
          return a.a.createElement(
            a.a.Fragment,
            null,
            a.a.createElement(
              p.a,
              { style: [x.searchRoot, 'desktop' !== t && x.searchRootMobile, L.searchRootWithBanner] },
              a.a.createElement(l.a, { style: x.twitterIconSearch }),
              a.a.createElement(R, { deviceSize: t, trendResults: n }),
            ),
            a.a.createElement(
              i.CookieComplianceBannerPadder,
              null,
              a.a.createElement(
                o.a,
                { style: L.bottomBarBanner },
                a.a.createElement(u.a, { buttonSize: 'large', fullWidth: !0, subtext: T, text: D }),
              ),
            ),
          )
        },
        A = n('n0Rl'),
        F = n('RgK2'),
        z = n.n(F),
        U = n('kGix'),
        N = (n('enFi'), n('ddV6')),
        H = n.n(N),
        M = n('UpKB'),
        W = n('v6aA'),
        q = n('5P4+'),
        V = n('kG2l'),
        K = n('JkIr'),
        G = n('0yYu'),
        Q = n('/yvb'),
        X = n('AS3p'),
        Z = n('1zbE')
      function J(e, t) {
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
      function Y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? J(Object(n), !0).forEach(function (t) {
                h()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : J(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var $,
        ee = s.a.ca86b62c,
        te = s.a.aa95ddc0,
        ne = s.a.b0dbe914,
        re = s.a.ae03a21c,
        ae = 360,
        oe = d.a.create(function (e) {
          return {
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
            footerContainer: { width: ae },
            gapContainer: { marginVertical: e.spaces.space4, maxWidth: ''.concat(q.a, 'px'), width: ae },
            header: { marginHorizontal: e.spaces.space16, maxWidth: 'calc('.concat(e.spaces.space48, ' * 10)') },
            headerThin: { maxWidth: ae },
            splitContainer: { minHeight: 'auto', flexGrow: 1, flexDirection: 'column-reverse' },
            splitContainerWide: { flex: 'auto', flexDirection: 'row-reverse' },
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
            ssoButtonStyles: { marginBottom: e.spaces.space16, width: ae, height: e.spaces.space40, flex: 'none' },
            twitterIconSearchLeft: { alignSelf: 'flex-start', marginBottom: e.spaces.space48 },
          }
        }),
        ie = function (e) {
          var t = e.cookieComplianceFS,
            n = e.deviceSize,
            r = e.scribeNamespace,
            o = e.trendResults,
            c = a.a.useContext(W.a).featureSwitches,
            u = Object(X.c)(c) === X.a.AcceptAllCookies,
            f = a.a.useState(u),
            h = H()(f, 2),
            b = h[0],
            y = h[1],
            g = a.a.useState(Z.a.SignUp),
            S = H()(g, 2),
            E = S[0],
            w = S[1],
            O = Object(v.b)(),
            k = function () {
              y(!0)
            },
            I = function () {
              O.scribe(
                Y(Y({}, r), {}, { section: 'front', component: 'signup_callout', element: 'form', action: 'signup' }),
              )
            },
            P = function () {
              O.scribe(
                Y(Y({}, r), {}, { section: 'front', component: 'signup_callout', element: 'form', action: 'login' }),
              )
            },
            C =
              (function () {
                switch (E) {
                  case Z.a.SignUp:
                    return {
                      loginSignUpButtonLabel: te,
                      loginSignUpButtonLink: {
                        pathname: '/i/flow/signup',
                        state: { input: { requested_variant: JSON.stringify({ signup_type: Z.b }) } },
                      },
                      handleLoginSignUpButton: I,
                    }
                  case Z.a.LogIn:
                    return { loginSignUpButtonLabel: ne, loginSignUpButtonLink: '/login', handleLoginSignUpButton: P }
                  default:
                    return
                }
              })() || {},
            j = C.handleLoginSignUpButton,
            D = C.loginSignUpButtonLabel,
            T = C.loginSignUpButtonLink,
            L = function () {
              switch (E) {
                case Z.a.SignUp:
                  return (
                    (e = {
                      onPress: function () {
                        return w(Z.a.LogIn)
                      },
                    }.onPress),
                    a.a.createElement(
                      s.a.I18NFormatMessage,
                      { $i18n: 'c83ef3f5' },
                      a.a.createElement(_.b, { color: 'link', onPress: e }, s.a.fb9dd9b0),
                    )
                  )
                case Z.a.LogIn:
                  return (function (e) {
                    var t = e.onPress
                    return a.a.createElement(
                      s.a.I18NFormatMessage,
                      { $i18n: 'i89d7b70' },
                      a.a.createElement(_.b, { color: 'link', onPress: t }, s.a.ie4dd8d6),
                    )
                  })({
                    onPress: function () {
                      return w(Z.a.SignUp)
                    },
                  })
                default:
                  return
              }
              var e
            },
            B = function () {
              return a.a.createElement(
                p.a,
                { style: oe.footerContainer },
                a.a.createElement(_.b, { color: 'gray700', size: 'subtext2', style: oe.ctaText }, Z.c),
                a.a.createElement(
                  _.b,
                  { align: 'left', style: !n && oe.ctaText, testID: K.a.logInSignUpFooter, weight: 'medium' },
                  L(),
                ),
              )
            },
            A = function () {
              return a.a.createElement(
                a.a.Fragment,
                null,
                a.a.createElement(V.a, {
                  buttonSize: 'medium',
                  buttonState: E,
                  customWidth: '360',
                  isCookieCompliant: t ? b : void 0,
                  onPress: k,
                  style: [oe.ctaButton, oe.ssoButtonStyles],
                }),
                a.a.createElement(M.a, {
                  buttonSize: 'medium',
                  buttonState: E,
                  style: [oe.ctaButton, oe.ssoButtonStyles, { marginBottom: 0 }],
                }),
                a.a.createElement(
                  p.a,
                  { style: oe.gapContainer },
                  a.a.createElement(G.a, {
                    color: d.a.theme.colors.nestedBorderColor,
                    label: a.a.createElement(_.b, { children: ee }),
                  }),
                ),
                a.a.createElement(
                  Q.a,
                  {
                    backgroundColor: 'white',
                    borderColor: 'gray200',
                    color: 'gray1100',
                    link: T,
                    onPress: j,
                    size: 'medium',
                    style: [oe.ctaButton, oe.ssoButtonStyles],
                    testID: K.a.signupButton,
                  },
                  D,
                ),
              )
            },
            F = function () {
              return a.a.createElement(
                i.CookieComplianceBannerPadder,
                null,
                a.a.createElement(
                  p.a,
                  { style: [x.searchHomeFooter, { marginBottom: '0' }] },
                  a.a.createElement(m.a, { align: 'center' }),
                ),
              )
            }
          return a.a.createElement(
            a.a.Fragment,
            null,
            a.a.createElement(
              p.a,
              { style: [oe.splitContainer, 'desktop' === n && oe.splitContainerWide] },
              a.a.createElement(
                p.a,
                {
                  style: [
                    oe.splitItem,
                    oe.splitItemGray,
                    'desktop' !== n && oe.splitItemMobile,
                    'tablet' === n && oe.splitItemTablet,
                  ],
                },
                a.a.createElement(A, null),
                a.a.createElement(B, null),
              ),
              a.a.createElement(
                p.a,
                { style: [oe.splitItem, 'desktop' !== n && oe.splitItemMobile, 'tablet' === n && oe.splitItemTablet] },
                a.a.createElement(
                  p.a,
                  { style: [oe.header, 'tablet' === n && oe.headerThin] },
                  a.a.createElement(l.a, { style: [x.twitterIconSearch, oe.twitterIconSearchLeft] }),
                  a.a.createElement(
                    _.b,
                    {
                      extendedWidth: !0,
                      style: 'desktop' === n ? oe.ctaTitleLarge : 'tablet' === n ? oe.ctaTitleMedium : oe.ctaTitle,
                      weight: 'bold',
                    },
                    re,
                  ),
                ),
                a.a.createElement(R, { alignment: 'left', deviceSize: n, trendResults: o }),
              ),
            ),
            a.a.createElement(F, null),
          )
        },
        ce = Object.freeze({ original: 'original', banner: 'banner', split: 'split' }),
        se = void 0 !== $ ? $ : ($ = n('x1T0')),
        le = Object(A.b)(se, { errorConfig: { context: 'LOGGED_OUT_SEARCH_SCREEN' } })
      t.b = function (e) {
        var t = e.cookieComplianceFS,
          n = e.deviceSize,
          r = e.scribeNamespace,
          o = e.variation
        return a.a.createElement(le, {
          render: function (e) {
            var i,
              c = e.data,
              s = e.fetchStatus,
              l =
                (e.retry,
                s === U.a.LOADED
                  ? null == c || null === (i = c.logged_out_trends_list) || void 0 === i
                    ? void 0
                    : i.trends
                  : void 0)
            return o === ce.original
              ? a.a.createElement(j, { deviceSize: n, scribeNamespace: r, trendResults: l })
              : o === ce.banner
              ? a.a.createElement(B, { deviceSize: n, trendResults: l })
              : o === ce.split
              ? a.a.createElement(ie, { cookieComplianceFS: t, deviceSize: n, scribeNamespace: r, trendResults: l })
              : null
          },
          variables: z.a,
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
      var r = 'https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png',
        a = 'https://abs.twimg.com/sticky/illustrations/lohp_1302x955.png',
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
              { uri: t ? r : a, width: 1302, height: 955 },
            ],
            original: { url: t ? r : a, width: 1302, height: 958 },
          }
        }
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
        f = n('N+ot'),
        h = n.n(f),
        m = n('AuHH'),
        b = n.n(m),
        y = n('KEM+'),
        g = n.n(y),
        v = (n('2G9S'), n('MvUL'), n('KqXw'), n('Ysgh'), n('ERkP')),
        S = n.n(v),
        _ = n('3XMw'),
        E = n.n(_),
        w = n('cnVF'),
        O = n('Ukpf'),
        k = n('BTou'),
        I = n('mrHL'),
        P = 'LoginForm_Login_Button',
        C = n('fEA7'),
        R = n.n(C),
        x = n('MWbm'),
        j = n('Irs7'),
        D = n('v6aA'),
        T = n('/yvb'),
        L = n('rHpw')
      function B(e) {
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
            r = b()(e)
          if (t) {
            var a = b()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      var A = E.a.e919c3bc,
        F = (function (e) {
          p()(n, e)
          var t = B(n)
          function n() {
            var e
            i()(this, n)
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              g()(u()(e), '_mobileLoginToken', R.a.v1().replace(/-/g, '')),
              g()(u()(e), '_handleSubmit', function () {
                var t = e.props,
                  n = t.analytics,
                  r = t.onSubmit
                if ((n.scribe({ action: 'submit' }), k.a.flushHTMLCache(), e._setLoginCookie(), r))
                  return r(e._form.elements), !1
              }),
              g()(u()(e), '_handleSubmitButtonClick', function () {
                !1 !== e._handleSubmit() && e._form.submit()
              }),
              g()(u()(e), '_setFormRef', function (t) {
                t && (e._form = t)
              }),
              g()(u()(e), '_setLoginCookie', function () {
                var t = new Date(Date.now())
                t.setTime(t.getTime() + 3e5),
                  Object(I.e)(w.q, e._mobileLoginToken, {
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
                  O.a.inject({ scriptId: 'jsInstLibrary', src: 'https://twitter.com/i/js_inst?c_name=ui_metrics' })
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
                    f = a()(p, 2),
                    h = f[0],
                    m = f[1],
                    b = encodeURI(h || '/'),
                    y = m ? '?'.concat(m) : '',
                    g = ''.concat('').concat(b).concat(y),
                    v = S.a.createElement(
                      x.a,
                      { style: o && z.horizontalFields },
                      S.a.createElement('input', { name: 'redirect_after_login', type: 'hidden', value: g }),
                      S.a.createElement('input', { name: 'remember_me', type: 'hidden', value: '1' }),
                      S.a.createElement('input', {
                        name: 'authenticity_token',
                        type: 'hidden',
                        value: this._mobileLoginToken,
                      }),
                      S.a.createElement('input', { name: 'wfa', type: 'hidden', value: '1' }),
                      S.a.createElement('input', { autoComplete: 'off', name: 'ui_metrics', type: 'hidden' }),
                      t,
                      r
                        ? null
                        : S.a.createElement(
                            x.a,
                            { style: o && z.loginButtonContainer },
                            S.a.createElement(
                              T.a,
                              {
                                disabled: c,
                                onPress: this._handleSubmitButtonClick,
                                size: l,
                                style: u,
                                testID: P,
                                type: d,
                              },
                              s,
                            ),
                          ),
                    )
                  return S.a.createElement(
                    x.a,
                    { style: z.loginForm },
                    S.a.createElement('form', {
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
        })(S.a.Component)
      g()(F, 'contextType', D.a),
        g()(F, 'defaultProps', {
          autoSubmit: !1,
          formActionUrl: '/sessions',
          hideSubmitButton: !1,
          submitButtonDisabled: !1,
          submitButtonLabel: A,
          submitButtonType: 'brandFilled',
        })
      var z = L.a.create(function (e) {
        return {
          horizontalFields: { flexDirection: 'row', justifyContent: 'center', alignItems: 'stretch' },
          loginForm: { width: '100%' },
          loginButtonContainer: { flexDirection: 'column', justifyContent: 'center' },
        }
      })
      t.a = Object(j.a)(F, { element: 'inline_login_form' })
    },
    '72nz': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'SearchBoxContainer', function () {
          return vt
        })
      n('OZaJ'), n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('97Jx'),
        a = n.n(r),
        o = n('VrFO'),
        i = n.n(o),
        c = n('Y9Ll'),
        s = n.n(c),
        l = n('1Pcy'),
        u = n.n(l),
        d = n('5Yy7'),
        p = n.n(d),
        f = n('N+ot'),
        h = n.n(f),
        m = n('AuHH'),
        b = n.n(m),
        y = n('KEM+'),
        g = n.n(y),
        v = n('RhWx'),
        S = n.n(v),
        _ = (n('2G9S'), n('tQbP'), n('z84I'), n('hBvt'), n('ho0z'), n('WNMA'), n('KqXw'), n('MvUL'), n('ERkP')),
        E = n.n(_),
        w = n('+Kfv'),
        O = n('wtjx'),
        k = n('rxPX'),
        I = Object(k.a)()
          .propsFromActions(function () {
            return { addQuery: O.a }
          })
          .withAnalytics({ component: 'search_box' }),
        P = n('Hw0q'),
        C = n('3XMw'),
        R = n.n(C),
        x = n('8jkQ'),
        j = n('u3ZE'),
        D = n('rRIm'),
        T = n('Rp9C'),
        L = (n('vrRf'), n('5BYb'), n('jQ3i'), n('x4t0'), n('M+/F'), n('wFPu'), n('vfdX'), n('lnti')),
        B = n('hqKg'),
        A = n('3IPs'),
        F = n('M0jS'),
        z = n('G6rE'),
        U = n('k49u'),
        N = n('J4ZH'),
        H = n('0KEI'),
        M = n('v4XE'),
        W = n('kGix')
      function q(e, t) {
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
      function V(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? q(Object(n), !0).forEach(function (t) {
                g()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : q(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var K = function (e) {
          return (
            Object(U.c)(e, U.a.GenericUserNotFound) ||
            Object(U.c)(e, U.a.OtherUserSuspended) ||
            Object(U.c)(e, U.a.AddressBookLookupNotFound)
          )
        },
        G = Object(k.a)()
          .propsFromState(function () {
            var e = Object(B.createSelector)(O.g, z.e.selectFetchStatuses, function (e, t) {
                var n = Object(L.a)(
                  e.map(function (e) {
                    var n,
                      r = null === (n = e.user) || void 0 === n ? void 0 : n.id
                    return r && t[r] ? { id: r, fetchStatus: t[r] } : void 0
                  }),
                )
                return Object(N.a)(n, function (e) {
                  return e.fetchStatus
                })
              }),
              t = Object(B.createSelector)(e, function (e) {
                return (e[W.a.FAILED] || []).map(function (e) {
                  return e.id
                })
              }),
              n = Object(B.createSelector)(e, z.e.selectErrors, function (e, t) {
                return (e[W.a.FAILED] || [])
                  .filter(function (e) {
                    var n = e.id
                    return K(t[n] || {})
                  })
                  .map(function (e) {
                    return e.id
                  })
              }),
              r = Object(B.createSelector)(e, z.e.selectErrors, function (e, t) {
                var n = (e[W.a.FAILED] || []).filter(function (e) {
                  var n = e.id
                  return !K(t[n] || {})
                })
                return (e[W.a.LOADING] || []).length > 0
                  ? W.a.LOADING
                  : (e[W.a.LOADED] || []).length > 0
                  ? W.a.LOADED
                  : n.length > 0
                  ? W.a.FAILED
                  : W.a.NONE
              }),
              a = Object(B.createSelector)(O.g, function (e) {
                return e.map(function (e) {
                  return V(V({}, e), {}, { category: A.b.RecentSearch })
                })
              }),
              o = Object(B.createSelector)(M.d, function (e) {
                return e.map(function (e) {
                  return { keyword: { query: e.query }, savedSearchId: e.id_str, category: A.b.SavedSearch }
                })
              })
            return {
              isRecentSearchDataLoaded: O.e,
              recentSearches: a,
              usersFetchStatus: r,
              invalidRecentSearchUserIds: n,
              failedRecentSearchUserIds: t,
              savedSearches: o,
            }
          })
          .adjustStateProps(function (e) {
            var t = e.failedRecentSearchUserIds,
              n = e.invalidRecentSearchUserIds,
              r = e.isRecentSearchDataLoaded,
              a = e.recentSearches,
              o = e.savedSearches,
              i = e.usersFetchStatus,
              c = !a.filter(function (e) {
                var t = e.user
                return t && n.indexOf(t.id) < 0
              }).length,
              s = i !== W.a.LOADING && r && c ? W.a.LOADED : i
            return {
              failedRecentSearchUserIds: t,
              invalidRecentSearchUserIds: n,
              recentSearches: a,
              fetchStatus: s,
              savedSearches: o,
            }
          })
          .propsFromActions(function () {
            return {
              clearAll: O.b,
              createLocalApiErrorHandler: Object(H.createLocalApiErrorHandlerWithContextFactory)('SEARCH_ONE_CLICK'),
              deleteSavedSearch: M.a,
              fetchRecentSearchesIfNeeded: O.c,
              fetchSavedSearchesIfNeeded: M.b,
              fetchUsersIfNeeded: z.e.fetchManyIfNeeded,
              fetchUsersPresenceIfNeeded: F.b.fetchManyIfNeeded,
              removeQuery: O.d,
            }
          })
          .withAnalytics({ element: 'typeahead' }),
        Q = n('sYRn'),
        X = n('v//M'),
        Z = n('7nmT'),
        J = n.n(Z),
        Y = (n('jQ/y'), n('m3Bd')),
        $ = n.n(Y),
        ee = n('hOZg'),
        te = n('5T6p'),
        ne = n('MWbm'),
        re = n('/yvb'),
        ae = n('rHpw')
      function oe(e) {
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
            r = b()(e)
          if (t) {
            var a = b()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      var ie = R.a.e68b09b4,
        ce = (function (e) {
          p()(n, e)
          var t = oe(n)
          function n() {
            return i()(this, n), t.apply(this, arguments)
          }
          return (
            s()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.id,
                    n = e.onRemove,
                    r = $()(e, ['id', 'onRemove'])
                  return t
                    ? E.a.createElement(
                        ne.a,
                        { style: se.root },
                        E.a.createElement(te.a, r),
                        E.a.createElement(re.a, {
                          accessibilityLabel: ie,
                          icon: E.a.createElement(ee.a, null),
                          onPress: n,
                          size: 'small',
                          style: se.button,
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
                    r = e.supportText,
                    a = e.title
                  return {
                    category: A.b.RecentSearch,
                    query: t,
                    recentSearchType: A.a.Event,
                    queryMetadata: { id: t, image: n, title: a, supportText: r },
                  }
                },
              },
            ]),
            n
          )
        })(E.a.PureComponent),
        se = ae.a.create(function (e) {
          return { root: { flexDirection: 'row', justifyContent: 'space-between' }, button: { alignSelf: 'center' } }
        }),
        le = ce,
        ue = n('j7Bv'),
        de = n('5mJL'),
        pe = n('t62R'),
        fe = n('EHV7')
      function he(e) {
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
            r = b()(e)
          if (t) {
            var a = b()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      var me = E.a.createElement(ee.a, null),
        be = R.a.e68b09b4,
        ye = (function (e) {
          p()(n, e)
          var t = he(n)
          function n() {
            return i()(this, n), t.apply(this, arguments)
          }
          return (
            s()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.description,
                    n = e.id,
                    r = e.name,
                    a = e.onRemove,
                    o = e.withNewTypeaheadUI
                  if (!n) return null
                  var i = o ? 'xxxLarge' : 'xLarge',
                    c = E.a.createElement(ue.a, { Icon: fe.a, color: 'primary', size: i, style: ge.searchIcon })
                  return E.a.createElement(
                    de.a,
                    { avatarCell: c, avatarSize: i, cellStyle: ge.bodyColumn },
                    E.a.createElement(
                      ne.a,
                      null,
                      E.a.createElement(pe.b, { numberOfLines: 1, weight: 'bold', withHashflags: !0 }, r),
                      E.a.createElement(pe.b, { color: 'gray700', numberOfLines: 1, withHashflags: !0 }, t),
                    ),
                    E.a.createElement(re.a, {
                      accessibilityLabel: be,
                      icon: me,
                      onPress: a,
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
                    r = e.name
                  return n
                    ? {
                        category: A.b.RecentSearch,
                        query: n,
                        recentSearchType: A.a.Topic,
                        queryMetadata: { id: n, name: r, description: t },
                      }
                    : null
                },
              },
            ]),
            n
          )
        })(E.a.Component),
        ge = ae.a.create(function (e) {
          return {
            bodyColumn: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
            searchIcon: { marginRight: e.spaces.space12 },
          }
        }),
        ve = function (e, t) {
          return z.e.select(e, t.id)
        },
        Se = function (e, t) {
          return Object(F.c)(e, t.id)
        },
        _e = Object(k.a)().propsFromState(function () {
          return { user: ve, userSpace: Se }
        }),
        Ee = n('v6aA'),
        we = n('IMA+')
      function Oe(e) {
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
            r = b()(e)
          if (t) {
            var a = b()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      var ke = E.a.createElement(ee.a, null),
        Ie = R.a.e68b09b4,
        Pe = R.a.fd06b02f,
        Ce = (function (e) {
          p()(n, e)
          var t = Oe(n)
          function n() {
            var e
            i()(this, n)
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              g()(u()(e), '_handleAvatarClick', function () {
                e.props.userSpace || e._handleClick()
              }),
              g()(u()(e), '_handleClick', function () {
                var t = e.props,
                  n = t.index,
                  r = t.onItemClick,
                  a = e.searchItemData
                a && r(a, n)
              }),
              e
            )
          }
          return (
            s()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.onRemove,
                    n = e.style,
                    r = e.user,
                    a = e.userSpace,
                    o = e.withNewTypeaheadUI,
                    i = this.context.featureSwitches
                  if (!r) return null
                  var c = a && i.isTrue('voice_rooms_recent_search_audiospace_ring_enabled') ? a : void 0
                  c && (c.accessibilityLabel = Pe({ screenName: r.screen_name }))
                  var s = E.a.createElement(re.a, {
                    accessibilityLabel: Ie,
                    icon: ke,
                    onPress: t,
                    size: 'small',
                    type: 'brandText',
                  })
                  return E.a.createElement(we.a, {
                    avatarSize: 'xLarge',
                    avatarUri: r.profile_image_url_https,
                    decoration: s,
                    displayMode: o ? 'ExperimentalUserTypeahead' : 'UserCompact',
                    isProtected: r.protected,
                    isVerified: r.verified,
                    name: r.name,
                    onAvatarClick: this._handleAvatarClick,
                    onCellClick: this._handleClick,
                    onScreenNameClick: this._handleClick,
                    presenceIndicator: c,
                    screenName: r.screen_name,
                    style: n,
                    userId: r.id_str,
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
            n
          )
        })(E.a.Component)
      g()(Ce, 'contextType', Ee.a)
      var Re = _e.forwardRef(Ce),
        xe = n('oQhu'),
        je = n('hiGS'),
        De = n('VwDm')
      function Te(e) {
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
            r = b()(e)
          if (t) {
            var a = b()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      var Le = E.a.createElement(ee.a, null),
        Be = E.a.createElement(je.a, null),
        Ae = Object(xe.a)(function (e) {
          return e === A.b.SavedSearch ? 'destructiveText' : 'brandText'
        }),
        Fe = Object(xe.a)(function (e) {
          return e === A.b.SavedSearch ? Be : Le
        }),
        ze = (function (e) {
          p()(n, e)
          var t = Te(n)
          function n() {
            var e
            i()(this, n)
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              g()(u()(e), '_getButtonType', function () {
                var t = e.props.category
                return Ae(t)
              }),
              g()(u()(e), '_getRemoveIcon', function () {
                var t = e.props.category
                return Fe(t)
              }),
              e
            )
          }
          return (
            s()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.onRemove,
                    n = e.query,
                    r = e.withNewTypeaheadUI ? 'xxxLarge' : 'xLarge',
                    a = E.a.createElement(ue.a, { Icon: De.a, color: 'neutral', size: r, style: Ue.searchIcon })
                  return E.a.createElement(
                    de.a,
                    { avatarCell: a, avatarSize: r, cellStyle: Ue.bodyColumn },
                    E.a.createElement(pe.b, { numberOfLines: 1, withHashflags: !0 }, n),
                    E.a.createElement(re.a, {
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
            n
          )
        })(E.a.Component),
        Ue = ae.a.create(function (e) {
          return {
            bodyColumn: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
            searchIcon: { marginRight: e.spaces.space12 },
          }
        }),
        Ne = ze,
        He = n('htQn')
      function Me(e) {
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
            r = b()(e)
          if (t) {
            var a = b()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      var We = (function (e) {
        p()(n, e)
        var t = Me(n)
        function n(e, r) {
          var a
          return (
            i()(this, n),
            (a = t.call(this, e, r)),
            g()(u()(a), '_renderSearchItem', function () {
              var e = a.props,
                t = e.index,
                n = e.item,
                r = e.onItemClick
              return n.keyword
                ? E.a.createElement(Ne, {
                    category: n.category,
                    onRemove: a._handleOnRemove,
                    query: n.keyword.query,
                    ref: a._handleItemRef,
                    withNewTypeaheadUI: a._withNewTypeaheadUI,
                  })
                : n.user
                ? E.a.createElement(Re, {
                    id: n.user.id || '',
                    index: t,
                    onItemClick: r,
                    onRemove: a._handleOnRemove,
                    ref: a._handleItemRef,
                    style: qe.itemPadding,
                    withNewTypeaheadUI: a._withNewTypeaheadUI,
                  })
                : n.topic
                ? E.a.createElement(ye, {
                    description: n.topic.description || '',
                    id: n.topic.id,
                    name: n.topic.name || '',
                    onRemove: a._handleOnRemove,
                    ref: a._handleItemRef,
                    withNewTypeaheadUI: a._withNewTypeaheadUI,
                  })
                : n.event
                ? E.a.createElement(le, {
                    id: n.event.id,
                    image: n.event.image || { url: '', height: 0, width: 0 },
                    onRemove: a._handleOnRemove,
                    ref: a._handleItemRef,
                    supportText: n.event.supportText || '',
                    title: n.event.title || '',
                    withNewTypeaheadUI: a._withNewTypeaheadUI,
                  })
                : null
            }),
            g()(u()(a), '_handleItemRef', function (e) {
              a._itemRef = e
            }),
            g()(u()(a), '_handleOnRemove', function (e) {
              var t = a.props,
                n = t.index,
                r = t.item
              ;(0, t.onRemoveQuery)(r, n), e.stopPropagation()
            }),
            g()(u()(a), '_handleOnClick', function () {
              var e = a.props,
                t = e.index,
                n = e.item,
                r = e.onItemClick
              n.user || (a.searchItemData && r(a.searchItemData, t))
            }),
            (a._withNewTypeaheadUI = a.context.featureSwitches.isTrue(
              'responsive_web_account_search_readability_enabled',
            )),
            a
          )
        }
        return (
          s()(n, [
            {
              key: 'render',
              value: function () {
                var e = this.props,
                  t = e.domId,
                  n = e.item,
                  r = e.testID
                return E.a.createElement(
                  w.a,
                  { viewType: 'search_item' },
                  E.a.createElement(
                    He.a,
                    {
                      accessibilityRole: 'option',
                      accessibilityState: { selected: !!t },
                      focusable: !0,
                      nativeID: t,
                      onClick: this._handleOnClick,
                      style: [qe.root, t && qe.focused, !(null != n && n.user) && qe.itemPadding],
                      testID: r,
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
      g()(We, 'contextType', Ee.a)
      var qe = ae.a.create(function (e) {
          return {
            root: { cursor: 'pointer' },
            itemPadding: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            focused: { backgroundColor: e.colors.gray0 },
          }
        }),
        Ve = We,
        Ke = n('4ZbN'),
        Ge = n('eb3s'),
        Qe = n('MXDK')
      function Xe(e, t) {
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
      function Ze(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Xe(Object(n), !0).forEach(function (t) {
                g()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Xe(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function Je(e) {
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
            r = b()(e)
          if (t) {
            var a = b()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      var Ye = R.a.ee295fbe,
        $e = { headline: R.a.f45c425f, text: R.a.caae4dd9, confirmButtonLabel: R.a.dbd5d40f },
        et = R.a.a8d68f61,
        tt = R.a.c6530778,
        nt = R.a.e047b8fa,
        rt = ['user', 'keyword'],
        at = (function (e) {
          p()(n, e)
          var t = Je(n)
          function n(e, r) {
            var a
            i()(this, n),
              (a = t.call(this, e, r)),
              g()(u()(a), '_withNewTypeaheadUI', !1),
              g()(u()(a), '_getRecentSearchItems', function () {
                var e = a.props,
                  t = e.failedRecentSearchUserIds,
                  n = e.recentSearches,
                  r = a.state.allowedRecentSearchItems,
                  o = n
                    .filter(function (e) {
                      var n = e.user
                      return !n || t.indexOf(n.id) < 0
                    })
                    .filter(function (e) {
                      return Object.keys(e).some(function (e) {
                        return r.includes(e)
                      })
                    })
                return o.length > 15 ? o.slice(0, 15) : o
              }),
              g()(u()(a), '_render', function () {
                var e = a.props,
                  t = e.domId,
                  n = e.savedSearches,
                  r = 0 === a._getNumOfSearchItems(),
                  o = a._getRecentSearchItems()
                return r
                  ? E.a.createElement(
                      ne.a,
                      { style: ot.emptyState, testID: Ke.a.typeaheadEmptySearch },
                      E.a.createElement(pe.b, { align: 'center', color: 'gray700' }, Ye),
                    )
                  : E.a.createElement(
                      ne.a,
                      { accessibilityRole: 'listbox', nativeID: t },
                      o.length > 0
                        ? E.a.createElement(
                            E.a.Fragment,
                            null,
                            E.a.createElement(
                              ne.a,
                              { style: ot.header, testID: Ke.a.typeaheadRecentSearchesHeader },
                              E.a.createElement(pe.b, { numberOfLines: 1, size: 'headline1', weight: 'bold' }, et),
                              E.a.createElement(
                                re.a,
                                { onPress: a._handleClearAllClick, size: 'xSmall', type: 'brandText' },
                                nt,
                              ),
                            ),
                            o.map(function (e, t) {
                              return a._renderRecentSearchItem(e, t)
                            }),
                          )
                        : null,
                      n.length > 0
                        ? E.a.createElement(
                            E.a.Fragment,
                            null,
                            E.a.createElement(
                              ne.a,
                              {
                                accessibilityHidden: !0,
                                style: [ot.header, ot.borderTop],
                                testID: Ke.a.typeaheadSavedSearchesHeader,
                              },
                              E.a.createElement(pe.b, { numberOfLines: 1, size: 'headline1', weight: 'bold' }, tt),
                            ),
                            a._renderSavedSearches(),
                          )
                        : null,
                    )
              }),
              g()(u()(a), '_renderRecentSearchItem', function (e, t) {
                var n = a.props.ariaDescendantId,
                  r = a.state.focusIndex === t
                return E.a.createElement(Ve, {
                  domId: r ? n : void 0,
                  index: t,
                  item: e,
                  key: a._chooseKeyType(e, t),
                  onItemClick: a._handleOnItemClick,
                  onRemoveQuery: a._handleRemoveQuery,
                  ref: r ? a._setFocusedItemRef : void 0,
                  testID: Ke.a.typeaheadRecentSearchesItem,
                })
              }),
              g()(u()(a), '_chooseKeyType', function (e, t) {
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
              g()(u()(a), '_renderSavedSearches', function () {
                var e = a.props,
                  t = e.ariaDescendantId,
                  n = e.savedSearches,
                  r = a.state.focusIndex,
                  o = a._getRecentSearchItems(),
                  i = S()(n)
                return (
                  i.reverse(),
                  E.a.createElement(
                    ne.a,
                    { testID: Ke.a.typeaheadSavedSearchesContainer },
                    i.map(function (e, n) {
                      var i = r === n + o.length
                      return E.a.createElement(Ve, {
                        domId: i ? t : void 0,
                        index: n,
                        item: e,
                        key: e.savedSearchId,
                        onItemClick: a._handleOnItemClick,
                        onRemoveQuery: a._handleRemoveQuery,
                        ref: i ? a._setFocusedItemRef : void 0,
                        testID: Ke.a.typeaheadSavedSearchesItem,
                      })
                    }),
                  )
                )
              }),
              g()(u()(a), '_getNumOfSearchItems', function () {
                var e = a.props.savedSearches,
                  t = a._getRecentSearchItems()
                return e.length + t.length
              }),
              g()(u()(a), '_handleUsersRetry', function () {
                a._fetchUsersDetailsIfNeeded()
              }),
              g()(u()(a), '_fetchUsersDetailsIfNeeded', function () {
                var e = a.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.fetchUsersIfNeeded,
                  r = e.fetchUsersPresenceIfNeeded,
                  o = e.invalidRecentSearchUserIds,
                  i = e.recentSearches,
                  c = a.context,
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
                  })(i, o)
                n(u).catch(t({})),
                  l && s.isTrue('voice_rooms_recent_search_audiospace_ring_enabled') && r(u).catch(t({}))
              }),
              g()(u()(a), '_handleRemoveQuery', function (e, t) {
                var n = a.props,
                  r = n.analytics,
                  o = n.removeQuery
                switch (e.category) {
                  case A.b.RecentSearch:
                    var i = { keyword: e.keyword, user: e.user, topic: e.topic, event: e.event }
                    o(i), a._resetFocus()
                    var c = T.a.forRecentSearchResult(i, t),
                      s = a._handleRemoveAction(e)
                    c && r.scribe({ action: s, data: { items: [c] } })
                    break
                  case A.b.SavedSearch:
                    a.setState({ shouldShowDeleteSavedSearchConfirmation: !0, savedSearchIdToDelete: e.savedSearchId })
                    break
                  default:
                    return
                }
              }),
              g()(u()(a), '_handleRemoveAction', function (e) {
                return e.user
                  ? 'clear_user'
                  : e.topic
                  ? 'clear_topic_interests'
                  : e.event
                  ? 'clear_event'
                  : 'clear_topic'
              }),
              g()(u()(a), '_handleClearAllClick', function () {
                a.setState({ shouldShowClearAllConfirmationSheet: !0 })
              }),
              g()(u()(a), '_handleOnClearAllConfirm', function () {
                var e = a.props,
                  t = e.analytics
                ;(0, e.clearAll)(), t.scribeAction('clear_all'), a.setState({ shouldShowClearAllConfirmationSheet: !1 })
              }),
              g()(u()(a), '_handleOnClearAllCancel', function () {
                a.setState({ shouldShowClearAllConfirmationSheet: !1 })
              }),
              g()(u()(a), '_handleOnDeleteSavedSearchConfirm', function () {
                var e = a.props,
                  t = e.analytics,
                  n = e.deleteSavedSearch,
                  r = e.savedSearches,
                  o = a.state.savedSearchIdToDelete,
                  i = r.findIndex(function (e) {
                    return e.savedSearchId === o
                  }),
                  c = r[i]
                if (o) {
                  n(o)
                  var s = c && T.a.forSavedSearchResult(c.keyword.query, i)
                  s && t.scribe({ element: 'saved_search', action: 'delete', data: { items: [s] } })
                }
                a.setState({ shouldShowDeleteSavedSearchConfirmation: !1, savedSearchIdToDelete: void 0 })
              }),
              g()(u()(a), '_handleOnDeleteSavedSearchCancel', function () {
                a.setState({ shouldShowDeleteSavedSearchConfirmation: !1, savedSearchIdToDelete: void 0 })
              }),
              g()(u()(a), '_handleOnItemClick', function (e, t) {
                var n = a.props,
                  r = n.onDismiss
                ;(0, n.onItemClick)(e, t), a._scribeClick(e, t), r && r()
              }),
              g()(u()(a), '_scribeRecentSearchImpression', function () {
                var e = a.props,
                  t = e.analytics,
                  n = e.recentSearches
                if (n && n.length) {
                  var r = Object(L.a)(
                    n.map(function (e, t) {
                      return T.a.forRecentSearchResult(e, t)
                    }),
                  )
                  t.scribe({ action: 'impression', data: { items: r } })
                }
              }),
              g()(u()(a), '_scribeSavedSearchImpression', function () {
                var e = a.props,
                  t = e.analytics,
                  n = e.savedSearches
                if (n && n.length) {
                  var r = Object(L.a)(
                    n.map(function (e, t) {
                      return T.a.forSavedSearchResult(e.keyword.query, t)
                    }),
                  )
                  t.scribe({ element: 'saved_search', action: 'impression', data: { items: r } })
                }
              }),
              g()(u()(a), '_scribeClick', function (e, t) {
                var n = a.props.analytics
                switch (e.category) {
                  case A.b.SavedSearch:
                    var r = T.a.forSavedSearchResult(e.query, t)
                    n.scribe({ element: 'typeahead', action: 'click', data: { targets: [r] } })
                    break
                  case A.b.RecentSearch:
                    var o
                    e.recentSearchType &&
                      (o =
                        e.recentSearchType === A.a.User
                          ? { user: { type: A.a.User, id: e.query } }
                          : e.recentSearchType === A.a.Event && e.queryMetadata && e.queryMetadata.title
                          ? { event: Ze(Ze({}, e.queryMetadata), {}, { type: A.a.Event, id: e.query }) }
                          : e.recentSearchType === A.a.Topic && e.queryMetadata && e.queryMetadata.name
                          ? { topic: Ze(Ze({}, e.queryMetadata), {}, { type: A.a.Topic, id: e.query }) }
                          : { keyword: { type: A.a.Keyword, query: e.query } })
                    var i = o && T.a.forRecentSearchResult(o, t)
                    i && n.scribe({ action: 'click', data: { targets: [i] } })
                }
              }),
              g()(u()(a), '_setFocusedItemRef', function (e) {
                ;(a._focusedItemRef = e),
                  e &&
                    a._shouldScrollToFocusedItem &&
                    (Object(Qe.c)(a._getScrollParent(), a._getFocusedItem()), (a._shouldScrollToFocusedItem = !1))
              }),
              g()(u()(a), 'hasFocusedItem', function () {
                return a._getNumOfSearchItems() > 0
              }),
              g()(u()(a), 'selectFocusedItem', function () {
                if (a.hasFocusedItem()) {
                  var e = a._focusedItemRef && a._focusedItemRef.searchItemData
                  e && a._handleOnItemClick(e, a.state.focusIndex)
                }
              }),
              g()(u()(a), '_setFocusIndex', function (e, t) {
                var n = a.props.onItemFocusChanged
                ;(a._shouldScrollToFocusedItem = t), a.setState({ focusIndex: e }), n && n()
              }),
              g()(u()(a), '_resetFocus', function () {
                a._setFocusIndex(-1)
              }),
              g()(u()(a), 'focusNext', function () {
                var e = a.state.focusIndex,
                  t = a._getNumOfSearchItems()
                if (0 !== t) {
                  var n = e + 1 >= t ? 0 : e + 1
                  a._setFocusIndex(n, !0)
                }
              }),
              g()(u()(a), 'focusPrevious', function () {
                var e = a.state.focusIndex,
                  t = a._getNumOfSearchItems()
                if (0 !== t) {
                  var n = e - 1 < 0 ? t - 1 : e - 1
                  a._setFocusIndex(n, !0)
                }
              })
            var o,
              c,
              s = a.context.featureSwitches
            return (
              (a.state = {
                focusIndex: 0,
                shouldShowClearAllConfirmationSheet: !1,
                shouldShowDeleteSavedSearchConfirmation: !1,
                allowedRecentSearchItems:
                  ((o = !0 === s.getValueWithoutScribeImpression('responsive_web_recent_searches_topics_enabled')),
                  (c = !0 === s.getValueWithoutScribeImpression('responsive_web_recent_searches_events_enabled')),
                  [].concat(rt, [o ? 'topic' : '', c ? 'event' : ''])),
              }),
              (a._withNewTypeaheadUI = a.context.featureSwitches.isTrue(
                'responsive_web_account_search_readability_enabled',
              )),
              a
            )
          }
          return (
            s()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.createLocalApiErrorHandler,
                    n = e.fetchRecentSearchesIfNeeded,
                    r = e.fetchSavedSearchesIfNeeded,
                    a = e.recentSearches,
                    o = e.savedSearches
                  n(),
                    r().catch(t({})),
                    this._fetchUsersDetailsIfNeeded(),
                    this._scribeRecentSearchImpression(),
                    this._scribeSavedSearchImpression(),
                    ((a && a.length) || (o && o.length)) && this._resetFocus()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t = this.props,
                    n = t.recentSearches,
                    r = t.savedSearches
                  e.recentSearches !== n &&
                    (this._fetchUsersDetailsIfNeeded(), this._resetFocus(), this._scribeRecentSearchImpression()),
                    e.savedSearches !== r && (this._resetFocus(), this._scribeSavedSearchImpression())
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    n = e.style,
                    r = this.state,
                    a = r.shouldShowClearAllConfirmationSheet,
                    o = r.shouldShowDeleteSavedSearchConfirmation
                  return E.a.createElement(
                    ne.a,
                    { style: n },
                    E.a.createElement(X.a, {
                      fetchStatus: t,
                      onRequestRetry: this._handleUsersRetry,
                      render: this._render,
                    }),
                    a
                      ? E.a.createElement(Ge.a, {
                          confirmButtonLabel: $e.confirmButtonLabel,
                          confirmButtonType: 'destructiveFilled',
                          headline: $e.headline,
                          onCancel: this._handleOnClearAllCancel,
                          onConfirm: this._handleOnClearAllConfirm,
                          testID: Ke.a.deleteRecentSearchesDialog,
                          text: $e.text,
                        })
                      : null,
                    o
                      ? E.a.createElement(Q.a, {
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
                    var e = Object(Qe.a)(J.a.findDOMNode(this))
                    this._scrollParent = e === window ? null : e
                  }
                  return this._scrollParent
                },
              },
              {
                key: '_getFocusedItem',
                value: function () {
                  var e = this._focusedItemRef && J.a.findDOMNode(this._focusedItemRef)
                  return e instanceof Element ? e : null
                },
              },
            ]),
            n
          )
        })(E.a.Component)
      g()(at, 'contextType', Ee.a)
      var ot = ae.a.create(function (e) {
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
        it = G.forwardRef(at),
        ct = 'SearchBox_Search_Input',
        st = n('TnY3'),
        lt = n('GZwR'),
        ut = n('4e/K')
      function dt(e, t) {
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
      function pt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? dt(Object(n), !0).forEach(function (t) {
                g()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : dt(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function ft(e) {
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
            r = b()(e)
          if (t) {
            var a = b()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      var ht = R.a.ib2e46ee,
        mt = R.a.hbc99b02,
        bt = /^(\w+)$/,
        yt = [lt.a.Events, lt.a.Users, lt.a.Topics],
        gt = function (e) {
          return '@' === e[0] ? e.substring(1) : e
        },
        vt = (function (e) {
          p()(n, e)
          var t = ft(n)
          function n(e, r) {
            var o, c
            return (
              i()(this, n),
              (c = t.call(this, e, r)),
              g()(u()(c), '_withNewTypeaheadUI', !1),
              g()(u()(c), '_reorderResults', function (e, t, n, r) {
                var a = Object(lt.f)(t, lt.b.User),
                  o = Object(lt.f)(t, lt.b.NoResult),
                  i = Object(lt.f)(n, lt.b.Topic),
                  s = Object(lt.f)(n, lt.b.NoResult),
                  l = Object(lt.f)(r, lt.b.Event),
                  u = [].concat(S()(Object(lt.e)(i)), S()(Object(lt.e)(a))),
                  d = (
                    't1' === c._rankedTypeaheadExperimentalValue
                      ? u.sort(function (e, t) {
                          return t.rank - e.rank
                        })
                      : 't3' === c._rankedTypeaheadExperimentalValue
                      ? (function (e) {
                          for (var t = S()(e), n = e.length - 1; n > 0; n--) {
                            var r = Math.floor(Math.random() * (n + 1)),
                              a = t[r],
                              o = t[n]
                            ;(t[n] = a), (t[r] = o)
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
              g()(u()(c), '_renderSearchBoxEmptyState', function (e) {
                return E.a.createElement(it, a()({}, e, { onItemClick: c._handleSearchItemClick }))
              }),
              g()(u()(c), '_handleSearchItemClick', function (e) {
                var t = e.category,
                  n = e.link,
                  r = e.query,
                  a = e.queryMetadata,
                  o = e.recentSearchType,
                  i = c.props.addQuery
                t === A.b.SavedSearch
                  ? c._submitQuery({ query: r, shouldAddToRecentSearch: !1, src: j.a.SavedSearchClick })
                  : o === A.a.Keyword
                  ? c._submitQuery({ query: r, shouldAddToRecentSearch: !0, src: j.a.RecentSearchClick })
                  : o === A.a.Event
                  ? (c._routeTransition({ pathname: '/i/events/'.concat(r) }),
                    a && a.title && i({ event: pt(pt({}, a), {}, { id: r, type: A.a.Event }) }))
                  : o === A.a.Topic
                  ? (c._routeTransition({ pathname: '/i/topics/'.concat(r) }),
                    a && a.name && i({ topic: pt(pt({}, a), {}, { id: r, type: A.a.Topic }) }))
                  : n && (c._routeTransition({ pathname: '/'.concat(n) }), i({ user: { id: r, type: A.a.User } }))
              }),
              g()(u()(c), '_handleSearchShortcut', function (e) {
                var t = c._inputRef
                t && (e && t.setQuery(e), t.focus())
              }),
              g()(u()(c), '_getUserExactMatch', function (e) {
                e.hasResults, e.isLoaded
                var t = e.query,
                  n = gt(t)
                if (n.match(bt))
                  return {
                    id: ''.concat(t, '_no_result_user'),
                    type: lt.b.NoResult,
                    data: { text: mt({ screenName: n }), type: 'user' },
                  }
              }),
              g()(u()(c), '_handleOnDismiss', function () {
                var e = c.props.history,
                  t = e.location,
                  n = t.state || {}
                if (n.searchFocused) {
                  var r = pt(pt({}, t), {}, { state: pt(pt({}, n), {}, { lockScroll: !1, searchFocused: !1 }) })
                  e.replace(r)
                }
              }),
              g()(u()(c), '_handleOnFocus', function () {
                var e = c.props,
                  t = e.analytics,
                  n = e.history,
                  r = n.location,
                  a = r.state || {}
                if (!a.searchFocused) {
                  var o = pt(pt({}, r), {}, { state: pt(pt({}, a), {}, { searchFocused: !0, lockScroll: !0 }) })
                  t.scribe({ action: 'focus_field' }), n.push(o)
                }
              }),
              g()(u()(c), '_handleChange', function (e) {
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
              g()(u()(c), '_handleTypeaheadSubmit', function () {
                var e = c.state,
                  t = e.items,
                  n = e.query,
                  r = c.props.analytics
                ;/^\s*$/.test(n) ||
                  (r.scribe({
                    action: 'search',
                    data: { items: T.a.forTypeaheadResults(t), search_details: { query: n } },
                  }),
                  c._submitQuery({ query: n, shouldAddToRecentSearch: !0 }))
              }),
              g()(u()(c), '_handleItemClick', function (e, t) {
                var n = c.props.addQuery,
                  r = c.state.query
                switch (e.type) {
                  case lt.b.User:
                    if (e.data.id_str) n({ user: { id: e.data.id_str, type: A.a.User } })
                    c._routeTransition({ pathname: '/'.concat(e.data.screen_name) })
                    break
                  case lt.b.Topic:
                  case lt.b.Hashtag:
                    c._submitQuery({ query: e.data.topic, shouldAddToRecentSearch: !0, src: j.a.TypeaheadClick })
                    break
                  case lt.b.Event:
                    e.data && e.data.url
                      ? c._routeTransition({ pathname: x.b.parseInternalUrl(e.data.url) })
                      : c._submitQuery({ query: e.data.topic, src: j.a.TypeaheadClick })
                    break
                  case lt.b.NoResult:
                    var a = e.data.type
                    'user' === a
                      ? c._routeTransition({ pathname: '/'.concat(gt(r)) })
                      : 'topic' === a &&
                        c._submitQuery({ query: r, shouldAddToRecentSearch: !0, src: j.a.TypeaheadClick })
                }
              }),
              g()(u()(c), '_handleItemsChanged', function (e) {
                c.setState({ items: e })
              }),
              g()(u()(c), '_routeTransition', function (e) {
                var t = e.params,
                  n = e.pathname,
                  r = e.query,
                  a = e.src,
                  o = c.props,
                  i = o.history,
                  s = o.location,
                  l = pt(
                    pt({}, s),
                    {},
                    {
                      pathname: n,
                      search: '',
                      query: t || (r ? { q: r, src: a } : {}),
                      state: pt(pt({}, s.state), {}, { searchFocused: !1, lockScroll: !1 }),
                    },
                  )
                i.replace(l)
              }),
              g()(u()(c), '_submitQuery', function (e) {
                var t = e.query,
                  n = e.shouldAddToRecentSearch,
                  r = void 0 !== n && n,
                  a = e.src,
                  o = void 0 === a ? j.a.Typed : a,
                  i = c.props,
                  s = i.addQuery,
                  l = i.mode,
                  u = i.onSubmit,
                  d = i.searchFilters,
                  p = i.searchRoute
                ;(u && u(t, o, c.state.lastSubmittedQuery === t), r) && s({ keyword: { query: t, type: A.a.Keyword } })
                var f = Object(A.g)({ query: t, querySrc: o, mode: l, searchFilters: d })
                c._routeTransition({ pathname: p, params: f, src: o }), c.setState({ lastSubmittedQuery: t })
              }),
              g()(u()(c), '_setInputRef', function (e) {
                c._inputRef = e
              }),
              (c.state = {
                query: e.initialValue,
                items: [],
                lastSubmittedQuery: Object(P.a)(null === (o = e.location.query) || void 0 === o ? void 0 : o.q),
              }),
              (c._withNewTypeaheadUI = c.context.featureSwitches.isTrue(
                'responsive_web_account_search_readability_enabled',
              )),
              c
            )
          }
          return (
            s()(n, [
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
                    n = e.isCompact,
                    r = e.isInSidebar,
                    a = e.isOnHomepage,
                    o = e.location,
                    i = e.placeholder,
                    c = this.state.query,
                    s = (o.state || {}).searchPrefill,
                    l = this.props.initialValue || s,
                    u = !!o.state && !!o.state.searchFocused,
                    d =
                      't1' === this._rankedTypeaheadExperimentalValue || 't3' === this._rankedTypeaheadExperimentalValue
                  return E.a.createElement(
                    w.a,
                    { viewType: 'search_field' },
                    E.a.createElement(
                      ne.a,
                      { style: St.root },
                      E.a.createElement(ut.default, {
                        filter: yt,
                        forceVdlDisable: t,
                        getTopicExactMatch: c ? lt.h : void 0,
                        getUserExactMatch: c ? this._getUserExactMatch : void 0,
                        initialValue: l,
                        inputStyle: St.input,
                        isCompact: n,
                        isInSidebar: r,
                        isOnHomepage: a,
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
                        source: lt.d.SearchBox,
                        testID: ct,
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
      g()(vt, 'defaultProps', {
        initialValue: '',
        isInSidebar: !1,
        placeholder: ht,
        searchRoute: '/search',
        forceVdlDisable: !0,
      }),
        g()(vt, 'contextType', Ee.a)
      var St = ae.a.create(function (e) {
        return {
          root: { alignItems: 'stretch', flexBasis: 0, flexDirection: 'row', flexGrow: 1 },
          input: { flexShrink: 1 },
        }
      })
      t.default = Object(st.a)(I(vt))
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
      var r = n('SrIh'),
        a = n('JbbX'),
        o = 1e3,
        i = Object.freeze({
          AcceptAllCookies: 'acceptAllCookies',
          RefuseNonEssentialCookies: 'refuseNonEssentialCookies',
          Invalid: 'invalid',
          NotSet: 'notSet',
        })
      function c(e) {
        var t = Object(a.a)(e)
        return t
          ? u(t)
            ? d(t)
              ? t[1]
                ? i.AcceptAllCookies
                : t[2]
                ? i.RefuseNonEssentialCookies
                : (Object(r.a)('Invalid consent signal state'), i.Invalid)
              : i.NotSet
            : i.Invalid
          : i.NotSet
      }
      function s(e) {
        Object(a.b)({ consent_version: 2, text_version: o, 1: !0 }, e)
      }
      function l(e) {
        Object(a.b)({ consent_version: 2, text_version: o, 2: !0 }, e)
      }
      function u(e) {
        return !(e[1] && e[2])
      }
      function d(e) {
        return e[1] || e[2]
      }
      function p(e) {
        var t = Object(a.a)(e)
        return !t || !u(t) || !d(t) || t.consent_version < 2 || t.text_version < o
      }
    },
    Chb3: function (e, t, n) {
      'use strict'
      var r = n('ddV6'),
        a = n.n(r),
        o = (n('jQ3i'), n('ERkP')),
        i = n.n(o),
        c = n('Hde2'),
        s = n('H1k/'),
        l = n('Ty5D'),
        u = n('496R')
      function d(e) {
        return !['/i/flow/login'].includes(e)
      }
      function p() {
        var e = Object(l.h)(),
          t = i.a.useState(function () {
            return d(e.pathname)
          }),
          n = a()(t, 2),
          r = n[0],
          o = n[1]
        return (
          i.a.useEffect(
            function () {
              o(d(e.pathname))
            },
            [o, e],
          ),
          r
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
        return oe
      })
      var r = n('ERkP'),
        a = n.n(r),
        o = n('v6aA'),
        i = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('KEM+')),
        c = n.n(i),
        s = n('ddV6'),
        l = n.n(s),
        u = n('AS3p'),
        d = n('KUGV'),
        p = n('Irs7'),
        f = n('MWbm'),
        h = n('t62R'),
        m = n('cHvH'),
        b = n('rHpw'),
        y = n('/yvb'),
        g = n('3XMw'),
        v = n.n(g)
      function S(e, t) {
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
      function _(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? S(Object(n), !0).forEach(function (t) {
                c()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : S(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var E = v.a.d8817e36,
        w = v.a.b9288ee6,
        O = v.a.i1390ec2,
        k = { page: 'cookie_compliance_banner' }
      function I() {
        var e = a.a.createElement(
          v.a.I18NFormatMessage,
          { $i18n: 'ad048ab9' },
          a.a.createElement(
            h.b,
            {
              color: 'buttonWhite',
              link: 'https://help.twitter.com/rules-and-policies/twitter-cookies',
              withUnderline: !0,
            },
            v.a.id7ef73f,
          ),
        )
        return a.a.createElement(C, { body: e, title: O })
      }
      function P(e) {
        var t = a.a.createElement(
          v.a.I18NFormatMessage,
          { $i18n: 'bc8736af' },
          a.a.createElement(
            h.b,
            { accessibilityRole: 'button', color: 'buttonWhite', onClick: e.onExpand, withUnderline: !0 },
            v.a.gfb2ba0f,
          ),
        )
        return a.a.createElement(C, { body: t, title: O })
      }
      function C(e) {
        return a.a.createElement(
          f.a,
          { style: x.cookieComplianceMessageWrap },
          a.a.createElement(h.b, { color: 'buttonWhite', size: 'headline2', weight: 'medium' }, e.title),
          a.a.createElement(
            h.b,
            { color: 'buttonWhite', size: 'subtext2', style: x.cookieComplianceExpandedDetails },
            e.body,
          ),
        )
      }
      var R = a.a.forwardRef(function (e, t) {
          var n = Object(p.b)()
          a.a.useEffect(
            function () {
              n.scribe(_(_({}, k), {}, { action: 'impression' }))
            },
            [n],
          )
          var r = (function () {
              var e = a.a.useState(!1),
                t = l()(e, 2),
                n = t[0],
                r = t[1],
                o = Object(p.b)()
              return {
                isExpanded: n,
                expand: function () {
                  o.scribe(_(_({}, k), {}, { action: 'click', element: 'expand_message' })), r(!0)
                },
              }
            })(),
            i = r.expand,
            c = r.isExpanded,
            s = (function () {
              var e = Object(p.b)(),
                t = a.a.useContext(o.a).featureSwitches,
                n = a.a.useState(function () {
                  return u.e(t) && !Object(d.a)()
                }),
                r = l()(n, 2),
                i = r[0],
                c = r[1]
              return {
                isBannerOpen: i,
                acceptAllCookies: function () {
                  e.scribe(_(_({}, k), {}, { action: 'click', element: 'accept_all' })), u.b(t), c(!1)
                },
                refuseNonEssentialCookies: function () {
                  e.scribe(_(_({}, k), {}, { action: 'click', element: 'refuse_non_essential' })), u.d(t), c(!1)
                },
              }
            })(),
            h = s.acceptAllCookies,
            g = s.isBannerOpen,
            v = s.refuseNonEssentialCookies
          return g
            ? a.a.createElement(m.a, null, function (e) {
                var n = e.windowWidth < b.a.theme.breakpoints.xLarge
                return a.a.createElement(
                  f.a,
                  { ref: t, style: [x.root, n && x.rootNarrow] },
                  c ? a.a.createElement(I, null) : a.a.createElement(P, { onExpand: i }),
                  a.a.createElement(
                    f.a,
                    { style: [x.buttonContainer, n && x.buttonContainerNarrow] },
                    a.a.createElement(
                      y.a,
                      {
                        dominantColor: 'buttonAlwaysBlack',
                        onPress: h,
                        size: 'medium',
                        style: [x.ctaButton, n && x.ctaButtonNarrow],
                        type: b.a.isDarkMode() ? 'onMediaDominantColorFilled' : 'onMediaWhiteFilled',
                      },
                      E,
                    ),
                    a.a.createElement(
                      y.a,
                      {
                        dominantColor: 'buttonAlwaysBlack',
                        onPress: v,
                        size: 'medium',
                        style: [x.ctaButton, n && x.ctaButtonNarrow],
                        type: b.a.isDarkMode() ? 'onMediaDominantColorFilled' : 'onMediaWhiteFilled',
                      },
                      w,
                    ),
                  ),
                )
              })
            : null
        }),
        x = b.a.create(function (e) {
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
        j = (n('OZaJ'), n('97Jx')),
        D = n.n(j),
        T = n('VrFO'),
        L = n.n(T),
        B = n('Y9Ll'),
        A = n.n(B),
        F = n('1Pcy'),
        z = n.n(F),
        U = n('5Yy7'),
        N = n.n(U),
        H = n('N+ot'),
        M = n.n(H),
        W = n('AuHH'),
        q = n.n(W),
        V = (n('hBvt'), n('RqPI')),
        K = n('rxPX'),
        G = Object(K.a)().propsFromState(function () {
          return { currentCountry: V.y }
        }),
        Q = n('cnVF'),
        X = n('mrHL'),
        Z =
          (n('vrRf'),
          function (e, t, n) {
            return e.indexOf(t.toLowerCase()) > -1 && '1' !== n
          })
      function J(e) {
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
            r = q()(e)
          if (t) {
            var a = q()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return M()(this, n)
        }
      }
      var Y = v.a.ia5e7487,
        $ = (function (e) {
          N()(n, e)
          var t = J(n)
          function n(e, r) {
            var o
            L()(this, n),
              (o = t.call(this, e, r)),
              c()(z()(o), 'state', { euWarningIsOpen: !1 }),
              c()(z()(o), '_renderMessage', function () {
                return a.a.createElement(
                  h.b,
                  { color: 'white', size: 'subtext2' },
                  a.a.createElement(
                    v.a.I18NFormatMessage,
                    { $i18n: 'i3c34582' },
                    a.a.createElement(
                      h.b,
                      {
                        color: 'white',
                        link: 'https://help.twitter.com/rules-and-policies/twitter-cookies',
                        style: ee.link,
                      },
                      v.a.fd0ff73b,
                    ),
                  ),
                )
              }),
              c()(z()(o), '_handleEUBannerClose', function () {
                !(function (e) {
                  Object(X.e)(Q.k, '1', { featureSwitches: e })
                })(o.context.featureSwitches),
                  o.setState({ euWarningIsOpen: !1 })
              })
            var i = o.props.currentCountry,
              s = o.context.featureSwitches,
              l = s.getArrayValue('responsive_web_eu_countries', []),
              u = Object(X.d)({ featureSwitches: s, cookieName: Q.k })
            return (o.state = { euWarningIsOpen: !!i && Z(l, i, u) }), o
          }
          return (
            A()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this
                  return this.state.euWarningIsOpen
                    ? a.a.createElement(m.a, null, function (t) {
                        var n = t.windowWidth < b.a.theme.breakpoints.medium
                        return a.a.createElement(
                          f.a,
                          { ref: e.props.innerRef, style: [ee.root, n && ee.rootNarrow] },
                          e._renderMessage(),
                          a.a.createElement(
                            y.a,
                            {
                              onPress: e._handleEUBannerClose,
                              size: 'medium',
                              style: [ee.closeButton, n && ee.closeButtonNarrow],
                              type: 'onMediaOutlined',
                            },
                            Y,
                          ),
                        )
                      })
                    : null
                },
              },
            ]),
            n
          )
        })(a.a.Component)
      c()($, 'contextType', o.a)
      var ee = b.a.create(function (e) {
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
        te = a.a.forwardRef(function (e, t) {
          return a.a.createElement($, D()({}, e, { innerRef: t }))
        }),
        ne = G.forwardRef(te),
        re = n('+d3d')
      function ae(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
          n = a.a.useCallback(
            Object(re.a)(function (t) {
              if (e)
                if (t) {
                  var n = t.getBoundingClientRect()
                  n && e(n)
                } else e(null)
            }, t),
            [e, t],
          )
        return a.a.useCallback(
          function (t) {
            if ('function' == typeof e) {
              var r,
                a = n.bind(null, t)
              return (
                a(),
                window.addEventListener('resize', a),
                t && (r = new ResizeObserver(a)).observe(t),
                function () {
                  window.removeEventListener('resize', a), r && r.disconnect(), n.cancel()
                }
              )
            }
          },
          [e, n],
        )
      }
      function oe(e) {
        var t,
          n = a.a.useContext(o.a).featureSwitches,
          r =
            ((t = e.onHeightChange),
            ae(
              a.a.useMemo(
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
          ? a.a.createElement(R, { ref: r })
          : a.a.createElement(ne, { ref: r })
      }
    },
    JkIr: function (e, t, n) {
      'use strict'
      t.a = { signupButton: 'signupButton', loginButton: 'loginButton', logInSignUpFooter: 'logInSignUpFooter' }
    },
    NeAX: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'default', function () {
          return C
        }),
        n.d(t, 'selectPreferences', function () {
          return D
        }),
        n.d(t, 'selectData', function () {
          return T
        }),
        n.d(t, 'selectUserPreferences', function () {
          return L
        }),
        n.d(t, 'selectPreferencesFetchStatus', function () {
          return B
        }),
        n.d(t, 'selectFetchDataStatus', function () {
          return A
        }),
        n.d(t, 'selectAge', function () {
          return F
        }),
        n.d(t, 'selectBirthdate', function () {
          return z
        }),
        n.d(t, 'selectHasExactAge', function () {
          return U
        }),
        n.d(t, 'selectGender', function () {
          return N
        }),
        n.d(t, 'selectLanguage', function () {
          return H
        }),
        n.d(t, 'selectSignupDetails', function () {
          return M
        }),
        n.d(t, 'selectTwitterInterests', function () {
          return W
        }),
        n.d(t, 'selectFetchTwitterInterestsStatus', function () {
          return q
        }),
        n.d(t, 'selectPartnerInterests', function () {
          return V
        }),
        n.d(t, 'selectFetchPartnerInterestsStatus', function () {
          return K
        }),
        n.d(t, 'clearLocations', function () {
          return G
        }),
        n.d(t, 'updateGender', function () {
          return Q
        }),
        n.d(t, 'updateLanguage', function () {
          return X
        }),
        n.d(t, 'updateInterest', function () {
          return Z
        }),
        n.d(t, 'fetchPreferencesIfNeeded', function () {
          return J
        }),
        n.d(t, 'updatePreferences', function () {
          return $
        }),
        n.d(t, 'updateSettings', function () {
          return ee
        }),
        n.d(t, 'fetchDataIfNeeded', function () {
          return ne
        }),
        n.d(t, 'createAudienceDownload', function () {
          return ae
        }),
        n.d(t, 'createDataDownload', function () {
          return oe
        }),
        n.d(t, 'fetchTwitterInterestsIfNeeded', function () {
          return ie
        }),
        n.d(t, 'fetchPartnerInterestsIfNeeded', function () {
          return se
        }),
        n.d(t, 'syncSettings', function () {
          return de
        })
      n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('ddV6'),
        a = n.n(r),
        o = n('KEM+'),
        i = n.n(o),
        c = (n('KOtZ'), n('+KXO'), n('JtPf'), n('7x/C'), n('vrRf'), n('Ee2X'), n('RqPI')),
        s = n('P1r1'),
        l = n('cmwl'),
        u = n('hqKg'),
        d = n('kGix'),
        p = n('YeIG'),
        f = n('Ssj5'),
        h = n('oEOe')
      function m(e, t) {
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
      function b(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? m(Object(n), !0).forEach(function (t) {
                i()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : m(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var y,
        g = 'personalization',
        v = 'rweb/'.concat(g),
        S = Object(h.a)(v, 'FETCH_PREFERENCES'),
        _ = Object(h.a)(v, 'UPDATE_PREFERENCES'),
        E = Object(h.a)(v, 'FETCH_DATA'),
        w = Object(h.a)(v, 'UPDATE_COOKIES'),
        O = Object(h.a)(v, 'FETCH_TWITTER_INTERESTS'),
        k = Object(h.a)(v, 'FETCH_PARTNER_INTERESTS'),
        I = ((y = 'CLEAR_LOCATIONS'), ''.concat(v, '/').concat(y)),
        P = {
          preferences: { data: {}, fetchStatus: d.a.NONE },
          data: { data: {}, fetchStatus: d.a.NONE },
          twitter_interests: { data: {}, fetchStatus: d.a.NONE },
          partner_interests: { data: {}, fetchStatus: d.a.NONE },
        }
      function C() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : P,
          t = arguments.length > 1 ? arguments[1] : void 0
        switch (t.type) {
          case S.REQUEST:
            return b(b({}, e), {}, { preferences: b(b({}, e.preferences), {}, { fetchStatus: d.a.LOADING }) })
          case S.SUCCESS:
            return b(
              b({}, e),
              {},
              { preferences: { data: b(b({}, e.preferences.data), t.payload), error: null, fetchStatus: d.a.LOADED } },
            )
          case S.FAILURE:
            return b(
              b({}, e),
              {},
              { preferences: b(b({}, e.preferences), {}, { error: t.payload, fetchStatus: d.a.FAILED }) },
            )
          case _.REQUEST:
            return b(
              b({}, e),
              {},
              { preferences: { data: b(b({}, e.preferences.data), t.payload), error: null, fetchStatus: d.a.LOADED } },
            )
          case E.REQUEST:
            return b(b({}, e), {}, { data: b(b({}, e.data), {}, { fetchStatus: d.a.LOADING }) })
          case E.SUCCESS:
            return b(
              b({}, e),
              {},
              { data: { data: b(b({}, e.data.data), t.payload), error: null, fetchStatus: d.a.LOADED } },
            )
          case E.FAILURE:
            return b(b({}, e), {}, { data: b(b({}, e.data), {}, { error: t.payload, fetchStatus: d.a.FAILED }) })
          case O.REQUEST:
            return b(
              b({}, e),
              {},
              { twitter_interests: b(b({}, e.twitter_interests), {}, { fetchStatus: d.a.LOADING }) },
            )
          case O.SUCCESS:
            return b(
              b({}, e),
              {},
              {
                twitter_interests: {
                  data: b(b({}, e.twitter_interests.data), t.payload),
                  error: null,
                  fetchStatus: d.a.LOADED,
                },
              },
            )
          case O.FAILURE:
            return b(
              b({}, e),
              {},
              { twitter_interests: b(b({}, e.twitter_interests), {}, { error: t.payload, fetchStatus: d.a.FAILED }) },
            )
          case k.REQUEST:
            return b(
              b({}, e),
              {},
              { partner_interests: b(b({}, e.partner_interests), {}, { fetchStatus: d.a.LOADING }) },
            )
          case k.SUCCESS:
            return b(
              b({}, e),
              {},
              {
                partner_interests: {
                  data: b(b({}, e.partner_interests.data), t.payload),
                  error: null,
                  fetchStatus: d.a.LOADED,
                },
              },
            )
          case k.FAILURE:
            return b(
              b({}, e),
              {},
              { partner_interests: b(b({}, e.partner_interests), {}, { error: t.payload, fetchStatus: d.a.FAILED }) },
            )
          case I:
            return b(
              b({}, e),
              {},
              { data: b(b({}, e.data), {}, { data: b(b({}, e.data.data), {}, { location_history: [] }) }) },
            )
          default:
            return e
        }
      }
      f.a.register(i()({}, g, C))
      var R = {
          allowCookieUse: 'use_cookie_personalization',
          allowDeviceAccess: 'allow_logged_out_device_personalization',
          allowLocationHistoryUse: 'allow_location_history_personalization',
          allowPartnerships: 'allow_sharing_data_for_third_party_personalization',
          allowPersonalization: 'allow_ads_personalization',
        },
        x = {
          allowCookieUse: 'use_cookie_personalization',
          allowDeviceAccess: 'link_logged_out_devices',
          allowPartnerships: 'share_data_with_third_party',
          allowPersonalization: 'allow_ads_personalization',
        },
        j = { use_age_for_personalization: 'age_preferences', use_gender_for_personalization: 'gender_preferences' },
        D = function (e) {
          return e.personalization.preferences.data
        },
        T = function (e) {
          return e.personalization.data.data
        },
        L = Object(u.createSelector)(c.m, D, s.g, function (e, t, n) {
          var r = e ? [R, n] : [x, t],
            o = a()(r, 2),
            i = o[0],
            c = o[1]
          return Object.keys(i).reduce(function (e, t) {
            return (e[t] = c[i[t]]), e
          }, {})
        }),
        B = function (e) {
          var t = D(e)
          return Object(p.a)(t) ? e.personalization.preferences.fetchStatus : d.a.LOADED
        },
        A = function (e) {
          return e.personalization.data.fetchStatus
        },
        F = function (e) {
          return e.personalization.data.data.age ? e.personalization.data.data.age : []
        },
        z = function (e) {
          return e.personalization.data.data.birth_date ? e.personalization.data.data.birth_date : ''
        },
        U = function (e) {
          return !!e.personalization.data.data.has_exact_age
        },
        N = function (e) {
          var t = T(e),
            n = D(e),
            r = n.gender_preferences && n.gender_preferences.gender_override
          return r && r.type ? r : { type: t.gender, value: t.gender }
        },
        H = function (e) {
          return e.personalization.data.data.languages ? e.personalization.data.data.languages : []
        },
        M = function (e) {
          return e.personalization.data.data.sign_up_details ? e.personalization.data.data.sign_up_details : {}
        },
        W = function (e) {
          return e.personalization.twitter_interests.data
        },
        q = function (e) {
          return e.personalization.twitter_interests.fetchStatus
        },
        V = function (e) {
          return e.personalization.partner_interests.data
        },
        K = function (e) {
          return e.personalization.partner_interests.fetchStatus
        },
        G = function () {
          return function (e, t) {
            var n = t(),
              r = D(n),
              a = Date.now(),
              o = { location_preferences: b(b({}, r.location_preferences), {}, { override_times: [a] }) }
            return e($(o)).then(function () {
              return e({ type: I })
            })
          }
        },
        Q = function (e) {
          return function (t, n) {
            var r = n(),
              a = { gender_preferences: b(b({}, D(r).gender_preferences), {}, { gender_override: e }) }
            return t($(a))
          }
        },
        X = function (e, t) {
          return function (n, r) {
            if (Object(p.a)(e)) return Promise.resolve()
            var a = r(),
              o = D(a),
              i = o.language_preferences.disabled_languages || [],
              c = i.indexOf(e),
              s = c > -1
            if (s && t) i.splice(c, 1)
            else {
              if (s || t) return Promise.resolve()
              i.push(e)
            }
            var l = { language_preferences: b(b({}, o.language_preferences), {}, { disabled_languages: i }) }
            return n($(l))
          }
        },
        Z = function (e, t, n) {
          return function (r, a) {
            if (Object(p.a)(e) || -1 === ['ads', 'partner'].indexOf(n)) return Promise.resolve()
            var o = 'partner' === n,
              c = a(),
              s = D(c).interest_preferences,
              l = o ? 'disabled_partner_interests' : 'disabled_interests',
              u = s[l],
              d = u.indexOf(e),
              f = d > -1
            if (f && t) u.splice(d, 1)
            else {
              if (f || t) return Promise.resolve()
              u.push(e)
            }
            var h = {
              interest_preferences: i()(
                { disabled_interests: s.disabled_interests, disabled_partner_interests: s.disabled_partner_interests },
                l,
                u,
              ),
            }
            return r($(h))
          }
        },
        J = function () {
          return function (e, t, n) {
            n.api
            var r = t().personalization.preferences
            return r.fetchStatus !== d.a.LOADING && r.fetchStatus !== d.a.LOADED ? e(Y()) : Promise.resolve()
          }
        },
        Y = function () {
          return function (e, t, n) {
            var r = n.api
            return Object(h.b)(e, { request: r.Personalization.fetchPreferences })({
              actionTypes: S,
              context: 'FETCH_PERSONALIZATION_PREFERENCES',
            })
          }
        },
        $ = function (e) {
          return function (t, n, r) {
            var a = r.api
            return Object(p.a)(e)
              ? Promise.resolve()
              : Object(h.c)(t, { params: { preferences: e }, request: a.Personalization.updatePreferences })({
                  actionTypes: _,
                  context: 'ACTION_UPDATE_PERSONALIZATION_PREFERENCES',
                  payload: e,
                })
          }
        },
        ee = function (e) {
          return function (t, n, r) {
            var a = r.api,
              o = r.featureSwitches
            if (Object(p.a)(e)) return Promise.resolve()
            var u = n(),
              d = c.m(u),
              f = d ? R : x,
              h = Object.keys(e).reduce(function (t, n) {
                n in f && (t[f[n]] = e[n])
                n in j && (t[j[n]] = i()({}, n, e[n]))
                return t
              }, {})
            return d
              ? t(s.L(h)).then(function () {
                  Object(l.a)().then(function (e) {
                    e.updateBranchTracking(o, a)
                  }),
                    t(ue(h))
                })
              : te(o, t, h, a)
          }
        },
        te = function (e, t, n, r) {
          return Object(h.c)(t, { params: { preferences: n }, request: r.Personalization.updatePreferences })({
            actionTypes: _,
            context: 'ACTION_UPDATE_PERSONALIZATION_PREFERENCES',
            payload: n,
          }).then(function () {
            Object(l.a)().then(function (t) {
              t.updateBranchTracking(e, r)
            })
          })
        },
        ne = function () {
          return function (e, t, n) {
            n.api
            var r = t().personalization.data
            return r.fetchStatus !== d.a.LOADING && r.fetchStatus !== d.a.LOADED ? e(re()) : Promise.resolve()
          }
        },
        re = function () {
          return function (e, t, n) {
            var r = n.api
            return Object(h.b)(e, { request: r.Personalization.fetchData })({
              actionTypes: E,
              context: 'FETCH_PERSONALIZATION_DATA',
            })
          }
        },
        ae = function () {
          return function (e, t, n) {
            var r = n.api
            return Object(h.d)(e, { request: r.Personalization.createAudienceDownload })('CREATE_AUDIENCE_DOWNLOAD')
          }
        },
        oe = function () {
          return function (e, t, n) {
            var r = n.api
            return Object(h.d)(e, { request: r.Personalization.createDataDownload })('CREATE_DATA_DOWNLOAD')
          }
        },
        ie = function () {
          return function (e, t, n) {
            n.api
            var r = t().personalization.twitter_interests
            return r.fetchStatus !== d.a.LOADING && r.fetchStatus !== d.a.LOADED ? e(ce()) : Promise.resolve()
          }
        },
        ce = function () {
          return function (e, t, n) {
            var r = n.api
            return Object(h.b)(e, { request: r.Personalization.fetchTwitterInterests })({
              actionTypes: O,
              context: 'FETCH_PERSONALIZATION_TWITTER_INTERESTS',
            })
          }
        },
        se = function () {
          return function (e, t, n) {
            n.api
            var r = t().personalization.partner_interests
            return r.fetchStatus !== d.a.LOADING && r.fetchStatus !== d.a.LOADED ? e(le()) : Promise.resolve()
          }
        },
        le = function () {
          return function (e, t, n) {
            var r = n.api
            return Object(h.b)(e, { request: r.Personalization.fetchPartnerInterests })({
              actionTypes: k,
              context: 'FETCH_PERSONALIZATION_PARTNER_INTERESTS',
            })
          }
        },
        ue = function (e) {
          return function (t, n, r) {
            var a = r.api,
              o = {}
            return (
              e.hasOwnProperty('use_cookie_personalization') &&
                (o.use_cookie_personalization = e.use_cookie_personalization),
              e.hasOwnProperty('allow_ads_personalization') &&
                (o.allow_ads_personalization = e.allow_ads_personalization),
              Object(p.a)(o)
                ? Promise.resolve()
                : Object(h.b)(t, { params: o, request: a.Personalization.updateCookies })({
                    actionTypes: w,
                    context: 'APP_UPDATE_PERSONALIZATION_COOKIES',
                    params: o,
                  })
            )
          }
        },
        de = function () {
          return function (e, t, n) {
            var r = n.api
            return Object(h.d)(e, { request: r.Personalization.syncSettings })('SYNC_SETTINGS')
          }
        }
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
    UpKB: function (e, t, n) {
      'use strict'
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
        f = n('AuHH'),
        h = n.n(f),
        m = n('KEM+'),
        b = n.n(m),
        y = (n('2G9S'), n('ho0z'), n('ERkP')),
        g = n.n(y),
        v = n('/yvb'),
        S = n('hUVV'),
        _ = n('3XMw'),
        E = n.n(_),
        w = n('iKTg'),
        O = n('TaB8'),
        k = n('1zbE'),
        I = n('Ukpf'),
        P = n('cnVF'),
        C = n('TnY3'),
        R = n('0+0m'),
        x = n('v6aA'),
        j = n('2qJZ')
      function D(e, t) {
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
      function T(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? D(Object(n), !0).forEach(function (t) {
                b()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : D(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
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
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var B = E.a.ib65b1c6,
        A = E.a.f55cebb7,
        F = E.a.g61ed8a4,
        z = { clientId: R.a, scope: 'name email', usePopup: !0 },
        U = (function (e) {
          u()(n, e)
          var t = L(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              b()(s()(e), 'state', { isScriptLoaded: !1 }),
              b()(
                s()(e),
                '_is3rdPartyIntegrationDisabled',
                Object(O.a)('responsive_web_3rd_party_category_sign_in_with_apple', e.context.featureSwitches),
              ),
              b()(s()(e), '_initAppleIDAuth', function () {
                var t = window.AppleID,
                  n = e.props.fetchSsoInitToken,
                  r = Object(j.c)(e.context.featureSwitches) ? 'https://'.concat(j.b) : 'https://'.concat(j.a)
                t &&
                  n(P.A.Apple).then(function (e) {
                    var n = e.state
                    t.auth.init(T(T({}, z), {}, { redirectURI: r, state: n }))
                  })
              }),
              b()(s()(e), '_handleOnPress', function () {
                var t = window.AppleID,
                  n = e.props,
                  r = n.analytics,
                  a = n.buttonState,
                  o = n.history,
                  i = n.personalizationSettings,
                  c = n.shouldPropagateP13nSettings,
                  s = n.ssoInitTokens,
                  l = i || {},
                  u = l.allowCookieUse,
                  d = l.allowDeviceAccess,
                  p = l.allowPartnerships,
                  f = l.allowPersonalization
                r.scribe({ component: 'apple_sign_in', element: a, action: 'click' }),
                  t.auth
                    .signIn()
                    .then(function (e) {
                      r.scribe({ component: 'apple_sign_in', element: a, action: 'success' })
                      var t = e.user && e.user.name && e.user.name.firstName && e.user.name.lastName
                      o.push({
                        pathname: '/i/flow/single_sign_on',
                        state: {
                          input: {
                            cookie_personalization_settings: c && {
                              allow_cookie_use: !!u,
                              allow_device_personalization: !!d,
                              allow_partnerships: !!p,
                              allow_ads_personalization: !!f,
                            },
                            requested_variant: JSON.stringify({
                              display_name: t && ''.concat(e.user.name.firstName, ' ').concat(e.user.name.lastName),
                              id_token: e.authorization.id_token,
                              provider: P.A.Apple,
                              state: s[P.A.Apple],
                            }),
                          },
                        },
                      })
                    })
                    .catch(function (t) {
                      var n = e.props.addToast
                      t.error !== R.f
                        ? (r.scribe({ component: 'apple_sign_in', element: a, action: 'failure' }), n({ text: F }))
                        : r.scribe({ component: 'apple_sign_in', element: 'auth', action: 'user_closed_popup' })
                    })
              }),
              e
            )
          }
          return (
            i()(n, [
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
                    r = e.style,
                    a = this.state.isScriptLoaded,
                    o = n === k.a.SignUp ? B : A
                  return this._is3rdPartyIntegrationDisabled
                    ? null
                    : g.a.createElement(v.a, {
                        backgroundColor: 'white',
                        borderColor: 'gray200',
                        children: o,
                        color: 'gray1100',
                        disabled: !a,
                        icon: g.a.createElement(w.a, null),
                        onPress: this._handleOnPress,
                        size: t,
                        style: r,
                      })
                },
              },
            ]),
            n
          )
        })(g.a.PureComponent)
      b()(U, 'contextType', x.a),
        b()(U, 'defaultProps', { buttonSize: 'xLarge', buttonState: 'signup' }),
        (t.a = Object(C.a)(Object(S.a)(U)))
    },
    XJCT: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return v
      }),
        n.d(t, 'b', function () {
          return P
        })
      var r = n('97Jx'),
        a = n.n(r),
        o = n('m3Bd'),
        i = n.n(o),
        c = n('ERkP'),
        s = n.n(c),
        l = n('t62R'),
        u = n('3XMw'),
        d = n.n(u),
        p = (n('yH/f'), n('ho0z'), n('p+r5')),
        f = Object.freeze({ password: 'password', username: 'username_or_email' }),
        h = function (e) {
          var t = e.name,
            n = i()(e, ['name'])
          return s.a.createElement(
            p.a,
            a()({ autoCapitalize: 'none', autoCorrect: !1, name: 'session['.concat(t, ']'), spellCheck: 'false' }, n),
          )
        },
        m = d.a.d1091f50,
        b = s.a.createElement(
          l.b,
          { link: { external: !0, pathname: 'https://twitter.com/account/begin_password_reset', openInSameFrame: !0 } },
          m,
        ),
        y = d.a.dec3c9b8,
        g = function (e) {
          var t = e.helperText,
            n = e.label,
            r = e.withForgotPasswordLink,
            o = i()(e, ['helperText', 'label', 'withForgotPasswordLink'])
          return s.a.createElement(
            h,
            a()({}, o, { helperText: r ? b : t, label: n || y, name: f.password, type: 'password' }),
          )
        }
      g.defaultProps = { autoFocus: !1, withForgotPasswordLink: !1 }
      var v = g,
        S = n('v6aA'),
        _ = function (e) {
          return e.isTrue('responsive_web_login_input_type_email_enabled') ? 'email' : void 0
        },
        E = d.a.e1ec8c17,
        w = d.a.d0a750f2,
        O = d.a.e2dd29b5,
        k = d.a.jb4eb245,
        I = function (e) {
          var t = e.autoFocus,
            n = e.label,
            r = e.withEmailDisabled,
            o = e.withPhoneDisabled,
            c = e.withUsernameDisabled,
            l = i()(e, ['autoFocus', 'label', 'withEmailDisabled', 'withPhoneDisabled', 'withUsernameDisabled']),
            u = s.a.useContext(S.a).featureSwitches,
            d = E
          return (
            c ? (d = w) : o ? (d = k) : r && (d = O),
            s.a.createElement(h, a()({}, l, { autoFocus: t, label: n || d, name: f.username, type: _(u) }))
          )
        }
      I.defaultProps = { autoFocus: !0, withUsernameDisabled: !1, withPhoneDisabled: !1, withEmailDisabled: !1 }
      var P = I
    },
    bCEw: function (e, t, n) {
      'use strict'
      var r = n('IGGJ')(n('K1iM')),
        a = n('23An'),
        o = n('Ud88'),
        i = n('aQQo'),
        c = i.loadQuery,
        s = i.useTrackLoadQueryInRender,
        l = n('ERkP'),
        u = l.useCallback,
        d = l.useEffect,
        p = l.useRef,
        f = l.useState,
        h = n('K1lQ').getRequest,
        m = { kind: 'NullQueryReference' }
      function b(e) {
        return 'PreloadableConcreteRequest' === e.kind
          ? void 0 !== e.params.metadata.live
          : void 0 !== h(e).params.metadata.live
      }
      e.exports = function (e, t) {
        var n = null != t ? t : m,
          i = o()
        s()
        var l = a(),
          h = p(new Set([n])),
          y = f(function () {
            return n
          }),
          g = y[0],
          v = y[1],
          S = f(function () {
            return n
          }),
          _ = S[0],
          E = S[1]
        n !== _ && (h.current.add(n), E(n), v(n))
        var w = u(
            function () {
              l.current && (h.current.add(m), v(m))
            },
            [l],
          ),
          O = u(
            function (t, n) {
              var r =
                null != n && n.hasOwnProperty('__environment')
                  ? {
                      fetchPolicy: n.fetchPolicy,
                      networkCacheConfig: n.networkCacheConfig,
                      __nameForWarning: n.__nameForWarning,
                    }
                  : n
              if (l.current) {
                var a,
                  o = c(null !== (a = null == n ? void 0 : n.__environment) && void 0 !== a ? a : i, e, t, r)
                h.current.add(o), v(o)
              }
            },
            [i, e, v, l],
          ),
          k = p(!1)
        return (
          d(function () {
            return function () {
              k.current = !0
            }
          }, []),
          d(
            function () {
              if (!0 === k.current)
                return (
                  (k.current = !1),
                  void (
                    'NullQueryReference' !== g.kind &&
                    O(g.variables, { fetchPolicy: g.fetchPolicy, networkCacheConfig: g.networkCacheConfig })
                  )
                )
              var t = h.current
              if (l.current) {
                var n,
                  a = (0, r.default)(t)
                try {
                  for (a.s(); !(n = a.n()).done; ) {
                    var o = n.value
                    if (o === g) break
                    t.delete(o),
                      'NullQueryReference' !== o.kind &&
                        (b(e) ? o.dispose && o.dispose() : o.releaseQuery && o.releaseQuery())
                  }
                } catch (i) {
                  a.e(i)
                } finally {
                  a.f()
                }
              }
            },
            [g, l, O, e],
          ),
          d(
            function () {
              return function () {
                var t,
                  n = (0, r.default)(h.current)
                try {
                  for (n.s(); !(t = n.n()).done; ) {
                    var a = t.value
                    'NullQueryReference' !== a.kind &&
                      (b(e) ? a.dispose && a.dispose() : a.releaseQuery && a.releaseQuery())
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
          ['NullQueryReference' === g.kind ? null : g, O, w]
        )
      }
    },
    bojF: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CookieComplianceBannerPadder', function () {
          return Oe
        }),
        n.d(t, 'LoggedOutHome', function () {
          return ke
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
        f = n('AuHH'),
        h = n.n(f),
        m = n('KEM+'),
        b = n.n(m),
        y = n('ddV6'),
        g = n.n(y),
        v = (n('z84I'), n('ERkP')),
        S = n.n(v),
        _ = n('UpKB'),
        E = n('zI2C'),
        w = n('Hde2'),
        O = n('Chb3'),
        k = n('zh9S'),
        I = n('RqPI'),
        P = n('rxPX'),
        C = Object(P.a)()
          .propsFromState(function () {
            return { userLanguage: I.o }
          })
          .propsFromActions(function () {
            return { scribeAction: k.c }
          }),
        R = n('H1k/'),
        x = n('SrtL'),
        j = n('FQwk'),
        D = n('0+0m'),
        T = n('kG2l'),
        L = n('muX9'),
        B = n('6oVL'),
        A = n('rJoH'),
        F = n('yoO3'),
        z = n('Es6L'),
        U = n('JkIr'),
        N = n('MWbm'),
        H = n('t62R'),
        M = n('/yvb'),
        W = n('0yYu'),
        q = n('cHvH'),
        V = n('TIdA'),
        K = n('A91F'),
        G = n('rHpw'),
        Q = n('pxuL'),
        X = n('5P4+'),
        Z = n('7JQg'),
        J = n('AS3p'),
        Y = n('3XMw'),
        $ = n.n(Y),
        ee = n('VwDm'),
        te = n('wz7L'),
        ne = n('dFWS'),
        re = n('lUZE'),
        ae = n('3rEN'),
        oe = n('1zbE'),
        ie = n('XJCT')
      function ce(e, t) {
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
      function se(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ce(Object(n), !0).forEach(function (t) {
                b()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ce(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function le(e) {
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
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var ue = [
          { text: $.a.a62c9c33, Icon: ee.a },
          { text: $.a.cf39fca2, Icon: te.a },
          { text: $.a.j86184fd, Icon: ne.a },
        ],
        de = $.a.d1091f50,
        pe = $.a.d9e109ae,
        fe = $.a.f86f23b5,
        he = $.a.eba1b197,
        me = $.a.a565833d,
        be = $.a.aa95ddc0,
        ye = $.a.fa811c30,
        ge = $.a.e919c3bc,
        ve = $.a.b0dbe914,
        Se = $.a.e5b0e543,
        _e = $.a.h0ff39da,
        Ee = $.a.j3f49ff6,
        we = $.a.ca86b62c
      function Oe(e) {
        var t = S.a.useState(0),
          n = g()(t, 2),
          r = n[0],
          a = n[1],
          o = S.a.useCallback(function (e) {
            a(e || 0)
          }, [])
        return S.a.createElement(
          S.a.Fragment,
          null,
          S.a.createElement(O.a.Configure, { hideCookieBannerPicker: !0 }),
          S.a.createElement(w.a, null, S.a.createElement(R.a, { onHeightChange: o })),
          S.a.createElement(N.a, { style: [{ marginBottom: r }, Pe.bannerPadderChildren] }, e.children),
        )
      }
      var ke = (function (e) {
        u()(n, e)
        var t = le(n)
        function n(e, r) {
          var o
          return (
            a()(this, n),
            (o = t.call(this, e, r)),
            b()(
              s()(o),
              '_thirdPartySsoButtonsEnabled',
              o.context.featureSwitches.isTrue('responsive_web_third_party_sso_buttons_enabled'),
            ),
            b()(
              s()(o),
              '_ssoInSliShowProminentLoginButton',
              o.context.featureSwitches.isTrue('responsive_web_sso_in_sli_show_prominent_login_button'),
            ),
            b()(
              s()(o),
              '_isPlaceholderSIWGButtonEnabled',
              o.context.featureSwitches.isTrue('responsive_web_placeholder_siwg_button_enabled'),
            ),
            b()(
              s()(o),
              '_cookieComplianceGingersnapEnabled',
              o.context.featureSwitches.isTrue('responsive_web_cookie_compliance_gingersnap_enabled'),
            ),
            b()(
              s()(o),
              '_searchHomePageVariation',
              o.context.featureSwitches.getStringValue('responsive_web_search_home_page_design_variation'),
            ),
            b()(s()(o), '_renderLoginSignupButtons', function (e) {
              var t = e ? Pe.ctaButton : Pe.ctaButtonMobile
              return S.a.createElement(
                N.a,
                { style: !o._thirdPartySsoButtonsEnabled && 'tablet' === e && Pe.ctaButtonContainer },
                o._thirdPartySsoButtonsEnabled
                  ? S.a.createElement(
                      S.a.Fragment,
                      null,
                      o._renderSSOButtons(e),
                      o._ssoInSliShowProminentLoginButton
                        ? o._renderProminentLoginButtonVariation(e)
                        : o._renderLessProminentLoginButtonVariation(e),
                    )
                  : S.a.createElement(
                      S.a.Fragment,
                      null,
                      S.a.createElement(
                        M.a,
                        {
                          link: '/i/flow/signup',
                          onPress: o._handleSignupButton,
                          size: 'xLarge',
                          style: [t, 'tablet' === e && Pe.ctaButtonSplitSpacing],
                          testID: U.a.signupButton,
                          type: 'brandFilled',
                        },
                        me,
                      ),
                      S.a.createElement(
                        M.a,
                        {
                          link: '/login',
                          onPress: o._handleLoginButton,
                          size: 'xLarge',
                          style: t,
                          testID: U.a.loginButton,
                          type: 'brandOutlined',
                        },
                        ge,
                      ),
                    ),
              )
            }),
            b()(s()(o), '_renderSSOButtons', function (e) {
              var t = o.state,
                n = t.buttonState,
                r = t.isCookieCompliant,
                a = e ? Pe.ctaButton : Pe.ctaButtonMobile
              return S.a.createElement(
                S.a.Fragment,
                null,
                S.a.createElement(T.a, {
                  buttonSize: 'medium',
                  buttonState: n,
                  isCookieCompliant:
                    o._cookieComplianceGingersnapEnabled && o._isPlaceholderSIWGButtonEnabled ? r : void 0,
                  onPress: o._handleCookieCompliance,
                  style: [a, 'tablet' === e && Pe.ctaButtonSplitSpacing, Pe.ssoButtonStyles],
                }),
                S.a.createElement(_.a, {
                  buttonSize: 'medium',
                  buttonState: n,
                  style: [
                    a,
                    'tablet' === e && Pe.ctaButtonSplitSpacing,
                    Pe.ssoButtonStyles,
                    o._ssoInSliShowProminentLoginButton && { marginBottom: 0 },
                  ],
                }),
              )
            }),
            b()(s()(o), '_renderProminentLoginButtonVariation', function (e) {
              var t = e ? Pe.ctaButton : Pe.ctaButtonMobile
              return S.a.createElement(
                S.a.Fragment,
                null,
                S.a.createElement(
                  N.a,
                  { style: Pe.gapContainer },
                  S.a.createElement(W.a, { label: S.a.createElement(H.b, { children: we }) }),
                ),
                S.a.createElement(
                  M.a,
                  {
                    link: {
                      pathname: '/i/flow/signup',
                      state: { input: { requested_variant: JSON.stringify({ signup_type: oe.b }) } },
                    },
                    onPress: o._handleSignupButton,
                    size: 'medium',
                    style: [t, 'tablet' === e && Pe.ctaButtonSplitSpacing, Pe.ssoButtonStyles],
                    testID: U.a.signupButton,
                    type: 'brandFilled',
                  },
                  be,
                ),
                S.a.createElement(H.b, { color: 'gray700', size: 'subtext3', style: [t, { width: D.b }] }, oe.c),
                S.a.createElement(
                  N.a,
                  { style: Pe.signInButtonContainer },
                  S.a.createElement(H.b, { size: 'headline2', style: t, weight: 'bold' }, ye),
                  S.a.createElement(
                    M.a,
                    {
                      link: '/login',
                      onPress: o._handleLoginButton,
                      size: 'medium',
                      style: [t, 'tablet' === e && Pe.ctaButtonSplitSpacing, Pe.ssoButtonStyles],
                      testID: U.a.loginButton,
                      type: 'brandOutlined',
                    },
                    Se,
                  ),
                ),
              )
            }),
            b()(s()(o), '_renderLessProminentLoginButtonVariation', function (e) {
              var t = o.state.buttonState,
                n = e ? Pe.ctaButton : Pe.ctaButtonMobile,
                r = o._getLoginSignupProps() || {},
                a = r.handleLoginSignUpButton,
                i = r.loginSignUpButtonLabel,
                c = r.loginSignUpButtonLink
              return S.a.createElement(
                S.a.Fragment,
                null,
                S.a.createElement(
                  M.a,
                  {
                    backgroundColor: 'white',
                    borderColor: 'gray200',
                    color: 'gray1100',
                    link: c,
                    onPress: a,
                    size: 'medium',
                    style: [n, 'tablet' === e && Pe.ctaButtonSplitSpacing, Pe.ssoButtonStyles],
                    testID: t === oe.a.LogIn ? U.a.loginButton : U.a.signupButton,
                  },
                  i,
                ),
                t === oe.a.SignUp
                  ? S.a.createElement(H.b, { color: 'gray700', size: 'subtext2', style: n }, oe.c)
                  : null,
                S.a.createElement(H.b, { testID: U.a.logInSignUpFooter }, o._getLoginSignupFooter()),
              )
            }),
            b()(s()(o), '_renderUsernameInputField', function () {
              return S.a.createElement(
                N.a,
                { style: Ie.inputContainer },
                S.a.createElement(ie.b, {
                  onChange: o._handleUsernameChange,
                  onSubmitEditing: o._handleSubmitEditing,
                  style: Ie.input,
                }),
              )
            }),
            b()(s()(o), '_renderHalfForm', function () {
              var e = o.state.usernameValue
              return S.a.createElement(
                N.a,
                { style: [Ie.container, Ie.halfForm] },
                o._renderUsernameInputField(),
                S.a.createElement(
                  M.a,
                  {
                    link: { pathname: '/login', query: { username_or_email: e } },
                    onPress: o._handleHalfFormLoginClick,
                    size: 'xLarge',
                    style: Ie.submitButtonStyle,
                    type: 'brandOutlined',
                  },
                  ge,
                ),
              )
            }),
            b()(s()(o), '_getLoginSignupProps', function () {
              switch (o.state.buttonState) {
                case oe.a.SignUp:
                  return {
                    loginSignUpButtonLabel: be,
                    loginSignUpButtonLink: {
                      pathname: '/i/flow/signup',
                      state: { input: { requested_variant: JSON.stringify({ signup_type: oe.b }) } },
                    },
                    handleLoginSignUpButton: o._handleSignupButton,
                  }
                case oe.a.LogIn:
                  return {
                    loginSignUpButtonLabel: ve,
                    loginSignUpButtonLink: '/login',
                    handleLoginSignUpButton: o._handleLoginButton,
                  }
                default:
                  return
              }
            }),
            b()(s()(o), '_getLoginSignupFooter', function () {
              var e
              switch (o.state.buttonState) {
                case oe.a.SignUp:
                  return (
                    (e = {
                      onPress: function () {
                        return o.setState({ buttonState: oe.a.LogIn })
                      },
                    }.onPress),
                    S.a.createElement(
                      $.a.I18NFormatMessage,
                      { $i18n: 'c83ef3f5' },
                      S.a.createElement(H.b, { color: 'link', onPress: e }, $.a.fb9dd9b0),
                    )
                  )
                case oe.a.LogIn:
                  return (function (e) {
                    var t = e.onPress
                    return S.a.createElement(
                      $.a.I18NFormatMessage,
                      { $i18n: 'i89d7b70' },
                      S.a.createElement(H.b, { color: 'link', onPress: t }, $.a.ie4dd8d6),
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
            b()(s()(o), '_handleHalfFormLoginClick', function () {
              var e = o.props
              ;(0,
              e.scribeAction)(se(se({}, e.scribeNamespace), {}, { component: 'half_form', element: 'login', action: 'click' }))
            }),
            b()(s()(o), '_handleSubmitEditing', function () {
              o.setState({ autoSubmit: !0 })
            }),
            b()(s()(o), '_handleSignupButton', function () {
              var e = o.props
              ;(0,
              e.scribeAction)(se(se({}, e.scribeNamespace), {}, { section: 'front', component: 'signup_callout', element: 'form', action: 'signup' }))
            }),
            b()(s()(o), '_handleLoginButton', function () {
              var e = o.props
              ;(0,
              e.scribeAction)(se(se({}, e.scribeNamespace), {}, { section: 'front', component: 'signup_callout', element: 'form', action: 'login' }))
            }),
            b()(s()(o), '_handleUsernameChange', function (e) {
              o.setState({ usernameValue: e.target.value })
            }),
            b()(s()(o), '_handleCookieCompliance', function () {
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
          i()(n, [
            {
              key: 'componentDidMount',
              value: function () {
                Object(z.a)() && this.context.setSideNavSupport(!1)
              },
            },
            {
              key: 'componentWillUnmount',
              value: function () {
                Object(z.a)() && this.context.setSideNavSupport(!0)
              },
            },
            {
              key: 'render',
              value: function () {
                var e = this,
                  t = this.props.scribeNamespace,
                  n = !!ae.a[this._searchHomePageVariation]
                return S.a.createElement(
                  F.a,
                  null,
                  S.a.createElement(x.a, { title: _e }),
                  S.a.createElement(A.a, {
                    canonical: 'https://twitter.com/',
                    description: Ee,
                    title: _e,
                    type: 'website',
                  }),
                  S.a.createElement(E.a, { deepLink: 'twitter://' }),
                  S.a.createElement(
                    L.a,
                    null,
                    S.a.createElement('meta', { content: 'NOODP', name: 'robots' }),
                    S.a.createElement('meta', { content: Ee, name: 'description' }),
                  ),
                  S.a.createElement(q.a, null, function (r) {
                    var a = r.windowHeight,
                      o = r.windowWidth,
                      i = Object(X.e)(o, a),
                      c = i.deviceSize,
                      s = i.showLoginForm
                    return S.a.createElement(
                      N.a,
                      { style: Pe.root },
                      n
                        ? S.a.createElement(ae.b, {
                            cookieComplianceFS:
                              e._cookieComplianceGingersnapEnabled && e._isPlaceholderSIWGButtonEnabled,
                            deviceSize: c,
                            scribeNamespace: t,
                            variation: ae.a[e._searchHomePageVariation],
                          })
                        : S.a.createElement(
                            S.a.Fragment,
                            null,
                            S.a.createElement(
                              N.a,
                              { style: [Pe.main, 'desktop' === c && Pe.mainWide] },
                              e._renderCTA({ deviceSize: c, showLoginForm: s }),
                              e._renderHero(c),
                            ),
                            S.a.createElement(Oe, null, S.a.createElement(j.a, { align: 'center' })),
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
                  r = t.variants
                return S.a.createElement(
                  N.a,
                  { style: [Pe.block, Pe.communication, Pe.blockHero] },
                  S.a.createElement(
                    N.a,
                    { style: Pe.blockImg },
                    S.a.createElement(V.a, {
                      accessibilityLabel: '',
                      aspectMode: K.a.COVER,
                      backgroundColor: G.a.theme.colors.blue500,
                      customVariants: r,
                      draggable: !1,
                      image: n,
                    }),
                    S.a.createElement(re.a, { style: [Pe.twitterIconHero, 'desktop' === e && Pe.twitterIconHeroWide] }),
                  ),
                )
              },
            },
            {
              key: '_renderCommunicationItems',
              value: function () {
                var e = ue.length
                return S.a.createElement(
                  N.a,
                  { style: Pe.communicationItems },
                  ue.map(function (t, n) {
                    var r = t.Icon,
                      a = t.text,
                      o = n + 1 === e
                    return S.a.createElement(
                      N.a,
                      { key: a, style: [Pe.communicationItem, o && Pe.communicationItemLast] },
                      S.a.createElement(r, { style: Pe.communicationItemIcon }),
                      S.a.createElement(
                        H.b,
                        { color: 'white', size: 'headline1', style: Pe.communicationItemText, weight: 'bold' },
                        a,
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
                  r = this.state.buttonState
                return S.a.createElement(
                  N.a,
                  { style: [Pe.block, Pe.blockCTA, 'tablet' === t && Pe.blockTabletCTA] },
                  n ? this._renderLoginForm() : null,
                  S.a.createElement(
                    N.a,
                    { style: [Pe.blockInnerWrapper, 'desktop' === t && Pe.blockInnerWrapperWide] },
                    S.a.createElement(re.a, { style: Pe.twitterIcon }),
                    S.a.createElement(
                      H.b,
                      { extendedWidth: !0, style: t ? Pe.ctaTitleLarge : Pe.ctaTitle, weight: 'bold' },
                      he,
                    ),
                    S.a.createElement(
                      H.b,
                      {
                        extendedWidth: !0,
                        size: t ? 'title2' : 'title4',
                        style: t ? Pe.ctaTextLarge : Pe.ctaText,
                        weight: 'bold',
                      },
                      this._thirdPartySsoButtonsEnabled ? (r === oe.a.SignUp ? pe : fe) : pe,
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
                  r = n ? '?account_identifier='.concat(n) : '',
                  a = this.context.featureSwitches.getValue('responsive_web_inline_login_box_enabled'),
                  o = 'full' === a
                return 'none' === a
                  ? null
                  : 'half' === a
                  ? this._renderHalfForm()
                  : o
                  ? S.a.createElement(
                      N.a,
                      { style: Ie.container },
                      S.a.createElement(
                        B.a,
                        {
                          autoSubmit: t,
                          horizontalLayout: !0,
                          submitButtonSize: 'xLarge',
                          submitButtonStyle: Ie.submitButtonStyle,
                          submitButtonType: 'brandOutlined',
                        },
                        this._renderUsernameInputField(),
                        S.a.createElement(
                          N.a,
                          { style: Ie.inputContainer },
                          S.a.createElement(ie.a, { onSubmitEditing: this._handleSubmitEditing, style: Ie.input }),
                          S.a.createElement(
                            H.b,
                            {
                              link: {
                                pathname: 'https://twitter.com/account/begin_password_reset'.concat(r),
                                external: !0,
                                openInSameFrame: !0,
                              },
                              size: 'subtext2',
                              style: Ie.forgotPassword,
                            },
                            de,
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
      b()(ke, 'contextType', Q.a)
      var Ie = G.a.create(function (e) {
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
        Pe = G.a.create(function (e) {
          return {
            root: { flex: 1 },
            main: { minHeight: 'auto' },
            mainWide: { flex: 'auto', flexDirection: 'row-reverse' },
            block: { justifyContent: 'center', padding: e.spaces.space16 },
            blockHero: { flex: 1, padding: 0, minHeight: '45vh' },
            blockImg: se(
              se({}, G.a.absoluteFillObject),
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
              lineHeight: ''.concat(G.a.theme.spacesPx.space40 + G.a.theme.spacesPx.space12, 'px'),
              marginVertical: e.spaces.space40,
            },
            ctaTitleLarge: {
              fontSize: e.spaces.space64,
              letterSpacing: -1.2,
              lineHeight: ''.concat(G.a.theme.spacesPx.space64 + G.a.theme.spacesPx.space20, 'px'),
              marginVertical: e.spaces.space48,
            },
            ctaText: { marginBottom: e.spaces.space20 },
            ctaTextLarge: { marginBottom: e.spaces.space32 },
            ctaButtonContainer: { flexDirection: 'row' },
            ctaButton: { marginBottom: e.spaces.space20, maxWidth: ''.concat(X.a, 'px'), flex: 1 },
            ssoButtonStyles: { marginBottom: e.spaces.space8, width: D.b, height: e.spaces.space40, flex: 'none' },
            signInButtonContainer: { marginTop: G.a.theme.spaces.space40 },
            gapContainer: { marginVertical: e.spaces.space4, maxWidth: ''.concat(X.a, 'px'), width: D.b },
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
        })
      t.default = Object(Z.c)({ page: 'front' })(C(ke))
    },
    hUVV: function (e, t, n) {
      'use strict'
      var r = n('NeAX'),
        a = n('1YZw'),
        o = n('rxPX'),
        i = n('RqPI')
      t.a = Object(o.a)()
        .propsFromState(function () {
          return {
            personalizationPreferences: r.selectPreferences,
            personalizationSettings: r.selectUserPreferences,
            ssoInitTokens: i.w,
            userLanguage: i.o,
          }
        })
        .adjustStateProps(function (e) {
          var t = e.personalizationPreferences,
            n = e.personalizationSettings,
            r = e.ssoInitTokens,
            a = e.userLanguage
          return {
            personalizationSettings: n,
            shouldPropagateP13nSettings: !t.is_eu_country,
            ssoInitTokens: r,
            userLanguage: a,
          }
        })
        .propsFromActions(function () {
          return { addToast: a.b, fetchSsoInitToken: i.e }
        })
        .withAnalytics()
    },
    hiGS: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        o = n('ERkP'),
        i = n.n(o),
        c = n('Lsrn'),
        s = n('k/Ka')
      function l(e, t) {
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
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var d = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(s.a)(
          'svg',
          u(
            u({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [c.a.root, e.style], viewBox: '0 0 24 24' },
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
      ;(d.metadata = { width: 24, height: 24 }), (t.a = d)
    },
    iKTg: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        o = n('ERkP'),
        i = n.n(o),
        c = n('Lsrn'),
        s = n('k/Ka')
      function l(e, t) {
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
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var d = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(s.a)(
          'svg',
          u(
            u({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [c.a.root, e.style], viewBox: '0 0 24 24' },
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
      ;(d.metadata = { width: 24, height: 24 }), (t.a = d)
    },
    jmcQ: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        o = n('ERkP'),
        i = n.n(o),
        c = n('Lsrn'),
        s = n('k/Ka')
      function l(e, t) {
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
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var d = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(s.a)(
          'svg',
          u(
            u({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [c.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          i.a.createElement(
            'g',
            null,
            i.a.createElement('path', {
              d: 'M18.977 4.322L16 7.3c-1.023-.838-2.326-1.35-3.768-1.35-2.69 0-4.95 1.73-5.74 4.152l-3.44-2.635c1.656-3.387 5.134-5.705 9.18-5.705 2.605 0 4.93.977 6.745 2.56z',
              fill: '#EA4335',
            }),
            i.a.createElement('path', {
              d: 'M6.186 12c0 .66.102 1.293.307 1.89L3.05 16.533C2.38 15.17 2 13.63 2 12s.38-3.173 1.05-4.533l3.443 2.635c-.204.595-.307 1.238-.307 1.898z',
              fill: '#FBBC05',
            }),
            i.a.createElement('path', {
              d: 'M18.893 19.688c-1.786 1.667-4.168 2.55-6.66 2.55-4.048 0-7.526-2.317-9.18-5.705l3.44-2.635c.79 2.42 3.05 4.152 5.74 4.152 1.32 0 2.474-.308 3.395-.895l3.265 2.533z',
              fill: '#34A853',
            }),
            i.a.createElement('path', {
              d: 'M22 12c0 3.34-1.22 5.948-3.107 7.688l-3.265-2.53c1.07-.67 1.814-1.713 2.093-3.063h-5.488V10.14h9.535c.14.603.233 1.255.233 1.86z',
              fill: '#4285F4',
            }),
          ),
        )
      }
      ;(d.metadata = { width: 24, height: 24 }), (t.a = d)
    },
    kG2l: function (e, t, n) {
      'use strict'
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
        f = n('AuHH'),
        h = n.n(f),
        m = n('KEM+'),
        b = n.n(m),
        y = n('ERkP'),
        g = n.n(y),
        v = n('hUVV'),
        S = n('3XMw'),
        _ = n.n(S),
        E = n('jmcQ'),
        w = n('TaB8'),
        O = n('1zbE'),
        k = n('Ukpf'),
        I = n('cnVF'),
        P = n('aITJ'),
        C = n('MWbm'),
        R = n('TnY3'),
        x = n('/yvb'),
        j = n('Qwev'),
        D = n('v6aA'),
        T = n('0+0m')
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
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var B = _.a.e0870f25,
        A = _.a.gfeffd69,
        F = (function (e) {
          u()(n, e)
          var t = L(n)
          function n(e, r) {
            var o
            return (
              a()(this, n),
              (o = t.call(this, e, r)),
              b()(s()(o), '_buttonInitialized', !1),
              b()(s()(o), '_viewRef', g.a.createRef()),
              b()(
                s()(o),
                '_is3rdPartyIntegrationDisabled',
                Object(w.a)('responsive_web_3rd_party_category_google_platform', o.context.featureSwitches),
              ),
              b()(s()(o), '_initGoogleClient', function () {
                var e = window.google
                o._buttonInitialized ||
                  (e &&
                    (e.accounts.id.initialize({ client_id: T.c, callback: o._handleOnPress }),
                    (o._buttonInitialized = !0)))
              }),
              b()(s()(o), '_renderGoogleSignInButton', function () {
                var e = window.google,
                  t = o.props,
                  n = t.buttonState,
                  r = t.customWidth,
                  a = t.displayType,
                  i = t.userLanguage,
                  c = n === O.a.SignUp ? T.d.SignUp : T.d.SignIn,
                  s = a !== T.e.Prompt && o._buttonInitialized
                e &&
                  s &&
                  e.accounts.id.renderButton(o._viewRef.current, {
                    theme: 'outline',
                    size: 'large',
                    shape: 'circle',
                    locale: i,
                    logo_alignment: 'center',
                    text: c,
                    width: r || T.b,
                  })
              }),
              b()(s()(o), '_renderGoogleOneTapPrompt', function () {
                var e = window.google,
                  t = o.props,
                  n = t.analytics,
                  r = t.displayType,
                  a = t.isCookieCompliant,
                  i = !P.b.isIOS() && !P.b.isSafari(),
                  c = r !== T.e.Button && i && a
                e &&
                  c &&
                  e.accounts.id.prompt(function (e) {
                    n.scribe({ component: 'google_sign_in', element: 'one_tap', action: e.getMomentType() })
                  })
              }),
              b()(s()(o), '_renderPlaceholderButton', function () {
                var e = o.props,
                  t = e.buttonSize,
                  n = e.buttonState,
                  r = e.onPress,
                  a = e.style,
                  i = n === O.a.SignUp ? B : A
                return g.a.createElement(x.a, {
                  backgroundColor: 'white',
                  borderColor: 'gray200',
                  children: i,
                  color: 'gray1100',
                  icon: g.a.createElement(E.a, null),
                  onPress: r,
                  size: t,
                  style: a,
                })
              }),
              b()(s()(o), '_injectGoogleGsiLibraryScript', function () {
                k.a.inject({
                  callback: function () {
                    o.setState({ isScriptLoaded: !0 }, function () {
                      o._initGoogleClient(), o._renderGoogleSignInButton(), o._renderGoogleOneTapPrompt()
                    })
                  },
                  scriptId: 'googleGSILibrary',
                  src: 'https://accounts.google.com/gsi/client',
                })
              }),
              b()(s()(o), '_handleOnPress', function (e) {
                var t = o.props,
                  n = t.analytics,
                  r = t.buttonState,
                  a = t.fetchSsoInitToken
                n.scribe({ component: 'google_sign_in', element: r, action: 'click' }),
                  a(I.A.Google).then(function () {
                    o._handleGoogleAccSignInSuccess(e)
                  })
              }),
              b()(s()(o), '_handleGoogleAccSignInSuccess', function (e) {
                var t = o.props,
                  n = t.analytics,
                  r = t.buttonState,
                  a = t.history,
                  i = t.personalizationSettings,
                  c = t.shouldPropagateP13nSettings,
                  s = t.ssoInitTokens,
                  l = i || {},
                  u = l.allowCookieUse,
                  d = l.allowDeviceAccess,
                  p = l.allowPartnerships,
                  f = l.allowPersonalization
                n.scribe({ component: 'google_sign_in', element: r, action: 'success' }),
                  a.push({
                    pathname: '/i/flow/single_sign_on',
                    state: {
                      input: {
                        cookie_personalization_settings: c && {
                          allow_cookie_use: !!u,
                          allow_device_personalization: !!d,
                          allow_partnerships: !!p,
                          allow_ads_personalization: !!f,
                        },
                        requested_variant: JSON.stringify({
                          id_token: e.credential,
                          provider: I.A.Google,
                          state: s[I.A.Google],
                        }),
                      },
                    },
                  })
              }),
              (o.state = { isScriptLoaded: !1 }),
              o
            )
          }
          return (
            i()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props.isCookieCompliant
                  !this._is3rdPartyIntegrationDisabled && e && this._injectGoogleGsiLibraryScript()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t = this.props.isCookieCompliant,
                    n = this.state.isScriptLoaded
                  n &&
                    this._buttonInitialized &&
                    (e.userLanguage !== this.props.userLanguage || e.buttonState !== this.props.buttonState) &&
                    this._renderGoogleSignInButton(),
                    !n && t && this._injectGoogleGsiLibraryScript()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.state.isScriptLoaded,
                    t = this.props,
                    n = t.isCookieCompliant,
                    r = t.style
                  return this._is3rdPartyIntegrationDisabled
                    ? null
                    : n
                    ? e
                      ? g.a.createElement(C.a, { ref: this._viewRef, style: r })
                      : g.a.createElement(j.a, { style: [r, { width: T.b }] })
                    : this._renderPlaceholderButton()
                },
              },
            ]),
            n
          )
        })(g.a.PureComponent)
      b()(F, 'defaultProps', { buttonState: 'signup', isCookieCompliant: !0 }),
        b()(F, 'contextType', D.a),
        (t.a = Object(R.a)(Object(v.a)(F)))
    },
    kIAd: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      }),
        n.d(t, 'b', function () {
          return o
        })
      var r = n('0vv5'),
        a = 500,
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
            { type: 'hashtag', regexp: n.n(r).a, srcInputs: ['compose'], scope: { result_type: 'topics', count: 20 } },
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
        return N
      })
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
        f = n('N+ot'),
        h = n.n(f),
        m = n('AuHH'),
        b = n.n(m),
        y = n('KEM+'),
        g = n.n(y),
        v = (n('2G9S'), n('ZUdG'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('ERkP')),
        S = n.n(v),
        _ = n('pXBW'),
        E = n('6/RC'),
        w = n('UIzd'),
        O = n.n(w),
        k = n('kGix')
      n.d(t, 'a', function () {
        return k.a
      })
      var I = n('fs1G'),
        P = n('0KEI'),
        C = n('lU4h'),
        R = n.n(C),
        x = n('21nk'),
        j = n.n(x),
        D = n('bCEw'),
        T = n.n(D),
        L = n('Ud88'),
        B = n.n(L)
      function A(e) {
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
            r = b()(e)
          if (t) {
            var a = b()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      var F = function (e) {
          return (0, e.render)({ fetchStatus: k.a.LOADING, data: null, error: null, retry: I.a })
        },
        z = (function (e) {
          p()(n, e)
          var t = A(n)
          function n() {
            var e
            i()(this, n)
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
            return (e = t.call.apply(t, [this].concat(a))), g()(u()(e), 'state', { error: null }), e
          }
          return (
            s()(
              n,
              [
                {
                  key: 'componentDidCatch',
                  value: function (e, t) {
                    if (!(e instanceof _.a)) throw e
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
        })(S.a.Component),
        U = function (e) {
          var t = e.query,
            n = e.queryRef,
            r = e.render,
            a = j()(t, n)
          return r({ fetchStatus: k.a.LOADED, data: a, error: null, retry: I.a })
        },
        N = function (e, t) {
          if (E.canUseDOM)
            return function (n) {
              var r = n.fetchPolicy,
                o = void 0 === r ? 'store-or-network' : r,
                i = n.render,
                c = n.variables,
                s = T()(e),
                l = a()(s, 2),
                u = l[0],
                d = l[1],
                p = Object(P.useCreateLocalApiErrorHandler)(t.errorConfig.context),
                f = R()(c),
                h = a()(f, 1)[0],
                m = S.a.useCallback(
                  function () {
                    d(h, { fetchPolicy: 'network-only' })
                  },
                  [d, h],
                )
              return (
                S.a.useLayoutEffect(
                  function () {
                    d(h, { fetchPolicy: o })
                  },
                  [o, d, h],
                ),
                u
                  ? S.a.createElement(
                      S.a.Suspense,
                      { fallback: S.a.createElement(F, { render: i }) },
                      S.a.createElement(
                        z,
                        { errorHandler: p(t.errorConfig.options || {}), key: u.fetchKey, retry: m },
                        function (t, n) {
                          return t
                            ? i({ fetchStatus: k.a.FAILED, error: t, data: null, retry: n })
                            : S.a.createElement(U, { query: e, queryRef: u, render: i })
                        },
                      ),
                    )
                  : null
              )
            }
          var n = new WeakMap()
          return function (r) {
            r.fetchPolicy
            var o = r.render,
              i = r.variables,
              c = B()(),
              s = Object(P.useCreateLocalApiErrorHandler)(t.errorConfig.context),
              l = R()(i),
              u = a()(l, 1)[0],
              d = n.get(c)
            if (d) return d
            var p = S.a.lazy(function () {
              return O()(c, e, u)
                .toPromise()
                .then(
                  function (e) {
                    return o({ fetchStatus: k.a.LOADED, data: e, error: null, retry: I.a })
                  },
                  function (e) {
                    return e instanceof _.a
                      ? (s(t.errorConfig.options || {})(e),
                        o({ fetchStatus: k.a.FAILED, data: null, error: e, retry: I.a }))
                      : S.a.createElement(function () {
                          throw e
                        })
                  },
                )
                .then(function (e) {
                  return { default: n.set(c, e).get.bind(n, c) }
                })
            })
            return S.a.createElement(S.a.Suspense, null, S.a.createElement(p, null))
          }
        }
    },
    oEoC: function (e, t, n) {
      'use strict'
      n.d(t, 'e', function () {
        return p
      }),
        n.d(t, 'c', function () {
          return f
        }),
        n.d(t, 'b', function () {
          return h
        }),
        n.d(t, 'g', function () {
          return m
        }),
        n.d(t, 'a', function () {
          return b
        }),
        n.d(t, 'd', function () {
          return y
        }),
        n.d(t, 'f', function () {
          return v
        })
      n('+KXO'), n('1t7P'), n('daRM'), n('FtHn')
      var r = n('RhWx'),
        a = n.n(r),
        o = n('KEM+'),
        i = n.n(o),
        c =
          (n('hBpG'),
          n('vrRf'),
          n('WNMA'),
          n('KqXw'),
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
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? u(Object(n), !0).forEach(function (t) {
                i()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : u(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function p(e, t) {
        var n,
          r = s.b.scoper.find(function (r) {
            if (-1 !== r.srcInputs.indexOf(t)) return (n = e.match(r.regexp))
          }),
          a = ''
        return n && (a = n && (1 === n.length ? n[0] : n[1])), r ? d(d({}, r.scope), {}, { src: t, q: a }) : null
      }
      function f(e, t) {
        var n = t.slice(0, e),
          r = t.slice(e, t.length),
          a = n.search(s.b.WordEnd),
          o = a >= 0 ? n.slice(a) : '',
          i = r.search(s.b.WordBoundary),
          c = o + r.slice(0, i)
        return c.trim() ? { start: a, end: e + i, word: c } : { start: -1, end: -1, word: '' }
      }
      function h() {
        return 'typeaheadFocus-'.concat(Math.random())
      }
      function m(e) {
        var t = e.altKey,
          n = e.ctrlKey,
          r = e.metaKey
        return !(t || n || r)
      }
      function b(e, t) {
        var n = []
        e.forEach(function (e) {
          var r = t.find(function (t) {
            return t.id === e.id
          })
          r && r.data && r.data.result_context ? n.push(r) : n.push(e)
        })
        var r = n.map(function (e) {
            return e.id
          }),
          o = t.filter(function (e) {
            return r.indexOf(e.id) < 0
          })
        return [].concat(n, a()(o))
      }
      var y = Object(c.a)(function (e) {
          return {
            bottom: 0,
            paddingBottom: 'calc(2.5 * '.concat(l.a.theme.spaces.space64, ')'),
            position: 'fixed',
            top: ''.concat(e, 'px'),
            transform: [{ translate3d: '0,0,0' }],
          }
        }),
        g = 0,
        v = function () {
          return 'typeaheadDropdown-'.concat((g += 1))
        }
    },
    rRIm: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return K
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
        f = n('AuHH'),
        h = n.n(f),
        m = n('KEM+'),
        b = n.n(m),
        y = (n('2G9S'), n('LJOr'), n('KqXw'), n('ERkP')),
        g = n.n(y),
        v = n('sTyV'),
        S = n('6/RC'),
        _ = n('sebV'),
        E = n('G6rE'),
        w = n('rxPX'),
        O = Object(w.a)()
          .propsFromState(function () {
            return { loggedInUser: E.e.selectLoggedInUser }
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUser
            return { loggedInUserScreenName: t ? t.screen_name : void 0 }
          }),
        k = n('3XMw'),
        I = n.n(k),
        P = n('OrGc'),
        C = n('QK5w'),
        R = n('aITJ'),
        x = n('MWbm'),
        j = n('TnY3'),
        D = n('rHpw'),
        T = n('t62R'),
        L = n('v6aA'),
        B = n('uScj'),
        A = n('fs1G'),
        F = n('BcsE'),
        z = n('VPAj')
      function U(e, t) {
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
      function N(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? U(Object(n), !0).forEach(function (t) {
                b()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : U(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function H(e) {
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
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var M = I.a.b47e760d,
        W = I.a.fd2c7b43,
        q = new B.a(),
        V = function (e) {
          if (e.target instanceof HTMLInputElement) {
            var t = e.target.tagName.toLowerCase()
            return 'input' === t || 'textarea' === t
          }
          return !1
        },
        K = function (e) {
          return S.canUseDOM ? q.subscribe(e).unsubscribe : A.a
        },
        G = (function (e) {
          u()(n, e)
          var t = H(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              b()(s()(e), '_bindKeyboardShortcuts', function () {
                var t,
                  n,
                  r = e.props,
                  a = r.history,
                  o = r.loggedInUserScreenName,
                  i = function (e) {
                    return function (t) {
                      t.preventDefault(),
                        q.getListeners().length
                          ? q.notify(e)
                          : a.push({ pathname: '/explore', state: { searchFocused: !0, searchPrefill: e } })
                    }
                  },
                  c =
                    ((t = {}),
                    b()(t, P.e.search, i()),
                    b()(t, P.e.goToUser, i('@')),
                    b()(t, P.e.openKeyboardShortcuts, function () {
                      return a.push('/i/keyboard_shortcuts')
                    }),
                    b()(t, P.e.goExplore, function () {
                      return a.push('/explore')
                    }),
                    b()(t, P.e.goSettings, function () {
                      return a.push('/settings')
                    }),
                    t),
                  s = function (e) {
                    var t
                    return (
                      (t = {}),
                      b()(t, P.e.goProfile, function () {
                        return a.push('/'.concat(e))
                      }),
                      b()(t, P.e.goLikes, function () {
                        return a.push('/'.concat(e, '/likes'))
                      }),
                      b()(t, P.e.goLists, function () {
                        return a.push('/'.concat(e, '/lists'))
                      }),
                      t
                    )
                  },
                  l = e.context.userClaims.isTrueAndEnabled('subscriptions_feature_1007'),
                  u =
                    o && l
                      ? N(
                          N({}, s(o)),
                          {},
                          b()({}, P.e.goTopArticles, function () {
                            return a.push('/i/articles')
                          }),
                        )
                      : o
                      ? s(o)
                      : {},
                  d = N(
                    N(N({}, c), u),
                    {},
                    ((n = {}),
                    b()(n, P.e.goHome, function () {
                      return a.push('/home')
                    }),
                    b()(n, P.e.goDisplay, function () {
                      return a.push('/i/display')
                    }),
                    b()(n, P.e.goNotifications, function () {
                      return a.push('/notifications')
                    }),
                    b()(n, P.e.goMentions, function () {
                      return a.push('/notifications/mentions')
                    }),
                    b()(n, P.e.goMessages, function () {
                      return a.push('/messages')
                    }),
                    b()(n, P.e.newMessage, function () {
                      return a.push('/messages/compose')
                    }),
                    b()(n, P.e.newTweet, function () {
                      return a.push('/compose/tweet')
                    }),
                    b()(n, P.e.goMomentMaker, function () {
                      return a.push('/i/moment_maker')
                    }),
                    b()(n, P.e.goBookmarks, function () {
                      return a.push('/i/bookmarks')
                    }),
                    n),
                  ),
                  p = e.props.loggedInUserScreenName ? d : c
                e._unbindKeyboardShortcuts = Object(v.a)(p)
              }),
              b()(s()(e), '_handleKeyDown', function (t) {
                V(t) ||
                  'Backspace' !== t.key ||
                  ((e._backspaceDown = Date.now()), t.preventDefault(), t.stopPropagation())
              }),
              b()(s()(e), '_handleKeyUp', function (t) {
                if (!V(t) && 'Backspace' === t.key) {
                  t.preventDefault(), t.stopPropagation()
                  var n = e._backspaceDown,
                    r = !!Object(F.a)(n) && Date.now() - n < 500,
                    a = Object(C.a)({}, { location: e.props.location })
                  r && a ? e.props.history.goBack() : window.close()
                }
              }),
              e
            )
          }
          return (
            i()(n, [
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
                    ? g.a.createElement(
                        x.a,
                        { accessibilityLevel: 2, accessibilityRole: 'heading', style: D.a.visuallyHidden },
                        g.a.createElement(T.b, null, M),
                        g.a.createElement(T.b, { focusable: !1, link: '/i/keyboard_shortcuts' }, W),
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      b()(G, 'contextType', L.a)
      var Q = O(G),
        X = S.canUseDOM ? Object(j.a)(Q) : Object(z.a)(null)
      t.a = X
    },
    sYRn: function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        a = n.n(r),
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
        return a.a.createElement(o.a, {
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
          return w
        }),
        n.d(t, 'a', function () {
          return O
        }),
        n.d(t, 'b', function () {
          return k
        })
      n('+KXO'), n('1t7P'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('RhWx'),
        a = n.n(r),
        o = n('KEM+'),
        i = n.n(o),
        c = n('T0aG'),
        s = n.n(c),
        l = (n('yH/f'), n('2G9S'), n('LW0h'), n('JtPf'), n('7x/C'), n('oEOe')),
        u = n('kGix'),
        d = n('Ssj5'),
        p = n('SrIh'),
        f = n('RqPI')
      function h(e, t) {
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
      function m(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? h(Object(n), !0).forEach(function (t) {
                i()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : h(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var b = 'savedSearches',
        y = { fetchStatus: u.a.NONE, savedSearches: [] },
        g = Object.freeze({
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
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : y,
          t = arguments.length > 1 ? arguments[1] : void 0
        switch (t.type) {
          case g.SUCCESS:
            var n = t.payload,
              r = Array.isArray(n)
            return (
              r ||
                Object(p.a)('Saved search results are not type array', { extra: { savedSearchResultsType: s()(n) } }),
              m(m({}, e), {}, { fetchStatus: u.a.LOADED, savedSearches: r && n ? n : [] })
            )
          case g.FAILURE:
            return m(m({}, e), {}, { fetchStatus: u.a.FAILED })
          case v.SUCCESS:
            return m(
              m({}, e),
              {},
              { savedSearches: t.payload ? [].concat(a()(e.savedSearches), [t.payload]) : e.savedSearches },
            )
          case S.SUCCESS:
            return t.payload
              ? m(
                  m({}, e),
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
      d.a.register(i()({}, b, _))
      var E = function (e) {
          return e.savedSearches.savedSearches
        },
        w = function (e) {
          return function (t, n, r) {
            var a = r.api
            return Object(l.b)(t, { request: a.SavedSearches.create, params: { query: e } })({
              actionTypes: v,
              context: 'SAVE_SEARCH',
            })
          }
        },
        O = function (e) {
          return function (t, n, r) {
            var a = r.api
            return Object(l.b)(t, { request: a.SavedSearches.destroy, params: { id: e } })({
              actionTypes: S,
              context: 'DELETE_SAVED_SEARCH',
            })
          }
        },
        k = function () {
          return function (e, t, n) {
            n.api
            var r = t()
            return Object(f.m)(r)
              ? (function (e) {
                  return e.savedSearches.fetchStatus
                })(r) === u.a.LOADED
                ? Promise.resolve()
                : e(function (e, t, n) {
                    var r = n.api
                    return Object(l.b)(e, { request: r.SavedSearches.fetch, params: {} })({
                      actionTypes: g,
                      context: 'FETCH_SAVED_SEARCHES',
                    })
                  })
              : Promise.resolve()
          }
        }
    },
    wz7L: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        o = n('ERkP'),
        i = n.n(o),
        c = n('Lsrn'),
        s = n('k/Ka')
      function l(e, t) {
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
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var d = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(s.a)(
          'svg',
          u(
            u({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [c.a.root, e.style], viewBox: '0 0 24 24' },
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
      ;(d.metadata = { width: 24, height: 24 }), (t.a = d)
    },
    x1T0: function (e, t, n) {
      'use strict'
      n.r(t)
      var r,
        a = {
          fragment: {
            argumentDefinitions: [],
            kind: 'Fragment',
            metadata: null,
            name: 'LoggedOutSearchHomeTrendsListQuery',
            selections: (r = [
              {
                alias: null,
                args: [{ kind: 'Literal', name: 's', value: 21 }],
                concreteType: 'LoggedOutTrendsList',
                kind: 'LinkedField',
                name: 'logged_out_trends_list',
                plural: !1,
                selections: [{ alias: null, args: null, kind: 'ScalarField', name: 'trends', storageKey: null }],
                storageKey: 'logged_out_trends_list(s:21)',
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
            selections: r,
          },
          params: {
            id: 'jFSVxO6XekDkqa9LhEqxug',
            metadata: {},
            name: 'LoggedOutSearchHomeTrendsListQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(a.hash = 'd776a0f7400b83db0b925f0352d2b751'), (t.default = a)
    },
  },
])
//# sourceMappingURL=WIPED
