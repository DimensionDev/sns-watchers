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
        s = 'settingsAppBar',
        u = n('/yvb'),
        l = n('rHpw'),
        d = o.a.bb081ea1,
        f = { viewType: 'settings_button' },
        p = r.a.memo(function (e) {
          var t = e.onPress,
            n = e.pullRight,
            a = e.to
          return r.a.createElement(u.a, {
            accessibilityLabel: d,
            behavioralEventContext: f,
            hoverLabel: { label: d },
            icon: r.a.createElement(c.a, null),
            link: a,
            onPress: t,
            pullRight: n,
            style: b.button,
            testID: s,
            type: 'primaryText',
          })
        }),
        b = l.a.create(function (e) {
          return { button: { marginVertical: 'calc(-'.concat(e.spaces.space12, ')') } }
        })
      t.a = p
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
          return E
        })
      var a = n('yiKp'),
        r = n.n(a),
        i = (n('yH/f'), n('2G9S'), n('z84I'), n('LW0h'), n('7x/C'), n('vrRf'), n('vXCH')),
        o = n('oQhu'),
        c = n('ZNT5'),
        s = n('eR3e'),
        u = Object.freeze({ Trends: 'trends' }),
        l = Object.freeze({ WebSidebar: 'web_sidebar' }),
        d = 'explore-',
        f = 9e5,
        p = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = e.contentType,
            n = e.displayLocation,
            a = e.featureSwitches,
            i = e.focalTweetId,
            o = e.includePageConfiguration,
            s = void 0 !== o && o,
            u = e.initialTabId,
            l = e.profileUserId,
            p = t || n || 'main',
            m = i
              ? ''.concat(d).concat(p, '-tweet-').concat(i)
              : l
              ? ''.concat(d).concat(p, '-user-').concat(l)
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
                  include_page_configuration: s,
                  initial_tab_id: u,
                  profile_user_id: l,
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
          return p({ featureSwitches: e, contentType: u.Trends })
        }),
        g = Object(o.a)(function (e) {
          return p({ featureSwitches: e, displayLocation: l.WebSidebar })
        }),
        E = function () {
          return function (e, t) {
            return e(
              Object(s.t)(t())
                .filter(function (e) {
                  return 0 === e.indexOf(d)
                })
                .map(function (e) {
                  return Object(s.g)(e)
                }),
            )
          }
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
        s = n('1Pcy'),
        u = n.n(s),
        l = n('5Yy7'),
        d = n.n(l),
        f = n('2VqO'),
        p = n.n(f),
        b = n('KEM+'),
        m = n.n(b),
        h = (n('2G9S'), n('ERkP')),
        g = n.n(h),
        E = n('es0u'),
        v = (n('KqXw'), n('WNMA'), n('hqKg')),
        w = n('BxsD'),
        y = n('oQhu'),
        _ = n('wrlS'),
        T = n('rxPX'),
        x = function (e, t) {
          var n, a
          return (
            (null === (n = t.match) || void 0 === n || null === (a = n.params) || void 0 === a ? void 0 : a.tabId) ||
            void 0
          )
        },
        S = Object(T.a)()
          .propsFromState(function () {
            return {
              initialTabModule:
                ((e = Object(y.a)(function (e) {
                  return Object(w.d)(e)
                })),
                (t = Object(y.a)(function (e, t) {
                  return Object(w.d)(e, t)
                })),
                Object(v.createSelector)(
                  _.d,
                  x,
                  function (t) {
                    return e(Object(_.d)(t)).selectPageConfiguration(t)
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
        O = n('yiKp'),
        C = n.n(O),
        B = n('QIgh'),
        L = n('8UdT'),
        R = n('iu0J'),
        P = n('PH3B'),
        j = n('+o05'),
        I = n('XtkE'),
        H = C()(
          C()({}, B.default),
          {},
          ((a = {}),
          m()(a, L.b.EventSummary, Object(R.a)({})),
          m()(a, L.b.News, P.a),
          m()(a, L.b.ScoreEventSummary, j.a),
          m()(a, L.b.Trend, Object(I.a)({ withThirdPartyCards: !0, errorContext: 'EXPLORE_SCREEN' })),
          a),
        ),
        M = n('0+qk'),
        F = n('3XMw'),
        X = n.n(F),
        K = n('VTxf'),
        q = n('rJoH'),
        N = n('7BdX'),
        A = n('7nmT'),
        D = n.n(A),
        J = n('UZjl'),
        V = n('+Bsv'),
        U = n('LsPn'),
        W = n('aITJ'),
        Q = n('v6aA'),
        Y = X.a.fcf3e54b,
        G = X.a.ead349a7,
        z = X.a.a19ce06f,
        Z = X.a.a9ae1e78,
        $ = function () {
          return g.a.createElement(K.a, null)
        },
        ee = function () {
          return g.a.createElement(k.a, { message: z })
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
              m()(u()(e), '_getTabLink', function (e) {
                return { pathname: '/explore/tabs/'.concat(e) }
              }),
              m()(u()(e), '_handleSettingsClick', function (t) {
                e.props.analytics.scribe({ element: 'settings_button', action: 'click' })
              }),
              m()(u()(e), '_handleBackClick', function () {
                e.props.history.goBack()
              }),
              m()(u()(e), '_setSearchBoxRef', function (t) {
                e._searchBoxRef = t
              }),
              m()(u()(e), '_handleSoftLeftClick', function () {
                var t = D.a.findDOMNode(e._searchBoxRef)
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
                    o = g.a.createElement(M.a, { history: n }),
                    c = this.context.featureSwitches.isTrue('responsive_web_trends_setting_new_endpoints')
                      ? '/settings/explore'
                      : '/settings/trends',
                    s = g.a.createElement(V.a, { onPress: this._handleSettingsClick, pullRight: !0, to: c }),
                    u = r.state && r.state.searchFocused,
                    l = g.a.createElement(E.a, { withSearchBox: !1, withTrends: !1 })
                  return g.a.createElement(
                    g.a.Fragment,
                    null,
                    g.a.createElement(q.a, {
                      canonical: 'https://twitter.com/explore',
                      description: G,
                      image: ae,
                      imageH: ne,
                      imageW: te,
                      title: Y,
                      type: 'article',
                    }),
                    g.a.createElement(J.a, {
                      behavioralEventViewType: 'guide',
                      entryConfiguration: H,
                      fab: o,
                      getTabLink: this._getTabLink,
                      history: n,
                      initialPageNamespace: t.contextualScribeNamespace,
                      module: a,
                      onBackClick: u ? this._handleBackClick : void 0,
                      prerollDisplayLocation: N.c.OTHER,
                      renderEmptyState: $,
                      renderUnavailable: ee,
                      rightControl: s,
                      searchBoxRef: this._setSearchBoxRef,
                      selectedTabId: i,
                      sidebarContent: l,
                      timelinePrefix: w.b,
                      title: Y,
                      withBottomLoginSignupBar: !0,
                      withDeferredView: !0,
                      withSearchBox: !0,
                    }),
                    W.b.isKaiOS()
                      ? g.a.createElement(U.a, { leftText: Z, onLeftClick: this._handleSoftLeftClick })
                      : null,
                  )
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      m()(re, 'contextType', Q.a)
      t.default = S(re)
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
        s = n('es0u'),
        u = n('mw9i'),
        l = n('s14A'),
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
        E = n('rJoH'),
        v = n('yoO3'),
        w = n('7nmT'),
        y = n.n(w),
        _ = n('fTQJ'),
        T = n('+Bsv'),
        x = n('VS6U'),
        S = n('LsPn'),
        k = n('aITJ'),
        O = n('Irs7'),
        C = g.a.fcf3e54b,
        B = g.a.ead349a7,
        L = g.a.a9ae1e78,
        R = { page: 'guide', section: 'main' },
        P = 600,
        j = 315,
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
                t.scribe(r()(r()({}, R), {}, { element: 'settings_button', action: 'click' }))
              },
              [t],
            ),
            w = o.a.useCallback(
              function () {
                n.goBack({ backLocation: '/' })
              },
              [n],
            ),
            O = o.a.useCallback(
              function () {
                var e = y.a.findDOMNode(p.current)
                e && e instanceof window.HTMLElement && e.querySelector('input').focus()
              },
              [p],
            ),
            H = o.a.createElement(f.a, { history: n }),
            M = o.a.createElement(T.a, { onPress: g, pullRight: !0, to: h }),
            F = o.a.createElement(s.a, { withSearchBox: !1, withTrends: !1 })
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(
              v.a,
              { behavioralEventViewType: 'guide' },
              o.a.createElement(E.a, {
                canonical: 'https://twitter.com/explore',
                description: B,
                image: I,
                imageH: j,
                imageW: P,
                title: C,
                type: 'article',
              }),
              o.a.createElement(x.a, {
                history: n,
                onBackClick: b ? w : void 0,
                primaryContent: o.a.createElement(
                  d.a,
                  { component: u.a, fab: H },
                  o.a.createElement(l.a, null, o.a.createElement(_.a, { module: m, title: C })),
                ),
                rightControl: M,
                searchBoxRef: function (e) {
                  p.current = e
                },
                secondaryBar: null,
                sidebarContent: F,
                title: C,
                withBottomLoginSignupBar: !0,
                withSearchBox: !0,
              }),
            ),
            k.b.isKaiOS() ? o.a.createElement(S.a, { leftText: L, onLeftClick: O }) : null,
          )
        }
      t.default = Object(O.a)(H)
    },
  },
])
//# sourceMappingURL=WIPED
