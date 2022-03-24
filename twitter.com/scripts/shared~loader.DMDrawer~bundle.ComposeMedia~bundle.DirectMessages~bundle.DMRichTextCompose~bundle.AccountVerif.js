;(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    '+/sI': function (e, t, i) {
      'use strict'
      i.d(t, 'a', function () {
        return b
      }),
        i.d(t, 'b', function () {
          return y
        })
      var a = i('VrFO'),
        n = i.n(a),
        r = i('Y9Ll'),
        l = i.n(r),
        o = i('5Yy7'),
        s = i.n(o),
        d = i('2VqO'),
        c = i.n(d),
        u = (i('Wd/2'), i('M+/F'), i('2G9S'), i('ERkP')),
        f = i.n(u),
        h = i('TGcR'),
        v = i('t62R'),
        p = i('a6qo'),
        m = i('rHpw'),
        b = 'animated_gif',
        y = 'video',
        g = (function (e) {
          s()(i, e)
          var t = c()(i)
          function i() {
            return n()(this, i), t.apply(this, arguments)
          }
          return (
            l()(i, [
              {
                key: 'render',
                value: function () {
                  var e,
                    t = this.props,
                    i = t.durationInMilliseconds,
                    a = t.type
                  if (a === b || 'vine' === a)
                    e =
                      a === b
                        ? f.a.createElement(v.b, { weight: 'bold' }, 'GIF')
                        : f.a.createElement(h.a, { style: w.icon })
                  else if (a === y && i) {
                    var n = Math.trunc(i / 6e4),
                      r = '0'.concat(Math.trunc((i % 6e4) / 1e3)).slice(-2)
                    e = f.a.createElement(v.b, { color: 'white' }, ''.concat(n, ':').concat(r))
                  }
                  return e ? f.a.createElement(p.a, { align: 'left' }, e) : null
                },
              },
            ]),
            i
          )
        })(f.a.PureComponent),
        w = m.a.create(function (e) {
          return { icon: { color: e.colors.white } }
        })
      t.c = g
    },
    '/Imo': function (e, t, i) {
      'use strict'
      var a = i('97Jx'),
        n = i.n(a),
        r = i('m3Bd'),
        l = i.n(r),
        o = i('VrFO'),
        s = i.n(o),
        d = i('Y9Ll'),
        c = i.n(d),
        u = i('1Pcy'),
        f = i.n(u),
        h = i('5Yy7'),
        v = i.n(h),
        p = i('2VqO'),
        m = i.n(p),
        b = i('KEM+'),
        y = i.n(b),
        g = (i('2G9S'), i('jQ3i'), i('x4t0'), i('ERkP')),
        w = i.n(g),
        P = i('/yvb'),
        E = i('k/Ka'),
        _ = i('3XMw'),
        I = i.n(_),
        M = i('rHpw'),
        R = ['accept', 'disabled', 'multiple', 'onChange', 'testID'],
        C = I.a.i5450beb,
        O = I.a.f7432494,
        V = (function (e) {
          v()(i, e)
          var t = m()(i)
          function i() {
            var e
            s()(this, i)
            for (var a = arguments.length, n = new Array(a), r = 0; r < a; r++) n[r] = arguments[r]
            return (
              (e = t.call.apply(t, [this].concat(n))),
              y()(f()(e), '_handlePress', function (t) {
                var i = e.props.onPress
                i && i(t), e._fileInput && e._fileInput.click()
              }),
              y()(f()(e), '_handleChange', function (t) {
                var i = e.props.onChange,
                  a = t.target,
                  n = a.files
                n.length && i && i(n), (a.value = '')
              }),
              y()(f()(e), '_handleFileInputButtonRef', function (t) {
                e._fileInput = t
              }),
              e
            )
          }
          return (
            c()(i, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.accept,
                    i = e.disabled,
                    a = e.multiple,
                    r = (e.onChange, e.testID),
                    o = l()(e, R),
                    s = !((null != t && t.includes('video')) || (null != t && t.includes('gif')))
                  return w.a.createElement(
                    w.a.Fragment,
                    null,
                    w.a.createElement(
                      P.a,
                      n()({ hoverLabel: t ? { label: s ? O : C } : void 0 }, o, {
                        disabled: i,
                        onPress: this._handlePress,
                      }),
                    ),
                    Object(E.a)('input', {
                      accept: t,
                      disabled: i,
                      multiple: a,
                      onChange: this._handleChange,
                      ref: this._handleFileInputButtonRef,
                      style: k.input,
                      tabIndex: -1,
                      testID: r,
                      type: 'file',
                    }),
                  )
                },
              },
            ]),
            i
          )
        })(w.a.Component)
      y()(V, 'defaultProps', { disabled: !1, multiple: !1 })
      var k = M.a.create(function (e) {
        return {
          input: { width: '0.1px', height: '0.1px', opacity: 0, overflow: 'hidden', position: 'absolute', zIndex: -1 },
        }
      })
      t.a = V
    },
    LCtV: function (e, t, i) {
      'use strict'
      i.d(t, 'a', function () {
        return C
      })
      var a = i('VrFO'),
        n = i.n(a),
        r = i('Y9Ll'),
        l = i.n(r),
        o = i('1Pcy'),
        s = i.n(o),
        d = i('5Yy7'),
        c = i.n(d),
        u = i('2VqO'),
        f = i.n(u),
        h = i('KEM+'),
        v = i.n(h),
        p = (i('yH/f'), i('2G9S'), i('uFXj'), i('ERkP')),
        m = i.n(p),
        b = i('3XMw'),
        y = i.n(b),
        g = i('mN6z'),
        w = i('Qwev'),
        P = i('rHpw'),
        E = i('1auM'),
        _ = i('ude7'),
        I = i('U+bB'),
        M = i('MWbm'),
        R = y.a.gff1f69e,
        C = Object.freeze({ INFINITE: 'infinite', MEDIUM: 'medium', NONE: 'none' }),
        O = (function (e) {
          c()(i, e)
          var t = f()(i)
          function i() {
            var e
            n()(this, i)
            for (var a = arguments.length, r = new Array(a), l = 0; l < a; l++) r[l] = arguments[l]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              v()(s()(e), 'state', { imagePreviewUrl: null }),
              v()(s()(e), '_getImageSrc', function () {
                var t = e.props,
                  i = t.enableGif,
                  a = t.mediaItem,
                  n = e.state.imagePreviewUrl
                if (a && a.mediaFile) return a.mediaFile.isGif && !i ? n : a.mediaFile.url
              }),
              e
            )
          }
          return (
            l()(i, [
              {
                key: 'componentDidUpdate',
                value: function () {
                  var e = this,
                    t = this.props,
                    i = t.enableGif,
                    a = t.mediaItem.mediaFile,
                    n = this.state.imagePreviewUrl
                  i ||
                    n ||
                    (a instanceof E.a &&
                      a.isGif &&
                      Object(_.a)(a).then(function (t) {
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
                    i = e.enableGif,
                    a = e.mediaItem,
                    n = e.onClick,
                    r = e.resizeMode,
                    l = (this.state || {}).imagePreviewUrl,
                    o = a.mediaFile && a.mediaFile.isGif && !i && !l,
                    s = a.needsProcessing || o,
                    d = [k.root, V[t], s && k.loadingBorder],
                    c = this._getImageSrc()
                  return m.a.createElement(
                    M.a,
                    { onClick: n, style: d },
                    s || !c
                      ? m.a.createElement(w.a, { accessibilityLabel: R, style: k.activityIndicator })
                      : m.a.createElement(I.a, { resizeMode: r, source: c, style: k.image }),
                  )
                },
              },
            ]),
            i
          )
        })(m.a.Component)
      v()(O, 'defaultProps', { borderRadius: C.NONE, enableGif: !0, resizeMode: 'cover' })
      var V = P.a.create(function (e) {
          var t
          return (
            (t = {}),
            v()(t, C.INFINITE, { borderRadius: e.borderRadii.infinite }),
            v()(t, C.MEDIUM, { borderRadius: e.borderRadii.small }),
            v()(t, C.NONE, { borderRadius: e.borderRadii.none }),
            t
          )
        }),
        k = P.a.create(function (e) {
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
      t.b = O
    },
    pKoL: function (e, t, i) {
      'use strict'
      var a = i('VrFO'),
        n = i.n(a),
        r = i('Y9Ll'),
        l = i.n(r),
        o = i('1Pcy'),
        s = i.n(o),
        d = i('5Yy7'),
        c = i.n(d),
        u = i('2VqO'),
        f = i.n(u),
        h = i('KEM+'),
        v = i.n(h),
        p = (i('2G9S'), i('ERkP')),
        m = i.n(p),
        b = i('HPNB'),
        y = i('9HgX'),
        g = i('3XMw'),
        w = i.n(g),
        P = i('LCtV'),
        E = i('eyty'),
        _ = (i('lTEL'), i('7x/C'), i('JtPf'), i('87if'), i('kYxP'), i('zb92')),
        I = i('RuTB'),
        M = Object(_.a)({
          loader: function () {
            return Promise.all([i.e(0), i.e(8), i.e(179)])
              .then(i.bind(null, 'EOJ2'))
              .then(function (e) {
                return { default: e.__DANGEROUS_IMPORT_VIDEOPLAYER__ }
              })
          },
          renderPlaceholder: function (e, t) {
            return m.a.createElement(I.a, { hasError: e, onRetry: t })
          },
        }),
        R = i('yiKp'),
        C = i.n(R),
        O = i('m3Bd'),
        V = i.n(O),
        k = (i('z84I'), i('k/Ka')),
        F = i('eXeu'),
        G = i('iOGT'),
        L = ['children', 'dataSaverMode', 'getVideoRef', 'style', 'variants'],
        x = (function (e) {
          c()(i, e)
          var t = f()(i)
          function i() {
            var e
            n()(this, i)
            for (var a = arguments.length, r = new Array(a), l = 0; l < a; l++) r[l] = arguments[l]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              v()(s()(e), '_setVideoRef', function (t) {
                var i = e.props.getVideoRef
                i && i(t)
              }),
              e
            )
          }
          return (
            l()(i, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    i = e.dataSaverMode,
                    a = (e.getVideoRef, e.style),
                    n = e.variants,
                    r = V()(e, L),
                    l = Object(G.b)(n, i ? G.a.MEDIUM : G.a.HIGH) || [],
                    o = Object(F.f)(
                      l.map(function (e) {
                        return { src: e.url, type: e.content_type }
                      }),
                    )
                  return Object(k.a)(
                    'video',
                    C()(
                      C()({}, r),
                      {},
                      {
                        children: [
                          o.map(function (e) {
                            return m.a.createElement('source', { key: e.src, src: e.src, type: e.type })
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
            i
          )
        })(m.a.Component)
      v()(x, 'defaultProps', { dataSaverMode: !1, variants: [] })
      var S = i('62wY'),
        j = i('sjK1'),
        B = i('v6aA'),
        D = i('cHvH'),
        z = i('mXq/'),
        N = i('/yvb'),
        T = i('a6qo'),
        U = i('rHpw'),
        H = i('hOZg'),
        W = i('GCOQ'),
        K = i('tuke'),
        Y = i('U+bB'),
        A = i('MWbm'),
        J = i('+/sI'),
        q = w.a.gd80afba,
        X = w.a.j322caee,
        Q = w.a.abd845fd,
        Z = w.a.df1b0707,
        $ = w.a.cd959e5b,
        ee = w.a.e68b09b4,
        te = w.a.add55c97,
        ie = (function (e) {
          c()(i, e)
          var t = f()(i)
          function i() {
            var e
            n()(this, i)
            for (var a = arguments.length, r = new Array(a), l = 0; l < a; l++) r[l] = arguments[l]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              v()(s()(e), 'state', { isVideoPaused: !0, playGif: !1 }),
              v()(s()(e), '_handleGifClick', function () {
                e.setState({ playGif: !e.state.playGif })
              }),
              v()(s()(e), '_handleMediaPreviewLayout', function (t) {
                var i = e.props,
                  a = i.mediaItem,
                  n = i.resizeIfNeeded,
                  r = a.mediaFile || a.externalMediaDetails
                if (r) {
                  var l = t.nativeEvent.layout,
                    o = l.height,
                    s = l.width,
                    d = r.height,
                    c = r.width / d
                  Math.abs(c - s / o) > 0.05 &&
                    e._mediaContainer &&
                    ('width' === n
                      ? e._mediaContainer.setNativeProps({ style: { width: o * c } })
                      : 'height' === n && e._mediaContainer.setNativeProps({ style: { height: s / c } }))
                }
              }),
              v()(s()(e), '_handleVideoOnPlay', function (t) {
                e.setState({ isVideoPaused: !1 })
              }),
              v()(s()(e), '_handleVideoOnPause', function (t) {
                e.setState({ isVideoPaused: !0 })
              }),
              v()(s()(e), '_setMediaContainerRef', function (t) {
                e._mediaContainer = t
              }),
              v()(s()(e), '_setVideoRef', function (t) {
                e._video = t
              }),
              v()(s()(e), 'playVideo', function () {
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
              v()(s()(e), 'pauseVideo', function () {
                e._video && (e._video.pause(), e._handleVideoOnPause())
              }),
              e
            )
          }
          return (
            l()(i, [
              {
                key: 'render',
                value: function () {
                  var e,
                    t = this,
                    i = this.props,
                    a = i.accessibilityLabel,
                    n = i.accessibilityRole,
                    r = i.enableGif,
                    l = i.mediaItem,
                    o = i.onEdit,
                    s = i.onEditSensitiveWarning,
                    d = i.onRemove,
                    c = i.style,
                    u = i.withAltTextLabel,
                    f = i.withCloseButton,
                    h = i.withEditButton,
                    v = i.withEditIcon,
                    p = i.withEditSensitiveWarningButton,
                    g = this.state.playGif,
                    w = l.externalMediaDetails && l.externalMediaDetails.mediaType === y.a,
                    P = w || (r && l.mediaFile && l.mediaFile.isGif),
                    E = !(null === (e = l.mediaFile) || void 0 === e || !e.isVideo)
                  return m.a.createElement(D.a, null, function (e) {
                    var i = e.windowWidth,
                      r = void 0 !== v ? v : !b.a.isTwoColumnLayout(i)
                    return m.a.createElement(
                      A.a,
                      {
                        accessibilityLabel: a || te,
                        accessibilityRole: n,
                        onLayout: t._handleMediaPreviewLayout,
                        ref: t._setMediaContainerRef,
                        style: [c, ae.cursor, w && ae.gifPlayButton],
                      },
                      t._renderPreview(),
                      w &&
                        !g &&
                        m.a.createElement(z.a, { accessibilityLabel: Z, onPress: t._handleGifClick, size: 'small' }),
                      f
                        ? m.a.createElement(N.a, {
                            accessibilityLabel: $,
                            hoverLabel: { label: ee },
                            icon: m.a.createElement(H.a, null),
                            onPress: d,
                            size: 'small',
                            style: ae.close,
                            type: 'onMediaDominantColorFilled',
                          })
                        : null,
                      P ? m.a.createElement(J.c, { type: J.a }) : null,
                      u && !E ? m.a.createElement(T.a, { align: 'left', altLabel: a }) : null,
                      h
                        ? m.a.createElement(
                            A.a,
                            { style: [ae.editMedia, E ? ae.editVideo : ae.editImage] },
                            p
                              ? m.a.createElement(N.a, {
                                  accessibilityLabel: X,
                                  icon: m.a.createElement(W.a, { style: ae.editSensitiveWarningIcon }),
                                  onPress: s,
                                  size: 'small',
                                  style: ae.editSensitiveWarningButton,
                                  type: 'onMediaDominantColorFilled',
                                })
                              : null,
                            m.a.createElement(
                              N.a,
                              {
                                accessibilityLabel: q,
                                icon: r ? m.a.createElement(K.a, null) : void 0,
                                onPress: o,
                                size: r ? 'xSmall' : 'small',
                                type: 'onMediaDominantColorFilled',
                              },
                              r ? void 0 : Q,
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
                    var i = t.externalMediaDetails.previewUrl,
                      a = t.externalMediaDetails.stillMediaUrl
                    return this._renderGifPreview(i, a)
                  }
                  return null !== (e = t.mediaFile) && void 0 !== e && e.isVideo
                    ? this._renderVideoPreview(t.mediaFile.type, t.mediaFile.url, t.id, t.mediaFile)
                    : m.a.createElement(A.a, { style: U.a.absoluteFill }, this._renderImagePreview())
                },
              },
              {
                key: '_renderGifPreview',
                value: function (e, t) {
                  var i = { uri: this.state.playGif ? e : t }
                  return m.a.createElement(
                    A.a,
                    { onClick: this._handleGifClick, style: U.a.absoluteFill },
                    m.a.createElement(Y.a, { resizeMode: 'cover', source: i, style: ae.video }),
                  )
                },
              },
              {
                key: '_renderImagePreview',
                value: function () {
                  var e = this.props,
                    t = e.borderRadius,
                    i = e.enableGif,
                    a = e.imageResizeMode,
                    n = e.mediaItem,
                    r = e.onClick
                  return m.a.createElement(P.b, {
                    borderRadius: t,
                    enableGif: i,
                    mediaItem: n,
                    onClick: r,
                    resizeMode: a,
                  })
                },
              },
              {
                key: '_renderVideoPreview',
                value: function (e, t, i, a) {
                  var n
                  this._configurableVideoPlayerEnabled = this.context.featureSwitches.isTrue(
                    'responsive_web_composer_configurable_video_player_enabled',
                  )
                  var r = this.props.mediaItem,
                    l = null === (n = r.mediaMetadata) || void 0 === n ? void 0 : n.subtitles
                  if (this._configurableVideoPlayerEnabled && a instanceof j.c) {
                    var o = Object(E.h)(a.fileHandle) ? [{ src: t, type: e }] : [],
                      s = ''.concat(i)
                    return m.a.createElement(M, {
                      mediaFile: a,
                      mediaId: s,
                      subtitles: l,
                      trimData: null == r ? void 0 : r.trimData,
                      variants: o,
                    })
                  }
                  var d,
                    c = Object(E.h)(a.fileHandle) ? [{ content_type: e, url: t }] : [],
                    u =
                      (null == l || null === (d = l.upload) || void 0 === d ? void 0 : d.mediaFile) instanceof S.b
                        ? l.upload.mediaFile.vtt
                        : void 0
                  return m.a.createElement(
                    x,
                    {
                      autoPlay: !1,
                      controls: !0,
                      getVideoRef: this._setVideoRef,
                      loop: !0,
                      muted: !0,
                      onPause: this._handleVideoOnPause,
                      onPlay: this._handleVideoOnPlay,
                      playsInline: !0,
                      poster: a instanceof j.c ? a.thumbnail : '',
                      style: ae.video,
                      variants: c,
                    },
                    l && u
                      ? m.a.createElement('track', {
                          default: !0,
                          kind: 'subtitles',
                          label: l.displayName,
                          src: u,
                          srcLang: l.lang,
                        })
                      : null,
                  )
                },
              },
            ]),
            i
          )
        })(m.a.Component)
      v()(ie, 'contextType', B.a),
        v()(ie, 'defaultProps', {
          enableGif: !0,
          withCloseButton: !0,
          withAltTextLabel: !1,
          withEditButton: !1,
          withEditSensitiveWarningButton: !1,
        })
      var ae = U.a.create(function (e) {
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
      t.a = ie
    },
    tuke: function (e, t, i) {
      'use strict'
      var a = i('yiKp'),
        n = i.n(a),
        r = i('ERkP'),
        l = i.n(r),
        o = i('Lsrn'),
        s = i('k/Ka'),
        d = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            n()(
              n()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [o.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            l.a.createElement(
              'g',
              null,
              l.a.createElement('path', {
                d: 'M21.592 5.576c.877-.967.882-2.298.006-3.174-.877-.877-2.208-.87-3.174.006 0 0-.003 0-.004.002l-.006.006-.005.004s-.002 0-.002.002L8.398 11.27c-1.716-.214-3.424.31-4.534 1.42-3.872 3.874-1.523 9.616-1.422 9.858.1.24.32.41.577.45.037.007.075.01.113.01.218 0 .428-.095.57-.265 1.83-2.15 3.043-2.023 4.328-1.89 1.164.122 2.477.258 3.834-1.282.975-1.106 1.302-2.585.922-4.03l8.792-9.948h.002l.004-.006.006-.006.002-.004zm-1.055-2.113c.305.305.28.74-.06 1.11-.003.003-.004.007-.006.01 0 0-.003 0-.004.003l-5.662 6.406-1.796-1.796 6.406-5.662c.002 0 .002-.003.004-.005.002-.003.006-.004.008-.006.37-.34.807-.365 1.11-.06zm-8.62 10.797L9.74 12.084l2.142-1.894 1.927 1.927-1.894 2.143zm-1.178 4.32c-.848.96-1.488.895-2.552.78-1.27-.13-2.808-.293-4.722 1.463-.415-1.673-.784-4.83 1.457-7.072.807-.805 2.086-1.168 3.377-.983l2.977 2.976c.333 1.03.15 2.057-.538 2.836z',
              }),
            ),
          )
        }
      ;(d.metadata = { width: 24, height: 24 }), (t.a = d)
    },
    ude7: function (e, t, i) {
      'use strict'
      i.d(t, 'a', function () {
        return d
      })
      i('7x/C'), i('JtPf')
      var a = i('A0bJ'),
        n = i('hJBK'),
        r = i('1auM'),
        l = 1,
        o = 2,
        s = 3,
        d = function (e) {
          if (Object(r.b)(e)) {
            if (e.isGif) {
              var t = e.height,
                i = e.img,
                d = e.orientation,
                c = e.width
              return Object(n.b)(i, c, t, d).then(
                function (e) {
                  return Object(n.a)(e)
                },
                function (e) {
                  throw new a.a('Gif preview could not be generated', s)
                },
              )
            }
            var u = new a.a('The provided image must be a gif', o)
            return Promise.reject(u)
          }
          var f = new a.a('The provided file is not a valid image', l)
          return Promise.reject(f)
        }
    },
  },
])
//# sourceMappingURL=WIPED
