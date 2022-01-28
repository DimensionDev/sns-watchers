;(window.webpackJsonp = window.webpackJsonp || []).push([
  [160],
  {
    '+0pD': function (e, t) {
      var n =
        '[object Arguments]' ==
        (function () {
          return Object.prototype.toString.call(arguments)
        })()
      function r(e) {
        return '[object Arguments]' == Object.prototype.toString.call(e)
      }
      function i(e) {
        return (
          (e &&
            'object' == typeof e &&
            'number' == typeof e.length &&
            Object.prototype.hasOwnProperty.call(e, 'callee') &&
            !Object.prototype.propertyIsEnumerable.call(e, 'callee')) ||
          !1
        )
      }
      ;((t = e.exports = n ? r : i).supported = r), (t.unsupported = i)
    },
    '06eB': function (e, t, n) {
      var r = Array.prototype.slice,
        i = n('kgfz'),
        o = n('+0pD'),
        a = (e.exports = function (e, t, n) {
          return (
            n || (n = {}),
            e === t ||
              (e instanceof Date && t instanceof Date
                ? e.getTime() === t.getTime()
                : !e || !t || ('object' != typeof e && 'object' != typeof t)
                ? n.strict
                  ? e === t
                  : e == t
                : (function (e, t, n) {
                    var u, d
                    if (s(e) || s(t)) return !1
                    if (e.prototype !== t.prototype) return !1
                    if (o(e)) return !!o(t) && ((e = r.call(e)), (t = r.call(t)), a(e, t, n))
                    if (c(e)) {
                      if (!c(t)) return !1
                      if (e.length !== t.length) return !1
                      for (u = 0; u < e.length; u++) if (e[u] !== t[u]) return !1
                      return !0
                    }
                    try {
                      var l = i(e),
                        h = i(t)
                    } catch (f) {
                      return !1
                    }
                    if (l.length != h.length) return !1
                    for (l.sort(), h.sort(), u = l.length - 1; u >= 0; u--) if (l[u] != h[u]) return !1
                    for (u = l.length - 1; u >= 0; u--) if (((d = l[u]), !a(e[d], t[d], n))) return !1
                    return typeof e == typeof t
                  })(e, t, n))
          )
        })
      function s(e) {
        return null == e
      }
      function c(e) {
        return (
          !(!e || 'object' != typeof e || 'number' != typeof e.length) &&
          'function' == typeof e.copy &&
          'function' == typeof e.slice &&
          !(e.length > 0 && 'number' != typeof e[0])
        )
      }
    },
    '3AAD': function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        i = n.n(r)
      function o(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? o(Object(n), !0).forEach(function (t) {
                i()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : o(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var s = a(a({}, n('7n04').a), {}, { pinToNewestWhenAtNewest: !0 })
      t.a = s
    },
    '64vW': function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        i = n.n(r).a.createContext({ heightsReady: !0 })
      t.a = i
    },
    FwSR: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'resetIsModalScrollerRendered', function () {
          return je
        }),
        n.d(t, 'default', function () {
          return xe
        })
      n('OZaJ')
      var r = n('RhWx'),
        i = n.n(r),
        o = n('VrFO'),
        a = n.n(o),
        s = n('Y9Ll'),
        c = n.n(s),
        u = n('1Pcy'),
        d = n.n(u),
        l = n('5Yy7'),
        h = n.n(l),
        f = n('N+ot'),
        p = n.n(f),
        m = n('AuHH'),
        _ = n.n(m),
        g = n('KEM+'),
        v = n.n(g),
        I = (n('z84I'), n('XygZ'), n('hBpG'), n('5BYb'), n('ERkP')),
        w = n.n(I),
        y = (function () {
          function e(t, n, r, i, o) {
            a()(this, e),
              (this.id = t),
              (this._renderer = r),
              (this.canBeAnchor = i),
              (this.data = n),
              (this.sortIndex = o)
          }
          return (
            c()(e, [
              {
                key: 'render',
                value: function (e) {
                  return (0, this._renderer)(this.data, e)
                },
              },
            ]),
            e
          )
        })(),
        b = function (e, t, n, r) {
          var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : '-1'
          return new y(e, t, n, r, i)
        },
        R = (n('yH/f'), Object.freeze({ FocusedItem: 'focusedItem', Anchor: 'anchor' })),
        O = function (e) {
          return { anchor: e, type: R.Anchor }
        },
        A = function (e) {
          return { itemId: e, type: R.FocusedItem }
        },
        H = n('OrGc'),
        T = n('hACr'),
        S = n('7N4s'),
        P = n('3AAD'),
        E = n('oi7R'),
        F = n('JD1h'),
        j = n('aWzz'),
        x = n('oQhu'),
        C = n('+d3d'),
        N = n('fs1G'),
        B =
          (n('m9LP'),
          n('7x/C'),
          n('87if'),
          n('lTEL'),
          n('kYxP'),
          n('LqLs'),
          n('jwue'),
          n('+oxZ'),
          n('vfdX'),
          n('LW0h'),
          n('vrRf'),
          n('M+/F'),
          n('KOtZ'),
          n('zrc3')),
        M = n('7nmT'),
        V = n.n(M),
        L = function (e) {
          var t
          return null ===
            (t = e.find(function (e) {
              return e.focusable
            })) || void 0 === t
            ? void 0
            : t.id
        },
        k = n('dPJJ'),
        D = n('E6XO'),
        U = n('jHwr'),
        z = (function () {
          function e(t) {
            var n = t.listLength,
              r = t.listRect,
              i = t.renderedItems,
              o = t.viewportRect
            a()(this, e),
              (this._viewportRect = o),
              (this._listRect = r),
              (this._listLength = n),
              (this._renderedItems = i)
          }
          return (
            c()(e, [
              {
                key: 'getForList',
                value: function () {
                  return this._listRect
                },
              },
              {
                key: 'getForViewport',
                value: function () {
                  return this._viewportRect
                },
              },
              {
                key: 'getListLength',
                value: function () {
                  return this._listLength
                },
              },
              {
                key: 'getRenderedItems',
                value: function () {
                  return this._renderedItems
                },
              },
            ]),
            e
          )
        })(),
        W = n('64vW'),
        K = n('Resy'),
        Y = (function () {
          function e(t, n, r, i) {
            var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0
            a()(this, e),
              (this.itemId = t),
              (this.offset = n),
              (this.visible = r),
              (this.canBeAnchor = i),
              (this.height = o)
          }
          return (
            c()(e, [
              {
                key: 'getRectInViewport',
                value: function () {
                  return new K.a(this.offset, this.height)
                },
              },
            ]),
            e
          )
        })(),
        J = n('z0MJ'),
        q = n.n(J),
        Z = n('pQ3Z'),
        X = n.n(Z),
        G = n('iBK2'),
        Q = n('gbD7'),
        $ = n('aITJ'),
        ee = n('Irs7'),
        te = n('v6aA'),
        ne = (n('+KXO'), n('1t7P'), n('daRM'), n('FtHn'), n('ddV6')),
        re = n.n(ne),
        ie = n('38/B'),
        oe = n('06eB'),
        ae = n.n(oe),
        se = n('mN6z'),
        ce = w.a.createContext({
          onAnimationStarted: function () {},
          onAnimationEnded: function () {},
          onHeightChanged: function () {},
        })
      function ue(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function de(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ue(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ue(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function le(e) {
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
          var n,
            r = _()(e)
          if (t) {
            var i = _()(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var he = function () {
          return window.performance ? window.performance.now() : Date.now()
        },
        fe = 'transform 0.15s linear',
        pe = (function (e) {
          h()(n, e)
          var t = le(n)
          function n(e, r) {
            var i
            a()(this, n),
              (i = t.call(this, e, r)),
              v()(d()(i), '_contentsFocusable', !1),
              v()(d()(i), '_perfReported', !1),
              v()(d()(i), '_shouldAnimateTranslate', !1),
              v()(d()(i), '_observeElement', function (e) {
                var t = i._resizeObserver
                t && (t.disconnect(), t.observe(e))
              }),
              v()(d()(i), '_handleResize', function (e) {
                var t = i.props,
                  n = t.item,
                  r = t.onHeightChanged,
                  o = re()(e, 1)[0],
                  a = (o && Math.floor(o.contentRect.height)) !== (i._currentHeight && Math.floor(i._currentHeight))
                o && a && ((i._currentHeight = o.contentRect.height), r(n.id, o.contentRect.height)), i._recordTTFV()
              }),
              v()(d()(i), '_setRef', function (e) {
                var t = i.props,
                  n = t.item,
                  r = t.setAPI
                e ? ((i._element = e), r(n.id, d()(i)), i._observeElement(e)) : (r(n.id, void 0), (i._element = void 0))
              }),
              v()(d()(i), '_setIsItemFocusable', function (e) {
                i._contentsFocusable = e
              }),
              v()(d()(i), '_handleAnimationStarted', function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fe
                i._resizeObserver && i._resizeObserver.disconnect(),
                  i.props.onAnimationStarted(i.props.item.id, e),
                  i._animationTTLTimeoutId && clearTimeout(i._animationTTLTimeoutId),
                  (i._animationTTLTimeoutId = setTimeout(i._handleAnimationEnded, 1e3))
              }),
              v()(d()(i), '_handleAnimationEnded', function () {
                i._animationTTLTimeoutId && (clearTimeout(i._animationTTLTimeoutId), (i._animationTTLTimeoutId = null)),
                  i._element && i._observeElement(i._element),
                  i.props.onAnimationEnded(i.props.item.id)
              }),
              v()(d()(i), '_handleHeightChanged', function (e) {
                ;(i._currentHeight = e), i.props.onHeightChanged(i.props.item.id, e)
              })
            var o = $.b.isSafari() ? window.PolyfillResizeObserver : window.ResizeObserver
            return (
              (i._resizeObserver = new o(i._handleResize)),
              (i._animationContext = {
                onAnimationEnded: i._handleAnimationEnded,
                onAnimationStarted: i._handleAnimationStarted,
                onHeightChanged: i._handleHeightChanged,
              }),
              (i._perfStart = he()),
              i
            )
          }
          return (
            c()(n, [
              {
                key: 'shouldComponentUpdate',
                value: function (e) {
                  var t = this.props,
                    n = t.item,
                    r = t.positioningStyle,
                    i = t.shouldAnimate,
                    o = t.visible,
                    a = !Object(se.a)(e.positioningStyle, r)
                  return (
                    (this._shouldAnimateTranslate = a && e.visible === o),
                    !ae()(e.item, n) || a || e.visible !== o || e.shouldAnimate !== i
                  )
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._animationTTLTimeoutId &&
                    (clearTimeout(this._animationTTLTimeoutId), this.props.onAnimationEnded(this.props.item.id)),
                    this._resizeObserver && this._resizeObserver.disconnect(),
                    (this._resizeObserver = void 0)
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t = this.props,
                    n = t.item,
                    r = t.setAPI
                  e.item.id !== n.id && (r(e.item.id, void 0), r(n.id, this)), this._recordTTFV()
                },
              },
              {
                key: 'getElement',
                value: function () {
                  return this._element
                },
              },
              {
                key: 'isFocusable',
                value: function () {
                  return this._contentsFocusable
                },
              },
              {
                key: 'measureHeight',
                value: function () {
                  return (
                    this._currentHeight ||
                      (this._currentHeight = this._element ? this._element.getBoundingClientRect().height : 0),
                    this._currentHeight
                  )
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.item,
                    n = e.shouldAnimate,
                    r = e.translationTransitionStyle,
                    i = e.visible,
                    o = this._shouldAnimateTranslate && !ie.a.reducedMotionEnabled ? r : 'opacity 0.3s ease-out',
                    a = de(
                      de({}, this.props.positioningStyle),
                      {},
                      {
                        position: 'absolute',
                        opacity: i ? void 0 : 0.01,
                        width: '100%',
                        transition: n && !this._isAnimationDisabled ? o : void 0,
                      },
                    )
                  return w.a.createElement(
                    ce.Provider,
                    { value: this._animationContext },
                    w.a.createElement('div', { ref: this._setRef, style: a }, t.render(this._setIsItemFocusable)),
                  )
                },
              },
              {
                key: '_recordTTFV',
                value: function () {
                  var e = this.props,
                    t = e.item,
                    n = e.onVisible,
                    r = e.visible
                  void 0 !== this._currentHeight &&
                    !this._perfReported &&
                    r &&
                    (n(t.id, he() - this._perfStart), (this._perfReported = !0))
                },
              },
            ]),
            n
          )
        })(w.a.Component)
      v()(pe, 'contextType', te.a), v()(pe, 'defaultProps', { translationTransitionStyle: fe })
      var me = n('VY6S'),
        _e = n('Qyxo'),
        ge = n('qdp+'),
        ve = n('/NU0'),
        Ie = n('6vUc'),
        we = n('jat/'),
        ye = n('xN10'),
        be = n('Myq3')
      function Re(e) {
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
          var n,
            r = _()(e)
          if (t) {
            var i = _()(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var Oe = {},
        Ae = function (e) {
          var t = e.cssPixels,
            n = e.dpr
          return Math.ceil(t * n) / n
        },
        He = (function (e) {
          h()(n, e)
          var t = Re(n)
          function n(e, r) {
            var i
            a()(this, n),
              (i = t.call(this, e, r)),
              v()(d()(i), '_areAnchorsInvalidated', !1),
              v()(d()(i), '_cells', new Map()),
              v()(d()(i), '_cellAnimations', new Set()),
              v()(d()(i), '_cellAnimationStyle', fe),
              v()(d()(i), '_currentHeadroom', 0),
              v()(d()(i), '_isFullScreened', !1),
              v()(d()(i), '_isIdle', !0),
              v()(d()(i), '_pendingHeightUpdates', new Map()),
              v()(d()(i), '_previousScrollPosition', 0),
              v()(d()(i), '_renderedItemsStatus', new Set()),
              v()(d()(i), '_rootRef', w.a.createRef()),
              v()(d()(i), '_slice', { start: 0, end: 0 }),
              v()(d()(i), '_shouldScribeNextScroll', !0),
              v()(d()(i), '_visibilityMeasurements', new Map()),
              v()(d()(i), '_handleScroll', function () {
                ;(i._wasPreviouslyAtNewestEnd = i.isAtNewest()),
                  i._isInitialAnchoring ||
                    i._viewport.scrollY() < 0 ||
                    ((i._isIdle = !1), i._updateScrollEnd(), i._scheduleCriticalUpdateThrottled())
              }),
              v()(
                d()(i),
                '_updateScrollEnd',
                Object(me.a)(function () {
                  var e = i.props,
                    t = e.analytics,
                    n = e.onScrollEnd,
                    r = i._viewport.scrollY() - i._previousScrollPosition
                  ;(i._previousScrollPosition = i._viewport.scrollY()),
                    i._shouldScribeNextScroll &&
                      Math.abs(r) > 100 &&
                      t.scribe({ action: 'scroll', data: { event_value: r } }),
                    (i._shouldScribeNextScroll = !0),
                    (i._isIdle = !0),
                    n(),
                    i._scheduleCriticalUpdate()
                }, 200),
              ),
              v()(d()(i), '_handleProgrammaticScroll', function () {
                i._shouldScribeNextScroll = !1
              }),
              v()(d()(i), '_handleEnterFullscreen', function () {
                i._isFullScreened = !0
              }),
              v()(d()(i), '_handleExitFullscreen', function () {
                ;(i._isFullScreened = !1), i._scheduleCriticalUpdate()
              }),
              v()(
                d()(i),
                '_getPositioningContext',
                Object(x.a)(function (e) {
                  return { heightsReady: e }
                }),
              ),
              v()(
                d()(i),
                '_getFinalRenderedItemsMemoized',
                Object(x.a)(function (e, t) {
                  var n = i._getItemMapMemoized(e)
                  return Object(_e.a)(t, function (e) {
                    var t = n.get(e.itemId)
                    return t && { item: t, offset: e.offset, visible: e.visible }
                  })
                }),
              ),
              v()(
                d()(i),
                '_getItemMapMemoized',
                Object(x.a)(function (e) {
                  var t = new Map()
                  return (
                    e.forEach(function (e) {
                      t.set(e.id, e)
                    }),
                    t
                  )
                }),
              ),
              v()(d()(i), '_getInitialRenderedItems', function () {
                var e = i.props,
                  t = e.initialAnchor,
                  n = e.list,
                  r = []
                if (!t) return r
                if (t.type === R.FocusedItem) {
                  var o = Object(ge.a)(n, function (e) {
                    return e.id === t.itemId ? new Y(e.id, 0, !0, e.canBeAnchor) : void 0
                  })
                  o && r.push(o)
                } else if (t.type === R.Anchor && Object(ve.a)(t.anchor.distanceToViewportTop)) {
                  for (
                    var a = t.anchor,
                      s = i._getDocumentViewportHeight(),
                      c = a.distanceToViewportTop || 0,
                      u = n.findIndex(function (e) {
                        return e.id === a.id
                      }),
                      d = c,
                      l = u;
                    l > -1 && l < n.length && d < s;

                  ) {
                    var h = n[l],
                      f = i._heights.get(h.id)
                    if (!Object(ve.a)(f)) break
                    r.push(new Y(h.id, d, !0, h.canBeAnchor)), (d += f), (l += 1)
                  }
                  for (d = c, l = u - 1; l > -1 && d > 0; ) {
                    var p = n[l],
                      m = i._heights.get(p.id)
                    if (!Object(ve.a)(m)) break
                    ;(d -= m), r.unshift(new Y(p.id, d, !0, p.canBeAnchor)), (l -= 1)
                  }
                }
                return r
              }),
              v()(d()(i), '_getViewportOffsetCorrection', function () {
                var e = i._rootRef.current && i._rootRef.current.getBoundingClientRect()
                if (!e || !i._viewport) return 0
                var t = i._viewport instanceof E.a ? 0 : i._viewport.getRect().getTop()
                return Ae({ cssPixels: e.top - t, dpr: i._devicePixelRatio })
              }),
              v()(d()(i), 'getAnchors', function () {
                var e = i._rootRef.current && i._rootRef.current.getBoundingClientRect(),
                  t = i._measureRelativeViewportRect()
                return e && t
                  ? i
                      ._getItemsWithin(t)
                      .filter(function (e) {
                        return e.item.canBeAnchor
                      })
                      .map(function (e) {
                        return {
                          id: e.item.id,
                          distanceToViewportTop: Ae({
                            cssPixels: e.offset + i._getViewportOffsetCorrection(),
                            dpr: i._devicePixelRatio,
                          }),
                          wasFocused: i._hasUserChangedFocus && e.item.id === i._activeEntryId,
                        }
                      })
                  : []
              }),
              v()(d()(i), '_update', function () {
                var e = i._measureRelativeViewportRect()
                if (e && !i._isFullScreened) {
                  var t = i._getAnchor(e)
                  i._measureHeights(), t && (i._updateRenderedItems(t, e), (i._areAnchorsInvalidated = !1))
                }
              }),
              v()(d()(i), '_getItemsWithPositions', function (e) {
                var t = i.props.list,
                  n = i._getDistanceFromTop(e.itemId),
                  r = e.offset - n,
                  o = []
                return (
                  t.forEach(function (e) {
                    var t = i._getHeight(e)
                    o.push(new Y(e.id, r, i._heights.has(e.id), e.canBeAnchor, t)), (r += t)
                  }),
                  o
                )
              }),
              v()(d()(i), '_getSliceForCandidates', function (e, t) {
                var n = Object(Ie.a)(e),
                  r = Object(we.a)(e)
                return { start: n ? t.indexOf(n) : 0, end: r ? t.indexOf(r) + 1 : 0 }
              }),
              v()(d()(i), '_getRenderCandidates', function (e, t) {
                var n = i.props,
                  r = n.minimumOffscreenToViewportRatio,
                  o = n.preferredOffscreenToViewportRatio,
                  a = Ee(t, r),
                  s = Ee(t, o),
                  c = i._isIdle && !i._isInitialAnchoring,
                  u = i._getItemsWithPositions(e),
                  d = u.filter(function (e) {
                    return i._getRenderedItemRectInViewport(e).doesIntersectWith(c ? s : a)
                  }),
                  l = i._getSliceForCandidates(d, u),
                  h = (function (e, t, n) {
                    if (n) return t
                    if (t.start >= e.start && t.end <= e.end && e.end - e.start <= 50) return e
                    if (t.start >= e.end || t.end <= e.start) return t
                    var r = Math.max(e.start - t.start, t.end - e.end, 0)
                    return { start: Math.min(e.start + r, t.start), end: Math.max(e.end - r, t.end) }
                  })(i._slice, l, c),
                  f = u.slice(h.start, h.end)
                return { allItemsWithPositions: u, newRenderedItems: f, slice: h, arePreferredItemsRendered: c }
              }),
              v()(d()(i), '_getIsHeightsReady', function (e) {
                return Object(ye.a)(e, function (e) {
                  var t = e.itemId
                  return i._heights.has(t)
                })
              }),
              v()(d()(i), '_getHeightBetweenItems', function (e, t) {
                return e && t
                  ? i._getRenderedItemRectInViewport(t).getBottom() - i._getRenderedItemRectInViewport(e).getTop()
                  : 0
              }),
              v()(d()(i), '_getRenderedItemRectInViewport', function (e) {
                return e.getRectInViewport()
              }),
              v()(d()(i), '_updateRenderedItems', function (e, t) {
                var n = i._getRenderCandidates(e, t),
                  r = n.allItemsWithPositions,
                  o = n.arePreferredItemsRendered,
                  a = n.newRenderedItems,
                  s = n.slice,
                  c = 0 !== i._cellAnimations.size,
                  u = i._shouldNormalize(e),
                  d = Object(Ie.a)(r),
                  l = Object(we.a)(r),
                  h = i._getHeightBetweenItems(d, l),
                  f = h + i._calculateHeadroom(r, t),
                  p = i._getIsHeightsReady(a),
                  m = !($.b.isSafari() || $.b.isIOS()),
                  _ = (!c && p && (i._isIdle || m || f <= t.getHeight())) || (p && i._isInitialAnchoring),
                  g = a
                if (((i._slice = s), p && (i._isInitialAnchoring = !1), u && _)) {
                  var v = i._normalization(e, a),
                    I = v.offset,
                    w = v.renderedItems
                  ;(g = w),
                    i.setState({ renderedItems: w, listHeightWithHeadroom: f, shouldAnimate: !u }, function () {
                      var e = t
                      0 !== I && (i._viewport.scrollBy(-I), (e = i._measureRelativeViewportRect())),
                        e &&
                          i._updatePositioning({
                            renderedItems: g,
                            relativeViewportRect: e,
                            firstItem: d,
                            newListHeight: h,
                          })
                    })
                } else
                  i.setState({ renderedItems: a, listHeightWithHeadroom: f, shouldAnimate: !0 }, function () {
                    ;(!u && o) || i._scheduleUpdateDebounced(),
                      i._updatePositioning({
                        renderedItems: g,
                        relativeViewportRect: t,
                        firstItem: d,
                        newListHeight: h,
                      })
                  })
              }),
              v()(d()(i), '_updatePositioning', function (e) {
                var t = e.firstItem,
                  n = e.newListHeight,
                  r = e.relativeViewportRect,
                  o = e.renderedItems,
                  a = i.props,
                  s = a.list,
                  c = a.onPositionUpdate
                if (i._getIsHeightsReady(o)) {
                  var u = t ? i._getRenderedItemRectInViewport(t).getTop() : 0
                  c(
                    new z({
                      viewportRect: r,
                      listRect: new K.a(u, n),
                      listLength: s.length,
                      renderedItems: o.map(function (e) {
                        return { id: e.itemId, rectangle: new K.a(e.offset, i._getHeightForItemId(e.itemId)) }
                      }),
                    }),
                  )
                }
              }),
              v()(d()(i), '_shouldNormalize', function (e) {
                return i.props.hasNewContentAtBottom
                  ? i._getListOffset(e) - i._currentHeadroom != 0
                  : 0 !== i._getListOffset(e)
              }),
              v()(d()(i), '_normalization', function (e, t) {
                var n = i._getListOffset(e)
                return {
                  offset: n,
                  renderedItems: t.map(function (e) {
                    return new Y(e.itemId, e.offset - n, e.visible, e.canBeAnchor)
                  }),
                }
              }),
              v()(d()(i), '_calculateHeadroom', function (e, t) {
                return i.props.withoutHeadroom
                  ? ((i._currentHeadroom = 0), i._currentHeadroom)
                  : i.props.hasNewContentAtBottom
                  ? i._calculateTopHeadroom(e, t)
                  : i._calculateBottomHeadroom(e, t)
              }),
              v()(d()(i), '_calculateBottomHeadroom', function (e, t) {
                var n = Object(be.a)(e, function (e) {
                    return e.canBeAnchor
                  }),
                  r = Object(we.a)(e)
                if (!r) return (i._currentHeadroom = 0), i._currentHeadroom
                var o = i._getRenderedItemRectInViewport(r),
                  a = o.getBottom() - (n ? i._getRenderedItemRectInViewport(n).getTop() : o.getTop())
                return (
                  (i._currentHeadroom = Math.max(0, t.getHeight() - a + i._viewport.getOffsetBottom())),
                  i._currentHeadroom
                )
              }),
              v()(d()(i), '_calculateTopHeadroom', function (e, t) {
                var n = Object(be.a)(e, function (e) {
                    return e.canBeAnchor
                  }),
                  r = Object(Ie.a)(e)
                if (!r) return (i._currentHeadroom = 0), i._currentHeadroom
                var o = i._getRenderedItemRectInViewport(r),
                  a = (n ? i._getRenderedItemRectInViewport(n).getBottom() : o.getBottom()) - o.getTop(),
                  s = i._getDocumentViewportHeight() - t.getHeight()
                return (i._currentHeadroom = Math.max(0, t.getHeight() - a - s)), i._currentHeadroom
              }),
              v()(d()(i), '_getListOffset', function (e) {
                if (!e) return i.props.hasNewContentAtBottom ? i._currentHeadroom : 0
                var t = i._getDistanceFromTop(e.itemId)
                return i.props.hasNewContentAtBottom ? e.offset - t - i._currentHeadroom : e.offset - t
              }),
              v()(d()(i), '_getAnchorItemCandidates', function () {
                var e = i.props.analytics,
                  t = i._getFinalRenderedItems(),
                  n = t.filter(function (e) {
                    var t = e.item
                    return t.canBeAnchor && (i._isInitialAnchoring || !!i._heights.get(t.id))
                  })
                if (i._areAnchorsInvalidated) {
                  var r = t.filter(function (e) {
                    var t,
                      n = e.item,
                      r = null === (t = i._previousItemMap.get(n.id)) || void 0 === t ? void 0 : t.sortIndex
                    return r === G.a || n.sortIndex === G.a || r === n.sortIndex
                  })
                  if (r.length !== t.length) {
                    if (
                      (e.scribe({ element: 'scroller', action: 'hoisted_anchor_invalidation' }),
                      i.context.featureSwitches.isTrue('responsive_web_hoisting_anchor_invalidation_enabled'))
                    )
                      return r
                  } else e.scribe({ element: 'scroller', action: 'no_hoisted_anchor_invalidation' })
                }
                return n
              }),
              v()(d()(i), '_shouldPinToNewest', function () {
                return !i._isInitialAnchoring && !!i.props.pinToNewestWhenAtNewest && i.isAtNewest()
              }),
              v()(d()(i), '_getAnchor', function (e) {
                if (i._shouldPinToNewest()) {
                  if (i.props.hasNewContentAtBottom) {
                    var t = Object(we.a)(i.state.renderedItems)
                    return t ? { itemId: t.itemId, offset: t.offset } : void 0
                  }
                  var n = Object(Ie.a)(i.props.list)
                  return n ? { itemId: n.id, offset: 0 } : void 0
                }
                var r = function (t) {
                    var n,
                      r,
                      i =
                        ((n = t),
                        (r = e),
                        Math.max(0, Math.min(n.getBottom(), r.getBottom()) - Math.max(n.getTop(), r.getTop())))
                    return (t.getHeight() > 0 ? i / t.getHeight() : 0) > 0.01 ? 1 : 0
                  },
                  o = function (t) {
                    return t.getBottom() - e.getTop()
                  },
                  a = i._getAnchorItemCandidates(),
                  s = Pe(a, function (e, t) {
                    var n = new Y(e.item.id, e.offset, e.visible, !0, i._getHeight(e.item)).getRectInViewport(),
                      a = new Y(t.item.id, t.offset, t.visible, !0, i._getHeight(t.item)).getRectInViewport()
                    return i.props.hasNewContentAtBottom
                      ? r(n) - r(a) || Math.abs(o(n)) - Math.abs(o(a))
                      : r(n) - r(a) || Math.abs(o(a)) - Math.abs(o(n))
                  })
                if (s) return { itemId: s.item.id, offset: s.offset }
                var c = Object(Ie.a)(a)
                if (c) return { itemId: c.item.id, offset: c.offset }
                var u = Object(Ie.a)(i.props.list)
                return u ? { itemId: u.id, offset: 0 } : void 0
              }),
              v()(d()(i), '_measureRelativeViewportRect', function () {
                var e = i._rootRef.current
                if (e) return i._viewport.getRect().translateBy(-e.getBoundingClientRect().top)
              }),
              v()(d()(i), '_getHeight', function (e) {
                var t
                return i._getHeightForItemId(e.id, null === (t = e.data) || void 0 === t ? void 0 : t.type)
              }),
              v()(d()(i), '_getHeightForItemId', function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '',
                  n = i.props.assumedItemHeight,
                  r = i._heights.get(e),
                  o = Object(ve.a)(r) ? r : 'function' == typeof n ? n(t) : n
                return Ae({ cssPixels: o, dpr: i._devicePixelRatio })
              }),
              v()(d()(i), '_getDistanceFromTop', function (e) {
                var t = i.props.list,
                  n = t.findIndex(function (t) {
                    return t.id === e
                  })
                return n >= 0
                  ? t.slice(0, n).reduce(function (e, t) {
                      return i._getHeight(t) + e
                    }, 0)
                  : 0
              }),
              v()(d()(i), '_getItemsWithin', function (e) {
                return i._getFinalRenderedItems().filter(function (t) {
                  var n = t.item,
                    r = t.offset
                  return new K.a(r, i._getHeight(n)).doesIntersectWith(e)
                })
              }),
              v()(d()(i), '_measureHeights', function () {
                i._cells.forEach(function (e, t) {
                  i._heights.set(t, e.measureHeight())
                })
              }),
              v()(d()(i), '_handleAnimationStarted', function (e, t) {
                i._cellAnimations.add(e), t && (i._cellAnimationStyle = t)
              }),
              v()(d()(i), '_handleAnimationEnded', function (e) {
                i._cellAnimations.delete(e), (i._cellAnimationStyle = fe)
              }),
              v()(d()(i), '_handleItemVisible', function (e, t) {
                i._visibilityMeasurements.has(e) || i._visibilityMeasurements.set(e, t)
              }),
              v()(d()(i), '_reportVisibilityMeasurements', function () {
                if (i._visibilityMeasurements.size) {
                  var e = 0
                  i._visibilityMeasurements.forEach(function (t) {
                    return (e += t)
                  })
                  var t = Math.round(e / i._visibilityMeasurements.size),
                    n = $.b.isDesktopOS() ? 'scroller_v3' : 'scroller_v3_mobile'
                  D.c('scroller:ttfv:'.concat(n), { duration_ms: t }), i._visibilityMeasurements.clear()
                }
              }),
              v()(d()(i), '_updateItemHeight', function (e, t) {
                i._pendingHeightUpdates.set(e, t),
                  (Object(ye.a)(i.state.renderedItems, function (e) {
                    var t = e.itemId
                    return i._heights.has(t) || i._pendingHeightUpdates.has(t)
                  }) ||
                    i._pendingHeightUpdates.size > 50) &&
                    (i._update(), i._pendingHeightUpdates.clear())
              }),
              v()(d()(i), '_handleHeightChanged', function (e, t) {
                i._heights.get(e) !== t &&
                  (i._cellAnimations.has(e) ? i._scheduleCriticalUpdate() : i._updateItemHeight(e, t))
              }),
              v()(d()(i), '_setItemRef', function (e, t) {
                t
                  ? (i._cells.set(e, t), i._renderedItemsStatus.add(e))
                  : (i._cells.delete(e), i._renderedItemsStatus.delete(e))
              }),
              v()(d()(i), '_getRenderedItemsWithFocusability', function () {
                return i._getFinalRenderedItems().map(function (e) {
                  var t = e.item,
                    n = e.visible,
                    r = i._cells.get(t.id)
                  return { id: t.id, focusable: !(!r || !r.isFocusable()), visible: n }
                })
              }),
              v()(d()(i), '_findNewestVisibleId', function () {
                var e = i._measureRelativeViewportRect(),
                  t =
                    e &&
                    i._getFinalRenderedItems().find(function (t) {
                      var n = t.item,
                        r = t.offset
                      return new K.a(r, i._getHeight(n)).doesIntersectWith(e)
                    })
                return t && t.item.id
              }),
              v()(d()(i), 'adjustFocusBy', function (e) {
                i._hasUserChangedFocus = !0
                var t = i._getRenderedItemsWithFocusability(),
                  n =
                    i._activeEntryId &&
                    (function (e, t, n) {
                      var r = e
                        ? Object(B.a)(n, function (t) {
                            return t.id === e
                          })
                        : -1
                      if (r >= 0)
                        for (var i = r >= 0 ? r + t : 0; i >= 0 && i < n.length; i += t)
                          if (n[i].focusable) return n[i].id
                      return r >= 0 ? e : void 0
                    })(i._activeEntryId, e, t)
                if (!n) {
                  var r = i._findNewestVisibleId()
                  n = r
                    ? (function (e, t) {
                        var n,
                          r = Object(B.a)(t, function (t) {
                            return t.id === e
                          })
                        if (r >= 0) {
                          var i = t.find(function (e, t) {
                            return t >= r && e.focusable
                          })
                          n = i ? i.id : void 0
                        }
                        return n || L(t)
                      })(r, t)
                    : L(t)
                }
                n && i._updateFocusToItem(n)
              }),
              v()(d()(i), '_updateFocusToItem', function (e, t) {
                if (e !== i._activeEntryId) {
                  var n = i._getRenderedItemsWithFocusability().find(function (t) {
                      return t.visible && t.id === e
                    }),
                    r = i._cells.get(e),
                    o = r && r.getElement()
                  n &&
                    ((i._activeEntryId = e),
                    o &&
                      (function (e, t, n) {
                        var r = V.a.findDOMNode(e),
                          i = r && r instanceof window.HTMLElement && r.querySelector("a, [tabindex='0']")
                        if (i) {
                          i.scrollIntoView(n), i.focus()
                          var o = (t || E.a.root()).getRect().getTop()
                          o > 0 && window.scrollBy(0, -1 * o)
                        }
                      })(o, i.context.viewport, t))
                }
              }),
              v()(d()(i), 'scrollToNewest', function (e) {
                ;(i._hasUserChangedFocus = !0),
                  i.props.hasNewContentAtBottom
                    ? i._viewport.scrollTo(0, i.state.listHeightWithHeadroom)
                    : i._viewport.scrollToTop(),
                  e &&
                    (i._update(),
                    q()(function () {
                      var e = i._getRenderedItemsWithFocusability(),
                        t = L(e)
                      t && i._updateFocusToItem(t, { block: 'nearest' })
                    }))
              }),
              v()(d()(i), 'isAtNewest', function () {
                var e = i._measureRelativeViewportRect()
                return (
                  !e ||
                  (i.props.hasNewContentAtBottom
                    ? e.getBottom() >= i.state.listHeightWithHeadroom - 50
                    : e.getTop() <= 50)
                )
              }),
              (i._viewport = e.viewport),
              (i._devicePixelRatio = window.devicePixelRatio || 1),
              (i.state = { renderedItems: [], listHeightWithHeadroom: 0, shouldAnimate: !1 })
            var o = i.props,
              s = o.cacheKey,
              c = o.initialAnchor
            return (
              s && Oe.hasOwnProperty(s) ? (i._heights = Oe[s]) : ((i._heights = new Map()), (Oe[s] = i._heights)),
              (i._scheduleCriticalUpdate = Object(U.a)(function () {
                return i._update()
              }, window.requestAnimationFrame)),
              (i._scheduleUpdate = window.requestIdleCallback
                ? Object(U.a)(function () {
                    i._update()
                  }, window.requestIdleCallback)
                : i._scheduleCriticalUpdate),
              (i._scheduleCriticalUpdateThrottled = Object(C.a)(
                function () {
                  i._scheduleCriticalUpdate()
                },
                100,
                { trailing: !0 },
              )),
              (i._scheduleUpdateDebounced = Object(me.a)(i._scheduleUpdate, 250)),
              (i._wasPreviouslyAtNewestEnd = !c),
              (i._removeViewportResizeHandler = i._viewport.addRectChangeListener(i._scheduleCriticalUpdateThrottled)),
              (i._shouldUseTopPositioning =
                i.context.featureSwitches.isTrue('responsive_web_scroller_top_positioning_enabled') ||
                ($.b.isMobileOS() && $.b.isSafari())),
              (window.scroller = d()(i)),
              i
            )
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.state,
                    n = t.listHeightWithHeadroom,
                    r = t.renderedItems,
                    i = t.shouldAnimate,
                    o = this._getIsHeightsReady(r)
                  return w.a.createElement(
                    W.a.Provider,
                    { value: this._getPositioningContext(o) },
                    w.a.createElement(
                      'div',
                      { ref: this._rootRef, style: { position: 'relative', minHeight: n } },
                      this._getFinalRenderedItems().map(function (t) {
                        var n = t.item,
                          r = t.offset,
                          o = t.visible,
                          a = {
                            top: e._shouldUseTopPositioning ? ''.concat(r, 'px') : void 0,
                            transform: e._shouldUseTopPositioning ? void 0 : 'translateY('.concat(r, 'px)'),
                          }
                        return w.a.createElement(pe, {
                          item: n,
                          key: n.id,
                          onAnimationEnded: e._handleAnimationEnded,
                          onAnimationStarted: e._handleAnimationStarted,
                          onHeightChanged: e._handleHeightChanged,
                          onVisible: e._handleItemVisible,
                          positioningStyle: a,
                          setAPI: e._setItemRef,
                          shouldAnimate: i,
                          translationTransitionStyle: e._cellAnimationStyle,
                          visible: o,
                        })
                      }),
                    ),
                  )
                },
              },
              {
                key: 'shouldComponentUpdate',
                value: function (e, t) {
                  return !X()(this.props, e) || !Object(se.a)(this.state, t)
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e, t) {
                  var n = this
                  e.list !== this.props.list &&
                    (this._isInitialAnchoring ||
                      ((this._previousItemMap = new Map()),
                      e.list.forEach(function (e) {
                        n._previousItemMap.set(e.id, e)
                      }),
                      (this._areAnchorsInvalidated = !0),
                      this._shouldPinToNewest() &&
                        e.list.length !== this.props.list.length &&
                        this.props.analytics.scribe({ element: 'scroller', action: 'pin_to_top_attempt' })),
                    this._scheduleCriticalUpdate()),
                    e.cacheKey !== this.props.cacheKey && (this._hasUserChangedFocus = !1),
                    this._wasPreviouslyAtNewestEnd &&
                      this.props.list.find(function (e) {
                        return e.id === Q.a
                      }) &&
                      this._getHeightForItemId(Q.a) > 0 &&
                      this.scrollToNewest()
                },
              },
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this
                  ;(this._removeScrollHandler = this._viewport.addScrollListener(this._handleScroll)),
                    (this._removeProgrammaticScrollHandler = this._viewport.addProgrammaticScrollListener(
                      this._handleProgrammaticScroll,
                    )),
                    (this._removeFullscreenEnterHandler = k.a(this._handleEnterFullscreen)),
                    (this._removeFullscreenExitHandler = k.b(this._handleExitFullscreen))
                  var t = this._getInitialRenderedItems()
                  if (
                    (this.props.isManualScrollRestoration && this._viewport.scrollBy(-1),
                    (this._isInitialAnchoring = !0),
                    t.length > 0)
                  ) {
                    var n = this._getDocumentViewportHeight()
                    this.setState({ renderedItems: t, shouldAnimate: !0, listHeightWithHeadroom: n }, function () {
                      var t = e.props.initialAnchor
                      t && t.type === R.Anchor
                        ? (e._viewport.scrollBy(e._getViewportOffsetCorrection()),
                          t.anchor.wasFocused && e._updateFocusToItem(t.anchor.id))
                        : t && t.type === R.FocusedItem && e._updateFocusToItem(t.itemId),
                        window.requestAnimationFrame(function () {
                          return window.requestAnimationFrame(function () {
                            return e._scheduleCriticalUpdate()
                          })
                        })
                    })
                  } else this._update()
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._removeScrollHandler && this._removeScrollHandler(),
                    this._removeProgrammaticScrollHandler && this._removeProgrammaticScrollHandler(),
                    this._removeFullscreenEnterHandler && this._removeFullscreenEnterHandler(),
                    this._removeFullscreenExitHandler && this._removeFullscreenExitHandler(),
                    this._removeViewportResizeHandler && this._removeViewportResizeHandler(),
                    this._reportVisibilityMeasurements()
                },
              },
              {
                key: '_getDocumentViewportHeight',
                value: function () {
                  var e
                  return (null === (e = document.documentElement) || void 0 === e ? void 0 : e.clientHeight) || 0
                },
              },
              {
                key: '_getFinalRenderedItems',
                value: function () {
                  var e = this.props.list,
                    t = this.state.renderedItems
                  return this._getFinalRenderedItemsMemoized(e, t)
                },
              },
            ]),
            n
          )
        })(w.a.Component)
      v()(He, 'contextType', te.a),
        v()(He, 'defaultProps', {
          nearEndProximityRatio: 1.75,
          nearStartProximityRatio: 0.25,
          assumedItemHeight: 400,
          hasNewContentAtBottom: !1,
          minimumOffscreenToViewportRatio: 0.5,
          preferredOffscreenToViewportRatio: 2.5,
        })
      var Te,
        Se = Object(ee.a)(He),
        Pe = function (e, t) {
          if (e.length)
            return e.reduce(function (e, n) {
              return t(n, e) > 0 ? n : e
            })
        },
        Ee = function (e, t) {
          var n = t * e.getHeight()
          return new K.a(e.getTop() - n, e.getHeight() + 2 * n)
        }
      function Fe(e) {
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
          var n,
            r = _()(e)
          if (t) {
            var i = _()(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var je = function () {
          Te = !1
        },
        xe = (function (e) {
          h()(n, e)
          var t = Fe(n)
          function n(e, r) {
            var o
            a()(this, n),
              (o = t.call(this, e, r)),
              v()(d()(o), '_renderer', w.a.createRef()),
              v()(d()(o), '_isModal', !1),
              v()(
                d()(o),
                '_getList',
                Object(x.a)(function (e, t, n, r, o, a, s) {
                  var c = []
                  return (
                    e &&
                      c.push(
                        b(
                          '$header',
                          'header',
                          function () {
                            return e
                          },
                          !0,
                        ),
                      ),
                    c.push.apply(
                      c,
                      i()(
                        n.map(function (e) {
                          return b(a(e), e, r, !o || o(e), s && s(e))
                        }),
                      ),
                    ),
                    t &&
                      c.push(
                        b(
                          '$footer',
                          'footer',
                          function () {
                            return t
                          },
                          !1,
                        ),
                      ),
                    c
                  )
                }),
              ),
              v()(d()(o), '_render', function (e) {
                var t,
                  n = e.isModal,
                  r = o.props,
                  i = r.anchoring,
                  a = r.assumedItemHeight,
                  s = r.cacheKey,
                  c = r.canBeAnchorFunction,
                  u = r.footer,
                  d = r.hasNewContentAtBottom,
                  l = r.header,
                  h = r.identityFunction,
                  f = r.initialAnchor,
                  p = r.items,
                  m = r.renderer,
                  _ = r.sortIndexFunction,
                  g = r.withKeyboardShortcuts,
                  I = r.withoutHeadroom,
                  y = o._scrollRestorationAnchor[s],
                  b = y ? O(y) : f ? A(f.id) : void 0
                return (
                  n && ((o._isModal = !0), (Te = !0)),
                  w.a.createElement(
                    T.a,
                    {
                      enabled: g,
                      handlers:
                        ((t = {}),
                        v()(t, H.e.refresh, o._handleKeyboardRefresh),
                        v()(t, H.e.nextItem, o._handleKeyboardFocusNext),
                        v()(t, H.e.previousItem, o._handleKeyboardFocusPrevious),
                        t),
                    },
                    w.a.createElement(Se, {
                      assumedItemHeight: a,
                      cacheKey: s,
                      hasNewContentAtBottom: d,
                      initialAnchor: b,
                      isManualScrollRestoration: window.history && 'manual' === window.history.scrollRestoration,
                      key: s,
                      list: o._getList(l, u, p, m, c, h, _),
                      onPositionUpdate: o._handlePositionUpdate,
                      onScrollEnd: o._handleScrollEnd,
                      pinToNewestWhenAtNewest: i.pinToNewestWhenAtNewest,
                      ref: o._renderer,
                      viewport: o._viewport,
                      withoutHeadroom: I,
                    }),
                  )
                )
              }),
              v()(d()(o), '_handleScrollEnd', function () {
                o.props.onScrollEnd && o.props.onScrollEnd()
              }),
              v()(d()(o), '_handlePositionUpdate', function (e) {
                var t = o.props.onItemsRendered
                o._edgeProximity.handlePositioningUpdate(e),
                  t && t({ positions: e.getRenderedItems(), viewport: e.getForViewport() }),
                  o._preservePosition(o._customLocation)
              }),
              v()(d()(o), '_shouldPreventKeyboardShortcuts', function () {
                return Te && !o._isModal
              }),
              v()(
                d()(o),
                '_handleKeyboardRefresh',
                Object(C.a)(function () {
                  var e = o.props.onKeyboardRefresh
                  o._shouldPreventKeyboardShortcuts() || (e && e())
                }, 1e3),
              ),
              v()(d()(o), '_handleKeyboardFocusNext', function () {
                !o._shouldPreventKeyboardShortcuts() && o.adjustFocusBy(1)
              }),
              v()(d()(o), '_handleKeyboardFocusPrevious', function () {
                !o._shouldPreventKeyboardShortcuts() && o.adjustFocusBy(-1)
              }),
              v()(d()(o), 'isAtNewest', function () {
                return !o._renderer.current || o._renderer.current.isAtNewest()
              })
            var s = e.nearEndProximityRatio,
              c = e.nearStartProximityRatio
            return (
              (o._edgeProximity = new F.b([
                {
                  condition: F.a.nearTop(5),
                  callback: function (e) {
                    return o.props.onAtStart(e)
                  },
                },
                {
                  condition: F.a.nearTopRatio(c),
                  callback: function (e) {
                    return o.props.onNearStart(e)
                  },
                },
                {
                  condition: F.a.nearBottomRatio(s),
                  callback: function (e) {
                    return o.props.onNearEnd(e)
                  },
                },
                {
                  condition: F.a.nearBottom(5),
                  callback: function (e) {
                    return o.props.onAtEnd(e)
                  },
                },
              ])),
              (o._viewport = e.viewport || (o.context && o.context.viewport) || E.a.root()),
              o._loadStoredPosition(e, o.context),
              o
            )
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.items,
                    n = e.noItemsRenderer
                  return t.length ? w.a.createElement(S.b.Consumer, null, this._render) : n()
                },
              },
              {
                key: 'componentDidMount',
                value: function () {
                  ;(0, this.props.onPositionRestored)()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t = this.props,
                    n = t.cacheKey,
                    r = t.onPositionRestored
                  n !== e.cacheKey && r()
                },
              },
              {
                key: 'UNSAFE_componentWillReceiveProps',
                value: function (e) {
                  this.props.cacheKey !== e.cacheKey && this._loadStoredPosition(e, this.context)
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._isModal && (Te = !1)
                },
              },
              {
                key: '_preservePosition',
                value: function (e) {
                  if (e && this._renderer.current) {
                    var t = this._renderer.current.getAnchors()
                    e.savePosition(t)
                  }
                },
              },
              {
                key: '_loadStoredPosition',
                value: function (e, t) {
                  var n = t.getCustomLocation
                  this._customLocation = n && n()
                  var r = []
                  if (this._customLocation) {
                    var i = this._customLocation.getSavedPosition()
                    ;(r = i && i.length ? i : []).length > 0 &&
                      this._customLocation &&
                      this._customLocation.claimScrollRestoration()
                  }
                  var o =
                    r.find(function (t) {
                      var n = t.id
                      return (
                        t.wasFocused &&
                        e.items.some(function (t) {
                          return e.identityFunction(t) === n
                        })
                      )
                    }) ||
                    r.find(function (t) {
                      t.distanceToViewportTop
                      var n = t.id
                      return e.items.some(function (t) {
                        return e.identityFunction(t) === n
                      })
                    })
                  this._scrollRestorationAnchor = v()({}, e.cacheKey, o)
                },
              },
              {
                key: 'adjustFocusBy',
                value: function (e) {
                  this._renderer.current && this._renderer.current.adjustFocusBy(e)
                },
              },
              {
                key: 'scrollToNewest',
                value: function (e) {
                  this._renderer.current && this._renderer.current.scrollToNewest(e)
                },
              },
            ]),
            n
          )
        })(w.a.PureComponent)
      v()(xe, 'contextTypes', { viewport: j.object, getCustomLocation: j.func }),
        v()(xe, 'defaultProps', {
          anchoring: P.a,
          hasNewContentAtBottom: !1,
          onPositionRestored: N.a,
          onAtEnd: N.a,
          onAtStart: N.a,
          onNearEnd: N.a,
          onNearStart: N.a,
          onScrollEnd: N.a,
          nearEndProximityRatio: 1.75,
          nearStartProximityRatio: 0.25,
          noItemsRenderer: function () {
            return null
          },
          assumedItemHeight: 400,
          minimumOffscreenToViewportRatio: 0.5,
          preferredOffscreenToViewportRatio: 2.5,
          withoutHeadroom: !1,
          withKeyboardShortcuts: !1,
        })
    },
    JD1h: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return c
      }),
        n.d(t, 'b', function () {
          return l
        })
      var r = n('VrFO'),
        i = n.n(r),
        o = n('Y9Ll'),
        a = n.n(o),
        s =
          (n('yH/f'),
          n('z84I'),
          n('jwue'),
          n('+oxZ'),
          Object.freeze({ MOVEMENT: 'movement', LIST_UPDATE: 'list_update', INITIAL_POSITION: 'initial_position' })),
        c = {
          nearTop: function (e) {
            return function (t, n) {
              return n.getTop() - t.getTop() <= e
            }
          },
          nearBottom: function (e) {
            return function (t, n) {
              return t.getBottom() - n.getBottom() <= e
            }
          },
          nearTopRatio: function (e) {
            return function (t, n) {
              var r = n.getHeight() * e
              return n.getTop() - t.getTop() <= r
            }
          },
          nearBottomRatio: function (e) {
            return function (t, n) {
              var r = n.getHeight() * e
              return t.getBottom() - n.getBottom() <= r
            }
          },
        },
        u = Object.freeze({ INSIDE: 'inside', OUTSIDE: 'outside' }),
        d = function (e, t, n, r) {
          return (function (e, t) {
            return !e && t === u.INSIDE
          })(e, n)
            ? s.INITIAL_POSITION
            : (function (e, t) {
                return e === u.OUTSIDE && t === u.INSIDE
              })(e, n)
            ? s.MOVEMENT
            : (function (e, t) {
                return e === u.INSIDE && t === u.INSIDE
              })(e, n) && r !== t
            ? s.LIST_UPDATE
            : null
        },
        l = (function () {
          function e(t) {
            i()(this, e),
              (this._handlers = t.map(function (e) {
                return { zone: e, state: {} }
              }))
          }
          return (
            a()(e, [
              {
                key: 'handlePositioningUpdate',
                value: function (e) {
                  this._handlers.forEach(function (t) {
                    var n = t.state,
                      r = t.zone,
                      i = r.callback,
                      o = r.condition,
                      a = n.listLength,
                      s = n.proximity,
                      c = (function (e, t) {
                        return e(t.getForList(), t.getForViewport()) ? u.INSIDE : u.OUTSIDE
                      })(o, e),
                      l = e.getListLength(),
                      h = d(s, a, c, l)
                    ;(n.proximity = c), (n.listLength = l), h && i({ triggerCause: h })
                  })
                },
              },
            ]),
            e
          )
        })()
    },
    XygZ: function (e, t, n) {
      'use strict'
      var r = n('ax0f'),
        i = n('gIHd')
      r(
        { target: 'String', proto: !0, forced: n('sHxg')('anchor') },
        {
          anchor: function (e) {
            return i(this, 'a', 'name', e)
          },
        },
      )
    },
    dPJJ: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return c
      }),
        n.d(t, 'b', function () {
          return u
        })
      n('LqLs'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('jwue'), n('LW0h'), n('z84I'), n('+oxZ')
      var r = n('6/RC'),
        i = new Set(),
        o = new Set(),
        a = !1
      function s() {
        if (r.canUseDOM && !a) {
          var e = [
            'fullscreenElement',
            'webkitFullscreenElement',
            'webkitCurrentFullScreenElement',
            'mozFullScreenElement',
            'msFullscreenElement',
          ]
          ;['webkitfullscreenchange', 'mozfullscreenchange', 'fullscreenchange', 'msfullscreenchange'].forEach(
            function (t) {
              document.addEventListener(t, function () {
                var t = e
                  .map(function (e) {
                    return document[e]
                  })
                  .filter(Boolean)[0]
                t
                  ? i.forEach(function (e) {
                      return e(t)
                    })
                  : o.forEach(function (e) {
                      return e()
                    })
              })
            },
          )
        }
        a = !0
      }
      var c = function (e) {
          return (
            a || s(),
            i.add(e),
            function () {
              return i.delete(e)
            }
          )
        },
        u = function (e) {
          return (
            a || s(),
            o.add(e),
            function () {
              return o.delete(e)
            }
          )
        }
    },
    gbD7: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return o
      }),
        n.d(t, 'a', function () {
          return a
        }),
        n.d(t, 'd', function () {
          return s
        }),
        n.d(t, 'c', function () {
          return c
        })
      n('ERkP')
      var r = n('aWyx'),
        i = function (e, t) {
          return {
            entry: { id: t, time: '', type: e },
            isActive: !1,
            isRapidFire: !1,
            isFirstRapidFire: !1,
            isLastRapidFire: !1,
            type: e,
          }
        },
        o = i(r.b.CONVERSATION_PROFILE_INFO_HEADER, 'conversationProfileInfoHeader'),
        a = 'typingIndicator',
        s = i(r.b.TYPING_INDICATOR, a),
        c = i(r.b.READ_ONLY_INDICATOR, 'readOnlyIndicator')
    },
    jHwr: function (e, t, n) {
      'use strict'
      t.a = function (e, t) {
        var n = null,
          r = function () {
            ;(n = null), e()
          }
        return function () {
          return n || (n = t(r)), n
        }
      }
    },
    kgfz: function (e, t) {
      function n(e) {
        var t = []
        for (var n in e) t.push(n)
        return t
      }
      ;(e.exports = 'function' == typeof Object.keys ? Object.keys : n).shim = n
    },
  },
])
//# sourceMappingURL=WIPED
