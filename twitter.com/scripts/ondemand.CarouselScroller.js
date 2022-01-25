;(window.webpackJsonp = window.webpackJsonp || []).push([
  [191],
  {
    '0xZH': function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'URTCarouselScroller', function () {
          return f
        })
      t('M+/F'), t('z84I')
      var r = t('ERkP'),
        i = t('fs1G'),
        o = t('BKvV'),
        a = t('b1wW'),
        u = t('7n04'),
        c = t('Irs7'),
        s = t('MWbm'),
        l = t('6iuV'),
        d = t('rHpw'),
        f = r.forwardRef(function (e, n) {
          e.assumedItemHeight
          var t = e.anchoring,
            d = (void 0 === t && u.a, e.identityFunction),
            f = e.items,
            m =
              (e.minimumOffscreenToViewportRatio,
              e.nearEndProximityRatio,
              e.nearStartProximityRatio,
              e.noItemsRenderer),
            p = void 0 === m ? v : m,
            b = (e.preferredOffscreenToViewportRatio, e.onAtEnd),
            R = (void 0 === b && i.a, e.onAtStart),
            w = (void 0 === R && i.a, e.onNearEnd),
            E = (void 0 === w && i.a, e.onNearStart),
            y = (void 0 === E && i.a, e.onPositionRestored),
            S = (void 0 === y && i.a, e.renderer),
            V = r.useContext(o.a),
            C = V.numRowsFromMetadata,
            x = V.scrollerDisplayType,
            k = void 0 === x ? a.a.Carousel : x,
            I = C || g(f.length, k),
            P = r.useRef(0),
            A = Object(c.b)()
          r.useImperativeHandle(n, function () {
            return {
              isAtNewest: function () {
                return !0
              },
              scrollToNewest: function () {
                return Object(i.a)()
              },
              adjustFocusBy: function (e) {
                return Object(i.a)()
              },
            }
          })
          var O = r.useMemo(
              function () {
                for (var e = [], n = 0, t = 0; n < f.length; n += I, t++) {
                  var i = f.slice(n, n + I),
                    o = r.createElement(
                      s.a,
                      { key: t },
                      i.map(function (e) {
                        return r.createElement(r.Fragment, { key: d(e) }, S(e))
                      }),
                    )
                  e.push(o)
                }
                return (P.current = e.length), e
              },
              [d, f, I, S],
            ),
            M = r.useCallback(
              function (e) {
                var n = e.index,
                  t = e.intersectionRatio
                n === P.current - 1 && 1 === t && A.scribeAction('reached_end')
              },
              [A, P],
            ),
            N = r.useCallback(
              function (e) {
                var n = e.next,
                  t = e.previous
                t > n ? A.scribeAction('scroll_left') : t < n && A.scribeAction('scroll_right')
              },
              [A],
            )
          return f.length ? r.createElement(l.a, { onScroll: N, onVisibleRangeChange: M, style: h.root }, O) : p()
        }),
        v = function () {
          return null
        },
        g = function (e, n) {
          return n === a.a.GridCarousel && e >= 8 ? (e < 12 ? 2 : 3) : 1
        },
        h = d.a.create(function (e) {
          return { root: { marginHorizontal: e.spaces.space4, marginVertical: e.spaces.space4 } }
        })
      n.default = f
    },
    'DO1+': function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'PagedCarouselScroller', function () {
          return E
        })
      var r = t('ddV6'),
        i = t.n(r),
        o = (t('vfdX'), t('uFXj'), t('ERkP')),
        a = t('gZV8'),
        u = t('fs1G'),
        c = t('X3+4'),
        s = t('7nmT'),
        l = t.n(s),
        d = t('Resy'),
        f = t('7n04'),
        v = t('Irs7'),
        g = t('Fz18'),
        h = t('0ig/'),
        m = t('rHpw'),
        p = t('38/B'),
        b = t('6iuV'),
        R = t('WrBE'),
        w = t('MWbm'),
        E = o.forwardRef(function (e, n) {
          e.assumedItemHeight
          var t = e.anchoring,
            r = (void 0 === t && f.a, e.identityFunction),
            s = e.items,
            E =
              (e.minimumOffscreenToViewportRatio,
              e.nearEndProximityRatio,
              e.nearStartProximityRatio,
              e.noItemsRenderer),
            V = void 0 === E ? y : E,
            C = (e.preferredOffscreenToViewportRatio, e.onAtEnd),
            x = (void 0 === C && u.a, e.onAtStart),
            k = (void 0 === x && u.a, e.onItemsRendered),
            I = void 0 === k ? u.a : k,
            P = e.onNearEnd,
            A = (void 0 === P && u.a, e.onNearStart),
            O = (void 0 === A && u.a, e.onPositionRestored),
            M = void 0 === O ? u.a : O,
            N = e.renderer,
            j = o.useRef(),
            H = Object(g.b)(),
            B = o.useState(function () {
              var e = H.getSavedPosition()
              if (null == e || !e.length) return 0
              var n = e[0].id,
                t = s.findIndex(function (e) {
                  return e.entryId === n
                })
              return t > -1 ? t : 0
            }),
            F = i()(B, 2),
            T = F[0],
            _ = F[1],
            z = o.useRef(new R.a.Value(50)).current,
            D = o.useRef({}).current,
            G = o.useRef({}),
            W = o.useRef(0),
            X = Object(v.b)(),
            J = Object(h.a)().width < m.a.theme.breakpoints.small,
            Z = o.useCallback(
              function (e) {
                var n,
                  t = null === (n = s[e]) || void 0 === n ? void 0 : n.entryId
                t && H.savePosition([{ id: t }])
              },
              [H, s],
            )
          o.useImperativeHandle(n, function () {
            return {
              isAtNewest: function () {
                return !0
              },
              scrollToNewest: function () {
                return Object(u.a)()
              },
              adjustFocusBy: function (e) {
                return Object(u.a)()
              },
            }
          }),
            o.useEffect(function () {
              var e = G.current[T]
              if (e) {
                var n = e.getBoundingClientRect().height
                z.setValue(n)
              }
              M(), U({ index: T, shouldSavePosition: !1 })
            }, [])
          var K = o.useMemo(
              function () {
                for (
                  var e = function (e) {
                      return function (n) {
                        n && (G.current[e] = n)
                      }
                    },
                    n = function (e) {
                      return (
                        (D[e] = new R.a.Value(0)),
                        {
                          opacity: D[e].interpolate({ inputRange: [0, 1], outputRange: [1, 0] }),
                          transform: [
                            { rotate: D[e].interpolate({ inputRange: [0, 1], outputRange: ['0deg', '-2deg'] }) },
                          ],
                        }
                      )
                    },
                    t = [],
                    i = p.a.reducedMotionEnabled ? w.a : R.a.View,
                    a = 0;
                  a < s.length;
                  a += 1
                ) {
                  var u = s[a],
                    c = p.a.reducedMotionEnabled ? void 0 : n(a),
                    l = o.createElement(
                      i,
                      { key: a, ref: e(a), style: c },
                      o.createElement(o.Fragment, { key: r(u) }, N(u)),
                    )
                  t.push(l)
                }
                return (W.current = t.length), t
              },
              [D, r, s, N],
            ),
            U = o.useCallback(
              function (e) {
                var n = e.index,
                  t = e.shouldSavePosition,
                  r = (function (e) {
                    if (!e || !e.current) return new d.a(0, 0)
                    var n = l.a.findDOMNode(e.current).getBoundingClientRect(),
                      t = n.height,
                      r = n.top
                    return new d.a(r, t)
                  })(j)
                I({ positions: [{ id: s[n].entryId, rectangle: r }], viewport: r }), t && Z(n)
              },
              [s, I, Z],
            ),
            Y = o.useCallback(
              function (e) {
                var n = e.index,
                  t = e.intersectionRatio
                n === W.current - 1 && t >= a.c && X.scribeAction('reached_end'),
                  n !== T && 1 === t && (_(n), U({ index: n, shouldSavePosition: !0 }))
              },
              [X, U, W, T],
            ),
            q = o.useCallback(
              function (e) {
                var n
                p.a.reducedMotionEnabled ||
                  R.a.spring(D[T], { toValue: 1, bounciness: 2 }).start(function () {
                    D[T].setValue(0)
                  }),
                  null === (n = j.current) || void 0 === n || n.handleNextSlide(e)
              },
              [D, j, T],
            ),
            L = o.useCallback(
              function (e) {
                var n = e.next,
                  t = e.previous
                t > n ? X.scribeAction('scroll_left') : t < n && X.scribeAction('scroll_right')
              },
              [X],
            )
          if (
            (o.useEffect(
              function () {
                var e = G.current[T]
                if (!p.a.reducedMotionEnabled && e) {
                  var n = e.getBoundingClientRect().height
                  z.setValue(n)
                }
              },
              [J, T],
            ),
            !s.length)
          )
            return V()
          var Q = o.createElement(
            c.a.Provider,
            { value: { handleNextSlide: q } },
            o.createElement(
              b.a,
              {
                childrenStyle: S.children,
                onScroll: L,
                onVisibleRangeChange: Y,
                ref: j,
                scrollToCenter: !0,
                style: p.a.reducedMotionEnabled ? S.root : S.rootInheritHeight,
                visibleItemIndex: T,
                withAddedNavButtonClickArea: !0,
              },
              K,
            ),
          )
          return p.a.reducedMotionEnabled ? Q : o.createElement(R.a.View, { style: [S.root, { height: z }] }, Q)
        }),
        y = function () {
          return null
        },
        S = m.a.create(function (e) {
          return {
            root: { marginHorizontal: e.spaces.space4, marginBottom: e.componentDimensions.gutterVertical },
            rootInheritHeight: { height: 'inherit' },
            children: { overflowY: 'hidden', scrollSnapAlign: 'center', scrollSnapStop: 'always', width: '100%' },
          }
        })
      n.default = E
    },
    'X3+4': function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return o
      })
      var r = t('ERkP'),
        i = t('fs1G'),
        o = r.createContext({ handleNextSlide: i.a })
    },
  },
])
//# sourceMappingURL=WIPED
