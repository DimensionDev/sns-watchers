;(window.webpackJsonp = window.webpackJsonp || []).push([
  [64],
  {
    CBsz: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'MomentAnalyticsScreen', function () {
          return H
        })
      r('OZaJ')
      var n = r('VrFO'),
        a = r.n(n),
        c = r('Y9Ll'),
        o = r.n(c),
        i = r('5Yy7'),
        l = r.n(i),
        s = r('N+ot'),
        u = r.n(s),
        p = r('AuHH'),
        d = r.n(p),
        f = (r('6U7i'), r('ERkP')),
        b = (r('WNMA'), r('KqXw'), r('n4jD')),
        m = r('rxPX'),
        y = r('0KEI'),
        g = function (e, t) {
          return t.match.params.momentId
        },
        h = function (e) {
          return function (t, r, n) {
            var a = n.api,
              c = Object(b.c)(r())
            return a.Moments.analytics({ moment_id: e.momentId, teamUserId: c })
          }
        },
        O = Object(m.a)()
          .propsFromState(function () {
            return { momentId: g }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(y.createLocalApiErrorHandlerWithContextFactory)(
                'MOMENTS_ANALYTICS_SCREEN',
              ),
              fetchAnalytics: h,
            }
          }),
        v = r('KEM+'),
        E = r.n(v),
        S = r('k49u'),
        P = r('LVU8'),
        w = r('jHSc'),
        j = r('MWbm'),
        C = r('t62R'),
        _ = r('MtXG'),
        R = r('855f'),
        U = r('rHpw'),
        T = r('7JQg'),
        L = r('3XMw'),
        D = r.n(L)
      function I(e) {
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
          var r,
            n = d()(e)
          if (t) {
            var a = d()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return u()(this, r)
        }
      }
      var k = D.a.e2e35f0d,
        A = D.a.icfe5fe3,
        F = D.a.a52a1fb9,
        x = D.a.if221231,
        H = (function (e) {
          l()(r, e)
          var t = I(r)
          function r(e) {
            var n
            return a()(this, r), ((n = t.call(this, e)).state = {}), n
          }
          return (
            o()(r, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this,
                    t = this.props,
                    r = t.createLocalApiErrorHandler,
                    n = t.fetchAnalytics,
                    a = t.momentId
                  n({ momentId: a })
                    .then(function (t) {
                      e.setState({ momentAnalytics: t })
                    })
                    .catch(
                      r(
                        (function (e) {
                          var t = 'string' == typeof e ? '/i/moments/'.concat(e) : '/i/explore'
                          return E()({}, S.a.ClientNotPermitted, {
                            customAction: function () {
                              Object(P.d)(t, { statusCode: 401 })
                            },
                          })
                        })(a),
                      ),
                    )
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.history,
                    r = e.momentId,
                    n = this.state.momentAnalytics,
                    a = n || {},
                    c = a.title,
                    o = void 0 === c ? '' : c,
                    i = a.analytics,
                    l = (i = void 0 === i ? {} : i).capsule_opens,
                    s = void 0 === l ? 0 : l,
                    u = i.capsule_opens_uniques,
                    p = void 0 === u ? 0 : u,
                    d = i.completion_rate,
                    b = void 0 === d ? 0 : d,
                    m = i.shares_from_capsule,
                    y = void 0 === m ? 0 : m,
                    g = r ? '/i/moments/'.concat(String(r)) : '/i/explore',
                    h = D.a.ab0f5140
                  return f.createElement(
                    f.Fragment,
                    null,
                    n &&
                      f.createElement(
                        w.b,
                        { backButtonType: 'close', backLocation: g, documentTitle: h, history: t, title: h },
                        f.createElement(
                          j.a,
                          { style: B.container },
                          f.createElement(
                            j.a,
                            { style: B.titleTextContainer },
                            f.createElement(C.b, { style: B.titleText, weight: 'bold' }, o),
                          ),
                          f.createElement(
                            _.a.Group,
                            null,
                            f.createElement(
                              j.a,
                              null,
                              f.createElement(
                                j.a,
                                { style: B.analytic },
                                f.createElement(
                                  _.a,
                                  null,
                                  f.createElement(
                                    D.a.I18NFormatMessage,
                                    { $i18n: 'gfc363c4' },
                                    f.createElement(
                                      _.a.Value,
                                      null,
                                      D.a.f22fc1cb({ formattedCount: R.a.getFormattedCount(Number(s)) }),
                                    ),
                                    f.createElement(_.a.Value, null, D.a.c71523ef({ count: s })),
                                  ),
                                ),
                                f.createElement(C.b, { color: 'gray700' }, k),
                              ),
                              f.createElement(
                                j.a,
                                { style: B.analytic },
                                f.createElement(
                                  _.a,
                                  null,
                                  f.createElement(
                                    D.a.I18NFormatMessage,
                                    { $i18n: 'e79f5450' },
                                    f.createElement(
                                      _.a.Value,
                                      null,
                                      D.a.eca2dfe8({ formattedCount: R.a.getFormattedCount(Number(p)) }),
                                    ),
                                    f.createElement(_.a.Value, null, D.a.a77bd6f4({ count: p })),
                                  ),
                                ),
                                f.createElement(C.b, { color: 'gray700' }, A),
                              ),
                              f.createElement(
                                j.a,
                                { style: B.analytic },
                                f.createElement(
                                  _.a,
                                  null,
                                  f.createElement(
                                    D.a.I18NFormatMessage,
                                    { $i18n: 'fcbb0929' },
                                    f.createElement(
                                      _.a.Value,
                                      null,
                                      D.a.cb22dca4({ formattedCount: R.a.getFormattedCount(Number(y)) }),
                                    ),
                                    f.createElement(_.a.Value, null, D.a.a30d7c4d({ count: y })),
                                  ),
                                ),
                                f.createElement(C.b, { color: 'gray700' }, F),
                              ),
                              f.createElement(
                                j.a,
                                { style: B.analytic },
                                f.createElement(
                                  _.a,
                                  null,
                                  f.createElement(
                                    D.a.I18NFormatMessage,
                                    { $i18n: 'afba3eba' },
                                    f.createElement(
                                      _.a.Value,
                                      null,
                                      D.a.e5463c29({ formattedCount: R.a.getFormattedCount(b) }),
                                    ),
                                    f.createElement(_.a.Value, null, D.a.j20f66ed({ count: b })),
                                  ),
                                ),
                                f.createElement(C.b, { color: 'gray700' }, x),
                              ),
                            ),
                          ),
                        ),
                      ),
                  )
                },
              },
            ]),
            r
          )
        })(f.Component),
        B = U.a.create(function (e) {
          return {
            analytic: { marginBottom: e.spaces.space16 },
            container: { height: '100%', padding: 20 },
            titleText: { fontSize: e.fontSizes.title4 },
            titleTextContainer: { marginBottom: e.spaces.space16 },
          }
        })
      t.default = Object(T.c)({ page: 'moments_analytics' })(O(H))
    },
    DBID: function (e, t, r) {
      'use strict'
      r.r(t)
      var n = r('ERkP'),
        a = r('3XMw'),
        c = r.n(a),
        o = r('hOZg'),
        i = r('Ty5D'),
        l = r('aITJ'),
        s = r('MWbm'),
        u = r('sgih'),
        p = r('/yvb'),
        d = r('t62R'),
        f = r('rHpw'),
        b = c.a.ia5e7487,
        m = c.a.a893d601,
        y = c.a.fce91ab4,
        g = c.a.gc7637d3
      t.default = function () {
        var e = Object(i.g)()
        function t() {
          e.push('/home')
        }
        return n.createElement(
          u.a,
          { allowBackNavigation: !0, enableMaskForDismiss: !0, onMaskClick: t, style: h.root, type: 'full' },
          n.createElement(
            s.a,
            { style: h.topBar },
            n.createElement(p.a, {
              accessibilityLabel: b,
              hoverLabel: { label: b },
              icon: n.createElement(o.a, { style: h.topIcons }),
              onPress: t,
              pullRight: !0,
              size: 'medium',
              type: 'brandText',
            }),
          ),
          n.createElement(
            s.a,
            { style: l.b.isMobileOS() ? h.contentSmall : h.content },
            n.createElement(d.b, { size: 'title2', style: h.title, weight: 'heavy' }, y),
            n.createElement(d.b, { style: h.subtitle }, g),
            n.createElement(p.a, { onPress: t, size: 'xLarge', type: 'primaryFilled' }, m),
          ),
        )
      }
      var h = f.a.create(function (e) {
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
    OzKQ: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'getReferringPage', function () {
          return $
        }),
        r.d(t, 'TwitterBlueSignUpScreen', function () {
          return ee
        })
      var n = r('ddV6'),
        a = r.n(n),
        c = (r('M+/F'), r('1t7P'), r('jQ/y'), r('z84I'), r('ERkP')),
        o = r('v6aA'),
        i = r('XOb8'),
        l = r('rxPX'),
        s = r('su2V'),
        u = Object(l.a)()
          .propsFromState(function () {
            return {
              productDetailsFetchStatus: function (e) {
                return Object(s.l)(e, i.d)
              },
              productDetails: function (e) {
                return Object(s.k)(e, i.d)
              },
              checkoutUrlFetchStatus: function (e) {
                return Object(s.f)(e, i.d)
              },
              checkoutUrl: function (e) {
                return Object(s.e)(e, i.d)
              },
            }
          })
          .propsFromActions(function () {
            return { fetchSubscriptionProductDetails: s.d, fetchSubscriptionProductCheckoutUrl: s.b }
          })
          .withAnalytics({ page: 'subscriptions', section: 'marketing' }),
        p = r('v//M'),
        d = r('3XMw'),
        f = r.n(d),
        b = r.p + 'undo_tweet_illustration.0e0907c5.svg',
        m = (r('+KXO'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn'), r('KEM+')),
        y = r.n(m),
        g = r('Lsrn'),
        h = r('k/Ka')
      function O(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function v(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? O(Object(r), !0).forEach(function (t) {
                y()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : O(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var E = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(h.a)(
          'svg',
          v(
            v({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [g.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          c.createElement(
            'g',
            null,
            c.createElement('path', {
              d: 'M22.906 6.356c-.26-.124-.568-.088-.794.093l-2.737 2.207V5.283c0-1.24-1.01-2.25-2.25-2.25H3.167c-1.24 0-2.25 1.01-2.25 2.25v14.5c0 1.24 1.01 2.25 2.25 2.25h13.958c1.24 0 2.25-1.01 2.25-2.25V16.41l2.737 2.207c.136.11.303.166.47.166.11 0 .222-.024.324-.073.26-.125.427-.388.427-.677v-11c0-.29-.166-.552-.427-.677zm-5.03 13.427c0 .413-.338.75-.75.75H3.165c-.412 0-.75-.337-.75-.75v-14.5c0-.413.338-.75.75-.75h13.96c.412 0 .75.337.75.75v14.5zm3.957-3.318l-2.458-1.983v-3.897l2.458-1.983v7.863z',
            }),
            c.createElement('path', {
              d: 'M10.146 17.395c-2.68 0-4.86-2.18-4.86-4.86s2.18-4.862 4.86-4.862 4.86 2.18 4.86 4.86-2.18 4.862-4.86 4.862zm0-8.223c-1.853 0-3.36 1.508-3.36 3.36s1.508 3.362 3.36 3.362c1.854 0 3.36-1.508 3.36-3.36S12 9.17 10.147 9.17z',
            }),
          ),
        )
      }
      E.metadata = { width: 24, height: 24 }
      var S = E,
        P = r('ShJ/'),
        w = r('g7Ra'),
        j = r('pu5c'),
        C = r('5VjN'),
        _ = r('JzwX')
      function R(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function U(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? R(Object(r), !0).forEach(function (t) {
                y()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : R(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var T = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(h.a)(
          'svg',
          U(
            U({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [g.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          c.createElement(
            'g',
            null,
            c.createElement('path', {
              d: 'M19.745 1H8.503C7.261 1 6.248 2.014 6.248 3.258v1.385H4.255C3.012 4.643 2 5.657 2 6.901v15.345c0 .281.16.542.411.672s.551.1.782-.06l6.683-4.877 6.683 4.877c.13.09.281.141.441.141.12 0 .23-.03.341-.08.251-.13.411-.391.411-.672v-5.259l3.046 2.218c.14.1.291.151.451.151.11 0 .231-.03.341-.09.25-.122.41-.383.41-.664V3.258C22 2.014 20.988 1 19.745 1zm-3.497 19.771l-5.471-3.994-.461-.331c-.261-.191-.621-.191-.882 0l-3.166 2.308-2.765 2.017V6.901c0-.412.341-.753.752-.753h11.242c.411 0 .752.341.752.753v13.87zm4.249-3.653l-2.745-1.997v-8.22c0-1.244-1.012-2.258-2.255-2.258H7.752V3.258c0-.412.331-.753.752-.753h11.242c.411 0 .752.341.752.753v13.86z',
            }),
            c.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
          ),
        )
      }
      T.metadata = { width: 24, height: 24 }
      var L = T,
        D = r('hBoh'),
        I = r('vFjZ'),
        k = function (e, t, r) {
          var n = [{ icon: S, heading: f.a.a99d8e60, description: f.a.gdd8144c, platformAvailabilityLabel: ['Web'] }]
          return (
            r &&
              n.push({
                icon: P.a,
                heading: f.a.e4b3f520,
                description: f.a.h73af45f,
                platformAvailabilityLabel: ['iOS'],
              }),
            [
              {
                blurb: f.a.c4debbdf,
                features: [
                  [
                    {
                      icon: w.a,
                      heading: f.a.de43eaf2,
                      description: f.a.g52ab673,
                      platformAvailabilityLabel: ['iOS', 'Android', 'Web'],
                    },
                    { illustrationName: b },
                  ],
                ],
              },
              {
                blurb: f.a.ae3f4564,
                features: [
                  [
                    {
                      icon: j.a,
                      heading: f.a.i65802df,
                      description: f.a.h0f8563b,
                      platformAvailabilityLabel: ['iOS', 'Web'],
                    },
                    {
                      icon: C.a,
                      heading: f.a.b7fa0cfd,
                      description: f.a.a7f3dfc9,
                      platformAvailabilityLabel: e ? ['iOS', 'Android', 'Web'] : ['Android', 'Web'],
                    },
                  ],
                  [
                    {
                      icon: _.a,
                      heading: f.a.b62d6e4c,
                      description: f.a.a24965fb,
                      platformAvailabilityLabel: ['iOS', 'Android', 'Web'],
                    },
                  ],
                ],
              },
              {
                blurb: f.a.cd2b9647,
                features: [
                  [
                    {
                      icon: L,
                      heading: f.a.hdc87500,
                      description: f.a.gaf181e0,
                      platformAvailabilityLabel: t ? ['iOS', 'Android', 'Web'] : ['iOS', 'Android'],
                    },
                    { icon: P.a, heading: f.a.i9223e6f, description: f.a.c1935a33, platformAvailabilityLabel: ['iOS'] },
                  ],
                  [
                    { icon: D.a, heading: f.a.gc8d916e, description: f.a.a353aeee, platformAvailabilityLabel: ['iOS'] },
                    { icon: I.a, heading: f.a.f39aef7b, description: f.a.b4a97be8, platformAvailabilityLabel: ['iOS'] },
                  ],
                ],
              },
              { blurb: f.a.h52ee955, features: [n] },
            ]
          )
        },
        A = r.p + 'twitter-blue-wave.d1b48db5.svg',
        F = r('aITJ'),
        x = r('MWbm'),
        H = r('t62R'),
        B = r('Wms4'),
        M = r('/yvb'),
        N = r('sgih'),
        z = r('xKuM'),
        V = r('rHpw'),
        W = r('hOZg'),
        K = r('lUZE'),
        X = r('tH6R'),
        Q = r('Ty5D'),
        Z = f.a.b9238e88,
        J = f.a.a0b7009f,
        G = {
          USD: f.a.d0783e70,
          EUR: f.a.e8c823d2,
          GBP: f.a.gbf0e6c6,
          CAD: f.a.j16ccfa2,
          AUD: f.a.c93cb976,
          NZD: f.a.c32b252a,
        },
        q = f.a.b08821f3,
        Y = f.a.ed21f885,
        $ = function (e) {
          var t,
            r,
            n,
            a = null === (t = e.query) || void 0 === t ? void 0 : t.referring_page
          return Array.isArray(a)
            ? ''
            : a ||
                (null == e || null === (r = e.state) || void 0 === r || null === (n = r.previousPath) || void 0 === n
                  ? void 0
                  : n.slice(1)) ||
                ''
        },
        ee = function (e) {
          var t = e.analytics,
            r = e.checkoutUrl,
            n = e.checkoutUrlFetchStatus,
            l = e.fetchSubscriptionProductCheckoutUrl,
            s = e.fetchSubscriptionProductDetails,
            u = e.productDetails,
            d = e.productDetailsFetchStatus,
            b = c.useContext(o.a).featureSwitches,
            m = b.isTrue('subscriptions_twitter_blue_logo_enabled'),
            y = b.isTrue('subscriptions_top_articles_on_ios_enabled'),
            g = b.isTrue('subscriptions_feature_1002'),
            h = !b.isTrue('dm_conversation_labels_pinned_enabled') && b.isTrue('subscriptions_feature_labs_1001'),
            O = Object(Q.g)(),
            v = Object(Q.h)(),
            E = c.useState(!1),
            S = a()(E, 2),
            P = S[0],
            w = S[1],
            j = function () {
              t.scribe({ action: 'start', element: 'fetch_product', data: { referring_page: $(v) } }),
                s(i.d)
                  .then(function () {
                    t.scribe({ action: 'success', element: 'fetch_product', data: { referring_page: $(v) } })
                  })
                  .catch(function () {
                    t.scribe({ action: 'failure', element: 'fetch_product', data: { referring_page: $(v) } })
                  })
            }
          c.useEffect(
            function () {
              j()
            },
            [s],
          ),
            c.useEffect(function () {
              var e = Date.now()
              return (
                t.scribe({ action: 'impression', data: { referring_page: $(v) } }),
                function () {
                  var r = Math.floor((Date.now() - e) / 1e3)
                  t.scribe({
                    action: 'end_session',
                    data: { end_session_reason: P ? 'purchased' : 'page_left', session_duration_in_s: r },
                  })
                }
              )
            }, [])
          var C = function () {
              return O.goBack()
            },
            _ = function () {
              if ((w(!0), t.scribe({ action: 'click', element: 'subscribe', data: { referring_page: $(v) } }), u)) {
                var e,
                  r = null != u && null !== (e = u.prices) && void 0 !== e && e.length ? u.prices[0] : null,
                  n = null == r ? void 0 : r.external_price_id
                n && l(i.d, n, i.c, i.a)
              }
            },
            R = function (e, t) {
              var r = e.map(function (e, t) {
                return (function (e, t) {
                  if (e.illustrationName) {
                    var r = F.b.isMobileOS() ? '100px' : 'initial'
                    return c.createElement(
                      c.Fragment,
                      { key: e.illustrationName },
                      c.createElement(x.a, { style: te.widthDivider }),
                      c.createElement(x.a, {
                        style: [
                          te.feature,
                          te.illustration,
                          {
                            backgroundImage: 'url('.concat(null == e ? void 0 : e.illustrationName, ')'),
                            maxHeight: r,
                          },
                        ],
                      }),
                    )
                  }
                  if (e.icon) {
                    var n = e.icon
                    return c.createElement(
                      x.a,
                      { key: t, style: te.feature, testID: 'feature' },
                      c.createElement(x.a, null, c.createElement(n, { style: te.featureIcon })),
                      c.createElement(
                        x.a,
                        { style: te.featureContent },
                        c.createElement(H.b, { size: 'body', weight: 'bold' }, e.heading),
                        c.createElement(
                          H.b,
                          { color: 'gray700', size: 'body', style: te.featureDescription },
                          e.description,
                        ),
                        c.createElement(
                          x.a,
                          { style: te.labelWrapper },
                          e.platformAvailabilityLabel.map(function (e) {
                            return c.createElement(
                              B.a,
                              { background: 'maskColor', bold: !0, key: e, style: te.labelStyle },
                              c.createElement(H.b, { color: 'gray700' }, e),
                            )
                          }),
                        ),
                      ),
                    )
                  }
                  return null
                })(e, t)
              })
              return c.createElement(x.a, { key: t, style: te.featureRow, testID: 'featureRow' }, r)
            },
            U = k(y, g, h).map(function (e, t) {
              return (function (e, t) {
                var r = e.features.map(function (e, t) {
                  return R(e, t)
                })
                return c.createElement(
                  x.a,
                  { key: t, style: te.featureGroup },
                  c.createElement(H.b, { size: 'title3', testID: 'featureGroup', weight: 'heavy' }, e.blurb),
                  r,
                )
              })(e, t)
            })
          return c.createElement(
            N.a,
            {
              allowBackNavigation: !0,
              enableMaskForDismiss: !0,
              onMaskClick: C,
              style: te.root,
              type: 'full',
              withMask: !0,
            },
            c.createElement(
              x.a,
              { style: te.appBarContainer },
              c.createElement(z.a, {
                centeredLogo: c.createElement(K.a, { style: te.twitterLogo }),
                leftControl: c.createElement(M.a, {
                  accessibilityLabel: q,
                  borderColor: 'transparent',
                  hoverLabel: { label: q },
                  icon: c.createElement(W.a, { style: te.topIcons }),
                  onPress: C,
                  pullLeft: !0,
                  size: 'medium',
                }),
                style: te.appBar,
                withBackground: !1,
              }),
            ),
            c.createElement(
              x.a,
              { style: te.contentWrapper },
              c.createElement(
                x.a,
                { style: te.bgImage },
                c.createElement(
                  x.a,
                  { style: [te.topContent, { paddingTop: F.b.isMobileOS() ? '26px' : '50px' }] },
                  m
                    ? c.createElement(
                        x.a,
                        { style: te.contentBlueIcon },
                        c.createElement(X.a, { style: te.iconTwitterBlue }),
                      )
                    : c.createElement(H.b, { size: 'title1', weight: 'heavy' }, Y),
                  c.createElement(H.b, { size: 'headline1', style: te.subtitle }, J),
                ),
              ),
              c.createElement(x.a, { style: te.content }, U),
            ),
            c.createElement(p.a, {
              fetchStatus: d,
              onRequestRetry: function () {
                j()
              },
              render: function () {
                var e = null != u && u.prices && u.prices.length ? u.prices[0] : null,
                  t = null == e ? void 0 : e.currency_code.toUpperCase(),
                  r = null != e && e.amount_local_micro ? e.amount_local_micro / 1e6 : null
                if (!t || !r) return null
                var a = (0, G[t])(r),
                  o = Z({ price: a })
                return c.createElement(
                  x.a,
                  { style: te.buttonWrapper },
                  c.createElement(
                    x.a,
                    { style: te.termsOfService },
                    c.createElement(
                      H.b,
                      { align: 'center', color: 'gray700', size: 'subtext3' },
                      c.createElement(
                        f.a.I18NFormatMessage,
                        { $i18n: 'h73408b9' },
                        c.createElement(
                          H.b,
                          { link: 'https://legal.twitter.com/purchaser-terms' },
                          'Terms & Conditions',
                        ),
                      ),
                    ),
                  ),
                  c.createElement(
                    M.a,
                    {
                      accessibilityLabel: o,
                      disabled: !u || 'loading' === n,
                      onPress: _,
                      style: te.button,
                      type: 'primaryFilled',
                    },
                    o,
                  ),
                )
              },
              retryable: !0,
            }),
            c.createElement(p.a, {
              fetchStatus: n,
              onRequestRetry: function () {
                if (u) {
                  var e,
                    t = null != u && null !== (e = u.prices) && void 0 !== e && e.length ? u.prices[0] : null,
                    r = null == t ? void 0 : t.external_price_id
                  r && l(i.d, r, i.c, i.a)
                }
              },
              render: function () {
                return r && (window.location.href = r), null
              },
              retryable: !0,
            }),
          )
        },
        te = V.a.create(function (e) {
          return {
            root: { minHeight: 400 },
            appBar: { zIndex: '2' },
            appBarContainer: { backgroundColor: e.colors.white },
            bgImage: { backgroundImage: 'url('.concat(A, ')'), backgroundRepeat: 'no-repeat' },
            iconTwitterBlue: { transform: [{ scale: 1.5 }], transformOrigin: 'bottom left' },
            illustration: {
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              borderRadius: 8,
              boxShadow: '0 2px 4px 1px rgb(1 1 1 / 9%)',
            },
            contentBlueIcon: { display: 'flex', justifyContent: 'flexStart', flexDirection: 'row' },
            spacer: { width: e.spaces.space24 },
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
            topIcons: { color: '#000' },
            button: { width: '75%', cursor: 'pointer', alignItems: 'center' },
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
        }),
        re = u(ee)
      t.default = re
    },
    'ShJ/': function (e, t, r) {
      'use strict'
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        a = r.n(n),
        c = r('ERkP'),
        o = r('Lsrn'),
        i = r('k/Ka')
      function l(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(r), !0).forEach(function (t) {
                a()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : l(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var u = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(i.a)(
          'svg',
          s(
            s({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [o.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          c.createElement(
            'g',
            null,
            c.createElement('path', {
              d: 'M20.472 14.738c-.388-1.808-2.24-3.517-3.908-4.246l-.474-4.307 1.344-2.016c.258-.387.28-.88.062-1.286-.218-.406-.64-.66-1.102-.66H7.54c-.46 0-.884.254-1.1.66-.22.407-.197.9.06 1.284l1.35 2.025-.42 4.3c-1.667.732-3.515 2.44-3.896 4.222-.066.267-.043.672.222 1.01.14.178.46.474 1.06.474h3.858l2.638 6.1c.12.273.39.45.688.45s.57-.177.688-.45l2.638-6.1h3.86c.6 0 .92-.297 1.058-.474.265-.34.288-.745.228-.988zM12 20.11l-1.692-3.912h3.384L12 20.11zm-6.896-5.413c.456-1.166 1.904-2.506 3.265-2.96l.46-.153.566-5.777-1.39-2.082h7.922l-1.39 2.08.637 5.78.456.153c1.355.45 2.796 1.78 3.264 2.96H5.104z',
            }),
          ),
        )
      }
      ;(u.metadata = { width: 24, height: 24 }), (t.a = u)
    },
    XOb8: function (e, t, r) {
      'use strict'
      r.d(t, 'd', function () {
        return n
      }),
        r.d(t, 'e', function () {
          return a
        }),
        r.d(t, 'b', function () {
          return o
        }),
        r.d(t, 'a', function () {
          return i
        }),
        r.d(t, 'c', function () {
          return l
        })
      var n = 'V2ViU3Vic2NyaXB0aW9uUHJvZHVjdERldGFpbHM6cHJvZF9LT21pYTlJYXRWVG1JNQ==',
        a = 'rogue-one',
        c = 'https://'.concat(window.location.host),
        o = ''.concat(c, '/settings/subscription'),
        i = ''.concat(c, '/i/twitter_blue_sign_up'),
        l = ''.concat(i, '/welcome')
      ''.concat(i, '/unsuccessful')
    },
    g7Ra: function (e, t, r) {
      'use strict'
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        a = r.n(n),
        c = r('ERkP'),
        o = r('Lsrn'),
        i = r('shC7'),
        l = r('k/Ka')
      function s(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? s(Object(r), !0).forEach(function (t) {
                a()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : s(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var p = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(l.a)(
          'svg',
          u(
            u({}, e),
            {},
            {
              accessibilityHidden: void 0 === e.accessibilityLabel,
              style: [o.a.root, e.style, i.a.getConstants().isRTL && o.a.iconRTL],
              viewBox: '0 0 24 24',
            },
          ),
          c.createElement(
            'g',
            null,
            c.createElement('path', {
              d: 'M13.967 5.852H4.602l2.97-2.97c.293-.293.293-.768 0-1.06s-.768-.294-1.06 0L2.26 6.07c-.294.292-.294.767 0 1.06l4.25 4.25c.145.146.337.22.53.22s.383-.073.53-.22c.292-.293.292-.768 0-1.06L4.6 7.35h9.364c3.625 0 6.574 2.948 6.574 6.573S17.592 20.5 13.967 20.5H7.79c-.415 0-.75.336-.75.75s.335.75.75.75h6.178c4.452 0 8.074-3.622 8.074-8.074s-3.623-8.074-8.075-8.074z',
            }),
          ),
        )
      }
      ;(p.metadata = { width: 24, height: 24 }), (t.a = p)
    },
    hBoh: function (e, t, r) {
      'use strict'
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        a = r.n(n),
        c = r('ERkP'),
        o = r('Lsrn'),
        i = r('k/Ka')
      function l(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(r), !0).forEach(function (t) {
                a()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : l(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var u = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(i.a)(
          'svg',
          s(
            s({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [o.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          c.createElement(
            'g',
            null,
            c.createElement('path', {
              d: 'M16.5 2h-9C6.26 2 5.25 3.01 5.25 4.25v15.5C5.25 20.99 6.26 22 7.5 22h9c1.24 0 2.25-1.01 2.25-2.25V4.25C18.75 3.01 17.74 2 16.5 2zm-9 1.5h9c.413 0 .75.337.75.75v11.865H6.75V4.25c0-.413.337-.75.75-.75zm9 17h-9c-.413 0-.75-.337-.75-.75v-2.135h10.5v2.135c0 .413-.337.75-.75.75z',
            }),
            c.createElement('path', {
              d: 'M12.583 18.322h-1.166c-.414 0-.75.336-.75.75s.336.75.75.75h1.166c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z',
            }),
          ),
        )
      }
      ;(u.metadata = { width: 24, height: 24 }), (t.a = u)
    },
    su2V: function (e, t, r) {
      'use strict'
      r.d(t, 'l', function () {
        return y
      }),
        r.d(t, 'k', function () {
          return g
        }),
        r.d(t, 'f', function () {
          return h
        }),
        r.d(t, 'e', function () {
          return O
        }),
        r.d(t, 'j', function () {
          return v
        }),
        r.d(t, 'i', function () {
          return E
        }),
        r.d(t, 'h', function () {
          return S
        }),
        r.d(t, 'g', function () {
          return P
        }),
        r.d(t, 'd', function () {
          return w
        }),
        r.d(t, 'b', function () {
          return j
        }),
        r.d(t, 'a', function () {
          return C
        }),
        r.d(t, 'c', function () {
          return _
        })
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        a = r.n(n),
        c = (r('yH/f'), r('hBpG'), r('jQ3i'), r('x4t0'), r('JtPf'), r('7x/C'), r('oEOe')),
        o = r('Ssj5'),
        i = r('kGix')
      function l(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(r), !0).forEach(function (t) {
                a()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : l(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var u = 'subscriptionPayments',
        p = Object.freeze({
          REQUEST: 'rweb/subscriptionPayments/FETCH_SUBSCRIPTION_PRODUCT_DETAILS_REQUEST',
          SUCCESS: 'rweb/subscriptionPayments/FETCH_SUBSCRIPTION_PRODUCT_DETAILS_SUCCESS',
          FAILURE: 'rweb/subscriptionPayments/FETCH_SUBSCRIPTION_PRODUCT_DETAILS_FAILURE',
        }),
        d = Object.freeze({
          REQUEST: 'rweb/subscriptionPayments/FETCH_SUBSCRIPTION_PRODUCT_CHECKOUT_URL_REQUEST',
          SUCCESS: 'rweb/subscriptionPayments/FETCH_SUBSCRIPTION_PRODUCT_CHECKOUT_URL_SUCCESS',
          FAILURE: 'rweb/subscriptionPayments/FETCH_SUBSCRIPTION_PRODUCT_CHECKOUT_URL_FAILURE',
        }),
        f = Object.freeze({
          REQUEST: 'rweb/subscriptionPayments/FETCH_PRODUCT_SUBSCRIPTIONS_REQUEST',
          SUCCESS: 'rweb/subscriptionPayments/FETCH_PRODUCT_SUBSCRIPTIONS_SUCCESS',
          FAILURE: 'rweb/subscriptionPayments/FETCH_PRODUCT_SUBSCRIPTIONS_FAILURE',
        }),
        b = Object.freeze({
          REQUEST: 'rweb/subscriptionPayments/FETCH_SUBSCRIPTION_PRODUCT_CUSTOMER_PORTAL_URL_REQUEST',
          SUCCESS: 'rweb/subscriptionPayments/FETCH_SUBSCRIPTION_PRODUCT_CUSTOMER_PORTAL_URL_SUCCESS',
          FAILURE: 'rweb/subscriptionPayments/FETCH_SUBSCRIPTION_PRODUCT_CUSTOMER_PORTAL_URL_FAILURE',
        }),
        m = { products: {}, checkoutUrls: {}, productSubscriptions: { fetchStatus: i.a.NONE }, customerPortalUrls: {} }
      var y = function (e, t) {
          var r = e[u].products[t]
          return (null == r ? void 0 : r.fetchStatus) || i.a.NONE
        },
        g = function (e, t) {
          var r = e[u].products[t]
          return null == r ? void 0 : r.details
        },
        h = function (e, t) {
          var r = e[u].checkoutUrls[t]
          return (null == r ? void 0 : r.fetchStatus) || i.a.NONE
        },
        O = function (e, t) {
          var r = e[u].checkoutUrls[t]
          return null == r ? void 0 : r.checkoutUrl
        },
        v = function (e) {
          return e[u].productSubscriptions.fetchStatus
        },
        E = function (e, t) {
          return (e[u].productSubscriptions.subscriptions || []).find(function (e) {
            var r, n
            return (
              (null === (r = e.product) || void 0 === r ? void 0 : r.rest_id) &&
              (null === (n = e.product) || void 0 === n ? void 0 : n.rest_id.includes(t)) &&
              'Inactive' !== e.state
            )
          })
        },
        S = function (e, t) {
          var r = e[u].customerPortalUrls[t]
          return (null == r ? void 0 : r.fetchStatus) || i.a.NONE
        },
        P = function (e, t) {
          var r = e[u].customerPortalUrls[t]
          return null == r ? void 0 : r.customerPortalUrl
        },
        w = function (e) {
          return function (t, r, n) {
            var a = n.api,
              o = Object(c.b)(t, {
                params: { id: e },
                request: a.SubscriptionPayments.fetchSubscriptionProductDetails,
              }),
              l = y(r(), e)
            return l !== i.a.NONE && l !== i.a.FAILED
              ? Promise.resolve()
              : o({ actionTypes: p, context: 'FETCH_SUBSCRIPTION_PRODUCT_DETAILS', meta: { id: e } })
          }
        },
        j = function (e, t, r, n) {
          return function (a, o, l) {
            var s = l.api,
              u = Object(c.b)(a, {
                params: { price_id: t, success_url: r, cancel_url: n },
                request: s.SubscriptionPayments.fetchSubscriptionProductCheckoutUrl,
              }),
              p = h(o(), e)
            return p !== i.a.NONE && p !== i.a.FAILED
              ? Promise.resolve()
              : u({ actionTypes: d, context: 'FETCH_SUBSCRIPTION_PRODUCT_CHECKOUT_URL', meta: { id: e } })
          }
        },
        C = function () {
          return function (e, t, r) {
            var n = r.api,
              a = Object(c.b)(e, { params: {}, request: n.SubscriptionPayments.fetchProductSubscriptions }),
              o = v(t())
            return o !== i.a.NONE && o !== i.a.FAILED
              ? Promise.resolve()
              : a({ actionTypes: f, context: 'FETCH_PRODUCT_SUBSCRIPTIONS', meta: {} })
          }
        },
        _ = function (e, t) {
          return function (r, n, a) {
            var o = a.api,
              l = Object(c.b)(r, {
                params: { return_url: t },
                request: o.SubscriptionPayments.fetchSubscriptionProductCustomerPortalUrl,
              }),
              s = S(n(), e)
            return s !== i.a.NONE && s !== i.a.FAILED
              ? Promise.resolve()
              : l({ actionTypes: b, context: 'FETCH_SUBSCRIPTION_PRODUCT_CUSTOMER_PORTAL_URL', meta: { id: e } })
          }
        }
      o.a.register(
        a()({}, u, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case p.REQUEST:
              var r = t.meta.id
              return s(s({}, e), {}, { products: s(s({}, e.products), {}, a()({}, r, { fetchStatus: i.a.LOADING })) })
            case p.SUCCESS:
              var n = t.meta.id
              return s(
                s({}, e),
                {},
                { products: s(s({}, e.products), {}, a()({}, n, { fetchStatus: i.a.LOADED, details: t.payload })) },
              )
            case p.FAILURE:
              var c = t.meta.id
              return s(
                s({}, e),
                {},
                { products: s(s({}, e.products), {}, a()({}, c, { fetchStatus: i.a.FAILED, error: t.payload })) },
              )
            case d.REQUEST:
              var o = t.meta.id
              return s(
                s({}, e),
                {},
                { checkoutUrls: s(s({}, e.checkoutUrls), {}, a()({}, o, { fetchStatus: i.a.LOADING })) },
              )
            case d.SUCCESS:
              var l = t.meta.id
              return s(
                s({}, e),
                {},
                {
                  checkoutUrls: s(
                    s({}, e.checkoutUrls),
                    {},
                    a()({}, l, { fetchStatus: i.a.LOADED, checkoutUrl: t.payload }),
                  ),
                },
              )
            case d.FAILURE:
              var u = t.meta.id
              return s(
                s({}, e),
                {},
                {
                  checkoutUrls: s(s({}, e.checkoutUrls), {}, a()({}, u, { fetchStatus: i.a.FAILED, error: t.payload })),
                },
              )
            case f.REQUEST:
              return s(s({}, e), {}, { productSubscriptions: { fetchStatus: i.a.LOADING } })
            case f.SUCCESS:
              return s(s({}, e), {}, { productSubscriptions: { fetchStatus: i.a.LOADED, subscriptions: t.payload } })
            case f.FAILURE:
              return s(s({}, e), {}, { productSubscriptions: { fetchStatus: i.a.FAILED, error: t.payload } })
            case b.REQUEST:
              var y = t.meta.id
              return s(
                s({}, e),
                {},
                { customerPortalUrls: s(s({}, e.customerPortalUrls), {}, a()({}, y, { fetchStatus: i.a.LOADING })) },
              )
            case b.SUCCESS:
              var g = t.meta.id
              return s(
                s({}, e),
                {},
                {
                  customerPortalUrls: s(
                    s({}, e.customerPortalUrls),
                    {},
                    a()({}, g, { fetchStatus: i.a.LOADED, customerPortalUrl: t.payload }),
                  ),
                },
              )
            case b.FAILURE:
              var h = t.meta.id
              return s(
                s({}, e),
                {},
                {
                  customerPortalUrls: s(
                    s({}, e.customerPortalUrls),
                    {},
                    a()({}, h, { fetchStatus: i.a.FAILED, error: t.payload }),
                  ),
                },
              )
            default:
              return e
          }
        }),
      )
    },
    tH6R: function (e, t, r) {
      'use strict'
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        a = r.n(n),
        c = r('ERkP'),
        o = r('Lsrn'),
        i = r('k/Ka')
      function l(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(r), !0).forEach(function (t) {
                a()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : l(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var u = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(i.a)(
          'svg',
          s(
            s({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [o.a.root, e.style], viewBox: '0 0 76 24' },
          ),
          c.createElement(
            'g',
            null,
            c.createElement('path', {
              d: 'M15.543 3H2.75c-.414 0-.75.336-.75.75v16.5c0 .414.336.75.75.75h12.886c1.534 0 2.854-.225 3.917-.72 1.048-.481 1.866-1.147 2.381-2.025.489-.833.732-1.749.732-2.732 0-1.25-.356-2.336-1.128-3.184-.317-.348-.69-.635-1.113-.867.302-.21.572-.455.809-.738.675-.806 1.014-1.754 1.014-2.813 0-1.49-.605-2.722-1.786-3.626C19.28 3.39 17.598 3 15.543 3zm.543 5.718c.498-.059.972-.189 1.414-.381l-.001.002c-.329.485-.747.911-1.228 1.254.005.104.007.209.007.313 0 3.202-2.476 6.895-7.005 6.895-1.39 0-2.684-.401-3.773-1.089.193.022.389.034.588.034 1.153 0 2.215-.388 3.058-1.038-1.078-.019-1.987-.72-2.3-1.682.15.028.305.043.463.043.224 0 .441-.029.648-.084-1.127-.223-1.975-1.202-1.975-2.376v-.031c.332.181.711.29 1.115.303-.66-.434-1.095-1.177-1.095-2.017 0-.443.122-.859.333-1.218 1.214 1.466 3.028 2.431 5.075 2.532-.041-.178-.064-.362-.064-.551 0-1.339 1.102-2.424 2.462-2.424.708 0 1.348.294 1.797.765.561-.108 1.088-.31 1.563-.588-.183.563-.573 1.039-1.082 1.338zm14.776 12.285H25.64V2.625h5.222v18.378zm10.35.482c-2.163 0-3.844-.54-5.044-1.622-1.183-1.082-1.775-2.62-1.775-4.614V8.33h5.222v5.626c0 1.37.33 2.366.99 2.99.658.627 1.57.94 2.737.94 1.436 0 2.535-.39 3.295-1.167.76-.795 1.14-1.8 1.14-3.017V8.33H53v12.673h-5.12v-2.89c-.56 1.1-1.43 1.936-2.612 2.51-1.183.575-2.535.862-4.056.862zm33.311-5.729H60.53c.186.794.7 1.41 1.546 1.85.845.44 1.943.66 3.295.66 1 0 1.91-.152 2.74-.457.844-.322 1.495-.76 1.95-1.32l3.956 1.725c-.896 1.065-2.096 1.876-3.6 2.433-1.487.558-3.245.837-5.273.837-1.994 0-3.71-.262-5.146-.786-1.436-.542-2.543-1.32-3.32-2.333-.76-1.03-1.14-2.248-1.14-3.65 0-1.42.388-2.645 1.165-3.676.777-1.03 1.876-1.816 3.295-2.356 1.437-.558 3.11-.837 5.02-.837 1.994 0 3.7.296 5.12.887 1.437.575 2.527 1.403 3.27 2.485.744 1.08 1.116 2.373 1.116 3.877v.66l-.001.001zM69.35 13.17c-.032-.76-.455-1.377-1.266-1.85-.794-.473-1.825-.71-3.093-.71-1.25 0-2.272.228-3.066.684-.794.457-1.267 1.082-1.42 1.876h8.847-.002z',
            }),
          ),
        )
      }
      ;(u.metadata = { width: 76, height: 24 }), (t.a = u)
    },
    vFjZ: function (e, t, r) {
      'use strict'
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        a = r.n(n),
        c = r('ERkP'),
        o = r('Lsrn'),
        i = r('k/Ka')
      function l(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(r), !0).forEach(function (t) {
                a()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : l(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var u = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(i.a)(
          'svg',
          s(
            s({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [o.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          c.createElement(
            'g',
            null,
            c.createElement('path', {
              d: 'M8.18 16.99c-.19.154-.476.032-.504-.21-.137-1.214-.234-4.053 1.483-5.943.908-1 3.02-1.52 4.475-.198s1.14 3.473.23 4.473c-2.07 2.15-3.428.058-5.686 1.878zm7.512-5.785l6.383-7.216c.45-.45.45-1.18 0-1.628-.45-.45-1.178-.45-1.627 0l-7.232 6.402s.782.106 1.595.93c.548.558.882 1.51.882 1.51z',
            }),
            c.createElement('path', {
              d: 'M17.45 22.28H3.673c-1.148 0-2.083-.946-2.083-2.11V7.926c0-1.165.934-2.112 2.082-2.112h5.836c.414 0 .75.336.75.75s-.336.75-.75.75H3.672c-.32 0-.583.274-.583.612V20.17c0 .336.26.61.582.61h13.78c.32 0 .583-.273.583-.61v-6.28c0-.415.336-.75.75-.75s.75.335.75.75v6.28c0 1.163-.934 2.11-2.084 2.11z',
            }),
          ),
        )
      }
      ;(u.metadata = { width: 24, height: 24 }), (t.a = u)
    },
    yEpk: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'TwitterBlueSignUpSuccess', function () {
          return _
        })
      var n = r('ddV6'),
        a = r.n(n),
        c = r('ERkP'),
        o = r('v6aA'),
        i = r('gUb7'),
        l = r('rxPX'),
        s = Object(l.a)()
          .propsFromActions(function () {
            return { fetchUserClaims: i.a }
          })
          .withAnalytics({ page: 'subscriptions', section: 'welcome' }),
        u = r('v//M'),
        p = r('3XMw'),
        d = r.n(p),
        f = r('hOZg'),
        b = r.p + 'twitter-blue-welcome.f64637a5.png',
        m = r('Ty5D'),
        y = r('aITJ'),
        g = r('t62R'),
        h = r('/yvb'),
        O = r('sgih'),
        v = r('rHpw'),
        E = r('U+bB'),
        S = r('MWbm'),
        P = d.a.ia5e7487,
        w = d.a.a893d601,
        j = d.a.f0e32de5,
        C = d.a.gc6e8c17
      function _(e) {
        var t = e.analytics,
          r = e.fetchUserClaims,
          n = Object(m.g)(),
          i = c.useContext(o.a).userClaims,
          l = c.useState('loading'),
          s = a()(l, 2),
          p = s[0],
          d = s[1]
        function v() {
          var e = 0
          d('loading')
          var t = setInterval(function () {
            i.isTwitterBlueSubscriber() && (d('loaded'), clearInterval(t)),
              e > 5 ? (d('failed'), clearInterval(t)) : ((e += 1), r({}))
          }, 1e3)
        }
        function _() {
          n.push('/home')
        }
        function U() {
          return c.createElement(
            c.Fragment,
            null,
            c.createElement(g.b, { size: 'title2', style: R.title, weight: 'heavy' }, j),
            c.createElement(g.b, { style: R.subtitle }, C),
            c.createElement(h.a, { onPress: _, size: 'xLarge', type: 'primaryFilled' }, w),
          )
        }
        return (
          c.useEffect(function () {
            t.scribe({ action: 'impression' })
          }, []),
          c.useEffect(function () {
            v()
          }, []),
          c.createElement(
            O.a,
            { allowBackNavigation: !0, enableMaskForDismiss: !0, onMaskClick: _, style: R.root, type: 'full' },
            c.createElement(
              S.a,
              { style: R.topBar },
              c.createElement(h.a, {
                accessibilityLabel: P,
                hoverLabel: { label: P },
                icon: c.createElement(f.a, { style: R.topIcons }),
                onPress: _,
                pullRight: !0,
                size: 'medium',
                type: 'brandText',
              }),
            ),
            c.createElement(
              S.a,
              { style: y.b.isMobileOS() ? R.contentSmall : R.content },
              c.createElement(E.a, { source: b, style: R.img }),
              c.createElement(u.a, { fetchStatus: p, onRequestRetry: v, render: U, retryable: !0 }),
            ),
          )
        )
      }
      var R = v.a.create(function (e) {
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
        U = s(_)
      t.default = U
    },
  },
])
//# sourceMappingURL=WIPED
