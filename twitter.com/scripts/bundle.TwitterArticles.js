;(window.webpackJsonp = window.webpackJsonp || []).push([
  [106, 18, 177],
  {
    '1LtL': function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return b
      })
      var a = n('ERkP'),
        r = n.n(a),
        i = n('QIgh'),
        o = n('dwig'),
        l = n('0+qk'),
        c = n('3XMw'),
        s = n.n(c),
        u = n('7BdX'),
        d = n('fTQJ'),
        p = n('k89r'),
        f = n('FIs5'),
        h = n('mw9i'),
        m =
          (n('yH/f'),
          n('2G9S'),
          Object.freeze({
            AlarmClock: 'alarm-clock',
            BabyBirdWithPoolFloat: 'baby-bird-with-pool-float',
            Bell: 'bell',
            Binoculars: 'binoculars',
            BookInBirdCage: 'book-in-bird-cage',
            CalculatorWithEggPaper: 'calculator-with-egg-paper',
            CrackedEggMicrophones: 'cracked-egg-microphones',
            Emoji: 'emoji',
            FallenIceCreamCone: 'fallen-ice-cream-cone',
            GoldfishWithMailbox: 'goldfish-with-mailbox',
            HatchedBabyChick: 'hatched-baby-chick',
            JumperCables: 'jumper-cables',
            MaskedDollHeadWithCamera: 'masked-doll-head-with-camera',
            Megaphone: 'megaphone',
            NoEntrySign: 'no-entry-sign',
            OwlTurnedHead: 'owl-turned-head',
            PaintCoveredHand: 'paint-covered-hand',
            Parrot: 'parrot',
            PortraitBustWearingSunglasses: 'portrait-bust-wearing-sunglasses',
            RoosterHead: 'rooster-head',
            RubberChicken: 'rubber-chicken',
            Turtle: 'turtle',
            UnfinishedPotatoHeads: 'unfinished-potato-heads',
            YellowBirdsPowerLine: 'yellow-birds-power-line',
          }))
      function v(e, t) {
        return 'https://abs.twimg.com/sticky/illustrations/empty-states/'.concat(e, '-').concat(t, '.v1.png')
      }
      var g = s.a.cd343e15,
        y = s.a.f47e39e8,
        b = function () {
          return r.a.createElement(f.a, {
            header: g,
            imageVariants:
              ((e = m.BookInBirdCage),
              [
                { height: 200, uri: v(e, '400x200'), width: 400 },
                { height: 400, uri: v(e, '800x400'), width: 800 },
                { height: 600, uri: v(e, '1200x600'), width: 1200 },
              ]),
            message: y,
          })
          var e
        }
      t.a = function (e) {
        var t = e.bookmarkFolderId,
          n = e.history,
          a = e.title,
          c = e.urtModule,
          s = r.a.createElement(l.a, { history: n }),
          f = Object(p.a)()
        return r.a.createElement(
          o.a,
          { component: h.a, fab: s },
          r.a.createElement(d.a, {
            entryConfiguration: Object(i.createConfiguration)({ withRemoveFromBookmarks: !0, bookmarkFolderId: t }),
            module: c,
            prerollDisplayLocation: u.c.OTHER,
            renderEmptyState: function () {
              return f.scribeAction('empty'), b()
            },
            title: a,
          }),
        )
      }
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
        f = n('KEM+'),
        h = n.n(f),
        m = (n('Rqga'), n('2G9S'), n('ERkP')),
        v = n.n(m),
        g = n('/yvb'),
        y = n('3XMw'),
        b = n.n(y),
        E = n('3rX5'),
        w = n('rHpw'),
        C = n('MWbm'),
        _ = w.a.create(function (e) {
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
          return v.a.createElement(C.a, {
            pointerEvents: 'none',
            style: [_.mask, { width: a, height: n }, t && _.circle],
          })
        },
        k = n('ZvMt'),
        x = n('97Jx'),
        T = n.n(x),
        I = n('m3Bd'),
        M = n.n(I),
        P = n('CHgo'),
        L = n('7ep7'),
        R = ['children', 'onPanEnd', 'onPanMove', 'onPinchMove', 'onWheel'],
        O = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n(e) {
            var a
            return (
              r()(this, n),
              (a = t.call(this, e)),
              h()(c()(a), '_previousTouchDistance', 0),
              h()(c()(a), '_previousPositionX', 0),
              h()(c()(a), '_previousPositionY', 0),
              h()(c()(a), '_centerPosition', { x: 0, y: 0 }),
              h()(c()(a), '_panResponder', {}),
              h()(c()(a), '_setRef', function (e) {
                var t = a.props,
                  n = t.onPanEnd,
                  r = t.onPanMove,
                  i = t.onPinchMove,
                  o = t.onWheel
                if (e) {
                  ;(r || n || i) && (a._removeTouchMoveToScrollListener = Object(P.a)(e, a._preventDefaultEvent, !1)),
                    o && (a._removeScrollToScaleListener = Object(P.b)(e, a._preventDefaultEvent, !1))
                  var l = e.getBoundingClientRect()
                  a._centerPosition = { x: l.width / 2 + l.left, y: l.height / 2 + l.top }
                }
              }),
              h()(c()(a), '_preventDefaultEvent', function (e) {
                e.preventDefault()
              }),
              h()(c()(a), '_handlePanResponderMove', function (e, t) {
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
                      f = a._previousPositionX ? d - a._previousPositionX : 0,
                      h = a._previousPositionY ? p - a._previousPositionY : 0,
                      m = a._previousTouchDistance ? s - a._previousTouchDistance : 0
                    ;(a._previousPositionX = d), (a._previousPositionY = p), (a._previousTouchDistance = s)
                    var v = a._centerPosition
                    l(m, v.x - d, v.y - p, f, h)
                  }
                } else o && o(t.dx, t.dy)
                document.addEventListener('selectstart', a._preventDefaultEvent, !1)
              }),
              h()(c()(a), '_handlePanResponderEnd', function (e, t) {
                a.props.onPanEnd && a.props.onPanEnd(t.dx, t.dy),
                  a.props.onPinchMove && (a._previousTouchDistance = 0),
                  (a._previousPositionX = 0),
                  (a._previousPositionY = 0),
                  a._removeSelectStartListener()
              }),
              h()(c()(a), '_handleWheel', function (e) {
                var t = e.clientX,
                  n = e.clientY,
                  r = e.deltaX,
                  i = e.deltaY,
                  o = a._centerPosition,
                  l = o.x - t,
                  c = o.y - n
                a.props.onWheel && a.props.onWheel(r, i, l, c)
              }),
              (a._panResponder = L.a.create({
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
                    t = (e.children, e.onPanEnd, e.onPanMove, e.onPinchMove, e.onWheel, M()(e, R))
                  return v.a.createElement(
                    C.a,
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
        B = n('rOXj'),
        A = n('aITJ'),
        F = n('yiKp'),
        j = n.n(F),
        H = n('Lsrn'),
        z = n('k/Ka'),
        U = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(z.a)(
            'svg',
            j()(
              j()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [H.a.root, e.style],
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
      var W = U,
        V = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(z.a)(
            'svg',
            j()(
              j()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [H.a.root, e.style],
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
      V.metadata = { width: 24, height: 24 }
      var K = V,
        G = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(z.a)(
            'svg',
            j()(
              j()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [H.a.root, e.style],
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
      var N = G,
        X = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(z.a)(
            'svg',
            j()(
              j()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [H.a.root, e.style],
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
        J = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(z.a)(
            'svg',
            j()(
              j()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [H.a.root, e.style],
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
      J.metadata = { width: 24, height: 24 }
      var q = J,
        Q = b.a.d85bc1b8,
        Z = b.a.f596ace8,
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
              h()(c()(a), '_previousLeft', 0),
              h()(c()(a), '_previousTop', 0),
              h()(c()(a), '_panStyles', { top: 0, left: 0 }),
              h()(c()(a), '_shouldShowZoomControl', function () {
                return (!A.b.isMobileOS() || !B.a.isTouchSupported()) && a.props.withZoomControl
              }),
              h()(c()(a), '_renderControls', function () {
                var e = a.props,
                  t = e.image,
                  n = e.withAspectRatioOptions,
                  r = a.state.aspectRatio,
                  i = t.width / t.height,
                  o = a._shouldShowZoomControl()
                return n || o
                  ? v.a.createElement(
                      C.a,
                      { style: oe.controlsContainer },
                      n
                        ? v.a.createElement(
                            C.a,
                            { style: oe.ratioContainer },
                            v.a.createElement(g.a, {
                              accessibilityLabel: Z,
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
                              icon: v.a.createElement(K, null),
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
                            C.a,
                            { style: oe.zoomContainer },
                            v.a.createElement(D.a, {
                              accessibilityLabel: Q,
                              max: a._maxScale,
                              maxIcon: v.a.createElement(Y, { style: oe.icon }),
                              min: 0,
                              minIcon: v.a.createElement(q, { style: oe.icon }),
                              onChange: a._handleScaleChange,
                              step: 'any',
                              value: a.state.imageScale,
                            }),
                          )
                        : null,
                    )
                  : null
              }),
              h()(c()(a), '_setImageRef', function (e) {
                a._imageRef = e
              }),
              h()(c()(a), '_handleScaleChange', function (e) {
                a.setState({ imageScale: e })
              }),
              h()(c()(a), '_getImageDimensions', function () {
                var e = a.state.imageScale,
                  t = a.props.image.width / a.props.image.height,
                  n = a._getMaskDimensions(),
                  r = n.height,
                  i = n.width,
                  o = k.a.getCoverDimensions({ width: i, height: r }, t),
                  l = o.height
                return { width: o.width * Math.pow(2, e), height: l * Math.pow(2, e) }
              }),
              h()(c()(a), '_getMaskDimensions', function () {
                var e = a.state,
                  t = e.aspectRatio,
                  n = e.containerHeight,
                  r = e.containerWidth,
                  i = k.a.getContainDimensions({ width: r - 50, height: n - 50 }, t),
                  o = i.height
                return { width: i.width, height: o }
              }),
              h()(c()(a), '_handleLayout', function (e) {
                var t = e.nativeEvent.layout,
                  n = t.height,
                  r = t.width
                a.state.containerHeight || a.state.containerWidth
                  ? a.setState({ containerHeight: n, containerWidth: r })
                  : (a.setState({ containerHeight: n, containerWidth: r }), a._setDefaultCropData())
              }),
              h()(c()(a), '_setDefaultCropData', function () {
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
              h()(c()(a), '_handleWheel', function (e, t, n, r) {
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
              h()(c()(a), '_handlePanMove', function (e, t) {
                ;(a._panStyles.left = a._previousLeft + e),
                  (a._panStyles.top = a._previousTop + t),
                  a._updateNativeStyles(),
                  a._adjustToInBounds()
              }),
              h()(c()(a), '_handlePanEnd', function (e, t) {
                ;(a._previousLeft = a._panStyles.left), (a._previousTop = a._panStyles.top)
              }),
              h()(c()(a), '_handlePinchMove', function (e, t, n, r, i) {
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
              h()(c()(a), '_adjustToInBounds', function () {
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
              h()(c()(a), '_updateNativeStyles', function () {
                var e = a._panStyles,
                  t = e.left,
                  n = e.top
                a._imageRef &&
                  a._imageRef.setNativeProps({
                    style: { transform: [{ translate3d: ''.concat(t, 'px, ').concat(n, 'px, 0') }] },
                  })
              }),
              h()(c()(a), '_getUnscaledCropData', function () {
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
              h()(c()(a), '_setAspectRatio', function (e) {
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
                    C.a,
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
                            v.a.createElement(E.a, {
                              ref: this._setImageRef,
                              source: { uri: n.src, width: o, height: i },
                              style: oe.image,
                            }),
                            v.a.createElement(S, { circle: t, height: c, width: s }),
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
      h()(ie, 'defaultProps', { circle: !1, withZoomControl: !0 })
      var oe = w.a.create(function (e) {
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
        l = n('5Yy7'),
        c = n.n(l),
        s = n('2VqO'),
        u = n.n(s),
        d = n('KEM+'),
        p = n.n(d),
        f = (n('1t7P'), n('jQ/y'), n('uFXj'), n('ERkP')),
        h = n.n(f),
        m = n('LCtV'),
        v = n('3XMw'),
        g = n.n(v),
        y = n('VPdC'),
        b = n('pKoL'),
        E = n('MWbm'),
        w = n('t62R'),
        C = n('rFBM'),
        _ = n('/yvb'),
        S = n('9Xij'),
        k = n('rHpw'),
        x = n('hOZg'),
        T = n('Mbn/'),
        I = n('T8pk'),
        M = g.a.b87ca51a,
        P = g.a.eebff22c,
        L = (function (e) {
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
                    n = e.description,
                    a = e.innerStyle,
                    r = e.maskStyle,
                    i = e.mediaItem,
                    o = e.onAddMediaFiles,
                    l = e.onCrop,
                    c = e.onRemove,
                    s = e.rootStyle,
                    u = e.withDragDrop,
                    d = i && !i.uploader,
                    p = h.a.createElement(
                      h.a.Fragment,
                      null,
                      this._renderPreview(),
                      d
                        ? null
                        : h.a.createElement(
                            h.a.Fragment,
                            null,
                            h.a.createElement(E.a, { style: [O.mask, r, R[t]] }),
                            h.a.createElement(
                              E.a,
                              { style: [O.overlaidContent, a] },
                              h.a.createElement(
                                E.a,
                                { style: O.buttonsContainer },
                                this._renderMediaEdit(),
                                l ? this._renderMediaCrop() : null,
                                c ? this._renderMediaRemove() : null,
                              ),
                              n
                                ? h.a.createElement(
                                    w.b,
                                    { color: 'gray700', size: 'subtext1', style: O.description },
                                    n,
                                  )
                                : null,
                            ),
                          ),
                    )
                  return h.a.createElement(
                    E.a,
                    { style: [O.container, s, R[t]] },
                    u && o ? h.a.createElement(C.a, { onFilesAdded: o, style: [O.dragDropContainer, R[t]] }, p) : p,
                  )
                },
              },
              {
                key: '_renderMediaRemove',
                value: function () {
                  var e = this.props.onRemove
                  return h.a.createElement(_.a, {
                    accessibilityLabel: M,
                    hoverLabel: { label: M },
                    icon: h.a.createElement(x.a, null),
                    onPress: e,
                    size: 'large',
                    style: O.buttonLeftPadding,
                    type: 'onMediaDominantColorFilled',
                  })
                },
              },
              {
                key: '_renderMediaCrop',
                value: function () {
                  var e = this.props.onCrop
                  return h.a.createElement(_.a, {
                    accessibilityLabel: P,
                    icon: h.a.createElement(T.a, null),
                    onPress: e,
                    size: 'large',
                    style: O.buttonLeftPadding,
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
                    o = h.a.createElement(I.a, null)
                  return r
                    ? h.a.createElement(y.a, {
                        acceptGifs: t,
                        acceptVideo: n,
                        accessibilityLabel: a,
                        icon: o,
                        onChange: r,
                        size: 'large',
                        style: O.mediaPicker,
                        type: 'onMediaDominantColorFilled',
                      })
                    : h.a.createElement(_.a, {
                        accessibilityLabel: a,
                        icon: o,
                        onPress: i,
                        size: 'large',
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
                    ? h.a.createElement(
                        S.a,
                        { ratio: t },
                        h.a.createElement(b.a, {
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
        })(h.a.Component)
      p()(L, 'defaultProps', { acceptGifs: !1, acceptVideo: !1, aspectRatio: 1, borderRadius: m.a.NONE })
      var R = k.a.create(function (e) {
          return {
            infinite: { borderRadius: e.borderRadii.infinite },
            medium: { borderRadius: e.borderRadii.small },
            none: { borderRadius: e.borderRadii.none },
          }
        }),
        O = k.a.create(function (e) {
          return {
            mediaPreview: { height: '100%' },
            overlaidContent: {
              alignItems: 'center',
              height: '100%',
              justifyContent: 'center',
              opacity: 0.75,
              position: 'absolute',
              top: 0,
              width: '100%',
            },
            buttonsContainer: { alignItems: 'center', flexDirection: 'row', justifyContent: 'center' },
            buttonLeftPadding: { marginLeft: e.spaces.space20 },
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
            mediaPicker: { margin: 0 },
            description: { marginTop: e.spaces.space16 },
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
          return U
        }),
        n.d(t, 'TwitterArticleScreen', function () {
          return W
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
        f = function (e, t) {
          var n,
            a = p(e, t),
            r = null == a || null === (n = a.metadata) || void 0 === n ? void 0 : n.authorResults.result
          return 'User' === (null == r ? void 0 : r.__typename) ? (null == r ? void 0 : r.rest_id) : void 0
        },
        h = function (e, t) {
          var n = f(e, t)
          return n ? l.e.select(e, n) : void 0
        },
        m = function (e, t) {
          var n = (function (e, t) {
              var n = d(0, t)
              return o.a.selectFetchStatus(e, n)
            })(e, t),
            a = (function (e, t) {
              var n = f(e, t)
              return n ? l.e.selectFetchStatus(e, n) : void 0
            })(e, t)
          return Object(u.d)(n, a)
        },
        v = Object(c.a)()
          .propsFromState(function () {
            return { author: h, authorId: f, fetchStatus: m, twitterArticle: p }
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
        b = n('mAm5'),
        E = n('fn8Q'),
        w = n('gEvp'),
        C = n('rOiJ'),
        _ = n('rHpw'),
        S = _.a.create(function (e) {
          return { media: { width: '100%' } }
        }),
        k = function (e) {
          var t = e.block,
            n = e.blockProps,
            a = e.contentState,
            i = t.getEntityAt(0),
            o = i ? a.getEntity(i) : null
          if (!o) return null
          var l = o.getData()
          if (o.type === E.b.TWEET) {
            var c = l.tweetId
            return r.a.createElement(w.a, { tweetId: c })
          }
          if (o.type === E.b.MEDIA) {
            var s = l.mediaItems.map(function (e) {
                var t
                return null == n || null === (t = n.media) || void 0 === t
                  ? void 0
                  : t.find(function (t) {
                      return t.media_id === e.mediaId
                    })
              }),
              u = Object(y.a)(s, function (e) {
                return Object(b.a)(e)
              })
            return u ? r.a.createElement(C.a, { mediaDetails: u, style: S.media, tweetId: '0' }) : null
          }
          return null
        },
        x = n('nXUu'),
        T = function (e) {
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
            o = { atomic: { component: k, editable: !1, props: { media: a } } }
          return i ? r.a.createElement(x.a, { componentByType: o, contentState: i }) : null
        },
        I = n('Q5fS'),
        M = n('MWbm'),
        P = n('pjBI'),
        L = n('jV+4'),
        R = n('GBcw'),
        O = n('TIdA'),
        D = n('A91F'),
        B = _.a.create(function (e) {
          return {
            authorContainerInBanner: {
              backgroundColor: e.colors.cellBackground,
              bottom: 0,
              borderTopLeftRadius: e.borderRadii.large,
              borderTopRightRadius: e.borderRadii.large,
              position: 'absolute',
              width: '100%',
            },
            authorContainerWithoutCoverImage: { paddingTop: e.spaces.space12 },
            authorAndTimestamp: {
              alignItems: 'center',
              paddingHorizontal: e.spaces.space24,
              paddingTop: e.spaces.space16,
            },
            content: {
              paddingHorizontal: e.spaces.space24,
              paddingVertical: e.spaces.space16,
              minHeight: e.spaces.space80,
            },
            body: { paddingTop: e.spaces.space20 },
          }
        }),
        A = function (e) {
          var t,
            n,
            a = e.author,
            i = e.twitterArticle,
            o = i.data,
            l = i.media,
            c = i.metadata,
            s = i.title,
            u = r.a.createElement(
              P.a,
              { style: B.authorAndTimestamp },
              r.a.createElement(L.a, {
                isVerified: a.verified,
                name: a.name,
                profileImageUrl: a.profile_image_url_https,
                screenName: a.screen_name,
                withHoverCard: !0,
                withLink: !0,
              }),
              null != c && c.publishedAtMs
                ? r.a.createElement(R.a, { humanReadable: !0, timestamp: Number(c.publishedAtMs) })
                : null,
            ),
            d = null == i ? void 0 : i.cover_image,
            p =
              'ApiImage' === (null == d || null === (t = d.media_info) || void 0 === t ? void 0 : t.__typename)
                ? null == d || null === (n = d.media_info) || void 0 === n
                  ? void 0
                  : n.original_img_url
                : void 0,
            f = p
              ? r.a.createElement(
                  M.a,
                  null,
                  r.a.createElement(O.a, {
                    accessibilityLabel: '',
                    aspectMode: D.a.exact(_.a.theme.aspectRatios.twitterArticleBanner),
                    image: p,
                  }),
                  r.a.createElement(M.a, { style: B.authorContainerInBanner }, u),
                )
              : r.a.createElement(M.a, { style: B.authorContainerWithoutCoverImage }, u)
          return r.a.createElement(
            r.a.Fragment,
            null,
            f,
            r.a.createElement(
              M.a,
              { style: B.content },
              r.a.createElement(I.a, { size: 'title1', title: s, weight: 'heavy' }),
              null != o && o.contentStateJson
                ? r.a.createElement(
                    M.a,
                    { style: B.body, testID: 'twitterArticleRichTextView' },
                    r.a.createElement(T, { contentStateJson: o.contentStateJson, twitterArticleMedia: l }),
                  )
                : null,
            ),
          )
        },
        F = n('zpdM'),
        j = n('muX9'),
        H = function (e) {
          var t,
            n,
            a,
            i,
            o,
            l = e.author,
            c = e.twitterArticle,
            s = (function (e) {
              try {
                return Object(F.convertFromRaw)(JSON.parse(e)).getPlainText().substr(0, 200)
              } catch (t) {
                return ''
              }
            })((null === (t = c.data) || void 0 === t ? void 0 : t.contentStateJson) || ''),
            u = null === (n = c.cover_image) || void 0 === n ? void 0 : n.media_info
          return (
            'ApiImage' === (null == u ? void 0 : u.__typename) &&
              ((a = u.original_img_url), (i = u.original_img_width), (o = u.original_img_height)),
            r.a.createElement(
              j.a,
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
        z = n('G1WX'),
        U = 'Twitter Article',
        W = function (e) {
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
          var f = function () {
            return d && t
              ? r.a.createElement(
                  M.a,
                  { testID: 'twitterArticleView' },
                  r.a.createElement(H, { author: t, twitterArticle: d }),
                  r.a.createElement(A, { author: t, twitterArticle: d }),
                )
              : null
          }
          return r.a.createElement(g.a, {
            history: s,
            primaryContent: function () {
              return r.a.createElement(
                M.a,
                { style: V.container },
                r.a.createElement(z.a, { fetchStatus: o, onRequestRetry: p, render: f }),
              )
            },
            sidebarContent: r.a.createElement(i.a, null),
            title: U,
          })
        },
        V = _.a.create(function (e) {
          return {
            container: {
              borderTopColor: e.colors.borderColor,
              borderTopWidth: e.borderWidths.small,
              color: e.colors.text,
            },
            author: { paddingBottom: e.spaces.space24 },
            title: { paddingBottom: e.spaces.space24 },
          }
        }),
        K = v(W)
      t.default = K
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
    '5kR0': function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var a = /(?:%[0-9a-f]{2})/i
      ;(t.default = a), (e.exports = t.default)
    },
    '6XNv': function (e, t, n) {
      'use strict'
      var a = n('RhWx'),
        r = n.n(a),
        i = n('VrFO'),
        o = n.n(i),
        l = n('Y9Ll'),
        c = n.n(l),
        s = n('1Pcy'),
        u = n.n(s),
        d = n('5Yy7'),
        p = n.n(d),
        f = n('2VqO'),
        h = n.n(f),
        m = n('KEM+'),
        v = n.n(m),
        g = n('yiKp'),
        y = n.n(g),
        b = (n('lTEL'), n('7x/C'), n('LqLs'), n('87if'), n('kYxP'), n('7xRU'), n('z84I'), n('2G9S'), n('ERkP')),
        E = n.n(b),
        w = n('t62R'),
        C = n('piX5'),
        _ = n('4r2z'),
        S = n('FG+G'),
        k = n('rHpw'),
        x = n('k/Ka'),
        T = n('shC7'),
        I = n('MWbm'),
        M = E.a.forwardRef(function (e, t) {
          return Object(x.a)('select', y()(y()({}, e), {}, { ref: t }))
        }),
        P = function (e) {
          return Object(x.a)('option', e)
        },
        L = 1,
        R = (function (e) {
          p()(n, e)
          var t = h()(n)
          function n(e) {
            var a
            return (
              o()(this, n),
              (a = t.call(this, e)),
              v()(u()(a), '_selectRef', E.a.createRef()),
              v()(u()(a), 'state', { isFocused: !1 }),
              v()(u()(a), '_handleChange', function (e) {
                var t = a.props,
                  n = t.onChange,
                  r = t.withEmptyOption,
                  i = e.target,
                  o = i.selectedIndex,
                  l = i.value
                n && n(l, o - (r ? 1 : 0))
              }),
              v()(u()(a), '_handleBlur', function (e) {
                var t = a.props.onBlur
                a.setState({ isFocused: !1 }), t && t()
              }),
              v()(u()(a), '_handleFocus', function (e) {
                var t = a.props.onFocus
                a.setState({ isFocused: !0 }), t && t()
              }),
              (a._id = 'SELECTOR_'.concat(L)),
              (a._errorID = ''.concat(a._id, '_ERROR')),
              (a._helperID = ''.concat(a._id, '_HELP')),
              (a._labelID = ''.concat(a._id, '_LABEL')),
              (L += 1),
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
                    i = e.hasError,
                    o = e.helperText,
                    l = e.options,
                    c = e.style,
                    s = e.testID,
                    u = e.value,
                    d = e.withEmptyOption,
                    p = this.state.isFocused,
                    f = w.b.getLanguage(),
                    h =
                      'ja' === f
                        ? k.a.theme.fontFamilies.japan
                        : T.a.getConstants().isRTL || _.a.isLocaleRTL(f)
                        ? k.a.theme.fontFamilies.rtl
                        : k.a.theme.fontFamilies.normal,
                    m = void 0 === i ? !!a : i,
                    v = new Set()
                  a && v.add(this._errorID), t && v.add(t), o && v.add(this._helperID)
                  var g = v.size ? r()(v).join(' ') : void 0
                  return E.a.createElement(
                    E.a.Fragment,
                    null,
                    E.a.createElement(
                      I.a,
                      {
                        style: [
                          C.a.border,
                          O.container,
                          n && C.a.disabled,
                          p && C.a.focusedBorderValid,
                          m && C.a.invalidBorderColor,
                          p && m && C.a.focusedBorderInvalid,
                          c,
                        ],
                      },
                      this._renderLabel(),
                      E.a.createElement(
                        M,
                        {
                          accessibilityDescribedBy: g,
                          accessibilityInvalid: m,
                          accessibilityLabelledBy: this._labelID,
                          disabled: n,
                          nativeID: this._id,
                          onBlur: this._handleBlur,
                          onChange: this._handleChange,
                          onFocus: this._handleFocus,
                          ref: this._selectRef,
                          style: [O.select, { fontFamily: h }, n && C.a.disabled],
                          testID: s || '',
                          value: u,
                        },
                        d ? E.a.createElement(P, { disabled: !0, style: O.option, value: '' }) : null,
                        l.map(function (e) {
                          var t = e.disabled,
                            n = e.label,
                            a = e.value
                          return E.a.createElement(
                            P,
                            { disabled: t, key: ''.concat(n, '-').concat(a), style: O.option, value: a },
                            n,
                          )
                        }),
                      ),
                      E.a.createElement(S.a, {
                        style: [O.dropdownCaret, p && C.a.validColor, (i || a) && C.a.invalidColor],
                      }),
                    ),
                    o ? this._renderHelperText() : null,
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
                  return E.a.createElement(
                    w.b,
                    {
                      accessibilityRole: 'label',
                      color: n || t ? 'red500' : r ? 'primary' : 'gray700',
                      nativeID: this._labelID,
                      style: O.label,
                    },
                    a,
                  )
                },
              },
              {
                key: '_renderHelperText',
                value: function () {
                  return E.a.createElement(
                    I.a,
                    { accessibilityLiveRegion: 'polite' },
                    E.a.createElement(
                      w.b,
                      { color: 'gray700', nativeID: this._helperID, style: O.helperText },
                      this.props.helperText,
                    ),
                  )
                },
              },
              {
                key: '_renderErrorText',
                value: function () {
                  return E.a.createElement(
                    I.a,
                    { accessibilityLiveRegion: 'polite' },
                    E.a.createElement(
                      w.b,
                      { color: 'red500', nativeID: this._errorID, style: O.helperText },
                      this.props.errorText,
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(E.a.PureComponent)
      v()(R, 'defaultProps', { disabled: !1, autofocus: !1, withEmptyOption: !1 }), (R.propTypes = {})
      var O = k.a.create(function (e) {
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
      t.a = R
    },
    '6sfk': function (e, t, n) {
      'use strict'
      var a = n('IGGJ')
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var r = (0, a(n('AYyr')).default)('^(?:([^:/?#]+):\\/\\/)?([^/?#]*)([^?#]*)(?:\\?([^#]*))?(?:#(.*))?$', 'i')
      ;(t.default = r), (e.exports = t.default)
    },
    '8Y9H': function (e, t, n) {
      'use strict'
      var a = n('IGGJ')
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var r = a(n('AYyr')),
        i = a(n('kfbJ')),
        o = a(n('5kR0')),
        l = a(n('Flng')),
        c = (0, r.default)(
          '(?:#{validateUrlUnreserved}|#{validateUrlPctEncoded}|#{validateUrlSubDelims}|[:|@])',
          { validateUrlUnreserved: i.default, validateUrlPctEncoded: o.default, validateUrlSubDelims: l.default },
          'i',
        )
      ;(t.default = c), (e.exports = t.default)
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
        f = n('VY6S'),
        h = (n('KqXw'), n('3uku'), n('jat/')),
        m = n('kGix'),
        v = n('W5XZ'),
        g = n('3XMw'),
        y = n.n(g),
        b = n('MWbm'),
        E = n('p+r5'),
        w = n('Qwev'),
        C = n('rHpw'),
        _ = y.a.jd2f69a8,
        S = y.a.d2ae33cd,
        k = y.a.ac308436,
        x = C.a.create(function (e) {
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
            i = e.inputStyle,
            l = e.onChangeTweetId,
            c = e.tweet,
            s = e.tweetFetchStatus,
            u = e.tweetId,
            d = e.withActivityIndicator,
            p = o.a.useState(),
            g = r()(p, 2),
            y = g[0],
            C = g[1],
            T = o.a.useMemo(
              function () {
                return Object(f.a)(function (e) {
                  e && a(e).catch(n(v.a))
                }, 250)
              },
              [n, a],
            )
          o.a.useEffect(
            function () {
              T(u)
            },
            [T, u],
          ),
            o.a.useEffect(
              function () {
                if (c) {
                  var e = null == t ? void 0 : t(c)
                  e && (C(e), l(void 0))
                } else s === m.a.FAILED && C(k)
              },
              [t, l, c, s],
            )
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(E.a, {
              errorText: y,
              invalid: !!y,
              label: _,
              name: 'TweetByUrlInput',
              onChange: function (e) {
                C(void 0)
                var t = e.target.value,
                  n = (function (e) {
                    if (/^\d+$/.test(e)) return e
                    var t = /status\/(\d+)/g.exec(e) || []
                    return Object(h.a)(t)
                  })(t)
                n ? l(n) : t ? C(S) : l(void 0)
              },
              style: i,
            }),
            d && s === m.a.LOADING
              ? o.a.createElement(b.a, { style: x.activityIndicatorWrapper }, o.a.createElement(w.a, { size: 'large' }))
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
        f = n('ERkP'),
        h = n.n(f),
        m = n('3XMw'),
        v = n.n(m),
        g = n('MWbm'),
        y = n('Qwev'),
        b = n('21U8'),
        E = n('rHpw'),
        w = n('1auM'),
        C = n('eYns'),
        _ = v.a.gff1f69e,
        S = (function (e) {
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
                    n instanceof w.a &&
                    Object(C.b)(n).then(function (t) {
                      return new w.a(t).withDimensionsAndOrientation().then(function (t) {
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
                    : h.a.createElement(y.a, { accessibilityLabel: _, style: k.activityIndicator })
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
                    ? h.a.createElement(
                        g.a,
                        { style: k.cropper },
                        h.a.createElement(b.a, {
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
        })(h.a.Component),
        k = E.a.create(function (e) {
          return {
            cropper: { backgroundColor: e.colors.navigationBackground, flexGrow: 1 },
            activityIndicator: { flexGrow: 1 },
          }
        })
      t.a = h.a.forwardRef(function (e, t) {
        return h.a.createElement(S, r()({}, e, { cropperRef: t }))
      })
    },
    Eeja: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        i = n('3XMw'),
        o = n.n(i),
        l = n('ggE+'),
        c = n('KQzH'),
        s = n('rHpw'),
        u = n('k89r'),
        d = n('MWbm'),
        p = o.a.bcc7e8cf,
        f = s.a.create(function (e) {
          return {
            thumbnail: {
              borderRadius: e.borderRadii.infinite,
              backgroundColor: s.a.theme.colors.blue500,
              height: '100%',
              width: '100%',
              padding: s.a.theme.spaces.space12,
              alignItems: 'center',
              justifyContent: 'center',
            },
            icon: {
              color: s.a.theme.colors.white,
              width: s.a.theme.fontSizes.title4,
              height: s.a.theme.fontSizes.title4,
            },
          }
        }),
        h = function (e) {
          var t = e.onPress,
            n = Object(u.a)()
          return r.a.createElement(c.a, {
            key: 'AllBookmarksCell',
            label: p,
            link: '/i/bookmarks/all',
            onPress: function (e) {
              n.scribe({ element: 'bookmarks', action: 'click' }), t(e)
            },
            thumbnail: r.a.createElement(d.a, { style: f.thumbnail }, r.a.createElement(l.a, { style: f.icon })),
          })
        },
        m = (n('ho0z'), n('Hja3')),
        v = n('rxPX'),
        g = function (e, t) {
          var n = t.bookmarkFolderId
          return n ? m.b.select(e, n) : void 0
        },
        y = Object(v.a)().propsFromState(function () {
          return { bookmarkFolder: g }
        }),
        b = n('U+bB'),
        E = s.a.create(function (e) {
          return { thumbnail: { borderRadius: e.borderRadii.infinite, height: '100%', width: '100%' } }
        }),
        w = y(function (e) {
          var t,
            n,
            a = e.bookmarkFolder,
            i = e.onPress,
            o = Object(u.a)()
          return null != a &&
            null !== (t = a.media) &&
            void 0 !== t &&
            null !== (n = t.media_info) &&
            void 0 !== n &&
            n.original_img_url
            ? r.a.createElement(c.a, {
                key: a.id,
                label: a.name,
                link: '/i/bookmarks/'.concat(a.id),
                onPress: function (e) {
                  o.scribe({ element: 'bookmark_folder', action: 'click' }), i(e)
                },
                thumbnail: r.a.createElement(b.a, { source: a.media.media_info.original_img_url, style: E.thumbnail }),
              })
            : null
        }),
        C = n('48TD'),
        _ = n('hqKg'),
        S = n('oQhu'),
        k = n('G6rE'),
        x = Object(v.a)()
          .propsFromState(function () {
            return {
              loggedInUser: k.e.selectLoggedInUser,
              sliceModule:
                ((e = Object(S.a)(function (e) {
                  return Object(C.a)(e)
                })),
                Object(_.createSelector)(k.e.selectLoggedInUser, function (t) {
                  return null != t && t.id_str ? e(t.id_str) : void 0
                })),
            }
            var e
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUser
            return { sliceModule: e.sliceModule, isLoggedInUser: !!t }
          })
          .withAnalytics({ page: 'bookmark_folders' }),
        T = n('FIs5'),
        I = n('FS1z'),
        M = o.a.adad5408,
        P = o.a.be329aab,
        L = o.a.j0a47c9c,
        R = o.a.j45c642d,
        O = x(function (e) {
          var t = e.analytics,
            n = e.isLoggedInUser,
            a = e.onCreateFolderPress,
            i = e.onFolderPress,
            o = e.sliceModule
          o || t.scribeAction('error')
          var l = r.a.useCallback(
              function () {
                return (
                  t.scribePageImpression({ component: 'empty', action: 'impression' }),
                  n && a ? r.a.createElement(T.a, { buttonText: M, header: P, message: L, onButtonPress: a }) : null
                )
              },
              [t, a, n],
            ),
            c = function (e) {
              return function (t) {
                i && (t.preventDefault(), i(e))
              }
            }
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(h, { onPress: c('all') }),
            o
              ? r.a.createElement(I.a, {
                  alwaysFetch: !0,
                  module: o,
                  noItemsRenderer: l,
                  renderer: function (e) {
                    return r.a.createElement(w, { bookmarkFolderId: e, key: e, onPress: c(e) })
                  },
                  retryMessage: R,
                })
              : null,
          )
        })
      t.a = O
    },
    Flng: function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var a = /[!$&'()*+,;=]/i
      ;(t.default = a), (e.exports = t.default)
    },
    G31s: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return w
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
        f = n('ERkP'),
        h = n.n(f),
        m = n('pKoL'),
        v = n('MWbm'),
        g = n('rHpw'),
        y = n('ZvMt'),
        b = n('9Xij'),
        E = n('v6aA'),
        w = (function (e) {
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
                  return h.a.createElement(v.a, { style: n }, this._renderImageGroup(t.length))
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
                  return h.a.createElement(
                    b.a,
                    { ratio: t ? i : r / a },
                    h.a.createElement(v.a, { style: C.mediaPreviewWrapper }, this._renderMediaAtIndex(0)),
                  )
                },
              },
              {
                key: '_renderGroupOf2',
                value: function () {
                  return h.a.createElement(
                    b.a,
                    { ratio: g.a.theme.aspectRatios.landscape },
                    h.a.createElement(
                      v.a,
                      { style: C.mediaPreviewWrapper },
                      this._renderMediaAtIndex(0, C.gutterRight),
                      this._renderMediaAtIndex(1),
                    ),
                  )
                },
              },
              {
                key: '_renderGroupOf3',
                value: function () {
                  return h.a.createElement(
                    b.a,
                    { ratio: g.a.theme.aspectRatios.landscape },
                    h.a.createElement(
                      v.a,
                      { style: C.mediaPreviewWrapper },
                      this._renderMediaAtIndex(0, C.gutterRight),
                      this._renderColumnWithIndices([1, 2]),
                    ),
                  )
                },
              },
              {
                key: '_renderGroupOf4',
                value: function () {
                  return h.a.createElement(
                    b.a,
                    { ratio: g.a.theme.aspectRatios.landscape },
                    h.a.createElement(
                      v.a,
                      { style: C.mediaPreviewWrapper },
                      this._renderColumnWithIndices([0, 2], C.gutterRight),
                      this._renderColumnWithIndices([1, 3]),
                    ),
                  )
                },
              },
              {
                key: '_renderColumnWithIndices',
                value: function (e, t) {
                  return h.a.createElement(
                    v.a,
                    { style: [C.column, t] },
                    this._renderMediaAtIndex(e[0], C.gutterBottom),
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
                    f = o.onRemoveMedia,
                    v = o.onSetMediaPreviewRef,
                    g = s[e],
                    y = null === (n = g.mediaMetadata) || void 0 === n ? void 0 : n.altText,
                    b = null === (a = g.mediaMetadata) || void 0 === a ? void 0 : a.defaultAltText,
                    E = !(
                      null === (r = g.mediaMetadata) ||
                      void 0 === r ||
                      null === (i = r.sensitiveMediaWarning) ||
                      void 0 === i ||
                      !i.size
                    ),
                    w = d && l && c,
                    _ = w && E && !!p
                  return h.a.createElement(m.a, {
                    accessibilityLabel: y || b,
                    accessibilityRole: 'group',
                    enableGif: c,
                    key: g.id,
                    mediaItem: g,
                    onClick: u ? u(g.id) : void 0,
                    onEdit: d ? d(g.id) : void 0,
                    onEditSensitiveWarning: p && _ ? p(g.id) : void 0,
                    onRemove: f(g.id),
                    ref: v,
                    style: [C.mediaContainer, t],
                    withAltTextLabel: !!y,
                    withCloseButton: l && c,
                    withEditButton: w,
                    withEditSensitiveWarningButton: _,
                  })
                },
              },
            ]),
            n
          )
        })(h.a.Component)
      p()(w, 'contextType', E.a)
      var C = g.a.create(function (e) {
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
    H1lm: function (e, t, n) {
      'use strict'
      var a = n('IGGJ')
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var r = a(n('AYyr')),
        i = a(n('W9cO')),
        o = a(n('vXsr')),
        l = a(n('oAj9')),
        c = (0, r.default)(
          /(?:(?:#{validateUrlSubDomainSegment}\.)*(?:#{validateUrlDomainSegment}\.)#{validateUrlDomainTld})/i,
          {
            validateUrlSubDomainSegment: l.default,
            validateUrlDomainSegment: i.default,
            validateUrlDomainTld: o.default,
          },
        )
      ;(t.default = c), (e.exports = t.default)
    },
    IM13: function (e, t, n) {
      'use strict'
      var a = n('IGGJ')
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var r = a(n('AYyr')),
        i = a(n('8Y9H')),
        o = (0, r.default)(/(#{validateUrlPchar}|\/|\?)*/i, { validateUrlPchar: i.default })
      ;(t.default = o), (e.exports = t.default)
    },
    IbdM: function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var a = /(?:[a-z][a-z0-9+\-.]*)/i
      ;(t.default = a), (e.exports = t.default)
    },
    KQzH: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        i = (n('hBvt'), n('ERkP')),
        o = n.n(i),
        l = n('BUB3'),
        c = n('shC7'),
        s = n('csss'),
        u = n('t62R')
      t.a = function (e) {
        return o.a.createElement(l.a, { exact: !0, path: e.link }, function (t) {
          var n = c.a.getConstants().isRTL ? 'rtl' : 'ltr'
          return o.a.createElement(s.a, r()({ isActive: t }, e, { label: o.a.createElement(u.b, { dir: n }, e.label) }))
        })
      }
    },
    LQrL: function (e, t, n) {
      'use strict'
      n.d(t, 'e', function () {
        return g
      }),
        n.d(t, 'd', function () {
          return y
        }),
        n.d(t, 'c', function () {
          return b
        }),
        n.d(t, 'b', function () {
          return E
        }),
        n.d(t, 'f', function () {
          return w
        }),
        n.d(t, 'a', function () {
          return C
        })
      n('hBvt'), n('KqXw'), n('z84I')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('t62R'),
        o = n('dWxr'),
        l = n.n(o),
        c = n('OiMc'),
        s = n('hHEM'),
        u = n('rHpw'),
        d = n('aITJ'),
        p = n('IZ3v'),
        f = function (e, t) {
          for (var n = l()(e.getText()), a = 0; a < n.length; a++)
            n[a].indices && 2 === n[a].indices.length && t(n[a].indices[0], n[a].indices[1])
        },
        h = { clipPath: 'circle(0% at center)' },
        m = function (e, t, n) {
          e.findEntityRanges(function (e) {
            var t = e.getEntity(),
              a = t ? n.getEntity(t) : null
            return !!a && 'LINK' === a.getType()
          }, t)
        },
        v = function (e) {
          return function (t) {
            if (!t.entityKey) return null
            var n = t.children,
              a = t.contentState.getEntity(t.entityKey).getData().url
            return r.a.createElement(
              c.a,
              { animationDuration: 'normal', renderContent: e(n, a), withArrow: !0 },
              r.a.createElement(i.b, { color: 'text', withInteractiveStyling: !0, withUnderline: !0 }, n),
            )
          }
        },
        g = function (e) {
          return { strategy: m, component: v(e) }
        },
        y = {
          strategy: m,
          component: function (e) {
            return e.entityKey
              ? r.a.createElement(i.b, { link: e.contentState.getEntity(e.entityKey).getData().url }, e.children)
              : null
          },
        },
        b = {
          strategy: f,
          component: function (e) {
            var t = l()(e.decoratedText)[0]
            if (!t) return null
            var n = Object(p.b)(t)
            return n ? r.a.createElement(i.b, { link: Object(p.c)(n, e.decoratedText) }, e.children) : null
          },
        },
        E = {
          strategy: f,
          component: function (e) {
            return r.a.createElement('span', { style: { color: u.a.theme.colors.link } }, e.children)
          },
        },
        w = {
          strategy: function (e, t, n) {
            e.findEntityRanges(function (e) {
              var t = e.getEntity(),
                a = t && n.getEntity(t)
              return !(!a || a.type !== s.a.TWEMOJI_ENTITY_TYPE)
            }, t)
          },
          component: function (e) {
            var t = e.children,
              n = e.contentState,
              a = e.entityKey,
              i = (a && n.getEntity(a)) || {}
            return !(d.b.isFirefox() && d.b.firefoxVersion() < 49)
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
        C = {
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
        f = n('2VqO'),
        h = n.n(f),
        m = n('KEM+'),
        v = n.n(m),
        g = (n('2G9S'), n('i4UL'), n('+/5o')),
        y = n('ERkP'),
        b = n.n(y),
        E = n('HPNB'),
        w = n('VAZu'),
        C = n('wiP2'),
        _ = n('Es6L'),
        S = n('yiKp'),
        k = n.n(S),
        x = n('rHpw'),
        T = x.a.create(function (e) {
          return {
            fill: { flex: 1, alignSelf: 'stretch' },
            viewportView: k()(k()({}, x.a.absoluteFillObject), {}, { overflowY: 'auto' }),
            appBarContainer: {
              position: 'sticky',
              top: 0,
              backfaceVisibility: 'hidden',
              zIndex: e.componentZIndices.appBarZIndex,
            },
          }
        }),
        I = n('MWbm'),
        M = n('yw4N'),
        P = n('TnY3'),
        L = n('cHvH'),
        R = n('3xLC'),
        O = [
          'appBarStyle',
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
          var t = h()(n)
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
                      I.a,
                      { style: T.fill },
                      b.a.createElement(
                        M.a,
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
                  return b.a.createElement(L.a, null, function (t) {
                    var n = t.windowWidth
                    return E.a.isTwoColumnLayout(n) ? e._renderForTwoColumnLayout() : e._renderForOneColumnLayout()
                  })
                },
              },
              {
                key: '_renderForOneColumnLayout',
                value: function () {
                  var e = this.props,
                    t = (e.appBarStyle, e.children),
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
                    Object(_.a)()
                      ? this._renderInlineNav({ isTwoColumnLayout: !1 })
                      : b.a.createElement(C.a.Configure, n),
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
                    o = n.appBarStyle,
                    l = n.backLocation,
                    c = n.documentTitle,
                    s = n.headerless,
                    u = n.history,
                    d = n.leftControl,
                    p = n.middleControl,
                    f = n.onBackClick,
                    h = n.rightControl,
                    m = n.screenType,
                    v = n.searchBoxOptions,
                    y = n.secondaryBar,
                    E = n.showSubtitleOnRoot,
                    _ = n.showSubtitleOnWideDetail,
                    S = n.subtitle,
                    k = n.title,
                    x = n.titleIconCell,
                    M = n.titleIconCellSize,
                    P = n.withDetailOpen,
                    L = n.withSearchBox,
                    R = n.withTweetButton,
                    O = 'root' === m,
                    D = 'secondaryRoot' === m,
                    B = 'primaryDetail' === m,
                    A = (B && _) || (O && E),
                    F = O || (B && t),
                    j = O ? g.c : B ? g.a : void 0,
                    H = b.a.createElement(
                      I.a,
                      { style: T.appBarContainer },
                      b.a.createElement(w.a, {
                        backLocation: l,
                        fixed: !1,
                        hideBackButton: F,
                        history: u,
                        leftControl: d,
                        middleControl: p,
                        onBackClick: f,
                        rightControl: h,
                        secondaryBar: y,
                        style: o,
                        subtitle: A ? S : void 0,
                        title: k,
                        titleDomId: j,
                        titleIconCell: x,
                        titleIconCellSize: M,
                      }),
                    ),
                    z =
                      O || (D && P)
                        ? null
                        : b.a.createElement(C.a.Configure, {
                            SideNavButton: a,
                            TabBar: r,
                            TeamsSwitcher: i,
                            backLocation: l,
                            documentTitle: c,
                            headerless: s,
                            middleControl: p,
                            onBackClick: f,
                            rightControl: h,
                            searchBoxOptions: v,
                            subtitle: S,
                            title: k,
                            withSearchBox: L,
                            withTweetButton: R,
                          })
                  return b.a.createElement(b.a.Fragment, null, z, H)
                },
              },
            ]),
            n
          )
        })(b.a.Component)
      v()(D, 'contextType', R.a),
        v()(D, 'defaultProps', { screenType: 'secondaryDetail', showSubtitleOnWideDetail: !0 })
      t.a = Object(P.a)(D)
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
    NRlp: function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var a = /(?:[0-9]|(?:[1-9][0-9])|(?:1[0-9]{2})|(?:2[0-4][0-9])|(?:25[0-5]))/i
      ;(t.default = a), (e.exports = t.default)
    },
    'NoO/': function (e, t, n) {
      'use strict'
      var a = n('IGGJ')
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var r = a(n('AYyr')),
        i = a(n('mmgW')),
        o = a(n('eWSo')),
        l = (0, r.default)(
          '(?:#{validateUrlIpv4}|#{validateUrlIpv6})',
          { validateUrlIpv4: i.default, validateUrlIpv6: o.default },
          'i',
        )
      ;(t.default = l), (e.exports = t.default)
    },
    OOKO: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return l
      })
      n('uFXj')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('rHpw'),
        o = n('MWbm')
      function l(e) {
        var t = e.spacing
        return r.a.createElement(o.a, {
          accessibilityRole: 'separator',
          style: [c.divider, { marginVertical: null != t ? i.a.theme.spaces[t] : void 0 }],
        })
      }
      var c = i.a.create(function (e) {
        return { divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }
      })
    },
    'OVD+': function (e, t, n) {
      'use strict'
      var a = n('IGGJ')
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var r = a(n('AYyr')),
        i = a(n('8Y9H')),
        o = (0, r.default)(/(\/#{validateUrlPchar}*)*/i, { validateUrlPchar: i.default })
      ;(t.default = o), (e.exports = t.default)
    },
    P68U: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'MediaPickerWithPreview', function () {
          return C
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
        f = n('KEM+'),
        h = n.n(f),
        m =
          (n('2G9S'),
          n('hCOa'),
          n('87if'),
          n('hBpG'),
          n('7x/C'),
          n('jQ3i'),
          n('x4t0'),
          n('z84I'),
          n('1t7P'),
          n('jQ/y'),
          n('ERkP')),
        v = n.n(m),
        g = n('AspN'),
        y = n('rxPX'),
        b = Object(y.a)().propsFromActions(function () {
          return { addMedia: g.b, processMultipleMedia: g.g }
        }),
        E = n('2Daw'),
        w = n('VPdC'),
        C = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(c()(e), '_handleAddMediaFiles', function (t) {
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
              h()(c()(e), '_getAcceptedFileInputs', function () {
                var t = e.props,
                  n = t.acceptGifs,
                  a = t.acceptVideo
                return Object(w.b)({ acceptGifs: n, acceptVideo: a })
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
                    l = e.description,
                    c = e.innerStyle,
                    s = e.maskStyle,
                    u = e.mediaItem,
                    d = e.onCrop,
                    p = e.onRemove,
                    f = e.rootStyle
                  return v.a.createElement(E.a, {
                    acceptGifs: t,
                    acceptVideo: n,
                    accessibilityLabel: a,
                    aspectRatio: r,
                    borderRadius: i,
                    currentContent: o,
                    description: l,
                    innerStyle: c,
                    maskStyle: s,
                    mediaItem: u,
                    onAddMediaFiles: this._handleAddMediaFiles,
                    onCrop: d,
                    onRemove: p,
                    rootStyle: f,
                    withDragDrop: !0,
                  })
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      h()(C, 'defaultProps', { acceptGifs: !1, acceptVideo: !1 })
      var _ = b(C)
      t.default = _
    },
    P71G: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return O
      })
      var a = n('yiKp'),
        r = n.n(a),
        i = n('97Jx'),
        o = n.n(i),
        l = n('m3Bd'),
        c = n.n(l),
        s = n('ddV6'),
        u = n.n(s),
        d = n('VrFO'),
        p = n.n(d),
        f = n('Y9Ll'),
        h = n.n(f),
        m = n('1Pcy'),
        v = n.n(m),
        g = n('5Yy7'),
        y = n.n(g),
        b = n('2VqO'),
        E = n.n(b),
        w = n('KEM+'),
        C = n.n(w),
        _ = (n('z84I'), n('5BYb'), n('7x/C'), n('ERkP')),
        S = n.n(_),
        k = n('3XMw'),
        x = n.n(k),
        T = n('p+r5'),
        I = n('Uchl'),
        M = n('sXY3'),
        P = n('FgXs'),
        L = ['getErrorText', 'initialValue', 'numberOfLines'],
        R = x.a.fee0a8bb,
        O = (function (e) {
          y()(n, e)
          var t = E()(n)
          function n(e) {
            var a
            return (
              p()(this, n),
              (a = t.call(this, e)),
              C()(v()(a), '_render', function () {
                var e = a.props.fields,
                  t = a.state.fieldValues
                return S.a.createElement(
                  S.a.Fragment,
                  null,
                  Object(M.a)(e).map(function (e) {
                    var n = u()(e, 2),
                      r = n[0],
                      i = n[1],
                      l = i.getErrorText,
                      s = (i.initialValue, i.numberOfLines),
                      d = c()(i, L),
                      p = null == l ? void 0 : l(t[r])
                    return S.a.createElement(
                      T.a,
                      o()(
                        {
                          errorText: p,
                          invalid: !!p,
                          key: r,
                          multiline: !!s && s > 1,
                          name: r,
                          numberOfLines: s,
                          onChange: a._handleFieldChanged(r),
                          value: t[r] || '',
                        },
                        d,
                      ),
                    )
                  }),
                )
              }),
              C()(v()(a), '_handleFieldChanged', function (e) {
                return function (t) {
                  var n = a.state.fieldValues,
                    i = r()(r()({}, n), {}, C()({}, e, t.target.value))
                  a.setState({ fieldValues: i })
                }
              }),
              C()(v()(a), '_handleSave', function (e) {
                ;(0, a.props.onSave)(a.state.fieldValues, e)
              }),
              C()(v()(a), '_isSaveEnabled', function () {
                var e = a.props,
                  t = e.fields,
                  n = e.isSaveDisabled,
                  r = a.state.fieldValues,
                  i = Object(M.a)(r),
                  o = i.some(function (e) {
                    var n = u()(e, 2),
                      a = n[0]
                    return n[1] !== t[a].initialValue
                  }),
                  l = i.some(function (e) {
                    var n = u()(e, 2),
                      a = n[0],
                      r = n[1]
                    return t[a].validLength && r.length > t[a].validLength
                  }),
                  c = i.some(function (e) {
                    var n,
                      a,
                      r = u()(e, 2),
                      i = r[0],
                      o = r[1]
                    return !(null === (n = (a = t[i]).getErrorText) || void 0 === n || !n.call(a, o))
                  })
                return o && !l && !c && !(n && n(r))
              }),
              (a.state = {
                fieldValues: Object(P.a)(e.fields, function (e) {
                  return e.initialValue
                }),
              }),
              a
            )
          }
          return (
            h()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.buttonLabelOverride,
                    n = e.onClose,
                    a = e.sheetTitle
                  return S.a.createElement(
                    I.a,
                    {
                      onClose: n,
                      primaryButtonConfig: {
                        label: t || R,
                        forceDisabled: !this._isSaveEnabled(),
                        onClick: this._handleSave,
                      },
                      title: a,
                    },
                    this._render(),
                  )
                },
              },
            ]),
            n
          )
        })(S.a.Component)
    },
    QdNu: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'getTwitterArticlePathname', function () {
          return dt
        }),
        n.d(t, 'getTwitterArticleUrl', function () {
          return pt
        }),
        n.d(t, 'TwitterArticleComposer', function () {
          return ht
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
          n('Qavd'),
          n('2G9S'),
          n('0zG9'),
          n('hBpG'),
          n('MvUL'),
          n('6U7i'),
          n('ho0z'),
          n('ERkP')),
        u = n.n(s),
        d = n('1YZw'),
        p = n('P1r1'),
        f = n('6au1'),
        h = n('G6rE'),
        m = n('AspN'),
        v = n('rxPX'),
        g = n('0KEI'),
        y = n('kGix'),
        b = function (e, t) {
          return t.match.params.twitterArticleId
        },
        E = function (e, t) {
          var n = b(0, t)
          return f.a.select(e, n)
        },
        w = function (e, t) {
          var n,
            a = E(e, t),
            r = null == a || null === (n = a.metadata) || void 0 === n ? void 0 : n.authorResults.result
          return 'User' === (null == r ? void 0 : r.__typename) ? (null == r ? void 0 : r.rest_id) : void 0
        },
        C = function (e, t) {
          var n = w(e, t)
          return n ? h.e.select(e, n) : void 0
        },
        _ = function (e, t) {
          var n = (function (e, t) {
              var n = b(0, t)
              return f.a.selectFetchStatus(e, n) || y.a.NONE
            })(e, t),
            a = (function (e, t) {
              var n = w(e, t)
              return n ? h.e.selectFetchStatus(e, n) : void 0
            })(e, t)
          return Object(y.d)(n, a)
        },
        S = function (e, t) {
          var n = b(0, t)
          return f.a.selectTwitterArticleTitle(e, n)
        },
        k = function (e, t) {
          var n,
            a = f.a.selectCoverMediaId(e)
          if (a) return null === (n = Object(m.k)(e, a)) || void 0 === n ? void 0 : n[0]
        },
        x = Object(v.a)()
          .propsFromState(function () {
            return {
              allMedia: m.j,
              author: C,
              authorId: w,
              coverImage: k,
              dataSaverMode: p.j,
              fetchStatus: _,
              title: S,
              twitterArticle: E,
            }
          })
          .propsFromActions(function () {
            return {
              addCoverImage: f.a.addCoverImage,
              addMedia: m.b,
              addToast: d.b,
              createLocalApiErrorHandler: Object(g.createLocalApiErrorHandlerWithContextFactory)(
                'TWITTER_ARTICLE_COMPOSER',
              ),
              deleteTwitterArticle: f.a.delete,
              fetchTwitterArticle: f.a.fetchOneIfNeeded,
              fetchUserIfNeeded: h.e.fetchOneIfNeeded,
              preUploadMedia: m.e,
              processMultipleMedia: m.g,
              removeCoverImage: f.a.removeCoverImage,
              removeMediaUpload: m.i,
              saveTwitterArticle: f.a.updateData,
              setMediaMetadata: m.n,
              updateTwitterArticleCoverImage: f.a.updateCoverImage,
              updateTwitterArticleMedia: f.a.updateMedia,
              updateTwitterArticleVisibility: f.a.updateVisibility,
              updateTwitterArticleTitle: f.a.updateTitle,
              uploadMedia: m.p,
            }
          }),
        T = n('Yed0'),
        I = n.n(T),
        M = n('c0ZR'),
        P = n('QbaN'),
        L = n('HsFH'),
        R = n('fS8x'),
        O = n('wpu3'),
        D = n('P68U'),
        B = n('eyty'),
        A = n('M2mT'),
        F = (n('5BYb'), n('hOZg')),
        j = n('G31s'),
        H = n('fs1G'),
        z = n('gEvp'),
        U = n('/yvb'),
        W = n('Qwev'),
        V = n('rHpw'),
        K = n('fn8Q'),
        G = V.a.create(function (e) {
          return {
            iconClose: { color: e.colors.gray300 },
            mediaPreview: { width: '100%' },
            removeTweetButton: { alignSelf: 'flex-start', marginRight: e.spaces.space4, marginTop: e.spaces.space4 },
          }
        }),
        N = function (e) {
          var t = e.block,
            n = e.blockProps,
            a = e.contentState,
            r = n.allMedia,
            i = n.mediaIdToLocalMediaIdMap,
            o = t.getEntityAt(0),
            l = o ? a.getEntity(o) : null
          if (l) {
            var c = l.getData()
            if (l.type === K.b.TWEET) {
              var s = c.tweetId,
                d = u.a.createElement(F.a, { style: G.iconClose }),
                p = u.a.createElement(U.a, {
                  icon: d,
                  onPress: function () {
                    n.onRemoveBlock(t.getKey())
                  },
                  preventFocusShift: !0,
                  size: 'small',
                  style: G.removeTweetButton,
                  type: 'primaryText',
                })
              return u.a.createElement(z.a, { rightControl: p, tweetId: s })
            }
            if (l.type === K.b.MEDIA) {
              var f,
                h = c.mediaItems
              if (c.uploaded) {
                if (
                  (f = h
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
                  if (!c.media) return u.a.createElement(W.a, null)
                  f = c.media
                }
              } else f = c.media
              return u.a.createElement(j.a, {
                editable: !0,
                media: f,
                onRemoveMedia: function () {
                  return H.a
                },
                style: G.mediaPreview,
              })
            }
          }
          return null
        },
        X = n('97Jx'),
        Y = n.n(X),
        J = (n('yH/f'), n('Eeja')),
        q = n('wrlS'),
        Q = Object(v.a)().propsFromState(function () {
          return { loggedInUser: h.e.selectLoggedInUser, featureSwitches: q.d }
        }),
        Z = n('KEM+'),
        $ = n.n(Z),
        ee = n('QIgh'),
        te = n('8UdT'),
        ne = n('xWpm'),
        ae = n('VrCx'),
        re = function (e) {
          var t = e.bookmarkFolderId,
            n = e.handleTweetClick
          return o()(
            o()({}, ee.default),
            {},
            $()(
              {},
              te.b.Tweet,
              o()(
                o()({}, ee.default[te.b.Tweet]),
                {},
                {
                  bookmarkFolderId: t,
                  handlers: $()({}, ae.a.Tweet, Object(ne.c)({ onClick: n, withSelectIcon: !1 })),
                },
              ),
            ),
          )
        },
        ie = n('oQhu'),
        oe = n('1LtL'),
        le = n('fTQJ'),
        ce = n('av/O'),
        se = n('7fPw'),
        ue = n('BQZD'),
        de = n('E0cF'),
        pe = n('OOKO'),
        fe = n('6XNv'),
        he = Object(ie.a)(function (e) {
          return Object(se.a)(e)
        }),
        me = 'likedTweets',
        ve = [
          { label: 'Liked tweets', value: me },
          { label: 'Bookmarked tweets', value: 'bookmarkedTweets' },
        ],
        ge = V.a.create(function (e) {
          return {
            selector: { marginBottom: e.spaces.space12 },
            tweetInput: { marginTop: e.spaces.space12, paddingHorizontal: 0, paddingVertical: 0 },
            tweetPreview: { marginTop: e.spaces.space12, marginBottom: 0, marginHorizontal: 0 },
          }
        }),
        ye = Q(function (e) {
          var t = e.featureSwitches,
            n = e.loggedInUser,
            a = e.onAddTweets,
            r = e.onBookmarkFolderPress,
            i = e.selectedBookmarkFolderId,
            o = 'string' == typeof i,
            l = u.a.useState(me),
            s = c()(l, 2),
            d = s[0],
            p = s[1],
            f = u.a.useCallback(
              function (e) {
                return a([e])
              },
              [a],
            ),
            h = u.a.useMemo(
              function () {
                return re(o ? { handleTweetClick: f, bookmarkFolderId: i } : { handleTweetClick: f })
              },
              [o, f, i],
            )
          if (o && i) {
            var m = 'all' === i ? Object(ue.b)(t) : Object(ue.a)(i)
            return u.a.createElement(le.a, {
              entryConfiguration: h,
              module: m,
              renderEmptyState: oe.b,
              title: 'Bookmarked',
            })
          }
          var v = n ? he(n.id_str) : null
          return v
            ? u.a.createElement(
                u.a.Fragment,
                null,
                u.a.createElement(ce.a, {
                  checkTweet: function (e) {
                    var t
                    return null !== (t = e.user) && void 0 !== t && t.protected
                      ? 'Tweets from protected accounts can’t be used in Twitter Articles'
                      : de.a.isQuotedTweetUnavailable(e)
                      ? 'Quote Tweets of a deleted Tweet can’t be used in Twitter Articles'
                      : void 0
                  },
                  inputStyle: ge.tweetInput,
                  onTweetPress: function (e) {
                    a([e])
                  },
                  tweetPreviewStyle: ge.tweetPreview,
                }),
                u.a.createElement(pe.a, { spacing: 'space12' }),
                u.a.createElement(fe.a, {
                  label: 'Show',
                  onChange: function (e) {
                    p(e)
                  },
                  options: ve,
                  style: ge.selector,
                  value: d,
                }),
                d === me
                  ? u.a.createElement(le.a, { entryConfiguration: h, module: v, title: 'Liked' })
                  : u.a.createElement(J.a, { onFolderPress: r }),
              )
            : null
        }),
        be = n('VPdC'),
        Ee = n('tn7R'),
        we = n('MWbm'),
        Ce = n('Uchl'),
        _e = n('k/OQ'),
        Se = Object.freeze({ MEDIA: 'Media', GIFS: 'Gifs', TWEETS: 'Tweets' }),
        ke = V.a.create(function (e) {
          return {
            sheet: { minHeight: '50vh', maxHeight: '80vh' },
            container: { paddingBottom: e.spaces.space16, paddingHorizontal: e.spaces.space16 },
            mediaPicker: { marginTop: e.spaces.space12 },
          }
        }),
        xe = function (e) {
          var t = e.onAddMedia,
            n = e.onAddTweets,
            a = e.onClose,
            r = e.twitterArticleId,
            i = u.a.useState(Se.MEDIA),
            l = c()(i, 2),
            s = l[0],
            d = l[1],
            p = u.a.useState(null),
            f = c()(p, 2),
            h = f[0],
            m = f[1],
            v = function (e) {
              return function () {
                return s === e
              }
            },
            g = Object(Ee.a)(Se).map(function (e) {
              return {
                key: e,
                label: e,
                isActive: v(e),
                to: { pathname: '/i/twitter-article-composer/edit/'.concat(r) },
                onClick: function () {
                  return d(e)
                },
              }
            }),
            y = function (e) {
              m(e)
            },
            b = !!h,
            E = o()(
              {},
              b
                ? {
                    onBackClick: function () {
                      m(null)
                    },
                  }
                : {},
            )
          return u.a.createElement(
            Ce.a,
            Y()(
              {
                onClose: a,
                primaryButtonConfig: { label: 'Done', forceDisabled: !1, onClick: a },
                style: ke.sheet,
                title: 'Attach',
              },
              E,
            ),
            u.a.createElement(
              we.a,
              { style: ke.container },
              b ? null : u.a.createElement(_e.a, { links: g }),
              (function () {
                switch (s) {
                  case Se.MEDIA:
                    return u.a.createElement(be.a, {
                      multiple: !0,
                      onChange: t,
                      size: 'large',
                      style: ke.mediaPicker,
                      type: 'brandText',
                    })
                  case Se.TWEETS:
                    return u.a.createElement(ye, {
                      onAddTweets: n,
                      onBookmarkFolderPress: y,
                      selectedBookmarkFolderId: h,
                    })
                  default:
                    return null
                }
              })(),
            ),
          )
        },
        Te = n('Lsrn'),
        Ie = n('k/Ka'),
        Me = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(Ie.a)(
            'svg',
            o()(
              o()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [Te.a.root, e.style],
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
      Me.metadata = { width: 24, height: 24 }
      var Pe = Me,
        Le = n('RH6X'),
        Re = n('GZwR'),
        Oe = n('zpdM'),
        De = function (e, t) {
          var n = e.getCurrentContent().createEntity(K.b.TWEET, K.a.IMMUTABLE, { tweetId: t }),
            a = n.getLastCreatedEntityKey(),
            r = Oe.EditorState.set(e, { currentContent: n })
          return Oe.AtomicBlockUtils.insertAtomicBlock(r, a, ' ')
        },
        Be = function (e) {
          var t, n, a
          return null !== (t = e.mediaFile) && void 0 !== t && t.isImage
            ? K.c.IMAGE
            : null !== (n = e.mediaFile) && void 0 !== n && n.isGif
            ? K.c.GIF
            : null !== (a = e.mediaFile) && void 0 !== a && a.isVideo
            ? K.c.VIDEO
            : void 0
        },
        Ae = n('UwBx'),
        Fe = n('keCP'),
        je = u.a.createElement(Pe, null),
        He = function (e) {
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
            f = p[0],
            h = p[1],
            m = function () {
              h(!f)
            },
            v = function (e) {
              var t = (function (e, t) {
                var n = e.getCurrentContent(),
                  a = n.getBlockMap().filter(function (e) {
                    return e.getKey() !== t
                  }),
                  r = n.merge({ blockMap: a })
                return Oe.EditorState.push(e, r, 'change-block-data')
              })(n, e)
              setTimeout(function () {
                return l(t)
              }, 10)
            },
            g = function (e) {
              if ('atomic' === e.getType())
                return {
                  component: N,
                  editable: !1,
                  props: { allMedia: t, mediaIdToLocalMediaIdMap: r, onRemoveBlock: v },
                }
            },
            y = Object(ie.a)(function (e) {
              return function (t) {
                e(t), l(t)
              }
            }),
            b = function (e) {
              return u.a.createElement(Ae.a, {
                additionalToolbarButtonConfigs: E,
                inputStyle: a,
                middleControl: i,
                onChange: y(e),
                placeholder: 'Start writing',
                richTextInputContext: { blockRendererFn: g, editorState: n, element: Fe.a, withMaxHeight: !1 },
              })
            },
            E = [{ icon: je, key: 'attachments sheet', onPress: m, type: 'brandText' }]
          return u.a.createElement(
            u.a.Fragment,
            null,
            u.a.createElement(
              Le.a,
              {
                contextText: n.getCurrentContent().getPlainText(),
                isInline: !0,
                onTextUpdated: l,
                onTypeaheadStateChange: H.a,
                source: Re.d.LongformComposer,
              },
              b,
            ),
            f
              ? u.a.createElement(xe, {
                  onAddMedia: function (e) {
                    o(e, function (e) {
                      var t = (function (e, t) {
                        var n = e.getCurrentContent(),
                          a = t.map(function (e) {
                            return { mediaCategory: Be(e), localMediaId: e.id }
                          }),
                          r = n.createEntity(K.b.MEDIA, K.a.IMMUTABLE, { mediaItems: a, media: t, uploaded: !1 }),
                          i = r.getLastCreatedEntityKey(),
                          o = r.mergeEntityData(i, { entityKey: i }),
                          l = Oe.EditorState.set(e, { currentContent: o })
                        return Oe.AtomicBlockUtils.insertAtomicBlock(l, i, ' ')
                      })(n, e)
                      l(t)
                    }),
                      m()
                  },
                  onAddTweets: function (e) {
                    var t = (function (e, t) {
                      return t.reduce(function (e, t) {
                        return De(e, t)
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
        ze = n('Nh1N'),
        Ue = n('eQRO'),
        We = n('4zmP'),
        Ve = n('XiMS'),
        Ke = V.a.create(function (e) {
          return {
            sheet: { maxHeight: '80vh' },
            container: { paddingBottom: e.spaces.space16, paddingHorizontal: e.spaces.space16 },
            checkbox: { marginTop: e.spaces.space16 },
            overlay: { justifyContent: 'center', zIndex: 1 },
            activityIndicator: { alignSelf: 'center' },
          }
        }),
        Ge = function (e) {
          var t = e.hasPublishingFailed,
            n = e.isPublishing,
            a = e.onClose,
            r = e.onPublish,
            i = u.a.useState(!1),
            o = c()(i, 2),
            l = o[0],
            s = o[1],
            d = u.a.useState(!1),
            p = c()(d, 2),
            f = p[0],
            h = p[1]
          return u.a.createElement(
            Ce.a,
            {
              onClose: function () {
                !n && a()
              },
              primaryButtonConfig: {
                label: 'Publish',
                forceDisabled: n,
                onClick: function () {
                  r(l, f)
                },
              },
              style: Ke.sheet,
              title: 'Publish article',
            },
            n && u.a.createElement(Ue.a, { activityIndicatorStyle: Ke.activityIndicator, style: Ke.overlay }),
            u.a.createElement(
              we.a,
              { style: Ke.container },
              t &&
                u.a.createElement(We.a, {
                  text: 'Something went wrong, but don’t fret - let’s give it another shot.',
                  type: 'danger',
                }),
              u.a.createElement(pe.a, { spacing: 'space12' }),
              u.a.createElement(Ve.a, {
                checked: l,
                helpText:
                  'You’ll get the opportunity in the next step to tweet the article to your feed, circles or your communities',
                label: 'Tweet article',
                onChange: s,
                testID: 'tweetArticleCheckbox',
              }),
              u.a.createElement(Ve.a, {
                checked: f,
                helpText:
                  'The article URL will be copied to your clipboard after publishing so you can share it on your website, journals, forums or email',
                label: 'Copy link to article to your clipboard',
                onChange: h,
                style: Ke.checkbox,
                testID: 'copyTwitterArticleLinkCheckbox',
              }),
              u.a.createElement(pe.a, { spacing: 'space16' }),
              u.a.createElement(We.a, {
                Icon: ze.a,
                headline: 'You can find this published article in the ‘Articles’ tab in your profile',
              }),
            ),
          )
        },
        Ne = n('hHEM'),
        Xe = n('9Xij'),
        Ye = n('t62R'),
        Je = n('GBcw'),
        qe = n('6OUF'),
        Qe = n('jV+4'),
        Ze = n('eb3s'),
        $e = n('G1WX'),
        et = n('CaKu'),
        tt = n('U+bB'),
        nt = 'Share Twitter article',
        at = 'Twitter Article Published',
        rt = 'Twitter Article published and URL copied to the clipboard',
        it = 'Return to drafts',
        ot = 'View',
        lt = n('ONCy'),
        ct = n('mN6z'),
        st = n('VY6S'),
        ut = u.a.createElement(L.a, null),
        dt = function (e) {
          return '/i/twitter-articles/'.concat(e)
        },
        pt = function (e) {
          return 'https://twitter.com'.concat(dt(e))
        },
        ft = function (e) {
          try {
            return e ? JSON.parse(e) : void 0
          } catch (t) {
            return
          }
        },
        ht = function (e) {
          var t,
            n,
            a,
            i = e.addCoverImage,
            l = e.addMedia,
            s = e.addToast,
            d = e.allMedia,
            p = e.author,
            f = e.authorId,
            h = e.coverImage,
            m = e.createLocalApiErrorHandler,
            v = e.dataSaverMode,
            g = e.deleteTwitterArticle,
            y = e.fetchStatus,
            b = e.fetchTwitterArticle,
            E = e.fetchUserIfNeeded,
            w = e.history,
            C = e.match.params.twitterArticleId,
            _ = e.preUploadMedia,
            S = e.processMultipleMedia,
            k = e.removeCoverImage,
            x = e.removeMediaUpload,
            T = e.saveTwitterArticle,
            L = e.setMediaMetadata,
            F = e.title,
            j = e.twitterArticle,
            H = e.updateTwitterArticleCoverImage,
            z = e.updateTwitterArticleMedia,
            W = e.updateTwitterArticleTitle,
            G = e.updateTwitterArticleVisibility,
            N = e.uploadMedia,
            X = (null == j || null === (t = j.metadata) || void 0 === t ? void 0 : t.visibility) === K.d.PUBLISHED,
            Y = function (e) {
              var t = ft(e),
                n = Ne.a.initEditorState(t)
              return Ne.a.convertEmojiToEntities(n)
            },
            J = u.a.useState(Y()),
            q = c()(J, 2),
            Q = q[0],
            Z = q[1],
            $ = u.a.useState(!1),
            ee = c()($, 2),
            te = ee[0],
            ne = ee[1],
            ae = u.a.useState(!1),
            re = c()(ae, 2),
            ie = re[0],
            oe = re[1],
            le = u.a.useState(!1),
            ce = c()(le, 2),
            se = ce[0],
            ue = ce[1],
            de = u.a.useState({}),
            pe = c()(de, 2),
            fe = pe[0],
            he = pe[1],
            me = u.a.useState(!1),
            ve = c()(me, 2),
            ge = ve[0],
            ye = ve[1],
            be = u.a.useState(!1),
            Ee = c()(be, 2),
            Ce = Ee[0],
            _e = Ee[1],
            Se = u.a.useState(!1),
            ke = c()(Se, 2),
            xe = ke[0],
            Te = ke[1],
            Ie = u.a.useState(!0),
            Me = c()(Ie, 2),
            Pe = Me[0],
            Le = Me[1]
          u.a.useEffect(
            function () {
              b(C).catch(m()), f && E(f).catch(m())
            },
            [f, m, E, b, C],
          )
          u.a.useEffect(
            function () {
              if (j) {
                var e,
                  t,
                  n = (function (e) {
                    if (Q) {
                      var t = ft(e),
                        n = t ? Object(Oe.convertFromRaw)(t) : Oe.ContentState.createFromText(''),
                        a = Oe.EditorState.set(Q, {
                          currentContent: n,
                          directionMap: I.a.getDirectionMap(n, Q.getDirectionMap()),
                          selection: Oe.SelectionState.createEmpty(n.getFirstBlock().key),
                        })
                      return Ne.a.convertEmojiToEntities(a)
                    }
                    return Y(e)
                  })(null == j || null === (e = j.data) || void 0 === e ? void 0 : e.contentStateJson),
                  a =
                    null == j || null === (t = j.media) || void 0 === t
                      ? void 0
                      : t.filter(function (e) {
                          return (null == e ? void 0 : e.media_id) && !fe[e.media_id]
                        })
                if (a && a.length > 0) {
                  var r = Object(P.d)(a).externalMedia
                  Promise.all(
                    r.map(function (e) {
                      var t = e.url
                      return Object(M.a)(t)
                    }),
                  )
                    .then(function (e) {
                      return l(e, { location: B.d.TwitterArticle })
                    })
                    .then(function (e) {
                      return e.map(function (e, t) {
                        var n = r[t],
                          a = n.altText,
                          i = n.sensitiveMediaWarning
                        return (
                          (a || i) &&
                            L(
                              e.id,
                              o()(
                                o()({}, Object(lt.a)(a ? { altText: a } : null)),
                                Object(lt.a)(i ? { sensitiveMediaWarning: i } : null),
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
                      he(o()(o()({}, fe), t)), Z(Oe.EditorState.forceSelection(n, n.getSelection()))
                    })
                } else Z(n)
              }
            },
            [null == j ? void 0 : j.rest_id],
          )
          var Re,
            De,
            Be,
            Ae,
            Fe = function (e) {
              var t = Ne.a.convertEmojiToEntities(e)
              Z(t),
                !Object(ct.a)(
                  Object(Oe.convertToRaw)(t.getCurrentContent()),
                  Object(Oe.convertToRaw)(Q.getCurrentContent()),
                ) && (Pe && Le(!1), ht(t))
            },
            je = function (e, t) {
              l(e, { location: B.d.TwitterArticle }).then(function (e) {
                if (Object(O.c)(e))
                  S(e, { onFailure: x }).then(function (e) {
                    v ||
                      _(
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
                  s({ text: 'Please choose either 1 GIF or up to 4 photos.' }), x(n)
                }
              })
            },
            ze = function (e) {
              return Object.keys(e).filter(function (t) {
                return e[t].type === K.b.MEDIA
              })
            },
            Ue = u.a.useCallback(
              function (e) {
                var t = e.entityMap,
                  n = ze(t).reduce(function (e, n) {
                    var a,
                      i =
                        (null === (a = t[n].data) || void 0 === a
                          ? void 0
                          : a.mediaItems.map(function (e) {
                              return { media_category: e.mediaCategory, media_id: e.mediaId }
                            })) || []
                    return [].concat(r()(e), r()(i))
                  }, [])
                z(C, { mediaKeys: n })
                  .then(function () {
                    T(C, { contentStateJson: JSON.stringify(e) })
                      .then(function () {
                        return Le(!0)
                      })
                      .catch(m({}))
                  })
                  .catch(m({}))
              },
              [m, T, C, z],
            ),
            We = u.a.useCallback(
              function (e) {
                var t = e.getCurrentContent(),
                  n = Object(Oe.convertToRaw)(t),
                  a = n.entityMap,
                  i = ze(a).filter(function (e) {
                    var t
                    return !(null !== (t = a[e].data) && void 0 !== t && t.uploaded)
                  }),
                  o = i.reduce(function (e, t) {
                    var n,
                      i =
                        (null === (n = a[t].data) || void 0 === n
                          ? void 0
                          : n.mediaItems.map(function (e) {
                              return e.localMediaId
                            })) || []
                    return [].concat(r()(e), r()(i))
                  }, [])
                o.length > 0
                  ? N(o).then(function (e) {
                      var n = i.reduce(function (t, n) {
                        var r = a[n].data || {},
                          i = {
                            mediaItems: r.mediaItems.map(function (t) {
                              var n
                              return {
                                mediaCategory: t.mediaCategory,
                                mediaId:
                                  null ===
                                    (n = e.find(function (e) {
                                      return e.id === t.localMediaId
                                    })) || void 0 === n
                                    ? void 0
                                    : n.uploadId,
                              }
                            }),
                            uploaded: !0,
                          }
                        return t.mergeEntityData(r.entityKey, i)
                      }, t)
                      Ue(Object(Oe.convertToRaw)(n))
                    })
                  : Ue(n)
              },
              [N, Ue],
            ),
            Ve = function () {
              w.push({
                pathname: '/compose/tweet',
                query: { text: pt(C) },
                state: { headingTitle: nt, hideUnsentTweetsButton: !0, positionCursorAtBeginning: !0 },
              })
            },
            Ke = u.a.useMemo(
              function () {
                return Object(st.a)(function (e) {
                  W(C, { title: e || '' }).catch(m({}))
                }, 250)
              },
              [m, C, W],
            ),
            ht = u.a.useMemo(
              function () {
                return Object(st.a)(We, 250)
              },
              [We],
            ),
            vt = function () {
              ne(function (e) {
                return !e
              })
            },
            gt = function (e) {
              x(e), k(e)
            },
            yt = null == j ? void 0 : j.cover_image,
            bt =
              'ApiImage' === (null == yt || null === (n = yt.media_info) || void 0 === n ? void 0 : n.__typename)
                ? null == yt || null === (a = yt.media_info) || void 0 === a
                  ? void 0
                  : a.original_img_url
                : void 0,
            Et = u.a.createElement(
              Xe.a,
              { ratio: V.a.theme.aspectRatios.twitterArticleBanner },
              bt ? u.a.createElement(tt.a, { source: { uri: bt }, style: mt.coverImage }) : null,
            ),
            wt = u.a.createElement(
              Ye.b,
              { color: 'gray700', size: 'subtext2', style: mt.saveMessage, weight: 'normal' },
              Pe
                ? ((De = Number(null == j || null === (Re = j.metadata) || void 0 === Re ? void 0 : Re.updatedAtMs)),
                  (Be = Date.now()),
                  (Ae = Math.floor((Be - De) / 1e3)),
                  u.a.createElement(
                    u.a.Fragment,
                    null,
                    'Last saved ',
                    u.a.createElement(
                      Ye.b,
                      { weight: 'bold' },
                      Ae <= 5 ? 'just now' : u.a.createElement(Je.a, { humanReadable: !0, timestamp: Number(De) }),
                    ),
                  ))
                : 'Saving...',
            ),
            Ct = u.a.createElement(
              we.a,
              { style: mt.row },
              u.a.createElement(
                U.a,
                {
                  onClick: function () {
                    X ? ue(!0) : ye(!0)
                  },
                  style: mt.buttonMargin,
                  type: X ? void 0 : 'brandFilled',
                },
                X ? it : 'Publish',
              ),
              X && u.a.createElement(U.a, { onClick: Ve, style: mt.buttonMargin, type: 'brandFilled' }, 'Tweet'),
              u.a.createElement(U.a, { icon: ut, onClick: vt, type: 'destructiveText' }),
            ),
            _t = u.a.createElement(qe.a, {
              defaultValue: F,
              inputStyle: mt.titleInput,
              key: 'title-input-'.concat(C),
              name: 'Twitter Article Title',
              onChange: function (e) {
                Ke(e.target.value)
              },
              placeholder: 'Type your article title here...',
              placeholderTextColor: V.a.theme.colors.gray400,
              styleType: 'selection',
            }),
            St = yt || h,
            kt = u.a.createElement(
              we.a,
              null,
              u.a.createElement(
                we.a,
                { style: [mt.middleControl, !St && mt.emptyCoverImageBackground] },
                u.a.createElement(D.default, {
                  aspectRatio: V.a.theme.aspectRatios.twitterArticleBanner,
                  currentContent: Et,
                  description: St
                    ? void 0
                    : 'Adding a cover image is optional, you might want to add one to attract more readers',
                  innerStyle: mt.mediaPickerInner,
                  location: B.d.TwitterArticle,
                  maskStyle: mt.coverImageMaskStyle,
                  mediaItem: h,
                  onChange: function (e) {
                    var t = c()(e, 1)[0]
                    i(t), oe(!0)
                  },
                  onFailure: gt,
                  onRemove: St
                    ? function () {
                        H(C, { mediaId: void 0 }).catch(m({ showToast: !0 }))
                      }
                    : void 0,
                  rootStyle: mt.mediaPicker,
                }),
                u.a.createElement(
                  we.a,
                  { style: [mt.metadataContainer, mt.metadataMargins] },
                  p
                    ? u.a.createElement(Qe.a, {
                        isVerified: p.verified,
                        name: p.name,
                        profileImageUrl: p.profile_image_url_https,
                        screenName: p.screen_name,
                        style: mt.author,
                        withLink: !0,
                      })
                    : null,
                ),
              ),
              u.a.createElement(we.a, { style: mt.metadataMargins }, _t),
            ),
            xt = u.a.createElement(we.a, null, !X && wt)
          return u.a.createElement(
            A.a,
            { appBarStyle: mt.appBar, rightControl: Ct, screenType: 'primaryDetail', title: xt, withBottomBorder: !1 },
            te
              ? u.a.createElement(Ze.a, {
                  headline: 'Delete Twitter Article?',
                  onCancel: vt,
                  onConfirm: function () {
                    g(C).then(function () {
                      w.replace('/i/twitter-article-composer')
                    })
                  },
                })
              : null,
            ie
              ? u.a.createElement(R.a, {
                  defaultAspectRatio: V.a.theme.aspectRatios.twitterArticleBanner,
                  media: h,
                  onCancel: function () {
                    h && gt(h.id), oe(!1)
                  },
                  onDone: function () {
                    h &&
                      (N([h.id]).then(function (e) {
                        var t = c()(e, 1)[0]
                        H(C, { mediaId: t.uploadId })
                          .then(function () {
                            gt(h.id)
                          })
                          .catch(m({ showToast: !0 }))
                      }),
                      oe(!1))
                  },
                })
              : null,
            se
              ? u.a.createElement(Ze.a, {
                  confirmButtonLabel: it,
                  headline: 'Are you sure?',
                  onCancel: function () {
                    ue(function (e) {
                      return !e
                    })
                  },
                  onConfirm: function () {
                    G(C, { visibility: K.d.DRAFT })
                      .then(s({ text: 'Twitter Article Unpublished' }))
                      .catch(m({}))
                      .finally(function () {
                        return ue(!1)
                      })
                  },
                  text: 'This article will be taken down and will be returned to your drafts',
                })
              : null,
            ge
              ? u.a.createElement(Ge, {
                  hasPublishingFailed: xe,
                  isPublishing: Ce,
                  onClose: function () {
                    ye(function (e) {
                      return !e
                    })
                  },
                  onPublish: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                      t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                    _e(!0),
                      Te(!1),
                      G(C, { visibility: K.d.PUBLISHED })
                        .then(function () {
                          var n = { label: ot, link: { pathname: pt(C), openInSameFrame: !1, external: !0 } }
                          t && et.a.isAvailable()
                            ? (et.a.setString(pt(C)), s({ text: rt, action: n }))
                            : s({ text: at, action: n }),
                            e && (w.push({ pathname: dt(C) }), Ve()),
                            ye(!1)
                        })
                        .catch(
                          m({
                            customErrorHandler: function (e) {
                              return Te(!0), []
                            },
                          }),
                        )
                        .finally(function () {
                          return _e(!1)
                        })
                  },
                })
              : null,
            u.a.createElement(
              we.a,
              { style: mt.container },
              u.a.createElement($e.a, {
                fetchStatus: y,
                render: function () {
                  return u.a.createElement(He, {
                    allMedia: d,
                    editorState: Q,
                    inputStyle: mt.editorContent,
                    mediaIdToLocalMediaIdMap: fe,
                    middleControl: kt,
                    onAddMediaFiles: je,
                    onChange: Fe,
                    twitterArticleId: C,
                  })
                },
              }),
            ),
          )
        },
        mt = V.a.create(function (e) {
          return {
            container: { zIndex: e.componentZIndices.appBarZIndex - 1 },
            appBar: { backgroundColor: e.colors.cellBackground },
            row: { flexDirection: 'row' },
            buttonMargin: { marginRight: e.spaces.space8 },
            editorContent: { paddingHorizontal: 'calc(2 * '.concat(e.componentDimensions.gutterHorizontal, ')') },
            middleControl: { display: 'flex', justifyContent: 'space-between' },
            emptyCoverImageBackground: { backgroundColor: e.colors.gray300 },
            coverImage: { height: '100%', width: '100%' },
            coverImageMaskStyle: { backgroundColor: e.colors.transparent },
            mediaPicker: { flex: 1 },
            mediaPickerInner: { paddingBottom: e.spaces.space40 },
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
            saveMessage: { alignSelf: 'center', flexDirection: 'row', marginRight: e.spaces.space8 },
          }
        }),
        vt = x(ht)
      t.default = vt
    },
    'Qp/W': function (e, t, n) {
      'use strict'
      var a = n('IGGJ')
      n('iKE+'),
        n('KqXw'),
        n('DZ+c'),
        n('WNMA'),
        Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e, t, n) {
          null == t && (t = !0)
          null == n && (n = !0)
          if (!e) return !1
          var a = e.match(s.default)
          if (!a || a[0] !== e) return !1
          var p = a[1],
            f = a[2],
            h = a[3],
            m = a[4],
            v = a[5]
          if (
            !(
              (!n || (d(p, c.default) && p.match(/^https?$/i))) &&
              d(h, o.default) &&
              d(m, l.default, !0) &&
              d(v, i.default, !0)
            )
          )
            return !1
          return (t && d(f, u.default)) || (!t && d(f, r.default))
        })
      var r = a(n('ta7H')),
        i = a(n('kAdf')),
        o = a(n('OVD+')),
        l = a(n('IM13')),
        c = a(n('IbdM')),
        s = a(n('6sfk')),
        u = a(n('b1+5'))
      function d(e, t, n) {
        return n ? !e || (e.match(t) && RegExp['$&'] === e) : 'string' == typeof e && e.match(t) && RegExp['$&'] === e
      }
      e.exports = t.default
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
        f = n('KEM+'),
        h = n.n(f),
        m = (n('2G9S'), n('849X'), n('TJCb'), n('ERkP')),
        v = n.n(m),
        g = n('oEoC'),
        y = n('2dXj'),
        b = n('4bHO'),
        E = n('dzqK'),
        w = n('GZwR'),
        C = n('zpdM'),
        _ = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(c()(e), 'state', { queryContext: void 0, canShowTypeahead: !1 }),
              h()(c()(e), '_genericWrapperRef', v.a.createRef()),
              h()(c()(e), 'render', function () {
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
                    source: l || w.d.Compose,
                  },
                  n(e._handleInputChange),
                )
              }),
              h()(c()(e), '_getCaret', function (e) {
                return e.getSelection().getStartOffset()
              }),
              h()(c()(e), '_getPlaintextFromCurrentBlock', function (e) {
                var t = e.getSelection().anchorKey
                return e.getCurrentContent().getBlockForKey(t).getText()
              }),
              h()(c()(e), '_handleSelectItem', function (t) {
                var n = e.props.onTextUpdated,
                  a = e.state.queryContext
                if (a) {
                  var r = Object(b.a)(t, a.resultType)
                  n(e._replaceToken(r, a))
                }
                e._setQueryContext(void 0)
              }),
              h()(c()(e), '_handleInputChange', function (t) {
                if (!Object(E.a)(t))
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
              h()(c()(e), '_setQueryContext', function (t) {
                return e.setState({ queryContext: t, canShowTypeahead: !!t })
              }),
              h()(c()(e), '_handleDismiss', function () {
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
                    o = C.Modifier.replaceText(n.getCurrentContent(), i, e),
                    l = C.EditorState.push(n, o, 'insert-characters'),
                    c = r + e.length,
                    s = l.getSelection().merge({ anchorOffset: c, focusOffset: c })
                  return C.EditorState.forceSelection(l, s)
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      t.a = _
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
        return T
      }),
        n.d(t, 'd', function () {
          return I
        }),
        n.d(t, 'f', function () {
          return M
        }),
        n.d(t, 'a', function () {
          return P
        }),
        n.d(t, 'c', function () {
          return L
        }),
        n.d(t, 'e', function () {
          return R
        }),
        n.d(t, 'h', function () {
          return D
        }),
        n.d(t, 'g', function () {
          return B
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
        f = function () {
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
      f.metadata = { width: 24, height: 24 }
      var h = f,
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
                d: 'M21.75 16.75a.75.75 0 01-.75.75H9A.75.75 0 019 16h12a.75.75 0 01.75.75zM9 7.5h12A.75.75 0 0021 6H9a.75.75 0 000 1.5zM4.5 4.25A2.25 2.25 0 106.75 6.5 2.253 2.253 0 004.5 4.25zm0 10a2.25 2.25 0 102.25 2.25 2.253 2.253 0 00-2.25-2.25z',
                fillRule: 'evenodd',
              }),
            ),
          )
        }
      E.metadata = { width: 24, height: 24 }
      var w = E,
        C = function () {
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
      C.metadata = { width: 24, height: 24 }
      var _ = C,
        S = n('I/9y'),
        k = u.a.create(function (e) {
          return { iconGray: { color: e.colors.gray700 } }
        }),
        x = {
          iconBold: c.a.createElement(h, { style: k.iconGray }),
          iconItalic: c.a.createElement(v, { style: k.iconGray }),
          iconCode: c.a.createElement(g.a, { style: k.iconGray }),
          iconStrikethrough: c.a.createElement(b, { style: k.iconGray }),
          iconBulletedList: c.a.createElement(w, { style: k.iconGray }),
          iconNumberedList: c.a.createElement(_, { style: k.iconGray }),
          iconLink: c.a.createElement(S.a, { style: k.iconGray }),
        },
        T = { bold: 'BOLD', italic: 'ITALIC', code: 'CODE', strikethrough: 'STRIKETHROUGH' },
        I = function (e) {
          return [
            { icon: x.iconBold, key: 'bold', onPress: e(T.bold) },
            { icon: x.iconItalic, key: 'italic', onPress: e(T.italic) },
            { icon: x.iconStrikethrough, key: 'strikethrough', onPress: e(T.strikethrough) },
          ]
        },
        M = function (e) {
          return [{ icon: x.iconCode, key: 'code', onPress: e(T.code) }]
        },
        P = {
          bulleted: 'unordered-list-item',
          header1: 'header-one',
          header2: 'header-two',
          numbered: 'ordered-list-item',
          paragraph: 'unstyled',
        },
        L = function (e) {
          return [
            { icon: x.iconBulletedList, key: 'bulleted', onPress: e(P.bulleted) },
            { icon: x.iconNumberedList, key: 'numbered', onPress: e(P.numbered) },
          ]
        },
        R = function (e) {
          return [{ icon: x.iconLink, key: 'link', onPress: e }]
        },
        O = function (e, t) {
          return function (n) {
            return c.a.createElement(s.b, { size: e, weight: t }, n)
          }
        },
        D = [
          { blockType: P.header1, label: 'Title', render: O('title1', 'heavy') },
          { blockType: P.header2, label: 'Subtitle', render: O('title3', 'heavy') },
          { blockType: P.paragraph, label: 'Paragraph', render: O('body') },
        ],
        B = D.reduce(function (e, t) {
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
          f = e.secondaryButtonConfig,
          h = e.style,
          m = e.title,
          v = e.withPassthroughEvents,
          g = o.a.useState(!1),
          y = r()(g, 2),
          b = y[0],
          E = y[1],
          w = function () {
            E(function (e) {
              return !e
            })
          },
          C = o.a.createElement(c.a, { backButtonType: n ? 'back' : 'close', onClick: n || a }),
          _ = i
            ? o.a.createElement(
                s.a,
                {
                  accessibilityLabel: i.label,
                  disabled: b || i.forceDisabled,
                  onClick: function () {
                    w(), null == i || i.onClick(w)
                  },
                  size: 'small',
                  type: 'primaryFilled',
                },
                i.label,
              )
            : null,
          S = f
            ? o.a.createElement(
                s.a,
                {
                  accessibilityLabel: f.label,
                  onClick: function () {
                    null == f || f.onClick()
                  },
                  size: 'small',
                  style: p.secondaryButton,
                  type: 'primaryOutlined',
                },
                f.label,
              )
            : null,
          k = o.a.createElement(l.a, { style: p.buttonContainer }, _, S)
        return o.a.createElement(
          u.a,
          {
            enableMaskForDismiss: !0,
            onMaskClick: a,
            style: [p.sheet, h],
            type: 'full',
            withKeyboardNavigation: !0,
            withMask: !0,
            withPassthroughEvents: v,
          },
          o.a.createElement(d.a, { leftControl: C, rightControl: k, style: p.appBar, title: m }),
          o.a.createElement(l.a, { style: p.content }, t),
        )
      }
    },
    Umjq: function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var a = /[0-9]{1,5}/
      ;(t.default = a), (e.exports = t.default)
    },
    UwBx: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return oe
      })
      var a = n('RhWx'),
        r = n.n(a),
        i = n('m3Bd'),
        o = n.n(i),
        l = n('yiKp'),
        c = n.n(l),
        s = n('97Jx'),
        u = n.n(s),
        d = n('ddV6'),
        p = n.n(d),
        f = n('VrFO'),
        h = n.n(f),
        m = n('Y9Ll'),
        v = n.n(m),
        g = n('1Pcy'),
        y = n.n(g),
        b = n('5Yy7'),
        E = n.n(b),
        w = n('2VqO'),
        C = n.n(w),
        _ = n('KEM+'),
        S = n.n(_),
        k = (n('2G9S'), n('M+/F'), n('7x/C'), n('JtPf'), n('KOtZ'), n('z84I'), n('3voH'), n('uFXj'), n('ERkP')),
        x = n.n(k),
        T = n('mjJ+'),
        I = n('t62R'),
        M = n('/yvb'),
        P = n('VUbk'),
        L = n.n(P),
        R = n('P71G'),
        O = n('FG+G'),
        D = n('Qp/W'),
        B = n.n(D),
        A = n('IG7M'),
        F = n('rHpw'),
        j = n('MWbm'),
        H = F.a.create(function (e) {
          return {
            separator: {
              borderRightWidth: e.borderWidths.small,
              borderColor: e.colors.gray200,
              marginVertical: e.spaces.space8,
            },
          }
        }),
        z = function (e) {
          var t = e.style
          return x.a.createElement(j.a, { style: [H.separator, t] })
        },
        U = n('Tvzs'),
        W = n('LQrL'),
        V = n('zpdM'),
        K = n('6OUF'),
        G = n('zrc3'),
        N = n('Dxq9'),
        X = n('sXY3'),
        Y = n('tn7R'),
        J = [
          'additionalToolbarButtonConfigs',
          'inputStyle',
          'middleControl',
          'richTextInputContext',
          'toolbarRightControl',
        ],
        q = 'Add link',
        Q = 'Edit link',
        Z = 'Edit',
        $ = 'Remove',
        ee = 'Link text',
        te = 'Link Source',
        ne = 'Save',
        ae = 'Insert',
        re = 'URL must be provided',
        ie = 'Invalid URL',
        oe = (function (e) {
          E()(n, e)
          var t = C()(n)
          function n() {
            var e
            h()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              S()(y()(e), 'state', { selectedTextSize: U.h[2], showLinkSheet: !1 }),
              S()(y()(e), '_isEditorFocused', function () {
                var t = e.props.richTextInputContext.editorState
                return null == t ? void 0 : t.getSelection().getHasFocus()
              }),
              S()(y()(e), '_getEditorStateWithLinkSelected', function (t) {
                var n = e._getSelectedEntityWithRange()
                if (n) {
                  var a = n.end,
                    r = n.entity,
                    i = n.start,
                    o = r.getData().url
                  if (o)
                    return { editorStateWithLinkSelected: e._getEditorStateWithTextSelection(t, i, a), entityUrl: o }
                }
                return { editorStateWithLinkSelected: t, entityUrl: void 0 }
              }),
              S()(y()(e), '_getEditorStateWithTextSelection', function (e, t, n) {
                var a = e.getSelection(),
                  r = a.merge(
                    a.getIsBackward() ? { anchorOffset: n, focusOffset: t } : { anchorOffset: t, focusOffset: n },
                  )
                return V.EditorState.acceptSelection(e, r)
              }),
              S()(y()(e), '_getSelectedText', function (e) {
                var t = e.getSelection(),
                  n = e.getCurrentContent(),
                  a = t.getStartKey()
                if (a === t.getEndKey()) {
                  var r = n.getBlockForKey(a),
                    i = t.getStartOffset(),
                    o = t.getEndOffset()
                  return r.getText().slice(i, o) || ''
                }
              }),
              S()(y()(e), '_getSelectedEntityWithRange', function () {
                var t = e.props.richTextInputContext.editorState
                if (t) {
                  var n = t.getSelection(),
                    a = t.getCurrentContent(),
                    r = n.getAnchorKey(),
                    i = a.getBlockForKey(r),
                    o = i.getEntityAt(n.getAnchorOffset()),
                    l = i.getEntityAt(n.getFocusOffset())
                  if (o && o === l) {
                    var c = i.getCharacterList().toArray(),
                      s = function (e) {
                        return (null == e ? void 0 : e.getEntity()) === o
                      }
                    return { start: Object(G.a)(c, s), end: Object(N.a)(c, s) + 1, entity: a.getEntity(o) }
                  }
                }
              }),
              S()(y()(e), '_toggleTextStyle', function (t) {
                var n = e.props,
                  a = n.onChange,
                  r = n.richTextInputContext.editorState
                return function (e) {
                  return function () {
                    r && (null == a || a(t(r, e)))
                  }
                }
              }),
              S()(y()(e), '_handleTextSizeClick', function (t) {
                return function () {
                  e.setState({ selectedTextSize: t }), e._toggleTextStyle(V.RichUtils.toggleBlockType)(t.blockType)()
                }
              }),
              S()(y()(e), '_mergeMap', function (e, t) {
                return Object(X.a)(t).reduce(function (e, t) {
                  var n = p()(t, 2),
                    a = n[0],
                    r = n[1]
                  return e.set(a, r)
                }, e)
              }),
              S()(y()(e), '_handleToggleLinkSheet', function () {
                var t = e.state.showLinkSheet
                e.setState({ showLinkSheet: !t })
              }),
              S()(y()(e), '_handleAddLink', function (t, n) {
                return function (a) {
                  var r = a.source,
                    i = a.text,
                    o = e.props.onChange
                  if (o && r) {
                    var l = t.getSelection(),
                      c = n
                        ? V.EditorState.push(
                            t,
                            V.Modifier.replaceText(t.getCurrentContent(), l, i || r),
                            'insert-characters',
                          )
                        : t,
                      s = c.getSelection(),
                      u = e._getEditorStateWithTextSelection(c, l.getStartOffset(), s.getEndOffset()),
                      d = u.getCurrentContent().createEntity('LINK', 'MUTABLE', { url: r }).getLastCreatedEntityKey()
                    o(V.RichUtils.toggleLink(u, u.getSelection(), d))
                  }
                  e._handleToggleLinkSheet()
                }
              }),
              S()(y()(e), '_handleRemoveLink', function () {
                var t = e.props,
                  n = t.onChange,
                  a = t.richTextInputContext.editorState
                if (n && a) {
                  var r = e._getEditorStateWithLinkSelected(a).editorStateWithLinkSelected
                  n(V.RichUtils.toggleLink(r, r.getSelection(), null))
                }
              }),
              S()(y()(e), '_getSourceInputErrorText', function (e) {
                return e ? (B()(e, !1, !1) ? void 0 : ie) : re
              }),
              S()(y()(e), '_renderToolbarButtonGroup', function (t, n) {
                return x.a.createElement(
                  j.a,
                  { style: le.buttonGroup },
                  n ? null : x.a.createElement(z, { style: le.separatorMargin }),
                  t.map(function (t, n) {
                    return x.a.createElement(
                      M.a,
                      u()({ preventFocusShift: e._isEditorFocused(), size: 'small', type: t.type || 'primaryText' }, t),
                    )
                  }),
                )
              }),
              S()(y()(e), '_renderActionMenu', function (t) {
                var n = U.h.map(function (t) {
                  return { text: t.render(t.label), onClick: e._handleTextSizeClick(t) }
                })
                return x.a.createElement(T.a, {
                  items: n,
                  onCloseRequested: t,
                  preventFocusShift: e._isEditorFocused(),
                  shouldCloseOnClick: !0,
                })
              }),
              S()(y()(e), '_renderLinkPopoverContent', function (t, n) {
                return function (a) {
                  var r = {
                    external: !0,
                    openInSameFrame: !1,
                    pathname: n.startsWith('http://') || n.startsWith('https://') ? n : 'https://'.concat(n),
                  }
                  return x.a.createElement(
                    j.a,
                    { style: le.linkPopoverContent },
                    x.a.createElement(I.b, { style: le.bottomMargin, weight: 'bold' }, t),
                    x.a.createElement(I.b, { color: 'text', link: r, style: le.bottomMargin, withUnderline: !0 }, n),
                    x.a.createElement(
                      j.a,
                      { style: le.linkPopoverButtons },
                      x.a.createElement(
                        M.a,
                        {
                          onPress: function () {
                            a(), e._handleToggleLinkSheet()
                          },
                          type: 'primaryFilled',
                        },
                        Z,
                      ),
                      x.a.createElement(
                        M.a,
                        {
                          onPress: function () {
                            a(), e._handleRemoveLink()
                          },
                          style: le.removeLinkButtonMargin,
                        },
                        $,
                      ),
                    ),
                  )
                }
              }),
              S()(y()(e), '_renderLinkSheet', function () {
                var t = e.props.richTextInputContext.editorState
                if (t) {
                  var n = e._getEditorStateWithLinkSelected(t),
                    a = n.editorStateWithLinkSelected,
                    r = n.entityUrl,
                    i = e._getSelectedText(a)
                  return x.a.createElement(R.a, {
                    buttonLabelOverride: r ? ne : ae,
                    fields: c()(
                      { source: { label: te, initialValue: r || '', getErrorText: e._getSourceInputErrorText } },
                      void 0 !== i ? { text: { label: ee, initialValue: i } } : {},
                    ),
                    onClose: e._handleToggleLinkSheet,
                    onSave: e._handleAddLink(a, void 0 !== i),
                    sheetTitle: r ? Q : q,
                  })
                }
              }),
              S()(y()(e), '_setFieldTextInputRef', function (t) {
                e.fieldTextInput = t
              }),
              e
            )
          }
          return (
            v()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.onChange,
                    n = e.richTextInputContext.editorState
                  if (t && n) {
                    var a = new V.CompositeDecorator([Object(W.e)(this._renderLinkPopoverContent), W.a, W.b, W.f])
                    t(V.EditorState.set(n, { decorator: a }))
                  }
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.additionalToolbarButtonConfigs,
                    n = e.inputStyle,
                    a = e.middleControl,
                    i = e.richTextInputContext,
                    l = e.toolbarRightControl,
                    s = o()(e, J),
                    d = this.state,
                    p = d.selectedTextSize,
                    f = d.showLinkSheet,
                    h = Object(U.d)(this._toggleTextStyle(V.RichUtils.toggleInlineStyle)),
                    m = Object(U.f)(this._toggleTextStyle(V.RichUtils.toggleInlineStyle)),
                    v = Object(U.c)(this._toggleTextStyle(V.RichUtils.toggleBlockType)),
                    g = Object(U.e)(this._handleToggleLinkSheet),
                    y = this._mergeMap(this._mergeMap(L.a, U.g), i.blockRenderMap || {}),
                    b = c()(
                      c()({}, i),
                      {},
                      {
                        blockRenderMap: y,
                        pastedStylesAllowlist: [].concat(
                          r()(Object(Y.a)(U.b)),
                          r()(Object(Y.a)(U.a)),
                          r()(i.pastedStylesAllowlist || []),
                        ),
                      },
                    )
                  return x.a.createElement(
                    x.a.Fragment,
                    null,
                    f ? this._renderLinkSheet() : null,
                    x.a.createElement(
                      j.a,
                      { style: le.toolbar },
                      x.a.createElement(
                        j.a,
                        { style: le.stylingButtons },
                        this._renderToolbarButtonGroup(h, !0),
                        this._renderToolbarButtonGroup(m),
                        x.a.createElement(z, { style: le.separatorMargin }),
                        x.a.createElement(
                          j.a,
                          { style: le.textSizeSelection },
                          x.a.createElement(
                            I.b,
                            { color: 'gray700', numberOfLines: 1, size: 'subtext1' },
                            null == p ? void 0 : p.label,
                          ),
                          x.a.createElement(A.a, {
                            Icon: O.a,
                            iconSize: 'small',
                            preventFocusShift: this._isEditorFocused(),
                            renderActionMenu: this._renderActionMenu,
                          }),
                        ),
                        this._renderToolbarButtonGroup(v),
                        this._renderToolbarButtonGroup(g),
                        t ? this._renderToolbarButtonGroup(t) : null,
                      ),
                      l,
                    ),
                    a,
                    x.a.createElement(
                      K.a,
                      u()({ inputStyle: [le.input, n], ref: this._setFieldTextInputRef, richTextInputContext: b }, s),
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
        })(x.a.Component)
      S()(oe, 'defaultProps', { leftAligned: !0, multiline: !0, styleType: 'selection' })
      var le = F.a.create(function (e) {
        return {
          bottomMargin: { marginBottom: e.spaces.space8 },
          buttonGroup: { flexDirection: 'row' },
          input: { paddingHorizontal: 0, paddingBottom: 0 },
          linkPopoverButtons: { flexDirection: 'row', marginTop: e.spaces.space8 },
          linkPopoverContent: { marginHorizontal: e.spaces.space24, marginVertical: e.spaces.space24 },
          removeLinkButtonMargin: { marginLeft: e.spaces.space8 },
          separatorMargin: { marginHorizontal: 'calc('.concat(e.spaces.space4, ' + ').concat(e.spaces.space2, ')') },
          stylingButtons: { flexDirection: 'row' },
          textSizeSelection: {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginLeft: e.spaces.space8,
            marginRight: e.spaces.space4,
            width: 'calc('.concat(e.spaces.space80, ' + ').concat(e.spaces.space4, ')'),
          },
          toolbar: {
            backgroundColor: e.colors.cellBackground,
            borderBottomWidth: e.borderWidths.small,
            borderColor: e.colors.borderColor,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            paddingBottom: e.spaces.space4,
            paddingLeft: e.spaces.space8,
            paddingRight: e.spaces.space16,
            position: 'sticky',
            top: e.componentDimensions.appBarHeight,
            width: '100%',
            zIndex: e.componentZIndices.appBarZIndex,
          },
        }
      })
    },
    VPdC: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return L
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
        f = n('2VqO'),
        h = n.n(f),
        m = n('KEM+'),
        v = n.n(m),
        g = (n('2G9S'), n('7xRU'), n('ERkP')),
        y = n.n(g),
        b = n('3XMw'),
        E = n.n(b),
        w = n('cjZk'),
        C = 'fileInput',
        _ = n('sjK1'),
        S = n('/Imo'),
        k = n('rHpw'),
        x = n('9HgX'),
        T = ['acceptGifs', 'acceptImages', 'acceptVideo', 'customMimeTypes', 'icon', 'style', 'withIcon'],
        I = E.a.b9960f31,
        M = { viewType: 'media_picker' },
        P = y.a.createElement(w.a, null),
        L = function (e) {
          var t = e.acceptGifs,
            n = e.acceptImages,
            a = void 0 === n || n,
            r = e.acceptVideo
          return (a ? x.b : []).concat(t ? [x.a] : []).concat(r ? _.a : [])
        },
        R = (function (e) {
          p()(n, e)
          var t = h()(n)
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
                    d = L({ acceptGifs: t, acceptImages: n, acceptVideo: a }).concat(i).join(',')
                  return y.a.createElement(
                    S.a,
                    r()({}, u, {
                      accept: d,
                      behavioralEventContext: M,
                      icon: s ? l : void 0,
                      style: [O.root, c],
                      testID: C,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(y.a.PureComponent)
      v()(R, 'defaultProps', {
        acceptGifs: !0,
        acceptImages: !0,
        acceptVideo: !0,
        customMimeTypes: [],
        accessibilityLabel: I,
        icon: P,
        size: 'medium',
        withIcon: !0,
      })
      var O = k.a.create(function (e) {
        return { root: { margin: '-'.concat(e.spaces.space12) } }
      })
      t.a = R
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
    'W7+t': function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var a = /(?:(?:[a-z0-9]|[^\u0000-\u007f])(?:(?:[a-z0-9_\-]|[^\u0000-\u007f])*(?:[a-z0-9]|[^\u0000-\u007f]))?)/i
      ;(t.default = a), (e.exports = t.default)
    },
    W9cO: function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var a = /(?:[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?)/i
      ;(t.default = a), (e.exports = t.default)
    },
    Wqil: function (e, t, n) {
      'use strict'
      var a = n('IGGJ')
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var r = a(n('AYyr')),
        i = a(n('H1lm')),
        o = a(n('NoO/')),
        l = (0, r.default)(
          '(?:#{validateUrlIp}|#{validateUrlDomain})',
          { validateUrlIp: o.default, validateUrlDomain: i.default },
          'i',
        )
      ;(t.default = l), (e.exports = t.default)
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
        f = n.n(p),
        h = n('r7g+'),
        m = n('cm6r'),
        v = n('rHpw'),
        g =
          (f.a.ac78ac54,
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
            n = e.style,
            a = e.tweet,
            r = e.tweetId
          if (!a) return null
          var i = o.a.createElement(h.a, { tweet: a })
          if (!t) return i
          return o.a.createElement(
            m.a,
            {
              onPress: function (e) {
                r && t(r)
              },
              style: [g.tweet, n],
            },
            i,
          )
        })
      t.a = function (e) {
        var t = e.checkTweet,
          n = e.inputStyle,
          a = e.onChangeTweetId,
          i = e.onTweetPress,
          c = e.tweetPreviewStyle,
          s = o.a.useState(),
          u = r()(s, 2),
          d = u[0],
          p = u[1]
        return o.a.createElement(
          o.a.Fragment,
          null,
          o.a.createElement(l.a, {
            checkTweet: t,
            inputStyle: n,
            onChangeTweetId: function (e) {
              p(e), a && a(e)
            },
            tweetId: d,
            withActivityIndicator: !0,
          }),
          o.a.createElement(y, {
            onTweetPress: function (e) {
              i && d && i(d)
            },
            style: c,
            tweetId: d,
          }),
        )
      }
    },
    'b1+5': function (e, t, n) {
      'use strict'
      var a = n('IGGJ')
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var r = a(n('AYyr')),
        i = a(n('fl4i')),
        o = a(n('ccgC')),
        l = a(n('Umjq')),
        c = (0, r.default)(
          '(?:(#{validateUrlUserinfo})@)?(#{validateUrlUnicodeHost})(?::(#{validateUrlPort}))?',
          { validateUrlUserinfo: i.default, validateUrlUnicodeHost: o.default, validateUrlPort: l.default },
          'i',
        )
      ;(t.default = c), (e.exports = t.default)
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
    ccgC: function (e, t, n) {
      'use strict'
      var a = n('IGGJ')
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var r = a(n('AYyr')),
        i = a(n('NoO/')),
        o = a(n('je27')),
        l = (0, r.default)(
          '(?:#{validateUrlIp}|#{validateUrlUnicodeDomain})',
          { validateUrlIp: i.default, validateUrlUnicodeDomain: o.default },
          'i',
        )
      ;(t.default = l), (e.exports = t.default)
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
    eQRO: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        i = n('MWbm'),
        o = n('rHpw'),
        l = n('Qwev'),
        c = o.a.create(function (e) {
          return {
            overlay: {
              backgroundColor: e.colors.cellBackground,
              height: '100%',
              opacity: 0.7,
              paddingVertical: e.spaces.space20,
            },
          }
        })
      t.a = function (e) {
        var t = e.activityIndicatorStyle,
          n = e.style
        return r.a.createElement(i.a, { style: [o.a.absoluteFill, c.overlay, n] }, r.a.createElement(l.a, { style: t }))
      }
    },
    eWSo: function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var a = /(?:\[[a-f0-9:\.]+\])/i
      ;(t.default = a), (e.exports = t.default)
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
        f = n('2VqO'),
        h = n.n(f),
        m = n('KEM+'),
        v = n.n(m),
        g = n('/NU0'),
        y = n('rxPX'),
        b = n('AspN'),
        E = function (e, t) {
          return t.media ? t.media : Object(g.a)(t.mediaId) ? Object(b.k)(e, t.mediaId)[0] : void 0
        },
        w = function (e, t) {
          return void 0 !== t.mediaId ? t.mediaId : t.media ? t.media.id : null
        },
        C = Object(y.a)()
          .propsFromState(function () {
            return { media: E, mediaId: w }
          })
          .propsFromActions(function () {
            return { processMedia: b.f, updateMediaUpload: b.o }
          })
          .withAnalytics({ page: 'media', section: 'edit' }),
        _ = n('jHSc'),
        S = n('3XMw'),
        k = n.n(S),
        x = n('EeFI'),
        T = 'applyButton',
        I = n('/yvb'),
        M = n('rHpw'),
        P = k.a.gd80afba,
        L = k.a.a753a87f,
        R = (function (e) {
          p()(n, e)
          var t = h()(n)
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
                  I.a,
                  { disabled: e, onPress: a._handleApplyButtonClick, size: 'small', testID: T, type: 'primaryFilled' },
                  L,
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
                    _.b,
                    {
                      backButtonType: 'back',
                      containerStyle: O.root,
                      documentTitle: a || P,
                      history: n,
                      onBackClick: this._handleBackClick,
                      rightControl: this._renderAppBarRightControl(),
                      title: a || P,
                    },
                    r.a.createElement(x.a, {
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
        O = M.a.create(function (e) {
          return { root: { flexShrink: 1, height: 650 } }
        }),
        D = C(R),
        B = n('X8FW'),
        A = M.a.create(function (e) {
          return { modal: { width: 600, maxWidth: '90vw' } }
        })
      t.a = function (e) {
        return r.a.createElement(
          B.b,
          { clickMaskToClose: !1, modalSize: 'fitChildren', style: A.modal },
          r.a.createElement(D, e),
        )
      }
    },
    fl4i: function (e, t, n) {
      'use strict'
      var a = n('IGGJ')
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var r = a(n('AYyr')),
        i = a(n('kfbJ')),
        o = a(n('5kR0')),
        l = a(n('Flng')),
        c = (0, r.default)(
          '(?:#{validateUrlUnreserved}|#{validateUrlPctEncoded}|#{validateUrlSubDelims}|:)*',
          { validateUrlUnreserved: i.default, validateUrlPctEncoded: o.default, validateUrlSubDelims: l.default },
          'i',
        )
      ;(t.default = c), (e.exports = t.default)
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
        f = n('rHpw'),
        h = f.a.create(function (e) {
          return {
            container: {
              borderColor: e.colors.gray200,
              borderRadius: e.borderRadii.medium,
              borderWidth: e.borderWidths.small,
              boxShadow: e.boxShadows.xSmall,
              flexDirection: 'row',
              width: '100%',
            },
            tweet: { flex: 1 },
          }
        }),
        m = s(function (e) {
          var t = e.fetchStatus,
            n = e.fetchTweetIfNeeded,
            a = e.rightControl,
            i = e.tweet,
            o = e.tweetId,
            l = r.a.useCallback(
              function () {
                n(o)
              },
              [o, n],
            )
          r.a.useEffect(
            function () {
              o && l()
            },
            [l, o],
          )
          return r.a.createElement(u.a, {
            fetchStatus: t,
            onRequestRetry: l,
            render: function () {
              return i
                ? r.a.createElement(
                    d.a,
                    { style: h.container, testID: 'simpleTweet' },
                    r.a.createElement(d.a, { style: h.tweet }, r.a.createElement(p.a, { tweet: i })),
                    a,
                  )
                : null
            },
            retryMessage: 'Something went wrong. Try reloading the Tweet again.',
            retryable: !0,
          })
        })
      t.a = m
    },
    'ggE+': function (e, t, n) {
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
                d: 'M17.297 8.238v14.037c0 .268-.16.527-.4.646-.24.119-.551.099-.771-.06l-6.477-4.689-6.497 4.689c-.121.089-.281.139-.421.139-.12 0-.24-.03-.33-.079-.261-.12-.401-.378-.401-.646V8.238c0-1.589 1.301-2.901 2.913-2.901h9.461c1.602 0 2.923 1.312 2.923 2.901z',
              }),
              o.a.createElement('path', {
                d: 'M22 3.98v14.444c0 .278-.16.536-.41.666-.25.119-.561.099-.791-.07l-1.782-1.281V7.825c0-2.195-1.802-3.974-4.005-3.974h-8.74C6.332 2.272 7.644 1 9.266 1h9.731C20.648 1 22 2.341 22 3.98z',
              }),
              o.a.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
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
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { decorators: [r.b, r.f, r.a] },
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
            f = p.getBlocksAsArray(),
            h = 'number' == typeof t && t > -1,
            m = h ? o(f, t) : Object.freeze({})
          if ((a && ((s = l(s, m)), (n = !0)), h && ((s = c(s, m)), (n = !0)), n)) {
            var v = (s = i.EditorState.forceSelection(s, r)).getCurrentContent()
            ;(v = (v = v.set('selectionBefore', u)).set('selectionAfter', d)),
              (s = i.EditorState.set(e, { allowUndo: !0, currentContent: v }))
          }
          return s
        },
      }
    },
    je27: function (e, t, n) {
      'use strict'
      var a = n('IGGJ')
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var r = a(n('AYyr')),
        i = a(n('W7+t')),
        o = a(n('pvEE')),
        l = a(n('vLEV')),
        c = (0, r.default)(
          /(?:(?:#{validateUrlUnicodeSubDomainSegment}\.)*(?:#{validateUrlUnicodeDomainSegment}\.)#{validateUrlUnicodeDomainTld})/i,
          {
            validateUrlUnicodeSubDomainSegment: i.default,
            validateUrlUnicodeDomainSegment: o.default,
            validateUrlUnicodeDomainTld: l.default,
          },
        )
      ;(t.default = c), (e.exports = t.default)
    },
    kAdf: function (e, t, n) {
      'use strict'
      var a = n('IGGJ')
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var r = a(n('AYyr')),
        i = a(n('8Y9H')),
        o = (0, r.default)(/(#{validateUrlPchar}|\/|\?)*/i, { validateUrlPchar: i.default })
      ;(t.default = o), (e.exports = t.default)
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
        f = n('KEM+'),
        h = n.n(f),
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
        E = function (e) {
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
        w = n('ERkP'),
        C = n.n(w),
        _ = n('k/Ka'),
        S = n('PxJJ'),
        k = n('w9LO'),
        x = n('fs1G'),
        T = n('zpdM'),
        I = function (e) {
          return Object(_.a)('div', e)
        },
        M = !1,
        P =
          ((t.a = C.a.forwardRef(function (e, t) {
            var n = g.d()
            return C.a.createElement(
              P,
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
                h()(c()(e), '_setSelectionToStart', function () {
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
                h()(c()(e), '_setFocusToStart', function () {
                  var t = e._setSelectionToStart()
                  return T.EditorState.forceSelection(t, t.getSelection())
                }),
                h()(c()(e), '_setFocusToEnd', function () {
                  var t = e.props,
                    n = t.autoFocus,
                    a = t.editorState,
                    r = t.onChange
                  n
                    ? null == r || r(T.EditorState.moveFocusToEnd(a))
                    : null == r || r(T.EditorState.moveSelectionToEnd(a))
                }),
                h()(c()(e), '_setDraftJsStyle', function () {
                  var t = e.props.placeholderTextColor,
                    n = document.createElement('style')
                  n.innerHTML = E({ placeholderTextColor: t })
                  var a = document.head
                  a && a.insertBefore(n, a.firstChild)
                }),
                h()(c()(e), 'focus', function () {
                  e._editor && e._editor.focus()
                }),
                h()(c()(e), 'blur', function () {
                  e._editor && e._editor.blur()
                }),
                h()(c()(e), 'getValue', function () {
                  return e.props.editorState.getCurrentContent().getPlainText()
                }),
                h()(c()(e), 'getOffsetHeight', function () {
                  var t = (e._editor || {}).editor
                  return (t && t.offsetHeight) || 0
                }),
                h()(c()(e), 'clear', function () {}),
                h()(c()(e), '_setEditorRef', function (t) {
                  e._editor = t
                }),
                h()(c()(e), '_handleViewClick', function () {
                  return e.focus()
                }),
                h()(c()(e), '_onPastedFiles', function (t) {
                  var n = e.props.onFilesAdded,
                    a = []
                  return (
                    t.forEach(function (e) {
                      e instanceof File && a.push(e)
                    }),
                    a.length && (null == n ? void 0 : n(a)) ? 'handled' : 'not-handled'
                  )
                }),
                h()(c()(e), '_removeNewLines', function (e, t) {
                  return T.EditorState.push(
                    t,
                    T.Modifier.replaceText(t.getCurrentContent(), t.getSelection(), e.replace(/[\r\n]+/g, ' ')),
                    'insert-characters',
                  )
                }),
                h()(c()(e), '_removeInvalidStylesFromContentBlock', function (t) {
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
                h()(c()(e), '_removeInvalidStyles', function (t, n) {
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
                h()(c()(e), '_onPastedText', function (t, n, a) {
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
                h()(c()(e), '_myKeyBindingFn', function (t) {
                  var n = e.props,
                    a = n.dismissComposerCommandName,
                    r = n.sendTweetCommandName,
                    i = T.KeyBindingUtil.hasCommandModifier
                  return 13 === t.keyCode && i(t) ? r : 27 === t.keyCode ? a : Object(T.getDefaultKeyBinding)(t)
                }),
                h()(c()(e), '_onKeyCommand', function (t) {
                  var n = e.props.keyCommandHandlers,
                    a = n && n[t]
                  return a ? (a(), 'handled') : 'not-handled'
                }),
                h()(c()(e), '_onSingleLineReturn', function (t, n) {
                  var a = e.props.handleReturn
                  return null == a || a(t, n), 'handled'
                }),
                h()(c()(e), '_getContainerStyle', function () {
                  var t = e.props,
                    n = t.appTextSize,
                    a = t.maxNumberOfLines,
                    r = t.multiline,
                    i = t.numberOfLines,
                    o = t.withMaxHeight,
                    l =
                      y.a.theme.lineHeightsPx[
                        {
                          small: 'subtext2',
                          normal: 'body',
                          large: 'headline1',
                          subtext2: 'subtext2',
                          body: 'body',
                          headline1: 'headline1',
                        }[n]
                      ],
                    c = (r && i ? i : 1) * l
                  return o ? { minHeight: c, maxHeight: (r && a ? a : 1) * l } : { minHeight: c }
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
                        M || (this._setDraftJsStyle(), (M = !0))
                    },
                  },
                  {
                    key: 'componentDidCatch',
                    value: function (e) {
                      S.a.report(e, { tags: { userVisible: !0, draftJs: !0 } })
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
                        f = t.onKeyDown,
                        m = t.onKeyPress,
                        v = t.onKeyUp,
                        g = t.pastedStylesAllowlist,
                        E = t.placeholder,
                        w = t.spellCheck,
                        _ = t.style,
                        S = t.testID
                      return C.a.createElement(
                        I,
                        {
                          className: u ? void 0 : b,
                          onClick: this._handleViewClick,
                          style: [this._getContainerStyle(), _],
                        },
                        C.a.createElement(T.Editor, {
                          ariaActiveDescendantID: n,
                          ariaAutoComplete: a,
                          ariaControls: r,
                          ariaLabel: i,
                          ariaMultiline: u,
                          blockRenderMap: o,
                          blockRendererFn: l,
                          customAttrs:
                            ((e = {}),
                            h()(e, k.a.NO_REFOCUS_ATTRIBUTE, 'true'),
                            h()(e, 'onKeyPress', m),
                            h()(e, 'onKeyUp', v),
                            e),
                          customStyleMap: L(y.a.theme),
                          editorState: c,
                          handleKeyCommand: this._onKeyCommand,
                          handlePastedFiles: this._onPastedFiles,
                          handlePastedText: this._onPastedText,
                          handleReturn: u ? s : this._onSingleLineReturn,
                          keyBindingFn: this._myKeyBindingFn,
                          onChange: d,
                          onFocus: p,
                          onKeyDown: f,
                          placeholder: E,
                          ref: this._setEditorRef,
                          spellCheck: 'false' !== w,
                          stripPastedStyles: !(u && null != g && g.length),
                          tabIndex: 0,
                          webDriverTestID: S,
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
          })(C.a.Component))
      h()(P, 'defaultProps', {
        appTextSize: 'body',
        autoFocus: !1,
        keyCommandHandlers: {},
        maxNumberOfLines: 30,
        multiline: !0,
        numberOfLines: 6,
        onFocus: x.a,
        positionCursorAtEnd: !1,
        spellCheck: 'true',
        withMaxHeight: !0,
      }),
        (P.propTypes = {})
      var L = function (e) {
        return { overflow: { backgroundColor: e.colors.red200 } }
      }
    },
    kfbJ: function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var a = /[a-z\u0400-\u04FF0-9\-._~]/i
      ;(t.default = a), (e.exports = t.default)
    },
    mmgW: function (e, t, n) {
      'use strict'
      var a = n('IGGJ')
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var r = a(n('AYyr')),
        i = a(n('NRlp')),
        o = (0, r.default)(/(?:#{validateUrlDecOctet}(?:\.#{validateUrlDecOctet}){3})/i, {
          validateUrlDecOctet: i.default,
        })
      ;(t.default = o), (e.exports = t.default)
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
        f = n('zpdM'),
        h = n('sXY3'),
        m = n('fs1G'),
        v = Object(h.a)(d.g).reduce(function (e, t) {
          var n = r()(t, 2),
            a = n[0],
            i = n[1]
          return e.set(a, i)
        }, s.a)
      t.a = function (e) {
        var t = e.componentByType,
          n = e.contentState,
          a = u.a.initEditorState(n, { decorators: [p.d, p.c, p.f, p.a] }),
          r = t
            ? function (e) {
                return t[e.getType()] || null
              }
            : m.a
        return o.a.createElement(
          l.b,
          null,
          o.a.createElement(f.Editor, {
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
    oAj9: function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var a = /(?:[a-z0-9](?:[a-z0-9_\-]*[a-z0-9])?)/i
      ;(t.default = a), (e.exports = t.default)
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
          return f
        }),
        n.d(t, 'a', function () {
          return h
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
      function f(e) {
        var t = e.altKey,
          n = e.ctrlKey,
          a = e.metaKey
        return !(t || n || a)
      }
      function h(e, t) {
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
        return V
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
        f = n('5Yy7'),
        h = n.n(f),
        m = n('2VqO'),
        v = n.n(m),
        g = n('KEM+'),
        y = n.n(g),
        b = (n('2G9S'), n('ERkP')),
        E = n.n(b),
        w = n('38/B'),
        C = n('t62R'),
        _ = n('/yvb'),
        S = n('piX5'),
        k = n('3XMw'),
        x = n.n(k),
        T = n('tI3i'),
        I = n.n(T),
        M = n('oQhu'),
        P = n('rHpw'),
        L = n('aITJ'),
        R = n('MWbm'),
        O = n('n5fo'),
        D = n('5emT'),
        B = n('Oib4'),
        A = n('WtWS'),
        F = n('ioan'),
        j = [
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
        H = function (e) {
          return e.length
        },
        z = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : H
          return t(e)
        },
        U = x.a.de540c32,
        W = x.a.b4abfdb3,
        V = (function (e) {
          h()(n, e)
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
                Object(M.a)(function (e) {
                  return [K.root, !e && K.disabled]
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
                return z(e, a.props.calculateLength)
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
              y()(p()(a), '_handleBlur', function () {
                var e,
                  t = a.props.onBlur,
                  n = (null === (e = a._textInput) || void 0 === e ? void 0 : e.getValue()) || '',
                  r = a._calculateLength(n),
                  i = a._getActualCount(n)
                a.setState({ isFocused: !1, displayCount: r, actualCount: i }), t && t()
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
                L.b.isKaiOS() && 'Backspace' === e.key && n ? (a._blurOnBackspaceKeyUpForKaiOS = n) : t && t(e)
              }),
              y()(p()(a), '_handleKeyUp', function (e) {
                var t = a.props.onKeyUp
                L.b.isKaiOS() &&
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
                I()(
                  !(!l && o && !i),
                  'A controlled component, a component with a value prop, must have an onChange handler. The value prop cannot be undefined.',
                ),
                  I()(!(n && r && r > n), 'Max length should be equal or greater than valid length.'),
                  I()(
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
                actualCount: H(i),
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
                    return E.a.createElement(
                      R.a,
                      { style: [G.root, i] },
                      E.a.createElement(
                        R.a,
                        {
                          accessibilityLabel: t,
                          accessibilityRole: 'label',
                          style: [
                            S.a.border,
                            G.textInputFormStyle,
                            l && S.a.invalidBorderColor,
                            o && l && S.a.focusedBorderInvalid,
                            o && !l && S.a.focusedBorderValid,
                            !n && S.a.disabled,
                          ],
                        },
                        E.a.createElement(
                          R.a,
                          { style: G.textInputFormWrapper },
                          E.a.createElement(
                            R.a,
                            { style: G.textInputHeader },
                            this._renderLabel(),
                            this._shouldRenderDisplayCount() ? this._renderDisplayCount() : null,
                          ),
                          this._renderTextInput(),
                        ),
                      ),
                      E.a.createElement(
                        R.a,
                        { style: [G.sidePadding, G.underTextInputForm] },
                        E.a.createElement(
                          R.a,
                          { style: G.subtextWrapper },
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
                    return E.a.createElement(
                      C.b,
                      {
                        color: a ? 'gray700' : n,
                        numberOfLines: 1,
                        size: a ? 'headline1' : 'subtext2',
                        style: [
                          G.textInputHeaderItem,
                          a && G.placeholderText,
                          !w.a.reducedMotionEnabled && G.transition,
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
                      i = (e.style, e.type, e.validLength, o()(e, j))
                    return E.a.createElement(
                      R.a,
                      { style: K.container },
                      t && !this._isLabelLarge() ? this._renderIcon() : null,
                      E.a.createElement(
                        C.b,
                        { size: 'headline1', style: K.wrapper },
                        E.a.createElement(
                          F.a,
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
                      ? E.a.createElement(
                          R.a,
                          { style: G.passwordVisibilityIconContainer },
                          E.a.createElement(_.a, {
                            accessibilityLabel: a ? W : U,
                            focusable: !0,
                            hoverLabel: { label: a ? W : U },
                            icon: a ? E.a.createElement(O.a, null) : E.a.createElement(D.a, null),
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
                    return E.a.createElement(
                      R.a,
                      { accessibilityLiveRegion: 'polite' },
                      E.a.createElement(
                        C.b,
                        { color: 'gray700', size: 'subtext2', style: G.subtext },
                        this.props.helperText,
                      ),
                    )
                  },
                },
                {
                  key: '_renderErrorText',
                  value: function () {
                    return E.a.createElement(
                      R.a,
                      { accessibilityLiveRegion: 'assertive' },
                      E.a.createElement(
                        C.b,
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
                    return E.a.createElement(
                      R.a,
                      { accessibilityLiveRegion: 'polite', style: [G.textInputHeaderItem, G.displayCount] },
                      E.a.createElement(
                        C.b,
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
                    return e && E.a.createElement(e, { style: n })
                  },
                },
                {
                  key: '_renderValidationIcon',
                  value: function () {
                    return this._isFormInvalid()
                      ? E.a.createElement(B.a, { style: [G.validationIcon, S.a.invalidColor] })
                      : E.a.createElement(A.a, { style: [G.validationIcon, S.a.validColor] })
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
                      r = 'string' == typeof a ? z(a, n) : 0
                    return 'string' == typeof a && r !== t.displayCount
                      ? { displayCount: r, actualCount: a.length }
                      : null
                  },
                },
              ],
            ),
            n
          )
        })(E.a.Component)
      y()(V, 'defaultProps', { autoComplete: 'on', autoCorrect: !0, autoFocus: !1, editable: !0, invalid: !1 }),
        (V.propTypes = {})
      var K = P.a.create(function (e) {
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
        G = P.a.create(function (e) {
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
    pvEE: function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var a = /(?:(?:[a-z0-9]|[^\u0000-\u007f])(?:(?:[a-z0-9\-]|[^\u0000-\u007f])*(?:[a-z0-9]|[^\u0000-\u007f]))?)/i
      ;(t.default = a), (e.exports = t.default)
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
        f = n('KEM+'),
        h = n.n(f),
        m = (n('2G9S'), n('hCOa'), n('87if'), n('ERkP')),
        v = n.n(m),
        g = n('rHpw'),
        y = n('k/Ka'),
        b = n('MWbm'),
        E = function (e) {
          return Object(y.a)('div', e)
        },
        w = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(c()(e), '_dragEnterCount', 0),
              h()(c()(e), 'state', { active: !1 }),
              h()(c()(e), '_handleDragDrop', function (t) {
                var n = e.props.onFilesAdded
                t.preventDefault(), n(Array.from(t && t.dataTransfer.files)), e._updateDragCount(0)
              }),
              h()(c()(e), '_handleDragEnter', function (t) {
                var n = e.props.onDragEnter
                t.preventDefault(), n && n(), e._updateDragCount(e._dragEnterCount + 1)
              }),
              h()(c()(e), '_handleDragLeave', function (t) {
                t.preventDefault(), e._updateDragCount(e._dragEnterCount - 1)
              }),
              h()(c()(e), '_handleDragOver', function (e) {
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
                    i = t ? C.dragBorderValid : C.dragBorderInvalid
                  return v.a.createElement(
                    E,
                    {
                      onDragEnter: this._handleDragEnter,
                      onDragLeave: this._handleDragLeave,
                      onDragOver: this._handleDragOver,
                      onDrop: this._handleDragDrop,
                      style: [C.root, a, r && i],
                    },
                    v.a.createElement(b.a, { style: C.inner }, 'function' == typeof n ? n(r) : n),
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
      h()(w, 'defaultProps', { allowDragDrop: !0 })
      var C = g.a.create(function (e) {
        return {
          root: { display: 'flex', flexDirection: 'column' },
          dragBorderValid: { borderStyle: 'dashed', borderWidth: e.spaces.space2, borderColor: e.colors.primary },
          dragBorderInvalid: { borderStyle: 'dashed', borderWidth: e.spaces.space2, borderColor: e.colors.magenta500 },
          inner: { flexGrow: 1 },
        }
      })
      t.a = w
    },
    ta7H: function (e, t, n) {
      'use strict'
      var a = n('IGGJ')
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var r = a(n('AYyr')),
        i = a(n('fl4i')),
        o = a(n('Wqil')),
        l = a(n('Umjq')),
        c = (0, r.default)(
          '(?:(#{validateUrlUserinfo})@)?(#{validateUrlHost})(?::(#{validateUrlPort}))?',
          { validateUrlUserinfo: i.default, validateUrlHost: o.default, validateUrlPort: l.default },
          'i',
        )
      ;(t.default = c), (e.exports = t.default)
    },
    taB0: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'rootDetailScreenTitle', function () {
          return C
        }),
        n.d(t, 'TabOptions', function () {
          return _
        }),
        n.d(t, 'TwitterArticleListScreen', function () {
          return S
        })
      var a = n('ddV6'),
        r = n.n(a),
        i = (n('yH/f'), n('z84I'), n('ERkP')),
        o = n.n(i),
        l = n('RqPI'),
        c = n('6au1'),
        s = n('rxPX'),
        u = n('0KEI'),
        d = Object(s.a)()
          .propsFromState(function () {
            return { loggedInUserId: l.r }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(u.createLocalApiErrorHandlerWithContextFactory)(
                'COMPOSE_TWITTER_ARTICLE_BUTTON',
              ),
              createTwitterArticle: c.a.create,
            }
          }),
        p = n('Cp2k'),
        f = n('tn7R'),
        h = n('M2mT'),
        m = n('c6pJ'),
        v = n('fn8Q'),
        g = n('Vc8w'),
        y = n('MWbm'),
        b = n('/yvb'),
        E = n('k/OQ'),
        w = n('rHpw'),
        C = 'Twitter Articles',
        _ = Object.freeze({ ALL: 'All', DRAFTS: 'Drafts', PUBLISHED: 'Published' }),
        S = function (e) {
          var t = e.createLocalApiErrorHandler,
            n = e.createTwitterArticle,
            a = e.history,
            i = e.location.pathname,
            l = e.loggedInUserId,
            c = o.a.useState(_.ALL),
            s = r()(c, 2),
            u = s[0],
            d = s[1]
          Object(g.a)()
          var p = function (e) {
              return function () {
                return u === e
              }
            },
            w = Object(f.a)(_).map(function (e) {
              return {
                key: e,
                label: e,
                isActive: p(e),
                to: { pathname: i },
                onClick: function () {
                  return d(e)
                },
              }
            }),
            S = o.a.createElement(b.a, {
              accessibilityLabel: 'create',
              icon: x,
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
          return l
            ? o.a.createElement(
                h.a,
                { rightControl: S, screenType: 'root', title: C },
                o.a.createElement(E.a, { links: w }),
                o.a.createElement(
                  y.a,
                  { style: k.container },
                  o.a.createElement(m.a, {
                    linkToEditScreen: !0,
                    userId: l,
                    visibility: (function () {
                      switch (u) {
                        case _.PUBLISHED:
                          return v.e.PUBLISHED
                        case _.DRAFTS:
                          return v.e.DRAFT
                        default:
                          return v.e.ALL
                      }
                    })(),
                  }),
                ),
              )
            : null
        },
        k = w.a.create(function (e) {
          return { container: { backgroundColor: e.colors.cellBackground, flexGrow: 1 } }
        }),
        x = o.a.createElement(p.a, null),
        T = d(S)
      t.default = T
    },
    uy10: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'emptyStateHeaderLabel', function () {
          return p
        }),
        n.d(t, 'emptyStateMessage', function () {
          return f
        }),
        n.d(t, 'emptyStateButtonText', function () {
          return h
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
        f = 'Choose one from your existing drafts, or start a new one.',
        h = 'New draft',
        m = 'There was an error creating a new draft',
        v = function (e) {
          var t = e.createLocalApiErrorHandler,
            n = e.createTwitterArticle,
            a = Object(s.f)()
          return r.a.createElement(u.a, {
            buttonLink: '/i/twitter-article-composer',
            buttonText: h,
            header: p,
            message: f,
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
    vLEV: function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var a = /(?:(?:[a-z]|[^\u0000-\u007f])(?:(?:[a-z0-9\-]|[^\u0000-\u007f])*(?:[a-z0-9]|[^\u0000-\u007f]))?)/i
      ;(t.default = a), (e.exports = t.default)
    },
    vXsr: function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var a = /(?:[a-z](?:[a-z0-9\-]*[a-z0-9])?)/i
      ;(t.default = a), (e.exports = t.default)
    },
    wpu3: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return h
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
        f = n('lnti'),
        h = function (e) {
          var t,
            n = e.excludeReplyUser,
            a = e.inReplyToStatus,
            i = e.loggedInUserId,
            l = a.retweeted_status,
            c = l || a,
            s = c.entities,
            d = c.unmentioned_user_ids,
            h = c.user,
            v = l ? l.user : {},
            g = l ? a.user : {},
            y = (null == s ? void 0 : s.user_mentions) || [],
            b = u.a.mergeTaggedUsers((null == s ? void 0 : s.media) || []),
            E = m(l || a) || {},
            w = ((t = {}), o()(t, v.id_str, v), o()(t, g.id_str, g), o()(t, h.id_str, h), o()(t, E.id_str, E), t)
          y.forEach(function (e) {
            w[e.id_str] = e
          }),
            b.forEach(function (e) {
              var t = e.name,
                n = e.screen_name,
                a = e.user_id
              w[a] = { id_str: a, name: t, screen_name: n }
            })
          var C = function (e) {
              var t = null == d ? void 0 : d.includes(e.id_str),
                n = e.id_str === h.id_str
              return !t || n ? [e.id_str] : []
            },
            _ = Object(p.a)(
              Object(f.a)(
                [].concat(
                  r()(C(v)),
                  r()(C(g)),
                  [h.id_str],
                  r()(
                    y.flatMap(function (e) {
                      return C(e)
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
            S = i && h.id_str === i ? [i].concat(r()(_)) : _
          return (
            n &&
              (S = S.filter(function (e) {
                return e !== h.id_str
              })),
            S.map(function (e) {
              return w[e]
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
