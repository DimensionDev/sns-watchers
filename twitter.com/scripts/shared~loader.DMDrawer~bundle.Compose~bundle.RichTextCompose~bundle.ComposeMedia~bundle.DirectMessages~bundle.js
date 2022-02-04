;(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
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
        v = i('TGcR'),
        h = i('t62R'),
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
                        ? f.a.createElement(h.b, { weight: 'bold' }, 'GIF')
                        : f.a.createElement(v.a, { style: w.icon })
                  else if (a === y && i) {
                    var n = Math.trunc(i / 6e4),
                      r = '0'.concat(Math.trunc((i % 6e4) / 1e3)).slice(-2)
                    e = f.a.createElement(h.b, { color: 'white' }, ''.concat(n, ':').concat(r))
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
        v = i('5Yy7'),
        h = i.n(v),
        p = i('2VqO'),
        m = i.n(p),
        b = i('KEM+'),
        y = i.n(b),
        g = (i('2G9S'), i('jQ3i'), i('x4t0'), i('ERkP')),
        w = i.n(g),
        E = i('/yvb'),
        P = i('k/Ka'),
        _ = i('3XMw'),
        I = i.n(_),
        M = i('rHpw'),
        R = ['accept', 'disabled', 'multiple', 'onChange', 'testID'],
        C = I.a.i5450beb,
        k = I.a.f7432494,
        O = (function (e) {
          h()(i, e)
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
                      E.a,
                      n()({ hoverLabel: t ? { label: s ? k : C } : void 0 }, o, {
                        disabled: i,
                        onPress: this._handlePress,
                      }),
                    ),
                    Object(P.a)('input', {
                      accept: t,
                      disabled: i,
                      multiple: a,
                      onChange: this._handleChange,
                      ref: this._handleFileInputButtonRef,
                      style: V.input,
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
      y()(O, 'defaultProps', { disabled: !1, multiple: !1 })
      var V = M.a.create(function (e) {
        return {
          input: { width: '0.1px', height: '0.1px', opacity: 0, overflow: 'hidden', position: 'absolute', zIndex: -1 },
        }
      })
      t.a = O
    },
    GCOQ: function (e, t, i) {
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
                d: 'M19.875 2.75v18.5c0 .55-.45 1-1 1s-1-.45-1-1v-7.14c-1.86-.78-3.77-.21-5.79.38-1.39.41-2.81.82-4.26.82-1.1 0-2.2-.23-3.33-.89-.23-.14-.37-.38-.37-.65V4c0-.27.14-.52.38-.65.23-.13.52-.13.75 0 2.05 1.21 4.17.59 6.41-.07 2.02-.59 4.09-1.2 6.21-.54.01-.55.45-.99 1-.99s1 .45 1 1z',
              }),
            ),
          )
        }
      ;(d.metadata = { width: 24, height: 24 }), (t.a = d)
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
        v = i('KEM+'),
        h = i.n(v),
        p = (i('yH/f'), i('2G9S'), i('uFXj'), i('ERkP')),
        m = i.n(p),
        b = i('3XMw'),
        y = i.n(b),
        g = i('mN6z'),
        w = i('Qwev'),
        E = i('rHpw'),
        P = i('1auM'),
        _ = i('ude7'),
        I = i('U+bB'),
        M = i('MWbm'),
        R = y.a.gff1f69e,
        C = Object.freeze({ INFINITE: 'infinite', MEDIUM: 'medium', NONE: 'none' }),
        k = (function (e) {
          c()(i, e)
          var t = f()(i)
          function i() {
            var e
            n()(this, i)
            for (var a = arguments.length, r = new Array(a), l = 0; l < a; l++) r[l] = arguments[l]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              h()(s()(e), 'state', { imagePreviewUrl: null }),
              h()(s()(e), '_getImageSrc', function () {
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
                    (a instanceof P.a &&
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
                    d = [V.root, O[t], s && V.loadingBorder],
                    c = this._getImageSrc()
                  return m.a.createElement(
                    M.a,
                    { onClick: n, style: d },
                    s || !c
                      ? m.a.createElement(w.a, { accessibilityLabel: R, style: V.activityIndicator })
                      : m.a.createElement(I.a, { resizeMode: r, source: c, style: V.image }),
                  )
                },
              },
            ]),
            i
          )
        })(m.a.Component)
      h()(k, 'defaultProps', { borderRadius: C.NONE, enableGif: !0, resizeMode: 'cover' })
      var O = E.a.create(function (e) {
          var t
          return (
            (t = {}),
            h()(t, C.INFINITE, { borderRadius: e.borderRadii.infinite }),
            h()(t, C.MEDIUM, { borderRadius: e.borderRadii.small }),
            h()(t, C.NONE, { borderRadius: e.borderRadii.none }),
            t
          )
        }),
        V = E.a.create(function (e) {
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
      t.b = k
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
        v = i('KEM+'),
        h = i.n(v),
        p = (i('2G9S'), i('ERkP')),
        m = i.n(p),
        b = i('HPNB'),
        y = i('9HgX'),
        g = i('3XMw'),
        w = i.n(g),
        E = i('LCtV'),
        P = (i('lTEL'), i('7x/C'), i('JtPf'), i('87if'), i('kYxP'), i('zb92')),
        _ = i('RuTB'),
        I = Object(P.a)({
          loader: function () {
            return Promise.all([i.e(0), i.e(5), i.e(15), i.e(175)])
              .then(i.bind(null, 'EOJ2'))
              .then(function (e) {
                return { default: e.__DANGEROUS_IMPORT_VIDEOPLAYER__ }
              })
          },
          renderPlaceholder: function (e, t) {
            return m.a.createElement(_.a, { hasError: e, onRetry: t })
          },
        }),
        M = i('yiKp'),
        R = i.n(M),
        C = i('m3Bd'),
        k = i.n(C),
        O = (i('z84I'), i('k/Ka')),
        V = i('eXeu'),
        G = i('iOGT'),
        F = ['children', 'dataSaverMode', 'getVideoRef', 'style', 'variants'],
        L = (function (e) {
          c()(i, e)
          var t = f()(i)
          function i() {
            var e
            n()(this, i)
            for (var a = arguments.length, r = new Array(a), l = 0; l < a; l++) r[l] = arguments[l]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              h()(s()(e), '_setVideoRef', function (t) {
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
                    r = k()(e, F),
                    l = Object(G.b)(n, i ? G.a.MEDIUM : G.a.HIGH) || [],
                    o = Object(V.f)(
                      l.map(function (e) {
                        return { src: e.url, type: e.content_type }
                      }),
                    )
                  return Object(O.a)(
                    'video',
                    R()(
                      R()({}, r),
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
      h()(L, 'defaultProps', { dataSaverMode: !1, variants: [] })
      var x = i('62wY'),
        S = i('sjK1'),
        B = i('v6aA'),
        j = i('cHvH'),
        z = i('mXq/'),
        D = i('/yvb'),
        N = i('a6qo'),
        T = i('rHpw'),
        U = i('hOZg'),
        W = i('GCOQ'),
        H = i('tuke'),
        K = i('U+bB'),
        Y = i('MWbm'),
        A = i('+/sI'),
        J = w.a.gd80afba,
        q = w.a.j322caee,
        X = w.a.abd845fd,
        Q = w.a.df1b0707,
        Z = w.a.cd959e5b,
        $ = w.a.e68b09b4,
        ee = w.a.add55c97,
        te = (function (e) {
          c()(i, e)
          var t = f()(i)
          function i() {
            var e
            n()(this, i)
            for (var a = arguments.length, r = new Array(a), l = 0; l < a; l++) r[l] = arguments[l]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              h()(s()(e), 'state', { isVideoPaused: !0, playGif: !1 }),
              h()(s()(e), '_handleGifClick', function () {
                e.setState({ playGif: !e.state.playGif })
              }),
              h()(s()(e), '_handleMediaPreviewLayout', function (t) {
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
              h()(s()(e), '_handleVideoOnPlay', function (t) {
                e.setState({ isVideoPaused: !1 })
              }),
              h()(s()(e), '_handleVideoOnPause', function (t) {
                e.setState({ isVideoPaused: !0 })
              }),
              h()(s()(e), '_setMediaContainerRef', function (t) {
                e._mediaContainer = t
              }),
              h()(s()(e), '_setVideoRef', function (t) {
                e._video = t
              }),
              h()(s()(e), 'playVideo', function () {
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
              h()(s()(e), 'pauseVideo', function () {
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
                    v = i.withEditButton,
                    h = i.withEditIcon,
                    p = i.withEditSensitiveWarningButton,
                    g = this.state.playGif,
                    w = l.externalMediaDetails && l.externalMediaDetails.mediaType === y.a,
                    E = w || (r && l.mediaFile && l.mediaFile.isGif),
                    P = !(null === (e = l.mediaFile) || void 0 === e || !e.isVideo)
                  return m.a.createElement(j.a, null, function (e) {
                    var i = e.windowWidth,
                      r = void 0 !== h ? h : !b.a.isTwoColumnLayout(i)
                    return m.a.createElement(
                      Y.a,
                      {
                        accessibilityLabel: a || ee,
                        accessibilityRole: n,
                        onLayout: t._handleMediaPreviewLayout,
                        ref: t._setMediaContainerRef,
                        style: [c, ie.cursor, w && ie.gifPlayButton],
                      },
                      t._renderPreview(),
                      w &&
                        !g &&
                        m.a.createElement(z.a, { accessibilityLabel: Q, onPress: t._handleGifClick, size: 'small' }),
                      f
                        ? m.a.createElement(D.a, {
                            accessibilityLabel: Z,
                            hoverLabel: { label: $ },
                            icon: m.a.createElement(U.a, null),
                            onPress: d,
                            size: 'small',
                            style: ie.close,
                            type: 'onMediaDominantColorFilled',
                          })
                        : null,
                      E ? m.a.createElement(A.c, { type: A.a }) : null,
                      u && !P ? m.a.createElement(N.a, { align: 'left', altLabel: a }) : null,
                      v
                        ? m.a.createElement(
                            Y.a,
                            { style: [ie.editMedia, P ? ie.editVideo : ie.editImage] },
                            p
                              ? m.a.createElement(D.a, {
                                  accessibilityLabel: q,
                                  icon: m.a.createElement(W.a, { style: ie.editSensitiveWarningIcon }),
                                  onPress: s,
                                  size: 'small',
                                  style: ie.editSensitiveWarningButton,
                                  type: 'onMediaDominantColorFilled',
                                })
                              : null,
                            m.a.createElement(
                              D.a,
                              {
                                accessibilityLabel: J,
                                icon: r ? m.a.createElement(H.a, null) : void 0,
                                onPress: o,
                                size: r ? 'xSmall' : 'small',
                                type: 'onMediaDominantColorFilled',
                              },
                              r ? void 0 : X,
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
                    : m.a.createElement(Y.a, { style: T.a.absoluteFill }, this._renderImagePreview())
                },
              },
              {
                key: '_renderGifPreview',
                value: function (e, t) {
                  var i = { uri: this.state.playGif ? e : t }
                  return m.a.createElement(
                    Y.a,
                    { onClick: this._handleGifClick, style: T.a.absoluteFill },
                    m.a.createElement(K.a, { resizeMode: 'cover', source: i, style: ie.video }),
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
                  return m.a.createElement(E.b, {
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
                  if (this._configurableVideoPlayerEnabled && a instanceof S.c) {
                    var o = [{ src: t, type: e }],
                      s = ''.concat(i)
                    return m.a.createElement(I, {
                      mediaFile: a,
                      mediaId: s,
                      subtitles: l,
                      trimData: null == r ? void 0 : r.trimData,
                      variants: o,
                    })
                  }
                  var d,
                    c = [{ content_type: e, url: t }],
                    u =
                      (null == l || null === (d = l.upload) || void 0 === d ? void 0 : d.mediaFile) instanceof x.b
                        ? l.upload.mediaFile.vtt
                        : void 0
                  return m.a.createElement(
                    L,
                    {
                      autoPlay: !1,
                      controls: !0,
                      getVideoRef: this._setVideoRef,
                      loop: !0,
                      muted: !0,
                      onPause: this._handleVideoOnPause,
                      onPlay: this._handleVideoOnPlay,
                      playsInline: !0,
                      poster: a instanceof S.c ? a.thumbnail : '',
                      style: ie.video,
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
      h()(te, 'contextType', B.a),
        h()(te, 'defaultProps', {
          enableGif: !0,
          withCloseButton: !0,
          withAltTextLabel: !1,
          withEditButton: !1,
          withEditSensitiveWarningButton: !1,
        })
      var ie = T.a.create(function (e) {
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
      t.a = te
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
