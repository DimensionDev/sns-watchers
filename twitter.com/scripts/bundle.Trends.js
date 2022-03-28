;(window.webpackJsonp = window.webpackJsonp || []).push([
  [101],
  {
    '+Bsv': function (e, t, n) {
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
        b = a.a.memo(function (e) {
          var t = e.onPress,
            n = e.pullRight,
            r = e.to
          return a.a.createElement(s.a, {
            accessibilityLabel: d,
            behavioralEventContext: f,
            hoverLabel: { label: d },
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
        return l
      }),
        n.d(t, 'b', function () {
          return d
        }),
        n.d(t, 'c', function () {
          return b
        }),
        n.d(t, 'd', function () {
          return E
        }),
        n.d(t, 'f', function () {
          return v
        }),
        n.d(t, 'e', function () {
          return m
        }),
        n.d(t, 'g', function () {
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
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = e.contentType,
            n = e.displayLocation,
            r = e.featureSwitches,
            i = e.focalTweetId,
            o = e.includePageConfiguration,
            u = void 0 !== o && o,
            s = e.initialTabId,
            l = e.profileUserId,
            b = t || n || 'main',
            E = i
              ? ''.concat(d).concat(b, '-tweet-').concat(i)
              : l
              ? ''.concat(d).concat(b, '-user-').concat(l)
              : ''.concat(d).concat(b),
            v = r.isTrue('responsive_web_behavioral_events_enabled')
          return Object(c.a)({
            timelineId: E,
            formatResponse: p(v),
            getEndpoint: function (e) {
              return e.URT.fetchExplore
            },
            getEndpointParams: function (e) {
              return a()(
                a()({}, e),
                {},
                {
                  candidate_source: t,
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
        p = function (e) {
          return function (t) {
            var n = t.pageConfiguration
            if (e && n && n.tabs) {
              var r = n.tabs.tabs.map(function (t) {
                  var n,
                    r,
                    i,
                    o = a()(
                      a()(
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
                  return a()(
                    a()({}, t),
                    {},
                    {
                      urtEndpoint: a()(
                        a()({}, t.urtEndpoint),
                        {},
                        {
                          urtEndpointOptions: a()(
                            a()({}, null === (i = t.urtEndpoint) || void 0 === i ? void 0 : i.urtEndpointOptions),
                            {},
                            { requestParams: o },
                          ),
                        },
                      ),
                    },
                  )
                }),
                o = a()(
                  a()({}, t),
                  {},
                  { pageConfiguration: a()(a()({}, n), {}, { tabs: a()(a()({}, n.tabs), {}, { tabs: r }) }) },
                )
              return Object(i.a)(o)
            }
            return Object(i.a)(t)
          }
        },
        E = function (e, t) {
          return b({ featureSwitches: e, includePageConfiguration: !0, initialTabId: t })
        },
        v = Object(o.a)(function (e) {
          return b({ featureSwitches: e, contentType: s.Trends })
        }),
        m = Object(o.a)(function (e) {
          return b({ featureSwitches: e, displayLocation: l.WebSidebar })
        }),
        g = function () {
          return function (e, t) {
            return e(
              Object(u.t)(t())
                .filter(function (e) {
                  return 0 === e.indexOf(d)
                })
                .map(function (e) {
                  return Object(u.g)(e)
                }),
            )
          }
        }
    },
    iBrK: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'TrendsScreen', function () {
          return K
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
        w = n('0+qk'),
        h = n('3XMw'),
        T = n.n(h),
        _ = n('VTxf'),
        O = n('yoO3'),
        C = n('fTQJ'),
        j = n('+Bsv'),
        x = n('VS6U'),
        R = n('Irs7'),
        S = n('FIs5'),
        P = n('mw9i'),
        k = T.a.c5f4befa,
        I = T.a.ae05f268,
        L = function () {
          return i.a.createElement(_.a, null)
        },
        B = function () {
          return i.a.createElement(S.a, { message: I })
        },
        K = function (e) {
          var t = e.history,
            n = i.a.useContext(o.a).featureSwitches,
            r = i.a.createElement(w.a, { history: t }),
            a = i.a.createElement(j.a, { pullRight: !0, to: '/settings/trends' })
          return i.a.createElement(
            O.a,
            null,
            i.a.createElement(x.a, {
              backLocation: '/explore',
              history: t,
              primaryContent: i.a.createElement(
                y.a,
                { component: P.a, fab: r },
                i.a.createElement(C.a, {
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
      t.default = Object(R.a)(K, { page: 'guide', section: 'all_trends' })
    },
  },
])
//# sourceMappingURL=WIPED
