;(window.webpackJsonp = window.webpackJsonp || []).push([
  [192],
  {
    '+93b': function (e, t, r) {
      'use strict'
      r.r(t)
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n,
        a,
        o,
        c = r('KEM+'),
        i = r.n(c),
        s = r('ezF+'),
        l = r('ERkP'),
        u = r('Fmkq'),
        d = (r('OZaJ'), r('VrFO')),
        p = r.n(d),
        f = r('Y9Ll'),
        b = r.n(f),
        y = r('5Yy7'),
        m = r.n(y),
        O = r('N+ot'),
        h = r.n(O),
        v = r('AuHH'),
        P = r.n(v),
        g = r('FIs5'),
        j = r('MDbM'),
        E = r('eXtP'),
        C = r('3XMw'),
        w = r.n(C),
        R = r('fs1G'),
        D = (r('JtPf'), r('7x/C'), r('87if'), r('lTEL'), r('kYxP'), r('zb92')),
        S = r('RuTB'),
        T = Object(D.a)({
          loader: function () {
            return Promise.all([r.e(0), r.e(191)]).then(r.bind(null, 'DO1+'))
          },
          renderPlaceholder: function (e, t) {
            return l.createElement(S.a, { hasError: e, onRetry: t })
          },
        }),
        A = r('BKvV'),
        I = r('b1wW'),
        k = r('Fz18'),
        F = r('JfS+'),
        M = Object(D.a)({
          loader: function () {
            return Promise.all([r.e(0), r.e(191)]).then(r.bind(null, '0xZH'))
          },
          renderPlaceholder: function (e, t) {
            return l.createElement(S.a, { hasError: e, onRetry: t })
          },
        }),
        K = r('v6aA'),
        L = r('rpbw'),
        B = r('XBtf'),
        x = {
          loader: function () {
            return r.e(214).then(r.bind(null, 'kh1t'))
          },
          loaderKey: 'feedbackItemLoader',
          strategy: B.a.Critical,
        },
        H = r('TEXq'),
        z = r('PlEh'),
        N = (r('yH/f'), Object.freeze({ PagedCarouselFeedbackItem: 'pagedCarouselFeedbackItem', Message: 'message' })),
        X = s.c({
          selectDisplayType: function (e) {
            return Object(H.a)(e.content.content) || ''
          },
          handlers:
            ((n = {}), i()(n, N.PagedCarouselFeedbackItem, x), i()(n, N.Message, Object(z.a)({ withGaps: !1 })), n),
        }),
        J = r('VPAj'),
        V = r('yDHe'),
        G = s.d({
          render: function (e, t) {
            var r = e.content,
              n = r.dismissedEntry,
              a = r.feedbackKeys,
              o = t.module
            return l.createElement(V.a, { carousel: !0, entry: n, feedbackKeys: a, module: o })
          },
          shouldDisplayBorder: Object(J.a)(!1),
        }),
        Y = Object.freeze({
          ScoreCard: 'scoreCard',
          Standard: 'standard',
          Broadcast: 'broadcast',
          CallToAction: 'callToAction',
        }),
        W = {
          loader: function () {
            return r.e(224).then(r.bind(null, 'CdHO'))
          },
          loaderKey: 'standardHandlerLoader',
          strategy: B.a.Critical,
        },
        Z = {
          loader: function () {
            return r.e(224).then(r.bind(null, 'vKPG'))
          },
          loaderKey: 'broadcastLoader',
          strategy: B.a.Critical,
        },
        q = {
          loader: function () {
            return r.e(224).then(r.bind(null, 'kthL'))
          },
          loaderKey: 'callToActionLoader',
          strategy: B.a.Critical,
        },
        U = {
          loader: function () {
            return r.e(224).then(r.bind(null, 'FYbo'))
          },
          loaderKey: 'scoreCardLoader',
          strategy: B.a.Critical,
        },
        _ = s.c({
          selectDisplayType: function (e) {
            return Object(H.a)(e.content.content) || ''
          },
          handlers:
            ((a = {}),
            i()(a, Y.Standard, W),
            i()(a, Y.ScoreCard, U),
            i()(a, Y.Broadcast, Z),
            i()(a, Y.CallToAction, q),
            a),
        }),
        Q = r('67iF'),
        $ = r('8UdT'),
        ee =
          ((o = {}),
          i()(o, $.b.PagedCarouselItem, X),
          i()(o, $.b.Tile, _),
          i()(o, $.b.Topic, Object(Q.a)({})),
          i()(o, $.b.TwitterList, Object(L.a)({})),
          o),
        te = i()({}, $.a.Tombstone, s.e(G)),
        re = ee
      function ne(e, t) {
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
      function ae(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ne(Object(r), !0).forEach(function (t) {
                i()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ne(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      function oe(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var r,
            n = P()(e)
          if (t) {
            var a = P()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return h()(this, r)
        }
      }
      var ce = R.a,
        ie = w.a.afb4c24a,
        se = (function (e) {
          m()(r, e)
          var t = oe(r)
          function r() {
            return p()(this, r), t.apply(this, arguments)
          }
          return (
            b()(r, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.applyReactionInstructions,
                    r = e.canRefresh,
                    n = e.dismissedEntries,
                    a = e.items,
                    o = e.module,
                    c = e.moduleEntryId,
                    i = e.numRowsFromMetadata,
                    s = e.renderEmptyState,
                    u = e.richScribeAction,
                    d = e.scribe,
                    p = e.scribeNamespace,
                    f = e.scrollerDisplayType
                  return l.createElement(
                    A.b.Provider,
                    { value: ae({ numRowsFromMetadata: i, scrollerDisplayType: f }, this.context) },
                    l.createElement(
                      E.a,
                      { additionalConfiguration: te, dismissedEntries: n, entries: a, entryConfiguration: re },
                      function (e, n) {
                        return l.createElement(
                          k.a,
                          { identifier: c },
                          l.createElement(F.a, {
                            applyReactionInstructions: t,
                            canRefresh: r,
                            clearActiveCover: R.a,
                            entries: n,
                            handlerRegistry: e,
                            initialFetchStatus: j.a.LOADED,
                            module: o,
                            onAtTop: R.a,
                            onRef: R.a,
                            processCallback: ce,
                            refreshControl: null,
                            removeAlert: R.a,
                            renderEmptyState: s,
                            richScribeAction: u,
                            scribeAction: d,
                            scribeNamespace: p,
                            scroller: f === I.a.PagedCarousel ? T : M,
                            timelineId: c,
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
        })(l.PureComponent)
      i()(se, 'contextType', K.a),
        i()(se, 'defaultProps', {
          renderEmptyState: function () {
            return l.createElement(g.a, { message: ie })
          },
          scrollerDisplayType: I.a.Vertical,
        })
      var le = se,
        ue = r('zh9S'),
        de = r('Rp9C'),
        pe = r('X04g')
      function fe(e, t) {
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
      function be(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? fe(Object(r), !0).forEach(function (t) {
                i()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : fe(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      t.default = function (e) {
        var t = e.scrollerDisplayType
        return s.g({
          bindActions: function (e) {
            return {
              applyReactionInstructions: e.module.applyReactionInstructions,
              richScribeAction: u.richScribeAction,
              scribe: ue.c,
            }
          },
          component: le,
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
              n = e.data,
              a = n.dismissedEntries,
              o = void 0 === a ? {} : a,
              c = n.canRefresh,
              i = e.entry,
              s = i.content.items,
              l = i.entryId,
              u = i.itemMetadata.moduleMetadata,
              d = e.scribeNamespace,
              p = e.actions,
              f = p.applyReactionInstructions,
              b = p.richScribeAction,
              y = p.scribe
            return {
              applyReactionInstructions: f,
              canRefresh: c,
              dismissedEntries: o,
              items: s || [],
              module: e.module,
              moduleEntryId: l,
              numRowsFromMetadata:
                t === I.a.GridCarousel
                  ? null == u || null === (r = u.gridCarouselMetadata) || void 0 === r
                    ? void 0
                    : r.numRows
                  : void 0,
              richScribeAction: b,
              scribeNamespace: d,
              scribe: y,
              scrollerDisplayType: t,
            }
          },
          onImpression: function (e) {
            var t = e.actions.scribe,
              r = e.entry.itemMetadata.clientEventInfo,
              n = e.scribeNamespace,
              a = de.a.getAllSurfaceDetails(r),
              o = a ? { items: [be({ item_type: pe.a.ItemType.CAROUSEL }, a)] } : void 0
            t(be(be({}, n), {}, { action: 'impression' }), o)
          },
          isFocusable: Object(J.a)(!0),
          getBehavioralEventContextOverride: R.a,
        })
      }
    },
    BKvV: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return c
      })
      r('FtHn')
      var n = r('ERkP'),
        a = r('b1wW'),
        o = r('v6aA'),
        c = n.createContext(
          Object.create(
            o.c,
            Object.getOwnPropertyDescriptors({ numRowsFromMetadata: void 0, scrollerDisplayType: a.a.Carousel }),
          ),
        )
      t.b = c
    },
  },
])
//# sourceMappingURL=WIPED
