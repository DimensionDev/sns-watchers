;(window.webpackJsonp = window.webpackJsonp || []).push([
  [76, 7, 12, 18, 177],
  {
    '+/sI': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return _
      }),
        n.d(t, 'b', function () {
          return b
        })
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        s = n('5Yy7'),
        l = n.n(s),
        c = n('2VqO'),
        u = n.n(c),
        d = (n('Wd/2'), n('M+/F'), n('2G9S'), n('ERkP')),
        p = n.n(d),
        h = n('TGcR'),
        m = n('t62R'),
        f = n('a6qo'),
        v = n('rHpw'),
        _ = 'animated_gif',
        b = 'video',
        g = (function (e) {
          l()(n, e)
          var t = u()(n)
          function n() {
            return r()(this, n), t.apply(this, arguments)
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e,
                    t = this.props,
                    n = t.durationInMilliseconds,
                    a = t.type
                  if (a === _ || 'vine' === a)
                    e =
                      a === _
                        ? p.a.createElement(m.b, { weight: 'bold' }, 'GIF')
                        : p.a.createElement(h.a, { style: y.icon })
                  else if (a === b && n) {
                    var r = Math.trunc(n / 6e4),
                      i = '0'.concat(Math.trunc((n % 6e4) / 1e3)).slice(-2)
                    e = p.a.createElement(m.b, { color: 'white' }, ''.concat(r, ':').concat(i))
                  }
                  return e ? p.a.createElement(f.a, { align: 'left' }, e) : null
                },
              },
            ]),
            n
          )
        })(p.a.PureComponent),
        y = v.a.create(function (e) {
          return { icon: { color: e.colors.white } }
        })
      t.c = g
    },
    '/Imo': function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        i = n('m3Bd'),
        o = n.n(i),
        s = n('VrFO'),
        l = n.n(s),
        c = n('Y9Ll'),
        u = n.n(c),
        d = n('1Pcy'),
        p = n.n(d),
        h = n('5Yy7'),
        m = n.n(h),
        f = n('2VqO'),
        v = n.n(f),
        _ = n('KEM+'),
        b = n.n(_),
        g = (n('2G9S'), n('jQ3i'), n('x4t0'), n('ERkP')),
        y = n.n(g),
        k = n('/yvb'),
        w = n('k/Ka'),
        C = n('3XMw'),
        E = n.n(C),
        I = n('rHpw'),
        x = ['accept', 'disabled', 'multiple', 'onChange', 'testID'],
        S = E.a.i5450beb,
        T = E.a.f7432494,
        P = (function (e) {
          m()(n, e)
          var t = v()(n)
          function n() {
            var e
            l()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              b()(p()(e), '_handlePress', function (t) {
                var n = e.props.onPress
                n && n(t), e._fileInput && e._fileInput.click()
              }),
              b()(p()(e), '_handleChange', function (t) {
                var n = e.props.onChange,
                  a = t.target,
                  r = a.files
                r.length && n && n(r), (a.value = '')
              }),
              b()(p()(e), '_handleFileInputButtonRef', function (t) {
                e._fileInput = t
              }),
              e
            )
          }
          return (
            u()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.accept,
                    n = e.disabled,
                    a = e.multiple,
                    i = (e.onChange, e.testID),
                    s = o()(e, x),
                    l = !((null != t && t.includes('video')) || (null != t && t.includes('gif')))
                  return y.a.createElement(
                    y.a.Fragment,
                    null,
                    y.a.createElement(
                      k.a,
                      r()({ hoverLabel: t ? { label: l ? T : S } : void 0 }, s, {
                        disabled: n,
                        onPress: this._handlePress,
                      }),
                    ),
                    Object(w.a)('input', {
                      accept: t,
                      disabled: n,
                      multiple: a,
                      onChange: this._handleChange,
                      ref: this._handleFileInputButtonRef,
                      style: L.input,
                      tabIndex: -1,
                      testID: i,
                      type: 'file',
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(y.a.Component)
      b()(P, 'defaultProps', { disabled: !1, multiple: !1 })
      var L = I.a.create(function (e) {
        return {
          input: { width: '0.1px', height: '0.1px', opacity: 0, overflow: 'hidden', position: 'absolute', zIndex: -1 },
        }
      })
      t.a = P
    },
    '12XZ': function (e, t, n) {
      'use strict'
      n.r(t)
      var a = n('97Jx'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        s = n('9D1O'),
        l = n('gPQO')
      t.default = function (e) {
        return o.a.createElement(l.a, r()({}, e, { ocfModule: s.i }))
      }
    },
    '180P': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      })
      n('TJCb'), n('7x/C'), n('DZ+c'), n('KOtZ'), n('0zG9'), n('KqXw'), n('Ysgh'), n('tQbP'), n('7xRU')
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
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        s = n('1Pcy'),
        l = n.n(s),
        c = n('5Yy7'),
        u = n.n(c),
        d = n('2VqO'),
        p = n.n(d),
        h = n('KEM+'),
        m = n.n(h),
        f = (n('Rqga'), n('2G9S'), n('ERkP')),
        v = n.n(f),
        _ = n('/yvb'),
        b = n('3XMw'),
        g = n.n(b),
        y = n('3rX5'),
        k = n('rHpw'),
        w = n('MWbm'),
        C = k.a.create(function (e) {
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
        E = function (e) {
          var t = e.circle,
            n = e.height,
            a = e.width
          return v.a.createElement(w.a, {
            pointerEvents: 'none',
            style: [C.mask, { width: a, height: n }, t && C.circle],
          })
        },
        I = n('ZvMt'),
        x = n('97Jx'),
        S = n.n(x),
        T = n('m3Bd'),
        P = n.n(T),
        L = n('CHgo'),
        A = n('7ep7'),
        O = ['children', 'onPanEnd', 'onPanMove', 'onPinchMove', 'onWheel'],
        D = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n(e) {
            var a
            return (
              r()(this, n),
              (a = t.call(this, e)),
              m()(l()(a), '_previousTouchDistance', 0),
              m()(l()(a), '_previousPositionX', 0),
              m()(l()(a), '_previousPositionY', 0),
              m()(l()(a), '_centerPosition', { x: 0, y: 0 }),
              m()(l()(a), '_panResponder', {}),
              m()(l()(a), '_setRef', function (e) {
                var t = a.props,
                  n = t.onPanEnd,
                  r = t.onPanMove,
                  i = t.onPinchMove,
                  o = t.onWheel
                if (e) {
                  ;(r || n || i) && (a._removeTouchMoveToScrollListener = Object(L.a)(e, a._preventDefaultEvent, !1)),
                    o && (a._removeScrollToScaleListener = Object(L.b)(e, a._preventDefaultEvent, !1))
                  var s = e.getBoundingClientRect()
                  a._centerPosition = { x: s.width / 2 + s.left, y: s.height / 2 + s.top }
                }
              }),
              m()(l()(a), '_preventDefaultEvent', function (e) {
                e.preventDefault()
              }),
              m()(l()(a), '_handlePanResponderMove', function (e, t) {
                var n,
                  r,
                  i = a.props,
                  o = i.onPanMove,
                  s = i.onPinchMove,
                  l = e.nativeEvent.touches
                if (2 === t.numberActiveTouches) {
                  if (s) {
                    var c =
                        ((n = l[0]),
                        (r = l[1]),
                        Math.sqrt(Math.pow(n.pageY - r.pageY, 2) + Math.pow(n.pageX - r.pageX, 2))),
                      u = (function (e, t) {
                        return {
                          pageX: Math.min(t.pageX, e.pageX) + Math.abs(t.pageX - e.pageX) / 2,
                          pageY: Math.min(t.pageY, e.pageY) + Math.abs(t.pageY - e.pageY) / 2,
                        }
                      })(l[0], l[1]),
                      d = u.pageX,
                      p = u.pageY,
                      h = a._previousPositionX ? d - a._previousPositionX : 0,
                      m = a._previousPositionY ? p - a._previousPositionY : 0,
                      f = a._previousTouchDistance ? c - a._previousTouchDistance : 0
                    ;(a._previousPositionX = d), (a._previousPositionY = p), (a._previousTouchDistance = c)
                    var v = a._centerPosition
                    s(f, v.x - d, v.y - p, h, m)
                  }
                } else o && o(t.dx, t.dy)
                document.addEventListener('selectstart', a._preventDefaultEvent, !1)
              }),
              m()(l()(a), '_handlePanResponderEnd', function (e, t) {
                a.props.onPanEnd && a.props.onPanEnd(t.dx, t.dy),
                  a.props.onPinchMove && (a._previousTouchDistance = 0),
                  (a._previousPositionX = 0),
                  (a._previousPositionY = 0),
                  a._removeSelectStartListener()
              }),
              m()(l()(a), '_handleWheel', function (e) {
                var t = e.clientX,
                  n = e.clientY,
                  r = e.deltaX,
                  i = e.deltaY,
                  o = a._centerPosition,
                  s = o.x - t,
                  l = o.y - n
                a.props.onWheel && a.props.onWheel(r, i, s, l)
              }),
              (a._panResponder = A.a.create({
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
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = (e.children, e.onPanEnd, e.onPanMove, e.onPinchMove, e.onWheel, P()(e, O))
                  return v.a.createElement(
                    w.a,
                    S()({}, t, { onWheel: this._handleWheel, ref: this._setRef }, this._panResponder.panHandlers),
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
        })(v.a.Component),
        F = n('9RkS'),
        R = n('rOXj'),
        N = n('aITJ'),
        B = n('yiKp'),
        M = n.n(B),
        V = n('Lsrn'),
        U = n('k/Ka'),
        j = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(U.a)(
            'svg',
            M()(
              M()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [V.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            v.a.createElement(
              'g',
              null,
              v.a.createElement('path', {
                d: 'M19.75 19.944H4.25c-1.24 0-2.25-1.01-2.25-2.25V6.306c0-1.24 1.01-2.25 2.25-2.25h15.5c1.24 0 2.25 1.01 2.25 2.25v11.39c0 1.24-1.01 2.248-2.25 2.248zM4.25 5.556c-.413 0-.75.337-.75.75v11.39c0 .412.337.75.75.75h15.5c.413 0 .75-.338.75-.75V6.305c0-.413-.337-.75-.75-.75H4.25z',
              }),
            ),
          )
        }
      j.metadata = { width: 24, height: 24 }
      var z = j,
        H = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(U.a)(
            'svg',
            M()(
              M()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [V.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            v.a.createElement(
              'g',
              null,
              v.a.createElement('path', {
                d: 'M19.75 19.89H4.25C3.01 19.89 2 18.88 2 17.64v-7.28c0-1.24 1.01-2.25 2.25-2.25h15.5c1.24 0 2.25 1.01 2.25 2.25v7.277c0 1.24-1.01 2.25-2.25 2.25zM4.25 9.61c-.413 0-.75.338-.75.75v7.278c0 .413.337.75.75.75h15.5c.413 0 .75-.337.75-.75V10.36c0-.412-.337-.75-.75-.75H4.25z',
              }),
            ),
          )
        }
      H.metadata = { width: 24, height: 24 }
      var W = H,
        G = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(U.a)(
            'svg',
            M()(
              M()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [V.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            v.a.createElement(
              'g',
              null,
              v.a.createElement('path', {
                d: 'M19.75 22H4.25C3.01 22 2 20.99 2 19.75V4.25C2 3.01 3.01 2 4.25 2h15.5C20.99 2 22 3.01 22 4.25v15.5c0 1.24-1.01 2.25-2.25 2.25zM4.25 3.5c-.413 0-.75.337-.75.75v15.5c0 .413.337.75.75.75h15.5c.413 0 .75-.337.75-.75V4.25c0-.413-.337-.75-.75-.75H4.25z',
              }),
            ),
          )
        }
      G.metadata = { width: 24, height: 24 }
      var q = G,
        K = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(U.a)(
            'svg',
            M()(
              M()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [V.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            v.a.createElement(
              'g',
              null,
              v.a.createElement('path', {
                d: 'M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z',
              }),
              v.a.createElement('path', {
                d: 'M15.21 11c0 .41-.34.75-.75.75h-2.71v2.71c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2.71H7.54c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.71V7.54c0-.41.34-.75.75-.75s.75.34.75.75v2.71h2.71c.41 0 .75.34.75.75z',
              }),
            ),
          )
        }
      K.metadata = { width: 24, height: 24 }
      var Y = K,
        X = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(U.a)(
            'svg',
            M()(
              M()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [V.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            v.a.createElement(
              'g',
              null,
              v.a.createElement('path', {
                d: 'M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z',
              }),
              v.a.createElement('path', {
                d: 'M14.46 11.75H7.54c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h6.92c.415 0 .75.336.75.75s-.335.75-.75.75z',
              }),
            ),
          )
        }
      X.metadata = { width: 24, height: 24 }
      var Q = X,
        J = g.a.d85bc1b8,
        Z = g.a.f596ace8,
        $ = g.a.df031fca,
        ee = g.a.b40332c5,
        te = g.a.e547b368,
        ne = g.a.f7571204,
        ae = g.a.e6e16811,
        re =
          Math.log2 ||
          function (e) {
            return Math.log(e) * Math.LOG2E
          },
        ie = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n(e) {
            var a, i
            return (
              r()(this, n),
              (a = t.call(this, e)),
              m()(l()(a), '_previousLeft', 0),
              m()(l()(a), '_previousTop', 0),
              m()(l()(a), '_panStyles', { top: 0, left: 0 }),
              m()(l()(a), '_shouldShowZoomControl', function () {
                return (!N.b.isMobileOS() || !R.a.isTouchSupported()) && a.props.withZoomControl
              }),
              m()(l()(a), '_renderControls', function () {
                var e = a.props,
                  t = e.image,
                  n = e.withAspectRatioOptions,
                  r = a.state.aspectRatio,
                  i = t.width / t.height,
                  o = a._shouldShowZoomControl()
                return n || o
                  ? v.a.createElement(
                      w.a,
                      { style: oe.controlsContainer },
                      n
                        ? v.a.createElement(
                            w.a,
                            { style: oe.ratioContainer },
                            v.a.createElement(_.a, {
                              accessibilityLabel: Z,
                              borderColor: 'transparent',
                              color: r === i ? 'primary' : 'gray700',
                              hoverLabel: { label: te },
                              icon: v.a.createElement(z, null),
                              onPress: a._setAspectRatio(i),
                              size: 'medium',
                            }),
                            v.a.createElement(_.a, {
                              accessibilityLabel: $,
                              borderColor: 'transparent',
                              color: r === 16 / 9 ? 'primary' : 'gray700',
                              hoverLabel: { label: ne },
                              icon: v.a.createElement(W, null),
                              onPress: a._setAspectRatio(16 / 9),
                              size: 'medium',
                            }),
                            v.a.createElement(_.a, {
                              accessibilityLabel: ee,
                              borderColor: 'transparent',
                              color: 1 === r ? 'primary' : 'gray700',
                              hoverLabel: { label: ae },
                              icon: v.a.createElement(q, null),
                              onPress: a._setAspectRatio(1),
                              size: 'medium',
                            }),
                          )
                        : null,
                      o
                        ? v.a.createElement(
                            w.a,
                            { style: oe.zoomContainer },
                            v.a.createElement(F.a, {
                              accessibilityLabel: J,
                              max: a._maxScale,
                              maxIcon: v.a.createElement(Y, { style: oe.icon }),
                              min: 0,
                              minIcon: v.a.createElement(Q, { style: oe.icon }),
                              onChange: a._handleScaleChange,
                              step: 'any',
                              value: a.state.imageScale,
                            }),
                          )
                        : null,
                    )
                  : null
              }),
              m()(l()(a), '_setImageRef', function (e) {
                a._imageRef = e
              }),
              m()(l()(a), '_handleScaleChange', function (e) {
                a.setState({ imageScale: e })
              }),
              m()(l()(a), '_getImageDimensions', function () {
                var e = a.state.imageScale,
                  t = a.props.image.width / a.props.image.height,
                  n = a._getMaskDimensions(),
                  r = n.height,
                  i = n.width,
                  o = I.a.getCoverDimensions({ width: i, height: r }, t),
                  s = o.height
                return { width: o.width * Math.pow(2, e), height: s * Math.pow(2, e) }
              }),
              m()(l()(a), '_getMaskDimensions', function () {
                var e = a.state,
                  t = e.aspectRatio,
                  n = e.containerHeight,
                  r = e.containerWidth,
                  i = I.a.getContainDimensions({ width: r - 50, height: n - 50 }, t),
                  o = i.height
                return { width: i.width, height: o }
              }),
              m()(l()(a), '_handleLayout', function (e) {
                var t = e.nativeEvent.layout,
                  n = t.height,
                  r = t.width
                a.state.containerHeight || a.state.containerWidth
                  ? a.setState({ containerHeight: n, containerWidth: r })
                  : (a.setState({ containerHeight: n, containerWidth: r }), a._setDefaultCropData())
              }),
              m()(l()(a), '_setDefaultCropData', function () {
                var e = a.props,
                  t = e.defaultCropData,
                  n = e.image
                if (t) {
                  var r = a._getImageDimensions().width,
                    i = a._getMaskDimensions().width,
                    o = r / n.width,
                    s = re(i / (t.width * o))
                  a.setState({ imageScale: s })
                  var l = a._getUnscaledCropData(),
                    c = l.left,
                    u = l.top
                  ;(a._panStyles.top = u - t.top * o * Math.pow(2, s)),
                    (a._previousTop = a._panStyles.top),
                    (a._panStyles.left = c - t.left * o * Math.pow(2, s)),
                    (a._previousLeft = a._panStyles.left),
                    a._updateNativeStyles()
                }
              }),
              m()(l()(a), '_handleWheel', function (e, t, n, r) {
                var i = (-1 * t) / 500
                a.setState(function (e) {
                  var t = e.imageScale,
                    o = Math.min(a._maxScale, Math.max(t + i, 0))
                  return (
                    (a._panStyles.left += n * (o - t)),
                    (a._panStyles.top += r * (o - t)),
                    (a._previousLeft = a._panStyles.left),
                    (a._previousTop = a._panStyles.top),
                    { imageScale: o }
                  )
                })
              }),
              m()(l()(a), '_handlePanMove', function (e, t) {
                ;(a._panStyles.left = a._previousLeft + e),
                  (a._panStyles.top = a._previousTop + t),
                  a._updateNativeStyles(),
                  a._adjustToInBounds()
              }),
              m()(l()(a), '_handlePanEnd', function (e, t) {
                ;(a._previousLeft = a._panStyles.left), (a._previousTop = a._panStyles.top)
              }),
              m()(l()(a), '_handlePinchMove', function (e, t, n, r, i) {
                var o = e / 200
                a.setState(function (e) {
                  var s = e.imageScale,
                    l = Math.min(a._maxScale, Math.max(s + o, 0))
                  return (
                    (a._panStyles.left += t * (l - s) + r),
                    (a._panStyles.top += n * (l - s) + i),
                    (a._previousLeft = a._panStyles.left),
                    (a._previousTop = a._panStyles.top),
                    { imageScale: l }
                  )
                })
              }),
              m()(l()(a), '_adjustToInBounds', function () {
                var e = a._getUnscaledCropData(),
                  t = a._getImageDimensions(),
                  n = e.left,
                  r = e.top,
                  i = e.left + e.width - t.width,
                  o = e.top + e.height - t.height,
                  s = !1
                n < 0 && ((s = !0), (a._panStyles.left += n), (a._previousLeft += n)),
                  r < 0 && ((s = !0), (a._panStyles.top += r), (a._previousTop += r)),
                  i > 0 && ((s = !0), (a._panStyles.left += i), (a._previousLeft += i)),
                  o > 0 && ((s = !0), (a._panStyles.top += o), (a._previousTop += o)),
                  s && a._updateNativeStyles()
              }),
              m()(l()(a), '_updateNativeStyles', function () {
                var e = a._panStyles,
                  t = e.left,
                  n = e.top
                a._imageRef &&
                  a._imageRef.setNativeProps({
                    style: { transform: [{ translate3d: ''.concat(t, 'px, ').concat(n, 'px, 0') }] },
                  })
              }),
              m()(l()(a), '_getUnscaledCropData', function () {
                var e = a._getImageDimensions(),
                  t = e.height,
                  n = e.width,
                  r = a._getMaskDimensions(),
                  i = r.height,
                  o = r.width,
                  s = a._panStyles,
                  l = s.left
                return { top: (t - i) / 2 - s.top, left: (n - o) / 2 - l, width: o, height: i }
              }),
              m()(l()(a), '_setAspectRatio', function (e) {
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
              (a._maxScale = ((i = e.image), Math.max(Math.min(re(i.width / 150), re(i.height / 150), 3), 0.5))),
              a
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
                    a = e.withZoomControl,
                    r = this._getImageDimensions(),
                    i = r.height,
                    o = r.width,
                    s = this._getMaskDimensions(),
                    l = s.height,
                    c = s.width,
                    u = this.state.containerWidth && this.state.containerHeight
                  return v.a.createElement(
                    w.a,
                    { style: oe.container },
                    v.a.createElement(
                      D,
                      {
                        onLayout: this._handleLayout,
                        onPanEnd: this._handlePanEnd,
                        onPanMove: this._handlePanMove,
                        onPinchMove: a ? this._handlePinchMove : void 0,
                        onWheel: a ? this._handleWheel : void 0,
                        style: oe.root,
                      },
                      u
                        ? v.a.createElement(
                            v.a.Fragment,
                            null,
                            v.a.createElement(y.a, {
                              ref: this._setImageRef,
                              source: { uri: n.src, width: o, height: i },
                              style: oe.image,
                            }),
                            v.a.createElement(E, { circle: t, height: l, width: c }),
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
        })(v.a.Component)
      m()(ie, 'defaultProps', { circle: !1, withZoomControl: !0 })
      var oe = k.a.create(function (e) {
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
      t.a = ie
    },
    '2Daw': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return L
      })
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        s = n('5Yy7'),
        l = n.n(s),
        c = n('2VqO'),
        u = n.n(c),
        d = n('KEM+'),
        p = n.n(d),
        h = (n('uFXj'), n('ERkP')),
        m = n.n(h),
        f = n('LCtV'),
        v = n('3XMw'),
        _ = n.n(v),
        b = n('VPdC'),
        g = n('pKoL'),
        y = n('MWbm'),
        k = n('rFBM'),
        w = n('/yvb'),
        C = n('9Xij'),
        E = n('rHpw'),
        I = n('hOZg'),
        x = n('Mbn/'),
        S = n('T8pk'),
        T = _.a.b87ca51a,
        P = _.a.eebff22c,
        L = (function (e) {
          l()(n, e)
          var t = u()(n)
          function n() {
            return r()(this, n), t.apply(this, arguments)
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.borderRadius,
                    n = e.maskStyle,
                    a = e.mediaItem,
                    r = e.onAddMediaFiles,
                    i = e.onCrop,
                    o = e.onRemove,
                    s = e.rootStyle,
                    l = e.withDragDrop,
                    c = a && !a.uploader,
                    u = m.a.createElement(
                      m.a.Fragment,
                      null,
                      this._renderPreview(),
                      c
                        ? null
                        : m.a.createElement(
                            m.a.Fragment,
                            null,
                            m.a.createElement(y.a, { style: [O.mask, n, A[t]] }),
                            m.a.createElement(
                              y.a,
                              { style: O.mediaPicker },
                              this._renderMediaEdit(),
                              i ? this._renderMediaCrop() : null,
                              o ? this._renderMediaRemove() : null,
                            ),
                          ),
                    )
                  return m.a.createElement(
                    y.a,
                    { style: [O.container, s, A[t]] },
                    l && r ? m.a.createElement(k.a, { onFilesAdded: r, style: [O.dragDropContainer, A[t]] }, u) : u,
                  )
                },
              },
              {
                key: '_renderMediaRemove',
                value: function () {
                  var e = this.props.onRemove
                  return m.a.createElement(w.a, {
                    accessibilityLabel: T,
                    hoverLabel: { label: T },
                    icon: m.a.createElement(I.a, null),
                    onPress: e,
                    size: 'large',
                    style: O.rightButton,
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
                  return m.a.createElement(w.a, {
                    accessibilityLabel: P,
                    icon: m.a.createElement(x.a, null),
                    onPress: t,
                    size: 'large',
                    style: n ? O.middleButton : O.rightButton,
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
                    i = e.onEdit,
                    o = m.a.createElement(S.a, null)
                  return r
                    ? m.a.createElement(b.a, {
                        acceptGifs: t,
                        acceptVideo: n,
                        accessibilityLabel: a,
                        icon: o,
                        onChange: r,
                        size: 'large',
                        type: 'onMediaDominantColorFilled',
                      })
                    : m.a.createElement(w.a, {
                        accessibilityLabel: a,
                        icon: o,
                        onPress: i,
                        size: 'large',
                        style: O.edit,
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
                    ? m.a.createElement(
                        C.a,
                        { ratio: t },
                        m.a.createElement(g.a, {
                          borderRadius: n,
                          enableGif: !1,
                          mediaItem: r,
                          style: O.mediaPreview,
                          withCloseButton: !1,
                        }),
                      )
                    : a
                },
              },
            ]),
            n
          )
        })(m.a.Component)
      p()(L, 'defaultProps', { acceptGifs: !1, acceptVideo: !1, aspectRatio: 1, borderRadius: f.a.NONE })
      var A = E.a.create(function (e) {
          return {
            infinite: { borderRadius: e.borderRadii.infinite },
            medium: { borderRadius: e.borderRadii.small },
            none: { borderRadius: e.borderRadii.none },
          }
        }),
        O = E.a.create(function (e) {
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
    '2MR/': function (e, t, n) {
      'use strict'
      var a = n('ddV6'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        s = n('3XMw'),
        l = n.n(s),
        c = n('v302'),
        u = l.a.b05a39b2,
        d = l.a.c566d3a5,
        p = function (e) {
          return o.a.createElement(c.a, e)
        },
        h = function (e) {
          var t = e.children,
            n = e.hideLabel,
            a = void 0 === n ? d : n,
            i = e.label,
            s = e.lang,
            l = e.render,
            c = void 0 === l ? p : l,
            h = e.revealLabel,
            m = void 0 === h ? u : h,
            f = o.a.useState(!1),
            v = r()(f, 2),
            _ = v[0],
            b = v[1]
          return c({
            actionText: _ ? a : m,
            children: _ ? t : i,
            lang: s,
            onActionClick: function () {
              return b(!_)
            },
          })
        }
      ;(h.displayName = 'TweetDisclosure'), (t.a = h)
    },
    '2qZs': function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        s = n('Lsrn'),
        l = n('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M2.264 22.983c-.322 0-.638-.126-.88-.368-.374-.374-.473-.926-.25-1.405L2.8 17.58c-1.017-1.7-1.55-3.62-1.55-5.58C1.25 6.072 6.072 1.25 12 1.25S22.75 6.072 22.75 12 17.928 22.75 12 22.75c-1.957 0-3.876-.533-5.55-1.54l-3.66 1.657c-.17.078-.35.116-.526.116zm4.158-3.286c.278 0 .558.077.807.23 1.434.864 3.085 1.323 4.77 1.323 5.1 0 9.25-4.15 9.25-9.25S17.1 2.75 12 2.75 2.75 6.9 2.75 12c0 1.688.458 3.338 1.326 4.774.266.44.298.977.086 1.434l-1.384 3.014 3.016-1.386c.2-.093.413-.14.628-.14z',
              }),
              o.a.createElement('path', {
                d: 'M12 18.25c-3.446 0-6.25-2.804-6.25-6.25S8.554 5.75 12 5.75s6.25 2.804 6.25 6.25-2.804 6.25-6.25 6.25zm0-11c-2.62 0-4.75 2.13-4.75 4.75s2.13 4.75 4.75 4.75 4.75-2.13 4.75-4.75S14.62 7.25 12 7.25z',
              }),
              o.a.createElement('path', {
                d: 'M14.5 12.75c-.414 0-.75-.336-.75-.75 0-.965-.785-1.75-1.75-1.75-.414 0-.75-.336-.75-.75s.336-.75.75-.75c1.792 0 3.25 1.458 3.25 3.25 0 .414-.336.75-.75.75z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
    '4BrD': function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        s = n('Lsrn'),
        l = n('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M20.75 22H3.25C2.01 22 1 20.99 1 19.75V4.25C1 3.01 2.01 2 3.25 2h17.5C21.99 2 23 3.01 23 4.25v15.5c0 1.24-1.01 2.25-2.25 2.25zM3.25 3.5c-.414 0-.75.337-.75.75v15.5c0 .413.336.75.75.75h17.5c.414 0 .75-.337.75-.75V4.25c0-.413-.336-.75-.75-.75H3.25z',
              }),
              o.a.createElement('path', {
                d: 'M16.758 6.982h-5.806c-.414 0-.75.336-.75.75s.336.75.75.75h3.995L6.92 16.508c-.292.293-.292.768 0 1.06.147.147.34.22.53.22s.385-.072.53-.22l8.027-8.025v3.995c0 .414.336.75.75.75s.75-.336.75-.75V7.732c0-.414-.335-.75-.75-.75z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
    '53j7': function (e, t, n) {
      'use strict'
      n.d(t, 'h', function () {
        return w
      }),
        n.d(t, 'i', function () {
          return C
        }),
        n.d(t, 'j', function () {
          return E
        }),
        n.d(t, 'a', function () {
          return x
        }),
        n.d(t, 'd', function () {
          return T
        }),
        n.d(t, 'b', function () {
          return L
        }),
        n.d(t, 'e', function () {
          return O
        }),
        n.d(t, 'c', function () {
          return F
        }),
        n.d(t, 'g', function () {
          return N
        }),
        n.d(t, 'f', function () {
          return B
        }),
        n.d(t, 'k', function () {
          return M
        }),
        n.d(t, 'l', function () {
          return U
        }),
        n.d(t, 'm', function () {
          return j
        })
      var a = n('ddV6'),
        r = n.n(a),
        i = n('KEM+'),
        o = n.n(i),
        s = n('yiKp'),
        l = n.n(s),
        c = (n('7x/C'), n('JtPf'), n('oEOe')),
        u = n('AspN'),
        d = n('/kEJ'),
        p = n('XMGw'),
        h = n('Ssj5'),
        m = ''.concat(p.a, '/profile'),
        f = 'rweb/'.concat(m),
        v = c.a(f, 'REMOVE_PROFILE_BANNER'),
        _ = c.a(f, 'UPDATE_PROFILE'),
        b = c.a(f, 'UPDATE_PROFILE_AVATAR'),
        g = c.a(f, 'UPDATE_PROFILE_BANNER'),
        y = c.a(f, 'UPLOAD_MEDIA'),
        k = { avatarMediaId: null, bannerMediaId: null, isUploading: !1, profileSettings: null }
      var w = function (e) {
          return e[m].avatarMediaId
        },
        C = function (e) {
          return e[m].bannerMediaId
        },
        E = function (e) {
          return e[m].profileSettings
        },
        I = 'rweb/settings/profile/ADD_AVATAR_MEDIA',
        x = function (e) {
          return { meta: { mediaId: e }, type: I }
        },
        S = 'rweb/settings/profile/REMOVE_AVATAR_MEDIA',
        T = function (e) {
          return { meta: { mediaId: e }, type: S }
        },
        P = 'rweb/settings/profile/ADD_BANNER_MEDIA',
        L = function (e) {
          return { meta: { mediaId: e }, type: P }
        },
        A = 'rweb/settings/profile/REMOVE_BANNER_MEDIA',
        O = function (e) {
          return { meta: { mediaId: e }, type: A }
        },
        D = 'rweb/settings/profile/PERSIST_PROFILE_SETTINGS',
        F = function (e) {
          return { meta: { profileSettings: e }, type: D }
        },
        R = 'rweb/settings/profile/RESET_PERSISTED_PROFILE_SETTINGS',
        N = function () {
          return { type: R }
        },
        B = function (e) {
          return function (t, n, a) {
            var r = a.api
            return c.b(t, { params: e, request: r.Settings.removeProfileBanner })(
              { actionTypes: v, context: 'ACTION_REMOVE_USER_BANNER' },
              function (e) {
                if (e)
                  return [Object(d.c)({ users: o()({}, e.id_str, l()(l()({}, e), {}, { profile_banner_url: null })) })]
              },
            )
          }
        },
        M = function (e) {
          return function (t, n, a) {
            var r = a.api
            return c.b(t, { params: e, request: r.Settings.updateProfile })(
              { actionTypes: _, context: 'ACTION_UPDATE_PROFILE_SETTINGS' },
              function (e) {
                if (e && e.entities) return [Object(d.c)(e.entities)]
              },
            )
          }
        },
        V = function (e, t, n) {
          return function (a) {
            return function (i, s, l) {
              var p = l.api
              i({ type: y.REQUEST })
              var h = u.p(a)
              return i(h).then(
                function (a) {
                  var s = r()(a, 1)[0]
                  i([{ type: y.SUCCESS }, { type: e.REQUEST }])
                  return c.b(i, { params: { media_id: s.uploadId }, request: n(p) })(
                    { actionTypes: _, context: t },
                    function (e) {
                      if (e) return [Object(d.c)({ users: o()({}, e.id_str, e) })]
                    },
                  )
                },
                function (e) {
                  return i({ type: y.FAILURE }), Promise.reject(e)
                },
              )
            }
          }
        },
        U = V(b, 'ACTION_UPDATE_USER_AVATAR', function (e) {
          return e.Settings.updateProfileAvatar
        }),
        j = V(g, 'ACTION_UPDATE_USER_BANNER', function (e) {
          return e.Settings.updateProfileBanner
        })
      h.a.register(
        o()({}, m, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : k,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          switch (t.type) {
            case I:
              return l()(l()({}, e), {}, { avatarMediaId: t.meta.mediaId })
            case S:
              return l()(l()({}, e), {}, { avatarMediaId: null })
            case P:
              return l()(l()({}, e), {}, { bannerMediaId: t.meta.mediaId })
            case A:
              return l()(l()({}, e), {}, { bannerMediaId: null })
            case D:
              return l()(l()({}, e), {}, { profileSettings: t.meta.profileSettings })
            case R:
              return l()(l()({}, e), {}, { profileSettings: null })
            case y.REQUEST:
              return l()(l()({}, e), {}, { isUploading: !0 })
            case y.FAILURE:
            case y.SUCCESS:
              return l()(l()({}, e), {}, { isUploading: !1 })
            default:
              return e
          }
        }),
      )
    },
    '5emT': function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        s = n('Lsrn'),
        l = n('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M14.548 11.634c-1.207 0-2.188-.98-2.188-2.188 0-.664.302-1.25.77-1.653-.363-.097-.736-.165-1.13-.165-2.416 0-4.375 1.96-4.375 4.376S9.585 16.38 12 16.38c2.418 0 4.377-1.96 4.377-4.376 0-.4-.07-.78-.17-1.146-.402.47-.992.776-1.66.776z',
              }),
              o.a.createElement('path', {
                d: 'M12 19.79c-7.228 0-10.12-6.724-10.24-7.01-.254-.466-.254-1.105.035-1.642C1.88 10.923 4.772 4.2 12 4.2s10.12 6.723 10.24 7.01c.254.465.254 1.104-.035 1.64-.085.216-2.977 6.94-10.205 6.94zm0-14c-6.154 0-8.668 5.787-8.772 6.033-.068.135-.068.208-.033.273.137.316 2.65 6.104 8.805 6.104 6.18 0 8.747-5.973 8.772-6.033.07-.136.07-.21.034-.274-.138-.316-2.652-6.103-8.806-6.103z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
    '6D0R': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'default', function () {
          return f
        })
      var a = n('97Jx'),
        r = n.n(a),
        i = (n('KqXw'), n('MvUL'), n('0zG9'), n('ERkP')),
        o = n.n(i),
        s = n('Hw0q'),
        l = n('9D1O'),
        c = Object(l.c)({
          task: function (e) {
            return e.ReportFlow.task
          },
        }),
        u = n('gPQO'),
        d = n('fz3c'),
        p = function (e, t) {
          return Object(s.a)(e[t])
        },
        h = function (e, t) {
          switch (p(e, t)) {
            case '1':
            case 'true':
              return !0
            default:
              return !1
          }
        },
        m = function (e) {
          return {
            client_app_id: p(e, 'client_app_id'),
            client_location: p(e, 'client_location'),
            client_referer: p(e, 'client_referer'),
            community_id: p(e, 'community_id'),
            conversation_section: p(e, 'conversation_section'),
            impression_id: p(e, 'impression_id'),
            is_media: h(e, 'is_media'),
            is_promoted: h(e, 'is_promoted'),
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
      function f(e) {
        var t,
          n = e.history,
          a = e.location,
          i = a.query,
          s = a.state
        return !(null == i || !i.input_flow_data) ||
          (null != s && null !== (t = s.input) && void 0 !== t && t.requested_variant)
          ? o.a.createElement(u.a, r()({}, e, { flowName: 'report-flow', ocfModule: c }))
          : (n.replace(location.pathname, { input: { requested_variant: JSON.stringify(m(i)) } }), null)
      }
    },
    '6XNv': function (e, t, n) {
      'use strict'
      var a = n('RhWx'),
        r = n.n(a),
        i = n('VrFO'),
        o = n.n(i),
        s = n('Y9Ll'),
        l = n.n(s),
        c = n('1Pcy'),
        u = n.n(c),
        d = n('5Yy7'),
        p = n.n(d),
        h = n('2VqO'),
        m = n.n(h),
        f = n('KEM+'),
        v = n.n(f),
        _ = n('yiKp'),
        b = n.n(_),
        g = (n('lTEL'), n('7x/C'), n('LqLs'), n('87if'), n('kYxP'), n('7xRU'), n('z84I'), n('2G9S'), n('ERkP')),
        y = n.n(g),
        k = n('t62R'),
        w = n('piX5'),
        C = n('4r2z'),
        E = n('FG+G'),
        I = n('rHpw'),
        x = n('k/Ka'),
        S = n('shC7'),
        T = n('MWbm'),
        P = y.a.forwardRef(function (e, t) {
          return Object(x.a)('select', b()(b()({}, e), {}, { ref: t }))
        }),
        L = function (e) {
          return Object(x.a)('option', e)
        },
        A = 1,
        O = (function (e) {
          p()(n, e)
          var t = m()(n)
          function n(e) {
            var a
            return (
              o()(this, n),
              (a = t.call(this, e)),
              v()(u()(a), '_selectRef', y.a.createRef()),
              v()(u()(a), 'state', { isFocused: !1 }),
              v()(u()(a), '_handleChange', function (e) {
                var t = a.props,
                  n = t.onChange,
                  r = t.withEmptyOption,
                  i = e.target,
                  o = i.selectedIndex,
                  s = i.value
                n && n(s, o - (r ? 1 : 0))
              }),
              v()(u()(a), '_handleBlur', function (e) {
                var t = a.props.onBlur
                a.setState({ isFocused: !1 }), t && t()
              }),
              v()(u()(a), '_handleFocus', function (e) {
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
            l()(n, [
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
                    i = e.hasError,
                    o = e.helperText,
                    s = e.options,
                    l = e.style,
                    c = e.testID,
                    u = e.value,
                    d = e.withEmptyOption,
                    p = this.state.isFocused,
                    h = k.b.getLanguage(),
                    m =
                      'ja' === h
                        ? I.a.theme.fontFamilies.japan
                        : S.a.getConstants().isRTL || C.a.isLocaleRTL(h)
                        ? I.a.theme.fontFamilies.rtl
                        : I.a.theme.fontFamilies.normal,
                    f = void 0 === i ? !!a : i,
                    v = new Set()
                  a && v.add(this._errorID), t && v.add(t), o && v.add(this._helperID)
                  var _ = v.size ? r()(v).join(' ') : void 0
                  return y.a.createElement(
                    y.a.Fragment,
                    null,
                    y.a.createElement(
                      T.a,
                      {
                        style: [
                          w.a.border,
                          D.container,
                          n && w.a.disabled,
                          p && w.a.focusedBorderValid,
                          f && w.a.invalidBorderColor,
                          p && f && w.a.focusedBorderInvalid,
                          l,
                        ],
                      },
                      this._renderLabel(),
                      y.a.createElement(
                        P,
                        {
                          accessibilityDescribedBy: _,
                          accessibilityInvalid: f,
                          accessibilityLabelledBy: this._labelID,
                          disabled: n,
                          nativeID: this._id,
                          onBlur: this._handleBlur,
                          onChange: this._handleChange,
                          onFocus: this._handleFocus,
                          ref: this._selectRef,
                          style: [D.select, { fontFamily: m }, n && w.a.disabled],
                          testID: c || '',
                          value: u,
                        },
                        d ? y.a.createElement(L, { disabled: !0, style: D.option, value: '' }) : null,
                        s.map(function (e) {
                          var t = e.disabled,
                            n = e.label,
                            a = e.value
                          return y.a.createElement(
                            L,
                            { disabled: t, key: ''.concat(n, '-').concat(a), style: D.option, value: a },
                            n,
                          )
                        }),
                      ),
                      y.a.createElement(E.a, {
                        style: [D.dropdownCaret, p && w.a.validColor, (i || a) && w.a.invalidColor],
                      }),
                    ),
                    o ? this._renderHelperText() : null,
                    f && a ? this._renderErrorText() : null,
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
                  return y.a.createElement(
                    k.b,
                    {
                      accessibilityRole: 'label',
                      color: n || t ? 'red500' : r ? 'primary' : 'gray700',
                      nativeID: this._labelID,
                      style: D.label,
                    },
                    a,
                  )
                },
              },
              {
                key: '_renderHelperText',
                value: function () {
                  return y.a.createElement(
                    T.a,
                    { accessibilityLiveRegion: 'polite' },
                    y.a.createElement(
                      k.b,
                      { color: 'gray700', nativeID: this._helperID, style: D.helperText },
                      this.props.helperText,
                    ),
                  )
                },
              },
              {
                key: '_renderErrorText',
                value: function () {
                  return y.a.createElement(
                    T.a,
                    { accessibilityLiveRegion: 'polite' },
                    y.a.createElement(
                      k.b,
                      { color: 'red500', nativeID: this._errorID, style: D.helperText },
                      this.props.errorText,
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(y.a.PureComponent)
      v()(O, 'defaultProps', { disabled: !1, autofocus: !1, withEmptyOption: !1 }), (O.propTypes = {})
      var D = I.a.create(function (e) {
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
      t.a = O
    },
    '9B+1': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      }),
        n.d(t, 'b', function () {
          return i
        })
      var a = n('PbbS'),
        r = function (e) {
          return { topicId: e.topicId, functionalityType: e.functionalityType }
        },
        i = function (e) {
          return e === a.a.Star
            ? a.a.Star
            : e === a.a.Favorite
            ? a.a.Favorite
            : e === a.a.Interested
            ? a.a.Interested
            : a.a.Default
        }
    },
    AOWc: function (e, t, n) {
      'use strict'
      n('ho0z'), n('849X'), n('TJCb')
      function a(e) {
        ;(this.name = 'AssertionError'), (this.message = e), (this.stack = new Error().stack)
      }
      ;(a.prototype = Object.create(Error.prototype)), (a.prototype.constructor = a)
      t.a = function (e, t) {
        if (!e) throw new a(t ? 'Assertion failed: '.concat(t) : 'Assertion failed (also, no message was provided)')
      }
    },
    BLtI: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return On
      })
      var a = n('ddV6'),
        r = n.n(a),
        i = n('97Jx'),
        o = n.n(i),
        s = n('yiKp'),
        l = n.n(s),
        c = n('VrFO'),
        u = n.n(c),
        d = n('Y9Ll'),
        p = n.n(d),
        h = n('1Pcy'),
        m = n.n(h),
        f = n('5Yy7'),
        v = n.n(f),
        _ = n('2VqO'),
        b = n.n(_),
        g = n('KEM+'),
        y = n.n(g),
        k =
          (n('2G9S'),
          n('KqXw'),
          n('WNMA'),
          n('hBvt'),
          n('ho0z'),
          n('TJCb'),
          n('7x/C'),
          n('DZ+c'),
          n('849X'),
          n('5BYb'),
          n('uFXj'),
          n('ERkP')),
        w = n.n(k),
        C = n('rcen'),
        E = n('Rp9C'),
        I = n('MWbm'),
        x = n('Irs7'),
        S = n('htQn'),
        T = n('t62R'),
        P = n('OOKO'),
        L = n('/yvb'),
        A = n('rHpw'),
        O = n('v6aA'),
        D = n('Lsrn'),
        F = n('k/Ka'),
        R = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(F.a)(
            'svg',
            l()(
              l()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [D.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            w.a.createElement(
              'g',
              null,
              w.a.createElement('path', {
                d: 'M20.937 3.223c-.403-.263-.948-.375-1.48-.195-.726.247-1.906.534-3.457.534-1.38 0-2.286-.225-3.273-.472l-.01-.003c-1.01-.252-2.1-.525-3.717-.525-1.67 0-3.235.484-4.357.946-.16.066-.312.132-.455.197V2.75c0-.518-.42-.938-.938-.938s-.937.42-.937.938v18.5c0 .518.42.938.938.938s.94-.42.94-.938v-2.457c.28-.15.682-.35 1.168-.55 1.002-.414 2.312-.806 3.642-.806 1.38 0 2.286.225 3.273.472l.01.002c1.01.253 2.102.525 3.717.525 2.4 0 4.075-.6 4.804-.922.58-.257.883-.823.883-1.378V4.577c0-.612-.343-1.088-.75-1.354zm-3.28 8.717c-.465.226-1.026.03-1.25-.435-.71-1.462-2.598-1.42-3.234.113l-.307.74c-.145.35-.487.58-.866.58-.38 0-.72-.23-.866-.58l-.308-.74c-.636-1.532-2.525-1.576-3.233-.113-.226.466-.786.66-1.252.435-.465-.226-.66-.786-.434-1.252C7.16 8.1 10.392 7.905 12 9.94c1.608-2.035 4.84-1.84 6.094.748.225.466.03 1.026-.436 1.252z',
              }),
            ),
          )
        }
      R.metadata = { width: 24, height: 24 }
      var N = R,
        B = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(F.a)(
            'svg',
            l()(
              l()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [D.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            w.a.createElement(
              'g',
              null,
              w.a.createElement('path', {
                d: 'M3.25 22c-.414 0-.75-.336-.75-.75V2.75c0-.414.336-.75.75-.75s.75.336.75.75v1.247C5.144 3.453 7.007 2.75 9 2.75c1.592 0 2.655.266 3.682.522.982.246 1.91.478 3.318.478 1.687 0 2.945-.332 3.704-.61.41-.15.87-.086 1.235.168.35.244.56.64.56 1.054V16.21c0 .474-.272.905-.694 1.1-.62.284-2.325.94-4.806.94-1.593 0-2.654-.266-3.682-.522-.983-.246-1.91-.478-3.318-.478-2.147 0-4.203.996-5 1.433v2.567c0 .414-.336.75-.75.75zM4 5.683v11.314c1.144-.544 3.007-1.247 5-1.247 1.592 0 2.655.266 3.682.522.982.245 1.91.478 3.318.478 1.975 0 3.36-.458 4-.725v-11.4c-.887.302-2.246.625-4 .625-1.593 0-2.654-.266-3.682-.522-.983-.246-1.91-.478-3.318-.478-2.147 0-4.203.996-5 1.433z',
              }),
              w.a.createElement('path', {
                d: 'M17.925 10.77c-1.23-2.543-4.46-2.65-5.925-.496-1.465-2.153-4.695-2.047-5.925.495-.18.372-.025.82.348 1 .373.182.82.026 1.002-.347.78-1.61 2.878-1.556 3.575.123l.308.74c.116.28.39.464.693.464s.578-.182.694-.463l.306-.74c.697-1.68 2.795-1.734 3.575-.124.18.373.63.53 1.002.348.373-.18.53-.628.348-1z',
              }),
            ),
          )
        }
      B.metadata = { width: 24, height: 24 }
      var M = B,
        V = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(F.a)(
            'svg',
            l()(
              l()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [D.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            w.a.createElement(
              'g',
              null,
              w.a.createElement('path', {
                d: 'M17.296 2.642c-2.068-1.17-4.464-1.62-6.816-1.283C8.13 1.692 5.956 2.8 4.3 4.5c-1.658 1.707-2.704 3.91-2.976 6.27-.27 2.357.245 4.738 1.468 6.77.005.01.008.02.01.03 0 .01-.002.017-.004.025L1.12 21.2c-.11.232-.145.49-.103.742.043.254.162.488.343.67.18.184.412.307.665.353.253.047.514.014.747-.094l3.63-1.67h.01l.01.01.01.005c1.68 1.01 3.606 1.542 5.567 1.537 2.373 0 4.68-.783 6.562-2.232 1.882-1.45 3.23-3.482 3.836-5.778.604-2.298.432-4.73-.49-6.92-.925-2.188-2.548-4.01-4.614-5.178zM12 7.25c-2.623 0-4.75 2.127-4.75 4.75s2.127 4.75 4.75 4.75 4.75-2.127 4.75-4.75S14.623 7.25 12 7.25zM5.75 12c0-3.452 2.798-6.25 6.25-6.25s6.25 2.798 6.25 6.25-2.798 6.25-6.25 6.25S5.75 15.452 5.75 12zm5.5-2.5c0-.414.336-.75.75-.75 1.794 0 3.25 1.455 3.25 3.25 0 .413-.337.75-.75.75-.415 0-.75-.337-.75-.75 0-.967-.784-1.75-1.75-1.75-.414 0-.75-.336-.75-.75z',
              }),
            ),
          )
        }
      V.metadata = { width: 24, height: 24 }
      var U = V,
        j = n('7Mjr'),
        z = (function (e) {
          v()(n, e)
          var t = b()(n)
          function n() {
            var e
            u()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              y()(m()(e), '_scribeAction', function (t) {
                var n = e.props,
                  a = n.analytics,
                  r = n.destinationUrl,
                  i = n.note
                a.scribe({ action: t, data: { items: [E.a.getBirdwatchItem(null == i ? void 0 : i.rest_id, r)] } })
              }),
              y()(m()(e), '_handlePivotClick', function () {
                e._scribeAction('click')
              }),
              y()(m()(e), '_getBirdwatchIcon', function (e) {
                switch (e) {
                  case 'BirdwatchFlagFill':
                    return w.a.createElement(N, { style: H.birdwatchIcon, testID: 'icon-birdwatch-flag' })
                  case 'BirdwatchFlagStroke':
                    return w.a.createElement(M, { style: H.birdwatchIcon, testID: 'icon-birdwatch-flag-stroke' })
                  default:
                    return w.a.createElement(U, { style: H.birdwatchIcon, testID: 'icon-birdwatch-fill' })
                }
              }),
              e
            )
          }
          return (
            p()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._scribeAction('impression')
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.callToAction,
                    n = e.destinationUrl,
                    a = e.footer,
                    r = e.iconType,
                    i = e.subtitle,
                    o = e.title,
                    s = '#' === n ? void 0 : { pathname: n, anchorless: !0 },
                    l = s ? this._handlePivotClick : void 0,
                    c = (null == t ? void 0 : t.destinationUrl) || '#',
                    u = '#' === c ? void 0 : c
                  return w.a.createElement(
                    w.a.Fragment,
                    null,
                    w.a.createElement(
                      S.a,
                      {
                        link: s,
                        onPress: l,
                        style: H.pivotContainer,
                        testID: 'birdwatch-pivot',
                        withInteractiveStyling: !!s,
                      },
                      w.a.createElement(
                        I.a,
                        { style: H.headerContainer },
                        w.a.createElement(
                          I.a,
                          { style: [H.headerTextContainer, !t && H.headerTextAndThumbnailContainer] },
                          this._getBirdwatchIcon(r),
                          w.a.createElement(T.b, { size: 'subtext1', style: H.birdwatchLabel, weight: 'bold' }, o),
                        ),
                        t ? null : w.a.createElement(j.a, { style: H.icon, testID: 'icon-arrow-right' }),
                      ),
                      i
                        ? w.a.createElement(C.a, {
                            entities: i.entities,
                            size: 'body',
                            style: H.subtitle,
                            text: i.text,
                          })
                        : null,
                      t
                        ? w.a.createElement(
                            w.a.Fragment,
                            null,
                            w.a.createElement(P.a, { spacing: 'space2' }),
                            w.a.createElement(
                              I.a,
                              { style: H.callToActionContainer },
                              w.a.createElement(T.b, { size: 'subtext1' }, t.prompt),
                              w.a.createElement(
                                L.a,
                                { link: u, onPress: this._handlePivotClick, size: 'small', type: 'primaryOutlined' },
                                t.title,
                              ),
                            ),
                          )
                        : null,
                    ),
                    a
                      ? w.a.createElement(C.a, {
                          color: 'gray700',
                          entities: a.entities,
                          size: 'subtext2',
                          style: H.footer,
                          text: a.text,
                        })
                      : null,
                  )
                },
              },
            ]),
            n
          )
        })(w.a.Component)
      y()(z, 'contextType', O.a)
      var H = A.a.create(function (e) {
          return {
            birdwatchLabel: { display: 'flex', alignItems: 'center' },
            footer: { paddingVertical: e.spaces.space12 },
            pivotContainer: {
              borderColor: e.colors.nestedBorderColor,
              borderWidth: e.borderWidths.small,
              borderRadius: e.borderRadii.xLarge,
              marginTop: e.spaces.space12,
              overflow: 'hidden',
            },
            headerContainer: {
              paddingVertical: e.spaces.space12,
              paddingHorizontal: e.spaces.space12,
              backgroundColor: e.colors.hoverBlack,
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
              flexGrow: 1,
            },
            headerTextContainer: { flexDirection: 'row', width: '100%' },
            headerTextAndThumbnailContainer: { width: '80%' },
            callToActionContainer: {
              paddingVertical: e.spaces.space12,
              paddingHorizontal: e.spaces.space12,
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
              flexGrow: 1,
            },
            icon: { color: e.colors.text, paddingLeft: e.spaces.space12, flexShrink: 0 },
            birdwatchIcon: {
              marginRight: e.spacesPx.space4,
              padding: e.spacesPx.space2,
              color: e.colors.primary,
              flexShrink: 0,
            },
            thumbnail: { color: e.colors.whiteOnColor },
            subtitle: { paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space12 },
          }
        }),
        W = Object(x.a)(z, { element: 'birdwatch_pivot' }),
        G = n('6/RC'),
        q = n('3XMw'),
        K = n.n(q),
        Y = n('5S/X'),
        X = n('Ey+e'),
        Q = n('caTy'),
        J = n('Y6L+'),
        Z = (n('lTEL'), n('JtPf'), n('87if'), n('kYxP'), n('zb92')),
        $ = Object(Z.a)({
          loader: function () {
            return n.e(180).then(n.bind(null, 'mL9d'))
          },
        }),
        ee = n('m3Bd'),
        te = n.n(ee),
        ne = n('xM7j'),
        ae = n('LKCq'),
        re = ['onActionClick'],
        ie = 'inner_tombstone'
      function oe(e) {
        var t,
          n = e.children,
          a = e.config,
          r = e.nativeID,
          i = Object(x.b)()
        if (Y.b) return n
        var s = (null === (t = a.richRevealText) || void 0 === t ? void 0 : t.text) || a.revealText,
          l = a.richText
            ? w.a.createElement(C.a, {
                alignment: a.richText.alignment,
                entities: a.richText.entities,
                onEntityClick: function () {
                  i.scribe({ action: 'open_link', component: ie })
                },
                rtl: a.richText.rtl,
                text: a.richText.text,
              })
            : a.text
        return w.a.createElement(
          I.a,
          { nativeID: r },
          s
            ? w.a.createElement(
                ae.a,
                {
                  label: l,
                  onReveal: function () {
                    i.scribe({ action: 'click', component: ie })
                  },
                  render: function (e) {
                    var t = e.onActionClick,
                      n = te()(e, re)
                    return w.a.createElement(ne.a, o()({}, n, { inline: !0, onClick: t }))
                  },
                  revealLabel: s,
                },
                n,
              )
            : w.a.createElement(ne.a, { inline: !0 }, l),
        )
      }
      var se = n('PeW/'),
        le = n('3IPs'),
        ce = (n('1t7P'), n('jQ/y'), n('PbbS')),
        ue = n('LWCC'),
        de = n('JUsM'),
        pe = A.a.create(function (e) {
          return { topicFollowPrompt: { marginBottom: e.spaces.space12, marginTop: '-'.concat(e.spaces.space8) } }
        }),
        he = function (e) {
          var t = e.defaultRef,
            n = e.topic,
            a = e.topicFollowPrompt,
            r = (null == a ? void 0 : a.description) || {},
            i = r.entities,
            o = r.text
          return w.a.createElement(
            I.a,
            { style: pe.topicFollowPrompt },
            w.a.createElement(de.a, {
              containerRef: t,
              primaryAction: w.a.createElement(ue.a, {
                showRelationshipChangeConfirmation: !0,
                textMode: ce.a.FollowTopic,
                topic: n,
              }),
              text: w.a.createElement(C.a, { entities: i, text: o }),
            }),
          )
        },
        me = n('SrIh'),
        fe = n('gdQ4'),
        ve = n('qbku'),
        _e = n('tocL'),
        be = 'analyticsButton',
        ge = 'promotedIndicator',
        ye = 'socialContext',
        ke = 'tweet',
        we = n('X04g'),
        Ce = n('v/3V'),
        Ee = (n('Ysgh'), n('jwue'), n('+oxZ'), n('RqPI')),
        Ie = n('3zvM'),
        xe = n('lMB6'),
        Se = n('iChn'),
        Te = Object(Ie.e)({
          namespace: 'translationsTweets',
          fetchOneContext: 'FETCH_TWEET_TRANSLATION',
          fetchOneEndpoint: function (e) {
            return function (t, n) {
              return e.Tweets.fetchTranslation(t, n).then(Pe)
            }
          },
          fetchOneParams: function (e) {
            return { id: e }
          },
        }),
        Pe = function (e) {
          var t = Array.isArray(e) ? e : [e]
          return {
            entities: {
              translationsTweets: Object(Se.a)(t, function (e) {
                return e.id_str
              }),
            },
          }
        },
        Le = xe.a.register(Te),
        Ae = n('rxPX'),
        Oe = n('0KEI'),
        De = function (e, t) {
          return Le.select(e, t.tweetId)
        },
        Fe = function (e, t) {
          return Le.selectFetchStatus(e, t.tweetId)
        },
        Re = Object(Ae.a)()
          .propsFromState(function () {
            return { translation: De, translationFetchStatus: Fe, userLanguage: Ee.o }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(Oe.createLocalApiErrorHandlerWithContextFactory)('TRANSLATE_TWEET'),
              fetchTranslation: Le.fetchOneIfNeeded,
            }
          }),
        Ne = n('PdwO'),
        Be = n('cTG8'),
        Me = n('oQhu'),
        Ve = n('YeIG'),
        Ue = n('Gpeq'),
        je = [
          'createLocalApiErrorHandler',
          'disableTranslation',
          'enrichments',
          'fetchTranslation',
          'header',
          'hitHighlights',
          'onMediaTranslation',
          'style',
          'supplementalLang',
          'translation',
          'translationFetchStatus',
          'tweetId',
          'userLanguage',
          'weight',
          'withOriginalText',
        ],
        ze = [
          'createLocalApiErrorHandler',
          'disableTranslation',
          'fetchTranslation',
          'header',
          'onMediaTranslation',
          'style',
          'supplementalLang',
          'translation',
          'translationFetchStatus',
          'tweetId',
          'userLanguage',
          'withOriginalText',
        ],
        He = K.a.b4947556,
        We = (function (e) {
          v()(n, e)
          var t = b()(n)
          function n() {
            var e
            u()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              y()(m()(e), '_fetchTranslation', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchTranslation)(t.tweetId).catch(n())
              }),
              y()(m()(e), '_shouldDisableTranslation', function () {
                var t = e.props,
                  n = t.disableTranslation,
                  a = t.displayTextRange,
                  r = t.entities,
                  i = t.lang,
                  o = t.supplementalLang,
                  s = t.text,
                  l = t.userLanguage
                return e._getMemoizedDisableTranslation(n, a, r, s, i, o, l)
              }),
              y()(m()(e), '_renderTranslation', function () {
                var t = e.props,
                  n =
                    (t.createLocalApiErrorHandler,
                    t.disableTranslation,
                    t.enrichments,
                    t.fetchTranslation,
                    t.header,
                    t.hitHighlights,
                    t.onMediaTranslation,
                    t.style,
                    t.supplementalLang,
                    t.translation),
                  a = (t.translationFetchStatus, t.tweetId, t.userLanguage, t.weight, t.withOriginalText, te()(t, je))
                if (n)
                  return w.a.createElement(
                    Be.a,
                    o()({}, a, {
                      displayTextRange: e._getMemoizedDisplayTextRange(n.text),
                      entities: n.entities,
                      lang: n.destinationLanguage,
                      text: n.text,
                    }),
                  )
              }),
              y()(
                m()(e),
                '_getMemoizedDisplayTextRange',
                Object(Me.a)(function (e) {
                  return [0, e.length]
                }),
              ),
              y()(
                m()(e),
                '_getMemoizedDisableTranslation',
                Object(Me.a)(function (e, t, n, a, r, i, o) {
                  var s = o && Object(Ue.c)(r.split('-')[0]) !== Object(Ue.c)(o.split('-')[0])
                  return e || !!i || !s || !Object(Ue.b)({ displayTextRange: t, entities: n, text: a, language: r })
                }),
              ),
              e
            )
          }
          return (
            p()(n, [
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t = this.props,
                    n = t.onMediaTranslation,
                    a = t.translation
                  if (e.translation !== a && a) {
                    var r,
                      i = this.context.featureSwitches,
                      o = {}
                    ;((null == a || null === (r = a.entities) || void 0 === r ? void 0 : r.media) || []).forEach(
                      function (e) {
                        e.alt_text && (o[e.id_str] = e.alt_text)
                      },
                    ),
                      n && !Object(Ve.a)(o) && i.isTrue('responsive_web_alt_text_translations_enabled') && n(o)
                  }
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = (e.createLocalApiErrorHandler, e.disableTranslation, e.fetchTranslation, e.header),
                    n = (e.onMediaTranslation, e.style),
                    a = (e.supplementalLang, e.translation),
                    r = e.translationFetchStatus,
                    i = e.tweetId,
                    o = (e.userLanguage, e.withOriginalText),
                    s = te()(e, ze)
                  return w.a.createElement(
                    Ne.a,
                    {
                      disableTranslation: this._shouldDisableTranslation(),
                      fetchTranslation: this._fetchTranslation,
                      header: t,
                      key: i,
                      originLanguage: a && a.localizedSourceLanguage,
                      style: n,
                      translateButtonText: He,
                      translatedMessage: this._renderTranslation(),
                      translationFetchStatus: r,
                      withOriginalText: o,
                    },
                    w.a.createElement(Be.a, s),
                  )
                },
              },
            ]),
            n
          )
        })(w.a.Component)
      y()(We, 'contextType', O.a)
      var Ge = Re(We),
        qe = n('2qZs'),
        Ke = n('wwsH'),
        Ye = { viewType: 'birdwatch' },
        Xe = A.a.create(function (e) {
          return { birdwatchIcon: { marginLeft: e.spaces.space12 } }
        }),
        Qe = function (e) {
          var t = e.onPress,
            n = e.onShow,
            a = e.tweetId,
            r = { pathname: '/i/birdwatch/t/'.concat(a), external: !0 }
          return (
            w.a.useEffect(
              function () {
                n && n()
              },
              [n],
            ),
            w.a.createElement(Ke.a, {
              Icon: qe.a,
              accessibilityLabel: 'Birdwatch note',
              activeColor: 'primary',
              behavioralEventContext: Ye,
              link: r,
              onPress: t,
              style: Xe.birdwatchIcon,
            })
          )
        },
        Je = n('xXop'),
        Ze = n('xrkw'),
        $e = n('mqpi'),
        et = K.a.g1fa869c,
        tt = (function (e) {
          v()(n, e)
          var t = b()(n)
          function n() {
            var e
            u()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              y()(m()(e), '_shouldDisable', $e.b.bind(null, e.context.featureSwitches)),
              e
            )
          }
          return (
            p()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.endControl,
                    n = e.loggedInUserId,
                    a = e.onAnalyticsClick,
                    r = e.style,
                    i = e.tweet
                  return !this._shouldDisable(i, $e.a.Analytics) && n === i.user.id_str
                    ? w.a.createElement(
                        I.a,
                        { style: [nt.activityContainerWithChildren, r] },
                        w.a.createElement(
                          S.a,
                          {
                            link: ''.concat(i.permalink, '/analytics'),
                            onPress: a,
                            style: nt.analyticsButton,
                            testID: be,
                          },
                          w.a.createElement(Ze.a, { style: nt.analyticsIcon }),
                          w.a.createElement(T.b, { color: 'gray700' }, et),
                        ),
                        t,
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(w.a.PureComponent)
      y()(tt, 'contextType', O.a)
      var nt = A.a.create(function (e) {
          return {
            analyticsIcon: { color: e.colors.gray700, paddingRight: e.spaces.space4 },
            analyticsButton: { paddingVertical: e.spaces.space16, flexDirection: 'row', flexGrow: 1 },
            activityContainerWithChildren: {
              justifyContent: 'space-between',
              borderTopColor: e.colors.borderColor,
              borderTopStyle: 'solid',
              borderTopWidth: '1px',
              flexDirection: 'row',
              alignItems: 'center',
            },
          }
        }),
        at = tt,
        rt = n('tmUV'),
        it = n('YBcl'),
        ot = n('k89r'),
        st = function (e) {
          var t = Object(ot.a)()
          return w.a.createElement(
            it.a,
            o()({}, e, {
              handleAnchorAction: function () {
                t.scribe({ component: 'conversation_control_prompt', element: 'see_conversation', action: 'click' })
              },
              handleAnchorOpen: function (e) {
                t.scribe({ element: e, action: 'click' })
              },
              handleAnchorSecondaryAction: function () {
                t.scribe({ component: 'conversation_control_prompt', element: 'ok', action: 'click' })
              },
              handleHeadsUpImpression: function (e, n) {
                t.scribe({ element: 'heads_up_context', action: n, data: { tweet_id: e } })
              },
            }),
          )
        },
        lt = n('uFYP'),
        ct = K.a.g6237a1e,
        ut = K.a.d6b5949e,
        dt = function (e) {
          switch (e) {
            case 'paused':
              return ut
            case 'in-progress':
            default:
              return ct
          }
        },
        pt = function (e) {
          var t = e.nativeID,
            n = e.status,
            a = e.style,
            r = 'paused' === n
          return w.a.createElement(
            I.a,
            { style: [ht.root, a] },
            w.a.createElement(lt.a, { style: [ht.icon, r ? ht.withGray700 : null] }),
            w.a.createElement(T.b, { color: r ? 'gray700' : 'text', nativeID: t, size: 'subtext2' }, dt(n)),
          )
        },
        ht = A.a.create(function (e) {
          return {
            root: { alignItems: 'center', flexDirection: 'row' },
            icon: { color: e.colors.buttonBlack, height: '1em', marginRight: e.spaces.space4, flexShrink: 0 },
            withGray700: { color: e.colors.gray700 },
          }
        }),
        mt = n('TuTd'),
        ft = function (e, t) {
          return Object(mt.a)(e, t.tweetId)
        },
        vt = Object(Ae.a)()
          .propsFromState(function () {
            return { liveCounts: ft }
          })
          .adjustStateProps(function (e) {
            var t = e.liveCounts
            return {
              liveLikeCount: t && t.likeCount,
              liveQuoteCount: t && t.quoteCount,
              liveRetweetCount: t && t.retweetCount,
            }
          }),
        _t = (n('KOtZ'), n('LW0h'), n('tQbP'), n('z84I'), n('Jkc4')),
        bt = n('855f'),
        gt = n('MtXG'),
        yt = n('de1q'),
        kt = n('cHvH'),
        wt = K.a.fd80ffbf,
        Ct = A.a.theme.spacesPx.space20,
        Et = (function (e) {
          v()(n, e)
          var t = b()(n)
          function n(e, a) {
            var r
            return (
              u()(this, n),
              (r = t.call(this, e, a)),
              y()(
                m()(r),
                '_reactionsLegacyHeartEnabled',
                r.context.featureSwitches.isTrue('responsive_web_reactions_legacy_heart'),
              ),
              y()(m()(r), '_renderQuoteTweetTimelinePivot', function () {
                var e = r.props.permalink
                return w.a.createElement(
                  S.a,
                  {
                    link: ''.concat(e, '/retweets/with_comments'),
                    onPress: r._handleQuoteTweetPivotScribeOnClick,
                    style: It.quoteTweetPivot,
                    withDarkerInteractiveBackground: !1,
                  },
                  w.a.createElement(T.b, { color: 'primary' }, wt),
                )
              }),
              y()(m()(r), '_updateStateIfChanged', function (e, t) {
                return function (n) {
                  var a = n.nativeEvent.layout.width
                  a !== e() && t(a)
                }
              }),
              y()(
                m()(r),
                '_handleQuoteTweetStatLayout',
                r._updateStateIfChanged(
                  function () {
                    return r.state.quoteTweetLabelWidth
                  },
                  function (e) {
                    return r.setState({ quoteTweetLabelWidth: e })
                  },
                ),
              ),
              y()(
                m()(r),
                '_handleRetweetStatLayout',
                r._updateStateIfChanged(
                  function () {
                    return r.state.retweetLabelWidth
                  },
                  function (e) {
                    return r.setState({ retweetLabelWidth: e })
                  },
                ),
              ),
              y()(
                m()(r),
                '_handleLikeStatLayout',
                r._updateStateIfChanged(
                  function () {
                    return r.state.likeLabelWidth
                  },
                  function (e) {
                    return r.setState({ likeLabelWidth: e })
                  },
                ),
              ),
              y()(
                m()(r),
                '_handleStatGroupLayout',
                r._updateStateIfChanged(
                  function () {
                    return r.state.groupWidth
                  },
                  function (e) {
                    return r.setState({ groupWidth: e })
                  },
                ),
              ),
              y()(m()(r), '_handleRetweetScribeOnClick', function () {
                r.props.analytics.scribe({ element: 'retweet_stat', action: 'click' })
              }),
              y()(m()(r), '_handleQuoteTweetScribeOnClick', function () {
                r.props.analytics.scribe({ element: 'quote_tweet_stat', action: 'click' })
              }),
              y()(m()(r), '_handleQuoteTweetPivotScribeOnClick', function () {
                r.props.analytics.scribe({ element: 'quote_tweet_pivot', action: 'click' })
              }),
              (r.state = {
                retweetLabelWidth: void 0,
                likeLabelWidth: void 0,
                quoteTweetLabelWidth: void 0,
                groupWidth: void 0,
              }),
              r
            )
          }
          return (
            p()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.analytics,
                    n = e.isNonCompliantTweet,
                    a = e.quoteTweetCount
                  n && t.scribe({ element: 'quote_tweet_pivot', action: 'impression' }),
                    a && a > 0 && t.scribe({ element: 'quote_tweet_stat', action: 'impression' })
                },
              },
              {
                key: 'render',
                value: function () {
                  return this.props.isNonCompliantTweet ? this._renderQuoteTweetTimelinePivot() : this._renderStats()
                },
              },
              {
                key: '_renderReaction',
                value: function (e) {
                  var t = this,
                    n = this.props.permalink,
                    a = bt.a.getTruncatedCount(e.count),
                    r = { pathname: ''.concat(n, '/reactions'), state: { reactionType: e.type } }
                  return w.a.createElement(
                    I.a,
                    { key: e.type },
                    w.a.createElement(_t.a, null, function (n) {
                      return w.a.createElement(
                        gt.a,
                        { count: e.count, link: r, onPress: n() },
                        w.a.createElement(
                          I.a,
                          { style: It.reactionStat },
                          w.a.createElement(yt.a, {
                            legacyHeart: t._reactionsLegacyHeartEnabled,
                            reactionType: e.type,
                            style: It.reaction,
                          }),
                          w.a.createElement(gt.a.Value, { animated: !0, count: e.count, weight: 'normal' }, a),
                        ),
                      )
                    }),
                  )
                },
              },
              {
                key: '_renderReactionsStatsGroup',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.permalink,
                    a = t.reactionCount,
                    r =
                      (a &&
                        a.reduce(function (e, t) {
                          return (t.count || 0) + e
                        }, 0)) ||
                      0
                  if (!r || !a) return null
                  var i = bt.a.getTruncatedCount(r),
                    o = a
                      .sort(function (e, t) {
                        return t.count - e.count
                      })
                      .filter(function (e) {
                        return e.count > 0
                      })
                  return w.a.createElement(kt.a, null, function (t) {
                    var a = t.windowWidth
                    return w.a.createElement(
                      gt.a.Group,
                      { style: [It.detailItemContainer, It.detailItem] },
                      a > A.a.theme.breakpoints.small
                        ? w.a.createElement(
                            I.a,
                            null,
                            w.a.createElement(_t.a, null, function (e) {
                              return w.a.createElement(
                                gt.a,
                                { count: r, link: ''.concat(n, '/reactions'), onPress: e() },
                                w.a.createElement(
                                  K.a.I18NFormatMessage,
                                  { $i18n: 'd01be6d8' },
                                  w.a.createElement(
                                    gt.a.Value,
                                    { animated: !0, count: r },
                                    K.a.b4a4e4aa({ displayCountAll: i }),
                                  ),
                                  w.a.createElement(gt.a.Label, null, K.a.ifa70ada({ count: r })),
                                ),
                              )
                            }),
                          )
                        : null,
                      o.map(function (t) {
                        return e._renderReaction(t)
                      }),
                    )
                  })
                },
              },
              {
                key: '_renderLikesStat',
                value: function (e) {
                  var t = bt.a.getTruncatedCount(e),
                    n = this.props.permalink
                  return w.a.createElement(
                    I.a,
                    { onLayout: this._handleLikeStatLayout },
                    w.a.createElement(_t.a, null, function (a) {
                      return w.a.createElement(
                        gt.a,
                        { count: e, link: ''.concat(n, '/likes'), onPress: a() },
                        w.a.createElement(
                          K.a.I18NFormatMessage,
                          { $i18n: 'e4eeeefe' },
                          w.a.createElement(gt.a.Value, { animated: !0, count: e }, K.a.ha054943({ displayCount: t })),
                          w.a.createElement(gt.a.Label, null, K.a.d260af55({ count: e })),
                        ),
                      )
                    }),
                  )
                },
              },
              {
                key: '_renderRetweetsStat',
                value: function (e) {
                  var t = this,
                    n = bt.a.getTruncatedCount(e),
                    a = this.props.permalink
                  return w.a.createElement(
                    I.a,
                    { onLayout: this._handleRetweetStatLayout },
                    w.a.createElement(_t.a, null, function (r) {
                      return w.a.createElement(
                        gt.a,
                        { count: e, link: ''.concat(a, '/retweets'), onPress: r(t._handleRetweetScribeOnClick) },
                        w.a.createElement(
                          K.a.I18NFormatMessage,
                          { $i18n: 'b07c7c02' },
                          w.a.createElement(gt.a.Value, { animated: !0, count: e }, K.a.j142cb3f({ displayCount: n })),
                          w.a.createElement(gt.a.Label, null, K.a.e59a4e90({ count: e })),
                        ),
                      )
                    }),
                  )
                },
              },
              {
                key: '_renderQuoteTweetsStat',
                value: function (e) {
                  var t = this,
                    n = bt.a.getTruncatedCount(e),
                    a = this.props.permalink
                  return w.a.createElement(
                    I.a,
                    { onLayout: this._handleQuoteTweetStatLayout },
                    w.a.createElement(_t.a, null, function (r) {
                      return w.a.createElement(
                        gt.a,
                        {
                          count: e,
                          link: ''.concat(a, '/retweets/with_comments'),
                          onPress: r(t._handleQuoteTweetScribeOnClick),
                        },
                        w.a.createElement(
                          K.a.I18NFormatMessage,
                          { $i18n: 'f0259953' },
                          w.a.createElement(gt.a.Value, { animated: !0, count: e }, K.a.f6e12705({ displayCount: n })),
                          w.a.createElement(gt.a.Label, null, K.a.e2414184({ count: e })),
                        ),
                      )
                    }),
                  )
                },
              },
              {
                key: '_renderStats',
                value: function () {
                  var e = this.props,
                    t = e.containerStyle,
                    n = e.likeCount,
                    a = e.quoteTweetCount,
                    r = e.reactionCount,
                    i = e.retweetCount,
                    o = e.style,
                    s = e.withReactions,
                    l = this.state,
                    c = l.groupWidth,
                    u = l.likeLabelWidth,
                    d = l.quoteTweetLabelWidth,
                    p = l.retweetLabelWidth,
                    h = p && d && u && c && p + Ct + (s ? 0 : u + Ct) + d > c,
                    m = c,
                    f = s ? void 0 : n
                  return i || f || a || r
                    ? w.a.createElement(
                        I.a,
                        { onLayout: this._handleStatGroupLayout, style: m ? t : It.hidden },
                        s ? this._renderReactionsStatsGroup() : null,
                        i || f || a
                          ? w.a.createElement(
                              gt.a.Group,
                              { style: [It.detailItemContainer, It.detailItem, It.noWrap, o] },
                              i ? this._renderRetweetsStat(i) : null,
                              a ? this._renderQuoteTweetsStat(a) : null,
                              f && !h ? this._renderLikesStat(f) : null,
                            )
                          : null,
                        h && f
                          ? w.a.createElement(
                              gt.a.Group,
                              { style: [It.detailItemContainer, It.detailItem, o] },
                              this._renderLikesStat(f),
                            )
                          : null,
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(w.a.PureComponent)
      y()(Et, 'contextType', O.a)
      var It = A.a.create(function (e) {
          return {
            detailItem: { paddingHorizontal: e.spaces.space4, paddingVertical: e.spaces.space16 },
            detailItemContainer: {
              borderTopColor: e.colors.borderColor,
              borderTopStyle: 'solid',
              borderTopWidth: '1px',
              flexDirection: 'row',
            },
            hidden: { visibility: 'hidden' },
            noWrap: { flexWrap: 'nowrap' },
            quoteTweetPivot: {
              borderTopColor: e.colors.borderColor,
              borderTopStyle: 'solid',
              borderTopWidth: '1px',
              paddingVertical: e.spaces.space16,
            },
            reaction: { width: '1.2em', height: '1.2em', marginRight: '0.5em' },
            reactionStat: { flexDirection: 'row', alignItems: 'center', display: 'inline-flex' },
          }
        }),
        xt = Object(x.a)(Et)
      var St = vt(function (e) {
          var t = e.containerStyle,
            n = e.isNonCompliantTweet,
            a = e.liveLikeCount,
            r = e.liveQuoteCount,
            i = e.liveRetweetCount,
            o = e.tweetLikeCount,
            s = e.tweetPermalink,
            l = e.tweetQuoteTweetCount,
            c = e.tweetReactionCount,
            u = e.tweetRetweetCount,
            d = e.withReactions
          return w.a.createElement(xt, {
            containerStyle: t,
            isNonCompliantTweet: n,
            likeCount: a || o,
            permalink: s,
            quoteTweetCount: r || l,
            reactionCount: c,
            retweetCount: i || u,
            withReactions: d,
          })
        }),
        Tt = n('avOP'),
        Pt = function (e) {
          var t = e.children
          return Y.b ? w.a.createElement(Tt.a, { itemProp: 'articleBody' }, t) : t
        },
        Lt = n('hqKg'),
        At = n('B/Qy'),
        Ot = n('M0jS'),
        Dt = function (e, t) {
          return Ot.b.select(e, t.userId)
        },
        Ft = Object(Ae.a)().propsFromState(function () {
          return {
            userSpace: Object(Lt.createSelector)(Dt, function (e) {
              var t = e ? e.spaces : void 0
              return t
                ? {
                    presenceRingType: 'space',
                    link: {
                      pathname: Object(At.a)(t.live_content.audiospace.broadcast_id),
                      state: { origin: 'audiospace_ring' },
                    },
                  }
                : void 0
            }),
          }
        }),
        Rt = n('Sksh'),
        Nt = n('1I0O'),
        Bt = n('jhWN'),
        Mt = function (e) {
          var t = e.avatarRef,
            n = e.imageLayoutCache,
            a = e.nativeID,
            r = e.onClick,
            i = e.onHoverCardScreenNameClick,
            s = e.promotedContent,
            l = e.screenName,
            c = e.size,
            u = e.style,
            d = e.uri,
            p = e.userId,
            h = e.userSpace,
            m = e.withHoverCard,
            f = e.withLink
          return (
            w.a.useEffect(
              function () {
                return (
                  Rt.a.registerUserInApp(p),
                  function () {
                    Rt.a.deregisterUserInApp(p)
                  }
                )
              },
              [p],
            ),
            h
              ? w.a.createElement(
                  Nt.a,
                  o()(
                    {
                      avatarRef: t,
                      imageLayoutCache: n,
                      nativeID: a,
                      onClick: r,
                      onHoverCardScreenNameClick: i,
                      promotedContent: s,
                      screenName: l,
                      size: c,
                      style: u,
                      uri: d,
                      withHoverCard: m,
                      withLink: f,
                    },
                    h,
                  ),
                )
              : w.a.createElement(Bt.a, {
                  avatarRef: t,
                  imageLayoutCache: n,
                  nativeID: a,
                  onClick: r,
                  onHoverCardScreenNameClick: i,
                  promotedContent: s,
                  screenName: l,
                  size: c,
                  style: u,
                  uri: d,
                  withHoverCard: m,
                  withLink: f,
                })
          )
        },
        Vt = Ft(w.a.memo(Mt)),
        Ut = n('FGLp'),
        jt = n('TIdA'),
        zt = n('DNho'),
        Ht = jt.a.createLayoutCache(),
        Wt = A.a.create(function (e) {
          return { avatar: { display: 'block' }, avatarWrapper: { flexShrink: 1, flexGrow: 0, width: '100%' } }
        }),
        Gt = function (e) {
          var t = Object(x.b)(),
            n = w.a.useContext(O.a).featureSwitches,
            a = e.avatarRef,
            r = e.nativeID,
            i = e.onClick,
            o = e.onHoverCardScreenNameClick,
            s = e.promotedContent,
            l = e.screenName,
            c = e.uri,
            u = e.userId,
            d = e.withHoverCard,
            p = void 0 === d || d,
            h = e.withLink,
            m = void 0 === h || h,
            f = e.withNftAvatar,
            v = e.withUserPresence,
            _ = void 0 !== v && v
          return (
            Object(Ut.a)(function () {
              f && n.isTrue('responsive_web_nft_avatar') && t.scribe({ element: 'nft_avatar', action: 'impression' })
            }),
            w.a.createElement(
              I.a,
              { style: Wt.avatarWrapper },
              w.a.createElement(zt.a.Consumer, null, function (e) {
                var t = e.avatarSize
                return _
                  ? w.a.createElement(Vt, {
                      avatarRef: a,
                      imageLayoutCache: Ht,
                      nativeID: r,
                      onClick: i,
                      onHoverCardScreenNameClick: o,
                      promotedContent: s,
                      screenName: l,
                      size: t,
                      style: Wt.avatar,
                      uri: c,
                      userId: u,
                      withHoverCard: p,
                      withLink: m,
                    })
                  : w.a.createElement(Bt.a, {
                      avatarRef: a,
                      imageLayoutCache: Ht,
                      nativeID: r,
                      onClick: i,
                      onHoverCardScreenNameClick: o,
                      promotedContent: s,
                      screenName: l,
                      size: t,
                      style: Wt.avatar,
                      uri: c,
                      withHoverCard: p,
                      withLink: m,
                    })
              }),
            )
          )
        },
        qt = n('aITJ'),
        Kt = n('E0cF'),
        Yt = n('Z6aJ'),
        Xt = n('dCqJ'),
        Qt = n('Olb6'),
        Jt = n('nBUg'),
        Zt = n('r7g+'),
        $t = n('PbQQ'),
        en = n('e5HP'),
        tn = n('JWUO'),
        nn = n('9VO7'),
        an = n('GBcw'),
        rn = n('jV+4'),
        on = n('ir4X'),
        sn = n('aA1u'),
        ln = n('kY28'),
        cn = n('6nXH')
      function un(e, t, n) {
        var a,
          r = Kt.a.getOriginalTweet(e),
          i = null == r || null === (a = r.entities) || void 0 === a ? void 0 : a.hashtags
        if (Array.isArray(i) && !(i.length < 1)) {
          var o = i[0]
          return n &&
            (function (e) {
              var t = Kt.a.getOriginalTweet(e),
                n = t.extended_entities && t.extended_entities.media
              return (
                !!(n && n.length > 0) &&
                n.some(function (e) {
                  return 'animated_gif' === e.type
                })
              )
            })(e) &&
            t.isTrue('responsive_web_hashtag_highlight_is_enabled')
            ? o.text
            : void 0
        }
      }
      function dn(e, t) {
        if (e && t.isTrue('responsive_web_hashtag_highlight_show_avatar')) return e.profile_image_url_https
      }
      n('yH/f')
      var pn = n('9B+1'),
        hn = n('YICZ'),
        mn = n('21zW'),
        fn = n('8bWS'),
        vn = K.a.gf5e9ea6,
        _n = K.a.e2f2b658,
        bn = Object.freeze({
          see_more: K.a.ffd9cfe6,
          discover_more: K.a.d172116a,
          more: K.a.h63a5c3b,
          more_tweets: K.a.iac074c3,
          more_suggestions: K.a.g11ebd34,
          browse: K.a.g4a69019,
          browse_tweets: K.a.b1abb17d,
        })
      var gn = function (e) {
          var t = e.onUndoTopicNotInterestedClick
          return w.a.createElement(
            I.a,
            { style: wn.tombstone },
            w.a.createElement(ne.a, { actionText: vn, children: _n, inline: !0, onClick: t }),
          )
        },
        yn = Object(x.a)(function (e) {
          var t = e.analytics,
            n = e.bannerText,
            a = e.label,
            r = e.link,
            i = e.linkText,
            o = e.onNotInterestedPress,
            s = e.topic,
            l = e.withRightControl,
            c = n && '' === n.text,
            u = i && '' === i.text,
            d = !u,
            p = !(c || u)
          return w.a.createElement(
            I.a,
            { style: wn.topicActions },
            p && w.a.createElement(mn.a, null),
            d &&
              w.a.createElement(
                T.b,
                {
                  color: 'primary',
                  link: r,
                  onClick: function () {
                    t.scribeAction('click')
                  },
                  size: 'subtext2',
                  weight: 'bold',
                },
                i ? w.a.createElement(C.a, i) : a,
              ),
            l
              ? w.a.createElement(
                  I.a,
                  { style: wn.notInterestedButtonWrapper },
                  w.a.createElement(hn.a, {
                    onPress: o,
                    size: 'small',
                    topicId: s.id,
                    type: 'brandText',
                    withIconOnly: !0,
                  }),
                )
              : null,
          )
        }),
        kn = function (e) {
          var t = e.isExpanded,
            n = e.onNotInterestedPress,
            a = e.topic,
            r = a.following ? wn.followingTopicButtonWrapper : wn.followTopicButtonWrapper,
            i = [t && r, !t && wn.followTopicButtonWrapperNotExpanded],
            o = t ? wn.largeNotInterestedButtonWrapper : wn.notInterestedButtonWrapper
          return w.a.createElement(
            I.a,
            { style: wn.topicActions },
            t ? null : w.a.createElement(mn.a, { style: wn.topicMiddot }),
            w.a.createElement(
              I.a,
              { style: i },
              w.a.createElement(ue.a, {
                isTransparent: !t,
                showRelationshipChangeConfirmation: !0,
                size: t ? 'small' : 'xSmall',
                style: wn.followTopicButton,
                textMode: ce.a.FollowTopic,
                topic: a,
              }),
            ),
            n || (t && !a.following)
              ? w.a.createElement(
                  I.a,
                  { style: o },
                  w.a.createElement(hn.a, {
                    onPress: n,
                    size: 'small',
                    topicId: a.id,
                    type: t ? 'primaryOutlined' : 'brandText',
                    withIconOnly: !t,
                  }),
                )
              : null,
          )
        }
      var wn = A.a.create(function (e) {
          return {
            tombstone: { paddingBottom: e.componentDimensions.gutterVertical },
            iconStyle: {
              paddingBottom: 'calc('.concat(e.spaces.space2, ' + ').concat(e.spaces.space1, ')'),
              marginBottom: e.spaces.space4,
            },
            topicActions: { flexDirection: 'row', flexGrow: 1, alignItems: 'center', minHeight: e.spaces.space32 },
            topicMiddot: { alignSelf: 'center', paddingRight: 0 },
            followTopicButton: { marginTop: e.spaces.space1 },
            followTopicButtonWrapperNotExpanded: { marginBottom: e.spaces.space2 },
            followTopicButtonWrapper: { marginVertical: e.spaces.space4, paddingRight: e.spaces.space4, width: '50%' },
            followingTopicButtonWrapper: { marginVertical: e.spaces.space4, width: '100%' },
            notInterestedButtonWrapper: { alignItems: 'flex-end', flexGrow: 1 },
            largeNotInterestedButtonWrapper: {
              marginVertical: e.spaces.space4,
              paddingLeft: e.spaces.space4,
              width: '50%',
            },
          }
        }),
        Cn = n('0zXz'),
        En = n('fs1G'),
        In = A.a.theme.aspectRatios.maxTimelineImage,
        xn = A.a.theme.aspectRatios.minTimelineImage,
        Sn = K.a.f277e949,
        Tn = K.a.ee79367a,
        Pn = K.a.a2a3824a,
        Ln = K.a.c14cdb18,
        An = K.a.e8adeec8,
        On = (function (e) {
          v()(n, e)
          var t = b()(n)
          function n() {
            var e
            u()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              y()(m()(e), '_defaultInlinePromptRef', w.a.createRef()),
              y()(m()(e), '_iconContainerRef', w.a.createRef()),
              y()(m()(e), 'state', { mediaAltTranslations: {} }),
              y()(m()(e), '_transformPromotedUrl', Ce.a.bind(null, e.context.featureSwitches)),
              y()(
                m()(e),
                '_isEdgeToEdgeEnabled',
                e.context.featureSwitches.isTrue('media_edge_to_edge_content_enabled'),
              ),
              y()(m()(e), '_getWithTopLine', function () {
                var t = e.props,
                  n = t.conversationTreeMetadata,
                  a = t.isFocal,
                  r = t.tweet,
                  i = Kt.a.getOriginalTweet(r),
                  o = e._getConversationPosition(),
                  s = e._getIsConversationStart(),
                  l = n && n.ancestorConnector,
                  c = n && n.indents,
                  u = (a && !!i.in_reply_to_status_id_str) || (o && !s)
                return c ? 'top' === l : u
              }),
              y()(m()(e), '_getWithBottomLine', function () {
                var t = e.props,
                  n = t.conversationTreeMetadata,
                  a = t.tweet,
                  r = Kt.a.getOriginalTweet(a),
                  i = e._getConversationPosition(),
                  o = n && n.indents,
                  s = n && n.descendantConnector,
                  l = i && !i.isEnd
                return o
                  ? s
                  : !(
                      !r.in_reply_to_status_id_str &&
                      'ancestor' !== (null == i ? void 0 : i.position) &&
                      e._isEdgeToEdgeEnabled
                    ) && l
              }),
              y()(m()(e), '_getFeatureConfigurationContextProviderValue', function () {
                var t = e.props,
                  n = t.onMediaHashtagHighlightClick,
                  a = t.promotedContent,
                  r = t.promotedContentAdvertiser,
                  i = t.tweet,
                  o = e.context.featureSwitches,
                  s = {
                    highlightedHashtag: function () {
                      return un(i, o, Yt.a.isPromoted(a))
                    },
                    avatarURIForHashtagHighlight: function () {
                      return dn(r, o)
                    },
                    shouldUseSmallFontForHashtagHighlight: function () {
                      return o.isTrue('responsive_web_hashtag_highlight_use_small_font')
                    },
                    onMediaHashtagHighlightClick: n,
                  },
                  c = {
                    c9sEnabled: function () {
                      return o.isTrue('c9s_enabled')
                    },
                    trustedFriendsEnabled: function () {
                      return o.isTrue('trusted_friends_consumption_enabled')
                    },
                  },
                  u = e._getWithTopLine(),
                  d = e._getWithBottomLine(),
                  p = !e.props.isFocal && (u || d)
                return l()(
                  l()(l()({}, s), c),
                  {},
                  {
                    edgeToEdgeEnabled: function () {
                      return !p && o.isTrue('media_edge_to_edge_content_enabled')
                    },
                    withEdgeToEdgeActionsAndUsername: function () {
                      return o.isTrue('media_edge_to_edge_content_enabled')
                    },
                    headsUpVariant: function () {
                      return o.getStringValue('conversational_safety_heads_up_treatment_A_enabled')
                    },
                    misinfoLabelRevampTweaksEnabled: function () {
                      return o.isTrue('responsive_web_misinfo_label_revamp_tweaks_enabled')
                    },
                    sensitiveMediaWarningsEnabled: function () {
                      return o.isTrue('sensitive_tweet_warnings_enabled')
                    },
                    tweetRendersPromotedContentBadgeBelowHeader: function () {
                      return o.isTrue('responsive_web_promoted_badge_below_header')
                    },
                    socialContextRefreshEnabled: function () {
                      return e.context.featureSwitches.isTrue(
                        'social_context_and_topic_context_refresh_alignment_enabled',
                      )
                    },
                  },
                )
              }),
              y()(m()(e), '_renderPromotedDetails', function (t) {
                var n = e.props,
                  a = n.onPoliticalSponsorWebsiteClick,
                  r = n.onPromotedDisclaimerLearnMoreClick,
                  i = n.onPromotedIndicatorClick,
                  o = n.promotedContent,
                  s = n.promotedContentAdvertiser,
                  l = n.tweet
                return r && a && i
                  ? w.a.createElement(Xt.a, {
                      onPoliticalSponsorWebsiteClick: a,
                      onPromotedDisclaimerLearnMoreClick: r,
                      onPromotedIndicatorClick: i,
                      promotedContent: o,
                      promotedContentAdvertiser: s,
                      style: Dn.promotedDetails,
                      testID: ge,
                      tweet: l,
                      withCircleIcon: t,
                    })
                  : null
              }),
              y()(m()(e), '_getPromoteButtonOnPress', function (t) {
                var n = e.props,
                  a = n.onPromoteAgainButtonClick,
                  r = n.onPromoteButtonClick
                return 'EligibleWithPreviousCampaign' === t ? a : r
              }),
              y()(m()(e), '_renderBirdwatchPivot', function () {
                var t = e.props,
                  n = t.tweet,
                  a = t.withBirdwatchPivots,
                  r = Kt.a.getOriginalTweet(n)
                return r.birdwatch_pivot &&
                  a &&
                  e.context.featureSwitches.isTrue('responsive_web_birdwatch_pivots_enabled')
                  ? w.a.createElement(W, r.birdwatch_pivot)
                  : null
              }),
              y()(m()(e), '_renderModeratedRepliesIcon', function () {
                var t = e.props,
                  n = t.hasModeratedReplies,
                  a = t.onModeratedIconClick,
                  r = t.tweet
                return n ? w.a.createElement(Qt.a, { link: ''.concat(r.permalink, '/hidden'), onPress: a }) : null
              }),
              y()(m()(e), '_renderBirdwatchNotesIcon', function () {
                var t = e.props,
                  n = t.onBirdwatchNotesIconClick,
                  a = t.onBirdwatchNotesIconShown,
                  r = t.tweet
                return !(
                  r.birdwatch_pivot &&
                  !0 ===
                    e.context.featureSwitches.getValueWithoutScribeImpression('responsive_web_birdwatch_pivots_enabled')
                ) &&
                  r.has_birdwatch_notes &&
                  e.context.featureSwitches.isTrue('responsive_web_birdwatch_consumption_enabled') &&
                  e.context.featureSwitches.isTrue('responsive_web_birdwatch_contribution_enabled')
                  ? w.a.createElement(Qe, { onPress: n, onShow: a, tweetId: r.id_str })
                  : null
              }),
              y()(m()(e), '_getUsernameStackedLayoutEnabled', function () {
                return e.props.isFocal || e._isEdgeToEdgeEnabled
              }),
              y()(m()(e), '_handleSocialContextClick', function () {
                var t = e.props,
                  n = t.saveAsRecentSearch,
                  a = t.shouldStoreTypeaheadItem,
                  r = t.socialContext
                if (n && r && a && a(we.a.ItemType.USER)) {
                  var i,
                    o = (null === (i = r.landingUrl) || void 0 === i ? void 0 : i.url.match(J.A.id)) || '',
                    s = r.text || ''
                  n({ topic: { id: o && o[0], name: s, description: Pn, type: le.a.Topic } })
                }
              }),
              y()(m()(e), '_renderTweetTextHWTweet', function (t) {
                var n = e.props,
                  a = n.excludeCardUrl,
                  r = n.hitHighlights,
                  i = n.isFocal,
                  s = n.linkify,
                  c = n.onEntityClick,
                  u = n.tweet,
                  d = n.tweetTextSize,
                  p = n.withCardLinks,
                  h = n.withInlineMedia,
                  m = n.withQuotedTweetLinks,
                  f = Kt.a.getOriginalTweet(u),
                  v = Kt.a.hasInteractiveText(f),
                  _ = d || (v ? 'title4' : t.size),
                  b = e.context.featureSwitches.isTrue('tweet_translation_timeline_enabled'),
                  g = l()(
                    l()({}, t),
                    {},
                    {
                      excludeCardUrl: a,
                      hitHighlights: r,
                      linkify: s,
                      onEntityClick: c,
                      size: _,
                      style: v && Dn.interactiveHighlightSpacer,
                      transformUrl: e._transformUrl,
                      unmentionedUserIds: f.unmentioned_user_ids,
                      weight: v ? 'heavy' : void 0,
                      withCardLinks: p,
                      withMediaLinks: !h,
                      withQuoteLinks: m || Kt.a.isQuotedTweetUnavailable(f),
                      withUnicodeEmojis: Y.b,
                    },
                  )
                return w.a.createElement(
                  Pt,
                  null,
                  b
                    ? w.a.createElement(
                        Ge,
                        o()({}, g, {
                          disableTranslation: f.user.protected,
                          lang: f.lang,
                          onMediaTranslation: e._handleMediaTranslations,
                          supplementalLang: f.supplemental_language,
                          text: f.text,
                          tweetId: f.id_str,
                          withOriginalText: i,
                        }),
                      )
                    : w.a.createElement(Be.a, g),
                )
              }),
              y()(m()(e), '_renderTweetText', function (t) {
                var n = e.props,
                  a = n.excludeCardUrl,
                  r = n.hitHighlights,
                  i = n.isFocal,
                  o = n.linkify,
                  s = n.onEntityClick,
                  l = n.tweet,
                  c = n.tweetTextSize,
                  u = n.withCardLinks,
                  d = n.withInlineMedia,
                  p = n.withQuotedTweetLinks,
                  h = Kt.a.getOriginalTweet(l),
                  m = Kt.a.hasInteractiveText(h),
                  f = c || (i || m ? 'title4' : 'body'),
                  v = e.context.featureSwitches.isTrue('tweet_translation_timeline_enabled')
                return w.a.createElement(
                  Pt,
                  null,
                  i || v
                    ? w.a.createElement(Ge, {
                        disableTranslation: h.user.protected,
                        displayTextRange: h.display_text_range,
                        enrichments: h.enrichments,
                        entities: h.entities,
                        excludeCardUrl: a,
                        hitHighlights: i ? void 0 : r,
                        lang: h.lang,
                        linkify: !!i || o,
                        nativeID: t,
                        onEntityClick: s,
                        onMediaTranslation: e._handleMediaTranslations,
                        quotedTweetId: h.quoted_status && h.quoted_status.id_str,
                        quotedTweetPermalink: h.quoted_status_permalink,
                        size: f,
                        style: i ? Dn.expandedTweetText : m && Dn.interactiveHighlightSpacer,
                        supplementalLang: h.supplemental_language,
                        text: h.text,
                        transformUrl: e._transformUrl,
                        tweetId: h.id_str,
                        unmentionedUserIds: h.unmentioned_user_ids,
                        weight: m ? 'heavy' : void 0,
                        withCardLinks: i ? void 0 : u,
                        withMediaLinks: i ? void 0 : !d,
                        withOriginalText: i,
                        withQuoteLinks: (!i && p) || Kt.a.isQuotedTweetUnavailable(h),
                        withUnicodeEmojis: Y.b,
                      })
                    : w.a.createElement(Be.a, {
                        displayTextRange: h.display_text_range,
                        enrichments: h.enrichments,
                        entities: h.entities,
                        excludeCardUrl: a,
                        hitHighlights: r,
                        lang: h.lang,
                        linkify: o,
                        nativeID: t,
                        onEntityClick: e.props.onEntityClick,
                        quotedTweetId: h.quoted_status && h.quoted_status.id_str,
                        quotedTweetPermalink: h.quoted_status_permalink,
                        size: f,
                        style: m && Dn.interactiveHighlightSpacer,
                        text: h.text,
                        transformUrl: e._transformUrl,
                        unmentionedUserIds: h.unmentioned_user_ids,
                        weight: m ? 'heavy' : void 0,
                        withCardLinks: u,
                        withMediaLinks: !d,
                        withQuoteLinks: p || Kt.a.isQuotedTweetUnavailable(h),
                        withUnicodeEmojis: Y.b,
                      }),
                )
              }),
              y()(m()(e), '_handleMediaTranslations', function (t) {
                e.setState({ mediaAltTranslations: t })
              }),
              y()(m()(e), '_transformUrl', function (t) {
                var n
                return e._transformPromotedUrl(
                  t,
                  null === (n = e.props.promotedContent) || void 0 === n ? void 0 : n.click_tracking_info,
                )
              }),
              e
            )
          }
          return (
            p()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.conversationTreeMetadata,
                    a = t.forwardPivotInfo,
                    i = t.hideConversationControlsEducationText,
                    s = t.hideExclusivityInfoEducationTextInReplies,
                    c = t.hideTrustedFriendsEducationTextInReplies,
                    u = t.isFocal,
                    d = t.loggedInUser,
                    p = t.onBlur,
                    h = t.onClick,
                    m = t.onFocus,
                    f = t.promotedContent,
                    v = t.quotedTweetTombstoneInfo,
                    _ = t.readerModeAvailable,
                    b = t.renderCurationActionMenu,
                    g = t.showConversationHeadsUp,
                    y = t.socialContext,
                    k = t.to,
                    C = t.tweet,
                    E = t.withReaderModeBottomBar,
                    x = t.withTimestamp,
                    S = t.withTimestampLink,
                    P = t.withUnreadStyles,
                    O = Kt.a.getOriginalTweet(C),
                    D = O.has_super_follower,
                    F = O.quick_promote_eligibility,
                    R = O.user,
                    N = null == F ? void 0 : F.eligibility,
                    B = this._getIsQuickPromoteEligible(N),
                    M = Yt.a.isPromoted(f),
                    V = !!M && this.context.featureSwitches.isTrue('responsive_web_promoted_badge_below_header'),
                    U = !!M && this.context.featureSwitches.isTrue('responsive_web_promoted_badge_use_circle_icon'),
                    j = !(!R.professional || !B),
                    z = 'IneligibleCampaignRunning' === N || 'IneligibleCampaignPaused' === N,
                    H = 'string' == typeof k ? { pathname: k } : k,
                    W = n && n.ancestorConnector,
                    q = n && n.indents,
                    K = this._getWithTopLine(),
                    Y = this._getWithBottomLine(),
                    X = K || Y,
                    J = (X && !u) || !this._isEdgeToEdgeEnabled,
                    Z = H ? l()(l()({}, H), {}, { anchorless: !0 }) : void 0,
                    ee = u ? 'detail' : 'inline'
                  return !u &&
                    this.context.featureSwitches.isTrue('responsive_web_consumes_horizon_web_tweet_in_timelines')
                    ? w.a.createElement(
                        Jt.b.Provider,
                        { value: this._getFeatureConfigurationContextProviderValue() },
                        w.a.createElement(
                          rt.a,
                          { forwardPivotInfo: a, tweet: C },
                          w.a.createElement(Zt.a, {
                            conversationTreeMetadata: n
                              ? { ancestorConnector: n.ancestorConnector, depth: n.depth, indents: n.indents }
                              : void 0,
                            link: G.canUseDOM ? Z : void 0,
                            onBlur: p,
                            onFocus: m,
                            onPress: h,
                            promotedContent: f,
                            quotedTweetTombstoneInfo: v,
                            renderActionMenu: b && G.canUseDOM ? b : Cn.a,
                            renderActionsBar: C.isPreview
                              ? function () {
                                  return w.a.createElement($, { previewTweetId: C.id_str })
                                }
                              : function (t) {
                                  return w.a.createElement(
                                    w.a.Fragment,
                                    null,
                                    j &&
                                      w.a.createElement(
                                        L.a,
                                        {
                                          link: ''.concat(C.permalink, '/quick_promote_web/intro'),
                                          onPress: e._getPromoteButtonOnPress(N),
                                          style: Dn.promoteButton,
                                          type: 'primaryOutlined',
                                        },
                                        e._getPromoteButtonText(N),
                                      ),
                                    e._renderTweetActions({
                                      actionSize: t.actionSize,
                                      displayStyle: t.displayStyle,
                                      nativeID: t.nativeID,
                                      style: t.style,
                                      withCount: t.withCount,
                                      withAnalyticsAction: !0,
                                    }),
                                  )
                                },
                            renderEducation: function (t) {
                              return w.a.createElement(
                                w.a.Fragment,
                                null,
                                w.a.createElement(
                                  st,
                                  o()({}, t, {
                                    hideConversationControlsEducationText: !!i,
                                    hideExclusivityInfoEducationTextInReplies: !!s,
                                    hideTrustedFriendsEducationTextInReplies: !!c,
                                    loggedInUser: d,
                                  }),
                                ),
                                e.props.withReaderModeBottomBar
                                  ? w.a.createElement(I.a, { style: Dn.readerBottomBar })
                                  : null,
                              )
                            },
                            renderHighlightedUserLabel: function (t) {
                              var n
                              return 'AutomatedLabel' !==
                                (null === (n = t.label) || void 0 === n ? void 0 : n.userLabelType) ||
                                e.context.featureSwitches.isTrue('account_taxonomy_automated_label_enabled')
                                ? w.a.createElement(Zt.a.HighlightedUserLabel, t)
                                : null
                            },
                            renderPromotedIndicator: function (e) {
                              return w.a.createElement(Zt.a.PromotedIndicator, o()({}, e, { withCircleIcon: U }))
                            },
                            renderPromotionStatusBadge: z
                              ? function (t) {
                                  return w.a.createElement(pt, {
                                    nativeID: t.nativeID,
                                    status: e._getTweetPromotionStatus(N),
                                    style: Dn.promotionStatus,
                                  })
                                }
                              : function () {
                                  return null
                                },
                            renderReplyContext: function (t) {
                              return e._renderReplyContext({ nativeID: t.nativeID })
                            },
                            renderRichContent: function (t) {
                              return e._renderRichContent({ nativeID: t.nativeID, withRoundMediaCorners: J })
                            },
                            renderSelfThreadCTA: function () {
                              return e._renderSelfThreadCTA()
                            },
                            renderSocialContext: function (t) {
                              return e._renderSocialContext({ nativeID: t.nativeID })
                            },
                            renderText: function (t) {
                              return e._renderTweetTextHWTweet(t)
                            },
                            renderTimestamp: x
                              ? function (t) {
                                  return w.a.createElement(
                                    Zt.a.Timestamp,
                                    o()({}, t, {
                                      link: S ? t.link : void 0,
                                      nativeID: e._isEdgeToEdgeEnabled ? void 0 : t.nativeID,
                                    }),
                                  )
                                }
                              : Cn.a,
                            renderTombstone: function (t) {
                              return e._renderTombstoneHWTweet(t)
                            },
                            renderUserAvatar: function (t) {
                              return e._renderAvatar(t.nativeID)
                            },
                            renderUserName: function (t) {
                              return e._renderUserNameHWTweet(t)
                            },
                            socialContext: y
                              ? {
                                  contextType: y.contextType,
                                  isSelfRetweet: y.isSelfRetweet,
                                  link: y.landingUrl ? Object(Q.b)(y.landingUrl) : void 0,
                                  name: y.name,
                                  screenName: y.screenName,
                                  text: y.text,
                                }
                              : void 0,
                            staticLinkConfig: null,
                            testID: ke,
                            tweet: C,
                            withBottomLine: Y,
                            withTopLine: K,
                            withUnreadStyles: P,
                          }),
                        ),
                      )
                    : w.a.createElement($t.c.UseTweetA11yIds, { tweet: C }, function (t) {
                        var o = r()(t, 2),
                          l = o[0],
                          v = o[1],
                          y = V
                            ? Kt.a.hasInteractiveText(O)
                              ? Dn.promotedIndicatorBelowHeaderWithInteractiveHighlights
                              : Dn.promotedIndicatorBelowHeader
                            : Dn.promotedIndicator,
                          k =
                            f && M
                              ? w.a.createElement(en.a, {
                                  contentAuthorId: R.id_str,
                                  nativeID: l.promotedLabel,
                                  promotedContent: f,
                                  style: y,
                                  withCircleIcon: U,
                                })
                              : null,
                          S = z
                            ? w.a.createElement(pt, {
                                nativeID: l.promotionStatusLabel,
                                status: e._getTweetPromotionStatus(N),
                                style: Dn.promotionStatus,
                              })
                            : null,
                          F = n
                            ? w.a.createElement(
                                T.b,
                                { nativeID: l.conversationLevel, style: A.a.visuallyHidden },
                                Tn({ conversationTreeDepth: n.depth.toString() }),
                              )
                            : null,
                          B = O.tombstoneInfo || C.tombstoneInfo,
                          H = w.a.createElement(
                            w.a.Fragment,
                            null,
                            B ? e._renderTombstone(B) : null,
                            u || !B
                              ? w.a.createElement(
                                  w.a.Fragment,
                                  null,
                                  e._renderReplyContext({ nativeID: l.replyContext }),
                                  w.a.createElement(I.a, null, e._renderTweetText(l.text)),
                                  w.a.createElement(
                                    I.a,
                                    null,
                                    e._renderRichContent({ nativeID: l.richContent, withRoundMediaCorners: J }),
                                  ),
                                )
                              : null,
                          )
                        return w.a.createElement(
                          Jt.b.Provider,
                          { value: e._getFeatureConfigurationContextProviderValue() },
                          w.a.createElement(
                            rt.a,
                            { forwardPivotInfo: a, tweet: C },
                            w.a.createElement(
                              tn.a,
                              {
                                a11yDomIds: v,
                                actionMenu: b && G.canUseDOM ? b() : null,
                                avatar: e._renderAvatar(l.avatar),
                                footer: e._renderFooter(),
                                header: e._renderHeader(l),
                                indents: q,
                                link: u || !G.canUseDOM ? void 0 : Z,
                                onBlur: p,
                                onFocus: m,
                                onPress: h,
                                testID: ke,
                                timestamp:
                                  M || e._getUsernameStackedLayoutEnabled() || !x
                                    ? null
                                    : e._renderTweetRelativeTimestamp(l.timestamp),
                                userFollowIndicators: D ? w.a.createElement(nn.a, { type: 'superFollower' }) : void 0,
                                userLabel: e._renderUserLabel(R, l.userLabel),
                                userName: e._renderUserName(l.username, l.timestamp),
                                withBottomLine: Y,
                                withElbow: q ? 'side' === W : void 0,
                                withFooterGap: !u,
                                withFullWidthChildren: u || (!X && e._isEdgeToEdgeEnabled),
                                withTopLine: K,
                                withUnreadStyles: P,
                              },
                              V && u ? e._renderPromotedDetails(U) : null,
                              V && !u ? k : null,
                              F,
                              H,
                              j &&
                                'inline' === ee &&
                                w.a.createElement(
                                  L.a,
                                  {
                                    link: ''.concat(C.permalink, '/quick_promote_web/intro'),
                                    onPress: e._getPromoteButtonOnPress(N),
                                    style: Dn.promoteButton,
                                    type: 'primaryOutlined',
                                  },
                                  e._getPromoteButtonText(N),
                                ),
                              e._renderFocalContent(V, j, S),
                              'inline' === ee &&
                                w.a.createElement(st, {
                                  conversationControlLabelNativeID: l.conversationControlLabel,
                                  displayStyle: 'inline',
                                  exclusivityInfoLabelNativeID: l.exclusivityInfoLabel,
                                  hideConversationControlsEducationText: !!i,
                                  hideExclusivityInfoEducationTextInReplies: !!s,
                                  hideTrustedFriendsEducationTextInReplies: !!c,
                                  loggedInUser: d,
                                  trustedFriendsLabelNativeID: l.trustedFriendsLabel,
                                  tweet: C,
                                }),
                              C.isPreview
                                ? w.a.createElement($, { previewTweetId: C.id_str })
                                : e._renderTweetActions({
                                    actionSize: u ? 'large' : void 0,
                                    displayStyle: u ? 'block' : void 0,
                                    nativeID: l.actionsBar,
                                    style: [
                                      u ? Dn.actionBarFocalTweet : Dn.actionBar,
                                      u && !_ && Dn.actionBarWithInlineReply,
                                    ],
                                    withAnalyticsAction: !u,
                                    withCount: !u,
                                  }),
                              e._renderReaderModeButton(),
                              V || u ? null : k,
                              u ? null : S,
                              'detail' === ee &&
                                w.a.createElement(st, {
                                  conversationControlLabelNativeID: l.conversationControlLabel,
                                  displayStyle: 'detail',
                                  exclusivityInfoLabelNativeID: l.exclusivityInfoLabel,
                                  hideConversationControlsEducationText: !!i,
                                  hideExclusivityInfoEducationTextInReplies: !!s,
                                  hideTrustedFriendsEducationTextInReplies: !!c,
                                  loggedInUser: d,
                                  showConversationHeadsUp: g,
                                  trustedFriendsLabelNativeID: l.trustedFriendsLabel,
                                  tweet: C,
                                }),
                              E ? w.a.createElement(I.a, { style: Dn.readerBottomBar }) : null,
                            ),
                          ),
                        )
                      })
                },
              },
              {
                key: '_renderTweetRelativeTimestamp',
                value: function (e) {
                  var t = this.props,
                    n = t.promotedContent,
                    a = t.tweet,
                    r = t.withTimestampLink,
                    i = Kt.a.getOriginalTweet(a)
                  return w.a.createElement(an.a, {
                    link: r
                      ? { pathname: i.permalink, state: { contextTweetId: i.id_str, promotedContent: n } }
                      : void 0,
                    nativeID: e,
                    timestamp: i.created_at,
                  })
                },
              },
              {
                key: '_renderUserNameHWTweet',
                value: function (e) {
                  var t = this.props,
                    n = t.onAvatarClick,
                    a = t.onScreenNameClick,
                    r = t.tweet,
                    i = t.withUserHoverCard,
                    s = t.withUserName,
                    l = Kt.a.getOriginalTweet(r).user
                  return s
                    ? w.a.createElement(
                        Zt.a.UserName,
                        o()({}, e, {
                          onAvatarClick: n,
                          onLinkClick: a,
                          onScreenNameClick: a,
                          withHoverCard: i && !l.blocking,
                          withLink: !!a,
                        }),
                      )
                    : null
                },
              },
              {
                key: '_renderUserName',
                value: function (e, t) {
                  var n = this.props,
                    a = n.isFocal,
                    r = n.onAvatarClick,
                    i = n.onScreenNameClick,
                    o = n.promotedContent,
                    s = n.tweet,
                    l = n.withUserHoverCard,
                    c = n.withUserName,
                    u = Kt.a.getOriginalTweet(s).user,
                    d = Yt.a.isPromoted(o)
                  return c
                    ? w.a.createElement(rn.a, {
                        isProtected: u.protected,
                        isVerified: u.verified,
                        name: u.name,
                        nativeID: e,
                        onAvatarClick: r,
                        onLinkClick: i,
                        onScreenNameClick: i,
                        promotedContent: o,
                        screenName: u.screen_name,
                        screenNameSuffix:
                          d || a || !this._isEdgeToEdgeEnabled ? null : this._renderTweetRelativeTimestamp(),
                        withHoverCard: l && !u.blocking,
                        withLink: !!i,
                        withStackedLayout: this._getUsernameStackedLayoutEnabled(),
                      })
                    : null
                },
              },
              {
                key: '_renderUserLabel',
                value: function (e, t) {
                  var n = e.highlightedLabel,
                    a = 'AutomatedLabel' === (null == n ? void 0 : n.userLabelType),
                    r = !!a && this.context.featureSwitches.isTrue('account_taxonomy_automated_label_enabled')
                  return !n || (a && !r) ? null : w.a.createElement(on.a, { label: n, nativeID: t })
                },
              },
              {
                key: '_renderFocalContent',
                value: function (e, t, n) {
                  var a = this.props,
                    r = a.isFocal,
                    i = a.onAnalyticsClick,
                    o = a.tweet,
                    s = Kt.a.getOriginalTweet(o),
                    l = s.created_at,
                    c = s.place,
                    u = s.quick_promote_eligibility,
                    d = s.source,
                    p = s.source_name,
                    h = null == u ? void 0 : u.eligibility,
                    m = this.context.featureSwitches.isTrue('responsive_web_reactions_enabled')
                  return r
                    ? w.a.createElement(
                        w.a.Fragment,
                        null,
                        w.a.createElement(
                          I.a,
                          { style: Dn.footerContainer },
                          w.a.createElement(
                            I.a,
                            { style: Dn.footerContent },
                            w.a.createElement(sn.a, {
                              linkColor: 'gray700',
                              place: c && c.full_name,
                              placeLink: c && c.id ? '/places/'.concat(c.id) : void 0,
                              source: d && p ? p : void 0,
                              sourceLink: 'https://help.twitter.com/using-twitter/how-to-tweet#source-labels',
                              style: Dn.timeLocSource,
                              timestamp: l,
                              timestampLink: s.permalink,
                            }),
                            w.a.createElement(
                              I.a,
                              { style: Dn.footerIcons },
                              this._renderModeratedRepliesIcon(),
                              this._renderBirdwatchNotesIcon(),
                            ),
                          ),
                          e ? null : this._renderPromotedDetails(),
                          n,
                        ),
                        w.a.createElement(at, {
                          endControl: t
                            ? w.a.createElement(
                                L.a,
                                {
                                  link: ''.concat(o.permalink, '/quick_promote_web/intro'),
                                  onPress: this._getPromoteButtonOnPress(h),
                                  style: Dn.tweetActivityPromoteButton,
                                  type: 'primaryFilled',
                                },
                                this._getPromoteButtonText(h),
                              )
                            : null,
                          loggedInUserId: this.context.loggedInUserId,
                          onAnalyticsClick: i,
                          tweet: s,
                        }),
                        w.a.createElement(St, {
                          isNonCompliantTweet: 'non_compliant' === s.limited_actions,
                          tweetId: s.id_str,
                          tweetLikeCount: s.favorite_count,
                          tweetPermalink: s.permalink,
                          tweetQuoteTweetCount: s.quote_count,
                          tweetReactionCount: s.reaction_count,
                          tweetRetweetCount: s.retweet_count,
                          withReactions: m,
                        }),
                      )
                    : null
                },
              },
              {
                key: '_renderFooter',
                value: function () {
                  var e = this.props,
                    t = e.isFocal,
                    n = e.topic,
                    a = e.topicFollowPrompt
                  return w.a.createElement(
                    w.a.Fragment,
                    null,
                    this._renderSelfThreadCTA(),
                    !t && n && a && this.context.featureSwitches.isTrue('topics_context_controls_inline_prompt_enabled')
                      ? he({ defaultRef: this._defaultInlinePromptRef, topic: n, topicFollowPrompt: a })
                      : null,
                  )
                },
              },
              {
                key: '_renderHeader',
                value: function (e) {
                  var t = this.props,
                    n = t.isFocal,
                    a = t.topic,
                    r = t.topicFollowPrompt
                  return w.a.createElement(
                    w.a.Fragment,
                    null,
                    n && r && a && this.context.featureSwitches.isTrue('topics_context_controls_inline_prompt_enabled')
                      ? he({ defaultRef: this._defaultInlinePromptRef, topic: a, topicFollowPrompt: r })
                      : this._renderSocialContext({ nativeID: e.socialContext }),
                  )
                },
              },
              {
                key: '_renderSelfThreadCTA',
                value: function () {
                  var e = this.props,
                    t = e.onSelfThreadClick,
                    n = e.onSelfThreadImpression,
                    a = e.tweet,
                    r = Kt.a.getOriginalTweet(a),
                    i = this._shouldShowSelfThreadWithAvatar()
                  return this._shouldShowSelfThread()
                    ? w.a.createElement(fe.a, {
                        avatarUrl: i ? r.user.profile_image_url_https : void 0,
                        onClick: t,
                        onImpression: n,
                        style: Dn.selfThreadCTA,
                        to: a.permalink,
                        userName: r.user.screen_name,
                        withConversationLine: i,
                      })
                    : null
                },
              },
              {
                key: '_shouldShowSelfThread',
                value: function () {
                  var e = this.props,
                    t = e.conversationPosition,
                    n = e.tweet,
                    a = e.withSelfThread,
                    r = Kt.a.getOriginalTweet(n)
                  return a && !t && r.self_thread && !n.isPreview
                },
              },
              {
                key: '_shouldShowSelfThreadWithAvatar',
                value: function () {
                  var e = this.props,
                    t = e.shouldSelfThreadIncludeAvatar,
                    n = e.tweet,
                    a = Kt.a.getOriginalTweet(n)
                  return this._shouldShowSelfThread() && t && !a.in_reply_to_status_id_str
                },
              },
              {
                key: '_getConversationPosition',
                value: function () {
                  return this._shouldShowSelfThreadWithAvatar()
                    ? { isStart: !0, isEnd: !1 }
                    : this.props.conversationPosition
                },
              },
              {
                key: '_getIsConversationStart',
                value: function () {
                  var e = this.props.tweet,
                    t = this._getConversationPosition(),
                    n = Kt.a.getOriginalTweet(e)
                  return t && (t.isStart || !n.in_reply_to_status_id_str)
                },
              },
              {
                key: '_getIsQuickPromoteEligible',
                value: function (e) {
                  switch (e) {
                    case 'Eligible':
                    case 'EligibleWithPreviousCampaign':
                      return !0
                    default:
                      return !1
                  }
                },
              },
              {
                key: '_getPromoteButtonText',
                value: function (e) {
                  switch (e) {
                    case 'Eligible':
                      return Ln
                    case 'EligibleWithPreviousCampaign':
                      return An
                    default:
                      return (
                        Object(me.a)(
                          new Error(
                            'Tweet promote button should never render when quick promote eligibility is '.concat(
                              e || 'null',
                            ),
                          ),
                          { level: 'warning' },
                        ),
                        Ln
                      )
                  }
                },
              },
              {
                key: '_getTweetPromotionStatus',
                value: function (e) {
                  switch (e) {
                    case 'IneligibleCampaignRunning':
                      return 'in-progress'
                    case 'IneligibleCampaignPaused':
                      return 'paused'
                    default:
                      return (
                        Object(me.a)(
                          new Error(
                            'Tweet promotion badge should never render when quick promote eligibility is '.concat(
                              e || 'null',
                            ),
                          ),
                          { level: 'warning' },
                        ),
                        'in-progress'
                      )
                  }
                },
              },
              {
                key: '_renderSocialContext',
                value: function (e) {
                  var t = e.nativeID,
                    n = this.props,
                    a = n.conversationPosition,
                    r = n.injectedFeedbackItem,
                    i = n.isFocal,
                    s = n.onUndoTopicNotInterestedClick,
                    l = n.promotedContent,
                    c = n.socialContext,
                    u = n.topic
                  if (!n.withSocialContext || !c || Yt.a.isPromoted(l)) return null
                  var d = this.context.featureSwitches,
                    p = a && !this._getIsConversationStart(),
                    h = c.contextType,
                    m = c.isSelfRetweet,
                    f = c.landingUrl,
                    v = c.name,
                    _ = c.screenName,
                    b = c.text,
                    g = c.topicContext,
                    y = f ? Object(Q.b)(f) : void 0
                  if (
                    g &&
                    u &&
                    (function (e) {
                      var t = e.featureSwitches,
                        n = e.isExpanded,
                        a = e.topic,
                        r = e.topicContext
                      return (
                        Object(fn.c)(r) &&
                        n &&
                        a.not_interested &&
                        (!(t.getStringValue('topics_context_controls_implicit_variation') in bn) ||
                          t.isTrue('topics_context_controls_implicit_context_x_enabled'))
                      )
                    })({ featureSwitches: d, isExpanded: i, topic: u, topicContext: g })
                  )
                    return w.a.createElement(gn, { onUndoTopicNotInterestedClick: s })
                  var k = {
                      contextType: h,
                      iconSize: 'large',
                      withLeftPadding: this.context.featureSwitches.isTrue(
                        'social_context_and_topic_context_refresh_alignment_enabled',
                      )
                        ? p || !1
                        : !p && !i,
                      text: b,
                    },
                    E =
                      g && u
                        ? (function (e) {
                            var t,
                              n = e.featureSwitches,
                              a = e.iconSize,
                              r = e.injectedFeedbackItem,
                              i = e.isExpanded,
                              o = e.socialContext,
                              s = e.topic,
                              l = e.withLeftPadding,
                              c = o.contextType,
                              u = o.landingUrl,
                              d = o.topicContext,
                              p = u ? Object(Q.b)(u) : void 0,
                              h = d && Object(fn.b)(d),
                              m = d && Object(fn.c)(d),
                              f = n.isTrue('media_edge_to_edge_content_enabled'),
                              v = f ? _e.a.TextOnly : _e.a.Topic,
                              _ =
                                null == r || null === (t = r.markNotInterestedTopic) || void 0 === t
                                  ? void 0
                                  : t.onClick,
                              b = d ? Object(pn.a)(d) : void 0,
                              g = null != d && d.bannerText ? w.a.createElement(C.a, d.bannerText) : o.text
                            if (h && n.getStringValue('topics_context_controls_followed_variation') in bn) {
                              var y = bn[n.getStringValue('topics_context_controls_followed_variation')]
                              return {
                                iconSize: a,
                                contextType: v,
                                rightControl: w.a.createElement(yn, {
                                  bannerText: o.topicContext && o.topicContext.bannerText,
                                  label: y,
                                  link: p,
                                  linkText: o.topicContext && o.topicContext.linkText,
                                  topic: s,
                                }),
                                withBottomBorder: !1,
                                withLeftPadding: !(
                                  n.isTrue('social_context_and_topic_context_refresh_alignment_enabled') || f
                                ),
                                topicData: b,
                                text: g,
                              }
                            }
                            if (m) {
                              if (n.getStringValue('topics_context_controls_implicit_variation') in bn) {
                                var k,
                                  E = bn[n.getStringValue('topics_context_controls_implicit_variation')]
                                return {
                                  iconSize: a,
                                  contextType: v,
                                  rightControl: w.a.createElement(yn, {
                                    bannerText: o.topicContext && o.topicContext.bannerText,
                                    label: E,
                                    link: p,
                                    linkText: null === (k = o.topicContext) || void 0 === k ? void 0 : k.linkText,
                                    onNotInterestedPress: _,
                                    topic: s,
                                    withRightControl: n.isTrue('topics_context_controls_implicit_context_x_enabled'),
                                  }),
                                  topicData: b,
                                  text: g,
                                  withBottomBorder: !1,
                                  withLeftPadding: !(
                                    n.isTrue('social_context_and_topic_context_refresh_alignment_enabled') || f
                                  ),
                                }
                              }
                              var I = w.a.createElement(kn, { isExpanded: i, onNotInterestedPress: _, topic: s })
                              return i
                                ? {
                                    bottomControl: I,
                                    contextType: c,
                                    iconSize: 'xLarge',
                                    iconStyle: wn.iconStyle,
                                    textColor: 'text',
                                    textSize: 'headline1',
                                    text: o.text,
                                    topicData: void 0,
                                    withBottomBorder: !0,
                                    withLeftPadding: l,
                                  }
                                : {
                                    contextType: c,
                                    iconSize: a,
                                    iconStyle: wn.iconStyle,
                                    rightControl: I,
                                    topicData: b,
                                    text: o.text,
                                    withBottomBorder: !0,
                                    withLeftPadding: l,
                                  }
                            }
                            return { contextType: c, iconSize: a, text: o.text, withLeftPadding: l }
                          })({
                            featureSwitches: d,
                            iconSize: k.iconSize,
                            injectedFeedbackItem: r,
                            isExpanded: i,
                            socialContext: c,
                            topic: u,
                            withLeftPadding: k.withLeftPadding,
                          })
                        : k
                  return w.a.createElement(
                    ve.a,
                    o()({}, E, {
                      link: y,
                      nativeID: t,
                      onClick: h === _e.a.Topic ? this._handleSocialContextClick : void 0,
                      retweetData: { name: v, screenName: _, isSelfRetweet: m },
                      style: Dn.socialContext,
                      testID: ye,
                      weight: 'bold',
                    }),
                  )
                },
              },
              {
                key: '_renderReplyContext',
                value: function (e) {
                  var t,
                    n = e.nativeID,
                    a = this.props,
                    r = a.conversationPosition,
                    i = a.conversationTreeMetadata,
                    o = a.isFocal,
                    s = a.onReplyContextClick,
                    l = a.replyContext,
                    c = a.tweet,
                    u = Kt.a.getOriginalTweet(c),
                    d = u.self_thread
                  return this._shouldShowSelfThread() ||
                    l !== ln.a.ReplyContextTypes.Isolated ||
                    !u.in_reply_to_status_id_str ||
                    (i && !o) ||
                    (d && r && !r.isStart) ||
                    (d && o)
                    ? null
                    : w.a.createElement(ln.a, {
                        displayTextRange: u.display_text_range,
                        inReplyToName: u.in_reply_to_name,
                        inReplyToScreenName: u.in_reply_to_screen_name,
                        inReplyToStatusIdStr: u.in_reply_to_status_id_str,
                        inReplyToUserIdStr: u.in_reply_to_user_id_str,
                        nativeID: n,
                        onClick: s,
                        style: [Dn.replyContext, o && Dn.replyContextBig],
                        tweetPermalink: u.permalink,
                        unmentionedUserIds: u.unmentioned_user_ids,
                        userMentionsEntities: null === (t = u.entities) || void 0 === t ? void 0 : t.user_mentions,
                      })
                },
              },
              {
                key: '_renderReaderModeButton',
                value: function () {
                  var e = this.props,
                    t = e.readerModeAvailable,
                    n = e.tweet
                  return t
                    ? w.a.createElement(
                        I.a,
                        { style: Dn.actionBarWithInlineReply },
                        w.a.createElement(se.a, { focalTweet: n, isExpanded: !0, readerModeAvailable: !!t }),
                      )
                    : null
                },
              },
              {
                key: '_renderTweetActions',
                value: function (e) {
                  var t = e.actionSize,
                    n = e.displayStyle,
                    a = e.nativeID,
                    r = e.style,
                    i = e.withAnalyticsAction,
                    o = e.withCount,
                    s = this.props,
                    l = s.allowDownvote,
                    c = s.bookmarkFolderId,
                    u = s.contextTweet,
                    d = s.enableKeyboardShortcuts,
                    p = s.forwardPivotInfo,
                    h = s.onLikeSuccess,
                    m = s.onReplyPress,
                    f = s.promotedContent,
                    v = s.tweet,
                    _ = s.withActionsDisabled,
                    b = s.withRemoveFromBookmarks
                  return this.props.withActions
                    ? w.a.createElement(Je.a, {
                        actionSize: t,
                        allowDownvote: l,
                        bookmarkFolderId: c,
                        displayStyle: n,
                        enableKeyboardShortcuts: d,
                        forwardPivotInfo: v.softIntervention || p,
                        likeActionIconContainerRef: this._iconContainerRef,
                        nativeID: a,
                        onLikeSuccess: h,
                        onReplyPress: m,
                        promotedContent: f,
                        style: r,
                        tweet: u || v,
                        withActionsDisabled: _,
                        withAnalyticsAction: i,
                        withCount: o,
                        withRemoveFromBookmarks: b,
                      })
                    : null
                },
              },
              {
                key: '_renderAvatar',
                value: function (e) {
                  var t = this.props,
                    n = t.onAvatarClick,
                    a = t.onScreenNameClick,
                    r = t.promotedContent,
                    i = t.tweet,
                    o = t.withAvatarLink,
                    s = t.withUserAvatar,
                    l = t.withUserHoverCard,
                    c = t.withUserPresence,
                    u = Kt.a.getOriginalTweet(i).user,
                    d = Kt.a.getOriginalTweet(i).user.id_str
                  return s
                    ? w.a.createElement(Gt, {
                        avatarRef: this._defaultInlinePromptRef,
                        nativeID: e,
                        onClick: n,
                        onHoverCardScreenNameClick: a,
                        promotedContent: r,
                        screenName: u.screen_name,
                        uri: u.profile_image_url_https,
                        userId: d,
                        withHoverCard: l && !u.blocking,
                        withLink: o,
                        withNftAvatar: u.has_nft_avatar,
                        withUserPresence: c,
                      })
                    : null
                },
              },
              {
                key: '_renderTombstoneHWTweet',
                value: function (e) {
                  var t = e.actionLink,
                    n = e.actionText,
                    a = e.children,
                    r = e.style,
                    i = this.props,
                    o = i.conversationTreeMetadata,
                    s = i.onClick
                  return w.a.createElement(
                    I.a,
                    { style: r },
                    w.a.createElement(
                      ne.a,
                      { actionLink: t, actionText: n, conversationTreeMetadata: o, inline: !0, onClick: s },
                      a,
                    ),
                  )
                },
              },
              {
                key: '_renderTombstone',
                value: function (e) {
                  var t = this.props,
                    n = t.conversationTreeMetadata,
                    a = t.isFocal,
                    r = t.onClick,
                    i = t.tweet,
                    o = Kt.a.getOriginalTweet(i),
                    s = e.richText
                  return o && e && s
                    ? w.a.createElement(
                        I.a,
                        { style: Dn.spacingVertical },
                        w.a.createElement(
                          ne.a,
                          {
                            actionLink: a ? void 0 : o.permalink,
                            actionText: a ? void 0 : Sn,
                            conversationTreeMetadata: n,
                            inline: !0,
                            onClick: a ? void 0 : r,
                          },
                          w.a.createElement(C.a, { entities: s.entities, rtl: s.rtl, text: s.text }),
                        ),
                      )
                    : null
                },
              },
              {
                key: '_hasPhoto',
                value: function () {
                  var e = this.props.tweet,
                    t = Kt.a.getOriginalTweet(e),
                    n = t.extended_entities && t.extended_entities.media
                  return (
                    !!(n && n.length > 0) &&
                    n.some(function (e) {
                      return 'photo' === e.type
                    })
                  )
                },
              },
              {
                key: '_quoteTweetHasPhoto',
                value: function () {
                  var e = this.props.tweet,
                    t = Kt.a.getOriginalTweet(e)
                  return !!(
                    t.quoted_status &&
                    t.quoted_status.entities &&
                    t.quoted_status.entities.media &&
                    t.quoted_status.entities.media.length > 0 &&
                    t.quoted_status.entities.media.some(function (e) {
                      return 'photo' === e.type
                    })
                  )
                },
              },
              {
                key: '_renderRichContent',
                value: function (e) {
                  var t = e.nativeID,
                    n = e.withRoundMediaCorners,
                    a = this.context.featureSwitches,
                    r = this.props.withActionsDisabled,
                    i = this.props,
                    o = i.enableKeyboardShortcuts,
                    s = i.forwardPivotInfo,
                    l = i.inlineCalloutInfo,
                    c = i.innerForwardPivotInfo,
                    u = i.isFocal,
                    d = i.linkableQuotedTweet,
                    p = i.onCardLinkClick,
                    h = i.onMediaClick,
                    m = i.onQuoteTweetClick,
                    f = i.preventVideoPlayback,
                    v = i.promotedContent,
                    _ = i.quoteTweetSocialContextProps,
                    b = i.quotedTweetTombstoneInfo,
                    g = i.tweet,
                    y = i.withCardLinks,
                    k = i.withInlineMedia,
                    C = i.withUserHoverCard,
                    E = u ? 'DETAIL' : 'TIMELINE',
                    I = (this._hasPhoto() || this._quoteTweetHasPhoto()) && !!qt.b.isDesktopOS() && !u,
                    x = this.context.featureSwitches.isTrue('responsive_web_reactions_enabled'),
                    S = Kt.a.getOriginalTweet(g)
                  return (
                    (r = r || Object($e.b)(a, S, $e.a.VoteOnPoll)),
                    w.a.createElement(
                      w.a.Fragment,
                      null,
                      w.a.createElement(cn.a, {
                        cardCacheLocationKey: E,
                        displayMediaMetadata: u,
                        enableKeyboardShortcuts: o,
                        forwardPivotInfo: g.softIntervention || s,
                        inlineCalloutInfo: l,
                        innerForwardPivotInfo: c,
                        isMediaMaxHeightEnabled: I,
                        loggedInUserId: this.context.loggedInUserId,
                        mediaAltTranslations: this.state.mediaAltTranslations,
                        mediaCacheLocationKey: E,
                        nativeID: t,
                        onCardLinkClick: p,
                        onMediaClick: h,
                        onQuoteTweetClick: m,
                        preventVideoPlayback: f,
                        promotedContent: v,
                        quoteTweetSingleImageMinAspectRatio: xn,
                        quoteTweetSocialContextProps: _,
                        quotedTweetTombstoneInfo: b,
                        renderQuoteTweetTombstone: function (e) {
                          return w.a.createElement(oe, e)
                        },
                        singleImageMaxAspectRatio: In,
                        singleImageMinAspectRatio: u ? 0.1 : xn,
                        tweet: g,
                        withActionsDisabled: r,
                        withAltTextBadge: this.context.featureSwitches.isTrue('responsive_web_alt_text_badge_enabled'),
                        withCardLinks: y,
                        withCenterCrop: !0,
                        withCondensedQuoteTweet: !u && Kt.a.hasMedia(S, !k),
                        withMediaTagsIcon: u,
                        withQuoteTweetHeaderLinks: !G.canUseDOM,
                        withQuoteTweetLink: d,
                        withQuoteTweetMedia: k,
                        withReactions: x,
                        withRoundMediaCorners: n,
                        withTweetMedia: k,
                        withUserHoverCard: C,
                      }),
                      this._renderBirdwatchPivot(),
                    )
                  )
                },
              },
            ]),
            n
          )
        })(w.a.Component)
      y()(On, 'contextType', O.a),
        y()(On, 'displayName', 'Tweet'),
        y()(On, 'defaultProps', {
          displayBlocked: !1,
          isFocal: !1,
          linkify: !0,
          onBirdwatchNotesIconClick: En.a,
          onModeratedIconClick: En.a,
          onModeratedIconShown: En.a,
          replyContext: ln.a.ReplyContextTypes.Isolated,
          withActions: !1,
          withAvatarLink: !0,
          withBirdwatchPivots: !0,
          withCardLinks: !1,
          withInlineMedia: !0,
          withQuotedTweetLinks: !1,
          withRemoveFromBookmarks: !1,
          withSocialContext: !1,
          withTimestampLink: !0,
          withUserHoverCard: !0,
          withUserAvatar: !0,
          withUserName: !0,
          withTimestamp: !0,
        })
      var Dn = A.a.create(function (e) {
        return {
          replyContextBig: { marginTop: e.spaces.space12, marginBottom: 0 },
          replyContext: { marginBottom: e.spaces.space2 },
          selfThreadCTA: { marginHorizontal: 'calc(-1 * '.concat(e.componentDimensions.gutterHorizontal, ')') },
          innerRow: { alignItems: 'baseline', flexDirection: 'row', flexShrink: 1 },
          actionBar: { marginTop: e.spaces.space12 },
          actionBarFocalTweet: {
            borderTopColor: e.colors.borderColor,
            borderTopStyle: 'solid',
            borderTopWidth: e.borderWidths.small,
            height: e.spaces.space48,
          },
          actionsBarNarrow: { minWidth: 250, marginRight: 'auto' },
          actionBarWithInlineReply: {
            borderBottomColor: e.colors.borderColor,
            borderBottomStyle: 'solid',
            borderBottomWidth: e.borderWidths.small,
          },
          promoteButton: { marginTop: e.spaces.space12 },
          tweetActivityPromoteButton: { marginVertical: e.spaces.space8 },
          promotedIndicator: { marginTop: e.spaces.space12 },
          promotedIndicatorBelowHeader: { marginBottom: e.spaces.space8 },
          promotedIndicatorBelowHeaderWithInteractiveHighlights: { marginBottom: e.spaces.space4 },
          promotedDetails: { marginTop: e.spaces.space4 },
          promotionStatus: { marginTop: e.spaces.space12 },
          socialContext: { marginBottom: e.spaces.space4, marginTop: '-'.concat(e.spaces.space4) },
          spacingVertical: { marginVertical: e.spaces.space4 },
          followTopicButton: { justifyContent: 'center' },
          expandedTweetText: { marginTop: e.spaces.space12 },
          footerContainer: { marginVertical: e.spaces.space16 },
          footerContent: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
          footerIcons: { flexDirection: 'row' },
          interactiveHighlightSpacer: { marginTop: e.spaces.space8 },
          readerBottomBar: {
            borderBottomColor: e.colors.nestedBorderColor,
            borderBottomStyle: 'solid',
            borderBottomWidth: e.borderWidths.small,
            marginTop: e.spaces.space20,
            width: e.spaces.space32,
          },
          timeLocSource: { marginRight: e.spaces.space12 },
          topicFollowPrompt: { marginBottom: e.spaces.space12, marginTop: '-'.concat(e.spaces.space8) },
        }
      })
      t.b = Object(X.a)(On)
    },
    EeFI: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        i = n('VrFO'),
        o = n.n(i),
        s = n('Y9Ll'),
        l = n.n(s),
        c = n('5Yy7'),
        u = n.n(c),
        d = n('2VqO'),
        p = n.n(d),
        h = n('ERkP'),
        m = n.n(h),
        f = n('3XMw'),
        v = n.n(f),
        _ = n('MWbm'),
        b = n('Qwev'),
        g = n('21U8'),
        y = n('rHpw'),
        k = n('1auM'),
        w = n('eYns'),
        C = v.a.gff1f69e,
        E = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n(e) {
            var a
            return o()(this, n), ((a = t.call(this, e)).state = { orientedImage: null }), a
          }
          return (
            l()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this,
                    t = (this.props.media || {}).originalMediaFile,
                    n = void 0 === t ? {} : t
                  n &&
                    n instanceof k.a &&
                    Object(w.b)(n).then(function (t) {
                      return new k.a(t).withDimensionsAndOrientation().then(function (t) {
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
                    : m.a.createElement(b.a, { accessibilityLabel: C, style: I.activityIndicator })
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
                    i = e.withAspectRatioOptions,
                    o = e.withZoomControl,
                    s = this.state.orientedImage,
                    l = r || {},
                    c = l.cropData,
                    u = l.originalMediaFile,
                    d = void 0 === u ? {} : u
                  return s
                    ? m.a.createElement(
                        _.a,
                        { style: I.cropper },
                        m.a.createElement(g.a, {
                          circle: this.props.circle,
                          defaultAspectRatio: (a && a.aspectRatio) || (c && c.aspectRatio) || n,
                          defaultCropData: a || c,
                          image: { src: s.url, width: d.width, height: d.height },
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
        })(m.a.Component),
        I = y.a.create(function (e) {
          return {
            cropper: { backgroundColor: e.colors.navigationBackground, flexGrow: 1 },
            activityIndicator: { flexGrow: 1 },
          }
        })
      t.a = m.a.forwardRef(function (e, t) {
        return m.a.createElement(E, r()({}, e, { cropperRef: t }))
      })
    },
    'Ey+e': function (e, t, n) {
      'use strict'
      var a = n('KEM+'),
        r = n.n(a),
        i = n('yiKp'),
        o = n.n(i),
        s = n('ddV6'),
        l = n.n(s),
        c = (n('2G9S'), n('jwue'), n('7x/C'), n('+oxZ'), n('z84I'), n('ho0z'), n('ERkP'), n('AOWc')),
        u = n('6/RC'),
        d = n('E6XO'),
        p = n('sXY3'),
        h = n('tn7R'),
        m = n('+d3d'),
        f = n('oECP'),
        v = n('fs1G'),
        _ = {},
        b = 0,
        g = { mount: ['didMount', 'willMount'], update: ['didUpdate', 'willUpdate'] },
        y = function () {
          Object(p.a)(_).forEach(function (e, t) {
            var n = l()(e, 2),
              a = n[0],
              r = n[1],
              i = Object(h.a)(r),
              o = i.length
            i.forEach(function (e) {
              Object(p.a)(g).map(function (t) {
                var n = l()(t, 2),
                  r = n[0],
                  i = l()(n[1], 2),
                  s = i[0],
                  c = i[1]
                ;(function (e) {
                  return 1 === e || Math.random() <= 0.01
                })(o) &&
                  s in e &&
                  c in e &&
                  Object(d.c)(
                    (function (e, t) {
                      return 'lifecycle:'.concat(e.toLowerCase(), ':').concat(t)
                    })(a, r),
                    { duration_ms: e[s] - e[c] },
                  )
              })
            })
          }),
            Object(d.a)(),
            (_ = {})
        },
        k = Object(m.a)(y, 2e4) || y,
        w = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = e.constructor.displayName
          Object(c.a)(n, ''.concat(e.constructor.name, ' component has "displayName" set.'))
          var a = e.__lifecycleIdentifier
          return (
            !a && t && ((b += 1), (a = e.__lifecycleIdentifier = b)),
            (_[n] && _[n][a]) || (_[n] = o()(o()({}, _[n]), {}, r()({}, a, {}))),
            [n, a]
          )
        },
        C = function (e, t, n, a) {
          _[e][t][n] = a
        }
      t.a = u.canUseDOM
        ? function (e) {
            var t = {
              UNSAFE_componentWillMount: e.prototype.UNSAFE_componentWillMount || v.a,
              componentDidMount: e.prototype.componentDidMount || v.a,
              UNSAFE_componentWillUpdate: e.prototype.UNSAFE_componentWillUpdate || v.a,
              componentDidUpdate: e.prototype.componentDidUpdate || v.a,
              componentWillUnmount: e.prototype.componentWillUnmount || v.a,
            }
            return (
              (e.prototype.UNSAFE_componentWillMount = function () {
                for (
                  var e = w(this, !0), n = l()(e, 2), a = n[0], r = n[1], i = arguments.length, o = new Array(i), s = 0;
                  s < i;
                  s++
                )
                  o[s] = arguments[s]
                t.UNSAFE_componentWillMount.apply(this, o), C(a, r, 'willMount', Date.now())
              }),
              (e.prototype.componentDidMount = function () {
                for (
                  var e = w(this), n = l()(e, 2), a = n[0], r = n[1], i = arguments.length, o = new Array(i), s = 0;
                  s < i;
                  s++
                )
                  o[s] = arguments[s]
                t.componentDidMount.apply(this, o), C(a, r, 'didMount', Date.now()), k()
              }),
              (e.prototype.UNSAFE_componentWillUpdate = function () {
                for (
                  var e = w(this, !0), n = l()(e, 2), a = n[0], r = n[1], i = arguments.length, o = new Array(i), s = 0;
                  s < i;
                  s++
                )
                  o[s] = arguments[s]
                t.UNSAFE_componentWillUpdate.apply(this, o), C(a, r, 'willUpdate', Date.now())
              }),
              (e.prototype.componentDidUpdate = function () {
                for (
                  var e = w(this), n = l()(e, 2), a = n[0], r = n[1], i = arguments.length, o = new Array(i), s = 0;
                  s < i;
                  s++
                )
                  o[s] = arguments[s]
                t.componentDidUpdate.apply(this, o), C(a, r, 'didUpdate', Date.now()), k()
              }),
              (e.prototype.componentWillUnmount = function () {
                for (var e = arguments.length, n = new Array(e), a = 0; a < e; a++) n[a] = arguments[a]
                t.componentWillUnmount.apply(this, n), k()
              }),
              e
            )
          }
        : f.a
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
    'IMA+': function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        i = n('VrFO'),
        o = n.n(i),
        s = n('Y9Ll'),
        l = n.n(s),
        c = n('1Pcy'),
        u = n.n(c),
        d = n('5Yy7'),
        p = n.n(d),
        h = n('2VqO'),
        m = n.n(h),
        f = n('KEM+'),
        v = n.n(f),
        _ = (n('yH/f'), n('2G9S'), n('ho0z'), n('hBvt'), n('vrRf'), n('1t7P'), n('jQ/y'), n('SV7d')),
        b = n('ERkP'),
        g = n.n(b),
        y = n('TIdA'),
        k = n('t62R'),
        w = n('5mJL'),
        C = n('DNho'),
        E = n('nBUg'),
        I = n('qjak'),
        x = n('ir4X'),
        S = n('htQn'),
        T = n('e5HP'),
        P = n('FBXD'),
        L = n('Nqmc'),
        A = n('rHpw'),
        O = n('jhWN'),
        D = n('1I0O'),
        F = n('pBrB'),
        R = n('jV+4'),
        N = n('MWbm'),
        B = Object.freeze({ TWEET: 'tweets', USER: 'users' }),
        M = Object.freeze({
          UserCompact: 'UserCompact',
          UserConcise: 'UserConcise',
          UserDetailed: 'UserDetailed',
          ExperimentalUserTypeahead: 'ExperimentalUserTypeahead',
        }),
        V = y.a.createLayoutCache(),
        U = { viewType: 'user_cell' },
        j = (function (e) {
          p()(n, e)
          var t = m()(n)
          function n() {
            var e
            o()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              v()(u()(e), '_renderUserName', function () {
                var t = e.props,
                  n = t.badgeContext,
                  a = t.disabledMessage,
                  r = t.displayNameLabel,
                  i = t.isBlocking,
                  o = t.isDisabled,
                  s = t.isFollowedBy,
                  l = t.isProtected,
                  c = t.isVerified,
                  u = t.name,
                  d = t.onScreenNameClick,
                  p = t.promotedContent,
                  h = t.promotedItemType,
                  m = t.screenName,
                  f = t.screenNameSuffix,
                  v = t.translatorType,
                  _ = t.withFollowsYou,
                  b = t.withLink,
                  y = g.a.createElement(R.a, {
                    badgeContext: n,
                    displayNameLabel: r,
                    isProtected: l,
                    isVerified: c,
                    name: u,
                    onLinkClick: d,
                    promotedContent: h === B.TWEET ? p : void 0,
                    screenName: m,
                    screenNameSuffix: f,
                    translatorType: v,
                    withFollowsYou: _ && s,
                    withHoverCard: !i && !o && b,
                    withLink: !o && b,
                    withScreenName: !a,
                    withStackedLayout: !0,
                  })
                return a
                  ? g.a.createElement(
                      N.a,
                      { style: z.disabledMessageContainer },
                      y,
                      g.a.createElement(k.b, { color: 'gray700' }, a),
                    )
                  : y
              }),
              v()(u()(e), '_renderSocialContext', function () {
                var t = e.props,
                  n = t.avatarSize,
                  a = t.displayMode,
                  r = t.socialContext
                return r
                  ? g.a.createElement(E.b.UseProps, null, function (e) {
                      return g.a.createElement(L.a, {
                        avatarSize: n,
                        contextType: r.contextType,
                        iconSize: 'large',
                        link: r.link,
                        style: z.socialContext,
                        text: r.text,
                        weight: 'bold',
                        withLeftPadding: !e.socialContextRefreshEnabled() && a !== M.ExperimentalUserTypeahead,
                      })
                    })
                  : null
              }),
              v()(u()(e), '_renderUserTypeaheadSocialContext', function () {
                var t = e.props.socialContext,
                  n =
                    (t && Object(I.a)({ link: t.link, text: t.text, iconSize: 'small', contextType: t.contextType })) ||
                    {},
                  a = n.Icon,
                  r = n.text
                return t
                  ? g.a.createElement(
                      N.a,
                      { style: z.userTypeaheadSocialContext },
                      g.a.createElement(N.a, { style: z.userTypeaheadSocialContextIcon }, a),
                      g.a.createElement(
                        k.b,
                        { color: 'gray700', numberOfLines: 1, style: z.userTypeaheadSocialContextText },
                        r,
                      ),
                    )
                  : null
              }),
              v()(u()(e), '_renderHighlightedUserLabel', function () {
                var t = e.props.highlightedLabel
                return t ? g.a.createElement(x.a, { label: t }) : null
              }),
              v()(u()(e), '_isEligibleForBio', function () {
                var t = e.props.displayMode
                return -1 !== [M.UserDetailed, M.UserConcise].indexOf(t)
              }),
              v()(u()(e), '_handleKeyPress', function (t) {
                t.defaultPrevented || 'Enter' !== t.key || e._handleClick(t)
              }),
              v()(
                u()(e),
                '_handleClick',
                Object(P.a)(function (t) {
                  var n = e.props.onCellClick
                  t.preventDefault(), n && n()
                }),
              ),
              e
            )
          }
          return (
            l()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.accessibilityLabel,
                    n = e.accessibilityState,
                    a = e.avatarDecoration,
                    i = e.avatarSize,
                    o = e.avatarUri,
                    s = e.bottomControl,
                    l = e.decoration,
                    c = e.displayMode,
                    u = e.isBlocking,
                    d = e.isDisabled,
                    p = e.onAvatarClick,
                    h = e.onCellClick,
                    m = e.onScreenNameClick,
                    f = e.presenceIndicator,
                    v = e.promotedContent,
                    b = e.promotedItemType,
                    y = e.screenName,
                    k = e.style,
                    E = e.testID,
                    I = e.userId,
                    x = e.withDarkerInteractiveBackground,
                    P = e.withInteractiveStyling,
                    L = e.withLink,
                    A = e.withUsernameCenterAligned,
                    F = L && !u,
                    R = c === M.UserCompact || A,
                    j = c === M.ExperimentalUserTypeahead,
                    H =
                      v && b === B.USER && 'earned' !== (v.disclosure_type && v.disclosure_type.toLowerCase())
                        ? g.a.createElement(T.a, { contentAuthorId: I, promotedContent: v, style: z.promotedIndicator })
                        : null,
                    W = {
                      accessibilityHidden: !0,
                      decoration: a,
                      focusable: !1,
                      imageLayoutCache: V,
                      onClick: p,
                      onHoverCardScreenNameClick: m,
                      promotedContent: v,
                      screenName: y,
                      style: z.avatar,
                      uri: o,
                      withHoverCard: F,
                      withLink: L,
                    },
                    G = g.a.createElement(C.a.Consumer, null, function (e) {
                      var t = e.avatarSize
                      return f
                        ? g.a.createElement(D.a, r()({}, W, f, { size: t }))
                        : g.a.createElement(O.a, r()({ size: t }, W))
                    }),
                    q = n && 'boolean' == typeof n.checked,
                    K = void 0 !== h,
                    Y = (q ? 'radio' : K && 'button') || 'listitem',
                    X = this._renderUserName(),
                    Q = this._renderHighlightedUserLabel(),
                    J = this._renderBio(),
                    Z = Q || J || H || s,
                    $ = g.a.createElement(
                      g.a.Fragment,
                      null,
                      Q,
                      J,
                      H,
                      s ? g.a.createElement(N.a, { style: z.bottomControl }, s) : null,
                    )
                  return g.a.createElement(
                    _.a,
                    { behavioralEventContext: U },
                    g.a.createElement(
                      S.a,
                      {
                        accessibilityLabel: t,
                        accessibilityRole: Y,
                        accessibilityState: n,
                        disabled: !!d,
                        focusable: q || K,
                        onClick: this._handleClick,
                        onKeyPress: this._handleKeyPress,
                        pointerEvents: d ? 'none' : void 0,
                        style: [z.root, k],
                        testID: E,
                        withDarkerInteractiveBackground: x,
                        withInteractiveStyling: null != P ? P : !!h,
                      },
                      j ? null : this._renderSocialContext(),
                      g.a.createElement(
                        w.a,
                        {
                          avatarCell: G,
                          avatarCellStyle: [z.avatarColumn, R && z.bodyColumnCentered],
                          avatarSize: j ? 'xxxLarge' : i,
                          cellStyle: [z.bodyColumn, R && z.bodyColumnCentered],
                        },
                        g.a.createElement(N.a, { style: z.body }, X, l),
                        R ? null : $,
                        j ? this._renderUserTypeaheadSocialContext() : null,
                      ),
                      Z && R
                        ? g.a.createElement(
                            w.a,
                            { avatarCell: null, avatarCellStyle: z.avatarColumn, cellStyle: z.bodyColumn },
                            $,
                          )
                        : null,
                    ),
                  )
                },
              },
              {
                key: '_renderBio',
                value: function () {
                  var e = this.props,
                    t = e.description,
                    n = e.displayMode,
                    a = e.entities,
                    r = e.userId,
                    i = e.withheldDescription,
                    o = e.withheldEntities
                  return a && t && this._isEligibleForBio()
                    ? g.a.createElement(F.a, {
                        description: t,
                        entities: a,
                        isConcise: n === M.UserConcise,
                        style: z.bio,
                        userId: r,
                        withheldDescription: i,
                        withheldEntities: o,
                      })
                    : null
                },
              },
            ]),
            n
          )
        })(g.a.PureComponent)
      v()(j, 'defaultProps', { testID: 'UserCell', withLink: !0 })
      var z = A.a.create(function (e) {
        return {
          root: {
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.componentDimensions.gutterVertical,
          },
          avatarColumn: { justifyContent: 'flex-start' },
          bodyColumn: { flexGrow: 1 },
          bodyColumnCentered: { justifyContent: 'center' },
          avatar: { display: 'block', width: '100%' },
          bio: { paddingTop: e.spaces.space4, whiteSpace: 'normal' },
          socialContext: { marginBottom: e.spaces.space4 },
          userTypeaheadSocialContext: { alignItems: 'center', flexDirection: 'row', textColor: e.colors.gray700 },
          userTypeaheadSocialContextIcon: { flexShrink: 0 },
          userTypeaheadSocialContextText: { paddingLeft: e.spaces.space2 },
          body: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
          promotedIndicator: { margin: 0, paddingTop: e.spaces.space4, paddingBottom: 0, paddingHorizontal: 0 },
          bottomControl: { paddingTop: e.spaces.space4 },
          disabledMessageContainer: { flexShrink: 1 },
        }
      })
      t.a = j
    },
    JUsM: function (e, t, n) {
      'use strict'
      var a = n('ddV6'),
        r = n.n(a),
        i = (n('uFXj'), n('2G9S'), n('ERkP')),
        o = n.n(i),
        s = n('t62R'),
        l = n('rHpw'),
        c = n('shC7'),
        u = n('MWbm'),
        d = l.a.create(function (e) {
          return {
            root: {
              flexDirection: 'row',
              backgroundColor: e.colors.navigationBackground,
              borderStyle: 'solid',
              borderWidth: e.borderWidths.small,
              borderRadius: e.borderRadii.large,
              borderColor: e.colors.gray50,
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
              justifyContent: 'space-between',
            },
            containerDown: { marginTop: e.spaces.space12 },
            containerUp: { marginTop: e.spaces.space20 },
            text: { flexShrink: 1, alignSelf: 'center', alignItems: 'flex-start' },
            actionsContainer: { flexDirection: 'row', alignItems: 'center', marginLeft: e.spaces.space12 },
            arrowContainer: { position: 'absolute', display: 'flex', width: '100%', alignItems: 'center' },
            arrowDirectionUp: { top: 'calc(-'.concat(e.spaces.space8, ' + ').concat(e.spaces.space1, ')') },
            arrowDirectionDown: { bottom: 'calc(-'.concat(e.spaces.space8, ' + ').concat(e.spaces.space1, ')') },
            arrow: {
              borderStyle: 'solid',
              borderTopWidth: 0,
              borderRightWidth: e.spaces.space1,
              borderBottomWidth: e.spaces.space1,
              borderLeftWidth: 0,
              borderColor: e.colors.gray50,
              width: e.spaces.space12,
              height: e.spaces.space12,
              backgroundColor: e.colors.navigationBackground,
            },
          }
        })
      t.a = function (e) {
        var t = e.containerRef,
          n = e.primaryAction,
          a = e.secondaryAction,
          i = e.text,
          l = o.a.useState(void 0),
          p = r()(l, 2),
          h = p[0],
          m = p[1],
          f = c.a.getConstants().isRTL,
          v = o.a.useRef(0),
          _ = o.a.useRef(0),
          b = (function () {
            if (null != t && t.current && h) {
              var e = t.current.getBoundingClientRect(),
                n = e.left,
                a = e.top,
                r = e.width
              v.current = a
              var i = n + r / 2 - h
              return { left: f ? void 0 : i, right: f ? i : void 0 }
            }
          })(),
          g = _.current < v.current,
          y = g ? [d.arrowDirectionDown] : [d.arrowDirectionUp],
          k = g
            ? f
              ? { transform: 'rotate(-45deg)' }
              : { transform: 'rotate(45deg)' }
            : f
            ? { transform: 'rotate(135deg)' }
            : { transform: 'rotate(-135deg)' },
          w = g ? [d.containerDown] : [d.containerUp]
        return o.a.createElement(
          u.a,
          {
            accessibilityRole: 'text',
            onLayout: function (e) {
              var t = e.nativeEvent.layout,
                n = t.left,
                a = t.top,
                r = t.width
              ;(_.current = a), m(n + r / 2)
            },
            style: [d.root, w],
          },
          null != t && t.current
            ? o.a.createElement(
                u.a,
                { style: [y, d.arrowContainer, b] },
                o.a.createElement(u.a, { style: [d.arrow, k] }),
              )
            : null,
          o.a.createElement(s.b, { style: d.text }, i),
          o.a.createElement(u.a, { style: d.actionsContainer }, n, a),
        )
      }
    },
    K2mq: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = n('97Jx'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        s = n('9D1O'),
        l = n('gPQO')
      t.default = function (e) {
        return o.a.createElement(l.a, r()({}, e, { flowName: 'signup', ocfModule: s.i }))
      }
    },
    KNZn: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('VrFO'),
        o = n.n(i),
        s = n('Y9Ll'),
        l = n.n(s),
        c = n('1Pcy'),
        u = n.n(c),
        d = n('5Yy7'),
        p = n.n(d),
        h = n('2VqO'),
        m = n.n(h),
        f = n('KEM+'),
        v = n.n(f),
        _ = (n('TJCb'), n('7x/C'), n('DZ+c'), n('vrRf'), n('uFXj'), n('ERkP')),
        b = n.n(_),
        g = n('RqPI'),
        y = n('rxPX'),
        k = Object(y.a)().propsFromState(function () {
          return { language: g.o }
        }),
        w = n('3XMw'),
        C = n.n(w),
        E = n('fs1G'),
        I = n('rHpw'),
        x = n('BLtI'),
        S = n('MWbm'),
        T = 'Twitter',
        P = C.a.ea1c87a5({ mention: T }),
        L = {
          text: P,
          created_at: new Date(Date.now() - 6e5).toString(),
          id: 20,
          id_str: '20',
          display_text_range: [0, P.length - 1],
          entities: {
            user_mentions: [
              {
                id_str: '783214',
                name: 'Twitter',
                screen_name: 'Twitter',
                text: T,
                indices: [P.indexOf('@'), P.indexOf('@') + T.length + 1],
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
          p()(n, e)
          var t = m()(n)
          function n(e) {
            var a
            o()(this, n),
              (a = t.call(this, e)),
              v()(u()(a), '_handleTweetAction', function (e) {
                e && e.preventDefault && e.preventDefault()
              })
            var i = a.props,
              s = i.language,
              l = i.tweet
            return (a._tweet = r()(r()(r()({}, L), l), {}, { lang: s || 'en' })), a
          }
          return (
            l()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.withTweetBorder
                  return b.a.createElement(
                    S.a,
                    { accessibilityHidden: !0, style: e && O.tweetBorder },
                    b.a.createElement(x.b, {
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
                    b.a.createElement(S.a, { style: I.a.absoluteFill }),
                  )
                },
              },
            ]),
            n
          )
        })(b.a.Component)
      v()(A, 'defaultProps', { tweet: L, withTweetBorder: !1 })
      var O = I.a.create(function (e) {
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
        D = k(A)
      t.a = D
    },
    LCtV: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return S
      })
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        s = n('1Pcy'),
        l = n.n(s),
        c = n('5Yy7'),
        u = n.n(c),
        d = n('2VqO'),
        p = n.n(d),
        h = n('KEM+'),
        m = n.n(h),
        f = (n('yH/f'), n('2G9S'), n('uFXj'), n('ERkP')),
        v = n.n(f),
        _ = n('3XMw'),
        b = n.n(_),
        g = n('mN6z'),
        y = n('Qwev'),
        k = n('rHpw'),
        w = n('1auM'),
        C = n('ude7'),
        E = n('U+bB'),
        I = n('MWbm'),
        x = b.a.gff1f69e,
        S = Object.freeze({ INFINITE: 'infinite', MEDIUM: 'medium', NONE: 'none' }),
        T = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              m()(l()(e), 'state', { imagePreviewUrl: null }),
              m()(l()(e), '_getImageSrc', function () {
                var t = e.props,
                  n = t.enableGif,
                  a = t.mediaItem,
                  r = e.state.imagePreviewUrl
                if (a && a.mediaFile) return a.mediaFile.isGif && !n ? r : a.mediaFile.url
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'componentDidUpdate',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.enableGif,
                    a = t.mediaItem.mediaFile,
                    r = this.state.imagePreviewUrl
                  n ||
                    r ||
                    (a instanceof w.a &&
                      a.isGif &&
                      Object(C.a)(a).then(function (t) {
                        e.setState({ imagePreviewUrl: t })
                      }))
                },
              },
              {
                key: 'shouldComponentUpdate',
                value: function (e, t) {
                  return !Object(g.a)(e, this.props) || !Object(g.a)(t, this.state)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.borderRadius,
                    n = e.enableGif,
                    a = e.mediaItem,
                    r = e.onClick,
                    i = e.resizeMode,
                    o = (this.state || {}).imagePreviewUrl,
                    s = a.mediaFile && a.mediaFile.isGif && !n && !o,
                    l = a.needsProcessing || s,
                    c = [L.root, P[t], l && L.loadingBorder],
                    u = this._getImageSrc()
                  return v.a.createElement(
                    I.a,
                    { onClick: r, style: c },
                    l || !u
                      ? v.a.createElement(y.a, { accessibilityLabel: x, style: L.activityIndicator })
                      : v.a.createElement(E.a, { resizeMode: i, source: u, style: L.image }),
                  )
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      m()(T, 'defaultProps', { borderRadius: S.NONE, enableGif: !0, resizeMode: 'cover' })
      var P = k.a.create(function (e) {
          var t
          return (
            (t = {}),
            m()(t, S.INFINITE, { borderRadius: e.borderRadii.infinite }),
            m()(t, S.MEDIUM, { borderRadius: e.borderRadii.small }),
            m()(t, S.NONE, { borderRadius: e.borderRadii.none }),
            t
          )
        }),
        L = k.a.create(function (e) {
          return {
            root: {
              borderRadius: e.borderRadii.xLarge,
              borderStyle: 'solid',
              borderWidth: e.borderWidths.none,
              borderColor: 'transparent',
              maxWidth: '100%',
              height: '100%',
              overflow: 'hidden',
            },
            image: { display: 'block', height: '100%', width: '100%' },
            loadingBorder: { borderColor: e.colors.gray300 },
            activityIndicator: { height: '100%' },
          }
        })
      t.b = T
    },
    LWCC: function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        s = n('1Pcy'),
        l = n.n(s),
        c = n('5Yy7'),
        u = n.n(c),
        d = n('2VqO'),
        p = n.n(d),
        h = n('KEM+'),
        m = n.n(h),
        f = (n('yH/f'), n('2G9S'), n('ho0z'), n('ERkP')),
        v = n.n(f),
        _ = n('Zejx'),
        b = n('rxPX'),
        g = n('0KEI'),
        y = Object(b.a)()
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(g.createLocalApiErrorHandlerWithContextFactory)('FOLLOW_TOPIC_BUTTON'),
              follow: _.a.follow,
              unfollow: _.a.unfollow,
            }
          })
          .withAnalytics(),
        k = n('CGyZ'),
        w = n('PbbS'),
        C = n('3XMw'),
        E = n.n(C),
        I = n('sUoZ'),
        x = n('Tp1h'),
        S = n('Jkc4'),
        T = n('TnY3'),
        P = Object.freeze({ follow: E.a.i79ab12a, following: E.a.d960b55b, unfollow: E.a.c0f56044 }),
        L = Object.freeze({
          follow: E.a.fcf51fe6,
          following: E.a.e9a90d71,
          unfollow: E.a.bf403715,
          confirmationHeadline: E.a.c9f08e28,
          confirmationSheetText: E.a.abc600f3,
        }),
        A = Object.freeze({
          follow: E.a.cd876e01,
          following: E.a.f2816e02,
          unfollow: E.a.f5b04fbb,
          confirmationHeadline: E.a.c481ae3f,
          confirmationSheetText: E.a.aa3ba123,
        }),
        O = Object.freeze({
          follow: E.a.e0e730b0,
          following: E.a.e0e730b0,
          unfollow: E.a.b1850062,
          confirmationHeadline: E.a.gd3f996f,
          confirmationSheetText: E.a.i36c403c,
        }),
        D = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              m()(l()(e), '_getDisplayMode', function (t) {
                return void 0 === e._getFollowButtonIcon(t) ? 'only-text' : 'icon-text'
              }),
              m()(l()(e), '_getFollowButtonIcon', function (e) {
                switch (e) {
                  case w.a.Favorite:
                  case w.a.Star:
                  case w.a.Interested:
                    return v.a.createElement(I.a, null)
                  case w.a.FollowTopic:
                  case w.a.Default:
                  default:
                    return
                }
              }),
              m()(l()(e), '_getFollowingButtonIcon', function (t) {
                return 'icon-text' === e._getDisplayMode(t) ? v.a.createElement(v.a.Fragment, null) : void 0
              }),
              m()(l()(e), '_getButtonText', function (t) {
                var n = e.props.topic
                switch (t) {
                  case w.a.FollowTopic:
                    return { follow: P.follow, unfollow: P.unfollow, following: P.following }
                  case w.a.Favorite:
                    return {
                      follow: A.follow,
                      unfollow: A.unfollow,
                      following: A.following,
                      confirmationHeadline: A.confirmationHeadline && A.confirmationHeadline({ title: n.name }),
                      confirmationSheetText: A.confirmationSheetText,
                    }
                  case w.a.Star:
                    return {
                      follow: L.follow,
                      unfollow: L.unfollow,
                      following: L.following,
                      confirmationHeadline: L.confirmationHeadline && L.confirmationHeadline({ title: n.name }),
                      confirmationSheetText: L.confirmationSheetText,
                    }
                  case w.a.Interested:
                    return {
                      follow: O.follow,
                      unfollow: O.unfollow,
                      following: O.following,
                      confirmationHeadline: O.confirmationHeadline && O.confirmationHeadline({ title: n.name }),
                      confirmationSheetText: O.confirmationSheetText,
                    }
                  case w.a.Default:
                  default:
                    return
                }
              }),
              m()(l()(e), '_handleOnFollow', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler,
                  a = t.educateOnFollow,
                  r = t.follow,
                  i = t.history,
                  o = t.topic
                r(o.id).catch(n()),
                  e._handleScribe('follow'),
                  a && o && i.push({ pathname: '/i/topics/education', state: { topicName: o.name } })
              }),
              m()(l()(e), '_handleOnUnfollow', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler,
                  a = t.topic
                ;(0, t.unfollow)(a.id).catch(n()), e._handleScribe('unfollow')
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
                    n = t.ariaDescribedBy,
                    a = t.isTransparent,
                    r = t.nativeID,
                    i = t.showRelationshipChangeConfirmation,
                    o = t.size,
                    s = t.style,
                    l = t.textMode,
                    c = t.topic,
                    u = c.following,
                    d = c.name
                  return v.a.createElement(S.a, { customText: d, displayMode: x.a.topic }, function (t) {
                    return v.a.createElement(k.a, {
                      ariaDescribedBy: n,
                      buttonIcons: {
                        followIcon: e._getFollowButtonIcon(l),
                        followingIcon: e._getFollowingButtonIcon(l),
                      },
                      buttonText: e._getButtonText(l),
                      displayMode: e._getDisplayMode(l),
                      isFollowing: u,
                      isTransparent: a,
                      name: d,
                      nativeID: r,
                      onFollow: t(e._handleOnFollow),
                      onUnfollow: t(e._handleOnUnfollow),
                      showRelationshipChangeConfirmation: i,
                      size: o,
                      style: s,
                      type: 'topic',
                      withConfirmationSheetText: u,
                    })
                  })
                },
              },
              {
                key: '_handleScribe',
                value: function (e) {
                  this.props.analytics.scribe({ element: 'topic', action: e })
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      m()(D, 'defaultProps', { size: 'small', textMode: w.a.Default })
      t.a = Object(T.a)(y(D))
    },
    LXAX: function (e, t, n) {
      'use strict'
      n.d(t, 'c', function () {
        return h
      }),
        n.d(t, 'b', function () {
          return m
        }),
        n.d(t, 'a', function () {
          return f
        })
      var a = n('KEM+'),
        r = n.n(a),
        i = n('yiKp'),
        o = n.n(i),
        s = (n('yH/f'), n('oEOe')),
        l = n('Ssj5'),
        c = 'settings/usernames',
        u = 'rweb/settings/usernames/CLEAR_USERNAME_AVAILABILITY',
        d = Object.freeze({
          REQUEST: 'rweb/settings/usernames/FETCH_USERNAMES_REQUEST',
          SUCCESS: 'rweb/settings/usernames/FETCH_USERNAMES_SUCCESS',
          FAILURE: 'rweb/settings/usernames/FETCH_USERNAMES_FAILURE',
        }),
        p = { isLoaded: !1 }
      var h = function (e) {
          return e[c]
        },
        m = function (e) {
          return function (t, n, a) {
            var r = a.api
            return Object(s.b)(t, { params: e, request: r.Settings.usernameAvailable })({
              actionTypes: d,
              context: 'FETCH_SETTINGS_USERNAME_AVAILABLE',
              meta: { username: e.username },
            })
          }
        },
        f = function (e) {
          return { type: u, meta: e }
        }
      l.a.register(
        r()({}, c, function () {
          var e,
            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p,
            n = arguments.length > 1 ? arguments[1] : void 0
          switch (n.type) {
            case d.REQUEST:
              return o()(o()({}, t), {}, { isLoading: !0 })
            case d.FAILURE:
              return o()(o()({}, t), {}, { isLoading: !1 })
            case d.SUCCESS:
              return o()(o()(o()({}, t), n.payload), {}, { username: n.meta.username, isLoading: !1 })
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
          return T
        })
        var a = n('VrFO'),
          r = n.n(a),
          i = n('Y9Ll'),
          o = n.n(i),
          s = n('1Pcy'),
          l = n.n(s),
          c = n('5Yy7'),
          u = n.n(c),
          d = n('2VqO'),
          p = n.n(d),
          h = n('KEM+'),
          m = n.n(h),
          f = n('ERkP'),
          v = n.n(f),
          _ = n('t+RT'),
          b = n('MWbm'),
          g = n('t62R'),
          y = n('/yvb'),
          k = n('rHpw'),
          w = n('3XMw'),
          C = n.n(w),
          E = C.a.c1df579e,
          I = C.a.b60eba9e,
          x = C.a.ba939777,
          S = C.a.bc6efc72,
          T = (function (t) {
            u()(a, t)
            var n = p()(a)
            function a(t, i) {
              var o
              return (
                r()(this, a),
                (o = n.call(this, t, i)),
                m()(l()(o), '_handlePass', function (e) {
                  var t = o.props.onChange
                  t &&
                    setTimeout(function () {
                      return t(e)
                    }, 1e3)
                }),
                m()(l()(o), '_handleConsent', function () {
                  var e = o.props.onConsent
                  o.setState({ termsAccepted: !0 }), e && e()
                }),
                (o.state = { termsAccepted: !1 }),
                (e.recaptchaOptions = { useRecaptchaNet: !0 }),
                o
              )
            }
            return (
              o()(a, [
                {
                  key: '_renderConsentForm',
                  value: function () {
                    var e = this.props.nextButtonDisabled
                    return v.a.createElement(
                      b.a,
                      null,
                      v.a.createElement(g.b, { style: P.guideCopy }, I),
                      v.a.createElement(
                        b.a,
                        { style: P.button },
                        v.a.createElement(
                          y.a,
                          { disabled: e, onPress: this._handleConsent, size: 'xLarge', type: 'brandOutlined' },
                          E,
                        ),
                      ),
                      v.a.createElement(
                        g.b,
                        { color: 'gray700' },
                        v.a.createElement(
                          C.a.I18NFormatMessage,
                          { $i18n: 'hc37d3ba' },
                          v.a.createElement(g.b, { link: 'https://policies.google.com/privacy' }, S),
                        ),
                      ),
                    )
                  },
                },
                {
                  key: '_renderRecaptcha',
                  value: function () {
                    var e = this.props.withConsentForm
                    return v.a.createElement(
                      v.a.Fragment,
                      null,
                      e
                        ? v.a.createElement(
                            b.a,
                            { style: P.recaptchaTitle },
                            v.a.createElement(g.b, { style: P.guideCopy }, x),
                          )
                        : null,
                      v.a.createElement(
                        b.a,
                        { style: P.container },
                        v.a.createElement(_.a, {
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
          })(v.a.Component),
          P = k.a.create(function (e) {
            return {
              container: { margin: 'auto', transitionProperty: 'opacity', transitionDelay: '2s' },
              button: { paddingVertical: e.spaces.space20 },
              guideCopy: { paddingTop: e.spaces.space12 },
              recaptchaTitle: { paddingBottom: e.spaces.space20 },
            }
          })
      }.call(this, n('fRV1')))
    },
    'Mbn/': function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        s = n('Lsrn'),
        l = n('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
                viewBox: '0 0 24 24',
              },
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
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
    'N+xe': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'VerificationLanding', function () {
          return U
        })
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        s = n('1Pcy'),
        l = n.n(s),
        c = n('5Yy7'),
        u = n.n(c),
        d = n('2VqO'),
        p = n.n(d),
        h = n('KEM+'),
        m = n.n(h),
        f = (n('KqXw'), n('MvUL'), n('ERkP')),
        v = n.n(f),
        _ = n('9D1O'),
        b = n('hqKg'),
        g = n('Hw0q'),
        y = n('oEGd'),
        k = Object(g.b)('user_identifier'),
        w = Object(g.b)('phone'),
        C = Object(g.b)('email'),
        E = Object(g.b)('pin_code'),
        I = Object(b.createSelector)(C, k, w, E, function (e, t, n, a) {
          return { email: e, identifier: t, phone: n, pinCode: a }
        }),
        x = { verificationLink: _.A },
        S = Object(y.f)(I, x),
        T = n('kGix'),
        P = n('v//M'),
        L = n('3XMw'),
        A = n.n(L),
        O = n('fs1G'),
        D = n('mCZD'),
        F = n('MWbm'),
        R = n('cmUU'),
        N = n('rHpw'),
        B = A.a.b5474bd2,
        M = A.a.a9b8fb38,
        V = A.a.j24c37b2,
        U = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n(e) {
            var a
            return (
              r()(this, n),
              (a = t.call(this, e)),
              m()(l()(a), '_render', function () {
                return v.a.createElement(R.a, {
                  actionLabel: V,
                  headline: a.state.title || '',
                  onAction: a._handleCloseWindow,
                  onClose: a._handleCloseWindow,
                  subtext: a.state.message || '',
                  withCloseButton: !1,
                })
              }),
              m()(l()(a), '_handleCloseWindow', function () {
                window && window.close(), a.props.history.replace('/')
              }),
              (a.state = { title: void 0, message: void 0, fetchStatus: T.a.LOADING }),
              a
            )
          }
          return (
            o()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.email,
                    a = t.history,
                    r = t.identifier,
                    i = t.location,
                    o = t.phone,
                    s = t.pinCode,
                    l = t.verificationLink
                  return (
                    a.replace(i.pathname),
                    l({ user_identifier: r, email: n, phone: o, pin_code: s })
                      .then(function (t) {
                        return e.setState({
                          fetchStatus: t.success ? T.a.LOADED : T.a.FAILED,
                          title: t.title,
                          message: t.message,
                        })
                      })
                      .catch(function () {
                        return e.setState({ title: B, message: M, fetchStatus: T.a.FAILED })
                      })
                  )
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props.history
                  return v.a.createElement(
                    D.a,
                    { hideLogo: !0, history: e },
                    v.a.createElement(
                      F.a,
                      { style: j.root },
                      v.a.createElement(P.a, {
                        fetchStatus: this.state.fetchStatus,
                        onRequestRetry: O.a,
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
        })(v.a.Component),
        j = N.a.create(function (e) {
          return { root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 } }
        })
      t.default = S(U)
    },
    OOKO: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return s
      })
      n('uFXj')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('rHpw'),
        o = n('MWbm')
      function s(e) {
        var t = e.spacing
        return r.a.createElement(o.a, {
          accessibilityRole: 'separator',
          style: [l.divider, { marginVertical: null != t ? i.a.theme.spaces[t] : void 0 }],
        })
      }
      var l = i.a.create(function (e) {
        return { divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }
      })
    },
    Olb6: function (e, t, n) {
      'use strict'
      n('hBvt')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('3XMw'),
        o = n.n(i),
        s = n('5cUs'),
        l = n('wwsH'),
        c = o.a.d9fd5570,
        u = { viewType: 'hidden_replies' }
      t.a = function (e) {
        var t = e.link,
          n = e.onPress
        return r.a.createElement(l.a, {
          Icon: s.a,
          accessibilityLabel: c,
          activeColor: 'primary',
          behavioralEventContext: u,
          link: t,
          onPress: n,
        })
      }
    },
    P68U: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'MediaPickerWithPreview', function () {
          return w
        })
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        s = n('1Pcy'),
        l = n.n(s),
        c = n('5Yy7'),
        u = n.n(c),
        d = n('2VqO'),
        p = n.n(d),
        h = n('KEM+'),
        m = n.n(h),
        f = (n('2G9S'), n('hCOa'), n('87if'), n('hBpG'), n('7x/C'), n('jQ3i'), n('x4t0'), n('z84I'), n('ERkP')),
        v = n.n(f),
        _ = n('AspN'),
        b = n('rxPX'),
        g = Object(b.a)().propsFromActions(function () {
          return { addMedia: _.b, processMultipleMedia: _.g }
        }),
        y = n('2Daw'),
        k = n('VPdC'),
        w = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              m()(l()(e), '_handleAddMediaFiles', function (t) {
                var n = e.props,
                  a = n.addMedia,
                  r = n.location,
                  i = n.onChange,
                  o = n.onFailure,
                  s = n.processMultipleMedia,
                  l = e._getAcceptedFileInputs(),
                  c = Array.from(t).find(function (e) {
                    return l.includes(e.type)
                  })
                c &&
                  a([c], { location: r }).then(function (e) {
                    i &&
                      i(
                        e.map(function (e) {
                          return e.id
                        }),
                      ),
                      s(e, { onFailure: o })
                  })
              }),
              m()(l()(e), '_getAcceptedFileInputs', function () {
                var t = e.props,
                  n = t.acceptGifs,
                  a = t.acceptVideo
                return Object(k.b)({ acceptGifs: n, acceptVideo: a })
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.acceptGifs,
                    n = e.acceptVideo,
                    a = e.accessibilityLabel,
                    r = e.aspectRatio,
                    i = e.borderRadius,
                    o = e.currentContent,
                    s = e.maskStyle,
                    l = e.mediaItem,
                    c = e.onCrop,
                    u = e.onRemove,
                    d = e.rootStyle
                  return v.a.createElement(y.a, {
                    acceptGifs: t,
                    acceptVideo: n,
                    accessibilityLabel: a,
                    aspectRatio: r,
                    borderRadius: i,
                    currentContent: o,
                    maskStyle: s,
                    mediaItem: l,
                    onAddMediaFiles: this._handleAddMediaFiles,
                    onCrop: c,
                    onRemove: u,
                    rootStyle: d,
                    withDragDrop: !0,
                  })
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      m()(w, 'defaultProps', { acceptGifs: !1, acceptVideo: !1 })
      var C = g(w)
      t.default = C
    },
    P7wY: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      }),
        n.d(t, 'b', function () {
          return i
        })
      var a = function (e, t, n) {
          var a = new Date(),
            r = a.getFullYear() - e,
            i = a.getMonth() + 1 - t
          if (i < 0) r -= 1
          else if (0 === i) {
            a.getDate() - n < 0 && (r -= 1)
          }
          return r
        },
        r = function (e, t, n) {
          return !!(e && t && n) && a(e, t, n) < 18
        },
        i = function () {
          return new Date().getFullYear() - 120
        }
    },
    PbbS: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      })
      n('yH/f'), n('ERkP')
      var a = Object.freeze({
        Default: 'default',
        FollowTopic: 'follow',
        Star: 'star',
        Interested: 'interested',
        Favorite: 'favorite',
      })
    },
    RjwM: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        s = n('Lsrn'),
        l = n('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M18.707 13.293c-.39-.39-1.023-.39-1.414 0L13 17.586V5c0-.553-.447-1-1-1s-1 .447-1 1v12.586l-4.293-4.293c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293l6-6c.39-.39.39-1.023 0-1.414z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
    Rqga: function (e, t, n) {
      var a = n('ax0f'),
        r = Math.log,
        i = Math.LN2
      a(
        { target: 'Math', stat: !0 },
        {
          log2: function (e) {
            return r(e) / i
          },
        },
      )
    },
    S8sr: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return O
      })
      var a = n('yiKp'),
        r = n.n(a),
        i = n('VrFO'),
        o = n.n(i),
        s = n('Y9Ll'),
        l = n.n(s),
        c = n('1Pcy'),
        u = n.n(c),
        d = n('5Yy7'),
        p = n.n(d),
        h = n('2VqO'),
        m = n.n(h),
        f = n('KEM+'),
        v = n.n(f),
        _ = (n('Blm6'), n('KqXw'), n('Ysgh'), n('z84I'), n('jQ3i'), n('x4t0'), n('ERkP')),
        b = n.n(_),
        g = n('nS1w'),
        y = n('t62R'),
        k = n('p+r5'),
        w = n('3XMw'),
        C = n.n(w),
        E = n('6XNv'),
        I = n('rHpw'),
        x = n('aITJ'),
        S = n('MWbm'),
        T = C.a.jf83d091,
        P = C.a.af4abf2f,
        L = C.a.b871f28f,
        A = 1,
        O = (function (e) {
          p()(n, e)
          var t = m()(n)
          function n(e) {
            var a
            o()(this, n),
              (a = t.call(this, e)),
              v()(u()(a), '_handleSelectorChange', function (e, t) {
                var n = a.props,
                  i = n.day,
                  o = n.month,
                  s = n.year,
                  l = r()(r()({}, { day: i, month: o, year: s }), {}, v()({}, e, parseInt(t, 10)))
                a.props.onChange(l)
              }),
              v()(u()(a), '_handleDayChange', function (e) {
                a._handleSelectorChange('day', e)
              }),
              v()(u()(a), '_handleMonthChange', function (e) {
                a._handleSelectorChange('month', e)
              }),
              v()(u()(a), '_handleYearChange', function (e) {
                a._handleSelectorChange('year', e)
              }),
              v()(u()(a), '_handleDateChange', function (e) {
                var t = e.target.value.split('-'),
                  n = { year: parseInt(t[0], 10), month: parseInt(t[1], 10), day: parseInt(t[2], 10) }
                a.props.onChange(n)
              })
            var i = e.day,
              s = e.maxSelectableYear,
              l = e.minSelectableYear,
              c = e.month,
              d = e.year
            return (
              (a._errorID = 'DATE_INPUT_'.concat(A, '_ERROR')),
              (a._monthOptions = g.c()),
              (a._nativeDefaultValue = g.e(i, c, d)),
              (a._nativeMaxDate = g.e(31, 12, s)),
              (a._nativeMinDate = g.e(1, 1, l)),
              (A += 1),
              a
            )
          }
          return (
            l()(n, [
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t = this.props,
                    n = t.day,
                    a = t.month,
                    r = t.onChange,
                    i = t.year,
                    o = a && a !== e.month,
                    s = i && i !== e.year
                  ;(o || s) &&
                    (g
                      .b(a, i)
                      .map(function (e) {
                        return parseInt(e.value, 10)
                      })
                      .includes(n) ||
                      r({ month: a, year: i, day: void 0 }))
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props.errorMessage
                  return b.a.createElement(
                    S.a,
                    null,
                    x.b.isMobileOS() ? this._renderNativeDateInput() : this._renderSelectors(),
                    e ? b.a.createElement(y.b, { color: 'red500', nativeID: this._errorID }, e) : null,
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
                    i = void 0 === r ? {} : r,
                    o = e.label,
                    s = e.autofocus,
                    l = e.monthSelectorTestID,
                    c = e.daySelectorTestID,
                    u = e.yearSelectorTestID,
                    d = e.style,
                    p = e.minSelectableYear,
                    h = e.maxSelectableYear,
                    m = g.b(n, a),
                    f = g.d(p, h, t, n)
                  return b.a.createElement(
                    S.a,
                    { accessibilityLabel: o, accessibilityRole: 'group', style: [D.selectorsContainer, d] },
                    b.a.createElement(E.a, {
                      accessibilityDescribedBy: i.month ? this._errorID : void 0,
                      autofocus: s,
                      hasError: i.month,
                      label: P,
                      onChange: this._handleMonthChange,
                      options: this._monthOptions,
                      style: D.monthSelector,
                      testID: l,
                      value: n ? ''.concat(n) : '',
                      withEmptyOption: !0,
                    }),
                    b.a.createElement(E.a, {
                      accessibilityDescribedBy: i.day ? this._errorID : void 0,
                      hasError: i.day,
                      label: T,
                      onChange: this._handleDayChange,
                      options: m,
                      style: D.daySelector,
                      testID: c,
                      value: t ? ''.concat(t) : '',
                      withEmptyOption: !0,
                    }),
                    b.a.createElement(E.a, {
                      accessibilityDescribedBy: i.year ? this._errorID : void 0,
                      hasError: i.year,
                      label: L,
                      onChange: this._handleYearChange,
                      options: f,
                      style: D.yearSelector,
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
                  return b.a.createElement(k.a, {
                    defaultValue: this._nativeDefaultValue,
                    label: e,
                    max: this._nativeMaxDate,
                    min: this._nativeMinDate,
                    name: e,
                    numberOfLines: 1,
                    onChange: this._handleDateChange,
                    style: D.dateInputRoot,
                    type: 'date',
                  })
                },
              },
            ]),
            n
          )
        })(b.a.Component),
        D = I.a.create(function (e) {
          return {
            selectorsContainer: { flexDirection: 'row', marginVertical: e.spaces.space16 },
            monthSelector: { flexGrow: 2, marginRight: e.spaces.space12 },
            daySelector: { flexGrow: 1, marginRight: e.spaces.space12 },
            yearSelector: { flexGrow: 1 },
            dateInputRoot: { paddingHorizontal: 0 },
          }
        })
    },
    Sksh: function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        s = n('KEM+'),
        l = n.n(s),
        c = (n('+KXO'), n('849X'), n('TJCb'), n('SrIh')),
        u = n('M0jS'),
        d = n('+d3d'),
        p = n('VY6S'),
        h = (function () {
          function e() {
            var t = this
            r()(this, e),
              l()(this, 'usersInApp', {}),
              l()(
                this,
                '_throttledInitialFetch',
                Object(d.a)(function () {
                  t.store.dispatch(u.b.fetchManyIfNeeded(Object.keys(t.usersInApp)))
                }, 1500),
              )
          }
          return (
            o()(e, [
              {
                key: 'init',
                value: function (e) {
                  this.store = e
                },
              },
              {
                key: 'registerUserInApp',
                value: function (e) {
                  Object.keys(this.usersInApp).length > 50 &&
                    ((this.usersInApp = {}),
                    Object(c.a)(new Error('Registered users in app has exceeded 50'), { level: 'warning' })),
                    this.usersInApp[e]
                      ? (this.usersInApp[e] = this.usersInApp[e] + 1)
                      : ((this.usersInApp[e] = 1), Object(p.a)(this._throttledInitialFetch(), 100))
                },
              },
              {
                key: 'deregisterUserInApp',
                value: function (e) {
                  this.usersInApp[e] && this.usersInApp[e] > 1
                    ? (this.usersInApp[e] = this.usersInApp[e] - 1)
                    : delete this.usersInApp[e]
                },
              },
            ]),
            e
          )
        })()
      t.a = new h()
    },
    T8pk: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        s = n('Lsrn'),
        l = n('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M19.708 22H4.292C3.028 22 2 20.972 2 19.708V7.375C2 6.11 3.028 5.083 4.292 5.083h2.146C7.633 3.17 9.722 2 12 2c2.277 0 4.367 1.17 5.562 3.083h2.146C20.972 5.083 22 6.11 22 7.375v12.333C22 20.972 20.972 22 19.708 22zM4.292 6.583c-.437 0-.792.355-.792.792v12.333c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V7.375c0-.437-.355-.792-.792-.792h-2.45c-.317.05-.632-.095-.782-.382-.88-1.665-2.594-2.7-4.476-2.7-1.883 0-3.598 1.035-4.476 2.702-.16.302-.502.46-.833.38H4.293z',
              }),
              o.a.createElement('path', {
                d: 'M12 8.167c-2.68 0-4.86 2.18-4.86 4.86s2.18 4.86 4.86 4.86 4.86-2.18 4.86-4.86-2.18-4.86-4.86-4.86zm2 5.583h-1.25V15c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-1.25H10c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h1.25V11c0-.414.336-.75.75-.75s.75.336.75.75v1.25H14c.414 0 .75.336.75.75s-.336.75-.75.75z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
    TpKd: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return i
      }),
        n.d(t, 'c', function () {
          return o
        }),
        n.d(t, 'b', function () {
          return s
        })
      n('2G9S'), n('KqXw'), n('Ysgh')
      var a = n('mrHL'),
        r = 'external_referer'
      function i(e) {
        return Object(a.d)({ cookieName: r, featureSwitches: e })
      }
      function o(e, t) {
        var n = (t && t.encryptedReferralDetails) || '',
          i = (t && t.encryptedReferer) || '',
          o = t && void 0 !== t.referralType ? ''.concat(t.referralType) : ''
        if (n || i || o) {
          var s = ''.concat(encodeURIComponent(i), '|').concat(o, '|').concat(encodeURIComponent(n))
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
        var t = i(e)
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
      var a = n('yiKp'),
        r = n.n(a),
        i = n('VrFO'),
        o = n.n(i),
        s = n('Y9Ll'),
        l = n.n(s),
        c = n('1Pcy'),
        u = n.n(c),
        d = n('5Yy7'),
        p = n.n(d),
        h = n('2VqO'),
        m = n.n(h),
        f = n('KEM+'),
        v = n.n(f),
        _ = (n('2G9S'), n('ho0z'), n('0zG9'), n('ERkP')),
        b = n.n(_),
        g = n('/yvb'),
        y = n('hUVV'),
        k = n('3XMw'),
        w = n.n(k),
        C = n('iKTg'),
        E = n('TaB8'),
        I = n('1zbE'),
        x = n('Ukpf'),
        S = n('cnVF'),
        T = n('TnY3'),
        P = n('0+0m'),
        L = n('v6aA'),
        A = n('2qJZ'),
        O = w.a.ib65b1c6,
        D = w.a.f55cebb7,
        F = w.a.g61ed8a4,
        R = { clientId: P.a, scope: 'name email', usePopup: !0 },
        N = (function (e) {
          p()(n, e)
          var t = m()(n)
          function n() {
            var e
            o()(this, n)
            for (var a = arguments.length, i = new Array(a), s = 0; s < a; s++) i[s] = arguments[s]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              v()(u()(e), 'state', { isScriptLoaded: !1 }),
              v()(
                u()(e),
                '_is3rdPartyIntegrationDisabled',
                Object(E.a)('responsive_web_3rd_party_category_sign_in_with_apple', e.context.featureSwitches),
              ),
              v()(u()(e), '_initAppleIDAuth', function () {
                var t = window.AppleID,
                  n = e.props.fetchSsoInitToken,
                  a = Object(A.c)(e.context.featureSwitches) ? 'https://'.concat(A.b) : 'https://'.concat(A.a)
                t &&
                  n(S.A.Apple).then(function (e) {
                    var n = e.state
                    t.auth.init(r()(r()({}, R), {}, { redirectURI: a, state: n }))
                  })
              }),
              v()(u()(e), '_handleOnPress', function () {
                var t = window.AppleID,
                  n = e.props,
                  a = n.analytics,
                  r = n.buttonState,
                  i = n.history,
                  o = n.personalizationSettings,
                  s = n.shouldPropagateP13nSettings,
                  l = n.ssoInitTokens,
                  c = o || {},
                  u = c.allowCookieUse,
                  d = c.allowDeviceAccess,
                  p = c.allowPartnerships,
                  h = c.allowPersonalization
                a.scribe({ component: 'apple_sign_in', element: r, action: 'click' }),
                  t.auth
                    .signIn()
                    .then(function (e) {
                      a.scribe({ component: 'apple_sign_in', element: r, action: 'success' })
                      var t = e.user && e.user.name && e.user.name.firstName && e.user.name.lastName
                      i.push({
                        pathname: '/i/flow/single_sign_on',
                        state: {
                          input: {
                            cookie_personalization_settings: s && {
                              allow_cookie_use: !!u,
                              allow_device_personalization: !!d,
                              allow_partnerships: !!p,
                              allow_ads_personalization: !!h,
                            },
                            requested_variant: JSON.stringify({
                              display_name: t && ''.concat(e.user.name.firstName, ' ').concat(e.user.name.lastName),
                              id_token: e.authorization.id_token,
                              provider: S.A.Apple,
                              state: l[S.A.Apple],
                            }),
                          },
                        },
                      })
                    })
                    .catch(function (t) {
                      var n = e.props.addToast
                      t.error !== P.g
                        ? (a.scribe({ component: 'apple_sign_in', element: r, action: 'failure' }), n({ text: F }))
                        : a.scribe({ component: 'apple_sign_in', element: 'auth', action: 'user_closed_popup' })
                    })
              }),
              e
            )
          }
          return (
            l()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this
                  this._is3rdPartyIntegrationDisabled ||
                    x.a.inject({
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
                    i = n === I.a.SignUp ? O : D
                  return this._is3rdPartyIntegrationDisabled
                    ? null
                    : b.a.createElement(g.a, {
                        backgroundColor: 'white',
                        borderColor: 'gray200',
                        children: i,
                        color: 'alwaysBaseGray1100',
                        disabled: !r,
                        icon: b.a.createElement(C.a, null),
                        onPress: this._handleOnPress,
                        size: t,
                        style: a,
                      })
                },
              },
            ]),
            n
          )
        })(b.a.PureComponent)
      v()(N, 'contextType', L.a),
        v()(N, 'defaultProps', { buttonSize: 'xLarge', buttonState: 'signup' }),
        (t.a = Object(T.a)(Object(y.a)(N)))
    },
    VPdC: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return A
      })
      var a = n('97Jx'),
        r = n.n(a),
        i = n('m3Bd'),
        o = n.n(i),
        s = n('VrFO'),
        l = n.n(s),
        c = n('Y9Ll'),
        u = n.n(c),
        d = n('5Yy7'),
        p = n.n(d),
        h = n('2VqO'),
        m = n.n(h),
        f = n('KEM+'),
        v = n.n(f),
        _ = (n('2G9S'), n('7xRU'), n('ERkP')),
        b = n.n(_),
        g = n('3XMw'),
        y = n.n(g),
        k = n('cjZk'),
        w = 'fileInput',
        C = n('sjK1'),
        E = n('/Imo'),
        I = n('rHpw'),
        x = n('9HgX'),
        S = ['acceptGifs', 'acceptImages', 'acceptVideo', 'customMimeTypes', 'icon', 'style', 'withIcon'],
        T = y.a.b9960f31,
        P = { viewType: 'media_picker' },
        L = b.a.createElement(k.a, null),
        A = function (e) {
          var t = e.acceptGifs,
            n = e.acceptImages,
            a = void 0 === n || n,
            r = e.acceptVideo
          return (a ? x.b : []).concat(t ? [x.a] : []).concat(r ? C.a : [])
        },
        O = (function (e) {
          p()(n, e)
          var t = m()(n)
          function n() {
            return l()(this, n), t.apply(this, arguments)
          }
          return (
            u()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.acceptGifs,
                    n = e.acceptImages,
                    a = e.acceptVideo,
                    i = e.customMimeTypes,
                    s = e.icon,
                    l = e.style,
                    c = e.withIcon,
                    u = o()(e, S),
                    d = A({ acceptGifs: t, acceptImages: n, acceptVideo: a }).concat(i).join(',')
                  return b.a.createElement(
                    E.a,
                    r()({}, u, {
                      accept: d,
                      behavioralEventContext: P,
                      icon: c ? s : void 0,
                      style: [D.root, l],
                      testID: w,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(b.a.PureComponent)
      v()(O, 'defaultProps', {
        acceptGifs: !0,
        acceptImages: !0,
        acceptVideo: !0,
        customMimeTypes: [],
        accessibilityLabel: T,
        icon: L,
        size: 'medium',
        withIcon: !0,
      })
      var D = I.a.create(function (e) {
        return { root: { margin: '-'.concat(e.spaces.space12) } }
      })
      t.a = O
    },
    YICZ: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        i = n('Zejx'),
        o = n('rxPX'),
        s = n('0KEI'),
        l = Object(o.a)().propsFromActions(function () {
          return {
            createLocalApiErrorHandler: Object(s.createLocalApiErrorHandlerWithContextFactory)(
              'TOPIC_NOT_INTERESTED_CONTEXT',
            ),
            setNotInterested: i.a.notInterested,
          }
        }),
        c = n('3XMw'),
        u = n.n(c),
        d = n('hOZg'),
        p = n('Jkc4'),
        h = n('Irs7'),
        m = n('/yvb'),
        f = n('rHpw'),
        v = u.a.d9b417c4,
        _ = u.a.c29d6806,
        b = u.a.e839db39,
        g = function (e) {
          var t = e.createLocalApiErrorHandler,
            n = e.nativeID,
            a = e.onPress,
            i = e.setNotInterested,
            o = e.size,
            s = e.style,
            l = e.text,
            c = e.topicId,
            u = e.type,
            d = e.withIconOnly,
            f = Object(h.b)(),
            _ = r.a.useCallback(
              function (e) {
                e.preventDefault(),
                  a ? a(e) : (f.scribe({ element: 'topic', action: 'not_interested' }), i(c).catch(t()))
              },
              [f, t, a, i, c],
            )
          return r.a.createElement(p.a, null, function (e) {
            return r.a.createElement(
              m.a,
              {
                accessibilityLabel: v,
                hoverLabel: { label: b },
                icon: d ? k : void 0,
                nativeID: n,
                onPress: e(_),
                pullRight: d,
                size: o,
                style: s,
                type: u,
              },
              d ? null : l,
            )
          })
        }
      g.defaultProps = { size: 'small', text: _, type: 'brandText', withIconOnly: !0 }
      var y = f.a.create(function (e) {
          return { closeIcon: { color: e.colors.gray700 } }
        }),
        k = r.a.createElement(d.a, { style: y.closeIcon }),
        w = l(g)
      t.a = w
    },
    aA1u: function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        s = n('1Pcy'),
        l = n.n(s),
        c = n('5Yy7'),
        u = n.n(c),
        d = n('2VqO'),
        p = n.n(d),
        h = n('KEM+'),
        m = n.n(h),
        f = (n('2G9S'), n('ERkP')),
        v = n.n(f),
        _ = n('t62R'),
        b = n('21zW'),
        g = n('rHpw'),
        y = n('3XMw'),
        k = n.n(y),
        w = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              m()(l()(e), '_formatTimestamp', function (e) {
                var t = k.a.jade381b,
                  n = k.a.d725a288,
                  a = new Date(e),
                  r = t(a),
                  i = n(a)
                return ''.concat(i, ' · ').concat(r)
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.style
                  return v.a.createElement(
                    _.b,
                    { color: 'gray700', style: e },
                    this._renderTimestampAndMaybePlace(),
                    this._maybeRenderSource(),
                  )
                },
              },
              {
                key: '_renderTimestampAndMaybePlace',
                value: function () {
                  var e = this.props,
                    t = e.linkColor,
                    n = e.onPlaceClick,
                    a = e.onTimestampClick,
                    r = e.place,
                    i = e.placeLink,
                    o = e.timestamp,
                    s = e.timestampLink,
                    l = this._formatTimestamp(o)
                  return r
                    ? v.a.createElement(
                        k.a.I18NFormatMessage,
                        { $i18n: 'ba64a3b2' },
                        v.a.createElement(
                          _.b,
                          { color: s ? t : void 0, link: s, onClick: a },
                          k.a.e9c24489({ date: l }),
                        ),
                        v.a.createElement(
                          _.b,
                          { color: i ? t : void 0, link: i, onClick: n },
                          k.a.a16de8a4({ place: r }),
                        ),
                      )
                    : v.a.createElement(_.b, { color: s ? t : void 0, link: s, onClick: a }, l)
                },
              },
              {
                key: '_maybeRenderSource',
                value: function () {
                  var e = this.props,
                    t = e.linkColor,
                    n = e.onSourceClick,
                    a = e.source,
                    r = e.sourceLink
                  return a
                    ? v.a.createElement(
                        v.a.Fragment,
                        null,
                        v.a.createElement(b.a, null),
                        v.a.createElement(_.b, { color: r ? t : void 0, link: r, onClick: n, style: C.source }, a),
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      m()(w, 'defaultProps', { linkColor: 'link' })
      var C = g.a.create(function (e) {
        return { source: { whiteSpace: 'normal' } }
      })
      t.a = w
    },
    'aV/s': function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        s = n('1Pcy'),
        l = n.n(s),
        c = n('5Yy7'),
        u = n.n(c),
        d = n('2VqO'),
        p = n.n(d),
        h = n('KEM+'),
        m = n.n(h),
        f = (n('2G9S'), n('hBvt'), n('uFXj'), n('ERkP')),
        v = n.n(f),
        _ = n('t62R'),
        b = n('3XMw'),
        g = n.n(b),
        y = n('I4+6'),
        k = n('cm6r'),
        w = n('UnyZ'),
        C = n('rHpw'),
        E = n('MWbm'),
        I = n('hOZg'),
        x = n('iY63'),
        S = n('IMYl'),
        T = { active: g.a.e557ad8d, expand: g.a.e3a58c27, remove: g.a.h517e8d8 },
        P = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              m()(l()(e), '_handleSecondaryClick', function () {
                var t = e.props.secondaryAction
                t && t.onSecondaryClick()
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.accessibilityLabel,
                    n = e.avatar,
                    a = e.compact,
                    r = e.disabled,
                    i = e.link,
                    o = e.mode,
                    s = e.onClick,
                    l = e.secondaryAction,
                    c = e.selected,
                    u = e.style,
                    d = e.text,
                    p = this._renderIcon(!0, o),
                    h = l && this._renderIcon(!1, l.mode),
                    m = [L.root, a && L.compact, r && L.disabled, c && L.selected, u],
                    f = [L.content, p && L.withIcon, n && ((a && L.withAvatarImageCompact) || L.withAvatarImage)],
                    b = y.a.generate({
                      backgroundColor: c ? C.a.theme.colors.primary : 'transparent',
                      color: c ? C.a.theme.colors.white : C.a.theme.colors.primary,
                    })
                  return v.a.createElement(
                    E.a,
                    { style: m },
                    v.a.createElement(
                      k.a,
                      {
                        accessibilityLabel: t || (o ? T[o] : ''),
                        disabled: r,
                        interactiveStyles: b,
                        link: i,
                        onPress: s,
                        style: f,
                      },
                      this._renderAvatar(),
                      v.a.createElement(
                        _.b,
                        {
                          color: c ? 'whiteOnColor' : 'text',
                          numberOfLines: 1,
                          selectable: !1,
                          style: L.text,
                          weight: 'bold',
                        },
                        d,
                      ),
                      p,
                    ),
                    l
                      ? v.a.createElement(
                          k.a,
                          {
                            accessibilityLabel: l.accessibilityLabel || (l.mode ? T[l.mode] : ''),
                            disabled: r || l.disabled,
                            hoverLabel: { label: l.hoverLabel || (l.mode ? T[l.mode] : '') },
                            interactiveStyles: b,
                            onPress: this._handleSecondaryClick,
                            style: L.secondaryControl,
                          },
                          v.a.createElement(E.a, { style: L.secondaryBorder }, h),
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
                    a = [L.icon, n && L.iconSelected],
                    r = [L.icon]
                  switch (t) {
                    case w.a.Remove:
                      return v.a.createElement(I.a, { style: [L.dismissIcon, e && a] })
                    case w.a.Expand:
                      return v.a.createElement(x.a, { style: e ? a : r })
                    case w.a.Active:
                      return v.a.createElement(S.a, { style: a })
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
                    ? v.a.createElement(E.a, { style: [L.avatarContainer, n ? L.avatarCompact : L.avatar] }, t)
                    : null
                },
              },
            ]),
            n
          )
        })(v.a.PureComponent)
      m()(P, 'defaultProps', { compact: !1, disabled: !1, selected: !1 })
      var L = C.a.create(function (e) {
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
      t.a = P
    },
    dCqJ: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        i = n('cm6r'),
        o = n('VrFO'),
        s = n.n(o),
        l = n('Y9Ll'),
        c = n.n(l),
        u = n('1Pcy'),
        d = n.n(u),
        p = n('5Yy7'),
        h = n.n(p),
        m = n('2VqO'),
        f = n.n(m),
        v = n('KEM+'),
        _ = n.n(v),
        b = (n('2G9S'), n('t62R')),
        g = n('rHpw'),
        y = n('3XMw'),
        k = n.n(y),
        w = k.a.d7e50a66,
        C = 'INDIRECT',
        E = 'NO_SPONSORSHIP',
        I = 'ISSUE',
        x = (function (e) {
          h()(n, e)
          var t = f()(n)
          function n() {
            var e
            s()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              _()(d()(e), '_renderDisclaimerDetails', function () {
                var t = e.props,
                  n = t.onPoliticalSponsorWebsiteClick,
                  a = t.promotedContent
                if (!a.adMetadataContainer) return null
                var i = a.adMetadataContainer,
                  o = i.disclaimerType,
                  s = i.sponsorshipCandidate,
                  l = i.sponsorshipOrganization,
                  c = i.sponsorshipOrganizationWebsite,
                  u = i.sponsorshipType,
                  d =
                    c && o !== I
                      ? r.a.createElement(b.b, { link: c, onClick: n })
                      : r.a.createElement(b.b, { color: 'gray700', size: 'subtext2' })
                if (!l) return null
                var p = r.a.createElement(
                    k.a.I18NFormatMessage,
                    { $i18n: 'e1e348dc' },
                    r.a.cloneElement(d, null, k.a.b1e5bc63({ sponsorshipOrganization: l })),
                  ),
                  h = r.a.createElement(
                    k.a.I18NFormatMessage,
                    { $i18n: 'c7dea0d0' },
                    r.a.cloneElement(d, null, k.a.a84fcff2({ sponsorshipOrganization: l })),
                  ),
                  m = s
                    ? r.a.createElement(
                        k.a.I18NFormatMessage,
                        { $i18n: 'b5c2371a', sponsorshipCandidate: s },
                        r.a.cloneElement(d, null, k.a.fd985325({ sponsorshipOrganization: l })),
                      )
                    : null
                return r.a.createElement(
                  b.b,
                  { color: 'gray700', size: 'subtext2' },
                  o === I ? p : u === E ? h : u === C ? m : p,
                )
              }),
              _()(d()(e), '_renderLearnMoreLink', function () {
                var t = e.props,
                  n = t.onPromotedDisclaimerLearnMoreClick,
                  a = t.promotedContent,
                  i = t.tweet,
                  o = (a.adMetadataContainer || {}).disclaimerType === I ? 'issue_ad' : 'political_ad',
                  s = 'http://ads.twitter.com/transparency/ads/'.concat(i.user.screen_name, '/tweet/').concat(i.id_str)
                return r.a.createElement(b.b, { link: s, onClick: n(o), size: 'subtext2', style: S.learnMore }, w)
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  return r.a.createElement(
                    r.a.Fragment,
                    null,
                    this._renderDisclaimerDetails(),
                    this._renderLearnMoreLink(),
                  )
                },
              },
            ]),
            n
          )
        })(r.a.Component),
        S = g.a.create(function (e) {
          return { learnMore: { alignSelf: 'flex-start' } }
        }),
        T = n('e5HP'),
        P = n('Z6aJ'),
        L = n('MWbm')
      t.a = function (e) {
        var t = e.onPoliticalSponsorWebsiteClick,
          n = e.onPromotedDisclaimerLearnMoreClick,
          a = e.onPromotedIndicatorClick,
          o = e.promotedContent,
          s = e.promotedContentAdvertiser,
          l = e.style,
          c = e.testID,
          u = e.tweet,
          d = e.withCircleIcon,
          p = P.a.isPromoted(o),
          h =
            !!o &&
            ((o.adMetadataContainer &&
              ('POLITICAL' === o.adMetadataContainer.disclaimerType ||
                'ISSUE' === o.adMetadataContainer.disclaimerType)) ||
              'political' === P.a.getDisclosureType(o) ||
              'issue' === P.a.getDisclosureType(o))
        return p
          ? r.a.createElement(
              L.a,
              { style: l, testID: c },
              s && o
                ? r.a.createElement(
                    i.a,
                    {
                      interactiveStyles: null,
                      link: {
                        pathname: 'https://twitter.com/'.concat(s.screen_name),
                        state: { promotedTweetState: o },
                      },
                      onPress: a,
                    },
                    r.a.createElement(T.a, { promotedContent: o, withCircleIcon: d }),
                  )
                : !!o && r.a.createElement(T.a, { promotedContent: o }),
              h && o
                ? r.a.createElement(x, {
                    onPoliticalSponsorWebsiteClick: t,
                    onPromotedDisclaimerLearnMoreClick: n,
                    promotedContent: o,
                    tweet: u,
                  })
                : null,
            )
          : null
      }
    },
    doI8: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return s
      })
      var a = n('yiKp'),
        r = n.n(a),
        i = n('WpDa'),
        o = n('ZNT5')
      t.b = function (e) {
        var t = e.endpointParams,
          n = e.endpointUrl,
          a = e.timelineId
        return Object(o.a)({
          timelineId: a,
          getEndpoint: function (e) {
            return e.URT.fetchGeneric
          },
          getEndpointParams: function (e) {
            var a = e.count,
              i = e.cursor
            return r()(r()({}, t), {}, { cursor: 'string' == typeof i ? i : void 0, count: a, endpointUrl: n })
          },
          context: 'FETCH_TIMELINE',
          perfKey: 'generic',
        })
      }
      var s = function (e) {
        return Object(o.a)({
          timelineId: 'generic-graphql-timeline-'.concat(e),
          getEndpoint: function (e) {
            return e.Graphql.fetchGenericTimelineById
          },
          getEndpointParams: function (t) {
            var n = t.count,
              a = t.cursor
            return { cursor: 'string' == typeof a ? a : void 0, count: n, timelineId: e }
          },
          formatResponse: i.a,
          context: 'FETCH_GENERIC_TIMELINE_GQL',
          perfKey: 'genericGQL',
        })
      }
    },
    fS8x: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        i = n('VrFO'),
        o = n.n(i),
        s = n('Y9Ll'),
        l = n.n(s),
        c = n('1Pcy'),
        u = n.n(c),
        d = n('5Yy7'),
        p = n.n(d),
        h = n('2VqO'),
        m = n.n(h),
        f = n('KEM+'),
        v = n.n(f),
        _ = n('/NU0'),
        b = n('rxPX'),
        g = n('AspN'),
        y = function (e, t) {
          return t.media ? t.media : Object(_.a)(t.mediaId) ? Object(g.k)(e, t.mediaId)[0] : void 0
        },
        k = function (e, t) {
          return void 0 !== t.mediaId ? t.mediaId : t.media ? t.media.id : null
        },
        w = Object(b.a)()
          .propsFromState(function () {
            return { media: y, mediaId: k }
          })
          .propsFromActions(function () {
            return { processMedia: g.f, updateMediaUpload: g.o }
          })
          .withAnalytics({ page: 'media', section: 'edit' }),
        C = n('jHSc'),
        E = n('3XMw'),
        I = n.n(E),
        x = n('EeFI'),
        S = 'applyButton',
        T = n('/yvb'),
        P = n('rHpw'),
        L = I.a.gd80afba,
        A = I.a.a753a87f,
        O = (function (e) {
          p()(n, e)
          var t = m()(n)
          function n(e) {
            var a
            return (
              o()(this, n),
              (a = t.call(this, e)),
              v()(u()(a), '_getMedia', function () {
                var e = a.props.media
                return e && e.mediaFile && e.mediaFile.isImage ? e : null
              }),
              v()(u()(a), '_renderAppBarRightControl', function () {
                var e = a.state.isProcessing
                return r.a.createElement(
                  T.a,
                  { disabled: e, onPress: a._handleApplyButtonClick, size: 'small', testID: S, type: 'primaryFilled' },
                  A,
                )
              }),
              v()(u()(a), '_handleBackClick', function () {
                var e = a.props,
                  t = e.analytics,
                  n = e.onCancel
                t.scribe({ action: 'cancel' }), n && n()
              }),
              v()(u()(a), '_handleApplyButtonClick', function () {
                var e = a.props.onCropDone,
                  t = a._cropper.current
                if (t) {
                  var n = a.props,
                    r = n.analytics,
                    i = n.media,
                    o = n.mediaId,
                    s = n.onDone,
                    l = n.processMedia,
                    c = n.updateMediaUpload
                  a.setState({ isProcessing: !0 })
                  var u = t.getCropData(),
                    d = (i || {}).originalMediaFile,
                    p = !d || (0 === u.top && 0 === u.left && u.width === d.width && u.height === d.height)
                  Object(_.a)(o) &&
                    (e
                      ? (e(u), s())
                      : (c({ id: o, cropData: p ? void 0 : u }),
                        l(o).then(function () {
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
            l()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.defaultAspectRatio,
                    n = e.history,
                    a = e.title,
                    i = e.withAspectRatioOptions,
                    o = e.withZoomControl,
                    s = this._getMedia()
                  return r.a.createElement(
                    C.b,
                    {
                      backButtonType: 'back',
                      containerStyle: D.root,
                      documentTitle: a || L,
                      history: n,
                      onBackClick: this._handleBackClick,
                      rightControl: this._renderAppBarRightControl(),
                      title: a || L,
                    },
                    r.a.createElement(x.a, {
                      defaultAspectRatio: t,
                      media: s,
                      ref: this._cropper,
                      withAspectRatioOptions: i,
                      withZoomControl: o,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(r.a.Component),
        D = P.a.create(function (e) {
          return { root: { flexShrink: 1, height: 650 } }
        }),
        F = w(O),
        R = n('X8FW'),
        N = P.a.create(function (e) {
          return { modal: { width: 600, maxWidth: '90vw' } }
        })
      t.a = function (e) {
        return r.a.createElement(
          R.b,
          { clickMaskToClose: !1, modalSize: 'fitChildren', style: N.modal },
          r.a.createElement(F, e),
        )
      }
    },
    gPQO: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        i = n('yiKp'),
        o = n.n(i),
        s = n('VrFO'),
        l = n.n(s),
        c = n('Y9Ll'),
        u = n.n(c),
        d = n('1Pcy'),
        p = n.n(d),
        h = n('5Yy7'),
        m = n.n(h),
        f = n('2VqO'),
        v = n.n(f),
        _ = n('KEM+'),
        b = n.n(_),
        g =
          (n('+KXO'),
          n('KqXw'),
          n('MvUL'),
          n('hBpG'),
          n('7x/C'),
          n('3voH'),
          n('z84I'),
          n('JtPf'),
          n('jwue'),
          n('+oxZ'),
          n('ERkP')),
        y = n.n(g),
        k = (n('hBvt'), n('q82E')),
        w = n('m3Bd'),
        C = n.n(w),
        E = (n('LW0h'), n('wFPu'), n('RhWx')),
        I = n.n(E),
        x = (n('2G9S'), n('tQbP'), n('M+/F'), n('t62R')),
        S = n('YlqV'),
        T = function (e) {
          var t,
            n = e.entity,
            a = n.navigation_link,
            r = n.subtask_data_reference,
            i = e.onClick,
            s = e.onNavigate,
            l = e.subtaskInputs,
            c = e.children,
            u = {}
          if (a) {
            var d = a.link_type === k.m.ChromelessWeb
            u = o()(
              { withInteractiveStyling: !0 },
              d && a.url
                ? { link: { external: !0, pathname: a.url } }
                : {
                    accessibilityRole: 'button',
                    color: 'link',
                    onClick:
                      ((t = a),
                      function (e) {
                        e.preventDefault(), s ? s(t) : i && i()
                      }),
                  },
            )
          } else r && (c = Object(S.e)(l, r))
          return y.a.createElement(x.b, u, c)
        },
        P = function (e) {
          var t = e.children
          switch (e.stylingRange.styling_type) {
            case k.x.UnorderedList:
              return y.a.createElement('ul', null, t)
            case k.x.ListItem:
              return y.a.createElement('li', null, t)
            default:
              return y.a.createElement(y.a.Fragment, null, t)
          }
        },
        L = (function () {
          function e(t, n, a) {
            var r = this
            l()(this, e),
              b()(this, '_renderChildren', function (e) {
                var t = e.text
                if (!t) return []
                var n = r.fromIndex,
                  a = []
                return (
                  r.children.forEach(function (r) {
                    n < r.fromIndex &&
                      a.push(
                        y.a.createElement(x.b, { key: ''.concat(n, ',').concat(r.fromIndex) }, t.slice(n, r.fromIndex)),
                      ),
                      r.rangeObject && a.push(r.render(e)),
                      (n = r.toIndex)
                  }),
                  n < r.toIndex &&
                    a.push(y.a.createElement(x.b, { key: ''.concat(n, ',').concat(r.toIndex) }, t.slice(n, r.toIndex))),
                  a
                )
              }),
              (this.fromIndex = t),
              (this.toIndex = n),
              (this.rangeObject = a),
              (this.children = [])
          }
          return (
            u()(e, [
              {
                key: 'insert',
                value: function (e) {
                  var t = this.children.find(function (t) {
                    return t.fromIndex <= e.fromIndex && t.toIndex >= e.toIndex
                  })
                  t
                    ? t.insert(e)
                    : (this.children.push(e),
                      this.children.sort(function (e, t) {
                        return e.fromIndex - t.fromIndex
                      }))
                },
              },
              {
                key: 'render',
                value: function (e) {
                  var t,
                    n = e.align,
                    a = e.color,
                    i = e.size,
                    o = e.style,
                    s = e.testID,
                    l = e.weight,
                    c = this._renderChildren(e),
                    u = ''.concat(this.fromIndex, ',').concat(this.toIndex)
                  return null !== (t = this.rangeObject) && void 0 !== t && t.styling_type
                    ? y.a.createElement(
                        P,
                        r()({}, e, {
                          fromIndex: this.fromIndex,
                          key: u,
                          stylingRange: this.rangeObject,
                          toIndex: this.toIndex,
                        }),
                        c,
                      )
                    : this.rangeObject
                    ? y.a.createElement(
                        T,
                        r()({}, e, {
                          entity: this.rangeObject,
                          fromIndex: this.fromIndex,
                          key: u,
                          toIndex: this.toIndex,
                        }),
                        c,
                      )
                    : y.a.createElement(x.b, { align: n, color: a, key: u, size: i, style: o, testID: s, weight: l }, c)
                },
              },
            ]),
            e
          )
        })(),
        A = (function (e) {
          m()(n, e)
          var t = v()(n)
          function n() {
            var e
            l()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              b()(p()(e), '_generateRichTextTree', function () {
                var t = e.props,
                  n = t.entities,
                  a = t.styling_ranges,
                  r = t.text,
                  i = [].concat(I()(null != a ? a : []), I()(null != n ? n : [])).sort(function (e, t) {
                    return t.to_index - t.from_index - (e.to_index - e.from_index)
                  }),
                  o = new L(0, (null == r ? void 0 : r.length) || 0)
                return (
                  i.forEach(function (e) {
                    o.insert(new L(e.from_index, e.to_index, e))
                  }),
                  o
                )
              }),
              e
            )
          }
          return (
            u()(n, [
              {
                key: 'render',
                value: function () {
                  return this._generateRichTextTree().render(this.props)
                },
              },
            ]),
            n
          )
        })(y.a.PureComponent),
        O = n('MWbm'),
        D = n('/yvb'),
        F = n('rHpw'),
        R = ['label']
      var N = F.a.create(function (e) {
          return { spaceBetween: { marginBottom: e.spaces.space16 }, detailText: { marginVertical: e.spaces.space16 } }
        }),
        B = function (e) {
          var t = e.actionDisabled,
            n = e.actionLabel,
            a = e.actionTestID,
            i = e.actionType,
            o = e.detailText,
            s = e.onAction,
            l = e.onNavigate,
            c = e.onSecondaryAction,
            u = e.secondaryActionDisabled,
            d = e.secondaryActionLabel,
            p = e.secondaryActionTestID,
            h = e.secondaryActionType,
            m = e.style,
            f = e.subtaskInputs
          if (!n && !d) return null
          var v = 'primaryOutlined' === h,
            _ = [
              { disabled: u, onPress: c, size: 'large', testID: p, type: null != h ? h : 'primaryText', label: d },
              { disabled: t, onPress: s, size: 'large', testID: a, type: null != i ? i : 'primaryFilled', label: n },
            ].filter(function (e) {
              var t = e.label
              return null != t
            })
          return (
            v && _.reverse(),
            y.a.createElement(
              O.a,
              { style: m },
              (null == o ? void 0 : o.text) &&
                f &&
                y.a.createElement(
                  A,
                  r()({}, o, {
                    color: 'gray700',
                    onNavigate: l,
                    size: 'subtext2',
                    style: N.detailText,
                    subtaskInputs: f,
                  }),
                ),
              y.a.createElement(
                O.a,
                null,
                _.map(function (e, t) {
                  var n = e.label,
                    a = C()(e, R)
                  return y.a.createElement(
                    D.a,
                    r()({ key: n, style: _.length > 1 && t < _.length - 1 ? N.spaceBetween : void 0 }, a),
                    n,
                  )
                }),
              ),
            )
          )
        },
        M = (n('ho0z'), n('+/5o')),
        V = n('UpKB'),
        U = n('kG2l'),
        j = n('0+0m'),
        z = n('1zbE'),
        H = n('ddV6'),
        W = n.n(H)
      n('Ysgh')
      function G(e) {
        var t = e.number
        return y.a.createElement(
          O.a,
          { style: q.badge },
          y.a.createElement(x.b, { color: 'buttonWhite', weight: 'bold' }, t),
        )
      }
      var q = F.a.create(function (e) {
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
        K = n('iKTg'),
        Y = n('jmcQ'),
        X = n('wz7L'),
        Q = n('xrkw'),
        J = n('vMn4'),
        Z = n('yZDr'),
        $ = n('+1/s'),
        ee = n('Lsrn'),
        te = n('k/Ka'),
        ne = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(te.a)(
            'svg',
            o()(
              o()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [ee.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            y.a.createElement(
              'g',
              null,
              y.a.createElement('path', {
                d: 'M19.75 22H4.25C3.01 22 2 20.99 2 19.75V4.25C2 3.01 3.01 2 4.25 2h15.5C20.99 2 22 3.01 22 4.25v15.5c0 1.24-1.01 2.25-2.25 2.25zM4.25 3.5c-.413 0-.75.336-.75.75v15.5c0 .413.337.75.75.75h15.5c.413 0 .75-.337.75-.75V4.25c0-.414-.337-.75-.75-.75H4.25z',
              }),
              y.a.createElement('path', {
                d: 'M12 14.496c-1.015 0-2.15-.115-2.898-.97-.623-.712-.828-1.79-.625-3.298.286-2.13 1.603-3.402 3.523-3.402s3.237 1.272 3.523 3.402c.203 1.507-.002 2.586-.625 3.3-.747.853-1.883.968-2.898.968zm0-6.17c-1.45 0-1.908 1.143-2.037 2.102-.14 1.04-.05 1.75.27 2.112.278.32.807.456 1.768.456s1.49-.137 1.77-.456c.317-.362.408-1.073.27-2.112-.132-.96-.59-2.102-2.04-2.102zm6.107 11.794c-.65-2.608-3.16-4.43-6.107-4.43s-5.458 1.82-6.108 4.432c-.107.437-.058.892.14 1.28.132.262.396.412.67.412.113 0 .23-.026.338-.08.37-.19.518-.64.33-1.01-.035-.068-.043-.155-.02-.24.48-1.94 2.394-3.294 4.65-3.294s4.17 1.354 4.652 3.293c.022.092.012.186-.03.256-.21.354-.094.815.263 1.026.12.07.252.105.382.105.256 0 .506-.13.646-.366.245-.412.315-.903.194-1.384z',
              }),
            ),
          )
        }
      ne.metadata = { width: 24, height: 24 }
      var ae = ne,
        re = n('4BrD'),
        ie = n('6s7X'),
        oe = {
          logo_apple: K.a,
          logo_google_g_color: Y.a,
          people_stroke: X.a,
          bar_chart: Q.a,
          money: J.a,
          sparkle_stroke: Z.a,
          topics_stroke: $.a,
          photo_person_stroke: ae,
          promoted_pill_stroke: re.a,
          information_circle: ie.a,
        },
        se = function (e) {
          var t = e.icon,
            n = e.style
          !(t in oe) &&
            t.startsWith('number_') &&
            (oe[t] = (function (e) {
              if (!e.startsWith('number_'))
                return function () {
                  return null
                }
              var t = e.split('number_'),
                n = W()(t, 2)[1]
              return function () {
                return y.a.createElement(G, { number: n })
              }
            })(t))
          var a = oe[t]
          return a ? y.a.createElement(a, { style: n }) : null
        },
        le = n('LbZ7'),
        ce = F.a.create(function (e) {
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
        ue = function (e) {
          var t = e.label,
            n = e.onNavigate,
            a = e.subtaskInputs
          return t
            ? y.a.createElement(
                le.a,
                { style: ce.separatorContainer, withGutter: !0 },
                y.a.createElement(O.a, { style: ce.separatorColumn }, y.a.createElement(O.a, { style: ce.separator })),
                y.a.createElement(
                  A,
                  r()({ style: ce.separatorText }, t, { onNavigate: n, size: 'headline2', subtaskInputs: a }),
                ),
                y.a.createElement(O.a, { style: ce.separatorColumn }, y.a.createElement(O.a, { style: ce.separator })),
              )
            : y.a.createElement(O.a, { style: ce.separator })
        },
        de = F.a.create(function (e) {
          return {
            header: { marginBottom: e.spaces.space12 },
            centerText: { textAlign: 'center' },
            contentArea: { marginHorizontal: e.spaces.space32 },
            contentAreaCompact: {
              paddingHorizontal: e.spaces.space32,
              margin: 'auto',
              minWidth: j.b + 64,
              maxWidth: j.b + 64,
            },
            checkboxText: { flexShrink: 1, paddingRight: e.spaces.space12, width: '100%' },
            option: { marginTop: e.spaces.space12, flexDirection: 'row', justifyContent: 'space-between' },
            primaryButton: { marginTop: e.spaces.space16 },
            formTextInput: { paddingHorizontal: 0 },
            button: { width: '100%', margin: 'auto', marginVertical: e.spaces.space12 },
            ssoButton: { width: j.b, height: e.spaces.space40 },
          }
        }),
        pe = ['button', 'displayType', 'onNavigate', 'style', 'subtaskId', 'subtaskInputs'],
        he = function (e) {
          var t = e.button,
            n = e.displayType,
            a = void 0 === n ? k.b.Default : n,
            i = e.onNavigate,
            o = e.style,
            s = e.subtaskId,
            l = e.subtaskInputs,
            c = C()(e, pe),
            u = t.icon,
            d = t.navigation_link,
            p = t.preferred_size,
            h = t.separator,
            m = s === k.q ? z.a.SignUp : z.a.LogIn,
            f = y.a.useCallback(
              function (e) {
                i(d)
              },
              [d, i],
            )
          return y.a.createElement(
            y.a.Fragment,
            null,
            (function () {
              switch (a) {
                case k.b.GoogleSSO:
                  return y.a.createElement(U.a, {
                    buttonSize: p ? Object(S.b)(p) : 'medium',
                    buttonState: m,
                    displayType: j.e.Button,
                    style: [de.button, de.ssoButton],
                  })
                case k.b.AppleSSO:
                  return y.a.createElement(V.a, {
                    buttonSize: p ? Object(S.b)(p) : 'medium',
                    buttonState: m,
                    style: [de.button, de.ssoButton],
                  })
                default:
                  return y.a.createElement(
                    D.a,
                    r()({}, c, {
                      icon: u && y.a.createElement(se, { icon: u.icon }),
                      onPress: f,
                      size: p ? Object(S.b)(p) : 'medium',
                      style: [de.button, o],
                      type: t.style ? Object(S.c)(t.style) : 'brandFilled',
                    }),
                    d.label,
                  )
              }
            })(),
            h ? y.a.createElement(ue, { label: h.label, onNavigate: i, subtaskInputs: l }) : null,
          )
        },
        me = n('7N4s'),
        fe = n('TIdA'),
        ve = n('A91F'),
        _e = n('IMA+'),
        be = F.a.create(function (e) {
          return {
            buttonRightAligned: { marginHorizontal: '-'.concat(e.spaces.space8), marginVertical: 0 },
            containerRightAlignedButton: { marginLeft: e.spaces.space20 },
            secondaryTextRightAlignedButton: { flexBasis: 0, flexGrow: 1 },
            subHeaderRightAlignedButton: { flexDirection: 'row', flexWrap: 'wrap' },
            headingContainer: { marginVertical: e.spaces.space20 },
            subHeader: { marginTop: e.spaces.space8 },
          }
        }),
        ge = function (e) {
          var t,
            n,
            a,
            i,
            o,
            s,
            l,
            c,
            u,
            d = e.header,
            p = e.onNavigate,
            h = e.primaryTextProp,
            m = e.primaryTextTestID,
            f = e.secondaryTextProp,
            v = e.subtaskInputs,
            _ = e.userInfo,
            b = e.withHeaderImage,
            g =
              (null == d ? void 0 : d.header_button) &&
              !(
                !(t = d.header_button).icon ||
                t.style !== k.d.Text ||
                (null !== (n = t.navigation_link) && void 0 !== n && n.label)
              ),
            w = y.a.useContext(me.b).isModal
          return (
            d
              ? ((o = d.user),
                (s = d.header_image),
                (a = d.primary_text),
                (i = d.secondary_text),
                (l = 10 * F.a.theme.lineHeightsPx.body),
                (c = s ? (l * s.image.image_info.width) / s.image.image_info.height : 'initial'),
                (u = b && s && 'icon' === s.image_type))
              : ((a = 'string' == typeof h ? { text: h } : h), (i = 'string' == typeof f ? { text: f } : f)),
            s || a || i || o
              ? y.a.createElement(
                  O.a,
                  null,
                  b && s
                    ? y.a.createElement(
                        O.a,
                        {
                          style: {
                            marginHorizontal:
                              'full_width' === s.image_type || 'full_bleed_top' === s.image_type
                                ? '-'.concat(F.a.theme.spaces.space32)
                                : 'auto',
                            height: u ? l : 'initial',
                            width: u ? c : 'initial',
                          },
                        },
                        y.a.createElement(fe.a, {
                          accessibilityLabel: s.image.image_info.alt_text || '',
                          aspectMode: ve.a.exact(s.image.image_info.width / s.image.image_info.height),
                          image: s.image.image_info,
                        }),
                      )
                    : null,
                  y.a.createElement(
                    O.a,
                    { style: be.headingContainer },
                    a
                      ? y.a.createElement(
                          A,
                          r()({}, a, {
                            nativeID: M.b,
                            onNavigate: p,
                            size: w ? 'title2' : 'title3',
                            subtaskInputs: v,
                            testID: m,
                            weight: 'bold',
                          }),
                        )
                      : null,
                    i || (null != d && d.header_button)
                      ? y.a.createElement(
                          O.a,
                          { style: [be.subHeader, g && be.subHeaderRightAlignedButton] },
                          y.a.createElement(
                            O.a,
                            { style: g && be.secondaryTextRightAlignedButton },
                            i
                              ? y.a.createElement(A, r()({}, i, { color: 'gray700', onNavigate: p, subtaskInputs: v }))
                              : null,
                          ),
                          null != d && d.header_button
                            ? y.a.createElement(
                                O.a,
                                { style: g && be.containerRightAlignedButton },
                                y.a.createElement(he, {
                                  button: d.header_button,
                                  onNavigate: p,
                                  style: g && be.buttonRightAligned,
                                  subtaskInputs: v,
                                }),
                              )
                            : null,
                        )
                      : null,
                    o
                      ? null != _
                        ? _
                        : y.a.createElement(_e.a, {
                            avatarUri: o.profile_image_url_https,
                            displayMode: 'UserCompact',
                            name: o.name,
                            screenName: o.screen_name,
                            userId: o.id_str,
                          })
                      : null,
                  ),
                )
              : null
          )
        },
        ye = n('mCZD'),
        ke = 'ActionListNextButton',
        we = 'ActionListSkipButton',
        Ce = n('csss'),
        Ee = n('h0NW')
      function Ie(e) {
        var t,
          n,
          a = e.actionItem,
          i = e.link,
          o = e.onNavigate,
          s = e.subtaskId,
          l = e.subtaskInputs,
          c = e.updateFlow,
          u = a.action_data.link_data,
          d = y.a.useCallback(
            function (e) {
              e.preventDefault(), c(s, { link: i.link_id }), o(i)
            },
            [i, o, s, c],
          )
        return y.a.createElement(
          Ce.a,
          r()(
            {
              description: y.a.createElement(
                A,
                r()({}, u.detail_text, { color: 'gray700', size: 'subtext2', subtaskInputs: l }),
              ),
              label: y.a.createElement(
                A,
                r()({}, u.text, {
                  size: 'headline2',
                  subtaskInputs: l,
                  text:
                    null !== (t = null === (n = u.text) || void 0 === n ? void 0 : n.text) && void 0 !== t
                      ? t
                      : u.link.label,
                }),
              ),
              link: '#',
              onPress: d,
            },
            Te(a.action_data.link_data.icon),
          ),
        )
      }
      function xe(e) {
        var t = e.actionItem,
          n = e.onNavigate,
          a = e.subtaskInputs
        return y.a.createElement(
          Ce.a,
          r()(
            {
              description: y.a.createElement(
                A,
                r()({}, t.action_data.text_data.detail_text, { color: 'gray700', size: 'subtext2', subtaskInputs: a }),
              ),
              label: y.a.createElement(
                A,
                r()({}, t.action_data.text_data.text, { onNavigate: n, size: 'headline2', subtaskInputs: a }),
              ),
            },
            Te(t.action_data.text_data.icon),
          ),
        )
      }
      function Se(e) {
        var t = e.actionItems,
          n = e.onNavigate,
          a = e.subtaskInputs,
          i = t.map(function (e) {
            var t,
              i,
              o = 'text' === e.action_type ? e.action_data.text_data : e.action_data.link_data
            return {
              label: y.a.createElement(
                A,
                r()({}, o.text, {
                  onNavigate: n,
                  subtaskInputs: a,
                  text:
                    'text' === e.action_type
                      ? e.action_data.text_data.text.text
                      : null !== (t = null === (i = e.action_data.link_data.text) || void 0 === i ? void 0 : i.text) &&
                        void 0 !== t
                      ? t
                      : e.action_data.link_data.link.label,
                  weight: 'bold',
                }),
              ),
              description: o.detail_text
                ? y.a.createElement(
                    A,
                    r()({}, o.detail_text, { color: 'gray700', style: Pe.bulletListDescription, subtaskInputs: a }),
                  )
                : null,
              decoration: o.icon ? y.a.createElement(se, { icon: o.icon.icon, style: Pe.bulletIcon }) : null,
            }
          })
        return y.a.createElement(Ee.a, { items: i })
      }
      function Te(e) {
        return {
          thumbnail: e
            ? y.a.createElement(x.b, { size: 'headline2', style: Pe.icon }, y.a.createElement(se, { icon: e.icon }))
            : null,
          thumbnailSize: 'medium',
        }
      }
      var Pe = F.a.create(function (e) {
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
        Le = function (e) {
          var t,
            n,
            a,
            i = e.onNavigate,
            o = e.passthroughOcfScreenProps,
            s = e.subtask,
            l = s.action_items,
            c = s.header,
            u = s.next_link,
            d = s.skip_link,
            p = s.style,
            h = e.subtaskId,
            m = e.subtaskInputs,
            f = e.updateFlow
          return y.a.createElement(
            ye.a,
            r()({}, o, {
              appBarPosition:
                'full_bleed_top' ===
                (null == c || null === (t = c.header_image) || void 0 === t ? void 0 : t.image_type)
                  ? 'absolute'
                  : void 0,
              appBarWithBackground:
                'full_bleed_top' !==
                (null == c || null === (n = c.header_image) || void 0 === n ? void 0 : n.image_type),
              footer: y.a.createElement(B, {
                actionLabel: null == u ? void 0 : u.label,
                actionTestID: ke,
                onAction: function () {
                  u && (f(h, { link: u.link_id }), i(u))
                },
                onSecondaryAction: function () {
                  d && (f(h, { link: d.link_id }), i(d))
                },
                secondaryActionLabel: null == d ? void 0 : d.label,
                secondaryActionTestID: we,
              }),
              header: y.a.createElement(ge, { header: c, onNavigate: i, subtaskInputs: m, withHeaderImage: !0 }),
              hideLogo:
                'full_bleed_top' ===
                (null == c || null === (a = c.header_image) || void 0 === a ? void 0 : a.image_type),
              providePadding: !0,
            }),
            p === k.a.BulletList
              ? y.a.createElement(Se, r()({}, e, { actionItems: l }))
              : l.map(function (t, n) {
                  return y.a.createElement(
                    O.a,
                    { key: n },
                    'text' === t.action_type
                      ? y.a.createElement(xe, r()({}, e, { actionItem: t }))
                      : y.a.createElement(Ie, r()({}, e, { actionItem: t, link: t.action_data.link_data.link })),
                  )
                }),
          )
        },
        Ae = n('eb3s'),
        Oe = (function (e) {
          m()(n, e)
          var t = v()(n)
          function n() {
            var e
            l()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              b()(p()(e), '_handleConfirm', function () {
                var t = e.props.subtask
                e._handleButtonClick(t.next_link)
              }),
              b()(p()(e), '_handleCancel', function () {
                var t = e.props.subtask.cancel_link
                t && e._handleButtonClick(t)
              }),
              b()(p()(e), '_handleButtonClick', function (t) {
                var n = e.props,
                  a = n.onNavigate,
                  r = n.subtaskId
                ;(0, n.updateFlow)(r, { link: t.link_id }), a(t)
              }),
              e
            )
          }
          return (
            u()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.onNavigate,
                    n = e.subtask,
                    a = e.subtaskInputs,
                    i = n.primary_text
                      ? y.a.createElement(
                          A,
                          r()({}, n.primary_text, { nativeID: M.b, onNavigate: t, subtaskInputs: a }),
                        )
                      : void 0,
                    o = n.secondary_text
                      ? y.a.createElement(A, r()({}, n.secondary_text, { onNavigate: t, subtaskInputs: a }))
                      : void 0,
                    s = n.cancel_link,
                    l = n.next_link,
                    c = s && s.label
                  return y.a.createElement(Ae.a, {
                    cancelButtonLabel: c,
                    confirmButtonLabel: l && l.label,
                    headline: i,
                    onCancel: this._handleCancel,
                    onConfirm: this._handleConfirm,
                    onMaskClick: this._handleCancel,
                    text: o,
                    withCancelButton: !!c,
                  })
                },
              },
            ]),
            n
          )
        })(y.a.Component),
        De = n('fs1G'),
        Fe = n('cmUU'),
        Re = (function (e) {
          m()(n, e)
          var t = v()(n)
          function n(e) {
            var a
            return (
              l()(this, n),
              (a = t.call(this, e)),
              b()(p()(a), '_handleCtaClick', function (e) {
                var t = a.props,
                  n = t.onNavigate,
                  r = t.subtaskId
                ;(0, t.updateFlow)(r, { link: e.link_id }), n(e)
              }),
              b()(p()(a), '_handlePrimaryActionClick', function () {
                a.setState({ downloadLinkClicked: !0 }), a._handleCtaClick(a.props.subtask.primary_action_link)
              }),
              b()(p()(a), '_handleSecondaryActionClick', function () {
                var e = a.props.subtask.secondary_action_link
                e && a._handleCtaClick(e)
              }),
              (a.state = { downloadLinkClicked: !1 }),
              a
            )
          }
          return (
            u()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.onNavigate,
                    n = e.passthroughOcfScreenProps,
                    a = e.subtask,
                    i = e.subtaskInputs,
                    o = this.state.downloadLinkClicked,
                    s = a.primary_text
                      ? y.a.createElement(
                          A,
                          r()({}, a.primary_text, { nativeID: M.b, onNavigate: t, subtaskInputs: i }),
                        )
                      : null,
                    l = !o || !a.primary_action_text_after_click,
                    c = (o && a.primary_action_text_after_click) || a.primary_action_link.label,
                    u = a.primary_image_url
                      ? y.a.createElement(fe.a, {
                          accessibilityLabel: '',
                          aspectMode: ve.a.exact(1),
                          image: a.primary_image_url || '',
                        })
                      : null,
                    d = a.secondary_text
                      ? y.a.createElement(A, r()({}, a.secondary_text, { onNavigate: t, subtaskInputs: i }))
                      : null,
                    p = y.a.createElement(O.a, null, u, d)
                  return y.a.createElement(
                    ye.a,
                    r()({ hideLogo: !0 }, n),
                    y.a.createElement(Fe.a, {
                      actionLabel: c || '',
                      actionType: Object(S.c)(a.primary_action_style),
                      headline: s,
                      onAction: l ? this._handlePrimaryActionClick : De.a,
                      onClose: De.a,
                      onSecondaryAction: this._handleSecondaryActionClick,
                      secondaryActionLabel: (a.secondary_action_link || {}).label,
                      secondaryActionType: a.secondary_action_style && Object(S.c)(a.secondary_action_style),
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
        })(y.a.Component),
        Ne = n('ZS3b'),
        Be = n('jhWN'),
        Me = n('jV+4'),
        Ve = n('5mJL'),
        Ue = F.a.create(function (e) {
          return {
            userContainerStacked: { alignItems: 'center', marginTop: e.spaces.space8, marginBottom: e.spaces.space16 },
            userAvatarStacked: { marginBottom: e.spaces.space8 },
            userNameStacked: { alignItems: 'center' },
            avatarColumnCentered: { justifyContent: 'center' },
          }
        }),
        je = function (e) {
          var t = e.displayType,
            n = void 0 === t ? k.D.stacked : t,
            a = e.user,
            i = e.userCaption
          if (!a) return null
          var o = function (e) {
              return y.a.createElement(Be.a, {
                accessibilityHidden: !0,
                focusable: !1,
                size: 'xxLarge',
                style: e,
                uri: a.profile_image_url_https,
              })
            },
            s = function (t) {
              var n = e.onNavigate,
                o = e.subtaskInputs
              return y.a.createElement(
                y.a.Fragment,
                null,
                y.a.createElement(Me.a, {
                  isProtected: a.protected,
                  isVerified: a.verified,
                  name: a.name,
                  screenName: i ? void 0 : a.screen_name,
                  withStackedLayout: !0,
                }),
                i ? y.a.createElement(A, r()({}, i, { color: 'gray700', onNavigate: n, subtaskInputs: o })) : null,
              )
            }
          switch (n) {
            case k.D.stacked:
              return y.a.createElement(
                O.a,
                { style: Ue.userContainerStacked },
                o(Ue.userAvatarStacked),
                s(Ue.userNameStacked),
              )
            case k.D.compact:
              return y.a.createElement(
                Ve.a,
                { avatarCell: o(), avatarCellStyle: Ue.avatarColumnCentered, cellStyle: Ue.avatarColumnCentered },
                s(),
              )
            default:
              return null
          }
        },
        ze = 'OCF_CallToAction_Button',
        He = n('feu+'),
        We = (function (e) {
          m()(n, e)
          var t = v()(n)
          function n() {
            var e
            l()(this, n)
            for (var a = arguments.length, i = new Array(a), s = 0; s < a; s++) i[s] = arguments[s]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              b()(p()(e), '_getCtaButtonProps', function () {
                var t = e.props.subtask,
                  n = t.buttons || [],
                  a = W()(n, 3),
                  r = a[0],
                  i = (r = void 0 === r ? {} : r).navigation_link,
                  s = r.style,
                  l = a[1],
                  c = (l = void 0 === l ? {} : l).navigation_link,
                  u = l.style,
                  d = a[2],
                  p = (d = void 0 === d ? {} : d).navigation_link,
                  h = d.style,
                  m = i || t.primary_action_link,
                  f = s || t.primary_action_style,
                  v = {
                    actionLabel: m.label || '',
                    actionType: f && Object(S.c)(f),
                    onAction: m && e._handleCtaClick(m),
                  },
                  _ = c || t.secondary_action_link,
                  b = u || t.secondary_action_style,
                  g = {
                    secondaryActionLabel: _ ? _.label : void 0,
                    secondaryActionType: b && Object(S.c)(b),
                    onSecondaryAction: _ && e._handleCtaClick(_),
                  },
                  y = {
                    tertiaryActionLabel: (p || {}).label,
                    tertiaryActionType: h && Object(S.c)(h),
                    onTertiaryAction: p && e._handleCtaClick(p),
                  }
                return o()(o()(o()({}, v), g), y)
              }),
              b()(p()(e), '_getCtaText', function () {
                var t = e.props,
                  n = t.onNavigate,
                  a = t.subtask,
                  i = a.detail_text,
                  o = a.header,
                  s = a.primary_text,
                  l = a.secondary_text,
                  c = t.subtaskInputs
                return {
                  primaryText: y.a.createElement(
                    A,
                    r()({}, (o && o.primary_text) || s, { nativeID: M.b, onNavigate: n, subtaskInputs: c }),
                  ),
                  secondaryText:
                    o || l
                      ? y.a.createElement(A, r()({}, (o && o.secondary_text) || l, { onNavigate: n, subtaskInputs: c }))
                      : null,
                  detailText: i ? y.a.createElement(A, r()({}, i, { onNavigate: n, subtaskInputs: c })) : null,
                }
              }),
              b()(p()(e), '_handleCtaClick', function (t) {
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
            u()(n, [
              {
                key: 'render',
                value: function () {
                  var e,
                    t,
                    n,
                    a = this.props,
                    i = a.onNavigate,
                    s = a.passthroughOcfScreenProps,
                    l = a.subtask,
                    c = a.subtaskInputs,
                    u = s.onBackClick,
                    d = this._getCtaText(),
                    p = d.detailText,
                    h = d.primaryText,
                    m = d.secondaryText,
                    f = l.style === k.f.HalfCover
                  if (l.header_image) {
                    var v = l.header_image.image.image_info,
                      _ = { url: v.url, height: v.height, width: v.width }
                    ;(t = function (e) {
                      var t = e.style
                      return y.a.createElement(
                        O.a,
                        { style: t },
                        y.a.createElement(fe.a, { accessibilityLabel: v.alt_text || '', image: _ }),
                      )
                    }),
                      (n = 'illustration')
                  } else f && (n = 'none')
                  var b = o()(
                    {
                      children: y.a.createElement(je, {
                        onNavigate: i,
                        subtaskInputs: c,
                        user: null === (e = l.header) || void 0 === e ? void 0 : e.user,
                      }),
                      footer: p,
                      graphic: t,
                      graphicDisplayMode: n,
                      headline: h,
                      onClose: De.a,
                      primaryButtonTestID: ze,
                      subtext: m,
                      withCloseButton: !1,
                    },
                    this._getCtaButtonProps(),
                  )
                  return f
                    ? y.a.createElement(He.a, r()({}, b, { isFullHeightOnMobile: !1 }))
                    : y.a.createElement(
                        ye.a,
                        r()({ hideAppBar: !u, hideLogo: !0 }, s),
                        y.a.createElement(Fe.a, b),
                        this.props.errorDialog,
                      )
                },
              },
            ]),
            n
          )
        })(y.a.Component),
        Ge = n('rxPX'),
        qe = n('0KEI'),
        Ke = n('auX9'),
        Ye = n('kGix'),
        Xe = Object(Ge.a)()
          .propsFromState(function () {
            return { fetchStatus: Ke.g, multiAccountUsers: Ke.j }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandlerMultiListFetch: Object(qe.createLocalApiErrorHandlerWithContextFactory)(
                'ACCOUNT_SWITCHER_MULTI_LIST_FETCH',
              ),
              fetchMultiAccountListIfNeeded: Ke.d,
            }
          })
          .adjustStateProps(function (e) {
            var t = e.fetchStatus,
              n = e.multiAccountUsers
            return { fetchStatus: t === Ye.a.NONE ? Ye.a.LOADING : t, multiAccountUsers: n }
          }),
        Qe = n('v//M'),
        Je = (function (e) {
          m()(n, e)
          var t = v()(n)
          function n() {
            var e
            l()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              b()(p()(e), '_executeSubtaskAction', function () {
                var t = e.props,
                  n = t.navigationLink,
                  a = t.onError,
                  r = t.onNavigate,
                  i = t.subtaskAction
                try {
                  i()
                    .then(function () {
                      return r(n, !0)
                    })
                    .catch(a)
                } catch (o) {
                  a(o)
                }
              }),
              e
            )
          }
          return (
            u()(n, [
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
        })(y.a.Component)
      b()(Je, 'defaultProps', { onError: De.a })
      var Ze = n('v6aA'),
        $e = (function (e) {
          m()(n, e)
          var t = v()(n)
          function n() {
            var e
            l()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              b()(p()(e), '_render', function () {
                var t = e.props,
                  n = t.multiAccountUsers,
                  a = t.onNavigate,
                  r = t.subtask,
                  i = t.subtaskId,
                  o = t.updateFlow,
                  s = r.false_link,
                  l = r.true_link,
                  c = r.user_id,
                  u =
                    n.filter(function (e) {
                      return e.user_id === c
                    }).length > 0
                return y.a.createElement(Je, {
                  navigationLink: u ? l : s,
                  onNavigate: a,
                  subtaskAction: function () {
                    return o(i, { link: u ? l.link_id : s.link_id }), Promise.resolve()
                  },
                  subtaskId: i,
                })
              }),
              b()(p()(e), '_handleFetch', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandlerMultiListFetch
                ;(0, t.fetchMultiAccountListIfNeeded)().catch(n())
              }),
              e
            )
          }
          return (
            u()(n, [
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
                    ? y.a.createElement(Qe.a, {
                        fetchStatus: e,
                        onRequestRetry: this._handleFetch,
                        render: this._render,
                      })
                    : this._render()
                },
              },
            ]),
            n
          )
        })(y.a.PureComponent)
      b()($e, 'contextType', Ze.a)
      var et = Xe($e),
        tt = (n('LJOr'), n('vrRf'), n('jQ3i'), n('x4t0'), n('kFen'), n('qd3W'), n('zrOZ')),
        nt = n('VwDm'),
        at = 'ChoiceSelectionInput',
        rt = 'ChoiceSelectionNextButton',
        it = 'ChoiceSelectionSkipButton',
        ot = n('6OUF'),
        st = n('XiMS'),
        lt = n('hznd'),
        ct = n('fyvP'),
        ut = (function (e) {
          m()(n, e)
          var t = v()(n)
          function n() {
            var e, a, r
            l()(this, n)
            for (var i = arguments.length, o = new Array(i), s = 0; s < i; s++) o[s] = arguments[s]
            return (
              (r = t.call.apply(t, [this].concat(o))),
              b()(p()(r), 'state', {
                selectedChoices:
                  null !==
                    (e =
                      null !==
                        (a = Object(S.e)(r.props.subtaskInputs, {
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
              b()(p()(r), '_handleCancelButtonClick', function () {
                var e = r.props,
                  t = e.onNavigate,
                  n = e.subtask.skip_link,
                  a = e.subtaskId,
                  i = e.updateFlow
                n && (i(a, { link: n.link_id }), t(n))
              }),
              b()(p()(r), '_handleNextButtonClick', function () {
                var e = r.props,
                  t = e.onNavigate,
                  n = e.subtask.next_link,
                  a = e.subtaskId,
                  i = e.updateFlow,
                  o = r.state.selectedChoices
                n && (i(a, { link: n.link_id, selected_choices: o }), t(n))
              }),
              b()(p()(r), '_handleRadioChange', function (e, t) {
                r.setState({ selectedChoices: [t] })
              }),
              b()(p()(r), '_handleSearchTextChange', function (e) {
                r.setState({ searchText: e.target.value })
              }),
              b()(p()(r), '_handleSearchTextClear', function () {
                r.setState({ searchText: '' })
              }),
              b()(p()(r), '_onCheckboxChange', function (e) {
                return function (t) {
                  r._handleMultiSelection(e, t)
                }
              }),
              r
            )
          }
          return (
            u()(
              n,
              [
                {
                  key: 'render',
                  value: function () {
                    var e = this.props,
                      t = e.onNavigate,
                      n = e.passthroughOcfScreenProps,
                      a = e.subtask,
                      i = a.detail_text,
                      o = a.header,
                      s = a.next_link,
                      l = a.primary_text,
                      c = a.search,
                      u = a.secondary_text,
                      d = a.skip_link,
                      p = e.subtaskInputs,
                      h = this.state.searchText
                    return y.a.createElement(
                      ye.a,
                      r()({}, n, {
                        footer: y.a.createElement(B, {
                          actionDisabled: !this._verifyBothTypesValidity(),
                          actionLabel: null == s ? void 0 : s.label,
                          actionTestID: rt,
                          onAction: this._handleNextButtonClick,
                          onSecondaryAction: this._handleCancelButtonClick,
                          secondaryActionLabel: null == d ? void 0 : d.label,
                          secondaryActionTestID: it,
                        }),
                        header: y.a.createElement(ge, {
                          header: o,
                          onNavigate: t,
                          primaryTextProp: l,
                          secondaryTextProp: u,
                          subtaskInputs: p,
                          withHeaderImage: !0,
                        }),
                        providePadding: !0,
                      }),
                      c &&
                        y.a.createElement(ot.a, {
                          Icon: nt.a,
                          autoFocus: c.is_focused,
                          isCompact: !0,
                          onChange: this._handleSearchTextChange,
                          onClear: this._handleSearchTextClear,
                          placeholder: c.hint_text,
                          style: mt.searchBox,
                          testID: at,
                          value: h,
                          withClearButton: !0,
                        }),
                      y.a.createElement(O.a, { style: mt.choicesContainer }, this._renderChoices()),
                      i && y.a.createElement(A, r()({}, i, { onNavigate: t, subtaskInputs: p })),
                    )
                  },
                },
                {
                  key: '_renderCheckboxQuestion',
                  value: function (e) {
                    var t = this.props,
                      n = t.onNavigate,
                      a = t.subtaskInputs,
                      i = this.state.selectedChoices.indexOf(e.id) > -1
                    return y.a.createElement(
                      O.a,
                      { accessibilityRole: 'label', key: e.id, style: [de.option, mt.checkboxRow, mt.cursor] },
                      y.a.createElement(
                        A,
                        r()({}, e.text, { onNavigate: n, style: de.checkboxText, subtaskInputs: a }),
                      ),
                      y.a.createElement(st.a, { checked: i, onChange: this._onCheckboxChange(e.id) }),
                    )
                  },
                },
                {
                  key: '_renderChoices',
                  value: function () {
                    var e = this,
                      t = this.props,
                      n = t.onNavigate,
                      a = t.subtask,
                      i = t.subtaskInputs,
                      o = a.search,
                      s = a.selection_type,
                      l = a.style,
                      c = (function (e, t) {
                        var n = e.choices,
                          a = e.search,
                          r = e.sections
                        if (a && r && r.length && !t) {
                          var i = r
                            .flatMap(function (e) {
                              return e.item_ids
                            })
                            .filter(function (e) {
                              return 'string' == typeof e
                            })
                          if (i.length) {
                            var o = Object(tt.a)(i)
                            return {
                              choices: n.filter(function (e) {
                                return o.has(e.id)
                              }),
                              hasMore: !0,
                            }
                          }
                        }
                        if (a && t)
                          return (function (e, t) {
                            var n = dt(t),
                              a = e.filter(function (e) {
                                return dt(e.text.text).includes(n)
                              })
                            if (a.length > 50) return { choices: a.slice(0, 50), hasMore: !0 }
                            return { choices: a, hasMore: !1 }
                          })(n, t)
                        return { choices: n, hasMore: !1 }
                      })(a, this.state.searchText).choices
                    if (0 === c.length && o)
                      return y.a.createElement(A, r()({}, o.no_results_text, { onNavigate: n, subtaskInputs: i }))
                    if ('boxed' === l)
                      switch (s) {
                        case 'single_select':
                          return y.a.createElement(
                            O.a,
                            { style: mt.tileContainer },
                            y.a.createElement(lt.a, {
                              name: 'single-choice',
                              onChange: this._handleRadioChange,
                              options: c.map(function (e) {
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
                          return y.a.createElement(
                            y.a.Fragment,
                            null,
                            c.map(function (t) {
                              return e._renderCheckboxQuestion(t)
                            }),
                          )
                        case 'single_select':
                          var u = c.map(function (e) {
                            var t = e.id,
                              n = e.subtext
                            return { label: e.text.text, value: t, helpText: null == n ? void 0 : n.text }
                          })
                          return y.a.createElement(
                            y.a.Fragment,
                            null,
                            y.a.createElement(ct.a, {
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
        })(y.a.Component)
      function dt(e) {
        return e.toLowerCase().normalize('NFD')
      }
      var pt,
        ht,
        mt = F.a.create(function (e) {
          return {
            searchBox: { marginBottom: e.spaces.space16 },
            checkboxRow: { justifyContent: 'space-between' },
            choicesContainer: { marginBottom: e.spaces.space16 },
            cursor: { cursor: 'pointer' },
            tileContainer: { marginTop: e.spaces.space12 },
          }
        }),
        ft = (n('WNMA'), n('zh9S')),
        vt = n('9D1O'),
        _t = n('1YZw'),
        bt = n('G6rE'),
        gt = n('oEGd'),
        yt = n('hqKg'),
        kt = n('RqPI'),
        wt = function (e) {
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
        Et = wt('country_code'),
        It = Object(yt.createSelector)(
          ((pt = 'input'),
          (ht = {}),
          function (e, t) {
            return (t.location.state && t.location.state[pt]) || ht
          }),
          wt('input_flow_data'),
          S.k,
        ),
        xt = wt('return_path'),
        St = wt('is_native'),
        Tt = wt('test_country_code'),
        Pt = wt('target_user_id'),
        Lt = Object(yt.createSelector)(
          function (e, t) {
            return wt('overrides')(e, t)
          },
          function (e) {
            return Object(S.d)(e)
          },
        ),
        At = Object(yt.createStructuredSelector)({
          currentSubtask: vt.k,
          previouslySubmittedSubtaskId: vt.q,
          countryCode: Et,
          debugOverrides: Lt,
          isNative: St,
          testCountryCode: Tt,
          flowName: Ct,
          inputFlowData: It,
          returnPath: xt,
          subtasks: vt.w,
          flowToken: vt.n,
          fetchStatus: vt.m,
          previousNavigableSubtaskId: vt.p,
          subtaskInputs: vt.v,
          failureMessage: vt.l,
          shouldAbort: vt.r,
          shouldEndFlow: vt.s,
          startLocation: vt.t,
          submitFailed: vt.u,
          targetUserId: Pt,
          loginReturnPath: kt.r,
        }),
        Ot = Object(gt.d)(At, function (e) {
          var t = e.ocfModule
          return {
            addToast: _t.b,
            callInteractiveSpinnerPath: vt.a,
            callOnboardingPath: vt.b,
            clearFlow: t.clearFlow,
            createLocalApiErrorHandler: Object(qe.createLocalApiErrorHandlerWithContextFactory)('OCF_FLOW'),
            removeContacts: vt.j,
            fetchTemporaryPassword: vt.d,
            fetchUsers: bt.e.fetchMany,
            navigateSubtask: vt.h,
            startFlow: t.startFlow,
            submitFlow: t.submitFlow,
            updateFlow: t.updateFlow,
            googleAnalyticsPageView: ft.a,
            googleAnalyticsSendEvent: ft.b,
            scribeAction: ft.c,
            scribePageImpression: ft.d,
            verifyCredentials: kt.A,
          }
        }),
        Dt = {
          createLocalApiErrorHandler: Object(qe.createLocalApiErrorHandlerWithContextFactory)('CONTACTS_SYNC'),
          uploadAddressBook: function (e) {
            return function (t, n, a) {
              return a.api.Contacts.uploadAddressBook(e)
            }
          },
        },
        Ft = Object(gt.b)(Dt),
        Rt = n('SrIh'),
        Nt = n('Irs7'),
        Bt = (function (e) {
          m()(n, e)
          var t = v()(n)
          function n() {
            var e
            l()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              b()(p()(e), '_handleCtaClick', function (t) {
                var n = e.props,
                  a = n.onNavigate,
                  r = n.subtaskId
                ;(0, n.updateFlow)(r, { link: t.link_id }), a(t)
              }),
              b()(p()(e), '_handlePrimaryActionClick', function () {
                try {
                  window.navigator.contacts
                    .select(['name', 'email', 'tel'], { multiple: !0 })
                    .then(e._handleContactResults)
                } catch (t) {
                  Object(Rt.a)(t), e._handleSecondaryActionClick()
                }
              }),
              b()(p()(e), '_handleContactResults', function (t) {
                var n = e.props,
                  a = n.analytics,
                  r = n.createLocalApiErrorHandler,
                  i = n.uploadAddressBook,
                  o = t.map(function (e) {
                    var t = e.email,
                      n = e.name,
                      a = e.tel
                    return { name: n[0] || '', email_addresses: t, phone_numbers: a }
                  })
                if (0 === o.length) return a.scribeAction('cancel')
                a.scribe({ action: 'success', data: { event_value: o.length } }),
                  i({ contacts: o }).catch(r()),
                  e._handleCtaClick(e.props.subtask.next_link)
              }),
              b()(p()(e), '_handleSecondaryActionClick', function () {
                var t = e.props.subtask.skip_link
                t && e._handleCtaClick(t)
              }),
              e
            )
          }
          return (
            u()(n, [
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
                    i = e.subtaskInputs,
                    o = a.detail_text
                      ? y.a.createElement(A, r()({}, a.detail_text, { onNavigate: t, subtaskInputs: i }))
                      : null
                  return y.a.createElement(
                    ye.a,
                    r()({ hideLogo: !0 }, n),
                    y.a.createElement(Fe.a, {
                      actionLabel: a.next_link.label || '',
                      footer: o,
                      headline: a.primary_text || '',
                      onAction: this._handlePrimaryActionClick,
                      onClose: De.a,
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
        })(y.a.Component),
        Mt = Object(Nt.a)(Ft(Bt), { element: 'contacts_sync' }),
        Vt = n('6/RC'),
        Ut = Object(yt.createSelector)(
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
        jt = {
          createLocalApiErrorHandler: Object(qe.createLocalApiErrorHandlerWithContextFactory)('EMAIL_CONTACTS_SYNC'),
          importStatus: vt.e,
          scribeAction: ft.c,
          syncContacts: vt.y,
        },
        zt = Object(gt.f)(Ut, jt),
        Ht = n('3XMw'),
        Wt = n.n(Ht),
        Gt = n('lUZE'),
        qt = n('8jkQ'),
        Kt = n('0zXz'),
        Yt = Wt.a.cea71013,
        Xt = (function (e) {
          m()(n, e)
          var t = v()(n)
          function n(e) {
            var a
            return (
              l()(this, n),
              (a = t.call(this, e)),
              b()(p()(a), '_startContactImports', function (e) {
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
              b()(p()(a), '_handlePrimaryActionClick', function () {
                var e = a.props.subtask,
                  t = e.authorization_url
                if (e.open_in_new_tab && Vt.canUseDOM) {
                  var n = window.innerWidth,
                    r = 'width=500,height=500,top=0,left='.concat(n - 500, ',toolbar=no,location=yes')
                  window.open(t, 'twitter_oauth', r).focus()
                } else qt.b.navigateTo(t)
              }),
              b()(p()(a), '_handleTertiaryActionClick', function () {
                var e = a.props,
                  t = e.onNavigate,
                  n = e.subtask,
                  r = e.subtaskId,
                  i = e.updateFlow,
                  o = n.skip_link
                i(r, { link: o.link_id }), t(o)
              }),
              b()(p()(a), '_scribeOAuthAction', function (e) {
                ;(0,
                a.props
                  .scribeAction)({ page: 'onboarding', section: 'email_contacts_sync', component: 'oauth_prompt', element: 'permission', action: e })
              }),
              b()(p()(a), '_handleEvent', function (e) {
                if (e.origin === 'https://'.concat(window.location.hostname)) {
                  var t = o()(
                    { callback_url: 'https://'.concat(window.location.hostname).concat(window.location.pathname) },
                    e.data,
                  )
                  !t.error && t.state && a._startContactImports(t)
                }
              }),
              b()(p()(a), '_pollImportStatus', function () {
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
            u()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.importError,
                    n = e.location,
                    a = e.onNavigate,
                    r = e.passthroughOcfScreenProps.history,
                    i = e.startImport,
                    o = e.subtask,
                    s = e.subtaskId,
                    l = e.updateFlow
                  this._showLoadingSpinner = i
                  var c = o.decline_link
                  if ('access_denied' === t) this._scribeOAuthAction('declined'), c && (l(s, { link: c.link_id }), a(c))
                  else if (i) {
                    var u = n.query,
                      d = u.error,
                      p = u.state,
                      h = { callback_url: 'https://'.concat(window.location.hostname).concat(n.pathname) }
                    d && 'string' == typeof d && (h.error = d),
                      p && 'string' == typeof p && (h.state = p),
                      r && r.replace(n.pathname),
                      this._startContactImports(h)
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
                    i = this.state.importFinished,
                    o = n.next_link
                  !this._navigating && i && ((this._navigating = !0), r(a, { link: o.link_id }), t(o))
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.errorDialog,
                    n = e.onNavigate,
                    a = e.passthroughOcfScreenProps,
                    i = e.subtask,
                    o = e.subtaskInputs,
                    s = i.accept_text,
                    l = i.detail_text,
                    c = i.primary_text,
                    u = i.secondary_text,
                    d = i.skip_link,
                    p = y.a.createElement(A, r()({}, c, { nativeID: M.b, onNavigate: n, subtaskInputs: o })),
                    h = u ? y.a.createElement(A, r()({}, u, { onNavigate: n, subtaskInputs: o })) : null,
                    m = l ? y.a.createElement(A, r()({}, l, { onNavigate: n, subtaskInputs: o })) : null
                  return this._showLoadingSpinner
                    ? y.a.createElement(Qe.a, {
                        fetchStatus: Ye.a.LOADING,
                        loadingMessage: Yt,
                        onRequestRetry: De.a,
                        render: Kt.a,
                        retryable: !1,
                      })
                    : y.a.createElement(
                        ye.a,
                        r()({ hideLogo: !0 }, a),
                        y.a.createElement(Fe.a, {
                          actionLabel: s,
                          footer: m,
                          graphic: Gt.a,
                          graphicStyle: Qt.twitterIcon,
                          headline: p,
                          onAction: this._handlePrimaryActionClick,
                          onClose: De.a,
                          onTertiaryAction: this._handleTertiaryActionClick,
                          subtext: h,
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
        })(y.a.Component),
        Qt = F.a.create(function (e) {
          return { twitterIcon: { color: e.colors.brandColor } }
        }),
        Jt = zt(Xt),
        Zt = Object(yt.createSelector)(vt.o, vt.x, function (e, t) {
          return { navigationContext: e, verificationSendFailureMessage: t }
        }),
        $t = {
          createLocalApiErrorHandler: Object(qe.createLocalApiErrorHandlerWithContextFactory)(
            'OCF_FLOW_EMAIL_VERIFICATION',
          ),
          getVerificationStatus: vt.f,
          verifyIdentifier: vt.B,
        },
        en = Object(gt.f)(Zt, $t),
        tn = n('k49u'),
        nn = n('OIs+'),
        an = Wt.a.e4ff75a9,
        rn = Wt.a.e4f6bd9e,
        on = b()({}, nn.a.Offline, an),
        sn = function (e, t, n) {
          var a,
            r = b()({}, tn.a.AccessDeniedByBouncer, {
              customAction: function (t) {
                Object(qe.bouncerError)(t, { flow: e })
              },
            })
          if (n)
            a = o()(
              o()({}, r),
              {},
              {
                customErrorHandler: function (a) {
                  var r = W()(a.errors, 1)[0]
                  return (
                    r.code === tn.a.AccessDeniedByBouncer
                      ? Object(qe.bouncerError)(r, { flow: e })
                      : n(t || (r.code && on[r.code]) || rn),
                    []
                  )
                },
              },
            )
          else if (t) {
            var i,
              s = { toast: { text: t } }
            a = o()(
              ((i = {}),
              b()(i, tn.a.ValidationFailure, s),
              b()(i, tn.a.OnboardingFlowRetriableFailure, s),
              b()(i, tn.a.OnboardingFlowFailure, s),
              b()(i, 'defaultToast', { text: t }),
              b()(i, 'showToast', !0),
              i),
              r,
            )
          } else {
            var l
            a = o()(
              o()({}, r),
              {},
              ((l = {}),
              b()(l, nn.a.Offline, { toast: { text: on[nn.a.Offline] } }),
              b()(l, 'defaultToast', { text: rn }),
              b()(l, 'showToast', !0),
              l),
            )
          }
          return a
        },
        ln = n('p+r5'),
        cn = 'email',
        un = (function (e) {
          m()(n, e)
          var t = v()(n)
          function n(e) {
            var a
            l()(this, n),
              (a = t.call(this, e)),
              b()(p()(a), '_sendEmailVerificationRequest', function () {
                var e = a.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.onNavigate,
                  r = e.subtask,
                  i = e.subtaskInputs,
                  o = e.verifyIdentifier,
                  s = (r.email && Object(S.g)(i, r.email)) || void 0,
                  l = (r.name && Object(S.g)(i, r.name)) || void 0
                return o({ email: s, display_name: l })
                  .then(function (e) {
                    a.setState({ email: s })
                  })
                  .catch(function (e) {
                    var i = a.props,
                      o = i.flowName,
                      s = i.verificationSendFailureMessage
                    t(sn(o, s || rn))(e), n(r.fail_link)
                  })
              }),
              b()(p()(a), '_handleCodeUpdated', function (e) {
                a.setState({ pinCode: e.target.value })
              }),
              b()(p()(a), '_startStatusPolling', function () {
                var e = a.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.getVerificationStatus,
                  r = e.subtask,
                  i = e.subtaskInputs,
                  o = r.email.subtask_data_reference,
                  s = o ? i[o.subtask_id][o.key] : void 0
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
              b()(p()(a), '_clearTimer', function () {
                a._timer && clearTimeout(a._timer)
              }),
              b()(p()(a), '_handleDoneButtonClick', function () {
                var e = a.props,
                  t = e.onNavigate,
                  n = e.subtask,
                  r = e.subtaskId,
                  i = e.updateFlow,
                  o = a.state,
                  s = o.email
                i(r, { code: o.pinCode, email: s, link: n.next_link.link_id }), t(n.next_link)
              })
            var r = e.subtaskId,
              i = e.subtaskInputs,
              o = Object(S.e)(i, { key: cn, subtask_id: r }, '') || ''
            return (a.state = { email: o, pinCode: '' }), a
          }
          return (
            u()(n, [
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
                    i = e.subtask,
                    o = e.subtaskInputs,
                    s = i.next_link,
                    l = i.primary_text,
                    c = i.secondary_text,
                    u = y.a.createElement(
                      A,
                      r()({}, i.detail_text, { color: 'link', onNavigate: t, style: dn.detailLink, subtaskInputs: o }),
                    )
                  return y.a.createElement(
                    ye.a,
                    r()({}, n, {
                      footer: y.a.createElement(B, {
                        actionDisabled: !this.state.pinCode,
                        actionLabel: null == s ? void 0 : s.label,
                        onAction: this._handleDoneButtonClick,
                      }),
                      header: y.a.createElement(ge, {
                        onNavigate: t,
                        primaryTextProp: l,
                        secondaryTextProp: c,
                        subtaskInputs: o,
                        withHeaderImage: !0,
                      }),
                      progressIndication: a,
                      providePadding: !0,
                    }),
                    y.a.createElement(ln.a, {
                      autoFocus: !0,
                      helperText: i.detail_text && u,
                      label: i.hint_text,
                      name: 'verfication_code',
                      onChange: this._handleCodeUpdated,
                      style: de.formTextInput,
                      value: this.state.pinCode,
                    }),
                    this.props.errorDialog,
                  )
                },
              },
            ]),
            n
          )
        })(y.a.Component),
        dn = F.a.create(function (e) {
          return { detailLink: { marginTop: e.spaces.space16 } }
        }),
        pn = en(un),
        hn = n('S8sr'),
        mn = n('mN6z'),
        fn = 'ocfEnterDateNextLink',
        vn = 'ocfEnterDateSkipLink',
        _n = { day: void 0, month: void 0, year: void 0 },
        bn = (function (e) {
          m()(n, e)
          var t = v()(n)
          function n(e) {
            var a
            l()(this, n),
              (a = t.call(this, e)),
              b()(p()(a), '_handleDateChange', function (e) {
                a.setState({ date: e })
              }),
              b()(p()(a), '_isCompleteDate', function (e) {
                return !!(e && e.year && e.month && e.day)
              }),
              b()(p()(a), '_isDateEmpty', function () {
                var e = a.state.date
                return Object(mn.a)(e, _n)
              }),
              b()(p()(a), '_meetsMinYearRequirement', function (e) {
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
              b()(p()(a), '_meetsMaxYearRequirement', function (e) {
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
              b()(p()(a), '_isDateValid', function () {
                var e = a.state.date
                return a._isCompleteDate(e) && a._meetsMinYearRequirement(e) && a._meetsMaxYearRequirement(e)
              }),
              b()(p()(a), '_dateErrorMessage', function () {
                var e = a.state.date
                if (a._isCompleteDate(e)) {
                  var t = a.props.subtask,
                    n = t.max_date_error,
                    r = t.min_date_error,
                    i = a._meetsMinYearRequirement(e)
                  return a._meetsMaxYearRequirement(e)
                    ? i || null == r
                      ? void 0
                      : r.text
                    : null == n
                    ? void 0
                    : n.text
                }
              }),
              b()(p()(a), '_handleDoneButtonClick', function () {
                var e = a.props,
                  t = e.onNavigate,
                  n = e.subtask.next_link,
                  r = e.subtaskId,
                  i = e.updateFlow,
                  o = a.state.date
                o && a._isDateValid() && (i(r, { date: o, link: n.link_id }), t(n))
              }),
              b()(p()(a), '_handleSkipButtonClick', function () {
                var e = a.props,
                  t = e.onNavigate,
                  n = e.subtask.skip_link,
                  r = e.subtaskId,
                  i = e.updateFlow
                n && i(r, { link: n.link_id }), n && t(n)
              })
            var r = a.props,
              i = r.subtaskId,
              o = r.subtaskInputs,
              s = Object(S.e)(o, { key: 'date', subtask_id: i }, void 0) || _n
            return (a.state = { date: s }), a
          }
          return (
            u()(n, [
              {
                key: 'render',
                value: function () {
                  var e,
                    t,
                    n = this.props,
                    a = n.errorDialog,
                    i = n.onNavigate,
                    o = n.passthroughOcfScreenProps,
                    s = n.subtask,
                    l = n.subtaskInputs,
                    c = s.detail_text,
                    u = s.hint_text,
                    d = s.next_link,
                    p = s.selectable_interval,
                    h = s.skip_link,
                    m = this.state.date,
                    f = void 0 === m ? {} : m
                  return y.a.createElement(
                    ye.a,
                    r()({}, o, {
                      footer: y.a.createElement(B, {
                        actionDisabled: !this._isDateValid(),
                        actionLabel: (h && this._isDateEmpty()) || null == d ? void 0 : d.label,
                        actionTestID: fn,
                        onAction: this._handleDoneButtonClick,
                        onSecondaryAction: this._handleSkipButtonClick,
                        secondaryActionLabel: h && this._isDateEmpty() ? (null == h ? void 0 : h.label) : void 0,
                        secondaryActionTestID: vn,
                      }),
                      header: y.a.createElement(ge, {
                        header: s.header,
                        onNavigate: i,
                        subtaskInputs: l,
                        withHeaderImage: !0,
                      }),
                      providePadding: !0,
                    }),
                    y.a.createElement(hn.a, {
                      autofocus: !0,
                      day: f.day,
                      errorMessage: this._dateErrorMessage(),
                      label: u,
                      maxSelectableYear: null == p || null === (e = p.max) || void 0 === e ? void 0 : e.year,
                      minSelectableYear: null == p || null === (t = p.min) || void 0 === t ? void 0 : t.year,
                      month: f.month,
                      onChange: this._handleDateChange,
                      year: f.year,
                    }),
                    c ? y.a.createElement(A, r()({}, c, { color: 'gray700', onNavigate: i, subtaskInputs: l })) : null,
                    a,
                  )
                },
              },
            ]),
            n
          )
        })(y.a.Component),
        gn = (n('iKE+'), n('1LXv'), n('e/gN'), n('DZ+c'), n('3uku'), n('RgK2')),
        yn = n.n(gn),
        kn = n('3zvM'),
        wn = n('lMB6'),
        Cn = n('FgXs'),
        En = ['localValidator'],
        In = function (e) {
          return { valid: !0 }
        }
      function xn() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.localValidator,
          n = void 0 === t ? In : t,
          a = C()(e, En),
          r = Object(kn.e)(
            o()(
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
              var i = n(e, t)
              return i.valid ? a(r.fetchOneIfNeeded(e, t)) : (a(r.add(b()({}, e, i))), Promise.resolve())
            }
          })
        var i = function (e) {
            return r.selectState(e).fetchStatus || yn.a
          },
          s = function (e, t) {
            return Object(Cn.a)(t, function (t, n) {
              var a = e[n] || {}
              return o()(o()({}, a), {}, { valid: !!a.valid || t === Ye.a.FAILED, isLoading: t === Ye.a.LOADING })
            })
          }
        return (r.selectEntitiesWithFetchStatus = Object(yt.createSelector)(r.selectAll, i, s)), wn.a.register(r)
      }
      var Sn = new RegExp('^[a-zA-Z0-9_\\-+\\.!\\&]+@(?:[a-zA-Z0-9\\-_]+\\.)+[a-zA-Z]{2,63}$'),
        Tn = Wt.a.hc72e1fc,
        Pn = xn({
          namespace: 'emailValidity',
          fetchOneContext: 'FETCH_EMAIL_VALIDITY',
          fetchOneEndpoint: function (e) {
            return e.Validity.isEmailAvailable
          },
          fetchOneParams: function (e, t) {
            var n = W()(e, 1)[0]
            return o()({ email: n }, t)
          },
          localValidator: function (e) {
            var t = Sn.test(e)
            return { errorMessage: Tn, valid: t }
          },
        }),
        Ln =
          (n('tVqn'),
          function (e, t) {
            return t.module.selectEntitiesWithFetchStatus(e)
          }),
        An = Object(Ge.a)()
          .propsFromState(function () {
            return { validity: Ln }
          })
          .propsFromActions(function (e) {
            var t = e.module
            return {
              clearValidity: t.clear,
              createLocalApiErrorHandler: Object(qe.createLocalApiErrorHandlerWithContextFactory)(
                'VALIDITY_FIELD_CONTEXT',
              ),
              validate: t.validate,
            }
          }),
        On = n('VY6S'),
        Dn = ['value'],
        Fn = (function (e) {
          m()(n, e)
          var t = v()(n)
          function n(e, a) {
            var r
            l()(this, n),
              (r = t.call(this, e, a)),
              b()(p()(r), '_setInputRef', function (e) {
                r._input = e
              }),
              b()(p()(r), '_handleValueChange', function (e) {
                var t = r.props,
                  n = t.onChange,
                  a = t.validationParams,
                  i = e.target.value.trim()
                r._validateDebounced(o()({ value: i }, a)), r.setState({ value: i }), n && n(e)
              }),
              b()(p()(r), '_getIsValid', function (e, t) {
                return !!(t && e[t] && e[t].valid)
              })
            var i = e.defaultValue || ''
            return (
              (r.state = { value: i, isValid: r._getIsValid(e.validity, i) }),
              (r._validateDebounced = Object(On.a)(function (e) {
                var t = e.value,
                  n = C()(e, Dn)
                return r.props.validate(t, n).catch(r.props.createLocalApiErrorHandler())
              }, 500)),
              r
            )
          }
          return (
            u()(n, [
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
                  n && this._validateDebounced(o()({ value: n }, a)),
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
                    r = !Object(mn.a)(e.validationParams, this.props.validationParams)
                  a
                    ? this.props.onValidityChange(this.state.isValid)
                    : n &&
                      r &&
                      (this.props.clearValidity(),
                      this._validateDebounced(o()({ value: n }, this.props.validationParams)))
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
                    i = e.name,
                    o = e.style,
                    s = e.type,
                    l = e.validity,
                    c = this.state.value,
                    u = c && l[c] ? l[c].errorMessage : ''
                  return y.a.createElement(ln.a, {
                    autoComplete: t,
                    autoFocus: n,
                    editable: a,
                    errorText: u,
                    invalid: !!u,
                    label: r,
                    name: i,
                    onChange: this._handleValueChange,
                    ref: this._setInputRef,
                    style: o,
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
        })(y.a.Component)
      b()(Fn, 'defaultProps', { label: '' })
      var Rn = An(Fn),
        Nn = n('aWzz'),
        Bn = n('H9wA'),
        Mn = {
          autoComplete: Nn.string,
          autoFocus: Nn.bool,
          defaultValue: Nn.string,
          editable: Nn.bool,
          label: Nn.string,
          name: Nn.string.isRequired,
          onChange: Nn.func,
          onRef: Nn.func.isRequired,
          onValidityChange: Nn.func.isRequired,
          style: Bn.a.style,
          type: Nn.string,
        },
        Vn =
          (o()(
            o()({}, Mn),
            {},
            {
              clearValidity: Nn.func.isRequired,
              createLocalApiErrorHandler: Nn.func.isRequired,
              module: Nn.object.isRequired,
              validate: Nn.func.isRequired,
              validity: Nn.object.isRequired,
            },
          ),
          ['onRef']),
        Un = function (e) {
          var t = e.onRef,
            n = C()(e, Vn)
          return y.a.createElement(Rn, r()({ module: Pn, onRef: t, type: 'email' }, n))
        },
        jn = (n('KOtZ'), n('uFXj'), n('/Dbh')),
        zn = Wt.a.d5568440,
        Hn = xn({
          namespace: 'passwordValidity',
          fetchOneContext: 'FETCH_PASSWORD_VALIDITY',
          fetchOneEndpoint: function (e) {
            return e.Validity.fetchPasswordStrength
          },
          fetchOneParams: function (e, t) {
            var n = W()(e, 1)[0]
            return o()({ password: n }, t)
          },
          localValidator: function (e, t) {
            var n = !(!t || !t.username) && e === t.username,
              a = e.length >= jn.b,
              r = e.length <= jn.a,
              i = zn
            return (
              a ? r || (i = qe.NEW_PASSWORD_LONG) : (i = qe.NEW_PASSWORD_SHORT),
              { errorMessage: !n && a && r ? void 0 : i, valid: a && r && !n }
            )
          },
        }),
        Wn = Object(Ge.a)()
          .propsFromState(function () {
            return { validityMap: Hn.selectEntitiesWithFetchStatus }
          })
          .propsFromActions(function () {
            return {
              clearPasswordValidity: Hn.clear,
              createLocalApiErrorHandler: Object(qe.createLocalApiErrorHandlerWithContextFactory)(
                'PASSWORD_FIELD_CONTEXT',
              ),
              validator: Hn.validate,
            }
          })
          .withAnalytics({ page: 'onboarding', component: 'password_entry' }),
        Gn = Wt.a.dec3c9b8,
        qn = Wt.a.fa69a1ca,
        Kn = Wt.a.aacf5085,
        Yn = (function (e) {
          m()(n, e)
          var t = v()(n)
          function n(e) {
            var a
            l()(this, n),
              (a = t.call(this, e)),
              b()(p()(a), '_validate', function (e, t) {
                a.props.validator(e, t).catch(a.props.createLocalApiErrorHandler()).then(a._onValidationUpdated(e))
              }),
              b()(p()(a), '_validateDebounced', Object(On.a)(a._validate, 500)),
              b()(p()(a), '_onValidationUpdated', function (e) {
                return function () {
                  var t = a.props,
                    n = t.analytics,
                    r = t.customValidator,
                    i = t.onPasswordValidated,
                    o = t.validityMap,
                    s = (e && o[e] ? o[e] : {}).valid,
                    l = void 0 !== s && s
                  r && 'string' == typeof e && 0 === e.length && (l = r().valid),
                    a.setState({ valid: l }),
                    n.scribe({ element: 'entered_password', action: l ? 'valid' : 'invalid' }),
                    i(l)
                }
              }),
              b()(p()(a), '_renderFormTextInput', function () {
                var e = a.props,
                  t = e.autoComplete,
                  n = e.autoFocus,
                  r = e.customValidator,
                  i = e.helperText,
                  o = e.label,
                  s = e.onSubmitEditing,
                  l = e.showPasswordVisibilityIcon,
                  c = e.validityMap,
                  u = a.state,
                  d = u.password,
                  p = u.revealed,
                  h = a.state.valid,
                  m = (c[d] || {}).errorMessage,
                  f = void 0 === m ? '' : m
                r && 0 === f.length && ((f = r().errorMessage), (h = r().valid))
                var v = l
                  ? i
                  : y.a.createElement(
                      x.b,
                      {
                        accessibilityRole: 'button',
                        color: 'link',
                        onPress: a._handleVisibilityToggle,
                        style: Xn.toggleLink,
                      },
                      p ? Kn : qn,
                    )
                return y.a.createElement(ln.a, {
                  autoComplete: t,
                  autoFocus: n,
                  errorText: f,
                  helperText: v,
                  invalid: !h,
                  label: o || Gn,
                  name: 'password',
                  onChange: a._handlePasswordUpdated,
                  onSubmitEditing: h ? s : void 0,
                  showPasswordVisibilityIcon: l,
                  style: de.formTextInput,
                  type: p ? 'text' : 'password',
                  value: d,
                })
              }),
              b()(p()(a), '_handleVisibilityToggle', function () {
                a.setState({ revealed: !a.state.revealed })
              }),
              b()(p()(a), '_handlePasswordUpdated', function (e) {
                var t = a.props,
                  n = t.onPasswordChange,
                  r = t.skipPasswordValidation,
                  i = t.userIdentifier,
                  o = e.target.value
                r || a._validateDebounced(o, { username: i }), a.setState({ password: o }), n(o)
              })
            var r = e.defaultValue
            return (a.state = { revealed: !1, password: r || '', valid: !0 }), a
          }
          return (
            u()(n, [
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
                  return y.a.createElement(
                    O.a,
                    { style: [de.formTextInput, t] },
                    n ? y.a.createElement('input', { name: 'username', type: 'hidden', value: n }) : null,
                    this._renderFormTextInput(),
                  )
                },
              },
            ]),
            n
          )
        })(y.a.Component)
      b()(Yn, 'defaultProps', {
        autoComplete: 'on',
        onPasswordChange: De.a,
        onPasswordValidated: De.a,
        skipPasswordValidation: !1,
      })
      var Xn = F.a.create(function (e) {
          return { toggleLink: { marginTop: e.spaces.space4 } }
        }),
        Qn = Wn(Yn),
        Jn = F.a.create(function (e) {
          return { textField: { width: '100%' }, textFieldDetails: { marginBottom: e.spaces.space4 } }
        }),
        Zn = function (e) {
          var t = e.autoComplete,
            n = e.autoFocus,
            a = void 0 !== n && n,
            i = e.onChange,
            o = e.onNavigate,
            s = e.onSubmitEditing,
            l = e.passwordProps,
            c = e.style,
            u = e.subtaskInputs,
            d = e.textField,
            p = y.a.useCallback(
              function (e) {
                return i(e.target.value)
              },
              [i],
            )
          if (!d) return null
          var h,
            m = d.content_type,
            f = d.detail_text,
            v = d.hint_text,
            _ = f
              ? y.a.createElement(
                  A,
                  r()({}, f, { color: 'gray700', onNavigate: o, style: Jn.textFieldDetails, subtaskInputs: u }),
                )
              : null
          return m === k.C.Password || m === k.C.NewPassword
            ? y.a.createElement(
                Qn,
                r()({}, l, {
                  autoComplete: t || (m === k.C.Password ? 'current-password' : 'new-password'),
                  autoFocus: a,
                  helperText: _,
                  label: v || '',
                  onPasswordChange: i,
                  onPasswordValidated:
                    null !== (h = null == l ? void 0 : l.onPasswordValidated) && void 0 !== h ? h : De.a,
                  onSubmitEditing: s,
                  style: [de.formTextInput, Jn.textField, c],
                }),
              )
            : y.a.createElement(ln.a, {
                autoComplete: null != t ? t : 'on',
                autoFocus: a,
                helperText: _,
                label: v || '',
                name: 'text',
                onChange: p,
                onSubmitEditing: s,
                style: [de.formTextInput, Jn.textField, c],
              })
        },
        $n = Wt.a.c52be451,
        ea = Wt.a.cfd2f35d,
        ta = Wt.a.gea6cc19,
        na = Wt.a.i769e50a,
        aa = Wt.a.ec129eb6,
        ra = Wt.a.f1b50489,
        ia = Wt.a.deaf5b15,
        oa = (function (e) {
          m()(n, e)
          var t = v()(n)
          function n() {
            var e
            l()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              b()(p()(e), 'state', { showRemoveContactsDialog: !1, disableRemoveContactsButton: !1 }),
              b()(p()(e), '_handleRemoveContactsClick', function () {
                e.setState({ showRemoveContactsDialog: !0 })
              }),
              b()(p()(e), '_handleRemoveContactsConfirm', function () {
                e.setState({ showRemoveContactsDialog: !1 }), e._handleRemoveContacts()
              }),
              b()(p()(e), '_handleRemoveContacts', function () {
                var t = e.props,
                  n = t.addToast,
                  a = t.removeContacts
                a &&
                  a()
                    .then(function () {
                      e.setState({ disableRemoveContactsButton: !0 }), n({ text: aa, withClearButton: !0 })
                    })
                    .catch(function () {
                      n({ action: { label: ia, onAction: e._handleRemoveContacts }, text: ra, withAutoDismiss: !0 })
                    })
              }),
              b()(p()(e), '_handleRemoveContactsCancel', function () {
                e.setState({ showRemoveContactsDialog: !1 })
              }),
              e
            )
          }
          return (
            u()(n, [
              {
                key: 'render',
                value: function () {
                  var e,
                    t = this.props,
                    n = t.onNavigate,
                    a = t.removeContactsSetting,
                    i = t.subtaskInputs,
                    o = this.state.disableRemoveContactsButton
                  return y.a.createElement(
                    O.a,
                    null,
                    y.a.createElement(
                      A,
                      r()({}, a.primary_text, { onNavigate: n, style: sa.header, subtaskInputs: i }),
                    ),
                    y.a.createElement(
                      A,
                      r()({}, a.secondary_text, {
                        color: 'gray700',
                        onNavigate: n,
                        size: 'subtext2',
                        style: sa.subtext,
                        subtaskInputs: i,
                      }),
                    ),
                    y.a.createElement(
                      O.a,
                      null,
                      null !== (e = a.value_data) && void 0 !== e && e.action_data
                        ? y.a.createElement(
                            D.a,
                            { disabled: o, onPress: this._handleRemoveContactsClick, type: 'destructiveText' },
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
                    ? y.a.createElement(Ae.a, {
                        cancelButtonLabel: ea,
                        confirmButtonLabel: $n,
                        headline: ta,
                        onCancel: this._handleRemoveContactsCancel,
                        onConfirm: this._handleRemoveContactsConfirm,
                        onMaskClick: this._handleRemoveContactsCancel,
                        text: na,
                      })
                    : null
                },
              },
            ]),
            n
          )
        })(y.a.Component),
        sa = F.a.create(function (e) {
          return {
            header: { marginTop: e.spaces.space12, marginBottom: e.spaces.space12 },
            subtext: { marginBottom: e.spaces.space20 },
          }
        }),
        la = oa,
        ca = n('KNZn'),
        ua = n('2MR/'),
        da = Wt.a.dd4a83a5,
        pa = (function (e) {
          m()(n, e)
          var t = v()(n)
          function n(e) {
            var a
            l()(this, n),
              (a = t.call(this, e)),
              b()(p()(a), '_handleActionClick', function () {
                var e,
                  t,
                  n = a.props,
                  r = n.onNavigate,
                  i =
                    null === (e = n.settingValue.value_data) ||
                    void 0 === e ||
                    null === (t = e.action_data) ||
                    void 0 === t
                      ? void 0
                      : t.link
                i && r(i)
              }),
              b()(p()(a), '_handleButtonNavigation', function (e, t) {
                var n = a.props,
                  r = n.onNavigate,
                  i = n.updateFlow
                t === k.t.NextButton && (null == i || i(e)), r && e && r(e)
              }),
              b()(p()(a), '_getSettingValueFromSubtaskInputs', function (e) {
                var t,
                  n,
                  r = a.props,
                  i = r.subtaskId,
                  o = r.subtaskInputs,
                  s = e.value_identifier,
                  l = e.value_type,
                  c = (Object(S.e)(o, { key: k.s, subtask_id: i }, []) || []).find(function (e) {
                    return e.key === s
                  })
                c &&
                  Object(S.i)(l) &&
                  (t = null === (n = c.response_data.boolean_data) || void 0 === n ? void 0 : n.result)
                return t
              }),
              b()(p()(a), '_handleSettingGroupClick', function () {
                var e = a.props,
                  t = e.onSettingGroupClick,
                  n = e.settingValue
                t && t(n)
              }),
              b()(p()(a), '_handleSettingToggle', function () {
                var e = a.props,
                  t = e.onSettingToggle,
                  n = e.settingValue,
                  r = n.value_identifier
                r && (a.setState(o()(o()({}, a.state), {}, b()({}, r, !a.state[r]))), t && t(n))
              }),
              b()(p()(a), '_handleSettingTextChange', function (e) {
                var t = a.props,
                  n = t.onSettingTextChanged,
                  r = t.settingValue
                null == n || n(r, e)
              }),
              b()(p()(a), '_handleTextFieldOnEditingSubmit', function () {
                var e = a.props,
                  t = e.nextLink,
                  n = e.onNavigate,
                  r = e.updateFlow
                t && (null == r || r(t), n(t))
              }),
              b()(p()(a), '_addToast', function (e) {
                a.props.addToast && a.props.addToast(e)
              }),
              b()(p()(a), '_getButtonDisplayType', function (e) {
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
              i = r.value_data,
              s = r.value_identifier,
              c = r.value_type
            if (s && Object(S.i)(c)) {
              var u,
                d = a._getSettingValueFromSubtaskInputs(r)
              if (void 0 === d)
                d = null == i || null === (u = i.boolean_data) || void 0 === u ? void 0 : u.initial_value
              a.state = b()({}, s, d)
            }
            return a
          }
          return (
            u()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props.settingValue,
                    n = t.primary_text,
                    a = t.secondary_text,
                    r = t.toggle_wrapper,
                    i = t.value_type,
                    o = function () {
                      switch (i) {
                        case k.u.Action:
                          return e._renderAction()
                        case k.u.Boolean:
                        case k.u.PreciseLocation:
                          return e._renderSettingOption()
                        case k.u.SettingsGroup:
                          return e._renderSettingsGroup()
                        case k.u.StaticText:
                          return e._renderStaticText()
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
                  return y.a.createElement(
                    y.a.Fragment,
                    null,
                    (n || a) &&
                      (function () {
                        switch (i) {
                          case k.u.Action:
                          case k.u.TextField:
                          case k.u.DestructiveAction:
                          case k.u.Separator:
                          case k.u.Button:
                          case k.u.Tweet:
                            return e._renderStaticText()
                          default:
                            return y.a.createElement(y.a.Fragment, null)
                        }
                      })(),
                    r
                      ? y.a.createElement(
                          O.a,
                          { style: ha.tweetDisclosure },
                          y.a.createElement(ua.a, { label: da }, o()),
                        )
                      : o(),
                  )
                },
              },
              {
                key: '_renderStaticText',
                value: function () {
                  var e = this.props,
                    t = e.onNavigate,
                    n = e.settingValue,
                    a = e.subtaskInputs,
                    i = n.primary_text,
                    o = n.secondary_text
                  return y.a.createElement(
                    O.a,
                    { style: i && ha.header },
                    i
                      ? y.a.createElement(
                          A,
                          r()({}, i, { onNavigate: t, size: 'headline1', subtaskInputs: a, weight: 'bold' }),
                        )
                      : null,
                    o
                      ? y.a.createElement(
                          A,
                          r()({}, o, {
                            color: 'gray700',
                            onNavigate: t,
                            size: 'body',
                            style: i && ha.secondaryText,
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
                    i = n.value_identifier
                  if (null == r || !r.text_field) return null
                  var o = i === k.t.UserIdentifier
                  return y.a.createElement(Zn, {
                    autoComplete: o ? 'username' : void 0,
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
                  return y.a.createElement(
                    O.a,
                    { style: { marginBottom: F.a.theme.spaces.space16 } },
                    y.a.createElement(la, {
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
                    i = a.value_data
                  return y.a.createElement(ue, {
                    label: null == i || null === (e = i.separator) || void 0 === e ? void 0 : e.label,
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
                    i = n.settingValue,
                    o = n.subtaskInputs,
                    s =
                      null === (e = i.value_data) || void 0 === e || null === (t = e.action_data) || void 0 === t
                        ? void 0
                        : t.link.label
                  return y.a.createElement(
                    O.a,
                    null,
                    y.a.createElement(
                      A,
                      r()({}, i.primary_text, { onNavigate: a, style: ha.header, subtaskInputs: o }),
                    ),
                    y.a.createElement(
                      A,
                      r()({}, i.secondary_text, {
                        color: 'gray700',
                        onNavigate: a,
                        size: 'subtext2',
                        subtaskInputs: o,
                      }),
                    ),
                    s
                      ? y.a.createElement(
                          O.a,
                          null,
                          y.a.createElement(D.a, { onPress: this._handleActionClick, type: 'primaryText' }, s),
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
                    i = n.value_data,
                    o = n.value_identifier
                  if (null == i || !i.button) return null
                  var s = i.button.navigation_link,
                    l = (null == s ? void 0 : s.link_type) === k.m.ChromelessWeb
                  return y.a.createElement(he, {
                    button: i.button,
                    displayType: this._getButtonDisplayType(o),
                    link: l && null != s && s.url ? { external: !0, pathname: s.url } : void 0,
                    onNavigate: function () {
                      return e._handleButtonNavigation(s, o)
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
                  return null != e && e.tweet ? y.a.createElement(ca.a, { tweet: e.tweet }) : null
                },
              },
              {
                key: '_renderSettingOption',
                value: function () {
                  var e = this.props,
                    t = e.onNavigate,
                    n = e.settingValue,
                    a = e.showDividers,
                    i = e.subtaskInputs,
                    o = n.primary_text,
                    s = n.secondary_text,
                    l = n.value_identifier
                  return y.a.createElement(
                    O.a,
                    { accessibilityRole: 'label', focusable: !0, style: [de.option, a && ha.optionDivider] },
                    y.a.createElement(
                      O.a,
                      { style: de.checkboxText },
                      y.a.createElement(A, r()({}, o, { onNavigate: t, subtaskInputs: i })),
                      s
                        ? y.a.createElement(
                            A,
                            r()({}, s, {
                              color: 'gray700',
                              onNavigate: t,
                              size: 'subtext2',
                              style: ha.secondaryText,
                              subtaskInputs: i,
                            }),
                          )
                        : null,
                    ),
                    l
                      ? y.a.createElement(
                          O.a,
                          null,
                          y.a.createElement(st.a, { checked: this.state[l], onChange: this._handleSettingToggle }),
                        )
                      : null,
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
                    i = n.settingValue,
                    o = n.subtaskInputs,
                    s = i.primary_text,
                    l = i.secondary_text,
                    c = i.value_data,
                    u = null == c || null === (e = c.settings_group_data) || void 0 === e ? void 0 : e.settings,
                    d =
                      null == c || null === (t = c.settings_group_data) || void 0 === t
                        ? void 0
                        : t.status_text_quantity_pairs
                  return y.a.createElement(
                    O.a,
                    { accessibilityRole: 'button', onClick: this._handleSettingGroupClick, style: ha.settingGroup },
                    y.a.createElement(A, r()({}, s, { onNavigate: a, subtaskInputs: o })),
                    u && d ? this._renderQuantityStatus(u, d) : null,
                    l
                      ? y.a.createElement(
                          A,
                          r()({}, l, { color: 'gray700', onNavigate: a, size: 'subtext2', subtaskInputs: o }),
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
                    i = this.props,
                    o = i.onNavigate,
                    s = i.subtaskInputs,
                    l = e.reduce(function (e, t) {
                      return e + (a._getSettingValueFromSubtaskInputs(t) ? 1 : 0)
                    }, 0)
                  return (
                    t.forEach(function (e) {
                      l >= e.threshold &&
                        (n = y.a.createElement(
                          A,
                          r()({}, e.text, {
                            color: 'gray700',
                            onNavigate: o,
                            size: 'subtext2',
                            style: ha.quantityStatusText,
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
        })(y.a.Component),
        ha = F.a.create(function (e) {
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
            tweetDisclosure: { marginTop: e.spaces.space12 },
          }
        }),
        ma = 'ocfEnterEmailNextLink',
        fa = 'ocfEnterEmailSkipLink',
        va = (function (e) {
          m()(n, e)
          var t = v()(n)
          function n(e) {
            var a
            l()(this, n),
              (a = t.call(this, e)),
              b()(p()(a), '_renderEmailTextField', function () {
                return y.a.createElement(Un, {
                  autoComplete: 'email',
                  autoFocus: !0,
                  defaultValue: a.state.email,
                  label: a.props.subtask.hint_text,
                  name: 'email',
                  onRef: a._handleSetInputRef,
                  onValidityChange: a._handleUpdateValidity,
                  style: _a.emailTextField,
                })
              }),
              b()(p()(a), '_getInitialSettingValues', function (e, t, n) {
                var a
                return null === (a = e.settings) || void 0 === a
                  ? void 0
                  : a.map(function (e) {
                      var a,
                        r,
                        i,
                        o,
                        s = e.value_identifier
                      if (void 0 === s) return {}
                      var l =
                        null !==
                          (a =
                            null === (r = e.value_data) || void 0 === r || null === (i = r.boolean_data) || void 0 === i
                              ? void 0
                              : i.initial_value) &&
                        void 0 !== a &&
                        a
                      return {
                        valueIdentifier: s,
                        value: null !== (o = Object(S.e)(n, { key: s, subtask_id: t }, void 0)) && void 0 !== o ? o : l,
                      }
                    })
              }),
              b()(p()(a), '_toggleSettingValue', function (e) {
                var t = a.state.settingValues,
                  n =
                    null == t
                      ? void 0
                      : t.map(function (t) {
                          return t.valueIdentifier === e ? { valueIdentifier: e, value: !t.value } : t
                        })
                a.setState({ settingValues: n })
              }),
              b()(p()(a), '_renderSettings', function () {
                var e,
                  t,
                  n = a.props,
                  r = n.onNavigate,
                  i = n.subtask,
                  o = n.subtaskId,
                  s = n.subtaskInputs
                return null !==
                  (e =
                    null === (t = i.settings) || void 0 === t
                      ? void 0
                      : t.map(function (e) {
                          var t = e.value_identifier
                          return void 0 === t
                            ? null
                            : y.a.createElement(pa, {
                                key: t,
                                onNavigate: r,
                                onSettingToggle: function () {
                                  return a._toggleSettingValue(t)
                                },
                                settingValue: e,
                                subtaskId: o,
                                subtaskInputs: s,
                              })
                        })) && void 0 !== e
                  ? e
                  : null
              }),
              b()(p()(a), '_handleDoneButtonClick', function () {
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
              b()(p()(a), '_handleSkipButtonClick', function () {
                var e = a.props.subtask
                e.skip_link && a._handleButtonClick(e.skip_link, { link: e.skip_link.link_id })
              }),
              b()(p()(a), '_handleButtonClick', function (e, t) {
                var n = a.props,
                  r = n.onNavigate,
                  i = n.subtaskId
                ;(0, n.updateFlow)(i, t), r(e)
              }),
              b()(p()(a), '_handleSetInputRef', function (e) {
                a._input = e
              }),
              b()(p()(a), '_handleUpdateValidity', function () {
                var e = a._input && a._input.isValid()
                a.setState({ isValid: !!e })
              }),
              b()(p()(a), '_getIdentifierValue', function () {
                return (a._input && a._input.getValue()) || void 0
              })
            var r = e.subtask,
              i = e.subtaskId,
              o = e.subtaskInputs,
              s = Object(S.e)(o, { key: 'email', subtask_id: i }, '') || void 0,
              c = a._getInitialSettingValues(r, i, o)
            return (a.state = { email: s, isValid: !!s, settingValues: c }), a
          }
          return (
            u()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.onNavigate,
                    n = e.passthroughOcfScreenProps,
                    a = e.progressIndication,
                    i = e.subtask,
                    o = e.subtaskInputs,
                    s = i.next_link,
                    l = i.primary_text,
                    c = i.secondary_text,
                    u = i.skip_link
                  return y.a.createElement(
                    ye.a,
                    r()({}, n, {
                      footer: y.a.createElement(B, {
                        actionDisabled: !this.state.isValid,
                        actionLabel: this.state.isValid || !u ? (null == s ? void 0 : s.label) : void 0,
                        actionTestID: ma,
                        onAction: this._handleDoneButtonClick,
                        onSecondaryAction: this._handleSkipButtonClick,
                        secondaryActionLabel: this.state.isValid || null == u ? void 0 : u.label,
                        secondaryActionTestID: fa,
                        secondaryActionType: 'primaryOutlined',
                      }),
                      header: y.a.createElement(ge, {
                        onNavigate: t,
                        primaryTextProp: l,
                        secondaryTextProp: c,
                        subtaskInputs: o,
                        withHeaderImage: !0,
                      }),
                      progressIndication: a,
                      providePadding: !0,
                    }),
                    y.a.createElement(O.a, { style: _a.textFieldArea }, this._renderEmailTextField()),
                    this._renderSettings(),
                    this.props.errorDialog,
                  )
                },
              },
            ]),
            n
          )
        })(y.a.Component),
        _a = F.a.create(function (e) {
          return {
            textFieldArea: { marginTop: e.spaces.space20 },
            emailTextField: { paddingHorizontal: 0, paddingVertical: e.spaces.space16 },
          }
        }),
        ba = (n('Qavd'), n('5oBF')),
        ga = { scribeAction: ft.c, sendAllPreviews: ba.g },
        ya = Object(gt.b)(ga),
        ka = 'LoginForm_Login_Button',
        wa = n('0yYu'),
        Ca = Wt.a.d1f6d336,
        Ea = Wt.a.a3841918,
        Ia = Wt.a.f70cd5ed,
        xa = Wt.a.ca86b62c,
        Sa = (function (e) {
          m()(n, e)
          var t = v()(n)
          function n(e, a) {
            var i
            return (
              l()(this, n),
              (i = t.call(this, e, a)),
              b()(
                p()(i),
                '_passwordlessSsoEnabled',
                i.context.featureSwitches.isTrue('responsive_web_passwordless_sso_enabled'),
              ),
              b()(p()(i), 'state', {}),
              b()(p()(i), '_renderIdentifier', function () {
                var e,
                  t,
                  n = i.props.subtask,
                  a = n.email,
                  r = n.phone_number,
                  o = n.user_identifier_display_type,
                  s = n.username
                return (
                  'phone_number' === o
                    ? ((e = r), (t = Ia))
                    : 'username' === o
                    ? ((e = s), (t = Ca))
                    : 'email' === o && ((e = a), (t = Ea)),
                  e && t && o
                    ? y.a.createElement(ln.a, {
                        editable: !1,
                        label: t,
                        name: o,
                        onChange: De.a,
                        style: de.formTextInput,
                        value: e,
                      })
                    : null
                )
              }),
              b()(p()(i), '_renderPasswordFields', function () {
                var e = i.props,
                  t = e.onNavigate,
                  n = e.subtask,
                  a = e.subtaskInputs,
                  o = n.show_password_confirmation
                if (n.password_field || n.new_password_field || n.confirm_password_field) {
                  var s,
                    l = { onNavigate: t, onSubmitEditing: i._handleTextSubmit, subtaskInputs: a },
                    c = null !== (s = n.password_field) && void 0 !== s ? s : n.new_password_field
                  return y.a.createElement(
                    y.a.Fragment,
                    null,
                    c
                      ? y.a.createElement(
                          Zn,
                          r()({}, l, {
                            autoFocus: !0,
                            onChange: i._handlePasswordChange,
                            passwordProps: {
                              onPasswordValidated: i._handleValidationChange,
                              showPasswordVisibilityIcon: i._ssoInSliEnterPasswordUpdatesEnabled,
                              skipPasswordValidation: n.skip_password_validation,
                            },
                            textField: c,
                          }),
                        )
                      : null,
                    n.confirm_password_field
                      ? y.a.createElement(
                          Zn,
                          r()({}, l, {
                            onChange: i._handlePasswordConfirmationChange,
                            passwordProps: {
                              onPasswordValidated: i._handleValidationChange,
                              customValidator: i._validatePasswordConfirmation,
                              showPasswordVisibilityIcon: i._ssoInSliEnterPasswordUpdatesEnabled,
                            },
                            textField: n.confirm_password_field,
                          }),
                        )
                      : null,
                  )
                }
                return y.a.createElement(
                  y.a.Fragment,
                  null,
                  y.a.createElement(Qn, {
                    autoComplete: i._getPasswordAutoCompleteValue(),
                    autoFocus: !0,
                    label: n.hint,
                    onPasswordChange: i._handlePasswordChange,
                    onPasswordValidated: i._handleValidationChange,
                    onSubmitEditing: i._handleTextSubmit,
                    showPasswordVisibilityIcon: i._ssoInSliEnterPasswordUpdatesEnabled,
                    skipPasswordValidation: n.skip_password_validation,
                    userIdentifier: n.username,
                  }),
                  o
                    ? y.a.createElement(Qn, {
                        autoComplete: i._getPasswordAutoCompleteValue(),
                        customValidator: i._validatePasswordConfirmation,
                        label: n.password_confirmation_hint,
                        onPasswordChange: i._handlePasswordConfirmationChange,
                        onPasswordValidated: i._handleValidationChange,
                        onSubmitEditing: i._handleTextSubmit,
                        showPasswordVisibilityIcon: i._ssoInSliEnterPasswordUpdatesEnabled,
                        userIdentifier: n.username,
                      })
                    : null,
                )
              }),
              b()(p()(i), '_renderFooter', function () {
                var e,
                  t,
                  n,
                  a,
                  o,
                  s = i.props,
                  l = s.onNavigate,
                  c = s.subtask,
                  u = s.subtaskInputs,
                  d = i._isPasswordValid(),
                  p = i._passwordlessSsoEnabled
                    ? null === (e = c.action_buttons) || void 0 === e
                      ? void 0
                      : e.map(function (e, t) {
                          return y.a.createElement(he, {
                            button: e,
                            displayType: Object(S.j)(e.navigation_link.link_id),
                            key: t,
                            onNavigate: l,
                            subtaskInputs: u,
                          })
                        })
                    : [],
                  h =
                    null !== (t = c.footer) && void 0 !== t && t.footnote_text
                      ? y.a.createElement(
                          A,
                          r()({}, c.footer.footnote_text, {
                            color: 'gray700',
                            onNavigate: l,
                            style: Ta.footnoteText,
                            subtaskInputs: u,
                          }),
                        )
                      : null,
                  m =
                    null !== (n = c.footer) && void 0 !== n && n.detail_text
                      ? y.a.createElement(
                          A,
                          r()({}, c.footer.detail_text, {
                            color: 'gray700',
                            onNavigate: l,
                            style: Ta.detailText,
                            subtaskInputs: u,
                          }),
                        )
                      : null,
                  f =
                    (null === (a = c.footer) || void 0 === a ? void 0 : a.style) === k.i.Floating ? 'medium' : 'large',
                  v =
                    d || !c.skip_link
                      ? y.a.createElement(
                          D.a,
                          {
                            disabled: !d,
                            onPress: i._handleDoneButtonClick,
                            size: f,
                            style: de.button,
                            testID: ka,
                            type: 'primaryFilled',
                          },
                          c.next_link.label,
                        )
                      : y.a.createElement(
                          D.a,
                          { onPress: i._handleSkipButtonClick, size: f, style: de.button, type: 'primaryOutlined' },
                          null === (o = c.skip_link) || void 0 === o ? void 0 : o.label,
                        )
                return y.a.createElement(
                  O.a,
                  null,
                  m,
                  v,
                  null != p && p.length ? y.a.createElement(wa.a, { label: y.a.createElement(x.b, null, xa) }) : null,
                  p,
                  h,
                )
              }),
              b()(p()(i), '_validatePasswordConfirmation', function () {
                var e,
                  t,
                  n,
                  a = i.props.subtask,
                  r = a.password_confirmation_mismatch_message,
                  o =
                    null === (e = a.confirm_password_field) ||
                    void 0 === e ||
                    null === (t = e.validation_messages) ||
                    void 0 === t
                      ? void 0
                      : t.find(function (e) {
                          return e.message_type === k.E.Mismatch
                        })
                if ((o ? (n = o.text.text) : null != r && r.text && (n = null == r ? void 0 : r.text), n)) {
                  var s = i.state
                  if (s.password !== s.passwordConfirmation) return { valid: !1, errorMessage: n }
                }
                return { valid: !0, errorMessage: void 0 }
              }),
              b()(p()(i), '_handleDoneButtonClick', function () {
                var e = i.props,
                  t = e.onNavigate,
                  n = e.sendAllPreviews,
                  a = e.subtask,
                  r = e.subtaskId,
                  o = e.updateFlow
                n().finally(function () {
                  i._saveCredentialsIfNeeded()
                    .then(function () {
                      o(r, { password: i.state.password, link: a.next_link.link_id }), t(a.next_link)
                    })
                    .catch(function () {
                      i._scribeSmartLockError(),
                        o(r, { password: i.state.password, link: a.next_link.link_id }),
                        t(a.next_link)
                    })
                })
              }),
              b()(p()(i), '_handleSkipButtonClick', function () {
                var e = i.props,
                  t = e.onNavigate,
                  n = e.subtask,
                  a = e.subtaskId,
                  r = e.updateFlow,
                  o = n.skip_link
                o && (r(a, { link: o.link_id }), t(o))
              }),
              b()(p()(i), '_scribeSmartLockError', function () {
                ;(0,
                i.props
                  .scribeAction)({ page: 'onboarding', section: 'enter_password', component: 'smart_lock', element: 'prompt', action: 'error' })
              }),
              b()(p()(i), '_handlePasswordChange', function (e) {
                i.setState({ password: e })
              }),
              b()(p()(i), '_handlePasswordConfirmationChange', function (e) {
                i.setState({ passwordConfirmation: e })
              }),
              b()(p()(i), '_handleValidationChange', function (e) {
                var t = i.props.subtask,
                  n = t.show_password_confirmation
                if (t.confirm_password_field || n) {
                  var a = i._validatePasswordConfirmation().valid
                  i.setState({ isPasswordValid: e && a })
                } else i.setState({ isPasswordValid: e })
              }),
              b()(p()(i), '_isPasswordValid', function () {
                var e = i.props.subtask,
                  t = i.state,
                  n = t.isPasswordValid,
                  a = t.password,
                  r = !(a && a.length)
                return n || (e.skip_password_validation && !r)
              }),
              b()(p()(i), '_handleTextSubmit', function () {
                i._isPasswordValid() && i._handleDoneButtonClick()
              }),
              b()(p()(i), '_saveCredentialsIfNeeded', function () {
                var e = i.props.subtask,
                  t = e.email,
                  n = e.phone,
                  a = e.skip_password_validation,
                  r = e.username,
                  o = i.state.password,
                  s = !!window.PasswordCredential,
                  l = r || t || n
                if (l && s && !a && navigator.credentials) {
                  var c = new window.PasswordCredential({ id: l, password: o })
                  return navigator.credentials.store(c)
                }
                return Promise.resolve()
              }),
              b()(p()(i), '_getPasswordAutoCompleteValue', function () {
                switch (i.props.subtask.os_content_type) {
                  case k.o.Password:
                    return 'current-password'
                  case k.o.NewPassword:
                    return 'new-password'
                  default:
                    return 'on'
                }
              }),
              b()(p()(i), '_hasSSOButtons', function () {
                var e
                return !(
                  null === (e = i.props.subtask.action_buttons) ||
                  void 0 === e ||
                  !e.find(function (e) {
                    var t = Object(S.j)(e.navigation_link.link_id)
                    return t === k.b.GoogleSSO || t === k.b.AppleSSO
                  })
                )
              }),
              (i._ssoInSliEnterPasswordUpdatesEnabled = a.featureSwitches.isTrue(
                'responsive_web_sso_in_sli_enter_password_updates_enabled',
              )),
              i
            )
          }
          return (
            u()(n, [
              {
                key: 'render',
                value: function () {
                  var e,
                    t,
                    n,
                    a,
                    i = this.props,
                    o = i.errorDialog,
                    s = i.onNavigate,
                    l = i.passthroughOcfScreenProps,
                    c = i.progressIndication,
                    u = i.subtask,
                    d = i.subtaskInputs,
                    p =
                      null !== (e = null === (t = u.footer) || void 0 === t ? void 0 : t.style) && void 0 !== e
                        ? e
                        : k.i.Fixed
                  return y.a.createElement(
                    ye.a,
                    r()({}, l, { progressIndication: c, rightControl: p === k.i.Fixed ? this._renderFooter() : null }),
                    y.a.createElement(
                      O.a,
                      { style: this._hasSSOButtons() ? de.contentAreaCompact : de.contentArea },
                      y.a.createElement(ge, {
                        header: u.header,
                        onNavigate: s,
                        primaryTextProp: u.primary_text,
                        secondaryTextProp: u.secondary_text,
                        subtaskInputs: d,
                        userInfo: this._passwordlessSsoEnabled
                          ? y.a.createElement(je, {
                              displayType: k.D.compact,
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
                    o,
                  )
                },
              },
            ]),
            n
          )
        })(y.a.Component)
      b()(Sa, 'contextType', Ze.a)
      var Ta = F.a.create(function (e) {
          return { footnoteText: { marginTop: e.spaces.space40 }, detailText: { marginBottom: e.spaces.space40 } }
        }),
        Pa = ya(Sa),
        La = new RegExp('^\\+?[0-9\\-\\.\\(\\)\\s]{7,1000}$'),
        Aa = Wt.a.cd24fe6f,
        Oa = xn({
          namespace: 'phoneNumberValidity',
          fetchOneContext: 'FETCH_PHONE_VALIDITY',
          fetchOneEndpoint: function (e) {
            return e.Validity.isPhoneNumberAvailable
          },
          fetchOneParams: function (e, t) {
            var n = W()(e, 1)[0]
            return o()({ raw_phone_number: n }, t)
          },
          localValidator: function (e) {
            var t = La.test(e)
            return { errorMessage: Aa, valid: t }
          },
        }),
        Da = ['countryCode', 'onRef'],
        Fa = function (e) {
          var t = e.countryCode,
            n = e.onRef,
            a = C()(e, Da),
            i = { country_code: t }
          return y.a.createElement(Rn, r()({ module: Oa, onRef: n, type: 'tel', validationParams: i }, a))
        },
        Ra = 'ocfEnterPhoneNextLink',
        Na = 'ocfEnterPhoneSkipLink',
        Ba = n('6XNv'),
        Ma = Wt.a.gf8388fe,
        Va = (function (e) {
          m()(n, e)
          var t = v()(n)
          function n(e) {
            var a
            l()(this, n),
              (a = t.call(this, e)),
              b()(p()(a), '_renderCountryCodes', function () {
                var e = a.props.subtask.country_codes
                if (e && e.length) {
                  var t = e.map(function (e) {
                    return { label: e.text.text, value: e.id }
                  })
                  return y.a.createElement(Ba.a, {
                    helperText: void 0,
                    label: Ma,
                    onChange: a._handleCountryChange,
                    options: t,
                    value: a.state.countryCode || '',
                  })
                }
                return null
              }),
              b()(p()(a), '_handleCountryChange', function (e) {
                a.setState({ countryCode: e })
              }),
              b()(p()(a), '_renderPhoneTextField', function () {
                return y.a.createElement(Fa, {
                  autoComplete: 'tel',
                  countryCode: a.state.countryCode,
                  defaultValue: a.state.phoneNumber,
                  label: a.props.subtask.hint_text,
                  name: 'phone_number',
                  onRef: a._handleSetInputRef,
                  onValidityChange: a._handleUpdateValidity,
                  style: Ua.phoneTextField,
                })
              }),
              b()(p()(a), '_getInitialSettingValues', function (e, t, n) {
                var a
                return null === (a = e.settings) || void 0 === a
                  ? void 0
                  : a.map(function (e) {
                      var a,
                        r,
                        i,
                        o,
                        s = e.value_identifier
                      if (void 0 === s) return {}
                      var l =
                        null !==
                          (a =
                            null === (r = e.value_data) || void 0 === r || null === (i = r.boolean_data) || void 0 === i
                              ? void 0
                              : i.initial_value) &&
                        void 0 !== a &&
                        a
                      return {
                        valueIdentifier: s,
                        value: null !== (o = Object(S.e)(n, { key: s, subtask_id: t }, void 0)) && void 0 !== o ? o : l,
                      }
                    })
              }),
              b()(p()(a), '_toggleSettingValue', function (e) {
                var t = a.state.settingValues,
                  n =
                    null == t
                      ? void 0
                      : t.map(function (t) {
                          return t.valueIdentifier === e ? { valueIdentifier: e, value: !t.value } : t
                        })
                a.setState({ settingValues: n })
              }),
              b()(p()(a), '_renderSettings', function () {
                var e,
                  t,
                  n = a.props,
                  r = n.onNavigate,
                  i = n.subtask,
                  o = n.subtaskId,
                  s = n.subtaskInputs
                return null !==
                  (e =
                    null === (t = i.settings) || void 0 === t
                      ? void 0
                      : t.map(function (e) {
                          var t = e.value_identifier
                          return void 0 === t
                            ? null
                            : y.a.createElement(pa, {
                                key: t,
                                onNavigate: r,
                                onSettingToggle: function () {
                                  return a._toggleSettingValue(t)
                                },
                                settingValue: e,
                                subtaskId: o,
                                subtaskInputs: s,
                              })
                        })) && void 0 !== e
                  ? e
                  : null
              }),
              b()(p()(a), '_handleDoneButtonClick', function () {
                var e = a.props.subtask,
                  t = a.state,
                  n = t.countryCode,
                  r = t.settingValues,
                  i =
                    null == r
                      ? void 0
                      : r.map(function (e) {
                          var t = e.value
                          return { key: e.valueIdentifier, response_data: { boolean_data: { result: t } } }
                        }),
                  o = {
                    country_code: n,
                    phone_number: a._getIdentifierValue(),
                    setting_responses: i,
                    link: e.next_link.link_id,
                  }
                a._handleButtonClick(e.next_link, o)
              }),
              b()(p()(a), '_handleSkipButtonClick', function () {
                var e = a.props.subtask
                e.skip_link && a._handleButtonClick(e.skip_link, { link: e.skip_link.link_id })
              }),
              b()(p()(a), '_handleButtonClick', function (e, t) {
                var n = a.props,
                  r = n.onNavigate,
                  i = n.subtaskId
                ;(0, n.updateFlow)(i, t), r(e)
              }),
              b()(p()(a), '_handleSetInputRef', function (e) {
                a._input = e
              }),
              b()(p()(a), '_handleUpdateValidity', function () {
                var e = a._input && a._input.isValid()
                a.setState({ isValid: !!e })
              }),
              b()(p()(a), '_getIdentifierValue', function () {
                return (a._input && a._input.getValue()) || void 0
              })
            var r = e.subtask,
              i = e.subtaskId,
              o = e.subtaskInputs,
              s = Object(S.e)(o, { key: 'country_code', subtask_id: i }, r.default_country_code) || void 0,
              c = Object(S.e)(o, { key: 'phone_number', subtask_id: i }, '') || void 0,
              u = a._getInitialSettingValues(r, i, o)
            return (a.state = { countryCode: s, phoneNumber: c, isValid: !!c, settingValues: u }), a
          }
          return (
            u()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.onNavigate,
                    n = e.passthroughOcfScreenProps,
                    a = e.progressIndication,
                    i = e.subtask,
                    o = e.subtaskInputs,
                    s = i.next_link,
                    l = i.primary_text,
                    c = i.secondary_text,
                    u = i.skip_link
                  return y.a.createElement(
                    ye.a,
                    r()({}, n, {
                      footer: y.a.createElement(B, {
                        actionDisabled: !this.state.isValid,
                        actionLabel: this.state.isValid || !u ? (null == s ? void 0 : s.label) : void 0,
                        actionTestID: Ra,
                        onAction: this._handleDoneButtonClick,
                        onSecondaryAction: this._handleSkipButtonClick,
                        secondaryActionLabel: this.state.isValid || null == u ? void 0 : u.label,
                        secondaryActionTestID: Na,
                        secondaryActionType: 'primaryOutlined',
                      }),
                      header: y.a.createElement(ge, {
                        onNavigate: t,
                        primaryTextProp: l,
                        secondaryTextProp: c,
                        subtaskInputs: o,
                        withHeaderImage: !0,
                      }),
                      progressIndication: a,
                      providePadding: !0,
                    }),
                    y.a.createElement(
                      O.a,
                      { style: Ua.textFieldArea },
                      this._renderCountryCodes(),
                      this._renderPhoneTextField(),
                    ),
                    this._renderSettings(),
                    this.props.errorDialog,
                  )
                },
              },
            ]),
            n
          )
        })(y.a.Component),
        Ua = F.a.create(function (e) {
          return {
            textFieldArea: { marginTop: e.spaces.space20 },
            phoneTextField: { paddingHorizontal: 0, paddingVertical: e.spaces.space16 },
          }
        }),
        ja = n('Lam0'),
        za = 'ocfEnterRecaptchaSkipButton',
        Ha = (function (e) {
          m()(n, e)
          var t = v()(n)
          function n() {
            var e
            l()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              b()(p()(e), '_handleRecaptchaStateChange', function (t) {
                var n = e.props,
                  a = n.onNavigate,
                  r = n.subtask,
                  i = n.subtaskId,
                  o = n.updateFlow,
                  s = r.next_link
                t && (o(i, { link: s.link_id, recaptcha_response: t }), a(s))
              }),
              b()(p()(e), '_handleSkipButtonClick', function () {
                var t = e.props,
                  n = t.onNavigate,
                  a = t.subtask.skip_link,
                  r = t.subtaskId,
                  i = t.updateFlow
                a && (i(r, { link: a.link_id }), n(a))
              }),
              e
            )
          }
          return (
            u()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.errorDialog,
                    n = e.onNavigate,
                    a = e.passthroughOcfScreenProps,
                    i = e.subtask,
                    o = e.subtaskInputs,
                    s = i.primary_text,
                    l = i.secondary_text,
                    c = i.skip_link
                  return y.a.createElement(
                    ye.a,
                    r()({}, a, {
                      footer: y.a.createElement(B, {
                        onSecondaryAction: this._handleSkipButtonClick,
                        secondaryActionLabel: null == c ? void 0 : c.label,
                        secondaryActionTestID: za,
                      }),
                      header: y.a.createElement(ge, {
                        onNavigate: n,
                        primaryTextProp: s,
                        secondaryTextProp: l,
                        subtaskInputs: o,
                        withHeaderImage: !0,
                      }),
                      providePadding: !0,
                    }),
                    y.a.createElement(ja.a, {
                      nextButtonDisabled: !1,
                      onChange: this._handleRecaptchaStateChange,
                      withConsentForm: !1,
                    }),
                    t,
                  )
                },
              },
            ]),
            n
          )
        })(y.a.Component),
        Wa = 'ocfEnterTextNextButton',
        Ga = 'ocfEnterTextSkipForNowButton',
        qa = 'ocfEnterTextTextInput',
        Ka = 'text',
        Ya = (function (e) {
          m()(n, e)
          var t = v()(n)
          function n(e) {
            var a
            l()(this, n),
              (a = t.call(this, e)),
              b()(p()(a), '_handleSubmit', function () {
                a.state.text && a._handleDoneButtonClick()
              }),
              b()(p()(a), '_handleDoneButtonClick', function () {
                var e = a.props,
                  t = e.onNavigate,
                  n = e.subtask.next_link,
                  r = e.subtaskId
                ;(0, e.updateFlow)(r, o()(o()({}, a.state), {}, { link: n.link_id })), t(n)
              }),
              b()(p()(a), '_handleSkipButtonClick', function () {
                var e = a.props,
                  t = e.onNavigate,
                  n = e.subtask.skip_link,
                  r = e.subtaskId,
                  i = e.updateFlow
                n && i(r, { link: n.link_id }), n && t(n)
              }),
              b()(p()(a), '_handleEntryUpdated', function (e) {
                var t = e.target.value
                a.setState({ text: t })
              }),
              b()(p()(a), '_getAutoCompleteFromKeyboardType', function (e) {
                switch (e) {
                  case k.k.Email:
                    return 'email'
                  case k.k.Telephone:
                    return 'tel'
                  default:
                    return
                }
              }),
              b()(p()(a), '_getInputTypeFromKeyboardType', function (e) {
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
              b()(p()(a), '_getInputModeFromKeyboardType', function (e) {
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
              i = e.subtaskId,
              s = e.subtaskInputs,
              c = void 0 === s ? {} : s,
              u = r.default_text,
              d = Object(S.e)(c, { key: Ka, subtask_id: i }, u) || ''
            return (a.state = { text: d }), a
          }
          return (
            u()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.errorDialog,
                    n = e.onNavigate,
                    a = e.passthroughOcfScreenProps,
                    i = e.subtask,
                    o = e.subtaskInputs,
                    s = i.auto_capitalization_type,
                    l = i.auto_correction_enabled,
                    c = i.detail_text,
                    u = i.header,
                    d = i.hint_text,
                    p = i.keyboard_type,
                    h = i.max_length,
                    m = i.multiline,
                    f = i.next_link,
                    v = i.os_content_type,
                    _ = i.primary_text,
                    b = i.secondary_text,
                    g = i.skip_link
                  return y.a.createElement(
                    ye.a,
                    r()({}, a, {
                      footer: y.a.createElement(B, {
                        actionDisabled: !g && !this.state.text,
                        actionLabel: this.state.text || !g ? (null == f ? void 0 : f.label) : void 0,
                        actionTestID: Wa,
                        onAction: this._handleDoneButtonClick,
                        onSecondaryAction: this._handleSkipButtonClick,
                        secondaryActionLabel: this.state.text || null == g ? void 0 : g.label,
                        secondaryActionTestID: Ga,
                      }),
                      header: y.a.createElement(ge, {
                        header: u,
                        onNavigate: n,
                        primaryTextProp: _,
                        secondaryTextProp: b,
                        subtaskInputs: o,
                        withHeaderImage: !0,
                      }),
                      providePadding: !0,
                    }),
                    y.a.createElement(ln.a, {
                      autoCapitalize: s || 'sentences',
                      autoComplete: v === k.o.Username ? v : this._getAutoCompleteFromKeyboardType(p),
                      autoCorrect: l,
                      autoFocus: !0,
                      inputMode: this._getInputModeFromKeyboardType(p),
                      label: d || '',
                      maxLength: h,
                      multiline: m,
                      name: v || k.o.Text,
                      onChange: this._handleEntryUpdated,
                      onSubmitEditing: this._handleSubmit,
                      positionCursorAtEnd: !0,
                      spellCheck: l ? 'true' : 'false',
                      style: de.formTextInput,
                      testID: qa,
                      type: this._getInputTypeFromKeyboardType(p),
                      value: this.state.text,
                    }),
                    c ? y.a.createElement(A, r()({}, c, { color: 'gray700', onNavigate: n, subtaskInputs: o })) : null,
                    t,
                  )
                },
              },
            ]),
            n
          )
        })(y.a.Component),
        Xa = n('LXAX'),
        Qa = Object(yt.createSelector)(bt.e.selectLoggedInUser, Xa.c, vt.o, function (e, t, n) {
          return { loggedInUser: e, navigationContext: n, isUsernameValid: t.valid, validationError: t.desc }
        }),
        Ja = { fetchUsernameAvailability: Xa.b },
        Za = Object(gt.f)(Qa, Ja),
        $a = n('EweD'),
        er = 'ocfEnterUsernameNextButton',
        tr = 'ocfEnterUsernameSkipButton',
        nr = Wt.a.d1f6d336,
        ar = (function (e) {
          m()(n, e)
          var t = v()(n)
          function n(e) {
            var a
            l()(this, n),
              (a = t.call(this, e)),
              b()(p()(a), '_maybeRenderDetailTexts', function () {
                var e = a.props,
                  t = e.subtask,
                  n = e.subtaskInputs,
                  i = a.state.currentDetailTextIndex
                return t.detail_texts && t.detail_texts.length
                  ? y.a.createElement(
                      A,
                      r()({}, t.detail_texts[i], {
                        color: 'link',
                        onNavigate: a._handleDetailTextClick,
                        style: rr.detailLink,
                        subtaskInputs: n,
                      }),
                    )
                  : void 0
              }),
              b()(p()(a), '_handleDetailTextClick', function (e) {
                var t = a.props,
                  n = t.analytics,
                  r = t.onNavigate
                'show_more_usernames' === e.link_id
                  ? (a._updateCurrentDetailTextIndex(), n.scribe({ element: 'show_more', action: 'click' }))
                  : (a._selectUsername(e.link_id, a._fetchUsernameStatus),
                    n.scribe({ element: 'suggestion', action: 'click' })),
                  r(e)
              }),
              b()(p()(a), '_handleUsernameUpdated', function (e) {
                var t = e.target.value
                a._selectUsername(t, a._fetchUsernameStatusDebounced)
              }),
              b()(p()(a), '_selectUsername', function (e, t) {
                a.setState({ username: e }), t(e)
              }),
              b()(p()(a), '_handleNextButtonClick', function () {
                var e = a.props,
                  t = e.onNavigate,
                  n = e.subtask,
                  r = e.subtaskId,
                  i = e.updateFlow,
                  o = a.state.username
                n.next_link && (i(r, { username: o, link: n.next_link.link_id }), t(n.next_link))
              }),
              b()(p()(a), '_handleSkipButtonClick', function () {
                var e = a.props,
                  t = e.onNavigate,
                  n = e.subtask,
                  r = e.subtaskId,
                  i = e.updateFlow,
                  o = n.skip_link
                o && (i(r, { link: o.link_id }), t(o))
              }),
              b()(p()(a), '_fetchUsernameStatus', function (e) {
                var t = a.props,
                  n = t.analytics,
                  r = t.fetchUsernameAvailability,
                  i = t.loggedInUser
                i &&
                  r({
                    email: i.email && i.email[0] && i.email[0].address,
                    full_name: i.name,
                    suggest: !1,
                    username: e,
                  }).then(function (e) {
                    e && !e.valid && 'taken' === e.reason && n.scribe({ element: 'username', action: 'taken' })
                  })
              }),
              b()(p()(a), '_updateCurrentDetailTextIndex', function () {
                a.setState({ currentDetailTextIndex: a.state.currentDetailTextIndex + 1 })
              })
            var i = e.loggedInUser,
              o = e.subtaskId,
              s = e.subtaskInputs,
              c = Object(S.e)(s, { key: 'username', subtask_id: o }, '') || (i ? i.screen_name : '')
            return (
              (a.state = { currentDetailTextIndex: 0, username: c }),
              (a._fetchUsernameStatusDebounced = Object(On.a)(function () {
                var e
                return (e = a)._fetchUsernameStatus.apply(e, arguments)
              }, 250)),
              a
            )
          }
          return (
            u()(n, [
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
                  var e = this.props,
                    t = e.isUsernameValid,
                    n = e.loggedInUser,
                    a = e.onNavigate,
                    i = e.passthroughOcfScreenProps,
                    o = e.progressIndication,
                    s = e.subtask,
                    l = e.subtaskInputs,
                    c = e.validationError,
                    u = s.next_link,
                    d = s.primary_text,
                    p = s.secondary_text,
                    h = s.skip_link,
                    m = this.state.username,
                    f = (n && n.screen_name && n.screen_name.toLowerCase()) === (m && m.toLowerCase())
                  return y.a.createElement(
                    ye.a,
                    r()({}, i, {
                      footer: y.a.createElement(B, {
                        actionDisabled: !t,
                        actionLabel: m && !f ? (null == u ? void 0 : u.label) : void 0,
                        actionTestID: er,
                        onAction: this._handleNextButtonClick,
                        onSecondaryAction: this._handleSkipButtonClick,
                        secondaryActionLabel: !m || f ? (null == h ? void 0 : h.label) : void 0,
                        secondaryActionTestID: tr,
                      }),
                      header: y.a.createElement(ge, {
                        onNavigate: a,
                        primaryTextProp: d,
                        secondaryTextProp: p,
                        subtaskInputs: l,
                        withHeaderImage: !0,
                      }),
                      progressIndication: o,
                      providePadding: !0,
                    }),
                    y.a.createElement(ln.a, {
                      Icon: $a.a,
                      autoComplete: 'off',
                      autoCorrect: !1,
                      autoFocus: !0,
                      errorText: c,
                      invalid: !!m && !f && !t,
                      label: s.hint || nr,
                      name: 'username',
                      onChange: this._handleUsernameUpdated,
                      showValidationIcon: !!m,
                      spellCheck: 'false',
                      style: de.formTextInput,
                      value: m,
                    }),
                    this._maybeRenderDetailTexts(),
                    this.props.errorDialog,
                  )
                },
              },
            ]),
            n
          )
        })(y.a.Component),
        rr = F.a.create(function (e) {
          return { detailLink: { marginTop: e.spaces.space16 } }
        }),
        ir = Object(Nt.a)(Za(ar), { section: 'enter_username' }),
        or = (n('lTEL'), n('LqLs'), n('87if'), n('kYxP'), n('hCOa'), n('v84o')),
        sr = n('8Lfv'),
        lr = Object(Ge.a)()
          .propsFromActions(function () {
            return {
              clearTimelineCache: sr.a,
              createLocalApiErrorHandler: Object(qe.createLocalApiErrorHandlerWithContextFactory)('OCF_GENERIC_URT'),
            }
          })
          .withAnalytics(),
        cr = n('QIgh'),
        ur = n('5Y9N'),
        dr = n('doI8'),
        pr = n('BV3T'),
        hr = n('VTxf'),
        mr = n('fTQJ'),
        fr = n('7JQg'),
        vr = n('wgnn'),
        _r = n('gwY8'),
        br = n('ywYn'),
        gr = n('855f'),
        yr = n('cHvH'),
        kr = n('oQhu'),
        wr = (n('yH/f'), Object.freeze({ TopicFollowCount: 'topic_follow_count' })),
        Cr = function (e) {
          switch (e) {
            case vr.a.NOT_FOUND:
              return y.a.createElement(hr.a, null)
            case vr.a.NOT_ALLOWED:
              return y.a.createElement(pr.a, null)
            default:
              return Object(Rt.a)('Unhandled timeline unavailable reason in Ocf GenericURT screen: '.concat(e)), null
          }
        },
        Er = Object(kr.a)(function (e) {
          return (function (e) {
            return o()(o()({}, cr.b), Object(ur.a)({ isWide: e }))
          })(e)
        }),
        Ir = (function (e) {
          m()(n, e)
          var t = v()(n)
          function n(e) {
            var a
            return (
              l()(this, n),
              (a = t.call(this, e)),
              b()(p()(a), '_isNextButtonEnabled', function () {
                var e,
                  t,
                  n = a.state.topicsFollowed,
                  r = a.props.subtask,
                  i = r.navigation_link_options,
                  o = (i = void 0 === i ? {} : i).max_enable_count,
                  s = i.min_enable_count,
                  l =
                    (null === (e = r.navigation_link_options) ||
                    void 0 === e ||
                    null === (t = e.count_subtask_data_reference) ||
                    void 0 === t
                      ? void 0
                      : t.key) === wr.TopicFollowCount
                return s && o
                  ? l && n.size >= s && n.size <= o
                  : s && !o
                  ? l && n.size >= s
                  : !s && o
                  ? l && n.size <= o
                  : (!s && !o) || void 0
              }),
              b()(p()(a), '_renderThresholdDetailText', function (e, t) {
                for (
                  var n, i = a.props, o = i.onNavigate, s = i.subtaskInputs, l = -1, c = 0;
                  c < (null == e ? void 0 : e.length);
                  c++
                ) {
                  var u = e[c],
                    d = u.text,
                    p = u.threshold
                  p > l && p <= t && ((l = p), (n = d))
                }
                var h = a._isNextButtonEnabled() ? 'alwaysBaseGray1100' : 'gray700',
                  m = a._isNextButtonEnabled() ? 'bold' : 'normal'
                return a.state.initialized && n
                  ? y.a.createElement(
                      O.a,
                      { style: xr.detailText },
                      y.a.createElement(
                        x.b,
                        { color: h, size: 'subtext2', weight: m },
                        a._isNextButtonEnabled() ? null : gr.a.getFormattedCount(t),
                        y.a.createElement(A, r()({}, n, { color: h, onNavigate: o, subtaskInputs: s, weight: m })),
                      ),
                    )
                  : y.a.createElement(O.a, null)
              }),
              b()(
                p()(a),
                '_getModule',
                Object(kr.a)(function (e) {
                  var t = a.props.subtask,
                    n = t.graphql_timeline_query,
                    r = t.timeline_source
                  return n
                    ? Object(dr.a)(n.timeline_key)
                    : Object(or.a)({ urtUrl: { url: r || '', urlType: br.a.UrtEndpoint } })
                }),
              ),
              b()(p()(a), '_resetState', function () {
                a.setState({ topicsFollowed: new Set(), initialized: !1 })
              }),
              b()(p()(a), '_handleOnTopicInitialize', function (e, t) {
                a.setState(function (n) {
                  var a = Object(tt.a)(Array.from(n.topicsFollowed))
                  return t ? a.add(e) : a.delete(e), { initialized: !0, topicsFollowed: a }
                })
              }),
              b()(p()(a), '_handleOnTopicFollow', function (e) {
                var t = Object(tt.a)(Array.from(a.state.topicsFollowed))
                t.add(e), a.setState({ topicsFollowed: t })
              }),
              b()(p()(a), '_handleOnTopicUnfollow', function (e) {
                var t = Object(tt.a)(Array.from(a.state.topicsFollowed))
                t.delete(e), a.setState({ topicsFollowed: t })
              }),
              b()(p()(a), '_handleNextButtonClick', function () {
                var e = a.props,
                  t = e.onNavigate,
                  n = e.subtask,
                  r = e.subtaskId
                ;(0, e.updateFlow)(r, { link: n.next_link.link_id }), t(n.next_link)
              }),
              b()(p()(a), '_clearTimelineCache', function () {
                var e = a.props,
                  t = e.clearTimelineCache,
                  n = e.createLocalApiErrorHandler,
                  r = e.subtask.graphql_timeline_query
                r && t(Object(dr.a)(r.timeline_key)).catch(n())
              }),
              (a.state = { topicsFollowed: new Set(), initialized: !1 }),
              a
            )
          }
          return (
            u()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.analytics,
                    n = e.subtask
                  t.scribe(o()(o()({}, n.scribe_config), {}, { action: 'impression' }))
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
                    n.scribe(o()(o()({}, a.scribe_config), {}, { action: 'impression' })))
                },
              },
              {
                key: 'render',
                value: function () {
                  var e,
                    t,
                    n,
                    a,
                    i,
                    o = this,
                    s = this.props,
                    l = s.errorDialog,
                    c = s.onNavigate,
                    u = s.passthroughOcfScreenProps,
                    d = s.subtask,
                    p = s.subtaskId,
                    h = s.subtaskInputs,
                    m = this.state.topicsFollowed,
                    f = d.header,
                    v = d.detail_rich_text_options,
                    _ = (v = void 0 === v ? {} : v).label_conditional_text,
                    b =
                      (null === (e = d.navigation_link_options) ||
                      void 0 === e ||
                      null === (t = e.count_subtask_data_reference) ||
                      void 0 === t
                        ? void 0
                        : t.key) === wr.TopicFollowCount,
                    g = y.a.createElement(
                      D.a,
                      {
                        disabled: !this._isNextButtonEnabled(),
                        onPress: this._handleNextButtonClick,
                        size: 'large',
                        type: 'primaryFilled',
                      },
                      (null === (n = d.navigation_link_options) || void 0 === n ? void 0 : n.label_conditional_text) ||
                        d.next_link.label,
                    ),
                    k =
                      (null === (a = d.detail_rich_text_options) ||
                      void 0 === a ||
                      null === (i = a.count_subtask_data_reference) ||
                      void 0 === i
                        ? void 0
                        : i.key) === wr.TopicFollowCount && _
                        ? y.a.createElement(
                            O.a,
                            { style: xr.spaceBetween },
                            this._renderThresholdDetailText(_, m.size),
                            g,
                          )
                        : g,
                    w = y.a.createElement(
                      ye.a,
                      r()({}, u, {
                        header: y.a.createElement(ge, {
                          header: f,
                          onNavigate: c,
                          subtaskInputs: h,
                          withHeaderImage: !0,
                        }),
                        providePadding: !0,
                        rightControl: k,
                      }),
                      y.a.createElement(
                        O.a,
                        null,
                        d.graphql_timeline_query || d.timeline_source
                          ? y.a.createElement(yr.a, null, function (e) {
                              var t = e.windowWidth >= F.a.theme.breakpoints.small
                              return y.a.createElement(
                                _r.a.Provider,
                                {
                                  value: {
                                    onInitialize: b ? o._handleOnTopicInitialize : De.a,
                                    onFollow: b ? o._handleOnTopicFollow : De.a,
                                    onUnfollow: b ? o._handleOnTopicUnfollow : De.a,
                                  },
                                },
                                y.a.createElement(mr.a, {
                                  entryConfiguration: Er(t),
                                  module: o._getModule(p),
                                  renderUnavailable: Cr,
                                  title: '',
                                  withoutHeadroom: !0,
                                }),
                              )
                            })
                          : null,
                      ),
                      l,
                    )
                  return d.scribe_config ? y.a.createElement(fr.c, { namespace: d.scribe_config }, w) : w
                },
              },
            ]),
            n
          )
        })(y.a.Component),
        xr = F.a.create(function (e) {
          return {
            detailText: { justifyContent: 'center' },
            spaceBetween: { flexDirection: 'row', justifyContent: 'space-between' },
          }
        }),
        Sr = lr(Ir),
        Tr = 'selected_custom_interests',
        Pr = 'selected_interest_ids',
        Lr = function (e, t) {
          var n = Object(vt.v)(e)
          return (Object(S.e)(n, { key: Tr, subtask_id: t.subtaskId }, []) || []).map(function (e) {
            return { topic: e.custom_interest, ttt_token: e.ttt_token }
          })
        },
        Ar = Object(yt.createSelector)(
          Lr,
          function (e, t) {
            return Lr(e, t).map(function (e) {
              return e.topic
            })
          },
          function (e, t) {
            var n = Object(vt.v)(e)
            return Object(S.e)(n, { key: Pr, subtask_id: t.subtaskId }, []) || void 0
          },
          function (e, t, n) {
            return { initialCustomInterests: e, initialCustomInterestIds: t, initialSelectedInterestIds: n }
          },
        ),
        Or = Object(gt.c)(Ar),
        Dr = 'ocfInterestPickerNextLink',
        Fr = 'ocfInterestPickerSkipLink',
        Rr = n('2dXj'),
        Nr = n('aV/s'),
        Br = n('GZwR'),
        Mr = [Br.a.Topics],
        Vr = (function (e) {
          m()(n, e)
          var t = v()(n)
          function n(e) {
            var a
            l()(this, n),
              (a = t.call(this, e)),
              b()(p()(a), '_maybeRenderCustomInterests', function () {
                var e = a.props.subtask.custom_interests_header,
                  t = a.state,
                  n = t.customInterests
                if (t.shouldRenderCustomInterests)
                  return y.a.createElement(
                    O.a,
                    null,
                    y.a.createElement(
                      O.a,
                      { style: Ur.group, testID: 'custom' },
                      y.a.createElement(x.b, { size: 'headline1', style: Ur.groupHeader, weight: 'bold' }, e),
                      y.a.createElement(
                        O.a,
                        { style: Ur.pillsContainer },
                        n.map(function (e) {
                          return a._renderCustomInterest(e.topic)
                        }),
                      ),
                    ),
                  )
              }),
              b()(p()(a), '_renderGroup', function (e) {
                var t
                if (e.show_more) {
                  var n = e.show_more.initial_to_show + (e.expanded ? e.show_more.extra_to_show : 0)
                  t = e.items.slice(0, n)
                } else t = e.items
                return y.a.createElement(
                  O.a,
                  { key: 'group_'.concat(e.header), style: Ur.group, testID: 'group' },
                  y.a.createElement(x.b, { size: 'headline1', style: Ur.groupHeader, weight: 'bold' }, e.header),
                  y.a.createElement(
                    O.a,
                    { style: Ur.pillsContainer },
                    t.map(a._renderSelectionPill),
                    a._maybeRenderShowMoreButton(e),
                  ),
                )
              }),
              b()(p()(a), '_maybeRenderShowMoreButton', function (e) {
                var t = e.show_more
                return t && e.items.length > t.initial_to_show && !e.expanded
                  ? y.a.createElement(Nr.a, {
                      compact: !0,
                      key: 'showMore_'.concat(e.header),
                      mode: 'expand',
                      onClick: a._handleShowMore(e),
                      style: Ur.selectionPillStyles,
                      text: t.text,
                    })
                  : null
              }),
              b()(p()(a), '_renderCustomInterest', function (e) {
                var t = a.state.selectedCustomInterestIds
                return y.a.createElement(Nr.a, {
                  compact: !0,
                  key: 'selectionPill_'.concat(e),
                  onClick: a._handleToggleCustomInterest(e),
                  selected: t.has(e),
                  style: Ur.selectionPillStyles,
                  text: e,
                })
              }),
              b()(p()(a), '_renderSelectionPill', function (e) {
                var t = a.state.selectedInterestIds.has(e.id),
                  n = a._handleToggleInterest(e.id, t)
                return y.a.createElement(Nr.a, {
                  compact: !0,
                  key: 'selectionPill_'.concat(e.id),
                  onClick: n,
                  selected: t,
                  style: Ur.selectionPillStyles,
                  text: e.name,
                })
              }),
              b()(p()(a), '_shouldShowSkipInstead', function () {
                var e = a.state,
                  t = e.selectedCustomInterestIds,
                  n = e.selectedInterestIds
                return a.props.subtask.skip_link && 0 === n.size && 0 === t.size
              }),
              b()(p()(a), '_handleSuggestionSelected', function (e) {
                var t = a.state,
                  n = t.customInterestIds,
                  r = t.selectedCustomInterestIds
                if (e.type === Br.b.Topic || e.type === Br.b.Hashtag) {
                  var i = e.data.topic,
                    o = { topic: i, ttt_token: void 0 }
                  n.has(i) ||
                    a.setState({
                      customInterests: a.state.customInterests.concat([o]),
                      customInterestIds: Object(tt.a)(I()(n)).add(i),
                      selectedCustomInterestIds: Object(tt.a)(I()(r)).add(i),
                      shouldRenderCustomInterests: !0,
                    })
                }
              }),
              b()(p()(a), '_handleShowMore', function (e) {
                return function () {
                  var t = a.state.groups,
                    n = t.find(function (t) {
                      return t.header === e.header
                    })
                  n && (n.expanded = !0), a.setState({ groups: t })
                }
              }),
              b()(p()(a), '_handleToggleCustomInterest', function (e) {
                return function () {
                  var t = Object(tt.a)(I()(a.state.selectedCustomInterestIds))
                  t.has(e)
                    ? (t.delete(e), a.setState({ selectedCustomInterestIds: t }))
                    : a.setState({ selectedCustomInterestIds: t.add(e) })
                }
              }),
              b()(p()(a), '_handleToggleInterest', function (e, t) {
                return function () {
                  var n = Object(tt.a)(I()(a.state.selectedInterestIds))
                  t
                    ? (n.delete(e), a.setState({ selectedInterestIds: n }))
                    : a.setState({ selectedInterestIds: n.add(e) })
                }
              }),
              b()(p()(a), '_handleNextButtonClick', function () {
                var e = a.props,
                  t = e.onNavigate,
                  n = e.subtask,
                  r = e.subtaskId,
                  i = e.updateFlow,
                  o = a.state,
                  s = o.customInterests,
                  l = o.selectedCustomInterestIds,
                  c = s.reduce(function (e, t) {
                    return l.has(t.topic) && e.push({ custom_interest: t.topic, ttt_token: t.ttt_token }), e
                  }, [])
                i(r, {
                  link: n.next_link.link_id,
                  selected_interest_ids: Array.from(a.state.selectedInterestIds),
                  selected_custom_interests: c,
                }),
                  t(n.next_link)
              }),
              b()(p()(a), '_handleSkipButtonClick', function () {
                var e = a.props,
                  t = e.onNavigate,
                  n = e.subtask,
                  r = e.subtaskId,
                  i = e.updateFlow
                n.skip_link && i(r, { link: n.skip_link.link_id }), n.skip_link && t(n.skip_link)
              })
            var r = e.initialCustomInterestIds,
              i = e.initialCustomInterests,
              o = e.initialSelectedInterestIds,
              s = e.subtask.selected_items
            return (
              (a.state = {
                groups: e.subtask.groups || [],
                customInterests: I()(i),
                customInterestIds: Object(tt.a)(r),
                selectedCustomInterestIds: Object(tt.a)(r),
                selectedInterestIds: o && o.length > 0 ? Object(tt.a)(o) : Object(tt.a)(s || []),
                shouldRenderCustomInterests: i.length > 0,
              }),
              a
            )
          }
          return (
            u()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.onNavigate,
                    n = e.passthroughOcfScreenProps,
                    a = e.subtask,
                    i = e.subtaskInputs,
                    o = a.next_link,
                    s = a.primary_text,
                    l = a.secondary_text,
                    c = a.skip_link,
                    u = this.state.groups
                  return y.a.createElement(
                    ye.a,
                    r()({}, n, {
                      footer: y.a.createElement(B, {
                        actionLabel: this._shouldShowSkipInstead() || null == o ? void 0 : o.label,
                        actionTestID: Dr,
                        onAction: this._handleNextButtonClick,
                        onSecondaryAction: this._handleSkipButtonClick,
                        secondaryActionLabel: this._shouldShowSkipInstead() ? (null == c ? void 0 : c.label) : void 0,
                        secondaryActionTestID: Fr,
                      }),
                      header: y.a.createElement(ge, {
                        onNavigate: t,
                        primaryTextProp: s,
                        secondaryTextProp: l,
                        subtaskInputs: i,
                        withHeaderImage: !0,
                      }),
                      providePadding: !0,
                    }),
                    a.hide_search
                      ? null
                      : y.a.createElement(
                          O.a,
                          { style: Ur.searchContainer },
                          y.a.createElement(Rr.c, {
                            filter: Mr,
                            maxTopics: 8,
                            onItemClick: this._handleSuggestionSelected,
                            placeholder: a.hint,
                            rounded: !0,
                            shouldAutoFocus: !0,
                            shouldClearOnSelect: !0,
                            source: Br.d.WelcomeFlow,
                            withFocusStyling: !0,
                          }),
                        ),
                    this._maybeRenderCustomInterests(),
                    y.a.createElement(O.a, null, u.map(this._renderGroup)),
                    this.props.errorDialog,
                  )
                },
              },
            ]),
            n
          )
        })(y.a.Component),
        Ur = F.a.create(function (e) {
          return {
            searchContainer: { marginBottom: e.spaces.space16, zIndex: 1 },
            selectionPillStyles: { margin: e.spaces.space4 },
            pillsContainer: { flexDirection: 'row', flexWrap: 'wrap' },
            groupHeader: { marginTop: e.spaces.space12, marginBottom: e.spaces.space12 },
            group: { marginBottom: e.spaces.space12 },
          }
        }),
        jr = Or(Vr),
        zr = n('Ukpf'),
        Hr = n('Qwev'),
        Wr = function (e) {
          var t = y.a.useState(!1),
            n = W()(t, 2),
            a = n[0],
            r = n[1],
            i = y.a.useRef(null),
            s = e || {},
            l = s.onNavigate,
            c = s.subtask,
            u = c.next_link,
            d = c.timeout_ms,
            p = void 0 === d ? 2e3 : d,
            h = c.url,
            m = s.subtaskId,
            f = s.updateFlow,
            v = y.a.useCallback(
              function () {
                var e = Math.min(100, p),
                  t = 0,
                  n = setInterval(function () {
                    var a = i.current && i.current.value ? { response: i.current.value } : void 0
                    ;(t += e), (a || t >= p) && (clearInterval(n), f(m, o()(o()({}, a), {}, { link: u.link_id })), l(u))
                  }, e)
                return n
              },
              [u, l, f, m, p],
            )
          return (
            y.a.useEffect(
              function () {
                var e
                return (
                  r(!1),
                  zr.a.replace({
                    callback: function () {
                      r(!0), (e = v())
                    },
                    scriptId: 'jsInstLibrary',
                    src: h,
                  }),
                  function () {
                    return clearInterval(e)
                  }
                )
              },
              [v, h],
            ),
            y.a.createElement(
              y.a.Fragment,
              null,
              y.a.createElement('input', {
                autoComplete: 'off',
                'data-testid': 'tim_input',
                id: 'tim_input',
                name: 'ui_metrics',
                ref: i,
                type: 'hidden',
              }),
              a ? null : y.a.createElement(Hr.a, { style: Gr.activityIndicator }),
            )
          )
        },
        Gr = F.a.create(function (e) {
          return { activityIndicator: { height: '100%' } }
        }),
        qr = n('mjJ+'),
        Kr = (function (e) {
          m()(n, e)
          var t = v()(n)
          function n() {
            var e
            l()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              b()(p()(e), '_makeNavFunction', function (t) {
                return function () {
                  var n = e.props,
                    a = n.onNavigate,
                    r = n.subtaskId
                  ;(0, n.updateFlow)(r, { link: t.link_id }), a(t)
                }
              }),
              b()(p()(e), '_itemFromNavLink', function (t) {
                return { text: t.label || '', onClick: e._makeNavFunction(t) }
              }),
              e
            )
          }
          return (
            u()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.onNavigate,
                    n = e.subtask,
                    a = e.subtaskInputs
                  return y.a.createElement(qr.a, {
                    cancelButtonLabel: n.cancel_link && n.cancel_link.text,
                    description: n.primary_text
                      ? y.a.createElement(
                          A,
                          r()({}, n.primary_text, {
                            nativeID: M.b,
                            onNavigate: t,
                            style: { padding: F.a.theme.spacesPx.space16 },
                            subtaskInputs: a,
                          }),
                        )
                      : null,
                    items: n.primary_action_links.map(this._itemFromNavLink),
                    onCloseRequested: n.cancel_link ? this._makeNavFunction(n.cancel_link) : De.a,
                  })
                },
              },
            ]),
            n
          )
        })(y.a.Component),
        Yr = n('vEo5'),
        Xr = Object(yt.createSelector)(
          Yr.selectShouldPromptBrowserPush,
          function (e) {
            return Yr.selectBrowserPushStatus(e)
          },
          function (e, t) {
            return { promptAllowed: e, pushSettingsFetchStatus: t.fetchStatus, subscribed: t.subscribed }
          },
        ),
        Qr = {
          createLocalApiErrorHandler: Object(qe.createLocalApiErrorHandlerWithContextFactory)(
            'NOTIFICATIONS_PERMISSIONS_PROMPT',
          ),
          dismissPushNotificationsPrompt: Yr.dismissPushNotificationsPrompt,
          fetchPushSettingsIfNeeded: Yr.fetchPushSettingsIfNeeded,
          loadPushPromptSettingsIfNeeded: Yr.loadPushPromptSettingsIfNeeded,
          pushSubscribe: Yr.pushSubscribe,
        },
        Jr = Object(gt.f)(Xr, Qr),
        Zr = n('5pef')
      function $r(e, t) {
        e.granted_link.label ||
          Object(Rt.a)('Invalid notification permission prompt subtask: granted_link does not have a label', {
            extra: { subtaskId: t, grantedLinkId: e.granted_link.link_id },
          })
      }
      var ei = Jr(
          (function (e) {
            m()(n, e)
            var t = v()(n)
            function n() {
              var e
              l()(this, n)
              for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
              return (
                (e = t.call.apply(t, [this].concat(r))),
                b()(p()(e), '_actionClicked', function (t) {
                  var n = e.props,
                    a = n.onNavigate,
                    r = n.subtaskId
                  ;(0, n.updateFlow)(r, { link: t.link_id }), a(t)
                }),
                b()(p()(e), '_handleSkip', function () {
                  var t = e.props,
                    n = t.dismissPushNotificationsPrompt,
                    a = t.subtask
                  n(), e._actionClicked(a.denied_link)
                }),
                b()(p()(e), '_handleConfirm', function () {
                  var t = e.props,
                    n = t.pushSubscribe,
                    a = t.subtask
                  n().then(function () {
                    e._actionClicked(a.granted_link)
                  })
                }),
                b()(p()(e), '_skipIfPushPromptNotAllowed', function () {
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
              u()(n, [
                {
                  key: 'componentDidMount',
                  value: function () {
                    var e = this.props,
                      t = e.createLocalApiErrorHandler,
                      n = e.fetchPushSettingsIfNeeded,
                      a = e.pushSettingsFetchStatus
                    $r(e.subtask, e.subtaskId),
                      n().catch(t(b()({}, tn.a.AppInReadOnlyMode, { customAction: De.a }))),
                      a === Ye.a.LOADED && this._skipIfPushPromptNotAllowed()
                  },
                },
                {
                  key: 'componentDidUpdate',
                  value: function (e) {
                    var t = this.props,
                      n = t.pushSettingsFetchStatus,
                      a = t.subtask
                    n === Ye.a.LOADED &&
                      e.pushSettingsFetchStatus !== Ye.a.LOADED &&
                      this._skipIfPushPromptNotAllowed(),
                      a !== e.subtask && $r(a, this.props.subtaskId)
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var e = this.props,
                      t = e.onNavigate,
                      n = e.passthroughOcfScreenProps,
                      a = e.promptAllowed,
                      i = e.subtask,
                      o = e.subtaskInputs,
                      s = i.primary_text
                        ? y.a.createElement(
                            A,
                            r()({}, i.primary_text, { nativeID: M.b, onNavigate: t, subtaskInputs: o }),
                          )
                        : null,
                      l = i.secondary_text
                        ? y.a.createElement(A, r()({}, i.secondary_text, { onNavigate: t, subtaskInputs: o }))
                        : null
                    return a && i.granted_link.label
                      ? y.a.createElement(
                          ye.a,
                          r()({ hideLogo: !0 }, n),
                          y.a.createElement(Fe.a, {
                            actionLabel: i.granted_link.label,
                            graphic: Zr.a,
                            headline: s,
                            onAction: this._handleConfirm,
                            onClose: this._handleSkip,
                            onTertiaryAction: this._handleSkip,
                            subtext: l,
                            tertiaryActionLabel: i.denied_link.label,
                            withCloseButton: !1,
                          }),
                        )
                      : null
                  },
                },
              ]),
              n
            )
          })(y.a.Component),
        ),
        ti = {
          callOnboardingPath: vt.b,
          createLocalApiErrorHandler: Object(qe.createLocalApiErrorHandlerWithContextFactory)('OCF_OPEN_LINK'),
        },
        ni = Object(gt.b)(ti)(
          (function (e) {
            m()(n, e)
            var t = v()(n)
            function n() {
              var e
              l()(this, n)
              for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
              return (
                (e = t.call.apply(t, [this].concat(r))),
                b()(p()(e), '_hitCallbackPath', function () {
                  var t = e.props,
                    n = t.callOnboardingPath,
                    a = t.createLocalApiErrorHandler,
                    r = t.flowName,
                    i = t.subtask.onboarding_callback_path
                  return i ? n(i).catch(a(sn(r, void 0, De.a))) : Promise.resolve()
                }),
                e
              )
            }
            return (
              u()(n, [
                {
                  key: 'render',
                  value: function () {
                    var e = this.props,
                      t = e.onNavigate,
                      n = e.subtask,
                      a = e.subtaskId
                    return y.a.createElement(Je, {
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
          })(y.a.Component),
        ),
        ai = n('TpKd'),
        ri = Object(yt.createSelector)(vt.o, vt.x, function (e, t) {
          return { navigationContext: e, verificationSendFailureMessage: t }
        }),
        ii = {
          createLocalApiErrorHandler: Object(qe.createLocalApiErrorHandlerWithContextFactory)(
            'OCF_FLOW_PHONE_VERIFICATION',
          ),
          verifyIdentifier: vt.B,
        },
        oi = Object(gt.f)(ri, ii),
        si = 'ocfPhoneVerificationNextLink',
        li = 'normalized_phone',
        ci = (function (e) {
          m()(n, e)
          var t = v()(n)
          function n(e, a) {
            var r
            l()(this, n),
              (r = t.call(this, e, a)),
              b()(p()(r), '_sendSmsVerificationRequest', function () {
                var e = r.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.navigationContext,
                  a = e.onNavigate,
                  i = e.subtask,
                  o = e.subtaskInputs,
                  s = e.verifyIdentifier,
                  l = i.phone_number && Object(S.g)(o, i.phone_number),
                  c = i.phone_country_code && Object(S.g)(o, i.phone_country_code),
                  u = n && n.action ? n.action === k.A.ResendVoice : !!i.send_via_voice
                return (
                  r._isSmsAutoVerifyEnabled && r._autoVerifySmsCode(),
                  s({
                    phone: l,
                    use_voice: u,
                    sim_country_code: c,
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
                        o = n.flowName,
                        s = n.verificationSendFailureMessage
                      t(sn(o, s || rn))(e), a(i.fail_link)
                    })
                )
              }),
              b()(p()(r), '_handleCodeUpdated', function (e) {
                r.setState({ code: e.target.value })
              }),
              b()(p()(r), '_autoVerifySmsCode', function () {
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
              b()(p()(r), '_handleDoneButtonClick', function () {
                var e = r.props,
                  t = e.onNavigate,
                  n = e.subtask,
                  a = e.subtaskId,
                  i = e.updateFlow,
                  o = r.state,
                  s = o.code,
                  l = o.normalized_phone
                i(a, { code: s, link: n.next_link.link_id, normalized_phone: l, by_voice: !!n.send_via_voice }),
                  t(n.next_link)
              })
            var i = e.subtaskId,
              o = e.subtaskInputs,
              s = Object(S.e)(o, { key: li, subtask_id: i }, '') || ''
            return (
              (r.state = { code: '', normalized_phone: s, showSmsResendDialog: !1 }),
              (r._isSmsAutoVerifySupported = 'OTPCredential' in window),
              (r._isSmsAutoVerifyEnabled =
                r._isSmsAutoVerifySupported &&
                r.context.featureSwitches.isTrue('responsive_web_ocf_sms_autoverify_enabled')),
              r._isSmsAutoVerifyEnabled && (r._smsAutoVerifyAbortController = new AbortController()),
              r
            )
          }
          return (
            u()(n, [
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
                    i = e.subtask,
                    o = e.subtaskInputs,
                    s = i.next_link,
                    l = i.primary_text,
                    c = i.secondary_text,
                    u = y.a.createElement(
                      A,
                      r()({}, i.detail_text, { color: 'link', onNavigate: t, style: ui.detailLink, subtaskInputs: o }),
                    )
                  return y.a.createElement(
                    ye.a,
                    r()({}, n, {
                      footer: y.a.createElement(B, {
                        actionDisabled: !this.state.code,
                        actionLabel: null == s ? void 0 : s.label,
                        actionTestID: si,
                        onAction: this._handleDoneButtonClick,
                      }),
                      header: y.a.createElement(ge, {
                        onNavigate: t,
                        primaryTextProp: l,
                        secondaryTextProp: c,
                        subtaskInputs: o,
                        withHeaderImage: !0,
                      }),
                      progressIndication: a,
                      providePadding: !0,
                    }),
                    y.a.createElement(ln.a, {
                      autoComplete: 'one-time-code',
                      autoFocus: !0,
                      helperText: u,
                      inputMode: 'numeric',
                      label: i.hint_text,
                      name: 'verfication_code',
                      onChange: this._handleCodeUpdated,
                      pattern: '\\d{6}',
                      style: de.formTextInput,
                      value: this.state.code,
                    }),
                    this.props.errorDialog,
                  )
                },
              },
            ]),
            n
          )
        })(y.a.Component)
      b()(ci, 'contextType', Ze.a)
      var ui = F.a.create(function (e) {
          return { detailLink: { marginTop: e.spaces.space16 } }
        }),
        di = Object(Nt.a)(oi(ci), { component: 'phone_verification' }),
        pi = 'discoverable_by_email',
        hi = 'discoverable_by_phone',
        mi = (function (e) {
          m()(n, e)
          var t = v()(n)
          function n(e) {
            var a
            l()(this, n),
              (a = t.call(this, e)),
              b()(p()(a), '_formatSubtaskInputsForRedux', function (e) {
                return {
                  link: a.props.subtask.next_link,
                  discoverable_by_email: e.discoverable_by_email ? 1 : 0,
                  discoverable_by_phone: e.discoverable_by_phone ? 1 : 0,
                }
              }),
              b()(p()(a), '_getInitialSubtaskInputs', function () {
                var e = a.props,
                  t = e.subtaskId,
                  n = e.subtaskInputs
                return {
                  discoverable_by_email: 0 !== Object(S.e)(n, { key: pi, subtask_id: t }),
                  discoverable_by_phone: 0 !== Object(S.e)(n, { key: hi, subtask_id: t }),
                }
              }),
              b()(p()(a), '_handleDoneButtonClick', function () {
                var e = a.props,
                  t = e.onNavigate,
                  n = e.subtask,
                  r = e.subtaskId
                ;(0, e.updateFlow)(r, a._formatSubtaskInputsForRedux(a.state)), t(n.next_link)
              }),
              b()(p()(a), '_handleDiscoverableByEmailToggle', function (e) {
                a.setState({ discoverable_by_email: e })
              }),
              b()(p()(a), '_handleDiscoverableByPhoneToggle', function (e) {
                a.setState({ discoverable_by_phone: e })
              })
            var r = a._getInitialSubtaskInputs()
            return (a.state = o()({}, r)), a
          }
          return (
            u()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.state,
                    t = e.discoverable_by_email,
                    n = e.discoverable_by_phone,
                    a = this.props,
                    i = a.onNavigate,
                    o = a.passthroughOcfScreenProps,
                    s = a.subtask,
                    l = a.subtaskInputs,
                    c = s.next_link,
                    u = s.primary_text,
                    d = s.secondary_text
                  return y.a.createElement(
                    ye.a,
                    r()({}, o, {
                      footer: y.a.createElement(B, {
                        actionLabel: null == c ? void 0 : c.label,
                        onAction: this._handleDoneButtonClick,
                      }),
                      header: y.a.createElement(ge, {
                        onNavigate: i,
                        primaryTextProp: d || u,
                        subtaskInputs: l,
                        withHeaderImage: !0,
                      }),
                      providePadding: !0,
                    }),
                    y.a.createElement(
                      O.a,
                      { accessibilityRole: 'label', style: de.option },
                      y.a.createElement(
                        O.a,
                        { style: de.checkboxText },
                        y.a.createElement(x.b, null, s.discoverable_by_email_label),
                        y.a.createElement(
                          A,
                          r()({}, s.discoverable_by_email_detail_text, {
                            color: 'gray700',
                            onNavigate: i,
                            size: 'subtext2',
                            subtaskInputs: l,
                          }),
                        ),
                      ),
                      y.a.createElement(st.a, { checked: t, onChange: this._handleDiscoverableByEmailToggle }),
                    ),
                    y.a.createElement(
                      O.a,
                      { accessibilityRole: 'label', style: de.option },
                      y.a.createElement(
                        O.a,
                        { style: de.checkboxText },
                        y.a.createElement(x.b, null, s.discoverable_by_phone_label),
                        y.a.createElement(
                          A,
                          r()({}, s.discoverable_by_phone_detail_text, {
                            color: 'gray700',
                            onNavigate: i,
                            size: 'subtext2',
                            subtaskInputs: l,
                          }),
                        ),
                      ),
                      y.a.createElement(st.a, { checked: n, onChange: this._handleDiscoverableByPhoneToggle }),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(y.a.Component),
        fi =
          (n('TJCb'),
          n('JY2o'),
          n('/gI4'),
          n('rbfH'),
          n('jbUL'),
          n('slc3'),
          n('WmpB'),
          n('3Cj0'),
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
          n('0zG9'),
          n('YeIG')),
        vi = function (e) {
          var t,
            n = (t = e).replace(/-/g, '+').replace(/_/g, '/') + '===='.substring(0, (4 - (t.length % 4)) % 4),
            a = window.atob(n)
          return new Uint8Array(a.length).map(function (e, t) {
            return a.charCodeAt(t)
          }).buffer
        },
        _i = function (e) {
          var t = new Uint8Array(e),
            n = ''
          return (
            t.forEach(function (e) {
              return (n += String.fromCharCode(e))
            }),
            btoa(n).replace(/\+/g, '-').replace(/(\/)/g, '_').replace(/=/g, '')
          )
        },
        bi = function (e) {
          return e.map(function (e) {
            return { type: 'public-key', id: vi(e.id) }
          })
        },
        gi = (function (e) {
          m()(n, e)
          var t = v()(n)
          function n() {
            var e
            l()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              b()(
                p()(e),
                '_supportsWebAuthn',
                !!window.PublicKeyCredential &&
                  'function' == typeof window.PublicKeyCredential &&
                  'function' == typeof window.PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable,
              ),
              b()(p()(e), '_navigateAndUpdate', function (t, n) {
                var a = e.props,
                  r = a.onNavigate,
                  i = a.subtaskId,
                  o = a.updateFlow
                n && o(i, { challenge_response: n, link: t.link_id }), r(t)
              }),
              b()(p()(e), '_triggerWebAuthn', function (t) {
                var n = e.props.subtask,
                  a = n.challenge,
                  r = n.fail_link,
                  i = n.next_link
                e._getCredentialsRequest(a, t)()
                  .then(function (n) {
                    if (n) {
                      var a = e._getFinalResult(n, t)
                      e._navigateAndUpdate(i, a)
                    } else;
                  })
                  .catch(function () {
                    e._navigateAndUpdate(r)
                  })
              }),
              b()(p()(e), '_getCredentialsRequest', function (e, t) {
                var n = JSON.parse(e)
                if (t === k.r.enrollment) {
                  var a = {
                    publicKey: {
                      challenge: vi(n.challenge),
                      rp: n.rp,
                      user: o()(o()({}, n.user), {}, { id: vi(n.user.id) }),
                      pubKeyCredParams: n.pubKeyCredParams,
                      attestation: n.attestation,
                      excludeCredentials: n.excludeCredentials.map(function (e) {
                        return o()(o()({}, e), {}, { id: vi(e.id) })
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
                  i = {
                    publicKey: {
                      rpId: 'twitter.com',
                      extensions: { appid: r.extensions.appid },
                      challenge: vi(r.challenge),
                      userVerification: 'discouraged',
                      timeout: 6e4,
                      allowCredentials: bi(r.allowCredentials),
                    },
                  }
                return function () {
                  var e
                  return (null === (e = navigator.credentials) || void 0 === e ? void 0 : e.get(i)) || Promise.resolve()
                }
              }),
              b()(p()(e), '_getFinalResult', function (e, t) {
                var n,
                  a = e.id,
                  r = e.response,
                  i = e.type
                return (
                  'enrollment' === t && r.attestationObject
                    ? (n = {
                        id: a,
                        type: i,
                        response: { clientDataJSON: _i(r.clientDataJSON), attestationObject: _i(r.attestationObject) },
                        clientExtensionResults: {},
                      })
                    : 'verification' === t &&
                      r.authenticatorData &&
                      (n = {
                        id: a,
                        type: i,
                        response: {
                          clientDataJSON: _i(r.clientDataJSON),
                          authenticatorData: _i(r.authenticatorData),
                          signature: _i(r.signature),
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
            u()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props.subtask,
                    t = e.action_type,
                    n = e.unsupported_link
                  this._supportsWebAuthn
                    ? Object(fi.a)(this.props.errorDialog) && this._triggerWebAuthn(t)
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
                    i = e.subtask,
                    o = e.subtaskInputs
                  return y.a.createElement(
                    ye.a,
                    r()({}, a, { providePadding: !0 }),
                    t ||
                      y.a.createElement(
                        O.a,
                        null,
                        this._supportsWebAuthn
                          ? null
                          : y.a.createElement(
                              A,
                              r()({}, i.unsupported_error_message, { onNavigate: n, subtaskInputs: o }),
                            ),
                      ),
                  )
                },
              },
            ]),
            n
          )
        })(y.a.Component),
        yi = n('LCtV'),
        ki = n('AspN'),
        wi = n('53j7'),
        Ci = Object(yt.createSelector)(
          bt.e.selectLoggedInUser,
          function (e, t) {
            var n = wi.h(e),
              a = n ? ki.k(e, n) : []
            return W()(a, 1)[0]
          },
          function (e, t) {
            return { loggedInUser: e, avatarMedia: t }
          },
        ),
        Ei = { addAvatarMedia: wi.a, removeAvatarMedia: wi.d },
        Ii = Object(gt.f)(Ci, Ei),
        xi = n('fS8x'),
        Si = n('P68U'),
        Ti = n('eyty'),
        Pi = 'ocfSelectAvatarSkipForNowButton',
        Li = 'ocfSelectAvatarNextButton',
        Ai = (function (e) {
          m()(n, e)
          var t = v()(n)
          function n(e) {
            var a
            return (
              l()(this, n),
              (a = t.call(this, e)),
              b()(p()(a), '_handleCropDone', function () {
                return a.setState({ done: !0, showCropper: !1 })
              }),
              b()(p()(a), '_handleCropCancel', function () {
                return a._handleCropDone()
              }),
              b()(p()(a), '_handleImageMediaChange', function (e) {
                ;(0, a.props.addAvatarMedia)(e[0]), a.setState({ mediaId: e[0], showCropper: !0, done: !0 })
              }),
              b()(p()(a), '_handleImageMediaFailure', function () {
                a._handleSkipButtonClick()
              }),
              b()(p()(a), '_handleImageMediaRemove', function () {
                ;(0, a.props.removeAvatarMedia)(), a.setState({ done: !1, showCropper: !1 })
              }),
              b()(p()(a), '_handleDoneButtonClick', function () {
                var e = a.props,
                  t = e.onNavigate,
                  n = e.subtask,
                  r = e.subtaskId
                ;(0, e.updateFlow)(r, { link: n.next_link.link_id }), t(n.next_link)
              }),
              b()(p()(a), '_handleSkipButtonClick', function () {
                var e = a.props,
                  t = e.onNavigate,
                  n = e.subtask.skip_link,
                  r = e.subtaskId,
                  i = e.updateFlow
                n && i(r, { link: n.link_id }), n && t(n)
              }),
              (a.state = { done: !1, showCropper: !1, mediaId: void 0 }),
              a
            )
          }
          return (
            u()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.errorDialog,
                    n = e.onNavigate,
                    a = e.passthroughOcfScreenProps,
                    i = e.subtask,
                    o = e.subtaskInputs,
                    s = i.next_link,
                    l = i.primary_text,
                    c = i.secondary_text,
                    u = i.skip_link
                  return y.a.createElement(
                    ye.a,
                    r()({}, a, {
                      footer: y.a.createElement(B, {
                        actionDisabled: !u && !this.state.mediaId,
                        actionLabel: this.state.done || !u ? (null == s ? void 0 : s.label) : void 0,
                        actionTestID: Li,
                        onAction: this._handleDoneButtonClick,
                        onSecondaryAction: this._handleSkipButtonClick,
                        secondaryActionLabel: this.state.done || null == u ? void 0 : u.label,
                        secondaryActionTestID: Pi,
                      }),
                      header: y.a.createElement(ge, {
                        onNavigate: n,
                        primaryTextProp: l,
                        secondaryTextProp: c,
                        subtaskInputs: o,
                      }),
                      providePadding: !0,
                    }),
                    y.a.createElement(O.a, null, this._renderMediaPickerWithPreview()),
                    this.state.showCropper && void 0 !== this.state.mediaId
                      ? y.a.createElement(xi.a, {
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
                  return y.a.createElement(
                    O.a,
                    { style: Oi.centerContent },
                    y.a.createElement(Si.default, {
                      borderRadius: yi.a.INFINITE,
                      currentContent: n
                        ? y.a.createElement(Be.a, { size: 'custom', uri: n.profile_image_url_https })
                        : null,
                      location: Ti.d.Avatar,
                      mediaItem: t,
                      onChange: this._handleImageMediaChange,
                      onFailure: this._handleImageMediaFailure,
                      onRemove: a ? this._handleImageMediaRemove : void 0,
                      rootStyle: Oi.avatarContainer,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(y.a.Component),
        Oi = F.a.create(function (e) {
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
        Di = Ii(Ai),
        Fi = n('I/ms'),
        Ri = function (e, t) {
          var n = wi.h(e),
            a = n ? ki.k(e, n) : []
          return W()(a, 1)[0]
        },
        Ni = function (e, t) {
          var n = wi.i(e),
            a = n ? ki.k(e, n) : []
          return W()(a, 1)[0]
        },
        Bi = Object(Ge.a)()
          .propsFromState(function () {
            return { loggedInUser: bt.e.selectLoggedInUser, avatarMedia: Ri, bannerMedia: Ni }
          })
          .propsFromActions(function () {
            return { addBannerMedia: wi.b, removeBannerMedia: wi.e }
          }),
        Mi = 'ocfSelectBannerSkipForNowButton',
        Vi = 'ocfSelectBannerNextButton',
        Ui = n('9Xij'),
        ji = n('U+bB'),
        zi = (function (e) {
          m()(n, e)
          var t = v()(n)
          function n(e) {
            var a
            return (
              l()(this, n),
              (a = t.call(this, e)),
              b()(p()(a), '_handleImageMediaRemove', function () {
                ;(0, a.props.removeBannerMedia)(), a.setState({ done: !1, showCropper: !1 })
              }),
              b()(p()(a), '_handleCropDone', function () {
                return a.setState({ done: !0, showCropper: !1 })
              }),
              b()(p()(a), '_handleCropCancel', function () {
                return a._handleCropDone()
              }),
              b()(p()(a), '_handleImageMediaChange', function (e) {
                ;(0, a.props.addBannerMedia)(e[0]), a.setState({ media_id: e[0], showCropper: !0, done: !0 })
              }),
              b()(p()(a), '_handleImageMediaFailure', function () {
                a._handleSkipButtonClick()
              }),
              b()(p()(a), '_handleDoneButtonClick', function () {
                var e = a.props,
                  t = e.onNavigate,
                  n = e.subtask,
                  r = e.subtaskId
                ;(0, e.updateFlow)(r, { link: n.next_link.link_id }), t(n.next_link)
              }),
              b()(p()(a), '_handleSkipButtonClick', function () {
                var e = a.props,
                  t = e.onNavigate,
                  n = e.subtask.skip_link,
                  r = e.subtaskId,
                  i = e.updateFlow
                n && i(r, { link: n.link_id }), n && t(n)
              }),
              (a.state = { done: void 0, media_id: void 0, showCropper: !1 }),
              a
            )
          }
          return (
            u()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.errorDialog,
                    n = e.onNavigate,
                    a = e.passthroughOcfScreenProps,
                    i = e.subtask,
                    o = e.subtaskInputs,
                    s = i.next_link,
                    l = i.primary_text,
                    c = i.secondary_text,
                    u = i.skip_link
                  return y.a.createElement(
                    ye.a,
                    r()({}, a, {
                      footer: y.a.createElement(B, {
                        actionDisabled: !u && !this.state.media_id,
                        actionLabel: this.state.done || !u ? (null == s ? void 0 : s.label) : void 0,
                        actionTestID: Vi,
                        onAction: this._handleDoneButtonClick,
                        onSecondaryAction: this._handleSkipButtonClick,
                        secondaryActionLabel: this.state.done || null == u ? void 0 : u.label,
                        secondaryActionTestID: Mi,
                      }),
                      header: y.a.createElement(ge, {
                        onNavigate: n,
                        primaryTextProp: l,
                        secondaryTextProp: c,
                        subtaskInputs: o,
                        withHeaderImage: !0,
                      }),
                      providePadding: !0,
                    }),
                    y.a.createElement(
                      O.a,
                      { style: Hi.container },
                      this._renderMediaPickerWithPreview(),
                      y.a.createElement(O.a, { style: Fi.a.avatarAndButton }, this._renderAvatar()),
                      this._renderNames(),
                    ),
                    this.state.showCropper && void 0 !== this.state.media_id
                      ? y.a.createElement(xi.a, {
                          defaultAspectRatio: 3,
                          mediaId: this.state.media_id,
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
                    t = e.bannerMedia,
                    n = e.loggedInUser,
                    a = t || (!!n && !!n.profile_banner_url),
                    r = this.state.done
                  return y.a.createElement(Si.default, {
                    aspectRatio: 3,
                    currentContent: y.a.createElement(
                      Ui.a,
                      { ratio: F.a.theme.aspectRatios.profileBanner },
                      a && n
                        ? y.a.createElement(ji.a, { source: { uri: n.profile_banner_url }, style: Hi.banner })
                        : null,
                    ),
                    location: Ti.d.ProfileBanner,
                    mediaItem: t,
                    onChange: this._handleImageMediaChange,
                    onFailure: this._handleImageMediaFailure,
                    onRemove: r ? this._handleImageMediaRemove : void 0,
                    rootStyle: Hi.bannerContainer,
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
                  return y.a.createElement(Be.a, {
                    accessibilityHidden: !0,
                    borderColor: 'white',
                    borderWidth: 'medium',
                    focusable: !1,
                    size: 'custom',
                    style: Fi.a.avatar,
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
                  return y.a.createElement(
                    O.a,
                    { style: Hi.nameContainer },
                    y.a.createElement(
                      x.b,
                      { align: 'left', style: Hi.names },
                      y.a.createElement(
                        x.b,
                        { accessibilityRole: 'heading', size: 'title4', style: Hi.displayName, weight: 'bold' },
                        t,
                      ),
                      y.a.createElement(x.b, { color: 'gray700', style: Hi.screenName }, n),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(y.a.Component),
        Hi = F.a.create(function (e) {
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
            nameContainer: { marginLeft: e.spaces.space16 },
            names: { display: 'block', marginBottom: e.spaces.space12 },
            displayName: { writingDirection: 'ltr', display: 'block', marginTop: e.spaces.space4 },
            screenName: { writingDirection: 'ltr' },
          }
        }),
        Wi = Bi(zi),
        Gi = n('QK5w'),
        qi = n('BTou'),
        Ki = n('K1iM'),
        Yi = n.n(Ki),
        Xi = n('RjwM'),
        Qi = F.a.create(function (e) {
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
        Ji = function (e) {
          var t = e.isModal,
            n = e.label,
            a = e.onPress,
            r = [Qi.pillContainer, t ? Qi.pillContainerModal : Qi.pillContainerNarrow]
          return y.a.createElement(
            O.a,
            { style: r },
            y.a.createElement(
              D.a,
              { icon: y.a.createElement(Xi.a, { style: Qi.icon }), onPress: a, type: 'primaryFilled' },
              y.a.createElement(x.b, { size: 'body', weight: 'normal' }, n),
            ),
          )
        },
        Zi = n('7nmT'),
        $i = n.n(Zi),
        eo = 'ocfSettingsListNextButton',
        to = 'ocfSettingsListSkipButton',
        no = 'ocfSettingsListPrimaryText',
        ao = n('jtO7'),
        ro = n('sXY3'),
        io = n('+d3d'),
        oo = (function (e) {
          m()(n, e)
          var t = v()(n)
          function n(e) {
            var a
            l()(this, n),
              (a = t.call(this, e)),
              b()(p()(a), '_formatSubtaskInputsForStore', function (e) {
                return Object(ro.a)(e).map(function (e) {
                  var t = W()(e, 2),
                    n = t[0],
                    a = t[1],
                    r = a.result,
                    i = a.type
                  return { key: n, response_data: b()({}, i, { result: r }) }
                })
              }),
              b()(p()(a), '_loadSubtaskInputsFromStore', function () {
                var e = a.props,
                  t = e.subtaskId,
                  n = e.subtaskInputs
                return (Object(S.e)(n, { key: k.s, subtask_id: t }, []) || []).reduce(function (e, t) {
                  var n = t.key,
                    a = Object.keys(t.response_data),
                    r = W()(a, 1)[0],
                    i = t.response_data[r].result
                  return (e[n] = { result: i, type: r }), e
                }, {})
              }),
              b()(p()(a), '_updateFlow', function (e) {
                var t,
                  n = a.props,
                  r = n.subtask,
                  i = n.subtaskId,
                  o = n.updateFlow,
                  s = r.next_link,
                  l = a.state.settingsValues
                if (e) o(i, ((t = {}), b()(t, k.s, a._formatSubtaskInputsForStore(l)), b()(t, 'link', e.link_id), t))
                else if (s) {
                  var c
                  o(i, ((c = {}), b()(c, k.s, a._formatSubtaskInputsForStore(l)), b()(c, 'link', s.link_id), c))
                }
              }),
              b()(p()(a), '_handleShowMore', function () {
                a.setState({ showMore: !0 })
              }),
              b()(p()(a), '_handleNextButtonPress', function () {
                var e = a.props,
                  t = e.onNavigate,
                  n = e.subtask.next_link
                a._updateFlow(), n && t(n)
              }),
              b()(p()(a), '_handleSubListBackClick', function () {
                a.setState({ isSubList: !1, showDividers: !1, showMoreConfig: null, subList: [], subListHeader: null }),
                  a._updateFlow()
              }),
              b()(p()(a), '_handleSettingGroupClick', function (e) {
                var t,
                  n = e.primary_text,
                  r = e.value_data,
                  i = e.value_type,
                  o = null == r || null === (t = r.settings_group_data) || void 0 === t ? void 0 : t.settings
                o &&
                  i === k.u.SettingsGroup &&
                  a.setState({ isSubList: !0, showDividers: !1, showMoreConfig: null, subList: o, subListHeader: n })
              }),
              b()(p()(a), '_handleScrollPromptClick', function () {
                a._viewport && a._viewport.scrollBy(a._viewport.getRect().getHeight())
              }),
              b()(p()(a), '_handleViewportSet', function (e) {
                a.props.subtask.scroll_hint &&
                  ((a._viewport = e), a._viewport && a._viewport.addScrollListener(a._handleViewportScroll))
              }),
              b()(
                p()(a),
                '_handleViewportScroll',
                Object(io.a)(function () {
                  a.state.lastSettingSeen || a.setState({ lastSettingSeen: a._isLastSettingInViewport() })
                }, 250),
              ),
              b()(p()(a), '_isLastSettingInViewport', function () {
                if (a._lastSetting && a._viewport) {
                  var e,
                    t = a._lastSetting.getBoundingClientRect(),
                    n = null === (e = a._viewport) || void 0 === e ? void 0 : e.getRect()
                  if (n) return t.top >= n.getTop() && t.bottom <= n.getBottom()
                }
                return !1
              }),
              b()(p()(a), '_isPrompt', function () {
                return 'prompt' === a.props.subtask.style
              }),
              b()(p()(a), '_setSettingsRef', function (e) {
                return function (t) {
                  var n = a.state.isSubList
                  if (a.props.subtask.scroll_hint && !n && e && void 0 === a._lastSetting) {
                    a._lastSetting = $i.a.findDOMNode(t)
                    var r = a._isLastSettingInViewport()
                    r && !a.state.lastSettingSeen && a.setState({ lastSettingSeen: r })
                  } else a._lastSetting = void 0
                }
              }),
              b()(p()(a), '_handleSettingToggle', function (e) {
                var t = e.value_identifier,
                  n = e.value_type
                if (t && Object(S.i)(n)) {
                  var r = a.state.settingsValues
                  a.setState({
                    settingsValues: o()(o()({}, r), {}, b()({}, t, o()(o()({}, r[t]), {}, { result: !r[t].result }))),
                  })
                }
              }),
              b()(p()(a), '_handleSettingTextChange', function (e, t) {
                var n = e.value_identifier
                if (n) {
                  var r = a.state.settingsValues
                  a.setState({ settingsValues: o()(o()({}, r), {}, b()({}, n, o()(o()({}, r[n]), {}, { result: t }))) })
                }
              }),
              b()(p()(a), '_handleCancelButtonPress', function () {
                var e = a.props,
                  t = e.onNavigate,
                  n = e.subtask.cancel_link
                n && (a._updateFlow(n), t(n))
              }),
              b()(p()(a), '_getSettingsValueNextLink', function () {
                var e = a.props.subtask
                if (e.next_link) return e.next_link
                var t,
                  n = Yi()(e.settings)
                try {
                  for (n.s(); !(t = n.n()).done; ) {
                    var r,
                      i = t.value,
                      o = i.value_data,
                      s = i.value_identifier,
                      l = null == o || null === (r = o.button) || void 0 === r ? void 0 : r.navigation_link
                    if (s === k.t.NextButton && l) return l
                  }
                } catch (c) {
                  n.e(c)
                } finally {
                  n.f()
                }
              })
            var r = e.subtask,
              i = a._initializeSettingsState(r.settings)
            return (
              (a.state = {
                isSubList: !1,
                showDividers: !!r.show_divider,
                showMoreConfig: r.show_more,
                showMore: !1,
                subList: [],
                subListHeader: null,
                settingsValues: i,
                lastSettingSeen: !1,
              }),
              a
            )
          }
          return (
            u()(n, [
              {
                key: 'UNSAFE_componentWillMount',
                value: function () {
                  var e = this.context.viewport,
                    t = this.props,
                    n = t.isModal
                  t.subtask.scroll_hint &&
                    !n &&
                    e &&
                    this._isPrompt() &&
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
                    i = t.onNavigate,
                    o = t.passthroughOcfScreenProps,
                    s = t.subtask,
                    l = t.subtaskId,
                    c = t.subtaskInputs,
                    u = s.header,
                    d = s.primary_text,
                    p = s.secondary_text,
                    h = this.state.lastSettingSeen,
                    m = !!!s.scroll_hint || h,
                    f = this._isPrompt(),
                    v = this._renderNavigationButtons(m),
                    _ = s.scroll_hint,
                    b =
                      !m && _
                        ? y.a.createElement(Ji, { isModal: !!a, label: _, onPress: this._handleScrollPromptClick })
                        : null,
                    g = null !== (e = s.horizontal_style) && void 0 !== e ? e : k.z.Normal,
                    w = l === k.q
                  return y.a.createElement(
                    ye.a,
                    r()({}, o, { footer: f ? void 0 : v, onViewportSet: this._handleViewportSet, scrollPrompt: b }),
                    y.a.createElement(
                      O.a,
                      {
                        style: [
                          g === k.z.Compact ? de.contentAreaCompact : de.contentArea,
                          so.bottomPadding,
                          f && so.centeredRoot,
                        ],
                      },
                      y.a.createElement(ge, {
                        header: u,
                        onNavigate: i,
                        primaryTextProp: d,
                        primaryTextTestID: no,
                        secondaryTextProp: p,
                        subtaskInputs: c,
                      }),
                      this._renderSettingsList(s.settings),
                      w ? y.a.createElement(x.b, { color: 'gray700', size: 'subtext2' }, z.c) : null,
                      s.detail_text
                        ? y.a.createElement(
                            A,
                            r()({}, s.detail_text, {
                              color: 'gray700',
                              onNavigate: i,
                              style: so.detailText,
                              subtaskInputs: c,
                            }),
                          )
                        : null,
                      f && v ? y.a.createElement(O.a, { style: so.doneButtonContainer }, v) : null,
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
                    i = a.subList,
                    o = a.subListHeader
                  return y.a.createElement(
                    ye.a,
                    { onBackClick: this._handleSubListBackClick },
                    y.a.createElement(
                      O.a,
                      { style: de.contentArea },
                      y.a.createElement(
                        A,
                        r()({}, o, {
                          onNavigate: t,
                          size: 'title4',
                          style: so.headline,
                          subtaskInputs: n,
                          weight: 'bold',
                        }),
                      ),
                      this._renderSettingsList(i),
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
                    i = n.removeContacts,
                    o = n.subtaskId,
                    s = n.subtaskInputs,
                    l = this.state,
                    c = l.showDividers,
                    u = l.showMore,
                    d = l.showMoreConfig,
                    p = this._getSettingsValueNextLink()
                  return y.a.Children.toArray(
                    e.map(function (n, l) {
                      var h = l === e.length - 1
                      if (d && !u) {
                        if (l === d.initial_to_show)
                          return y.a.createElement(ao.a, {
                            color: 'primary',
                            label: d.text,
                            onPress: t._handleShowMore,
                          })
                        if (l > d.initial_to_show) return null
                      }
                      return y.a.createElement(pa, {
                        addToast: a,
                        nextLink: p,
                        onNavigate: r,
                        onSettingGroupClick: t._handleSettingGroupClick,
                        onSettingTextChanged: t._handleSettingTextChange,
                        onSettingToggle: t._handleSettingToggle,
                        ref: t._setSettingsRef(h),
                        removeContacts: i,
                        settingValue: n,
                        showDividers: !h && c,
                        subtaskId: o,
                        subtaskInputs: s,
                        updateFlow: t._updateFlow,
                      })
                    }),
                  )
                },
              },
              {
                key: '_renderNavigationButtons',
                value: function (e) {
                  var t = this.props.subtask,
                    n = t.cancel_link,
                    a = t.next_link
                  return y.a.createElement(B, {
                    actionDisabled: !e,
                    actionLabel: null == a ? void 0 : a.label,
                    actionTestID: eo,
                    onAction: this._handleNextButtonPress,
                    onSecondaryAction: this._handleCancelButtonPress,
                    secondaryActionLabel: null == n ? void 0 : n.label,
                    secondaryActionTestID: to,
                  })
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
                          i = t.value_type
                        if (r && a && Object(S.i)(i))
                          e[r] = {
                            result: null === (n = a.boolean_data) || void 0 === n ? void 0 : n.initial_value,
                            type: Object.keys(a)[0],
                          }
                        else if (r && i === k.u.TextField) e[r] = { result: '', type: 'text_data' }
                        else if (i === k.u.SettingsGroup) {
                          var o
                          ;(
                            (null == a || null === (o = a.settings_group_data) || void 0 === o ? void 0 : o.settings) ||
                            []
                          ).forEach(function (t) {
                            var n,
                              a = t.value_data,
                              r = t.value_identifier,
                              i = t.value_type
                            r &&
                              a &&
                              Object(S.i)(i) &&
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
        })(y.a.Component)
      b()(oo, 'contextTypes', { viewport: Nn.object })
      var so = F.a.create(function (e) {
          return {
            centeredRoot: { alignItems: 'center' },
            headline: { marginBottom: e.spaces.space12 },
            detailText: { marginTop: e.spaces.space40 },
            bottomPadding: { paddingBottom: e.spaces.space48 },
            doneButtonContainer: { marginTop: e.spaces.space40 },
          }
        }),
        lo = function () {
          return n.e(356).then(n.t.bind(null, 'OHEV', 7))
        },
        co = 'ocfShowCodeNextLink',
        uo = 'ocfShowCodeSkipLink'
      function po(e) {
        var t = e.errorDialog,
          n = e.onNavigate,
          a = e.passthroughOcfScreenProps,
          i = e.subtask,
          o = i.code,
          s = i.detail_text,
          l = i.header,
          c = i.next_link,
          u = i.skip_link,
          d = i.style,
          p = e.subtaskId,
          h = e.subtaskInputs,
          m = e.updateFlow,
          f = s ? y.a.createElement(A, r()({}, s, { onNavigate: n, subtaskInputs: h })) : null
        return y.a.createElement(
          ye.a,
          r()({}, a, {
            footer: y.a.createElement(B, {
              actionLabel: null == c ? void 0 : c.label,
              actionTestID: co,
              onAction: function () {
                m(p, { link: c.link_id }), n(c)
              },
              onSecondaryAction: function () {
                u && (m(p, { link: u.link_id }), n(u))
              },
              secondaryActionLabel: null == u ? void 0 : u.label,
              secondaryActionTestID: uo,
              secondaryActionType: 'primaryOutlined',
            }),
            header: y.a.createElement(ge, { header: l, onNavigate: n, subtaskInputs: h, withHeaderImage: !0 }),
            providePadding: !0,
          }),
          d === k.v.Qr
            ? y.a.createElement(
                O.a,
                { style: ho.qrCode },
                y.a.createElement('canvas', {
                  ref: function (t) {
                    var n = e.subtask.code
                    lo().then(function (e) {
                      t && e.toCanvas(t, n, { margin: 5, scale: 5 })
                    })
                  },
                }),
                y.a.createElement(O.a, { style: ho.detailText }, f),
              )
            : y.a.createElement(
                y.a.Fragment,
                null,
                y.a.createElement(x.b, { weight: 'bold' }, o),
                y.a.createElement(O.a, { style: ho.detailText }, f),
              ),
          t,
        )
      }
      var ho = F.a.create(function (e) {
          return {
            qrCode: { alignItems: 'center', paddingVertical: e.spaces.space16 },
            detailText: { paddingTop: e.spaces.space16 },
            secondaryButton: { marginTop: e.spaces.space12 },
          }
        }),
        mo = n('NeAX'),
        fo = function (e) {
          return !mo.selectPreferences(e).is_eu_country
        },
        vo = Object(qe.createLocalApiErrorHandlerWithContextFactory)('OCF_FLOW'),
        _o = Object(Ge.a)()
          .propsFromState(function () {
            return {
              navigationContext: vt.o,
              personalizationSettings: mo.selectUserPreferences,
              shouldPropagateP13nSettings: fo,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: vo,
              fetchPreferencesIfNeeded: mo.fetchPreferencesIfNeeded,
              scribeAction: ft.c,
              syncPersonalizationSettings: mo.syncSettings,
            }
          }),
        bo = ['callback', 'defaultValue', 'label'],
        go = Wt.a.d44efc66,
        yo = Wt.a.b4867a17,
        ko = Wt.a.d4e220b3,
        wo = (function (e) {
          m()(n, e)
          var t = v()(n)
          function n() {
            var e
            l()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              b()(p()(e), 'state', { errorMessage: '', isValid: !0, value: '' }),
              b()(p()(e), '_updateValue', function (t) {
                var n = e.props.callback,
                  a = Object(fi.a)(t.trim()),
                  r = !a && -1 !== t.toLowerCase().indexOf('twitter'),
                  i = !a && !r,
                  o = ''
                a ? (o = go) : r && (o = yo), e.setState({ errorMessage: o, isValid: i, value: t }), n(t, i)
              }),
              b()(p()(e), '_handleValueChange', function (t) {
                var n = t.target.value
                e._updateValue(n)
              }),
              e
            )
          }
          return (
            u()(n, [
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
                    n = C()(e, bo),
                    a = this.state,
                    i = a.errorMessage,
                    o = a.isValid,
                    s = this.context.featureSwitches.getValue('user_display_name_max_limit', 50)
                  return y.a.createElement(
                    ln.a,
                    r()({}, n, {
                      errorText: i,
                      invalid: !o,
                      label: t || ko,
                      maxLength: 'number' == typeof s ? s : 50,
                      name: 'name',
                      onChange: this._handleValueChange,
                      positionCursorAtEnd: !0,
                      style: de.formTextInput,
                      value: this.state.value,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(y.a.Component)
      b()(wo, 'contextType', Ze.a)
      var Co = n('SrtL'),
        Eo = n('P7wY'),
        Io = 'ocfSignupNextLink',
        xo = Wt.a.eab9ceb1,
        So = Object.freeze({
          Birthday: 'birthday',
          Email: 'email',
          Name: 'name',
          Phone: 'phone_number',
          Password: 'password',
        }),
        To = 'select_birthday',
        Po = 'select_email',
        Lo = 'select_name',
        Ao = 'select_phone',
        Oo = { page: 'onboarding', component: 'signup' },
        Do = (function (e) {
          m()(n, e)
          var t = v()(n)
          function n(e) {
            var a
            l()(this, n),
              (a = t.call(this, e)),
              b()(p()(a), '_getDefaultIdentifierField', function () {
                var e = a.props.subtask.allowed_identifiers
                return e === k.w.EmailOnly || e === k.w.EmailThenPhone ? So.Email : So.Phone
              }),
              b()(p()(a), '_renderActiveFieldToggle', function () {
                var e = a.props.subtask.allowed_identifiers
                return e !== k.w.EmailOnly && e !== k.w.PhoneOnly
                  ? y.a.createElement(
                      x.b,
                      {
                        color: 'link',
                        onPress: a._handleActiveTextToggle,
                        style: Fo.toggleLink,
                        withInteractiveStyling: !0,
                      },
                      a._getToggleActiveTextTitle(),
                    )
                  : null
              }),
              b()(p()(a), '_renderPasswordField', function () {
                var e = a.props,
                  t = e.subtask,
                  n = e.subtaskId,
                  r = e.subtaskInputs,
                  i = a.state.defaultActiveText,
                  o = Object(S.e)(r, { key: So.Password, subtask_id: n }, '')
                return y.a.createElement(
                  O.a,
                  { style: Fo.passwordEntry },
                  y.a.createElement(Qn, {
                    autoComplete: 'new-password',
                    defaultValue: o || void 0,
                    label: t.password_hint,
                    onPasswordChange: a._handlePasswordChange,
                    onPasswordValidated: a._handlePasswordValidate,
                    userIdentifier: i || void 0,
                  }),
                )
              }),
              b()(p()(a), '_renderNameField', function () {
                var e = a.props,
                  t = e.navigationContext,
                  n = e.subtask,
                  r = e.subtaskId,
                  i = e.subtaskInputs,
                  o = Object(S.e)(i, { key: So.Name, subtask_id: r }, ''),
                  s = t.action,
                  l = {
                    autoComplete: 'name',
                    autoFocus: !s || s === Lo,
                    callback: a._updateNameInfo,
                    defaultValue: o,
                    onFocus: a._handleNameFocus,
                    label: n.name_hint,
                  }
                return y.a.createElement(wo, l)
              }),
              b()(p()(a), '_renderActiveTextField', function () {
                var e = a.props.subtask,
                  t = a.state,
                  n = t.activeTextField,
                  r = t.defaultActiveText,
                  i = a._shouldFocusActiveTextField(),
                  o = {
                    autoComplete: n === So.Phone ? 'tel' : 'email',
                    autoFocus: i,
                    defaultValue: r,
                    name: n === So.Phone ? 'phone_number' : 'email',
                    label: n === So.Phone ? e.phone_hint : e.email_hint,
                    onRef: a._setInputRef,
                    onValidityChange: a._updateValidity,
                    style: Fo.phoneEmailTextField,
                  }
                return n === So.Phone ? y.a.createElement(Fa, o) : y.a.createElement(Un, o)
              }),
              b()(p()(a), '_handleDateChange', function (e) {
                a.setState({ birthdayValue: e, isBirthdayValid: a._isCompleteDate(e) }, a._updateValidity)
              }),
              b()(p()(a), '_isCompleteDate', function (e) {
                return !!(e && e.year && e.month && e.day)
              }),
              b()(p()(a), '_getIdentifierValue', function () {
                return a._input && a._input.getValue()
              }),
              b()(p()(a), '_isValid', function () {
                var e = a.state,
                  t = e.isBirthdayValid,
                  n = e.isNameValid,
                  r = e.isPasswordValid,
                  i = a.props.subtask,
                  o = !i.show_password_field || r,
                  s = i.ignore_birthday || t
                return n && o && s && a._input && a._input.isValid()
              }),
              b()(p()(a), '_setTimRef', function (e) {
                a._timInput = e
              }),
              b()(p()(a), '_updateValidity', function () {
                a.setState({ isValid: a._isValid() })
              }),
              b()(p()(a), '_updateNameInfo', function (e, t) {
                a.setState({ isNameValid: t, nameValue: e }, a._updateValidity)
              }),
              b()(p()(a), '_handleFetchPreferences', function () {
                var e = a.props,
                  t = e.createLocalApiErrorHandler
                ;(0, e.fetchPreferencesIfNeeded)().catch(t())
              }),
              b()(p()(a), '_handlePasswordChange', function (e) {
                a.setState({ passwordValue: e }, a._updateValidity)
              }),
              b()(p()(a), '_handlePasswordValidate', function (e) {
                a.setState({ isPasswordValid: e }, a._updateValidity)
              }),
              b()(p()(a), '_shouldFocusActiveTextField', function () {
                var e = a.props.navigationContext,
                  t = a.state.activeTextField === So.Phone ? Ao : Po
                return !a.state.hasNameFieldBeenAutoFocused && e.action === t
              }),
              b()(p()(a), '_handleActiveTextToggle', function () {
                var e = a.state.activeTextField === So.Phone ? So.Email : So.Phone
                a._scribeEvent(e, 'choose'),
                  a._input && a._input.clear(),
                  a.setState({ activeTextField: e, defaultActiveText: '' })
              }),
              b()(p()(a), '_getToggleActiveTextTitle', function () {
                var e = a.props.subtask
                return a.state.activeTextField === So.Phone ? e.use_email_text : e.use_phone_text
              }),
              b()(p()(a), '_handleNameFocus', function () {
                a.setState({ hasNameFieldBeenAutoFocused: !0 })
              }),
              b()(p()(a), '_handleNextButtonClick', function () {
                var e = a.props,
                  t = e.onNavigate,
                  n = e.shouldPropagateP13nSettings,
                  r = e.subtask,
                  i = e.subtaskId,
                  o = e.updateFlow,
                  s = a.state,
                  l = s.activeTextField,
                  c = s.birthdayValue,
                  u = s.nameValue,
                  d = s.passwordValue,
                  p = a.props.personalizationSettings || {},
                  h = p.allowCookieUse,
                  m = p.allowDeviceAccess,
                  f = p.allowPartnerships,
                  v = p.allowPersonalization,
                  _ = l === So.Email && r.email_next_link ? r.email_next_link : r.next_link,
                  b = a._timInput && a._timInput.value ? { response: a._timInput.value } : void 0,
                  g = a._getIdentifierValue() || void 0,
                  y = { js_instrumentation: b, link: _.link_id, name: u }
                ;(y[l] = g),
                  r.show_password_field && (y.password = d),
                  !r.ignore_birthday && c && (y.birthday = c),
                  n &&
                    (y.personalization_settings = {
                      allow_cookie_use: !!h,
                      allow_device_personalization: !!m,
                      allow_partnerships: !!f,
                      allow_ads_personalization: !!v,
                    }),
                  o(i, y),
                  t(_)
              }),
              b()(p()(a), '_scribeEvent', function (e, t) {
                ;(0, a.props.scribeAction)(o()(o()({}, Oo), {}, { element: e, action: t }))
              }),
              b()(p()(a), '_setInputRef', function (e) {
                a._input = e
              })
            var r = e.navigationContext,
              i = e.subtaskId,
              s = e.subtaskInputs,
              c = Object(S.e)(s, { key: So.Name, subtask_id: i }, ''),
              u = Object(S.e)(s, { key: So.Phone, subtask_id: i }, ''),
              d = Object(S.e)(s, { key: So.Email, subtask_id: i }, ''),
              h = Object(S.e)(s, { key: So.Password, subtask_id: i }, ''),
              m = { day: void 0, month: void 0, year: void 0 },
              f = Object(S.e)(s, { key: So.Birthday, subtask_id: i }, void 0) || m,
              v = (function (e) {
                switch (e) {
                  case Ao:
                    return { type: So.Phone, value: u }
                  case Po:
                    return { type: So.Email, value: d }
                  default:
                    return { type: d ? So.Email : a._getDefaultIdentifierField(), value: d || u }
                }
              })(r.action)
            return (
              (a.state = {
                activeTextField: v.type,
                birthdayValue: f,
                defaultActiveText: v.value,
                nameValue: c,
                hasNameFieldBeenAutoFocused: !1,
                passwordValue: h,
                isNameValid: void 0,
                isPasswordValid: !!h,
                isBirthdayValid: a._isCompleteDate(f),
                isValid: void 0,
              }),
              a
            )
          }
          return (
            u()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.createLocalApiErrorHandler,
                    n = e.syncPersonalizationSettings
                  zr.a.inject({ scriptId: 'jsInstLibrary', src: 'https://twitter.com/i/js_inst?c_name=ui_metrics' }),
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
                    t = e.onNavigate,
                    n = e.passthroughOcfScreenProps,
                    a = e.progressIndication,
                    i = e.subtask,
                    o = e.subtaskInputs,
                    s = i.next_link,
                    l = i.primary_text,
                    c = i.secondary_text
                  return y.a.createElement(
                    ye.a,
                    r()({}, n, {
                      footer: y.a.createElement(B, {
                        actionDisabled: !this.state.isValid,
                        actionLabel: null == s ? void 0 : s.label,
                        actionTestID: Io,
                        onAction: this._handleNextButtonClick,
                      }),
                      header: y.a.createElement(ge, {
                        onNavigate: t,
                        primaryTextProp: l,
                        secondaryTextProp: c,
                        subtaskInputs: o,
                        withHeaderImage: !0,
                      }),
                      progressIndication: a,
                      providePadding: !0,
                    }),
                    y.a.createElement(Co.a, { title: xo }),
                    y.a.createElement(
                      O.a,
                      null,
                      this._renderNameField(),
                      this._renderActiveTextField(),
                      this._renderActiveFieldToggle(),
                      this._renderBirthdayField(),
                      i.show_password_field ? this._renderPasswordField() : null,
                      y.a.createElement('input', {
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
                    i = n.ignore_birthday,
                    o = this.state.birthdayValue || {},
                    s = t.action === To
                  return i
                    ? null
                    : y.a.createElement(
                        O.a,
                        { accessibilityLabel: r, accessibilityRole: 'group', style: Fo.birthdayPicker },
                        y.a.createElement(x.b, { size: 'body', weight: 'bold' }, r),
                        y.a.createElement(x.b, { color: 'gray700', size: 'body' }, a),
                        y.a.createElement(hn.a, {
                          autofocus: s,
                          day: o.day,
                          label: n.birthday_hint || '',
                          minSelectableYear: Object(Eo.b)(),
                          month: o.month,
                          onChange: this._handleDateChange,
                          year: o.year,
                        }),
                      )
                },
              },
            ]),
            n
          )
        })(y.a.Component),
        Fo = F.a.create(function (e) {
          return {
            birthdayPicker: { marginTop: e.spaces.space32 },
            toggleLink: { marginTop: e.spaces.space16, alignSelf: 'flex-start' },
            passwordEntry: { marginTop: e.spaces.space16 },
            phoneEmailTextField: { paddingHorizontal: 0 },
          }
        }),
        Ro = _o(Do),
        No = 'ocfSignupReviewNextLink',
        Bo = Wt.a.a565833d,
        Mo = Wt.a.h3629782,
        Vo = Wt.a.j1c3f4b9,
        Uo = Wt.a.c119dee8,
        jo = Wt.a.f70cd5ed,
        zo = Wt.a.a3841918,
        Ho = Wt.a.d4e220b3,
        Wo = (function (e) {
          m()(n, e)
          var t = v()(n)
          function n() {
            var e
            l()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              b()(p()(e), '_handleSignupButtonClick', function () {
                var t,
                  n = e.props,
                  a = n.onNavigate,
                  r = n.subtask,
                  i = n.subtaskId,
                  o = n.subtaskInputs,
                  s = n.updateFlow,
                  l = r.email,
                  c = r.phone_number,
                  u = c && c.subtask_data_reference && Object(S.e)(o, c.subtask_data_reference),
                  d = l && l.subtask_data_reference && Object(S.e)(o, l.subtask_data_reference)
                e._isOldEnoughOrIgnored()
                  ? u
                    ? (t = r.phone_next_link)
                    : d && (t = r.email_next_link)
                  : (t = r.invalid_birthday_link),
                  t && s(i, { link: t.link_id }),
                  t && a(t)
              }),
              b()(p()(e), '_handleNavigationClick', function (t) {
                ;(0, e.props.onNavigate)(t)
              }),
              b()(p()(e), '_handleNameEdit', function () {
                var t = e.props.subtask
                e._handleNavigationClick(t.name_edit_link)
              }),
              b()(p()(e), '_handleBirthdayEdit', function () {
                var t = e.props.subtask
                e._handleNavigationClick(t.birthday_edit_link)
              }),
              b()(p()(e), '_handlePhoneEdit', function () {
                var t = e.props.subtask
                e._handleNavigationClick(t.phone_edit_link)
              }),
              b()(p()(e), '_handleEmailEdit', function () {
                var t = e.props.subtask
                e._handleNavigationClick(t.email_edit_link)
              }),
              b()(p()(e), '_handlePrivacyOptionsClick', function (t) {
                return function (n) {
                  n.preventDefault(), e._handleNavigationClick(t)
                }
              }),
              b()(p()(e), '_isOldEnoughOrIgnored', function () {
                var t = e.props.subtask,
                  n = t.birthday,
                  a = t.birthday_requirement
                if (t.ignore_birthday) return !0
                var r = n && n.subtask_data_reference && Object(S.e)(e.props.subtaskInputs, n.subtask_data_reference),
                  i = r && new Date(r.year, r.month - 1, r.day),
                  o = a || {},
                  s = o.day,
                  l = o.month,
                  c = o.year,
                  u = c && l && s && new Date(c, l - 1, s)
                return !i || !u || i <= u
              }),
              b()(p()(e), '_getSignupButtonLabel', function () {
                var t = e.props,
                  n = t.subtask,
                  a = t.subtaskInputs,
                  r = n.email,
                  i = n.phone_number,
                  o = i && Object(S.g)(a, i),
                  s = r && Object(S.g)(a, r)
                return o ? n.phone_next_link.label : s ? n.email_next_link.label : Bo
              }),
              e
            )
          }
          return (
            u()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.errorDialog,
                    n = e.onNavigate,
                    a = e.passthroughOcfScreenProps,
                    i = e.progressIndication,
                    o = e.subtask,
                    s = e.subtaskInputs,
                    l = o.detail_text,
                    c = o.primary_text,
                    u = o.secondary_text
                  return y.a.createElement(
                    ye.a,
                    r()({}, a, {
                      footer: y.a.createElement(B, {
                        actionLabel: this._getSignupButtonLabel(),
                        actionTestID: No,
                        detailText: l,
                        onAction: this._handleSignupButtonClick,
                        onNavigate: n,
                        subtaskInputs: s,
                      }),
                      header: y.a.createElement(ge, {
                        onNavigate: n,
                        primaryTextProp: c,
                        secondaryTextProp: u,
                        subtaskInputs: s,
                        withHeaderImage: !0,
                      }),
                      progressIndication: i,
                      providePadding: !0,
                    }),
                    this._renderNameField(),
                    this._renderPhoneOrEmailField(),
                    this._maybeRenderBirthdayField(),
                    t,
                  )
                },
              },
              {
                key: '_renderNameField',
                value: function () {
                  var e = this.props,
                    t = e.subtask,
                    n = e.subtaskInputs,
                    a = t.name && Object(S.g)(n, t.name)
                  return y.a.createElement(
                    O.a,
                    { onClick: this._handleNameEdit, testID: 'editName' },
                    y.a.createElement(ln.a, {
                      defaultValue: a || '',
                      label: Ho,
                      name: 'name',
                      style: de.formTextInput,
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
                      Object(S.e)(n, t.birthday.subtask_data_reference),
                    r = a || {},
                    i = r.day,
                    o = r.month,
                    s = r.year,
                    l = i && o && s && Mo(new Date(s, o - 1, i))
                  return !t.ignore_birthday && a && l
                    ? y.a.createElement(
                        O.a,
                        {
                          accessibilityLabel: Vo({ birthdate: l }),
                          accessibilityRole: 'button',
                          onClick: this._handleBirthdayEdit,
                          testID: 'editBirthday',
                        },
                        y.a.createElement(ln.a, {
                          defaultValue: l,
                          label: Uo,
                          name: 'birthday',
                          style: de.formTextInput,
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
                    i = a && a.subtask_data_reference && Object(S.e)(r, a.subtask_data_reference),
                    o = n && n.subtask_data_reference && Object(S.e)(r, n.subtask_data_reference)
                  return i
                    ? y.a.createElement(
                        O.a,
                        { onClick: this._handlePhoneEdit, testID: 'editPhone' },
                        y.a.createElement(ln.a, {
                          defaultValue: i || '',
                          label: jo,
                          name: 'phone',
                          style: de.formTextInput,
                        }),
                      )
                    : o
                    ? y.a.createElement(
                        O.a,
                        { onClick: this._handleEmailEdit, testID: 'editEmail' },
                        y.a.createElement(ln.a, {
                          defaultValue: o || '',
                          label: zo,
                          name: 'email',
                          style: de.formTextInput,
                        }),
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(y.a.Component),
        Go = 'selected_search_topic_ids',
        qo = 'selected_topic_ids',
        Ko = [],
        Yo = function (e, t) {
          var n = Object(vt.v)(e)
          return Object(S.e)(n, { key: Go, subtask_id: t.subtaskId })
        },
        Xo = function (e, t) {
          var n = Object(vt.v)(e)
          return Object(S.e)(n, { key: qo, subtask_id: t.subtaskId })
        },
        Qo = function (e, t) {
          return t.subtask.selected_topics_cart ? t.subtask.selected_topics_cart.selected_topic_ids : Ko
        },
        Jo = Object(Ge.a)()
          .propsFromState(function () {
            return { initialSearchTopicIds: Yo, initialSelectedTopicIds: Xo, cartTopicIds: Qo }
          })
          .adjustStateProps(function (e) {
            var t = e.cartTopicIds,
              n = e.initialSearchTopicIds,
              a = e.initialSelectedTopicIds
            return { initialSearchTopicIds: n || Ko, initialSelectedTopicIds: a || t }
          })
          .withAnalytics({ section: 'topics_selector' }),
        Zo = n('Rp9C'),
        $o = 'ocfTopicsSelectorNextLink',
        es = 'ocfTopicsSelectorSkipLink',
        ts = n('Znyr'),
        ns = n('sgih'),
        as = (n('1t7P'), n('jQ/y'), Object.freeze({ TopicCategory: 'topic_category', Topic: 'topic' })),
        rs = n('j7Bv'),
        is = n('CGyZ'),
        os = n('cm6r'),
        ss = n('zfvc'),
        ls = n('EHV7'),
        cs = n('iY63'),
        us = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(te.a)(
            'svg',
            o()(
              o()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [ee.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            y.a.createElement(
              'g',
              null,
              y.a.createElement('path', {
                d: 'M19 13H5c-.553 0-1-.447-1-1s.447-1 1-1h14c.553 0 1 .447 1 1s-.447 1-1 1z',
              }),
            ),
          )
        }
      us.metadata = { width: 24, height: 24 }
      var ds = us,
        ps = Wt.a.e854ad27,
        hs = (function (e) {
          m()(n, e)
          var t = v()(n)
          function n() {
            var e
            l()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              b()(p()(e), '_handleFollow', function () {
                var t = e.props,
                  n = t.id
                ;(0, t.onFollowTopic)(n)
              }),
              b()(p()(e), '_handleUnfollow', function () {
                var t = e.props,
                  n = t.id
                ;(0, t.onUnfollowTopic)(n)
              }),
              e
            )
          }
          return (
            u()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.id,
                    n = e.onNavigate,
                    a = e.selectedTopicIds,
                    i = e.subtaskInputs,
                    o = e.topicsById[t],
                    s = a.includes(this.props.id)
                  return y.a.createElement(
                    O.a,
                    { style: fs.cell },
                    y.a.createElement(rs.a, { Icon: ls.a, size: 'large', style: fs.topicIcon }),
                    y.a.createElement(
                      O.a,
                      { style: fs.topicInfo },
                      y.a.createElement(A, r()({ weight: 'bold' }, o.title, { onNavigate: n, subtaskInputs: i })),
                      o.description
                        ? y.a.createElement(
                            A,
                            r()({ color: 'gray700' }, o.description, { onNavigate: n, subtaskInputs: i }),
                          )
                        : null,
                    ),
                    y.a.createElement(is.a, {
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
        })(y.a.PureComponent),
        ms = (function (e) {
          m()(n, e)
          var t = v()(n)
          function n() {
            var e
            l()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              b()(p()(e), 'state', { expanded: !1 }),
              b()(p()(e), '_handleClick', function () {
                e.setState({ expanded: !e.state.expanded })
              }),
              e
            )
          }
          return (
            u()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.categoriesById,
                    n = e.id,
                    a = e.isTopLevel,
                    i = e.onNavigate,
                    o = e.subtaskInputs,
                    s = this.state.expanded,
                    l = t[n],
                    c = s ? _s : vs
                  return y.a.createElement(
                    y.a.Fragment,
                    null,
                    y.a.createElement(
                      os.a,
                      {
                        accessibilityExpanded: s,
                        accessibilityLabel: ps({ title: l.title.text }),
                        onClick: this._handleClick,
                        style: fs.cell,
                      },
                      y.a.createElement(
                        A,
                        r()(
                          { color: 'primary', size: a ? 'headline1' : 'body', weight: a ? 'heavy' : 'bold' },
                          l.title,
                          { onNavigate: i, subtaskInputs: o },
                        ),
                      ),
                      c,
                    ),
                    y.a.createElement(
                      O.a,
                      { style: fs.children },
                      y.a.createElement(ss.b, { show: s }, this._renderChildren()),
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
                    i = e.onFollowTopic,
                    o = e.onNavigate,
                    s = e.onUnfollowTopic,
                    l = e.selectedTopicIds,
                    c = e.subtaskInputs,
                    u = e.topicsById,
                    d = t[a],
                    p = { selectedTopicIds: l, onFollowTopic: i, onUnfollowTopic: s, topicsById: u, subtaskInputs: c }
                  return d.children_items.map(function (e) {
                    var a = e.id
                    return e.type === as.Topic
                      ? y.a.createElement(hs, r()({}, p, { id: a, key: a, onNavigate: o }))
                      : y.a.createElement(n, r()({}, p, { categoriesById: t, id: a, key: a, onNavigate: o }))
                  })
                },
              },
            ]),
            n
          )
        })(y.a.PureComponent),
        fs = F.a.create(function (e) {
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
        vs = y.a.createElement(cs.a, { style: fs.plusIcon }),
        _s = y.a.createElement(ds, { style: fs.minusIcon }),
        bs = Wt.a.f134915f,
        gs = Wt.a.h6beb5fa,
        ys = Wt.a.b8fb87e0,
        ks = y.a.createElement($.a, null),
        ws = (function (e) {
          m()(n, e)
          var t = v()(n)
          function n() {
            var e
            l()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              b()(p()(e), 'state', { hideBanner: !1, selectedTopicIds: e.props.initialSelectedTopicIds, showCart: !1 }),
              b()(p()(e), '_renderCartButton', function () {
                var t = e.props.subtask.selected_topics_cart,
                  n = e.state.selectedTopicIds
                return t && t.title && n.length > 0
                  ? y.a.createElement(
                      O.a,
                      null,
                      y.a.createElement(D.a, {
                        accessibilityLabel: ys,
                        icon: ks,
                        onPress: e._handleOpenCart,
                        size: 'small',
                        type: 'brandOutlined',
                      }),
                      y.a.createElement(ts.a, {
                        count: n.length,
                        truncatedCountFormatter: gs,
                        unreadCountLabel: bs,
                        withBorder: !0,
                      }),
                    )
                  : null
              }),
              b()(p()(e), '_renderCart', function () {
                var t = e.props,
                  n = t.onNavigate,
                  a = t.subtask,
                  i = t.subtaskInputs,
                  o = a.selected_topics_cart,
                  s =
                    o && o.done_label
                      ? y.a.createElement(
                          D.a,
                          {
                            key: 'button_cancel',
                            onPress: e._handleCloseCart,
                            style: Cs.cartButton,
                            type: 'primaryOutlined',
                          },
                          o.done_label.text,
                        )
                      : null
                return y.a.createElement(
                  ns.a,
                  { onMaskClick: e._handleCloseCart, style: Cs.cart, type: 'bottom', withMask: !0 },
                  o && o.title
                    ? y.a.createElement(
                        A,
                        r()(
                          {
                            align: 'center',
                            onNavigate: n,
                            size: 'headline1',
                            style: Cs.cartHeader,
                            subtaskInputs: i,
                            weight: 'heavy',
                          },
                          o.title,
                        ),
                      )
                    : null,
                  e._renderCartItems(),
                  s,
                )
              }),
              b()(p()(e), '_handleOpenCart', function () {
                e.setState({ showCart: !0 }), e.props.analytics.scribe({ element: 'cart', action: 'impression' })
              }),
              b()(p()(e), '_handleCloseCart', function () {
                e.setState({ showCart: !1 }), e.props.analytics.scribe({ element: 'cart', action: 'dismiss' })
              }),
              b()(p()(e), '_renderBanner', function () {
                var t = e.props.subtask.banner,
                  n = e.state.hideBanner
                return t && !n
                  ? y.a.createElement(He.a, {
                      actionLabel: t.dismiss_label.text,
                      headline: t.title.text,
                      onAction: e._handleBannerDismiss,
                      onClose: e._handleBannerDismiss,
                      subtext: t.subtitle.text,
                    })
                  : null
              }),
              b()(p()(e), '_renderCartItems', function () {
                var t = e.props,
                  n = t.onNavigate,
                  a = t.subtask,
                  r = t.subtaskInputs,
                  i = e.state.selectedTopicIds
                return i.map(function (t) {
                  return y.a.createElement(hs, {
                    id: t,
                    key: t,
                    onFollowTopic: e._handleFollowTopic,
                    onNavigate: n,
                    onUnfollowTopic: e._handleUnfollowTopic,
                    selectedTopicIds: i,
                    subtaskInputs: r,
                    topicsById: a.topic_by_id_list,
                  })
                })
              }),
              b()(p()(e), '_renderItems', function () {
                var t = e.props,
                  n = t.onNavigate,
                  a = t.subtask,
                  r = t.subtaskInputs,
                  i = e.state.selectedTopicIds
                return a.top_category_ids.map(function (t) {
                  return y.a.createElement(ms, {
                    categoriesById: a.category_by_id_list,
                    id: t,
                    isTopLevel: !0,
                    key: t,
                    onFollowTopic: e._handleFollowTopic,
                    onNavigate: n,
                    onUnfollowTopic: e._handleUnfollowTopic,
                    selectedTopicIds: i,
                    subtaskInputs: r,
                    topicsById: a.topic_by_id_list,
                  })
                })
              }),
              b()(p()(e), '_handleFollowTopic', function (t) {
                e.props.analytics.scribe({ element: 'topic', action: 'follow', data: { items: [Zo.a.forTopic(t)] } }),
                  e.setState({ selectedTopicIds: [].concat(I()(e.state.selectedTopicIds), [t]) })
              }),
              b()(p()(e), '_handleUnfollowTopic', function (t) {
                e.props.analytics.scribe({ element: 'topic', action: 'unfollow', data: { items: [Zo.a.forTopic(t)] } }),
                  e.setState({
                    selectedTopicIds: e.state.selectedTopicIds.filter(function (e) {
                      return e !== t
                    }),
                  })
              }),
              b()(p()(e), '_handleBannerDismiss', function () {
                e.props.analytics.scribe({ element: 'prompt', action: 'dismiss' }), e.setState({ hideBanner: !0 })
              }),
              b()(p()(e), '_handleNextButtonClick', function () {
                var t = e.props,
                  n = t.onNavigate,
                  a = t.subtask,
                  r = t.subtaskId,
                  i = t.updateFlow,
                  o = e.state.selectedTopicIds
                i(r, { link: a.next_link.link_id, selected_topic_ids: o }), n(a.next_link)
              }),
              b()(p()(e), '_handleSkipButtonClick', function () {
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
            u()(n, [
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
                    n = e.onNavigate,
                    a = e.passthroughOcfScreenProps,
                    i = e.subtask,
                    o = e.subtaskInputs,
                    s = i.next_link,
                    l = i.primary_text,
                    c = i.secondary_text,
                    u = i.skip_link,
                    d = this.state.showCart,
                    p = this._renderCartButton()
                  return y.a.createElement(
                    ye.a,
                    r()({}, a, {
                      footer: y.a.createElement(B, {
                        actionLabel: null == s ? void 0 : s.label,
                        actionTestID: $o,
                        onAction: this._handleNextButtonClick,
                        onSecondaryAction: this._handleSkipButtonClick,
                        secondaryActionLabel: null == u ? void 0 : u.label,
                        secondaryActionTestID: es,
                      }),
                      header: y.a.createElement(ge, {
                        onNavigate: n,
                        primaryTextProp: l,
                        secondaryTextProp: c,
                        subtaskInputs: o,
                        withHeaderImage: !0,
                      }),
                      leftControl: p,
                      providePadding: !0,
                    }),
                    y.a.createElement(O.a, null, this._renderBanner(), this._renderItems()),
                    d ? this._renderCart() : null,
                    t,
                  )
                },
              },
            ]),
            n
          )
        })(y.a.Component),
        Cs = F.a.create(function (e) {
          return {
            cart: {
              flexGrow: 1,
              maxHeight: '80vh',
              overflow: 'auto',
              padding: e.spaces.space20,
              paddingBottom: e.spaces.space20,
            },
            cartButton: { marginTop: e.spaces.space12 },
            cartHeader: { marginBottom: e.spaces.space12 },
          }
        }),
        Es = Jo(ws),
        Is = Object(qe.createLocalApiErrorHandlerWithContextFactory)('OCF_TWEET_SELECTION_URT'),
        xs = Object(Ge.a)()
          .propsFromActions(function () {
            return { clearTimelineCache: sr.a, createLocalApiErrorHandler: Is }
          })
          .withAnalytics(),
        Ss = n('ezF+'),
        Ts = n('8UdT'),
        Ps = n('xWpm'),
        Ls = n('VrCx'),
        As = 'ocfTweetSelectionURTNextButton',
        Os = function (e) {
          switch (e) {
            case vr.a.NOT_FOUND:
              return y.a.createElement(hr.a, null)
            case vr.a.NOT_ALLOWED:
              return y.a.createElement(pr.a, null)
            default:
              return (
                Object(Rt.a)('Unhandled timeline unavailable reason in Ocf TweetSelectionURT screen: '.concat(e)), null
              )
          }
        },
        Ds = F.a.create(function (e) {
          return { container: { paddingTop: e.spaces.space40 } }
        }),
        Fs = xs(function (e) {
          var t = e.errorDialog,
            n = e.onNavigate,
            a = e.passthroughOcfScreenProps,
            i = e.subtask,
            s = e.subtaskId,
            l = e.subtaskInputs,
            c = e.updateFlow,
            u = i.graphql_timeline_query,
            d = i.header,
            p = i.next_link,
            h = i.next_link_options,
            m = i.timeline_source,
            f = Object(S.e)(l, { key: 'selected_tweet_ids', subtask_id: s }, []) || [],
            v = y.a.useState(f),
            _ = W()(v, 2),
            g = _[0],
            k = _[1],
            w = y.a.useCallback(
              function () {
                c(s, { link: p.link_id, selected_tweet_ids: g }), n(p)
              },
              [g, n, p, s, c],
            ),
            C = y.a.useCallback(
              function (e) {
                k(function (t) {
                  return t.includes(e)
                    ? t.filter(function (t) {
                        return e !== t
                      })
                    : t.concat(e)
                })
              },
              [k],
            ),
            E = y.a.useMemo(
              function () {
                return (function (e) {
                  var t,
                    n,
                    a = e.handleTweetClick,
                    r = e.selectedTweetIds
                  return o()(
                    o()({}, cr.b),
                    {},
                    ((n = {}),
                    b()(n, Ts.b.Tombstone, Ss.e(Ss.a())),
                    b()(
                      n,
                      Ts.b.Tweet,
                      o()(
                        o()({}, cr.b[Ts.b.Tweet]),
                        {},
                        {
                          handlers:
                            ((t = {}),
                            b()(t, Ls.a.Tweet, Object(Ps.d)({ onClick: a, selectedTweetIds: r })),
                            b()(t, Ls.a.QuotedTweet, Object(Ps.d)({ onClick: a, selectedTweetIds: r })),
                            t),
                        },
                      ),
                    ),
                    n),
                  )
                })({ handleTweetClick: C, selectedTweetIds: g })
              },
              [C, g],
            ),
            I = y.a.useMemo(
              function () {
                return (function (e, t) {
                  return e
                    ? Object(dr.a)(e.timeline_key)
                    : Object(or.a)({ urtUrl: { url: t || '', urlType: br.a.UrtEndpoint } })
                })(u, m)
              },
              [u, m],
            ),
            x = y.a.useMemo(
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
                })(g.length, h)
              },
              [g, h],
            )
          return y.a.createElement(
            ye.a,
            r()({}, a, {
              footer: y.a.createElement(B, {
                actionDisabled: !x,
                actionLabel: null == p ? void 0 : p.label,
                actionTestID: As,
                onAction: w,
              }),
              header: y.a.createElement(ge, { header: d, onNavigate: n, subtaskInputs: l, withHeaderImage: !0 }),
              providePadding: !0,
            }),
            y.a.createElement(
              O.a,
              { style: Ds.container },
              y.a.createElement(mr.a, { entryConfiguration: E, module: I, renderUnavailable: Os, title: '' }),
            ),
            t,
          )
        }),
        Rs = function (e, t) {
          var n = wi.h(e),
            a = n ? ki.k(e, n) : []
          return W()(a, 1)[0]
        },
        Ns = function (e, t) {
          var n = wi.i(e),
            a = n ? ki.k(e, n) : []
          return W()(a, 1)[0]
        },
        Bs = Object(Ge.a)()
          .propsFromState(function () {
            return { avatarMedia: Rs, bannerMedia: Ns }
          })
          .propsFromActions(function () {
            return { scribeAction: ft.c, updateProfileAvatar: wi.l, updateProfileBanner: wi.m }
          })
          .withAnalytics()(
          (function (e) {
            m()(n, e)
            var t = v()(n)
            function n() {
              var e
              l()(this, n)
              for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
              return (
                (e = t.call.apply(t, [this].concat(r))),
                b()(p()(e), '_scribeUploadStart', function (t) {
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
                b()(p()(e), '_updateMedia', function () {
                  var t = e.props,
                    n = t.avatarMedia,
                    a = t.bannerMedia,
                    r = t.subtask.sources,
                    i = t.updateProfileAvatar,
                    o = t.updateProfileBanner
                  return new Promise(function (t, s) {
                    try {
                      r.forEach(function (t) {
                        var r = t.style
                        r === k.l.Avatar && n
                          ? (e._scribeUploadStart('select_avatar'), i(n.id))
                          : r === k.l.Banner && a && (e._scribeUploadStart('select_banner'), o(a.id))
                      }),
                        t()
                    } catch (l) {
                      s(l)
                    }
                  })
                }),
                e
              )
            }
            return (
              u()(n, [
                {
                  key: 'render',
                  value: function () {
                    var e = this.props,
                      t = e.onNavigate,
                      n = e.subtask,
                      a = e.subtaskId
                    return y.a.createElement(Je, {
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
          })(y.a.Component),
        ),
        Ms = (n('7xRU'), n('IcAo')),
        Vs = n('Ka9G'),
        Us = y.a.createContext(new Set()),
        js = function (e, t) {
          return function (n) {
            n.loggedInUserId, n.promotedContent
            var a = n.userId
            return y.a.createElement(Us.Consumer, null, function (n) {
              return y.a.createElement(is.a, {
                isFollowing: n.has(a),
                onFollow: e(a),
                onUnfollow: t(a),
                showRelationshipChangeConfirmation: !1,
                size: 'small',
                style: zs.followButton,
                type: 'user',
              })
            })
          }
        },
        zs = F.a.create(function (e) {
          return { followButton: { alignSelf: 'flex-start', marginLeft: e.spaces.space12 } }
        }),
        Hs = function (e, t, n) {
          return function (a) {
            var r = a.user.id_str
            n.has(r) ? t(r)() : e(r)()
          }
        },
        Ws = n('ZNT5'),
        Gs = 'ocfURTUserRecommendationsNextButton',
        qs = 'ocfURTUserRecommendationsSkipButton',
        Ks = function (e) {
          switch (e) {
            case vr.a.NOT_FOUND:
              return y.a.createElement(hr.a, null)
            case vr.a.NOT_ALLOWED:
              return y.a.createElement(pr.a, null)
            default:
              return Object(Rt.a)('Unhandled timeline unavailable reason: '.concat(e)), null
          }
        },
        Ys = (function (e) {
          m()(n, e)
          var t = v()(n)
          function n(e) {
            var a
            return (
              l()(this, n),
              (a = t.call(this, e)),
              b()(p()(a), '_isBelowMinFollows', function () {
                var e = a.props.subtask.min_follow_count
                return !!e && a.state.selectedUsers.size < e
              }),
              b()(
                p()(a),
                '_getMemoizedModule',
                Object(kr.a)(function (e, t) {
                  return (
                    (a = (n = { subtask_id: e, flow_token: t || '' }).flow_token),
                    (r = n.subtask_id),
                    Object(Ws.a)({
                      timelineId: 'nux-user-recos-'.concat(r),
                      getEndpoint: function (e) {
                        return e.URT.fetchNUXUserRecommendations
                      },
                      getEndpointParams: function (e) {
                        return o()(o()({}, e), {}, { subtask_id: r, flow_token: a })
                      },
                      context: 'FETCH_NUX_USER_RECOS',
                      perfKey: 'nux-user-recos',
                    })
                  )
                  var n, a, r
                }),
              ),
              b()(p()(a), '_getModule', function () {
                var e = a.props,
                  t = e.flowToken,
                  n = e.subtaskId
                return a._getMemoizedModule(n, t)
              }),
              b()(p()(a), '_onFollow', function (e) {
                return function () {
                  var t = Object(tt.a)(I()(a.state.selectedUsers))
                  t.add(e), a.setState({ selectedUsers: t }), a._handleScribe('follow')
                }
              }),
              b()(p()(a), '_onUnfollow', function (e) {
                return function () {
                  var t = Object(tt.a)(I()(a.state.selectedUsers))
                  t.has(e) && t.delete(e), a.setState({ selectedUsers: t }), a._handleScribe('unfollow')
                }
              }),
              b()(p()(a), '_getFollowText', function (e, t, n) {
                return !e || n < 1 ? t : e.concat(gr.a.getFormattedCount(n))
              }),
              b()(p()(a), '_handleFollowButtonClick', function () {
                var e = a.props,
                  t = e.onNavigate,
                  n = e.subtask,
                  r = e.subtaskId
                ;(0, e.updateFlow)(r, {
                  link: n.next_link.link_id,
                  selected_user_recommendations: I()(a.state.selectedUsers),
                }),
                  t(n.next_link)
              }),
              b()(p()(a), '_handleSkipButtonClick', function () {
                var e = a.props,
                  t = e.onNavigate,
                  n = e.subtask.skip_link,
                  r = e.subtaskId,
                  i = e.updateFlow
                n && i(r, { link: n.link_id }), n && t(n)
              }),
              (a.state = { selectedUsers: new Set() }),
              a
            )
          }
          return (
            u()(n, [
              {
                key: 'render',
                value: function () {
                  var e,
                    t = this.props,
                    n = t.onNavigate,
                    a = t.passthroughOcfScreenProps,
                    i = t.subtask,
                    o = t.subtaskInputs,
                    s = i.primary_text,
                    l = i.secondary_text,
                    c = i.skip_link,
                    u = this.state.selectedUsers,
                    d = ''
                  if (i.next_link_threshold_text && i.next_link_threshold_text.length > 0) {
                    var p = i.next_link_threshold_text[0]
                    d = p && p.text && p.text.text
                  }
                  var h,
                    m,
                    f,
                    v,
                    _ = i.next_link.label,
                    g = u.size,
                    k = null !== (e = this._getFollowText(d, _, g)) && void 0 !== e ? e : void 0,
                    w = Array.from(u).join(',')
                  return y.a.createElement(
                    ye.a,
                    r()({}, a, {
                      footer: y.a.createElement(B, {
                        actionDisabled: this._isBelowMinFollows(),
                        actionLabel: this._isBelowMinFollows() && c ? void 0 : k,
                        actionTestID: Gs,
                        onAction: this._handleFollowButtonClick,
                        onSecondaryAction: this._handleSkipButtonClick,
                        secondaryActionLabel: this._isBelowMinFollows() ? (null == c ? void 0 : c.label) : void 0,
                        secondaryActionTestID: qs,
                      }),
                      header: y.a.createElement(ge, {
                        onNavigate: n,
                        primaryTextProp: s,
                        secondaryTextProp: l,
                        subtaskInputs: o,
                        withHeaderImage: !0,
                      }),
                      providePadding: !0,
                    }),
                    y.a.createElement(
                      Us.Provider,
                      { value: u },
                      y.a.createElement(mr.a, {
                        entryConfiguration:
                          ((h = { onFollow: this._onFollow, onUnfollow: this._onUnfollow, currentFollows: u }),
                          (m = h.currentFollows),
                          (f = h.onFollow),
                          (v = h.onUnfollow),
                          Object(Ms.a)(
                            {},
                            cr.b,
                            b()(
                              {},
                              Ts.b.User,
                              Object(Vs.a)({
                                decoration: js(f, v),
                                withLink: !1,
                                shouldScribeProfileClick: !1,
                                onClick: Hs(f, v, m),
                              }),
                            ),
                          )),
                        fetchOptions: { follows: w },
                        module: this._getModule(),
                        renderUnavailable: Ks,
                        title: '',
                      }),
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
        })(y.a.Component),
        Xs = Object(Nt.a)(Ys, { page: 'onboarding', section: 'user_recommendations' }),
        Qs = (n('DfhM'), n('tI3i')),
        Js = n.n(Qs),
        Zs = n('TEoO'),
        $s = n('tn7R'),
        el = F.a.create(function (e) {
          return { followButton: { alignSelf: 'flex-start', marginLeft: e.spaces.space12 } }
        }),
        tl = function (e) {
          var t = e.isCheckboxFollowButton,
            n = e.onSearchUserUnfollowed,
            a = e.user,
            r = a.id_str,
            i = a.screen_name,
            o = function () {
              return n(r)
            }
          return t
            ? y.a.createElement(st.a, { checked: !0, onChange: o })
            : y.a.createElement(is.a, {
                isFollowing: !0,
                name: i,
                onFollow: De.a,
                onUnfollow: o,
                showRelationshipChangeConfirmation: !1,
                size: 'small',
                style: el.followButton,
                type: 'user',
              })
        },
        nl = F.a.create(function (e) {
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
        al = function (e) {
          var t = e.children,
            n = e.header
          return y.a.createElement(O.a, { style: nl.group }, y.a.createElement(O.a, { style: nl.groupHeader }, n), t)
        },
        rl = n('tocL'),
        il = n('Re5t'),
        ol = F.a.create(function (e) {
          return {
            userCellListItem: { paddingHorizontal: e.spaces.space20 },
            userCellListItemWrapper: { display: 'flex', flexDirection: 'column', justifyContent: 'center' },
          }
        }),
        sl = function (e) {
          var t = e.decorator,
            n = e.description,
            a = e.id,
            r = (e.isFollowing, e.isVerified),
            i = e.name,
            o = e.onCellClick,
            s = e.profileImageUrl,
            l = e.screenName,
            c = e.socialText,
            u = y.a.useMemo(
              function () {
                if (c) return { contextType: rl.a.Follow, text: c }
              },
              [c],
            )
          return y.a.createElement(
            O.a,
            { accessibilityRole: 'label', style: ol.userCellListItemWrapper },
            y.a.createElement(_e.a, {
              avatarUri: s,
              decoration: t,
              description: n,
              displayMode: il.a.UserDetailed,
              entities: {},
              isVerified: r,
              name: i,
              onCellClick: o,
              promotedItemType: 'users',
              screenName: l,
              socialContext: u,
              style: ol.userCellListItem,
              userId: a,
              withLink: !1,
            }),
          )
        },
        ll = function (e) {
          var t = e.isCheckboxFollowButton,
            n = e.onSearchUserRemove,
            a = e.selectedSearchHeader,
            r = e.selectedSearchUsers,
            i = Object($s.a)(r)
          if (!a || !i.length) return null
          var o = function (e) {
            return n(e)
          }
          return y.a.createElement(
            al,
            { header: y.a.createElement(x.b, { size: 'headline1', weight: 'bold' }, a) },
            i.map(function (e) {
              return y.a.createElement(sl, {
                decorator: y.a.createElement(tl, { isCheckboxFollowButton: t, onSearchUserUnfollowed: o, user: e }),
                id: e.id_str,
                isFollowing: !0,
                isVerified: e.verified,
                key: e.id_str,
                name: e.name,
                onCellClick: function () {
                  return o(e.id_str)
                },
                profileImageUrl: e.profile_image_url_https,
                screenName: e.screen_name,
              })
            }),
          )
        },
        cl = F.a.create(function (e) {
          return { followButton: { alignSelf: 'flex-start', marginLeft: e.spaces.space12 } }
        }),
        ul = function (e) {
          var t = e.isCheckboxFollowButton,
            n = e.isFollowed,
            a = e.screenName,
            r = e.updateFollowedItems,
            i = e.userId,
            o = function (e) {
              return function () {
                return r(i, e)
              }
            }
          return t
            ? y.a.createElement(st.a, {
                checked: n,
                onChange: function () {
                  return r(i, !n)
                },
              })
            : y.a.createElement(is.a, {
                isFollowing: n,
                name: a,
                onFollow: o(!0),
                onUnfollow: o(!1),
                showRelationshipChangeConfirmation: !1,
                size: 'small',
                style: cl.followButton,
                type: 'user',
              })
        },
        dl = function (e) {
          return e.items
            .map(function (e) {
              return e.user_id_str
            })
            .join('-')
        },
        pl = Kt.a,
        hl = function (e) {
          var t = e.userGroups,
            n = e.selectedSearchUsers,
            a = e.onNearEnd,
            r = void 0 === a ? De.a : a,
            i = e.followButtonType,
            o = e.followedUserIds,
            s = e.onFollow,
            l = e.onUnfollow,
            c = e.onSearchUserRemove,
            u = e.selectedSearchHeader,
            d = y.a.useContext(Ze.a).loggedInUserId
          Js()(!!d, 'loggedInUserId must be defined')
          var p = i === k.h.Checkbox,
            h = y.a.useCallback(
              function (e, t) {
                return t ? s(e) : l(e)
              },
              [s, l],
            ),
            m = y.a.useCallback(
              function (e, t) {
                h([e], t)
              },
              [h],
            ),
            f = y.a.useCallback(
              function (e, t) {
                return function () {
                  var n = e.items.map(function (e) {
                    return e.user_id_str
                  })
                  h(n, !t)
                }
              },
              [h],
            ),
            v = y.a.useCallback(
              function (e) {
                var t = e.items.every(function (e) {
                    return o.has(e.user_id_str)
                  }),
                  n = y.a.createElement(
                    y.a.Fragment,
                    null,
                    y.a.createElement(x.b, { size: 'headline1', weight: 'bold' }, e.header),
                    p && y.a.createElement(st.a, { checked: t, onChange: f(e, t) }),
                  )
                return y.a.createElement(
                  al,
                  { header: n },
                  e.items.map(function (e) {
                    var t = e.social_text,
                      n = e.user,
                      a = o.has(n.id_str)
                    return y.a.createElement(sl, {
                      decorator: y.a.createElement(ul, {
                        isCheckboxFollowButton: p,
                        isFollowed: a,
                        screenName: n.screen_name,
                        updateFollowedItems: m,
                        userId: n.id_str,
                      }),
                      description: n.description,
                      id: n.id_str,
                      isFollowing: a,
                      isVerified: n.verified,
                      key: n.id_str,
                      name: n.name,
                      onCellClick: function () {
                        return m(n.id_str, !a)
                      },
                      profileImageUrl: n.profile_image_url_https,
                      screenName: n.screen_name,
                      socialText: t,
                    })
                  }),
                )
              },
              [o, p, f, m],
            )
          return y.a.createElement(
            O.a,
            null,
            y.a.createElement(ll, {
              isCheckboxFollowButton: p,
              onSearchUserRemove: c,
              selectedSearchHeader: u,
              selectedSearchUsers: n,
            }),
            y.a.createElement(Zs.a, {
              cacheKey: 'userSelectList/'.concat(d),
              identityFunction: dl,
              items: t,
              nearEndProximityRatio: 1.15,
              noItemsRenderer: pl,
              onNearEnd: r,
              renderer: v,
            }),
          )
        },
        ml = [Br.a.Users],
        fl = 'selected_user_recommendations',
        vl = (function (e) {
          m()(n, e)
          var t = v()(n)
          function n(e) {
            var a
            l()(this, n),
              (a = t.call(this, e)),
              b()(p()(a), '_getPreCheckedUsers', function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
                return Object(tt.a)(
                  e.reduce(function (e, t) {
                    var n = t.items.reduce(function (e, t) {
                      return t.checked_by_default && e.push(t.user_id_str), e
                    }, [])
                    return [].concat(I()(e), I()(n))
                  }, []),
                )
              }),
              b()(p()(a), '_getFollowText', function (e, t, n) {
                return !e || n < 1 ? t : e.concat(gr.a.getFormattedCount(n))
              }),
              b()(p()(a), '_handleSelectionChanged', function (e) {
                a.setState({ selectedUsers: Object(tt.a)(e) })
              }),
              b()(p()(a), '_handleOnUnfollowsSelected', function (e) {
                var t,
                  n = Object(tt.a)(I()(a.state.selectedUsers)),
                  r = a.state.selectedSearchUsers,
                  i = Yi()(e)
                try {
                  for (i.s(); !(t = i.n()).done; ) {
                    var o = t.value
                    n.has(o) && n.delete(o), delete r[o]
                  }
                } catch (s) {
                  i.e(s)
                } finally {
                  i.f()
                }
                a.setState({ selectedUsers: n, selectedSearchUsers: r })
              }),
              b()(p()(a), '_handleOnFollowsSelected', function (e) {
                var t,
                  n = Object(tt.a)(I()(a.state.selectedUsers)),
                  r = Yi()(e)
                try {
                  for (r.s(); !(t = r.n()).done; ) {
                    var i = t.value
                    n.add(i)
                  }
                } catch (o) {
                  r.e(o)
                } finally {
                  r.f()
                }
                a.setState({ selectedUsers: n })
              }),
              b()(p()(a), '_handleFollowButtonClick', function () {
                var e = a.props,
                  t = e.onNavigate,
                  n = e.subtask,
                  r = e.subtaskId
                ;(0, e.updateFlow)(r, {
                  link: n.next_link.link_id,
                  selected_user_recommendations: I()(a.state.selectedUsers),
                  searched_users: Object.keys(a.state.selectedSearchUsers),
                }),
                  t(n.next_link)
              }),
              b()(p()(a), '_handleSkipButtonClick', function () {
                var e = a.props,
                  t = e.onNavigate,
                  n = e.subtask.skip_link,
                  r = e.subtaskId,
                  i = e.updateFlow
                n && i(r, { link: n.link_id }), n && t(n)
              }),
              b()(p()(a), '_handleSearchUserRemoved', function (e) {
                return a._handleOnUnfollowsSelected([e])
              }),
              b()(p()(a), '_handleSearchSuggestionSelected', function (e, t) {
                if (e.type === Br.b.User) {
                  var n = e.data,
                    r = a.state,
                    i = r.selectedSearchUsers,
                    o = r.selectedUsers
                  a._recommendedUsers.has(n.id_str) && o.add(n.id_str),
                    (i[n.id_str] = n),
                    a.setState({ selectedSearchUsers: i, selectedUsers: o })
                }
              })
            var r = e.subtaskId,
              i = e.subtaskInputs,
              o = Object(tt.a)([]),
              s = Object(S.e)(i, { key: fl, subtask_id: r }, o)
            return (
              (a._recommendedUsers = Object(tt.a)(
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
                selectedUsers: s && s.size ? s : a._getPreCheckedUsers(e.subtask.groups),
              }),
              a
            )
          }
          return (
            u()(n, [
              {
                key: 'render',
                value: function () {
                  var e,
                    t = this.props,
                    n = t.onNavigate,
                    a = t.passthroughOcfScreenProps,
                    i = t.subtask,
                    o = t.subtaskInputs,
                    s = this.state,
                    l = s.selectedSearchUsers,
                    c = s.selectedUsers,
                    u = (((i.next_link_threshold_text || {})[0] || {}).text || {}).text,
                    d = i.next_link.label,
                    p = (l ? Object.keys(l).length : 0) + c.size,
                    h = this._getFollowText(u, d, p),
                    m = y.a.createElement(
                      D.a,
                      { onPress: this._handleFollowButtonClick, size: 'large', type: 'primaryFilled' },
                      h,
                    ),
                    f =
                      i.skip_link && i.skip_link.label
                        ? y.a.createElement(
                            D.a,
                            { onPress: this._handleSkipButtonClick, size: 'large', type: 'primaryText' },
                            null === (e = i.skip_link) || void 0 === e ? void 0 : e.label,
                          )
                        : null,
                    v = null === i.min_follow_count || void 0 === i.min_follow_count ? 1 : i.min_follow_count,
                    _ = c.size >= v ? m : f,
                    b = i.show_user_search
                      ? y.a.createElement(
                          O.a,
                          { style: [de.contentArea, _l.searchContainer] },
                          y.a.createElement(Rr.c, {
                            filter: ml,
                            onItemClick: this._handleSearchSuggestionSelected,
                            placeholder: i.hint,
                            rounded: !0,
                            shouldAutoFocus: !0,
                            shouldClearOnSelect: !0,
                            source: Br.d.WelcomeFlow,
                          }),
                        )
                      : null
                  return y.a.createElement(
                    ye.a,
                    r()({}, a, { rightControl: _ }),
                    y.a.createElement(
                      O.a,
                      null,
                      y.a.createElement(
                        O.a,
                        { style: _l.main },
                        i.primary_text
                          ? y.a.createElement(
                              A,
                              r()({}, i.primary_text, {
                                nativeID: M.b,
                                onNavigate: n,
                                size: 'title4',
                                style: _l.headline,
                                subtaskInputs: o,
                                weight: 'bold',
                              }),
                            )
                          : null,
                        i.secondary_text
                          ? y.a.createElement(
                              A,
                              r()({}, i.secondary_text, {
                                onNavigate: n,
                                size: 'body',
                                style: _l.subHeader,
                                subtaskInputs: o,
                                weight: 'bold',
                              }),
                            )
                          : null,
                      ),
                      b,
                      y.a.createElement(
                        O.a,
                        null,
                        y.a.createElement(hl, {
                          followButtonType: i.follow_button_type,
                          followedUserIds: c,
                          onFollow: this._handleOnFollowsSelected,
                          onSearchUserRemove: this._handleSearchUserRemoved,
                          onUnfollow: this._handleOnUnfollowsSelected,
                          selectedSearchHeader:
                            (i.custom_recommendations_header && i.custom_recommendations_header.text) || void 0,
                          selectedSearchUsers: l,
                          userGroups: i.groups,
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
        })(y.a.Component),
        _l = F.a.create(function (e) {
          return {
            secondaryText: { marginBottom: e.spaces.space16 },
            main: { marginHorizontal: e.spaces.space20 },
            searchContainer: { marginBottom: e.spaces.space16, zIndex: 1 },
            headline: { marginVertical: e.spaces.space16 },
            subHeader: { marginBottom: e.spaces.space16 },
          }
        }),
        bl = (function (e) {
          m()(n, e)
          var t = v()(n)
          function n() {
            var e
            l()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              b()(p()(e), '_isInteractive', 'interactive' === e.props.subtask.style),
              b()(p()(e), '_navigateAndUpdate', function (t) {
                var n = e.props,
                  a = n.onNavigate,
                  r = n.subtask,
                  i = n.subtaskId
                ;(0, n.updateFlow)(i, { link: t.link_id, wait_time_ms: r.wait_time_ms }), a(t, !0)
              }),
              e
            )
          }
          return (
            u()(n, [
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
                    var i = a.extension_timeout_link
                    i &&
                      (this._interactiveTimeout = setTimeout(function () {
                        e._navigateAndUpdate(i)
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
                    i = e.subtaskInputs,
                    o = a.detail_text,
                    s = a.header
                  return y.a.createElement(
                    ye.a,
                    r()({}, n, {
                      header:
                        this._isInteractive &&
                        this.props.subtask.header &&
                        y.a.createElement(ge, { header: s, onNavigate: t, subtaskInputs: i, withHeaderImage: !0 }),
                      providePadding: this._isInteractive,
                    }),
                    y.a.createElement(
                      O.a,
                      { style: gl.indicator },
                      this._isInteractive && this.props.subtask.header
                        ? y.a.createElement(
                            O.a,
                            null,
                            o && y.a.createElement(A, r()({}, o, { onNavigate: t, subtaskInputs: i })),
                          )
                        : y.a.createElement(Hr.a, null),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(y.a.Component),
        gl = F.a.create(function (e) {
          return { indicator: { display: 'flex', flex: 1, justifyContent: 'center' } }
        }),
        yl = { page: 'onboarding' },
        kl = Wt.a.c20aaf3d,
        wl = Wt.a.a219e217,
        Cl = (function (e) {
          m()(n, e)
          var t = v()(n)
          function n(e, a) {
            var i
            return (
              l()(this, n),
              (i = t.call(this, e, a)),
              b()(p()(i), '_handleBackAttempt', function (e, t) {
                var n = i.props.currentSubtask,
                  a = !n || !n.subtask_back_navigation || n.subtask_back_navigation !== k.y.Disallow,
                  r = !((null == n ? void 0 : n.subtask_back_navigation) !== k.y.CancelFlow),
                  o = !i.currentPreviousNavigableSubtaskId && (i._onFirstTaskSinceStart || r) && a
                return (
                  !('POP' === t && !o) ||
                  (i.currentPreviousNavigableSubtaskId && a && i._navigateToPreviousSubtask(), !1)
                )
              }),
              b()(p()(i), '_sendGaOnboardingEvent', function (e) {
                ;(0, i.props.googleAnalyticsSendEvent)('signup', e, 'new-user')
              }),
              b()(p()(i), '_startFlow', function (e) {
                var t = e.countryCode,
                  n = e.createLocalApiErrorHandler,
                  a = e.debugOverrides,
                  r = e.flowName,
                  s = e.inputFlowData,
                  l = e.location,
                  c = e.startFlow,
                  u = e.startLocation,
                  d = e.targetUserId,
                  p = e.testCountryCode,
                  h = l.state || {},
                  m = h.fromApp,
                  f = h.gatedAction,
                  v = Object.keys(u || {}).length
                    ? { start_location: u }
                    : { start_location: { location: m ? 'unknown' : 'manual_link' } },
                  _ = { flow_context: o()({ debug_overrides: a, gated_action: f }, v) },
                  b = o()(
                    o()({}, s),
                    {},
                    { country_code: t || s.country_code, target_user_id: d || s.target_user_id },
                    _,
                  )
                'signup' === r && i._sendGaOnboardingEvent('signup-clicked'),
                  (i._onFirstTaskSinceStart = !0),
                  c({ flow_name: r, input_flow_data: b, subtask_versions: S.a, test_country_code: p }).catch(
                    n(sn(r, null, i._displayFailureMessage)),
                  )
              }),
              b()(p()(i), '_handleFlowRestart', function () {
                i._startFlow(i.props)
              }),
              b()(p()(i), '_handleAbortFlow', function (e) {
                var t = i.props,
                  n = t.clearFlow,
                  a = t.currentSubtask,
                  r = t.history,
                  o = t.location,
                  s = t.loginReturnPath,
                  l = t.onAbort,
                  c = t.returnPath
                n({ clearPersistence: !0 })
                var u = a && Object(S.h)(a),
                  d = (a || {}).subtask_back_navigation_link
                if (l) l()
                else if (c) r.replace({ pathname: c, query: { flow_status: e } })
                else if (u === k.B.OpenHomeTimeline) r.replace('/home')
                else if (d) i._handleNavigate(d)
                else {
                  var p = !!i.context.loggedInUserId
                  i._unblockHistory && i._unblockHistory(),
                    Object(Gi.a)({}, { location: o })
                      ? r.goBack()
                      : p
                      ? s
                        ? r.replace(s)
                        : r.replace('/home')
                      : r.replace('/')
                }
              }),
              b()(p()(i), '_handleDeepLink', function (e) {
                var t = i.props.history
                e &&
                  (['twitter://', 'https://'].find(function (t) {
                    return e.startsWith(t)
                  })
                    ? qt.b.navigateTo(e)
                    : t.replace(e))
              }),
              b()(p()(i), '_displayFailureMessage', function (e) {
                i.setState({ alertFailureMessage: e })
              }),
              b()(p()(i), '_submitFlow', function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                  t = e.isTaskNavigation,
                  n = i.props,
                  a = n.createLocalApiErrorHandler,
                  r = n.flowName,
                  o = n.submitFlow
                return o({ isTaskNavigation: t }).then(
                  function (e) {
                    return (i._onFirstTaskSinceStart = !1), e
                  },
                  function (e) {
                    var t = i.props,
                      n = t.failureMessage,
                      o = t.shouldAbort
                    return a(sn(r, n, o ? i._displayFailureMessage : void 0))(e)
                  },
                )
              }),
              b()(p()(i), '_handleNavigate', function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                  n = i.props,
                  a = n.navigateSubtask,
                  r = n.submitFlow,
                  o = e.is_destructive,
                  s = e.subtask_id,
                  l = e.subtask_navigation_context
                switch (
                  (e.suppress_client_events || i._scribeSubtaskNavigate(e),
                  e.callbacks && i._handleCallbacks(e.callbacks, k.p.Click),
                  e.link_type)
                ) {
                  case k.m.Abort:
                    r().catch(De.a), i._handleAbortFlow()
                    break
                  case k.m.Subtask:
                    a({ subtaskId: s, navigationContext: l, destructive: o, fromHiddenSubtask: t })
                    break
                  case k.m.Finish:
                  case k.m.Task:
                    i._submitFlow({ isTaskNavigation: !0 })
                    break
                  case k.m.Deeplink:
                    i._submitFlow(), i._handleDeepLink(e.url)
                    break
                  case k.m.DeeplinkAndAbort:
                    r().catch(De.a), i._handleDeepLink(e.url)
                    break
                  case k.m.WeblinkAndAbort:
                    r().catch(De.a), window.open(e.url, '_blank'), i._handleAbortFlow()
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
                    Object(Rt.a)('Unknown Navigation Link Type '.concat(e.link_type)), i._handleAbortFlow()
                }
              }),
              b()(p()(i), '_scribeSubtaskNavigate', function (e) {
                var t = i.props,
                  n = t.currentSubtask,
                  a = t.flowToken,
                  r = t.scribeAction
                if (n && n.subtask_id) {
                  var s = e.link_id
                  r(o()(o()({}, yl), {}, { element: 'link', action: 'click' }), {
                    items: [{ token: a, name: n.subtask_id, description: s }],
                  })
                }
              }),
              b()(p()(i), '_navigateToSubtask', function (e) {
                return function () {
                  i._handleNavigate({ link_id: '', link_type: k.m.Subtask, subtask_id: e })
                }
              }),
              b()(p()(i), '_endFlowSubtaskAction', function (e, t) {
                var n = i.props.submitFlow
                switch (t) {
                  case k.m.Abort:
                    n()
                      .catch(De.a)
                      .then(function () {
                        return i._handleAbortFlow(e)
                      })
                    break
                  case k.m.Finish:
                    i._submitFlow().then(function () {
                      return i._handleAbortFlow(e)
                    })
                    break
                  default:
                    Object(Rt.a)('Unknown End Flow Type '.concat(t)), i._handleAbortFlow()
                }
              }),
              b()(p()(i), '_render', function () {
                var e = i.props,
                  t = e.currentSubtask,
                  n = e.previousNavigableSubtaskId,
                  a = e.subtasks
                if (!t) return null
                if (Object(vt.g)(t)) {
                  var r = a.find(function (e) {
                    return e.subtask_id === n
                  })
                  return y.a.createElement(y.a.Fragment, null, i._renderSubtask(t), r && i._renderSubtask(r))
                }
                return i._renderSubtask(t)
              }),
              b()(p()(i), '_renderDefault', function () {
                var e = i.props,
                  t = e.currentSubtask,
                  n = e.flowToken,
                  a = e.history,
                  r = e.subtasks.map(function (e) {
                    return y.a.createElement(
                      x.b,
                      { key: e.subtask_id, onClick: i._navigateToSubtask(e.subtask_id) },
                      e.subtask_id,
                    )
                  })
                return y.a.createElement(
                  ye.a,
                  { history: a },
                  y.a.createElement(
                    O.a,
                    { style: { margin: 5 } },
                    y.a.createElement(x.b, null, n),
                    y.a.createElement(x.b, null, 'Current Subtask: '.concat(t ? t.subtask_id : '')),
                    r,
                  ),
                )
              }),
              b()(p()(i), '_handleAbortFlowOnConfirm', function () {
                i._handleAbortFlow()
              }),
              b()(p()(i), '_onNoopInvisibleSubtask', function () {
                return Promise.resolve()
              }),
              b()(p()(i), '_navigateToPreviousSubtask', function () {
                var e = i.props
                ;(0, e.navigateSubtask)({ subtaskId: e.previousNavigableSubtaskId, destructive: !0 })
              }),
              b()(p()(i), '_renderErrorDialog', function () {
                var e = i.props,
                  t = e.failureMessage,
                  n = e.history
                return y.a.createElement(
                  ye.a,
                  { hideBackButton: !0, history: n },
                  y.a.createElement(Ae.a, {
                    confirmButtonLabel: wl,
                    headline: kl,
                    onConfirm: i._handleAbortFlowOnConfirm,
                    text: t || rn,
                    withCancelButton: !1,
                  }),
                )
              }),
              b()(p()(i), '_renderSubtask', function (e) {
                var t = i.props,
                  n = t.addToast,
                  a = t.callInteractiveSpinnerPath,
                  o = t.fetchTemporaryPassword,
                  s = t.flowName,
                  l = t.flowToken,
                  c = t.history,
                  u = t.location,
                  d = t.previouslySubmittedSubtaskId,
                  p = t.removeContacts,
                  h = t.shouldAbort,
                  m = t.submitFailed,
                  f = t.subtaskInputs,
                  v = t.updateFlow,
                  _ = e.progress_indication,
                  b = e.subtask_back_navigation,
                  g = e.subtask_id,
                  w = h
                    ? y.a.createElement(Ae.a, {
                        confirmButtonLabel: wl,
                        headline: kl,
                        onConfirm: i._handleAbortFlowOnConfirm,
                        text: i.state.alertFailureMessage,
                        withCancelButton: !1,
                      })
                    : null,
                  C = {
                    onNavigate: i._handleNavigate,
                    passthroughOcfScreenProps: {
                      backButtonType: b === k.y.CancelFlow ? 'close' : 'back',
                      history: c,
                      onBackClick: i._getBackNavigation(e),
                      progressIndication: _,
                    },
                    subtaskId: g,
                    updateFlow: v,
                  }
                if (e.end_flow)
                  return i._endFlowSubtaskAction(e.end_flow.status, e.end_flow.end_flow_type), i._renderDefault()
                if (e.action_list) return y.a.createElement(Le, r()({ subtask: e.action_list, subtaskInputs: f }, C))
                if (e.fetch_temporary_password)
                  return y.a.createElement(Je, {
                    navigationLink: e.fetch_temporary_password.next_link,
                    onNavigate: i._handleNavigate,
                    subtaskAction: i._handleInvisibleSubtask(g, e.fetch_temporary_password, o),
                    subtaskId: g,
                  })
                if (e.cta) return y.a.createElement(We, r()({ errorDialog: w, subtask: e.cta, subtaskInputs: f }, C))
                if (e.app_download_cta)
                  return y.a.createElement(
                    Re,
                    r()({ errorDialog: w, subtask: e.app_download_cta, subtaskInputs: f }, C),
                  )
                if (e.alert_dialog) return y.a.createElement(Oe, r()({ subtask: e.alert_dialog, subtaskInputs: f }, C))
                if (e.alert_dialog_suppress_client_events)
                  return y.a.createElement(
                    Oe,
                    r()({ subtask: e.alert_dialog_suppress_client_events, subtaskInputs: f }, C),
                  )
                if (e.menu_dialog) return y.a.createElement(Kr, r()({ subtask: e.menu_dialog, subtaskInputs: f }, C))
                if (e.open_account)
                  return y.a.createElement(Je, {
                    navigationLink: e.open_account.next_link,
                    onNavigate: i._handleNavigate,
                    subtaskAction: i._openAccountAction(e.open_account),
                    subtaskId: g,
                  })
                if (e.show_code)
                  return y.a.createElement(po, r()({ errorDialog: w, subtask: e.show_code, subtaskInputs: f }, C))
                if (e.sign_up) return y.a.createElement(Ro, r()({ subtask: e.sign_up, subtaskInputs: f }, C))
                if (e.sign_up_review)
                  return y.a.createElement(
                    Wo,
                    r()({ errorDialog: w, progressIndication: _, subtask: e.sign_up_review, subtaskInputs: f }, C),
                  )
                if (e.js_instrumentation) return y.a.createElement(Wr, r()({ subtask: e.js_instrumentation }, C))
                if (e.phone_verification)
                  return y.a.createElement(
                    di,
                    r()(
                      { errorDialog: w, flowName: s, submitFailed: m, subtask: e.phone_verification, subtaskInputs: f },
                      C,
                    ),
                  )
                if (e.recaptcha)
                  return y.a.createElement(Ha, r()({ errorDialog: w, subtask: e.recaptcha, subtaskInputs: f }, C))
                if (e.privacy_options)
                  return y.a.createElement(mi, r()({ subtask: e.privacy_options, subtaskInputs: f }, C))
                if (e.generic_urt)
                  return y.a.createElement(Sr, r()({ errorDialog: w, subtask: e.generic_urt, subtaskInputs: f }, C))
                if (e.interest_picker)
                  return y.a.createElement(jr, r()({ errorDialog: w, subtask: e.interest_picker, subtaskInputs: f }, C))
                if (e.topics_selector)
                  return y.a.createElement(Es, r()({ errorDialog: w, subtask: e.topics_selector, subtaskInputs: f }, C))
                if (e.notifications_permission_prompt)
                  return y.a.createElement(ei, r()({ subtask: e.notifications_permission_prompt, subtaskInputs: f }, C))
                if (e.open_home_timeline)
                  return (
                    'signup' === s && i._sendGaOnboardingEvent('complete-NUX'),
                    y.a.createElement(Je, {
                      navigationLink: e.open_home_timeline.next_link,
                      onNavigate: i._handleNavigate,
                      subtaskAction: i._onNoopInvisibleSubtask,
                      subtaskId: g,
                    })
                  )
                if (e.open_link)
                  return d === g
                    ? null
                    : y.a.createElement(ni, {
                        flowName: s,
                        onNavigate: i._handleNavigate,
                        subtask: e.open_link,
                        subtaskId: g,
                      })
                if (e.upload_media)
                  return y.a.createElement(Bs, {
                    flowToken: l,
                    onNavigate: i._handleNavigate,
                    subtask: e.upload_media,
                    subtaskId: g,
                  })
                if (e.user_recommendations_list)
                  return y.a.createElement(
                    vl,
                    r()({ errorDialog: w, subtask: e.user_recommendations_list, subtaskInputs: f }, C),
                  )
                if (e.user_recommendations_urt)
                  return y.a.createElement(
                    Xs,
                    r()({ errorDialog: w, flowToken: l, subtask: e.user_recommendations_urt, subtaskInputs: f }, C),
                  )
                if (e.update_users)
                  return y.a.createElement(Je, {
                    navigationLink: e.update_users.next_link,
                    onNavigate: i._handleNavigate,
                    subtaskAction: i._handleInvisibleSubtask(g, e.update_users, i._updateUsersAction),
                    subtaskId: g,
                  })
                if (e.enter_password)
                  return y.a.createElement(Pa, r()({ errorDialog: w, subtask: e.enter_password, subtaskInputs: f }, C))
                if (e.settings_list) {
                  var E = e.settings_list
                  return y.a.createElement(me.b.Consumer, null, function (e) {
                    var t = e.isModal
                    return y.a.createElement(
                      oo,
                      r()(
                        { addToast: n, errorDialog: w, isModal: t, removeContacts: p, subtask: E, subtaskInputs: f },
                        C,
                      ),
                    )
                  })
                }
                return e.email_contacts_sync
                  ? y.a.createElement(
                      Jt,
                      r()({ errorDialog: w, location: u, subtask: e.email_contacts_sync, subtaskInputs: f }, C),
                    )
                  : e.select_avatar
                  ? y.a.createElement(Di, r()({ errorDialog: w, subtask: e.select_avatar, subtaskInputs: f }, C))
                  : e.select_banner
                  ? y.a.createElement(Wi, r()({ errorDialog: w, subtask: e.select_banner, subtaskInputs: f }, C))
                  : e.security_key
                  ? y.a.createElement(gi, r()({ errorDialog: w, subtask: e.security_key, subtaskInputs: f }, C))
                  : e.enter_date
                  ? y.a.createElement(bn, r()({ errorDialog: w, subtask: e.enter_date, subtaskInputs: f }, C))
                  : e.enter_text
                  ? y.a.createElement(Ya, r()({ errorDialog: w, subtask: e.enter_text, subtaskInputs: f }, C))
                  : e.email_verification
                  ? y.a.createElement(
                      pn,
                      r()(
                        {
                          errorDialog: w,
                          flowName: s,
                          submitFailed: m,
                          subtask: e.email_verification,
                          subtaskInputs: f,
                        },
                        C,
                      ),
                    )
                  : e.enter_username
                  ? y.a.createElement(ir, r()({ errorDialog: w, subtask: e.enter_username, subtaskInputs: f }, C))
                  : e.enter_email
                  ? y.a.createElement(va, r()({ errorDialog: w, subtask: e.enter_email, subtaskInputs: f }, C))
                  : e.enter_phone
                  ? y.a.createElement(Va, r()({ errorDialog: w, subtask: e.enter_phone, subtaskInputs: f }, C))
                  : e.choice_selection
                  ? y.a.createElement(ut, r()({ key: g, subtask: e.choice_selection, subtaskInputs: f }, C))
                  : e.contacts_live_sync_permission_prompt
                  ? y.a.createElement(Mt, r()({ subtask: e.contacts_live_sync_permission_prompt, subtaskInputs: f }, C))
                  : e.wait_spinner
                  ? y.a.createElement(bl, r()({ pollInteractivePath: a, subtask: e.wait_spinner, subtaskInputs: f }, C))
                  : e.check_logged_in_account
                  ? y.a.createElement(
                      et,
                      r()({ onNavigate: i._handleNavigate, subtask: e.check_logged_in_account, subtaskId: g }, C),
                    )
                  : e.tweet_selection_urt
                  ? y.a.createElement(Fs, r()({ errorDialog: w, subtask: e.tweet_selection_urt, subtaskInputs: f }, C))
                  : i._renderDefault()
              }),
              b()(p()(i), '_getBackNavigation', function (e) {
                var t = e.subtask_back_navigation,
                  n = void 0 === t ? k.y.Allow : t
                return n === k.y.CancelFlow
                  ? function () {
                      return i._handleAbortFlow()
                    }
                  : i.currentPreviousNavigableSubtaskId && n === k.y.Allow
                  ? i._navigateToPreviousSubtask
                  : void 0
              }),
              b()(p()(i), '_scribeSubtaskView', function () {
                var e = i.props,
                  t = e.currentSubtask,
                  n = e.flowToken,
                  a = e.scribeAction
                t &&
                  t.subtask_id &&
                  !Object(S.l)(t) &&
                  a(o()(o()({}, yl), {}, { element: 'view', action: 'impression' }), {
                    items: [{ token: n, name: t.subtask_id }],
                  })
              }),
              b()(p()(i), '_handleCallbacks', function (e, t) {
                var n = i.props,
                  a = n.callOnboardingPath,
                  r = n.scribeAction
                e.forEach(function (e) {
                  e.trigger === t &&
                    (e.scribe_config && r(e.scribe_config), e.endpoint && a(e.endpoint, { timestampMs: Date.now() }))
                })
              }),
              b()(p()(i), '_openAccountAction', function (e) {
                return function () {
                  var t = i.context.loggedInUserId,
                    n = i.props,
                    a = n.returnPath,
                    r = n.scribeAction,
                    o = n.verifyCredentials,
                    s = e.attribution_event,
                    l = e.user.id_str,
                    c = Object(ai.b)(i.context.featureSwitches) || {},
                    u = c.encryptedReferer,
                    d = c.encryptedReferralDetails
                  return (
                    qi.a.flushHTMLCache(),
                    t && l !== t
                      ? (qt.b.navigateTo(a || '/home'), new Promise(function () {}))
                      : o().then(function () {
                          i._maybeScribeAppInstallBanner(),
                            'signup' === s &&
                              (i._sendGaOnboardingEvent('account-create'),
                              r({ page: 'signup', action: 'success' }, { referer: u, external_referer: d }))
                        })
                  )
                }
              }),
              b()(p()(i), '_updateUsersAction', function (e, t) {
                var n = i.props,
                  a = n.createLocalApiErrorHandler,
                  r = n.fetchUsers,
                  o = null == t ? void 0 : t.users
                o &&
                  o.length &&
                  r(
                    o.map(function (e) {
                      return e.id_str
                    }),
                  ).catch(a({ showToast: !0 }))
              }),
              b()(p()(i), '_maybeScribeAppInstallBanner', function () {
                var e = i.props.scribeAction
                Ne.a.hasPromptWaiting() && e({ page: 'signup', component: 'install_banner', action: 'waiting' })
              }),
              (i.state = { alertFailureMessage: '' }),
              i
            )
          }
          return (
            u()(n, [
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
                  ;(0, e.scribePageImpression)(yl), t(yl), (this._unblockHistory = n.block(this._handleBackAttempt))
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
                    n === Ye.a.FAILED || t || (n = Ye.a.LOADING),
                    y.a.createElement(
                      O.a,
                      { style: El.root },
                      y.a.createElement(Qe.a, {
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
        })(y.a.Component)
      b()(Cl, 'contextType', Ze.a), b()(Cl, 'defaultProps', { inputFlowData: {} })
      var El = F.a.create(function (e) {
        return { root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 } }
      })
      t.a = Object(fr.a)(yl)(Ot(Cl))
    },
    gdQ4: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return L
      })
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        s = n('1Pcy'),
        l = n.n(s),
        c = n('5Yy7'),
        u = n.n(c),
        d = n('2VqO'),
        p = n.n(d),
        h = n('KEM+'),
        m = n.n(h),
        f = (n('2G9S'), n('ERkP')),
        v = n.n(f),
        _ = n('tRj+'),
        b = n('3XMw'),
        g = n.n(b),
        y = n('oQhu'),
        k = n('MWbm'),
        w = n('htQn'),
        C = n('5mJL'),
        E = n('jhWN'),
        I = n('/yvb'),
        x = n('t62R'),
        S = n('rHpw'),
        T = g.a.e3a24e4b,
        P = g.a.i569ff3e,
        L = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              m()(
                l()(e),
                '_getMemoizedBehavioralEventContext',
                Object(y.a)(function (e) {
                  return { viewType: e }
                }),
              ),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props.onImpression
                  e && e()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.avatarUrl,
                    n = e.onClick,
                    a = e.style,
                    r = e.to,
                    i = e.userName,
                    o = e.withButton,
                    s = e.withConversationLine,
                    l = t && i,
                    c = o ? 'add_tweet' : 'see_more',
                    u = this._getMemoizedBehavioralEventContext(c)
                  return v.a.createElement(
                    _.a,
                    { behavioralEventContext: u },
                    v.a.createElement(
                      w.a,
                      { link: r, onClick: n, style: [A.root, a] },
                      v.a.createElement(
                        C.a,
                        {
                          avatarCell: l
                            ? v.a.createElement(
                                k.a,
                                { style: [A.avatarColumn, !s && A.avatarColumnWithoutLine] },
                                s ? v.a.createElement(k.a, { style: A.conversationLine }) : null,
                                v.a.createElement(E.a, { size: 'large', uri: t }),
                              )
                            : null,
                          avatarCellStyle: A.conversationConnector,
                          cellStyle: o ? A.buttonContainer : l ? A.labelWithAvatar : A.label,
                        },
                        o
                          ? v.a.createElement(
                              I.a,
                              { accessibilityRole: 'none', size: 'xSmall', style: A.button, type: 'brandOutlined' },
                              T,
                            )
                          : v.a.createElement(x.b, { color: 'link', style: A.enlargeTouchTarget }, P),
                      ),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(v.a.PureComponent)
      m()(L, 'defaultProps', { withButton: !1, withConversationLine: !1 })
      var A = S.a.create(function (e) {
        return {
          root: {
            overflow: 'hidden',
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.spaces.space2,
          },
          avatarColumn: { flexDirection: 'column', flexGrow: 0, alignItems: 'center', paddingBottom: e.spaces.space4 },
          avatarColumnWithoutLine: { paddingTop: e.spaces.space12 },
          conversationConnector: { alignItems: 'center', display: 'flex', position: 'relative' },
          label: { flexGrow: 1, paddingVertical: e.spaces.space4 },
          labelWithAvatar: { flexGrow: 1, justifyContent: 'center' },
          conversationLine: {
            backgroundColor: e.colors.gray200,
            flexGrow: 1,
            flexShrink: 1,
            width: e.componentDimensions.conversationLineWidth,
            marginBottom: e.spaces.space4,
          },
          buttonContainer: { paddingVertical: e.spaces.space4, flexDirection: 'row', flexGrow: 1 },
          button: { marginVertical: e.spaces.space4 },
          enlargeTouchTarget: { paddingVertical: e.spaces.space8 },
        }
      })
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
        i = n('ERkP'),
        o = n.n(i),
        s = n('BedV'),
        l = n('yiKp'),
        c = n.n(l),
        u = (n('ho0z'), n('t62R')),
        d = n('IMYl'),
        p = n('py1r'),
        h = n('I4+6'),
        m = n('cm6r'),
        f = n('rHpw'),
        v = n('MWbm'),
        _ = f.a.create(function (e) {
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
        b = c()(
          c()({}, f.a.absoluteFillObject),
          {},
          { cursor: 'inherit', height: '100%', margin: 0, opacity: 0, padding: 0, width: '100%' },
        ),
        g = function (e) {
          var t = e.accessibilityLabel,
            n = e.accessibilityPosInSet,
            a = e.accessibilitySetSize,
            r = e.checked,
            i = e.disabled,
            s = e.helpText,
            l = e.label,
            c = e.name,
            g = e.onChange,
            y = h.a.generate({
              backgroundColor: f.a.theme.colors.transparent,
              color: r ? f.a.theme.colors.primary : f.a.theme.colors.gray700,
              withFocusWithinFocusRing: !0,
            })
          return o.a.createElement(p.a, { disabled: i }, function (e) {
            return o.a.createElement(
              v.a,
              { style: _.root },
              o.a.createElement(
                v.a,
                { accessibilityRole: 'label', style: [_.base, _.border, !i && _.interactive] },
                o.a.createElement(
                  v.a,
                  { style: _.textContainer },
                  o.a.createElement(u.b, { weight: 'bold' }, l),
                  s && o.a.createElement(u.b, { color: 'gray700', size: 'subtext2', style: _.helpText }, s),
                ),
                o.a.createElement(
                  v.a,
                  { style: _.radioContainer },
                  o.a.createElement(
                    m.a,
                    { disabled: i, interactiveStyles: y, interactivityState: e, style: _.radioBackground },
                    o.a.createElement(
                      v.a,
                      {
                        style: [
                          _.circle,
                          r && _.circleActive,
                          i && _.circleDisabled,
                          r && i && _.circleCheckedAndDisabled,
                        ],
                      },
                      r ? o.a.createElement(d.a, { style: _.checkMark }) : null,
                    ),
                  ),
                  o.a.createElement('input', {
                    'aria-label': t,
                    'aria-posinset': n,
                    'aria-setsize': a,
                    checked: r,
                    disabled: i,
                    name: c,
                    onChange: r ? void 0 : g,
                    style: b,
                    type: 'radio',
                  }),
                ),
              ),
            )
          })
        }
      t.a = function (e) {
        return o.a.createElement(
          s.a,
          r()({}, e, {
            renderSelector: function (e) {
              return o.a.createElement(g, r()({}, e, { key: e.value }))
            },
          }),
        )
      }
    },
    iKTg: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        s = n('Lsrn'),
        l = n('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
    jtO7: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        i = n('m3Bd'),
        o = n.n(i),
        s = n('ERkP'),
        l = n.n(s),
        c = n('t62R'),
        u = n('I4+6'),
        d = n('cm6r'),
        p = n('rHpw'),
        h = n('MWbm'),
        m = ['align', 'color', 'label'],
        f = p.a.create(function (e) {
          return {
            container: { backgroundColor: e.colors.cellBackground },
            root: {
              justifyContent: 'center',
              minHeight: e.spaces.space48,
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.spaces.space16,
            },
          }
        })
      t.a = function (e) {
        var t = e.align,
          n = void 0 === t ? 'center' : t,
          a = e.color,
          i = e.label,
          s = o()(e, m),
          v = u.a.generate({
            backgroundColor: p.a.theme.colors.transparent,
            color: p.a.theme.colors[a],
            insetFocusRing: !0,
          })
        return l.a.createElement(
          h.a,
          { style: f.container },
          l.a.createElement(
            d.a,
            r()({}, s, { interactiveStyles: v, style: f.root }),
            l.a.createElement(c.b, { align: n, color: a }, i),
          ),
        )
      }
    },
    mCZD: function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        s = n('1Pcy'),
        l = n.n(s),
        c = n('5Yy7'),
        u = n.n(c),
        d = n('2VqO'),
        p = n.n(d),
        h = n('KEM+'),
        m = n.n(h),
        f = (n('2G9S'), n('ERkP')),
        v = n.n(f),
        _ = n('VAZu'),
        b = n('3XMw'),
        g = n.n(b),
        y = n('lUZE'),
        k = n('aITJ'),
        w = n('MWbm'),
        C = n('yw4N'),
        E = n('RhWx'),
        I = n.n(E),
        x = n('ddV6'),
        S = n.n(x),
        T = (n('ssJ/'), n('rHpw')),
        P = 'controlView',
        L = function (e) {
          var t = e.children,
            n = e.control,
            a = e.onViewportSet,
            r = v.a.useRef(null),
            i = v.a.useState(null),
            o = S()(i, 2),
            s = o[0],
            l = o[1]
          A(function () {
            var e,
              t = window.visualViewport
            ;((null === (e = document.documentElement) || void 0 === e ? void 0 : e.clientHeight) ||
              window.innerHeight) -
              t.height >
            100
              ? null != r.current && t.height - t.offsetTop < r.current
                ? l(null)
                : l(t.height + t.offsetTop - (r.current || 75))
              : l(null)
          })
          var c = [O.fixed].concat(I()(k.b.isIOS() && s ? [O.visualViewport, { top: s }] : []))
          return v.a.createElement(
            v.a.Fragment,
            null,
            v.a.createElement(C.a, { onViewportSet: a, style: O.flexViewport }, t),
            v.a.createElement(
              w.a,
              {
                ref: function (e) {
                  e && !r.current && (r.current = e.getBoundingClientRect().height)
                },
                style: c,
                testID: P,
              },
              n,
            ),
            v.a.createElement(w.a, { style: O.invisible }, n),
          )
        },
        A = function (e) {
          var t = window.visualViewport
          v.a.useEffect(function () {
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
        O = T.a.create(function (e) {
          return {
            fixed: { backgroundColor: e.colors.navigationBackground, position: 'fixed', bottom: 0, left: 0, right: 0 },
            invisible: { visibility: 'hidden' },
            flexViewport: { flexGrow: 1, flexShrink: 1, flexBasis: '100px', overflow: 'auto' },
            visualViewport: {
              position: 'absolute',
              left: 0,
              right: 0,
              marginTop: '-'.concat(e.componentDimensions.appBarHeight),
            },
          }
        }),
        D = n('w9LO'),
        F = n('mw9i'),
        R = n('JYMr'),
        N = n('7N4s'),
        B = g.a.d2fb334b,
        M = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              m()(l()(e), '_handleViewportSet', function (t) {
                var n = e.props.onViewportSet
                n && n(t)
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    n = e.footer,
                    a = e.header,
                    r = e.hideAppBar,
                    i = e.providePadding,
                    o = void 0 !== i && i,
                    s = e.rightControl,
                    l = e.scrollPrompt,
                    c = this.context.isModal,
                    u = n || s,
                    d = v.a.createElement(v.a.Fragment, null, a, t)
                  return v.a.createElement(
                    D.a,
                    { style: [V.root, c && V.rootModal] },
                    r ? null : this._renderAppBar(),
                    v.a.createElement(
                      F.a,
                      { style: [V.container, c && V.containerModal] },
                      c
                        ? v.a.createElement(
                            v.a.Fragment,
                            null,
                            v.a.createElement(
                              C.a,
                              {
                                onViewportSet: this._handleViewportSet,
                                style: [V.viewport, k.b.isIE() && V.viewportIE],
                              },
                              v.a.createElement(w.a, { style: o && V.contentArea }, d),
                            ),
                            u && v.a.createElement(w.a, { style: V.bottomControl }, u),
                          )
                        : u
                        ? v.a.createElement(
                            L,
                            {
                              control: v.a.createElement(w.a, { style: V.bottomControl }, u),
                              onViewportSet: this._handleViewportSet,
                            },
                            v.a.createElement(w.a, { style: o && V.contentArea }, d),
                          )
                        : o
                        ? v.a.createElement(w.a, { style: V.contentArea }, d)
                        : d,
                      c ? null : l,
                    ),
                    c ? l : null,
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
                    i = e.hideBackButton,
                    o = e.hideLogo,
                    s = e.history,
                    l = e.leftControl,
                    c = e.onBackClick,
                    u = e.progressIndication,
                    d =
                      u || o
                        ? void 0
                        : v.a.createElement(
                            w.a,
                            { style: V.iconContainer },
                            v.a.createElement(y.a, { accessibilityLabel: B, style: V.icon }),
                          ),
                    p = u ? u.text.text : void 0,
                    h = null == u ? void 0 : u.percentage_complete,
                    m = h ? h / 100 : void 0,
                    f = m ? v.a.createElement(R.a, { progress: m }) : void 0
                  return v.a.createElement(_.a, {
                    backButtonType: a,
                    backLocation: r,
                    centeredLogo: d,
                    hideBackButton: i || !c,
                    history: s,
                    leftControl: l,
                    onBackClick: c,
                    position: t,
                    secondaryBar: f,
                    title: p,
                    withBackground: n,
                  })
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      m()(M, 'contextType', N.b)
      var V = T.a.create(function (e) {
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
          contentArea: { marginHorizontal: e.spaces.space32 },
        }
      })
      t.a = M
    },
    nS1w: function (e, t, n) {
      'use strict'
      n.d(t, 'c', function () {
        return f
      }),
        n.d(t, 'd', function () {
          return v
        }),
        n.d(t, 'b', function () {
          return b
        }),
        n.d(t, 'e', function () {
          return g
        })
      var a,
        r = n('KEM+'),
        i = n.n(r),
        o = (n('z84I'), n('+KXO'), n('LW0h'), n('7x/C'), n('wFPu'), n('2G9S'), n('3XMw')),
        s = n.n(o),
        l = n('mtvn'),
        c =
          ((a = {}),
          i()(a, 1, { label: s.a.hac89abf, numDays: 31 }),
          i()(a, 2, { label: s.a.ef30b309, numDays: 28, numDaysLeapYear: 29 }),
          i()(a, 3, { label: s.a.b56920fa, numDays: 31 }),
          i()(a, 4, { label: s.a.b1a0f1ec, numDays: 30 }),
          i()(a, 5, { label: s.a.daf779c8, numDays: 31 }),
          i()(a, 6, { label: s.a.c6ad074d, numDays: 30 }),
          i()(a, 7, { label: s.a.f1db106b, numDays: 31 }),
          i()(a, 8, { label: s.a.i4e80b7a, numDays: 31 }),
          i()(a, 9, { label: s.a.efa6cc1d, numDays: 30 }),
          i()(a, 10, { label: s.a.f40a0cbe, numDays: 31 }),
          i()(a, 11, { label: s.a.ac74a31c, numDays: 30 }),
          i()(a, 12, { label: s.a.i6c1e4b2, numDays: 31 }),
          a),
        u = function (e) {
          return { label: ''.concat(e), value: ''.concat(e) }
        },
        d = Object(l.a)(1, 29).map(u),
        p = Object(l.a)(1, 30).map(u),
        h = Object(l.a)(1, 31).map(u),
        m = Object(l.a)(1, 32).map(u),
        f = function () {
          return Object.keys(c).map(function (e) {
            return { label: c[e].label, value: e }
          })
        },
        v = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            t = arguments.length > 1 ? arguments[1] : void 0,
            n = arguments.length > 2 ? arguments[2] : void 0,
            a = arguments.length > 3 ? arguments[3] : void 0,
            r = t || new Date(Date.now()).getFullYear()
          return Object(l.a)(e, r + 1)
            .reverse()
            .filter(function (e) {
              return 2 === a && 29 === n ? _(e) : e
            })
            .map(u)
        },
        _ = function (e) {
          return 1 === new Date(e, 1, 29).getMonth()
        },
        b = function (e, t) {
          if (!e) return m
          switch (2 === e && (!t || (t && _(t))) ? c[e].numDaysLeapYear : c[e].numDays) {
            case 28:
              return d
            case 29:
              return p
            case 30:
              return h
            case 31:
            default:
              return m
          }
        },
        g = function (e, t, n) {
          if ('number' == typeof e && 'number' == typeof t && 'number' == typeof n) {
            var a = t < 10 ? '0'.concat(t) : ''.concat(t),
              r = e < 10 ? '0'.concat(e) : ''.concat(e)
            return ''.concat(n, '-').concat(a, '-').concat(r)
          }
          return ''
        }
      t.a = { getFormattedDateValue: g }
    },
    'p+r5': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return H
      })
      n('yiKp')
      var a = n('97Jx'),
        r = n.n(a),
        i = n('m3Bd'),
        o = n.n(i),
        s = n('VrFO'),
        l = n.n(s),
        c = n('Y9Ll'),
        u = n.n(c),
        d = n('1Pcy'),
        p = n.n(d),
        h = n('5Yy7'),
        m = n.n(h),
        f = n('2VqO'),
        v = n.n(f),
        _ = n('KEM+'),
        b = n.n(_),
        g = (n('2G9S'), n('ERkP')),
        y = n.n(g),
        k = n('38/B'),
        w = n('t62R'),
        C = n('/yvb'),
        E = n('piX5'),
        I = n('3XMw'),
        x = n.n(I),
        S = n('tI3i'),
        T = n.n(S),
        P = n('oQhu'),
        L = n('rHpw'),
        A = n('aITJ'),
        O = n('MWbm'),
        D = n('n5fo'),
        F = n('5emT'),
        R = n('Oib4'),
        N = n('WtWS'),
        B = n('ioan'),
        M = [
          'Icon',
          'accessibilityLabel',
          'calculateLength',
          'editable',
          'errorText',
          'helperText',
          'invalid',
          'label',
          'maxLength',
          'onBlur',
          'onChange',
          'onFocus',
          'onKeyDown',
          'onKeyPress',
          'onKeyUp',
          'onSubmitEditing',
          'showPasswordVisibilityIcon',
          'showValidationIcon',
          'style',
          'type',
          'validLength',
        ],
        V = function (e) {
          return e.length
        },
        U = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : V
          return t(e)
        },
        j = x.a.de540c32,
        z = x.a.b4abfdb3,
        H = (function (e) {
          m()(n, e)
          var t = v()(n)
          function n(e) {
            var a
            l()(this, n),
              (a = t.call(this, e)),
              b()(p()(a), '_blurOnBackspaceKeyUpForKaiOS', !1),
              b()(p()(a), '_isLabelLarge', function () {
                var e = a.state,
                  t = e.actualCount,
                  n = e.isFocused
                return !t && !n
              }),
              b()(
                p()(a),
                '_getTextInputStyle',
                Object(P.a)(function (e) {
                  return [W.root, !e && W.disabled]
                }),
              ),
              b()(p()(a), '_getTextInputType', function () {
                var e = a.props,
                  t = e.showPasswordVisibilityIcon,
                  n = e.type,
                  r = a.state.isPasswordRevealed
                return 'password' === n && t ? (r ? 'text' : 'password') : n
              }),
              b()(p()(a), '_calculateLength', function (e) {
                return U(e, a.props.calculateLength)
              }),
              b()(p()(a), '_shouldRenderDisplayCount', function () {
                var e = a.state.isFocused,
                  t = a._isFormInvalid()
                return Boolean((e || t) && a._getMaxDisplayCount())
              }),
              b()(p()(a), '_isInvalidNumber', function () {
                var e,
                  t,
                  n,
                  r,
                  i,
                  o = a.props.type,
                  s =
                    null === (e = a._textInput) || void 0 === e || null === (t = e.textInputNode) || void 0 === t
                      ? void 0
                      : t.value,
                  l =
                    null === (n = a._textInput) ||
                    void 0 === n ||
                    null === (r = n.textInputNode) ||
                    void 0 === r ||
                    null === (i = r.validity) ||
                    void 0 === i
                      ? void 0
                      : i.badInput
                return 'number' === o && '' === s && !0 === l
              }),
              b()(p()(a), '_getActualCount', function (e) {
                var t = e.length
                return a._isInvalidNumber() && (t = 1), t
              }),
              b()(p()(a), '_handleBlur', function (e) {
                var t = a.props.onBlur,
                  n = e.currentTarget.value,
                  r = a._calculateLength(n),
                  i = a._getActualCount(n)
                a.setState({ isFocused: !1, displayCount: r, actualCount: i }), t && t(e)
              }),
              b()(p()(a), '_handleChange', function (e) {
                var t = a.props.onChange,
                  n = a.state.previousValue,
                  r = e.currentTarget.value,
                  i = a._calculateLength(r),
                  o = a._getActualCount(r),
                  s = a._getAdjustedMaxLength()
                void 0 !== s && r.length > s && n.length < r.length
                  ? (e.currentTarget.value = n)
                  : (a.setState({
                      isFocused: !0,
                      displayCount: i,
                      actualCount: o,
                      previousValue: e.currentTarget.value,
                    }),
                    t && t(e))
              }),
              b()(p()(a), '_handleFocus', function () {
                var e = a.props.onFocus
                a.setState({ isFocused: !0 }), e && e()
              }),
              b()(p()(a), '_handleKeyPress', function (e) {
                var t = a.props,
                  n = t.multiline,
                  r = t.onKeyPress,
                  i = t.onSubmitEditing
                r && r(e),
                  e.isDefaultPrevented() || 'Enter' !== e.key || e.shiftKey || n || !i || (e.preventDefault(), i(e))
              }),
              b()(p()(a), '_handleKeyDown', function (e) {
                var t = a.props.onKeyDown,
                  n = 0 === a.state.displayCount
                A.b.isKaiOS() && 'Backspace' === e.key && n ? (a._blurOnBackspaceKeyUpForKaiOS = n) : t && t(e)
              }),
              b()(p()(a), '_handleKeyUp', function (e) {
                var t = a.props.onKeyUp
                A.b.isKaiOS() &&
                  'Backspace' === e.key &&
                  a._blurOnBackspaceKeyUpForKaiOS &&
                  (e.preventDefault(), a.blur()),
                  t && t(e)
              }),
              b()(p()(a), '_handlePasswordVisibilityClick', function (e) {
                a.setState(function (e) {
                  return { isPasswordRevealed: !e.isPasswordRevealed }
                })
              }),
              b()(p()(a), '_setTextInputRef', function (e) {
                a._textInput = e
              }),
              b()(p()(a), '_checkComponentPropsUsageCorrectness', function (e) {
                var t = e.defaultValue,
                  n = e.maxLength,
                  a = e.onChange,
                  r = e.validLength,
                  i = !!a,
                  o = 'string' == typeof e.value,
                  s = 'string' == typeof t
                T()(
                  !(!s && o && !i),
                  'A controlled component, a component with a value prop, must have an onChange handler. The value prop cannot be undefined.',
                ),
                  T()(!(n && r && r > n), 'Max length should be equal or greater than valid length.'),
                  T()(
                    !((void 0 !== n && n <= 0) || (void 0 !== r && r <= 0)),
                    'Set editable to false instead of limiting the valid character count to 0.',
                  )
              }),
              b()(p()(a), '_exceedsValidLength', function (e) {
                var t = a._getMaxDisplayCount()
                return !!t && e > t
              }),
              b()(p()(a), '_getMaxDisplayCount', function () {
                return a.props.validLength || a.props.maxLength
              }),
              b()(p()(a), '_getAdjustedMaxLength', function () {
                var e = a.props.maxLength,
                  t = a.getValue(),
                  n = a._calculateLength(t)
                return e ? e + t.length - n : void 0
              }),
              a._checkComponentPropsUsageCorrectness(e)
            var r = e.defaultValue,
              i = e.value || r || ''
            return (
              (a.state = {
                displayCount: a._calculateLength(i),
                actualCount: V(i),
                isFocused: !1,
                isPasswordRevealed: !1,
                previousValue: i,
              }),
              a
            )
          }
          return (
            u()(
              n,
              [
                {
                  key: 'componentDidUpdate',
                  value: function (e) {
                    var t = this.props,
                      n = t.maxLength,
                      a = t.onChange,
                      r = t.validLength,
                      i = t.value,
                      o = e.maxLength,
                      s = e.onChange,
                      l = e.validLength,
                      c = e.value
                    ;(l === r && n === o && !!a === !!s && ('string' == typeof i) === ('string' == typeof c)) ||
                      this._checkComponentPropsUsageCorrectness(this.props)
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var e = this.props,
                      t = e.accessibilityLabel,
                      n = e.editable,
                      a = e.errorText,
                      r = e.helperText,
                      i = e.style,
                      o = this.state.isFocused,
                      s = this._isFormInvalid()
                    return y.a.createElement(
                      O.a,
                      { style: [G.root, i] },
                      y.a.createElement(
                        O.a,
                        {
                          accessibilityLabel: t,
                          accessibilityRole: 'label',
                          style: [
                            E.a.border,
                            G.textInputFormStyle,
                            s && E.a.invalidBorderColor,
                            o && s && E.a.focusedBorderInvalid,
                            o && !s && E.a.focusedBorderValid,
                            !n && E.a.disabled,
                          ],
                        },
                        y.a.createElement(
                          O.a,
                          { style: G.textInputFormWrapper },
                          y.a.createElement(
                            O.a,
                            { style: G.textInputHeader },
                            this._renderLabel(),
                            this._shouldRenderDisplayCount() ? this._renderDisplayCount() : null,
                          ),
                          this._renderTextInput(),
                        ),
                      ),
                      y.a.createElement(
                        O.a,
                        { style: [G.sidePadding, G.underTextInputForm] },
                        y.a.createElement(
                          O.a,
                          { style: G.subtextWrapper },
                          r ? this._renderHelperText() : null,
                          s && a ? this._renderErrorText() : null,
                        ),
                      ),
                    )
                  },
                },
                {
                  key: '_renderLabel',
                  value: function () {
                    var e = this.props.label,
                      t = this.state.isFocused ? 'primary' : 'gray700',
                      n = this._isFormInvalid() ? 'red500' : t,
                      a = this._isLabelLarge()
                    return y.a.createElement(
                      w.b,
                      {
                        color: a ? 'gray700' : n,
                        numberOfLines: 1,
                        size: a ? 'headline1' : 'subtext2',
                        style: [
                          G.textInputHeaderItem,
                          a && G.placeholderText,
                          !k.a.reducedMotionEnabled && G.transition,
                        ],
                      },
                      e,
                    )
                  },
                },
                {
                  key: '_renderTextInput',
                  value: function () {
                    var e = this.props,
                      t = e.Icon,
                      n = (e.accessibilityLabel, e.calculateLength, e.editable),
                      a =
                        (e.errorText,
                        e.helperText,
                        e.invalid,
                        e.label,
                        e.maxLength,
                        e.onBlur,
                        e.onChange,
                        e.onFocus,
                        e.onKeyDown,
                        e.onKeyPress,
                        e.onKeyUp,
                        e.onSubmitEditing,
                        e.showPasswordVisibilityIcon,
                        e.showValidationIcon),
                      i = (e.style, e.type, e.validLength, o()(e, M))
                    return y.a.createElement(
                      O.a,
                      { style: W.container },
                      t && !this._isLabelLarge() ? this._renderIcon() : null,
                      y.a.createElement(
                        w.b,
                        { size: 'headline1', style: W.wrapper },
                        y.a.createElement(
                          B.a,
                          r()({}, i, {
                            editable: n,
                            maxLength: this._getAdjustedMaxLength(),
                            onBlur: this._handleBlur,
                            onChange: this._handleChange,
                            onFocus: this._handleFocus,
                            onKeyDown: this._handleKeyDown,
                            onKeyPress: this._handleKeyPress,
                            onKeyUp: this._handleKeyUp,
                            ref: this._setTextInputRef,
                            style: this._getTextInputStyle(n),
                            type: this._getTextInputType(),
                          }),
                        ),
                      ),
                      a && !this._isLabelLarge() ? this._renderValidationIcon() : null,
                      this._renderPasswordVisibilityIcon(),
                    )
                  },
                },
                {
                  key: '_renderPasswordVisibilityIcon',
                  value: function () {
                    var e = this.props,
                      t = e.showPasswordVisibilityIcon,
                      n = e.type,
                      a = this.state.isPasswordRevealed
                    return 'password' === n && t
                      ? y.a.createElement(
                          O.a,
                          { style: G.passwordVisibilityIconContainer },
                          y.a.createElement(C.a, {
                            accessibilityLabel: a ? z : j,
                            focusable: !0,
                            hoverLabel: { label: a ? z : j },
                            icon: a ? y.a.createElement(D.a, null) : y.a.createElement(F.a, null),
                            onPress: this._handlePasswordVisibilityClick,
                            size: 'smallCompact',
                            type: 'primaryText',
                          }),
                        )
                      : null
                  },
                },
                {
                  key: '_renderHelperText',
                  value: function () {
                    return y.a.createElement(
                      O.a,
                      { accessibilityLiveRegion: 'polite' },
                      y.a.createElement(
                        w.b,
                        { color: 'gray700', size: 'subtext2', style: G.subtext },
                        this.props.helperText,
                      ),
                    )
                  },
                },
                {
                  key: '_renderErrorText',
                  value: function () {
                    return y.a.createElement(
                      O.a,
                      { accessibilityLiveRegion: 'assertive' },
                      y.a.createElement(
                        w.b,
                        { color: 'red500', size: 'subtext2', style: G.subtext },
                        this.props.errorText,
                      ),
                    )
                  },
                },
                {
                  key: '_renderDisplayCount',
                  value: function () {
                    var e = this.state.displayCount,
                      t = this._getMaxDisplayCount(),
                      n = this._exceedsValidLength(e),
                      a = t && x.a.ia24dc8c(t),
                      r = x.a.ia24dc8c(e)
                    return y.a.createElement(
                      O.a,
                      { accessibilityLiveRegion: 'polite', style: [G.textInputHeaderItem, G.displayCount] },
                      y.a.createElement(
                        w.b,
                        { color: n ? 'red500' : 'gray700', size: 'subtext2' },
                        a ? ''.concat(r, ' / ').concat(a) : '',
                      ),
                    )
                  },
                },
                {
                  key: '_renderIcon',
                  value: function () {
                    var e = this.props.Icon,
                      t = this.state.isFocused,
                      n = [G.icon, t && G.focusedIcon]
                    return e && y.a.createElement(e, { style: n })
                  },
                },
                {
                  key: '_renderValidationIcon',
                  value: function () {
                    return this._isFormInvalid()
                      ? y.a.createElement(R.a, { style: [G.validationIcon, E.a.invalidColor] })
                      : y.a.createElement(N.a, { style: [G.validationIcon, E.a.validColor] })
                  },
                },
                {
                  key: '_isFormInvalid',
                  value: function () {
                    var e = this.state.displayCount
                    return !!this.props.invalid || this._exceedsValidLength(e) || this._isInvalidNumber()
                  },
                },
                {
                  key: 'blur',
                  value: function () {
                    this._textInput && this._textInput.blur()
                  },
                },
                {
                  key: 'getValue',
                  value: function () {
                    return (this._textInput && this._textInput.getValue()) || ''
                  },
                },
                {
                  key: 'focus',
                  value: function () {
                    this._textInput && this._textInput.focus()
                  },
                },
                {
                  key: 'isValidLength',
                  value: function () {
                    var e = this.getValue(),
                      t = this._calculateLength(e)
                    return !this._exceedsValidLength(t)
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromProps',
                  value: function (e, t) {
                    var n = e.calculateLength,
                      a = e.value,
                      r = 'string' == typeof a ? U(a, n) : 0
                    return 'string' == typeof a && r !== t.displayCount
                      ? { displayCount: r, actualCount: a.length }
                      : null
                  },
                },
              ],
            ),
            n
          )
        })(y.a.Component)
      b()(H, 'defaultProps', { autoComplete: 'on', autoCorrect: !0, autoFocus: !1, editable: !0, invalid: !1 }),
        (H.propTypes = {})
      var W = L.a.create(function (e) {
          return {
            container: {
              flexDirection: 'row',
              flexGrow: 1,
              flexShrink: 1,
              overflow: 'hidden',
              paddingBottom: e.spaces.space8,
              paddingHorizontal: e.spaces.space8,
              paddingTop: e.spaces.space12,
              marginTop: e.spaces.space16,
            },
            root: {
              backgroundColor: 'transparent',
              borderRadius: e.borderRadii.none,
              borderWidth: e.borderWidths.none,
              boxSizing: 'border-box',
              color: 'inherit',
              fontFamily: 'inherit',
              fontSize: 'inherit',
              textAlign: 'inherit',
              outlineStyle: 'none',
              padding: 0,
            },
            wrapper: { alignItems: 'center', display: 'flex', fontSize: e.fontSizes.headline2, width: '100%' },
            disabled: { color: e.colors.gray700 },
          }
        }),
        G = L.a.create(function (e) {
          return {
            root: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            textInputFormStyle: { flexDirection: 'row' },
            textInputFormWrapper: { flexGrow: 1, flexShrink: 1 },
            textInputHeader: {
              flexDirection: 'row',
              justifyContent: 'space-between',
              position: 'absolute',
              height: '100%',
              width: '100%',
            },
            textInputHeaderItem: { paddingTop: e.spaces.space8, paddingHorizontal: e.spaces.space8, fontSize: 'small' },
            placeholderText: { paddingTop: e.spaces.space16, fontSize: e.fontSizes.headline2, userSelect: 'none' },
            displayCount: { flexGrow: 1, alignItems: 'flex-end' },
            sidePadding: { paddingHorizontal: e.spaces.space8 },
            underTextInputForm: { flexDirection: 'row' },
            subtextWrapper: {
              flexDirection: 'column',
              flex: 1,
              paddingRight: e.spaces.space20,
              paddingTop: e.spaces.space2,
            },
            subtext: { alignSelf: 'flex-start' },
            focusedIcon: { color: e.colors.primary },
            icon: { alignSelf: 'center', color: e.colors.gray700, paddingRight: e.spaces.space4 },
            validationIcon: { alignSelf: 'center', paddingLeft: e.spaces.space4 },
            transition: {
              transition:
                'transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1), font-size 150ms cubic-bezier(0.4, 0, 0.2, 1), padding-top 150ms cubic-bezier(0.4, 0, 0.2, 1)',
            },
            passwordVisibilityIconContainer: { alignSelf: 'center', paddingLeft: e.spaces.space4 },
            passwordVisibilityIcon: { color: e.colors.gray700 },
          }
        })
    },
    pKoL: function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        s = n('1Pcy'),
        l = n.n(s),
        c = n('5Yy7'),
        u = n.n(c),
        d = n('2VqO'),
        p = n.n(d),
        h = n('KEM+'),
        m = n.n(h),
        f = (n('2G9S'), n('ERkP')),
        v = n.n(f),
        _ = n('HPNB'),
        b = n('9HgX'),
        g = n('3XMw'),
        y = n.n(g),
        k = n('LCtV'),
        w = n('eyty'),
        C = (n('lTEL'), n('7x/C'), n('JtPf'), n('87if'), n('kYxP'), n('zb92')),
        E = n('RuTB'),
        I = Object(C.a)({
          loader: function () {
            return Promise.all([n.e(0), n.e(8), n.e(178)])
              .then(n.bind(null, 'EOJ2'))
              .then(function (e) {
                return { default: e.__DANGEROUS_IMPORT_VIDEOPLAYER__ }
              })
          },
          renderPlaceholder: function (e, t) {
            return v.a.createElement(E.a, { hasError: e, onRetry: t })
          },
        }),
        x = n('yiKp'),
        S = n.n(x),
        T = n('m3Bd'),
        P = n.n(T),
        L = (n('z84I'), n('k/Ka')),
        A = n('eXeu'),
        O = n('iOGT'),
        D = ['children', 'dataSaverMode', 'getVideoRef', 'style', 'variants'],
        F = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              m()(l()(e), '_setVideoRef', function (t) {
                var n = e.props.getVideoRef
                n && n(t)
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    n = e.dataSaverMode,
                    a = (e.getVideoRef, e.style),
                    r = e.variants,
                    i = P()(e, D),
                    o = Object(O.b)(r, n ? O.a.MEDIUM : O.a.HIGH) || [],
                    s = Object(A.f)(
                      o.map(function (e) {
                        return { src: e.url, type: e.content_type }
                      }),
                    )
                  return Object(L.a)(
                    'video',
                    S()(
                      S()({}, i),
                      {},
                      {
                        children: [
                          s.map(function (e) {
                            return v.a.createElement('source', { key: e.src, src: e.src, type: e.type })
                          }),
                          t,
                        ],
                        ref: this._setVideoRef,
                        style: a,
                      },
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      m()(F, 'defaultProps', { dataSaverMode: !1, variants: [] })
      var R = n('62wY'),
        N = n('sjK1'),
        B = n('v6aA'),
        M = n('cHvH'),
        V = n('mXq/'),
        U = n('/yvb'),
        j = n('a6qo'),
        z = n('rHpw'),
        H = n('hOZg'),
        W = n('GCOQ'),
        G = n('tuke'),
        q = n('U+bB'),
        K = n('MWbm'),
        Y = n('+/sI'),
        X = y.a.gd80afba,
        Q = y.a.j322caee,
        J = y.a.abd845fd,
        Z = y.a.df1b0707,
        $ = y.a.cd959e5b,
        ee = y.a.e68b09b4,
        te = y.a.add55c97,
        ne = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              m()(l()(e), 'state', { isVideoPaused: !0, playGif: !1 }),
              m()(l()(e), '_handleGifClick', function () {
                e.setState({ playGif: !e.state.playGif })
              }),
              m()(l()(e), '_handleMediaPreviewLayout', function (t) {
                var n = e.props,
                  a = n.mediaItem,
                  r = n.resizeIfNeeded,
                  i = a.mediaFile || a.externalMediaDetails
                if (i) {
                  var o = t.nativeEvent.layout,
                    s = o.height,
                    l = o.width,
                    c = i.height,
                    u = i.width / c
                  Math.abs(u - l / s) > 0.05 &&
                    e._mediaContainer &&
                    ('width' === r
                      ? e._mediaContainer.setNativeProps({ style: { width: s * u } })
                      : 'height' === r && e._mediaContainer.setNativeProps({ style: { height: l / u } }))
                }
              }),
              m()(l()(e), '_handleVideoOnPlay', function (t) {
                e.setState({ isVideoPaused: !1 })
              }),
              m()(l()(e), '_handleVideoOnPause', function (t) {
                e.setState({ isVideoPaused: !0 })
              }),
              m()(l()(e), '_setMediaContainerRef', function (t) {
                e._mediaContainer = t
              }),
              m()(l()(e), '_setVideoRef', function (t) {
                e._video = t
              }),
              m()(l()(e), 'playVideo', function () {
                if (e._video) {
                  var t = e._video.play()
                  void 0 !== t &&
                    t
                      .then(function (t) {
                        e._handleVideoOnPlay()
                      })
                      .catch()
                }
              }),
              m()(l()(e), 'pauseVideo', function () {
                e._video && (e._video.pause(), e._handleVideoOnPause())
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e,
                    t = this,
                    n = this.props,
                    a = n.accessibilityLabel,
                    r = n.accessibilityRole,
                    i = n.enableGif,
                    o = n.mediaItem,
                    s = n.onEdit,
                    l = n.onEditSensitiveWarning,
                    c = n.onRemove,
                    u = n.style,
                    d = n.withAltTextLabel,
                    p = n.withCloseButton,
                    h = n.withEditButton,
                    m = n.withEditIcon,
                    f = n.withEditSensitiveWarningButton,
                    g = this.state.playGif,
                    y = o.externalMediaDetails && o.externalMediaDetails.mediaType === b.a,
                    k = y || (i && o.mediaFile && o.mediaFile.isGif),
                    w = !(null === (e = o.mediaFile) || void 0 === e || !e.isVideo)
                  return v.a.createElement(M.a, null, function (e) {
                    var n = e.windowWidth,
                      i = void 0 !== m ? m : !_.a.isTwoColumnLayout(n)
                    return v.a.createElement(
                      K.a,
                      {
                        accessibilityLabel: a || te,
                        accessibilityRole: r,
                        onLayout: t._handleMediaPreviewLayout,
                        ref: t._setMediaContainerRef,
                        style: [u, ae.cursor, y && ae.gifPlayButton],
                      },
                      t._renderPreview(),
                      y &&
                        !g &&
                        v.a.createElement(V.a, { accessibilityLabel: Z, onPress: t._handleGifClick, size: 'small' }),
                      p
                        ? v.a.createElement(U.a, {
                            accessibilityLabel: $,
                            hoverLabel: { label: ee },
                            icon: v.a.createElement(H.a, null),
                            onPress: c,
                            size: 'small',
                            style: ae.close,
                            type: 'onMediaDominantColorFilled',
                          })
                        : null,
                      k ? v.a.createElement(Y.c, { type: Y.a }) : null,
                      d && !w ? v.a.createElement(j.a, { align: 'left', altLabel: a }) : null,
                      h
                        ? v.a.createElement(
                            K.a,
                            { style: [ae.editMedia, w ? ae.editVideo : ae.editImage] },
                            f
                              ? v.a.createElement(U.a, {
                                  accessibilityLabel: Q,
                                  icon: v.a.createElement(W.a, { style: ae.editSensitiveWarningIcon }),
                                  onPress: l,
                                  size: 'small',
                                  style: ae.editSensitiveWarningButton,
                                  type: 'onMediaDominantColorFilled',
                                })
                              : null,
                            v.a.createElement(
                              U.a,
                              {
                                accessibilityLabel: X,
                                icon: i ? v.a.createElement(G.a, null) : void 0,
                                onPress: s,
                                size: i ? 'xSmall' : 'small',
                                type: 'onMediaDominantColorFilled',
                              },
                              i ? void 0 : J,
                            ),
                          )
                        : null,
                    )
                  })
                },
              },
              {
                key: '_renderPreview',
                value: function () {
                  var e,
                    t = this.props.mediaItem
                  if (t.externalMediaDetails) {
                    var n = t.externalMediaDetails.previewUrl,
                      a = t.externalMediaDetails.stillMediaUrl
                    return this._renderGifPreview(n, a)
                  }
                  return null !== (e = t.mediaFile) && void 0 !== e && e.isVideo
                    ? this._renderVideoPreview(t.mediaFile.type, t.mediaFile.url, t.id, t.mediaFile)
                    : v.a.createElement(K.a, { style: z.a.absoluteFill }, this._renderImagePreview())
                },
              },
              {
                key: '_renderGifPreview',
                value: function (e, t) {
                  var n = { uri: this.state.playGif ? e : t }
                  return v.a.createElement(
                    K.a,
                    { onClick: this._handleGifClick, style: z.a.absoluteFill },
                    v.a.createElement(q.a, { resizeMode: 'cover', source: n, style: ae.video }),
                  )
                },
              },
              {
                key: '_renderImagePreview',
                value: function () {
                  var e = this.props,
                    t = e.borderRadius,
                    n = e.enableGif,
                    a = e.imageResizeMode,
                    r = e.mediaItem,
                    i = e.onClick
                  return v.a.createElement(k.b, {
                    borderRadius: t,
                    enableGif: n,
                    mediaItem: r,
                    onClick: i,
                    resizeMode: a,
                  })
                },
              },
              {
                key: '_renderVideoPreview',
                value: function (e, t, n, a) {
                  var r
                  this._configurableVideoPlayerEnabled = this.context.featureSwitches.isTrue(
                    'responsive_web_composer_configurable_video_player_enabled',
                  )
                  var i = this.props.mediaItem,
                    o = null === (r = i.mediaMetadata) || void 0 === r ? void 0 : r.subtitles
                  if (this._configurableVideoPlayerEnabled && a instanceof N.c) {
                    var s = Object(w.h)(a.fileHandle) ? [{ src: t, type: e }] : [],
                      l = ''.concat(n)
                    return v.a.createElement(I, {
                      mediaFile: a,
                      mediaId: l,
                      subtitles: o,
                      trimData: null == i ? void 0 : i.trimData,
                      variants: s,
                    })
                  }
                  var c,
                    u = Object(w.h)(a.fileHandle) ? [{ content_type: e, url: t }] : [],
                    d =
                      (null == o || null === (c = o.upload) || void 0 === c ? void 0 : c.mediaFile) instanceof R.b
                        ? o.upload.mediaFile.vtt
                        : void 0
                  return v.a.createElement(
                    F,
                    {
                      autoPlay: !1,
                      controls: !0,
                      getVideoRef: this._setVideoRef,
                      loop: !0,
                      muted: !0,
                      onPause: this._handleVideoOnPause,
                      onPlay: this._handleVideoOnPlay,
                      playsInline: !0,
                      poster: a instanceof N.c ? a.thumbnail : '',
                      style: ae.video,
                      variants: u,
                    },
                    o && d
                      ? v.a.createElement('track', {
                          default: !0,
                          kind: 'subtitles',
                          label: o.displayName,
                          src: d,
                          srcLang: o.lang,
                        })
                      : null,
                  )
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      m()(ne, 'contextType', B.a),
        m()(ne, 'defaultProps', {
          enableGif: !0,
          withCloseButton: !0,
          withAltTextLabel: !1,
          withEditButton: !1,
          withEditSensitiveWarningButton: !1,
        })
      var ae = z.a.create(function (e) {
        return {
          close: { position: 'absolute', left: e.spaces.space4, top: e.spaces.space4 },
          cursor: { cursor: 'pointer' },
          editSensitiveWarningIcon: { color: e.colors.primary },
          editMedia: { display: 'flex', flexDirection: 'row', position: 'absolute', right: e.spaces.space4 },
          editImage: { bottom: e.spaces.space4 },
          editVideo: { top: e.spaces.space4 },
          editSensitiveWarningButton: { marginRight: e.spaces.space8 },
          gifPlayButton: { alignItems: 'center', justifyContent: 'center' },
          video: { height: '100%', width: '100%' },
        }
      })
      t.a = ne
    },
    piX5: function (e, t, n) {
      'use strict'
      n('uFXj'), n('2G9S')
      var a = n('rHpw').a.create(function (e) {
        return {
          border: {
            borderRadius: e.borderRadii.small,
            borderWidth: e.borderWidths.small,
            borderColor: e.colors.gray200,
          },
          focusedBorderValid: {
            boxShadow: '0 0 0 '.concat(e.borderWidths.small, ' ').concat(e.colors.primary),
            borderColor: e.colors.primary,
          },
          focusedBorderInvalid: { boxShadow: '0 0 0 '.concat(e.borderWidths.small, ' ').concat(e.colors.red500) },
          invalidBorderColor: { borderColor: e.colors.red500 },
          invalidColor: { color: e.colors.red500 },
          validColor: { color: e.colors.primary },
          disabled: { cursor: 'default', opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 },
        }
      })
      t.a = a
    },
    qbku: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        i = n('yiKp'),
        o = n.n(i),
        s = n('m3Bd'),
        l = n.n(s),
        c = (n('hBvt'), n('ERkP')),
        u = n.n(c),
        d = n('rxPX'),
        p = Object(d.a)().withAnalytics({ element: 'social_proof' }),
        h = n('aTAq'),
        m = n('Nqmc'),
        f = n('x5Pi'),
        v = ['analytics', 'link'],
        _ = p(function (e) {
          var t = u.a.useContext(f.b)
          if (t && e.contextType === t) return null
          var n = e.analytics,
            a = e.link,
            i = l()(e, v),
            s =
              a && !Object(h.a)(a)
                ? o()(
                    o()({}, a),
                    {},
                    {
                      state: o()(
                        o()({}, a.state),
                        {},
                        {
                          referringScribeNamespace: o()(o()({}, n.contextualScribeNamespace), {}, { action: 'click' }),
                        },
                      ),
                    },
                  )
                : a
          return u.a.createElement(
            m.a,
            r()({}, i, {
              link: s,
              onClick: function () {
                var t = e.analytics,
                  n = e.onClick
                t.scribeAction('click'), n && n()
              },
            }),
          )
        })
      t.a = _
    },
    rFBM: function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        s = n('1Pcy'),
        l = n.n(s),
        c = n('5Yy7'),
        u = n.n(c),
        d = n('2VqO'),
        p = n.n(d),
        h = n('KEM+'),
        m = n.n(h),
        f = (n('2G9S'), n('hCOa'), n('87if'), n('ERkP')),
        v = n.n(f),
        _ = n('rHpw'),
        b = n('k/Ka'),
        g = n('MWbm'),
        y = function (e) {
          return Object(b.a)('div', e)
        },
        k = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              m()(l()(e), '_dragEnterCount', 0),
              m()(l()(e), 'state', { active: !1 }),
              m()(l()(e), '_handleDragDrop', function (t) {
                var n = e.props.onFilesAdded
                t.preventDefault(), n(Array.from(t && t.dataTransfer.files)), e._updateDragCount(0)
              }),
              m()(l()(e), '_handleDragEnter', function (t) {
                var n = e.props.onDragEnter
                t.preventDefault(), n && n(), e._updateDragCount(e._dragEnterCount + 1)
              }),
              m()(l()(e), '_handleDragLeave', function (t) {
                t.preventDefault(), e._updateDragCount(e._dragEnterCount - 1)
              }),
              m()(l()(e), '_handleDragOver', function (e) {
                e.preventDefault()
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.allowDragDrop,
                    n = e.children,
                    a = e.style,
                    r = this.state.active,
                    i = t ? w.dragBorderValid : w.dragBorderInvalid
                  return v.a.createElement(
                    y,
                    {
                      onDragEnter: this._handleDragEnter,
                      onDragLeave: this._handleDragLeave,
                      onDragOver: this._handleDragOver,
                      onDrop: this._handleDragDrop,
                      style: [w.root, a, r && i],
                    },
                    v.a.createElement(g.a, { style: w.inner }, 'function' == typeof n ? n(r) : n),
                  )
                },
              },
              {
                key: '_updateDragCount',
                value: function (e) {
                  ;(this._dragEnterCount = e),
                    0 === this._dragEnterCount
                      ? this.setState({ active: !1 })
                      : this._dragEnterCount > 0 && this.setState({ active: !0 })
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      m()(k, 'defaultProps', { allowDragDrop: !0 })
      var w = _.a.create(function (e) {
        return {
          root: { display: 'flex', flexDirection: 'column' },
          dragBorderValid: { borderStyle: 'dashed', borderWidth: e.spaces.space2, borderColor: e.colors.primary },
          dragBorderInvalid: { borderStyle: 'dashed', borderWidth: e.spaces.space2, borderColor: e.colors.magenta500 },
          inner: { flexGrow: 1 },
        }
      })
      t.a = k
    },
    sUoZ: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        s = n('Lsrn'),
        l = n('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M22.18 9.565c-.157-.487-.61-.82-1.126-.82h-5.928l-2.007-5.88c-.164-.476-.612-.8-1.12-.8s-.956.322-1.12.8L8.874 8.743H2.945c-.513 0-.97.332-1.126.82-.158.49.02 1.02.44 1.318l4.735 3.357-2.018 5.908c-.164.484 0 1.02.415 1.324.415.304.97.31 1.39.016L12 17.782l5.22 3.703c.206.146.446.218.686.218.25 0 .497-.08.705-.233.41-.305.577-.84.41-1.324l-2.015-5.906 4.735-3.356c.414-.3.595-.83.44-1.32z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
    't+RT': function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        i = n('aWzz'),
        o = n.n(i)
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
      function l(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return e
      }
      var c = (function (e) {
        var t, n
        function a() {
          var t
          return (
            ((t = e.call(this) || this).handleExpired = t.handleExpired.bind(l(t))),
            (t.handleErrored = t.handleErrored.bind(l(t))),
            (t.handleRecaptchaRef = t.handleRecaptchaRef.bind(l(t))),
            t
          )
        }
        ;(n = e), ((t = a).prototype = Object.create(n.prototype)), (t.prototype.constructor = t), (t.__proto__ = n)
        var i = a.prototype
        return (
          (i.getValue = function () {
            return this.props.grecaptcha && void 0 !== this._widgetId
              ? this.props.grecaptcha.getResponse(this._widgetId)
              : null
          }),
          (i.getWidgetId = function () {
            return this.props.grecaptcha && void 0 !== this._widgetId ? this._widgetId : null
          }),
          (i.execute = function () {
            var e = this.props.grecaptcha
            if (e && void 0 !== this._widgetId) return e.execute(this._widgetId)
            this._executeRequested = !0
          }),
          (i.reset = function () {
            this.props.grecaptcha && void 0 !== this._widgetId && this.props.grecaptcha.reset(this._widgetId)
          }),
          (i.handleExpired = function () {
            this.props.onExpired ? this.props.onExpired() : this.props.onChange && this.props.onChange(null)
          }),
          (i.handleErrored = function () {
            this.props.onErrored && this.props.onErrored()
          }),
          (i.explicitRender = function () {
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
          (i.componentDidMount = function () {
            this.explicitRender()
          }),
          (i.componentDidUpdate = function () {
            this.explicitRender()
          }),
          (i.componentWillUnmount = function () {
            void 0 !== this._widgetId && (this.delayOfCaptchaIframeRemoving(), this.reset())
          }),
          (i.delayOfCaptchaIframeRemoving = function () {
            var e = document.createElement('div')
            for (document.body.appendChild(e), e.style.display = 'none'; this.captcha.firstChild; )
              e.appendChild(this.captcha.firstChild)
            setTimeout(function () {
              document.body.removeChild(e)
            }, 5e3)
          }),
          (i.handleRecaptchaRef = function (e) {
            this.captcha = e
          }),
          (i.render = function () {
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
                    i = Object.keys(e)
                  for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n])
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
      ;(c.displayName = 'ReCAPTCHA'),
        (c.propTypes = {
          sitekey: o.a.string.isRequired,
          onChange: o.a.func,
          grecaptcha: o.a.object,
          theme: o.a.oneOf(['dark', 'light']),
          type: o.a.oneOf(['image', 'audio']),
          tabindex: o.a.number,
          onExpired: o.a.func,
          onErrored: o.a.func,
          size: o.a.oneOf(['compact', 'normal', 'invisible']),
          stoken: o.a.string,
          hl: o.a.string,
          badge: o.a.oneOf(['bottomright', 'bottomleft', 'inline']),
        }),
        (c.defaultProps = {
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
      var h = {},
        m = 0
      function f() {
        return ('undefined' != typeof window && window.recaptchaOptions) || {}
      }
      var v,
        _,
        b = 'onloadcallback',
        g = f(),
        y = ((v = function () {
          var e = f(),
            t = e.lang ? '&hl=' + e.lang : ''
          return (
            'https://' +
            (e.useRecaptchaNet ? 'recaptcha.net' : 'www.google.com') +
            '/recaptcha/api.js?onload=' +
            b +
            '&render=explicit' +
            t
          )
        }),
        (_ = (_ = { callbackName: b, globalName: 'grecaptcha', removeOnUnmount: g.removeOnUnmount || !1 }) || {}),
        function (e) {
          var t = e.displayName || e.name || 'Component',
            n = (function (t) {
              var n, r
              function i(e, n) {
                var a
                return ((a = t.call(this, e, n) || this).state = {}), (a.__scriptURL = ''), a
              }
              ;(r = t),
                ((n = i).prototype = Object.create(r.prototype)),
                (n.prototype.constructor = n),
                (n.__proto__ = r)
              var o = i.prototype
              return (
                (o.asyncScriptLoaderGetScriptLoaderID = function () {
                  return (
                    this.__scriptLoaderID || (this.__scriptLoaderID = 'async-script-loader-' + m++),
                    this.__scriptLoaderID
                  )
                }),
                (o.setupScriptURL = function () {
                  return (this.__scriptURL = 'function' == typeof v ? v() : v), this.__scriptURL
                }),
                (o.asyncScriptLoaderHandleLoad = function (e) {
                  var t = this
                  this.setState(e, function () {
                    return t.props.asyncScriptOnLoad && t.props.asyncScriptOnLoad(t.state)
                  })
                }),
                (o.asyncScriptLoaderTriggerOnScriptLoaded = function () {
                  var e = h[this.__scriptURL]
                  if (!e || !e.loaded) throw new Error('Script is not loaded.')
                  for (var t in e.observers) e.observers[t](e)
                  delete window[_.callbackName]
                }),
                (o.componentDidMount = function () {
                  var e = this,
                    t = this.setupScriptURL(),
                    n = this.asyncScriptLoaderGetScriptLoaderID(),
                    a = _,
                    r = a.globalName,
                    i = a.callbackName,
                    o = a.scriptId
                  if ((r && void 0 !== window[r] && (h[t] = { loaded: !0, observers: {} }), h[t])) {
                    var s = h[t]
                    return s && (s.loaded || s.errored)
                      ? void this.asyncScriptLoaderHandleLoad(s)
                      : void (s.observers[n] = function (t) {
                          return e.asyncScriptLoaderHandleLoad(t)
                        })
                  }
                  var l = {}
                  ;(l[n] = function (t) {
                    return e.asyncScriptLoaderHandleLoad(t)
                  }),
                    (h[t] = { loaded: !1, observers: l })
                  var c = document.createElement('script')
                  ;(c.src = t), (c.async = !0), o && (c.id = o)
                  var u = function (e) {
                    if (h[t]) {
                      var n = h[t].observers
                      for (var a in n) e(n[a]) && delete n[a]
                    }
                  }
                  i &&
                    'undefined' != typeof window &&
                    (window[i] = function () {
                      return e.asyncScriptLoaderTriggerOnScriptLoaded()
                    }),
                    (c.onload = function () {
                      var e = h[t]
                      e &&
                        ((e.loaded = !0),
                        u(function (t) {
                          return !i && (t(e), !0)
                        }))
                    }),
                    (c.onerror = function () {
                      var e = h[t]
                      e &&
                        ((e.errored = !0),
                        u(function (t) {
                          return t(e), !0
                        }))
                    }),
                    document.body.appendChild(c)
                }),
                (o.componentWillUnmount = function () {
                  var e = this.__scriptURL
                  if (!0 === _.removeOnUnmount)
                    for (var t = document.getElementsByTagName('script'), n = 0; n < t.length; n += 1)
                      t[n].src.indexOf(e) > -1 && t[n].parentNode && t[n].parentNode.removeChild(t[n])
                  var a = h[e]
                  a &&
                    (delete a.observers[this.asyncScriptLoaderGetScriptLoaderID()],
                    !0 === _.removeOnUnmount && delete h[e])
                }),
                (o.render = function () {
                  var t = _.globalName,
                    n = this.props,
                    r = (n.asyncScriptOnLoad, n.forwardedRef),
                    i = (function (e, t) {
                      if (null == e) return {}
                      var n,
                        a,
                        r = {},
                        i = Object.keys(e)
                      for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n])
                      return r
                    })(n, ['asyncScriptOnLoad', 'forwardedRef'])
                  return (
                    t && 'undefined' != typeof window && (i[t] = void 0 !== window[t] ? window[t] : void 0),
                    (i.ref = r),
                    Object(a.createElement)(e, i)
                  )
                }),
                i
              )
            })(a.Component),
            r = Object(a.forwardRef)(function (e, t) {
              return Object(a.createElement)(n, p({}, e, { forwardedRef: t }))
            })
          return (
            (r.displayName = 'AsyncScriptLoader(' + t + ')'), (r.propTypes = { asyncScriptOnLoad: o.a.func }), d()(r, e)
          )
        })(c)
      t.a = y
    },
    tuke: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        s = n('Lsrn'),
        l = n('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M21.592 5.576c.877-.967.882-2.298.006-3.174-.877-.877-2.208-.87-3.174.006 0 0-.003 0-.004.002l-.006.006-.005.004s-.002 0-.002.002L8.398 11.27c-1.716-.214-3.424.31-4.534 1.42-3.872 3.874-1.523 9.616-1.422 9.858.1.24.32.41.577.45.037.007.075.01.113.01.218 0 .428-.095.57-.265 1.83-2.15 3.043-2.023 4.328-1.89 1.164.122 2.477.258 3.834-1.282.975-1.106 1.302-2.585.922-4.03l8.792-9.948h.002l.004-.006.006-.006.002-.004zm-1.055-2.113c.305.305.28.74-.06 1.11-.003.003-.004.007-.006.01 0 0-.003 0-.004.003l-5.662 6.406-1.796-1.796 6.406-5.662c.002 0 .002-.003.004-.005.002-.003.006-.004.008-.006.37-.34.807-.365 1.11-.06zm-8.62 10.797L9.74 12.084l2.142-1.894 1.927 1.927-1.894 2.143zm-1.178 4.32c-.848.96-1.488.895-2.552.78-1.27-.13-2.808-.293-4.722 1.463-.415-1.673-.784-4.83 1.457-7.072.807-.805 2.086-1.168 3.377-.983l2.977 2.976c.333 1.03.15 2.057-.538 2.836z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
    ude7: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return c
      })
      n('7x/C'), n('JtPf')
      var a = n('A0bJ'),
        r = n('hJBK'),
        i = n('1auM'),
        o = 1,
        s = 2,
        l = 3,
        c = function (e) {
          if (Object(i.b)(e)) {
            if (e.isGif) {
              var t = e.height,
                n = e.img,
                c = e.orientation,
                u = e.width
              return Object(r.b)(n, u, t, c).then(
                function (e) {
                  return Object(r.a)(e)
                },
                function (e) {
                  throw new a.a('Gif preview could not be generated', l)
                },
              )
            }
            var d = new a.a('The provided image must be a gif', s)
            return Promise.reject(d)
          }
          var p = new a.a('The provided file is not a valid image', o)
          return Promise.reject(p)
        }
    },
    v84o: function (e, t, n) {
      'use strict'
      n('2G9S')
      var a = n('180P'),
        r = n('doI8')
      t.a = function (e) {
        var t = e.timelinePrefix,
          n = void 0 === t ? 'generic-timeline-' : t,
          i = e.urtUrl,
          o = i.url,
          s = i.urtEndpointOptions || {},
          l = s.cacheId,
          c = s.requestParams
        return Object(r.b)({
          timelineId: l || ''.concat(n).concat(Object(a.a)(i)),
          endpointUrl: o,
          endpointParams: c || {},
        })
      }
    },
    vMn4: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        s = n('Lsrn'),
        l = n('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M21 3.25H6c-1.24 0-2.25 1.01-2.25 2.25v.75H3C1.76 6.25.75 7.26.75 8.5v10c0 1.24 1.01 2.25 2.25 2.25h15c1.24 0 2.25-1.01 2.25-2.25v-.75H21c1.24 0 2.25-1.01 2.25-2.25v-10c0-1.24-1.01-2.25-2.25-2.25zM2.25 8.5c0-.413.337-.75.75-.75h1.654C4.37 8.938 3.438 9.87 2.25 10.154V8.5zM3 19.25c-.413 0-.75-.337-.75-.75v-1.654c1.188.283 2.12 1.216 2.404 2.404H3zm15.75-.75c0 .413-.337.75-.75.75h-1.654c.283-1.188 1.216-2.12 2.404-2.404V18.5zm0-3.174c-2.016.323-3.6 1.908-3.924 3.924H6.174c-.323-2.016-1.908-3.6-3.924-3.924v-3.652c2.016-.323 3.6-1.908 3.924-3.924h8.652c.323 2.016 1.908 3.6 3.924 3.924v3.652zm0-5.172c-1.188-.283-2.12-1.216-2.404-2.404H18c.413 0 .75.337.75.75v1.654zm3 5.346c0 .413-.337.75-.75.75h-.75V8.5c0-1.24-1.01-2.25-2.25-2.25H5.25V5.5c0-.413.337-.75.75-.75h15c.413 0 .75.337.75.75v10z',
              }),
              o.a.createElement('path', {
                d: 'M10.5 9.316c-1.878 0-3.406 1.877-3.406 4.184s1.528 4.184 3.406 4.184 3.406-1.877 3.406-4.184-1.528-4.184-3.406-4.184zm0 6.868c-1.033 0-1.906-1.23-1.906-2.684s.873-2.684 1.906-2.684 1.906 1.23 1.906 2.684-.873 2.684-1.906 2.684z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
    wz7L: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        s = n('Lsrn'),
        l = n('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M16.695 13.037c1.185 0 2.51-.132 3.368-1.11.72-.823.952-2.08.715-3.847-.333-2.478-1.86-3.956-4.083-3.956-2.225 0-3.75 1.48-4.084 3.956-.236 1.766-.002 3.023.717 3.846.858.98 2.184 1.11 3.368 1.11zM14.098 8.28c.134-.992.648-2.656 2.598-2.656 1.948 0 2.463 1.664 2.597 2.655.174 1.293.054 2.187-.358 2.657-.367.42-1.036.6-2.238.6s-1.87-.18-2.24-.6c-.412-.47-.533-1.364-.36-2.658zm9.788 11.222c-.763-3.066-3.72-5.208-7.19-5.208-1.765 0-3.392.558-4.67 1.505-1.278-.948-2.905-1.506-4.67-1.506-3.47 0-6.428 2.142-7.19 5.208-.156.625-.025 1.265.356 1.754.37.473.94.744 1.567.744h19.87c.628 0 1.2-.27 1.57-.745.382-.49.512-1.13.356-1.753zm-1.537.83c-.09.11-.22.168-.39.168h-7.413c.078-.32.084-.66 0-.998-.25-1-.75-1.888-1.41-2.65.993-.665 2.223-1.058 3.558-1.058 2.78 0 5.14 1.674 5.735 4.07.044.174.014.344-.08.467zM7.354 20.5H2.09c-.17 0-.3-.057-.388-.168-.096-.123-.126-.294-.083-.47.596-2.395 2.954-4.068 5.735-4.068 2.78 0 5.14 1.674 5.735 4.07.043.174.014.344-.082.467-.088.113-.22.17-.388.17H7.355zm.001-7.463c1.185 0 2.51-.132 3.367-1.11.72-.823.953-2.08.716-3.847-.333-2.478-1.86-3.956-4.083-3.956-2.225 0-3.75 1.48-4.084 3.956-.236 1.766-.002 3.023.717 3.846.858.98 2.184 1.11 3.368 1.11zM4.758 8.28c.134-.992.648-2.656 2.598-2.656 1.948 0 2.463 1.664 2.597 2.655.174 1.293.053 2.187-.358 2.658-.368.42-1.037.6-2.238.6-1.202 0-1.87-.18-2.24-.6-.412-.47-.533-1.365-.36-2.66z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
    yuM6: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'default', function () {
          return m
        })
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        s = n('5Yy7'),
        l = n.n(s),
        c = n('2VqO'),
        u = n.n(c),
        d = (n('2G9S'), n('ERkP')),
        p = n.n(d),
        h = n('6/RC'),
        m = (function (e) {
          l()(n, e)
          var t = u()(n)
          function n() {
            return r()(this, n), t.apply(this, arguments)
          }
          return (
            o()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props.location.query,
                    t = e.code,
                    n = e.error,
                    a = e.scope,
                    r = e.state,
                    i = {
                      callback_url: 'https://'.concat(window.location.hostname).concat(window.location.pathname),
                      code: t,
                      error: n,
                      scope: a,
                      state: r,
                    },
                    o = h.canUseDOM && window.opener
                  o
                    ? (o.postMessage(i, 'https://'.concat(window.location.hostname)), window.close(), o.focus())
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
        })(p.a.Component)
    },
    zu4M: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = n('97Jx'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        s = n('9D1O'),
        l = n('gPQO')
      t.default = function (e) {
        return o.a.createElement(l.a, r()({}, e, { flowName: 'convert_to_professional', ocfModule: s.i }))
      }
    },
  },
])
//# sourceMappingURL=WIPED
