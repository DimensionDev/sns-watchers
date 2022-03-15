;(window.webpackJsonp = window.webpackJsonp || []).push([
  [175],
  {
    '+o05': function (e, t, n) {
      'use strict'
      var r = n('KEM+'),
        i = n.n(r),
        a = n('ezF+'),
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
      t.a = a.c({
        selectDisplayType: function (e) {
          return e.content.displayType
        },
        handlers: i()({}, o.Cell, c),
      })
    },
    'A+RP': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'UPDATE_INTERVAL', function () {
          return X
        }),
        n.d(t, 'ExploreSidebar', function () {
          return J
        })
      var r,
        i = n('VrFO'),
        a = n.n(i),
        o = n('Y9Ll'),
        c = n.n(o),
        u = n('1Pcy'),
        d = n.n(u),
        l = n('5Yy7'),
        f = n.n(l),
        s = n('2VqO'),
        p = n.n(s),
        b = n('KEM+'),
        v = n.n(b),
        h = (n('2G9S'), n('ERkP')),
        y = n.n(h),
        E = n('FIs5'),
        m = n('yiKp'),
        _ = n.n(m),
        T = n('ezF+'),
        g = n('8UdT'),
        w = n('iu0J'),
        O = n('+o05'),
        S = n('5Y9N'),
        C = n('XtkE'),
        P =
          ((r = {}),
          v()(r, g.b.TimelineCursor, T.e(T.a())),
          v()(r, g.b.Label, T.e(T.a())),
          v()(r, g.b.Message, T.e(T.a())),
          v()(r, g.b.News, T.e(T.a())),
          v()(r, g.b.Trend, Object(C.a)({ withThirdPartyCards: !1, errorContext: 'EXPLORE_SIDEBAR' })),
          v()(r, g.b.EventSummary, Object(w.a)({})),
          v()(r, g.b.ScoreEventSummary, O.a),
          r),
        x = _()(_()({}, Object(S.a)({ isInSidebar: !0 })), P),
        j = n('3XMw'),
        L = n.n(j),
        I = n('oQhu'),
        R = n('fTQJ'),
        k = n('b8qQ'),
        F = n('2g+p'),
        M = n('MWbm'),
        U = n('v6aA'),
        A = n('BxsD'),
        D = L.a.b8e930fd,
        K = L.a.ae05f268,
        X = 3e5,
        z = function () {
          return y.a.createElement(E.a, { message: K })
        },
        W = Object(I.a)(function (e, t) {
          return Object(A.c)({ featureSwitches: t, displayLocation: A.a.WebSidebar, focalTweetId: e })
        }),
        H = Object(I.a)(function (e, t) {
          return Object(A.c)({ featureSwitches: t, displayLocation: A.a.WebSidebar, profileUserId: e })
        }),
        J = (function (e) {
          f()(n, e)
          var t = p()(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              v()(d()(e), '_getModule', function () {
                var t = e.props,
                  n = t.focalTweetId,
                  r = t.profileUserId
                return n
                  ? W(n, e.context.featureSwitches)
                  : r
                  ? H(r, e.context.featureSwitches)
                  : Object(A.e)(e.context.featureSwitches)
              }),
              v()(d()(e), '_setTimelineRef', function (t) {
                e._timeline = t
              }),
              v()(d()(e), '_onAppForegrounded', function (t) {
                'active' === t && e._fetchUpdates()
              }),
              v()(d()(e), '_fetchUpdates', function () {
                e._timeline && 'active' === F.a.currentState && e._timeline.fetchTop({})
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  F.a.addEventListener('change', this._onAppForegrounded)
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  F.a.removeEventListener('change', this._onAppForegrounded)
                },
              },
              {
                key: 'render',
                value: function () {
                  return y.a.createElement(
                    M.a,
                    null,
                    y.a.createElement(R.a, {
                      entryConfiguration: x,
                      module: this._getModule(),
                      pollingIntervalMsOverride: X,
                      renderUnavailable: z,
                      scroller: k.a,
                      showLoadingFooter: !1,
                      timelineRef: this._setTimelineRef,
                      title: D,
                      withKeyboardShortcuts: !1,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(y.a.Component)
      v()(J, 'contextType', U.a)
      t.default = J
    },
    BxsD: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return l
      }),
        n.d(t, 'b', function () {
          return f
        }),
        n.d(t, 'c', function () {
          return p
        }),
        n.d(t, 'd', function () {
          return v
        }),
        n.d(t, 'f', function () {
          return h
        }),
        n.d(t, 'e', function () {
          return y
        }),
        n.d(t, 'g', function () {
          return E
        })
      var r = n('yiKp'),
        i = n.n(r),
        a = (n('yH/f'), n('2G9S'), n('z84I'), n('LW0h'), n('7x/C'), n('vrRf'), n('vXCH')),
        o = n('oQhu'),
        c = n('ZNT5'),
        u = n('eR3e'),
        d = Object.freeze({ Trends: 'trends' }),
        l = Object.freeze({ WebSidebar: 'web_sidebar' }),
        f = 'explore-',
        s = 9e5,
        p = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = e.contentType,
            n = e.displayLocation,
            r = e.featureSwitches,
            a = e.focalTweetId,
            o = e.includePageConfiguration,
            u = void 0 !== o && o,
            d = e.initialTabId,
            l = e.profileUserId,
            p = t || n || 'main',
            v = a
              ? ''.concat(f).concat(p, '-tweet-').concat(a)
              : l
              ? ''.concat(f).concat(p, '-user-').concat(l)
              : ''.concat(f).concat(p),
            h = r.isTrue('responsive_web_new_client_events_enabled')
          return Object(c.a)({
            timelineId: v,
            formatResponse: b(h),
            getEndpoint: function (e) {
              return e.URT.fetchExplore
            },
            getEndpointParams: function (e) {
              return i()(
                i()({}, e),
                {},
                {
                  candidate_source: t,
                  display_location: n,
                  focal_tweet_id: a,
                  include_page_configuration: u,
                  initial_tab_id: d,
                  profile_user_id: l,
                  entity_tokens: h,
                },
              )
            },
            context: 'FETCH_EXPLORE',
            perfKey: ''.concat(f).concat(p),
            staleIntervalMs: s,
          })
        },
        b = function (e) {
          return function (t) {
            var n = t.pageConfiguration
            if (e && n && n.tabs) {
              var r = n.tabs.tabs.map(function (t) {
                  var n,
                    r,
                    a,
                    o = i()(
                      i()(
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
                  return i()(
                    i()({}, t),
                    {},
                    {
                      urtEndpoint: i()(
                        i()({}, t.urtEndpoint),
                        {},
                        {
                          urtEndpointOptions: i()(
                            i()({}, null === (a = t.urtEndpoint) || void 0 === a ? void 0 : a.urtEndpointOptions),
                            {},
                            { requestParams: o },
                          ),
                        },
                      ),
                    },
                  )
                }),
                o = i()(
                  i()({}, t),
                  {},
                  { pageConfiguration: i()(i()({}, n), {}, { tabs: i()(i()({}, n.tabs), {}, { tabs: r }) }) },
                )
              return Object(a.a)(o)
            }
            return Object(a.a)(t)
          }
        },
        v = function (e, t) {
          return p({ featureSwitches: e, includePageConfiguration: !0, initialTabId: t })
        },
        h = Object(o.a)(function (e) {
          return p({ featureSwitches: e, contentType: d.Trends })
        }),
        y = Object(o.a)(function (e) {
          return p({ featureSwitches: e, displayLocation: l.WebSidebar })
        }),
        E = function () {
          return function (e, t) {
            return e(
              Object(u.t)(t())
                .filter(function (e) {
                  return 0 === e.indexOf(f)
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
        i = (n('lTEL'), n('7x/C'), n('JtPf'), n('87if'), n('kYxP'), n('XBtf'))
      t.a = function (e) {
        var t = e.errorContext,
          a = e.withThirdPartyCards,
          o = void 0 !== a && a
        return r.e({
          loader: function () {
            return Promise.all([n.e(0), n.e(3), n.e(4), n.e(246)]).then(n.bind(null, '+92Z'))
          },
          loaderKey: 'trendDefaultLoader',
          loaderOptions: { withThirdPartyCards: o, errorContext: t },
          strategy: i.a.Critical,
        })
      }
    },
  },
])
//# sourceMappingURL=WIPED
