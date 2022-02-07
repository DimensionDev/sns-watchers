;(window.webpackJsonp = window.webpackJsonp || []).push([
  [196],
  {
    '+93b': function (e, t, r) {
      'use strict'
      r.r(t)
      var a,
        n,
        o,
        i = r('yiKp'),
        c = r.n(i),
        s = r('ezF+'),
        l = r('ERkP'),
        d = r.n(l),
        u = r('Fmkq'),
        m = r('VrFO'),
        b = r.n(m),
        p = r('Y9Ll'),
        y = r.n(p),
        f = r('5Yy7'),
        h = r.n(f),
        E = r('2VqO'),
        v = r.n(E),
        C = r('KEM+'),
        R = r.n(C),
        P = r('rpbw'),
        T = (r('lTEL'), r('7x/C'), r('JtPf'), r('87if'), r('kYxP'), r('XBtf')),
        g = {
          loader: function () {
            return r.e(223).then(r.bind(null, 'kh1t'))
          },
          loaderKey: 'feedbackItemLoader',
          strategy: T.a.Critical,
        },
        O = r('TEXq'),
        A = r('PlEh'),
        w = (r('yH/f'), Object.freeze({ PagedCarouselFeedbackItem: 'pagedCarouselFeedbackItem', Message: 'message' })),
        S = s.c({
          selectDisplayType: function (e) {
            return Object(O.a)(e.content.content) || ''
          },
          handlers:
            ((a = {}), R()(a, w.PagedCarouselFeedbackItem, g), R()(a, w.Message, Object(A.a)({ withGaps: !1 })), a),
        }),
        D = r('VPAj'),
        I = r('yDHe'),
        k = s.d({
          render: function (e, t) {
            var r = e.content,
              a = r.dismissedEntry,
              n = r.feedbackKeys,
              o = t.module
            return d.a.createElement(I.a, { carousel: !0, entry: a, feedbackKeys: n, module: o })
          },
          shouldDisplayBorder: Object(D.a)(!1),
        }),
        F = Object.freeze({
          ScoreCard: 'scoreCard',
          Standard: 'standard',
          Broadcast: 'broadcast',
          CallToAction: 'callToAction',
        }),
        j = {
          loader: function () {
            return r.e(235).then(r.bind(null, 'CdHO'))
          },
          loaderKey: 'standardHandlerLoader',
          strategy: T.a.Critical,
        },
        M = {
          loader: function () {
            return r.e(235).then(r.bind(null, 'vKPG'))
          },
          loaderKey: 'broadcastLoader',
          strategy: T.a.Critical,
        },
        K = {
          loader: function () {
            return r.e(235).then(r.bind(null, 'kthL'))
          },
          loaderKey: 'callToActionLoader',
          strategy: T.a.Critical,
        },
        L = {
          loader: function () {
            return r.e(235).then(r.bind(null, 'FYbo'))
          },
          loaderKey: 'scoreCardLoader',
          strategy: T.a.Critical,
        },
        x = s.c({
          selectDisplayType: function (e) {
            return Object(O.a)(e.content.content) || ''
          },
          handlers:
            ((n = {}),
            R()(n, F.Standard, j),
            R()(n, F.ScoreCard, L),
            R()(n, F.Broadcast, M),
            R()(n, F.CallToAction, K),
            n),
        }),
        B = r('67iF'),
        H = r('8UdT'),
        z =
          ((o = {}),
          R()(o, H.b.PagedCarouselItem, S),
          R()(o, H.b.Tile, x),
          R()(o, H.b.Topic, Object(B.a)({})),
          R()(o, H.b.TwitterList, Object(P.a)({})),
          R()(o, H.a.Tombstone, s.e(k)),
          o),
        V = r('FIs5'),
        J = r('MDbM'),
        N = r('eXtP'),
        X = r('3XMw'),
        Y = r.n(X),
        G = r('fs1G'),
        q = r('zb92'),
        U = r('RuTB'),
        W = Object(q.a)({
          loader: function () {
            return Promise.all([r.e(0), r.e(195)]).then(r.bind(null, 'DO1+'))
          },
          renderPlaceholder: function (e, t) {
            return d.a.createElement(U.a, { hasError: e, onRetry: t })
          },
        }),
        Z = r('BKvV'),
        _ = r('b1wW'),
        Q = r('Fz18'),
        $ = r('JfS+'),
        ee = Object(q.a)({
          loader: function () {
            return Promise.all([r.e(0), r.e(195)]).then(r.bind(null, '0xZH'))
          },
          renderPlaceholder: function (e, t) {
            return d.a.createElement(U.a, { hasError: e, onRetry: t })
          },
        }),
        te = r('v6aA'),
        re = G.a,
        ae = Y.a.afb4c24a,
        ne = (function (e) {
          h()(r, e)
          var t = v()(r)
          function r() {
            return b()(this, r), t.apply(this, arguments)
          }
          return (
            y()(r, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.applyReactionInstructions,
                    r = e.canRefresh,
                    a = e.dismissedEntries,
                    n = e.items,
                    o = e.module,
                    i = e.moduleEntryId,
                    s = e.numRowsFromMetadata,
                    l = e.renderEmptyState,
                    u = e.richScribeAction,
                    m = e.scribe,
                    b = e.scribeNamespace,
                    p = e.scrollerDisplayType
                  return d.a.createElement(
                    Z.b.Provider,
                    { value: c()({ numRowsFromMetadata: s, scrollerDisplayType: p }, this.context) },
                    d.a.createElement(N.a, { dismissedEntries: a, entries: n, entryConfiguration: z }, function (e, a) {
                      return d.a.createElement(
                        Q.a,
                        { identifier: i },
                        d.a.createElement($.a, {
                          applyReactionInstructions: t,
                          canRefresh: r,
                          clearActiveCover: G.a,
                          entries: a,
                          handlerRegistry: e,
                          initialFetchStatus: J.a.LOADED,
                          module: o,
                          onAtTop: G.a,
                          onRef: G.a,
                          processCallback: re,
                          refreshControl: null,
                          removeAlert: G.a,
                          renderEmptyState: l,
                          richScribeAction: u,
                          scribeAction: m,
                          scribeNamespace: b,
                          scroller: p === _.a.PagedCarousel ? W : ee,
                          timelineId: i,
                          title: 'Carousel',
                          withKeyboardShortcuts: !1,
                        }),
                      )
                    }),
                  )
                },
              },
            ]),
            r
          )
        })(d.a.PureComponent)
      R()(ne, 'contextType', te.a),
        R()(ne, 'defaultProps', {
          renderEmptyState: function () {
            return d.a.createElement(V.a, { message: ae })
          },
          scrollerDisplayType: _.a.Vertical,
        })
      var oe = ne,
        ie = r('zh9S'),
        ce = r('Rp9C'),
        se = r('X04g')
      t.default = function (e) {
        var t = e.scrollerDisplayType
        return s.g({
          bindActions: function (e) {
            return {
              applyReactionInstructions: e.module.applyReactionInstructions,
              richScribeAction: u.richScribeAction,
              scribe: ie.c,
            }
          },
          component: oe,
          selectData: function (e) {
            e.entry
            var t = e.module
            return {
              canRefresh: function (e) {
                return t.selectCanRefresh(e)
              },
              dismissedEntries: function (e) {
                return t.selectDismissedEntries(e)
              },
            }
          },
          createProps: function (e) {
            var r,
              a = e.data,
              n = a.dismissedEntries,
              o = void 0 === n ? {} : n,
              i = a.canRefresh,
              c = e.entry,
              s = c.content.items,
              l = c.entryId,
              d = c.itemMetadata.moduleMetadata,
              u = e.scribeNamespace,
              m = e.actions,
              b = m.applyReactionInstructions,
              p = m.richScribeAction,
              y = m.scribe
            return {
              applyReactionInstructions: b,
              canRefresh: i,
              dismissedEntries: o,
              items: s || [],
              module: e.module,
              moduleEntryId: l,
              numRowsFromMetadata:
                t === _.a.GridCarousel
                  ? null == d || null === (r = d.gridCarouselMetadata) || void 0 === r
                    ? void 0
                    : r.numRows
                  : void 0,
              richScribeAction: p,
              scribeNamespace: u,
              scribe: y,
              scrollerDisplayType: t,
            }
          },
          onImpression: function (e) {
            var t = e.actions.scribe,
              r = e.entry.itemMetadata.clientEventInfo,
              a = e.scribeNamespace,
              n = ce.a.getAllSurfaceDetails(r),
              o = n ? { items: [c()({ item_type: se.a.ItemType.CAROUSEL }, n)] } : void 0
            t(c()(c()({}, a), {}, { action: 'impression' }), o)
          },
          isFocusable: Object(D.a)(!0),
          getBehavioralEventContextOverride: G.a,
        })
      }
    },
    BKvV: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return c
      })
      r('FtHn')
      var a = r('ERkP'),
        n = r.n(a),
        o = r('b1wW'),
        i = r('v6aA'),
        c = n.a.createContext(
          Object.create(
            i.c,
            Object.getOwnPropertyDescriptors({ numRowsFromMetadata: void 0, scrollerDisplayType: o.a.Carousel }),
          ),
        )
      t.b = c
    },
    yDHe: function (e, t, r) {
      'use strict'
      r('lTEL'), r('7x/C'), r('JtPf'), r('87if'), r('kYxP')
      var a = r('ERkP'),
        n = r.n(a),
        o = r('zb92'),
        i = r('RuTB'),
        c = r('rHpw').a.create(function (e) {
          return { root: { minHeight: 200 } }
        }),
        s = function (e) {
          var t = e.hasError,
            r = e.onRetry
          return n.a.createElement(i.a, { hasError: t, onRetry: r, style: c.root })
        },
        l = Object(o.a)({
          loader: function () {
            return r.e(172).then(r.bind(null, '6l+S'))
          },
          renderPlaceholder: function (e, t) {
            return n.a.createElement(s, { hasError: e, onRetry: t })
          },
        })
      t.a = l
    },
  },
])
//# sourceMappingURL=WIPED
