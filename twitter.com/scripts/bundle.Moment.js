;(window.webpackJsonp = window.webpackJsonp || []).push([
  [66],
  {
    CBsz: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'MomentAnalyticsScreen', function () {
          return B
        })
      var r = a('VrFO'),
        n = a.n(r),
        i = a('Y9Ll'),
        c = a.n(i),
        o = a('5Yy7'),
        l = a.n(o),
        s = a('2VqO'),
        u = a.n(s),
        d = (a('6U7i'), a('ERkP')),
        m = a.n(d),
        p = (a('KqXw'), a('WNMA'), a('n4jD')),
        f = a('rxPX'),
        b = a('0KEI'),
        h = function (e, t) {
          return t.match.params.momentId
        },
        g = function (e) {
          return function (t, a, r) {
            var n = r.api,
              i = Object(p.c)(a())
            return n.Moments.analytics({ moment_id: e.momentId, teamUserId: i })
          }
        },
        E = Object(f.a)()
          .propsFromState(function () {
            return { momentId: h }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(b.createLocalApiErrorHandlerWithContextFactory)(
                'MOMENTS_ANALYTICS_SCREEN',
              ),
              fetchAnalytics: g,
            }
          })
          .withAnalytics({ page: 'moments_analytics' }),
        v = a('KEM+'),
        y = a.n(v),
        S = a('k49u'),
        C = a('LVU8'),
        _ = a('jHSc'),
        U = a('MWbm'),
        O = a('t62R'),
        T = a('MtXG'),
        I = a('855f'),
        R = a('rHpw'),
        w = a('3XMw'),
        P = a.n(w),
        L = P.a.e2e35f0d,
        A = P.a.icfe5fe3,
        D = P.a.a52a1fb9,
        k = P.a.if221231,
        B = (function (e) {
          l()(a, e)
          var t = u()(a)
          function a(e) {
            var r
            return n()(this, a), ((r = t.call(this, e)).state = {}), r
          }
          return (
            c()(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this,
                    t = this.props,
                    a = t.createLocalApiErrorHandler,
                    r = t.fetchAnalytics,
                    n = t.momentId
                  r({ momentId: n })
                    .then(function (t) {
                      e.setState({ momentAnalytics: t })
                    })
                    .catch(
                      a(
                        (function (e) {
                          var t = 'string' == typeof e ? '/i/moments/'.concat(e) : '/i/explore'
                          return y()({}, S.a.ClientNotPermitted, {
                            customAction: function () {
                              Object(C.d)(t, { statusCode: 401 })
                            },
                          })
                        })(n),
                      ),
                    )
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.history,
                    a = e.momentId,
                    r = this.state.momentAnalytics,
                    n = r || {},
                    i = n.title,
                    c = void 0 === i ? '' : i,
                    o = n.analytics,
                    l = (o = void 0 === o ? {} : o).capsule_opens,
                    s = void 0 === l ? 0 : l,
                    u = o.capsule_opens_uniques,
                    d = void 0 === u ? 0 : u,
                    p = o.completion_rate,
                    f = void 0 === p ? 0 : p,
                    b = o.shares_from_capsule,
                    h = void 0 === b ? 0 : b,
                    g = a ? '/i/moments/'.concat(String(a)) : '/i/explore',
                    E = P.a.ab0f5140
                  return m.a.createElement(
                    m.a.Fragment,
                    null,
                    r &&
                      m.a.createElement(
                        _.b,
                        { backButtonType: 'close', backLocation: g, documentTitle: E, history: t, title: E },
                        m.a.createElement(
                          U.a,
                          { style: F.container },
                          m.a.createElement(
                            U.a,
                            { style: F.titleTextContainer },
                            m.a.createElement(O.b, { style: F.titleText, weight: 'bold' }, c),
                          ),
                          m.a.createElement(
                            T.a.Group,
                            null,
                            m.a.createElement(
                              U.a,
                              null,
                              m.a.createElement(
                                U.a,
                                { style: F.analytic },
                                m.a.createElement(
                                  T.a,
                                  null,
                                  m.a.createElement(
                                    P.a.I18NFormatMessage,
                                    { $i18n: 'gfc363c4' },
                                    m.a.createElement(
                                      T.a.Value,
                                      null,
                                      P.a.f22fc1cb({ formattedCount: I.a.getFormattedCount(Number(s)) }),
                                    ),
                                    m.a.createElement(T.a.Value, null, P.a.c71523ef({ count: s })),
                                  ),
                                ),
                                m.a.createElement(O.b, { color: 'gray700' }, L),
                              ),
                              m.a.createElement(
                                U.a,
                                { style: F.analytic },
                                m.a.createElement(
                                  T.a,
                                  null,
                                  m.a.createElement(
                                    P.a.I18NFormatMessage,
                                    { $i18n: 'e79f5450' },
                                    m.a.createElement(
                                      T.a.Value,
                                      null,
                                      P.a.eca2dfe8({ formattedCount: I.a.getFormattedCount(Number(d)) }),
                                    ),
                                    m.a.createElement(T.a.Value, null, P.a.a77bd6f4({ count: d })),
                                  ),
                                ),
                                m.a.createElement(O.b, { color: 'gray700' }, A),
                              ),
                              m.a.createElement(
                                U.a,
                                { style: F.analytic },
                                m.a.createElement(
                                  T.a,
                                  null,
                                  m.a.createElement(
                                    P.a.I18NFormatMessage,
                                    { $i18n: 'fcbb0929' },
                                    m.a.createElement(
                                      T.a.Value,
                                      null,
                                      P.a.cb22dca4({ formattedCount: I.a.getFormattedCount(Number(h)) }),
                                    ),
                                    m.a.createElement(T.a.Value, null, P.a.a30d7c4d({ count: h })),
                                  ),
                                ),
                                m.a.createElement(O.b, { color: 'gray700' }, D),
                              ),
                              m.a.createElement(
                                U.a,
                                { style: F.analytic },
                                m.a.createElement(
                                  T.a,
                                  null,
                                  m.a.createElement(
                                    P.a.I18NFormatMessage,
                                    { $i18n: 'afba3eba' },
                                    m.a.createElement(
                                      T.a.Value,
                                      null,
                                      P.a.e5463c29({ formattedCount: I.a.getFormattedCount(f) }),
                                    ),
                                    m.a.createElement(T.a.Value, null, P.a.j20f66ed({ count: f })),
                                  ),
                                ),
                                m.a.createElement(O.b, { color: 'gray700' }, k),
                              ),
                            ),
                          ),
                        ),
                      ),
                  )
                },
              },
            ]),
            a
          )
        })(m.a.Component),
        F = R.a.create(function (e) {
          return {
            analytic: { marginBottom: e.spaces.space16 },
            container: { height: '100%', padding: 20 },
            titleText: { fontSize: e.fontSizes.title4 },
            titleTextContainer: { marginBottom: e.spaces.space16 },
          }
        }),
        x = E(B)
      t.default = x
    },
    DBID: function (e, t, a) {
      'use strict'
      a.r(t)
      var r = a('ERkP'),
        n = a.n(r),
        i = a('3XMw'),
        c = a.n(i),
        o = a('hOZg'),
        l = a('zCf4'),
        s = a('aITJ'),
        u = a('MWbm'),
        d = a('sgih'),
        m = a('/yvb'),
        p = a('t62R'),
        f = a('rHpw'),
        b = c.a.ia5e7487,
        h = c.a.a893d601,
        g = c.a.fce91ab4,
        E = c.a.gc7637d3
      t.default = function () {
        var e = Object(l.f)()
        function t() {
          e.push('/home')
        }
        return n.a.createElement(
          d.a,
          { allowBackNavigation: !0, enableMaskForDismiss: !0, onMaskClick: t, style: v.root, type: 'full' },
          n.a.createElement(
            u.a,
            { style: v.topBar },
            n.a.createElement(m.a, {
              accessibilityLabel: b,
              hoverLabel: { label: b },
              icon: n.a.createElement(o.a, { style: v.topIcons }),
              onPress: t,
              pullRight: !0,
              size: 'medium',
              type: 'brandText',
            }),
          ),
          n.a.createElement(
            u.a,
            { style: s.b.isMobileOS() ? v.contentSmall : v.content },
            n.a.createElement(p.b, { size: 'title2', style: v.title, weight: 'heavy' }, g),
            n.a.createElement(p.b, { style: v.subtitle }, E),
            n.a.createElement(m.a, { onPress: t, size: 'xLarge', type: 'primaryFilled' }, h),
          ),
        )
      }
      var v = f.a.create(function (e) {
        return {
          root: { minHeight: 600 },
          topBar: { alignItems: 'flex-start', flexDirection: 'row', paddingTop: 15, paddingLeft: 15 },
          topIcons: { color: '#000' },
          spacer: { width: e.spaces.space24 },
          content: { paddingTop: 20, paddingLeft: 100, paddingRight: 100, overflowY: 'auto' },
          contentSmall: { paddingTop: 20, paddingLeft: 20, paddingRight: 20, overflowY: 'auto' },
          title: { marginBottom: 8 },
          subtitle: { color: e.colors.gray700, marginBottom: 28 },
          img: { height: 150, width: '100%', marginBottom: 28 },
          closeButton: { paddingTop: 15 },
        }
      })
    },
    OzKQ: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'getReferringPage', function () {
          return ie
        }),
        a.d(t, 'TwitterBlueSignUpScreen', function () {
          return oe
        })
      var r = a('yiKp'),
        n = a.n(r),
        i = a('ddV6'),
        c = a.n(i),
        o = (a('M+/F'), a('1t7P'), a('jQ/y'), a('z84I'), a('ERkP')),
        l = a.n(o),
        s = a('v6aA'),
        u = a('3XMw'),
        d = a.n(u),
        m = a.p + 'undo_tweet_illustration.0e0907c5.svg',
        p = a('Lsrn'),
        f = a('k/Ka'),
        b = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(f.a)(
            'svg',
            n()(
              n()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [p.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            l.a.createElement(
              'g',
              null,
              l.a.createElement('path', {
                d: 'M22.906 6.356c-.26-.124-.568-.088-.794.093l-2.737 2.207V5.283c0-1.24-1.01-2.25-2.25-2.25H3.167c-1.24 0-2.25 1.01-2.25 2.25v14.5c0 1.24 1.01 2.25 2.25 2.25h13.958c1.24 0 2.25-1.01 2.25-2.25V16.41l2.737 2.207c.136.11.303.166.47.166.11 0 .222-.024.324-.073.26-.125.427-.388.427-.677v-11c0-.29-.166-.552-.427-.677zm-5.03 13.427c0 .413-.338.75-.75.75H3.165c-.412 0-.75-.337-.75-.75v-14.5c0-.413.338-.75.75-.75h13.96c.412 0 .75.337.75.75v14.5zm3.957-3.318l-2.458-1.983v-3.897l2.458-1.983v7.863z',
              }),
              l.a.createElement('path', {
                d: 'M10.146 17.395c-2.68 0-4.86-2.18-4.86-4.86s2.18-4.862 4.86-4.862 4.86 2.18 4.86 4.86-2.18 4.862-4.86 4.862zm0-8.223c-1.853 0-3.36 1.508-3.36 3.36s1.508 3.362 3.36 3.362c1.854 0 3.36-1.508 3.36-3.36S12 9.17 10.147 9.17z',
              }),
            ),
          )
        }
      b.metadata = { width: 24, height: 24 }
      var h = b,
        g = a('ShJ/'),
        E = a('g7Ra'),
        v = a('pu5c'),
        y = a('5VjN'),
        S = a('JzwX'),
        C = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(f.a)(
            'svg',
            n()(
              n()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [p.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            l.a.createElement(
              'g',
              null,
              l.a.createElement('path', {
                d: 'M19.745 1H8.503C7.261 1 6.248 2.014 6.248 3.258v1.385H4.255C3.012 4.643 2 5.657 2 6.901v15.345c0 .281.16.542.411.672s.551.1.782-.06l6.683-4.877 6.683 4.877c.13.09.281.141.441.141.12 0 .23-.03.341-.08.251-.13.411-.391.411-.672v-5.259l3.046 2.218c.14.1.291.151.451.151.11 0 .231-.03.341-.09.25-.122.41-.383.41-.664V3.258C22 2.014 20.988 1 19.745 1zm-3.497 19.771l-5.471-3.994-.461-.331c-.261-.191-.621-.191-.882 0l-3.166 2.308-2.765 2.017V6.901c0-.412.341-.753.752-.753h11.242c.411 0 .752.341.752.753v13.87zm4.249-3.653l-2.745-1.997v-8.22c0-1.244-1.012-2.258-2.255-2.258H7.752V3.258c0-.412.331-.753.752-.753h11.242c.411 0 .752.341.752.753v13.86z',
              }),
              l.a.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
            ),
          )
        }
      C.metadata = { width: 24, height: 24 }
      var _ = C,
        U = a('hBoh'),
        O = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(f.a)(
            'svg',
            n()(
              n()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [p.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            l.a.createElement(
              'g',
              null,
              l.a.createElement('path', {
                d: 'M8.18 16.99c-.19.154-.476.032-.504-.21-.137-1.214-.234-4.053 1.483-5.943.908-1 3.02-1.52 4.475-.198s1.14 3.473.23 4.473c-2.07 2.15-3.428.058-5.686 1.878zm7.512-5.785l6.383-7.216c.45-.45.45-1.18 0-1.628-.45-.45-1.178-.45-1.627 0l-7.232 6.402s.782.106 1.595.93c.548.558.882 1.51.882 1.51z',
              }),
              l.a.createElement('path', {
                d: 'M17.45 22.28H3.673c-1.148 0-2.083-.946-2.083-2.11V7.926c0-1.165.934-2.112 2.082-2.112h5.836c.414 0 .75.336.75.75s-.336.75-.75.75H3.672c-.32 0-.583.274-.583.612V20.17c0 .336.26.61.582.61h13.78c.32 0 .583-.273.583-.61v-6.28c0-.415.336-.75.75-.75s.75.335.75.75v6.28c0 1.163-.934 2.11-2.084 2.11z',
              }),
            ),
          )
        }
      O.metadata = { width: 24, height: 24 }
      var T = O,
        I = function (e, t, a) {
          var r = [
            {
              icon: h,
              heading: d.a.a99d8e60,
              description: d.a.gdd8144c,
              platformAvailabilityLabel: ['iOS', 'Android', 'Web'],
            },
          ]
          return (
            a &&
              r.push({
                icon: g.a,
                heading: d.a.e4b3f520,
                description: d.a.h73af45f,
                platformAvailabilityLabel: ['iOS'],
              }),
            [
              {
                blurb: d.a.c4debbdf,
                features: [
                  [
                    {
                      icon: E.a,
                      heading: d.a.de43eaf2,
                      description: d.a.g52ab673,
                      platformAvailabilityLabel: ['iOS', 'Android', 'Web'],
                    },
                    { illustrationName: m },
                  ],
                ],
              },
              {
                blurb: d.a.j9b7ae03,
                features: [
                  [
                    {
                      icon: v.a,
                      heading: d.a.i65802df,
                      description: d.a.cc75246f,
                      platformAvailabilityLabel: ['iOS', 'Android', 'Web'],
                    },
                    {
                      icon: y.a,
                      heading: d.a.b7fa0cfd,
                      description: d.a.a29aa266,
                      platformAvailabilityLabel: e ? ['iOS', 'Android', 'Web'] : ['Android', 'Web'],
                    },
                  ],
                  [
                    {
                      icon: S.a,
                      heading: d.a.b62d6e4c,
                      description: d.a.e48717d7,
                      platformAvailabilityLabel: ['iOS', 'Android', 'Web'],
                    },
                  ],
                ],
              },
              {
                blurb: d.a.cd2b9647,
                features: [
                  [
                    {
                      icon: _,
                      heading: d.a.hdc87500,
                      description: d.a.gaf181e0,
                      platformAvailabilityLabel: t ? ['iOS', 'Android', 'Web'] : ['iOS', 'Android'],
                    },
                    { icon: g.a, heading: d.a.i9223e6f, description: d.a.c1935a33, platformAvailabilityLabel: ['iOS'] },
                  ],
                  [
                    {
                      icon: U.a,
                      heading: d.a.gc8d916e,
                      description: d.a.a353aeee,
                      platformAvailabilityLabel: ['iOS', 'Android'],
                    },
                    { icon: T, heading: d.a.f39aef7b, description: d.a.b4a97be8, platformAvailabilityLabel: ['iOS'] },
                  ],
                ],
              },
              { blurb: d.a.h52ee955, features: [r] },
            ]
          )
        },
        R = a('wrlS'),
        w = a('rxPX'),
        P = a('su2V'),
        L = a('cnVF'),
        A = function (e) {
          return Object(R.d)(e).isTrue('subscriptions_stripe_testing') ? L.G : L.D
        },
        D = function (e) {
          return Object(R.d)(e).isTrue('subscriptions_stripe_testing') ? L.H : L.E
        },
        k = Object(w.a)()
          .propsFromState(function () {
            return {
              productDetailsFetchStatus: function (e) {
                return Object(P.l)(e, A(e))
              },
              productDetails: function (e) {
                return Object(P.k)(e, A(e))
              },
              checkoutUrlFetchStatus: function (e) {
                return Object(P.f)(e, A(e))
              },
              checkoutUrl: function (e) {
                return Object(P.e)(e, A(e))
              },
              twitterBlueID: A,
              twitterBlueIDUnhashed: D,
            }
          })
          .propsFromActions(function () {
            return { fetchSubscriptionProductDetails: P.d, fetchSubscriptionProductCheckoutUrl: P.b }
          })
          .withAnalytics({ page: 'subscriptions', section: 'marketing' }),
        B = a('v//M'),
        F = a('MWbm'),
        x = a('t62R'),
        H = a('/yvb'),
        N = a('rHpw'),
        M = a('zCf4'),
        z = a('VKnd'),
        j = d.a.b9238e88,
        V = {
          USD: d.a.d0783e70,
          EUR: d.a.e8c823d2,
          GBP: d.a.gbf0e6c6,
          CAD: d.a.j16ccfa2,
          AUD: d.a.c93cb976,
          NZD: d.a.c32b252a,
        },
        W = function (e) {
          var t,
            a,
            r,
            n = null === (t = e.query) || void 0 === t ? void 0 : t.referring_page
          return Array.isArray(n)
            ? ''
            : n ||
                (null == e || null === (a = e.state) || void 0 === a || null === (r = a.previousPath) || void 0 === r
                  ? void 0
                  : r.slice(1)) ||
                ''
        },
        K = N.a.create(function (e) {
          return {
            buttonWrapper: {
              alignItems: 'center',
              paddingTop: e.spaces.space16,
              paddingBottom: 16,
              boxShadow: '0px 0px 3px rgba(15, 20, 25, 0.15), 0px 0px 16px rgba(15, 20, 25, 0.1)',
              height: '100%',
            },
            termsOfService: {
              alignItems: 'center',
              flexDirection: 'row',
              paddingBottom: 10,
              paddingLeft: 16,
              paddingRight: 16,
            },
            button: { width: '75%', cursor: 'pointer', alignItems: 'center' },
          }
        }),
        Q = k(function (e) {
          var t = e.analytics,
            a = e.buttonStyle,
            r = e.checkoutUrl,
            n = e.checkoutUrlFetchStatus,
            i = e.fetchSubscriptionProductCheckoutUrl,
            c = e.fetchSubscriptionProductDetails,
            o = e.onClick,
            s = e.productDetails,
            u = e.productDetailsFetchStatus,
            m = e.style,
            p = e.termsOfServiceStyle,
            f = e.twitterBlueID,
            b = e.twitterBlueIDUnhashed,
            h = Object(M.g)(),
            g = function () {
              t.scribe({ action: 'start', element: 'fetch_product', data: { referring_page: W(h) } }),
                c(f)
                  .then(function () {
                    t.scribe({ action: 'success', element: 'fetch_product', data: { referring_page: W(h) } })
                  })
                  .catch(function () {
                    t.scribe({ action: 'failure', element: 'fetch_product', data: { referring_page: W(h) } })
                  })
            }
          l.a.useEffect(
            function () {
              g()
            },
            [c],
          )
          var E = l.a.useCallback(
            function () {
              if ((t.scribe({ action: 'click', element: 'subscribe', data: { referring_page: W(h) } }), s)) {
                var e,
                  a = null != s && null !== (e = s.prices) && void 0 !== e && e.length ? s.prices[0] : null
                ;(null == a ? void 0 : a.external_price_id) && i(f, b, z.c, z.a)
              }
              o && o()
            },
            [o, t, h, i, s, f, b],
          )
          return l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(B.a, {
              fetchStatus: u,
              onRequestRetry: function () {
                g()
              },
              render: function () {
                var e = null != s && s.prices && s.prices.length ? s.prices[0] : null,
                  t = null == e ? void 0 : e.currency_code.toUpperCase(),
                  r = null != e && e.amount_local_micro ? e.amount_local_micro / 1e6 : null
                if (!t || !r) return null
                var i = (0, V[t])(r),
                  c = j({ price: i })
                return l.a.createElement(
                  F.a,
                  { style: [K.buttonWrapper, m] },
                  l.a.createElement(
                    F.a,
                    { style: [K.termsOfService, p] },
                    l.a.createElement(
                      x.b,
                      { align: 'center', color: 'gray700', size: 'subtext3' },
                      l.a.createElement(
                        d.a.I18NFormatMessage,
                        { $i18n: 'a66ed614' },
                        l.a.createElement(x.b, { link: 'https://legal.twitter.com/purchaser-terms' }, d.a.ea6a437a),
                      ),
                    ),
                  ),
                  l.a.createElement(
                    H.a,
                    {
                      accessibilityLabel: c,
                      disabled: !s || 'loading' === n,
                      onPress: E,
                      style: [K.button, a],
                      type: 'primaryFilled',
                    },
                    c,
                  ),
                )
              },
              retryable: !0,
            }),
            l.a.createElement(B.a, {
              fetchStatus: n,
              onRequestRetry: function () {
                if (s) {
                  var e,
                    t = null != s && null !== (e = s.prices) && void 0 !== e && e.length ? s.prices[0] : null
                  ;(null == t ? void 0 : t.external_price_id) && i(f, b, z.c, z.a)
                }
              },
              render: function () {
                return r && (window.location.href = r), null
              },
              retryable: !0,
            }),
          )
        }),
        G = a.p + 'twitter-blue-wave.d1b48db5.svg',
        q = a('Irs7'),
        X = a('aITJ'),
        J = a('Wms4'),
        Y = a('sgih'),
        Z = a('xKuM'),
        $ = a('hOZg'),
        ee = a('lUZE'),
        te = a('tH6R'),
        ae = d.a.a7fedd05,
        re = d.a.b08821f3,
        ne = d.a.ed21f885,
        ie = function (e) {
          var t,
            a,
            r,
            n = null === (t = e.query) || void 0 === t ? void 0 : t.referring_page
          return Array.isArray(n)
            ? ''
            : n ||
                (null == e || null === (a = e.state) || void 0 === a || null === (r = a.previousPath) || void 0 === r
                  ? void 0
                  : r.slice(1)) ||
                ''
        },
        ce = { page: 'subscriptions', section: 'marketing' },
        oe = function (e) {
          var t = Object(q.b)(),
            a = l.a.useContext(s.a).featureSwitches,
            r = a.isTrue('subscriptions_twitter_blue_logo_enabled'),
            i = a.isTrue('subscriptions_top_articles_on_ios_enabled'),
            o = a.isTrue('subscriptions_feature_1002'),
            u = !a.isTrue('dm_conversation_labels_pinned_enabled') && a.isTrue('subscriptions_feature_labs_1001'),
            d = Object(M.f)(),
            m = Object(M.g)(),
            p = l.a.useState(!1),
            f = c()(p, 2),
            b = f[0],
            h = f[1]
          l.a.useEffect(function () {
            var e = Date.now()
            return (
              t.scribe(n()(n()({}, ce), {}, { action: 'impression', data: { referring_page: ie(m) } })),
              function () {
                var a = Math.floor((Date.now() - e) / 1e3)
                t.scribe(
                  n()(
                    n()({}, ce),
                    {},
                    {
                      action: 'end_session',
                      data: { end_session_reason: b ? 'purchased' : 'page_left', session_duration_in_s: a },
                    },
                  ),
                )
              }
            )
          }, [])
          var g = function () {
              return d.goBack()
            },
            E = l.a.useCallback(function () {
              h(!0)
            }, []),
            v = function (e, t) {
              var a = e.map(function (e, t) {
                return (function (e, t) {
                  if (e.illustrationName) {
                    var a = X.b.isMobileOS() ? '100px' : 'initial'
                    return l.a.createElement(
                      l.a.Fragment,
                      { key: e.illustrationName },
                      l.a.createElement(F.a, { style: le.widthDivider }),
                      l.a.createElement(F.a, {
                        style: [
                          le.feature,
                          le.illustration,
                          {
                            backgroundImage: 'url('.concat(null == e ? void 0 : e.illustrationName, ')'),
                            maxHeight: a,
                          },
                        ],
                      }),
                    )
                  }
                  if (e.icon) {
                    var r = e.icon
                    return l.a.createElement(
                      F.a,
                      { key: t, style: le.feature, testID: 'feature' },
                      l.a.createElement(F.a, null, l.a.createElement(r, { style: le.featureIcon })),
                      l.a.createElement(
                        F.a,
                        { style: le.featureContent },
                        l.a.createElement(x.b, { size: 'body', weight: 'bold' }, e.heading),
                        l.a.createElement(
                          x.b,
                          { color: 'gray700', size: 'body', style: le.featureDescription },
                          e.description,
                        ),
                        l.a.createElement(
                          F.a,
                          { style: le.labelWrapper },
                          e.platformAvailabilityLabel.map(function (e) {
                            return l.a.createElement(
                              J.a,
                              { background: 'maskColor', bold: !0, key: e, style: le.labelStyle },
                              l.a.createElement(x.b, { color: 'gray700' }, e),
                            )
                          }),
                        ),
                      ),
                    )
                  }
                  return null
                })(e, t)
              })
              return l.a.createElement(F.a, { key: t, style: le.featureRow, testID: 'featureRow' }, a)
            },
            y = I(i, o, u).map(function (e, t) {
              return (function (e, t) {
                var a = e.features.map(function (e, t) {
                  return v(e, t)
                })
                return l.a.createElement(
                  F.a,
                  { key: t, style: le.featureGroup },
                  l.a.createElement(x.b, { size: 'title3', testID: 'featureGroup', weight: 'heavy' }, e.blurb),
                  a,
                )
              })(e, t)
            })
          return l.a.createElement(
            Y.a,
            {
              allowBackNavigation: !0,
              enableMaskForDismiss: !0,
              onMaskClick: g,
              style: le.root,
              type: 'full',
              withMask: !0,
            },
            l.a.createElement(
              F.a,
              { style: le.appBarContainer },
              l.a.createElement(Z.a, {
                centeredLogo: l.a.createElement(ee.a, { style: le.twitterLogo }),
                leftControl: l.a.createElement(H.a, {
                  accessibilityLabel: re,
                  borderColor: 'transparent',
                  hoverLabel: { label: re },
                  icon: l.a.createElement($.a, { style: le.topIcons }),
                  onPress: g,
                  pullLeft: !0,
                  size: 'medium',
                }),
                style: le.appBar,
                withBackground: !1,
              }),
            ),
            l.a.createElement(
              F.a,
              { style: le.contentWrapper },
              l.a.createElement(
                F.a,
                { style: le.bgImage },
                l.a.createElement(
                  F.a,
                  { style: [le.topContent, { paddingTop: X.b.isMobileOS() ? '26px' : '50px' }] },
                  r
                    ? l.a.createElement(
                        F.a,
                        { style: le.contentBlueIcon },
                        l.a.createElement(te.a, { style: le.iconTwitterBlue }),
                      )
                    : l.a.createElement(x.b, { size: 'title1', weight: 'heavy' }, ne),
                  l.a.createElement(x.b, { size: 'headline1', style: le.subtitle }, ae),
                ),
              ),
              l.a.createElement(F.a, { style: le.content }, y),
            ),
            l.a.createElement(Q, { onClick: E }),
          )
        },
        le = N.a.create(function (e) {
          return {
            root: { minHeight: 400 },
            appBar: { zIndex: '2' },
            appBarContainer: { backgroundColor: e.colors.white },
            bgImage: { backgroundImage: 'url('.concat(G, ')'), backgroundRepeat: 'no-repeat' },
            iconTwitterBlue: { transform: [{ scale: 1.5 }], transformOrigin: 'bottom left' },
            illustration: {
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              borderRadius: 8,
              boxShadow: '0 2px 4px 1px rgb(1 1 1 / 9%)',
            },
            contentBlueIcon: { display: 'flex', justifyContent: 'flexStart', flexDirection: 'row' },
            topIcons: { color: '#000' },
            content: { paddingTop: 10, paddingLeft: 50, paddingRight: 50 },
            topContent: { paddingLeft: 50, paddingRight: 50 },
            contentWrapper: { height: 400, overflowY: 'auto' },
            subtitle: { color: '#000', marginTop: 18, marginBottom: 30 },
            featureRow: { flexDirection: 'row', marginTop: 20, maxWidth: '100%' },
            featureContent: { flexBasis: '84%', gap: '.1em' },
            feature: { flexBasis: '50%', flexDirection: 'row', maxWidth: '50%', gap: '.5em' },
            featureIcon: { color: e.colors.blue500, top: '.1em' },
            featureDescription: { lineHeight: '1.5em' },
            featureGroup: { marginBottom: 30 },
            labelWrapper: { display: 'flex', flexDirection: 'row' },
            labelStyle: { marginRight: '4px', backgroundColor: e.colors.gray50 },
            twitterLogo: { color: e.colors.blue500, transform: [{ scale: 1.5 }], transformOrigin: 'center center' },
            widthDivider: { width: 24 },
          }
        })
      t.default = oe
    },
    'ShJ/': function (e, t, a) {
      'use strict'
      var r = a('yiKp'),
        n = a.n(r),
        i = a('ERkP'),
        c = a.n(i),
        o = a('Lsrn'),
        l = a('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            n()(
              n()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [o.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            c.a.createElement(
              'g',
              null,
              c.a.createElement('path', {
                d: 'M20.472 14.738c-.388-1.808-2.24-3.517-3.908-4.246l-.474-4.307 1.344-2.016c.258-.387.28-.88.062-1.286-.218-.406-.64-.66-1.102-.66H7.54c-.46 0-.884.254-1.1.66-.22.407-.197.9.06 1.284l1.35 2.025-.42 4.3c-1.667.732-3.515 2.44-3.896 4.222-.066.267-.043.672.222 1.01.14.178.46.474 1.06.474h3.858l2.638 6.1c.12.273.39.45.688.45s.57-.177.688-.45l2.638-6.1h3.86c.6 0 .92-.297 1.058-.474.265-.34.288-.745.228-.988zM12 20.11l-1.692-3.912h3.384L12 20.11zm-6.896-5.413c.456-1.166 1.904-2.506 3.265-2.96l.46-.153.566-5.777-1.39-2.082h7.922l-1.39 2.08.637 5.78.456.153c1.355.45 2.796 1.78 3.264 2.96H5.104z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    VKnd: function (e, t, a) {
      'use strict'
      a.d(t, 'b', function () {
        return n
      }),
        a.d(t, 'a', function () {
          return i
        }),
        a.d(t, 'c', function () {
          return c
        })
      var r = 'https://'.concat(window.location.host),
        n = ''.concat(r, '/settings/subscription'),
        i = ''.concat(r, '/i/twitter_blue_sign_up'),
        c = ''.concat(i, '/welcome')
      ''.concat(i, '/unsuccessful')
    },
    hBoh: function (e, t, a) {
      'use strict'
      var r = a('yiKp'),
        n = a.n(r),
        i = a('ERkP'),
        c = a.n(i),
        o = a('Lsrn'),
        l = a('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            n()(
              n()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [o.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            c.a.createElement(
              'g',
              null,
              c.a.createElement('path', {
                d: 'M16.5 2h-9C6.26 2 5.25 3.01 5.25 4.25v15.5C5.25 20.99 6.26 22 7.5 22h9c1.24 0 2.25-1.01 2.25-2.25V4.25C18.75 3.01 17.74 2 16.5 2zm-9 1.5h9c.413 0 .75.337.75.75v11.865H6.75V4.25c0-.413.337-.75.75-.75zm9 17h-9c-.413 0-.75-.337-.75-.75v-2.135h10.5v2.135c0 .413-.337.75-.75.75z',
              }),
              c.a.createElement('path', {
                d: 'M12.583 18.322h-1.166c-.414 0-.75.336-.75.75s.336.75.75.75h1.166c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    su2V: function (e, t, a) {
      'use strict'
      a.d(t, 'l', function () {
        return h
      }),
        a.d(t, 'k', function () {
          return g
        }),
        a.d(t, 'f', function () {
          return E
        }),
        a.d(t, 'e', function () {
          return v
        }),
        a.d(t, 'j', function () {
          return y
        }),
        a.d(t, 'i', function () {
          return S
        }),
        a.d(t, 'h', function () {
          return C
        }),
        a.d(t, 'g', function () {
          return _
        }),
        a.d(t, 'd', function () {
          return U
        }),
        a.d(t, 'b', function () {
          return O
        }),
        a.d(t, 'a', function () {
          return T
        }),
        a.d(t, 'c', function () {
          return I
        })
      var r = a('KEM+'),
        n = a.n(r),
        i = a('yiKp'),
        c = a.n(i),
        o = (a('yH/f'), a('hBpG'), a('7x/C'), a('jQ3i'), a('x4t0'), a('JtPf'), a('oEOe')),
        l = a('Ssj5'),
        s = a('kGix'),
        u = 'subscriptionPayments',
        d = Object.freeze({
          REQUEST: 'rweb/subscriptionPayments/FETCH_SUBSCRIPTION_PRODUCT_DETAILS_REQUEST',
          SUCCESS: 'rweb/subscriptionPayments/FETCH_SUBSCRIPTION_PRODUCT_DETAILS_SUCCESS',
          FAILURE: 'rweb/subscriptionPayments/FETCH_SUBSCRIPTION_PRODUCT_DETAILS_FAILURE',
        }),
        m = Object.freeze({
          REQUEST: 'rweb/subscriptionPayments/FETCH_SUBSCRIPTION_PRODUCT_CHECKOUT_URL_REQUEST',
          SUCCESS: 'rweb/subscriptionPayments/FETCH_SUBSCRIPTION_PRODUCT_CHECKOUT_URL_SUCCESS',
          FAILURE: 'rweb/subscriptionPayments/FETCH_SUBSCRIPTION_PRODUCT_CHECKOUT_URL_FAILURE',
        }),
        p = Object.freeze({
          REQUEST: 'rweb/subscriptionPayments/FETCH_PRODUCT_SUBSCRIPTIONS_REQUEST',
          SUCCESS: 'rweb/subscriptionPayments/FETCH_PRODUCT_SUBSCRIPTIONS_SUCCESS',
          FAILURE: 'rweb/subscriptionPayments/FETCH_PRODUCT_SUBSCRIPTIONS_FAILURE',
        }),
        f = Object.freeze({
          REQUEST: 'rweb/subscriptionPayments/FETCH_SUBSCRIPTION_PRODUCT_CUSTOMER_PORTAL_URL_REQUEST',
          SUCCESS: 'rweb/subscriptionPayments/FETCH_SUBSCRIPTION_PRODUCT_CUSTOMER_PORTAL_URL_SUCCESS',
          FAILURE: 'rweb/subscriptionPayments/FETCH_SUBSCRIPTION_PRODUCT_CUSTOMER_PORTAL_URL_FAILURE',
        }),
        b = { products: {}, checkoutUrls: {}, productSubscriptions: { fetchStatus: s.a.NONE }, customerPortalUrls: {} }
      var h = function (e, t) {
          var a = e[u].products[t]
          return (null == a ? void 0 : a.fetchStatus) || s.a.NONE
        },
        g = function (e, t) {
          var a = e[u].products[t]
          return null == a ? void 0 : a.details
        },
        E = function (e, t) {
          var a = e[u].checkoutUrls[t]
          return (null == a ? void 0 : a.fetchStatus) || s.a.NONE
        },
        v = function (e, t) {
          var a = e[u].checkoutUrls[t]
          return null == a ? void 0 : a.checkoutUrl
        },
        y = function (e) {
          return e[u].productSubscriptions.fetchStatus
        },
        S = function (e, t) {
          return (e[u].productSubscriptions.subscriptions || []).find(function (e) {
            var a, r
            return (
              (null === (a = e.product) || void 0 === a ? void 0 : a.rest_id) &&
              (null === (r = e.product) || void 0 === r ? void 0 : r.rest_id.includes(t)) &&
              'Inactive' !== e.state
            )
          })
        },
        C = function (e, t) {
          var a = e[u].customerPortalUrls[t]
          return (null == a ? void 0 : a.fetchStatus) || s.a.NONE
        },
        _ = function (e, t) {
          var a = e[u].customerPortalUrls[t]
          return null == a ? void 0 : a.customerPortalUrl
        },
        U = function (e) {
          return function (t, a, r) {
            var n = r.api,
              i = Object(o.b)(t, {
                params: { id: e },
                request: n.SubscriptionPayments.fetchSubscriptionProductDetails,
              }),
              c = h(a(), e)
            return c !== s.a.NONE && c !== s.a.FAILED
              ? Promise.resolve()
              : i({ actionTypes: d, context: 'FETCH_SUBSCRIPTION_PRODUCT_DETAILS', meta: { id: e } })
          }
        },
        O = function (e, t, a, r) {
          return function (n, i, c) {
            var l = c.api,
              u = Object(o.b)(n, {
                params: { external_product_id: t, success_url: a, cancel_url: r },
                request: l.SubscriptionPayments.fetchSubscriptionProductCheckoutUrl,
              }),
              d = E(i(), e)
            return d !== s.a.NONE && d !== s.a.FAILED
              ? Promise.resolve()
              : u({ actionTypes: m, context: 'FETCH_SUBSCRIPTION_PRODUCT_CHECKOUT_URL', meta: { id: e } })
          }
        },
        T = function () {
          return function (e, t, a) {
            var r = a.api,
              n = Object(o.b)(e, { params: {}, request: r.SubscriptionPayments.fetchProductSubscriptions }),
              i = y(t())
            return i !== s.a.NONE && i !== s.a.FAILED
              ? Promise.resolve()
              : n({ actionTypes: p, context: 'FETCH_PRODUCT_SUBSCRIPTIONS', meta: {} })
          }
        },
        I = function (e, t) {
          return function (a, r, n) {
            var i = n.api,
              c = Object(o.b)(a, {
                params: { return_url: t },
                request: i.SubscriptionPayments.fetchSubscriptionProductCustomerPortalUrl,
              }),
              l = C(r(), e)
            return l !== s.a.NONE && l !== s.a.FAILED
              ? Promise.resolve()
              : c({ actionTypes: f, context: 'FETCH_SUBSCRIPTION_PRODUCT_CUSTOMER_PORTAL_URL', meta: { id: e } })
          }
        }
      l.a.register(
        n()({}, u, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case d.REQUEST:
              var a = t.meta.id
              return c()(
                c()({}, e),
                {},
                { products: c()(c()({}, e.products), {}, n()({}, a, { fetchStatus: s.a.LOADING })) },
              )
            case d.SUCCESS:
              var r = t.meta.id
              return c()(
                c()({}, e),
                {},
                { products: c()(c()({}, e.products), {}, n()({}, r, { fetchStatus: s.a.LOADED, details: t.payload })) },
              )
            case d.FAILURE:
              var i = t.meta.id
              return c()(
                c()({}, e),
                {},
                { products: c()(c()({}, e.products), {}, n()({}, i, { fetchStatus: s.a.FAILED, error: t.payload })) },
              )
            case m.REQUEST:
              var o = t.meta.id
              return c()(
                c()({}, e),
                {},
                { checkoutUrls: c()(c()({}, e.checkoutUrls), {}, n()({}, o, { fetchStatus: s.a.LOADING })) },
              )
            case m.SUCCESS:
              var l = t.meta.id
              return c()(
                c()({}, e),
                {},
                {
                  checkoutUrls: c()(
                    c()({}, e.checkoutUrls),
                    {},
                    n()({}, l, { fetchStatus: s.a.LOADED, checkoutUrl: t.payload }),
                  ),
                },
              )
            case m.FAILURE:
              var u = t.meta.id
              return c()(
                c()({}, e),
                {},
                {
                  checkoutUrls: c()(
                    c()({}, e.checkoutUrls),
                    {},
                    n()({}, u, { fetchStatus: s.a.FAILED, error: t.payload }),
                  ),
                },
              )
            case p.REQUEST:
              return c()(c()({}, e), {}, { productSubscriptions: { fetchStatus: s.a.LOADING } })
            case p.SUCCESS:
              return c()(
                c()({}, e),
                {},
                { productSubscriptions: { fetchStatus: s.a.LOADED, subscriptions: t.payload } },
              )
            case p.FAILURE:
              return c()(c()({}, e), {}, { productSubscriptions: { fetchStatus: s.a.FAILED, error: t.payload } })
            case f.REQUEST:
              var h = t.meta.id
              return c()(
                c()({}, e),
                {},
                {
                  customerPortalUrls: c()(c()({}, e.customerPortalUrls), {}, n()({}, h, { fetchStatus: s.a.LOADING })),
                },
              )
            case f.SUCCESS:
              var g = t.meta.id
              return c()(
                c()({}, e),
                {},
                {
                  customerPortalUrls: c()(
                    c()({}, e.customerPortalUrls),
                    {},
                    n()({}, g, { fetchStatus: s.a.LOADED, customerPortalUrl: t.payload }),
                  ),
                },
              )
            case f.FAILURE:
              var E = t.meta.id
              return c()(
                c()({}, e),
                {},
                {
                  customerPortalUrls: c()(
                    c()({}, e.customerPortalUrls),
                    {},
                    n()({}, E, { fetchStatus: s.a.FAILED, error: t.payload }),
                  ),
                },
              )
            default:
              return e
          }
        }),
      )
    },
    tH6R: function (e, t, a) {
      'use strict'
      var r = a('yiKp'),
        n = a.n(r),
        i = a('ERkP'),
        c = a.n(i),
        o = a('Lsrn'),
        l = a('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            n()(
              n()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [o.a.root, e.style],
                viewBox: '0 0 76 24',
              },
            ),
            c.a.createElement(
              'g',
              null,
              c.a.createElement('path', {
                d: 'M15.543 3H2.75c-.414 0-.75.336-.75.75v16.5c0 .414.336.75.75.75h12.886c1.534 0 2.854-.225 3.917-.72 1.048-.481 1.866-1.147 2.381-2.025.489-.833.732-1.749.732-2.732 0-1.25-.356-2.336-1.128-3.184-.317-.348-.69-.635-1.113-.867.302-.21.572-.455.809-.738.675-.806 1.014-1.754 1.014-2.813 0-1.49-.605-2.722-1.786-3.626C19.28 3.39 17.598 3 15.543 3zm.543 5.718c.498-.059.972-.189 1.414-.381l-.001.002c-.329.485-.747.911-1.228 1.254.005.104.007.209.007.313 0 3.202-2.476 6.895-7.005 6.895-1.39 0-2.684-.401-3.773-1.089.193.022.389.034.588.034 1.153 0 2.215-.388 3.058-1.038-1.078-.019-1.987-.72-2.3-1.682.15.028.305.043.463.043.224 0 .441-.029.648-.084-1.127-.223-1.975-1.202-1.975-2.376v-.031c.332.181.711.29 1.115.303-.66-.434-1.095-1.177-1.095-2.017 0-.443.122-.859.333-1.218 1.214 1.466 3.028 2.431 5.075 2.532-.041-.178-.064-.362-.064-.551 0-1.339 1.102-2.424 2.462-2.424.708 0 1.348.294 1.797.765.561-.108 1.088-.31 1.563-.588-.183.563-.573 1.039-1.082 1.338zm14.776 12.285H25.64V2.625h5.222v18.378zm10.35.482c-2.163 0-3.844-.54-5.044-1.622-1.183-1.082-1.775-2.62-1.775-4.614V8.33h5.222v5.626c0 1.37.33 2.366.99 2.99.658.627 1.57.94 2.737.94 1.436 0 2.535-.39 3.295-1.167.76-.795 1.14-1.8 1.14-3.017V8.33H53v12.673h-5.12v-2.89c-.56 1.1-1.43 1.936-2.612 2.51-1.183.575-2.535.862-4.056.862zm33.311-5.729H60.53c.186.794.7 1.41 1.546 1.85.845.44 1.943.66 3.295.66 1 0 1.91-.152 2.74-.457.844-.322 1.495-.76 1.95-1.32l3.956 1.725c-.896 1.065-2.096 1.876-3.6 2.433-1.487.558-3.245.837-5.273.837-1.994 0-3.71-.262-5.146-.786-1.436-.542-2.543-1.32-3.32-2.333-.76-1.03-1.14-2.248-1.14-3.65 0-1.42.388-2.645 1.165-3.676.777-1.03 1.876-1.816 3.295-2.356 1.437-.558 3.11-.837 5.02-.837 1.994 0 3.7.296 5.12.887 1.437.575 2.527 1.403 3.27 2.485.744 1.08 1.116 2.373 1.116 3.877v.66l-.001.001zM69.35 13.17c-.032-.76-.455-1.377-1.266-1.85-.794-.473-1.825-.71-3.093-.71-1.25 0-2.272.228-3.066.684-.794.457-1.267 1.082-1.42 1.876h8.847-.002z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 76, height: 24 }), (t.a = s)
    },
    yEpk: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'TwitterBlueSignUpSuccess', function () {
          return R
        })
      var r = a('ddV6'),
        n = a.n(r),
        i = a('ERkP'),
        c = a.n(i),
        o = a('v6aA'),
        l = a('gUb7'),
        s = a('rxPX'),
        u = Object(s.a)()
          .propsFromActions(function () {
            return { fetchUserClaims: l.a }
          })
          .withAnalytics({ page: 'subscriptions', section: 'welcome' }),
        d = a('v//M'),
        m = a('3XMw'),
        p = a.n(m),
        f = a('hOZg'),
        b = a.p + 'twitter-blue-welcome.f64637a5.png',
        h = a('zCf4'),
        g = a('aITJ'),
        E = a('t62R'),
        v = a('/yvb'),
        y = a('sgih'),
        S = a('rHpw'),
        C = a('U+bB'),
        _ = a('MWbm'),
        U = p.a.ia5e7487,
        O = p.a.a219e217,
        T = p.a.f0e32de5,
        I = p.a.gc6e8c17
      function R(e) {
        var t = e.analytics,
          a = e.fetchUserClaims,
          r = Object(h.f)(),
          i = c.a.useContext(o.a).userClaims,
          l = c.a.useState('loading'),
          s = n()(l, 2),
          u = s[0],
          m = s[1]
        function p() {
          var e = 0
          m('loading')
          var t = setInterval(function () {
            i.isTwitterBlueSubscriber() && (m('loaded'), clearInterval(t)),
              e > 5 ? (m('failed'), clearInterval(t)) : ((e += 1), a({}))
          }, 1e3)
        }
        function S() {
          r.push('/home')
        }
        function R() {
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(E.b, { size: 'title2', style: w.title, weight: 'heavy' }, T),
            c.a.createElement(E.b, { style: w.subtitle }, I),
            c.a.createElement(v.a, { onPress: S, size: 'xLarge', type: 'primaryFilled' }, O),
          )
        }
        return (
          c.a.useEffect(function () {
            t.scribe({ action: 'impression' })
          }, []),
          c.a.useEffect(function () {
            p()
          }, []),
          c.a.createElement(
            y.a,
            { allowBackNavigation: !0, enableMaskForDismiss: !0, onMaskClick: S, style: w.root, type: 'full' },
            c.a.createElement(
              _.a,
              { style: w.topBar },
              c.a.createElement(v.a, {
                accessibilityLabel: U,
                hoverLabel: { label: U },
                icon: c.a.createElement(f.a, { style: w.topIcons }),
                onPress: S,
                pullRight: !0,
                size: 'medium',
                type: 'brandText',
              }),
            ),
            c.a.createElement(
              _.a,
              { style: g.b.isMobileOS() ? w.contentSmall : w.content },
              c.a.createElement(C.a, { source: b, style: w.img }),
              c.a.createElement(d.a, { fetchStatus: u, onRequestRetry: p, render: R, retryable: !0 }),
            ),
          )
        )
      }
      var w = S.a.create(function (e) {
          return {
            root: { minHeight: 600 },
            topBar: { alignItems: 'flex-start', flexDirection: 'row', paddingTop: 15, paddingLeft: 15 },
            topIcons: { color: '#000' },
            spacer: { width: e.spaces.space24 },
            content: { paddingTop: 20, paddingLeft: 100, paddingRight: 100, overflowY: 'auto' },
            contentSmall: { paddingTop: 20, paddingLeft: 20, paddingRight: 20, overflowY: 'auto' },
            title: { marginBottom: 8 },
            subtitle: { color: e.colors.gray700, marginBottom: 28 },
            img: { height: 150, width: '100%', marginBottom: 28 },
            closeButton: { paddingTop: 15 },
          }
        }),
        P = u(R)
      t.default = P
    },
  },
])
//# sourceMappingURL=WIPED
