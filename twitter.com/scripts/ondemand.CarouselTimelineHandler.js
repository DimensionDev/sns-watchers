;(window.webpackJsonp = window.webpackJsonp || []).push([
  [199],
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
        p = r.n(m),
        b = r('Y9Ll'),
        y = r.n(b),
        f = r('5Yy7'),
        h = r.n(f),
        C = r('2VqO'),
        v = r.n(C),
        E = r('KEM+'),
        P = r.n(E),
        R = r('rpbw'),
        T = (r('lTEL'), r('7x/C'), r('JtPf'), r('87if'), r('kYxP'), r('XBtf')),
        g = {
          loader: function () {
            return Promise.all([r.e(0), r.e(3), r.e(228)]).then(r.bind(null, 'kh1t'))
          },
          loaderKey: 'feedbackItemLoader',
          strategy: T.a.Critical,
        },
        A = r('TEXq'),
        I = r('PlEh'),
        O = (r('yH/f'), Object.freeze({ PagedCarouselFeedbackItem: 'pagedCarouselFeedbackItem', Message: 'message' })),
        w = s.c({
          selectDisplayType: function (e) {
            return Object(A.a)(e.content.content) || ''
          },
          handlers:
            ((a = {}), P()(a, O.PagedCarouselFeedbackItem, g), P()(a, O.Message, Object(I.a)({ withGaps: !1 })), a),
        }),
        S = {
          loader: function () {
            return r.e(235).then(r.bind(null, 'Itzz'))
          },
          loaderKey: 'carouselTombstoneLoader',
          strategy: T.a.Critical,
        },
        F = s.e(S),
        D = Object.freeze({
          ScoreCard: 'scoreCard',
          Standard: 'standard',
          Broadcast: 'broadcast',
          CallToAction: 'callToAction',
        }),
        k = {
          loader: function () {
            return Promise.all([r.e(0), r.e(4), r.e(242)]).then(r.bind(null, 'CdHO'))
          },
          loaderKey: 'standardHandlerLoader',
          strategy: T.a.Critical,
        },
        M = {
          loader: function () {
            return Promise.all([r.e(0), r.e(4), r.e(242)]).then(r.bind(null, 'vKPG'))
          },
          loaderKey: 'broadcastLoader',
          strategy: T.a.Critical,
        },
        j = {
          loader: function () {
            return Promise.all([r.e(0), r.e(4), r.e(242)]).then(r.bind(null, 'kthL'))
          },
          loaderKey: 'callToActionLoader',
          strategy: T.a.Critical,
        },
        K = {
          loader: function () {
            return Promise.all([r.e(0), r.e(4), r.e(242)]).then(r.bind(null, 'FYbo'))
          },
          loaderKey: 'scoreCardLoader',
          strategy: T.a.Critical,
        },
        L = s.c({
          selectDisplayType: function (e) {
            return Object(A.a)(e.content.content) || ''
          },
          handlers:
            ((n = {}),
            P()(n, D.Standard, k),
            P()(n, D.ScoreCard, K),
            P()(n, D.Broadcast, M),
            P()(n, D.CallToAction, j),
            n),
        }),
        z = r('67iF'),
        x = r('8UdT'),
        B =
          ((o = {}),
          P()(o, x.b.PagedCarouselItem, w),
          P()(o, x.b.Tile, L),
          P()(o, x.b.Topic, Object(z.a)({})),
          P()(o, x.b.TwitterList, Object(R.a)({})),
          P()(o, x.a.Tombstone, F),
          o),
        V = r('FIs5'),
        H = r('MDbM'),
        X = r('eXtP'),
        G = r('3XMw'),
        J = r.n(G),
        Y = r('fs1G'),
        q = r('zb92'),
        U = r('RuTB'),
        W = Object(q.a)({
          loader: function () {
            return Promise.all([r.e(0), r.e(198)]).then(r.bind(null, 'DO1+'))
          },
          renderPlaceholder: function (e, t) {
            return d.a.createElement(U.a, { hasError: e, onRetry: t })
          },
        }),
        N = r('BKvV'),
        Z = r('b1wW'),
        _ = r('Fz18'),
        Q = r('JfS+'),
        $ = Object(q.a)({
          loader: function () {
            return Promise.all([r.e(0), r.e(198)]).then(r.bind(null, '0xZH'))
          },
          renderPlaceholder: function (e, t) {
            return d.a.createElement(U.a, { hasError: e, onRetry: t })
          },
        }),
        ee = r('v6aA'),
        te = Y.a,
        re = J.a.afb4c24a,
        ae = (function (e) {
          h()(r, e)
          var t = v()(r)
          function r() {
            return p()(this, r), t.apply(this, arguments)
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
                    m = e.scrollerDisplayType
                  return d.a.createElement(
                    N.b.Provider,
                    { value: c()({ numRowsFromMetadata: s, scrollerDisplayType: m }, this.context) },
                    d.a.createElement(X.a, { dismissedEntries: a, entries: n, entryConfiguration: B }, function (e, a) {
                      return d.a.createElement(
                        _.a,
                        { identifier: i },
                        d.a.createElement(Q.a, {
                          applyReactionInstructions: t,
                          canRefresh: r,
                          clearActiveCover: Y.a,
                          entries: a,
                          handlerRegistry: e,
                          initialFetchStatus: H.a.LOADED,
                          module: o,
                          onAtTop: Y.a,
                          onRef: Y.a,
                          processCallback: te,
                          refreshControl: null,
                          removeAlert: Y.a,
                          renderEmptyState: l,
                          richScribeAction: u,
                          scroller: m === Z.a.PagedCarousel ? W : $,
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
      P()(ae, 'contextType', ee.a),
        P()(ae, 'defaultProps', {
          renderEmptyState: function () {
            return d.a.createElement(V.a, { message: re })
          },
          scrollerDisplayType: Z.a.Vertical,
        })
      var ne = ae,
        oe = r('zh9S'),
        ie = r('Rp9C'),
        ce = r('X04g'),
        se = r('VPAj')
      t.default = function (e) {
        var t = e.scrollerDisplayType
        return s.g({
          bindActions: function (e) {
            return {
              applyReactionInstructions: e.module.applyReactionInstructions,
              richScribeAction: u.richScribeAction,
              scribe: oe.c,
            }
          },
          component: ne,
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
              u = e.actions,
              m = u.applyReactionInstructions,
              p = u.richScribeAction
            return {
              applyReactionInstructions: m,
              canRefresh: i,
              dismissedEntries: o,
              items: s || [],
              module: e.module,
              moduleEntryId: l,
              numRowsFromMetadata:
                t === Z.a.GridCarousel
                  ? null == d || null === (r = d.gridCarouselMetadata) || void 0 === r
                    ? void 0
                    : r.numRows
                  : void 0,
              richScribeAction: p,
              scrollerDisplayType: t,
            }
          },
          onImpression: function (e) {
            var t = e.actions.scribe,
              r = e.entry.itemMetadata.clientEventInfo,
              a = e.scribeNamespace,
              n = ie.a.getAllSurfaceDetails(r),
              o = n ? { items: [c()({ item_type: ce.a.ItemType.CAROUSEL }, n)] } : void 0
            t(c()(c()({}, a), {}, { action: 'impression' }), o)
          },
          isFocusable: Object(se.a)(!0),
          getBehavioralEventContextOverride: Y.a,
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
  },
])
//# sourceMappingURL=WIPED
