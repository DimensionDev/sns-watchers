;(window.webpackJsonp = window.webpackJsonp || []).push([
  [53],
  {
    '+Bsv': function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        a = n('3XMw'),
        i = n.n(a),
        o = n('M2x3'),
        c = 'settingsAppBar',
        l = n('/yvb'),
        u = n('rHpw'),
        s = i.a.bb081ea1,
        f = { viewType: 'settings_button' },
        d = r.memo(function (e) {
          var t = e.onPress,
            n = e.pullRight,
            a = e.to
          return r.createElement(l.a, {
            accessibilityLabel: s,
            behavioralEventContext: f,
            hoverLabel: { label: s },
            icon: r.createElement(o.a, null),
            link: a,
            onPress: t,
            pullRight: n,
            style: p.button,
            testID: c,
            type: 'primaryText',
          })
        }),
        p = u.a.create(function (e) {
          return { button: { marginVertical: 'calc(-'.concat(e.spaces.space12, ')') } }
        })
      t.a = d
    },
    '+o05': function (e, t, n) {
      'use strict'
      var r = n('KEM+'),
        a = n.n(r),
        i = n('ezF+'),
        o = (n('yH/f'), Object.freeze({ Cell: 'Cell', Hero: 'Hero', Tile: 'Tile' })),
        c =
          (n('JtPf'),
          n('7x/C'),
          n('87if'),
          n('lTEL'),
          n('kYxP'),
          {
            loader: function () {
              return n.e(219).then(n.bind(null, 'QPD4'))
            },
            loaderKey: 'defaultScoreEventSummaryLoader',
            strategy: n('XBtf').a.Critical,
          })
      t.a = i.c({
        selectDisplayType: function (e) {
          return e.content.displayType
        },
        handlers: a()({}, o.Cell, c),
      })
    },
    BxsD: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return d
      }),
        n.d(t, 'b', function () {
          return p
        }),
        n.d(t, 'c', function () {
          return h
        }),
        n.d(t, 'd', function () {
          return m
        }),
        n.d(t, 'f', function () {
          return g
        }),
        n.d(t, 'e', function () {
          return O
        }),
        n.d(t, 'g', function () {
          return v
        })
      n('+KXO'), n('1t7P'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        i = (n('yH/f'), n('2G9S'), n('z84I'), n('LW0h'), n('vrRf'), n('vXCH')),
        o = n('oQhu'),
        c = n('ZNT5'),
        l = n('eR3e')
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
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? u(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : u(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var f = Object.freeze({ Trends: 'trends' }),
        d = Object.freeze({ WebSidebar: 'web_sidebar' }),
        p = 'explore-',
        b = 9e5,
        h = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = e.contentType,
            n = e.displayLocation,
            r = e.featureSwitches,
            a = e.focalTweetId,
            i = e.includePageConfiguration,
            o = void 0 !== i && i,
            l = e.initialTabId,
            u = e.profileUserId,
            f = t || n || 'main',
            d = a
              ? ''.concat(p).concat(f, '-tweet-').concat(a)
              : u
              ? ''.concat(p).concat(f, '-user-').concat(u)
              : ''.concat(p).concat(f),
            h = r.isTrue('responsive_web_new_client_events_enabled')
          return Object(c.a)({
            timelineId: d,
            formatResponse: y(h),
            getEndpoint: function (e) {
              return e.URT.fetchExplore
            },
            getEndpointParams: function (e) {
              return s(
                s({}, e),
                {},
                {
                  candidate_source: t,
                  display_location: n,
                  focal_tweet_id: a,
                  include_page_configuration: o,
                  initial_tab_id: l,
                  profile_user_id: u,
                  entity_tokens: h,
                },
              )
            },
            context: 'FETCH_EXPLORE',
            perfKey: ''.concat(p).concat(f),
            staleIntervalMs: b,
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
                    i = s(
                      s(
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
                  return s(
                    s({}, t),
                    {},
                    {
                      urtEndpoint: s(
                        s({}, t.urtEndpoint),
                        {},
                        {
                          urtEndpointOptions: s(
                            s({}, null === (a = t.urtEndpoint) || void 0 === a ? void 0 : a.urtEndpointOptions),
                            {},
                            { requestParams: i },
                          ),
                        },
                      ),
                    },
                  )
                }),
                a = s(s({}, t), {}, { pageConfiguration: s(s({}, n), {}, { tabs: s(s({}, n.tabs), {}, { tabs: r }) }) })
              return Object(i.a)(a)
            }
            return Object(i.a)(t)
          }
        },
        m = function (e, t) {
          return h({ featureSwitches: e, includePageConfiguration: !0, initialTabId: t })
        },
        g = Object(o.a)(function (e) {
          return h({ featureSwitches: e, contentType: f.Trends })
        }),
        O = Object(o.a)(function (e) {
          return h({ featureSwitches: e, displayLocation: d.WebSidebar })
        }),
        v = function () {
          return function (e, t) {
            return e(
              Object(l.t)(t())
                .filter(function (e) {
                  return 0 === e.indexOf(p)
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
      var r,
        a = n('KEM+'),
        i = n.n(a),
        o = n('ezF+'),
        c = (n('yH/f'), Object.freeze({ Cell: 'Cell', PreviewCard: 'PreviewCard' })),
        l = (n('JtPf'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('XBtf')),
        u = {
          loader: function () {
            return Promise.all([n.e(0), n.e(330)]).then(n.bind(null, 'a+ad'))
          },
          loaderKey: 'newsCellLoader',
          strategy: l.a.Critical,
        },
        s = {
          loader: function () {
            return Promise.all([n.e(0), n.e(332)]).then(n.bind(null, 'hX2d'))
          },
          loaderKey: 'newsPreviewCardLoader',
          strategy: l.a.Critical,
        }
      t.a = o.c({
        selectDisplayType: function (e) {
          return e.content.newsDisplayType
        },
        handlers: ((r = {}), i()(r, c.Cell, u), i()(r, c.PreviewCard, s), r),
      })
    },
    XtkE: function (e, t, n) {
      'use strict'
      var r = n('ezF+'),
        a = (n('JtPf'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('XBtf'))
      t.a = function (e) {
        var t = e.errorContext,
          i = e.withThirdPartyCards,
          o = void 0 !== i && i
        return r.e({
          loader: function () {
            return n.e(225).then(n.bind(null, '+92Z'))
          },
          loaderKey: 'trendDefaultLoader',
          loaderOptions: { withThirdPartyCards: o, errorContext: t },
          strategy: a.a.Critical,
        })
      }
    },
    jcx9: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'ExploreScreen', function () {
          return ce
        })
      n('OZaJ')
      var r,
        a = n('VrFO'),
        i = n.n(a),
        o = n('Y9Ll'),
        c = n.n(o),
        l = n('1Pcy'),
        u = n.n(l),
        s = n('5Yy7'),
        f = n.n(s),
        d = n('N+ot'),
        p = n.n(d),
        b = n('AuHH'),
        h = n.n(b),
        y = n('KEM+'),
        m = n.n(y),
        g = (n('2G9S'), n('ERkP')),
        O = n('es0u'),
        v = (n('WNMA'), n('KqXw'), n('hqKg')),
        w = n('BxsD'),
        E = n('oQhu'),
        P = n('wrlS'),
        j = n('rxPX'),
        C = function (e, t) {
          var n, r
          return (
            (null === (n = t.match) || void 0 === n || null === (r = n.params) || void 0 === r ? void 0 : r.tabId) ||
            void 0
          )
        },
        T = Object(j.a)()
          .propsFromState(function () {
            return {
              initialTabModule:
                ((e = Object(E.a)(function (e) {
                  return Object(w.d)(e)
                })),
                (t = Object(E.a)(function (e, t) {
                  return Object(w.d)(e, t)
                })),
                Object(v.createSelector)(
                  P.d,
                  C,
                  function (t) {
                    return e(Object(P.d)(t)).selectPageConfiguration(t)
                  },
                  function (e, n, r) {
                    var a
                    return t(e, r ? (null == r || null === (a = r.tabs) || void 0 === a ? void 0 : a.initialTabId) : n)
                  },
                )),
              selectedTabId: C,
            }
            var e, t
          })
          .withAnalytics({ page: 'guide', section: 'main' }),
        x = n('FIs5'),
        _ = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('QIgh')),
        S = n('8UdT'),
        k = n('iu0J'),
        B = n('PH3B'),
        L = n('+o05'),
        R = n('XtkE')
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
      function H(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? D(Object(n), !0).forEach(function (t) {
                m()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : D(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var M = 'EXPLORE_SCREEN',
        I = H(
          H({}, _.b),
          {},
          ((r = {}),
          m()(r, S.b.EventSummary, Object(k.a)({ errorContext: M })),
          m()(r, S.b.News, B.a),
          m()(r, S.b.ScoreEventSummary, L.a),
          m()(r, S.b.Trend, Object(R.a)({ withThirdPartyCards: !0, errorContext: M })),
          r),
        ),
        X = n('0+qk'),
        K = n('3XMw'),
        F = n.n(K),
        J = n('VTxf'),
        N = n('rJoH'),
        A = n('7BdX'),
        W = n('7nmT'),
        Y = n.n(W),
        q = n('UZjl'),
        z = n('+Bsv'),
        Z = n('LsPn'),
        Q = n('aITJ'),
        U = n('v6aA')
      function V(e) {
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
      var G = F.a.fcf3e54b,
        $ = F.a.ead349a7,
        ee = F.a.a19ce06f,
        te = F.a.a9ae1e78,
        ne = function () {
          return g.createElement(J.a, null)
        },
        re = function () {
          return g.createElement(x.a, { message: ee })
        },
        ae = 600,
        ie = 315,
        oe = 'https://abs.twimg.com/a/1602199131/img/moments/moments-card.jpg',
        ce = (function (e) {
          f()(n, e)
          var t = V(n)
          function n() {
            var e
            i()(this, n)
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
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
                var t = Y.a.findDOMNode(e._searchBoxRef)
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
                    r = e.initialTabModule,
                    a = e.location,
                    i = e.selectedTabId,
                    o = g.createElement(X.a, { history: n }),
                    c = this.context.featureSwitches.isTrue('responsive_web_trends_setting_new_endpoints')
                      ? '/settings/explore'
                      : '/settings/trends',
                    l = g.createElement(z.a, { onPress: this._handleSettingsClick, pullRight: !0, to: c }),
                    u = a.state && a.state.searchFocused,
                    s = g.createElement(O.a, { withSearchBox: !1, withTrends: !1 })
                  return g.createElement(
                    g.Fragment,
                    null,
                    g.createElement(N.a, {
                      canonical: 'https://twitter.com/explore',
                      description: $,
                      image: oe,
                      imageH: ie,
                      imageW: ae,
                      title: G,
                      type: 'article',
                    }),
                    g.createElement(q.a, {
                      behavioralEventViewType: 'guide',
                      entryConfiguration: I,
                      fab: o,
                      getTabLink: this._getTabLink,
                      history: n,
                      initialPageNamespace: t.contextualScribeNamespace,
                      module: r,
                      onBackClick: u ? this._handleBackClick : void 0,
                      prerollDisplayLocation: A.c.OTHER,
                      renderEmptyState: ne,
                      renderUnavailable: re,
                      rightControl: l,
                      searchBoxRef: this._setSearchBoxRef,
                      selectedTabId: i,
                      sidebarContent: s,
                      timelinePrefix: w.b,
                      title: G,
                      withBottomLoginSignupBar: !0,
                      withDeferredView: !0,
                      withSearchBox: !0,
                    }),
                    Q.b.isKaiOS()
                      ? g.createElement(Z.a, { leftText: te, onLeftClick: this._handleSoftLeftClick })
                      : null,
                  )
                },
              },
            ]),
            n
          )
        })(g.Component)
      m()(ce, 'contextType', U.a)
      t.default = T(ce)
    },
    rA3t: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'ExploreRevampScreen', function () {
          return M
        })
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        i = n('ERkP'),
        o = n('v6aA'),
        c = n('es0u'),
        l = n('mw9i'),
        u = n('s14A'),
        s = n('dwig'),
        f = n('0+qk'),
        d = n('WpDa'),
        p = n('ZNT5'),
        b = Object(p.a)({
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
          formatResponse: d.a,
        }),
        h = n('3XMw'),
        y = n.n(h),
        m = n('rJoH'),
        g = n('yoO3'),
        O = n('7nmT'),
        v = n.n(O),
        w = n('fTQJ'),
        E = n('+Bsv'),
        P = n('VS6U'),
        j = n('LsPn'),
        C = n('aITJ'),
        T = n('Irs7')
      function x(e, t) {
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
            ? x(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : x(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var S = y.a.fcf3e54b,
        k = y.a.ead349a7,
        B = y.a.a9ae1e78,
        L = { page: 'guide', section: 'main' },
        R = 600,
        D = 315,
        H = 'https://abs.twimg.com/a/1602199131/img/moments/moments-card.jpg',
        M = function (e) {
          var t = e.analytics,
            n = e.history,
            r = e.location,
            a = i.useContext(o.a).featureSwitches,
            d = i.useRef(null),
            p = r.state && r.state.searchFocused,
            h = a.isTrue('responsive_web_trends_setting_new_endpoints') ? '/settings/explore' : '/settings/trends',
            y = i.useCallback(
              function (e) {
                t.scribe(_(_({}, L), {}, { element: 'settings_button', action: 'click' }))
              },
              [t],
            ),
            O = i.useCallback(
              function () {
                n.goBack({ backLocation: '/' })
              },
              [n],
            ),
            T = i.useCallback(
              function () {
                var e = v.a.findDOMNode(d.current)
                e && e instanceof window.HTMLElement && e.querySelector('input').focus()
              },
              [d],
            ),
            x = i.createElement(f.a, { history: n }),
            M = i.createElement(E.a, { onPress: y, pullRight: !0, to: h }),
            I = i.createElement(c.a, { withSearchBox: !1, withTrends: !1 })
          return i.createElement(
            i.Fragment,
            null,
            i.createElement(
              g.a,
              { behavioralEventViewType: 'guide' },
              i.createElement(m.a, {
                canonical: 'https://twitter.com/explore',
                description: k,
                image: H,
                imageH: D,
                imageW: R,
                title: S,
                type: 'article',
              }),
              i.createElement(P.a, {
                history: n,
                onBackClick: p ? O : void 0,
                primaryContent: i.createElement(
                  s.a,
                  { component: l.a, fab: x },
                  i.createElement(u.a, null, i.createElement(w.a, { module: b, title: S })),
                ),
                rightControl: M,
                searchBoxRef: function (e) {
                  d.current = e
                },
                secondaryBar: null,
                sidebarContent: I,
                title: S,
                withBottomLoginSignupBar: !0,
                withSearchBox: !0,
              }),
            ),
            C.b.isKaiOS() ? i.createElement(j.a, { leftText: B, onLeftClick: T }) : null,
          )
        }
      t.default = Object(T.a)(M)
    },
  },
])
//# sourceMappingURL=WIPED
