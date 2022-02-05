;(window.webpackJsonp = window.webpackJsonp || []).push([
  [54],
  {
    PH3B: function (e, t, r) {
      'use strict'
      var n,
        o = r('KEM+'),
        a = r.n(o),
        c = r('ezF+'),
        i = (r('yH/f'), Object.freeze({ Cell: 'Cell', PreviewCard: 'PreviewCard' })),
        u = (r('JtPf'), r('7x/C'), r('87if'), r('lTEL'), r('kYxP'), r('XBtf')),
        l = {
          loader: function () {
            return Promise.all([r.e(0), r.e(342)]).then(r.bind(null, 'a+ad'))
          },
          loaderKey: 'newsCellLoader',
          strategy: u.a.Critical,
        },
        s = {
          loader: function () {
            return Promise.all([r.e(0), r.e(344)]).then(r.bind(null, 'hX2d'))
          },
          loaderKey: 'newsPreviewCardLoader',
          strategy: u.a.Critical,
        }
      t.a = c.c({
        selectDisplayType: function (e) {
          return e.content.newsDisplayType
        },
        handlers: ((n = {}), a()(n, i.Cell, l), a()(n, i.PreviewCard, s), n),
      })
    },
    gRxV: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'ExploreTopicsScreen', function () {
          return V
        })
      r('2G9S'), r('vrRf')
      var n = r('ERkP'),
        o = r.n(n),
        a = r('es0u'),
        c = (r('WNMA'), r('KqXw'), r('hqKg')),
        i = (r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn'), r('KEM+')),
        u = r.n(i),
        l = r('ZNT5')
      function s(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      var p,
        f = { news: 'url', sim_cluster: 'cluster_id', ttt: 'ttt_id', semantic_core: 'entity_id' },
        d = function (e) {
          var t = e.taxonomy,
            r = e.topicId
          return Object(l.a)({
            timelineId: 'guide-'.concat(r, '-').concat(t, '-topic'),
            getEndpoint: function (e) {
              return e.URT.fetchExploreTopic
            },
            getEndpointParams: function (e) {
              return (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = null != arguments[t] ? arguments[t] : {}
                  t % 2
                    ? s(Object(r), !0).forEach(function (t) {
                        u()(e, t, r[t])
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                    : s(Object(r)).forEach(function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                      })
                }
                return e
              })(u()({}, f[t], r), e)
            },
            context: 'FETCH_EXPLORE_TOPIC',
            perfKey: 'guide-topic',
          })
        },
        y = r('kGix'),
        b = r('3XMw'),
        O = r.n(b),
        m = r('rxPX'),
        w = O.a.fcf3e54b,
        P = function (e, t) {
          return t.match.params.topicId
        },
        g = function (e, t) {
          return t.match.params.taxonomy
        },
        j = Object(c.createSelector)(P, g, function (e, t) {
          return d({ topicId: e, taxonomy: t })
        }),
        h = function (e, t) {
          var r = j(e, t)
          if (r.selectInitialFetchStatus(e, t) !== y.a.LOADED) return ''
          var n = r.selectMetadata(e).title
          return void 0 === n ? w : n
        },
        v = Object(m.a)()
          .propsFromState(function () {
            return { module: j, topicId: P, taxonomy: g, title: h }
          })
          .withAnalytics({ page: 'guide', section: 'topic' }),
        E = r('PnFR'),
        x = r('QIgh'),
        C = r('8UdT'),
        T = r('S/Qv'),
        D = r('PH3B')
      function S(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function I(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? S(Object(r), !0).forEach(function (t) {
                u()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : S(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var k =
          ((p = {}),
          u()(p, C.b.Message, Object(T.a)({ withGaps: !1 })),
          u()(p, C.b.News, D.a),
          u()(p, C.b.TimelineCursor, Object(E.a)({})),
          p),
        _ = I(I({}, x.b), k),
        F = r('dwig'),
        K = r('0+qk'),
        L = r('VTxf'),
        M = r('yoO3'),
        R = r('7BdX'),
        X = r('SrIh'),
        H = r('fTQJ'),
        U = r('VS6U'),
        q = r('FIs5'),
        B = r('mw9i'),
        J = O.a.a2a3824a,
        A = O.a.ed827af6,
        G = function () {
          return o.a.createElement(L.a, null)
        },
        N = function () {
          return o.a.createElement(q.a, { message: A })
        },
        Q = ['news', 'ttt', 'semantic_core', 'sim_cluster']
      function V(e) {
        var t = e.history,
          r = e.title,
          n = o.a.createElement(K.a, { history: t }),
          c = function () {
            var t = e.taxonomy
            return Q.indexOf(t) >= 0
          }
        return o.a.createElement(
          M.a,
          null,
          o.a.createElement(U.a, {
            backLocation: '/explore',
            documentTitle: J,
            history: t,
            primaryContent: o.a.createElement(
              F.a,
              { container: B.a, fab: n },
              (function () {
                if (c()) {
                  var t = e.module
                  return o.a.createElement(H.a, {
                    entryConfiguration: _,
                    module: t,
                    prerollDisplayLocation: R.c.OTHER,
                    renderEmptyState: G,
                    renderUnavailable: N,
                    title: J,
                  })
                }
                var r = e.taxonomy,
                  n = e.topicId
                return (
                  r && n
                    ? Object(X.a)(
                        "Unexpected guide topic: Taxonomy '".concat(r, "' requested with topicId '").concat(n, "'"),
                      )
                    : Object(X.a)('Missing taxonomy and/or topic id for guide topic:'),
                  G()
                )
              })(),
            ),
            sidebarContent: o.a.createElement(a.a, { withWhoToFollow: !1 }),
            title: r,
          }),
        )
      }
      var W = v(V)
      t.default = W
    },
  },
])
//# sourceMappingURL=WIPED
