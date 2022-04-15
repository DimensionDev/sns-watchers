;(window.webpackJsonp = window.webpackJsonp || []).push([
  [174],
  {
    'A+RP': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'UPDATE_INTERVAL', function () {
          return K
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
        s = n('5Yy7'),
        f = n.n(s),
        l = n('2VqO'),
        p = n.n(l),
        b = n('KEM+'),
        v = n.n(b),
        h = (n('2G9S'), n('ERkP')),
        _ = n.n(h),
        m = n('FIs5'),
        g = n('yiKp'),
        E = n.n(g),
        w = n('ezF+'),
        y = n('8UdT'),
        O = n('iu0J'),
        T = n('+o05'),
        S = n('5Y9N'),
        j = n('XtkE'),
        I =
          ((r = {}),
          v()(r, y.b.TimelineCursor, w.e(w.a())),
          v()(r, y.b.Label, w.e(w.a())),
          v()(r, y.b.Message, w.e(w.a())),
          v()(r, y.b.News, w.e(w.a())),
          v()(r, y.b.Trend, Object(j.a)({ withThirdPartyCards: !1, errorContext: 'EXPLORE_SIDEBAR' })),
          v()(r, y.b.EventSummary, Object(O.a)({})),
          v()(r, y.b.ScoreEventSummary, T.a),
          r),
        x = E()(E()({}, Object(S.a)({ isInSidebar: !0 })), I),
        L = n('3XMw'),
        R = n.n(L),
        C = n('oQhu'),
        P = n('fTQJ'),
        U = n('b8qQ'),
        k = n('2g+p'),
        A = n('MWbm'),
        M = n('v6aA'),
        F = n('BxsD'),
        W = R.a.b8e930fd,
        D = R.a.ae05f268,
        K = 3e5,
        X = function () {
          return _.a.createElement(m.a, { message: D })
        },
        q = Object(C.a)(function (e, t) {
          return Object(F.c)({ featureSwitches: t, displayLocation: F.a.WebSidebar, focalTweetId: e })
        }),
        z = Object(C.a)(function (e, t) {
          return Object(F.c)({ featureSwitches: t, displayLocation: F.a.WebSidebar, profileUserId: e })
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
                  ? q(n, e.context.featureSwitches)
                  : r
                  ? z(r, e.context.featureSwitches)
                  : Object(F.e)(e.context.featureSwitches)
              }),
              v()(d()(e), '_setTimelineRef', function (t) {
                e._timeline = t
              }),
              v()(d()(e), '_onAppForegrounded', function (t) {
                'active' === t && e._fetchUpdates()
              }),
              v()(d()(e), '_fetchUpdates', function () {
                e._timeline && 'active' === k.a.currentState && e._timeline.fetchTop({})
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  k.a.addEventListener('change', this._onAppForegrounded)
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  k.a.removeEventListener('change', this._onAppForegrounded)
                },
              },
              {
                key: 'render',
                value: function () {
                  return _.a.createElement(
                    A.a,
                    null,
                    _.a.createElement(P.a, {
                      entryConfiguration: x,
                      module: this._getModule(),
                      pollingIntervalMsOverride: K,
                      renderUnavailable: X,
                      scroller: U.a,
                      showLoadingFooter: !1,
                      timelineRef: this._setTimelineRef,
                      title: W,
                      withKeyboardShortcuts: !1,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(_.a.Component)
      v()(J, 'contextType', M.a)
      t.default = J
    },
    BxsD: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return s
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
          return _
        }),
        n.d(t, 'g', function () {
          return m
        })
      var r = n('yiKp'),
        i = n.n(r),
        a = (n('yH/f'), n('2G9S'), n('z84I'), n('LW0h'), n('7x/C'), n('vrRf'), n('vXCH')),
        o = n('oQhu'),
        c = n('ZNT5'),
        u = n('eR3e'),
        d = Object.freeze({ Trends: 'trends' }),
        s = Object.freeze({ WebSidebar: 'web_sidebar' }),
        f = 'explore-',
        l = 9e5,
        p = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = e.contentType,
            n = e.displayLocation,
            r = e.featureSwitches,
            a = e.focalTweetId,
            o = e.includePageConfiguration,
            u = void 0 !== o && o,
            d = e.initialTabId,
            s = e.profileUserId,
            p = t || n || 'main',
            v = a
              ? ''.concat(f).concat(p, '-tweet-').concat(a)
              : s
              ? ''.concat(f).concat(p, '-user-').concat(s)
              : ''.concat(f).concat(p),
            h = r.isTrue('responsive_web_behavioral_events_enabled')
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
                  profile_user_id: s,
                  entity_tokens: h,
                },
              )
            },
            context: 'FETCH_EXPLORE',
            perfKey: ''.concat(f).concat(p),
            staleIntervalMs: l,
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
        _ = Object(o.a)(function (e) {
          return p({ featureSwitches: e, displayLocation: s.WebSidebar })
        }),
        m = function () {
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
  },
])
//# sourceMappingURL=WIPED
