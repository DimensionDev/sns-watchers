;(window.webpackJsonp = window.webpackJsonp || []).push([
  [168],
  {
    '+Bsv': function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        o = n.n(r),
        i = n('3XMw'),
        a = n.n(i),
        c = n('M2x3'),
        u = 'settingsAppBar',
        s = n('/yvb'),
        l = n('rHpw'),
        f = a.a.bb081ea1,
        d = { viewType: 'settings_button' },
        p = o.a.memo(function (e) {
          var t = e.onPress,
            n = e.pullRight,
            r = e.to
          return o.a.createElement(s.a, {
            accessibilityLabel: f,
            behavioralEventContext: d,
            hoverLabel: { label: f },
            icon: o.a.createElement(c.a, null),
            link: r,
            onPress: t,
            pullRight: n,
            style: b.button,
            testID: u,
            type: 'primaryText',
          })
        }),
        b = l.a.create(function (e) {
          return { button: { marginVertical: 'calc(-'.concat(e.spaces.space12, ')') } }
        })
      t.a = p
    },
    '+o05': function (e, t, n) {
      'use strict'
      var r = n('KEM+'),
        o = n.n(r),
        i = n('ezF+'),
        a = (n('yH/f'), Object.freeze({ Cell: 'Cell', Hero: 'Hero', Tile: 'Tile' })),
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
        handlers: o()({}, a.Cell, c),
      })
    },
    'A+RP': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'UPDATE_INTERVAL', function () {
          return se
        }),
        n.d(t, 'ExploreSidebar', function () {
          return pe
        })
      n('OZaJ')
      var r = n('VrFO'),
        o = n.n(r),
        i = n('Y9Ll'),
        a = n.n(i),
        c = n('1Pcy'),
        u = n.n(c),
        s = n('5Yy7'),
        l = n.n(s),
        f = n('N+ot'),
        d = n.n(f),
        p = n('AuHH'),
        b = n.n(p),
        h = n('KEM+'),
        y = n.n(h),
        v = (n('2G9S'), n('ERkP')),
        O = n.n(v),
        m = n('FIs5'),
        w = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('ezF+')),
        g = n('8UdT'),
        j = n('iu0J'),
        E = n('xN10'),
        P = n('+o05'),
        T = n('5Y9N'),
        _ = n('XtkE'),
        S = (n('z84I'), n('VPAj')),
        k = (n('M+/F'), n('3XMw')),
        x = n.n(k),
        C = n('caTy'),
        R = n('+Bsv'),
        M = n('MWbm'),
        D = n('Irs7'),
        I = n('hxu0'),
        L = n('6vad'),
        B = n('rC8y')
      function A(e) {
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
      var F = x.a.c5f4befa,
        U = x.a.d228a9a0,
        H = (function (e) {
          l()(n, e)
          var t = A(n)
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
            a()(n, [
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
                    o = O.a.createElement(R.a, { to: '/settings/trends' })
                  return O.a.createElement(
                    M.a,
                    null,
                    O.a.createElement(L.b, { rightControl: o, text: n || F }),
                    this._renderTrends(),
                    this.canShowMoreTrends()
                      ? O.a.createElement(B.a, {
                          onPress: this._handleShowMoreInlineClick,
                          text: U,
                          withBottomRadius: !0,
                          withDarkerInteractiveBackground: r,
                        })
                      : !!t &&
                          O.a.createElement(B.a, {
                            link: t.landingUrl ? Object(C.b)(t.landingUrl) : void 0,
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
                    return O.a.createElement(O.a.Fragment, { key: e.key }, e.item)
                  })
                },
              },
            ]),
            n
          )
        })(O.a.Component),
        X = Object(D.a)(Object(I.a)(H)),
        z = n('zh9S')
      function K(e, t) {
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
      function J(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? K(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : K(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var W,
        N = w.g({
          bindActions: function () {
            return { scribeAction: z.c }
          },
          component: X,
          createProps: function (e) {
            var t = e.actions.scribeAction,
              n = e.entry,
              r = e.renderEntry,
              o = e.scribeNamespace,
              i = n.content,
              a = i.footer,
              c = i.header,
              u = i.items
            return {
              footer: a,
              headerTitle: c && c.text,
              onClick: function (e) {
                t(J(J({}, o), {}, { element: e, action: 'click' }))
              },
              trends: u.map(function (e) {
                return { item: r(e), key: e.entryId }
              }),
            }
          },
          shouldDisplayBorder: Object(S.a)(!1),
        })
      function Q(e, t) {
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
      function Y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Q(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Q(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var Z = 'TrendsModule',
        q = 'EXPLORE_SIDEBAR',
        V =
          ((W = {}),
          y()(W, g.b.TimelineCursor, w.e(w.a())),
          y()(W, g.b.Label, w.e(w.a())),
          y()(W, g.b.Message, w.e(w.a())),
          y()(W, g.b.News, w.e(w.a())),
          y()(W, g.b.Trend, Object(_.a)({ withThirdPartyCards: !1, errorContext: q })),
          y()(W, g.b.EventSummary, Object(j.a)({ errorContext: q })),
          y()(W, g.b.ScoreEventSummary, P.a),
          W),
        G = y()({}, Z, N),
        $ = Y(
          Y(
            {},
            Object(T.a)({
              customHandlers: G,
              customSelectDisplayType: function (e) {
                return (t = e.content.items).length > 0 &&
                  Object(E.a)(t, function (e) {
                    return e.type === g.b.Trend
                  })
                  ? Z
                  : e.content.displayType
                var t
              },
              isInSidebar: !0,
            }),
          ),
          V,
        ),
        ee = n('oQhu'),
        te = n('fTQJ'),
        ne = n('b8qQ'),
        re = n('2g+p'),
        oe = n('v6aA'),
        ie = n('BxsD')
      function ae(e) {
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
      var ce = x.a.b8e930fd,
        ue = x.a.ae05f268,
        se = 3e5,
        le = function () {
          return O.a.createElement(m.a, { message: ue })
        },
        fe = Object(ee.a)(function (e, t) {
          return Object(ie.c)({ featureSwitches: t, displayLocation: ie.a.WebSidebar, focalTweetId: e })
        }),
        de = Object(ee.a)(function (e, t) {
          return Object(ie.c)({ featureSwitches: t, displayLocation: ie.a.WebSidebar, profileUserId: e })
        }),
        pe = (function (e) {
          l()(n, e)
          var t = ae(n)
          function n() {
            var e
            o()(this, n)
            for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              y()(u()(e), '_getModule', function () {
                var t = e.props,
                  n = t.focalTweetId,
                  r = t.profileUserId
                return n
                  ? fe(n, e.context.featureSwitches)
                  : r
                  ? de(r, e.context.featureSwitches)
                  : Object(ie.e)(e.context.featureSwitches)
              }),
              y()(u()(e), '_setTimelineRef', function (t) {
                e._timeline = t
              }),
              y()(u()(e), '_onAppForegrounded', function (t) {
                'active' === t && e._fetchUpdates()
              }),
              y()(u()(e), '_fetchUpdates', function () {
                e._timeline && 'active' === re.a.currentState && e._timeline.fetchTop({})
              }),
              e
            )
          }
          return (
            a()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  re.a.addEventListener('change', this._onAppForegrounded)
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  re.a.removeEventListener('change', this._onAppForegrounded)
                },
              },
              {
                key: 'render',
                value: function () {
                  return O.a.createElement(
                    M.a,
                    null,
                    O.a.createElement(te.a, {
                      entryConfiguration: $,
                      module: this._getModule(),
                      pollingIntervalMsOverride: se,
                      renderUnavailable: le,
                      scroller: ne.a,
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
        })(O.a.Component)
      y()(pe, 'contextType', oe.a)
      t.default = pe
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
        p = 'explore-',
        b = 9e5,
        h = function () {
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
              ? ''.concat(p).concat(f, '-tweet-').concat(o)
              : s
              ? ''.concat(p).concat(f, '-user-').concat(s)
              : ''.concat(p).concat(f),
            h = r.isTrue('responsive_web_new_client_events_enabled')
          return Object(c.a)({
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
                  include_page_configuration: a,
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
        O = Object(a.a)(function (e) {
          return h({ featureSwitches: e, contentType: f.Trends })
        }),
        m = Object(a.a)(function (e) {
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
          a = void 0 !== i && i
        return r.e({
          loader: function () {
            return n.e(236).then(n.bind(null, '+92Z'))
          },
          loaderKey: 'trendDefaultLoader',
          loaderOptions: { withThirdPartyCards: a, errorContext: t },
          strategy: o.a.Critical,
        })
      }
    },
    hxu0: function (e, t, n) {
      'use strict'
      var r = n('97Jx'),
        o = n.n(r),
        i = n('ERkP'),
        a = n.n(i),
        c = n('vqbU')
      t.a = function (e) {
        return function (t) {
          return a.a.createElement(c.a.Consumer, null, function (n) {
            return a.a.createElement(e, o()({}, t, { isInSidebar: n }))
          })
        }
      }
    },
  },
])
//# sourceMappingURL=WIPED
