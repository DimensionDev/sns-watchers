;(window.webpackJsonp = window.webpackJsonp || []).push([
  [94],
  {
    '+Bsv': function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        o = n('3XMw'),
        i = n.n(o),
        a = n('M2x3'),
        c = 'settingsAppBar',
        u = n('/yvb'),
        s = n('rHpw'),
        l = i.a.bb081ea1,
        f = { viewType: 'settings_button' },
        d = r.memo(function (e) {
          var t = e.onPress,
            n = e.pullRight,
            o = e.to
          return r.createElement(u.a, {
            accessibilityLabel: l,
            behavioralEventContext: f,
            hoverLabel: { label: l },
            icon: r.createElement(a.a, null),
            link: o,
            onPress: t,
            pullRight: n,
            style: b.button,
            testID: c,
            type: 'primaryText',
          })
        }),
        b = s.a.create(function (e) {
          return { button: { marginVertical: 'calc(-'.concat(e.spaces.space12, ')') } }
        })
      t.a = d
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
        o = n.n(r),
        i = (n('yH/f'), n('2G9S'), n('z84I'), n('LW0h'), n('vrRf'), n('vXCH')),
        a = n('oQhu'),
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
                o()(e, t, n[t])
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
            o = e.focalTweetId,
            i = e.includePageConfiguration,
            a = void 0 !== i && i,
            u = e.initialTabId,
            s = e.profileUserId,
            f = t || n || 'main',
            d = o
              ? ''.concat(b).concat(f, '-tweet-').concat(o)
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
                  focal_tweet_id: o,
                  include_page_configuration: a,
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
                    o,
                    i = l(
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
                            l({}, null === (o = t.urtEndpoint) || void 0 === o ? void 0 : o.urtEndpointOptions),
                            {},
                            { requestParams: i },
                          ),
                        },
                      ),
                    },
                  )
                }),
                o = l(l({}, t), {}, { pageConfiguration: l(l({}, n), {}, { tabs: l(l({}, n.tabs), {}, { tabs: r }) }) })
              return Object(i.a)(o)
            }
            return Object(i.a)(t)
          }
        },
        g = function (e, t) {
          return O({ featureSwitches: e, includePageConfiguration: !0, initialTabId: t })
        },
        v = Object(a.a)(function (e) {
          return O({ featureSwitches: e, contentType: f.Trends })
        }),
        w = Object(a.a)(function (e) {
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
        o = (n('JtPf'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('XBtf'))
      t.a = function (e) {
        var t = e.errorContext,
          i = e.withThirdPartyCards,
          a = void 0 !== i && i
        return r.e({
          loader: function () {
            return n.e(230).then(n.bind(null, '+92Z'))
          },
          loaderKey: 'trendDefaultLoader',
          loaderOptions: { withThirdPartyCards: a, errorContext: t },
          strategy: o.a.Critical,
        })
      }
    },
    iBrK: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'TrendsScreen', function () {
          return I
        })
      var r,
        o = n('ERkP'),
        i = n('v6aA'),
        a = n('es0u'),
        c = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('KEM+')),
        u = n.n(c),
        s = n('PnFR'),
        l = n('8UdT'),
        f = n('5Y9N'),
        d = n('XtkE')
      function b(e, t) {
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
      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? b(Object(n), !0).forEach(function (t) {
                u()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : b(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var O =
          ((r = {}),
          u()(r, l.b.TimelineCursor, Object(s.a)({})),
          u()(r, l.b.Trend, Object(d.a)({ withThirdPartyCards: !0, errorContext: 'TRENDS_SCREEN' })),
          r),
        y = p(p({}, Object(f.a)({})), O),
        g = n('BxsD'),
        v = n('dwig'),
        w = n('0+qk'),
        E = n('3XMw'),
        j = n.n(E),
        h = n('VTxf'),
        m = n('yoO3'),
        P = n('fTQJ'),
        T = n('+Bsv'),
        C = n('VS6U'),
        _ = n('7JQg'),
        x = n('FIs5'),
        S = n('mw9i'),
        R = j.a.c5f4befa,
        k = j.a.ae05f268,
        D = function () {
          return o.createElement(h.a, null)
        },
        L = function () {
          return o.createElement(x.a, { message: k })
        },
        I = function (e) {
          var t = e.history,
            n = o.useContext(i.a).featureSwitches,
            r = o.createElement(w.a, { history: t }),
            c = o.createElement(T.a, { pullRight: !0, to: '/settings/trends' })
          return o.createElement(
            m.a,
            null,
            o.createElement(C.a, {
              backLocation: '/explore',
              history: t,
              primaryContent: o.createElement(
                v.a,
                { component: S.a, fab: r },
                o.createElement(P.a, {
                  entryConfiguration: y,
                  module: Object(g.f)(n),
                  renderEmptyState: D,
                  renderUnavailable: L,
                  title: R,
                }),
              ),
              rightControl: c,
              sidebarContent: o.createElement(a.a, { withTrends: !1 }),
              title: R,
            }),
          )
        }
      t.default = Object(_.c)({ page: 'guide', section: 'all_trends' })(I)
    },
  },
])
//# sourceMappingURL=WIPED
