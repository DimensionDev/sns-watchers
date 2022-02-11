;(window.webpackJsonp = window.webpackJsonp || []).push([
  [56],
  {
    '+Bsv': function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        i = n('3XMw'),
        o = n.n(i),
        c = n('M2x3'),
        l = 'settingsAppBar',
        s = n('/yvb'),
        u = n('rHpw'),
        d = o.a.bb081ea1,
        f = { viewType: 'settings_button' },
        p = r.a.memo(function (e) {
          var t = e.onPress,
            n = e.pullRight,
            a = e.to
          return r.a.createElement(s.a, {
            accessibilityLabel: d,
            behavioralEventContext: f,
            hoverLabel: { label: d },
            icon: r.a.createElement(c.a, null),
            link: a,
            onPress: t,
            pullRight: n,
            style: b.button,
            testID: l,
            type: 'primaryText',
          })
        }),
        b = u.a.create(function (e) {
          return { button: { marginVertical: 'calc(-'.concat(e.spaces.space12, ')') } }
        })
      t.a = p
    },
    '+o05': function (e, t, n) {
      'use strict'
      var a = n('KEM+'),
        r = n.n(a),
        i = n('ezF+'),
        o = (n('yH/f'), Object.freeze({ Cell: 'Cell', Hero: 'Hero', Tile: 'Tile' })),
        c =
          (n('lTEL'),
          n('7x/C'),
          n('JtPf'),
          n('87if'),
          n('kYxP'),
          {
            loader: function () {
              return n.e(233).then(n.bind(null, 'QPD4'))
            },
            loaderKey: 'defaultScoreEventSummaryLoader',
            strategy: n('XBtf').a.Critical,
          })
      t.a = i.c({
        selectDisplayType: function (e) {
          return e.content.displayType
        },
        handlers: r()({}, o.Cell, c),
      })
    },
    BxsD: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return u
      }),
        n.d(t, 'b', function () {
          return d
        }),
        n.d(t, 'c', function () {
          return p
        }),
        n.d(t, 'd', function () {
          return m
        }),
        n.d(t, 'f', function () {
          return h
        }),
        n.d(t, 'e', function () {
          return g
        }),
        n.d(t, 'g', function () {
          return y
        })
      var a = n('yiKp'),
        r = n.n(a),
        i = (n('yH/f'), n('2G9S'), n('z84I'), n('LW0h'), n('7x/C'), n('vrRf'), n('vXCH')),
        o = n('oQhu'),
        c = n('ZNT5'),
        l = n('eR3e'),
        s = Object.freeze({ Trends: 'trends' }),
        u = Object.freeze({ WebSidebar: 'web_sidebar' }),
        d = 'explore-',
        f = 9e5,
        p = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = e.contentType,
            n = e.displayLocation,
            a = e.featureSwitches,
            i = e.focalTweetId,
            o = e.includePageConfiguration,
            l = void 0 !== o && o,
            s = e.initialTabId,
            u = e.profileUserId,
            p = t || n || 'main',
            m = i
              ? ''.concat(d).concat(p, '-tweet-').concat(i)
              : u
              ? ''.concat(d).concat(p, '-user-').concat(u)
              : ''.concat(d).concat(p),
            h = a.isTrue('responsive_web_new_client_events_enabled')
          return Object(c.a)({
            timelineId: m,
            formatResponse: b(h),
            getEndpoint: function (e) {
              return e.URT.fetchExplore
            },
            getEndpointParams: function (e) {
              return r()(
                r()({}, e),
                {},
                {
                  candidate_source: t,
                  display_location: n,
                  focal_tweet_id: i,
                  include_page_configuration: l,
                  initial_tab_id: s,
                  profile_user_id: u,
                  entity_tokens: h,
                },
              )
            },
            context: 'FETCH_EXPLORE',
            perfKey: ''.concat(d).concat(p),
            staleIntervalMs: f,
          })
        },
        b = function (e) {
          return function (t) {
            var n = t.pageConfiguration
            if (e && n && n.tabs) {
              var a = n.tabs.tabs.map(function (t) {
                  var n,
                    a,
                    i,
                    o = r()(
                      r()(
                        {},
                        null === (n = t.urtEndpoint) ||
                          void 0 === n ||
                          null === (a = n.urtEndpointOptions) ||
                          void 0 === a
                          ? void 0
                          : a.requestParams,
                      ),
                      {},
                      { entity_tokens: e },
                    )
                  return r()(
                    r()({}, t),
                    {},
                    {
                      urtEndpoint: r()(
                        r()({}, t.urtEndpoint),
                        {},
                        {
                          urtEndpointOptions: r()(
                            r()({}, null === (i = t.urtEndpoint) || void 0 === i ? void 0 : i.urtEndpointOptions),
                            {},
                            { requestParams: o },
                          ),
                        },
                      ),
                    },
                  )
                }),
                o = r()(
                  r()({}, t),
                  {},
                  { pageConfiguration: r()(r()({}, n), {}, { tabs: r()(r()({}, n.tabs), {}, { tabs: a }) }) },
                )
              return Object(i.a)(o)
            }
            return Object(i.a)(t)
          }
        },
        m = function (e, t) {
          return p({ featureSwitches: e, includePageConfiguration: !0, initialTabId: t })
        },
        h = Object(o.a)(function (e) {
          return p({ featureSwitches: e, contentType: s.Trends })
        }),
        g = Object(o.a)(function (e) {
          return p({ featureSwitches: e, displayLocation: u.WebSidebar })
        }),
        y = function () {
          return function (e, t) {
            return e(
              Object(l.t)(t())
                .filter(function (e) {
                  return 0 === e.indexOf(d)
                })
                .map(function (e) {
                  return Object(l.g)(e)
                }),
            )
          }
        }
    },
    PH3B: function (e, t, n) {
      'use strict'
      var a,
        r = n('KEM+'),
        i = n.n(r),
        o = n('ezF+'),
        c = (n('yH/f'), Object.freeze({ Cell: 'Cell', PreviewCard: 'PreviewCard' })),
        l = (n('lTEL'), n('7x/C'), n('JtPf'), n('87if'), n('kYxP'), n('XBtf')),
        s = {
          loader: function () {
            return Promise.all([n.e(0), n.e(348)]).then(n.bind(null, 'a+ad'))
          },
          loaderKey: 'newsCellLoader',
          strategy: l.a.Critical,
        },
        u = {
          loader: function () {
            return Promise.all([n.e(0), n.e(350)]).then(n.bind(null, 'hX2d'))
          },
          loaderKey: 'newsPreviewCardLoader',
          strategy: l.a.Critical,
        }
      t.a = o.c({
        selectDisplayType: function (e) {
          return e.content.newsDisplayType
        },
        handlers: ((a = {}), i()(a, c.Cell, s), i()(a, c.PreviewCard, u), a),
      })
    },
    XtkE: function (e, t, n) {
      'use strict'
      var a = n('ezF+'),
        r = (n('lTEL'), n('7x/C'), n('JtPf'), n('87if'), n('kYxP'), n('XBtf'))
      t.a = function (e) {
        var t = e.errorContext,
          i = e.withThirdPartyCards,
          o = void 0 !== i && i
        return a.e({
          loader: function () {
            return n.e(242).then(n.bind(null, '+92Z'))
          },
          loaderKey: 'trendDefaultLoader',
          loaderOptions: { withThirdPartyCards: o, errorContext: t },
          strategy: r.a.Critical,
        })
      }
    },
    jcx9: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'ExploreScreen', function () {
          return re
        })
      var a,
        r = n('VrFO'),
        i = n.n(r),
        o = n('Y9Ll'),
        c = n.n(o),
        l = n('1Pcy'),
        s = n.n(l),
        u = n('5Yy7'),
        d = n.n(u),
        f = n('2VqO'),
        p = n.n(f),
        b = n('KEM+'),
        m = n.n(b),
        h = (n('2G9S'), n('ERkP')),
        g = n.n(h),
        y = n('es0u'),
        v = (n('KqXw'), n('WNMA'), n('hqKg')),
        E = n('BxsD'),
        w = n('oQhu'),
        C = n('wrlS'),
        T = n('rxPX'),
        x = function (e, t) {
          var n, a
          return (
            (null === (n = t.match) || void 0 === n || null === (a = n.params) || void 0 === a ? void 0 : a.tabId) ||
            void 0
          )
        },
        _ = Object(T.a)()
          .propsFromState(function () {
            return {
              initialTabModule:
                ((e = Object(w.a)(function (e) {
                  return Object(E.d)(e)
                })),
                (t = Object(w.a)(function (e, t) {
                  return Object(E.d)(e, t)
                })),
                Object(v.createSelector)(
                  C.d,
                  x,
                  function (t) {
                    return e(Object(C.d)(t)).selectPageConfiguration(t)
                  },
                  function (e, n, a) {
                    var r
                    return t(e, a ? (null == a || null === (r = a.tabs) || void 0 === r ? void 0 : r.initialTabId) : n)
                  },
                )),
              selectedTabId: x,
            }
            var e, t
          })
          .withAnalytics({ page: 'guide', section: 'main' }),
        k = n('FIs5'),
        P = n('yiKp'),
        O = n.n(P),
        S = n('QIgh'),
        B = n('8UdT'),
        L = n('iu0J'),
        j = n('PH3B'),
        R = n('+o05'),
        I = n('XtkE'),
        H = O()(
          O()({}, S.b),
          {},
          ((a = {}),
          m()(a, B.b.EventSummary, Object(L.a)({})),
          m()(a, B.b.News, j.a),
          m()(a, B.b.ScoreEventSummary, R.a),
          m()(a, B.b.Trend, Object(I.a)({ withThirdPartyCards: !0, errorContext: 'EXPLORE_SCREEN' })),
          a),
        ),
        K = n('0+qk'),
        X = n('3XMw'),
        M = n.n(X),
        F = n('VTxf'),
        D = n('rJoH'),
        J = n('7BdX'),
        q = n('7nmT'),
        N = n.n(q),
        Y = n('UZjl'),
        z = n('+Bsv'),
        A = n('LsPn'),
        V = n('aITJ'),
        Q = n('v6aA'),
        U = M.a.fcf3e54b,
        W = M.a.ead349a7,
        G = M.a.a19ce06f,
        Z = M.a.a9ae1e78,
        $ = function () {
          return g.a.createElement(F.a, null)
        },
        ee = function () {
          return g.a.createElement(k.a, { message: G })
        },
        te = 600,
        ne = 315,
        ae = 'https://abs.twimg.com/a/1602199131/img/moments/moments-card.jpg',
        re = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            i()(this, n)
            for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              m()(s()(e), '_getTabLink', function (e) {
                return { pathname: '/explore/tabs/'.concat(e) }
              }),
              m()(s()(e), '_handleSettingsClick', function (t) {
                e.props.analytics.scribe({ element: 'settings_button', action: 'click' })
              }),
              m()(s()(e), '_handleBackClick', function () {
                e.props.history.goBack()
              }),
              m()(s()(e), '_setSearchBoxRef', function (t) {
                e._searchBoxRef = t
              }),
              m()(s()(e), '_handleSoftLeftClick', function () {
                var t = N.a.findDOMNode(e._searchBoxRef)
                t && t instanceof window.HTMLElement && t.querySelector('input').focus()
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.analytics,
                    n = e.history,
                    a = e.initialTabModule,
                    r = e.location,
                    i = e.selectedTabId,
                    o = g.a.createElement(K.a, { history: n }),
                    c = this.context.featureSwitches.isTrue('responsive_web_trends_setting_new_endpoints')
                      ? '/settings/explore'
                      : '/settings/trends',
                    l = g.a.createElement(z.a, { onPress: this._handleSettingsClick, pullRight: !0, to: c }),
                    s = r.state && r.state.searchFocused,
                    u = g.a.createElement(y.a, { withSearchBox: !1, withTrends: !1 })
                  return g.a.createElement(
                    g.a.Fragment,
                    null,
                    g.a.createElement(D.a, {
                      canonical: 'https://twitter.com/explore',
                      description: W,
                      image: ae,
                      imageH: ne,
                      imageW: te,
                      title: U,
                      type: 'article',
                    }),
                    g.a.createElement(Y.a, {
                      behavioralEventViewType: 'guide',
                      entryConfiguration: H,
                      fab: o,
                      getTabLink: this._getTabLink,
                      history: n,
                      initialPageNamespace: t.contextualScribeNamespace,
                      module: a,
                      onBackClick: s ? this._handleBackClick : void 0,
                      prerollDisplayLocation: J.c.OTHER,
                      renderEmptyState: $,
                      renderUnavailable: ee,
                      rightControl: l,
                      searchBoxRef: this._setSearchBoxRef,
                      selectedTabId: i,
                      sidebarContent: u,
                      timelinePrefix: E.b,
                      title: U,
                      withBottomLoginSignupBar: !0,
                      withDeferredView: !0,
                      withSearchBox: !0,
                    }),
                    V.b.isKaiOS()
                      ? g.a.createElement(A.a, { leftText: Z, onLeftClick: this._handleSoftLeftClick })
                      : null,
                  )
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      m()(re, 'contextType', Q.a)
      t.default = _(re)
    },
    rA3t: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'ExploreRevampScreen', function () {
          return H
        })
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        c = n('v6aA'),
        l = n('es0u'),
        s = n('mw9i'),
        u = n('s14A'),
        d = n('dwig'),
        f = n('0+qk'),
        p = n('WpDa'),
        b = n('ZNT5'),
        m = Object(b.a)({
          timelineId: 'forYouExploreGraphQL',
          getEndpoint: function (e) {
            return e.Explore.fetchForYouExplore
          },
          getEndpointParams: function (e) {
            var t = e.count,
              n = e.cursor
            return { count: t, cursor: 'string' == typeof n ? n : void 0 }
          },
          context: 'FETCH_FOR_YOU_EXPLORE',
          perfKey: 'forYouExploreGraphQL',
          formatResponse: p.a,
        }),
        h = n('3XMw'),
        g = n.n(h),
        y = n('rJoH'),
        v = n('yoO3'),
        E = n('7nmT'),
        w = n.n(E),
        C = n('fTQJ'),
        T = n('+Bsv'),
        x = n('VS6U'),
        _ = n('LsPn'),
        k = n('aITJ'),
        P = n('Irs7'),
        O = g.a.fcf3e54b,
        S = g.a.ead349a7,
        B = g.a.a9ae1e78,
        L = { page: 'guide', section: 'main' },
        j = 600,
        R = 315,
        I = 'https://abs.twimg.com/a/1602199131/img/moments/moments-card.jpg',
        H = function (e) {
          var t = e.analytics,
            n = e.history,
            a = e.location,
            i = o.a.useContext(c.a).featureSwitches,
            p = o.a.useRef(null),
            b = a.state && a.state.searchFocused,
            h = i.isTrue('responsive_web_trends_setting_new_endpoints') ? '/settings/explore' : '/settings/trends',
            g = o.a.useCallback(
              function (e) {
                t.scribe(r()(r()({}, L), {}, { element: 'settings_button', action: 'click' }))
              },
              [t],
            ),
            E = o.a.useCallback(
              function () {
                n.goBack({ backLocation: '/' })
              },
              [n],
            ),
            P = o.a.useCallback(
              function () {
                var e = w.a.findDOMNode(p.current)
                e && e instanceof window.HTMLElement && e.querySelector('input').focus()
              },
              [p],
            ),
            H = o.a.createElement(f.a, { history: n }),
            K = o.a.createElement(T.a, { onPress: g, pullRight: !0, to: h }),
            X = o.a.createElement(l.a, { withSearchBox: !1, withTrends: !1 })
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(
              v.a,
              { behavioralEventViewType: 'guide' },
              o.a.createElement(y.a, {
                canonical: 'https://twitter.com/explore',
                description: S,
                image: I,
                imageH: R,
                imageW: j,
                title: O,
                type: 'article',
              }),
              o.a.createElement(x.a, {
                history: n,
                onBackClick: b ? E : void 0,
                primaryContent: o.a.createElement(
                  d.a,
                  { component: s.a, fab: H },
                  o.a.createElement(u.a, null, o.a.createElement(C.a, { module: m, title: O })),
                ),
                rightControl: K,
                searchBoxRef: function (e) {
                  p.current = e
                },
                secondaryBar: null,
                sidebarContent: X,
                title: O,
                withBottomLoginSignupBar: !0,
                withSearchBox: !0,
              }),
            ),
            k.b.isKaiOS() ? o.a.createElement(_.a, { leftText: B, onLeftClick: P }) : null,
          )
        }
      t.default = Object(P.a)(H)
    },
  },
])
//# sourceMappingURL=WIPED
