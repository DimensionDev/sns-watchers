;(window.webpackJsonp = window.webpackJsonp || []).push([
  [194],
  {
    '0xZH': function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'URTCarouselScroller', function () {
          return v
        })
      t('M+/F'), t('z84I')
      var r = t('ERkP'),
        a = t.n(r),
        i = t('fs1G'),
        o = t('BKvV'),
        u = t('b1wW'),
        c = t('7n04'),
        s = t('Irs7'),
        l = t('MWbm'),
        d = t('6iuV'),
        f = t('rHpw'),
        v = a.a.forwardRef(function (e, n) {
          e.assumedItemHeight
          var t = e.anchoring,
            r = (void 0 === t && c.a, e.identityFunction),
            f = e.items,
            v =
              (e.minimumOffscreenToViewportRatio,
              e.nearEndProximityRatio,
              e.nearStartProximityRatio,
              e.noItemsRenderer),
            p = void 0 === v ? g : v,
            b = (e.preferredOffscreenToViewportRatio, e.onAtEnd),
            R = (void 0 === b && i.a, e.onAtStart),
            w = (void 0 === R && i.a, e.onNearEnd),
            E = (void 0 === w && i.a, e.onNearStart),
            y = (void 0 === E && i.a, e.onPositionRestored),
            S = (void 0 === y && i.a, e.renderer),
            V = a.a.useContext(o.a),
            C = V.numRowsFromMetadata,
            x = V.scrollerDisplayType,
            k = void 0 === x ? u.a.Carousel : x,
            I = C || h(f.length, k),
            P = a.a.useRef(0),
            A = Object(s.b)()
          a.a.useImperativeHandle(n, function () {
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
          var O = a.a.useMemo(
              function () {
                for (var e = [], n = 0, t = 0; n < f.length; n += I, t++) {
                  var i = f.slice(n, n + I),
                    o = a.a.createElement(
                      l.a,
                      { key: t },
                      i.map(function (e) {
                        return a.a.createElement(a.a.Fragment, { key: r(e) }, S(e))
                      }),
                    )
                  e.push(o)
                }
                return (P.current = e.length), e
              },
              [r, f, I, S],
            ),
            M = a.a.useCallback(
              function (e) {
                var n = e.index,
                  t = e.intersectionRatio
                n === P.current - 1 && 1 === t && A.scribeAction('reached_end')
              },
              [A, P],
            ),
            N = a.a.useCallback(
              function (e) {
                var n = e.next,
                  t = e.previous
                t > n ? A.scribeAction('scroll_left') : t < n && A.scribeAction('scroll_right')
              },
              [A],
            )
          return f.length ? a.a.createElement(d.a, { onScroll: N, onVisibleRangeChange: M, style: m.root }, O) : p()
        }),
        g = function () {
          return null
        },
        h = function (e, n) {
          return n === u.a.GridCarousel && e >= 8 ? (e < 12 ? 2 : 3) : 1
        },
        m = f.a.create(function (e) {
          return { root: { marginHorizontal: e.spaces.space4, marginVertical: e.spaces.space4 } }
        })
      n.default = v
    },
    'DO1+': function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'PagedCarouselScroller', function () {
          return y
        })
      var r = t('ddV6'),
        a = t.n(r),
        i = (t('vfdX'), t('uFXj'), t('ERkP')),
        o = t.n(i),
        u = t('gZV8'),
        c = t('fs1G'),
        s = t('X3+4'),
        l = t('7nmT'),
        d = t.n(l),
        f = t('Resy'),
        v = t('7n04'),
        g = t('Irs7'),
        h = t('Fz18'),
        m = t('0ig/'),
        p = t('rHpw'),
        b = t('38/B'),
        R = t('6iuV'),
        w = t('WrBE'),
        E = t('MWbm'),
        y = o.a.forwardRef(function (e, n) {
          e.assumedItemHeight
          var t = e.anchoring,
            r = (void 0 === t && v.a, e.identityFunction),
            i = e.items,
            l =
              (e.minimumOffscreenToViewportRatio,
              e.nearEndProximityRatio,
              e.nearStartProximityRatio,
              e.noItemsRenderer),
            y = void 0 === l ? S : l,
            C = (e.preferredOffscreenToViewportRatio, e.onAtEnd),
            x = (void 0 === C && c.a, e.onAtStart),
            k = (void 0 === x && c.a, e.onItemsRendered),
            I = void 0 === k ? c.a : k,
            P = e.onNearEnd,
            A = (void 0 === P && c.a, e.onNearStart),
            O = (void 0 === A && c.a, e.onPositionRestored),
            M = void 0 === O ? c.a : O,
            N = e.renderer,
            j = o.a.useRef(),
            H = Object(h.b)(),
            B = o.a.useState(function () {
              var e = H.getSavedPosition()
              if (null == e || !e.length) return 0
              var n = e[0].id,
                t = i.findIndex(function (e) {
                  return e.entryId === n
                })
              return t > -1 ? t : 0
            }),
            F = a()(B, 2),
            T = F[0],
            _ = F[1],
            z = o.a.useRef(new w.a.Value(50)).current,
            D = o.a.useRef({}).current,
            G = o.a.useRef({}),
            W = o.a.useRef(0),
            X = Object(g.b)(),
            J = Object(m.a)().width < p.a.theme.breakpoints.small,
            Z = o.a.useCallback(
              function (e) {
                var n,
                  t = null === (n = i[e]) || void 0 === n ? void 0 : n.entryId
                t && H.savePosition([{ id: t }])
              },
              [H, i],
            )
          o.a.useImperativeHandle(n, function () {
            return {
              isAtNewest: function () {
                return !0
              },
              scrollToNewest: function () {
                return Object(c.a)()
              },
              adjustFocusBy: function (e) {
                return Object(c.a)()
              },
            }
          }),
            o.a.useEffect(function () {
              var e = G.current[T]
              if (e) {
                var n = e.getBoundingClientRect().height
                z.setValue(n)
              }
              M(), U({ index: T, shouldSavePosition: !1 })
            }, [])
          var K = o.a.useMemo(
              function () {
                for (
                  var e = function (e) {
                      return function (n) {
                        n && (G.current[e] = n)
                      }
                    },
                    n = function (e) {
                      return (
                        (D[e] = new w.a.Value(0)),
                        {
                          opacity: D[e].interpolate({ inputRange: [0, 1], outputRange: [1, 0] }),
                          transform: [
                            { rotate: D[e].interpolate({ inputRange: [0, 1], outputRange: ['0deg', '-2deg'] }) },
                          ],
                        }
                      )
                    },
                    t = [],
                    a = b.a.reducedMotionEnabled ? E.a : w.a.View,
                    u = 0;
                  u < i.length;
                  u += 1
                ) {
                  var c = i[u],
                    s = b.a.reducedMotionEnabled ? void 0 : n(u),
                    l = o.a.createElement(
                      a,
                      { key: u, ref: e(u), style: s },
                      o.a.createElement(o.a.Fragment, { key: r(c) }, N(c)),
                    )
                  t.push(l)
                }
                return (W.current = t.length), t
              },
              [D, r, i, N],
            ),
            U = o.a.useCallback(
              function (e) {
                var n = e.index,
                  t = e.shouldSavePosition,
                  r = (function (e) {
                    if (!e || !e.current) return new f.a(0, 0)
                    var n = d.a.findDOMNode(e.current).getBoundingClientRect(),
                      t = n.height,
                      r = n.top
                    return new f.a(r, t)
                  })(j)
                I({ positions: [{ id: i[n].entryId, rectangle: r }], viewport: r }), t && Z(n)
              },
              [i, I, Z],
            ),
            Y = o.a.useCallback(
              function (e) {
                var n = e.index,
                  t = e.intersectionRatio
                n === W.current - 1 && t >= u.c && X.scribeAction('reached_end'),
                  n !== T && 1 === t && (_(n), U({ index: n, shouldSavePosition: !0 }))
              },
              [X, U, W, T],
            ),
            q = o.a.useCallback(
              function (e) {
                var n
                b.a.reducedMotionEnabled ||
                  w.a.spring(D[T], { toValue: 1, bounciness: 2 }).start(function () {
                    D[T].setValue(0)
                  }),
                  null === (n = j.current) || void 0 === n || n.handleNextSlide(e)
              },
              [D, j, T],
            ),
            L = o.a.useCallback(
              function (e) {
                var n = e.next,
                  t = e.previous
                t > n ? X.scribeAction('scroll_left') : t < n && X.scribeAction('scroll_right')
              },
              [X],
            )
          if (
            (o.a.useEffect(
              function () {
                var e = G.current[T]
                if (!b.a.reducedMotionEnabled && e) {
                  var n = e.getBoundingClientRect().height
                  z.setValue(n)
                }
              },
              [J, T],
            ),
            !i.length)
          )
            return y()
          var Q = o.a.createElement(
            s.a.Provider,
            { value: { handleNextSlide: q } },
            o.a.createElement(
              R.a,
              {
                childrenStyle: V.children,
                onScroll: L,
                onVisibleRangeChange: Y,
                ref: j,
                scrollToCenter: !0,
                style: b.a.reducedMotionEnabled ? V.root : V.rootInheritHeight,
                visibleItemIndex: T,
                withAddedNavButtonClickArea: !0,
              },
              K,
            ),
          )
          return b.a.reducedMotionEnabled ? Q : o.a.createElement(w.a.View, { style: [V.root, { height: z }] }, Q)
        }),
        S = function () {
          return null
        },
        V = p.a.create(function (e) {
          return {
            root: { marginHorizontal: e.spaces.space4, marginBottom: e.componentDimensions.gutterVertical },
            rootInheritHeight: { height: 'inherit' },
            children: { overflowY: 'hidden', scrollSnapAlign: 'center', scrollSnapStop: 'always', width: '100%' },
          }
        })
      n.default = y
    },
    'X3+4': function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return o
      })
      var r = t('ERkP'),
        a = t.n(r),
        i = t('fs1G'),
        o = a.a.createContext({ handleNextSlide: i.a })
    },
  },
])
//# sourceMappingURL=WIPED
