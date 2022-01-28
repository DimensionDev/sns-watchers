;(window.webpackJsonp = window.webpackJsonp || []).push([
  [195],
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
        u = r.n(l),
        d = r('Fmkq'),
        p = (r('OZaJ'), r('VrFO')),
        f = r.n(p),
        b = r('Y9Ll'),
        y = r.n(b),
        m = r('5Yy7'),
        O = r.n(m),
        h = r('N+ot'),
        v = r.n(h),
        P = r('AuHH'),
        g = r.n(P),
        j = r('FIs5'),
        E = r('MDbM'),
        C = r('eXtP'),
        w = r('3XMw'),
        R = r.n(w),
        D = r('fs1G'),
        S = (r('JtPf'), r('7x/C'), r('87if'), r('lTEL'), r('kYxP'), r('zb92')),
        T = r('RuTB'),
        A = Object(S.a)({
          loader: function () {
            return Promise.all([r.e(0), r.e(194)]).then(r.bind(null, 'DO1+'))
          },
          renderPlaceholder: function (e, t) {
            return u.a.createElement(T.a, { hasError: e, onRetry: t })
          },
        }),
        I = r('BKvV'),
        k = r('b1wW'),
        F = r('Fz18'),
        M = r('JfS+'),
        K = Object(S.a)({
          loader: function () {
            return Promise.all([r.e(0), r.e(194)]).then(r.bind(null, '0xZH'))
          },
          renderPlaceholder: function (e, t) {
            return u.a.createElement(T.a, { hasError: e, onRetry: t })
          },
        }),
        L = r('v6aA'),
        B = r('rpbw'),
        x = r('XBtf'),
        H = {
          loader: function () {
            return r.e(221).then(r.bind(null, 'kh1t'))
          },
          loaderKey: 'feedbackItemLoader',
          strategy: x.a.Critical,
        },
        z = r('TEXq'),
        N = r('PlEh'),
        X = (r('yH/f'), Object.freeze({ PagedCarouselFeedbackItem: 'pagedCarouselFeedbackItem', Message: 'message' })),
        J = s.c({
          selectDisplayType: function (e) {
            return Object(z.a)(e.content.content) || ''
          },
          handlers:
            ((n = {}), i()(n, X.PagedCarouselFeedbackItem, H), i()(n, X.Message, Object(N.a)({ withGaps: !1 })), n),
        }),
        V = r('VPAj'),
        G = r('yDHe'),
        Y = s.d({
          render: function (e, t) {
            var r = e.content,
              n = r.dismissedEntry,
              a = r.feedbackKeys,
              o = t.module
            return u.a.createElement(G.a, { carousel: !0, entry: n, feedbackKeys: a, module: o })
          },
          shouldDisplayBorder: Object(V.a)(!1),
        }),
        W = Object.freeze({
          ScoreCard: 'scoreCard',
          Standard: 'standard',
          Broadcast: 'broadcast',
          CallToAction: 'callToAction',
        }),
        Z = {
          loader: function () {
            return r.e(233).then(r.bind(null, 'CdHO'))
          },
          loaderKey: 'standardHandlerLoader',
          strategy: x.a.Critical,
        },
        q = {
          loader: function () {
            return r.e(233).then(r.bind(null, 'vKPG'))
          },
          loaderKey: 'broadcastLoader',
          strategy: x.a.Critical,
        },
        U = {
          loader: function () {
            return r.e(233).then(r.bind(null, 'kthL'))
          },
          loaderKey: 'callToActionLoader',
          strategy: x.a.Critical,
        },
        _ = {
          loader: function () {
            return r.e(233).then(r.bind(null, 'FYbo'))
          },
          loaderKey: 'scoreCardLoader',
          strategy: x.a.Critical,
        },
        Q = s.c({
          selectDisplayType: function (e) {
            return Object(z.a)(e.content.content) || ''
          },
          handlers:
            ((a = {}),
            i()(a, W.Standard, Z),
            i()(a, W.ScoreCard, _),
            i()(a, W.Broadcast, q),
            i()(a, W.CallToAction, U),
            a),
        }),
        $ = r('67iF'),
        ee = r('8UdT'),
        te =
          ((o = {}),
          i()(o, ee.b.PagedCarouselItem, J),
          i()(o, ee.b.Tile, Q),
          i()(o, ee.b.Topic, Object($.a)({})),
          i()(o, ee.b.TwitterList, Object(B.a)({})),
          o),
        re = i()({}, ee.a.Tombstone, s.e(Y)),
        ne = te
      function ae(e, t) {
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
      function oe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ae(Object(r), !0).forEach(function (t) {
                i()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ae(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      function ce(e) {
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
            n = g()(e)
          if (t) {
            var a = g()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return v()(this, r)
        }
      }
      var ie = D.a,
        se = R.a.afb4c24a,
        le = (function (e) {
          O()(r, e)
          var t = ce(r)
          function r() {
            return f()(this, r), t.apply(this, arguments)
          }
          return (
            y()(r, [
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
                    l = e.richScribeAction,
                    d = e.scribe,
                    p = e.scribeNamespace,
                    f = e.scrollerDisplayType
                  return u.a.createElement(
                    I.b.Provider,
                    { value: oe({ numRowsFromMetadata: i, scrollerDisplayType: f }, this.context) },
                    u.a.createElement(
                      C.a,
                      { additionalConfiguration: re, dismissedEntries: n, entries: a, entryConfiguration: ne },
                      function (e, n) {
                        return u.a.createElement(
                          F.a,
                          { identifier: c },
                          u.a.createElement(M.a, {
                            applyReactionInstructions: t,
                            canRefresh: r,
                            clearActiveCover: D.a,
                            entries: n,
                            handlerRegistry: e,
                            initialFetchStatus: E.a.LOADED,
                            module: o,
                            onAtTop: D.a,
                            onRef: D.a,
                            processCallback: ie,
                            refreshControl: null,
                            removeAlert: D.a,
                            renderEmptyState: s,
                            richScribeAction: l,
                            scribeAction: d,
                            scribeNamespace: p,
                            scroller: f === k.a.PagedCarousel ? A : K,
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
        })(u.a.PureComponent)
      i()(le, 'contextType', L.a),
        i()(le, 'defaultProps', {
          renderEmptyState: function () {
            return u.a.createElement(j.a, { message: se })
          },
          scrollerDisplayType: k.a.Vertical,
        })
      var ue = le,
        de = r('zh9S'),
        pe = r('Rp9C'),
        fe = r('X04g')
      function be(e, t) {
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
      function ye(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? be(Object(r), !0).forEach(function (t) {
                i()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : be(Object(r)).forEach(function (t) {
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
              richScribeAction: d.richScribeAction,
              scribe: de.c,
            }
          },
          component: ue,
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
                t === k.a.GridCarousel
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
              a = pe.a.getAllSurfaceDetails(r),
              o = a ? { items: [ye({ item_type: fe.a.ItemType.CAROUSEL }, a)] } : void 0
            t(ye(ye({}, n), {}, { action: 'impression' }), o)
          },
          isFocusable: Object(V.a)(!0),
          getBehavioralEventContextOverride: D.a,
        })
      }
    },
    BKvV: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return i
      })
      r('FtHn')
      var n = r('ERkP'),
        a = r.n(n),
        o = r('b1wW'),
        c = r('v6aA'),
        i = a.a.createContext(
          Object.create(
            c.c,
            Object.getOwnPropertyDescriptors({ numRowsFromMetadata: void 0, scrollerDisplayType: o.a.Carousel }),
          ),
        )
      t.b = i
    },
  },
])
//# sourceMappingURL=WIPED
