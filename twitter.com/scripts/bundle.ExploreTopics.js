;(window.webpackJsonp = window.webpackJsonp || []).push([
  [57],
  {
    gRxV: function (t, e, n) {
      'use strict'
      n.r(e),
        n.d(e, 'ExploreTopicsScreen', function () {
          return Q
        })
      n('2G9S'), n('vrRf')
      var a,
        r = n('ERkP'),
        o = n.n(r),
        i = n('es0u'),
        c = (n('KqXw'), n('WNMA'), n('hqKg')),
        u = n('KEM+'),
        l = n.n(u),
        s = n('yiKp'),
        d = n.n(s),
        p = n('ZNT5'),
        m = { news: 'url', sim_cluster: 'cluster_id', ttt: 'ttt_id', semantic_core: 'entity_id' },
        f = n('kGix'),
        y = n('3XMw'),
        E = n.n(y),
        w = n('rxPX'),
        x = E.a.fcf3e54b,
        b = function (t, e) {
          return e.match.params.topicId
        },
        g = function (t, e) {
          return e.match.params.taxonomy
        },
        h = Object(c.createSelector)(b, g, function (t, e) {
          return (function (t) {
            var e = t.taxonomy,
              n = t.topicId
            return Object(p.a)({
              timelineId: 'guide-'.concat(n, '-').concat(e, '-topic'),
              getEndpoint: function (t) {
                return t.URT.fetchExploreTopic
              },
              getEndpointParams: function (t) {
                return d()(l()({}, m[e], n), t)
              },
              context: 'FETCH_EXPLORE_TOPIC',
              perfKey: 'guide-topic',
            })
          })({ topicId: t, taxonomy: e })
        }),
        T = function (t, e) {
          var n = h(t, e)
          if (n.selectInitialFetchStatus(t, e) !== f.a.LOADED) return ''
          var a = n.selectMetadata(t).title
          return void 0 === a ? x : a
        },
        v = Object(w.a)()
          .propsFromState(function () {
            return { module: h, topicId: b, taxonomy: g, title: T }
          })
          .withAnalytics({ page: 'guide', section: 'topic' }),
        O = n('PnFR'),
        I = n('QIgh'),
        S = n('8UdT'),
        _ = n('S/Qv'),
        j = n('PH3B'),
        P =
          ((a = {}),
          l()(a, S.b.Message, Object(_.a)({ withGaps: !1 })),
          l()(a, S.b.News, j.a),
          l()(a, S.b.TimelineCursor, Object(O.a)({})),
          a),
        R = d()(d()({}, I.default), P),
        k = n('dwig'),
        C = n('0+qk'),
        F = n('VTxf'),
        M = n('yoO3'),
        K = n('7BdX'),
        U = n('SrIh'),
        X = n('fTQJ'),
        q = n('VS6U'),
        L = n('FIs5'),
        A = n('mw9i'),
        D = E.a.a2a3824a,
        G = E.a.ed827af6,
        H = function () {
          return o.a.createElement(F.a, null)
        },
        J = function () {
          return o.a.createElement(L.a, { message: G })
        },
        N = ['news', 'ttt', 'semantic_core', 'sim_cluster']
      function Q(t) {
        var e = t.history,
          n = t.title,
          a = o.a.createElement(C.a, { history: e }),
          r = function () {
            var e = t.taxonomy
            return N.indexOf(e) >= 0
          }
        return o.a.createElement(
          M.a,
          null,
          o.a.createElement(q.a, {
            backLocation: '/explore',
            documentTitle: D,
            history: e,
            primaryContent: o.a.createElement(
              k.a,
              { container: A.a, fab: a },
              (function () {
                if (r()) {
                  var e = t.module
                  return o.a.createElement(X.a, {
                    entryConfiguration: R,
                    module: e,
                    prerollDisplayLocation: K.c.OTHER,
                    renderEmptyState: H,
                    renderUnavailable: J,
                    title: D,
                  })
                }
                var n = t.taxonomy,
                  a = t.topicId
                return (
                  n && a
                    ? Object(U.a)(
                        "Unexpected guide topic: Taxonomy '".concat(n, "' requested with topicId '").concat(a, "'"),
                      )
                    : Object(U.a)('Missing taxonomy and/or topic id for guide topic:'),
                  H()
                )
              })(),
            ),
            sidebarContent: o.a.createElement(i.a, { withWhoToFollow: !1 }),
            title: n,
          }),
        )
      }
      var V = v(Q)
      e.default = V
    },
  },
])
//# sourceMappingURL=WIPED
