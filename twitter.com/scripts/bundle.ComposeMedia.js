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
        b = n('/yvb'),
        y = n('3XMw'),
        _ = n.n(y),
        w = n('3rX5'),
        E = n('rHpw'),
        O = n('MWbm'),
        M = E.a.create(function (e) {
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
        S = function (e) {
          var t = e.circle,
            n = e.height,
            r = e.width
          return g.createElement(O.a, {
            pointerEvents: 'none',
            style: [M.mask, { width: r, height: n }, t && M.circle],
          })
        },
        P = n('ZvMt'),
        C = n('97Jx'),
        T = n.n(C),
        R = n('m3Bd'),
        j = n.n(R),
        x = n('CHgo'),
        I = n('7ep7')
      function D(e) {
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
      var k = (function (e) {
          u()(n, e)
          var t = D(n)
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
                  ;(a || n || i) && (r._removeTouchMoveToScrollListener = Object(x.a)(e, r._preventDefaultEvent, !1)),
                    o && (r._removeScrollToScaleListener = Object(x.b)(e, r._preventDefaultEvent, !1))
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
              (r._panResponder = I.a.create({
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
                      j()(e, ['children', 'onPanEnd', 'onPanMove', 'onPinchMove', 'onWheel']))
                  return g.createElement(
                    O.a,
                    T()({}, t, { onWheel: this._handleWheel, ref: this._setRef }, this._panResponder.panHandlers),
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
        })(g.Component),
        A = n('9RkS'),
        L = n('rOXj'),
        B = n('aITJ'),
        W = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('Lsrn')),
        F = n('k/Ka')
      function U(e, t) {
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
      function H(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? U(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : U(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var z = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(F.a)(
          'svg',
          H(
            H({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [W.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          g.createElement(
            'g',
            null,
            g.createElement('path', {
              d: 'M19.75 19.944H4.25c-1.24 0-2.25-1.01-2.25-2.25V6.306c0-1.24 1.01-2.25 2.25-2.25h15.5c1.24 0 2.25 1.01 2.25 2.25v11.39c0 1.24-1.01 2.248-2.25 2.248zM4.25 5.556c-.413 0-.75.337-.75.75v11.39c0 .412.337.75.75.75h15.5c.413 0 .75-.338.75-.75V6.305c0-.413-.337-.75-.75-.75H4.25z',
            }),
          ),
        )
      }
      z.metadata = { width: 24, height: 24 }
      var V = z
      function G(e, t) {
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
      function K(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? G(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : G(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var N = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(F.a)(
          'svg',
          K(
            K({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [W.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          g.createElement(
            'g',
            null,
            g.createElement('path', {
              d: 'M19.75 19.89H4.25C3.01 19.89 2 18.88 2 17.64v-7.28c0-1.24 1.01-2.25 2.25-2.25h15.5c1.24 0 2.25 1.01 2.25 2.25v7.277c0 1.24-1.01 2.25-2.25 2.25zM4.25 9.61c-.413 0-.75.338-.75.75v7.278c0 .413.337.75.75.75h15.5c.413 0 .75-.337.75-.75V10.36c0-.412-.337-.75-.75-.75H4.25z',
            }),
          ),
        )
      }
      N.metadata = { width: 24, height: 24 }
      var X = N
      function Z(e, t) {
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
      function Y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Z(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Z(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var q = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(F.a)(
          'svg',
          Y(
            Y({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [W.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          g.createElement(
            'g',
            null,
            g.createElement('path', {
              d: 'M19.75 22H4.25C3.01 22 2 20.99 2 19.75V4.25C2 3.01 3.01 2 4.25 2h15.5C20.99 2 22 3.01 22 4.25v15.5c0 1.24-1.01 2.25-2.25 2.25zM4.25 3.5c-.413 0-.75.337-.75.75v15.5c0 .413.337.75.75.75h15.5c.413 0 .75-.337.75-.75V4.25c0-.413-.337-.75-.75-.75H4.25z',
            }),
          ),
        )
      }
      q.metadata = { width: 24, height: 24 }
      var J = q
      function Q(e, t) {
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
      function $(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Q(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Q(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var ee = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(F.a)(
          'svg',
          $(
            $({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [W.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          g.createElement(
            'g',
            null,
            g.createElement('path', {
              d: 'M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z',
            }),
            g.createElement('path', {
              d: 'M15.21 11c0 .41-.34.75-.75.75h-2.71v2.71c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2.71H7.54c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.71V7.54c0-.41.34-.75.75-.75s.75.34.75.75v2.71h2.71c.41 0 .75.34.75.75z',
            }),
          ),
        )
      }
      ee.metadata = { width: 24, height: 24 }
      var te = ee
      function ne(e, t) {
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
      function re(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ne(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ne(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var ae = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(F.a)(
          'svg',
          re(
            re({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [W.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          g.createElement(
            'g',
            null,
            g.createElement('path', {
              d: 'M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z',
            }),
            g.createElement('path', {
              d: 'M14.46 11.75H7.54c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h6.92c.415 0 .75.336.75.75s-.335.75-.75.75z',
            }),
          ),
        )
      }
      ae.metadata = { width: 24, height: 24 }
      var ie = ae
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
          var n,
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var ce = _.a.d85bc1b8,
        se = _.a.f596ace8,
        le = _.a.df031fca,
        ue = _.a.b40332c5,
        de = _.a.e547b368,
        pe = _.a.f7571204,
        fe = _.a.e6e16811,
        he =
          Math.log2 ||
          function (e) {
            return Math.log(e) * Math.LOG2E
          },
        me = (function (e) {
          u()(n, e)
          var t = oe(n)
          function n(e) {
            var r, i
            return (
              a()(this, n),
              (r = t.call(this, e)),
              v()(s()(r), '_previousLeft', 0),
              v()(s()(r), '_previousTop', 0),
              v()(s()(r), '_panStyles', { top: 0, left: 0 }),
              v()(s()(r), '_shouldShowZoomControl', function () {
                return (!B.b.isMobileOS() || !L.a.isTouchSupported()) && r.props.withZoomControl
              }),
              v()(s()(r), '_renderControls', function () {
                var e = r.props,
                  t = e.image,
                  n = e.withAspectRatioOptions,
                  a = r.state.aspectRatio,
                  i = t.width / t.height,
                  o = r._shouldShowZoomControl()
                return n || o
                  ? g.createElement(
                      O.a,
                      { style: ve.controlsContainer },
                      n
                        ? g.createElement(
                            O.a,
                            { style: ve.ratioContainer },
                            g.createElement(b.a, {
                              accessibilityLabel: se,
                              borderColor: 'transparent',
                              color: a === i ? 'primary' : 'gray700',
                              hoverLabel: { label: de },
                              icon: g.createElement(V, null),
                              onPress: r._setAspectRatio(i),
                              size: 'medium',
                            }),
                            g.createElement(b.a, {
                              accessibilityLabel: le,
                              borderColor: 'transparent',
                              color: a === 16 / 9 ? 'primary' : 'gray700',
                              hoverLabel: { label: pe },
                              icon: g.createElement(X, null),
                              onPress: r._setAspectRatio(16 / 9),
                              size: 'medium',
                            }),
                            g.createElement(b.a, {
                              accessibilityLabel: ue,
                              borderColor: 'transparent',
                              color: 1 === a ? 'primary' : 'gray700',
                              hoverLabel: { label: fe },
                              icon: g.createElement(J, null),
                              onPress: r._setAspectRatio(1),
                              size: 'medium',
                            }),
                          )
                        : null,
                      o
                        ? g.createElement(
                            O.a,
                            { style: ve.zoomContainer },
                            g.createElement(A.a, {
                              accessibilityLabel: ce,
                              max: r._maxScale,
                              maxIcon: g.createElement(te, { style: ve.icon }),
                              min: 0,
                              minIcon: g.createElement(ie, { style: ve.icon }),
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
                  o = P.a.getCoverDimensions({ width: i, height: a }, t),
                  c = o.height
                return { width: o.width * Math.pow(2, e), height: c * Math.pow(2, e) }
              }),
              v()(s()(r), '_getMaskDimensions', function () {
                var e = r.state,
                  t = e.aspectRatio,
                  n = e.containerHeight,
                  a = e.containerWidth,
                  i = P.a.getContainDimensions({ width: a - 50, height: n - 50 }, t),
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
                    c = he(i / (t.width * o))
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
              (r._maxScale = ((i = e.image), Math.max(Math.min(he(i.width / 150), he(i.height / 150), 3), 0.5))),
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
                  return g.createElement(
                    O.a,
                    { style: ve.container },
                    g.createElement(
                      k,
                      {
                        onLayout: this._handleLayout,
                        onPanEnd: this._handlePanEnd,
                        onPanMove: this._handlePanMove,
                        onPinchMove: r ? this._handlePinchMove : void 0,
                        onWheel: r ? this._handleWheel : void 0,
                        style: ve.root,
                      },
                      u
                        ? g.createElement(
                            g.Fragment,
                            null,
                            g.createElement(w.a, {
                              ref: this._setImageRef,
                              source: { uri: n.src, width: o, height: i },
                              style: ve.image,
                            }),
                            g.createElement(S, { circle: t, height: s, width: l }),
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
        })(g.Component)
      v()(me, 'defaultProps', { circle: !1, withZoomControl: !0 })
      var ve = E.a.create(function (e) {
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
      t.a = me
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
        o = n('Lsrn'),
        c = n('k/Ka')
      function s(e, t) {
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
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? s(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var u = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(c.a)(
          'svg',
          l(
            l({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [o.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          i.createElement(
            'g',
            null,
            i.createElement('path', {
              d: 'M9.008 15.205c-1.766 0-3.187-1.35-3.187-3.196v-.02c0-1.8 1.388-3.214 3.26-3.214 1.26 0 2.075.53 2.62 1.29L10.494 11c-.306-.42-.798-.695-1.357-.695-.93 0-1.684.754-1.684 1.684s.755 1.684 1.685 1.684c.578 0 1.087-.292 1.39-.735l1.22.87c-.583.802-1.368 1.394-2.737 1.394h-.002zm6.582 0c-1.764 0-3.185-1.35-3.185-3.196v-.02c0-1.8 1.386-3.214 3.258-3.214 1.262 0 2.075.53 2.622 1.29l-1.21.935c-.305-.42-.797-.694-1.356-.694-.93 0-1.685.754-1.685 1.684s.754 1.685 1.684 1.685c.577 0 1.086-.292 1.39-.735l1.22.87c-.584.803-1.37 1.395-2.738 1.395z',
            }),
            i.createElement('path', {
              d: 'M20.5 2.02h-17c-1.24 0-2.25 1.007-2.25 2.247v15.507c0 1.238 1.01 2.246 2.25 2.246h17c1.24 0 2.25-1.008 2.25-2.246V4.267c0-1.24-1.01-2.247-2.25-2.247zm.75 17.754c0 .41-.336.746-.75.746h-17c-.414 0-.75-.336-.75-.746V4.267c0-.412.336-.747.75-.747h17c.414 0 .75.335.75.747v15.507z',
            }),
          ),
        )
      }
      ;(u.metadata = { width: 24, height: 24 }), (t.a = u)
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
        v = n('3XMw'),
        g = n.n(v),
        b = n('MWbm'),
        y = n('Qwev'),
        _ = n('21U8'),
        w = n('rHpw'),
        E = n('1auM'),
        O = n('eYns')
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
      var S = g.a.gff1f69e,
        P = (function (e) {
          u()(n, e)
          var t = M(n)
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
                    n instanceof E.a &&
                    Object(O.b)(n).then(function (t) {
                      return new E.a(t).withDimensionsAndOrientation().then(function (t) {
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
                    : m.createElement(y.a, { accessibilityLabel: S, style: C.activityIndicator })
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
                    ? m.createElement(
                        b.a,
                        { style: C.cropper },
                        m.createElement(_.a, {
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
        })(m.Component),
        C = w.a.create(function (e) {
          return {
            cropper: { backgroundColor: e.colors.navigationBackground, flexGrow: 1 },
            activityIndicator: { flexGrow: 1 },
          }
        })
      t.a = m.forwardRef(function (e, t) {
        return m.createElement(P, a()({}, e, { cropperRef: t }))
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
          return x
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
        b = (n('KOtZ'), n('2G9S'), n('xVN5')),
        y = n('rxPX'),
        _ = n('AspN'),
        w = function (e, t) {
          var n, r
          return (
            null === (n = t.location) || void 0 === n || null === (r = n.state) || void 0 === r
              ? void 0
              : r.showAllMedia
          )
            ? E(e)
            : O(e)
        },
        E = function (e) {
          var t = b.l(e).reduce(function (e, t) {
            return e.concat(t.mediaIds)
          }, [])
          return Object(_.k)(e, t)
        },
        O = function (e) {
          var t = b.j(e),
            n = b.l(e)[t]
          return Object(_.k)(e, n.mediaIds)
        },
        M = function (e, t) {
          var n, r
          return null === (n = t.location) || void 0 === n || null === (r = n.state) || void 0 === r
            ? void 0
            : r.mediaId
        },
        S = function (e, t) {
          var n, r
          return null === (n = t.location) || void 0 === n || null === (r = n.state) || void 0 === r
            ? void 0
            : r.altTextTabEnabled
        },
        P = function (e, t) {
          var n, r
          return null === (n = t.location) || void 0 === n || null === (r = n.state) || void 0 === r
            ? void 0
            : r.cropTabEnabled
        },
        C = Object(y.a)()
          .propsFromState(function () {
            return { altTextTabEnabled: S, cropTabEnabled: P, initialMediaId: M, media: w }
          })
          .propsFromActions(function () {
            return { setMediaMetadata: _.n, processMedia: _.f, updateMediaUpload: _.o }
          })
          .withAnalytics({ page: 'tabbed_media' }),
        T = n('jFmo'),
        R = n('v6aA')
      function j(e) {
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
      var x = (function (e) {
        u()(n, e)
        var t = j(n)
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
                return g.createElement(T.a, a()({}, this.props, { sensitiveMediaTabEnabled: e }))
              },
            },
          ]),
          n
        )
      })(g.Component)
      v()(x, 'contextType', R.a)
      t.default = C(x)
    },
    'Mbn/': function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        i = n('ERkP'),
        o = n('Lsrn'),
        c = n('k/Ka')
      function s(e, t) {
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
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? s(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var u = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(c.a)(
          'svg',
          l(
            l({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [o.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          i.createElement(
            'g',
            null,
            i.createElement('path', {
              d: 'M3.5 5.25H2c-.414 0-.75.336-.75.75s.336.75.75.75h1.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm18.5 12H7.5c-.414 0-.75-.337-.75-.75V2c0-.414-.336-.75-.75-.75s-.75.336-.75.75v14.5c0 1.24 1.01 2.25 2.25 2.25H22c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm-4 2.5c-.414 0-.75.336-.75.75V22c0 .414.336.75.75.75s.75-.336.75-.75v-1.5c0-.414-.336-.75-.75-.75z',
            }),
            i.createElement('path', {
              d: 'M8.5 6.75h8c.414 0 .75.337.75.75v8c0 .414.336.75.75.75s.75-.336.75-.75v-8c0-1.24-1.01-2.25-2.25-2.25h-8c-.414 0-.75.336-.75.75s.336.75.75.75z',
            }),
          ),
        )
      }
      ;(u.metadata = { width: 24, height: 24 }), (t.a = u)
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
        b = n('9Xij'),
        y = n('Zl35'),
        _ = n('epkG'),
        w = n('I4+6'),
        E = n('cm6r'),
        O = n('ZvMt'),
        M = n('rHpw'),
        S = n('97Jx'),
        P = n.n(S),
        C = n('CHgo')
      n('6U7i'), n('Ef13'), n('Jhhs'), n('z84I')
      function T(e) {
        var t = Math.round(e / 1e3)
        if (t < 10) return '0:0'.concat(t)
        if (t < 60) return '0:'.concat(t)
        var n = Math.floor(t / 60),
          r = ''.concat(t - 60 * n).padStart(2, '0')
        return ''.concat(n, ':').concat(r)
      }
      var R = function (e, t) {
          return e.map(function (e) {
            return (function (e, t) {
              if ('tenths' === t) {
                var n = Math.round(e / 100),
                  r = n % 10,
                  a = ''.concat((n - r) / 10).padStart(2, '0')
                return '0:'.concat(a, '.').concat(r)
              }
              return T(e)
            })(e, t)
          })
        },
        j = function (e, t) {
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
          return { intervalStrings: R(r, o), numSubintervals: i, numIntervals: a }
        },
        x = n('3XMw'),
        I = n.n(x),
        D = (n('hCOa'), n('87if'), n('t62R')),
        k = n('shC7'),
        A = n('MWbm')
      function L(e) {
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
      var B = (function (e) {
          u()(n, e)
          var t = L(n)
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
                    r = j(t, n),
                    a = r.intervalStrings,
                    i = r.numIntervals,
                    o = r.numSubintervals,
                    c = k.a.getConstants().isRTL ? W.borderRight : W.borderLeft,
                    s = (100 * Math.ceil(i)) / i
                  return g.createElement(
                    A.a,
                    { style: W.root },
                    g.createElement(
                      A.a,
                      { style: [W.intervalRow, W.intervalRowStrings, { width: ''.concat(s, '%') }] },
                      a.map(function (e, t) {
                        return g.createElement(
                          D.b,
                          {
                            color: 'gray700',
                            key: t,
                            size: 'subtext3',
                            style: [{ width: ''.concat(0 === t ? n / i / 2 : n / i, 'px') }, W.intervalStrings],
                          },
                          0 !== t ? e : null,
                        )
                      }),
                    ),
                    g.createElement(
                      A.a,
                      { style: [W.intervalRow, W.intervalRowTicks] },
                      a.map(function (e, t) {
                        return g.createElement(
                          A.a,
                          { key: t, style: [{ width: ''.concat(100 / i, '%') }, W.bigTicks, 0 !== t && c] },
                          Array.from({ length: o }, function (e, t) {
                            return g.createElement(A.a, { key: t, style: [W.smallTicks, 0 !== t && c] })
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
        })(g.PureComponent),
        W = M.a.create(function (e) {
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
        F = B,
        U = n('Wms4'),
        H = (n('jQ3i'), n('x4t0'), n('uFXj'), n('oLZl')),
        z = 'decrease',
        V = 'increase',
        G = 'left',
        K = 'right',
        N = n('7ep7')
      function X(e) {
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
      var Z = I.a.a394f904,
        Y = I.a.f42c0c8f,
        q = I.a.i667afe8,
        J = I.a.c0bdd345,
        Q = (function (e) {
          u()(n, e)
          var t = X(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              v()(
                s()(e),
                '_panResponders',
                N.a.create({
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
                  i = a === H.a.ArrowUp || a === H.a.ArrowRight,
                  o = a === H.a.ArrowDown || a === H.a.ArrowLeft
                ;(i || o) && (t.preventDefault(), r(i ? V : z, n))
              }),
              v()(s()(e), '_handleOnKeyUp', function (t) {
                var n = e.props.onKeyUp,
                  r = t.key
                ;[H.a.ArrowDown, H.a.ArrowLeft, H.a.ArrowRight, H.a.ArrowUp].includes(r) && n()
              }),
              v()(s()(e), '_generateBorderStyles', function () {
                var t = e.props.side,
                  n = k.a.getConstants().isRTL
                return t === G
                  ? n
                    ? $.rightScrubberRadius
                    : $.leftScrubberRadius
                  : t === K
                  ? n
                    ? $.leftScrubberRadius
                    : $.rightScrubberRadius
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
                  return g.createElement(
                    E.a,
                    P()(
                      {
                        accessibilityLabel: i === G ? q : Y,
                        accessibilityRole: 'adjustable',
                        accessibilityValue: {
                          max: J(r / 1e3),
                          min: J(a / 1e3),
                          now: J(n / 1e3),
                          text: Z({ seconds: J(n / 1e3) }),
                        },
                        focusable: !0,
                        interactiveStyles: w.a.generate({
                          backgroundColor: M.a.theme.colors.primary,
                          color: M.a.theme.colors.primary,
                          customFocusBackgroundColor: M.a.theme.colors.primary,
                          customHoverBackgroundColor: M.a.theme.colors.primary,
                          customPressedBackgroundColor: M.a.theme.colors.primary,
                          insetFocusRing: !0,
                        }),
                        onKeyDown: function (t) {
                          return e._handleOnKeyDown(t, i)
                        },
                        onKeyUp: function (t) {
                          return e._handleOnKeyUp(t)
                        },
                        style: [$.root, this._generateBorderStyles(), o],
                      },
                      this._panResponders.panHandlers,
                    ),
                    function (e) {
                      var t = e.isFocused,
                        n = e.isHovered,
                        r = e.isPressed
                      return g.createElement(
                        g.Fragment,
                        null,
                        g.createElement(A.a, {
                          style: [$.trimmerScrubberGrips, (t || n || r) && $.trimmerScrubberGripsOpacity],
                        }),
                        g.createElement(A.a, {
                          style: [$.trimmerScrubberGrips, (t || n || r) && $.trimmerScrubberGripsOpacity],
                        }),
                      )
                    },
                  )
                },
              },
            ]),
            n
          )
        })(g.Component),
        $ = M.a.create(function (e) {
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
        ee = Q
      function te(e) {
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
      var ne = I.a.af2a65d8,
        re = I.a.d46781ae,
        ae = I.a.e8733ed8,
        ie = I.a.j3d49e93,
        oe = function (e, t) {
          return ''.concat((e / t) * 100, '%')
        },
        ce = (function (e) {
          u()(n, e)
          var t = te(n)
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
                N.a.create({
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
                  var r = T(n)
                  return ie({ timestamp: r })
                }
                return n < 4e3 ? re(Math.floor((10 * n) / 1e3) / 10) : ae(Math.floor(n / 1e3))
              }),
              v()(s()(e), '_getTrimmerScrubberWidth', function () {
                return 2 * M.a.theme.spacesPx.space4 + 3 * M.a.theme.spacesPx.space2
              }),
              v()(s()(e), '_handleKeyDown', function (t, n) {
                var r = e.state.trimmerWidth
                1 === e._keyPressValueDelta && e._handlePanResponderGrant(n),
                  (e._keyPressAccumulatedDistance += e._keyPressValueDelta * (t === V ? 1 : -1)),
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
                ;(e._baseTime = t === G ? a : r), e.setState({ isActive: !0 })
              }),
              v()(s()(e), '_renderTimestampLabel', function () {
                var t,
                  n = e.state.isActive,
                  r = e.props,
                  a = r.duration,
                  i = r.endTime,
                  o = r.startTime,
                  c = k.a.getConstants().isRTL,
                  s = c ? 'marginRight' : 'marginLeft',
                  l = c ? 'marginLeft' : 'marginRight'
                return g.createElement(
                  A.a,
                  {
                    style: [
                      se.labelWrapper,
                      ((t = {}), v()(t, s, oe(o, a)), v()(t, l, oe(a - i, a)), v()(t, 'width', oe(i - o, a)), t),
                    ],
                  },
                  g.createElement(
                    U.a,
                    { background: 'maskColor', style: [se.label, !n && se.visibilityHidden] },
                    ne({ timestamp: e._generateTimestampLabelString() }),
                  ),
                )
              }),
              v()(s()(e), '_setRootRef', function (t) {
                t && (e._removeTouchMoveToScrollListener = Object(C.a)(t, e._handleTouchMoveToScroll, !1))
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
                if (n === G) {
                  var u = s
                  s <= 0 ? (u = 0) : i - l <= s && (u = i - l), o(G, u)
                }
                if (n === K) {
                  var d = s
                  s >= a ? (d = a) : s - c <= l && (d = c + l), o(K, d)
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
                    l = k.a.getConstants().isRTL,
                    u = l ? 'marginRight' : 'marginLeft',
                    d = l ? 'marginLeft' : 'marginRight'
                  return g.createElement(
                    A.a,
                    P()(
                      { ref: this._setRootRef, style: [se.root, o && se.cursorGrab] },
                      this._panResponderTermination.panHandlers,
                    ),
                    this._renderTimestampLabel(),
                    g.createElement(
                      A.a,
                      { onLayout: this._handleLayout, style: se.trimmerWrapper },
                      g.createElement(
                        A.a,
                        { style: se.intervalsContainer },
                        g.createElement(F, { duration: t, trimmerWidth: c }),
                      ),
                      g.createElement(
                        g.Fragment,
                        null,
                        g.createElement(A.a, { style: [se.discardArea, se.transition, { width: oe(a, t) }] }),
                        g.createElement(
                          A.a,
                          { style: se.keepArea },
                          g.createElement(ee, {
                            currentValue: a,
                            maxValue: n,
                            minValue: 0,
                            onKeyDown: this._handleKeyDown,
                            onKeyUp: this._handleKeyUp,
                            onMoveChange: this._handlePanResponderChange,
                            onMoveEnd: this._handlePanResponderEnd,
                            onMoveStart: this._handlePanResponderGrant,
                            side: G,
                            style: [se.trimmerScrubber, v()({}, u, '-'.concat(s, 'px'))],
                          }),
                          g.createElement(
                            A.a,
                            { style: se.keepAreaCenter },
                            o
                              ? null
                              : g.createElement(A.a, {
                                  style: [se.playBarArea, se.transition, { width: oe(r, n - a) }],
                                }),
                          ),
                          g.createElement(ee, {
                            currentValue: n,
                            maxValue: t,
                            minValue: a,
                            onKeyDown: this._handleKeyDown,
                            onKeyUp: this._handleKeyUp,
                            onMoveChange: this._handlePanResponderChange,
                            onMoveEnd: this._handlePanResponderEnd,
                            onMoveStart: this._handlePanResponderGrant,
                            side: K,
                            style: [se.trimmerScrubber, v()({}, d, '-'.concat(s, 'px'))],
                          }),
                        ),
                        g.createElement(A.a, {
                          style: [se.discardArea, se.transition, { width: 'calc(100% - '.concat(oe(n, t), ')') }],
                        }),
                      ),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(g.Component),
        se = M.a.create(function (e) {
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
        le = ce,
        ue = n('mXq/'),
        de = n('/run'),
        pe = n('KwSe')
      function fe(e, t) {
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
      function he(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? fe(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : fe(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function me(e) {
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
      var ve = new _.a({}),
        ge = (function (e) {
          u()(n, e)
          var t = me(n)
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
                    s = t === G
                  if (e) {
                    var l = s ? n : o,
                      u = s ? a : n
                    e.pause(),
                      e.scrubToFraction(n / c),
                      e.setPlaybackTimeRange({ startTimeS: l / 1e3, endTimeS: u / 1e3 })
                  }
                  i._isScrubbed = !0
                  var d = s ? { startTime: n } : { endTime: n }
                  i.setState(he({ playTime: 0 }, d))
                }
              }),
              v()(s()(i), '_handleOnVideoContainerLayout', function (e) {
                var t = e.nativeEvent.layout,
                  n = t.height,
                  r = t.width,
                  a = i.props.video,
                  o = a.height,
                  c = a.width / o,
                  s = O.a.getContainDimensions({ height: n, width: r }, c),
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
                  i.setState(he({ isPlaying: e.isPlaying }, e.isPlaying ? { playTime: r } : {}))
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
                  return g.createElement(
                    A.a,
                    { style: be.root },
                    g.createElement(
                      pe.a,
                      null,
                      g.createElement(
                        A.a,
                        { style: be.videoContainer },
                        g.createElement(
                          A.a,
                          { onLayout: this._handleOnVideoContainerLayout, style: be.video },
                          g.createElement(
                            b.a,
                            { ratio: t.width / t.height, style: r && a && { height: r, width: a } },
                            g.createElement(
                              y.b,
                              {
                                aspectRatio: t.width / t.height,
                                basePlayerClass: de.a,
                                configType: 'static',
                                contentId: '',
                                contentType: 'media_entity',
                                httpClient: ve,
                                onStateUpdate: this._handlePlayerStateUpdate,
                                playerId: 'trimmer',
                                size: 'fill',
                                variants: t.variants,
                              },
                              function (t) {
                                var n = t.playerApi
                                return g.createElement(
                                  E.a,
                                  {
                                    focusable: !0,
                                    interactiveStyles: w.a.generate({
                                      backgroundColor: M.a.theme.colors.transparent,
                                      color: M.a.theme.colors.primary,
                                      customFocusBackgroundColor: M.a.theme.colors.transparent,
                                      customHoverBackgroundColor: M.a.theme.colors.transparent,
                                      customPressedBackgroundColor: M.a.theme.colors.transparent,
                                      insetFocusRing: !0,
                                    }),
                                    onClick: e._handleVideoClick(n),
                                    style: be.overlay,
                                  },
                                  o ? null : g.createElement(ue.a, null),
                                )
                              },
                            ),
                          ),
                        ),
                      ),
                      g.createElement(pe.a.MetadataSubscriber, { playerId: 'trimmer' }, function (n) {
                        var r = n.playerApi
                        return g.createElement(le, {
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
        })(g.Component),
        be = M.a.create(function (e) {
          return {
            root: { flex: '1 1' },
            overlay: he(he({}, M.a.absoluteFillObject), {}, { alignItems: 'center', justifyContent: 'center' }),
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
      t.a = ge
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
          return I
        })
      var r = n('RhWx'),
        a = n.n(r),
        i = n('ddV6'),
        o = n.n(i),
        c = (n('hBpG'), n('2G9S'), n('LW0h'), n('tQbP'), n('z84I'), n('ERkP')),
        s = n('VAZu'),
        l = (n('M+/F'), n('1YZw')),
        u = n('xVN5'),
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
              return Object(f.g)(n)
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
        g = { addToast: l.b, updateSingleComposer: u.x },
        b = Object(m.g)(v, g),
        y = n('jHSc'),
        _ = n('3XMw'),
        w = n.n(_),
        E = n('mN6z'),
        O = n('2dXj'),
        M = n('MWbm'),
        S = n('/yvb'),
        P = n('rHpw'),
        C = n('7JQg'),
        T = w.a.b772cd65,
        R = w.a.c20dc653,
        j = w.a.d1175c78,
        x = w.a.ae0831ab
      function I(e) {
        var t = e.history,
          n = e.injections,
          r = e.existingTags,
          i = void 0 === r ? [] : r,
          l = e.updateSingleComposer,
          u = e.addToast,
          d = c.useState(i),
          p = o()(d, 2),
          h = p[0],
          m = p[1],
          v = c.useState(''),
          g = o()(v, 2),
          b = g[0],
          _ = g[1],
          w = function (e) {
            m(
              h.filter(function (t) {
                return t.id !== e.id
              }),
            )
          },
          P = function () {
            var e = h
                .map(function (e) {
                  return e.data.id_str
                })
                .sort(),
              t = i
                .map(function (e) {
                  return e.data.id_str
                })
                .sort(),
              n = e.length === t.length && Object(E.a)(e, t)
            return c.createElement(
              M.a,
              { style: D.rightColumn },
              c.createElement(S.a, { disabled: n, onPress: I, size: 'small', type: 'primaryFilled' }, T),
            )
          },
          C = function () {
            t.goBack()
          },
          I = function () {
            l({ updates: { mediaTags: h } }), t.goBack()
          }
        return c.createElement(
          y.b,
          {
            documentTitle: j,
            history: t,
            renderHeader: function () {
              return c.createElement(s.a, {
                backButtonType: 'close',
                history: t,
                onBackClick: C,
                rightControl: P(),
                title: j,
                withBottomBorder: !1,
              })
            },
          },
          c.createElement(O.d, {
            getItemDisabledMessage: function (e) {
              return e.type === f.b.User ? x({ screenName: e.data.screen_name }) : void 0
            },
            getItemIsDisabled: function (e) {
              return e.type === f.b.User && !e.data.can_media_tag
            },
            injections: b ? void 0 : n,
            onQueryChange: function (e) {
              _(e)
            },
            onRemove: w,
            onSelect: function (e) {
              e.type === f.b.User &&
                (h.find(function (t) {
                  return t.id === e.id
                })
                  ? w(e)
                  : h.length < 10
                  ? m([].concat(a()(h), [e]))
                  : u({ text: R }))
            },
            selectedUsers: h,
            source: f.d.ComposeMediaTagging,
            withCompactPills: !0,
          }),
        )
      }
      var D = P.a.create(function (e) {
        return { rightColumn: { flexDirection: 'row', flexGrow: 1, alignItems: 'center' } }
      })
      t.default = Object(C.c)({ page: 'media_tag', component: 'media_tagger' })(b(I))
    },
    i8hi: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'TabbedMediaEditScreen', function () {
          return M
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
        v = n('CDB5'),
        g = n('rxPX'),
        b = n('AspN'),
        y = function (e, t) {
          return t.location && t.location.state && t.location.state.mediaId
        },
        _ = function (e, t) {
          var n = (function (e, t) {
            var n, r
            return null === (n = t.location) || void 0 === n || null === (r = n.state) || void 0 === r
              ? void 0
              : r.conversationId
          })(0, t)
          return Object(v.i)(e, n)
        },
        w = Object(g.a)()
          .propsFromState(function () {
            return { media: _, initialMediaId: y }
          })
          .adjustStateProps(function (e) {
            var t = e.initialMediaId,
              n = e.media
            return { media: n ? [n] : [], initialMediaId: t }
          })
          .propsFromActions(function () {
            return { setMediaMetadata: b.n, processMedia: b.f, updateMediaUpload: b.o }
          })
          .withAnalytics({ page: 'tabbed_media_dm' }),
        E = n('jFmo')
      function O(e) {
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
      var M = (function (e) {
        u()(n, e)
        var t = O(n)
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
                return m.createElement(E.a, a()({}, this.props, { sensitiveMediaTabEnabled: !1 }))
              },
            },
          ]),
          n
        )
      })(m.Component)
      t.default = w(M)
    },
    jFmo: function (e, t, n) {
      'use strict'
      var r = n('97Jx'),
        a = n.n(r),
        i = n('m3Bd'),
        o = n.n(i),
        c = (n('MvUL'), n('KqXw'), n('ERkP')),
        s = n('v6aA'),
        l = (n('OZaJ'), n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('FtHn'), n('RhWx')),
        u = n.n(l),
        d = n('VrFO'),
        p = n.n(d),
        f = n('Y9Ll'),
        h = n.n(f),
        m = n('1Pcy'),
        v = n.n(m),
        g = n('5Yy7'),
        b = n.n(g),
        y = n('N+ot'),
        _ = n.n(y),
        w = n('AuHH'),
        E = n.n(w),
        O = n('KEM+'),
        M = n.n(O),
        S =
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
        P = n('3XMw'),
        C = n.n(P),
        T = n('pKoL'),
        R = n('Qwev'),
        j = n('rHpw'),
        x = n('U+bB'),
        I = n('MWbm'),
        D = C.a.gff1f69e
      var k = j.a.create(function (e) {
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
        A = function (e) {
          var t = e.mediaItem,
            n = e.orientedImage
          return c.createElement(
            I.a,
            { style: k.mediaPreviewWrapper },
            void 0 === n && t
              ? c.createElement(T.a, {
                  imageResizeMode: 'contain',
                  mediaItem: t,
                  style: k.mediaContainer,
                  withCloseButton: !1,
                })
              : n
              ? c.createElement(x.a, { resizeMode: 'contain', source: n.url, style: k.image })
              : c.createElement(R.a, { accessibilityLabel: D, style: k.activityIndicator }),
          )
        },
        L = j.a.create(function (e) {
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
        B = 'altTextInput',
        W = 'endEditingButton',
        F = 'altTextEducationSheetPrimaryAction',
        U = n('t62R'),
        H = n('p+r5')
      function z(e) {
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
            r = E()(e)
          if (t) {
            var a = E()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return _()(this, n)
        }
      }
      var V = C.a.feabf2a0,
        G = C.a.e36287c6,
        K = C.a.cf565d08,
        N = (function (e) {
          b()(n, e)
          var t = z(n)
          function n() {
            var e
            p()(this, n)
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              M()(v()(e), '_renderInputHelperText', function () {
                var t = e.props.onShowEducation
                return t ? c.createElement(U.b, { color: 'link', onPress: t, withInteractiveStyling: !0 }, K) : null
              }),
              M()(v()(e), '_handleChange', function (t) {
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
            h()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.autofocus,
                    n = e.maxLength,
                    r = e.mediaItem,
                    a = e.orientedImage,
                    i = e.value
                  return c.createElement(
                    I.a,
                    { style: L.root },
                    c.createElement(
                      I.a,
                      { style: L.attachmentContainer },
                      c.createElement(A, { mediaItem: r, orientedImage: a }),
                      c.createElement(H.a, {
                        accessibilityLabel: V,
                        autoFocus: t,
                        helperText: this._renderInputHelperText(),
                        label: G,
                        maxLength: n,
                        maxNumberOfLines: 6,
                        multiline: !0,
                        name: 'altTextInput',
                        numberOfLines: 2,
                        onChange: this._handleChange,
                        style: L.formTextInput,
                        testID: B,
                        value: i,
                      }),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(c.Component),
        X = n('rxPX'),
        Z = function (e, t) {
          return Object(S.z)(e, S.a)
        },
        Y = Object(X.a)()
          .propsFromState(function () {
            return { showEducationOnMount: Z }
          })
          .propsFromActions(function () {
            return { addFlag: S.w }
          })
          .withAnalytics(),
        q = n('feu+')
      function J(e) {
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
            r = E()(e)
          if (t) {
            var a = E()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return _()(this, n)
        }
      }
      var Q = C.a.ffe9ec3a,
        $ = C.a.j063b261,
        ee = C.a.e57144f0,
        te = C.a.f9f9210c,
        ne = (function (e) {
          b()(n, e)
          var t = J(n)
          function n() {
            var e
            p()(this, n)
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              M()(v()(e), 'state', { showAltTextEducationSheet: !1 }),
              M()(v()(e), '_handleOpenEducationPrompt', function () {
                var t = e.props.analytics
                e.setState({ showAltTextEducationSheet: !0 }), t.scribe({ component: 'education', action: 'click' })
              }),
              M()(v()(e), '_handleCloseEducationPrompt', function () {
                e.setState({ showAltTextEducationSheet: !1 })
              }),
              M()(v()(e), '_handleEducationPromptPrimaryAction', function () {
                var t = e.props.analytics
                e._handleCloseEducationPrompt(),
                  t.scribe({ component: 'education', element: 'alt_text_button', action: 'click' })
              }),
              M()(v()(e), '_handleEducationPromptSecondaryAction', function () {
                e.props.history.goBack()
              }),
              e
            )
          }
          return (
            h()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.addFlag,
                    n = e.analytics
                  e.showEducationOnMount &&
                    (this.setState({ showAltTextEducationSheet: !0 }),
                    n.scribe({ component: 'education', action: 'open' }),
                    t(S.a))
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
                  return c.createElement(
                    I.a,
                    { style: re.root },
                    i
                      ? c.createElement(q.a, {
                          actionLabel: ee,
                          headline: Q,
                          onAction: this._handleEducationPromptPrimaryAction,
                          onClose: this._handleCloseEducationPrompt,
                          onSecondaryAction: this._handleEducationPromptSecondaryAction,
                          primaryButtonTestID: F,
                          secondaryActionLabel: te,
                          subtext: $,
                        })
                      : null,
                    c.createElement(N, {
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
        })(c.Component),
        re = j.a.create(function (e) {
          return { root: { flexGrow: 1 } }
        }),
        ae = Y(ne),
        ie = n('jHSc'),
        oe = n('EeFI'),
        ce = n('7JQg'),
        se = n('PbQQ'),
        le = n('6vad'),
        ue = n('cCdp'),
        de = n('ZkMC'),
        pe = C.a.j9cf595f,
        fe = C.a.d69a782e,
        he = C.a.faf745f9,
        me = C.a.b96e6682,
        ve = C.a.h2437f25
      function ge(e) {
        var t = e.currentWarnings,
          n = e.mediaItem,
          r = e.onWarningChange,
          a = e.orientedImage,
          i = [
            { label: he, value: 'adult_content' },
            { label: me, value: 'graphic_violence' },
            { label: ve, value: 'other' },
          ],
          o = se.b.useOpaqueIdentifier(),
          s = c.createElement(A, { mediaItem: n, orientedImage: a })
        return c.createElement(
          I.a,
          { style: be.root },
          c.createElement(
            I.a,
            { style: be.modalContainer },
            null != t && t.size
              ? c.createElement(
                  de.a,
                  { revealableTombstoneConfig: de.c, sensitiveMediaWarnings: t, withRoundedCorners: !1 },
                  s,
                )
              : s,
            c.createElement(le.b, { nativeID: o, subtext: fe, text: pe }),
            c.createElement(
              I.a,
              { accessibilityLabelledBy: o, accessibilityRole: 'group' },
              i.map(function (e) {
                var n = e.label,
                  a = e.value
                return c.createElement(ue.a, { checked: t && t.has(a), key: a, label: n, name: a, onChange: r })
              }),
            ),
          ),
        )
      }
      var be = j.a.create(function (e) {
          return {
            modalContainer: { width: '100%', height: '100%', flexGrow: 1 },
            root: { display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', height: '100%', flexGrow: 1 },
          }
        }),
        ye = j.a.create(function (e) {
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
        _e = n('k/OQ'),
        we = n('/yvb'),
        Ee = n('oQhu'),
        Oe = n('ddV6'),
        Me = n.n(Oe),
        Se = function (e) {
          var t = new Map()
          return (
            e.forEach(function (e) {
              var n = Me()(e, 2),
                r = n[0],
                a = n[1]
              t.set(r, a)
            }),
            t
          )
        },
        Pe = n('mN6z'),
        Ce = n('95Se'),
        Te = n('7Mjr'),
        Re = n('Mbn/'),
        je = n('zIWA'),
        xe = n('1auM'),
        Ie = n('eYns')
      function De(e, t) {
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
      function ke(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? De(Object(n), !0).forEach(function (t) {
                M()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : De(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function Ae(e) {
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
            r = E()(e)
          if (t) {
            var a = E()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return _()(this, n)
        }
      }
      var Le = { section: 'alt_text' },
        Be = { section: 'crop' },
        We = { section: 'sensitive_media' },
        Fe = C.a.e070024a,
        Ue = C.a.i2209530,
        He = C.a.i7d24b36,
        ze = C.a.f96a38a2,
        Ve = C.a.hac7c548,
        Ge = C.a.e3dbfba3,
        Ke = C.a.dd4a83a5,
        Ne = 'crop',
        Xe = 'alt_text',
        Ze = 'sensitive_media',
        Ye = (function (e) {
          b()(n, e)
          var t = Ae(n)
          function n(e) {
            var r
            p()(this, n),
              (r = t.call(this, e)),
              M()(v()(r), '_cropper', c.createRef()),
              M()(
                v()(r),
                '_getMemoizedCurrentTabMetadata',
                Object(Ee.a)(function (e, t) {
                  switch (e) {
                    case Xe:
                      return { namespace: Le, title: Ge, renderer: r._renderAltTextTab }
                    case Ze:
                      if (t) return { namespace: We, title: Ke, renderer: r._renderSensitiveMediaTab }
                    default:
                      return { namespace: Be, title: Ve, renderer: r._renderCropTab }
                  }
                }),
              ),
              M()(v()(r), '_renderSegmentedControl', function () {
                var e = r.props.sensitiveMediaTabEnabled,
                  t = r._getSegmentedControlLinks(),
                  n = r._getCurrentTab(),
                  a = r._getMemoizedCurrentTabMetadata(n, e)
                return c.createElement(
                  c.Fragment,
                  null,
                  t.length > 1 ? c.createElement(_e.a, { accessibilityLabel: Fe, links: t }) : null,
                  c.createElement(I.a, { style: ye.segmentedControlChildren }, a.renderer()),
                )
              }),
              M()(v()(r), '_renderAltTextTab', function () {
                var e = r.props.history,
                  t = r.state,
                  n = t.currentMediaId,
                  a = t.mediaMetadata,
                  i = t.orientedImage,
                  o = r._getCurrentMediaItem(),
                  s = a[n] && a[n].altText
                return c.createElement(ae, {
                  history: e,
                  key: n,
                  mediaItem: o,
                  onAltTextChange: r._handleAltTextChange,
                  orientedImage: i.get(n),
                  value: s,
                })
              }),
              M()(v()(r), '_renderCropTab', function () {
                var e = r.state,
                  t = e.cropData,
                  n = e.currentMediaId,
                  a = r._getCurrentMediaItem()
                return c.createElement(oe.a, {
                  defaultCropData: t.get(n),
                  key: n,
                  media: a,
                  ref: r._cropper,
                  withAspectRatioOptions: !0,
                })
              }),
              M()(v()(r), '_renderSensitiveMediaTab', function () {
                var e = r.state,
                  t = e.currentMediaId,
                  n = e.mediaMetadata,
                  a = e.orientedImage,
                  i = r._getCurrentMediaItem(),
                  o = n[t] && n[t].sensitiveMediaWarning
                return c.createElement(ge, {
                  currentWarnings: o,
                  key: t,
                  mediaItem: i,
                  onWarningChange: r._handleSensitiveWarningChange,
                  orientedImage: a.get(t),
                })
              }),
              M()(v()(r), '_renderAppBarRightControl', function () {
                var e = r.state.isProcessing,
                  t = r._getNextMediaIndex(1),
                  n = r._getNextMediaIndex(-1)
                return c.createElement(
                  I.a,
                  { style: ye.rightControl },
                  r._hasMediaAtIndex(n) || r._hasMediaAtIndex(t)
                    ? c.createElement(
                        I.a,
                        { style: [ye.rightControl, ye.leftRightButtons] },
                        c.createElement(we.a, {
                          accessibilityLabel: ze,
                          disabled: !r._hasMediaAtIndex(n),
                          icon: c.createElement(Ce.a, null),
                          onPress: r._handleClickToMediaAtIndex(n),
                          size: 'small',
                          style: ye.prevButton,
                          type: 'primaryOutlined',
                        }),
                        c.createElement(we.a, {
                          accessibilityLabel: He,
                          disabled: !r._hasMediaAtIndex(t),
                          icon: c.createElement(Te.a, null),
                          onPress: r._handleClickToMediaAtIndex(t),
                          size: 'small',
                          type: 'primaryOutlined',
                        }),
                      )
                    : null,
                  c.createElement(
                    we.a,
                    {
                      disabled: e,
                      onPress: r._handleEndEditingClick,
                      size: 'small',
                      style: ye.saveButton,
                      testID: W,
                      type: 'primaryFilled',
                    },
                    Ue,
                  ),
                )
              }),
              M()(v()(r), '_handleCancelEditingClick', function (e) {
                r._scribeWithNamespace({ action: 'cancel' }), e()
              }),
              M()(v()(r), '_handleClickTab', function (e) {
                var t = r.props.analytics
                r._handleSaveCropData(),
                  r._scribeWithNamespace({ element: e, action: 'click' }),
                  t.scribePageImpression()
              }),
              M()(v()(r), '_getCurrentMediaItem', function () {
                var e = r.props.media,
                  t = r.state.currentMediaId
                return e.find(function (e) {
                  return e.id === t
                })
              }),
              M()(v()(r), '_getNextMediaIndex', function (e) {
                var t = r.props.media,
                  n = r._getCurrentMediaItem()
                return t.indexOf(n) + e
              }),
              M()(v()(r), '_hasMediaAtIndex', function (e) {
                var t = r.props.media
                return e >= 0 && e < t.length
              }),
              M()(v()(r), '_handleClickToMediaAtIndex', function (e) {
                return function () {
                  var t = r.props.media
                  if (r._hasMediaAtIndex(e)) {
                    r._handleSaveCropData()
                    var n = t[e].id
                    r.setState({ currentMediaId: n })
                  }
                }
              }),
              M()(v()(r), '_saveMediaMetadata', function () {
                var e = r.props,
                  t = e.media,
                  n = e.setMediaMetadata,
                  a = r.state.mediaMetadata
                t.forEach(function (e) {
                  n(e.id, a[e.id])
                })
              }),
              M()(v()(r), '_handleEndEditingClick', function () {
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
                  var l = t ? Se([].concat(u()(n), [[s, t.getCropData()]])) : n,
                    d = i.map(function (e) {
                      return l.get(e.id) ? (c({ id: e.id, cropData: l.get(e.id) }), o(e.id)) : Promise.resolve()
                    })
                  Promise.all(d).then(function () {
                    r._scribeWithNamespace({ action: 'done' })
                  })
                }
                r._saveMediaMetadata(), e.goBack()
              }),
              M()(v()(r), '_handleAltTextChange', function (e) {
                r.setState(function (t) {
                  return {
                    mediaMetadata: ke(
                      ke({}, t.mediaMetadata),
                      {},
                      M()({}, t.currentMediaId, ke(ke({}, t.mediaMetadata[t.currentMediaId]), {}, { altText: e })),
                    ),
                  }
                })
              }),
              M()(v()(r), '_handleSensitiveWarningChange', function (e, t) {
                r.setState(function (n) {
                  var r =
                    (n.mediaMetadata[n.currentMediaId] && n.mediaMetadata[n.currentMediaId].sensitiveMediaWarning) ||
                    new Set()
                  return (
                    t ? r.add(e) : r.delete(e),
                    {
                      mediaMetadata: ke(
                        ke({}, n.mediaMetadata),
                        {},
                        M()(
                          {},
                          n.currentMediaId,
                          ke(ke({}, n.mediaMetadata[n.currentMediaId]), {}, { sensitiveMediaWarning: r }),
                        ),
                      ),
                    }
                  )
                })
              }),
              M()(v()(r), '_handleSaveCropData', function () {
                var e = r._cropper && r._cropper.current
                if (e) {
                  var t = r.state.currentMediaId,
                    n = e.getCropData(),
                    a = r._getCurrentMediaItem()
                  if (
                    a &&
                    !Object(Pe.a)(n, r.state.cropData.get(t)) &&
                    (r.setState(function (e) {
                      return { orientedImage: Se([].concat(u()(e.orientedImage), [[t, null]])) }
                    }),
                    a.originalMediaFile && a.originalMediaFile instanceof xe.a)
                  ) {
                    var i = a.cropData
                    Object(Ie.b)(a.originalMediaFile, { cropData: n || i })
                      .then(function (e) {
                        return new xe.a(e).withDimensionsAndOrientation().then(function (e) {
                          r.setState(function (r) {
                            return {
                              orientedImage: Se([].concat(u()(r.orientedImage), [[t, e]])),
                              cropData: Se([].concat(u()(r.cropData), [[t, n]])),
                            }
                          })
                        })
                      })
                      .catch(function () {
                        r.setState(function (e) {
                          return { orientedImage: Se([].concat(u()(e.orientedImage), [[t, void 0]])) }
                        })
                      })
                  }
                  r.setState(function (e) {
                    return { cropData: Se([].concat(u()(e.cropData), [[t, n]])) }
                  })
                }
              }),
              M()(v()(r), '_scribeWithNamespace', function (e) {
                var t = r.props,
                  n = t.analytics,
                  a = t.sensitiveMediaTabEnabled,
                  i = r._getCurrentTab(),
                  o = r._getMemoizedCurrentTabMetadata(i, a)
                n.scribe(ke(ke({}, o.namespace), e))
              }),
              M()(v()(r), '_getMediaMetadata', function (e) {
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
            h()(n, [
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
                    s = this._getMemoizedCurrentTabMetadata(o, a)
                  return c.createElement(
                    ce.b,
                    { namespace: s.namespace },
                    c.createElement(
                      ie.b,
                      {
                        backButtonType: 'back',
                        containerStyle: ye.root,
                        documentTitle: s.title,
                        history: r,
                        onBackClick: this._handleCancelEditingClick,
                        rightControl: this._renderAppBarRightControl(),
                        title: s.title,
                        withBottomBorder: !1,
                      },
                      i ? this._renderSegmentedControl() : s.renderer(),
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
                    ? Ne
                    : r && Xe
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
                        to: ke(ke({}, r), {}, { state: ke(ke({}, r.state), {}, { tab: Ne }) }),
                        label: c.createElement(Re.a, null),
                        key: Ne,
                        accessibilityLabel: Ve,
                        isActive: function () {
                          var e
                          return (null === (e = r.state) || void 0 === e ? void 0 : e.tab) === Ne
                        },
                        onClick: function () {
                          return n.scribePageImpression()
                        },
                      }),
                    o.push({
                      to: ke(ke({}, r), {}, { state: ke(ke({}, r.state), {}, { tab: Xe }) }),
                      label: c.createElement(U.b, { weight: 'bold' }, 'ALT'),
                      key: Xe,
                      accessibilityLabel: Ge,
                      isActive: function () {
                        var e
                        return (null === (e = r.state) || void 0 === e ? void 0 : e.tab) === Xe
                      },
                      onClick: function () {
                        return e._handleClickTab('alt_text_button')
                      },
                    }),
                    a &&
                      o.push({
                        to: ke(ke({}, r), {}, { state: ke(ke({}, r.state), {}, { tab: Ze }) }),
                        label: c.createElement(je.a, null),
                        key: Ze,
                        accessibilityLabel: Ke,
                        isActive: function () {
                          var e
                          return (null === (e = r.state) || void 0 === e ? void 0 : e.tab) === Ze
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
        })(c.Component)
      M()(Ye, 'defaultProps', { altTextTabEnabled: !0, cropTabEnabled: !0 })
      var qe = Ye,
        Je = n('sjK1'),
        Qe = n('RqPI'),
        $e = n('AspN'),
        et = n('0KEI'),
        tt = n('FDFL'),
        nt = function (e) {
          var t = Object(Qe.o)(e)
          return t && Object(tt.b)(e, t)
        },
        rt = Object(X.a)()
          .propsFromState(function () {
            return { language: Qe.o, languageName: nt }
          })
          .propsFromActions(function () {
            return {
              addMedia: $e.b,
              createLocalApiErrorHandler: Object(et.createLocalApiErrorHandlerWithContextFactory)(
                'VIDEO_SUBTITLES_UPLOAD',
              ),
              fetchAvailableLanguagesIfNeeded: tt.a,
              removeMediaUpload: $e.i,
            }
          })
          .withAnalytics(),
        at = n('eyty'),
        it = (n('7xRU'), n('pHub')),
        ot = n('62wY'),
        ct = 'fileInput',
        st = n('/Imo'),
        lt = c.createElement(it.a, null),
        ut = C.a.icbec4ae,
        dt = function (e) {
          var t = e.icon,
            n = e.style,
            r = e.withIcon,
            i = o()(e, ['icon', 'style', 'withIcon']),
            s = ot.a.join(',')
          return c.createElement(
            I.a,
            null,
            c.createElement(
              st.a,
              a()({}, i, { accept: s, icon: r ? t : void 0, style: [pt.button, n], testID: ct, type: 'primaryFilled' }),
              ut,
            ),
          )
        }
      dt.defaultProps = { icon: lt, size: 'medium', withIcon: !0 }
      var pt = j.a.create(function (e) {
          return { button: { alignSelf: 'start' } }
        }),
        ft = dt
      function ht(e) {
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
            r = E()(e)
          if (t) {
            var a = E()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return _()(this, n)
        }
      }
      var mt = C.a.bf4e9d79,
        vt = C.a.j435467e,
        gt = C.a.a6b267f9,
        bt = (function (e) {
          b()(n, e)
          var t = ht(n)
          function n() {
            var e
            p()(this, n)
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              M()(v()(e), '_renderSubtitlesPickerButton', function () {
                return c.createElement(ft, { onChange: e._handleAddMediaFiles, type: 'brandText' })
              }),
              M()(v()(e), '_renderSubtitlesRemovalButton', function () {
                return c.createElement(we.a, { onPress: e._handleRemoveSubtitles, type: 'destructiveOutlined' }, gt)
              }),
              M()(v()(e), '_handleRemoveSubtitles', function () {
                ;(0, e.props.onRemove)()
              }),
              M()(v()(e), '_handleAddMediaFiles', function (t) {
                var n = e.props,
                  r = n.addMedia,
                  a = n.analytics,
                  i = n.language,
                  o = n.languageName,
                  c = n.onChange
                a.scribe({ element: 'subtitles_upload', action: 'click' }),
                  r(t, { location: at.d.Tweet }).then(function (e) {
                    c(e[0], i, o)
                  })
              }),
              e
            )
          }
          return (
            h()(n, [
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
                  return c.createElement(
                    I.a,
                    { style: yt.root },
                    c.createElement(
                      I.a,
                      { style: yt.attachmentContainer },
                      c.createElement(U.b, { size: 'title3', style: yt.header, weight: 'heavy' }, mt),
                      c.createElement(U.b, { size: 'body', style: yt.body }, vt),
                      c.createElement(
                        I.a,
                        { style: yt.buttonWrapper },
                        e ? this._renderSubtitlesRemovalButton() : this._renderSubtitlesPickerButton(),
                      ),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(c.Component),
        yt = j.a.create(function (e) {
          return {
            root: { display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', flex: 1 },
            attachmentContainer: { flex: 1, margin: e.spaces.space16, maxHeight: '100%' },
            body: { marginBottom: e.spaces.space28 },
            buttonWrapper: { flexDirection: 'row', alignItems: 'center' },
            header: { marginTop: e.spaces.space16, marginBottom: e.spaces.space8 },
          }
        }),
        _t = rt(bt),
        wt = n('R5K7'),
        Et = n('nV1z'),
        Ot = n('8A5z')
      function Mt(e, t) {
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
      function St(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Mt(Object(n), !0).forEach(function (t) {
                M()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Mt(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function Pt(e) {
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
            r = E()(e)
          if (t) {
            var a = E()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return _()(this, n)
        }
      }
      var Ct = { section: 'subtitles' },
        Tt = { section: 'trimmer' },
        Rt = { section: 'sensitive_media' },
        jt = C.a.c91f83ae,
        xt = C.a.icbec4ae,
        It = C.a.e0342f98,
        Dt = C.a.i2209530,
        kt = C.a.b772cd65,
        At = C.a.e0342f98,
        Lt = C.a.e7048e73,
        Bt = C.a.dd4a83a5,
        Wt = 'subtitles',
        Ft = 'trimmer',
        Ut = 'sensitive_media',
        Ht = (function (e) {
          b()(n, e)
          var t = Pt(n)
          function n(e) {
            var r
            p()(this, n),
              (r = t.call(this, e)),
              M()(v()(r), '_videoTrimmerRef', c.createRef()),
              M()(
                v()(r),
                '_getMemoizedCurrentTabMetadata',
                Object(Ee.a)(function (e, t, n) {
                  switch (e) {
                    case Ft:
                      if (t) return { namespace: Tt, title: jt, renderer: r._renderTrimmerTab }
                    case Ut:
                      if (n) return { namespace: Rt, title: Bt, renderer: r._renderSensitiveMediaTab }
                    default:
                      return { namespace: Ct, title: xt, renderer: r._renderSubtitlesTab }
                  }
                }),
              ),
              M()(v()(r), '_renderSegmentedControl', function () {
                var e,
                  t = r.props,
                  n = t.isVideoTrimmerEnabled,
                  a = t.location,
                  i = t.sensitiveMediaTabEnabled,
                  o = r._getSegmentedControlLinks(),
                  s = r._getMemoizedCurrentTabMetadata(null === (e = a.state) || void 0 === e ? void 0 : e.tab, n, i)
                return c.createElement(
                  c.Fragment,
                  null,
                  o.length > 1 ? c.createElement(_e.a, { accessibilityLabel: jt, links: o }) : null,
                  c.createElement(I.a, { style: ye.segmentedControlChildren }, s.renderer()),
                )
              }),
              M()(v()(r), '_renderTrimmerTab', function () {
                var e = r._getCurrentMediaItem(),
                  t = r.state.trimData
                if (null != e && e.mediaFile && e.mediaFile instanceof Je.c) {
                  var n = e.mediaFile,
                    a = {
                      duration: 1e3 * n.duration,
                      height: n.height,
                      variants: [{ src: n.url, type: n.type }],
                      width: n.width,
                    }
                  return c.createElement(
                    I.a,
                    { style: ye.videoTrimmerWrapper },
                    c.createElement(wt.a, { defaultTrimData: t, ref: r._videoTrimmerRef, video: a }),
                  )
                }
              }),
              M()(v()(r), '_addTrimDataToState', function () {
                var e,
                  t = null === (e = r._videoTrimmerRef.current) || void 0 === e ? void 0 : e.getTrimData()
                null != t &&
                  t.endTime &&
                  null != t &&
                  t.startTime &&
                  r.setState({ trimData: { endTime: t.endTime, startTime: t.startTime } })
              }),
              M()(v()(r), '_saveTrimData', function () {
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
                  (a(St(St({}, i), {}, { trimData: { endTime: o.endTime / 1e3, startTime: o.startTime / 1e3 } })),
                  n(i.id))
              }),
              M()(v()(r), '_renderSubtitlesTab', function () {
                var e = r.props,
                  t = e.history,
                  n = e.initialMediaId,
                  a = r._getCurrentMediaItem(),
                  i = (null == a ? void 0 : a.mediaMetadata) || { subtitles: void 0 },
                  o = null == i ? void 0 : i.subtitles
                return c.createElement(_t, {
                  history: t,
                  key: n,
                  mediaItem: a,
                  onChange: r._handleSubtitlesChange,
                  onRemove: r._handleSubtitlesRemove,
                  subtitles: o,
                })
              }),
              M()(v()(r), '_renderSensitiveMediaTab', function () {
                var e = r.state.sensitiveMediaWarning,
                  t = r._getCurrentMediaItem()
                return c.createElement(ge, {
                  currentWarnings: e,
                  mediaItem: t,
                  onWarningChange: r._handleSensitiveWarningChange,
                })
              }),
              M()(v()(r), '_renderAppBarRightControl', function () {
                var e = r.props.isVideoTrimmerEnabled
                return c.createElement(
                  I.a,
                  { style: ye.rightControl },
                  c.createElement(
                    we.a,
                    { onPress: r._handleEndEditingClick, size: 'small', style: ye.saveButton, type: 'primaryFilled' },
                    e ? Dt : kt,
                  ),
                )
              }),
              M()(v()(r), '_getCurrentMediaItem', function () {
                var e = r.props,
                  t = e.initialMediaId
                return e.media.find(function (e) {
                  return e.id === t
                })
              }),
              M()(v()(r), '_handleEndEditingClick', function () {
                var e = r.props,
                  t = e.history,
                  n = e.isVideoTrimmerEnabled,
                  a = e.sensitiveMediaTabEnabled
                n && r._saveTrimData(), a && r._saveSensitiveMediaWarning(), t.goBack()
              }),
              M()(v()(r), '_saveSubtitles', function (e) {
                var t = r.props,
                  n = t.media,
                  a = t.setMediaMetadata,
                  i = r._getCurrentMediaItem(),
                  o = (null == i ? void 0 : i.mediaMetadata) || { subtitles: void 0 }
                n.forEach(function (t) {
                  a(t.id, St(St({}, o), {}, { subtitles: e }))
                })
              }),
              M()(v()(r), '_handleSubtitlesChange', function (e, t, n) {
                r.props.analytics.scribe({ element: 'subtitles_upload', action: 'add' }),
                  r._saveSubtitles({ lang: t, upload: e, displayName: n || At })
              }),
              M()(v()(r), '_handleSubtitlesRemove', function () {
                r.props.analytics.scribe({ element: 'subtitles_upload', action: 'remove' }), r._saveSubtitles(void 0)
              }),
              M()(v()(r), '_saveSensitiveMediaWarning', function () {
                var e = r.props.setMediaMetadata,
                  t = r.state.sensitiveMediaWarning,
                  n = r._getCurrentMediaItem()
                n && e(n.id, St(St({}, n.mediaMetadata), {}, { sensitiveMediaWarning: t }))
              }),
              M()(v()(r), '_handleSensitiveWarningChange', function (e, t) {
                r.setState(function (n) {
                  var r = n.sensitiveMediaWarning
                  return t ? r.add(e) : r.delete(e), { sensitiveMediaWarning: r }
                })
              }),
              M()(v()(r), '_handleClickSensitiveMediaTab', function () {
                var e = r.props.analytics
                r._addTrimDataToState(), e.scribePageImpression()
              })
            var a = r._getCurrentMediaItem()
            if (null != a && a.mediaFile && a.mediaFile instanceof Je.c) {
              var i = a.mediaFile,
                o = a.mediaMetadata,
                s = a.trimData,
                l = {
                  endTime: null != s && s.endTime ? 1e3 * s.endTime : 1e3 * i.duration,
                  startTime: null != s && s.startTime ? 1e3 * s.startTime : 0,
                }
              r.state = {
                trimData: l,
                sensitiveMediaWarning: (null == o ? void 0 : o.sensitiveMediaWarning) || new Set(),
              }
            } else r.props.history.replace('/')
            return r
          }
          return (
            h()(n, [
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
                  return c.createElement(
                    ce.b,
                    { namespace: o.namespace },
                    c.createElement(
                      ie.b,
                      {
                        backButtonType: 'back',
                        containerStyle: ye.root,
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
                    s = []
                  return (
                    r &&
                      (null == o || null === (e = o.originalMediaFile) || void 0 === e ? void 0 : e.isVideo) &&
                      s.push({
                        to: St(St({}, a), {}, { state: St(St({}, a.state), {}, { tab: Ft }) }),
                        label: c.createElement(Et.a, null),
                        key: Ft,
                        accessibilityLabel: Lt,
                        isActive: function () {
                          var e
                          return (null === (e = a.state) || void 0 === e ? void 0 : e.tab) === Ft
                        },
                      }),
                    (null == o || null === (t = o.originalMediaFile) || void 0 === t ? void 0 : t.isVideo) &&
                      s.push({
                        to: St(St({}, a), {}, { state: St(St({}, a.state), {}, { tab: Wt }) }),
                        label: c.createElement(Ot.a, null),
                        key: Wt,
                        accessibilityLabel: It,
                        isActive: function () {
                          var e
                          return (null === (e = a.state) || void 0 === e ? void 0 : e.tab) === Wt
                        },
                        onClick: this._addTrimDataToState,
                      }),
                    i &&
                      s.push({
                        to: St(St({}, a), {}, { state: St(St({}, a.state), {}, { tab: Ut }) }),
                        label: c.createElement(je.a, null),
                        key: Ut,
                        accessibilityLabel: Bt,
                        isActive: function () {
                          var e
                          return (null === (e = a.state) || void 0 === e ? void 0 : e.tab) === Ut
                        },
                        onClick: this._handleClickSensitiveMediaTab,
                      }),
                    s
                  )
                },
              },
            ]),
            n
          )
        })(c.Component)
      t.a = function (e) {
        var t,
          n,
          r = e.altTextTabEnabled,
          i = e.cropTabEnabled,
          l = o()(e, ['altTextTabEnabled', 'cropTabEnabled']),
          u = l.history,
          d = l.initialMediaId,
          p = l.media,
          f = c.useContext(s.a).featureSwitches,
          h =
            null === (t = l.media[0]) || void 0 === t || null === (n = t.mediaFile) || void 0 === n ? void 0 : n.isVideo
        if (p.length <= 0 || !d) return u.replace('/'), null
        if (h) {
          var m = f.isTrue('responsive_web_video_trimmer_enabled')
          return c.createElement(Ht, a()({}, l, { isVideoTrimmerEnabled: m }))
        }
        return c.createElement(qe, a()({}, l, { altTextTabEnabled: r, cropTabEnabled: i }))
      }
    },
    nV1z: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        i = n('ERkP'),
        o = n('Lsrn'),
        c = n('k/Ka')
      function s(e, t) {
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
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? s(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var u = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(c.a)(
          'svg',
          l(
            l({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [o.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          i.createElement(
            'g',
            null,
            i.createElement('path', {
              d: 'M19.75 2H4.25C3.01 2 2 3.01 2 4.25v15.5C2 20.99 3.01 22 4.25 22h15.5c1.24 0 2.25-1.01 2.25-2.25V4.25C22 3.01 20.99 2 19.75 2zM5.25 20.033h-1.5v-2.5h1.5v2.5zm0-4.55h-1.5v-2.5h1.5v2.5zm0-4.55h-1.5v-2.5h1.5v2.5zm0-4.55h-1.5v-2.5h1.5v2.5zM17 20.5H7v-7.75h10v7.75zm0-9.25H7V3.5h10v7.75zm3.25 8.783h-1.5v-2.5h1.5v2.5zm0-4.55h-1.5v-2.5h1.5v2.5zm0-4.55h-1.5v-2.5h1.5v2.5zm0-4.55h-1.5v-2.5h1.5v2.5z',
            }),
          ),
        )
      }
      ;(u.metadata = { width: 24, height: 24 }), (t.a = u)
    },
  },
])
//# sourceMappingURL=WIPED
