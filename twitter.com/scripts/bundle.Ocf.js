;(window.webpackJsonp = window.webpackJsonp || []).push([
  [74, 173],
  {
    '0ULw': function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var a = n('KEM+'),
        r = n.n(a),
        o = n('ERkP'),
        i = n.n(o),
        s = n('Lsrn'),
        c = n('k/Ka')
      function l(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                r()(e, t, n[t])
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
        return Object(c.a)(
          'svg',
          u(
            u({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [s.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          i.a.createElement(
            'g',
            null,
            i.a.createElement('path', {
              d: 'M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z',
            }),
          ),
        )
      }
      ;(d.metadata = { width: 24, height: 24 }), (t.a = d)
    },
    '12XZ': function (e, t, n) {
      'use strict'
      n.r(t)
      var a = n('97Jx'),
        r = n.n(a),
        o = n('ERkP'),
        i = n.n(o),
        s = n('9D1O'),
        c = n('gPQO')
      t.default = function (e) {
        return i.a.createElement(c.a, r()({}, e, { ocfModule: s.i }))
      }
    },
    '180P': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      })
      n('7x/C'), n('DZ+c'), n('KOtZ'), n('Ysgh'), n('KqXw'), n('tQbP'), n('7xRU')
      var a = function (e) {
          var t = (JSON.stringify(e) || '').split('')
          t.sort()
          var n = t.join('')
          return r(n, 0).toString()
        },
        r = function (e, t) {
          for (var n = 'string' == typeof e ? e : String(e), a = t, r = 0; r < n.length; r++) {
            ;(a = (a << 5) - a + n.charCodeAt(r)), (a &= a)
          }
          return a
        }
    },
    '21U8': function (e, t, n) {
      'use strict'
      n('OZaJ')
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        s = n('1Pcy'),
        c = n.n(s),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('N+ot'),
        p = n.n(d),
        f = n('AuHH'),
        h = n.n(f),
        m = n('KEM+'),
        b = n.n(m),
        v = (n('Rqga'), n('2G9S'), n('ERkP')),
        y = n.n(v),
        _ = n('/yvb'),
        g = n('3XMw'),
        k = n.n(g),
        w = n('3rX5'),
        O = n('rHpw'),
        E = n('MWbm'),
        C = O.a.create(function (e) {
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
            a = e.width
          return y.a.createElement(E.a, {
            pointerEvents: 'none',
            style: [C.mask, { width: a, height: n }, t && C.circle],
          })
        },
        x = n('ZvMt'),
        I = n('97Jx'),
        P = n.n(I),
        j = n('m3Bd'),
        R = n.n(j),
        D = n('CHgo'),
        T = n('7ep7')
      function A(e) {
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
            a = h()(e)
          if (t) {
            var r = h()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return p()(this, n)
        }
      }
      var F = (function (e) {
          u()(n, e)
          var t = A(n)
          function n(e) {
            var a
            return (
              r()(this, n),
              (a = t.call(this, e)),
              b()(c()(a), '_previousTouchDistance', 0),
              b()(c()(a), '_previousPositionX', 0),
              b()(c()(a), '_previousPositionY', 0),
              b()(c()(a), '_centerPosition', { x: 0, y: 0 }),
              b()(c()(a), '_panResponder', {}),
              b()(c()(a), '_setRef', function (e) {
                var t = a.props,
                  n = t.onPanEnd,
                  r = t.onPanMove,
                  o = t.onPinchMove,
                  i = t.onWheel
                if (e) {
                  ;(r || n || o) && (a._removeTouchMoveToScrollListener = Object(D.a)(e, a._preventDefaultEvent, !1)),
                    i && (a._removeScrollToScaleListener = Object(D.b)(e, a._preventDefaultEvent, !1))
                  var s = e.getBoundingClientRect()
                  a._centerPosition = { x: s.width / 2 + s.left, y: s.height / 2 + s.top }
                }
              }),
              b()(c()(a), '_preventDefaultEvent', function (e) {
                e.preventDefault()
              }),
              b()(c()(a), '_handlePanResponderMove', function (e, t) {
                var n,
                  r,
                  o = a.props,
                  i = o.onPanMove,
                  s = o.onPinchMove,
                  c = e.nativeEvent.touches
                if (2 === t.numberActiveTouches) {
                  if (s) {
                    var l =
                        ((n = c[0]),
                        (r = c[1]),
                        Math.sqrt(Math.pow(n.pageY - r.pageY, 2) + Math.pow(n.pageX - r.pageX, 2))),
                      u = (function (e, t) {
                        return {
                          pageX: Math.min(t.pageX, e.pageX) + Math.abs(t.pageX - e.pageX) / 2,
                          pageY: Math.min(t.pageY, e.pageY) + Math.abs(t.pageY - e.pageY) / 2,
                        }
                      })(c[0], c[1]),
                      d = u.pageX,
                      p = u.pageY,
                      f = a._previousPositionX ? d - a._previousPositionX : 0,
                      h = a._previousPositionY ? p - a._previousPositionY : 0,
                      m = a._previousTouchDistance ? l - a._previousTouchDistance : 0
                    ;(a._previousPositionX = d), (a._previousPositionY = p), (a._previousTouchDistance = l)
                    var b = a._centerPosition
                    s(m, b.x - d, b.y - p, f, h)
                  }
                } else i && i(t.dx, t.dy)
                document.addEventListener('selectstart', a._preventDefaultEvent, !1)
              }),
              b()(c()(a), '_handlePanResponderEnd', function (e, t) {
                a.props.onPanEnd && a.props.onPanEnd(t.dx, t.dy),
                  a.props.onPinchMove && (a._previousTouchDistance = 0),
                  (a._previousPositionX = 0),
                  (a._previousPositionY = 0),
                  a._removeSelectStartListener()
              }),
              b()(c()(a), '_handleWheel', function (e) {
                var t = e.clientX,
                  n = e.clientY,
                  r = e.deltaX,
                  o = e.deltaY,
                  i = a._centerPosition,
                  s = i.x - t,
                  c = i.y - n
                a.props.onWheel && a.props.onWheel(r, o, s, c)
              }),
              (a._panResponder = T.a.create({
                onStartShouldSetPanResponder: function () {
                  return !0
                },
                onMoveShouldSetPanResponder: function () {
                  return !0
                },
                onPanResponderMove: a._handlePanResponderMove,
                onPanResponderRelease: a._handlePanResponderEnd,
                onPanResponderTerminate: a._handlePanResponderEnd,
              })),
              (a._removeSelectStartListener = function () {
                return document.removeEventListener('selectstart', a._preventDefaultEvent, !1)
              }),
              a
            )
          }
          return (
            i()(n, [
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
                      R()(e, ['children', 'onPanEnd', 'onPanMove', 'onPinchMove', 'onWheel']))
                  return y.a.createElement(
                    E.a,
                    P()({}, t, { onWheel: this._handleWheel, ref: this._setRef }, this._panResponder.panHandlers),
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
        })(y.a.Component),
        B = n('9RkS'),
        N = n('rOXj'),
        L = n('aITJ'),
        M = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('Lsrn')),
        V = n('k/Ka')
      function U(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function z(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? U(Object(n), !0).forEach(function (t) {
                b()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : U(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var H = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(V.a)(
          'svg',
          z(
            z({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [M.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          y.a.createElement(
            'g',
            null,
            y.a.createElement('path', {
              d: 'M19.75 19.944H4.25c-1.24 0-2.25-1.01-2.25-2.25V6.306c0-1.24 1.01-2.25 2.25-2.25h15.5c1.24 0 2.25 1.01 2.25 2.25v11.39c0 1.24-1.01 2.248-2.25 2.248zM4.25 5.556c-.413 0-.75.337-.75.75v11.39c0 .412.337.75.75.75h15.5c.413 0 .75-.338.75-.75V6.305c0-.413-.337-.75-.75-.75H4.25z',
            }),
          ),
        )
      }
      H.metadata = { width: 24, height: 24 }
      var W = H
      function G(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function K(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? G(Object(n), !0).forEach(function (t) {
                b()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : G(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var Y = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(V.a)(
          'svg',
          K(
            K({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [M.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          y.a.createElement(
            'g',
            null,
            y.a.createElement('path', {
              d: 'M19.75 19.89H4.25C3.01 19.89 2 18.88 2 17.64v-7.28c0-1.24 1.01-2.25 2.25-2.25h15.5c1.24 0 2.25 1.01 2.25 2.25v7.277c0 1.24-1.01 2.25-2.25 2.25zM4.25 9.61c-.413 0-.75.338-.75.75v7.278c0 .413.337.75.75.75h15.5c.413 0 .75-.337.75-.75V10.36c0-.412-.337-.75-.75-.75H4.25z',
            }),
          ),
        )
      }
      Y.metadata = { width: 24, height: 24 }
      var X = Y
      function q(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function Z(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? q(Object(n), !0).forEach(function (t) {
                b()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : q(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var J = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(V.a)(
          'svg',
          Z(
            Z({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [M.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          y.a.createElement(
            'g',
            null,
            y.a.createElement('path', {
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
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function ee(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? $(Object(n), !0).forEach(function (t) {
                b()(e, t, n[t])
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
        return Object(V.a)(
          'svg',
          ee(
            ee({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [M.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          y.a.createElement(
            'g',
            null,
            y.a.createElement('path', {
              d: 'M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z',
            }),
            y.a.createElement('path', {
              d: 'M15.21 11c0 .41-.34.75-.75.75h-2.71v2.71c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2.71H7.54c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.71V7.54c0-.41.34-.75.75-.75s.75.34.75.75v2.71h2.71c.41 0 .75.34.75.75z',
            }),
          ),
        )
      }
      te.metadata = { width: 24, height: 24 }
      var ne = te
      function ae(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function re(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ae(Object(n), !0).forEach(function (t) {
                b()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ae(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var oe = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(V.a)(
          'svg',
          re(
            re({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [M.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          y.a.createElement(
            'g',
            null,
            y.a.createElement('path', {
              d: 'M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z',
            }),
            y.a.createElement('path', {
              d: 'M14.46 11.75H7.54c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h6.92c.415 0 .75.336.75.75s-.335.75-.75.75z',
            }),
          ),
        )
      }
      oe.metadata = { width: 24, height: 24 }
      var ie = oe
      function se(e) {
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
            a = h()(e)
          if (t) {
            var r = h()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return p()(this, n)
        }
      }
      var ce = k.a.d85bc1b8,
        le = k.a.f596ace8,
        ue = k.a.df031fca,
        de = k.a.b40332c5,
        pe = k.a.e547b368,
        fe = k.a.f7571204,
        he = k.a.e6e16811,
        me =
          Math.log2 ||
          function (e) {
            return Math.log(e) * Math.LOG2E
          },
        be = (function (e) {
          u()(n, e)
          var t = se(n)
          function n(e) {
            var a, o
            return (
              r()(this, n),
              (a = t.call(this, e)),
              b()(c()(a), '_previousLeft', 0),
              b()(c()(a), '_previousTop', 0),
              b()(c()(a), '_panStyles', { top: 0, left: 0 }),
              b()(c()(a), '_shouldShowZoomControl', function () {
                return (!L.b.isMobileOS() || !N.a.isTouchSupported()) && a.props.withZoomControl
              }),
              b()(c()(a), '_renderControls', function () {
                var e = a.props,
                  t = e.image,
                  n = e.withAspectRatioOptions,
                  r = a.state.aspectRatio,
                  o = t.width / t.height,
                  i = a._shouldShowZoomControl()
                return n || i
                  ? y.a.createElement(
                      E.a,
                      { style: ve.controlsContainer },
                      n
                        ? y.a.createElement(
                            E.a,
                            { style: ve.ratioContainer },
                            y.a.createElement(_.a, {
                              accessibilityLabel: le,
                              borderColor: 'transparent',
                              color: r === o ? 'primary' : 'gray700',
                              hoverLabel: { label: pe },
                              icon: y.a.createElement(W, null),
                              onPress: a._setAspectRatio(o),
                              size: 'medium',
                            }),
                            y.a.createElement(_.a, {
                              accessibilityLabel: ue,
                              borderColor: 'transparent',
                              color: r === 16 / 9 ? 'primary' : 'gray700',
                              hoverLabel: { label: fe },
                              icon: y.a.createElement(X, null),
                              onPress: a._setAspectRatio(16 / 9),
                              size: 'medium',
                            }),
                            y.a.createElement(_.a, {
                              accessibilityLabel: de,
                              borderColor: 'transparent',
                              color: 1 === r ? 'primary' : 'gray700',
                              hoverLabel: { label: he },
                              icon: y.a.createElement(Q, null),
                              onPress: a._setAspectRatio(1),
                              size: 'medium',
                            }),
                          )
                        : null,
                      i
                        ? y.a.createElement(
                            E.a,
                            { style: ve.zoomContainer },
                            y.a.createElement(B.a, {
                              accessibilityLabel: ce,
                              max: a._maxScale,
                              maxIcon: y.a.createElement(ne, { style: ve.icon }),
                              min: 0,
                              minIcon: y.a.createElement(ie, { style: ve.icon }),
                              onChange: a._handleScaleChange,
                              step: 'any',
                              value: a.state.imageScale,
                            }),
                          )
                        : null,
                    )
                  : null
              }),
              b()(c()(a), '_setImageRef', function (e) {
                a._imageRef = e
              }),
              b()(c()(a), '_handleScaleChange', function (e) {
                a.setState({ imageScale: e })
              }),
              b()(c()(a), '_getImageDimensions', function () {
                var e = a.state.imageScale,
                  t = a.props.image.width / a.props.image.height,
                  n = a._getMaskDimensions(),
                  r = n.height,
                  o = n.width,
                  i = x.a.getCoverDimensions({ width: o, height: r }, t),
                  s = i.height
                return { width: i.width * Math.pow(2, e), height: s * Math.pow(2, e) }
              }),
              b()(c()(a), '_getMaskDimensions', function () {
                var e = a.state,
                  t = e.aspectRatio,
                  n = e.containerHeight,
                  r = e.containerWidth,
                  o = x.a.getContainDimensions({ width: r - 50, height: n - 50 }, t),
                  i = o.height
                return { width: o.width, height: i }
              }),
              b()(c()(a), '_handleLayout', function (e) {
                var t = e.nativeEvent.layout,
                  n = t.height,
                  r = t.width
                a.state.containerHeight || a.state.containerWidth
                  ? a.setState({ containerHeight: n, containerWidth: r })
                  : (a.setState({ containerHeight: n, containerWidth: r }), a._setDefaultCropData())
              }),
              b()(c()(a), '_setDefaultCropData', function () {
                var e = a.props,
                  t = e.defaultCropData,
                  n = e.image
                if (t) {
                  var r = a._getImageDimensions().width,
                    o = a._getMaskDimensions().width,
                    i = r / n.width,
                    s = me(o / (t.width * i))
                  a.setState({ imageScale: s })
                  var c = a._getUnscaledCropData(),
                    l = c.left,
                    u = c.top
                  ;(a._panStyles.top = u - t.top * i * Math.pow(2, s)),
                    (a._previousTop = a._panStyles.top),
                    (a._panStyles.left = l - t.left * i * Math.pow(2, s)),
                    (a._previousLeft = a._panStyles.left),
                    a._updateNativeStyles()
                }
              }),
              b()(c()(a), '_handleWheel', function (e, t, n, r) {
                var o = (-1 * t) / 500
                a.setState(function (e) {
                  var t = e.imageScale,
                    i = Math.min(a._maxScale, Math.max(t + o, 0))
                  return (
                    (a._panStyles.left += n * (i - t)),
                    (a._panStyles.top += r * (i - t)),
                    (a._previousLeft = a._panStyles.left),
                    (a._previousTop = a._panStyles.top),
                    { imageScale: i }
                  )
                })
              }),
              b()(c()(a), '_handlePanMove', function (e, t) {
                ;(a._panStyles.left = a._previousLeft + e),
                  (a._panStyles.top = a._previousTop + t),
                  a._updateNativeStyles(),
                  a._adjustToInBounds()
              }),
              b()(c()(a), '_handlePanEnd', function (e, t) {
                ;(a._previousLeft = a._panStyles.left), (a._previousTop = a._panStyles.top)
              }),
              b()(c()(a), '_handlePinchMove', function (e, t, n, r, o) {
                var i = e / 200
                a.setState(function (e) {
                  var s = e.imageScale,
                    c = Math.min(a._maxScale, Math.max(s + i, 0))
                  return (
                    (a._panStyles.left += t * (c - s) + r),
                    (a._panStyles.top += n * (c - s) + o),
                    (a._previousLeft = a._panStyles.left),
                    (a._previousTop = a._panStyles.top),
                    { imageScale: c }
                  )
                })
              }),
              b()(c()(a), '_adjustToInBounds', function () {
                var e = a._getUnscaledCropData(),
                  t = a._getImageDimensions(),
                  n = e.left,
                  r = e.top,
                  o = e.left + e.width - t.width,
                  i = e.top + e.height - t.height,
                  s = !1
                n < 0 && ((s = !0), (a._panStyles.left += n), (a._previousLeft += n)),
                  r < 0 && ((s = !0), (a._panStyles.top += r), (a._previousTop += r)),
                  o > 0 && ((s = !0), (a._panStyles.left += o), (a._previousLeft += o)),
                  i > 0 && ((s = !0), (a._panStyles.top += i), (a._previousTop += i)),
                  s && a._updateNativeStyles()
              }),
              b()(c()(a), '_updateNativeStyles', function () {
                var e = a._panStyles,
                  t = e.left,
                  n = e.top
                a._imageRef &&
                  a._imageRef.setNativeProps({
                    style: { transform: [{ translate3d: ''.concat(t, 'px, ').concat(n, 'px, 0') }] },
                  })
              }),
              b()(c()(a), '_getUnscaledCropData', function () {
                var e = a._getImageDimensions(),
                  t = e.height,
                  n = e.width,
                  r = a._getMaskDimensions(),
                  o = r.height,
                  i = r.width,
                  s = a._panStyles,
                  c = s.left
                return { top: (t - o) / 2 - s.top, left: (n - i) / 2 - c, width: i, height: o }
              }),
              b()(c()(a), '_setAspectRatio', function (e) {
                return function () {
                  a.setState({ aspectRatio: e })
                }
              }),
              (a.state = {
                aspectRatio: e.defaultAspectRatio || e.image.width / e.image.height,
                imageScale: 0,
                containerHeight: 0,
                containerWidth: 0,
              }),
              (a._maxScale = ((o = e.image), Math.max(Math.min(me(o.width / 150), me(o.height / 150), 3), 0.5))),
              a
            )
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.circle,
                    n = e.image,
                    a = e.withZoomControl,
                    r = this._getImageDimensions(),
                    o = r.height,
                    i = r.width,
                    s = this._getMaskDimensions(),
                    c = s.height,
                    l = s.width,
                    u = this.state.containerWidth && this.state.containerHeight
                  return y.a.createElement(
                    E.a,
                    { style: ve.container },
                    y.a.createElement(
                      F,
                      {
                        onLayout: this._handleLayout,
                        onPanEnd: this._handlePanEnd,
                        onPanMove: this._handlePanMove,
                        onPinchMove: a ? this._handlePinchMove : void 0,
                        onWheel: a ? this._handleWheel : void 0,
                        style: ve.root,
                      },
                      u
                        ? y.a.createElement(
                            y.a.Fragment,
                            null,
                            y.a.createElement(w.a, {
                              ref: this._setImageRef,
                              source: { uri: n.src, width: i, height: o },
                              style: ve.image,
                            }),
                            y.a.createElement(S, { circle: t, height: c, width: l }),
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
        })(y.a.Component)
      b()(be, 'defaultProps', { circle: !1, withZoomControl: !0 })
      var ve = O.a.create(function (e) {
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
      t.a = be
    },
    '2Daw': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return T
      })
      n('OZaJ')
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        s = n('5Yy7'),
        c = n.n(s),
        l = n('N+ot'),
        u = n.n(l),
        d = n('AuHH'),
        p = n.n(d),
        f = n('KEM+'),
        h = n.n(f),
        m = (n('uFXj'), n('ERkP')),
        b = n.n(m),
        v = n('LCtV'),
        y = n('3XMw'),
        _ = n.n(y),
        g = n('VPdC'),
        k = n('pKoL'),
        w = n('MWbm'),
        O = n('rFBM'),
        E = n('/yvb'),
        C = n('9Xij'),
        S = n('rHpw'),
        x = n('hOZg'),
        I = n('Mbn/'),
        P = n('T8pk')
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
            a = p()(e)
          if (t) {
            var r = p()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return u()(this, n)
        }
      }
      var R = _.a.b87ca51a,
        D = _.a.eebff22c,
        T = (function (e) {
          c()(n, e)
          var t = j(n)
          function n() {
            return r()(this, n), t.apply(this, arguments)
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.borderRadius,
                    n = e.maskStyle,
                    a = e.mediaItem,
                    r = e.onAddMediaFiles,
                    o = e.onCrop,
                    i = e.onRemove,
                    s = e.rootStyle,
                    c = e.withDragDrop,
                    l = a && !a.uploader,
                    u = b.a.createElement(
                      b.a.Fragment,
                      null,
                      this._renderPreview(),
                      l
                        ? null
                        : b.a.createElement(
                            b.a.Fragment,
                            null,
                            b.a.createElement(w.a, { style: [F.mask, n, A[t]] }),
                            b.a.createElement(
                              w.a,
                              { style: F.mediaPicker },
                              this._renderMediaEdit(),
                              o ? this._renderMediaCrop() : null,
                              i ? this._renderMediaRemove() : null,
                            ),
                          ),
                    )
                  return b.a.createElement(
                    w.a,
                    { style: [F.container, s, A[t]] },
                    c && r ? b.a.createElement(O.a, { onFilesAdded: r, style: [F.dragDropContainer, A[t]] }, u) : u,
                  )
                },
              },
              {
                key: '_renderMediaRemove',
                value: function () {
                  var e = this.props.onRemove
                  return b.a.createElement(E.a, {
                    accessibilityLabel: R,
                    hoverLabel: { label: R },
                    icon: b.a.createElement(x.a, null),
                    onPress: e,
                    size: 'large',
                    style: F.rightButton,
                    type: 'onMediaDominantColorFilled',
                  })
                },
              },
              {
                key: '_renderMediaCrop',
                value: function () {
                  var e = this.props,
                    t = e.onCrop,
                    n = e.onRemove
                  return b.a.createElement(E.a, {
                    accessibilityLabel: D,
                    icon: b.a.createElement(I.a, null),
                    onPress: t,
                    size: 'large',
                    style: n ? F.middleButton : F.rightButton,
                    type: 'onMediaDominantColorFilled',
                  })
                },
              },
              {
                key: '_renderMediaEdit',
                value: function () {
                  var e = this.props,
                    t = e.acceptGifs,
                    n = e.acceptVideo,
                    a = e.accessibilityLabel,
                    r = e.onAddMediaFiles,
                    o = e.onEdit,
                    i = b.a.createElement(P.a, null)
                  return r
                    ? b.a.createElement(g.a, {
                        acceptGifs: t,
                        acceptVideo: n,
                        accessibilityLabel: a,
                        icon: i,
                        onChange: r,
                        size: 'large',
                        type: 'onMediaDominantColorFilled',
                      })
                    : b.a.createElement(E.a, {
                        accessibilityLabel: a,
                        icon: i,
                        onPress: o,
                        size: 'large',
                        style: F.edit,
                        type: 'onMediaDominantColorFilled',
                      })
                },
              },
              {
                key: '_renderPreview',
                value: function () {
                  var e = this.props,
                    t = e.aspectRatio,
                    n = e.borderRadius,
                    a = e.currentContent,
                    r = e.mediaItem
                  return r
                    ? b.a.createElement(
                        C.a,
                        { ratio: t },
                        b.a.createElement(k.a, {
                          borderRadius: n,
                          enableGif: !1,
                          mediaItem: r,
                          style: F.mediaPreview,
                          withCloseButton: !1,
                        }),
                      )
                    : a
                },
              },
            ]),
            n
          )
        })(b.a.Component)
      h()(T, 'defaultProps', { acceptGifs: !1, acceptVideo: !1, aspectRatio: 1, borderRadius: v.a.NONE })
      var A = S.a.create(function (e) {
          return {
            infinite: { borderRadius: e.borderRadii.infinite },
            medium: { borderRadius: e.borderRadii.small },
            none: { borderRadius: e.borderRadii.none },
          }
        }),
        F = S.a.create(function (e) {
          return {
            mediaPreview: { height: '100%' },
            mediaPicker: {
              alignItems: 'center',
              flexDirection: 'row',
              height: '100%',
              justifyContent: 'center',
              opacity: 0.75,
              position: 'absolute',
              top: 0,
              width: '100%',
            },
            rightButton: { marginLeft: e.spaces.space32 },
            middleButton: { marginLeft: e.spaces.space32, marginRight: '-'.concat(e.spaces.space12) },
            mask: {
              backgroundColor: e.colors.translucentBlack30,
              height: '100%',
              position: 'absolute',
              top: 0,
              width: '100%',
            },
            container: { justifyContent: 'center', overflow: 'hidden' },
            dragDropContainer: {
              borderWidth: e.borderWidths.medium,
              borderColor: e.colors.transparent,
              borderStyle: 'solid',
            },
            edit: { margin: '-'.concat(e.spaces.space12) },
          }
        })
    },
    '3GUV': function (e, t, n) {
      'use strict'
      n('OZaJ')
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        s = n('5Yy7'),
        c = n.n(s),
        l = n('N+ot'),
        u = n.n(l),
        d = n('AuHH'),
        p = n.n(d),
        f = n('ERkP'),
        h = n.n(f),
        m = n('rHpw'),
        b = n('MWbm')
      function v(e) {
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
            a = p()(e)
          if (t) {
            var r = p()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return u()(this, n)
        }
      }
      var y = (function (e) {
          c()(n, e)
          var t = v(n)
          function n() {
            return r()(this, n), t.apply(this, arguments)
          }
          return (
            i()(n, [
              {
                key: 'shouldComponentUpdate',
                value: function () {
                  return !1
                },
              },
              {
                key: 'render',
                value: function () {
                  return h.a.createElement(b.a, { style: _.root })
                },
              },
            ]),
            n
          )
        })(h.a.Component),
        _ = m.a.create(function (e) {
          return { root: { height: 5 * e.lineHeightsPx.body } }
        })
      t.a = y
    },
    '4BrD': function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var a = n('KEM+'),
        r = n.n(a),
        o = n('ERkP'),
        i = n.n(o),
        s = n('Lsrn'),
        c = n('k/Ka')
      function l(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                r()(e, t, n[t])
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
        return Object(c.a)(
          'svg',
          u(
            u({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [s.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          i.a.createElement(
            'g',
            null,
            i.a.createElement('path', {
              d: 'M20.75 22H3.25C2.01 22 1 20.99 1 19.75V4.25C1 3.01 2.01 2 3.25 2h17.5C21.99 2 23 3.01 23 4.25v15.5c0 1.24-1.01 2.25-2.25 2.25zM3.25 3.5c-.414 0-.75.337-.75.75v15.5c0 .413.336.75.75.75h17.5c.414 0 .75-.337.75-.75V4.25c0-.413-.336-.75-.75-.75H3.25z',
            }),
            i.a.createElement('path', {
              d: 'M16.758 6.982h-5.806c-.414 0-.75.336-.75.75s.336.75.75.75h3.995L6.92 16.508c-.292.293-.292.768 0 1.06.147.147.34.22.53.22s.385-.072.53-.22l8.027-8.025v3.995c0 .414.336.75.75.75s.75-.336.75-.75V7.732c0-.414-.335-.75-.75-.75z',
            }),
          ),
        )
      }
      ;(d.metadata = { width: 24, height: 24 }), (t.a = d)
    },
    '53j7': function (e, t, n) {
      'use strict'
      n.d(t, 'h', function () {
        return w
      }),
        n.d(t, 'i', function () {
          return O
        }),
        n.d(t, 'j', function () {
          return E
        }),
        n.d(t, 'a', function () {
          return S
        }),
        n.d(t, 'd', function () {
          return I
        }),
        n.d(t, 'b', function () {
          return j
        }),
        n.d(t, 'e', function () {
          return D
        }),
        n.d(t, 'c', function () {
          return A
        }),
        n.d(t, 'g', function () {
          return B
        }),
        n.d(t, 'f', function () {
          return N
        }),
        n.d(t, 'k', function () {
          return L
        }),
        n.d(t, 'l', function () {
          return V
        }),
        n.d(t, 'm', function () {
          return U
        })
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var a = n('ddV6'),
        r = n.n(a),
        o = n('KEM+'),
        i = n.n(o),
        s = (n('JtPf'), n('7x/C'), n('oEOe')),
        c = n('AspN'),
        l = n('/kEJ'),
        u = n('XMGw'),
        d = n('Ssj5')
      function p(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? p(Object(n), !0).forEach(function (t) {
                i()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : p(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var h = ''.concat(u.a, '/profile'),
        m = 'rweb/'.concat(h),
        b = s.a(m, 'REMOVE_PROFILE_BANNER'),
        v = s.a(m, 'UPDATE_PROFILE'),
        y = s.a(m, 'UPDATE_PROFILE_AVATAR'),
        _ = s.a(m, 'UPDATE_PROFILE_BANNER'),
        g = s.a(m, 'UPLOAD_MEDIA'),
        k = { avatarMediaId: null, bannerMediaId: null, isUploading: !1, profileSettings: null }
      var w = function (e) {
          return e[h].avatarMediaId
        },
        O = function (e) {
          return e[h].bannerMediaId
        },
        E = function (e) {
          return e[h].profileSettings
        },
        C = 'rweb/settings/profile/ADD_AVATAR_MEDIA',
        S = function (e) {
          return { meta: { mediaId: e }, type: C }
        },
        x = 'rweb/settings/profile/REMOVE_AVATAR_MEDIA',
        I = function (e) {
          return { meta: { mediaId: e }, type: x }
        },
        P = 'rweb/settings/profile/ADD_BANNER_MEDIA',
        j = function (e) {
          return { meta: { mediaId: e }, type: P }
        },
        R = 'rweb/settings/profile/REMOVE_BANNER_MEDIA',
        D = function (e) {
          return { meta: { mediaId: e }, type: R }
        },
        T = 'rweb/settings/profile/PERSIST_PROFILE_SETTINGS',
        A = function (e) {
          return { meta: { profileSettings: e }, type: T }
        },
        F = 'rweb/settings/profile/RESET_PERSISTED_PROFILE_SETTINGS',
        B = function () {
          return { type: F }
        },
        N = function (e) {
          return function (t, n, a) {
            var r = a.api
            return s.b(t, { params: e, request: r.Settings.removeProfileBanner })(
              { actionTypes: b, context: 'ACTION_REMOVE_USER_BANNER' },
              function (e) {
                if (e) return [Object(l.c)({ users: i()({}, e.id_str, f(f({}, e), {}, { profile_banner_url: null })) })]
              },
            )
          }
        },
        L = function (e) {
          return function (t, n, a) {
            var r = a.api
            return s.b(t, { params: e, request: r.Settings.updateProfile })(
              { actionTypes: v, context: 'ACTION_UPDATE_PROFILE_SETTINGS' },
              function (e) {
                if (e && e.entities) return [Object(l.c)(e.entities)]
              },
            )
          }
        },
        M = function (e, t, n) {
          return function (a) {
            return function (o, u, d) {
              var p = d.api
              o({ type: g.REQUEST })
              var f = c.p(a)
              return o(f).then(
                function (a) {
                  var c = r()(a, 1)[0]
                  o([{ type: g.SUCCESS }, { type: e.REQUEST }])
                  return s.b(o, { params: { media_id: c.uploadId }, request: n(p) })(
                    { actionTypes: v, context: t },
                    function (e) {
                      if (e) return [Object(l.c)({ users: i()({}, e.id_str, e) })]
                    },
                  )
                },
                function (e) {
                  return o({ type: g.FAILURE }), Promise.reject(e)
                },
              )
            }
          }
        },
        V = M(y, 'ACTION_UPDATE_USER_AVATAR', function (e) {
          return e.Settings.updateProfileAvatar
        }),
        U = M(_, 'ACTION_UPDATE_USER_BANNER', function (e) {
          return e.Settings.updateProfileBanner
        })
      d.a.register(
        i()({}, h, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : k,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          switch (t.type) {
            case C:
              return f(f({}, e), {}, { avatarMediaId: t.meta.mediaId })
            case x:
              return f(f({}, e), {}, { avatarMediaId: null })
            case P:
              return f(f({}, e), {}, { bannerMediaId: t.meta.mediaId })
            case R:
              return f(f({}, e), {}, { bannerMediaId: null })
            case T:
              return f(f({}, e), {}, { profileSettings: t.meta.profileSettings })
            case F:
              return f(f({}, e), {}, { profileSettings: null })
            case g.REQUEST:
              return f(f({}, e), {}, { isUploading: !0 })
            case g.FAILURE:
            case g.SUCCESS:
              return f(f({}, e), {}, { isUploading: !1 })
            default:
              return e
          }
        }),
      )
    },
    '5UID': function (e, t, n) {
      'use strict'
      n('OZaJ')
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        s = n('5Yy7'),
        c = n.n(s),
        l = n('N+ot'),
        u = n.n(l),
        d = n('AuHH'),
        p = n.n(d),
        f = n('ERkP'),
        h = n.n(f),
        m = n('3XMw'),
        b = n.n(m),
        v = n('rHpw'),
        y = n('+/1j'),
        _ = n('MWbm')
      function g(e) {
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
            a = p()(e)
          if (t) {
            var r = p()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return u()(this, n)
        }
      }
      var k = b.a.e5b0063d,
        w = 0,
        O = (function (e) {
          c()(n, e)
          var t = g(n)
          function n() {
            var e
            return r()(this, n), ((e = t.call(this))._listDomId = 'accessible-list-'.concat(w)), (w += 1), e
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    n = e.title,
                    a = k({ title: n })
                  return h.a.createElement(
                    _.a,
                    { accessibilityLabelledBy: this._listDomId, accessibilityRole: 'region' },
                    h.a.createElement(
                      y.a,
                      {
                        accessibilityLevel: 1,
                        accessibilityRole: 'heading',
                        nativeID: this._listDomId,
                        style: v.a.visuallyHidden,
                      },
                      n,
                    ),
                    h.a.createElement(_.a, { accessibilityLabel: a }, t),
                  )
                },
              },
            ]),
            n
          )
        })(h.a.Component)
      t.a = O
    },
    '6D0R': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'default', function () {
          return m
        })
      var a = n('97Jx'),
        r = n.n(a),
        o = (n('MvUL'), n('KqXw'), n('ERkP')),
        i = n.n(o),
        s = n('Hw0q'),
        c = n('9D1O'),
        l = Object(c.c)({
          task: function (e) {
            return e.ReportFlow.task
          },
        }),
        u = n('gPQO'),
        d = n('fz3c'),
        p = function (e, t) {
          return Object(s.a)(e[t])
        },
        f = function (e, t) {
          switch (p(e, t)) {
            case '1':
            case 'true':
              return !0
            default:
              return !1
          }
        },
        h = function (e) {
          return {
            client_app_id: p(e, 'client_app_id'),
            client_location: p(e, 'client_location'),
            client_referer: p(e, 'client_referer'),
            community_id: p(e, 'community_id'),
            conversation_section: p(e, 'conversation_section'),
            impression_id: p(e, 'impression_id'),
            is_media: f(e, 'is_media'),
            is_promoted: f(e, 'is_promoted'),
            report_flow_id: p(e, 'report_flow_id'),
            report_referrer: p(e, 'report_referrer'),
            reported_broadcast_id: p(e, 'reported_broadcast_id'),
            reported_direct_message_conversation_id: p(e, 'reported_direct_message_conversation_id'),
            reported_direct_message_id: p(e, 'reported_direct_message_id'),
            reported_list_id: p(e, 'reported_list_id'),
            reported_moment_id: p(e, 'reported_moment_id'),
            reported_tweet_id: p(e, 'reported_tweet_id'),
            reported_user_id: p(e, 'reported_user_id'),
            source: Object(d.e)(p(e, 'source') || 'reporttweet'),
          }
        }
      function m(e) {
        var t,
          n = e.history,
          a = e.location,
          o = a.query,
          s = a.state
        return !(null == o || !o.input_flow_data) ||
          (null != s && null !== (t = s.input) && void 0 !== t && t.requested_variant)
          ? i.a.createElement(u.a, r()({}, e, { flowName: 'report-flow', ocfModule: l }))
          : (n.replace(location.pathname, { input: { requested_variant: JSON.stringify(h(o)) } }), null)
      }
    },
    '6XNv': function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('OZaJ')
      var a = n('RhWx'),
        r = n.n(a),
        o = n('VrFO'),
        i = n.n(o),
        s = n('Y9Ll'),
        c = n.n(s),
        l = n('1Pcy'),
        u = n.n(l),
        d = n('5Yy7'),
        p = n.n(d),
        f = n('N+ot'),
        h = n.n(f),
        m = n('AuHH'),
        b = n.n(m),
        v = n('KEM+'),
        y = n.n(v),
        _ = (n('LqLs'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('7xRU'), n('z84I'), n('2G9S'), n('ERkP')),
        g = n.n(_),
        k = n('t62R'),
        w = n('piX5'),
        O = n('4r2z'),
        E = n('FG+G'),
        C = n('rHpw'),
        S = (n('aWzz'), n('k/Ka')),
        x = n('shC7'),
        I = n('MWbm')
      function P(e) {
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
            a = b()(e)
          if (t) {
            var r = b()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return h()(this, n)
        }
      }
      function j(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function R(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? j(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : j(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var D = g.a.forwardRef(function (e, t) {
          return Object(S.a)('select', R(R({}, e), {}, { ref: t }))
        }),
        T = function (e) {
          return Object(S.a)('option', e)
        },
        A = 1,
        F = (function (e) {
          p()(n, e)
          var t = P(n)
          function n(e) {
            var a
            return (
              i()(this, n),
              (a = t.call(this, e)),
              y()(u()(a), '_selectRef', g.a.createRef()),
              y()(u()(a), 'state', { isFocused: !1 }),
              y()(u()(a), '_handleChange', function (e) {
                var t = a.props,
                  n = t.onChange,
                  r = t.withEmptyOption,
                  o = e.target,
                  i = o.selectedIndex,
                  s = o.value
                n && n(s, i - (r ? 1 : 0))
              }),
              y()(u()(a), '_handleBlur', function (e) {
                var t = a.props.onBlur
                a.setState({ isFocused: !1 }), t && t()
              }),
              y()(u()(a), '_handleFocus', function (e) {
                var t = a.props.onFocus
                a.setState({ isFocused: !0 }), t && t()
              }),
              (a._id = 'SELECTOR_'.concat(A)),
              (a._errorID = ''.concat(a._id, '_ERROR')),
              (a._helperID = ''.concat(a._id, '_HELP')),
              (a._labelID = ''.concat(a._id, '_LABEL')),
              (A += 1),
              a
            )
          }
          return (
            c()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this.props.autofocus && this._selectRef && this._selectRef.current && this._selectRef.current.focus()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.accessibilityDescribedBy,
                    n = e.disabled,
                    a = e.errorText,
                    o = e.hasError,
                    i = e.helperText,
                    s = e.options,
                    c = e.style,
                    l = e.testID,
                    u = e.value,
                    d = e.withEmptyOption,
                    p = this.state.isFocused,
                    f = k.b.getLanguage(),
                    h =
                      'ja' === f
                        ? C.a.theme.fontFamilies.japan
                        : x.a.getConstants().isRTL || O.a.isLocaleRTL(f)
                        ? C.a.theme.fontFamilies.rtl
                        : C.a.theme.fontFamilies.normal,
                    m = void 0 === o ? !!a : o,
                    b = new Set()
                  a && b.add(this._errorID), t && b.add(t), i && b.add(this._helperID)
                  var v = b.size ? r()(b).join(' ') : void 0
                  return g.a.createElement(
                    g.a.Fragment,
                    null,
                    g.a.createElement(
                      I.a,
                      {
                        style: [
                          w.a.border,
                          B.container,
                          n && w.a.disabled,
                          p && w.a.focusedBorderValid,
                          m && w.a.invalidBorderColor,
                          p && m && w.a.focusedBorderInvalid,
                          c,
                        ],
                      },
                      this._renderLabel(),
                      g.a.createElement(
                        D,
                        {
                          accessibilityDescribedBy: v,
                          accessibilityInvalid: m,
                          accessibilityLabelledBy: this._labelID,
                          disabled: n,
                          nativeID: this._id,
                          onBlur: this._handleBlur,
                          onChange: this._handleChange,
                          onFocus: this._handleFocus,
                          ref: this._selectRef,
                          style: [B.select, { fontFamily: h }, n && w.a.disabled],
                          testID: l || '',
                          value: u,
                        },
                        d ? g.a.createElement(T, { disabled: !0, style: B.option, value: '' }) : null,
                        s.map(function (e) {
                          var t = e.disabled,
                            n = e.label,
                            a = e.value
                          return g.a.createElement(
                            T,
                            { disabled: t, key: ''.concat(n, '-').concat(a), style: B.option, value: a },
                            n,
                          )
                        }),
                      ),
                      g.a.createElement(E.a, {
                        style: [B.dropdownCaret, p && w.a.validColor, (o || a) && w.a.invalidColor],
                      }),
                    ),
                    i ? this._renderHelperText() : null,
                    m && a ? this._renderErrorText() : null,
                  )
                },
              },
              {
                key: '_renderLabel',
                value: function () {
                  var e = this.props,
                    t = e.errorText,
                    n = e.hasError,
                    a = e.label,
                    r = this.state.isFocused
                  return g.a.createElement(
                    k.b,
                    {
                      accessibilityRole: 'label',
                      color: n || t ? 'red500' : r ? 'primary' : 'gray700',
                      nativeID: this._labelID,
                      style: B.label,
                    },
                    a,
                  )
                },
              },
              {
                key: '_renderHelperText',
                value: function () {
                  return g.a.createElement(
                    I.a,
                    { accessibilityLiveRegion: 'polite' },
                    g.a.createElement(
                      k.b,
                      { color: 'gray700', nativeID: this._helperID, style: B.helperText },
                      this.props.helperText,
                    ),
                  )
                },
              },
              {
                key: '_renderErrorText',
                value: function () {
                  return g.a.createElement(
                    I.a,
                    { accessibilityLiveRegion: 'polite' },
                    g.a.createElement(
                      k.b,
                      { color: 'red500', nativeID: this._errorID, style: B.helperText },
                      this.props.errorText,
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(g.a.PureComponent)
      y()(F, 'defaultProps', { disabled: !1, autofocus: !1, withEmptyOption: !1 }), (F.propTypes = {})
      var B = C.a.create(function (e) {
        return {
          container: { backgroundColor: e.colors.cellBackground },
          dropdownCaret: {
            color: e.colors.gray700,
            height: ''.concat(1.5, 'em'),
            pointerEvents: 'none',
            position: 'absolute',
            marginTop: '-'.concat(0.75, 'em'),
            top: '50%',
            right: e.spaces.space12,
          },
          label: {
            position: 'absolute',
            fontSize: e.fontSizes.subtext2,
            paddingHorizontal: e.spaces.space8,
            paddingTop: e.spaces.space8,
            pointerEvents: 'none',
            lineHeight: e.lineHeights.subtext2,
          },
          option: { backgroundColor: e.colors.navigationBackground },
          select: {
            appearance: 'none',
            backgroundColor: 'transparent',
            borderRadius: e.borderRadii.none,
            borderWidth: e.borderWidths.none,
            color: e.colors.text,
            cursor: 'pointer',
            fontSize: e.fontSizes.headline2,
            lineHeight: e.lineHeights.headline2,
            margin: 0,
            marginTop: e.spaces.space16,
            outlineStyle: 'none',
            padding: 0,
            paddingTop: e.spaces.space12,
            paddingBottom: e.spaces.space8,
            paddingHorizontal: e.spaces.space8,
          },
          helperText: {
            fontSize: e.fontSizes.subtext2,
            paddingHorizontal: e.spaces.space8,
            paddingTop: e.spaces.space2,
          },
        }
      })
      t.a = F
    },
    CUXw: function (e, t, n) {
      'use strict'
      n('OZaJ'), n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var a = n('97Jx'),
        r = n.n(a),
        o = n('VrFO'),
        i = n.n(o),
        s = n('Y9Ll'),
        c = n.n(s),
        l = n('1Pcy'),
        u = n.n(l),
        d = n('5Yy7'),
        p = n.n(d),
        f = n('N+ot'),
        h = n.n(f),
        m = n('AuHH'),
        b = n.n(m),
        v = n('KEM+'),
        y = n.n(v),
        _ = (n('2G9S'), n('ERkP')),
        g = n.n(_),
        k = n('XOJV'),
        w = n('E0cF'),
        O = n('rxPX'),
        E = n('0KEI'),
        C = function (e, t) {
          return t.tweetId
        },
        S = Object(O.a)()
          .propsFromState(function () {
            return { tweet: k.a.createHydratedTweetSelector(C) }
          })
          .adjustStateProps(function (e) {
            var t = e.tweet
            return { originalTweet: (t && w.a.getOriginalTweet(t)) || t, tweet: t }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(E.createLocalApiErrorHandlerWithContextFactory)(
                'TWEET_SELECT_CONTEXT',
              ),
            }
          }),
        x = n('3XMw'),
        I = n.n(x),
        P = n('x5Pi'),
        j = n('fs1G'),
        R = n('kXdP'),
        D = n('BLtI'),
        T = n('MWbm'),
        A = n('htQn'),
        F = n('Znyr'),
        B = n('kY28'),
        N = n('rHpw'),
        L = n('v6aA'),
        M = n('6Rrp'),
        V = n('0ULw'),
        U = n('pu5c')
      function z(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function H(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? z(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : z(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function W(e) {
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
            a = b()(e)
          if (t) {
            var r = b()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return h()(this, n)
        }
      }
      var G = I.a.h6beb5fa,
        K = function (e) {
          return e && e.preventDefault()
        },
        Y = (function (e) {
          p()(n, e)
          var t = W(n)
          function n() {
            var e
            i()(this, n)
            for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              y()(u()(e), '_renderDisabledTweet', function (t) {
                return g.a.createElement(
                  T.a,
                  { style: X.root },
                  e._renderContent(),
                  g.a.createElement(T.a, { style: X.disabledTweetMask }),
                  g.a.createElement(
                    T.a,
                    { style: [X.disabledIconWrapper, X.iconMargins] },
                    g.a.createElement(R.a, { hoverText: t }, q, g.a.createElement(T.a, { style: X.disabledTweetMask })),
                  ),
                )
              }),
              y()(u()(e), '_renderContent', function () {
                var t = e.props,
                  n = t.replyContext,
                  a = t.tweet,
                  r = t.withActions
                if (a) {
                  var o,
                    i = Object(P.f)(a, e.context.loggedInUserId)
                  return g.a.createElement(
                    T.a,
                    { style: X.tweet },
                    g.a.createElement(D.b, {
                      excludeCardUrl: null === (o = a.card) || void 0 === o ? void 0 : o.url,
                      linkableQuotedTweet: !0,
                      onAnalyticsClick: j.a,
                      onAvatarClick: j.a,
                      onEntityClick: j.a,
                      onMediaClick: K,
                      onReplyContextClick: j.a,
                      preventVideoPlayback: !0,
                      replyContext: n,
                      socialContext: i,
                      tweet: a,
                      withActions: r,
                      withActionsDisabled: !0,
                      withSocialContext: !0,
                    }),
                  )
                }
                return null
              }),
              y()(u()(e), '_renderSelectIcon', function (e) {
                return e
                  ? g.a.createElement(M.a, { style: [X.icon, X.iconMargins, X.iconCheckmark] })
                  : g.a.createElement(V.a, { style: [X.icon, X.iconMargins] })
              }),
              y()(u()(e), '_handleOnClick', function () {
                var t = e.props,
                  n = t.onClick,
                  a = t.originalTweet,
                  r = t.tweetId
                n && n((null == a ? void 0 : a.id_str) || r)
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.disabledMessage,
                    n = e.isPartOfDraggedSelection,
                    a = e.isSelected,
                    r = e.showDragCount,
                    o = e.tweet
                  return t
                    ? this._renderDisabledTweet(t)
                    : o
                    ? g.a.createElement(
                        A.a,
                        { onPress: this._handleOnClick, style: X.root },
                        this._renderDragCount(r),
                        this._renderContent(),
                        this._renderSelectIcon(a),
                        n && g.a.createElement(T.a, { style: X.disabledTweetMask }),
                      )
                    : null
                },
              },
              {
                key: '_renderDragCount',
                value: function (e) {
                  return e < 2
                    ? null
                    : g.a.createElement(
                        T.a,
                        { style: X.countBadgeContainer },
                        g.a.createElement(F.a, {
                          count: e,
                          standalone: !0,
                          style: X.countBadge,
                          truncatedCountFormatter: G,
                          unreadCountLabel: function () {
                            return ''
                          },
                          withBorder: !1,
                        }),
                      )
                },
              },
            ]),
            n
          )
        })(g.a.PureComponent)
      y()(Y, 'contextType', L.a),
        y()(Y, 'defaultProps', {
          replyContext: B.a.ReplyContextTypes.Isolated,
          withActions: !0,
          showDragCount: 0,
          isPartOfDraggedSelection: !1,
          isSelected: !1,
        })
      var X = N.a.create(function (e) {
          return {
            root: { backgroundColor: e.colors.cellBackground, flexDirection: 'row' },
            tweet: { flex: 1 },
            disabledTweetMask: H(
              H({}, N.a.absoluteFillObject),
              {},
              { backgroundColor: e.colors.navigationBackground, opacity: '50%' },
            ),
            disabledIconWrapper: { height: '100%' },
            icon: { color: e.colors.gray700 },
            iconMargins: { marginTop: e.spaces.space12, marginRight: e.spaces.space12 },
            iconCheckmark: { color: e.colors.green500 },
            countBadge: { height: e.spaces.space32, width: e.spaces.space32 },
            countBadgeContainer: {
              height: e.spaces.space32,
              width: e.spaces.space32,
              position: 'absolute',
              right: '-'.concat(e.spaces.space16),
              top: '-'.concat(e.spaces.space16),
            },
          }
        }),
        q = g.a.createElement(U.a, { style: X.icon }),
        Z = g.a.forwardRef(function (e, t) {
          return g.a.createElement(Y, r()({}, e, { ref: t }))
        }),
        J = S.forwardRef(Z)
      t.a = J
    },
    EeFI: function (e, t, n) {
      'use strict'
      n('OZaJ')
      var a = n('97Jx'),
        r = n.n(a),
        o = n('VrFO'),
        i = n.n(o),
        s = n('Y9Ll'),
        c = n.n(s),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('N+ot'),
        p = n.n(d),
        f = n('AuHH'),
        h = n.n(f),
        m = n('ERkP'),
        b = n.n(m),
        v = n('3XMw'),
        y = n.n(v),
        _ = n('MWbm'),
        g = n('Qwev'),
        k = n('21U8'),
        w = n('rHpw'),
        O = n('1auM'),
        E = n('eYns')
      function C(e) {
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
            a = h()(e)
          if (t) {
            var r = h()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return p()(this, n)
        }
      }
      var S = y.a.gff1f69e,
        x = (function (e) {
          u()(n, e)
          var t = C(n)
          function n(e) {
            var a
            return i()(this, n), ((a = t.call(this, e)).state = { orientedImage: null }), a
          }
          return (
            c()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this,
                    t = (this.props.media || {}).originalMediaFile,
                    n = void 0 === t ? {} : t
                  n &&
                    n instanceof O.a &&
                    Object(E.b)(n).then(function (t) {
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
                    : b.a.createElement(g.a, { accessibilityLabel: S, style: I.activityIndicator })
                },
              },
              {
                key: '_renderCropper',
                value: function () {
                  var e = this.props,
                    t = e.cropperRef,
                    n = e.defaultAspectRatio,
                    a = e.defaultCropData,
                    r = e.media,
                    o = e.withAspectRatioOptions,
                    i = e.withZoomControl,
                    s = this.state.orientedImage,
                    c = r || {},
                    l = c.cropData,
                    u = c.originalMediaFile,
                    d = void 0 === u ? {} : u
                  return s
                    ? b.a.createElement(
                        _.a,
                        { style: I.cropper },
                        b.a.createElement(k.a, {
                          circle: this.props.circle,
                          defaultAspectRatio: (a && a.aspectRatio) || (l && l.aspectRatio) || n,
                          defaultCropData: a || l,
                          image: { src: s.url, width: d.width, height: d.height },
                          ref: t,
                          withAspectRatioOptions: o,
                          withZoomControl: i,
                        }),
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(b.a.Component),
        I = w.a.create(function (e) {
          return {
            cropper: { backgroundColor: e.colors.navigationBackground, flexGrow: 1 },
            activityIndicator: { flexGrow: 1 },
          }
        })
      t.a = b.a.forwardRef(function (e, t) {
        return b.a.createElement(x, r()({}, e, { cropperRef: t }))
      })
    },
    H9wA: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      })
      var a = n('aWzz'),
        r = {
          accessibilityLabel: a.string,
          accessibilityLiveRegion: Object(a.oneOf)(['assertive', 'none', 'polite']),
          style: a.any,
        }
    },
    K2mq: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = n('97Jx'),
        r = n.n(a),
        o = n('ERkP'),
        i = n.n(o),
        s = n('9D1O'),
        c = n('gPQO')
      t.default = function (e) {
        return i.a.createElement(c.a, r()({}, e, { flowName: 'signup', ocfModule: s.i }))
      }
    },
    KNZn: function (e, t, n) {
      'use strict'
      n('OZaJ'), n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        s = n('1Pcy'),
        c = n.n(s),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('N+ot'),
        p = n.n(d),
        f = n('AuHH'),
        h = n.n(f),
        m = n('KEM+'),
        b = n.n(m),
        v = (n('7x/C'), n('DZ+c'), n('vrRf'), n('uFXj'), n('ERkP')),
        y = n.n(v),
        _ = n('RqPI'),
        g = n('rxPX'),
        k = Object(g.a)().propsFromState(function () {
          return { language: _.o }
        }),
        w = n('3XMw'),
        O = n.n(w),
        E = n('fs1G'),
        C = n('rHpw'),
        S = n('BLtI'),
        x = n('MWbm')
      function I(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function P(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? I(Object(n), !0).forEach(function (t) {
                b()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : I(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
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
            a = h()(e)
          if (t) {
            var r = h()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return p()(this, n)
        }
      }
      var R = 'Twitter',
        D = O.a.ea1c87a5({ mention: R }),
        T = {
          text: D,
          created_at: new Date(Date.now() - 6e5).toString(),
          id: 20,
          id_str: '20',
          display_text_range: [0, D.length - 1],
          entities: {
            user_mentions: [
              {
                id_str: '783214',
                name: 'Twitter',
                screen_name: 'Twitter',
                text: R,
                indices: [D.indexOf('@'), D.indexOf('@') + R.length + 1],
              },
            ],
          },
          user: {
            id: 783214,
            id_str: '783214',
            name: 'Twitter',
            screen_name: 'Twitter',
            profile_image_url_https: 'https://pbs.twimg.com/profile_images/1013798240683266048/zRim1x6M_normal.jpg',
            verified: !0,
          },
        },
        A = (function (e) {
          u()(n, e)
          var t = j(n)
          function n(e) {
            var a
            r()(this, n),
              (a = t.call(this, e)),
              b()(c()(a), '_handleTweetAction', function (e) {
                e && e.preventDefault && e.preventDefault()
              })
            var o = a.props,
              i = o.language,
              s = o.tweet
            return (a._tweet = P(P(P({}, T), s), {}, { lang: i || 'en' })), a
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.withTweetBorder
                  return y.a.createElement(
                    x.a,
                    { accessibilityHidden: !0, style: e && F.tweetBorder },
                    y.a.createElement(S.b, {
                      enableKeyboardShortcuts: !1,
                      onAnalyticsClick: E.a,
                      onAvatarClick: this._handleTweetAction,
                      onEntityClick: this._handleTweetAction,
                      onMediaClick: this._handleTweetAction,
                      onReplyContextClick: this._handleTweetAction,
                      tweet: this._tweet,
                      withActions: !1,
                      withAvatarLink: !1,
                      withTimestampLink: !1,
                      withUserHoverCard: !1,
                    }),
                    y.a.createElement(x.a, { style: C.a.absoluteFill }),
                  )
                },
              },
            ]),
            n
          )
        })(y.a.Component)
      b()(A, 'defaultProps', { tweet: T, withTweetBorder: !1 })
      var F = C.a.create(function (e) {
          return {
            tweetBorder: {
              borderStyle: 'solid',
              borderWidth: e.borderWidths.small,
              borderColor: e.colors.borderColor,
              borderRadius: e.borderRadii.xLarge,
              outlineStyle: 'none',
            },
          }
        }),
        B = k(A)
      t.a = B
    },
    LXAX: function (e, t, n) {
      'use strict'
      n.d(t, 'c', function () {
        return f
      }),
        n.d(t, 'b', function () {
          return h
        }),
        n.d(t, 'a', function () {
          return m
        })
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var a = n('KEM+'),
        r = n.n(a),
        o = (n('yH/f'), n('oEOe')),
        i = n('Ssj5')
      function s(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? s(Object(n), !0).forEach(function (t) {
                r()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var l = 'settings/usernames',
        u = 'rweb/settings/usernames/CLEAR_USERNAME_AVAILABILITY',
        d = Object.freeze({
          REQUEST: 'rweb/settings/usernames/FETCH_USERNAMES_REQUEST',
          SUCCESS: 'rweb/settings/usernames/FETCH_USERNAMES_SUCCESS',
          FAILURE: 'rweb/settings/usernames/FETCH_USERNAMES_FAILURE',
        }),
        p = { isLoaded: !1 }
      var f = function (e) {
          return e[l]
        },
        h = function (e) {
          return function (t, n, a) {
            var r = a.api
            return Object(o.b)(t, { params: e, request: r.Settings.usernameAvailable })({
              actionTypes: d,
              context: 'FETCH_SETTINGS_USERNAME_AVAILABLE',
              meta: { username: e.username },
            })
          }
        },
        m = function (e) {
          return { type: u, meta: e }
        }
      i.a.register(
        r()({}, l, function () {
          var e,
            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p,
            n = arguments.length > 1 ? arguments[1] : void 0
          switch (n.type) {
            case d.REQUEST:
              return c(c({}, t), {}, { isLoading: !0 })
            case d.FAILURE:
              return c(c({}, t), {}, { isLoading: !1 })
            case d.SUCCESS:
              return c(c(c({}, t), n.payload), {}, { username: n.meta.username, isLoading: !1 })
            case u:
              return {
                isLoading: !1,
                suggestions: null !== (e = n.meta) && void 0 !== e && e.persistSuggestions ? t.suggestions : void 0,
              }
            default:
              return t
          }
        }),
      )
    },
    Lam0: function (e, t, n) {
      'use strict'
      ;(function (e) {
        n.d(t, 'a', function () {
          return R
        })
        n('OZaJ')
        var a = n('VrFO'),
          r = n.n(a),
          o = n('Y9Ll'),
          i = n.n(o),
          s = n('1Pcy'),
          c = n.n(s),
          l = n('5Yy7'),
          u = n.n(l),
          d = n('N+ot'),
          p = n.n(d),
          f = n('AuHH'),
          h = n.n(f),
          m = n('KEM+'),
          b = n.n(m),
          v = n('ERkP'),
          y = n.n(v),
          _ = n('t+RT'),
          g = n('MWbm'),
          k = n('t62R'),
          w = n('/yvb'),
          O = n('rHpw'),
          E = n('3XMw'),
          C = n.n(E)
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
              a = h()(e)
            if (t) {
              var r = h()(this).constructor
              n = Reflect.construct(a, arguments, r)
            } else n = a.apply(this, arguments)
            return p()(this, n)
          }
        }
        var x = C.a.c1df579e,
          I = C.a.b60eba9e,
          P = C.a.ba939777,
          j = C.a.bc6efc72,
          R = (function (t) {
            u()(a, t)
            var n = S(a)
            function a(t, o) {
              var i
              return (
                r()(this, a),
                (i = n.call(this, t, o)),
                b()(c()(i), '_handlePass', function (e) {
                  var t = i.props.onChange
                  t &&
                    setTimeout(function () {
                      return t(e)
                    }, 1e3)
                }),
                b()(c()(i), '_handleConsent', function () {
                  var e = i.props.onConsent
                  i.setState({ termsAccepted: !0 }), e && e()
                }),
                (i.state = { termsAccepted: !1 }),
                (e.recaptchaOptions = { useRecaptchaNet: !0 }),
                i
              )
            }
            return (
              i()(a, [
                {
                  key: '_renderConsentForm',
                  value: function () {
                    var e = this.props.nextButtonDisabled
                    return y.a.createElement(
                      g.a,
                      null,
                      y.a.createElement(k.b, { style: D.guideCopy }, I),
                      y.a.createElement(
                        g.a,
                        { style: D.button },
                        y.a.createElement(
                          w.a,
                          { disabled: e, onPress: this._handleConsent, size: 'xLarge', type: 'brandOutlined' },
                          x,
                        ),
                      ),
                      y.a.createElement(
                        k.b,
                        { color: 'gray700' },
                        y.a.createElement(
                          C.a.I18NFormatMessage,
                          { $i18n: 'hc37d3ba' },
                          y.a.createElement(k.b, { link: 'https://policies.google.com/privacy' }, j),
                        ),
                      ),
                    )
                  },
                },
                {
                  key: '_renderRecaptcha',
                  value: function () {
                    var e = this.props.withConsentForm
                    return y.a.createElement(
                      y.a.Fragment,
                      null,
                      e
                        ? y.a.createElement(
                            g.a,
                            { style: D.recaptchaTitle },
                            y.a.createElement(k.b, { style: D.guideCopy }, P),
                          )
                        : null,
                      y.a.createElement(
                        g.a,
                        { style: D.container },
                        y.a.createElement(_.a, {
                          onChange: this._handlePass,
                          sitekey: '6LfOP30UAAAAAFBC4jbzu890rTdXBXBNHx9eVZEX',
                        }),
                      ),
                    )
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var e = this.props.withConsentForm,
                      t = this.state.termsAccepted
                    return e && !t ? this._renderConsentForm() : this._renderRecaptcha()
                  },
                },
              ]),
              a
            )
          })(y.a.Component),
          D = O.a.create(function (e) {
            return {
              container: { margin: 'auto', transitionProperty: 'opacity', transitionDelay: '2s' },
              button: { paddingVertical: e.spaces.space20 },
              guideCopy: { paddingTop: e.spaces.space12 },
              recaptchaTitle: { paddingBottom: e.spaces.space20 },
            }
          })
      }.call(this, n('yLpj')))
    },
    'Mbn/': function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var a = n('KEM+'),
        r = n.n(a),
        o = n('ERkP'),
        i = n.n(o),
        s = n('Lsrn'),
        c = n('k/Ka')
      function l(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                r()(e, t, n[t])
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
        return Object(c.a)(
          'svg',
          u(
            u({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [s.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          i.a.createElement(
            'g',
            null,
            i.a.createElement('path', {
              d: 'M3.5 5.25H2c-.414 0-.75.336-.75.75s.336.75.75.75h1.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm18.5 12H7.5c-.414 0-.75-.337-.75-.75V2c0-.414-.336-.75-.75-.75s-.75.336-.75.75v14.5c0 1.24 1.01 2.25 2.25 2.25H22c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm-4 2.5c-.414 0-.75.336-.75.75V22c0 .414.336.75.75.75s.75-.336.75-.75v-1.5c0-.414-.336-.75-.75-.75z',
            }),
            i.a.createElement('path', {
              d: 'M8.5 6.75h8c.414 0 .75.337.75.75v8c0 .414.336.75.75.75s.75-.336.75-.75v-8c0-1.24-1.01-2.25-2.25-2.25h-8c-.414 0-.75.336-.75.75s.336.75.75.75z',
            }),
          ),
        )
      }
      ;(d.metadata = { width: 24, height: 24 }), (t.a = d)
    },
    'N+xe': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'VerificationLanding', function () {
          return H
        })
      n('OZaJ')
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        s = n('1Pcy'),
        c = n.n(s),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('N+ot'),
        p = n.n(d),
        f = n('AuHH'),
        h = n.n(f),
        m = n('KEM+'),
        b = n.n(m),
        v = (n('MvUL'), n('KqXw'), n('ERkP')),
        y = n.n(v),
        _ = n('9D1O'),
        g = n('hqKg'),
        k = n('Hw0q'),
        w = n('oEGd'),
        O = Object(k.b)('user_identifier'),
        E = Object(k.b)('phone'),
        C = Object(k.b)('email'),
        S = Object(k.b)('pin_code'),
        x = Object(g.createSelector)(C, O, E, S, function (e, t, n, a) {
          return { email: e, identifier: t, phone: n, pinCode: a }
        }),
        I = { verificationLink: _.A },
        P = Object(w.g)(x, I),
        j = n('kGix'),
        R = n('v//M'),
        D = n('3XMw'),
        T = n.n(D),
        A = n('fs1G'),
        F = n('mCZD'),
        B = n('MWbm'),
        N = n('cmUU'),
        L = n('rHpw')
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
            a = h()(e)
          if (t) {
            var r = h()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return p()(this, n)
        }
      }
      var V = T.a.b5474bd2,
        U = T.a.a9b8fb38,
        z = T.a.j24c37b2,
        H = (function (e) {
          u()(n, e)
          var t = M(n)
          function n(e) {
            var a
            return (
              r()(this, n),
              (a = t.call(this, e)),
              b()(c()(a), '_render', function () {
                return y.a.createElement(N.a, {
                  actionLabel: z,
                  headline: a.state.title || '',
                  onAction: a._handleCloseWindow,
                  onClose: a._handleCloseWindow,
                  subtext: a.state.message || '',
                  withCloseButton: !1,
                })
              }),
              b()(c()(a), '_handleCloseWindow', function () {
                window && window.close(), a.props.history.replace('/')
              }),
              (a.state = { title: void 0, message: void 0, fetchStatus: j.a.LOADING }),
              a
            )
          }
          return (
            i()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.email,
                    a = t.history,
                    r = t.identifier,
                    o = t.location,
                    i = t.phone,
                    s = t.pinCode,
                    c = t.verificationLink
                  return (
                    a.replace(o.pathname),
                    c({ user_identifier: r, email: n, phone: i, pin_code: s })
                      .then(function (t) {
                        return e.setState({
                          fetchStatus: t.success ? j.a.LOADED : j.a.FAILED,
                          title: t.title,
                          message: t.message,
                        })
                      })
                      .catch(function () {
                        return e.setState({ title: V, message: U, fetchStatus: j.a.FAILED })
                      })
                  )
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props.history
                  return y.a.createElement(
                    F.a,
                    { hideLogo: !0, history: e },
                    y.a.createElement(
                      B.a,
                      { style: W.root },
                      y.a.createElement(R.a, {
                        fetchStatus: this.state.fetchStatus,
                        onRequestRetry: A.a,
                        render: this._render,
                        renderFailure: this._render,
                        retryable: !1,
                      }),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(y.a.Component),
        W = L.a.create(function (e) {
          return { root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 } }
        })
      t.default = P(H)
    },
    P68U: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'MediaPickerWithPreview', function () {
          return C
        })
      n('OZaJ')
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        s = n('1Pcy'),
        c = n.n(s),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('N+ot'),
        p = n.n(d),
        f = n('AuHH'),
        h = n.n(f),
        m = n('KEM+'),
        b = n.n(m),
        v = (n('2G9S'), n('hCOa'), n('87if'), n('hBpG'), n('jQ3i'), n('x4t0'), n('z84I'), n('ERkP')),
        y = n.n(v),
        _ = n('AspN'),
        g = n('rxPX'),
        k = Object(g.a)().propsFromActions(function () {
          return { addMedia: _.b, processMultipleMedia: _.g }
        }),
        w = n('2Daw'),
        O = n('VPdC')
      function E(e) {
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
            a = h()(e)
          if (t) {
            var r = h()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return p()(this, n)
        }
      }
      var C = (function (e) {
        u()(n, e)
        var t = E(n)
        function n() {
          var e
          r()(this, n)
          for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
          return (
            (e = t.call.apply(t, [this].concat(o))),
            b()(c()(e), '_handleAddMediaFiles', function (t) {
              var n = e.props,
                a = n.addMedia,
                r = n.location,
                o = n.onChange,
                i = n.onFailure,
                s = n.processMultipleMedia,
                c = e._getAcceptedFileInputs(),
                l = Array.from(t).find(function (e) {
                  return c.includes(e.type)
                })
              l &&
                a([l], { location: r }).then(function (e) {
                  o &&
                    o(
                      e.map(function (e) {
                        return e.id
                      }),
                    ),
                    s(e, { onFailure: i })
                })
            }),
            b()(c()(e), '_getAcceptedFileInputs', function () {
              var t = e.props,
                n = t.acceptGifs,
                a = t.acceptVideo
              return Object(O.b)({ acceptGifs: n, acceptVideo: a })
            }),
            e
          )
        }
        return (
          i()(n, [
            {
              key: 'render',
              value: function () {
                var e = this.props,
                  t = e.acceptGifs,
                  n = e.acceptVideo,
                  a = e.accessibilityLabel,
                  r = e.aspectRatio,
                  o = e.borderRadius,
                  i = e.currentContent,
                  s = e.maskStyle,
                  c = e.mediaItem,
                  l = e.onCrop,
                  u = e.onRemove,
                  d = e.rootStyle
                return y.a.createElement(w.a, {
                  acceptGifs: t,
                  acceptVideo: n,
                  accessibilityLabel: a,
                  aspectRatio: r,
                  borderRadius: o,
                  currentContent: i,
                  maskStyle: s,
                  mediaItem: c,
                  onAddMediaFiles: this._handleAddMediaFiles,
                  onCrop: l,
                  onRemove: u,
                  rootStyle: d,
                  withDragDrop: !0,
                })
              },
            },
          ]),
          n
        )
      })(y.a.Component)
      b()(C, 'defaultProps', { acceptGifs: !1, acceptVideo: !1 })
      var S = k(C)
      t.default = S
    },
    P7wY: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      }),
        n.d(t, 'b', function () {
          return o
        })
      var a = function (e, t, n) {
          var a = new Date(),
            r = a.getFullYear() - e,
            o = a.getMonth() + 1 - t
          if (o < 0) r -= 1
          else if (0 === o) {
            a.getDate() - n < 0 && (r -= 1)
          }
          return r
        },
        r = function (e, t, n) {
          return !!(e && t && n) && a(e, t, n) < 18
        },
        o = function () {
          return new Date().getFullYear() - 120
        }
    },
    RjwM: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var a = n('KEM+'),
        r = n.n(a),
        o = n('ERkP'),
        i = n.n(o),
        s = n('Lsrn'),
        c = n('k/Ka')
      function l(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                r()(e, t, n[t])
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
        return Object(c.a)(
          'svg',
          u(
            u({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [s.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          i.a.createElement(
            'g',
            null,
            i.a.createElement('path', {
              d: 'M18.707 13.293c-.39-.39-1.023-.39-1.414 0L13 17.586V5c0-.553-.447-1-1-1s-1 .447-1 1v12.586l-4.293-4.293c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293l6-6c.39-.39.39-1.023 0-1.414z',
            }),
          ),
        )
      }
      ;(d.metadata = { width: 24, height: 24 }), (t.a = d)
    },
    Rqga: function (e, t, n) {
      var a = n('ax0f'),
        r = Math.log,
        o = Math.LN2
      a(
        { target: 'Math', stat: !0 },
        {
          log2: function (e) {
            return r(e) / o
          },
        },
      )
    },
    S8sr: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return F
      })
      n('OZaJ'), n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        s = n('1Pcy'),
        c = n.n(s),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('N+ot'),
        p = n.n(d),
        f = n('AuHH'),
        h = n.n(f),
        m = n('KEM+'),
        b = n.n(m),
        v = (n('Blm6'), n('Ysgh'), n('KqXw'), n('z84I'), n('jQ3i'), n('x4t0'), n('ERkP')),
        y = n.n(v),
        _ = n('nS1w'),
        g = n('t62R'),
        k = n('p+r5'),
        w = n('3XMw'),
        O = n.n(w),
        E = n('6XNv'),
        C = n('rHpw'),
        S = n('aITJ'),
        x = n('MWbm')
      function I(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function P(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? I(Object(n), !0).forEach(function (t) {
                b()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : I(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
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
            a = h()(e)
          if (t) {
            var r = h()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return p()(this, n)
        }
      }
      var R = O.a.jf83d091,
        D = O.a.af4abf2f,
        T = O.a.b871f28f,
        A = 1,
        F = (function (e) {
          u()(n, e)
          var t = j(n)
          function n(e) {
            var a
            r()(this, n),
              (a = t.call(this, e)),
              b()(c()(a), '_handleSelectorChange', function (e, t) {
                var n = a.props,
                  r = P(P({}, { day: n.day, month: n.month, year: n.year }), {}, b()({}, e, parseInt(t, 10)))
                a.props.onChange(r)
              }),
              b()(c()(a), '_handleDayChange', function (e) {
                a._handleSelectorChange('day', e)
              }),
              b()(c()(a), '_handleMonthChange', function (e) {
                a._handleSelectorChange('month', e)
              }),
              b()(c()(a), '_handleYearChange', function (e) {
                a._handleSelectorChange('year', e)
              }),
              b()(c()(a), '_handleDateChange', function (e) {
                var t = e.target.value.split('-'),
                  n = { year: parseInt(t[0], 10), month: parseInt(t[1], 10), day: parseInt(t[2], 10) }
                a.props.onChange(n)
              })
            var o = e.day,
              i = e.maxSelectableYear,
              s = e.minSelectableYear,
              l = e.month,
              u = e.year
            return (
              (a._errorID = 'DATE_INPUT_'.concat(A, '_ERROR')),
              (a._monthOptions = _.c()),
              (a._nativeDefaultValue = _.e(o, l, u)),
              (a._nativeMaxDate = _.e(31, 12, i)),
              (a._nativeMinDate = _.e(1, 1, s)),
              (A += 1),
              a
            )
          }
          return (
            i()(n, [
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t = this.props,
                    n = t.day,
                    a = t.month,
                    r = t.onChange,
                    o = t.year,
                    i = a && a !== e.month,
                    s = o && o !== e.year
                  ;(i || s) &&
                    (_.b(a, o)
                      .map(function (e) {
                        return parseInt(e.value, 10)
                      })
                      .includes(n) ||
                      r({ month: a, year: o, day: void 0 }))
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props.errorMessage
                  return y.a.createElement(
                    x.a,
                    null,
                    S.b.isMobileOS() ? this._renderNativeDateInput() : this._renderSelectors(),
                    e ? y.a.createElement(g.b, { color: 'red500', nativeID: this._errorID }, e) : null,
                  )
                },
              },
              {
                key: '_renderSelectors',
                value: function () {
                  var e = this.props,
                    t = e.day,
                    n = e.month,
                    a = e.year,
                    r = e.errors,
                    o = void 0 === r ? {} : r,
                    i = e.label,
                    s = e.autofocus,
                    c = e.monthSelectorTestID,
                    l = e.daySelectorTestID,
                    u = e.yearSelectorTestID,
                    d = e.style,
                    p = e.minSelectableYear,
                    f = e.maxSelectableYear,
                    h = _.b(n, a),
                    m = _.d(p, f, t, n)
                  return y.a.createElement(
                    x.a,
                    { accessibilityLabel: i, accessibilityRole: 'group', style: [B.selectorsContainer, d] },
                    y.a.createElement(E.a, {
                      accessibilityDescribedBy: o.month ? this._errorID : void 0,
                      autofocus: s,
                      hasError: o.month,
                      label: D,
                      onChange: this._handleMonthChange,
                      options: this._monthOptions,
                      style: B.monthSelector,
                      testID: c,
                      value: n ? ''.concat(n) : '',
                      withEmptyOption: !0,
                    }),
                    y.a.createElement(E.a, {
                      accessibilityDescribedBy: o.day ? this._errorID : void 0,
                      hasError: o.day,
                      label: R,
                      onChange: this._handleDayChange,
                      options: h,
                      style: B.daySelector,
                      testID: l,
                      value: t ? ''.concat(t) : '',
                      withEmptyOption: !0,
                    }),
                    y.a.createElement(E.a, {
                      accessibilityDescribedBy: o.year ? this._errorID : void 0,
                      hasError: o.year,
                      label: T,
                      onChange: this._handleYearChange,
                      options: m,
                      style: B.yearSelector,
                      testID: u,
                      value: a ? ''.concat(a) : '',
                      withEmptyOption: !0,
                    }),
                  )
                },
              },
              {
                key: '_renderNativeDateInput',
                value: function () {
                  var e = this.props.label
                  return y.a.createElement(k.a, {
                    defaultValue: this._nativeDefaultValue,
                    label: e,
                    max: this._nativeMaxDate,
                    min: this._nativeMinDate,
                    name: e,
                    numberOfLines: 1,
                    onChange: this._handleDateChange,
                    style: B.dateInputRoot,
                    type: 'date',
                  })
                },
              },
            ]),
            n
          )
        })(y.a.Component),
        B = C.a.create(function (e) {
          return {
            selectorsContainer: { flexDirection: 'row', marginVertical: e.spaces.space16 },
            monthSelector: { flexGrow: 2, marginRight: e.spaces.space12 },
            daySelector: { flexGrow: 1, marginRight: e.spaces.space12 },
            yearSelector: { flexGrow: 1 },
            dateInputRoot: { paddingHorizontal: 0 },
          }
        })
    },
    T8pk: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var a = n('KEM+'),
        r = n.n(a),
        o = n('ERkP'),
        i = n.n(o),
        s = n('Lsrn'),
        c = n('k/Ka')
      function l(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                r()(e, t, n[t])
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
        return Object(c.a)(
          'svg',
          u(
            u({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [s.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          i.a.createElement(
            'g',
            null,
            i.a.createElement('path', {
              d: 'M19.708 22H4.292C3.028 22 2 20.972 2 19.708V7.375C2 6.11 3.028 5.083 4.292 5.083h2.146C7.633 3.17 9.722 2 12 2c2.277 0 4.367 1.17 5.562 3.083h2.146C20.972 5.083 22 6.11 22 7.375v12.333C22 20.972 20.972 22 19.708 22zM4.292 6.583c-.437 0-.792.355-.792.792v12.333c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V7.375c0-.437-.355-.792-.792-.792h-2.45c-.317.05-.632-.095-.782-.382-.88-1.665-2.594-2.7-4.476-2.7-1.883 0-3.598 1.035-4.476 2.702-.16.302-.502.46-.833.38H4.293z',
            }),
            i.a.createElement('path', {
              d: 'M12 8.167c-2.68 0-4.86 2.18-4.86 4.86s2.18 4.86 4.86 4.86 4.86-2.18 4.86-4.86-2.18-4.86-4.86-4.86zm2 5.583h-1.25V15c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-1.25H10c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h1.25V11c0-.414.336-.75.75-.75s.75.336.75.75v1.25H14c.414 0 .75.336.75.75s-.336.75-.75.75z',
            }),
          ),
        )
      }
      ;(d.metadata = { width: 24, height: 24 }), (t.a = d)
    },
    TEoO: function (e, t, n) {
      'use strict'
      var a = n('m3Bd'),
        r = n.n(a),
        o = n('ERkP'),
        i = n.n(o),
        s = n('5UID'),
        c = n('3GUV'),
        l = n('iBK2'),
        u = i.a.createElement(c.a, null),
        d = function (e) {
          var t = e.accessibilityTitle,
            n = r()(e, ['accessibilityTitle']),
            a = i.a.createElement(l.b, n)
          return t ? i.a.createElement(s.a, { title: t }, a) : a
        }
      ;(d.defaultProps = { footer: u }), (t.a = d)
    },
    TpKd: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return o
      }),
        n.d(t, 'c', function () {
          return i
        }),
        n.d(t, 'b', function () {
          return s
        })
      n('2G9S'), n('Ysgh'), n('KqXw')
      var a = n('mrHL'),
        r = 'external_referer'
      function o(e) {
        return Object(a.d)({ cookieName: r, featureSwitches: e })
      }
      function i(e, t) {
        var n = (t && t.encryptedReferralDetails) || '',
          o = (t && t.encryptedReferer) || '',
          i = t && void 0 !== t.referralType ? ''.concat(t.referralType) : ''
        if (n || o || i) {
          var s = ''.concat(encodeURIComponent(o), '|').concat(i, '|').concat(encodeURIComponent(n))
          Object(a.e)(r, s, {
            cookieOptions: {
              maxAge: 604800,
              encode: function (e) {
                return e
              },
            },
            featureSwitches: e,
          })
        }
      }
      var s = function (e) {
        var t = o(e)
        if (t && t.split('|').length > 1) {
          var n = t.split('|')
          return { encryptedReferer: n[0], referralType: n[1], encryptedReferralDetails: n[2] }
        }
      }
    },
    UnyZ: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      })
      n('yH/f')
      var a = Object.freeze({ Active: 'active', Expand: 'expand', Remove: 'remove' })
    },
    UpKB: function (e, t, n) {
      'use strict'
      n('OZaJ'), n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        s = n('1Pcy'),
        c = n.n(s),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('N+ot'),
        p = n.n(d),
        f = n('AuHH'),
        h = n.n(f),
        m = n('KEM+'),
        b = n.n(m),
        v = (n('2G9S'), n('ho0z'), n('ERkP')),
        y = n.n(v),
        _ = n('/yvb'),
        g = n('hUVV'),
        k = n('3XMw'),
        w = n.n(k),
        O = n('iKTg'),
        E = n('TaB8'),
        C = n('1zbE'),
        S = n('Ukpf'),
        x = n('cnVF'),
        I = n('TnY3'),
        P = n('0+0m'),
        j = n('v6aA'),
        R = n('2qJZ')
      function D(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function T(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? D(Object(n), !0).forEach(function (t) {
                b()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : D(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function A(e) {
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
            a = h()(e)
          if (t) {
            var r = h()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return p()(this, n)
        }
      }
      var F = w.a.ib65b1c6,
        B = w.a.f55cebb7,
        N = w.a.g61ed8a4,
        L = { clientId: P.a, scope: 'name email', usePopup: !0 },
        M = (function (e) {
          u()(n, e)
          var t = A(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              b()(c()(e), 'state', { isScriptLoaded: !1 }),
              b()(
                c()(e),
                '_is3rdPartyIntegrationDisabled',
                Object(E.a)('responsive_web_3rd_party_category_sign_in_with_apple', e.context.featureSwitches),
              ),
              b()(c()(e), '_initAppleIDAuth', function () {
                var t = window.AppleID,
                  n = e.props.fetchSsoInitToken,
                  a = Object(R.c)(e.context.featureSwitches) ? 'https://'.concat(R.b) : 'https://'.concat(R.a)
                t &&
                  n(x.A.Apple).then(function (e) {
                    var n = e.state
                    t.auth.init(T(T({}, L), {}, { redirectURI: a, state: n }))
                  })
              }),
              b()(c()(e), '_handleOnPress', function () {
                var t = window.AppleID,
                  n = e.props,
                  a = n.analytics,
                  r = n.buttonState,
                  o = n.history,
                  i = n.personalizationSettings,
                  s = n.shouldPropagateP13nSettings,
                  c = n.ssoInitTokens,
                  l = i || {},
                  u = l.allowCookieUse,
                  d = l.allowDeviceAccess,
                  p = l.allowPartnerships,
                  f = l.allowPersonalization
                a.scribe({ component: 'apple_sign_in', element: r, action: 'click' }),
                  t.auth
                    .signIn()
                    .then(function (e) {
                      a.scribe({ component: 'apple_sign_in', element: r, action: 'success' })
                      var t = e.user && e.user.name && e.user.name.firstName && e.user.name.lastName
                      o.push({
                        pathname: '/i/flow/single_sign_on',
                        state: {
                          input: {
                            cookie_personalization_settings: s && {
                              allow_cookie_use: !!u,
                              allow_device_personalization: !!d,
                              allow_partnerships: !!p,
                              allow_ads_personalization: !!f,
                            },
                            requested_variant: JSON.stringify({
                              display_name: t && ''.concat(e.user.name.firstName, ' ').concat(e.user.name.lastName),
                              id_token: e.authorization.id_token,
                              provider: x.A.Apple,
                              state: c[x.A.Apple],
                            }),
                          },
                        },
                      })
                    })
                    .catch(function (t) {
                      var n = e.props.addToast
                      t.error !== P.f
                        ? (a.scribe({ component: 'apple_sign_in', element: r, action: 'failure' }), n({ text: N }))
                        : a.scribe({ component: 'apple_sign_in', element: 'auth', action: 'user_closed_popup' })
                    })
              }),
              e
            )
          }
          return (
            i()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this
                  this._is3rdPartyIntegrationDisabled ||
                    S.a.inject({
                      callback: function () {
                        e._initAppleIDAuth(), e.setState({ isScriptLoaded: !0 })
                      },
                      scriptId: 'signInWithAppleJsLibrary',
                      src: 'https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js',
                    })
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.buttonSize,
                    n = e.buttonState,
                    a = e.style,
                    r = this.state.isScriptLoaded,
                    o = n === C.a.SignUp ? F : B
                  return this._is3rdPartyIntegrationDisabled
                    ? null
                    : y.a.createElement(_.a, {
                        backgroundColor: 'white',
                        borderColor: 'gray200',
                        children: o,
                        color: 'gray1100',
                        disabled: !r,
                        icon: y.a.createElement(O.a, null),
                        onPress: this._handleOnPress,
                        size: t,
                        style: a,
                      })
                },
              },
            ]),
            n
          )
        })(y.a.PureComponent)
      b()(M, 'contextType', j.a),
        b()(M, 'defaultProps', { buttonSize: 'xLarge', buttonState: 'signup' }),
        (t.a = Object(I.a)(Object(g.a)(M)))
    },
    'aV/s': function (e, t, n) {
      'use strict'
      n('OZaJ')
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        s = n('1Pcy'),
        c = n.n(s),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('N+ot'),
        p = n.n(d),
        f = n('AuHH'),
        h = n.n(f),
        m = n('KEM+'),
        b = n.n(m),
        v = (n('2G9S'), n('hBvt'), n('uFXj'), n('ERkP')),
        y = n.n(v),
        _ = n('t62R'),
        g = n('3XMw'),
        k = n.n(g),
        w = n('I4+6'),
        O = n('cm6r'),
        E = n('UnyZ'),
        C = n('rHpw'),
        S = n('MWbm'),
        x = n('hOZg'),
        I = n('iY63'),
        P = n('IMYl')
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
            a = h()(e)
          if (t) {
            var r = h()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return p()(this, n)
        }
      }
      var R = { active: k.a.e557ad8d, expand: k.a.e3a58c27, remove: k.a.h517e8d8 },
        D = (function (e) {
          u()(n, e)
          var t = j(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              b()(c()(e), '_handleSecondaryClick', function () {
                var t = e.props.secondaryAction
                t && t.onSecondaryClick()
              }),
              e
            )
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.accessibilityLabel,
                    n = e.avatar,
                    a = e.compact,
                    r = e.disabled,
                    o = e.link,
                    i = e.mode,
                    s = e.onClick,
                    c = e.secondaryAction,
                    l = e.selected,
                    u = e.style,
                    d = e.text,
                    p = this._renderIcon(!0, i),
                    f = c && this._renderIcon(!1, c.mode),
                    h = [T.root, a && T.compact, r && T.disabled, l && T.selected, u],
                    m = [T.content, p && T.withIcon, n && ((a && T.withAvatarImageCompact) || T.withAvatarImage)],
                    b = w.a.generate({
                      backgroundColor: l ? C.a.theme.colors.primary : 'transparent',
                      color: l ? C.a.theme.colors.white : C.a.theme.colors.primary,
                    })
                  return y.a.createElement(
                    S.a,
                    { style: h },
                    y.a.createElement(
                      O.a,
                      {
                        accessibilityLabel: t || (i ? R[i] : ''),
                        disabled: r,
                        interactiveStyles: b,
                        link: o,
                        onPress: s,
                        style: m,
                      },
                      this._renderAvatar(),
                      y.a.createElement(
                        _.b,
                        {
                          color: l ? 'whiteOnColor' : 'normal',
                          numberOfLines: 1,
                          selectable: !1,
                          style: T.text,
                          weight: 'bold',
                        },
                        d,
                      ),
                      p,
                    ),
                    c
                      ? y.a.createElement(
                          O.a,
                          {
                            accessibilityLabel: c.accessibilityLabel || (c.mode ? R[c.mode] : ''),
                            disabled: r || c.disabled,
                            hoverLabel: { label: c.hoverLabel || (c.mode ? R[c.mode] : '') },
                            interactiveStyles: b,
                            onPress: this._handleSecondaryClick,
                            style: T.secondaryControl,
                          },
                          y.a.createElement(S.a, { style: T.secondaryBorder }, f),
                        )
                      : null,
                  )
                },
              },
              {
                key: '_renderIcon',
                value: function () {
                  var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    n = this.props.selected,
                    a = [T.icon, n && T.iconSelected],
                    r = [T.icon]
                  switch (t) {
                    case E.a.Remove:
                      return y.a.createElement(x.a, { style: [T.dismissIcon, e && a] })
                    case E.a.Expand:
                      return y.a.createElement(I.a, { style: e ? a : r })
                    case E.a.Active:
                      return y.a.createElement(P.a, { style: a })
                    default:
                      return null
                  }
                },
              },
              {
                key: '_renderAvatar',
                value: function () {
                  var e = this.props,
                    t = e.avatar,
                    n = e.compact
                  return t
                    ? y.a.createElement(S.a, { style: [T.avatarContainer, n ? T.avatarCompact : T.avatar] }, t)
                    : null
                },
              },
            ]),
            n
          )
        })(y.a.PureComponent)
      b()(D, 'defaultProps', { compact: !1, disabled: !1, selected: !1 })
      var T = C.a.create(function (e) {
        return {
          root: {
            backgroundColor: e.colors.cellBackground,
            borderColor: e.colors.gray200,
            borderRadius: e.borderRadii.infinite,
            borderStyle: 'solid',
            borderWidth: '1px',
            flexDirection: 'row',
            minHeight: e.spaces.space40,
            overflow: 'hidden',
          },
          content: {
            alignItems: 'center',
            flexDirection: 'row',
            flexGrow: 1,
            flexShrink: 1,
            paddingHorizontal: e.spaces.space16,
          },
          text: { width: '100%' },
          compact: { minHeight: e.spaces.space32 },
          disabled: { borderColor: e.colors.gray50 },
          selected: { backgroundColor: e.colors.primary, borderColor: e.colors.primary },
          avatar: { height: e.spaces.space32, width: e.spaces.space32 },
          avatarCompact: { height: e.spaces.space24, width: e.spaces.space24 },
          avatarContainer: { justifyContent: 'center', marginRight: e.spaces.space8 },
          withAvatarImage: { paddingLeft: 'calc('.concat(e.spaces.space2, ' * 2)') },
          withAvatarImageCompact: { paddingLeft: 'calc('.concat(e.spaces.space1, ' * 3)') },
          icon: { color: e.colors.primary, flexShrink: 0, marginLeft: e.spaces.space12 },
          iconSelected: { color: e.colors.whiteOnColor },
          withIcon: { paddingRight: e.spaces.space12 },
          dismissIcon: { color: e.colors.gray300 },
          secondaryControl: { flexShrink: 0, justifyContent: 'center' },
          secondaryBorder: {
            borderLeftColor: e.colors.borderColor,
            borderLeftWidth: e.borderWidths.small,
            paddingHorizontal: e.spaces.space12,
          },
        }
      })
      t.a = D
    },
    doI8: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return l
      })
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var a = n('KEM+'),
        r = n.n(a),
        o = n('WpDa'),
        i = n('ZNT5')
      function s(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? s(Object(n), !0).forEach(function (t) {
                r()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      t.b = function (e) {
        var t = e.endpointParams,
          n = e.endpointUrl,
          a = e.timelineId
        return Object(i.a)({
          timelineId: a,
          getEndpoint: function (e) {
            return e.URT.fetchGeneric
          },
          getEndpointParams: function (e) {
            var a = e.count,
              r = e.cursor
            return c(c({}, t), {}, { cursor: 'string' == typeof r ? r : void 0, count: a, endpointUrl: n })
          },
          context: 'FETCH_TIMELINE',
          perfKey: 'generic',
        })
      }
      var l = function (e) {
        return Object(i.a)({
          timelineId: 'generic-graphql-timeline-'.concat(e),
          getEndpoint: function (e) {
            return e.Graphql.fetchGenericTimelineById
          },
          getEndpointParams: function (t) {
            var n = t.count,
              a = t.cursor
            return { cursor: 'string' == typeof a ? a : void 0, count: n, timelineId: e }
          },
          formatResponse: o.a,
          context: 'FETCH_GENERIC_TIMELINE_GQL',
          perfKey: 'genericGQL',
        })
      }
    },
    fS8x: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        o = (n('OZaJ'), n('VrFO')),
        i = n.n(o),
        s = n('Y9Ll'),
        c = n.n(s),
        l = n('1Pcy'),
        u = n.n(l),
        d = n('5Yy7'),
        p = n.n(d),
        f = n('N+ot'),
        h = n.n(f),
        m = n('AuHH'),
        b = n.n(m),
        v = n('KEM+'),
        y = n.n(v),
        _ = n('/NU0'),
        g = n('rxPX'),
        k = n('AspN'),
        w = function (e, t) {
          return t.media ? t.media : Object(_.a)(t.mediaId) ? Object(k.k)(e, t.mediaId)[0] : void 0
        },
        O = function (e, t) {
          return void 0 !== t.mediaId ? t.mediaId : t.media ? t.media.id : null
        },
        E = Object(g.a)()
          .propsFromState(function () {
            return { media: w, mediaId: O }
          })
          .propsFromActions(function () {
            return { processMedia: k.f, updateMediaUpload: k.o }
          })
          .withAnalytics({ page: 'media', section: 'edit' }),
        C = n('jHSc'),
        S = n('3XMw'),
        x = n.n(S),
        I = n('EeFI'),
        P = 'applyButton',
        j = n('/yvb'),
        R = n('rHpw')
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
            a = b()(e)
          if (t) {
            var r = b()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return h()(this, n)
        }
      }
      var T = x.a.gd80afba,
        A = x.a.a753a87f,
        F = (function (e) {
          p()(n, e)
          var t = D(n)
          function n(e) {
            var a
            return (
              i()(this, n),
              (a = t.call(this, e)),
              y()(u()(a), '_getMedia', function () {
                var e = a.props.media
                return e && e.mediaFile && e.mediaFile.isImage ? e : null
              }),
              y()(u()(a), '_renderAppBarRightControl', function () {
                var e = a.state.isProcessing
                return r.a.createElement(
                  j.a,
                  { disabled: e, onPress: a._handleApplyButtonClick, size: 'small', testID: P, type: 'primaryFilled' },
                  A,
                )
              }),
              y()(u()(a), '_handleBackClick', function () {
                var e = a.props,
                  t = e.analytics,
                  n = e.onCancel
                t.scribe({ action: 'cancel' }), n && n()
              }),
              y()(u()(a), '_handleApplyButtonClick', function () {
                var e = a.props.onCropDone,
                  t = a._cropper.current
                if (t) {
                  var n = a.props,
                    r = n.analytics,
                    o = n.media,
                    i = n.mediaId,
                    s = n.onDone,
                    c = n.processMedia,
                    l = n.updateMediaUpload
                  a.setState({ isProcessing: !0 })
                  var u = t.getCropData(),
                    d = (o || {}).originalMediaFile,
                    p = !d || (0 === u.top && 0 === u.left && u.width === d.width && u.height === d.height)
                  Object(_.a)(i) &&
                    (e
                      ? (e(u), s())
                      : (l({ id: i, cropData: p ? void 0 : u }),
                        c(i).then(function () {
                          a.setState({ isProcessing: !1 }), r.scribe({ action: 'done' }), s()
                        })))
                }
              }),
              (a.state = { isProcessing: !1 }),
              (a._cropper = r.a.createRef()),
              e.media || e.onCancel(),
              a
            )
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.defaultAspectRatio,
                    n = e.history,
                    a = e.title,
                    o = e.withAspectRatioOptions,
                    i = e.withZoomControl,
                    s = this._getMedia()
                  return r.a.createElement(
                    C.b,
                    {
                      backButtonType: 'back',
                      containerStyle: B.root,
                      documentTitle: a || T,
                      history: n,
                      onBackClick: this._handleBackClick,
                      rightControl: this._renderAppBarRightControl(),
                      title: a || T,
                    },
                    r.a.createElement(I.a, {
                      defaultAspectRatio: t,
                      media: s,
                      ref: this._cropper,
                      withAspectRatioOptions: o,
                      withZoomControl: i,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(r.a.Component),
        B = R.a.create(function (e) {
          return { root: { flexShrink: 1, height: 650 } }
        }),
        N = E(F),
        L = n('X8FW'),
        M = R.a.create(function (e) {
          return { modal: { width: 600, maxWidth: '90vw' } }
        })
      t.a = function (e) {
        return r.a.createElement(
          L.b,
          { clickMaskToClose: !1, modalSize: 'fitChildren', style: M.modal },
          r.a.createElement(N, e),
        )
      }
    },
    gPQO: function (e, t, n) {
      'use strict'
      n('OZaJ'), n('1t7P'), n('LW0h'), n('daRM'), n('FtHn')
      var a = n('97Jx'),
        r = n.n(a),
        o = n('VrFO'),
        i = n.n(o),
        s = n('Y9Ll'),
        c = n.n(s),
        l = n('1Pcy'),
        u = n.n(l),
        d = n('5Yy7'),
        p = n.n(d),
        f = n('N+ot'),
        h = n.n(f),
        m = n('AuHH'),
        b = n.n(m),
        v = n('KEM+'),
        y = n.n(v),
        _ =
          (n('+KXO'),
          n('MvUL'),
          n('KqXw'),
          n('hBpG'),
          n('3voH'),
          n('z84I'),
          n('JtPf'),
          n('7x/C'),
          n('jwue'),
          n('+oxZ'),
          n('ERkP')),
        g = n.n(_),
        k = (n('hBvt'), n('q82E')),
        w = (n('ho0z'), n('+/5o')),
        O = n('m3Bd'),
        E = n.n(O),
        C = n('UpKB'),
        S = n('/yvb'),
        x = n('kG2l'),
        I = n('0+0m'),
        P = n('1zbE'),
        j = n('ddV6'),
        R = n.n(j),
        D = (n('Ysgh'), n('MWbm')),
        T = n('t62R'),
        A = n('rHpw')
      function F(e) {
        var t = e.number
        return g.a.createElement(
          D.a,
          { style: B.badge },
          g.a.createElement(T.b, { color: 'buttonWhite', weight: 'bold' }, t),
        )
      }
      var B = A.a.create(function (e) {
          return {
            badge: {
              backgroundColor: e.colors.buttonBlack,
              borderRadius: e.borderRadii.infinite,
              height: e.spaces.space28,
              width: e.spaces.space28,
              marginRight: e.spaces.space20,
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden',
            },
          }
        }),
        N = n('iKTg'),
        L = n('jmcQ'),
        M = n('wz7L'),
        V = n('xrkw'),
        U = n('vMn4'),
        z = n('yZDr'),
        H = n('+1/s'),
        W = n('Lsrn'),
        G = n('k/Ka')
      function K(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function Y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? K(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
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
        return Object(G.a)(
          'svg',
          Y(
            Y({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [W.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          g.a.createElement(
            'g',
            null,
            g.a.createElement('path', {
              d: 'M19.75 22H4.25C3.01 22 2 20.99 2 19.75V4.25C2 3.01 3.01 2 4.25 2h15.5C20.99 2 22 3.01 22 4.25v15.5c0 1.24-1.01 2.25-2.25 2.25zM4.25 3.5c-.413 0-.75.336-.75.75v15.5c0 .413.337.75.75.75h15.5c.413 0 .75-.337.75-.75V4.25c0-.414-.337-.75-.75-.75H4.25z',
            }),
            g.a.createElement('path', {
              d: 'M12 14.496c-1.015 0-2.15-.115-2.898-.97-.623-.712-.828-1.79-.625-3.298.286-2.13 1.603-3.402 3.523-3.402s3.237 1.272 3.523 3.402c.203 1.507-.002 2.586-.625 3.3-.747.853-1.883.968-2.898.968zm0-6.17c-1.45 0-1.908 1.143-2.037 2.102-.14 1.04-.05 1.75.27 2.112.278.32.807.456 1.768.456s1.49-.137 1.77-.456c.317-.362.408-1.073.27-2.112-.132-.96-.59-2.102-2.04-2.102zm6.107 11.794c-.65-2.608-3.16-4.43-6.107-4.43s-5.458 1.82-6.108 4.432c-.107.437-.058.892.14 1.28.132.262.396.412.67.412.113 0 .23-.026.338-.08.37-.19.518-.64.33-1.01-.035-.068-.043-.155-.02-.24.48-1.94 2.394-3.294 4.65-3.294s4.17 1.354 4.652 3.293c.022.092.012.186-.03.256-.21.354-.094.815.263 1.026.12.07.252.105.382.105.256 0 .506-.13.646-.366.245-.412.315-.903.194-1.384z',
            }),
          ),
        )
      }
      X.metadata = { width: 24, height: 24 }
      var q = X,
        Z = n('4BrD'),
        J = n('6s7X'),
        Q = {
          logo_apple: N.a,
          logo_google_g_color: L.a,
          people_stroke: M.a,
          bar_chart: V.a,
          money: U.a,
          sparkle_stroke: z.a,
          topics_stroke: H.a,
          photo_person_stroke: q,
          promoted_pill_stroke: Z.a,
          information_circle: J.a,
        },
        $ = function (e) {
          var t = e.icon,
            n = e.style
          !(t in Q) &&
            t.startsWith('number_') &&
            (Q[t] = (function (e) {
              if (!e.startsWith('number_'))
                return function () {
                  return null
                }
              var t = e.split('number_'),
                n = R()(t, 2)[1]
              return function () {
                return g.a.createElement(F, { number: n })
              }
            })(t))
          var a = Q[t]
          return a ? g.a.createElement(a, { style: n }) : null
        },
        ee = (n('2G9S'), n('KOtZ'), n('M+/F'), n('YlqV'))
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
            a = b()(e)
          if (t) {
            var r = b()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return h()(this, n)
        }
      }
      var ne = function (e) {
          return Object(G.a)('span', e)
        },
        ae = (function (e) {
          p()(n, e)
          var t = te(n)
          function n() {
            var e
            i()(this, n)
            for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++) o[s] = arguments[s]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              y()(u()(e), '_textArray', function () {
                var t = e.props,
                  n = t.color,
                  a = t.entities,
                  o = t.size,
                  i = t.subtaskInputs,
                  s = t.text,
                  c = t.weight
                return (
                  a &&
                  a.reduce(function (t, l, u) {
                    var d,
                      p = l.from_index,
                      f = l.navigation_link,
                      h = l.subtask_data_reference,
                      m = l.to_index,
                      b = a[u - 1] ? a[u - 1].to_index : 0,
                      v = g.a.createElement(
                        T.b,
                        { color: n, key: ''.concat(b, ',').concat(p), size: o, weight: c },
                        s && s.slice(b, p),
                      ),
                      y = ''.concat(p, ',').concat(m)
                    if (f) {
                      var _ = f.link_type === k.m.ChromelessWeb,
                        w = { key: y, size: o, weight: c, withInteractiveStyling: !0 },
                        O =
                          _ && f.url
                            ? { link: { external: !0, pathname: f.url } }
                            : { accessibilityRole: 'button', color: 'link', onClick: e._handleClick(f) }
                      d = g.a.createElement(T.b, r()({}, O, w), s && s.slice(p, m))
                    } else d = h ? g.a.createElement(T.b, { color: n, key: y, size: o, weight: c }, Object(ee.e)(i, h)) : g.a.createElement(T.b, { color: n, key: y, size: o, weight: c }, s && s.slice(p, m))
                    var E = [
                      v,
                      d,
                      u === a.length - 1
                        ? g.a.createElement(T.b, { color: n, key: ''.concat(m), size: o, weight: c }, s && s.slice(m))
                        : null,
                    ].filter(function (e) {
                      return !!e
                    })
                    return t.concat(E)
                  }, [])
                )
              }),
              y()(u()(e), '_handleClick', function (t) {
                return function (n) {
                  n.preventDefault()
                  var a = e.props,
                    r = a.onClick,
                    o = a.onNavigate
                  o ? o(t) : r && r()
                }
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.entities
                  return e && e.length > 0 ? this._renderTextArray() : this._renderText()
                },
              },
              {
                key: '_renderTextArray',
                value: function () {
                  var e = this.props,
                    t = e.align,
                    n = e.style,
                    a = e.testID
                  return g.a.createElement(ne, { align: t, style: n, testID: a }, this._textArray())
                },
              },
              {
                key: '_renderText',
                value: function () {
                  var e = this.props,
                    t = e.align,
                    n = e.color,
                    a = e.size,
                    r = e.style,
                    o = e.testID,
                    i = e.text,
                    s = e.weight
                  return g.a.createElement(T.b, { align: t, color: n, size: a, style: r, testID: o, weight: s }, i)
                },
              },
            ]),
            n
          )
        })(g.a.PureComponent),
        re = n('LbZ7'),
        oe = A.a.create(function (e) {
          return {
            separatorContainer: { width: '100%' },
            separatorColumn: { flex: 1, justifyContent: 'center' },
            separator: {
              width: '100%',
              height: '1px',
              backgroundColor: e.colors.gray200,
              marginTop: e.spaces.space8,
              marginBottom: e.spaces.space8,
            },
            separatorText: { 'flex-basis': 'auto' },
          }
        }),
        ie = function (e) {
          var t = e.label,
            n = e.onNavigate,
            a = e.subtaskInputs
          return t
            ? g.a.createElement(
                re.a,
                { style: oe.separatorContainer, withGutter: !0 },
                g.a.createElement(D.a, { style: oe.separatorColumn }, g.a.createElement(D.a, { style: oe.separator })),
                g.a.createElement(
                  ae,
                  r()({ style: oe.separatorText }, t, { onNavigate: n, size: 'headline2', subtaskInputs: a }),
                ),
                g.a.createElement(D.a, { style: oe.separatorColumn }, g.a.createElement(D.a, { style: oe.separator })),
              )
            : g.a.createElement(D.a, { style: oe.separator })
        },
        se = A.a.create(function (e) {
          return {
            header: { marginBottom: e.spaces.space12 },
            centerText: { textAlign: 'center' },
            contentArea: { marginHorizontal: e.spaces.space32 },
            contentAreaCompact: {
              paddingHorizontal: e.spaces.space32,
              margin: 'auto',
              minWidth: I.b + 64,
              maxWidth: I.b + 64,
            },
            checkboxText: { flexShrink: 1, paddingRight: e.spaces.space12, width: '100%' },
            headline: { marginVertical: e.spaces.space16 },
            option: { marginTop: e.spaces.space12, flexDirection: 'row', justifyContent: 'space-between' },
            primaryButton: { marginTop: e.spaces.space16 },
            subHeader: { marginBottom: e.spaces.space16 },
            formTextInput: { paddingHorizontal: 0 },
            button: { width: '100%', margin: 'auto', marginVertical: e.spaces.space12 },
            ssoButton: { width: I.b, height: e.spaces.space40 },
          }
        }),
        ce = function (e) {
          var t = e.button,
            n = e.displayType,
            a = void 0 === n ? k.b.Default : n,
            o = e.onNavigate,
            i = e.style,
            s = e.subtaskId,
            c = e.subtaskInputs,
            l = E()(e, ['button', 'displayType', 'onNavigate', 'style', 'subtaskId', 'subtaskInputs']),
            u = t.icon,
            d = t.navigation_link,
            p = t.preferred_size,
            f = t.separator,
            h = s === k.q ? P.a.SignUp : P.a.LogIn,
            m = g.a.useCallback(
              function (e) {
                o(d)
              },
              [d, o],
            )
          return g.a.createElement(
            g.a.Fragment,
            null,
            (function () {
              switch (a) {
                case k.b.GoogleSSO:
                  return g.a.createElement(x.a, {
                    buttonSize: p ? Object(ee.b)(p) : 'medium',
                    buttonState: h,
                    displayType: I.e.Button,
                    style: [se.button, se.ssoButton],
                  })
                case k.b.AppleSSO:
                  return g.a.createElement(C.a, {
                    buttonSize: p ? Object(ee.b)(p) : 'medium',
                    buttonState: h,
                    style: [se.button, se.ssoButton],
                  })
                default:
                  return g.a.createElement(
                    S.a,
                    r()({}, l, {
                      icon: u && g.a.createElement($, { icon: u.icon }),
                      onPress: m,
                      size: p ? Object(ee.b)(p) : 'medium',
                      style: [se.button, i],
                      type: t.style ? Object(ee.c)(t.style) : 'brandFilled',
                    }),
                    d.label,
                  )
              }
            })(),
            f ? g.a.createElement(ie, { label: f.label, onNavigate: o, subtaskInputs: c }) : null,
          )
        },
        le = n('TIdA'),
        ue = n('A91F'),
        de = n('IMA+'),
        pe = A.a.create(function (e) {
          return {
            buttonRightAligned: { marginHorizontal: '-'.concat(e.spaces.space8), marginVertical: 0 },
            containerRightAlignedButton: { marginLeft: e.spaces.space20 },
            secondaryTextRightAlignedButton: { flexBasis: 0, flexGrow: 1 },
            subHeaderRightAlignedButton: { flexDirection: 'row', flexWrap: 'wrap' },
            headerImageContainer: { alignItems: 'center' },
          }
        }),
        fe = function (e) {
          var t,
            n,
            a,
            o,
            i,
            s,
            c,
            l,
            u,
            d = e.header,
            p = e.onNavigate,
            f = e.primaryTextProp,
            h = e.primaryTextSize,
            m = e.secondaryTextProp,
            b = e.subtaskInputs,
            v = e.userInfo,
            y = e.withHeaderImage,
            _ =
              (null == d ? void 0 : d.header_button) &&
              !(
                !(t = d.header_button).icon ||
                t.style !== k.d.Text ||
                (null !== (n = t.navigation_link) && void 0 !== n && n.label)
              )
          return (
            d
              ? ((i = d.user),
                (s = d.header_image),
                (a = d.primary_text),
                (o = d.secondary_text),
                (c = 10 * A.a.theme.lineHeightsPx.body),
                (l = s ? (c * s.image.image_info.width) / s.image.image_info.height : 'initial'),
                (u = y && s && 'icon' === s.image_type))
              : ((a = f), (o = m)),
            g.a.createElement(
              D.a,
              { style: u ? pe.headerImageContainer : void 0 },
              y && s
                ? g.a.createElement(
                    D.a,
                    {
                      style: {
                        marginHorizontal:
                          'full_width' === s.image_type || 'full_bleed_top' === s.image_type
                            ? '-'.concat(A.a.theme.spaces.space32)
                            : 'initial',
                        height: u ? c : 'initial',
                        width: u ? l : 'initial',
                      },
                    },
                    g.a.createElement(le.a, {
                      accessibilityLabel: s.image.image_info.alt_text || '',
                      aspectMode: ue.a.exact(s.image.image_info.width / s.image.image_info.height),
                      image: s.image.image_info,
                    }),
                  )
                : null,
              a
                ? g.a.createElement(
                    ae,
                    r()({}, a, {
                      nativeID: w.b,
                      onNavigate: p,
                      size: null != h ? h : 'title4',
                      style: se.headline,
                      subtaskInputs: b,
                      weight: 'bold',
                    }),
                  )
                : null,
              g.a.createElement(
                D.a,
                { style: [se.subHeader, _ && pe.subHeaderRightAlignedButton] },
                g.a.createElement(
                  D.a,
                  { style: _ && pe.secondaryTextRightAlignedButton },
                  o ? g.a.createElement(ae, r()({}, o, { color: 'gray700', onNavigate: p, subtaskInputs: b })) : null,
                ),
                null != d && d.header_button
                  ? g.a.createElement(
                      D.a,
                      { style: _ && pe.containerRightAlignedButton },
                      g.a.createElement(ce, {
                        button: d.header_button,
                        onNavigate: p,
                        style: _ && pe.buttonRightAligned,
                        subtaskInputs: b,
                      }),
                    )
                  : null,
              ),
              i
                ? null != v
                  ? v
                  : g.a.createElement(de.a, {
                      avatarUri: i.profile_image_url_https,
                      displayMode: 'UserCompact',
                      name: i.name,
                      screenName: i.screen_name,
                      userId: i.id_str,
                    })
                : null,
            )
          )
        },
        he = n('mCZD'),
        me = 'ActionListNextButton',
        be = 'ActionListSkipButton',
        ve = n('csss'),
        ye = n('h0NW')
      function _e(e) {
        var t = e.link,
          n = e.onNavigate,
          a = (e.passthroughOcfScreenProps, e.subtaskId),
          r = e.testID,
          o = e.updateFlow,
          i = g.a.useCallback(
            function () {
              o(a, { link: t.link_id }), n(t)
            },
            [t, n, a, o],
          )
        return g.a.createElement(S.a, { onPress: i, testID: r, type: 'primaryFilled' }, t.label)
      }
      function ge(e) {
        var t,
          n,
          a = e.actionItem,
          o = e.link,
          i = e.onNavigate,
          s = e.subtaskId,
          c = e.subtaskInputs,
          l = e.updateFlow,
          u = a.action_data.link_data,
          d = g.a.useCallback(
            function (e) {
              e.preventDefault(), l(s, { link: o.link_id }), i(o)
            },
            [o, i, s, l],
          )
        return g.a.createElement(
          ve.a,
          r()(
            {
              description: g.a.createElement(
                ae,
                r()({}, u.detail_text, { color: 'gray700', size: 'subtext2', subtaskInputs: c }),
              ),
              label: g.a.createElement(
                ae,
                r()({}, u.text, {
                  size: 'headline2',
                  subtaskInputs: c,
                  text:
                    null !== (t = null === (n = u.text) || void 0 === n ? void 0 : n.text) && void 0 !== t
                      ? t
                      : u.link.label,
                }),
              ),
              link: '#',
              onPress: d,
            },
            Oe(a.action_data.link_data.icon),
          ),
        )
      }
      function ke(e) {
        var t = e.actionItem,
          n = e.onNavigate,
          a = e.subtaskInputs
        return g.a.createElement(
          ve.a,
          r()(
            {
              description: g.a.createElement(
                ae,
                r()({}, t.action_data.text_data.detail_text, { color: 'gray700', size: 'subtext2', subtaskInputs: a }),
              ),
              label: g.a.createElement(
                ae,
                r()({}, t.action_data.text_data.text, { onNavigate: n, size: 'headline2', subtaskInputs: a }),
              ),
            },
            Oe(t.action_data.text_data.icon),
          ),
        )
      }
      function we(e) {
        var t = e.actionItems,
          n = e.onNavigate,
          a = e.subtaskInputs,
          o = t.map(function (e) {
            var t,
              o,
              i = 'text' === e.action_type ? e.action_data.text_data : e.action_data.link_data
            return {
              label: g.a.createElement(
                ae,
                r()({}, i.text, {
                  onNavigate: n,
                  subtaskInputs: a,
                  text:
                    'text' === e.action_type
                      ? e.action_data.text_data.text.text
                      : null !== (t = null === (o = e.action_data.link_data.text) || void 0 === o ? void 0 : o.text) &&
                        void 0 !== t
                      ? t
                      : e.action_data.link_data.link.label,
                  weight: 'bold',
                }),
              ),
              description: i.detail_text
                ? g.a.createElement(
                    ae,
                    r()({}, i.detail_text, { color: 'gray700', style: Ee.bulletListDescription, subtaskInputs: a }),
                  )
                : null,
              decoration: i.icon ? g.a.createElement($, { icon: i.icon.icon, style: Ee.bulletIcon }) : null,
            }
          })
        return g.a.createElement(ye.a, { items: o })
      }
      function Oe(e) {
        return {
          thumbnail: e
            ? g.a.createElement(T.b, { size: 'headline2', style: Ee.icon }, g.a.createElement($, { icon: e.icon }))
            : null,
          thumbnailSize: 'medium',
        }
      }
      var Ee = A.a.create(function (e) {
          return {
            icon: { display: 'block', minWidth: e.spaces.space36, marginRight: e.spaces.space20, textAlign: 'center' },
            bulletIcon: {
              height: e.spaces.space24,
              width: e.spaces.space24,
              color: e.colors.text,
              marginRight: e.spaces.space24,
              justifyContent: 'center',
              overflow: 'hidden',
            },
            bulletListDescription: { marginTop: e.spaces.space4 },
          }
        }),
        Ce = function (e) {
          var t,
            n,
            a,
            o = e.onNavigate,
            i = e.passthroughOcfScreenProps,
            s = e.subtask,
            c = s.action_items,
            l = s.header,
            u = s.next_link,
            d = s.skip_link,
            p = s.style,
            f = e.subtaskInputs
          return g.a.createElement(
            he.a,
            r()({}, i, {
              appBarPosition:
                'full_bleed_top' ===
                (null == l || null === (t = l.header_image) || void 0 === t ? void 0 : t.image_type)
                  ? 'absolute'
                  : void 0,
              appBarWithBackground:
                'full_bleed_top' !==
                (null == l || null === (n = l.header_image) || void 0 === n ? void 0 : n.image_type),
              hideLogo:
                'full_bleed_top' ===
                (null == l || null === (a = l.header_image) || void 0 === a ? void 0 : a.image_type),
              rightControl: u
                ? g.a.createElement(_e, r()({}, e, { link: u, testID: me }))
                : d
                ? g.a.createElement(_e, r()({}, e, { link: d, testID: be }))
                : null,
            }),
            g.a.createElement(
              D.a,
              { style: se.contentArea },
              l
                ? g.a.createElement(fe, {
                    header: l,
                    onNavigate: o,
                    primaryTextSize: 'title3',
                    subtaskInputs: f,
                    withHeaderImage: !0,
                  })
                : null,
              p === k.a.BulletList
                ? g.a.createElement(we, r()({}, e, { actionItems: c }))
                : c.map(function (t, n) {
                    return g.a.createElement(
                      D.a,
                      { key: n },
                      'text' === t.action_type
                        ? g.a.createElement(ke, r()({}, e, { actionItem: t }))
                        : g.a.createElement(ge, r()({}, e, { actionItem: t, link: t.action_data.link_data.link })),
                    )
                  }),
            ),
          )
        },
        Se = n('eb3s')
      function xe(e) {
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
            a = b()(e)
          if (t) {
            var r = b()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return h()(this, n)
        }
      }
      var Ie = (function (e) {
          p()(n, e)
          var t = xe(n)
          function n() {
            var e
            i()(this, n)
            for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              y()(u()(e), '_handleConfirm', function () {
                var t = e.props.subtask
                e._handleButtonClick(t.next_link)
              }),
              y()(u()(e), '_handleCancel', function () {
                var t = e.props.subtask.cancel_link
                t && e._handleButtonClick(t)
              }),
              y()(u()(e), '_handleButtonClick', function (t) {
                var n = e.props,
                  a = n.onNavigate,
                  r = n.subtaskId
                ;(0, n.updateFlow)(r, { link: t.link_id }), a(t)
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.onNavigate,
                    n = e.subtask,
                    a = e.subtaskInputs,
                    o = n.primary_text
                      ? g.a.createElement(
                          ae,
                          r()({}, n.primary_text, { nativeID: w.b, onNavigate: t, subtaskInputs: a }),
                        )
                      : void 0,
                    i = n.secondary_text
                      ? g.a.createElement(ae, r()({}, n.secondary_text, { onNavigate: t, subtaskInputs: a }))
                      : void 0,
                    s = n.cancel_link,
                    c = n.next_link,
                    l = s && s.label
                  return g.a.createElement(Se.a, {
                    cancelButtonLabel: l,
                    confirmButtonLabel: c && c.label,
                    headline: o,
                    onCancel: this._handleCancel,
                    onConfirm: this._handleConfirm,
                    onMaskClick: this._handleCancel,
                    text: i,
                    withCancelButton: !!l,
                  })
                },
              },
            ]),
            n
          )
        })(g.a.Component),
        Pe = n('fs1G'),
        je = n('cmUU')
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
            a = b()(e)
          if (t) {
            var r = b()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return h()(this, n)
        }
      }
      var De = (function (e) {
          p()(n, e)
          var t = Re(n)
          function n(e) {
            var a
            return (
              i()(this, n),
              (a = t.call(this, e)),
              y()(u()(a), '_handleCtaClick', function (e) {
                var t = a.props,
                  n = t.onNavigate,
                  r = t.subtaskId
                ;(0, t.updateFlow)(r, { link: e.link_id }), n(e)
              }),
              y()(u()(a), '_handlePrimaryActionClick', function () {
                a.setState({ downloadLinkClicked: !0 }), a._handleCtaClick(a.props.subtask.primary_action_link)
              }),
              y()(u()(a), '_handleSecondaryActionClick', function () {
                var e = a.props.subtask.secondary_action_link
                e && a._handleCtaClick(e)
              }),
              (a.state = { downloadLinkClicked: !1 }),
              a
            )
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.onNavigate,
                    n = e.passthroughOcfScreenProps,
                    a = e.subtask,
                    o = e.subtaskInputs,
                    i = this.state.downloadLinkClicked,
                    s = a.primary_text
                      ? g.a.createElement(
                          ae,
                          r()({}, a.primary_text, { nativeID: w.b, onNavigate: t, subtaskInputs: o }),
                        )
                      : null,
                    c = !i || !a.primary_action_text_after_click,
                    l = (i && a.primary_action_text_after_click) || a.primary_action_link.label,
                    u = a.primary_image_url
                      ? g.a.createElement(le.a, {
                          accessibilityLabel: '',
                          aspectMode: ue.a.exact(1),
                          image: a.primary_image_url || '',
                        })
                      : null,
                    d = a.secondary_text
                      ? g.a.createElement(ae, r()({}, a.secondary_text, { onNavigate: t, subtaskInputs: o }))
                      : null,
                    p = g.a.createElement(D.a, null, u, d)
                  return g.a.createElement(
                    he.a,
                    r()({ hideLogo: !0 }, n),
                    g.a.createElement(je.a, {
                      actionLabel: l || '',
                      actionType: Object(ee.c)(a.primary_action_style),
                      headline: s,
                      onAction: c ? this._handlePrimaryActionClick : Pe.a,
                      onClose: Pe.a,
                      onSecondaryAction: this._handleSecondaryActionClick,
                      secondaryActionLabel: (a.secondary_action_link || {}).label,
                      secondaryActionType: a.secondary_action_style && Object(ee.c)(a.secondary_action_style),
                      subtext: p,
                      withCloseButton: !1,
                    }),
                    this.props.errorDialog,
                  )
                },
              },
            ]),
            n
          )
        })(g.a.Component),
        Te = n('ZS3b'),
        Ae = n('jhWN'),
        Fe = n('jV+4'),
        Be = n('5mJL'),
        Ne = A.a.create(function (e) {
          return {
            userContainerStacked: { alignItems: 'center', marginTop: e.spaces.space8, marginBottom: e.spaces.space16 },
            userAvatarStacked: { marginBottom: e.spaces.space8 },
            userNameStacked: { alignItems: 'center' },
            avatarColumnCentered: { justifyContent: 'center' },
          }
        }),
        Le = function (e) {
          var t = e.displayType,
            n = void 0 === t ? k.C.stacked : t,
            a = e.user,
            o = e.userCaption
          if (!a) return null
          var i = function (e) {
              return g.a.createElement(Ae.a, {
                accessibilityHidden: !0,
                focusable: !1,
                size: 'xxLarge',
                style: e,
                uri: a.profile_image_url_https,
              })
            },
            s = function (t) {
              var n = e.onNavigate,
                i = e.subtaskInputs
              return g.a.createElement(
                g.a.Fragment,
                null,
                g.a.createElement(Fe.a, {
                  isProtected: a.protected,
                  isVerified: a.verified,
                  name: a.name,
                  screenName: o ? void 0 : a.screen_name,
                  withStackedLayout: !0,
                }),
                o ? g.a.createElement(ae, r()({}, o, { color: 'gray700', onNavigate: n, subtaskInputs: i })) : null,
              )
            }
          switch (n) {
            case k.C.stacked:
              return g.a.createElement(
                D.a,
                { style: Ne.userContainerStacked },
                i(Ne.userAvatarStacked),
                s(Ne.userNameStacked),
              )
            case k.C.compact:
              return g.a.createElement(
                Be.a,
                { avatarCell: i(), avatarCellStyle: Ne.avatarColumnCentered, cellStyle: Ne.avatarColumnCentered },
                s(),
              )
            default:
              return null
          }
        },
        Me = 'OCF_CallToAction_Button',
        Ve = n('feu+')
      function Ue(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function ze(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Ue(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Ue(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function He(e) {
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
            a = b()(e)
          if (t) {
            var r = b()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return h()(this, n)
        }
      }
      var We = (function (e) {
          p()(n, e)
          var t = He(n)
          function n() {
            var e
            i()(this, n)
            for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++) o[s] = arguments[s]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              y()(u()(e), '_getCtaButtonProps', function () {
                var t = e.props.subtask,
                  n = t.buttons || [],
                  a = R()(n, 3),
                  r = a[0],
                  o = (r = void 0 === r ? {} : r).navigation_link,
                  i = r.style,
                  s = a[1],
                  c = (s = void 0 === s ? {} : s).navigation_link,
                  l = s.style,
                  u = a[2],
                  d = (u = void 0 === u ? {} : u).navigation_link,
                  p = u.style,
                  f = o || t.primary_action_link,
                  h = i || t.primary_action_style,
                  m = {
                    actionLabel: f.label || '',
                    actionType: h && Object(ee.c)(h),
                    onAction: f && e._handleCtaClick(f),
                  },
                  b = c || t.secondary_action_link,
                  v = l || t.secondary_action_style,
                  y = {
                    secondaryActionLabel: b ? b.label : void 0,
                    secondaryActionType: v && Object(ee.c)(v),
                    onSecondaryAction: b && e._handleCtaClick(b),
                  },
                  _ = {
                    tertiaryActionLabel: (d || {}).label,
                    tertiaryActionType: p && Object(ee.c)(p),
                    onTertiaryAction: d && e._handleCtaClick(d),
                  }
                return ze(ze(ze({}, m), y), _)
              }),
              y()(u()(e), '_getCtaText', function () {
                var t = e.props,
                  n = t.onNavigate,
                  a = t.subtask,
                  o = a.detail_text,
                  i = a.header,
                  s = a.primary_text,
                  c = a.secondary_text,
                  l = t.subtaskInputs
                return {
                  primaryText: g.a.createElement(
                    ae,
                    r()({}, (i && i.primary_text) || s, { nativeID: w.b, onNavigate: n, subtaskInputs: l }),
                  ),
                  secondaryText:
                    i || c
                      ? g.a.createElement(
                          ae,
                          r()({}, (i && i.secondary_text) || c, { onNavigate: n, subtaskInputs: l }),
                        )
                      : null,
                  detailText: o ? g.a.createElement(ae, r()({}, o, { onNavigate: n, subtaskInputs: l })) : null,
                }
              }),
              y()(u()(e), '_handleCtaClick', function (t) {
                return function () {
                  var n = e.props,
                    a = n.onNavigate,
                    r = n.subtaskId
                  ;(0, n.updateFlow)(r, { link: t.link_id }), a(t)
                }
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e,
                    t,
                    n,
                    a = this.props,
                    o = a.onNavigate,
                    i = a.passthroughOcfScreenProps,
                    s = a.subtask,
                    c = a.subtaskInputs,
                    l = i.onBackClick,
                    u = this._getCtaText(),
                    d = u.detailText,
                    p = u.primaryText,
                    f = u.secondaryText,
                    h = s.style === k.f.HalfCover
                  if (s.header_image) {
                    var m = s.header_image.image.image_info,
                      b = { url: m.url, height: m.height, width: m.width }
                    ;(t = function (e) {
                      var t = e.style
                      return g.a.createElement(
                        D.a,
                        { style: t },
                        g.a.createElement(le.a, { accessibilityLabel: m.alt_text || '', image: b }),
                      )
                    }),
                      (n = 'illustration')
                  } else h && (n = 'none')
                  var v = ze(
                    {
                      children: g.a.createElement(Le, {
                        onNavigate: o,
                        subtaskInputs: c,
                        user: null === (e = s.header) || void 0 === e ? void 0 : e.user,
                      }),
                      footer: d,
                      graphic: t,
                      graphicDisplayMode: n,
                      headline: p,
                      onClose: Pe.a,
                      primaryButtonTestID: Me,
                      subtext: f,
                      withCloseButton: !1,
                    },
                    this._getCtaButtonProps(),
                  )
                  return h
                    ? g.a.createElement(Ve.a, r()({}, v, { isFullHeightOnMobile: !1 }))
                    : g.a.createElement(
                        he.a,
                        r()({ hideAppBar: !l, hideLogo: !0 }, i),
                        g.a.createElement(je.a, v),
                        this.props.errorDialog,
                      )
                },
              },
            ]),
            n
          )
        })(g.a.Component),
        Ge = n('rxPX'),
        Ke = n('0KEI'),
        Ye = n('auX9'),
        Xe = n('kGix'),
        qe = Object(Ge.a)()
          .propsFromState(function () {
            return { fetchStatus: Ye.g, multiAccountUsers: Ye.j }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandlerMultiListFetch: Object(Ke.createLocalApiErrorHandlerWithContextFactory)(
                'ACCOUNT_SWITCHER_MULTI_LIST_FETCH',
              ),
              fetchMultiAccountListIfNeeded: Ye.d,
            }
          })
          .adjustStateProps(function (e) {
            var t = e.fetchStatus,
              n = e.multiAccountUsers
            return { fetchStatus: t === Xe.a.NONE ? Xe.a.LOADING : t, multiAccountUsers: n }
          }),
        Ze = n('v//M')
      function Je(e) {
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
            a = b()(e)
          if (t) {
            var r = b()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return h()(this, n)
        }
      }
      var Qe = (function (e) {
        p()(n, e)
        var t = Je(n)
        function n() {
          var e
          i()(this, n)
          for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o]
          return (
            (e = t.call.apply(t, [this].concat(r))),
            y()(u()(e), '_executeSubtaskAction', function () {
              var t = e.props,
                n = t.navigationLink,
                a = t.onError,
                r = t.onNavigate,
                o = t.subtaskAction
              try {
                o()
                  .then(function () {
                    return r(n, !0)
                  })
                  .catch(a)
              } catch (i) {
                a(i)
              }
            }),
            e
          )
        }
        return (
          c()(n, [
            {
              key: 'componentDidMount',
              value: function () {
                this._executeSubtaskAction()
              },
            },
            {
              key: 'componentDidUpdate',
              value: function (e) {
                this.props.subtaskId !== e.subtaskId && this._executeSubtaskAction()
              },
            },
            {
              key: 'render',
              value: function () {
                return null
              },
            },
          ]),
          n
        )
      })(g.a.Component)
      y()(Qe, 'defaultProps', { onError: Pe.a })
      var $e = n('v6aA')
      function et(e) {
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
            a = b()(e)
          if (t) {
            var r = b()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return h()(this, n)
        }
      }
      var tt = (function (e) {
        p()(n, e)
        var t = et(n)
        function n() {
          var e
          i()(this, n)
          for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o]
          return (
            (e = t.call.apply(t, [this].concat(r))),
            y()(u()(e), '_render', function () {
              var t = e.props,
                n = t.multiAccountUsers,
                a = t.onNavigate,
                r = t.subtask,
                o = t.subtaskId,
                i = t.updateFlow,
                s = r.false_link,
                c = r.true_link,
                l = r.user_id,
                u =
                  n.filter(function (e) {
                    return e.user_id === l
                  }).length > 0
              return g.a.createElement(Qe, {
                navigationLink: u ? c : s,
                onNavigate: a,
                subtaskAction: function () {
                  return i(o, { link: u ? c.link_id : s.link_id }), Promise.resolve()
                },
                subtaskId: o,
              })
            }),
            y()(u()(e), '_handleFetch', function () {
              var t = e.props,
                n = t.createLocalApiErrorHandlerMultiListFetch
              ;(0, t.fetchMultiAccountListIfNeeded)().catch(n())
            }),
            e
          )
        }
        return (
          c()(n, [
            {
              key: 'componentDidMount',
              value: function () {
                this.context.loggedInUserId && this._handleFetch()
              },
            },
            {
              key: 'render',
              value: function () {
                var e = this.props.fetchStatus
                return this.context.loggedInUserId
                  ? g.a.createElement(Ze.a, { fetchStatus: e, onRequestRetry: this._handleFetch, render: this._render })
                  : this._render()
              },
            },
          ]),
          n
        )
      })(g.a.PureComponent)
      y()(tt, 'contextType', $e.a)
      var nt = qe(tt),
        at = (n('LJOr'), n('vrRf'), n('jQ3i'), n('x4t0'), n('kFen'), n('qd3W'), n('zrOZ')),
        rt = n('VwDm'),
        ot = 'ChoiceSelectionInput',
        it = 'ChoiceSelectionNextButton',
        st = n('6OUF'),
        ct = n('XiMS'),
        lt = n('hznd'),
        ut = n('fyvP')
      function dt(e) {
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
            a = b()(e)
          if (t) {
            var r = b()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return h()(this, n)
        }
      }
      var pt = (function (e) {
        p()(n, e)
        var t = dt(n)
        function n() {
          var e, a, r
          i()(this, n)
          for (var o = arguments.length, s = new Array(o), c = 0; c < o; c++) s[c] = arguments[c]
          return (
            (r = t.call.apply(t, [this].concat(s))),
            y()(u()(r), 'state', {
              selectedChoices:
                null !==
                  (e =
                    null !==
                      (a = Object(ee.e)(r.props.subtaskInputs, {
                        key: 'selected_choices',
                        subtask_id: r.props.subtaskId,
                      })) && void 0 !== a
                      ? a
                      : r.props.subtask.selected_choices) && void 0 !== e
                  ? e
                  : [],
              prevSubtaskId: r.props.subtaskId,
              searchText: '',
            }),
            y()(u()(r), '_renderRightControl', function () {
              return g.a.createElement(D.a, null, r._renderCancelButton(), r._renderNextButton())
            }),
            y()(u()(r), '_handleCancelButtonClick', function () {
              var e = r.props,
                t = e.onNavigate,
                n = e.subtask.skip_link,
                a = e.subtaskId,
                o = e.updateFlow
              n && (o(a, { link: n.link_id }), t(n))
            }),
            y()(u()(r), '_handleNextButtonClick', function () {
              var e = r.props,
                t = e.onNavigate,
                n = e.subtask.next_link,
                a = e.subtaskId,
                o = e.updateFlow,
                i = r.state.selectedChoices
              n && (o(a, { link: n.link_id, selected_choices: i }), t(n))
            }),
            y()(u()(r), '_handleRadioChange', function (e, t) {
              r.setState({ selectedChoices: [t] })
            }),
            y()(u()(r), '_handleSearchTextChange', function (e) {
              r.setState({ searchText: e.target.value })
            }),
            y()(u()(r), '_handleSearchTextClear', function () {
              r.setState({ searchText: '' })
            }),
            y()(u()(r), '_onCheckboxChange', function (e) {
              return function (t) {
                r._handleMultiSelection(e, t)
              }
            }),
            r
          )
        }
        return (
          c()(
            n,
            [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.onNavigate,
                    n = e.passthroughOcfScreenProps,
                    a = e.subtask,
                    o = a.detail_text,
                    i = a.header,
                    s = a.primary_text,
                    c = a.search,
                    l = a.secondary_text,
                    u = e.subtaskInputs,
                    d = this.state.searchText
                  return g.a.createElement(
                    he.a,
                    r()({}, n, { rightControl: this._renderRightControl() }),
                    g.a.createElement(
                      D.a,
                      { style: se.contentArea },
                      i
                        ? g.a.createElement(fe, {
                            header: i,
                            onNavigate: t,
                            primaryTextProp: i.primary_text,
                            secondaryTextProp: i.secondary_text,
                            subtaskInputs: u,
                          })
                        : g.a.createElement(
                            g.a.Fragment,
                            null,
                            s &&
                              g.a.createElement(
                                ae,
                                r()({ size: 'title4', style: se.headline, weight: 'bold' }, s, {
                                  onNavigate: t,
                                  subtaskInputs: u,
                                }),
                              ),
                            l &&
                              g.a.createElement(ae, r()({ color: 'gray700' }, l, { onNavigate: t, subtaskInputs: u })),
                          ),
                      c &&
                        g.a.createElement(st.a, {
                          Icon: rt.a,
                          autoFocus: c.is_focused,
                          isCompact: !0,
                          onChange: this._handleSearchTextChange,
                          onClear: this._handleSearchTextClear,
                          placeholder: c.hint_text,
                          style: bt.searchBox,
                          testID: ot,
                          value: d,
                          withClearButton: !0,
                        }),
                      g.a.createElement(D.a, { style: bt.choicesContainer }, this._renderChoices()),
                      o && g.a.createElement(ae, r()({}, o, { onNavigate: t, subtaskInputs: u })),
                    ),
                  )
                },
              },
              {
                key: '_renderCheckboxQuestion',
                value: function (e) {
                  var t = this.props,
                    n = t.onNavigate,
                    a = t.subtaskInputs,
                    o = this.state.selectedChoices.indexOf(e.id) > -1
                  return g.a.createElement(
                    D.a,
                    { accessibilityRole: 'label', key: e.id, style: [se.option, bt.checkboxRow, bt.cursor] },
                    g.a.createElement(ae, r()({}, e.text, { onNavigate: n, style: se.checkboxText, subtaskInputs: a })),
                    g.a.createElement(ct.a, { checked: o, onChange: this._onCheckboxChange(e.id) }),
                  )
                },
              },
              {
                key: '_renderCancelButton',
                value: function () {
                  var e,
                    t = this.props.subtask
                  return t.skip_link && t.skip_link.label
                    ? g.a.createElement(
                        S.a,
                        {
                          onPress: this._handleCancelButtonClick,
                          size: 'large',
                          style: bt.skipButton,
                          type: 'primaryText',
                        },
                        null === (e = t.skip_link) || void 0 === e ? void 0 : e.label,
                      )
                    : null
                },
              },
              {
                key: '_renderNextButton',
                value: function () {
                  var e = this.props.subtask,
                    t = this._verifyBothTypesValidity()
                  return e.next_link
                    ? g.a.createElement(
                        S.a,
                        {
                          disabled: !t,
                          onPress: this._handleNextButtonClick,
                          size: 'medium',
                          testID: it,
                          type: 'primaryFilled',
                        },
                        e.next_link.label,
                      )
                    : null
                },
              },
              {
                key: '_renderChoices',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.onNavigate,
                    a = t.subtask,
                    o = t.subtaskInputs,
                    i = a.search,
                    s = a.selection_type,
                    c = a.style,
                    l = (function (e, t) {
                      var n = e.choices,
                        a = e.search,
                        r = e.sections
                      if (a && r && r.length && !t) {
                        var o = r
                          .flatMap(function (e) {
                            return e.item_ids
                          })
                          .filter(function (e) {
                            return 'string' == typeof e
                          })
                        if (o.length) {
                          var i = Object(at.a)(o)
                          return {
                            choices: n.filter(function (e) {
                              return i.has(e.id)
                            }),
                            hasMore: !0,
                          }
                        }
                      }
                      if (a && t)
                        return (function (e, t) {
                          var n = ft(t),
                            a = e.filter(function (e) {
                              return ft(e.text.text).includes(n)
                            })
                          if (a.length > 50) return { choices: a.slice(0, 50), hasMore: !0 }
                          return { choices: a, hasMore: !1 }
                        })(n, t)
                      return { choices: n, hasMore: !1 }
                    })(a, this.state.searchText).choices
                  if (0 === l.length && i)
                    return g.a.createElement(ae, r()({}, i.no_results_text, { onNavigate: n, subtaskInputs: o }))
                  if ('boxed' === c)
                    switch (s) {
                      case 'single_select':
                        return g.a.createElement(
                          D.a,
                          { style: bt.tileContainer },
                          g.a.createElement(lt.a, {
                            name: 'single-choice',
                            onChange: this._handleRadioChange,
                            options: l.map(function (e) {
                              var t = e.id,
                                n = e.subtext
                              return { value: t, label: e.text.text, helpText: null == n ? void 0 : n.text }
                            }),
                            value: this.state.selectedChoices[0],
                          }),
                        )
                      case 'multi_select':
                      default:
                        return null
                    }
                  else
                    switch (s) {
                      case 'multi_select':
                        return g.a.createElement(
                          g.a.Fragment,
                          null,
                          l.map(function (t) {
                            return e._renderCheckboxQuestion(t)
                          }),
                        )
                      case 'single_select':
                        var u = l.map(function (e) {
                          var t = e.id,
                            n = e.subtext
                          return { label: e.text.text, value: t, helpText: null == n ? void 0 : n.text }
                        })
                        return g.a.createElement(
                          g.a.Fragment,
                          null,
                          g.a.createElement(ut.a, {
                            name: 'single-choice',
                            onChange: this._handleRadioChange,
                            options: u,
                            value: this.state.selectedChoices[0],
                          }),
                        )
                      default:
                        return null
                    }
                },
              },
              {
                key: '_verifyBothTypesValidity',
                value: function () {
                  var e = this.props.subtask,
                    t = e.selection_type,
                    n = this.state.selectedChoices
                  if (e && t) {
                    if ('multi_select' === t) return this._verifyMultiChoiceValidity(n)
                    if ('single_select' === t) return 1 === n.length
                  }
                },
              },
              {
                key: '_verifyMultiChoiceValidity',
                value: function (e) {
                  var t = this.props.subtask.next_link_options
                  if (t) {
                    var n = t.max_enable_count,
                      a = t.min_enable_count,
                      r = e.length
                    return !(a && r < a) && !(n && r > n)
                  }
                  return !1
                },
              },
              {
                key: '_handleMultiSelection',
                value: function (e, t) {
                  var n,
                    a = this.state.selectedChoices
                  ;(n =
                    a && a.includes(e)
                      ? a.filter(function (t) {
                          return t !== e
                        })
                      : a.concat([e])),
                    this.setState({ selectedChoices: n })
                },
              },
            ],
            [
              {
                key: 'getDerivedStateFromProps',
                value: function (e, t) {
                  return e.subtaskId !== t.prevSubtaskId ? { selectedChoices: [], prevSubtaskId: e.subtaskId } : null
                },
              },
            ],
          ),
          n
        )
      })(g.a.Component)
      function ft(e) {
        return e.toLowerCase().normalize('NFD')
      }
      var ht,
        mt,
        bt = A.a.create(function (e) {
          return {
            searchBox: { marginBottom: e.spaces.space16 },
            skipButton: { marginBottom: e.spaces.space12 },
            checkboxRow: { justifyContent: 'space-between' },
            choicesContainer: { marginBottom: e.spaces.space16 },
            cursor: { cursor: 'pointer' },
            tileContainer: { marginTop: e.spaces.space12 },
          }
        }),
        vt = (n('WNMA'), n('zh9S')),
        yt = n('9D1O'),
        _t = n('1YZw'),
        gt = n('G6rE'),
        kt = n('oEGd'),
        wt = n('hqKg'),
        Ot = n('RqPI'),
        Et = function (e) {
          return function (t, n) {
            if ('single_sign_on' !== Ct(t, n)) {
              var a = n.location.query[e]
              return Array.isArray(a) ? a[0] : a
            }
          }
        },
        Ct = function (e, t) {
          return t.flowName || t.location.pathname.slice(t.match.path.length)
        },
        St = Et('country_code'),
        xt = Object(wt.createSelector)(
          ((ht = 'input'),
          (mt = {}),
          function (e, t) {
            return (t.location.state && t.location.state[ht]) || mt
          }),
          Et('input_flow_data'),
          ee.k,
        ),
        It = Et('return_path'),
        Pt = Et('is_native'),
        jt = Et('test_country_code'),
        Rt = Et('target_user_id'),
        Dt = Object(wt.createSelector)(
          function (e, t) {
            return Et('overrides')(e, t)
          },
          function (e) {
            return Object(ee.d)(e)
          },
        ),
        Tt = Object(wt.createStructuredSelector)({
          currentSubtask: yt.k,
          previouslySubmittedSubtaskId: yt.q,
          countryCode: St,
          debugOverrides: Dt,
          isNative: Pt,
          testCountryCode: jt,
          flowName: Ct,
          inputFlowData: xt,
          returnPath: It,
          subtasks: yt.w,
          flowToken: yt.n,
          fetchStatus: yt.m,
          previousNavigableSubtaskId: yt.p,
          subtaskInputs: yt.v,
          failureMessage: yt.l,
          shouldAbort: yt.r,
          shouldEndFlow: yt.s,
          startLocation: yt.t,
          submitFailed: yt.u,
          targetUserId: Rt,
          loginReturnPath: Ot.r,
        }),
        At = Object(kt.d)(Tt, function (e) {
          var t = e.ocfModule
          return {
            addToast: _t.b,
            callInteractiveSpinnerPath: yt.a,
            callOnboardingPath: yt.b,
            clearFlow: t.clearFlow,
            createLocalApiErrorHandler: Object(Ke.createLocalApiErrorHandlerWithContextFactory)('OCF_FLOW'),
            removeContacts: yt.j,
            fetchTemporaryPassword: yt.d,
            fetchUsers: gt.e.fetchMany,
            navigateSubtask: yt.h,
            startFlow: t.startFlow,
            submitFlow: t.submitFlow,
            updateFlow: t.updateFlow,
            googleAnalyticsPageView: vt.a,
            googleAnalyticsSendEvent: vt.b,
            scribeAction: vt.c,
            scribePageImpression: vt.d,
            verifyCredentials: Ot.A,
          }
        }),
        Ft = {
          createLocalApiErrorHandler: Object(Ke.createLocalApiErrorHandlerWithContextFactory)('CONTACTS_SYNC'),
          uploadAddressBook: function (e) {
            return function (t, n, a) {
              return a.api.Contacts.uploadAddressBook(e)
            }
          },
        },
        Bt = Object(kt.b)(Ft),
        Nt = n('SrIh'),
        Lt = n('Irs7')
      function Mt(e) {
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
            a = b()(e)
          if (t) {
            var r = b()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return h()(this, n)
        }
      }
      var Vt = (function (e) {
          p()(n, e)
          var t = Mt(n)
          function n() {
            var e
            i()(this, n)
            for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              y()(u()(e), '_handleCtaClick', function (t) {
                var n = e.props,
                  a = n.onNavigate,
                  r = n.subtaskId
                ;(0, n.updateFlow)(r, { link: t.link_id }), a(t)
              }),
              y()(u()(e), '_handlePrimaryActionClick', function () {
                try {
                  window.navigator.contacts
                    .select(['name', 'email', 'tel'], { multiple: !0 })
                    .then(e._handleContactResults)
                } catch (t) {
                  Object(Nt.a)(t), e._handleSecondaryActionClick()
                }
              }),
              y()(u()(e), '_handleContactResults', function (t) {
                var n = e.props,
                  a = n.analytics,
                  r = n.createLocalApiErrorHandler,
                  o = n.uploadAddressBook,
                  i = t.map(function (e) {
                    var t = e.email,
                      n = e.name,
                      a = e.tel
                    return { name: n[0] || '', email_addresses: t, phone_numbers: a }
                  })
                if (0 === i.length) return a.scribeAction('cancel')
                a.scribe({ action: 'success', data: { event_value: i.length } }),
                  o({ contacts: i }).catch(r()),
                  e._handleCtaClick(e.props.subtask.next_link)
              }),
              y()(u()(e), '_handleSecondaryActionClick', function () {
                var t = e.props.subtask.skip_link
                t && e._handleCtaClick(t)
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  ;('contacts' in navigator && 'ContactsManager' in window) || this._handleSecondaryActionClick()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.onNavigate,
                    n = e.passthroughOcfScreenProps,
                    a = e.subtask,
                    o = e.subtaskInputs,
                    i = a.detail_text
                      ? g.a.createElement(ae, r()({}, a.detail_text, { onNavigate: t, subtaskInputs: o }))
                      : null
                  return g.a.createElement(
                    he.a,
                    r()({ hideLogo: !0 }, n),
                    g.a.createElement(je.a, {
                      actionLabel: a.next_link.label || '',
                      footer: i,
                      headline: a.primary_text || '',
                      onAction: this._handlePrimaryActionClick,
                      onClose: Pe.a,
                      onTertiaryAction: this._handleSecondaryActionClick,
                      subtext: '',
                      tertiaryActionLabel: (a.skip_link || {}).label,
                      withCloseButton: !1,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(g.a.Component),
        Ut = Object(Lt.a)(Bt(Vt), { element: 'contacts_sync' }),
        zt = n('6/RC'),
        Ht = Object(wt.createSelector)(
          function (e, t) {
            return Array.isArray(t.location.query.error) ? t.location.query.error[0] : t.location.query.error
          },
          function (e, t) {
            return !!t.location.query.state
          },
          function (e, t) {
            return { importError: e, startImport: t }
          },
        ),
        Wt = {
          createLocalApiErrorHandler: Object(Ke.createLocalApiErrorHandlerWithContextFactory)('EMAIL_CONTACTS_SYNC'),
          importStatus: yt.e,
          scribeAction: vt.c,
          syncContacts: yt.y,
        },
        Gt = Object(kt.g)(Ht, Wt),
        Kt = n('3XMw'),
        Yt = n.n(Kt),
        Xt = n('lUZE'),
        qt = n('8jkQ'),
        Zt = n('0zXz')
      function Jt(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function Qt(e) {
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
            a = b()(e)
          if (t) {
            var r = b()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return h()(this, n)
        }
      }
      var $t = Yt.a.cea71013,
        en = (function (e) {
          p()(n, e)
          var t = Qt(n)
          function n(e) {
            var a
            return (
              i()(this, n),
              (a = t.call(this, e)),
              y()(u()(a), '_startContactImports', function (e) {
                a._scribeOAuthAction('accepted')
                var t = a.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.syncContacts)(e)
                  .then(function (e) {
                    return a._pollImportStatus()
                  })
                  .catch(function (e) {
                    n()(e), a.setState({ importFinished: !0 })
                  })
              }),
              y()(u()(a), '_handlePrimaryActionClick', function () {
                var e = a.props.subtask,
                  t = e.authorization_url
                if (e.open_in_new_tab && zt.canUseDOM) {
                  var n = window.innerWidth,
                    r = 'width=500,height=500,top=0,left='.concat(n - 500, ',toolbar=no,location=yes')
                  window.open(t, 'twitter_oauth', r).focus()
                } else qt.b.navigateTo(t)
              }),
              y()(u()(a), '_handleTertiaryActionClick', function () {
                var e = a.props,
                  t = e.onNavigate,
                  n = e.subtask,
                  r = e.subtaskId,
                  o = e.updateFlow,
                  i = n.skip_link
                o(r, { link: i.link_id }), t(i)
              }),
              y()(u()(a), '_scribeOAuthAction', function (e) {
                ;(0,
                a.props
                  .scribeAction)({ page: 'onboarding', section: 'email_contacts_sync', component: 'oauth_prompt', element: 'permission', action: e })
              }),
              y()(u()(a), '_handleEvent', function (e) {
                if (e.origin === 'https://'.concat(window.location.hostname)) {
                  var t = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var n = null != arguments[t] ? arguments[t] : {}
                      t % 2
                        ? Jt(Object(n), !0).forEach(function (t) {
                            y()(e, t, n[t])
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                        : Jt(Object(n)).forEach(function (t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                          })
                    }
                    return e
                  })(
                    { callback_url: 'https://'.concat(window.location.hostname).concat(window.location.pathname) },
                    e.data,
                  )
                  !t.error && t.state && a._startContactImports(t)
                }
              }),
              y()(u()(a), '_pollImportStatus', function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1
                if (e > 10) a.setState({ importFinished: !0 })
                else {
                  var t = a.props,
                    n = t.createLocalApiErrorHandler,
                    r = t.importStatus
                  a._timer = setTimeout(function () {
                    r()
                      .then(function (t) {
                        switch (t.status) {
                          case k.e.Success:
                            a.setState({ importFinished: !0 })
                            break
                          case k.e.NotFound:
                            a._pollImportStatus(e + 1)
                            break
                          default:
                            a.setState({ importFinished: !0 })
                        }
                      })
                      .catch(function (e) {
                        n()(e), a.setState({ importFinished: !0 })
                      })
                  }, 1e3)
                }
              }),
              (a.state = { importFinished: void 0 }),
              (a._navigating = !1),
              window.addEventListener('message', a._handleEvent, !1),
              a
            )
          }
          return (
            c()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.importError,
                    n = e.location,
                    a = e.onNavigate,
                    r = e.passthroughOcfScreenProps.history,
                    o = e.startImport,
                    i = e.subtask,
                    s = e.subtaskId,
                    c = e.updateFlow
                  this._showLoadingSpinner = o
                  var l = i.decline_link
                  if ('access_denied' === t) this._scribeOAuthAction('declined'), l && (c(s, { link: l.link_id }), a(l))
                  else if (o) {
                    var u = n.query,
                      d = u.error,
                      p = u.state,
                      f = { callback_url: 'https://'.concat(window.location.hostname).concat(n.pathname) }
                    d && 'string' == typeof d && (f.error = d),
                      p && 'string' == typeof p && (f.state = p),
                      r && r.replace(n.pathname),
                      this._startContactImports(f)
                  }
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._timer && clearTimeout(this._timer), window.removeEventListener('message', this._handleEvent, !1)
                },
              },
              {
                key: 'componentDidUpdate',
                value: function () {
                  var e = this.props,
                    t = e.onNavigate,
                    n = e.subtask,
                    a = e.subtaskId,
                    r = e.updateFlow,
                    o = this.state.importFinished,
                    i = n.next_link
                  !this._navigating && o && ((this._navigating = !0), r(a, { link: i.link_id }), t(i))
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.errorDialog,
                    n = e.onNavigate,
                    a = e.passthroughOcfScreenProps,
                    o = e.subtask,
                    i = e.subtaskInputs,
                    s = o.accept_text,
                    c = o.detail_text,
                    l = o.primary_text,
                    u = o.secondary_text,
                    d = o.skip_link,
                    p = g.a.createElement(ae, r()({}, l, { nativeID: w.b, onNavigate: n, subtaskInputs: i })),
                    f = u ? g.a.createElement(ae, r()({}, u, { onNavigate: n, subtaskInputs: i })) : null,
                    h = c ? g.a.createElement(ae, r()({}, c, { onNavigate: n, subtaskInputs: i })) : null
                  return this._showLoadingSpinner
                    ? g.a.createElement(Ze.a, {
                        fetchStatus: Xe.a.LOADING,
                        loadingMessage: $t,
                        onRequestRetry: Pe.a,
                        render: Zt.a,
                        retryable: !1,
                      })
                    : g.a.createElement(
                        he.a,
                        r()({ hideLogo: !0 }, a),
                        g.a.createElement(je.a, {
                          actionLabel: s,
                          footer: h,
                          graphic: Xt.a,
                          graphicStyle: tn.twitterIcon,
                          headline: p,
                          onAction: this._handlePrimaryActionClick,
                          onClose: Pe.a,
                          onTertiaryAction: this._handleTertiaryActionClick,
                          subtext: f,
                          tertiaryActionLabel: d.label,
                          withCloseButton: !1,
                        }),
                        t,
                      )
                },
              },
            ]),
            n
          )
        })(g.a.Component),
        tn = A.a.create(function (e) {
          return { twitterIcon: { color: e.colors.brandColor } }
        }),
        nn = Gt(en),
        an = Object(wt.createSelector)(yt.o, yt.x, function (e, t) {
          return { navigationContext: e, verificationSendFailureMessage: t }
        }),
        rn = {
          createLocalApiErrorHandler: Object(Ke.createLocalApiErrorHandlerWithContextFactory)(
            'OCF_FLOW_EMAIL_VERIFICATION',
          ),
          getVerificationStatus: yt.f,
          verifyIdentifier: yt.B,
        },
        on = Object(kt.g)(an, rn),
        sn = n('p+r5'),
        cn = n('k49u'),
        ln = n('OIs+')
      function un(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function dn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? un(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : un(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var pn = Yt.a.e4ff75a9,
        fn = Yt.a.e4f6bd9e,
        hn = y()({}, ln.a.Offline, pn),
        mn = function (e, t, n) {
          var a,
            r = y()({}, cn.a.AccessDeniedByBouncer, {
              customAction: function (t) {
                Object(Ke.bouncerError)(t, { flow: e })
              },
            })
          if (n)
            a = dn(
              dn({}, r),
              {},
              {
                customErrorHandler: function (a) {
                  var r = R()(a.errors, 1)[0]
                  return (
                    r.code === cn.a.AccessDeniedByBouncer
                      ? Object(Ke.bouncerError)(r, { flow: e })
                      : n(t || (r.code && hn[r.code]) || fn),
                    []
                  )
                },
              },
            )
          else if (t) {
            var o,
              i = { toast: { text: t } }
            a = dn(
              ((o = {}),
              y()(o, cn.a.ValidationFailure, i),
              y()(o, cn.a.OnboardingFlowRetriableFailure, i),
              y()(o, cn.a.OnboardingFlowFailure, i),
              y()(o, 'defaultToast', { text: t }),
              y()(o, 'showToast', !0),
              o),
              r,
            )
          } else {
            var s
            a = dn(
              dn({}, r),
              {},
              ((s = {}),
              y()(s, ln.a.Offline, { toast: { text: hn[ln.a.Offline] } }),
              y()(s, 'defaultToast', { text: fn }),
              y()(s, 'showToast', !0),
              s),
            )
          }
          return a
        }
      function bn(e) {
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
            a = b()(e)
          if (t) {
            var r = b()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return h()(this, n)
        }
      }
      var vn = 'email',
        yn = (function (e) {
          p()(n, e)
          var t = bn(n)
          function n(e) {
            var a
            i()(this, n),
              (a = t.call(this, e)),
              y()(u()(a), '_sendEmailVerificationRequest', function () {
                var e = a.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.onNavigate,
                  r = e.subtask,
                  o = e.subtaskInputs,
                  i = e.verifyIdentifier,
                  s = (r.email && Object(ee.g)(o, r.email)) || void 0,
                  c = (r.name && Object(ee.g)(o, r.name)) || void 0
                return i({ email: s, display_name: c })
                  .then(function (e) {
                    a.setState({ email: s })
                  })
                  .catch(function (e) {
                    var o = a.props,
                      i = o.flowName,
                      s = o.verificationSendFailureMessage
                    t(mn(i, s || fn))(e), n(r.fail_link)
                  })
              }),
              y()(u()(a), '_handleCodeUpdated', function (e) {
                a.setState({ pinCode: e.target.value })
              }),
              y()(u()(a), '_startStatusPolling', function () {
                var e = a.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.getVerificationStatus,
                  r = e.subtask,
                  o = e.subtaskInputs,
                  i = r.email.subtask_data_reference,
                  s = i ? o[i.subtask_id][i.key] : void 0
                a._timer = setTimeout(function () {
                  n({ email: s })
                    .then(function (e) {
                      e.verified
                        ? (a.setState({ pinCode: e.pin_code }), a._clearTimer(), a._handleDoneButtonClick())
                        : (a._clearTimer(), a._startStatusPolling())
                    })
                    .catch(function (e) {
                      t()(e), a._clearTimer(), a._startStatusPolling()
                    })
                }, 1e3)
              }),
              y()(u()(a), '_clearTimer', function () {
                a._timer && clearTimeout(a._timer)
              }),
              y()(u()(a), '_handleDoneButtonClick', function () {
                var e = a.props,
                  t = e.onNavigate,
                  n = e.subtask,
                  r = e.subtaskId,
                  o = e.updateFlow,
                  i = a.state,
                  s = i.email
                o(r, { code: i.pinCode, email: s, link: n.next_link.link_id }), t(n.next_link)
              })
            var r = e.subtaskId,
              o = e.subtaskInputs,
              s = Object(ee.e)(o, { key: vn, subtask_id: r }, '') || ''
            return (a.state = { email: s, pinCode: '' }), a
          }
          return (
            c()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  return (
                    this.props.subtask.verification_status_polling_enabled && this._startStatusPolling(),
                    this._sendEmailVerificationRequest()
                  )
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._clearTimer()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.onNavigate,
                    n = e.passthroughOcfScreenProps,
                    a = e.progressIndication,
                    o = e.subtask,
                    i = e.subtaskInputs,
                    s = g.a.createElement(
                      S.a,
                      {
                        disabled: !this.state.pinCode,
                        onPress: this._handleDoneButtonClick,
                        size: 'large',
                        type: 'primaryFilled',
                      },
                      o.next_link.label,
                    ),
                    c = g.a.createElement(
                      ae,
                      r()({}, o.detail_text, { color: 'link', onNavigate: t, style: _n.detailLink, subtaskInputs: i }),
                    )
                  return g.a.createElement(
                    he.a,
                    r()({}, n, { progressIndication: a, rightControl: s }),
                    g.a.createElement(
                      D.a,
                      null,
                      g.a.createElement(
                        D.a,
                        { style: se.contentArea },
                        o.primary_text &&
                          g.a.createElement(
                            ae,
                            r()({}, o.primary_text, {
                              nativeID: w.b,
                              onNavigate: t,
                              size: 'title4',
                              style: se.headline,
                              subtaskInputs: i,
                              weight: 'bold',
                            }),
                          ),
                        o.secondary_text &&
                          g.a.createElement(
                            ae,
                            r()({}, o.secondary_text, { color: 'gray700', onNavigate: t, subtaskInputs: i }),
                          ),
                        g.a.createElement(sn.a, {
                          autoFocus: !0,
                          helperText: o.detail_text && c,
                          label: o.hint_text,
                          name: 'verfication_code',
                          onChange: this._handleCodeUpdated,
                          style: se.formTextInput,
                          value: this.state.pinCode,
                        }),
                      ),
                    ),
                    this.props.errorDialog,
                  )
                },
              },
            ]),
            n
          )
        })(g.a.Component),
        _n = A.a.create(function (e) {
          return { detailLink: { marginTop: e.spaces.space16 } }
        }),
        gn = on(yn),
        kn = n('mN6z'),
        wn = n('S8sr')
      function On(e) {
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
            a = b()(e)
          if (t) {
            var r = b()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return h()(this, n)
        }
      }
      var En = { day: void 0, month: void 0, year: void 0 },
        Cn = (function (e) {
          p()(n, e)
          var t = On(n)
          function n(e) {
            var a
            i()(this, n),
              (a = t.call(this, e)),
              y()(u()(a), '_handleDateChange', function (e) {
                a.setState({ date: e })
              }),
              y()(u()(a), '_isCompleteDate', function (e) {
                return !!(e && e.year && e.month && e.day)
              }),
              y()(u()(a), '_isDateEmpty', function () {
                var e = a.state.date
                return Object(kn.a)(e, En)
              }),
              y()(u()(a), '_meetsMinYearRequirement', function (e) {
                var t,
                  n,
                  r = a.props.subtask.valid_interval
                return !(
                  null != r &&
                  null !== (t = r.min) &&
                  void 0 !== t &&
                  t.year &&
                  !(e.year && e.year >= (null == r || null === (n = r.min) || void 0 === n ? void 0 : n.year))
                )
              }),
              y()(u()(a), '_meetsMaxYearRequirement', function (e) {
                var t,
                  n,
                  r = a.props.subtask.valid_interval
                return !(
                  null != r &&
                  null !== (t = r.max) &&
                  void 0 !== t &&
                  t.year &&
                  !(e.year && e.year <= (null == r || null === (n = r.max) || void 0 === n ? void 0 : n.year))
                )
              }),
              y()(u()(a), '_isDateValid', function () {
                var e = a.state.date
                return a._isCompleteDate(e) && a._meetsMinYearRequirement(e) && a._meetsMaxYearRequirement(e)
              }),
              y()(u()(a), '_dateErrorMessage', function () {
                var e = a.state.date
                if (a._isCompleteDate(e)) {
                  var t = a.props.subtask,
                    n = t.max_date_error,
                    r = t.min_date_error,
                    o = a._meetsMinYearRequirement(e)
                  return a._meetsMaxYearRequirement(e)
                    ? o || null == r
                      ? void 0
                      : r.text
                    : null == n
                    ? void 0
                    : n.text
                }
              }),
              y()(u()(a), '_handleDoneButtonClick', function () {
                var e = a.props,
                  t = e.onNavigate,
                  n = e.subtask.next_link,
                  r = e.subtaskId,
                  o = e.updateFlow,
                  i = a.state.date
                i && a._isDateValid() && (o(r, { date: i, link: n.link_id }), t(n))
              }),
              y()(u()(a), '_handleSkipButtonClick', function () {
                var e = a.props,
                  t = e.onNavigate,
                  n = e.subtask.skip_link,
                  r = e.subtaskId,
                  o = e.updateFlow
                n && o(r, { link: n.link_id }), n && t(n)
              })
            var r = a.props,
              o = r.subtaskId,
              s = r.subtaskInputs,
              c = Object(ee.e)(s, { key: 'date', subtask_id: o }, void 0) || En
            return (a.state = { date: c }), a
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e,
                    t,
                    n = this.props,
                    a = n.errorDialog,
                    o = n.onNavigate,
                    i = n.passthroughOcfScreenProps,
                    s = n.subtask,
                    c = n.subtaskInputs,
                    l = s.detail_text,
                    u = s.hint_text,
                    d = s.next_link,
                    p = s.selectable_interval,
                    f = s.skip_link,
                    h = this.state.date,
                    m = void 0 === h ? {} : h,
                    b = g.a.createElement(
                      S.a,
                      {
                        disabled: !this._isDateValid(),
                        onPress: this._handleDoneButtonClick,
                        size: 'large',
                        type: 'primaryFilled',
                      },
                      d.label,
                    ),
                    v =
                      f &&
                      g.a.createElement(
                        S.a,
                        { onPress: this._handleSkipButtonClick, size: 'large', type: 'primaryText' },
                        f.label,
                      )
                  return g.a.createElement(
                    he.a,
                    r()({}, i, { rightControl: f && this._isDateEmpty() ? v : b }),
                    g.a.createElement(
                      D.a,
                      { style: [se.contentArea, se.centerText] },
                      g.a.createElement(fe, { header: s.header, onNavigate: o, subtaskInputs: c }),
                      g.a.createElement(wn.a, {
                        autofocus: !0,
                        day: m.day,
                        errorMessage: this._dateErrorMessage(),
                        label: u,
                        maxSelectableYear: null == p || null === (e = p.max) || void 0 === e ? void 0 : e.year,
                        minSelectableYear: null == p || null === (t = p.min) || void 0 === t ? void 0 : t.year,
                        month: m.month,
                        onChange: this._handleDateChange,
                        year: m.year,
                      }),
                      l
                        ? g.a.createElement(ae, r()({}, l, { color: 'gray700', onNavigate: o, subtaskInputs: c }))
                        : null,
                    ),
                    a,
                  )
                },
              },
            ]),
            n
          )
        })(g.a.Component),
        Sn = (n('iKE+'), n('DZ+c'), n('RgK2')),
        xn = n.n(Sn),
        In = n('3zvM'),
        Pn = n('lMB6'),
        jn = n('FgXs')
      function Rn(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function Dn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Rn(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Rn(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var Tn = function (e) {
        return { valid: !0 }
      }
      function An() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.localValidator,
          n = void 0 === t ? Tn : t,
          a = E()(e, ['localValidator']),
          r = Object(In.f)(
            Dn(
              {
                customActions: {
                  clear: {
                    reducer: function (e, t) {
                      return {}
                    },
                  },
                },
              },
              a,
            ),
          )
        ;(r.clear = function () {
          return function (e) {
            return e({ type: r.customActionTypes.clear.SUCCESS })
          }
        }),
          (r.validate = function (e, t) {
            return function (a) {
              var o = n(e, t)
              return o.valid ? a(r.fetchOneIfNeeded(e, t)) : (a(r.add(y()({}, e, o))), Promise.resolve())
            }
          })
        var o = function (e) {
            return r.selectState(e).fetchStatus || xn.a
          },
          i = function (e, t) {
            return Object(jn.a)(t, function (t, n) {
              var a = e[n] || {}
              return Dn(Dn({}, a), {}, { valid: !!a.valid || t === Xe.a.FAILED, isLoading: t === Xe.a.LOADING })
            })
          }
        return (r.selectEntitiesWithFetchStatus = Object(wt.createSelector)(r.selectAll, o, i)), Pn.a.register(r)
      }
      function Fn(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      var Bn = new RegExp('^[a-zA-Z0-9_\\-+\\.!\\&]+@(?:[a-zA-Z0-9\\-_]+\\.)+[a-zA-Z]{2,63}$'),
        Nn = Yt.a.hc72e1fc,
        Ln = An({
          namespace: 'emailValidity',
          fetchOneContext: 'FETCH_EMAIL_VALIDITY',
          fetchOneEndpoint: function (e) {
            return e.Validity.isEmailAvailable
          },
          fetchOneParams: function (e, t) {
            return (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}
                t % 2
                  ? Fn(Object(n), !0).forEach(function (t) {
                      y()(e, t, n[t])
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                  : Fn(Object(n)).forEach(function (t) {
                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
              }
              return e
            })({ email: R()(e, 1)[0] }, t)
          },
          localValidator: function (e) {
            var t = Bn.test(e)
            return { errorMessage: Nn, valid: t }
          },
        }),
        Mn = n('aWzz'),
        Vn =
          (n('tVqn'),
          function (e, t) {
            return t.module.selectEntitiesWithFetchStatus(e)
          }),
        Un = Object(Ge.a)()
          .propsFromState(function () {
            return { validity: Vn }
          })
          .propsFromActions(function (e) {
            var t = e.module
            return {
              clearValidity: t.clear,
              createLocalApiErrorHandler: Object(Ke.createLocalApiErrorHandlerWithContextFactory)(
                'VALIDITY_FIELD_CONTEXT',
              ),
              validate: t.validate,
            }
          }),
        zn = n('VY6S')
      function Hn(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function Wn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Hn(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Hn(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function Gn(e) {
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
            a = b()(e)
          if (t) {
            var r = b()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return h()(this, n)
        }
      }
      var Kn = (function (e) {
        p()(n, e)
        var t = Gn(n)
        function n(e, a) {
          var r
          i()(this, n),
            (r = t.call(this, e, a)),
            y()(u()(r), '_setInputRef', function (e) {
              r._input = e
            }),
            y()(u()(r), '_handleValueChange', function (e) {
              var t = r.props,
                n = t.onChange,
                a = t.validationParams,
                o = e.target.value.trim()
              r._validateDebounced(Wn({ value: o }, a)), r.setState({ value: o }), n && n(e)
            }),
            y()(u()(r), '_getIsValid', function (e, t) {
              return !!(t && e[t] && e[t].valid)
            })
          var o = e.defaultValue || ''
          return (
            (r.state = { value: o, isValid: r._getIsValid(e.validity, o) }),
            (r._validateDebounced = Object(zn.a)(function (e) {
              var t = e.value,
                n = E()(e, ['value'])
              return r.props.validate(t, n).catch(r.props.createLocalApiErrorHandler())
            }, 500)),
            r
          )
        }
        return (
          c()(n, [
            {
              key: 'componentWillUnmount',
              value: function () {
                this.props.clearValidity(), this._validateDebounced.clear(), this.props.onRef(null)
              },
            },
            {
              key: 'componentDidMount',
              value: function () {
                var e = this,
                  t = this.props,
                  n = t.defaultValue,
                  a = t.validationParams
                n && this._validateDebounced(Wn({ value: n }, a)),
                  this.props.onValidityChange(this.state.isValid),
                  this.props.onRef({
                    clear: function () {
                      return e.clear()
                    },
                    focus: function () {
                      return e.focus()
                    },
                    isValid: function () {
                      return e.isValid()
                    },
                    getValue: function () {
                      return e.getValue()
                    },
                  })
              },
            },
            {
              key: 'UNSAFE_componentWillUpdate',
              value: function (e, t) {
                var n = this.props.validity,
                  a = this.state.value
                if (n !== e.validity || a !== t.value) {
                  var r = this._getIsValid(e.validity, t.value)
                  this.state.isValid !== r && this.setState({ isValid: r })
                }
              },
            },
            {
              key: 'componentDidUpdate',
              value: function (e, t) {
                var n = this.state.value,
                  a = t.isValid !== this.state.isValid,
                  r = !Object(kn.a)(e.validationParams, this.props.validationParams)
                a
                  ? this.props.onValidityChange(this.state.isValid)
                  : n &&
                    r &&
                    (this.props.clearValidity(), this._validateDebounced(Wn({ value: n }, this.props.validationParams)))
              },
            },
            {
              key: 'render',
              value: function () {
                var e = this.props,
                  t = e.autoComplete,
                  n = e.autoFocus,
                  a = e.editable,
                  r = e.label,
                  o = e.name,
                  i = e.style,
                  s = e.type,
                  c = e.validity,
                  l = this.state.value,
                  u = l && c[l] ? c[l].errorMessage : ''
                return g.a.createElement(sn.a, {
                  autoComplete: t,
                  autoFocus: n,
                  editable: a,
                  errorText: u,
                  invalid: !!u,
                  label: r,
                  name: o,
                  onChange: this._handleValueChange,
                  ref: this._setInputRef,
                  style: i,
                  type: s,
                  value: this.state.value,
                })
              },
            },
            {
              key: 'clear',
              value: function () {
                this.setState({ value: '', isValid: !1 })
              },
            },
            {
              key: 'isValid',
              value: function () {
                return this.state.isValid
              },
            },
            {
              key: 'getValue',
              value: function () {
                return this.state.value
              },
            },
            {
              key: 'focus',
              value: function () {
                this._input && this._input.focus()
              },
            },
          ]),
          n
        )
      })(g.a.Component)
      y()(Kn, 'defaultProps', { label: '' })
      var Yn = Un(Kn),
        Xn = n('H9wA')
      function qn(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function Zn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? qn(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : qn(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      Zn(
        Zn(
          {},
          {
            autoComplete: Mn.string,
            autoFocus: Mn.bool,
            defaultValue: Mn.string,
            editable: Mn.bool,
            label: Mn.string,
            name: Mn.string.isRequired,
            onChange: Mn.func,
            onRef: Mn.func.isRequired,
            onValidityChange: Mn.func.isRequired,
            style: Xn.a.style,
            type: Mn.string,
          },
        ),
        {},
        {
          clearValidity: Mn.func.isRequired,
          createLocalApiErrorHandler: Mn.func.isRequired,
          module: Mn.object.isRequired,
          validate: Mn.func.isRequired,
          validity: Mn.object.isRequired,
        },
      )
      var Jn = function (e) {
          var t = e.onRef,
            n = E()(e, ['onRef'])
          return g.a.createElement(Yn, r()({ module: Ln, onRef: t, type: 'email' }, n))
        },
        Qn = (n('uFXj'), n('/Dbh'))
      function $n(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      var ea = Yt.a.d5568440,
        ta = An({
          namespace: 'passwordValidity',
          fetchOneContext: 'FETCH_PASSWORD_VALIDITY',
          fetchOneEndpoint: function (e) {
            return e.Validity.fetchPasswordStrength
          },
          fetchOneParams: function (e, t) {
            return (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}
                t % 2
                  ? $n(Object(n), !0).forEach(function (t) {
                      y()(e, t, n[t])
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                  : $n(Object(n)).forEach(function (t) {
                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
              }
              return e
            })({ password: R()(e, 1)[0] }, t)
          },
          localValidator: function (e, t) {
            var n = !(!t || !t.username) && e === t.username,
              a = e.length >= Qn.b,
              r = e.length <= Qn.a,
              o = ea
            return (
              a ? r || (o = Ke.NEW_PASSWORD_LONG) : (o = Ke.NEW_PASSWORD_SHORT),
              { errorMessage: !n && a && r ? void 0 : o, valid: a && r && !n }
            )
          },
        }),
        na = Object(Ge.a)()
          .propsFromState(function () {
            return { validityMap: ta.selectEntitiesWithFetchStatus }
          })
          .propsFromActions(function () {
            return {
              clearPasswordValidity: ta.clear,
              createLocalApiErrorHandler: Object(Ke.createLocalApiErrorHandlerWithContextFactory)(
                'PASSWORD_FIELD_CONTEXT',
              ),
              validator: ta.validate,
            }
          })
          .withAnalytics({ page: 'onboarding', component: 'password_entry' })
      function aa(e) {
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
            a = b()(e)
          if (t) {
            var r = b()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return h()(this, n)
        }
      }
      var ra = Yt.a.dec3c9b8,
        oa = Yt.a.fa69a1ca,
        ia = Yt.a.aacf5085,
        sa = (function (e) {
          p()(n, e)
          var t = aa(n)
          function n(e) {
            var a
            i()(this, n),
              (a = t.call(this, e)),
              y()(u()(a), '_validate', function (e, t) {
                a.props.validator(e, t).catch(a.props.createLocalApiErrorHandler()).then(a._onValidationUpdated(e))
              }),
              y()(u()(a), '_validateDebounced', Object(zn.a)(a._validate, 500)),
              y()(u()(a), '_onValidationUpdated', function (e) {
                return function () {
                  var t = a.props,
                    n = t.analytics,
                    r = t.customValidator,
                    o = t.onPasswordValidated,
                    i = t.validityMap,
                    s = (e && i[e] ? i[e] : {}).valid,
                    c = void 0 !== s && s
                  r && 'string' == typeof e && 0 === e.length && (c = r().valid),
                    a.setState({ valid: c }),
                    n.scribe({ element: 'entered_password', action: c ? 'valid' : 'invalid' }),
                    o(c)
                }
              }),
              y()(u()(a), '_renderFormTextInput', function () {
                var e = a.props,
                  t = e.autoComplete,
                  n = e.autoFocus,
                  r = e.customValidator,
                  o = e.helperText,
                  i = e.label,
                  s = e.onSubmitEditing,
                  c = e.showPasswordVisibilityIcon,
                  l = e.validityMap,
                  u = a.state,
                  d = u.password,
                  p = u.revealed,
                  f = a.state.valid,
                  h = (l[d] || {}).errorMessage,
                  m = void 0 === h ? '' : h
                r && 0 === m.length && ((m = r().errorMessage), (f = r().valid))
                var b = c
                  ? o
                  : g.a.createElement(
                      T.b,
                      {
                        accessibilityRole: 'button',
                        color: 'link',
                        onPress: a._handleVisibilityToggle,
                        style: ca.toggleLink,
                      },
                      p ? ia : oa,
                    )
                return g.a.createElement(sn.a, {
                  autoComplete: t,
                  autoFocus: n,
                  errorText: m,
                  helperText: b,
                  invalid: !f,
                  label: i || ra,
                  name: 'password',
                  onChange: a._handlePasswordUpdated,
                  onSubmitEditing: f ? s : void 0,
                  showPasswordVisibilityIcon: c,
                  style: se.formTextInput,
                  type: p ? 'text' : 'password',
                  value: d,
                })
              }),
              y()(u()(a), '_handleVisibilityToggle', function () {
                a.setState({ revealed: !a.state.revealed })
              }),
              y()(u()(a), '_handlePasswordUpdated', function (e) {
                var t = a.props,
                  n = t.onPasswordChange,
                  r = t.skipPasswordValidation,
                  o = t.userIdentifier,
                  i = e.target.value
                r || a._validateDebounced(i, { username: o }), a.setState({ password: i }), n(i)
              })
            var r = e.defaultValue
            return (a.state = { revealed: !1, password: r || '', valid: !0 }), a
          }
          return (
            c()(n, [
              {
                key: 'componentWillUnmount',
                value: function () {
                  this.props.clearPasswordValidity(), this._validateDebounced.clear()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.style,
                    n = e.userIdentifier
                  return g.a.createElement(
                    D.a,
                    { style: [se.formTextInput, t] },
                    n ? g.a.createElement('input', { name: 'username', type: 'hidden', value: n }) : null,
                    this._renderFormTextInput(),
                  )
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      y()(sa, 'defaultProps', {
        autoComplete: 'on',
        onPasswordChange: Pe.a,
        onPasswordValidated: Pe.a,
        skipPasswordValidation: !1,
      })
      var ca = A.a.create(function (e) {
          return { toggleLink: { marginTop: e.spaces.space4 } }
        }),
        la = na(sa),
        ua = A.a.create(function (e) {
          return { textField: { width: '100%' }, textFieldDetails: { marginBottom: e.spaces.space4 } }
        }),
        da = function (e) {
          var t = e.autoComplete,
            n = e.autoFocus,
            a = void 0 !== n && n,
            o = e.onChange,
            i = e.onNavigate,
            s = e.onSubmitEditing,
            c = e.passwordProps,
            l = e.style,
            u = e.subtaskInputs,
            d = e.textField,
            p = g.a.useCallback(
              function (e) {
                return o(e.target.value)
              },
              [o],
            )
          if (!d) return null
          var f,
            h = d.content_type,
            m = d.detail_text,
            b = d.hint_text,
            v = m
              ? g.a.createElement(
                  ae,
                  r()({}, m, { color: 'gray700', onNavigate: i, style: ua.textFieldDetails, subtaskInputs: u }),
                )
              : null
          return h === k.B.Password || h === k.B.NewPassword
            ? g.a.createElement(
                la,
                r()({}, c, {
                  autoComplete: t || (h === k.B.Password ? 'current-password' : 'new-password'),
                  autoFocus: a,
                  helperText: v,
                  label: b || '',
                  onPasswordChange: o,
                  onPasswordValidated:
                    null !== (f = null == c ? void 0 : c.onPasswordValidated) && void 0 !== f ? f : Pe.a,
                  onSubmitEditing: s,
                  style: [se.formTextInput, ua.textField, l],
                }),
              )
            : g.a.createElement(sn.a, {
                autoComplete: null != t ? t : 'on',
                autoFocus: a,
                helperText: v,
                label: b || '',
                name: 'text',
                onChange: p,
                onSubmitEditing: s,
                style: [se.formTextInput, ua.textField, l],
              })
        }
      function pa(e) {
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
            a = b()(e)
          if (t) {
            var r = b()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return h()(this, n)
        }
      }
      var fa = Yt.a.c52be451,
        ha = Yt.a.cfd2f35d,
        ma = Yt.a.gea6cc19,
        ba = Yt.a.i769e50a,
        va = Yt.a.ec129eb6,
        ya = Yt.a.f1b50489,
        _a = Yt.a.deaf5b15,
        ga = (function (e) {
          p()(n, e)
          var t = pa(n)
          function n() {
            var e
            i()(this, n)
            for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              y()(u()(e), 'state', { showRemoveContactsDialog: !1, disableRemoveContactsButton: !1 }),
              y()(u()(e), '_handleRemoveContactsClick', function () {
                e.setState({ showRemoveContactsDialog: !0 })
              }),
              y()(u()(e), '_handleRemoveContactsConfirm', function () {
                e.setState({ showRemoveContactsDialog: !1 }), e._handleRemoveContacts()
              }),
              y()(u()(e), '_handleRemoveContacts', function () {
                var t = e.props,
                  n = t.addToast,
                  a = t.removeContacts
                a &&
                  a()
                    .then(function () {
                      e.setState({ disableRemoveContactsButton: !0 }), n({ text: va, withClearButton: !0 })
                    })
                    .catch(function () {
                      n({ action: { label: _a, onAction: e._handleRemoveContacts }, text: ya, withAutoDismiss: !0 })
                    })
              }),
              y()(u()(e), '_handleRemoveContactsCancel', function () {
                e.setState({ showRemoveContactsDialog: !1 })
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e,
                    t = this.props,
                    n = t.onNavigate,
                    a = t.removeContactsSetting,
                    o = t.subtaskInputs,
                    i = this.state.disableRemoveContactsButton
                  return g.a.createElement(
                    D.a,
                    null,
                    g.a.createElement(
                      ae,
                      r()({}, a.primary_text, { onNavigate: n, style: ka.header, subtaskInputs: o }),
                    ),
                    g.a.createElement(
                      ae,
                      r()({}, a.secondary_text, {
                        color: 'gray700',
                        onNavigate: n,
                        size: 'subtext2',
                        style: ka.subtext,
                        subtaskInputs: o,
                      }),
                    ),
                    g.a.createElement(
                      D.a,
                      null,
                      null !== (e = a.value_data) && void 0 !== e && e.action_data
                        ? g.a.createElement(
                            S.a,
                            { disabled: i, onPress: this._handleRemoveContactsClick, type: 'destructiveText' },
                            a.value_data.action_data.link.label,
                          )
                        : null,
                      this._maybeRenderRemoveContactsDialog(),
                    ),
                  )
                },
              },
              {
                key: '_maybeRenderRemoveContactsDialog',
                value: function () {
                  return this.state.showRemoveContactsDialog
                    ? g.a.createElement(Se.a, {
                        cancelButtonLabel: ha,
                        confirmButtonLabel: fa,
                        headline: ma,
                        onCancel: this._handleRemoveContactsCancel,
                        onConfirm: this._handleRemoveContactsConfirm,
                        onMaskClick: this._handleRemoveContactsCancel,
                        text: ba,
                      })
                    : null
                },
              },
            ]),
            n
          )
        })(g.a.Component),
        ka = A.a.create(function (e) {
          return {
            header: { marginTop: e.spaces.space12, marginBottom: e.spaces.space12 },
            subtext: { marginBottom: e.spaces.space20 },
          }
        }),
        wa = ga,
        Oa = n('KNZn'),
        Ea = n('LKCq')
      function Ca(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function Sa(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Ca(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Ca(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function xa(e) {
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
            a = b()(e)
          if (t) {
            var r = b()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return h()(this, n)
        }
      }
      var Ia = Yt.a.dd4a83a5,
        Pa = (function (e) {
          p()(n, e)
          var t = xa(n)
          function n(e) {
            var a
            i()(this, n),
              (a = t.call(this, e)),
              y()(u()(a), '_handleActionClick', function () {
                var e,
                  t,
                  n = a.props,
                  r = n.onNavigate,
                  o =
                    null === (e = n.settingValue.value_data) ||
                    void 0 === e ||
                    null === (t = e.action_data) ||
                    void 0 === t
                      ? void 0
                      : t.link
                o && r(o)
              }),
              y()(u()(a), '_handleButtonNavigation', function (e, t) {
                var n = a.props,
                  r = n.onNavigate,
                  o = n.updateFlow
                t === k.t.NextButton && (null == o || o(e)), r && e && r(e)
              }),
              y()(u()(a), '_getSettingValueFromSubtaskInputs', function (e) {
                var t,
                  n,
                  r = a.props,
                  o = r.subtaskId,
                  i = r.subtaskInputs,
                  s = e.value_identifier,
                  c = e.value_type,
                  l = (Object(ee.e)(i, { key: k.s, subtask_id: o }, []) || []).find(function (e) {
                    return e.key === s
                  })
                l &&
                  Object(ee.i)(c) &&
                  (t = null === (n = l.response_data.boolean_data) || void 0 === n ? void 0 : n.result)
                return t
              }),
              y()(u()(a), '_handleSettingGroupClick', function () {
                var e = a.props,
                  t = e.onSettingGroupClick,
                  n = e.settingValue
                t && t(n)
              }),
              y()(u()(a), '_handleSettingToggle', function () {
                var e = a.props,
                  t = e.onSettingToggle,
                  n = e.settingValue,
                  r = n.value_identifier
                r && (a.setState(Sa(Sa({}, a.state), {}, y()({}, r, !a.state[r]))), t && t(n))
              }),
              y()(u()(a), '_handleSettingTextChange', function (e) {
                var t = a.props,
                  n = t.onSettingTextChanged,
                  r = t.settingValue
                null == n || n(r, e)
              }),
              y()(u()(a), '_handleTextFieldOnEditingSubmit', function () {
                var e = a.props,
                  t = e.nextLink,
                  n = e.onNavigate,
                  r = e.updateFlow
                t && (null == r || r(t), n(t))
              }),
              y()(u()(a), '_addToast', function (e) {
                a.props.addToast && a.props.addToast(e)
              }),
              y()(u()(a), '_getButtonDisplayType', function (e) {
                switch (e) {
                  case k.t.GoogleSSOButton:
                    return k.b.GoogleSSO
                  case k.t.AppleSSOButton:
                    return k.b.AppleSSO
                  default:
                    return k.b.Default
                }
              })
            var r = e.settingValue,
              o = r.value_data,
              s = r.value_identifier,
              c = r.value_type
            if (s && Object(ee.i)(c)) {
              var l,
                d = a._getSettingValueFromSubtaskInputs(r)
              if (void 0 === d)
                d = null == o || null === (l = o.boolean_data) || void 0 === l ? void 0 : l.initial_value
              a.state = y()({}, s, d)
            }
            return a
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props.settingValue,
                    n = t.primary_text,
                    a = t.secondary_text,
                    r = t.toggle_wrapper,
                    o = t.value_type,
                    i = function () {
                      switch (o) {
                        case k.u.Action:
                          return e._renderAction()
                        case k.u.Boolean:
                        case k.u.PreciseLocation:
                          return e._renderSettingOption()
                        case k.u.SettingsGroup:
                          return e._renderSettingsGroup()
                        case k.u.StaticText:
                          return e._renderHeader()
                        case k.u.TextField:
                          return e._renderTextField()
                        case k.u.DestructiveAction:
                          return e._renderDestructiveAction()
                        case k.u.Separator:
                          return e._renderSeparator()
                        case k.u.Button:
                          return e._renderButton()
                        case k.u.Tweet:
                          return e._renderTweet()
                        default:
                          return null
                      }
                    }
                  return g.a.createElement(
                    g.a.Fragment,
                    null,
                    (n || a) &&
                      (function () {
                        switch (o) {
                          case k.u.Action:
                          case k.u.TextField:
                          case k.u.DestructiveAction:
                          case k.u.Separator:
                          case k.u.Button:
                          case k.u.Tweet:
                            return e._renderHeader()
                          default:
                            return g.a.createElement(g.a.Fragment, null)
                        }
                      })(),
                    r
                      ? g.a.createElement(
                          D.a,
                          { style: ja.interstitial },
                          g.a.createElement(Ea.a, { label: g.a.createElement(g.a.Fragment, null, Ia) }, i()),
                        )
                      : i(),
                  )
                },
              },
              {
                key: '_renderHeader',
                value: function () {
                  var e = this.props,
                    t = e.onNavigate,
                    n = e.settingValue,
                    a = e.subtaskInputs,
                    o = n.primary_text,
                    i = n.secondary_text
                  return g.a.createElement(
                    D.a,
                    { style: ja.header },
                    o
                      ? g.a.createElement(
                          ae,
                          r()({}, o, { onNavigate: t, size: 'headline1', subtaskInputs: a, weight: 'bold' }),
                        )
                      : null,
                    i
                      ? g.a.createElement(
                          ae,
                          r()({}, i, {
                            color: 'gray700',
                            onNavigate: t,
                            size: 'body',
                            style: ja.secondaryText,
                            subtaskInputs: a,
                          }),
                        )
                      : null,
                  )
                },
              },
              {
                key: '_renderTextField',
                value: function () {
                  var e = this.props,
                    t = e.onNavigate,
                    n = e.settingValue,
                    a = e.subtaskInputs,
                    r = n.value_data,
                    o = n.value_identifier
                  if (null == r || !r.text_field) return null
                  var i = o === k.t.UserIdentifier
                  return g.a.createElement(da, {
                    autoComplete: i ? 'username' : void 0,
                    onChange: this._handleSettingTextChange,
                    onNavigate: t,
                    onSubmitEditing: this._handleTextFieldOnEditingSubmit,
                    subtaskInputs: a,
                    textField: r.text_field,
                  })
                },
              },
              {
                key: '_renderDestructiveAction',
                value: function () {
                  var e = this.props,
                    t = e.onNavigate,
                    n = e.removeContacts,
                    a = e.settingValue,
                    r = e.subtaskInputs
                  return g.a.createElement(
                    D.a,
                    { style: { marginBottom: A.a.theme.spaces.space16 } },
                    g.a.createElement(wa, {
                      addToast: this._addToast,
                      onNavigate: t,
                      removeContacts: n,
                      removeContactsSetting: a,
                      subtaskInputs: r,
                    }),
                  )
                },
              },
              {
                key: '_renderSeparator',
                value: function () {
                  var e,
                    t = this.props,
                    n = t.onNavigate,
                    a = t.settingValue,
                    r = t.subtaskInputs,
                    o = a.value_data
                  return g.a.createElement(ie, {
                    label: null == o || null === (e = o.separator) || void 0 === e ? void 0 : e.label,
                    onNavigate: n,
                    subtaskInputs: r,
                  })
                },
              },
              {
                key: '_renderAction',
                value: function () {
                  var e,
                    t,
                    n = this.props,
                    a = n.onNavigate,
                    o = n.settingValue,
                    i = n.subtaskInputs,
                    s =
                      null === (e = o.value_data) || void 0 === e || null === (t = e.action_data) || void 0 === t
                        ? void 0
                        : t.link.label
                  return g.a.createElement(
                    D.a,
                    null,
                    g.a.createElement(
                      ae,
                      r()({}, o.primary_text, { onNavigate: a, style: ja.header, subtaskInputs: i }),
                    ),
                    g.a.createElement(
                      ae,
                      r()({}, o.secondary_text, {
                        color: 'gray700',
                        onNavigate: a,
                        size: 'subtext2',
                        subtaskInputs: i,
                      }),
                    ),
                    s
                      ? g.a.createElement(
                          D.a,
                          null,
                          g.a.createElement(S.a, { onPress: this._handleActionClick, type: 'primaryText' }, s),
                        )
                      : null,
                  )
                },
              },
              {
                key: '_renderButton',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.settingValue,
                    a = t.subtaskId,
                    r = t.subtaskInputs,
                    o = n.value_data,
                    i = n.value_identifier
                  if (null == o || !o.button) return null
                  var s = o.button.navigation_link,
                    c = (null == s ? void 0 : s.link_type) === k.m.ChromelessWeb
                  return g.a.createElement(ce, {
                    button: o.button,
                    displayType: this._getButtonDisplayType(i),
                    link: c && null != s && s.url ? { external: !0, pathname: s.url } : void 0,
                    onNavigate: function () {
                      return e._handleButtonNavigation(s, i)
                    },
                    subtaskId: a,
                    subtaskInputs: r,
                  })
                },
              },
              {
                key: '_renderTweet',
                value: function () {
                  var e = this.props.settingValue.value_data
                  return null != e && e.tweet ? g.a.createElement(Oa.a, { tweet: e.tweet }) : null
                },
              },
              {
                key: '_renderSettingOption',
                value: function () {
                  var e = this.props,
                    t = e.onNavigate,
                    n = e.settingValue,
                    a = e.showDividers,
                    o = e.subtaskInputs,
                    i = n.primary_text,
                    s = n.secondary_text,
                    c = n.value_identifier
                  return g.a.createElement(
                    D.a,
                    { accessibilityRole: 'label', focusable: !0, style: [se.option, a && ja.optionDivider] },
                    g.a.createElement(
                      D.a,
                      { style: se.checkboxText },
                      g.a.createElement(ae, r()({}, i, { onNavigate: t, subtaskInputs: o })),
                      s
                        ? g.a.createElement(
                            ae,
                            r()({}, s, {
                              color: 'gray700',
                              onNavigate: t,
                              size: 'subtext2',
                              style: ja.secondaryText,
                              subtaskInputs: o,
                            }),
                          )
                        : null,
                    ),
                    c ? g.a.createElement(ct.a, { checked: this.state[c], onChange: this._handleSettingToggle }) : null,
                  )
                },
              },
              {
                key: '_renderSettingsGroup',
                value: function () {
                  var e,
                    t,
                    n = this.props,
                    a = n.onNavigate,
                    o = n.settingValue,
                    i = n.subtaskInputs,
                    s = o.primary_text,
                    c = o.secondary_text,
                    l = o.value_data,
                    u = null == l || null === (e = l.settings_group_data) || void 0 === e ? void 0 : e.settings,
                    d =
                      null == l || null === (t = l.settings_group_data) || void 0 === t
                        ? void 0
                        : t.status_text_quantity_pairs
                  return g.a.createElement(
                    D.a,
                    { accessibilityRole: 'button', onClick: this._handleSettingGroupClick, style: ja.settingGroup },
                    g.a.createElement(ae, r()({}, s, { onNavigate: a, subtaskInputs: i })),
                    u && d ? this._renderQuantityStatus(u, d) : null,
                    c
                      ? g.a.createElement(
                          ae,
                          r()({}, c, { color: 'gray700', onNavigate: a, size: 'subtext2', subtaskInputs: i }),
                        )
                      : null,
                  )
                },
              },
              {
                key: '_renderQuantityStatus',
                value: function (e, t) {
                  var n,
                    a = this,
                    o = this.props,
                    i = o.onNavigate,
                    s = o.subtaskInputs,
                    c = e.reduce(function (e, t) {
                      return e + (a._getSettingValueFromSubtaskInputs(t) ? 1 : 0)
                    }, 0)
                  return (
                    t.forEach(function (e) {
                      c >= e.threshold &&
                        (n = g.a.createElement(
                          ae,
                          r()({}, e.text, {
                            color: 'gray700',
                            onNavigate: i,
                            size: 'subtext2',
                            style: ja.quantityStatusText,
                            subtaskInputs: s,
                          }),
                        ))
                    }),
                    n
                  )
                },
              },
            ]),
            n
          )
        })(g.a.Component),
        ja = A.a.create(function (e) {
          return {
            header: { marginTop: e.spaces.space32 },
            secondaryText: { marginTop: e.spaces.space12 },
            quantityStatusText: { marginTop: e.spaces.space2, marginBottom: e.spaces.space12 },
            optionDivider: {
              paddingBottom: e.spaces.space12,
              borderBottomColor: e.colors.borderColor,
              borderBottomStyle: 'solid',
              borderBottomWidth: e.borderWidths.small,
            },
            settingGroup: { marginTop: e.spaces.space12 },
            textField: { width: '100%' },
            textFieldDetails: { marginBottom: e.spaces.space4 },
            interstitial: { marginTop: e.spaces.space12 },
          }
        })
      function Ra(e) {
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
            a = b()(e)
          if (t) {
            var r = b()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return h()(this, n)
        }
      }
      var Da = (function (e) {
          p()(n, e)
          var t = Ra(n)
          function n(e) {
            var a
            i()(this, n),
              (a = t.call(this, e)),
              y()(u()(a), '_renderEmailTextField', function () {
                return g.a.createElement(Jn, {
                  autoComplete: 'email',
                  autoFocus: !0,
                  defaultValue: a.state.email,
                  label: a.props.subtask.hint_text,
                  name: 'email',
                  onRef: a._handleSetInputRef,
                  onValidityChange: a._handleUpdateValidity,
                  style: Ta.emailTextField,
                })
              }),
              y()(u()(a), '_getInitialSettingValues', function (e, t, n) {
                var a
                return null === (a = e.settings) || void 0 === a
                  ? void 0
                  : a.map(function (e) {
                      var a,
                        r,
                        o,
                        i,
                        s = e.value_identifier
                      if (void 0 === s) return {}
                      var c =
                        null !==
                          (a =
                            null === (r = e.value_data) || void 0 === r || null === (o = r.boolean_data) || void 0 === o
                              ? void 0
                              : o.initial_value) &&
                        void 0 !== a &&
                        a
                      return {
                        valueIdentifier: s,
                        value:
                          null !== (i = Object(ee.e)(n, { key: s, subtask_id: t }, void 0)) && void 0 !== i ? i : c,
                      }
                    })
              }),
              y()(u()(a), '_toggleSettingValue', function (e) {
                var t = a.state.settingValues,
                  n =
                    null == t
                      ? void 0
                      : t.map(function (t) {
                          return t.valueIdentifier === e ? { valueIdentifier: e, value: !t.value } : t
                        })
                a.setState({ settingValues: n })
              }),
              y()(u()(a), '_renderSettings', function () {
                var e,
                  t,
                  n = a.props,
                  r = n.onNavigate,
                  o = n.subtask,
                  i = n.subtaskId,
                  s = n.subtaskInputs
                return null !==
                  (e =
                    null === (t = o.settings) || void 0 === t
                      ? void 0
                      : t.map(function (e) {
                          var t = e.value_identifier
                          return void 0 === t
                            ? null
                            : g.a.createElement(Pa, {
                                key: t,
                                onNavigate: r,
                                onSettingToggle: function () {
                                  return a._toggleSettingValue(t)
                                },
                                settingValue: e,
                                subtaskId: i,
                                subtaskInputs: s,
                              })
                        })) && void 0 !== e
                  ? e
                  : null
              }),
              y()(u()(a), '_handleDoneButtonClick', function () {
                var e = a.props.subtask,
                  t = a.state.settingValues,
                  n = {
                    setting_responses:
                      null == t
                        ? void 0
                        : t.map(function (e) {
                            var t = e.value
                            return { key: e.valueIdentifier, response_data: { boolean_data: { result: t } } }
                          }),
                    email: a._getIdentifierValue(),
                    link: e.next_link.link_id,
                  }
                a._handleButtonClick(e.next_link, n)
              }),
              y()(u()(a), '_handleSkipButtonClick', function () {
                var e = a.props.subtask
                e.skip_link && a._handleButtonClick(e.skip_link, { link: e.skip_link.link_id })
              }),
              y()(u()(a), '_handleButtonClick', function (e, t) {
                var n = a.props,
                  r = n.onNavigate,
                  o = n.subtaskId
                ;(0, n.updateFlow)(o, t), r(e)
              }),
              y()(u()(a), '_handleSetInputRef', function (e) {
                a._input = e
              }),
              y()(u()(a), '_handleUpdateValidity', function () {
                var e = a._input && a._input.isValid()
                a.setState({ isValid: !!e })
              }),
              y()(u()(a), '_getIdentifierValue', function () {
                return (a._input && a._input.getValue()) || void 0
              })
            var r = e.subtask,
              o = e.subtaskId,
              s = e.subtaskInputs,
              c = Object(ee.e)(s, { key: 'email', subtask_id: o }, '') || void 0,
              l = a._getInitialSettingValues(r, o, s)
            return (a.state = { email: c, isValid: !!c, settingValues: l }), a
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.onNavigate,
                    n = e.passthroughOcfScreenProps,
                    a = e.progressIndication,
                    o = e.subtask,
                    i = e.subtaskInputs,
                    s = o.next_link,
                    c = o.primary_text,
                    l = o.secondary_text,
                    u = o.skip_link,
                    d =
                      this.state.isValid || !u
                        ? g.a.createElement(
                            S.a,
                            {
                              disabled: !this.state.isValid,
                              onPress: this._handleDoneButtonClick,
                              size: 'large',
                              type: 'primaryFilled',
                            },
                            s.label,
                          )
                        : g.a.createElement(
                            S.a,
                            { onPress: this._handleSkipButtonClick, size: 'large', type: 'primaryOutlined' },
                            u.label,
                          )
                  return g.a.createElement(
                    he.a,
                    r()({}, n, { progressIndication: a, rightControl: d }),
                    g.a.createElement(
                      D.a,
                      null,
                      g.a.createElement(
                        D.a,
                        { style: se.contentArea },
                        c &&
                          g.a.createElement(
                            ae,
                            r()({}, c, {
                              nativeID: w.b,
                              onNavigate: t,
                              size: 'title4',
                              style: se.headline,
                              subtaskInputs: i,
                              weight: 'bold',
                            }),
                          ),
                        l && g.a.createElement(ae, r()({}, l, { color: 'gray700', onNavigate: t, subtaskInputs: i })),
                        g.a.createElement(D.a, { style: Ta.textFieldArea }, this._renderEmailTextField()),
                        this._renderSettings(),
                      ),
                    ),
                    this.props.errorDialog,
                  )
                },
              },
            ]),
            n
          )
        })(g.a.Component),
        Ta = A.a.create(function (e) {
          return {
            textFieldArea: { marginTop: e.spaces.space20 },
            emailTextField: { paddingHorizontal: 0, paddingVertical: e.spaces.space16 },
          }
        }),
        Aa = { scribeAction: vt.c },
        Fa = Object(kt.b)(Aa),
        Ba = 'LoginForm_Login_Button',
        Na = n('0yYu')
      function La(e) {
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
            a = b()(e)
          if (t) {
            var r = b()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return h()(this, n)
        }
      }
      var Ma = Yt.a.d1f6d336,
        Va = Yt.a.a3841918,
        Ua = Yt.a.f70cd5ed,
        za = Yt.a.ca86b62c,
        Ha = (function (e) {
          p()(n, e)
          var t = La(n)
          function n(e, a) {
            var o
            return (
              i()(this, n),
              (o = t.call(this, e, a)),
              y()(
                u()(o),
                '_passwordlessSsoEnabled',
                o.context.featureSwitches.isTrue('responsive_web_passwordless_sso_enabled'),
              ),
              y()(u()(o), 'state', {}),
              y()(u()(o), '_renderIdentifier', function () {
                var e,
                  t,
                  n = o.props.subtask,
                  a = n.email,
                  r = n.phone_number,
                  i = n.user_identifier_display_type,
                  s = n.username
                return (
                  'phone_number' === i
                    ? ((e = r), (t = Ua))
                    : 'username' === i
                    ? ((e = s), (t = Ma))
                    : 'email' === i && ((e = a), (t = Va)),
                  e && t && i
                    ? g.a.createElement(sn.a, {
                        editable: !1,
                        label: t,
                        name: i,
                        onChange: Pe.a,
                        style: se.formTextInput,
                        value: e,
                      })
                    : null
                )
              }),
              y()(u()(o), '_renderPasswordFields', function () {
                var e = o.props,
                  t = e.onNavigate,
                  n = e.subtask,
                  a = e.subtaskInputs,
                  i = n.show_password_confirmation
                if (n.password_field || n.new_password_field || n.confirm_password_field) {
                  var s,
                    c = { onNavigate: t, onSubmitEditing: o._handleTextSubmit, subtaskInputs: a },
                    l = null !== (s = n.password_field) && void 0 !== s ? s : n.new_password_field
                  return g.a.createElement(
                    g.a.Fragment,
                    null,
                    l
                      ? g.a.createElement(
                          da,
                          r()({}, c, {
                            autoFocus: !0,
                            onChange: o._handlePasswordChange,
                            passwordProps: {
                              onPasswordValidated: o._handleValidationChange,
                              showPasswordVisibilityIcon: o._ssoInSliEnterPasswordUpdatesEnabled,
                              skipPasswordValidation: n.skip_password_validation,
                            },
                            textField: l,
                          }),
                        )
                      : null,
                    n.confirm_password_field
                      ? g.a.createElement(
                          da,
                          r()({}, c, {
                            onChange: o._handlePasswordConfirmationChange,
                            passwordProps: {
                              onPasswordValidated: o._handleValidationChange,
                              customValidator: o._validatePasswordConfirmation,
                              showPasswordVisibilityIcon: o._ssoInSliEnterPasswordUpdatesEnabled,
                            },
                            textField: n.confirm_password_field,
                          }),
                        )
                      : null,
                  )
                }
                return g.a.createElement(
                  g.a.Fragment,
                  null,
                  g.a.createElement(la, {
                    autoComplete: o._getPasswordAutoCompleteValue(),
                    autoFocus: !0,
                    label: n.hint,
                    onPasswordChange: o._handlePasswordChange,
                    onPasswordValidated: o._handleValidationChange,
                    onSubmitEditing: o._handleTextSubmit,
                    showPasswordVisibilityIcon: o._ssoInSliEnterPasswordUpdatesEnabled,
                    skipPasswordValidation: n.skip_password_validation,
                    userIdentifier: n.username,
                  }),
                  i
                    ? g.a.createElement(la, {
                        autoComplete: o._getPasswordAutoCompleteValue(),
                        customValidator: o._validatePasswordConfirmation,
                        label: n.password_confirmation_hint,
                        onPasswordChange: o._handlePasswordConfirmationChange,
                        onPasswordValidated: o._handleValidationChange,
                        onSubmitEditing: o._handleTextSubmit,
                        showPasswordVisibilityIcon: o._ssoInSliEnterPasswordUpdatesEnabled,
                        userIdentifier: n.username,
                      })
                    : null,
                )
              }),
              y()(u()(o), '_renderFooter', function () {
                var e,
                  t,
                  n,
                  a,
                  i,
                  s = o.props,
                  c = s.onNavigate,
                  l = s.subtask,
                  u = s.subtaskInputs,
                  d = o._isPasswordValid(),
                  p = o._passwordlessSsoEnabled
                    ? null === (e = l.action_buttons) || void 0 === e
                      ? void 0
                      : e.map(function (e, t) {
                          return g.a.createElement(ce, {
                            button: e,
                            displayType: Object(ee.j)(e.navigation_link.link_id),
                            key: t,
                            onNavigate: c,
                            subtaskInputs: u,
                          })
                        })
                    : [],
                  f =
                    null !== (t = l.footer) && void 0 !== t && t.footnote_text
                      ? g.a.createElement(
                          ae,
                          r()({}, l.footer.footnote_text, {
                            color: 'gray700',
                            onNavigate: c,
                            style: Wa.footnoteText,
                            subtaskInputs: u,
                          }),
                        )
                      : null,
                  h =
                    null !== (n = l.footer) && void 0 !== n && n.detail_text
                      ? g.a.createElement(
                          ae,
                          r()({}, l.footer.detail_text, {
                            color: 'gray700',
                            onNavigate: c,
                            style: Wa.detailText,
                            subtaskInputs: u,
                          }),
                        )
                      : null,
                  m =
                    (null === (a = l.footer) || void 0 === a ? void 0 : a.style) === k.i.Floating ? 'medium' : 'large',
                  b =
                    d || !l.skip_link
                      ? g.a.createElement(
                          S.a,
                          {
                            disabled: !d,
                            onPress: o._handleDoneButtonClick,
                            size: m,
                            style: se.button,
                            testID: Ba,
                            type: 'primaryFilled',
                          },
                          l.next_link.label,
                        )
                      : g.a.createElement(
                          S.a,
                          { onPress: o._handleSkipButtonClick, size: m, style: se.button, type: 'primaryOutlined' },
                          null === (i = l.skip_link) || void 0 === i ? void 0 : i.label,
                        )
                return g.a.createElement(
                  D.a,
                  null,
                  h,
                  b,
                  null != p && p.length ? g.a.createElement(Na.a, { label: g.a.createElement(T.b, null, za) }) : null,
                  p,
                  f,
                )
              }),
              y()(u()(o), '_validatePasswordConfirmation', function () {
                var e,
                  t,
                  n,
                  a = o.props.subtask,
                  r = a.password_confirmation_mismatch_message,
                  i =
                    null === (e = a.confirm_password_field) ||
                    void 0 === e ||
                    null === (t = e.validation_messages) ||
                    void 0 === t
                      ? void 0
                      : t.find(function (e) {
                          return e.message_type === k.D.Mismatch
                        })
                if ((i ? (n = i.text.text) : null != r && r.text && (n = null == r ? void 0 : r.text), n)) {
                  var s = o.state
                  if (s.password !== s.passwordConfirmation) return { valid: !1, errorMessage: n }
                }
                return { valid: !0, errorMessage: void 0 }
              }),
              y()(u()(o), '_handleDoneButtonClick', function () {
                var e = o.props,
                  t = e.onNavigate,
                  n = e.subtask,
                  a = e.subtaskId,
                  r = e.updateFlow
                o._saveCredentialsIfNeeded()
                  .then(function () {
                    r(a, { password: o.state.password, link: n.next_link.link_id }), t(n.next_link)
                  })
                  .catch(function () {
                    o._scribeSmartLockError(),
                      r(a, { password: o.state.password, link: n.next_link.link_id }),
                      t(n.next_link)
                  })
              }),
              y()(u()(o), '_handleSkipButtonClick', function () {
                var e = o.props,
                  t = e.onNavigate,
                  n = e.subtask,
                  a = e.subtaskId,
                  r = e.updateFlow,
                  i = n.skip_link
                i && (r(a, { link: i.link_id }), t(i))
              }),
              y()(u()(o), '_scribeSmartLockError', function () {
                ;(0,
                o.props
                  .scribeAction)({ page: 'onboarding', section: 'enter_password', component: 'smart_lock', element: 'prompt', action: 'error' })
              }),
              y()(u()(o), '_handlePasswordChange', function (e) {
                o.setState({ password: e })
              }),
              y()(u()(o), '_handlePasswordConfirmationChange', function (e) {
                o.setState({ passwordConfirmation: e })
              }),
              y()(u()(o), '_handleValidationChange', function (e) {
                var t = o.props.subtask,
                  n = t.show_password_confirmation
                if (t.confirm_password_field || n) {
                  var a = o._validatePasswordConfirmation().valid
                  o.setState({ isPasswordValid: e && a })
                } else o.setState({ isPasswordValid: e })
              }),
              y()(u()(o), '_isPasswordValid', function () {
                var e = o.props.subtask,
                  t = o.state,
                  n = t.isPasswordValid,
                  a = t.password,
                  r = !(a && a.length)
                return n || (e.skip_password_validation && !r)
              }),
              y()(u()(o), '_handleTextSubmit', function () {
                o._isPasswordValid() && o._handleDoneButtonClick()
              }),
              y()(u()(o), '_saveCredentialsIfNeeded', function () {
                var e = o.props.subtask,
                  t = e.email,
                  n = e.phone,
                  a = e.skip_password_validation,
                  r = e.username,
                  i = o.state.password,
                  s = !!window.PasswordCredential,
                  c = r || t || n
                if (c && s && !a && navigator.credentials) {
                  var l = new window.PasswordCredential({ id: c, password: i })
                  return navigator.credentials.store(l)
                }
                return Promise.resolve()
              }),
              y()(u()(o), '_getPasswordAutoCompleteValue', function () {
                switch (o.props.subtask.os_content_type) {
                  case k.o.Password:
                    return 'current-password'
                  case k.o.NewPassword:
                    return 'new-password'
                  default:
                    return 'on'
                }
              }),
              y()(u()(o), '_hasSSOButtons', function () {
                var e
                return !(
                  null === (e = o.props.subtask.action_buttons) ||
                  void 0 === e ||
                  !e.find(function (e) {
                    var t = Object(ee.j)(e.navigation_link.link_id)
                    return t === k.b.GoogleSSO || t === k.b.AppleSSO
                  })
                )
              }),
              (o._ssoInSliEnterPasswordUpdatesEnabled = a.featureSwitches.isTrue(
                'responsive_web_sso_in_sli_enter_password_updates_enabled',
              )),
              o
            )
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e,
                    t,
                    n,
                    a,
                    o = this.props,
                    i = o.errorDialog,
                    s = o.onNavigate,
                    c = o.passthroughOcfScreenProps,
                    l = o.progressIndication,
                    u = o.subtask,
                    d = o.subtaskInputs,
                    p =
                      null !== (e = null === (t = u.footer) || void 0 === t ? void 0 : t.style) && void 0 !== e
                        ? e
                        : k.i.Fixed
                  return g.a.createElement(
                    he.a,
                    r()({}, c, { progressIndication: l, rightControl: p === k.i.Fixed ? this._renderFooter() : null }),
                    g.a.createElement(
                      D.a,
                      { style: this._hasSSOButtons() ? se.contentAreaCompact : se.contentArea },
                      g.a.createElement(fe, {
                        header: u.header,
                        onNavigate: s,
                        primaryTextProp: u.primary_text,
                        secondaryTextProp: u.secondary_text,
                        subtaskInputs: d,
                        userInfo: this._passwordlessSsoEnabled
                          ? g.a.createElement(Le, {
                              displayType: k.C.compact,
                              onNavigate: s,
                              subtaskInputs: d,
                              user: null === (n = u.header) || void 0 === n ? void 0 : n.user,
                              userCaption: null === (a = u.header) || void 0 === a ? void 0 : a.user_caption,
                            })
                          : void 0,
                      }),
                      this._renderIdentifier(),
                      this._renderPasswordFields(),
                      p === k.i.Floating || p === k.i.FloatingLarge ? this._renderFooter() : null,
                    ),
                    i,
                  )
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      y()(Ha, 'contextType', $e.a)
      var Wa = A.a.create(function (e) {
          return { footnoteText: { marginTop: e.spaces.space40 }, detailText: { marginBottom: e.spaces.space40 } }
        }),
        Ga = Fa(Ha)
      function Ka(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      var Ya = new RegExp('^\\+?[0-9\\-\\.\\(\\)\\s]{7,1000}$'),
        Xa = Yt.a.cd24fe6f,
        qa = An({
          namespace: 'phoneNumberValidity',
          fetchOneContext: 'FETCH_PHONE_VALIDITY',
          fetchOneEndpoint: function (e) {
            return e.Validity.isPhoneNumberAvailable
          },
          fetchOneParams: function (e, t) {
            return (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}
                t % 2
                  ? Ka(Object(n), !0).forEach(function (t) {
                      y()(e, t, n[t])
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                  : Ka(Object(n)).forEach(function (t) {
                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
              }
              return e
            })({ raw_phone_number: R()(e, 1)[0] }, t)
          },
          localValidator: function (e) {
            var t = Ya.test(e)
            return { errorMessage: Xa, valid: t }
          },
        }),
        Za = function (e) {
          var t = e.countryCode,
            n = e.onRef,
            a = E()(e, ['countryCode', 'onRef']),
            o = { country_code: t }
          return g.a.createElement(Yn, r()({ module: qa, onRef: n, type: 'tel', validationParams: o }, a))
        },
        Ja = n('6XNv')
      function Qa(e) {
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
            a = b()(e)
          if (t) {
            var r = b()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return h()(this, n)
        }
      }
      var $a = Yt.a.gf8388fe,
        er = (function (e) {
          p()(n, e)
          var t = Qa(n)
          function n(e) {
            var a
            i()(this, n),
              (a = t.call(this, e)),
              y()(u()(a), '_renderCountryCodes', function () {
                var e = a.props.subtask.country_codes
                if (e && e.length) {
                  var t = e.map(function (e) {
                    return { label: e.text.text, value: e.id }
                  })
                  return g.a.createElement(Ja.a, {
                    helperText: void 0,
                    label: $a,
                    onChange: a._handleCountryChange,
                    options: t,
                    value: a.state.countryCode || '',
                  })
                }
                return null
              }),
              y()(u()(a), '_handleCountryChange', function (e) {
                a.setState({ countryCode: e })
              }),
              y()(u()(a), '_renderPhoneTextField', function () {
                return g.a.createElement(Za, {
                  autoComplete: 'tel',
                  countryCode: a.state.countryCode,
                  defaultValue: a.state.phoneNumber,
                  label: a.props.subtask.hint_text,
                  name: 'phone_number',
                  onRef: a._handleSetInputRef,
                  onValidityChange: a._handleUpdateValidity,
                  style: tr.phoneTextField,
                })
              }),
              y()(u()(a), '_getInitialSettingValues', function (e, t, n) {
                var a
                return null === (a = e.settings) || void 0 === a
                  ? void 0
                  : a.map(function (e) {
                      var a,
                        r,
                        o,
                        i,
                        s = e.value_identifier
                      if (void 0 === s) return {}
                      var c =
                        null !==
                          (a =
                            null === (r = e.value_data) || void 0 === r || null === (o = r.boolean_data) || void 0 === o
                              ? void 0
                              : o.initial_value) &&
                        void 0 !== a &&
                        a
                      return {
                        valueIdentifier: s,
                        value:
                          null !== (i = Object(ee.e)(n, { key: s, subtask_id: t }, void 0)) && void 0 !== i ? i : c,
                      }
                    })
              }),
              y()(u()(a), '_toggleSettingValue', function (e) {
                var t = a.state.settingValues,
                  n =
                    null == t
                      ? void 0
                      : t.map(function (t) {
                          return t.valueIdentifier === e ? { valueIdentifier: e, value: !t.value } : t
                        })
                a.setState({ settingValues: n })
              }),
              y()(u()(a), '_renderSettings', function () {
                var e,
                  t,
                  n = a.props,
                  r = n.onNavigate,
                  o = n.subtask,
                  i = n.subtaskId,
                  s = n.subtaskInputs
                return null !==
                  (e =
                    null === (t = o.settings) || void 0 === t
                      ? void 0
                      : t.map(function (e) {
                          var t = e.value_identifier
                          return void 0 === t
                            ? null
                            : g.a.createElement(Pa, {
                                key: t,
                                onNavigate: r,
                                onSettingToggle: function () {
                                  return a._toggleSettingValue(t)
                                },
                                settingValue: e,
                                subtaskId: i,
                                subtaskInputs: s,
                              })
                        })) && void 0 !== e
                  ? e
                  : null
              }),
              y()(u()(a), '_handleDoneButtonClick', function () {
                var e = a.props.subtask,
                  t = a.state,
                  n = t.countryCode,
                  r = t.settingValues,
                  o =
                    null == r
                      ? void 0
                      : r.map(function (e) {
                          var t = e.value
                          return { key: e.valueIdentifier, response_data: { boolean_data: { result: t } } }
                        }),
                  i = {
                    country_code: n,
                    phone_number: a._getIdentifierValue(),
                    setting_responses: o,
                    link: e.next_link.link_id,
                  }
                a._handleButtonClick(e.next_link, i)
              }),
              y()(u()(a), '_handleSkipButtonClick', function () {
                var e = a.props.subtask
                e.skip_link && a._handleButtonClick(e.skip_link, { link: e.skip_link.link_id })
              }),
              y()(u()(a), '_handleButtonClick', function (e, t) {
                var n = a.props,
                  r = n.onNavigate,
                  o = n.subtaskId
                ;(0, n.updateFlow)(o, t), r(e)
              }),
              y()(u()(a), '_handleSetInputRef', function (e) {
                a._input = e
              }),
              y()(u()(a), '_handleUpdateValidity', function () {
                var e = a._input && a._input.isValid()
                a.setState({ isValid: !!e })
              }),
              y()(u()(a), '_getIdentifierValue', function () {
                return (a._input && a._input.getValue()) || void 0
              })
            var r = e.subtask,
              o = e.subtaskId,
              s = e.subtaskInputs,
              c = Object(ee.e)(s, { key: 'country_code', subtask_id: o }, r.default_country_code) || void 0,
              l = Object(ee.e)(s, { key: 'phone_number', subtask_id: o }, '') || void 0,
              d = a._getInitialSettingValues(r, o, s)
            return (a.state = { countryCode: c, phoneNumber: l, isValid: !!l, settingValues: d }), a
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.onNavigate,
                    n = e.passthroughOcfScreenProps,
                    a = e.progressIndication,
                    o = e.subtask,
                    i = e.subtaskInputs,
                    s = o.next_link,
                    c = o.primary_text,
                    l = o.secondary_text,
                    u = o.skip_link,
                    d =
                      this.state.isValid || !u
                        ? g.a.createElement(
                            S.a,
                            {
                              disabled: !this.state.isValid,
                              onPress: this._handleDoneButtonClick,
                              size: 'large',
                              type: 'primaryFilled',
                            },
                            s.label,
                          )
                        : g.a.createElement(
                            S.a,
                            { onPress: this._handleSkipButtonClick, size: 'large', type: 'primaryOutlined' },
                            u.label,
                          )
                  return g.a.createElement(
                    he.a,
                    r()({}, n, { progressIndication: a, rightControl: d }),
                    g.a.createElement(
                      D.a,
                      null,
                      g.a.createElement(
                        D.a,
                        { style: se.contentArea },
                        c &&
                          g.a.createElement(
                            ae,
                            r()({}, c, {
                              nativeID: w.b,
                              onNavigate: t,
                              size: 'title4',
                              style: se.headline,
                              subtaskInputs: i,
                              weight: 'bold',
                            }),
                          ),
                        l && g.a.createElement(ae, r()({}, l, { color: 'gray700', onNavigate: t, subtaskInputs: i })),
                        g.a.createElement(
                          D.a,
                          { style: tr.textFieldArea },
                          this._renderCountryCodes(),
                          this._renderPhoneTextField(),
                        ),
                        this._renderSettings(),
                      ),
                    ),
                    this.props.errorDialog,
                  )
                },
              },
            ]),
            n
          )
        })(g.a.Component),
        tr = A.a.create(function (e) {
          return {
            textFieldArea: { marginTop: e.spaces.space20 },
            phoneTextField: { paddingHorizontal: 0, paddingVertical: e.spaces.space16 },
          }
        }),
        nr = n('Lam0')
      function ar(e) {
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
            a = b()(e)
          if (t) {
            var r = b()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return h()(this, n)
        }
      }
      var rr = (function (e) {
          p()(n, e)
          var t = ar(n)
          function n() {
            var e
            i()(this, n)
            for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              y()(u()(e), '_handleRecaptchaStateChange', function (t) {
                var n = e.props,
                  a = n.onNavigate,
                  r = n.subtask,
                  o = n.subtaskId,
                  i = n.updateFlow,
                  s = r.next_link
                t && (i(o, { link: s.link_id, recaptcha_response: t }), a(s))
              }),
              y()(u()(e), '_handleSkipButtonClick', function () {
                var t = e.props,
                  n = t.onNavigate,
                  a = t.subtask.skip_link,
                  r = t.subtaskId,
                  o = t.updateFlow
                a && o(r, { link: a.link_id }), a && n(a)
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.errorDialog,
                    n = e.onNavigate,
                    a = e.passthroughOcfScreenProps,
                    o = e.subtask,
                    i = e.subtaskInputs,
                    s = o.primary_text,
                    c = o.secondary_text,
                    l = o.skip_link,
                    u =
                      l &&
                      g.a.createElement(
                        S.a,
                        { onPress: this._handleSkipButtonClick, size: 'large', type: 'primaryText' },
                        l.label,
                      )
                  return g.a.createElement(
                    he.a,
                    r()({}, a, { rightControl: u }),
                    g.a.createElement(
                      D.a,
                      { style: se.contentArea },
                      s
                        ? g.a.createElement(
                            ae,
                            r()({}, s, {
                              nativeID: w.b,
                              onNavigate: n,
                              size: 'title4',
                              style: se.headline,
                              subtaskInputs: i,
                              weight: 'bold',
                            }),
                          )
                        : null,
                      c
                        ? g.a.createElement(ae, r()({}, c, { color: 'gray700', onNavigate: n, subtaskInputs: i }))
                        : null,
                      g.a.createElement(nr.a, {
                        nextButtonDisabled: !1,
                        onChange: this._handleRecaptchaStateChange,
                        withConsentForm: !1,
                      }),
                    ),
                    t,
                  )
                },
              },
            ]),
            n
          )
        })(g.a.Component),
        or = 'ocfEnterTextNextButton',
        ir = 'ocfEnterTextSkipForNowButton',
        sr = 'ocfEnterTextTextInput'
      function cr(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function lr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? cr(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : cr(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function ur(e) {
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
            a = b()(e)
          if (t) {
            var r = b()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return h()(this, n)
        }
      }
      var dr = 'text',
        pr = (function (e) {
          p()(n, e)
          var t = ur(n)
          function n(e) {
            var a
            i()(this, n),
              (a = t.call(this, e)),
              y()(u()(a), '_handleSubmit', function () {
                a.state.text && a._handleDoneButtonClick()
              }),
              y()(u()(a), '_handleDoneButtonClick', function () {
                var e = a.props,
                  t = e.onNavigate,
                  n = e.subtask.next_link,
                  r = e.subtaskId
                ;(0, e.updateFlow)(r, lr(lr({}, a.state), {}, { link: n.link_id })), t(n)
              }),
              y()(u()(a), '_handleSkipButtonClick', function () {
                var e = a.props,
                  t = e.onNavigate,
                  n = e.subtask.skip_link,
                  r = e.subtaskId,
                  o = e.updateFlow
                n && o(r, { link: n.link_id }), n && t(n)
              }),
              y()(u()(a), '_handleEntryUpdated', function (e) {
                var t = e.target.value
                a.setState({ text: t })
              }),
              y()(u()(a), '_getAutoCompleteFromKeyboardType', function (e) {
                switch (e) {
                  case k.k.Email:
                    return 'email'
                  case k.k.Telephone:
                    return 'tel'
                  default:
                    return
                }
              }),
              y()(u()(a), '_getInputTypeFromKeyboardType', function (e) {
                switch (e) {
                  case k.k.Email:
                    return 'email'
                  case k.k.Password:
                    return 'password'
                  case k.k.Telephone:
                    return 'tel'
                  default:
                    return 'text'
                }
              }),
              y()(u()(a), '_getInputModeFromKeyboardType', function (e) {
                switch (e) {
                  case k.k.Email:
                    return 'email'
                  case k.k.Number:
                    return 'numeric'
                  case k.k.Telephone:
                    return 'tel'
                  default:
                    return 'text'
                }
              })
            var r = e.subtask,
              o = e.subtaskId,
              s = e.subtaskInputs,
              c = void 0 === s ? {} : s,
              l = r.default_text,
              d = Object(ee.e)(c, { key: dr, subtask_id: o }, l) || ''
            return (a.state = { text: d }), a
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.errorDialog,
                    n = e.onNavigate,
                    a = e.passthroughOcfScreenProps,
                    o = e.subtask,
                    i = e.subtaskInputs,
                    s = o.auto_capitalization_type,
                    c = o.auto_correction_enabled,
                    l = o.detail_text,
                    u = o.hint_text,
                    d = o.keyboard_type,
                    p = o.max_length,
                    f = o.multiline,
                    h = o.next_link,
                    m = o.os_content_type,
                    b = o.skip_link,
                    v = g.a.createElement(
                      S.a,
                      {
                        disabled: !b && !this.state.text,
                        onPress: this._handleDoneButtonClick,
                        size: 'large',
                        testID: or,
                        type: 'primaryFilled',
                      },
                      h.label,
                    ),
                    y =
                      b &&
                      g.a.createElement(
                        S.a,
                        { onPress: this._handleSkipButtonClick, size: 'large', testID: ir, type: 'primaryText' },
                        b.label,
                      )
                  return g.a.createElement(
                    he.a,
                    r()({}, a, { rightControl: this.state.text || !b ? v : y }),
                    g.a.createElement(
                      D.a,
                      { style: se.contentArea },
                      g.a.createElement(fe, {
                        header: o.header,
                        onNavigate: n,
                        primaryTextProp: o.primary_text,
                        secondaryTextProp: o.secondary_text,
                        subtaskInputs: i,
                      }),
                      g.a.createElement(sn.a, {
                        autoCapitalize: s || 'sentences',
                        autoComplete: m === k.o.Username ? m : this._getAutoCompleteFromKeyboardType(d),
                        autoCorrect: c,
                        autoFocus: !0,
                        inputMode: this._getInputModeFromKeyboardType(d),
                        label: u || '',
                        maxLength: p,
                        multiline: f,
                        name: m || k.o.Text,
                        onChange: this._handleEntryUpdated,
                        onSubmitEditing: this._handleSubmit,
                        positionCursorAtEnd: !0,
                        spellCheck: c ? 'true' : 'false',
                        style: se.formTextInput,
                        testID: sr,
                        type: this._getInputTypeFromKeyboardType(d),
                        value: this.state.text,
                      }),
                      l
                        ? g.a.createElement(ae, r()({}, l, { color: 'gray700', onNavigate: n, subtaskInputs: i }))
                        : null,
                    ),
                    t,
                  )
                },
              },
            ]),
            n
          )
        })(g.a.Component),
        fr = n('LXAX'),
        hr = Object(wt.createSelector)(gt.e.selectLoggedInUser, fr.c, yt.o, function (e, t, n) {
          return { loggedInUser: e, navigationContext: n, isUsernameValid: t.valid, validationError: t.desc }
        }),
        mr = { fetchUsernameAvailability: fr.b },
        br = Object(kt.g)(hr, mr),
        vr = n('EweD')
      function yr(e) {
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
            a = b()(e)
          if (t) {
            var r = b()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return h()(this, n)
        }
      }
      var _r = Yt.a.d1f6d336,
        gr = (function (e) {
          p()(n, e)
          var t = yr(n)
          function n(e) {
            var a
            i()(this, n),
              (a = t.call(this, e)),
              y()(u()(a), '_maybeRenderDetailTexts', function () {
                var e = a.props,
                  t = e.subtask,
                  n = e.subtaskInputs,
                  o = a.state.currentDetailTextIndex
                return t.detail_texts && t.detail_texts.length
                  ? g.a.createElement(
                      ae,
                      r()({}, t.detail_texts[o], {
                        color: 'link',
                        onNavigate: a._handleDetailTextClick,
                        style: kr.detailLink,
                        subtaskInputs: n,
                      }),
                    )
                  : void 0
              }),
              y()(u()(a), '_handleDetailTextClick', function (e) {
                var t = a.props,
                  n = t.analytics,
                  r = t.onNavigate
                'show_more_usernames' === e.link_id
                  ? (a._updateCurrentDetailTextIndex(), n.scribe({ element: 'show_more', action: 'click' }))
                  : (a._selectUsername(e.link_id, a._fetchUsernameStatus),
                    n.scribe({ element: 'suggestion', action: 'click' })),
                  r(e)
              }),
              y()(u()(a), '_handleUsernameUpdated', function (e) {
                var t = e.target.value
                a._selectUsername(t, a._fetchUsernameStatusDebounced)
              }),
              y()(u()(a), '_selectUsername', function (e, t) {
                a.setState({ username: e }), t(e)
              }),
              y()(u()(a), '_handleNextButtonClick', function () {
                var e = a.props,
                  t = e.onNavigate,
                  n = e.subtask,
                  r = e.subtaskId,
                  o = e.updateFlow,
                  i = a.state.username
                n.next_link && (o(r, { username: i, link: n.next_link.link_id }), t(n.next_link))
              }),
              y()(u()(a), '_handleSkipButtonClick', function () {
                var e = a.props,
                  t = e.onNavigate,
                  n = e.subtask,
                  r = e.subtaskId,
                  o = e.updateFlow,
                  i = n.skip_link
                i && (o(r, { link: i.link_id }), t(i))
              }),
              y()(u()(a), '_fetchUsernameStatus', function (e) {
                var t = a.props,
                  n = t.analytics,
                  r = t.fetchUsernameAvailability,
                  o = t.loggedInUser
                o &&
                  r({
                    email: o.email && o.email[0] && o.email[0].address,
                    full_name: o.name,
                    suggest: !1,
                    username: e,
                  }).then(function (e) {
                    e && !e.valid && 'taken' === e.reason && n.scribe({ element: 'username', action: 'taken' })
                  })
              }),
              y()(u()(a), '_updateCurrentDetailTextIndex', function () {
                a.setState({ currentDetailTextIndex: a.state.currentDetailTextIndex + 1 })
              })
            var o = e.loggedInUser,
              s = e.subtaskId,
              c = e.subtaskInputs,
              l = Object(ee.e)(c, { key: 'username', subtask_id: s }, '') || (o ? o.screen_name : '')
            return (
              (a.state = { currentDetailTextIndex: 0, username: l }),
              (a._fetchUsernameStatusDebounced = Object(zn.a)(function () {
                var e
                return (e = a)._fetchUsernameStatus.apply(e, arguments)
              }, 250)),
              a
            )
          }
          return (
            c()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props.navigationContext || {},
                    t = e.action,
                    n = e.text
                  'set_text' === t && n && this._selectUsername(n, this._fetchUsernameStatus)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e,
                    t = this.props,
                    n = t.isUsernameValid,
                    a = t.loggedInUser,
                    o = t.onNavigate,
                    i = t.passthroughOcfScreenProps,
                    s = t.progressIndication,
                    c = t.subtask,
                    l = t.subtaskInputs,
                    u = t.validationError,
                    d = this.state.username,
                    p = (a && a.screen_name && a.screen_name.toLowerCase()) === (d && d.toLowerCase()),
                    f = g.a.createElement(
                      S.a,
                      { disabled: !n, onPress: this._handleNextButtonClick, size: 'large', type: 'primaryFilled' },
                      c.next_link.label,
                    ),
                    h =
                      c.skip_link && c.skip_link.label
                        ? g.a.createElement(
                            S.a,
                            { onPress: this._handleSkipButtonClick, size: 'large', type: 'primaryText' },
                            null === (e = c.skip_link) || void 0 === e ? void 0 : e.label,
                          )
                        : null,
                    m = d && !p ? f : h || f
                  return g.a.createElement(
                    he.a,
                    r()({}, i, { progressIndication: s, rightControl: m }),
                    g.a.createElement(
                      g.a.Fragment,
                      null,
                      g.a.createElement(
                        D.a,
                        { style: se.contentArea },
                        g.a.createElement(
                          ae,
                          r()({}, c.primary_text, {
                            nativeID: w.b,
                            onNavigate: o,
                            size: 'title4',
                            style: se.headline,
                            subtaskInputs: l,
                            weight: 'bold',
                          }),
                        ),
                        g.a.createElement(
                          ae,
                          r()({}, c.secondary_text, { color: 'gray700', onNavigate: o, subtaskInputs: l }),
                        ),
                        g.a.createElement(sn.a, {
                          Icon: vr.a,
                          autoComplete: 'off',
                          autoCorrect: !1,
                          autoFocus: !0,
                          errorText: u,
                          invalid: !!d && !p && !n,
                          label: c.hint || _r,
                          name: 'username',
                          onChange: this._handleUsernameUpdated,
                          showValidationIcon: !!d,
                          spellCheck: 'false',
                          style: se.formTextInput,
                          value: d,
                        }),
                        this._maybeRenderDetailTexts(),
                      ),
                    ),
                    this.props.errorDialog,
                  )
                },
              },
            ]),
            n
          )
        })(g.a.Component),
        kr = A.a.create(function (e) {
          return { detailLink: { marginTop: e.spaces.space16 } }
        }),
        wr = Object(Lt.a)(br(gr), { section: 'enter_username' }),
        Or = (n('LqLs'), n('87if'), n('lTEL'), n('kYxP'), n('hCOa'), n('v84o')),
        Er = n('8Lfv'),
        Cr = Object(Ge.a)()
          .propsFromActions(function () {
            return {
              clearTimelineCache: Er.a,
              createLocalApiErrorHandler: Object(Ke.createLocalApiErrorHandlerWithContextFactory)('OCF_GENERIC_URT'),
            }
          })
          .withAnalytics(),
        Sr = n('QIgh'),
        xr = n('5Y9N')
      function Ir(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function Pr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Ir(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Ir(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var jr = n('doI8'),
        Rr = n('BV3T'),
        Dr = n('VTxf'),
        Tr = n('fTQJ'),
        Ar = n('7JQg'),
        Fr = n('wgnn'),
        Br = n('gwY8'),
        Nr = n('ywYn'),
        Lr = n('855f'),
        Mr = n('cHvH'),
        Vr = n('oQhu'),
        Ur = (n('yH/f'), Object.freeze({ TopicFollowCount: 'topic_follow_count' }))
      function zr(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function Hr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? zr(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : zr(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function Wr(e) {
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
            a = b()(e)
          if (t) {
            var r = b()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return h()(this, n)
        }
      }
      var Gr = function (e) {
          switch (e) {
            case Fr.a.NOT_FOUND:
              return g.a.createElement(Dr.a, null)
            case Fr.a.NOT_ALLOWED:
              return g.a.createElement(Rr.a, null)
            default:
              return Object(Nt.a)('Unhandled timeline unavailable reason in Ocf GenericURT screen: '.concat(e)), null
          }
        },
        Kr = Object(Vr.a)(function (e) {
          return (function (e) {
            return Pr(Pr({}, Sr.b), Object(xr.a)({ isWide: e }))
          })(e)
        }),
        Yr = (function (e) {
          p()(n, e)
          var t = Wr(n)
          function n(e) {
            var a
            return (
              i()(this, n),
              (a = t.call(this, e)),
              y()(u()(a), '_isNextButtonEnabled', function () {
                var e,
                  t,
                  n = a.state.topicsFollowed,
                  r = a.props.subtask,
                  o = r.navigation_link_options,
                  i = (o = void 0 === o ? {} : o).max_enable_count,
                  s = o.min_enable_count,
                  c =
                    (null === (e = r.navigation_link_options) ||
                    void 0 === e ||
                    null === (t = e.count_subtask_data_reference) ||
                    void 0 === t
                      ? void 0
                      : t.key) === Ur.TopicFollowCount
                return s && i
                  ? c && n.size >= s && n.size <= i
                  : s && !i
                  ? c && n.size >= s
                  : !s && i
                  ? c && n.size <= i
                  : (!s && !i) || void 0
              }),
              y()(u()(a), '_renderThresholdDetailText', function (e, t) {
                for (
                  var n, o = a.props, i = o.onNavigate, s = o.subtaskInputs, c = -1, l = 0;
                  l < (null == e ? void 0 : e.length);
                  l++
                ) {
                  var u = e[l],
                    d = u.text,
                    p = u.threshold
                  p > c && p <= t && ((c = p), (n = d))
                }
                var f = a._isNextButtonEnabled() ? 'gray1100' : 'gray700',
                  h = a._isNextButtonEnabled() ? 'bold' : 'normal'
                return a.state.initialized && n
                  ? g.a.createElement(
                      D.a,
                      { style: Xr.detailText },
                      g.a.createElement(
                        T.b,
                        { color: f, size: 'subtext2', weight: h },
                        a._isNextButtonEnabled() ? null : Lr.a.getFormattedCount(t),
                        g.a.createElement(ae, r()({}, n, { color: f, onNavigate: i, subtaskInputs: s, weight: h })),
                      ),
                    )
                  : g.a.createElement(D.a, null)
              }),
              y()(
                u()(a),
                '_getModule',
                Object(Vr.a)(function (e) {
                  var t = a.props.subtask,
                    n = t.graphql_timeline_query,
                    r = t.timeline_source
                  return n
                    ? Object(jr.a)(n.timeline_key)
                    : Object(Or.a)({ urtUrl: { url: r || '', urlType: Nr.a.UrtEndpoint } })
                }),
              ),
              y()(u()(a), '_resetState', function () {
                a.setState({ topicsFollowed: new Set(), initialized: !1 })
              }),
              y()(u()(a), '_handleOnTopicInitialize', function (e, t) {
                a.setState(function (n) {
                  var a = Object(at.a)(Array.from(n.topicsFollowed))
                  return t ? a.add(e) : a.delete(e), { initialized: !0, topicsFollowed: a }
                })
              }),
              y()(u()(a), '_handleOnTopicFollow', function (e) {
                var t = Object(at.a)(Array.from(a.state.topicsFollowed))
                t.add(e), a.setState({ topicsFollowed: t })
              }),
              y()(u()(a), '_handleOnTopicUnfollow', function (e) {
                var t = Object(at.a)(Array.from(a.state.topicsFollowed))
                t.delete(e), a.setState({ topicsFollowed: t })
              }),
              y()(u()(a), '_handleNextButtonClick', function () {
                var e = a.props,
                  t = e.onNavigate,
                  n = e.subtask,
                  r = e.subtaskId
                ;(0, e.updateFlow)(r, { link: n.next_link.link_id }), t(n.next_link)
              }),
              y()(u()(a), '_clearTimelineCache', function () {
                var e = a.props,
                  t = e.clearTimelineCache,
                  n = e.createLocalApiErrorHandler,
                  r = e.subtask.graphql_timeline_query
                r && t(Object(jr.a)(r.timeline_key)).catch(n())
              }),
              (a.state = { topicsFollowed: new Set(), initialized: !1 }),
              a
            )
          }
          return (
            c()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.analytics,
                    n = e.subtask
                  t.scribe(Hr(Hr({}, n.scribe_config), {}, { action: 'impression' }))
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t = this.props,
                    n = t.analytics,
                    a = t.subtask,
                    r = t.subtaskId
                  e.subtaskId !== r &&
                    (this._resetState(),
                    this._clearTimelineCache(),
                    n.scribe(Hr(Hr({}, a.scribe_config), {}, { action: 'impression' })))
                },
              },
              {
                key: 'render',
                value: function () {
                  var e,
                    t,
                    n,
                    a,
                    o,
                    i,
                    s,
                    c = this,
                    l = this.props,
                    u = l.errorDialog,
                    d = l.onNavigate,
                    p = l.passthroughOcfScreenProps,
                    f = l.subtask,
                    h = l.subtaskId,
                    m = l.subtaskInputs,
                    b = this.state.topicsFollowed,
                    v = f.detail_rich_text_options,
                    y = (v = void 0 === v ? {} : v).label_conditional_text,
                    _ =
                      (null === (e = f.navigation_link_options) ||
                      void 0 === e ||
                      null === (t = e.count_subtask_data_reference) ||
                      void 0 === t
                        ? void 0
                        : t.key) === Ur.TopicFollowCount,
                    k = g.a.createElement(
                      S.a,
                      {
                        disabled: !this._isNextButtonEnabled(),
                        onPress: this._handleNextButtonClick,
                        size: 'large',
                        type: 'primaryFilled',
                      },
                      (null === (n = f.navigation_link_options) || void 0 === n ? void 0 : n.label_conditional_text) ||
                        f.next_link.label,
                    ),
                    O =
                      (null === (a = f.detail_rich_text_options) ||
                      void 0 === a ||
                      null === (o = a.count_subtask_data_reference) ||
                      void 0 === o
                        ? void 0
                        : o.key) === Ur.TopicFollowCount && y
                        ? g.a.createElement(
                            D.a,
                            { style: Xr.spaceBetween },
                            this._renderThresholdDetailText(y, b.size),
                            k,
                          )
                        : k,
                    E = g.a.createElement(
                      he.a,
                      r()({}, p, { rightControl: O }),
                      g.a.createElement(
                        D.a,
                        { style: se.contentArea },
                        null !== (i = f.header) && void 0 !== i && i.primary_text
                          ? g.a.createElement(
                              ae,
                              r()({}, f.header.primary_text, {
                                nativeID: w.b,
                                onNavigate: d,
                                size: 'title4',
                                style: se.headline,
                                subtaskInputs: m,
                                weight: 'bold',
                              }),
                            )
                          : null,
                        null !== (s = f.header) && void 0 !== s && s.secondary_text
                          ? g.a.createElement(
                              ae,
                              r()({}, f.header.secondary_text, {
                                onNavigate: d,
                                style: se.subHeader,
                                subtaskInputs: m,
                              }),
                            )
                          : null,
                        f.graphql_timeline_query || f.timeline_source
                          ? g.a.createElement(Mr.a, null, function (e) {
                              var t = e.windowWidth >= A.a.theme.breakpoints.small
                              return g.a.createElement(
                                Br.a.Provider,
                                {
                                  value: {
                                    onInitialize: _ ? c._handleOnTopicInitialize : Pe.a,
                                    onFollow: _ ? c._handleOnTopicFollow : Pe.a,
                                    onUnfollow: _ ? c._handleOnTopicUnfollow : Pe.a,
                                  },
                                },
                                g.a.createElement(Tr.a, {
                                  entryConfiguration: Kr(t),
                                  module: c._getModule(h),
                                  renderUnavailable: Gr,
                                  title: '',
                                  withoutHeadroom: !0,
                                }),
                              )
                            })
                          : null,
                      ),
                      u,
                    )
                  return f.scribe_config ? g.a.createElement(Ar.b, { namespace: f.scribe_config }, E) : E
                },
              },
            ]),
            n
          )
        })(g.a.Component),
        Xr = A.a.create(function (e) {
          return {
            detailText: { justifyContent: 'center' },
            spaceBetween: { flexDirection: 'row', justifyContent: 'space-between' },
          }
        }),
        qr = Cr(Yr),
        Zr = n('RhWx'),
        Jr = n.n(Zr),
        Qr = 'selected_custom_interests',
        $r = 'selected_interest_ids',
        eo = function (e, t) {
          var n = Object(yt.v)(e)
          return (Object(ee.e)(n, { key: Qr, subtask_id: t.subtaskId }, []) || []).map(function (e) {
            return { topic: e.custom_interest, ttt_token: e.ttt_token }
          })
        },
        to = Object(wt.createSelector)(
          eo,
          function (e, t) {
            return eo(e, t).map(function (e) {
              return e.topic
            })
          },
          function (e, t) {
            var n = Object(yt.v)(e)
            return Object(ee.e)(n, { key: $r, subtask_id: t.subtaskId }, []) || void 0
          },
          function (e, t, n) {
            return { initialCustomInterests: e, initialCustomInterestIds: t, initialSelectedInterestIds: n }
          },
        ),
        no = Object(kt.c)(to),
        ao = n('2dXj'),
        ro = n('aV/s'),
        oo = n('GZwR')
      function io(e) {
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
            a = b()(e)
          if (t) {
            var r = b()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return h()(this, n)
        }
      }
      var so = [oo.a.Topics],
        co = (function (e) {
          p()(n, e)
          var t = io(n)
          function n(e) {
            var a
            i()(this, n),
              (a = t.call(this, e)),
              y()(u()(a), '_maybeRenderCustomInterests', function () {
                var e = a.props.subtask.custom_interests_header,
                  t = a.state,
                  n = t.customInterests
                if (t.shouldRenderCustomInterests)
                  return g.a.createElement(
                    D.a,
                    null,
                    g.a.createElement(
                      D.a,
                      { style: lo.group, testID: 'custom' },
                      g.a.createElement(T.b, { size: 'headline1', style: lo.groupHeader, weight: 'bold' }, e),
                      g.a.createElement(
                        D.a,
                        { style: lo.pillsContainer },
                        n.map(function (e) {
                          return a._renderCustomInterest(e.topic)
                        }),
                      ),
                    ),
                  )
              }),
              y()(u()(a), '_renderGroup', function (e) {
                var t
                if (e.show_more) {
                  var n = e.show_more.initial_to_show + (e.expanded ? e.show_more.extra_to_show : 0)
                  t = e.items.slice(0, n)
                } else t = e.items
                return g.a.createElement(
                  D.a,
                  { key: 'group_'.concat(e.header), style: lo.group, testID: 'group' },
                  g.a.createElement(T.b, { size: 'headline1', style: lo.groupHeader, weight: 'bold' }, e.header),
                  g.a.createElement(
                    D.a,
                    { style: lo.pillsContainer },
                    t.map(a._renderSelectionPill),
                    a._maybeRenderShowMoreButton(e),
                  ),
                )
              }),
              y()(u()(a), '_maybeRenderShowMoreButton', function (e) {
                var t = e.show_more
                return t && e.items.length > t.initial_to_show && !e.expanded
                  ? g.a.createElement(ro.a, {
                      compact: !0,
                      key: 'showMore_'.concat(e.header),
                      mode: 'expand',
                      onClick: a._handleShowMore(e),
                      style: lo.selectionPillStyles,
                      text: t.text,
                    })
                  : null
              }),
              y()(u()(a), '_renderCustomInterest', function (e) {
                var t = a.state.selectedCustomInterestIds
                return g.a.createElement(ro.a, {
                  compact: !0,
                  key: 'selectionPill_'.concat(e),
                  onClick: a._handleToggleCustomInterest(e),
                  selected: t.has(e),
                  style: lo.selectionPillStyles,
                  text: e,
                })
              }),
              y()(u()(a), '_renderSelectionPill', function (e) {
                var t = a.state.selectedInterestIds.has(e.id),
                  n = a._handleToggleInterest(e.id, t)
                return g.a.createElement(ro.a, {
                  compact: !0,
                  key: 'selectionPill_'.concat(e.id),
                  onClick: n,
                  selected: t,
                  style: lo.selectionPillStyles,
                  text: e.name,
                })
              }),
              y()(u()(a), '_shouldShowSkipInstead', function () {
                var e = a.state,
                  t = e.selectedCustomInterestIds,
                  n = e.selectedInterestIds
                return a.props.subtask.skip_link && 0 === n.size && 0 === t.size
              }),
              y()(u()(a), '_handleSuggestionSelected', function (e) {
                var t = a.state,
                  n = t.customInterestIds,
                  r = t.selectedCustomInterestIds
                if (e.type === oo.b.Topic || e.type === oo.b.Hashtag) {
                  var o = e.data.topic,
                    i = { topic: o, ttt_token: void 0 }
                  n.has(o) ||
                    a.setState({
                      customInterests: a.state.customInterests.concat([i]),
                      customInterestIds: Object(at.a)(Jr()(n)).add(o),
                      selectedCustomInterestIds: Object(at.a)(Jr()(r)).add(o),
                      shouldRenderCustomInterests: !0,
                    })
                }
              }),
              y()(u()(a), '_handleShowMore', function (e) {
                return function () {
                  var t = a.state.groups,
                    n = t.find(function (t) {
                      return t.header === e.header
                    })
                  n && (n.expanded = !0), a.setState({ groups: t })
                }
              }),
              y()(u()(a), '_handleToggleCustomInterest', function (e) {
                return function () {
                  var t = Object(at.a)(Jr()(a.state.selectedCustomInterestIds))
                  t.has(e)
                    ? (t.delete(e), a.setState({ selectedCustomInterestIds: t }))
                    : a.setState({ selectedCustomInterestIds: t.add(e) })
                }
              }),
              y()(u()(a), '_handleToggleInterest', function (e, t) {
                return function () {
                  var n = Object(at.a)(Jr()(a.state.selectedInterestIds))
                  t
                    ? (n.delete(e), a.setState({ selectedInterestIds: n }))
                    : a.setState({ selectedInterestIds: n.add(e) })
                }
              }),
              y()(u()(a), '_handleNextButtonClick', function () {
                var e = a.props,
                  t = e.onNavigate,
                  n = e.subtask,
                  r = e.subtaskId,
                  o = e.updateFlow,
                  i = a.state,
                  s = i.customInterests,
                  c = i.selectedCustomInterestIds,
                  l = s.reduce(function (e, t) {
                    return c.has(t.topic) && e.push({ custom_interest: t.topic, ttt_token: t.ttt_token }), e
                  }, [])
                o(r, {
                  link: n.next_link.link_id,
                  selected_interest_ids: Array.from(a.state.selectedInterestIds),
                  selected_custom_interests: l,
                }),
                  t(n.next_link)
              }),
              y()(u()(a), '_handleSkipButtonClick', function () {
                var e = a.props,
                  t = e.onNavigate,
                  n = e.subtask,
                  r = e.subtaskId,
                  o = e.updateFlow
                n.skip_link && o(r, { link: n.skip_link.link_id }), n.skip_link && t(n.skip_link)
              })
            var r = e.initialCustomInterestIds,
              o = e.initialCustomInterests,
              s = e.initialSelectedInterestIds,
              c = e.subtask.selected_items
            return (
              (a.state = {
                groups: e.subtask.groups || [],
                customInterests: Jr()(o),
                customInterestIds: Object(at.a)(r),
                selectedCustomInterestIds: Object(at.a)(r),
                selectedInterestIds: s && s.length > 0 ? Object(at.a)(s) : Object(at.a)(c || []),
                shouldRenderCustomInterests: o.length > 0,
              }),
              a
            )
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e,
                    t = this.props,
                    n = t.onNavigate,
                    a = t.passthroughOcfScreenProps,
                    o = t.subtask,
                    i = t.subtaskInputs,
                    s = this.state.groups,
                    c = g.a.createElement(
                      S.a,
                      { onPress: this._handleNextButtonClick, size: 'large', type: 'primaryFilled' },
                      o.next_link.label,
                    ),
                    l =
                      o.skip_link && o.skip_link.label
                        ? g.a.createElement(
                            S.a,
                            { onPress: this._handleSkipButtonClick, size: 'large', type: 'primaryText' },
                            null === (e = o.skip_link) || void 0 === e ? void 0 : e.label,
                          )
                        : null,
                    u = this._shouldShowSkipInstead() ? l : c
                  return g.a.createElement(
                    he.a,
                    r()({}, a, { rightControl: u }),
                    g.a.createElement(
                      D.a,
                      { style: se.contentArea },
                      o.primary_text
                        ? g.a.createElement(
                            ae,
                            r()({}, o.primary_text, {
                              nativeID: w.b,
                              onNavigate: n,
                              size: 'title4',
                              style: se.headline,
                              subtaskInputs: i,
                              weight: 'bold',
                            }),
                          )
                        : null,
                      o.secondary_text
                        ? g.a.createElement(
                            ae,
                            r()({}, o.secondary_text, { onNavigate: n, style: se.subHeader, subtaskInputs: i }),
                          )
                        : null,
                      o.hide_search
                        ? null
                        : g.a.createElement(
                            D.a,
                            { style: lo.searchContainer },
                            g.a.createElement(ao.c, {
                              filter: so,
                              maxTopics: 8,
                              onItemClick: this._handleSuggestionSelected,
                              placeholder: o.hint,
                              rounded: !0,
                              shouldAutoFocus: !0,
                              shouldClearOnSelect: !0,
                              source: oo.d.WelcomeFlow,
                              withFocusStyling: !0,
                            }),
                          ),
                      this._maybeRenderCustomInterests(),
                      g.a.createElement(D.a, null, s.map(this._renderGroup)),
                    ),
                    this.props.errorDialog,
                  )
                },
              },
            ]),
            n
          )
        })(g.a.Component),
        lo = A.a.create(function (e) {
          return {
            searchContainer: { marginBottom: e.spaces.space16, zIndex: 1 },
            selectionPillStyles: { margin: e.spaces.space4 },
            pillsContainer: { flexDirection: 'row', flexWrap: 'wrap' },
            groupHeader: { marginTop: e.spaces.space12, marginBottom: e.spaces.space12 },
            group: { marginBottom: e.spaces.space12 },
          }
        }),
        uo = no(co),
        po = n('Ukpf'),
        fo = n('Qwev')
      function ho(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function mo(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ho(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ho(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var bo = function (e) {
          var t = g.a.useState(!1),
            n = R()(t, 2),
            a = n[0],
            r = n[1],
            o = g.a.useRef(null),
            i = e || {},
            s = i.onNavigate,
            c = i.subtask,
            l = c.next_link,
            u = c.timeout_ms,
            d = void 0 === u ? 2e3 : u,
            p = c.url,
            f = i.subtaskId,
            h = i.updateFlow,
            m = g.a.useCallback(
              function () {
                var e = Math.min(100, d),
                  t = 0,
                  n = setInterval(function () {
                    var a = o.current && o.current.value ? { response: o.current.value } : void 0
                    ;(t += e), (a || t >= d) && (clearInterval(n), h(f, mo(mo({}, a), {}, { link: l.link_id })), s(l))
                  }, e)
                return n
              },
              [l, s, h, f, d],
            )
          return (
            g.a.useEffect(
              function () {
                var e
                return (
                  r(!1),
                  po.a.replace({
                    callback: function () {
                      r(!0), (e = m())
                    },
                    scriptId: 'jsInstLibrary',
                    src: p,
                  }),
                  function () {
                    return clearInterval(e)
                  }
                )
              },
              [m, p],
            ),
            g.a.createElement(
              g.a.Fragment,
              null,
              g.a.createElement('input', {
                autoComplete: 'off',
                'data-testid': 'tim_input',
                id: 'tim_input',
                name: 'ui_metrics',
                ref: o,
                type: 'hidden',
              }),
              a ? null : g.a.createElement(fo.a, { style: vo.activityIndicator }),
            )
          )
        },
        vo = A.a.create(function (e) {
          return { activityIndicator: { height: '100%' } }
        }),
        yo = n('mjJ+')
      function _o(e) {
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
            a = b()(e)
          if (t) {
            var r = b()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return h()(this, n)
        }
      }
      var go = (function (e) {
          p()(n, e)
          var t = _o(n)
          function n() {
            var e
            i()(this, n)
            for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              y()(u()(e), '_makeNavFunction', function (t) {
                return function () {
                  var n = e.props,
                    a = n.onNavigate,
                    r = n.subtaskId
                  ;(0, n.updateFlow)(r, { link: t.link_id }), a(t)
                }
              }),
              y()(u()(e), '_itemFromNavLink', function (t) {
                return { text: t.label || '', onClick: e._makeNavFunction(t) }
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.onNavigate,
                    n = e.subtask,
                    a = e.subtaskInputs
                  return g.a.createElement(yo.a, {
                    cancelButtonLabel: n.cancel_link && n.cancel_link.text,
                    description: n.primary_text
                      ? g.a.createElement(
                          ae,
                          r()({}, n.primary_text, {
                            nativeID: w.b,
                            onNavigate: t,
                            style: { padding: A.a.theme.spacesPx.space16 },
                            subtaskInputs: a,
                          }),
                        )
                      : null,
                    items: n.primary_action_links.map(this._itemFromNavLink),
                    onCloseRequested: n.cancel_link ? this._makeNavFunction(n.cancel_link) : Pe.a,
                  })
                },
              },
            ]),
            n
          )
        })(g.a.Component),
        ko = n('vEo5'),
        wo = Object(wt.createSelector)(
          ko.selectShouldPromptBrowserPush,
          function (e) {
            return ko.selectBrowserPushStatus(e)
          },
          function (e, t) {
            return { promptAllowed: e, pushSettingsFetchStatus: t.fetchStatus, subscribed: t.subscribed }
          },
        ),
        Oo = {
          createLocalApiErrorHandler: Object(Ke.createLocalApiErrorHandlerWithContextFactory)(
            'NOTIFICATIONS_PERMISSIONS_PROMPT',
          ),
          dismissPushNotificationsPrompt: ko.dismissPushNotificationsPrompt,
          fetchPushSettingsIfNeeded: ko.fetchPushSettingsIfNeeded,
          loadPushPromptSettingsIfNeeded: ko.loadPushPromptSettingsIfNeeded,
          pushSubscribe: ko.pushSubscribe,
        },
        Eo = Object(kt.g)(wo, Oo),
        Co = n('5pef')
      function So(e) {
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
            a = b()(e)
          if (t) {
            var r = b()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return h()(this, n)
        }
      }
      function xo(e, t) {
        e.granted_link.label ||
          Object(Nt.a)('Invalid notification permission prompt subtask: granted_link does not have a label', {
            extra: { subtaskId: t, grantedLinkId: e.granted_link.link_id },
          })
      }
      var Io = Eo(
          (function (e) {
            p()(n, e)
            var t = So(n)
            function n() {
              var e
              i()(this, n)
              for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o]
              return (
                (e = t.call.apply(t, [this].concat(r))),
                y()(u()(e), '_actionClicked', function (t) {
                  var n = e.props,
                    a = n.onNavigate,
                    r = n.subtaskId
                  ;(0, n.updateFlow)(r, { link: t.link_id }), a(t)
                }),
                y()(u()(e), '_handleSkip', function () {
                  var t = e.props,
                    n = t.dismissPushNotificationsPrompt,
                    a = t.subtask
                  n(), e._actionClicked(a.denied_link)
                }),
                y()(u()(e), '_handleConfirm', function () {
                  var t = e.props,
                    n = t.pushSubscribe,
                    a = t.subtask
                  n().then(function () {
                    e._actionClicked(a.granted_link)
                  })
                }),
                y()(u()(e), '_skipIfPushPromptNotAllowed', function () {
                  var t = e.props,
                    n = t.promptAllowed,
                    a = t.subscribed,
                    r = t.subtask
                  n || e._actionClicked(a ? r.granted_link : r.denied_link)
                }),
                e
              )
            }
            return (
              c()(n, [
                {
                  key: 'componentDidMount',
                  value: function () {
                    var e = this.props,
                      t = e.createLocalApiErrorHandler,
                      n = e.fetchPushSettingsIfNeeded,
                      a = e.pushSettingsFetchStatus
                    xo(e.subtask, e.subtaskId),
                      n().catch(t(y()({}, cn.a.AppInReadOnlyMode, { customAction: Pe.a }))),
                      a === Xe.a.LOADED && this._skipIfPushPromptNotAllowed()
                  },
                },
                {
                  key: 'componentDidUpdate',
                  value: function (e) {
                    var t = this.props,
                      n = t.pushSettingsFetchStatus,
                      a = t.subtask
                    n === Xe.a.LOADED &&
                      e.pushSettingsFetchStatus !== Xe.a.LOADED &&
                      this._skipIfPushPromptNotAllowed(),
                      a !== e.subtask && xo(a, this.props.subtaskId)
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var e = this.props,
                      t = e.onNavigate,
                      n = e.passthroughOcfScreenProps,
                      a = e.promptAllowed,
                      o = e.subtask,
                      i = e.subtaskInputs,
                      s = o.primary_text
                        ? g.a.createElement(
                            ae,
                            r()({}, o.primary_text, { nativeID: w.b, onNavigate: t, subtaskInputs: i }),
                          )
                        : null,
                      c = o.secondary_text
                        ? g.a.createElement(ae, r()({}, o.secondary_text, { onNavigate: t, subtaskInputs: i }))
                        : null
                    return a && o.granted_link.label
                      ? g.a.createElement(
                          he.a,
                          r()({ hideLogo: !0 }, n),
                          g.a.createElement(je.a, {
                            actionLabel: o.granted_link.label,
                            graphic: Co.a,
                            headline: s,
                            onAction: this._handleConfirm,
                            onClose: this._handleSkip,
                            onTertiaryAction: this._handleSkip,
                            subtext: c,
                            tertiaryActionLabel: o.denied_link.label,
                            withCloseButton: !1,
                          }),
                        )
                      : null
                  },
                },
              ]),
              n
            )
          })(g.a.Component),
        ),
        Po = {
          callOnboardingPath: yt.b,
          createLocalApiErrorHandler: Object(Ke.createLocalApiErrorHandlerWithContextFactory)('OCF_OPEN_LINK'),
        }
      function jo(e) {
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
            a = b()(e)
          if (t) {
            var r = b()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return h()(this, n)
        }
      }
      var Ro = Object(kt.b)(Po)(
          (function (e) {
            p()(n, e)
            var t = jo(n)
            function n() {
              var e
              i()(this, n)
              for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o]
              return (
                (e = t.call.apply(t, [this].concat(r))),
                y()(u()(e), '_hitCallbackPath', function () {
                  var t = e.props,
                    n = t.callOnboardingPath,
                    a = t.createLocalApiErrorHandler,
                    r = t.flowName,
                    o = t.subtask.onboarding_callback_path
                  return o ? n(o).catch(a(mn(r, void 0, Pe.a))) : Promise.resolve()
                }),
                e
              )
            }
            return (
              c()(n, [
                {
                  key: 'render',
                  value: function () {
                    var e = this.props,
                      t = e.onNavigate,
                      n = e.subtask,
                      a = e.subtaskId
                    return g.a.createElement(Qe, {
                      navigationLink: n.link,
                      onNavigate: t,
                      subtaskAction: this._hitCallbackPath,
                      subtaskId: a,
                    })
                  },
                },
              ]),
              n
            )
          })(g.a.Component),
        ),
        Do = n('TpKd'),
        To = Object(wt.createSelector)(yt.o, yt.x, function (e, t) {
          return { navigationContext: e, verificationSendFailureMessage: t }
        }),
        Ao = {
          createLocalApiErrorHandler: Object(Ke.createLocalApiErrorHandlerWithContextFactory)(
            'OCF_FLOW_PHONE_VERIFICATION',
          ),
          verifyIdentifier: yt.B,
        },
        Fo = Object(kt.g)(To, Ao)
      function Bo(e) {
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
            a = b()(e)
          if (t) {
            var r = b()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return h()(this, n)
        }
      }
      var No = 'normalized_phone',
        Lo = (function (e) {
          p()(n, e)
          var t = Bo(n)
          function n(e, a) {
            var r
            i()(this, n),
              (r = t.call(this, e, a)),
              y()(u()(r), '_sendSmsVerificationRequest', function () {
                var e = r.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.navigationContext,
                  a = e.onNavigate,
                  o = e.subtask,
                  i = e.subtaskInputs,
                  s = e.verifyIdentifier,
                  c = o.phone_number && Object(ee.g)(i, o.phone_number),
                  l = o.phone_country_code && Object(ee.g)(i, o.phone_country_code),
                  u = n && n.action ? n.action === k.z.ResendVoice : !!o.send_via_voice
                return (
                  r._isSmsAutoVerifyEnabled && r._autoVerifySmsCode(),
                  s({
                    phone: c,
                    use_voice: u,
                    sim_country_code: l,
                    send_auto_verify_hash:
                      r._isSmsAutoVerifyEnabled ||
                      (r._isSmsAutoVerifySupported &&
                        r.context.featureSwitches.isTrue('responsive_web_ocf_sms_autoverify_darkwrite')),
                  })
                    .then(function (e) {
                      var t = e.normalized_phone_number
                      t && r.setState({ normalized_phone: t })
                    })
                    .catch(function (e) {
                      var n = r.props,
                        i = n.flowName,
                        s = n.verificationSendFailureMessage
                      t(mn(i, s || fn))(e), a(o.fail_link)
                    })
                )
              }),
              y()(u()(r), '_handleCodeUpdated', function (e) {
                r.setState({ code: e.target.value })
              }),
              y()(u()(r), '_autoVerifySmsCode', function () {
                var e,
                  t = r.props.analytics
                t.scribe({ element: 'auto', action: 'attempt' }),
                  window.navigator.credentials
                    .get({
                      otp: { transport: ['sms'] },
                      signal: null === (e = r._smsAutoVerifyAbortController) || void 0 === e ? void 0 : e.signal,
                    })
                    .then(function (e) {
                      var n = e.code
                      n
                        ? ((r._smsAutoVerifyAbortController = void 0),
                          r.setState({ code: n }, function () {
                            t.scribe({ element: 'auto', action: 'success' }), r._handleDoneButtonClick()
                          }))
                        : t.scribe({ element: 'auto', action: 'missing' })
                    })
                    .catch(function () {
                      t.scribe({ element: 'auto', action: 'failure' })
                    })
              }),
              y()(u()(r), '_handleDoneButtonClick', function () {
                var e = r.props,
                  t = e.onNavigate,
                  n = e.subtask,
                  a = e.subtaskId,
                  o = e.updateFlow,
                  i = r.state,
                  s = i.code,
                  c = i.normalized_phone
                o(a, { code: s, link: n.next_link.link_id, normalized_phone: c, by_voice: !!n.send_via_voice }),
                  t(n.next_link)
              })
            var o = e.subtaskId,
              s = e.subtaskInputs,
              c = Object(ee.e)(s, { key: No, subtask_id: o }, '') || ''
            return (
              (r.state = { code: '', normalized_phone: c, showSmsResendDialog: !1 }),
              (r._isSmsAutoVerifySupported = 'OTPCredential' in window),
              (r._isSmsAutoVerifyEnabled =
                r._isSmsAutoVerifySupported &&
                r.context.featureSwitches.isTrue('responsive_web_ocf_sms_autoverify_enabled')),
              r._isSmsAutoVerifyEnabled && (r._smsAutoVerifyAbortController = new AbortController()),
              r
            )
          }
          return (
            c()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  return this._sendSmsVerificationRequest()
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._smsAutoVerifyAbortController &&
                    (this._smsAutoVerifyAbortController.abort(),
                    this.props.analytics.scribe({ element: 'auto', action: 'abort' }))
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.onNavigate,
                    n = e.passthroughOcfScreenProps,
                    a = e.progressIndication,
                    o = e.subtask,
                    i = e.subtaskInputs,
                    s = g.a.createElement(
                      S.a,
                      {
                        disabled: !this.state.code,
                        onPress: this._handleDoneButtonClick,
                        size: 'large',
                        type: 'primaryFilled',
                      },
                      o.next_link.label,
                    ),
                    c = g.a.createElement(
                      ae,
                      r()({}, o.detail_text, { color: 'link', onNavigate: t, style: Mo.detailLink, subtaskInputs: i }),
                    )
                  return g.a.createElement(
                    he.a,
                    r()({}, n, { progressIndication: a, rightControl: s }),
                    g.a.createElement(
                      D.a,
                      { style: se.contentArea },
                      g.a.createElement(
                        ae,
                        r()({}, o.primary_text, {
                          nativeID: w.b,
                          onNavigate: t,
                          size: 'title4',
                          style: se.headline,
                          subtaskInputs: i,
                          weight: 'bold',
                        }),
                      ),
                      g.a.createElement(
                        ae,
                        r()({}, o.secondary_text, { color: 'gray700', onNavigate: t, subtaskInputs: i }),
                      ),
                      g.a.createElement(sn.a, {
                        autoComplete: 'one-time-code',
                        autoFocus: !0,
                        helperText: c,
                        inputMode: 'numeric',
                        label: o.hint_text,
                        name: 'verfication_code',
                        onChange: this._handleCodeUpdated,
                        pattern: '\\d{6}',
                        style: se.formTextInput,
                        value: this.state.code,
                      }),
                    ),
                    this.props.errorDialog,
                  )
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      y()(Lo, 'contextType', $e.a)
      var Mo = A.a.create(function (e) {
          return { detailLink: { marginTop: e.spaces.space16 } }
        }),
        Vo = Object(Lt.a)(Fo(Lo), { component: 'phone_verification' })
      function Uo(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function zo(e) {
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
            a = b()(e)
          if (t) {
            var r = b()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return h()(this, n)
        }
      }
      var Ho = 'discoverable_by_email',
        Wo = 'discoverable_by_phone',
        Go = (function (e) {
          p()(n, e)
          var t = zo(n)
          function n(e) {
            var a
            i()(this, n),
              (a = t.call(this, e)),
              y()(u()(a), '_formatSubtaskInputsForRedux', function (e) {
                return {
                  link: a.props.subtask.next_link,
                  discoverable_by_email: e.discoverable_by_email ? 1 : 0,
                  discoverable_by_phone: e.discoverable_by_phone ? 1 : 0,
                }
              }),
              y()(u()(a), '_getInitialSubtaskInputs', function () {
                var e = a.props,
                  t = e.subtaskId,
                  n = e.subtaskInputs
                return {
                  discoverable_by_email: 0 !== Object(ee.e)(n, { key: Ho, subtask_id: t }),
                  discoverable_by_phone: 0 !== Object(ee.e)(n, { key: Wo, subtask_id: t }),
                }
              }),
              y()(u()(a), '_handleDoneButtonClick', function () {
                var e = a.props,
                  t = e.onNavigate,
                  n = e.subtask,
                  r = e.subtaskId
                ;(0, e.updateFlow)(r, a._formatSubtaskInputsForRedux(a.state)), t(n.next_link)
              }),
              y()(u()(a), '_handleDiscoverableByEmailToggle', function (e) {
                a.setState({ discoverable_by_email: e })
              }),
              y()(u()(a), '_handleDiscoverableByPhoneToggle', function (e) {
                a.setState({ discoverable_by_phone: e })
              })
            var r = a._getInitialSubtaskInputs()
            return (
              (a.state = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {}
                  t % 2
                    ? Uo(Object(n), !0).forEach(function (t) {
                        y()(e, t, n[t])
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                    : Uo(Object(n)).forEach(function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                      })
                }
                return e
              })({}, r)),
              a
            )
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.state,
                    t = e.discoverable_by_email,
                    n = e.discoverable_by_phone,
                    a = this.props,
                    o = a.onNavigate,
                    i = a.passthroughOcfScreenProps,
                    s = a.subtask,
                    c = a.subtaskInputs,
                    l = s.secondary_text
                      ? g.a.createElement(T.b, { size: 'title4', style: se.headline, weight: 'bold' }, s.secondary_text)
                      : null,
                    u = g.a.createElement(
                      S.a,
                      { onPress: this._handleDoneButtonClick, size: 'large', type: 'primaryFilled' },
                      s.next_link.label,
                    )
                  return g.a.createElement(
                    he.a,
                    r()({}, i, { rightControl: u }),
                    g.a.createElement(
                      D.a,
                      { style: se.contentArea },
                      g.a.createElement(T.b, { nativeID: w.b, style: A.a.visuallyHidden }, s.primary_text),
                      g.a.createElement(T.b, { size: 'title4', style: se.headline, weight: 'bold' }, l),
                      g.a.createElement(
                        D.a,
                        { accessibilityRole: 'label', style: se.option },
                        g.a.createElement(
                          D.a,
                          { style: se.checkboxText },
                          g.a.createElement(T.b, null, s.discoverable_by_email_label),
                          g.a.createElement(
                            ae,
                            r()({}, s.discoverable_by_email_detail_text, {
                              color: 'gray700',
                              onNavigate: o,
                              size: 'subtext2',
                              subtaskInputs: c,
                            }),
                          ),
                        ),
                        g.a.createElement(ct.a, { checked: t, onChange: this._handleDiscoverableByEmailToggle }),
                      ),
                      g.a.createElement(
                        D.a,
                        { accessibilityRole: 'label', style: se.option },
                        g.a.createElement(
                          D.a,
                          { style: se.checkboxText },
                          g.a.createElement(T.b, null, s.discoverable_by_phone_label),
                          g.a.createElement(
                            ae,
                            r()({}, s.discoverable_by_phone_detail_text, {
                              color: 'gray700',
                              onNavigate: o,
                              size: 'subtext2',
                              subtaskInputs: c,
                            }),
                          ),
                        ),
                        g.a.createElement(ct.a, { checked: n, onChange: this._handleDiscoverableByPhoneToggle }),
                      ),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(g.a.Component),
        Ko =
          (n('WmpB'),
          n('QliG'),
          n('XYSm'),
          n('/9A7'),
          n('HcE/'),
          n('Uj98'),
          n('gp7C'),
          n('GU6o'),
          n('aacc'),
          n('ZVwl'),
          n('SgSm'),
          n('8ooc'),
          n('0NMN'),
          n('2dnG'),
          n('fecs'),
          n('U/yR'),
          n('i3m+'),
          n('6JDI'),
          n('VsJa'),
          n('PEyR'),
          n('nndn'),
          n('eEZx'),
          n('zsxB'),
          n('2c7d'),
          n('slc3'),
          n('YeIG'))
      function Yo(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function Xo(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Yo(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Yo(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function qo(e) {
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
            a = b()(e)
          if (t) {
            var r = b()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return h()(this, n)
        }
      }
      var Zo = function (e) {
          var t,
            n = (t = e).replace(/-/g, '+').replace(/_/g, '/') + '===='.substring(0, (4 - (t.length % 4)) % 4),
            a = window.atob(n)
          return new Uint8Array(a.length).map(function (e, t) {
            return a.charCodeAt(t)
          }).buffer
        },
        Jo = function (e) {
          var t = new Uint8Array(e),
            n = ''
          return (
            t.forEach(function (e) {
              return (n += String.fromCharCode(e))
            }),
            btoa(n).replace(/\+/g, '-').replace(/(\/)/g, '_').replace(/=/g, '')
          )
        },
        Qo = function (e) {
          return e.map(function (e) {
            return { type: 'public-key', id: Zo(e.id) }
          })
        },
        $o = (function (e) {
          p()(n, e)
          var t = qo(n)
          function n() {
            var e
            i()(this, n)
            for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              y()(
                u()(e),
                '_supportsWebAuthn',
                !!window.PublicKeyCredential &&
                  'function' == typeof window.PublicKeyCredential &&
                  'function' == typeof window.PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable,
              ),
              y()(u()(e), '_navigateAndUpdate', function (t, n) {
                var a = e.props,
                  r = a.onNavigate,
                  o = a.subtaskId,
                  i = a.updateFlow
                n && i(o, { challenge_response: n, link: t.link_id }), r(t)
              }),
              y()(u()(e), '_triggerWebAuthn', function (t) {
                var n = e.props.subtask,
                  a = n.challenge,
                  r = n.fail_link,
                  o = n.next_link
                e._getCredentialsRequest(a, t)()
                  .then(function (n) {
                    if (n) {
                      var a = e._getFinalResult(n, t)
                      e._navigateAndUpdate(o, a)
                    } else;
                  })
                  .catch(function () {
                    e._navigateAndUpdate(r)
                  })
              }),
              y()(u()(e), '_getCredentialsRequest', function (e, t) {
                var n = JSON.parse(e)
                if (t === k.r.enrollment) {
                  var a = {
                    publicKey: {
                      challenge: Zo(n.challenge),
                      rp: n.rp,
                      user: Xo(Xo({}, n.user), {}, { id: Zo(n.user.id) }),
                      pubKeyCredParams: n.pubKeyCredParams,
                      attestation: n.attestation,
                      excludeCredentials: n.excludeCredentials.map(function (e) {
                        return Xo(Xo({}, e), {}, { id: Zo(e.id) })
                      }),
                      extensions: n.extensions,
                      timeout: 6e4,
                      authenticatorSelection: {
                        authenticatorAttachment: 'cross-platform',
                        userVerification: 'discouraged',
                      },
                    },
                  }
                  return function () {
                    var e
                    return (
                      (null === (e = navigator.credentials) || void 0 === e ? void 0 : e.create(a)) || Promise.resolve()
                    )
                  }
                }
                var r = n.publicKeyCredentialRequestOptions,
                  o = {
                    publicKey: {
                      rpId: 'twitter.com',
                      extensions: { appid: r.extensions.appid },
                      challenge: Zo(r.challenge),
                      userVerification: 'discouraged',
                      timeout: 6e4,
                      allowCredentials: Qo(r.allowCredentials),
                    },
                  }
                return function () {
                  var e
                  return (null === (e = navigator.credentials) || void 0 === e ? void 0 : e.get(o)) || Promise.resolve()
                }
              }),
              y()(u()(e), '_getFinalResult', function (e, t) {
                var n,
                  a = e.id,
                  r = e.response,
                  o = e.type
                return (
                  'enrollment' === t && r.attestationObject
                    ? (n = {
                        id: a,
                        type: o,
                        response: { clientDataJSON: Jo(r.clientDataJSON), attestationObject: Jo(r.attestationObject) },
                        clientExtensionResults: {},
                      })
                    : 'verification' === t &&
                      r.authenticatorData &&
                      (n = {
                        id: a,
                        type: o,
                        response: {
                          clientDataJSON: Jo(r.clientDataJSON),
                          authenticatorData: Jo(r.authenticatorData),
                          signature: Jo(r.signature),
                          userHandle: '',
                        },
                        clientExtensionResults: { appid: !0 },
                      }),
                  JSON.stringify(n || '')
                )
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props.subtask,
                    t = e.action_type,
                    n = e.unsupported_link
                  this._supportsWebAuthn
                    ? Object(Ko.a)(this.props.errorDialog) && this._triggerWebAuthn(t)
                    : n && this._navigateAndUpdate(n)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.errorDialog,
                    n = e.onNavigate,
                    a = e.passthroughOcfScreenProps,
                    o = e.subtask,
                    i = e.subtaskInputs
                  return g.a.createElement(
                    he.a,
                    a,
                    t ||
                      g.a.createElement(
                        D.a,
                        { style: se.contentArea },
                        this._supportsWebAuthn
                          ? null
                          : g.a.createElement(
                              ae,
                              r()({}, o.unsupported_error_message, { onNavigate: n, subtaskInputs: i }),
                            ),
                      ),
                  )
                },
              },
            ]),
            n
          )
        })(g.a.Component),
        ei = n('LCtV'),
        ti = n('AspN'),
        ni = n('53j7'),
        ai = Object(wt.createSelector)(
          gt.e.selectLoggedInUser,
          function (e, t) {
            var n = ni.h(e),
              a = n ? ti.k(e, n) : []
            return R()(a, 1)[0]
          },
          function (e, t) {
            return { loggedInUser: e, avatarMedia: t }
          },
        ),
        ri = { addAvatarMedia: ni.a, removeAvatarMedia: ni.d },
        oi = Object(kt.g)(ai, ri),
        ii = n('fS8x'),
        si = n('P68U'),
        ci = n('eyty'),
        li = 'ocfSelectAvatarSkipForNowButton',
        ui = 'ocfSelectAvatarNextButton'
      function di(e) {
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
            a = b()(e)
          if (t) {
            var r = b()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return h()(this, n)
        }
      }
      var pi = (function (e) {
          p()(n, e)
          var t = di(n)
          function n(e) {
            var a
            return (
              i()(this, n),
              (a = t.call(this, e)),
              y()(u()(a), '_handleCropDone', function () {
                return a.setState({ done: !0, showCropper: !1 })
              }),
              y()(u()(a), '_handleCropCancel', function () {
                return a._handleCropDone()
              }),
              y()(u()(a), '_handleImageMediaChange', function (e) {
                ;(0, a.props.addAvatarMedia)(e[0]), a.setState({ mediaId: e[0], showCropper: !0, done: !0 })
              }),
              y()(u()(a), '_handleImageMediaFailure', function () {
                a._handleSkipButtonClick()
              }),
              y()(u()(a), '_handleImageMediaRemove', function () {
                ;(0, a.props.removeAvatarMedia)(), a.setState({ done: !1, showCropper: !1 })
              }),
              y()(u()(a), '_handleDoneButtonClick', function () {
                var e = a.props,
                  t = e.onNavigate,
                  n = e.subtask,
                  r = e.subtaskId
                ;(0, e.updateFlow)(r, { link: n.next_link.link_id }), t(n.next_link)
              }),
              y()(u()(a), '_handleSkipButtonClick', function () {
                var e = a.props,
                  t = e.onNavigate,
                  n = e.subtask.skip_link,
                  r = e.subtaskId,
                  o = e.updateFlow
                n && o(r, { link: n.link_id }), n && t(n)
              }),
              (a.state = { done: !1, showCropper: !1, mediaId: void 0 }),
              a
            )
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.errorDialog,
                    n = e.onNavigate,
                    a = e.passthroughOcfScreenProps,
                    o = e.subtask,
                    i = e.subtaskInputs,
                    s = o.next_link,
                    c = o.primary_text,
                    l = o.secondary_text,
                    u = o.skip_link,
                    d = g.a.createElement(
                      S.a,
                      {
                        disabled: !u && !this.state.mediaId,
                        onPress: this._handleDoneButtonClick,
                        size: 'large',
                        testID: ui,
                        type: 'primaryFilled',
                      },
                      s.label,
                    ),
                    p =
                      u &&
                      g.a.createElement(
                        S.a,
                        { onPress: this._handleSkipButtonClick, size: 'large', testID: li, type: 'primaryText' },
                        u.label,
                      )
                  return g.a.createElement(
                    he.a,
                    r()({}, a, { rightControl: this.state.done || !u ? d : p }),
                    g.a.createElement(
                      D.a,
                      { style: se.contentArea },
                      c
                        ? g.a.createElement(
                            ae,
                            r()({}, c, {
                              nativeID: w.b,
                              onNavigate: n,
                              size: 'title4',
                              style: se.headline,
                              subtaskInputs: i,
                              weight: 'bold',
                            }),
                          )
                        : null,
                      l
                        ? g.a.createElement(
                            ae,
                            r()({}, o.secondary_text, { color: 'gray700', onNavigate: n, subtaskInputs: i }),
                          )
                        : null,
                      this._renderMediaPickerWithPreview(),
                    ),
                    this.state.showCropper && void 0 !== this.state.mediaId
                      ? g.a.createElement(ii.a, {
                          circle: !0,
                          defaultAspectRatio: 1,
                          mediaId: this.state.mediaId,
                          onCancel: this._handleCropCancel,
                          onDone: this._handleCropDone,
                        })
                      : null,
                    t,
                  )
                },
              },
              {
                key: '_renderMediaPickerWithPreview',
                value: function () {
                  var e = this.props,
                    t = e.avatarMedia,
                    n = e.loggedInUser,
                    a = this.state.done
                  return g.a.createElement(
                    D.a,
                    { style: fi.centerContent },
                    g.a.createElement(si.default, {
                      borderRadius: ei.a.INFINITE,
                      currentContent: n
                        ? g.a.createElement(Ae.a, { size: 'custom', uri: n.profile_image_url_https })
                        : null,
                      location: ci.d.Avatar,
                      mediaItem: t,
                      onChange: this._handleImageMediaChange,
                      onFailure: this._handleImageMediaFailure,
                      onRemove: a ? this._handleImageMediaRemove : void 0,
                      rootStyle: fi.avatarContainer,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(g.a.Component),
        fi = A.a.create(function (e) {
          return {
            avatarContainer: {
              borderWidth: e.borderWidths.medium,
              borderColor: e.colors.white,
              borderStyle: 'solid',
              marginTop: e.spaces.space64,
              marginBottom: e.spaces.space64,
              width: 'calc('.concat(e.spaces.space64, ' * 3)'),
            },
            bannerContainer: { marginTop: e.spaces.space64, marginBottom: e.spaces.space64, maxHeight: '9em' },
            banner: { height: '100%' },
            centerContent: { alignItems: 'center', display: 'flex', width: '100%' },
          }
        }),
        hi = oi(pi),
        mi = n('I/ms'),
        bi = Object(wt.createSelector)(
          gt.e.selectLoggedInUser,
          function (e, t) {
            var n = ni.h(e),
              a = n ? ti.k(e, n) : []
            return R()(a, 1)[0]
          },
          function (e, t) {
            var n = ni.i(e),
              a = n ? ti.k(e, n) : []
            return R()(a, 1)[0]
          },
          function (e, t, n) {
            return { loggedInUser: e, avatarMedia: t, bannerMedia: n }
          },
        ),
        vi = { addBannerMedia: ni.b, removeBannerMedia: ni.e },
        yi = Object(kt.g)(bi, vi),
        _i = 'ocfSelectBannerSkipForNowButton',
        gi = n('9Xij'),
        ki = n('U+bB')
      function wi(e) {
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
            a = b()(e)
          if (t) {
            var r = b()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return h()(this, n)
        }
      }
      var Oi = (function (e) {
          p()(n, e)
          var t = wi(n)
          function n(e) {
            var a
            return (
              i()(this, n),
              (a = t.call(this, e)),
              y()(u()(a), '_handleImageMediaRemove', function () {
                ;(0, a.props.removeBannerMedia)(), a.setState({ done: !1, showCropper: !1 })
              }),
              y()(u()(a), '_handleCropDone', function () {
                return a.setState({ done: !0, showCropper: !1 })
              }),
              y()(u()(a), '_handleCropCancel', function () {
                return a._handleCropDone()
              }),
              y()(u()(a), '_handleImageMediaChange', function (e) {
                ;(0, a.props.addBannerMedia)(e[0]), a.setState({ media_id: e[0], showCropper: !0, done: !0 })
              }),
              y()(u()(a), '_handleImageMediaFailure', function () {
                a._handleSkipButtonClick()
              }),
              y()(u()(a), '_handleDoneButtonClick', function () {
                var e = a.props,
                  t = e.onNavigate,
                  n = e.subtask,
                  r = e.subtaskId
                ;(0, e.updateFlow)(r, { link: n.next_link.link_id }), t(n.next_link)
              }),
              y()(u()(a), '_handleSkipButtonClick', function () {
                var e = a.props,
                  t = e.onNavigate,
                  n = e.subtask.skip_link,
                  r = e.subtaskId,
                  o = e.updateFlow
                n && o(r, { link: n.link_id }), n && t(n)
              }),
              (a.state = { done: void 0, media_id: void 0, showCropper: !1 }),
              a
            )
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.errorDialog,
                    n = e.onNavigate,
                    a = e.passthroughOcfScreenProps,
                    o = e.subtask,
                    i = e.subtaskInputs,
                    s = o.next_link,
                    c = o.primary_text,
                    l = o.secondary_text,
                    u = o.skip_link,
                    d = g.a.createElement(
                      S.a,
                      {
                        disabled: !u && !this.state.media_id,
                        onPress: this._handleDoneButtonClick,
                        size: 'large',
                        type: 'primaryFilled',
                      },
                      s.label,
                    ),
                    p =
                      u &&
                      g.a.createElement(
                        S.a,
                        { onPress: this._handleSkipButtonClick, size: 'large', testID: _i, type: 'primaryText' },
                        u.label,
                      )
                  return g.a.createElement(
                    he.a,
                    r()({}, a, { rightControl: this.state.done || !u ? d : p }),
                    g.a.createElement(
                      D.a,
                      { style: se.contentArea },
                      c
                        ? g.a.createElement(
                            ae,
                            r()({}, c, {
                              nativeID: w.b,
                              onNavigate: n,
                              size: 'title4',
                              style: se.headline,
                              subtaskInputs: i,
                              weight: 'bold',
                            }),
                          )
                        : null,
                      l
                        ? g.a.createElement(
                            ae,
                            r()({}, o.secondary_text, { color: 'gray700', onNavigate: n, subtaskInputs: i }),
                          )
                        : null,
                      g.a.createElement(
                        D.a,
                        { style: Ei.container },
                        this._renderMediaPickerWithPreview(),
                        g.a.createElement(D.a, { style: mi.a.avatarAndButton }, this._renderAvatar()),
                        this._renderNames(),
                      ),
                      this.state.showCropper && void 0 !== this.state.media_id
                        ? g.a.createElement(ii.a, {
                            defaultAspectRatio: 3,
                            mediaId: this.state.media_id,
                            onCancel: this._handleCropCancel,
                            onDone: this._handleCropDone,
                          })
                        : null,
                    ),
                    t,
                  )
                },
              },
              {
                key: '_renderMediaPickerWithPreview',
                value: function () {
                  var e = this.props,
                    t = e.bannerMedia,
                    n = e.loggedInUser,
                    a = t || (!!n && !!n.profile_banner_url),
                    r = this.state.done
                  return g.a.createElement(si.default, {
                    aspectRatio: 3,
                    currentContent: g.a.createElement(
                      gi.a,
                      { ratio: A.a.theme.aspectRatios.profileBanner },
                      a && n
                        ? g.a.createElement(ki.a, { source: { uri: n.profile_banner_url }, style: Ei.banner })
                        : null,
                    ),
                    location: ci.d.ProfileBanner,
                    mediaItem: t,
                    onChange: this._handleImageMediaChange,
                    onFailure: this._handleImageMediaFailure,
                    onRemove: r ? this._handleImageMediaRemove : void 0,
                    rootStyle: Ei.bannerContainer,
                  })
                },
              },
              {
                key: '_renderAvatar',
                value: function () {
                  var e = this.props,
                    t = e.avatarMedia,
                    n = e.loggedInUser,
                    a = (t && t.mediaFile && t.mediaFile.url) || (n && n.profile_image_url_https)
                  return g.a.createElement(Ae.a, {
                    accessibilityHidden: !0,
                    borderColor: 'white',
                    borderWidth: 'medium',
                    focusable: !1,
                    size: 'custom',
                    style: mi.a.avatar,
                    uri: a,
                  })
                },
              },
              {
                key: '_renderNames',
                value: function () {
                  var e = this.props.loggedInUser
                  if (!e) return null
                  var t = e.name,
                    n = '@'.concat(e.screen_name)
                  return g.a.createElement(
                    D.a,
                    { style: Ei.nameContainer },
                    g.a.createElement(
                      T.b,
                      { align: 'left', style: Ei.names },
                      g.a.createElement(
                        T.b,
                        { accessibilityRole: 'heading', size: 'title4', style: Ei.displayName, weight: 'bold' },
                        t,
                      ),
                      g.a.createElement(T.b, { color: 'gray700', style: Ei.screenName }, n),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(g.a.Component),
        Ei = A.a.create(function (e) {
          return {
            container: { paddingBottom: e.spaces.space64 },
            avatarContainer: {
              marginLeft: e.spaces.space16,
              marginTop: '-25%',
              maxWidth: 'calc(${theme.spaces.space16} * 8)',
              width: '25%',
            },
            bannerContainer: { marginTop: e.spaces.space64, marginBottom: e.spaces.space64, maxHeight: '9em' },
            banner: { height: '100%' },
            centerContent: { alignItems: 'center', display: 'flex', width: '100%' },
            nameContainer: { marginLeft: e.spaces.space16 },
            names: { display: 'block', marginBottom: e.spaces.space12 },
            displayName: { writingDirection: 'ltr', display: 'block', marginTop: e.spaces.space4 },
            screenName: { writingDirection: 'ltr' },
          }
        }),
        Ci = yi(Oi),
        Si = n('QK5w'),
        xi = n('BTou'),
        Ii = (n('jQ/y'), n('aLgo'), n('RjwM')),
        Pi = A.a.create(function (e) {
          return {
            icon: { height: '1.5em', width: '1.5em' },
            pillContainer: {
              bottom: e.spaces.space16,
              alignItems: 'center',
              left: '0',
              right: '0',
              margin: 'auto',
              zIndex: 1,
            },
            pillContainerNarrow: { position: 'fixed' },
            pillContainerModal: { position: 'absolute' },
          }
        }),
        ji = function (e) {
          var t = e.isModal,
            n = e.label,
            a = e.onPress,
            r = [Pi.pillContainer, t ? Pi.pillContainerModal : Pi.pillContainerNarrow]
          return g.a.createElement(
            D.a,
            { style: r },
            g.a.createElement(
              S.a,
              { icon: g.a.createElement(Ii.a, { style: Pi.icon }), onPress: a, type: 'primaryFilled' },
              g.a.createElement(T.b, { size: 'body', weight: 'normal' }, n),
            ),
          )
        },
        Ri = n('7nmT'),
        Di = n.n(Ri),
        Ti = 'OCF_SettingsList_Text',
        Ai = n('jtO7'),
        Fi = n('sXY3'),
        Bi = n('+d3d')
      function Ni(e, t) {
        var n
        if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (!e) return
              if ('string' == typeof e) return Li(e, t)
              var n = Object.prototype.toString.call(e).slice(8, -1)
              'Object' === n && e.constructor && (n = e.constructor.name)
              if ('Map' === n || 'Set' === n) return Array.from(e)
              if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Li(e, t)
            })(e)) ||
            (t && e && 'number' == typeof e.length)
          ) {
            n && (e = n)
            var a = 0,
              r = function () {}
            return {
              s: r,
              n: function () {
                return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] }
              },
              e: function (e) {
                throw e
              },
              f: r,
            }
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
          )
        }
        var o,
          i = !0,
          s = !1
        return {
          s: function () {
            n = e[Symbol.iterator]()
          },
          n: function () {
            var e = n.next()
            return (i = e.done), e
          },
          e: function (e) {
            ;(s = !0), (o = e)
          },
          f: function () {
            try {
              i || null == n.return || n.return()
            } finally {
              if (s) throw o
            }
          },
        }
      }
      function Li(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n]
        return a
      }
      function Mi(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function Vi(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Mi(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Mi(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function Ui(e) {
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
            a = b()(e)
          if (t) {
            var r = b()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return h()(this, n)
        }
      }
      var zi = (function (e) {
        p()(n, e)
        var t = Ui(n)
        function n(e) {
          var a
          i()(this, n),
            (a = t.call(this, e)),
            y()(u()(a), '_formatSubtaskInputsForStore', function (e) {
              return Object(Fi.a)(e).map(function (e) {
                var t = R()(e, 2),
                  n = t[0],
                  a = t[1],
                  r = a.result,
                  o = a.type
                return { key: n, response_data: y()({}, o, { result: r }) }
              })
            }),
            y()(u()(a), '_loadSubtaskInputsFromStore', function () {
              var e = a.props,
                t = e.subtaskId,
                n = e.subtaskInputs
              return (Object(ee.e)(n, { key: k.s, subtask_id: t }, []) || []).reduce(function (e, t) {
                var n = t.key,
                  a = Object.keys(t.response_data),
                  r = R()(a, 1)[0],
                  o = t.response_data[r].result
                return (e[n] = { result: o, type: r }), e
              }, {})
            }),
            y()(u()(a), '_updateFlow', function (e) {
              var t,
                n = a.props,
                r = n.subtask,
                o = n.subtaskId,
                i = n.updateFlow,
                s = r.next_link,
                c = a.state.settingsValues
              if (e) i(o, ((t = {}), y()(t, k.s, a._formatSubtaskInputsForStore(c)), y()(t, 'link', e.link_id), t))
              else if (s) {
                var l
                i(o, ((l = {}), y()(l, k.s, a._formatSubtaskInputsForStore(c)), y()(l, 'link', s.link_id), l))
              }
            }),
            y()(u()(a), '_handleShowMore', function () {
              a.setState({ showMore: !0 })
            }),
            y()(u()(a), '_handleNextButtonPress', function () {
              var e = a.props,
                t = e.onNavigate,
                n = e.subtask.next_link
              a._updateFlow(), n && t(n)
            }),
            y()(u()(a), '_handleSubListBackClick', function () {
              a.setState({ isSubList: !1, showDividers: !1, showMoreConfig: null, subList: [], subListHeader: null }),
                a._updateFlow()
            }),
            y()(u()(a), '_handleSettingGroupClick', function (e) {
              var t,
                n = e.primary_text,
                r = e.value_data,
                o = e.value_type,
                i = null == r || null === (t = r.settings_group_data) || void 0 === t ? void 0 : t.settings
              i &&
                o === k.u.SettingsGroup &&
                a.setState({ isSubList: !0, showDividers: !1, showMoreConfig: null, subList: i, subListHeader: n })
            }),
            y()(u()(a), '_handleScrollPromptClick', function () {
              a._viewport && a._viewport.scrollBy(a._viewport.getRect().getHeight())
            }),
            y()(u()(a), '_handleViewportSet', function (e) {
              var t = a.props,
                n = t.isModal
              t.subtask.scroll_hint &&
                n &&
                ((a._viewport = e), a._viewport && a._viewport.addScrollListener(a._handleViewportScroll))
            }),
            y()(
              u()(a),
              '_handleViewportScroll',
              Object(Bi.a)(function () {
                a.state.lastSettingSeen || a.setState({ lastSettingSeen: a._isLastSettingInViewport() })
              }, 250),
            ),
            y()(u()(a), '_isLastSettingInViewport', function () {
              if (a._lastSetting && a._viewport) {
                var e,
                  t = a._lastSetting.getBoundingClientRect(),
                  n = null === (e = a._viewport) || void 0 === e ? void 0 : e.getRect()
                if (n) return t.top >= n.getTop() && t.bottom <= n.getBottom()
              }
              return !1
            }),
            y()(u()(a), '_setSettingsRef', function (e) {
              return function (t) {
                var n = a.state.isSubList
                if (a.props.subtask.scroll_hint && !n && e && void 0 === a._lastSetting) {
                  a._lastSetting = Di.a.findDOMNode(t)
                  var r = a._isLastSettingInViewport()
                  r && !a.state.lastSettingSeen && a.setState({ lastSettingSeen: r })
                } else a._lastSetting = void 0
              }
            }),
            y()(u()(a), '_handleSettingToggle', function (e) {
              var t = e.value_identifier,
                n = e.value_type
              if (t && Object(ee.i)(n)) {
                var r = a.state.settingsValues
                a.setState({
                  settingsValues: Vi(Vi({}, r), {}, y()({}, t, Vi(Vi({}, r[t]), {}, { result: !r[t].result }))),
                })
              }
            }),
            y()(u()(a), '_handleSettingTextChange', function (e, t) {
              var n = e.value_identifier
              if (n) {
                var r = a.state.settingsValues
                a.setState({ settingsValues: Vi(Vi({}, r), {}, y()({}, n, Vi(Vi({}, r[n]), {}, { result: t }))) })
              }
            }),
            y()(u()(a), '_handleCancelButtonPress', function () {
              var e = a.props,
                t = e.onNavigate,
                n = e.subtask.cancel_link
              n && (a._updateFlow(n), t(n))
            }),
            y()(u()(a), '_getSettingsValueNextLink', function () {
              var e = a.props.subtask
              if (e.next_link) return e.next_link
              var t,
                n = Ni(e.settings)
              try {
                for (n.s(); !(t = n.n()).done; ) {
                  var r,
                    o = t.value,
                    i = o.value_data,
                    s = o.value_identifier,
                    c = null == i || null === (r = i.button) || void 0 === r ? void 0 : r.navigation_link
                  if (s === k.t.NextButton && c) return c
                }
              } catch (l) {
                n.e(l)
              } finally {
                n.f()
              }
            })
          var r = e.subtask,
            o = a._initializeSettingsState(r.settings)
          return (
            (a.state = {
              isSubList: !1,
              showDividers: !!r.show_divider,
              showMoreConfig: r.show_more,
              showMore: !1,
              subList: [],
              subListHeader: null,
              settingsValues: o,
              lastSettingSeen: !1,
            }),
            a
          )
        }
        return (
          c()(n, [
            {
              key: 'UNSAFE_componentWillMount',
              value: function () {
                var e = this.context.viewport,
                  t = this.props,
                  n = t.isModal
                t.subtask.scroll_hint &&
                  !n &&
                  ((this._viewport = e),
                  (this._removeScrollListener = this._viewport.addScrollListener(this._handleViewportScroll))),
                  this._updateFlow()
              },
            },
            {
              key: 'componentWillUnmount',
              value: function () {
                this.props.subtask.scroll_hint && this._removeScrollListener && this._removeScrollListener()
              },
            },
            {
              key: 'render',
              value: function () {
                return this.state.isSubList ? this._renderSubList() : this._renderMainList()
              },
            },
            {
              key: '_renderMainList',
              value: function () {
                var e,
                  t = this.props,
                  n = t.errorDialog,
                  a = t.isModal,
                  o = t.onNavigate,
                  i = t.passthroughOcfScreenProps,
                  s = t.subtask,
                  c = t.subtaskId,
                  l = t.subtaskInputs,
                  u = this.state.lastSettingSeen,
                  d = !!!s.scroll_hint || u,
                  p = 'prompt' === s.style,
                  f = this._renderNavigationButtons(d),
                  h = s.scroll_hint,
                  m =
                    !d && h
                      ? g.a.createElement(ji, { isModal: !!a, label: h, onPress: this._handleScrollPromptClick })
                      : null,
                  b = null !== (e = s.horizontal_style) && void 0 !== e ? e : k.y.Normal,
                  v = c === k.q
                return g.a.createElement(
                  he.a,
                  r()({}, i, { onViewportSet: this._handleViewportSet, rightControl: p ? void 0 : f, scrollPrompt: m }),
                  g.a.createElement(
                    D.a,
                    {
                      style: [
                        b === k.y.Compact ? se.contentAreaCompact : se.contentArea,
                        Hi.bottomPadding,
                        p && Hi.centeredRoot,
                      ],
                    },
                    s.primary_text
                      ? g.a.createElement(
                          ae,
                          r()({}, s.primary_text, {
                            nativeID: w.b,
                            onNavigate: o,
                            size: 'title4',
                            style: Hi.headline,
                            subtaskInputs: l,
                            testID: Ti,
                            weight: 'bold',
                          }),
                        )
                      : null,
                    s.secondary_text
                      ? g.a.createElement(
                          ae,
                          r()({}, s.secondary_text, {
                            color: 'gray700',
                            onNavigate: o,
                            style: Hi.headline,
                            subtaskInputs: l,
                          }),
                        )
                      : null,
                    s.header ? g.a.createElement(fe, { header: s.header, onNavigate: o, subtaskInputs: l }) : null,
                    this._renderSettingsList(s.settings),
                    v ? g.a.createElement(T.b, { color: 'gray700', size: 'subtext2' }, P.c) : null,
                    s.detail_text
                      ? g.a.createElement(
                          ae,
                          r()({}, s.detail_text, {
                            color: 'gray700',
                            onNavigate: o,
                            style: Hi.detailText,
                            subtaskInputs: l,
                          }),
                        )
                      : null,
                    p && f ? g.a.createElement(D.a, { style: Hi.doneButtonContainer }, f) : null,
                  ),
                  n,
                )
              },
            },
            {
              key: '_renderSubList',
              value: function () {
                var e = this.props,
                  t = e.onNavigate,
                  n = e.subtaskInputs,
                  a = this.state,
                  o = a.subList,
                  i = a.subListHeader
                return g.a.createElement(
                  he.a,
                  { onBackClick: this._handleSubListBackClick },
                  g.a.createElement(
                    D.a,
                    { style: se.contentArea },
                    g.a.createElement(
                      ae,
                      r()({}, i, {
                        onNavigate: t,
                        size: 'title4',
                        style: Hi.headline,
                        subtaskInputs: n,
                        weight: 'bold',
                      }),
                    ),
                    this._renderSettingsList(o),
                  ),
                )
              },
            },
            {
              key: '_renderSettingsList',
              value: function (e) {
                var t = this,
                  n = this.props,
                  a = n.addToast,
                  r = n.onNavigate,
                  o = n.removeContacts,
                  i = n.subtaskId,
                  s = n.subtaskInputs,
                  c = this.state,
                  l = c.showDividers,
                  u = c.showMore,
                  d = c.showMoreConfig,
                  p = this._getSettingsValueNextLink()
                return g.a.Children.toArray(
                  e.map(function (n, c) {
                    var f = c === e.length - 1
                    if (d && !u) {
                      if (c === d.initial_to_show)
                        return g.a.createElement(Ai.a, { color: 'primary', label: d.text, onPress: t._handleShowMore })
                      if (c > d.initial_to_show) return null
                    }
                    return g.a.createElement(Pa, {
                      addToast: a,
                      nextLink: p,
                      onNavigate: r,
                      onSettingGroupClick: t._handleSettingGroupClick,
                      onSettingTextChanged: t._handleSettingTextChange,
                      onSettingToggle: t._handleSettingToggle,
                      ref: t._setSettingsRef(f),
                      removeContacts: o,
                      settingValue: n,
                      showDividers: !f && l,
                      subtaskId: i,
                      subtaskInputs: s,
                      updateFlow: t._updateFlow,
                    })
                  }),
                )
              },
            },
            {
              key: '_renderNextButton',
              value: function (e) {
                var t,
                  n = this.props.subtask
                return n.next_link && n.next_link.label
                  ? g.a.createElement(
                      S.a,
                      { disabled: !e, onPress: this._handleNextButtonPress, size: 'large', type: 'primaryFilled' },
                      null === (t = n.next_link) || void 0 === t ? void 0 : t.label,
                    )
                  : null
              },
            },
            {
              key: '_renderCancelButton',
              value: function () {
                var e,
                  t = this.props.subtask
                return t.cancel_link && t.cancel_link.label
                  ? g.a.createElement(
                      S.a,
                      { onPress: this._handleCancelButtonPress, size: 'large', type: 'primaryText' },
                      null === (e = t.cancel_link) || void 0 === e ? void 0 : e.label,
                    )
                  : null
              },
            },
            {
              key: '_renderNavigationButtons',
              value: function (e) {
                return g.a.createElement(g.a.Fragment, null, this._renderNextButton(e), this._renderCancelButton())
              },
            },
            {
              key: '_initializeSettingsState',
              value: function (e) {
                var t = this._loadSubtaskInputsFromStore()
                return t && Object.keys(t).length > 0
                  ? t
                  : e.reduce(function (e, t) {
                      var n,
                        a = t.value_data,
                        r = t.value_identifier,
                        o = t.value_type
                      if (r && a && Object(ee.i)(o))
                        e[r] = {
                          result: null === (n = a.boolean_data) || void 0 === n ? void 0 : n.initial_value,
                          type: Object.keys(a)[0],
                        }
                      else if (r && o === k.u.TextField) e[r] = { result: '', type: 'text_data' }
                      else if (o === k.u.SettingsGroup) {
                        var i
                        ;(
                          (null == a || null === (i = a.settings_group_data) || void 0 === i ? void 0 : i.settings) ||
                          []
                        ).forEach(function (t) {
                          var n,
                            a = t.value_data,
                            r = t.value_identifier,
                            o = t.value_type
                          r &&
                            a &&
                            Object(ee.i)(o) &&
                            (e[r] = {
                              result: null === (n = a.boolean_data) || void 0 === n ? void 0 : n.initial_value,
                              type: Object.keys(a)[0],
                            })
                        })
                      }
                      return e
                    }, {})
              },
            },
          ]),
          n
        )
      })(g.a.Component)
      y()(zi, 'contextTypes', { viewport: Mn.object })
      var Hi = A.a.create(function (e) {
          return {
            centeredRoot: { alignItems: 'center' },
            headline: { marginBottom: e.spaces.space12 },
            detailText: { marginTop: e.spaces.space40 },
            bottomPadding: { paddingBottom: e.spaces.space48 },
            doneButtonContainer: { marginTop: e.spaces.space40 },
          }
        }),
        Wi = function () {
          return n.e(345).then(n.t.bind(null, '0FX9', 7))
        }
      function Gi(e) {
        var t = e.errorDialog,
          n = e.onNavigate,
          a = e.passthroughOcfScreenProps,
          o = e.subtask,
          i = o.code,
          s = o.detail_text,
          c = o.header,
          l = o.next_link,
          u = o.skip_link,
          d = o.style,
          p = e.subtaskId,
          f = e.subtaskInputs,
          h = e.updateFlow,
          m = s ? g.a.createElement(ae, r()({}, s, { onNavigate: n, subtaskInputs: f })) : null,
          b = g.a.createElement(
            g.a.Fragment,
            null,
            g.a.createElement(
              S.a,
              {
                onPress: function () {
                  h(p, { link: l.link_id }), n(l)
                },
                size: 'large',
                type: 'primaryFilled',
              },
              l.label,
            ),
            u
              ? g.a.createElement(
                  S.a,
                  {
                    onPress: function () {
                      u && (h(p, { link: u.link_id }), n(u))
                    },
                    size: 'large',
                    style: Ki.secondaryButton,
                    type: 'primaryOutlined',
                  },
                  u.label,
                )
              : null,
          )
        return g.a.createElement(
          he.a,
          r()({}, a, { rightControl: b }),
          g.a.createElement(
            D.a,
            { style: se.contentArea },
            g.a.createElement(fe, { header: c, onNavigate: n, subtaskInputs: f }),
            d === k.v.Qr
              ? g.a.createElement(
                  D.a,
                  { style: Ki.qrCode },
                  g.a.createElement('canvas', {
                    ref: function (t) {
                      var n = e.subtask.code
                      Wi().then(function (e) {
                        t && e.toCanvas(t, n, { margin: 5, scale: 5 })
                      })
                    },
                  }),
                  g.a.createElement(D.a, { style: Ki.detailText }, m),
                )
              : g.a.createElement(
                  g.a.Fragment,
                  null,
                  g.a.createElement(T.b, { weight: 'bold' }, i),
                  g.a.createElement(D.a, { style: Ki.detailText }, m),
                ),
          ),
          t,
        )
      }
      var Ki = A.a.create(function (e) {
          return {
            qrCode: { alignItems: 'center', paddingVertical: e.spaces.space16 },
            detailText: { paddingTop: e.spaces.space16 },
            secondaryButton: { marginTop: e.spaces.space12 },
          }
        }),
        Yi = n('NeAX'),
        Xi = Object(wt.createSelector)(yt.o, Yi.selectPreferences, Yi.selectUserPreferences, function (e, t, n) {
          return { navigationContext: e, personalizationSettings: n, shouldPropagateP13nSettings: !t.is_eu_country }
        }),
        qi = {
          createLocalApiErrorHandler: Object(Ke.createLocalApiErrorHandlerWithContextFactory)('OCF_FLOW'),
          fetchPreferencesIfNeeded: Yi.fetchPreferencesIfNeeded,
          scribeAction: vt.c,
          syncPersonalizationSettings: Yi.syncSettings,
        },
        Zi = Object(kt.g)(Xi, qi)
      function Ji(e) {
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
            a = b()(e)
          if (t) {
            var r = b()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return h()(this, n)
        }
      }
      var Qi = Yt.a.d44efc66,
        $i = Yt.a.b4867a17,
        es = Yt.a.d4e220b3,
        ts = (function (e) {
          p()(n, e)
          var t = Ji(n)
          function n() {
            var e
            i()(this, n)
            for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              y()(u()(e), 'state', { errorMessage: '', isValid: !0, value: '' }),
              y()(u()(e), '_updateValue', function (t) {
                var n = e.props.callback,
                  a = Object(Ko.a)(t.trim()),
                  r = !a && -1 !== t.toLowerCase().indexOf('twitter'),
                  o = !a && !r,
                  i = ''
                a ? (i = Qi) : r && (i = $i), e.setState({ errorMessage: i, isValid: o, value: t }), n(t, o)
              }),
              y()(u()(e), '_handleValueChange', function (t) {
                var n = t.target.value
                e._updateValue(n)
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props.defaultValue
                  e && this._updateValue(e)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = (e.callback, e.defaultValue, e.label),
                    n = E()(e, ['callback', 'defaultValue', 'label']),
                    a = this.state,
                    o = a.errorMessage,
                    i = a.isValid,
                    s = this.context.featureSwitches.getValue('user_display_name_max_limit', 50)
                  return g.a.createElement(
                    sn.a,
                    r()({}, n, {
                      errorText: o,
                      invalid: !i,
                      label: t || es,
                      maxLength: 'number' == typeof s ? s : 50,
                      name: 'name',
                      onChange: this._handleValueChange,
                      positionCursorAtEnd: !0,
                      style: se.formTextInput,
                      value: this.state.value,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      y()(ts, 'contextType', $e.a)
      var ns = n('SrtL'),
        as = n('P7wY')
      function rs(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function os(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? rs(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : rs(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function is(e) {
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
            a = b()(e)
          if (t) {
            var r = b()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return h()(this, n)
        }
      }
      var ss = Yt.a.eab9ceb1,
        cs = Object.freeze({
          Birthday: 'birthday',
          Email: 'email',
          Name: 'name',
          Phone: 'phone_number',
          Password: 'password',
        }),
        ls = 'select_birthday',
        us = 'select_email',
        ds = 'select_name',
        ps = 'select_phone',
        fs = { page: 'onboarding', component: 'signup' },
        hs = (function (e) {
          p()(n, e)
          var t = is(n)
          function n(e) {
            var a
            i()(this, n),
              (a = t.call(this, e)),
              y()(u()(a), '_getDefaultIdentifierField', function () {
                var e = a.props.subtask.allowed_identifiers
                return e === k.w.EmailOnly || e === k.w.EmailThenPhone ? cs.Email : cs.Phone
              }),
              y()(u()(a), '_renderActiveFieldToggle', function () {
                var e = a.props.subtask.allowed_identifiers
                return e !== k.w.EmailOnly && e !== k.w.PhoneOnly
                  ? g.a.createElement(
                      T.b,
                      {
                        color: 'link',
                        onPress: a._handleActiveTextToggle,
                        style: ms.toggleLink,
                        withInteractiveStyling: !0,
                      },
                      a._getToggleActiveTextTitle(),
                    )
                  : null
              }),
              y()(u()(a), '_renderPasswordField', function () {
                var e = a.props,
                  t = e.subtask,
                  n = e.subtaskId,
                  r = e.subtaskInputs,
                  o = a.state.defaultActiveText,
                  i = Object(ee.e)(r, { key: cs.Password, subtask_id: n }, '')
                return g.a.createElement(
                  D.a,
                  { style: ms.passwordEntry },
                  g.a.createElement(la, {
                    autoComplete: 'new-password',
                    defaultValue: i || void 0,
                    label: t.password_hint,
                    onPasswordChange: a._handlePasswordChange,
                    onPasswordValidated: a._handlePasswordValidate,
                    userIdentifier: o || void 0,
                  }),
                )
              }),
              y()(u()(a), '_renderNameField', function () {
                var e = a.props,
                  t = e.navigationContext,
                  n = e.subtask,
                  r = e.subtaskId,
                  o = e.subtaskInputs,
                  i = Object(ee.e)(o, { key: cs.Name, subtask_id: r }, ''),
                  s = t.action,
                  c = {
                    autoComplete: 'name',
                    autoFocus: !s || s === ds,
                    callback: a._updateNameInfo,
                    defaultValue: i,
                    onFocus: a._handleNameFocus,
                    label: n.name_hint,
                  }
                return g.a.createElement(ts, c)
              }),
              y()(u()(a), '_renderActiveTextField', function () {
                var e = a.props.subtask,
                  t = a.state,
                  n = t.activeTextField,
                  r = t.defaultActiveText,
                  o = a._shouldFocusActiveTextField(),
                  i = {
                    autoComplete: n === cs.Phone ? 'tel' : 'email',
                    autoFocus: o,
                    defaultValue: r,
                    name: n === cs.Phone ? 'phone_number' : 'email',
                    label: n === cs.Phone ? e.phone_hint : e.email_hint,
                    onRef: a._setInputRef,
                    onValidityChange: a._updateValidity,
                    style: ms.phoneEmailTextField,
                  }
                return n === cs.Phone ? g.a.createElement(Za, i) : g.a.createElement(Jn, i)
              }),
              y()(u()(a), '_handleDateChange', function (e) {
                a.setState({ birthdayValue: e, isBirthdayValid: a._isCompleteDate(e) }, a._updateValidity)
              }),
              y()(u()(a), '_isCompleteDate', function (e) {
                return !!(e && e.year && e.month && e.day)
              }),
              y()(u()(a), '_getIdentifierValue', function () {
                return a._input && a._input.getValue()
              }),
              y()(u()(a), '_isValid', function () {
                var e = a.state,
                  t = e.isBirthdayValid,
                  n = e.isNameValid,
                  r = e.isPasswordValid,
                  o = a.props.subtask,
                  i = !o.show_password_field || r,
                  s = o.ignore_birthday || t
                return n && i && s && a._input && a._input.isValid()
              }),
              y()(u()(a), '_setTimRef', function (e) {
                a._timInput = e
              }),
              y()(u()(a), '_updateValidity', function () {
                a.setState({ isValid: a._isValid() })
              }),
              y()(u()(a), '_updateNameInfo', function (e, t) {
                a.setState({ isNameValid: t, nameValue: e }, a._updateValidity)
              }),
              y()(u()(a), '_handleFetchPreferences', function () {
                var e = a.props,
                  t = e.createLocalApiErrorHandler
                ;(0, e.fetchPreferencesIfNeeded)().catch(t())
              }),
              y()(u()(a), '_handlePasswordChange', function (e) {
                a.setState({ passwordValue: e }, a._updateValidity)
              }),
              y()(u()(a), '_handlePasswordValidate', function (e) {
                a.setState({ isPasswordValid: e }, a._updateValidity)
              }),
              y()(u()(a), '_shouldFocusActiveTextField', function () {
                var e = a.props.navigationContext,
                  t = a.state.activeTextField === cs.Phone ? ps : us
                return !a.state.hasNameFieldBeenAutoFocused && e.action === t
              }),
              y()(u()(a), '_handleActiveTextToggle', function () {
                var e = a.state.activeTextField === cs.Phone ? cs.Email : cs.Phone
                a._scribeEvent(e, 'choose'),
                  a._input && a._input.clear(),
                  a.setState({ activeTextField: e, defaultActiveText: '' })
              }),
              y()(u()(a), '_getToggleActiveTextTitle', function () {
                var e = a.props.subtask
                return a.state.activeTextField === cs.Phone ? e.use_email_text : e.use_phone_text
              }),
              y()(u()(a), '_handleNameFocus', function () {
                a.setState({ hasNameFieldBeenAutoFocused: !0 })
              }),
              y()(u()(a), '_handleNextButtonClick', function () {
                var e = a.props,
                  t = e.onNavigate,
                  n = e.shouldPropagateP13nSettings,
                  r = e.subtask,
                  o = e.subtaskId,
                  i = e.updateFlow,
                  s = a.state,
                  c = s.activeTextField,
                  l = s.birthdayValue,
                  u = s.nameValue,
                  d = s.passwordValue,
                  p = a.props.personalizationSettings || {},
                  f = p.allowCookieUse,
                  h = p.allowDeviceAccess,
                  m = p.allowPartnerships,
                  b = p.allowPersonalization,
                  v = c === cs.Email && r.email_next_link ? r.email_next_link : r.next_link,
                  y = a._timInput && a._timInput.value ? { response: a._timInput.value } : void 0,
                  _ = a._getIdentifierValue() || void 0,
                  g = { js_instrumentation: y, link: v.link_id, name: u }
                ;(g[c] = _),
                  r.show_password_field && (g.password = d),
                  !r.ignore_birthday && l && (g.birthday = l),
                  n &&
                    (g.personalization_settings = {
                      allow_cookie_use: !!f,
                      allow_device_personalization: !!h,
                      allow_partnerships: !!m,
                      allow_ads_personalization: !!b,
                    }),
                  i(o, g),
                  t(v)
              }),
              y()(u()(a), '_scribeEvent', function (e, t) {
                ;(0, a.props.scribeAction)(os(os({}, fs), {}, { element: e, action: t }))
              }),
              y()(u()(a), '_setInputRef', function (e) {
                a._input = e
              })
            var r = e.navigationContext,
              o = e.subtaskId,
              s = e.subtaskInputs,
              c = Object(ee.e)(s, { key: cs.Name, subtask_id: o }, ''),
              l = Object(ee.e)(s, { key: cs.Phone, subtask_id: o }, ''),
              d = Object(ee.e)(s, { key: cs.Email, subtask_id: o }, ''),
              p = Object(ee.e)(s, { key: cs.Password, subtask_id: o }, ''),
              f = { day: void 0, month: void 0, year: void 0 },
              h = Object(ee.e)(s, { key: cs.Birthday, subtask_id: o }, void 0) || f,
              m = (function (e) {
                switch (e) {
                  case ps:
                    return { type: cs.Phone, value: l }
                  case us:
                    return { type: cs.Email, value: d }
                  default:
                    return { type: d ? cs.Email : a._getDefaultIdentifierField(), value: d || l }
                }
              })(r.action)
            return (
              (a.state = {
                activeTextField: m.type,
                birthdayValue: h,
                defaultActiveText: m.value,
                nameValue: c,
                hasNameFieldBeenAutoFocused: !1,
                passwordValue: p,
                isNameValid: void 0,
                isPasswordValid: !!p,
                isBirthdayValid: a._isCompleteDate(h),
                isValid: void 0,
              }),
              a
            )
          }
          return (
            c()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.createLocalApiErrorHandler,
                    n = e.syncPersonalizationSettings
                  po.a.inject({ scriptId: 'jsInstLibrary', src: 'https://twitter.com/i/js_inst?c_name=ui_metrics' }),
                    this._handleFetchPreferences(),
                    n().catch(t())
                },
              },
              {
                key: 'componentDidUpdate',
                value: function () {
                  this._shouldFocusActiveTextField() && this._input && this._input.focus()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.passthroughOcfScreenProps,
                    n = e.progressIndication,
                    a = e.subtask,
                    o = g.a.createElement(
                      S.a,
                      {
                        disabled: !this.state.isValid,
                        onPress: this._handleNextButtonClick,
                        size: 'large',
                        type: 'primaryFilled',
                      },
                      a.next_link.label,
                    )
                  return g.a.createElement(
                    he.a,
                    r()({}, t, { progressIndication: n, rightControl: o }),
                    g.a.createElement(ns.a, { title: ss }),
                    g.a.createElement(
                      D.a,
                      { style: se.contentArea },
                      a.primary_text &&
                        g.a.createElement(
                          T.b,
                          { nativeID: w.b, size: 'title4', style: se.headline, weight: 'bold' },
                          a.primary_text,
                        ),
                      this._renderNameField(),
                      this._renderActiveTextField(),
                      this._renderActiveFieldToggle(),
                      this._renderBirthdayField(),
                      a.show_password_field ? this._renderPasswordField() : null,
                      g.a.createElement('input', {
                        autoComplete: 'off',
                        name: 'ui_metrics',
                        ref: this._setTimRef,
                        type: 'hidden',
                      }),
                    ),
                  )
                },
              },
              {
                key: '_renderBirthdayField',
                value: function () {
                  var e = this.props,
                    t = e.navigationContext,
                    n = e.subtask,
                    a = n.birthday_explanation,
                    r = n.birthday_hint,
                    o = n.ignore_birthday,
                    i = this.state.birthdayValue || {},
                    s = t.action === ls
                  return o
                    ? null
                    : g.a.createElement(
                        D.a,
                        { accessibilityLabel: r, accessibilityRole: 'group', style: ms.birthdayPicker },
                        g.a.createElement(T.b, { size: 'body', weight: 'bold' }, r),
                        g.a.createElement(T.b, { color: 'gray700', size: 'body' }, a),
                        g.a.createElement(wn.a, {
                          autofocus: s,
                          day: i.day,
                          label: n.birthday_hint || '',
                          minSelectableYear: Object(as.b)(),
                          month: i.month,
                          onChange: this._handleDateChange,
                          year: i.year,
                        }),
                      )
                },
              },
            ]),
            n
          )
        })(g.a.Component),
        ms = A.a.create(function (e) {
          return {
            birthdayPicker: { marginTop: e.spaces.space32 },
            toggleLink: { marginTop: e.spaces.space16, alignSelf: 'flex-start' },
            passwordEntry: { marginTop: e.spaces.space16 },
            phoneEmailTextField: { paddingHorizontal: 0 },
          }
        }),
        bs = Zi(hs)
      function vs(e) {
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
            a = b()(e)
          if (t) {
            var r = b()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return h()(this, n)
        }
      }
      var ys = Yt.a.a565833d,
        _s = Yt.a.h3629782,
        gs = Yt.a.j1c3f4b9,
        ks = Yt.a.c119dee8,
        ws = Yt.a.f70cd5ed,
        Os = Yt.a.a3841918,
        Es = Yt.a.d4e220b3,
        Cs = (function (e) {
          p()(n, e)
          var t = vs(n)
          function n() {
            var e
            i()(this, n)
            for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              y()(u()(e), '_handleSignupButtonClick', function () {
                var t,
                  n = e.props,
                  a = n.onNavigate,
                  r = n.subtask,
                  o = n.subtaskId,
                  i = n.subtaskInputs,
                  s = n.updateFlow,
                  c = r.email,
                  l = r.phone_number,
                  u = l && l.subtask_data_reference && Object(ee.e)(i, l.subtask_data_reference),
                  d = c && c.subtask_data_reference && Object(ee.e)(i, c.subtask_data_reference)
                e._isOldEnoughOrIgnored()
                  ? u
                    ? (t = r.phone_next_link)
                    : d && (t = r.email_next_link)
                  : (t = r.invalid_birthday_link),
                  t && s(o, { link: t.link_id }),
                  t && a(t)
              }),
              y()(u()(e), '_handleNavigationClick', function (t) {
                ;(0, e.props.onNavigate)(t)
              }),
              y()(u()(e), '_handleNameEdit', function () {
                var t = e.props.subtask
                e._handleNavigationClick(t.name_edit_link)
              }),
              y()(u()(e), '_handleBirthdayEdit', function () {
                var t = e.props.subtask
                e._handleNavigationClick(t.birthday_edit_link)
              }),
              y()(u()(e), '_handlePhoneEdit', function () {
                var t = e.props.subtask
                e._handleNavigationClick(t.phone_edit_link)
              }),
              y()(u()(e), '_handleEmailEdit', function () {
                var t = e.props.subtask
                e._handleNavigationClick(t.email_edit_link)
              }),
              y()(u()(e), '_handlePrivacyOptionsClick', function (t) {
                return function (n) {
                  n.preventDefault(), e._handleNavigationClick(t)
                }
              }),
              y()(u()(e), '_isOldEnoughOrIgnored', function () {
                var t = e.props.subtask,
                  n = t.birthday,
                  a = t.birthday_requirement
                if (t.ignore_birthday) return !0
                var r = n && n.subtask_data_reference && Object(ee.e)(e.props.subtaskInputs, n.subtask_data_reference),
                  o = r && new Date(r.year, r.month - 1, r.day),
                  i = a || {},
                  s = i.day,
                  c = i.month,
                  l = i.year,
                  u = l && c && s && new Date(l, c - 1, s)
                return !o || !u || o <= u
              }),
              y()(u()(e), '_getSignupButtonLabel', function () {
                var t = e.props,
                  n = t.subtask,
                  a = t.subtaskInputs,
                  r = n.email,
                  o = n.phone_number,
                  i = o && Object(ee.g)(a, o),
                  s = r && Object(ee.g)(a, r)
                return i ? n.phone_next_link.label : s ? n.email_next_link.label : ys
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.errorDialog,
                    n = e.passthroughOcfScreenProps,
                    a = e.progressIndication
                  return g.a.createElement(
                    he.a,
                    r()({}, n, { progressIndication: a }),
                    g.a.createElement(
                      D.a,
                      null,
                      g.a.createElement(
                        D.a,
                        { style: se.contentArea },
                        this._maybeRenderPrimaryText(),
                        this._renderNameField(),
                        this._renderPhoneOrEmailField(),
                        this._maybeRenderBirthdayField(),
                        this._maybeRenderDetailText(),
                        g.a.createElement(
                          S.a,
                          {
                            onPress: this._handleSignupButtonClick,
                            size: 'xLarge',
                            style: se.primaryButton,
                            type: 'primaryFilled',
                          },
                          this._getSignupButtonLabel(),
                        ),
                      ),
                    ),
                    t,
                  )
                },
              },
              {
                key: '_maybeRenderPrimaryText',
                value: function () {
                  var e = this.props.subtask
                  return e.primary_text
                    ? g.a.createElement(
                        T.b,
                        { align: 'left', nativeID: w.b, size: 'title4', style: se.headline, weight: 'bold' },
                        e.primary_text,
                      )
                    : null
                },
              },
              {
                key: '_maybeRenderDetailText',
                value: function () {
                  var e = this.props,
                    t = e.onNavigate,
                    n = e.subtask,
                    a = e.subtaskInputs,
                    o = n.detail_text
                  return o
                    ? g.a.createElement(ae, r()({}, o, { onNavigate: t, style: Ss.detailText, subtaskInputs: a }))
                    : null
                },
              },
              {
                key: '_renderNameField',
                value: function () {
                  var e = this.props,
                    t = e.subtask,
                    n = e.subtaskInputs,
                    a = t.name && Object(ee.g)(n, t.name)
                  return g.a.createElement(
                    D.a,
                    { onClick: this._handleNameEdit, testID: 'editName' },
                    g.a.createElement(sn.a, {
                      defaultValue: a || '',
                      label: Es,
                      name: 'name',
                      style: se.formTextInput,
                    }),
                  )
                },
              },
              {
                key: '_maybeRenderBirthdayField',
                value: function () {
                  var e = this.props,
                    t = e.subtask,
                    n = e.subtaskInputs,
                    a =
                      t.birthday &&
                      t.birthday.subtask_data_reference &&
                      Object(ee.e)(n, t.birthday.subtask_data_reference),
                    r = a || {},
                    o = r.day,
                    i = r.month,
                    s = r.year,
                    c = o && i && s && _s(new Date(s, i - 1, o))
                  return !t.ignore_birthday && a && c
                    ? g.a.createElement(
                        D.a,
                        {
                          accessibilityLabel: gs({ birthdate: c }),
                          accessibilityRole: 'button',
                          onClick: this._handleBirthdayEdit,
                          testID: 'editBirthday',
                        },
                        g.a.createElement(sn.a, {
                          defaultValue: c,
                          label: ks,
                          name: 'birthday',
                          style: se.formTextInput,
                        }),
                      )
                    : null
                },
              },
              {
                key: '_renderPhoneOrEmailField',
                value: function () {
                  var e = this.props,
                    t = e.subtask,
                    n = t.email,
                    a = t.phone_number,
                    r = e.subtaskInputs,
                    o = a && a.subtask_data_reference && Object(ee.e)(r, a.subtask_data_reference),
                    i = n && n.subtask_data_reference && Object(ee.e)(r, n.subtask_data_reference)
                  return o
                    ? g.a.createElement(
                        D.a,
                        { onClick: this._handlePhoneEdit, testID: 'editPhone' },
                        g.a.createElement(sn.a, {
                          defaultValue: o || '',
                          label: ws,
                          name: 'phone',
                          style: se.formTextInput,
                        }),
                      )
                    : i
                    ? g.a.createElement(
                        D.a,
                        { onClick: this._handleEmailEdit, testID: 'editEmail' },
                        g.a.createElement(sn.a, {
                          defaultValue: i || '',
                          label: Os,
                          name: 'email',
                          style: se.formTextInput,
                        }),
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(g.a.Component),
        Ss = A.a.create(function (e) {
          return { detailText: { marginTop: e.spaces.space64 } }
        }),
        xs = Cs,
        Is = 'selected_search_topic_ids',
        Ps = 'selected_topic_ids',
        js = [],
        Rs = function (e, t) {
          var n = Object(yt.v)(e)
          return Object(ee.e)(n, { key: Is, subtask_id: t.subtaskId })
        },
        Ds = function (e, t) {
          var n = Object(yt.v)(e)
          return Object(ee.e)(n, { key: Ps, subtask_id: t.subtaskId })
        },
        Ts = function (e, t) {
          return t.subtask.selected_topics_cart ? t.subtask.selected_topics_cart.selected_topic_ids : js
        },
        As = Object(Ge.a)()
          .propsFromState(function () {
            return { initialSearchTopicIds: Rs, initialSelectedTopicIds: Ds, cartTopicIds: Ts }
          })
          .adjustStateProps(function (e) {
            var t = e.cartTopicIds,
              n = e.initialSearchTopicIds,
              a = e.initialSelectedTopicIds
            return { initialSearchTopicIds: n || js, initialSelectedTopicIds: a || t }
          })
          .withAnalytics({ section: 'topics_selector' }),
        Fs = n('Rp9C'),
        Bs = n('Znyr'),
        Ns = n('sgih'),
        Ls = Object.freeze({ TopicCategory: 'topic_category', Topic: 'topic' }),
        Ms = n('j7Bv'),
        Vs = n('CGyZ'),
        Us = n('cm6r'),
        zs = n('zfvc'),
        Hs = n('EHV7'),
        Ws = n('iY63')
      function Gs(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function Ks(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Gs(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Gs(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var Ys = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(G.a)(
          'svg',
          Ks(
            Ks({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [W.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          g.a.createElement(
            'g',
            null,
            g.a.createElement('path', {
              d: 'M19 13H5c-.553 0-1-.447-1-1s.447-1 1-1h14c.553 0 1 .447 1 1s-.447 1-1 1z',
            }),
          ),
        )
      }
      Ys.metadata = { width: 24, height: 24 }
      var Xs = Ys
      function qs(e) {
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
            a = b()(e)
          if (t) {
            var r = b()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return h()(this, n)
        }
      }
      var Zs = Yt.a.e854ad27,
        Js = (function (e) {
          p()(n, e)
          var t = qs(n)
          function n() {
            var e
            i()(this, n)
            for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              y()(u()(e), '_handleFollow', function () {
                var t = e.props,
                  n = t.id
                ;(0, t.onFollowTopic)(n)
              }),
              y()(u()(e), '_handleUnfollow', function () {
                var t = e.props,
                  n = t.id
                ;(0, t.onUnfollowTopic)(n)
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.id,
                    n = e.onNavigate,
                    a = e.selectedTopicIds,
                    o = e.subtaskInputs,
                    i = e.topicsById[t],
                    s = a.includes(this.props.id)
                  return g.a.createElement(
                    D.a,
                    { style: $s.cell },
                    g.a.createElement(Ms.a, { Icon: Hs.a, size: 'large', style: $s.topicIcon }),
                    g.a.createElement(
                      D.a,
                      { style: $s.topicInfo },
                      g.a.createElement(ae, r()({ weight: 'bold' }, i.title, { onNavigate: n, subtaskInputs: o })),
                      i.description
                        ? g.a.createElement(
                            ae,
                            r()({ color: 'gray700' }, i.description, { onNavigate: n, subtaskInputs: o }),
                          )
                        : null,
                    ),
                    g.a.createElement(Vs.a, {
                      isFollowing: s,
                      onFollow: this._handleFollow,
                      onUnfollow: this._handleUnfollow,
                      showRelationshipChangeConfirmation: !1,
                      size: 'small',
                      type: 'topic',
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(g.a.PureComponent),
        Qs = (function (e) {
          p()(n, e)
          var t = qs(n)
          function n() {
            var e
            i()(this, n)
            for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              y()(u()(e), 'state', { expanded: !1 }),
              y()(u()(e), '_handleClick', function () {
                e.setState({ expanded: !e.state.expanded })
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.categoriesById,
                    n = e.id,
                    a = e.isTopLevel,
                    o = e.onNavigate,
                    i = e.subtaskInputs,
                    s = this.state.expanded,
                    c = t[n],
                    l = s ? tc : ec
                  return g.a.createElement(
                    g.a.Fragment,
                    null,
                    g.a.createElement(
                      Us.a,
                      {
                        accessibilityExpanded: s,
                        accessibilityLabel: Zs({ title: c.title.text }),
                        onClick: this._handleClick,
                        style: $s.cell,
                      },
                      g.a.createElement(
                        ae,
                        r()(
                          { color: 'primary', size: a ? 'headline1' : 'body', weight: a ? 'heavy' : 'bold' },
                          c.title,
                          { onNavigate: o, subtaskInputs: i },
                        ),
                      ),
                      l,
                    ),
                    g.a.createElement(
                      D.a,
                      { style: $s.children },
                      g.a.createElement(zs.b, { show: s }, this._renderChildren()),
                    ),
                  )
                },
              },
              {
                key: '_renderChildren',
                value: function () {
                  var e = this.props,
                    t = e.categoriesById,
                    a = e.id,
                    o = e.onFollowTopic,
                    i = e.onNavigate,
                    s = e.onUnfollowTopic,
                    c = e.selectedTopicIds,
                    l = e.subtaskInputs,
                    u = e.topicsById,
                    d = t[a],
                    p = { selectedTopicIds: c, onFollowTopic: o, onUnfollowTopic: s, topicsById: u, subtaskInputs: l }
                  return d.children_items.map(function (e) {
                    var a = e.id
                    return e.type === Ls.Topic
                      ? g.a.createElement(Js, r()({}, p, { id: a, key: a, onNavigate: i }))
                      : g.a.createElement(n, r()({}, p, { categoriesById: t, id: a, key: a, onNavigate: i }))
                  })
                },
              },
            ]),
            n
          )
        })(g.a.PureComponent),
        $s = A.a.create(function (e) {
          return {
            cell: {
              alignItems: 'center',
              flexDirection: 'row',
              paddingVertical: e.spaces.space12,
              paddingHorizontal: e.spaces.space4,
              justifyContent: 'space-between',
              borderBottomColor: e.colors.borderColor,
              borderBottomStyle: 'solid',
              borderBottomWidth: e.borderWidths.small,
            },
            topicInfo: { flexGrow: 1, flexShrink: 1, marginRight: e.spaces.space12 },
            topicIcon: { flexShrink: 0, marginRight: e.spaces.space12 },
            plusIcon: { color: e.colors.gray700 },
            minusIcon: { color: e.colors.primary },
            children: { marginLeft: e.spaces.space12 },
          }
        }),
        ec = g.a.createElement(Ws.a, { style: $s.plusIcon }),
        tc = g.a.createElement(Xs, { style: $s.minusIcon })
      function nc(e) {
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
            a = b()(e)
          if (t) {
            var r = b()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return h()(this, n)
        }
      }
      var ac = Yt.a.f134915f,
        rc = Yt.a.h6beb5fa,
        oc = Yt.a.b8fb87e0,
        ic = g.a.createElement(H.a, null),
        sc = (function (e) {
          p()(n, e)
          var t = nc(n)
          function n() {
            var e
            i()(this, n)
            for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++) o[s] = arguments[s]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              y()(u()(e), 'state', { hideBanner: !1, selectedTopicIds: e.props.initialSelectedTopicIds, showCart: !1 }),
              y()(u()(e), '_renderCartButton', function () {
                var t = e.props.subtask.selected_topics_cart,
                  n = e.state.selectedTopicIds
                return t && t.title && n.length > 0
                  ? g.a.createElement(
                      D.a,
                      null,
                      g.a.createElement(S.a, {
                        accessibilityLabel: oc,
                        icon: ic,
                        onPress: e._handleOpenCart,
                        size: 'small',
                        type: 'brandOutlined',
                      }),
                      g.a.createElement(Bs.a, {
                        count: n.length,
                        truncatedCountFormatter: rc,
                        unreadCountLabel: ac,
                        withBorder: !0,
                      }),
                    )
                  : null
              }),
              y()(u()(e), '_renderCart', function () {
                var t = e.props,
                  n = t.onNavigate,
                  a = t.subtask,
                  o = t.subtaskInputs,
                  i = a.selected_topics_cart,
                  s =
                    i && i.done_label
                      ? g.a.createElement(
                          S.a,
                          {
                            key: 'button_cancel',
                            onPress: e._handleCloseCart,
                            style: cc.cartButton,
                            type: 'primaryOutlined',
                          },
                          i.done_label.text,
                        )
                      : null
                return g.a.createElement(
                  Ns.a,
                  { onMaskClick: e._handleCloseCart, style: cc.cart, type: 'bottom', withMask: !0 },
                  i && i.title
                    ? g.a.createElement(
                        ae,
                        r()(
                          {
                            align: 'center',
                            onNavigate: n,
                            size: 'headline1',
                            style: cc.cartHeader,
                            subtaskInputs: o,
                            weight: 'heavy',
                          },
                          i.title,
                        ),
                      )
                    : null,
                  e._renderCartItems(),
                  s,
                )
              }),
              y()(u()(e), '_handleOpenCart', function () {
                e.setState({ showCart: !0 }), e.props.analytics.scribe({ element: 'cart', action: 'impression' })
              }),
              y()(u()(e), '_handleCloseCart', function () {
                e.setState({ showCart: !1 }), e.props.analytics.scribe({ element: 'cart', action: 'dismiss' })
              }),
              y()(u()(e), '_renderBanner', function () {
                var t = e.props.subtask.banner,
                  n = e.state.hideBanner
                return t && !n
                  ? g.a.createElement(Ve.a, {
                      actionLabel: t.dismiss_label.text,
                      headline: t.title.text,
                      onAction: e._handleBannerDismiss,
                      onClose: e._handleBannerDismiss,
                      subtext: t.subtitle.text,
                    })
                  : null
              }),
              y()(u()(e), '_renderText', function () {
                var t = e.props,
                  n = t.onNavigate,
                  a = t.subtask,
                  o = t.subtaskInputs,
                  i = a.primary_text,
                  s = a.secondary_text
                return g.a.createElement(
                  D.a,
                  { style: cc.textContainer },
                  i
                    ? g.a.createElement(
                        ae,
                        r()(
                          { align: 'center', onNavigate: n, size: 'headline1', subtaskInputs: o, weight: 'heavy' },
                          i,
                        ),
                      )
                    : null,
                  s
                    ? g.a.createElement(
                        ae,
                        r()(
                          { align: 'center', color: 'gray700', onNavigate: n, style: cc.bodyText, subtaskInputs: o },
                          s,
                        ),
                      )
                    : null,
                )
              }),
              y()(u()(e), '_renderSkip', function () {
                var t = e.props.subtask.skip_link
                return t
                  ? g.a.createElement(
                      S.a,
                      { onPress: e._handleSkipButtonClick, size: 'large', style: cc.skipButton, type: 'primaryText' },
                      t.label,
                    )
                  : null
              }),
              y()(u()(e), '_renderDone', function () {
                var t = e.props.subtask.next_link
                return g.a.createElement(
                  S.a,
                  { onPress: e._handleNextButtonClick, size: 'large', type: 'primaryFilled' },
                  t.label,
                )
              }),
              y()(u()(e), '_renderCartItems', function () {
                var t = e.props,
                  n = t.onNavigate,
                  a = t.subtask,
                  r = t.subtaskInputs,
                  o = e.state.selectedTopicIds
                return o.map(function (t) {
                  return g.a.createElement(Js, {
                    id: t,
                    key: t,
                    onFollowTopic: e._handleFollowTopic,
                    onNavigate: n,
                    onUnfollowTopic: e._handleUnfollowTopic,
                    selectedTopicIds: o,
                    subtaskInputs: r,
                    topicsById: a.topic_by_id_list,
                  })
                })
              }),
              y()(u()(e), '_renderItems', function () {
                var t = e.props,
                  n = t.onNavigate,
                  a = t.subtask,
                  r = t.subtaskInputs,
                  o = e.state.selectedTopicIds
                return a.top_category_ids.map(function (t) {
                  return g.a.createElement(Qs, {
                    categoriesById: a.category_by_id_list,
                    id: t,
                    isTopLevel: !0,
                    key: t,
                    onFollowTopic: e._handleFollowTopic,
                    onNavigate: n,
                    onUnfollowTopic: e._handleUnfollowTopic,
                    selectedTopicIds: o,
                    subtaskInputs: r,
                    topicsById: a.topic_by_id_list,
                  })
                })
              }),
              y()(u()(e), '_handleFollowTopic', function (t) {
                e.props.analytics.scribe({ element: 'topic', action: 'follow', data: { items: [Fs.a.forTopic(t)] } }),
                  e.setState({ selectedTopicIds: [].concat(Jr()(e.state.selectedTopicIds), [t]) })
              }),
              y()(u()(e), '_handleUnfollowTopic', function (t) {
                e.props.analytics.scribe({ element: 'topic', action: 'unfollow', data: { items: [Fs.a.forTopic(t)] } }),
                  e.setState({
                    selectedTopicIds: e.state.selectedTopicIds.filter(function (e) {
                      return e !== t
                    }),
                  })
              }),
              y()(u()(e), '_handleBannerDismiss', function () {
                e.props.analytics.scribe({ element: 'prompt', action: 'dismiss' }), e.setState({ hideBanner: !0 })
              }),
              y()(u()(e), '_handleNextButtonClick', function () {
                var t = e.props,
                  n = t.onNavigate,
                  a = t.subtask,
                  r = t.subtaskId,
                  o = t.updateFlow,
                  i = e.state.selectedTopicIds
                o(r, { link: a.next_link.link_id, selected_topic_ids: i }), n(a.next_link)
              }),
              y()(u()(e), '_handleSkipButtonClick', function () {
                var t = e.props,
                  n = t.onNavigate,
                  a = t.subtask,
                  r = t.subtaskId
                ;(0, t.updateFlow)(r, { link: a.skip_link.link_id }), n(a.skip_link)
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.analytics
                  e.subtask.banner && t.scribe({ element: 'prompt', action: 'impression' })
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.errorDialog,
                    n = e.passthroughOcfScreenProps,
                    a = this.state.showCart,
                    o = g.a.createElement(D.a, null, this._renderSkip(), this._renderDone()),
                    i = this._renderCartButton()
                  return g.a.createElement(
                    he.a,
                    r()({}, n, { leftControl: i, rightControl: o }),
                    g.a.createElement(
                      D.a,
                      { style: se.contentArea },
                      this._renderBanner(),
                      this._renderText(),
                      this._renderItems(),
                    ),
                    a ? this._renderCart() : null,
                    t,
                  )
                },
              },
            ]),
            n
          )
        })(g.a.Component),
        cc = A.a.create(function (e) {
          return {
            skipButton: { marginRight: e.spaces.space12 },
            cart: {
              flexGrow: 1,
              maxHeight: '80vh',
              overflow: 'auto',
              padding: e.spaces.space20,
              paddingBottom: e.spaces.space20,
            },
            cartButton: { marginTop: e.spaces.space12 },
            cartHeader: { marginBottom: e.spaces.space12 },
            textContainer: { marginBottom: e.spaces.space12 },
            bodyText: { alignSelf: 'center', marginTop: e.spaces.space12, maxWidth: 400 },
          }
        }),
        lc = As(sc),
        uc = Object(Ke.createLocalApiErrorHandlerWithContextFactory)('OCF_TWEET_SELECTION_URT'),
        dc = Object(Ge.a)()
          .propsFromActions(function () {
            return { clearTimelineCache: Er.a, createLocalApiErrorHandler: uc }
          })
          .withAnalytics(),
        pc = n('ezF+'),
        fc = n('VPAj'),
        hc = n('kY28'),
        mc = n('CUXw'),
        bc = function (e) {
          var t = e.onClick
          return pc.g({
            component: mc.a,
            createProps: function (e) {
              var n = e.entry
              return {
                index: n.index,
                tweetId: n.content.id,
                onClick: t,
                replyContext: hc.a.ReplyContextTypes.None,
                withActions: !1,
              }
            },
            isClickable: Object(fc.a)(!0),
            isFocusable: Object(fc.a)(!0),
            shouldDisplayBorder: Object(fc.a)(!0),
          })
        },
        vc = n('8UdT'),
        yc = n('VrCx')
      function _c(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function gc(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? _c(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : _c(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var kc = function (e) {
          switch (e) {
            case Fr.a.NOT_FOUND:
              return g.a.createElement(Dr.a, null)
            case Fr.a.NOT_ALLOWED:
              return g.a.createElement(Rr.a, null)
            default:
              return (
                Object(Nt.a)('Unhandled timeline unavailable reason in Ocf TweetSelectionURT screen: '.concat(e)), null
              )
          }
        },
        wc = A.a.create(function (e) {
          return { container: { paddingTop: e.spaces.space40 } }
        }),
        Oc = dc(function (e) {
          var t = e.errorDialog,
            n = e.onNavigate,
            a = e.passthroughOcfScreenProps,
            o = e.subtask,
            i = e.subtaskId,
            s = e.subtaskInputs,
            c = e.updateFlow,
            l = o.graphql_timeline_query,
            u = o.header,
            d = o.next_link,
            p = o.next_link_options,
            f = o.timeline_source,
            h = g.a.useState([]),
            m = R()(h, 2),
            b = m[0],
            v = m[1],
            _ = g.a.useCallback(
              function () {
                c(i, { link: d.link_id, selected_tweet_ids: b }), n(d)
              },
              [b, n, d, i, c],
            ),
            k = g.a.useCallback(
              function (e) {
                v(function (t) {
                  return t.includes(e)
                    ? t.filter(function (t) {
                        return e !== t
                      })
                    : t.concat(e)
                })
              },
              [v],
            ),
            w = g.a.useMemo(
              function () {
                return (function (e) {
                  var t,
                    n = e.handleTweetClick
                  return gc(
                    gc({}, Sr.b),
                    {},
                    ((t = {}),
                    y()(t, vc.b.Tombstone, pc.e(pc.a())),
                    y()(
                      t,
                      vc.b.Tweet,
                      gc(gc({}, Sr.b[vc.b.Tweet]), {}, { handlers: y()({}, yc.a.Tweet, bc({ onClick: n })) }),
                    ),
                    t),
                  )
                })({ handleTweetClick: k })
              },
              [k],
            ),
            O = g.a.useMemo(
              function () {
                return (function (e, t) {
                  return e
                    ? Object(jr.a)(e.timeline_key)
                    : Object(Or.a)({ urtUrl: { url: t || '', urlType: Nr.a.UrtEndpoint } })
                })(l, f)
              },
              [l, f],
            ),
            E = g.a.useMemo(
              function () {
                return (function (e, t) {
                  if (t) {
                    var n = t.max_enable_count,
                      a = t.min_enable_count
                    if (a && n) return a <= e && e <= n
                    if (a) return a <= e
                    if (n) return e <= n
                  }
                  return !0
                })(b.length, p)
              },
              [b, p],
            ),
            C = g.a.createElement(
              S.a,
              { disabled: !E, onPress: _, size: 'large', type: 'primaryFilled' },
              o.next_link.label,
            )
          return g.a.createElement(
            he.a,
            r()({}, a, { rightControl: C }),
            g.a.createElement(
              D.a,
              { style: se.contentArea },
              u ? g.a.createElement(fe, { header: u, onNavigate: n, subtaskInputs: s }) : null,
              g.a.createElement(
                D.a,
                { style: wc.container },
                g.a.createElement(Tr.a, { entryConfiguration: w, module: O, renderUnavailable: kc, title: '' }),
              ),
            ),
            t,
          )
        }),
        Ec = function (e, t) {
          var n = ni.h(e),
            a = n ? ti.k(e, n) : []
          return R()(a, 1)[0]
        },
        Cc = function (e, t) {
          var n = ni.i(e),
            a = n ? ti.k(e, n) : []
          return R()(a, 1)[0]
        }
      function Sc(e) {
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
            a = b()(e)
          if (t) {
            var r = b()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return h()(this, n)
        }
      }
      var xc = Object(Ge.a)()
          .propsFromState(function () {
            return { avatarMedia: Ec, bannerMedia: Cc }
          })
          .propsFromActions(function () {
            return { scribeAction: vt.c, updateProfileAvatar: ni.l, updateProfileBanner: ni.m }
          })
          .withAnalytics()(
          (function (e) {
            p()(n, e)
            var t = Sc(n)
            function n() {
              var e
              i()(this, n)
              for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o]
              return (
                (e = t.call.apply(t, [this].concat(r))),
                y()(u()(e), '_scribeUploadStart', function (t) {
                  var n = e.props,
                    a = n.analytics,
                    r = {
                      section: t,
                      element: 'upload',
                      action: 'start',
                      data: { items: [{ token: n.flowToken, name: n.subtaskId }] },
                    }
                  a.scribe(r)
                }),
                y()(u()(e), '_updateMedia', function () {
                  var t = e.props,
                    n = t.avatarMedia,
                    a = t.bannerMedia,
                    r = t.subtask.sources,
                    o = t.updateProfileAvatar,
                    i = t.updateProfileBanner
                  return new Promise(function (t, s) {
                    try {
                      r.forEach(function (t) {
                        var r = t.style
                        r === k.l.Avatar && n
                          ? (e._scribeUploadStart('select_avatar'), o(n.id))
                          : r === k.l.Banner && a && (e._scribeUploadStart('select_banner'), i(a.id))
                      }),
                        t()
                    } catch (c) {
                      s(c)
                    }
                  })
                }),
                e
              )
            }
            return (
              c()(n, [
                {
                  key: 'render',
                  value: function () {
                    var e = this.props,
                      t = e.onNavigate,
                      n = e.subtask,
                      a = e.subtaskId
                    return g.a.createElement(Qe, {
                      navigationLink: n.next_link,
                      onNavigate: t,
                      subtaskAction: this._updateMedia,
                      subtaskId: a,
                    })
                  },
                },
              ]),
              n
            )
          })(g.a.Component),
        ),
        Ic = (n('7xRU'), n('IcAo')),
        Pc = n('Ka9G'),
        jc = g.a.createContext(new Set()),
        Rc = function (e, t) {
          return function (n) {
            n.loggedInUserId, n.promotedContent
            var a = n.userId
            return g.a.createElement(jc.Consumer, null, function (n) {
              return g.a.createElement(Vs.a, {
                isFollowing: n.has(a),
                onFollow: e(a),
                onUnfollow: t(a),
                showRelationshipChangeConfirmation: !1,
                size: 'small',
                style: Dc.followButton,
                type: 'user',
              })
            })
          }
        },
        Dc = A.a.create(function (e) {
          return { followButton: { alignSelf: 'flex-start', marginLeft: e.spaces.space12 } }
        }),
        Tc = function (e, t, n) {
          return function (a) {
            var r = a.user.id_str
            n.has(r) ? t(r)() : e(r)()
          }
        },
        Ac = n('ZNT5')
      function Fc(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function Bc(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Fc(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Fc(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function Nc(e) {
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
            a = b()(e)
          if (t) {
            var r = b()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return h()(this, n)
        }
      }
      var Lc = function (e) {
          switch (e) {
            case Fr.a.NOT_FOUND:
              return g.a.createElement(Dr.a, null)
            case Fr.a.NOT_ALLOWED:
              return g.a.createElement(Rr.a, null)
            default:
              return Object(Nt.a)('Unhandled timeline unavailable reason: '.concat(e)), null
          }
        },
        Mc = (function (e) {
          p()(n, e)
          var t = Nc(n)
          function n(e) {
            var a
            return (
              i()(this, n),
              (a = t.call(this, e)),
              y()(u()(a), '_isBelowMinFollows', function () {
                var e = a.props.subtask.min_follow_count
                return !!e && a.state.selectedUsers.size < e
              }),
              y()(
                u()(a),
                '_getMemoizedModule',
                Object(Vr.a)(function (e, t) {
                  return (
                    (a = (n = { subtask_id: e, flow_token: t || '' }).flow_token),
                    (r = n.subtask_id),
                    Object(Ac.a)({
                      timelineId: 'nux-user-recos-'.concat(r),
                      getEndpoint: function (e) {
                        return e.URT.fetchNUXUserRecommendations
                      },
                      getEndpointParams: function (e) {
                        return Bc(Bc({}, e), {}, { subtask_id: r, flow_token: a })
                      },
                      context: 'FETCH_NUX_USER_RECOS',
                      perfKey: 'nux-user-recos',
                    })
                  )
                  var n, a, r
                }),
              ),
              y()(u()(a), '_getModule', function () {
                var e = a.props,
                  t = e.flowToken,
                  n = e.subtaskId
                return a._getMemoizedModule(n, t)
              }),
              y()(u()(a), '_onFollow', function (e) {
                return function () {
                  var t = Object(at.a)(Jr()(a.state.selectedUsers))
                  t.add(e), a.setState({ selectedUsers: t }), a._handleScribe('follow')
                }
              }),
              y()(u()(a), '_onUnfollow', function (e) {
                return function () {
                  var t = Object(at.a)(Jr()(a.state.selectedUsers))
                  t.has(e) && t.delete(e), a.setState({ selectedUsers: t }), a._handleScribe('unfollow')
                }
              }),
              y()(u()(a), '_getFollowText', function (e, t, n) {
                return !e || n < 1 ? t : e.concat(Lr.a.getFormattedCount(n))
              }),
              y()(u()(a), '_handleFollowButtonClick', function () {
                var e = a.props,
                  t = e.onNavigate,
                  n = e.subtask,
                  r = e.subtaskId
                ;(0, e.updateFlow)(r, {
                  link: n.next_link.link_id,
                  selected_user_recommendations: Jr()(a.state.selectedUsers),
                }),
                  t(n.next_link)
              }),
              y()(u()(a), '_handleSkipButtonClick', function () {
                var e = a.props,
                  t = e.onNavigate,
                  n = e.subtask.skip_link,
                  r = e.subtaskId,
                  o = e.updateFlow
                n && o(r, { link: n.link_id }), n && t(n)
              }),
              (a.state = { selectedUsers: new Set() }),
              a
            )
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e,
                    t = this.props,
                    n = t.onNavigate,
                    a = t.passthroughOcfScreenProps,
                    o = t.subtask,
                    i = t.subtaskInputs,
                    s = this.state.selectedUsers,
                    c = ''
                  if (o.next_link_threshold_text && o.next_link_threshold_text.length > 0) {
                    var l = o.next_link_threshold_text[0]
                    c = l && l.text && l.text.text
                  }
                  var u,
                    d,
                    p,
                    f,
                    h = o.next_link.label,
                    m = s.size,
                    b = this._getFollowText(c, h, m),
                    v = g.a.createElement(
                      S.a,
                      {
                        disabled: this._isBelowMinFollows(),
                        onPress: this._handleFollowButtonClick,
                        size: 'large',
                        type: 'primaryFilled',
                      },
                      b,
                    ),
                    _ =
                      o.skip_link && o.skip_link.label
                        ? g.a.createElement(
                            S.a,
                            { onPress: this._handleSkipButtonClick, size: 'large', type: 'primaryText' },
                            null === (e = o.skip_link) || void 0 === e ? void 0 : e.label,
                          )
                        : null,
                    k = this._isBelowMinFollows() && _ ? _ : v,
                    O = Array.from(s).join(',')
                  return g.a.createElement(
                    he.a,
                    r()({}, a, { rightControl: k }),
                    g.a.createElement(
                      D.a,
                      { style: Uc.main },
                      o.primary_text
                        ? g.a.createElement(
                            ae,
                            r()({}, o.primary_text, {
                              nativeID: w.b,
                              onNavigate: n,
                              size: 'title4',
                              style: se.headline,
                              subtaskInputs: i,
                              weight: 'bold',
                            }),
                          )
                        : null,
                      o.secondary_text
                        ? g.a.createElement(
                            ae,
                            r()({}, o.secondary_text, {
                              onNavigate: n,
                              size: 'body',
                              style: se.subHeader,
                              subtaskInputs: i,
                              weight: 'bold',
                            }),
                          )
                        : null,
                      g.a.createElement(
                        jc.Provider,
                        { value: s },
                        g.a.createElement(Tr.a, {
                          entryConfiguration:
                            ((u = { onFollow: this._onFollow, onUnfollow: this._onUnfollow, currentFollows: s }),
                            (d = u.currentFollows),
                            (p = u.onFollow),
                            (f = u.onUnfollow),
                            Object(Ic.a)(
                              {},
                              Sr.b,
                              y()(
                                {},
                                vc.b.User,
                                Object(Pc.a)({
                                  decoration: Rc(p, f),
                                  withLink: !1,
                                  shouldScribeProfileClick: !1,
                                  onClick: Tc(p, f, d),
                                }),
                              ),
                            )),
                          fetchOptions: { follows: O },
                          module: this._getModule(),
                          renderUnavailable: Lc,
                          title: '',
                        }),
                      ),
                    ),
                    this.props.errorDialog,
                  )
                },
              },
              {
                key: '_handleScribe',
                value: function (e) {
                  this.props.analytics.scribe({ element: 'user', action: e })
                },
              },
            ]),
            n
          )
        })(g.a.Component),
        Vc = Object(Lt.a)(Mc, { page: 'onboarding', section: 'user_recommendations' }),
        Uc = A.a.create(function (e) {
          return { main: { marginHorizontal: e.spaces.space20 } }
        }),
        zc = (n('DfhM'), n('tI3i')),
        Hc = n.n(zc),
        Wc = n('TEoO'),
        Gc = n('tn7R'),
        Kc = A.a.create(function (e) {
          return { followButton: { alignSelf: 'flex-start', marginLeft: e.spaces.space12 } }
        }),
        Yc = function (e) {
          var t = e.isCheckboxFollowButton,
            n = e.onSearchUserUnfollowed,
            a = e.user,
            r = a.id_str,
            o = a.screen_name,
            i = function () {
              return n(r)
            }
          return t
            ? g.a.createElement(ct.a, { checked: !0, onChange: i })
            : g.a.createElement(Vs.a, {
                isFollowing: !0,
                name: o,
                onFollow: Pe.a,
                onUnfollow: i,
                showRelationshipChangeConfirmation: !1,
                size: 'small',
                style: Kc.followButton,
                type: 'user',
              })
        },
        Xc = A.a.create(function (e) {
          return {
            group: {
              borderTopColor: e.colors.borderColor,
              borderTopStyle: 'solid',
              borderTopWidth: e.borderWidths.small,
            },
            groupHeader: {
              alignItems: 'center',
              borderBottomColor: e.colors.borderColor,
              borderBottomStyle: 'solid',
              borderBottomWidth: e.borderWidths.small,
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: e.spaces.space20,
              paddingVertical: e.spaces.space12,
            },
          }
        }),
        qc = function (e) {
          var t = e.children,
            n = e.header
          return g.a.createElement(D.a, { style: Xc.group }, g.a.createElement(D.a, { style: Xc.groupHeader }, n), t)
        },
        Zc = n('tocL'),
        Jc = n('Re5t'),
        Qc = A.a.create(function (e) {
          return {
            userCellListItem: { paddingHorizontal: e.spaces.space20 },
            userCellListItemWrapper: { display: 'flex', flexDirection: 'column', justifyContent: 'center' },
          }
        }),
        $c = function (e) {
          var t = e.decorator,
            n = e.description,
            a = e.id,
            r = (e.isFollowing, e.isVerified),
            o = e.name,
            i = e.onCellClick,
            s = e.profileImageUrl,
            c = e.screenName,
            l = e.socialText,
            u = g.a.useMemo(
              function () {
                if (l) return { contextType: Zc.a.Follow, text: l }
              },
              [l],
            )
          return g.a.createElement(
            D.a,
            { accessibilityRole: 'label', style: Qc.userCellListItemWrapper },
            g.a.createElement(de.a, {
              avatarUri: s,
              decoration: t,
              description: n,
              displayMode: Jc.a.UserDetailed,
              entities: {},
              isVerified: r,
              name: o,
              onCellClick: i,
              promotedItemType: 'users',
              screenName: c,
              socialContext: u,
              style: Qc.userCellListItem,
              userId: a,
              withLink: !1,
            }),
          )
        },
        el = function (e) {
          var t = e.isCheckboxFollowButton,
            n = e.onSearchUserRemove,
            a = e.selectedSearchHeader,
            r = e.selectedSearchUsers,
            o = Object(Gc.a)(r)
          if (!a || !o.length) return null
          var i = function (e) {
            return n(e)
          }
          return g.a.createElement(
            qc,
            { header: g.a.createElement(T.b, { size: 'headline1', weight: 'bold' }, a) },
            o.map(function (e) {
              return g.a.createElement($c, {
                decorator: g.a.createElement(Yc, { isCheckboxFollowButton: t, onSearchUserUnfollowed: i, user: e }),
                id: e.id_str,
                isFollowing: !0,
                isVerified: e.verified,
                key: e.id_str,
                name: e.name,
                onCellClick: function () {
                  return i(e.id_str)
                },
                profileImageUrl: e.profile_image_url_https,
                screenName: e.screen_name,
              })
            }),
          )
        },
        tl = A.a.create(function (e) {
          return { followButton: { alignSelf: 'flex-start', marginLeft: e.spaces.space12 } }
        }),
        nl = function (e) {
          var t = e.isCheckboxFollowButton,
            n = e.isFollowed,
            a = e.screenName,
            r = e.updateFollowedItems,
            o = e.userId,
            i = function (e) {
              return function () {
                return r(o, e)
              }
            }
          return t
            ? g.a.createElement(ct.a, {
                checked: n,
                onChange: function () {
                  return r(o, !n)
                },
              })
            : g.a.createElement(Vs.a, {
                isFollowing: n,
                name: a,
                onFollow: i(!0),
                onUnfollow: i(!1),
                showRelationshipChangeConfirmation: !1,
                size: 'small',
                style: tl.followButton,
                type: 'user',
              })
        },
        al = function (e) {
          return e.items
            .map(function (e) {
              return e.user_id_str
            })
            .join('-')
        },
        rl = Zt.a,
        ol = function (e) {
          var t = e.userGroups,
            n = e.selectedSearchUsers,
            a = e.onNearEnd,
            r = void 0 === a ? Pe.a : a,
            o = e.followButtonType,
            i = e.followedUserIds,
            s = e.onFollow,
            c = e.onUnfollow,
            l = e.onSearchUserRemove,
            u = e.selectedSearchHeader,
            d = g.a.useContext($e.a).loggedInUserId
          Hc()(!!d, 'loggedInUserId must be defined')
          var p = o === k.h.Checkbox,
            f = g.a.useCallback(
              function (e, t) {
                return t ? s(e) : c(e)
              },
              [s, c],
            ),
            h = g.a.useCallback(
              function (e, t) {
                f([e], t)
              },
              [f],
            ),
            m = g.a.useCallback(
              function (e, t) {
                return function () {
                  var n = e.items.map(function (e) {
                    return e.user_id_str
                  })
                  f(n, !t)
                }
              },
              [f],
            ),
            b = g.a.useCallback(
              function (e) {
                var t = e.items.every(function (e) {
                    return i.has(e.user_id_str)
                  }),
                  n = g.a.createElement(
                    g.a.Fragment,
                    null,
                    g.a.createElement(T.b, { size: 'headline1', weight: 'bold' }, e.header),
                    p && g.a.createElement(ct.a, { checked: t, onChange: m(e, t) }),
                  )
                return g.a.createElement(
                  qc,
                  { header: n },
                  e.items.map(function (e) {
                    var t = e.social_text,
                      n = e.user,
                      a = i.has(n.id_str)
                    return g.a.createElement($c, {
                      decorator: g.a.createElement(nl, {
                        isCheckboxFollowButton: p,
                        isFollowed: a,
                        screenName: n.screen_name,
                        updateFollowedItems: h,
                        userId: n.id_str,
                      }),
                      description: n.description,
                      id: n.id_str,
                      isFollowing: a,
                      isVerified: n.verified,
                      key: n.id_str,
                      name: n.name,
                      onCellClick: function () {
                        return h(n.id_str, !a)
                      },
                      profileImageUrl: n.profile_image_url_https,
                      screenName: n.screen_name,
                      socialText: t,
                    })
                  }),
                )
              },
              [i, p, m, h],
            )
          return g.a.createElement(
            D.a,
            null,
            g.a.createElement(el, {
              isCheckboxFollowButton: p,
              onSearchUserRemove: l,
              selectedSearchHeader: u,
              selectedSearchUsers: n,
            }),
            g.a.createElement(Wc.a, {
              cacheKey: 'userSelectList/'.concat(d),
              identityFunction: al,
              items: t,
              nearEndProximityRatio: 1.15,
              noItemsRenderer: rl,
              onNearEnd: r,
              renderer: b,
            }),
          )
        }
      function il(e, t) {
        var n
        if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (!e) return
              if ('string' == typeof e) return sl(e, t)
              var n = Object.prototype.toString.call(e).slice(8, -1)
              'Object' === n && e.constructor && (n = e.constructor.name)
              if ('Map' === n || 'Set' === n) return Array.from(e)
              if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return sl(e, t)
            })(e)) ||
            (t && e && 'number' == typeof e.length)
          ) {
            n && (e = n)
            var a = 0,
              r = function () {}
            return {
              s: r,
              n: function () {
                return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] }
              },
              e: function (e) {
                throw e
              },
              f: r,
            }
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
          )
        }
        var o,
          i = !0,
          s = !1
        return {
          s: function () {
            n = e[Symbol.iterator]()
          },
          n: function () {
            var e = n.next()
            return (i = e.done), e
          },
          e: function (e) {
            ;(s = !0), (o = e)
          },
          f: function () {
            try {
              i || null == n.return || n.return()
            } finally {
              if (s) throw o
            }
          },
        }
      }
      function sl(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n]
        return a
      }
      function cl(e) {
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
            a = b()(e)
          if (t) {
            var r = b()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return h()(this, n)
        }
      }
      var ll = [oo.a.Users],
        ul = 'selected_user_recommendations',
        dl = (function (e) {
          p()(n, e)
          var t = cl(n)
          function n(e) {
            var a
            i()(this, n),
              (a = t.call(this, e)),
              y()(u()(a), '_getPreCheckedUsers', function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
                return Object(at.a)(
                  e.reduce(function (e, t) {
                    var n = t.items.reduce(function (e, t) {
                      return t.checked_by_default && e.push(t.user_id_str), e
                    }, [])
                    return [].concat(Jr()(e), Jr()(n))
                  }, []),
                )
              }),
              y()(u()(a), '_getFollowText', function (e, t, n) {
                return !e || n < 1 ? t : e.concat(Lr.a.getFormattedCount(n))
              }),
              y()(u()(a), '_handleSelectionChanged', function (e) {
                a.setState({ selectedUsers: Object(at.a)(e) })
              }),
              y()(u()(a), '_handleOnUnfollowsSelected', function (e) {
                var t,
                  n = Object(at.a)(Jr()(a.state.selectedUsers)),
                  r = a.state.selectedSearchUsers,
                  o = il(e)
                try {
                  for (o.s(); !(t = o.n()).done; ) {
                    var i = t.value
                    n.has(i) && n.delete(i), delete r[i]
                  }
                } catch (s) {
                  o.e(s)
                } finally {
                  o.f()
                }
                a.setState({ selectedUsers: n, selectedSearchUsers: r })
              }),
              y()(u()(a), '_handleOnFollowsSelected', function (e) {
                var t,
                  n = Object(at.a)(Jr()(a.state.selectedUsers)),
                  r = il(e)
                try {
                  for (r.s(); !(t = r.n()).done; ) {
                    var o = t.value
                    n.add(o)
                  }
                } catch (i) {
                  r.e(i)
                } finally {
                  r.f()
                }
                a.setState({ selectedUsers: n })
              }),
              y()(u()(a), '_handleFollowButtonClick', function () {
                var e = a.props,
                  t = e.onNavigate,
                  n = e.subtask,
                  r = e.subtaskId
                ;(0, e.updateFlow)(r, {
                  link: n.next_link.link_id,
                  selected_user_recommendations: Jr()(a.state.selectedUsers),
                  searched_users: Object.keys(a.state.selectedSearchUsers),
                }),
                  t(n.next_link)
              }),
              y()(u()(a), '_handleSkipButtonClick', function () {
                var e = a.props,
                  t = e.onNavigate,
                  n = e.subtask.skip_link,
                  r = e.subtaskId,
                  o = e.updateFlow
                n && o(r, { link: n.link_id }), n && t(n)
              }),
              y()(u()(a), '_handleSearchUserRemoved', function (e) {
                return a._handleOnUnfollowsSelected([e])
              }),
              y()(u()(a), '_handleSearchSuggestionSelected', function (e, t) {
                if (e.type === oo.b.User) {
                  var n = e.data,
                    r = a.state,
                    o = r.selectedSearchUsers,
                    i = r.selectedUsers
                  a._recommendedUsers.has(n.id_str) && i.add(n.id_str),
                    (o[n.id_str] = n),
                    a.setState({ selectedSearchUsers: o, selectedUsers: i })
                }
              })
            var r = e.subtaskId,
              o = e.subtaskInputs,
              s = Object(at.a)([]),
              c = Object(ee.e)(o, { key: ul, subtask_id: r }, s)
            return (
              (a._recommendedUsers = Object(at.a)(
                e.subtask.groups
                  .map(function (e) {
                    return e.items.map(function (e) {
                      return e.user_id ? e.user_id.toString() : ''
                    })
                  })
                  .reduce(function (e, t) {
                    return e.concat(t)
                  }),
              )),
              (a.state = {
                selectedSearchUsers: {},
                selectedUsers: c && c.size ? c : a._getPreCheckedUsers(e.subtask.groups),
              }),
              a
            )
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e,
                    t = this.props,
                    n = t.onNavigate,
                    a = t.passthroughOcfScreenProps,
                    o = t.subtask,
                    i = t.subtaskInputs,
                    s = this.state,
                    c = s.selectedSearchUsers,
                    l = s.selectedUsers,
                    u = (((o.next_link_threshold_text || {})[0] || {}).text || {}).text,
                    d = o.next_link.label,
                    p = (c ? Object.keys(c).length : 0) + l.size,
                    f = this._getFollowText(u, d, p),
                    h = g.a.createElement(
                      S.a,
                      { onPress: this._handleFollowButtonClick, size: 'large', type: 'primaryFilled' },
                      f,
                    ),
                    m =
                      o.skip_link && o.skip_link.label
                        ? g.a.createElement(
                            S.a,
                            { onPress: this._handleSkipButtonClick, size: 'large', type: 'primaryText' },
                            null === (e = o.skip_link) || void 0 === e ? void 0 : e.label,
                          )
                        : null,
                    b = null === o.min_follow_count || void 0 === o.min_follow_count ? 1 : o.min_follow_count,
                    v = l.size >= b ? h : m,
                    y = o.show_user_search
                      ? g.a.createElement(
                          D.a,
                          { style: [se.contentArea, pl.searchContainer] },
                          g.a.createElement(ao.c, {
                            filter: ll,
                            onItemClick: this._handleSearchSuggestionSelected,
                            placeholder: o.hint,
                            rounded: !0,
                            shouldAutoFocus: !0,
                            shouldClearOnSelect: !0,
                            source: oo.d.WelcomeFlow,
                          }),
                        )
                      : null
                  return g.a.createElement(
                    he.a,
                    r()({}, a, { rightControl: v }),
                    g.a.createElement(
                      D.a,
                      null,
                      g.a.createElement(
                        D.a,
                        { style: pl.main },
                        o.primary_text
                          ? g.a.createElement(
                              ae,
                              r()({}, o.primary_text, {
                                nativeID: w.b,
                                onNavigate: n,
                                size: 'title4',
                                style: se.headline,
                                subtaskInputs: i,
                                weight: 'bold',
                              }),
                            )
                          : null,
                        o.secondary_text
                          ? g.a.createElement(
                              ae,
                              r()({}, o.secondary_text, {
                                onNavigate: n,
                                size: 'body',
                                style: se.subHeader,
                                subtaskInputs: i,
                                weight: 'bold',
                              }),
                            )
                          : null,
                      ),
                      y,
                      g.a.createElement(
                        D.a,
                        null,
                        g.a.createElement(ol, {
                          followButtonType: o.follow_button_type,
                          followedUserIds: l,
                          onFollow: this._handleOnFollowsSelected,
                          onSearchUserRemove: this._handleSearchUserRemoved,
                          onUnfollow: this._handleOnUnfollowsSelected,
                          selectedSearchHeader:
                            (o.custom_recommendations_header && o.custom_recommendations_header.text) || void 0,
                          selectedSearchUsers: c,
                          userGroups: o.groups,
                        }),
                      ),
                    ),
                    this.props.errorDialog,
                  )
                },
              },
            ]),
            n
          )
        })(g.a.Component),
        pl = A.a.create(function (e) {
          return {
            secondaryText: { marginBottom: e.spaces.space16 },
            main: { marginHorizontal: e.spaces.space20 },
            searchContainer: { marginBottom: e.spaces.space16, zIndex: 1 },
          }
        })
      function fl(e) {
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
            a = b()(e)
          if (t) {
            var r = b()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return h()(this, n)
        }
      }
      var hl = (function (e) {
          p()(n, e)
          var t = fl(n)
          function n() {
            var e
            i()(this, n)
            for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              y()(u()(e), '_isInteractive', 'interactive' === e.props.subtask.style),
              y()(u()(e), '_navigateAndUpdate', function (t) {
                var n = e.props,
                  a = n.onNavigate,
                  r = n.subtask,
                  o = n.subtaskId
                ;(0, n.updateFlow)(o, { link: t.link_id, wait_time_ms: r.wait_time_ms }), a(t, !0)
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._interactiveInterval && clearInterval(this._interactiveInterval),
                    this._interactiveTimeout && clearTimeout(this._interactiveTimeout),
                    this._spinnerTimer && clearTimeout(this._spinnerTimer)
                },
              },
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.pollInteractivePath,
                    a = t.subtask
                  if (this._isInteractive) {
                    var r = a.extension_endpoint
                    a.extension_polling_interval_ms &&
                      r &&
                      (this._interactiveInterval = setInterval(function () {
                        n(r).then(function (t) {
                          t && e._navigateAndUpdate(a.next_link)
                        })
                      }, a.extension_polling_interval_ms))
                    var o = a.extension_timeout_link
                    o &&
                      (this._interactiveTimeout = setTimeout(function () {
                        e._navigateAndUpdate(o)
                      }, a.max_extension_time_ms || a.wait_time_ms))
                  } else
                    this._spinnerTimer = setTimeout(function () {
                      e._navigateAndUpdate(a.next_link)
                    }, a.wait_time_ms)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.onNavigate,
                    n = e.passthroughOcfScreenProps,
                    a = e.subtask,
                    o = e.subtaskInputs
                  return g.a.createElement(
                    he.a,
                    n,
                    g.a.createElement(
                      D.a,
                      { style: ml.indicator },
                      this._isInteractive && a.header
                        ? g.a.createElement(
                            D.a,
                            { style: se.contentArea },
                            g.a.createElement(fe, { header: a.header, onNavigate: t, subtaskInputs: o }),
                            a.detail_text
                              ? g.a.createElement(ae, r()({}, a.detail_text, { onNavigate: t, subtaskInputs: o }))
                              : null,
                          )
                        : g.a.createElement(fo.a, null),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(g.a.Component),
        ml = A.a.create(function (e) {
          return { indicator: { display: 'flex', flex: 1, justifyContent: 'center' } }
        }),
        bl = n('7N4s')
      function vl(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function yl(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? vl(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : vl(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function _l(e) {
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
            a = b()(e)
          if (t) {
            var r = b()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return h()(this, n)
        }
      }
      var gl = { page: 'onboarding' },
        kl = Yt.a.c20aaf3d,
        wl = Yt.a.a219e217,
        Ol = (function (e) {
          p()(n, e)
          var t = _l(n)
          function n(e, a) {
            var o
            return (
              i()(this, n),
              (o = t.call(this, e, a)),
              y()(u()(o), '_handleBackAttempt', function (e, t) {
                var n = o.props.currentSubtask,
                  a = !n || !n.subtask_back_navigation || n.subtask_back_navigation !== k.x.Disallow,
                  r = !((null == n ? void 0 : n.subtask_back_navigation) !== k.x.CancelFlow),
                  i = !o.currentPreviousNavigableSubtaskId && (o._onFirstTaskSinceStart || r) && a
                return (
                  !('POP' === t && !i) ||
                  (o.currentPreviousNavigableSubtaskId && a && o._navigateToPreviousSubtask(), !1)
                )
              }),
              y()(u()(o), '_sendGaOnboardingEvent', function (e) {
                ;(0, o.props.googleAnalyticsSendEvent)('signup', e, 'new-user')
              }),
              y()(u()(o), '_startFlow', function (e) {
                var t = e.countryCode,
                  n = e.createLocalApiErrorHandler,
                  a = e.debugOverrides,
                  r = e.flowName,
                  i = e.inputFlowData,
                  s = e.location,
                  c = e.startFlow,
                  l = e.startLocation,
                  u = e.targetUserId,
                  d = e.testCountryCode,
                  p = s.state || {},
                  f = p.fromApp,
                  h = {
                    flow_context: yl(
                      { debug_overrides: a, gated_action: p.gatedAction },
                      Object.keys(l || {}).length
                        ? { start_location: l }
                        : { start_location: { location: f ? 'unknown' : 'manual_link' } },
                    ),
                  },
                  m = yl(yl({}, i), {}, { country_code: t || i.country_code, target_user_id: u || i.target_user_id }, h)
                'signup' === r && o._sendGaOnboardingEvent('signup-clicked'),
                  (o._onFirstTaskSinceStart = !0),
                  c({ flow_name: r, input_flow_data: m, subtask_versions: ee.a, test_country_code: d }).catch(
                    n(mn(r, null, o._displayFailureMessage)),
                  )
              }),
              y()(u()(o), '_handleFlowRestart', function () {
                o._startFlow(o.props)
              }),
              y()(u()(o), '_handleAbortFlow', function (e) {
                var t = o.props,
                  n = t.clearFlow,
                  a = t.currentSubtask,
                  r = t.history,
                  i = t.location,
                  s = t.loginReturnPath,
                  c = t.onAbort,
                  l = t.returnPath
                n({ clearPersistence: !0 })
                var u = a && Object(ee.h)(a),
                  d = (a || {}).subtask_back_navigation_link
                if (c) c()
                else if (l) r.replace({ pathname: l, query: { flow_status: e } })
                else if (u === k.A.OpenHomeTimeline) r.replace('/home')
                else if (d) o._handleNavigate(d)
                else {
                  var p = !!o.context.loggedInUserId
                  o._unblockHistory && o._unblockHistory(),
                    Object(Si.a)({}, { location: i })
                      ? r.goBack()
                      : p
                      ? s
                        ? r.replace(s)
                        : r.replace('/home')
                      : r.replace('/')
                }
              }),
              y()(u()(o), '_handleDeepLink', function (e) {
                var t = o.props.history
                e &&
                  (['twitter://', 'https://'].find(function (t) {
                    return e.startsWith(t)
                  })
                    ? qt.b.navigateTo(e)
                    : t.replace(e))
              }),
              y()(u()(o), '_displayFailureMessage', function (e) {
                o.setState({ alertFailureMessage: e })
              }),
              y()(u()(o), '_submitFlow', function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                  t = e.isTaskNavigation,
                  n = o.props,
                  a = n.createLocalApiErrorHandler,
                  r = n.flowName,
                  i = n.submitFlow
                return i({ isTaskNavigation: t }).then(
                  function (e) {
                    return (o._onFirstTaskSinceStart = !1), e
                  },
                  function (e) {
                    var t = o.props,
                      n = t.failureMessage,
                      i = t.shouldAbort
                    return a(mn(r, n, i ? o._displayFailureMessage : void 0))(e)
                  },
                )
              }),
              y()(u()(o), '_handleNavigate', function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                  n = o.props,
                  a = n.navigateSubtask,
                  r = n.submitFlow,
                  i = e.is_destructive,
                  s = e.subtask_id,
                  c = e.subtask_navigation_context
                switch (
                  (e.suppress_client_events || o._scribeSubtaskNavigate(e),
                  e.callbacks && o._handleCallbacks(e.callbacks, k.p.Click),
                  e.link_type)
                ) {
                  case k.m.Abort:
                    r().catch(Pe.a), o._handleAbortFlow()
                    break
                  case k.m.Subtask:
                    a({ subtaskId: s, navigationContext: c, destructive: i, fromHiddenSubtask: t })
                    break
                  case k.m.Finish:
                  case k.m.Task:
                    o._submitFlow({ isTaskNavigation: !0 })
                    break
                  case k.m.Deeplink:
                    o._submitFlow(), o._handleDeepLink(e.url)
                    break
                  case k.m.DeeplinkAndAbort:
                    r().catch(Pe.a), o._handleDeepLink(e.url)
                    break
                  case k.m.WeblinkAndAbort:
                    r().catch(Pe.a), window.open(e.url, '_blank'), o._handleAbortFlow()
                    break
                  case k.m.Web:
                    qt.b.navigateTo(e.url)
                    break
                  case k.m.ChromelessWeb:
                    window.open(e.url, '_blank')
                    break
                  case k.m.DeeplinkInPlace:
                    break
                  default:
                    Object(Nt.a)('Unknown Navigation Link Type '.concat(e.link_type)), o._handleAbortFlow()
                }
              }),
              y()(u()(o), '_scribeSubtaskNavigate', function (e) {
                var t = o.props,
                  n = t.currentSubtask,
                  a = t.flowToken,
                  r = t.scribeAction
                if (n && n.subtask_id) {
                  var i = e.link_id
                  r(yl(yl({}, gl), {}, { element: 'link', action: 'click' }), {
                    items: [{ token: a, name: n.subtask_id, description: i }],
                  })
                }
              }),
              y()(u()(o), '_navigateToSubtask', function (e) {
                return function () {
                  o._handleNavigate({ link_id: '', link_type: k.m.Subtask, subtask_id: e })
                }
              }),
              y()(u()(o), '_endFlowSubtaskAction', function (e, t) {
                var n = o.props.submitFlow
                switch (t) {
                  case k.m.Abort:
                    n()
                      .catch(Pe.a)
                      .then(function () {
                        return o._handleAbortFlow(e)
                      })
                    break
                  case k.m.Finish:
                    o._submitFlow().then(function () {
                      return o._handleAbortFlow(e)
                    })
                    break
                  default:
                    Object(Nt.a)('Unknown End Flow Type '.concat(t)), o._handleAbortFlow()
                }
              }),
              y()(u()(o), '_render', function () {
                var e = o.props,
                  t = e.currentSubtask,
                  n = e.previousNavigableSubtaskId,
                  a = e.subtasks
                if (!t) return null
                if (Object(yt.g)(t)) {
                  var r = a.find(function (e) {
                    return e.subtask_id === n
                  })
                  return g.a.createElement(g.a.Fragment, null, o._renderSubtask(t), r && o._renderSubtask(r))
                }
                return o._renderSubtask(t)
              }),
              y()(u()(o), '_renderDefault', function () {
                var e = o.props,
                  t = e.currentSubtask,
                  n = e.flowToken,
                  a = e.history,
                  r = e.subtasks.map(function (e) {
                    return g.a.createElement(
                      T.b,
                      { key: e.subtask_id, onClick: o._navigateToSubtask(e.subtask_id) },
                      e.subtask_id,
                    )
                  })
                return g.a.createElement(
                  he.a,
                  { history: a },
                  g.a.createElement(
                    D.a,
                    { style: { margin: 5 } },
                    g.a.createElement(T.b, null, n),
                    g.a.createElement(T.b, null, 'Current Subtask: '.concat(t ? t.subtask_id : '')),
                    r,
                  ),
                )
              }),
              y()(u()(o), '_handleAbortFlowOnConfirm', function () {
                o._handleAbortFlow()
              }),
              y()(u()(o), '_onNoopInvisibleSubtask', function () {
                return Promise.resolve()
              }),
              y()(u()(o), '_navigateToPreviousSubtask', function () {
                var e = o.props
                ;(0, e.navigateSubtask)({ subtaskId: e.previousNavigableSubtaskId, destructive: !0 })
              }),
              y()(u()(o), '_renderErrorDialog', function () {
                var e = o.props,
                  t = e.failureMessage,
                  n = e.history
                return g.a.createElement(
                  he.a,
                  { hideBackButton: !0, history: n },
                  g.a.createElement(Se.a, {
                    confirmButtonLabel: wl,
                    headline: kl,
                    onConfirm: o._handleAbortFlowOnConfirm,
                    text: t || fn,
                    withCancelButton: !1,
                  }),
                )
              }),
              y()(u()(o), '_renderSubtask', function (e) {
                var t = o.props,
                  n = t.addToast,
                  a = t.callInteractiveSpinnerPath,
                  i = t.fetchTemporaryPassword,
                  s = t.flowName,
                  c = t.flowToken,
                  l = t.history,
                  u = t.location,
                  d = t.previouslySubmittedSubtaskId,
                  p = t.removeContacts,
                  f = t.shouldAbort,
                  h = t.submitFailed,
                  m = t.subtaskInputs,
                  b = t.updateFlow,
                  v = e.progress_indication,
                  y = e.subtask_back_navigation,
                  _ = e.subtask_id,
                  w = f
                    ? g.a.createElement(Se.a, {
                        confirmButtonLabel: wl,
                        headline: kl,
                        onConfirm: o._handleAbortFlowOnConfirm,
                        text: o.state.alertFailureMessage,
                        withCancelButton: !1,
                      })
                    : null,
                  O = {
                    onNavigate: o._handleNavigate,
                    passthroughOcfScreenProps: {
                      backButtonType: y === k.x.CancelFlow ? 'close' : 'back',
                      history: l,
                      onBackClick: o._getBackNavigation(e),
                      progressIndication: v,
                    },
                    subtaskId: _,
                    updateFlow: b,
                  }
                if (e.end_flow)
                  return o._endFlowSubtaskAction(e.end_flow.status, e.end_flow.end_flow_type), o._renderDefault()
                if (e.action_list) return g.a.createElement(Ce, r()({ subtask: e.action_list, subtaskInputs: m }, O))
                if (e.fetch_temporary_password)
                  return g.a.createElement(Qe, {
                    navigationLink: e.fetch_temporary_password.next_link,
                    onNavigate: o._handleNavigate,
                    subtaskAction: o._handleInvisibleSubtask(_, e.fetch_temporary_password, i),
                    subtaskId: _,
                  })
                if (e.cta) return g.a.createElement(We, r()({ errorDialog: w, subtask: e.cta, subtaskInputs: m }, O))
                if (e.app_download_cta)
                  return g.a.createElement(
                    De,
                    r()({ errorDialog: w, subtask: e.app_download_cta, subtaskInputs: m }, O),
                  )
                if (e.alert_dialog) return g.a.createElement(Ie, r()({ subtask: e.alert_dialog, subtaskInputs: m }, O))
                if (e.alert_dialog_suppress_client_events)
                  return g.a.createElement(
                    Ie,
                    r()({ subtask: e.alert_dialog_suppress_client_events, subtaskInputs: m }, O),
                  )
                if (e.menu_dialog) return g.a.createElement(go, r()({ subtask: e.menu_dialog, subtaskInputs: m }, O))
                if (e.open_account)
                  return g.a.createElement(Qe, {
                    navigationLink: e.open_account.next_link,
                    onNavigate: o._handleNavigate,
                    subtaskAction: o._openAccountAction(e.open_account),
                    subtaskId: _,
                  })
                if (e.show_code)
                  return g.a.createElement(Gi, r()({ errorDialog: w, subtask: e.show_code, subtaskInputs: m }, O))
                if (e.sign_up) return g.a.createElement(bs, r()({ subtask: e.sign_up, subtaskInputs: m }, O))
                if (e.sign_up_review)
                  return g.a.createElement(
                    xs,
                    r()({ errorDialog: w, progressIndication: v, subtask: e.sign_up_review, subtaskInputs: m }, O),
                  )
                if (e.js_instrumentation) return g.a.createElement(bo, r()({ subtask: e.js_instrumentation }, O))
                if (e.phone_verification)
                  return g.a.createElement(
                    Vo,
                    r()(
                      { errorDialog: w, flowName: s, submitFailed: h, subtask: e.phone_verification, subtaskInputs: m },
                      O,
                    ),
                  )
                if (e.recaptcha)
                  return g.a.createElement(rr, r()({ errorDialog: w, subtask: e.recaptcha, subtaskInputs: m }, O))
                if (e.privacy_options)
                  return g.a.createElement(Go, r()({ subtask: e.privacy_options, subtaskInputs: m }, O))
                if (e.generic_urt)
                  return g.a.createElement(qr, r()({ errorDialog: w, subtask: e.generic_urt, subtaskInputs: m }, O))
                if (e.interest_picker)
                  return g.a.createElement(uo, r()({ errorDialog: w, subtask: e.interest_picker, subtaskInputs: m }, O))
                if (e.topics_selector)
                  return g.a.createElement(lc, r()({ errorDialog: w, subtask: e.topics_selector, subtaskInputs: m }, O))
                if (e.notifications_permission_prompt)
                  return g.a.createElement(Io, r()({ subtask: e.notifications_permission_prompt, subtaskInputs: m }, O))
                if (e.open_home_timeline)
                  return (
                    'signup' === s && o._sendGaOnboardingEvent('complete-NUX'),
                    g.a.createElement(Qe, {
                      navigationLink: e.open_home_timeline.next_link,
                      onNavigate: o._handleNavigate,
                      subtaskAction: o._onNoopInvisibleSubtask,
                      subtaskId: _,
                    })
                  )
                if (e.open_link)
                  return d === _
                    ? null
                    : g.a.createElement(Ro, {
                        flowName: s,
                        onNavigate: o._handleNavigate,
                        subtask: e.open_link,
                        subtaskId: _,
                      })
                if (e.upload_media)
                  return g.a.createElement(xc, {
                    flowToken: c,
                    onNavigate: o._handleNavigate,
                    subtask: e.upload_media,
                    subtaskId: _,
                  })
                if (e.user_recommendations_list)
                  return g.a.createElement(
                    dl,
                    r()({ errorDialog: w, subtask: e.user_recommendations_list, subtaskInputs: m }, O),
                  )
                if (e.user_recommendations_urt)
                  return g.a.createElement(
                    Vc,
                    r()({ errorDialog: w, flowToken: c, subtask: e.user_recommendations_urt, subtaskInputs: m }, O),
                  )
                if (e.update_users)
                  return g.a.createElement(Qe, {
                    navigationLink: e.update_users.next_link,
                    onNavigate: o._handleNavigate,
                    subtaskAction: o._handleInvisibleSubtask(_, e.update_users, o._updateUsersAction),
                    subtaskId: _,
                  })
                if (e.enter_password)
                  return g.a.createElement(Ga, r()({ errorDialog: w, subtask: e.enter_password, subtaskInputs: m }, O))
                if (e.settings_list) {
                  var E = e.settings_list
                  return g.a.createElement(bl.b.Consumer, null, function (e) {
                    var t = e.isModal
                    return g.a.createElement(
                      zi,
                      r()(
                        { addToast: n, errorDialog: w, isModal: t, removeContacts: p, subtask: E, subtaskInputs: m },
                        O,
                      ),
                    )
                  })
                }
                return e.email_contacts_sync
                  ? g.a.createElement(
                      nn,
                      r()({ errorDialog: w, location: u, subtask: e.email_contacts_sync, subtaskInputs: m }, O),
                    )
                  : e.select_avatar
                  ? g.a.createElement(hi, r()({ errorDialog: w, subtask: e.select_avatar, subtaskInputs: m }, O))
                  : e.select_banner
                  ? g.a.createElement(Ci, r()({ errorDialog: w, subtask: e.select_banner, subtaskInputs: m }, O))
                  : e.security_key
                  ? g.a.createElement($o, r()({ errorDialog: w, subtask: e.security_key, subtaskInputs: m }, O))
                  : e.enter_date
                  ? g.a.createElement(Cn, r()({ errorDialog: w, subtask: e.enter_date, subtaskInputs: m }, O))
                  : e.enter_text
                  ? g.a.createElement(pr, r()({ errorDialog: w, subtask: e.enter_text, subtaskInputs: m }, O))
                  : e.email_verification
                  ? g.a.createElement(
                      gn,
                      r()(
                        {
                          errorDialog: w,
                          flowName: s,
                          submitFailed: h,
                          subtask: e.email_verification,
                          subtaskInputs: m,
                        },
                        O,
                      ),
                    )
                  : e.enter_username
                  ? g.a.createElement(wr, r()({ errorDialog: w, subtask: e.enter_username, subtaskInputs: m }, O))
                  : e.enter_email
                  ? g.a.createElement(Da, r()({ errorDialog: w, subtask: e.enter_email, subtaskInputs: m }, O))
                  : e.enter_phone
                  ? g.a.createElement(er, r()({ errorDialog: w, subtask: e.enter_phone, subtaskInputs: m }, O))
                  : e.choice_selection
                  ? g.a.createElement(pt, r()({ key: _, subtask: e.choice_selection, subtaskInputs: m }, O))
                  : e.contacts_live_sync_permission_prompt
                  ? g.a.createElement(Ut, r()({ subtask: e.contacts_live_sync_permission_prompt, subtaskInputs: m }, O))
                  : e.wait_spinner
                  ? g.a.createElement(hl, r()({ pollInteractivePath: a, subtask: e.wait_spinner, subtaskInputs: m }, O))
                  : e.check_logged_in_account
                  ? g.a.createElement(
                      nt,
                      r()({ onNavigate: o._handleNavigate, subtask: e.check_logged_in_account, subtaskId: _ }, O),
                    )
                  : e.tweet_selection_urt
                  ? g.a.createElement(Oc, r()({ errorDialog: w, subtask: e.tweet_selection_urt, subtaskInputs: m }, O))
                  : o._renderDefault()
              }),
              y()(u()(o), '_getBackNavigation', function (e) {
                var t = e.subtask_back_navigation,
                  n = void 0 === t ? k.x.Allow : t
                return n === k.x.CancelFlow
                  ? function () {
                      return o._handleAbortFlow()
                    }
                  : o.currentPreviousNavigableSubtaskId && n === k.x.Allow
                  ? o._navigateToPreviousSubtask
                  : void 0
              }),
              y()(u()(o), '_scribeSubtaskView', function () {
                var e = o.props,
                  t = e.currentSubtask,
                  n = e.flowToken,
                  a = e.scribeAction
                t &&
                  t.subtask_id &&
                  !Object(ee.l)(t) &&
                  a(yl(yl({}, gl), {}, { element: 'view', action: 'impression' }), {
                    items: [{ token: n, name: t.subtask_id }],
                  })
              }),
              y()(u()(o), '_handleCallbacks', function (e, t) {
                var n = o.props,
                  a = n.callOnboardingPath,
                  r = n.scribeAction
                e.forEach(function (e) {
                  e.trigger === t &&
                    (e.scribe_config && r(e.scribe_config), e.endpoint && a(e.endpoint, { timestampMs: Date.now() }))
                })
              }),
              y()(u()(o), '_openAccountAction', function (e) {
                return function () {
                  var t = o.context.loggedInUserId,
                    n = o.props,
                    a = n.returnPath,
                    r = n.scribeAction,
                    i = n.verifyCredentials,
                    s = e.attribution_event,
                    c = e.user.id_str,
                    l = Object(Do.b)(o.context.featureSwitches) || {},
                    u = l.encryptedReferer,
                    d = l.encryptedReferralDetails
                  return (
                    xi.a.flushHTMLCache(),
                    t && c !== t
                      ? (qt.b.navigateTo(a || '/home'), new Promise(function () {}))
                      : i().then(function () {
                          o._maybeScribeAppInstallBanner(),
                            'signup' === s &&
                              (o._sendGaOnboardingEvent('account-create'),
                              r({ page: 'signup', action: 'success' }, { referer: u, external_referer: d }))
                        })
                  )
                }
              }),
              y()(u()(o), '_updateUsersAction', function (e, t) {
                var n = o.props,
                  a = n.createLocalApiErrorHandler,
                  r = n.fetchUsers,
                  i = null == t ? void 0 : t.users
                i &&
                  i.length &&
                  r(
                    i.map(function (e) {
                      return e.id_str
                    }),
                  ).catch(a({ showToast: !0 }))
              }),
              y()(u()(o), '_maybeScribeAppInstallBanner', function () {
                var e = o.props.scribeAction
                Te.a.hasPromptWaiting() && e({ page: 'signup', component: 'install_banner', action: 'waiting' })
              }),
              (o.state = { alertFailureMessage: '' }),
              o
            )
          }
          return (
            c()(n, [
              {
                key: 'UNSAFE_componentWillReceiveProps',
                value: function (e) {
                  this.props.flowName !== e.flowName && this._startFlow(e)
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t = e.currentSubtask,
                    n = this.props.currentSubtask,
                    a = t && t.subtask_id
                  n &&
                    n.subtask_id !== a &&
                    (this._scribeSubtaskView(), n.callbacks && this._handleCallbacks(n.callbacks, k.p.Impression))
                },
              },
              {
                key: 'UNSAFE_componentWillMount',
                value: function () {
                  this._startFlow(this.props)
                },
              },
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.googleAnalyticsPageView,
                    n = e.history
                  ;(0, e.scribePageImpression)(gl), t(gl), (this._unblockHistory = n.block(this._handleBackAttempt))
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._unblockHistory && this._unblockHistory(), this.props.clearFlow()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.currentSubtask
                  e.shouldEndFlow && this._handleAbortFlow()
                  var n = this.props.fetchStatus
                  return (
                    n === Xe.a.FAILED || t || (n = Xe.a.LOADING),
                    g.a.createElement(
                      D.a,
                      { style: El.root },
                      g.a.createElement(Ze.a, {
                        fetchStatus: n,
                        onRequestRetry: this._handleFlowRestart,
                        render: this._render,
                        renderFailure: this._renderErrorDialog,
                        retryable: !this.props.shouldAbort,
                      }),
                    )
                  )
                },
              },
              {
                key: '_handleInvisibleSubtask',
                value: function (e, t, n) {
                  return function () {
                    return new Promise(function (a, r) {
                      a(n(e, t))
                    })
                  }
                },
              },
              {
                key: 'currentPreviousNavigableSubtaskId',
                get: function () {
                  return this.props.previousNavigableSubtaskId
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      y()(Ol, 'contextType', $e.a), y()(Ol, 'defaultProps', { inputFlowData: {} })
      var El = A.a.create(function (e) {
        return { root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 } }
      })
      t.a = Object(Ar.c)(gl)(At(Ol))
    },
    gwY8: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      })
      var a = n('ERkP'),
        r = n.n(a).a.createContext({ onFollow: void 0, onInitialize: void 0, onUnfollow: void 0 })
    },
    hznd: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        o = n('ERkP'),
        i = n.n(o),
        s = n('BedV'),
        c = n('KEM+'),
        l = n.n(c),
        u = (n('ho0z'), n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('t62R')),
        d = n('IMYl'),
        p = n('py1r'),
        f = n('I4+6'),
        h = n('cm6r'),
        m = n('rHpw'),
        b = n('MWbm')
      function v(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? v(Object(n), !0).forEach(function (t) {
                l()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : v(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var _ = m.a.create(function (e) {
          return {
            root: { padding: e.spaces.space4, borderRadius: e.borderRadii.large, overflow: 'hidden' },
            base: {
              backgroundColor: e.colors.cellBackground,
              flexDirection: 'row',
              justifyContent: 'space-between',
              flexGrow: 1,
            },
            border: {
              borderColor: e.colors.borderColor,
              borderRadius: e.borderRadii.large,
              borderWidth: e.borderWidths.medium,
            },
            containerClicked: { backgroundColor: e.colors.primary },
            interactive: { cursor: 'pointer' },
            radioBackground: {
              borderRadius: e.borderRadii.infinite,
              margin: '-'.concat(e.spaces.space8),
              padding: e.spaces.space8,
            },
            textContainer: { margin: e.spaces.space12, flexShrink: 1 },
            radioContainer: { userSelect: 'none', marginRight: e.spaces.space12, marginTop: e.spaces.space12 },
            helpText: { marginTop: e.spaces.space8 },
            tileStyle: { height: 'inherit' },
            mainContainer: { padding: e.spaces.space4 },
            circleDisabled: { borderColor: e.colors.gray200 },
            circleCheckedAndDisabled: { backgroundColor: e.colors.gray300, borderColor: e.colors.gray300 },
            circle: {
              alignItems: 'center',
              backgroundColor: e.colors.cellBackground,
              borderColor: e.colors.gray700,
              borderStyle: 'solid',
              borderWidth: e.borderWidths.medium,
              borderRadius: e.spaces.space32,
              height: e.spaces.space20,
              justifyContent: 'center',
              width: e.spaces.space20,
            },
            circleActive: { borderColor: e.colors.primary, backgroundColor: e.colors.primary },
            checkMark: { width: '18px', height: '18px', color: e.colors.whiteOnColor },
          }
        }),
        g = y(
          y({}, m.a.absoluteFillObject),
          {},
          { cursor: 'inherit', height: '100%', margin: 0, opacity: 0, padding: 0, width: '100%' },
        ),
        k = function (e) {
          var t = e.accessibilityLabel,
            n = e.accessibilityPosInSet,
            a = e.accessibilitySetSize,
            r = e.checked,
            o = e.disabled,
            s = e.helpText,
            c = e.label,
            l = e.name,
            v = e.onChange,
            y = f.a.generate({
              backgroundColor: m.a.theme.colors.transparent,
              color: r ? m.a.theme.colors.primary : m.a.theme.colors.gray700,
              withFocusWithinFocusRing: !0,
            })
          return i.a.createElement(p.a, { disabled: o }, function (e) {
            return i.a.createElement(
              b.a,
              { style: _.root },
              i.a.createElement(
                b.a,
                { accessibilityRole: 'label', style: [_.base, _.border, !o && _.interactive] },
                i.a.createElement(
                  b.a,
                  { style: _.textContainer },
                  i.a.createElement(u.b, { weight: 'bold' }, c),
                  s && i.a.createElement(u.b, { color: 'gray700', size: 'subtext2', style: _.helpText }, s),
                ),
                i.a.createElement(
                  b.a,
                  { style: _.radioContainer },
                  i.a.createElement(
                    h.a,
                    { disabled: o, interactiveStyles: y, interactivityState: e, style: _.radioBackground },
                    i.a.createElement(
                      b.a,
                      {
                        style: [
                          _.circle,
                          r && _.circleActive,
                          o && _.circleDisabled,
                          r && o && _.circleCheckedAndDisabled,
                        ],
                      },
                      r ? i.a.createElement(d.a, { style: _.checkMark }) : null,
                    ),
                  ),
                  i.a.createElement('input', {
                    'aria-label': t,
                    'aria-posinset': n,
                    'aria-setsize': a,
                    checked: r,
                    disabled: o,
                    name: l,
                    onChange: r ? void 0 : v,
                    style: g,
                    type: 'radio',
                  }),
                ),
              ),
            )
          })
        }
      t.a = function (e) {
        return i.a.createElement(
          s.a,
          r()({}, e, {
            renderSelector: function (e) {
              return i.a.createElement(k, r()({}, e, { key: e.value }))
            },
          }),
        )
      }
    },
    iKTg: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var a = n('KEM+'),
        r = n.n(a),
        o = n('ERkP'),
        i = n.n(o),
        s = n('Lsrn'),
        c = n('k/Ka')
      function l(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                r()(e, t, n[t])
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
        return Object(c.a)(
          'svg',
          u(
            u({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [s.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          i.a.createElement(
            'g',
            null,
            i.a.createElement('path', {
              d: 'M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z',
            }),
          ),
        )
      }
      ;(d.metadata = { width: 24, height: 24 }), (t.a = d)
    },
    kXdP: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        o = n('t62R'),
        i = n('OiMc'),
        s = n('rHpw').a.create(function (e) {
          return {
            hoverText: {
              marginHorizontal: e.componentDimensions.gutterHorizontal,
              marginVertical: e.componentDimensions.gutterVertical,
            },
            popover: { maxWidth: 'calc('.concat(e.spaces.space64, ' * 4)'), minWidth: e.spaces.space64 },
          }
        })
      t.a = function (e) {
        var t = e.children,
          n = e.hoverText
        return r.a.createElement(
          i.a,
          {
            contentStyle: s.popover,
            enableHover: !0,
            renderContent: function () {
              return r.a.createElement(o.b, { style: s.hoverText }, n)
            },
            withArrow: !0,
          },
          t,
        )
      }
    },
    mCZD: function (e, t, n) {
      'use strict'
      n('OZaJ')
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        s = n('1Pcy'),
        c = n.n(s),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('N+ot'),
        p = n.n(d),
        f = n('AuHH'),
        h = n.n(f),
        m = n('KEM+'),
        b = n.n(m),
        v = (n('2G9S'), n('ERkP')),
        y = n.n(v),
        _ = n('VAZu'),
        g = n('3XMw'),
        k = n.n(g),
        w = n('lUZE'),
        O = n('aITJ'),
        E = n('MWbm'),
        C = n('yw4N'),
        S = n('RhWx'),
        x = n.n(S),
        I = n('ddV6'),
        P = n.n(I),
        j = (n('ssJ/'), n('rHpw')),
        R = 'controlView',
        D = function (e) {
          var t = e.children,
            n = e.control,
            a = y.a.useRef(null),
            r = y.a.useState(null),
            o = P()(r, 2),
            i = o[0],
            s = o[1]
          T(function () {
            var e,
              t = window.visualViewport
            ;((null === (e = document.documentElement) || void 0 === e ? void 0 : e.clientHeight) ||
              window.innerHeight) -
              t.height >
            100
              ? null != a.current && t.height - t.offsetTop < a.current
                ? s(null)
                : s(t.height + t.offsetTop - (a.current || 75))
              : s(null)
          })
          var c = [A.bottomControl, A.fixed].concat(x()(O.b.isIOS() && i ? [A.visualViewport, { top: i }] : []))
          return y.a.createElement(
            y.a.Fragment,
            null,
            y.a.createElement(E.a, { style: A.flexViewport }, t),
            y.a.createElement(
              E.a,
              {
                ref: function (e) {
                  e && !a.current && (a.current = e.getBoundingClientRect().height)
                },
                style: c,
                testID: R,
              },
              n,
            ),
            y.a.createElement(E.a, { style: [A.bottomControl, A.invisible] }, n),
          )
        },
        T = function (e) {
          var t = window.visualViewport
          y.a.useEffect(function () {
            if (t)
              return (
                t.addEventListener('resize', e),
                t.addEventListener('scroll', e),
                function () {
                  t.removeEventListener('resize', e), t.removeEventListener('scroll', e)
                }
              )
          })
        },
        A = j.a.create(function (e) {
          return {
            fixed: { backgroundColor: e.colors.navigationBackground, position: 'fixed', bottom: 0, left: 0, right: 0 },
            bottomControl: {
              paddingTop: e.spaces.space12,
              paddingBottom: e.spaces.space36,
              paddingHorizontal: e.spaces.space32,
            },
            invisible: { visibility: 'hidden' },
            flexViewport: { flex: '1 1 100px', overflow: 'auto' },
            visualViewport: {
              position: 'absolute',
              left: 0,
              right: 0,
              marginTop: '-'.concat(e.componentDimensions.appBarHeight),
            },
          }
        }),
        F = n('w9LO'),
        B = n('mw9i'),
        N = n('JYMr'),
        L = n('7N4s')
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
            a = h()(e)
          if (t) {
            var r = h()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return p()(this, n)
        }
      }
      var V = k.a.d2fb334b,
        U = (function (e) {
          u()(n, e)
          var t = M(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              b()(c()(e), '_handleViewportSet', function (t) {
                var n = e.props.onViewportSet
                n && n(t)
              }),
              e
            )
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    n = e.hideAppBar,
                    a = e.rightControl,
                    r = e.scrollPrompt,
                    o = this.context.isModal
                  return y.a.createElement(
                    F.a,
                    { style: [z.root, o && z.rootModal] },
                    n ? null : this._renderAppBar(),
                    y.a.createElement(
                      B.a,
                      { style: [z.container, o && z.containerModal] },
                      o
                        ? y.a.createElement(
                            y.a.Fragment,
                            null,
                            y.a.createElement(
                              C.a,
                              {
                                onViewportSet: this._handleViewportSet,
                                style: [z.viewport, O.b.isIE() && z.viewportIE],
                              },
                              t,
                            ),
                            a && y.a.createElement(E.a, { style: z.bottomControl }, a),
                          )
                        : a
                        ? y.a.createElement(D, { control: a }, t)
                        : t,
                      o ? null : r,
                    ),
                    o ? r : null,
                  )
                },
              },
              {
                key: '_renderAppBar',
                value: function () {
                  var e = this.props,
                    t = e.appBarPosition,
                    n = e.appBarWithBackground,
                    a = e.backButtonType,
                    r = e.backLocation,
                    o = e.hideBackButton,
                    i = e.hideLogo,
                    s = e.history,
                    c = e.leftControl,
                    l = e.onBackClick,
                    u = e.progressIndication,
                    d =
                      u || i
                        ? void 0
                        : y.a.createElement(
                            E.a,
                            { style: z.iconContainer },
                            y.a.createElement(w.a, { accessibilityLabel: V, style: z.icon }),
                          ),
                    p = u ? u.text.text : void 0,
                    f = null == u ? void 0 : u.percentage_complete,
                    h = f ? f / 100 : void 0,
                    m = h ? y.a.createElement(N.a, { progress: h }) : void 0
                  return y.a.createElement(_.a, {
                    backButtonType: a,
                    backLocation: r,
                    centeredLogo: d,
                    hideBackButton: o || !l,
                    history: s,
                    leftControl: c,
                    onBackClick: l,
                    position: t,
                    secondaryBar: m,
                    title: p,
                    withBackground: n,
                    withBottomBorder: !1,
                  })
                },
              },
            ]),
            n
          )
        })(y.a.Component)
      b()(U, 'contextType', L.b)
      var z = j.a.create(function (e) {
        return {
          root: { display: 'flex', flexGrow: 1 },
          rootModal: { backgroundColor: e.colors.cellBackground, flexShrink: 1 },
          container: { flexGrow: 1 },
          containerModal: { flexShrink: 1 },
          iconContainer: {
            alignItems: 'center',
            alignSelf: 'stretch',
            display: 'flex',
            flexGrow: 1,
            justifyContent: 'center',
            minWidth: e.spaces.space32,
          },
          icon: { color: e.colors.brandColor, flexGrow: 1, height: '1.75rem' },
          viewport: { flexGrow: 1, flexShrink: 1, overflow: 'auto' },
          viewportIE: { flexBasis: '0%' },
          bottomControl: {
            paddingTop: e.spaces.space12,
            paddingBottom: e.spaces.space36,
            paddingHorizontal: e.spaces.space32,
          },
        }
      })
      t.a = U
    },
    nS1w: function (e, t, n) {
      'use strict'
      n.d(t, 'c', function () {
        return m
      }),
        n.d(t, 'd', function () {
          return b
        }),
        n.d(t, 'b', function () {
          return y
        }),
        n.d(t, 'e', function () {
          return _
        })
      var a,
        r = n('KEM+'),
        o = n.n(r),
        i = (n('z84I'), n('+KXO'), n('LW0h'), n('wFPu'), n('2G9S'), n('3XMw')),
        s = n.n(i),
        c = n('mtvn'),
        l =
          ((a = {}),
          o()(a, 1, { label: s.a.hac89abf, numDays: 31 }),
          o()(a, 2, { label: s.a.ef30b309, numDays: 28, numDaysLeapYear: 29 }),
          o()(a, 3, { label: s.a.b56920fa, numDays: 31 }),
          o()(a, 4, { label: s.a.b1a0f1ec, numDays: 30 }),
          o()(a, 5, { label: s.a.daf779c8, numDays: 31 }),
          o()(a, 6, { label: s.a.c6ad074d, numDays: 30 }),
          o()(a, 7, { label: s.a.f1db106b, numDays: 31 }),
          o()(a, 8, { label: s.a.i4e80b7a, numDays: 31 }),
          o()(a, 9, { label: s.a.efa6cc1d, numDays: 30 }),
          o()(a, 10, { label: s.a.f40a0cbe, numDays: 31 }),
          o()(a, 11, { label: s.a.ac74a31c, numDays: 30 }),
          o()(a, 12, { label: s.a.i6c1e4b2, numDays: 31 }),
          a),
        u = function (e) {
          return { label: ''.concat(e), value: ''.concat(e) }
        },
        d = Object(c.a)(1, 29).map(u),
        p = Object(c.a)(1, 30).map(u),
        f = Object(c.a)(1, 31).map(u),
        h = Object(c.a)(1, 32).map(u),
        m = function () {
          return Object.keys(l).map(function (e) {
            return { label: l[e].label, value: e }
          })
        },
        b = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            t = arguments.length > 1 ? arguments[1] : void 0,
            n = arguments.length > 2 ? arguments[2] : void 0,
            a = arguments.length > 3 ? arguments[3] : void 0,
            r = t || new Date(Date.now()).getFullYear()
          return Object(c.a)(e, r + 1)
            .reverse()
            .filter(function (e) {
              return 2 === a && 29 === n ? v(e) : e
            })
            .map(u)
        },
        v = function (e) {
          return 1 === new Date(e, 1, 29).getMonth()
        },
        y = function (e, t) {
          if (!e) return h
          switch (2 === e && (!t || (t && v(t))) ? l[e].numDaysLeapYear : l[e].numDays) {
            case 28:
              return d
            case 29:
              return p
            case 30:
              return f
            case 31:
            default:
              return h
          }
        },
        _ = function (e, t, n) {
          if ('number' == typeof e && 'number' == typeof t && 'number' == typeof n) {
            var a = t < 10 ? '0'.concat(t) : ''.concat(t),
              r = e < 10 ? '0'.concat(e) : ''.concat(e)
            return ''.concat(n, '-').concat(a, '-').concat(r)
          }
          return ''
        }
      t.a = { getFormattedDateValue: _ }
    },
    't+RT': function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        o = n('aWzz'),
        i = n.n(o)
      function s() {
        return (s =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
            }
            return e
          }).apply(this, arguments)
      }
      function c(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return e
      }
      var l = (function (e) {
        var t, n
        function a() {
          var t
          return (
            ((t = e.call(this) || this).handleExpired = t.handleExpired.bind(c(t))),
            (t.handleErrored = t.handleErrored.bind(c(t))),
            (t.handleRecaptchaRef = t.handleRecaptchaRef.bind(c(t))),
            t
          )
        }
        ;(n = e), ((t = a).prototype = Object.create(n.prototype)), (t.prototype.constructor = t), (t.__proto__ = n)
        var o = a.prototype
        return (
          (o.getValue = function () {
            return this.props.grecaptcha && void 0 !== this._widgetId
              ? this.props.grecaptcha.getResponse(this._widgetId)
              : null
          }),
          (o.getWidgetId = function () {
            return this.props.grecaptcha && void 0 !== this._widgetId ? this._widgetId : null
          }),
          (o.execute = function () {
            var e = this.props.grecaptcha
            if (e && void 0 !== this._widgetId) return e.execute(this._widgetId)
            this._executeRequested = !0
          }),
          (o.reset = function () {
            this.props.grecaptcha && void 0 !== this._widgetId && this.props.grecaptcha.reset(this._widgetId)
          }),
          (o.handleExpired = function () {
            this.props.onExpired ? this.props.onExpired() : this.props.onChange && this.props.onChange(null)
          }),
          (o.handleErrored = function () {
            this.props.onErrored && this.props.onErrored()
          }),
          (o.explicitRender = function () {
            if (this.props.grecaptcha && this.props.grecaptcha.render && void 0 === this._widgetId) {
              var e = document.createElement('div')
              ;(this._widgetId = this.props.grecaptcha.render(e, {
                sitekey: this.props.sitekey,
                callback: this.props.onChange,
                theme: this.props.theme,
                type: this.props.type,
                tabindex: this.props.tabindex,
                'expired-callback': this.handleExpired,
                'error-callback': this.handleErrored,
                size: this.props.size,
                stoken: this.props.stoken,
                hl: this.props.hl,
                badge: this.props.badge,
              })),
                this.captcha.appendChild(e)
            }
            this._executeRequested &&
              this.props.grecaptcha &&
              void 0 !== this._widgetId &&
              ((this._executeRequested = !1), this.execute())
          }),
          (o.componentDidMount = function () {
            this.explicitRender()
          }),
          (o.componentDidUpdate = function () {
            this.explicitRender()
          }),
          (o.componentWillUnmount = function () {
            void 0 !== this._widgetId && (this.delayOfCaptchaIframeRemoving(), this.reset())
          }),
          (o.delayOfCaptchaIframeRemoving = function () {
            var e = document.createElement('div')
            for (document.body.appendChild(e), e.style.display = 'none'; this.captcha.firstChild; )
              e.appendChild(this.captcha.firstChild)
            setTimeout(function () {
              document.body.removeChild(e)
            }, 5e3)
          }),
          (o.handleRecaptchaRef = function (e) {
            this.captcha = e
          }),
          (o.render = function () {
            var e = this.props,
              t =
                (e.sitekey,
                e.onChange,
                e.theme,
                e.type,
                e.tabindex,
                e.onExpired,
                e.onErrored,
                e.size,
                e.stoken,
                e.grecaptcha,
                e.badge,
                e.hl,
                (function (e, t) {
                  if (null == e) return {}
                  var n,
                    a,
                    r = {},
                    o = Object.keys(e)
                  for (a = 0; a < o.length; a++) (n = o[a]), t.indexOf(n) >= 0 || (r[n] = e[n])
                  return r
                })(e, [
                  'sitekey',
                  'onChange',
                  'theme',
                  'type',
                  'tabindex',
                  'onExpired',
                  'onErrored',
                  'size',
                  'stoken',
                  'grecaptcha',
                  'badge',
                  'hl',
                ]))
            return r.a.createElement('div', s({}, t, { ref: this.handleRecaptchaRef }))
          }),
          a
        )
      })(r.a.Component)
      ;(l.displayName = 'ReCAPTCHA'),
        (l.propTypes = {
          sitekey: i.a.string.isRequired,
          onChange: i.a.func,
          grecaptcha: i.a.object,
          theme: i.a.oneOf(['dark', 'light']),
          type: i.a.oneOf(['image', 'audio']),
          tabindex: i.a.number,
          onExpired: i.a.func,
          onErrored: i.a.func,
          size: i.a.oneOf(['compact', 'normal', 'invisible']),
          stoken: i.a.string,
          hl: i.a.string,
          badge: i.a.oneOf(['bottomright', 'bottomleft', 'inline']),
        }),
        (l.defaultProps = {
          onChange: function () {},
          theme: 'light',
          type: 'image',
          tabindex: 0,
          size: 'normal',
          badge: 'bottomright',
        })
      var u = n('oXkQ'),
        d = n.n(u)
      function p() {
        return (p =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
            }
            return e
          }).apply(this, arguments)
      }
      var f = {},
        h = 0
      function m() {
        return ('undefined' != typeof window && window.recaptchaOptions) || {}
      }
      var b,
        v,
        y = 'onloadcallback',
        _ = m(),
        g = ((b = function () {
          var e = m(),
            t = e.lang ? '&hl=' + e.lang : ''
          return (
            'https://' +
            (e.useRecaptchaNet ? 'recaptcha.net' : 'www.google.com') +
            '/recaptcha/api.js?onload=' +
            y +
            '&render=explicit' +
            t
          )
        }),
        (v = (v = { callbackName: y, globalName: 'grecaptcha', removeOnUnmount: _.removeOnUnmount || !1 }) || {}),
        function (e) {
          var t = e.displayName || e.name || 'Component',
            n = (function (t) {
              var n, r
              function o(e, n) {
                var a
                return ((a = t.call(this, e, n) || this).state = {}), (a.__scriptURL = ''), a
              }
              ;(r = t),
                ((n = o).prototype = Object.create(r.prototype)),
                (n.prototype.constructor = n),
                (n.__proto__ = r)
              var i = o.prototype
              return (
                (i.asyncScriptLoaderGetScriptLoaderID = function () {
                  return (
                    this.__scriptLoaderID || (this.__scriptLoaderID = 'async-script-loader-' + h++),
                    this.__scriptLoaderID
                  )
                }),
                (i.setupScriptURL = function () {
                  return (this.__scriptURL = 'function' == typeof b ? b() : b), this.__scriptURL
                }),
                (i.asyncScriptLoaderHandleLoad = function (e) {
                  var t = this
                  this.setState(e, function () {
                    return t.props.asyncScriptOnLoad && t.props.asyncScriptOnLoad(t.state)
                  })
                }),
                (i.asyncScriptLoaderTriggerOnScriptLoaded = function () {
                  var e = f[this.__scriptURL]
                  if (!e || !e.loaded) throw new Error('Script is not loaded.')
                  for (var t in e.observers) e.observers[t](e)
                  delete window[v.callbackName]
                }),
                (i.componentDidMount = function () {
                  var e = this,
                    t = this.setupScriptURL(),
                    n = this.asyncScriptLoaderGetScriptLoaderID(),
                    a = v,
                    r = a.globalName,
                    o = a.callbackName,
                    i = a.scriptId
                  if ((r && void 0 !== window[r] && (f[t] = { loaded: !0, observers: {} }), f[t])) {
                    var s = f[t]
                    return s && (s.loaded || s.errored)
                      ? void this.asyncScriptLoaderHandleLoad(s)
                      : void (s.observers[n] = function (t) {
                          return e.asyncScriptLoaderHandleLoad(t)
                        })
                  }
                  var c = {}
                  ;(c[n] = function (t) {
                    return e.asyncScriptLoaderHandleLoad(t)
                  }),
                    (f[t] = { loaded: !1, observers: c })
                  var l = document.createElement('script')
                  ;(l.src = t), (l.async = !0), i && (l.id = i)
                  var u = function (e) {
                    if (f[t]) {
                      var n = f[t].observers
                      for (var a in n) e(n[a]) && delete n[a]
                    }
                  }
                  o &&
                    'undefined' != typeof window &&
                    (window[o] = function () {
                      return e.asyncScriptLoaderTriggerOnScriptLoaded()
                    }),
                    (l.onload = function () {
                      var e = f[t]
                      e &&
                        ((e.loaded = !0),
                        u(function (t) {
                          return !o && (t(e), !0)
                        }))
                    }),
                    (l.onerror = function () {
                      var e = f[t]
                      e &&
                        ((e.errored = !0),
                        u(function (t) {
                          return t(e), !0
                        }))
                    }),
                    document.body.appendChild(l)
                }),
                (i.componentWillUnmount = function () {
                  var e = this.__scriptURL
                  if (!0 === v.removeOnUnmount)
                    for (var t = document.getElementsByTagName('script'), n = 0; n < t.length; n += 1)
                      t[n].src.indexOf(e) > -1 && t[n].parentNode && t[n].parentNode.removeChild(t[n])
                  var a = f[e]
                  a &&
                    (delete a.observers[this.asyncScriptLoaderGetScriptLoaderID()],
                    !0 === v.removeOnUnmount && delete f[e])
                }),
                (i.render = function () {
                  var t = v.globalName,
                    n = this.props,
                    r = (n.asyncScriptOnLoad, n.forwardedRef),
                    o = (function (e, t) {
                      if (null == e) return {}
                      var n,
                        a,
                        r = {},
                        o = Object.keys(e)
                      for (a = 0; a < o.length; a++) (n = o[a]), t.indexOf(n) >= 0 || (r[n] = e[n])
                      return r
                    })(n, ['asyncScriptOnLoad', 'forwardedRef'])
                  return (
                    t && 'undefined' != typeof window && (o[t] = void 0 !== window[t] ? window[t] : void 0),
                    (o.ref = r),
                    Object(a.createElement)(e, o)
                  )
                }),
                o
              )
            })(a.Component),
            r = Object(a.forwardRef)(function (e, t) {
              return Object(a.createElement)(n, p({}, e, { forwardedRef: t }))
            })
          return (
            (r.displayName = 'AsyncScriptLoader(' + t + ')'), (r.propTypes = { asyncScriptOnLoad: i.a.func }), d()(r, e)
          )
        })(l)
      t.a = g
    },
    v84o: function (e, t, n) {
      'use strict'
      n('2G9S')
      var a = n('180P'),
        r = n('doI8')
      t.a = function (e) {
        var t = e.timelinePrefix,
          n = void 0 === t ? 'generic-timeline-' : t,
          o = e.urtUrl,
          i = o.url,
          s = o.urtEndpointOptions || {},
          c = s.cacheId,
          l = s.requestParams
        return Object(r.b)({
          timelineId: c || ''.concat(n).concat(Object(a.a)(o)),
          endpointUrl: i,
          endpointParams: l || {},
        })
      }
    },
    vMn4: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var a = n('KEM+'),
        r = n.n(a),
        o = n('ERkP'),
        i = n.n(o),
        s = n('Lsrn'),
        c = n('k/Ka')
      function l(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                r()(e, t, n[t])
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
        return Object(c.a)(
          'svg',
          u(
            u({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [s.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          i.a.createElement(
            'g',
            null,
            i.a.createElement('path', {
              d: 'M21 3.25H6c-1.24 0-2.25 1.01-2.25 2.25v.75H3C1.76 6.25.75 7.26.75 8.5v10c0 1.24 1.01 2.25 2.25 2.25h15c1.24 0 2.25-1.01 2.25-2.25v-.75H21c1.24 0 2.25-1.01 2.25-2.25v-10c0-1.24-1.01-2.25-2.25-2.25zM2.25 8.5c0-.413.337-.75.75-.75h1.654C4.37 8.938 3.438 9.87 2.25 10.154V8.5zM3 19.25c-.413 0-.75-.337-.75-.75v-1.654c1.188.283 2.12 1.216 2.404 2.404H3zm15.75-.75c0 .413-.337.75-.75.75h-1.654c.283-1.188 1.216-2.12 2.404-2.404V18.5zm0-3.174c-2.016.323-3.6 1.908-3.924 3.924H6.174c-.323-2.016-1.908-3.6-3.924-3.924v-3.652c2.016-.323 3.6-1.908 3.924-3.924h8.652c.323 2.016 1.908 3.6 3.924 3.924v3.652zm0-5.172c-1.188-.283-2.12-1.216-2.404-2.404H18c.413 0 .75.337.75.75v1.654zm3 5.346c0 .413-.337.75-.75.75h-.75V8.5c0-1.24-1.01-2.25-2.25-2.25H5.25V5.5c0-.413.337-.75.75-.75h15c.413 0 .75.337.75.75v10z',
            }),
            i.a.createElement('path', {
              d: 'M10.5 9.316c-1.878 0-3.406 1.877-3.406 4.184s1.528 4.184 3.406 4.184 3.406-1.877 3.406-4.184-1.528-4.184-3.406-4.184zm0 6.868c-1.033 0-1.906-1.23-1.906-2.684s.873-2.684 1.906-2.684 1.906 1.23 1.906 2.684-.873 2.684-1.906 2.684z',
            }),
          ),
        )
      }
      ;(d.metadata = { width: 24, height: 24 }), (t.a = d)
    },
    wz7L: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var a = n('KEM+'),
        r = n.n(a),
        o = n('ERkP'),
        i = n.n(o),
        s = n('Lsrn'),
        c = n('k/Ka')
      function l(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                r()(e, t, n[t])
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
        return Object(c.a)(
          'svg',
          u(
            u({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [s.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          i.a.createElement(
            'g',
            null,
            i.a.createElement('path', {
              d: 'M16.695 13.037c1.185 0 2.51-.132 3.368-1.11.72-.823.952-2.08.715-3.847-.333-2.478-1.86-3.956-4.083-3.956-2.225 0-3.75 1.48-4.084 3.956-.236 1.766-.002 3.023.717 3.846.858.98 2.184 1.11 3.368 1.11zM14.098 8.28c.134-.992.648-2.656 2.598-2.656 1.948 0 2.463 1.664 2.597 2.655.174 1.293.054 2.187-.358 2.657-.367.42-1.036.6-2.238.6s-1.87-.18-2.24-.6c-.412-.47-.533-1.364-.36-2.658zm9.788 11.222c-.763-3.066-3.72-5.208-7.19-5.208-1.765 0-3.392.558-4.67 1.505-1.278-.948-2.905-1.506-4.67-1.506-3.47 0-6.428 2.142-7.19 5.208-.156.625-.025 1.265.356 1.754.37.473.94.744 1.567.744h19.87c.628 0 1.2-.27 1.57-.745.382-.49.512-1.13.356-1.753zm-1.537.83c-.09.11-.22.168-.39.168h-7.413c.078-.32.084-.66 0-.998-.25-1-.75-1.888-1.41-2.65.993-.665 2.223-1.058 3.558-1.058 2.78 0 5.14 1.674 5.735 4.07.044.174.014.344-.08.467zM7.354 20.5H2.09c-.17 0-.3-.057-.388-.168-.096-.123-.126-.294-.083-.47.596-2.395 2.954-4.068 5.735-4.068 2.78 0 5.14 1.674 5.735 4.07.043.174.014.344-.082.467-.088.113-.22.17-.388.17H7.355zm.001-7.463c1.185 0 2.51-.132 3.367-1.11.72-.823.953-2.08.716-3.847-.333-2.478-1.86-3.956-4.083-3.956-2.225 0-3.75 1.48-4.084 3.956-.236 1.766-.002 3.023.717 3.846.858.98 2.184 1.11 3.368 1.11zM4.758 8.28c.134-.992.648-2.656 2.598-2.656 1.948 0 2.463 1.664 2.597 2.655.174 1.293.053 2.187-.358 2.658-.368.42-1.037.6-2.238.6-1.202 0-1.87-.18-2.24-.6-.412-.47-.533-1.365-.36-2.66z',
            }),
          ),
        )
      }
      ;(d.metadata = { width: 24, height: 24 }), (t.a = d)
    },
    yuM6: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'default', function () {
          return v
        })
      n('OZaJ')
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        s = n('5Yy7'),
        c = n.n(s),
        l = n('N+ot'),
        u = n.n(l),
        d = n('AuHH'),
        p = n.n(d),
        f = (n('2G9S'), n('ERkP')),
        h = n.n(f),
        m = n('6/RC')
      function b(e) {
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
            a = p()(e)
          if (t) {
            var r = p()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return u()(this, n)
        }
      }
      var v = (function (e) {
        c()(n, e)
        var t = b(n)
        function n() {
          return r()(this, n), t.apply(this, arguments)
        }
        return (
          i()(n, [
            {
              key: 'componentDidMount',
              value: function () {
                var e = this.props.location.query,
                  t = e.code,
                  n = e.error,
                  a = e.scope,
                  r = e.state,
                  o = {
                    callback_url: 'https://'.concat(window.location.hostname).concat(window.location.pathname),
                    code: t,
                    error: n,
                    scope: a,
                    state: r,
                  },
                  i = m.canUseDOM && window.opener
                i
                  ? (i.postMessage(o, 'https://'.concat(window.location.hostname)), window.close(), i.focus())
                  : this.props.history.push('/')
              },
            },
            {
              key: 'render',
              value: function () {
                return null
              },
            },
          ]),
          n
        )
      })(h.a.Component)
    },
    zu4M: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = n('97Jx'),
        r = n.n(a),
        o = n('ERkP'),
        i = n.n(o),
        s = n('9D1O'),
        c = n('gPQO')
      t.default = function (e) {
        return i.a.createElement(c.a, r()({}, e, { flowName: 'convert_to_professional', ocfModule: s.i }))
      }
    },
  },
])
//# sourceMappingURL=WIPED
