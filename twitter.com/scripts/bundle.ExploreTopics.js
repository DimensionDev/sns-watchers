;(window.webpackJsonp = window.webpackJsonp || []).push([
  [58],
  {
    PH3B: function (e, t, n) {
      'use strict'
      var a,
        r = n('KEM+'),
        i = n.n(r),
        o = n('ezF+'),
        c = (n('yH/f'), Object.freeze({ Cell: 'Cell', PreviewCard: 'PreviewCard' })),
        l = (n('lTEL'), n('7x/C'), n('JtPf'), n('87if'), n('kYxP'), n('XBtf')),
        u = {
          loader: function () {
            return Promise.all([n.e(0), n.e(352)]).then(n.bind(null, 'a+ad'))
          },
          loaderKey: 'newsCellLoader',
          strategy: l.a.Critical,
        },
        d = {
          loader: function () {
            return Promise.all([n.e(0), n.e(354)]).then(n.bind(null, 'hX2d'))
          },
          loaderKey: 'newsPreviewCardLoader',
          strategy: l.a.Critical,
        }
      t.a = o.c({
        selectDisplayType: function (e) {
          return e.content.newsDisplayType
        },
        handlers: ((a = {}), i()(a, c.Cell, u), i()(a, c.PreviewCard, d), a),
      })
    },
    gRxV: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'ExploreTopicsScreen', function () {
          return N
        })
      n('2G9S'), n('vrRf')
      var a,
        r = n('ERkP'),
        i = n.n(r),
        o = n('es0u'),
        c = (n('KqXw'), n('WNMA'), n('hqKg')),
        l = n('KEM+'),
        u = n.n(l),
        d = n('yiKp'),
        s = n.n(d),
        p = n('ZNT5'),
        f = { news: 'url', sim_cluster: 'cluster_id', ttt: 'ttt_id', semantic_core: 'entity_id' },
        m = n('kGix'),
        y = n('3XMw'),
        w = n.n(y),
        E = n('rxPX'),
        b = w.a.fcf3e54b,
        h = function (e, t) {
          return t.match.params.topicId
        },
        x = function (e, t) {
          return t.match.params.taxonomy
        },
        g = Object(c.createSelector)(h, x, function (e, t) {
          return (function (e) {
            var t = e.taxonomy,
              n = e.topicId
            return Object(p.a)({
              timelineId: 'guide-'.concat(n, '-').concat(t, '-topic'),
              getEndpoint: function (e) {
                return e.URT.fetchExploreTopic
              },
              getEndpointParams: function (e) {
                return s()(u()({}, f[t], n), e)
              },
              context: 'FETCH_EXPLORE_TOPIC',
              perfKey: 'guide-topic',
            })
          })({ topicId: e, taxonomy: t })
        }),
        v = function (e, t) {
          var n = g(e, t)
          if (n.selectInitialFetchStatus(e, t) !== m.a.LOADED) return ''
          var a = n.selectMetadata(e).title
          return void 0 === a ? b : a
        },
        C = Object(E.a)()
          .propsFromState(function () {
            return { module: g, topicId: h, taxonomy: x, title: v }
          })
          .withAnalytics({ page: 'guide', section: 'topic' }),
        T = n('PnFR'),
        P = n('QIgh'),
        O = n('8UdT'),
        I = n('S/Qv'),
        S = n('PH3B'),
        _ =
          ((a = {}),
          u()(a, O.b.Message, Object(I.a)({ withGaps: !1 })),
          u()(a, O.b.News, S.a),
          u()(a, O.b.TimelineCursor, Object(T.a)({})),
          a),
        j = s()(s()({}, P.b), _),
        K = n('dwig'),
        k = n('0+qk'),
        F = n('VTxf'),
        L = n('yoO3'),
        M = n('7BdX'),
        R = n('SrIh'),
        X = n('fTQJ'),
        D = n('VS6U'),
        H = n('FIs5'),
        U = n('mw9i'),
        q = w.a.a2a3824a,
        B = w.a.ed827af6,
        J = function () {
          return i.a.createElement(F.a, null)
        },
        A = function () {
          return i.a.createElement(H.a, { message: B })
        },
        G = ['news', 'ttt', 'semantic_core', 'sim_cluster']
      function N(e) {
        var t = e.history,
          n = e.title,
          a = i.a.createElement(k.a, { history: t }),
          r = function () {
            var t = e.taxonomy
            return G.indexOf(t) >= 0
          }
        return i.a.createElement(
          L.a,
          null,
          i.a.createElement(D.a, {
            backLocation: '/explore',
            documentTitle: q,
            history: t,
            primaryContent: i.a.createElement(
              K.a,
              { container: U.a, fab: a },
              (function () {
                if (r()) {
                  var t = e.module
                  return i.a.createElement(X.a, {
                    entryConfiguration: j,
                    module: t,
                    prerollDisplayLocation: M.c.OTHER,
                    renderEmptyState: J,
                    renderUnavailable: A,
                    title: q,
                  })
                }
                var n = e.taxonomy,
                  a = e.topicId
                return (
                  n && a
                    ? Object(R.a)(
                        "Unexpected guide topic: Taxonomy '".concat(n, "' requested with topicId '").concat(a, "'"),
                      )
                    : Object(R.a)('Missing taxonomy and/or topic id for guide topic:'),
                  J()
                )
              })(),
            ),
            sidebarContent: i.a.createElement(o.a, { withWhoToFollow: !1 }),
            title: n,
          }),
        )
      }
      var Q = C(N)
      t.default = Q
    },
  },
])
//# sourceMappingURL=WIPED
