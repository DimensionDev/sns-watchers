;(window.webpackJsonp = window.webpackJsonp || []).push([
  [195],
  {
    '0xZH': function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'URTCarouselScroller', function () {
          return g
        })
      t('M+/F'), t('z84I')
      var r = t('ERkP'),
        a = t.n(r),
        i = t('BKvV'),
        o = t('b1wW'),
        u = t('7n04'),
        c = t('Irs7'),
        s = t('MWbm'),
        l = t('6iuV'),
        d = t('rHpw'),
        f = t('0zXz'),
        v = t('fs1G'),
        g = a.a.forwardRef(function (e, n) {
          e.assumedItemHeight
          var t = e.anchoring,
            r = (void 0 === t && u.a, e.identityFunction),
            d = e.items,
            g =
              (e.minimumOffscreenToViewportRatio,
              e.nearEndProximityRatio,
              e.nearStartProximityRatio,
              e.noItemsRenderer),
            p = void 0 === g ? f.a : g,
            b = (e.preferredOffscreenToViewportRatio, e.onAtEnd),
            R = (void 0 === b && v.a, e.onAtStart),
            w = (void 0 === R && v.a, e.onNearEnd),
            E = (void 0 === w && v.a, e.onNearStart),
            y = (void 0 === E && v.a, e.onPositionRestored),
            S = (void 0 === y && v.a, e.renderer),
            V = a.a.useContext(i.a),
            C = V.numRowsFromMetadata,
            x = V.scrollerDisplayType,
            k = void 0 === x ? o.a.Carousel : x,
            I = C || h(d.length, k),
            P = a.a.useRef(0),
            A = Object(c.b)()
          a.a.useImperativeHandle(n, function () {
            return {
              isAtNewest: function () {
                return !0
              },
              scrollToNewest: function () {
                return Object(v.a)()
              },
              adjustFocusBy: function (e) {
                return Object(v.a)()
              },
            }
          })
          var O = a.a.useMemo(
              function () {
                for (var e = [], n = 0, t = 0; n < d.length; n += I, t++) {
                  var i = d.slice(n, n + I),
                    o = a.a.createElement(
                      s.a,
                      { key: t },
                      i.map(function (e) {
                        return a.a.createElement(a.a.Fragment, { key: r(e) }, S(e))
                      }),
                    )
                  e.push(o)
                }
                return (P.current = e.length), e
              },
              [r, d, I, S],
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
          return d.length ? a.a.createElement(l.a, { onScroll: N, onVisibleRangeChange: M, style: m.root }, O) : p()
        }),
        h = function (e, n) {
          return n === o.a.GridCarousel && e >= 8 ? (e < 12 ? 2 : 3) : 1
        },
        m = d.a.create(function (e) {
          return { root: { marginHorizontal: e.spaces.space4, marginVertical: e.spaces.space4 } }
        })
      n.default = g
    },
    'DO1+': function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'PagedCarouselScroller', function () {
          return S
        })
      var r = t('ddV6'),
        a = t.n(r),
        i = (t('vfdX'), t('uFXj'), t('ERkP')),
        o = t.n(i),
        u = t('gZV8'),
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
        E = t('0zXz'),
        y = t('fs1G'),
        S = o.a.forwardRef(function (e, n) {
          e.assumedItemHeight
          var t = e.anchoring,
            r = (void 0 === t && f.a, e.identityFunction),
            i = e.items,
            s =
              (e.minimumOffscreenToViewportRatio,
              e.nearEndProximityRatio,
              e.nearStartProximityRatio,
              e.noItemsRenderer),
            S = void 0 === s ? E.a : s,
            C = (e.preferredOffscreenToViewportRatio, e.onAtEnd),
            x = (void 0 === C && y.a, e.onAtStart),
            k = (void 0 === x && y.a, e.onItemsRendered),
            I = void 0 === k ? y.a : k,
            P = e.onNearEnd,
            A = (void 0 === P && y.a, e.onNearStart),
            O = (void 0 === A && y.a, e.onPositionRestored),
            M = void 0 === O ? y.a : O,
            N = e.renderer,
            j = o.a.useRef(),
            H = Object(g.b)(),
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
            z = F[1],
            X = o.a.useRef(new R.a.Value(50)).current,
            _ = o.a.useRef({}).current,
            D = o.a.useRef({}),
            G = o.a.useRef(0),
            W = Object(v.b)(),
            J = Object(h.a)().width < m.a.theme.breakpoints.small,
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
                return Object(y.a)()
              },
              adjustFocusBy: function (e) {
                return Object(y.a)()
              },
            }
          }),
            o.a.useEffect(function () {
              var e = D.current[T]
              if (e) {
                var n = e.getBoundingClientRect().height
                X.setValue(n)
              }
              M(), U({ index: T, shouldSavePosition: !1 })
            }, [])
          var K = o.a.useMemo(
              function () {
                for (
                  var e = function (e) {
                      return function (n) {
                        n && (D.current[e] = n)
                      }
                    },
                    n = function (e) {
                      return (
                        (_[e] = new R.a.Value(0)),
                        {
                          opacity: _[e].interpolate({ inputRange: [0, 1], outputRange: [1, 0] }),
                          transform: [
                            { rotate: _[e].interpolate({ inputRange: [0, 1], outputRange: ['0deg', '-2deg'] }) },
                          ],
                        }
                      )
                    },
                    t = [],
                    a = p.a.reducedMotionEnabled ? w.a : R.a.View,
                    u = 0;
                  u < i.length;
                  u += 1
                ) {
                  var c = i[u],
                    s = p.a.reducedMotionEnabled ? void 0 : n(u),
                    l = o.a.createElement(
                      a,
                      { key: u, ref: e(u), style: s },
                      o.a.createElement(o.a.Fragment, { key: r(c) }, N(c)),
                    )
                  t.push(l)
                }
                return (G.current = t.length), t
              },
              [_, r, i, N],
            ),
            U = o.a.useCallback(
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
                I({ positions: [{ id: i[n].entryId, rectangle: r }], viewport: r }), t && Z(n)
              },
              [i, I, Z],
            ),
            Y = o.a.useCallback(
              function (e) {
                var n = e.index,
                  t = e.intersectionRatio
                n === G.current - 1 && t >= u.c && W.scribeAction('reached_end'),
                  n !== T && 1 === t && (z(n), U({ index: n, shouldSavePosition: !0 }))
              },
              [W, U, G, T],
            ),
            q = o.a.useCallback(
              function (e) {
                var n
                p.a.reducedMotionEnabled ||
                  R.a.spring(_[T], { toValue: 1, bounciness: 2 }).start(function () {
                    _[T].setValue(0)
                  }),
                  null === (n = j.current) || void 0 === n || n.handleNextSlide(e)
              },
              [_, j, T],
            ),
            L = o.a.useCallback(
              function (e) {
                var n = e.next,
                  t = e.previous
                t > n ? W.scribeAction('scroll_left') : t < n && W.scribeAction('scroll_right')
              },
              [W],
            )
          if (
            (o.a.useEffect(
              function () {
                var e = D.current[T]
                if (!p.a.reducedMotionEnabled && e) {
                  var n = e.getBoundingClientRect().height
                  X.setValue(n)
                }
              },
              [J, T, X],
            ),
            !i.length)
          )
            return S()
          var Q = o.a.createElement(
            c.a.Provider,
            { value: { handleNextSlide: q } },
            o.a.createElement(
              b.a,
              {
                childrenStyle: V.children,
                onScroll: L,
                onVisibleRangeChange: Y,
                ref: j,
                scrollToCenter: !0,
                style: p.a.reducedMotionEnabled ? V.root : V.rootInheritHeight,
                visibleItemIndex: T,
                withAddedNavButtonClickArea: !0,
              },
              K,
            ),
          )
          return p.a.reducedMotionEnabled ? Q : o.a.createElement(R.a.View, { style: [V.root, { height: X }] }, Q)
        }),
        V = m.a.create(function (e) {
          return {
            root: { marginHorizontal: e.spaces.space4, marginBottom: e.componentDimensions.gutterVertical },
            rootInheritHeight: { height: 'inherit' },
            children: { overflowY: 'hidden', scrollSnapAlign: 'center', scrollSnapStop: 'always', width: '100%' },
          }
        })
      n.default = S
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
