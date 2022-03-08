;(window.webpackJsonp = window.webpackJsonp || []).push([
  [15],
  {
    '0Ki6': function (e, t, n) {
      'use strict'
      var o = n('yiKp'),
        a = n.n(o),
        i = n('VrFO'),
        r = n.n(i),
        s = n('Y9Ll'),
        l = n.n(s),
        u = n('1Pcy'),
        c = n.n(u),
        d = n('5Yy7'),
        h = n.n(d),
        m = n('2VqO'),
        p = n.n(m),
        f = n('KEM+'),
        v = n.n(f),
        y = (n('i4UL'), n('2G9S'), n('ERkP')),
        _ = n.n(y),
        g = n('CHgo'),
        b = n('fs1G'),
        C = n('rHpw'),
        w = n('rOXj'),
        S = n('MWbm'),
        D = n('Enqy'),
        x = w.a.isTouchSupported(),
        T = { zoom: 1, lastX: 0, lastY: 0, zoomCenter: { x: 0, y: 0 } },
        k = { height: 0, width: 0, left: 0, right: 0, top: 0, bottom: 0 },
        E = function (e, t, n) {
          return Math.min(t, Math.max(e, n))
        },
        P = function (e, t) {
          return Math.sqrt(Math.pow(e.clientY - t.clientY, 2) + Math.pow(e.clientX - t.clientX, 2))
        },
        M = (function (e) {
          h()(n, e)
          var t = p()(n)
          function n(e) {
            var o
            return (
              r()(this, n),
              (o = t.call(this, e)),
              v()(c()(o), '_itemDimensions', k),
              v()(c()(o), '_ref', _.a.createRef()),
              v()(c()(o), '_setTouchableNode', function (e) {
                o._touchableNode !== e &&
                  ((o._touchableNode = e),
                  o._removeTouchListener && o._removeTouchListener(),
                  o._touchableNode && (o._removeTouchListener = Object(g.a)(o._touchableNode, o._handleTouchMove, !1)))
              }),
              v()(c()(o), '_handleTouchStart', function (e) {
                o._ref.current && (o._zoomedDimensions = o._ref.current.getBoundingClientRect()), (o._moved = !1)
                var t = e.touches.length
                2 === t ? (e.preventDefault(), o._handlePinchStart(e)) : 1 === t && o._handleTapStart(e)
              }),
              v()(c()(o), '_handleTouchMove', function (e) {
                var t = e.touches.length
                2 === t
                  ? (e.preventDefault(), o._handlePinchMove(e))
                  : 1 === t && ((o._moved = !0), o._handlePanMove(e))
              }),
              v()(c()(o), '_handleTouchEnd', function (e) {
                var t = o.props,
                  n = t.maxZoom,
                  a = t.minZoom,
                  i = t.onTap,
                  r = E(a, n, o.state.zoom),
                  s = o.state.zoom
                s !== r && 1 === r ? o.resetZoom() : o.setState({ lastX: 0, lastY: 0, zoom: r }),
                  0 === e.touches.length
                    ? (o._lastTouchTime && o._lastTouchTime + 300 > e.timeStamp
                        ? (o._clickTimer && clearTimeout(o._clickTimer), o._handleDoubleTap(e))
                        : s <= 1 && !o._moved && (o._clickTimer = setTimeout(i, 300)),
                      (o._lastTouchTime = e.timeStamp))
                    : e.preventDefault()
              }),
              (o.state = a()({}, T)),
              o
            )
          }
          return (
            l()(
              n,
              [
                {
                  key: 'render',
                  value: function () {
                    var e = this
                    if (!x) return this.props.children
                    var t = this.state,
                      n = t.zoom,
                      o = t.zoomCenter,
                      a = this._moved,
                      i = {
                        zoom: Object(D.spring)(n),
                        zoomCenterX: Object(D.spring)(o.x),
                        zoomCenterY: Object(D.spring)(o.y),
                      }
                    return _.a.createElement(
                      S.a,
                      {
                        onTouchEnd: this._handleTouchEnd,
                        onTouchStart: this._handleTouchStart,
                        ref: this._setTouchableNode,
                        style: I.fill,
                      },
                      _.a.createElement(D.Motion, { style: i }, function (t) {
                        var n = t.zoom,
                          i = t.zoomCenterX,
                          r = t.zoomCenterY
                        return _.a.createElement(
                          S.a,
                          {
                            ref: e._ref,
                            style: [
                              I.fill,
                              {
                                transform: [{ scale: n }],
                                transformOrigin: ''.concat(a ? i : o.x, 'px ').concat(a ? r : o.y, 'px'),
                              },
                            ],
                          },
                          e.props.children,
                        )
                      }),
                    )
                  },
                },
                {
                  key: 'componentDidMount',
                  value: function () {
                    x && this._updateWindowDimensions()
                  },
                },
                {
                  key: 'componentWillUnmount',
                  value: function () {
                    this._removeTouchListener && this._removeTouchListener()
                  },
                },
                {
                  key: 'resetZoom',
                  value: function () {
                    this.props.onZoomed(!1), this.setState({ zoom: T.zoom })
                  },
                },
                {
                  key: '_handlePanMove',
                  value: function (e) {
                    if (!(this.state.zoom <= 1) && this._zoomedDimensions && this._windowDimensions) {
                      var t = e.touches[0],
                        n = t.clientX,
                        o = t.clientY
                      if (this.state.lastX && this.state.lastY) {
                        var a = this.state,
                          i = a.lastX,
                          r = a.lastY,
                          s = a.zoomCenter,
                          l = s.x,
                          u = s.y,
                          c = this._windowDimensions,
                          d = c.height,
                          h = c.width,
                          m = this._zoomedDimensions,
                          p = m.height,
                          f = 0,
                          v = 0
                        m.width - h > 0 && (f = n - i),
                          p - d > 0 && (v = o - r),
                          this.setState({
                            lastX: n,
                            lastY: o,
                            zoomCenter: { x: Math.min(Math.max(l - f, 0), h), y: Math.min(Math.max(u - v, 0), d) },
                          })
                      } else this.setState({ lastX: n, lastY: o })
                    }
                  },
                },
                {
                  key: '_handlePinchStart',
                  value: function (e) {
                    var t,
                      n,
                      o = e.touches
                    if ((this._updateWindowDimensions(), (this._lastDistance = P(o[0], o[1])), 1 === this.state.zoom)) {
                      var a =
                        ((t = o[0]), (n = o[1]), { x: (t.clientX + n.clientX) / 2, y: (t.clientY + n.clientY) / 2 })
                      this.setState({ zoomCenter: this._getZoomCenter(a.x, a.y) }), this.props.onZoomed(!0)
                    }
                  },
                },
                {
                  key: '_handlePinchMove',
                  value: function (e) {
                    var t = this.state,
                      n = t.zoom,
                      o = t.zoomCenter,
                      a = this.props,
                      i = a.maxZoom,
                      r = a.maxZoomBounce,
                      s = a.minZoom,
                      l = a.minZoomBounce
                    if (0 !== o.x || 0 !== o.y) {
                      var u = P(e.touches[0], e.touches[1]),
                        c = this._lastDistance ? u / this._lastDistance : 1,
                        d = E(s - l, i + r, n * c)
                      ;(this._lastDistance = u), this.setState({ zoom: d })
                    } else 2 === e.touches.length && this._handlePinchStart(e)
                  },
                },
                {
                  key: '_handleTapStart',
                  value: function (e) {
                    var t = e.touches
                    this._tapCenter = this._getZoomCenter(t[0].clientX, t[0].clientY)
                  },
                },
                {
                  key: '_handleDoubleTap',
                  value: function (e) {
                    var t = this.props,
                      n = t.maxZoom,
                      o = t.onZoomed
                    1 !== this.state.zoom
                      ? this.resetZoom()
                      : (this._updateWindowDimensions(),
                        this.setState({ zoom: n, zoomCenter: this._tapCenter || T.zoomCenter }),
                        o(!0))
                  },
                },
                {
                  key: '_getZoomCenter',
                  value: function (e, t) {
                    this._ref.current && (this._itemDimensions = this._ref.current.getBoundingClientRect())
                    var n = this._itemDimensions
                    return { x: e - n.left, y: t - n.top }
                  },
                },
                {
                  key: '_updateWindowDimensions',
                  value: function () {
                    this._windowDimensions = { height: window.innerHeight, width: window.innerWidth }
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromProps',
                  value: function (e, t) {
                    return x && e.resetZoom ? (e.onZoomed(!1), a()({}, T)) : t
                  },
                },
              ],
            ),
            n
          )
        })(_.a.Component)
      v()(M, 'defaultProps', {
        maxZoom: 2.5,
        maxZoomBounce: 0.15,
        minZoom: 1,
        minZoomBounce: 0.15,
        onTap: b.a,
        onZoomed: b.a,
        resetZoom: !1,
      })
      var I = C.a.create(function (e) {
        return { fill: { flex: 1 } }
      })
      t.a = M
    },
    '2doW': function (e, t, n) {
      'use strict'
      var o = n('VrFO'),
        a = n.n(o),
        i = n('Y9Ll'),
        r = n.n(i),
        s = n('1Pcy'),
        l = n.n(s),
        u = n('5Yy7'),
        c = n.n(u),
        d = n('2VqO'),
        h = n.n(d),
        m = n('KEM+'),
        p = n.n(m),
        f = (n('KqXw'), n('Ysgh'), n('z84I'), n('ERkP')),
        v = n.n(f),
        y = n('97Jx'),
        _ = n.n(y),
        g = n('ddV6'),
        b = n.n(g),
        C = n('m3Bd'),
        w = n.n(C),
        S = n('yiKp'),
        D = n.n(S),
        x = (n('2G9S'), n('7x/C'), n('JtPf'), n('3XMw')),
        T = n.n(x),
        k = n('mN6z'),
        E = n('U+bB'),
        P = n('MWbm'),
        M = n('0Ki6'),
        I = n('3dad'),
        Z = n('r1lV'),
        z = n('rHpw'),
        L = n('JYMr'),
        Y = T.a.b327c129,
        B = T.a.gff1f69e,
        V = (function (e) {
          c()(n, e)
          var t = h()(n)
          function n() {
            var e
            a()(this, n)
            for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++) i[r] = arguments[r]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              p()(l()(e), 'state', { loadingVariant: null, imageLoading: !1 }),
              p()(l()(e), '_handleLoadStart', function () {
                return e.setState({ imageLoading: !0 })
              }),
              p()(l()(e), '_handleLoadEnd', function () {
                return e.setState({ imageLoading: !1 })
              }),
              e
            )
          }
          return (
            r()(
              n,
              [
                {
                  key: 'componentDidMount',
                  value: function () {
                    var e = this
                    this._mountPromiseForTesting = n._selectCachedVariant(this.props.photo).then(function (t) {
                      return e.setState({ loadingVariant: t })
                    })
                  },
                },
                {
                  key: 'componentDidUpdate',
                  value: function (e, t) {
                    var o = this
                    Object(k.a)(e.photo, this.props.photo) ||
                      (this.setState({ loadingVariant: null }),
                      n._selectCachedVariant(this.props.photo).then(function (e) {
                        return o.setState({ loadingVariant: e })
                      }))
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var e = this.props,
                      t = e.dataSaver,
                      o = e.imageStyle,
                      a = e.onError,
                      i = e.onLoad,
                      r = e.onTap,
                      s = e.onZoomed,
                      l = e.photo,
                      u = e.resetZoom,
                      c = e.style,
                      d = e.zoomable,
                      h = this.state.loadingVariant,
                      m = (t && h && Math.max(h.width, h.height) >= 680 ? h.uri : null) || n._selectSource(l)
                    if (!m || null === h) return null
                    var p = v.a.createElement(E.a, {
                      accessibilityLabel: l.ext_alt_text ? l.ext_alt_text : Y,
                      defaultSource: h && h.uri,
                      draggable: !0,
                      onError: h ? void 0 : a,
                      onLoad: i,
                      onLoadEnd: this._handleLoadEnd,
                      onLoadStart: this._handleLoadStart,
                      resizeMode: 'contain',
                      source: m,
                      style: [O.img, o],
                    })
                    return v.a.createElement(
                      P.a,
                      { style: c },
                      this.state.imageLoading ? X : null,
                      d ? v.a.createElement(M.a, { onTap: r, onZoomed: s, resetZoom: u }, p) : p,
                    )
                  },
                },
              ],
              [
                {
                  key: '_selectCachedVariant',
                  value: function (e) {
                    var t = I.a.getOriginalImage(e)
                    return t ? Z.a.selectLargestCachedVariant(t) : Promise.resolve()
                  },
                },
                {
                  key: '_selectSource',
                  value: function (e) {
                    var t = I.a.getOriginalImage(e)
                    return t && Z.a.selectLargestUrl(t)
                  },
                },
              ],
            ),
            n
          )
        })(v.a.PureComponent)
      p()(V, 'defaultProps', { zoomable: !1 })
      var O = z.a.create(function (e) {
          return {
            img: D()(
              D()({}, z.a.absoluteFillObject),
              {},
              { height: 'auto', margin: 'auto', maxHeight: '100%', maxWidth: '100%', width: 'auto' },
            ),
            progressBar: { position: 'absolute', top: 0, zIndex: 1 },
          }
        }),
        X = v.a.createElement(L.a, { ariaValueText: B, indeterminate: !0, style: O.progressBar }),
        W = V,
        R = n('RCZO'),
        j = n('Modb'),
        A = n('XrEN'),
        N = (function (e) {
          c()(n, e)
          var t = h()(n)
          function n() {
            var e
            a()(this, n)
            for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++) i[r] = arguments[r]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              p()(l()(e), '_handlePlaybackStarted', function () {
                e._player && !e.props.isCurrentlyDisplayed && e._player.pause()
              }),
              p()(l()(e), '_setPlayer', function (t) {
                ;(e._player = t), e._player && e.props.isCurrentlyDisplayed && e._player.play()
              }),
              e
            )
          }
          return (
            r()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.style
                  return v.a.createElement(
                    P.a,
                    { style: e },
                    v.a.createElement(P.a, { style: K.root }, this._renderVideo()),
                  )
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t = this.props.isCurrentlyDisplayed
                  this._player && t !== e.isCurrentlyDisplayed && (t ? this._player.play() : this._player.pause())
                },
              },
              {
                key: '_renderVideo',
                value: function () {
                  var e = this.props,
                    t = e.promotedContent,
                    n = e.video,
                    o = e.videoId
                  return v.a.createElement(
                    j.a,
                    _()({}, A.a.extractVideoProps(o, n), {
                      onPlaybackStarted: this._handlePlaybackStarted,
                      playbackCoordination: null,
                      promotedContent: t,
                      setPlayer: this._setPlayer,
                      withPostPlayback: !0,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(v.a.PureComponent),
        K = z.a.create({ root: { flexBasis: 0, flexGrow: 1, flexShrink: 1, justifyContent: 'center' } }),
        F = N,
        G = { startX: 0, startY: 0 },
        U = (function (e) {
          c()(n, e)
          var t = h()(n)
          function n() {
            var e
            a()(this, n)
            for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++) i[r] = arguments[r]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              p()(l()(e), '_pullDistanceY', 0),
              p()(l()(e), '_pullInfo', D()({}, G)),
              p()(l()(e), '_handleTouchStart', function (t) {
                ;(e._pullInfo.startX = t.touches[0].clientX), (e._pullInfo.startY = t.touches[0].clientY)
              }),
              p()(l()(e), '_handleTouchMove', function (t) {
                if ('number' == typeof e._pullInfo.startX && 'number' == typeof e._pullInfo.startY) {
                  var n = t.touches[0],
                    o = n.clientX - e._pullInfo.startX,
                    a = n.clientY - e._pullInfo.startY
                  Math.abs(o) > 10 || (t.preventDefault(), e._updatePullPosition(a))
                }
              }),
              p()(l()(e), '_handleTouchEnd', function (t) {
                Math.abs(e._pullDistanceY) > 50 ? e._handleDismiss() : e._resetPullInfo()
              }),
              p()(l()(e), '_updatePullPosition', function (t) {
                e._pullDistanceY = t
              }),
              p()(l()(e), '_handleDismiss', function () {
                var t = e.props.onDismiss
                t && t(), e._resetPullInfo()
              }),
              p()(l()(e), '_resetPullInfo', function () {
                e._updatePullPosition(0), (e._pullInfo = D()({}, G))
              }),
              e
            )
          }
          return (
            r()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    n = e.onDismiss,
                    o = e.onLayout,
                    a = e.style,
                    i = !!n
                  return v.a.createElement(
                    P.a,
                    {
                      onLayout: o,
                      onTouchEnd: i ? this._handleTouchEnd : void 0,
                      onTouchMove: i ? this._handleTouchMove : void 0,
                      onTouchStart: i ? this._handleTouchStart : void 0,
                      style: a,
                      testID: 'swipe-to-dismiss',
                    },
                    t,
                  )
                },
              },
            ]),
            n
          )
        })(v.a.Component),
        q = n('7N4s'),
        H = n('q9Zt'),
        J = ['isAvatar', 'isCurrentlyDisplayed', 'mediaDetail', 'onDismiss', 'onTap', 'promotedContent', 'videoId'],
        Q = T.a.ac85c6b1,
        $ = function (e) {
          var t = e.isAvatar,
            n = e.isCurrentlyDisplayed,
            o = e.mediaDetail,
            a = e.onDismiss,
            i = e.onTap,
            r = e.promotedContent,
            s = e.videoId,
            l = w()(e, J),
            u = v.a.useState(null),
            c = b()(u, 2),
            d = c[0],
            h = c[1],
            m = v.a.useState({ width: 0, height: 0 }),
            p = b()(m, 2),
            f = p[0],
            y = p[1],
            g = v.a.useContext(q.b).isModal,
            C = o.original_info || {},
            S = C.height,
            D = C.width,
            x = f.height,
            T = f.width,
            k =
              g || t
                ? Object(R.f)({ mediaWidth: D, mediaHeight: S, containerWidth: T, containerHeight: x }, t)
                : ee.mediaItem
          v.a.useEffect(
            function () {
              d && h(null)
            },
            [e, d],
          )
          return v.a.createElement(
            U,
            {
              onDismiss: a,
              onLayout:
                g || t
                  ? function (e) {
                      var t = e.nativeEvent.layout,
                        n = t.height,
                        o = t.width
                      ;(o === f.width && n === f.height) || y({ width: o, height: n })
                    }
                  : void 0,
              style: ee.root,
            },
            d
              ? v.a.createElement(H.a, {
                  onRetry: function () {
                    h(null)
                  },
                  style: ee.errorDetail,
                  title: Q,
                  withLightOnDarkColorScheme: !0,
                })
              : null,
            d
              ? null
              : v.a.createElement(
                  P.a,
                  {
                    onClick: function (e) {
                      e.stopPropagation()
                    },
                    style: k,
                  },
                  'photo' === o.type
                    ? v.a.createElement(
                        W,
                        _()({}, l, {
                          imageStyle: t && ee.avatarImage,
                          onError: function (e) {
                            h(e.nativeEvent.error)
                          },
                          onLoad: function () {
                            h(null)
                          },
                          onTap: i,
                          photo: o,
                          style: ee.container,
                          zoomable: !0,
                        }),
                      )
                    : A.a.isVideo(o) && s
                    ? v.a.createElement(F, {
                        isCurrentlyDisplayed: n,
                        promotedContent: r,
                        style: ee.container,
                        video: o,
                        videoId: s,
                      })
                    : null,
                ),
          )
        },
        ee = z.a.create(function (e) {
          return {
            root: { flexGrow: 1, justifyContent: 'center', alignItems: 'center', flexShrink: 1 },
            mediaItem: { flexGrow: 1, width: '100%', height: '100%' },
            container: { height: '100%', position: 'absolute', width: '100%' },
            errorDetail: {
              alignItems: 'center',
              alignSelf: 'center',
              justifyContent: 'center',
              position: 'absolute',
              height: '100%',
              maxWidth: 400,
            },
            avatarImage: { borderRadius: e.borderRadii.infinite, margin: e.spaces.space16 },
          }
        }),
        te = v.a.memo($, function (e, t) {
          return Object(k.a)(e, t)
        }),
        ne = n('lklz'),
        oe = n('v6aA'),
        ae = n('6iuV'),
        ie = n('uavX'),
        re = n('fs1G'),
        se = (function (e) {
          c()(n, e)
          var t = h()(n)
          function n(e, o) {
            var i
            return (
              a()(this, n),
              (i = t.call(this, e, o)),
              p()(l()(i), '_handleChangeV2', function (e) {
                var t = e.index,
                  n = e.intersectionRatio,
                  o = i.props.onMediaItemChanged
                1 === n && o && o(t)
              }),
              p()(l()(i), '_getItemVideoId', function (e) {
                return (
                  i.props.videoId ||
                  (function (e) {
                    return ne.b.forTweet(e.expanded_url.split('/')[3])
                  })(e)
                )
              }),
              p()(l()(i), '_handleMediaDetailZoomed', function (e) {
                var t = i.props.onMediaDetailZoomed
                i.state.isZoomed !== e && i.setState({ isZoomed: e }), t && t(e)
              }),
              (i.state = { isZoomed: !1 }),
              i
            )
          }
          return (
            r()(n, [
              {
                key: 'shouldComponentUpdate',
                value: function (e, t) {
                  return !Object(k.a)(e, this.props) || !Object(k.a)(t, this.state)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.dataSaver,
                    o = t.mediaIndex,
                    a = t.mediaItems,
                    i = t.onDismiss,
                    r = t.onTap,
                    s = t.promotedContent,
                    l = this.state.isZoomed,
                    u = a.map(function (t, u) {
                      var c = A.a.isVideo(t),
                        d = e._getItemVideoId(t),
                        h = o === u
                      return (c && d) || !c
                        ? v.a.createElement(te, {
                            dataSaver: n,
                            isAvatar: e.props.isAvatar,
                            isCurrentlyDisplayed: h,
                            key: u,
                            mediaDetail: a[u],
                            onDismiss: l ? void 0 : i,
                            onTap: r,
                            onZoomed: h ? e._handleMediaDetailZoomed : void 0,
                            promotedContent: s,
                            resetZoom: o !== u,
                            videoId: d,
                          })
                        : null
                    })
                  return v.a.createElement(P.a, { style: le.root }, a.length > 1 ? this._renderCarousel(u) : u)
                },
              },
              {
                key: '_renderCarousel',
                value: function (e) {
                  var t = this.props,
                    n = t.dominantColor,
                    o = t.mediaIndex,
                    a = t.mediaItems,
                    i = t.onMediaItemChanged,
                    r = this.state.isZoomed,
                    s = A.a.isVideo(a[o])
                  return this.context.featureSwitches.isTrue('responsive_web_carousel_v2_media_detail_enabled')
                    ? v.a.createElement(
                        ae.a,
                        {
                          childrenStyle: [le.dimensions, le.scrollSnap],
                          dominantButtonColor: n,
                          isLocked: r,
                          onVisibleRangeChange: this._handleChangeV2,
                          scrollToCenter: !0,
                          style: le.dimensions,
                          visibleItemIndex: o,
                          withAddedNavButtonClickArea: !s,
                          withGlobalKeyboardNavigation: !0,
                          withWraparound: !1,
                        },
                        e,
                      )
                    : v.a.createElement(
                        ie.b,
                        {
                          currentSlide: o,
                          dominantColor: n,
                          locked: r,
                          onChange: i,
                          shouldAlwaysEnableKeyboardNavigation: !0,
                        },
                        e,
                      )
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      p()(se, 'contextType', oe.a),
        p()(se, 'defaultProps', { mediaIndex: 0, onMediaDetailZoomed: re.a, onMediaItemChanged: re.a })
      var le = z.a.create(function (e) {
        return {
          root: { flex: 1, zIndex: 1 },
          dimensions: { height: '100%', width: '100%' },
          scrollSnap: { scrollSnapAlign: 'center', scrollSnapStop: 'always' },
        }
      })
      t.a = se
    },
    UPvq: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return M
      })
      var o = n('yiKp'),
        a = n.n(o),
        i = n('VrFO'),
        r = n.n(i),
        s = n('Y9Ll'),
        l = n.n(s),
        u = n('1Pcy'),
        c = n.n(u),
        d = n('5Yy7'),
        h = n.n(d),
        m = n('2VqO'),
        p = n.n(m),
        f = n('KEM+'),
        v = n.n(f),
        y = (n('2G9S'), n('ERkP')),
        _ = n.n(y),
        g = n('RCZO'),
        b = n('3XMw'),
        C = n.n(b),
        w = n('hOZg'),
        S = n('MWbm'),
        D = n('mw9i'),
        x = n('cm6r'),
        T = n('/yvb'),
        k = n('7N4s'),
        E = n('rHpw'),
        P = C.a.ia5e7487,
        M = (function (e) {
          h()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++) a[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              v()(c()(e), '_handleCloseButtonPress', function (t) {
                t.stopPropagation(), (0, e.props.onCloseButtonPress)()
              }),
              v()(c()(e), '_handleBackgroundPress', function () {
                var t = e.props.onCloseButtonPress
                e.context.isModal && t()
              }),
              e
            )
          }
          return (
            l()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.backgroundColor,
                    o = t.children,
                    i = t.footerButtons,
                    r = t.forceModalStyle,
                    s = t.hideButtons,
                    l = t.mediaItem,
                    u = t.mediaUrl,
                    c = t.overlayFooter,
                    d = t.topRightButton,
                    h = this.context.isModal,
                    m = a()({ backgroundColor: n.rgba }, g.a),
                    p = a()({ backgroundColor: n.rgb }, g.a),
                    f = [I.root, h ? m : p, { position: h || r ? 'relative' : 'fixed' }]
                  return _.a.createElement(
                    _.a.Fragment,
                    null,
                    _.a.createElement(
                      S.a,
                      { onClick: this._handleBackgroundPress, style: f },
                      o,
                      i
                        ? _.a.createElement(
                            S.a,
                            {
                              pointerEvents: s ? 'none' : void 0,
                              style: [I.footerButtons, c && m, c && I.footerButtonsAbsolute, s && I.fadeOut],
                            },
                            _.a.createElement(D.a, { withGutter: !0 }, i),
                          )
                        : null,
                    ),
                    _.a.createElement(
                      x.a,
                      {
                        accessibilityRole: 'none',
                        interactiveStyles: null,
                        onClick: this._handleCloseButtonPress,
                        pointerEvents: s ? 'none' : void 0,
                        style: [I.buttonWrapper, I.buttonWrapperLeft, g.a, s && I.fadeOut],
                      },
                      function (t) {
                        return _.a.createElement(T.a, {
                          accessibilityLabel: P,
                          dominantColor: n.rgb,
                          hoverLabel: { label: P },
                          icon: _.a.createElement(w.a, null),
                          interactivityState: t,
                          onClick: e._handleCloseButtonPress,
                          type: l || u ? 'onMediaDominantColorFilled' : 'onMediaWhiteFilled',
                        })
                      },
                    ),
                    d
                      ? _.a.createElement(
                          S.a,
                          {
                            pointerEvents: s ? 'none' : void 0,
                            style: [I.buttonWrapper, I.buttonWrapperRight, g.a, s && I.fadeOut],
                          },
                          d,
                        )
                      : null,
                  )
                },
              },
            ]),
            n
          )
        })(_.a.Component)
      v()(M, 'contextType', k.b), v()(M, 'defaultProps', { hideButtons: !1 })
      var I = E.a.create(function (e) {
        return {
          root: { overflowX: 'hidden', overflowY: 'hidden', height: '100%', width: '100%' },
          buttonWrapper: {
            position: 'absolute',
            top: 0,
            padding: e.spaces.space12,
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          },
          buttonWrapperLeft: { left: 0 },
          buttonWrapperRight: { right: 0 },
          fadeOut: { opacity: 0 },
          footerButtons: { width: '100%', alignSelf: 'center' },
          footerButtonsAbsolute: { position: 'absolute', bottom: 0, paddingBottom: E.a.iPhoneOffsetBottom, zIndex: 1 },
        }
      })
    },
  },
])
//# sourceMappingURL=WIPED
