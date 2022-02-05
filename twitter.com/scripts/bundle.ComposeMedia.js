;(window.webpackJsonp = window.webpackJsonp || []).push([
  [43],
  {
    '07FG': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      })
      var r = n('cnVF'),
        a = function (e) {
          return e === r.B
        }
    },
    '21U8': function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        i = n('Y9Ll'),
        o = n.n(i),
        c = n('1Pcy'),
        s = n.n(c),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('N+ot'),
        p = n.n(d),
        f = n('AuHH'),
        h = n.n(f),
        m = n('KEM+'),
        v = n.n(m),
        g = (n('Rqga'), n('2G9S'), n('ERkP')),
        b = n.n(g),
        y = n('/yvb'),
        _ = n('3XMw'),
        w = n.n(_),
        E = n('3rX5'),
        O = n('rHpw'),
        M = n('MWbm'),
        S = O.a.create(function (e) {
          return {
            mask: {
              backgroundColor: 'transparent',
              borderWidth: e.spaces.space4,
              borderColor: e.colors.primary,
              boxShadow: '0 0 0 9999px '.concat(e.colors.activeFaintGray),
            },
            circle: { borderRadius: e.borderRadii.infinite },
          }
        }),
        P = function (e) {
          var t = e.circle,
            n = e.height,
            r = e.width
          return b.a.createElement(M.a, {
            pointerEvents: 'none',
            style: [S.mask, { width: r, height: n }, t && S.circle],
          })
        },
        C = n('ZvMt'),
        T = n('97Jx'),
        R = n.n(T),
        j = n('m3Bd'),
        x = n.n(j),
        I = n('CHgo'),
        D = n('7ep7')
      function k(e) {
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
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var A = (function (e) {
          u()(n, e)
          var t = k(n)
          function n(e) {
            var r
            return (
              a()(this, n),
              (r = t.call(this, e)),
              v()(s()(r), '_previousTouchDistance', 0),
              v()(s()(r), '_previousPositionX', 0),
              v()(s()(r), '_previousPositionY', 0),
              v()(s()(r), '_centerPosition', { x: 0, y: 0 }),
              v()(s()(r), '_panResponder', {}),
              v()(s()(r), '_setRef', function (e) {
                var t = r.props,
                  n = t.onPanEnd,
                  a = t.onPanMove,
                  i = t.onPinchMove,
                  o = t.onWheel
                if (e) {
                  ;(a || n || i) && (r._removeTouchMoveToScrollListener = Object(I.a)(e, r._preventDefaultEvent, !1)),
                    o && (r._removeScrollToScaleListener = Object(I.b)(e, r._preventDefaultEvent, !1))
                  var c = e.getBoundingClientRect()
                  r._centerPosition = { x: c.width / 2 + c.left, y: c.height / 2 + c.top }
                }
              }),
              v()(s()(r), '_preventDefaultEvent', function (e) {
                e.preventDefault()
              }),
              v()(s()(r), '_handlePanResponderMove', function (e, t) {
                var n,
                  a,
                  i = r.props,
                  o = i.onPanMove,
                  c = i.onPinchMove,
                  s = e.nativeEvent.touches
                if (2 === t.numberActiveTouches) {
                  if (c) {
                    var l =
                        ((n = s[0]),
                        (a = s[1]),
                        Math.sqrt(Math.pow(n.pageY - a.pageY, 2) + Math.pow(n.pageX - a.pageX, 2))),
                      u = (function (e, t) {
                        return {
                          pageX: Math.min(t.pageX, e.pageX) + Math.abs(t.pageX - e.pageX) / 2,
                          pageY: Math.min(t.pageY, e.pageY) + Math.abs(t.pageY - e.pageY) / 2,
                        }
                      })(s[0], s[1]),
                      d = u.pageX,
                      p = u.pageY,
                      f = r._previousPositionX ? d - r._previousPositionX : 0,
                      h = r._previousPositionY ? p - r._previousPositionY : 0,
                      m = r._previousTouchDistance ? l - r._previousTouchDistance : 0
                    ;(r._previousPositionX = d), (r._previousPositionY = p), (r._previousTouchDistance = l)
                    var v = r._centerPosition
                    c(m, v.x - d, v.y - p, f, h)
                  }
                } else o && o(t.dx, t.dy)
                document.addEventListener('selectstart', r._preventDefaultEvent, !1)
              }),
              v()(s()(r), '_handlePanResponderEnd', function (e, t) {
                r.props.onPanEnd && r.props.onPanEnd(t.dx, t.dy),
                  r.props.onPinchMove && (r._previousTouchDistance = 0),
                  (r._previousPositionX = 0),
                  (r._previousPositionY = 0),
                  r._removeSelectStartListener()
              }),
              v()(s()(r), '_handleWheel', function (e) {
                var t = e.clientX,
                  n = e.clientY,
                  a = e.deltaX,
                  i = e.deltaY,
                  o = r._centerPosition,
                  c = o.x - t,
                  s = o.y - n
                r.props.onWheel && r.props.onWheel(a, i, c, s)
              }),
              (r._panResponder = D.a.create({
                onStartShouldSetPanResponder: function () {
                  return !0
                },
                onMoveShouldSetPanResponder: function () {
                  return !0
                },
                onPanResponderMove: r._handlePanResponderMove,
                onPanResponderRelease: r._handlePanResponderEnd,
                onPanResponderTerminate: r._handlePanResponderEnd,
              })),
              (r._removeSelectStartListener = function () {
                return document.removeEventListener('selectstart', r._preventDefaultEvent, !1)
              }),
              r
            )
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t =
                      (e.children,
                      e.onPanEnd,
                      e.onPanMove,
                      e.onPinchMove,
                      e.onWheel,
                      x()(e, ['children', 'onPanEnd', 'onPanMove', 'onPinchMove', 'onWheel']))
                  return b.a.createElement(
                    M.a,
                    R()({}, t, { onWheel: this._handleWheel, ref: this._setRef }, this._panResponder.panHandlers),
                    this.props.children,
                  )
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._removeTouchMoveToScrollListener && this._removeTouchMoveToScrollListener(),
                    this._removeScrollToScaleListener && this._removeScrollToScaleListener(),
                    this._removeSelectStartListener()
                },
              },
            ]),
            n
          )
        })(b.a.Component),
        L = n('9RkS'),
        B = n('rOXj'),
        W = n('aITJ'),
        F = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('Lsrn')),
        U = n('k/Ka')
      function H(e, t) {
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
      function z(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? H(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : H(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var V = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(U.a)(
          'svg',
          z(
            z({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [F.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          b.a.createElement(
            'g',
            null,
            b.a.createElement('path', {
              d: 'M19.75 19.944H4.25c-1.24 0-2.25-1.01-2.25-2.25V6.306c0-1.24 1.01-2.25 2.25-2.25h15.5c1.24 0 2.25 1.01 2.25 2.25v11.39c0 1.24-1.01 2.248-2.25 2.248zM4.25 5.556c-.413 0-.75.337-.75.75v11.39c0 .412.337.75.75.75h15.5c.413 0 .75-.338.75-.75V6.305c0-.413-.337-.75-.75-.75H4.25z',
            }),
          ),
        )
      }
      V.metadata = { width: 24, height: 24 }
      var G = V
      function K(e, t) {
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
      function N(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? K(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : K(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var X = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(U.a)(
          'svg',
          N(
            N({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [F.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          b.a.createElement(
            'g',
            null,
            b.a.createElement('path', {
              d: 'M19.75 19.89H4.25C3.01 19.89 2 18.88 2 17.64v-7.28c0-1.24 1.01-2.25 2.25-2.25h15.5c1.24 0 2.25 1.01 2.25 2.25v7.277c0 1.24-1.01 2.25-2.25 2.25zM4.25 9.61c-.413 0-.75.338-.75.75v7.278c0 .413.337.75.75.75h15.5c.413 0 .75-.337.75-.75V10.36c0-.412-.337-.75-.75-.75H4.25z',
            }),
          ),
        )
      }
      X.metadata = { width: 24, height: 24 }
      var Z = X
      function Y(e, t) {
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
      function q(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Y(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Y(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var J = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(U.a)(
          'svg',
          q(
            q({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [F.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          b.a.createElement(
            'g',
            null,
            b.a.createElement('path', {
              d: 'M19.75 22H4.25C3.01 22 2 20.99 2 19.75V4.25C2 3.01 3.01 2 4.25 2h15.5C20.99 2 22 3.01 22 4.25v15.5c0 1.24-1.01 2.25-2.25 2.25zM4.25 3.5c-.413 0-.75.337-.75.75v15.5c0 .413.337.75.75.75h15.5c.413 0 .75-.337.75-.75V4.25c0-.413-.337-.75-.75-.75H4.25z',
            }),
          ),
        )
      }
      J.metadata = { width: 24, height: 24 }
      var Q = J
      function $(e, t) {
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
      function ee(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? $(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : $(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var te = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(U.a)(
          'svg',
          ee(
            ee({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [F.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          b.a.createElement(
            'g',
            null,
            b.a.createElement('path', {
              d: 'M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z',
            }),
            b.a.createElement('path', {
              d: 'M15.21 11c0 .41-.34.75-.75.75h-2.71v2.71c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2.71H7.54c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.71V7.54c0-.41.34-.75.75-.75s.75.34.75.75v2.71h2.71c.41 0 .75.34.75.75z',
            }),
          ),
        )
      }
      te.metadata = { width: 24, height: 24 }
      var ne = te
      function re(e, t) {
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
      function ae(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? re(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : re(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var ie = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(U.a)(
          'svg',
          ae(
            ae({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [F.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          b.a.createElement(
            'g',
            null,
            b.a.createElement('path', {
              d: 'M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z',
            }),
            b.a.createElement('path', {
              d: 'M14.46 11.75H7.54c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h6.92c.415 0 .75.336.75.75s-.335.75-.75.75z',
            }),
          ),
        )
      }
      ie.metadata = { width: 24, height: 24 }
      var oe = ie
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
          var n,
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var se = w.a.d85bc1b8,
        le = w.a.f596ace8,
        ue = w.a.df031fca,
        de = w.a.b40332c5,
        pe = w.a.e547b368,
        fe = w.a.f7571204,
        he = w.a.e6e16811,
        me =
          Math.log2 ||
          function (e) {
            return Math.log(e) * Math.LOG2E
          },
        ve = (function (e) {
          u()(n, e)
          var t = ce(n)
          function n(e) {
            var r, i
            return (
              a()(this, n),
              (r = t.call(this, e)),
              v()(s()(r), '_previousLeft', 0),
              v()(s()(r), '_previousTop', 0),
              v()(s()(r), '_panStyles', { top: 0, left: 0 }),
              v()(s()(r), '_shouldShowZoomControl', function () {
                return (!W.b.isMobileOS() || !B.a.isTouchSupported()) && r.props.withZoomControl
              }),
              v()(s()(r), '_renderControls', function () {
                var e = r.props,
                  t = e.image,
                  n = e.withAspectRatioOptions,
                  a = r.state.aspectRatio,
                  i = t.width / t.height,
                  o = r._shouldShowZoomControl()
                return n || o
                  ? b.a.createElement(
                      M.a,
                      { style: ge.controlsContainer },
                      n
                        ? b.a.createElement(
                            M.a,
                            { style: ge.ratioContainer },
                            b.a.createElement(y.a, {
                              accessibilityLabel: le,
                              borderColor: 'transparent',
                              color: a === i ? 'primary' : 'gray700',
                              hoverLabel: { label: pe },
                              icon: b.a.createElement(G, null),
                              onPress: r._setAspectRatio(i),
                              size: 'medium',
                            }),
                            b.a.createElement(y.a, {
                              accessibilityLabel: ue,
                              borderColor: 'transparent',
                              color: a === 16 / 9 ? 'primary' : 'gray700',
                              hoverLabel: { label: fe },
                              icon: b.a.createElement(Z, null),
                              onPress: r._setAspectRatio(16 / 9),
                              size: 'medium',
                            }),
                            b.a.createElement(y.a, {
                              accessibilityLabel: de,
                              borderColor: 'transparent',
                              color: 1 === a ? 'primary' : 'gray700',
                              hoverLabel: { label: he },
                              icon: b.a.createElement(Q, null),
                              onPress: r._setAspectRatio(1),
                              size: 'medium',
                            }),
                          )
                        : null,
                      o
                        ? b.a.createElement(
                            M.a,
                            { style: ge.zoomContainer },
                            b.a.createElement(L.a, {
                              accessibilityLabel: se,
                              max: r._maxScale,
                              maxIcon: b.a.createElement(ne, { style: ge.icon }),
                              min: 0,
                              minIcon: b.a.createElement(oe, { style: ge.icon }),
                              onChange: r._handleScaleChange,
                              step: 'any',
                              value: r.state.imageScale,
                            }),
                          )
                        : null,
                    )
                  : null
              }),
              v()(s()(r), '_setImageRef', function (e) {
                r._imageRef = e
              }),
              v()(s()(r), '_handleScaleChange', function (e) {
                r.setState({ imageScale: e })
              }),
              v()(s()(r), '_getImageDimensions', function () {
                var e = r.state.imageScale,
                  t = r.props.image.width / r.props.image.height,
                  n = r._getMaskDimensions(),
                  a = n.height,
                  i = n.width,
                  o = C.a.getCoverDimensions({ width: i, height: a }, t),
                  c = o.height
                return { width: o.width * Math.pow(2, e), height: c * Math.pow(2, e) }
              }),
              v()(s()(r), '_getMaskDimensions', function () {
                var e = r.state,
                  t = e.aspectRatio,
                  n = e.containerHeight,
                  a = e.containerWidth,
                  i = C.a.getContainDimensions({ width: a - 50, height: n - 50 }, t),
                  o = i.height
                return { width: i.width, height: o }
              }),
              v()(s()(r), '_handleLayout', function (e) {
                var t = e.nativeEvent.layout,
                  n = t.height,
                  a = t.width
                r.state.containerHeight || r.state.containerWidth
                  ? r.setState({ containerHeight: n, containerWidth: a })
                  : (r.setState({ containerHeight: n, containerWidth: a }), r._setDefaultCropData())
              }),
              v()(s()(r), '_setDefaultCropData', function () {
                var e = r.props,
                  t = e.defaultCropData,
                  n = e.image
                if (t) {
                  var a = r._getImageDimensions().width,
                    i = r._getMaskDimensions().width,
                    o = a / n.width,
                    c = me(i / (t.width * o))
                  r.setState({ imageScale: c })
                  var s = r._getUnscaledCropData(),
                    l = s.left,
                    u = s.top
                  ;(r._panStyles.top = u - t.top * o * Math.pow(2, c)),
                    (r._previousTop = r._panStyles.top),
                    (r._panStyles.left = l - t.left * o * Math.pow(2, c)),
                    (r._previousLeft = r._panStyles.left),
                    r._updateNativeStyles()
                }
              }),
              v()(s()(r), '_handleWheel', function (e, t, n, a) {
                var i = (-1 * t) / 500
                r.setState(function (e) {
                  var t = e.imageScale,
                    o = Math.min(r._maxScale, Math.max(t + i, 0))
                  return (
                    (r._panStyles.left += n * (o - t)),
                    (r._panStyles.top += a * (o - t)),
                    (r._previousLeft = r._panStyles.left),
                    (r._previousTop = r._panStyles.top),
                    { imageScale: o }
                  )
                })
              }),
              v()(s()(r), '_handlePanMove', function (e, t) {
                ;(r._panStyles.left = r._previousLeft + e),
                  (r._panStyles.top = r._previousTop + t),
                  r._updateNativeStyles(),
                  r._adjustToInBounds()
              }),
              v()(s()(r), '_handlePanEnd', function (e, t) {
                ;(r._previousLeft = r._panStyles.left), (r._previousTop = r._panStyles.top)
              }),
              v()(s()(r), '_handlePinchMove', function (e, t, n, a, i) {
                var o = e / 200
                r.setState(function (e) {
                  var c = e.imageScale,
                    s = Math.min(r._maxScale, Math.max(c + o, 0))
                  return (
                    (r._panStyles.left += t * (s - c) + a),
                    (r._panStyles.top += n * (s - c) + i),
                    (r._previousLeft = r._panStyles.left),
                    (r._previousTop = r._panStyles.top),
                    { imageScale: s }
                  )
                })
              }),
              v()(s()(r), '_adjustToInBounds', function () {
                var e = r._getUnscaledCropData(),
                  t = r._getImageDimensions(),
                  n = e.left,
                  a = e.top,
                  i = e.left + e.width - t.width,
                  o = e.top + e.height - t.height,
                  c = !1
                n < 0 && ((c = !0), (r._panStyles.left += n), (r._previousLeft += n)),
                  a < 0 && ((c = !0), (r._panStyles.top += a), (r._previousTop += a)),
                  i > 0 && ((c = !0), (r._panStyles.left += i), (r._previousLeft += i)),
                  o > 0 && ((c = !0), (r._panStyles.top += o), (r._previousTop += o)),
                  c && r._updateNativeStyles()
              }),
              v()(s()(r), '_updateNativeStyles', function () {
                var e = r._panStyles,
                  t = e.left,
                  n = e.top
                r._imageRef &&
                  r._imageRef.setNativeProps({
                    style: { transform: [{ translate3d: ''.concat(t, 'px, ').concat(n, 'px, 0') }] },
                  })
              }),
              v()(s()(r), '_getUnscaledCropData', function () {
                var e = r._getImageDimensions(),
                  t = e.height,
                  n = e.width,
                  a = r._getMaskDimensions(),
                  i = a.height,
                  o = a.width,
                  c = r._panStyles,
                  s = c.left
                return { top: (t - i) / 2 - c.top, left: (n - o) / 2 - s, width: o, height: i }
              }),
              v()(s()(r), '_setAspectRatio', function (e) {
                return function () {
                  r.setState({ aspectRatio: e })
                }
              }),
              (r.state = {
                aspectRatio: e.defaultAspectRatio || e.image.width / e.image.height,
                imageScale: 0,
                containerHeight: 0,
                containerWidth: 0,
              }),
              (r._maxScale = ((i = e.image), Math.max(Math.min(me(i.width / 150), me(i.height / 150), 3), 0.5))),
              r
            )
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.circle,
                    n = e.image,
                    r = e.withZoomControl,
                    a = this._getImageDimensions(),
                    i = a.height,
                    o = a.width,
                    c = this._getMaskDimensions(),
                    s = c.height,
                    l = c.width,
                    u = this.state.containerWidth && this.state.containerHeight
                  return b.a.createElement(
                    M.a,
                    { style: ge.container },
                    b.a.createElement(
                      A,
                      {
                        onLayout: this._handleLayout,
                        onPanEnd: this._handlePanEnd,
                        onPanMove: this._handlePanMove,
                        onPinchMove: r ? this._handlePinchMove : void 0,
                        onWheel: r ? this._handleWheel : void 0,
                        style: ge.root,
                      },
                      u
                        ? b.a.createElement(
                            b.a.Fragment,
                            null,
                            b.a.createElement(E.a, {
                              ref: this._setImageRef,
                              source: { uri: n.src, width: o, height: i },
                              style: ge.image,
                            }),
                            b.a.createElement(P, { circle: t, height: s, width: l }),
                          )
                        : null,
                    ),
                    u ? this._renderControls() : null,
                  )
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e, t) {
                  this._updateNativeStyles(), this._adjustToInBounds()
                },
              },
              {
                key: 'getCropData',
                value: function () {
                  var e = this._getImageDimensions().width,
                    t = this.props.image.width / e,
                    n = this._getUnscaledCropData()
                  return {
                    aspectRatio: this.state.aspectRatio,
                    top: Math.round(t * n.top),
                    left: Math.round(t * n.left),
                    width: Math.round(t * n.width),
                    height: Math.round(t * n.height),
                  }
                },
              },
            ]),
            n
          )
        })(b.a.Component)
      v()(ve, 'defaultProps', { circle: !1, withZoomControl: !0 })
      var ge = O.a.create(function (e) {
        return {
          container: { flexGrow: 1, flexShrink: 1 },
          controlsContainer: {
            backgroundColor: e.colors.navigationBackground,
            minHeight: e.spaces.space20,
            flexDirection: 'row',
            paddingVertical: e.spaces.space4,
            alignSelf: 'stretch',
            justifyContent: 'center',
            alignItems: 'center',
          },
          ratioContainer: {
            flexBasis: 0,
            flexGrow: 1,
            flexShrink: 0,
            flexDirection: 'row',
            justifyContent: 'space-around',
          },
          zoomContainer: {
            flexBasis: 0,
            flexGrow: 1,
            flexShrink: 1,
            justifyContent: 'center',
            height: e.spaces.space40,
            paddingHorizontal: e.spaces.space20,
            maxWidth: 400,
          },
          root: {
            flexGrow: 1,
            flexShrink: 1,
            overflow: 'hidden',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'move',
          },
          image: { position: 'absolute' },
          icon: { color: e.colors.gray700 },
        }
      })
      t.a = ve
    },
    '2prg': function (e, t, n) {
      var r = n('ZORK')
      e.exports = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(r)
    },
    '8A5z': function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        i = n('ERkP'),
        o = n.n(i),
        c = n('Lsrn'),
        s = n('k/Ka')
      function l(e, t) {
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
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var d = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(s.a)(
          'svg',
          u(
            u({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [c.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          o.a.createElement(
            'g',
            null,
            o.a.createElement('path', {
              d: 'M9.008 15.205c-1.766 0-3.187-1.35-3.187-3.196v-.02c0-1.8 1.388-3.214 3.26-3.214 1.26 0 2.075.53 2.62 1.29L10.494 11c-.306-.42-.798-.695-1.357-.695-.93 0-1.684.754-1.684 1.684s.755 1.684 1.685 1.684c.578 0 1.087-.292 1.39-.735l1.22.87c-.583.802-1.368 1.394-2.737 1.394h-.002zm6.582 0c-1.764 0-3.185-1.35-3.185-3.196v-.02c0-1.8 1.386-3.214 3.258-3.214 1.262 0 2.075.53 2.622 1.29l-1.21.935c-.305-.42-.797-.694-1.356-.694-.93 0-1.685.754-1.685 1.684s.754 1.685 1.684 1.685c.577 0 1.086-.292 1.39-.735l1.22.87c-.584.803-1.37 1.395-2.738 1.395z',
            }),
            o.a.createElement('path', {
              d: 'M20.5 2.02h-17c-1.24 0-2.25 1.007-2.25 2.247v15.507c0 1.238 1.01 2.246 2.25 2.246h17c1.24 0 2.25-1.008 2.25-2.246V4.267c0-1.24-1.01-2.247-2.25-2.247zm.75 17.754c0 .41-.336.746-.75.746h-17c-.414 0-.75-.336-.75-.746V4.267c0-.412.336-.747.75-.747h17c.414 0 .75.335.75.747v15.507z',
            }),
          ),
        )
      }
      ;(d.metadata = { width: 24, height: 24 }), (t.a = d)
    },
    CDB5: function (e, t, n) {
      'use strict'
      n.d(t, 'm', function () {
        return T
      }),
        n.d(t, 'l', function () {
          return j
        }),
        n.d(t, 'f', function () {
          return I
        }),
        n.d(t, 'd', function () {
          return k
        }),
        n.d(t, 'g', function () {
          return A
        }),
        n.d(t, 'e', function () {
          return B
        }),
        n.d(t, 'i', function () {
          return F
        }),
        n.d(t, 'j', function () {
          return U
        }),
        n.d(t, 'k', function () {
          return H
        }),
        n.d(t, 'h', function () {
          return z
        }),
        n.d(t, 'a', function () {
          return G
        }),
        n.d(t, 'b', function () {
          return N
        }),
        n.d(t, 'c', function () {
          return Y
        })
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('RhWx'),
        a = n.n(r),
        i = n('ddV6'),
        o = n.n(i),
        c = n('m3Bd'),
        s = n.n(c),
        l = n('KEM+'),
        u = n.n(l),
        d =
          (n('7x/C'),
          n('DZ+c'),
          n('7xRU'),
          n('JtPf'),
          n('87if'),
          n('lTEL'),
          n('kYxP'),
          n('2G9S'),
          n('1IsZ'),
          n('AspN')),
        p = n('xPna'),
        f = n('oEOe'),
        h = n('xCUF'),
        m = n('ude7'),
        v = n('07FG'),
        g = n('Ssj5'),
        b = n('fEA7'),
        y = n.n(b),
        _ = n('uKEd'),
        w = n('lnti'),
        E = n('/NU0')
      function O(e, t) {
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
      function M(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? O(Object(n), !0).forEach(function (t) {
                u()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : O(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var S = 'dmComposer',
        P = {}
      var C = function (e) {
          var t = e.conversation_id,
            n = e.id,
            r = e.localMediaId,
            a = e.recipient_ids,
            i = e.sender_id,
            o = e.text,
            c = e.attachment,
            s = void 0 === c ? {} : c,
            l = e.error,
            u = Date.now().toString()
          return {
            conversation_id: t,
            recipient_ids: a,
            error: l,
            id: n,
            is_draft: !0,
            message_data: { attachment: s, localMediaId: r, sender_id: i, text: o, time: u },
            type: 'message',
            time: u,
          }
        },
        T = function (e) {
          return function (t, n, r) {
            var i = r.api,
              c = e || {},
              l = c.senderId,
              u = c.cardUrl,
              g = c.conversationId,
              b = c.localMediaId,
              O = c.recipients,
              S = void 0 === O ? [] : O,
              P = c.requestId,
              T = void 0 === P ? y.a.v1() : P,
              R = c.tweetAttachment,
              j = c.quickReply,
              x = s()(c, [
                'senderId',
                'cardUrl',
                'conversationId',
                'localMediaId',
                'recipients',
                'requestId',
                'tweetAttachment',
                'quickReply',
              ])
            t(J(g))
            var I = n(),
              D = b || W(n(), g),
              A = d.k(I, D),
              L = o()(A, 1)[0] || {},
              B = L.mediaFile,
              F = L.mediaMetadata,
              U = S.length > 0 && S.join(','),
              H = {}
            B && B.isGif
              ? (H.extraInitParams = '&media_category=dm_gif')
              : B && B.isVideo && (H.extraInitParams = '&media_category=dm_video')
            var V = d.p(D, H),
              G = [t(V)],
              K = (z(I, g) || {}).found_media_origin
            return (
              B && B.isGif && G.push(Object(m.a)(B)),
              Promise.all(G).then(
                function (n) {
                  var r = o()(n, 2),
                    c = o()(r[0], 1)[0],
                    s = r[1],
                    m = (null == F ? void 0 : F.altText) || (null == F ? void 0 : F.defaultAltText),
                    b = !!m
                  return (
                    c && (K || b)
                      ? t(d.m(M({ media_id: c.uploadId, found_media_origin: K }, !!b && { alt_text: { text: m } })))
                      : Promise.resolve()
                  ).then(
                    function () {
                      var n = (R || {}).id_str,
                        r = {}
                      if (c) {
                        var o = c.mediaFile,
                          d = void 0 === o ? {} : o,
                          m = {
                            original_info: { width: d.width, height: d.height },
                            sizes: [{ h: d.height, w: d.width, resize: 'fit' }],
                          }
                        d.isImage
                          ? (r.photo = M(M({}, m), {}, { media_url_https: d.url }))
                          : d.isGif
                          ? (r.animated_gif = M(M({}, m), {}, { media_url_https: s, type: 'animated_gif' }))
                          : d.isVideo && (r.video = M(M({}, m), {}, { media_url_https: d.url, type: 'video' }))
                      } else R && (r.tweet = { status: n })
                      var b = (c || {}).uploadId,
                        y = C({
                          attachment: r,
                          conversation_id: g,
                          id: T,
                          recipient_ids: U,
                          sender_id: l,
                          text: e.text,
                        }),
                        O = M(
                          M(
                            M(M({}, x), Object(v.a)(u) && { card_uri: u }),
                            {},
                            { conversation_id: g },
                            !n && { media_id: b },
                          ),
                          {},
                          { recipient_ids: U, request_id: T, tweet_id: n },
                        )
                      j &&
                        ((O['quick_reply_response[options][id]'] = j.id),
                        (O['quick_reply_response[options][selected_id]'] = j.selected_id))
                      var S = Object(w.a)([
                        $(g),
                        { type: h.c.REQUEST },
                        { type: 'rweb/dmComposer/SEND_MESSAGE_REQUEST' },
                        g && Object(_.b)(g, T, y),
                      ])
                      return (
                        t(S),
                        i.DirectMessages.sendMessage(O).then(
                          function (n) {
                            var r = n.entities,
                              i = r.cards,
                              o = r.entries,
                              c = r.tweets,
                              s = r.users,
                              l = n.result.conversations
                            Object(E.a)(D) && t(Y(g, D))
                            var u = Object(w.a)(
                              [{ type: h.c.SUCCESS }].concat(
                                a()(Object(p.a)({ conversations: l, entries: o, users: s, tweets: c, cards: i })),
                                [{ type: 'rweb/dmComposer/SEND_MESSAGE_SUCCESS' }, g && Object(_.j)(g, T, e), k(g)],
                              ),
                            )
                            return t(u), Promise.resolve(Object.values(n.entities.entries)[0].conversation_id)
                          },
                          function (n) {
                            var a = C({
                                attachment: r,
                                conversation_id: g,
                                error: !0,
                                id: T,
                                localMediaId: D,
                                recipient_ids: U,
                                sender_id: l,
                                text: e.text,
                              }),
                              i = Object(w.a)([
                                { type: h.c.SUCCESS },
                                { type: 'rweb/dmComposer/SEND_MESSAGE_FAILURE' },
                                g && Object(_.b)(g, T, a),
                              ])
                            return t(i), Object(f.e)(t, n, 'ACTION_SEND_DM')
                          },
                        )
                      )
                    },
                    function (e) {
                      return t(te(g)), (e.type = 'metadata'), Promise.reject(e)
                    },
                  )
                },
                function (e) {
                  return t(Object(w.a)([Object(E.a)(D) && Y(g, D), te(g)])), Promise.reject(e)
                },
              )
            )
          }
        },
        R = function (e, t) {
          return e.dmComposer[t]
        },
        j = function (e, t) {
          var n = R(e, t)
          return n ? n.text : null
        },
        x = 'rweb/dmComposer/SAVE_TEXT',
        I = function (e, t) {
          return { type: x, conversationId: e, text: t }
        },
        D = 'rweb/dmComposer/REMOVE_TEXT',
        k = function (e) {
          return { type: D, conversationId: e }
        },
        A = function (e, t) {
          var n = R(e, t)
          return n ? n.cardUrl : null
        },
        L = 'rweb/dmComposer/SAVE_CARD_URL',
        B = function (e, t) {
          return { type: L, conversationId: e, cardUrl: t }
        },
        W = function (e, t) {
          var n = R(e, t)
          return n ? n.mediaId : null
        },
        F = function (e, t) {
          var n = d.k(e, W(e, t))
          return n.length > 0 ? n[0] : null
        },
        U = function (e, t) {
          var n = R(e, t)
          return !!n && n.isUploading
        },
        H = function (e, t) {
          return d.l(e, W(e, t))
        },
        z = function (e, t) {
          var n = R(e, t)
          return n ? n.gifMetadata : null
        },
        V = 'rweb/dmComposer/ADD_MEDIA',
        G = function (e, t, n) {
          return { payload: { isUploading: !1, mediaId: o()(t, 1)[0], gifMetadata: n }, type: V, conversationId: e }
        },
        K = 'rweb/dmComposer/CANCEL_UPLOAD',
        N = function (e) {
          return { type: K, conversationId: e }
        },
        X = 'rweb/dmComposer/REMOVE_MEDIA',
        Z = function (e) {
          return { type: X, conversationId: e }
        },
        Y = function (e, t) {
          return function (n) {
            n(d.i(t)), n([N(e), Z(e)])
          }
        },
        q = 'rweb/dmComposer/UPLOAD_REQUEST',
        J = function (e) {
          return { type: q, conversationId: e }
        },
        Q = 'rweb/dmComposer/UPLOAD_SUCCESS',
        $ = function (e) {
          return { type: Q, conversationId: e }
        },
        ee = 'rweb/dmComposer/UPLOAD_FAILURE',
        te = function (e) {
          return { type: ee, conversationId: e }
        }
      g.a.register(
        u()({}, S, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : P,
            t = arguments.length > 1 ? arguments[1] : void 0,
            n = t.conversationId || 'new_group'
          switch (t.type) {
            case V:
              var r = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return M(M({}, e), {}, u()({}, n, M(M({}, r), t.payload)))
            case q:
              var a = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return M(M({}, e), {}, u()({}, n, M(M({}, a), {}, { isUploading: !0 })))
            case K:
              var i = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return M(M({}, e), {}, u()({}, n, M(M({}, i), {}, { isUploading: !1 })))
            case ee:
            case Q:
            case X:
              var o = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return M(
                M({}, e),
                {},
                u()({}, n, M(M({}, o), {}, { isUploading: !1, mediaId: null, gifMetadata: void 0 })),
              )
            case x:
              var c = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return M(M({}, e), {}, u()({}, n, M(M({}, c), {}, { text: t.text })))
            case L:
              var s = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return M(M({}, e), {}, u()({}, n, M(M({}, s), {}, { cardUrl: t.cardUrl })))
            case D:
              var l = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return M(M({}, e), {}, u()({}, n, M(M({}, l), {}, { text: null })))
            default:
              return e
          }
        }),
      )
    },
    EeFI: function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('97Jx'),
        a = n.n(r),
        i = n('VrFO'),
        o = n.n(i),
        c = n('Y9Ll'),
        s = n.n(c),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('N+ot'),
        p = n.n(d),
        f = n('AuHH'),
        h = n.n(f),
        m = n('ERkP'),
        v = n.n(m),
        g = n('3XMw'),
        b = n.n(g),
        y = n('MWbm'),
        _ = n('Qwev'),
        w = n('21U8'),
        E = n('rHpw'),
        O = n('1auM'),
        M = n('eYns')
      function S(e) {
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
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var P = b.a.gff1f69e,
        C = (function (e) {
          u()(n, e)
          var t = S(n)
          function n(e) {
            var r
            return o()(this, n), ((r = t.call(this, e)).state = { orientedImage: null }), r
          }
          return (
            s()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this,
                    t = (this.props.media || {}).originalMediaFile,
                    n = void 0 === t ? {} : t
                  n &&
                    n instanceof O.a &&
                    Object(M.b)(n).then(function (t) {
                      return new O.a(t).withDimensionsAndOrientation().then(function (t) {
                        e.setState({ orientedImage: t })
                      })
                    })
                },
              },
              {
                key: 'render',
                value: function () {
                  return this.state.orientedImage
                    ? this._renderCropper()
                    : v.a.createElement(_.a, { accessibilityLabel: P, style: T.activityIndicator })
                },
              },
              {
                key: '_renderCropper',
                value: function () {
                  var e = this.props,
                    t = e.cropperRef,
                    n = e.defaultAspectRatio,
                    r = e.defaultCropData,
                    a = e.media,
                    i = e.withAspectRatioOptions,
                    o = e.withZoomControl,
                    c = this.state.orientedImage,
                    s = a || {},
                    l = s.cropData,
                    u = s.originalMediaFile,
                    d = void 0 === u ? {} : u
                  return c
                    ? v.a.createElement(
                        y.a,
                        { style: T.cropper },
                        v.a.createElement(w.a, {
                          circle: this.props.circle,
                          defaultAspectRatio: (r && r.aspectRatio) || (l && l.aspectRatio) || n,
                          defaultCropData: r || l,
                          image: { src: c.url, width: d.width, height: d.height },
                          ref: t,
                          withAspectRatioOptions: i,
                          withZoomControl: o,
                        }),
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(v.a.Component),
        T = E.a.create(function (e) {
          return {
            cropper: { backgroundColor: e.colors.navigationBackground, flexGrow: 1 },
            activityIndicator: { flexGrow: 1 },
          }
        })
      t.a = v.a.forwardRef(function (e, t) {
        return v.a.createElement(C, a()({}, e, { cropperRef: t }))
      })
    },
    FDFL: function (e, t, n) {
      'use strict'
      n.d(t, 'c', function () {
        return g
      }),
        n.d(t, 'b', function () {
          return b
        }),
        n.d(t, 'a', function () {
          return y
        })
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        i = (n('ho0z'), n('tQbP'), n('hBpG'), n('JtPf'), n('7x/C'), n('oEOe')),
        o = n('kGix'),
        c = n('ikiw'),
        s = n('Ssj5'),
        l = n('RqPI')
      function u(e, t) {
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
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? u(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : u(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var p = 'availableLanguages',
        f = 'rweb/'.concat(p),
        h = i.a(f, 'FETCH_AVAILABLE_LANGUAGES'),
        m = { fetchStatus: o.a.NONE, languages: [] }
      function v() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m,
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = t.meta && t.meta.lang ? t.meta.lang : 'en',
          r = 'undefined' != typeof Intl && Intl.Collator && new Intl.Collator(n),
          a = r
            ? function (e, t) {
                return r.compare(e.name, t.name)
              }
            : void 0
        switch (t.type) {
          case h.REQUEST:
            return d(d({}, e), {}, { fetchStatus: o.a.LOADING })
          case h.FAILURE:
            return d(d({}, e), {}, { error: t.payload, fetchStatus: o.a.FAILED })
          case h.SUCCESS:
            return d(d({}, e), {}, { languages: t.payload.sort(a), fetchStatus: o.a.LOADED })
          default:
            return e
        }
      }
      s.a.register(a()({}, p, v))
      var g = function (e) {
          return e[p].languages
        },
        b = function (e, t) {
          var n = Object(c.c)(t).toLowerCase(),
            r = e[p].languages.find(function (e) {
              return e.code === n
            })
          return r ? r.name : null
        },
        y = function () {
          return function (e, t) {
            return t()[p].fetchStatus === o.a.LOADED ? Promise.resolve() : e(_())
          }
        },
        _ = function (e) {
          return function (t, n, r) {
            var a = r.api
            return i.b(t, { params: e, meta: { lang: Object(l.o)(n()) }, request: a.FeatureSwitch.fetchLanguages })({
              actionTypes: h,
              context: 'FETCH_AVAILABLE_LANGUAGES',
            })
          }
        }
    },
    Jhhs: function (e, t, n) {
      'use strict'
      var r = n('ax0f'),
        a = n('uqX5').start
      r(
        { target: 'String', proto: !0, forced: n('2prg') },
        {
          padStart: function (e) {
            return a(this, e, arguments.length > 1 ? arguments[1] : void 0)
          },
        },
      )
    },
    K3W9: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'TabbedMediaEditScreen', function () {
          return I
        })
      n('OZaJ')
      var r = n('97Jx'),
        a = n.n(r),
        i = n('VrFO'),
        o = n.n(i),
        c = n('Y9Ll'),
        s = n.n(c),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('N+ot'),
        p = n.n(d),
        f = n('AuHH'),
        h = n.n(f),
        m = n('KEM+'),
        v = n.n(m),
        g = (n('MvUL'), n('KqXw'), n('ERkP')),
        b = n.n(g),
        y = (n('KOtZ'), n('2G9S'), n('xVN5')),
        _ = n('rxPX'),
        w = n('AspN'),
        E = function (e, t) {
          var n, r
          return (
            null === (n = t.location) || void 0 === n || null === (r = n.state) || void 0 === r
              ? void 0
              : r.showAllMedia
          )
            ? O(e)
            : M(e)
        },
        O = function (e) {
          var t = y.l(e).reduce(function (e, t) {
            return e.concat(t.mediaIds)
          }, [])
          return Object(w.k)(e, t)
        },
        M = function (e) {
          var t = y.j(e),
            n = y.l(e)[t]
          return Object(w.k)(e, n.mediaIds)
        },
        S = function (e, t) {
          var n, r
          return null === (n = t.location) || void 0 === n || null === (r = n.state) || void 0 === r
            ? void 0
            : r.mediaId
        },
        P = function (e, t) {
          var n, r
          return null === (n = t.location) || void 0 === n || null === (r = n.state) || void 0 === r
            ? void 0
            : r.altTextTabEnabled
        },
        C = function (e, t) {
          var n, r
          return null === (n = t.location) || void 0 === n || null === (r = n.state) || void 0 === r
            ? void 0
            : r.cropTabEnabled
        },
        T = Object(_.a)()
          .propsFromState(function () {
            return { altTextTabEnabled: P, cropTabEnabled: C, initialMediaId: S, media: E }
          })
          .propsFromActions(function () {
            return { setMediaMetadata: w.n, processMedia: w.f, updateMediaUpload: w.o }
          })
          .withAnalytics({ page: 'tabbed_media' }),
        R = n('jFmo'),
        j = n('v6aA')
      function x(e) {
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
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var I = (function (e) {
        u()(n, e)
        var t = x(n)
        function n(e, r) {
          var a
          o()(this, n), (a = t.call(this, e, r))
          var i = e.history,
            c = e.initialMediaId
          return e.media.length <= 0 || !c ? (i.replace('/'), p()(a)) : a
        }
        return (
          s()(n, [
            {
              key: 'render',
              value: function () {
                var e = this.context.featureSwitches.isTrue('sensitive_tweet_warnings_enabled')
                return b.a.createElement(R.a, a()({}, this.props, { sensitiveMediaTabEnabled: e }))
              },
            },
          ]),
          n
        )
      })(b.a.Component)
      v()(I, 'contextType', j.a)
      t.default = T(I)
    },
    'Mbn/': function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        i = n('ERkP'),
        o = n.n(i),
        c = n('Lsrn'),
        s = n('k/Ka')
      function l(e, t) {
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
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var d = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(s.a)(
          'svg',
          u(
            u({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [c.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          o.a.createElement(
            'g',
            null,
            o.a.createElement('path', {
              d: 'M3.5 5.25H2c-.414 0-.75.336-.75.75s.336.75.75.75h1.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm18.5 12H7.5c-.414 0-.75-.337-.75-.75V2c0-.414-.336-.75-.75-.75s-.75.336-.75.75v14.5c0 1.24 1.01 2.25 2.25 2.25H22c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm-4 2.5c-.414 0-.75.336-.75.75V22c0 .414.336.75.75.75s.75-.336.75-.75v-1.5c0-.414-.336-.75-.75-.75z',
            }),
            o.a.createElement('path', {
              d: 'M8.5 6.75h8c.414 0 .75.337.75.75v8c0 .414.336.75.75.75s.75-.336.75-.75v-8c0-1.24-1.01-2.25-2.25-2.25h-8c-.414 0-.75.336-.75.75s.336.75.75.75z',
            }),
          ),
        )
      }
      ;(d.metadata = { width: 24, height: 24 }), (t.a = d)
    },
    R5K7: function (e, t, n) {
      'use strict'
      n('OZaJ'), n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('VrFO'),
        a = n.n(r),
        i = n('Y9Ll'),
        o = n.n(i),
        c = n('1Pcy'),
        s = n.n(c),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('N+ot'),
        p = n.n(d),
        f = n('AuHH'),
        h = n.n(f),
        m = n('KEM+'),
        v = n.n(m),
        g = (n('2G9S'), n('ERkP')),
        b = n.n(g),
        y = n('9Xij'),
        _ = n('Zl35'),
        w = n('epkG'),
        E = n('I4+6'),
        O = n('cm6r'),
        M = n('ZvMt'),
        S = n('rHpw'),
        P = n('97Jx'),
        C = n.n(P),
        T = n('CHgo')
      n('6U7i'), n('Ef13'), n('Jhhs'), n('z84I')
      function R(e) {
        var t = Math.round(e / 1e3)
        if (t < 10) return '0:0'.concat(t)
        if (t < 60) return '0:'.concat(t)
        var n = Math.floor(t / 60),
          r = ''.concat(t - 60 * n).padStart(2, '0')
        return ''.concat(n, ':').concat(r)
      }
      var j = function (e, t) {
          return e.map(function (e) {
            return (function (e, t) {
              if ('tenths' === t) {
                var n = Math.round(e / 100),
                  r = n % 10,
                  a = ''.concat((n - r) / 10).padStart(2, '0')
                return '0:'.concat(a, '.').concat(r)
              }
              return R(e)
            })(e, t)
          })
        },
        x = function (e, t) {
          var n = (function (e, t) {
              var n,
                r,
                a,
                i = t / e
              i >= 0.25
                ? ((n = 200), (r = 'tenths'), (a = 4))
                : i >= 0.1
                ? ((n = 500), (r = 'tenths'), (a = 5))
                : i >= 0.05
                ? ((n = 1e3), (r = 'seconds'), (a = 5))
                : i >= 0.025
                ? ((n = 2e3), (r = 'seconds'), (a = 4))
                : i >= 0.01
                ? ((n = 5e3), (r = 'seconds'), (a = 5))
                : i >= 0.005
                ? ((n = 1e4), (r = 'seconds'), (a = 5))
                : i >= 0.0025
                ? ((n = 2e4), (r = 'seconds'), (a = 4))
                : i >= 0.001
                ? ((n = 5e4), (r = 'seconds'), (a = 4))
                : ((n = 1e5), (r = 'seconds'), (a = 4))
              for (var o = [], c = 0; c < e; ) o.push(c), (c += n)
              return { intervalsMs: o, precision: r, numSubintervals: a, numIntervals: Number((e / n).toFixed(1)) }
            })(e, t),
            r = n.intervalsMs,
            a = n.numIntervals,
            i = n.numSubintervals,
            o = n.precision
          return { intervalStrings: j(r, o), numSubintervals: i, numIntervals: a }
        },
        I = n('3XMw'),
        D = n.n(I),
        k = (n('hCOa'), n('87if'), n('t62R')),
        A = n('shC7'),
        L = n('MWbm')
      function B(e) {
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
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var W = (function (e) {
          u()(n, e)
          var t = B(n)
          function n() {
            return a()(this, n), t.apply(this, arguments)
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.duration,
                    n = e.trimmerWidth,
                    r = x(t, n),
                    a = r.intervalStrings,
                    i = r.numIntervals,
                    o = r.numSubintervals,
                    c = A.a.getConstants().isRTL ? F.borderRight : F.borderLeft,
                    s = (100 * Math.ceil(i)) / i
                  return b.a.createElement(
                    L.a,
                    { style: F.root },
                    b.a.createElement(
                      L.a,
                      { style: [F.intervalRow, F.intervalRowStrings, { width: ''.concat(s, '%') }] },
                      a.map(function (e, t) {
                        return b.a.createElement(
                          k.b,
                          {
                            color: 'gray700',
                            key: t,
                            size: 'subtext3',
                            style: [{ width: ''.concat(0 === t ? n / i / 2 : n / i, 'px') }, F.intervalStrings],
                          },
                          0 !== t ? e : null,
                        )
                      }),
                    ),
                    b.a.createElement(
                      L.a,
                      { style: [F.intervalRow, F.intervalRowTicks] },
                      a.map(function (e, t) {
                        return b.a.createElement(
                          L.a,
                          { key: t, style: [{ width: ''.concat(100 / i, '%') }, F.bigTicks, 0 !== t && c] },
                          Array.from({ length: o }, function (e, t) {
                            return b.a.createElement(L.a, { key: t, style: [F.smallTicks, 0 !== t && c] })
                          }),
                        )
                      }),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(b.a.PureComponent),
        F = S.a.create(function (e) {
          return {
            root: {
              flexDirection: 'column',
              width: '100%',
              position: 'absolute',
              height: '65%',
              bottom: 0,
              overflow: 'hidden',
            },
            intervalRow: { flexDirection: 'row' },
            intervalRowStrings: { paddingBottom: e.spaces.space2, userSelect: 'none' },
            intervalRowTicks: { flexGrow: 1, overflow: 'hidden' },
            borderLeft: { borderLeftColor: e.colors.gray700, borderLeftWidth: 1 },
            borderRight: { borderRightColor: e.colors.gray700, borderRightWidth: 1 },
            bigTicks: { flexDirection: 'row', alignItems: 'flex-end' },
            smallTicks: { flexGrow: 1, height: '50%' },
            intervalStrings: { display: 'flex', justifyContent: 'center' },
          }
        }),
        U = W,
        H = n('Wms4'),
        z = (n('jQ3i'), n('x4t0'), n('uFXj'), n('oLZl')),
        V = 'decrease',
        G = 'increase',
        K = 'left',
        N = 'right',
        X = n('7ep7')
      function Z(e) {
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
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var Y = D.a.a394f904,
        q = D.a.f42c0c8f,
        J = D.a.i667afe8,
        Q = D.a.c0bdd345,
        $ = (function (e) {
          u()(n, e)
          var t = Z(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              v()(
                s()(e),
                '_panResponders',
                X.a.create({
                  onStartShouldSetPanResponder: function () {
                    return !0
                  },
                  onMoveShouldSetPanResponder: function () {
                    return !0
                  },
                  onPanResponderGrant: function () {
                    return e.props.onMoveStart(e.props.side)
                  },
                  onPanResponderMove: function (t, n) {
                    var r = n.dx
                    return e.props.onMoveChange(r, e.props.side)
                  },
                  onPanResponderRelease: function (t, n) {
                    var r = n.dx
                    return e.props.onMoveEnd(r, e.props.side)
                  },
                  onPanResponderTerminate: function (t, n) {
                    var r = n.dx
                    return e.props.onMoveEnd(r, e.props.side)
                  },
                  onPanResponderTerminationRequest: function () {
                    return !0
                  },
                }),
              ),
              v()(s()(e), '_handleOnKeyDown', function (t, n) {
                var r = e.props.onKeyDown,
                  a = t.key,
                  i = a === z.a.ArrowUp || a === z.a.ArrowRight,
                  o = a === z.a.ArrowDown || a === z.a.ArrowLeft
                ;(i || o) && (t.preventDefault(), r(i ? G : V, n))
              }),
              v()(s()(e), '_handleOnKeyUp', function (t) {
                var n = e.props.onKeyUp,
                  r = t.key
                ;[z.a.ArrowDown, z.a.ArrowLeft, z.a.ArrowRight, z.a.ArrowUp].includes(r) && n()
              }),
              v()(s()(e), '_generateBorderStyles', function () {
                var t = e.props.side,
                  n = A.a.getConstants().isRTL
                return t === K
                  ? n
                    ? ee.rightScrubberRadius
                    : ee.leftScrubberRadius
                  : t === N
                  ? n
                    ? ee.leftScrubberRadius
                    : ee.rightScrubberRadius
                  : void 0
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.currentValue,
                    r = t.maxValue,
                    a = t.minValue,
                    i = t.side,
                    o = t.style
                  return b.a.createElement(
                    O.a,
                    C()(
                      {
                        accessibilityLabel: i === K ? J : q,
                        accessibilityRole: 'adjustable',
                        accessibilityValue: {
                          max: Q(r / 1e3),
                          min: Q(a / 1e3),
                          now: Q(n / 1e3),
                          text: Y({ seconds: Q(n / 1e3) }),
                        },
                        focusable: !0,
                        interactiveStyles: E.a.generate({
                          backgroundColor: S.a.theme.colors.primary,
                          color: S.a.theme.colors.primary,
                          customFocusBackgroundColor: S.a.theme.colors.primary,
                          customHoverBackgroundColor: S.a.theme.colors.primary,
                          customPressedBackgroundColor: S.a.theme.colors.primary,
                          insetFocusRing: !0,
                        }),
                        onKeyDown: function (t) {
                          return e._handleOnKeyDown(t, i)
                        },
                        onKeyUp: function (t) {
                          return e._handleOnKeyUp(t)
                        },
                        style: [ee.root, this._generateBorderStyles(), o],
                      },
                      this._panResponders.panHandlers,
                    ),
                    function (e) {
                      var t = e.isFocused,
                        n = e.isHovered,
                        r = e.isPressed
                      return b.a.createElement(
                        b.a.Fragment,
                        null,
                        b.a.createElement(L.a, {
                          style: [ee.trimmerScrubberGrips, (t || n || r) && ee.trimmerScrubberGripsOpacity],
                        }),
                        b.a.createElement(L.a, {
                          style: [ee.trimmerScrubberGrips, (t || n || r) && ee.trimmerScrubberGripsOpacity],
                        }),
                      )
                    },
                  )
                },
              },
            ]),
            n
          )
        })(b.a.Component),
        ee = S.a.create(function (e) {
          return {
            root: {
              backgroundColor: e.colors.primary,
              cursor: 'grab',
              flexDirection: 'row',
              height: e.spaces.space48,
              justifyContent: 'space-between',
              paddingHorizontal: e.spaces.space4,
              paddingVertical: e.spaces.space12,
              width: 'calc('.concat(e.spaces.space4, ' * 2 + ').concat(e.spaces.space2, ' * 3)'),
            },
            leftScrubberRadius: {
              borderBottomLeftRadius: e.borderRadii.small,
              borderTopLeftRadius: e.borderRadii.small,
            },
            rightScrubberRadius: {
              borderBottomRightRadius: e.borderRadii.small,
              borderTopRightRadius: e.borderRadii.small,
            },
            trimmerScrubberGrips: {
              backgroundColor: e.colors.cellBackground,
              borderRadius: e.borderRadii.infinite,
              height: '100%',
              width: e.spaces.space2,
            },
            trimmerScrubberGripsOpacity: { opacity: 0.8 },
          }
        }),
        te = $
      function ne(e) {
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
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var re = D.a.af2a65d8,
        ae = D.a.d46781ae,
        ie = D.a.e8733ed8,
        oe = D.a.j3d49e93,
        ce = function (e, t) {
          return ''.concat((e / t) * 100, '%')
        },
        se = (function (e) {
          u()(n, e)
          var t = ne(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              v()(s()(e), '_keyPressAccumulatedDistance', 0),
              v()(s()(e), '_keyPressValueDelta', 1),
              v()(
                s()(e),
                '_panResponderTermination',
                X.a.create({
                  onMoveShouldSetPanResponderCapture: function (t, n) {
                    var r = n.dx
                    return e._shouldTerminateChildrenPanResponders(r)
                  },
                }),
              ),
              v()(s()(e), 'state', { isActive: !1, trimmerWidth: 0 }),
              v()(s()(e), '_generateTimestampLabelString', function () {
                var t = e.props,
                  n = t.endTime - t.startTime
                if (n >= 6e4) {
                  var r = R(n)
                  return oe({ timestamp: r })
                }
                return n < 4e3 ? ae(Math.floor((10 * n) / 1e3) / 10) : ie(Math.floor(n / 1e3))
              }),
              v()(s()(e), '_getTrimmerScrubberWidth', function () {
                return 2 * S.a.theme.spacesPx.space4 + 3 * S.a.theme.spacesPx.space2
              }),
              v()(s()(e), '_handleKeyDown', function (t, n) {
                var r = e.state.trimmerWidth
                1 === e._keyPressValueDelta && e._handlePanResponderGrant(n),
                  (e._keyPressAccumulatedDistance += e._keyPressValueDelta * (t === G ? 1 : -1)),
                  e._handlePanResponderChange(e._keyPressAccumulatedDistance, n)
                var a = 0.05 * r
                e._keyPressValueDelta = Math.min(1.4 * e._keyPressValueDelta, a)
              }),
              v()(s()(e), '_handleKeyUp', function () {
                ;(e._keyPressValueDelta = 1), (e._keyPressAccumulatedDistance = 0), e.setState({ isActive: !1 })
              }),
              v()(s()(e), '_handleLayout', function (t) {
                e.setState({ trimmerWidth: t.nativeEvent.layout.width })
              }),
              v()(s()(e), '_handlePanResponderChange', function (t, n) {
                e._triggerChange(t, n)
              }),
              v()(s()(e), '_handlePanResponderEnd', function (t, n) {
                e._handlePanResponderChange(t, n), e.setState({ isActive: !1 })
              }),
              v()(s()(e), '_handlePanResponderGrant', function (t) {
                var n = e.props,
                  r = n.endTime,
                  a = n.startTime
                ;(e._baseTime = t === K ? a : r), e.setState({ isActive: !0 })
              }),
              v()(s()(e), '_renderTimestampLabel', function () {
                var t,
                  n = e.state.isActive,
                  r = e.props,
                  a = r.duration,
                  i = r.endTime,
                  o = r.startTime,
                  c = A.a.getConstants().isRTL,
                  s = c ? 'marginRight' : 'marginLeft',
                  l = c ? 'marginLeft' : 'marginRight'
                return b.a.createElement(
                  L.a,
                  {
                    style: [
                      le.labelWrapper,
                      ((t = {}), v()(t, s, ce(o, a)), v()(t, l, ce(a - i, a)), v()(t, 'width', ce(i - o, a)), t),
                    ],
                  },
                  b.a.createElement(
                    H.a,
                    { background: 'maskColor', style: [le.label, !n && le.visibilityHidden] },
                    re({ timestamp: e._generateTimestampLabelString() }),
                  ),
                )
              }),
              v()(s()(e), '_setRootRef', function (t) {
                t && (e._removeTouchMoveToScrollListener = Object(T.a)(t, e._handleTouchMoveToScroll, !1))
              }),
              v()(s()(e), '_handleTouchMoveToScroll', function (e) {
                return e.preventDefault()
              }),
              v()(s()(e), '_scaleDistanceByTrimmerWidth', function (t) {
                var n = e.props.duration
                return (t / e.state.trimmerWidth) * n
              }),
              v()(s()(e), '_shouldTerminateChildrenPanResponders', function (t) {
                var n = e.props.duration,
                  r = e._baseTime + e._scaleDistanceByTrimmerWidth(t)
                return r < 0 || r > n
              }),
              v()(s()(e), '_triggerChange', function (t, n) {
                var r = e.props,
                  a = r.duration,
                  i = r.endTime,
                  o = r.onScrub,
                  c = r.startTime,
                  s = e._baseTime + e._scaleDistanceByTrimmerWidth(t),
                  l = 1e3
                if (n === K) {
                  var u = s
                  s <= 0 ? (u = 0) : i - l <= s && (u = i - l), o(K, u)
                }
                if (n === N) {
                  var d = s
                  s >= a ? (d = a) : s - c <= l && (d = c + l), o(N, d)
                }
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._removeTouchMoveToScrollListener()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.duration,
                    n = e.endTime,
                    r = e.playTime,
                    a = e.startTime,
                    i = this.state,
                    o = i.isActive,
                    c = i.trimmerWidth,
                    s = this._getTrimmerScrubberWidth(),
                    l = A.a.getConstants().isRTL,
                    u = l ? 'marginRight' : 'marginLeft',
                    d = l ? 'marginLeft' : 'marginRight'
                  return b.a.createElement(
                    L.a,
                    C()(
                      { ref: this._setRootRef, style: [le.root, o && le.cursorGrab] },
                      this._panResponderTermination.panHandlers,
                    ),
                    this._renderTimestampLabel(),
                    b.a.createElement(
                      L.a,
                      { onLayout: this._handleLayout, style: le.trimmerWrapper },
                      b.a.createElement(
                        L.a,
                        { style: le.intervalsContainer },
                        b.a.createElement(U, { duration: t, trimmerWidth: c }),
                      ),
                      b.a.createElement(
                        b.a.Fragment,
                        null,
                        b.a.createElement(L.a, { style: [le.discardArea, le.transition, { width: ce(a, t) }] }),
                        b.a.createElement(
                          L.a,
                          { style: le.keepArea },
                          b.a.createElement(te, {
                            currentValue: a,
                            maxValue: n,
                            minValue: 0,
                            onKeyDown: this._handleKeyDown,
                            onKeyUp: this._handleKeyUp,
                            onMoveChange: this._handlePanResponderChange,
                            onMoveEnd: this._handlePanResponderEnd,
                            onMoveStart: this._handlePanResponderGrant,
                            side: K,
                            style: [le.trimmerScrubber, v()({}, u, '-'.concat(s, 'px'))],
                          }),
                          b.a.createElement(
                            L.a,
                            { style: le.keepAreaCenter },
                            o
                              ? null
                              : b.a.createElement(L.a, {
                                  style: [le.playBarArea, le.transition, { width: ce(r, n - a) }],
                                }),
                          ),
                          b.a.createElement(te, {
                            currentValue: n,
                            maxValue: t,
                            minValue: a,
                            onKeyDown: this._handleKeyDown,
                            onKeyUp: this._handleKeyUp,
                            onMoveChange: this._handlePanResponderChange,
                            onMoveEnd: this._handlePanResponderEnd,
                            onMoveStart: this._handlePanResponderGrant,
                            side: N,
                            style: [le.trimmerScrubber, v()({}, d, '-'.concat(s, 'px'))],
                          }),
                        ),
                        b.a.createElement(L.a, {
                          style: [le.discardArea, le.transition, { width: 'calc(100% - '.concat(ce(n, t), ')') }],
                        }),
                      ),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(b.a.Component),
        le = S.a.create(function (e) {
          return {
            root: { paddingHorizontal: e.spaces.space40, width: '100%' },
            cursorGrab: { cursor: 'grab' },
            trimmerWrapper: {
              alignItems: 'center',
              writingDirection: 'ltr',
              flexGrow: 1,
              flexDirection: 'row',
              height: e.spaces.space48,
              position: 'relative',
            },
            discardArea: {
              backgroundColor: e.colors.maskColor,
              height: 'calc(100% - ('.concat(e.spaces.space4, ' * 2))'),
            },
            keepArea: { flexDirection: 'row', flexGrow: 1, height: '100%', zIndex: 1 },
            keepAreaCenter: {
              borderColor: e.colors.primary,
              borderStyle: 'solid',
              borderBottomWidth: e.spaces.space4,
              borderTopWidth: e.spaces.space4,
              height: '100%',
              position: 'relative',
              width: '100%',
            },
            intervalsContainer: {
              backgroundColor: e.colors.gray50,
              height: 'calc('.concat(e.spaces.space48, ' - ').concat(e.spaces.space4, ' * 2)'),
              position: 'absolute',
              left: 0,
              right: 0,
            },
            label: { userSelect: 'none' },
            labelWrapper: {
              flexDirection: 'row',
              justifyContent: 'center',
              paddingBottom: e.spaces.space8,
              paddingTop: e.spaces.space8,
            },
            playBarArea: { backgroundColor: e.colors.primary, height: '100%', opacity: 0.5 },
            trimmerScrubber: { zIndex: 1 },
            transition: { transitionDuration: '0.01s', transitionProperty: 'width' },
            visibilityHidden: { visibility: 'hidden' },
          }
        }),
        ue = se,
        de = n('mXq/'),
        pe = n('/run'),
        fe = n('KwSe')
      function he(e, t) {
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
      function me(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? he(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : he(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function ve(e) {
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
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var ge = new w.a({}),
        be = (function (e) {
          u()(n, e)
          var t = ve(n)
          function n() {
            var e, r, i
            a()(this, n)
            for (var o = arguments.length, c = new Array(o), l = 0; l < o; l++) c[l] = arguments[l]
            return (
              (i = t.call.apply(t, [this].concat(c))),
              v()(s()(i), '_isScrubbed', !1),
              v()(s()(i), 'state', {
                endTime:
                  (null === (e = i.props.defaultTrimData) || void 0 === e ? void 0 : e.endTime) ||
                  i.props.video.duration,
                isPlaying: !1,
                startTime: (null === (r = i.props.defaultTrimData) || void 0 === r ? void 0 : r.startTime) || 0,
                playTime: 0,
              }),
              v()(s()(i), '_handleScrub', function (e) {
                return function (t, n) {
                  var r = i.state,
                    a = r.endTime,
                    o = r.startTime,
                    c = i.props.video.duration,
                    s = t === K
                  if (e) {
                    var l = s ? n : o,
                      u = s ? a : n
                    e.pause(),
                      e.scrubToFraction(n / c),
                      e.setPlaybackTimeRange({ startTimeS: l / 1e3, endTimeS: u / 1e3 })
                  }
                  i._isScrubbed = !0
                  var d = s ? { startTime: n } : { endTime: n }
                  i.setState(me({ playTime: 0 }, d))
                }
              }),
              v()(s()(i), '_handleOnVideoContainerLayout', function (e) {
                var t = e.nativeEvent.layout,
                  n = t.height,
                  r = t.width,
                  a = i.props.video,
                  o = a.height,
                  c = a.width / o,
                  s = M.a.getContainDimensions({ height: n, width: r }, c),
                  l = s.height,
                  u = s.width
                ;(l === i.state.adjustedVideoHeight && u === i.state.adjustedVideoWidth) ||
                  i.setState({ adjustedVideoHeight: l, adjustedVideoWidth: u })
              }),
              v()(s()(i), '_handleVideoClick', function (e) {
                return function () {
                  var t = i.state,
                    n = t.endTime,
                    r = t.isPlaying,
                    a = t.startTime,
                    o = i.props.video.duration
                  e &&
                    (i._isScrubbed
                      ? (e.scrubToFraction(a / o), (i._isScrubbed = !1))
                      : i._isScrubbed ||
                        (!a && n === o) ||
                        (e.scrubToFraction(a / o), e.setPlaybackTimeRange({ startTimeS: a / 1e3, endTimeS: n / 1e3 })),
                    r ? e.pause() : e.play())
                }
              }),
              v()(s()(i), '_handlePlayerStateUpdate', function (e) {
                var t = i.state.startTime,
                  n = e.tracks[e.currentTrackId]
                if (n) {
                  var r = n.currentTimeMs - t
                  i.setState(me({ isPlaying: e.isPlaying }, e.isPlaying ? { playTime: r } : {}))
                }
              }),
              i
            )
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props.video,
                    n = this.state,
                    r = n.adjustedVideoHeight,
                    a = n.adjustedVideoWidth,
                    i = n.endTime,
                    o = n.isPlaying,
                    c = n.playTime,
                    s = n.startTime
                  return b.a.createElement(
                    L.a,
                    { style: ye.root },
                    b.a.createElement(
                      fe.a,
                      null,
                      b.a.createElement(
                        L.a,
                        { style: ye.videoContainer },
                        b.a.createElement(
                          L.a,
                          { onLayout: this._handleOnVideoContainerLayout, style: ye.video },
                          b.a.createElement(
                            y.a,
                            { ratio: t.width / t.height, style: r && a && { height: r, width: a } },
                            b.a.createElement(
                              _.b,
                              {
                                aspectRatio: t.width / t.height,
                                basePlayerClass: pe.a,
                                configType: 'static',
                                contentId: '',
                                contentType: 'media_entity',
                                httpClient: ge,
                                onStateUpdate: this._handlePlayerStateUpdate,
                                playerId: 'trimmer',
                                size: 'fill',
                                variants: t.variants,
                              },
                              function (t) {
                                var n = t.playerApi
                                return b.a.createElement(
                                  O.a,
                                  {
                                    focusable: !0,
                                    interactiveStyles: E.a.generate({
                                      backgroundColor: S.a.theme.colors.transparent,
                                      color: S.a.theme.colors.primary,
                                      customFocusBackgroundColor: S.a.theme.colors.transparent,
                                      customHoverBackgroundColor: S.a.theme.colors.transparent,
                                      customPressedBackgroundColor: S.a.theme.colors.transparent,
                                      insetFocusRing: !0,
                                    }),
                                    onClick: e._handleVideoClick(n),
                                    style: ye.overlay,
                                  },
                                  o ? null : b.a.createElement(de.a, null),
                                )
                              },
                            ),
                          ),
                        ),
                      ),
                      b.a.createElement(fe.a.MetadataSubscriber, { playerId: 'trimmer' }, function (n) {
                        var r = n.playerApi
                        return b.a.createElement(ue, {
                          duration: t.duration,
                          endTime: i,
                          onScrub: e._handleScrub(r),
                          playTime: c,
                          startTime: s,
                        })
                      }),
                    ),
                  )
                },
              },
              {
                key: 'getTrimData',
                value: function () {
                  var e = this.state,
                    t = e.endTime
                  return { startTime: e.startTime, endTime: t }
                },
              },
            ]),
            n
          )
        })(b.a.Component),
        ye = S.a.create(function (e) {
          return {
            root: { flex: '1 1' },
            overlay: me(me({}, S.a.absoluteFillObject), {}, { alignItems: 'center', justifyContent: 'center' }),
            video: { alignItems: 'center', flex: '1 1', justifyContent: 'center', width: '100%' },
            videoContainer: {
              alignItems: 'center',
              backgroundColor: e.colors.gray0,
              flex: '1 1',
              padding: e.spaces.space20,
              width: '100%',
            },
          }
        })
      t.a = be
    },
    Rqga: function (e, t, n) {
      var r = n('ax0f'),
        a = Math.log,
        i = Math.LN2
      r(
        { target: 'Math', stat: !0 },
        {
          log2: function (e) {
            return a(e) / i
          },
        },
      )
    },
    eIif: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'PhotoTagsScreen', function () {
          return k
        })
      var r = n('RhWx'),
        a = n.n(r),
        i = n('ddV6'),
        o = n.n(i),
        c = (n('hBpG'), n('2G9S'), n('LW0h'), n('tQbP'), n('z84I'), n('ERkP')),
        s = n.n(c),
        l = n('VAZu'),
        u = (n('M+/F'), n('xVN5')),
        d = n('hqKg'),
        p = n('tn7R'),
        f = n('GZwR'),
        h = n('UQTn'),
        m = n('oEGd'),
        v = Object(d.createSelector)(
          function (e) {
            var t = u.j(e)
            return u.l(e)[t].mediaTags
          },
          function (e) {
            return (function (e) {
              var t = Object(h.e)(e),
                n = (t && Object(p.a)(t)) || []
              return Object(f.i)(n)
            })(e)
              .filter(function (e) {
                return e && e.rounded_score
              })
              .sort(function (e, t) {
                return (t.rounded_score || 0) - (e.rounded_score || 0)
              })
              .slice(0, 12)
          },
          function (e, t) {
            return { existingTags: e, injections: t }
          },
        ),
        g = { updateSingleComposer: u.x },
        b = Object(m.g)(v, g),
        y = n('jHSc'),
        _ = n('3XMw'),
        w = n.n(_),
        E = n('Oib4'),
        O = n('mN6z'),
        M = n('2dXj'),
        S = n('MWbm'),
        P = n('4zmP'),
        C = n('/yvb'),
        T = n('rHpw'),
        R = n('7JQg'),
        j = w.a.b772cd65,
        x = w.a.c20dc653,
        I = w.a.d1175c78,
        D = w.a.ae0831ab
      function k(e) {
        var t = e.history,
          n = e.injections,
          r = e.existingTags,
          i = void 0 === r ? [] : r,
          c = e.updateSingleComposer,
          u = s.a.useState(i),
          d = o()(u, 2),
          p = d[0],
          h = d[1],
          m = s.a.useState(''),
          v = o()(m, 2),
          g = v[0],
          b = v[1],
          _ = function (e) {
            h(
              p.filter(function (t) {
                return t.id !== e.id
              }),
            )
          },
          w = function () {
            var e = p
                .map(function (e) {
                  return e.data.id_str
                })
                .sort(),
              t = i
                .map(function (e) {
                  return e.data.id_str
                })
                .sort(),
              n = e.length === t.length && Object(O.a)(e, t)
            return s.a.createElement(
              S.a,
              { style: A.rightColumn },
              s.a.createElement(C.a, { disabled: n, onPress: R, size: 'small', type: 'primaryFilled' }, j),
            )
          },
          T = function () {
            t.goBack()
          },
          R = function () {
            c({ updates: { mediaTags: p } }), t.goBack()
          }
        return s.a.createElement(
          y.b,
          {
            documentTitle: I,
            history: t,
            renderHeader: function () {
              return s.a.createElement(l.a, {
                backButtonType: 'close',
                history: t,
                onBackClick: T,
                rightControl: w(),
                title: I,
                withBottomBorder: !1,
              })
            },
          },
          s.a.createElement(M.d, {
            getItemDisabledMessage: function (e) {
              var t
              return e.type !== f.b.User || e.data.can_media_tag || (t = D({ screenName: e.data.screen_name })), t
            },
            getItemIsDisabled: function (e) {
              var t = p.length >= 10
              return e.type === f.b.User && (!e.data.can_media_tag || !!t)
            },
            injections: g ? void 0 : n,
            onQueryChange: function (e) {
              b(e)
            },
            onRemove: _,
            onSelect: function (e) {
              e.type === f.b.User &&
                (p.find(function (t) {
                  return t.id === e.id
                })
                  ? _(e)
                  : p.length < 10 && h([].concat(a()(p), [e])))
            },
            renderCallout: function () {
              return p.length >= 10
                ? s.a.createElement(
                    S.a,
                    { style: A.inlineCallout },
                    s.a.createElement(P.a, { Icon: E.a, headline: x, type: 'warning' }),
                  )
                : null
            },
            selectedUsers: p,
            source: f.d.ComposeMediaTagging,
            withCompactPills: !0,
          }),
        )
      }
      var A = T.a.create(function (e) {
        return {
          rightColumn: { flexDirection: 'row', flexGrow: 1, alignItems: 'center' },
          inlineCallout: {
            paddingHorizontal: e.spaces.space16,
            paddingBottom: e.spaces.space4,
            paddingTop: e.spaces.space8,
          },
        }
      })
      t.default = Object(R.c)({ page: 'media_tag', component: 'media_tagger' })(b(k))
    },
    i8hi: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'TabbedMediaEditScreen', function () {
          return S
        })
      n('OZaJ')
      var r = n('97Jx'),
        a = n.n(r),
        i = n('VrFO'),
        o = n.n(i),
        c = n('Y9Ll'),
        s = n.n(c),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('N+ot'),
        p = n.n(d),
        f = n('AuHH'),
        h = n.n(f),
        m = (n('MvUL'), n('KqXw'), n('ERkP')),
        v = n.n(m),
        g = n('CDB5'),
        b = n('rxPX'),
        y = n('AspN'),
        _ = function (e, t) {
          return t.location && t.location.state && t.location.state.mediaId
        },
        w = function (e, t) {
          var n = (function (e, t) {
            var n, r
            return null === (n = t.location) || void 0 === n || null === (r = n.state) || void 0 === r
              ? void 0
              : r.conversationId
          })(0, t)
          return Object(g.i)(e, n)
        },
        E = Object(b.a)()
          .propsFromState(function () {
            return { media: w, initialMediaId: _ }
          })
          .adjustStateProps(function (e) {
            var t = e.initialMediaId,
              n = e.media
            return { media: n ? [n] : [], initialMediaId: t }
          })
          .propsFromActions(function () {
            return { setMediaMetadata: y.n, processMedia: y.f, updateMediaUpload: y.o }
          })
          .withAnalytics({ page: 'tabbed_media_dm' }),
        O = n('jFmo')
      function M(e) {
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
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var S = (function (e) {
        u()(n, e)
        var t = M(n)
        function n(e) {
          var r
          o()(this, n), (r = t.call(this, e))
          var a = e.history,
            i = e.initialMediaId
          return e.media.length <= 0 || !i ? (a.replace('/'), p()(r)) : r
        }
        return (
          s()(n, [
            {
              key: 'render',
              value: function () {
                return v.a.createElement(O.a, a()({}, this.props, { sensitiveMediaTabEnabled: !1 }))
              },
            },
          ]),
          n
        )
      })(v.a.Component)
      t.default = E(S)
    },
    jFmo: function (e, t, n) {
      'use strict'
      var r = n('97Jx'),
        a = n.n(r),
        i = n('m3Bd'),
        o = n.n(i),
        c = (n('MvUL'), n('KqXw'), n('ERkP')),
        s = n.n(c),
        l = n('v6aA'),
        u = (n('OZaJ'), n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('FtHn'), n('RhWx')),
        d = n.n(u),
        p = n('VrFO'),
        f = n.n(p),
        h = n('Y9Ll'),
        m = n.n(h),
        v = n('1Pcy'),
        g = n.n(v),
        b = n('5Yy7'),
        y = n.n(b),
        _ = n('N+ot'),
        w = n.n(_),
        E = n('AuHH'),
        O = n.n(E),
        M = n('KEM+'),
        S = n.n(M),
        P =
          (n('hBpG'),
          n('vrRf'),
          n('jwue'),
          n('+oxZ'),
          n('2G9S'),
          n('z84I'),
          n('JtPf'),
          n('7x/C'),
          n('87if'),
          n('lTEL'),
          n('kYxP'),
          n('LqLs'),
          n('m9LP'),
          n('DZ+c'),
          n('xZGM')),
        C = n('3XMw'),
        T = n.n(C),
        R = n('pKoL'),
        j = n('Qwev'),
        x = n('rHpw'),
        I = n('U+bB'),
        D = n('MWbm'),
        k = T.a.gff1f69e
      var A = x.a.create(function (e) {
          return {
            activityIndicator: { height: '100%', width: '100%' },
            image: { width: '100%', flexGrow: 1 },
            mediaContainer: { overflow: 'hidden', flexGrow: 1, flexBasis: 0, width: '100%' },
            mediaPreviewWrapper: {
              flexDirection: 'column',
              flexGrow: 1,
              alignItems: 'center',
              width: '100%',
              paddingVertical: 25,
              paddingHorizontal: 25,
              backgroundColor: e.colors.gray0,
            },
          }
        }),
        L = function (e) {
          var t = e.mediaItem,
            n = e.orientedImage
          return s.a.createElement(
            D.a,
            { style: A.mediaPreviewWrapper },
            void 0 === n && t
              ? s.a.createElement(R.a, {
                  imageResizeMode: 'contain',
                  mediaItem: t,
                  style: A.mediaContainer,
                  withCloseButton: !1,
                })
              : n
              ? s.a.createElement(I.a, { resizeMode: 'contain', source: n.url, style: A.image })
              : s.a.createElement(j.a, { accessibilityLabel: k, style: A.activityIndicator }),
          )
        },
        B = x.a.create(function (e) {
          return {
            formTextInput: {
              width: '100%',
              backgroundColor: e.colors.navigationBackground,
              paddingHorizontal: e.spaces.space12,
              paddingBottom: 0,
              borderTopWidth: e.spaces.space1,
              borderTopStyle: 'solid',
              borderTopColor: e.colors.borderColor,
            },
            attachmentContainer: { width: '100%', height: '100%', flexGrow: 1 },
            root: { display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', height: '100%', flexGrow: 1 },
          }
        }),
        W = 'altTextInput',
        F = 'endEditingButton',
        U = 'altTextEducationSheetPrimaryAction',
        H = n('t62R'),
        z = n('p+r5')
      function V(e) {
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
            r = O()(e)
          if (t) {
            var a = O()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return w()(this, n)
        }
      }
      var G = T.a.feabf2a0,
        K = T.a.e36287c6,
        N = T.a.cf565d08,
        X = (function (e) {
          y()(n, e)
          var t = V(n)
          function n() {
            var e
            f()(this, n)
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              S()(g()(e), '_renderInputHelperText', function () {
                var t = e.props.onShowEducation
                return t ? s.a.createElement(H.b, { color: 'link', onPress: t, withInteractiveStyling: !0 }, N) : null
              }),
              S()(g()(e), '_handleChange', function (t) {
                var n = e.props,
                  r = n.currentMediaId,
                  a = n.mediaItem,
                  i = n.onChange,
                  o = t.target.value
                a ? i(o, a.id.toString()) : r && i(o, r)
              }),
              e
            )
          }
          return (
            m()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.autofocus,
                    n = e.maxLength,
                    r = e.mediaItem,
                    a = e.orientedImage,
                    i = e.value
                  return s.a.createElement(
                    D.a,
                    { style: B.root },
                    s.a.createElement(
                      D.a,
                      { style: B.attachmentContainer },
                      s.a.createElement(L, { mediaItem: r, orientedImage: a }),
                      s.a.createElement(z.a, {
                        accessibilityLabel: G,
                        autoFocus: t,
                        helperText: this._renderInputHelperText(),
                        label: K,
                        maxLength: n,
                        maxNumberOfLines: 6,
                        multiline: !0,
                        name: 'altTextInput',
                        numberOfLines: 2,
                        onChange: this._handleChange,
                        style: B.formTextInput,
                        testID: W,
                        value: i,
                      }),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(s.a.Component),
        Z = n('rxPX'),
        Y = function (e, t) {
          return Object(P.z)(e, P.a)
        },
        q = Object(Z.a)()
          .propsFromState(function () {
            return { showEducationOnMount: Y }
          })
          .propsFromActions(function () {
            return { addFlag: P.w }
          })
          .withAnalytics(),
        J = n('feu+')
      function Q(e) {
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
            r = O()(e)
          if (t) {
            var a = O()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return w()(this, n)
        }
      }
      var $ = T.a.ffe9ec3a,
        ee = T.a.j063b261,
        te = T.a.e57144f0,
        ne = T.a.f9f9210c,
        re = (function (e) {
          y()(n, e)
          var t = Q(n)
          function n() {
            var e
            f()(this, n)
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              S()(g()(e), 'state', { showAltTextEducationSheet: !1 }),
              S()(g()(e), '_handleOpenEducationPrompt', function () {
                var t = e.props.analytics
                e.setState({ showAltTextEducationSheet: !0 }), t.scribe({ component: 'education', action: 'click' })
              }),
              S()(g()(e), '_handleCloseEducationPrompt', function () {
                e.setState({ showAltTextEducationSheet: !1 })
              }),
              S()(g()(e), '_handleEducationPromptPrimaryAction', function () {
                var t = e.props.analytics
                e._handleCloseEducationPrompt(),
                  t.scribe({ component: 'education', element: 'alt_text_button', action: 'click' })
              }),
              S()(g()(e), '_handleEducationPromptSecondaryAction', function () {
                e.props.history.goBack()
              }),
              e
            )
          }
          return (
            m()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.addFlag,
                    n = e.analytics
                  e.showEducationOnMount &&
                    (this.setState({ showAltTextEducationSheet: !0 }),
                    n.scribe({ component: 'education', action: 'open' }),
                    t(P.a))
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.mediaItem,
                    n = e.onAltTextChange,
                    r = e.orientedImage,
                    a = e.value,
                    i = this.state.showAltTextEducationSheet,
                    o = t && t.id.toString()
                  return s.a.createElement(
                    D.a,
                    { style: ae.root },
                    i
                      ? s.a.createElement(J.a, {
                          actionLabel: te,
                          headline: $,
                          onAction: this._handleEducationPromptPrimaryAction,
                          onClose: this._handleCloseEducationPrompt,
                          onSecondaryAction: this._handleEducationPromptSecondaryAction,
                          primaryButtonTestID: U,
                          secondaryActionLabel: ne,
                          subtext: ee,
                        })
                      : null,
                    s.a.createElement(X, {
                      autofocus: !0,
                      currentMediaId: o,
                      maxLength: 1e3,
                      mediaItem: t,
                      onChange: n,
                      onShowEducation: this._handleOpenEducationPrompt,
                      orientedImage: r,
                      value: a,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(s.a.Component),
        ae = x.a.create(function (e) {
          return { root: { flexGrow: 1 } }
        }),
        ie = q(re),
        oe = n('jHSc'),
        ce = n('EeFI'),
        se = n('7JQg'),
        le = n('PbQQ'),
        ue = n('6vad'),
        de = n('cCdp'),
        pe = n('ZkMC'),
        fe = T.a.j9cf595f,
        he = T.a.d69a782e,
        me = T.a.faf745f9,
        ve = T.a.b96e6682,
        ge = T.a.h2437f25
      function be(e) {
        var t = e.currentWarnings,
          n = e.mediaItem,
          r = e.onWarningChange,
          a = e.orientedImage,
          i = [
            { label: me, value: 'adult_content' },
            { label: ve, value: 'graphic_violence' },
            { label: ge, value: 'other' },
          ],
          o = le.b.useOpaqueIdentifier(),
          c = s.a.createElement(L, { mediaItem: n, orientedImage: a })
        return s.a.createElement(
          D.a,
          { style: ye.root },
          s.a.createElement(
            D.a,
            { style: ye.modalContainer },
            null != t && t.size
              ? s.a.createElement(
                  pe.a,
                  { revealableTombstoneConfig: pe.c, sensitiveMediaWarnings: t, withRoundedCorners: !1 },
                  c,
                )
              : c,
            s.a.createElement(ue.b, { nativeID: o, subtext: he, text: fe }),
            s.a.createElement(
              D.a,
              { accessibilityLabelledBy: o, accessibilityRole: 'group' },
              i.map(function (e) {
                var n = e.label,
                  a = e.value
                return s.a.createElement(de.a, { checked: t && t.has(a), key: a, label: n, name: a, onChange: r })
              }),
            ),
          ),
        )
      }
      var ye = x.a.create(function (e) {
          return {
            modalContainer: { width: '100%', height: '100%', flexGrow: 1 },
            root: { display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', height: '100%', flexGrow: 1 },
          }
        }),
        _e = x.a.create(function (e) {
          return {
            root: { flexGrow: 1, flexShrink: 1, paddingBottom: e.spaces.space12 },
            rightControl: { display: 'flex', flexDirection: 'row' },
            prevButton: { marginEnd: e.spaces.space2 },
            saveButton: { marginStart: e.spaces.space12 },
            segmentedControlChildren: { flexGrow: 1 },
            leftRightButtons: { alignItems: 'center' },
            videoTrimmerWrapper: { flexGrow: 1, flexShrink: 1, marginBottom: e.spaces.space20 },
          }
        }),
        we = n('k/OQ'),
        Ee = n('/yvb'),
        Oe = n('oQhu'),
        Me = n('ddV6'),
        Se = n.n(Me),
        Pe = function (e) {
          var t = new Map()
          return (
            e.forEach(function (e) {
              var n = Se()(e, 2),
                r = n[0],
                a = n[1]
              t.set(r, a)
            }),
            t
          )
        },
        Ce = n('mN6z'),
        Te = n('95Se'),
        Re = n('7Mjr'),
        je = n('Mbn/'),
        xe = n('zIWA'),
        Ie = n('1auM'),
        De = n('eYns')
      function ke(e, t) {
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
      function Ae(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ke(Object(n), !0).forEach(function (t) {
                S()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ke(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function Le(e) {
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
            r = O()(e)
          if (t) {
            var a = O()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return w()(this, n)
        }
      }
      var Be = { section: 'alt_text' },
        We = { section: 'crop' },
        Fe = { section: 'sensitive_media' },
        Ue = T.a.e070024a,
        He = T.a.i2209530,
        ze = T.a.i7d24b36,
        Ve = T.a.f96a38a2,
        Ge = T.a.hac7c548,
        Ke = T.a.e3dbfba3,
        Ne = T.a.dd4a83a5,
        Xe = 'crop',
        Ze = 'alt_text',
        Ye = 'sensitive_media',
        qe = (function (e) {
          y()(n, e)
          var t = Le(n)
          function n(e) {
            var r
            f()(this, n),
              (r = t.call(this, e)),
              S()(g()(r), '_cropper', s.a.createRef()),
              S()(
                g()(r),
                '_getMemoizedCurrentTabMetadata',
                Object(Oe.a)(function (e, t) {
                  switch (e) {
                    case Ze:
                      return { namespace: Be, title: Ke, renderer: r._renderAltTextTab }
                    case Ye:
                      if (t) return { namespace: Fe, title: Ne, renderer: r._renderSensitiveMediaTab }
                    default:
                      return { namespace: We, title: Ge, renderer: r._renderCropTab }
                  }
                }),
              ),
              S()(g()(r), '_renderSegmentedControl', function () {
                var e = r.props.sensitiveMediaTabEnabled,
                  t = r._getSegmentedControlLinks(),
                  n = r._getCurrentTab(),
                  a = r._getMemoizedCurrentTabMetadata(n, e)
                return s.a.createElement(
                  s.a.Fragment,
                  null,
                  t.length > 1 ? s.a.createElement(we.a, { accessibilityLabel: Ue, links: t }) : null,
                  s.a.createElement(D.a, { style: _e.segmentedControlChildren }, a.renderer()),
                )
              }),
              S()(g()(r), '_renderAltTextTab', function () {
                var e = r.props.history,
                  t = r.state,
                  n = t.currentMediaId,
                  a = t.mediaMetadata,
                  i = t.orientedImage,
                  o = r._getCurrentMediaItem(),
                  c = a[n] && a[n].altText
                return s.a.createElement(ie, {
                  history: e,
                  key: n,
                  mediaItem: o,
                  onAltTextChange: r._handleAltTextChange,
                  orientedImage: i.get(n),
                  value: c,
                })
              }),
              S()(g()(r), '_renderCropTab', function () {
                var e = r.state,
                  t = e.cropData,
                  n = e.currentMediaId,
                  a = r._getCurrentMediaItem()
                return s.a.createElement(ce.a, {
                  defaultCropData: t.get(n),
                  key: n,
                  media: a,
                  ref: r._cropper,
                  withAspectRatioOptions: !0,
                })
              }),
              S()(g()(r), '_renderSensitiveMediaTab', function () {
                var e = r.state,
                  t = e.currentMediaId,
                  n = e.mediaMetadata,
                  a = e.orientedImage,
                  i = r._getCurrentMediaItem(),
                  o = n[t] && n[t].sensitiveMediaWarning
                return s.a.createElement(be, {
                  currentWarnings: o,
                  key: t,
                  mediaItem: i,
                  onWarningChange: r._handleSensitiveWarningChange,
                  orientedImage: a.get(t),
                })
              }),
              S()(g()(r), '_renderAppBarRightControl', function () {
                var e = r.state.isProcessing,
                  t = r._getNextMediaIndex(1),
                  n = r._getNextMediaIndex(-1)
                return s.a.createElement(
                  D.a,
                  { style: _e.rightControl },
                  r._hasMediaAtIndex(n) || r._hasMediaAtIndex(t)
                    ? s.a.createElement(
                        D.a,
                        { style: [_e.rightControl, _e.leftRightButtons] },
                        s.a.createElement(Ee.a, {
                          accessibilityLabel: Ve,
                          disabled: !r._hasMediaAtIndex(n),
                          icon: s.a.createElement(Te.a, null),
                          onPress: r._handleClickToMediaAtIndex(n),
                          size: 'small',
                          style: _e.prevButton,
                          type: 'primaryOutlined',
                        }),
                        s.a.createElement(Ee.a, {
                          accessibilityLabel: ze,
                          disabled: !r._hasMediaAtIndex(t),
                          icon: s.a.createElement(Re.a, null),
                          onPress: r._handleClickToMediaAtIndex(t),
                          size: 'small',
                          type: 'primaryOutlined',
                        }),
                      )
                    : null,
                  s.a.createElement(
                    Ee.a,
                    {
                      disabled: e,
                      onPress: r._handleEndEditingClick,
                      size: 'small',
                      style: _e.saveButton,
                      testID: F,
                      type: 'primaryFilled',
                    },
                    He,
                  ),
                )
              }),
              S()(g()(r), '_handleCancelEditingClick', function (e) {
                r._scribeWithNamespace({ action: 'cancel' }), e()
              }),
              S()(g()(r), '_handleClickTab', function (e) {
                var t = r.props.analytics
                r._handleSaveCropData(),
                  r._scribeWithNamespace({ element: e, action: 'click' }),
                  t.scribePageImpression()
              }),
              S()(g()(r), '_getCurrentMediaItem', function () {
                var e = r.props.media,
                  t = r.state.currentMediaId
                return e.find(function (e) {
                  return e.id === t
                })
              }),
              S()(g()(r), '_getNextMediaIndex', function (e) {
                var t = r.props.media,
                  n = r._getCurrentMediaItem()
                return t.indexOf(n) + e
              }),
              S()(g()(r), '_hasMediaAtIndex', function (e) {
                var t = r.props.media
                return e >= 0 && e < t.length
              }),
              S()(g()(r), '_handleClickToMediaAtIndex', function (e) {
                return function () {
                  var t = r.props.media
                  if (r._hasMediaAtIndex(e)) {
                    r._handleSaveCropData()
                    var n = t[e].id
                    r.setState({ currentMediaId: n })
                  }
                }
              }),
              S()(g()(r), '_saveMediaMetadata', function () {
                var e = r.props,
                  t = e.media,
                  n = e.setMediaMetadata,
                  a = r.state.mediaMetadata
                t.forEach(function (e) {
                  n(e.id, a[e.id])
                })
              }),
              S()(g()(r), '_handleEndEditingClick', function () {
                var e = r.props.history,
                  t = r._cropper && r._cropper.current,
                  n = r.state.cropData
                if (t || n.size) {
                  var a = r.props,
                    i = a.media,
                    o = a.processMedia,
                    c = a.updateMediaUpload,
                    s = r.state.currentMediaId
                  r.setState({ isProcessing: !0 })
                  var l = t ? Pe([].concat(d()(n), [[s, t.getCropData()]])) : n,
                    u = i.map(function (e) {
                      return l.get(e.id) ? (c({ id: e.id, cropData: l.get(e.id) }), o(e.id)) : Promise.resolve()
                    })
                  Promise.all(u).then(function () {
                    r._scribeWithNamespace({ action: 'done' })
                  })
                }
                r._saveMediaMetadata(), e.goBack()
              }),
              S()(g()(r), '_handleAltTextChange', function (e) {
                r.setState(function (t) {
                  return {
                    mediaMetadata: Ae(
                      Ae({}, t.mediaMetadata),
                      {},
                      S()({}, t.currentMediaId, Ae(Ae({}, t.mediaMetadata[t.currentMediaId]), {}, { altText: e })),
                    ),
                  }
                })
              }),
              S()(g()(r), '_handleSensitiveWarningChange', function (e, t) {
                r.setState(function (n) {
                  var r =
                    (n.mediaMetadata[n.currentMediaId] && n.mediaMetadata[n.currentMediaId].sensitiveMediaWarning) ||
                    new Set()
                  return (
                    t ? r.add(e) : r.delete(e),
                    {
                      mediaMetadata: Ae(
                        Ae({}, n.mediaMetadata),
                        {},
                        S()(
                          {},
                          n.currentMediaId,
                          Ae(Ae({}, n.mediaMetadata[n.currentMediaId]), {}, { sensitiveMediaWarning: r }),
                        ),
                      ),
                    }
                  )
                })
              }),
              S()(g()(r), '_handleSaveCropData', function () {
                var e = r._cropper && r._cropper.current
                if (e) {
                  var t = r.state.currentMediaId,
                    n = e.getCropData(),
                    a = r._getCurrentMediaItem()
                  if (
                    a &&
                    !Object(Ce.a)(n, r.state.cropData.get(t)) &&
                    (r.setState(function (e) {
                      return { orientedImage: Pe([].concat(d()(e.orientedImage), [[t, null]])) }
                    }),
                    a.originalMediaFile && a.originalMediaFile instanceof Ie.a)
                  ) {
                    var i = a.cropData
                    Object(De.b)(a.originalMediaFile, { cropData: n || i })
                      .then(function (e) {
                        return new Ie.a(e).withDimensionsAndOrientation().then(function (e) {
                          r.setState(function (r) {
                            return {
                              orientedImage: Pe([].concat(d()(r.orientedImage), [[t, e]])),
                              cropData: Pe([].concat(d()(r.cropData), [[t, n]])),
                            }
                          })
                        })
                      })
                      .catch(function () {
                        r.setState(function (e) {
                          return { orientedImage: Pe([].concat(d()(e.orientedImage), [[t, void 0]])) }
                        })
                      })
                  }
                  r.setState(function (e) {
                    return { cropData: Pe([].concat(d()(e.cropData), [[t, n]])) }
                  })
                }
              }),
              S()(g()(r), '_scribeWithNamespace', function (e) {
                var t = r.props,
                  n = t.analytics,
                  a = t.sensitiveMediaTabEnabled,
                  i = r._getCurrentTab(),
                  o = r._getMemoizedCurrentTabMetadata(i, a)
                n.scribe(Ae(Ae({}, o.namespace), e))
              }),
              S()(g()(r), '_getMediaMetadata', function (e) {
                var t = {}
                return (
                  e.forEach(function (e) {
                    return (t[e.id] = e.mediaMetadata)
                  }),
                  t
                )
              })
            var a = e.initialMediaId,
              i = e.media,
              o = r._getMediaMetadata(i)
            return (
              (r.state = {
                cropData: new Map(),
                isProcessing: !1,
                mediaMetadata: o,
                currentMediaId: a || -1,
                orientedImage: new Map(),
              }),
              r
            )
          }
          return (
            m()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.altTextTabEnabled,
                    n = e.cropTabEnabled,
                    r = e.history,
                    a = e.sensitiveMediaTabEnabled,
                    i = t ? n || a : n && a,
                    o = this._getCurrentTab(),
                    c = this._getMemoizedCurrentTabMetadata(o, a)
                  return s.a.createElement(
                    se.b,
                    { namespace: c.namespace },
                    s.a.createElement(
                      oe.b,
                      {
                        backButtonType: 'back',
                        containerStyle: _e.root,
                        documentTitle: c.title,
                        history: r,
                        onBackClick: this._handleCancelEditingClick,
                        rightControl: this._renderAppBarRightControl(),
                        title: c.title,
                        withBottomBorder: !1,
                      },
                      i ? this._renderSegmentedControl() : c.renderer(),
                    ),
                  )
                },
              },
              {
                key: '_getCurrentTab',
                value: function () {
                  var e,
                    t,
                    n = this.props,
                    r = n.altTextTabEnabled,
                    a = n.cropTabEnabled
                  return null !== (e = this.props.location.state) && void 0 !== e && e.tab
                    ? null === (t = this.props.location.state) || void 0 === t
                      ? void 0
                      : t.tab
                    : a
                    ? Xe
                    : r && Ze
                },
              },
              {
                key: '_getSegmentedControlLinks',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.analytics,
                    r = t.location,
                    a = t.sensitiveMediaTabEnabled,
                    i = this._getCurrentMediaItem(),
                    o = []
                  return (
                    i &&
                      i.originalMediaFile &&
                      i.originalMediaFile.isImage &&
                      o.push({
                        to: Ae(Ae({}, r), {}, { state: Ae(Ae({}, r.state), {}, { tab: Xe }) }),
                        label: s.a.createElement(je.a, null),
                        key: Xe,
                        accessibilityLabel: Ge,
                        isActive: function () {
                          var e
                          return (null === (e = r.state) || void 0 === e ? void 0 : e.tab) === Xe
                        },
                        onClick: function () {
                          return n.scribePageImpression()
                        },
                      }),
                    o.push({
                      to: Ae(Ae({}, r), {}, { state: Ae(Ae({}, r.state), {}, { tab: Ze }) }),
                      label: s.a.createElement(H.b, { weight: 'bold' }, 'ALT'),
                      key: Ze,
                      accessibilityLabel: Ke,
                      isActive: function () {
                        var e
                        return (null === (e = r.state) || void 0 === e ? void 0 : e.tab) === Ze
                      },
                      onClick: function () {
                        return e._handleClickTab('alt_text_button')
                      },
                    }),
                    a &&
                      o.push({
                        to: Ae(Ae({}, r), {}, { state: Ae(Ae({}, r.state), {}, { tab: Ye }) }),
                        label: s.a.createElement(xe.a, null),
                        key: Ye,
                        accessibilityLabel: Ne,
                        isActive: function () {
                          var e
                          return (null === (e = r.state) || void 0 === e ? void 0 : e.tab) === Ye
                        },
                        onClick: function () {
                          return e._handleClickTab('sensitive_media_tab')
                        },
                      }),
                    o
                  )
                },
              },
            ]),
            n
          )
        })(s.a.Component)
      S()(qe, 'defaultProps', { altTextTabEnabled: !0, cropTabEnabled: !0 })
      var Je = qe,
        Qe = n('sjK1'),
        $e = n('RqPI'),
        et = n('AspN'),
        tt = n('0KEI'),
        nt = n('FDFL'),
        rt = function (e) {
          var t = Object($e.o)(e)
          return t && Object(nt.b)(e, t)
        },
        at = Object(Z.a)()
          .propsFromState(function () {
            return { language: $e.o, languageName: rt }
          })
          .propsFromActions(function () {
            return {
              addMedia: et.b,
              createLocalApiErrorHandler: Object(tt.createLocalApiErrorHandlerWithContextFactory)(
                'VIDEO_SUBTITLES_UPLOAD',
              ),
              fetchAvailableLanguagesIfNeeded: nt.a,
              removeMediaUpload: et.i,
            }
          })
          .withAnalytics(),
        it = n('eyty'),
        ot = (n('7xRU'), n('pHub')),
        ct = n('62wY'),
        st = 'fileInput',
        lt = n('/Imo'),
        ut = s.a.createElement(ot.a, null),
        dt = T.a.icbec4ae,
        pt = function (e) {
          var t = e.icon,
            n = e.style,
            r = e.withIcon,
            i = o()(e, ['icon', 'style', 'withIcon']),
            c = ct.a.join(',')
          return s.a.createElement(
            D.a,
            null,
            s.a.createElement(
              lt.a,
              a()({}, i, { accept: c, icon: r ? t : void 0, style: [ft.button, n], testID: st, type: 'primaryFilled' }),
              dt,
            ),
          )
        }
      pt.defaultProps = { icon: ut, size: 'medium', withIcon: !0 }
      var ft = x.a.create(function (e) {
          return { button: { alignSelf: 'start' } }
        }),
        ht = pt
      function mt(e) {
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
            r = O()(e)
          if (t) {
            var a = O()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return w()(this, n)
        }
      }
      var vt = T.a.bf4e9d79,
        gt = T.a.j435467e,
        bt = T.a.a6b267f9,
        yt = (function (e) {
          y()(n, e)
          var t = mt(n)
          function n() {
            var e
            f()(this, n)
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              S()(g()(e), '_renderSubtitlesPickerButton', function () {
                return s.a.createElement(ht, { onChange: e._handleAddMediaFiles, type: 'brandText' })
              }),
              S()(g()(e), '_renderSubtitlesRemovalButton', function () {
                return s.a.createElement(Ee.a, { onPress: e._handleRemoveSubtitles, type: 'destructiveOutlined' }, bt)
              }),
              S()(g()(e), '_handleRemoveSubtitles', function () {
                ;(0, e.props.onRemove)()
              }),
              S()(g()(e), '_handleAddMediaFiles', function (t) {
                var n = e.props,
                  r = n.addMedia,
                  a = n.analytics,
                  i = n.language,
                  o = n.languageName,
                  c = n.onChange
                a.scribe({ element: 'subtitles_upload', action: 'click' }),
                  r(t, { location: it.d.Tweet }).then(function (e) {
                    c(e[0], i, o)
                  })
              }),
              e
            )
          }
          return (
            m()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.createLocalApiErrorHandler
                  ;(0, e.fetchAvailableLanguagesIfNeeded)().catch(t())
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props.subtitles
                  return s.a.createElement(
                    D.a,
                    { style: _t.root },
                    s.a.createElement(
                      D.a,
                      { style: _t.attachmentContainer },
                      s.a.createElement(H.b, { size: 'title3', style: _t.header, weight: 'heavy' }, vt),
                      s.a.createElement(H.b, { size: 'body', style: _t.body }, gt),
                      s.a.createElement(
                        D.a,
                        { style: _t.buttonWrapper },
                        e ? this._renderSubtitlesRemovalButton() : this._renderSubtitlesPickerButton(),
                      ),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(s.a.Component),
        _t = x.a.create(function (e) {
          return {
            root: { display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', flex: 1 },
            attachmentContainer: { flex: 1, margin: e.spaces.space16, maxHeight: '100%' },
            body: { marginBottom: e.spaces.space28 },
            buttonWrapper: { flexDirection: 'row', alignItems: 'center' },
            header: { marginTop: e.spaces.space16, marginBottom: e.spaces.space8 },
          }
        }),
        wt = at(yt),
        Et = n('R5K7'),
        Ot = n('nV1z'),
        Mt = n('8A5z')
      function St(e, t) {
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
      function Pt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? St(Object(n), !0).forEach(function (t) {
                S()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : St(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function Ct(e) {
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
            r = O()(e)
          if (t) {
            var a = O()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return w()(this, n)
        }
      }
      var Tt = { section: 'subtitles' },
        Rt = { section: 'trimmer' },
        jt = { section: 'sensitive_media' },
        xt = T.a.c91f83ae,
        It = T.a.icbec4ae,
        Dt = T.a.e0342f98,
        kt = T.a.i2209530,
        At = T.a.b772cd65,
        Lt = T.a.e0342f98,
        Bt = T.a.e7048e73,
        Wt = T.a.dd4a83a5,
        Ft = 'subtitles',
        Ut = 'trimmer',
        Ht = 'sensitive_media',
        zt = (function (e) {
          y()(n, e)
          var t = Ct(n)
          function n(e) {
            var r
            f()(this, n),
              (r = t.call(this, e)),
              S()(g()(r), '_videoTrimmerRef', s.a.createRef()),
              S()(
                g()(r),
                '_getMemoizedCurrentTabMetadata',
                Object(Oe.a)(function (e, t, n) {
                  switch (e) {
                    case Ut:
                      if (t) return { namespace: Rt, title: xt, renderer: r._renderTrimmerTab }
                    case Ht:
                      if (n) return { namespace: jt, title: Wt, renderer: r._renderSensitiveMediaTab }
                    default:
                      return { namespace: Tt, title: It, renderer: r._renderSubtitlesTab }
                  }
                }),
              ),
              S()(g()(r), '_renderSegmentedControl', function () {
                var e,
                  t = r.props,
                  n = t.isVideoTrimmerEnabled,
                  a = t.location,
                  i = t.sensitiveMediaTabEnabled,
                  o = r._getSegmentedControlLinks(),
                  c = r._getMemoizedCurrentTabMetadata(null === (e = a.state) || void 0 === e ? void 0 : e.tab, n, i)
                return s.a.createElement(
                  s.a.Fragment,
                  null,
                  o.length > 1 ? s.a.createElement(we.a, { accessibilityLabel: xt, links: o }) : null,
                  s.a.createElement(D.a, { style: _e.segmentedControlChildren }, c.renderer()),
                )
              }),
              S()(g()(r), '_renderTrimmerTab', function () {
                var e = r._getCurrentMediaItem(),
                  t = r.state.trimData
                if (null != e && e.mediaFile && e.mediaFile instanceof Qe.c) {
                  var n = e.mediaFile,
                    a = {
                      duration: 1e3 * n.duration,
                      height: n.height,
                      variants: [{ src: n.url, type: n.type }],
                      width: n.width,
                    }
                  return s.a.createElement(
                    D.a,
                    { style: _e.videoTrimmerWrapper },
                    s.a.createElement(Et.a, { defaultTrimData: t, ref: r._videoTrimmerRef, video: a }),
                  )
                }
              }),
              S()(g()(r), '_addTrimDataToState', function () {
                var e,
                  t = null === (e = r._videoTrimmerRef.current) || void 0 === e ? void 0 : e.getTrimData()
                null != t &&
                  t.endTime &&
                  null != t &&
                  t.startTime &&
                  r.setState({ trimData: { endTime: t.endTime, startTime: t.startTime } })
              }),
              S()(g()(r), '_saveTrimData', function () {
                var e,
                  t = r.props,
                  n = t.processMedia,
                  a = t.updateMediaUpload,
                  i = r._getCurrentMediaItem(),
                  o =
                    (null === (e = r._videoTrimmerRef.current) || void 0 === e ? void 0 : e.getTrimData()) ||
                    r.state.trimData
                o &&
                  i &&
                  (a(Pt(Pt({}, i), {}, { trimData: { endTime: o.endTime / 1e3, startTime: o.startTime / 1e3 } })),
                  n(i.id))
              }),
              S()(g()(r), '_renderSubtitlesTab', function () {
                var e = r.props,
                  t = e.history,
                  n = e.initialMediaId,
                  a = r._getCurrentMediaItem(),
                  i = (null == a ? void 0 : a.mediaMetadata) || { subtitles: void 0 },
                  o = null == i ? void 0 : i.subtitles
                return s.a.createElement(wt, {
                  history: t,
                  key: n,
                  mediaItem: a,
                  onChange: r._handleSubtitlesChange,
                  onRemove: r._handleSubtitlesRemove,
                  subtitles: o,
                })
              }),
              S()(g()(r), '_renderSensitiveMediaTab', function () {
                var e = r.state.sensitiveMediaWarning,
                  t = r._getCurrentMediaItem()
                return s.a.createElement(be, {
                  currentWarnings: e,
                  mediaItem: t,
                  onWarningChange: r._handleSensitiveWarningChange,
                })
              }),
              S()(g()(r), '_renderAppBarRightControl', function () {
                var e = r.props.isVideoTrimmerEnabled
                return s.a.createElement(
                  D.a,
                  { style: _e.rightControl },
                  s.a.createElement(
                    Ee.a,
                    { onPress: r._handleEndEditingClick, size: 'small', style: _e.saveButton, type: 'primaryFilled' },
                    e ? kt : At,
                  ),
                )
              }),
              S()(g()(r), '_getCurrentMediaItem', function () {
                var e = r.props,
                  t = e.initialMediaId
                return e.media.find(function (e) {
                  return e.id === t
                })
              }),
              S()(g()(r), '_handleEndEditingClick', function () {
                var e = r.props,
                  t = e.history,
                  n = e.isVideoTrimmerEnabled,
                  a = e.sensitiveMediaTabEnabled
                n && r._saveTrimData(), a && r._saveSensitiveMediaWarning(), t.goBack()
              }),
              S()(g()(r), '_saveSubtitles', function (e) {
                var t = r.props,
                  n = t.media,
                  a = t.setMediaMetadata,
                  i = r._getCurrentMediaItem(),
                  o = (null == i ? void 0 : i.mediaMetadata) || { subtitles: void 0 }
                n.forEach(function (t) {
                  a(t.id, Pt(Pt({}, o), {}, { subtitles: e }))
                })
              }),
              S()(g()(r), '_handleSubtitlesChange', function (e, t, n) {
                r.props.analytics.scribe({ element: 'subtitles_upload', action: 'add' }),
                  r._saveSubtitles({ lang: t, upload: e, displayName: n || Lt })
              }),
              S()(g()(r), '_handleSubtitlesRemove', function () {
                r.props.analytics.scribe({ element: 'subtitles_upload', action: 'remove' }), r._saveSubtitles(void 0)
              }),
              S()(g()(r), '_saveSensitiveMediaWarning', function () {
                var e = r.props.setMediaMetadata,
                  t = r.state.sensitiveMediaWarning,
                  n = r._getCurrentMediaItem()
                n && e(n.id, Pt(Pt({}, n.mediaMetadata), {}, { sensitiveMediaWarning: t }))
              }),
              S()(g()(r), '_handleSensitiveWarningChange', function (e, t) {
                r.setState(function (n) {
                  var r = n.sensitiveMediaWarning
                  return t ? r.add(e) : r.delete(e), { sensitiveMediaWarning: r }
                })
              }),
              S()(g()(r), '_handleClickSensitiveMediaTab', function () {
                var e = r.props.analytics
                r._addTrimDataToState(), e.scribePageImpression()
              })
            var a = r._getCurrentMediaItem()
            if (null != a && a.mediaFile && a.mediaFile instanceof Qe.c) {
              var i = a.mediaFile,
                o = a.mediaMetadata,
                c = a.trimData,
                l = {
                  endTime: null != c && c.endTime ? 1e3 * c.endTime : 1e3 * i.duration,
                  startTime: null != c && c.startTime ? 1e3 * c.startTime : 0,
                }
              r.state = {
                trimData: l,
                sensitiveMediaWarning: (null == o ? void 0 : o.sensitiveMediaWarning) || new Set(),
              }
            } else r.props.history.replace('/')
            return r
          }
          return (
            m()(n, [
              {
                key: 'render',
                value: function () {
                  var e,
                    t = this.props,
                    n = t.history,
                    r = t.isVideoTrimmerEnabled,
                    a = t.location,
                    i = t.sensitiveMediaTabEnabled,
                    o = this._getMemoizedCurrentTabMetadata(
                      null === (e = a.state) || void 0 === e ? void 0 : e.tab,
                      r,
                      i,
                    )
                  return s.a.createElement(
                    se.b,
                    { namespace: o.namespace },
                    s.a.createElement(
                      oe.b,
                      {
                        backButtonType: 'back',
                        containerStyle: _e.root,
                        documentTitle: o.title,
                        history: n,
                        rightControl: this._renderAppBarRightControl(),
                        title: o.title,
                        withBottomBorder: !1,
                      },
                      this._renderSegmentedControl(),
                    ),
                  )
                },
              },
              {
                key: '_getSegmentedControlLinks',
                value: function () {
                  var e,
                    t,
                    n = this.props,
                    r = n.isVideoTrimmerEnabled,
                    a = n.location,
                    i = n.sensitiveMediaTabEnabled,
                    o = this._getCurrentMediaItem(),
                    c = []
                  return (
                    r &&
                      (null == o || null === (e = o.originalMediaFile) || void 0 === e ? void 0 : e.isVideo) &&
                      c.push({
                        to: Pt(Pt({}, a), {}, { state: Pt(Pt({}, a.state), {}, { tab: Ut }) }),
                        label: s.a.createElement(Ot.a, null),
                        key: Ut,
                        accessibilityLabel: Bt,
                        isActive: function () {
                          var e
                          return (null === (e = a.state) || void 0 === e ? void 0 : e.tab) === Ut
                        },
                      }),
                    (null == o || null === (t = o.originalMediaFile) || void 0 === t ? void 0 : t.isVideo) &&
                      c.push({
                        to: Pt(Pt({}, a), {}, { state: Pt(Pt({}, a.state), {}, { tab: Ft }) }),
                        label: s.a.createElement(Mt.a, null),
                        key: Ft,
                        accessibilityLabel: Dt,
                        isActive: function () {
                          var e
                          return (null === (e = a.state) || void 0 === e ? void 0 : e.tab) === Ft
                        },
                        onClick: this._addTrimDataToState,
                      }),
                    i &&
                      c.push({
                        to: Pt(Pt({}, a), {}, { state: Pt(Pt({}, a.state), {}, { tab: Ht }) }),
                        label: s.a.createElement(xe.a, null),
                        key: Ht,
                        accessibilityLabel: Wt,
                        isActive: function () {
                          var e
                          return (null === (e = a.state) || void 0 === e ? void 0 : e.tab) === Ht
                        },
                        onClick: this._handleClickSensitiveMediaTab,
                      }),
                    c
                  )
                },
              },
            ]),
            n
          )
        })(s.a.Component)
      t.a = function (e) {
        var t,
          n,
          r = e.altTextTabEnabled,
          i = e.cropTabEnabled,
          c = o()(e, ['altTextTabEnabled', 'cropTabEnabled']),
          u = c.history,
          d = c.initialMediaId,
          p = c.media,
          f = s.a.useContext(l.a).featureSwitches,
          h =
            null === (t = c.media[0]) || void 0 === t || null === (n = t.mediaFile) || void 0 === n ? void 0 : n.isVideo
        if (p.length <= 0 || !d) return u.replace('/'), null
        if (h) {
          var m = f.isTrue('responsive_web_video_trimmer_enabled')
          return s.a.createElement(zt, a()({}, c, { isVideoTrimmerEnabled: m }))
        }
        return s.a.createElement(Je, a()({}, c, { altTextTabEnabled: r, cropTabEnabled: i }))
      }
    },
    nV1z: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        i = n('ERkP'),
        o = n.n(i),
        c = n('Lsrn'),
        s = n('k/Ka')
      function l(e, t) {
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
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var d = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(s.a)(
          'svg',
          u(
            u({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [c.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          o.a.createElement(
            'g',
            null,
            o.a.createElement('path', {
              d: 'M19.75 2H4.25C3.01 2 2 3.01 2 4.25v15.5C2 20.99 3.01 22 4.25 22h15.5c1.24 0 2.25-1.01 2.25-2.25V4.25C22 3.01 20.99 2 19.75 2zM5.25 20.033h-1.5v-2.5h1.5v2.5zm0-4.55h-1.5v-2.5h1.5v2.5zm0-4.55h-1.5v-2.5h1.5v2.5zm0-4.55h-1.5v-2.5h1.5v2.5zM17 20.5H7v-7.75h10v7.75zm0-9.25H7V3.5h10v7.75zm3.25 8.783h-1.5v-2.5h1.5v2.5zm0-4.55h-1.5v-2.5h1.5v2.5zm0-4.55h-1.5v-2.5h1.5v2.5zm0-4.55h-1.5v-2.5h1.5v2.5z',
            }),
          ),
        )
      }
      ;(d.metadata = { width: 24, height: 24 }), (t.a = d)
    },
  },
])
//# sourceMappingURL=WIPED
