;(window.webpackJsonp = window.webpackJsonp || []).push([
  [107, 7, 19, 178],
  {
    '+/sI': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return g
      }),
        n.d(t, 'b', function () {
          return y
        })
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        l = n('5Yy7'),
        c = n.n(l),
        s = n('2VqO'),
        u = n.n(s),
        d = (n('Wd/2'), n('M+/F'), n('2G9S'), n('ERkP')),
        p = n.n(d),
        h = n('TGcR'),
        f = n('t62R'),
        m = n('a6qo'),
        v = n('rHpw'),
        g = 'animated_gif',
        y = 'video',
        b = (function (e) {
          c()(n, e)
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
                  if (a === g || 'vine' === a)
                    e =
                      a === g
                        ? p.a.createElement(f.b, { weight: 'bold' }, 'GIF')
                        : p.a.createElement(h.a, { style: w.icon })
                  else if (a === y && n) {
                    var r = Math.trunc(n / 6e4),
                      i = '0'.concat(Math.trunc((n % 6e4) / 1e3)).slice(-2)
                    e = p.a.createElement(f.b, { color: 'white' }, ''.concat(r, ':').concat(i))
                  }
                  return e ? p.a.createElement(m.a, { align: 'left' }, e) : null
                },
              },
            ]),
            n
          )
        })(p.a.PureComponent),
        w = v.a.create(function (e) {
          return { icon: { color: e.colors.white } }
        })
      t.c = b
    },
    '/Imo': function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        i = n('m3Bd'),
        o = n.n(i),
        l = n('VrFO'),
        c = n.n(l),
        s = n('Y9Ll'),
        u = n.n(s),
        d = n('1Pcy'),
        p = n.n(d),
        h = n('5Yy7'),
        f = n.n(h),
        m = n('2VqO'),
        v = n.n(m),
        g = n('KEM+'),
        y = n.n(g),
        b = (n('2G9S'), n('jQ3i'), n('x4t0'), n('ERkP')),
        w = n.n(b),
        _ = n('/yvb'),
        E = n('k/Ka'),
        C = n('3XMw'),
        x = n.n(C),
        I = n('rHpw'),
        S = ['accept', 'disabled', 'multiple', 'onChange', 'testID'],
        T = x.a.i5450beb,
        M = x.a.f7432494,
        k = (function (e) {
          f()(n, e)
          var t = v()(n)
          function n() {
            var e
            c()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              y()(p()(e), '_handlePress', function (t) {
                var n = e.props.onPress
                n && n(t), e._fileInput && e._fileInput.click()
              }),
              y()(p()(e), '_handleChange', function (t) {
                var n = e.props.onChange,
                  a = t.target,
                  r = a.files
                r.length && n && n(r), (a.value = '')
              }),
              y()(p()(e), '_handleFileInputButtonRef', function (t) {
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
                    l = o()(e, S),
                    c = !((null != t && t.includes('video')) || (null != t && t.includes('gif')))
                  return w.a.createElement(
                    w.a.Fragment,
                    null,
                    w.a.createElement(
                      _.a,
                      r()({ hoverLabel: t ? { label: c ? M : T } : void 0 }, l, {
                        disabled: n,
                        onPress: this._handlePress,
                      }),
                    ),
                    Object(E.a)('input', {
                      accept: t,
                      disabled: n,
                      multiple: a,
                      onChange: this._handleChange,
                      ref: this._handleFileInputButtonRef,
                      style: R.input,
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
        })(w.a.Component)
      y()(k, 'defaultProps', { disabled: !1, multiple: !1 })
      var R = I.a.create(function (e) {
        return {
          input: { width: '0.1px', height: '0.1px', opacity: 0, overflow: 'hidden', position: 'absolute', zIndex: -1 },
        }
      })
      t.a = k
    },
    '21U8': function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        l = n('1Pcy'),
        c = n.n(l),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('2VqO'),
        p = n.n(d),
        h = n('KEM+'),
        f = n.n(h),
        m = (n('Rqga'), n('2G9S'), n('ERkP')),
        v = n.n(m),
        g = n('/yvb'),
        y = n('3XMw'),
        b = n.n(y),
        w = n('3rX5'),
        _ = n('rHpw'),
        E = n('MWbm'),
        C = _.a.create(function (e) {
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
        x = function (e) {
          var t = e.circle,
            n = e.height,
            a = e.width
          return v.a.createElement(E.a, {
            pointerEvents: 'none',
            style: [C.mask, { width: a, height: n }, t && C.circle],
          })
        },
        I = n('ZvMt'),
        S = n('97Jx'),
        T = n.n(S),
        M = n('m3Bd'),
        k = n.n(M),
        R = n('CHgo'),
        P = n('7ep7'),
        L = ['children', 'onPanEnd', 'onPanMove', 'onPinchMove', 'onWheel'],
        O = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n(e) {
            var a
            return (
              r()(this, n),
              (a = t.call(this, e)),
              f()(c()(a), '_previousTouchDistance', 0),
              f()(c()(a), '_previousPositionX', 0),
              f()(c()(a), '_previousPositionY', 0),
              f()(c()(a), '_centerPosition', { x: 0, y: 0 }),
              f()(c()(a), '_panResponder', {}),
              f()(c()(a), '_setRef', function (e) {
                var t = a.props,
                  n = t.onPanEnd,
                  r = t.onPanMove,
                  i = t.onPinchMove,
                  o = t.onWheel
                if (e) {
                  ;(r || n || i) && (a._removeTouchMoveToScrollListener = Object(R.a)(e, a._preventDefaultEvent, !1)),
                    o && (a._removeScrollToScaleListener = Object(R.b)(e, a._preventDefaultEvent, !1))
                  var l = e.getBoundingClientRect()
                  a._centerPosition = { x: l.width / 2 + l.left, y: l.height / 2 + l.top }
                }
              }),
              f()(c()(a), '_preventDefaultEvent', function (e) {
                e.preventDefault()
              }),
              f()(c()(a), '_handlePanResponderMove', function (e, t) {
                var n,
                  r,
                  i = a.props,
                  o = i.onPanMove,
                  l = i.onPinchMove,
                  c = e.nativeEvent.touches
                if (2 === t.numberActiveTouches) {
                  if (l) {
                    var s =
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
                      h = a._previousPositionX ? d - a._previousPositionX : 0,
                      f = a._previousPositionY ? p - a._previousPositionY : 0,
                      m = a._previousTouchDistance ? s - a._previousTouchDistance : 0
                    ;(a._previousPositionX = d), (a._previousPositionY = p), (a._previousTouchDistance = s)
                    var v = a._centerPosition
                    l(m, v.x - d, v.y - p, h, f)
                  }
                } else o && o(t.dx, t.dy)
                document.addEventListener('selectstart', a._preventDefaultEvent, !1)
              }),
              f()(c()(a), '_handlePanResponderEnd', function (e, t) {
                a.props.onPanEnd && a.props.onPanEnd(t.dx, t.dy),
                  a.props.onPinchMove && (a._previousTouchDistance = 0),
                  (a._previousPositionX = 0),
                  (a._previousPositionY = 0),
                  a._removeSelectStartListener()
              }),
              f()(c()(a), '_handleWheel', function (e) {
                var t = e.clientX,
                  n = e.clientY,
                  r = e.deltaX,
                  i = e.deltaY,
                  o = a._centerPosition,
                  l = o.x - t,
                  c = o.y - n
                a.props.onWheel && a.props.onWheel(r, i, l, c)
              }),
              (a._panResponder = P.a.create({
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
                    t = (e.children, e.onPanEnd, e.onPanMove, e.onPinchMove, e.onWheel, k()(e, L))
                  return v.a.createElement(
                    E.a,
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
        })(v.a.Component),
        D = n('9RkS'),
        A = n('rOXj'),
        F = n('aITJ'),
        B = n('yiKp'),
        V = n.n(B),
        z = n('Lsrn'),
        H = n('k/Ka'),
        j = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(H.a)(
            'svg',
            V()(
              V()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [z.a.root, e.style],
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
      var W = j,
        K = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(H.a)(
            'svg',
            V()(
              V()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [z.a.root, e.style],
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
      K.metadata = { width: 24, height: 24 }
      var G = K,
        U = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(H.a)(
            'svg',
            V()(
              V()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [z.a.root, e.style],
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
      U.metadata = { width: 24, height: 24 }
      var N = U,
        X = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(H.a)(
            'svg',
            V()(
              V()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [z.a.root, e.style],
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
      X.metadata = { width: 24, height: 24 }
      var Y = X,
        q = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(H.a)(
            'svg',
            V()(
              V()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [z.a.root, e.style],
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
      q.metadata = { width: 24, height: 24 }
      var J = q,
        Z = b.a.d85bc1b8,
        Q = b.a.f596ace8,
        $ = b.a.df031fca,
        ee = b.a.b40332c5,
        te = b.a.e547b368,
        ne = b.a.f7571204,
        ae = b.a.e6e16811,
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
              f()(c()(a), '_previousLeft', 0),
              f()(c()(a), '_previousTop', 0),
              f()(c()(a), '_panStyles', { top: 0, left: 0 }),
              f()(c()(a), '_shouldShowZoomControl', function () {
                return (!F.b.isMobileOS() || !A.a.isTouchSupported()) && a.props.withZoomControl
              }),
              f()(c()(a), '_renderControls', function () {
                var e = a.props,
                  t = e.image,
                  n = e.withAspectRatioOptions,
                  r = a.state.aspectRatio,
                  i = t.width / t.height,
                  o = a._shouldShowZoomControl()
                return n || o
                  ? v.a.createElement(
                      E.a,
                      { style: oe.controlsContainer },
                      n
                        ? v.a.createElement(
                            E.a,
                            { style: oe.ratioContainer },
                            v.a.createElement(g.a, {
                              accessibilityLabel: Q,
                              borderColor: 'transparent',
                              color: r === i ? 'primary' : 'gray700',
                              hoverLabel: { label: te },
                              icon: v.a.createElement(W, null),
                              onPress: a._setAspectRatio(i),
                              size: 'medium',
                            }),
                            v.a.createElement(g.a, {
                              accessibilityLabel: $,
                              borderColor: 'transparent',
                              color: r === 16 / 9 ? 'primary' : 'gray700',
                              hoverLabel: { label: ne },
                              icon: v.a.createElement(G, null),
                              onPress: a._setAspectRatio(16 / 9),
                              size: 'medium',
                            }),
                            v.a.createElement(g.a, {
                              accessibilityLabel: ee,
                              borderColor: 'transparent',
                              color: 1 === r ? 'primary' : 'gray700',
                              hoverLabel: { label: ae },
                              icon: v.a.createElement(N, null),
                              onPress: a._setAspectRatio(1),
                              size: 'medium',
                            }),
                          )
                        : null,
                      o
                        ? v.a.createElement(
                            E.a,
                            { style: oe.zoomContainer },
                            v.a.createElement(D.a, {
                              accessibilityLabel: Z,
                              max: a._maxScale,
                              maxIcon: v.a.createElement(Y, { style: oe.icon }),
                              min: 0,
                              minIcon: v.a.createElement(J, { style: oe.icon }),
                              onChange: a._handleScaleChange,
                              step: 'any',
                              value: a.state.imageScale,
                            }),
                          )
                        : null,
                    )
                  : null
              }),
              f()(c()(a), '_setImageRef', function (e) {
                a._imageRef = e
              }),
              f()(c()(a), '_handleScaleChange', function (e) {
                a.setState({ imageScale: e })
              }),
              f()(c()(a), '_getImageDimensions', function () {
                var e = a.state.imageScale,
                  t = a.props.image.width / a.props.image.height,
                  n = a._getMaskDimensions(),
                  r = n.height,
                  i = n.width,
                  o = I.a.getCoverDimensions({ width: i, height: r }, t),
                  l = o.height
                return { width: o.width * Math.pow(2, e), height: l * Math.pow(2, e) }
              }),
              f()(c()(a), '_getMaskDimensions', function () {
                var e = a.state,
                  t = e.aspectRatio,
                  n = e.containerHeight,
                  r = e.containerWidth,
                  i = I.a.getContainDimensions({ width: r - 50, height: n - 50 }, t),
                  o = i.height
                return { width: i.width, height: o }
              }),
              f()(c()(a), '_handleLayout', function (e) {
                var t = e.nativeEvent.layout,
                  n = t.height,
                  r = t.width
                a.state.containerHeight || a.state.containerWidth
                  ? a.setState({ containerHeight: n, containerWidth: r })
                  : (a.setState({ containerHeight: n, containerWidth: r }), a._setDefaultCropData())
              }),
              f()(c()(a), '_setDefaultCropData', function () {
                var e = a.props,
                  t = e.defaultCropData,
                  n = e.image
                if (t) {
                  var r = a._getImageDimensions().width,
                    i = a._getMaskDimensions().width,
                    o = r / n.width,
                    l = re(i / (t.width * o))
                  a.setState({ imageScale: l })
                  var c = a._getUnscaledCropData(),
                    s = c.left,
                    u = c.top
                  ;(a._panStyles.top = u - t.top * o * Math.pow(2, l)),
                    (a._previousTop = a._panStyles.top),
                    (a._panStyles.left = s - t.left * o * Math.pow(2, l)),
                    (a._previousLeft = a._panStyles.left),
                    a._updateNativeStyles()
                }
              }),
              f()(c()(a), '_handleWheel', function (e, t, n, r) {
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
              f()(c()(a), '_handlePanMove', function (e, t) {
                ;(a._panStyles.left = a._previousLeft + e),
                  (a._panStyles.top = a._previousTop + t),
                  a._updateNativeStyles(),
                  a._adjustToInBounds()
              }),
              f()(c()(a), '_handlePanEnd', function (e, t) {
                ;(a._previousLeft = a._panStyles.left), (a._previousTop = a._panStyles.top)
              }),
              f()(c()(a), '_handlePinchMove', function (e, t, n, r, i) {
                var o = e / 200
                a.setState(function (e) {
                  var l = e.imageScale,
                    c = Math.min(a._maxScale, Math.max(l + o, 0))
                  return (
                    (a._panStyles.left += t * (c - l) + r),
                    (a._panStyles.top += n * (c - l) + i),
                    (a._previousLeft = a._panStyles.left),
                    (a._previousTop = a._panStyles.top),
                    { imageScale: c }
                  )
                })
              }),
              f()(c()(a), '_adjustToInBounds', function () {
                var e = a._getUnscaledCropData(),
                  t = a._getImageDimensions(),
                  n = e.left,
                  r = e.top,
                  i = e.left + e.width - t.width,
                  o = e.top + e.height - t.height,
                  l = !1
                n < 0 && ((l = !0), (a._panStyles.left += n), (a._previousLeft += n)),
                  r < 0 && ((l = !0), (a._panStyles.top += r), (a._previousTop += r)),
                  i > 0 && ((l = !0), (a._panStyles.left += i), (a._previousLeft += i)),
                  o > 0 && ((l = !0), (a._panStyles.top += o), (a._previousTop += o)),
                  l && a._updateNativeStyles()
              }),
              f()(c()(a), '_updateNativeStyles', function () {
                var e = a._panStyles,
                  t = e.left,
                  n = e.top
                a._imageRef &&
                  a._imageRef.setNativeProps({
                    style: { transform: [{ translate3d: ''.concat(t, 'px, ').concat(n, 'px, 0') }] },
                  })
              }),
              f()(c()(a), '_getUnscaledCropData', function () {
                var e = a._getImageDimensions(),
                  t = e.height,
                  n = e.width,
                  r = a._getMaskDimensions(),
                  i = r.height,
                  o = r.width,
                  l = a._panStyles,
                  c = l.left
                return { top: (t - i) / 2 - l.top, left: (n - o) / 2 - c, width: o, height: i }
              }),
              f()(c()(a), '_setAspectRatio', function (e) {
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
                    l = this._getMaskDimensions(),
                    c = l.height,
                    s = l.width,
                    u = this.state.containerWidth && this.state.containerHeight
                  return v.a.createElement(
                    E.a,
                    { style: oe.container },
                    v.a.createElement(
                      O,
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
                            v.a.createElement(w.a, {
                              ref: this._setImageRef,
                              source: { uri: n.src, width: o, height: i },
                              style: oe.image,
                            }),
                            v.a.createElement(x, { circle: t, height: c, width: s }),
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
      f()(ie, 'defaultProps', { circle: !1, withZoomControl: !0 })
      var oe = _.a.create(function (e) {
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
        return R
      })
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        l = n('5Yy7'),
        c = n.n(l),
        s = n('2VqO'),
        u = n.n(s),
        d = n('KEM+'),
        p = n.n(d),
        h = (n('uFXj'), n('ERkP')),
        f = n.n(h),
        m = n('LCtV'),
        v = n('3XMw'),
        g = n.n(v),
        y = n('VPdC'),
        b = n('pKoL'),
        w = n('MWbm'),
        _ = n('rFBM'),
        E = n('/yvb'),
        C = n('9Xij'),
        x = n('rHpw'),
        I = n('hOZg'),
        S = n('Mbn/'),
        T = n('T8pk'),
        M = g.a.b87ca51a,
        k = g.a.eebff22c,
        R = (function (e) {
          c()(n, e)
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
                    l = e.rootStyle,
                    c = e.withDragDrop,
                    s = a && !a.uploader,
                    u = f.a.createElement(
                      f.a.Fragment,
                      null,
                      this._renderPreview(),
                      s
                        ? null
                        : f.a.createElement(
                            f.a.Fragment,
                            null,
                            f.a.createElement(w.a, { style: [L.mask, n, P[t]] }),
                            f.a.createElement(
                              w.a,
                              { style: L.mediaPicker },
                              this._renderMediaEdit(),
                              i ? this._renderMediaCrop() : null,
                              o ? this._renderMediaRemove() : null,
                            ),
                          ),
                    )
                  return f.a.createElement(
                    w.a,
                    { style: [L.container, l, P[t]] },
                    c && r ? f.a.createElement(_.a, { onFilesAdded: r, style: [L.dragDropContainer, P[t]] }, u) : u,
                  )
                },
              },
              {
                key: '_renderMediaRemove',
                value: function () {
                  var e = this.props.onRemove
                  return f.a.createElement(E.a, {
                    accessibilityLabel: M,
                    hoverLabel: { label: M },
                    icon: f.a.createElement(I.a, null),
                    onPress: e,
                    size: 'large',
                    style: L.rightButton,
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
                  return f.a.createElement(E.a, {
                    accessibilityLabel: k,
                    icon: f.a.createElement(S.a, null),
                    onPress: t,
                    size: 'large',
                    style: n ? L.middleButton : L.rightButton,
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
                    o = f.a.createElement(T.a, null)
                  return r
                    ? f.a.createElement(y.a, {
                        acceptGifs: t,
                        acceptVideo: n,
                        accessibilityLabel: a,
                        icon: o,
                        onChange: r,
                        size: 'large',
                        type: 'onMediaDominantColorFilled',
                      })
                    : f.a.createElement(E.a, {
                        accessibilityLabel: a,
                        icon: o,
                        onPress: i,
                        size: 'large',
                        style: L.edit,
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
                    ? f.a.createElement(
                        C.a,
                        { ratio: t },
                        f.a.createElement(b.a, {
                          borderRadius: n,
                          enableGif: !1,
                          mediaItem: r,
                          style: L.mediaPreview,
                          withCloseButton: !1,
                        }),
                      )
                    : a
                },
              },
            ]),
            n
          )
        })(f.a.Component)
      p()(R, 'defaultProps', { acceptGifs: !1, acceptVideo: !1, aspectRatio: 1, borderRadius: m.a.NONE })
      var P = x.a.create(function (e) {
          return {
            infinite: { borderRadius: e.borderRadii.infinite },
            medium: { borderRadius: e.borderRadii.small },
            none: { borderRadius: e.borderRadii.none },
          }
        }),
        L = x.a.create(function (e) {
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
    '4bHO': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      })
      n('ho0z')
      var a = function (e, t) {
        switch (e.type) {
          case 'user':
            return '@'.concat('users' === t ? e.data.screen_name : e.data.name, ' ')
          case 'hashtag':
          case 'topic':
          case 'event':
            return ''.concat(e.data.topic, ' ')
          case 'dm_conversation':
            return ''.concat(e.data.name, ' ')
          case 'no_result':
            return ''.concat(e.data.text, ' ')
          default:
            return ''
        }
      }
    },
    '4k/t': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'sidebarLayoutScreenTitle', function () {
          return N
        }),
        n.d(t, 'TwitterArticleScreen', function () {
          return X
        })
      n('KqXw'), n('WNMA'), n('uFXj')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('es0u'),
        o = n('6au1'),
        l = n('G6rE'),
        c = n('rxPX'),
        s = n('0KEI'),
        u = n('kGix'),
        d = function (e, t) {
          return t.match.params.twitterArticleId
        },
        p = function (e, t) {
          var n = d(0, t)
          return o.a.select(e, n)
        },
        h = function (e, t) {
          var n,
            a = p(e, t),
            r = null == a || null === (n = a.metadata) || void 0 === n ? void 0 : n.authorResults.result
          return 'User' === (null == r ? void 0 : r.__typename) ? (null == r ? void 0 : r.rest_id) : void 0
        },
        f = function (e, t) {
          var n = h(e, t)
          return n ? l.e.select(e, n) : void 0
        },
        m = function (e, t) {
          var n = (function (e, t) {
              var n = d(0, t)
              return o.a.selectFetchStatus(e, n)
            })(e, t),
            a = (function (e, t) {
              var n = h(e, t)
              return n ? l.e.selectFetchStatus(e, n) : void 0
            })(e, t)
          return Object(u.d)(n, a)
        },
        v = Object(c.a)()
          .propsFromState(function () {
            return { author: f, authorId: h, fetchStatus: m, twitterArticle: p }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(s.createLocalApiErrorHandlerWithContextFactory)(
                'TWITTER_ARTICLE_SCREEN',
              ),
              fetchTwitterArticle: o.a.fetchOne,
              fetchUserIfNeeded: l.e.fetchOneIfNeeded,
            }
          }),
        g = n('VS6U'),
        y = (n('ho0z'), n('6U7i'), n('849X'), n('TJCb'), n('z84I'), n('hBpG'), n('7x/C'), n('Qyxo')),
        b = n('m3Bd'),
        w = n.n(b),
        _ = n('yiKp'),
        E = n.n(_),
        C = (n('Blm6'), n('ssvU'), ['__typename']),
        x = ['__typename'],
        I = function (e, t, n) {
          var a,
            r = 'ApiGif' === n ? 'animated_gif' : 'video',
            i = e.preview_image
          return {
            type: r,
            id: S(t),
            id_str: t || '',
            ext_alt_text: null == i ? void 0 : i.alt_text,
            ext_media_color: {
              palette: (null == i || null === (a = i.color_info) || void 0 === a ? void 0 : a.palette) || [],
            },
            media_url: (null == i ? void 0 : i.original_img_url) || '',
            media_url_https: (null == i ? void 0 : i.original_img_url) || '',
            url: (null == i ? void 0 : i.original_img_url) || '',
            display_url: (null == i ? void 0 : i.original_img_url) || '',
            expanded_url: (null == i ? void 0 : i.original_img_url) || '',
            original_info: {
              height: (null == i ? void 0 : i.original_img_height) || 0,
              width: (null == i ? void 0 : i.original_img_width) || 0,
            },
            sizes: {
              original: {
                h: (null == i ? void 0 : i.original_img_height) || 0,
                resize: 'fit',
                w: (null == i ? void 0 : i.original_img_width) || 0,
              },
            },
            video_info: E()(
              E()(
                { aspect_ratio: [e.aspect_ratio.numerator, e.aspect_ratio.denominator] },
                e.duration_millis && { duration_millis: e.duration_millis },
              ),
              {},
              {
                variants: e.variants.map(function (e) {
                  return { bitrate: e.bit_rate, content_type: e.content_type, url: e.url }
                }),
              },
            ),
          }
        },
        S = function (e) {
          var t = parseInt(e, 10)
          return Number.isNaN(t) ? 0 : t
        },
        T = n('fn8Q'),
        M = n('gEvp'),
        k = n('rOiJ'),
        R = n('rHpw'),
        P = R.a.create(function (e) {
          return { media: { width: '100%' } }
        }),
        L = function (e) {
          var t = e.block,
            n = e.blockProps,
            a = e.contentState,
            i = t.getEntityAt(0),
            o = i ? a.getEntity(i) : null
          if (!o) return null
          var l = o.getData()
          if (o.type === T.b.TWEET) {
            var c = l.tweetId
            return r.a.createElement(M.a, { tweetId: c })
          }
          if (o.type === T.b.MEDIA) {
            var s = l.mediaItems.map(function (e) {
                var t
                return null == n || null === (t = n.media) || void 0 === t
                  ? void 0
                  : t.find(function (t) {
                      return t.media_id === e.mediaId
                    })
              }),
              u = Object(y.a)(s, function (e) {
                return (function (e) {
                  var t,
                    n = e.media_info
                  if ('ApiImage' === (null == n ? void 0 : n.__typename))
                    return E()(
                      E()(
                        {
                          altText: n.alt_text,
                          display_url: n.original_img_url,
                          expanded_url: n.original_img_url,
                          ext_alt_text: n.alt_text,
                        },
                        (null === (t = n.color_info) || void 0 === t ? void 0 : t.palette) && {
                          ext_media_color: { palette: n.color_info.palette },
                        },
                      ),
                      {},
                      {
                        id: S(e.media_id),
                        id_str: e.media_id || '',
                        media_key: e.media_key,
                        media_url: n.original_img_url,
                        media_url_https: n.original_img_url,
                        original_info: { height: n.original_img_height, width: n.original_img_width },
                        sizes: { original: { h: n.original_img_height, resize: 'fit', w: n.original_img_width } },
                        type: 'photo',
                      },
                    )
                  if ('ApiVideo' === (null == n ? void 0 : n.__typename)) {
                    n.__typename
                    var a = w()(n, C)
                    return I(a, e.media_id, null == n ? void 0 : n.__typename)
                  }
                  if ('ApiGif' === (null == n ? void 0 : n.__typename)) {
                    n.__typename
                    var r = w()(n, x)
                    return I(r, e.media_id, null == n ? void 0 : n.__typename)
                  }
                })(e)
              })
            return u ? r.a.createElement(k.a, { mediaDetails: u, style: P.media, tweetId: '0' }) : null
          }
          return null
        },
        O = n('nXUu'),
        D = function (e) {
          var t = e.contentStateJson,
            n = e.twitterArticleMedia,
            a = void 0 === n ? [] : n,
            i = t
              ? (function (e) {
                  try {
                    var t = JSON.parse(e)
                    if (!t.entityMap || !t.blocks) throw new Error('Malformed RawDraftContentState')
                    return t
                  } catch (n) {}
                })(t)
              : void 0,
            o = { atomic: { component: L, editable: !1, props: { media: a } } }
          return i ? r.a.createElement(O.a, { componentByType: o, contentState: i }) : null
        },
        A = n('t62R'),
        F = function (e) {
          var t = e.size,
            n = e.title
          return r.a.createElement(
            A.b,
            {
              color: n ? 'text' : 'gray700',
              numberOfLines: 1,
              size: t,
              testID: 'twitterArticleTitleComponent',
              weight: 'bold',
            },
            n || 'Untitled',
          )
        },
        B = n('MWbm'),
        V = n('jV+4'),
        z = n('GBcw'),
        H = R.a.create(function (e) {
          return {
            container: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.spaces.space16,
              minHeight: e.spaces.space80,
            },
            paddedView: { paddingVertical: e.spaces.space12 },
          }
        }),
        j = function (e) {
          var t = e.author,
            n = e.twitterArticle,
            a = n.data,
            i = n.media,
            o = n.metadata,
            l = n.title
          return r.a.createElement(
            B.a,
            { style: H.container },
            r.a.createElement(V.a, {
              isVerified: t.verified,
              name: t.name,
              profileImageUrl: t.profile_image_url_https,
              screenName: t.screen_name,
              style: H.paddedView,
              withLink: !0,
            }),
            r.a.createElement(B.a, { style: H.paddedView }, r.a.createElement(F, { size: 'title1', title: l })),
            null != o && o.publishedAtMs
              ? r.a.createElement(
                  B.a,
                  { style: H.paddedView },
                  r.a.createElement(z.a, { humanReadable: !0, timestamp: Number(o.publishedAtMs) }),
                )
              : null,
            null != a && a.contentStateJson
              ? r.a.createElement(
                  B.a,
                  { style: H.paddedView, testID: 'twitterArticleRichTextView' },
                  r.a.createElement(D, { contentStateJson: a.contentStateJson, twitterArticleMedia: i }),
                )
              : null,
          )
        },
        W = n('zpdM'),
        K = n('muX9'),
        G = function (e) {
          var t,
            n,
            a,
            i,
            o,
            l = e.author,
            c = e.twitterArticle,
            s = (function (e) {
              try {
                return Object(W.convertFromRaw)(JSON.parse(e)).getPlainText().substr(0, 200)
              } catch (t) {
                return ''
              }
            })((null === (t = c.data) || void 0 === t ? void 0 : t.contentStateJson) || ''),
            u = null === (n = c.cover_image) || void 0 === n ? void 0 : n.media_info
          return (
            'ApiImage' === (null == u ? void 0 : u.__typename) &&
              ((a = u.original_img_url), (i = u.original_img_width), (o = u.original_img_height)),
            r.a.createElement(
              K.a,
              null,
              r.a.createElement('meta', { content: 'true', name: 'twitter:article' }),
              r.a.createElement('meta', { content: '86400', name: 'twitter:maxage' }),
              r.a.createElement('meta', { content: c.title, name: 'og:title' }),
              r.a.createElement('meta', { content: s, name: 'og:description' }),
              r.a.createElement('meta', { content: l.screen_name, name: 'twitter:site' }),
              a && r.a.createElement('meta', { content: a, name: 'og:image' }),
              i && r.a.createElement('meta', { content: i, name: 'og:image:width' }),
              o && r.a.createElement('meta', { content: o, name: 'og:image:height' }),
            )
          )
        },
        U = n('G1WX'),
        N = 'Twitter Article',
        X = function (e) {
          var t = e.author,
            n = e.authorId,
            a = e.createLocalApiErrorHandler,
            o = e.fetchStatus,
            l = e.fetchTwitterArticle,
            c = e.fetchUserIfNeeded,
            s = e.history,
            u = e.match.params.twitterArticleId,
            d = e.twitterArticle,
            p = r.a.useCallback(
              function () {
                d || l(u), n && !t && c(n).catch(a())
              },
              [t, n, a, l, c, d, u],
            )
          r.a.useEffect(
            function () {
              p()
            },
            [p],
          )
          var h = function () {
            return d && t
              ? r.a.createElement(
                  B.a,
                  { testID: 'twitterArticleView' },
                  r.a.createElement(G, { author: t, twitterArticle: d }),
                  r.a.createElement(j, { author: t, twitterArticle: d }),
                )
              : null
          }
          return r.a.createElement(g.a, {
            history: s,
            primaryContent: function () {
              return r.a.createElement(
                B.a,
                { style: Y.container },
                r.a.createElement(U.a, { fetchStatus: o, onRequestRetry: p, render: h }),
              )
            },
            sidebarContent: r.a.createElement(i.a, null),
            title: N,
          })
        },
        Y = R.a.create(function (e) {
          return {
            container: {
              borderTopColor: e.colors.borderColor,
              borderTopWidth: e.borderWidths.small,
              color: e.colors.text,
              padding: e.spaces.space24,
            },
            author: { paddingBottom: e.spaces.space24 },
            title: { paddingBottom: e.spaces.space24 },
          }
        }),
        q = v(X)
      t.default = q
    },
    '5emT': function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        l = n('Lsrn'),
        c = n('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [l.a.root, e.style],
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
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    '956X': function (e, t, n) {
      'use strict'
      var a = n('ddV6'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        l = n('XOJV'),
        c = n('rxPX'),
        s = n('0KEI'),
        u = function (e, t) {
          var n = t.tweetId
          return n ? l.a.selectHydrated(e, n) : void 0
        },
        d = function (e, t) {
          var n = t.tweetId
          return n ? l.a.selectFetchStatus(e, n) : void 0
        },
        p = Object(c.a)()
          .propsFromState(function () {
            return { tweet: u, tweetFetchStatus: d }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(s.createLocalApiErrorHandlerWithContextFactory)('TWEET_BY_URL'),
              fetchTweetIfNeeded: l.a.fetchOneIfNeeded,
            }
          }),
        h = n('VY6S'),
        f = (n('KqXw'), n('3uku'), n('jat/')),
        m = n('kGix'),
        v = n('W5XZ'),
        g = n('3XMw'),
        y = n.n(g),
        b = n('MWbm'),
        w = n('p+r5'),
        _ = n('Qwev'),
        E = n('rHpw'),
        C = y.a.jd2f69a8,
        x = y.a.d2ae33cd,
        I = y.a.ac308436,
        S = E.a.create(function (e) {
          return {
            activityIndicatorWrapper: {
              alignItems: 'center',
              marginHorizontal: e.componentDimensions.gutterHorizontal,
              marginBottom: e.componentDimensions.gutterVertical,
              padding: e.spaces.space12,
            },
          }
        }),
        T = p(function (e) {
          var t = e.checkTweet,
            n = e.createLocalApiErrorHandler,
            a = e.fetchTweetIfNeeded,
            i = e.onChangeTweetId,
            l = e.tweet,
            c = e.tweetFetchStatus,
            s = e.tweetId,
            u = e.withActivityIndicator,
            d = o.a.useState(),
            p = r()(d, 2),
            g = p[0],
            y = p[1],
            E = o.a.useMemo(
              function () {
                return Object(h.a)(function (e) {
                  e && a(e).catch(n(v.a))
                }, 250)
              },
              [n, a],
            )
          o.a.useEffect(
            function () {
              E(s)
            },
            [E, s],
          ),
            o.a.useEffect(
              function () {
                if (l) {
                  var e = null == t ? void 0 : t(l)
                  e && (y(e), i(void 0))
                } else c === m.a.FAILED && y(I)
              },
              [t, i, l, c],
            )
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(w.a, {
              errorText: g,
              invalid: !!g,
              label: C,
              name: 'TweetByUrlInput',
              onChange: function (e) {
                y(void 0)
                var t = e.target.value,
                  n = (function (e) {
                    if (/^\d+$/.test(e)) return e
                    var t = /status\/(\d+)/g.exec(e) || []
                    return Object(f.a)(t)
                  })(t)
                n ? i(n) : t ? y(x) : i(void 0)
              },
            }),
            u && c === m.a.LOADING
              ? o.a.createElement(b.a, { style: S.activityIndicatorWrapper }, o.a.createElement(_.a, { size: 'large' }))
              : null,
          )
        })
      t.a = T
    },
    Cp2k: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        l = n('Lsrn'),
        c = n('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [l.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M12.341 20.5H23V22H10.842l1.088-1.088zm-9.265 1.248h-.073a.75.75 0 01-.746-.823l.543-5.562a2.745 2.745 0 01.8-1.676l11.155-11.16a2.385 2.385 0 013.182 0l3.535 3.536a2.248 2.248 0 010 3.18L10.313 20.407a2.756 2.756 0 01-1.675.792zM14.667 4.736l4.6 4.6 1.151-1.151a.747.747 0 000-1.06l-3.542-3.538a.81.81 0 00-1.061 0zM3.839 20.165l4.652-.459a1.253 1.253 0 00.762-.36l.555-.555 8.394-8.4-4.6-4.6-8.946 8.957a1.251 1.251 0 00-.36.761z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    CwxE: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        l = n('Lsrn'),
        c = n('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [l.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M23.804 11.5l-6.496-7.25c-.278-.31-.752-.334-1.06-.06-.308.277-.334.752-.058 1.06L22.238 12l-6.047 6.75c-.275.308-.25.782.06 1.06.142.127.32.19.5.19.204 0 .41-.084.558-.25l6.496-7.25c.252-.28.258-.713 0-1zm-23.606 0l6.496-7.25c.278-.31.752-.334 1.06-.06.308.277.334.752.058 1.06L1.764 12l6.047 6.75c.277.308.25.782-.057 1.06-.143.127-.322.19-.5.19-.206 0-.41-.084-.56-.25L.197 12.5c-.252-.28-.257-.713 0-1zm9.872 12c-.045 0-.09-.004-.135-.012-.407-.073-.68-.463-.605-.87l3.863-21.5c.074-.407.466-.674.87-.606.408.073.68.463.606.87l-3.864 21.5c-.065.363-.38.618-.737.618z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    EeFI: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        i = n('VrFO'),
        o = n.n(i),
        l = n('Y9Ll'),
        c = n.n(l),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('2VqO'),
        p = n.n(d),
        h = n('ERkP'),
        f = n.n(h),
        m = n('3XMw'),
        v = n.n(m),
        g = n('MWbm'),
        y = n('Qwev'),
        b = n('21U8'),
        w = n('rHpw'),
        _ = n('1auM'),
        E = n('eYns'),
        C = v.a.gff1f69e,
        x = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n(e) {
            var a
            return o()(this, n), ((a = t.call(this, e)).state = { orientedImage: null }), a
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
                    n instanceof _.a &&
                    Object(E.b)(n).then(function (t) {
                      return new _.a(t).withDimensionsAndOrientation().then(function (t) {
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
                    : f.a.createElement(y.a, { accessibilityLabel: C, style: I.activityIndicator })
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
                    l = this.state.orientedImage,
                    c = r || {},
                    s = c.cropData,
                    u = c.originalMediaFile,
                    d = void 0 === u ? {} : u
                  return l
                    ? f.a.createElement(
                        g.a,
                        { style: I.cropper },
                        f.a.createElement(b.a, {
                          circle: this.props.circle,
                          defaultAspectRatio: (a && a.aspectRatio) || (s && s.aspectRatio) || n,
                          defaultCropData: a || s,
                          image: { src: l.url, width: d.width, height: d.height },
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
        })(f.a.Component),
        I = w.a.create(function (e) {
          return {
            cropper: { backgroundColor: e.colors.navigationBackground, flexGrow: 1 },
            activityIndicator: { flexGrow: 1 },
          }
        })
      t.a = f.a.forwardRef(function (e, t) {
        return f.a.createElement(x, r()({}, e, { cropperRef: t }))
      })
    },
    G31s: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return _
      })
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        l = n('5Yy7'),
        c = n.n(l),
        s = n('2VqO'),
        u = n.n(s),
        d = n('KEM+'),
        p = n.n(d),
        h = n('ERkP'),
        f = n.n(h),
        m = n('pKoL'),
        v = n('MWbm'),
        g = n('rHpw'),
        y = n('ZvMt'),
        b = n('9Xij'),
        w = n('v6aA'),
        _ = (function (e) {
          c()(n, e)
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
                    t = e.media,
                    n = e.style
                  return f.a.createElement(v.a, { style: n }, this._renderImageGroup(t.length))
                },
              },
              {
                key: '_renderImageGroup',
                value: function (e) {
                  switch (e) {
                    case 1:
                      return this._renderGroupOf1()
                    case 2:
                      return this._renderGroupOf2()
                    case 3:
                      return this._renderGroupOf3()
                    case 4:
                      return this._renderGroupOf4()
                    default:
                      return null
                  }
                },
              },
              {
                key: '_renderGroupOf1',
                value: function () {
                  var e = this.props.media,
                    t = e && !!e[0].mediaFile,
                    n = (e && !t && e[0].externalMediaDetails) || {},
                    a = n.height,
                    r = n.width,
                    i = g.a.theme.aspectRatios.landscape
                  if (t) {
                    var o,
                      l,
                      c = g.a.theme.aspectRatios.minTimelineImage,
                      s = g.a.theme.aspectRatios.maxTimelineImage
                    i = y.a.getImageAspectRatio(c, s, {
                      width: null === (o = e[0].mediaFile) || void 0 === o ? void 0 : o.width,
                      height: null === (l = e[0].mediaFile) || void 0 === l ? void 0 : l.height,
                    })
                  }
                  return f.a.createElement(
                    b.a,
                    { ratio: t ? i : r / a },
                    f.a.createElement(v.a, { style: E.mediaPreviewWrapper }, this._renderMediaAtIndex(0)),
                  )
                },
              },
              {
                key: '_renderGroupOf2',
                value: function () {
                  return f.a.createElement(
                    b.a,
                    { ratio: g.a.theme.aspectRatios.landscape },
                    f.a.createElement(
                      v.a,
                      { style: E.mediaPreviewWrapper },
                      this._renderMediaAtIndex(0, E.gutterRight),
                      this._renderMediaAtIndex(1),
                    ),
                  )
                },
              },
              {
                key: '_renderGroupOf3',
                value: function () {
                  return f.a.createElement(
                    b.a,
                    { ratio: g.a.theme.aspectRatios.landscape },
                    f.a.createElement(
                      v.a,
                      { style: E.mediaPreviewWrapper },
                      this._renderMediaAtIndex(0, E.gutterRight),
                      this._renderColumnWithIndices([1, 2]),
                    ),
                  )
                },
              },
              {
                key: '_renderGroupOf4',
                value: function () {
                  return f.a.createElement(
                    b.a,
                    { ratio: g.a.theme.aspectRatios.landscape },
                    f.a.createElement(
                      v.a,
                      { style: E.mediaPreviewWrapper },
                      this._renderColumnWithIndices([0, 2], E.gutterRight),
                      this._renderColumnWithIndices([1, 3]),
                    ),
                  )
                },
              },
              {
                key: '_renderColumnWithIndices',
                value: function (e, t) {
                  return f.a.createElement(
                    v.a,
                    { style: [E.column, t] },
                    this._renderMediaAtIndex(e[0], E.gutterBottom),
                    this._renderMediaAtIndex(e[1]),
                  )
                },
              },
              {
                key: '_renderMediaAtIndex',
                value: function (e, t) {
                  var n,
                    a,
                    r,
                    i,
                    o = this.props,
                    l = o.editable,
                    c = o.isActive,
                    s = o.media,
                    u = o.onClickMedia,
                    d = o.onEditMedia,
                    p = o.onEditSensitiveWarning,
                    h = o.onRemoveMedia,
                    v = o.onSetMediaPreviewRef,
                    g = s[e],
                    y = null === (n = g.mediaMetadata) || void 0 === n ? void 0 : n.altText,
                    b = null === (a = g.mediaMetadata) || void 0 === a ? void 0 : a.defaultAltText,
                    w = !(
                      null === (r = g.mediaMetadata) ||
                      void 0 === r ||
                      null === (i = r.sensitiveMediaWarning) ||
                      void 0 === i ||
                      !i.size
                    ),
                    _ = d && l && c,
                    C = _ && w && !!p
                  return f.a.createElement(m.a, {
                    accessibilityLabel: y || b,
                    accessibilityRole: 'group',
                    enableGif: c,
                    key: g.id,
                    mediaItem: g,
                    onClick: u ? u(g.id) : void 0,
                    onEdit: d ? d(g.id) : void 0,
                    onEditSensitiveWarning: p && C ? p(g.id) : void 0,
                    onRemove: h(g.id),
                    ref: v,
                    style: [E.mediaContainer, t],
                    withAltTextLabel: !!y,
                    withCloseButton: l && c,
                    withEditButton: _,
                    withEditSensitiveWarningButton: C,
                  })
                },
              },
            ]),
            n
          )
        })(f.a.Component)
      p()(_, 'contextType', w.a)
      var E = g.a.create(function (e) {
        return {
          column: { flexDirection: 'column', flexGrow: 1, flexBasis: 0 },
          gutterRight: { marginRight: e.spaces.space12 },
          gutterBottom: { marginBottom: e.spaces.space12 },
          mediaContainer: {
            borderRadius: e.borderRadii.xLarge,
            transitionProperty: 'width',
            transitionDuration: '0.1s',
            transitionTimingFunction: 'ease-out',
            overflow: 'hidden',
            flexGrow: 1,
            flexBasis: 0,
          },
          mediaPreviewWrapper: { flexDirection: 'row', height: '100%', width: '100%' },
        }
      })
    },
    LCtV: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return T
      })
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        l = n('1Pcy'),
        c = n.n(l),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('2VqO'),
        p = n.n(d),
        h = n('KEM+'),
        f = n.n(h),
        m = (n('yH/f'), n('2G9S'), n('uFXj'), n('ERkP')),
        v = n.n(m),
        g = n('3XMw'),
        y = n.n(g),
        b = n('mN6z'),
        w = n('Qwev'),
        _ = n('rHpw'),
        E = n('1auM'),
        C = n('ude7'),
        x = n('U+bB'),
        I = n('MWbm'),
        S = y.a.gff1f69e,
        T = Object.freeze({ INFINITE: 'infinite', MEDIUM: 'medium', NONE: 'none' }),
        M = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              f()(c()(e), 'state', { imagePreviewUrl: null }),
              f()(c()(e), '_getImageSrc', function () {
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
                    (a instanceof E.a &&
                      a.isGif &&
                      Object(C.a)(a).then(function (t) {
                        e.setState({ imagePreviewUrl: t })
                      }))
                },
              },
              {
                key: 'shouldComponentUpdate',
                value: function (e, t) {
                  return !Object(b.a)(e, this.props) || !Object(b.a)(t, this.state)
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
                    l = a.mediaFile && a.mediaFile.isGif && !n && !o,
                    c = a.needsProcessing || l,
                    s = [R.root, k[t], c && R.loadingBorder],
                    u = this._getImageSrc()
                  return v.a.createElement(
                    I.a,
                    { onClick: r, style: s },
                    c || !u
                      ? v.a.createElement(w.a, { accessibilityLabel: S, style: R.activityIndicator })
                      : v.a.createElement(x.a, { resizeMode: i, source: u, style: R.image }),
                  )
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      f()(M, 'defaultProps', { borderRadius: T.NONE, enableGif: !0, resizeMode: 'cover' })
      var k = _.a.create(function (e) {
          var t
          return (
            (t = {}),
            f()(t, T.INFINITE, { borderRadius: e.borderRadii.infinite }),
            f()(t, T.MEDIUM, { borderRadius: e.borderRadii.small }),
            f()(t, T.NONE, { borderRadius: e.borderRadii.none }),
            t
          )
        }),
        R = _.a.create(function (e) {
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
      t.b = M
    },
    LQrL: function (e, t, n) {
      'use strict'
      n.d(t, 'd', function () {
        return f
      }),
        n.d(t, 'c', function () {
          return m
        }),
        n.d(t, 'b', function () {
          return v
        }),
        n.d(t, 'e', function () {
          return g
        }),
        n.d(t, 'a', function () {
          return y
        })
      n('hBvt'), n('KqXw'), n('z84I')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('t62R'),
        o = n('dWxr'),
        l = n.n(o),
        c = n('hHEM'),
        s = n('rHpw'),
        u = n('aITJ'),
        d = n('IZ3v'),
        p = function (e, t) {
          for (var n = l()(e.getText()), a = 0; a < n.length; a++)
            n[a].indices && 2 === n[a].indices.length && t(n[a].indices[0], n[a].indices[1])
        },
        h = { clipPath: 'circle(0% at center)' },
        f = {
          strategy: function (e, t, n) {
            e.findEntityRanges(function (e) {
              var t = e.getEntity(),
                a = t ? n.getEntity(t) : null
              return !!a && 'LINK' === a.getType()
            }, t)
          },
          component: function (e) {
            return e.entityKey
              ? r.a.createElement(i.b, { link: e.contentState.getEntity(e.entityKey).getData().url }, e.children)
              : null
          },
        },
        m = {
          strategy: p,
          component: function (e) {
            var t = l()(e.decoratedText)[0]
            if (!t) return null
            var n = Object(d.b)(t)
            return n ? r.a.createElement(i.b, { link: Object(d.c)(n, e.decoratedText) }, e.children) : null
          },
        },
        v = {
          strategy: p,
          component: function (e) {
            return r.a.createElement('span', { style: { color: s.a.theme.colors.link } }, e.children)
          },
        },
        g = {
          strategy: function (e, t, n) {
            e.findEntityRanges(function (e) {
              var t = e.getEntity(),
                a = t && n.getEntity(t)
              return !(!a || a.type !== c.a.TWEMOJI_ENTITY_TYPE)
            }, t)
          },
          component: function (e) {
            var t = e.children,
              n = e.contentState,
              a = e.entityKey,
              i = (a && n.getEntity(a)) || {}
            return !(u.b.isFirefox() && u.b.firefoxVersion() < 49)
              ? r.a.Children.map(t, function (e) {
                  var t,
                    n = r.a.Children.map(e, function (e) {
                      return r.a.createElement('span', { style: h }, e)
                    })[0]
                  return r.a.cloneElement(
                    r.a.createElement('span', null),
                    {
                      style:
                        ((t = (i.data && i.data.url) || ''),
                        {
                          backgroundImage: 'url("'.concat(t, '")'),
                          backgroundSize: '1em 1em',
                          padding: '0.15em',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat',
                          WebkitTextFillColor: 'transparent',
                        }),
                    },
                    n,
                  )
                })
              : t
          },
        },
        y = {
          strategy: function (e, t) {
            var n = (function (e, t, n) {
              for (var a, r, i = t.getText(); (a = e.exec(i)); ) n((r = a.index), r + a[0].length)
            })(/\r/g, e, t)
            if (n) return t(n, n + 1)
          },
          component: function () {
            return '\n'
          },
        }
    },
    M2mT: function (e, t, n) {
      'use strict'
      var a = n('m3Bd'),
        r = n.n(a),
        i = n('VrFO'),
        o = n.n(i),
        l = n('Y9Ll'),
        c = n.n(l),
        s = n('1Pcy'),
        u = n.n(s),
        d = n('5Yy7'),
        p = n.n(d),
        h = n('2VqO'),
        f = n.n(h),
        m = n('KEM+'),
        v = n.n(m),
        g = (n('2G9S'), n('i4UL'), n('+/5o')),
        y = n('ERkP'),
        b = n.n(y),
        w = n('HPNB'),
        _ = n('VAZu'),
        E = n('wiP2'),
        C = n('Es6L'),
        x = n('yiKp'),
        I = n.n(x),
        S = n('rHpw'),
        T = S.a.create(function (e) {
          return {
            fill: { flex: 1, alignSelf: 'stretch' },
            viewportView: I()(I()({}, S.a.absoluteFillObject), {}, { overflowY: 'auto' }),
            appBarContainer: {
              position: 'sticky',
              top: 0,
              backfaceVisibility: 'hidden',
              zIndex: e.componentZIndices.appBarZIndex,
            },
          }
        }),
        M = n('MWbm'),
        k = n('yw4N'),
        R = n('TnY3'),
        P = n('cHvH'),
        L = n('3xLC'),
        O = [
          'children',
          'leftControl',
          'screenType',
          'showSubtitleOnRoot',
          'showSubtitleOnWideDetail',
          'withBottomBorder',
          'withDetailOpen',
        ],
        D = (function (e) {
          p()(n, e)
          var t = f()(n)
          function n() {
            var e
            o()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              v()(u()(e), '_renderChildren', function () {
                var t = e.props.children
                return e.context.rootDetailPerColumnScroll
                  ? b.a.createElement(
                      M.a,
                      { style: T.fill },
                      b.a.createElement(
                        k.a,
                        { style: T.viewportView },
                        e._renderInlineNav({ isTwoColumnLayout: !0 }),
                        t,
                      ),
                    )
                  : t
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this
                  return b.a.createElement(P.a, null, function (t) {
                    var n = t.windowWidth
                    return w.a.isTwoColumnLayout(n) ? e._renderForTwoColumnLayout() : e._renderForOneColumnLayout()
                  })
                },
              },
              {
                key: '_renderForOneColumnLayout',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    n =
                      (e.leftControl,
                      e.screenType,
                      e.showSubtitleOnRoot,
                      e.showSubtitleOnWideDetail,
                      e.withBottomBorder,
                      e.withDetailOpen,
                      r()(e, O))
                  return b.a.createElement(
                    b.a.Fragment,
                    null,
                    Object(C.a)()
                      ? this._renderInlineNav({ isTwoColumnLayout: !1 })
                      : b.a.createElement(E.a.Configure, n),
                    t,
                  )
                },
              },
              {
                key: '_renderForTwoColumnLayout',
                value: function () {
                  var e = this.context.rootDetailPerColumnScroll
                  return b.a.createElement(
                    b.a.Fragment,
                    null,
                    !e && this._renderInlineNav({ isTwoColumnLayout: !0 }),
                    this._renderChildren(),
                  )
                },
              },
              {
                key: '_renderInlineNav',
                value: function (e) {
                  var t = e.isTwoColumnLayout,
                    n = this.props,
                    a = n.SideNavButton,
                    r = n.TabBar,
                    i = n.TeamsSwitcher,
                    o = n.backLocation,
                    l = n.documentTitle,
                    c = n.headerless,
                    s = n.history,
                    u = n.leftControl,
                    d = n.middleControl,
                    p = n.onBackClick,
                    h = n.rightControl,
                    f = n.screenType,
                    m = n.searchBoxOptions,
                    v = n.secondaryBar,
                    y = n.showSubtitleOnRoot,
                    w = n.showSubtitleOnWideDetail,
                    C = n.subtitle,
                    x = n.title,
                    I = n.titleIconCell,
                    S = n.titleIconCellSize,
                    k = n.withDetailOpen,
                    R = n.withSearchBox,
                    P = n.withTweetButton,
                    L = 'root' === f,
                    O = 'secondaryRoot' === f,
                    D = 'primaryDetail' === f,
                    A = (D && w) || (L && y),
                    F = L || (D && t),
                    B = L ? g.c : D ? g.a : void 0,
                    V = b.a.createElement(
                      M.a,
                      { style: T.appBarContainer },
                      b.a.createElement(_.a, {
                        backLocation: o,
                        fixed: !1,
                        hideBackButton: F,
                        history: s,
                        leftControl: u,
                        middleControl: d,
                        onBackClick: p,
                        rightControl: h,
                        secondaryBar: v,
                        subtitle: A ? C : void 0,
                        title: x,
                        titleDomId: B,
                        titleIconCell: I,
                        titleIconCellSize: S,
                      }),
                    ),
                    z =
                      L || (O && k)
                        ? null
                        : b.a.createElement(E.a.Configure, {
                            SideNavButton: a,
                            TabBar: r,
                            TeamsSwitcher: i,
                            backLocation: o,
                            documentTitle: l,
                            headerless: c,
                            middleControl: d,
                            onBackClick: p,
                            rightControl: h,
                            searchBoxOptions: m,
                            subtitle: C,
                            title: x,
                            withSearchBox: R,
                            withTweetButton: P,
                          })
                  return b.a.createElement(b.a.Fragment, null, z, V)
                },
              },
            ]),
            n
          )
        })(b.a.Component)
      v()(D, 'contextType', L.a),
        v()(D, 'defaultProps', { screenType: 'secondaryDetail', showSubtitleOnWideDetail: !0 })
      t.a = Object(R.a)(D)
    },
    'Mbn/': function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        l = n('Lsrn'),
        c = n('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [l.a.root, e.style],
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
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    P68U: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'MediaPickerWithPreview', function () {
          return E
        })
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        l = n('1Pcy'),
        c = n.n(l),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('2VqO'),
        p = n.n(d),
        h = n('KEM+'),
        f = n.n(h),
        m = (n('2G9S'), n('hCOa'), n('87if'), n('hBpG'), n('7x/C'), n('jQ3i'), n('x4t0'), n('z84I'), n('ERkP')),
        v = n.n(m),
        g = n('AspN'),
        y = n('rxPX'),
        b = Object(y.a)().propsFromActions(function () {
          return { addMedia: g.b, processMultipleMedia: g.g }
        }),
        w = n('2Daw'),
        _ = n('VPdC'),
        E = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              f()(c()(e), '_handleAddMediaFiles', function (t) {
                var n = e.props,
                  a = n.addMedia,
                  r = n.location,
                  i = n.onChange,
                  o = n.onFailure,
                  l = n.processMultipleMedia,
                  c = e._getAcceptedFileInputs(),
                  s = Array.from(t).find(function (e) {
                    return c.includes(e.type)
                  })
                s &&
                  a([s], { location: r }).then(function (e) {
                    i &&
                      i(
                        e.map(function (e) {
                          return e.id
                        }),
                      ),
                      l(e, { onFailure: o })
                  })
              }),
              f()(c()(e), '_getAcceptedFileInputs', function () {
                var t = e.props,
                  n = t.acceptGifs,
                  a = t.acceptVideo
                return Object(_.b)({ acceptGifs: n, acceptVideo: a })
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
                    l = e.maskStyle,
                    c = e.mediaItem,
                    s = e.onCrop,
                    u = e.onRemove,
                    d = e.rootStyle
                  return v.a.createElement(w.a, {
                    acceptGifs: t,
                    acceptVideo: n,
                    accessibilityLabel: a,
                    aspectRatio: r,
                    borderRadius: i,
                    currentContent: o,
                    maskStyle: l,
                    mediaItem: c,
                    onAddMediaFiles: this._handleAddMediaFiles,
                    onCrop: s,
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
      f()(E, 'defaultProps', { acceptGifs: !1, acceptVideo: !1 })
      var C = b(E)
      t.default = C
    },
    QdNu: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'saveLabel', function () {
          return Oe
        }),
        n.d(t, 'publishLabel', function () {
          return De
        }),
        n.d(t, 'unpublishLabel', function () {
          return Ae
        }),
        n.d(t, 'viewLabel', function () {
          return Fe
        }),
        n.d(t, 'successfulSaveMessage', function () {
          return Be
        }),
        n.d(t, 'successfulPublishMessage', function () {
          return Ve
        }),
        n.d(t, 'successfulUnpublishMessage', function () {
          return ze
        }),
        n.d(t, 'mediaIsInvalidMessage', function () {
          return He
        }),
        n.d(t, 'TwitterArticleComposer', function () {
          return We
        })
      var a = n('RhWx'),
        r = n.n(a),
        i = n('yiKp'),
        o = n.n(i),
        l = n('ddV6'),
        c = n.n(l),
        s =
          (n('KqXw'),
          n('WNMA'),
          n('LW0h'),
          n('7x/C'),
          n('lTEL'),
          n('JtPf'),
          n('87if'),
          n('kYxP'),
          n('z84I'),
          n('KOtZ'),
          n('+KXO'),
          n('2G9S'),
          n('hBpG'),
          n('0zG9'),
          n('MvUL'),
          n('ho0z'),
          n('ERkP')),
        u = n.n(s),
        d = n('1YZw'),
        p = n('P1r1'),
        h = n('6au1'),
        f = n('G6rE'),
        m = n('AspN'),
        v = n('rxPX'),
        g = n('0KEI'),
        y = n('kGix'),
        b = function (e, t) {
          return t.match.params.twitterArticleId
        },
        w = function (e, t) {
          var n = b(0, t)
          return h.a.select(e, n)
        },
        _ = function (e, t) {
          var n,
            a = w(e, t),
            r = null == a || null === (n = a.metadata) || void 0 === n ? void 0 : n.authorResults.result
          return 'User' === (null == r ? void 0 : r.__typename) ? (null == r ? void 0 : r.rest_id) : void 0
        },
        E = function (e, t) {
          var n = _(e, t)
          return n ? f.e.select(e, n) : void 0
        },
        C = function (e, t) {
          var n = (function (e, t) {
              var n = b(0, t)
              return h.a.selectFetchStatus(e, n) || y.a.NONE
            })(e, t),
            a = (function (e, t) {
              var n = _(e, t)
              return n ? f.e.selectFetchStatus(e, n) : void 0
            })(e, t)
          return Object(y.d)(n, a)
        },
        x = function (e, t) {
          var n = b(0, t)
          return h.a.selectTwitterArticleTitle(e, n)
        },
        I = function (e, t) {
          var n,
            a = h.a.selectCoverMediaId(e)
          if (a) return null === (n = Object(m.k)(e, a)) || void 0 === n ? void 0 : n[0]
        },
        S = Object(v.a)()
          .propsFromState(function () {
            return {
              allMedia: m.j,
              author: E,
              authorId: _,
              coverImage: I,
              dataSaverMode: p.j,
              fetchStatus: C,
              title: x,
              twitterArticle: w,
            }
          })
          .propsFromActions(function () {
            return {
              addCoverImage: h.a.addCoverImage,
              addMedia: m.b,
              addToast: d.b,
              createLocalApiErrorHandler: Object(g.createLocalApiErrorHandlerWithContextFactory)(
                'TWITTER_ARTICLE_COMPOSER',
              ),
              deleteTwitterArticle: h.a.delete,
              fetchTwitterArticle: h.a.fetchOneIfNeeded,
              fetchUserIfNeeded: f.e.fetchOneIfNeeded,
              preUploadMedia: m.e,
              processMultipleMedia: m.g,
              removeCoverImage: h.a.removeCoverImage,
              removeMediaUpload: m.i,
              saveTwitterArticle: h.a.updateData,
              setMediaMetadata: m.n,
              updateTwitterArticleCoverImage: h.a.updateCoverImage,
              updateTwitterArticleMedia: h.a.updateMedia,
              updateTwitterArticleVisibility: h.a.updateVisibility,
              updateTwitterArticleTitle: h.a.updateTitle,
              uploadMedia: m.p,
            }
          }),
        T = n('c0ZR'),
        M = n('QbaN'),
        k = n('HsFH'),
        R = n('fS8x'),
        P = n('wpu3'),
        L = n('P68U'),
        O = n('eyty'),
        D = n('M2mT'),
        A = (n('5BYb'), n('G31s')),
        F = n('fs1G'),
        B = n('gEvp'),
        V = n('Qwev'),
        z = n('rHpw'),
        H = n('fn8Q'),
        j = z.a.create(function (e) {
          return { mediaPreview: { width: '100%' } }
        }),
        W = function (e) {
          var t = e.block,
            n = e.blockProps,
            a = e.contentState,
            r = n.allMedia,
            i = n.mediaIdToLocalMediaIdMap,
            o = t.getEntityAt(0),
            l = o ? a.getEntity(o) : null
          if (l) {
            var c = l.getData()
            if (l.type === H.b.TWEET) {
              var s = c.tweetId
              return u.a.createElement(B.a, { tweetId: s })
            }
            if (l.type === H.b.MEDIA) {
              var d,
                p = c.mediaItems
              if (c.uploaded) {
                if (
                  (d = p
                    .map(function (e) {
                      return i[e.mediaId]
                    })
                    .map(function (e) {
                      return r.find(function (t) {
                        return t.id === e
                      })
                    })).some(function (e) {
                    return !e
                  })
                ) {
                  if (!c.media) return u.a.createElement(V.a, null)
                  d = c.media
                }
              } else d = c.media
              return u.a.createElement(A.a, {
                editable: !0,
                media: d,
                onRemoveMedia: function () {
                  return F.a
                },
                style: j.mediaPreview,
              })
            }
          }
          return null
        },
        K =
          (n('yH/f'),
          Object(v.a)().propsFromState(function () {
            return { loggedInUser: f.e.selectLoggedInUser }
          })),
        G = n('KEM+'),
        U = n.n(G),
        N = n('QIgh'),
        X = n('8UdT'),
        Y = n('xWpm'),
        q = n('VrCx'),
        J = n('oQhu'),
        Z = n('fTQJ'),
        Q = n('av/O'),
        $ = n('E0cF'),
        ee = n('7fPw'),
        te = Object(J.a)(function (e) {
          return Object(ee.a)(e)
        }),
        ne = K(function (e) {
          var t = e.loggedInUser,
            n = e.onAddTweets,
            a = u.a.useCallback(
              function (e) {
                return n([e])
              },
              [n],
            ),
            r = u.a.useMemo(
              function () {
                return (function (e) {
                  var t = e.handleTweetClick
                  return o()(
                    o()({}, N.default),
                    {},
                    U()(
                      {},
                      X.b.Tweet,
                      o()(
                        o()({}, N.default[X.b.Tweet]),
                        {},
                        { handlers: U()({}, q.a.Tweet, Object(Y.d)({ onClick: t, withSelectIcon: !1 })) },
                      ),
                    ),
                  )
                })({ handleTweetClick: a })
              },
              [a],
            ),
            i = t ? te(t.id_str) : null
          return i
            ? u.a.createElement(
                u.a.Fragment,
                null,
                u.a.createElement(Q.a, {
                  checkTweet: function (e) {
                    var t
                    return null !== (t = e.user) && void 0 !== t && t.protected
                      ? 'Tweets from protected accounts can’t be used in Twitter Articles'
                      : $.a.isQuotedTweetUnavailable(e)
                      ? 'Quote Tweets of a deleted Tweet can’t be used in Twitter Articles'
                      : void 0
                  },
                  onTweetPress: function (e) {
                    n([e])
                  },
                }),
                u.a.createElement(Z.a, { entryConfiguration: r, module: i, title: 'Liked' }),
              )
            : null
        }),
        ae = n('VPdC'),
        re = n('tn7R'),
        ie = n('MWbm'),
        oe = n('Uchl'),
        le = n('k/OQ'),
        ce = Object.freeze({ MEDIA: 'Media', GIFS: 'Gifs', TWEETS: 'Tweets' }),
        se = z.a.create(function (e) {
          return {
            sheet: { minHeight: '50vh', maxHeight: '80vh' },
            container: { paddingBottom: e.spaces.space16, paddingHorizontal: e.spaces.space16 },
            mediaPicker: { marginTop: e.spaces.space12 },
          }
        }),
        ue = function (e) {
          var t = e.onAddMedia,
            n = e.onAddTweets,
            a = e.onClose,
            r = e.twitterArticleId,
            i = u.a.useState(ce.MEDIA),
            o = c()(i, 2),
            l = o[0],
            s = o[1],
            d = function (e) {
              return function () {
                return l === e
              }
            },
            p = Object(re.a)(ce).map(function (e) {
              return {
                key: e,
                label: e,
                isActive: d(e),
                to: { pathname: '/i/twitter-article-composer/edit/'.concat(r) },
                onClick: function () {
                  return s(e)
                },
              }
            })
          return u.a.createElement(
            oe.a,
            {
              onClose: a,
              primaryButtonConfig: { label: 'Done', forceDisabled: !1, onClick: a },
              style: se.sheet,
              title: 'Attach',
            },
            u.a.createElement(
              ie.a,
              { style: se.container },
              u.a.createElement(le.a, { links: p }),
              (function () {
                switch (l) {
                  case ce.MEDIA:
                    return u.a.createElement(ae.a, {
                      multiple: !0,
                      onChange: t,
                      size: 'large',
                      style: se.mediaPicker,
                      type: 'brandText',
                    })
                  case ce.TWEETS:
                    return u.a.createElement(ne, { onAddTweets: n })
                  default:
                    return null
                }
              })(),
            ),
          )
        },
        de = n('Lsrn'),
        pe = n('k/Ka'),
        he = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(pe.a)(
            'svg',
            o()(
              o()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [de.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            u.a.createElement(
              'g',
              null,
              u.a.createElement('path', {
                d: 'M4.026 20.88c1.23.978 2.77 1.414 4.335 1.236 1.564-.18 2.964-.958 3.94-2.19l8.95-11.282c1.43-1.804 1.127-4.437-.677-5.868-.766-.607-1.682-.902-2.592-.902-1.23 0-2.452.54-3.276 1.58l-7.67 9.67c-.41.516-.593 1.16-.518 1.812.075.654.4 1.24.916 1.648 1.065.845 2.618.664 3.46-.4l4.932-6.215c.257-.325.203-.797-.122-1.055-.138-.11-.302-.162-.465-.162-.222 0-.44.098-.59.284l-4.93 6.216c-.33.416-.938.486-1.354.155-.2-.16-.328-.39-.357-.644-.03-.256.042-.508.202-.71l7.67-9.67c.917-1.157 2.605-1.35 3.763-.434 1.156.917 1.35 2.604.434 3.76l-8.95 11.282c-.728.92-1.77 1.5-2.936 1.633-1.162.133-2.312-.192-3.23-.922-.92-.73-1.5-1.77-1.634-2.937-.134-1.165.193-2.312.922-3.23l5.996-7.56c.257-.324.203-.796-.122-1.054-.137-.107-.3-.16-.465-.16-.222 0-.44.098-.59.284l-5.995 7.56c-2.017 2.544-1.59 6.256.956 8.274z',
              }),
            ),
          )
        }
      he.metadata = { width: 24, height: 24 }
      var fe = he,
        me = n('RH6X'),
        ve = n('zpdM'),
        ge = function (e, t) {
          var n = e.getCurrentContent().createEntity(H.b.TWEET, H.a.IMMUTABLE, { tweetId: t }),
            a = n.getLastCreatedEntityKey(),
            r = ve.EditorState.set(e, { currentContent: n })
          return ve.AtomicBlockUtils.insertAtomicBlock(r, a, ' ')
        },
        ye = function (e) {
          var t, n, a
          return null !== (t = e.mediaFile) && void 0 !== t && t.isImage
            ? H.c.IMAGE
            : null !== (n = e.mediaFile) && void 0 !== n && n.isGif
            ? H.c.GIF
            : null !== (a = e.mediaFile) && void 0 !== a && a.isVideo
            ? H.c.VIDEO
            : void 0
        },
        be = n('UwBx'),
        we = n('keCP'),
        _e = u.a.createElement(fe, null),
        Ee = function (e) {
          var t = e.allMedia,
            n = e.editorState,
            a = e.inputStyle,
            r = e.mediaIdToLocalMediaIdMap,
            i = e.middleControl,
            o = e.onAddMediaFiles,
            l = e.onChange,
            s = e.twitterArticleId,
            d = u.a.useState(!1),
            p = c()(d, 2),
            h = p[0],
            f = p[1],
            m = function () {
              f(!h)
            },
            v = function (e) {
              if ('atomic' === e.getType())
                return { component: W, editable: !1, props: { allMedia: t, mediaIdToLocalMediaIdMap: r } }
            },
            g = Object(J.a)(function (e) {
              return function (t) {
                e(t), l(t)
              }
            }),
            y = function (e) {
              return u.a.createElement(be.a, {
                additionalToolbarButtonConfigs: b,
                inputStyle: a,
                middleControl: i,
                onChange: g(e),
                placeholder: 'Start writing',
                richTextInputContext: { blockRendererFn: v, editorState: n, element: we.a },
              })
            },
            b = [{ icon: _e, key: 'attachments sheet', onPress: m, type: 'brandText' }]
          return u.a.createElement(
            u.a.Fragment,
            null,
            u.a.createElement(
              me.a,
              {
                contextText: n.getCurrentContent().getPlainText(),
                isInline: !0,
                onTextUpdated: l,
                onTypeaheadStateChange: F.a,
              },
              y,
            ),
            h
              ? u.a.createElement(ue, {
                  onAddMedia: function (e) {
                    o(e, function (e) {
                      var t = (function (e, t) {
                        var n = e.getCurrentContent(),
                          a = t.map(function (e) {
                            return { mediaCategory: ye(e), localMediaId: e.id }
                          }),
                          r = n.createEntity(H.b.MEDIA, H.a.IMMUTABLE, { mediaItems: a, media: t, uploaded: !1 }),
                          i = r.getLastCreatedEntityKey(),
                          o = r.mergeEntityData(i, { entityKey: i }),
                          l = ve.EditorState.set(e, { currentContent: o })
                        return ve.AtomicBlockUtils.insertAtomicBlock(l, i, ' ')
                      })(n, e)
                      l(t)
                    }),
                      m()
                  },
                  onAddTweets: function (e) {
                    var t = (function (e, t) {
                      return t.reduce(function (e, t) {
                        return ge(e, t)
                      }, e)
                    })(n, e)
                    l(t), m()
                  },
                  onClose: m,
                  twitterArticleId: s,
                })
              : null,
          )
        },
        Ce = n('hHEM'),
        xe = n('9Xij'),
        Ie = n('/yvb'),
        Se = n('6OUF'),
        Te = n('jV+4'),
        Me = n('eb3s'),
        ke = n('G1WX'),
        Re = n('ONCy'),
        Pe = n('VY6S'),
        Le = n('U+bB'),
        Oe = 'Save',
        De = 'Publish',
        Ae = 'Unpublish',
        Fe = 'View',
        Be = 'Twitter Article Saved',
        Ve = 'Twitter Article Published',
        ze = 'Twitter Article Unpublished',
        He = 'Please choose either 1 GIF or up to 4 photos.',
        je = u.a.createElement(k.a, null),
        We = function (e) {
          var t,
            n,
            a,
            i = e.addCoverImage,
            l = e.addMedia,
            s = e.addToast,
            d = e.allMedia,
            p = e.author,
            h = e.authorId,
            f = e.coverImage,
            m = e.createLocalApiErrorHandler,
            v = e.dataSaverMode,
            g = e.deleteTwitterArticle,
            y = e.fetchStatus,
            b = e.fetchTwitterArticle,
            w = e.fetchUserIfNeeded,
            _ = e.history,
            E = e.match.params.twitterArticleId,
            C = e.preUploadMedia,
            x = e.processMultipleMedia,
            I = e.removeCoverImage,
            S = e.removeMediaUpload,
            k = e.saveTwitterArticle,
            A = e.setMediaMetadata,
            F = e.title,
            B = e.twitterArticle,
            V = e.updateTwitterArticleCoverImage,
            j = e.updateTwitterArticleMedia,
            W = e.updateTwitterArticleTitle,
            K = e.updateTwitterArticleVisibility,
            G = e.uploadMedia,
            U = (null == B || null === (t = B.metadata) || void 0 === t ? void 0 : t.visibility) === H.d.PUBLISHED,
            N = function (e) {
              var t
              try {
                t = e ? JSON.parse(e) : void 0
              } catch (a) {
                t = void 0
              }
              var n = Ce.a.initEditorState(t)
              return Ce.a.convertEmojiToEntities(n)
            },
            X = u.a.useState(N()),
            Y = c()(X, 2),
            q = Y[0],
            J = Y[1],
            Z = u.a.useState(!1),
            Q = c()(Z, 2),
            $ = Q[0],
            ee = Q[1],
            te = u.a.useState(!1),
            ne = c()(te, 2),
            ae = ne[0],
            re = ne[1],
            oe = u.a.useState({}),
            le = c()(oe, 2),
            ce = le[0],
            se = le[1]
          u.a.useEffect(
            function () {
              b(E).catch(m()), h && w(h).catch(m())
            },
            [h, m, w, b, E],
          ),
            u.a.useEffect(
              function () {
                if (B) {
                  var e,
                    t,
                    n = N(null == B || null === (e = B.data) || void 0 === e ? void 0 : e.contentStateJson),
                    a =
                      null == B || null === (t = B.media) || void 0 === t
                        ? void 0
                        : t.filter(function (e) {
                            return (null == e ? void 0 : e.media_id) && !ce[e.media_id]
                          })
                  if (a && a.length > 0) {
                    var r = Object(M.d)(a).externalMedia
                    Promise.all(
                      r.map(function (e) {
                        var t = e.url
                        return Object(T.a)(t)
                      }),
                    )
                      .then(function (e) {
                        return l(e, { location: O.d.TwitterArticle })
                      })
                      .then(function (e) {
                        return e.map(function (e, t) {
                          var n = r[t],
                            a = n.altText,
                            i = n.sensitiveMediaWarning
                          return (
                            (a || i) &&
                              A(
                                e.id,
                                o()(
                                  o()({}, Object(Re.a)(a ? { altText: a } : null)),
                                  Object(Re.a)(i ? { sensitiveMediaWarning: i } : null),
                                ),
                              ),
                            e.id
                          )
                        })
                      })
                      .then(function (e) {
                        var t = e.reduce(function (e, t, n) {
                          return (e[a[n].media_id || ''] = t), e
                        }, {})
                        se(o()(o()({}, ce), t)), J(ve.EditorState.forceSelection(n, n.getSelection()))
                      })
                  } else J(n)
                }
              },
              [null == B ? void 0 : B.rest_id],
            )
          var ue = function (e) {
              var t = Ce.a.convertEmojiToEntities(e)
              J(t)
            },
            de = function (e, t) {
              l(e, { location: O.d.TwitterArticle }).then(function (e) {
                if (Object(P.c)(e))
                  x(e, { onFailure: S }).then(function (e) {
                    v ||
                      C(
                        e.map(function (e) {
                          return e.id
                        }),
                      )
                  }),
                    t(e)
                else {
                  var n = e.map(function (e) {
                    return e.id
                  })
                  s({ text: He }), S(n)
                }
              })
            },
            pe = function (e) {
              return Object.keys(e).filter(function (t) {
                return e[t].type === H.b.MEDIA
              })
            },
            he = function (e) {
              var t = e.entityMap,
                n = pe(t).reduce(function (e, n) {
                  var a,
                    i =
                      (null === (a = t[n].data) || void 0 === a
                        ? void 0
                        : a.mediaItems.map(function (e) {
                            return { media_category: e.mediaCategory, media_id: e.mediaId }
                          })) || []
                  return [].concat(r()(e), r()(i))
                }, [])
              j(E, { mediaKeys: n })
                .then(function () {
                  k(E, { contentStateJson: JSON.stringify(e) })
                    .then(s({ text: Be }))
                    .catch(m({}))
                })
                .catch(m({}))
            },
            fe = u.a.useMemo(
              function () {
                return Object(Pe.a)(function (e) {
                  W(E, { title: e || '' }).catch(m({}))
                }, 250)
              },
              [m, E, W],
            ),
            me = function () {
              ee(function (e) {
                return !e
              })
            },
            ge = function (e) {
              S(e), I(e)
            },
            ye = null == B ? void 0 : B.cover_image,
            be =
              'ApiImage' === (null == ye || null === (n = ye.media_info) || void 0 === n ? void 0 : n.__typename)
                ? null == ye || null === (a = ye.media_info) || void 0 === a
                  ? void 0
                  : a.original_img_url
                : void 0,
            we = u.a.createElement(
              xe.a,
              { ratio: z.a.theme.aspectRatios.twitterArticleBanner },
              be ? u.a.createElement(Le.a, { source: { uri: be }, style: Ke.coverImage }) : null,
            ),
            _e = u.a.createElement(
              ie.a,
              { style: Ke.controlsContainer },
              u.a.createElement(
                Ie.a,
                {
                  onClick: function () {
                    var e = q.getCurrentContent(),
                      t = Object(ve.convertToRaw)(e),
                      n = t.entityMap,
                      a = pe(n).filter(function (e) {
                        var t
                        return !(null !== (t = n[e].data) && void 0 !== t && t.uploaded)
                      }),
                      i = a.reduce(function (e, t) {
                        var a,
                          i =
                            (null === (a = n[t].data) || void 0 === a
                              ? void 0
                              : a.mediaItems.map(function (e) {
                                  return e.localMediaId
                                })) || []
                        return [].concat(r()(e), r()(i))
                      }, [])
                    i.length > 0
                      ? G(i).then(function (t) {
                          var r = a.reduce(function (e, a) {
                            var r = n[a].data || {},
                              i = {
                                mediaItems: r.mediaItems.map(function (e) {
                                  var n
                                  return {
                                    mediaCategory: e.mediaCategory,
                                    mediaId:
                                      null ===
                                        (n = t.find(function (t) {
                                          return t.id === e.localMediaId
                                        })) || void 0 === n
                                        ? void 0
                                        : n.uploadId,
                                  }
                                }),
                                uploaded: !0,
                              }
                            return e.mergeEntityData(r.entityKey, i)
                          }, e)
                          he(Object(ve.convertToRaw)(r))
                        })
                      : he(t)
                  },
                  style: Ke.buttonMargin,
                },
                Oe,
              ),
              u.a.createElement(
                Ie.a,
                {
                  onClick: function () {
                    K(E, { visibility: U ? H.d.DRAFT : H.d.PUBLISHED })
                      .then(
                        s({
                          text: U ? ze : Ve,
                          action: U ? void 0 : { label: Fe, link: '/i/twitter-articles/'.concat(E) },
                        }),
                      )
                      .catch(m({}))
                  },
                  style: Ke.buttonMargin,
                  type: 'brandFilled',
                },
                U ? Ae : De,
              ),
              u.a.createElement(Ie.a, { icon: je, onClick: me, type: 'destructiveText' }),
            ),
            We = u.a.createElement(Se.a, {
              defaultValue: F,
              inputStyle: Ke.titleInput,
              key: 'title-input-'.concat(E),
              name: 'Twitter Article Title',
              onChange: function (e) {
                fe(e.target.value)
              },
              placeholder: 'Type your article title here...',
              placeholderTextColor: z.a.theme.colors.gray400,
              styleType: 'selection',
            }),
            Ge = ye || f,
            Ue = u.a.createElement(
              ie.a,
              null,
              u.a.createElement(
                ie.a,
                { style: [Ke.middleControl, !Ge && Ke.emptyCoverImageBackground] },
                u.a.createElement(L.default, {
                  aspectRatio: z.a.theme.aspectRatios.twitterArticleBanner,
                  currentContent: we,
                  location: O.d.TwitterArticle,
                  maskStyle: Ke.coverImageMaskStyle,
                  mediaItem: f,
                  onChange: function (e) {
                    var t = c()(e, 1)[0]
                    i(t), re(!0)
                  },
                  onFailure: ge,
                  onRemove: Ge
                    ? function () {
                        V(E, { mediaId: void 0 }).catch(m({ showToast: !0 }))
                      }
                    : void 0,
                  rootStyle: Ke.mediaPicker,
                }),
                u.a.createElement(
                  ie.a,
                  { style: [Ke.metadataContainer, Ke.metadataMargins] },
                  p
                    ? u.a.createElement(Te.a, {
                        isVerified: p.verified,
                        name: p.name,
                        profileImageUrl: p.profile_image_url_https,
                        screenName: p.screen_name,
                        style: Ke.author,
                        withLink: !0,
                      })
                    : null,
                  Ge ? null : We,
                ),
              ),
              Ge ? u.a.createElement(ie.a, { style: Ke.metadataMargins }, We) : null,
            )
          return u.a.createElement(
            D.a,
            { rightControl: _e, screenType: 'primaryDetail', title: 'Edit Twitter Article', withBottomBorder: !1 },
            $
              ? u.a.createElement(Me.a, {
                  headline: 'Delete Twitter Article?',
                  onCancel: me,
                  onConfirm: function () {
                    g(E).then(function () {
                      _.replace('/i/twitter-article-composer')
                    })
                  },
                })
              : null,
            ae
              ? u.a.createElement(R.a, {
                  defaultAspectRatio: z.a.theme.aspectRatios.twitterArticleBanner,
                  media: f,
                  onCancel: function () {
                    f && ge(f.id), re(!1)
                  },
                  onDone: function () {
                    f &&
                      (G([f.id]).then(function (e) {
                        var t = c()(e, 1)[0]
                        V(E, { mediaId: t.uploadId })
                          .then(function () {
                            ge(f.id)
                          })
                          .catch(m({ showToast: !0 }))
                      }),
                      re(!1))
                  },
                })
              : null,
            u.a.createElement(
              ie.a,
              { style: Ke.container },
              u.a.createElement(ke.a, {
                fetchStatus: y,
                render: function () {
                  return u.a.createElement(Ee, {
                    allMedia: d,
                    editorState: q,
                    inputStyle: Ke.editorContent,
                    mediaIdToLocalMediaIdMap: ce,
                    middleControl: Ue,
                    onAddMediaFiles: de,
                    onChange: ue,
                    twitterArticleId: E,
                  })
                },
              }),
            ),
          )
        },
        Ke = z.a.create(function (e) {
          return {
            container: { zIndex: e.componentZIndices.appBarZIndex + 1 },
            controlsContainer: { flexDirection: 'row' },
            buttonMargin: { marginRight: e.spaces.space8 },
            editorContent: { paddingHorizontal: 'calc(2 * '.concat(e.componentDimensions.gutterHorizontal, ')') },
            middleControl: { display: 'flex', justifyContent: 'space-between' },
            emptyCoverImageBackground: { backgroundColor: e.colors.gray300 },
            coverImage: { height: '100%', width: '100%' },
            coverImageMaskStyle: { backgroundColor: e.colors.transparent },
            mediaPicker: { flex: 1 },
            metadataContainer: {
              backgroundColor: e.colors.cellBackground,
              bottom: 0,
              borderTopLeftRadius: e.borderRadii.medium,
              borderTopRightRadius: e.borderRadii.medium,
              position: 'absolute',
              width: 'calc(100% - 2 * '.concat(e.componentDimensions.gutterHorizontal, ')'),
            },
            metadataMargins: { marginHorizontal: e.componentDimensions.gutterHorizontal },
            author: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingTop: e.componentDimensions.gutterVertical,
              paddingBottom: e.spaces.space8,
            },
            titleInput: {
              fontSize: e.fontSizes.title1,
              fontWeight: e.fontWeights.heavy,
              lineHeight: e.lineHeights.title1,
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
            },
          }
        }),
        Ge = S(We)
      t.default = Ge
    },
    RH6X: function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        l = n('1Pcy'),
        c = n.n(l),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('2VqO'),
        p = n.n(d),
        h = n('KEM+'),
        f = n.n(h),
        m = (n('2G9S'), n('849X'), n('TJCb'), n('ERkP')),
        v = n.n(m),
        g = n('oEoC'),
        y = n('2dXj'),
        b = n('4bHO'),
        w = n('dzqK'),
        _ = n('GZwR'),
        E = n('zpdM'),
        C = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              f()(c()(e), 'state', { queryContext: void 0, canShowTypeahead: !1 }),
              f()(c()(e), '_genericWrapperRef', v.a.createRef()),
              f()(c()(e), 'render', function () {
                var t = e.props,
                  n = t.children,
                  a = t.contextText,
                  r = t.isInline,
                  i = t.isInlineReply,
                  o = t.onTypeaheadStateChange,
                  l = t.source,
                  c = e.state,
                  s = c.canShowTypeahead,
                  u = c.queryContext,
                  d = s && u ? { word: u.word, resultType: u.resultType } : void 0
                return v.a.createElement(
                  y.a,
                  {
                    contextText: a,
                    isInline: r,
                    isInlineReply: i,
                    onDismiss: e._handleDismiss,
                    onSelectItem: e._handleSelectItem,
                    onTypeaheadStateChange: o,
                    query: d,
                    ref: e._genericWrapperRef,
                    source: l || _.d.Compose,
                  },
                  n(e._handleInputChange),
                )
              }),
              f()(c()(e), '_getCaret', function (e) {
                return e.getSelection().getStartOffset()
              }),
              f()(c()(e), '_getPlaintextFromCurrentBlock', function (e) {
                var t = e.getSelection().anchorKey
                return e.getCurrentContent().getBlockForKey(t).getText()
              }),
              f()(c()(e), '_handleSelectItem', function (t) {
                var n = e.props.onTextUpdated,
                  a = e.state.queryContext
                if (a) {
                  var r = Object(b.a)(t, a.resultType)
                  n(e._replaceToken(r, a))
                }
                e._setQueryContext(void 0)
              }),
              f()(c()(e), '_handleInputChange', function (t) {
                if (!Object(w.a)(t))
                  throw new Error('RichTextTypeaheadComposeWrapper cannot handle plain text input changes')
                var n = e.state.queryContext,
                  a = n && n.word,
                  r = e._getPlaintextFromCurrentBlock(t),
                  i = g.c(e._getCaret(t), r),
                  o = i.end,
                  l = i.start,
                  c = i.word,
                  s = g.e(c || '', 'compose')
                if ((null == s ? void 0 : s.q) !== a)
                  if ((e._genericWrapperRef.current && e._genericWrapperRef.current.resetSelectedItem(), -1 === l))
                    e._setQueryContext(void 0)
                  else if (s) {
                    var u = s.q,
                      d = s.result_type
                    e._setQueryContext({ word: u, resultType: d, editorState: t, startIndex: l, endIndex: o })
                  } else e._setQueryContext(void 0)
              }),
              f()(c()(e), '_setQueryContext', function (t) {
                return e.setState({ queryContext: t, canShowTypeahead: !!t })
              }),
              f()(c()(e), '_handleDismiss', function () {
                return e.setState({ canShowTypeahead: !1 })
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: '_replaceToken',
                value: function (e, t) {
                  var n = t.editorState,
                    a = t.endIndex,
                    r = t.startIndex,
                    i = n
                      .getSelection()
                      .merge({ anchorKey: n.getSelection().getFocusKey(), anchorOffset: r, focusOffset: a }),
                    o = E.Modifier.replaceText(n.getCurrentContent(), i, e),
                    l = E.EditorState.push(n, o, 'insert-characters'),
                    c = r + e.length,
                    s = l.getSelection().merge({ anchorOffset: c, focusOffset: c })
                  return E.EditorState.forceSelection(l, s)
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      t.a = C
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
    T8pk: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        l = n('Lsrn'),
        c = n('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [l.a.root, e.style],
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
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    Tvzs: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return S
      }),
        n.d(t, 'd', function () {
          return T
        }),
        n.d(t, 'a', function () {
          return M
        }),
        n.d(t, 'c', function () {
          return k
        }),
        n.d(t, 'f', function () {
          return P
        }),
        n.d(t, 'e', function () {
          return L
        })
      var a = n('KEM+'),
        r = n.n(a),
        i = n('yiKp'),
        o = n.n(i),
        l = (n('KOtZ'), n('7x/C'), n('ERkP')),
        c = n.n(l),
        s = n('t62R'),
        u = n('rHpw'),
        d = n('Lsrn'),
        p = n('k/Ka'),
        h = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(p.a)(
            'svg',
            o()(
              o()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [d.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            c.a.createElement(
              'g',
              null,
              c.a.createElement('path', {
                d: 'M17.481 12.934a3.862 3.862 0 01.856 2.6 4.422 4.422 0 01-.585 2.251 4.078 4.078 0 01-1.8 1.61 6.811 6.811 0 01-3.016.6H5.75V4.009h6.85a5.871 5.871 0 014 1.17 3.8 3.8 0 011.309 2.971 3.554 3.554 0 01-.731 2.218 3.733 3.733 0 01-2.078 1.317 3.812 3.812 0 012.381 1.249zM9.018 6.439v4.233h2.836a2.79 2.79 0 001.981-.585 2 2 0 00.607-1.509 2.049 2.049 0 00-.618-1.542 2.765 2.765 0 00-1.97-.6zm5.166 10.468a2.238 2.238 0 00.664-1.666 2.1 2.1 0 00-.653-1.632 2.785 2.785 0 00-1.936-.6H9.018v4.551h3.128a2.8 2.8 0 002.038-.653z',
                fillRule: 'evenodd',
              }),
            ),
          )
        }
      h.metadata = { width: 24, height: 24 }
      var f = h,
        m = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(p.a)(
            'svg',
            o()(
              o()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [d.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            c.a.createElement(
              'g',
              null,
              c.a.createElement('path', {
                d: 'M19 4H9a.75.75 0 000 1.5h4.075l-3.71 13H5A.75.75 0 005 20h10a.75.75 0 000-1.5h-4.075l3.71-13H19A.75.75 0 0019 4z',
                fillRule: 'evenodd',
              }),
            ),
          )
        }
      m.metadata = { width: 24, height: 24 }
      var v = m,
        g = n('CwxE'),
        y = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(p.a)(
            'svg',
            o()(
              o()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [d.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            c.a.createElement(
              'g',
              null,
              c.a.createElement('path', {
                d: 'M17.91 14.554a5.5 5.5 0 01.13 1.224c0 2.959-2.165 4.8-5.65 4.8-3.594 0-5.934-1.8-6.42-4.955a.75.75 0 111.482-.228c.5 3.205 3.306 3.683 4.938 3.683 1.55 0 4.15-.429 4.15-3.3a4 4 0 00-.092-.89.75.75 0 111.462-.334zM21 11h-8.173c-.236-.04-.474-.079-.716-.114-2.965-.447-4.121-1.375-4.121-3.315 0-1.9 1.462-3 4.01-3 2.353 0 3.755.988 4.17 2.937a.93.93 0 00.2.467.751.751 0 001.189-.911c.061.093.083.161.075.132C17.072 4.54 15.07 3.075 12 3.075c-4.063 0-5.51 2.322-5.51 4.5A4.047 4.047 0 008.046 11H3a.75.75 0 000 1.5h9.715a.758.758 0 00.106.009c.017 0 .033-.008.05-.009H21a.75.75 0 000-1.5z',
                fillRule: 'evenodd',
              }),
            ),
          )
        }
      y.metadata = { width: 24, height: 24 }
      var b = y,
        w = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(p.a)(
            'svg',
            o()(
              o()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [d.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            c.a.createElement(
              'g',
              null,
              c.a.createElement('path', {
                d: 'M21.75 16.75a.75.75 0 01-.75.75H9A.75.75 0 019 16h12a.75.75 0 01.75.75zM9 7.5h12A.75.75 0 0021 6H9a.75.75 0 000 1.5zM4.5 4.25A2.25 2.25 0 106.75 6.5 2.253 2.253 0 004.5 4.25zm0 10a2.25 2.25 0 102.25 2.25 2.253 2.253 0 00-2.25-2.25z',
                fillRule: 'evenodd',
              }),
            ),
          )
        }
      w.metadata = { width: 24, height: 24 }
      var _ = w,
        E = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(p.a)(
            'svg',
            o()(
              o()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [d.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            c.a.createElement(
              'g',
              null,
              c.a.createElement('path', {
                d: 'M2.079 6.085a.75.75 0 01.336-1.006l2-1A.75.75 0 015.5 4.75v5a.75.75 0 01-1.5 0V5.964l-.915.457a.748.748 0 01-1.006-.336zM6 18.25H4.8l1.306-1.313a2.162 2.162 0 00-1.531-3.687 2.328 2.328 0 00-2.325 2.325v.368a.75.75 0 101.5 0v-.368a.826.826 0 01.825-.825.664.664 0 01.47.2.652.652 0 01.192.472.662.662 0 01-.192.462l-2.577 2.588A.75.75 0 003 19.75h3a.75.75 0 000-1.5zM21 16H9a.75.75 0 000 1.5h12a.75.75 0 000-1.5zm0-10H9a.75.75 0 000 1.5h12A.75.75 0 0021 6z',
                fillRule: 'evenodd',
              }),
            ),
          )
        }
      E.metadata = { width: 24, height: 24 }
      var C = E,
        x = u.a.create(function (e) {
          return { iconGray: { color: e.colors.gray700 } }
        }),
        I = {
          iconBold: c.a.createElement(f, { style: x.iconGray }),
          iconItalic: c.a.createElement(v, { style: x.iconGray }),
          iconCode: c.a.createElement(g.a, { style: x.iconGray }),
          iconStrikethrough: c.a.createElement(b, { style: x.iconGray }),
          iconBulletedList: c.a.createElement(_, { style: x.iconGray }),
          iconNumberedList: c.a.createElement(C, { style: x.iconGray }),
        },
        S = { bold: 'BOLD', italic: 'ITALIC', code: 'CODE', strikethrough: 'STRIKETHROUGH' },
        T = function (e) {
          return [
            { icon: I.iconBold, key: 'bold', onPress: e(S.bold) },
            { icon: I.iconItalic, key: 'italic', onPress: e(S.italic) },
            { icon: I.iconCode, key: 'code', onPress: e(S.code) },
            { icon: I.iconStrikethrough, key: 'strikethrough', onPress: e(S.strikethrough) },
          ]
        },
        M = {
          bulleted: 'unordered-list-item',
          header1: 'header-one',
          header2: 'header-two',
          numbered: 'ordered-list-item',
          paragraph: 'unstyled',
        },
        k = function (e) {
          return [
            { icon: I.iconBulletedList, key: 'bulleted', onPress: e(M.bulleted) },
            { icon: I.iconNumberedList, key: 'numbered', onPress: e(M.numbered) },
          ]
        },
        R = function (e, t) {
          return function (n) {
            return c.a.createElement(s.b, { size: e, weight: t }, n)
          }
        },
        P = [
          { blockType: M.header1, label: 'Heading 1', render: R('title1', 'heavy') },
          { blockType: M.header2, label: 'Heading 2', render: R('title3', 'heavy') },
          { blockType: M.paragraph, label: 'Paragraph', render: R('body') },
        ],
        L = P.reduce(function (e, t) {
          var n = t.blockType
          return o()(r()({}, n, { element: 'div', wrapper: t.render() }), e)
        }, {})
    },
    Uchl: function (e, t, n) {
      'use strict'
      var a = n('ddV6'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        l = n('MWbm'),
        c = n('5Vk4'),
        s = n('/yvb'),
        u = n('sgih'),
        d = n('xKuM'),
        p = n('rHpw').a.create(function (e) {
          return {
            sheet: { maxHeight: '100vh' },
            appBar: { borderRadius: e.borderRadii.xLarge, overflow: 'hidden' },
            buttonContainer: { flexDirection: 'row-reverse' },
            secondaryButton: { marginRight: e.spaces.space8 },
            content: { flex: 1, overflowY: 'auto' },
          }
        })
      t.a = function (e) {
        var t = e.children,
          n = e.onBackClick,
          a = e.onClose,
          i = e.primaryButtonConfig,
          h = e.secondaryButtonConfig,
          f = e.style,
          m = e.title,
          v = o.a.useState(!1),
          g = r()(v, 2),
          y = g[0],
          b = g[1],
          w = function () {
            b(function (e) {
              return !e
            })
          },
          _ = o.a.createElement(c.a, { backButtonType: n ? 'back' : 'close', onClick: n || a }),
          E = i
            ? o.a.createElement(
                s.a,
                {
                  accessibilityLabel: i.label,
                  disabled: y || i.forceDisabled,
                  onClick: function () {
                    w(), null == i || i.onClick(w)
                  },
                  size: 'small',
                  type: 'primaryFilled',
                },
                i.label,
              )
            : null,
          C = h
            ? o.a.createElement(
                s.a,
                {
                  accessibilityLabel: h.label,
                  onClick: function () {
                    null == h || h.onClick()
                  },
                  size: 'small',
                  style: p.secondaryButton,
                  type: 'primaryOutlined',
                },
                h.label,
              )
            : null,
          x = o.a.createElement(l.a, { style: p.buttonContainer }, E, C)
        return o.a.createElement(
          u.a,
          {
            enableMaskForDismiss: !0,
            onMaskClick: a,
            style: [p.sheet, f],
            type: 'full',
            withKeyboardNavigation: !0,
            withMask: !0,
          },
          o.a.createElement(d.a, { leftControl: _, rightControl: x, style: p.appBar, title: m }),
          o.a.createElement(l.a, { style: p.content }, t),
        )
      }
    },
    UwBx: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return G
      })
      var a = n('RhWx'),
        r = n.n(a),
        i = n('yiKp'),
        o = n.n(i),
        l = n('m3Bd'),
        c = n.n(l),
        s = n('97Jx'),
        u = n.n(s),
        d = n('ddV6'),
        p = n.n(d),
        h = n('VrFO'),
        f = n.n(h),
        m = n('Y9Ll'),
        v = n.n(m),
        g = n('1Pcy'),
        y = n.n(g),
        b = n('5Yy7'),
        w = n.n(b),
        _ = n('2VqO'),
        E = n.n(_),
        C = n('KEM+'),
        x = n.n(C),
        I = (n('2G9S'), n('KOtZ'), n('7x/C'), n('z84I'), n('uFXj'), n('ERkP')),
        S = n.n(I),
        T = n('mjJ+'),
        M = n('t62R'),
        k = n('/yvb'),
        R = n('VUbk'),
        P = n.n(R),
        L = n('FG+G'),
        O = n('IG7M'),
        D = n('rHpw'),
        A = n('MWbm'),
        F = D.a.create(function (e) {
          return {
            separator: {
              borderRightWidth: e.borderWidths.small,
              borderColor: e.colors.nestedBorderColor,
              marginVertical: e.spaces.space4,
            },
          }
        }),
        B = function (e) {
          var t = e.style
          return S.a.createElement(A.a, { style: [F.separator, t] })
        },
        V = n('Tvzs'),
        z = n('zpdM'),
        H = n('6OUF'),
        j = n('sXY3'),
        W = n('tn7R'),
        K = ['additionalToolbarButtonConfigs', 'inputStyle', 'middleControl', 'richTextInputContext'],
        G = (function (e) {
          w()(n, e)
          var t = E()(n)
          function n() {
            var e
            f()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              x()(y()(e), 'state', { selectedTextSize: V.f[2] }),
              x()(y()(e), '_toggleTextStyle', function (t) {
                var n = e.props,
                  a = n.onChange,
                  r = n.richTextInputContext.editorState
                return function (e) {
                  return function () {
                    r && (null == a || a(t(r, e)))
                  }
                }
              }),
              x()(y()(e), '_isEditorFocused', function () {
                var t = e.props.richTextInputContext.editorState
                return null == t ? void 0 : t.getSelection().getHasFocus()
              }),
              x()(y()(e), '_handleTextSizeClick', function (t) {
                return function () {
                  e.setState({ selectedTextSize: t }), e._toggleTextStyle(z.RichUtils.toggleBlockType)(t.blockType)()
                }
              }),
              x()(y()(e), '_mergeMap', function (e, t) {
                return Object(j.a)(t).reduce(function (e, t) {
                  var n = p()(t, 2),
                    a = n[0],
                    r = n[1]
                  return e.set(a, r)
                }, e)
              }),
              x()(y()(e), '_renderToolbarButtonGroup', function (t, n) {
                return S.a.createElement(
                  A.a,
                  { style: U.buttonGroup },
                  n ? null : S.a.createElement(B, { style: U.itemMargin }),
                  t.map(function (t, a) {
                    return S.a.createElement(
                      k.a,
                      u()(
                        {
                          preventFocusShift: e._isEditorFocused(),
                          style: 0 === a && n ? null : U.itemMargin,
                          type: 'primaryText',
                        },
                        t,
                      ),
                    )
                  }),
                )
              }),
              x()(y()(e), '_renderActionMenu', function (t) {
                var n = V.f.map(function (t) {
                  return { text: t.render(t.label), onClick: e._handleTextSizeClick(t) }
                })
                return S.a.createElement(T.a, {
                  items: n,
                  onCloseRequested: t,
                  preventFocusShift: e._isEditorFocused(),
                  shouldCloseOnClick: !0,
                })
              }),
              x()(y()(e), '_setFieldTextInputRef', function (t) {
                e.fieldTextInput = t
              }),
              e
            )
          }
          return (
            v()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.additionalToolbarButtonConfigs,
                    n = e.inputStyle,
                    a = e.middleControl,
                    i = e.richTextInputContext,
                    l = c()(e, K),
                    s = this.state.selectedTextSize,
                    d = Object(V.d)(this._toggleTextStyle(z.RichUtils.toggleInlineStyle)),
                    p = Object(V.c)(this._toggleTextStyle(z.RichUtils.toggleBlockType)),
                    h = this._mergeMap(this._mergeMap(P.a, V.e), i.blockRenderMap || {}),
                    f = o()(
                      o()({}, i),
                      {},
                      {
                        blockRenderMap: h,
                        pastedStylesAllowlist: [].concat(
                          r()(Object(W.a)(V.b)),
                          r()(Object(W.a)(V.a)),
                          r()(i.pastedStylesAllowlist || []),
                        ),
                      },
                    )
                  return S.a.createElement(
                    S.a.Fragment,
                    null,
                    S.a.createElement(
                      A.a,
                      { style: U.toolbar },
                      this._renderToolbarButtonGroup(d, !0),
                      S.a.createElement(B, { style: U.itemMargin }),
                      S.a.createElement(
                        A.a,
                        { style: U.textSizeSelection },
                        S.a.createElement(M.b, { color: 'gray700', numberOfLines: 1 }, null == s ? void 0 : s.label),
                        S.a.createElement(O.a, {
                          Icon: L.a,
                          iconSize: 'small',
                          preventFocusShift: this._isEditorFocused(),
                          renderActionMenu: this._renderActionMenu,
                          style: U.itemMargin,
                        }),
                      ),
                      this._renderToolbarButtonGroup(p),
                      t ? this._renderToolbarButtonGroup(t) : null,
                    ),
                    a,
                    S.a.createElement(
                      H.a,
                      u()({ inputStyle: [U.input, n], ref: this._setFieldTextInputRef, richTextInputContext: f }, l),
                    ),
                  )
                },
              },
              {
                key: 'focus',
                value: function () {
                  var e
                  null === (e = this.fieldTextInput) || void 0 === e || e.focus()
                },
              },
              {
                key: 'getTextInputHeight',
                value: function () {
                  var e
                  return null === (e = this.fieldTextInput) || void 0 === e ? void 0 : e.getTextInputHeight()
                },
              },
            ]),
            n
          )
        })(S.a.Component)
      x()(G, 'defaultProps', { leftAligned: !0, multiline: !0, styleType: 'selection' })
      var U = D.a.create(function (e) {
        return {
          buttonGroup: { flexDirection: 'row' },
          input: { paddingHorizontal: 0, paddingBottom: 0 },
          itemMargin: { marginLeft: e.spaces.space8 },
          textSizeSelection: {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginLeft: e.spaces.space16,
            marginRight: e.spaces.space8,
            width: 'calc('.concat(e.spaces.space32, ' * 3)'),
          },
          toolbar: {
            borderBottomWidth: e.borderWidths.small,
            borderColor: e.colors.nestedBorderColor,
            flexDirection: 'row',
            flexWrap: 'wrap',
            paddingBottom: e.spaces.space4,
            justifyContent: 'center',
            width: '100%',
          },
        }
      })
    },
    VPdC: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return P
      })
      var a = n('97Jx'),
        r = n.n(a),
        i = n('m3Bd'),
        o = n.n(i),
        l = n('VrFO'),
        c = n.n(l),
        s = n('Y9Ll'),
        u = n.n(s),
        d = n('5Yy7'),
        p = n.n(d),
        h = n('2VqO'),
        f = n.n(h),
        m = n('KEM+'),
        v = n.n(m),
        g = (n('2G9S'), n('7xRU'), n('ERkP')),
        y = n.n(g),
        b = n('3XMw'),
        w = n.n(b),
        _ = n('cjZk'),
        E = 'fileInput',
        C = n('sjK1'),
        x = n('/Imo'),
        I = n('rHpw'),
        S = n('9HgX'),
        T = ['acceptGifs', 'acceptImages', 'acceptVideo', 'customMimeTypes', 'icon', 'style', 'withIcon'],
        M = w.a.b9960f31,
        k = { viewType: 'media_picker' },
        R = y.a.createElement(_.a, null),
        P = function (e) {
          var t = e.acceptGifs,
            n = e.acceptImages,
            a = void 0 === n || n,
            r = e.acceptVideo
          return (a ? S.b : []).concat(t ? [S.a] : []).concat(r ? C.a : [])
        },
        L = (function (e) {
          p()(n, e)
          var t = f()(n)
          function n() {
            return c()(this, n), t.apply(this, arguments)
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
                    l = e.icon,
                    c = e.style,
                    s = e.withIcon,
                    u = o()(e, T),
                    d = P({ acceptGifs: t, acceptImages: n, acceptVideo: a }).concat(i).join(',')
                  return y.a.createElement(
                    x.a,
                    r()({}, u, {
                      accept: d,
                      behavioralEventContext: k,
                      icon: s ? l : void 0,
                      style: [O.root, c],
                      testID: E,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(y.a.PureComponent)
      v()(L, 'defaultProps', {
        acceptGifs: !0,
        acceptImages: !0,
        acceptVideo: !0,
        customMimeTypes: [],
        accessibilityLabel: M,
        icon: R,
        size: 'medium',
        withIcon: !0,
      })
      var O = I.a.create(function (e) {
        return { root: { margin: '-'.concat(e.spaces.space12) } }
      })
      t.a = L
    },
    Vc8w: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return o
      })
      var a = n('ERkP'),
        r = n.n(a),
        i = n('pxuL'),
        o = function () {
          var e = r.a.useContext(i.a),
            t = e.decrementDmDrawerSuppressorCount,
            n = e.incrementDmDrawerSuppressorCount
          r.a.useEffect(
            function () {
              return (
                n(),
                function () {
                  return t()
                }
              )
            },
            [n, t],
          )
        }
    },
    'av/O': function (e, t, n) {
      'use strict'
      var a = n('ddV6'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        l = n('956X'),
        c = (n('uFXj'), n('XOJV')),
        s = n('rxPX'),
        u = function (e, t) {
          var n = t.tweetId
          return n ? c.a.selectHydrated(e, n) : void 0
        },
        d = Object(s.a)().propsFromState(function () {
          return { tweet: u }
        }),
        p = n('3XMw'),
        h = n.n(p),
        f = n('r7g+'),
        m = n('cm6r'),
        v = n('rHpw'),
        g =
          (h.a.ac78ac54,
          v.a.create(function (e) {
            return {
              tweet: {
                backgroundColor: e.colors.cellBackground,
                borderWidth: e.borderWidths.small,
                borderColor: e.colors.borderColor,
                borderStyle: 'solid',
                borderRadius: e.borderRadii.xLarge,
                marginBottom: e.componentDimensions.gutterVertical,
                marginHorizontal: e.componentDimensions.gutterHorizontal,
              },
            }
          })),
        y = d(function (e) {
          var t = e.onTweetPress,
            n = e.tweet,
            a = e.tweetId
          if (!n) return null
          var r = o.a.createElement(f.a, { tweet: n })
          if (!t) return r
          return o.a.createElement(
            m.a,
            {
              onPress: function (e) {
                a && t(a)
              },
              style: g.tweet,
            },
            r,
          )
        })
      t.a = function (e) {
        var t = e.checkTweet,
          n = e.onChangeTweetId,
          a = e.onTweetPress,
          i = o.a.useState(),
          c = r()(i, 2),
          s = c[0],
          u = c[1]
        return o.a.createElement(
          o.a.Fragment,
          null,
          o.a.createElement(l.a, {
            checkTweet: t,
            onChangeTweetId: function (e) {
              u(e), n && n(e)
            },
            tweetId: s,
            withActivityIndicator: !0,
          }),
          o.a.createElement(y, {
            onTweetPress: function (e) {
              a && s && a(s)
            },
            tweetId: s,
          }),
        )
      }
    },
    c0ZR: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      })
      n('7x/C'), n('JtPf'), n('849X'), n('TJCb')
      var a = function (e) {
        return new Promise(function (t, n) {
          var a = new window.XMLHttpRequest()
          ;(a.responseType = 'blob'),
            (a.onreadystatechange = function () {
              a.readyState === window.XMLHttpRequest.DONE &&
                (200 === a.status ? t(a.response) : n(new Error('Unexpected status code')))
            }),
            (a.onerror = function (e) {
              return n(e)
            }),
            (a.ontimeout = function (e) {
              return n(e)
            }),
            a.open('GET', e, !0),
            a.send()
        })
      }
    },
    dWxr: function (e, t, n) {
      'use strict'
      var a = n('IGGJ')
      n('2G9S'),
        Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e, t) {
          var n = (0, l.default)(e, t)
            .concat((0, o.default)(e))
            .concat((0, i.default)(e, { checkUrlOverlap: !1 }))
            .concat((0, r.default)(e))
          if (0 == n.length) return []
          return (0, c.default)(n), n
        })
      var r = a(n('EW8Q')),
        i = a(n('yyPN')),
        o = a(n('YXS5')),
        l = a(n('vwfs')),
        c = a(n('c8jd'))
      e.exports = t.default
    },
    dzqK: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      })
      n('ERkP')
      var a = n('zpdM')
      function r(e) {
        return e instanceof a.EditorState
      }
    },
    fS8x: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        i = n('VrFO'),
        o = n.n(i),
        l = n('Y9Ll'),
        c = n.n(l),
        s = n('1Pcy'),
        u = n.n(s),
        d = n('5Yy7'),
        p = n.n(d),
        h = n('2VqO'),
        f = n.n(h),
        m = n('KEM+'),
        v = n.n(m),
        g = n('/NU0'),
        y = n('rxPX'),
        b = n('AspN'),
        w = function (e, t) {
          return t.media ? t.media : Object(g.a)(t.mediaId) ? Object(b.k)(e, t.mediaId)[0] : void 0
        },
        _ = function (e, t) {
          return void 0 !== t.mediaId ? t.mediaId : t.media ? t.media.id : null
        },
        E = Object(y.a)()
          .propsFromState(function () {
            return { media: w, mediaId: _ }
          })
          .propsFromActions(function () {
            return { processMedia: b.f, updateMediaUpload: b.o }
          })
          .withAnalytics({ page: 'media', section: 'edit' }),
        C = n('jHSc'),
        x = n('3XMw'),
        I = n.n(x),
        S = n('EeFI'),
        T = 'applyButton',
        M = n('/yvb'),
        k = n('rHpw'),
        R = I.a.gd80afba,
        P = I.a.a753a87f,
        L = (function (e) {
          p()(n, e)
          var t = f()(n)
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
                  M.a,
                  { disabled: e, onPress: a._handleApplyButtonClick, size: 'small', testID: T, type: 'primaryFilled' },
                  P,
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
                    l = n.onDone,
                    c = n.processMedia,
                    s = n.updateMediaUpload
                  a.setState({ isProcessing: !0 })
                  var u = t.getCropData(),
                    d = (i || {}).originalMediaFile,
                    p = !d || (0 === u.top && 0 === u.left && u.width === d.width && u.height === d.height)
                  Object(g.a)(o) &&
                    (e
                      ? (e(u), l())
                      : (s({ id: o, cropData: p ? void 0 : u }),
                        c(o).then(function () {
                          a.setState({ isProcessing: !1 }), r.scribe({ action: 'done' }), l()
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
                    i = e.withAspectRatioOptions,
                    o = e.withZoomControl,
                    l = this._getMedia()
                  return r.a.createElement(
                    C.b,
                    {
                      backButtonType: 'back',
                      containerStyle: O.root,
                      documentTitle: a || R,
                      history: n,
                      onBackClick: this._handleBackClick,
                      rightControl: this._renderAppBarRightControl(),
                      title: a || R,
                    },
                    r.a.createElement(S.a, {
                      defaultAspectRatio: t,
                      media: l,
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
        O = k.a.create(function (e) {
          return { root: { flexShrink: 1, height: 650 } }
        }),
        D = E(L),
        A = n('X8FW'),
        F = k.a.create(function (e) {
          return { modal: { width: 600, maxWidth: '90vw' } }
        })
      t.a = function (e) {
        return r.a.createElement(
          A.b,
          { clickMaskToClose: !1, modalSize: 'fitChildren', style: F.modal },
          r.a.createElement(D, e),
        )
      }
    },
    fn8Q: function (e, t, n) {
      'use strict'
      n.d(t, 'c', function () {
        return a
      }),
        n.d(t, 'd', function () {
          return r
        }),
        n.d(t, 'b', function () {
          return i
        }),
        n.d(t, 'a', function () {
          return o
        })
      n('yH/f')
      var a = Object.freeze({ GIF: 'TweetGif', IMAGE: 'TweetImage', VIDEO: 'TweetVideo' }),
        r = Object.freeze({ DRAFT: 'Draft', PUBLISHED: 'Published' }),
        i = Object.freeze({ MEDIA: 'MEDIA', TWEET: 'TWEET' }),
        o = Object.freeze({ IMMUTABLE: 'IMMUTABLE' })
    },
    gEvp: function (e, t, n) {
      'use strict'
      n('uFXj')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('XOJV'),
        o = n('rxPX'),
        l = function (e, t) {
          var n = t.tweetId
          return n ? i.a.selectHydrated(e, n) : void 0
        },
        c = function (e, t) {
          var n = t.tweetId
          return n ? i.a.selectFetchStatus(e, n) : void 0
        },
        s = Object(o.a)()
          .propsFromState(function () {
            return { tweet: l, fetchStatus: c }
          })
          .propsFromActions(function () {
            return { fetchTweetIfNeeded: i.a.fetchOneIfNeeded }
          }),
        u = n('v//M'),
        d = n('MWbm'),
        p = n('r7g+'),
        h = n('rHpw'),
        f = h.a.create(function (e) {
          return {
            container: {
              borderColor: e.colors.gray200,
              borderRadius: e.borderRadii.large,
              borderWidth: e.borderWidths.small,
              width: '100%',
            },
          }
        }),
        m = s(function (e) {
          var t = e.fetchStatus,
            n = e.fetchTweetIfNeeded,
            a = e.tweet,
            i = e.tweetId,
            o = r.a.useCallback(
              function () {
                n(i)
              },
              [i, n],
            )
          r.a.useEffect(
            function () {
              i && o()
            },
            [o, i],
          )
          return r.a.createElement(
            d.a,
            { style: f.container, testID: 'simpleTweet' },
            r.a.createElement(u.a, {
              fetchStatus: t,
              onRequestRetry: o,
              render: function () {
                return a ? r.a.createElement(p.a, { tweet: a }) : null
              },
              retryMessage: 'Something went wrong. Try reloading the Tweet again.',
              retryable: !0,
            }),
          )
        })
      t.a = m
    },
    hHEM: function (e, t, n) {
      'use strict'
      n('yH/f'), n('jwue'), n('7x/C'), n('+oxZ')
      var a = n('z4Oz'),
        r = n('LQrL'),
        i = n('zpdM'),
        o = function (e, t) {
          for (var n = 0, a = 0; a < e.length; a++) {
            var r = e[a],
              i = r.getText().length
            if (n + i >= t) return { blockKey: r.key, offset: t - n }
            n += i + 1
          }
          return Object.freeze({})
        },
        l = function (e, t) {
          var n = e.getCurrentContent(),
            a = n.getFirstBlock(),
            r = n.getLastBlock(),
            o = t.blockKey,
            l = void 0 === o ? r.key : o,
            c = t.offset,
            s = void 0 === c ? r.getText().length : c,
            u = e
              .getSelection()
              .merge({ anchorKey: a.key, anchorOffset: 0, focusKey: l, focusOffset: s, isBackward: !1 }),
            d = i.Modifier.removeInlineStyle(e.getCurrentContent(), u, 'overflow')
          return i.EditorState.push(e, d, 'change-inline-style')
        },
        c = function (e, t) {
          var n = t.blockKey,
            a = t.offset,
            r = e.getCurrentContent(),
            o = r.getLastBlock(),
            l = s(r, n, a)
          if (n) {
            var c = e
                .getSelection()
                .merge({
                  anchorKey: n,
                  anchorOffset: l,
                  focusKey: o.key,
                  focusOffset: o.getText().length,
                  isBackward: !1,
                }),
              u = i.Modifier.applyInlineStyle(r, c, 'overflow')
            return i.EditorState.push(e, u, 'change-inline-style')
          }
          return e
        },
        s = function (e, t) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            a = n,
            r = e.getBlockForKey(t)
          if (r) {
            var i = r.getEntityAt(n)
            if (void 0 !== i) {
              var o = i && e.getEntity(i),
                l = o && o.data && o.data.id
              if (void 0 !== l)
                for (var c = n - 1; c >= 0; c--) {
                  var s = r.getEntityAt(c),
                    u = s && e.getEntity(s)
                  if (!u || !u.data || u.data.id !== l) {
                    a = c + 1
                    break
                  }
                }
            }
            return a
          }
        },
        u = 'TWEMOJI',
        d = 'IMMUTABLE'
      t.a = {
        convertEmojiToEntities: function (e) {
          var t = i.EditorState.set(e, { allowUndo: !1 }),
            n = t.getCurrentContent(),
            r = 0
          return (
            n.getBlocksAsArray().forEach(function (e) {
              a.a.getTwemojiEntities(e.getText()).forEach(function (a) {
                if (2 === (a.indices && a.indices.length)) {
                  var o = n.createEntity(u, d, { url: a.url || null, id: r })
                  r += 1
                  var l = o.getLastCreatedEntityKey(),
                    c = e.getKey(),
                    s = t
                      .getSelection()
                      .merge({
                        anchorKey: c,
                        anchorOffset: a.indices[0],
                        focusKey: c,
                        focusOffset: a.indices[1],
                        isBackward: !1,
                      })
                  n = i.Modifier.applyEntity(o, s, l)
                }
              })
            }),
            i.EditorState.set(t, { allowUndo: !0, currentContent: n })
          )
        },
        getRelativeOffset: o,
        initEditorState: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { decorators: [r.b, r.e, r.a] },
            n = t.decorators,
            a = i.EditorState.createWithContent(
              'string' == typeof e ? i.ContentState.createFromText(e) : Object(i.convertFromRaw)(e),
              new i.CompositeDecorator(n),
            )
          return i.EditorState.moveSelectionToEnd(a)
        },
        insertTextAtCursor: function (e, t) {
          var n = e.getCurrentContent(),
            a = e.getSelection(),
            r = i.Modifier.insertText(n, a, t)
          return i.EditorState.push(e, r, 'insert-characters')
        },
        TWEMOJI_ENTITY_TYPE: u,
        updateOverflowStyle: function (e, t) {
          var n,
            a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = e.getSelection(),
            s = i.EditorState.set(e, { allowUndo: !1 }),
            u = e.getCurrentContent().getSelectionBefore(),
            d = e.getCurrentContent().getSelectionAfter(),
            p = e.getCurrentContent(),
            h = p.getBlocksAsArray(),
            f = 'number' == typeof t && t > -1,
            m = f ? o(h, t) : Object.freeze({})
          if ((a && ((s = l(s, m)), (n = !0)), f && ((s = c(s, m)), (n = !0)), n)) {
            var v = (s = i.EditorState.forceSelection(s, r)).getCurrentContent()
            ;(v = (v = v.set('selectionBefore', u)).set('selectionAfter', d)),
              (s = i.EditorState.set(e, { allowUndo: !0, currentContent: v }))
          }
          return s
        },
      }
    },
    kIAd: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      }),
        n.d(t, 'b', function () {
          return i
        })
      var a = n('0vv5'),
        r = 500,
        i = {
          scoper: [
            {
              type: 'dmUserSearch',
              regexp: /^[@＠]?(.*)|^$/,
              srcInputs: ['compose_message'],
              scope: { result_type: 'users', count: 20 },
            },
            {
              type: 'username',
              regexp: /^[@＠](\w{1,20})/,
              srcInputs: ['compose'],
              scope: { result_type: 'users', count: 20 },
            },
            { type: 'hashtag', regexp: n.n(a).a, srcInputs: ['compose'], scope: { result_type: 'topics', count: 20 } },
            { type: 'topic', regexp: /(.+)/, srcInputs: ['search_box'], scope: { result_type: 'all' } },
            {
              type: 'ttt',
              regexp: /(.+)/,
              srcInputs: ['welcome_flow'],
              scope: { count: 10, result_type: 'topics,ttt' },
            },
          ],
          WordBoundary: /[!'%&'()*+,\\\-./:;<=>?[\]^{|}~\s]|$/,
          WordEnd: /[^!'%&'()*+,\\\-./:;<=>?[\]^{|}~\s]+$/,
        }
    },
    keCP: function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        l = n('1Pcy'),
        c = n.n(l),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('2VqO'),
        p = n.n(d),
        h = n('KEM+'),
        f = n.n(h),
        m = n('97Jx'),
        v = n.n(m),
        g =
          (n('2G9S'),
          n('jwue'),
          n('7x/C'),
          n('+oxZ'),
          n('KqXw'),
          n('MvUL'),
          n('z84I'),
          n('LW0h'),
          n('jQ3i'),
          n('x4t0'),
          n('KOtZ'),
          n('SV7d')),
        y = n('rHpw'),
        b = 'singleline',
        w = function (e) {
          var t = e.placeholderTextColor,
            n = void 0 === t ? y.a.theme.colors.gray700 : t,
            a = y.a.theme.spaces.space2
          return '\n         .DraftEditor-editorContainer, .DraftEditor-root, .public-DraftEditor-content {\n            height: inherit;\n            max-height: inherit;\n            min-height: inherit;\n            overflow: auto;\n            text-align: initial;\n        }\n\n        .public-DraftEditor-content[contenteditable=true] {\n            -webkit-user-modify: read-write-plaintext-only\n        }\n\n        .DraftEditor-root {\n            width: 100%;\n            position: relative;\n            -webkit-user-select: none;\n        }\n\n        .DraftEditor-editorContainer {\n            background-color: rgba(255, 255, 255, 0);\n            border-left: .1px solid transparent;\n            position: relative;\n            z-index: 1;\n        }\n\n        .public-DraftEditor-block {\n            position: relative;\n        }\n\n        .DraftEditor-alignLeft .public-DraftStyleDefault-block {\n            text-align: left;\n        }\n\n        .DraftEditor-alignLeft .public-DraftEditorPlaceholder-root {\n            left: 0;\n            text-align: left;\n        }\n\n        .DraftEditor-alignCenter .public-DraftStyleDefault-block {\n            text-align: center\n        }\n\n        .DraftEditor-alignCenter .public-DraftEditorPlaceholder-root {\n            margin: 0 auto;\n            text-align: center;\n            width: 100%\n        }\n\n        .DraftEditor-alignRight .public-DraftStyleDefault-block {\n            text-align: right;\n        }\n\n        .DraftEditor-alignRight .public-DraftEditorPlaceholder-root {\n            right: 0;\n            text-align: right;\n        }\n\n        .public-DraftEditorPlaceholder-root {\n            color: '
            .concat(n, ';\n            padding-bottom: ')
            .concat(a, ';\n            padding-top: ')
            .concat(
              a,
              ';\n            position: absolute;\n            z-index: 1;\n        }\n\n        .public-DraftEditorPlaceholder-inner {\n            user-select: none;\n            -webkit-user-select: none;\n        }\n\n        .public-DraftEditorPlaceholder-hasFocus {\n            color: ',
            )
            .concat(
              n,
              ';\n        }\n\n        .DraftEditorPlaceholder-hidden {\n            display: none;\n        }\n\n        .public-DraftStyleDefault-block {\n            overflow:hidden;\n            padding-bottom: ',
            )
            .concat(a, ';\n            padding-top: ')
            .concat(
              a,
              ";\n            position: relative;\n            white-space: pre-wrap;\n        }\n\n        /* Only a handful of CSS rules work on br tags and user-select isn't one */\n        div:only-child > .public-DraftStyleDefault-block br::selection {\n            background: transparent;\n        }\n\n        /*\n           Safari doesn't let you change ::selection on br elements,\n           but Chrome needs it here\n        */\n        div:only-child > .public-DraftStyleDefault-block::selection {\n            background: transparent;\n        }\n\n        .public-DraftStyleDefault-ltr {\n            direction: ltr;\n            text-align: left;\n        }\n\n        .public-DraftStyleDefault-rtl {\n            direction: rtl;\n            text-align: right;\n        }\n\n        .",
            )
            .concat(
              b,
              ' .public-DraftStyleDefault-block {\n            overflow-x: auto;\n            scrollbar-width: none;\n            white-space: nowrap;\n            -ms-overflow-style: none;\n        }\n        .',
            )
            .concat(
              b,
              ' .public-DraftStyleDefault-block::-webkit-scrollbar {\n            display: none;\n        }\n    ',
            )
        },
        _ = n('ERkP'),
        E = n.n(_),
        C = n('k/Ka'),
        x = n('PxJJ'),
        I = n('w9LO'),
        S = n('fs1G'),
        T = n('zpdM'),
        M = function (e) {
          return Object(C.a)('div', e)
        },
        k = !1,
        R =
          ((t.a = E.a.forwardRef(function (e, t) {
            var n = g.d()
            return E.a.createElement(
              R,
              v()({}, e, {
                onFocus: function (t) {
                  e.onFocus && e.onFocus(t), n('focus')
                },
                ref: t,
              }),
            )
          })),
          (function (e) {
            u()(n, e)
            var t = p()(n)
            function n() {
              var e
              r()(this, n)
              for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
              return (
                (e = t.call.apply(t, [this].concat(i))),
                f()(c()(e), '_setSelectionToStart', function () {
                  var t = e.props.editorState,
                    n = t.getCurrentContent().getFirstBlock().getKey()
                  return T.EditorState.acceptSelection(
                    t,
                    new T.SelectionState({
                      anchorKey: n,
                      anchorOffset: 0,
                      focusKey: n,
                      focusOffset: 0,
                      isBackward: !1,
                    }),
                  )
                }),
                f()(c()(e), '_setFocusToStart', function () {
                  var t = e._setSelectionToStart()
                  return T.EditorState.forceSelection(t, t.getSelection())
                }),
                f()(c()(e), '_setFocusToEnd', function () {
                  var t = e.props,
                    n = t.autoFocus,
                    a = t.editorState,
                    r = t.onChange
                  n
                    ? null == r || r(T.EditorState.moveFocusToEnd(a))
                    : null == r || r(T.EditorState.moveSelectionToEnd(a))
                }),
                f()(c()(e), '_setDraftJsStyle', function () {
                  var t = e.props.placeholderTextColor,
                    n = document.createElement('style')
                  n.innerHTML = w({ placeholderTextColor: t })
                  var a = document.head
                  a && a.insertBefore(n, a.firstChild)
                }),
                f()(c()(e), 'focus', function () {
                  e._editor && e._editor.focus()
                }),
                f()(c()(e), 'blur', function () {
                  e._editor && e._editor.blur()
                }),
                f()(c()(e), 'getValue', function () {
                  return e.props.editorState.getCurrentContent().getPlainText()
                }),
                f()(c()(e), 'getOffsetHeight', function () {
                  var t = (e._editor || {}).editor
                  return (t && t.offsetHeight) || 0
                }),
                f()(c()(e), 'clear', function () {}),
                f()(c()(e), '_setEditorRef', function (t) {
                  e._editor = t
                }),
                f()(c()(e), '_handleViewClick', function () {
                  return e.focus()
                }),
                f()(c()(e), '_onPastedFiles', function (t) {
                  var n = e.props.onFilesAdded,
                    a = []
                  return (
                    t.forEach(function (e) {
                      e instanceof File && a.push(e)
                    }),
                    a.length && (null == n ? void 0 : n(a)) ? 'handled' : 'not-handled'
                  )
                }),
                f()(c()(e), '_removeNewLines', function (e, t) {
                  return T.EditorState.push(
                    t,
                    T.Modifier.replaceText(t.getCurrentContent(), t.getSelection(), e.replace(/[\r\n]+/g, ' ')),
                    'insert-characters',
                  )
                }),
                f()(c()(e), '_removeInvalidStylesFromContentBlock', function (t) {
                  var n = e.props.pastedStylesAllowlist,
                    a = t.getCharacterList().map(function (e) {
                      return e
                        .getStyle()
                        .filter(function (e) {
                          return !(null != n && n.includes(e))
                        })
                        .reduce(function (e, t) {
                          return T.CharacterMetadata.removeStyle(e, t)
                        }, e)
                    })
                  return (null != n && n.includes(t.getType()) ? t : t.set('type', 'unstyled')).set('characterList', a)
                }),
                f()(c()(e), '_removeInvalidStyles', function (t, n) {
                  var a = e.props.blockRenderMap,
                    r = t ? Object(T.convertFromHTML)(t, void 0, a) : void 0
                  if (r) {
                    var i,
                      o =
                        null == r || null === (i = r.contentBlocks) || void 0 === i
                          ? void 0
                          : i.map(e._removeInvalidStylesFromContentBlock)
                    if (o) {
                      var l = T.ContentState.createFromBlockArray(o, null == r ? void 0 : r.entityMap)
                      return T.EditorState.push(
                        n,
                        T.Modifier.replaceWithFragment(n.getCurrentContent(), n.getSelection(), l.getBlockMap()),
                        'insert-fragment',
                      )
                    }
                  }
                  return null
                }),
                f()(c()(e), '_onPastedText', function (t, n, a) {
                  var r = e.props,
                    i = r.multiline,
                    o = r.onChange,
                    l = r.pastedStylesAllowlist
                  if (o) {
                    if (!i) return o(e._removeNewLines(t, a)), 'handled'
                    if (null != l && l.length) {
                      var c = e._removeInvalidStyles(n, a)
                      if (c) return o(c), 'handled'
                    }
                  }
                  return 'not-handled'
                }),
                f()(c()(e), '_myKeyBindingFn', function (t) {
                  var n = e.props,
                    a = n.dismissComposerCommandName,
                    r = n.sendTweetCommandName,
                    i = T.KeyBindingUtil.hasCommandModifier
                  return 13 === t.keyCode && i(t) ? r : 27 === t.keyCode ? a : Object(T.getDefaultKeyBinding)(t)
                }),
                f()(c()(e), '_onKeyCommand', function (t) {
                  var n = e.props.keyCommandHandlers,
                    a = n && n[t]
                  return a ? (a(), 'handled') : 'not-handled'
                }),
                f()(c()(e), '_onSingleLineReturn', function (t, n) {
                  var a = e.props.handleReturn
                  return null == a || a(t, n), 'handled'
                }),
                f()(c()(e), '_getContainerStyle', function () {
                  var t = e.props,
                    n = t.appTextSize,
                    a = t.maxNumberOfLines,
                    r = t.multiline,
                    i = t.numberOfLines,
                    o =
                      y.a.theme.lineHeightsPx[
                        {
                          small: 'subtext2',
                          normal: 'body',
                          large: 'headline1',
                          subtext2: 'subtext2',
                          body: 'body',
                          headline1: 'headline1',
                        }[n]
                      ]
                  return { minHeight: (r && i ? i : 1) * o, maxHeight: (r && a ? a : 1) * o }
                }),
                e
              )
            }
            return (
              o()(
                n,
                [
                  {
                    key: 'componentDidMount',
                    value: function () {
                      var e = this.props,
                        t = e.onChange,
                        n = e.positionCursorAtBeginning
                      e.positionCursorAtEnd
                        ? this._setFocusToEnd()
                        : n
                        ? null == t || t(this._setFocusToStart())
                        : this.props.autoFocus && this.focus(),
                        k || (this._setDraftJsStyle(), (k = !0))
                    },
                  },
                  {
                    key: 'componentDidCatch',
                    value: function (e) {
                      x.a.report(e, { tags: { userVisible: !0, draftJs: !0 } })
                    },
                  },
                  {
                    key: 'render',
                    value: function () {
                      var e,
                        t = this.props,
                        n = t.ariaActiveDescendant,
                        a = t.ariaAutocomplete,
                        r = t.ariaControls,
                        i = t.ariaLabel,
                        o = t.blockRenderMap,
                        l = t.blockRendererFn,
                        c = t.editorState,
                        s = t.handleReturn,
                        u = t.multiline,
                        d = t.onChange,
                        p = t.onFocus,
                        h = t.onKeyDown,
                        m = t.onKeyPress,
                        v = t.onKeyUp,
                        g = t.pastedStylesAllowlist,
                        w = t.placeholder,
                        _ = t.spellCheck,
                        C = t.style,
                        x = t.testID
                      return E.a.createElement(
                        M,
                        {
                          className: u ? void 0 : b,
                          onClick: this._handleViewClick,
                          style: [this._getContainerStyle(), C],
                        },
                        E.a.createElement(T.Editor, {
                          ariaActiveDescendantID: n,
                          ariaAutoComplete: a,
                          ariaControls: r,
                          ariaLabel: i,
                          ariaMultiline: u,
                          blockRenderMap: o,
                          blockRendererFn: l,
                          customAttrs:
                            ((e = {}),
                            f()(e, I.a.NO_REFOCUS_ATTRIBUTE, 'true'),
                            f()(e, 'onKeyPress', m),
                            f()(e, 'onKeyUp', v),
                            e),
                          customStyleMap: P(y.a.theme),
                          editorState: c,
                          handleKeyCommand: this._onKeyCommand,
                          handlePastedFiles: this._onPastedFiles,
                          handlePastedText: this._onPastedText,
                          handleReturn: u ? s : this._onSingleLineReturn,
                          keyBindingFn: this._myKeyBindingFn,
                          onChange: d,
                          onFocus: p,
                          onKeyDown: h,
                          placeholder: w,
                          ref: this._setEditorRef,
                          spellCheck: 'false' !== _,
                          stripPastedStyles: !(u && null != g && g.length),
                          tabIndex: 0,
                          webDriverTestID: x,
                        }),
                      )
                    },
                  },
                ],
                [
                  {
                    key: 'getDerivedStateFromError',
                    value: function () {
                      return {}
                    },
                  },
                ],
              ),
              n
            )
          })(E.a.Component))
      f()(R, 'defaultProps', {
        appTextSize: 'body',
        autoFocus: !1,
        keyCommandHandlers: {},
        maxNumberOfLines: 30,
        multiline: !0,
        numberOfLines: 6,
        onFocus: S.a,
        positionCursorAtEnd: !1,
        spellCheck: 'true',
      }),
        (R.propTypes = {})
      var P = function (e) {
        return { overflow: { backgroundColor: e.colors.red200 } }
      }
    },
    nXUu: function (e, t, n) {
      'use strict'
      var a = n('ddV6'),
        r = n.n(a),
        i = (n('KOtZ'), n('7x/C'), n('ERkP')),
        o = n.n(i),
        l = n('t62R'),
        c = n('VUbk'),
        s = n.n(c),
        u = n('hHEM'),
        d = n('Tvzs'),
        p = n('LQrL'),
        h = n('zpdM'),
        f = n('sXY3'),
        m = n('fs1G'),
        v = Object(f.a)(d.e).reduce(function (e, t) {
          var n = r()(t, 2),
            a = n[0],
            i = n[1]
          return e.set(a, i)
        }, s.a)
      t.a = function (e) {
        var t = e.componentByType,
          n = e.contentState,
          a = u.a.initEditorState(n, { decorators: [p.d, p.c, p.e, p.a] }),
          r = t
            ? function (e) {
                return t[e.getType()] || null
              }
            : m.a
        return o.a.createElement(
          l.b,
          null,
          o.a.createElement(h.Editor, {
            blockRenderMap: v,
            blockRendererFn: r,
            editorState: a,
            onChange: m.a,
            readOnly: !0,
            webDriverTestID: 'longformRichTextComponent',
          }),
        )
      }
    },
    oEoC: function (e, t, n) {
      'use strict'
      n.d(t, 'e', function () {
        return u
      }),
        n.d(t, 'c', function () {
          return d
        }),
        n.d(t, 'b', function () {
          return p
        }),
        n.d(t, 'g', function () {
          return h
        }),
        n.d(t, 'a', function () {
          return f
        }),
        n.d(t, 'd', function () {
          return m
        }),
        n.d(t, 'f', function () {
          return g
        })
      var a = n('RhWx'),
        r = n.n(a),
        i = n('yiKp'),
        o = n.n(i),
        l =
          (n('hBpG'),
          n('7x/C'),
          n('vrRf'),
          n('KqXw'),
          n('WNMA'),
          n('M+/F'),
          n('LJOr'),
          n('tVqn'),
          n('jwue'),
          n('+oxZ'),
          n('z84I'),
          n('LW0h'),
          n('2G9S'),
          n('oQhu')),
        c = n('kIAd'),
        s = n('rHpw')
      function u(e, t) {
        var n,
          a = c.b.scoper.find(function (a) {
            if (-1 !== a.srcInputs.indexOf(t)) return (n = e.match(a.regexp))
          }),
          r = ''
        return n && (r = n && (1 === n.length ? n[0] : n[1])), a ? o()(o()({}, a.scope), {}, { src: t, q: r }) : null
      }
      function d(e, t) {
        var n = t.slice(0, e),
          a = t.slice(e, t.length),
          r = n.search(c.b.WordEnd),
          i = r >= 0 ? n.slice(r) : '',
          o = a.search(c.b.WordBoundary),
          l = i + a.slice(0, o)
        return l.trim() ? { start: r, end: e + o, word: l } : { start: -1, end: -1, word: '' }
      }
      function p() {
        return 'typeaheadFocus-'.concat(Math.random())
      }
      function h(e) {
        var t = e.altKey,
          n = e.ctrlKey,
          a = e.metaKey
        return !(t || n || a)
      }
      function f(e, t) {
        var n = []
        e.forEach(function (e) {
          var a = t.find(function (t) {
            return t.id === e.id
          })
          a && a.data && a.data.result_context ? n.push(a) : n.push(e)
        })
        var a = n.map(function (e) {
            return e.id
          }),
          i = t.filter(function (e) {
            return a.indexOf(e.id) < 0
          })
        return [].concat(n, r()(i))
      }
      var m = Object(l.a)(function (e) {
          return {
            bottom: 0,
            paddingBottom: 'calc(2.5 * '.concat(s.a.theme.spaces.space64, ')'),
            position: 'fixed',
            top: ''.concat(e, 'px'),
            transform: [{ translate3d: '0,0,0' }],
          }
        }),
        v = 0,
        g = function () {
          return 'typeaheadDropdown-'.concat((v += 1))
        }
    },
    'p+r5': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return K
      })
      n('yiKp')
      var a = n('97Jx'),
        r = n.n(a),
        i = n('m3Bd'),
        o = n.n(i),
        l = n('VrFO'),
        c = n.n(l),
        s = n('Y9Ll'),
        u = n.n(s),
        d = n('1Pcy'),
        p = n.n(d),
        h = n('5Yy7'),
        f = n.n(h),
        m = n('2VqO'),
        v = n.n(m),
        g = n('KEM+'),
        y = n.n(g),
        b = (n('2G9S'), n('ERkP')),
        w = n.n(b),
        _ = n('38/B'),
        E = n('t62R'),
        C = n('/yvb'),
        x = n('piX5'),
        I = n('3XMw'),
        S = n.n(I),
        T = n('tI3i'),
        M = n.n(T),
        k = n('oQhu'),
        R = n('rHpw'),
        P = n('aITJ'),
        L = n('MWbm'),
        O = n('n5fo'),
        D = n('5emT'),
        A = n('Oib4'),
        F = n('WtWS'),
        B = n('ioan'),
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
        z = function (e) {
          return e.length
        },
        H = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : z
          return t(e)
        },
        j = S.a.de540c32,
        W = S.a.b4abfdb3,
        K = (function (e) {
          f()(n, e)
          var t = v()(n)
          function n(e) {
            var a
            c()(this, n),
              (a = t.call(this, e)),
              y()(p()(a), '_blurOnBackspaceKeyUpForKaiOS', !1),
              y()(p()(a), '_isLabelLarge', function () {
                var e = a.state,
                  t = e.actualCount,
                  n = e.isFocused
                return !t && !n
              }),
              y()(
                p()(a),
                '_getTextInputStyle',
                Object(k.a)(function (e) {
                  return [G.root, !e && G.disabled]
                }),
              ),
              y()(p()(a), '_getTextInputType', function () {
                var e = a.props,
                  t = e.showPasswordVisibilityIcon,
                  n = e.type,
                  r = a.state.isPasswordRevealed
                return 'password' === n && t ? (r ? 'text' : 'password') : n
              }),
              y()(p()(a), '_calculateLength', function (e) {
                return H(e, a.props.calculateLength)
              }),
              y()(p()(a), '_shouldRenderDisplayCount', function () {
                var e = a.state.isFocused,
                  t = a._isFormInvalid()
                return Boolean((e || t) && a._getMaxDisplayCount())
              }),
              y()(p()(a), '_isInvalidNumber', function () {
                var e,
                  t,
                  n,
                  r,
                  i,
                  o = a.props.type,
                  l =
                    null === (e = a._textInput) || void 0 === e || null === (t = e.textInputNode) || void 0 === t
                      ? void 0
                      : t.value,
                  c =
                    null === (n = a._textInput) ||
                    void 0 === n ||
                    null === (r = n.textInputNode) ||
                    void 0 === r ||
                    null === (i = r.validity) ||
                    void 0 === i
                      ? void 0
                      : i.badInput
                return 'number' === o && '' === l && !0 === c
              }),
              y()(p()(a), '_getActualCount', function (e) {
                var t = e.length
                return a._isInvalidNumber() && (t = 1), t
              }),
              y()(p()(a), '_handleBlur', function (e) {
                var t = a.props.onBlur,
                  n = e.currentTarget.value,
                  r = a._calculateLength(n),
                  i = a._getActualCount(n)
                a.setState({ isFocused: !1, displayCount: r, actualCount: i }), t && t(e)
              }),
              y()(p()(a), '_handleChange', function (e) {
                var t = a.props.onChange,
                  n = a.state.previousValue,
                  r = e.currentTarget.value,
                  i = a._calculateLength(r),
                  o = a._getActualCount(r),
                  l = a._getAdjustedMaxLength()
                void 0 !== l && r.length > l && n.length < r.length
                  ? (e.currentTarget.value = n)
                  : (a.setState({
                      isFocused: !0,
                      displayCount: i,
                      actualCount: o,
                      previousValue: e.currentTarget.value,
                    }),
                    t && t(e))
              }),
              y()(p()(a), '_handleFocus', function () {
                var e = a.props.onFocus
                a.setState({ isFocused: !0 }), e && e()
              }),
              y()(p()(a), '_handleKeyPress', function (e) {
                var t = a.props,
                  n = t.multiline,
                  r = t.onKeyPress,
                  i = t.onSubmitEditing
                r && r(e),
                  e.isDefaultPrevented() || 'Enter' !== e.key || e.shiftKey || n || !i || (e.preventDefault(), i(e))
              }),
              y()(p()(a), '_handleKeyDown', function (e) {
                var t = a.props.onKeyDown,
                  n = 0 === a.state.displayCount
                P.b.isKaiOS() && 'Backspace' === e.key && n ? (a._blurOnBackspaceKeyUpForKaiOS = n) : t && t(e)
              }),
              y()(p()(a), '_handleKeyUp', function (e) {
                var t = a.props.onKeyUp
                P.b.isKaiOS() &&
                  'Backspace' === e.key &&
                  a._blurOnBackspaceKeyUpForKaiOS &&
                  (e.preventDefault(), a.blur()),
                  t && t(e)
              }),
              y()(p()(a), '_handlePasswordVisibilityClick', function (e) {
                a.setState(function (e) {
                  return { isPasswordRevealed: !e.isPasswordRevealed }
                })
              }),
              y()(p()(a), '_setTextInputRef', function (e) {
                a._textInput = e
              }),
              y()(p()(a), '_checkComponentPropsUsageCorrectness', function (e) {
                var t = e.defaultValue,
                  n = e.maxLength,
                  a = e.onChange,
                  r = e.validLength,
                  i = !!a,
                  o = 'string' == typeof e.value,
                  l = 'string' == typeof t
                M()(
                  !(!l && o && !i),
                  'A controlled component, a component with a value prop, must have an onChange handler. The value prop cannot be undefined.',
                ),
                  M()(!(n && r && r > n), 'Max length should be equal or greater than valid length.'),
                  M()(
                    !((void 0 !== n && n <= 0) || (void 0 !== r && r <= 0)),
                    'Set editable to false instead of limiting the valid character count to 0.',
                  )
              }),
              y()(p()(a), '_exceedsValidLength', function (e) {
                var t = a._getMaxDisplayCount()
                return !!t && e > t
              }),
              y()(p()(a), '_getMaxDisplayCount', function () {
                return a.props.validLength || a.props.maxLength
              }),
              y()(p()(a), '_getAdjustedMaxLength', function () {
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
                actualCount: z(i),
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
                      l = e.onChange,
                      c = e.validLength,
                      s = e.value
                    ;(c === r && n === o && !!a === !!l && ('string' == typeof i) === ('string' == typeof s)) ||
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
                      l = this._isFormInvalid()
                    return w.a.createElement(
                      L.a,
                      { style: [U.root, i] },
                      w.a.createElement(
                        L.a,
                        {
                          accessibilityLabel: t,
                          accessibilityRole: 'label',
                          style: [
                            x.a.border,
                            U.textInputFormStyle,
                            l && x.a.invalidBorderColor,
                            o && l && x.a.focusedBorderInvalid,
                            o && !l && x.a.focusedBorderValid,
                            !n && x.a.disabled,
                          ],
                        },
                        w.a.createElement(
                          L.a,
                          { style: U.textInputFormWrapper },
                          w.a.createElement(
                            L.a,
                            { style: U.textInputHeader },
                            this._renderLabel(),
                            this._shouldRenderDisplayCount() ? this._renderDisplayCount() : null,
                          ),
                          this._renderTextInput(),
                        ),
                      ),
                      w.a.createElement(
                        L.a,
                        { style: [U.sidePadding, U.underTextInputForm] },
                        w.a.createElement(
                          L.a,
                          { style: U.subtextWrapper },
                          r ? this._renderHelperText() : null,
                          l && a ? this._renderErrorText() : null,
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
                    return w.a.createElement(
                      E.b,
                      {
                        color: a ? 'gray700' : n,
                        numberOfLines: 1,
                        size: a ? 'headline1' : 'subtext2',
                        style: [
                          U.textInputHeaderItem,
                          a && U.placeholderText,
                          !_.a.reducedMotionEnabled && U.transition,
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
                      i = (e.style, e.type, e.validLength, o()(e, V))
                    return w.a.createElement(
                      L.a,
                      { style: G.container },
                      t && !this._isLabelLarge() ? this._renderIcon() : null,
                      w.a.createElement(
                        E.b,
                        { size: 'headline1', style: G.wrapper },
                        w.a.createElement(
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
                      ? w.a.createElement(
                          L.a,
                          { style: U.passwordVisibilityIconContainer },
                          w.a.createElement(C.a, {
                            accessibilityLabel: a ? W : j,
                            focusable: !0,
                            hoverLabel: { label: a ? W : j },
                            icon: a ? w.a.createElement(O.a, null) : w.a.createElement(D.a, null),
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
                    return w.a.createElement(
                      L.a,
                      { accessibilityLiveRegion: 'polite' },
                      w.a.createElement(
                        E.b,
                        { color: 'gray700', size: 'subtext2', style: U.subtext },
                        this.props.helperText,
                      ),
                    )
                  },
                },
                {
                  key: '_renderErrorText',
                  value: function () {
                    return w.a.createElement(
                      L.a,
                      { accessibilityLiveRegion: 'assertive' },
                      w.a.createElement(
                        E.b,
                        { color: 'red500', size: 'subtext2', style: U.subtext },
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
                      a = t && S.a.ia24dc8c(t),
                      r = S.a.ia24dc8c(e)
                    return w.a.createElement(
                      L.a,
                      { accessibilityLiveRegion: 'polite', style: [U.textInputHeaderItem, U.displayCount] },
                      w.a.createElement(
                        E.b,
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
                      n = [U.icon, t && U.focusedIcon]
                    return e && w.a.createElement(e, { style: n })
                  },
                },
                {
                  key: '_renderValidationIcon',
                  value: function () {
                    return this._isFormInvalid()
                      ? w.a.createElement(A.a, { style: [U.validationIcon, x.a.invalidColor] })
                      : w.a.createElement(F.a, { style: [U.validationIcon, x.a.validColor] })
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
                      r = 'string' == typeof a ? H(a, n) : 0
                    return 'string' == typeof a && r !== t.displayCount
                      ? { displayCount: r, actualCount: a.length }
                      : null
                  },
                },
              ],
            ),
            n
          )
        })(w.a.Component)
      y()(K, 'defaultProps', { autoComplete: 'on', autoCorrect: !0, autoFocus: !1, editable: !0, invalid: !1 }),
        (K.propTypes = {})
      var G = R.a.create(function (e) {
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
        U = R.a.create(function (e) {
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
        l = n('1Pcy'),
        c = n.n(l),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('2VqO'),
        p = n.n(d),
        h = n('KEM+'),
        f = n.n(h),
        m = (n('2G9S'), n('ERkP')),
        v = n.n(m),
        g = n('HPNB'),
        y = n('9HgX'),
        b = n('3XMw'),
        w = n.n(b),
        _ = n('LCtV'),
        E = n('eyty'),
        C = (n('lTEL'), n('7x/C'), n('JtPf'), n('87if'), n('kYxP'), n('zb92')),
        x = n('RuTB'),
        I = Object(C.a)({
          loader: function () {
            return Promise.all([n.e(0), n.e(8), n.e(179)])
              .then(n.bind(null, 'EOJ2'))
              .then(function (e) {
                return { default: e.__DANGEROUS_IMPORT_VIDEOPLAYER__ }
              })
          },
          renderPlaceholder: function (e, t) {
            return v.a.createElement(x.a, { hasError: e, onRetry: t })
          },
        }),
        S = n('yiKp'),
        T = n.n(S),
        M = n('m3Bd'),
        k = n.n(M),
        R = (n('z84I'), n('k/Ka')),
        P = n('eXeu'),
        L = n('iOGT'),
        O = ['children', 'dataSaverMode', 'getVideoRef', 'style', 'variants'],
        D = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              f()(c()(e), '_setVideoRef', function (t) {
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
                    i = k()(e, O),
                    o = Object(L.b)(r, n ? L.a.MEDIUM : L.a.HIGH) || [],
                    l = Object(P.f)(
                      o.map(function (e) {
                        return { src: e.url, type: e.content_type }
                      }),
                    )
                  return Object(R.a)(
                    'video',
                    T()(
                      T()({}, i),
                      {},
                      {
                        children: [
                          l.map(function (e) {
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
      f()(D, 'defaultProps', { dataSaverMode: !1, variants: [] })
      var A = n('62wY'),
        F = n('sjK1'),
        B = n('v6aA'),
        V = n('cHvH'),
        z = n('mXq/'),
        H = n('/yvb'),
        j = n('a6qo'),
        W = n('rHpw'),
        K = n('hOZg'),
        G = n('GCOQ'),
        U = n('tuke'),
        N = n('U+bB'),
        X = n('MWbm'),
        Y = n('+/sI'),
        q = w.a.gd80afba,
        J = w.a.j322caee,
        Z = w.a.abd845fd,
        Q = w.a.df1b0707,
        $ = w.a.cd959e5b,
        ee = w.a.e68b09b4,
        te = w.a.add55c97,
        ne = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              f()(c()(e), 'state', { isVideoPaused: !0, playGif: !1 }),
              f()(c()(e), '_handleGifClick', function () {
                e.setState({ playGif: !e.state.playGif })
              }),
              f()(c()(e), '_handleMediaPreviewLayout', function (t) {
                var n = e.props,
                  a = n.mediaItem,
                  r = n.resizeIfNeeded,
                  i = a.mediaFile || a.externalMediaDetails
                if (i) {
                  var o = t.nativeEvent.layout,
                    l = o.height,
                    c = o.width,
                    s = i.height,
                    u = i.width / s
                  Math.abs(u - c / l) > 0.05 &&
                    e._mediaContainer &&
                    ('width' === r
                      ? e._mediaContainer.setNativeProps({ style: { width: l * u } })
                      : 'height' === r && e._mediaContainer.setNativeProps({ style: { height: c / u } }))
                }
              }),
              f()(c()(e), '_handleVideoOnPlay', function (t) {
                e.setState({ isVideoPaused: !1 })
              }),
              f()(c()(e), '_handleVideoOnPause', function (t) {
                e.setState({ isVideoPaused: !0 })
              }),
              f()(c()(e), '_setMediaContainerRef', function (t) {
                e._mediaContainer = t
              }),
              f()(c()(e), '_setVideoRef', function (t) {
                e._video = t
              }),
              f()(c()(e), 'playVideo', function () {
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
              f()(c()(e), 'pauseVideo', function () {
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
                    l = n.onEdit,
                    c = n.onEditSensitiveWarning,
                    s = n.onRemove,
                    u = n.style,
                    d = n.withAltTextLabel,
                    p = n.withCloseButton,
                    h = n.withEditButton,
                    f = n.withEditIcon,
                    m = n.withEditSensitiveWarningButton,
                    b = this.state.playGif,
                    w = o.externalMediaDetails && o.externalMediaDetails.mediaType === y.a,
                    _ = w || (i && o.mediaFile && o.mediaFile.isGif),
                    E = !(null === (e = o.mediaFile) || void 0 === e || !e.isVideo)
                  return v.a.createElement(V.a, null, function (e) {
                    var n = e.windowWidth,
                      i = void 0 !== f ? f : !g.a.isTwoColumnLayout(n)
                    return v.a.createElement(
                      X.a,
                      {
                        accessibilityLabel: a || te,
                        accessibilityRole: r,
                        onLayout: t._handleMediaPreviewLayout,
                        ref: t._setMediaContainerRef,
                        style: [u, ae.cursor, w && ae.gifPlayButton],
                      },
                      t._renderPreview(),
                      w &&
                        !b &&
                        v.a.createElement(z.a, { accessibilityLabel: Q, onPress: t._handleGifClick, size: 'small' }),
                      p
                        ? v.a.createElement(H.a, {
                            accessibilityLabel: $,
                            hoverLabel: { label: ee },
                            icon: v.a.createElement(K.a, null),
                            onPress: s,
                            size: 'small',
                            style: ae.close,
                            type: 'onMediaDominantColorFilled',
                          })
                        : null,
                      _ ? v.a.createElement(Y.c, { type: Y.a }) : null,
                      d && !E ? v.a.createElement(j.a, { align: 'left', altLabel: a }) : null,
                      h
                        ? v.a.createElement(
                            X.a,
                            { style: [ae.editMedia, E ? ae.editVideo : ae.editImage] },
                            m
                              ? v.a.createElement(H.a, {
                                  accessibilityLabel: J,
                                  icon: v.a.createElement(G.a, { style: ae.editSensitiveWarningIcon }),
                                  onPress: c,
                                  size: 'small',
                                  style: ae.editSensitiveWarningButton,
                                  type: 'onMediaDominantColorFilled',
                                })
                              : null,
                            v.a.createElement(
                              H.a,
                              {
                                accessibilityLabel: q,
                                icon: i ? v.a.createElement(U.a, null) : void 0,
                                onPress: l,
                                size: i ? 'xSmall' : 'small',
                                type: 'onMediaDominantColorFilled',
                              },
                              i ? void 0 : Z,
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
                    : v.a.createElement(X.a, { style: W.a.absoluteFill }, this._renderImagePreview())
                },
              },
              {
                key: '_renderGifPreview',
                value: function (e, t) {
                  var n = { uri: this.state.playGif ? e : t }
                  return v.a.createElement(
                    X.a,
                    { onClick: this._handleGifClick, style: W.a.absoluteFill },
                    v.a.createElement(N.a, { resizeMode: 'cover', source: n, style: ae.video }),
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
                  return v.a.createElement(_.b, {
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
                  if (this._configurableVideoPlayerEnabled && a instanceof F.c) {
                    var l = Object(E.h)(a.fileHandle) ? [{ src: t, type: e }] : [],
                      c = ''.concat(n)
                    return v.a.createElement(I, {
                      mediaFile: a,
                      mediaId: c,
                      subtitles: o,
                      trimData: null == i ? void 0 : i.trimData,
                      variants: l,
                    })
                  }
                  var s,
                    u = Object(E.h)(a.fileHandle) ? [{ content_type: e, url: t }] : [],
                    d =
                      (null == o || null === (s = o.upload) || void 0 === s ? void 0 : s.mediaFile) instanceof A.b
                        ? o.upload.mediaFile.vtt
                        : void 0
                  return v.a.createElement(
                    D,
                    {
                      autoPlay: !1,
                      controls: !0,
                      getVideoRef: this._setVideoRef,
                      loop: !0,
                      muted: !0,
                      onPause: this._handleVideoOnPause,
                      onPlay: this._handleVideoOnPlay,
                      playsInline: !0,
                      poster: a instanceof F.c ? a.thumbnail : '',
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
      f()(ne, 'contextType', B.a),
        f()(ne, 'defaultProps', {
          enableGif: !0,
          withCloseButton: !0,
          withAltTextLabel: !1,
          withEditButton: !1,
          withEditSensitiveWarningButton: !1,
        })
      var ae = W.a.create(function (e) {
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
    rFBM: function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        l = n('1Pcy'),
        c = n.n(l),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('2VqO'),
        p = n.n(d),
        h = n('KEM+'),
        f = n.n(h),
        m = (n('2G9S'), n('hCOa'), n('87if'), n('ERkP')),
        v = n.n(m),
        g = n('rHpw'),
        y = n('k/Ka'),
        b = n('MWbm'),
        w = function (e) {
          return Object(y.a)('div', e)
        },
        _ = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              f()(c()(e), '_dragEnterCount', 0),
              f()(c()(e), 'state', { active: !1 }),
              f()(c()(e), '_handleDragDrop', function (t) {
                var n = e.props.onFilesAdded
                t.preventDefault(), n(Array.from(t && t.dataTransfer.files)), e._updateDragCount(0)
              }),
              f()(c()(e), '_handleDragEnter', function (t) {
                var n = e.props.onDragEnter
                t.preventDefault(), n && n(), e._updateDragCount(e._dragEnterCount + 1)
              }),
              f()(c()(e), '_handleDragLeave', function (t) {
                t.preventDefault(), e._updateDragCount(e._dragEnterCount - 1)
              }),
              f()(c()(e), '_handleDragOver', function (e) {
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
                    i = t ? E.dragBorderValid : E.dragBorderInvalid
                  return v.a.createElement(
                    w,
                    {
                      onDragEnter: this._handleDragEnter,
                      onDragLeave: this._handleDragLeave,
                      onDragOver: this._handleDragOver,
                      onDrop: this._handleDragDrop,
                      style: [E.root, a, r && i],
                    },
                    v.a.createElement(b.a, { style: E.inner }, 'function' == typeof n ? n(r) : n),
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
      f()(_, 'defaultProps', { allowDragDrop: !0 })
      var E = g.a.create(function (e) {
        return {
          root: { display: 'flex', flexDirection: 'column' },
          dragBorderValid: { borderStyle: 'dashed', borderWidth: e.spaces.space2, borderColor: e.colors.primary },
          dragBorderInvalid: { borderStyle: 'dashed', borderWidth: e.spaces.space2, borderColor: e.colors.magenta500 },
          inner: { flexGrow: 1 },
        }
      })
      t.a = _
    },
    taB0: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'rootDetailScreenTitle', function () {
          return g
        }),
        n.d(t, 'TwitterArticleListScreen', function () {
          return y
        })
      var a = n('ERkP'),
        r = n.n(a),
        i = n('RqPI'),
        o = n('6au1'),
        l = n('rxPX'),
        c = n('0KEI'),
        s = Object(l.a)()
          .propsFromState(function () {
            return { loggedInUserId: i.q }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(c.createLocalApiErrorHandlerWithContextFactory)(
                'COMPOSE_TWITTER_ARTICLE_BUTTON',
              ),
              createTwitterArticle: o.a.create,
            }
          }),
        u = n('Cp2k'),
        d = n('M2mT'),
        p = n('c6pJ'),
        h = n('Vc8w'),
        f = n('MWbm'),
        m = n('/yvb'),
        v = n('rHpw'),
        g = 'Twitter Articles',
        y = function (e) {
          var t = e.createLocalApiErrorHandler,
            n = e.createTwitterArticle,
            a = e.history,
            i = e.loggedInUserId
          Object(h.a)()
          var o = r.a.createElement(m.a, {
            accessibilityLabel: 'create',
            icon: w,
            onPress: function () {
              n('')
                .then(function (e) {
                  if ('string' == typeof (null == e ? void 0 : e.result)) {
                    var t,
                      n,
                      r =
                        null == e ||
                        null === (t = e.entities) ||
                        void 0 === t ||
                        null === (n = t.twitterArticles) ||
                        void 0 === n
                          ? void 0
                          : n[e.result].rest_id
                    r && a.push('/i/twitter-article-composer/edit/'.concat(r))
                  }
                })
                .catch(t({ showToast: !0 }))
            },
            type: 'primaryText',
          })
          return i
            ? r.a.createElement(
                d.a,
                { rightControl: o, screenType: 'secondaryRoot', title: g },
                r.a.createElement(
                  f.a,
                  { style: b.container },
                  r.a.createElement(p.a, { linkToEditScreen: !0, publishedOnly: !1, userId: i }),
                ),
              )
            : null
        },
        b = v.a.create(function (e) {
          return { container: { backgroundColor: e.colors.cellBackground, flexGrow: 1 } }
        }),
        w = r.a.createElement(u.a, null),
        _ = s(y)
      t.default = _
    },
    tuke: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        l = n('Lsrn'),
        c = n('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [l.a.root, e.style],
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
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    ude7: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return s
      })
      n('7x/C'), n('JtPf')
      var a = n('A0bJ'),
        r = n('hJBK'),
        i = n('1auM'),
        o = 1,
        l = 2,
        c = 3,
        s = function (e) {
          if (Object(i.b)(e)) {
            if (e.isGif) {
              var t = e.height,
                n = e.img,
                s = e.orientation,
                u = e.width
              return Object(r.b)(n, u, t, s).then(
                function (e) {
                  return Object(r.a)(e)
                },
                function (e) {
                  throw new a.a('Gif preview could not be generated', c)
                },
              )
            }
            var d = new a.a('The provided image must be a gif', l)
            return Promise.reject(d)
          }
          var p = new a.a('The provided file is not a valid image', o)
          return Promise.reject(p)
        }
    },
    uy10: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'emptyStateHeaderLabel', function () {
          return p
        }),
        n.d(t, 'emptyStateMessage', function () {
          return h
        }),
        n.d(t, 'emptyStateButtonText', function () {
          return f
        }),
        n.d(t, 'errorToastText', function () {
          return m
        }),
        n.d(t, 'TwitterArticleComposerEmptyState', function () {
          return v
        })
      var a = n('ERkP'),
        r = n.n(a),
        i = n('6au1'),
        o = n('rxPX'),
        l = n('0KEI'),
        c = Object(o.a)().propsFromActions(function () {
          return {
            createLocalApiErrorHandler: Object(l.createLocalApiErrorHandlerWithContextFactory)(
              'CREATE_TWITTER_ARTICLE_BUTTON',
            ),
            createTwitterArticle: i.a.create,
          }
        }),
        s = n('zCf4'),
        u = n('FIs5'),
        d = n('rHpw'),
        p = "You don't have a draft selected",
        h = 'Choose one from your existing drafts, or start a new one.',
        f = 'New draft',
        m = 'There was an error creating a new draft',
        v = function (e) {
          var t = e.createLocalApiErrorHandler,
            n = e.createTwitterArticle,
            a = Object(s.f)()
          return r.a.createElement(u.a, {
            buttonLink: '/i/twitter-article-composer',
            buttonText: f,
            header: p,
            message: h,
            onButtonPress: function () {
              n('', { contentStateJson: '' })
                .then(function (e) {
                  var t
                  null != e &&
                    e.result &&
                    'string' == typeof e.result &&
                    null !== (t = e.entities) &&
                    void 0 !== t &&
                    t.twitterArticles[e.result] &&
                    a.push('/i/twitter-article-composer/edit/'.concat(e.entities.twitterArticles[e.result].rest_id))
                })
                .catch(t({ showToast: !0 }))
            },
            style: g.root,
          })
        },
        g = d.a.create(function (e) {
          return {
            root: { alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: e.colors.cellBackground },
          }
        }),
        y = c(v)
      t.default = y
    },
    wpu3: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return f
      }),
        n.d(t, 'b', function () {
          return v
        }),
        n.d(t, 'c', function () {
          return g
        }),
        n.d(t, 'd', function () {
          return y
        })
      var a = n('RhWx'),
        r = n.n(a),
        i = n('KEM+'),
        o = n.n(i),
        l =
          (n('jwue'),
          n('7x/C'),
          n('+oxZ'),
          n('ho0z'),
          n('jQ3i'),
          n('x4t0'),
          n('LW0h'),
          n('2G9S'),
          n('kFen'),
          n('qd3W'),
          n('z84I'),
          n('5BYb'),
          n('DfhM'),
          n('KqXw'),
          n('Ysgh'),
          n('hBpG'),
          n('oEoC')),
        c = n('1auM'),
        s = n('kIAd'),
        u = n('VAyw'),
        d = n('/Ikv'),
        p = n('s1N3'),
        h = n('lnti'),
        f = function (e) {
          var t,
            n = e.excludeReplyUser,
            a = e.inReplyToStatus,
            i = e.loggedInUserId,
            l = a.retweeted_status,
            c = l || a,
            s = c.entities,
            d = c.unmentioned_user_ids,
            f = c.user,
            v = l ? l.user : {},
            g = l ? a.user : {},
            y = (null == s ? void 0 : s.user_mentions) || [],
            b = u.a.mergeTaggedUsers((null == s ? void 0 : s.media) || []),
            w = m(l || a) || {},
            _ = ((t = {}), o()(t, v.id_str, v), o()(t, g.id_str, g), o()(t, f.id_str, f), o()(t, w.id_str, w), t)
          y.forEach(function (e) {
            _[e.id_str] = e
          }),
            b.forEach(function (e) {
              var t = e.name,
                n = e.screen_name,
                a = e.user_id
              _[a] = { id_str: a, name: t, screen_name: n }
            })
          var E = function (e) {
              var t = null == d ? void 0 : d.includes(e.id_str),
                n = e.id_str === f.id_str
              return !t || n ? [e.id_str] : []
            },
            C = Object(p.a)(
              Object(h.a)(
                [].concat(
                  r()(E(v)),
                  r()(E(g)),
                  [f.id_str],
                  r()(
                    y.flatMap(function (e) {
                      return E(e)
                    }),
                  ),
                  r()(
                    b.map(function (e) {
                      return e.user_id
                    }),
                  ),
                ),
              ),
            ).filter(function (e) {
              return e !== i
            }),
            x = i && f.id_str === i ? [i].concat(r()(C)) : C
          return (
            n &&
              (x = x.filter(function (e) {
                return e !== f.id_str
              })),
            x.map(function (e) {
              return _[e]
            })
          )
        },
        m = function (e) {
          var t = e.card,
            n = null
          if (t) {
            var a = d.a.getBindingValue(t.binding_values, 'site')
            a && t.users && (n = t.users[a.id_str])
          }
          return n
        },
        v = function (e) {
          var t = e.maxNumberOfPhotos
          return function (e) {
            if (0 === e.length) return !0
            var n = e.some(function (e) {
                return !!e.externalMediaDetails
              }),
              a =
                !n &&
                e.some(function (e) {
                  return e.mediaFile && e.mediaFile.isGif
                }),
              r = e.some(function (e) {
                return e.mediaFile && !(e.mediaFile instanceof c.a) && e.mediaFile.isVideo
              })
            if (a || n || r) return 1 === e.length
            var i = e.length <= t,
              o = e.every(function (e) {
                return e.mediaFile && e.mediaFile.isImage
              })
            return i && o
          }
        },
        g = v({ maxNumberOfPhotos: 4 }),
        y = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = e.split(s.b.WordBoundary)
          return (
            t && n.pop(),
            !!n.find(function (e) {
              var t = Object(l.e)(e, 'compose')
              return t && 'users' === t.result_type
            })
          )
        }
    },
  },
])
//# sourceMappingURL=WIPED
