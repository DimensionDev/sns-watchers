;(window.webpackJsonp = window.webpackJsonp || []).push([
  [199],
  {
    '0ig/': function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return i
      })
      var r = t('i4Oy'),
        a = t('ERkP')
      function i() {
        var e = Object(a.useState)(function () {
            return r.a.get('window')
          }),
          n = e[0],
          t = e[1]
        return (
          Object(a.useEffect)(function () {
            function e(e) {
              var n = e.window
              null != n && t(n)
            }
            return (
              r.a.addEventListener('change', e),
              t(r.a.get('window')),
              function () {
                r.a.removeEventListener('change', e)
              }
            )
          }, []),
          n
        )
      }
    },
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
        d = t('6iuV'),
        l = t('rHpw'),
        f = t('0zXz'),
        v = t('fs1G'),
        g = a.a.forwardRef(function (e, n) {
          e.assumedItemHeight
          var t = e.anchoring,
            r = (void 0 === t && u.a, e.identityFunction),
            l = e.items,
            g =
              (e.minimumOffscreenToViewportRatio,
              e.nearEndProximityRatio,
              e.nearStartProximityRatio,
              e.noItemsRenderer),
            p = void 0 === g ? f.a : g,
            b = (e.preferredOffscreenToViewportRatio, e.onAtEnd),
            w = (void 0 === b && v.a, e.onAtStart),
            R = (void 0 === w && v.a, e.onNearEnd),
            E = (void 0 === R && v.a, e.onNearStart),
            y = (void 0 === E && v.a, e.onPositionRestored),
            S = (void 0 === y && v.a, e.renderer),
            V = a.a.useContext(i.a),
            C = V.numRowsFromMetadata,
            k = V.scrollerDisplayType,
            x = void 0 === k ? o.a.Carousel : k,
            I = C || h(l.length, x),
            O = a.a.useRef(0),
            P = Object(c.b)()
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
          var A = a.a.useMemo(
              function () {
                for (var e = [], n = 0, t = 0; n < l.length; n += I, t++) {
                  var i = l.slice(n, n + I),
                    o = a.a.createElement(
                      s.a,
                      { key: t },
                      i.map(function (e) {
                        return a.a.createElement(a.a.Fragment, { key: r(e) }, S(e))
                      }),
                    )
                  e.push(o)
                }
                return (O.current = e.length), e
              },
              [r, l, I, S],
            ),
            j = a.a.useCallback(
              function (e) {
                var n = e.index,
                  t = e.intersectionRatio
                n === O.current - 1 && 1 === t && P.scribeAction('reached_end')
              },
              [P, O],
            ),
            M = a.a.useCallback(
              function (e) {
                var n = e.next,
                  t = e.previous
                t > n ? P.scribeAction('scroll_left') : t < n && P.scribeAction('scroll_right')
              },
              [P],
            )
          return l.length ? a.a.createElement(d.a, { onScroll: M, onVisibleRangeChange: j, style: m.root }, A) : p()
        }),
        h = function (e, n) {
          return n === o.a.GridCarousel && e >= 8 ? (e < 12 ? 2 : 3) : 1
        },
        m = l.a.create(function (e) {
          return { root: { marginHorizontal: e.spaces.space4, marginVertical: e.spaces.space4 } }
        })
      n.default = g
    },
    'DO1+': function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'PagedCarouselScroller', function () {
          return V
        })
      var r = t('ddV6'),
        a = t.n(r),
        i = (t('vfdX'), t('uFXj'), t('ERkP')),
        o = t.n(i),
        u = t('gZV8'),
        c = t('X3+4'),
        s = t('7nmT'),
        d = t.n(s),
        l = t('c/W/'),
        f = t('7n04'),
        v = t('Irs7'),
        g = t('Fz18'),
        h = t('FGLp'),
        m = t('0ig/'),
        p = t('rHpw'),
        b = t('38/B'),
        w = t('6iuV'),
        R = t('WrBE'),
        E = t('MWbm'),
        y = t('0zXz'),
        S = t('fs1G'),
        V = o.a.forwardRef(function (e, n) {
          e.assumedItemHeight
          var t = e.anchoring,
            r = (void 0 === t && f.a, e.identityFunction),
            i = e.items,
            s =
              (e.minimumOffscreenToViewportRatio,
              e.nearEndProximityRatio,
              e.nearStartProximityRatio,
              e.noItemsRenderer),
            V = void 0 === s ? y.a : s,
            k = (e.preferredOffscreenToViewportRatio, e.onAtEnd),
            x = (void 0 === k && S.a, e.onAtStart),
            I = (void 0 === x && S.a, e.onItemsRendered),
            O = void 0 === I ? S.a : I,
            P = e.onNearEnd,
            A = (void 0 === P && S.a, e.onNearStart),
            j = (void 0 === A && S.a, e.onPositionRestored),
            M = void 0 === j ? S.a : j,
            N = e.renderer,
            F = o.a.useRef(),
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
            T = a()(B, 2),
            z = T[0],
            X = T[1],
            _ = o.a.useRef(new R.a.Value(50)).current,
            G = o.a.useRef({}).current,
            W = o.a.useRef({}),
            D = o.a.useRef(0),
            L = Object(v.b)(),
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
                return Object(S.a)()
              },
              adjustFocusBy: function (e) {
                return Object(S.a)()
              },
            }
          }),
            Object(h.a)(function () {
              var e = W.current[z]
              if (e) {
                var n = e.getBoundingClientRect().height
                _.setValue(n)
              }
              M(), U({ index: z, shouldSavePosition: !1 })
            })
          var K = o.a.useMemo(
              function () {
                for (
                  var e = function (e) {
                      return function (n) {
                        n && (W.current[e] = n)
                      }
                    },
                    n = function (e) {
                      return (
                        (G[e] = new R.a.Value(0)),
                        {
                          opacity: G[e].interpolate({ inputRange: [0, 1], outputRange: [1, 0] }),
                          transform: [
                            { rotate: G[e].interpolate({ inputRange: [0, 1], outputRange: ['0deg', '-2deg'] }) },
                          ],
                        }
                      )
                    },
                    t = [],
                    a = b.a.reducedMotionEnabled ? E.a : R.a.View,
                    u = 0;
                  u < i.length;
                  u += 1
                ) {
                  var c = i[u],
                    s = b.a.reducedMotionEnabled ? void 0 : n(u),
                    d = o.a.createElement(
                      a,
                      { key: u, ref: e(u), style: s },
                      o.a.createElement(o.a.Fragment, { key: r(c) }, N(c)),
                    )
                  t.push(d)
                }
                return (D.current = t.length), t
              },
              [G, r, i, N],
            ),
            U = o.a.useCallback(
              function (e) {
                var n = e.index,
                  t = e.shouldSavePosition,
                  r = (function (e) {
                    if (!e || !e.current) return new l.a(0, 0)
                    var n = d.a.findDOMNode(e.current).getBoundingClientRect(),
                      t = n.height,
                      r = n.top
                    return new l.a(r, t)
                  })(F)
                O({ positions: [{ id: i[n].entryId, rectangle: r }], viewport: r }), t && Z(n)
              },
              [i, O, Z],
            ),
            Y = o.a.useCallback(
              function (e) {
                var n = e.index,
                  t = e.intersectionRatio
                n === D.current - 1 && t >= u.c && L.scribeAction('reached_end'),
                  n !== z && 1 === t && (X(n), U({ index: n, shouldSavePosition: !0 }))
              },
              [L, U, D, z],
            ),
            q = o.a.useCallback(
              function (e) {
                var n
                b.a.reducedMotionEnabled ||
                  R.a.spring(G[z], { toValue: 1, bounciness: 2 }).start(function () {
                    G[z].setValue(0)
                  }),
                  null === (n = F.current) || void 0 === n || n.handleNextSlide(e)
              },
              [G, F, z],
            ),
            Q = o.a.useCallback(
              function (e) {
                var n = e.next,
                  t = e.previous
                t > n ? L.scribeAction('scroll_left') : t < n && L.scribeAction('scroll_right')
              },
              [L],
            )
          if (
            (o.a.useEffect(
              function () {
                var e = W.current[z]
                if (!b.a.reducedMotionEnabled && e) {
                  var n = e.getBoundingClientRect().height
                  _.setValue(n)
                }
              },
              [J, z, _],
            ),
            !i.length)
          )
            return V()
          var $ = o.a.createElement(
            c.a.Provider,
            { value: { handleNextSlide: q } },
            o.a.createElement(
              w.a,
              {
                childrenStyle: C.children,
                onScroll: Q,
                onVisibleRangeChange: Y,
                ref: F,
                scrollToCenter: !0,
                style: b.a.reducedMotionEnabled ? C.root : C.rootInheritHeight,
                visibleItemIndex: z,
                withAddedNavButtonClickArea: !0,
              },
              K,
            ),
          )
          return b.a.reducedMotionEnabled ? $ : o.a.createElement(R.a.View, { style: [C.root, { height: _ }] }, $)
        }),
        C = p.a.create(function (e) {
          return {
            root: { marginHorizontal: e.spaces.space4, marginBottom: e.componentDimensions.gutterVertical },
            rootInheritHeight: { height: 'inherit' },
            children: { overflowY: 'hidden', scrollSnapAlign: 'center', scrollSnapStop: 'always', width: '100%' },
          }
        })
      n.default = V
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
