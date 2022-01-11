;(window.webpackJsonp = window.webpackJsonp || []).push([
  [53],
  {
    PH3B: function (e, t, r) {
      'use strict'
      var n,
        o = r('KEM+'),
        c = r.n(o),
        a = r('ezF+'),
        i = (r('yH/f'), Object.freeze({ Cell: 'Cell', PreviewCard: 'PreviewCard' })),
        u = (r('JtPf'), r('7x/C'), r('87if'), r('lTEL'), r('kYxP'), r('XBtf')),
        l = {
          loader: function () {
            return r.e(332).then(r.bind(null, 'a+ad'))
          },
          loaderKey: 'newsCellLoader',
          strategy: u.a.Critical,
        },
        s = {
          loader: function () {
            return r.e(334).then(r.bind(null, 'hX2d'))
          },
          loaderKey: 'newsPreviewCardLoader',
          strategy: u.a.Critical,
        }
      t.a = a.c({
        selectDisplayType: function (e) {
          return e.content.newsDisplayType
        },
        handlers: ((n = {}), c()(n, i.Cell, l), c()(n, i.PreviewCard, s), n),
      })
    },
    gRxV: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'ExploreTopicsScreen', function () {
          return Q
        })
      r('2G9S'), r('vrRf')
      var n = r('ERkP'),
        o = r('es0u'),
        c = (r('WNMA'), r('KqXw'), r('hqKg')),
        a = (r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn'), r('KEM+')),
        i = r.n(a),
        u = r('ZNT5')
      function l(e, t) {
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
      var s,
        p = { news: 'url', sim_cluster: 'cluster_id', ttt: 'ttt_id', semantic_core: 'entity_id' },
        f = function (e) {
          var t = e.taxonomy,
            r = e.topicId
          return Object(u.a)({
            timelineId: 'guide-'.concat(r, '-').concat(t, '-topic'),
            getEndpoint: function (e) {
              return e.URT.fetchExploreTopic
            },
            getEndpointParams: function (e) {
              return (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = null != arguments[t] ? arguments[t] : {}
                  t % 2
                    ? l(Object(r), !0).forEach(function (t) {
                        i()(e, t, r[t])
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                    : l(Object(r)).forEach(function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                      })
                }
                return e
              })(i()({}, p[t], r), e)
            },
            context: 'FETCH_EXPLORE_TOPIC',
            perfKey: 'guide-topic',
          })
        },
        d = r('kGix'),
        y = r('3XMw'),
        b = r.n(y),
        O = r('rxPX'),
        m = b.a.fcf3e54b,
        w = function (e, t) {
          return t.match.params.topicId
        },
        g = function (e, t) {
          return t.match.params.taxonomy
        },
        j = Object(c.createSelector)(w, g, function (e, t) {
          return f({ topicId: e, taxonomy: t })
        }),
        P = function (e, t) {
          var r = j(e, t)
          if (r.selectInitialFetchStatus(e, t) !== d.a.LOADED) return ''
          var n = r.selectMetadata(e).title
          return void 0 === n ? m : n
        },
        h = Object(O.a)()
          .propsFromState(function () {
            return { module: j, topicId: w, taxonomy: g, title: P }
          })
          .withAnalytics({ page: 'guide', section: 'topic' }),
        v = r('PnFR'),
        E = r('QIgh'),
        x = r('8UdT'),
        C = r('S/Qv'),
        T = r('PH3B')
      function D(e, t) {
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
      function S(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? D(Object(r), !0).forEach(function (t) {
                i()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : D(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var I =
          ((s = {}),
          i()(s, x.b.Message, Object(C.a)({ withGaps: !1 })),
          i()(s, x.b.News, T.a),
          i()(s, x.b.TimelineCursor, Object(v.a)({})),
          s),
        k = S(S({}, E.b), I),
        _ = r('dwig'),
        F = r('0+qk'),
        K = r('VTxf'),
        L = r('yoO3'),
        M = r('7BdX'),
        R = r('SrIh'),
        X = r('fTQJ'),
        H = r('VS6U'),
        U = r('FIs5'),
        q = r('mw9i'),
        B = b.a.a2a3824a,
        J = b.a.ed827af6,
        A = function () {
          return n.createElement(K.a, null)
        },
        G = function () {
          return n.createElement(U.a, { message: J })
        },
        N = ['news', 'ttt', 'semantic_core', 'sim_cluster']
      function Q(e) {
        var t = e.history,
          r = e.title,
          c = n.createElement(F.a, { history: t }),
          a = function () {
            var t = e.taxonomy
            return N.indexOf(t) >= 0
          }
        return n.createElement(
          L.a,
          null,
          n.createElement(H.a, {
            backLocation: '/explore',
            documentTitle: B,
            history: t,
            primaryContent: n.createElement(
              _.a,
              { container: q.a, fab: c },
              (function () {
                if (a()) {
                  var t = e.module
                  return n.createElement(X.a, {
                    entryConfiguration: k,
                    module: t,
                    prerollDisplayLocation: M.c.OTHER,
                    renderEmptyState: A,
                    renderUnavailable: G,
                    title: B,
                  })
                }
                var r = e.taxonomy,
                  o = e.topicId
                return (
                  r && o
                    ? Object(R.a)(
                        "Unexpected guide topic: Taxonomy '".concat(r, "' requested with topicId '").concat(o, "'"),
                      )
                    : Object(R.a)('Missing taxonomy and/or topic id for guide topic:'),
                  A()
                )
              })(),
            ),
            sidebarContent: n.createElement(o.a, { withWhoToFollow: !1 }),
            title: r,
          }),
        )
      }
      var V = h(Q)
      t.default = V
    },
  },
])
//# sourceMappingURL=WIPED
