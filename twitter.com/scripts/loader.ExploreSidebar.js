;(window.webpackJsonp = window.webpackJsonp || []).push([
  [176],
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
        p = a.a.memo(function (e) {
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
        a = n.n(r),
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
              return n.e(237).then(n.bind(null, 'QPD4'))
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
    'A+RP': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'UPDATE_INTERVAL', function () {
          return ne
        }),
        n.d(t, 'ExploreSidebar', function () {
          return oe
        })
      var r,
        a = n('VrFO'),
        i = n.n(a),
        o = n('Y9Ll'),
        c = n.n(o),
        u = n('1Pcy'),
        s = n.n(u),
        l = n('5Yy7'),
        d = n.n(l),
        f = n('2VqO'),
        p = n.n(f),
        b = n('KEM+'),
        h = n.n(b),
        v = (n('2G9S'), n('ERkP')),
        m = n.n(v),
        y = n('FIs5'),
        w = n('yiKp'),
        T = n.n(w),
        E = n('ezF+'),
        g = n('8UdT'),
        _ = n('iu0J'),
        S = n('xN10'),
        k = n('+o05'),
        C = n('5Y9N'),
        O = n('XtkE'),
        x = (n('z84I'), n('VPAj')),
        P = (n('M+/F'), n('3XMw')),
        I = n.n(P),
        M = n('caTy'),
        j = n('+Bsv'),
        L = n('MWbm'),
        R = n('Irs7'),
        A = n('hxu0'),
        D = n('6vad'),
        B = n('rC8y'),
        U = I.a.c5f4befa,
        F = I.a.d228a9a0,
        z = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n(e, r) {
            var a
            return (
              i()(this, n),
              (a = t.call(this, e, r)),
              h()(s()(a), '_handleShowMoreInlineClick', function () {
                var e = a.props.onClick
                a.setState({ showMoreTrends: !0 }), e('show_more_inline')
              }),
              h()(s()(a), '_handleShowMoreClick', function () {
                ;(0, a.props.onClick)('show_more')
              }),
              (a.state = { showMoreTrends: !1 }),
              a
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
                    a = m.a.createElement(j.a, { to: '/settings/trends' })
                  return m.a.createElement(
                    L.a,
                    null,
                    m.a.createElement(D.b, { rightControl: a, text: n || U }),
                    this._renderTrends(),
                    this.canShowMoreTrends()
                      ? m.a.createElement(B.a, {
                          onPress: this._handleShowMoreInlineClick,
                          text: F,
                          withBottomRadius: !0,
                          withDarkerInteractiveBackground: r,
                        })
                      : !!t &&
                          m.a.createElement(B.a, {
                            link: t.landingUrl ? Object(M.b)(t.landingUrl) : void 0,
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
                    return m.a.createElement(m.a.Fragment, { key: e.key }, e.item)
                  })
                },
              },
            ]),
            n
          )
        })(m.a.Component),
        X = Object(R.a)(Object(A.a)(z)),
        H = n('zh9S'),
        K = E.g({
          bindActions: function () {
            return { scribeAction: H.c }
          },
          component: X,
          createProps: function (e) {
            var t = e.actions.scribeAction,
              n = e.entry,
              r = e.renderEntry,
              a = e.scribeNamespace,
              i = n.content,
              o = i.footer,
              c = i.header,
              u = i.items
            return {
              footer: o,
              headerTitle: c && c.text,
              onClick: function (e) {
                t(T()(T()({}, a), {}, { element: e, action: 'click' }))
              },
              trends: u.map(function (e) {
                return { item: r(e), key: e.entryId }
              }),
            }
          },
          shouldDisplayBorder: Object(x.a)(!1),
        }),
        J = 'TrendsModule',
        W =
          ((r = {}),
          h()(r, g.b.TimelineCursor, E.e(E.a())),
          h()(r, g.b.Label, E.e(E.a())),
          h()(r, g.b.Message, E.e(E.a())),
          h()(r, g.b.News, E.e(E.a())),
          h()(r, g.b.Trend, Object(O.a)({ withThirdPartyCards: !1, errorContext: 'EXPLORE_SIDEBAR' })),
          h()(r, g.b.EventSummary, Object(_.a)({})),
          h()(r, g.b.ScoreEventSummary, k.a),
          r),
        N = h()({}, J, K),
        q = T()(
          T()(
            {},
            Object(C.a)({
              customHandlers: N,
              customSelectDisplayType: function (e) {
                return (t = e.content.items).length > 0 &&
                  Object(S.a)(t, function (e) {
                    return e.type === g.b.Trend
                  })
                  ? J
                  : e.content.displayType
                var t
              },
              isInSidebar: !0,
            }),
          ),
          W,
        ),
        Q = n('oQhu'),
        V = n('fTQJ'),
        Y = n('b8qQ'),
        G = n('2g+p'),
        Z = n('v6aA'),
        $ = n('BxsD'),
        ee = I.a.b8e930fd,
        te = I.a.ae05f268,
        ne = 3e5,
        re = function () {
          return m.a.createElement(y.a, { message: te })
        },
        ae = Object(Q.a)(function (e, t) {
          return Object($.c)({ featureSwitches: t, displayLocation: $.a.WebSidebar, focalTweetId: e })
        }),
        ie = Object(Q.a)(function (e, t) {
          return Object($.c)({ featureSwitches: t, displayLocation: $.a.WebSidebar, profileUserId: e })
        }),
        oe = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            i()(this, n)
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              h()(s()(e), '_getModule', function () {
                var t = e.props,
                  n = t.focalTweetId,
                  r = t.profileUserId
                return n
                  ? ae(n, e.context.featureSwitches)
                  : r
                  ? ie(r, e.context.featureSwitches)
                  : Object($.e)(e.context.featureSwitches)
              }),
              h()(s()(e), '_setTimelineRef', function (t) {
                e._timeline = t
              }),
              h()(s()(e), '_onAppForegrounded', function (t) {
                'active' === t && e._fetchUpdates()
              }),
              h()(s()(e), '_fetchUpdates', function () {
                e._timeline && 'active' === G.a.currentState && e._timeline.fetchTop({})
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  G.a.addEventListener('change', this._onAppForegrounded)
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  G.a.removeEventListener('change', this._onAppForegrounded)
                },
              },
              {
                key: 'render',
                value: function () {
                  return m.a.createElement(
                    L.a,
                    null,
                    m.a.createElement(V.a, {
                      entryConfiguration: q,
                      module: this._getModule(),
                      pollingIntervalMsOverride: ne,
                      renderUnavailable: re,
                      scroller: Y.a,
                      showLoadingFooter: !1,
                      timelineRef: this._setTimelineRef,
                      title: ee,
                      withKeyboardShortcuts: !1,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(m.a.Component)
      h()(oe, 'contextType', Z.a)
      t.default = oe
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
          return h
        }),
        n.d(t, 'f', function () {
          return v
        }),
        n.d(t, 'e', function () {
          return m
        }),
        n.d(t, 'g', function () {
          return y
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
        p = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = e.contentType,
            n = e.displayLocation,
            r = e.featureSwitches,
            i = e.focalTweetId,
            o = e.includePageConfiguration,
            u = void 0 !== o && o,
            s = e.initialTabId,
            l = e.profileUserId,
            p = t || n || 'main',
            h = i
              ? ''.concat(d).concat(p, '-tweet-').concat(i)
              : l
              ? ''.concat(d).concat(p, '-user-').concat(l)
              : ''.concat(d).concat(p),
            v = r.isTrue('responsive_web_new_client_events_enabled')
          return Object(c.a)({
            timelineId: h,
            formatResponse: b(v),
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
            perfKey: ''.concat(d).concat(p),
            staleIntervalMs: f,
          })
        },
        b = function (e) {
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
        h = function (e, t) {
          return p({ featureSwitches: e, includePageConfiguration: !0, initialTabId: t })
        },
        v = Object(o.a)(function (e) {
          return p({ featureSwitches: e, contentType: s.Trends })
        }),
        m = Object(o.a)(function (e) {
          return p({ featureSwitches: e, displayLocation: l.WebSidebar })
        }),
        y = function () {
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
    XtkE: function (e, t, n) {
      'use strict'
      var r = n('ezF+'),
        a = (n('lTEL'), n('7x/C'), n('JtPf'), n('87if'), n('kYxP'), n('XBtf'))
      t.a = function (e) {
        var t = e.errorContext,
          i = e.withThirdPartyCards,
          o = void 0 !== i && i
        return r.e({
          loader: function () {
            return Promise.all([n.e(0), n.e(3), n.e(4), n.e(246)]).then(n.bind(null, '+92Z'))
          },
          loaderKey: 'trendDefaultLoader',
          loaderOptions: { withThirdPartyCards: o, errorContext: t },
          strategy: a.a.Critical,
        })
      }
    },
    hxu0: function (e, t, n) {
      'use strict'
      var r = n('97Jx'),
        a = n.n(r),
        i = n('ERkP'),
        o = n.n(i),
        c = n('vqbU')
      t.a = function (e) {
        return function (t) {
          return o.a.createElement(c.a.Consumer, null, function (n) {
            return o.a.createElement(e, a()({}, t, { isInSidebar: n }))
          })
        }
      }
    },
  },
])
//# sourceMappingURL=WIPED
