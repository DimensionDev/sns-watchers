;(window.webpackJsonp = window.webpackJsonp || []).push([
  [76, 177],
  {
    '12XZ': function (e, t, a) {
      'use strict'
      a.r(t)
      var n = a('97Jx'),
        r = a.n(n),
        i = a('ERkP'),
        o = a.n(i),
        s = a('9D1O'),
        l = a('gPQO')
      t.default = function (e) {
        return o.a.createElement(l.a, r()({}, e, { ocfModule: s.i }))
      }
    },
    '180P': function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return n
      })
      a('TJCb'), a('7x/C'), a('DZ+c'), a('KOtZ'), a('0zG9'), a('KqXw'), a('Ysgh'), a('tQbP'), a('7xRU')
      var n = function (e) {
          var t = (JSON.stringify(e) || '').split('')
          t.sort()
          var a = t.join('')
          return r(a, 0).toString()
        },
        r = function (e, t) {
          for (var a = 'string' == typeof e ? e : String(e), n = t, r = 0; r < a.length; r++) {
            ;(n = (n << 5) - n + a.charCodeAt(r)), (n &= n)
          }
          return n
        }
    },
    '21U8': function (e, t, a) {
      'use strict'
      var n = a('VrFO'),
        r = a.n(n),
        i = a('Y9Ll'),
        o = a.n(i),
        s = a('1Pcy'),
        l = a.n(s),
        c = a('5Yy7'),
        u = a.n(c),
        d = a('2VqO'),
        p = a.n(d),
        h = a('KEM+'),
        m = a.n(h),
        _ = (a('Rqga'), a('2G9S'), a('ERkP')),
        v = a.n(_),
        f = a('/yvb'),
        b = a('3XMw'),
        g = a.n(b),
        y = a('3rX5'),
        k = a('rHpw'),
        w = a('MWbm'),
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
        I = function (e) {
          var t = e.circle,
            a = e.height,
            n = e.width
          return v.a.createElement(w.a, {
            pointerEvents: 'none',
            style: [C.mask, { width: n, height: a }, t && C.circle],
          })
        },
        E = a('ZvMt'),
        x = a('97Jx'),
        S = a.n(x),
        T = a('m3Bd'),
        P = a.n(T),
        A = a('CHgo'),
        D = a('7ep7'),
        F = ['children', 'onPanEnd', 'onPanMove', 'onPinchMove', 'onWheel'],
        O = (function (e) {
          u()(a, e)
          var t = p()(a)
          function a(e) {
            var n
            return (
              r()(this, a),
              (n = t.call(this, e)),
              m()(l()(n), '_previousTouchDistance', 0),
              m()(l()(n), '_previousPositionX', 0),
              m()(l()(n), '_previousPositionY', 0),
              m()(l()(n), '_centerPosition', { x: 0, y: 0 }),
              m()(l()(n), '_panResponder', {}),
              m()(l()(n), '_setRef', function (e) {
                var t = n.props,
                  a = t.onPanEnd,
                  r = t.onPanMove,
                  i = t.onPinchMove,
                  o = t.onWheel
                if (e) {
                  ;(r || a || i) && (n._removeTouchMoveToScrollListener = Object(A.a)(e, n._preventDefaultEvent, !1)),
                    o && (n._removeScrollToScaleListener = Object(A.b)(e, n._preventDefaultEvent, !1))
                  var s = e.getBoundingClientRect()
                  n._centerPosition = { x: s.width / 2 + s.left, y: s.height / 2 + s.top }
                }
              }),
              m()(l()(n), '_preventDefaultEvent', function (e) {
                e.preventDefault()
              }),
              m()(l()(n), '_handlePanResponderMove', function (e, t) {
                var a,
                  r,
                  i = n.props,
                  o = i.onPanMove,
                  s = i.onPinchMove,
                  l = e.nativeEvent.touches
                if (2 === t.numberActiveTouches) {
                  if (s) {
                    var c =
                        ((a = l[0]),
                        (r = l[1]),
                        Math.sqrt(Math.pow(a.pageY - r.pageY, 2) + Math.pow(a.pageX - r.pageX, 2))),
                      u = (function (e, t) {
                        return {
                          pageX: Math.min(t.pageX, e.pageX) + Math.abs(t.pageX - e.pageX) / 2,
                          pageY: Math.min(t.pageY, e.pageY) + Math.abs(t.pageY - e.pageY) / 2,
                        }
                      })(l[0], l[1]),
                      d = u.pageX,
                      p = u.pageY,
                      h = n._previousPositionX ? d - n._previousPositionX : 0,
                      m = n._previousPositionY ? p - n._previousPositionY : 0,
                      _ = n._previousTouchDistance ? c - n._previousTouchDistance : 0
                    ;(n._previousPositionX = d), (n._previousPositionY = p), (n._previousTouchDistance = c)
                    var v = n._centerPosition
                    s(_, v.x - d, v.y - p, h, m)
                  }
                } else o && o(t.dx, t.dy)
                document.addEventListener('selectstart', n._preventDefaultEvent, !1)
              }),
              m()(l()(n), '_handlePanResponderEnd', function (e, t) {
                n.props.onPanEnd && n.props.onPanEnd(t.dx, t.dy),
                  n.props.onPinchMove && (n._previousTouchDistance = 0),
                  (n._previousPositionX = 0),
                  (n._previousPositionY = 0),
                  n._removeSelectStartListener()
              }),
              m()(l()(n), '_handleWheel', function (e) {
                var t = e.clientX,
                  a = e.clientY,
                  r = e.deltaX,
                  i = e.deltaY,
                  o = n._centerPosition,
                  s = o.x - t,
                  l = o.y - a
                n.props.onWheel && n.props.onWheel(r, i, s, l)
              }),
              (n._panResponder = D.a.create({
                onStartShouldSetPanResponder: function () {
                  return !0
                },
                onMoveShouldSetPanResponder: function () {
                  return !0
                },
                onPanResponderMove: n._handlePanResponderMove,
                onPanResponderRelease: n._handlePanResponderEnd,
                onPanResponderTerminate: n._handlePanResponderEnd,
              })),
              (n._removeSelectStartListener = function () {
                return document.removeEventListener('selectstart', n._preventDefaultEvent, !1)
              }),
              n
            )
          }
          return (
            o()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = (e.children, e.onPanEnd, e.onPanMove, e.onPinchMove, e.onWheel, P()(e, F))
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
            a
          )
        })(v.a.Component),
        L = a('9RkS'),
        N = a('rOXj'),
        R = a('aITJ'),
        B = a('yiKp'),
        V = a.n(B),
        M = a('Lsrn'),
        j = a('k/Ka'),
        U = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(j.a)(
            'svg',
            V()(
              V()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [M.a.root, e.style],
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
      U.metadata = { width: 24, height: 24 }
      var z = U,
        H = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(j.a)(
            'svg',
            V()(
              V()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [M.a.root, e.style],
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
          return Object(j.a)(
            'svg',
            V()(
              V()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [M.a.root, e.style],
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
      var K = G,
        q = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(j.a)(
            'svg',
            V()(
              V()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [M.a.root, e.style],
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
      q.metadata = { width: 24, height: 24 }
      var Y = q,
        X = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(j.a)(
            'svg',
            V()(
              V()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [M.a.root, e.style],
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
      var Z = X,
        J = g.a.d85bc1b8,
        Q = g.a.f596ace8,
        $ = g.a.df031fca,
        ee = g.a.b40332c5,
        te = g.a.e547b368,
        ae = g.a.f7571204,
        ne = g.a.e6e16811,
        re =
          Math.log2 ||
          function (e) {
            return Math.log(e) * Math.LOG2E
          },
        ie = (function (e) {
          u()(a, e)
          var t = p()(a)
          function a(e) {
            var n, i
            return (
              r()(this, a),
              (n = t.call(this, e)),
              m()(l()(n), '_previousLeft', 0),
              m()(l()(n), '_previousTop', 0),
              m()(l()(n), '_panStyles', { top: 0, left: 0 }),
              m()(l()(n), '_shouldShowZoomControl', function () {
                return (!R.b.isMobileOS() || !N.a.isTouchSupported()) && n.props.withZoomControl
              }),
              m()(l()(n), '_renderControls', function () {
                var e = n.props,
                  t = e.image,
                  a = e.withAspectRatioOptions,
                  r = n.state.aspectRatio,
                  i = t.width / t.height,
                  o = n._shouldShowZoomControl()
                return a || o
                  ? v.a.createElement(
                      w.a,
                      { style: oe.controlsContainer },
                      a
                        ? v.a.createElement(
                            w.a,
                            { style: oe.ratioContainer },
                            v.a.createElement(f.a, {
                              accessibilityLabel: Q,
                              borderColor: 'transparent',
                              color: r === i ? 'primary' : 'gray700',
                              hoverLabel: { label: te },
                              icon: v.a.createElement(z, null),
                              onPress: n._setAspectRatio(i),
                              size: 'medium',
                            }),
                            v.a.createElement(f.a, {
                              accessibilityLabel: $,
                              borderColor: 'transparent',
                              color: r === 16 / 9 ? 'primary' : 'gray700',
                              hoverLabel: { label: ae },
                              icon: v.a.createElement(W, null),
                              onPress: n._setAspectRatio(16 / 9),
                              size: 'medium',
                            }),
                            v.a.createElement(f.a, {
                              accessibilityLabel: ee,
                              borderColor: 'transparent',
                              color: 1 === r ? 'primary' : 'gray700',
                              hoverLabel: { label: ne },
                              icon: v.a.createElement(K, null),
                              onPress: n._setAspectRatio(1),
                              size: 'medium',
                            }),
                          )
                        : null,
                      o
                        ? v.a.createElement(
                            w.a,
                            { style: oe.zoomContainer },
                            v.a.createElement(L.a, {
                              accessibilityLabel: J,
                              max: n._maxScale,
                              maxIcon: v.a.createElement(Y, { style: oe.icon }),
                              min: 0,
                              minIcon: v.a.createElement(Z, { style: oe.icon }),
                              onChange: n._handleScaleChange,
                              step: 'any',
                              value: n.state.imageScale,
                            }),
                          )
                        : null,
                    )
                  : null
              }),
              m()(l()(n), '_setImageRef', function (e) {
                n._imageRef = e
              }),
              m()(l()(n), '_handleScaleChange', function (e) {
                n.setState({ imageScale: e })
              }),
              m()(l()(n), '_getImageDimensions', function () {
                var e = n.state.imageScale,
                  t = n.props.image.width / n.props.image.height,
                  a = n._getMaskDimensions(),
                  r = a.height,
                  i = a.width,
                  o = E.a.getCoverDimensions({ width: i, height: r }, t),
                  s = o.height
                return { width: o.width * Math.pow(2, e), height: s * Math.pow(2, e) }
              }),
              m()(l()(n), '_getMaskDimensions', function () {
                var e = n.state,
                  t = e.aspectRatio,
                  a = e.containerHeight,
                  r = e.containerWidth,
                  i = E.a.getContainDimensions({ width: r - 50, height: a - 50 }, t),
                  o = i.height
                return { width: i.width, height: o }
              }),
              m()(l()(n), '_handleLayout', function (e) {
                var t = e.nativeEvent.layout,
                  a = t.height,
                  r = t.width
                n.state.containerHeight || n.state.containerWidth
                  ? n.setState({ containerHeight: a, containerWidth: r })
                  : (n.setState({ containerHeight: a, containerWidth: r }), n._setDefaultCropData())
              }),
              m()(l()(n), '_setDefaultCropData', function () {
                var e = n.props,
                  t = e.defaultCropData,
                  a = e.image
                if (t) {
                  var r = n._getImageDimensions().width,
                    i = n._getMaskDimensions().width,
                    o = r / a.width,
                    s = re(i / (t.width * o))
                  n.setState({ imageScale: s })
                  var l = n._getUnscaledCropData(),
                    c = l.left,
                    u = l.top
                  ;(n._panStyles.top = u - t.top * o * Math.pow(2, s)),
                    (n._previousTop = n._panStyles.top),
                    (n._panStyles.left = c - t.left * o * Math.pow(2, s)),
                    (n._previousLeft = n._panStyles.left),
                    n._updateNativeStyles()
                }
              }),
              m()(l()(n), '_handleWheel', function (e, t, a, r) {
                var i = (-1 * t) / 500
                n.setState(function (e) {
                  var t = e.imageScale,
                    o = Math.min(n._maxScale, Math.max(t + i, 0))
                  return (
                    (n._panStyles.left += a * (o - t)),
                    (n._panStyles.top += r * (o - t)),
                    (n._previousLeft = n._panStyles.left),
                    (n._previousTop = n._panStyles.top),
                    { imageScale: o }
                  )
                })
              }),
              m()(l()(n), '_handlePanMove', function (e, t) {
                ;(n._panStyles.left = n._previousLeft + e),
                  (n._panStyles.top = n._previousTop + t),
                  n._updateNativeStyles(),
                  n._adjustToInBounds()
              }),
              m()(l()(n), '_handlePanEnd', function (e, t) {
                ;(n._previousLeft = n._panStyles.left), (n._previousTop = n._panStyles.top)
              }),
              m()(l()(n), '_handlePinchMove', function (e, t, a, r, i) {
                var o = e / 200
                n.setState(function (e) {
                  var s = e.imageScale,
                    l = Math.min(n._maxScale, Math.max(s + o, 0))
                  return (
                    (n._panStyles.left += t * (l - s) + r),
                    (n._panStyles.top += a * (l - s) + i),
                    (n._previousLeft = n._panStyles.left),
                    (n._previousTop = n._panStyles.top),
                    { imageScale: l }
                  )
                })
              }),
              m()(l()(n), '_adjustToInBounds', function () {
                var e = n._getUnscaledCropData(),
                  t = n._getImageDimensions(),
                  a = e.left,
                  r = e.top,
                  i = e.left + e.width - t.width,
                  o = e.top + e.height - t.height,
                  s = !1
                a < 0 && ((s = !0), (n._panStyles.left += a), (n._previousLeft += a)),
                  r < 0 && ((s = !0), (n._panStyles.top += r), (n._previousTop += r)),
                  i > 0 && ((s = !0), (n._panStyles.left += i), (n._previousLeft += i)),
                  o > 0 && ((s = !0), (n._panStyles.top += o), (n._previousTop += o)),
                  s && n._updateNativeStyles()
              }),
              m()(l()(n), '_updateNativeStyles', function () {
                var e = n._panStyles,
                  t = e.left,
                  a = e.top
                n._imageRef &&
                  n._imageRef.setNativeProps({
                    style: { transform: [{ translate3d: ''.concat(t, 'px, ').concat(a, 'px, 0') }] },
                  })
              }),
              m()(l()(n), '_getUnscaledCropData', function () {
                var e = n._getImageDimensions(),
                  t = e.height,
                  a = e.width,
                  r = n._getMaskDimensions(),
                  i = r.height,
                  o = r.width,
                  s = n._panStyles,
                  l = s.left
                return { top: (t - i) / 2 - s.top, left: (a - o) / 2 - l, width: o, height: i }
              }),
              m()(l()(n), '_setAspectRatio', function (e) {
                return function () {
                  n.setState({ aspectRatio: e })
                }
              }),
              (n.state = {
                aspectRatio: e.defaultAspectRatio || e.image.width / e.image.height,
                imageScale: 0,
                containerHeight: 0,
                containerWidth: 0,
              }),
              (n._maxScale = ((i = e.image), Math.max(Math.min(re(i.width / 150), re(i.height / 150), 3), 0.5))),
              n
            )
          }
          return (
            o()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.circle,
                    a = e.image,
                    n = e.withZoomControl,
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
                      O,
                      {
                        onLayout: this._handleLayout,
                        onPanEnd: this._handlePanEnd,
                        onPanMove: this._handlePanMove,
                        onPinchMove: n ? this._handlePinchMove : void 0,
                        onWheel: n ? this._handleWheel : void 0,
                        style: oe.root,
                      },
                      u
                        ? v.a.createElement(
                            v.a.Fragment,
                            null,
                            v.a.createElement(y.a, {
                              ref: this._setImageRef,
                              source: { uri: a.src, width: o, height: i },
                              style: oe.image,
                            }),
                            v.a.createElement(I, { circle: t, height: l, width: c }),
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
                    a = this._getUnscaledCropData()
                  return {
                    aspectRatio: this.state.aspectRatio,
                    top: Math.round(t * a.top),
                    left: Math.round(t * a.left),
                    width: Math.round(t * a.width),
                    height: Math.round(t * a.height),
                  }
                },
              },
            ]),
            a
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
    '2Daw': function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return A
      })
      var n = a('VrFO'),
        r = a.n(n),
        i = a('Y9Ll'),
        o = a.n(i),
        s = a('5Yy7'),
        l = a.n(s),
        c = a('2VqO'),
        u = a.n(c),
        d = a('KEM+'),
        p = a.n(d),
        h = (a('uFXj'), a('ERkP')),
        m = a.n(h),
        _ = a('LCtV'),
        v = a('3XMw'),
        f = a.n(v),
        b = a('VPdC'),
        g = a('pKoL'),
        y = a('MWbm'),
        k = a('rFBM'),
        w = a('/yvb'),
        C = a('9Xij'),
        I = a('rHpw'),
        E = a('hOZg'),
        x = a('Mbn/'),
        S = a('T8pk'),
        T = f.a.b87ca51a,
        P = f.a.eebff22c,
        A = (function (e) {
          l()(a, e)
          var t = u()(a)
          function a() {
            return r()(this, a), t.apply(this, arguments)
          }
          return (
            o()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.borderRadius,
                    a = e.maskStyle,
                    n = e.mediaItem,
                    r = e.onAddMediaFiles,
                    i = e.onCrop,
                    o = e.onRemove,
                    s = e.rootStyle,
                    l = e.withDragDrop,
                    c = n && !n.uploader,
                    u = m.a.createElement(
                      m.a.Fragment,
                      null,
                      this._renderPreview(),
                      c
                        ? null
                        : m.a.createElement(
                            m.a.Fragment,
                            null,
                            m.a.createElement(y.a, { style: [F.mask, a, D[t]] }),
                            m.a.createElement(
                              y.a,
                              { style: F.mediaPicker },
                              this._renderMediaEdit(),
                              i ? this._renderMediaCrop() : null,
                              o ? this._renderMediaRemove() : null,
                            ),
                          ),
                    )
                  return m.a.createElement(
                    y.a,
                    { style: [F.container, s, D[t]] },
                    l && r ? m.a.createElement(k.a, { onFilesAdded: r, style: [F.dragDropContainer, D[t]] }, u) : u,
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
                    icon: m.a.createElement(E.a, null),
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
                    a = e.onRemove
                  return m.a.createElement(w.a, {
                    accessibilityLabel: P,
                    icon: m.a.createElement(x.a, null),
                    onPress: t,
                    size: 'large',
                    style: a ? F.middleButton : F.rightButton,
                    type: 'onMediaDominantColorFilled',
                  })
                },
              },
              {
                key: '_renderMediaEdit',
                value: function () {
                  var e = this.props,
                    t = e.acceptGifs,
                    a = e.acceptVideo,
                    n = e.accessibilityLabel,
                    r = e.onAddMediaFiles,
                    i = e.onEdit,
                    o = m.a.createElement(S.a, null)
                  return r
                    ? m.a.createElement(b.a, {
                        acceptGifs: t,
                        acceptVideo: a,
                        accessibilityLabel: n,
                        icon: o,
                        onChange: r,
                        size: 'large',
                        type: 'onMediaDominantColorFilled',
                      })
                    : m.a.createElement(w.a, {
                        accessibilityLabel: n,
                        icon: o,
                        onPress: i,
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
                    a = e.borderRadius,
                    n = e.currentContent,
                    r = e.mediaItem
                  return r
                    ? m.a.createElement(
                        C.a,
                        { ratio: t },
                        m.a.createElement(g.a, {
                          borderRadius: a,
                          enableGif: !1,
                          mediaItem: r,
                          style: F.mediaPreview,
                          withCloseButton: !1,
                        }),
                      )
                    : n
                },
              },
            ]),
            a
          )
        })(m.a.Component)
      p()(A, 'defaultProps', { acceptGifs: !1, acceptVideo: !1, aspectRatio: 1, borderRadius: _.a.NONE })
      var D = I.a.create(function (e) {
          return {
            infinite: { borderRadius: e.borderRadii.infinite },
            medium: { borderRadius: e.borderRadii.small },
            none: { borderRadius: e.borderRadii.none },
          }
        }),
        F = I.a.create(function (e) {
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
    '2MR/': function (e, t, a) {
      'use strict'
      var n = a('ddV6'),
        r = a.n(n),
        i = a('ERkP'),
        o = a.n(i),
        s = a('3XMw'),
        l = a.n(s),
        c = a('v302'),
        u = l.a.b05a39b2,
        d = l.a.c566d3a5,
        p = function (e) {
          return o.a.createElement(c.a, e)
        },
        h = function (e) {
          var t = e.children,
            a = e.hideLabel,
            n = void 0 === a ? d : a,
            i = e.label,
            s = e.lang,
            l = e.render,
            c = void 0 === l ? p : l,
            h = e.revealLabel,
            m = void 0 === h ? u : h,
            _ = o.a.useState(!1),
            v = r()(_, 2),
            f = v[0],
            b = v[1]
          return c({
            actionText: f ? n : m,
            children: f ? t : i,
            lang: s,
            onActionClick: function () {
              return b(!f)
            },
          })
        }
      ;(h.displayName = 'TweetDisclosure'), (t.a = h)
    },
    '4BrD': function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        i = a('ERkP'),
        o = a.n(i),
        s = a('Lsrn'),
        l = a('k/Ka'),
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
    '53j7': function (e, t, a) {
      'use strict'
      a.d(t, 'h', function () {
        return w
      }),
        a.d(t, 'i', function () {
          return C
        }),
        a.d(t, 'j', function () {
          return I
        }),
        a.d(t, 'a', function () {
          return x
        }),
        a.d(t, 'd', function () {
          return T
        }),
        a.d(t, 'b', function () {
          return A
        }),
        a.d(t, 'e', function () {
          return F
        }),
        a.d(t, 'c', function () {
          return L
        }),
        a.d(t, 'g', function () {
          return R
        }),
        a.d(t, 'f', function () {
          return B
        }),
        a.d(t, 'k', function () {
          return V
        }),
        a.d(t, 'l', function () {
          return j
        }),
        a.d(t, 'm', function () {
          return U
        })
      var n = a('ddV6'),
        r = a.n(n),
        i = a('KEM+'),
        o = a.n(i),
        s = a('yiKp'),
        l = a.n(s),
        c = (a('7x/C'), a('JtPf'), a('oEOe')),
        u = a('AspN'),
        d = a('/kEJ'),
        p = a('XMGw'),
        h = a('Ssj5'),
        m = ''.concat(p.a, '/profile'),
        _ = 'rweb/'.concat(m),
        v = c.a(_, 'REMOVE_PROFILE_BANNER'),
        f = c.a(_, 'UPDATE_PROFILE'),
        b = c.a(_, 'UPDATE_PROFILE_AVATAR'),
        g = c.a(_, 'UPDATE_PROFILE_BANNER'),
        y = c.a(_, 'UPLOAD_MEDIA'),
        k = { avatarMediaId: null, bannerMediaId: null, isUploading: !1, profileSettings: null }
      var w = function (e) {
          return e[m].avatarMediaId
        },
        C = function (e) {
          return e[m].bannerMediaId
        },
        I = function (e) {
          return e[m].profileSettings
        },
        E = 'rweb/settings/profile/ADD_AVATAR_MEDIA',
        x = function (e) {
          return { meta: { mediaId: e }, type: E }
        },
        S = 'rweb/settings/profile/REMOVE_AVATAR_MEDIA',
        T = function (e) {
          return { meta: { mediaId: e }, type: S }
        },
        P = 'rweb/settings/profile/ADD_BANNER_MEDIA',
        A = function (e) {
          return { meta: { mediaId: e }, type: P }
        },
        D = 'rweb/settings/profile/REMOVE_BANNER_MEDIA',
        F = function (e) {
          return { meta: { mediaId: e }, type: D }
        },
        O = 'rweb/settings/profile/PERSIST_PROFILE_SETTINGS',
        L = function (e) {
          return { meta: { profileSettings: e }, type: O }
        },
        N = 'rweb/settings/profile/RESET_PERSISTED_PROFILE_SETTINGS',
        R = function () {
          return { type: N }
        },
        B = function (e) {
          return function (t, a, n) {
            var r = n.api
            return c.b(t, { params: e, request: r.Settings.removeProfileBanner })(
              { actionTypes: v, context: 'ACTION_REMOVE_USER_BANNER' },
              function (e) {
                if (e)
                  return [Object(d.c)({ users: o()({}, e.id_str, l()(l()({}, e), {}, { profile_banner_url: null })) })]
              },
            )
          }
        },
        V = function (e) {
          return function (t, a, n) {
            var r = n.api
            return c.b(t, { params: e, request: r.Settings.updateProfile })(
              { actionTypes: f, context: 'ACTION_UPDATE_PROFILE_SETTINGS' },
              function (e) {
                if (e && e.entities) return [Object(d.c)(e.entities)]
              },
            )
          }
        },
        M = function (e, t, a) {
          return function (n) {
            return function (i, s, l) {
              var p = l.api
              i({ type: y.REQUEST })
              var h = u.p(n)
              return i(h).then(
                function (n) {
                  var s = r()(n, 1)[0]
                  i([{ type: y.SUCCESS }, { type: e.REQUEST }])
                  return c.b(i, { params: { media_id: s.uploadId }, request: a(p) })(
                    { actionTypes: f, context: t },
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
        j = M(b, 'ACTION_UPDATE_USER_AVATAR', function (e) {
          return e.Settings.updateProfileAvatar
        }),
        U = M(g, 'ACTION_UPDATE_USER_BANNER', function (e) {
          return e.Settings.updateProfileBanner
        })
      h.a.register(
        o()({}, m, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : k,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          switch (t.type) {
            case E:
              return l()(l()({}, e), {}, { avatarMediaId: t.meta.mediaId })
            case S:
              return l()(l()({}, e), {}, { avatarMediaId: null })
            case P:
              return l()(l()({}, e), {}, { bannerMediaId: t.meta.mediaId })
            case D:
              return l()(l()({}, e), {}, { bannerMediaId: null })
            case O:
              return l()(l()({}, e), {}, { profileSettings: t.meta.profileSettings })
            case N:
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
    '5emT': function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        i = a('ERkP'),
        o = a.n(i),
        s = a('Lsrn'),
        l = a('k/Ka'),
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
    '6D0R': function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'default', function () {
          return _
        })
      var n = a('97Jx'),
        r = a.n(n),
        i = (a('KqXw'), a('MvUL'), a('0zG9'), a('ERkP')),
        o = a.n(i),
        s = a('Hw0q'),
        l = a('9D1O'),
        c = Object(l.c)({
          task: function (e) {
            return e.ReportFlow.task
          },
        }),
        u = a('gPQO'),
        d = a('fz3c'),
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
      function _(e) {
        var t,
          a = e.history,
          n = e.location,
          i = n.query,
          s = n.state
        return !(null == i || !i.input_flow_data) ||
          (null != s && null !== (t = s.input) && void 0 !== t && t.requested_variant)
          ? o.a.createElement(u.a, r()({}, e, { flowName: 'report-flow', ocfModule: c }))
          : (a.replace(location.pathname, { input: { requested_variant: JSON.stringify(m(i)) } }), null)
      }
    },
    '6XNv': function (e, t, a) {
      'use strict'
      var n = a('RhWx'),
        r = a.n(n),
        i = a('VrFO'),
        o = a.n(i),
        s = a('Y9Ll'),
        l = a.n(s),
        c = a('1Pcy'),
        u = a.n(c),
        d = a('5Yy7'),
        p = a.n(d),
        h = a('2VqO'),
        m = a.n(h),
        _ = a('KEM+'),
        v = a.n(_),
        f = a('yiKp'),
        b = a.n(f),
        g = (a('lTEL'), a('7x/C'), a('LqLs'), a('87if'), a('kYxP'), a('7xRU'), a('z84I'), a('2G9S'), a('ERkP')),
        y = a.n(g),
        k = a('t62R'),
        w = a('piX5'),
        C = a('4r2z'),
        I = a('FG+G'),
        E = a('rHpw'),
        x = a('k/Ka'),
        S = a('shC7'),
        T = a('MWbm'),
        P = y.a.forwardRef(function (e, t) {
          return Object(x.a)('select', b()(b()({}, e), {}, { ref: t }))
        }),
        A = function (e) {
          return Object(x.a)('option', e)
        },
        D = 1,
        F = (function (e) {
          p()(a, e)
          var t = m()(a)
          function a(e) {
            var n
            return (
              o()(this, a),
              (n = t.call(this, e)),
              v()(u()(n), '_selectRef', y.a.createRef()),
              v()(u()(n), 'state', { isFocused: !1 }),
              v()(u()(n), '_handleChange', function (e) {
                var t = n.props,
                  a = t.onChange,
                  r = t.withEmptyOption,
                  i = e.target,
                  o = i.selectedIndex,
                  s = i.value
                a && a(s, o - (r ? 1 : 0))
              }),
              v()(u()(n), '_handleBlur', function (e) {
                var t = n.props.onBlur
                n.setState({ isFocused: !1 }), t && t()
              }),
              v()(u()(n), '_handleFocus', function (e) {
                var t = n.props.onFocus
                n.setState({ isFocused: !0 }), t && t()
              }),
              (n._id = 'SELECTOR_'.concat(D)),
              (n._errorID = ''.concat(n._id, '_ERROR')),
              (n._helperID = ''.concat(n._id, '_HELP')),
              (n._labelID = ''.concat(n._id, '_LABEL')),
              (D += 1),
              n
            )
          }
          return (
            l()(a, [
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
                    a = e.disabled,
                    n = e.errorText,
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
                        ? E.a.theme.fontFamilies.japan
                        : S.a.getConstants().isRTL || C.a.isLocaleRTL(h)
                        ? E.a.theme.fontFamilies.rtl
                        : E.a.theme.fontFamilies.normal,
                    _ = void 0 === i ? !!n : i,
                    v = new Set()
                  n && v.add(this._errorID), t && v.add(t), o && v.add(this._helperID)
                  var f = v.size ? r()(v).join(' ') : void 0
                  return y.a.createElement(
                    y.a.Fragment,
                    null,
                    y.a.createElement(
                      T.a,
                      {
                        style: [
                          w.a.border,
                          O.container,
                          a && w.a.disabled,
                          p && w.a.focusedBorderValid,
                          _ && w.a.invalidBorderColor,
                          p && _ && w.a.focusedBorderInvalid,
                          l,
                        ],
                      },
                      this._renderLabel(),
                      y.a.createElement(
                        P,
                        {
                          accessibilityDescribedBy: f,
                          accessibilityInvalid: _,
                          accessibilityLabelledBy: this._labelID,
                          disabled: a,
                          nativeID: this._id,
                          onBlur: this._handleBlur,
                          onChange: this._handleChange,
                          onFocus: this._handleFocus,
                          ref: this._selectRef,
                          style: [O.select, { fontFamily: m }, a && w.a.disabled],
                          testID: c || '',
                          value: u,
                        },
                        d ? y.a.createElement(A, { disabled: !0, style: O.option, value: '' }) : null,
                        s.map(function (e) {
                          var t = e.disabled,
                            a = e.label,
                            n = e.value
                          return y.a.createElement(
                            A,
                            { disabled: t, key: ''.concat(a, '-').concat(n), style: O.option, value: n },
                            a,
                          )
                        }),
                      ),
                      y.a.createElement(I.a, {
                        style: [O.dropdownCaret, p && w.a.validColor, (i || n) && w.a.invalidColor],
                      }),
                    ),
                    o ? this._renderHelperText() : null,
                    _ && n ? this._renderErrorText() : null,
                  )
                },
              },
              {
                key: '_renderLabel',
                value: function () {
                  var e = this.props,
                    t = e.errorText,
                    a = e.hasError,
                    n = e.label,
                    r = this.state.isFocused
                  return y.a.createElement(
                    k.b,
                    {
                      accessibilityRole: 'label',
                      color: a || t ? 'red500' : r ? 'primary' : 'gray700',
                      nativeID: this._labelID,
                      style: O.label,
                    },
                    n,
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
                      { color: 'gray700', nativeID: this._helperID, style: O.helperText },
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
                      { color: 'red500', nativeID: this._errorID, style: O.helperText },
                      this.props.errorText,
                    ),
                  )
                },
              },
            ]),
            a
          )
        })(y.a.PureComponent)
      v()(F, 'defaultProps', { disabled: !1, autofocus: !1, withEmptyOption: !1 }), (F.propTypes = {})
      var O = E.a.create(function (e) {
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
    EeFI: function (e, t, a) {
      'use strict'
      var n = a('97Jx'),
        r = a.n(n),
        i = a('VrFO'),
        o = a.n(i),
        s = a('Y9Ll'),
        l = a.n(s),
        c = a('5Yy7'),
        u = a.n(c),
        d = a('2VqO'),
        p = a.n(d),
        h = a('ERkP'),
        m = a.n(h),
        _ = a('3XMw'),
        v = a.n(_),
        f = a('MWbm'),
        b = a('Qwev'),
        g = a('21U8'),
        y = a('rHpw'),
        k = a('1auM'),
        w = a('eYns'),
        C = v.a.gff1f69e,
        I = (function (e) {
          u()(a, e)
          var t = p()(a)
          function a(e) {
            var n
            return o()(this, a), ((n = t.call(this, e)).state = { orientedImage: null }), n
          }
          return (
            l()(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this,
                    t = (this.props.media || {}).originalMediaFile,
                    a = void 0 === t ? {} : t
                  a &&
                    a instanceof k.a &&
                    Object(w.b)(a).then(function (t) {
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
                    : m.a.createElement(b.a, { accessibilityLabel: C, style: E.activityIndicator })
                },
              },
              {
                key: '_renderCropper',
                value: function () {
                  var e = this.props,
                    t = e.cropperRef,
                    a = e.defaultAspectRatio,
                    n = e.defaultCropData,
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
                        f.a,
                        { style: E.cropper },
                        m.a.createElement(g.a, {
                          circle: this.props.circle,
                          defaultAspectRatio: (n && n.aspectRatio) || (c && c.aspectRatio) || a,
                          defaultCropData: n || c,
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
            a
          )
        })(m.a.Component),
        E = y.a.create(function (e) {
          return {
            cropper: { backgroundColor: e.colors.navigationBackground, flexGrow: 1 },
            activityIndicator: { flexGrow: 1 },
          }
        })
      t.a = m.a.forwardRef(function (e, t) {
        return m.a.createElement(I, r()({}, e, { cropperRef: t }))
      })
    },
    H9wA: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return r
      })
      var n = a('aWzz'),
        r = {
          accessibilityLabel: n.string,
          accessibilityLiveRegion: Object(n.oneOf)(['assertive', 'none', 'polite']),
          style: n.any,
        }
    },
    'IMA+': function (e, t, a) {
      'use strict'
      var n = a('97Jx'),
        r = a.n(n),
        i = a('VrFO'),
        o = a.n(i),
        s = a('Y9Ll'),
        l = a.n(s),
        c = a('1Pcy'),
        u = a.n(c),
        d = a('5Yy7'),
        p = a.n(d),
        h = a('2VqO'),
        m = a.n(h),
        _ = a('KEM+'),
        v = a.n(_),
        f = (a('yH/f'), a('2G9S'), a('ho0z'), a('hBvt'), a('vrRf'), a('1t7P'), a('jQ/y'), a('SV7d')),
        b = a('ERkP'),
        g = a.n(b),
        y = a('TIdA'),
        k = a('t62R'),
        w = a('5mJL'),
        C = a('DNho'),
        I = a('nBUg'),
        E = a('qjak'),
        x = a('ir4X'),
        S = a('htQn'),
        T = a('e5HP'),
        P = a('FBXD'),
        A = a('Nqmc'),
        D = a('rHpw'),
        F = a('jhWN'),
        O = a('1I0O'),
        L = a('pBrB'),
        N = a('jV+4'),
        R = a('MWbm'),
        B = Object.freeze({ TWEET: 'tweets', USER: 'users' }),
        V = Object.freeze({
          UserCompact: 'UserCompact',
          UserConcise: 'UserConcise',
          UserDetailed: 'UserDetailed',
          ExperimentalUserTypeahead: 'ExperimentalUserTypeahead',
        }),
        M = y.a.createLayoutCache(),
        j = { viewType: 'user_cell' },
        U = (function (e) {
          p()(a, e)
          var t = m()(a)
          function a() {
            var e
            o()(this, a)
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              v()(u()(e), '_renderUserName', function () {
                var t = e.props,
                  a = t.badgeContext,
                  n = t.disabledMessage,
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
                  _ = t.screenNameSuffix,
                  v = t.translatorType,
                  f = t.withFollowsYou,
                  b = t.withLink,
                  y = g.a.createElement(N.a, {
                    badgeContext: a,
                    displayNameLabel: r,
                    isProtected: l,
                    isVerified: c,
                    name: u,
                    onLinkClick: d,
                    promotedContent: h === B.TWEET ? p : void 0,
                    screenName: m,
                    screenNameSuffix: _,
                    translatorType: v,
                    withFollowsYou: f && s,
                    withHoverCard: !i && !o && b,
                    withLink: !o && b,
                    withScreenName: !n,
                    withStackedLayout: !0,
                  })
                return n
                  ? g.a.createElement(
                      R.a,
                      { style: z.disabledMessageContainer },
                      y,
                      g.a.createElement(k.b, { color: 'gray700' }, n),
                    )
                  : y
              }),
              v()(u()(e), '_renderSocialContext', function () {
                var t = e.props,
                  a = t.avatarSize,
                  n = t.displayMode,
                  r = t.socialContext
                return r
                  ? g.a.createElement(I.b.UseProps, null, function (e) {
                      return g.a.createElement(A.a, {
                        avatarSize: a,
                        contextType: r.contextType,
                        iconSize: 'large',
                        link: r.link,
                        style: z.socialContext,
                        text: r.text,
                        weight: 'bold',
                        withLeftPadding: !e.socialContextRefreshEnabled() && n !== V.ExperimentalUserTypeahead,
                      })
                    })
                  : null
              }),
              v()(u()(e), '_renderUserTypeaheadSocialContext', function () {
                var t = e.props.socialContext,
                  a =
                    (t && Object(E.a)({ link: t.link, text: t.text, iconSize: 'small', contextType: t.contextType })) ||
                    {},
                  n = a.Icon,
                  r = a.text
                return t
                  ? g.a.createElement(
                      R.a,
                      { style: z.userTypeaheadSocialContext },
                      g.a.createElement(R.a, { style: z.userTypeaheadSocialContextIcon }, n),
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
                return -1 !== [V.UserDetailed, V.UserConcise].indexOf(t)
              }),
              v()(u()(e), '_handleKeyPress', function (t) {
                t.defaultPrevented || 'Enter' !== t.key || e._handleClick(t)
              }),
              v()(
                u()(e),
                '_handleClick',
                Object(P.a)(function (t) {
                  var a = e.props.onCellClick
                  t.preventDefault(), a && a()
                }),
              ),
              e
            )
          }
          return (
            l()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.accessibilityLabel,
                    a = e.accessibilityState,
                    n = e.avatarDecoration,
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
                    _ = e.presenceIndicator,
                    v = e.promotedContent,
                    b = e.promotedItemType,
                    y = e.screenName,
                    k = e.style,
                    I = e.testID,
                    E = e.userId,
                    x = e.withDarkerInteractiveBackground,
                    P = e.withInteractiveStyling,
                    A = e.withLink,
                    D = e.withUsernameCenterAligned,
                    L = A && !u,
                    N = c === V.UserCompact || D,
                    U = c === V.ExperimentalUserTypeahead,
                    H =
                      v && b === B.USER && 'earned' !== (v.disclosure_type && v.disclosure_type.toLowerCase())
                        ? g.a.createElement(T.a, { contentAuthorId: E, promotedContent: v, style: z.promotedIndicator })
                        : null,
                    W = {
                      accessibilityHidden: !0,
                      decoration: n,
                      focusable: !1,
                      imageLayoutCache: M,
                      onClick: p,
                      onHoverCardScreenNameClick: m,
                      promotedContent: v,
                      screenName: y,
                      style: z.avatar,
                      uri: o,
                      withHoverCard: L,
                      withLink: A,
                    },
                    G = g.a.createElement(C.a.Consumer, null, function (e) {
                      var t = e.avatarSize
                      return _
                        ? g.a.createElement(O.a, r()({}, W, _, { size: t }))
                        : g.a.createElement(F.a, r()({ size: t }, W))
                    }),
                    K = a && 'boolean' == typeof a.checked,
                    q = void 0 !== h,
                    Y = (K ? 'radio' : q && 'button') || 'listitem',
                    X = this._renderUserName(),
                    Z = this._renderHighlightedUserLabel(),
                    J = this._renderBio(),
                    Q = Z || J || H || s,
                    $ = g.a.createElement(
                      g.a.Fragment,
                      null,
                      Z,
                      J,
                      H,
                      s ? g.a.createElement(R.a, { style: z.bottomControl }, s) : null,
                    )
                  return g.a.createElement(
                    f.a,
                    { behavioralEventContext: j },
                    g.a.createElement(
                      S.a,
                      {
                        accessibilityLabel: t,
                        accessibilityRole: Y,
                        accessibilityState: a,
                        disabled: !!d,
                        focusable: K || q,
                        onClick: this._handleClick,
                        onKeyPress: this._handleKeyPress,
                        pointerEvents: d ? 'none' : void 0,
                        style: [z.root, k],
                        testID: I,
                        withDarkerInteractiveBackground: x,
                        withInteractiveStyling: null != P ? P : !!h,
                      },
                      U ? null : this._renderSocialContext(),
                      g.a.createElement(
                        w.a,
                        {
                          avatarCell: G,
                          avatarCellStyle: [z.avatarColumn, N && z.bodyColumnCentered],
                          avatarSize: U ? 'xxxLarge' : i,
                          cellStyle: [z.bodyColumn, N && z.bodyColumnCentered],
                        },
                        g.a.createElement(R.a, { style: z.body }, X, l),
                        N ? null : $,
                        U ? this._renderUserTypeaheadSocialContext() : null,
                      ),
                      Q && N
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
                    a = e.displayMode,
                    n = e.entities,
                    r = e.userId,
                    i = e.withheldDescription,
                    o = e.withheldEntities
                  return n && t && this._isEligibleForBio()
                    ? g.a.createElement(L.a, {
                        description: t,
                        entities: n,
                        isConcise: a === V.UserConcise,
                        style: z.bio,
                        userId: r,
                        withheldDescription: i,
                        withheldEntities: o,
                      })
                    : null
                },
              },
            ]),
            a
          )
        })(g.a.PureComponent)
      v()(U, 'defaultProps', { testID: 'UserCell', withLink: !0 })
      var z = D.a.create(function (e) {
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
      t.a = U
    },
    K2mq: function (e, t, a) {
      'use strict'
      a.r(t)
      var n = a('97Jx'),
        r = a.n(n),
        i = a('ERkP'),
        o = a.n(i),
        s = a('9D1O'),
        l = a('gPQO')
      t.default = function (e) {
        return o.a.createElement(l.a, r()({}, e, { flowName: 'signup', ocfModule: s.i }))
      }
    },
    KNZn: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        i = a('VrFO'),
        o = a.n(i),
        s = a('Y9Ll'),
        l = a.n(s),
        c = a('1Pcy'),
        u = a.n(c),
        d = a('5Yy7'),
        p = a.n(d),
        h = a('2VqO'),
        m = a.n(h),
        _ = a('KEM+'),
        v = a.n(_),
        f = (a('TJCb'), a('7x/C'), a('DZ+c'), a('vrRf'), a('uFXj'), a('ERkP')),
        b = a.n(f),
        g = a('RqPI'),
        y = a('rxPX'),
        k = Object(y.a)().propsFromState(function () {
          return { language: g.o }
        }),
        w = a('3XMw'),
        C = a.n(w),
        I = a('fs1G'),
        E = a('rHpw'),
        x = a('BLtI'),
        S = a('MWbm'),
        T = 'Twitter',
        P = C.a.ea1c87a5({ mention: T }),
        A = {
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
        D = (function (e) {
          p()(a, e)
          var t = m()(a)
          function a(e) {
            var n
            o()(this, a),
              (n = t.call(this, e)),
              v()(u()(n), '_handleTweetAction', function (e) {
                e && e.preventDefault && e.preventDefault()
              })
            var i = n.props,
              s = i.language,
              l = i.tweet
            return (n._tweet = r()(r()(r()({}, A), l), {}, { lang: s || 'en' })), n
          }
          return (
            l()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.withTweetBorder
                  return b.a.createElement(
                    S.a,
                    { accessibilityHidden: !0, style: e && F.tweetBorder },
                    b.a.createElement(x.b, {
                      enableKeyboardShortcuts: !1,
                      onAnalyticsClick: I.a,
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
                    b.a.createElement(S.a, { style: E.a.absoluteFill }),
                  )
                },
              },
            ]),
            a
          )
        })(b.a.Component)
      v()(D, 'defaultProps', { tweet: A, withTweetBorder: !1 })
      var F = E.a.create(function (e) {
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
        O = k(D)
      t.a = O
    },
    LXAX: function (e, t, a) {
      'use strict'
      a.d(t, 'c', function () {
        return h
      }),
        a.d(t, 'b', function () {
          return m
        }),
        a.d(t, 'a', function () {
          return _
        })
      var n = a('KEM+'),
        r = a.n(n),
        i = a('yiKp'),
        o = a.n(i),
        s = (a('yH/f'), a('oEOe')),
        l = a('Ssj5'),
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
          return function (t, a, n) {
            var r = n.api
            return Object(s.b)(t, { params: e, request: r.Settings.usernameAvailable })({
              actionTypes: d,
              context: 'FETCH_SETTINGS_USERNAME_AVAILABLE',
              meta: { username: e.username },
            })
          }
        },
        _ = function (e) {
          return { type: u, meta: e }
        }
      l.a.register(
        r()({}, c, function () {
          var e,
            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p,
            a = arguments.length > 1 ? arguments[1] : void 0
          switch (a.type) {
            case d.REQUEST:
              return o()(o()({}, t), {}, { isLoading: !0 })
            case d.FAILURE:
              return o()(o()({}, t), {}, { isLoading: !1 })
            case d.SUCCESS:
              return o()(o()(o()({}, t), a.payload), {}, { username: a.meta.username, isLoading: !1 })
            case u:
              return {
                isLoading: !1,
                suggestions: null !== (e = a.meta) && void 0 !== e && e.persistSuggestions ? t.suggestions : void 0,
              }
            default:
              return t
          }
        }),
      )
    },
    Lam0: function (e, t, a) {
      'use strict'
      ;(function (e) {
        a.d(t, 'a', function () {
          return T
        })
        var n = a('VrFO'),
          r = a.n(n),
          i = a('Y9Ll'),
          o = a.n(i),
          s = a('1Pcy'),
          l = a.n(s),
          c = a('5Yy7'),
          u = a.n(c),
          d = a('2VqO'),
          p = a.n(d),
          h = a('KEM+'),
          m = a.n(h),
          _ = a('ERkP'),
          v = a.n(_),
          f = a('t+RT'),
          b = a('MWbm'),
          g = a('t62R'),
          y = a('/yvb'),
          k = a('rHpw'),
          w = a('3XMw'),
          C = a.n(w),
          I = C.a.c1df579e,
          E = C.a.b60eba9e,
          x = C.a.ba939777,
          S = C.a.bc6efc72,
          T = (function (t) {
            u()(n, t)
            var a = p()(n)
            function n(t, i) {
              var o
              return (
                r()(this, n),
                (o = a.call(this, t, i)),
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
              o()(n, [
                {
                  key: '_renderConsentForm',
                  value: function () {
                    var e = this.props.nextButtonDisabled
                    return v.a.createElement(
                      b.a,
                      null,
                      v.a.createElement(g.b, { style: P.guideCopy }, E),
                      v.a.createElement(
                        b.a,
                        { style: P.button },
                        v.a.createElement(
                          y.a,
                          { disabled: e, onPress: this._handleConsent, size: 'xLarge', type: 'brandOutlined' },
                          I,
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
                        v.a.createElement(f.a, {
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
              n
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
      }.call(this, a('fRV1')))
    },
    'Mbn/': function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        i = a('ERkP'),
        o = a.n(i),
        s = a('Lsrn'),
        l = a('k/Ka'),
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
    'N+xe': function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'VerificationLanding', function () {
          return j
        })
      var n = a('VrFO'),
        r = a.n(n),
        i = a('Y9Ll'),
        o = a.n(i),
        s = a('1Pcy'),
        l = a.n(s),
        c = a('5Yy7'),
        u = a.n(c),
        d = a('2VqO'),
        p = a.n(d),
        h = a('KEM+'),
        m = a.n(h),
        _ = (a('KqXw'), a('MvUL'), a('ERkP')),
        v = a.n(_),
        f = a('9D1O'),
        b = a('hqKg'),
        g = a('Hw0q'),
        y = a('oEGd'),
        k = Object(g.b)('user_identifier'),
        w = Object(g.b)('phone'),
        C = Object(g.b)('email'),
        I = Object(g.b)('pin_code'),
        E = Object(b.createSelector)(C, k, w, I, function (e, t, a, n) {
          return { email: e, identifier: t, phone: a, pinCode: n }
        }),
        x = { verificationLink: f.A },
        S = Object(y.f)(E, x),
        T = a('kGix'),
        P = a('v//M'),
        A = a('3XMw'),
        D = a.n(A),
        F = a('fs1G'),
        O = a('mCZD'),
        L = a('MWbm'),
        N = a('cmUU'),
        R = a('rHpw'),
        B = D.a.b5474bd2,
        V = D.a.a9b8fb38,
        M = D.a.j24c37b2,
        j = (function (e) {
          u()(a, e)
          var t = p()(a)
          function a(e) {
            var n
            return (
              r()(this, a),
              (n = t.call(this, e)),
              m()(l()(n), '_render', function () {
                return v.a.createElement(N.a, {
                  actionLabel: M,
                  headline: n.state.title || '',
                  onAction: n._handleCloseWindow,
                  onClose: n._handleCloseWindow,
                  subtext: n.state.message || '',
                  withCloseButton: !1,
                })
              }),
              m()(l()(n), '_handleCloseWindow', function () {
                window && window.close(), n.props.history.replace('/')
              }),
              (n.state = { title: void 0, message: void 0, fetchStatus: T.a.LOADING }),
              n
            )
          }
          return (
            o()(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this,
                    t = this.props,
                    a = t.email,
                    n = t.history,
                    r = t.identifier,
                    i = t.location,
                    o = t.phone,
                    s = t.pinCode,
                    l = t.verificationLink
                  return (
                    n.replace(i.pathname),
                    l({ user_identifier: r, email: a, phone: o, pin_code: s })
                      .then(function (t) {
                        return e.setState({
                          fetchStatus: t.success ? T.a.LOADED : T.a.FAILED,
                          title: t.title,
                          message: t.message,
                        })
                      })
                      .catch(function () {
                        return e.setState({ title: B, message: V, fetchStatus: T.a.FAILED })
                      })
                  )
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props.history
                  return v.a.createElement(
                    O.a,
                    { hideLogo: !0, history: e },
                    v.a.createElement(
                      L.a,
                      { style: U.root },
                      v.a.createElement(P.a, {
                        fetchStatus: this.state.fetchStatus,
                        onRequestRetry: F.a,
                        render: this._render,
                        renderFailure: this._render,
                        retryable: !1,
                      }),
                    ),
                  )
                },
              },
            ]),
            a
          )
        })(v.a.Component),
        U = R.a.create(function (e) {
          return { root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 } }
        })
      t.default = S(j)
    },
    P68U: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'MediaPickerWithPreview', function () {
          return w
        })
      var n = a('VrFO'),
        r = a.n(n),
        i = a('Y9Ll'),
        o = a.n(i),
        s = a('1Pcy'),
        l = a.n(s),
        c = a('5Yy7'),
        u = a.n(c),
        d = a('2VqO'),
        p = a.n(d),
        h = a('KEM+'),
        m = a.n(h),
        _ = (a('2G9S'), a('hCOa'), a('87if'), a('hBpG'), a('7x/C'), a('jQ3i'), a('x4t0'), a('z84I'), a('ERkP')),
        v = a.n(_),
        f = a('AspN'),
        b = a('rxPX'),
        g = Object(b.a)().propsFromActions(function () {
          return { addMedia: f.b, processMultipleMedia: f.g }
        }),
        y = a('2Daw'),
        k = a('VPdC'),
        w = (function (e) {
          u()(a, e)
          var t = p()(a)
          function a() {
            var e
            r()(this, a)
            for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              m()(l()(e), '_handleAddMediaFiles', function (t) {
                var a = e.props,
                  n = a.addMedia,
                  r = a.location,
                  i = a.onChange,
                  o = a.onFailure,
                  s = a.processMultipleMedia,
                  l = e._getAcceptedFileInputs(),
                  c = Array.from(t).find(function (e) {
                    return l.includes(e.type)
                  })
                c &&
                  n([c], { location: r }).then(function (e) {
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
                  a = t.acceptGifs,
                  n = t.acceptVideo
                return Object(k.b)({ acceptGifs: a, acceptVideo: n })
              }),
              e
            )
          }
          return (
            o()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.acceptGifs,
                    a = e.acceptVideo,
                    n = e.accessibilityLabel,
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
                    acceptVideo: a,
                    accessibilityLabel: n,
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
            a
          )
        })(v.a.Component)
      m()(w, 'defaultProps', { acceptGifs: !1, acceptVideo: !1 })
      var C = g(w)
      t.default = C
    },
    P7wY: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return r
      }),
        a.d(t, 'b', function () {
          return i
        })
      var n = function (e, t, a) {
          var n = new Date(),
            r = n.getFullYear() - e,
            i = n.getMonth() + 1 - t
          if (i < 0) r -= 1
          else if (0 === i) {
            n.getDate() - a < 0 && (r -= 1)
          }
          return r
        },
        r = function (e, t, a) {
          return !!(e && t && a) && n(e, t, a) < 18
        },
        i = function () {
          return new Date().getFullYear() - 120
        }
    },
    RjwM: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        i = a('ERkP'),
        o = a.n(i),
        s = a('Lsrn'),
        l = a('k/Ka'),
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
    Rqga: function (e, t, a) {
      var n = a('ax0f'),
        r = Math.log,
        i = Math.LN2
      n(
        { target: 'Math', stat: !0 },
        {
          log2: function (e) {
            return r(e) / i
          },
        },
      )
    },
    S8sr: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return F
      })
      var n = a('yiKp'),
        r = a.n(n),
        i = a('VrFO'),
        o = a.n(i),
        s = a('Y9Ll'),
        l = a.n(s),
        c = a('1Pcy'),
        u = a.n(c),
        d = a('5Yy7'),
        p = a.n(d),
        h = a('2VqO'),
        m = a.n(h),
        _ = a('KEM+'),
        v = a.n(_),
        f = (a('Blm6'), a('KqXw'), a('Ysgh'), a('z84I'), a('jQ3i'), a('x4t0'), a('ERkP')),
        b = a.n(f),
        g = a('nS1w'),
        y = a('t62R'),
        k = a('p+r5'),
        w = a('3XMw'),
        C = a.n(w),
        I = a('6XNv'),
        E = a('rHpw'),
        x = a('aITJ'),
        S = a('MWbm'),
        T = C.a.jf83d091,
        P = C.a.af4abf2f,
        A = C.a.b871f28f,
        D = 1,
        F = (function (e) {
          p()(a, e)
          var t = m()(a)
          function a(e) {
            var n
            o()(this, a),
              (n = t.call(this, e)),
              v()(u()(n), '_handleSelectorChange', function (e, t) {
                var a = n.props,
                  i = a.day,
                  o = a.month,
                  s = a.year,
                  l = r()(r()({}, { day: i, month: o, year: s }), {}, v()({}, e, parseInt(t, 10)))
                n.props.onChange(l)
              }),
              v()(u()(n), '_handleDayChange', function (e) {
                n._handleSelectorChange('day', e)
              }),
              v()(u()(n), '_handleMonthChange', function (e) {
                n._handleSelectorChange('month', e)
              }),
              v()(u()(n), '_handleYearChange', function (e) {
                n._handleSelectorChange('year', e)
              }),
              v()(u()(n), '_handleDateChange', function (e) {
                var t = e.target.value.split('-'),
                  a = { year: parseInt(t[0], 10), month: parseInt(t[1], 10), day: parseInt(t[2], 10) }
                n.props.onChange(a)
              })
            var i = e.day,
              s = e.maxSelectableYear,
              l = e.minSelectableYear,
              c = e.month,
              d = e.year
            return (
              (n._errorID = 'DATE_INPUT_'.concat(D, '_ERROR')),
              (n._monthOptions = g.c()),
              (n._nativeDefaultValue = g.e(i, c, d)),
              (n._nativeMaxDate = g.e(31, 12, s)),
              (n._nativeMinDate = g.e(1, 1, l)),
              (D += 1),
              n
            )
          }
          return (
            l()(a, [
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t = this.props,
                    a = t.day,
                    n = t.month,
                    r = t.onChange,
                    i = t.year,
                    o = n && n !== e.month,
                    s = i && i !== e.year
                  ;(o || s) &&
                    (g
                      .b(n, i)
                      .map(function (e) {
                        return parseInt(e.value, 10)
                      })
                      .includes(a) ||
                      r({ month: n, year: i, day: void 0 }))
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
                    a = e.month,
                    n = e.year,
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
                    m = g.b(a, n),
                    _ = g.d(p, h, t, a)
                  return b.a.createElement(
                    S.a,
                    { accessibilityLabel: o, accessibilityRole: 'group', style: [O.selectorsContainer, d] },
                    b.a.createElement(I.a, {
                      accessibilityDescribedBy: i.month ? this._errorID : void 0,
                      autofocus: s,
                      hasError: i.month,
                      label: P,
                      onChange: this._handleMonthChange,
                      options: this._monthOptions,
                      style: O.monthSelector,
                      testID: l,
                      value: a ? ''.concat(a) : '',
                      withEmptyOption: !0,
                    }),
                    b.a.createElement(I.a, {
                      accessibilityDescribedBy: i.day ? this._errorID : void 0,
                      hasError: i.day,
                      label: T,
                      onChange: this._handleDayChange,
                      options: m,
                      style: O.daySelector,
                      testID: c,
                      value: t ? ''.concat(t) : '',
                      withEmptyOption: !0,
                    }),
                    b.a.createElement(I.a, {
                      accessibilityDescribedBy: i.year ? this._errorID : void 0,
                      hasError: i.year,
                      label: A,
                      onChange: this._handleYearChange,
                      options: _,
                      style: O.yearSelector,
                      testID: u,
                      value: n ? ''.concat(n) : '',
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
                    style: O.dateInputRoot,
                    type: 'date',
                  })
                },
              },
            ]),
            a
          )
        })(b.a.Component),
        O = E.a.create(function (e) {
          return {
            selectorsContainer: { flexDirection: 'row', marginVertical: e.spaces.space16 },
            monthSelector: { flexGrow: 2, marginRight: e.spaces.space12 },
            daySelector: { flexGrow: 1, marginRight: e.spaces.space12 },
            yearSelector: { flexGrow: 1 },
            dateInputRoot: { paddingHorizontal: 0 },
          }
        })
    },
    T8pk: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        i = a('ERkP'),
        o = a.n(i),
        s = a('Lsrn'),
        l = a('k/Ka'),
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
    TpKd: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return i
      }),
        a.d(t, 'c', function () {
          return o
        }),
        a.d(t, 'b', function () {
          return s
        })
      a('2G9S'), a('KqXw'), a('Ysgh')
      var n = a('mrHL'),
        r = 'external_referer'
      function i(e) {
        return Object(n.d)({ cookieName: r, featureSwitches: e })
      }
      function o(e, t) {
        var a = (t && t.encryptedReferralDetails) || '',
          i = (t && t.encryptedReferer) || '',
          o = t && void 0 !== t.referralType ? ''.concat(t.referralType) : ''
        if (a || i || o) {
          var s = ''.concat(encodeURIComponent(i), '|').concat(o, '|').concat(encodeURIComponent(a))
          Object(n.e)(r, s, {
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
          var a = t.split('|')
          return { encryptedReferer: a[0], referralType: a[1], encryptedReferralDetails: a[2] }
        }
      }
    },
    UnyZ: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return n
      })
      a('yH/f')
      var n = Object.freeze({ Active: 'active', Expand: 'expand', Remove: 'remove' })
    },
    UpKB: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        i = a('VrFO'),
        o = a.n(i),
        s = a('Y9Ll'),
        l = a.n(s),
        c = a('1Pcy'),
        u = a.n(c),
        d = a('5Yy7'),
        p = a.n(d),
        h = a('2VqO'),
        m = a.n(h),
        _ = a('KEM+'),
        v = a.n(_),
        f = (a('2G9S'), a('ho0z'), a('0zG9'), a('ERkP')),
        b = a.n(f),
        g = a('/yvb'),
        y = a('hUVV'),
        k = a('3XMw'),
        w = a.n(k),
        C = a('iKTg'),
        I = a('TaB8'),
        E = a('1zbE'),
        x = a('Ukpf'),
        S = a('cnVF'),
        T = a('TnY3'),
        P = a('0+0m'),
        A = a('v6aA'),
        D = a('2qJZ'),
        F = w.a.ib65b1c6,
        O = w.a.f55cebb7,
        L = w.a.g61ed8a4,
        N = { clientId: P.a, scope: 'name email', usePopup: !0 },
        R = (function (e) {
          p()(a, e)
          var t = m()(a)
          function a() {
            var e
            o()(this, a)
            for (var n = arguments.length, i = new Array(n), s = 0; s < n; s++) i[s] = arguments[s]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              v()(u()(e), 'state', { isScriptLoaded: !1 }),
              v()(
                u()(e),
                '_is3rdPartyIntegrationDisabled',
                Object(I.a)('responsive_web_3rd_party_category_sign_in_with_apple', e.context.featureSwitches),
              ),
              v()(u()(e), '_initAppleIDAuth', function () {
                var t = window.AppleID,
                  a = e.props.fetchSsoInitToken,
                  n = Object(D.c)(e.context.featureSwitches) ? 'https://'.concat(D.b) : 'https://'.concat(D.a)
                t &&
                  a(S.A.Apple).then(function (e) {
                    var a = e.state
                    t.auth.init(r()(r()({}, N), {}, { redirectURI: n, state: a }))
                  })
              }),
              v()(u()(e), '_handleOnPress', function () {
                var t = window.AppleID,
                  a = e.props,
                  n = a.analytics,
                  r = a.buttonState,
                  i = a.history,
                  o = a.personalizationSettings,
                  s = a.shouldPropagateP13nSettings,
                  l = a.ssoInitTokens,
                  c = o || {},
                  u = c.allowCookieUse,
                  d = c.allowDeviceAccess,
                  p = c.allowPartnerships,
                  h = c.allowPersonalization
                n.scribe({ component: 'apple_sign_in', element: r, action: 'click' }),
                  t.auth
                    .signIn()
                    .then(function (e) {
                      n.scribe({ component: 'apple_sign_in', element: r, action: 'success' })
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
                      var a = e.props.addToast
                      t.error !== P.g
                        ? (n.scribe({ component: 'apple_sign_in', element: r, action: 'failure' }), a({ text: L }))
                        : n.scribe({ component: 'apple_sign_in', element: 'auth', action: 'user_closed_popup' })
                    })
              }),
              e
            )
          }
          return (
            l()(a, [
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
                    a = e.buttonState,
                    n = e.style,
                    r = this.state.isScriptLoaded,
                    i = a === E.a.SignUp ? F : O
                  return this._is3rdPartyIntegrationDisabled
                    ? null
                    : b.a.createElement(g.a, {
                        backgroundColor: 'white',
                        borderColor: 'gray200',
                        children: i,
                        color: 'gray1100',
                        disabled: !r,
                        icon: b.a.createElement(C.a, null),
                        onPress: this._handleOnPress,
                        size: t,
                        style: n,
                      })
                },
              },
            ]),
            a
          )
        })(b.a.PureComponent)
      v()(R, 'contextType', A.a),
        v()(R, 'defaultProps', { buttonSize: 'xLarge', buttonState: 'signup' }),
        (t.a = Object(T.a)(Object(y.a)(R)))
    },
    VPdC: function (e, t, a) {
      'use strict'
      a.d(t, 'b', function () {
        return D
      })
      var n = a('97Jx'),
        r = a.n(n),
        i = a('m3Bd'),
        o = a.n(i),
        s = a('VrFO'),
        l = a.n(s),
        c = a('Y9Ll'),
        u = a.n(c),
        d = a('5Yy7'),
        p = a.n(d),
        h = a('2VqO'),
        m = a.n(h),
        _ = a('KEM+'),
        v = a.n(_),
        f = (a('2G9S'), a('7xRU'), a('ERkP')),
        b = a.n(f),
        g = a('3XMw'),
        y = a.n(g),
        k = a('cjZk'),
        w = 'fileInput',
        C = a('sjK1'),
        I = a('/Imo'),
        E = a('rHpw'),
        x = a('9HgX'),
        S = ['acceptGifs', 'acceptImages', 'acceptVideo', 'customMimeTypes', 'icon', 'style', 'withIcon'],
        T = y.a.b9960f31,
        P = { viewType: 'media_picker' },
        A = b.a.createElement(k.a, null),
        D = function (e) {
          var t = e.acceptGifs,
            a = e.acceptImages,
            n = void 0 === a || a,
            r = e.acceptVideo
          return (n ? x.b : []).concat(t ? [x.a] : []).concat(r ? C.a : [])
        },
        F = (function (e) {
          p()(a, e)
          var t = m()(a)
          function a() {
            return l()(this, a), t.apply(this, arguments)
          }
          return (
            u()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.acceptGifs,
                    a = e.acceptImages,
                    n = e.acceptVideo,
                    i = e.customMimeTypes,
                    s = e.icon,
                    l = e.style,
                    c = e.withIcon,
                    u = o()(e, S),
                    d = D({ acceptGifs: t, acceptImages: a, acceptVideo: n }).concat(i).join(',')
                  return b.a.createElement(
                    I.a,
                    r()({}, u, {
                      accept: d,
                      behavioralEventContext: P,
                      icon: c ? s : void 0,
                      style: [O.root, l],
                      testID: w,
                    }),
                  )
                },
              },
            ]),
            a
          )
        })(b.a.PureComponent)
      v()(F, 'defaultProps', {
        acceptGifs: !0,
        acceptImages: !0,
        acceptVideo: !0,
        customMimeTypes: [],
        accessibilityLabel: T,
        icon: A,
        size: 'medium',
        withIcon: !0,
      })
      var O = E.a.create(function (e) {
        return { root: { margin: '-'.concat(e.spaces.space12) } }
      })
      t.a = F
    },
    'aV/s': function (e, t, a) {
      'use strict'
      var n = a('VrFO'),
        r = a.n(n),
        i = a('Y9Ll'),
        o = a.n(i),
        s = a('1Pcy'),
        l = a.n(s),
        c = a('5Yy7'),
        u = a.n(c),
        d = a('2VqO'),
        p = a.n(d),
        h = a('KEM+'),
        m = a.n(h),
        _ = (a('2G9S'), a('hBvt'), a('uFXj'), a('ERkP')),
        v = a.n(_),
        f = a('t62R'),
        b = a('3XMw'),
        g = a.n(b),
        y = a('I4+6'),
        k = a('cm6r'),
        w = a('UnyZ'),
        C = a('rHpw'),
        I = a('MWbm'),
        E = a('hOZg'),
        x = a('iY63'),
        S = a('IMYl'),
        T = { active: g.a.e557ad8d, expand: g.a.e3a58c27, remove: g.a.h517e8d8 },
        P = (function (e) {
          u()(a, e)
          var t = p()(a)
          function a() {
            var e
            r()(this, a)
            for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o]
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
            o()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.accessibilityLabel,
                    a = e.avatar,
                    n = e.compact,
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
                    m = [A.root, n && A.compact, r && A.disabled, c && A.selected, u],
                    _ = [A.content, p && A.withIcon, a && ((n && A.withAvatarImageCompact) || A.withAvatarImage)],
                    b = y.a.generate({
                      backgroundColor: c ? C.a.theme.colors.primary : 'transparent',
                      color: c ? C.a.theme.colors.white : C.a.theme.colors.primary,
                    })
                  return v.a.createElement(
                    I.a,
                    { style: m },
                    v.a.createElement(
                      k.a,
                      {
                        accessibilityLabel: t || (o ? T[o] : ''),
                        disabled: r,
                        interactiveStyles: b,
                        link: i,
                        onPress: s,
                        style: _,
                      },
                      this._renderAvatar(),
                      v.a.createElement(
                        f.b,
                        {
                          color: c ? 'whiteOnColor' : 'text',
                          numberOfLines: 1,
                          selectable: !1,
                          style: A.text,
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
                            style: A.secondaryControl,
                          },
                          v.a.createElement(I.a, { style: A.secondaryBorder }, h),
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
                    a = this.props.selected,
                    n = [A.icon, a && A.iconSelected],
                    r = [A.icon]
                  switch (t) {
                    case w.a.Remove:
                      return v.a.createElement(E.a, { style: [A.dismissIcon, e && n] })
                    case w.a.Expand:
                      return v.a.createElement(x.a, { style: e ? n : r })
                    case w.a.Active:
                      return v.a.createElement(S.a, { style: n })
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
                    a = e.compact
                  return t
                    ? v.a.createElement(I.a, { style: [A.avatarContainer, a ? A.avatarCompact : A.avatar] }, t)
                    : null
                },
              },
            ]),
            a
          )
        })(v.a.PureComponent)
      m()(P, 'defaultProps', { compact: !1, disabled: !1, selected: !1 })
      var A = C.a.create(function (e) {
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
    doI8: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return s
      })
      var n = a('yiKp'),
        r = a.n(n),
        i = a('WpDa'),
        o = a('ZNT5')
      t.b = function (e) {
        var t = e.endpointParams,
          a = e.endpointUrl,
          n = e.timelineId
        return Object(o.a)({
          timelineId: n,
          getEndpoint: function (e) {
            return e.URT.fetchGeneric
          },
          getEndpointParams: function (e) {
            var n = e.count,
              i = e.cursor
            return r()(r()({}, t), {}, { cursor: 'string' == typeof i ? i : void 0, count: n, endpointUrl: a })
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
            var a = t.count,
              n = t.cursor
            return { cursor: 'string' == typeof n ? n : void 0, count: a, timelineId: e }
          },
          formatResponse: i.a,
          context: 'FETCH_GENERIC_TIMELINE_GQL',
          perfKey: 'genericGQL',
        })
      }
    },
    fS8x: function (e, t, a) {
      'use strict'
      var n = a('ERkP'),
        r = a.n(n),
        i = a('VrFO'),
        o = a.n(i),
        s = a('Y9Ll'),
        l = a.n(s),
        c = a('1Pcy'),
        u = a.n(c),
        d = a('5Yy7'),
        p = a.n(d),
        h = a('2VqO'),
        m = a.n(h),
        _ = a('KEM+'),
        v = a.n(_),
        f = a('/NU0'),
        b = a('rxPX'),
        g = a('AspN'),
        y = function (e, t) {
          return t.media ? t.media : Object(f.a)(t.mediaId) ? Object(g.k)(e, t.mediaId)[0] : void 0
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
        C = a('jHSc'),
        I = a('3XMw'),
        E = a.n(I),
        x = a('EeFI'),
        S = 'applyButton',
        T = a('/yvb'),
        P = a('rHpw'),
        A = E.a.gd80afba,
        D = E.a.a753a87f,
        F = (function (e) {
          p()(a, e)
          var t = m()(a)
          function a(e) {
            var n
            return (
              o()(this, a),
              (n = t.call(this, e)),
              v()(u()(n), '_getMedia', function () {
                var e = n.props.media
                return e && e.mediaFile && e.mediaFile.isImage ? e : null
              }),
              v()(u()(n), '_renderAppBarRightControl', function () {
                var e = n.state.isProcessing
                return r.a.createElement(
                  T.a,
                  { disabled: e, onPress: n._handleApplyButtonClick, size: 'small', testID: S, type: 'primaryFilled' },
                  D,
                )
              }),
              v()(u()(n), '_handleBackClick', function () {
                var e = n.props,
                  t = e.analytics,
                  a = e.onCancel
                t.scribe({ action: 'cancel' }), a && a()
              }),
              v()(u()(n), '_handleApplyButtonClick', function () {
                var e = n.props.onCropDone,
                  t = n._cropper.current
                if (t) {
                  var a = n.props,
                    r = a.analytics,
                    i = a.media,
                    o = a.mediaId,
                    s = a.onDone,
                    l = a.processMedia,
                    c = a.updateMediaUpload
                  n.setState({ isProcessing: !0 })
                  var u = t.getCropData(),
                    d = (i || {}).originalMediaFile,
                    p = !d || (0 === u.top && 0 === u.left && u.width === d.width && u.height === d.height)
                  Object(f.a)(o) &&
                    (e
                      ? (e(u), s())
                      : (c({ id: o, cropData: p ? void 0 : u }),
                        l(o).then(function () {
                          n.setState({ isProcessing: !1 }), r.scribe({ action: 'done' }), s()
                        })))
                }
              }),
              (n.state = { isProcessing: !1 }),
              (n._cropper = r.a.createRef()),
              e.media || e.onCancel(),
              n
            )
          }
          return (
            l()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.defaultAspectRatio,
                    a = e.history,
                    n = e.title,
                    i = e.withAspectRatioOptions,
                    o = e.withZoomControl,
                    s = this._getMedia()
                  return r.a.createElement(
                    C.b,
                    {
                      backButtonType: 'back',
                      containerStyle: O.root,
                      documentTitle: n || A,
                      history: a,
                      onBackClick: this._handleBackClick,
                      rightControl: this._renderAppBarRightControl(),
                      title: n || A,
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
            a
          )
        })(r.a.Component),
        O = P.a.create(function (e) {
          return { root: { flexShrink: 1, height: 650 } }
        }),
        L = w(F),
        N = a('X8FW'),
        R = P.a.create(function (e) {
          return { modal: { width: 600, maxWidth: '90vw' } }
        })
      t.a = function (e) {
        return r.a.createElement(
          N.b,
          { clickMaskToClose: !1, modalSize: 'fitChildren', style: R.modal },
          r.a.createElement(L, e),
        )
      }
    },
    gPQO: function (e, t, a) {
      'use strict'
      var n = a('97Jx'),
        r = a.n(n),
        i = a('yiKp'),
        o = a.n(i),
        s = a('VrFO'),
        l = a.n(s),
        c = a('Y9Ll'),
        u = a.n(c),
        d = a('1Pcy'),
        p = a.n(d),
        h = a('5Yy7'),
        m = a.n(h),
        _ = a('2VqO'),
        v = a.n(_),
        f = a('KEM+'),
        b = a.n(f),
        g =
          (a('+KXO'),
          a('KqXw'),
          a('MvUL'),
          a('hBpG'),
          a('7x/C'),
          a('3voH'),
          a('z84I'),
          a('JtPf'),
          a('jwue'),
          a('+oxZ'),
          a('ERkP')),
        y = a.n(g),
        k = (a('hBvt'), a('q82E')),
        w = a('m3Bd'),
        C = a.n(w),
        I = (a('LW0h'), a('wFPu'), a('RhWx')),
        E = a.n(I),
        x = (a('2G9S'), a('tQbP'), a('M+/F'), a('t62R')),
        S = a('YlqV'),
        T = function (e) {
          var t,
            a = e.entity,
            n = a.navigation_link,
            r = a.subtask_data_reference,
            i = e.onClick,
            s = e.onNavigate,
            l = e.subtaskInputs,
            c = e.children,
            u = {}
          if (n) {
            var d = n.link_type === k.m.ChromelessWeb
            u = o()(
              { withInteractiveStyling: !0 },
              d && n.url
                ? { link: { external: !0, pathname: n.url } }
                : {
                    accessibilityRole: 'button',
                    color: 'link',
                    onClick:
                      ((t = n),
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
        A = (function () {
          function e(t, a, n) {
            var r = this
            l()(this, e),
              b()(this, '_renderChildren', function (e) {
                var t = e.text
                if (!t) return []
                var a = r.fromIndex,
                  n = []
                return (
                  r.children.forEach(function (r) {
                    a < r.fromIndex &&
                      n.push(
                        y.a.createElement(x.b, { key: ''.concat(a, ',').concat(r.fromIndex) }, t.slice(a, r.fromIndex)),
                      ),
                      r.rangeObject && n.push(r.render(e)),
                      (a = r.toIndex)
                  }),
                  a < r.toIndex &&
                    n.push(y.a.createElement(x.b, { key: ''.concat(a, ',').concat(r.toIndex) }, t.slice(a, r.toIndex))),
                  n
                )
              }),
              (this.fromIndex = t),
              (this.toIndex = a),
              (this.rangeObject = n),
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
                    a = e.align,
                    n = e.color,
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
                    : y.a.createElement(x.b, { align: a, color: n, key: u, size: i, style: o, testID: s, weight: l }, c)
                },
              },
            ]),
            e
          )
        })(),
        D = (function (e) {
          m()(a, e)
          var t = v()(a)
          function a() {
            var e
            l()(this, a)
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              b()(p()(e), '_generateRichTextTree', function () {
                var t = e.props,
                  a = t.entities,
                  n = t.styling_ranges,
                  r = t.text,
                  i = [].concat(E()(null != n ? n : []), E()(null != a ? a : [])).sort(function (e, t) {
                    return t.to_index - t.from_index - (e.to_index - e.from_index)
                  }),
                  o = new A(0, (null == r ? void 0 : r.length) || 0)
                return (
                  i.forEach(function (e) {
                    o.insert(new A(e.from_index, e.to_index, e))
                  }),
                  o
                )
              }),
              e
            )
          }
          return (
            u()(a, [
              {
                key: 'render',
                value: function () {
                  return this._generateRichTextTree().render(this.props)
                },
              },
            ]),
            a
          )
        })(y.a.PureComponent),
        F = a('MWbm'),
        O = a('/yvb'),
        L = a('rHpw'),
        N = ['label']
      var R = L.a.create(function (e) {
          return { spaceBetween: { marginBottom: e.spaces.space16 }, detailText: { marginVertical: e.spaces.space16 } }
        }),
        B = function (e) {
          var t = e.actionDisabled,
            a = e.actionLabel,
            n = e.actionTestID,
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
            _ = e.subtaskInputs
          if (!a && !d) return null
          var v = 'primaryOutlined' === h,
            f = [
              { disabled: u, onPress: c, size: 'large', testID: p, type: null != h ? h : 'primaryText', label: d },
              { disabled: t, onPress: s, size: 'large', testID: n, type: null != i ? i : 'primaryFilled', label: a },
            ].filter(function (e) {
              var t = e.label
              return null != t
            })
          return (
            v && f.reverse(),
            y.a.createElement(
              F.a,
              { style: m },
              (null == o ? void 0 : o.text) &&
                _ &&
                y.a.createElement(
                  D,
                  r()({}, o, {
                    color: 'gray700',
                    onNavigate: l,
                    size: 'subtext2',
                    style: R.detailText,
                    subtaskInputs: _,
                  }),
                ),
              y.a.createElement(
                F.a,
                null,
                f.map(function (e, t) {
                  var a = e.label,
                    n = C()(e, N)
                  return y.a.createElement(
                    O.a,
                    r()({ key: a, style: f.length > 1 && t < f.length - 1 ? R.spaceBetween : void 0 }, n),
                    a,
                  )
                }),
              ),
            )
          )
        },
        V = (a('ho0z'), a('+/5o')),
        M = a('UpKB'),
        j = a('kG2l'),
        U = a('0+0m'),
        z = a('1zbE'),
        H = a('ddV6'),
        W = a.n(H)
      a('Ysgh')
      function G(e) {
        var t = e.number
        return y.a.createElement(
          F.a,
          { style: K.badge },
          y.a.createElement(x.b, { color: 'buttonWhite', weight: 'bold' }, t),
        )
      }
      var K = L.a.create(function (e) {
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
        q = a('iKTg'),
        Y = a('jmcQ'),
        X = a('wz7L'),
        Z = a('xrkw'),
        J = a('vMn4'),
        Q = a('yZDr'),
        $ = a('+1/s'),
        ee = a('Lsrn'),
        te = a('k/Ka'),
        ae = function () {
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
      ae.metadata = { width: 24, height: 24 }
      var ne = ae,
        re = a('4BrD'),
        ie = a('6s7X'),
        oe = {
          logo_apple: q.a,
          logo_google_g_color: Y.a,
          people_stroke: X.a,
          bar_chart: Z.a,
          money: J.a,
          sparkle_stroke: Q.a,
          topics_stroke: $.a,
          photo_person_stroke: ne,
          promoted_pill_stroke: re.a,
          information_circle: ie.a,
        },
        se = function (e) {
          var t = e.icon,
            a = e.style
          !(t in oe) &&
            t.startsWith('number_') &&
            (oe[t] = (function (e) {
              if (!e.startsWith('number_'))
                return function () {
                  return null
                }
              var t = e.split('number_'),
                a = W()(t, 2)[1]
              return function () {
                return y.a.createElement(G, { number: a })
              }
            })(t))
          var n = oe[t]
          return n ? y.a.createElement(n, { style: a }) : null
        },
        le = a('LbZ7'),
        ce = L.a.create(function (e) {
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
            a = e.onNavigate,
            n = e.subtaskInputs
          return t
            ? y.a.createElement(
                le.a,
                { style: ce.separatorContainer, withGutter: !0 },
                y.a.createElement(F.a, { style: ce.separatorColumn }, y.a.createElement(F.a, { style: ce.separator })),
                y.a.createElement(
                  D,
                  r()({ style: ce.separatorText }, t, { onNavigate: a, size: 'headline2', subtaskInputs: n }),
                ),
                y.a.createElement(F.a, { style: ce.separatorColumn }, y.a.createElement(F.a, { style: ce.separator })),
              )
            : y.a.createElement(F.a, { style: ce.separator })
        },
        de = L.a.create(function (e) {
          return {
            header: { marginBottom: e.spaces.space12 },
            centerText: { textAlign: 'center' },
            contentArea: { marginHorizontal: e.spaces.space32 },
            contentAreaCompact: {
              paddingHorizontal: e.spaces.space32,
              margin: 'auto',
              minWidth: U.b + 64,
              maxWidth: U.b + 64,
            },
            checkboxText: { flexShrink: 1, paddingRight: e.spaces.space12, width: '100%' },
            option: { marginTop: e.spaces.space12, flexDirection: 'row', justifyContent: 'space-between' },
            primaryButton: { marginTop: e.spaces.space16 },
            formTextInput: { paddingHorizontal: 0 },
            button: { width: '100%', margin: 'auto', marginVertical: e.spaces.space12 },
            ssoButton: { width: U.b, height: e.spaces.space40 },
          }
        }),
        pe = ['button', 'displayType', 'onNavigate', 'style', 'subtaskId', 'subtaskInputs'],
        he = function (e) {
          var t = e.button,
            a = e.displayType,
            n = void 0 === a ? k.b.Default : a,
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
            _ = y.a.useCallback(
              function (e) {
                i(d)
              },
              [d, i],
            )
          return y.a.createElement(
            y.a.Fragment,
            null,
            (function () {
              switch (n) {
                case k.b.GoogleSSO:
                  return y.a.createElement(j.a, {
                    buttonSize: p ? Object(S.b)(p) : 'medium',
                    buttonState: m,
                    displayType: U.e.Button,
                    style: [de.button, de.ssoButton],
                  })
                case k.b.AppleSSO:
                  return y.a.createElement(M.a, {
                    buttonSize: p ? Object(S.b)(p) : 'medium',
                    buttonState: m,
                    style: [de.button, de.ssoButton],
                  })
                default:
                  return y.a.createElement(
                    O.a,
                    r()({}, c, {
                      icon: u && y.a.createElement(se, { icon: u.icon }),
                      onPress: _,
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
        me = a('7N4s'),
        _e = a('TIdA'),
        ve = a('A91F'),
        fe = a('IMA+'),
        be = L.a.create(function (e) {
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
            a,
            n,
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
            _ = e.secondaryTextProp,
            v = e.subtaskInputs,
            f = e.userInfo,
            b = e.withHeaderImage,
            g =
              (null == d ? void 0 : d.header_button) &&
              !(
                !(t = d.header_button).icon ||
                t.style !== k.d.Text ||
                (null !== (a = t.navigation_link) && void 0 !== a && a.label)
              ),
            w = y.a.useContext(me.b).isModal
          return (
            d
              ? ((o = d.user),
                (s = d.header_image),
                (n = d.primary_text),
                (i = d.secondary_text),
                (l = 10 * L.a.theme.lineHeightsPx.body),
                (c = s ? (l * s.image.image_info.width) / s.image.image_info.height : 'initial'),
                (u = b && s && 'icon' === s.image_type))
              : ((n = 'string' == typeof h ? { text: h } : h), (i = 'string' == typeof _ ? { text: _ } : _)),
            s || n || i || o
              ? y.a.createElement(
                  F.a,
                  null,
                  b && s
                    ? y.a.createElement(
                        F.a,
                        {
                          style: {
                            marginHorizontal:
                              'full_width' === s.image_type || 'full_bleed_top' === s.image_type
                                ? '-'.concat(L.a.theme.spaces.space32)
                                : 'auto',
                            height: u ? l : 'initial',
                            width: u ? c : 'initial',
                          },
                        },
                        y.a.createElement(_e.a, {
                          accessibilityLabel: s.image.image_info.alt_text || '',
                          aspectMode: ve.a.exact(s.image.image_info.width / s.image.image_info.height),
                          image: s.image.image_info,
                        }),
                      )
                    : null,
                  y.a.createElement(
                    F.a,
                    { style: be.headingContainer },
                    n
                      ? y.a.createElement(
                          D,
                          r()({}, n, {
                            nativeID: V.b,
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
                          F.a,
                          { style: [be.subHeader, g && be.subHeaderRightAlignedButton] },
                          y.a.createElement(
                            F.a,
                            { style: g && be.secondaryTextRightAlignedButton },
                            i
                              ? y.a.createElement(D, r()({}, i, { color: 'gray700', onNavigate: p, subtaskInputs: v }))
                              : null,
                          ),
                          null != d && d.header_button
                            ? y.a.createElement(
                                F.a,
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
                      ? null != f
                        ? f
                        : y.a.createElement(fe.a, {
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
        ye = a('mCZD'),
        ke = 'ActionListNextButton',
        we = 'ActionListSkipButton',
        Ce = a('csss'),
        Ie = a('h0NW')
      function Ee(e) {
        var t,
          a,
          n = e.actionItem,
          i = e.link,
          o = e.onNavigate,
          s = e.subtaskId,
          l = e.subtaskInputs,
          c = e.updateFlow,
          u = n.action_data.link_data,
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
                D,
                r()({}, u.detail_text, { color: 'gray700', size: 'subtext2', subtaskInputs: l }),
              ),
              label: y.a.createElement(
                D,
                r()({}, u.text, {
                  size: 'headline2',
                  subtaskInputs: l,
                  text:
                    null !== (t = null === (a = u.text) || void 0 === a ? void 0 : a.text) && void 0 !== t
                      ? t
                      : u.link.label,
                }),
              ),
              link: '#',
              onPress: d,
            },
            Te(n.action_data.link_data.icon),
          ),
        )
      }
      function xe(e) {
        var t = e.actionItem,
          a = e.onNavigate,
          n = e.subtaskInputs
        return y.a.createElement(
          Ce.a,
          r()(
            {
              description: y.a.createElement(
                D,
                r()({}, t.action_data.text_data.detail_text, { color: 'gray700', size: 'subtext2', subtaskInputs: n }),
              ),
              label: y.a.createElement(
                D,
                r()({}, t.action_data.text_data.text, { onNavigate: a, size: 'headline2', subtaskInputs: n }),
              ),
            },
            Te(t.action_data.text_data.icon),
          ),
        )
      }
      function Se(e) {
        var t = e.actionItems,
          a = e.onNavigate,
          n = e.subtaskInputs,
          i = t.map(function (e) {
            var t,
              i,
              o = 'text' === e.action_type ? e.action_data.text_data : e.action_data.link_data
            return {
              label: y.a.createElement(
                D,
                r()({}, o.text, {
                  onNavigate: a,
                  subtaskInputs: n,
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
                    D,
                    r()({}, o.detail_text, { color: 'gray700', style: Pe.bulletListDescription, subtaskInputs: n }),
                  )
                : null,
              decoration: o.icon ? y.a.createElement(se, { icon: o.icon.icon, style: Pe.bulletIcon }) : null,
            }
          })
        return y.a.createElement(Ie.a, { items: i })
      }
      function Te(e) {
        return {
          thumbnail: e
            ? y.a.createElement(x.b, { size: 'headline2', style: Pe.icon }, y.a.createElement(se, { icon: e.icon }))
            : null,
          thumbnailSize: 'medium',
        }
      }
      var Pe = L.a.create(function (e) {
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
        Ae = function (e) {
          var t,
            a,
            n,
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
            _ = e.updateFlow
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
                (null == c || null === (a = c.header_image) || void 0 === a ? void 0 : a.image_type),
              footer: y.a.createElement(B, {
                actionLabel: null == u ? void 0 : u.label,
                actionTestID: ke,
                onAction: function () {
                  u && (_(h, { link: u.link_id }), i(u))
                },
                onSecondaryAction: function () {
                  d && (_(h, { link: d.link_id }), i(d))
                },
                secondaryActionLabel: null == d ? void 0 : d.label,
                secondaryActionTestID: we,
              }),
              header: y.a.createElement(ge, { header: c, onNavigate: i, subtaskInputs: m, withHeaderImage: !0 }),
              hideLogo:
                'full_bleed_top' ===
                (null == c || null === (n = c.header_image) || void 0 === n ? void 0 : n.image_type),
              providePadding: !0,
            }),
            p === k.a.BulletList
              ? y.a.createElement(Se, r()({}, e, { actionItems: l }))
              : l.map(function (t, a) {
                  return y.a.createElement(
                    F.a,
                    { key: a },
                    'text' === t.action_type
                      ? y.a.createElement(xe, r()({}, e, { actionItem: t }))
                      : y.a.createElement(Ee, r()({}, e, { actionItem: t, link: t.action_data.link_data.link })),
                  )
                }),
          )
        },
        De = a('eb3s'),
        Fe = (function (e) {
          m()(a, e)
          var t = v()(a)
          function a() {
            var e
            l()(this, a)
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]
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
                var a = e.props,
                  n = a.onNavigate,
                  r = a.subtaskId
                ;(0, a.updateFlow)(r, { link: t.link_id }), n(t)
              }),
              e
            )
          }
          return (
            u()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.onNavigate,
                    a = e.subtask,
                    n = e.subtaskInputs,
                    i = a.primary_text
                      ? y.a.createElement(
                          D,
                          r()({}, a.primary_text, { nativeID: V.b, onNavigate: t, subtaskInputs: n }),
                        )
                      : void 0,
                    o = a.secondary_text
                      ? y.a.createElement(D, r()({}, a.secondary_text, { onNavigate: t, subtaskInputs: n }))
                      : void 0,
                    s = a.cancel_link,
                    l = a.next_link,
                    c = s && s.label
                  return y.a.createElement(De.a, {
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
            a
          )
        })(y.a.Component),
        Oe = a('fs1G'),
        Le = a('cmUU'),
        Ne = (function (e) {
          m()(a, e)
          var t = v()(a)
          function a(e) {
            var n
            return (
              l()(this, a),
              (n = t.call(this, e)),
              b()(p()(n), '_handleCtaClick', function (e) {
                var t = n.props,
                  a = t.onNavigate,
                  r = t.subtaskId
                ;(0, t.updateFlow)(r, { link: e.link_id }), a(e)
              }),
              b()(p()(n), '_handlePrimaryActionClick', function () {
                n.setState({ downloadLinkClicked: !0 }), n._handleCtaClick(n.props.subtask.primary_action_link)
              }),
              b()(p()(n), '_handleSecondaryActionClick', function () {
                var e = n.props.subtask.secondary_action_link
                e && n._handleCtaClick(e)
              }),
              (n.state = { downloadLinkClicked: !1 }),
              n
            )
          }
          return (
            u()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.onNavigate,
                    a = e.passthroughOcfScreenProps,
                    n = e.subtask,
                    i = e.subtaskInputs,
                    o = this.state.downloadLinkClicked,
                    s = n.primary_text
                      ? y.a.createElement(
                          D,
                          r()({}, n.primary_text, { nativeID: V.b, onNavigate: t, subtaskInputs: i }),
                        )
                      : null,
                    l = !o || !n.primary_action_text_after_click,
                    c = (o && n.primary_action_text_after_click) || n.primary_action_link.label,
                    u = n.primary_image_url
                      ? y.a.createElement(_e.a, {
                          accessibilityLabel: '',
                          aspectMode: ve.a.exact(1),
                          image: n.primary_image_url || '',
                        })
                      : null,
                    d = n.secondary_text
                      ? y.a.createElement(D, r()({}, n.secondary_text, { onNavigate: t, subtaskInputs: i }))
                      : null,
                    p = y.a.createElement(F.a, null, u, d)
                  return y.a.createElement(
                    ye.a,
                    r()({ hideLogo: !0 }, a),
                    y.a.createElement(Le.a, {
                      actionLabel: c || '',
                      actionType: Object(S.c)(n.primary_action_style),
                      headline: s,
                      onAction: l ? this._handlePrimaryActionClick : Oe.a,
                      onClose: Oe.a,
                      onSecondaryAction: this._handleSecondaryActionClick,
                      secondaryActionLabel: (n.secondary_action_link || {}).label,
                      secondaryActionType: n.secondary_action_style && Object(S.c)(n.secondary_action_style),
                      subtext: p,
                      withCloseButton: !1,
                    }),
                    this.props.errorDialog,
                  )
                },
              },
            ]),
            a
          )
        })(y.a.Component),
        Re = a('ZS3b'),
        Be = a('jhWN'),
        Ve = a('jV+4'),
        Me = a('5mJL'),
        je = L.a.create(function (e) {
          return {
            userContainerStacked: { alignItems: 'center', marginTop: e.spaces.space8, marginBottom: e.spaces.space16 },
            userAvatarStacked: { marginBottom: e.spaces.space8 },
            userNameStacked: { alignItems: 'center' },
            avatarColumnCentered: { justifyContent: 'center' },
          }
        }),
        Ue = function (e) {
          var t = e.displayType,
            a = void 0 === t ? k.D.stacked : t,
            n = e.user,
            i = e.userCaption
          if (!n) return null
          var o = function (e) {
              return y.a.createElement(Be.a, {
                accessibilityHidden: !0,
                focusable: !1,
                size: 'xxLarge',
                style: e,
                uri: n.profile_image_url_https,
              })
            },
            s = function (t) {
              var a = e.onNavigate,
                o = e.subtaskInputs
              return y.a.createElement(
                y.a.Fragment,
                null,
                y.a.createElement(Ve.a, {
                  isProtected: n.protected,
                  isVerified: n.verified,
                  name: n.name,
                  screenName: i ? void 0 : n.screen_name,
                  withStackedLayout: !0,
                }),
                i ? y.a.createElement(D, r()({}, i, { color: 'gray700', onNavigate: a, subtaskInputs: o })) : null,
              )
            }
          switch (a) {
            case k.D.stacked:
              return y.a.createElement(
                F.a,
                { style: je.userContainerStacked },
                o(je.userAvatarStacked),
                s(je.userNameStacked),
              )
            case k.D.compact:
              return y.a.createElement(
                Me.a,
                { avatarCell: o(), avatarCellStyle: je.avatarColumnCentered, cellStyle: je.avatarColumnCentered },
                s(),
              )
            default:
              return null
          }
        },
        ze = 'OCF_CallToAction_Button',
        He = a('feu+'),
        We = (function (e) {
          m()(a, e)
          var t = v()(a)
          function a() {
            var e
            l()(this, a)
            for (var n = arguments.length, i = new Array(n), s = 0; s < n; s++) i[s] = arguments[s]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              b()(p()(e), '_getCtaButtonProps', function () {
                var t = e.props.subtask,
                  a = t.buttons || [],
                  n = W()(a, 3),
                  r = n[0],
                  i = (r = void 0 === r ? {} : r).navigation_link,
                  s = r.style,
                  l = n[1],
                  c = (l = void 0 === l ? {} : l).navigation_link,
                  u = l.style,
                  d = n[2],
                  p = (d = void 0 === d ? {} : d).navigation_link,
                  h = d.style,
                  m = i || t.primary_action_link,
                  _ = s || t.primary_action_style,
                  v = {
                    actionLabel: m.label || '',
                    actionType: _ && Object(S.c)(_),
                    onAction: m && e._handleCtaClick(m),
                  },
                  f = c || t.secondary_action_link,
                  b = u || t.secondary_action_style,
                  g = {
                    secondaryActionLabel: f ? f.label : void 0,
                    secondaryActionType: b && Object(S.c)(b),
                    onSecondaryAction: f && e._handleCtaClick(f),
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
                  a = t.onNavigate,
                  n = t.subtask,
                  i = n.detail_text,
                  o = n.header,
                  s = n.primary_text,
                  l = n.secondary_text,
                  c = t.subtaskInputs
                return {
                  primaryText: y.a.createElement(
                    D,
                    r()({}, (o && o.primary_text) || s, { nativeID: V.b, onNavigate: a, subtaskInputs: c }),
                  ),
                  secondaryText:
                    o || l
                      ? y.a.createElement(D, r()({}, (o && o.secondary_text) || l, { onNavigate: a, subtaskInputs: c }))
                      : null,
                  detailText: i ? y.a.createElement(D, r()({}, i, { onNavigate: a, subtaskInputs: c })) : null,
                }
              }),
              b()(p()(e), '_handleCtaClick', function (t) {
                return function () {
                  var a = e.props,
                    n = a.onNavigate,
                    r = a.subtaskId
                  ;(0, a.updateFlow)(r, { link: t.link_id }), n(t)
                }
              }),
              e
            )
          }
          return (
            u()(a, [
              {
                key: 'render',
                value: function () {
                  var e,
                    t,
                    a,
                    n = this.props,
                    i = n.onNavigate,
                    s = n.passthroughOcfScreenProps,
                    l = n.subtask,
                    c = n.subtaskInputs,
                    u = s.onBackClick,
                    d = this._getCtaText(),
                    p = d.detailText,
                    h = d.primaryText,
                    m = d.secondaryText,
                    _ = l.style === k.f.HalfCover
                  if (l.header_image) {
                    var v = l.header_image.image.image_info,
                      f = { url: v.url, height: v.height, width: v.width }
                    ;(t = function (e) {
                      var t = e.style
                      return y.a.createElement(
                        F.a,
                        { style: t },
                        y.a.createElement(_e.a, { accessibilityLabel: v.alt_text || '', image: f }),
                      )
                    }),
                      (a = 'illustration')
                  } else _ && (a = 'none')
                  var b = o()(
                    {
                      children: y.a.createElement(Ue, {
                        onNavigate: i,
                        subtaskInputs: c,
                        user: null === (e = l.header) || void 0 === e ? void 0 : e.user,
                      }),
                      footer: p,
                      graphic: t,
                      graphicDisplayMode: a,
                      headline: h,
                      onClose: Oe.a,
                      primaryButtonTestID: ze,
                      subtext: m,
                      withCloseButton: !1,
                    },
                    this._getCtaButtonProps(),
                  )
                  return _
                    ? y.a.createElement(He.a, r()({}, b, { isFullHeightOnMobile: !1 }))
                    : y.a.createElement(
                        ye.a,
                        r()({ hideAppBar: !u, hideLogo: !0 }, s),
                        y.a.createElement(Le.a, b),
                        this.props.errorDialog,
                      )
                },
              },
            ]),
            a
          )
        })(y.a.Component),
        Ge = a('rxPX'),
        Ke = a('0KEI'),
        qe = a('auX9'),
        Ye = a('kGix'),
        Xe = Object(Ge.a)()
          .propsFromState(function () {
            return { fetchStatus: qe.g, multiAccountUsers: qe.j }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandlerMultiListFetch: Object(Ke.createLocalApiErrorHandlerWithContextFactory)(
                'ACCOUNT_SWITCHER_MULTI_LIST_FETCH',
              ),
              fetchMultiAccountListIfNeeded: qe.d,
            }
          })
          .adjustStateProps(function (e) {
            var t = e.fetchStatus,
              a = e.multiAccountUsers
            return { fetchStatus: t === Ye.a.NONE ? Ye.a.LOADING : t, multiAccountUsers: a }
          }),
        Ze = a('v//M'),
        Je = (function (e) {
          m()(a, e)
          var t = v()(a)
          function a() {
            var e
            l()(this, a)
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              b()(p()(e), '_executeSubtaskAction', function () {
                var t = e.props,
                  a = t.navigationLink,
                  n = t.onError,
                  r = t.onNavigate,
                  i = t.subtaskAction
                try {
                  i()
                    .then(function () {
                      return r(a, !0)
                    })
                    .catch(n)
                } catch (o) {
                  n(o)
                }
              }),
              e
            )
          }
          return (
            u()(a, [
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
            a
          )
        })(y.a.Component)
      b()(Je, 'defaultProps', { onError: Oe.a })
      var Qe = a('v6aA'),
        $e = (function (e) {
          m()(a, e)
          var t = v()(a)
          function a() {
            var e
            l()(this, a)
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              b()(p()(e), '_render', function () {
                var t = e.props,
                  a = t.multiAccountUsers,
                  n = t.onNavigate,
                  r = t.subtask,
                  i = t.subtaskId,
                  o = t.updateFlow,
                  s = r.false_link,
                  l = r.true_link,
                  c = r.user_id,
                  u =
                    a.filter(function (e) {
                      return e.user_id === c
                    }).length > 0
                return y.a.createElement(Je, {
                  navigationLink: u ? l : s,
                  onNavigate: n,
                  subtaskAction: function () {
                    return o(i, { link: u ? l.link_id : s.link_id }), Promise.resolve()
                  },
                  subtaskId: i,
                })
              }),
              b()(p()(e), '_handleFetch', function () {
                var t = e.props,
                  a = t.createLocalApiErrorHandlerMultiListFetch
                ;(0, t.fetchMultiAccountListIfNeeded)().catch(a())
              }),
              e
            )
          }
          return (
            u()(a, [
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
                    ? y.a.createElement(Ze.a, {
                        fetchStatus: e,
                        onRequestRetry: this._handleFetch,
                        render: this._render,
                      })
                    : this._render()
                },
              },
            ]),
            a
          )
        })(y.a.PureComponent)
      b()($e, 'contextType', Qe.a)
      var et = Xe($e),
        tt = (a('LJOr'), a('vrRf'), a('jQ3i'), a('x4t0'), a('kFen'), a('qd3W'), a('zrOZ')),
        at = a('VwDm'),
        nt = 'ChoiceSelectionInput',
        rt = 'ChoiceSelectionNextButton',
        it = 'ChoiceSelectionSkipButton',
        ot = a('6OUF'),
        st = a('XiMS'),
        lt = a('hznd'),
        ct = a('fyvP'),
        ut = (function (e) {
          m()(a, e)
          var t = v()(a)
          function a() {
            var e, n, r
            l()(this, a)
            for (var i = arguments.length, o = new Array(i), s = 0; s < i; s++) o[s] = arguments[s]
            return (
              (r = t.call.apply(t, [this].concat(o))),
              b()(p()(r), 'state', {
                selectedChoices:
                  null !==
                    (e =
                      null !==
                        (n = Object(S.e)(r.props.subtaskInputs, {
                          key: 'selected_choices',
                          subtask_id: r.props.subtaskId,
                        })) && void 0 !== n
                        ? n
                        : r.props.subtask.selected_choices) && void 0 !== e
                    ? e
                    : [],
                prevSubtaskId: r.props.subtaskId,
                searchText: '',
              }),
              b()(p()(r), '_handleCancelButtonClick', function () {
                var e = r.props,
                  t = e.onNavigate,
                  a = e.subtask.skip_link,
                  n = e.subtaskId,
                  i = e.updateFlow
                a && (i(n, { link: a.link_id }), t(a))
              }),
              b()(p()(r), '_handleNextButtonClick', function () {
                var e = r.props,
                  t = e.onNavigate,
                  a = e.subtask.next_link,
                  n = e.subtaskId,
                  i = e.updateFlow,
                  o = r.state.selectedChoices
                a && (i(n, { link: a.link_id, selected_choices: o }), t(a))
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
              a,
              [
                {
                  key: 'render',
                  value: function () {
                    var e = this.props,
                      t = e.onNavigate,
                      a = e.passthroughOcfScreenProps,
                      n = e.subtask,
                      i = n.detail_text,
                      o = n.header,
                      s = n.next_link,
                      l = n.primary_text,
                      c = n.search,
                      u = n.secondary_text,
                      d = n.skip_link,
                      p = e.subtaskInputs,
                      h = this.state.searchText
                    return y.a.createElement(
                      ye.a,
                      r()({}, a, {
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
                          Icon: at.a,
                          autoFocus: c.is_focused,
                          isCompact: !0,
                          onChange: this._handleSearchTextChange,
                          onClear: this._handleSearchTextClear,
                          placeholder: c.hint_text,
                          style: mt.searchBox,
                          testID: nt,
                          value: h,
                          withClearButton: !0,
                        }),
                      y.a.createElement(F.a, { style: mt.choicesContainer }, this._renderChoices()),
                      i && y.a.createElement(D, r()({}, i, { onNavigate: t, subtaskInputs: p })),
                    )
                  },
                },
                {
                  key: '_renderCheckboxQuestion',
                  value: function (e) {
                    var t = this.props,
                      a = t.onNavigate,
                      n = t.subtaskInputs,
                      i = this.state.selectedChoices.indexOf(e.id) > -1
                    return y.a.createElement(
                      F.a,
                      { accessibilityRole: 'label', key: e.id, style: [de.option, mt.checkboxRow, mt.cursor] },
                      y.a.createElement(
                        D,
                        r()({}, e.text, { onNavigate: a, style: de.checkboxText, subtaskInputs: n }),
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
                      a = t.onNavigate,
                      n = t.subtask,
                      i = t.subtaskInputs,
                      o = n.search,
                      s = n.selection_type,
                      l = n.style,
                      c = (function (e, t) {
                        var a = e.choices,
                          n = e.search,
                          r = e.sections
                        if (n && r && r.length && !t) {
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
                              choices: a.filter(function (e) {
                                return o.has(e.id)
                              }),
                              hasMore: !0,
                            }
                          }
                        }
                        if (n && t)
                          return (function (e, t) {
                            var a = dt(t),
                              n = e.filter(function (e) {
                                return dt(e.text.text).includes(a)
                              })
                            if (n.length > 50) return { choices: n.slice(0, 50), hasMore: !0 }
                            return { choices: n, hasMore: !1 }
                          })(a, t)
                        return { choices: a, hasMore: !1 }
                      })(n, this.state.searchText).choices
                    if (0 === c.length && o)
                      return y.a.createElement(D, r()({}, o.no_results_text, { onNavigate: a, subtaskInputs: i }))
                    if ('boxed' === l)
                      switch (s) {
                        case 'single_select':
                          return y.a.createElement(
                            F.a,
                            { style: mt.tileContainer },
                            y.a.createElement(lt.a, {
                              name: 'single-choice',
                              onChange: this._handleRadioChange,
                              options: c.map(function (e) {
                                var t = e.id,
                                  a = e.subtext
                                return { value: t, label: e.text.text, helpText: null == a ? void 0 : a.text }
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
                              a = e.subtext
                            return { label: e.text.text, value: t, helpText: null == a ? void 0 : a.text }
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
                      a = this.state.selectedChoices
                    if (e && t) {
                      if ('multi_select' === t) return this._verifyMultiChoiceValidity(a)
                      if ('single_select' === t) return 1 === a.length
                    }
                  },
                },
                {
                  key: '_verifyMultiChoiceValidity',
                  value: function (e) {
                    var t = this.props.subtask.next_link_options
                    if (t) {
                      var a = t.max_enable_count,
                        n = t.min_enable_count,
                        r = e.length
                      return !(n && r < n) && !(a && r > a)
                    }
                    return !1
                  },
                },
                {
                  key: '_handleMultiSelection',
                  value: function (e, t) {
                    var a,
                      n = this.state.selectedChoices
                    ;(a =
                      n && n.includes(e)
                        ? n.filter(function (t) {
                            return t !== e
                          })
                        : n.concat([e])),
                      this.setState({ selectedChoices: a })
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
            a
          )
        })(y.a.Component)
      function dt(e) {
        return e.toLowerCase().normalize('NFD')
      }
      var pt,
        ht,
        mt = L.a.create(function (e) {
          return {
            searchBox: { marginBottom: e.spaces.space16 },
            checkboxRow: { justifyContent: 'space-between' },
            choicesContainer: { marginBottom: e.spaces.space16 },
            cursor: { cursor: 'pointer' },
            tileContainer: { marginTop: e.spaces.space12 },
          }
        }),
        _t = (a('WNMA'), a('zh9S')),
        vt = a('9D1O'),
        ft = a('1YZw'),
        bt = a('G6rE'),
        gt = a('oEGd'),
        yt = a('hqKg'),
        kt = a('RqPI'),
        wt = function (e) {
          return function (t, a) {
            if ('single_sign_on' !== Ct(t, a)) {
              var n = a.location.query[e]
              return Array.isArray(n) ? n[0] : n
            }
          }
        },
        Ct = function (e, t) {
          return t.flowName || t.location.pathname.slice(t.match.path.length)
        },
        It = wt('country_code'),
        Et = Object(yt.createSelector)(
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
        At = Object(yt.createSelector)(
          function (e, t) {
            return wt('overrides')(e, t)
          },
          function (e) {
            return Object(S.d)(e)
          },
        ),
        Dt = Object(yt.createStructuredSelector)({
          currentSubtask: vt.k,
          previouslySubmittedSubtaskId: vt.q,
          countryCode: It,
          debugOverrides: At,
          isNative: St,
          testCountryCode: Tt,
          flowName: Ct,
          inputFlowData: Et,
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
        Ft = Object(gt.d)(Dt, function (e) {
          var t = e.ocfModule
          return {
            addToast: ft.b,
            callInteractiveSpinnerPath: vt.a,
            callOnboardingPath: vt.b,
            clearFlow: t.clearFlow,
            createLocalApiErrorHandler: Object(Ke.createLocalApiErrorHandlerWithContextFactory)('OCF_FLOW'),
            removeContacts: vt.j,
            fetchTemporaryPassword: vt.d,
            fetchUsers: bt.e.fetchMany,
            navigateSubtask: vt.h,
            startFlow: t.startFlow,
            submitFlow: t.submitFlow,
            updateFlow: t.updateFlow,
            googleAnalyticsPageView: _t.a,
            googleAnalyticsSendEvent: _t.b,
            scribeAction: _t.c,
            scribePageImpression: _t.d,
            verifyCredentials: kt.A,
          }
        }),
        Ot = {
          createLocalApiErrorHandler: Object(Ke.createLocalApiErrorHandlerWithContextFactory)('CONTACTS_SYNC'),
          uploadAddressBook: function (e) {
            return function (t, a, n) {
              return n.api.Contacts.uploadAddressBook(e)
            }
          },
        },
        Lt = Object(gt.b)(Ot),
        Nt = a('SrIh'),
        Rt = a('Irs7'),
        Bt = (function (e) {
          m()(a, e)
          var t = v()(a)
          function a() {
            var e
            l()(this, a)
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              b()(p()(e), '_handleCtaClick', function (t) {
                var a = e.props,
                  n = a.onNavigate,
                  r = a.subtaskId
                ;(0, a.updateFlow)(r, { link: t.link_id }), n(t)
              }),
              b()(p()(e), '_handlePrimaryActionClick', function () {
                try {
                  window.navigator.contacts
                    .select(['name', 'email', 'tel'], { multiple: !0 })
                    .then(e._handleContactResults)
                } catch (t) {
                  Object(Nt.a)(t), e._handleSecondaryActionClick()
                }
              }),
              b()(p()(e), '_handleContactResults', function (t) {
                var a = e.props,
                  n = a.analytics,
                  r = a.createLocalApiErrorHandler,
                  i = a.uploadAddressBook,
                  o = t.map(function (e) {
                    var t = e.email,
                      a = e.name,
                      n = e.tel
                    return { name: a[0] || '', email_addresses: t, phone_numbers: n }
                  })
                if (0 === o.length) return n.scribeAction('cancel')
                n.scribe({ action: 'success', data: { event_value: o.length } }),
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
            u()(a, [
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
                    a = e.passthroughOcfScreenProps,
                    n = e.subtask,
                    i = e.subtaskInputs,
                    o = n.detail_text
                      ? y.a.createElement(D, r()({}, n.detail_text, { onNavigate: t, subtaskInputs: i }))
                      : null
                  return y.a.createElement(
                    ye.a,
                    r()({ hideLogo: !0 }, a),
                    y.a.createElement(Le.a, {
                      actionLabel: n.next_link.label || '',
                      footer: o,
                      headline: n.primary_text || '',
                      onAction: this._handlePrimaryActionClick,
                      onClose: Oe.a,
                      onTertiaryAction: this._handleSecondaryActionClick,
                      subtext: '',
                      tertiaryActionLabel: (n.skip_link || {}).label,
                      withCloseButton: !1,
                    }),
                  )
                },
              },
            ]),
            a
          )
        })(y.a.Component),
        Vt = Object(Rt.a)(Lt(Bt), { element: 'contacts_sync' }),
        Mt = a('6/RC'),
        jt = Object(yt.createSelector)(
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
        Ut = {
          createLocalApiErrorHandler: Object(Ke.createLocalApiErrorHandlerWithContextFactory)('EMAIL_CONTACTS_SYNC'),
          importStatus: vt.e,
          scribeAction: _t.c,
          syncContacts: vt.y,
        },
        zt = Object(gt.f)(jt, Ut),
        Ht = a('3XMw'),
        Wt = a.n(Ht),
        Gt = a('lUZE'),
        Kt = a('8jkQ'),
        qt = a('0zXz'),
        Yt = Wt.a.cea71013,
        Xt = (function (e) {
          m()(a, e)
          var t = v()(a)
          function a(e) {
            var n
            return (
              l()(this, a),
              (n = t.call(this, e)),
              b()(p()(n), '_startContactImports', function (e) {
                n._scribeOAuthAction('accepted')
                var t = n.props,
                  a = t.createLocalApiErrorHandler
                ;(0, t.syncContacts)(e)
                  .then(function (e) {
                    return n._pollImportStatus()
                  })
                  .catch(function (e) {
                    a()(e), n.setState({ importFinished: !0 })
                  })
              }),
              b()(p()(n), '_handlePrimaryActionClick', function () {
                var e = n.props.subtask,
                  t = e.authorization_url
                if (e.open_in_new_tab && Mt.canUseDOM) {
                  var a = window.innerWidth,
                    r = 'width=500,height=500,top=0,left='.concat(a - 500, ',toolbar=no,location=yes')
                  window.open(t, 'twitter_oauth', r).focus()
                } else Kt.b.navigateTo(t)
              }),
              b()(p()(n), '_handleTertiaryActionClick', function () {
                var e = n.props,
                  t = e.onNavigate,
                  a = e.subtask,
                  r = e.subtaskId,
                  i = e.updateFlow,
                  o = a.skip_link
                i(r, { link: o.link_id }), t(o)
              }),
              b()(p()(n), '_scribeOAuthAction', function (e) {
                ;(0,
                n.props
                  .scribeAction)({ page: 'onboarding', section: 'email_contacts_sync', component: 'oauth_prompt', element: 'permission', action: e })
              }),
              b()(p()(n), '_handleEvent', function (e) {
                if (e.origin === 'https://'.concat(window.location.hostname)) {
                  var t = o()(
                    { callback_url: 'https://'.concat(window.location.hostname).concat(window.location.pathname) },
                    e.data,
                  )
                  !t.error && t.state && n._startContactImports(t)
                }
              }),
              b()(p()(n), '_pollImportStatus', function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1
                if (e > 10) n.setState({ importFinished: !0 })
                else {
                  var t = n.props,
                    a = t.createLocalApiErrorHandler,
                    r = t.importStatus
                  n._timer = setTimeout(function () {
                    r()
                      .then(function (t) {
                        switch (t.status) {
                          case k.e.Success:
                            n.setState({ importFinished: !0 })
                            break
                          case k.e.NotFound:
                            n._pollImportStatus(e + 1)
                            break
                          default:
                            n.setState({ importFinished: !0 })
                        }
                      })
                      .catch(function (e) {
                        a()(e), n.setState({ importFinished: !0 })
                      })
                  }, 1e3)
                }
              }),
              (n.state = { importFinished: void 0 }),
              (n._navigating = !1),
              window.addEventListener('message', n._handleEvent, !1),
              n
            )
          }
          return (
            u()(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.importError,
                    a = e.location,
                    n = e.onNavigate,
                    r = e.passthroughOcfScreenProps.history,
                    i = e.startImport,
                    o = e.subtask,
                    s = e.subtaskId,
                    l = e.updateFlow
                  this._showLoadingSpinner = i
                  var c = o.decline_link
                  if ('access_denied' === t) this._scribeOAuthAction('declined'), c && (l(s, { link: c.link_id }), n(c))
                  else if (i) {
                    var u = a.query,
                      d = u.error,
                      p = u.state,
                      h = { callback_url: 'https://'.concat(window.location.hostname).concat(a.pathname) }
                    d && 'string' == typeof d && (h.error = d),
                      p && 'string' == typeof p && (h.state = p),
                      r && r.replace(a.pathname),
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
                    a = e.subtask,
                    n = e.subtaskId,
                    r = e.updateFlow,
                    i = this.state.importFinished,
                    o = a.next_link
                  !this._navigating && i && ((this._navigating = !0), r(n, { link: o.link_id }), t(o))
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.errorDialog,
                    a = e.onNavigate,
                    n = e.passthroughOcfScreenProps,
                    i = e.subtask,
                    o = e.subtaskInputs,
                    s = i.accept_text,
                    l = i.detail_text,
                    c = i.primary_text,
                    u = i.secondary_text,
                    d = i.skip_link,
                    p = y.a.createElement(D, r()({}, c, { nativeID: V.b, onNavigate: a, subtaskInputs: o })),
                    h = u ? y.a.createElement(D, r()({}, u, { onNavigate: a, subtaskInputs: o })) : null,
                    m = l ? y.a.createElement(D, r()({}, l, { onNavigate: a, subtaskInputs: o })) : null
                  return this._showLoadingSpinner
                    ? y.a.createElement(Ze.a, {
                        fetchStatus: Ye.a.LOADING,
                        loadingMessage: Yt,
                        onRequestRetry: Oe.a,
                        render: qt.a,
                        retryable: !1,
                      })
                    : y.a.createElement(
                        ye.a,
                        r()({ hideLogo: !0 }, n),
                        y.a.createElement(Le.a, {
                          actionLabel: s,
                          footer: m,
                          graphic: Gt.a,
                          graphicStyle: Zt.twitterIcon,
                          headline: p,
                          onAction: this._handlePrimaryActionClick,
                          onClose: Oe.a,
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
            a
          )
        })(y.a.Component),
        Zt = L.a.create(function (e) {
          return { twitterIcon: { color: e.colors.brandColor } }
        }),
        Jt = zt(Xt),
        Qt = Object(yt.createSelector)(vt.o, vt.x, function (e, t) {
          return { navigationContext: e, verificationSendFailureMessage: t }
        }),
        $t = {
          createLocalApiErrorHandler: Object(Ke.createLocalApiErrorHandlerWithContextFactory)(
            'OCF_FLOW_EMAIL_VERIFICATION',
          ),
          getVerificationStatus: vt.f,
          verifyIdentifier: vt.B,
        },
        ea = Object(gt.f)(Qt, $t),
        ta = a('k49u'),
        aa = a('OIs+'),
        na = Wt.a.e4ff75a9,
        ra = Wt.a.e4f6bd9e,
        ia = b()({}, aa.a.Offline, na),
        oa = function (e, t, a) {
          var n,
            r = b()({}, ta.a.AccessDeniedByBouncer, {
              customAction: function (t) {
                Object(Ke.bouncerError)(t, { flow: e })
              },
            })
          if (a)
            n = o()(
              o()({}, r),
              {},
              {
                customErrorHandler: function (n) {
                  var r = W()(n.errors, 1)[0]
                  return (
                    r.code === ta.a.AccessDeniedByBouncer
                      ? Object(Ke.bouncerError)(r, { flow: e })
                      : a(t || (r.code && ia[r.code]) || ra),
                    []
                  )
                },
              },
            )
          else if (t) {
            var i,
              s = { toast: { text: t } }
            n = o()(
              ((i = {}),
              b()(i, ta.a.ValidationFailure, s),
              b()(i, ta.a.OnboardingFlowRetriableFailure, s),
              b()(i, ta.a.OnboardingFlowFailure, s),
              b()(i, 'defaultToast', { text: t }),
              b()(i, 'showToast', !0),
              i),
              r,
            )
          } else {
            var l
            n = o()(
              o()({}, r),
              {},
              ((l = {}),
              b()(l, aa.a.Offline, { toast: { text: ia[aa.a.Offline] } }),
              b()(l, 'defaultToast', { text: ra }),
              b()(l, 'showToast', !0),
              l),
            )
          }
          return n
        },
        sa = a('p+r5'),
        la = 'email',
        ca = (function (e) {
          m()(a, e)
          var t = v()(a)
          function a(e) {
            var n
            l()(this, a),
              (n = t.call(this, e)),
              b()(p()(n), '_sendEmailVerificationRequest', function () {
                var e = n.props,
                  t = e.createLocalApiErrorHandler,
                  a = e.onNavigate,
                  r = e.subtask,
                  i = e.subtaskInputs,
                  o = e.verifyIdentifier,
                  s = (r.email && Object(S.g)(i, r.email)) || void 0,
                  l = (r.name && Object(S.g)(i, r.name)) || void 0
                return o({ email: s, display_name: l })
                  .then(function (e) {
                    n.setState({ email: s })
                  })
                  .catch(function (e) {
                    var i = n.props,
                      o = i.flowName,
                      s = i.verificationSendFailureMessage
                    t(oa(o, s || ra))(e), a(r.fail_link)
                  })
              }),
              b()(p()(n), '_handleCodeUpdated', function (e) {
                n.setState({ pinCode: e.target.value })
              }),
              b()(p()(n), '_startStatusPolling', function () {
                var e = n.props,
                  t = e.createLocalApiErrorHandler,
                  a = e.getVerificationStatus,
                  r = e.subtask,
                  i = e.subtaskInputs,
                  o = r.email.subtask_data_reference,
                  s = o ? i[o.subtask_id][o.key] : void 0
                n._timer = setTimeout(function () {
                  a({ email: s })
                    .then(function (e) {
                      e.verified
                        ? (n.setState({ pinCode: e.pin_code }), n._clearTimer(), n._handleDoneButtonClick())
                        : (n._clearTimer(), n._startStatusPolling())
                    })
                    .catch(function (e) {
                      t()(e), n._clearTimer(), n._startStatusPolling()
                    })
                }, 1e3)
              }),
              b()(p()(n), '_clearTimer', function () {
                n._timer && clearTimeout(n._timer)
              }),
              b()(p()(n), '_handleDoneButtonClick', function () {
                var e = n.props,
                  t = e.onNavigate,
                  a = e.subtask,
                  r = e.subtaskId,
                  i = e.updateFlow,
                  o = n.state,
                  s = o.email
                i(r, { code: o.pinCode, email: s, link: a.next_link.link_id }), t(a.next_link)
              })
            var r = e.subtaskId,
              i = e.subtaskInputs,
              o = Object(S.e)(i, { key: la, subtask_id: r }, '') || ''
            return (n.state = { email: o, pinCode: '' }), n
          }
          return (
            u()(a, [
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
                    a = e.passthroughOcfScreenProps,
                    n = e.progressIndication,
                    i = e.subtask,
                    o = e.subtaskInputs,
                    s = i.next_link,
                    l = i.primary_text,
                    c = i.secondary_text,
                    u = y.a.createElement(
                      D,
                      r()({}, i.detail_text, { color: 'link', onNavigate: t, style: ua.detailLink, subtaskInputs: o }),
                    )
                  return y.a.createElement(
                    ye.a,
                    r()({}, a, {
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
                      progressIndication: n,
                      providePadding: !0,
                    }),
                    y.a.createElement(sa.a, {
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
            a
          )
        })(y.a.Component),
        ua = L.a.create(function (e) {
          return { detailLink: { marginTop: e.spaces.space16 } }
        }),
        da = ea(ca),
        pa = a('S8sr'),
        ha = a('mN6z'),
        ma = 'ocfEnterDateNextLink',
        _a = 'ocfEnterDateSkipLink',
        va = { day: void 0, month: void 0, year: void 0 },
        fa = (function (e) {
          m()(a, e)
          var t = v()(a)
          function a(e) {
            var n
            l()(this, a),
              (n = t.call(this, e)),
              b()(p()(n), '_handleDateChange', function (e) {
                n.setState({ date: e })
              }),
              b()(p()(n), '_isCompleteDate', function (e) {
                return !!(e && e.year && e.month && e.day)
              }),
              b()(p()(n), '_isDateEmpty', function () {
                var e = n.state.date
                return Object(ha.a)(e, va)
              }),
              b()(p()(n), '_meetsMinYearRequirement', function (e) {
                var t,
                  a,
                  r = n.props.subtask.valid_interval
                return !(
                  null != r &&
                  null !== (t = r.min) &&
                  void 0 !== t &&
                  t.year &&
                  !(e.year && e.year >= (null == r || null === (a = r.min) || void 0 === a ? void 0 : a.year))
                )
              }),
              b()(p()(n), '_meetsMaxYearRequirement', function (e) {
                var t,
                  a,
                  r = n.props.subtask.valid_interval
                return !(
                  null != r &&
                  null !== (t = r.max) &&
                  void 0 !== t &&
                  t.year &&
                  !(e.year && e.year <= (null == r || null === (a = r.max) || void 0 === a ? void 0 : a.year))
                )
              }),
              b()(p()(n), '_isDateValid', function () {
                var e = n.state.date
                return n._isCompleteDate(e) && n._meetsMinYearRequirement(e) && n._meetsMaxYearRequirement(e)
              }),
              b()(p()(n), '_dateErrorMessage', function () {
                var e = n.state.date
                if (n._isCompleteDate(e)) {
                  var t = n.props.subtask,
                    a = t.max_date_error,
                    r = t.min_date_error,
                    i = n._meetsMinYearRequirement(e)
                  return n._meetsMaxYearRequirement(e)
                    ? i || null == r
                      ? void 0
                      : r.text
                    : null == a
                    ? void 0
                    : a.text
                }
              }),
              b()(p()(n), '_handleDoneButtonClick', function () {
                var e = n.props,
                  t = e.onNavigate,
                  a = e.subtask.next_link,
                  r = e.subtaskId,
                  i = e.updateFlow,
                  o = n.state.date
                o && n._isDateValid() && (i(r, { date: o, link: a.link_id }), t(a))
              }),
              b()(p()(n), '_handleSkipButtonClick', function () {
                var e = n.props,
                  t = e.onNavigate,
                  a = e.subtask.skip_link,
                  r = e.subtaskId,
                  i = e.updateFlow
                a && i(r, { link: a.link_id }), a && t(a)
              })
            var r = n.props,
              i = r.subtaskId,
              o = r.subtaskInputs,
              s = Object(S.e)(o, { key: 'date', subtask_id: i }, void 0) || va
            return (n.state = { date: s }), n
          }
          return (
            u()(a, [
              {
                key: 'render',
                value: function () {
                  var e,
                    t,
                    a = this.props,
                    n = a.errorDialog,
                    i = a.onNavigate,
                    o = a.passthroughOcfScreenProps,
                    s = a.subtask,
                    l = a.subtaskInputs,
                    c = s.detail_text,
                    u = s.hint_text,
                    d = s.next_link,
                    p = s.selectable_interval,
                    h = s.skip_link,
                    m = this.state.date,
                    _ = void 0 === m ? {} : m
                  return y.a.createElement(
                    ye.a,
                    r()({}, o, {
                      footer: y.a.createElement(B, {
                        actionDisabled: !this._isDateValid(),
                        actionLabel: (h && this._isDateEmpty()) || null == d ? void 0 : d.label,
                        actionTestID: ma,
                        onAction: this._handleDoneButtonClick,
                        onSecondaryAction: this._handleSkipButtonClick,
                        secondaryActionLabel: h && this._isDateEmpty() ? (null == h ? void 0 : h.label) : void 0,
                        secondaryActionTestID: _a,
                      }),
                      header: y.a.createElement(ge, {
                        header: s.header,
                        onNavigate: i,
                        subtaskInputs: l,
                        withHeaderImage: !0,
                      }),
                      providePadding: !0,
                    }),
                    y.a.createElement(pa.a, {
                      autofocus: !0,
                      day: _.day,
                      errorMessage: this._dateErrorMessage(),
                      label: u,
                      maxSelectableYear: null == p || null === (e = p.max) || void 0 === e ? void 0 : e.year,
                      minSelectableYear: null == p || null === (t = p.min) || void 0 === t ? void 0 : t.year,
                      month: _.month,
                      onChange: this._handleDateChange,
                      year: _.year,
                    }),
                    c ? y.a.createElement(D, r()({}, c, { color: 'gray700', onNavigate: i, subtaskInputs: l })) : null,
                    n,
                  )
                },
              },
            ]),
            a
          )
        })(y.a.Component),
        ba = (a('iKE+'), a('1LXv'), a('e/gN'), a('DZ+c'), a('3uku'), a('RgK2')),
        ga = a.n(ba),
        ya = a('3zvM'),
        ka = a('lMB6'),
        wa = a('FgXs'),
        Ca = ['localValidator'],
        Ia = function (e) {
          return { valid: !0 }
        }
      function Ea() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.localValidator,
          a = void 0 === t ? Ia : t,
          n = C()(e, Ca),
          r = Object(ya.e)(
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
              n,
            ),
          )
        ;(r.clear = function () {
          return function (e) {
            return e({ type: r.customActionTypes.clear.SUCCESS })
          }
        }),
          (r.validate = function (e, t) {
            return function (n) {
              var i = a(e, t)
              return i.valid ? n(r.fetchOneIfNeeded(e, t)) : (n(r.add(b()({}, e, i))), Promise.resolve())
            }
          })
        var i = function (e) {
            return r.selectState(e).fetchStatus || ga.a
          },
          s = function (e, t) {
            return Object(wa.a)(t, function (t, a) {
              var n = e[a] || {}
              return o()(o()({}, n), {}, { valid: !!n.valid || t === Ye.a.FAILED, isLoading: t === Ye.a.LOADING })
            })
          }
        return (r.selectEntitiesWithFetchStatus = Object(yt.createSelector)(r.selectAll, i, s)), ka.a.register(r)
      }
      var xa = new RegExp('^[a-zA-Z0-9_\\-+\\.!\\&]+@(?:[a-zA-Z0-9\\-_]+\\.)+[a-zA-Z]{2,63}$'),
        Sa = Wt.a.hc72e1fc,
        Ta = Ea({
          namespace: 'emailValidity',
          fetchOneContext: 'FETCH_EMAIL_VALIDITY',
          fetchOneEndpoint: function (e) {
            return e.Validity.isEmailAvailable
          },
          fetchOneParams: function (e, t) {
            var a = W()(e, 1)[0]
            return o()({ email: a }, t)
          },
          localValidator: function (e) {
            var t = xa.test(e)
            return { errorMessage: Sa, valid: t }
          },
        }),
        Pa =
          (a('tVqn'),
          function (e, t) {
            return t.module.selectEntitiesWithFetchStatus(e)
          }),
        Aa = Object(Ge.a)()
          .propsFromState(function () {
            return { validity: Pa }
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
        Da = a('VY6S'),
        Fa = ['value'],
        Oa = (function (e) {
          m()(a, e)
          var t = v()(a)
          function a(e, n) {
            var r
            l()(this, a),
              (r = t.call(this, e, n)),
              b()(p()(r), '_setInputRef', function (e) {
                r._input = e
              }),
              b()(p()(r), '_handleValueChange', function (e) {
                var t = r.props,
                  a = t.onChange,
                  n = t.validationParams,
                  i = e.target.value.trim()
                r._validateDebounced(o()({ value: i }, n)), r.setState({ value: i }), a && a(e)
              }),
              b()(p()(r), '_getIsValid', function (e, t) {
                return !!(t && e[t] && e[t].valid)
              })
            var i = e.defaultValue || ''
            return (
              (r.state = { value: i, isValid: r._getIsValid(e.validity, i) }),
              (r._validateDebounced = Object(Da.a)(function (e) {
                var t = e.value,
                  a = C()(e, Fa)
                return r.props.validate(t, a).catch(r.props.createLocalApiErrorHandler())
              }, 500)),
              r
            )
          }
          return (
            u()(a, [
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
                    a = t.defaultValue,
                    n = t.validationParams
                  a && this._validateDebounced(o()({ value: a }, n)),
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
                  var a = this.props.validity,
                    n = this.state.value
                  if (a !== e.validity || n !== t.value) {
                    var r = this._getIsValid(e.validity, t.value)
                    this.state.isValid !== r && this.setState({ isValid: r })
                  }
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e, t) {
                  var a = this.state.value,
                    n = t.isValid !== this.state.isValid,
                    r = !Object(ha.a)(e.validationParams, this.props.validationParams)
                  n
                    ? this.props.onValidityChange(this.state.isValid)
                    : a &&
                      r &&
                      (this.props.clearValidity(),
                      this._validateDebounced(o()({ value: a }, this.props.validationParams)))
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.autoComplete,
                    a = e.autoFocus,
                    n = e.editable,
                    r = e.label,
                    i = e.name,
                    o = e.style,
                    s = e.type,
                    l = e.validity,
                    c = this.state.value,
                    u = c && l[c] ? l[c].errorMessage : ''
                  return y.a.createElement(sa.a, {
                    autoComplete: t,
                    autoFocus: a,
                    editable: n,
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
            a
          )
        })(y.a.Component)
      b()(Oa, 'defaultProps', { label: '' })
      var La = Aa(Oa),
        Na = a('aWzz'),
        Ra = a('H9wA'),
        Ba = {
          autoComplete: Na.string,
          autoFocus: Na.bool,
          defaultValue: Na.string,
          editable: Na.bool,
          label: Na.string,
          name: Na.string.isRequired,
          onChange: Na.func,
          onRef: Na.func.isRequired,
          onValidityChange: Na.func.isRequired,
          style: Ra.a.style,
          type: Na.string,
        },
        Va =
          (o()(
            o()({}, Ba),
            {},
            {
              clearValidity: Na.func.isRequired,
              createLocalApiErrorHandler: Na.func.isRequired,
              module: Na.object.isRequired,
              validate: Na.func.isRequired,
              validity: Na.object.isRequired,
            },
          ),
          ['onRef']),
        Ma = function (e) {
          var t = e.onRef,
            a = C()(e, Va)
          return y.a.createElement(La, r()({ module: Ta, onRef: t, type: 'email' }, a))
        },
        ja = (a('KOtZ'), a('uFXj'), a('/Dbh')),
        Ua = Wt.a.d5568440,
        za = Ea({
          namespace: 'passwordValidity',
          fetchOneContext: 'FETCH_PASSWORD_VALIDITY',
          fetchOneEndpoint: function (e) {
            return e.Validity.fetchPasswordStrength
          },
          fetchOneParams: function (e, t) {
            var a = W()(e, 1)[0]
            return o()({ password: a }, t)
          },
          localValidator: function (e, t) {
            var a = !(!t || !t.username) && e === t.username,
              n = e.length >= ja.b,
              r = e.length <= ja.a,
              i = Ua
            return (
              n ? r || (i = Ke.NEW_PASSWORD_LONG) : (i = Ke.NEW_PASSWORD_SHORT),
              { errorMessage: !a && n && r ? void 0 : i, valid: n && r && !a }
            )
          },
        }),
        Ha = Object(Ge.a)()
          .propsFromState(function () {
            return { validityMap: za.selectEntitiesWithFetchStatus }
          })
          .propsFromActions(function () {
            return {
              clearPasswordValidity: za.clear,
              createLocalApiErrorHandler: Object(Ke.createLocalApiErrorHandlerWithContextFactory)(
                'PASSWORD_FIELD_CONTEXT',
              ),
              validator: za.validate,
            }
          })
          .withAnalytics({ page: 'onboarding', component: 'password_entry' }),
        Wa = Wt.a.dec3c9b8,
        Ga = Wt.a.fa69a1ca,
        Ka = Wt.a.aacf5085,
        qa = (function (e) {
          m()(a, e)
          var t = v()(a)
          function a(e) {
            var n
            l()(this, a),
              (n = t.call(this, e)),
              b()(p()(n), '_validate', function (e, t) {
                n.props.validator(e, t).catch(n.props.createLocalApiErrorHandler()).then(n._onValidationUpdated(e))
              }),
              b()(p()(n), '_validateDebounced', Object(Da.a)(n._validate, 500)),
              b()(p()(n), '_onValidationUpdated', function (e) {
                return function () {
                  var t = n.props,
                    a = t.analytics,
                    r = t.customValidator,
                    i = t.onPasswordValidated,
                    o = t.validityMap,
                    s = (e && o[e] ? o[e] : {}).valid,
                    l = void 0 !== s && s
                  r && 'string' == typeof e && 0 === e.length && (l = r().valid),
                    n.setState({ valid: l }),
                    a.scribe({ element: 'entered_password', action: l ? 'valid' : 'invalid' }),
                    i(l)
                }
              }),
              b()(p()(n), '_renderFormTextInput', function () {
                var e = n.props,
                  t = e.autoComplete,
                  a = e.autoFocus,
                  r = e.customValidator,
                  i = e.helperText,
                  o = e.label,
                  s = e.onSubmitEditing,
                  l = e.showPasswordVisibilityIcon,
                  c = e.validityMap,
                  u = n.state,
                  d = u.password,
                  p = u.revealed,
                  h = n.state.valid,
                  m = (c[d] || {}).errorMessage,
                  _ = void 0 === m ? '' : m
                r && 0 === _.length && ((_ = r().errorMessage), (h = r().valid))
                var v = l
                  ? i
                  : y.a.createElement(
                      x.b,
                      {
                        accessibilityRole: 'button',
                        color: 'link',
                        onPress: n._handleVisibilityToggle,
                        style: Ya.toggleLink,
                      },
                      p ? Ka : Ga,
                    )
                return y.a.createElement(sa.a, {
                  autoComplete: t,
                  autoFocus: a,
                  errorText: _,
                  helperText: v,
                  invalid: !h,
                  label: o || Wa,
                  name: 'password',
                  onChange: n._handlePasswordUpdated,
                  onSubmitEditing: h ? s : void 0,
                  showPasswordVisibilityIcon: l,
                  style: de.formTextInput,
                  type: p ? 'text' : 'password',
                  value: d,
                })
              }),
              b()(p()(n), '_handleVisibilityToggle', function () {
                n.setState({ revealed: !n.state.revealed })
              }),
              b()(p()(n), '_handlePasswordUpdated', function (e) {
                var t = n.props,
                  a = t.onPasswordChange,
                  r = t.skipPasswordValidation,
                  i = t.userIdentifier,
                  o = e.target.value
                r || n._validateDebounced(o, { username: i }), n.setState({ password: o }), a(o)
              })
            var r = e.defaultValue
            return (n.state = { revealed: !1, password: r || '', valid: !0 }), n
          }
          return (
            u()(a, [
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
                    a = e.userIdentifier
                  return y.a.createElement(
                    F.a,
                    { style: [de.formTextInput, t] },
                    a ? y.a.createElement('input', { name: 'username', type: 'hidden', value: a }) : null,
                    this._renderFormTextInput(),
                  )
                },
              },
            ]),
            a
          )
        })(y.a.Component)
      b()(qa, 'defaultProps', {
        autoComplete: 'on',
        onPasswordChange: Oe.a,
        onPasswordValidated: Oe.a,
        skipPasswordValidation: !1,
      })
      var Ya = L.a.create(function (e) {
          return { toggleLink: { marginTop: e.spaces.space4 } }
        }),
        Xa = Ha(qa),
        Za = L.a.create(function (e) {
          return { textField: { width: '100%' }, textFieldDetails: { marginBottom: e.spaces.space4 } }
        }),
        Ja = function (e) {
          var t = e.autoComplete,
            a = e.autoFocus,
            n = void 0 !== a && a,
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
            _ = d.detail_text,
            v = d.hint_text,
            f = _
              ? y.a.createElement(
                  D,
                  r()({}, _, { color: 'gray700', onNavigate: o, style: Za.textFieldDetails, subtaskInputs: u }),
                )
              : null
          return m === k.C.Password || m === k.C.NewPassword
            ? y.a.createElement(
                Xa,
                r()({}, l, {
                  autoComplete: t || (m === k.C.Password ? 'current-password' : 'new-password'),
                  autoFocus: n,
                  helperText: f,
                  label: v || '',
                  onPasswordChange: i,
                  onPasswordValidated:
                    null !== (h = null == l ? void 0 : l.onPasswordValidated) && void 0 !== h ? h : Oe.a,
                  onSubmitEditing: s,
                  style: [de.formTextInput, Za.textField, c],
                }),
              )
            : y.a.createElement(sa.a, {
                autoComplete: null != t ? t : 'on',
                autoFocus: n,
                helperText: f,
                label: v || '',
                name: 'text',
                onChange: p,
                onSubmitEditing: s,
                style: [de.formTextInput, Za.textField, c],
              })
        },
        Qa = Wt.a.c52be451,
        $a = Wt.a.cfd2f35d,
        en = Wt.a.gea6cc19,
        tn = Wt.a.i769e50a,
        an = Wt.a.ec129eb6,
        nn = Wt.a.f1b50489,
        rn = Wt.a.deaf5b15,
        on = (function (e) {
          m()(a, e)
          var t = v()(a)
          function a() {
            var e
            l()(this, a)
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]
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
                  a = t.addToast,
                  n = t.removeContacts
                n &&
                  n()
                    .then(function () {
                      e.setState({ disableRemoveContactsButton: !0 }), a({ text: an, withClearButton: !0 })
                    })
                    .catch(function () {
                      a({ action: { label: rn, onAction: e._handleRemoveContacts }, text: nn, withAutoDismiss: !0 })
                    })
              }),
              b()(p()(e), '_handleRemoveContactsCancel', function () {
                e.setState({ showRemoveContactsDialog: !1 })
              }),
              e
            )
          }
          return (
            u()(a, [
              {
                key: 'render',
                value: function () {
                  var e,
                    t = this.props,
                    a = t.onNavigate,
                    n = t.removeContactsSetting,
                    i = t.subtaskInputs,
                    o = this.state.disableRemoveContactsButton
                  return y.a.createElement(
                    F.a,
                    null,
                    y.a.createElement(
                      D,
                      r()({}, n.primary_text, { onNavigate: a, style: sn.header, subtaskInputs: i }),
                    ),
                    y.a.createElement(
                      D,
                      r()({}, n.secondary_text, {
                        color: 'gray700',
                        onNavigate: a,
                        size: 'subtext2',
                        style: sn.subtext,
                        subtaskInputs: i,
                      }),
                    ),
                    y.a.createElement(
                      F.a,
                      null,
                      null !== (e = n.value_data) && void 0 !== e && e.action_data
                        ? y.a.createElement(
                            O.a,
                            { disabled: o, onPress: this._handleRemoveContactsClick, type: 'destructiveText' },
                            n.value_data.action_data.link.label,
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
                    ? y.a.createElement(De.a, {
                        cancelButtonLabel: $a,
                        confirmButtonLabel: Qa,
                        headline: en,
                        onCancel: this._handleRemoveContactsCancel,
                        onConfirm: this._handleRemoveContactsConfirm,
                        onMaskClick: this._handleRemoveContactsCancel,
                        text: tn,
                      })
                    : null
                },
              },
            ]),
            a
          )
        })(y.a.Component),
        sn = L.a.create(function (e) {
          return {
            header: { marginTop: e.spaces.space12, marginBottom: e.spaces.space12 },
            subtext: { marginBottom: e.spaces.space20 },
          }
        }),
        ln = on,
        cn = a('KNZn'),
        un = a('2MR/'),
        dn = Wt.a.dd4a83a5,
        pn = (function (e) {
          m()(a, e)
          var t = v()(a)
          function a(e) {
            var n
            l()(this, a),
              (n = t.call(this, e)),
              b()(p()(n), '_handleActionClick', function () {
                var e,
                  t,
                  a = n.props,
                  r = a.onNavigate,
                  i =
                    null === (e = a.settingValue.value_data) ||
                    void 0 === e ||
                    null === (t = e.action_data) ||
                    void 0 === t
                      ? void 0
                      : t.link
                i && r(i)
              }),
              b()(p()(n), '_handleButtonNavigation', function (e, t) {
                var a = n.props,
                  r = a.onNavigate,
                  i = a.updateFlow
                t === k.t.NextButton && (null == i || i(e)), r && e && r(e)
              }),
              b()(p()(n), '_getSettingValueFromSubtaskInputs', function (e) {
                var t,
                  a,
                  r = n.props,
                  i = r.subtaskId,
                  o = r.subtaskInputs,
                  s = e.value_identifier,
                  l = e.value_type,
                  c = (Object(S.e)(o, { key: k.s, subtask_id: i }, []) || []).find(function (e) {
                    return e.key === s
                  })
                c &&
                  Object(S.i)(l) &&
                  (t = null === (a = c.response_data.boolean_data) || void 0 === a ? void 0 : a.result)
                return t
              }),
              b()(p()(n), '_handleSettingGroupClick', function () {
                var e = n.props,
                  t = e.onSettingGroupClick,
                  a = e.settingValue
                t && t(a)
              }),
              b()(p()(n), '_handleSettingToggle', function () {
                var e = n.props,
                  t = e.onSettingToggle,
                  a = e.settingValue,
                  r = a.value_identifier
                r && (n.setState(o()(o()({}, n.state), {}, b()({}, r, !n.state[r]))), t && t(a))
              }),
              b()(p()(n), '_handleSettingTextChange', function (e) {
                var t = n.props,
                  a = t.onSettingTextChanged,
                  r = t.settingValue
                null == a || a(r, e)
              }),
              b()(p()(n), '_handleTextFieldOnEditingSubmit', function () {
                var e = n.props,
                  t = e.nextLink,
                  a = e.onNavigate,
                  r = e.updateFlow
                t && (null == r || r(t), a(t))
              }),
              b()(p()(n), '_addToast', function (e) {
                n.props.addToast && n.props.addToast(e)
              }),
              b()(p()(n), '_getButtonDisplayType', function (e) {
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
                d = n._getSettingValueFromSubtaskInputs(r)
              if (void 0 === d)
                d = null == i || null === (u = i.boolean_data) || void 0 === u ? void 0 : u.initial_value
              n.state = b()({}, s, d)
            }
            return n
          }
          return (
            u()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props.settingValue,
                    a = t.primary_text,
                    n = t.secondary_text,
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
                    (a || n) &&
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
                          F.a,
                          { style: hn.tweetDisclosure },
                          y.a.createElement(un.a, { label: dn }, o()),
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
                    a = e.settingValue,
                    n = e.subtaskInputs,
                    i = a.primary_text,
                    o = a.secondary_text
                  return y.a.createElement(
                    F.a,
                    { style: i && hn.header },
                    i
                      ? y.a.createElement(
                          D,
                          r()({}, i, { onNavigate: t, size: 'headline1', subtaskInputs: n, weight: 'bold' }),
                        )
                      : null,
                    o
                      ? y.a.createElement(
                          D,
                          r()({}, o, {
                            color: 'gray700',
                            onNavigate: t,
                            size: 'body',
                            style: i && hn.secondaryText,
                            subtaskInputs: n,
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
                    a = e.settingValue,
                    n = e.subtaskInputs,
                    r = a.value_data,
                    i = a.value_identifier
                  if (null == r || !r.text_field) return null
                  var o = i === k.t.UserIdentifier
                  return y.a.createElement(Ja, {
                    autoComplete: o ? 'username' : void 0,
                    onChange: this._handleSettingTextChange,
                    onNavigate: t,
                    onSubmitEditing: this._handleTextFieldOnEditingSubmit,
                    subtaskInputs: n,
                    textField: r.text_field,
                  })
                },
              },
              {
                key: '_renderDestructiveAction',
                value: function () {
                  var e = this.props,
                    t = e.onNavigate,
                    a = e.removeContacts,
                    n = e.settingValue,
                    r = e.subtaskInputs
                  return y.a.createElement(
                    F.a,
                    { style: { marginBottom: L.a.theme.spaces.space16 } },
                    y.a.createElement(ln, {
                      addToast: this._addToast,
                      onNavigate: t,
                      removeContacts: a,
                      removeContactsSetting: n,
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
                    a = t.onNavigate,
                    n = t.settingValue,
                    r = t.subtaskInputs,
                    i = n.value_data
                  return y.a.createElement(ue, {
                    label: null == i || null === (e = i.separator) || void 0 === e ? void 0 : e.label,
                    onNavigate: a,
                    subtaskInputs: r,
                  })
                },
              },
              {
                key: '_renderAction',
                value: function () {
                  var e,
                    t,
                    a = this.props,
                    n = a.onNavigate,
                    i = a.settingValue,
                    o = a.subtaskInputs,
                    s =
                      null === (e = i.value_data) || void 0 === e || null === (t = e.action_data) || void 0 === t
                        ? void 0
                        : t.link.label
                  return y.a.createElement(
                    F.a,
                    null,
                    y.a.createElement(
                      D,
                      r()({}, i.primary_text, { onNavigate: n, style: hn.header, subtaskInputs: o }),
                    ),
                    y.a.createElement(
                      D,
                      r()({}, i.secondary_text, {
                        color: 'gray700',
                        onNavigate: n,
                        size: 'subtext2',
                        subtaskInputs: o,
                      }),
                    ),
                    s
                      ? y.a.createElement(
                          F.a,
                          null,
                          y.a.createElement(O.a, { onPress: this._handleActionClick, type: 'primaryText' }, s),
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
                    a = t.settingValue,
                    n = t.subtaskId,
                    r = t.subtaskInputs,
                    i = a.value_data,
                    o = a.value_identifier
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
                    subtaskId: n,
                    subtaskInputs: r,
                  })
                },
              },
              {
                key: '_renderTweet',
                value: function () {
                  var e = this.props.settingValue.value_data
                  return null != e && e.tweet ? y.a.createElement(cn.a, { tweet: e.tweet }) : null
                },
              },
              {
                key: '_renderSettingOption',
                value: function () {
                  var e = this.props,
                    t = e.onNavigate,
                    a = e.settingValue,
                    n = e.showDividers,
                    i = e.subtaskInputs,
                    o = a.primary_text,
                    s = a.secondary_text,
                    l = a.value_identifier
                  return y.a.createElement(
                    F.a,
                    { accessibilityRole: 'label', focusable: !0, style: [de.option, n && hn.optionDivider] },
                    y.a.createElement(
                      F.a,
                      { style: de.checkboxText },
                      y.a.createElement(D, r()({}, o, { onNavigate: t, subtaskInputs: i })),
                      s
                        ? y.a.createElement(
                            D,
                            r()({}, s, {
                              color: 'gray700',
                              onNavigate: t,
                              size: 'subtext2',
                              style: hn.secondaryText,
                              subtaskInputs: i,
                            }),
                          )
                        : null,
                    ),
                    l
                      ? y.a.createElement(
                          F.a,
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
                    a = this.props,
                    n = a.onNavigate,
                    i = a.settingValue,
                    o = a.subtaskInputs,
                    s = i.primary_text,
                    l = i.secondary_text,
                    c = i.value_data,
                    u = null == c || null === (e = c.settings_group_data) || void 0 === e ? void 0 : e.settings,
                    d =
                      null == c || null === (t = c.settings_group_data) || void 0 === t
                        ? void 0
                        : t.status_text_quantity_pairs
                  return y.a.createElement(
                    F.a,
                    { accessibilityRole: 'button', onClick: this._handleSettingGroupClick, style: hn.settingGroup },
                    y.a.createElement(D, r()({}, s, { onNavigate: n, subtaskInputs: o })),
                    u && d ? this._renderQuantityStatus(u, d) : null,
                    l
                      ? y.a.createElement(
                          D,
                          r()({}, l, { color: 'gray700', onNavigate: n, size: 'subtext2', subtaskInputs: o }),
                        )
                      : null,
                  )
                },
              },
              {
                key: '_renderQuantityStatus',
                value: function (e, t) {
                  var a,
                    n = this,
                    i = this.props,
                    o = i.onNavigate,
                    s = i.subtaskInputs,
                    l = e.reduce(function (e, t) {
                      return e + (n._getSettingValueFromSubtaskInputs(t) ? 1 : 0)
                    }, 0)
                  return (
                    t.forEach(function (e) {
                      l >= e.threshold &&
                        (a = y.a.createElement(
                          D,
                          r()({}, e.text, {
                            color: 'gray700',
                            onNavigate: o,
                            size: 'subtext2',
                            style: hn.quantityStatusText,
                            subtaskInputs: s,
                          }),
                        ))
                    }),
                    a
                  )
                },
              },
            ]),
            a
          )
        })(y.a.Component),
        hn = L.a.create(function (e) {
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
        mn = 'ocfEnterEmailNextLink',
        _n = 'ocfEnterEmailSkipLink',
        vn = (function (e) {
          m()(a, e)
          var t = v()(a)
          function a(e) {
            var n
            l()(this, a),
              (n = t.call(this, e)),
              b()(p()(n), '_renderEmailTextField', function () {
                return y.a.createElement(Ma, {
                  autoComplete: 'email',
                  autoFocus: !0,
                  defaultValue: n.state.email,
                  label: n.props.subtask.hint_text,
                  name: 'email',
                  onRef: n._handleSetInputRef,
                  onValidityChange: n._handleUpdateValidity,
                  style: fn.emailTextField,
                })
              }),
              b()(p()(n), '_getInitialSettingValues', function (e, t, a) {
                var n
                return null === (n = e.settings) || void 0 === n
                  ? void 0
                  : n.map(function (e) {
                      var n,
                        r,
                        i,
                        o,
                        s = e.value_identifier
                      if (void 0 === s) return {}
                      var l =
                        null !==
                          (n =
                            null === (r = e.value_data) || void 0 === r || null === (i = r.boolean_data) || void 0 === i
                              ? void 0
                              : i.initial_value) &&
                        void 0 !== n &&
                        n
                      return {
                        valueIdentifier: s,
                        value: null !== (o = Object(S.e)(a, { key: s, subtask_id: t }, void 0)) && void 0 !== o ? o : l,
                      }
                    })
              }),
              b()(p()(n), '_toggleSettingValue', function (e) {
                var t = n.state.settingValues,
                  a =
                    null == t
                      ? void 0
                      : t.map(function (t) {
                          return t.valueIdentifier === e ? { valueIdentifier: e, value: !t.value } : t
                        })
                n.setState({ settingValues: a })
              }),
              b()(p()(n), '_renderSettings', function () {
                var e,
                  t,
                  a = n.props,
                  r = a.onNavigate,
                  i = a.subtask,
                  o = a.subtaskId,
                  s = a.subtaskInputs
                return null !==
                  (e =
                    null === (t = i.settings) || void 0 === t
                      ? void 0
                      : t.map(function (e) {
                          var t = e.value_identifier
                          return void 0 === t
                            ? null
                            : y.a.createElement(pn, {
                                key: t,
                                onNavigate: r,
                                onSettingToggle: function () {
                                  return n._toggleSettingValue(t)
                                },
                                settingValue: e,
                                subtaskId: o,
                                subtaskInputs: s,
                              })
                        })) && void 0 !== e
                  ? e
                  : null
              }),
              b()(p()(n), '_handleDoneButtonClick', function () {
                var e = n.props.subtask,
                  t = n.state.settingValues,
                  a = {
                    setting_responses:
                      null == t
                        ? void 0
                        : t.map(function (e) {
                            var t = e.value
                            return { key: e.valueIdentifier, response_data: { boolean_data: { result: t } } }
                          }),
                    email: n._getIdentifierValue(),
                    link: e.next_link.link_id,
                  }
                n._handleButtonClick(e.next_link, a)
              }),
              b()(p()(n), '_handleSkipButtonClick', function () {
                var e = n.props.subtask
                e.skip_link && n._handleButtonClick(e.skip_link, { link: e.skip_link.link_id })
              }),
              b()(p()(n), '_handleButtonClick', function (e, t) {
                var a = n.props,
                  r = a.onNavigate,
                  i = a.subtaskId
                ;(0, a.updateFlow)(i, t), r(e)
              }),
              b()(p()(n), '_handleSetInputRef', function (e) {
                n._input = e
              }),
              b()(p()(n), '_handleUpdateValidity', function () {
                var e = n._input && n._input.isValid()
                n.setState({ isValid: !!e })
              }),
              b()(p()(n), '_getIdentifierValue', function () {
                return (n._input && n._input.getValue()) || void 0
              })
            var r = e.subtask,
              i = e.subtaskId,
              o = e.subtaskInputs,
              s = Object(S.e)(o, { key: 'email', subtask_id: i }, '') || void 0,
              c = n._getInitialSettingValues(r, i, o)
            return (n.state = { email: s, isValid: !!s, settingValues: c }), n
          }
          return (
            u()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.onNavigate,
                    a = e.passthroughOcfScreenProps,
                    n = e.progressIndication,
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
                        actionDisabled: !this.state.isValid,
                        actionLabel: this.state.isValid || !u ? (null == s ? void 0 : s.label) : void 0,
                        actionTestID: mn,
                        onAction: this._handleDoneButtonClick,
                        onSecondaryAction: this._handleSkipButtonClick,
                        secondaryActionLabel: this.state.isValid || null == u ? void 0 : u.label,
                        secondaryActionTestID: _n,
                        secondaryActionType: 'primaryOutlined',
                      }),
                      header: y.a.createElement(ge, {
                        onNavigate: t,
                        primaryTextProp: l,
                        secondaryTextProp: c,
                        subtaskInputs: o,
                        withHeaderImage: !0,
                      }),
                      progressIndication: n,
                      providePadding: !0,
                    }),
                    y.a.createElement(F.a, { style: fn.textFieldArea }, this._renderEmailTextField()),
                    this._renderSettings(),
                    this.props.errorDialog,
                  )
                },
              },
            ]),
            a
          )
        })(y.a.Component),
        fn = L.a.create(function (e) {
          return {
            textFieldArea: { marginTop: e.spaces.space20 },
            emailTextField: { paddingHorizontal: 0, paddingVertical: e.spaces.space16 },
          }
        }),
        bn = (a('Qavd'), a('5oBF')),
        gn = { scribeAction: _t.c, sendAllPreviews: bn.g },
        yn = Object(gt.b)(gn),
        kn = 'LoginForm_Login_Button',
        wn = a('0yYu'),
        Cn = Wt.a.d1f6d336,
        In = Wt.a.a3841918,
        En = Wt.a.f70cd5ed,
        xn = Wt.a.ca86b62c,
        Sn = (function (e) {
          m()(a, e)
          var t = v()(a)
          function a(e, n) {
            var i
            return (
              l()(this, a),
              (i = t.call(this, e, n)),
              b()(
                p()(i),
                '_passwordlessSsoEnabled',
                i.context.featureSwitches.isTrue('responsive_web_passwordless_sso_enabled'),
              ),
              b()(p()(i), 'state', {}),
              b()(p()(i), '_renderIdentifier', function () {
                var e,
                  t,
                  a = i.props.subtask,
                  n = a.email,
                  r = a.phone_number,
                  o = a.user_identifier_display_type,
                  s = a.username
                return (
                  'phone_number' === o
                    ? ((e = r), (t = En))
                    : 'username' === o
                    ? ((e = s), (t = Cn))
                    : 'email' === o && ((e = n), (t = In)),
                  e && t && o
                    ? y.a.createElement(sa.a, {
                        editable: !1,
                        label: t,
                        name: o,
                        onChange: Oe.a,
                        style: de.formTextInput,
                        value: e,
                      })
                    : null
                )
              }),
              b()(p()(i), '_renderPasswordFields', function () {
                var e = i.props,
                  t = e.onNavigate,
                  a = e.subtask,
                  n = e.subtaskInputs,
                  o = a.show_password_confirmation
                if (a.password_field || a.new_password_field || a.confirm_password_field) {
                  var s,
                    l = { onNavigate: t, onSubmitEditing: i._handleTextSubmit, subtaskInputs: n },
                    c = null !== (s = a.password_field) && void 0 !== s ? s : a.new_password_field
                  return y.a.createElement(
                    y.a.Fragment,
                    null,
                    c
                      ? y.a.createElement(
                          Ja,
                          r()({}, l, {
                            autoFocus: !0,
                            onChange: i._handlePasswordChange,
                            passwordProps: {
                              onPasswordValidated: i._handleValidationChange,
                              showPasswordVisibilityIcon: i._ssoInSliEnterPasswordUpdatesEnabled,
                              skipPasswordValidation: a.skip_password_validation,
                            },
                            textField: c,
                          }),
                        )
                      : null,
                    a.confirm_password_field
                      ? y.a.createElement(
                          Ja,
                          r()({}, l, {
                            onChange: i._handlePasswordConfirmationChange,
                            passwordProps: {
                              onPasswordValidated: i._handleValidationChange,
                              customValidator: i._validatePasswordConfirmation,
                              showPasswordVisibilityIcon: i._ssoInSliEnterPasswordUpdatesEnabled,
                            },
                            textField: a.confirm_password_field,
                          }),
                        )
                      : null,
                  )
                }
                return y.a.createElement(
                  y.a.Fragment,
                  null,
                  y.a.createElement(Xa, {
                    autoComplete: i._getPasswordAutoCompleteValue(),
                    autoFocus: !0,
                    label: a.hint,
                    onPasswordChange: i._handlePasswordChange,
                    onPasswordValidated: i._handleValidationChange,
                    onSubmitEditing: i._handleTextSubmit,
                    showPasswordVisibilityIcon: i._ssoInSliEnterPasswordUpdatesEnabled,
                    skipPasswordValidation: a.skip_password_validation,
                    userIdentifier: a.username,
                  }),
                  o
                    ? y.a.createElement(Xa, {
                        autoComplete: i._getPasswordAutoCompleteValue(),
                        customValidator: i._validatePasswordConfirmation,
                        label: a.password_confirmation_hint,
                        onPasswordChange: i._handlePasswordConfirmationChange,
                        onPasswordValidated: i._handleValidationChange,
                        onSubmitEditing: i._handleTextSubmit,
                        showPasswordVisibilityIcon: i._ssoInSliEnterPasswordUpdatesEnabled,
                        userIdentifier: a.username,
                      })
                    : null,
                )
              }),
              b()(p()(i), '_renderFooter', function () {
                var e,
                  t,
                  a,
                  n,
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
                          D,
                          r()({}, c.footer.footnote_text, {
                            color: 'gray700',
                            onNavigate: l,
                            style: Tn.footnoteText,
                            subtaskInputs: u,
                          }),
                        )
                      : null,
                  m =
                    null !== (a = c.footer) && void 0 !== a && a.detail_text
                      ? y.a.createElement(
                          D,
                          r()({}, c.footer.detail_text, {
                            color: 'gray700',
                            onNavigate: l,
                            style: Tn.detailText,
                            subtaskInputs: u,
                          }),
                        )
                      : null,
                  _ =
                    (null === (n = c.footer) || void 0 === n ? void 0 : n.style) === k.i.Floating ? 'medium' : 'large',
                  v =
                    d || !c.skip_link
                      ? y.a.createElement(
                          O.a,
                          {
                            disabled: !d,
                            onPress: i._handleDoneButtonClick,
                            size: _,
                            style: de.button,
                            testID: kn,
                            type: 'primaryFilled',
                          },
                          c.next_link.label,
                        )
                      : y.a.createElement(
                          O.a,
                          { onPress: i._handleSkipButtonClick, size: _, style: de.button, type: 'primaryOutlined' },
                          null === (o = c.skip_link) || void 0 === o ? void 0 : o.label,
                        )
                return y.a.createElement(
                  F.a,
                  null,
                  m,
                  v,
                  null != p && p.length ? y.a.createElement(wn.a, { label: y.a.createElement(x.b, null, xn) }) : null,
                  p,
                  h,
                )
              }),
              b()(p()(i), '_validatePasswordConfirmation', function () {
                var e,
                  t,
                  a,
                  n = i.props.subtask,
                  r = n.password_confirmation_mismatch_message,
                  o =
                    null === (e = n.confirm_password_field) ||
                    void 0 === e ||
                    null === (t = e.validation_messages) ||
                    void 0 === t
                      ? void 0
                      : t.find(function (e) {
                          return e.message_type === k.E.Mismatch
                        })
                if ((o ? (a = o.text.text) : null != r && r.text && (a = null == r ? void 0 : r.text), a)) {
                  var s = i.state
                  if (s.password !== s.passwordConfirmation) return { valid: !1, errorMessage: a }
                }
                return { valid: !0, errorMessage: void 0 }
              }),
              b()(p()(i), '_handleDoneButtonClick', function () {
                var e = i.props,
                  t = e.onNavigate,
                  a = e.sendAllPreviews,
                  n = e.subtask,
                  r = e.subtaskId,
                  o = e.updateFlow
                a().finally(function () {
                  i._saveCredentialsIfNeeded()
                    .then(function () {
                      o(r, { password: i.state.password, link: n.next_link.link_id }), t(n.next_link)
                    })
                    .catch(function () {
                      i._scribeSmartLockError(),
                        o(r, { password: i.state.password, link: n.next_link.link_id }),
                        t(n.next_link)
                    })
                })
              }),
              b()(p()(i), '_handleSkipButtonClick', function () {
                var e = i.props,
                  t = e.onNavigate,
                  a = e.subtask,
                  n = e.subtaskId,
                  r = e.updateFlow,
                  o = a.skip_link
                o && (r(n, { link: o.link_id }), t(o))
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
                  a = t.show_password_confirmation
                if (t.confirm_password_field || a) {
                  var n = i._validatePasswordConfirmation().valid
                  i.setState({ isPasswordValid: e && n })
                } else i.setState({ isPasswordValid: e })
              }),
              b()(p()(i), '_isPasswordValid', function () {
                var e = i.props.subtask,
                  t = i.state,
                  a = t.isPasswordValid,
                  n = t.password,
                  r = !(n && n.length)
                return a || (e.skip_password_validation && !r)
              }),
              b()(p()(i), '_handleTextSubmit', function () {
                i._isPasswordValid() && i._handleDoneButtonClick()
              }),
              b()(p()(i), '_saveCredentialsIfNeeded', function () {
                var e = i.props.subtask,
                  t = e.email,
                  a = e.phone,
                  n = e.skip_password_validation,
                  r = e.username,
                  o = i.state.password,
                  s = !!window.PasswordCredential,
                  l = r || t || a
                if (l && s && !n && navigator.credentials) {
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
              (i._ssoInSliEnterPasswordUpdatesEnabled = n.featureSwitches.isTrue(
                'responsive_web_sso_in_sli_enter_password_updates_enabled',
              )),
              i
            )
          }
          return (
            u()(a, [
              {
                key: 'render',
                value: function () {
                  var e,
                    t,
                    a,
                    n,
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
                      F.a,
                      { style: this._hasSSOButtons() ? de.contentAreaCompact : de.contentArea },
                      y.a.createElement(ge, {
                        header: u.header,
                        onNavigate: s,
                        primaryTextProp: u.primary_text,
                        secondaryTextProp: u.secondary_text,
                        subtaskInputs: d,
                        userInfo: this._passwordlessSsoEnabled
                          ? y.a.createElement(Ue, {
                              displayType: k.D.compact,
                              onNavigate: s,
                              subtaskInputs: d,
                              user: null === (a = u.header) || void 0 === a ? void 0 : a.user,
                              userCaption: null === (n = u.header) || void 0 === n ? void 0 : n.user_caption,
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
            a
          )
        })(y.a.Component)
      b()(Sn, 'contextType', Qe.a)
      var Tn = L.a.create(function (e) {
          return { footnoteText: { marginTop: e.spaces.space40 }, detailText: { marginBottom: e.spaces.space40 } }
        }),
        Pn = yn(Sn),
        An = new RegExp('^\\+?[0-9\\-\\.\\(\\)\\s]{7,1000}$'),
        Dn = Wt.a.cd24fe6f,
        Fn = Ea({
          namespace: 'phoneNumberValidity',
          fetchOneContext: 'FETCH_PHONE_VALIDITY',
          fetchOneEndpoint: function (e) {
            return e.Validity.isPhoneNumberAvailable
          },
          fetchOneParams: function (e, t) {
            var a = W()(e, 1)[0]
            return o()({ raw_phone_number: a }, t)
          },
          localValidator: function (e) {
            var t = An.test(e)
            return { errorMessage: Dn, valid: t }
          },
        }),
        On = ['countryCode', 'onRef'],
        Ln = function (e) {
          var t = e.countryCode,
            a = e.onRef,
            n = C()(e, On),
            i = { country_code: t }
          return y.a.createElement(La, r()({ module: Fn, onRef: a, type: 'tel', validationParams: i }, n))
        },
        Nn = 'ocfEnterPhoneNextLink',
        Rn = 'ocfEnterPhoneSkipLink',
        Bn = a('6XNv'),
        Vn = Wt.a.gf8388fe,
        Mn = (function (e) {
          m()(a, e)
          var t = v()(a)
          function a(e) {
            var n
            l()(this, a),
              (n = t.call(this, e)),
              b()(p()(n), '_renderCountryCodes', function () {
                var e = n.props.subtask.country_codes
                if (e && e.length) {
                  var t = e.map(function (e) {
                    return { label: e.text.text, value: e.id }
                  })
                  return y.a.createElement(Bn.a, {
                    helperText: void 0,
                    label: Vn,
                    onChange: n._handleCountryChange,
                    options: t,
                    value: n.state.countryCode || '',
                  })
                }
                return null
              }),
              b()(p()(n), '_handleCountryChange', function (e) {
                n.setState({ countryCode: e })
              }),
              b()(p()(n), '_renderPhoneTextField', function () {
                return y.a.createElement(Ln, {
                  autoComplete: 'tel',
                  countryCode: n.state.countryCode,
                  defaultValue: n.state.phoneNumber,
                  label: n.props.subtask.hint_text,
                  name: 'phone_number',
                  onRef: n._handleSetInputRef,
                  onValidityChange: n._handleUpdateValidity,
                  style: jn.phoneTextField,
                })
              }),
              b()(p()(n), '_getInitialSettingValues', function (e, t, a) {
                var n
                return null === (n = e.settings) || void 0 === n
                  ? void 0
                  : n.map(function (e) {
                      var n,
                        r,
                        i,
                        o,
                        s = e.value_identifier
                      if (void 0 === s) return {}
                      var l =
                        null !==
                          (n =
                            null === (r = e.value_data) || void 0 === r || null === (i = r.boolean_data) || void 0 === i
                              ? void 0
                              : i.initial_value) &&
                        void 0 !== n &&
                        n
                      return {
                        valueIdentifier: s,
                        value: null !== (o = Object(S.e)(a, { key: s, subtask_id: t }, void 0)) && void 0 !== o ? o : l,
                      }
                    })
              }),
              b()(p()(n), '_toggleSettingValue', function (e) {
                var t = n.state.settingValues,
                  a =
                    null == t
                      ? void 0
                      : t.map(function (t) {
                          return t.valueIdentifier === e ? { valueIdentifier: e, value: !t.value } : t
                        })
                n.setState({ settingValues: a })
              }),
              b()(p()(n), '_renderSettings', function () {
                var e,
                  t,
                  a = n.props,
                  r = a.onNavigate,
                  i = a.subtask,
                  o = a.subtaskId,
                  s = a.subtaskInputs
                return null !==
                  (e =
                    null === (t = i.settings) || void 0 === t
                      ? void 0
                      : t.map(function (e) {
                          var t = e.value_identifier
                          return void 0 === t
                            ? null
                            : y.a.createElement(pn, {
                                key: t,
                                onNavigate: r,
                                onSettingToggle: function () {
                                  return n._toggleSettingValue(t)
                                },
                                settingValue: e,
                                subtaskId: o,
                                subtaskInputs: s,
                              })
                        })) && void 0 !== e
                  ? e
                  : null
              }),
              b()(p()(n), '_handleDoneButtonClick', function () {
                var e = n.props.subtask,
                  t = n.state,
                  a = t.countryCode,
                  r = t.settingValues,
                  i =
                    null == r
                      ? void 0
                      : r.map(function (e) {
                          var t = e.value
                          return { key: e.valueIdentifier, response_data: { boolean_data: { result: t } } }
                        }),
                  o = {
                    country_code: a,
                    phone_number: n._getIdentifierValue(),
                    setting_responses: i,
                    link: e.next_link.link_id,
                  }
                n._handleButtonClick(e.next_link, o)
              }),
              b()(p()(n), '_handleSkipButtonClick', function () {
                var e = n.props.subtask
                e.skip_link && n._handleButtonClick(e.skip_link, { link: e.skip_link.link_id })
              }),
              b()(p()(n), '_handleButtonClick', function (e, t) {
                var a = n.props,
                  r = a.onNavigate,
                  i = a.subtaskId
                ;(0, a.updateFlow)(i, t), r(e)
              }),
              b()(p()(n), '_handleSetInputRef', function (e) {
                n._input = e
              }),
              b()(p()(n), '_handleUpdateValidity', function () {
                var e = n._input && n._input.isValid()
                n.setState({ isValid: !!e })
              }),
              b()(p()(n), '_getIdentifierValue', function () {
                return (n._input && n._input.getValue()) || void 0
              })
            var r = e.subtask,
              i = e.subtaskId,
              o = e.subtaskInputs,
              s = Object(S.e)(o, { key: 'country_code', subtask_id: i }, r.default_country_code) || void 0,
              c = Object(S.e)(o, { key: 'phone_number', subtask_id: i }, '') || void 0,
              u = n._getInitialSettingValues(r, i, o)
            return (n.state = { countryCode: s, phoneNumber: c, isValid: !!c, settingValues: u }), n
          }
          return (
            u()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.onNavigate,
                    a = e.passthroughOcfScreenProps,
                    n = e.progressIndication,
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
                        actionDisabled: !this.state.isValid,
                        actionLabel: this.state.isValid || !u ? (null == s ? void 0 : s.label) : void 0,
                        actionTestID: Nn,
                        onAction: this._handleDoneButtonClick,
                        onSecondaryAction: this._handleSkipButtonClick,
                        secondaryActionLabel: this.state.isValid || null == u ? void 0 : u.label,
                        secondaryActionTestID: Rn,
                        secondaryActionType: 'primaryOutlined',
                      }),
                      header: y.a.createElement(ge, {
                        onNavigate: t,
                        primaryTextProp: l,
                        secondaryTextProp: c,
                        subtaskInputs: o,
                        withHeaderImage: !0,
                      }),
                      progressIndication: n,
                      providePadding: !0,
                    }),
                    y.a.createElement(
                      F.a,
                      { style: jn.textFieldArea },
                      this._renderCountryCodes(),
                      this._renderPhoneTextField(),
                    ),
                    this._renderSettings(),
                    this.props.errorDialog,
                  )
                },
              },
            ]),
            a
          )
        })(y.a.Component),
        jn = L.a.create(function (e) {
          return {
            textFieldArea: { marginTop: e.spaces.space20 },
            phoneTextField: { paddingHorizontal: 0, paddingVertical: e.spaces.space16 },
          }
        }),
        Un = a('Lam0'),
        zn = 'ocfEnterRecaptchaSkipButton',
        Hn = (function (e) {
          m()(a, e)
          var t = v()(a)
          function a() {
            var e
            l()(this, a)
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              b()(p()(e), '_handleRecaptchaStateChange', function (t) {
                var a = e.props,
                  n = a.onNavigate,
                  r = a.subtask,
                  i = a.subtaskId,
                  o = a.updateFlow,
                  s = r.next_link
                t && (o(i, { link: s.link_id, recaptcha_response: t }), n(s))
              }),
              b()(p()(e), '_handleSkipButtonClick', function () {
                var t = e.props,
                  a = t.onNavigate,
                  n = t.subtask.skip_link,
                  r = t.subtaskId,
                  i = t.updateFlow
                n && (i(r, { link: n.link_id }), a(n))
              }),
              e
            )
          }
          return (
            u()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.errorDialog,
                    a = e.onNavigate,
                    n = e.passthroughOcfScreenProps,
                    i = e.subtask,
                    o = e.subtaskInputs,
                    s = i.primary_text,
                    l = i.secondary_text,
                    c = i.skip_link
                  return y.a.createElement(
                    ye.a,
                    r()({}, n, {
                      footer: y.a.createElement(B, {
                        onSecondaryAction: this._handleSkipButtonClick,
                        secondaryActionLabel: null == c ? void 0 : c.label,
                        secondaryActionTestID: zn,
                      }),
                      header: y.a.createElement(ge, {
                        onNavigate: a,
                        primaryTextProp: s,
                        secondaryTextProp: l,
                        subtaskInputs: o,
                        withHeaderImage: !0,
                      }),
                      providePadding: !0,
                    }),
                    y.a.createElement(Un.a, {
                      nextButtonDisabled: !1,
                      onChange: this._handleRecaptchaStateChange,
                      withConsentForm: !1,
                    }),
                    t,
                  )
                },
              },
            ]),
            a
          )
        })(y.a.Component),
        Wn = 'ocfEnterTextNextButton',
        Gn = 'ocfEnterTextSkipForNowButton',
        Kn = 'ocfEnterTextTextInput',
        qn = 'text',
        Yn = (function (e) {
          m()(a, e)
          var t = v()(a)
          function a(e) {
            var n
            l()(this, a),
              (n = t.call(this, e)),
              b()(p()(n), '_handleSubmit', function () {
                n.state.text && n._handleDoneButtonClick()
              }),
              b()(p()(n), '_handleDoneButtonClick', function () {
                var e = n.props,
                  t = e.onNavigate,
                  a = e.subtask.next_link,
                  r = e.subtaskId
                ;(0, e.updateFlow)(r, o()(o()({}, n.state), {}, { link: a.link_id })), t(a)
              }),
              b()(p()(n), '_handleSkipButtonClick', function () {
                var e = n.props,
                  t = e.onNavigate,
                  a = e.subtask.skip_link,
                  r = e.subtaskId,
                  i = e.updateFlow
                a && i(r, { link: a.link_id }), a && t(a)
              }),
              b()(p()(n), '_handleEntryUpdated', function (e) {
                var t = e.target.value
                n.setState({ text: t })
              }),
              b()(p()(n), '_getAutoCompleteFromKeyboardType', function (e) {
                switch (e) {
                  case k.k.Email:
                    return 'email'
                  case k.k.Telephone:
                    return 'tel'
                  default:
                    return
                }
              }),
              b()(p()(n), '_getInputTypeFromKeyboardType', function (e) {
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
              b()(p()(n), '_getInputModeFromKeyboardType', function (e) {
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
              d = Object(S.e)(c, { key: qn, subtask_id: i }, u) || ''
            return (n.state = { text: d }), n
          }
          return (
            u()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.errorDialog,
                    a = e.onNavigate,
                    n = e.passthroughOcfScreenProps,
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
                    _ = i.next_link,
                    v = i.os_content_type,
                    f = i.primary_text,
                    b = i.secondary_text,
                    g = i.skip_link
                  return y.a.createElement(
                    ye.a,
                    r()({}, n, {
                      footer: y.a.createElement(B, {
                        actionDisabled: !g && !this.state.text,
                        actionLabel: this.state.text || !g ? (null == _ ? void 0 : _.label) : void 0,
                        actionTestID: Wn,
                        onAction: this._handleDoneButtonClick,
                        onSecondaryAction: this._handleSkipButtonClick,
                        secondaryActionLabel: this.state.text || null == g ? void 0 : g.label,
                        secondaryActionTestID: Gn,
                      }),
                      header: y.a.createElement(ge, {
                        header: u,
                        onNavigate: a,
                        primaryTextProp: f,
                        secondaryTextProp: b,
                        subtaskInputs: o,
                        withHeaderImage: !0,
                      }),
                      providePadding: !0,
                    }),
                    y.a.createElement(sa.a, {
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
                      testID: Kn,
                      type: this._getInputTypeFromKeyboardType(p),
                      value: this.state.text,
                    }),
                    c ? y.a.createElement(D, r()({}, c, { color: 'gray700', onNavigate: a, subtaskInputs: o })) : null,
                    t,
                  )
                },
              },
            ]),
            a
          )
        })(y.a.Component),
        Xn = a('LXAX'),
        Zn = Object(yt.createSelector)(bt.e.selectLoggedInUser, Xn.c, vt.o, function (e, t, a) {
          return { loggedInUser: e, navigationContext: a, isUsernameValid: t.valid, validationError: t.desc }
        }),
        Jn = { fetchUsernameAvailability: Xn.b },
        Qn = Object(gt.f)(Zn, Jn),
        $n = a('EweD'),
        er = 'ocfEnterUsernameNextButton',
        tr = 'ocfEnterUsernameSkipButton',
        ar = Wt.a.d1f6d336,
        nr = (function (e) {
          m()(a, e)
          var t = v()(a)
          function a(e) {
            var n
            l()(this, a),
              (n = t.call(this, e)),
              b()(p()(n), '_maybeRenderDetailTexts', function () {
                var e = n.props,
                  t = e.subtask,
                  a = e.subtaskInputs,
                  i = n.state.currentDetailTextIndex
                return t.detail_texts && t.detail_texts.length
                  ? y.a.createElement(
                      D,
                      r()({}, t.detail_texts[i], {
                        color: 'link',
                        onNavigate: n._handleDetailTextClick,
                        style: rr.detailLink,
                        subtaskInputs: a,
                      }),
                    )
                  : void 0
              }),
              b()(p()(n), '_handleDetailTextClick', function (e) {
                var t = n.props,
                  a = t.analytics,
                  r = t.onNavigate
                'show_more_usernames' === e.link_id
                  ? (n._updateCurrentDetailTextIndex(), a.scribe({ element: 'show_more', action: 'click' }))
                  : (n._selectUsername(e.link_id, n._fetchUsernameStatus),
                    a.scribe({ element: 'suggestion', action: 'click' })),
                  r(e)
              }),
              b()(p()(n), '_handleUsernameUpdated', function (e) {
                var t = e.target.value
                n._selectUsername(t, n._fetchUsernameStatusDebounced)
              }),
              b()(p()(n), '_selectUsername', function (e, t) {
                n.setState({ username: e }), t(e)
              }),
              b()(p()(n), '_handleNextButtonClick', function () {
                var e = n.props,
                  t = e.onNavigate,
                  a = e.subtask,
                  r = e.subtaskId,
                  i = e.updateFlow,
                  o = n.state.username
                a.next_link && (i(r, { username: o, link: a.next_link.link_id }), t(a.next_link))
              }),
              b()(p()(n), '_handleSkipButtonClick', function () {
                var e = n.props,
                  t = e.onNavigate,
                  a = e.subtask,
                  r = e.subtaskId,
                  i = e.updateFlow,
                  o = a.skip_link
                o && (i(r, { link: o.link_id }), t(o))
              }),
              b()(p()(n), '_fetchUsernameStatus', function (e) {
                var t = n.props,
                  a = t.analytics,
                  r = t.fetchUsernameAvailability,
                  i = t.loggedInUser
                i &&
                  r({
                    email: i.email && i.email[0] && i.email[0].address,
                    full_name: i.name,
                    suggest: !1,
                    username: e,
                  }).then(function (e) {
                    e && !e.valid && 'taken' === e.reason && a.scribe({ element: 'username', action: 'taken' })
                  })
              }),
              b()(p()(n), '_updateCurrentDetailTextIndex', function () {
                n.setState({ currentDetailTextIndex: n.state.currentDetailTextIndex + 1 })
              })
            var i = e.loggedInUser,
              o = e.subtaskId,
              s = e.subtaskInputs,
              c = Object(S.e)(s, { key: 'username', subtask_id: o }, '') || (i ? i.screen_name : '')
            return (
              (n.state = { currentDetailTextIndex: 0, username: c }),
              (n._fetchUsernameStatusDebounced = Object(Da.a)(function () {
                var e
                return (e = n)._fetchUsernameStatus.apply(e, arguments)
              }, 250)),
              n
            )
          }
          return (
            u()(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props.navigationContext || {},
                    t = e.action,
                    a = e.text
                  'set_text' === t && a && this._selectUsername(a, this._fetchUsernameStatus)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.isUsernameValid,
                    a = e.loggedInUser,
                    n = e.onNavigate,
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
                    _ = (a && a.screen_name && a.screen_name.toLowerCase()) === (m && m.toLowerCase())
                  return y.a.createElement(
                    ye.a,
                    r()({}, i, {
                      footer: y.a.createElement(B, {
                        actionDisabled: !t,
                        actionLabel: m && !_ ? (null == u ? void 0 : u.label) : void 0,
                        actionTestID: er,
                        onAction: this._handleNextButtonClick,
                        onSecondaryAction: this._handleSkipButtonClick,
                        secondaryActionLabel: !m || _ ? (null == h ? void 0 : h.label) : void 0,
                        secondaryActionTestID: tr,
                      }),
                      header: y.a.createElement(ge, {
                        onNavigate: n,
                        primaryTextProp: d,
                        secondaryTextProp: p,
                        subtaskInputs: l,
                        withHeaderImage: !0,
                      }),
                      progressIndication: o,
                      providePadding: !0,
                    }),
                    y.a.createElement(sa.a, {
                      Icon: $n.a,
                      autoComplete: 'off',
                      autoCorrect: !1,
                      autoFocus: !0,
                      errorText: c,
                      invalid: !!m && !_ && !t,
                      label: s.hint || ar,
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
            a
          )
        })(y.a.Component),
        rr = L.a.create(function (e) {
          return { detailLink: { marginTop: e.spaces.space16 } }
        }),
        ir = Object(Rt.a)(Qn(nr), { section: 'enter_username' }),
        or = (a('lTEL'), a('LqLs'), a('87if'), a('kYxP'), a('hCOa'), a('v84o')),
        sr = a('8Lfv'),
        lr = Object(Ge.a)()
          .propsFromActions(function () {
            return {
              clearTimelineCache: sr.a,
              createLocalApiErrorHandler: Object(Ke.createLocalApiErrorHandlerWithContextFactory)('OCF_GENERIC_URT'),
            }
          })
          .withAnalytics(),
        cr = a('QIgh'),
        ur = a('5Y9N'),
        dr = a('doI8'),
        pr = a('BV3T'),
        hr = a('VTxf'),
        mr = a('fTQJ'),
        _r = a('7JQg'),
        vr = a('wgnn'),
        fr = a('gwY8'),
        br = a('ywYn'),
        gr = a('855f'),
        yr = a('cHvH'),
        kr = a('oQhu'),
        wr = (a('yH/f'), Object.freeze({ TopicFollowCount: 'topic_follow_count' })),
        Cr = function (e) {
          switch (e) {
            case vr.a.NOT_FOUND:
              return y.a.createElement(hr.a, null)
            case vr.a.NOT_ALLOWED:
              return y.a.createElement(pr.a, null)
            default:
              return Object(Nt.a)('Unhandled timeline unavailable reason in Ocf GenericURT screen: '.concat(e)), null
          }
        },
        Ir = Object(kr.a)(function (e) {
          return (function (e) {
            return o()(o()({}, cr.b), Object(ur.a)({ isWide: e }))
          })(e)
        }),
        Er = (function (e) {
          m()(a, e)
          var t = v()(a)
          function a(e) {
            var n
            return (
              l()(this, a),
              (n = t.call(this, e)),
              b()(p()(n), '_isNextButtonEnabled', function () {
                var e,
                  t,
                  a = n.state.topicsFollowed,
                  r = n.props.subtask,
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
                  ? l && a.size >= s && a.size <= o
                  : s && !o
                  ? l && a.size >= s
                  : !s && o
                  ? l && a.size <= o
                  : (!s && !o) || void 0
              }),
              b()(p()(n), '_renderThresholdDetailText', function (e, t) {
                for (
                  var a, i = n.props, o = i.onNavigate, s = i.subtaskInputs, l = -1, c = 0;
                  c < (null == e ? void 0 : e.length);
                  c++
                ) {
                  var u = e[c],
                    d = u.text,
                    p = u.threshold
                  p > l && p <= t && ((l = p), (a = d))
                }
                var h = n._isNextButtonEnabled() ? 'gray1100' : 'gray700',
                  m = n._isNextButtonEnabled() ? 'bold' : 'normal'
                return n.state.initialized && a
                  ? y.a.createElement(
                      F.a,
                      { style: xr.detailText },
                      y.a.createElement(
                        x.b,
                        { color: h, size: 'subtext2', weight: m },
                        n._isNextButtonEnabled() ? null : gr.a.getFormattedCount(t),
                        y.a.createElement(D, r()({}, a, { color: h, onNavigate: o, subtaskInputs: s, weight: m })),
                      ),
                    )
                  : y.a.createElement(F.a, null)
              }),
              b()(
                p()(n),
                '_getModule',
                Object(kr.a)(function (e) {
                  var t = n.props.subtask,
                    a = t.graphql_timeline_query,
                    r = t.timeline_source
                  return a
                    ? Object(dr.a)(a.timeline_key)
                    : Object(or.a)({ urtUrl: { url: r || '', urlType: br.a.UrtEndpoint } })
                }),
              ),
              b()(p()(n), '_resetState', function () {
                n.setState({ topicsFollowed: new Set(), initialized: !1 })
              }),
              b()(p()(n), '_handleOnTopicInitialize', function (e, t) {
                n.setState(function (a) {
                  var n = Object(tt.a)(Array.from(a.topicsFollowed))
                  return t ? n.add(e) : n.delete(e), { initialized: !0, topicsFollowed: n }
                })
              }),
              b()(p()(n), '_handleOnTopicFollow', function (e) {
                var t = Object(tt.a)(Array.from(n.state.topicsFollowed))
                t.add(e), n.setState({ topicsFollowed: t })
              }),
              b()(p()(n), '_handleOnTopicUnfollow', function (e) {
                var t = Object(tt.a)(Array.from(n.state.topicsFollowed))
                t.delete(e), n.setState({ topicsFollowed: t })
              }),
              b()(p()(n), '_handleNextButtonClick', function () {
                var e = n.props,
                  t = e.onNavigate,
                  a = e.subtask,
                  r = e.subtaskId
                ;(0, e.updateFlow)(r, { link: a.next_link.link_id }), t(a.next_link)
              }),
              b()(p()(n), '_clearTimelineCache', function () {
                var e = n.props,
                  t = e.clearTimelineCache,
                  a = e.createLocalApiErrorHandler,
                  r = e.subtask.graphql_timeline_query
                r && t(Object(dr.a)(r.timeline_key)).catch(a())
              }),
              (n.state = { topicsFollowed: new Set(), initialized: !1 }),
              n
            )
          }
          return (
            u()(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.analytics,
                    a = e.subtask
                  t.scribe(o()(o()({}, a.scribe_config), {}, { action: 'impression' }))
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t = this.props,
                    a = t.analytics,
                    n = t.subtask,
                    r = t.subtaskId
                  e.subtaskId !== r &&
                    (this._resetState(),
                    this._clearTimelineCache(),
                    a.scribe(o()(o()({}, n.scribe_config), {}, { action: 'impression' })))
                },
              },
              {
                key: 'render',
                value: function () {
                  var e,
                    t,
                    a,
                    n,
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
                    _ = d.header,
                    v = d.detail_rich_text_options,
                    f = (v = void 0 === v ? {} : v).label_conditional_text,
                    b =
                      (null === (e = d.navigation_link_options) ||
                      void 0 === e ||
                      null === (t = e.count_subtask_data_reference) ||
                      void 0 === t
                        ? void 0
                        : t.key) === wr.TopicFollowCount,
                    g = y.a.createElement(
                      O.a,
                      {
                        disabled: !this._isNextButtonEnabled(),
                        onPress: this._handleNextButtonClick,
                        size: 'large',
                        type: 'primaryFilled',
                      },
                      (null === (a = d.navigation_link_options) || void 0 === a ? void 0 : a.label_conditional_text) ||
                        d.next_link.label,
                    ),
                    k =
                      (null === (n = d.detail_rich_text_options) ||
                      void 0 === n ||
                      null === (i = n.count_subtask_data_reference) ||
                      void 0 === i
                        ? void 0
                        : i.key) === wr.TopicFollowCount && f
                        ? y.a.createElement(
                            F.a,
                            { style: xr.spaceBetween },
                            this._renderThresholdDetailText(f, m.size),
                            g,
                          )
                        : g,
                    w = y.a.createElement(
                      ye.a,
                      r()({}, u, {
                        header: y.a.createElement(ge, {
                          header: _,
                          onNavigate: c,
                          subtaskInputs: h,
                          withHeaderImage: !0,
                        }),
                        providePadding: !0,
                        rightControl: k,
                      }),
                      y.a.createElement(
                        F.a,
                        null,
                        d.graphql_timeline_query || d.timeline_source
                          ? y.a.createElement(yr.a, null, function (e) {
                              var t = e.windowWidth >= L.a.theme.breakpoints.small
                              return y.a.createElement(
                                fr.a.Provider,
                                {
                                  value: {
                                    onInitialize: b ? o._handleOnTopicInitialize : Oe.a,
                                    onFollow: b ? o._handleOnTopicFollow : Oe.a,
                                    onUnfollow: b ? o._handleOnTopicUnfollow : Oe.a,
                                  },
                                },
                                y.a.createElement(mr.a, {
                                  entryConfiguration: Ir(t),
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
                  return d.scribe_config ? y.a.createElement(_r.c, { namespace: d.scribe_config }, w) : w
                },
              },
            ]),
            a
          )
        })(y.a.Component),
        xr = L.a.create(function (e) {
          return {
            detailText: { justifyContent: 'center' },
            spaceBetween: { flexDirection: 'row', justifyContent: 'space-between' },
          }
        }),
        Sr = lr(Er),
        Tr = 'selected_custom_interests',
        Pr = 'selected_interest_ids',
        Ar = function (e, t) {
          var a = Object(vt.v)(e)
          return (Object(S.e)(a, { key: Tr, subtask_id: t.subtaskId }, []) || []).map(function (e) {
            return { topic: e.custom_interest, ttt_token: e.ttt_token }
          })
        },
        Dr = Object(yt.createSelector)(
          Ar,
          function (e, t) {
            return Ar(e, t).map(function (e) {
              return e.topic
            })
          },
          function (e, t) {
            var a = Object(vt.v)(e)
            return Object(S.e)(a, { key: Pr, subtask_id: t.subtaskId }, []) || void 0
          },
          function (e, t, a) {
            return { initialCustomInterests: e, initialCustomInterestIds: t, initialSelectedInterestIds: a }
          },
        ),
        Fr = Object(gt.c)(Dr),
        Or = 'ocfInterestPickerNextLink',
        Lr = 'ocfInterestPickerSkipLink',
        Nr = a('2dXj'),
        Rr = a('aV/s'),
        Br = a('GZwR'),
        Vr = [Br.a.Topics],
        Mr = (function (e) {
          m()(a, e)
          var t = v()(a)
          function a(e) {
            var n
            l()(this, a),
              (n = t.call(this, e)),
              b()(p()(n), '_maybeRenderCustomInterests', function () {
                var e = n.props.subtask.custom_interests_header,
                  t = n.state,
                  a = t.customInterests
                if (t.shouldRenderCustomInterests)
                  return y.a.createElement(
                    F.a,
                    null,
                    y.a.createElement(
                      F.a,
                      { style: jr.group, testID: 'custom' },
                      y.a.createElement(x.b, { size: 'headline1', style: jr.groupHeader, weight: 'bold' }, e),
                      y.a.createElement(
                        F.a,
                        { style: jr.pillsContainer },
                        a.map(function (e) {
                          return n._renderCustomInterest(e.topic)
                        }),
                      ),
                    ),
                  )
              }),
              b()(p()(n), '_renderGroup', function (e) {
                var t
                if (e.show_more) {
                  var a = e.show_more.initial_to_show + (e.expanded ? e.show_more.extra_to_show : 0)
                  t = e.items.slice(0, a)
                } else t = e.items
                return y.a.createElement(
                  F.a,
                  { key: 'group_'.concat(e.header), style: jr.group, testID: 'group' },
                  y.a.createElement(x.b, { size: 'headline1', style: jr.groupHeader, weight: 'bold' }, e.header),
                  y.a.createElement(
                    F.a,
                    { style: jr.pillsContainer },
                    t.map(n._renderSelectionPill),
                    n._maybeRenderShowMoreButton(e),
                  ),
                )
              }),
              b()(p()(n), '_maybeRenderShowMoreButton', function (e) {
                var t = e.show_more
                return t && e.items.length > t.initial_to_show && !e.expanded
                  ? y.a.createElement(Rr.a, {
                      compact: !0,
                      key: 'showMore_'.concat(e.header),
                      mode: 'expand',
                      onClick: n._handleShowMore(e),
                      style: jr.selectionPillStyles,
                      text: t.text,
                    })
                  : null
              }),
              b()(p()(n), '_renderCustomInterest', function (e) {
                var t = n.state.selectedCustomInterestIds
                return y.a.createElement(Rr.a, {
                  compact: !0,
                  key: 'selectionPill_'.concat(e),
                  onClick: n._handleToggleCustomInterest(e),
                  selected: t.has(e),
                  style: jr.selectionPillStyles,
                  text: e,
                })
              }),
              b()(p()(n), '_renderSelectionPill', function (e) {
                var t = n.state.selectedInterestIds.has(e.id),
                  a = n._handleToggleInterest(e.id, t)
                return y.a.createElement(Rr.a, {
                  compact: !0,
                  key: 'selectionPill_'.concat(e.id),
                  onClick: a,
                  selected: t,
                  style: jr.selectionPillStyles,
                  text: e.name,
                })
              }),
              b()(p()(n), '_shouldShowSkipInstead', function () {
                var e = n.state,
                  t = e.selectedCustomInterestIds,
                  a = e.selectedInterestIds
                return n.props.subtask.skip_link && 0 === a.size && 0 === t.size
              }),
              b()(p()(n), '_handleSuggestionSelected', function (e) {
                var t = n.state,
                  a = t.customInterestIds,
                  r = t.selectedCustomInterestIds
                if (e.type === Br.b.Topic || e.type === Br.b.Hashtag) {
                  var i = e.data.topic,
                    o = { topic: i, ttt_token: void 0 }
                  a.has(i) ||
                    n.setState({
                      customInterests: n.state.customInterests.concat([o]),
                      customInterestIds: Object(tt.a)(E()(a)).add(i),
                      selectedCustomInterestIds: Object(tt.a)(E()(r)).add(i),
                      shouldRenderCustomInterests: !0,
                    })
                }
              }),
              b()(p()(n), '_handleShowMore', function (e) {
                return function () {
                  var t = n.state.groups,
                    a = t.find(function (t) {
                      return t.header === e.header
                    })
                  a && (a.expanded = !0), n.setState({ groups: t })
                }
              }),
              b()(p()(n), '_handleToggleCustomInterest', function (e) {
                return function () {
                  var t = Object(tt.a)(E()(n.state.selectedCustomInterestIds))
                  t.has(e)
                    ? (t.delete(e), n.setState({ selectedCustomInterestIds: t }))
                    : n.setState({ selectedCustomInterestIds: t.add(e) })
                }
              }),
              b()(p()(n), '_handleToggleInterest', function (e, t) {
                return function () {
                  var a = Object(tt.a)(E()(n.state.selectedInterestIds))
                  t
                    ? (a.delete(e), n.setState({ selectedInterestIds: a }))
                    : n.setState({ selectedInterestIds: a.add(e) })
                }
              }),
              b()(p()(n), '_handleNextButtonClick', function () {
                var e = n.props,
                  t = e.onNavigate,
                  a = e.subtask,
                  r = e.subtaskId,
                  i = e.updateFlow,
                  o = n.state,
                  s = o.customInterests,
                  l = o.selectedCustomInterestIds,
                  c = s.reduce(function (e, t) {
                    return l.has(t.topic) && e.push({ custom_interest: t.topic, ttt_token: t.ttt_token }), e
                  }, [])
                i(r, {
                  link: a.next_link.link_id,
                  selected_interest_ids: Array.from(n.state.selectedInterestIds),
                  selected_custom_interests: c,
                }),
                  t(a.next_link)
              }),
              b()(p()(n), '_handleSkipButtonClick', function () {
                var e = n.props,
                  t = e.onNavigate,
                  a = e.subtask,
                  r = e.subtaskId,
                  i = e.updateFlow
                a.skip_link && i(r, { link: a.skip_link.link_id }), a.skip_link && t(a.skip_link)
              })
            var r = e.initialCustomInterestIds,
              i = e.initialCustomInterests,
              o = e.initialSelectedInterestIds,
              s = e.subtask.selected_items
            return (
              (n.state = {
                groups: e.subtask.groups || [],
                customInterests: E()(i),
                customInterestIds: Object(tt.a)(r),
                selectedCustomInterestIds: Object(tt.a)(r),
                selectedInterestIds: o && o.length > 0 ? Object(tt.a)(o) : Object(tt.a)(s || []),
                shouldRenderCustomInterests: i.length > 0,
              }),
              n
            )
          }
          return (
            u()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.onNavigate,
                    a = e.passthroughOcfScreenProps,
                    n = e.subtask,
                    i = e.subtaskInputs,
                    o = n.next_link,
                    s = n.primary_text,
                    l = n.secondary_text,
                    c = n.skip_link,
                    u = this.state.groups
                  return y.a.createElement(
                    ye.a,
                    r()({}, a, {
                      footer: y.a.createElement(B, {
                        actionLabel: this._shouldShowSkipInstead() || null == o ? void 0 : o.label,
                        actionTestID: Or,
                        onAction: this._handleNextButtonClick,
                        onSecondaryAction: this._handleSkipButtonClick,
                        secondaryActionLabel: this._shouldShowSkipInstead() ? (null == c ? void 0 : c.label) : void 0,
                        secondaryActionTestID: Lr,
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
                    n.hide_search
                      ? null
                      : y.a.createElement(
                          F.a,
                          { style: jr.searchContainer },
                          y.a.createElement(Nr.c, {
                            filter: Vr,
                            maxTopics: 8,
                            onItemClick: this._handleSuggestionSelected,
                            placeholder: n.hint,
                            rounded: !0,
                            shouldAutoFocus: !0,
                            shouldClearOnSelect: !0,
                            source: Br.d.WelcomeFlow,
                            withFocusStyling: !0,
                          }),
                        ),
                    this._maybeRenderCustomInterests(),
                    y.a.createElement(F.a, null, u.map(this._renderGroup)),
                    this.props.errorDialog,
                  )
                },
              },
            ]),
            a
          )
        })(y.a.Component),
        jr = L.a.create(function (e) {
          return {
            searchContainer: { marginBottom: e.spaces.space16, zIndex: 1 },
            selectionPillStyles: { margin: e.spaces.space4 },
            pillsContainer: { flexDirection: 'row', flexWrap: 'wrap' },
            groupHeader: { marginTop: e.spaces.space12, marginBottom: e.spaces.space12 },
            group: { marginBottom: e.spaces.space12 },
          }
        }),
        Ur = Fr(Mr),
        zr = a('Ukpf'),
        Hr = a('Qwev'),
        Wr = function (e) {
          var t = y.a.useState(!1),
            a = W()(t, 2),
            n = a[0],
            r = a[1],
            i = y.a.useRef(null),
            s = e || {},
            l = s.onNavigate,
            c = s.subtask,
            u = c.next_link,
            d = c.timeout_ms,
            p = void 0 === d ? 2e3 : d,
            h = c.url,
            m = s.subtaskId,
            _ = s.updateFlow,
            v = y.a.useCallback(
              function () {
                var e = Math.min(100, p),
                  t = 0,
                  a = setInterval(function () {
                    var n = i.current && i.current.value ? { response: i.current.value } : void 0
                    ;(t += e), (n || t >= p) && (clearInterval(a), _(m, o()(o()({}, n), {}, { link: u.link_id })), l(u))
                  }, e)
                return a
              },
              [u, l, _, m, p],
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
              n ? null : y.a.createElement(Hr.a, { style: Gr.activityIndicator }),
            )
          )
        },
        Gr = L.a.create(function (e) {
          return { activityIndicator: { height: '100%' } }
        }),
        Kr = a('mjJ+'),
        qr = (function (e) {
          m()(a, e)
          var t = v()(a)
          function a() {
            var e
            l()(this, a)
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              b()(p()(e), '_makeNavFunction', function (t) {
                return function () {
                  var a = e.props,
                    n = a.onNavigate,
                    r = a.subtaskId
                  ;(0, a.updateFlow)(r, { link: t.link_id }), n(t)
                }
              }),
              b()(p()(e), '_itemFromNavLink', function (t) {
                return { text: t.label || '', onClick: e._makeNavFunction(t) }
              }),
              e
            )
          }
          return (
            u()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.onNavigate,
                    a = e.subtask,
                    n = e.subtaskInputs
                  return y.a.createElement(Kr.a, {
                    cancelButtonLabel: a.cancel_link && a.cancel_link.text,
                    description: a.primary_text
                      ? y.a.createElement(
                          D,
                          r()({}, a.primary_text, {
                            nativeID: V.b,
                            onNavigate: t,
                            style: { padding: L.a.theme.spacesPx.space16 },
                            subtaskInputs: n,
                          }),
                        )
                      : null,
                    items: a.primary_action_links.map(this._itemFromNavLink),
                    onCloseRequested: a.cancel_link ? this._makeNavFunction(a.cancel_link) : Oe.a,
                  })
                },
              },
            ]),
            a
          )
        })(y.a.Component),
        Yr = a('vEo5'),
        Xr = Object(yt.createSelector)(
          Yr.selectShouldPromptBrowserPush,
          function (e) {
            return Yr.selectBrowserPushStatus(e)
          },
          function (e, t) {
            return { promptAllowed: e, pushSettingsFetchStatus: t.fetchStatus, subscribed: t.subscribed }
          },
        ),
        Zr = {
          createLocalApiErrorHandler: Object(Ke.createLocalApiErrorHandlerWithContextFactory)(
            'NOTIFICATIONS_PERMISSIONS_PROMPT',
          ),
          dismissPushNotificationsPrompt: Yr.dismissPushNotificationsPrompt,
          fetchPushSettingsIfNeeded: Yr.fetchPushSettingsIfNeeded,
          loadPushPromptSettingsIfNeeded: Yr.loadPushPromptSettingsIfNeeded,
          pushSubscribe: Yr.pushSubscribe,
        },
        Jr = Object(gt.f)(Xr, Zr),
        Qr = a('5pef')
      function $r(e, t) {
        e.granted_link.label ||
          Object(Nt.a)('Invalid notification permission prompt subtask: granted_link does not have a label', {
            extra: { subtaskId: t, grantedLinkId: e.granted_link.link_id },
          })
      }
      var ei = Jr(
          (function (e) {
            m()(a, e)
            var t = v()(a)
            function a() {
              var e
              l()(this, a)
              for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]
              return (
                (e = t.call.apply(t, [this].concat(r))),
                b()(p()(e), '_actionClicked', function (t) {
                  var a = e.props,
                    n = a.onNavigate,
                    r = a.subtaskId
                  ;(0, a.updateFlow)(r, { link: t.link_id }), n(t)
                }),
                b()(p()(e), '_handleSkip', function () {
                  var t = e.props,
                    a = t.dismissPushNotificationsPrompt,
                    n = t.subtask
                  a(), e._actionClicked(n.denied_link)
                }),
                b()(p()(e), '_handleConfirm', function () {
                  var t = e.props,
                    a = t.pushSubscribe,
                    n = t.subtask
                  a().then(function () {
                    e._actionClicked(n.granted_link)
                  })
                }),
                b()(p()(e), '_skipIfPushPromptNotAllowed', function () {
                  var t = e.props,
                    a = t.promptAllowed,
                    n = t.subscribed,
                    r = t.subtask
                  a || e._actionClicked(n ? r.granted_link : r.denied_link)
                }),
                e
              )
            }
            return (
              u()(a, [
                {
                  key: 'componentDidMount',
                  value: function () {
                    var e = this.props,
                      t = e.createLocalApiErrorHandler,
                      a = e.fetchPushSettingsIfNeeded,
                      n = e.pushSettingsFetchStatus
                    $r(e.subtask, e.subtaskId),
                      a().catch(t(b()({}, ta.a.AppInReadOnlyMode, { customAction: Oe.a }))),
                      n === Ye.a.LOADED && this._skipIfPushPromptNotAllowed()
                  },
                },
                {
                  key: 'componentDidUpdate',
                  value: function (e) {
                    var t = this.props,
                      a = t.pushSettingsFetchStatus,
                      n = t.subtask
                    a === Ye.a.LOADED &&
                      e.pushSettingsFetchStatus !== Ye.a.LOADED &&
                      this._skipIfPushPromptNotAllowed(),
                      n !== e.subtask && $r(n, this.props.subtaskId)
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var e = this.props,
                      t = e.onNavigate,
                      a = e.passthroughOcfScreenProps,
                      n = e.promptAllowed,
                      i = e.subtask,
                      o = e.subtaskInputs,
                      s = i.primary_text
                        ? y.a.createElement(
                            D,
                            r()({}, i.primary_text, { nativeID: V.b, onNavigate: t, subtaskInputs: o }),
                          )
                        : null,
                      l = i.secondary_text
                        ? y.a.createElement(D, r()({}, i.secondary_text, { onNavigate: t, subtaskInputs: o }))
                        : null
                    return n && i.granted_link.label
                      ? y.a.createElement(
                          ye.a,
                          r()({ hideLogo: !0 }, a),
                          y.a.createElement(Le.a, {
                            actionLabel: i.granted_link.label,
                            graphic: Qr.a,
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
              a
            )
          })(y.a.Component),
        ),
        ti = {
          callOnboardingPath: vt.b,
          createLocalApiErrorHandler: Object(Ke.createLocalApiErrorHandlerWithContextFactory)('OCF_OPEN_LINK'),
        },
        ai = Object(gt.b)(ti)(
          (function (e) {
            m()(a, e)
            var t = v()(a)
            function a() {
              var e
              l()(this, a)
              for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]
              return (
                (e = t.call.apply(t, [this].concat(r))),
                b()(p()(e), '_hitCallbackPath', function () {
                  var t = e.props,
                    a = t.callOnboardingPath,
                    n = t.createLocalApiErrorHandler,
                    r = t.flowName,
                    i = t.subtask.onboarding_callback_path
                  return i ? a(i).catch(n(oa(r, void 0, Oe.a))) : Promise.resolve()
                }),
                e
              )
            }
            return (
              u()(a, [
                {
                  key: 'render',
                  value: function () {
                    var e = this.props,
                      t = e.onNavigate,
                      a = e.subtask,
                      n = e.subtaskId
                    return y.a.createElement(Je, {
                      navigationLink: a.link,
                      onNavigate: t,
                      subtaskAction: this._hitCallbackPath,
                      subtaskId: n,
                    })
                  },
                },
              ]),
              a
            )
          })(y.a.Component),
        ),
        ni = a('TpKd'),
        ri = Object(yt.createSelector)(vt.o, vt.x, function (e, t) {
          return { navigationContext: e, verificationSendFailureMessage: t }
        }),
        ii = {
          createLocalApiErrorHandler: Object(Ke.createLocalApiErrorHandlerWithContextFactory)(
            'OCF_FLOW_PHONE_VERIFICATION',
          ),
          verifyIdentifier: vt.B,
        },
        oi = Object(gt.f)(ri, ii),
        si = 'ocfPhoneVerificationNextLink',
        li = 'normalized_phone',
        ci = (function (e) {
          m()(a, e)
          var t = v()(a)
          function a(e, n) {
            var r
            l()(this, a),
              (r = t.call(this, e, n)),
              b()(p()(r), '_sendSmsVerificationRequest', function () {
                var e = r.props,
                  t = e.createLocalApiErrorHandler,
                  a = e.navigationContext,
                  n = e.onNavigate,
                  i = e.subtask,
                  o = e.subtaskInputs,
                  s = e.verifyIdentifier,
                  l = i.phone_number && Object(S.g)(o, i.phone_number),
                  c = i.phone_country_code && Object(S.g)(o, i.phone_country_code),
                  u = a && a.action ? a.action === k.A.ResendVoice : !!i.send_via_voice
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
                      var a = r.props,
                        o = a.flowName,
                        s = a.verificationSendFailureMessage
                      t(oa(o, s || ra))(e), n(i.fail_link)
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
                      var a = e.code
                      a
                        ? ((r._smsAutoVerifyAbortController = void 0),
                          r.setState({ code: a }, function () {
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
                  a = e.subtask,
                  n = e.subtaskId,
                  i = e.updateFlow,
                  o = r.state,
                  s = o.code,
                  l = o.normalized_phone
                i(n, { code: s, link: a.next_link.link_id, normalized_phone: l, by_voice: !!a.send_via_voice }),
                  t(a.next_link)
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
            u()(a, [
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
                    a = e.passthroughOcfScreenProps,
                    n = e.progressIndication,
                    i = e.subtask,
                    o = e.subtaskInputs,
                    s = i.next_link,
                    l = i.primary_text,
                    c = i.secondary_text,
                    u = y.a.createElement(
                      D,
                      r()({}, i.detail_text, { color: 'link', onNavigate: t, style: ui.detailLink, subtaskInputs: o }),
                    )
                  return y.a.createElement(
                    ye.a,
                    r()({}, a, {
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
                      progressIndication: n,
                      providePadding: !0,
                    }),
                    y.a.createElement(sa.a, {
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
            a
          )
        })(y.a.Component)
      b()(ci, 'contextType', Qe.a)
      var ui = L.a.create(function (e) {
          return { detailLink: { marginTop: e.spaces.space16 } }
        }),
        di = Object(Rt.a)(oi(ci), { component: 'phone_verification' }),
        pi = 'discoverable_by_email',
        hi = 'discoverable_by_phone',
        mi = (function (e) {
          m()(a, e)
          var t = v()(a)
          function a(e) {
            var n
            l()(this, a),
              (n = t.call(this, e)),
              b()(p()(n), '_formatSubtaskInputsForRedux', function (e) {
                return {
                  link: n.props.subtask.next_link,
                  discoverable_by_email: e.discoverable_by_email ? 1 : 0,
                  discoverable_by_phone: e.discoverable_by_phone ? 1 : 0,
                }
              }),
              b()(p()(n), '_getInitialSubtaskInputs', function () {
                var e = n.props,
                  t = e.subtaskId,
                  a = e.subtaskInputs
                return {
                  discoverable_by_email: 0 !== Object(S.e)(a, { key: pi, subtask_id: t }),
                  discoverable_by_phone: 0 !== Object(S.e)(a, { key: hi, subtask_id: t }),
                }
              }),
              b()(p()(n), '_handleDoneButtonClick', function () {
                var e = n.props,
                  t = e.onNavigate,
                  a = e.subtask,
                  r = e.subtaskId
                ;(0, e.updateFlow)(r, n._formatSubtaskInputsForRedux(n.state)), t(a.next_link)
              }),
              b()(p()(n), '_handleDiscoverableByEmailToggle', function (e) {
                n.setState({ discoverable_by_email: e })
              }),
              b()(p()(n), '_handleDiscoverableByPhoneToggle', function (e) {
                n.setState({ discoverable_by_phone: e })
              })
            var r = n._getInitialSubtaskInputs()
            return (n.state = o()({}, r)), n
          }
          return (
            u()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.state,
                    t = e.discoverable_by_email,
                    a = e.discoverable_by_phone,
                    n = this.props,
                    i = n.onNavigate,
                    o = n.passthroughOcfScreenProps,
                    s = n.subtask,
                    l = n.subtaskInputs,
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
                      F.a,
                      { accessibilityRole: 'label', style: de.option },
                      y.a.createElement(
                        F.a,
                        { style: de.checkboxText },
                        y.a.createElement(x.b, null, s.discoverable_by_email_label),
                        y.a.createElement(
                          D,
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
                      F.a,
                      { accessibilityRole: 'label', style: de.option },
                      y.a.createElement(
                        F.a,
                        { style: de.checkboxText },
                        y.a.createElement(x.b, null, s.discoverable_by_phone_label),
                        y.a.createElement(
                          D,
                          r()({}, s.discoverable_by_phone_detail_text, {
                            color: 'gray700',
                            onNavigate: i,
                            size: 'subtext2',
                            subtaskInputs: l,
                          }),
                        ),
                      ),
                      y.a.createElement(st.a, { checked: a, onChange: this._handleDiscoverableByPhoneToggle }),
                    ),
                  )
                },
              },
            ]),
            a
          )
        })(y.a.Component),
        _i =
          (a('TJCb'),
          a('JY2o'),
          a('/gI4'),
          a('rbfH'),
          a('jbUL'),
          a('slc3'),
          a('WmpB'),
          a('3Cj0'),
          a('QliG'),
          a('XYSm'),
          a('/9A7'),
          a('HcE/'),
          a('Uj98'),
          a('gp7C'),
          a('GU6o'),
          a('aacc'),
          a('ZVwl'),
          a('SgSm'),
          a('8ooc'),
          a('0NMN'),
          a('2dnG'),
          a('fecs'),
          a('U/yR'),
          a('i3m+'),
          a('6JDI'),
          a('VsJa'),
          a('PEyR'),
          a('nndn'),
          a('eEZx'),
          a('zsxB'),
          a('2c7d'),
          a('0zG9'),
          a('YeIG')),
        vi = function (e) {
          var t,
            a = (t = e).replace(/-/g, '+').replace(/_/g, '/') + '===='.substring(0, (4 - (t.length % 4)) % 4),
            n = window.atob(a)
          return new Uint8Array(n.length).map(function (e, t) {
            return n.charCodeAt(t)
          }).buffer
        },
        fi = function (e) {
          var t = new Uint8Array(e),
            a = ''
          return (
            t.forEach(function (e) {
              return (a += String.fromCharCode(e))
            }),
            btoa(a).replace(/\+/g, '-').replace(/(\/)/g, '_').replace(/=/g, '')
          )
        },
        bi = function (e) {
          return e.map(function (e) {
            return { type: 'public-key', id: vi(e.id) }
          })
        },
        gi = (function (e) {
          m()(a, e)
          var t = v()(a)
          function a() {
            var e
            l()(this, a)
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              b()(
                p()(e),
                '_supportsWebAuthn',
                !!window.PublicKeyCredential &&
                  'function' == typeof window.PublicKeyCredential &&
                  'function' == typeof window.PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable,
              ),
              b()(p()(e), '_navigateAndUpdate', function (t, a) {
                var n = e.props,
                  r = n.onNavigate,
                  i = n.subtaskId,
                  o = n.updateFlow
                a && o(i, { challenge_response: a, link: t.link_id }), r(t)
              }),
              b()(p()(e), '_triggerWebAuthn', function (t) {
                var a = e.props.subtask,
                  n = a.challenge,
                  r = a.fail_link,
                  i = a.next_link
                e._getCredentialsRequest(n, t)()
                  .then(function (a) {
                    if (a) {
                      var n = e._getFinalResult(a, t)
                      e._navigateAndUpdate(i, n)
                    } else;
                  })
                  .catch(function () {
                    e._navigateAndUpdate(r)
                  })
              }),
              b()(p()(e), '_getCredentialsRequest', function (e, t) {
                var a = JSON.parse(e)
                if (t === k.r.enrollment) {
                  var n = {
                    publicKey: {
                      challenge: vi(a.challenge),
                      rp: a.rp,
                      user: o()(o()({}, a.user), {}, { id: vi(a.user.id) }),
                      pubKeyCredParams: a.pubKeyCredParams,
                      attestation: a.attestation,
                      excludeCredentials: a.excludeCredentials.map(function (e) {
                        return o()(o()({}, e), {}, { id: vi(e.id) })
                      }),
                      extensions: a.extensions,
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
                      (null === (e = navigator.credentials) || void 0 === e ? void 0 : e.create(n)) || Promise.resolve()
                    )
                  }
                }
                var r = a.publicKeyCredentialRequestOptions,
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
                var a,
                  n = e.id,
                  r = e.response,
                  i = e.type
                return (
                  'enrollment' === t && r.attestationObject
                    ? (a = {
                        id: n,
                        type: i,
                        response: { clientDataJSON: fi(r.clientDataJSON), attestationObject: fi(r.attestationObject) },
                        clientExtensionResults: {},
                      })
                    : 'verification' === t &&
                      r.authenticatorData &&
                      (a = {
                        id: n,
                        type: i,
                        response: {
                          clientDataJSON: fi(r.clientDataJSON),
                          authenticatorData: fi(r.authenticatorData),
                          signature: fi(r.signature),
                          userHandle: '',
                        },
                        clientExtensionResults: { appid: !0 },
                      }),
                  JSON.stringify(a || '')
                )
              }),
              e
            )
          }
          return (
            u()(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props.subtask,
                    t = e.action_type,
                    a = e.unsupported_link
                  this._supportsWebAuthn
                    ? Object(_i.a)(this.props.errorDialog) && this._triggerWebAuthn(t)
                    : a && this._navigateAndUpdate(a)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.errorDialog,
                    a = e.onNavigate,
                    n = e.passthroughOcfScreenProps,
                    i = e.subtask,
                    o = e.subtaskInputs
                  return y.a.createElement(
                    ye.a,
                    r()({}, n, { providePadding: !0 }),
                    t ||
                      y.a.createElement(
                        F.a,
                        null,
                        this._supportsWebAuthn
                          ? null
                          : y.a.createElement(
                              D,
                              r()({}, i.unsupported_error_message, { onNavigate: a, subtaskInputs: o }),
                            ),
                      ),
                  )
                },
              },
            ]),
            a
          )
        })(y.a.Component),
        yi = a('LCtV'),
        ki = a('AspN'),
        wi = a('53j7'),
        Ci = Object(yt.createSelector)(
          bt.e.selectLoggedInUser,
          function (e, t) {
            var a = wi.h(e),
              n = a ? ki.k(e, a) : []
            return W()(n, 1)[0]
          },
          function (e, t) {
            return { loggedInUser: e, avatarMedia: t }
          },
        ),
        Ii = { addAvatarMedia: wi.a, removeAvatarMedia: wi.d },
        Ei = Object(gt.f)(Ci, Ii),
        xi = a('fS8x'),
        Si = a('P68U'),
        Ti = a('eyty'),
        Pi = 'ocfSelectAvatarSkipForNowButton',
        Ai = 'ocfSelectAvatarNextButton',
        Di = (function (e) {
          m()(a, e)
          var t = v()(a)
          function a(e) {
            var n
            return (
              l()(this, a),
              (n = t.call(this, e)),
              b()(p()(n), '_handleCropDone', function () {
                return n.setState({ done: !0, showCropper: !1 })
              }),
              b()(p()(n), '_handleCropCancel', function () {
                return n._handleCropDone()
              }),
              b()(p()(n), '_handleImageMediaChange', function (e) {
                ;(0, n.props.addAvatarMedia)(e[0]), n.setState({ mediaId: e[0], showCropper: !0, done: !0 })
              }),
              b()(p()(n), '_handleImageMediaFailure', function () {
                n._handleSkipButtonClick()
              }),
              b()(p()(n), '_handleImageMediaRemove', function () {
                ;(0, n.props.removeAvatarMedia)(), n.setState({ done: !1, showCropper: !1 })
              }),
              b()(p()(n), '_handleDoneButtonClick', function () {
                var e = n.props,
                  t = e.onNavigate,
                  a = e.subtask,
                  r = e.subtaskId
                ;(0, e.updateFlow)(r, { link: a.next_link.link_id }), t(a.next_link)
              }),
              b()(p()(n), '_handleSkipButtonClick', function () {
                var e = n.props,
                  t = e.onNavigate,
                  a = e.subtask.skip_link,
                  r = e.subtaskId,
                  i = e.updateFlow
                a && i(r, { link: a.link_id }), a && t(a)
              }),
              (n.state = { done: !1, showCropper: !1, mediaId: void 0 }),
              n
            )
          }
          return (
            u()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.errorDialog,
                    a = e.onNavigate,
                    n = e.passthroughOcfScreenProps,
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
                        actionDisabled: !u && !this.state.mediaId,
                        actionLabel: this.state.done || !u ? (null == s ? void 0 : s.label) : void 0,
                        actionTestID: Ai,
                        onAction: this._handleDoneButtonClick,
                        onSecondaryAction: this._handleSkipButtonClick,
                        secondaryActionLabel: this.state.done || null == u ? void 0 : u.label,
                        secondaryActionTestID: Pi,
                      }),
                      header: y.a.createElement(ge, {
                        onNavigate: a,
                        primaryTextProp: l,
                        secondaryTextProp: c,
                        subtaskInputs: o,
                      }),
                      providePadding: !0,
                    }),
                    y.a.createElement(F.a, null, this._renderMediaPickerWithPreview()),
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
                    a = e.loggedInUser,
                    n = this.state.done
                  return y.a.createElement(
                    F.a,
                    { style: Fi.centerContent },
                    y.a.createElement(Si.default, {
                      borderRadius: yi.a.INFINITE,
                      currentContent: a
                        ? y.a.createElement(Be.a, { size: 'custom', uri: a.profile_image_url_https })
                        : null,
                      location: Ti.d.Avatar,
                      mediaItem: t,
                      onChange: this._handleImageMediaChange,
                      onFailure: this._handleImageMediaFailure,
                      onRemove: n ? this._handleImageMediaRemove : void 0,
                      rootStyle: Fi.avatarContainer,
                    }),
                  )
                },
              },
            ]),
            a
          )
        })(y.a.Component),
        Fi = L.a.create(function (e) {
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
        Oi = Ei(Di),
        Li = a('I/ms'),
        Ni = function (e, t) {
          var a = wi.h(e),
            n = a ? ki.k(e, a) : []
          return W()(n, 1)[0]
        },
        Ri = function (e, t) {
          var a = wi.i(e),
            n = a ? ki.k(e, a) : []
          return W()(n, 1)[0]
        },
        Bi = Object(Ge.a)()
          .propsFromState(function () {
            return { loggedInUser: bt.e.selectLoggedInUser, avatarMedia: Ni, bannerMedia: Ri }
          })
          .propsFromActions(function () {
            return { addBannerMedia: wi.b, removeBannerMedia: wi.e }
          }),
        Vi = 'ocfSelectBannerSkipForNowButton',
        Mi = 'ocfSelectBannerNextButton',
        ji = a('9Xij'),
        Ui = a('U+bB'),
        zi = (function (e) {
          m()(a, e)
          var t = v()(a)
          function a(e) {
            var n
            return (
              l()(this, a),
              (n = t.call(this, e)),
              b()(p()(n), '_handleImageMediaRemove', function () {
                ;(0, n.props.removeBannerMedia)(), n.setState({ done: !1, showCropper: !1 })
              }),
              b()(p()(n), '_handleCropDone', function () {
                return n.setState({ done: !0, showCropper: !1 })
              }),
              b()(p()(n), '_handleCropCancel', function () {
                return n._handleCropDone()
              }),
              b()(p()(n), '_handleImageMediaChange', function (e) {
                ;(0, n.props.addBannerMedia)(e[0]), n.setState({ media_id: e[0], showCropper: !0, done: !0 })
              }),
              b()(p()(n), '_handleImageMediaFailure', function () {
                n._handleSkipButtonClick()
              }),
              b()(p()(n), '_handleDoneButtonClick', function () {
                var e = n.props,
                  t = e.onNavigate,
                  a = e.subtask,
                  r = e.subtaskId
                ;(0, e.updateFlow)(r, { link: a.next_link.link_id }), t(a.next_link)
              }),
              b()(p()(n), '_handleSkipButtonClick', function () {
                var e = n.props,
                  t = e.onNavigate,
                  a = e.subtask.skip_link,
                  r = e.subtaskId,
                  i = e.updateFlow
                a && i(r, { link: a.link_id }), a && t(a)
              }),
              (n.state = { done: void 0, media_id: void 0, showCropper: !1 }),
              n
            )
          }
          return (
            u()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.errorDialog,
                    a = e.onNavigate,
                    n = e.passthroughOcfScreenProps,
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
                        actionDisabled: !u && !this.state.media_id,
                        actionLabel: this.state.done || !u ? (null == s ? void 0 : s.label) : void 0,
                        actionTestID: Mi,
                        onAction: this._handleDoneButtonClick,
                        onSecondaryAction: this._handleSkipButtonClick,
                        secondaryActionLabel: this.state.done || null == u ? void 0 : u.label,
                        secondaryActionTestID: Vi,
                      }),
                      header: y.a.createElement(ge, {
                        onNavigate: a,
                        primaryTextProp: l,
                        secondaryTextProp: c,
                        subtaskInputs: o,
                        withHeaderImage: !0,
                      }),
                      providePadding: !0,
                    }),
                    y.a.createElement(
                      F.a,
                      { style: Hi.container },
                      this._renderMediaPickerWithPreview(),
                      y.a.createElement(F.a, { style: Li.a.avatarAndButton }, this._renderAvatar()),
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
                    a = e.loggedInUser,
                    n = t || (!!a && !!a.profile_banner_url),
                    r = this.state.done
                  return y.a.createElement(Si.default, {
                    aspectRatio: 3,
                    currentContent: y.a.createElement(
                      ji.a,
                      { ratio: L.a.theme.aspectRatios.profileBanner },
                      n && a
                        ? y.a.createElement(Ui.a, { source: { uri: a.profile_banner_url }, style: Hi.banner })
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
                    a = e.loggedInUser,
                    n = (t && t.mediaFile && t.mediaFile.url) || (a && a.profile_image_url_https)
                  return y.a.createElement(Be.a, {
                    accessibilityHidden: !0,
                    borderColor: 'white',
                    borderWidth: 'medium',
                    focusable: !1,
                    size: 'custom',
                    style: Li.a.avatar,
                    uri: n,
                  })
                },
              },
              {
                key: '_renderNames',
                value: function () {
                  var e = this.props.loggedInUser
                  if (!e) return null
                  var t = e.name,
                    a = '@'.concat(e.screen_name)
                  return y.a.createElement(
                    F.a,
                    { style: Hi.nameContainer },
                    y.a.createElement(
                      x.b,
                      { align: 'left', style: Hi.names },
                      y.a.createElement(
                        x.b,
                        { accessibilityRole: 'heading', size: 'title4', style: Hi.displayName, weight: 'bold' },
                        t,
                      ),
                      y.a.createElement(x.b, { color: 'gray700', style: Hi.screenName }, a),
                    ),
                  )
                },
              },
            ]),
            a
          )
        })(y.a.Component),
        Hi = L.a.create(function (e) {
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
        Gi = a('QK5w'),
        Ki = a('BTou'),
        qi = a('K1iM'),
        Yi = a.n(qi),
        Xi = a('RjwM'),
        Zi = L.a.create(function (e) {
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
            a = e.label,
            n = e.onPress,
            r = [Zi.pillContainer, t ? Zi.pillContainerModal : Zi.pillContainerNarrow]
          return y.a.createElement(
            F.a,
            { style: r },
            y.a.createElement(
              O.a,
              { icon: y.a.createElement(Xi.a, { style: Zi.icon }), onPress: n, type: 'primaryFilled' },
              y.a.createElement(x.b, { size: 'body', weight: 'normal' }, a),
            ),
          )
        },
        Qi = a('7nmT'),
        $i = a.n(Qi),
        eo = 'ocfSettingsListNextButton',
        to = 'ocfSettingsListSkipButton',
        ao = 'ocfSettingsListPrimaryText',
        no = a('jtO7'),
        ro = a('sXY3'),
        io = a('+d3d'),
        oo = (function (e) {
          m()(a, e)
          var t = v()(a)
          function a(e) {
            var n
            l()(this, a),
              (n = t.call(this, e)),
              b()(p()(n), '_formatSubtaskInputsForStore', function (e) {
                return Object(ro.a)(e).map(function (e) {
                  var t = W()(e, 2),
                    a = t[0],
                    n = t[1],
                    r = n.result,
                    i = n.type
                  return { key: a, response_data: b()({}, i, { result: r }) }
                })
              }),
              b()(p()(n), '_loadSubtaskInputsFromStore', function () {
                var e = n.props,
                  t = e.subtaskId,
                  a = e.subtaskInputs
                return (Object(S.e)(a, { key: k.s, subtask_id: t }, []) || []).reduce(function (e, t) {
                  var a = t.key,
                    n = Object.keys(t.response_data),
                    r = W()(n, 1)[0],
                    i = t.response_data[r].result
                  return (e[a] = { result: i, type: r }), e
                }, {})
              }),
              b()(p()(n), '_updateFlow', function (e) {
                var t,
                  a = n.props,
                  r = a.subtask,
                  i = a.subtaskId,
                  o = a.updateFlow,
                  s = r.next_link,
                  l = n.state.settingsValues
                if (e) o(i, ((t = {}), b()(t, k.s, n._formatSubtaskInputsForStore(l)), b()(t, 'link', e.link_id), t))
                else if (s) {
                  var c
                  o(i, ((c = {}), b()(c, k.s, n._formatSubtaskInputsForStore(l)), b()(c, 'link', s.link_id), c))
                }
              }),
              b()(p()(n), '_handleShowMore', function () {
                n.setState({ showMore: !0 })
              }),
              b()(p()(n), '_handleNextButtonPress', function () {
                var e = n.props,
                  t = e.onNavigate,
                  a = e.subtask.next_link
                n._updateFlow(), a && t(a)
              }),
              b()(p()(n), '_handleSubListBackClick', function () {
                n.setState({ isSubList: !1, showDividers: !1, showMoreConfig: null, subList: [], subListHeader: null }),
                  n._updateFlow()
              }),
              b()(p()(n), '_handleSettingGroupClick', function (e) {
                var t,
                  a = e.primary_text,
                  r = e.value_data,
                  i = e.value_type,
                  o = null == r || null === (t = r.settings_group_data) || void 0 === t ? void 0 : t.settings
                o &&
                  i === k.u.SettingsGroup &&
                  n.setState({ isSubList: !0, showDividers: !1, showMoreConfig: null, subList: o, subListHeader: a })
              }),
              b()(p()(n), '_handleScrollPromptClick', function () {
                n._viewport && n._viewport.scrollBy(n._viewport.getRect().getHeight())
              }),
              b()(p()(n), '_handleViewportSet', function (e) {
                n.props.subtask.scroll_hint &&
                  ((n._viewport = e), n._viewport && n._viewport.addScrollListener(n._handleViewportScroll))
              }),
              b()(
                p()(n),
                '_handleViewportScroll',
                Object(io.a)(function () {
                  n.state.lastSettingSeen || n.setState({ lastSettingSeen: n._isLastSettingInViewport() })
                }, 250),
              ),
              b()(p()(n), '_isLastSettingInViewport', function () {
                if (n._lastSetting && n._viewport) {
                  var e,
                    t = n._lastSetting.getBoundingClientRect(),
                    a = null === (e = n._viewport) || void 0 === e ? void 0 : e.getRect()
                  if (a) return t.top >= a.getTop() && t.bottom <= a.getBottom()
                }
                return !1
              }),
              b()(p()(n), '_isPrompt', function () {
                return 'prompt' === n.props.subtask.style
              }),
              b()(p()(n), '_setSettingsRef', function (e) {
                return function (t) {
                  var a = n.state.isSubList
                  if (n.props.subtask.scroll_hint && !a && e && void 0 === n._lastSetting) {
                    n._lastSetting = $i.a.findDOMNode(t)
                    var r = n._isLastSettingInViewport()
                    r && !n.state.lastSettingSeen && n.setState({ lastSettingSeen: r })
                  } else n._lastSetting = void 0
                }
              }),
              b()(p()(n), '_handleSettingToggle', function (e) {
                var t = e.value_identifier,
                  a = e.value_type
                if (t && Object(S.i)(a)) {
                  var r = n.state.settingsValues
                  n.setState({
                    settingsValues: o()(o()({}, r), {}, b()({}, t, o()(o()({}, r[t]), {}, { result: !r[t].result }))),
                  })
                }
              }),
              b()(p()(n), '_handleSettingTextChange', function (e, t) {
                var a = e.value_identifier
                if (a) {
                  var r = n.state.settingsValues
                  n.setState({ settingsValues: o()(o()({}, r), {}, b()({}, a, o()(o()({}, r[a]), {}, { result: t }))) })
                }
              }),
              b()(p()(n), '_handleCancelButtonPress', function () {
                var e = n.props,
                  t = e.onNavigate,
                  a = e.subtask.cancel_link
                a && (n._updateFlow(a), t(a))
              }),
              b()(p()(n), '_getSettingsValueNextLink', function () {
                var e = n.props.subtask
                if (e.next_link) return e.next_link
                var t,
                  a = Yi()(e.settings)
                try {
                  for (a.s(); !(t = a.n()).done; ) {
                    var r,
                      i = t.value,
                      o = i.value_data,
                      s = i.value_identifier,
                      l = null == o || null === (r = o.button) || void 0 === r ? void 0 : r.navigation_link
                    if (s === k.t.NextButton && l) return l
                  }
                } catch (c) {
                  a.e(c)
                } finally {
                  a.f()
                }
              })
            var r = e.subtask,
              i = n._initializeSettingsState(r.settings)
            return (
              (n.state = {
                isSubList: !1,
                showDividers: !!r.show_divider,
                showMoreConfig: r.show_more,
                showMore: !1,
                subList: [],
                subListHeader: null,
                settingsValues: i,
                lastSettingSeen: !1,
              }),
              n
            )
          }
          return (
            u()(a, [
              {
                key: 'UNSAFE_componentWillMount',
                value: function () {
                  var e = this.context.viewport,
                    t = this.props,
                    a = t.isModal
                  t.subtask.scroll_hint &&
                    !a &&
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
                    a = t.errorDialog,
                    n = t.isModal,
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
                    _ = this._isPrompt(),
                    v = this._renderNavigationButtons(m),
                    f = s.scroll_hint,
                    b =
                      !m && f
                        ? y.a.createElement(Ji, { isModal: !!n, label: f, onPress: this._handleScrollPromptClick })
                        : null,
                    g = null !== (e = s.horizontal_style) && void 0 !== e ? e : k.z.Normal,
                    w = l === k.q
                  return y.a.createElement(
                    ye.a,
                    r()({}, o, { footer: _ ? void 0 : v, onViewportSet: this._handleViewportSet, scrollPrompt: b }),
                    y.a.createElement(
                      F.a,
                      {
                        style: [
                          g === k.z.Compact ? de.contentAreaCompact : de.contentArea,
                          so.bottomPadding,
                          _ && so.centeredRoot,
                        ],
                      },
                      y.a.createElement(ge, {
                        header: u,
                        onNavigate: i,
                        primaryTextProp: d,
                        primaryTextTestID: ao,
                        secondaryTextProp: p,
                        subtaskInputs: c,
                      }),
                      this._renderSettingsList(s.settings),
                      w ? y.a.createElement(x.b, { color: 'gray700', size: 'subtext2' }, z.c) : null,
                      s.detail_text
                        ? y.a.createElement(
                            D,
                            r()({}, s.detail_text, {
                              color: 'gray700',
                              onNavigate: i,
                              style: so.detailText,
                              subtaskInputs: c,
                            }),
                          )
                        : null,
                      _ && v ? y.a.createElement(F.a, { style: so.doneButtonContainer }, v) : null,
                    ),
                    a,
                  )
                },
              },
              {
                key: '_renderSubList',
                value: function () {
                  var e = this.props,
                    t = e.onNavigate,
                    a = e.subtaskInputs,
                    n = this.state,
                    i = n.subList,
                    o = n.subListHeader
                  return y.a.createElement(
                    ye.a,
                    { onBackClick: this._handleSubListBackClick },
                    y.a.createElement(
                      F.a,
                      { style: de.contentArea },
                      y.a.createElement(
                        D,
                        r()({}, o, {
                          onNavigate: t,
                          size: 'title4',
                          style: so.headline,
                          subtaskInputs: a,
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
                    a = this.props,
                    n = a.addToast,
                    r = a.onNavigate,
                    i = a.removeContacts,
                    o = a.subtaskId,
                    s = a.subtaskInputs,
                    l = this.state,
                    c = l.showDividers,
                    u = l.showMore,
                    d = l.showMoreConfig,
                    p = this._getSettingsValueNextLink()
                  return y.a.Children.toArray(
                    e.map(function (a, l) {
                      var h = l === e.length - 1
                      if (d && !u) {
                        if (l === d.initial_to_show)
                          return y.a.createElement(no.a, {
                            color: 'primary',
                            label: d.text,
                            onPress: t._handleShowMore,
                          })
                        if (l > d.initial_to_show) return null
                      }
                      return y.a.createElement(pn, {
                        addToast: n,
                        nextLink: p,
                        onNavigate: r,
                        onSettingGroupClick: t._handleSettingGroupClick,
                        onSettingTextChanged: t._handleSettingTextChange,
                        onSettingToggle: t._handleSettingToggle,
                        ref: t._setSettingsRef(h),
                        removeContacts: i,
                        settingValue: a,
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
                    a = t.cancel_link,
                    n = t.next_link
                  return y.a.createElement(B, {
                    actionDisabled: !e,
                    actionLabel: null == n ? void 0 : n.label,
                    actionTestID: eo,
                    onAction: this._handleNextButtonPress,
                    onSecondaryAction: this._handleCancelButtonPress,
                    secondaryActionLabel: null == a ? void 0 : a.label,
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
                        var a,
                          n = t.value_data,
                          r = t.value_identifier,
                          i = t.value_type
                        if (r && n && Object(S.i)(i))
                          e[r] = {
                            result: null === (a = n.boolean_data) || void 0 === a ? void 0 : a.initial_value,
                            type: Object.keys(n)[0],
                          }
                        else if (r && i === k.u.TextField) e[r] = { result: '', type: 'text_data' }
                        else if (i === k.u.SettingsGroup) {
                          var o
                          ;(
                            (null == n || null === (o = n.settings_group_data) || void 0 === o ? void 0 : o.settings) ||
                            []
                          ).forEach(function (t) {
                            var a,
                              n = t.value_data,
                              r = t.value_identifier,
                              i = t.value_type
                            r &&
                              n &&
                              Object(S.i)(i) &&
                              (e[r] = {
                                result: null === (a = n.boolean_data) || void 0 === a ? void 0 : a.initial_value,
                                type: Object.keys(n)[0],
                              })
                          })
                        }
                        return e
                      }, {})
                },
              },
            ]),
            a
          )
        })(y.a.Component)
      b()(oo, 'contextTypes', { viewport: Na.object })
      var so = L.a.create(function (e) {
          return {
            centeredRoot: { alignItems: 'center' },
            headline: { marginBottom: e.spaces.space12 },
            detailText: { marginTop: e.spaces.space40 },
            bottomPadding: { paddingBottom: e.spaces.space48 },
            doneButtonContainer: { marginTop: e.spaces.space40 },
          }
        }),
        lo = function () {
          return a.e(356).then(a.t.bind(null, 'OHEV', 7))
        },
        co = 'ocfShowCodeNextLink',
        uo = 'ocfShowCodeSkipLink'
      function po(e) {
        var t = e.errorDialog,
          a = e.onNavigate,
          n = e.passthroughOcfScreenProps,
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
          _ = s ? y.a.createElement(D, r()({}, s, { onNavigate: a, subtaskInputs: h })) : null
        return y.a.createElement(
          ye.a,
          r()({}, n, {
            footer: y.a.createElement(B, {
              actionLabel: null == c ? void 0 : c.label,
              actionTestID: co,
              onAction: function () {
                m(p, { link: c.link_id }), a(c)
              },
              onSecondaryAction: function () {
                u && (m(p, { link: u.link_id }), a(u))
              },
              secondaryActionLabel: null == u ? void 0 : u.label,
              secondaryActionTestID: uo,
              secondaryActionType: 'primaryOutlined',
            }),
            header: y.a.createElement(ge, { header: l, onNavigate: a, subtaskInputs: h, withHeaderImage: !0 }),
            providePadding: !0,
          }),
          d === k.v.Qr
            ? y.a.createElement(
                F.a,
                { style: ho.qrCode },
                y.a.createElement('canvas', {
                  ref: function (t) {
                    var a = e.subtask.code
                    lo().then(function (e) {
                      t && e.toCanvas(t, a, { margin: 5, scale: 5 })
                    })
                  },
                }),
                y.a.createElement(F.a, { style: ho.detailText }, _),
              )
            : y.a.createElement(
                y.a.Fragment,
                null,
                y.a.createElement(x.b, { weight: 'bold' }, o),
                y.a.createElement(F.a, { style: ho.detailText }, _),
              ),
          t,
        )
      }
      var ho = L.a.create(function (e) {
          return {
            qrCode: { alignItems: 'center', paddingVertical: e.spaces.space16 },
            detailText: { paddingTop: e.spaces.space16 },
            secondaryButton: { marginTop: e.spaces.space12 },
          }
        }),
        mo = a('NeAX'),
        _o = function (e) {
          return !mo.selectPreferences(e).is_eu_country
        },
        vo = Object(Ke.createLocalApiErrorHandlerWithContextFactory)('OCF_FLOW'),
        fo = Object(Ge.a)()
          .propsFromState(function () {
            return {
              navigationContext: vt.o,
              personalizationSettings: mo.selectUserPreferences,
              shouldPropagateP13nSettings: _o,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: vo,
              fetchPreferencesIfNeeded: mo.fetchPreferencesIfNeeded,
              scribeAction: _t.c,
              syncPersonalizationSettings: mo.syncSettings,
            }
          }),
        bo = ['callback', 'defaultValue', 'label'],
        go = Wt.a.d44efc66,
        yo = Wt.a.b4867a17,
        ko = Wt.a.d4e220b3,
        wo = (function (e) {
          m()(a, e)
          var t = v()(a)
          function a() {
            var e
            l()(this, a)
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              b()(p()(e), 'state', { errorMessage: '', isValid: !0, value: '' }),
              b()(p()(e), '_updateValue', function (t) {
                var a = e.props.callback,
                  n = Object(_i.a)(t.trim()),
                  r = !n && -1 !== t.toLowerCase().indexOf('twitter'),
                  i = !n && !r,
                  o = ''
                n ? (o = go) : r && (o = yo), e.setState({ errorMessage: o, isValid: i, value: t }), a(t, i)
              }),
              b()(p()(e), '_handleValueChange', function (t) {
                var a = t.target.value
                e._updateValue(a)
              }),
              e
            )
          }
          return (
            u()(a, [
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
                    a = C()(e, bo),
                    n = this.state,
                    i = n.errorMessage,
                    o = n.isValid,
                    s = this.context.featureSwitches.getValue('user_display_name_max_limit', 50)
                  return y.a.createElement(
                    sa.a,
                    r()({}, a, {
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
            a
          )
        })(y.a.Component)
      b()(wo, 'contextType', Qe.a)
      var Co = a('SrtL'),
        Io = a('P7wY'),
        Eo = 'ocfSignupNextLink',
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
        Ao = 'select_name',
        Do = 'select_phone',
        Fo = { page: 'onboarding', component: 'signup' },
        Oo = (function (e) {
          m()(a, e)
          var t = v()(a)
          function a(e) {
            var n
            l()(this, a),
              (n = t.call(this, e)),
              b()(p()(n), '_getDefaultIdentifierField', function () {
                var e = n.props.subtask.allowed_identifiers
                return e === k.w.EmailOnly || e === k.w.EmailThenPhone ? So.Email : So.Phone
              }),
              b()(p()(n), '_renderActiveFieldToggle', function () {
                var e = n.props.subtask.allowed_identifiers
                return e !== k.w.EmailOnly && e !== k.w.PhoneOnly
                  ? y.a.createElement(
                      x.b,
                      {
                        color: 'link',
                        onPress: n._handleActiveTextToggle,
                        style: Lo.toggleLink,
                        withInteractiveStyling: !0,
                      },
                      n._getToggleActiveTextTitle(),
                    )
                  : null
              }),
              b()(p()(n), '_renderPasswordField', function () {
                var e = n.props,
                  t = e.subtask,
                  a = e.subtaskId,
                  r = e.subtaskInputs,
                  i = n.state.defaultActiveText,
                  o = Object(S.e)(r, { key: So.Password, subtask_id: a }, '')
                return y.a.createElement(
                  F.a,
                  { style: Lo.passwordEntry },
                  y.a.createElement(Xa, {
                    autoComplete: 'new-password',
                    defaultValue: o || void 0,
                    label: t.password_hint,
                    onPasswordChange: n._handlePasswordChange,
                    onPasswordValidated: n._handlePasswordValidate,
                    userIdentifier: i || void 0,
                  }),
                )
              }),
              b()(p()(n), '_renderNameField', function () {
                var e = n.props,
                  t = e.navigationContext,
                  a = e.subtask,
                  r = e.subtaskId,
                  i = e.subtaskInputs,
                  o = Object(S.e)(i, { key: So.Name, subtask_id: r }, ''),
                  s = t.action,
                  l = {
                    autoComplete: 'name',
                    autoFocus: !s || s === Ao,
                    callback: n._updateNameInfo,
                    defaultValue: o,
                    onFocus: n._handleNameFocus,
                    label: a.name_hint,
                  }
                return y.a.createElement(wo, l)
              }),
              b()(p()(n), '_renderActiveTextField', function () {
                var e = n.props.subtask,
                  t = n.state,
                  a = t.activeTextField,
                  r = t.defaultActiveText,
                  i = n._shouldFocusActiveTextField(),
                  o = {
                    autoComplete: a === So.Phone ? 'tel' : 'email',
                    autoFocus: i,
                    defaultValue: r,
                    name: a === So.Phone ? 'phone_number' : 'email',
                    label: a === So.Phone ? e.phone_hint : e.email_hint,
                    onRef: n._setInputRef,
                    onValidityChange: n._updateValidity,
                    style: Lo.phoneEmailTextField,
                  }
                return a === So.Phone ? y.a.createElement(Ln, o) : y.a.createElement(Ma, o)
              }),
              b()(p()(n), '_handleDateChange', function (e) {
                n.setState({ birthdayValue: e, isBirthdayValid: n._isCompleteDate(e) }, n._updateValidity)
              }),
              b()(p()(n), '_isCompleteDate', function (e) {
                return !!(e && e.year && e.month && e.day)
              }),
              b()(p()(n), '_getIdentifierValue', function () {
                return n._input && n._input.getValue()
              }),
              b()(p()(n), '_isValid', function () {
                var e = n.state,
                  t = e.isBirthdayValid,
                  a = e.isNameValid,
                  r = e.isPasswordValid,
                  i = n.props.subtask,
                  o = !i.show_password_field || r,
                  s = i.ignore_birthday || t
                return a && o && s && n._input && n._input.isValid()
              }),
              b()(p()(n), '_setTimRef', function (e) {
                n._timInput = e
              }),
              b()(p()(n), '_updateValidity', function () {
                n.setState({ isValid: n._isValid() })
              }),
              b()(p()(n), '_updateNameInfo', function (e, t) {
                n.setState({ isNameValid: t, nameValue: e }, n._updateValidity)
              }),
              b()(p()(n), '_handleFetchPreferences', function () {
                var e = n.props,
                  t = e.createLocalApiErrorHandler
                ;(0, e.fetchPreferencesIfNeeded)().catch(t())
              }),
              b()(p()(n), '_handlePasswordChange', function (e) {
                n.setState({ passwordValue: e }, n._updateValidity)
              }),
              b()(p()(n), '_handlePasswordValidate', function (e) {
                n.setState({ isPasswordValid: e }, n._updateValidity)
              }),
              b()(p()(n), '_shouldFocusActiveTextField', function () {
                var e = n.props.navigationContext,
                  t = n.state.activeTextField === So.Phone ? Do : Po
                return !n.state.hasNameFieldBeenAutoFocused && e.action === t
              }),
              b()(p()(n), '_handleActiveTextToggle', function () {
                var e = n.state.activeTextField === So.Phone ? So.Email : So.Phone
                n._scribeEvent(e, 'choose'),
                  n._input && n._input.clear(),
                  n.setState({ activeTextField: e, defaultActiveText: '' })
              }),
              b()(p()(n), '_getToggleActiveTextTitle', function () {
                var e = n.props.subtask
                return n.state.activeTextField === So.Phone ? e.use_email_text : e.use_phone_text
              }),
              b()(p()(n), '_handleNameFocus', function () {
                n.setState({ hasNameFieldBeenAutoFocused: !0 })
              }),
              b()(p()(n), '_handleNextButtonClick', function () {
                var e = n.props,
                  t = e.onNavigate,
                  a = e.shouldPropagateP13nSettings,
                  r = e.subtask,
                  i = e.subtaskId,
                  o = e.updateFlow,
                  s = n.state,
                  l = s.activeTextField,
                  c = s.birthdayValue,
                  u = s.nameValue,
                  d = s.passwordValue,
                  p = n.props.personalizationSettings || {},
                  h = p.allowCookieUse,
                  m = p.allowDeviceAccess,
                  _ = p.allowPartnerships,
                  v = p.allowPersonalization,
                  f = l === So.Email && r.email_next_link ? r.email_next_link : r.next_link,
                  b = n._timInput && n._timInput.value ? { response: n._timInput.value } : void 0,
                  g = n._getIdentifierValue() || void 0,
                  y = { js_instrumentation: b, link: f.link_id, name: u }
                ;(y[l] = g),
                  r.show_password_field && (y.password = d),
                  !r.ignore_birthday && c && (y.birthday = c),
                  a &&
                    (y.personalization_settings = {
                      allow_cookie_use: !!h,
                      allow_device_personalization: !!m,
                      allow_partnerships: !!_,
                      allow_ads_personalization: !!v,
                    }),
                  o(i, y),
                  t(f)
              }),
              b()(p()(n), '_scribeEvent', function (e, t) {
                ;(0, n.props.scribeAction)(o()(o()({}, Fo), {}, { element: e, action: t }))
              }),
              b()(p()(n), '_setInputRef', function (e) {
                n._input = e
              })
            var r = e.navigationContext,
              i = e.subtaskId,
              s = e.subtaskInputs,
              c = Object(S.e)(s, { key: So.Name, subtask_id: i }, ''),
              u = Object(S.e)(s, { key: So.Phone, subtask_id: i }, ''),
              d = Object(S.e)(s, { key: So.Email, subtask_id: i }, ''),
              h = Object(S.e)(s, { key: So.Password, subtask_id: i }, ''),
              m = { day: void 0, month: void 0, year: void 0 },
              _ = Object(S.e)(s, { key: So.Birthday, subtask_id: i }, void 0) || m,
              v = (function (e) {
                switch (e) {
                  case Do:
                    return { type: So.Phone, value: u }
                  case Po:
                    return { type: So.Email, value: d }
                  default:
                    return { type: d ? So.Email : n._getDefaultIdentifierField(), value: d || u }
                }
              })(r.action)
            return (
              (n.state = {
                activeTextField: v.type,
                birthdayValue: _,
                defaultActiveText: v.value,
                nameValue: c,
                hasNameFieldBeenAutoFocused: !1,
                passwordValue: h,
                isNameValid: void 0,
                isPasswordValid: !!h,
                isBirthdayValid: n._isCompleteDate(_),
                isValid: void 0,
              }),
              n
            )
          }
          return (
            u()(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.createLocalApiErrorHandler,
                    a = e.syncPersonalizationSettings
                  zr.a.inject({ scriptId: 'jsInstLibrary', src: 'https://twitter.com/i/js_inst?c_name=ui_metrics' }),
                    this._handleFetchPreferences(),
                    a().catch(t())
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
                    a = e.passthroughOcfScreenProps,
                    n = e.progressIndication,
                    i = e.subtask,
                    o = e.subtaskInputs,
                    s = i.next_link,
                    l = i.primary_text,
                    c = i.secondary_text
                  return y.a.createElement(
                    ye.a,
                    r()({}, a, {
                      footer: y.a.createElement(B, {
                        actionDisabled: !this.state.isValid,
                        actionLabel: null == s ? void 0 : s.label,
                        actionTestID: Eo,
                        onAction: this._handleNextButtonClick,
                      }),
                      header: y.a.createElement(ge, {
                        onNavigate: t,
                        primaryTextProp: l,
                        secondaryTextProp: c,
                        subtaskInputs: o,
                        withHeaderImage: !0,
                      }),
                      progressIndication: n,
                      providePadding: !0,
                    }),
                    y.a.createElement(Co.a, { title: xo }),
                    y.a.createElement(
                      F.a,
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
                    a = e.subtask,
                    n = a.birthday_explanation,
                    r = a.birthday_hint,
                    i = a.ignore_birthday,
                    o = this.state.birthdayValue || {},
                    s = t.action === To
                  return i
                    ? null
                    : y.a.createElement(
                        F.a,
                        { accessibilityLabel: r, accessibilityRole: 'group', style: Lo.birthdayPicker },
                        y.a.createElement(x.b, { size: 'body', weight: 'bold' }, r),
                        y.a.createElement(x.b, { color: 'gray700', size: 'body' }, n),
                        y.a.createElement(pa.a, {
                          autofocus: s,
                          day: o.day,
                          label: a.birthday_hint || '',
                          minSelectableYear: Object(Io.b)(),
                          month: o.month,
                          onChange: this._handleDateChange,
                          year: o.year,
                        }),
                      )
                },
              },
            ]),
            a
          )
        })(y.a.Component),
        Lo = L.a.create(function (e) {
          return {
            birthdayPicker: { marginTop: e.spaces.space32 },
            toggleLink: { marginTop: e.spaces.space16, alignSelf: 'flex-start' },
            passwordEntry: { marginTop: e.spaces.space16 },
            phoneEmailTextField: { paddingHorizontal: 0 },
          }
        }),
        No = fo(Oo),
        Ro = 'ocfSignupReviewNextLink',
        Bo = Wt.a.a565833d,
        Vo = Wt.a.h3629782,
        Mo = Wt.a.j1c3f4b9,
        jo = Wt.a.c119dee8,
        Uo = Wt.a.f70cd5ed,
        zo = Wt.a.a3841918,
        Ho = Wt.a.d4e220b3,
        Wo = (function (e) {
          m()(a, e)
          var t = v()(a)
          function a() {
            var e
            l()(this, a)
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              b()(p()(e), '_handleSignupButtonClick', function () {
                var t,
                  a = e.props,
                  n = a.onNavigate,
                  r = a.subtask,
                  i = a.subtaskId,
                  o = a.subtaskInputs,
                  s = a.updateFlow,
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
                  t && n(t)
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
                return function (a) {
                  a.preventDefault(), e._handleNavigationClick(t)
                }
              }),
              b()(p()(e), '_isOldEnoughOrIgnored', function () {
                var t = e.props.subtask,
                  a = t.birthday,
                  n = t.birthday_requirement
                if (t.ignore_birthday) return !0
                var r = a && a.subtask_data_reference && Object(S.e)(e.props.subtaskInputs, a.subtask_data_reference),
                  i = r && new Date(r.year, r.month - 1, r.day),
                  o = n || {},
                  s = o.day,
                  l = o.month,
                  c = o.year,
                  u = c && l && s && new Date(c, l - 1, s)
                return !i || !u || i <= u
              }),
              b()(p()(e), '_getSignupButtonLabel', function () {
                var t = e.props,
                  a = t.subtask,
                  n = t.subtaskInputs,
                  r = a.email,
                  i = a.phone_number,
                  o = i && Object(S.g)(n, i),
                  s = r && Object(S.g)(n, r)
                return o ? a.phone_next_link.label : s ? a.email_next_link.label : Bo
              }),
              e
            )
          }
          return (
            u()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.errorDialog,
                    a = e.onNavigate,
                    n = e.passthroughOcfScreenProps,
                    i = e.progressIndication,
                    o = e.subtask,
                    s = e.subtaskInputs,
                    l = o.detail_text,
                    c = o.primary_text,
                    u = o.secondary_text
                  return y.a.createElement(
                    ye.a,
                    r()({}, n, {
                      footer: y.a.createElement(B, {
                        actionLabel: this._getSignupButtonLabel(),
                        actionTestID: Ro,
                        detailText: l,
                        onAction: this._handleSignupButtonClick,
                        onNavigate: a,
                        subtaskInputs: s,
                      }),
                      header: y.a.createElement(ge, {
                        onNavigate: a,
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
                    a = e.subtaskInputs,
                    n = t.name && Object(S.g)(a, t.name)
                  return y.a.createElement(
                    F.a,
                    { onClick: this._handleNameEdit, testID: 'editName' },
                    y.a.createElement(sa.a, {
                      defaultValue: n || '',
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
                    a = e.subtaskInputs,
                    n =
                      t.birthday &&
                      t.birthday.subtask_data_reference &&
                      Object(S.e)(a, t.birthday.subtask_data_reference),
                    r = n || {},
                    i = r.day,
                    o = r.month,
                    s = r.year,
                    l = i && o && s && Vo(new Date(s, o - 1, i))
                  return !t.ignore_birthday && n && l
                    ? y.a.createElement(
                        F.a,
                        {
                          accessibilityLabel: Mo({ birthdate: l }),
                          accessibilityRole: 'button',
                          onClick: this._handleBirthdayEdit,
                          testID: 'editBirthday',
                        },
                        y.a.createElement(sa.a, {
                          defaultValue: l,
                          label: jo,
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
                    a = t.email,
                    n = t.phone_number,
                    r = e.subtaskInputs,
                    i = n && n.subtask_data_reference && Object(S.e)(r, n.subtask_data_reference),
                    o = a && a.subtask_data_reference && Object(S.e)(r, a.subtask_data_reference)
                  return i
                    ? y.a.createElement(
                        F.a,
                        { onClick: this._handlePhoneEdit, testID: 'editPhone' },
                        y.a.createElement(sa.a, {
                          defaultValue: i || '',
                          label: Uo,
                          name: 'phone',
                          style: de.formTextInput,
                        }),
                      )
                    : o
                    ? y.a.createElement(
                        F.a,
                        { onClick: this._handleEmailEdit, testID: 'editEmail' },
                        y.a.createElement(sa.a, {
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
            a
          )
        })(y.a.Component),
        Go = 'selected_search_topic_ids',
        Ko = 'selected_topic_ids',
        qo = [],
        Yo = function (e, t) {
          var a = Object(vt.v)(e)
          return Object(S.e)(a, { key: Go, subtask_id: t.subtaskId })
        },
        Xo = function (e, t) {
          var a = Object(vt.v)(e)
          return Object(S.e)(a, { key: Ko, subtask_id: t.subtaskId })
        },
        Zo = function (e, t) {
          return t.subtask.selected_topics_cart ? t.subtask.selected_topics_cart.selected_topic_ids : qo
        },
        Jo = Object(Ge.a)()
          .propsFromState(function () {
            return { initialSearchTopicIds: Yo, initialSelectedTopicIds: Xo, cartTopicIds: Zo }
          })
          .adjustStateProps(function (e) {
            var t = e.cartTopicIds,
              a = e.initialSearchTopicIds,
              n = e.initialSelectedTopicIds
            return { initialSearchTopicIds: a || qo, initialSelectedTopicIds: n || t }
          })
          .withAnalytics({ section: 'topics_selector' }),
        Qo = a('Rp9C'),
        $o = 'ocfTopicsSelectorNextLink',
        es = 'ocfTopicsSelectorSkipLink',
        ts = a('Znyr'),
        as = a('sgih'),
        ns = (a('1t7P'), a('jQ/y'), Object.freeze({ TopicCategory: 'topic_category', Topic: 'topic' })),
        rs = a('j7Bv'),
        is = a('CGyZ'),
        os = a('cm6r'),
        ss = a('zfvc'),
        ls = a('EHV7'),
        cs = a('iY63'),
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
          m()(a, e)
          var t = v()(a)
          function a() {
            var e
            l()(this, a)
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              b()(p()(e), '_handleFollow', function () {
                var t = e.props,
                  a = t.id
                ;(0, t.onFollowTopic)(a)
              }),
              b()(p()(e), '_handleUnfollow', function () {
                var t = e.props,
                  a = t.id
                ;(0, t.onUnfollowTopic)(a)
              }),
              e
            )
          }
          return (
            u()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.id,
                    a = e.onNavigate,
                    n = e.selectedTopicIds,
                    i = e.subtaskInputs,
                    o = e.topicsById[t],
                    s = n.includes(this.props.id)
                  return y.a.createElement(
                    F.a,
                    { style: _s.cell },
                    y.a.createElement(rs.a, { Icon: ls.a, size: 'large', style: _s.topicIcon }),
                    y.a.createElement(
                      F.a,
                      { style: _s.topicInfo },
                      y.a.createElement(D, r()({ weight: 'bold' }, o.title, { onNavigate: a, subtaskInputs: i })),
                      o.description
                        ? y.a.createElement(
                            D,
                            r()({ color: 'gray700' }, o.description, { onNavigate: a, subtaskInputs: i }),
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
            a
          )
        })(y.a.PureComponent),
        ms = (function (e) {
          m()(a, e)
          var t = v()(a)
          function a() {
            var e
            l()(this, a)
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]
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
            u()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.categoriesById,
                    a = e.id,
                    n = e.isTopLevel,
                    i = e.onNavigate,
                    o = e.subtaskInputs,
                    s = this.state.expanded,
                    l = t[a],
                    c = s ? fs : vs
                  return y.a.createElement(
                    y.a.Fragment,
                    null,
                    y.a.createElement(
                      os.a,
                      {
                        accessibilityExpanded: s,
                        accessibilityLabel: ps({ title: l.title.text }),
                        onClick: this._handleClick,
                        style: _s.cell,
                      },
                      y.a.createElement(
                        D,
                        r()(
                          { color: 'primary', size: n ? 'headline1' : 'body', weight: n ? 'heavy' : 'bold' },
                          l.title,
                          { onNavigate: i, subtaskInputs: o },
                        ),
                      ),
                      c,
                    ),
                    y.a.createElement(
                      F.a,
                      { style: _s.children },
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
                    n = e.id,
                    i = e.onFollowTopic,
                    o = e.onNavigate,
                    s = e.onUnfollowTopic,
                    l = e.selectedTopicIds,
                    c = e.subtaskInputs,
                    u = e.topicsById,
                    d = t[n],
                    p = { selectedTopicIds: l, onFollowTopic: i, onUnfollowTopic: s, topicsById: u, subtaskInputs: c }
                  return d.children_items.map(function (e) {
                    var n = e.id
                    return e.type === ns.Topic
                      ? y.a.createElement(hs, r()({}, p, { id: n, key: n, onNavigate: o }))
                      : y.a.createElement(a, r()({}, p, { categoriesById: t, id: n, key: n, onNavigate: o }))
                  })
                },
              },
            ]),
            a
          )
        })(y.a.PureComponent),
        _s = L.a.create(function (e) {
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
        vs = y.a.createElement(cs.a, { style: _s.plusIcon }),
        fs = y.a.createElement(ds, { style: _s.minusIcon }),
        bs = Wt.a.f134915f,
        gs = Wt.a.h6beb5fa,
        ys = Wt.a.b8fb87e0,
        ks = y.a.createElement($.a, null),
        ws = (function (e) {
          m()(a, e)
          var t = v()(a)
          function a() {
            var e
            l()(this, a)
            for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              b()(p()(e), 'state', { hideBanner: !1, selectedTopicIds: e.props.initialSelectedTopicIds, showCart: !1 }),
              b()(p()(e), '_renderCartButton', function () {
                var t = e.props.subtask.selected_topics_cart,
                  a = e.state.selectedTopicIds
                return t && t.title && a.length > 0
                  ? y.a.createElement(
                      F.a,
                      null,
                      y.a.createElement(O.a, {
                        accessibilityLabel: ys,
                        icon: ks,
                        onPress: e._handleOpenCart,
                        size: 'small',
                        type: 'brandOutlined',
                      }),
                      y.a.createElement(ts.a, {
                        count: a.length,
                        truncatedCountFormatter: gs,
                        unreadCountLabel: bs,
                        withBorder: !0,
                      }),
                    )
                  : null
              }),
              b()(p()(e), '_renderCart', function () {
                var t = e.props,
                  a = t.onNavigate,
                  n = t.subtask,
                  i = t.subtaskInputs,
                  o = n.selected_topics_cart,
                  s =
                    o && o.done_label
                      ? y.a.createElement(
                          O.a,
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
                  as.a,
                  { onMaskClick: e._handleCloseCart, style: Cs.cart, type: 'bottom', withMask: !0 },
                  o && o.title
                    ? y.a.createElement(
                        D,
                        r()(
                          {
                            align: 'center',
                            onNavigate: a,
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
                  a = e.state.hideBanner
                return t && !a
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
                  a = t.onNavigate,
                  n = t.subtask,
                  r = t.subtaskInputs,
                  i = e.state.selectedTopicIds
                return i.map(function (t) {
                  return y.a.createElement(hs, {
                    id: t,
                    key: t,
                    onFollowTopic: e._handleFollowTopic,
                    onNavigate: a,
                    onUnfollowTopic: e._handleUnfollowTopic,
                    selectedTopicIds: i,
                    subtaskInputs: r,
                    topicsById: n.topic_by_id_list,
                  })
                })
              }),
              b()(p()(e), '_renderItems', function () {
                var t = e.props,
                  a = t.onNavigate,
                  n = t.subtask,
                  r = t.subtaskInputs,
                  i = e.state.selectedTopicIds
                return n.top_category_ids.map(function (t) {
                  return y.a.createElement(ms, {
                    categoriesById: n.category_by_id_list,
                    id: t,
                    isTopLevel: !0,
                    key: t,
                    onFollowTopic: e._handleFollowTopic,
                    onNavigate: a,
                    onUnfollowTopic: e._handleUnfollowTopic,
                    selectedTopicIds: i,
                    subtaskInputs: r,
                    topicsById: n.topic_by_id_list,
                  })
                })
              }),
              b()(p()(e), '_handleFollowTopic', function (t) {
                e.props.analytics.scribe({ element: 'topic', action: 'follow', data: { items: [Qo.a.forTopic(t)] } }),
                  e.setState({ selectedTopicIds: [].concat(E()(e.state.selectedTopicIds), [t]) })
              }),
              b()(p()(e), '_handleUnfollowTopic', function (t) {
                e.props.analytics.scribe({ element: 'topic', action: 'unfollow', data: { items: [Qo.a.forTopic(t)] } }),
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
                  a = t.onNavigate,
                  n = t.subtask,
                  r = t.subtaskId,
                  i = t.updateFlow,
                  o = e.state.selectedTopicIds
                i(r, { link: n.next_link.link_id, selected_topic_ids: o }), a(n.next_link)
              }),
              b()(p()(e), '_handleSkipButtonClick', function () {
                var t = e.props,
                  a = t.onNavigate,
                  n = t.subtask,
                  r = t.subtaskId
                ;(0, t.updateFlow)(r, { link: n.skip_link.link_id }), a(n.skip_link)
              }),
              e
            )
          }
          return (
            u()(a, [
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
                    a = e.onNavigate,
                    n = e.passthroughOcfScreenProps,
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
                    r()({}, n, {
                      footer: y.a.createElement(B, {
                        actionLabel: null == s ? void 0 : s.label,
                        actionTestID: $o,
                        onAction: this._handleNextButtonClick,
                        onSecondaryAction: this._handleSkipButtonClick,
                        secondaryActionLabel: null == u ? void 0 : u.label,
                        secondaryActionTestID: es,
                      }),
                      header: y.a.createElement(ge, {
                        onNavigate: a,
                        primaryTextProp: l,
                        secondaryTextProp: c,
                        subtaskInputs: o,
                        withHeaderImage: !0,
                      }),
                      leftControl: p,
                      providePadding: !0,
                    }),
                    y.a.createElement(F.a, null, this._renderBanner(), this._renderItems()),
                    d ? this._renderCart() : null,
                    t,
                  )
                },
              },
            ]),
            a
          )
        })(y.a.Component),
        Cs = L.a.create(function (e) {
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
        Is = Jo(ws),
        Es = Object(Ke.createLocalApiErrorHandlerWithContextFactory)('OCF_TWEET_SELECTION_URT'),
        xs = Object(Ge.a)()
          .propsFromActions(function () {
            return { clearTimelineCache: sr.a, createLocalApiErrorHandler: Es }
          })
          .withAnalytics(),
        Ss = a('ezF+'),
        Ts = a('8UdT'),
        Ps = a('xWpm'),
        As = a('VrCx'),
        Ds = 'ocfTweetSelectionURTNextButton',
        Fs = function (e) {
          switch (e) {
            case vr.a.NOT_FOUND:
              return y.a.createElement(hr.a, null)
            case vr.a.NOT_ALLOWED:
              return y.a.createElement(pr.a, null)
            default:
              return (
                Object(Nt.a)('Unhandled timeline unavailable reason in Ocf TweetSelectionURT screen: '.concat(e)), null
              )
          }
        },
        Os = L.a.create(function (e) {
          return { container: { paddingTop: e.spaces.space40 } }
        }),
        Ls = xs(function (e) {
          var t = e.errorDialog,
            a = e.onNavigate,
            n = e.passthroughOcfScreenProps,
            i = e.subtask,
            s = e.subtaskId,
            l = e.subtaskInputs,
            c = e.updateFlow,
            u = i.graphql_timeline_query,
            d = i.header,
            p = i.next_link,
            h = i.next_link_options,
            m = i.timeline_source,
            _ = y.a.useState([]),
            v = W()(_, 2),
            f = v[0],
            g = v[1],
            k = y.a.useCallback(
              function () {
                c(s, { link: p.link_id, selected_tweet_ids: f }), a(p)
              },
              [f, a, p, s, c],
            ),
            w = y.a.useCallback(
              function (e) {
                g(function (t) {
                  return t.includes(e)
                    ? t.filter(function (t) {
                        return e !== t
                      })
                    : t.concat(e)
                })
              },
              [g],
            ),
            C = y.a.useMemo(
              function () {
                return (function (e) {
                  var t,
                    a,
                    n = e.handleTweetClick,
                    r = e.selectedTweetIds
                  return o()(
                    o()({}, cr.b),
                    {},
                    ((a = {}),
                    b()(a, Ts.b.Tombstone, Ss.e(Ss.a())),
                    b()(
                      a,
                      Ts.b.Tweet,
                      o()(
                        o()({}, cr.b[Ts.b.Tweet]),
                        {},
                        {
                          handlers:
                            ((t = {}),
                            b()(t, As.a.Tweet, Object(Ps.d)({ onClick: n, selectedTweetIds: r })),
                            b()(t, As.a.QuotedTweet, Object(Ps.d)({ onClick: n, selectedTweetIds: r })),
                            t),
                        },
                      ),
                    ),
                    a),
                  )
                })({ handleTweetClick: w, selectedTweetIds: f })
              },
              [w, f],
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
            E = y.a.useMemo(
              function () {
                return (function (e, t) {
                  if (t) {
                    var a = t.max_enable_count,
                      n = t.min_enable_count
                    if (n && a) return n <= e && e <= a
                    if (n) return n <= e
                    if (a) return e <= a
                  }
                  return !0
                })(f.length, h)
              },
              [f, h],
            )
          return y.a.createElement(
            ye.a,
            r()({}, n, {
              footer: y.a.createElement(B, {
                actionDisabled: !E,
                actionLabel: null == p ? void 0 : p.label,
                actionTestID: Ds,
                onAction: k,
              }),
              header: y.a.createElement(ge, { header: d, onNavigate: a, subtaskInputs: l, withHeaderImage: !0 }),
              providePadding: !0,
            }),
            y.a.createElement(
              F.a,
              { style: Os.container },
              y.a.createElement(mr.a, { entryConfiguration: C, module: I, renderUnavailable: Fs, title: '' }),
            ),
            t,
          )
        }),
        Ns = function (e, t) {
          var a = wi.h(e),
            n = a ? ki.k(e, a) : []
          return W()(n, 1)[0]
        },
        Rs = function (e, t) {
          var a = wi.i(e),
            n = a ? ki.k(e, a) : []
          return W()(n, 1)[0]
        },
        Bs = Object(Ge.a)()
          .propsFromState(function () {
            return { avatarMedia: Ns, bannerMedia: Rs }
          })
          .propsFromActions(function () {
            return { scribeAction: _t.c, updateProfileAvatar: wi.l, updateProfileBanner: wi.m }
          })
          .withAnalytics()(
          (function (e) {
            m()(a, e)
            var t = v()(a)
            function a() {
              var e
              l()(this, a)
              for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]
              return (
                (e = t.call.apply(t, [this].concat(r))),
                b()(p()(e), '_scribeUploadStart', function (t) {
                  var a = e.props,
                    n = a.analytics,
                    r = {
                      section: t,
                      element: 'upload',
                      action: 'start',
                      data: { items: [{ token: a.flowToken, name: a.subtaskId }] },
                    }
                  n.scribe(r)
                }),
                b()(p()(e), '_updateMedia', function () {
                  var t = e.props,
                    a = t.avatarMedia,
                    n = t.bannerMedia,
                    r = t.subtask.sources,
                    i = t.updateProfileAvatar,
                    o = t.updateProfileBanner
                  return new Promise(function (t, s) {
                    try {
                      r.forEach(function (t) {
                        var r = t.style
                        r === k.l.Avatar && a
                          ? (e._scribeUploadStart('select_avatar'), i(a.id))
                          : r === k.l.Banner && n && (e._scribeUploadStart('select_banner'), o(n.id))
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
              u()(a, [
                {
                  key: 'render',
                  value: function () {
                    var e = this.props,
                      t = e.onNavigate,
                      a = e.subtask,
                      n = e.subtaskId
                    return y.a.createElement(Je, {
                      navigationLink: a.next_link,
                      onNavigate: t,
                      subtaskAction: this._updateMedia,
                      subtaskId: n,
                    })
                  },
                },
              ]),
              a
            )
          })(y.a.Component),
        ),
        Vs = (a('7xRU'), a('IcAo')),
        Ms = a('Ka9G'),
        js = y.a.createContext(new Set()),
        Us = function (e, t) {
          return function (a) {
            a.loggedInUserId, a.promotedContent
            var n = a.userId
            return y.a.createElement(js.Consumer, null, function (a) {
              return y.a.createElement(is.a, {
                isFollowing: a.has(n),
                onFollow: e(n),
                onUnfollow: t(n),
                showRelationshipChangeConfirmation: !1,
                size: 'small',
                style: zs.followButton,
                type: 'user',
              })
            })
          }
        },
        zs = L.a.create(function (e) {
          return { followButton: { alignSelf: 'flex-start', marginLeft: e.spaces.space12 } }
        }),
        Hs = function (e, t, a) {
          return function (n) {
            var r = n.user.id_str
            a.has(r) ? t(r)() : e(r)()
          }
        },
        Ws = a('ZNT5'),
        Gs = 'ocfURTUserRecommendationsNextButton',
        Ks = 'ocfURTUserRecommendationsSkipButton',
        qs = function (e) {
          switch (e) {
            case vr.a.NOT_FOUND:
              return y.a.createElement(hr.a, null)
            case vr.a.NOT_ALLOWED:
              return y.a.createElement(pr.a, null)
            default:
              return Object(Nt.a)('Unhandled timeline unavailable reason: '.concat(e)), null
          }
        },
        Ys = (function (e) {
          m()(a, e)
          var t = v()(a)
          function a(e) {
            var n
            return (
              l()(this, a),
              (n = t.call(this, e)),
              b()(p()(n), '_isBelowMinFollows', function () {
                var e = n.props.subtask.min_follow_count
                return !!e && n.state.selectedUsers.size < e
              }),
              b()(
                p()(n),
                '_getMemoizedModule',
                Object(kr.a)(function (e, t) {
                  return (
                    (n = (a = { subtask_id: e, flow_token: t || '' }).flow_token),
                    (r = a.subtask_id),
                    Object(Ws.a)({
                      timelineId: 'nux-user-recos-'.concat(r),
                      getEndpoint: function (e) {
                        return e.URT.fetchNUXUserRecommendations
                      },
                      getEndpointParams: function (e) {
                        return o()(o()({}, e), {}, { subtask_id: r, flow_token: n })
                      },
                      context: 'FETCH_NUX_USER_RECOS',
                      perfKey: 'nux-user-recos',
                    })
                  )
                  var a, n, r
                }),
              ),
              b()(p()(n), '_getModule', function () {
                var e = n.props,
                  t = e.flowToken,
                  a = e.subtaskId
                return n._getMemoizedModule(a, t)
              }),
              b()(p()(n), '_onFollow', function (e) {
                return function () {
                  var t = Object(tt.a)(E()(n.state.selectedUsers))
                  t.add(e), n.setState({ selectedUsers: t }), n._handleScribe('follow')
                }
              }),
              b()(p()(n), '_onUnfollow', function (e) {
                return function () {
                  var t = Object(tt.a)(E()(n.state.selectedUsers))
                  t.has(e) && t.delete(e), n.setState({ selectedUsers: t }), n._handleScribe('unfollow')
                }
              }),
              b()(p()(n), '_getFollowText', function (e, t, a) {
                return !e || a < 1 ? t : e.concat(gr.a.getFormattedCount(a))
              }),
              b()(p()(n), '_handleFollowButtonClick', function () {
                var e = n.props,
                  t = e.onNavigate,
                  a = e.subtask,
                  r = e.subtaskId
                ;(0, e.updateFlow)(r, {
                  link: a.next_link.link_id,
                  selected_user_recommendations: E()(n.state.selectedUsers),
                }),
                  t(a.next_link)
              }),
              b()(p()(n), '_handleSkipButtonClick', function () {
                var e = n.props,
                  t = e.onNavigate,
                  a = e.subtask.skip_link,
                  r = e.subtaskId,
                  i = e.updateFlow
                a && i(r, { link: a.link_id }), a && t(a)
              }),
              (n.state = { selectedUsers: new Set() }),
              n
            )
          }
          return (
            u()(a, [
              {
                key: 'render',
                value: function () {
                  var e,
                    t = this.props,
                    a = t.onNavigate,
                    n = t.passthroughOcfScreenProps,
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
                    _,
                    v,
                    f = i.next_link.label,
                    g = u.size,
                    k = null !== (e = this._getFollowText(d, f, g)) && void 0 !== e ? e : void 0,
                    w = Array.from(u).join(',')
                  return y.a.createElement(
                    ye.a,
                    r()({}, n, {
                      footer: y.a.createElement(B, {
                        actionDisabled: this._isBelowMinFollows(),
                        actionLabel: this._isBelowMinFollows() && c ? void 0 : k,
                        actionTestID: Gs,
                        onAction: this._handleFollowButtonClick,
                        onSecondaryAction: this._handleSkipButtonClick,
                        secondaryActionLabel: this._isBelowMinFollows() ? (null == c ? void 0 : c.label) : void 0,
                        secondaryActionTestID: Ks,
                      }),
                      header: y.a.createElement(ge, {
                        onNavigate: a,
                        primaryTextProp: s,
                        secondaryTextProp: l,
                        subtaskInputs: o,
                        withHeaderImage: !0,
                      }),
                      providePadding: !0,
                    }),
                    y.a.createElement(
                      js.Provider,
                      { value: u },
                      y.a.createElement(mr.a, {
                        entryConfiguration:
                          ((h = { onFollow: this._onFollow, onUnfollow: this._onUnfollow, currentFollows: u }),
                          (m = h.currentFollows),
                          (_ = h.onFollow),
                          (v = h.onUnfollow),
                          Object(Vs.a)(
                            {},
                            cr.b,
                            b()(
                              {},
                              Ts.b.User,
                              Object(Ms.a)({
                                decoration: Us(_, v),
                                withLink: !1,
                                shouldScribeProfileClick: !1,
                                onClick: Hs(_, v, m),
                              }),
                            ),
                          )),
                        fetchOptions: { follows: w },
                        module: this._getModule(),
                        renderUnavailable: qs,
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
            a
          )
        })(y.a.Component),
        Xs = Object(Rt.a)(Ys, { page: 'onboarding', section: 'user_recommendations' }),
        Zs = (a('DfhM'), a('tI3i')),
        Js = a.n(Zs),
        Qs = a('TEoO'),
        $s = a('tn7R'),
        el = L.a.create(function (e) {
          return { followButton: { alignSelf: 'flex-start', marginLeft: e.spaces.space12 } }
        }),
        tl = function (e) {
          var t = e.isCheckboxFollowButton,
            a = e.onSearchUserUnfollowed,
            n = e.user,
            r = n.id_str,
            i = n.screen_name,
            o = function () {
              return a(r)
            }
          return t
            ? y.a.createElement(st.a, { checked: !0, onChange: o })
            : y.a.createElement(is.a, {
                isFollowing: !0,
                name: i,
                onFollow: Oe.a,
                onUnfollow: o,
                showRelationshipChangeConfirmation: !1,
                size: 'small',
                style: el.followButton,
                type: 'user',
              })
        },
        al = L.a.create(function (e) {
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
        nl = function (e) {
          var t = e.children,
            a = e.header
          return y.a.createElement(F.a, { style: al.group }, y.a.createElement(F.a, { style: al.groupHeader }, a), t)
        },
        rl = a('tocL'),
        il = a('Re5t'),
        ol = L.a.create(function (e) {
          return {
            userCellListItem: { paddingHorizontal: e.spaces.space20 },
            userCellListItemWrapper: { display: 'flex', flexDirection: 'column', justifyContent: 'center' },
          }
        }),
        sl = function (e) {
          var t = e.decorator,
            a = e.description,
            n = e.id,
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
            F.a,
            { accessibilityRole: 'label', style: ol.userCellListItemWrapper },
            y.a.createElement(fe.a, {
              avatarUri: s,
              decoration: t,
              description: a,
              displayMode: il.a.UserDetailed,
              entities: {},
              isVerified: r,
              name: i,
              onCellClick: o,
              promotedItemType: 'users',
              screenName: l,
              socialContext: u,
              style: ol.userCellListItem,
              userId: n,
              withLink: !1,
            }),
          )
        },
        ll = function (e) {
          var t = e.isCheckboxFollowButton,
            a = e.onSearchUserRemove,
            n = e.selectedSearchHeader,
            r = e.selectedSearchUsers,
            i = Object($s.a)(r)
          if (!n || !i.length) return null
          var o = function (e) {
            return a(e)
          }
          return y.a.createElement(
            nl,
            { header: y.a.createElement(x.b, { size: 'headline1', weight: 'bold' }, n) },
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
        cl = L.a.create(function (e) {
          return { followButton: { alignSelf: 'flex-start', marginLeft: e.spaces.space12 } }
        }),
        ul = function (e) {
          var t = e.isCheckboxFollowButton,
            a = e.isFollowed,
            n = e.screenName,
            r = e.updateFollowedItems,
            i = e.userId,
            o = function (e) {
              return function () {
                return r(i, e)
              }
            }
          return t
            ? y.a.createElement(st.a, {
                checked: a,
                onChange: function () {
                  return r(i, !a)
                },
              })
            : y.a.createElement(is.a, {
                isFollowing: a,
                name: n,
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
        pl = qt.a,
        hl = function (e) {
          var t = e.userGroups,
            a = e.selectedSearchUsers,
            n = e.onNearEnd,
            r = void 0 === n ? Oe.a : n,
            i = e.followButtonType,
            o = e.followedUserIds,
            s = e.onFollow,
            l = e.onUnfollow,
            c = e.onSearchUserRemove,
            u = e.selectedSearchHeader,
            d = y.a.useContext(Qe.a).loggedInUserId
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
            _ = y.a.useCallback(
              function (e, t) {
                return function () {
                  var a = e.items.map(function (e) {
                    return e.user_id_str
                  })
                  h(a, !t)
                }
              },
              [h],
            ),
            v = y.a.useCallback(
              function (e) {
                var t = e.items.every(function (e) {
                    return o.has(e.user_id_str)
                  }),
                  a = y.a.createElement(
                    y.a.Fragment,
                    null,
                    y.a.createElement(x.b, { size: 'headline1', weight: 'bold' }, e.header),
                    p && y.a.createElement(st.a, { checked: t, onChange: _(e, t) }),
                  )
                return y.a.createElement(
                  nl,
                  { header: a },
                  e.items.map(function (e) {
                    var t = e.social_text,
                      a = e.user,
                      n = o.has(a.id_str)
                    return y.a.createElement(sl, {
                      decorator: y.a.createElement(ul, {
                        isCheckboxFollowButton: p,
                        isFollowed: n,
                        screenName: a.screen_name,
                        updateFollowedItems: m,
                        userId: a.id_str,
                      }),
                      description: a.description,
                      id: a.id_str,
                      isFollowing: n,
                      isVerified: a.verified,
                      key: a.id_str,
                      name: a.name,
                      onCellClick: function () {
                        return m(a.id_str, !n)
                      },
                      profileImageUrl: a.profile_image_url_https,
                      screenName: a.screen_name,
                      socialText: t,
                    })
                  }),
                )
              },
              [o, p, _, m],
            )
          return y.a.createElement(
            F.a,
            null,
            y.a.createElement(ll, {
              isCheckboxFollowButton: p,
              onSearchUserRemove: c,
              selectedSearchHeader: u,
              selectedSearchUsers: a,
            }),
            y.a.createElement(Qs.a, {
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
        _l = 'selected_user_recommendations',
        vl = (function (e) {
          m()(a, e)
          var t = v()(a)
          function a(e) {
            var n
            l()(this, a),
              (n = t.call(this, e)),
              b()(p()(n), '_getPreCheckedUsers', function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
                return Object(tt.a)(
                  e.reduce(function (e, t) {
                    var a = t.items.reduce(function (e, t) {
                      return t.checked_by_default && e.push(t.user_id_str), e
                    }, [])
                    return [].concat(E()(e), E()(a))
                  }, []),
                )
              }),
              b()(p()(n), '_getFollowText', function (e, t, a) {
                return !e || a < 1 ? t : e.concat(gr.a.getFormattedCount(a))
              }),
              b()(p()(n), '_handleSelectionChanged', function (e) {
                n.setState({ selectedUsers: Object(tt.a)(e) })
              }),
              b()(p()(n), '_handleOnUnfollowsSelected', function (e) {
                var t,
                  a = Object(tt.a)(E()(n.state.selectedUsers)),
                  r = n.state.selectedSearchUsers,
                  i = Yi()(e)
                try {
                  for (i.s(); !(t = i.n()).done; ) {
                    var o = t.value
                    a.has(o) && a.delete(o), delete r[o]
                  }
                } catch (s) {
                  i.e(s)
                } finally {
                  i.f()
                }
                n.setState({ selectedUsers: a, selectedSearchUsers: r })
              }),
              b()(p()(n), '_handleOnFollowsSelected', function (e) {
                var t,
                  a = Object(tt.a)(E()(n.state.selectedUsers)),
                  r = Yi()(e)
                try {
                  for (r.s(); !(t = r.n()).done; ) {
                    var i = t.value
                    a.add(i)
                  }
                } catch (o) {
                  r.e(o)
                } finally {
                  r.f()
                }
                n.setState({ selectedUsers: a })
              }),
              b()(p()(n), '_handleFollowButtonClick', function () {
                var e = n.props,
                  t = e.onNavigate,
                  a = e.subtask,
                  r = e.subtaskId
                ;(0, e.updateFlow)(r, {
                  link: a.next_link.link_id,
                  selected_user_recommendations: E()(n.state.selectedUsers),
                  searched_users: Object.keys(n.state.selectedSearchUsers),
                }),
                  t(a.next_link)
              }),
              b()(p()(n), '_handleSkipButtonClick', function () {
                var e = n.props,
                  t = e.onNavigate,
                  a = e.subtask.skip_link,
                  r = e.subtaskId,
                  i = e.updateFlow
                a && i(r, { link: a.link_id }), a && t(a)
              }),
              b()(p()(n), '_handleSearchUserRemoved', function (e) {
                return n._handleOnUnfollowsSelected([e])
              }),
              b()(p()(n), '_handleSearchSuggestionSelected', function (e, t) {
                if (e.type === Br.b.User) {
                  var a = e.data,
                    r = n.state,
                    i = r.selectedSearchUsers,
                    o = r.selectedUsers
                  n._recommendedUsers.has(a.id_str) && o.add(a.id_str),
                    (i[a.id_str] = a),
                    n.setState({ selectedSearchUsers: i, selectedUsers: o })
                }
              })
            var r = e.subtaskId,
              i = e.subtaskInputs,
              o = Object(tt.a)([]),
              s = Object(S.e)(i, { key: _l, subtask_id: r }, o)
            return (
              (n._recommendedUsers = Object(tt.a)(
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
              (n.state = {
                selectedSearchUsers: {},
                selectedUsers: s && s.size ? s : n._getPreCheckedUsers(e.subtask.groups),
              }),
              n
            )
          }
          return (
            u()(a, [
              {
                key: 'render',
                value: function () {
                  var e,
                    t = this.props,
                    a = t.onNavigate,
                    n = t.passthroughOcfScreenProps,
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
                      O.a,
                      { onPress: this._handleFollowButtonClick, size: 'large', type: 'primaryFilled' },
                      h,
                    ),
                    _ =
                      i.skip_link && i.skip_link.label
                        ? y.a.createElement(
                            O.a,
                            { onPress: this._handleSkipButtonClick, size: 'large', type: 'primaryText' },
                            null === (e = i.skip_link) || void 0 === e ? void 0 : e.label,
                          )
                        : null,
                    v = null === i.min_follow_count || void 0 === i.min_follow_count ? 1 : i.min_follow_count,
                    f = c.size >= v ? m : _,
                    b = i.show_user_search
                      ? y.a.createElement(
                          F.a,
                          { style: [de.contentArea, fl.searchContainer] },
                          y.a.createElement(Nr.c, {
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
                    r()({}, n, { rightControl: f }),
                    y.a.createElement(
                      F.a,
                      null,
                      y.a.createElement(
                        F.a,
                        { style: fl.main },
                        i.primary_text
                          ? y.a.createElement(
                              D,
                              r()({}, i.primary_text, {
                                nativeID: V.b,
                                onNavigate: a,
                                size: 'title4',
                                style: fl.headline,
                                subtaskInputs: o,
                                weight: 'bold',
                              }),
                            )
                          : null,
                        i.secondary_text
                          ? y.a.createElement(
                              D,
                              r()({}, i.secondary_text, {
                                onNavigate: a,
                                size: 'body',
                                style: fl.subHeader,
                                subtaskInputs: o,
                                weight: 'bold',
                              }),
                            )
                          : null,
                      ),
                      b,
                      y.a.createElement(
                        F.a,
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
            a
          )
        })(y.a.Component),
        fl = L.a.create(function (e) {
          return {
            secondaryText: { marginBottom: e.spaces.space16 },
            main: { marginHorizontal: e.spaces.space20 },
            searchContainer: { marginBottom: e.spaces.space16, zIndex: 1 },
            headline: { marginVertical: e.spaces.space16 },
            subHeader: { marginBottom: e.spaces.space16 },
          }
        }),
        bl = (function (e) {
          m()(a, e)
          var t = v()(a)
          function a() {
            var e
            l()(this, a)
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              b()(p()(e), '_isInteractive', 'interactive' === e.props.subtask.style),
              b()(p()(e), '_navigateAndUpdate', function (t) {
                var a = e.props,
                  n = a.onNavigate,
                  r = a.subtask,
                  i = a.subtaskId
                ;(0, a.updateFlow)(i, { link: t.link_id, wait_time_ms: r.wait_time_ms }), n(t, !0)
              }),
              e
            )
          }
          return (
            u()(a, [
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
                    a = t.pollInteractivePath,
                    n = t.subtask
                  if (this._isInteractive) {
                    var r = n.extension_endpoint
                    n.extension_polling_interval_ms &&
                      r &&
                      (this._interactiveInterval = setInterval(function () {
                        a(r).then(function (t) {
                          t && e._navigateAndUpdate(n.next_link)
                        })
                      }, n.extension_polling_interval_ms))
                    var i = n.extension_timeout_link
                    i &&
                      (this._interactiveTimeout = setTimeout(function () {
                        e._navigateAndUpdate(i)
                      }, n.max_extension_time_ms || n.wait_time_ms))
                  } else
                    this._spinnerTimer = setTimeout(function () {
                      e._navigateAndUpdate(n.next_link)
                    }, n.wait_time_ms)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.onNavigate,
                    a = e.passthroughOcfScreenProps,
                    n = e.subtask,
                    i = e.subtaskInputs,
                    o = n.detail_text,
                    s = n.header
                  return y.a.createElement(
                    ye.a,
                    r()({}, a, {
                      header:
                        this._isInteractive &&
                        this.props.subtask.header &&
                        y.a.createElement(ge, { header: s, onNavigate: t, subtaskInputs: i, withHeaderImage: !0 }),
                      providePadding: this._isInteractive,
                    }),
                    y.a.createElement(
                      F.a,
                      { style: gl.indicator },
                      this._isInteractive && this.props.subtask.header
                        ? y.a.createElement(
                            F.a,
                            null,
                            o && y.a.createElement(D, r()({}, o, { onNavigate: t, subtaskInputs: i })),
                          )
                        : y.a.createElement(Hr.a, null),
                    ),
                  )
                },
              },
            ]),
            a
          )
        })(y.a.Component),
        gl = L.a.create(function (e) {
          return { indicator: { display: 'flex', flex: 1, justifyContent: 'center' } }
        }),
        yl = { page: 'onboarding' },
        kl = Wt.a.c20aaf3d,
        wl = Wt.a.a219e217,
        Cl = (function (e) {
          m()(a, e)
          var t = v()(a)
          function a(e, n) {
            var i
            return (
              l()(this, a),
              (i = t.call(this, e, n)),
              b()(p()(i), '_handleBackAttempt', function (e, t) {
                var a = i.props.currentSubtask,
                  n = !a || !a.subtask_back_navigation || a.subtask_back_navigation !== k.y.Disallow,
                  r = !((null == a ? void 0 : a.subtask_back_navigation) !== k.y.CancelFlow),
                  o = !i.currentPreviousNavigableSubtaskId && (i._onFirstTaskSinceStart || r) && n
                return (
                  !('POP' === t && !o) ||
                  (i.currentPreviousNavigableSubtaskId && n && i._navigateToPreviousSubtask(), !1)
                )
              }),
              b()(p()(i), '_sendGaOnboardingEvent', function (e) {
                ;(0, i.props.googleAnalyticsSendEvent)('signup', e, 'new-user')
              }),
              b()(p()(i), '_startFlow', function (e) {
                var t = e.countryCode,
                  a = e.createLocalApiErrorHandler,
                  n = e.debugOverrides,
                  r = e.flowName,
                  s = e.inputFlowData,
                  l = e.location,
                  c = e.startFlow,
                  u = e.startLocation,
                  d = e.targetUserId,
                  p = e.testCountryCode,
                  h = l.state || {},
                  m = h.fromApp,
                  _ = h.gatedAction,
                  v = Object.keys(u || {}).length
                    ? { start_location: u }
                    : { start_location: { location: m ? 'unknown' : 'manual_link' } },
                  f = { flow_context: o()({ debug_overrides: n, gated_action: _ }, v) },
                  b = o()(
                    o()({}, s),
                    {},
                    { country_code: t || s.country_code, target_user_id: d || s.target_user_id },
                    f,
                  )
                'signup' === r && i._sendGaOnboardingEvent('signup-clicked'),
                  (i._onFirstTaskSinceStart = !0),
                  c({ flow_name: r, input_flow_data: b, subtask_versions: S.a, test_country_code: p }).catch(
                    a(oa(r, null, i._displayFailureMessage)),
                  )
              }),
              b()(p()(i), '_handleFlowRestart', function () {
                i._startFlow(i.props)
              }),
              b()(p()(i), '_handleAbortFlow', function (e) {
                var t = i.props,
                  a = t.clearFlow,
                  n = t.currentSubtask,
                  r = t.history,
                  o = t.location,
                  s = t.loginReturnPath,
                  l = t.onAbort,
                  c = t.returnPath
                a({ clearPersistence: !0 })
                var u = n && Object(S.h)(n),
                  d = (n || {}).subtask_back_navigation_link
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
                    ? Kt.b.navigateTo(e)
                    : t.replace(e))
              }),
              b()(p()(i), '_displayFailureMessage', function (e) {
                i.setState({ alertFailureMessage: e })
              }),
              b()(p()(i), '_submitFlow', function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                  t = e.isTaskNavigation,
                  a = i.props,
                  n = a.createLocalApiErrorHandler,
                  r = a.flowName,
                  o = a.submitFlow
                return o({ isTaskNavigation: t }).then(
                  function (e) {
                    return (i._onFirstTaskSinceStart = !1), e
                  },
                  function (e) {
                    var t = i.props,
                      a = t.failureMessage,
                      o = t.shouldAbort
                    return n(oa(r, a, o ? i._displayFailureMessage : void 0))(e)
                  },
                )
              }),
              b()(p()(i), '_handleNavigate', function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                  a = i.props,
                  n = a.navigateSubtask,
                  r = a.submitFlow,
                  o = e.is_destructive,
                  s = e.subtask_id,
                  l = e.subtask_navigation_context
                switch (
                  (e.suppress_client_events || i._scribeSubtaskNavigate(e),
                  e.callbacks && i._handleCallbacks(e.callbacks, k.p.Click),
                  e.link_type)
                ) {
                  case k.m.Abort:
                    r().catch(Oe.a), i._handleAbortFlow()
                    break
                  case k.m.Subtask:
                    n({ subtaskId: s, navigationContext: l, destructive: o, fromHiddenSubtask: t })
                    break
                  case k.m.Finish:
                  case k.m.Task:
                    i._submitFlow({ isTaskNavigation: !0 })
                    break
                  case k.m.Deeplink:
                    i._submitFlow(), i._handleDeepLink(e.url)
                    break
                  case k.m.DeeplinkAndAbort:
                    r().catch(Oe.a), i._handleDeepLink(e.url)
                    break
                  case k.m.WeblinkAndAbort:
                    r().catch(Oe.a), window.open(e.url, '_blank'), i._handleAbortFlow()
                    break
                  case k.m.Web:
                    Kt.b.navigateTo(e.url)
                    break
                  case k.m.ChromelessWeb:
                    window.open(e.url, '_blank')
                    break
                  case k.m.DeeplinkInPlace:
                    break
                  default:
                    Object(Nt.a)('Unknown Navigation Link Type '.concat(e.link_type)), i._handleAbortFlow()
                }
              }),
              b()(p()(i), '_scribeSubtaskNavigate', function (e) {
                var t = i.props,
                  a = t.currentSubtask,
                  n = t.flowToken,
                  r = t.scribeAction
                if (a && a.subtask_id) {
                  var s = e.link_id
                  r(o()(o()({}, yl), {}, { element: 'link', action: 'click' }), {
                    items: [{ token: n, name: a.subtask_id, description: s }],
                  })
                }
              }),
              b()(p()(i), '_navigateToSubtask', function (e) {
                return function () {
                  i._handleNavigate({ link_id: '', link_type: k.m.Subtask, subtask_id: e })
                }
              }),
              b()(p()(i), '_endFlowSubtaskAction', function (e, t) {
                var a = i.props.submitFlow
                switch (t) {
                  case k.m.Abort:
                    a()
                      .catch(Oe.a)
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
                    Object(Nt.a)('Unknown End Flow Type '.concat(t)), i._handleAbortFlow()
                }
              }),
              b()(p()(i), '_render', function () {
                var e = i.props,
                  t = e.currentSubtask,
                  a = e.previousNavigableSubtaskId,
                  n = e.subtasks
                if (!t) return null
                if (Object(vt.g)(t)) {
                  var r = n.find(function (e) {
                    return e.subtask_id === a
                  })
                  return y.a.createElement(y.a.Fragment, null, i._renderSubtask(t), r && i._renderSubtask(r))
                }
                return i._renderSubtask(t)
              }),
              b()(p()(i), '_renderDefault', function () {
                var e = i.props,
                  t = e.currentSubtask,
                  a = e.flowToken,
                  n = e.history,
                  r = e.subtasks.map(function (e) {
                    return y.a.createElement(
                      x.b,
                      { key: e.subtask_id, onClick: i._navigateToSubtask(e.subtask_id) },
                      e.subtask_id,
                    )
                  })
                return y.a.createElement(
                  ye.a,
                  { history: n },
                  y.a.createElement(
                    F.a,
                    { style: { margin: 5 } },
                    y.a.createElement(x.b, null, a),
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
                  a = e.history
                return y.a.createElement(
                  ye.a,
                  { hideBackButton: !0, history: a },
                  y.a.createElement(De.a, {
                    confirmButtonLabel: wl,
                    headline: kl,
                    onConfirm: i._handleAbortFlowOnConfirm,
                    text: t || ra,
                    withCancelButton: !1,
                  }),
                )
              }),
              b()(p()(i), '_renderSubtask', function (e) {
                var t = i.props,
                  a = t.addToast,
                  n = t.callInteractiveSpinnerPath,
                  o = t.fetchTemporaryPassword,
                  s = t.flowName,
                  l = t.flowToken,
                  c = t.history,
                  u = t.location,
                  d = t.previouslySubmittedSubtaskId,
                  p = t.removeContacts,
                  h = t.shouldAbort,
                  m = t.submitFailed,
                  _ = t.subtaskInputs,
                  v = t.updateFlow,
                  f = e.progress_indication,
                  b = e.subtask_back_navigation,
                  g = e.subtask_id,
                  w = h
                    ? y.a.createElement(De.a, {
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
                      progressIndication: f,
                    },
                    subtaskId: g,
                    updateFlow: v,
                  }
                if (e.end_flow)
                  return i._endFlowSubtaskAction(e.end_flow.status, e.end_flow.end_flow_type), i._renderDefault()
                if (e.action_list) return y.a.createElement(Ae, r()({ subtask: e.action_list, subtaskInputs: _ }, C))
                if (e.fetch_temporary_password)
                  return y.a.createElement(Je, {
                    navigationLink: e.fetch_temporary_password.next_link,
                    onNavigate: i._handleNavigate,
                    subtaskAction: i._handleInvisibleSubtask(g, e.fetch_temporary_password, o),
                    subtaskId: g,
                  })
                if (e.cta) return y.a.createElement(We, r()({ errorDialog: w, subtask: e.cta, subtaskInputs: _ }, C))
                if (e.app_download_cta)
                  return y.a.createElement(
                    Ne,
                    r()({ errorDialog: w, subtask: e.app_download_cta, subtaskInputs: _ }, C),
                  )
                if (e.alert_dialog) return y.a.createElement(Fe, r()({ subtask: e.alert_dialog, subtaskInputs: _ }, C))
                if (e.alert_dialog_suppress_client_events)
                  return y.a.createElement(
                    Fe,
                    r()({ subtask: e.alert_dialog_suppress_client_events, subtaskInputs: _ }, C),
                  )
                if (e.menu_dialog) return y.a.createElement(qr, r()({ subtask: e.menu_dialog, subtaskInputs: _ }, C))
                if (e.open_account)
                  return y.a.createElement(Je, {
                    navigationLink: e.open_account.next_link,
                    onNavigate: i._handleNavigate,
                    subtaskAction: i._openAccountAction(e.open_account),
                    subtaskId: g,
                  })
                if (e.show_code)
                  return y.a.createElement(po, r()({ errorDialog: w, subtask: e.show_code, subtaskInputs: _ }, C))
                if (e.sign_up) return y.a.createElement(No, r()({ subtask: e.sign_up, subtaskInputs: _ }, C))
                if (e.sign_up_review)
                  return y.a.createElement(
                    Wo,
                    r()({ errorDialog: w, progressIndication: f, subtask: e.sign_up_review, subtaskInputs: _ }, C),
                  )
                if (e.js_instrumentation) return y.a.createElement(Wr, r()({ subtask: e.js_instrumentation }, C))
                if (e.phone_verification)
                  return y.a.createElement(
                    di,
                    r()(
                      { errorDialog: w, flowName: s, submitFailed: m, subtask: e.phone_verification, subtaskInputs: _ },
                      C,
                    ),
                  )
                if (e.recaptcha)
                  return y.a.createElement(Hn, r()({ errorDialog: w, subtask: e.recaptcha, subtaskInputs: _ }, C))
                if (e.privacy_options)
                  return y.a.createElement(mi, r()({ subtask: e.privacy_options, subtaskInputs: _ }, C))
                if (e.generic_urt)
                  return y.a.createElement(Sr, r()({ errorDialog: w, subtask: e.generic_urt, subtaskInputs: _ }, C))
                if (e.interest_picker)
                  return y.a.createElement(Ur, r()({ errorDialog: w, subtask: e.interest_picker, subtaskInputs: _ }, C))
                if (e.topics_selector)
                  return y.a.createElement(Is, r()({ errorDialog: w, subtask: e.topics_selector, subtaskInputs: _ }, C))
                if (e.notifications_permission_prompt)
                  return y.a.createElement(ei, r()({ subtask: e.notifications_permission_prompt, subtaskInputs: _ }, C))
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
                    : y.a.createElement(ai, {
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
                    r()({ errorDialog: w, subtask: e.user_recommendations_list, subtaskInputs: _ }, C),
                  )
                if (e.user_recommendations_urt)
                  return y.a.createElement(
                    Xs,
                    r()({ errorDialog: w, flowToken: l, subtask: e.user_recommendations_urt, subtaskInputs: _ }, C),
                  )
                if (e.update_users)
                  return y.a.createElement(Je, {
                    navigationLink: e.update_users.next_link,
                    onNavigate: i._handleNavigate,
                    subtaskAction: i._handleInvisibleSubtask(g, e.update_users, i._updateUsersAction),
                    subtaskId: g,
                  })
                if (e.enter_password)
                  return y.a.createElement(Pn, r()({ errorDialog: w, subtask: e.enter_password, subtaskInputs: _ }, C))
                if (e.settings_list) {
                  var I = e.settings_list
                  return y.a.createElement(me.b.Consumer, null, function (e) {
                    var t = e.isModal
                    return y.a.createElement(
                      oo,
                      r()(
                        { addToast: a, errorDialog: w, isModal: t, removeContacts: p, subtask: I, subtaskInputs: _ },
                        C,
                      ),
                    )
                  })
                }
                return e.email_contacts_sync
                  ? y.a.createElement(
                      Jt,
                      r()({ errorDialog: w, location: u, subtask: e.email_contacts_sync, subtaskInputs: _ }, C),
                    )
                  : e.select_avatar
                  ? y.a.createElement(Oi, r()({ errorDialog: w, subtask: e.select_avatar, subtaskInputs: _ }, C))
                  : e.select_banner
                  ? y.a.createElement(Wi, r()({ errorDialog: w, subtask: e.select_banner, subtaskInputs: _ }, C))
                  : e.security_key
                  ? y.a.createElement(gi, r()({ errorDialog: w, subtask: e.security_key, subtaskInputs: _ }, C))
                  : e.enter_date
                  ? y.a.createElement(fa, r()({ errorDialog: w, subtask: e.enter_date, subtaskInputs: _ }, C))
                  : e.enter_text
                  ? y.a.createElement(Yn, r()({ errorDialog: w, subtask: e.enter_text, subtaskInputs: _ }, C))
                  : e.email_verification
                  ? y.a.createElement(
                      da,
                      r()(
                        {
                          errorDialog: w,
                          flowName: s,
                          submitFailed: m,
                          subtask: e.email_verification,
                          subtaskInputs: _,
                        },
                        C,
                      ),
                    )
                  : e.enter_username
                  ? y.a.createElement(ir, r()({ errorDialog: w, subtask: e.enter_username, subtaskInputs: _ }, C))
                  : e.enter_email
                  ? y.a.createElement(vn, r()({ errorDialog: w, subtask: e.enter_email, subtaskInputs: _ }, C))
                  : e.enter_phone
                  ? y.a.createElement(Mn, r()({ errorDialog: w, subtask: e.enter_phone, subtaskInputs: _ }, C))
                  : e.choice_selection
                  ? y.a.createElement(ut, r()({ key: g, subtask: e.choice_selection, subtaskInputs: _ }, C))
                  : e.contacts_live_sync_permission_prompt
                  ? y.a.createElement(Vt, r()({ subtask: e.contacts_live_sync_permission_prompt, subtaskInputs: _ }, C))
                  : e.wait_spinner
                  ? y.a.createElement(bl, r()({ pollInteractivePath: n, subtask: e.wait_spinner, subtaskInputs: _ }, C))
                  : e.check_logged_in_account
                  ? y.a.createElement(
                      et,
                      r()({ onNavigate: i._handleNavigate, subtask: e.check_logged_in_account, subtaskId: g }, C),
                    )
                  : e.tweet_selection_urt
                  ? y.a.createElement(Ls, r()({ errorDialog: w, subtask: e.tweet_selection_urt, subtaskInputs: _ }, C))
                  : i._renderDefault()
              }),
              b()(p()(i), '_getBackNavigation', function (e) {
                var t = e.subtask_back_navigation,
                  a = void 0 === t ? k.y.Allow : t
                return a === k.y.CancelFlow
                  ? function () {
                      return i._handleAbortFlow()
                    }
                  : i.currentPreviousNavigableSubtaskId && a === k.y.Allow
                  ? i._navigateToPreviousSubtask
                  : void 0
              }),
              b()(p()(i), '_scribeSubtaskView', function () {
                var e = i.props,
                  t = e.currentSubtask,
                  a = e.flowToken,
                  n = e.scribeAction
                t &&
                  t.subtask_id &&
                  !Object(S.l)(t) &&
                  n(o()(o()({}, yl), {}, { element: 'view', action: 'impression' }), {
                    items: [{ token: a, name: t.subtask_id }],
                  })
              }),
              b()(p()(i), '_handleCallbacks', function (e, t) {
                var a = i.props,
                  n = a.callOnboardingPath,
                  r = a.scribeAction
                e.forEach(function (e) {
                  e.trigger === t &&
                    (e.scribe_config && r(e.scribe_config), e.endpoint && n(e.endpoint, { timestampMs: Date.now() }))
                })
              }),
              b()(p()(i), '_openAccountAction', function (e) {
                return function () {
                  var t = i.context.loggedInUserId,
                    a = i.props,
                    n = a.returnPath,
                    r = a.scribeAction,
                    o = a.verifyCredentials,
                    s = e.attribution_event,
                    l = e.user.id_str,
                    c = Object(ni.b)(i.context.featureSwitches) || {},
                    u = c.encryptedReferer,
                    d = c.encryptedReferralDetails
                  return (
                    Ki.a.flushHTMLCache(),
                    t && l !== t
                      ? (Kt.b.navigateTo(n || '/home'), new Promise(function () {}))
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
                var a = i.props,
                  n = a.createLocalApiErrorHandler,
                  r = a.fetchUsers,
                  o = null == t ? void 0 : t.users
                o &&
                  o.length &&
                  r(
                    o.map(function (e) {
                      return e.id_str
                    }),
                  ).catch(n({ showToast: !0 }))
              }),
              b()(p()(i), '_maybeScribeAppInstallBanner', function () {
                var e = i.props.scribeAction
                Re.a.hasPromptWaiting() && e({ page: 'signup', component: 'install_banner', action: 'waiting' })
              }),
              (i.state = { alertFailureMessage: '' }),
              i
            )
          }
          return (
            u()(a, [
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
                    a = this.props.currentSubtask,
                    n = t && t.subtask_id
                  a &&
                    a.subtask_id !== n &&
                    (this._scribeSubtaskView(), a.callbacks && this._handleCallbacks(a.callbacks, k.p.Impression))
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
                    a = e.history
                  ;(0, e.scribePageImpression)(yl), t(yl), (this._unblockHistory = a.block(this._handleBackAttempt))
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
                  var a = this.props.fetchStatus
                  return (
                    a === Ye.a.FAILED || t || (a = Ye.a.LOADING),
                    y.a.createElement(
                      F.a,
                      { style: Il.root },
                      y.a.createElement(Ze.a, {
                        fetchStatus: a,
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
                value: function (e, t, a) {
                  return function () {
                    return new Promise(function (n, r) {
                      n(a(e, t))
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
            a
          )
        })(y.a.Component)
      b()(Cl, 'contextType', Qe.a), b()(Cl, 'defaultProps', { inputFlowData: {} })
      var Il = L.a.create(function (e) {
        return { root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 } }
      })
      t.a = Object(_r.a)(yl)(Ft(Cl))
    },
    gwY8: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return r
      })
      var n = a('ERkP'),
        r = a.n(n).a.createContext({ onFollow: void 0, onInitialize: void 0, onUnfollow: void 0 })
    },
    hznd: function (e, t, a) {
      'use strict'
      var n = a('97Jx'),
        r = a.n(n),
        i = a('ERkP'),
        o = a.n(i),
        s = a('BedV'),
        l = a('yiKp'),
        c = a.n(l),
        u = (a('ho0z'), a('t62R')),
        d = a('IMYl'),
        p = a('py1r'),
        h = a('I4+6'),
        m = a('cm6r'),
        _ = a('rHpw'),
        v = a('MWbm'),
        f = _.a.create(function (e) {
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
          c()({}, _.a.absoluteFillObject),
          {},
          { cursor: 'inherit', height: '100%', margin: 0, opacity: 0, padding: 0, width: '100%' },
        ),
        g = function (e) {
          var t = e.accessibilityLabel,
            a = e.accessibilityPosInSet,
            n = e.accessibilitySetSize,
            r = e.checked,
            i = e.disabled,
            s = e.helpText,
            l = e.label,
            c = e.name,
            g = e.onChange,
            y = h.a.generate({
              backgroundColor: _.a.theme.colors.transparent,
              color: r ? _.a.theme.colors.primary : _.a.theme.colors.gray700,
              withFocusWithinFocusRing: !0,
            })
          return o.a.createElement(p.a, { disabled: i }, function (e) {
            return o.a.createElement(
              v.a,
              { style: f.root },
              o.a.createElement(
                v.a,
                { accessibilityRole: 'label', style: [f.base, f.border, !i && f.interactive] },
                o.a.createElement(
                  v.a,
                  { style: f.textContainer },
                  o.a.createElement(u.b, { weight: 'bold' }, l),
                  s && o.a.createElement(u.b, { color: 'gray700', size: 'subtext2', style: f.helpText }, s),
                ),
                o.a.createElement(
                  v.a,
                  { style: f.radioContainer },
                  o.a.createElement(
                    m.a,
                    { disabled: i, interactiveStyles: y, interactivityState: e, style: f.radioBackground },
                    o.a.createElement(
                      v.a,
                      {
                        style: [
                          f.circle,
                          r && f.circleActive,
                          i && f.circleDisabled,
                          r && i && f.circleCheckedAndDisabled,
                        ],
                      },
                      r ? o.a.createElement(d.a, { style: f.checkMark }) : null,
                    ),
                  ),
                  o.a.createElement('input', {
                    'aria-label': t,
                    'aria-posinset': a,
                    'aria-setsize': n,
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
    iKTg: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        i = a('ERkP'),
        o = a.n(i),
        s = a('Lsrn'),
        l = a('k/Ka'),
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
    jtO7: function (e, t, a) {
      'use strict'
      var n = a('97Jx'),
        r = a.n(n),
        i = a('m3Bd'),
        o = a.n(i),
        s = a('ERkP'),
        l = a.n(s),
        c = a('t62R'),
        u = a('I4+6'),
        d = a('cm6r'),
        p = a('rHpw'),
        h = a('MWbm'),
        m = ['align', 'color', 'label'],
        _ = p.a.create(function (e) {
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
          a = void 0 === t ? 'center' : t,
          n = e.color,
          i = e.label,
          s = o()(e, m),
          v = u.a.generate({
            backgroundColor: p.a.theme.colors.transparent,
            color: p.a.theme.colors[n],
            insetFocusRing: !0,
          })
        return l.a.createElement(
          h.a,
          { style: _.container },
          l.a.createElement(
            d.a,
            r()({}, s, { interactiveStyles: v, style: _.root }),
            l.a.createElement(c.b, { align: a, color: n }, i),
          ),
        )
      }
    },
    mCZD: function (e, t, a) {
      'use strict'
      var n = a('VrFO'),
        r = a.n(n),
        i = a('Y9Ll'),
        o = a.n(i),
        s = a('1Pcy'),
        l = a.n(s),
        c = a('5Yy7'),
        u = a.n(c),
        d = a('2VqO'),
        p = a.n(d),
        h = a('KEM+'),
        m = a.n(h),
        _ = (a('2G9S'), a('ERkP')),
        v = a.n(_),
        f = a('VAZu'),
        b = a('3XMw'),
        g = a.n(b),
        y = a('lUZE'),
        k = a('aITJ'),
        w = a('MWbm'),
        C = a('yw4N'),
        I = a('RhWx'),
        E = a.n(I),
        x = a('ddV6'),
        S = a.n(x),
        T = (a('ssJ/'), a('rHpw')),
        P = 'controlView',
        A = function (e) {
          var t = e.children,
            a = e.control,
            n = e.onViewportSet,
            r = v.a.useRef(null),
            i = v.a.useState(null),
            o = S()(i, 2),
            s = o[0],
            l = o[1]
          D(function () {
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
          var c = [F.fixed].concat(E()(k.b.isIOS() && s ? [F.visualViewport, { top: s }] : []))
          return v.a.createElement(
            v.a.Fragment,
            null,
            v.a.createElement(C.a, { onViewportSet: n, style: F.flexViewport }, t),
            v.a.createElement(
              w.a,
              {
                ref: function (e) {
                  e && !r.current && (r.current = e.getBoundingClientRect().height)
                },
                style: c,
                testID: P,
              },
              a,
            ),
            v.a.createElement(w.a, { style: F.invisible }, a),
          )
        },
        D = function (e) {
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
        F = T.a.create(function (e) {
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
        O = a('w9LO'),
        L = a('mw9i'),
        N = a('JYMr'),
        R = a('7N4s'),
        B = g.a.d2fb334b,
        V = (function (e) {
          u()(a, e)
          var t = p()(a)
          function a() {
            var e
            r()(this, a)
            for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              m()(l()(e), '_handleViewportSet', function (t) {
                var a = e.props.onViewportSet
                a && a(t)
              }),
              e
            )
          }
          return (
            o()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    a = e.footer,
                    n = e.header,
                    r = e.hideAppBar,
                    i = e.providePadding,
                    o = void 0 !== i && i,
                    s = e.rightControl,
                    l = e.scrollPrompt,
                    c = this.context.isModal,
                    u = a || s,
                    d = v.a.createElement(v.a.Fragment, null, n, t)
                  return v.a.createElement(
                    O.a,
                    { style: [M.root, c && M.rootModal] },
                    r ? null : this._renderAppBar(),
                    v.a.createElement(
                      L.a,
                      { style: [M.container, c && M.containerModal] },
                      c
                        ? v.a.createElement(
                            v.a.Fragment,
                            null,
                            v.a.createElement(
                              C.a,
                              {
                                onViewportSet: this._handleViewportSet,
                                style: [M.viewport, k.b.isIE() && M.viewportIE],
                              },
                              v.a.createElement(w.a, { style: o && M.contentArea }, d),
                            ),
                            u && v.a.createElement(w.a, { style: M.bottomControl }, u),
                          )
                        : u
                        ? v.a.createElement(
                            A,
                            {
                              control: v.a.createElement(w.a, { style: M.bottomControl }, u),
                              onViewportSet: this._handleViewportSet,
                            },
                            v.a.createElement(w.a, { style: o && M.contentArea }, d),
                          )
                        : o
                        ? v.a.createElement(w.a, { style: M.contentArea }, d)
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
                    a = e.appBarWithBackground,
                    n = e.backButtonType,
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
                            { style: M.iconContainer },
                            v.a.createElement(y.a, { accessibilityLabel: B, style: M.icon }),
                          ),
                    p = u ? u.text.text : void 0,
                    h = null == u ? void 0 : u.percentage_complete,
                    m = h ? h / 100 : void 0,
                    _ = m ? v.a.createElement(N.a, { progress: m }) : void 0
                  return v.a.createElement(f.a, {
                    backButtonType: n,
                    backLocation: r,
                    centeredLogo: d,
                    hideBackButton: i || !c,
                    history: s,
                    leftControl: l,
                    onBackClick: c,
                    position: t,
                    secondaryBar: _,
                    title: p,
                    withBackground: a,
                  })
                },
              },
            ]),
            a
          )
        })(v.a.Component)
      m()(V, 'contextType', R.b)
      var M = T.a.create(function (e) {
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
      t.a = V
    },
    nS1w: function (e, t, a) {
      'use strict'
      a.d(t, 'c', function () {
        return _
      }),
        a.d(t, 'd', function () {
          return v
        }),
        a.d(t, 'b', function () {
          return b
        }),
        a.d(t, 'e', function () {
          return g
        })
      var n,
        r = a('KEM+'),
        i = a.n(r),
        o = (a('z84I'), a('+KXO'), a('LW0h'), a('7x/C'), a('wFPu'), a('2G9S'), a('3XMw')),
        s = a.n(o),
        l = a('mtvn'),
        c =
          ((n = {}),
          i()(n, 1, { label: s.a.hac89abf, numDays: 31 }),
          i()(n, 2, { label: s.a.ef30b309, numDays: 28, numDaysLeapYear: 29 }),
          i()(n, 3, { label: s.a.b56920fa, numDays: 31 }),
          i()(n, 4, { label: s.a.b1a0f1ec, numDays: 30 }),
          i()(n, 5, { label: s.a.daf779c8, numDays: 31 }),
          i()(n, 6, { label: s.a.c6ad074d, numDays: 30 }),
          i()(n, 7, { label: s.a.f1db106b, numDays: 31 }),
          i()(n, 8, { label: s.a.i4e80b7a, numDays: 31 }),
          i()(n, 9, { label: s.a.efa6cc1d, numDays: 30 }),
          i()(n, 10, { label: s.a.f40a0cbe, numDays: 31 }),
          i()(n, 11, { label: s.a.ac74a31c, numDays: 30 }),
          i()(n, 12, { label: s.a.i6c1e4b2, numDays: 31 }),
          n),
        u = function (e) {
          return { label: ''.concat(e), value: ''.concat(e) }
        },
        d = Object(l.a)(1, 29).map(u),
        p = Object(l.a)(1, 30).map(u),
        h = Object(l.a)(1, 31).map(u),
        m = Object(l.a)(1, 32).map(u),
        _ = function () {
          return Object.keys(c).map(function (e) {
            return { label: c[e].label, value: e }
          })
        },
        v = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            t = arguments.length > 1 ? arguments[1] : void 0,
            a = arguments.length > 2 ? arguments[2] : void 0,
            n = arguments.length > 3 ? arguments[3] : void 0,
            r = t || new Date(Date.now()).getFullYear()
          return Object(l.a)(e, r + 1)
            .reverse()
            .filter(function (e) {
              return 2 === n && 29 === a ? f(e) : e
            })
            .map(u)
        },
        f = function (e) {
          return 1 === new Date(e, 1, 29).getMonth()
        },
        b = function (e, t) {
          if (!e) return m
          switch (2 === e && (!t || (t && f(t))) ? c[e].numDaysLeapYear : c[e].numDays) {
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
        g = function (e, t, a) {
          if ('number' == typeof e && 'number' == typeof t && 'number' == typeof a) {
            var n = t < 10 ? '0'.concat(t) : ''.concat(t),
              r = e < 10 ? '0'.concat(e) : ''.concat(e)
            return ''.concat(a, '-').concat(n, '-').concat(r)
          }
          return ''
        }
      t.a = { getFormattedDateValue: g }
    },
    'p+r5': function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return H
      })
      a('yiKp')
      var n = a('97Jx'),
        r = a.n(n),
        i = a('m3Bd'),
        o = a.n(i),
        s = a('VrFO'),
        l = a.n(s),
        c = a('Y9Ll'),
        u = a.n(c),
        d = a('1Pcy'),
        p = a.n(d),
        h = a('5Yy7'),
        m = a.n(h),
        _ = a('2VqO'),
        v = a.n(_),
        f = a('KEM+'),
        b = a.n(f),
        g = (a('2G9S'), a('ERkP')),
        y = a.n(g),
        k = a('38/B'),
        w = a('t62R'),
        C = a('/yvb'),
        I = a('piX5'),
        E = a('3XMw'),
        x = a.n(E),
        S = a('tI3i'),
        T = a.n(S),
        P = a('oQhu'),
        A = a('rHpw'),
        D = a('aITJ'),
        F = a('MWbm'),
        O = a('n5fo'),
        L = a('5emT'),
        N = a('Oib4'),
        R = a('WtWS'),
        B = a('ioan'),
        V = [
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
        M = function (e) {
          return e.length
        },
        j = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : M
          return t(e)
        },
        U = x.a.de540c32,
        z = x.a.b4abfdb3,
        H = (function (e) {
          m()(a, e)
          var t = v()(a)
          function a(e) {
            var n
            l()(this, a),
              (n = t.call(this, e)),
              b()(p()(n), '_blurOnBackspaceKeyUpForKaiOS', !1),
              b()(p()(n), '_isLabelLarge', function () {
                var e = n.state,
                  t = e.actualCount,
                  a = e.isFocused
                return !t && !a
              }),
              b()(
                p()(n),
                '_getTextInputStyle',
                Object(P.a)(function (e) {
                  return [W.root, !e && W.disabled]
                }),
              ),
              b()(p()(n), '_getTextInputType', function () {
                var e = n.props,
                  t = e.showPasswordVisibilityIcon,
                  a = e.type,
                  r = n.state.isPasswordRevealed
                return 'password' === a && t ? (r ? 'text' : 'password') : a
              }),
              b()(p()(n), '_calculateLength', function (e) {
                return j(e, n.props.calculateLength)
              }),
              b()(p()(n), '_shouldRenderDisplayCount', function () {
                var e = n.state.isFocused,
                  t = n._isFormInvalid()
                return Boolean((e || t) && n._getMaxDisplayCount())
              }),
              b()(p()(n), '_isInvalidNumber', function () {
                var e,
                  t,
                  a,
                  r,
                  i,
                  o = n.props.type,
                  s =
                    null === (e = n._textInput) || void 0 === e || null === (t = e.textInputNode) || void 0 === t
                      ? void 0
                      : t.value,
                  l =
                    null === (a = n._textInput) ||
                    void 0 === a ||
                    null === (r = a.textInputNode) ||
                    void 0 === r ||
                    null === (i = r.validity) ||
                    void 0 === i
                      ? void 0
                      : i.badInput
                return 'number' === o && '' === s && !0 === l
              }),
              b()(p()(n), '_getActualCount', function (e) {
                var t = e.length
                return n._isInvalidNumber() && (t = 1), t
              }),
              b()(p()(n), '_handleBlur', function (e) {
                var t = n.props.onBlur,
                  a = e.currentTarget.value,
                  r = n._calculateLength(a),
                  i = n._getActualCount(a)
                n.setState({ isFocused: !1, displayCount: r, actualCount: i }), t && t(e)
              }),
              b()(p()(n), '_handleChange', function (e) {
                var t = n.props.onChange,
                  a = n.state.previousValue,
                  r = e.currentTarget.value,
                  i = n._calculateLength(r),
                  o = n._getActualCount(r),
                  s = n._getAdjustedMaxLength()
                void 0 !== s && r.length > s && a.length < r.length
                  ? (e.currentTarget.value = a)
                  : (n.setState({
                      isFocused: !0,
                      displayCount: i,
                      actualCount: o,
                      previousValue: e.currentTarget.value,
                    }),
                    t && t(e))
              }),
              b()(p()(n), '_handleFocus', function () {
                var e = n.props.onFocus
                n.setState({ isFocused: !0 }), e && e()
              }),
              b()(p()(n), '_handleKeyPress', function (e) {
                var t = n.props,
                  a = t.multiline,
                  r = t.onKeyPress,
                  i = t.onSubmitEditing
                r && r(e),
                  e.isDefaultPrevented() || 'Enter' !== e.key || e.shiftKey || a || !i || (e.preventDefault(), i(e))
              }),
              b()(p()(n), '_handleKeyDown', function (e) {
                var t = n.props.onKeyDown,
                  a = 0 === n.state.displayCount
                D.b.isKaiOS() && 'Backspace' === e.key && a ? (n._blurOnBackspaceKeyUpForKaiOS = a) : t && t(e)
              }),
              b()(p()(n), '_handleKeyUp', function (e) {
                var t = n.props.onKeyUp
                D.b.isKaiOS() &&
                  'Backspace' === e.key &&
                  n._blurOnBackspaceKeyUpForKaiOS &&
                  (e.preventDefault(), n.blur()),
                  t && t(e)
              }),
              b()(p()(n), '_handlePasswordVisibilityClick', function (e) {
                n.setState(function (e) {
                  return { isPasswordRevealed: !e.isPasswordRevealed }
                })
              }),
              b()(p()(n), '_setTextInputRef', function (e) {
                n._textInput = e
              }),
              b()(p()(n), '_checkComponentPropsUsageCorrectness', function (e) {
                var t = e.defaultValue,
                  a = e.maxLength,
                  n = e.onChange,
                  r = e.validLength,
                  i = !!n,
                  o = 'string' == typeof e.value,
                  s = 'string' == typeof t
                T()(
                  !(!s && o && !i),
                  'A controlled component, a component with a value prop, must have an onChange handler. The value prop cannot be undefined.',
                ),
                  T()(!(a && r && r > a), 'Max length should be equal or greater than valid length.'),
                  T()(
                    !((void 0 !== a && a <= 0) || (void 0 !== r && r <= 0)),
                    'Set editable to false instead of limiting the valid character count to 0.',
                  )
              }),
              b()(p()(n), '_exceedsValidLength', function (e) {
                var t = n._getMaxDisplayCount()
                return !!t && e > t
              }),
              b()(p()(n), '_getMaxDisplayCount', function () {
                return n.props.validLength || n.props.maxLength
              }),
              b()(p()(n), '_getAdjustedMaxLength', function () {
                var e = n.props.maxLength,
                  t = n.getValue(),
                  a = n._calculateLength(t)
                return e ? e + t.length - a : void 0
              }),
              n._checkComponentPropsUsageCorrectness(e)
            var r = e.defaultValue,
              i = e.value || r || ''
            return (
              (n.state = {
                displayCount: n._calculateLength(i),
                actualCount: M(i),
                isFocused: !1,
                isPasswordRevealed: !1,
                previousValue: i,
              }),
              n
            )
          }
          return (
            u()(
              a,
              [
                {
                  key: 'componentDidUpdate',
                  value: function (e) {
                    var t = this.props,
                      a = t.maxLength,
                      n = t.onChange,
                      r = t.validLength,
                      i = t.value,
                      o = e.maxLength,
                      s = e.onChange,
                      l = e.validLength,
                      c = e.value
                    ;(l === r && a === o && !!n === !!s && ('string' == typeof i) === ('string' == typeof c)) ||
                      this._checkComponentPropsUsageCorrectness(this.props)
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var e = this.props,
                      t = e.accessibilityLabel,
                      a = e.editable,
                      n = e.errorText,
                      r = e.helperText,
                      i = e.style,
                      o = this.state.isFocused,
                      s = this._isFormInvalid()
                    return y.a.createElement(
                      F.a,
                      { style: [G.root, i] },
                      y.a.createElement(
                        F.a,
                        {
                          accessibilityLabel: t,
                          accessibilityRole: 'label',
                          style: [
                            I.a.border,
                            G.textInputFormStyle,
                            s && I.a.invalidBorderColor,
                            o && s && I.a.focusedBorderInvalid,
                            o && !s && I.a.focusedBorderValid,
                            !a && I.a.disabled,
                          ],
                        },
                        y.a.createElement(
                          F.a,
                          { style: G.textInputFormWrapper },
                          y.a.createElement(
                            F.a,
                            { style: G.textInputHeader },
                            this._renderLabel(),
                            this._shouldRenderDisplayCount() ? this._renderDisplayCount() : null,
                          ),
                          this._renderTextInput(),
                        ),
                      ),
                      y.a.createElement(
                        F.a,
                        { style: [G.sidePadding, G.underTextInputForm] },
                        y.a.createElement(
                          F.a,
                          { style: G.subtextWrapper },
                          r ? this._renderHelperText() : null,
                          s && n ? this._renderErrorText() : null,
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
                      a = this._isFormInvalid() ? 'red500' : t,
                      n = this._isLabelLarge()
                    return y.a.createElement(
                      w.b,
                      {
                        color: n ? 'gray700' : a,
                        numberOfLines: 1,
                        size: n ? 'headline1' : 'subtext2',
                        style: [
                          G.textInputHeaderItem,
                          n && G.placeholderText,
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
                      a = (e.accessibilityLabel, e.calculateLength, e.editable),
                      n =
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
                      i = (e.style, e.type, e.validLength, o()(e, V))
                    return y.a.createElement(
                      F.a,
                      { style: W.container },
                      t && !this._isLabelLarge() ? this._renderIcon() : null,
                      y.a.createElement(
                        w.b,
                        { size: 'headline1', style: W.wrapper },
                        y.a.createElement(
                          B.a,
                          r()({}, i, {
                            editable: a,
                            maxLength: this._getAdjustedMaxLength(),
                            onBlur: this._handleBlur,
                            onChange: this._handleChange,
                            onFocus: this._handleFocus,
                            onKeyDown: this._handleKeyDown,
                            onKeyPress: this._handleKeyPress,
                            onKeyUp: this._handleKeyUp,
                            ref: this._setTextInputRef,
                            style: this._getTextInputStyle(a),
                            type: this._getTextInputType(),
                          }),
                        ),
                      ),
                      n && !this._isLabelLarge() ? this._renderValidationIcon() : null,
                      this._renderPasswordVisibilityIcon(),
                    )
                  },
                },
                {
                  key: '_renderPasswordVisibilityIcon',
                  value: function () {
                    var e = this.props,
                      t = e.showPasswordVisibilityIcon,
                      a = e.type,
                      n = this.state.isPasswordRevealed
                    return 'password' === a && t
                      ? y.a.createElement(
                          F.a,
                          { style: G.passwordVisibilityIconContainer },
                          y.a.createElement(C.a, {
                            accessibilityLabel: n ? z : U,
                            focusable: !0,
                            hoverLabel: { label: n ? z : U },
                            icon: n ? y.a.createElement(O.a, null) : y.a.createElement(L.a, null),
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
                      F.a,
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
                      F.a,
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
                      a = this._exceedsValidLength(e),
                      n = t && x.a.ia24dc8c(t),
                      r = x.a.ia24dc8c(e)
                    return y.a.createElement(
                      F.a,
                      { accessibilityLiveRegion: 'polite', style: [G.textInputHeaderItem, G.displayCount] },
                      y.a.createElement(
                        w.b,
                        { color: a ? 'red500' : 'gray700', size: 'subtext2' },
                        n ? ''.concat(r, ' / ').concat(n) : '',
                      ),
                    )
                  },
                },
                {
                  key: '_renderIcon',
                  value: function () {
                    var e = this.props.Icon,
                      t = this.state.isFocused,
                      a = [G.icon, t && G.focusedIcon]
                    return e && y.a.createElement(e, { style: a })
                  },
                },
                {
                  key: '_renderValidationIcon',
                  value: function () {
                    return this._isFormInvalid()
                      ? y.a.createElement(N.a, { style: [G.validationIcon, I.a.invalidColor] })
                      : y.a.createElement(R.a, { style: [G.validationIcon, I.a.validColor] })
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
                    var a = e.calculateLength,
                      n = e.value,
                      r = 'string' == typeof n ? j(n, a) : 0
                    return 'string' == typeof n && r !== t.displayCount
                      ? { displayCount: r, actualCount: n.length }
                      : null
                  },
                },
              ],
            ),
            a
          )
        })(y.a.Component)
      b()(H, 'defaultProps', { autoComplete: 'on', autoCorrect: !0, autoFocus: !1, editable: !0, invalid: !1 }),
        (H.propTypes = {})
      var W = A.a.create(function (e) {
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
        G = A.a.create(function (e) {
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
    piX5: function (e, t, a) {
      'use strict'
      a('uFXj'), a('2G9S')
      var n = a('rHpw').a.create(function (e) {
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
      t.a = n
    },
    rFBM: function (e, t, a) {
      'use strict'
      var n = a('VrFO'),
        r = a.n(n),
        i = a('Y9Ll'),
        o = a.n(i),
        s = a('1Pcy'),
        l = a.n(s),
        c = a('5Yy7'),
        u = a.n(c),
        d = a('2VqO'),
        p = a.n(d),
        h = a('KEM+'),
        m = a.n(h),
        _ = (a('2G9S'), a('hCOa'), a('87if'), a('ERkP')),
        v = a.n(_),
        f = a('rHpw'),
        b = a('k/Ka'),
        g = a('MWbm'),
        y = function (e) {
          return Object(b.a)('div', e)
        },
        k = (function (e) {
          u()(a, e)
          var t = p()(a)
          function a() {
            var e
            r()(this, a)
            for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              m()(l()(e), '_dragEnterCount', 0),
              m()(l()(e), 'state', { active: !1 }),
              m()(l()(e), '_handleDragDrop', function (t) {
                var a = e.props.onFilesAdded
                t.preventDefault(), a(Array.from(t && t.dataTransfer.files)), e._updateDragCount(0)
              }),
              m()(l()(e), '_handleDragEnter', function (t) {
                var a = e.props.onDragEnter
                t.preventDefault(), a && a(), e._updateDragCount(e._dragEnterCount + 1)
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
            o()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.allowDragDrop,
                    a = e.children,
                    n = e.style,
                    r = this.state.active,
                    i = t ? w.dragBorderValid : w.dragBorderInvalid
                  return v.a.createElement(
                    y,
                    {
                      onDragEnter: this._handleDragEnter,
                      onDragLeave: this._handleDragLeave,
                      onDragOver: this._handleDragOver,
                      onDrop: this._handleDragDrop,
                      style: [w.root, n, r && i],
                    },
                    v.a.createElement(g.a, { style: w.inner }, 'function' == typeof a ? a(r) : a),
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
            a
          )
        })(v.a.Component)
      m()(k, 'defaultProps', { allowDragDrop: !0 })
      var w = f.a.create(function (e) {
        return {
          root: { display: 'flex', flexDirection: 'column' },
          dragBorderValid: { borderStyle: 'dashed', borderWidth: e.spaces.space2, borderColor: e.colors.primary },
          dragBorderInvalid: { borderStyle: 'dashed', borderWidth: e.spaces.space2, borderColor: e.colors.magenta500 },
          inner: { flexGrow: 1 },
        }
      })
      t.a = k
    },
    't+RT': function (e, t, a) {
      'use strict'
      var n = a('ERkP'),
        r = a.n(n),
        i = a('aWzz'),
        o = a.n(i)
      function s() {
        return (s =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var a = arguments[t]
              for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
            }
            return e
          }).apply(this, arguments)
      }
      function l(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return e
      }
      var c = (function (e) {
        var t, a
        function n() {
          var t
          return (
            ((t = e.call(this) || this).handleExpired = t.handleExpired.bind(l(t))),
            (t.handleErrored = t.handleErrored.bind(l(t))),
            (t.handleRecaptchaRef = t.handleRecaptchaRef.bind(l(t))),
            t
          )
        }
        ;(a = e), ((t = n).prototype = Object.create(a.prototype)), (t.prototype.constructor = t), (t.__proto__ = a)
        var i = n.prototype
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
                  var a,
                    n,
                    r = {},
                    i = Object.keys(e)
                  for (n = 0; n < i.length; n++) (a = i[n]), t.indexOf(a) >= 0 || (r[a] = e[a])
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
          n
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
      var u = a('oXkQ'),
        d = a.n(u)
      function p() {
        return (p =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var a = arguments[t]
              for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
            }
            return e
          }).apply(this, arguments)
      }
      var h = {},
        m = 0
      function _() {
        return ('undefined' != typeof window && window.recaptchaOptions) || {}
      }
      var v,
        f,
        b = 'onloadcallback',
        g = _(),
        y = ((v = function () {
          var e = _(),
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
        (f = (f = { callbackName: b, globalName: 'grecaptcha', removeOnUnmount: g.removeOnUnmount || !1 }) || {}),
        function (e) {
          var t = e.displayName || e.name || 'Component',
            a = (function (t) {
              var a, r
              function i(e, a) {
                var n
                return ((n = t.call(this, e, a) || this).state = {}), (n.__scriptURL = ''), n
              }
              ;(r = t),
                ((a = i).prototype = Object.create(r.prototype)),
                (a.prototype.constructor = a),
                (a.__proto__ = r)
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
                  delete window[f.callbackName]
                }),
                (o.componentDidMount = function () {
                  var e = this,
                    t = this.setupScriptURL(),
                    a = this.asyncScriptLoaderGetScriptLoaderID(),
                    n = f,
                    r = n.globalName,
                    i = n.callbackName,
                    o = n.scriptId
                  if ((r && void 0 !== window[r] && (h[t] = { loaded: !0, observers: {} }), h[t])) {
                    var s = h[t]
                    return s && (s.loaded || s.errored)
                      ? void this.asyncScriptLoaderHandleLoad(s)
                      : void (s.observers[a] = function (t) {
                          return e.asyncScriptLoaderHandleLoad(t)
                        })
                  }
                  var l = {}
                  ;(l[a] = function (t) {
                    return e.asyncScriptLoaderHandleLoad(t)
                  }),
                    (h[t] = { loaded: !1, observers: l })
                  var c = document.createElement('script')
                  ;(c.src = t), (c.async = !0), o && (c.id = o)
                  var u = function (e) {
                    if (h[t]) {
                      var a = h[t].observers
                      for (var n in a) e(a[n]) && delete a[n]
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
                  if (!0 === f.removeOnUnmount)
                    for (var t = document.getElementsByTagName('script'), a = 0; a < t.length; a += 1)
                      t[a].src.indexOf(e) > -1 && t[a].parentNode && t[a].parentNode.removeChild(t[a])
                  var n = h[e]
                  n &&
                    (delete n.observers[this.asyncScriptLoaderGetScriptLoaderID()],
                    !0 === f.removeOnUnmount && delete h[e])
                }),
                (o.render = function () {
                  var t = f.globalName,
                    a = this.props,
                    r = (a.asyncScriptOnLoad, a.forwardedRef),
                    i = (function (e, t) {
                      if (null == e) return {}
                      var a,
                        n,
                        r = {},
                        i = Object.keys(e)
                      for (n = 0; n < i.length; n++) (a = i[n]), t.indexOf(a) >= 0 || (r[a] = e[a])
                      return r
                    })(a, ['asyncScriptOnLoad', 'forwardedRef'])
                  return (
                    t && 'undefined' != typeof window && (i[t] = void 0 !== window[t] ? window[t] : void 0),
                    (i.ref = r),
                    Object(n.createElement)(e, i)
                  )
                }),
                i
              )
            })(n.Component),
            r = Object(n.forwardRef)(function (e, t) {
              return Object(n.createElement)(a, p({}, e, { forwardedRef: t }))
            })
          return (
            (r.displayName = 'AsyncScriptLoader(' + t + ')'), (r.propTypes = { asyncScriptOnLoad: o.a.func }), d()(r, e)
          )
        })(c)
      t.a = y
    },
    v84o: function (e, t, a) {
      'use strict'
      a('2G9S')
      var n = a('180P'),
        r = a('doI8')
      t.a = function (e) {
        var t = e.timelinePrefix,
          a = void 0 === t ? 'generic-timeline-' : t,
          i = e.urtUrl,
          o = i.url,
          s = i.urtEndpointOptions || {},
          l = s.cacheId,
          c = s.requestParams
        return Object(r.b)({
          timelineId: l || ''.concat(a).concat(Object(n.a)(i)),
          endpointUrl: o,
          endpointParams: c || {},
        })
      }
    },
    vMn4: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        i = a('ERkP'),
        o = a.n(i),
        s = a('Lsrn'),
        l = a('k/Ka'),
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
    wz7L: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        i = a('ERkP'),
        o = a.n(i),
        s = a('Lsrn'),
        l = a('k/Ka'),
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
    yuM6: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'default', function () {
          return m
        })
      var n = a('VrFO'),
        r = a.n(n),
        i = a('Y9Ll'),
        o = a.n(i),
        s = a('5Yy7'),
        l = a.n(s),
        c = a('2VqO'),
        u = a.n(c),
        d = (a('2G9S'), a('ERkP')),
        p = a.n(d),
        h = a('6/RC'),
        m = (function (e) {
          l()(a, e)
          var t = u()(a)
          function a() {
            return r()(this, a), t.apply(this, arguments)
          }
          return (
            o()(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props.location.query,
                    t = e.code,
                    a = e.error,
                    n = e.scope,
                    r = e.state,
                    i = {
                      callback_url: 'https://'.concat(window.location.hostname).concat(window.location.pathname),
                      code: t,
                      error: a,
                      scope: n,
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
            a
          )
        })(p.a.Component)
    },
    zu4M: function (e, t, a) {
      'use strict'
      a.r(t)
      var n = a('97Jx'),
        r = a.n(n),
        i = a('ERkP'),
        o = a.n(i),
        s = a('9D1O'),
        l = a('gPQO')
      t.default = function (e) {
        return o.a.createElement(l.a, r()({}, e, { flowName: 'convert_to_professional', ocfModule: s.i }))
      }
    },
  },
])
//# sourceMappingURL=WIPED
