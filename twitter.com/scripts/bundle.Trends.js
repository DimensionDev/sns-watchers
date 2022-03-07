;(window.webpackJsonp = window.webpackJsonp || []).push([
  [100],
  {
    '+Bsv': function (t, e, n) {
      'use strict'
      var r = n('ERkP'),
        a = n.n(r),
        i = n('3XMw'),
        o = n.n(i),
        c = n('M2x3'),
        u = 'settingsAppBar',
        s = n('/yvb'),
        l = n('rHpw'),
        d = o.a.bb081ea1,
        f = { viewType: 'settings_button' },
        b = a.a.memo(function (t) {
          var e = t.onPress,
            n = t.pullRight,
            r = t.to
          return a.a.createElement(s.a, {
            accessibilityLabel: d,
            behavioralEventContext: f,
            hoverLabel: { label: d },
            icon: a.a.createElement(c.a, null),
            link: r,
            onPress: e,
            pullRight: n,
            style: p.button,
            testID: u,
            type: 'primaryText',
          })
        }),
        p = l.a.create(function (t) {
          return { button: { marginVertical: 'calc(-'.concat(t.spaces.space12, ')') } }
        })
      e.a = b
    },
    BxsD: function (t, e, n) {
      'use strict'
      n.d(e, 'a', function () {
        return l
      }),
        n.d(e, 'b', function () {
          return d
        }),
        n.d(e, 'c', function () {
          return b
        }),
        n.d(e, 'd', function () {
          return E
        }),
        n.d(e, 'f', function () {
          return v
        }),
        n.d(e, 'e', function () {
          return m
        }),
        n.d(e, 'g', function () {
          return g
        })
      var r = n('yiKp'),
        a = n.n(r),
        i = (n('yH/f'), n('2G9S'), n('z84I'), n('LW0h'), n('7x/C'), n('vrRf'), n('vXCH')),
        o = n('oQhu'),
        c = n('ZNT5'),
        u = n('eR3e'),
        s = Object.freeze({ Trends: 'trends' }),
        l = Object.freeze({ WebSidebar: 'web_sidebar' }),
        d = 'explore-',
        f = 9e5,
        b = function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = t.contentType,
            n = t.displayLocation,
            r = t.featureSwitches,
            i = t.focalTweetId,
            o = t.includePageConfiguration,
            u = void 0 !== o && o,
            s = t.initialTabId,
            l = t.profileUserId,
            b = e || n || 'main',
            E = i
              ? ''.concat(d).concat(b, '-tweet-').concat(i)
              : l
              ? ''.concat(d).concat(b, '-user-').concat(l)
              : ''.concat(d).concat(b),
            v = r.isTrue('responsive_web_new_client_events_enabled')
          return Object(c.a)({
            timelineId: E,
            formatResponse: p(v),
            getEndpoint: function (t) {
              return t.URT.fetchExplore
            },
            getEndpointParams: function (t) {
              return a()(
                a()({}, t),
                {},
                {
                  candidate_source: e,
                  display_location: n,
                  focal_tweet_id: i,
                  include_page_configuration: u,
                  initial_tab_id: s,
                  profile_user_id: l,
                  entity_tokens: v,
                },
              )
            },
            context: 'FETCH_EXPLORE',
            perfKey: ''.concat(d).concat(b),
            staleIntervalMs: f,
          })
        },
        p = function (t) {
          return function (e) {
            var n = e.pageConfiguration
            if (t && n && n.tabs) {
              var r = n.tabs.tabs.map(function (e) {
                  var n,
                    r,
                    i,
                    o = a()(
                      a()(
                        {},
                        null === (n = e.urtEndpoint) ||
                          void 0 === n ||
                          null === (r = n.urtEndpointOptions) ||
                          void 0 === r
                          ? void 0
                          : r.requestParams,
                      ),
                      {},
                      { entity_tokens: t },
                    )
                  return a()(
                    a()({}, e),
                    {},
                    {
                      urtEndpoint: a()(
                        a()({}, e.urtEndpoint),
                        {},
                        {
                          urtEndpointOptions: a()(
                            a()({}, null === (i = e.urtEndpoint) || void 0 === i ? void 0 : i.urtEndpointOptions),
                            {},
                            { requestParams: o },
                          ),
                        },
                      ),
                    },
                  )
                }),
                o = a()(
                  a()({}, e),
                  {},
                  { pageConfiguration: a()(a()({}, n), {}, { tabs: a()(a()({}, n.tabs), {}, { tabs: r }) }) },
                )
              return Object(i.a)(o)
            }
            return Object(i.a)(e)
          }
        },
        E = function (t, e) {
          return b({ featureSwitches: t, includePageConfiguration: !0, initialTabId: e })
        },
        v = Object(o.a)(function (t) {
          return b({ featureSwitches: t, contentType: s.Trends })
        }),
        m = Object(o.a)(function (t) {
          return b({ featureSwitches: t, displayLocation: l.WebSidebar })
        }),
        g = function () {
          return function (t, e) {
            return t(
              Object(u.t)(e())
                .filter(function (t) {
                  return 0 === t.indexOf(d)
                })
                .map(function (t) {
                  return Object(u.g)(t)
                }),
            )
          }
        }
    },
    XtkE: function (t, e, n) {
      'use strict'
      var r = n('ezF+'),
        a = (n('lTEL'), n('7x/C'), n('JtPf'), n('87if'), n('kYxP'), n('XBtf'))
      e.a = function (t) {
        var e = t.errorContext,
          i = t.withThirdPartyCards,
          o = void 0 !== i && i
        return r.e({
          loader: function () {
            return n.e(243).then(n.bind(null, '+92Z'))
          },
          loaderKey: 'trendDefaultLoader',
          loaderOptions: { withThirdPartyCards: o, errorContext: e },
          strategy: a.a.Critical,
        })
      }
    },
    iBrK: function (t, e, n) {
      'use strict'
      n.r(e),
        n.d(e, 'TrendsScreen', function () {
          return X
        })
      var r,
        a = n('ERkP'),
        i = n.n(a),
        o = n('v6aA'),
        c = n('es0u'),
        u = n('yiKp'),
        s = n.n(u),
        l = n('KEM+'),
        d = n.n(l),
        f = n('PnFR'),
        b = n('8UdT'),
        p = n('5Y9N'),
        E = n('XtkE'),
        v =
          ((r = {}),
          d()(r, b.b.TimelineCursor, Object(f.a)({})),
          d()(r, b.b.Trend, Object(E.a)({ withThirdPartyCards: !0, errorContext: 'TRENDS_SCREEN' })),
          r),
        m = s()(s()({}, Object(p.a)({})), v),
        g = n('BxsD'),
        y = n('dwig'),
        h = n('0+qk'),
        w = n('3XMw'),
        T = n.n(w),
        C = n('VTxf'),
        _ = n('yoO3'),
        O = n('fTQJ'),
        x = n('+Bsv'),
        P = n('VS6U'),
        j = n('Irs7'),
        R = n('FIs5'),
        S = n('mw9i'),
        k = T.a.c5f4befa,
        I = T.a.ae05f268,
        L = function () {
          return i.a.createElement(C.a, null)
        },
        B = function () {
          return i.a.createElement(R.a, { message: I })
        },
        X = function (t) {
          var e = t.history,
            n = i.a.useContext(o.a).featureSwitches,
            r = i.a.createElement(h.a, { history: e }),
            a = i.a.createElement(x.a, { pullRight: !0, to: '/settings/trends' })
          return i.a.createElement(
            _.a,
            null,
            i.a.createElement(P.a, {
              backLocation: '/explore',
              history: e,
              primaryContent: i.a.createElement(
                y.a,
                { component: S.a, fab: r },
                i.a.createElement(O.a, {
                  entryConfiguration: m,
                  module: Object(g.f)(n),
                  renderEmptyState: L,
                  renderUnavailable: B,
                  title: k,
                }),
              ),
              rightControl: a,
              sidebarContent: i.a.createElement(c.a, { withTrends: !1 }),
              title: k,
            }),
          )
        }
      e.default = Object(j.a)(X, { page: 'guide', section: 'all_trends' })
    },
  },
])
//# sourceMappingURL=WIPED
