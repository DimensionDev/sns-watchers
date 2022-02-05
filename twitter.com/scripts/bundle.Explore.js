;(window.webpackJsonp = window.webpackJsonp || []).push([
  [53],
  {
    '+Bsv': function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        a = n.n(r),
        i = n('3XMw'),
        o = n.n(i),
        c = n('M2x3'),
        l = 'settingsAppBar',
        u = n('/yvb'),
        s = n('rHpw'),
        f = o.a.bb081ea1,
        d = { viewType: 'settings_button' },
        p = a.a.memo(function (e) {
          var t = e.onPress,
            n = e.pullRight,
            r = e.to
          return a.a.createElement(u.a, {
            accessibilityLabel: f,
            behavioralEventContext: d,
            hoverLabel: { label: f },
            icon: a.a.createElement(c.a, null),
            link: r,
            onPress: t,
            pullRight: n,
            style: b.button,
            testID: l,
            type: 'primaryText',
          })
        }),
        b = s.a.create(function (e) {
          return { button: { marginVertical: 'calc(-'.concat(e.spaces.space12, ')') } }
        })
      t.a = p
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
              return n.e(228).then(n.bind(null, 'QPD4'))
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
            return Promise.all([n.e(0), n.e(342)]).then(n.bind(null, 'a+ad'))
          },
          loaderKey: 'newsCellLoader',
          strategy: l.a.Critical,
        },
        s = {
          loader: function () {
            return Promise.all([n.e(0), n.e(344)]).then(n.bind(null, 'hX2d'))
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
            return n.e(236).then(n.bind(null, '+92Z'))
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
        O = n.n(g),
        v = n('es0u'),
        w = (n('WNMA'), n('KqXw'), n('hqKg')),
        E = n('BxsD'),
        P = n('oQhu'),
        j = n('wrlS'),
        T = n('rxPX'),
        C = function (e, t) {
          var n, r
          return (
            (null === (n = t.match) || void 0 === n || null === (r = n.params) || void 0 === r ? void 0 : r.tabId) ||
            void 0
          )
        },
        x = Object(T.a)()
          .propsFromState(function () {
            return {
              initialTabModule:
                ((e = Object(P.a)(function (e) {
                  return Object(E.d)(e)
                })),
                (t = Object(P.a)(function (e, t) {
                  return Object(E.d)(e, t)
                })),
                Object(w.createSelector)(
                  j.d,
                  C,
                  function (t) {
                    return e(Object(j.d)(t)).selectPageConfiguration(t)
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
        _ = n('FIs5'),
        S = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('QIgh')),
        k = n('8UdT'),
        B = n('iu0J'),
        L = n('PH3B'),
        R = n('+o05'),
        D = n('XtkE')
      function H(e, t) {
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
      function M(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? H(Object(n), !0).forEach(function (t) {
                m()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : H(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var I = M(
          M({}, S.b),
          {},
          ((r = {}),
          m()(r, k.b.EventSummary, Object(B.a)({})),
          m()(r, k.b.News, L.a),
          m()(r, k.b.ScoreEventSummary, R.a),
          m()(r, k.b.Trend, Object(D.a)({ withThirdPartyCards: !0, errorContext: 'EXPLORE_SCREEN' })),
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
          return O.a.createElement(J.a, null)
        },
        re = function () {
          return O.a.createElement(_.a, { message: ee })
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
                    o = O.a.createElement(X.a, { history: n }),
                    c = this.context.featureSwitches.isTrue('responsive_web_trends_setting_new_endpoints')
                      ? '/settings/explore'
                      : '/settings/trends',
                    l = O.a.createElement(z.a, { onPress: this._handleSettingsClick, pullRight: !0, to: c }),
                    u = a.state && a.state.searchFocused,
                    s = O.a.createElement(v.a, { withSearchBox: !1, withTrends: !1 })
                  return O.a.createElement(
                    O.a.Fragment,
                    null,
                    O.a.createElement(N.a, {
                      canonical: 'https://twitter.com/explore',
                      description: $,
                      image: oe,
                      imageH: ie,
                      imageW: ae,
                      title: G,
                      type: 'article',
                    }),
                    O.a.createElement(q.a, {
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
                      timelinePrefix: E.b,
                      title: G,
                      withBottomLoginSignupBar: !0,
                      withDeferredView: !0,
                      withSearchBox: !0,
                    }),
                    Q.b.isKaiOS()
                      ? O.a.createElement(Z.a, { leftText: te, onLeftClick: this._handleSoftLeftClick })
                      : null,
                  )
                },
              },
            ]),
            n
          )
        })(O.a.Component)
      m()(ce, 'contextType', U.a)
      t.default = x(ce)
    },
    rA3t: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'ExploreRevampScreen', function () {
          return I
        })
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        i = n('ERkP'),
        o = n.n(i),
        c = n('v6aA'),
        l = n('es0u'),
        u = n('mw9i'),
        s = n('s14A'),
        f = n('dwig'),
        d = n('0+qk'),
        p = n('WpDa'),
        b = n('ZNT5'),
        h = Object(b.a)({
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
        y = n('3XMw'),
        m = n.n(y),
        g = n('rJoH'),
        O = n('yoO3'),
        v = n('7nmT'),
        w = n.n(v),
        E = n('fTQJ'),
        P = n('+Bsv'),
        j = n('VS6U'),
        T = n('LsPn'),
        C = n('aITJ'),
        x = n('Irs7')
      function _(e, t) {
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
      function S(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? _(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : _(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var k = m.a.fcf3e54b,
        B = m.a.ead349a7,
        L = m.a.a9ae1e78,
        R = { page: 'guide', section: 'main' },
        D = 600,
        H = 315,
        M = 'https://abs.twimg.com/a/1602199131/img/moments/moments-card.jpg',
        I = function (e) {
          var t = e.analytics,
            n = e.history,
            r = e.location,
            a = o.a.useContext(c.a).featureSwitches,
            i = o.a.useRef(null),
            p = r.state && r.state.searchFocused,
            b = a.isTrue('responsive_web_trends_setting_new_endpoints') ? '/settings/explore' : '/settings/trends',
            y = o.a.useCallback(
              function (e) {
                t.scribe(S(S({}, R), {}, { element: 'settings_button', action: 'click' }))
              },
              [t],
            ),
            m = o.a.useCallback(
              function () {
                n.goBack({ backLocation: '/' })
              },
              [n],
            ),
            v = o.a.useCallback(
              function () {
                var e = w.a.findDOMNode(i.current)
                e && e instanceof window.HTMLElement && e.querySelector('input').focus()
              },
              [i],
            ),
            x = o.a.createElement(d.a, { history: n }),
            _ = o.a.createElement(P.a, { onPress: y, pullRight: !0, to: b }),
            I = o.a.createElement(l.a, { withSearchBox: !1, withTrends: !1 })
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(
              O.a,
              { behavioralEventViewType: 'guide' },
              o.a.createElement(g.a, {
                canonical: 'https://twitter.com/explore',
                description: B,
                image: M,
                imageH: H,
                imageW: D,
                title: k,
                type: 'article',
              }),
              o.a.createElement(j.a, {
                history: n,
                onBackClick: p ? m : void 0,
                primaryContent: o.a.createElement(
                  f.a,
                  { component: u.a, fab: x },
                  o.a.createElement(s.a, null, o.a.createElement(E.a, { module: h, title: k })),
                ),
                rightControl: _,
                searchBoxRef: function (e) {
                  i.current = e
                },
                secondaryBar: null,
                sidebarContent: I,
                title: k,
                withBottomLoginSignupBar: !0,
                withSearchBox: !0,
              }),
            ),
            C.b.isKaiOS() ? o.a.createElement(T.a, { leftText: L, onLeftClick: v }) : null,
          )
        }
      t.default = Object(x.a)(I)
    },
  },
])
//# sourceMappingURL=WIPED
