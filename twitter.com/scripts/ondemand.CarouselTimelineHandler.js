;(window.webpackJsonp = window.webpackJsonp || []).push([
  [196],
  {
    '+93b': function (e, t, r) {
      'use strict'
      r.r(t)
      var a,
        n,
        i,
        o = r('yiKp'),
        c = r.n(o),
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
        C = r('2VqO'),
        E = r.n(C),
        v = r('KEM+'),
        R = r.n(v),
        g = r('FIs5'),
        T = r('MDbM'),
        A = r('eXtP'),
        O = r('3XMw'),
        P = r.n(O),
        w = r('fs1G'),
        I = (r('lTEL'), r('7x/C'), r('JtPf'), r('87if'), r('kYxP'), r('zb92')),
        S = r('RuTB'),
        D = Object(I.a)({
          loader: function () {
            return Promise.all([r.e(0), r.e(195)]).then(r.bind(null, 'DO1+'))
          },
          renderPlaceholder: function (e, t) {
            return d.a.createElement(S.a, { hasError: e, onRetry: t })
          },
        }),
        F = r('BKvV'),
        k = r('b1wW'),
        j = r('Fz18'),
        M = r('JfS+'),
        K = Object(I.a)({
          loader: function () {
            return Promise.all([r.e(0), r.e(195)]).then(r.bind(null, '0xZH'))
          },
          renderPlaceholder: function (e, t) {
            return d.a.createElement(S.a, { hasError: e, onRetry: t })
          },
        }),
        L = r('v6aA'),
        B = r('rpbw'),
        x = r('XBtf'),
        z = {
          loader: function () {
            return r.e(222).then(r.bind(null, 'kh1t'))
          },
          loaderKey: 'feedbackItemLoader',
          strategy: x.a.Critical,
        },
        H = r('TEXq'),
        V = r('PlEh'),
        N = (r('yH/f'), Object.freeze({ PagedCarouselFeedbackItem: 'pagedCarouselFeedbackItem', Message: 'message' })),
        X = s.c({
          selectDisplayType: function (e) {
            return Object(H.a)(e.content.content) || ''
          },
          handlers:
            ((a = {}), R()(a, N.PagedCarouselFeedbackItem, z), R()(a, N.Message, Object(V.a)({ withGaps: !1 })), a),
        }),
        G = r('VPAj'),
        J = r('yDHe'),
        Y = s.d({
          render: function (e, t) {
            var r = e.content,
              a = r.dismissedEntry,
              n = r.feedbackKeys,
              i = t.module
            return d.a.createElement(J.a, { carousel: !0, entry: a, feedbackKeys: n, module: i })
          },
          shouldDisplayBorder: Object(G.a)(!1),
        }),
        q = Object.freeze({
          ScoreCard: 'scoreCard',
          Standard: 'standard',
          Broadcast: 'broadcast',
          CallToAction: 'callToAction',
        }),
        U = {
          loader: function () {
            return r.e(234).then(r.bind(null, 'CdHO'))
          },
          loaderKey: 'standardHandlerLoader',
          strategy: x.a.Critical,
        },
        W = {
          loader: function () {
            return r.e(234).then(r.bind(null, 'vKPG'))
          },
          loaderKey: 'broadcastLoader',
          strategy: x.a.Critical,
        },
        Z = {
          loader: function () {
            return r.e(234).then(r.bind(null, 'kthL'))
          },
          loaderKey: 'callToActionLoader',
          strategy: x.a.Critical,
        },
        _ = {
          loader: function () {
            return r.e(234).then(r.bind(null, 'FYbo'))
          },
          loaderKey: 'scoreCardLoader',
          strategy: x.a.Critical,
        },
        Q = s.c({
          selectDisplayType: function (e) {
            return Object(H.a)(e.content.content) || ''
          },
          handlers:
            ((n = {}),
            R()(n, q.Standard, U),
            R()(n, q.ScoreCard, _),
            R()(n, q.Broadcast, W),
            R()(n, q.CallToAction, Z),
            n),
        }),
        $ = r('67iF'),
        ee = r('8UdT'),
        te =
          ((i = {}),
          R()(i, ee.b.PagedCarouselItem, X),
          R()(i, ee.b.Tile, Q),
          R()(i, ee.b.Topic, Object($.a)({})),
          R()(i, ee.b.TwitterList, Object(B.a)({})),
          i),
        re = R()({}, ee.a.Tombstone, s.e(Y)),
        ae = te,
        ne = w.a,
        ie = P.a.afb4c24a,
        oe = (function (e) {
          h()(r, e)
          var t = E()(r)
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
                    i = e.module,
                    o = e.moduleEntryId,
                    s = e.numRowsFromMetadata,
                    l = e.renderEmptyState,
                    u = e.richScribeAction,
                    m = e.scribe,
                    b = e.scribeNamespace,
                    p = e.scrollerDisplayType
                  return d.a.createElement(
                    F.b.Provider,
                    { value: c()({ numRowsFromMetadata: s, scrollerDisplayType: p }, this.context) },
                    d.a.createElement(
                      A.a,
                      { additionalConfiguration: re, dismissedEntries: a, entries: n, entryConfiguration: ae },
                      function (e, a) {
                        return d.a.createElement(
                          j.a,
                          { identifier: o },
                          d.a.createElement(M.a, {
                            applyReactionInstructions: t,
                            canRefresh: r,
                            clearActiveCover: w.a,
                            entries: a,
                            handlerRegistry: e,
                            initialFetchStatus: T.a.LOADED,
                            module: i,
                            onAtTop: w.a,
                            onRef: w.a,
                            processCallback: ne,
                            refreshControl: null,
                            removeAlert: w.a,
                            renderEmptyState: l,
                            richScribeAction: u,
                            scribeAction: m,
                            scribeNamespace: b,
                            scroller: p === k.a.PagedCarousel ? D : K,
                            timelineId: o,
                            title: 'Carousel',
                            withKeyboardShortcuts: !1,
                          }),
                        )
                      },
                    ),
                  )
                },
              },
            ]),
            r
          )
        })(d.a.PureComponent)
      R()(oe, 'contextType', L.a),
        R()(oe, 'defaultProps', {
          renderEmptyState: function () {
            return d.a.createElement(g.a, { message: ie })
          },
          scrollerDisplayType: k.a.Vertical,
        })
      var ce = oe,
        se = r('zh9S'),
        le = r('Rp9C'),
        de = r('X04g')
      t.default = function (e) {
        var t = e.scrollerDisplayType
        return s.g({
          bindActions: function (e) {
            return {
              applyReactionInstructions: e.module.applyReactionInstructions,
              richScribeAction: u.richScribeAction,
              scribe: se.c,
            }
          },
          component: ce,
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
              i = void 0 === n ? {} : n,
              o = a.canRefresh,
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
              canRefresh: o,
              dismissedEntries: i,
              items: s || [],
              module: e.module,
              moduleEntryId: l,
              numRowsFromMetadata:
                t === k.a.GridCarousel
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
              n = le.a.getAllSurfaceDetails(r),
              i = n ? { items: [c()({ item_type: de.a.ItemType.CAROUSEL }, n)] } : void 0
            t(c()(c()({}, a), {}, { action: 'impression' }), i)
          },
          isFocusable: Object(G.a)(!0),
          getBehavioralEventContextOverride: w.a,
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
        i = r('b1wW'),
        o = r('v6aA'),
        c = n.a.createContext(
          Object.create(
            o.c,
            Object.getOwnPropertyDescriptors({ numRowsFromMetadata: void 0, scrollerDisplayType: i.a.Carousel }),
          ),
        )
      t.b = c
    },
  },
])
//# sourceMappingURL=WIPED
