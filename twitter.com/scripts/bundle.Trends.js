;(window.webpackJsonp = window.webpackJsonp || []).push([
  [96],
  {
    '+Bsv': function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        a = n.n(r),
        o = n('3XMw'),
        i = n.n(o),
        c = n('M2x3'),
        u = 'settingsAppBar',
        s = n('/yvb'),
        l = n('rHpw'),
        f = i.a.bb081ea1,
        d = { viewType: 'settings_button' },
        b = a.a.memo(function (e) {
          var t = e.onPress,
            n = e.pullRight,
            r = e.to
          return a.a.createElement(s.a, {
            accessibilityLabel: f,
            behavioralEventContext: d,
            hoverLabel: { label: f },
            icon: a.a.createElement(c.a, null),
            link: r,
            onPress: t,
            pullRight: n,
            style: p.button,
            testID: u,
            type: 'primaryText',
          })
        }),
        p = l.a.create(function (e) {
          return { button: { marginVertical: 'calc(-'.concat(e.spaces.space12, ')') } }
        })
      t.a = b
    },
    BxsD: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return d
      }),
        n.d(t, 'b', function () {
          return b
        }),
        n.d(t, 'c', function () {
          return O
        }),
        n.d(t, 'd', function () {
          return g
        }),
        n.d(t, 'f', function () {
          return v
        }),
        n.d(t, 'e', function () {
          return w
        }),
        n.d(t, 'g', function () {
          return E
        })
      n('+KXO'), n('1t7P'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        o = (n('yH/f'), n('2G9S'), n('z84I'), n('LW0h'), n('vrRf'), n('vXCH')),
        i = n('oQhu'),
        c = n('ZNT5'),
        u = n('eR3e')
      function s(e, t) {
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
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? s(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var f = Object.freeze({ Trends: 'trends' }),
        d = Object.freeze({ WebSidebar: 'web_sidebar' }),
        b = 'explore-',
        p = 9e5,
        O = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = e.contentType,
            n = e.displayLocation,
            r = e.featureSwitches,
            a = e.focalTweetId,
            o = e.includePageConfiguration,
            i = void 0 !== o && o,
            u = e.initialTabId,
            s = e.profileUserId,
            f = t || n || 'main',
            d = a
              ? ''.concat(b).concat(f, '-tweet-').concat(a)
              : s
              ? ''.concat(b).concat(f, '-user-').concat(s)
              : ''.concat(b).concat(f),
            O = r.isTrue('responsive_web_new_client_events_enabled')
          return Object(c.a)({
            timelineId: d,
            formatResponse: y(O),
            getEndpoint: function (e) {
              return e.URT.fetchExplore
            },
            getEndpointParams: function (e) {
              return l(
                l({}, e),
                {},
                {
                  candidate_source: t,
                  display_location: n,
                  focal_tweet_id: a,
                  include_page_configuration: i,
                  initial_tab_id: u,
                  profile_user_id: s,
                  entity_tokens: O,
                },
              )
            },
            context: 'FETCH_EXPLORE',
            perfKey: ''.concat(b).concat(f),
            staleIntervalMs: p,
          })
        },
        y = function (e) {
          return function (t) {
            var n = t.pageConfiguration
            if (e && n && n.tabs) {
              var r = n.tabs.tabs.map(function (t) {
                  var n,
                    r,
                    a,
                    o = l(
                      l(
                        {},
                        null === (n = t.urtEndpoint) ||
                          void 0 === n ||
                          null === (r = n.urtEndpointOptions) ||
                          void 0 === r
                          ? void 0
                          : r.requestParams,
                      ),
                      {},
                      { entity_tokens: e },
                    )
                  return l(
                    l({}, t),
                    {},
                    {
                      urtEndpoint: l(
                        l({}, t.urtEndpoint),
                        {},
                        {
                          urtEndpointOptions: l(
                            l({}, null === (a = t.urtEndpoint) || void 0 === a ? void 0 : a.urtEndpointOptions),
                            {},
                            { requestParams: o },
                          ),
                        },
                      ),
                    },
                  )
                }),
                a = l(l({}, t), {}, { pageConfiguration: l(l({}, n), {}, { tabs: l(l({}, n.tabs), {}, { tabs: r }) }) })
              return Object(o.a)(a)
            }
            return Object(o.a)(t)
          }
        },
        g = function (e, t) {
          return O({ featureSwitches: e, includePageConfiguration: !0, initialTabId: t })
        },
        v = Object(i.a)(function (e) {
          return O({ featureSwitches: e, contentType: f.Trends })
        }),
        w = Object(i.a)(function (e) {
          return O({ featureSwitches: e, displayLocation: d.WebSidebar })
        }),
        E = function () {
          return function (e, t) {
            return e(
              Object(u.t)(t())
                .filter(function (e) {
                  return 0 === e.indexOf(b)
                })
                .map(function (e) {
                  return Object(u.g)(e)
                }),
            )
          }
        }
    },
    XtkE: function (e, t, n) {
      'use strict'
      var r = n('ezF+'),
        a = (n('JtPf'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('XBtf'))
      t.a = function (e) {
        var t = e.errorContext,
          o = e.withThirdPartyCards,
          i = void 0 !== o && o
        return r.e({
          loader: function () {
            return n.e(236).then(n.bind(null, '+92Z'))
          },
          loaderKey: 'trendDefaultLoader',
          loaderOptions: { withThirdPartyCards: i, errorContext: t },
          strategy: a.a.Critical,
        })
      }
    },
    iBrK: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'TrendsScreen', function () {
          return X
        })
      var r,
        a = n('ERkP'),
        o = n.n(a),
        i = n('v6aA'),
        c = n('es0u'),
        u = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('KEM+')),
        s = n.n(u),
        l = n('PnFR'),
        f = n('8UdT'),
        d = n('5Y9N'),
        b = n('XtkE')
      function p(e, t) {
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
      function O(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? p(Object(n), !0).forEach(function (t) {
                s()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : p(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var y =
          ((r = {}),
          s()(r, f.b.TimelineCursor, Object(l.a)({})),
          s()(r, f.b.Trend, Object(b.a)({ withThirdPartyCards: !0, errorContext: 'TRENDS_SCREEN' })),
          r),
        g = O(O({}, Object(d.a)({})), y),
        v = n('BxsD'),
        w = n('dwig'),
        E = n('0+qk'),
        j = n('3XMw'),
        h = n.n(j),
        m = n('VTxf'),
        P = n('yoO3'),
        T = n('fTQJ'),
        C = n('+Bsv'),
        _ = n('VS6U'),
        x = n('7JQg'),
        S = n('FIs5'),
        R = n('mw9i'),
        k = h.a.c5f4befa,
        D = h.a.ae05f268,
        L = function () {
          return o.a.createElement(m.a, null)
        },
        I = function () {
          return o.a.createElement(S.a, { message: D })
        },
        X = function (e) {
          var t = e.history,
            n = o.a.useContext(i.a).featureSwitches,
            r = o.a.createElement(E.a, { history: t }),
            a = o.a.createElement(C.a, { pullRight: !0, to: '/settings/trends' })
          return o.a.createElement(
            P.a,
            null,
            o.a.createElement(_.a, {
              backLocation: '/explore',
              history: t,
              primaryContent: o.a.createElement(
                w.a,
                { component: R.a, fab: r },
                o.a.createElement(T.a, {
                  entryConfiguration: g,
                  module: Object(v.f)(n),
                  renderEmptyState: L,
                  renderUnavailable: I,
                  title: k,
                }),
              ),
              rightControl: a,
              sidebarContent: o.a.createElement(c.a, { withTrends: !1 }),
              title: k,
            }),
          )
        }
      t.default = Object(x.c)({ page: 'guide', section: 'all_trends' })(X)
    },
  },
])
//# sourceMappingURL=WIPED
