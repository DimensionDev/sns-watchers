;(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    '+/sI': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return O
      }),
        n.d(t, 'b', function () {
          return P
        })
      n('OZaJ')
      var r = n('VrFO'),
        i = n.n(r),
        a = n('Y9Ll'),
        o = n.n(a),
        l = n('5Yy7'),
        c = n.n(l),
        s = n('N+ot'),
        u = n.n(s),
        d = n('AuHH'),
        f = n.n(d),
        p = (n('Wd/2'), n('M+/F'), n('2G9S'), n('ERkP')),
        v = n.n(p),
        h = n('TGcR'),
        y = n('t62R'),
        b = n('a6qo'),
        m = n('rHpw')
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
            r = f()(e)
          if (t) {
            var i = f()(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return u()(this, n)
        }
      }
      var O = 'animated_gif',
        P = 'video',
        w = (function (e) {
          c()(n, e)
          var t = g(n)
          function n() {
            return i()(this, n), t.apply(this, arguments)
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e,
                    t = this.props,
                    n = t.durationInMilliseconds,
                    r = t.type
                  if (r === O || 'vine' === r)
                    e =
                      r === O
                        ? v.a.createElement(y.b, { weight: 'bold' }, 'GIF')
                        : v.a.createElement(h.a, { style: E.icon })
                  else if (r === P && n) {
                    var i = Math.trunc(n / 6e4),
                      a = '0'.concat(Math.trunc((n % 6e4) / 1e3)).slice(-2)
                    e = v.a.createElement(y.b, { color: 'white' }, ''.concat(i, ':').concat(a))
                  }
                  return e ? v.a.createElement(b.a, { align: 'left' }, e) : null
                },
              },
            ]),
            n
          )
        })(v.a.PureComponent),
        E = m.a.create(function (e) {
          return { icon: { color: e.colors.white } }
        })
      t.c = w
    },
    '/Imo': function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('97Jx'),
        i = n.n(r),
        a = n('m3Bd'),
        o = n.n(a),
        l = n('VrFO'),
        c = n.n(l),
        s = n('Y9Ll'),
        u = n.n(s),
        d = n('1Pcy'),
        f = n.n(d),
        p = n('5Yy7'),
        v = n.n(p),
        h = n('N+ot'),
        y = n.n(h),
        b = n('AuHH'),
        m = n.n(b),
        g = n('KEM+'),
        O = n.n(g),
        P = (n('2G9S'), n('jQ3i'), n('x4t0'), n('ERkP')),
        w = n.n(P),
        E = n('/yvb'),
        R = n('k/Ka'),
        _ = n('3XMw'),
        j = n.n(_),
        M = n('rHpw')
      function I(e) {
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
            r = m()(e)
          if (t) {
            var i = m()(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return y()(this, n)
        }
      }
      var k = j.a.i5450beb,
        C = j.a.f7432494,
        F = (function (e) {
          v()(n, e)
          var t = I(n)
          function n() {
            var e
            c()(this, n)
            for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              O()(f()(e), '_handlePress', function (t) {
                var n = e.props.onPress
                n && n(t), e._fileInput && e._fileInput.click()
              }),
              O()(f()(e), '_handleChange', function (t) {
                var n = e.props.onChange,
                  r = t.target,
                  i = r.files
                i.length && n && n(i), (r.value = '')
              }),
              O()(f()(e), '_handleFileInputButtonRef', function (t) {
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
                    r = e.multiple,
                    a = (e.onChange, e.testID),
                    l = o()(e, ['accept', 'disabled', 'multiple', 'onChange', 'testID']),
                    c = !((null != t && t.includes('video')) || (null != t && t.includes('gif')))
                  return w.a.createElement(
                    w.a.Fragment,
                    null,
                    w.a.createElement(
                      E.a,
                      i()({ hoverLabel: t ? { label: c ? C : k } : void 0 }, l, {
                        disabled: n,
                        onPress: this._handlePress,
                      }),
                    ),
                    Object(R.a)('input', {
                      accept: t,
                      disabled: n,
                      multiple: r,
                      onChange: this._handleChange,
                      ref: this._handleFileInputButtonRef,
                      style: L.input,
                      tabIndex: -1,
                      testID: a,
                      type: 'file',
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(w.a.Component)
      O()(F, 'defaultProps', { disabled: !1, multiple: !1 })
      var L = M.a.create(function (e) {
        return {
          input: { width: '0.1px', height: '0.1px', opacity: 0, overflow: 'hidden', position: 'absolute', zIndex: -1 },
        }
      })
      t.a = F
    },
    GCOQ: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        i = n.n(r),
        a = n('ERkP'),
        o = n.n(a),
        l = n('Lsrn'),
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
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? s(Object(n), !0).forEach(function (t) {
                i()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (t) {
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
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [l.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          o.a.createElement(
            'g',
            null,
            o.a.createElement('path', {
              d: 'M19.875 2.75v18.5c0 .55-.45 1-1 1s-1-.45-1-1v-7.14c-1.86-.78-3.77-.21-5.79.38-1.39.41-2.81.82-4.26.82-1.1 0-2.2-.23-3.33-.89-.23-.14-.37-.38-.37-.65V4c0-.27.14-.52.38-.65.23-.13.52-.13.75 0 2.05 1.21 4.17.59 6.41-.07 2.02-.59 4.09-1.2 6.21-.54.01-.55.45-.99 1-.99s1 .45 1 1z',
            }),
          ),
        )
      }
      ;(d.metadata = { width: 24, height: 24 }), (t.a = d)
    },
    LCtV: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return C
      })
      n('OZaJ')
      var r = n('VrFO'),
        i = n.n(r),
        a = n('Y9Ll'),
        o = n.n(a),
        l = n('1Pcy'),
        c = n.n(l),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('N+ot'),
        f = n.n(d),
        p = n('AuHH'),
        v = n.n(p),
        h = n('KEM+'),
        y = n.n(h),
        b = (n('yH/f'), n('2G9S'), n('uFXj'), n('ERkP')),
        m = n.n(b),
        g = n('3XMw'),
        O = n.n(g),
        P = n('mN6z'),
        w = n('Qwev'),
        E = n('rHpw'),
        R = n('1auM'),
        _ = n('ude7'),
        j = n('U+bB'),
        M = n('MWbm')
      function I(e) {
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
            r = v()(e)
          if (t) {
            var i = v()(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var k = O.a.gff1f69e,
        C = Object.freeze({ INFINITE: 'infinite', MEDIUM: 'medium', NONE: 'none' }),
        F = (function (e) {
          u()(n, e)
          var t = I(n)
          function n() {
            var e
            i()(this, n)
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              y()(c()(e), 'state', { imagePreviewUrl: null }),
              y()(c()(e), '_getImageSrc', function () {
                var t = e.props,
                  n = t.enableGif,
                  r = t.mediaItem,
                  i = e.state.imagePreviewUrl
                if (r && r.mediaFile) return r.mediaFile.isGif && !n ? i : r.mediaFile.url
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
                    r = t.mediaItem.mediaFile,
                    i = this.state.imagePreviewUrl
                  n ||
                    i ||
                    (r instanceof R.a &&
                      r.isGif &&
                      Object(_.a)(r).then(function (t) {
                        e.setState({ imagePreviewUrl: t })
                      }))
                },
              },
              {
                key: 'shouldComponentUpdate',
                value: function (e, t) {
                  return !Object(P.a)(e, this.props) || !Object(P.a)(t, this.state)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.borderRadius,
                    n = e.enableGif,
                    r = e.mediaItem,
                    i = e.onClick,
                    a = e.resizeMode,
                    o = (this.state || {}).imagePreviewUrl,
                    l = r.mediaFile && r.mediaFile.isGif && !n && !o,
                    c = r.needsProcessing || l,
                    s = [G.root, L[t], c && G.loadingBorder],
                    u = this._getImageSrc()
                  return m.a.createElement(
                    M.a,
                    { onClick: i, style: s },
                    c || !u
                      ? m.a.createElement(w.a, { accessibilityLabel: k, style: G.activityIndicator })
                      : m.a.createElement(j.a, { resizeMode: a, source: u, style: G.image }),
                  )
                },
              },
            ]),
            n
          )
        })(m.a.Component)
      y()(F, 'defaultProps', { borderRadius: C.NONE, enableGif: !0, resizeMode: 'cover' })
      var L = E.a.create(function (e) {
          var t
          return (
            (t = {}),
            y()(t, C.INFINITE, { borderRadius: e.borderRadii.infinite }),
            y()(t, C.MEDIUM, { borderRadius: e.borderRadii.small }),
            y()(t, C.NONE, { borderRadius: e.borderRadii.none }),
            t
          )
        }),
        G = E.a.create(function (e) {
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
      t.b = F
    },
    pKoL: function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('VrFO'),
        i = n.n(r),
        a = n('Y9Ll'),
        o = n.n(a),
        l = n('1Pcy'),
        c = n.n(l),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('N+ot'),
        f = n.n(d),
        p = n('AuHH'),
        v = n.n(p),
        h = n('KEM+'),
        y = n.n(h),
        b = (n('2G9S'), n('ERkP')),
        m = n.n(b),
        g = n('HPNB'),
        O = n('9HgX'),
        P = n('3XMw'),
        w = n.n(P),
        E = n('LCtV'),
        R = (n('JtPf'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('zb92')),
        _ = n('RuTB'),
        j = Object(R.a)({
          loader: function () {
            return Promise.all([n.e(0), n.e(6), n.e(13), n.e(173)])
              .then(n.bind(null, 'EOJ2'))
              .then(function (e) {
                return { default: e.__DANGEROUS_IMPORT_VIDEOPLAYER__ }
              })
          },
          renderPlaceholder: function (e, t) {
            return m.a.createElement(_.a, { hasError: e, onRetry: t })
          },
        }),
        M = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('m3Bd')),
        I = n.n(M),
        k = (n('z84I'), n('k/Ka')),
        C = n('eXeu'),
        F = n('iOGT')
      function L(e, t) {
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
      function G(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? L(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : L(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
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
            r = v()(e)
          if (t) {
            var i = v()(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var x = (function (e) {
        u()(n, e)
        var t = V(n)
        function n() {
          var e
          i()(this, n)
          for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
          return (
            (e = t.call.apply(t, [this].concat(a))),
            y()(c()(e), '_setVideoRef', function (t) {
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
                  r = (e.getVideoRef, e.style),
                  i = e.variants,
                  a = I()(e, ['children', 'dataSaverMode', 'getVideoRef', 'style', 'variants']),
                  o = Object(F.b)(i, n ? F.a.MEDIUM : F.a.HIGH) || [],
                  l = Object(C.f)(
                    o.map(function (e) {
                      return { src: e.url, type: e.content_type }
                    }),
                  )
                return Object(k.a)(
                  'video',
                  G(
                    G({}, a),
                    {},
                    {
                      children: [
                        l.map(function (e) {
                          return m.a.createElement('source', { key: e.src, src: e.src, type: e.type })
                        }),
                        t,
                      ],
                      ref: this._setVideoRef,
                      style: r,
                    },
                  ),
                )
              },
            },
          ]),
          n
        )
      })(m.a.Component)
      y()(x, 'defaultProps', { dataSaverMode: !1, variants: [] })
      var B = n('62wY'),
        D = n('sjK1'),
        S = n('v6aA'),
        H = n('cHvH'),
        z = n('mXq/'),
        N = n('/yvb'),
        W = n('a6qo'),
        K = n('rHpw'),
        T = n('hOZg'),
        U = n('GCOQ'),
        A = n('tuke'),
        J = n('U+bB'),
        Y = n('MWbm'),
        X = n('+/sI')
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
            r = v()(e)
          if (t) {
            var i = v()(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var Q = w.a.gd80afba,
        q = w.a.j322caee,
        $ = w.a.abd845fd,
        ee = w.a.df1b0707,
        te = w.a.cd959e5b,
        ne = w.a.e68b09b4,
        re = w.a.add55c97,
        ie = (function (e) {
          u()(n, e)
          var t = Z(n)
          function n() {
            var e
            i()(this, n)
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              y()(c()(e), 'state', { isVideoPaused: !0, playGif: !1 }),
              y()(c()(e), '_handleGifClick', function () {
                e.setState({ playGif: !e.state.playGif })
              }),
              y()(c()(e), '_handleMediaPreviewLayout', function (t) {
                var n = e.props,
                  r = n.mediaItem,
                  i = n.resizeIfNeeded,
                  a = r.mediaFile || r.externalMediaDetails
                if (a) {
                  var o = t.nativeEvent.layout,
                    l = o.height,
                    c = o.width,
                    s = a.height,
                    u = a.width / s
                  Math.abs(u - c / l) > 0.05 &&
                    e._mediaContainer &&
                    ('width' === i
                      ? e._mediaContainer.setNativeProps({ style: { width: l * u } })
                      : 'height' === i && e._mediaContainer.setNativeProps({ style: { height: c / u } }))
                }
              }),
              y()(c()(e), '_handleVideoOnPlay', function (t) {
                e.setState({ isVideoPaused: !1 })
              }),
              y()(c()(e), '_handleVideoOnPause', function (t) {
                e.setState({ isVideoPaused: !0 })
              }),
              y()(c()(e), '_setMediaContainerRef', function (t) {
                e._mediaContainer = t
              }),
              y()(c()(e), '_setVideoRef', function (t) {
                e._video = t
              }),
              y()(c()(e), 'playVideo', function () {
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
              y()(c()(e), 'pauseVideo', function () {
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
                    r = n.accessibilityLabel,
                    i = n.accessibilityRole,
                    a = n.enableGif,
                    o = n.mediaItem,
                    l = n.onEdit,
                    c = n.onEditSensitiveWarning,
                    s = n.onRemove,
                    u = n.style,
                    d = n.withAltTextLabel,
                    f = n.withCloseButton,
                    p = n.withEditButton,
                    v = n.withEditIcon,
                    h = n.withEditSensitiveWarningButton,
                    y = this.state.playGif,
                    b = o.externalMediaDetails && o.externalMediaDetails.mediaType === O.a,
                    P = b || (a && o.mediaFile && o.mediaFile.isGif),
                    w = !(null === (e = o.mediaFile) || void 0 === e || !e.isVideo)
                  return m.a.createElement(H.a, null, function (e) {
                    var n = e.windowWidth,
                      a = void 0 !== v ? v : !g.a.isTwoColumnLayout(n)
                    return m.a.createElement(
                      Y.a,
                      {
                        accessibilityLabel: r || re,
                        accessibilityRole: i,
                        onLayout: t._handleMediaPreviewLayout,
                        ref: t._setMediaContainerRef,
                        style: [u, ae.cursor, b && ae.gifPlayButton],
                      },
                      t._renderPreview(),
                      b &&
                        !y &&
                        m.a.createElement(z.a, { accessibilityLabel: ee, onPress: t._handleGifClick, size: 'small' }),
                      f
                        ? m.a.createElement(N.a, {
                            accessibilityLabel: te,
                            hoverLabel: { label: ne },
                            icon: m.a.createElement(T.a, null),
                            onPress: s,
                            size: 'small',
                            style: ae.close,
                            type: 'onMediaDominantColorFilled',
                          })
                        : null,
                      P ? m.a.createElement(X.c, { type: X.a }) : null,
                      d && !w ? m.a.createElement(W.a, { align: 'left', altLabel: r }) : null,
                      p
                        ? m.a.createElement(
                            Y.a,
                            { style: [ae.editMedia, w ? ae.editVideo : ae.editImage] },
                            h
                              ? m.a.createElement(N.a, {
                                  accessibilityLabel: q,
                                  icon: m.a.createElement(U.a, { style: ae.editSensitiveWarningIcon }),
                                  onPress: c,
                                  size: 'small',
                                  style: ae.editSensitiveWarningButton,
                                  type: 'onMediaDominantColorFilled',
                                })
                              : null,
                            m.a.createElement(
                              N.a,
                              {
                                accessibilityLabel: Q,
                                icon: a ? m.a.createElement(A.a, null) : void 0,
                                onPress: l,
                                size: a ? 'xSmall' : 'small',
                                type: 'onMediaDominantColorFilled',
                              },
                              a ? void 0 : $,
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
                      r = t.externalMediaDetails.stillMediaUrl
                    return this._renderGifPreview(n, r)
                  }
                  return null !== (e = t.mediaFile) && void 0 !== e && e.isVideo
                    ? this._renderVideoPreview(t.mediaFile.type, t.mediaFile.url, t.id, t.mediaFile)
                    : m.a.createElement(Y.a, { style: K.a.absoluteFill }, this._renderImagePreview())
                },
              },
              {
                key: '_renderGifPreview',
                value: function (e, t) {
                  var n = { uri: this.state.playGif ? e : t }
                  return m.a.createElement(
                    Y.a,
                    { onClick: this._handleGifClick, style: K.a.absoluteFill },
                    m.a.createElement(J.a, { resizeMode: 'cover', source: n, style: ae.video }),
                  )
                },
              },
              {
                key: '_renderImagePreview',
                value: function () {
                  var e = this.props,
                    t = e.borderRadius,
                    n = e.enableGif,
                    r = e.imageResizeMode,
                    i = e.mediaItem,
                    a = e.onClick
                  return m.a.createElement(E.b, {
                    borderRadius: t,
                    enableGif: n,
                    mediaItem: i,
                    onClick: a,
                    resizeMode: r,
                  })
                },
              },
              {
                key: '_renderVideoPreview',
                value: function (e, t, n, r) {
                  var i
                  this._configurableVideoPlayerEnabled = this.context.featureSwitches.isTrue(
                    'responsive_web_composer_configurable_video_player_enabled',
                  )
                  var a = this.props.mediaItem,
                    o = null === (i = a.mediaMetadata) || void 0 === i ? void 0 : i.subtitles
                  if (this._configurableVideoPlayerEnabled && r instanceof D.c) {
                    var l = [{ src: t, type: e }],
                      c = ''.concat(n)
                    return m.a.createElement(j, {
                      mediaFile: r,
                      mediaId: c,
                      subtitles: o,
                      trimData: null == a ? void 0 : a.trimData,
                      variants: l,
                    })
                  }
                  var s,
                    u = [{ content_type: e, url: t }],
                    d =
                      (null == o || null === (s = o.upload) || void 0 === s ? void 0 : s.mediaFile) instanceof B.b
                        ? o.upload.mediaFile.vtt
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
                      poster: r instanceof D.c ? r.thumbnail : '',
                      style: ae.video,
                      variants: u,
                    },
                    o && d
                      ? m.a.createElement('track', {
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
        })(m.a.Component)
      y()(ie, 'contextType', S.a),
        y()(ie, 'defaultProps', {
          enableGif: !0,
          withCloseButton: !0,
          withAltTextLabel: !1,
          withEditButton: !1,
          withEditSensitiveWarningButton: !1,
        })
      var ae = K.a.create(function (e) {
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
    tuke: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        i = n.n(r),
        a = n('ERkP'),
        o = n.n(a),
        l = n('Lsrn'),
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
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? s(Object(n), !0).forEach(function (t) {
                i()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (t) {
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
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [l.a.root, e.style], viewBox: '0 0 24 24' },
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
      ;(d.metadata = { width: 24, height: 24 }), (t.a = d)
    },
    ude7: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return s
      })
      n('JtPf'), n('7x/C')
      var r = n('A0bJ'),
        i = n('hJBK'),
        a = n('1auM'),
        o = 1,
        l = 2,
        c = 3,
        s = function (e) {
          if (Object(a.b)(e)) {
            if (e.isGif) {
              var t = e.height,
                n = e.img,
                s = e.orientation,
                u = e.width
              return Object(i.b)(n, u, t, s).then(
                function (e) {
                  return Object(i.a)(e)
                },
                function (e) {
                  throw new r.a('Gif preview could not be generated', c)
                },
              )
            }
            var d = new r.a('The provided image must be a gif', l)
            return Promise.reject(d)
          }
          var f = new r.a('The provided file is not a valid image', o)
          return Promise.reject(f)
        }
    },
  },
])
//# sourceMappingURL=WIPED
