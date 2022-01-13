;(window.webpackJsonp = window.webpackJsonp || []).push([
  [166],
  {
    '+Bsv': function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        o = n('3XMw'),
        i = n.n(o),
        c = n('M2x3'),
        a = 'settingsAppBar',
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
            icon: r.createElement(c.a, null),
            link: o,
            onPress: t,
            pullRight: n,
            style: p.button,
            testID: a,
            type: 'primaryText',
          })
        }),
        p = s.a.create(function (e) {
          return { button: { marginVertical: 'calc(-'.concat(e.spaces.space12, ')') } }
        })
      t.a = d
    },
    '+o05': function (e, t, n) {
      'use strict'
      var r = n('KEM+'),
        o = n.n(r),
        i = n('ezF+'),
        c = (n('yH/f'), Object.freeze({ Cell: 'Cell', Hero: 'Hero', Tile: 'Tile' })),
        a =
          (n('JtPf'),
          n('7x/C'),
          n('87if'),
          n('lTEL'),
          n('kYxP'),
          {
            loader: function () {
              return n.e(223).then(n.bind(null, 'QPD4'))
            },
            loaderKey: 'defaultScoreEventSummaryLoader',
            strategy: n('XBtf').a.Critical,
          })
      t.a = i.c({
        selectDisplayType: function (e) {
          return e.content.displayType
        },
        handlers: o()({}, c.Cell, a),
      })
    },
    'A+RP': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'UPDATE_INTERVAL', function () {
          return ue
        }),
        n.d(t, 'ExploreSidebar', function () {
          return de
        })
      n('OZaJ')
      var r = n('VrFO'),
        o = n.n(r),
        i = n('Y9Ll'),
        c = n.n(i),
        a = n('1Pcy'),
        u = n.n(a),
        s = n('5Yy7'),
        l = n.n(s),
        f = n('N+ot'),
        d = n.n(f),
        p = n('AuHH'),
        b = n.n(p),
        h = n('KEM+'),
        y = n.n(h),
        v = (n('2G9S'), n('ERkP')),
        O = n('FIs5'),
        m = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('ezF+')),
        w = n('8UdT'),
        g = n('iu0J'),
        j = n('xN10'),
        P = n('+o05'),
        E = n('5Y9N'),
        T = n('XtkE'),
        _ = (n('z84I'), n('VPAj')),
        S = (n('M+/F'), n('3XMw')),
        k = n.n(S),
        x = n('caTy'),
        C = n('+Bsv'),
        R = n('MWbm'),
        M = n('Irs7'),
        D = n('hxu0'),
        I = n('6vad'),
        L = n('rC8y')
      function B(e) {
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
            r = b()(e)
          if (t) {
            var o = b()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return d()(this, n)
        }
      }
      var A = k.a.c5f4befa,
        F = k.a.d228a9a0,
        H = (function (e) {
          l()(n, e)
          var t = B(n)
          function n(e, r) {
            var i
            return (
              o()(this, n),
              (i = t.call(this, e, r)),
              y()(u()(i), '_handleShowMoreInlineClick', function () {
                var e = i.props.onClick
                i.setState({ showMoreTrends: !0 }), e('show_more_inline')
              }),
              y()(u()(i), '_handleShowMoreClick', function () {
                ;(0, i.props.onClick)('show_more')
              }),
              (i.state = { showMoreTrends: !1 }),
              i
            )
          }
          return (
            c()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.analytics,
                    n = e.trends
                  n && n.length > 0 && t.scribe({ action: 'impression', component: 'explore_sidebar' })
                },
              },
              {
                key: 'canShowMoreTrends',
                value: function () {
                  var e = this.props.trends
                  return !this.state.showMoreTrends && e.length > 5
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.footer,
                    n = e.headerTitle,
                    r = e.isInSidebar,
                    o = v.createElement(C.a, { to: '/settings/trends' })
                  return v.createElement(
                    R.a,
                    null,
                    v.createElement(I.b, { rightControl: o, text: n || A }),
                    this._renderTrends(),
                    this.canShowMoreTrends()
                      ? v.createElement(L.a, {
                          onPress: this._handleShowMoreInlineClick,
                          text: F,
                          withBottomRadius: !0,
                          withDarkerInteractiveBackground: r,
                        })
                      : !!t &&
                          v.createElement(L.a, {
                            link: t.landingUrl ? Object(x.b)(t.landingUrl) : void 0,
                            onPress: this._handleShowMoreClick,
                            text: t.text,
                            withBottomRadius: !0,
                            withDarkerInteractiveBackground: r,
                          }),
                  )
                },
              },
              {
                key: '_renderTrends',
                value: function () {
                  var e = this.props.trends
                  return (this.state.showMoreTrends ? e : e.slice(0, 5)).map(function (e) {
                    return v.createElement(v.Fragment, { key: e.key }, e.item)
                  })
                },
              },
            ]),
            n
          )
        })(v.Component),
        U = Object(M.a)(Object(D.a)(H)),
        X = n('zh9S')
      function z(e, t) {
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
      function K(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? z(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : z(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var W,
        J = m.g({
          bindActions: function () {
            return { scribeAction: X.c }
          },
          component: U,
          createProps: function (e) {
            var t = e.actions.scribeAction,
              n = e.entry,
              r = e.renderEntry,
              o = e.scribeNamespace,
              i = n.content,
              c = i.footer,
              a = i.header,
              u = i.items
            return {
              footer: c,
              headerTitle: a && a.text,
              onClick: function (e) {
                t(K(K({}, o), {}, { element: e, action: 'click' }))
              },
              trends: u.map(function (e) {
                return { item: r(e), key: e.entryId }
              }),
            }
          },
          shouldDisplayBorder: Object(_.a)(!1),
        })
      function N(e, t) {
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
      function Q(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? N(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : N(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var Y = 'TrendsModule',
        Z = 'EXPLORE_SIDEBAR',
        V =
          ((W = {}),
          y()(W, w.b.TimelineCursor, m.e(m.a())),
          y()(W, w.b.Label, m.e(m.a())),
          y()(W, w.b.Message, m.e(m.a())),
          y()(W, w.b.News, m.e(m.a())),
          y()(W, w.b.Trend, Object(T.a)({ withThirdPartyCards: !1, errorContext: Z })),
          y()(W, w.b.EventSummary, Object(g.a)({ errorContext: Z })),
          y()(W, w.b.ScoreEventSummary, P.a),
          W),
        q = y()({}, Y, J),
        G = Q(
          Q(
            {},
            Object(E.a)({
              customHandlers: q,
              customSelectDisplayType: function (e) {
                return (t = e.content.items).length > 0 &&
                  Object(j.a)(t, function (e) {
                    return e.type === w.b.Trend
                  })
                  ? Y
                  : e.content.displayType
                var t
              },
              isInSidebar: !0,
            }),
          ),
          V,
        ),
        $ = n('oQhu'),
        ee = n('fTQJ'),
        te = n('b8qQ'),
        ne = n('2g+p'),
        re = n('v6aA'),
        oe = n('BxsD')
      function ie(e) {
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
            r = b()(e)
          if (t) {
            var o = b()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return d()(this, n)
        }
      }
      var ce = k.a.b8e930fd,
        ae = k.a.ae05f268,
        ue = 3e5,
        se = function () {
          return v.createElement(O.a, { message: ae })
        },
        le = Object($.a)(function (e, t) {
          return Object(oe.c)({ featureSwitches: t, displayLocation: oe.a.WebSidebar, focalTweetId: e })
        }),
        fe = Object($.a)(function (e, t) {
          return Object(oe.c)({ featureSwitches: t, displayLocation: oe.a.WebSidebar, profileUserId: e })
        }),
        de = (function (e) {
          l()(n, e)
          var t = ie(n)
          function n() {
            var e
            o()(this, n)
            for (var r = arguments.length, i = new Array(r), c = 0; c < r; c++) i[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              y()(u()(e), '_getModule', function () {
                var t = e.props,
                  n = t.focalTweetId,
                  r = t.profileUserId
                return n
                  ? le(n, e.context.featureSwitches)
                  : r
                  ? fe(r, e.context.featureSwitches)
                  : Object(oe.e)(e.context.featureSwitches)
              }),
              y()(u()(e), '_setTimelineRef', function (t) {
                e._timeline = t
              }),
              y()(u()(e), '_onAppForegrounded', function (t) {
                'active' === t && e._fetchUpdates()
              }),
              y()(u()(e), '_fetchUpdates', function () {
                e._timeline && 'active' === ne.a.currentState && e._timeline.fetchTop({})
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  ne.a.addEventListener('change', this._onAppForegrounded)
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  ne.a.removeEventListener('change', this._onAppForegrounded)
                },
              },
              {
                key: 'render',
                value: function () {
                  return v.createElement(
                    R.a,
                    null,
                    v.createElement(ee.a, {
                      entryConfiguration: G,
                      module: this._getModule(),
                      pollingIntervalMsOverride: ue,
                      renderUnavailable: se,
                      scroller: te.a,
                      showLoadingFooter: !1,
                      timelineRef: this._setTimelineRef,
                      title: ce,
                      withKeyboardShortcuts: !1,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(v.Component)
      y()(de, 'contextType', re.a)
      t.default = de
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
          return v
        }),
        n.d(t, 'f', function () {
          return O
        }),
        n.d(t, 'e', function () {
          return m
        }),
        n.d(t, 'g', function () {
          return w
        })
      n('+KXO'), n('1t7P'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        o = n.n(r),
        i = (n('yH/f'), n('2G9S'), n('z84I'), n('LW0h'), n('vrRf'), n('vXCH')),
        c = n('oQhu'),
        a = n('ZNT5'),
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
        p = 'explore-',
        b = 9e5,
        h = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = e.contentType,
            n = e.displayLocation,
            r = e.featureSwitches,
            o = e.focalTweetId,
            i = e.includePageConfiguration,
            c = void 0 !== i && i,
            u = e.initialTabId,
            s = e.profileUserId,
            f = t || n || 'main',
            d = o
              ? ''.concat(p).concat(f, '-tweet-').concat(o)
              : s
              ? ''.concat(p).concat(f, '-user-').concat(s)
              : ''.concat(p).concat(f),
            h = r.isTrue('responsive_web_new_client_events_enabled')
          return Object(a.a)({
            timelineId: d,
            formatResponse: y(h),
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
                  include_page_configuration: c,
                  initial_tab_id: u,
                  profile_user_id: s,
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
        v = function (e, t) {
          return h({ featureSwitches: e, includePageConfiguration: !0, initialTabId: t })
        },
        O = Object(c.a)(function (e) {
          return h({ featureSwitches: e, contentType: f.Trends })
        }),
        m = Object(c.a)(function (e) {
          return h({ featureSwitches: e, displayLocation: d.WebSidebar })
        }),
        w = function () {
          return function (e, t) {
            return e(
              Object(u.t)(t())
                .filter(function (e) {
                  return 0 === e.indexOf(p)
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
          c = void 0 !== i && i
        return r.e({
          loader: function () {
            return n.e(231).then(n.bind(null, '+92Z'))
          },
          loaderKey: 'trendDefaultLoader',
          loaderOptions: { withThirdPartyCards: c, errorContext: t },
          strategy: o.a.Critical,
        })
      }
    },
  },
])
//# sourceMappingURL=WIPED
