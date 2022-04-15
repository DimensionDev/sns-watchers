;(window.webpackJsonp = window.webpackJsonp || []).push([
  [166],
  {
    '+0pD': function (e, t) {
      var n =
        '[object Arguments]' ==
        (function () {
          return Object.prototype.toString.call(arguments)
        })()
      function i(e) {
        return '[object Arguments]' == Object.prototype.toString.call(e)
      }
      function r(e) {
        return (
          (e &&
            'object' == typeof e &&
            'number' == typeof e.length &&
            Object.prototype.hasOwnProperty.call(e, 'callee') &&
            !Object.prototype.propertyIsEnumerable.call(e, 'callee')) ||
          !1
        )
      }
      ;((t = e.exports = n ? i : r).supported = i), (t.unsupported = r)
    },
    '06eB': function (e, t, n) {
      var i = Array.prototype.slice,
        r = n('kgfz'),
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
                    if (o(e)) return !!o(t) && ((e = i.call(e)), (t = i.call(t)), a(e, t, n))
                    if (c(e)) {
                      if (!c(t)) return !1
                      if (e.length !== t.length) return !1
                      for (u = 0; u < e.length; u++) if (e[u] !== t[u]) return !1
                      return !0
                    }
                    try {
                      var l = r(e),
                        h = r(t)
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
      var i = n('yiKp'),
        r = n.n(i),
        o = n('7n04'),
        a = r()(r()({}, o.a), {}, { pinToNewestWhenAtNewest: !0 })
      t.a = a
    },
    '64vW': function (e, t, n) {
      'use strict'
      var i = n('ERkP'),
        r = n.n(i).a.createContext({ heightsReady: !0 })
      t.a = r
    },
    FwSR: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'resetIsModalScrollerRendered', function () {
          return ke
        }),
        n.d(t, 'default', function () {
          return Le
        })
      var i = n('RhWx'),
        r = n.n(i),
        o = n('VrFO'),
        a = n.n(o),
        s = n('Y9Ll'),
        c = n.n(s),
        u = n('1Pcy'),
        d = n.n(u),
        l = n('5Yy7'),
        h = n.n(l),
        f = n('2VqO'),
        m = n.n(f),
        _ = n('KEM+'),
        p = n.n(_),
        g = (n('z84I'), n('XygZ'), n('hBpG'), n('7x/C'), n('5BYb'), n('ERkP')),
        v = n.n(g),
        I = (function () {
          function e(t, n, i, r, o) {
            a()(this, e),
              (this.id = t),
              (this._renderer = i),
              (this.canBeAnchor = r),
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
        w = function (e, t, n, i) {
          var r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : '-1'
          return new I(e, t, n, i, r)
        },
        b = (n('yH/f'), Object.freeze({ FocusedItem: 'focusedItem', Anchor: 'anchor' })),
        y = function (e) {
          return { anchor: e, type: b.Anchor }
        },
        R = function (e) {
          return { itemId: e, type: b.FocusedItem }
        },
        A = n('OrGc'),
        H = n('hACr'),
        T = n('7N4s'),
        S = n('3AAD'),
        E = n('oi7R'),
        O =
          (n('jwue'),
          n('+oxZ'),
          Object.freeze({ MOVEMENT: 'movement', LIST_UPDATE: 'list_update', INITIAL_POSITION: 'initial_position' })),
        F = function (e) {
          return function (t, n) {
            return n.getTop() - t.getTop() <= e
          }
        },
        P = function (e) {
          return function (t, n) {
            return t.getBottom() - n.getBottom() <= e
          }
        },
        x = function (e) {
          return function (t, n) {
            var i = n.getHeight() * e
            return n.getTop() - t.getTop() <= i
          }
        },
        C = function (e) {
          return function (t, n) {
            var i = n.getHeight() * e
            return t.getBottom() - n.getBottom() <= i
          }
        },
        N = Object.freeze({ INSIDE: 'inside', OUTSIDE: 'outside' }),
        V = function (e, t, n, i) {
          return (function (e, t) {
            return !e && t === N.INSIDE
          })(e, n)
            ? O.INITIAL_POSITION
            : (function (e, t) {
                return e === N.OUTSIDE && t === N.INSIDE
              })(e, n)
            ? O.MOVEMENT
            : (function (e, t) {
                return e === N.INSIDE && t === N.INSIDE
              })(e, n) && i !== t
            ? O.LIST_UPDATE
            : null
        },
        M = (function () {
          function e(t) {
            a()(this, e),
              (this._handlers = t.map(function (e) {
                return { zone: e, state: {} }
              }))
          }
          return (
            c()(e, [
              {
                key: 'handlePositioningUpdate',
                value: function (e) {
                  this._handlers.forEach(function (t) {
                    var n = t.state,
                      i = t.zone,
                      r = i.callback,
                      o = i.condition,
                      a = n.listLength,
                      s = n.proximity,
                      c = (function (e, t) {
                        return e(t.getForList(), t.getForViewport()) ? N.INSIDE : N.OUTSIDE
                      })(o, e),
                      u = e.getListLength(),
                      d = V(s, a, c, u)
                    ;(n.proximity = c), (n.listLength = u), d && r({ triggerCause: d })
                  })
                },
              },
            ]),
            e
          )
        })(),
        j = n('aWzz'),
        B = n('oQhu'),
        k = n('+d3d'),
        L = n('fs1G'),
        U = n('0zXz'),
        z =
          (n('lTEL'),
          n('m9LP'),
          n('87if'),
          n('kYxP'),
          n('LqLs'),
          n('vfdX'),
          n('LW0h'),
          n('vrRf'),
          n('M+/F'),
          n('KOtZ'),
          n('zrc3')),
        D = n('7nmT'),
        W = n.n(D),
        K = function (e) {
          var t
          return null ===
            (t = e.find(function (e) {
              return e.focusable
            })) || void 0 === t
            ? void 0
            : t.id
        },
        Y = n('6/RC'),
        q = new Set(),
        X = new Set(),
        Z = !1
      function G() {
        if (Y.canUseDOM && !Z) {
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
                  ? q.forEach(function (e) {
                      return e(t)
                    })
                  : X.forEach(function (e) {
                      return e()
                    })
              })
            },
          )
        }
        Z = !0
      }
      var J = n('E6XO'),
        Q = n('jHwr'),
        $ = (function () {
          function e(t) {
            var n = t.listLength,
              i = t.listRect,
              r = t.renderedItems,
              o = t.viewportRect
            a()(this, e),
              (this._viewportRect = o),
              (this._listRect = i),
              (this._listLength = n),
              (this._renderedItems = r)
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
        ee = n('64vW'),
        te = n('c/W/'),
        ne = (function () {
          function e(t, n, i, r) {
            var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0
            a()(this, e),
              (this.itemId = t),
              (this.offset = n),
              (this.visible = i),
              (this.canBeAnchor = r),
              (this.height = o)
          }
          return (
            c()(e, [
              {
                key: 'getRectInViewport',
                value: function () {
                  return new te.a(this.offset, this.height)
                },
              },
            ]),
            e
          )
        })(),
        ie = n('z0MJ'),
        re = n.n(ie),
        oe = n('pQ3Z'),
        ae = n.n(oe),
        se = n('iBK2'),
        ce = n('gbD7'),
        ue = n('aITJ'),
        de = n('Irs7'),
        le = n('v6aA'),
        he = n('yiKp'),
        fe = n.n(he),
        me = n('ddV6'),
        _e = n.n(me),
        pe = n('38/B'),
        ge = n('06eB'),
        ve = n.n(ge),
        Ie = n('mN6z'),
        we = v.a.createContext({
          onAnimationStarted: function () {},
          onAnimationEnded: function () {},
          onHeightChanged: function () {},
        }),
        be = function () {
          return window.performance ? window.performance.now() : Date.now()
        },
        ye = 'transform 0.15s linear',
        Re = (function (e) {
          h()(n, e)
          var t = m()(n)
          function n(e, i) {
            var r
            a()(this, n),
              (r = t.call(this, e, i)),
              p()(d()(r), '_contentsFocusable', !1),
              p()(d()(r), '_perfReported', !1),
              p()(d()(r), '_shouldAnimateTranslate', !1),
              p()(d()(r), '_observeElement', function (e) {
                var t = r._resizeObserver
                t && (t.disconnect(), t.observe(e))
              }),
              p()(d()(r), '_handleResize', function (e) {
                var t = r.props,
                  n = t.item,
                  i = t.onHeightChanged,
                  o = _e()(e, 1)[0],
                  a = (o && Math.floor(o.contentRect.height)) !== (r._currentHeight && Math.floor(r._currentHeight))
                o && a && ((r._currentHeight = o.contentRect.height), i(n.id, o.contentRect.height)), r._recordTTFV()
              }),
              p()(d()(r), '_setRef', function (e) {
                var t = r.props,
                  n = t.item,
                  i = t.setAPI
                e ? ((r._element = e), i(n.id, d()(r)), r._observeElement(e)) : (i(n.id, void 0), (r._element = void 0))
              }),
              p()(d()(r), '_setIsItemFocusable', function (e) {
                r._contentsFocusable = e
              }),
              p()(d()(r), '_handleAnimationStarted', function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ye
                r._resizeObserver && r._resizeObserver.disconnect(),
                  r.props.onAnimationStarted(r.props.item.id, e),
                  r._animationTTLTimeoutId && clearTimeout(r._animationTTLTimeoutId),
                  (r._animationTTLTimeoutId = setTimeout(r._handleAnimationEnded, 1e3))
              }),
              p()(d()(r), '_handleAnimationEnded', function () {
                r._animationTTLTimeoutId && (clearTimeout(r._animationTTLTimeoutId), (r._animationTTLTimeoutId = null)),
                  r._element && r._observeElement(r._element),
                  r.props.onAnimationEnded(r.props.item.id)
              }),
              p()(d()(r), '_handleHeightChanged', function (e) {
                ;(r._currentHeight = e), r.props.onHeightChanged(r.props.item.id, e)
              })
            var o = ue.b.isSafari() ? window.PolyfillResizeObserver : window.ResizeObserver
            return (
              (r._resizeObserver = new o(r._handleResize)),
              (r._animationContext = {
                onAnimationEnded: r._handleAnimationEnded,
                onAnimationStarted: r._handleAnimationStarted,
                onHeightChanged: r._handleHeightChanged,
              }),
              (r._perfStart = be()),
              r
            )
          }
          return (
            c()(n, [
              {
                key: 'shouldComponentUpdate',
                value: function (e) {
                  var t = this.props,
                    n = t.item,
                    i = t.positioningStyle,
                    r = t.shouldAnimate,
                    o = t.visible,
                    a = !Object(Ie.a)(e.positioningStyle, i)
                  return (
                    (this._shouldAnimateTranslate = a && e.visible === o),
                    !ve()(e.item, n) || a || e.visible !== o || e.shouldAnimate !== r
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
                    i = t.setAPI
                  e.item.id !== n.id && (i(e.item.id, void 0), i(n.id, this)), this._recordTTFV()
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
                    i = e.translationTransitionStyle,
                    r = e.visible,
                    o = this._shouldAnimateTranslate && !pe.a.reducedMotionEnabled ? i : 'opacity 0.3s ease-out',
                    a = fe()(
                      fe()({}, this.props.positioningStyle),
                      {},
                      {
                        position: 'absolute',
                        opacity: r ? void 0 : 0.01,
                        width: '100%',
                        transition: n && !this._isAnimationDisabled ? o : void 0,
                      },
                    )
                  return v.a.createElement(
                    we.Provider,
                    { value: this._animationContext },
                    v.a.createElement('div', { ref: this._setRef, style: a }, t.render(this._setIsItemFocusable)),
                  )
                },
              },
              {
                key: '_recordTTFV',
                value: function () {
                  var e = this.props,
                    t = e.item,
                    n = e.onVisible,
                    i = e.visible
                  void 0 !== this._currentHeight &&
                    !this._perfReported &&
                    i &&
                    (n(t.id, be() - this._perfStart), (this._perfReported = !0))
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      p()(Re, 'contextType', le.a), p()(Re, 'defaultProps', { translationTransitionStyle: ye })
      var Ae = n('VY6S'),
        He = n('Qyxo'),
        Te = n('qdp+'),
        Se = n('/NU0'),
        Ee = n('6vUc'),
        Oe = n('jat/'),
        Fe = n('xN10'),
        Pe = n('Myq3'),
        xe = {},
        Ce = function (e) {
          var t = e.cssPixels,
            n = e.dpr
          return Math.ceil(t * n) / n
        },
        Ne = (function (e) {
          h()(n, e)
          var t = m()(n)
          function n(e, i) {
            var r
            a()(this, n),
              (r = t.call(this, e, i)),
              p()(d()(r), '_areAnchorsInvalidated', !1),
              p()(d()(r), '_cells', new Map()),
              p()(d()(r), '_cellAnimations', new Set()),
              p()(d()(r), '_cellAnimationStyle', ye),
              p()(d()(r), '_currentHeadroom', 0),
              p()(d()(r), '_isFullScreened', !1),
              p()(d()(r), '_isIdle', !0),
              p()(d()(r), '_pendingHeightUpdates', new Map()),
              p()(d()(r), '_previousScrollPosition', 0),
              p()(d()(r), '_renderedItemsStatus', new Set()),
              p()(d()(r), '_rootRef', v.a.createRef()),
              p()(d()(r), '_slice', { start: 0, end: 0 }),
              p()(d()(r), '_shouldScribeNextScroll', !0),
              p()(d()(r), '_visibilityMeasurements', new Map()),
              p()(d()(r), '_handleScroll', function () {
                ;(r._wasPreviouslyAtNewestEnd = r.isAtNewest()),
                  r._isInitialAnchoring ||
                    r._viewport.scrollY() < 0 ||
                    ((r._isIdle = !1), r._updateScrollEnd(), r._scheduleCriticalUpdateThrottled())
              }),
              p()(
                d()(r),
                '_updateScrollEnd',
                Object(Ae.a)(function () {
                  var e = r.props,
                    t = e.analytics,
                    n = e.onScrollEnd,
                    i = r._viewport.scrollY() - r._previousScrollPosition
                  ;(r._previousScrollPosition = r._viewport.scrollY()),
                    r._shouldScribeNextScroll &&
                      Math.abs(i) > 100 &&
                      t.scribe({ action: 'scroll', data: { event_value: i } }),
                    (r._shouldScribeNextScroll = !0),
                    (r._isIdle = !0),
                    n(),
                    r._scheduleCriticalUpdate()
                }, 200),
              ),
              p()(d()(r), '_handleProgrammaticScroll', function () {
                r._shouldScribeNextScroll = !1
              }),
              p()(d()(r), '_handleEnterFullscreen', function () {
                r._isFullScreened = !0
              }),
              p()(d()(r), '_handleExitFullscreen', function () {
                ;(r._isFullScreened = !1), r._scheduleCriticalUpdate()
              }),
              p()(
                d()(r),
                '_getPositioningContext',
                Object(B.a)(function (e) {
                  return { heightsReady: e }
                }),
              ),
              p()(
                d()(r),
                '_getFinalRenderedItemsMemoized',
                Object(B.a)(function (e, t) {
                  var n = r._getItemMapMemoized(e)
                  return Object(He.a)(t, function (e) {
                    var t = n.get(e.itemId)
                    return t && { item: t, offset: e.offset, visible: e.visible }
                  })
                }),
              ),
              p()(
                d()(r),
                '_getItemMapMemoized',
                Object(B.a)(function (e) {
                  var t = new Map()
                  return (
                    e.forEach(function (e) {
                      t.set(e.id, e)
                    }),
                    t
                  )
                }),
              ),
              p()(d()(r), '_getInitialRenderedItems', function () {
                var e = r.props,
                  t = e.centerInitialAnchor,
                  n = e.initialAnchor,
                  i = e.list,
                  o = []
                if (!n) return o
                if (n.type === b.FocusedItem) {
                  var a = 0
                  if (t) {
                    var s = r._getDocumentViewportHeight(),
                      c = r._getHeightForItemId(n.itemId)
                    a = Math.ceil(s / 2) - c / 2
                  }
                  var u = Object(Te.a)(i, function (e) {
                    return e.id === n.itemId ? new ne(e.id, a, !0, e.canBeAnchor) : void 0
                  })
                  u && o.push(u)
                } else if (n.type === b.Anchor && Object(Se.a)(n.anchor.distanceToViewportTop)) {
                  for (
                    var d = n.anchor,
                      l = r._getDocumentViewportHeight(),
                      h = d.distanceToViewportTop || 0,
                      f = i.findIndex(function (e) {
                        return e.id === d.id
                      }),
                      m = h,
                      _ = f;
                    _ > -1 && _ < i.length && m < l;

                  ) {
                    var p = i[_],
                      g = r._heights.get(p.id)
                    if (!Object(Se.a)(g)) break
                    o.push(new ne(p.id, m, !0, p.canBeAnchor)), (m += g), (_ += 1)
                  }
                  for (m = h, _ = f - 1; _ > -1 && m > 0; ) {
                    var v = i[_],
                      I = r._heights.get(v.id)
                    if (!Object(Se.a)(I)) break
                    ;(m -= I), o.unshift(new ne(v.id, m, !0, v.canBeAnchor)), (_ -= 1)
                  }
                }
                return o
              }),
              p()(d()(r), '_getViewportOffsetCorrection', function () {
                var e = r._rootRef.current && r._rootRef.current.getBoundingClientRect()
                if (!e || !r._viewport) return 0
                var t = r._viewport instanceof E.a ? 0 : r._viewport.getRect().getTop()
                return Ce({ cssPixels: e.top - t, dpr: r._devicePixelRatio })
              }),
              p()(d()(r), 'getAnchors', function () {
                var e = r._rootRef.current && r._rootRef.current.getBoundingClientRect(),
                  t = r._measureRelativeViewportRect()
                return e && t
                  ? r
                      ._getItemsWithin(t)
                      .filter(function (e) {
                        return e.item.canBeAnchor
                      })
                      .map(function (e) {
                        return {
                          id: e.item.id,
                          distanceToViewportTop: Ce({
                            cssPixels: e.offset + r._getViewportOffsetCorrection(),
                            dpr: r._devicePixelRatio,
                          }),
                          wasFocused: r._hasUserChangedFocus && e.item.id === r._activeEntryId,
                        }
                      })
                  : []
              }),
              p()(d()(r), '_update', function () {
                var e = r._measureRelativeViewportRect()
                if (e && !r._isFullScreened) {
                  var t = r._getAnchor(e)
                  r._measureHeights(), t && (r._updateRenderedItems(t, e), (r._areAnchorsInvalidated = !1))
                }
              }),
              p()(d()(r), '_getItemsWithPositions', function (e) {
                var t = r.props.list,
                  n = r._getDistanceFromTop(e.itemId),
                  i = e.offset - n,
                  o = []
                return (
                  t.forEach(function (e) {
                    var t = r._getHeight(e)
                    o.push(new ne(e.id, i, r._heights.has(e.id), e.canBeAnchor, t)), (i += t)
                  }),
                  o
                )
              }),
              p()(d()(r), '_getSliceForCandidates', function (e, t) {
                var n = Object(Ee.a)(e),
                  i = Object(Oe.a)(e)
                return { start: n ? t.indexOf(n) : 0, end: i ? t.indexOf(i) + 1 : 0 }
              }),
              p()(d()(r), '_getRenderCandidates', function (e, t) {
                var n = r.props,
                  i = n.minimumOffscreenToViewportRatio,
                  o = n.preferredOffscreenToViewportRatio,
                  a = Be(t, i),
                  s = Be(t, o),
                  c = r._isIdle && !r._isInitialAnchoring,
                  u = r._getItemsWithPositions(e),
                  d = u.filter(function (e) {
                    return r._getRenderedItemRectInViewport(e).doesIntersectWith(c ? s : a)
                  }),
                  l = r._getSliceForCandidates(d, u),
                  h = (function (e, t, n) {
                    if (n) return t
                    if (t.start >= e.start && t.end <= e.end && e.end - e.start <= 50) return e
                    if (t.start >= e.end || t.end <= e.start) return t
                    var i = Math.max(e.start - t.start, t.end - e.end, 0)
                    return { start: Math.min(e.start + i, t.start), end: Math.max(e.end - i, t.end) }
                  })(r._slice, l, c),
                  f = u.slice(h.start, h.end)
                return { allItemsWithPositions: u, newRenderedItems: f, slice: h, arePreferredItemsRendered: c }
              }),
              p()(d()(r), '_getIsHeightsReady', function (e) {
                return Object(Fe.a)(e, function (e) {
                  var t = e.itemId
                  return r._heights.has(t)
                })
              }),
              p()(d()(r), '_getHeightBetweenItems', function (e, t) {
                return e && t
                  ? r._getRenderedItemRectInViewport(t).getBottom() - r._getRenderedItemRectInViewport(e).getTop()
                  : 0
              }),
              p()(d()(r), '_getRenderedItemRectInViewport', function (e) {
                return e.getRectInViewport()
              }),
              p()(d()(r), '_updateRenderedItems', function (e, t) {
                var n = r._getRenderCandidates(e, t),
                  i = n.allItemsWithPositions,
                  o = n.arePreferredItemsRendered,
                  a = n.newRenderedItems,
                  s = n.slice,
                  c = 0 !== r._cellAnimations.size,
                  u = r._shouldNormalize(e),
                  d = Object(Ee.a)(i),
                  l = Object(Oe.a)(i),
                  h = r._getHeightBetweenItems(d, l),
                  f = h + r._calculateHeadroom(i, t),
                  m = r._getIsHeightsReady(a),
                  _ = !(ue.b.isSafari() || ue.b.isIOS()),
                  p = (!c && m && (r._isIdle || _ || f <= t.getHeight())) || (m && r._isInitialAnchoring),
                  g = a
                if (((r._slice = s), m && (r._isInitialAnchoring = !1), u && p)) {
                  var v = r._normalization(e, a),
                    I = v.offset,
                    w = v.renderedItems
                  ;(g = w),
                    r.setState({ renderedItems: w, listHeightWithHeadroom: f, shouldAnimate: !u }, function () {
                      var e = t
                      0 !== I && (r._viewport.scrollBy(-I), (e = r._measureRelativeViewportRect())),
                        e &&
                          r._updatePositioning({
                            renderedItems: g,
                            relativeViewportRect: e,
                            firstItem: d,
                            newListHeight: h,
                          })
                    })
                } else
                  r.setState({ renderedItems: a, listHeightWithHeadroom: f, shouldAnimate: !0 }, function () {
                    ;(!u && o) || r._scheduleUpdateDebounced(),
                      r._updatePositioning({
                        renderedItems: g,
                        relativeViewportRect: t,
                        firstItem: d,
                        newListHeight: h,
                      })
                  })
              }),
              p()(d()(r), '_updatePositioning', function (e) {
                var t = e.firstItem,
                  n = e.newListHeight,
                  i = e.relativeViewportRect,
                  o = e.renderedItems,
                  a = r.props,
                  s = a.list,
                  c = a.onPositionUpdate
                if (r._getIsHeightsReady(o)) {
                  var u = t ? r._getRenderedItemRectInViewport(t).getTop() : 0
                  c(
                    new $({
                      viewportRect: i,
                      listRect: new te.a(u, n),
                      listLength: s.length,
                      renderedItems: o.map(function (e) {
                        return { id: e.itemId, rectangle: new te.a(e.offset, r._getHeightForItemId(e.itemId)) }
                      }),
                    }),
                  )
                }
              }),
              p()(d()(r), '_shouldNormalize', function (e) {
                return r.props.hasNewContentAtBottom
                  ? r._getListOffset(e) - r._currentHeadroom != 0
                  : 0 !== r._getListOffset(e)
              }),
              p()(d()(r), '_normalization', function (e, t) {
                var n = r._getListOffset(e)
                return {
                  offset: n,
                  renderedItems: t.map(function (e) {
                    return new ne(e.itemId, e.offset - n, e.visible, e.canBeAnchor)
                  }),
                }
              }),
              p()(d()(r), '_calculateHeadroom', function (e, t) {
                return r.props.withoutHeadroom
                  ? ((r._currentHeadroom = 0), r._currentHeadroom)
                  : r.props.centerInitialAnchor
                  ? r._calculateTopHeadroom(e, t) + r._calculateBottomHeadroom(e, t)
                  : r.props.hasNewContentAtBottom
                  ? r._calculateTopHeadroom(e, t)
                  : r._calculateBottomHeadroom(e, t)
              }),
              p()(d()(r), '_calculateBottomHeadroom', function (e, t) {
                var n = Object(Pe.a)(e, function (e) {
                    return e.canBeAnchor
                  }),
                  i = Object(Oe.a)(e)
                if (!i) return (r._currentHeadroom = 0), r._currentHeadroom
                var o = r._getRenderedItemRectInViewport(i),
                  a = o.getBottom() - (n ? r._getRenderedItemRectInViewport(n).getTop() : o.getTop())
                return (
                  (r._currentHeadroom = Math.max(0, t.getHeight() - a + r._viewport.getOffsetBottom())),
                  r._currentHeadroom
                )
              }),
              p()(d()(r), '_calculateTopHeadroom', function (e, t) {
                var n = Object(Pe.a)(e, function (e) {
                    return e.canBeAnchor
                  }),
                  i = Object(Ee.a)(e)
                if (!i) return (r._currentHeadroom = 0), r._currentHeadroom
                var o = r._getRenderedItemRectInViewport(i),
                  a = (n ? r._getRenderedItemRectInViewport(n).getBottom() : o.getBottom()) - o.getTop(),
                  s = r._getDocumentViewportHeight() - t.getHeight()
                return (r._currentHeadroom = Math.max(0, t.getHeight() - a - s)), r._currentHeadroom
              }),
              p()(d()(r), '_getListOffset', function (e) {
                if (!e) return r.props.hasNewContentAtBottom ? r._currentHeadroom : 0
                var t = r._getDistanceFromTop(e.itemId)
                return r.props.hasNewContentAtBottom ? e.offset - t - r._currentHeadroom : e.offset - t
              }),
              p()(d()(r), '_getAnchorItemCandidates', function () {
                var e = r.props.analytics,
                  t = r._getFinalRenderedItems(),
                  n = t.filter(function (e) {
                    var t = e.item
                    return t.canBeAnchor && (r._isInitialAnchoring || !!r._heights.get(t.id))
                  })
                if (r._areAnchorsInvalidated) {
                  var i = t.filter(function (e) {
                    var t,
                      n = e.item,
                      i = null === (t = r._previousItemMap.get(n.id)) || void 0 === t ? void 0 : t.sortIndex
                    return i === se.a || n.sortIndex === se.a || i === n.sortIndex
                  })
                  if (i.length !== t.length) {
                    if (
                      (e.scribe({ element: 'scroller', action: 'hoisted_anchor_invalidation' }),
                      r.context.featureSwitches.isTrue('responsive_web_hoisting_anchor_invalidation_enabled'))
                    )
                      return i
                  } else e.scribe({ element: 'scroller', action: 'no_hoisted_anchor_invalidation' })
                }
                return n
              }),
              p()(d()(r), '_shouldPinToNewest', function () {
                return !r._isInitialAnchoring && !!r.props.pinToNewestWhenAtNewest && r.isAtNewest()
              }),
              p()(d()(r), '_getAnchor', function (e) {
                if (r._shouldPinToNewest() && !r.props.centerInitialAnchor) {
                  if (r.props.hasNewContentAtBottom) {
                    var t = Object(Oe.a)(r.state.renderedItems)
                    return t ? { itemId: t.itemId, offset: t.offset } : void 0
                  }
                  var n = Object(Ee.a)(r.props.list)
                  return n ? { itemId: n.id, offset: 0 } : void 0
                }
                var i = function (t) {
                    var n = Object(te.b)(t, e)
                    return (t.getHeight() > 0 ? n / t.getHeight() : 0) > 0.01 ? 1 : 0
                  },
                  o = function (t) {
                    return t.getBottom() - e.getTop()
                  },
                  a = r._getAnchorItemCandidates(),
                  s = je(a, function (e, t) {
                    var n = new ne(e.item.id, e.offset, e.visible, !0, r._getHeight(e.item)).getRectInViewport(),
                      a = new ne(t.item.id, t.offset, t.visible, !0, r._getHeight(t.item)).getRectInViewport()
                    return r.props.hasNewContentAtBottom
                      ? i(n) - i(a) || Math.abs(o(n)) - Math.abs(o(a))
                      : i(n) - i(a) || Math.abs(o(a)) - Math.abs(o(n))
                  })
                if (s) return { itemId: s.item.id, offset: s.offset }
                var c = Object(Ee.a)(a)
                if (c) return { itemId: c.item.id, offset: c.offset }
                var u = Object(Ee.a)(r.props.list)
                return u ? { itemId: u.id, offset: 0 } : void 0
              }),
              p()(d()(r), '_measureRelativeViewportRect', function () {
                var e = r._rootRef.current
                if (e) return r._viewport.getRect().translateBy(-e.getBoundingClientRect().top)
              }),
              p()(d()(r), '_getHeight', function (e) {
                var t
                return r._getHeightForItemId(e.id, null === (t = e.data) || void 0 === t ? void 0 : t.type)
              }),
              p()(d()(r), '_getHeightForItemId', function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '',
                  n = r.props.assumedItemHeight,
                  i = r._heights.get(e),
                  o = Object(Se.a)(i) ? i : 'function' == typeof n ? n(t) : n
                return Ce({ cssPixels: o, dpr: r._devicePixelRatio })
              }),
              p()(d()(r), '_getDistanceFromTop', function (e) {
                var t = r.props.list,
                  n = t.findIndex(function (t) {
                    return t.id === e
                  })
                return n >= 0
                  ? t.slice(0, n).reduce(function (e, t) {
                      return r._getHeight(t) + e
                    }, 0)
                  : 0
              }),
              p()(d()(r), '_getItemsWithin', function (e) {
                return r._getFinalRenderedItems().filter(function (t) {
                  var n = t.item,
                    i = t.offset
                  return new te.a(i, r._getHeight(n)).doesIntersectWith(e)
                })
              }),
              p()(d()(r), '_measureHeights', function () {
                r._cells.forEach(function (e, t) {
                  r._heights.set(t, e.measureHeight())
                })
              }),
              p()(d()(r), '_handleAnimationStarted', function (e, t) {
                r._cellAnimations.add(e), t && (r._cellAnimationStyle = t)
              }),
              p()(d()(r), '_handleAnimationEnded', function (e) {
                r._cellAnimations.delete(e), (r._cellAnimationStyle = ye)
              }),
              p()(d()(r), '_handleItemVisible', function (e, t) {
                r._visibilityMeasurements.has(e) || r._visibilityMeasurements.set(e, t)
              }),
              p()(d()(r), '_reportVisibilityMeasurements', function () {
                if (r._visibilityMeasurements.size) {
                  var e = 0
                  r._visibilityMeasurements.forEach(function (t) {
                    return (e += t)
                  })
                  var t = Math.round(e / r._visibilityMeasurements.size),
                    n = ue.b.isDesktopOS() ? 'scroller_v3' : 'scroller_v3_mobile'
                  J.c('scroller:ttfv:'.concat(n), { duration_ms: t }), r._visibilityMeasurements.clear()
                }
              }),
              p()(d()(r), '_updateItemHeight', function (e, t) {
                r._pendingHeightUpdates.set(e, t),
                  (Object(Fe.a)(r.state.renderedItems, function (e) {
                    var t = e.itemId
                    return r._heights.has(t) || r._pendingHeightUpdates.has(t)
                  }) ||
                    r._pendingHeightUpdates.size > 50) &&
                    (r._update(), r._pendingHeightUpdates.clear())
              }),
              p()(d()(r), '_handleHeightChanged', function (e, t) {
                r._heights.get(e) !== t &&
                  (r._cellAnimations.has(e) ? r._scheduleCriticalUpdate() : r._updateItemHeight(e, t))
              }),
              p()(d()(r), '_setItemRef', function (e, t) {
                t
                  ? (r._cells.set(e, t), r._renderedItemsStatus.add(e))
                  : (r._cells.delete(e), r._renderedItemsStatus.delete(e))
              }),
              p()(d()(r), '_getRenderedItemsWithFocusability', function () {
                return r._getFinalRenderedItems().map(function (e) {
                  var t = e.item,
                    n = e.visible,
                    i = r._cells.get(t.id)
                  return { id: t.id, focusable: !(!i || !i.isFocusable()), visible: n }
                })
              }),
              p()(d()(r), '_findNewestVisibleId', function () {
                var e = r._measureRelativeViewportRect(),
                  t =
                    e &&
                    r._getFinalRenderedItems().find(function (t) {
                      var n = t.item,
                        i = t.offset
                      return new te.a(i, r._getHeight(n)).doesIntersectWith(e)
                    })
                return t && t.item.id
              }),
              p()(d()(r), 'adjustFocusBy', function (e) {
                r._hasUserChangedFocus = !0
                var t = r._getRenderedItemsWithFocusability(),
                  n =
                    r._activeEntryId &&
                    (function (e, t, n) {
                      var i = e
                        ? Object(z.a)(n, function (t) {
                            return t.id === e
                          })
                        : -1
                      if (i >= 0)
                        for (var r = i >= 0 ? i + t : 0; r >= 0 && r < n.length; r += t)
                          if (n[r].focusable) return n[r].id
                      return i >= 0 ? e : void 0
                    })(r._activeEntryId, e, t)
                if (!n) {
                  var i = r._findNewestVisibleId()
                  n = i
                    ? (function (e, t) {
                        var n,
                          i = Object(z.a)(t, function (t) {
                            return t.id === e
                          })
                        if (i >= 0) {
                          var r = t.find(function (e, t) {
                            return t >= i && e.focusable
                          })
                          n = r ? r.id : void 0
                        }
                        return n || K(t)
                      })(i, t)
                    : K(t)
                }
                n && r._updateFocusToItem(n)
              }),
              p()(d()(r), '_updateFocusToItem', function (e, t) {
                if (e !== r._activeEntryId) {
                  var n = r._getRenderedItemsWithFocusability().find(function (t) {
                      return t.visible && t.id === e
                    }),
                    i = r._cells.get(e),
                    o = i && i.getElement()
                  n &&
                    ((r._activeEntryId = e),
                    o &&
                      (function (e, t, n) {
                        var i = W.a.findDOMNode(e),
                          r = i && i instanceof window.HTMLElement && i.querySelector("a, [tabindex='0']")
                        if (r) {
                          r.scrollIntoView(n), r.focus()
                          var o = (t || E.a.root()).getRect().getTop()
                          o > 0 && window.scrollBy(0, -1 * o)
                        }
                      })(o, r.context.viewport, t))
                }
              }),
              p()(d()(r), 'scrollToNewest', function (e) {
                ;(r._hasUserChangedFocus = !0),
                  r.props.hasNewContentAtBottom
                    ? r._viewport.scrollTo(0, r.state.listHeightWithHeadroom)
                    : r._viewport.scrollToTop(),
                  e &&
                    (r._update(),
                    re()(function () {
                      var e = r._getRenderedItemsWithFocusability(),
                        t = K(e)
                      t && r._updateFocusToItem(t, { block: 'nearest' })
                    }))
              }),
              p()(d()(r), 'isAtNewest', function () {
                var e = r._measureRelativeViewportRect()
                return (
                  !e ||
                  (r.props.hasNewContentAtBottom
                    ? e.getBottom() >= r.state.listHeightWithHeadroom - 50
                    : e.getTop() <= 50)
                )
              }),
              (r._viewport = e.viewport),
              (r._devicePixelRatio = window.devicePixelRatio || 1),
              (r.state = { renderedItems: [], listHeightWithHeadroom: 0, shouldAnimate: !1 })
            var o = r.props,
              s = o.cacheKey,
              c = o.initialAnchor
            return (
              s && xe.hasOwnProperty(s) ? (r._heights = xe[s]) : ((r._heights = new Map()), (xe[s] = r._heights)),
              (r._scheduleCriticalUpdate = Object(Q.a)(function () {
                return r._update()
              }, window.requestAnimationFrame)),
              (r._scheduleUpdate = window.requestIdleCallback
                ? Object(Q.a)(function () {
                    r._update()
                  }, window.requestIdleCallback)
                : r._scheduleCriticalUpdate),
              (r._scheduleCriticalUpdateThrottled = Object(k.a)(
                function () {
                  r._scheduleCriticalUpdate()
                },
                100,
                { trailing: !0 },
              )),
              (r._scheduleUpdateDebounced = Object(Ae.a)(r._scheduleUpdate, 250)),
              (r._wasPreviouslyAtNewestEnd = !c),
              (r._removeViewportResizeHandler = r._viewport.addRectChangeListener(r._scheduleCriticalUpdateThrottled)),
              (r._shouldUseTopPositioning =
                r.context.featureSwitches.isTrue('responsive_web_scroller_top_positioning_enabled') ||
                (ue.b.isMobileOS() && ue.b.isSafari())),
              (window.scroller = d()(r)),
              r
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
                    i = t.renderedItems,
                    r = t.shouldAnimate,
                    o = this._getIsHeightsReady(i)
                  return v.a.createElement(
                    ee.a.Provider,
                    { value: this._getPositioningContext(o) },
                    v.a.createElement(
                      'div',
                      { ref: this._rootRef, style: { position: 'relative', minHeight: n } },
                      this._getFinalRenderedItems().map(function (t) {
                        var n = t.item,
                          i = t.offset,
                          o = t.visible,
                          a = {
                            top: e._shouldUseTopPositioning ? ''.concat(i, 'px') : void 0,
                            transform: e._shouldUseTopPositioning ? void 0 : 'translateY('.concat(i, 'px)'),
                          }
                        return v.a.createElement(Re, {
                          item: n,
                          key: n.id,
                          onAnimationEnded: e._handleAnimationEnded,
                          onAnimationStarted: e._handleAnimationStarted,
                          onHeightChanged: e._handleHeightChanged,
                          onVisible: e._handleItemVisible,
                          positioningStyle: a,
                          setAPI: e._setItemRef,
                          shouldAnimate: r,
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
                  return !ae()(this.props, e) || !Object(Ie.a)(this.state, t)
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
                        return e.id === ce.a
                      }) &&
                      this._getHeightForItemId(ce.a) > 0 &&
                      !this.props.centerInitialAnchor &&
                      this.scrollToNewest()
                },
              },
              {
                key: 'componentDidMount',
                value: function () {
                  var e,
                    t = this
                  ;(this._removeScrollHandler = this._viewport.addScrollListener(this._handleScroll)),
                    (this._removeProgrammaticScrollHandler = this._viewport.addProgrammaticScrollListener(
                      this._handleProgrammaticScroll,
                    )),
                    (this._removeFullscreenEnterHandler =
                      ((e = this._handleEnterFullscreen),
                      Z || G(),
                      q.add(e),
                      function () {
                        return q.delete(e)
                      })),
                    (this._removeFullscreenExitHandler = (function (e) {
                      return (
                        Z || G(),
                        X.add(e),
                        function () {
                          return X.delete(e)
                        }
                      )
                    })(this._handleExitFullscreen))
                  var n = this._getInitialRenderedItems()
                  if (
                    (this.props.isManualScrollRestoration && this._viewport.scrollBy(-1),
                    (this._isInitialAnchoring = !0),
                    n.length > 0)
                  ) {
                    var i = this._getDocumentViewportHeight()
                    this.setState({ renderedItems: n, shouldAnimate: !0, listHeightWithHeadroom: i }, function () {
                      var e = t.props.initialAnchor
                      if (e && e.type === b.Anchor)
                        t._viewport.scrollBy(t._getViewportOffsetCorrection()),
                          e.anchor.wasFocused && t._updateFocusToItem(e.anchor.id)
                      else if (e && e.type === b.FocusedItem) {
                        var n = t.props.centerInitialAnchor ? { behavior: 'smooth', block: 'center' } : void 0
                        t._updateFocusToItem(e.itemId, n)
                      }
                      window.requestAnimationFrame(function () {
                        return window.requestAnimationFrame(function () {
                          return t._scheduleCriticalUpdate()
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
        })(v.a.Component)
      p()(Ne, 'contextType', le.a),
        p()(Ne, 'defaultProps', {
          centerInitialAnchor: !1,
          nearEndProximityRatio: 1.75,
          nearStartProximityRatio: 0.25,
          assumedItemHeight: 400,
          hasNewContentAtBottom: !1,
          minimumOffscreenToViewportRatio: 0.5,
          preferredOffscreenToViewportRatio: 2.5,
        })
      var Ve,
        Me = Object(de.a)(Ne),
        je = function (e, t) {
          if (e.length)
            return e.reduce(function (e, n) {
              return t(n, e) > 0 ? n : e
            })
        },
        Be = function (e, t) {
          var n = t * e.getHeight()
          return new te.a(e.getTop() - n, e.getHeight() + 2 * n)
        },
        ke = function () {
          Ve = !1
        },
        Le = (function (e) {
          h()(n, e)
          var t = m()(n)
          function n(e, i) {
            var o
            a()(this, n),
              (o = t.call(this, e, i)),
              p()(d()(o), '_renderer', v.a.createRef()),
              p()(d()(o), '_isModal', !1),
              p()(
                d()(o),
                '_getList',
                Object(B.a)(function (e, t, n, i, o, a, s) {
                  var c = []
                  return (
                    e &&
                      c.push(
                        w(
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
                      r()(
                        n.map(function (e) {
                          return w(a(e), e, i, !o || o(e), s && s(e))
                        }),
                      ),
                    ),
                    t &&
                      c.push(
                        w(
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
              p()(d()(o), '_render', function (e) {
                var t,
                  n = e.isModal,
                  i = o.props,
                  r = i.anchoring,
                  a = i.assumedItemHeight,
                  s = i.cacheKey,
                  c = i.canBeAnchorFunction,
                  u = i.centerInitialAnchor,
                  d = i.footer,
                  l = i.hasNewContentAtBottom,
                  h = i.header,
                  f = i.identityFunction,
                  m = i.initialAnchor,
                  _ = i.items,
                  g = i.renderer,
                  I = i.sortIndexFunction,
                  w = i.withKeyboardShortcuts,
                  b = i.withoutHeadroom,
                  T = o._scrollRestorationAnchor[s],
                  S = T ? y(T) : m ? R(m.id) : void 0
                return (
                  n && ((o._isModal = !0), (Ve = !0)),
                  v.a.createElement(
                    H.a,
                    {
                      enabled: w,
                      handlers:
                        ((t = {}),
                        p()(t, A.e.refresh, o._handleKeyboardRefresh),
                        p()(t, A.e.nextItem, o._handleKeyboardFocusNext),
                        p()(t, A.e.previousItem, o._handleKeyboardFocusPrevious),
                        t),
                    },
                    v.a.createElement(Me, {
                      assumedItemHeight: a,
                      cacheKey: s,
                      centerInitialAnchor: u,
                      hasNewContentAtBottom: l,
                      initialAnchor: S,
                      isManualScrollRestoration: window.history && 'manual' === window.history.scrollRestoration,
                      key: s,
                      list: o._getList(h, d, _, g, c, f, I),
                      onPositionUpdate: o._handlePositionUpdate,
                      onScrollEnd: o._handleScrollEnd,
                      pinToNewestWhenAtNewest: r.pinToNewestWhenAtNewest,
                      ref: o._renderer,
                      viewport: o._viewport,
                      withoutHeadroom: b,
                    }),
                  )
                )
              }),
              p()(d()(o), '_handleScrollEnd', function () {
                o.props.onScrollEnd && o.props.onScrollEnd()
              }),
              p()(d()(o), '_handlePositionUpdate', function (e) {
                var t = o.props.onItemsRendered
                o._edgeProximity.handlePositioningUpdate(e),
                  t && t({ positions: e.getRenderedItems(), viewport: e.getForViewport() }),
                  o._preservePosition(o._customLocation)
              }),
              p()(d()(o), '_shouldPreventKeyboardShortcuts', function () {
                return Ve && !o._isModal
              }),
              p()(
                d()(o),
                '_handleKeyboardRefresh',
                Object(k.a)(function () {
                  var e = o.props.onKeyboardRefresh
                  o._shouldPreventKeyboardShortcuts() || (e && e())
                }, 1e3),
              ),
              p()(d()(o), '_handleKeyboardFocusNext', function () {
                !o._shouldPreventKeyboardShortcuts() && o.adjustFocusBy(1)
              }),
              p()(d()(o), '_handleKeyboardFocusPrevious', function () {
                !o._shouldPreventKeyboardShortcuts() && o.adjustFocusBy(-1)
              }),
              p()(d()(o), 'isAtNewest', function () {
                return !o._renderer.current || o._renderer.current.isAtNewest()
              })
            var s = e.nearEndProximityRatio,
              c = e.nearStartProximityRatio
            return (
              (o._edgeProximity = new M([
                {
                  condition: F(5),
                  callback: function (e) {
                    return o.props.onAtStart(e)
                  },
                },
                {
                  condition: x(c),
                  callback: function (e) {
                    return o.props.onNearStart(e)
                  },
                },
                {
                  condition: C(s),
                  callback: function (e) {
                    return o.props.onNearEnd(e)
                  },
                },
                {
                  condition: P(5),
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
                  return t.length ? v.a.createElement(T.b.Consumer, null, this._render) : n()
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
                    i = t.onPositionRestored
                  n !== e.cacheKey && i()
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
                  this._isModal && (Ve = !1)
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
                  var i = []
                  if (this._customLocation) {
                    var r = this._customLocation.getSavedPosition()
                    ;(i = r && r.length ? r : []).length > 0 &&
                      this._customLocation &&
                      this._customLocation.claimScrollRestoration()
                  }
                  var o =
                    i.find(function (t) {
                      var n = t.id
                      return (
                        t.wasFocused &&
                        e.items.some(function (t) {
                          return e.identityFunction(t) === n
                        })
                      )
                    }) ||
                    i.find(function (t) {
                      t.distanceToViewportTop
                      var n = t.id
                      return e.items.some(function (t) {
                        return e.identityFunction(t) === n
                      })
                    })
                  this._scrollRestorationAnchor = p()({}, e.cacheKey, o)
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
        })(v.a.PureComponent)
      p()(Le, 'contextTypes', { viewport: j.object, getCustomLocation: j.func }),
        p()(Le, 'defaultProps', {
          anchoring: S.a,
          centerInitialAnchor: !1,
          hasNewContentAtBottom: !1,
          onPositionRestored: L.a,
          onAtEnd: L.a,
          onAtStart: L.a,
          onNearEnd: L.a,
          onNearStart: L.a,
          onScrollEnd: L.a,
          nearEndProximityRatio: 1.75,
          nearStartProximityRatio: 0.25,
          noItemsRenderer: U.a,
          assumedItemHeight: 400,
          minimumOffscreenToViewportRatio: 0.5,
          preferredOffscreenToViewportRatio: 2.5,
          withoutHeadroom: !1,
          withKeyboardShortcuts: !1,
        })
    },
    XygZ: function (e, t, n) {
      'use strict'
      var i = n('ax0f'),
        r = n('gIHd')
      i(
        { target: 'String', proto: !0, forced: n('sHxg')('anchor') },
        {
          anchor: function (e) {
            return r(this, 'a', 'name', e)
          },
        },
      )
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
      var i = n('aWyx'),
        r = function (e, t) {
          return {
            entry: { id: t, time: '', type: e },
            isActive: !1,
            isRapidFire: !1,
            isFirstRapidFire: !1,
            isLastRapidFire: !1,
            type: e,
          }
        },
        o = r(i.b.CONVERSATION_PROFILE_INFO_HEADER, 'conversationProfileInfoHeader'),
        a = 'typingIndicator',
        s = r(i.b.TYPING_INDICATOR, a),
        c = r(i.b.READ_ONLY_INDICATOR, 'readOnlyIndicator')
    },
    jHwr: function (e, t, n) {
      'use strict'
      t.a = function (e, t) {
        var n = null,
          i = function () {
            ;(n = null), e()
          }
        return function () {
          return n || (n = t(i)), n
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
