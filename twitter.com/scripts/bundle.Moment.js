;(window.webpackJsonp = window.webpackJsonp || []).push([
  [64],
  {
    CBsz: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'MomentAnalyticsScreen', function () {
          return B
        })
      r('OZaJ')
      var a = r('VrFO'),
        n = r.n(a),
        c = r('Y9Ll'),
        o = r.n(c),
        i = r('5Yy7'),
        l = r.n(i),
        s = r('N+ot'),
        u = r.n(s),
        p = r('AuHH'),
        d = r.n(p),
        f = (r('6U7i'), r('ERkP')),
        b = r.n(f),
        m = (r('WNMA'), r('KqXw'), r('n4jD')),
        y = r('rxPX'),
        g = r('0KEI'),
        h = function (e, t) {
          return t.match.params.momentId
        },
        O = function (e) {
          return function (t, r, a) {
            var n = a.api,
              c = Object(m.c)(r())
            return n.Moments.analytics({ moment_id: e.momentId, teamUserId: c })
          }
        },
        v = Object(y.a)()
          .propsFromState(function () {
            return { momentId: h }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(g.createLocalApiErrorHandlerWithContextFactory)(
                'MOMENTS_ANALYTICS_SCREEN',
              ),
              fetchAnalytics: O,
            }
          }),
        E = r('KEM+'),
        S = r.n(E),
        P = r('k49u'),
        w = r('LVU8'),
        j = r('jHSc'),
        C = r('MWbm'),
        _ = r('t62R'),
        R = r('MtXG'),
        U = r('855f'),
        T = r('rHpw'),
        L = r('7JQg'),
        D = r('3XMw'),
        I = r.n(D)
      function k(e) {
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
            a = d()(e)
          if (t) {
            var n = d()(this).constructor
            r = Reflect.construct(a, arguments, n)
          } else r = a.apply(this, arguments)
          return u()(this, r)
        }
      }
      var A = I.a.e2e35f0d,
        F = I.a.icfe5fe3,
        x = I.a.a52a1fb9,
        H = I.a.if221231,
        B = (function (e) {
          l()(r, e)
          var t = k(r)
          function r(e) {
            var a
            return n()(this, r), ((a = t.call(this, e)).state = {}), a
          }
          return (
            o()(r, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this,
                    t = this.props,
                    r = t.createLocalApiErrorHandler,
                    a = t.fetchAnalytics,
                    n = t.momentId
                  a({ momentId: n })
                    .then(function (t) {
                      e.setState({ momentAnalytics: t })
                    })
                    .catch(
                      r(
                        (function (e) {
                          var t = 'string' == typeof e ? '/i/moments/'.concat(e) : '/i/explore'
                          return S()({}, P.a.ClientNotPermitted, {
                            customAction: function () {
                              Object(w.d)(t, { statusCode: 401 })
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
                    r = e.momentId,
                    a = this.state.momentAnalytics,
                    n = a || {},
                    c = n.title,
                    o = void 0 === c ? '' : c,
                    i = n.analytics,
                    l = (i = void 0 === i ? {} : i).capsule_opens,
                    s = void 0 === l ? 0 : l,
                    u = i.capsule_opens_uniques,
                    p = void 0 === u ? 0 : u,
                    d = i.completion_rate,
                    f = void 0 === d ? 0 : d,
                    m = i.shares_from_capsule,
                    y = void 0 === m ? 0 : m,
                    g = r ? '/i/moments/'.concat(String(r)) : '/i/explore',
                    h = I.a.ab0f5140
                  return b.a.createElement(
                    b.a.Fragment,
                    null,
                    a &&
                      b.a.createElement(
                        j.b,
                        { backButtonType: 'close', backLocation: g, documentTitle: h, history: t, title: h },
                        b.a.createElement(
                          C.a,
                          { style: M.container },
                          b.a.createElement(
                            C.a,
                            { style: M.titleTextContainer },
                            b.a.createElement(_.b, { style: M.titleText, weight: 'bold' }, o),
                          ),
                          b.a.createElement(
                            R.a.Group,
                            null,
                            b.a.createElement(
                              C.a,
                              null,
                              b.a.createElement(
                                C.a,
                                { style: M.analytic },
                                b.a.createElement(
                                  R.a,
                                  null,
                                  b.a.createElement(
                                    I.a.I18NFormatMessage,
                                    { $i18n: 'gfc363c4' },
                                    b.a.createElement(
                                      R.a.Value,
                                      null,
                                      I.a.f22fc1cb({ formattedCount: U.a.getFormattedCount(Number(s)) }),
                                    ),
                                    b.a.createElement(R.a.Value, null, I.a.c71523ef({ count: s })),
                                  ),
                                ),
                                b.a.createElement(_.b, { color: 'gray700' }, A),
                              ),
                              b.a.createElement(
                                C.a,
                                { style: M.analytic },
                                b.a.createElement(
                                  R.a,
                                  null,
                                  b.a.createElement(
                                    I.a.I18NFormatMessage,
                                    { $i18n: 'e79f5450' },
                                    b.a.createElement(
                                      R.a.Value,
                                      null,
                                      I.a.eca2dfe8({ formattedCount: U.a.getFormattedCount(Number(p)) }),
                                    ),
                                    b.a.createElement(R.a.Value, null, I.a.a77bd6f4({ count: p })),
                                  ),
                                ),
                                b.a.createElement(_.b, { color: 'gray700' }, F),
                              ),
                              b.a.createElement(
                                C.a,
                                { style: M.analytic },
                                b.a.createElement(
                                  R.a,
                                  null,
                                  b.a.createElement(
                                    I.a.I18NFormatMessage,
                                    { $i18n: 'fcbb0929' },
                                    b.a.createElement(
                                      R.a.Value,
                                      null,
                                      I.a.cb22dca4({ formattedCount: U.a.getFormattedCount(Number(y)) }),
                                    ),
                                    b.a.createElement(R.a.Value, null, I.a.a30d7c4d({ count: y })),
                                  ),
                                ),
                                b.a.createElement(_.b, { color: 'gray700' }, x),
                              ),
                              b.a.createElement(
                                C.a,
                                { style: M.analytic },
                                b.a.createElement(
                                  R.a,
                                  null,
                                  b.a.createElement(
                                    I.a.I18NFormatMessage,
                                    { $i18n: 'afba3eba' },
                                    b.a.createElement(
                                      R.a.Value,
                                      null,
                                      I.a.e5463c29({ formattedCount: U.a.getFormattedCount(f) }),
                                    ),
                                    b.a.createElement(R.a.Value, null, I.a.j20f66ed({ count: f })),
                                  ),
                                ),
                                b.a.createElement(_.b, { color: 'gray700' }, H),
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
        })(b.a.Component),
        M = T.a.create(function (e) {
          return {
            analytic: { marginBottom: e.spaces.space16 },
            container: { height: '100%', padding: 20 },
            titleText: { fontSize: e.fontSizes.title4 },
            titleTextContainer: { marginBottom: e.spaces.space16 },
          }
        })
      t.default = Object(L.c)({ page: 'moments_analytics' })(v(B))
    },
    DBID: function (e, t, r) {
      'use strict'
      r.r(t)
      var a = r('ERkP'),
        n = r.n(a),
        c = r('3XMw'),
        o = r.n(c),
        i = r('hOZg'),
        l = r('Ty5D'),
        s = r('aITJ'),
        u = r('MWbm'),
        p = r('sgih'),
        d = r('/yvb'),
        f = r('t62R'),
        b = r('rHpw'),
        m = o.a.ia5e7487,
        y = o.a.a893d601,
        g = o.a.fce91ab4,
        h = o.a.gc7637d3
      t.default = function () {
        var e = Object(l.g)()
        function t() {
          e.push('/home')
        }
        return n.a.createElement(
          p.a,
          { allowBackNavigation: !0, enableMaskForDismiss: !0, onMaskClick: t, style: O.root, type: 'full' },
          n.a.createElement(
            u.a,
            { style: O.topBar },
            n.a.createElement(d.a, {
              accessibilityLabel: m,
              hoverLabel: { label: m },
              icon: n.a.createElement(i.a, { style: O.topIcons }),
              onPress: t,
              pullRight: !0,
              size: 'medium',
              type: 'brandText',
            }),
          ),
          n.a.createElement(
            u.a,
            { style: s.b.isMobileOS() ? O.contentSmall : O.content },
            n.a.createElement(f.b, { size: 'title2', style: O.title, weight: 'heavy' }, g),
            n.a.createElement(f.b, { style: O.subtitle }, h),
            n.a.createElement(d.a, { onPress: t, size: 'xLarge', type: 'primaryFilled' }, y),
          ),
        )
      }
      var O = b.a.create(function (e) {
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
          return ee
        }),
        r.d(t, 'TwitterBlueSignUpScreen', function () {
          return te
        })
      var a = r('ddV6'),
        n = r.n(a),
        c = (r('M+/F'), r('1t7P'), r('jQ/y'), r('z84I'), r('ERkP')),
        o = r.n(c),
        i = r('v6aA'),
        l = r('XOb8'),
        s = r('rxPX'),
        u = r('su2V'),
        p = Object(s.a)()
          .propsFromState(function () {
            return {
              productDetailsFetchStatus: function (e) {
                return Object(u.l)(e, l.d)
              },
              productDetails: function (e) {
                return Object(u.k)(e, l.d)
              },
              checkoutUrlFetchStatus: function (e) {
                return Object(u.f)(e, l.d)
              },
              checkoutUrl: function (e) {
                return Object(u.e)(e, l.d)
              },
            }
          })
          .propsFromActions(function () {
            return { fetchSubscriptionProductDetails: u.d, fetchSubscriptionProductCheckoutUrl: u.b }
          })
          .withAnalytics({ page: 'subscriptions', section: 'marketing' }),
        d = r('v//M'),
        f = r('3XMw'),
        b = r.n(f),
        m = r.p + 'undo_tweet_illustration.0e0907c5.svg',
        y = (r('+KXO'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn'), r('KEM+')),
        g = r.n(y),
        h = r('Lsrn'),
        O = r('k/Ka')
      function v(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, a)
        }
        return r
      }
      function E(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? v(Object(r), !0).forEach(function (t) {
                g()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : v(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var S = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(O.a)(
          'svg',
          E(
            E({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [h.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          o.a.createElement(
            'g',
            null,
            o.a.createElement('path', {
              d: 'M22.906 6.356c-.26-.124-.568-.088-.794.093l-2.737 2.207V5.283c0-1.24-1.01-2.25-2.25-2.25H3.167c-1.24 0-2.25 1.01-2.25 2.25v14.5c0 1.24 1.01 2.25 2.25 2.25h13.958c1.24 0 2.25-1.01 2.25-2.25V16.41l2.737 2.207c.136.11.303.166.47.166.11 0 .222-.024.324-.073.26-.125.427-.388.427-.677v-11c0-.29-.166-.552-.427-.677zm-5.03 13.427c0 .413-.338.75-.75.75H3.165c-.412 0-.75-.337-.75-.75v-14.5c0-.413.338-.75.75-.75h13.96c.412 0 .75.337.75.75v14.5zm3.957-3.318l-2.458-1.983v-3.897l2.458-1.983v7.863z',
            }),
            o.a.createElement('path', {
              d: 'M10.146 17.395c-2.68 0-4.86-2.18-4.86-4.86s2.18-4.862 4.86-4.862 4.86 2.18 4.86 4.86-2.18 4.862-4.86 4.862zm0-8.223c-1.853 0-3.36 1.508-3.36 3.36s1.508 3.362 3.36 3.362c1.854 0 3.36-1.508 3.36-3.36S12 9.17 10.147 9.17z',
            }),
          ),
        )
      }
      S.metadata = { width: 24, height: 24 }
      var P = S,
        w = r('ShJ/'),
        j = r('g7Ra'),
        C = r('pu5c'),
        _ = r('5VjN'),
        R = r('JzwX')
      function U(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, a)
        }
        return r
      }
      function T(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? U(Object(r), !0).forEach(function (t) {
                g()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : U(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var L = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(O.a)(
          'svg',
          T(
            T({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [h.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          o.a.createElement(
            'g',
            null,
            o.a.createElement('path', {
              d: 'M19.745 1H8.503C7.261 1 6.248 2.014 6.248 3.258v1.385H4.255C3.012 4.643 2 5.657 2 6.901v15.345c0 .281.16.542.411.672s.551.1.782-.06l6.683-4.877 6.683 4.877c.13.09.281.141.441.141.12 0 .23-.03.341-.08.251-.13.411-.391.411-.672v-5.259l3.046 2.218c.14.1.291.151.451.151.11 0 .231-.03.341-.09.25-.122.41-.383.41-.664V3.258C22 2.014 20.988 1 19.745 1zm-3.497 19.771l-5.471-3.994-.461-.331c-.261-.191-.621-.191-.882 0l-3.166 2.308-2.765 2.017V6.901c0-.412.341-.753.752-.753h11.242c.411 0 .752.341.752.753v13.87zm4.249-3.653l-2.745-1.997v-8.22c0-1.244-1.012-2.258-2.255-2.258H7.752V3.258c0-.412.331-.753.752-.753h11.242c.411 0 .752.341.752.753v13.86z',
            }),
            o.a.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
          ),
        )
      }
      L.metadata = { width: 24, height: 24 }
      var D = L,
        I = r('hBoh'),
        k = r('vFjZ'),
        A = function (e, t, r) {
          var a = [{ icon: P, heading: b.a.a99d8e60, description: b.a.gdd8144c, platformAvailabilityLabel: ['Web'] }]
          return (
            r &&
              a.push({
                icon: w.a,
                heading: b.a.e4b3f520,
                description: b.a.h73af45f,
                platformAvailabilityLabel: ['iOS'],
              }),
            [
              {
                blurb: b.a.c4debbdf,
                features: [
                  [
                    {
                      icon: j.a,
                      heading: b.a.de43eaf2,
                      description: b.a.g52ab673,
                      platformAvailabilityLabel: ['iOS', 'Android', 'Web'],
                    },
                    { illustrationName: m },
                  ],
                ],
              },
              {
                blurb: b.a.ae3f4564,
                features: [
                  [
                    {
                      icon: C.a,
                      heading: b.a.i65802df,
                      description: b.a.h0f8563b,
                      platformAvailabilityLabel: ['iOS', 'Web'],
                    },
                    {
                      icon: _.a,
                      heading: b.a.b7fa0cfd,
                      description: b.a.a7f3dfc9,
                      platformAvailabilityLabel: e ? ['iOS', 'Android', 'Web'] : ['Android', 'Web'],
                    },
                  ],
                  [
                    {
                      icon: R.a,
                      heading: b.a.b62d6e4c,
                      description: b.a.a24965fb,
                      platformAvailabilityLabel: ['iOS', 'Android', 'Web'],
                    },
                  ],
                ],
              },
              {
                blurb: b.a.cd2b9647,
                features: [
                  [
                    {
                      icon: D,
                      heading: b.a.hdc87500,
                      description: b.a.gaf181e0,
                      platformAvailabilityLabel: t ? ['iOS', 'Android', 'Web'] : ['iOS', 'Android'],
                    },
                    { icon: w.a, heading: b.a.i9223e6f, description: b.a.c1935a33, platformAvailabilityLabel: ['iOS'] },
                  ],
                  [
                    { icon: I.a, heading: b.a.gc8d916e, description: b.a.a353aeee, platformAvailabilityLabel: ['iOS'] },
                    { icon: k.a, heading: b.a.f39aef7b, description: b.a.b4a97be8, platformAvailabilityLabel: ['iOS'] },
                  ],
                ],
              },
              { blurb: b.a.h52ee955, features: [a] },
            ]
          )
        },
        F = r.p + 'twitter-blue-wave.d1b48db5.svg',
        x = r('aITJ'),
        H = r('MWbm'),
        B = r('t62R'),
        M = r('Wms4'),
        N = r('/yvb'),
        z = r('sgih'),
        V = r('xKuM'),
        W = r('rHpw'),
        K = r('hOZg'),
        X = r('lUZE'),
        Q = r('tH6R'),
        Z = r('Ty5D'),
        J = b.a.b9238e88,
        G = b.a.a0b7009f,
        q = {
          USD: b.a.d0783e70,
          EUR: b.a.e8c823d2,
          GBP: b.a.gbf0e6c6,
          CAD: b.a.j16ccfa2,
          AUD: b.a.c93cb976,
          NZD: b.a.c32b252a,
        },
        Y = b.a.b08821f3,
        $ = b.a.ed21f885,
        ee = function (e) {
          var t,
            r,
            a,
            n = null === (t = e.query) || void 0 === t ? void 0 : t.referring_page
          return Array.isArray(n)
            ? ''
            : n ||
                (null == e || null === (r = e.state) || void 0 === r || null === (a = r.previousPath) || void 0 === a
                  ? void 0
                  : a.slice(1)) ||
                ''
        },
        te = function (e) {
          var t = e.analytics,
            r = e.checkoutUrl,
            a = e.checkoutUrlFetchStatus,
            c = e.fetchSubscriptionProductCheckoutUrl,
            s = e.fetchSubscriptionProductDetails,
            u = e.productDetails,
            p = e.productDetailsFetchStatus,
            f = o.a.useContext(i.a).featureSwitches,
            m = f.isTrue('subscriptions_twitter_blue_logo_enabled'),
            y = f.isTrue('subscriptions_top_articles_on_ios_enabled'),
            g = f.isTrue('subscriptions_feature_1002'),
            h = !f.isTrue('dm_conversation_labels_pinned_enabled') && f.isTrue('subscriptions_feature_labs_1001'),
            O = Object(Z.g)(),
            v = Object(Z.h)(),
            E = o.a.useState(!1),
            S = n()(E, 2),
            P = S[0],
            w = S[1],
            j = function () {
              t.scribe({ action: 'start', element: 'fetch_product', data: { referring_page: ee(v) } }),
                s(l.d)
                  .then(function () {
                    t.scribe({ action: 'success', element: 'fetch_product', data: { referring_page: ee(v) } })
                  })
                  .catch(function () {
                    t.scribe({ action: 'failure', element: 'fetch_product', data: { referring_page: ee(v) } })
                  })
            }
          o.a.useEffect(
            function () {
              j()
            },
            [s],
          ),
            o.a.useEffect(function () {
              var e = Date.now()
              return (
                t.scribe({ action: 'impression', data: { referring_page: ee(v) } }),
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
              if ((w(!0), t.scribe({ action: 'click', element: 'subscribe', data: { referring_page: ee(v) } }), u)) {
                var e,
                  r = null != u && null !== (e = u.prices) && void 0 !== e && e.length ? u.prices[0] : null,
                  a = null == r ? void 0 : r.external_price_id
                a && c(l.d, a, l.c, l.a)
              }
            },
            R = function (e, t) {
              var r = e.map(function (e, t) {
                return (function (e, t) {
                  if (e.illustrationName) {
                    var r = x.b.isMobileOS() ? '100px' : 'initial'
                    return o.a.createElement(
                      o.a.Fragment,
                      { key: e.illustrationName },
                      o.a.createElement(H.a, { style: re.widthDivider }),
                      o.a.createElement(H.a, {
                        style: [
                          re.feature,
                          re.illustration,
                          {
                            backgroundImage: 'url('.concat(null == e ? void 0 : e.illustrationName, ')'),
                            maxHeight: r,
                          },
                        ],
                      }),
                    )
                  }
                  if (e.icon) {
                    var a = e.icon
                    return o.a.createElement(
                      H.a,
                      { key: t, style: re.feature, testID: 'feature' },
                      o.a.createElement(H.a, null, o.a.createElement(a, { style: re.featureIcon })),
                      o.a.createElement(
                        H.a,
                        { style: re.featureContent },
                        o.a.createElement(B.b, { size: 'body', weight: 'bold' }, e.heading),
                        o.a.createElement(
                          B.b,
                          { color: 'gray700', size: 'body', style: re.featureDescription },
                          e.description,
                        ),
                        o.a.createElement(
                          H.a,
                          { style: re.labelWrapper },
                          e.platformAvailabilityLabel.map(function (e) {
                            return o.a.createElement(
                              M.a,
                              { background: 'maskColor', bold: !0, key: e, style: re.labelStyle },
                              o.a.createElement(B.b, { color: 'gray700' }, e),
                            )
                          }),
                        ),
                      ),
                    )
                  }
                  return null
                })(e, t)
              })
              return o.a.createElement(H.a, { key: t, style: re.featureRow, testID: 'featureRow' }, r)
            },
            U = A(y, g, h).map(function (e, t) {
              return (function (e, t) {
                var r = e.features.map(function (e, t) {
                  return R(e, t)
                })
                return o.a.createElement(
                  H.a,
                  { key: t, style: re.featureGroup },
                  o.a.createElement(B.b, { size: 'title3', testID: 'featureGroup', weight: 'heavy' }, e.blurb),
                  r,
                )
              })(e, t)
            })
          return o.a.createElement(
            z.a,
            {
              allowBackNavigation: !0,
              enableMaskForDismiss: !0,
              onMaskClick: C,
              style: re.root,
              type: 'full',
              withMask: !0,
            },
            o.a.createElement(
              H.a,
              { style: re.appBarContainer },
              o.a.createElement(V.a, {
                centeredLogo: o.a.createElement(X.a, { style: re.twitterLogo }),
                leftControl: o.a.createElement(N.a, {
                  accessibilityLabel: Y,
                  borderColor: 'transparent',
                  hoverLabel: { label: Y },
                  icon: o.a.createElement(K.a, { style: re.topIcons }),
                  onPress: C,
                  pullLeft: !0,
                  size: 'medium',
                }),
                style: re.appBar,
                withBackground: !1,
              }),
            ),
            o.a.createElement(
              H.a,
              { style: re.contentWrapper },
              o.a.createElement(
                H.a,
                { style: re.bgImage },
                o.a.createElement(
                  H.a,
                  { style: [re.topContent, { paddingTop: x.b.isMobileOS() ? '26px' : '50px' }] },
                  m
                    ? o.a.createElement(
                        H.a,
                        { style: re.contentBlueIcon },
                        o.a.createElement(Q.a, { style: re.iconTwitterBlue }),
                      )
                    : o.a.createElement(B.b, { size: 'title1', weight: 'heavy' }, $),
                  o.a.createElement(B.b, { size: 'headline1', style: re.subtitle }, G),
                ),
              ),
              o.a.createElement(H.a, { style: re.content }, U),
            ),
            o.a.createElement(d.a, {
              fetchStatus: p,
              onRequestRetry: function () {
                j()
              },
              render: function () {
                var e = null != u && u.prices && u.prices.length ? u.prices[0] : null,
                  t = null == e ? void 0 : e.currency_code.toUpperCase(),
                  r = null != e && e.amount_local_micro ? e.amount_local_micro / 1e6 : null
                if (!t || !r) return null
                var n = (0, q[t])(r),
                  c = J({ price: n })
                return o.a.createElement(
                  H.a,
                  { style: re.buttonWrapper },
                  o.a.createElement(
                    H.a,
                    { style: re.termsOfService },
                    o.a.createElement(
                      B.b,
                      { align: 'center', color: 'gray700', size: 'subtext3' },
                      o.a.createElement(
                        b.a.I18NFormatMessage,
                        { $i18n: 'h73408b9' },
                        o.a.createElement(
                          B.b,
                          { link: 'https://legal.twitter.com/purchaser-terms' },
                          'Terms & Conditions',
                        ),
                      ),
                    ),
                  ),
                  o.a.createElement(
                    N.a,
                    {
                      accessibilityLabel: c,
                      disabled: !u || 'loading' === a,
                      onPress: _,
                      style: re.button,
                      type: 'primaryFilled',
                    },
                    c,
                  ),
                )
              },
              retryable: !0,
            }),
            o.a.createElement(d.a, {
              fetchStatus: a,
              onRequestRetry: function () {
                if (u) {
                  var e,
                    t = null != u && null !== (e = u.prices) && void 0 !== e && e.length ? u.prices[0] : null,
                    r = null == t ? void 0 : t.external_price_id
                  r && c(l.d, r, l.c, l.a)
                }
              },
              render: function () {
                return r && (window.location.href = r), null
              },
              retryable: !0,
            }),
          )
        },
        re = W.a.create(function (e) {
          return {
            root: { minHeight: 400 },
            appBar: { zIndex: '2' },
            appBarContainer: { backgroundColor: e.colors.white },
            bgImage: { backgroundImage: 'url('.concat(F, ')'), backgroundRepeat: 'no-repeat' },
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
        ae = p(te)
      t.default = ae
    },
    'ShJ/': function (e, t, r) {
      'use strict'
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var a = r('KEM+'),
        n = r.n(a),
        c = r('ERkP'),
        o = r.n(c),
        i = r('Lsrn'),
        l = r('k/Ka')
      function s(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, a)
        }
        return r
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? s(Object(r), !0).forEach(function (t) {
                n()(e, t, r[t])
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
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [i.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          o.a.createElement(
            'g',
            null,
            o.a.createElement('path', {
              d: 'M20.472 14.738c-.388-1.808-2.24-3.517-3.908-4.246l-.474-4.307 1.344-2.016c.258-.387.28-.88.062-1.286-.218-.406-.64-.66-1.102-.66H7.54c-.46 0-.884.254-1.1.66-.22.407-.197.9.06 1.284l1.35 2.025-.42 4.3c-1.667.732-3.515 2.44-3.896 4.222-.066.267-.043.672.222 1.01.14.178.46.474 1.06.474h3.858l2.638 6.1c.12.273.39.45.688.45s.57-.177.688-.45l2.638-6.1h3.86c.6 0 .92-.297 1.058-.474.265-.34.288-.745.228-.988zM12 20.11l-1.692-3.912h3.384L12 20.11zm-6.896-5.413c.456-1.166 1.904-2.506 3.265-2.96l.46-.153.566-5.777-1.39-2.082h7.922l-1.39 2.08.637 5.78.456.153c1.355.45 2.796 1.78 3.264 2.96H5.104z',
            }),
          ),
        )
      }
      ;(p.metadata = { width: 24, height: 24 }), (t.a = p)
    },
    XOb8: function (e, t, r) {
      'use strict'
      r.d(t, 'd', function () {
        return a
      }),
        r.d(t, 'e', function () {
          return n
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
      var a = 'V2ViU3Vic2NyaXB0aW9uUHJvZHVjdERldGFpbHM6cHJvZF9LT21pYTlJYXRWVG1JNQ==',
        n = 'rogue-one',
        c = 'https://'.concat(window.location.host),
        o = ''.concat(c, '/settings/subscription'),
        i = ''.concat(c, '/i/twitter_blue_sign_up'),
        l = ''.concat(i, '/welcome')
      ''.concat(i, '/unsuccessful')
    },
    g7Ra: function (e, t, r) {
      'use strict'
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var a = r('KEM+'),
        n = r.n(a),
        c = r('ERkP'),
        o = r.n(c),
        i = r('Lsrn'),
        l = r('shC7'),
        s = r('k/Ka')
      function u(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, a)
        }
        return r
      }
      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? u(Object(r), !0).forEach(function (t) {
                n()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : u(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var d = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(s.a)(
          'svg',
          p(
            p({}, e),
            {},
            {
              accessibilityHidden: void 0 === e.accessibilityLabel,
              style: [i.a.root, e.style, l.a.getConstants().isRTL && i.a.iconRTL],
              viewBox: '0 0 24 24',
            },
          ),
          o.a.createElement(
            'g',
            null,
            o.a.createElement('path', {
              d: 'M13.967 5.852H4.602l2.97-2.97c.293-.293.293-.768 0-1.06s-.768-.294-1.06 0L2.26 6.07c-.294.292-.294.767 0 1.06l4.25 4.25c.145.146.337.22.53.22s.383-.073.53-.22c.292-.293.292-.768 0-1.06L4.6 7.35h9.364c3.625 0 6.574 2.948 6.574 6.573S17.592 20.5 13.967 20.5H7.79c-.415 0-.75.336-.75.75s.335.75.75.75h6.178c4.452 0 8.074-3.622 8.074-8.074s-3.623-8.074-8.075-8.074z',
            }),
          ),
        )
      }
      ;(d.metadata = { width: 24, height: 24 }), (t.a = d)
    },
    hBoh: function (e, t, r) {
      'use strict'
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var a = r('KEM+'),
        n = r.n(a),
        c = r('ERkP'),
        o = r.n(c),
        i = r('Lsrn'),
        l = r('k/Ka')
      function s(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, a)
        }
        return r
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? s(Object(r), !0).forEach(function (t) {
                n()(e, t, r[t])
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
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [i.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          o.a.createElement(
            'g',
            null,
            o.a.createElement('path', {
              d: 'M16.5 2h-9C6.26 2 5.25 3.01 5.25 4.25v15.5C5.25 20.99 6.26 22 7.5 22h9c1.24 0 2.25-1.01 2.25-2.25V4.25C18.75 3.01 17.74 2 16.5 2zm-9 1.5h9c.413 0 .75.337.75.75v11.865H6.75V4.25c0-.413.337-.75.75-.75zm9 17h-9c-.413 0-.75-.337-.75-.75v-2.135h10.5v2.135c0 .413-.337.75-.75.75z',
            }),
            o.a.createElement('path', {
              d: 'M12.583 18.322h-1.166c-.414 0-.75.336-.75.75s.336.75.75.75h1.166c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z',
            }),
          ),
        )
      }
      ;(p.metadata = { width: 24, height: 24 }), (t.a = p)
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
      var a = r('KEM+'),
        n = r.n(a),
        c = (r('yH/f'), r('hBpG'), r('jQ3i'), r('x4t0'), r('JtPf'), r('7x/C'), r('oEOe')),
        o = r('Ssj5'),
        i = r('kGix')
      function l(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, a)
        }
        return r
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(r), !0).forEach(function (t) {
                n()(e, t, r[t])
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
            var r, a
            return (
              (null === (r = e.product) || void 0 === r ? void 0 : r.rest_id) &&
              (null === (a = e.product) || void 0 === a ? void 0 : a.rest_id.includes(t)) &&
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
          return function (t, r, a) {
            var n = a.api,
              o = Object(c.b)(t, {
                params: { id: e },
                request: n.SubscriptionPayments.fetchSubscriptionProductDetails,
              }),
              l = y(r(), e)
            return l !== i.a.NONE && l !== i.a.FAILED
              ? Promise.resolve()
              : o({ actionTypes: p, context: 'FETCH_SUBSCRIPTION_PRODUCT_DETAILS', meta: { id: e } })
          }
        },
        j = function (e, t, r, a) {
          return function (n, o, l) {
            var s = l.api,
              u = Object(c.b)(n, {
                params: { price_id: t, success_url: r, cancel_url: a },
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
            var a = r.api,
              n = Object(c.b)(e, { params: {}, request: a.SubscriptionPayments.fetchProductSubscriptions }),
              o = v(t())
            return o !== i.a.NONE && o !== i.a.FAILED
              ? Promise.resolve()
              : n({ actionTypes: f, context: 'FETCH_PRODUCT_SUBSCRIPTIONS', meta: {} })
          }
        },
        _ = function (e, t) {
          return function (r, a, n) {
            var o = n.api,
              l = Object(c.b)(r, {
                params: { return_url: t },
                request: o.SubscriptionPayments.fetchSubscriptionProductCustomerPortalUrl,
              }),
              s = S(a(), e)
            return s !== i.a.NONE && s !== i.a.FAILED
              ? Promise.resolve()
              : l({ actionTypes: b, context: 'FETCH_SUBSCRIPTION_PRODUCT_CUSTOMER_PORTAL_URL', meta: { id: e } })
          }
        }
      o.a.register(
        n()({}, u, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case p.REQUEST:
              var r = t.meta.id
              return s(s({}, e), {}, { products: s(s({}, e.products), {}, n()({}, r, { fetchStatus: i.a.LOADING })) })
            case p.SUCCESS:
              var a = t.meta.id
              return s(
                s({}, e),
                {},
                { products: s(s({}, e.products), {}, n()({}, a, { fetchStatus: i.a.LOADED, details: t.payload })) },
              )
            case p.FAILURE:
              var c = t.meta.id
              return s(
                s({}, e),
                {},
                { products: s(s({}, e.products), {}, n()({}, c, { fetchStatus: i.a.FAILED, error: t.payload })) },
              )
            case d.REQUEST:
              var o = t.meta.id
              return s(
                s({}, e),
                {},
                { checkoutUrls: s(s({}, e.checkoutUrls), {}, n()({}, o, { fetchStatus: i.a.LOADING })) },
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
                    n()({}, l, { fetchStatus: i.a.LOADED, checkoutUrl: t.payload }),
                  ),
                },
              )
            case d.FAILURE:
              var u = t.meta.id
              return s(
                s({}, e),
                {},
                {
                  checkoutUrls: s(s({}, e.checkoutUrls), {}, n()({}, u, { fetchStatus: i.a.FAILED, error: t.payload })),
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
                { customerPortalUrls: s(s({}, e.customerPortalUrls), {}, n()({}, y, { fetchStatus: i.a.LOADING })) },
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
                    n()({}, g, { fetchStatus: i.a.LOADED, customerPortalUrl: t.payload }),
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
                    n()({}, h, { fetchStatus: i.a.FAILED, error: t.payload }),
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
      var a = r('KEM+'),
        n = r.n(a),
        c = r('ERkP'),
        o = r.n(c),
        i = r('Lsrn'),
        l = r('k/Ka')
      function s(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, a)
        }
        return r
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? s(Object(r), !0).forEach(function (t) {
                n()(e, t, r[t])
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
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [i.a.root, e.style], viewBox: '0 0 76 24' },
          ),
          o.a.createElement(
            'g',
            null,
            o.a.createElement('path', {
              d: 'M15.543 3H2.75c-.414 0-.75.336-.75.75v16.5c0 .414.336.75.75.75h12.886c1.534 0 2.854-.225 3.917-.72 1.048-.481 1.866-1.147 2.381-2.025.489-.833.732-1.749.732-2.732 0-1.25-.356-2.336-1.128-3.184-.317-.348-.69-.635-1.113-.867.302-.21.572-.455.809-.738.675-.806 1.014-1.754 1.014-2.813 0-1.49-.605-2.722-1.786-3.626C19.28 3.39 17.598 3 15.543 3zm.543 5.718c.498-.059.972-.189 1.414-.381l-.001.002c-.329.485-.747.911-1.228 1.254.005.104.007.209.007.313 0 3.202-2.476 6.895-7.005 6.895-1.39 0-2.684-.401-3.773-1.089.193.022.389.034.588.034 1.153 0 2.215-.388 3.058-1.038-1.078-.019-1.987-.72-2.3-1.682.15.028.305.043.463.043.224 0 .441-.029.648-.084-1.127-.223-1.975-1.202-1.975-2.376v-.031c.332.181.711.29 1.115.303-.66-.434-1.095-1.177-1.095-2.017 0-.443.122-.859.333-1.218 1.214 1.466 3.028 2.431 5.075 2.532-.041-.178-.064-.362-.064-.551 0-1.339 1.102-2.424 2.462-2.424.708 0 1.348.294 1.797.765.561-.108 1.088-.31 1.563-.588-.183.563-.573 1.039-1.082 1.338zm14.776 12.285H25.64V2.625h5.222v18.378zm10.35.482c-2.163 0-3.844-.54-5.044-1.622-1.183-1.082-1.775-2.62-1.775-4.614V8.33h5.222v5.626c0 1.37.33 2.366.99 2.99.658.627 1.57.94 2.737.94 1.436 0 2.535-.39 3.295-1.167.76-.795 1.14-1.8 1.14-3.017V8.33H53v12.673h-5.12v-2.89c-.56 1.1-1.43 1.936-2.612 2.51-1.183.575-2.535.862-4.056.862zm33.311-5.729H60.53c.186.794.7 1.41 1.546 1.85.845.44 1.943.66 3.295.66 1 0 1.91-.152 2.74-.457.844-.322 1.495-.76 1.95-1.32l3.956 1.725c-.896 1.065-2.096 1.876-3.6 2.433-1.487.558-3.245.837-5.273.837-1.994 0-3.71-.262-5.146-.786-1.436-.542-2.543-1.32-3.32-2.333-.76-1.03-1.14-2.248-1.14-3.65 0-1.42.388-2.645 1.165-3.676.777-1.03 1.876-1.816 3.295-2.356 1.437-.558 3.11-.837 5.02-.837 1.994 0 3.7.296 5.12.887 1.437.575 2.527 1.403 3.27 2.485.744 1.08 1.116 2.373 1.116 3.877v.66l-.001.001zM69.35 13.17c-.032-.76-.455-1.377-1.266-1.85-.794-.473-1.825-.71-3.093-.71-1.25 0-2.272.228-3.066.684-.794.457-1.267 1.082-1.42 1.876h8.847-.002z',
            }),
          ),
        )
      }
      ;(p.metadata = { width: 76, height: 24 }), (t.a = p)
    },
    vFjZ: function (e, t, r) {
      'use strict'
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var a = r('KEM+'),
        n = r.n(a),
        c = r('ERkP'),
        o = r.n(c),
        i = r('Lsrn'),
        l = r('k/Ka')
      function s(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, a)
        }
        return r
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? s(Object(r), !0).forEach(function (t) {
                n()(e, t, r[t])
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
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [i.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          o.a.createElement(
            'g',
            null,
            o.a.createElement('path', {
              d: 'M8.18 16.99c-.19.154-.476.032-.504-.21-.137-1.214-.234-4.053 1.483-5.943.908-1 3.02-1.52 4.475-.198s1.14 3.473.23 4.473c-2.07 2.15-3.428.058-5.686 1.878zm7.512-5.785l6.383-7.216c.45-.45.45-1.18 0-1.628-.45-.45-1.178-.45-1.627 0l-7.232 6.402s.782.106 1.595.93c.548.558.882 1.51.882 1.51z',
            }),
            o.a.createElement('path', {
              d: 'M17.45 22.28H3.673c-1.148 0-2.083-.946-2.083-2.11V7.926c0-1.165.934-2.112 2.082-2.112h5.836c.414 0 .75.336.75.75s-.336.75-.75.75H3.672c-.32 0-.583.274-.583.612V20.17c0 .336.26.61.582.61h13.78c.32 0 .583-.273.583-.61v-6.28c0-.415.336-.75.75-.75s.75.335.75.75v6.28c0 1.163-.934 2.11-2.084 2.11z',
            }),
          ),
        )
      }
      ;(p.metadata = { width: 24, height: 24 }), (t.a = p)
    },
    yEpk: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'TwitterBlueSignUpSuccess', function () {
          return R
        })
      var a = r('ddV6'),
        n = r.n(a),
        c = r('ERkP'),
        o = r.n(c),
        i = r('v6aA'),
        l = r('gUb7'),
        s = r('rxPX'),
        u = Object(s.a)()
          .propsFromActions(function () {
            return { fetchUserClaims: l.a }
          })
          .withAnalytics({ page: 'subscriptions', section: 'welcome' }),
        p = r('v//M'),
        d = r('3XMw'),
        f = r.n(d),
        b = r('hOZg'),
        m = r.p + 'twitter-blue-welcome.f64637a5.png',
        y = r('Ty5D'),
        g = r('aITJ'),
        h = r('t62R'),
        O = r('/yvb'),
        v = r('sgih'),
        E = r('rHpw'),
        S = r('U+bB'),
        P = r('MWbm'),
        w = f.a.ia5e7487,
        j = f.a.a893d601,
        C = f.a.f0e32de5,
        _ = f.a.gc6e8c17
      function R(e) {
        var t = e.analytics,
          r = e.fetchUserClaims,
          a = Object(y.g)(),
          c = o.a.useContext(i.a).userClaims,
          l = o.a.useState('loading'),
          s = n()(l, 2),
          u = s[0],
          d = s[1]
        function f() {
          var e = 0
          d('loading')
          var t = setInterval(function () {
            c.isTwitterBlueSubscriber() && (d('loaded'), clearInterval(t)),
              e > 5 ? (d('failed'), clearInterval(t)) : ((e += 1), r({}))
          }, 1e3)
        }
        function E() {
          a.push('/home')
        }
        function R() {
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(h.b, { size: 'title2', style: U.title, weight: 'heavy' }, C),
            o.a.createElement(h.b, { style: U.subtitle }, _),
            o.a.createElement(O.a, { onPress: E, size: 'xLarge', type: 'primaryFilled' }, j),
          )
        }
        return (
          o.a.useEffect(function () {
            t.scribe({ action: 'impression' })
          }, []),
          o.a.useEffect(function () {
            f()
          }, []),
          o.a.createElement(
            v.a,
            { allowBackNavigation: !0, enableMaskForDismiss: !0, onMaskClick: E, style: U.root, type: 'full' },
            o.a.createElement(
              P.a,
              { style: U.topBar },
              o.a.createElement(O.a, {
                accessibilityLabel: w,
                hoverLabel: { label: w },
                icon: o.a.createElement(b.a, { style: U.topIcons }),
                onPress: E,
                pullRight: !0,
                size: 'medium',
                type: 'brandText',
              }),
            ),
            o.a.createElement(
              P.a,
              { style: g.b.isMobileOS() ? U.contentSmall : U.content },
              o.a.createElement(S.a, { source: m, style: U.img }),
              o.a.createElement(p.a, { fetchStatus: u, onRequestRetry: f, render: R, retryable: !0 }),
            ),
          )
        )
      }
      var U = E.a.create(function (e) {
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
        T = u(R)
      t.default = T
    },
  },
])
//# sourceMappingURL=WIPED
