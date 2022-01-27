;(window.webpackJsonp = window.webpackJsonp || []).push([
  [50, 7, 12, 18, 170],
  {
    '+0pD': function (e, t) {
      var n =
        '[object Arguments]' ==
        (function () {
          return Object.prototype.toString.call(arguments)
        })()
      function r(e) {
        return '[object Arguments]' == Object.prototype.toString.call(e)
      }
      function a(e) {
        return (
          (e &&
            'object' == typeof e &&
            'number' == typeof e.length &&
            Object.prototype.hasOwnProperty.call(e, 'callee') &&
            !Object.prototype.propertyIsEnumerable.call(e, 'callee')) ||
          !1
        )
      }
      ;((t = e.exports = n ? r : a).supported = r), (t.unsupported = a)
    },
    '+Bsv': function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        a = n('3XMw'),
        i = n.n(a),
        o = n('M2x3'),
        c = 'settingsAppBar',
        s = n('/yvb'),
        l = n('rHpw'),
        u = i.a.bb081ea1,
        d = { viewType: 'settings_button' },
        p = r.memo(function (e) {
          var t = e.onPress,
            n = e.pullRight,
            a = e.to
          return r.createElement(s.a, {
            accessibilityLabel: u,
            behavioralEventContext: d,
            hoverLabel: { label: u },
            icon: r.createElement(o.a, null),
            link: a,
            onPress: t,
            pullRight: n,
            style: f.button,
            testID: c,
            type: 'primaryText',
          })
        }),
        f = l.a.create(function (e) {
          return { button: { marginVertical: 'calc(-'.concat(e.spaces.space12, ')') } }
        })
      t.a = p
    },
    '06eB': function (e, t, n) {
      var r = Array.prototype.slice,
        a = n('kgfz'),
        i = n('+0pD'),
        o = (e.exports = function (e, t, n) {
          return (
            n || (n = {}),
            e === t ||
              (e instanceof Date && t instanceof Date
                ? e.getTime() === t.getTime()
                : !e || !t || ('object' != typeof e && 'object' != typeof t)
                ? n.strict
                  ? e === t
                  : e == t
                : (function (e, t, n) {
                    var l, u
                    if (c(e) || c(t)) return !1
                    if (e.prototype !== t.prototype) return !1
                    if (i(e)) return !!i(t) && ((e = r.call(e)), (t = r.call(t)), o(e, t, n))
                    if (s(e)) {
                      if (!s(t)) return !1
                      if (e.length !== t.length) return !1
                      for (l = 0; l < e.length; l++) if (e[l] !== t[l]) return !1
                      return !0
                    }
                    try {
                      var d = a(e),
                        p = a(t)
                    } catch (f) {
                      return !1
                    }
                    if (d.length != p.length) return !1
                    for (d.sort(), p.sort(), l = d.length - 1; l >= 0; l--) if (d[l] != p[l]) return !1
                    for (l = d.length - 1; l >= 0; l--) if (((u = d[l]), !o(e[u], t[u], n))) return !1
                    return typeof e == typeof t
                  })(e, t, n))
          )
        })
      function c(e) {
        return null == e
      }
      function s(e) {
        return (
          !(!e || 'object' != typeof e || 'number' != typeof e.length) &&
          'function' == typeof e.copy &&
          'function' == typeof e.slice &&
          !(e.length > 0 && 'number' != typeof e[0])
        )
      }
    },
    '0Ki6': function (e, t, n) {
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
        y = (n('i4UL'), n('2G9S'), n('ERkP')),
        b = n('CHgo'),
        g = n('fs1G'),
        _ = n('rHpw'),
        E = n('rOXj'),
        O = n('MWbm'),
        S = n('Enqy')
      function C(e, t) {
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
      function w(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? C(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : C(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function R(e) {
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
      var I = E.a.isTouchSupported(),
        k = { zoom: 1, lastX: 0, lastY: 0, zoomCenter: { x: 0, y: 0 } },
        P = { height: 0, width: 0, left: 0, right: 0, top: 0, bottom: 0 },
        x = function (e, t, n) {
          return Math.min(t, Math.max(e, n))
        },
        T = function (e, t) {
          return Math.sqrt(Math.pow(e.clientY - t.clientY, 2) + Math.pow(e.clientX - t.clientX, 2))
        },
        A = (function (e) {
          u()(n, e)
          var t = R(n)
          function n(e) {
            var r
            return (
              a()(this, n),
              (r = t.call(this, e)),
              v()(s()(r), '_itemDimensions', P),
              v()(s()(r), '_ref', y.createRef()),
              v()(s()(r), '_setTouchableNode', function (e) {
                r._touchableNode !== e &&
                  ((r._touchableNode = e),
                  r._removeTouchListener && r._removeTouchListener(),
                  r._touchableNode && (r._removeTouchListener = Object(b.a)(r._touchableNode, r._handleTouchMove, !1)))
              }),
              v()(s()(r), '_handleTouchStart', function (e) {
                r._ref.current && (r._zoomedDimensions = r._ref.current.getBoundingClientRect()), (r._moved = !1)
                var t = e.touches.length
                2 === t ? (e.preventDefault(), r._handlePinchStart(e)) : 1 === t && r._handleTapStart(e)
              }),
              v()(s()(r), '_handleTouchMove', function (e) {
                var t = e.touches.length
                2 === t ? r._handlePinchMove(e) : 1 === t && ((r._moved = !0), r._handlePanMove(e)), e.preventDefault()
              }),
              v()(s()(r), '_handleTouchEnd', function (e) {
                var t = r.props,
                  n = t.maxZoom,
                  a = t.minZoom,
                  i = t.onTap,
                  o = x(a, n, r.state.zoom),
                  c = r.state.zoom
                c !== o && 1 === o ? r.resetZoom() : r.setState({ lastX: 0, lastY: 0, zoom: o }),
                  0 === e.touches.length
                    ? (r._lastTouchTime && r._lastTouchTime + 300 > e.timeStamp
                        ? (r._clickTimer && clearTimeout(r._clickTimer), r._handleDoubleTap(e))
                        : c <= 1 && !r._moved && (r._clickTimer = setTimeout(i, 300)),
                      (r._lastTouchTime = e.timeStamp))
                    : e.preventDefault()
              }),
              (r.state = w({}, k)),
              r
            )
          }
          return (
            o()(
              n,
              [
                {
                  key: 'render',
                  value: function () {
                    var e = this
                    if (!I) return this.props.children
                    var t = this.state,
                      n = t.zoom,
                      r = t.zoomCenter,
                      a = this._moved,
                      i = {
                        zoom: Object(S.spring)(n),
                        zoomCenterX: Object(S.spring)(r.x),
                        zoomCenterY: Object(S.spring)(r.y),
                      }
                    return y.createElement(
                      O.a,
                      {
                        onTouchEnd: this._handleTouchEnd,
                        onTouchStart: this._handleTouchStart,
                        ref: this._setTouchableNode,
                        style: M.fill,
                      },
                      y.createElement(S.Motion, { style: i }, function (t) {
                        var n = t.zoom,
                          i = t.zoomCenterX,
                          o = t.zoomCenterY
                        return y.createElement(
                          O.a,
                          {
                            ref: e._ref,
                            style: [
                              M.fill,
                              {
                                transform: [{ scale: n }],
                                transformOrigin: ''.concat(a ? i : r.x, 'px ').concat(a ? o : r.y, 'px'),
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
                    I && this._updateWindowDimensions()
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
                    this.props.onZoomed(!1), this.setState({ zoom: k.zoom })
                  },
                },
                {
                  key: '_handlePanMove',
                  value: function (e) {
                    if (!(this.state.zoom <= 1) && this._zoomedDimensions && this._windowDimensions) {
                      var t = e.touches[0],
                        n = t.clientX,
                        r = t.clientY
                      if (this.state.lastX && this.state.lastY) {
                        var a = this.state,
                          i = a.lastX,
                          o = a.lastY,
                          c = a.zoomCenter,
                          s = c.x,
                          l = c.y,
                          u = this._windowDimensions,
                          d = u.height,
                          p = u.width,
                          f = this._zoomedDimensions,
                          h = f.height,
                          m = 0,
                          v = 0
                        f.width - p > 0 && (m = n - i),
                          h - d > 0 && (v = r - o),
                          this.setState({
                            lastX: n,
                            lastY: r,
                            zoomCenter: { x: Math.min(Math.max(s - m, 0), p), y: Math.min(Math.max(l - v, 0), d) },
                          })
                      } else this.setState({ lastX: n, lastY: r })
                    }
                  },
                },
                {
                  key: '_handlePinchStart',
                  value: function (e) {
                    var t,
                      n,
                      r = e.touches
                    if ((this._updateWindowDimensions(), (this._lastDistance = T(r[0], r[1])), 1 === this.state.zoom)) {
                      var a =
                        ((t = r[0]), (n = r[1]), { x: (t.clientX + n.clientX) / 2, y: (t.clientY + n.clientY) / 2 })
                      this.setState({ zoomCenter: this._getZoomCenter(a.x, a.y) }), this.props.onZoomed(!0)
                    }
                  },
                },
                {
                  key: '_handlePinchMove',
                  value: function (e) {
                    var t = this.state,
                      n = t.zoom,
                      r = t.zoomCenter,
                      a = this.props,
                      i = a.maxZoom,
                      o = a.maxZoomBounce,
                      c = a.minZoom,
                      s = a.minZoomBounce
                    if (0 !== r.x || 0 !== r.y) {
                      var l = T(e.touches[0], e.touches[1]),
                        u = this._lastDistance ? l / this._lastDistance : 1,
                        d = x(c - s, i + o, n * u)
                      ;(this._lastDistance = l), this.setState({ zoom: d })
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
                      r = t.onZoomed
                    1 !== this.state.zoom
                      ? this.resetZoom()
                      : (this._updateWindowDimensions(),
                        this.setState({ zoom: n, zoomCenter: this._tapCenter || k.zoomCenter }),
                        r(!0))
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
                    return I && e.resetZoom ? (e.onZoomed(!1), w({}, k)) : t
                  },
                },
              ],
            ),
            n
          )
        })(y.Component)
      v()(A, 'defaultProps', {
        maxZoom: 2.5,
        maxZoomBounce: 0.15,
        minZoom: 1,
        minZoomBounce: 0.15,
        onTap: g.a,
        onZoomed: g.a,
        resetZoom: !1,
      })
      var M = _.a.create(function (e) {
        return { fill: { flex: 1 } }
      })
      t.a = A
    },
    '180P': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      })
      n('7x/C'), n('DZ+c'), n('KOtZ'), n('Ysgh'), n('KqXw'), n('tQbP'), n('7xRU')
      var r = function (e) {
          var t = (JSON.stringify(e) || '').split('')
          t.sort()
          var n = t.join('')
          return a(n, 0).toString()
        },
        a = function (e, t) {
          for (var n = 'string' == typeof e ? e : String(e), r = t, a = 0; a < n.length; a++) {
            ;(r = (r << 5) - r + n.charCodeAt(a)), (r &= r)
          }
          return r
        }
    },
    '23An': function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        a = r.useEffect,
        i = r.useRef
      e.exports = function () {
        var e = i(!0)
        return (
          a(function () {
            return (
              (e.current = !0),
              function () {
                e.current = !1
              }
            )
          }, []),
          e
        )
      }
    },
    '2Daw': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return A
      })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        i = n('Y9Ll'),
        o = n.n(i),
        c = n('5Yy7'),
        s = n.n(c),
        l = n('N+ot'),
        u = n.n(l),
        d = n('AuHH'),
        p = n.n(d),
        f = n('KEM+'),
        h = n.n(f),
        m = (n('uFXj'), n('ERkP')),
        v = n('LCtV'),
        y = n('3XMw'),
        b = n.n(y),
        g = n('VPdC'),
        _ = n('pKoL'),
        E = n('MWbm'),
        O = n('rFBM'),
        S = n('/yvb'),
        C = n('9Xij'),
        w = n('rHpw'),
        R = n('hOZg'),
        I = n('Mbn/'),
        k = n('T8pk')
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
            r = p()(e)
          if (t) {
            var a = p()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return u()(this, n)
        }
      }
      var x = b.a.b87ca51a,
        T = b.a.eebff22c,
        A = (function (e) {
          s()(n, e)
          var t = P(n)
          function n() {
            return a()(this, n), t.apply(this, arguments)
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.borderRadius,
                    n = e.maskStyle,
                    r = e.mediaItem,
                    a = e.onAddMediaFiles,
                    i = e.onCrop,
                    o = e.onRemove,
                    c = e.rootStyle,
                    s = e.withDragDrop,
                    l = r && !r.uploader,
                    u = m.createElement(
                      m.Fragment,
                      null,
                      this._renderPreview(),
                      l
                        ? null
                        : m.createElement(
                            m.Fragment,
                            null,
                            m.createElement(E.a, { style: [j.mask, n, M[t]] }),
                            m.createElement(
                              E.a,
                              { style: j.mediaPicker },
                              this._renderMediaEdit(),
                              i ? this._renderMediaCrop() : null,
                              o ? this._renderMediaRemove() : null,
                            ),
                          ),
                    )
                  return m.createElement(
                    E.a,
                    { style: [j.container, c, M[t]] },
                    s && a ? m.createElement(O.a, { onFilesAdded: a, style: [j.dragDropContainer, M[t]] }, u) : u,
                  )
                },
              },
              {
                key: '_renderMediaRemove',
                value: function () {
                  var e = this.props.onRemove
                  return m.createElement(S.a, {
                    accessibilityLabel: x,
                    hoverLabel: { label: x },
                    icon: m.createElement(R.a, null),
                    onPress: e,
                    size: 'large',
                    style: j.rightButton,
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
                  return m.createElement(S.a, {
                    accessibilityLabel: T,
                    icon: m.createElement(I.a, null),
                    onPress: t,
                    size: 'large',
                    style: n ? j.middleButton : j.rightButton,
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
                    r = e.accessibilityLabel,
                    a = e.onAddMediaFiles,
                    i = e.onEdit,
                    o = m.createElement(k.a, null)
                  return a
                    ? m.createElement(g.a, {
                        acceptGifs: t,
                        acceptVideo: n,
                        accessibilityLabel: r,
                        icon: o,
                        onChange: a,
                        size: 'large',
                        type: 'onMediaDominantColorFilled',
                      })
                    : m.createElement(S.a, {
                        accessibilityLabel: r,
                        icon: o,
                        onPress: i,
                        size: 'large',
                        style: j.edit,
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
                    r = e.currentContent,
                    a = e.mediaItem
                  return a
                    ? m.createElement(
                        C.a,
                        { ratio: t },
                        m.createElement(_.a, {
                          borderRadius: n,
                          enableGif: !1,
                          mediaItem: a,
                          style: j.mediaPreview,
                          withCloseButton: !1,
                        }),
                      )
                    : r
                },
              },
            ]),
            n
          )
        })(m.Component)
      h()(A, 'defaultProps', { acceptGifs: !1, acceptVideo: !1, aspectRatio: 1, borderRadius: v.a.NONE })
      var M = w.a.create(function (e) {
          return {
            infinite: { borderRadius: e.borderRadii.infinite },
            medium: { borderRadius: e.borderRadii.small },
            none: { borderRadius: e.borderRadii.none },
          }
        }),
        j = w.a.create(function (e) {
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
    '2doW': function (e, t, n) {
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
        y = (n('Ysgh'), n('KqXw'), n('z84I'), n('ERkP')),
        b = n('97Jx'),
        g = n.n(b),
        _ = n('ddV6'),
        E = n.n(_),
        O = n('m3Bd'),
        S = n.n(O),
        C =
          (n('+KXO'),
          n('1t7P'),
          n('LW0h'),
          n('daRM'),
          n('jwue'),
          n('+oxZ'),
          n('FtHn'),
          n('2G9S'),
          n('JtPf'),
          n('7x/C'),
          n('3XMw')),
        w = n.n(C),
        R = n('mN6z'),
        I = n('U+bB'),
        k = n('MWbm'),
        P = n('0Ki6'),
        x = n('3dad'),
        T = n('r1lV'),
        A = n('rHpw'),
        M = n('JYMr')
      function j(e, t) {
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
      function D(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? j(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : j(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
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
      var F = w.a.b327c129,
        B = w.a.gff1f69e,
        N = (function (e) {
          u()(n, e)
          var t = L(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              v()(s()(e), 'state', { loadingVariant: null, imageLoading: !1 }),
              v()(s()(e), '_handleLoadStart', function () {
                return e.setState({ imageLoading: !0 })
              }),
              v()(s()(e), '_handleLoadEnd', function () {
                return e.setState({ imageLoading: !1 })
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
                    var e = this
                    this._mountPromiseForTesting = n._selectCachedVariant(this.props.photo).then(function (t) {
                      return e.setState({ loadingVariant: t })
                    })
                  },
                },
                {
                  key: 'componentDidUpdate',
                  value: function (e, t) {
                    var r = this
                    Object(R.a)(e.photo, this.props.photo) ||
                      (this.setState({ loadingVariant: null }),
                      n._selectCachedVariant(this.props.photo).then(function (e) {
                        return r.setState({ loadingVariant: e })
                      }))
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var e = this.props,
                      t = e.dataSaver,
                      r = e.imageStyle,
                      a = e.onError,
                      i = e.onLoad,
                      o = e.onTap,
                      c = e.onZoomed,
                      s = e.photo,
                      l = e.resetZoom,
                      u = e.style,
                      d = e.zoomable,
                      p = this.state.loadingVariant,
                      f = (t && p && Math.max(p.width, p.height) >= 680 ? p.uri : null) || n._selectSource(s)
                    if (!f || null === p) return null
                    var h = y.createElement(I.a, {
                      accessibilityLabel: s.ext_alt_text ? s.ext_alt_text : F,
                      defaultSource: p && p.uri,
                      draggable: !0,
                      onError: p ? void 0 : a,
                      onLoad: i,
                      onLoadEnd: this._handleLoadEnd,
                      onLoadStart: this._handleLoadStart,
                      resizeMode: 'contain',
                      source: f,
                      style: [H.img, r],
                    })
                    return y.createElement(
                      k.a,
                      { style: u },
                      this.state.imageLoading ? U : null,
                      d ? y.createElement(P.a, { onTap: o, onZoomed: c, resetZoom: l }, h) : h,
                    )
                  },
                },
              ],
              [
                {
                  key: '_selectCachedVariant',
                  value: function (e) {
                    var t = x.a.getOriginalImage(e)
                    return t ? T.a.selectLargestCachedVariant(t) : Promise.resolve()
                  },
                },
                {
                  key: '_selectSource',
                  value: function (e) {
                    var t = x.a.getOriginalImage(e)
                    return t && T.a.selectLargestUrl(t)
                  },
                },
              ],
            ),
            n
          )
        })(y.PureComponent)
      v()(N, 'defaultProps', { zoomable: !1 })
      var H = A.a.create(function (e) {
          return {
            img: D(
              D({}, A.a.absoluteFillObject),
              {},
              { height: 'auto', margin: 'auto', maxHeight: '100%', maxWidth: '100%', width: 'auto' },
            ),
            progressBar: { position: 'absolute', top: 0, zIndex: 1 },
          }
        }),
        U = y.createElement(M.a, { ariaValueText: B, indeterminate: !0, style: H.progressBar }),
        V = N,
        W = n('RCZO'),
        z = n('Modb'),
        K = n('XrEN')
      function G(e) {
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
      var q = (function (e) {
          u()(n, e)
          var t = G(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              v()(s()(e), '_handlePlaybackStarted', function () {
                e._player && !e.props.isCurrentlyDisplayed && e._player.pause()
              }),
              v()(s()(e), '_setPlayer', function (t) {
                ;(e._player = t), e._player && e.props.isCurrentlyDisplayed && e._player.play()
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
                  return y.createElement(
                    k.a,
                    { style: e },
                    y.createElement(k.a, { style: Y.root }, this._renderVideo()),
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
                    r = e.videoId
                  return y.createElement(
                    z.a,
                    g()({}, K.a.extractVideoProps(r, n), {
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
        })(y.PureComponent),
        Y = A.a.create({ root: { flexBasis: 0, flexGrow: 1, flexShrink: 1, justifyContent: 'center' } }),
        X = q
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
      function Z(e) {
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
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var $ = { startX: 0, startY: 0 },
        ee = (function (e) {
          u()(n, e)
          var t = J(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              v()(s()(e), '_pullDistanceY', 0),
              v()(s()(e), '_pullInfo', Z({}, $)),
              v()(s()(e), '_handleTouchStart', function (t) {
                ;(e._pullInfo.startX = t.touches[0].clientX), (e._pullInfo.startY = t.touches[0].clientY)
              }),
              v()(s()(e), '_handleTouchMove', function (t) {
                if ('number' == typeof e._pullInfo.startX && 'number' == typeof e._pullInfo.startY) {
                  var n = t.touches[0],
                    r = n.clientX - e._pullInfo.startX,
                    a = n.clientY - e._pullInfo.startY
                  Math.abs(r) > 10 || (t.preventDefault(), e._updatePullPosition(a))
                }
              }),
              v()(s()(e), '_handleTouchEnd', function (t) {
                Math.abs(e._pullDistanceY) > 50 ? e._handleDismiss() : e._resetPullInfo()
              }),
              v()(s()(e), '_updatePullPosition', function (t) {
                e._pullDistanceY = t
              }),
              v()(s()(e), '_handleDismiss', function () {
                var t = e.props.onDismiss
                t && t(), e._resetPullInfo()
              }),
              v()(s()(e), '_resetPullInfo', function () {
                e._updatePullPosition(0), (e._pullInfo = Z({}, $))
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
                    n = e.onDismiss,
                    r = e.onLayout,
                    a = e.style,
                    i = !!n
                  return y.createElement(
                    k.a,
                    {
                      onLayout: r,
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
        })(y.Component),
        te = n('7N4s'),
        ne = n('q9Zt'),
        re = w.a.ac85c6b1,
        ae = function (e) {
          var t = e.isAvatar,
            n = e.isCurrentlyDisplayed,
            r = e.mediaDetail,
            a = e.onDismiss,
            i = e.onTap,
            o = e.promotedContent,
            c = e.videoId,
            s = S()(e, [
              'isAvatar',
              'isCurrentlyDisplayed',
              'mediaDetail',
              'onDismiss',
              'onTap',
              'promotedContent',
              'videoId',
            ]),
            l = y.useState(null),
            u = E()(l, 2),
            d = u[0],
            p = u[1],
            f = y.useState({ width: 0, height: 0 }),
            h = E()(f, 2),
            m = h[0],
            v = h[1],
            b = y.useContext(te.b).isModal,
            _ = r.original_info || {},
            O = _.height,
            C = _.width,
            w = m.height,
            R = m.width,
            I =
              b || t
                ? Object(W.f)({ mediaWidth: C, mediaHeight: O, containerWidth: R, containerHeight: w }, t)
                : ie.mediaItem
          y.useEffect(
            function () {
              d && p(null)
            },
            [e, d],
          )
          return y.createElement(
            ee,
            {
              onDismiss: a,
              onLayout:
                b || t
                  ? function (e) {
                      var t = e.nativeEvent.layout,
                        n = t.height,
                        r = t.width
                      ;(r === m.width && n === m.height) || v({ width: r, height: n })
                    }
                  : void 0,
              style: ie.root,
            },
            d
              ? y.createElement(ne.a, {
                  onRetry: function () {
                    p(null)
                  },
                  style: ie.errorDetail,
                  title: re,
                  withLightOnDarkColorScheme: !0,
                })
              : null,
            d
              ? null
              : y.createElement(
                  k.a,
                  {
                    onClick: function (e) {
                      e.stopPropagation()
                    },
                    style: I,
                  },
                  'photo' === r.type
                    ? y.createElement(
                        V,
                        g()({}, s, {
                          imageStyle: t && ie.avatarImage,
                          onError: function (e) {
                            p(e.nativeEvent.error)
                          },
                          onLoad: function () {
                            p(null)
                          },
                          onTap: i,
                          photo: r,
                          style: ie.container,
                          zoomable: !0,
                        }),
                      )
                    : K.a.isVideo(r) && c
                    ? y.createElement(X, {
                        isCurrentlyDisplayed: n,
                        promotedContent: o,
                        style: ie.container,
                        video: r,
                        videoId: c,
                      })
                    : null,
                ),
          )
        },
        ie = A.a.create(function (e) {
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
        oe = y.memo(ae, function (e, t) {
          return Object(R.a)(e, t)
        }),
        ce = n('lklz'),
        se = n('v6aA'),
        le = n('6iuV'),
        ue = n('uavX'),
        de = n('fs1G')
      function pe(e) {
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
      var fe = (function (e) {
        u()(n, e)
        var t = pe(n)
        function n(e, r) {
          var i
          return (
            a()(this, n),
            (i = t.call(this, e, r)),
            v()(s()(i), '_handleChangeV2', function (e) {
              var t = e.index,
                n = e.intersectionRatio,
                r = i.props.onMediaItemChanged
              1 === n && r && r(t)
            }),
            v()(s()(i), '_getItemVideoId', function (e) {
              return (
                i.props.videoId ||
                (function (e) {
                  return ce.b.forTweet(e.expanded_url.split('/')[3])
                })(e)
              )
            }),
            v()(s()(i), '_handleMediaDetailZoomed', function (e) {
              var t = i.props.onMediaDetailZoomed
              i.state.isZoomed !== e && i.setState({ isZoomed: e }), t && t(e)
            }),
            (i.state = { isZoomed: !1 }),
            i
          )
        }
        return (
          o()(n, [
            {
              key: 'shouldComponentUpdate',
              value: function (e, t) {
                return !Object(R.a)(e, this.props) || !Object(R.a)(t, this.state)
              },
            },
            {
              key: 'render',
              value: function () {
                var e = this,
                  t = this.props,
                  n = t.dataSaver,
                  r = t.mediaIndex,
                  a = t.mediaItems,
                  i = t.onDismiss,
                  o = t.onTap,
                  c = t.promotedContent,
                  s = this.state.isZoomed,
                  l = a.map(function (t, l) {
                    var u = K.a.isVideo(t),
                      d = e._getItemVideoId(t),
                      p = r === l
                    return (u && d) || !u
                      ? y.createElement(oe, {
                          dataSaver: n,
                          isAvatar: e.props.isAvatar,
                          isCurrentlyDisplayed: p,
                          key: l,
                          mediaDetail: a[l],
                          onDismiss: s ? void 0 : i,
                          onTap: o,
                          onZoomed: p ? e._handleMediaDetailZoomed : void 0,
                          promotedContent: c,
                          resetZoom: r !== l,
                          videoId: d,
                        })
                      : null
                  })
                return y.createElement(k.a, { style: he.root }, a.length > 1 ? this._renderCarousel(l) : l)
              },
            },
            {
              key: '_renderCarousel',
              value: function (e) {
                var t = this.props,
                  n = t.dominantColor,
                  r = t.mediaIndex,
                  a = t.mediaItems,
                  i = t.onMediaItemChanged,
                  o = this.state.isZoomed,
                  c = K.a.isVideo(a[r])
                return this.context.featureSwitches.isTrue('responsive_web_carousel_v2_media_detail_enabled')
                  ? y.createElement(
                      le.a,
                      {
                        childrenStyle: [he.dimensions, he.scrollSnap],
                        dominantButtonColor: n,
                        isLocked: o,
                        onVisibleRangeChange: this._handleChangeV2,
                        style: he.dimensions,
                        visibleItemIndex: r,
                        withAddedNavButtonClickArea: !c,
                      },
                      e,
                    )
                  : y.createElement(
                      ue.b,
                      {
                        currentSlide: r,
                        dominantColor: n,
                        locked: o,
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
      })(y.Component)
      v()(fe, 'contextType', se.a),
        v()(fe, 'defaultProps', { mediaIndex: 0, onMediaDetailZoomed: de.a, onMediaItemChanged: de.a })
      var he = A.a.create(function (e) {
        return {
          root: { flex: 1, zIndex: 1 },
          dimensions: { height: '100%', width: '100%' },
          scrollSnap: { scrollSnapAlign: 'center', scrollSnapStop: 'always' },
        }
      })
      t.a = fe
    },
    '33Kz': function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return c
      }),
        n.d(t, 'a', function () {
          return s
        })
      var r = n('RhWx'),
        a = n.n(r),
        i =
          (n('2G9S'),
          n('hBpG'),
          n('mlET'),
          n('Ysgh'),
          n('KqXw'),
          n('z84I'),
          function (e) {
            return e.getArrayValue('dm_reactions_config_active_reactions')
          }),
        o = function (e) {
          var t = e.getArrayValue('dm_reactions_config_inactive_reactions'),
            n = i(e)
          return [].concat(a()(n), a()(t))
        },
        c = function (e, t) {
          var n = o(t).find(function (t) {
            return t.endsWith(e)
          })
          if (n) return n.split(':')[0]
        },
        s = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { includeInactive: !1 }
          return t.includeInactive
            ? o(e).map(function (e) {
                return e.split(':')[1]
              })
            : i(e).map(function (e) {
                return e.split(':')[1]
              })
        }
    },
    '3AAD': function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r)
      function i(e, t) {
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
      function o(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? i(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : i(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var c = o(o({}, n('7n04').a), {}, { pinToNewestWhenAtNewest: !0 })
      t.a = c
    },
    '3GUV': function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        i = n('Y9Ll'),
        o = n.n(i),
        c = n('5Yy7'),
        s = n.n(c),
        l = n('N+ot'),
        u = n.n(l),
        d = n('AuHH'),
        p = n.n(d),
        f = n('ERkP'),
        h = n('rHpw'),
        m = n('MWbm')
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
            r = p()(e)
          if (t) {
            var a = p()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return u()(this, n)
        }
      }
      var y = (function (e) {
          s()(n, e)
          var t = v(n)
          function n() {
            return a()(this, n), t.apply(this, arguments)
          }
          return (
            o()(n, [
              {
                key: 'shouldComponentUpdate',
                value: function () {
                  return !1
                },
              },
              {
                key: 'render',
                value: function () {
                  return f.createElement(m.a, { style: b.root })
                },
              },
            ]),
            n
          )
        })(f.Component),
        b = h.a.create(function (e) {
          return { root: { height: 5 * e.lineHeightsPx.body } }
        })
      t.a = y
    },
    '5UID': function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        i = n('Y9Ll'),
        o = n.n(i),
        c = n('5Yy7'),
        s = n.n(c),
        l = n('N+ot'),
        u = n.n(l),
        d = n('AuHH'),
        p = n.n(d),
        f = n('ERkP'),
        h = n('3XMw'),
        m = n.n(h),
        v = n('rHpw'),
        y = n('+/1j'),
        b = n('MWbm')
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
            r = p()(e)
          if (t) {
            var a = p()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return u()(this, n)
        }
      }
      var _ = m.a.e5b0063d,
        E = 0,
        O = (function (e) {
          s()(n, e)
          var t = g(n)
          function n() {
            var e
            return a()(this, n), ((e = t.call(this))._listDomId = 'accessible-list-'.concat(E)), (E += 1), e
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    n = e.title,
                    r = _({ title: n })
                  return f.createElement(
                    b.a,
                    { accessibilityLabelledBy: this._listDomId, accessibilityRole: 'region' },
                    f.createElement(
                      y.a,
                      {
                        accessibilityLevel: 1,
                        accessibilityRole: 'heading',
                        nativeID: this._listDomId,
                        style: v.a.visuallyHidden,
                      },
                      n,
                    ),
                    f.createElement(b.a, { accessibilityLabel: r }, t),
                  )
                },
              },
            ]),
            n
          )
        })(f.Component)
      t.a = O
    },
    '64vW': function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        a = r.createContext({ heightsReady: !0 })
      t.a = a
    },
    '883S': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return S
      }),
        n.d(t, 'c', function () {
          return C
        }),
        n.d(t, 'b', function () {
          return w
        })
      var r,
        a = n('KEM+'),
        i = n.n(a),
        o = n('k49u'),
        c = n('3XMw'),
        s = n.n(c),
        l = n('fs1G'),
        u = s.a.c3752568,
        d = s.a.f78aa3e9,
        p = s.a.f9690dc0,
        f = s.a.i859a9d3,
        h = s.a.b1d35407,
        m = s.a.g539cca6,
        v = s.a.bbac0019,
        y = s.a.a1d2a68d,
        b = s.a.d4f2d9d8,
        g = s.a.hf383be4,
        _ = s.a.b25c5b2a,
        E = s.a.c4fdbd16,
        O = s.a.hf3e7e38,
        S = i()({}, o.a.DirectMessageConversationNotFound, {
          customAction: function () {
            return !1
          },
        }),
        C = { defaultToast: { text: d }, showToast: !0 },
        w =
          ((r = { defaultToast: { text: u } }),
          i()(r, o.a.CurrentUserSuspended, {
            toast: { text: m, action: { label: f, link: 'https://support.twitter.com/articles/15790' } },
          }),
          i()(r, o.a.DirectMessageCannotDmOtherUser, { toast: { text: p } }),
          i()(r, o.a.DirectMessageDuplicate, { toast: { text: _ } }),
          i()(r, o.a.DirectMessageOtherUserNotFollowing, {
            toast: { text: y, action: { label: f, link: 'https://support.twitter.com/articles/14606' } },
          }),
          i()(r, o.a.DirectMessagesSenderBlocksRecipient, { toast: { text: E } }),
          i()(r, o.a.DirectMessageTooLongError, { toast: { text: v } }),
          i()(r, o.a.DirectMessageTweetNotFound, { toast: { text: b } }),
          i()(r, o.a.GenericBadRequest, { customAction: l.a }),
          i()(r, o.a.MessageSendError, { toast: { text: O } }),
          i()(r, o.a.OverStatusUpdateLimit, {
            toast: { action: { label: f, link: 'https://support.twitter.com/articles/15364' }, text: h },
          }),
          i()(r, o.a.TargetUserNotFound, { toast: { text: g } }),
          i()(r, 'showToast', !0),
          r)
    },
    '88ay': function (e, t, n) {
      'use strict'
      n.d(t, 'c', function () {
        return ee
      }),
        n.d(t, 'e', function () {
          return te
        }),
        n.d(t, 'f', function () {
          return ne
        }),
        n.d(t, 'd', function () {
          return re
        }),
        n.d(t, 'a', function () {
          return oe
        })
      n('OZaJ'), n('+KXO'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('m3Bd'),
        a = n.n(r),
        i = n('VrFO'),
        o = n.n(i),
        c = n('Y9Ll'),
        s = n.n(c),
        l = n('1Pcy'),
        u = n.n(l),
        d = n('5Yy7'),
        p = n.n(d),
        f = n('N+ot'),
        h = n.n(f),
        m = n('AuHH'),
        v = n.n(m),
        y = n('KEM+'),
        b = n.n(y),
        g = n('97Jx'),
        _ = n.n(g),
        E = (n('1t7P'), n('jQ/y'), n('ho0z'), n('2G9S'), n('hBpG'), n('ERkP')),
        O = n('6rlp'),
        S = n('zh9S'),
        C = n('G6rE'),
        w = n('rxPX'),
        R = n('0KEI'),
        I = function (e, t) {
          return C.e.select(e, t.userId)
        },
        k = function (e, t) {
          return t.promotedContent
        },
        P = Object(w.a)()
          .propsFromState(function () {
            return { promotedContent: k, user: I }
          })
          .adjustStateProps(function (e) {
            var t = e.promotedContent,
              n = e.user
            return { promotedContent: t || (n ? n.promoted_content : void 0), user: n }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(R.createLocalApiErrorHandlerWithContextFactory)('USER_CELL_CONTAINER'),
              log: O.a,
              scribeAction: S.c,
            }
          }),
        x = n('I57f'),
        T = n('vMjK'),
        A = n('MWbm'),
        M = n('IG7M'),
        j = n('rHpw'),
        D = function (e) {
          var t = e.children,
            n = e.promotedContent,
            r = e.user
          return E.createElement(
            A.a,
            { style: L.decorationWrapper },
            t,
            E.createElement(M.a, {
              renderActionMenu: function (e) {
                return E.createElement(T.b, { onClose: e, promotedContent: n, user: r, view: 'follower' })
              },
              style: L.actionMenu,
            }),
          )
        },
        L = j.a.create(function (e) {
          return { decorationWrapper: { flexDirection: 'row' }, actionMenu: { marginLeft: e.spaces.space12 } }
        }),
        F = n('uIZp'),
        B = n('mN6z'),
        N = n('caTy'),
        H = n('3IPs'),
        U = n('Rp9C'),
        V = n('X04g'),
        W = n('Re5t'),
        z = n('TnY3'),
        K = n('hxu0'),
        G = n('v6aA'),
        q = n('7JQg'),
        Y = n('IMA+'),
        X = n('cFuS')
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
      function Z(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Q(Object(n), !0).forEach(function (t) {
                b()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Q(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
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
            r = v()(e)
          if (t) {
            var a = v()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      var $ = function (e) {
        var t = e.user
        return t && t.profile_image_url_https
          ? E.createElement(
              ae,
              _()({}, e, {
                avatarUri: t.profile_image_url_https,
                description: t.description,
                entities: t.entities,
                followRequestReceived: t.follow_request_received,
                highlightedLabel: t.highlightedLabel,
                isAutoblocking: t.smart_blocking,
                isBlockedBy: t.blocked_by,
                isBlocking: t.blocking,
                isDeviceFollowing: t.notifications,
                isFollowedBy: t.followed_by,
                isFollowing: t.following,
                isProtected: t.protected,
                isVerified: t.verified,
                name: t.name,
                screenName: t.screen_name,
                translatorType: t.translator_type,
                user: t,
                withheldDescription: t.withheld_description,
                withheldEntities: t.withheld_entities,
              }),
            )
          : null
      }
      $.defaultProps = {
        cellClickable: !0,
        decoration: null,
        displayMode: W.a.UserCompact,
        followRequestReceived: !1,
        hideBlocked: !1,
        promotedItemType: X.c.USER,
        shouldScribeProfileClick: !0,
        shouldScribeImpression: !1,
        withFollowsYou: !1,
      }
      var ee = function (e) {
          var t = e.isDeviceFollowing,
            n = e.userId
          return E.createElement(x.a, { isFollowing: t, style: ie.followButton, userId: n })
        },
        te = function (e) {
          var t = e.loggedInUserId,
            n = e.promotedContent,
            r = e.userId
          return t !== r
            ? E.createElement(F.a, { promotedContent: n, size: 'small', style: ie.followButton, userId: r })
            : null
        },
        ne = function (e) {
          return E.createElement(D, { promotedContent: e.promotedContent, user: e.user }, te(e))
        },
        re = function (e) {
          return E.createElement(M.a, {
            renderActionMenu: function (t) {
              return E.createElement(T.b, {
                onClose: t,
                promotedContent: e.promotedContent,
                user: e.user,
                view: 'rito_flagged_accounts',
              })
            },
          })
        },
        ae = (function (e) {
          p()(n, e)
          var t = J(n)
          function n() {
            var e
            o()(this, n)
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              b()(u()(e), '_handleAvatarClick', function () {
                var t = e.props.shouldScribeProfileClick
                e._handleSaveAsRecentSearch(),
                  t && e._scribeAction({ element: 'avatar', action: 'profile_click' }),
                  e._handleAsyncPromotedEvent(X.b.PROFILE_IMAGE_CLICK)
              }),
              b()(u()(e), '_handleCellClick', function () {
                var t = e.props,
                  n = t.history,
                  r = t.onClick,
                  a = t.screenName,
                  i = t.user,
                  o = e._getPromotedTweetState()
                e._handleSaveAsRecentSearch(),
                  e._handleScreenNameClick(),
                  r ? r({ user: i, state: o }) : n.push({ pathname: '/'.concat(a), state: o || void 0 })
              }),
              b()(u()(e), '_handleScreenNameClick', function () {
                var t = e.props.shouldScribeProfileClick
                e._handleSaveAsRecentSearch(),
                  t && e._scribeAction({ action: 'profile_click' }),
                  e._handleAsyncPromotedEvent(X.b.SCREEN_NAME_CLICK)
              }),
              b()(u()(e), '_handleSaveAsRecentSearch', function () {
                var t = e.props,
                  n = t.saveAsRecentSearch,
                  r = t.shouldStoreTypeaheadItem,
                  a = t.userId
                n && r && r(V.a.ItemType.USER) && n({ user: { id: a, type: H.a.User } })
              }),
              b()(u()(e), '_scribeAction', function (t) {
                var n,
                  r = e.props,
                  a = r.promotedContent,
                  i = r.scribeAction,
                  o = r.scribeData,
                  c = r.scribeNamespace,
                  s = r.user,
                  l = r.userId,
                  u =
                    null == o || null === (n = o.items) || void 0 === n
                      ? void 0
                      : n.find(function (e) {
                          return e.item_type === V.a.ItemType.USER && e.id === l
                        }),
                  d = o.search_details,
                  p = { items: [Z(Z({}, u), U.a.getUserItem(s, a))], profile_id: l, search_details: d }
                i(Z(Z({}, c), t), p)
              }),
              e
            )
          }
          return (
            s()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._shouldRender() && this._handleImpression()
                },
              },
              {
                key: 'shouldComponentUpdate',
                value: function (e) {
                  return !Object(B.a)(this.props, e)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.avatarDecoration,
                    n = (e.bottomControl, e.cellClickable),
                    r =
                      (e.createLocalApiErrorHandler,
                      e.decoration,
                      e.followRequestReceived,
                      e.hideBlocked,
                      e.history,
                      e.isAutoblocking,
                      e.isBlockedBy,
                      e.isBlocking,
                      e.isDeviceFollowing,
                      e.isFollowing,
                      e.isInSidebar),
                    i =
                      (e.location,
                      e.log,
                      e.onClick,
                      e.promotedItemId,
                      e.saveAsRecentSearch,
                      e.scribeAction,
                      e.scribeData,
                      e.scribeNamespace,
                      e.shouldScribeImpression,
                      e.shouldScribeProfileClick,
                      e.shouldStoreTypeaheadItem,
                      e.socialContext),
                    o = e.user,
                    c = a()(e, [
                      'avatarDecoration',
                      'bottomControl',
                      'cellClickable',
                      'createLocalApiErrorHandler',
                      'decoration',
                      'followRequestReceived',
                      'hideBlocked',
                      'history',
                      'isAutoblocking',
                      'isBlockedBy',
                      'isBlocking',
                      'isDeviceFollowing',
                      'isFollowing',
                      'isInSidebar',
                      'location',
                      'log',
                      'onClick',
                      'promotedItemId',
                      'saveAsRecentSearch',
                      'scribeAction',
                      'scribeData',
                      'scribeNamespace',
                      'shouldScribeImpression',
                      'shouldScribeProfileClick',
                      'shouldStoreTypeaheadItem',
                      'socialContext',
                      'user',
                    ])
                  return this._shouldRender()
                    ? E.createElement(
                        Y.a,
                        _()({}, c, {
                          avatarDecoration: t,
                          bottomControl: this._renderBottomControl(),
                          decoration: this._renderDecoration(),
                          highlightedLabel: this._getHighlightedLabel(),
                          isBlocking: o.blocking,
                          onAvatarClick: this._handleAvatarClick,
                          onCellClick: n ? this._handleCellClick : void 0,
                          onScreenNameClick: this._handleScreenNameClick,
                          socialContext: i
                            ? {
                                contextType: i.contextType,
                                text: i.text,
                                link: i.landingUrl ? Object(N.b)(i.landingUrl) : void 0,
                              }
                            : void 0,
                          withDarkerInteractiveBackground: r,
                        }),
                      )
                    : null
                },
              },
              {
                key: '_renderBottomControl',
                value: function () {
                  return this._renderControl(this.props.bottomControl || null)
                },
              },
              {
                key: '_renderDecoration',
                value: function () {
                  return this._renderControl(this.props.decoration)
                },
              },
              {
                key: '_renderControl',
                value: function (e) {
                  var t = this.context.loggedInUserId,
                    n = this.props,
                    r = n.displayMode,
                    a = n.followRequestReceived,
                    i = n.isAutoblocking,
                    o = n.isBlocking,
                    c = n.isDeviceFollowing,
                    s = n.isFollowing,
                    l = n.promotedContent,
                    u = n.screenName,
                    d = n.user,
                    p = n.userId
                  return 'function' == typeof e
                    ? e({
                        displayMode: r,
                        followRequestReceived: a,
                        isAutoblocking: i,
                        isBlocking: o,
                        isDeviceFollowing: !!c,
                        isFollowing: !!s,
                        loggedInUserId: t,
                        promotedContent: l,
                        screenName: u,
                        user: d,
                        userId: p,
                      })
                    : e
                },
              },
              {
                key: '_shouldRender',
                value: function () {
                  var e = this.props,
                    t = e.hideBlocked,
                    n = e.isBlockedBy,
                    r = e.isBlocking,
                    a = e.screenName
                  return e.userId && a && !(t && (n || r))
                },
              },
              {
                key: '_getHighlightedLabel',
                value: function () {
                  var e = this.props.user.highlightedLabel,
                    t = 'AutomatedLabel' === (null == e ? void 0 : e.userLabelType),
                    n = !!t && this.context.featureSwitches.isTrue('account_taxonomy_automated_label_enabled')
                  return !t || n ? e : void 0
                },
              },
              {
                key: '_getPromotedTweetState',
                value: function () {
                  var e = this.props,
                    t = e.promotedContent,
                    n = e.promotedItemType
                  return t && n === X.c.TWEET ? { promotedTweetState: t } : null
                },
              },
              {
                key: '_handleAsyncPromotedEvent',
                value: function (e) {
                  var t = this.props,
                    n = t.createLocalApiErrorHandler,
                    r = t.log,
                    a = t.promotedContent,
                    i = t.promotedItemId,
                    o = t.promotedItemType,
                    c = t.userId
                  a &&
                    r({
                      disclosureType: a.disclosure_type,
                      itemId: i || c,
                      itemType: o,
                      params: { event: e, impression_id: a.impression_id },
                    }).catch(n())
                },
              },
              {
                key: '_handleImpression',
                value: function () {
                  var e = this.props,
                    t = e.createLocalApiErrorHandler,
                    n = e.log,
                    r = e.promotedContent,
                    a = e.promotedItemType,
                    i = e.shouldScribeImpression,
                    o = e.userId
                  if (r && a === X.c.USER) {
                    var c = r.disclosure_type,
                      s = r.impression_id
                    n({
                      disclosureType: c,
                      itemId: o,
                      itemType: X.c.USER,
                      params: { event: X.b.IMPRESSION, impression_id: s },
                    }).catch(t())
                  } else i && this._scribeAction({ action: 'impression' })
                },
              },
            ]),
            n
          )
        })(E.Component)
      b()(ae, 'contextType', G.a), b()(ae, 'defaultProps', $.defaultProps)
      var ie = j.a.create(function (e) {
          return { followButton: { marginLeft: e.spaces.space12 } }
        }),
        oe = Object(z.a)(Object(K.a)(P($)))
      t.b = Object(q.c)({ element: 'user' })(oe)
    },
    '89tF': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      })
      n('jwue'), n('+oxZ'), n('+KXO'), n('yH/f')
      function r(e) {
        var t = {}
        return (
          Object.keys(e).forEach(function (e) {
            t[e] = e
          }),
          Object.freeze(t)
        )
      }
    },
    '8W85': function (e, t, n) {
      'use strict'
      n('JtPf'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('ERkP')
      var r = n('zb92')
      t.a = Object(r.a)({
        loader: function () {
          return Promise.all([n.e(22), n.e(163)])
            .then(n.bind(null, 'u2Vg'))
            .then(function (e) {
              return { default: e.__DANGEROUS_IMPORT__ }
            })
        },
      })
    },
    '9SqB': function (e, t, n) {
      'use strict'
      var r = n('IGGJ')(n('yiKp')),
        a = n('ERkP'),
        i = n('Ud88'),
        o = n('K1lQ').commitMutation,
        c = a.useState,
        s = a.useEffect,
        l = a.useRef,
        u = a.useCallback,
        d = n('23An')
      e.exports = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o,
          n = i(),
          a = d(),
          p = l(n),
          f = l(e),
          h = l(new Set()),
          m = c(!1),
          v = m[0],
          y = m[1],
          b = u(
            function (t) {
              p.current === n && f.current === e && (h.current.delete(t), a.current && y(h.current.size > 0))
            },
            [n, a, e],
          )
        s(
          function () {
            ;(p.current === n && f.current === e) ||
              ((h.current = new Set()), a.current && y(!1), (p.current = n), (f.current = e))
          },
          [n, a, e],
        )
        var g = u(
          function (i) {
            var o = t(
              n,
              (0, r.default)(
                (0, r.default)({}, i),
                {},
                {
                  mutation: e,
                  onCompleted: function (e, t) {
                    b(o), i.onCompleted && i.onCompleted(e, t)
                  },
                  onError: function (e) {
                    b(o), i.onError && i.onError(e)
                  },
                  onUnsubscribe: function () {
                    b(o), i.onUnsubscribe && i.onUnsubscribe()
                  },
                },
              ),
            )
            return h.current.add(o), a.current && y(!0), o
          },
          [b, t, n, a, e],
        )
        return [g, v]
      }
    },
    'A/tJ': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'DMConversationCreator', function () {
          return b
        })
      n('JtPf'), n('7x/C'), n('MvUL'), n('KqXw')
      var r = n('ERkP'),
        a = (n('WNMA'), n('RqPI')),
        i = n('3nOA'),
        o = n('rxPX'),
        c = n('0KEI'),
        s = n('G6rE'),
        l = function (e, t) {
          return t.match.params.screenName
        },
        u = function (e, t) {
          var n = a.q(e),
            r = (function (e, t) {
              var n = l(0, t)
              return n ? s.e.selectIdByScreenName(e, n) : null
            })(e, t)
          return n && r ? Object(i.a)(n, r) : null
        },
        d = Object(o.a)()
          .propsFromState(function () {
            return { screenName: l, conversationId: u }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(c.createLocalApiErrorHandlerWithContextFactory)('CREATE_CONVERSATION'),
              fetchOneByScreenNameWithExtraFieldsIfNeeded: s.e.createFetchOneByScreenNameWithExtraFieldsIfNeeded([
                s.a,
                s.d,
              ]),
            }
          }),
        p = n('GOQE'),
        f = n('kGix'),
        h = n('v//M'),
        m = n('tI3i'),
        v = n.n(m),
        y = n('5FtR'),
        b = function (e) {
          var t = e.conversationId,
            n = e.createLocalApiErrorHandler,
            a = e.fetchOneByScreenNameWithExtraFieldsIfNeeded,
            i = e.history,
            o = e.screenName
          return (
            r.useEffect(
              function () {
                Promise.resolve()
                  .then(function () {
                    return v()(!!o, 'screenName must be defined'), a(o)
                  })
                  .catch(function (e) {
                    n(p.a)(e), i.replace('/messages')
                  })
              },
              [o, a, n, i],
            ),
            r.createElement(
              r.Fragment,
              null,
              t && r.createElement(y.a, { to: '/messages/'.concat(t) }),
              r.createElement(h.a, {
                fetchStatus: f.a.LOADING,
                render: function () {
                  return null
                },
              }),
            )
          )
        },
        g = d(b)
      t.default = g
    },
    AQOc: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return h
      }),
        n.d(t, 'a', function () {
          return m
        })
      n('+KXO'), n('1t7P'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        i = n('m3Bd'),
        o = n.n(i),
        c = (n('z84I'), n('KOtZ'), n('7x/C'), n('lTEL'), n('kYxP'), n('LW0h'), n('lnti')),
        s = n('aWyx')
      function l(e, t) {
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
            ? l(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var d = { entries: {}, entryIdsByConversationId: {}, reactionsByMessageId: {} },
        p = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          return e.reduce(function (e, n) {
            var r = n.user_id,
              a = t[r] || { id_str: r }
            return (e[r] = u(u({}, n), {}, { user: a })), e
          }, {})
        }
      function f(e, t) {
        var n = t.entries
        return (t.entryIdsByConversationId[e] || [])
          .map(function (e) {
            return n[e] && n[e].data
          })
          .filter(Boolean)
      }
      var h = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d,
            n = arguments.length > 2 ? arguments[2] : void 0,
            r = e.conversation_id,
            a = e.participants,
            i = o()(e, ['conversation_id', 'participants'])
          return u(
            u({ conversation_id: r }, i),
            {},
            { entries: t.entryIdsByConversationId[r] || [], participants: p(a, n) },
          )
        },
        m = function (e, t, n) {
          var r = e.conversation_id,
            a = e.participants,
            i = e.social_proof,
            l = u(
              u({ conversation_id: r }, o()(e, ['conversation_id', 'participants', 'social_proof'])),
              {},
              { entries: f(r, t), participants: p(a, n), social_proof: void 0 },
            )
          return (
            i &&
              (l.social_proof = (function () {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).map(function (t) {
                  if (t.proof_type === s.d.MUTUAL_FRIENDS) {
                    var n = t.users
                    return u(
                      u({}, o()(t, ['users'])),
                      {},
                      {
                        users: Object(c.a)(
                          n.map(function (t) {
                            return e[t]
                          }),
                        ),
                      },
                    )
                  }
                  return t
                })
              })(i, n)),
            l
          )
        }
    },
    Avzu: function (e, t, n) {
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
              d: 'M23.25 3.25h-2.425V.825c0-.414-.336-.75-.75-.75s-.75.336-.75.75V3.25H16.9c-.414 0-.75.336-.75.75s.336.75.75.75h2.425v2.425c0 .414.336.75.75.75s.75-.336.75-.75V4.75h2.425c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm-3.175 6.876c-.414 0-.75.336-.75.75v8.078c0 .414-.337.75-.75.75H4.095c-.412 0-.75-.336-.75-.75V8.298l6.778 4.518c.368.246.79.37 1.213.37.422 0 .844-.124 1.212-.37l4.53-3.013c.336-.223.428-.676.204-1.012-.223-.332-.675-.425-1.012-.2l-4.53 3.014c-.246.162-.563.163-.808 0l-7.586-5.06V5.5c0-.414.337-.75.75-.75h9.094c.414 0 .75-.336.75-.75s-.336-.75-.75-.75H4.096c-1.24 0-2.25 1.01-2.25 2.25v13.455c0 1.24 1.01 2.25 2.25 2.25h14.48c1.24 0 2.25-1.01 2.25-2.25v-8.078c0-.415-.337-.75-.75-.75z',
            }),
          ),
        )
      }
      ;(u.metadata = { width: 24, height: 24 }), (t.a = u)
    },
    BUB3: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        i = n('m3Bd'),
        o = n.n(i),
        c = n('ERkP'),
        s = n('sNn6'),
        l = n('rHpw'),
        u = n('MWbm')
      function d(e, t) {
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
      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? d(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : d(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var f = l.a.create(function (e) {
        return {
          activeRoot: { backgroundColor: e.colors.gray0 },
          overlay: p(
            p({}, l.a.absoluteFillObject),
            {},
            {
              borderRightStyle: 'solid',
              borderRightWidth: e.borderWidths.medium,
              borderRightColor: e.colors.primary,
              zIndex: 1,
            },
          ),
        }
      })
      t.a = function (e) {
        var t = e.children,
          n = o()(e, ['children'])
        return c.createElement(s.a, n, function (e) {
          return c.createElement(
            u.a,
            { style: e && f.activeRoot },
            'function' == typeof t ? t(e) : t,
            e ? c.createElement(u.a, { pointerEvents: 'none', style: f.overlay }) : null,
          )
        })
      }
    },
    CFcj: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'ConversationGroupInfoScreen', function () {
          return ne
        })
      n('OZaJ')
      var r = n('ddV6'),
        a = n.n(r),
        i = n('VrFO'),
        o = n.n(i),
        c = n('Y9Ll'),
        s = n.n(c),
        l = n('1Pcy'),
        u = n.n(l),
        d = n('5Yy7'),
        p = n.n(d),
        f = n('N+ot'),
        h = n.n(f),
        m = n('AuHH'),
        v = n.n(m),
        y = n('KEM+'),
        b = n.n(y),
        g = (n('JtPf'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('ERkP')),
        _ = n('LCtV'),
        E = (n('WNMA'), n('KqXw'), n('MMRb')),
        O = n('AspN'),
        S = n('RqPI'),
        C = n('hqKg'),
        w = n('p9G8'),
        R = n('AQOc'),
        I = n('/NU0'),
        k = n('G6rE'),
        P = n('0KEI'),
        x = n('oEGd'),
        T = function (e, t) {
          return t.match.params.conversationId
        },
        A = Object(C.createSelector)(
          function (e, t) {
            return E.selectConversation(e, T(0, t))
          },
          E.selectEntries,
          T,
          function (e, t) {
            return E.selectConversationFetchStatus(e, T(0, t))
          },
          S.q,
          k.e.selectAll,
          function (e, t) {
            var n = E.selectConversationAvatarMediaId(e, T(0, t)),
              r = Object(I.a)(n) ? O.k(e, n) : []
            return a()(r, 1)[0]
          },
          function (e, t) {
            return E.selectConversationAvatarMediaIsUploading(e, T(0, t))
          },
          function (e, t) {
            return E.selectConversationAvatarMediaUploadProgress(e, T(0, t))
          },
          function (e, t, n, r, a, i, o, c, s) {
            var l = e && e.data,
              u = l && Object(R.b)(l, t, i),
              d = u && Object(w.a)(u, a)
            if (!a) throw new Error('logged-in user not found')
            return {
              avatarMedia: o,
              conversation: u,
              conversationId: n,
              fetchStatus: r,
              isUploading: c,
              groupName: d,
              mediaUploadProgress: s,
              perspective: a,
            }
          },
        ),
        M = {
          addAvatarMedia: E.addAvatarMedia,
          createLocalApiErrorHandler: Object(P.createLocalApiErrorHandlerWithContextFactory)(
            'CONVERSATION_GROUP_INFO_SCREEN',
          ),
          fetchConversation: E.fetchConversation,
          fetchConversationIfNeeded: E.fetchConversationIfNeeded,
          removeAvatarMedia: E.removeAvatarMedia,
          removeMediaUpload: O.i,
          setConversationAvatar: E.setConversationAvatar,
          updateConversationName: E.updateConversationName,
        },
        j = Object(x.g)(A, M),
        D = n('I2k/'),
        L = n('aA19'),
        F = n('v//M'),
        B = n('jHSc'),
        N = n('3XMw'),
        H = n.n(N),
        U = n('mN6z'),
        V = n('P68U'),
        W = n('eyty'),
        z = n('MWbm'),
        K = n('mw9i'),
        G = n('/yvb'),
        q = n('JYMr'),
        Y = n('p+r5'),
        X = n('rHpw'),
        Q = n('7JQg')
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
            var a = v()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      var J = H.a.abd845fd,
        $ = H.a.d87bff5a,
        ee = H.a.i2209530,
        te = H.a.cabb453d,
        ne = (function (e) {
          p()(n, e)
          var t = Z(n)
          function n(e, r) {
            var i
            return (
              o()(this, n),
              (i = t.call(this, e, r)),
              b()(u()(i), '_renderContent', function () {
                return g.createElement(z.a, null, i._renderGroupAvatarPicker(), i._renderGroupNameEditor())
              }),
              b()(u()(i), '_handleFetch', function () {
                var e = i.props,
                  t = e.conversationId,
                  n = e.createLocalApiErrorHandler
                ;(0, e.fetchConversationIfNeeded)({ conversationId: t }).catch(n(Object(D.a)(t)))
              }),
              b()(u()(i), '_handleGroupNameUpdated', function (e) {
                i.setState({ groupNameEdit: e.target.value })
              }),
              b()(u()(i), '_handleSavePress', function () {
                i._savePress()
              }),
              b()(u()(i), '_savePress', function () {
                var e = i.props,
                  t = e.avatarMedia,
                  n = e.conversationId,
                  r = e.createLocalApiErrorHandler,
                  a = e.fetchConversation,
                  o = e.groupName,
                  c = e.history,
                  s = e.setConversationAvatar,
                  l = e.updateConversationName,
                  u = i.state.groupNameEdit,
                  d = []
                return (
                  t && d.push(s(n).catch(r())),
                  u && o !== u && d.push(l({ conversationId: n, name: u }).catch(r({ showToast: !0 }))),
                  Promise.all(d).then(
                    function () {
                      a({ conversationId: n }).catch(r(Object(D.a)(n))),
                        c.goBack({ backLocation: '/messages/'.concat(n, '/info'), shouldReplaceOnFallback: !0 })
                    },
                    function () {
                      return t && i._clearAvatarMedia(t.id)
                    },
                  )
                )
              }),
              b()(u()(i), '_handleAvatarMediaChange', function (e) {
                var t = a()(e, 1)[0],
                  n = i.props,
                  r = n.addAvatarMedia,
                  o = n.avatarMedia,
                  c = n.conversationId
                o && i._clearAvatarMedia(o.id), r(c, t)
              }),
              b()(u()(i), '_handleMediaFailure', function (e) {
                i._clearAvatarMedia(e)
              }),
              (i.state = { groupNameEdit: e.groupName }),
              i
            )
          }
          return (
            s()(
              n,
              [
                {
                  key: 'componentDidMount',
                  value: function () {
                    this._handleFetch()
                  },
                },
                {
                  key: 'componentWillUnmount',
                  value: function () {
                    var e = this.props.avatarMedia
                    e && this._clearAvatarMedia(e.id)
                  },
                },
                {
                  key: 'shouldComponentUpdate',
                  value: function (e, t) {
                    return !Object(U.a)(e, this.props) || !Object(U.a)(t, this.state)
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var e = this.props,
                      t = e.conversationId,
                      n = e.fetchStatus,
                      r = e.history
                    return g.createElement(
                      B.b,
                      {
                        backLocation: '/messages/'.concat(t, '/info'),
                        history: r,
                        rightControl: this._renderRightControl(),
                        title: J,
                      },
                      g.createElement(
                        K.a,
                        { style: re.root },
                        g.createElement(F.a, {
                          accessibilityLabel: $,
                          fetchStatus: n,
                          onRequestRetry: this._handleFetch,
                          render: this._renderContent,
                        }),
                      ),
                    )
                  },
                },
                {
                  key: '_renderRightControl',
                  value: function () {
                    var e = this.props,
                      t = e.avatarMedia,
                      n = e.groupName,
                      r = e.isUploading,
                      a = this.state.groupNameEdit,
                      i = r || !((a && a !== n) || t)
                    return g.createElement(G.a, {
                      children: ee,
                      disabled: i,
                      onPress: this._handleSavePress,
                      size: 'small',
                      type: 'primaryFilled',
                    })
                  },
                },
                {
                  key: '_renderGroupAvatarPicker',
                  value: function () {
                    var e = this.props,
                      t = e.avatarMedia,
                      n = e.conversation,
                      r = e.mediaUploadProgress,
                      a = e.perspective,
                      i = g.createElement(L.a, { conversation: n, perspective: a })
                    return g.createElement(
                      z.a,
                      null,
                      g.createElement(q.a, { progress: r }),
                      g.createElement(
                        z.a,
                        { style: re.avatarContainerRoot },
                        g.createElement(V.default, {
                          borderRadius: _.a.INFINITE,
                          currentContent: i,
                          location: W.d.Avatar,
                          mediaItem: t || void 0,
                          onChange: this._handleAvatarMediaChange,
                          onFailure: this._handleMediaFailure,
                          rootStyle: re.avatarContainer,
                        }),
                      ),
                    )
                  },
                },
                {
                  key: '_renderGroupNameEditor',
                  value: function () {
                    return g.createElement(Y.a, {
                      label: te,
                      maxLength: 50,
                      name: 'groupNameEdit',
                      onChange: this._handleGroupNameUpdated,
                      style: re.groupNameEditor,
                      value: this.state.groupNameEdit || '',
                    })
                  },
                },
                {
                  key: '_clearAvatarMedia',
                  value: function (e) {
                    var t = this.props,
                      n = t.avatarMedia,
                      r = t.conversationId,
                      a = t.removeAvatarMedia,
                      i = t.removeMediaUpload
                    ;(n && n.uploading) || i(e), a(r, e)
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromProps',
                  value: function (e, t) {
                    var n = e.groupName
                    return 'string' == typeof n && null === t.groupNameEdit ? { groupNameEdit: n } : null
                  },
                },
              ],
            ),
            n
          )
        })(g.Component),
        re = X.a.create(function (e) {
          return {
            root: { backgroundColor: e.colors.gray0 },
            avatarContainerRoot: {
              alignItems: 'center',
              backgroundColor: e.colors.cellBackground,
              paddingVertical: e.spaces.space20,
            },
            groupNameEditor: { backgroundColor: e.colors.cellBackground },
            avatarContainer: {
              height: 'calc(5 * '.concat(e.spaces.space20, ')'),
              width: 'calc(5 * '.concat(e.spaces.space20, ')'),
            },
          }
        })
      t.default = Object(Q.c)({ page: 'messages', section: 'group_settings' })(j(ne))
    },
    EPsT: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return E
      })
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
        y = n('ERkP'),
        b = n('jtO7'),
        g = n('eb3s')
      function _(e) {
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
      var E = (function (e) {
        u()(n, e)
        var t = _(n)
        function n(e) {
          var r
          return (
            a()(this, n),
            (r = t.call(this, e)),
            v()(s()(r), '_handleClick', function (e) {
              r.setState({ showConfirmation: !0 })
            }),
            v()(s()(r), '_handleCancel', function () {
              r.setState({ showConfirmation: !1 })
            }),
            v()(s()(r), '_handleConfirm', function () {
              r.setState({ showConfirmation: !1 }), r.props.onConfirmationSheetConfirm()
            }),
            (r.state = { showConfirmation: !1 }),
            r
          )
        }
        return (
          o()(n, [
            {
              key: 'render',
              value: function () {
                var e = this.props,
                  t = e.align,
                  n = e.color,
                  r = e.confirmationSheetConfirmButtonLabel,
                  a = e.confirmationSheetConfirmButtonType,
                  i = e.confirmationSheetHeadline,
                  o = e.confirmationSheetText,
                  c = e.label
                return y.createElement(
                  y.Fragment,
                  null,
                  y.createElement(b.a, { align: t, color: n, label: c, onPress: this._handleClick }),
                  this.state.showConfirmation
                    ? y.createElement(g.a, {
                        confirmButtonLabel: r,
                        confirmButtonType: a,
                        headline: i,
                        onCancel: this._handleCancel,
                        onConfirm: this._handleConfirm,
                        text: o,
                      })
                    : null,
                )
              },
            },
          ]),
          n
        )
      })(y.Component)
      v()(E, 'defaultProps', { color: 'red500', align: 'center' })
    },
    FS1z: function (e, t, n) {
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
        y = (n('2G9S'), n('ERkP')),
        b = n('rxPX'),
        g = n('0KEI'),
        _ = function (e, t) {
          return t.module.selectFetchStatus(e)
        },
        E = function (e, t) {
          return t.module.selectItems(e)
        },
        O = Object(b.a)()
          .propsFromState(function (e) {
            return { fetchStatus: _, items: E }
          })
          .propsFromActions(function (e) {
            var t = e.module
            return {
              createLocalApiErrorHandler: Object(g.createLocalApiErrorHandlerWithContextFactory)('SLICES_TIMELINE'),
              fetch: t.fetch,
              fetchIfNeeded: t.fetchIfNeeded,
              fetchBottom: t.fetchBottom,
            }
          }),
        S = n('v//M'),
        C = n('sIe2'),
        w = n('3XMw'),
        R = n.n(w),
        I = n('TEoO')
      function k(e) {
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
      var P = R.a.i9028824,
        x = 'sliceTimeline',
        T = function (e) {
          return e
        },
        A = { viewType: 'timeline' },
        M = (function (e) {
          u()(n, e)
          var t = k(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              v()(s()(e), '_render', function () {
                var t = e.props,
                  n = t.footer,
                  r = t.items,
                  a = t.noItemsRenderer,
                  i = t.numColumns,
                  o = t.onScrollEnd,
                  c = t.renderer,
                  s = t.withoutHeadroom
                return !r || i < 1
                  ? null
                  : 1 === i
                  ? y.createElement(I.a, {
                      cacheKey: x,
                      footer: n,
                      identityFunction: T,
                      items: r,
                      noItemsRenderer: a,
                      onNearEnd: e._handleNearEnd,
                      onScrollEnd: o,
                      renderer: c,
                      withoutHeadroom: s,
                    })
                  : y.createElement(C.a, {
                      ListEmptyComponent: a,
                      data: r,
                      keyExtractor: T,
                      numColumns: i,
                      renderItem: c,
                    })
              }),
              v()(s()(e), '_handleNearEnd', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchBottom)().catch(n())
              }),
              v()(s()(e), '_handleFetch', function () {
                var t = e.props,
                  n = t.alwaysFetch,
                  r = t.createLocalApiErrorHandler,
                  a = t.fetch,
                  i = t.fetchIfNeeded
                ;(n ? a : i)().catch(r())
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._handleFetch()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t = this.props.module
                  e.module !== t && this._handleFetch()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    n = e.module,
                    r = e.retryMessage
                  return n
                    ? y.createElement(S.a, {
                        accessibilityLabel: P,
                        behavioralEventContext: A,
                        fetchStatus: t,
                        onRequestRetry: this._handleFetch,
                        render: this._render,
                        retryMessage: r,
                        retryable: !0,
                      })
                    : null
                },
              },
            ]),
            n
          )
        })(y.Component)
      v()(M, 'defaultProps', { numColumns: 1, alwaysFetch: !1 })
      var j = O(M)
      t.a = j
    },
    GSsg: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return s
      })
      var r = n('VrFO'),
        a = n.n(r),
        i = n('Y9Ll'),
        o = n.n(i),
        c = (n('yH/f'), n('B5iK')),
        s = (function () {
          function e(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.freeze({})
            a()(this, e)
            var r = n.interval,
              i = void 0 === r ? 6e4 : r,
              o = n.burstInterval,
              s = void 0 === o ? 3e3 : o,
              l = n.burstDuration,
              u = void 0 === l ? 3e5 : l
            ;(this.pollTimer = new c.b(i).interval(t)), (this.burstTimer = new c.a(this.pollTimer, s, u))
          }
          return (
            o()(e, [
              {
                key: 'start',
                value: function (e) {
                  return this.pollTimer.start(), e && this.burstTimer.requestBurst(), this
                },
              },
              {
                key: 'stop',
                value: function () {
                  return this.burstTimer.stopBurst(), this.pollTimer.stop(), this
                },
              },
              {
                key: 'restart',
                value: function () {
                  return this.stop(), this.start(), this
                },
              },
            ]),
            e
          )
        })()
    },
    H4nC: function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        a = n('3XMw'),
        i = n.n(a),
        o = n('MWbm'),
        c = n('rHpw'),
        s = n('t62R'),
        l = c.a.create(function (e) {
          return { root: { paddingBottom: e.spaces.space20 } }
        }),
        u = i.a.d84b485d,
        d = i.a.be0c83d7
      t.a = function (e) {
        var t = e.entry,
          n = e.isCompact,
          a = 'follow' === t.reason ? u : d
        return n
          ? r.createElement(s.b, { color: 'gray700' }, a)
          : r.createElement(
              o.a,
              { style: l.root },
              r.createElement(s.b, { align: 'center', color: 'gray700', size: 'subtext2' }, a),
            )
      }
    },
    'I2k/': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return s
      })
      var r = n('KEM+'),
        a = n.n(r),
        i = n('k49u'),
        o = n('lRnM'),
        c = n('LVU8'),
        s = function (e) {
          return a()({}, i.a.ClientNotPermitted, {
            customAction: function () {
              return Object(c.d)('/messages/', { statusCode: 401 }), Object(o.t)(e)
            },
          })
        }
    },
    J2UM: function (e, t, n) {
      'use strict'
      var r = n('0JOx')
      t.a = function () {
        return Object(r.h)().then(function (e) {
          return e.inputDetect
        })
      }
    },
    JD1h: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return s
      }),
        n.d(t, 'b', function () {
          return d
        })
      var r = n('VrFO'),
        a = n.n(r),
        i = n('Y9Ll'),
        o = n.n(i),
        c =
          (n('yH/f'),
          n('z84I'),
          n('jwue'),
          n('+oxZ'),
          Object.freeze({ MOVEMENT: 'movement', LIST_UPDATE: 'list_update', INITIAL_POSITION: 'initial_position' })),
        s = {
          nearTop: function (e) {
            return function (t, n) {
              return n.getTop() - t.getTop() <= e
            }
          },
          nearBottom: function (e) {
            return function (t, n) {
              return t.getBottom() - n.getBottom() <= e
            }
          },
          nearTopRatio: function (e) {
            return function (t, n) {
              var r = n.getHeight() * e
              return n.getTop() - t.getTop() <= r
            }
          },
          nearBottomRatio: function (e) {
            return function (t, n) {
              var r = n.getHeight() * e
              return t.getBottom() - n.getBottom() <= r
            }
          },
        },
        l = Object.freeze({ INSIDE: 'inside', OUTSIDE: 'outside' }),
        u = function (e, t, n, r) {
          return (function (e, t) {
            return !e && t === l.INSIDE
          })(e, n)
            ? c.INITIAL_POSITION
            : (function (e, t) {
                return e === l.OUTSIDE && t === l.INSIDE
              })(e, n)
            ? c.MOVEMENT
            : (function (e, t) {
                return e === l.INSIDE && t === l.INSIDE
              })(e, n) && r !== t
            ? c.LIST_UPDATE
            : null
        },
        d = (function () {
          function e(t) {
            a()(this, e),
              (this._handlers = t.map(function (e) {
                return { zone: e, state: {} }
              }))
          }
          return (
            o()(e, [
              {
                key: 'handlePositioningUpdate',
                value: function (e) {
                  this._handlers.forEach(function (t) {
                    var n = t.state,
                      r = t.zone,
                      a = r.callback,
                      i = r.condition,
                      o = n.listLength,
                      c = n.proximity,
                      s = (function (e, t) {
                        return e(t.getForList(), t.getForViewport()) ? l.INSIDE : l.OUTSIDE
                      })(i, e),
                      d = e.getListLength(),
                      p = u(c, o, s, d)
                    ;(n.proximity = s), (n.listLength = d), p && a({ triggerCause: p })
                  })
                },
              },
            ]),
            e
          )
        })()
    },
    Lz2T: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('97Jx'),
        a = n.n(r),
        i = n('KEM+'),
        o = n.n(i),
        c = n('m3Bd'),
        s = n.n(c),
        l = n('ERkP'),
        u = n('PnKw'),
        d = n('vYiB'),
        p = n('X3+4'),
        f = n('rcen'),
        h = n('k89r')
      function m(e, t) {
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
      function v(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? m(Object(n), !0).forEach(function (t) {
                o()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : m(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function y(e) {
        var t = e.bodyRichText,
          n = e.bodyText,
          r = e.onImpression,
          i = e.primaryAction,
          o = e.titleRichText,
          c = e.titleText,
          m = s()(e, ['bodyRichText', 'bodyText', 'onImpression', 'primaryAction', 'titleRichText', 'titleText']),
          y = Object(h.a)(),
          b = function () {
            y.scribe({ action: 'click' })
          },
          g = o
            ? l.createElement(f.a, { entities: o.entities, onEntityClick: b, text: o.text })
            : c && c.length
            ? c
            : null,
          _ = t
            ? l.createElement(f.a, { entities: t.entities, onEntityClick: b, text: t.text })
            : n && n.length
            ? n
            : null,
          E = function (e) {
            return v(
              v({}, i),
              {},
              {
                onClick: function (t) {
                  ;(null == i ? void 0 : i.onClick) && i.onClick(t), e(t)
                },
              },
            )
          },
          O = l.createElement(p.a.Consumer, null, function (e) {
            var t = e.handleNextSlide
            return l.createElement(u.a, a()({}, m, { headline: g, primaryAction: i ? E(t) : void 0, subtext: _ }))
          })
        return 'function' == typeof r ? l.createElement(d.a, { onImpression: r }, O) : O
      }
      ;(y.defaultProps = { shouldRenderBorder: !1 }), (t.a = y)
    },
    M2mT: function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('m3Bd'),
        a = n.n(r),
        i = n('VrFO'),
        o = n.n(i),
        c = n('Y9Ll'),
        s = n.n(c),
        l = n('1Pcy'),
        u = n.n(l),
        d = n('5Yy7'),
        p = n.n(d),
        f = n('N+ot'),
        h = n.n(f),
        m = n('AuHH'),
        v = n.n(m),
        y = n('KEM+'),
        b = n.n(y),
        g = (n('2G9S'), n('i4UL'), n('+/5o')),
        _ = n('ERkP'),
        E = n('HPNB'),
        O = n('v6aA'),
        S = n('VAZu'),
        C = n('wiP2'),
        w = n('Es6L'),
        R = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('rHpw'))
      function I(e, t) {
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
      function k(e) {
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
      var P = R.a.create(function (e) {
          return {
            fill: { flex: 1, alignSelf: 'stretch' },
            viewportView: k(k({}, R.a.absoluteFillObject), {}, { overflowY: 'auto' }),
            appBarContainer: { position: 'sticky', top: 0 },
            appBarZindex: { backfaceVisibility: 'hidden', zIndex: e.componentZIndices.appBarZIndex },
          }
        }),
        x = n('MWbm'),
        T = n('yw4N'),
        A = n('TnY3'),
        M = n('cHvH'),
        j = n('3xLC')
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
            r = v()(e)
          if (t) {
            var a = v()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      var L = (function (e) {
        p()(n, e)
        var t = D(n)
        function n() {
          var e
          o()(this, n)
          for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i]
          return (
            (e = t.call.apply(t, [this].concat(a))),
            b()(u()(e), '_renderChildren', function (t) {
              var n = e.props.children
              return e.context.rootDetailPerColumnScroll
                ? _.createElement(
                    x.a,
                    { style: P.fill },
                    _.createElement(
                      T.a,
                      { style: P.viewportView },
                      t ? e._renderInlineNav({ isTwoColumnLayout: !0, appBarScrollEnabled: !0 }) : null,
                      n,
                    ),
                  )
                : n
            }),
            e
          )
        }
        return (
          s()(n, [
            {
              key: 'render',
              value: function () {
                var e = this
                return _.createElement(M.a, null, function (t) {
                  var n = t.windowWidth
                  return E.a.isTwoColumnLayout(n) ? e._renderForTwoColumnLayout() : e._renderForOneColumnLayout()
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
                    a()(e, [
                      'children',
                      'leftControl',
                      'screenType',
                      'showSubtitleOnRoot',
                      'showSubtitleOnWideDetail',
                      'withBottomBorder',
                      'withDetailOpen',
                    ]))
                return _.createElement(
                  _.Fragment,
                  null,
                  Object(w.a)() ? this._renderInlineNav({ isTwoColumnLayout: !1 }) : _.createElement(C.a.Configure, n),
                  t,
                )
              },
            },
            {
              key: '_renderForTwoColumnLayout',
              value: function () {
                var e = this,
                  t = this.context.rootDetailPerColumnScroll
                return _.createElement(O.a.Consumer, null, function (n) {
                  var r = n.featureSwitches.isTrue('responsive_web_app_bar_scroll_enabled'),
                    a = t
                      ? !r && e._renderInlineNav({ isTwoColumnLayout: !0 })
                      : e._renderInlineNav({ isTwoColumnLayout: !0 })
                  return _.createElement(_.Fragment, null, a, e._renderChildren(r))
                })
              },
            },
            {
              key: '_renderInlineNav',
              value: function (e) {
                var t = e.appBarScrollEnabled,
                  n = void 0 !== t && t,
                  r = e.isTwoColumnLayout,
                  a = this.props,
                  i = a.SideNavButton,
                  o = a.TabBar,
                  c = a.TeamsSwitcher,
                  s = a.backLocation,
                  l = a.documentTitle,
                  u = a.headerless,
                  d = a.history,
                  p = a.leftControl,
                  f = a.middleControl,
                  h = a.onBackClick,
                  m = a.rightControl,
                  v = a.screenType,
                  y = a.searchBoxOptions,
                  b = a.secondaryBar,
                  E = a.showSubtitleOnRoot,
                  O = a.showSubtitleOnWideDetail,
                  w = a.subtitle,
                  R = a.title,
                  I = a.titleIconCell,
                  k = a.titleIconCellSize,
                  T = a.withBottomBorder,
                  A = a.withDetailOpen,
                  M = a.withSearchBox,
                  j = a.withTweetButton,
                  D = 'root' === v,
                  L = 'secondaryRoot' === v,
                  F = 'primaryDetail' === v,
                  B = (F && O) || (D && E),
                  N = D || (F && r),
                  H = D ? g.c : F ? g.a : void 0,
                  U = _.createElement(
                    x.a,
                    { style: n ? [P.appBarContainer, P.appBarZindex] : P.appBarZindex },
                    _.createElement(S.a, {
                      backLocation: s,
                      fixed: !1,
                      hideBackButton: N,
                      history: d,
                      leftControl: p,
                      middleControl: f,
                      onBackClick: h,
                      rightControl: m,
                      secondaryBar: n ? b : null,
                      subtitle: B ? w : void 0,
                      title: R,
                      titleDomId: H,
                      titleIconCell: I,
                      titleIconCellSize: k,
                      withBottomBorder: T,
                    }),
                  ),
                  V =
                    D || (L && A)
                      ? null
                      : _.createElement(C.a.Configure, {
                          SideNavButton: i,
                          TabBar: o,
                          TeamsSwitcher: c,
                          backLocation: s,
                          documentTitle: l,
                          headerless: u,
                          middleControl: f,
                          onBackClick: h,
                          rightControl: m,
                          searchBoxOptions: y,
                          subtitle: w,
                          title: R,
                          withSearchBox: M,
                          withTweetButton: j,
                        })
                return _.createElement(_.Fragment, null, V, U, n ? null : b)
              },
            },
          ]),
          n
        )
      })(_.Component)
      b()(L, 'contextType', j.a),
        b()(L, 'defaultProps', { screenType: 'secondaryDetail', showSubtitleOnWideDetail: !0 })
      t.a = Object(A.a)(L)
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
    OhSZ: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return b
      })
      var r = n('ddV6'),
        a = n.n(r),
        i = (n('z84I'), n('ho0z'), n('+KXO'), n('ERkP')),
        o = n('aWyx'),
        c = n('XnpN'),
        s = n('3XMw'),
        l = n.n(s),
        u = n('jV+4'),
        d = n('pjBI'),
        p = n('t62R'),
        f = n('rHpw'),
        h = n('p9G8'),
        m = l.a.cfd94063,
        v = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
          return e.map(function (e) {
            return e.data
          })
        },
        y = f.a.create(function (e) {
          return { title: { maxWidth: '50%' } }
        }),
        b = function (e) {
          var t = e.conversation,
            n = e.newConversationParticipants,
            r = e.perspective
          if (t) {
            if (t.type === o.a.ONE_TO_ONE) {
              var i = Object(c.a)(t, r).map(function (e) {
                return e.user
              })
              return a()(i, 1)[0].name
            }
            return Object(h.a)(t, r)
          }
          var s = v(n)
          return Object(h.b)(s, r)
        }
      t.b = function (e) {
        var t = e.conversation,
          n = e.isConversationSearchTitle,
          r = void 0 !== n && n,
          s = e.isMessageSearchTitle,
          l = void 0 !== s && s,
          f = e.newConversationParticipants,
          b = e.perspective,
          g = e.renderTimestamp,
          _ = e.textColor,
          E = void 0 === _ ? 'normal' : _,
          O = e.titleWeight,
          S = void 0 === O ? 'bold' : O,
          C = e.withScreenName,
          w = void 0 === C || C,
          R = e.withVDLRefresh,
          I = void 0 !== R && R
        if (t) {
          var k = g ? g() : null
          if (t.type === o.a.ONE_TO_ONE) {
            var P = Object(c.a)(t, b).map(function (e) {
                return e.user
              }),
              x = a()(P, 1)[0],
              T = i.createElement(u.a, {
                color: E,
                isProtected: x.protected,
                isVerified: x.verified,
                name: x.name,
                screenName: x.screen_name,
                weight: S,
                withLink: !1,
                withScreenName: w,
              })
            return (I && !r) || l ? i.createElement(d.a, null, T, k) : T
          }
          var A = t.participants,
            M = Object.keys(A).length
          if (r)
            return i.createElement(
              d.a,
              { color: E },
              i.createElement(p.b, { color: E, numberOfLines: 1, style: y.title, weight: S }, Object(h.a)(t, b, r)),
              I
                ? null
                : i.createElement(p.b, { color: 'gray700', numberOfLines: 1, weight: 'normal' }, m({ peopleCount: M })),
            )
          var j = i.createElement(p.b, { color: E, numberOfLines: 1, weight: S }, Object(h.a)(t, b, r))
          return (I && !r) || l ? i.createElement(d.a, null, j, k) : j
        }
        var D = v(f)
        return i.createElement(p.b, { color: E, numberOfLines: 1, weight: S }, Object(h.b)(D, b))
      }
    },
    Oi4X: function (e, t, n) {
      'use strict'
      n('OZaJ'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
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
        y =
          (n('Qavd'),
          n('JtPf'),
          n('7x/C'),
          n('+KXO'),
          n('z84I'),
          n('MvUL'),
          n('KqXw'),
          n('lTEL'),
          n('kYxP'),
          n('ERkP')),
        b = n('0JOx'),
        g = n('zh9S'),
        _ = n('MMRb'),
        E = n('CDB5'),
        O = n('RqPI'),
        S = n('1YZw'),
        C = n('hqKg'),
        w = n('kGix'),
        R = n('AQOc'),
        I = n('UhuB'),
        k = n('pNZL'),
        P = n('G6rE'),
        x = n('oEGd'),
        T = n('X/yg'),
        A = n('0KEI'),
        M = n('P1r1'),
        j = function (e, t) {
          return t.conversationId
        },
        D = Object(C.createSelector)(
          _.selectFetchStatus,
          function (e, t) {
            return _.selectConversationFetchStatus(e, j(0, t))
          },
          function (e, t) {
            return e === w.a.LOADED ? t : e
          },
        ),
        L = Object(C.createSelector)(
          function (e, t) {
            return _.selectEntriesForConversation(e, j(0, t))
          },
          O.q,
          function (e, t) {
            return t ? Object(T.d)(e, t) : void 0
          },
        ),
        F = Object(C.createSelector)(
          function (e, t) {
            return _.selectConversation(e, j(0, t))
          },
          _.selectEntries,
          T.l,
          O.q,
          T.m,
          T.n,
          P.e.selectAll,
          D,
          function (e, t) {
            return E.g(e, j(0, t))
          },
          function (e, t) {
            return E.j(e, j(0, t))
          },
          function (e, t) {
            return E.i(e, j(0, t))
          },
          function (e, t) {
            return E.k(e, j(0, t))
          },
          function (e, t) {
            return E.h(e, j(0, t))
          },
          function (e, t) {
            return E.l(e, j(0, t))
          },
          M.k,
          I.n,
          L,
          M.n,
          function (e, t) {
            var n = j(0, t)
            return _.selectInboxTypeByConversation(e, n)
          },
          function (e, t, n, r, a, i, o, c, s, l, u, d, p, f, h, m, v, y, b) {
            var g = e && e.data
            return {
              conversation: (g && Object(R.a)(g, t, o)) || void 0,
              dataSaverMode: h,
              draftText: f,
              dtabBarInfo: y,
              fetchStatus: c,
              gifMetadata: p,
              inboxType: b,
              isDmReceiptSettingEnabled: m,
              cardUrl: s,
              isNewGroupConversation: n,
              isUploading: l,
              media: u,
              mediaUploadProgress: d,
              newConversationParticipants: a,
              perspective: r,
              quickReplyOptions: v,
              tweetAttachment: i,
            }
          },
        ),
        B = Object(x.d)(F, function (e) {
          return {
            acceptConversation: _.acceptConversation,
            addMedia:
              ((t = e.conversationId),
              function (e, n) {
                return E.a(t, e, n)
              }),
            saveText: E.f,
            addToast: S.b,
            addWelcomeMessageToConversation: _.addWelcomeMessageToConversation,
            cancelUpload: Object(T.a)(e.conversationId),
            createLocalApiErrorHandler: Object(A.createLocalApiErrorHandlerWithContextFactory)(
              'DIRECT_MESSAGES_CONVERSATION',
            ),
            fetchConversationHistory: _.fetchConversationHistory,
            fetchConversationIfNeeded: _.fetchConversationIfNeeded,
            fetchInboxIfNeeded: _.fetchInboxIfNeeded,
            fetchUpdatesIfNeeded: _.fetchUpdatesIfNeeded,
            googleAnalyticsPageView: g.a,
            leaveConversation: _.leaveConversation,
            removeMedia: Object(T.b)(e.conversationId),
            removeText: E.d,
            scribeAction: g.c,
            scribePageImpression: g.d,
            sendMessage: E.m,
            updateConversationReadState: _.updateConversationReadState,
            updateTweetDetailNav: k.b,
            updateTyping: _.updateTyping,
            removeConversation: _.removeConversation,
            popOutConversation: _.popOutConversation,
          }
          var t
        }),
        N = n('I2k/'),
        H = n('ejT/'),
        U = n('7n04'),
        V = n('Myq3'),
        W = n('VPAj')
      function z(e, t) {
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
            ? z(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : z(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var G = function (e, t) {
          return e.getForItem(t).doesIntersectWith(e.getForViewport())
        },
        q = function (e) {
          return e.getForList().getBottom() - e.getForViewport().getBottom()
        },
        Y = function (e) {
          var t = e.isOwnMessage,
            n = e.typingIndicatorId,
            r = function (e) {
              return Object(V.a)(e.getList(), function (e) {
                return e.id !== n
              })
            }
          return K(
            K({}, U.a),
            {},
            {
              initialScrollHeadroom: Object(W.a)(0),
              scrollHeadroom: Object(W.a)(0),
              offsetCorrection: function (e, a) {
                var i = r(e),
                  o = r(a),
                  c = o && (!i || i.id !== o.id),
                  s = o && t(o.data.data),
                  l = i && G(e, i.id)
                return (c && (s || l)) ||
                  (l &&
                    (function (e, t) {
                      var r = e.getForItem(n),
                        a = t.getForItem(n)
                      return !r || (a && a.getHeight() > r.getHeight())
                    })(e, a))
                  ? Math.max(0, q(a))
                  : U.a.offsetCorrection(e, a)
              },
            },
          )
        },
        X = (n('KOtZ'), n('gbD7')),
        Q = (n('Blm6'), n('b9JY')),
        Z = function (e, t) {
          if (e && e.message_data && t && t.message_data && Object(Q.b)(e) && Object(Q.b)(t)) {
            var n = e.message_data,
              r = n.sender_id,
              a = n.time,
              i = t.message_data,
              o = i.sender_id,
              c = i.time,
              s = parseInt(c, 10) - parseInt(a, 10)
            return r === o && s >= 0 && s <= 6e4
          }
          return !1
        },
        J = n('jat/'),
        $ = (n('jQ/y'), n('ho0z'), n('uFXj'), n('v6aA')),
        ee = n('XnpN'),
        te = n('LhSm'),
        ne = n('I4+6'),
        re = n('rHpw'),
        ae = n('PbQQ'),
        ie = n('cm6r'),
        oe = n('jV+4'),
        ce = n('pBrB'),
        se = n('wCd/'),
        le = function (e, t) {
          var n = Object(ee.a)(e, t).map(function (e) {
              return e.user
            }),
            r = n && n[0]
          return {
            userDescription: r.description,
            userEntities: r.entities,
            userWithheldDescription: r.withheld_description,
            userWithheldEntities: r.withheld_entities,
            userFollowerCount: r && r.followers_count,
            userFriendsCount: r && r.friends_count,
            userIdStr: r && r.id_str,
            userJoinDate: r && r.created_at,
            userName: r && r.name,
            userScreenName: r && r.screen_name,
            userIsVerified: r && r.verified,
          }
        },
        ue = re.a.create(function (e) {
          return {
            root: {
              flexDirection: 'column',
              alignItems: 'center',
              marginBottom: e.spaces.space16,
              paddingVertical: e.spaces.space20,
              paddingHorizontal: e.spaces.space16,
              borderRadius: e.borderRadii.xSmall,
            },
            profileInfoItemMargin: { marginBottom: e.spaces.space4 },
            borderBottom: {
              borderBottomWidth: e.borderWidths.small,
              borderBottomColor: e.colors.borderColor,
              borderBottomStyle: 'solid',
            },
            description: { width: '100%', textAlign: 'center' },
          }
        }),
        de = function (e) {
          var t = e.conversation,
            n = e.withBottomBorder,
            r = void 0 === n || n,
            a = y.useContext($.a).loggedInUserId
          if (!t) return null
          var i = le(t, a || ''),
            o = i.userDescription,
            c = i.userEntities,
            s = i.userFollowerCount,
            l = i.userFriendsCount,
            u = i.userIdStr,
            d = i.userIsVerified,
            p = i.userJoinDate,
            f = i.userName,
            h = i.userScreenName,
            m = i.userWithheldDescription,
            v = i.userWithheldEntities,
            b = !!(f && h && ((s && l) || p)),
            g = ne.a.generate({
              color: re.a.theme.colors.text,
              backgroundColor: re.a.theme.colors.transparent,
              customFocusBackgroundColor: re.a.theme.colors.gray0,
              customHoverBackgroundColor: re.a.theme.colors.gray0,
              customPressedBackgroundColor: re.a.theme.colors.activeFaintGray,
            })
          return y.createElement(ae.a.Consumer, null, function (e) {
            return y.createElement(
              ie.a,
              {
                interactiveStyles: g,
                link: e.withAnchorless('https://twitter.com/'.concat(h || '')),
                style: [ue.root, r && b && ue.borderBottom],
              },
              y.createElement(oe.a, {
                isVerified: d,
                name: f,
                screenName: h,
                style: ue.profileInfoItemMargin,
                weight: 'bold',
                withHoverCard: !0,
                withLink: !0,
              }),
              o && c && u
                ? y.createElement(ce.a, {
                    description: o,
                    entities: c,
                    style: [ue.profileInfoItemMargin, ue.description],
                    userId: u,
                    withheldDescription: m,
                    withheldEntities: v,
                  })
                : null,
              s && l
                ? y.createElement(se.a, {
                    followersCount: s,
                    friendsCount: l,
                    screenName: h || '',
                    style: ue.profileInfoItemMargin,
                    withLink: !1,
                  })
                : null,
              p ? y.createElement(te.a, { joinDate: p }) : null,
            )
          })
        },
        pe = n('V/6K'),
        fe = n('cFyg'),
        he = (n('hBvt'), n('2G9S'), n('M+/F'), n('vrRf'), n('g54k')),
        me = n('aA19'),
        ve = n('aWyx'),
        ye = n('mN6z'),
        be = n('MWbm'),
        ge = n('t62R'),
        _e = n('jhWN'),
        Ee = n('MAI/'),
        Oe = n('zQEV')
      function Se(e) {
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
      var Ce = function (e) {
          var t = e.children,
            n = e.link,
            r = e.style
          return y.createElement(ge.b, { align: 'center', color: 'gray700', link: n, size: 'subtext2', style: r }, t)
        },
        we = (function (e) {
          u()(n, e)
          var t = Se(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              v()(s()(e), '_renderContents', function () {
                var t = e.props,
                  n = t.conversation,
                  r = t.entry,
                  a = t.entryType,
                  i = t.perspective,
                  o = t.users,
                  c = Object(Oe.a)(r, a, i, o)
                switch (a) {
                  case ve.b.CONVERSATION_AVATAR_UPDATE:
                    var s = n.avatar_image_https === r.conversation_avatar_image_https
                    return y.createElement(
                      y.Fragment,
                      null,
                      e._isValidImageSource(n.avatar_image_https) && s
                        ? y.createElement(
                            be.a,
                            { style: Re.conversationAvatarContainer },
                            y.createElement(me.a, { conversation: n, perspective: i }),
                          )
                        : null,
                      y.createElement(Ce, null, c),
                    )
                  case ve.b.JOIN_CONVERSATION:
                    var l = e._getAddedYouMessageWithProfileInfo(c),
                      u = e._getParticipantsFromEntry(),
                      d = y.createElement(
                        ge.b,
                        { align: 'center', color: 'gray700', size: 'subtext2' },
                        e._getParticipantsFromEntryText(u),
                      ),
                      p = e._getJoinConversationDetailsWithFacepile(u, d)
                    return y.createElement(y.Fragment, null, l, p)
                  default:
                    return y.createElement(Ce, null, c)
                }
              }),
              v()(s()(e), '_getAddedYouMessageWithProfileInfo', function (t) {
                var n = e.props,
                  r = n.entry,
                  a = n.users,
                  i = r.sender_id ? a[r.sender_id] : void 0,
                  o = i ? { pathname: 'https://twitter.com/'.concat(i.screen_name) } : void 0
                return y.createElement(
                  ie.a,
                  { interactiveStyles: null, link: o, style: Re.userAddedYouContainer },
                  i
                    ? y.createElement(_e.a, {
                        accessibilityLabel: i.screen_name,
                        screenName: i.screen_name,
                        size: 'medium',
                        uri: i.profile_image_url_https,
                        withHoverCard: !0,
                        withLink: !0,
                      })
                    : null,
                  y.createElement(Ce, { link: o, style: Re.userAddedYouText }, t),
                )
              }),
              v()(s()(e), '_getJoinConversationDetailsWithFacepile', function (t, n) {
                var r = e.props.conversation,
                  a = t.slice(0, 20).map(function (e) {
                    return e.profile_image_url_https
                  })
                return y.createElement(
                  ie.a,
                  {
                    interactiveStyles: null,
                    link: { pathname: '/messages/'.concat(r.conversation_id, '/participants') },
                    style: Re.joinConversationDetails,
                  },
                  n,
                  y.createElement(Ee.a, { style: Re.userAvatarFacepile, userAvatarSize: 'xLarge', userAvatarUrls: a }),
                )
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'shouldComponentUpdate',
                value: function (e) {
                  return !Object(ye.a)(this.props, e)
                },
              },
              {
                key: 'render',
                value: function () {
                  return y.createElement(be.a, { style: Re.root }, this._renderContents())
                },
              },
              {
                key: '_isValidImageSource',
                value: function (e) {
                  return e && '' !== e && e.indexOf('MEDIA_NOT_FOUND') < 0
                },
              },
              {
                key: '_getParticipantsFromEntry',
                value: function () {
                  var e = this.props,
                    t = e.entry,
                    n = e.perspective,
                    r = e.users
                  return t.participants
                    ? t.participants
                        .filter(function (e) {
                          var t = e.user_id
                          return n !== t
                        })
                        .map(function (e) {
                          var t = e.user_id
                          return r[t]
                        })
                        .filter(Boolean)
                    : []
                },
              },
              {
                key: '_getParticipantsFromEntryText',
                value: function (e) {
                  var t = this.props.conversation.conversation_id
                  return Object(Oe.b)(e.length, t)
                },
              },
            ]),
            n
          )
        })(y.Component),
        Re = re.a.create(function (e) {
          return {
            root: { paddingBottom: e.spaces.space20 },
            conversationAvatarContainer: {
              alignSelf: 'center',
              height: e.spaces.space64,
              marginBottom: e.spaces.space12,
              width: e.spaces.space64,
            },
            userAddedYouContainer: { flexDirection: 'row', justifyContent: 'center' },
            userAddedYouText: { flexShrink: 1, marginLeft: e.spaces.space12 },
            joinConversationDetails: { marginTop: e.spaces.space4 },
            userAvatarList: { marginTop: e.spaces.space4 },
            userAvatarFacepile: { marginTop: e.spaces.space4, justifyContent: 'center' },
          }
        }),
        Ie = Object(he.a)(we),
        ke = n('ddV6'),
        Pe = n.n(ke),
        xe = n('oQhu')
      var Te = Object(xe.a)(function (e) {
          var t = re.a.theme.spacesPx.space40
          return {
            DMUserAvatarSizeType: 'xLarge',
            DMUserAvatarSizePx: t,
            DMUserAvatarSpacerPx: t + re.a.theme.spacesPx.space12,
          }
        }),
        Ae = n('shC7'),
        Me = n('38/B'),
        je = function (e) {
          return De(e, Me.a.reducedMotionEnabled)
        },
        De = Object(xe.a)(function (e, t) {
          var n,
            r,
            a,
            i,
            o,
            c,
            s,
            l,
            u,
            d =
              ((n = Te(re.a.theme.scale)),
              (r = n.DMUserAvatarSizePx),
              (a = n.DMUserAvatarSpacerPx),
              (i = Ne[re.a.theme.scale]),
              (o = Fe / i),
              (c = Be / r),
              (l = Be - (s = Be / 2)),
              (u = Be - s - a),
              {
                cssTransition: Me.a.reducedMotionEnabled
                  ? {}
                  : { transition: 'transform '.concat(Ue, ', opacity ').concat(Ue) },
                messageContainer: {
                  base: { transform: [{ translateX: 0 }] },
                  active: {
                    sent: { transform: [{ translateX: (Ae.a.getConstants().isRTL ? 1 : -1) * l }] },
                    received: { transform: [{ translateX: (Ae.a.getConstants().isRTL ? -1 : 1) * u }] },
                  },
                },
                actionsContainer: {
                  base: { transform: [{ translateX: 0 }] },
                  active: {
                    sent: { transform: [{ translateX: (Ae.a.getConstants().isRTL ? 1 : -1) * He[re.a.theme.scale] }] },
                    received: {
                      transform: [
                        { translateX: (Ae.a.getConstants().isRTL ? -1 : 1) * (He[re.a.theme.scale] + u) - s },
                      ],
                    },
                  },
                },
                voiceMessage: {
                  container: { base: { height: i }, active: { height: Fe } },
                  base: { height: i, transform: [{ scale: 1 }] },
                  active: {
                    base: { transform: [{ scale: o }] },
                    sent: {
                      paddingRight: s / o,
                      transformOrigin: Ae.a.getConstants().isRTL ? 'bottom left' : 'bottom right',
                    },
                    received: {
                      paddingLeft: s / o,
                      transformOrigin: Ae.a.getConstants().isRTL ? 'bottom right' : 'bottom left',
                    },
                  },
                },
                userAvatar: {
                  base: { transform: [{ scale: 1 }] },
                  sent: { transformOrigin: Ae.a.getConstants().isRTL ? 'bottom left' : 'bottom right' },
                  received: { transformOrigin: Ae.a.getConstants().isRTL ? 'bottom right' : 'bottom left' },
                  active: { opacity: 1, pointerEvents: 'all', transform: [{ scale: c }] },
                  visuallyHidden: { opacity: 0, pointerEvents: 'none' },
                },
              })
          return {
            actionsContainer: function (e) {
              var t = e.isSent,
                n = e.isVoiceMessageActive,
                r = [d.cssTransition, d.actionsContainer.base]
              return n && r.push(t ? d.actionsContainer.active.sent : d.actionsContainer.active.received), r
            },
            messageContainer: function (e) {
              var t = e.isSent,
                n = e.isVoiceMessageActive,
                r = [d.cssTransition, d.messageContainer.base]
              return n && r.push(t ? d.messageContainer.active.sent : d.messageContainer.active.received), r
            },
            voiceMessageContainer: function (e) {
              e.isSent
              var t = e.isVoiceMessageActive,
                n = [d.cssTransition, d.voiceMessage.container.base]
              return t && n.push(d.voiceMessage.container.active), n
            },
            voiceMessage: function (e) {
              var t = e.isSent,
                n = e.isVoiceMessageActive,
                r = [d.cssTransition, d.voiceMessage.base]
              return (
                n &&
                  (r.push(d.voiceMessage.active.base),
                  r.push(t ? d.voiceMessage.active.sent : d.voiceMessage.active.received)),
                r
              )
            },
            userAvatar: function (e) {
              var t = e.isSent,
                n = e.isVoiceMessageActive,
                r = [d.cssTransition, d.userAvatar.base, t ? d.userAvatar.sent : d.userAvatar.received]
              return n ? r.push(d.userAvatar.active) : t && r.push(d.userAvatar.visuallyHidden), r
            },
          }
        })
      var Le,
        Fe = 60,
        Be = Fe,
        Ne = { xSmall: 42, small: 42, normal: 47, large: 47, xLarge: 47 },
        He = {
          xSmall: 72.26,
          small: 165.61 - 89.3,
          normal: 158.22 - 94.4,
          large: 166.64 - 100.58,
          xLarge: 181.55 - 111.81,
        },
        Ue = '0.2s 0s ease-in-out',
        Ve = n('+Kfv'),
        We = { scribeAction: g.c },
        ze = Object(C.createSelector)(
          function (e, t) {
            return P.e.select(e, t.senderId)
          },
          M.l,
          M.r,
          function (e, t, n) {
            return { user: e, displaySensitiveMedia: t, isDmNsfwMediaFilterEnabled: n }
          },
        ),
        Ke = Object(x.g)(ze, We),
        Ge = {
          addToast: S.b,
          createLocalApiErrorHandler: Object(A.createLocalApiErrorHandlerWithContextFactory)(
            'DIRECT_MESSAGES_OVERFLOW_ACTIONS',
          ),
          deleteEntry: _.deleteEntry,
        },
        qe = Object(x.b)(Ge),
        Ye = n('k49u'),
        Xe = n('LVU8'),
        Qe = n('3XMw'),
        Ze = n.n(Qe),
        Je = Ze.a.f58dff33,
        $e = Ze.a.ad5a8e8e,
        et =
          ((Le = {}),
          v()(Le, Ye.a.MissingParameter, { toast: Object(Xe.a)(Je) }),
          v()(Le, Ye.a.DirectMessageDestroyPermissionsError, { toast: { text: $e } }),
          v()(Le, 'showToast', !0),
          Le),
        tt = (n('jQ3i'), n('x4t0'), n('xCUF')),
        nt = n('uKEd'),
        rt = [],
        at = Object(C.createSelector)(
          function (e) {
            return Object(nt.l)(e).entries
          },
          function (e, t) {
            return Object(nt.p)(e, t.entry.id) || rt
          },
          function (e, t) {
            return t.perspective
          },
          function (e, t, n) {
            return {
              selectedReactions: t
                .filter(function (t) {
                  var r = e[t] && e[t].data
                  return r && r.sender_id === n
                })
                .map(function (t) {
                  return e[t].data.reaction_key
                }),
            }
          },
        ),
        it = {
          createReaction: nt.d,
          createLocalApiErrorHandler: Object(A.createLocalApiErrorHandlerWithContextFactory)(
            'DIRECT_MESSAGES_REACTIONS_POPOVER',
          ),
          fetchUpdatesIfNeeded: tt.d,
          removeReaction: nt.k,
        },
        ot = Object(x.g)(at, it),
        ct = n('RhWx'),
        st = n.n(ct),
        lt = n('33Kz'),
        ut = n('wTX1'),
        dt = function (e) {
          var t = e.accessibilityLabelFormatter,
            n = e.count,
            r = e.emojiSize,
            a = e.emotion,
            i = e.enableHoverStyle,
            o = e.focusable,
            c = e.onPress,
            s = e.style,
            l = y.useContext($.a).featureSwitches,
            u = Object(lt.b)(a, l),
            d = t && u ? t({ emoji: u, count: n }) : void 0,
            p = ne.a.generate({ backgroundColor: re.a.theme.colors.gray50, color: re.a.theme.colors.gray700 })
          return y.createElement(
            ie.a,
            {
              accessibilityLabel: d,
              focusable: o,
              interactiveStyles: i ? p : null,
              onPress: c,
              style: [pt.container].concat(st()(s || [])),
            },
            y.createElement(ge.b, { size: r, style: pt.unsetLineHeight }, u),
            n
              ? y.createElement(ut.a, { color: 'gray700', containerStyle: pt.count, count: n, size: 'subtext3' }, n)
              : null,
          )
        },
        pt = re.a.create(function (e) {
          return {
            container: { flexDirection: 'row' },
            count: { alignSelf: 'center', minWidth: e.spaces.space16, paddingLeft: e.spaces.space2 },
            unsetLineHeight: { lineHeight: 'unset' },
          }
        }),
        ft = n('pHkl'),
        ht = n('Irs7')
      function mt(e) {
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
      var vt = Ze.a.ca7a2214,
        yt = Ze.a.fc0e94b7,
        bt = (function (e) {
          u()(n, e)
          var t = mt(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              v()(s()(e), '_handleReactionScribing', function (t, n) {
                var r = e.props,
                  a = r.analytics,
                  i = r.entry,
                  o = r.isGroupDM,
                  c = r.participantsCount,
                  s = n ? 'delete_reaction' : 'create_reaction',
                  l = Object(T.c)(i)
                a.scribe({
                  section: 'twitter_service',
                  component: 'direct_messages',
                  element: s,
                  action: 'success',
                  data: {
                    conversation_id: i.conversation_id,
                    conversation_participant_count: c,
                    conversation_type: o ? ft.g.GROUP : ft.g.ONE_TO_ONE,
                    message_type: l,
                    reaction_emotion: t,
                  },
                })
              }),
              v()(s()(e), '_reactionClickHandler', function (t, n) {
                return function () {
                  var r = e.props,
                    a = r.createLocalApiErrorHandler,
                    i = r.createReaction,
                    o = r.dismiss,
                    c = r.entry,
                    s = r.fetchUpdatesIfNeeded,
                    l = r.perspective,
                    u = r.removeReaction,
                    d = { reaction_key: t, conversation_id: c.conversation_id, dm_id: c.id, perspective: l }
                  ;(n ? u : i)(d)
                    .then(e._handleReactionScribing(t, n))
                    .then(function () {
                      return s()
                    })
                    .catch(a()),
                    o()
                }
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
                    t = this.props.selectedReactions,
                    n = Object(lt.a)(this.context.featureSwitches).map(function (n) {
                      var r = t.includes(n)
                      return y.createElement(dt, {
                        accessibilityLabelFormatter: r ? vt : yt,
                        emojiSize: 'title4',
                        emotion: n,
                        enableHoverStyle: !0,
                        focusable: !0,
                        key: n,
                        onPress: e._reactionClickHandler(n, r),
                        style: [_t.reaction, r && _t.selectedReaction],
                      })
                    })
                  return y.createElement(be.a, { style: _t.reactions }, n)
                },
              },
            ]),
            n
          )
        })(y.Component)
      v()(bt, 'contextType', $.a)
      var gt = Object(ht.a)(ot(bt)),
        _t = re.a.create(function (e) {
          return {
            reactions: { cursor: 'pointer', flexDirection: 'row', padding: e.spaces.space12 },
            reaction: { borderRadius: e.borderRadii.small, padding: e.spaces.space4 },
            selectedReaction: { backgroundColor: e.colors.gray50 },
          }
        }),
        Et = n('OiMc')
      function Ot(e) {
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
      var St = (function (e) {
        u()(n, e)
        var t = Ot(n)
        function n() {
          var e
          a()(this, n)
          for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
          return (
            (e = t.call.apply(t, [this].concat(i))),
            v()(s()(e), '_renderDMReactionPickerContent', function (t) {
              var n = e.props,
                r = n.entry,
                a = n.isGroupDM,
                i = n.participantsCount,
                o = n.perspective
              return y.createElement(gt, { dismiss: t, entry: r, isGroupDM: a, participantsCount: i, perspective: o })
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
                  n = e.onDismiss
                return y.createElement(
                  Et.a,
                  {
                    enableEnterKeyToggle: !0,
                    onDismiss: n,
                    preferredVerticalOrientation: 'up',
                    renderContent: this._renderDMReactionPickerContent,
                    withArrow: !0,
                    withFixedPosition: this.context.isDrawer,
                  },
                  t,
                )
              },
            },
          ]),
          n
        )
      })(y.Component)
      v()(St, 'contextType', pe.a)
      var Ct = n('fz3c'),
        wt = n('TnY3'),
        Rt = n('mjJ+'),
        It = n('Q0VY'),
        kt = n('eb3s'),
        Pt = n('/yvb'),
        xt = n('ZToW'),
        Tt = n('CaKu'),
        At = n('i4Oy'),
        Mt = (n('hBpG'), n('tVqn'), n('tQbP'), n('4w6w')),
        jt = function (e, t) {
          if (null == e) return !1
          var n = t || [0, 0],
            r = Pe()(n, 2),
            a = r[0],
            i = r[1]
          return !((0 === a || 1 === a) && e.length === i)
        },
        Dt = function (e) {
          var t = e.message_data
          if (!t) return !1
          var n = t.attachment
          if (!n) return !0
          if (n.sticker) return !1
          var r = n.tweet || n.photo || n.animated_gif || n.video || void 0
          if (r) return jt(t.text, r.indices)
          if (n.card) {
            var a,
              i = ((null === (a = t.entities) || void 0 === a ? void 0 : a.urls) || []).find(function (e) {
                return e.url === n.card
              })
            return jt(t.text, i && i.indices)
          }
          return !0
        },
        Lt = function (e) {
          var t,
            n = null == e || null === (t = e.message_data) || void 0 === t ? void 0 : t.attachment
          return !(!n || !(n.card || n.tweet || n.photo || n.animated_gif || n.video))
        },
        Ft = function (e) {
          var t,
            n = null == e || null === (t = e.message_data) || void 0 === t ? void 0 : t.attachment
          return !(!n || !n.fleet)
        },
        Bt = function (e, t, n) {
          var r = 1.25 * re.a.theme.fontSizesPx.body
          return {
            compositeRendered: e ? void 0 !== t && void 0 !== n : void 0 !== t,
            isTextSquared: void 0 !== t && void 0 !== n && (n === t || n <= t - r),
            isAttachmentSquared: void 0 !== n && void 0 !== t && (t === n || t <= n - r),
          }
        },
        Nt = n('hiGS'),
        Ht = n('zIWA'),
        Ut = n('Lsrn'),
        Vt = n('k/Ka')
      function Wt(e, t) {
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
      function zt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Wt(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Wt(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var Kt = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(Vt.a)(
          'svg',
          zt(
            zt({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [Ut.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          y.createElement(
            'g',
            null,
            y.createElement('path', {
              d: 'M16.925 9.5H14.5V7.075c0-.414-.336-.75-.75-.75s-.75.336-.75.75V9.5h-2.425c-.414 0-.75.336-.75.75s.336.75.75.75H13v2.425c0 .414.336.75.75.75s.75-.336.75-.75V11h2.425c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm-.3 11H4.25c-.413 0-.75-.337-.75-.75V8.402c0-.414-.336-.75-.75-.75s-.75.336-.75.75V19.75C2 20.99 3.01 22 4.25 22h12.375c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z',
            }),
            y.createElement('path', {
              d: 'M19.75 2h-12C6.51 2 5.5 3.01 5.5 4.25v12c0 1.24 1.01 2.25 2.25 2.25h12c1.24 0 2.25-1.01 2.25-2.25v-12C22 3.01 20.99 2 19.75 2zm.75 14.25c0 .413-.337.75-.75.75h-12c-.413 0-.75-.337-.75-.75v-12c0-.413.337-.75.75-.75h12c.413 0 .75.337.75.75v12z',
            }),
          ),
        )
      }
      Kt.metadata = { width: 24, height: 24 }
      var Gt = Kt,
        qt = n('DlVf'),
        Yt = n('ACHU'),
        Xt = n('UgB4')
      function Qt(e, t) {
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
      function Zt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Qt(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Qt(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function Jt(e) {
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
      var $t = Ze.a.ba60339a,
        en = Ze.a.j4bfee22,
        tn = Ze.a.d96cf7cd,
        nn = Ze.a.faddd3a2,
        rn = Ze.a.eb497e08,
        an = Ze.a.b170974a,
        on = Ze.a.i202bd22,
        cn = Ze.a.f2e5491a,
        sn = Ze.a.f88553c8,
        ln = Ze.a.ifea3114,
        un = Ze.a.cac14829,
        dn = Ze.a.h63a5c3b,
        pn = (function (e) {
          u()(n, e)
          var t = Jt(n)
          function n(e, r) {
            var i
            return (
              a()(this, n),
              (i = t.call(this, e, r)),
              v()(s()(i), '_renderOverflowMenu', function (e) {
                var t = i.props,
                  n = t.analytics,
                  r = t.entry,
                  a = t.isSent,
                  o = n.contextualScribeNamespace,
                  c = [{ text: $t, Icon: Nt.a, isEmphasized: !0, onClick: i._handleShowDeleteConfirmation(e) }]
                return (
                  a ||
                    c.push({
                      text: on,
                      Icon: Ht.a,
                      link: {
                        pathname: '/i/report/'.concat(Ct.a.DMMessage, '/').concat(r.id),
                        state: {
                          clientReferer: window.location.pathname,
                          conversationId: r.conversation_id,
                          scribeNamespace: o,
                        },
                      },
                      onClick: i.props.onReportMessage,
                    }),
                  Tt.a.isAvailable() && c.push({ text: cn, Icon: Gt, onClick: i._handleCopyMessageText }),
                  y.createElement(Rt.a, {
                    isFixed: i.context.isDrawer,
                    items: c,
                    onCloseRequested: i._handleHideActionsAndMenus(e),
                    preferredHorizontalOrientation: 'right',
                  })
                )
              }),
              v()(s()(i), '_handleCopyMessageText', function (e) {
                var t = i.props.addToast,
                  n = i._replaceMessageUrls()
                n && (Tt.a.setString(n), t({ text: sn })), e && e()
              }),
              v()(s()(i), '_handleForwardButton', function () {
                var e,
                  t,
                  n = i.props,
                  r = n.entry,
                  a = n.history
                if (
                  null != r &&
                  null !== (e = r.message_data) &&
                  void 0 !== e &&
                  null !== (t = e.attachment) &&
                  void 0 !== t &&
                  t.tweet
                ) {
                  var o = r.message_data.attachment.tweet
                  a.push({
                    pathname: '/messages/compose',
                    state: { tweetAttachment: Zt(Zt({}, o), {}, { id_str: o.status }) },
                  })
                }
              }),
              v()(s()(i), '_handleSetActionsActive', function () {
                var e = i.props.setShouldFreezeUpdates
                i.setState({ actionsAreActive: !0 }), e(!0)
              }),
              v()(s()(i), '_handleDelete', function () {
                var e = i.props,
                  t = e.analytics,
                  n = e.createLocalApiErrorHandler,
                  r = e.deleteEntry,
                  a = e.entry,
                  o = e.inboxType,
                  c = e.isGroupDM,
                  s = e.participantsCount,
                  l = Object(T.c)(a)
                t.scribe({
                  action: 'delete',
                  data: {
                    conversation_id: a.conversation_id,
                    conversation_type: c ? 1 : 0,
                    conversation_participant_count: s,
                    message_type: l,
                    inbox_type: Object(T.h)(o),
                  },
                }),
                  r({ conversationId: a.conversation_id, id: a.id }).catch(n(et))
              }),
              v()(s()(i), '_handleHideDeleteConfirmation', function () {
                i.setState({ showDeleteConfirmation: !1 })
              }),
              v()(s()(i), '_handleHideActionsAndMenus', function (e) {
                return function () {
                  var t = i.props.setShouldFreezeUpdates
                  e && e(), i.setState({ actionsAreActive: !1 }), t(!1)
                }
              }),
              v()(s()(i), '_handlePressReactionPickerButton', function () {
                var e = i.props,
                  t = e.analytics,
                  n = e.entry
                t.scribe({ component: 'reaction_button', element: Object(T.c)(n), action: 'click' }),
                  i._handleSetActionsActive()
              }),
              v()(s()(i), '_handleShowDeleteConfirmation', function (e) {
                return function () {
                  var t = i.props.setShouldFreezeUpdates
                  e(), i.setState({ actionsAreActive: !1, showDeleteConfirmation: !0 }), t(!1)
                }
              }),
              v()(s()(i), '_replaceMessageUrls', function () {
                var e = i.props.entry,
                  t = e && e.message_data && e.message_data.entities,
                  n = (e && e.message_data && e.message_data.text) || ''
                return (
                  It.a.tweetTextParts(n, [0, n.length], t).forEach(function (e) {
                    'url' === e.entityType && (n = n.replace(e.url, e.expandedUrl))
                  }),
                  n
                )
              }),
              (i.state = { actionsAreActive: !1, showDeleteConfirmation: !1 }),
              (i._hasMedia = Lt(i.props.entry)),
              (i._isNarrow = At.a.get('screen').width < re.a.theme.breakpoints.xSmall),
              i
            )
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e,
                    t,
                    n = this.props,
                    r = n.entry,
                    a = n.isSent,
                    i = n.shouldShowReactionButton,
                    o = n.style,
                    c = n.withVDLRefresh,
                    s = this._areActionsVisible()
                  return y.createElement(
                    be.a,
                    {
                      pointerEvents: s ? 'auto' : 'none',
                      style: [
                        hn.messageActions,
                        a ? hn.messageActionsLeft : hn.messageActionsRight,
                        s ? hn.visible : hn.invisible,
                        c && hn.vdlMessageActions,
                        this._isNarrow && (this._hasMedia ? hn.messageActionsMediaNarrow : hn.messageActionsNarrow),
                        o,
                      ],
                    },
                    (null == r ||
                    null === (e = r.message_data) ||
                    void 0 === e ||
                    null === (t = e.attachment) ||
                    void 0 === t
                      ? void 0
                      : t.tweet) &&
                      c &&
                      this._renderForwardButton(),
                    i && this._renderReactionButton(),
                    this._renderOverflowButton(),
                    this._renderDeleteConfirmation(),
                  )
                },
              },
              {
                key: '_renderDeleteConfirmation',
                value: function () {
                  return this.state.showDeleteConfirmation
                    ? y.createElement(kt.a, {
                        confirmButtonLabel: tn,
                        confirmButtonType: 'destructiveFilled',
                        headline: en,
                        onCancel: this._handleHideDeleteConfirmation,
                        onConfirm: this._handleDelete,
                        text: nn,
                      })
                    : null
                },
              },
              {
                key: '_renderForwardButton',
                value: function () {
                  return y.createElement(Pt.a, {
                    accessibilityLabel: ln,
                    hoverLabel: { label: ln },
                    icon: mn,
                    onPress: this._handleForwardButton,
                    size: this._isNarrow ? 'small' : 'medium',
                    type: 'brandText',
                  })
                },
              },
              {
                key: '_renderReactionButton',
                value: function () {
                  var e = this.props,
                    t = e.entry,
                    n = e.isGroupDM,
                    r = e.participantsCount,
                    a = e.perspective,
                    i = e.withVDLRefresh,
                    o = this.state.actionsAreActive,
                    c = y.createElement(qt.a, { style: i ? hn.vdlActionIcon : hn.actionIcon })
                  return y.createElement(
                    St,
                    {
                      entry: t,
                      isGroupDM: n,
                      onDismiss: this._handleHideActionsAndMenus(),
                      participantsCount: r,
                      perspective: a,
                    },
                    y.createElement(Pt.a, {
                      accessibilityExpanded: !!o,
                      accessibilityHasPopup: 'menu',
                      accessibilityLabel: an,
                      hoverLabel: { label: un },
                      icon: c,
                      onPress: this._handlePressReactionPickerButton,
                      size: this._isNarrow ? 'small' : 'medium',
                      type: 'brandText',
                    }),
                  )
                },
              },
              {
                key: '_renderOverflowButton',
                value: function () {
                  var e = this.props.withVDLRefresh,
                    t = y.createElement(Yt.a, { style: e ? hn.vdlActionIcon : hn.actionIcon })
                  return y.createElement(Pt.a, {
                    accessibilityLabel: rn,
                    hoverLabel: { label: dn },
                    icon: t,
                    onPress: this._handleSetActionsActive,
                    renderMenu: this._renderOverflowMenu,
                    size: this._isNarrow ? 'small' : 'medium',
                    type: 'brandText',
                  })
                },
              },
              {
                key: '_areActionsVisible',
                value: function () {
                  var e,
                    t = this.props,
                    n = t.containerIsActive,
                    r = t.containerIsFocused,
                    a = t.containerIsHovered,
                    i = t.isDraft,
                    o = this.state.actionsAreActive,
                    c = ((e = this.props.entry), !Dt(e) && Lt(e) && !xt.a.isEnabled)
                  return !i && (c || (n && !xt.a.isEnabled) || r || a || o)
                },
              },
            ]),
            n
          )
        })(y.Component)
      v()(pn, 'contextType', pe.a)
      var fn = Object(wt.a)(Object(ht.a)(qe(pn))),
        hn = re.a.create(function (e) {
          return {
            invisible: { opacity: 0 },
            messageActions: { alignSelf: 'flex-end', flexDirection: 'row' },
            messageActionsMediaNarrow: { flexDirection: 'column' },
            messageActionsNarrow: { flexShrink: 1, flexWrap: 'wrap', minWidth: e.spaces.space32 },
            messageActionsLeft: { justifyContent: 'flex-end', paddingRight: e.spaces.space4 },
            messageActionsRight: { justifyContent: 'flex-start', paddingLeft: e.spaces.space4 },
            vdlMessageActions: { alignSelf: 'center' },
            actionIcon: { color: e.colors.gray700 },
            vdlActionIcon: { color: e.colors.gray600 },
            visible: { opacity: 1 },
          }
        }),
        mn = y.createElement(Xt.a, { style: hn.vdlActionIcon }),
        vn = n('97Jx'),
        yn = n.n(vn),
        bn = (n('6U7i'), n('rxPX')),
        gn = Object(bn.a)()
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(A.createLocalApiErrorHandlerWithContextFactory)(
                'DIRECT_MESSAGES_CONVERSATION',
              ),
              removeEntry: _.removeEntry,
              sendMessage: E.m,
            }
          })
          .withAnalytics(),
        _n = '87.5%',
        En = (n('hCOa'), n('87if'), n('dlmX'), n('m9LP'), n('wrlS')),
        On = [],
        Sn = function (e, t) {
          return Object(nt.p)(e, t.entryId) || On
        },
        Cn = function (e) {
          return Object(nt.l)(e).entries
        },
        wn = {
          createLocalApiErrorHandler: Object(A.createLocalApiErrorHandlerWithContextFactory)(
            'DIRECT_MESSAGES_REACTIONS',
          ),
        },
        Rn = Object(x.e)(function () {
          return Object(C.createSelector)(Cn, Sn, O.q, En.d, function (e, t, n, r) {
            var a,
              i = Object(lt.a)(r, { includeInactive: !0 }),
              o = 0
            return {
              reactionsWithCounts: t.reduceRight(function (t, r) {
                var c = e[r] && e[r].data
                if (!c) return t
                if (!i.includes(c.reaction_key)) return t
                var s = (t.get(c.reaction_key) || 0) + 1
                return (
                  t.set(c.reaction_key, s),
                  (null == c ? void 0 : c.sender_id) === n && (a = c.reaction_key),
                  (o += 1),
                  t
                )
              }, new Map()),
              selectedReactionKey: a,
              totalReactionCount: o,
            }
          })
        }, wn),
        In = (n('vfdX'), n('Ee2X'), []),
        kn = function (e, t) {
          return t.entryId
        },
        Pn = function (e) {
          return Object(nt.l)(e).entries
        },
        xn = function (e, t) {
          return Object(nt.p)(e, kn(0, t)) || In
        },
        Tn = function (e, t) {
          return P.e.selectMany(
            e,
            (function (e, t) {
              return Object(nt.q)(e, kn(0, t))
            })(e, t),
          )
        },
        An = {
          removeReaction: nt.k,
          fetchUpdatesIfNeeded: tt.d,
          createLocalApiErrorHandler: Object(A.createLocalApiErrorHandlerWithContextFactory)(
            'DIRECT_MESSAGES_REACTION_SUMMARY_CONTEXT',
          ),
        },
        Mn = Object(x.e)(function () {
          return Object(C.createSelector)(Pn, xn, O.q, Tn, En.d, function (e, t, n, r, a) {
            var i = Object(lt.a)(a, { includeInactive: !0 }),
              o = []
            t.forEach(function (t) {
              var a = e[t] && e[t].data
              if (a && i.includes(a.reaction_key)) {
                var c = r.find(function (e) {
                    return e && e.id_str === a.sender_id
                  }),
                  s = c && {
                    avatarUri: c.profile_image_url_https,
                    userId: c.id_str,
                    reactionKey: a.reaction_key,
                    isLoggedInUser: c.id_str === n,
                    screenName: c.screen_name,
                    name: c.name,
                    isProtected: c.protected,
                    isVerified: c.verified,
                    time: a.time,
                  }
                s && o.push(s)
              }
            }),
              o.sort(function (e, t) {
                return t.time - e.time
              })
            var c = o.findIndex(function (e) {
              return e.userId === n
            })
            return c > -1 && o.push.apply(o, st()(o.splice(0, c))), { loggedInUserId: n, usersWithReactions: o }
          })
        }, An),
        jn = n('TIdA'),
        Dn = n('htQn'),
        Ln = Ze.a.gf5e9ea6,
        Fn = Ze.a.a2d48778,
        Bn = jn.a.createLayoutCache()
      var Nn = re.a.create(function (e) {
          return {
            bodyColumn: { flexShrink: 1, flexGrow: 1, justifyContent: 'center', marginHorizontal: e.spaces.space4 },
            body: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
            bottomBorder: {
              borderBottomColor: e.colors.borderColor,
              borderBottomStyle: 'solid',
              borderBottomWidth: e.borderWidths.small,
            },
            column: { alignItems: 'center', justifyContent: 'center', marginRight: e.spaces.space4 },
            reactionColumn: {
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: e.componentDimensions.gutterHorizontal,
            },
            root: {
              flexDirection: 'row',
              minHeight: '56px',
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
          }
        }),
        Hn = function (e) {
          var t = y.useContext($.a).featureSwitches,
            n = e.onUndoPress,
            r = e.renderUndo,
            a = e.user,
            i = e.withBottomBorder,
            o = a.avatarUri,
            c = a.isProtected,
            s = a.isVerified,
            l = a.name,
            u = a.screenName,
            d = y.useMemo(
              function () {
                return function (e) {
                  e.stopPropagation(), n()
                }
              },
              [n],
            ),
            p = y.createElement(_e.a, { imageLayoutCache: Bn, screenName: u, size: 'xxLarge', uri: o }),
            f = y.createElement(dt, { emojiSize: 'title4', emotion: a.reactionKey, focusable: !1 }),
            h = y.createElement(oe.a, {
              badgeContext: 'content',
              isProtected: c,
              isVerified: s,
              name: l,
              screenName: u,
              withHoverCard: !0,
              withStackedLayout: !0,
            })
          return y.createElement(
            Dn.a,
            { link: { pathname: '/'.concat(u), anchorless: !0 }, style: [Nn.root, i && Nn.bottomBorder] },
            y.createElement(be.a, { style: Nn.reactionColumn }, f),
            y.createElement(be.a, { style: Nn.column }, p),
            y.createElement(be.a, { style: Nn.bodyColumn }, y.createElement(be.a, { style: Nn.body }, h)),
            r
              ? y.createElement(
                  be.a,
                  { style: Nn.column },
                  y.createElement(
                    Pt.a,
                    {
                      accessibilityLabel: Fn({ emoji: Object(lt.b)(a.reactionKey, t) }),
                      onClick: d,
                      size: 'small',
                      type: 'brandText',
                    },
                    Ln,
                  ),
                )
              : null,
          )
        },
        Un = n('xKuM'),
        Vn = n('efqG')
      function Wn(e) {
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
      var zn = Ze.a.b772cd65,
        Kn = Ze.a.c0098d49,
        Gn = Ze.a.j85999eb,
        qn = (function (e) {
          u()(n, e)
          var t = Wn(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              v()(s()(e), '_renderContent', function (t, n) {
                return y.createElement(
                  be.a,
                  null,
                  e._renderHeader(t, n),
                  e._renderUsers(t, n),
                  e._renderDoneButton(t, n),
                )
              }),
              v()(s()(e), '_renderHeader', function (e, t) {
                return 'sheet' === t
                  ? y.createElement(Un.a, { title: Kn, withBottomBorder: !0 })
                  : y.createElement(ge.b, { visuallyHidden: !0 }, Kn)
              }),
              v()(s()(e), '_renderUsers', function (t, n) {
                return y.createElement(
                  be.a,
                  { accessibilityLabel: Gn, style: [Yn.container, 'sheet' === n ? Yn.sheet : Yn.popover] },
                  e._renderUserCells(t),
                )
              }),
              v()(s()(e), '_renderDoneButton', function (e, t) {
                return (
                  'sheet' === t &&
                  y.createElement(
                    Pt.a,
                    { key: 'button_done', onPress: e, style: Yn.cancelButton, type: 'primaryOutlined' },
                    zn,
                  )
                )
              }),
              v()(s()(e), '_renderUserCells', function (t) {
                return e.props.usersWithReactions.filter(Boolean).map(function (n, r) {
                  return y.createElement(Hn, {
                    history: e.props.history,
                    key: n.userId,
                    onUndoPress: e._reactionUndoHandler(n.reactionKey, t),
                    renderUndo: n.isLoggedInUser,
                    user: n,
                    withBottomBorder: r !== e.props.usersWithReactions.length - 1,
                  })
                })
              }),
              v()(s()(e), '_reactionUndoHandler', function (t, n) {
                return function () {
                  var r = e.props,
                    a = r.conversationId,
                    i = r.createLocalApiErrorHandler,
                    o = r.entryId,
                    c = r.fetchUpdatesIfNeeded,
                    s = r.loggedInUserId,
                    l = r.removeReaction,
                    u = { reaction_key: t, conversation_id: a, dm_id: o, perspective: s }
                  n(), l(u).then(e._handleScribeRemoveReaction(t)).then(c).catch(i())
                }
              }),
              v()(s()(e), '_handleScribeRemoveReaction', function (t) {
                return function () {
                  e.props.analytics.scribe({
                    page: 'app',
                    section: 'twitter_service',
                    component: 'direct_messages',
                    element: 'delete_reaction',
                    action: 'success',
                    data: { reaction_emotion: t },
                  })
                }
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.children
                  return y.createElement(
                    Vn.a,
                    { renderContent: this._renderContent, withFixedPosition: this.context.isDrawer },
                    e,
                  )
                },
              },
            ]),
            n
          )
        })(y.PureComponent)
      v()(qn, 'contextType', pe.a)
      var Yn = re.a.create(function (e) {
          return {
            cancelButton: { marginHorizontal: e.spaces.space12, marginVertical: e.spaces.space12 },
            container: { overflowY: 'auto', paddingVertical: e.spaces.space12 },
            popover: { maxHeight: '35vh', minWidth: '320px' },
            sheet: { maxHeight: '65vh' },
          }
        }),
        Xn = Object(wt.a)(Object(ht.a)(Mn(qn)))
      function Qn(e, t) {
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
      function Zn(e) {
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
      var Jn = Ze.a.h95f9e76,
        $n = (function (e) {
          u()(n, e)
          var t = Zn(n)
          function n(e) {
            var r
            return (
              a()(this, n),
              (r = t.call(this, e)),
              v()(s()(r), '_handleScribeDMReactionSummary', function () {
                r.props.analytics.scribe({ component: 'dm_reaction_summary', action: 'show' })
              }),
              v()(s()(r), '_onSetReactionsNode', function (e) {
                r._measureWidths(e || void 0)
              }),
              v()(s()(r), '_renderReactions', function (e) {
                var t = e.isHovered,
                  n = r.props,
                  a = n.reactionsWithCounts,
                  i = n.selectedReactionKey,
                  o = r.state.emojiSize || 'headline1',
                  c = a.size - 1
                return Array.from(a, function (e, n) {
                  var r = Pe()(e, 2),
                    a = r[0],
                    s = r[1]
                  return y.createElement(dt, {
                    count: s,
                    emojiSize: o,
                    emotion: a,
                    enableHoverStyle: !1,
                    focusable: !0,
                    key: a,
                    style: [
                      n === c && er.rightPadding,
                      er.elementPadding,
                      i === a ? er.selfSelect : null,
                      t && er.isHoveredDMReaction,
                    ],
                  })
                })
              }),
              (r.state = { emojiSize: void 0 }),
              r
            )
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.conversationId,
                    n = e.entryId,
                    r = e.isEndOfDM,
                    a = e.isSent,
                    i = e.totalReactionCount,
                    o = this.state.emojiSize
                  if (0 === i) return null
                  var c = ne.a.generate({
                      backgroundColor: re.a.theme.colors.gray50,
                      color: re.a.theme.colors.gray700,
                    }),
                    s = Jn({ reactionCount: i })
                  return y.createElement(
                    be.a,
                    {
                      style: [
                        er.container,
                        r ? er.marginShort : er.marginLong,
                        a ? er.alignRight : er.alignLeft,
                        o ? er.visible : er.invisible,
                      ],
                    },
                    y.createElement(
                      Xn,
                      { conversationId: t, entryId: n },
                      y.createElement(
                        ie.a,
                        {
                          accessibilityLabel: s,
                          focusable: !0,
                          interactiveStyles: c,
                          onPress: this._handleScribeDMReactionSummary,
                          ref: this._onSetReactionsNode,
                          style: er.content,
                        },
                        this._renderReactions,
                      ),
                    ),
                  )
                },
              },
              {
                key: '_measureWidths',
                value: function (e) {
                  var t = e && e.parentElement,
                    n = { emojiSize: 'headline1' }
                  if (t) {
                    var r = t.getBoundingClientRect().width,
                      a = (e ? e.getBoundingClientRect() : {}).width
                    ;(void 0 === a ? 0 : a) > r && (n.emojiSize = 'subtext2')
                  }
                  this.setState(
                    (function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {}
                        t % 2
                          ? Qn(Object(n), !0).forEach(function (t) {
                              v()(e, t, n[t])
                            })
                          : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                          : Qn(Object(n)).forEach(function (t) {
                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            })
                      }
                      return e
                    })({}, n),
                  )
                },
              },
            ]),
            n
          )
        })(y.PureComponent),
        er = re.a.create(function (e) {
          return {
            container: { boxSizing: 'border-box' },
            content: { borderRadius: e.borderRadii.infinite, display: 'flex', flexDirection: 'row' },
            rightPadding: { paddingRight: e.spaces.space2 },
            elementPadding: {
              borderColor: e.colors.transparent,
              borderWidth: e.borderWidths.small,
              paddingBottom: e.spaces.space2,
              paddingTop: e.spaces.space2,
              paddingLeft: 'calc('.concat(e.spaces.space2, ' * 2)'),
            },
            selfSelect: { borderColor: re.a.theme.colors.gray50, borderRadius: e.borderRadii.infinite },
            alignLeft: { alignSelf: 'flex-start' },
            alignRight: { alignSelf: 'flex-end' },
            invisible: { opacity: 0 },
            visible: { opacity: 1 },
            marginShort: { marginBottom: e.spaces.space4 },
            marginLong: { marginBottom: e.spaces.space12 },
            isHoveredDMReaction: { borderColor: e.colors.transparent, cursor: 'pointer' },
          }
        }),
        tr = Object(ht.a)(Rn($n)),
        nr = n('Xrkv')
      function rr(e) {
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
      var ar = Ze.a.icd0bf34,
        ir = Ze.a.e8bd8fec,
        or = Ze.a.b2d32fad,
        cr = Ze.a.a763d33e,
        sr = (function (e) {
          u()(n, e)
          var t = rr(n)
          function n(e) {
            var r
            return (
              a()(this, n),
              (r = t.call(this, e)),
              v()(s()(r), '_handlePress', function (e) {
                e.stopPropagation(), r.setState({ showFullList: !0 })
              }),
              (r.state = { showFullList: !1 }),
              r
            )
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.isGroupDM,
                    n = e.isSeenByEveryone,
                    r = e.namesToDisplay
                  return y.createElement(
                    be.a,
                    { style: lr.root },
                    y.createElement(
                      ge.b,
                      { align: 'right', color: 'gray700', size: 'subtext2', style: lr.seenLabel },
                      this._renderSeenLabel(),
                    ),
                    !n && t && r.length ? this._renderNameList() : null,
                  )
                },
              },
              {
                key: '_renderSeenLabel',
                value: function () {
                  var e = this.props,
                    t = e.isGroupDM,
                    n = e.isSeenByEveryone,
                    r = e.namesToDisplay
                  return n ? (t ? or : ar) : r.length ? cr({ count: r.length }) : ir
                },
              },
              {
                key: '_renderNameList',
                value: function () {
                  var e = this,
                    t = this.props.namesToDisplay,
                    n = !this.state.showFullList && t.length > 10,
                    r = t.length - 10,
                    a = function (t) {
                      var n = t.namesList,
                        r = t.othersCount
                      return y.createElement(
                        Ze.a.I18NFormatMessage,
                        { $i18n: 'f6464106' },
                        y.createElement(ge.b, null, n),
                        y.createElement(
                          ge.b,
                          { color: 'link', onPress: e._handlePress },
                          Ze.a.d7a0722f({ othersCount: r }),
                        ),
                      )
                    }
                  n && (t = t.slice(0, 10))
                  var i = Object(nr.a)(t, n)
                  return y.createElement(
                    ge.b,
                    { align: 'right', color: 'gray700', size: 'subtext2', style: lr.namesList },
                    n ? y.createElement(a, { namesList: i, othersCount: r }) : y.createElement(ge.b, null, i),
                  )
                },
              },
            ]),
            n
          )
        })(y.PureComponent),
        lr = re.a.create(function (e) {
          return {
            root: { alignItems: 'flex-end', width: 'calc(100% - '.concat(e.spaces.space2, ')') },
            seenLabel: { cursor: 'pointer' },
            namesList: { marginBottom: e.spaces.space2, whiteSpace: 'pre-line' },
          }
        }),
        ur = sr,
        dr = n('t0aI'),
        pr = function (e) {
          var t = e.entryId,
            n = e.participants,
            r = e.user,
            a = Object.keys(n),
            i = fr({ entryId: t, participants: n, user: r })
          return { namesToDisplay: i, isSeenByEveryone: i.length === a.length - 1 }
        },
        fr = function (e) {
          var t = e.entryId,
            n = e.participants,
            r = e.user
          return Object.keys(n).reduce(function (e, a) {
            var i = n[a],
              o = i.join_conversation_event_id,
              c = i.last_read_event_id,
              s = i.user.name,
              l = a !== r.id_str,
              u = c && 1 !== Object(dr.a)(t, c),
              d = !o || 1 !== Object(dr.a)(o, t)
            return l && u && d && e.push(s), e
          }, [])
        },
        hr = n('IMYl'),
        mr = n('21zW'),
        vr = n('gmpV')
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
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var br = Ze.a.fad48ee9,
        gr = Ze.a.ba60339a,
        _r = Ze.a.d338f53e,
        Er = Ze.a.ae7d7a24,
        Or = Ze.a.d725a288,
        Sr = Ze.a.bbe74f3f,
        Cr = Ze.a.h0e4cdf4,
        wr = Ze.a.bfbc051c,
        Rr = (function (e) {
          u()(n, e)
          var t = yr(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              v()(s()(e), '_handleRemove', function () {
                var t = e.props,
                  n = t.conversationId,
                  r = t.entryId
                ;(0, t.removeEntry)(n, null, { id: r })
              }),
              v()(s()(e), '_handleTryAgain', function () {
                var t = e.props,
                  n = t.conversationId,
                  r = t.entryText,
                  a = t.localMediaId
                ;(0, t.sendMessage)({
                  tweetAttachment: void 0,
                  senderId: t.user.id_str,
                  conversationId: n,
                  text: r,
                  localMediaId: a,
                }),
                  e._handleRemove()
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
                    t = e.isSent,
                    n = e.onPress,
                    r = this._renderSending(),
                    a = this._renderError(),
                    i = this._renderTimestamp(),
                    o = this._renderReadReceipt(),
                    c = this._renderSentCheckmark(),
                    s = this._renderReactions(),
                    l = i || o || c,
                    u = r || a || s || l,
                    d =
                      this.context.featureSwitches.isTrue('dm_vdl_enabled') &&
                      this.context.featureSwitches.isTrue('dm_vdl_chat_p0_enabled')
                  return (
                    u &&
                    y.createElement(
                      be.a,
                      { style: [Ir.root, d && Ir.vdlRootMargin, t && Ir.sentMessage] },
                      r,
                      a,
                      s,
                      l
                        ? y.createElement(
                            ie.a,
                            { interactiveStyles: null, onPress: n, style: t && Ir.sentContainer },
                            y.createElement(be.a, { style: t && Ir.groupedItems }, i, c),
                            o,
                          )
                        : null,
                    )
                  )
                },
              },
              {
                key: '_renderError',
                value: function () {
                  return (
                    this.props.isError &&
                    y.createElement(
                      be.a,
                      null,
                      y.createElement(ge.b, { align: 'right', color: 'gray700', size: 'subtext2' }, Er),
                      y.createElement(
                        be.a,
                        { style: Ir.groupedItems },
                        y.createElement(
                          ge.b,
                          {
                            accessibilityRole: 'button',
                            color: 'magenta500',
                            onPress: this._handleRemove,
                            size: 'subtext2',
                            withInteractiveStyling: !0,
                          },
                          gr,
                        ),
                        y.createElement(mr.a, null),
                        y.createElement(
                          ge.b,
                          {
                            accessibilityRole: 'button',
                            color: 'primary',
                            onPress: this._handleTryAgain,
                            size: 'subtext2',
                            withInteractiveStyling: !0,
                          },
                          _r,
                        ),
                      ),
                    )
                  )
                },
              },
              {
                key: '_renderReactions',
                value: function () {
                  var e = this.props,
                    t = e.conversationId,
                    n = e.entryId,
                    r = e.isLastRapidFire,
                    a = e.isRapidFire,
                    i = e.isSent,
                    o = e.withUserAvatar,
                    c = !a || r
                  return t
                    ? y.createElement(
                        be.a,
                        { style: o && Ir.footerPadderWithAvatar },
                        y.createElement(tr, { conversationId: t, entryId: n, isEndOfDM: c, isSent: i }),
                      )
                    : null
                },
              },
              {
                key: '_renderReadReceipt',
                value: function () {
                  var e = this.props,
                    t = e.entryId,
                    n = e.isActive,
                    r = e.isDraft,
                    a = e.isError,
                    i = e.isGroupDM,
                    o = e.isSent,
                    c = e.participants,
                    s = e.user
                  return n && o && !r && !a
                    ? y.createElement(ur, yn()({ isGroupDM: i }, pr({ entryId: t, participants: c, user: s })))
                    : null
                },
              },
              {
                key: '_renderSending',
                value: function () {
                  var e = this.props,
                    t = e.isDraft,
                    n = e.isError
                  return t && !n && y.createElement(ge.b, { align: 'right', color: 'gray700', size: 'subtext2' }, br)
                },
              },
              {
                key: '_renderSentCheckmark',
                value: function () {
                  var e = this.props,
                    t = e.entryId,
                    n = e.isDraft,
                    r = e.isError,
                    a = e.isLastRapidFire,
                    i = e.isRapidFire,
                    o = e.isSent,
                    c = e.participants,
                    s = e.user,
                    l = pr({ entryId: t, participants: c, user: s }).isSeenByEveryone
                  return !o || n || r || (i && !a)
                    ? null
                    : y.createElement(
                        ge.b,
                        { color: l ? 'primary' : 'gray700', style: Ir.checkmarkContainer },
                        y.createElement(hr.a, { style: Ir.checkmark }),
                      )
                },
              },
              {
                key: '_renderTimestamp',
                value: function () {
                  var e = this.props,
                    t = e.entryTime,
                    n = e.isDraft,
                    r = e.isError,
                    a = e.isGroupDM,
                    i = e.isLastRapidFire,
                    o = e.isRapidFire,
                    c = e.isSent,
                    s = e.user.name,
                    l = e.withUserAvatar
                  if (n || r || (o && !i)) return null
                  var u,
                    d = new Date(Number(t))
                  u = Object(vr.c)(d) ? Or(d) : Object(vr.d)(d) ? Sr({ time: Or(d) }) : Object(vr.e)(d) ? Cr(d) : wr(d)
                  var p = a && !c,
                    f = c ? 'right' : 'left'
                  return y.createElement(
                    be.a,
                    { style: [l && Ir.footerPadderWithAvatar, c && Ir.timestamp] },
                    y.createElement(
                      ge.b,
                      { align: f, color: 'gray700', size: 'subtext2', withInteractiveStyling: c || !xt.a.isEnabled },
                      p &&
                        y.createElement(Ze.a.I18NFormatMessage, { $i18n: 'c8b914d4' }, y.createElement(ge.b, null, s)),
                      p && ' ',
                      u,
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(y.PureComponent)
      v()(Rr, 'contextType', $.a)
      var Ir = re.a.create(function (e) {
          return {
            root: { marginTop: e.spaces.space2, overflow: 'hidden', width: _n },
            vdlRootMargin: { marginTop: 'calc('.concat(e.spaces.space8, ' - ').concat(e.spaces.space2, ')') },
            sentMessage: { alignSelf: 'flex-end', justifyContent: 'flex-end' },
            sentContainer: { flexDirection: 'column' },
            groupedItems: { justifyContent: 'flex-end', flexDirection: 'row' },
            timestamp: { cursor: 'pointer' },
            checkmark: { cursor: 'pointer', flexShrink: 0, height: '1rem', paddingLeft: e.spaces.space2 },
            checkmarkContainer: { lineHeight: '1' },
            footerPadderWithAvatar: {
              marginLeft: 'calc('.concat(e.spaces.space40, ' + ').concat(e.spaces.space12, ')'),
            },
          }
        }),
        kr = gn(Rr),
        Pr = n('jtO7'),
        xr = re.a.create(function (e) {
          return {
            root: {
              borderColor: e.colors.gray50,
              borderStyle: 'solid',
              borderWidth: e.borderWidths.small,
              borderBottomWidth: e.borderWidths.none,
              boxSizing: 'border-box',
              overflow: 'hidden',
            },
            isLast: { borderBottomWidth: e.borderWidths.small },
            insideTopRoundedSent: { borderTopLeftRadius: e.borderRadii.xLarge },
            insideTopRoundedReceived: { borderTopRightRadius: e.borderRadii.xLarge },
            outsideTopRoundedSent: { borderTopRightRadius: e.borderRadii.xLarge },
            outsideTopRoundedReceived: { borderTopLeftRadius: e.borderRadii.xLarge },
            sentLast: { borderBottomLeftRadius: e.borderRadii.xLarge },
            receivedLast: { borderBottomRightRadius: e.borderRadii.xLarge },
          }
        }),
        Tr = function (e) {
          var t = e.insideTopRounded,
            n = e.isLast,
            r = e.isSent,
            a = e.label,
            i = e.onClick,
            o = e.outsideTopRounded,
            c = e.tcoUrl,
            s = [
              xr.root,
              n && xr.isLast,
              n && r && xr.sentLast,
              n && !r && xr.receivedLast,
              t && r && xr.insideTopRoundedSent,
              t && !r && xr.insideTopRoundedReceived,
              o && r && xr.outsideTopRoundedSent,
              o && !r && xr.outsideTopRoundedReceived,
            ]
          return y.createElement(
            be.a,
            { style: s },
            y.createElement(Pr.a, { align: 'center', color: 'primary', label: a, link: c, onClick: i }),
          )
        },
        Ar = n('fs1G')
      function Mr(e) {
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
      var jr = (function (e) {
        u()(n, e)
        var t = Mr(n)
        function n() {
          return a()(this, n), t.apply(this, arguments)
        }
        return (
          o()(n, [
            {
              key: 'componentDidMount',
              value: function () {
                this.props.onImpression()
              },
            },
            {
              key: 'render',
              value: function () {
                var e = this.props,
                  t = e.callToActions,
                  n = e.isSent,
                  r = e.onCtaClick,
                  a = e.withSticker,
                  i = e.withUserText,
                  o = t.map(function (e, o) {
                    var c = 0 === o
                    return y.createElement(Tr, {
                      insideTopRounded: c && (a || !i),
                      isLast: o === t.length - 1,
                      isSent: n,
                      key: o,
                      label: e.label,
                      onClick: r,
                      outsideTopRounded: c && a,
                      tcoUrl: e.tco_url,
                    })
                  })
                return y.createElement(be.a, null, o)
              },
            },
          ]),
          n
        )
      })(y.Component)
      v()(jr, 'defaultProps', { onCtaClick: Ar.a, onImpression: Ar.a })
      var Dr = jr,
        Lr = (n('1IsZ'), n('vjRr')),
        Fr = n('EGrD'),
        Br = function (e, t) {
          return Lr.a.createManyHydratedSelector([t.cardUrl])(e)[0]
        },
        Nr = Object(bn.a)()
          .propsFromState(function () {
            return { adFreeArticleDomains: Fr.c, card: Br }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(A.createLocalApiErrorHandlerWithContextFactory)('DM_CARD_MESSAGE'),
              fetchAdFreeToken: Fr.a,
              loadAdFreeArticleDomainsFromPersistence: Fr.b,
              popOutConversation: _.popOutConversation,
            }
          }),
        Hr = re.a.create(function (e) {
          return { root: { width: '100%' }, invisible: { opacity: 0 }, visible: { opacity: 1 } }
        }),
        Ur = function (e) {
          var t = e.attachmentContent,
            n = e.attachmentHeader,
            r = e.isVisible,
            a = void 0 === r || r,
            i = e.textContent
          return y.createElement(be.a, { style: [a ? Hr.visible : Hr.invisible, Hr.root] }, n, t, i)
        },
        Vr = n('cTG8'),
        Wr = function (e) {
          var t = e.excludeCardUrl,
            n = e.isActive,
            r = void 0 !== n && n,
            a = e.isFailedDraft,
            i = e.isFirstRapidFire,
            o = void 0 !== i && i,
            c = e.isRapidFire,
            s = void 0 !== c && c,
            l = e.isSent,
            u = e.hasAssociatedAttachment,
            d = e.messageData,
            p = void 0 === d ? {} : d,
            f = e.rootStyle,
            h = e.tweetId,
            m = e.withCta,
            v = e.withMediaLinks,
            b = e.withMessageBubble,
            g = y.useContext($.a).featureSwitches,
            _ = g.isTrue('dm_vdl_enabled') && g.isTrue('dm_vdl_chat_p0_enabled'),
            E = [
              f,
              b && zr.messageTextContainer,
              b && l && zr.sent,
              b && !l && zr.received,
              a && zr.failedDraft,
              s && !o && !l && zr.rapidFireReceived,
              s && !o && l && zr.rapidFireSent,
              u && l && zr.hasAssociatedAttachmentSent,
              u && !l && zr.hasAssociatedAttachmentReceived,
              b && _ && l && zr.vdlSent,
              b && r && l && zr.activeSent,
              b && _ && r && l && zr.vdlActiveSent,
              b && r && !l && !xt.a.isEnabled && zr.activeReceived,
              m && zr.withCta,
            ],
            O = [zr.tweetText, b && zr.textAlignLeft, !b && l && zr.textAlignRight],
            S = re.a.theme.colors,
            C = S.gray0,
            w = S.magenta500,
            R = S.primary,
            I = S.text,
            k = S.white,
            P = ne.a.generate({ color: l ? k : I, backgroundColor: a ? w : l ? R : C }),
            x = (p.text && p.text.length) || 0
          return y.createElement(
            ie.a,
            { accessibilityRole: 'none', interactive: l, interactiveStyles: b ? P : null, style: E },
            y.createElement(Vr.a, {
              color: re.a.isDarkMode() || l ? 'whiteOnColor' : void 0,
              displayTextRange: [0, x],
              entities: p.entities,
              excludeCardUrl: t,
              linkColor: (b && l) || re.a.isDarkMode() ? 'whiteOnColor' : 'link',
              linkify: !0,
              quotedTweetId: h,
              size: b ? void 0 : 'title2',
              style: O,
              text: p.text || '',
              underlineLinks: !0,
              withMediaLinks: v,
            }),
          )
        },
        zr = re.a.create(function (e) {
          return {
            tweetText: { overflow: 'hidden', wordBreak: 'break-word' },
            messageTextContainer: {
              borderRadius: e.borderRadii.xLarge,
              boxSizing: 'border-box',
              maxWidth: '100%',
              paddingVertical: e.spaces.space12,
              paddingHorizontal: e.spaces.space16,
            },
            textAlignLeft: { textAlign: 'left' },
            textAlignRight: { textAlign: 'right' },
            sent: {
              alignSelf: 'flex-end',
              backgroundColor: e.colors.primary,
              borderBottomRightRadius: e.borderRadii.none,
              borderColor: e.colors.primary,
            },
            received: {
              alignSelf: 'flex-start',
              backgroundColor: e.colors.dmReceivedBubbleBackground,
              borderBottomLeftRadius: e.borderRadii.none,
              borderColor: e.colors.gray200,
            },
            vdlSent: { backgroundColor: e.colors.blue600 },
            activeSent: { backgroundColor: e.colors.lightPrimary },
            activeReceived: { backgroundColor: e.colors.gray200 },
            vdlActiveSent: { backgroundColor: e.colors.blue700 },
            failedDraft: { backgroundColor: e.colors.magenta500 },
            rapidFireReceived: { borderTopLeftRadius: e.borderRadii.none },
            rapidFireSent: { borderTopRightRadius: e.borderRadii.none },
            withCta: { borderBottomRightRadius: e.borderRadii.none, borderBottomLeftRadius: e.borderRadii.none },
            hasAssociatedAttachmentSent: { borderTopRightRadius: e.borderRadii.none },
            hasAssociatedAttachmentReceived: { borderTopLeftRadius: e.borderRadii.none },
          }
        })
      Wr.defaultProps = { withMediaLinks: !1 }
      var Kr = Wr,
        Gr = function (e) {
          var t = e.isActive,
            n = void 0 !== t && t,
            r = e.isFailedDraft,
            a = e.isFirstRapidFire,
            i = void 0 !== a && a,
            o = e.isRapidFire,
            c = void 0 !== o && o,
            s = e.isSent,
            l = e.messageData,
            u = e.withCta,
            d = e.withMessageBubble
          return y.createElement(Kr, {
            isActive: n,
            isFailedDraft: r,
            isFirstRapidFire: i,
            isRapidFire: c,
            isSent: s,
            messageData: l,
            withCta: u,
            withMediaLinks: !0,
            withMessageBubble: d,
          })
        },
        qr = n('LSr9'),
        Yr = n('aX4+'),
        Xr = n('/Ikv')
      function Qr(e) {
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
      var Zr = Xr.a.CardNames,
        Jr = (function (e) {
          u()(n, e)
          var t = Qr(n)
          function n() {
            var e, r
            a()(this, n)
            for (var i = arguments.length, o = new Array(i), c = 0; c < i; c++) o[c] = arguments[c]
            return (
              (r = t.call.apply(t, [this].concat(o))),
              v()(s()(r), 'state', { attachmentWidth: void 0, textContentWidth: void 0 }),
              v()(
                s()(r),
                '_hasClaimsForAdFreeArticles',
                null === (e = r.context.userClaims) || void 0 === e
                  ? void 0
                  : e.isTrueAndEnabled('subscriptions_feature_1006'),
              ),
              v()(s()(r), '_handleAttachmentLayout', function (e) {
                var t = e.nativeEvent.layout.width
                if (r.state.attachmentWidth !== t) {
                  var n = { attachmentWidth: t }
                  r.setState(n)
                }
              }),
              v()(s()(r), '_handleOnClick', function (e) {
                var t = r.props,
                  n = t.card.binding_values,
                  a = t.conversationId,
                  i = t.popOutConversation
                if ((a && i(a), r._hasClaimsForAdFreeArticles)) {
                  var o = r.props,
                    c = o.adFreeArticleDomains,
                    s = o.createLocalApiErrorHandler,
                    l = o.fetchAdFreeToken,
                    u = new qr.a(l, s()).getAdFreeArticlesClickHandler({
                      destinationUrl: Xr.a.getBindingValue(n, 'card_url'),
                      linkDomain: Xr.a.getBindingValue(n, 'domain'),
                      adFreeArticleDomains: c,
                    }),
                    d = Pe()(u, 2),
                    p = d[0],
                    f = d[1]
                  p && f(e)
                }
              }),
              v()(s()(r), '_handleTextContentLayout', function (e) {
                var t = e.nativeEvent.layout.width
                if (r.state.textContentWidth !== t) {
                  var n = { textContentWidth: t }
                  r.setState(n)
                }
              }),
              r
            )
          }
          return (
            o()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._hasClaimsForAdFreeArticles && this.props.loadAdFreeArticleDomainsFromPersistence()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.card,
                    n = e.hasUserText,
                    r = e.isActive,
                    a = e.isFailedDraft,
                    i = e.isFirstRapidFire,
                    o = e.isRapidFire,
                    c = e.isSent,
                    s = e.messageData,
                    l = e.withCta,
                    u = e.withMessageBubble,
                    d = this.state,
                    p = d.attachmentWidth,
                    f = d.textContentWidth,
                    h = !!Object.values(Zr).includes(t.name),
                    m = Bt(n, p, f),
                    v = m.isAttachmentSquared ? 'both' : c ? 'right' : 'left',
                    b = y.createElement(
                      be.a,
                      { onClick: this._handleOnClick, onLayout: this._handleAttachmentLayout },
                      y.createElement(Yr.a, {
                        card: { name: t.name, url: t.url, binding_values: t.binding_values, users: t.users },
                        cardContext: { tweetUserId: s.sender_id },
                        dmSentOrReceived: c ? 'sent' : 'received',
                        withSquareBottomBorderRadius: v,
                      }),
                    ),
                    g = n
                      ? y.createElement(
                          be.a,
                          {
                            onLayout: this._handleTextContentLayout,
                            style: c ? $r.sentMessageWrapper : $r.receivedMessageWrapper,
                          },
                          y.createElement(Kr, {
                            excludeCardUrl: t.url,
                            hasAssociatedAttachment: !0,
                            isActive: r,
                            isFailedDraft: a,
                            isFirstRapidFire: i,
                            isRapidFire: o,
                            isSent: c,
                            messageData: s,
                            rootStyle: m.isTextSquared ? (c ? $r.textSentSquared : $r.textReceivedSquared) : void 0,
                            withCta: l,
                            withMessageBubble: u,
                          }),
                        )
                      : null
                  return h
                    ? y.createElement(Ur, { attachmentContent: b, isVisible: m.compositeRendered, textContent: g })
                    : y.createElement(Gr, {
                        isActive: r,
                        isFailedDraft: a,
                        isFirstRapidFire: i,
                        isRapidFire: o,
                        isSent: c,
                        messageData: s,
                        withCta: l,
                        withMessageBubble: u,
                      })
                },
              },
            ]),
            n
          )
        })(y.Component)
      v()(Jr, 'defaultProps', { hasUserText: !1 }), v()(Jr, 'contextType', $.a)
      var $r = re.a.create(function (e) {
          return {
            attachmentReceivedSquared: { borderBottomRightRadius: e.borderRadii.none },
            attachmentSentSquared: { borderBottomLeftRadius: e.borderRadii.none },
            card: { marginBottom: e.spaces.space2 },
            receivedMessageWrapper: { alignSelf: 'flex-start' },
            sentMessageWrapper: { alignSelf: 'flex-end' },
            received: { borderBottomLeftRadius: e.borderRadii.none },
            sent: { borderBottomRightRadius: e.borderRadii.none },
            textReceivedSquared: { borderTopRightRadius: e.borderRadii.none },
            textSentSquared: { borderTopLeftRadius: e.borderRadii.none },
          }
        }),
        ea = Nr(Jr)
      function ta(e) {
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
      var na = Ze.a.f720438f,
        ra = (function (e) {
          u()(n, e)
          var t = ta(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              v()(s()(e), 'state', { attachmentWidth: void 0, textContentWidth: void 0 }),
              v()(s()(e), '_getSquareBottomStyles', function (t) {
                var n = e.props.isSent,
                  r = 'left'
                return t ? (r = 'both') : n && (r = 'right'), aa[r]
              }),
              v()(s()(e), '_handleAttachmentLayout', function (t) {
                var n = t.nativeEvent.layout.width
                e.state.attachmentWidth !== n && e.setState({ attachmentWidth: n })
              }),
              v()(s()(e), '_handleTextContentLayout', function (t) {
                var n = t.nativeEvent.layout.width
                e.state.textContentWidth !== n && e.setState({ textContentWidth: n })
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
                    t = e.hasUserText,
                    n = e.isActive,
                    r = e.isFailedDraft,
                    a = e.isFirstRapidFire,
                    i = e.isRapidFire,
                    o = e.isSent,
                    c = e.messageData,
                    s = e.withCta,
                    l = e.withMessageBubble,
                    u = this.state,
                    d = u.attachmentWidth,
                    p = u.textContentWidth
                  if (!c || !c.attachment || !c.attachment.fleet) return null
                  var f = Bt(t, d, p),
                    h = f.compositeRendered,
                    m = f.isAttachmentSquared,
                    v = f.isTextSquared,
                    b = [
                      ia.tombstoneWrapper,
                      o ? ia.sentMessageWrapper : ia.receivedMessageWrapper,
                      this._getSquareBottomStyles(m),
                    ],
                    g = y.createElement(
                      be.a,
                      { onLayout: this._handleAttachmentLayout, style: b },
                      y.createElement(ge.b, { color: 'gray700' }, na),
                    ),
                    _ = t
                      ? y.createElement(
                          be.a,
                          {
                            onLayout: this._handleTextContentLayout,
                            style: [
                              o ? ia.sentMessageWrapper : ia.receivedMessageWrapper,
                              !l && ia.fleetReactionSpacing,
                            ],
                          },
                          y.createElement(Kr, {
                            hasAssociatedAttachment: !0,
                            isActive: n,
                            isFailedDraft: r,
                            isFirstRapidFire: a,
                            isRapidFire: i,
                            isSent: o,
                            messageData: c,
                            rootStyle: v ? (o ? ia.sentSquared : ia.receivedSquared) : void 0,
                            withCta: s,
                            withMessageBubble: l,
                          }),
                        )
                      : null
                  return y.createElement(Ur, { attachmentContent: g, isVisible: h, textContent: _ })
                },
              },
            ]),
            n
          )
        })(y.Component),
        aa = re.a.create(function (e) {
          return {
            both: { borderBottomRightRadius: e.borderRadii.none, borderBottomLeftRadius: e.borderRadii.none },
            left: { borderBottomLeftRadius: e.borderRadii.none },
            right: { borderBottomRightRadius: e.borderRadii.none },
          }
        }),
        ia = re.a.create(function (e) {
          return {
            fleetReactionSpacing: { marginTop: e.spaces.space4 },
            receivedMessageWrapper: { alignSelf: 'flex-start' },
            receivedSquared: { borderTopRightRadius: e.borderRadii.none },
            sentMessageWrapper: { alignSelf: 'flex-end' },
            sentSquared: { borderTopLeftRadius: e.borderRadii.none },
            tombstoneWrapper: {
              backgroundColor: e.colors.gray0,
              borderColor: e.colors.gray50,
              borderRadius: e.borderRadii.xLarge,
              boxSizing: 'border-box',
              flexDirection: 'row',
              borderWidth: e.borderWidths.small,
              paddingHorizontal: e.spaces.space16,
              paddingVertical: e.spaces.space12,
              overflow: 'auto',
            },
          }
        }),
        oa = ra,
        ca = n('prG5'),
        sa = n('RCZO'),
        la = n('A91F'),
        ua = Ze.a.b327c129,
        da = function (e) {
          e.stopPropagation()
        },
        pa = function (e) {
          var t = e.media,
            n = e.mediaUrl,
            r = t.ext_alt_text || ua,
            a = t.media_url_https,
            i = t.original_info || {},
            o = i.height,
            c = i.width,
            s = Object(sa.b)(t).rgb,
            l = y.createElement(ca.a, {
              accessibilityLabel: r,
              aspectMode: la.a.withinRange(9 / 16, 10),
              backgroundColor: s,
              image: { url: a, width: c, height: o },
              shouldShowAltLabel: !!t.ext_alt_text,
            })
          return n ? y.createElement(ie.a, { interactiveStyles: null, link: n, onPress: da }, l) : l
        },
        fa = n('Modb'),
        ha = n('lklz'),
        ma = n('XrEN'),
        va = n('ZvMt'),
        ya = function (e) {
          var t = e.media,
            n = e.messageId,
            r = t && ma.a.extractVideoProps(ha.b.forDm(n), t)
          return r
            ? y.createElement(
                fa.a,
                yn()({}, r, { aspectRatio: va.a.getAspectRatio(t.video_info), withPostPlayback: !0 }),
              )
            : null
        },
        ba = Object(bn.a)().withAnalytics()
      function ga(e) {
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
      var _a = (function (e) {
        u()(n, e)
        var t = ga(n)
        function n(e, r) {
          var i
          return (
            a()(this, n),
            (i = t.call(this, e, r)),
            v()(s()(i), '_handleLayout', function (e) {
              var t = e.nativeEvent.layout.width
              i.state.width !== t && i.setState({ width: t })
            }),
            v()(s()(i), '_getElement', function () {
              var e = i.props,
                t = e.contentType,
                n = e.isSensitive
              return ''.concat(n ? 'sensitive' : 'untrusted', '_').concat(t, '_interstitial')
            }),
            v()(s()(i), '_handleClick', function () {
              var e = i.props.analytics
              i.setState({ hide: !1 }), e.scribe({ element: i._getElement(), action: 'reveal' })
            }),
            (i.state = { hide: !0, width: 0 }),
            i
          )
        }
        return (
          o()(n, [
            {
              key: 'componentDidMount',
              value: function () {
                this.props.analytics.scribe({ element: this._getElement(), action: 'impression' })
              },
            },
            {
              key: 'render',
              value: function () {
                var e = this.props,
                  t = e.children,
                  n = e.ctaText,
                  r = e.description,
                  a = e.withSquareBottomBorderRadius,
                  i = this.state,
                  o = i.hide,
                  c = i.width < re.a.theme.breakpoints.micro
                return o
                  ? y.createElement(
                      be.a,
                      {
                        focusable: !0,
                        onLayout: this._handleLayout,
                        style: [
                          Oa.root,
                          c ? { flexDirection: 'column' } : { flexDirection: 'row', alignItems: 'center' },
                          a && Ea[a],
                        ],
                      },
                      y.createElement(be.a, { style: Oa.description }, y.createElement(ge.b, null, r)),
                      y.createElement(
                        be.a,
                        { style: [Oa.button, c ? Oa.breakButtonWrapper : void 0] },
                        y.createElement(
                          Pt.a,
                          { onClick: this._handleClick, size: 'small', style: Oa.buttonElement, type: 'brandText' },
                          n,
                        ),
                      ),
                    )
                  : t
              },
            },
          ]),
          n
        )
      })(y.PureComponent)
      v()(_a, 'defaultProps', { isSensitive: !1 })
      var Ea = re.a.create(function (e) {
          return {
            both: { borderBottomRightRadius: e.borderRadii.none, borderBottomLeftRadius: e.borderRadii.none },
            left: { borderBottomLeftRadius: e.borderRadii.none },
            right: { borderBottomRightRadius: e.borderRadii.none },
          }
        }),
        Oa = re.a.create(function (e) {
          return {
            breakButtonWrapper: {
              marginTop: re.a.theme.spaces.space4,
              marginLeft: 'calc(-1 * '.concat(e.spaces.space12, ')'),
            },
            button: { flexGrow: 1, alignItems: 'flex-start' },
            buttonElement: { paddingHorizontal: e.spaces.space12 },
            description: { flexGrow: 1, flexShrink: 1 },
            root: {
              backgroundColor: e.colors.gray0,
              borderColor: e.colors.gray50,
              borderRadius: e.borderRadii.xLarge,
              boxSizing: 'border-box',
              borderWidth: e.borderWidths.small,
              maxWidth: '100%',
              paddingLeft: e.spaces.space16,
              paddingTop: e.spaces.space16,
              paddingBottom: e.spaces.space16,
              paddingRight: e.spaces.space4,
              overflow: 'auto',
              display: 'flex',
            },
          }
        }),
        Sa = Object(ht.a)(ba(_a)),
        Ca = n('CoGJ')
      function wa(e, t) {
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
      function Ra(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? wa(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : wa(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function Ia(e) {
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
      var ka = y.createElement(Ca.a, null),
        Pa = Ze.a.d9de7b57,
        xa = Ze.a.f2879f4d,
        Ta = Ze.a.b518221e,
        Aa = Ze.a.eeaa9f90,
        Ma = Ze.a.g2b43663,
        ja = Ze.a.f277e949,
        Da = (function (e) {
          u()(n, e)
          var t = Ia(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              v()(s()(e), 'state', { attachmentWidth: void 0, textContentWidth: void 0 }),
              v()(s()(e), '_renderAttachment', function () {
                var t,
                  n,
                  r = e.props,
                  a = r.entry,
                  i = r.hasUserText,
                  o = r.isFirstRapidFire,
                  c = r.isRapidFire,
                  s = r.isSent,
                  l = r.isTrusted,
                  u = r.messageData,
                  d = e.state,
                  p = d.attachmentWidth,
                  f = d.textContentWidth,
                  h = (u || {}).attachment,
                  m = a.is_draft,
                  v = Bt(i, p, f),
                  b = [
                    La.mediaAttachment,
                    s && La.isSent,
                    !s && La.received,
                    s && v.isAttachmentSquared && La.equalComponentDimensionsSent,
                    !s && v.isAttachmentSquared && La.equalComponentDimensionsReceived,
                    c && !o && s && La.rapidFireSent,
                    c && !o && !s && La.rapidFireReceived,
                  ],
                  g = null
                if (
                  (!m && a.conversation_id && (g = '/messages/'.concat(a.conversation_id, '/media/').concat(a.id)), h)
                )
                  if (h.photo) (t = h.photo), (n = y.createElement(pa, { media: t, mediaUrl: g }))
                  else if (h.animated_gif)
                    (t = h.animated_gif), (n = y.createElement(ya, { media: t, messageId: a.id }))
                  else if (h.video) {
                    if (((t = h.video), Object(T.k)(h, e.context.featureSwitches)))
                      throw new Error('DMMediaMessage should not be used to render voice messages')
                    n = y.createElement(ya, { media: t, messageId: a.id })
                  }
                var _ = v.isAttachmentSquared ? 'both' : s ? 'right' : 'left',
                  E = t && n && (s ? n : e._getMediaContentWithGuard(t, l, n, _))
                return {
                  attachmentContent: y.createElement(be.a, { onLayout: e._handleAttachmentLayout, style: b }, E),
                  media: t,
                }
              }),
              v()(s()(e), '_handleAttachmentLayout', function (t) {
                var n = t.nativeEvent.layout.width
                if (e.state.attachmentWidth !== n) {
                  var r = { attachmentWidth: n }
                  e.setState(r)
                }
              }),
              v()(s()(e), '_handleTextContentLayout', function (t) {
                var n = t.nativeEvent.layout.width
                if (e.state.textContentWidth !== n) {
                  var r = { textContentWidth: n }
                  e.setState(r)
                }
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
                    t = e.entry,
                    n = e.hasUserText,
                    r = e.isActive,
                    a = e.isFailedDraft,
                    i = e.isFirstRapidFire,
                    o = e.isRapidFire,
                    c = e.isSent,
                    s = e.messageData,
                    l = e.withCta,
                    u = e.withMessageBubble,
                    d = this.state,
                    p = d.attachmentWidth,
                    f = d.textContentWidth,
                    h = t.is_draft,
                    m = Bt(n, p, f),
                    v = this._renderAttachment(),
                    b = v.attachmentContent,
                    g = v.media,
                    _ = n
                      ? y.createElement(
                          be.a,
                          {
                            onLayout: this._handleTextContentLayout,
                            style: c ? La.sentMessageWrapper : La.receivedMessageWrapper,
                          },
                          y.createElement(Kr, {
                            hasAssociatedAttachment: !0,
                            isActive: !!r,
                            isFailedDraft: a,
                            isFirstRapidFire: !!i,
                            isRapidFire: !!o,
                            isSent: c,
                            messageData: h ? s : this._parseMessageData(s, g),
                            rootStyle: m.isTextSquared ? (c ? La.sentSquared : La.receivedSquared) : void 0,
                            withCta: l,
                            withMessageBubble: u,
                          }),
                        )
                      : null
                  return y.createElement(Ur, { attachmentContent: b, isVisible: m.compositeRendered, textContent: _ })
                },
              },
              {
                key: '_getMediaContentWithGuard',
                value: function (e, t, n, r) {
                  var a = this.props,
                    i = a.displaySensitiveMedia,
                    o = a.isDmNsfwMediaFilterEnabled
                  if (
                    e.possibly_sensitive &&
                    this.context.featureSwitches.isTrue('dm_conversations_nsfw_media_filter_enabled')
                  ) {
                    if (o) {
                      var c = ('animated_gif' === e.type && Ma) || ('video' === e.type && Aa) || Ta
                      return y.createElement(
                        Sa,
                        {
                          contentType: e.type,
                          ctaText: c,
                          description: xa,
                          isSensitive: !0,
                          withSquareBottomBorderRadius: r,
                        },
                        n,
                      )
                    }
                  } else if (!i && e.possibly_sensitive)
                    return y.createElement(
                      Sa,
                      {
                        contentType: e.type,
                        ctaText: ja,
                        description: ka,
                        isSensitive: !0,
                        withSquareBottomBorderRadius: r,
                      },
                      n,
                    )
                  return t
                    ? n
                    : y.createElement(
                        Sa,
                        { contentType: e.type, ctaText: ja, description: Pa, withSquareBottomBorderRadius: r },
                        n,
                      )
                },
              },
              {
                key: '_parseMessageData',
                value: function (e, t) {
                  var n,
                    r =
                      null != e && null !== (n = e.entities) && void 0 !== n && n.urls && t
                        ? e.entities.urls.filter(function (e) {
                            return e.display_url !== t.display_url
                          })
                        : null
                  return e && r
                    ? Ra(Ra({}, e), {}, { entities: Ra(Ra({}, e.entities), {}, { urls: r, media: t ? [t] : [] }) })
                    : void 0
                },
              },
            ]),
            n
          )
        })(y.Component)
      v()(Da, 'contextType', $.a), v()(Da, 'defaultProps', { hasUserText: !1 })
      var La = re.a.create(function (e) {
          return {
            equalComponentDimensionsSent: { borderBottomLeftRadius: e.borderRadii.none },
            equalComponentDimensionsReceived: { borderBottomRightRadius: e.borderRadii.none },
            invisible: { opacity: 0 },
            isSent: { borderBottomRightRadius: e.borderRadii.none },
            mediaAttachment: {
              borderRadius: e.borderRadii.xLarge,
              WebkitMaskImage:
                'url(data:image/png;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICRAEAOw==)',
            },
            receivedMessageWrapper: { alignSelf: 'flex-start' },
            sentMessageWrapper: { alignSelf: 'flex-end' },
            rapidFireReceived: { borderTopLeftRadius: e.borderRadii.none },
            rapidFireSent: { borderTopRightRadius: e.borderRadii.none },
            received: { borderBottomLeftRadius: e.borderRadii.none },
            receivedSquared: { borderTopRightRadius: e.borderRadii.none },
            sentSquared: { borderTopLeftRadius: e.borderRadii.none },
            visible: { opacity: 1 },
          }
        }),
        Fa = Da,
        Ba = Object(bn.a)().propsFromActions(function () {
          return { markSpamStatus: _.markSpamStatus }
        })
      function Na(e) {
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
      var Ha = Ze.a.fd07947f,
        Ua = Ze.a.c7a92dc9,
        Va = Ze.a.f277e949,
        Wa = Ze.a.fb3ccb55,
        za = Ba(
          (function (e) {
            u()(n, e)
            var t = Na(n)
            function n() {
              var e
              a()(this, n)
              for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
              return (
                (e = t.call.apply(t, [this].concat(i))),
                v()(s()(e), '_handlePress', function (t) {
                  return function () {
                    var n = e.props,
                      r = n.conversationId,
                      a = n.dmId
                    ;(0, n.markSpamStatus)({ conversationId: r, dmId: a, markSpam: t })
                  }
                }),
                e
              )
            }
            return (
              o()(n, [
                {
                  key: 'render',
                  value: function () {
                    var e = this.props.children
                    return y.createElement(
                      Sa,
                      { contentType: 'dm', ctaText: Va, description: Wa },
                      e,
                      this._renderButtons(),
                    )
                  },
                },
                {
                  key: '_renderButtons',
                  value: function () {
                    return y.createElement(
                      be.a,
                      { style: Ka.buttons },
                      y.createElement(
                        Pt.a,
                        { onPress: this._handlePress(!1), style: Ka.leftButton, type: 'brandOutlined' },
                        Ua,
                      ),
                      y.createElement(Pt.a, { onPress: this._handlePress(!0), type: 'brandOutlined' }, Ha),
                    )
                  },
                },
              ]),
              n
            )
          })(y.PureComponent),
        ),
        Ka = re.a.create(function (e) {
          return {
            buttons: { flexDirection: 'row', paddingTop: e.spaces.space4 },
            leftButton: { marginRight: e.spaces.space12 },
          }
        }),
        Ga = n('U+bB'),
        qa = function (e) {
          var t = e.images,
            n = t.svg || t.size_1x
          if (n) return n.url
        },
        Ya = re.a.create(function (e) {
          return {
            stickerItem: {
              height: 'calc(3 * '.concat(e.fontSizes.title2, ')'),
              width: 'calc(3 * '.concat(e.fontSizes.title2, ')'),
            },
          }
        }),
        Xa = function (e) {
          var t = e.sticker
          return y.createElement(Ga.a, { accessibilityLabel: t.display_name, source: qa(t), style: Ya.stickerItem })
        },
        Qa = n('XOJV'),
        Za = function (e, t) {
          var n,
            r = null === (n = t.messageData) || void 0 === n ? void 0 : n.attachment
          if (r && r.tweet) return r.tweet.status
        },
        Ja = Object(bn.a)()
          .propsFromState(function () {
            return { tweet: Qa.a.createHydratedTweetSelector(Za) }
          })
          .propsFromActions(function () {
            return { popOutConversation: _.popOutConversation }
          }),
        $a = n('b5s6'),
        ei = y.createElement(ge.b, { link: '/settings/safety' }),
        ti = function (e) {
          return y.createElement(Ze.a.I18NFormatMessage, { $i18n: 'j3c7dd33' }, y.cloneElement(ei, null, Ze.a.adcf07b5))
        },
        ni = Ze.a.e4df0ad7,
        ri = Ze.a.f277e949,
        ai = Ze.a.b5b91d58,
        ii = Ze.a.bb594d7b,
        oi = y.createElement(ti, null)
      var ci = re.a.create(function (e) {
          return {
            attachment: { marginBottom: 0 },
            receivedMessageWrapper: { alignSelf: 'flex-start' },
            sentMessageWrapper: { alignSelf: 'flex-end' },
            received: { borderBottomLeftRadius: e.borderRadii.none, borderColor: e.colors.gray200 },
            receivedAttachmentSquared: { borderBottomRightRadius: e.borderRadii.none },
            receivedSquared: { borderTopRightRadius: e.borderRadii.none },
            sent: { borderBottomRightRadius: e.borderRadii.none, borderColor: e.colors.primary },
            sentAttachmentSquared: { borderBottomLeftRadius: e.borderRadii.none },
            sentSquared: { borderTopLeftRadius: e.borderRadii.none },
          }
        }),
        si = Ja(function (e) {
          var t = y.useContext($.a).featureSwitches,
            n = e.conversationId,
            r = e.displaySensitiveMedia,
            a = e.hasUserText,
            i = void 0 !== a && a,
            o = e.isActive,
            c = void 0 !== o && o,
            s = e.isDmNsfwMediaFilterEnabled,
            l = e.isFailedDraft,
            u = e.isFirstRapidFire,
            d = void 0 !== u && u,
            p = e.isRapidFire,
            f = void 0 !== p && p,
            h = e.isSent,
            m = e.isTrusted,
            v = e.messageData,
            b = e.popOutConversation,
            g = e.tweet,
            _ = e.withCta,
            E = e.withMessageBubble,
            O = y.useState(void 0),
            S = Pe()(O, 2),
            C = S[0],
            w = S[1],
            R = y.useState(void 0),
            I = Pe()(R, 2),
            k = I[0],
            P = I[1],
            x = y.useMemo(
              function () {
                return function () {
                  n && b(n)
                }
              },
              [n, b],
            ),
            T = y.useMemo(
              function () {
                return function (e) {
                  var t = e.nativeEvent.layout.width
                  C !== t && w(t)
                }
              },
              [C],
            ),
            A = y.useMemo(
              function () {
                return function (e) {
                  var t = e.nativeEvent.layout.width
                  k !== t && P(t)
                }
              },
              [k],
            )
          if (!v || !v.attachment || !v.attachment.tweet) return null
          var M = v.attachment.tweet,
            j = h ? 'sent' : 'received',
            D = Bt(i, C, k),
            L = y.createElement($a.a, {
              onPress: x,
              style: [
                ci[j],
                i && ci.attachment,
                D.isAttachmentSquared ? (h ? ci.sentAttachmentSquared : ci.receivedAttachmentSquared) : void 0,
              ],
              tweetId: M.status,
            }),
            F = D.isAttachmentSquared ? 'both' : h ? 'right' : 'left',
            B = (function () {
              if (!g) return null
              if (h) return L
              if (g.possibly_sensitive && t.isTrue('dm_conversations_nsfw_media_filter_enabled')) {
                if (s || void 0 === s)
                  return y.createElement(
                    Sa,
                    { contentType: 'photo', ctaText: ii, description: ai, withSquareBottomBorderRadius: F },
                    L,
                  )
              } else if (!r && g.possibly_sensitive)
                return y.createElement(
                  Sa,
                  { contentType: 'photo', ctaText: ri, description: oi, withSquareBottomBorderRadius: F },
                  L,
                )
              return m
                ? L
                : y.createElement(
                    Sa,
                    { contentType: 'tweet', ctaText: ri, description: ni, withSquareBottomBorderRadius: F },
                    L,
                  )
            })(),
            N = y.createElement(be.a, { onLayout: T, style: ci.attachment }, B),
            H = i
              ? y.createElement(
                  be.a,
                  { onLayout: A, style: h ? ci.sentMessageWrapper : ci.receivedMessageWrapper },
                  y.createElement(Kr, {
                    hasAssociatedAttachment: !0,
                    isActive: c,
                    isFailedDraft: l,
                    isFirstRapidFire: d,
                    isRapidFire: f,
                    isSent: h,
                    messageData: v,
                    rootStyle: D.isTextSquared ? (h ? ci.sentSquared : ci.receivedSquared) : void 0,
                    tweetId: M.status,
                    withCta: _,
                    withMediaLinks: !0,
                    withMessageBubble: E,
                  }),
                )
              : null
          return y.createElement(Ur, { attachmentContent: N, isVisible: D.compositeRendered, textContent: H })
        }),
        li = n('8W85')
      function ui() {
        var e = y.useContext(Oi),
          t = Pe()(e.activeVoiceMessage, 2),
          n = t[0],
          r = t[1],
          a = Pe()(e.playerApi, 2)[1],
          i = Pe()(e.playerState, 2)[1]
        var o = {
          media: Pe()(n, 2)[1],
          onEnded: function () {
            r([null, null]), e.scribeAction && e.scribeAction.complete()
          },
          onPlayerApi: a,
          onPlayerState: i,
        }
        return y.createElement(li.a, o)
      }
      var di = n('89tF'),
        pi = n('k89r')
      function fi(e, t) {
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
      function hi(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? fi(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : fi(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function mi(e) {
        var t,
          n,
          r,
          a,
          i,
          o =
            ((t = y.useState(bi.activeVoiceMessage)),
            (n = y.useState(bi.playerApi)),
            (r = y.useState(bi.playerState)),
            (i = Object(pi.a)()),
            (a = y.useMemo(
              function () {
                var e = { page: 'messages', section: 'thread', component: 'message', element: 'voice' }
                function t(t) {
                  var n = t.action,
                    r = t.component,
                    a = void 0 === r ? e.component : r,
                    i = e.element
                  return { page: e.page, section: e.section, component: a, element: i, action: n }
                }
                var n = function (e, n) {
                  return n
                    ? n.data
                      ? i.scribe(hi(hi({}, t({ action: e })), {}, { data: n.data }))
                      : i.scribe(hi({}, t({ action: e, component: yi(n) })))
                    : i.scribe(hi({}, t({ action: e })))
                }
                return {
                  impression: function (e) {
                    return n('impression', e)
                  },
                  report: function (e) {
                    return n('report', e)
                  },
                  play: function (e) {
                    return n('play', e)
                  },
                  pause: function () {
                    return n('pause')
                  },
                  complete: function () {
                    return n('complete')
                  },
                }
              },
              [i],
            )),
            { activeVoiceMessage: t, playerApi: n, playerState: r, scribeAction: a })
        return y.createElement(gi.Provider, { value: o }, e.children)
      }
      var vi = {
        Timelines: Object(di.a)({ message: !0, inbox_timeline: !0, low_quality_timeline: !0, requests_timeline: !0 }),
      }
      function yi(e) {
        var t = e.isLowQuality
        return e.isTrusted
          ? vi.Timelines.inbox_timeline
          : t
          ? vi.Timelines.low_quality_timeline
          : vi.Timelines.requests_timeline
      }
      var bi = { activeVoiceMessage: [null, null], playerApi: null, playerState: null, scribeAction: null },
        gi = y.createContext({
          activeVoiceMessage: [bi.activeVoiceMessage, _i],
          playerApi: [bi.playerApi, _i],
          playerState: [bi.playerState, _i],
          scribeAction: null,
        })
      function _i() {
        throw new Error('DMVoiceContext is not initialized')
      }
      function Ei(e) {
        var t = y.useContext($.a).featureSwitches
        return Object(T.j)(t) ? y.createElement(mi, null, e.children, y.createElement(ui, null)) : e.children
      }
      var Oi = gi,
        Si = n('MH+I'),
        Ci = n('5Ixf'),
        wi = n('AtEG')
      function Ri(e) {
        var t,
          n,
          r = y.useContext(Oi),
          a = e.isLowQuality,
          i = e.isSent,
          o = e.isTrusted
        if (null === (t = e.media) || void 0 === t || !t.video_info) return null
        var c = Pe()(r.activeVoiceMessage, 2),
          s = c[0],
          l = c[1],
          u = Pe()(r.playerApi, 1)[0],
          d = Pe()(r.playerState, 1)[0],
          p = r.scribeAction,
          f = Pe()(s, 1)[0],
          h = e.messageId === f
        if (!p) return null
        var m = ki(d),
          v = (null === (n = e.media) || void 0 === n ? void 0 : n.video_info.duration_millis) || 0,
          b = {
            durationMs: v,
            isActive: h,
            isSent: i,
            playerApi: null,
            playerState: null,
            onImpression: function () {
              return p.impression({ isLowQuality: a, isTrusted: o })
            },
            onPlayRequest: function () {
              return l([e.messageId, e.media])
            },
            onPlay: function () {
              return p.play({ data: { duration_ms: v } })
            },
            onPause: function () {
              return p.pause()
            },
          }
        return (
          h &&
            m &&
            m.contentId === e.media.id_str &&
            ((b.playerApi = u),
            (b.playerState = d),
            null != m && m.durationMs && (b.durationMs = null == m ? void 0 : m.durationMs)),
          y.createElement(Ii, b)
        )
      }
      function Ii(e) {
        var t = e.isActive,
          n = e.isSent,
          r = e.playerApi,
          a = e.playerState,
          i = null == a ? void 0 : a.isPlaying,
          o = ki(a),
          c = (null == o ? void 0 : o.currentTimeMs) || 0,
          s = (null == o ? void 0 : o.durationMs) || e.durationMs,
          l = Math.max(t ? s - c : s, 0)
        y.useLayoutEffect(function () {
          e.onImpression()
        }, []),
          y.useEffect(
            function () {
              r && 0 === c && (r.play(), e.onPlay())
            },
            [r],
          )
        var u = re.a.isDarkMode() || n,
          d = { color: u ? 'whiteOnColor' : 'normal' },
          p = [
            Ti.voiceMessage,
            Ai({ isSent: n, squared: t }),
            n ? Ti.voiceMessageSent : Ti.voiceMessageReceived,
            je(re.a.theme.scale).voiceMessage({ isVoiceMessageActive: t, isSent: n }),
          ],
          f = i ? Ci.a : wi.a
        return y.createElement(
          be.a,
          { style: [Ti.container, je(re.a.theme.scale).voiceMessageContainer({ isVoiceMessageActive: t, isSent: n })] },
          y.createElement(
            be.a,
            { style: p },
            y.createElement(be.a, { style: Ti.startSpacer }),
            y.createElement(Pt.a, {
              accessibilityLabel: i ? xi : Pi,
              icon: y.createElement(f, { style: u ? Ti.iconColorDark : Ti.iconColorDefault }),
              onPress: function () {
                r ? (i ? (r.pause(), e.onPause()) : (r.play(), e.onPlay())) : e.onPlayRequest()
              },
              type: 'onMediaText',
            }),
            y.createElement(be.a, { style: Ti.durationSpacer }),
            y.createElement(
              be.a,
              { style: n ? Ti.durationOpacity : void 0 },
              y.createElement(
                Si.a,
                yn()({ countdown: !0, timeMs: l }, d, {
                  color: 'gray700',
                  size: 'subtext2',
                  style: n ? Ti.durationDark : void 0,
                  weight: 'bold',
                  withCountdownSymbol: t,
                }),
              ),
            ),
            y.createElement(be.a, { style: Ti.endSpacer }),
          ),
        )
      }
      var ki = function (e) {
          return e ? e.tracks[e.currentTrackId] : null
        },
        Pi = Ze.a.c94b7d89,
        xi = Ze.a.eb6f9582,
        Ti = re.a.create(function (e) {
          return {
            displayNone: { display: 'none' },
            container: { flexDirection: 'row', alignSelf: 'flex-end', alignItems: 'center', justifyContent: 'center' },
            voiceMessage: {
              alignSelf: 'flex-end',
              flexDirection: Ae.a.getConstants().isRTL ? 'row-reverse' : 'row',
              alignItems: 'center',
              justifyContent: 'center',
            },
            voiceMessageSent: { backgroundColor: e.colors.primary },
            voiceMessageReceived: { backgroundColor: e.colors.dmReceivedBubbleBackground },
            durationSpacer: { width: e.spaces.space4 },
            durationOpacity: { opacity: 0.75 },
            durationDark: { color: e.colors.whiteOnColor },
            iconColorDark: { color: e.colors.whiteOnColor },
            iconColorDefault: { color: e.colors.gray1100 },
            startSpacer: { width: e.spaces.space4 },
            endSpacer: { width: e.spaces.space16 },
          }
        })
      function Ai(e) {
        var t = e.isSent,
          n = e.squared
        return [Mi.base, t ? Mi.sent : Mi.received, n ? (t ? Mi.sentSquared : Mi.receivedSquared) : void 0]
      }
      var Mi = re.a.create(function (e) {
        return {
          base: {
            borderRadius: e.borderRadii.xLarge,
            WebkitMaskImage: 'url(data:image/png;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICRAEAOw==)',
          },
          sent: { borderBottomRightRadius: e.borderRadii.none },
          sentSquared: { borderTopRightRadius: e.borderRadii.none },
          received: { borderBottomLeftRadius: e.borderRadii.none },
          receivedSquared: { borderTopLeftRadius: e.borderRadii.none },
        }
      })
      function ji(e, t) {
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
      function Di(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ji(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ji(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function Li(e) {
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
      var Fi = (function (e) {
        u()(n, e)
        var t = Li(n)
        function n() {
          return a()(this, n), t.apply(this, arguments)
        }
        return (
          o()(n, [
            {
              key: 'render',
              value: function () {
                var e,
                  t = this.props,
                  n = t.entry,
                  r = t.isSent,
                  a = t.onCtaClick,
                  i = t.onCtaImpression,
                  o = n.message_data,
                  c = o && o.attachment ? o.attachment : {},
                  s = n.marked_as_spam,
                  l = Lt(n),
                  u = !!o && !!o.ctas,
                  d = Dt(n),
                  p = (function (e) {
                    var t = e.message_data
                    if (!t) return !1
                    if (Lt(e) && !Ft(e)) return !1
                    if (!t.text) return !1
                    var n = Object(Mt.parse)(t.text)
                    if (!n || 0 === n.length) return !1
                    var r = n
                      .sort(function (e, t) {
                        return t.indices[1] - e.indices[1]
                      })
                      .reduce(function (e, t) {
                        return ''.concat(e.slice(0, t.indices[0])).concat(e.slice(t.indices[1]))
                      }, t.text)
                      .trim()
                    return n.length <= 10 && 0 === r.length
                  })(n),
                  f = !(d && p),
                  h = Ft(n)
                e = c.sticker ? y.createElement(Xa, { sticker: c.sticker }) : this._renderDMMessage(d, u, f)
                var m = s ? y.createElement(za, { conversationId: n.conversation_id, dmId: n.id }, e) : e,
                  v = l && !h && !Object(T.k)(null == o ? void 0 : o.attachment, this.context.featureSwitches),
                  b = [
                    r ? Bi.isSent : Bi.isReceived,
                    u && Bi.withCta,
                    v ? Bi.mediaRoot : Bi.flexShrink,
                    this.props.style,
                  ]
                return y.createElement(
                  be.a,
                  { style: b },
                  m,
                  o && o.ctas
                    ? y.createElement(Dr, {
                        callToActions: o.ctas,
                        isSent: r,
                        onCtaClick: a,
                        onImpression: i,
                        withSticker: !!c.sticker || p,
                        withUserText: d,
                      })
                    : null,
                )
              },
            },
            {
              key: '_renderDMMessage',
              value: function (e, t, n) {
                var r = this.props,
                  a = r.displaySensitiveMedia,
                  i = r.entry,
                  o = r.isActive,
                  c = r.isDmNsfwMediaFilterEnabled,
                  s = r.isFirstRapidFire,
                  l = r.isLowQuality,
                  u = r.isRapidFire,
                  d = r.isSent,
                  p = r.isTrusted,
                  f = i.error,
                  h = i.message_data,
                  m = h && Di(Di({}, h), {}, { entities: (h && h.entities) || void 0, error: f }),
                  v = null == m ? void 0 : m.attachment,
                  b = {
                    isActive: o,
                    isFailedDraft: !!f,
                    isFirstRapidFire: s,
                    isRapidFire: u,
                    isSent: d,
                    withCta: t,
                    withMessageBubble: n,
                  }
                if (m && v) {
                  if (v.tweet)
                    return y.createElement(
                      si,
                      yn()(
                        {
                          conversationId: i.conversation_id,
                          displaySensitiveMedia: a,
                          hasUserText: e,
                          isDmNsfwMediaFilterEnabled: c,
                          isTrusted: p,
                          messageData: m,
                        },
                        b,
                      ),
                    )
                  if (v.photo || v.animated_gif || v.video)
                    return v.video && Object(T.k)(v, this.context.featureSwitches)
                      ? y.createElement(Ri, {
                          isLowQuality: l,
                          isSent: !!d,
                          isTrusted: p,
                          media: v.video,
                          messageId: i.id,
                        })
                      : y.createElement(
                          Fa,
                          yn()(
                            {
                              displaySensitiveMedia: a,
                              entry: i,
                              hasUserText: e,
                              isDmNsfwMediaFilterEnabled: c,
                              isTrusted: p,
                              messageData: m,
                            },
                            b,
                          ),
                        )
                  if (v.card)
                    return y.createElement(
                      ea,
                      yn()({ cardUrl: v.card, conversationId: i.conversation_id, hasUserText: e, messageData: m }, b),
                    )
                  if (v.fleet) return y.createElement(oa, yn()({ entry: i, hasUserText: e, messageData: m }, b))
                }
                return y.createElement(Gr, yn()({}, b, { messageData: m }))
              },
            },
          ]),
          n
        )
      })(y.Component)
      v()(Fi, 'contextType', $.a)
      var Bi = re.a.create(function (e) {
          return {
            flexShrink: { flexShrink: 1 },
            mediaRoot: { flex: 1 },
            isSent: { alignItems: 'flex-end' },
            isReceived: { alignItems: 'flex-start' },
            withCta: { alignItems: 'stretch' },
          }
        }),
        Ni = Fi,
        Hi = re.a.create(function (e) {
          return { avatar: { borderRadius: e.borderRadii.infinite } }
        }),
        Ui = function (e) {
          var t = e.showAvatar,
            n = e.size,
            r = void 0 === n ? 'xLarge' : n,
            a = e.user
          return t
            ? y.createElement(_e.a, {
                accessibilityLabel: a.name,
                link: { pathname: '/'.concat(a.screen_name) },
                size: r,
                uri: a.profile_image_url_https,
              })
            : y.createElement(be.a, { style: [Hi.avatar, _e.a.getSizeStyle(r)] })
        },
        Vi = n('m3Bd'),
        Wi = n.n(Vi),
        zi = n('B3eJ')
      function Ki(e) {
        var t = e.color,
          n = e.isActive,
          r = e.size,
          a = Wi()(e, ['color', 'isActive', 'size']),
          i = y.useContext(Oi),
          o = y.useState(0.5),
          c = Pe()(o, 2),
          s = c[0],
          l = c[1],
          u = Pe()(i.playerState, 1)[0]
        y.useEffect(
          function () {
            n && u && u.isPlaying && l(Math.random())
          },
          [n, u],
        )
        var d = n && (null == u ? void 0 : u.isPlaying),
          p = r + 2 * Gi,
          f = [qi.container, a.style, { width: r, height: r }]
        return y.createElement(
          be.a,
          { style: f },
          y.createElement(
            be.a,
            { style: [qi.container, qi.transitionOpacity, d ? qi.show : qi.hide] },
            Me.a.reducedMotionEnabled ? null : y.createElement(zi.a, { audioLevel: s, color: t, paused: !d, size: r }),
          ),
          y.createElement(be.a, {
            style: [qi.border, { width: p, height: p }, qi.transitionOpacity, n ? qi.show : qi.hide],
          }),
        )
      }
      var Gi = parseInt(re.a.theme.spaces.space2, 10),
        qi = re.a.create(function (e) {
          return {
            container: { alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' },
            border: {
              position: 'absolute',
              top: -1 * Gi,
              left: -1 * Gi,
              backgroundColor: e.colors.navigationBackground,
              borderRadius: e.borderRadii.infinite,
            },
            transitionOpacity: { transition: 'opacity 0.2s 0s ease-in-out' },
            hide: { opacity: 0 },
            show: { opacity: 1 },
          }
        }),
        Yi = n('uArA'),
        Xi = 'messageEntry'
      function Qi(e, t) {
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
      function Zi(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Qi(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Qi(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
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
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var $i = { element: 'cta_dm' },
        eo = { isGroupDM: !1, isRapidFire: !1, isFirstRapidFire: !1, isLastRapidFire: !1 },
        to = (function (e) {
          u()(n, e)
          var t = Ji(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              v()(
                s()(e),
                '_handleClick',
                Object(Yi.a)(function () {
                  var t = e.props,
                    n = t.entry,
                    r = n.error,
                    a = n.id,
                    i = n.is_draft,
                    o = t.isActive,
                    c = t.setActiveEntry
                  i || r || (c(o ? null : a), e._handleScribeMessageEntryClick())
                }),
              ),
              v()(s()(e), '_handleScribeMessageEntryClick', function () {
                var t = e.props.isActive
                if (!xt.a.isEnabled && !t) {
                  var n = e.props.entry,
                    r = { component: 'message', element: Object(T.c)(n), action: 'click' }
                  e._scribeAction(r)
                }
              }),
              v()(s()(e), '_handleCtaImpression', function () {
                e._scribeAction(Zi(Zi({}, $i), {}, { action: 'show' }))
              }),
              v()(s()(e), '_handleCtaClick', function () {
                e._scribeAction(Zi(Zi({}, $i), {}, { action: 'click' }))
              }),
              v()(s()(e), '_isDMVoiceMessage', function () {
                var t
                return Object(T.k)(
                  null === (t = e.props.entry.message_data) || void 0 === t ? void 0 : t.attachment,
                  e.context.featureSwitches,
                )
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'shouldComponentUpdate',
                value: function (e) {
                  return !Object(ye.a)(this.props, e)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.isActive,
                    r = t.isGroupDM,
                    a = t.isSent,
                    i = t.user,
                    o = this._getRapidFireProps(),
                    c = !o.isRapidFire || o.isLastRapidFire,
                    s =
                      this.context.featureSwitches.isTrue('dm_vdl_enabled') &&
                      this.context.featureSwitches.isTrue('dm_vdl_chat_p0_enabled'),
                    l = [
                      ro.root.base,
                      s && ro.root.vdlPadding,
                      c && ro.root.contentSpacing,
                      c && s && ro.root.vdlContentSpacing,
                    ],
                    u = this._isDMVoiceMessage(),
                    d = s ? r && !a : !a || u
                  if (!i) return null
                  var p = !xt.a.isEnabled || a
                  return y.createElement(
                    Ve.a,
                    { viewType: 'message' },
                    y.createElement(
                      be.a,
                      { style: l },
                      y.createElement(
                        ie.a,
                        {
                          accessibilityExpanded: !(!p || !n),
                          focusable: !0,
                          interactiveStyles: null,
                          onPress: p ? this._handleClick : void 0,
                          style: a ? ro.root.sent : ro.root.received,
                          testID: Xi,
                        },
                        function (t) {
                          var n = t.isFocused,
                            r = t.isHovered
                          return e._renderMessage({
                            isFocused: n,
                            isHovered: r,
                            rapidFireProps: o,
                            withVDLRefresh: s,
                            withUserAvatar: d,
                          })
                        },
                      ),
                      this._renderFooter(o, d),
                    ),
                  )
                },
              },
              {
                key: '_renderMessage',
                value: function (e) {
                  var t,
                    n = e.isFocused,
                    r = e.isHovered,
                    a = e.rapidFireProps,
                    i = e.withUserAvatar,
                    o = e.withVDLRefresh,
                    c = this.props,
                    s = c.displaySensitiveMedia,
                    l = c.entry,
                    u = c.inboxType,
                    d = c.isActive,
                    p = c.isDmNsfwMediaFilterEnabled,
                    f = c.isGroupDM,
                    h = c.isLowQuality,
                    m = c.isReadOnly,
                    v = c.isSent,
                    b = c.isTrusted,
                    g = c.isVoiceMessageActive,
                    _ = c.isWide,
                    E = c.participants,
                    O = c.perspective,
                    S = c.scribeVoiceMessage,
                    C = c.setShouldFreezeUpdates,
                    w = a.isFirstRapidFire,
                    R = a.isRapidFire,
                    I = [
                      v ? ro.messageContainer.sent : ro.messageContainer.received,
                      _ ? ro.messageContainer.wide : ro.messageContainer.narrow,
                      v && _ && ro.messageContainer.sentWide,
                      !v && _ && ro.messageContainer.receivedWide,
                    ],
                    k = b && !m,
                    P = this._isDMVoiceMessage(),
                    x = null === (t = Object.keys(E)) || void 0 === t ? void 0 : t.length
                  return y.createElement(
                    be.a,
                    { style: I },
                    l.error
                      ? null
                      : y.createElement(fn, {
                          containerIsActive: d,
                          containerIsFocused: n,
                          containerIsHovered: r,
                          entry: l,
                          inboxType: u,
                          isDraft: !!l.is_draft,
                          isGroupDM: f,
                          isSent: v,
                          onReportMessage:
                            P && S
                              ? function () {
                                  return S.report({ isLowQuality: h, isTrusted: b })
                                }
                              : void 0,
                          participantsCount: x,
                          perspective: O,
                          setShouldFreezeUpdates: C,
                          shouldShowReactionButton: k,
                          style: P && je(re.a.theme.scale).actionsContainer({ isSent: v, isVoiceMessageActive: g }),
                          withVDLRefresh: o,
                        }),
                    y.createElement(Ni, {
                      displaySensitiveMedia: s,
                      entry: l,
                      isActive: d,
                      isDmNsfwMediaFilterEnabled: p,
                      isFirstRapidFire: w,
                      isLowQuality: h,
                      isRapidFire: R,
                      isSent: v,
                      isTrusted: b,
                      key: l.id,
                      onCtaClick: this._handleClick,
                      onCtaImpression: this._handleCtaImpression,
                      style: P && je(re.a.theme.scale).messageContainer({ isSent: v, isVoiceMessageActive: g }),
                    }),
                    this._possiblyRenderUserAvatar(a, i),
                  )
                },
              },
              {
                key: '_renderFooter',
                value: function (e, t) {
                  var n,
                    r,
                    a = e.isLastRapidFire,
                    i = e.isRapidFire,
                    o = this.props,
                    c = o.entry,
                    s = o.isActive,
                    l = o.isGroupDM,
                    u = o.isSent,
                    d = o.participants,
                    p = o.user
                  return p
                    ? y.createElement(kr, {
                        conversationId: c.conversation_id,
                        entryId: c.id,
                        entryText: null === (n = c.message_data) || void 0 === n ? void 0 : n.text,
                        entryTime: c.time,
                        isActive: s,
                        isDraft: !!c.is_draft,
                        isError: !!c.error,
                        isGroupDM: l,
                        isLastRapidFire: a,
                        isRapidFire: i,
                        isSent: u,
                        localMediaId: null === (r = c.message_data) || void 0 === r ? void 0 : r.localMediaId,
                        onPress: this._handleClick,
                        participants: d,
                        user: p,
                        withUserAvatar: t,
                      })
                    : null
                },
              },
              {
                key: '_possiblyRenderUserAvatar',
                value: function (e, t) {
                  var n = e.isLastRapidFire,
                    r = e.isRapidFire,
                    a = this.props,
                    i = a.isSent,
                    o = a.isVoiceMessageActive,
                    c = a.user,
                    s = this._isDMVoiceMessage()
                  if (!c || (!t && !o)) return null
                  var l = Te(re.a.theme.scale),
                    u = l.DMUserAvatarSizePx,
                    d = { showAvatar: !!s || !r || !!n, size: l.DMUserAvatarSizeType, user: c },
                    p = [
                      ro.userAvatar.base,
                      i ? ro.userAvatar.sent : ro.userAvatar.received,
                      s && je(re.a.theme.scale).userAvatar({ isVoiceMessageActive: o, isSent: i }),
                    ]
                  return y.createElement(
                    be.a,
                    { style: ro.userAvatar.container },
                    i ? null : y.createElement(be.a, { style: ro.userAvatar.spacer }),
                    s
                      ? y.createElement(Ki, {
                          color: i ? re.a.theme.colors.primary : re.a.theme.colors.text,
                          isActive: !!o,
                          size: u,
                          style: p,
                        })
                      : null,
                    y.createElement(be.a, { style: p }, y.createElement(Ui, d)),
                  )
                },
              },
              {
                key: '_scribeAction',
                value: function (e) {
                  this.props.analytics.scribe(Zi({}, e))
                },
              },
              {
                key: '_getRapidFireProps',
                value: function () {
                  return {
                    isFirstRapidFire: this.props.isFirstRapidFire,
                    isLastRapidFire: this.props.isLastRapidFire,
                    isRapidFire: this.props.isRapidFire,
                  }
                },
              },
            ]),
            n
          )
        })(y.Component)
      v()(to, 'contextType', $.a), v()(to, 'defaultProps', eo)
      var no = Object(ht.a)(
          Ke(
            (function (e) {
              function t(t) {
                var n = t.entry,
                  r = y.useContext(Oi),
                  a = Pe()(r.activeVoiceMessage, 1)[0],
                  i = r.scribeAction,
                  o = Pe()(a, 1)[0] === n.id,
                  c = Zi(Zi({}, t), {}, { isVoiceMessageActive: o, scribeVoiceMessage: i })
                return y.createElement(e, c)
              }
              return (t.defaultProps = eo), t
            })(to),
          ),
        ),
        ro = {
          root: re.a.create(function (e) {
            return {
              base: { flexDirection: 'column', paddingBottom: e.spaces.space2 },
              vdlPadding: { paddingBottom: '0px' },
              received: { cursor: 'default', alignItems: 'flex-start' },
              sent: { cursor: 'pointer', alignItems: 'flex-end' },
              contentSpacing: { paddingBottom: e.spaces.space20 },
              vdlContentSpacing: { paddingBottom: e.spaces.space24 },
            }
          }),
          messageContainer: re.a.create(function (e) {
            return {
              sent: { flexDirection: 'row', justifyContent: 'flex-end' },
              received: { flexDirection: 'row-reverse', justifyContent: 'flex-end' },
              narrow: { width: '100%' },
              wide: { width: _n },
              receivedWide: { paddingRight: e.spaces.space12 },
              sentWide: { paddingLeft: e.spaces.space12 },
            }
          }),
          userAvatar: re.a.create(function (e) {
            return {
              container: { flexDirection: 'row', alignItems: 'flex-end' },
              base: { position: 'absolute' },
              sent: { right: 0 },
              received: { left: 0 },
              spacer: { width: Te(e.scale).DMUserAvatarSpacerPx },
            }
          }),
        },
        ao = n('H4nC'),
        io = function (e) {
          var t = e.conversation,
            n = e.entry,
            r = e.inboxType,
            a = e.isActive,
            i = e.isFirstRapidFire,
            o = e.isLastRapidFire,
            c = e.isRapidFire,
            s = e.isWide,
            l = e.perspective,
            u = e.scribeNamespace,
            d = e.setActiveEntry,
            p = e.setShouldFreezeUpdates
          if (Object(Q.b)(n) || Object(Q.e)(n)) {
            var f = t.conversation_id,
              h = t.low_quality,
              m = t.participants,
              v = t.read_only,
              b = t.trusted,
              g = t.type,
              E = n.message_data,
              O = (E = void 0 === E ? {} : E).sender_id,
              S = void 0 === f || b
            return y.createElement(no, {
              entry: n,
              inboxType: r,
              isActive: a,
              isFirstRapidFire: i,
              isGroupDM: g === _.CONVERSATION_TYPE.GROUP,
              isLastRapidFire: o,
              isLowQuality: !!h,
              isRapidFire: c,
              isReadOnly: v,
              isSent: O === l,
              isTrusted: !!S,
              isWide: s,
              participants: m,
              perspective: l,
              scribeNamespace: u,
              senderId: O,
              setActiveEntry: d,
              setShouldFreezeUpdates: p,
            })
          }
          return Object(Q.a)(n)
            ? y.createElement(Ie, { conversation: t, entry: n, entryType: n.type, perspective: l })
            : Object(Q.d)(n)
            ? y.createElement(ao.a, { entry: n, isCompact: !1 })
            : null
        },
        oo = Object(C.createSelector)(
          function (e, t) {
            var n = Object(nt.o)(e, t.conversationId),
              r = n && Object(J.a)(n)
            return r && Object(_.selectEntry)(e, r)
          },
          function (e) {
            return { lastEntry: e }
          },
        ),
        co = Object(x.c)(oo),
        so = (n('Ef13'), n('uDfI')),
        lo = Object(C.createSelector)(
          function (e, t) {
            return P.e.selectMany(e, t.userIds || [])
          },
          function (e) {
            return { users: e }
          },
        ),
        uo = Object(so.b)(lo),
        po = n('Enqy'),
        fo = n('+/1j')
      function ho(e) {
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
      var mo = 'overflow',
        vo = function (e, t) {
          return e.id_str < t.id_str ? -1 : e.id_str > t.id_str ? 1 : 0
        },
        yo = { stiffness: 1e3, damping: 70 },
        bo = 140,
        go = { scale: Object(po.spring)(1, yo), translateY: Object(po.spring)(0, yo) },
        _o = function (e, t) {
          return { key: e.id_str, data: e, style: go }
        },
        Eo = Object(W.a)({ translateY: bo, scale: 0 }),
        Oo = Object(W.a)({ scale: Object(po.spring)(1, yo), translateY: Object(po.spring)(bo, yo) }),
        So = [{ key: 'bubble', style: { scale: Object(po.spring)(1, yo), translateY: Object(po.spring)(0, yo) } }],
        Co = Object(W.a)({ translateY: bo, scale: 0 }),
        wo = Object(W.a)({ scale: Object(po.spring)(1, yo), translateY: Object(po.spring)(bo, yo) }),
        Ro = function (e) {
          return [
            isFinite(e.scale) && { scale: e.scale.toFixed(3) },
            isFinite(e.translateY) && { translateY: ''.concat(Math.round(e.translateY), '%') },
          ].filter(Boolean)
        },
        Io = (function (e) {
          u()(n, e)
          var t = ho(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              v()(s()(e), 'state', { isHidden: !0 }),
              v()(s()(e), '_afterLeave', function () {
                var t = e.props.users
                e.setState(function (e) {
                  return { isHidden: 0 === t.length }
                })
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'componentDidUpdate',
                value: function (e, t) {
                  this.state.isHidden && this.props.users && this.props.users.length && this.setState({ isHidden: !1 })
                },
              },
              {
                key: 'shouldComponentUpdate',
                value: function (e, t) {
                  return !Object(ye.a)(this.props, e) || !Object(ye.a)(this.state, t)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.state.isHidden,
                    t = this.props.users,
                    n = t.sort(vo).slice(0, 5).map(_o)
                  return (
                    t.length > 5 && n.push({ key: mo, style: go }),
                    y.createElement(
                      be.a,
                      { style: [ko.root, e && ko.hidden] },
                      y.createElement(
                        be.a,
                        { style: ko.avatarRow },
                        y.createElement(po.TransitionMotion, { styles: n, willEnter: Eo, willLeave: Oo }, function (e) {
                          return y.createElement(
                            y.Fragment,
                            null,
                            e.map(function (e, n) {
                              if (e.style.scale <= 0.05) return null
                              var r = Ro(e.style)
                              return e.key === mo
                                ? y.createElement(
                                    be.a,
                                    {
                                      key: e.key,
                                      style: [ko.avatar, ko.avatarSpacer, ko.overflowAvatar, { transform: r }],
                                    },
                                    y.createElement(fo.a, { style: ko.overflowAvatarText }, '+', t.length - 5),
                                  )
                                : y.createElement(
                                    be.a,
                                    { key: e.key, style: [ko.avatar, { transform: r }] },
                                    y.createElement(_e.a, {
                                      accessibilityLabel: e.data && e.data.name,
                                      size: 'xLarge',
                                      uri: e.data && e.data.profile_image_url_https,
                                    }),
                                  )
                            }),
                          )
                        }),
                      ),
                      y.createElement(
                        po.TransitionMotion,
                        { didLeave: this._afterLeave, styles: t.length > 0 ? So : [], willEnter: Co, willLeave: wo },
                        function (e) {
                          return y.createElement(
                            y.Fragment,
                            null,
                            e.map(function (e) {
                              return y.createElement(
                                be.a,
                                { key: e.key, style: [ko.messageBubble, { transform: Ro(e.style) }] },
                                y.createElement(be.a, { style: ko.dot }),
                                y.createElement(be.a, { style: [ko.dot, ko.dot1] }),
                                y.createElement(be.a, { style: [ko.dot, ko.dot2] }),
                              )
                            }),
                          )
                        },
                      ),
                    )
                  )
                },
              },
            ]),
            n
          )
        })(y.Component),
        ko = re.a.create(function (e) {
          return {
            root: {
              flexDirection: 'row',
              paddingBottom: e.spaces.space20,
              paddingRight: e.spaces.space12,
              width: 'calc(100% * 7/8)',
              position: 'relative',
              transitionProperty: 'height, padding-bottom',
              transitionDuration: '0.2s',
              overflow: 'hidden',
            },
            hidden: { paddingBottom: 0, paddingRight: 0, height: 0, width: 0 },
            avatarRow: { display: 'inline-flex', alignItems: 'flex-start', flexDirection: 'row' },
            avatar: { marginEnd: e.spaces.space12, transformOrigin: '50% 100%' },
            avatarSpacer: { height: e.spaces.space40, width: e.spaces.space40 },
            overflowAvatar: {
              borderRadius: e.borderRadii.infinite,
              backgroundColor: e.colors.primary,
              alignItems: 'center',
              justifyContent: 'center',
            },
            overflowAvatarText: { color: 'white' },
            messageBubble: {
              alignItems: 'center',
              borderRadius: e.borderRadii.infinite,
              maxWidth: '100%',
              paddingVertical: e.spaces.space12,
              paddingHorizontal: e.spaces.space16,
              backgroundColor: e.colors.gray50,
              borderBottomLeftRadius: e.borderRadii.none,
              borderColor: e.colors.gray200,
              flexDirection: 'row',
              height: e.spaces.space40,
              overflow: 'hidden',
              transformOrigin: '0% 100%',
            },
            dot: {
              display: 'flex-inline',
              position: 'relative',
              width: e.spaces.space12,
              height: e.spaces.space12,
              overflow: 'hidden',
              borderRadius: e.borderRadii.infinite,
              backgroundColor: e.colors.gray700,
              marginEnd: e.spaces.space4,
              animationDuration: '1.2s',
              animationIterationCount: 'infinite',
              animationTimingFunction: 'linear',
              animationKeyframes: [
                {
                  '15%': { transform: [{ scale: 1.4 }], backgroundColor: e.colors.primary },
                  '30%': { transform: [{ scale: 1 }] },
                },
              ],
            },
            dot1: { animationDelay: '0.1s' },
            dot2: { animationDelay: '0.2s' },
          }
        }),
        Po = uo(Io),
        xo = n('tn7R')
      function To(e) {
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
      var Ao = (function (e) {
        u()(n, e)
        var t = To(n)
        function n() {
          var e
          a()(this, n)
          for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
          return (
            (e = t.call.apply(t, [this].concat(i))),
            v()(s()(e), '_timers', {}),
            v()(s()(e), 'state', { forceHide: !1, userIds: [] }),
            v()(s()(e), '_handleLivePipelineUpdate', function (t) {
              var n = t.dm_typing.user_id
              n !== e.context.loggedInUserId &&
                (e._timers[n] && clearTimeout(e._timers[n]),
                (e._timers[n] = setTimeout(function () {
                  return e._removeAvatar(n)
                }, 4e3)),
                e.setState(function (e) {
                  return {
                    forceHide: !1,
                    userIds: [].concat(
                      st()(
                        e.userIds.filter(function (e) {
                          return e !== n
                        }),
                      ),
                      [n],
                    ),
                  }
                }))
            }),
            v()(s()(e), '_removeAvatar', function (t) {
              var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
              e.setState(function (e) {
                var r = e.userIds.filter(function (e) {
                  return e !== t
                })
                return { forceHide: n && 0 === r.length, userIds: r }
              })
            }),
            e
          )
        }
        return (
          o()(n, [
            {
              key: 'componentDidMount',
              value: function () {
                this._initializeLivePipeline()
              },
            },
            {
              key: 'componentDidUpdate',
              value: function (e, t) {
                if (this.props.lastEntry) {
                  var n = (e || {}).lastEntry,
                    r = void 0 === n ? {} : n,
                    a = this.props.lastEntry
                  r && r.id !== a.id && a.message_data && this._removeAvatar(a.message_data.sender_id, !0)
                }
                e.conversationId !== this.props.conversationId &&
                  (this._teardownLivePipeline(), this._initializeLivePipeline())
              },
            },
            {
              key: 'componentWillUnmount',
              value: function () {
                this._teardownLivePipeline()
              },
            },
            {
              key: 'render',
              value: function () {
                var e = this.state,
                  t = e.forceHide,
                  n = e.userIds
                return !t && y.createElement(Po, { userIds: n })
              },
            },
            {
              key: '_teardownLivePipeline',
              value: function () {
                Object(xo.a)(this._timers).forEach(function (e) {
                  return clearTimeout(e)
                }),
                  this._livePipelineSubscription && this._livePipelineSubscription.teardown()
              },
            },
            {
              key: '_initializeLivePipeline',
              value: function () {
                var e = this,
                  t = this.props.conversationId
                Object(b.h)().then(function (n) {
                  var r = n.LivePipeline
                  r.isSupportedAndReady(e.context.featureSwitches) &&
                    e.context.featureSwitches.isTrue('livepipeline_dm_features_enabled') &&
                    !e._livePipelineSubscription &&
                    (e._livePipelineSubscription = r
                      .get()
                      .subscribeTopic('/dm_typing/'.concat(t), e._handleLivePipelineUpdate))
                })
              },
            },
          ]),
          n
        )
      })(y.PureComponent)
      v()(Ao, 'contextType', $.a)
      var Mo = co(Ao),
        jo = n('3AAD'),
        Do = n('iBK2'),
        Lo = n('Fz18'),
        Fo = n('RJrc'),
        Bo = n('yw4N'),
        No = (n('XygZ'), n('dPJJ')),
        Ho = n('zrc3'),
        Uo = n('pQ3Z'),
        Vo = n.n(Uo),
        Wo = n('VY6S'),
        zo = n('Resy'),
        Ko = (function () {
          function e(t) {
            var n = this
            a()(this, e),
              v()(this, '_trackScroll', function () {
                n._programmaticScroll ? (n._programmaticScroll = !1) : (n._lastScrollTs = Date.now())
              }),
              v()(this, '_normalize', function () {
                n._wrapperNode &&
                  0 !== n._transform &&
                  n._viewport &&
                  ((n._wrapperNode.style.transform = ''), n._viewport.scrollBy(-1 * n._transform), (n._transform = 0))
              }),
              v()(this, '_normalizeIfNeeded', function () {
                if (n._wrapperNode && n._viewport && 0 !== n._transform) {
                  var e = n._viewport,
                    t = n._wrapperNode.getBoundingClientRect(),
                    r = t.height,
                    a = t.top,
                    i = new zo.a(a, r),
                    o = i.translateBy(-1 * n._transform),
                    c = e.getRect()
                  c.contains(o.getTop()) ||
                  c.contains(o.getBottom()) ||
                  c.contains(i.getTop()) ||
                  c.contains(i.getBottom())
                    ? n._normalize()
                    : n._debouncedNormalize()
                }
              }),
              (this._transform = 0),
              (this._viewport = t),
              (this._lastScrollTs = 0),
              (this._debouncedNormalize = Object(Wo.a)(this._normalize, 500)),
              (this._removeScrollListener = t.addScrollListener(this._normalizeIfNeeded)),
              (this._removeScrollTracker = t.addScrollListener(this._trackScroll))
          }
          return (
            o()(e, [
              {
                key: 'setWrapperNode',
                value: function (e) {
                  this._wrapperNode = e
                },
              },
              {
                key: 'teardown',
                value: function () {
                  this._removeScrollListener(), this._removeScrollTracker(), delete this._viewport
                },
              },
              {
                key: 'offsetBy',
                value: function (e) {
                  if (!(Math.abs(e) <= 0.5)) {
                    var t = this._wrapperNode,
                      n = Date.now() - this._lastScrollTs
                    !t || n >= 500
                      ? ((this._programmaticScroll = !0), this._viewport && this._viewport.scrollBy(e))
                      : ((this._transform = this._transform - e),
                        (t.style.transform = 'translateY('.concat(this._transform, 'px)')),
                        this._normalizeIfNeeded())
                  }
                },
              },
            ]),
            e
          )
        })()
      function Go(e) {
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
      var qo = (function (e) {
        u()(n, e)
        var t = Go(n)
        function n(e, r) {
          var i
          a()(this, n),
            (i = t.call(this, e, r)),
            v()(s()(i), '_updatesSuspended', !1),
            v()(s()(i), '_handleHeightsUpdate', function (e, t) {
              var n = i.props.anchoring
              i._scrollBy(n.offsetCorrection(e, t))
            }),
            v()(s()(i), '_receiveWrapperNode', function (e) {
              return i._offsetHandler.setWrapperNode(e)
            }),
            v()(s()(i), '_handleRefUpdate', function (e) {
              i._ref = e
            }),
            v()(s()(i), '_handleEnterFullscreen', function () {
              ;(i._updatesSuspended = !0), i._ref && i._ref.freezeUpdates()
            }),
            v()(s()(i), '_handleExitFullscreen', function () {
              ;(i._updatesSuspended = !1), i.forceUpdate(), i._ref && i._ref.resumeUpdates()
            })
          var o = i._findInitialAnchor(e.initialAnchors || [])
          return (
            (i._initialItemIndex = o ? o.anchorIndex : 0),
            (i._initialAnchor = o && o.anchor),
            (i._offsetHandler = new Ko(e.viewport)),
            i
          )
        }
        return (
          o()(n, [
            {
              key: 'UNSAFE_componentWillMount',
              value: function () {
                var e = this.props,
                  t = e.anchoring,
                  n = e.viewport
                this.setState({ scrollHeadroom: t.initialScrollHeadroom(n) })
              },
            },
            {
              key: 'shouldComponentUpdate',
              value: function (e, t) {
                var n = !Vo()(this.props, e) || !Vo()(this.state, t)
                return !this._updatesSuspended && n
              },
            },
            {
              key: 'componentDidMount',
              value: function () {
                var e = this
                this._initialAnchor && this._scrollToAnchor(this._initialAnchor),
                  this._requestAnimationFrame(function () {
                    var t = e.props,
                      n = t.list,
                      r = t.onPositionRestored
                    t.retryPositionRestoration &&
                      e._initialAnchor &&
                      !!n.find(function (t) {
                        var n = t.id
                        return e._initialAnchor && n === e._initialAnchor.id
                      }) &&
                      e._initialAnchor &&
                      e._scrollToAnchor(e._initialAnchor)
                    r(),
                      e._requestAnimationFrame(function () {
                        e._relaxScrollHeadroom()
                      })
                  }),
                  (this._unlistenFullscreenEnter = No.a(this._handleEnterFullscreen)),
                  (this._unlistenFullscreenExit = No.b(this._handleExitFullscreen))
              },
            },
            {
              key: 'getAnchors',
              value: function (e) {
                var t = e || (this._ref && this._ref.getPositioning())
                return t ? this.props.anchoring.anchorCandidates(t) : []
              },
            },
            {
              key: 'getPositioning',
              value: function () {
                return this._ref && this._ref.getPositioning()
              },
            },
            {
              key: 'componentWillUnmount',
              value: function () {
                ;(this._unmounted = !0),
                  this._offsetHandler.teardown(),
                  this._unlistenFullscreenEnter && this._unlistenFullscreenEnter(),
                  this._unlistenFullscreenExit && this._unlistenFullscreenExit()
              },
            },
            {
              key: 'render',
              value: function () {
                var e = this.props,
                  t = e.list,
                  n = e.renderItem,
                  r = e.renderList,
                  a = this.state.scrollHeadroom
                return y.createElement(
                  'div',
                  { ref: this._receiveWrapperNode, style: { paddingBottom: a } },
                  r({
                    initialItemIndex: this._initialItemIndex,
                    list: t,
                    renderItem: n,
                    ref: this._handleRefUpdate,
                    onHeightsUpdate: this._handleHeightsUpdate,
                  }),
                )
              },
            },
            {
              key: '_scrollToAnchor',
              value: function (e) {
                var t = this.props.anchoring,
                  n = this._ref && this._ref.getPositioning()
                n && this._scrollBy(t.offsetToAnchor(n, e))
              },
            },
            {
              key: '_findInitialAnchor',
              value: function (e) {
                var t = this.props.list
                return e
                  .map(function (e) {
                    var n = Object(Ho.a)(t, function (t) {
                      return t.id === e.id
                    })
                    return n >= 0 ? { anchorIndex: n, anchor: e } : null
                  })
                  .find(function (e) {
                    return e
                  })
              },
            },
            {
              key: '_relaxScrollHeadroom',
              value: function () {
                var e = this._ref && this._ref.getPositioning()
                if (e) {
                  var t = this.props.anchoring.scrollHeadroom(e)
                  t < this.state.scrollHeadroom && this.setState({ scrollHeadroom: t })
                }
              },
            },
            {
              key: '_scrollBy',
              value: function (e) {
                this._offsetHandler.offsetBy(e)
              },
            },
            {
              key: '_requestAnimationFrame',
              value: function (e) {
                var t = this
                return window.requestAnimationFrame(function () {
                  t._unmounted || e()
                })
              },
            },
          ]),
          n
        )
      })(y.Component)
      v()(qo, 'defaultProps', { anchoring: jo.a })
      var Yo = n('AOWc'),
        Xo = n('180P'),
        Qo = n('Ey+e'),
        Zo = n('SrIh'),
        Jo = n('E6XO'),
        $o = n('06eB'),
        ec = n.n($o),
        tc = n('aITJ')
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
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var rc = function () {
          return window.performance ? window.performance.now() : Date.now()
        },
        ac = (function (e) {
          u()(n, e)
          var t = nc(n)
          function n(e, r) {
            var i
            return (
              a()(this, n),
              (i = t.call(this, e, r)),
              v()(s()(i), '_perfReported', !1),
              v()(s()(i), '_observeElement', function (e) {
                var t = i._resizeObserver
                t && (t.disconnect(), t.observe(e))
              }),
              v()(s()(i), '_handleResize', function (e) {
                var t = i.props,
                  n = t.id,
                  r = t.onHeightChanged,
                  a = Pe()(e, 1)[0]
                i._isResizeObserverHeightUpdatesEnabled &&
                  a &&
                  a.contentRect.height !== i._currentHeight &&
                  ((i._currentHeight = a.contentRect.height), r(n, a.contentRect.height)),
                  i._perfReported || (i.props.onVisible(n, rc() - i._perfStart), (i._perfReported = !0))
              }),
              v()(s()(i), '_setRef', function (e) {
                var t = i.props,
                  n = t.id,
                  r = t.setAPI
                e ? ((i._element = e), r(n, s()(i)), i._observeElement(e)) : (r(n, void 0), (i._element = void 0))
              }),
              (i._isResizeObserverHeightUpdatesEnabled =
                i.context.featureSwitches.isTrue('responsive_web_vs_config_resize_observer_enabled') &&
                tc.b.isDesktopOS() &&
                tc.b.isSafari()),
              (i._resizeObserver = new window.ResizeObserver(i._handleResize)),
              (i._perfStart = rc()),
              i
            )
          }
          return (
            o()(n, [
              {
                key: 'shouldComponentUpdate',
                value: function (e) {
                  var t = this.props,
                    n = t.data
                  return t.render !== e.render || !ec()(n, e.data)
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._resizeObserver && this._resizeObserver.disconnect()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t = this.props,
                    n = t.id,
                    r = t.setAPI
                  e.id !== n && (r(e.id, void 0), r(n, this))
                },
              },
              {
                key: 'measureHeight',
                value: function () {
                  return (
                    (this._currentHeight = this._element ? this._element.getBoundingClientRect().height : 0),
                    this._currentHeight
                  )
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.data,
                    n = e.render
                  return y.createElement('div', { ref: this._setRef }, n(t))
                },
              },
            ]),
            n
          )
        })(y.Component)
      v()(ac, 'contextType', $.a)
      var ic = n('+d3d'),
        oc = n('iChn')
      function cc(e) {
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
      var sc = (function (e) {
          u()(n, e)
          var t = cc(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              v()(s()(e), '_cells', new Map()),
              v()(s()(e), '_heightUpdates', {}),
              v()(s()(e), '_visibilityMeasurements', new Map()),
              v()(s()(e), '_handleItemVisible', function (t, n) {
                e._visibilityMeasurements.has(t) || e._visibilityMeasurements.set(t, n)
              }),
              v()(s()(e), '_reportVisibilityMeasurements', function () {
                if (e._visibilityMeasurements.size) {
                  var t = 0
                  e._visibilityMeasurements.forEach(function (e) {
                    return (t += e)
                  })
                  var n = Math.round(t / e._visibilityMeasurements.size),
                    r = tc.b.isDesktopOS() ? 'scroller_legacy' : 'scroller_legacy_mobile'
                  Jo.c('scroller:ttfv:'.concat(r), { duration_ms: n }), e._visibilityMeasurements.clear()
                }
              }),
              v()(s()(e), '_handleCellHeightChanged', function (t, n) {
                ;(e._heightUpdates[t] = n), e._flushHeightUpdates()
              }),
              v()(
                s()(e),
                '_flushHeightUpdates',
                Object(ic.a)(
                  function () {
                    ;(0, e.props.onHeightsChange)(e._heightUpdates), (e._heightUpdates = {})
                  },
                  100,
                  { trailing: !0 },
                ),
              ),
              v()(s()(e), '_setCellRef', function (t, n) {
                n ? e._cells.set(t, n) : e._cells.delete(t)
              }),
              v()(s()(e), '_handleDivRefUpdate', function (t) {
                e._div = t
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'getWrapperNode',
                value: function () {
                  return this._div
                },
              },
              {
                key: 'getItemHeights',
                value: function () {
                  var e = this,
                    t = this.props.list
                  return Object(oc.a)(
                    t,
                    function (e) {
                      return e.id
                    },
                    function (t) {
                      var n = e._cells.get(t.id)
                      return n ? n.measureHeight() : 0
                    },
                  )
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._reportVisibilityMeasurements()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.blankSpaceAbove,
                    n = e.blankSpaceBelow
                  return y.createElement(
                    'div',
                    { ref: this._handleDivRefUpdate, style: { paddingTop: t, paddingBottom: n } },
                    this._renderContent(),
                  )
                },
              },
              {
                key: '_renderContent',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.list,
                    r = t.renderItem
                  return n.map(function (t) {
                    var n = t.data,
                      a = t.id
                    return y.createElement(ac, {
                      data: n,
                      id: a,
                      key: a,
                      onHeightChanged: e._handleCellHeightChanged,
                      onVisible: e._handleItemVisible,
                      render: r,
                      setAPI: e._setCellRef,
                    })
                  })
                },
              },
            ]),
            n
          )
        })(y.PureComponent),
        lc = n('oi7R'),
        uc = n('aWzz'),
        dc = n('JD1h'),
        pc = n('OeMK'),
        fc = (n('IAdD'), n('jHwr')),
        hc = n('qdp+'),
        mc = (function () {
          function e(t) {
            var n = t.list,
              r = t.rectangles,
              i = t.sliceEnd,
              o = t.sliceStart,
              c = t.viewportRectangle
            a()(this, e),
              (this._viewportRectangle = c),
              (this._list = n),
              (this._rectangles = r),
              (this._sliceStart = o),
              (this._sliceEnd = i)
          }
          return (
            o()(e, [
              {
                key: 'getForViewport',
                value: function () {
                  return this._viewportRectangle
                },
              },
              {
                key: 'getForList',
                value: function () {
                  var e = this._list
                  if (0 === e.length) return new zo.a(0, 0)
                  var t = this._rectangles,
                    n = e[0].id,
                    r = e[e.length - 1].id,
                    a = t[n].getTop(),
                    i = t[r].getBottom() - a
                  return new zo.a(a, i)
                },
              },
              {
                key: 'getForAllItems',
                value: function () {
                  var e = this
                  return this._list.map(function (t) {
                    var n = t.id
                    return { id: n, rectangle: e._rectangles[n] }
                  })
                },
              },
              {
                key: 'getList',
                value: function () {
                  return this._list
                },
              },
              {
                key: 'getListLength',
                value: function () {
                  return this._list.length
                },
              },
              {
                key: 'getForItem',
                value: function (e) {
                  return this._rectangles[e]
                },
              },
              {
                key: 'findVisibleItems',
                value: function () {
                  var e = this,
                    t = this._viewportRectangle,
                    n = this._rectangles,
                    r = Object(Ho.a)(this._list, function (e) {
                      var r = e.id
                      return n[r].doesIntersectWith(t)
                    })
                  if (r < 0) return []
                  var a = Object(Ho.a)(
                    this._list,
                    function (e) {
                      var r = e.id
                      return !n[r].doesIntersectWith(t)
                    },
                    r,
                  )
                  return (
                    -1 === a && (a = this._list.length),
                    this._list
                      .slice(r, a)
                      .filter(function (t) {
                        var n = t.id
                        return e.isRendered(n)
                      })
                      .map(function (e) {
                        var t = e.id
                        return { id: t, rectangle: n[t] }
                      })
                  )
                },
              },
              {
                key: 'getRenderedItems',
                value: function () {
                  var e = this._rectangles
                  return this._list.slice(this._sliceStart, this._sliceEnd).map(function (t) {
                    var n = t.id
                    return { id: n, rectangle: e[n] }
                  })
                },
              },
              {
                key: 'findTopmostVisibleId',
                value: function () {
                  var e = this
                  return Object(hc.a)(this.getRenderedItems(), function (t) {
                    return t.rectangle.getTop() >= e._viewportRectangle.getTop() ? t.id : void 0
                  })
                },
              },
              {
                key: 'isRendered',
                value: function (e) {
                  return this._getRenderedIdSet().hasOwnProperty(e)
                },
              },
              {
                key: '_getRenderedIdSet',
                value: function () {
                  if (!this._renderedIdSet) {
                    for (var e = {}, t = this._sliceStart; t < this._sliceEnd; t++) e[this._list[t].id] = !0
                    this._renderedIdSet = e
                  }
                  return this._renderedIdSet
                },
              },
            ]),
            e
          )
        })(),
        vc = n('64vW'),
        yc = function (e, t, n) {
          if (t < 0 || t >= e.length) return -1
          if (n(e[t])) return t
          for (var r = 1; ; r++) {
            var a = t - r,
              i = t + r,
              o = a < 0,
              c = i >= e.length
            if (o && c) break
            if (!c && n(e[i])) return i
            if (!o && n(e[a])) return a
          }
          return -1
        },
        bc = function (e) {
          var t = e.list,
            n = e.nextList,
            r = e.sliceEnd,
            a = e.sliceStart,
            i = n.reduce(function (e, t) {
              return (e[t.id] = !0), e
            }, {}),
            o = yc(t, a, function (e) {
              var t = e.id
              return !Object(pc.a)(t) && i.hasOwnProperty(t) && i[t]
            })
          if (-1 === o) return null
          var c = Object(Ho.a)(n, function (e) {
            var n = e.id
            return t[o].id === n
          })
          return (
            Object(Yo.a)(c >= 0, 'newSliceStart should be defined if we found a common item'),
            o > 0 && Object(pc.a)(t[o - 1].id) && c > 0 && Object(pc.a)(n[c - 1].id) && (c -= 1),
            { sliceStart: c, sliceEnd: Math.min(n.length, c + r - a) }
          )
        }
      function gc(e, t) {
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
      function _c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? gc(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : gc(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function Ec(e) {
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
      var Oc = { heightsReady: !0 },
        Sc = (function (e) {
          u()(n, e)
          var t = Ec(n)
          function n(e, r) {
            var i
            a()(this, n),
              (i = t.call(this, e, r)),
              v()(s()(i), '_updatesSuspended', !1),
              v()(s()(i), 'freezeUpdates', function () {
                i._updatesSuspended = !0
              }),
              v()(s()(i), 'resumeUpdates', function () {
                ;(i._updatesSuspended = !1), i._scheduleUpdate()
              }),
              v()(s()(i), '_handleHeightsChange', function (e) {
                i._postRenderProcessing({ hasListChanged: !1, newHeights: e })
              }),
              v()(s()(i), '_handleRefUpdate', function (e) {
                i._ref = e
              }),
              v()(s()(i), '_setNecessarySlice', function (e, t) {
                var n = i.state,
                  r = n.sliceEnd,
                  a = (function (e, t) {
                    if (t.start >= e.start && t.end <= e.end) return e
                    if (t.start >= e.end || t.end <= e.start) return t
                    var n = Math.max(e.start - t.start, t.end - e.end)
                    return { start: Math.min(e.start + n, t.start), end: Math.max(e.end - n, t.end) }
                  })({ start: n.sliceStart, end: r }, { start: e, end: t }),
                  o = a.end,
                  c = a.start
                i._setSlice(c, o)
              }),
              v()(s()(i), '_setSlice', function (e, t) {
                if (!i._updatesSuspended) {
                  var n = i.state,
                    r = n.sliceEnd
                  ;(e === n.sliceStart && t === r) || i.setState({ sliceStart: e, sliceEnd: t })
                }
              })
            var o = i.props,
              c = o.initialItemIndex,
              l = o.list
            ;(i._assumedItemHeight = e.assumedItemHeight),
              (i._getSlice = function () {
                var e = i.props.list,
                  t = i.state,
                  n = t.sliceEnd,
                  r = t.sliceStart
                return i._getMemoizedSlice(e, r, n)
              }),
              (i._getMemoizedSlice = Object(xe.a)(function (e, t, n) {
                return e.slice(t, n)
              })),
              (i._getRectangles = function (e) {
                var t = e || s()(i),
                  n = t._assumedItemHeight,
                  r = t._heights,
                  a = t.props.list
                return t._getMemoizedRectangles(a, r, n)
              }),
              (i._getMemoizedRectangles = Object(xe.a)(function (e, t, n) {
                return Cc(e, t, n)
              })),
              (i._heights = {})
            var u = i.props,
              d = u.cacheKey,
              p = u.heightCache
            d && p.hasOwnProperty(d) && (i._heights = p[d]), (i.state = i._getDefaultSlice(l, c))
            var f = Object(fc.a)(function () {
              return i._criticalUpdate()
            }, window.requestAnimationFrame)
            return (
              (i._scheduleUpdate = window.requestIdleCallback
                ? Object(fc.a)(function () {
                    return i._criticalUpdate()
                  }, window.requestIdleCallback)
                : f),
              (i._schedulePositioningNotification = Object(fc.a)(
                function () {
                  return i._notifyPositioning()
                },
                window.requestIdleCallback
                  ? function (e) {
                      return window.requestIdleCallback(e, { timeout: 500 })
                    }
                  : window.requestAnimationFrame,
              )),
              (i._handleScroll = Object(ic.a)(f, 100, { trailing: !0 })),
              (i._scheduleDebouncedUpdate = Object(Wo.a)(function () {
                window.requestAnimationFrame(function () {
                  i._debouncedUpdate()
                })
              }, 500)),
              (i._removeDebouncedListener = e.viewport.addScrollListener(i._scheduleDebouncedUpdate)),
              i
            )
          }
          return (
            o()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  ;(this._unlistenScroll = this.props.viewport.addScrollListener(this._handleScroll)),
                    this._postRenderProcessing({ hasListChanged: !0 })
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  ;(this._unmounted = !0),
                    this._unlistenScroll && this._unlistenScroll(),
                    this._removeDebouncedListener()
                  var e = this.props,
                    t = e.cacheKey,
                    n = e.heightCache
                  t && (n[t] = this._heights)
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  this._postRenderProcessing({ hasListChanged: e.list !== this.props.list })
                },
              },
              {
                key: 'UNSAFE_componentWillReceiveProps',
                value: function (e) {
                  var t = this.props.list,
                    n = this.state,
                    r = n.sliceEnd,
                    a = n.sliceStart,
                    i = e.list
                  if (i !== t) {
                    var o = bc({ list: t, nextList: i, sliceStart: a, sliceEnd: r }) || this._getDefaultSlice(i)
                    this._setSlice(o.sliceStart, o.sliceEnd)
                  }
                },
              },
              {
                key: 'UNSAFE_componentWillUpdate',
                value: function () {
                  this._prevPositioning = this.getPositioning()
                },
              },
              {
                key: 'getPositioning',
                value: function () {
                  var e = this.state,
                    t = e.sliceEnd,
                    n = e.sliceStart
                  return new mc({
                    viewportRectangle: this._getRelativeViewportRect(),
                    list: this.props.list,
                    rectangles: this._getRectangles(),
                    sliceStart: n,
                    sliceEnd: t,
                  })
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.renderItem,
                    n = e.renderList,
                    r = this._computeBlankSpace(),
                    a = r.blankSpaceAbove,
                    i = r.blankSpaceBelow
                  return y.createElement(
                    vc.a.Provider,
                    { value: Oc },
                    n({
                      ref: this._handleRefUpdate,
                      list: this._getSlice(),
                      blankSpaceAbove: a,
                      blankSpaceBelow: i,
                      renderItem: t,
                      onHeightsChange: this._handleHeightsChange,
                    }),
                  )
                },
              },
              {
                key: '_computeBlankSpace',
                value: function () {
                  var e = this.props.list,
                    t = this.state,
                    n = t.sliceEnd,
                    r = t.sliceStart,
                    a = this._getRectangles(),
                    i = 0 === e.length ? 0 : a[e[r].id].getTop() - a[e[0].id].getTop(),
                    o = Object(J.a)(e)
                  return {
                    blankSpaceAbove: i,
                    blankSpaceBelow: n >= e.length || !o ? 0 : a[o.id].getBottom() - a[e[n].id].getTop(),
                  }
                },
              },
              {
                key: '_postRenderProcessing',
                value: function (e) {
                  var t = e.hasListChanged,
                    n = e.newHeights
                  if (this._recordHeights(n).wasHeightChange || t) {
                    var r = this._prevPositioning
                    if (r) (0, this.props.onHeightsUpdate)(r, this.getPositioning())
                  }
                  var a = this.props,
                    i = a.minimumOffscreenToViewportRatio,
                    o = a.preferredOffscreenToViewportRatio
                  t || !this._sliceIncludesScaledViewport(i)
                    ? this._scheduleUpdate()
                    : this._sliceIncludesScaledViewport(o) || this._scheduleDebouncedUpdate(),
                    this._schedulePositioningNotification()
                },
              },
              {
                key: '_sliceIncludesScaledViewport',
                value: function (e) {
                  var t = this._computeSlice({ offscreenToViewportRatio: e }),
                    n = t.sliceEnd
                  return t.sliceStart >= this.state.sliceStart && n <= this.state.sliceEnd
                },
              },
              {
                key: '_recordHeights',
                value: function (e) {
                  var t = this
                  if (!this._ref) return { heightDelta: 0, wasHeightChange: !1 }
                  var n = e || this._ref.getItemHeights(),
                    r = !1,
                    a = Object.keys(n).reduce(function (e, a) {
                      var i = t._heights.hasOwnProperty(a) ? t._heights[a] : t._assumedItemHeight,
                        o = n[a]
                      return (r = r || i !== o), e + (o - i)
                    }, 0)
                  return (
                    r && (this._heights = Object.assign(_c({}, this._heights), n)),
                    { wasHeightChange: r, heightDelta: a }
                  )
                },
              },
              {
                key: '_criticalUpdate',
                value: function () {
                  var e = this._computeSlice({ offscreenToViewportRatio: this.props.minimumOffscreenToViewportRatio }),
                    t = e.sliceEnd,
                    n = e.sliceStart
                  'number' == typeof n && 'number' == typeof t && this._setNecessarySlice(n, t)
                },
              },
              {
                key: '_debouncedUpdate',
                value: function () {
                  var e = this._computeSlice({
                      offscreenToViewportRatio: this.props.preferredOffscreenToViewportRatio,
                    }),
                    t = e.sliceEnd,
                    n = e.sliceStart
                  'number' == typeof n && 'number' == typeof t && this._setSlice(n, t)
                },
              },
              {
                key: '_computeSlice',
                value: function (e) {
                  var t = e.offscreenToViewportRatio,
                    n = this.props.list
                  if (this._unmounted || 0 === n.length) return {}
                  var r = this._getRelativeViewportRect(),
                    a = r.getHeight() * t,
                    i = r.getTop() - a,
                    o = r.getBottom() + a,
                    c = this._getRectangles(),
                    s = Object(Ho.a)(n, function (e) {
                      var t = e.id
                      return c[t].getBottom() > i
                    }),
                    l = s >= 0 ? s : n.length - 1,
                    u = Object(Ho.a)(
                      n,
                      function (e) {
                        var t = e.id
                        return c[t].getTop() >= o
                      },
                      l,
                    ),
                    d = u >= 0 ? u : n.length
                  return this._schedulePositioningNotification(), { sliceStart: l, sliceEnd: d }
                },
              },
              {
                key: '_notifyPositioning',
                value: function () {
                  this._unmounted || (0, this.props.onPositioningUpdate)(this.getPositioning())
                },
              },
              {
                key: '_getRelativeViewportRect',
                value: function () {
                  if (!this._ref) return new zo.a(0, 0)
                  var e = this._ref.getWrapperNode()
                  if (!e) return new zo.a(0, 0)
                  var t = Math.ceil(e.getBoundingClientRect().top)
                  return this.props.viewport.getRect().translateBy(-t)
                },
              },
              {
                key: '_getDefaultSlice',
                value: function (e) {
                  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = this.props.viewport,
                    r = n.getRect().getHeight(),
                    a = _c(
                      _c({}, this),
                      {},
                      {
                        props: _c(_c({}, this.props), {}, { list: e }),
                        state: _c({}, this.state),
                        context: _c({}, this.context),
                        refs: null,
                      },
                    ),
                    i = this._getRectangles(a),
                    o = e[t].id,
                    c = i[o].getBottom(),
                    s = Object(Ho.a)(
                      e,
                      function (e) {
                        var t = e.id
                        return i[t].getTop() - c >= r
                      },
                      t,
                    ),
                    l = s >= 0 ? s : e.length
                  return { sliceStart: t, sliceEnd: Math.min(e.length, l) }
                },
              },
            ]),
            n
          )
        })(y.PureComponent)
      v()(Sc, 'defaultProps', {
        assumedItemHeight: 400,
        heightCache: {},
        initialItemIndex: 0,
        minimumOffscreenToViewportRatio: 0.5,
        preferredOffscreenToViewportRatio: 2.5,
      })
      var Cc = function (e, t, n) {
          var r = {}
          return (
            e.reduce(function (e, a) {
              var i = a.id,
                o = t.hasOwnProperty(i) ? t[i] : n,
                c = new zo.a(e, o)
              return (r[i] = c), c.getBottom()
            }, 0),
            r
          )
        },
        wc = Sc
      function Rc(e) {
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
      var Ic = function (e) {
          return (
            Object(Zo.a)('Fallback to slow hashing in VirtualScroller (type = '.concat(e ? e.type : '', ')')),
            Object(Xo.a)(e)
          )
        },
        kc = (function (e) {
          u()(n, e)
          var t = Rc(n)
          function n(e, r) {
            var i
            return (
              a()(this, n),
              (i = t.call(this, e, r)),
              v()(s()(i), '_onDemandRenderer', function (e) {
                var t = i.props,
                  n = t.assumedItemHeight,
                  r = t.minimumOffscreenToViewportRatio,
                  a = t.preferredOffscreenToViewportRatio,
                  o = 'function' == typeof n ? n('') : n
                return y.createElement(
                  wc,
                  yn()({}, e, {
                    assumedItemHeight: o,
                    cacheKey: i.props.cacheKey,
                    minimumOffscreenToViewportRatio: r,
                    onPositioningUpdate: i._handlePositioningUpdate,
                    preferredOffscreenToViewportRatio: a,
                    renderList: i._viewRenderer,
                    viewport: i._viewport,
                  }),
                )
              }),
              v()(s()(i), '_viewRenderer', function (e) {
                return y.createElement(sc, e)
              }),
              v()(s()(i), '_getItemRenderer', function () {
                return i._getMemoizedItemRenderer(i.props.renderer)
              }),
              v()(
                s()(i),
                '_getMemoizedItemRenderer',
                Object(xe.a)(function (e) {
                  return function (t) {
                    return t ? (t.presentational ? t.renderNode() : e(t.data)) : null
                  }
                }),
              ),
              v()(s()(i), '_handleAnchorRendererRefUpdate', function (e) {
                i._anchorRenderer = e
              }),
              v()(s()(i), '_handlePositionRestored', function () {
                ;(0, i.props.onPositionRestored)(), (i._edgeProximity = i._createEdgeProximity())
                var e = i._anchorRenderer && i._anchorRenderer.getPositioning()
                e && i._edgeProximity.handlePositioningUpdate(e)
              }),
              v()(s()(i), '_handlePositioningUpdate', function (e) {
                i._edgeProximity && i._edgeProximity.handlePositioningUpdate(e)
                var t = i.props.onItemsRendered
                t && t({ positions: e.getRenderedItems(), viewport: e.getForViewport() })
              }),
              v()(s()(i), '_getList', function () {
                var e = i.props,
                  t = e.footer,
                  n = e.header,
                  r = e.identityFunction,
                  a = e.items
                return i._getMemoizedList(r, a, n, t)
              }),
              v()(
                s()(i),
                '_getMemoizedList',
                Object(xe.a)(function (e, t, n, r) {
                  var a = {},
                    i = t.reduce(function (t, n) {
                      var r = e(n) || n.id || Ic(n)
                      return (
                        Object(Yo.a)('number' == typeof r || 'string' == typeof r, 'Item id must not be falsy'),
                        a.hasOwnProperty(r)
                          ? Object(Zo.a)(
                              'Duplicate item id generated in VirtualScroller. Latter item will be discarded',
                              { extra: { id: r } },
                            )
                          : (t.push({ data: { data: n }, id: r }), (a[r] = !0)),
                        t
                      )
                    }, []),
                    o = n
                      ? {
                          id: pc.c,
                          data: {
                            presentational: !0,
                            renderNode: function () {
                              return n
                            },
                          },
                        }
                      : null,
                    c = r
                      ? {
                          id: pc.b,
                          data: {
                            presentational: !0,
                            renderNode: function () {
                              return r
                            },
                          },
                        }
                      : null
                  return i.length ? [].concat(st()(o ? [o] : []), st()(i), st()(c ? [c] : [])) : []
                }),
              ),
              (i._viewport = e.viewport || r.viewport || lc.a.root()),
              i
            )
          }
          return (
            o()(n, [
              {
                key: 'scrollToNewest',
                value: function (e) {
                  this._viewport.scrollToTop()
                },
              },
              {
                key: 'isAtNewest',
                value: function () {
                  var e = this._anchorRenderer && this._anchorRenderer.getPositioning()
                  return ((e && e.getForViewport().getTop()) || 0) < 50
                },
              },
              { key: 'adjustFocusBy', value: function (e) {} },
              {
                key: 'UNSAFE_componentWillMount',
                value: function () {
                  ;(this._isManualScrollRestoration = window.history && 'manual' === window.history.scrollRestoration),
                    this._loadStoredPosition(this.props)
                },
              },
              {
                key: 'UNSAFE_componentWillReceiveProps',
                value: function (e) {
                  this.props.cacheKey !== e.cacheKey &&
                    (this._preservePosition(this._customLocation), this._loadStoredPosition(e))
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._preservePosition(this._customLocation)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.anchoring,
                    n = e.cacheKey,
                    r = e.items,
                    a = e.noItemsRenderer
                  return r.length
                    ? y.createElement(qo, {
                        anchoring: t,
                        initialAnchors: this._initialAnchors || [],
                        key: n,
                        list: this._getList(),
                        onPositionRestored: this._handlePositionRestored,
                        ref: this._handleAnchorRendererRefUpdate,
                        renderItem: this._getItemRenderer(),
                        renderList: this._onDemandRenderer,
                        retryPositionRestoration: !this._isManualScrollRestoration,
                        viewport: this._viewport,
                      })
                    : a()
                },
              },
              {
                key: '_preservePosition',
                value: function (e) {
                  if (this._anchorRenderer && e) {
                    var t = this._anchorRenderer.getAnchors()
                    e.savePosition(t)
                  }
                },
              },
              {
                key: '_createEdgeProximity',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.nearEndProximityRatio,
                    r = t.nearStartProximityRatio
                  return new dc.b([
                    {
                      condition: dc.a.nearTop(5),
                      callback: function (t) {
                        return e.props.onAtStart(t)
                      },
                    },
                    {
                      condition: dc.a.nearTopRatio(r),
                      callback: function (t) {
                        return e.props.onNearStart(t)
                      },
                    },
                    {
                      condition: dc.a.nearBottomRatio(n),
                      callback: function (t) {
                        return e.props.onNearEnd(t)
                      },
                    },
                    {
                      condition: dc.a.nearBottom(5),
                      callback: function (t) {
                        return e.props.onAtEnd(t)
                      },
                    },
                  ])
                },
              },
              {
                key: '_loadStoredPosition',
                value: function (e) {
                  var t = this.context.getCustomLocation,
                    n = e.initialAnchor
                  if (
                    ((this._customLocation = t && t()), (this._initialAnchors = n ? [n] : []), this._customLocation)
                  ) {
                    var r = this._customLocation.getSavedPosition()
                    r && r.length ? (this._initialAnchors = r) : (this._initialAnchors = n ? [n] : []),
                      this._initialAnchors.length > 0 &&
                        this._customLocation &&
                        this._customLocation.claimScrollRestoration()
                  }
                },
              },
            ]),
            n
          )
        })(y.Component)
      v()(kc, 'displayName', 'VirtualScroller'),
        v()(kc, 'contextTypes', { viewport: uc.object, getCustomLocation: uc.func }),
        v()(kc, 'defaultProps', {
          anchoring: qo.defaultProps.anchoring,
          assumedItemHeight: wc.defaultProps.assumedItemHeight,
          identityFunction: Ic,
          minimumOffscreenToViewportRatio: wc.defaultProps.minimumOffscreenToViewportRatio,
          nearEndProximityRatio: 1.75,
          nearStartProximityRatio: 0.25,
          noItemsRenderer: function () {
            return null
          },
          onPositionRestored: Ar.a,
          onAtEnd: Ar.a,
          onAtStart: Ar.a,
          onNearEnd: Ar.a,
          onNearStart: Ar.a,
          onScrollEnd: Ar.a,
          preferredOffscreenToViewportRatio: wc.defaultProps.preferredOffscreenToViewportRatio,
          withKeyboardShortcuts: !1,
        })
      var Pc = Object(Qo.a)(kc),
        xc = n('mw9i')
      function Tc(e) {
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
      var Ac = Ze.a.i859a9d3,
        Mc = Ze.a.i8ecae5b,
        jc = function (e) {
          return e.entry.id
        },
        Dc = function (e) {
          return e.entry.type === ve.b.MESSAGE
        },
        Lc = (function (e) {
          u()(n, e)
          var t = Tc(n)
          function n(e, r) {
            var i
            return (
              a()(this, n),
              (i = t.call(this, e, r)),
              v()(
                s()(i),
                '_appBarScrollEnabled',
                i.context.featureSwitches.isTrue('responsive_web_app_bar_scroll_enabled'),
              ),
              v()(
                s()(i),
                '_shouldUseNewScroller',
                i.context.featureSwitches.isTrue('responsive_web_dm_new_scroller_enabled'),
              ),
              v()(s()(i), '_renderItem', function (e) {
                var t = i.props.conversation,
                  n = t.conversation_id
                switch (e.type) {
                  case ve.b.TYPING_INDICATOR:
                    return n ? y.createElement(Mo, { conversationId: n }) : null
                  case ve.b.READ_ONLY_INDICATOR:
                    return n
                      ? y.createElement(
                          be.a,
                          { style: Fc.readOnly },
                          y.createElement(
                            ge.b,
                            { align: 'center', color: 'gray700', size: 'subtext2' },
                            Mc,
                            ' ',
                            y.createElement(ge.b, { link: 'https://support.twitter.com/articles/14606#faq' }, Ac),
                          ),
                        )
                      : null
                  case ve.b.CONVERSATION_PROFILE_INFO_HEADER:
                    return y.createElement(de, { conversation: t })
                  default:
                    return i._renderDMEntry(e)
                }
              }),
              v()(s()(i), '_setActiveEntry', function (e) {
                i.setState({ activeEntryId: e })
              }),
              v()(s()(i), '_setShouldFreezeUpdates', function (e) {
                i.setState({ shouldFreezeUpdates: e })
              }),
              (i._anchoring = Y({
                isOwnMessage: function (e) {
                  var t, n
                  return (
                    (null === (t = e.entry) || void 0 === t || null === (n = t.message_data) || void 0 === n
                      ? void 0
                      : n.sender_id) === i.props.perspective || !1
                  )
                },
                typingIndicatorId: X.a,
              })),
              (i.state = { activeEntryId: null, shouldFreezeUpdates: !1 }),
              i
            )
          }
          return (
            o()(n, [
              {
                key: 'shouldComponentUpdate',
                value: function (e, t) {
                  return !1 === t.shouldFreezeUpdates
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.conversation,
                    r = t.drawerHeader,
                    a = t.isWide,
                    i = t.onHistoryRequest,
                    o = t.style,
                    c = this.state.activeEntryId,
                    s = (function (e) {
                      var t = e.activeEntryId,
                        n = e.canInjectConversationProfileInfoHeader,
                        r = e.conversation,
                        a = e.footer,
                        i = e.readOnlyEntry,
                        o = (r && r.entries) || [],
                        c = o.reduce(function (e, a, i) {
                          n && 0 === i && e.push(X.b)
                          var c = Object(J.a)(e),
                            s = i === o.length - 1
                          if (
                            (e.push({
                              isRapidFire: !1,
                              isFirstRapidFire: !1,
                              isLastRapidFire: !1,
                              entry: a,
                              isActive: t === a.id,
                              isTrusted: !(null == r || !r.trusted),
                            }),
                            c)
                          ) {
                            var l = Z(c.entry, a),
                              u = e[e.length - 2]
                            l
                              ? ((e[e.length - 1].isRapidFire = !0),
                                u.isRapidFire || ((u.isFirstRapidFire = !0), (u.isRapidFire = !0)),
                                s && (e[e.length - 1].isLastRapidFire = !0))
                              : u.isRapidFire && (u.isLastRapidFire = !0)
                          }
                          return e
                        }, [])
                      return a && c.push(a), r.read_only && i && c.push(i), c
                    })({
                      conversation: n,
                      footer: X.d,
                      readOnlyEntry: X.c,
                      canInjectConversationProfileInfoHeader: n.status === ve.c.AT_END && n.type === ve.a.ONE_TO_ONE,
                      activeEntryId: c,
                    }),
                    l = n.conversation_id,
                    u = function (e) {
                      return e[e.length - 1]
                    },
                    d = function (e) {
                      for (var t = e.length - 1; t >= 0; t--) {
                        var n = e[t]
                        if (n && Dc(n)) return n
                      }
                      return u(e)
                    },
                    p = 'dm-activity-'.concat(l)
                  return y.createElement(pe.a.Consumer, null, function (t) {
                    var c = t.isDrawer,
                      l = e._appBarScrollEnabled ? (c ? fe.b.drawerHeaderRadius : Fc.scrollSpace) : null
                    return y.createElement(
                      be.a,
                      { style: [Fc.scrollContainer, l] },
                      y.createElement(
                        Bo.a,
                        { style: [Fc.scrollContainer, a && Fc.conversationsPadding, l, o] },
                        r || null,
                        n.status && n.status !== ve.c.AT_END ? y.createElement(Fo.a, null) : null,
                        y.createElement(
                          xc.a,
                          { style: [Fc.content, Fc.alignTop], withGutter: !0 },
                          e._shouldUseNewScroller
                            ? y.createElement(Do.b, {
                                anchoring: jo.a,
                                assumedItemHeight: 50,
                                cacheKey: p,
                                canBeAnchorFunction: Dc,
                                hasNewContentAtBottom: !0,
                                identityFunction: jc,
                                initialAnchor: s.length > 0 ? H.a(jc(d(s))) : void 0,
                                items: s,
                                nearStartProximityRatio: 2,
                                onNearStart: i,
                                renderer: e._renderItem,
                                withoutHeadroom: !1,
                              })
                            : y.createElement(
                                Lo.a,
                                { identifier: p },
                                y.createElement(Pc, {
                                  anchoring: e._anchoring,
                                  assumedItemHeight: 50,
                                  cacheKey: p,
                                  hasNewContentAtBottom: !1,
                                  identityFunction: jc,
                                  initialAnchor: s.length > 0 ? H.a(jc(u(s))) : void 0,
                                  items: s,
                                  nearStartProximityRatio: 2,
                                  onNearStart: i,
                                  renderer: e._renderItem,
                                  withoutHeadroom: !0,
                                }),
                              ),
                        ),
                      ),
                    )
                  })
                },
              },
              {
                key: '_renderDMEntry',
                value: function (e) {
                  var t = e.entry,
                    n = e.isActive,
                    r = e.isFirstRapidFire,
                    a = e.isLastRapidFire,
                    i = e.isRapidFire,
                    o = this.props,
                    c = o.conversation,
                    s = o.inboxType,
                    l = o.isWide,
                    u = o.perspective,
                    d = o.scribeNamespace
                  return t && s
                    ? y.createElement(io, {
                        conversation: c,
                        entry: t,
                        inboxType: s,
                        isActive: n,
                        isFirstRapidFire: r,
                        isLastRapidFire: a,
                        isRapidFire: i,
                        isWide: l,
                        key: t.id,
                        perspective: u,
                        scribeNamespace: d,
                        setActiveEntry: this._setActiveEntry,
                        setShouldFreezeUpdates: this._setShouldFreezeUpdates,
                      })
                    : null
                },
              },
            ]),
            n
          )
        })(y.Component)
      v()(Lc, 'contextType', $.a)
      var Fc = re.a.create(function (e) {
          return {
            spinner: { alignItems: 'center', marginVertical: '30px' },
            scrollContainer: {
              backgroundColor: e.colors.cellBackground,
              flexGrow: 1,
              height: '100%',
              overflowX: 'hidden',
              WebkitOverflowScrolling: 'touch',
            },
            scrollSpace: {
              paddingTop: e.componentDimensions.appBarHeightPx,
              marginTop: -e.componentDimensions.appBarHeightPx,
            },
            conversationsPadding: { paddingTop: e.spaces.space20 },
            content: { flexGrow: 1, transform: [{ translate3d: '0,0,0' }] },
            alignTop: { justifyContent: 'flex-start' },
            readOnly: { paddingBottom: e.spaces.space20 },
          }
        }),
        Bc = n('uB9N'),
        Nc = n('v//M'),
        Hc = n('J2UM'),
        Uc = n('07FG'),
        Vc = n('I8M8'),
        Wc = n('7myi'),
        zc = n('883S'),
        Kc = n('z0MJ'),
        Gc = n.n(Kc),
        qc = n('Es6L'),
        Yc = n('LsPn'),
        Xc = n('GSsg'),
        Qc = n('EbOo'),
        Zc = n('tZH3'),
        Jc = Ze.a.ccf2f24e,
        $c = Ze.a.ib3fe8a9,
        es = function (e) {
          var t = e.isGroup,
            n = e.onBlockClick,
            r = e.onReportClick,
            a = e.requestorScreenName,
            i = { type: 'destructiveOutlined' },
            o = y.createElement(Pt.a, yn()({}, i, { accessibilityRole: 'button' }), $c),
            c = y.createElement(Pt.a, yn()({}, i, { onPress: r }), Jc),
            s = y.useCallback(
              function (e, t) {
                return y.createElement(Zc.a, {
                  dismiss: e,
                  flatBorders: 'sheet' === t,
                  onBlockClick: n,
                  onReportClick: r,
                  requestorScreenName: a,
                  showBlock: !0,
                  showCancel: 'sheet' === t,
                })
              },
              [n, r, a],
            )
          return t ? c : y.createElement(Vn.a, { renderContent: s }, o)
        },
        ts = Object(bn.a)().propsFromActions(function () {
          return {
            addToast: S.b,
            block: P.e.block,
            createLocalApiErrorHandler: Object(A.createLocalApiErrorHandlerWithContextFactory)(
              'UNTRUSTED_CONVERSATION_ACTIONS',
            ),
            muteDMUser: _.muteDMUser,
            unmuteDMUser: _.unmuteDMUser,
            unblock: P.e.unblock,
          }
        }),
        ns = (n('AQ79'), n('u0B7')),
        rs = n('cHvH'),
        as = n('lHOd'),
        is = n('vMjK'),
        os = n('7JQg'),
        cs = n('24HD'),
        ss = n('Ty5D')
      function ls(e, t) {
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
      function us(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ls(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ls(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var ds = Ze.a.da878dcf,
        ps = Ze.a.d96cf7cd,
        fs = (Ze.a.gde6b424, Ze.a.e308019b, Ze.a.gf5e9ea6, Ze.a.hc52446b),
        hs = Ze.a.f7e1ad65,
        ms = { headline: Ze.a.gdf4b79f, text: Ze.a.bbf83d83, confirmButtonLabel: Ze.a.bb1d57b6 },
        vs = re.a.create(function (e) {
          return {
            root: {
              backgroundColor: e.colors.cellBackground,
              borderColor: e.colors.borderColor,
              borderTopStyle: 'solid',
              borderTopWidth: '1px',
              paddingVertical: e.spaces.space20,
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
            },
            copy: { paddingBottom: e.spaces.space20 },
            reportlink: { marginLeft: e.spaces.space4 },
            actionsContainer: { display: 'flex', flexWrap: 'wrap', flexDirection: 'row' },
            actionFullWidth: { width: '100%' },
            actionHalfWidth: { width: 'calc(50% - '.concat(e.spaces.space4, ')') },
            actionMarginRight: { marginRight: e.spaces.space4 },
            actionMarginLeft: { marginLeft: e.spaces.space4 },
            actionMarginTop: { marginTop: e.spaces.space12 },
            actionMarginBottom: { marginBottom: e.spaces.space12 },
          }
        }),
        ys = Object(os.c)({ element: 'untrusted_interstitial' })(
          ts(function (e) {
            var t = e.conversation,
              n = e.scribeAction,
              r = e.scribeNamespace,
              a = y.useContext($.a),
              i = Object(ss.g)(),
              o = Object(ss.h)(),
              c = y.useState(!1),
              s = Pe()(c, 2),
              l = s[0],
              u = s[1],
              d = y.useState(!1),
              p = Pe()(d, 2),
              f = p[0],
              h = p[1],
              m = y.useCallback(
                function () {
                  return { items: [{ conversation_type: t.type === _.CONVERSATION_TYPE.GROUP ? 1 : 0 }] }
                },
                [t.type],
              ),
              v = y.useCallback(
                function (e, t) {
                  n(us(us({}, r), {}, { action: e }), t || m())
                },
                [m, n, r],
              )
            y.useEffect(
              function () {
                v('impression')
              },
              [v],
            )
            var b,
              g,
              E,
              O,
              S = a.featureSwitches.isTrue('dm_vdl_enabled') && a.featureSwitches.isTrue('dm_vdl_chat_p0_enabled'),
              C = function () {
                var t = e.conversationId,
                  n = e.inboxType
                t && (v('report'), i.push(Object(T.f)(t, window.location.pathname, r, n)))
              },
              w = function () {
                u(!0), h(!1)
              },
              R = function () {
                u(!1), h(!0)
              },
              I = function () {
                u(!1)
              },
              k = function () {
                h(!1)
              },
              P = function () {
                var n,
                  r = e.conversationId,
                  a = e.inboxType,
                  i = e.leaveConversation,
                  c = t.type === _.CONVERSATION_TYPE.GROUP ? 'leave_group' : 'delete_thread',
                  s = null != t && t.participants ? Object.keys(t.participants).length : 0,
                  l = (null == o || null === (n = o.state) || void 0 === n ? void 0 : n.position) || 0,
                  d = {
                    conversation_type: (null == t ? void 0 : t.type) === _.CONVERSATION_TYPE.GROUP ? 1 : 0,
                    conversation_id: r,
                    conversation_participant_count: s,
                    position: l,
                    inbox_type: Object(T.h)(a),
                    entry_point: ft.b.REQUEST_ACTION_SHEET,
                  }
                u(!1), i({ conversationId: r }), v(c, d), x()
              },
              x = function () {
                var t = e.inboxType
                i.push(Object(T.e)(t))
              },
              A = function () {
                !(function () {
                  var n,
                    r = e.acceptConversation,
                    a = e.conversationId,
                    i = e.inboxType,
                    c = e.scribeAction,
                    s = e.scribeNamespace,
                    l = t.type === _.CONVERSATION_TYPE.GROUP,
                    u = null != t && t.participants ? Object.keys(t.participants).length : 0,
                    d = (null == o || null === (n = o.state) || void 0 === n ? void 0 : n.position) || 0
                  a &&
                    (r(a),
                    c(us(us({}, s), {}, { action: 'accept' }), {
                      conversation_id: a,
                      conversation_type: l ? 1 : 0,
                      conversation_participant_count: u,
                      entry_point: ft.b.REQUEST_ACTION_SHEET,
                      inbox_type: Object(T.h)(i),
                      position: d,
                    }))
                })()
              },
              M = function (t) {
                return function () {
                  var n = e.addToast,
                    r = e.block,
                    a = e.createLocalApiErrorHandler
                  h(!1),
                    r(t).then(function () {
                      n({ action: { label: is.c, onAction: j(t) }, text: is.a })
                    }, a(Qc.a)),
                    v('block')
                }
              },
              j = function (t) {
                return function () {
                  var n = e.createLocalApiErrorHandler
                  ;(0, e.unblock)(t).catch(n(ns.a)), v('unblock')
                }
              },
              D = (t && t.type) === _.CONVERSATION_TYPE.GROUP
            return y.createElement(
              y.Fragment,
              null,
              y.createElement(
                be.a,
                { style: vs.root },
                (function (e) {
                  var n = a.loggedInUserId
                  return y.createElement(ge.b, { style: vs.copy }, e ? fs : hs({ senderName: Object(T.i)(t, n).name }))
                })(D),
                (function (e) {
                  var n = a.loggedInUserId
                  return y.createElement(rs.a, null, function (r) {
                    var a = r.windowWidth <= re.a.theme.breakpoints.small
                    return y.createElement(
                      be.a,
                      { style: vs.actionsContainer },
                      S &&
                        y.createElement(
                          Pt.a,
                          {
                            onPress: A,
                            size: 'medium',
                            style: [vs.actionFullWidth, vs.actionMarginBottom],
                            type: 'primaryOutlined',
                          },
                          ds,
                        ),
                      y.createElement(
                        be.a,
                        { style: a ? vs.actionFullWidth : [vs.actionHalfWidth, vs.actionMarginRight] },
                        y.createElement(as.a.Consumer, null, function (r) {
                          return y.createElement(es, {
                            isGroup: e,
                            onBlockClick: R,
                            onReportClick: C,
                            requestorScreenName: Object(T.i)(t, n).screenName,
                          })
                        }),
                      ),
                      y.createElement(
                        Pt.a,
                        {
                          onPress: w,
                          size: 'medium',
                          style: a
                            ? [vs.actionFullWidth, vs.actionMarginTop]
                            : [vs.actionHalfWidth, vs.actionMarginLeft],
                          type: 'destructiveOutlined',
                        },
                        ps,
                      ),
                      !S &&
                        y.createElement(
                          Pt.a,
                          {
                            onPress: A,
                            size: 'medium',
                            style: [vs.actionFullWidth, vs.actionMarginTop],
                            type: 'primaryOutlined',
                          },
                          ds,
                        ),
                    )
                  })
                })(D),
              ),
              tc.b.isKaiOS()
                ? y.createElement(Yc.a, { leftText: ps, onLeftClick: w, onRightClick: A, rightText: ds })
                : null,
              l
                ? y.createElement(kt.a, {
                    confirmButtonLabel: ms.confirmButtonLabel,
                    confirmButtonType: 'destructiveFilled',
                    headline: ms.headline,
                    onCancel: I,
                    onConfirm: P,
                    text: ms.text,
                  })
                : null,
              f
                ? ((b = a.loggedInUserId),
                  (g = Object(T.i)(t, b)),
                  (E = g.idStr),
                  (O = g.screenName),
                  Object(cs.j)({ confirmation: Object(cs.f)(O), onClose: k, handleConfirm: M(E) }))
                : null,
            )
          }),
        ),
        bs = n('rFBM'),
        gs = n('jTgF')
      function _s(e, t) {
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
      function Es(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? _s(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : _s(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function Os(e) {
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
      var Ss = y.createElement(Xt.a, null),
        Cs = Ze.a.badb01a0,
        ws = Ze.a.e3275464,
        Rs = Ze.a.d6b11d9c,
        Is = Ze.a.i7ca1446,
        ks = function (e) {
          return e && (e.tweet || e.media)
        },
        Ps = function (e) {
          var t,
            n = e.gifMetadata,
            r = void 0 === n ? {} : n,
            a = e.tweetAttachment,
            i = e.media
          return (
            a
              ? (t = { tweet: a })
              : i
              ? i.mediaFile
                ? (t = { media: i })
                : i.externalMediaDetails && (t = { media: i, provider: r.provider, gifUrl: r.url })
              : (t = null),
            t
          )
        },
        xs = (function (e) {
          u()(n, e)
          var t = Os(n)
          function n(e, r) {
            var i
            return (
              a()(this, n),
              (i = t.call(this, e, r)),
              v()(s()(i), '_composer', y.createRef()),
              v()(s()(i), '_handleLivePipelineUpdate', function () {
                i._fetchUpdatesIfNeeded(), i._updatePolling && i._updatePolling.restart()
              }),
              v()(s()(i), '_fetchUpdatesIfNeeded', function () {
                var e = i.props,
                  t = e.conversationId,
                  n = e.createLocalApiErrorHandler
                ;(0, e.fetchUpdatesIfNeeded)(
                  e.isDmReceiptSettingEnabled ? { active_conversation_id: t, dm_users: !0 } : {},
                ).catch(n())
              }),
              v()(s()(i), '_handleInitialFetch', function () {
                i._initialFetch()
              }),
              v()(s()(i), '_initialFetch', function () {
                var e = i.props,
                  t = e.conversationId,
                  n = e.createLocalApiErrorHandler,
                  r = e.fetchInboxIfNeeded,
                  a = e.fetchUpdatesIfNeeded
                return r()
                  .then(function () {
                    if (t)
                      return i._fetchConversation(t).then(function () {
                        return i._requestWelcomeMessage(t)
                      })
                  })
                  .then(function () {
                    return a()
                  })
                  .catch(n())
                  .finally(function () {
                    i._updatePolling && i._updatePolling.start()
                  })
              }),
              v()(s()(i), '_isUntrustedConversation', function (e) {
                var t = i.props.isNewGroupConversation
                return !((null != e && e.trusted) || t)
              }),
              v()(s()(i), '_leaveConversation', function (e) {
                var t = i.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.leaveConversation)(e).catch(n({ showToast: !0 }))
              }),
              v()(s()(i), '_acceptConversation', function (e) {
                var t = i.props,
                  n = t.acceptConversation,
                  r = t.createLocalApiErrorHandler
                n(e)
                  .then(function () {
                    tc.b.isMobileOS() && i._fetchConversation(e)
                  })
                  .catch(r({ showToast: !0 }))
              }),
              v()(s()(i), '_renderActions', function () {
                var e = i.props,
                  t = e.conversation,
                  n = e.conversationId,
                  r = e.inboxType,
                  a = e.scribeAction
                return t && i._isUntrustedConversation(t)
                  ? t.read_only
                    ? null
                    : n &&
                      y.createElement(ys, {
                        acceptConversation: i._acceptConversation,
                        conversation: t,
                        conversationId: n,
                        inboxType: r,
                        leaveConversation: i._leaveConversation,
                        scribeAction: a,
                      })
                  : y.createElement(
                      y.Fragment,
                      null,
                      i._renderComposerBar(),
                      tc.b.isKaiOS()
                        ? y.createElement(Yc.a, {
                            leftText: Is,
                            onLeftClick: i._handleInfoClick,
                            onRightClick: i._handleComposeClick,
                            rightText: Cs,
                          })
                        : null,
                    )
              }),
              v()(s()(i), '_render', function () {
                var e = i.props,
                  t = e.conversation,
                  n = e.conversationId,
                  r = e.drawerHeader,
                  a = e.inboxType,
                  o = e.isWide,
                  c = e.perspective,
                  s = e.scribeNamespace,
                  l = i.state,
                  u = l.attachment,
                  d = l.composerHeight
                return y.createElement(
                  Ei,
                  { key: n },
                  y.createElement(
                    bs.a,
                    { allowDragDrop: !ks(u), onFilesAdded: i._handleDragDrop, style: Ts.dragDrop },
                    y.createElement(
                      Bo.a,
                      {
                        style: [
                          Ts.scrollView,
                          !Object(qc.a)() && !i._isUntrustedConversation(t) && { paddingBottom: d },
                        ],
                      },
                      c && t
                        ? y.createElement(Lc, {
                            conversation: t,
                            drawerHeader: r,
                            inboxType: a,
                            isWide: o,
                            onHistoryRequest: i._handleHistoryRequest,
                            perspective: c,
                            scribeNamespace: s,
                            style: Ts.activity,
                          })
                        : null,
                    ),
                    i._renderActions(),
                  ),
                )
              }),
              v()(s()(i), '_handleNavHeightChange', function (e) {
                i.setState({ composerHeight: ''.concat(e, 'px') })
              }),
              v()(s()(i), '_handleTyping', function () {
                i._throttleSaveDraftText(), i._throttleUpdateTyping()
              }),
              v()(
                s()(i),
                '_throttleUpdateTyping',
                Object(ic.a)(
                  function () {
                    var e = i.props,
                      t = e.conversationId,
                      n = e.createLocalApiErrorHandler,
                      r = e.updateTyping
                    t && r({ conversationId: t }).catch(n())
                  },
                  2e3,
                  { trailing: !1 },
                ),
              ),
              v()(
                s()(i),
                '_throttleSaveDraftText',
                Object(ic.a)(
                  function () {
                    i.props.conversationId && i._handleSaveDraftText()
                  },
                  1e3,
                  { leading: !1 },
                ),
              ),
              v()(s()(i), '_handleDragDrop', function (e) {
                i._currentComposer && i._currentComposer.handleAddMediaFiles(e)
              }),
              v()(s()(i), '_handleHistoryRequest', function () {
                var e = i.props,
                  t = e.conversationId,
                  n = e.createLocalApiErrorHandler
                ;(0, e.fetchConversationHistory)({ conversationId: t }).catch(n())
              }),
              v()(s()(i), '_handleSendMessage', function (e, t) {
                var n,
                  r,
                  a = i.props,
                  o = a.addToast,
                  c = a.cardUrl,
                  s = a.conversation,
                  l = a.conversationId,
                  u = a.createLocalApiErrorHandler,
                  d = a.gifMetadata,
                  p = a.history,
                  f = a.location,
                  h = a.newConversationParticipants,
                  m = a.perspective,
                  v = a.scribeAction,
                  y = a.scribeNamespace,
                  b = a.sendMessage,
                  g = a.tweetAttachment,
                  E = i.state.attachment,
                  O = E && E.media,
                  S = null != s && s.participants ? Object.keys(s.participants).length : 0,
                  C = (null == s ? void 0 : s.type) === _.CONVERSATION_TYPE.GROUP,
                  w = 'unknown'
                if (
                  (e.quickReply ||
                    O ||
                    (i._currentComposer && i._currentComposer.clear(),
                    i._currentComposer && i._currentComposer.focus()),
                  d)
                )
                  w = 'gif'
                else if (c) w = 'card'
                else if (g) w = 'tweet'
                else {
                  var R,
                    I = null == E || null === (R = E.media) || void 0 === R ? void 0 : R.mediaFile,
                    k = null != I && I.isVideo ? 'video' : null != I && I.isGif ? 'gif' : 'photo'
                  w = I ? k : t ? 'text' : 'unknown'
                }
                return (
                  l &&
                    v(Es(Es({}, y), {}, { element: w, action: 'send_dm' }), {
                      conversation_id: l,
                      conversation_participant_count: S,
                      conversation_type: C ? ft.g.GROUP : ft.g.ONE_TO_ONE,
                    }),
                  i.setState({ isSending: !0 }),
                  l
                    ? (!i.state.attachment ||
                        (null !== (n = i.state.attachment) &&
                          void 0 !== n &&
                          null !== (r = n.media) &&
                          void 0 !== r &&
                          r.uploading) ||
                        (i.setState({ attachment: null }), p.replace(f.pathname)),
                      b(
                        Es(
                          { senderId: m, cardUrl: c, conversationId: l, text: t, tweetAttachment: g },
                          e && e.quickReply && { quickReply: e.quickReply },
                        ),
                      )
                        .then(function () {
                          !e.quickReply &&
                            O &&
                            (i._currentComposer && i._currentComposer.clear(),
                            i._currentComposer && i._currentComposer.focus()),
                            i.setState({ isSending: !1 })
                        })
                        .catch(function (e) {
                          if ((i.setState({ isSending: !1 }), !Object(gs.d)(e) || e.code !== Vc.b.CANCELED))
                            if (Object(gs.d)(e)) {
                              var t = Object(gs.b)(e, Rs)
                              t && o(t)
                            } else u(zc.b)(e)
                        }))
                    : (b({
                        senderId: m,
                        recipients:
                          h &&
                          h.map(function (e) {
                            return e.data.id_str
                          }),
                        text: t,
                        tweetAttachment: g,
                      }).then(function (e) {
                        v(Es(Es({}, y), {}, { element: w, action: 'send_dm' }), {
                          conversation_id: e,
                          conversation_participant_count: h ? h.length + 1 : 0,
                          conversation_type: ft.g.GROUP,
                        }),
                          i.setState({ attachment: null, isSending: !1 }),
                          p.replace('/messages/'.concat(e))
                      }, u(zc.b)),
                      Promise.resolve())
                )
              }),
              v()(s()(i), '_handlePopOutConvo', function () {
                var e = i.props,
                  t = e.conversationId
                ;(0, e.popOutConversation)(t)
              }),
              v()(s()(i), '_handleInfoClick', function () {
                var e = i.props,
                  t = e.conversationId,
                  n = e.history
                t && n.push('/messages/'.concat(t, '/info'))
              }),
              v()(s()(i), '_handleComposeClick', function () {
                i._currentComposer && i._currentComposer.focus()
              }),
              v()(s()(i), '_handleSaveDraftText', function () {
                var e = i.props,
                  t = e.conversationId,
                  n = e.saveText
                t && i._currentComposer && n(t, i._currentComposer.value())
              }),
              (i.state = {
                attachment: Ps(e),
                composerHeight: re.a.theme.componentDimensions.appBarHeight,
                isSending: !1,
              }),
              i
            )
          }
          return (
            o()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.googleAnalyticsPageView,
                    n = e.scribeNamespace,
                    r = e.scribePageImpression,
                    a = e.updateTweetDetailNav
                  return (
                    r(n),
                    a(n),
                    t(n),
                    this._initializePolling({ interval: 3e3 }),
                    this._initializeLivePipeline(),
                    this._focusComposerIfNeeded(),
                    this._initialFetch()
                  )
                },
              },
              {
                key: '_focusComposerIfNeeded',
                value: function () {
                  var e = this
                  Gc()(function () {
                    return Object(Hc.a)().then(function (t) {
                      var n = t.KEYBOARD,
                        r = t.MOUSE,
                        a = t.detectedType,
                        i = e.props.quickReplyOptions
                      ;(a(n) || a(r)) && !i && e._currentComposer && e._currentComposer.focus()
                    })
                  })
                },
              },
              {
                key: '_initializeLivePipeline',
                value: function () {
                  var e = this,
                    t = this.props.conversationId
                  Object(b.h)().then(function (n) {
                    var r = n.LivePipeline
                    t &&
                      r.isSupportedAndReady(e.context.featureSwitches) &&
                      e.context.featureSwitches.isTrue('livepipeline_dm_features_enabled') &&
                      !e._livePipelineSubscription &&
                      ((e._livePipelineSubscription = r
                        .get()
                        .subscribeTopic('/dm_update/'.concat(t), e._handleLivePipelineUpdate)),
                      e._initializePolling({ interval: 1e4 }))
                  })
                },
              },
              {
                key: '_initializePolling',
                value: function (e) {
                  var t = e.interval
                  this._updatePolling && this._updatePolling.stop(),
                    (this._updatePolling = new Xc.a(this._fetchUpdatesIfNeeded, { interval: t }))
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  var e = this.props,
                    t = e.conversation,
                    n = e.conversationId,
                    r = e.removeConversation,
                    a = (null == t ? void 0 : t.entries) || []
                  this._updatePolling && this._updatePolling.stop(),
                    (this._updatePolling = void 0),
                    this._livePipelineSubscription && this._livePipelineSubscription.teardown(),
                    0 === a.length && r(n),
                    1 === a.length && 'welcome_message_create' === a[0].type && r(n)
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e, t) {
                  var n,
                    r = this.props,
                    a = r.conversation,
                    i = r.conversationId,
                    o = r.fetchStatus,
                    c = r.isUploading,
                    s = r.quickReplyOptions,
                    l = r.updateConversationReadState
                  i !== e.conversationId
                    ? (i && this._fetchConversation(i),
                      this._focusComposerIfNeeded(),
                      this._livePipelineSubscription && this._livePipelineSubscription.teardown(),
                      this._initializeLivePipeline())
                    : ((null == a ? void 0 : a.sort_event_id) !==
                        (null === (n = e.conversation) || void 0 === n ? void 0 : n.sort_event_id) && l(i),
                      c || !e.isUploading || s || (this._currentComposer && this._currentComposer.focus()),
                      e.fetchStatus === w.a.LOADED && o !== w.a.LOADED && i && this._fetchConversation(i))
                },
              },
              {
                key: 'UNSAFE_componentWillReceiveProps',
                value: function (e) {
                  var t = this.props.media,
                    n = e.media
                  Object(ye.a)(t, n) || this.setState({ attachment: Ps(e) })
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props.fetchStatus
                  return y.createElement(
                    xc.a,
                    { style: [Ts.root, tc.b.isKaiOS() && Ts.kaiOSFix] },
                    y.createElement(Nc.a, {
                      fetchStatus: e,
                      onRequestRetry: this._handleInitialFetch,
                      render: this._render,
                    }),
                  )
                },
              },
              {
                key: '_renderComposerBar',
                value: function () {
                  var e = this.props,
                    t = e.addMedia,
                    n = e.cardUrl,
                    r = e.conversation,
                    a = e.conversationId,
                    i = e.dataSaverMode,
                    o = e.draftText,
                    c = e.dtabBarInfo,
                    s = e.history,
                    l = e.isUploading,
                    u = e.mediaUploadProgress,
                    d = e.quickReplyOptions,
                    p = e.removeMedia,
                    f = e.richTextInputContext,
                    h = e.scribeNamespace,
                    m = e.typeaheadWrapper,
                    v = this.state,
                    b = v.attachment,
                    g = v.isSending,
                    _ = this.props.prefillText || o
                  return null != r && r.read_only
                    ? null
                    : y.createElement(Bc.a, {
                        attachment: b,
                        conversationId: a,
                        disabled: l,
                        dtabBarInfo: c,
                        history: s,
                        isCardPreviewTombstoned: Object(Uc.a)(n),
                        isSending: g,
                        isUploading: l,
                        key: a,
                        mediaUploadProgress: u,
                        onAddMedia: t,
                        onBlur: this._handleSaveDraftText,
                        onHeightChange: this._handleNavHeightChange,
                        onPrimaryAction: this._handleSendMessage,
                        onTyping: i ? this._throttleSaveDraftText : this._handleTyping,
                        prefillText: 'string' == typeof _ ? _ : void 0,
                        primaryActionIcon: Ss,
                        primaryActionLabel: ws,
                        quickReplyOptions: d,
                        ref: this._composer,
                        removeMedia: p,
                        richTextInputContext: f,
                        scribeNamespace: h,
                        typeaheadWrapper: m,
                      })
                },
              },
              {
                key: '_currentComposer',
                get: function () {
                  return this._composer.current
                },
              },
              {
                key: '_fetchConversation',
                value: function (e) {
                  var t = this.props,
                    n = t.createLocalApiErrorHandler,
                    r = t.fetchConversationIfNeeded,
                    a = t.updateConversationReadState
                  return r({ conversationId: e })
                    .then(function () {
                      return a(e)
                    })
                    .catch(n(Object(N.a)(e)))
                },
              },
              {
                key: '_requestWelcomeMessage',
                value: function (e) {
                  var t = this.props,
                    n = t.addWelcomeMessageToConversation,
                    r = t.conversation,
                    a = t.createLocalApiErrorHandler,
                    i = t.location,
                    o = i.query.text,
                    c = Array.isArray(i.query.welcome_message_id)
                      ? i.query.welcome_message_id[0]
                      : i.query.welcome_message_id,
                    s = !!this.state.attachment || !(!o || c),
                    l = !r || !r.type || r.type === _.CONVERSATION_TYPE.GROUP,
                    u = r && r.participants && Object.keys(r.participants).length <= 1
                  return s || l || u ? Promise.resolve() : n(e, c).catch(a({ showToast: !1 }))
                },
              },
            ]),
            n
          )
        })(y.PureComponent)
      v()(xs, 'contextType', $.a), v()(xs, 'defaultProps', { isNewGroupConversation: !1, typeaheadWrapper: Wc.a })
      var Ts = re.a.create(function (e) {
        return {
          root: { flexGrow: 1 },
          activity: { flexBasis: e.spacesPx.space1, flexGrow: 1, height: '100%' },
          kaiOSFix: { paddingBottom: e.spaces.space20 },
          dragDrop: { flexGrow: 1 },
          scrollView: { flexGrow: 1 },
        }
      })
      t.a = Object(os.c)()(B(xs))
    },
    P68U: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'MediaPickerWithPreview', function () {
          return C
        })
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
        y = (n('2G9S'), n('hCOa'), n('87if'), n('hBpG'), n('jQ3i'), n('x4t0'), n('z84I'), n('ERkP')),
        b = n('AspN'),
        g = n('rxPX'),
        _ = Object(g.a)().propsFromActions(function () {
          return { addMedia: b.b, processMultipleMedia: b.g }
        }),
        E = n('2Daw'),
        O = n('VPdC')
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
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var C = (function (e) {
        u()(n, e)
        var t = S(n)
        function n() {
          var e
          a()(this, n)
          for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
          return (
            (e = t.call.apply(t, [this].concat(i))),
            v()(s()(e), '_handleAddMediaFiles', function (t) {
              var n = e.props,
                r = n.addMedia,
                a = n.location,
                i = n.onChange,
                o = n.onFailure,
                c = n.processMultipleMedia,
                s = e._getAcceptedFileInputs(),
                l = Array.from(t).find(function (e) {
                  return s.includes(e.type)
                })
              l &&
                r([l], { location: a }).then(function (e) {
                  i &&
                    i(
                      e.map(function (e) {
                        return e.id
                      }),
                    ),
                    c(e, { onFailure: o })
                })
            }),
            v()(s()(e), '_getAcceptedFileInputs', function () {
              var t = e.props,
                n = t.acceptGifs,
                r = t.acceptVideo
              return Object(O.b)({ acceptGifs: n, acceptVideo: r })
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
                  r = e.accessibilityLabel,
                  a = e.aspectRatio,
                  i = e.borderRadius,
                  o = e.currentContent,
                  c = e.maskStyle,
                  s = e.mediaItem,
                  l = e.onCrop,
                  u = e.onRemove,
                  d = e.rootStyle
                return y.createElement(E.a, {
                  acceptGifs: t,
                  acceptVideo: n,
                  accessibilityLabel: r,
                  aspectRatio: a,
                  borderRadius: i,
                  currentContent: o,
                  maskStyle: c,
                  mediaItem: s,
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
      })(y.Component)
      v()(C, 'defaultProps', { acceptGifs: !1, acceptVideo: !1 })
      var w = _(C)
      t.default = w
    },
    PnKw: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return P
      })
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
        y = (n('2G9S'), n('hBvt'), n('uFXj'), n('ERkP')),
        b = n('TIdA'),
        g = n('t62R'),
        _ = n('A91F'),
        E = n('/yvb'),
        O = n('rHpw'),
        S = 'inlinePrompt',
        C = 'inlinePrompt-primaryAction',
        w = 'inlinePrompt-secondaryAction',
        R = 'inlinePrompt-centeredImageContainer',
        I = n('MWbm')
      function k(e) {
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
      var P = (function (e) {
        u()(n, e)
        var t = k(n)
        function n() {
          var e
          a()(this, n)
          for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
          return (
            (e = t.call.apply(t, [this].concat(i))),
            v()(s()(e), '_renderImage', function (e) {
              var t = y.createElement(b.a, {
                accessibilityLabel: '',
                aspectMode: _.a.exact(e.width / e.height),
                backgroundColor: e.backgroundColor,
                image: e,
              })
              return e.isCentered
                ? y.createElement(
                    I.a,
                    { style: x.centeredImage, testID: R },
                    y.createElement(
                      I.a,
                      { style: { width: ''.concat(e.width, 'px'), height: ''.concat(e.height, 'px') } },
                      t,
                    ),
                  )
                : t
            }),
            v()(s()(e), '_renderTitle', function () {
              var t = e.props.headline
              return t
                ? y.createElement(
                    g.b,
                    {
                      accessibilityRole: 'heading',
                      align: 'left',
                      size: 'title4',
                      style: x.flexGrow,
                      weight: 'bold',
                      withHashflags: !0,
                    },
                    t,
                  )
                : null
            }),
            v()(s()(e), '_renderBodyText', function () {
              var t = e.props.subtext
              return t
                ? y.createElement(g.b, { align: 'left', color: 'gray700', style: e.styles.body, withHashflags: !0 }, t)
                : null
            }),
            v()(s()(e), '_renderAction', function (t) {
              var n = t.action,
                r = t.buttonSize,
                a = t.buttonType,
                i = t.style,
                o = t.testID,
                c = e.props.secondaryAction,
                s = n.link,
                l = n.onClick,
                u = n.text
              return y.createElement(
                I.a,
                { style: [e.styles.actionContainer, i, { justifyContent: 'flex-start' }], testID: o },
                y.createElement(
                  E.a,
                  { link: s, onPress: l, size: r, style: { width: c ? '100%' : 'auto' }, type: a },
                  u,
                ),
              )
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
                  t = e.image,
                  n = e.primaryAction,
                  r = e.rightControl,
                  a = e.secondaryAction,
                  i = e.shouldRenderBorder
                return y.createElement(
                  I.a,
                  { style: i ? [T.root, T.rootMargin] : x.root },
                  y.createElement(
                    y.Fragment,
                    null,
                    t ? this._renderImage(t) : null,
                    y.createElement(
                      I.a,
                      { style: this.styles.rootPadding, testID: S },
                      this._renderTitle(),
                      this._renderBodyText(),
                      n
                        ? this._renderAction({
                            action: n,
                            buttonType: 'primaryFilled',
                            style: this.styles.primaryAction,
                            buttonSize: 'large',
                            testID: C,
                          })
                        : null,
                      a
                        ? this._renderAction({
                            action: a,
                            buttonType: 'primaryOutlined',
                            style: this.styles.secondaryAction,
                            buttonSize: 'large',
                            testID: w,
                          })
                        : null,
                    ),
                  ),
                  r ? y.createElement(I.a, { style: x.rightControl }, r) : null,
                )
              },
            },
            {
              key: 'styles',
              get: function () {
                return this.props.isCompact ? M : A
              },
            },
          ]),
          n
        )
      })(y.Component)
      v()(P, 'defaultProps', { shouldRenderBorder: !1 })
      var x = O.a.create(function (e) {
          return {
            root: { backgroundColor: e.colors.cellBackground },
            flexGrow: { flexGrow: 1 },
            centeredImage: { display: 'flex', flexDirection: 'row', justifyContent: 'center' },
            rightControl: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
              position: 'absolute',
              right: 0,
              top: 0,
            },
          }
        }),
        T = O.a.create(function (e) {
          return {
            root: {
              borderColor: e.colors.nestedBorderColor,
              borderWidth: e.borderWidths.small,
              borderRadius: e.borderRadii.xLarge,
              overflow: 'hidden',
            },
            rootMargin: { marginLeft: e.spaces.space16, marginRight: e.spaces.space16 },
          }
        }),
        A = O.a.create(function (e) {
          return {
            rootPadding: { padding: e.spaces.space32 },
            body: { marginTop: e.spaces.space8 },
            actionContainer: { flexDirection: 'row' },
            primaryAction: { marginTop: e.spaces.space28 },
            secondaryAction: { marginTop: e.spaces.space16 },
          }
        }),
        M = O.a.create(function (e) {
          return {
            rootPadding: { padding: e.spaces.space16 },
            body: { marginTop: e.spaces.space2 },
            actionContainer: { flexDirection: 'row' },
            primaryAction: { marginTop: e.spaces.space4 },
            secondaryAction: { marginTop: e.spaces.space2 },
          }
        })
    },
    RJrc: function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        a = n('3XMw'),
        i = n.n(a),
        o = n('MWbm'),
        c = n('Qwev'),
        s = n('rHpw'),
        l = i.a.ffde2fdb,
        u = s.a.create(function (e) {
          return { spinner: { alignItems: 'center', marginVertical: '30px' } }
        })
      t.a = function () {
        return r.createElement(o.a, { style: u.spinner }, r.createElement(c.a, { accessibilityLabel: l }))
      }
    },
    'S+H3': function (e, t, n) {
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
              d: 'M15.09 9.07c-.25-1.83-1.43-2.98-3.1-2.98-1.66 0-2.85 1.15-3.09 2.98-.18 1.32 0 2.26.55 2.89.66.76 1.66.86 2.54.86.89 0 1.88-.1 2.54-.86.56-.63.74-1.57.56-2.89zm-1.68 1.9c-.21.24-.65.35-1.42.35-.76 0-1.2-.11-1.41-.35-.24-.28-.31-.86-.2-1.7.1-.76.47-1.68 1.61-1.68.58 0 .95.23 1.2.56.24.32.36.74.41 1.12.12.84.05 1.42-.19 1.7zm2.67 4.09c-.99-.99-2.4-1.52-4.07-1.52h-.03c-1.62 0-3.06.55-4.06 1.55-.87.87-1.34 2.02-1.34 3.25 0 .79.64 1.44 1.44 1.44h7.95c.79 0 1.44-.65 1.44-1.44 0-1.26-.47-2.43-1.33-3.28zm-7.44 3.276c-.318.002-.562-.288-.502-.6.116-.595.406-1.14.842-1.576.72-.72 1.78-1.12 3.01-1.12H12c1.27 0 2.32.37 3.02 1.08.432.432.715.962.83 1.564.06.308-.178.598-.492.6l-6.72.052zM21.75 6.97c-.22-1.7-1.32-2.75-2.86-2.75-1.53 0-2.64 1.05-2.87 2.75-.16 1.2.02 2.07.52 2.65.62.71 1.53.81 2.35.81.81 0 1.73-.1 2.34-.8.39-.45.59-1.07.59-1.85 0-.22-.02-.47-.07-.81zm-4.22.2c.13-.95.59-1.43 1.36-1.43.43 0 .77.15 1 .46.23.29.32.69.35.97.03.22.05.43.05.61 0 .4-.07.69-.21.84-.16.2-.54.28-1.19.28-.66 0-1.04-.08-1.2-.28-.2-.22-.25-.73-.16-1.45zm6.3 8.37c0 .74-.62 1.34-1.37 1.34h-3.75c-.41 0-.76-.34-.76-.76 0-.43.34-.76.76-.76h3.24c.1 0 .2-.05.26-.13.07-.09.1-.2.07-.3-.12-.53-.37-.99-.74-1.36-.61-.62-1.53-.94-2.64-.94-.73 0-1.39.15-1.93.44l-.5.32c-.36.21-.83.1-1.04-.25-.23-.36-.12-.82.24-1.05l.54-.34c.78-.42 1.71-.64 2.66-.64h.03c1.52 0 2.81.47 3.72 1.38.79.8 1.22 1.88 1.21 3.05zM2.18 7.78c0 .78.2 1.4.59 1.85.61.7 1.53.8 2.34.8.82 0 1.73-.1 2.35-.81.5-.58.68-1.45.52-2.65-.23-1.7-1.34-2.75-2.87-2.75-1.54 0-2.64 1.05-2.86 2.75-.05.34-.07.59-.07.81zm4.13.84c-.16.2-.54.28-1.2.28-.65 0-1.03-.08-1.19-.28-.14-.15-.21-.44-.21-.84 0-.18.02-.39.05-.61.03-.28.12-.68.35-.97.23-.31.57-.46 1-.46.77 0 1.23.48 1.36 1.43.09.72.04 1.23-.16 1.45zM.17 15.54c0 .74.62 1.34 1.37 1.34h3.75c.41 0 .76-.34.76-.76 0-.43-.34-.76-.76-.76H2.05c-.1 0-.2-.05-.26-.13-.07-.09-.1-.2-.07-.3.12-.53.37-.99.74-1.36.61-.62 1.53-.94 2.64-.94.73 0 1.39.15 1.93.44l.5.32c.36.21.83.1 1.04-.25.23-.36.12-.82-.24-1.05l-.54-.34c-.78-.42-1.71-.64-2.66-.64H5.1c-1.52 0-2.81.47-3.72 1.38-.79.8-1.22 1.88-1.21 3.05z',
            }),
          ),
        )
      }
      ;(u.metadata = { width: 24, height: 24 }), (t.a = u)
    },
    'ShJ/': function (e, t, n) {
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
              d: 'M20.472 14.738c-.388-1.808-2.24-3.517-3.908-4.246l-.474-4.307 1.344-2.016c.258-.387.28-.88.062-1.286-.218-.406-.64-.66-1.102-.66H7.54c-.46 0-.884.254-1.1.66-.22.407-.197.9.06 1.284l1.35 2.025-.42 4.3c-1.667.732-3.515 2.44-3.896 4.222-.066.267-.043.672.222 1.01.14.178.46.474 1.06.474h3.858l2.638 6.1c.12.273.39.45.688.45s.57-.177.688-.45l2.638-6.1h3.86c.6 0 .92-.297 1.058-.474.265-.34.288-.745.228-.988zM12 20.11l-1.692-3.912h3.384L12 20.11zm-6.896-5.413c.456-1.166 1.904-2.506 3.265-2.96l.46-.153.566-5.777-1.39-2.082h7.922l-1.39 2.08.637 5.78.456.153c1.355.45 2.796 1.78 3.264 2.96H5.104z',
            }),
          ),
        )
      }
      ;(u.metadata = { width: 24, height: 24 }), (t.a = u)
    },
    T8pk: function (e, t, n) {
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
              d: 'M19.708 22H4.292C3.028 22 2 20.972 2 19.708V7.375C2 6.11 3.028 5.083 4.292 5.083h2.146C7.633 3.17 9.722 2 12 2c2.277 0 4.367 1.17 5.562 3.083h2.146C20.972 5.083 22 6.11 22 7.375v12.333C22 20.972 20.972 22 19.708 22zM4.292 6.583c-.437 0-.792.355-.792.792v12.333c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V7.375c0-.437-.355-.792-.792-.792h-2.45c-.317.05-.632-.095-.782-.382-.88-1.665-2.594-2.7-4.476-2.7-1.883 0-3.598 1.035-4.476 2.702-.16.302-.502.46-.833.38H4.293z',
            }),
            i.createElement('path', {
              d: 'M12 8.167c-2.68 0-4.86 2.18-4.86 4.86s2.18 4.86 4.86 4.86 4.86-2.18 4.86-4.86-2.18-4.86-4.86-4.86zm2 5.583h-1.25V15c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-1.25H10c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h1.25V11c0-.414.336-.75.75-.75s.75.336.75.75v1.25H14c.414 0 .75.336.75.75s-.336.75-.75.75z',
            }),
          ),
        )
      }
      ;(u.metadata = { width: 24, height: 24 }), (t.a = u)
    },
    TEoO: function (e, t, n) {
      'use strict'
      var r = n('m3Bd'),
        a = n.n(r),
        i = n('ERkP'),
        o = n('5UID'),
        c = n('3GUV'),
        s = n('iBK2'),
        l = i.createElement(c.a, null),
        u = function (e) {
          var t = e.accessibilityTitle,
            n = a()(e, ['accessibilityTitle']),
            r = i.createElement(s.b, n)
          return t ? i.createElement(o.a, { title: t }, r) : r
        }
      ;(u.defaultProps = { footer: l }), (t.a = u)
    },
    UPvq: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return A
      })
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
        y = (n('2G9S'), n('ERkP')),
        b = n('RCZO'),
        g = n('3XMw'),
        _ = n.n(g),
        E = n('hOZg'),
        O = n('MWbm'),
        S = n('mw9i'),
        C = n('cm6r'),
        w = n('/yvb'),
        R = n('7N4s'),
        I = n('rHpw')
      function k(e, t) {
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
      function P(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? k(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : k(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function x(e) {
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
      var T = _.a.ia5e7487,
        A = (function (e) {
          u()(n, e)
          var t = x(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              v()(s()(e), '_handleCloseButtonPress', function (t) {
                t.stopPropagation(), (0, e.props.onCloseButtonPress)()
              }),
              v()(s()(e), '_handleBackgroundPress', function () {
                var t = e.props.onCloseButtonPress
                e.context.isModal && t()
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
                    n = t.backgroundColor,
                    r = t.children,
                    a = t.footerButtons,
                    i = t.forceModalStyle,
                    o = t.hideButtons,
                    c = t.mediaItem,
                    s = t.mediaUrl,
                    l = t.overlayFooter,
                    u = t.topRightButton,
                    d = this.context.isModal,
                    p = P({ backgroundColor: n.rgba }, b.a),
                    f = P({ backgroundColor: n.rgb }, b.a),
                    h = [M.root, d ? p : f, { position: d || i ? 'relative' : 'fixed' }]
                  return y.createElement(
                    y.Fragment,
                    null,
                    y.createElement(
                      O.a,
                      { onClick: this._handleBackgroundPress, style: h },
                      r,
                      a
                        ? y.createElement(
                            O.a,
                            {
                              pointerEvents: o ? 'none' : void 0,
                              style: [M.footerButtons, l && p, l && M.footerButtonsAbsolute, o && M.fadeOut],
                            },
                            y.createElement(S.a, { withGutter: !0 }, a),
                          )
                        : null,
                    ),
                    y.createElement(
                      C.a,
                      {
                        accessibilityRole: 'none',
                        interactiveStyles: null,
                        onClick: this._handleCloseButtonPress,
                        pointerEvents: o ? 'none' : void 0,
                        style: [M.buttonWrapper, M.buttonWrapperLeft, b.a, o && M.fadeOut],
                      },
                      function (t) {
                        return y.createElement(w.a, {
                          accessibilityLabel: T,
                          dominantColor: n.rgb,
                          hoverLabel: { label: T },
                          icon: y.createElement(E.a, null),
                          interactivityState: t,
                          onClick: e._handleCloseButtonPress,
                          type: c || s ? 'onMediaDominantColorFilled' : 'onMediaWhiteFilled',
                        })
                      },
                    ),
                    u
                      ? y.createElement(
                          O.a,
                          {
                            pointerEvents: o ? 'none' : void 0,
                            style: [M.buttonWrapper, M.buttonWrapperRight, b.a, o && M.fadeOut],
                          },
                          u,
                        )
                      : null,
                  )
                },
              },
            ]),
            n
          )
        })(y.Component)
      v()(A, 'contextType', R.b), v()(A, 'defaultProps', { hideButtons: !1 })
      var M = I.a.create(function (e) {
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
          footerButtonsAbsolute: { position: 'absolute', bottom: 0, paddingBottom: I.a.iPhoneOffsetBottom, zIndex: 1 },
        }
      })
    },
    'V/6K': function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        a = r.createContext({ isDrawer: !1 })
      t.a = a
    },
    'X/yg': function (e, t, n) {
      'use strict'
      n.d(t, 'n', function () {
        return s
      }),
        n.d(t, 'm', function () {
          return l
        }),
        n.d(t, 'l', function () {
          return u
        }),
        n.d(t, 'c', function () {
          return d
        }),
        n.d(t, 'h', function () {
          return p
        }),
        n.d(t, 'j', function () {
          return f
        }),
        n.d(t, 'k', function () {
          return h
        }),
        n.d(t, 'f', function () {
          return m
        }),
        n.d(t, 'i', function () {
          return v
        }),
        n.d(t, 'g', function () {
          return y
        }),
        n.d(t, 'e', function () {
          return b
        }),
        n.d(t, 'a', function () {
          return g
        }),
        n.d(t, 'b', function () {
          return _
        }),
        n.d(t, 'd', function () {
          return E
        })
      n('z84I'), n('ho0z')
      var r = n('CDB5'),
        a = n('Myq3'),
        i = n('XnpN'),
        o = n('AQ79'),
        c = n('pHkl'),
        s = function (e, t) {
          return t.location && t.location.state && t.location.state.tweetAttachment
        },
        l = function (e, t) {
          return t.location && t.location.state && t.location.state.participants
        },
        u = function (e, t) {
          return t.location && t.location.state && t.location.state.isNewGroupConversation
        },
        d = function (e) {
          var t = e.message_data,
            n = c.d.UNKNOWN,
            r = (t && t.attachment) || {}
          return (
            r.tweet
              ? (n = c.d.TWEET)
              : r.photo
              ? (n = c.d.PHOTO)
              : r.animated_gif
              ? (n = c.d.GIF)
              : r.video
              ? (n = r.video.audio_only ? c.d.VOICE : c.d.VIDEO)
              : r.card
              ? (n = c.d.CARD)
              : null != t && t.text && (n = c.d.TEXT),
            n
          )
        }
      function p(e) {
        return e === o.d.SECONDARY ? c.c.REQUESTS : e === o.d.TERTIARY ? c.c.LOW_QUALITY : c.c.PRIMARY
      }
      function f(e) {
        return e.isTrue('dm_voice_rendering_enabled')
      }
      function h(e, t) {
        return !!(e && e.video && f(t)) && !!e.video.audio_only
      }
      function m(e, t, n, r) {
        return {
          pathname: '/i/report/dm_conversation/'.concat(e),
          state: { clientReferer: t, inboxType: r, scribeNamespace: n },
        }
      }
      function v(e, t) {
        if (!e) return { name: '', screenName: '', idStr: '' }
        var n = Object(i.a)(e, t).map(function (e) {
            return e.user
          }),
          r = n && n[0]
        return { name: (r && r.name) || '', screenName: (r && r.screen_name) || '', idStr: (r && r.id_str) || '' }
      }
      var y = function (e) {
          return e === o.d.TERTIARY
            ? 'low_quality_timeline'
            : e === o.d.SECONDARY
            ? 'requests_timeline'
            : 'inbox_timeline'
        },
        b = function (e) {
          return e === o.d.TERTIARY
            ? '/messages/requests/additional'
            : e === o.d.SECONDARY
            ? '/messages/requests'
            : '/messages'
        },
        g = function (e) {
          return function () {
            return r.b(e)
          }
        },
        _ = function (e) {
          return function (t) {
            return r.c(e, t)
          }
        },
        E = function (e, t) {
          var n = Object(a.a)(e, function (e) {
            return !!e.message_data && e.message_data && e.message_data.recipient_id === t
          })
          return n &&
            n.message_data &&
            n.message_data.quick_reply &&
            n.message_data.quick_reply &&
            'options' === n.message_data.quick_reply.type
            ? n.message_data.quick_reply
            : void 0
        }
    },
    'X3+4': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return i
      })
      var r = n('ERkP'),
        a = n('fs1G'),
        i = r.createContext({ handleNextSlide: a.a })
    },
    X8um: function (e, t, n) {
      'use strict'
      n.r(t)
      var r,
        a,
        i,
        o,
        c,
        s,
        l,
        u,
        d,
        p,
        f,
        h,
        m,
        v,
        y = {
          fragment: {
            argumentDefinitions: (r = [{ defaultValue: null, kind: 'LocalArgument', name: 'label' }]),
            kind: 'Fragment',
            metadata: null,
            name: 'DMPinnedInboxQuery',
            selections: [
              {
                alias: 'labeled_conversation_slice',
                args: (a = [
                  { kind: 'Variable', name: 'label', variableName: 'label' },
                  { kind: 'Literal', name: 's', value: 16 },
                ]),
                concreteType: 'DMLabeledConversationsSlice',
                kind: 'LinkedField',
                name: '__DMPinnedInboxQuery_labeled_conversation_slice_slice',
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: 'DMConversation',
                    kind: 'LinkedField',
                    name: 'items',
                    plural: !0,
                    selections: [
                      (i = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                      (o = { alias: null, args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null }),
                      {
                        alias: null,
                        args: null,
                        concreteType: 'ConversationInfo',
                        kind: 'LinkedField',
                        name: 'legacy',
                        plural: !1,
                        selections: [
                          (c = {
                            alias: null,
                            args: null,
                            kind: 'ScalarField',
                            name: 'conversation_id',
                            storageKey: null,
                          }),
                          {
                            alias: null,
                            args: null,
                            concreteType: 'ConversationMetadata',
                            kind: 'LinkedField',
                            name: 'metadata',
                            plural: !1,
                            selections: [
                              c,
                              (s = {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'conversation_type',
                                storageKey: null,
                              }),
                              (l = { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null }),
                              (u = {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'created_at_millis',
                                storageKey: null,
                              }),
                              {
                                alias: null,
                                args: null,
                                concreteType: 'ApiMedia',
                                kind: 'LinkedField',
                                name: 'avatar',
                                plural: !1,
                                selections: [
                                  i,
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: null,
                                    kind: 'LinkedField',
                                    name: 'media_info',
                                    plural: !1,
                                    selections: [
                                      (d = {
                                        kind: 'InlineFragment',
                                        selections: [
                                          {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'original_img_url',
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'original_img_width',
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'original_img_height',
                                            storageKey: null,
                                          },
                                        ],
                                        type: 'ApiImage',
                                        abstractKey: null,
                                      }),
                                    ],
                                    storageKey: null,
                                  },
                                ],
                                storageKey: null,
                              },
                            ],
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            concreteType: 'ParticipantConversationMetadata',
                            kind: 'LinkedField',
                            name: 'participants_metadata',
                            plural: !0,
                            selections: [
                              {
                                alias: null,
                                args: null,
                                concreteType: 'UserResults',
                                kind: 'LinkedField',
                                name: 'user_results',
                                plural: !1,
                                selections: [
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: null,
                                    kind: 'LinkedField',
                                    name: 'result',
                                    plural: !1,
                                    selections: [
                                      {
                                        kind: 'InlineFragment',
                                        selections: [
                                          i,
                                          o,
                                          (p = {
                                            alias: null,
                                            args: null,
                                            concreteType: 'ApiUser',
                                            kind: 'LinkedField',
                                            name: 'legacy',
                                            plural: !1,
                                            selections: [
                                              {
                                                alias: null,
                                                args: null,
                                                kind: 'ScalarField',
                                                name: 'id_str',
                                                storageKey: null,
                                              },
                                              l,
                                              {
                                                alias: null,
                                                args: null,
                                                kind: 'ScalarField',
                                                name: 'screen_name',
                                                storageKey: null,
                                              },
                                              {
                                                alias: null,
                                                args: null,
                                                kind: 'ScalarField',
                                                name: 'profile_image_url_https',
                                                storageKey: null,
                                              },
                                            ],
                                            storageKey: null,
                                          }),
                                        ],
                                        type: 'User',
                                        abstractKey: null,
                                      },
                                    ],
                                    storageKey: null,
                                  },
                                ],
                                storageKey: null,
                              },
                            ],
                            storageKey: null,
                          },
                        ],
                        storageKey: null,
                      },
                      (f = {
                        alias: null,
                        args: null,
                        concreteType: 'DMConversationLabelInfo',
                        kind: 'LinkedField',
                        name: 'labels',
                        plural: !0,
                        selections: [
                          { alias: null, args: null, kind: 'ScalarField', name: 'label_type', storageKey: null },
                          { alias: null, args: null, kind: 'ScalarField', name: 'timestamp', storageKey: null },
                        ],
                        storageKey: null,
                      }),
                    ],
                    storageKey: null,
                  },
                  (h = {
                    alias: null,
                    args: null,
                    concreteType: 'SliceInfo',
                    kind: 'LinkedField',
                    name: 'slice_info',
                    plural: !1,
                    selections: [
                      { alias: null, args: null, kind: 'ScalarField', name: 'next_cursor', storageKey: null },
                      { alias: null, args: null, kind: 'ScalarField', name: 'previous_cursor', storageKey: null },
                    ],
                    storageKey: null,
                  }),
                  (m = {
                    kind: 'ClientExtension',
                    selections: [{ alias: null, args: null, kind: 'ScalarField', name: '__id', storageKey: null }],
                  }),
                ],
                storageKey: null,
              },
            ],
            type: 'Query',
            abstractKey: null,
          },
          kind: 'Request',
          operation: {
            argumentDefinitions: r,
            kind: 'Operation',
            name: 'DMPinnedInboxQuery',
            selections: [
              {
                alias: null,
                args: a,
                concreteType: 'DMLabeledConversationsSlice',
                kind: 'LinkedField',
                name: 'labeled_conversation_slice',
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: 'DMConversation',
                    kind: 'LinkedField',
                    name: 'items',
                    plural: !0,
                    selections: [
                      i,
                      o,
                      {
                        alias: null,
                        args: null,
                        concreteType: 'ConversationInfo',
                        kind: 'LinkedField',
                        name: 'legacy',
                        plural: !1,
                        selections: [
                          c,
                          {
                            alias: null,
                            args: null,
                            concreteType: 'ConversationMetadata',
                            kind: 'LinkedField',
                            name: 'metadata',
                            plural: !1,
                            selections: [
                              c,
                              s,
                              l,
                              u,
                              {
                                alias: null,
                                args: null,
                                concreteType: 'ApiMedia',
                                kind: 'LinkedField',
                                name: 'avatar',
                                plural: !1,
                                selections: [
                                  i,
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: null,
                                    kind: 'LinkedField',
                                    name: 'media_info',
                                    plural: !1,
                                    selections: [
                                      (v = {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: '__typename',
                                        storageKey: null,
                                      }),
                                      d,
                                    ],
                                    storageKey: null,
                                  },
                                ],
                                storageKey: null,
                              },
                            ],
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            concreteType: 'ParticipantConversationMetadata',
                            kind: 'LinkedField',
                            name: 'participants_metadata',
                            plural: !0,
                            selections: [
                              {
                                alias: null,
                                args: null,
                                concreteType: 'UserResults',
                                kind: 'LinkedField',
                                name: 'user_results',
                                plural: !1,
                                selections: [
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: null,
                                    kind: 'LinkedField',
                                    name: 'result',
                                    plural: !1,
                                    selections: [
                                      v,
                                      {
                                        kind: 'InlineFragment',
                                        selections: [
                                          i,
                                          o,
                                          p,
                                          {
                                            alias: null,
                                            args: null,
                                            filters: null,
                                            handle: 'defaultScalars',
                                            key: '',
                                            kind: 'LinkedHandle',
                                            name: 'legacy',
                                          },
                                        ],
                                        type: 'User',
                                        abstractKey: null,
                                      },
                                    ],
                                    storageKey: null,
                                  },
                                ],
                                storageKey: null,
                              },
                            ],
                            storageKey: null,
                          },
                        ],
                        storageKey: null,
                      },
                      f,
                    ],
                    storageKey: null,
                  },
                  h,
                  m,
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: a,
                filters: ['label', 's'],
                handle: 'slice',
                key: 'DMPinnedInboxQuery_labeled_conversation_slice',
                kind: 'LinkedHandle',
                name: 'labeled_conversation_slice',
              },
            ],
          },
          params: {
            id: 'xXzMbv-FpjF7-cHYcr05gw',
            metadata: { sliceInfoPath: ['labeled_conversation_slice', 'slice_info'] },
            name: 'DMPinnedInboxQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(y.hash = 'a75c1dda87cc485eccb5aa8efb5739a4'), (t.default = y)
    },
    XG7v: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'Mode', function () {
          return xe
        }),
        n.d(t, 'DMComposeScreen', function () {
          return Te
        })
      n('OZaJ'), n('+KXO'), n('1t7P'), n('daRM'), n('FtHn'), n('hCOa'), n('jQ/y'), n('aLgo')
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
        y =
          (n('yH/f'),
          n('i4UL'),
          n('LW0h'),
          n('M+/F'),
          n('z84I'),
          n('hBpG'),
          n('2G9S'),
          n('ho0z'),
          n('DfhM'),
          n('7xRU'),
          n('JtPf'),
          n('7x/C'),
          n('MvUL'),
          n('KqXw'),
          n('jwue'),
          n('+oxZ'),
          n('87if'),
          n('lTEL'),
          n('kYxP'),
          n('uFXj'),
          n('ERkP')),
        b = n('s14A'),
        g = n('uB9N'),
        _ = n('3nOA'),
        E = n('jHSc'),
        O = n('wO1l'),
        S = n('p9G8'),
        C = n('AQOc'),
        w = n('3XMw'),
        R = n.n(w),
        I = n('oQhu'),
        k = 'nextButton',
        P = n('aITJ'),
        x = n('2dXj'),
        T = n('MWbm'),
        A = n('w9LO'),
        M = n('/yvb'),
        j = n('htQn'),
        D = n('t62R'),
        L = n('7N4s'),
        F = n('rHpw'),
        B = n('v6aA'),
        N = n('MMRb'),
        H = n('CDB5'),
        U = n('1YZw'),
        V = n('hqKg'),
        W = n('tn7R'),
        z = n('Hw0q'),
        K = n('RqPI'),
        G = n('X/yg'),
        q = n('G6rE'),
        Y = n('rxPX'),
        X = n('0KEI')
      function Q(e, t) {
        var n
        if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (!e) return
              if ('string' == typeof e) return Z(e, t)
              var n = Object.prototype.toString.call(e).slice(8, -1)
              'Object' === n && e.constructor && (n = e.constructor.name)
              if ('Map' === n || 'Set' === n) return Array.from(e)
              if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Z(e, t)
            })(e)) ||
            (t && e && 'number' == typeof e.length)
          ) {
            n && (e = n)
            var r = 0,
              a = function () {}
            return {
              s: a,
              n: function () {
                return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] }
              },
              e: function (e) {
                throw e
              },
              f: a,
            }
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
          )
        }
        var i,
          o = !0,
          c = !1
        return {
          s: function () {
            n = e[Symbol.iterator]()
          },
          n: function () {
            var e = n.next()
            return (o = e.done), e
          },
          e: function (e) {
            ;(c = !0), (i = e)
          },
          f: function () {
            try {
              o || null == n.return || n.return()
            } finally {
              if (c) throw i
            }
          },
        }
      }
      function Z(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
        return r
      }
      var J = { page: 'messages', section: 'compose', component: 'dm' },
        $ = 'text',
        ee = 'recipient_id',
        te = Object(z.b)($),
        ne =
          (Object(z.b)(ee),
          function (e) {
            var t = Object(K.q)(e)
            if (!t) throw new Error('logged-in user not found')
            return t
          }),
        re = Object(Y.a)()
          .propsFromState(function () {
            return {
              conversations: Object(V.createSelector)(N.selectConversations, function (e) {
                var t,
                  n = [],
                  r = Q(Object(W.a)(e))
                try {
                  for (r.s(); !(t = r.n()).done; ) {
                    var a = t.value
                    !a.isDeleted && a.data && n.push(a.data)
                  }
                } catch (i) {
                  r.e(i)
                } finally {
                  r.f()
                }
                return n
              }),
              initialMessage: te,
              perspective: ne,
              tweetAttachment: G.n,
              users: q.e.selectAll,
              recipientId: Object(z.b)(ee),
            }
          })
          .propsFromActions(function () {
            return {
              addToast: U.b,
              createLocalApiErrorHandler: Object(X.createLocalApiErrorHandlerWithContextFactory)(
                'DIRECT_MESSAGES_COMPOSE',
              ),
              fetchConversationFromParticipants: N.fetchConversationFromParticipants,
              fetchInboxIfNeeded: N.fetchInboxIfNeeded,
              popOutConversation: N.popOutConversation,
              sendMessage: H.m,
            }
          })
          .withAnalytics(J),
        ae = n('UgB4'),
        ie = n('S+H3'),
        oe = n('883S'),
        ce = n('GZwR')
      function se(e, t) {
        var n
        if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (!e) return
              if ('string' == typeof e) return le(e, t)
              var n = Object.prototype.toString.call(e).slice(8, -1)
              'Object' === n && e.constructor && (n = e.constructor.name)
              if ('Map' === n || 'Set' === n) return Array.from(e)
              if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return le(e, t)
            })(e)) ||
            (t && e && 'number' == typeof e.length)
          ) {
            n && (e = n)
            var r = 0,
              a = function () {}
            return {
              s: a,
              n: function () {
                return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] }
              },
              e: function (e) {
                throw e
              },
              f: a,
            }
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
          )
        }
        var i,
          o = !0,
          c = !1
        return {
          s: function () {
            n = e[Symbol.iterator]()
          },
          n: function () {
            var e = n.next()
            return (o = e.done), e
          },
          e: function (e) {
            ;(c = !0), (i = e)
          },
          f: function () {
            try {
              o || null == n.return || n.return()
            } finally {
              if (c) throw i
            }
          },
        }
      }
      function le(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
        return r
      }
      function ue(e, t) {
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
      function de(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ue(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ue(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function pe(e) {
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
      var fe = R.a.de4669e2,
        he = R.a.ff599111,
        me = R.a.c6026009,
        ve = R.a.f61c4bbf,
        ye = R.a.cdcebd22,
        be = R.a.a7013cb6,
        ge = R.a.f277e949,
        _e = R.a.a2ccb2e7,
        Ee = R.a.a6add339,
        Oe = R.a.aca6eb1b,
        Se = R.a.e3275464,
        Ce = R.a.hbbc401c,
        we = R.a.c1df579e,
        Re = R.a.e1bde73e,
        Ie = y.createElement(ae.a, null),
        ke = Object.freeze({ BACK: 'back', CLOSE: 'close' }),
        Pe = Object.freeze({
          COMPOSE_ROUTE: '/messages/compose',
          GROUP_COMPOSE_ROUTE: '/messages/compose/group',
          MESSAGES_ROUTE: '/messages',
        }),
        xe = Object.freeze({ COMPOSE_MESSAGE: 0, CREATE_GROUP: 1, SHARE_TWEET: 2, SHARE_TWEET_INDIVIDUALLY: 3 }),
        Te = (function (e) {
          u()(n, e)
          var t = pe(n)
          function n(e, r) {
            var i
            return (
              a()(this, n),
              (i = t.call(this, e, r)),
              v()(s()(i), '_composer', y.createRef()),
              v()(s()(i), '_determineMode', function (e) {
                var t,
                  n,
                  r = i.context.featureSwitches,
                  a = e.tweetAttachment || !!e.initialMessage
                return null !== (t = i.props.location) &&
                  void 0 !== t &&
                  null !== (n = t.state) &&
                  void 0 !== n &&
                  n.isNewGroup
                  ? xe.CREATE_GROUP
                  : a
                  ? r.isTrue('dm_share_sheet_send_individually_enabled') &&
                    r.isTrue('direct_messages_incremental_holdback_2022h1')
                    ? xe.SHARE_TWEET_INDIVIDUALLY
                    : xe.SHARE_TWEET
                  : xe.COMPOSE_MESSAGE
              }),
              v()(s()(i), '_isSharingMode', function (e) {
                return e === xe.SHARE_TWEET || e === xe.SHARE_TWEET_INDIVIDUALLY
              }),
              v()(s()(i), '_renderScreen', function (e) {
                var t,
                  n,
                  r = e.isModal,
                  a = i.props.history,
                  o = i.state,
                  c = o.mode,
                  s = o.participants
                switch (c) {
                  case xe.COMPOSE_MESSAGE:
                    t = ye
                    break
                  case xe.CREATE_GROUP:
                    ;(t = he), (n = me)
                    break
                  case xe.SHARE_TWEET:
                    t = ve
                    break
                  case xe.SHARE_TWEET_INDIVIDUALLY:
                    t = s.length > 1 ? be : ve
                    break
                  default:
                    t = ''
                }
                var l = i._isSharingMode(c)
                return y.createElement(
                  E.b,
                  {
                    backButtonType: c === xe.CREATE_GROUP ? ke.BACK : ke.CLOSE,
                    backLocation: c === xe.CREATE_GROUP ? Pe.COMPOSE_ROUTE : Pe.MESSAGES_ROUTE,
                    containerStyle: Me.fill,
                    documentTitle: t,
                    history: a,
                    onBackClick: c === xe.CREATE_GROUP ? i._handleBackClick : i._handleClose,
                    rightControl: l ? void 0 : i._renderAppBarRightControl(),
                    subtitle: n,
                    title: t,
                    withBottomBorder: !1,
                  },
                  y.createElement(A.a.Context.Consumer, null, i._setDisableFocusingPreviousActiveElement),
                  y.createElement(
                    b.a,
                    { style: Me.fill },
                    i._renderUserPicker(),
                    l && !r ? y.createElement(T.a, { style: Me.placeholder }) : null,
                    i._renderComposer(r),
                  ),
                )
              }),
              v()(s()(i), '_setDisableFocusingPreviousActiveElement', function (e) {
                var t = e.disableFocusingPreviousActiveElement
                i._disableFocusingPreviousActiveElement = t
              }),
              v()(s()(i), '_renderAppBarRightControl', function () {
                var e = i.props.tweetAttachment ? Se : we
                return y.createElement(
                  T.a,
                  { style: Me.rightColumn },
                  y.createElement(
                    M.a,
                    {
                      disabled: 0 === i.state.participants.length,
                      onPress: i._handleConversationRouting,
                      size: 'small',
                      style: Me.button,
                      testID: k,
                      type: 'primaryFilled',
                    },
                    e,
                  ),
                )
              }),
              v()(s()(i), '_renderComposer', function (e) {
                var t = i.props,
                  n = t.history,
                  r = t.initialMessage,
                  a = t.tweetAttachment,
                  o = i.state,
                  c = o.isSending,
                  s = o.mode,
                  l = o.participants,
                  u = i._isSharingMode(i.state.mode)
                return u
                  ? y.createElement(g.a, {
                      canSendEmptyMessage: !!a,
                      conversationId: 'DMComposeScreen',
                      disabled: 0 === l.length || c,
                      history: n,
                      isSending: c,
                      isShareViaDM: !!u,
                      isUploading: !1,
                      mediaUploadProgress: 0,
                      onPrimaryAction: i._handleShareTweet,
                      onSecondaryAction: i._handleShareTweetToGroup,
                      placeholderText: fe,
                      prefillText: r,
                      primaryActionIcon: s === xe.SHARE_TWEET_INDIVIDUALLY ? void 0 : Ie,
                      primaryActionLabel: Se,
                      ref: i._composer,
                      scribeNamespace: J,
                      secondaryActionLabel: s === xe.SHARE_TWEET_INDIVIDUALLY ? Ce : void 0,
                      shouldEnableSecondaryActionFunc: i._shouldEnableSendToGroup,
                      shouldShowSecondaryActionFunc: i._shouldShowSendToGroup,
                      style: [Me.shadow, !e && Me.fixToBottom],
                      withEmojiPicker: !1,
                      withGifPicker: !1,
                      withMediaPicker: !1,
                    })
                  : null
              }),
              v()(s()(i), '_renderUserPicker', function () {
                var e = i.props,
                  t = e.conversations,
                  n = e.perspective,
                  r = i.state,
                  a = r.mode,
                  o = r.participants,
                  c = r.query
                return y.createElement(x.d, {
                  getItemDisabledMessage: i._getItemDisabledMessage,
                  getItemIsDisabled: i._getItemIsDisabled(i._separateShareLimit),
                  injections: i._getInjections(t, n, c),
                  onQueryChange: i._handleQueryChange,
                  onRemove: i._handleRemoveParticipant,
                  onSelect: i._getHandleSuggestionSelected(),
                  renderHeader: i._renderHeader(),
                  selectedUsers: o,
                  shouldAutoFocus: !i._isSharingMode(a) || !P.b.isIOS(),
                  source: ce.d.ComposeMessage,
                  withCompactPills: !0,
                })
              }),
              v()(s()(i), '_handleBackClick', function () {
                i.props.history.goBack()
              }),
              v()(s()(i), '_handleClose', function () {
                i.props.history.goBackThroughModals()
              }),
              v()(s()(i), '_handleCreateGroup', function () {
                i.props.analytics.scribe({ element: 'create_group', action: 'click' }),
                  i.setState({ mode: xe.CREATE_GROUP })
              }),
              v()(s()(i), '_shouldShowSendToGroup', function () {
                return i.state.participants.length > 1
              }),
              v()(s()(i), '_shouldEnableSendToGroup', function () {
                return !i._hasAtLeastOneGroupSelected()
              }),
              v()(s()(i), '_renderHeader', function () {
                return function () {
                  var e = i.state,
                    t = e.mode,
                    n = e.participants,
                    r = e.query,
                    a = i.props.tweetAttachment
                  return n.length || r || t !== xe.COMPOSE_MESSAGE
                    ? null
                    : y.createElement(
                        j.a,
                        {
                          link: {
                            pathname: Pe.GROUP_COMPOSE_ROUTE,
                            state: de(de({}, i.state), {}, { isNewGroup: !0, participants: n, tweetAttachment: a }),
                            anchorless: !0,
                          },
                          onPress: i._handleCreateGroup,
                          style: Me.container,
                        },
                        y.createElement(M.a, {
                          accessibilityLabel: he,
                          borderColor: 'blue500',
                          color: 'blue500',
                          hoverLabel: { label: 'Group' },
                          icon: y.createElement(ie.a, { style: Me.searchIcon }),
                          onPress: i._handleCreateGroup,
                          size: 'small',
                          style: Me.createGroupButton,
                          type: 'brandOutlined',
                        }),
                        y.createElement(D.b, { color: 'link', numberOfLines: 1, weight: 'bold' }, he),
                      )
                }
              }),
              v()(s()(i), '_isShareLimitMet', function (e) {
                var t = i.state,
                  n = t.mode,
                  r = t.participants,
                  a = n === xe.SHARE_TWEET_INDIVIDUALLY && i._separateShareLimit && r.length >= i._separateShareLimit,
                  o = r.filter(function (t) {
                    return t.id === e.id
                  }).length
                return !(!a || o)
              }),
              v()(s()(i), '_isGroupOptionDisabled', function (e) {
                var t = i.state,
                  n = t.mode,
                  r = t.participants
                if (
                  !i._isSelectedGroup(e) &&
                  n !== xe.SHARE_TWEET_INDIVIDUALLY &&
                  (i._hasAtLeastOneGroupSelected() ||
                    (e.type === ce.b.DMConversation && (r.length > 0 || n === xe.CREATE_GROUP)))
                )
                  return !0
              }),
              v()(s()(i), '_canDMUser', function (e) {
                if (e.type === ce.b.User) return !(e.data.can_dm || e.data.is_dm_able)
              }),
              v()(s()(i), '_hasAtLeastOneGroupSelected', function () {
                var e,
                  t = se(i.state.participants)
                try {
                  for (t.s(); !(e = t.n()).done; ) {
                    if (e.value.type === ce.b.DMConversation) return !0
                  }
                } catch (n) {
                  t.e(n)
                } finally {
                  t.f()
                }
                return !1
              }),
              v()(s()(i), '_isSelectedGroup', function (e) {
                var t = i.state.participants
                if (i._hasAtLeastOneGroupSelected() && t[0].id === e.id) return !0
              }),
              v()(s()(i), '_getItemIsDisabled', function (e) {
                return function (e) {
                  var t = i._isShareLimitMet(e),
                    n = i._isGroupOptionDisabled(e),
                    r = i._canDMUser(e)
                  return n || t || r
                }
              }),
              v()(s()(i), '_getItemDisabledMessage', function (e) {
                return e.type === ce.b.User ? Re({ screenName: e.data.screen_name }) : void 0
              }),
              v()(
                s()(i),
                '_getInjections',
                Object(I.a)(function (e, t, n) {
                  return Object(O.a)(
                    n,
                    e.map(function (e) {
                      return Object(C.b)(e, void 0, i.props.users)
                    }),
                    t,
                  ).slice(0, 12)
                }),
              ),
              v()(s()(i), '_handleQueryChange', function (e) {
                i.setState({ query: e })
              }),
              v()(s()(i), '_getHandleSuggestionSelected', function () {
                return function (e) {
                  var t = i.props.perspective,
                    n = i.state,
                    r = n.mode,
                    a = n.participants
                  if (e.type === ce.b.User || e.type === ce.b.DMConversation)
                    if (i._hasAtLeastOneGroupSelected() && r !== xe.SHARE_TWEET_INDIVIDUALLY)
                      e.id === a[0].id && i._handleRemoveParticipant(e)
                    else if (e.type === ce.b.DMConversation)
                      if (r === xe.SHARE_TWEET || r === xe.SHARE_TWEET_INDIVIDUALLY)
                        i._createConversationObjectForSelectionPill(e, r === xe.SHARE_TWEET_INDIVIDUALLY)
                      else {
                        var o = Ae(e, t)
                        i._goToConversation(o)
                      }
                    else i._handleParticipantToggle(e)
                }
              }),
              v()(s()(i), '_createConversationObjectForSelectionPill', function (e, t) {
                var n = i.props,
                  r = n.conversations,
                  a = n.perspective,
                  o = n.users,
                  c = i.state.participants,
                  s = r.find(function (t) {
                    return e.id === t.conversation_id
                  })
                if (s) {
                  var l = Object(C.b)(s, void 0, o),
                    u = Object(S.a)(l, a)
                  ;(e.data = de(de({}, l), {}, { conversationId: e.data.conversationId, name: u || '' })),
                    t
                      ? c.find(function (t) {
                          return t.id === e.id
                        })
                        ? i._handleRemoveParticipant(e)
                        : i.setState({ participants: c.concat(e) })
                      : i.setState({ participants: [e] })
                }
              }),
              v()(s()(i), '_handleParticipantToggle', function (e) {
                var t = i.state.participants
                if (
                  t.find(function (t) {
                    return t.id === e.id
                  })
                )
                  i._handleRemoveParticipant(e)
                else {
                  var n = t.concat(e)
                  i.setState({ participants: n })
                }
              }),
              v()(s()(i), '_handleRemoveParticipant', function (e) {
                var t = i.state.participants.filter(function (t) {
                  return t.id !== e.id
                })
                i.setState({ participants: t })
              }),
              v()(s()(i), '_handleConversationRouting', function () {
                i.props.tweetAttachment ? i._handleShareTweet() : i._handleCreateConversation()
              }),
              v()(s()(i), '_getExistingGroupConversationFromCache', function (e) {
                return i.props.conversations.find(function (t) {
                  var n = t.participants.length - 1
                  return (
                    !t.name &&
                    n === e.length &&
                    e.every(function (e) {
                      return Boolean(
                        t.participants.find(function (t) {
                          return e.id === t.user_id
                        }),
                      )
                    })
                  )
                })
              }),
              v()(s()(i), '_getExistingGroupConversationFromApi', function (e) {
                var t = e
                  .map(function (e) {
                    return e.id
                  })
                  .join(',')
                return i.props.fetchConversationFromParticipants(t)
              }),
              v()(s()(i), '_getExistingGroupConversation', function (e) {
                if (e.length <= 1) return Promise.resolve()
                var t = i._getExistingGroupConversationFromCache(e)
                return t ? Promise.resolve(t) : i._getExistingGroupConversationFromApi(e)
              }),
              v()(s()(i), '_handleCreateConversation', function () {
                var e = i.props,
                  t = e.history,
                  n = e.initialMessage,
                  r = e.perspective,
                  a = e.tweetAttachment,
                  o = i.state.participants
                if (1 === o.length) {
                  var c = Ae(o[0], r)
                  i._goToConversation(c)
                } else {
                  var s = i._getExistingGroupConversation(o)
                  i._disableFocusingPreviousActiveElement && i._disableFocusingPreviousActiveElement(),
                    s
                      .then(function (e) {
                        if (!e) throw new Error('No conversation found')
                        i._goToConversation(e.conversation_id)
                      })
                      .catch(function () {
                        t.replace({
                          pathname: '/messages/group',
                          query: v()({}, $, n),
                          state: { participants: o, tweetAttachment: a, isNewGroupConversation: !0 },
                        })
                      }),
                    i._disableFocusingPreviousActiveElement && i._disableFocusingPreviousActiveElement()
                }
              }),
              v()(s()(i), '_handleShareTweetToGroup', function (e, t) {
                return i.setState({ mode: xe.CREATE_GROUP, isSending: !0 }), i._handleShareTweet(e, t)
              }),
              v()(s()(i), '_handleShareTweet', function (e, t) {
                var n = i.props,
                  r = n.createLocalApiErrorHandler,
                  a = n.perspective,
                  o = n.tweetAttachment,
                  c = i.state.participants,
                  s = 1 === c.length
                i.setState({ isSending: !0 })
                var l = c
                s && (l = c[0])
                var u = { senderId: a, tweetAttachment: o, text: t },
                  d = Ae(l, a)
                return d
                  ? i._sendMessage(d, c, u)
                  : i
                      ._getExistingGroupConversation(c)
                      .catch(r(oe.a))
                      .then(function (e) {
                        var t = e ? e.conversation_id : null
                        return i._sendMessage(t, c, u)
                      })
              }),
              v()(s()(i), '_sendMessage', function (e, t, n) {
                var r = i.props,
                  a = r.analytics,
                  o = r.createLocalApiErrorHandler,
                  c = r.history,
                  s = r.sendMessage,
                  l = i.state.mode,
                  u = de({ conversationId: void 0, recipients: void 0 }, n)
                if (!e && Array.isArray(t)) {
                  var d = t
                    .map(function (e) {
                      if (e.type === ce.b.User) return e.data.id_str
                    })
                    .filter(Boolean)
                  u.recipients = d
                } else u.conversationId = e
                var p = o(oe.b),
                  f = o(oe.c),
                  h = { action: 'send_tweet_dm' },
                  m = { action: 'share_error' }
                if (
                  (i._isSharingMode(l) &&
                    null != t &&
                    t.length &&
                    t.forEach(function () {
                      a.scribe(h)
                    }),
                  l === xe.SHARE_TWEET_INDIVIDUALLY && (null == t ? void 0 : t.length) > 1)
                ) {
                  var v =
                    null == t
                      ? void 0
                      : t.map(function (e) {
                          var t = Ae(e, i.props.perspective)
                          return de(de({}, u), {}, { conversationId: t, recipients: void 0 })
                        })
                  return Promise.all(
                    v.map(function (e) {
                      return s(e)
                    }),
                  )
                    .then(function () {
                      i._displayDMMessageSentSuccessToast(), i.setState({ isSending: !1 }), c.goBack()
                    })
                    .catch(function (e) {
                      a.scribe(m), i.setState({ isSending: !1 }), f(e)
                    })
                }
                return s(u).then(
                  function (e) {
                    i._displayDMMessageSentSuccessToast(e), i.setState({ isSending: !1 }), c.goBackThroughModals()
                  },
                  function (e) {
                    i._isSharingMode(l) && a.scribe(m), i.setState({ isSending: !1 }), p(e)
                  },
                )
              }),
              v()(s()(i), '_goToConversation', function (e) {
                var t,
                  n,
                  r = i.props,
                  a = r.history,
                  o = r.initialMessage,
                  c = r.popOutConversation,
                  s = r.tweetAttachment
                ;(i._disableFocusingPreviousActiveElement && i._disableFocusingPreviousActiveElement(), e) &&
                  ('drawer' ===
                  (null === (t = a.location) || void 0 === t || null === (n = t.state) || void 0 === n
                    ? void 0
                    : n.source)
                    ? (c(e), a.goBack())
                    : a.replace({
                        pathname: '/messages/'.concat(e),
                        query: v()({}, $, o),
                        state: { tweetAttachment: s },
                      }))
              }),
              v()(s()(i), '_displayDMMessageSentSuccessToast', function (e) {
                ;(0,
                i.props
                  .addToast)({ text: e ? (i.state.mode === xe.CREATE_GROUP ? Ee : _e) : Oe, action: { link: e ? '/messages/'.concat(e) : '/messages', label: ge } })
              }),
              (i._separateShareLimit = r.featureSwitches.getNumberValue('dm_share_sheet_send_individually_max_count')),
              (i.state = { mode: i._determineMode(i.props), participants: [], query: '', isSending: !1 }),
              i
            )
          }
          return (
            o()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.createLocalApiErrorHandler,
                    n = e.history,
                    r = e.initialMessage,
                    a = e.location.query,
                    i = e.perspective,
                    o = e.recipientId
                  if (o) {
                    var c = Object(_.a)(o, i)
                    n.replace({ pathname: '/messages/'.concat(c), query: de(de({}, a), {}, v()({}, $, r)) })
                  } else this.props.fetchInboxIfNeeded().catch(t())
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e, t) {
                  var n = this.state.participants
                  ;(this.state.mode === xe.SHARE_TWEET || this.state.mode === xe.SHARE_TWEET_INDIVIDUALLY) &&
                    t.participants.length < n.length &&
                    this._composer.current &&
                    this._composer.current.focus()
                },
              },
              {
                key: 'shouldComponentUpdate',
                value: function (e, t) {
                  return !this.state.isSending && !t.isSending
                },
              },
              {
                key: 'render',
                value: function () {
                  return this.props.recipientId ? null : y.createElement(L.b.Consumer, null, this._renderScreen)
                },
              },
            ]),
            n
          )
        })(y.Component)
      v()(Te, 'contextType', B.a)
      var Ae = function (e, t) {
          return Array.isArray(e) || e.type !== ce.b.DMConversation
            ? Array.isArray(e) || e.type !== ce.b.User
              ? null
              : Object(_.a)(e.data.id_str, t)
            : e.data.conversationId
        },
        Me = F.a.create(function (e) {
          return {
            fill: { flex: 1 },
            button: { marginLeft: e.spaces.space12 },
            container: {
              borderBottomColor: e.colors.borderColor,
              borderBottomStyle: 'solid',
              borderBottomWidth: e.borderWidths.small,
              flexDirection: 'row',
              alignItems: 'center',
              paddingVertical: e.spaces.space12,
              paddingHorizontal: e.spaces.space16,
            },
            createGroupButton: { padding: e.spaces.space2, marginRight: e.spaces.space12 },
            searchIcon: { padding: e.spaces.space8 },
            topBorder: {
              borderTopColor: e.colors.gray200,
              borderTopStyle: 'solid',
              borderTopWidth: e.borderWidths.small,
            },
            rightColumn: { alignItems: 'center', flexDirection: 'row', flexGrow: 1, justifyContent: 'flex-end' },
            shadow: { boxShadow: '0 -1px 3px rgba(0,0,0,0.12)' },
            placeholder: { height: 46 },
            fixToBottom: {
              position: 'fixed',
              backfaceVisibility: 'hidden',
              bottom: 0,
              left: 0,
              right: 0,
              paddingBottom: F.a.iPhoneOffsetBottom,
            },
          }
        }),
        je = re(Te)
      t.default = je
    },
    XnpN: function (e, t, n) {
      'use strict'
      var r = n('RhWx'),
        a = n.n(r),
        i = n('ddV6'),
        o = n.n(i),
        c = (n('2G9S'), n('tQbP'), n('aWyx')),
        s = (n('6U7i'), n('LW0h'), n('z84I'), n('t0aI')),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
          return new Date(Number(e))
        },
        u = function (e, t) {
          return l(e.join_time) - l(t.join_time)
        },
        d = function (e, t) {
          var n = e.user,
            r = t.user
          return Object(s.a)(n.id_str, r.id_str)
        },
        p = function (e) {
          return (function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]
            return function (e, n) {
              return (
                t
                  .map(function (t) {
                    return t(e, n)
                  })
                  .filter(function (e) {
                    return !!e
                  })[0] || 0
              )
            }
          })(
            (function (e) {
              return function (t, n) {
                var r = t.user,
                  a = n.user
                switch (e) {
                  case r.id_str:
                    return -1
                  case a.id_str:
                    return 1
                  default:
                    return 0
                }
              }
            })(e),
            u,
            d,
          )
        },
        f = n('tn7R'),
        h = n('VIKJ')
      t.a = function (e, t) {
        var n = e.created_by_user_id,
          r = e.participants,
          i = e.type,
          s = Object(f.a)(r),
          l = Object(h.a)(s, function (e) {
            return e.user.id_str === t
          }),
          u = o()(l, 2),
          d = u[0],
          m = u[1]
        return m.length ? (i === c.a.GROUP && 1 === m.length ? [].concat(a()(d), a()(m)) : n ? m.sort(p(n)) : m) : d
      }
    },
    XoqV: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'DMParticipantsScreen', function () {
          return C
        })
      n('z84I'), n('2G9S')
      var r = n('ERkP'),
        a = (n('WNMA'), n('KqXw'), n('MMRb')),
        i = n('rxPX'),
        o = n('RqPI'),
        c = n('0KEI'),
        s = function (e, t) {
          return t.match.params.conversationId
        },
        l = function (e, t) {
          return a.selectConversationFetchStatus(e, s(0, t))
        },
        u = function (e, t) {
          var n
          return null === (n = a.selectConversation(e, t.match.params.conversationId)) || void 0 === n ? void 0 : n.data
        },
        d = Object(i.a)()
          .propsFromState(function () {
            return { conversationId: s, fetchStatus: l, perspective: o.q, conversation: u }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(c.createLocalApiErrorHandlerWithContextFactory)(
                'DIRECT_MESSAGES_PARTICIPANTS',
              ),
              fetchConversationIfNeeded: a.fetchConversationIfNeeded,
            }
          }),
        p = n('I2k/'),
        f = n('v//M'),
        h = n('3XMw'),
        m = n.n(h),
        v = n('M2mT'),
        y = n('Es6L'),
        b = n('rHpw'),
        g = n('hqDb'),
        _ = n('yw4N'),
        E = n('7JQg'),
        O = m.a.g2fd3205,
        S = m.a.d4986f85
      function C(e) {
        var t = e.conversation,
          n = e.conversationId,
          a = e.createLocalApiErrorHandler,
          i = e.fetchConversationIfNeeded,
          o = e.fetchStatus,
          c = r.useCallback(
            function () {
              i({ conversationId: n }).catch(a(Object(p.a)(n)))
            },
            [a, n, i],
          ),
          s = r.useCallback(
            function () {
              var e = ((null == t ? void 0 : t.participants) || []).map(function (e) {
                return e.user_id
              })
              return r.createElement(g.a, { userIds: e, withItemBorder: !0 })
            },
            [t],
          )
        return (
          r.useEffect(
            function () {
              c()
            },
            [c],
          ),
          r.createElement(
            v.a,
            {
              backLocation: '/messages/'.concat(n, '/info'),
              documentTitle: S,
              screenType: 'secondaryDetail',
              title: O,
            },
            r.createElement(
              _.a,
              { style: [w.root, !Object(y.a)() && w.bottomOffset] },
              r.createElement(f.a, { fetchStatus: o, onRequestRetry: c, render: s }),
            ),
          )
        )
      }
      var w = b.a.create(function (e) {
        return {
          root: { backgroundColor: e.colors.cellBackground },
          bottomOffset: {
            paddingBottom: 'calc('
              .concat(b.a.theme.componentDimensions.appBarHeight, ' + ')
              .concat(b.a.iPhoneOffsetBottom, ')'),
          },
        }
      })
      t.default = Object(E.c)({ page: 'messages', section: 'view_participants' })(d(C))
    },
    XygZ: function (e, t, n) {
      'use strict'
      var r = n('ax0f'),
        a = n('gIHd')
      r(
        { target: 'String', proto: !0, forced: n('sHxg')('anchor') },
        {
          anchor: function (e) {
            return a(this, 'a', 'name', e)
          },
        },
      )
    },
    ZH9U: function (e, t, n) {
      'use strict'
      n.r(t)
      var r,
        a,
        i = {
          fragment: {
            argumentDefinitions: (r = [
              { defaultValue: null, kind: 'LocalArgument', name: 'conversation_id' },
              { defaultValue: null, kind: 'LocalArgument', name: 'label' },
            ]),
            kind: 'Fragment',
            metadata: null,
            name: 'DMPinnedInboxAppend_Mutation',
            selections: (a = [
              {
                alias: null,
                args: [
                  { kind: 'Variable', name: 'conversation_id', variableName: 'conversation_id' },
                  { kind: 'Variable', name: 'label', variableName: 'label' },
                  { kind: 'Literal', name: 's', value: 16 },
                ],
                concreteType: null,
                kind: 'LinkedField',
                name: 'add_dm_conversation_label_v3',
                plural: !1,
                selections: [
                  { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null },
                  {
                    kind: 'InlineFragment',
                    selections: [
                      { alias: null, args: null, kind: 'ScalarField', name: 'label_type', storageKey: null },
                      { alias: null, args: null, kind: 'ScalarField', name: 'timestamp', storageKey: null },
                    ],
                    type: 'DMConversationLabelInfo',
                    abstractKey: null,
                  },
                  {
                    kind: 'InlineFragment',
                    selections: [
                      { alias: null, args: null, kind: 'ScalarField', name: 'failure_reason', storageKey: null },
                      { alias: null, args: null, kind: 'ScalarField', name: 'message', storageKey: null },
                    ],
                    type: 'DMConversationLabelUnavailable',
                    abstractKey: null,
                  },
                ],
                storageKey: null,
              },
            ]),
            type: 'Mutation',
            abstractKey: null,
          },
          kind: 'Request',
          operation: { argumentDefinitions: r, kind: 'Operation', name: 'DMPinnedInboxAppend_Mutation', selections: a },
          params: {
            id: 'o0aymgGiJY-53Y52YSUGVA',
            metadata: {},
            name: 'DMPinnedInboxAppend_Mutation',
            operationKind: 'mutation',
            text: null,
          },
        }
      ;(i.hash = '86e5601441f8d07b68ccbcf112746d23'), (t.default = i)
    },
    aA19: function (e, t, n) {
      'use strict'
      n('uFXj'), n('z84I'), n('hBvt'), n('M+/F'), n('+KXO')
      var r = n('ERkP'),
        a = n('aWyx'),
        i = n('XnpN'),
        o = n('3XMw'),
        c = n.n(o),
        s = n('rHpw'),
        l = n('TIdA'),
        u = n('A91F'),
        d = n('jhWN'),
        p = n('9Xij'),
        f = n('Znyr'),
        h = n('cm6r'),
        m = n('U+bB'),
        v = n('MWbm'),
        y = c.a.fd48249b,
        b = s.a.create(function (e) {
          return {
            circle: { borderRadius: e.borderRadii.infinite, overflow: 'hidden' },
            container: { height: 'auto', width: '100%' },
            itemAccessory: { top: -e.spacesPx.space24, right: -e.spacesPx.space24 },
            userDecoration: {
              fontSize: e.fontSizes.subtext3,
              position: 'absolute',
              backgroundColor: e.colors.gray100,
              marginLeft: e.spaces.space8,
              boxSizing: 'border-box',
              width: e.spaces.space24,
              height: e.spaces.space24,
            },
          }
        }),
        g = s.a.create(function (e) {
          return {
            container: { flexDirection: 'row' },
            left: { flex: 1 },
            right: {
              flex: 1,
              marginLeft: e.borderWidths.small,
              marginRight: 'calc(-1 * '.concat(e.borderWidths.small, ')'),
            },
          }
        }),
        _ = s.a.create(function (e) {
          return {
            container: { flexDirection: 'column' },
            top: { flex: 1, marginBottom: e.borderWidths.small },
            bottom: { flex: 1 },
          }
        }),
        E = function (e) {
          var t = e.left,
            n = e.right
          return r.createElement(
            v.a,
            { style: g.container },
            r.createElement(v.a, { style: g.left }, t),
            r.createElement(v.a, { style: g.right }, n),
          )
        },
        O = function (e) {
          var t = e.bottom,
            n = e.top
          return r.createElement(
            v.a,
            { style: _.container },
            r.createElement(v.a, { style: _.top }, n),
            r.createElement(v.a, { style: _.bottom }, t),
          )
        }
      t.a = function (e) {
        var t = function (t) {
            var n = e.size,
              a = e.withVDLRefresh ? 'xxxLarge' : 'xxLarge'
            return r.createElement(
              v.a,
              { key: t.id_str, style: b.container },
              r.createElement(d.a, { size: n || a, uri: t.profile_image_url_https }),
            )
          },
          n = function (e) {
            var t = e.length,
              n = e.map(function (e, n) {
                var a = 2 === t || (3 === t && 0 === n) ? 0.5 : 1
                return r.createElement(
                  v.a,
                  { key: e.id_str, style: b.container },
                  r.createElement(d.a, {
                    aspectRatio: a,
                    shape: 'none',
                    size: 'custom',
                    uri: e.profile_image_url_https,
                  }),
                )
              })
            if (2 === t) return r.createElement(p.a, { ratio: 1 }, r.createElement(E, { left: n[1], right: n[0] }))
            var a = r.createElement(O, { bottom: n[2], top: n[1] }),
              i = n[0]
            return r.createElement(E, { left: a, right: i })
          },
          o = e.conversation,
          c = e.link,
          g = e.perspective,
          _ = e.withBadge,
          S = o && o.avatar_image_https,
          C = o
            ? Object(i.a)(o, g).map(function (e) {
                return e.user
              })
            : [],
          w = C.slice(0, 3),
          R =
            (function (e) {
              var t = e && e.avatar && e.avatar.image && e.avatar.image.original_info
              return t
                ? r.createElement(l.a, {
                    accessibilityLabel: '',
                    aspectMode: u.a.SQUARE,
                    backgroundColor: s.a.theme.colors.gray50,
                    image: t,
                    rounded: !0,
                  })
                : null
            })(o) ||
            (function (e) {
              return e ? r.createElement(m.a, { source: e }) : null
            })(S) ||
            (function (e) {
              var a = e.length
              return 0 === a ? null : 1 === a ? t(e[0]) : r.createElement(v.a, { style: b.circle }, n(e))
            })(w),
          I =
            c ||
            (function (e, t) {
              if (e)
                return e.type === a.a.GROUP
                  ? '/messages/'.concat(e.conversation_id, '/participants')
                  : e.type === a.a.ONE_TO_ONE
                  ? '/'.concat(t[0].screen_name)
                  : void 0
            })(o, C),
          k = _ && null != o && o.participants ? Object.keys(o.participants).length - 1 : 0
        return R
          ? r.createElement(
              r.Fragment,
              null,
              r.createElement(p.a, { ratio: 1 }, I ? r.createElement(h.a, { interactiveStyles: null, link: I }, R) : R),
              k
                ? (function (e) {
                    var t = e.badgeCount
                    return r.createElement(
                      v.a,
                      { style: b.itemAccessory },
                      r.createElement(f.a, {
                        count: t,
                        standalone: !0,
                        style: b.userDecoration,
                        textColor: 'normal',
                        truncatedCountFormatter: function () {
                          return ''
                        },
                        unreadCountLabel: y,
                        withTruncatedCount: !1,
                      }),
                    )
                  })({ badgeCount: k })
                : null,
            )
          : null
      }
    },
    b9JY: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return a
      }),
        n.d(t, 'e', function () {
          return i
        }),
        n.d(t, 'd', function () {
          return o
        }),
        n.d(t, 'c', function () {
          return c
        }),
        n.d(t, 'a', function () {
          return l
        })
      n('vrRf')
      var r = n('aWyx'),
        a = function (e) {
          return e && e.type === r.b.MESSAGE
        },
        i = function (e) {
          return e && e.type === r.b.WELCOME_MESSAGE
        },
        o = function (e) {
          return e && e.type === r.b.TRUST_CONVERSATION
        },
        c = function (e) {
          return e && e.type === r.b.REACTION_CREATE
        },
        s = [
          r.b.CONVERSATION_AVATAR_UPDATE,
          r.b.CONVERSATION_NAME_UPDATE,
          r.b.JOIN_CONVERSATION,
          r.b.PARTICIPANTS_JOIN,
          r.b.PARTICIPANTS_LEAVE,
        ],
        l = function (e) {
          return e && s.indexOf(e.type) > -1
        }
    },
    cFyg: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return i
      })
      var r = n('ZUOq'),
        a = n('rHpw'),
        i = { durationMs: 300 },
        o = a.a.create(function (e) {
          return {
            root: {
              alignSelf: 'flex-end',
              backgroundColor: e.colors.navigationBackground,
              borderTopLeftRadius: e.borderRadii.xLarge,
              borderTopRightRadius: e.borderRadii.xLarge,
              boxShadow: e.boxShadows.medium,
              marginRight: e.spaces.space20,
              minWidth: r.a.dmDrawerWidth.min,
              maxWidth: r.a.dmDrawerWidth.max,
            },
            expandable: { transition: 'all '.concat(i.durationMs, 'ms ease') },
            expanded: { maxHeight: r.a.dmDrawerHeight.expanded, height: '80vh' },
            drawerHeaderRadius: {
              borderTopLeftRadius: e.borderRadii.xLarge,
              borderTopRightRadius: e.borderRadii.xLarge,
            },
          }
        })
      t.b = o
    },
    cOtO: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'DMConversationScreen', function () {
          return te
        })
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
        y = (n('MvUL'), n('KqXw'), n('uFXj'), n('+KXO'), n('z84I'), n('ERkP')),
        b = n('v6aA'),
        g = n('+Kfv'),
        _ = (n('WNMA'), n('zh9S')),
        E = n('MMRb'),
        O = n('CDB5'),
        S = n('RqPI'),
        C = n('hqKg'),
        w = n('AQOc'),
        R = n('z2Pn'),
        I = n('pNZL'),
        k = n('G6rE'),
        P = n('oEGd'),
        x = n('X/yg'),
        T = function (e, t) {
          return t.match.params.conversationId
        },
        A = Object(C.createSelector)(
          function (e, t) {
            return E.selectConversation(e, T(0, t))
          },
          E.selectEntries,
          T,
          x.l,
          S.q,
          x.m,
          x.n,
          k.e.selectAll,
          function (e, t) {
            return O.j(e, T(0, t))
          },
          function (e, t) {
            return O.i(e, T(0, t))
          },
          function (e, t, n, r, a, i, o, c, s, l) {
            var u = e && e.data
            return {
              conversation: (u && Object(w.a)(u, t, c)) || void 0,
              conversationId: n,
              isNewGroupConversation: r,
              isUploading: s,
              media: l,
              newConversationParticipants: i,
              perspective: a,
            }
          },
        ),
        M = Object(P.d)(A, function (e) {
          return {
            cancelUpload: Object(x.a)(e.match.params.conversationId),
            googleAnalyticsPageView: _.a,
            removeMedia: Object(x.b)(e.match.params.conversationId),
            scribePageImpression: _.d,
            setLastViewedDmInboxPath: R.h,
            updateTweetDetailNav: I.b,
          }
        }),
        j = n('i4Oy'),
        D = n('Oi4X'),
        L = n('aA19'),
        F = n('XnpN'),
        B = n('3XMw'),
        N = n.n(B),
        H = (n('hBvt'), n('/yvb')),
        U = n('6s7X'),
        V = N.a.h810143c,
        W = function (e) {
          var t = e.accessibilityLabel,
            n = e.conversationId,
            r = e.link,
            a = e.style,
            i = y.createElement(U.a, null)
          return y.createElement(H.a, {
            accessibilityLabel: t || V,
            hoverLabel: { label: V },
            icon: i,
            key: n,
            link: r,
            pullRight: !0,
            style: a,
            type: 'primaryText',
          })
        },
        z = n('7myi'),
        K = n('M2mT'),
        G = n('rHpw'),
        q = n('aITJ'),
        Y = n('MWbm'),
        X = n('7JQg'),
        Q = n('OhSZ')
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
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var J = N.a.d4986f85,
        $ = N.a.e3e58b6d,
        ee = N.a.a9ddbb94,
        te = (function (e) {
          u()(n, e)
          var t = Z(n)
          function n(e, r) {
            var i
            a()(this, n),
              (i = t.call(this, e, r)),
              v()(s()(i), '_composer', y.createRef()),
              v()(
                s()(i),
                '_isVDLEnabled',
                i.context.featureSwitches.isTrue('dm_vdl_enabled') &&
                  i.context.featureSwitches.isTrue('dm_vdl_chat_p0_enabled'),
              ),
              v()(s()(i), '_handleConversationClose', function (e) {
                var t = i.props,
                  n = t.conversation,
                  r = t.history
                null != n && n.trusted ? r.push('/messages') : e()
              }),
              v()(s()(i), '_handleInfoClick', function () {
                var e = i.props,
                  t = e.conversationId,
                  n = e.history
                t && n.push('/messages/'.concat(t, '/info'))
              }),
              v()(s()(i), '_updateLastViewDmInboxPath', function () {
                var e = i.props,
                  t = e.location
                ;(0, e.setLastViewedDmInboxPath)(t.pathname)
              })
            var o = e.conversationId,
              c = e.history,
              l = e.isNewGroupConversation,
              u = e.location
            return o || l || u.pathname !== window.location.pathname || c.replace({ pathname: '/messages' }), i
          }
          return (
            o()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.googleAnalyticsPageView,
                    n = e.scribeNamespace,
                    r = e.scribePageImpression,
                    a = e.updateTweetDetailNav
                  r(n), a(n), t(n), this._updateLastViewDmInboxPath()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  this.props.conversationId !== e.conversationId && this._updateLastViewDmInboxPath()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.conversationId,
                    n = e.history,
                    r = e.location,
                    a = e.richTextInputContext,
                    i = e.typeaheadWrapper,
                    o = 'string' == typeof r.query.text ? r.query.text : void 0,
                    c = j.a.get('window').width >= G.a.theme.breakpoints.small
                  return y.createElement(
                    K.a,
                    this._getNavProps(),
                    y.createElement(
                      g.a,
                      { viewType: 'messages' },
                      y.createElement(D.a, {
                        conversationId: t,
                        history: n,
                        isWide: c,
                        location: r,
                        prefillText: o,
                        richTextInputContext: a,
                        typeaheadWrapper: i,
                      }),
                    ),
                  )
                },
              },
              {
                key: '_getNavProps',
                value: function () {
                  var e = this.props,
                    t = e.conversation,
                    n = e.newConversationParticipants,
                    r = e.perspective,
                    a =
                      t && Object.keys(t.participants).length
                        ? Object(Q.a)({ conversation: t, perspective: r })
                        : n
                        ? Object(Q.a)({ newConversationParticipants: n, perspective: r })
                        : J,
                    i =
                      t && Object.keys(t.participants).length
                        ? y.createElement(Q.b, { conversation: t, perspective: r, withScreenName: !1 })
                        : n
                        ? y.createElement(Q.b, { newConversationParticipants: n, perspective: r, withScreenName: !1 })
                        : J,
                    o = this._isVDLEnabled ? 'large' : 'medium',
                    c = r ? y.createElement(L.a, { conversation: t, perspective: r, size: o }) : void 0,
                    s =
                      t &&
                      t.type === E.CONVERSATION_TYPE.ONE_TO_ONE &&
                      r &&
                      Object(F.a)(t, r).map(function (e) {
                        return e.user.screen_name
                      }),
                    l = s ? '@'.concat(s[0]) : void 0
                  return {
                    backLocation: '/messages',
                    onBackClick: this._handleConversationClose,
                    documentTitle: a,
                    rightControl: this._renderRightControl(),
                    title: i,
                    titleIconCell: c,
                    titleIconCellSize: o,
                    subtitle: l,
                    screenType: 'primaryDetail',
                    withBottomTabBar: !1,
                    headerless: q.b.isKaiOS(),
                  }
                },
              },
              {
                key: '_renderRightControl',
                value: function () {
                  var e,
                    t = this.props,
                    n = t.conversation,
                    r = t.conversationId,
                    a = t.location,
                    i = (null == n ? void 0 : n.type) === E.CONVERSATION_TYPE.GROUP,
                    o = (null == a || null === (e = a.state) || void 0 === e ? void 0 : e.position) || 0
                  return r
                    ? y.createElement(
                        Y.a,
                        { style: ne.rightControlStyles },
                        y.createElement(W, {
                          accessibilityLabel: i ? ee : $,
                          conversationId: r,
                          link: { pathname: '/messages/'.concat(r, '/info'), state: { position: o } },
                          style: ne.infoButton,
                        }),
                      )
                    : void 0
                },
              },
            ]),
            n
          )
        })(y.PureComponent)
      v()(te, 'contextType', b.a), v()(te, 'defaultProps', { isNewGroupConversation: !1, typeaheadWrapper: z.a })
      var ne = G.a.create(function (e) {
        return { infoButton: { marginRight: e.spaces.space4 }, rightControlStyles: { flexDirection: 'row' } }
      })
      t.default = Object(X.c)({ page: 'messages', section: 'thread' })(M(te))
    },
    dPJJ: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return s
      }),
        n.d(t, 'b', function () {
          return l
        })
      n('LqLs'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('jwue'), n('LW0h'), n('z84I'), n('+oxZ')
      var r = n('6/RC'),
        a = new Set(),
        i = new Set(),
        o = !1
      function c() {
        if (r.canUseDOM && !o) {
          var e = [
            'fullscreenElement',
            'webkitFullscreenElement',
            'webkitCurrentFullScreenElement',
            'mozFullScreenElement',
            'msFullscreenElement',
          ]
          ;['webkitfullscreenchange', 'mozfullscreenchange', 'fullscreenchange', 'msfullscreenchange'].forEach(
            function (t) {
              document.addEventListener(t, function () {
                var t = e
                  .map(function (e) {
                    return document[e]
                  })
                  .filter(Boolean)[0]
                t
                  ? a.forEach(function (e) {
                      return e(t)
                    })
                  : i.forEach(function (e) {
                      return e()
                    })
              })
            },
          )
        }
        o = !0
      }
      var s = function (e) {
          return (
            o || c(),
            a.add(e),
            function () {
              return a.delete(e)
            }
          )
        },
        l = function (e) {
          return (
            o || c(),
            i.add(e),
            function () {
              return i.delete(e)
            }
          )
        }
    },
    'ejT/': function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return r
      }),
        n.d(t, 'a', function () {
          return a
        })
      var r = function (e) {
          return { id: e, distanceToViewportTop: 0 }
        },
        a = function (e) {
          return { id: e, distanceToViewportBottom: 0 }
        }
    },
    f42t: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return O
      })
      n('OZaJ')
      var r = n('97Jx'),
        a = n.n(r),
        i = n('VrFO'),
        o = n.n(i),
        c = n('Y9Ll'),
        s = n.n(c),
        l = n('1Pcy'),
        u = n.n(l),
        d = n('5Yy7'),
        p = n.n(d),
        f = n('N+ot'),
        h = n.n(f),
        m = n('AuHH'),
        v = n.n(m),
        y = n('KEM+'),
        b = n.n(y),
        g =
          (n('2G9S'), n('+KXO'), n('JtPf'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('z84I'), n('KOtZ'), n('ERkP'))
      function _(e) {
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
            var a = v()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      var E = (function (e) {
          p()(n, e)
          var t = _(n)
          function n() {
            var e
            o()(this, n)
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i]
            return (e = t.call.apply(t, [this].concat(a))), b()(u()(e), 'state', { isLoaded: !1 }), e
          }
          return (
            s()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  return (this._isMounted = !0), this.load()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  return this.props.modules === e.modules ? null : this.load()
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._isMounted = !1
                },
              },
              {
                key: 'load',
                value: function () {
                  var e = this
                  this.setState({ isLoaded: !1 })
                  var t = this.props.modules,
                    n = Object.keys(t)
                  return Promise.all(
                    n.map(function (e) {
                      return t[e]()
                    }),
                  )
                    .then(function (e) {
                      return n.reduce(function (t, n, r) {
                        return (t[n] = e[r]), t
                      }, {})
                    })
                    .then(function (t) {
                      if (!e._isMounted) return null
                      e.setState({ modules: t, isLoaded: !0 })
                    })
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.state.isLoaded ? this.state.modules : {}
                  return g.Children.only(this.props.children(e || {}))
                },
              },
            ]),
            n
          )
        })(g.Component),
        O = function (e, t) {
          return function (n) {
            return g.createElement(E, { modules: t }, function (t) {
              return g.createElement(e, a()({}, t, n))
            })
          }
        }
    },
    fzwJ: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'DMAddParticipantsScreen', function () {
          return Q
        }),
        n.d(t, 'getItemIsDisabled', function () {
          return Z
        })
      var r = n('KEM+'),
        a = n.n(r),
        i = n('RhWx'),
        o = n.n(i),
        c = n('ddV6'),
        s = n.n(c),
        l = (n('hBpG'), n('2G9S'), n('LW0h'), n('z84I'), n('M+/F'), n('i4UL'), n('ERkP')),
        u = n('k49u'),
        d = n('VAZu'),
        p = (n('WNMA'), n('KqXw'), n('+KXO'), n('MMRb')),
        f = n('1YZw'),
        h = n('lnti'),
        m = n('hqKg'),
        v = n('RqPI'),
        y = n('G6rE'),
        b = n('rxPX'),
        g = n('0KEI'),
        _ = function (e, t) {
          return t.match.params.conversationId
        },
        E = function (e, t) {
          var n = p.selectConversation(e, _(0, t)),
            r = null == n ? void 0 : n.data
          return null == r ? void 0 : r.participants
        },
        O = function (e, t) {
          return p.selectConversationFetchStatus(e, _(0, t))
        },
        S = Object(m.createSelector)(p.selectConversations, function (e) {
          return Object(h.a)(
            Object.keys(e).map(function (t) {
              var n = e[t]
              if (!n.isDeleted) return n.data
            }),
          )
        }),
        C = Object(b.a)()
          .propsFromState(function () {
            return {
              conversationId: _,
              conversations: S,
              existingParticipants: E,
              fetchStatus: O,
              perspective: v.q,
              users: y.e.selectAll,
            }
          })
          .adjustStateProps(function (e) {
            var t = e.conversationId,
              n = e.conversations,
              r = e.existingParticipants,
              a = e.fetchStatus,
              i = e.perspective,
              o = e.users
            if (!i) throw new Error('logged-in user not found')
            return {
              conversationId: t,
              conversations: n,
              existingParticipants: r,
              fetchStatus: a,
              perspective: i,
              users: o,
            }
          })
          .propsFromActions(function () {
            return {
              addParticipants: p.addParticipants,
              addToast: f.b,
              createLocalApiErrorHandler: Object(g.createLocalApiErrorHandlerWithContextFactory)(
                'DIRECT_MESSAGES_ADD_PARTICIPANTS',
              ),
              fetchConversationIfNeeded: p.fetchConversationIfNeeded,
            }
          })
          .withAnalytics({ page: 'messages', section: 'add_participants' }),
        w = n('I2k/'),
        R = n('s14A'),
        I = n('kGix'),
        k = n('jHSc'),
        P = n('wO1l'),
        x = n('AQOc'),
        T = n('3XMw'),
        A = n.n(T),
        M = n('oQhu'),
        j = 'addPeopleButtonText',
        D = n('2dXj'),
        L = n('MWbm'),
        F = n('/yvb'),
        B = n('rHpw'),
        N = n('GZwR'),
        H = A.a.c6026009,
        U = A.a.d4986f85,
        V = A.a.af40a8ef,
        W = A.a.e1bde73e,
        z = A.a.e62d3c10,
        K = A.a.f17f716a,
        G = A.a.e3fc3547,
        q = A.a.c55f5c9a,
        Y = A.a.h8403fb5,
        X = A.a.ja522ed3
      function Q(e) {
        var t = l.useRef(null),
          n = l.useState([]),
          r = s()(n, 2),
          i = r[0],
          c = r[1],
          p = l.useState(''),
          f = s()(p, 2),
          h = f[0],
          m = f[1],
          v = e.createLocalApiErrorHandler,
          y = e.conversationId,
          b = e.fetchConversationIfNeeded,
          g = e.history,
          _ = e.addParticipants,
          E = e.fetchStatus,
          O = e.conversations,
          S = e.existingParticipants,
          C = void 0 === S ? [] : S,
          T = e.perspective,
          A = e.users
        l.useEffect(
          function () {
            b({ conversationId: y }).catch(v(Object(w.a)(y)))
          },
          [b, y, v],
        )
        var B = function () {
            return l.createElement(
              L.a,
              { style: J.rightColumn },
              l.createElement(
                F.a,
                {
                  disabled: 0 === i.length || E !== I.a.LOADED,
                  onPress: $,
                  size: 'small',
                  testID: j,
                  type: 'primaryFilled',
                },
                V,
              ),
            )
          },
          Q = function (e) {
            c(
              i.filter(function (t) {
                return t.id !== e.id
              }),
            )
          },
          $ = function () {
            var e,
              n = i.map(function (e) {
                return e.id
              })
            _(y, n).then(function (e) {
              t.current && t.current.goBack()
            }, v(
              ((e = { defaultToast: { text: X } }),
              a()(e, u.a.DirectMessageCannotDmOtherUser, { toast: { text: q } }),
              a()(e, u.a.DirectMessageGenericUserCouldNotBeAdded, { toast: { text: Y } }),
              a()(e, u.a.DirectMessageOtherUserNotFollowing, { toast: { text: K } }),
              a()(e, u.a.TargetUserNotFound, { toast: { text: z } }),
              a()(e, u.a.TieredActionTweetSpammer, { toast: { text: G } }),
              a()(e, 'showToast', !0),
              e),
            ))
          },
          ee = Object(M.a)(function (e, t, n, r) {
            return Object(P.b)(
              n,
              e.map(function (e) {
                return Object(x.b)(e, void 0, r)
              }),
              t,
            ).slice(0, 12)
          }),
          te = C.map(function (e) {
            return e.user_id
          })
        return l.createElement(
          k.b,
          {
            containerStyle: J.fill,
            documentTitle: U,
            renderHeader: function () {
              return l.createElement(d.a, {
                backButtonType: 'close',
                backLocation: '/messages/'.concat(y),
                history: g,
                ref: t,
                rightControl: B(),
                title: H,
                withBottomBorder: !1,
              })
            },
          },
          l.createElement(
            R.a,
            { style: J.fill },
            l.createElement(D.d, {
              getItemDisabledMessage: function (e) {
                return e.type === N.b.User ? W({ screenName: e.data.screen_name }) : void 0
              },
              getItemIsDisabled: Z,
              injections: ee(O, T, h, A),
              onQueryChange: function (e) {
                m(e)
              },
              onRemove: Q,
              onSelect: function (e) {
                e.type === N.b.User &&
                  (i.find(function (t) {
                    return t.id === e.id
                  })
                    ? Q(e)
                    : c([].concat(o()(i), [e])))
              },
              preselectedUsers: te,
              selectedUsers: i,
              source: N.d.ComposeMessage,
              withCompactPills: !0,
            }),
          ),
        )
      }
      var Z = function (e) {
          return e.type === N.b.User && !(e.data.can_dm || e.data.is_dm_able)
        },
        J = B.a.create(function (e) {
          return {
            fill: { flex: 1 },
            rightColumn: { flexDirection: 'row', flexGrow: 1, justifyContent: 'flex-end', alignItems: 'center' },
          }
        })
      t.default = C(Q)
    },
    g54k: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return s
      })
      n('KOtZ')
      var r = n('hqKg'),
        a = (n('LW0h'), n('2G9S'), n('z84I'), n('s1N3')),
        i = function (e) {
          var t = e.sender_id,
            n = e.by_user_id,
            r = e.participants,
            i = void 0 === r ? [] : r
          return Object(a.a)(
            i
              .map(function (e) {
                return e.user_id
              })
              .concat([t, n])
              .filter(Boolean),
          )
        },
        o = n('G6rE'),
        c = n('oEGd'),
        s = function (e, t) {
          return {
            users: i(t).reduce(function (t, n) {
              return (t[n] = e[n]), t
            }, {}),
          }
        },
        l = Object(r.createSelector)(
          o.e.selectAll,
          function (e, t) {
            return t.entry
          },
          s,
        )
      t.a = Object(c.c)(l)
    },
    gbD7: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return i
      }),
        n.d(t, 'a', function () {
          return o
        }),
        n.d(t, 'd', function () {
          return c
        }),
        n.d(t, 'c', function () {
          return s
        })
      n('ERkP')
      var r = n('aWyx'),
        a = function (e, t) {
          return {
            entry: { id: t, time: '', type: e },
            isActive: !1,
            isRapidFire: !1,
            isFirstRapidFire: !1,
            isLastRapidFire: !1,
            type: e,
          }
        },
        i = a(r.b.CONVERSATION_PROFILE_INFO_HEADER, 'conversationProfileInfoHeader'),
        o = 'typingIndicator',
        c = a(r.b.TYPING_INDICATOR, o),
        s = a(r.b.READ_ONLY_INDICATOR, 'readOnlyIndicator')
    },
    hqDb: function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('97Jx'),
        a = n.n(r),
        i = n('m3Bd'),
        o = n.n(i),
        c = n('VrFO'),
        s = n.n(c),
        l = n('Y9Ll'),
        u = n.n(l),
        d = n('1Pcy'),
        p = n.n(d),
        f = n('5Yy7'),
        h = n.n(f),
        m = n('N+ot'),
        v = n.n(m),
        y = n('AuHH'),
        b = n.n(y),
        g = n('KEM+'),
        _ = n.n(g),
        E = (n('2G9S'), n('ERkP')),
        O = n('k49u'),
        S = (n('LW0h'), n('KOtZ'), n('vrRf'), n('6xIQ')),
        C = n('kGix'),
        w = n('G6rE'),
        R = n('rxPX'),
        I = n('0KEI'),
        k = function (e, t) {
          return t.userIds
        },
        P = function (e, t) {
          return t.userIds.filter(function (t) {
            return !!w.e.select(e, t)
          })
        },
        x = function (e, t) {
          return t.userIds.reduce(function (t, n) {
            var r = w.e.selectFetchStatus(e, n)
            return (t[n] = r === C.a.NONE ? C.a.LOADING : r), t
          }, {})
        },
        T = Object(R.a)()
          .propsFromState(function () {
            return {
              availableUserIds: Object(S.a)(P, function (e) {
                return e
              }),
              fetchStatus: Object(S.a)(P, x, k, function (e, t, n) {
                for (var r = C.a.LOADED, a = 0; a < n.length; a++) {
                  var i = n[a]
                  if (-1 === e.indexOf(i)) {
                    var o = t[i] || C.a.LOADING
                    r = r === C.a.LOADED ? o : r
                  }
                  if (r === C.a.LOADED) break
                }
                return r
              }),
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(I.createLocalApiErrorHandlerWithContextFactory)(
                'USERS_LIST_CONTAINER',
              ),
              fetchUsersIfNeeded: w.e.fetchManyIfNeeded,
            }
          }),
        A = n('v//M'),
        M = n('3XMw'),
        j = n.n(M),
        D = n('pQ3Z'),
        L = n.n(D),
        F = (n('z84I'), n('cFuS')),
        B = n('Re5t'),
        N = n('MWbm'),
        H = n('88ay'),
        U = function (e) {
          var t = e.displayMode,
            n = e.renderUserCell,
            r = e.userIds
          e.withFinalItemBorder, e.withItemBorder
          return E.createElement(
            N.a,
            null,
            r.map(function (e, r) {
              return n
                ? n(e)
                : E.createElement(H.b, {
                    decoration: H.e,
                    displayMode: t,
                    key: e,
                    promotedItemType: F.c.USER,
                    userId: e,
                    withFollowsYou: !0,
                  })
            }),
          )
        }
      U.defaultProps = { displayMode: B.a.UserDetailed, withFinalItemBorder: !0, withItemBorder: !1 }
      var V = U
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
            r = b()(e)
          if (t) {
            var a = b()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return v()(this, n)
        }
      }
      var z = j.a.f5b426c2,
        K = { viewType: 'user_list' },
        G = T(
          (function (e) {
            h()(n, e)
            var t = W(n)
            function n() {
              var e
              s()(this, n)
              for (var r = arguments.length, i = new Array(r), c = 0; c < r; c++) i[c] = arguments[c]
              return (
                (e = t.call.apply(t, [this].concat(i))),
                _()(p()(e), 'state', { allUsersUnavailable: !1 }),
                _()(p()(e), '_renderContent', function () {
                  var t = e.props,
                    n = t.availableUserIds,
                    r =
                      (t.createLocalApiErrorHandler,
                      t.fetchStatus,
                      t.fetchUsersIfNeeded,
                      t.userIds,
                      o()(t, [
                        'availableUserIds',
                        'createLocalApiErrorHandler',
                        'fetchStatus',
                        'fetchUsersIfNeeded',
                        'userIds',
                      ]))
                  return E.createElement(V, a()({}, r, { userIds: n }))
                }),
                _()(p()(e), '_handleFetch', function () {
                  e._fetchUsersIfNeeded()
                }),
                e
              )
            }
            return (
              u()(n, [
                {
                  key: 'componentDidMount',
                  value: function () {
                    this._fetchUsersIfNeeded()
                  },
                },
                {
                  key: 'componentDidUpdate',
                  value: function (e) {
                    L()(e.userIds, this.props.userIds) || this._fetchUsersIfNeeded()
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    return E.createElement(A.a, {
                      accessibilityLabel: z,
                      behavioralEventContext: K,
                      fetchStatus: this.state.allUsersUnavailable ? C.a.LOADED : this.props.fetchStatus,
                      onRequestRetry: this._handleFetch,
                      render: this._renderContent,
                      retryable: !1,
                    })
                  },
                },
                {
                  key: '_fetchUsersIfNeeded',
                  value: function () {
                    var e,
                      t = this,
                      n = this.props,
                      r = n.availableUserIds,
                      a = n.createLocalApiErrorHandler
                    ;(0, n.fetchUsersIfNeeded)(n.userIds).then(
                      function () {
                        t.setState({ allUsersUnavailable: !1 })
                      },
                      a(
                        ((e = {}),
                        _()(e, O.a.AddressBookLookupNotFound, {
                          customAction: function () {
                            0 === r.length && t.setState({ allUsersUnavailable: !0 })
                          },
                        }),
                        _()(e, O.a.OtherUserSuspended, {
                          customAction: function () {
                            0 === r.length && t.setState({ allUsersUnavailable: !0 })
                          },
                        }),
                        e),
                      ),
                    )
                  },
                },
              ]),
              n
            )
          })(E.Component),
        )
      t.a = G
    },
    hxu0: function (e, t, n) {
      'use strict'
      var r = n('97Jx'),
        a = n.n(r),
        i = n('ERkP'),
        o = n('vqbU')
      t.a = function (e) {
        return function (t) {
          return i.createElement(o.a.Consumer, null, function (n) {
            return i.createElement(e, a()({}, t, { isInSidebar: n }))
          })
        }
      }
    },
    jHwr: function (e, t, n) {
      'use strict'
      t.a = function (e, t) {
        var n = null,
          r = function () {
            ;(n = null), e()
          }
        return function () {
          return n || (n = t(r)), n
        }
      }
    },
    kb9v: function (e, t, n) {
      'use strict'
      var r = n('ddV6'),
        a = n.n(r),
        i = (n('1t7P'), n('jQ/y'), n('hBvt'), n('ERkP')),
        o = n('TIdA'),
        c = n('t62R'),
        s = n('A91F'),
        l = n('/yvb'),
        u = n('Eqye'),
        d = n('efqG'),
        p = n('sgih'),
        f = n('rHpw'),
        h = n('MWbm'),
        m = n('3dyc'),
        v = f.a.create(function (e) {
          return {
            root: { paddingVertical: e.spacesPx.space32 },
            rootWithImage: { paddingTop: 0 },
            graphic: { marginBottom: e.spacesPx.space20 },
            icon: { alignSelf: 'center', height: e.spacesPx.space64, width: e.spacesPx.space64 },
            container: { paddingHorizontal: e.spacesPx.space32 },
            description: { marginTop: e.spacesPx.space8, marginBottom: e.spacesPx.space4 },
            actionButton: { marginTop: e.spacesPx.space16 },
          }
        })
      t.a = function (e) {
        var t = e.actionPrimary,
          n = e.actionSecondary,
          r = e.children,
          y = e.headline,
          b = e.icon,
          g = e.iconColor,
          _ = e.imageUrl,
          E = e.onDismiss,
          O = e.shouldDisplay,
          S = e.text,
          C = e.withMask,
          w = void 0 === C || C,
          R = i.useState(!1),
          I = a()(R, 2),
          k = I[0],
          P = I[1],
          x = function (e) {
            return i.createElement(
              d.a,
              {
                onDismiss: F,
                renderContent: function () {
                  return A(F)
                },
                switchOnlyOnXSmallBreakpoint: !0,
                visibilityBehavior: m.b.forceVisible,
                withArrow: !0,
                withFixedPosition: !0,
                withMask: w,
              },
              e,
            )
          },
          T = function () {
            return i.createElement(
              p.a,
              {
                onMaskClick: function () {
                  return F()
                },
                type: 'center',
                withMask: !0,
              },
              A(F),
            )
          },
          A = function (e) {
            return i.createElement(
              h.a,
              { style: [v.root, _ && v.rootWithImage] },
              M(),
              i.createElement(
                h.a,
                { style: v.container },
                j(),
                D(),
                L({ action: t, dismiss: e, type: n && 'primaryFilled' }),
                L({ action: n, dismiss: e }),
              ),
            )
          },
          M = function () {
            var e = b && i.createElement(b, { style: g ? [v.icon, { color: f.a.theme.colors[g] }] : v.icon })
            return (
              _ &&
                !u.a.isEnabled &&
                (e = i.createElement(o.a, { accessibilityLabel: '', aspectMode: s.a.exact(2), image: _ })),
              e && i.createElement(h.a, { style: v.graphic }, e)
            )
          },
          j = function () {
            return i.createElement(c.b, { size: 'title3', weight: 'heavy' }, y)
          },
          D = function () {
            return i.createElement(c.b, { color: 'gray700', style: v.description }, S)
          },
          L = function (e) {
            var t = e.action,
              n = e.dismiss,
              r = e.type
            return (
              t &&
              i.createElement(
                l.a,
                {
                  link: t.link && t.link,
                  onPress: t.onClick ? t.onClick : n,
                  size: 'large',
                  style: v.actionButton,
                  type: r,
                },
                t.text,
              )
            )
          },
          F = function () {
            E && E(), P(!0)
          }
        return O && !k ? (r ? x(r) : T()) : r || null
      }
    },
    kgfz: function (e, t) {
      function n(e) {
        var t = []
        for (var n in e) t.push(n)
        return t
      }
      ;(e.exports = 'function' == typeof Object.keys ? Object.keys : n).shim = n
    },
    lAtx: function (e, t, n) {
      'use strict'
      n.r(t)
      var r = n('m3Bd'),
        a = n.n(r),
        i = n('ERkP'),
        o = n('Y6L+'),
        c = n('Ty5D'),
        s = n('MMRb'),
        l = n('rxPX'),
        u = function (e, t) {
          var n = Object(c.f)(t.location.pathname, { path: '/messages/'.concat(o.j, '(/.*)?'), exact: !0, strict: !1 })
          return null == n ? void 0 : n.params.conversationId
        },
        d = function (e, t) {
          var n = u(0, t)
          return Object(s.selectInboxTypeByConversation)(e, n)
        },
        p = Object(l.a)().propsFromState(function () {
          return { conversationId: u, inboxType: d }
        }),
        f = (n('OZaJ'), n('VrFO')),
        h = n.n(f),
        m = n('Y9Ll'),
        v = n.n(m),
        y = n('1Pcy'),
        b = n.n(y),
        g = n('5Yy7'),
        _ = n.n(g),
        E = n('N+ot'),
        O = n.n(E),
        S = n('AuHH'),
        C = n.n(S),
        w = n('KEM+'),
        R = n.n(w),
        I = (n('2G9S'), n('uFXj'), n('JtPf'), n('7x/C'), n('P1r1')),
        k = n('qdEw'),
        P = n('6xIQ'),
        x = n('X/yg'),
        T = n('AQ79'),
        A = n('z2Pn'),
        M = n('0KEI'),
        j = function (e) {
          return e === T.d.PRIMARY
            ? s.fetchTrustedInboxHistory
            : e === T.d.SECONDARY
            ? s.fetchUntrustedInboxHistory
            : s.fetchUntrustedLowQualityInboxHistory
        },
        D = function (e) {
          return e === T.d.PRIMARY
            ? s.updateTrustedLastSeenEventId
            : e === T.d.SECONDARY
            ? s.updateUntrustedLastSeenEventId
            : function () {
                return function () {
                  return Promise.resolve()
                }
              }
        },
        L = function (e) {
          var t = e.inbox
          return Object(l.a)()
            .propsFromState(function () {
              return {
                conversationIds: Object(P.a)(
                  function (e) {
                    return s.selectConversationIdsByInbox(e, t)
                  },
                  function (e) {
                    return e
                  },
                ),
                dmNsfwMediaFilter: I.m,
                isLoadingTop: s.selectIsLoadingTop,
                isDmNsfwMediaFilterEnabled: I.r,
                isDmsOpenForAll: I.t,
                hasConversations: s.selectHasConversations,
                untrustedUnreadCount: s.selectUntrustedUnreadCount,
                untrustedCursor: s.selectUntrustedCursor,
                untrustedConversationCount: s.selectUntrustedConversationCount,
                untrustedLowQualityConversationCount: s.selectUntrustedLowQualityConversationCount,
                untrustedLowQualityCursor: s.selectUntrustedLowQualityCursor,
              }
            })
            .adjustStateProps(function (e) {
              var t = e.conversationIds,
                n = e.dmNsfwMediaFilter,
                r = (e.hasConversations, e.isDmNsfwMediaFilterEnabled),
                a = e.isDmsOpenForAll,
                i = (e.isLoadingTop, e.untrustedConversationCount),
                o = e.untrustedCursor,
                c = e.untrustedLowQualityConversationCount
              e.untrustedLowQualityCursor
              return {
                dmNsfwMediaFilter: n,
                isDmNsfwMediaFilterEnabled: r,
                conversationIds: t,
                untrustedUnreadCount: e.untrustedUnreadCount,
                allowUntrustedInbox: a && i > 0,
                allowLowQualityUntrustedInbox: a && c > 0,
                isAtEndOfUntrustedInbox: o && 'AT_END' === o.status,
              }
            })
            .propsFromActions(function () {
              return {
                createLocalApiErrorHandler: Object(M.createLocalApiErrorHandlerWithContextFactory)(
                  'DIRECT_MESSAGES_INBOX',
                ),
                clearSearchCache: s.clearSearchCache,
                clearSearchSlicesCache: k.b,
                fetchInboxHistory: j(t),
                setLastViewedDmInboxPath: A.h,
                updateLastSeenEventId: D(t),
                updateDmNsfwMediaFilter: I.K,
              }
            })
            .withAnalytics({ page: 'messages', section: 'inbox', component: Object(x.g)(t) })
        },
        F = n('/yvb'),
        B = n('3XMw'),
        N = n.n(B),
        H = n('Avzu'),
        U = N.a.f325afc3,
        V = N.a.cdcebd22,
        W = function (e) {
          var t = e.testID
          return i.createElement(F.a, {
            accessibilityLabel: U,
            hoverLabel: { label: V },
            icon: i.createElement(H.a, null),
            link: '/messages/compose',
            pullRight: !0,
            testID: t,
            type: 'primaryText',
          })
        },
        z = n('qz2E'),
        K = n('pXKu'),
        G = n('SOvA'),
        q = n('f42t'),
        Y = n('pHkl'),
        X = n('M2mT'),
        Q = n('Es6L'),
        Z = 'NewDM_Button',
        J = n('MWbm'),
        $ = n('pxuL'),
        ee = n('csss'),
        te = n('j7Bv'),
        ne = n('Znyr'),
        re = n('FIs5'),
        ae = n('rHpw'),
        ie = n('nySH')
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
            r = C()(e)
          if (t) {
            var a = C()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return O()(this, n)
        }
      }
      var ce = N.a.a2f8105f,
        se = N.a.cf2d1047,
        le = N.a.b8aa3744,
        ue = N.a.j06309e1,
        de = N.a.gee5150a,
        pe = N.a.da2f9224,
        fe = N.a.a74e7c76,
        he = N.a.h6beb5fa,
        me = (function (e) {
          _()(n, e)
          var t = oe(n)
          function n() {
            var e
            h()(this, n)
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              R()(b()(e), '_renderPivot', function () {
                var t = e.props,
                  n = t.allowUntrustedInbox,
                  r = t.untrustedUnreadCount,
                  a =
                    e.context.featureSwitches.isTrue('dm_vdl_enabled') &&
                    e.context.featureSwitches.isTrue('dm_vdl_inbox_p0_enabled'),
                  o = [ve.requestPivotContainer, a ? void 0 : ve.requestPivotContainerBorder],
                  c = a && r > 0
                return n
                  ? i.createElement(
                      J.a,
                      { style: o },
                      i.createElement(ee.a, {
                        description: c ? fe({ count: r }) : void 0,
                        label: se,
                        link: Object(ie.a)(T.d.SECONDARY),
                        onPress: e._handleRequestsPivotClick,
                        renderRightContent: a ? void 0 : e._renderPivotBadge,
                        thumbnail: a
                          ? i.createElement(
                              J.a,
                              null,
                              i.createElement(te.a, { Icon: G.a, color: 'neutral' }),
                              c
                                ? i.createElement(ne.a, {
                                    count: r,
                                    pip: !0,
                                    standalone: !0,
                                    style: ve.inboxPip,
                                    truncatedCountFormatter: he,
                                    unreadCountLabel: pe,
                                  })
                                : null,
                            )
                          : null,
                      }),
                    )
                  : null
              }),
              R()(b()(e), '_renderPivotBadge', function () {
                var t = e.props.untrustedUnreadCount
                return t > 0
                  ? i.createElement(ne.a, {
                      count: t,
                      standalone: !0,
                      truncatedCountFormatter: he,
                      unreadCountLabel: pe,
                    })
                  : null
              }),
              R()(b()(e), '_renderEmptyDMInbox', function () {
                return i.createElement(
                  i.Fragment,
                  null,
                  e._renderPivot(),
                  i.createElement(re.a, {
                    buttonLink: '/messages/compose',
                    buttonText: de,
                    header: le,
                    message: ue,
                    onImpression: e._handleEmptyDMInboxImpression,
                  }),
                )
              }),
              R()(b()(e), '_handleEmptyDMInboxImpression', function () {
                e.props.analytics.scribe({ component: 'empty_message', action: 'impression' })
              }),
              R()(b()(e), '_handleRequestsPivotClick', function () {
                e.props.analytics.scribe({ element: 'requests_pivot', action: 'click' })
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
                    t = e.allowUntrustedInbox,
                    n = e.analytics,
                    r = e.location
                  ;(0, e.setLastViewedDmInboxPath)(r.pathname),
                    t && n.scribe({ element: 'requests_pivot', action: 'impression' }),
                    this.context.incrementDmDrawerInhibitorCount()
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this.context.featureSwitches.isTrue('dm_inbox_search_modular_results_enabled') &&
                    this.props.clearSearchSlicesCache(Y.e),
                    this.props.clearSearchCache(),
                    this.context.decrementDmDrawerInhibitorCount()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = Object(Q.a)()
                      ? i.createElement(
                          J.a,
                          { style: ve.appBarButtons },
                          Object(ie.b)('/messages/settings', !1),
                          i.createElement(W, { testID: Z }),
                        )
                      : Object(ie.b)('/messages/settings', !0),
                    t = this.props,
                    n = t.analytics,
                    r = t.conversationIds,
                    a = t.fetchInboxHistory,
                    o = t.updateLastSeenEventId
                  return i.createElement(
                    X.a,
                    { rightControl: e, screenType: 'root', title: ce },
                    i.createElement(K.a, {
                      accessibilityTitle: ce,
                      analytics: n,
                      conversationIds: r,
                      fetchInboxHistory: a,
                      renderEmptyDMInbox: this._renderEmptyDMInbox,
                      renderStickyContent: this._renderPivot,
                      updateLastSeenEventId: o,
                      virtualScrollerCacheKey: 'dmInbox',
                      withDmSearch: !0,
                      withPinnedInbox: !0,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(i.Component)
      R()(me, 'contextType', $.a), R()(me, 'defaultProps', { conversationIds: [], untrustedUnreadCount: 0 })
      var ve = ae.a.create(function (e) {
          return {
            appBarButtons: { flexDirection: 'row', alignItems: 'center' },
            inboxPip: {
              backgroundColor: e.colors.blue500,
              borderWidth: e.borderWidths.medium,
              borderColor: e.colors.cellBackground,
              borderStyle: 'solid',
              position: 'absolute',
              height: e.baseFontSize - 4,
              width: e.baseFontSize - 4,
              top: e.spacesPx.space8 + e.spacesPx.space2,
              right: e.spacesPx.space8 + e.spacesPx.space2,
            },
            requestPivotContainer: { backgroundColor: e.colors.cellBackground, zIndex: 2 },
            requestPivotContainerBorder: {
              borderBottomStyle: 'solid',
              borderBottomWidth: e.borderWidths.small,
              borderBottomColor: e.colors.borderColor,
            },
          }
        }),
        ye = Object(q.a)(L({ inbox: T.d.PRIMARY })(me), { directMessages: z.a }),
        be = (n('WNMA'), n('KqXw'), n('v6aA')),
        ge = n('jYSG'),
        _e = n('5FtR'),
        Ee = n('Lz2T'),
        Oe = n('0yYu'),
        Se = n('t62R'),
        Ce = n('cm6r')
      function we(e) {
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
            r = C()(e)
          if (t) {
            var a = C()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return O()(this, n)
        }
      }
      var Re = N.a.cf2d1047,
        Ie = N.a.bef0039f,
        ke = N.a.eb7de4a9,
        Pe = N.a.a0e81a2e,
        xe = N.a.f5dc353c,
        Te = N.a.fe1eaa95,
        Ae = N.a.j24c37b2,
        Me = N.a.daeda053,
        je = (function (e) {
          _()(n, e)
          var t = we(n)
          function n() {
            var e
            h()(this, n)
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              R()(b()(e), '_nsfwBannerWasShown', !1),
              R()(b()(e), 'componentDidMount', function () {
                var t = e.props.analytics
                e._shouldRenderTombstone() && t.scribe({ element: 'low_quality_pivot', action: 'impression' }),
                  e.context.incrementDmDrawerInhibitorCount()
              }),
              R()(b()(e), 'componentDidUpdate', function (t) {
                var n = e.props.analytics
                !e._shouldRenderTombstone() ||
                  (t.allowLowQualityUntrustedInbox && t.isAtEndOfUntrustedInbox) ||
                  n.scribe({ element: 'low_quality_pivot', action: 'impression' })
              }),
              R()(b()(e), 'componentWillUnmount', function () {
                e.context.decrementDmDrawerInhibitorCount(), e._nsfwBannerWasShown && e._hideNsfwTimelineMessage()
              }),
              R()(b()(e), '_renderNsfwSettingBanner', function (t) {
                var n = t.featureSwitches,
                  r = e.props.dmNsfwMediaFilter
                return n.isTrue('dm_conversations_nsfw_media_filter_enabled') && void 0 === r
                  ? ((e._nsfwBannerWasShown = !0),
                    i.createElement(
                      i.Fragment,
                      null,
                      i.createElement(Ee.a, {
                        bodyText: Te,
                        primaryAction: { onClick: e._handleNsfwTimelineMessagePrimaryClick, text: Ae },
                        secondaryAction: {
                          link: '/settings/direct_messages',
                          onClick: e._handleNsfwTimelineMessageSecondaryClick,
                          text: Me,
                        },
                        titleText: xe,
                      }),
                      i.createElement(Oe.a, null),
                    ))
                  : null
              }),
              R()(b()(e), '_shouldRenderTombstone', function () {
                var t = e.props,
                  n = t.allowLowQualityUntrustedInbox,
                  r = t.isAtEndOfUntrustedInbox
                return n && r
              }),
              R()(b()(e), '_renderTombstone', function () {
                var t = e.props.conversationIds
                return e._shouldRenderTombstone()
                  ? i.createElement(
                      J.a,
                      null,
                      t.length > 0 && i.createElement(Oe.a, null),
                      i.createElement(
                        J.a,
                        { style: De.tombstoneDescription },
                        i.createElement(Se.b, { color: 'gray700', size: 'subtext2' }, ke),
                      ),
                      i.createElement(
                        Ce.a,
                        {
                          link: Object(ie.a)(T.d.TERTIARY),
                          onPress: e._handleTombstoneClick,
                          style: De.tombstoneContainer,
                        },
                        i.createElement(Se.b, { align: 'center', color: 'primary', size: 'body' }, Pe),
                      ),
                    )
                  : null
              }),
              R()(b()(e), '_renderEmptyDMInbox', function () {
                var t = e._renderTombstone()
                return i.createElement(
                  i.Fragment,
                  null,
                  i.createElement(re.a, { header: t ? '' : Ie, message: ge.a, style: De.emptyMessage }),
                  t,
                )
              }),
              R()(b()(e), '_handleNsfwTimelineMessagePrimaryClick', function () {
                e.props.analytics.scribe({ component: 'dm_nsfw_prompt', element: 'primary_action', action: 'click' }),
                  e._hideNsfwTimelineMessage()
              }),
              R()(b()(e), '_handleNsfwTimelineMessageSecondaryClick', function () {
                e.props.analytics.scribe({ component: 'dm_nsfw_prompt', element: 'secondary_action', action: 'click' })
              }),
              R()(b()(e), '_hideNsfwTimelineMessage', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.updateDmNsfwMediaFilter)(!0).catch(n())
              }),
              R()(b()(e), '_handleBackClick', function () {
                e.props.history.push(Object(ie.a)(T.d.PRIMARY))
              }),
              R()(b()(e), '_handleTombstoneClick', function () {
                e.props.analytics.scribe({ element: 'low_quality_pivot', action: 'click' })
              }),
              R()(b()(e), '_hasConversationOpen', function () {
                return !e.props.match.isExact
              }),
              e
            )
          }
          return (
            v()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.allowUntrustedInbox,
                    r = t.analytics,
                    a = t.conversationIds,
                    o = t.fetchInboxHistory,
                    c = t.updateLastSeenEventId
                  return n
                    ? i.createElement(
                        X.a,
                        {
                          backLocation: '/messages',
                          onBackClick: this._handleBackClick,
                          rightControl: Object(ie.b)('/settings/direct_messages', !0),
                          screenType: 'secondaryRoot',
                          title: Re,
                          withDetailOpen: this._hasConversationOpen(),
                        },
                        i.createElement(be.a.Consumer, null, this._renderNsfwSettingBanner),
                        i.createElement(K.a, {
                          accessibilityTitle: Re,
                          analytics: r,
                          conversationIds: a,
                          fetchInboxHistory: o,
                          footer: this._renderTombstone(),
                          inboxType: T.d.SECONDARY,
                          renderEmptyDMInbox: this._renderEmptyDMInbox,
                          renderStickyContent: function () {
                            return Object(ie.c)(e.props.conversationIds)
                          },
                          updateLastSeenEventId: c,
                          virtualScrollerCacheKey: 'dmUntrustedInbox',
                        }),
                      )
                    : i.createElement(_e.a, { to: '/messages' })
                },
              },
            ]),
            n
          )
        })(i.Component)
      R()(je, 'contextType', $.a), R()(je, 'defaultProps', { conversationIds: [] })
      var De = ae.a.create(function (e) {
          return {
            emptyMessage: {
              borderBottomStyle: 'solid',
              borderBottomColor: e.colors.borderColor,
              borderBottomWidth: e.borderWidths.small,
              paddingVertical: e.spaces.space16,
            },
            tombstoneContainer: {
              borderTopStyle: 'solid',
              borderTopColor: e.colors.borderColor,
              borderTopWidth: e.borderWidths.small,
              borderBottomStyle: 'solid',
              borderBottomColor: e.colors.borderColor,
              borderBottomWidth: e.borderWidths.small,
              paddingVertical: e.spaces.space12,
            },
            tombstoneDescription: { paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space16 },
          }
        }),
        Le = Object(q.a)(L({ inbox: T.d.SECONDARY })(je), { directMessages: z.a })
      function Fe(e) {
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
            r = C()(e)
          if (t) {
            var a = C()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return O()(this, n)
        }
      }
      var Be = N.a.e7172d70,
        Ne = N.a.bef0039f,
        He = (function (e) {
          _()(n, e)
          var t = Fe(n)
          function n() {
            var e
            h()(this, n)
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              R()(b()(e), 'componentDidMount', function () {
                e.context.incrementDmDrawerInhibitorCount()
              }),
              R()(b()(e), 'componentWillUnmount', function () {
                e.context.decrementDmDrawerInhibitorCount()
              }),
              R()(b()(e), '_renderEmptyDMInbox', function () {
                return i.createElement(re.a, { header: Ne, message: ge.a })
              }),
              R()(b()(e), '_handleBackClick', function () {
                e.props.history.push(Object(ie.a)(T.d.SECONDARY))
              }),
              R()(b()(e), '_hasDetailOpen', function () {
                return !e.props.match.isExact
              }),
              e
            )
          }
          return (
            v()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.analytics,
                    r = t.conversationIds,
                    a = t.fetchInboxHistory,
                    o = t.updateLastSeenEventId
                  return i.createElement(
                    X.a,
                    {
                      backLocation: Object(ie.a)(T.d.SECONDARY),
                      onBackClick: this._handleBackClick,
                      rightControl: Object(ie.b)('/settings/direct_messages', !0),
                      screenType: 'secondaryRoot',
                      title: Be,
                      withDetailOpen: this._hasDetailOpen(),
                    },
                    i.createElement(K.a, {
                      accessibilityTitle: Be,
                      analytics: n,
                      conversationIds: r,
                      fetchInboxHistory: a,
                      inboxType: T.d.TERTIARY,
                      renderEmptyDMInbox: this._renderEmptyDMInbox,
                      renderStickyContent: function () {
                        return Object(ie.c)(e.props.conversationIds)
                      },
                      updateLastSeenEventId: o,
                      virtualScrollerCacheKey: 'dmLowQualityUntrustedInbox',
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(i.Component)
      R()(He, 'contextType', $.a)
      var Ue = Object(q.a)(L({ inbox: T.d.TERTIARY })(He), { directMessages: z.a }),
        Ve = p(function (e) {
          e.conversationId
          var t = e.inboxType,
            n = a()(e, ['conversationId', 'inboxType']),
            r = e.location
          return t === T.d.TERTIARY || '/messages/requests/additional' === r.pathname
            ? i.createElement(Ue, n)
            : t === T.d.SECONDARY || '/messages/requests' === r.pathname
            ? i.createElement(Le, n)
            : i.createElement(ye, n)
        })
      t.default = Ve
    },
    lL5k: function (e, t, n) {
      'use strict'
      var r = /[|\\{}()[\]^$+*?.]/g
      e.exports = function (e) {
        if ('string' != typeof e) throw new TypeError('Expected a string')
        return e.replace(r, '\\$&')
      }
    },
    nySH: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return f
      }),
        n.d(t, 'b', function () {
          return h
        }),
        n.d(t, 'c', function () {
          return m
        })
      n('uFXj')
      var r = n('ERkP'),
        a = n('HPNB'),
        i = n('v6aA'),
        o = n('jYSG'),
        c = n('AQ79'),
        s = n('+Bsv'),
        l = n('MWbm'),
        u = n('cHvH'),
        d = n('t62R'),
        p = n('rHpw'),
        f = function (e) {
          switch (e) {
            case c.d.SECONDARY:
              return '/messages/requests'
            case c.d.TERTIARY:
              return '/messages/requests/additional'
            case c.d.PRIMARY:
            default:
              return '/messages'
          }
        },
        h = function (e, t) {
          return r.createElement(i.a.Consumer, null, function (n) {
            var a = n.featureSwitches.isTrue('responsive_web_settings_revamp_enabled') ? e : '/settings/safety'
            return r.createElement(s.a, { pullRight: t, to: a })
          })
        },
        m = function (e) {
          return r.createElement(u.a, null, function (t) {
            var n = t.windowWidth,
              i = a.a.isTwoColumnLayout(n),
              c = 0 === e.length
            return i || c
              ? null
              : r.createElement(
                  l.a,
                  { style: v.stickyCopyContainer },
                  r.createElement(d.b, { style: v.stickyCopy }, o.a),
                )
          })
        },
        v = p.a.create(function (e) {
          return {
            stickyCopyContainer: {
              backgroundColor: e.colors.cellBackground,
              borderBottomStyle: 'solid',
              borderBottomWidth: e.borderWidths.small,
              borderBottomColor: e.colors.borderColor,
              zIndex: 1,
            },
            stickyCopy: { color: e.colors.gray700, padding: e.spaces.space20 },
          }
        })
    },
    p9G8: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return f
      })
      var r = n('ddV6'),
        a = n.n(r),
        i = (n('ho0z'), n('+KXO'), n('z84I'), n('LW0h'), n('Xrkv')),
        o = n('aWyx'),
        c = n('XnpN'),
        s = n('3XMw'),
        l = n.n(s),
        u = l.a.b5b7fb93,
        d = l.a.g755fcde,
        p = l.a.f6b1ff81
      t.a = function (e, t, n) {
        var r = e.type,
          a = e.name,
          i = e.participants,
          s = void 0 === i ? {} : i
        if (r === o.a.GROUP && a) return a
        if (Object.keys(s).length) {
          if (r === o.a.GROUP && n) return u
          var l = Object(c.a)(e, t).map(function (e) {
            return e.user
          })
          return f(l, t, r)
        }
      }
      var f = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          t = arguments.length > 1 ? arguments[1] : void 0,
          n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.a.GROUP,
          r = e
            .filter(function (e) {
              return e.id_str !== t
            })
            .map(function (e) {
              return e.name
            })
        switch (r.length) {
          case 0:
            return d
          case 1:
            var c = a()(r, 1),
              s = c[0]
            return n === o.a.GROUP ? p({ name: s }) : s
          default:
            var l = !0
            return Object(i.a)(r, l)
        }
      }
    },
    pXKu: function (e, t, n) {
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
        y = (n('vrRf'), n('+KXO'), n('ERkP')),
        b = n('BUB3'),
        g = n('v6aA'),
        _ = n('xZGM'),
        E = n('rxPX'),
        O = Object(E.a)()
          .propsFromState(function () {
            return {
              shouldShowPrompt: function (e, t) {
                return Object(_.z)(e, _.j)
              },
            }
          })
          .propsFromActions(function () {
            return { addFlag: _.w }
          })
          .withAnalytics({ component: 'dm_education_flags_prompt' }),
        S = n('fs1G'),
        C = n('t62R'),
        w = n('feu+'),
        R = n('3XMw'),
        I = n.n(R),
        k = I.a.fd6150fc,
        P = y.createElement(
          I.a.I18NFormatMessage,
          { $i18n: 'iac7f92a' },
          y.createElement(C.b, { link: '/privacy' }, I.a.d42d239f),
        ),
        x = I.a.j24c37b2,
        T = O(function (e) {
          var t = e.addFlag,
            n = e.analytics,
            r = e.shouldShowPrompt,
            a = y.useContext(g.a).featureSwitches
          if (!(r && a.isTrue('dm_education_flags_prompt'))) return !1
          return (
            n.scribeAction('impression'),
            y.createElement(w.a, {
              actionLabel: x,
              headline: k,
              onAction: function () {
                n.scribeAction('click'), t(_.j)
              },
              onClose: S.a,
              subtext: P,
              withCloseButton: !1,
            })
          )
        }),
        A = n('MMRb'),
        M = n('kGix'),
        j = n('0KEI'),
        D = Object(E.a)()
          .propsFromState(function () {
            return {
              hasConversations: A.selectHasConversations,
              fetchStatus: A.selectFetchStatus,
              isLoadingTop: A.selectIsLoadingTop,
            }
          })
          .adjustStateProps(function (e) {
            var t = e.fetchStatus,
              n = e.hasConversations,
              r = e.isLoadingTop
            return { fetchStatus: n ? M.a.LOADED : t, isRefreshing: n && r }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(j.createLocalApiErrorHandlerWithContextFactory)(
                'DIRECT_MESSAGES_INBOX',
              ),
              fetchInbox: A.fetchInbox,
              fetchInboxIfNeeded: A.fetchInboxIfNeeded,
              fetchUpdates: A.fetchUpdatesIfNeeded,
            }
          }),
        L = (n('1t7P'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('ddV6')),
        F = n.n(L),
        B =
          (n('2G9S'),
          n('hBpG'),
          n('z84I'),
          n('ho0z'),
          n('tQbP'),
          n('LW0h'),
          n('jQ3i'),
          n('x4t0'),
          n('6U7i'),
          n('MvUL'),
          n('KqXw'),
          n('hBvt'),
          n('7x/C'),
          n('lTEL'),
          n('kYxP'),
          n('HPNB')),
        N = n('EbOo'),
        H = n('tZH3'),
        U = n('1YZw'),
        V = n('hqKg'),
        W = n('AQOc'),
        z = n('G6rE'),
        K = n('oEGd'),
        G = function (e, t) {
          return t.conversationId
        },
        q = Object(V.createSelector)(
          G,
          function (e, t) {
            return A.selectConversation(e, G(0, t))
          },
          A.selectEntries,
          z.e.selectAll,
          function (e, t) {
            return !A.selectConversationIsRead(e, G(0, t))
          },
          function (e, t) {
            var n = G(0, t)
            return Object(A.selectInboxTypeByConversation)(e, n)
          },
          function (e, t) {
            return Object(_.z)(e, _.r)
          },
          function (e, t, n, r, a, i, o) {
            return {
              conversation: (null == t ? void 0 : t.data) && Object(W.a)(t.data, n, r),
              conversationId: e,
              unread: a,
              inboxType: i,
              shouldShowPinnedEducation: o,
            }
          },
        ),
        Y = {
          addFlag: _.w,
          addRecentSearch: A.addRecentSearches,
          addToast: U.b,
          block: z.e.block,
          createLocalApiErrorHandler: Object(j.createLocalApiErrorHandlerWithContextFactory)(
            'DIRECT_MESSAGES_INBOX_ITEM',
          ),
          disableNotifications: A.disableNotifications,
          enableNotifications: A.enableNotifications,
          leaveConversation: A.leaveConversation,
          muteDMUser: A.muteDMUser,
          unmuteDMUser: A.unmuteDMUser,
          unblock: z.e.unblock,
        },
        X = Object(K.g)(q, Y),
        Q = n('aA19'),
        Z = n('OhSZ'),
        J = n('V/6K'),
        $ = n('g54k')
      function ee(e, t) {
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
      var te = function (e, t) {
          return t.entry
        },
        ne = Object(E.a)()
          .propsFromState(function () {
            return { users: Object(V.createSelector)(z.e.selectAll, te, $.b) }
          })
          .adjustStateProps(function (e) {
            return (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}
                t % 2
                  ? ee(Object(n), !0).forEach(function (t) {
                      v()(e, t, n[t])
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                  : ee(Object(n)).forEach(function (t) {
                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
              }
              return e
            })({}, e.users)
          }),
        re = n('zQEV'),
        ae = ne(function (e) {
          var t = e.entry,
            n = e.entryType,
            r = e.perspective,
            a = e.users,
            i = Object(re.a)(t, n, r, a)
          return y.createElement(C.b, { color: 'gray700' }, i)
        }),
        ie = Object(V.createSelector)(
          function (e, t) {
            return z.e.select(e, t.senderId)
          },
          function (e, t) {
            return t.recipientId ? z.e.select(e, t.recipientId) : void 0
          },
          function (e, t) {
            return { user: e, recipient: t }
          },
        ),
        oe = Object(K.c)(ie),
        ce = n('X/yg'),
        se = n('cTG8'),
        le = function (e) {
          return y.createElement(I.a.I18NFormatMessage, { $i18n: 'b3a2b11c' }, y.createElement(C.b, null, e))
        },
        ue = I.a.dedfd265
      var de = I.a.a876e58b,
        pe = I.a.bf584cd1,
        fe = I.a.a9cc8cfd,
        he = I.a.e20b65b0,
        me = I.a.e5bfe07d,
        ve = I.a.b1a614fe,
        ye = oe(function (e) {
          var t = e.entry,
            n = e.perspective,
            r = e.isGroupDM,
            a = e.user,
            i = void 0 === a ? {} : a,
            o = e.recipient,
            c = void 0 === o ? {} : o,
            s = y.useContext(g.a).featureSwitches,
            l = t && t.message_data
          if (!l) return null
          var u = l.attachment,
            d = u && !!(u.video || u.photo || u.animated_gif || u.tweet || u.fleet || u.sticker || u.card),
            p = n === i.id_str,
            f = !(!d || !p) || !(!r || p),
            h = i.name,
            m = c.name,
            v = [
              f && y.createElement(C.b, { key: 'senderName' }, le(h), ' '),
              l &&
                l.text &&
                y.createElement(se.a, {
                  displayTextRange: [0, l.text.length],
                  entities: l.entities,
                  key: 'message',
                  text: l.text,
                  withMediaLinks: !0,
                }),
            ]
          return (
            u &&
              (u.tweet
                ? (v = f
                    ? (function (e, t) {
                        return e
                          ? y.createElement(C.b, null, I.a.d5b762c8)
                          : y.createElement(I.a.I18NFormatMessage, { $i18n: 'dfd2b3b9' }, y.createElement(C.b, null, t))
                      })(p, h)
                    : ve)
                : u.fleet
                ? (v = (function (e, t, n) {
                    return e
                      ? y.createElement(
                          I.a.I18NFormatMessage,
                          { $i18n: 'i005f1fd' },
                          y.createElement(C.b, null, t),
                          y.createElement(C.b, null, n || ''),
                        )
                      : y.createElement(
                          I.a.I18NFormatMessage,
                          { $i18n: 'b35cee40' },
                          y.createElement(C.b, null, n || ''),
                        )
                  })(p, m, l.text))
                : u.video
                ? (v = Object(ce.k)(u, s)
                    ? f
                      ? (function (e, t) {
                          return e
                            ? y.createElement(C.b, null, I.a.h7033cac)
                            : y.createElement(
                                I.a.I18NFormatMessage,
                                { $i18n: 'be5a9616' },
                                y.createElement(C.b, null, t),
                              )
                        })(p, h)
                      : ue
                    : f
                    ? (function (e, t) {
                        return e
                          ? y.createElement(C.b, null, I.a.j7d81019)
                          : y.createElement(I.a.I18NFormatMessage, { $i18n: 'eee2f120' }, y.createElement(C.b, null, t))
                      })(p, h)
                    : de)
                : u.photo
                ? (v = f
                    ? (function (e, t) {
                        return e
                          ? y.createElement(C.b, null, I.a.f80629ba)
                          : y.createElement(I.a.I18NFormatMessage, { $i18n: 'c1e1f848' }, y.createElement(C.b, null, t))
                      })(p, h)
                    : pe)
                : u.animated_gif
                ? (v = f
                    ? (function (e, t) {
                        return e
                          ? y.createElement(C.b, null, I.a.eb3d722e)
                          : y.createElement(I.a.I18NFormatMessage, { $i18n: 'dc4b75a1' }, y.createElement(C.b, null, t))
                      })(p, h)
                    : fe)
                : u.sticker
                ? (v = f
                    ? (function (e, t) {
                        return e
                          ? y.createElement(C.b, null, I.a.d30c2d4f)
                          : y.createElement(I.a.I18NFormatMessage, { $i18n: 'c7e2464e' }, y.createElement(C.b, null, t))
                      })(p, h)
                    : he)
                : u.card &&
                  (v = f
                    ? (function (e, t) {
                        return e
                          ? y.createElement(C.b, null, I.a.db53c017)
                          : y.createElement(I.a.I18NFormatMessage, { $i18n: 'hcbbbb34' }, y.createElement(C.b, null, t))
                      })(p, h)
                    : me)),
            y.createElement(C.b, { color: 'gray700', numberOfLines: 1 }, v)
          )
        }),
        be = n('uKEd'),
        ge = function (e, t) {
          return t.senderId ? z.e.select(e, t.senderId) : void 0
        },
        _e = function (e, t) {
          return Object(be.n)(e, t.reactionEntry.message_id)
        },
        Ee = function (e, t) {
          var n = _e(e, t)
          return n && n.message_data && z.e.select(e, n.message_data.sender_id)
        },
        Oe = Object(K.e)(function () {
          return Object(V.createSelector)(ge, _e, Ee, function (e, t, n) {
            return { reactedMessageEntry: t, reactingUser: e, messageUser: n }
          })
        }, {}),
        Se = n('33Kz'),
        Ce = Oe(function (e) {
          var t,
            n = e.isGroupDM,
            r = e.messageUser,
            a = e.perspective,
            i = e.reactedMessageEntry,
            o = e.reactingUser,
            c = e.reactionEntry,
            s = y.useContext(g.a).featureSwitches,
            l = i && i.message_data,
            u = l && l.attachment,
            d = l && l.text,
            p = r && r.screen_name,
            f = a === (o && o.id_str),
            h = o && o.name,
            m = Object(Se.b)(c.reaction_key || '', s)
          return (
            (t =
              u && u.tweet
                ? n
                  ? (function (e, t, n, r) {
                      return e
                        ? y.createElement(
                            I.a.I18NFormatMessage,
                            { $i18n: 'c4202784' },
                            y.createElement(C.b, null, n),
                            y.createElement(C.b, null, r),
                          )
                        : y.createElement(
                            I.a.I18NFormatMessage,
                            { $i18n: 'b493a890' },
                            y.createElement(C.b, null, t),
                            y.createElement(C.b, null, n),
                            y.createElement(C.b, null, r),
                          )
                    })(f, h, p, m)
                  : (function (e, t, n) {
                      return e
                        ? y.createElement(I.a.I18NFormatMessage, { $i18n: 'ca684bf5' }, y.createElement(C.b, null, n))
                        : y.createElement(
                            I.a.I18NFormatMessage,
                            { $i18n: 'h5797be5' },
                            y.createElement(C.b, null, t),
                            y.createElement(C.b, null, n),
                          )
                    })(f, h, m)
                : u && u.video
                ? n
                  ? (function (e, t, n, r) {
                      return e
                        ? y.createElement(
                            I.a.I18NFormatMessage,
                            { $i18n: 'd1f8bdd9' },
                            y.createElement(C.b, null, n),
                            y.createElement(C.b, null, r),
                          )
                        : y.createElement(
                            I.a.I18NFormatMessage,
                            { $i18n: 'd764af97' },
                            y.createElement(C.b, null, t),
                            y.createElement(C.b, null, n),
                            y.createElement(C.b, null, r),
                          )
                    })(f, h, p, m)
                  : (function (e, t, n) {
                      return e
                        ? y.createElement(I.a.I18NFormatMessage, { $i18n: 'ab1cdfe2' }, y.createElement(C.b, null, n))
                        : y.createElement(
                            I.a.I18NFormatMessage,
                            { $i18n: 'f0cf1699' },
                            y.createElement(C.b, null, t),
                            y.createElement(C.b, null, n),
                          )
                    })(f, h, m)
                : u && u.photo
                ? n
                  ? (function (e, t, n, r) {
                      return e
                        ? y.createElement(
                            I.a.I18NFormatMessage,
                            { $i18n: 'hec0fd4d' },
                            y.createElement(C.b, null, n),
                            y.createElement(C.b, null, r),
                          )
                        : y.createElement(
                            I.a.I18NFormatMessage,
                            { $i18n: 'j55320de' },
                            y.createElement(C.b, null, t),
                            y.createElement(C.b, null, n),
                            y.createElement(C.b, null, r),
                          )
                    })(f, h, p, m)
                  : (function (e, t, n) {
                      return e
                        ? y.createElement(I.a.I18NFormatMessage, { $i18n: 'jf27606a' }, y.createElement(C.b, null, n))
                        : y.createElement(
                            I.a.I18NFormatMessage,
                            { $i18n: 'cd110359' },
                            y.createElement(C.b, null, t),
                            y.createElement(C.b, null, n),
                          )
                    })(f, h, m)
                : u && u.animated_gif
                ? n
                  ? (function (e, t, n, r) {
                      return e
                        ? y.createElement(
                            I.a.I18NFormatMessage,
                            { $i18n: 'e70dcc35' },
                            y.createElement(C.b, null, n),
                            y.createElement(C.b, null, r),
                          )
                        : y.createElement(
                            I.a.I18NFormatMessage,
                            { $i18n: 'g1bf440b' },
                            y.createElement(C.b, null, t),
                            y.createElement(C.b, null, n),
                            y.createElement(C.b, null, r),
                          )
                    })(f, h, p, m)
                  : (function (e, t, n) {
                      return e
                        ? y.createElement(I.a.I18NFormatMessage, { $i18n: 'b2da1bf8' }, y.createElement(C.b, null, n))
                        : y.createElement(
                            I.a.I18NFormatMessage,
                            { $i18n: 'g84c0421' },
                            y.createElement(C.b, null, t),
                            y.createElement(C.b, null, n),
                          )
                    })(f, h, m)
                : u && u.card
                ? n
                  ? (function (e, t, n, r) {
                      return e
                        ? y.createElement(
                            I.a.I18NFormatMessage,
                            { $i18n: 'cd2e7c18' },
                            y.createElement(C.b, null, n),
                            y.createElement(C.b, null, r),
                          )
                        : y.createElement(
                            I.a.I18NFormatMessage,
                            { $i18n: 'aee9e7fa' },
                            y.createElement(C.b, null, t),
                            y.createElement(C.b, null, n),
                            y.createElement(C.b, null, r),
                          )
                    })(f, h, p, m)
                  : (function (e, t, n) {
                      return e
                        ? y.createElement(I.a.I18NFormatMessage, { $i18n: 'f9fb1cf6' }, y.createElement(C.b, null, n))
                        : y.createElement(
                            I.a.I18NFormatMessage,
                            { $i18n: 'f2bf910e' },
                            y.createElement(C.b, null, t),
                            y.createElement(C.b, null, n),
                          )
                    })(f, h, m)
                : d
                ? n
                  ? (function (e, t, n, r, a) {
                      return e
                        ? y.createElement(
                            I.a.I18NFormatMessage,
                            { $i18n: 'i6cec545' },
                            y.createElement(C.b, null, r),
                            y.createElement(C.b, null, n),
                            y.createElement(C.b, null, a),
                          )
                        : y.createElement(
                            I.a.I18NFormatMessage,
                            { $i18n: 'd6998baa' },
                            y.createElement(C.b, null, t),
                            y.createElement(C.b, null, r),
                            y.createElement(C.b, null, n),
                            y.createElement(C.b, null, a),
                          )
                    })(f, h, m, p, d)
                  : (function (e, t, n, r) {
                      return e
                        ? y.createElement(
                            I.a.I18NFormatMessage,
                            { $i18n: 'cec676f3' },
                            y.createElement(C.b, null, n),
                            y.createElement(C.b, null, r),
                          )
                        : y.createElement(
                            I.a.I18NFormatMessage,
                            { $i18n: 'a2706f9a' },
                            y.createElement(C.b, null, t),
                            y.createElement(C.b, null, n),
                            y.createElement(C.b, null, r),
                          )
                    })(f, h, m, d)
                : (function (e, t, n) {
                    return e
                      ? y.createElement(I.a.I18NFormatMessage, { $i18n: 'd6b15bbf' }, y.createElement(C.b, null, n))
                      : y.createElement(
                          I.a.I18NFormatMessage,
                          { $i18n: 'ac0d4bc7' },
                          y.createElement(C.b, null, t),
                          y.createElement(C.b, null, n),
                        )
                  })(f, h, m)),
            y.createElement(C.b, { color: 'gray700', numberOfLines: 1 }, t)
          )
        }),
        we = n('H4nC'),
        Re = n('b9JY'),
        Ie = I.a.fb3ccb55,
        ke = function (e) {
          var t = e.conversationType,
            n = e.entry,
            r = e.perspective
          if (n.marked_as_spam) return y.createElement(C.b, { color: 'gray700', numberOfLines: 1 }, Ie)
          if (Object(Re.b)(n)) {
            var a = n.message_data,
              i = (a = void 0 === a ? {} : a).recipient_id,
              o = a.sender_id
            return y.createElement(ye, {
              entry: n,
              isGroupDM: t === A.CONVERSATION_TYPE.GROUP,
              perspective: r,
              recipientId: i,
              senderId: o,
            })
          }
          return Object(Re.c)(n)
            ? y.createElement(Ce, {
                isGroupDM: t === A.CONVERSATION_TYPE.GROUP,
                perspective: r,
                reactionEntry: n,
                senderId: n.sender_id,
              })
            : Object(Re.a)(n)
            ? y.createElement(ae, { entry: n, entryType: n.type, perspective: r })
            : Object(Re.d)(n)
            ? y.createElement(we.a, { entry: n, isCompact: !0 })
            : null
        },
        Pe = n('Myq3'),
        xe = n('3wZR'),
        Te = n('XnpN'),
        Ae = 'conversation',
        Me = n('u0B7'),
        je = n('MWbm'),
        De = n('Irs7'),
        Le = n('eb3s'),
        Fe = n('ZToW'),
        Be = n('cHvH'),
        Ne = n('lHOd'),
        He = n('kb9v'),
        Ue = n('IG7M'),
        Ve = n('mjJ+'),
        We = n('Znyr'),
        ze = n('0PHd'),
        Ke = n('yrzJ'),
        Ge = n('Xrkv'),
        qe = n('efqG'),
        Ye = n('/yvb'),
        Xe = n('GBcw'),
        Qe = n('cm6r'),
        Ze = n('htQn'),
        Je = n('5mJL'),
        $e = n('rHpw'),
        et = n('vMjK'),
        tt = n('AQ79'),
        nt = n('pHkl'),
        rt = n('aWyx'),
        at = n('Lsrn'),
        it = n('k/Ka')
      function ot(e, t) {
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
      function ct(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ot(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ot(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var st = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(it.a)(
          'svg',
          ct(
            ct({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [at.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          y.createElement(
            'g',
            null,
            y.createElement('path', {
              d: 'M17.931 2.508c0 .42-.34.75-.75.75h-8.39l1.38 2.08-.56 5.78-.47.16c-1.5.49-3.1 2.07-3.37 3.31-.07.35-.39.59-.73.59-.05 0-.11 0-.16-.01-.4-.09-.66-.49-.58-.89.39-1.81 2.24-3.52 3.91-4.25l.42-4.3-1.35-2.02c-.26-.38-.29-.87-.07-1.29.24-.41.66-.66 1.11-.66h8.86c.41 0 .75.34.75.75zm3.09 12.76c-.14.17-.46.46-1.05.46h-3.86l-2.64 6.1c-.12.28-.39.45-.69.45s-.57-.17-.69-.45l-1.96-4.53c-.16-.38.01-.82.39-.98.38-.17.82.01.99.39l1.27 2.93 1.69-3.91h-1.61c-.42 0-.75-.33-.75-.75 0-.41.33-.75.75-.75h6.81c-.41-1.06-1.64-2.26-2.91-2.82-.09-.04-.16-.09-.22-.16-.22-.21-.3-.54-.17-.83.17-.38.61-.55.99-.39 1.59.7 3.5 2.43 3.89 4.25.06.25.03.66-.23.99zm.839-12.259L3.2 21.659c-.15.15-.34.22-.53.22s-.39-.07-.53-.22c-.29-.29-.29-.76 0-1.06L20.8 1.939c.29-.29.76-.29 1.06 0 .29.3.29.77 0 1.07z',
            }),
          ),
        )
      }
      st.metadata = { width: 24, height: 24 }
      var lt = st,
        ut = n('ShJ/')
      function dt(e, t) {
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
      function pt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? dt(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : dt(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var ft = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(it.a)(
          'svg',
          pt(
            pt({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [at.a.root, e.style], viewBox: '0 0 32 32' },
          ),
          y.createElement(
            'g',
            null,
            y.createElement('path', {
              d: 'M28.05 6.52h-5.42V4.887c0-1.548-1.26-2.808-2.81-2.808h-7.54c-1.548 0-2.807 1.26-2.807 2.808v1.63H4.05c-.414 0-.75.337-.75.75s.336.75.75.75h.753L7 26.435c.27 1.504 1.657 2.554 3.37 2.554h11.36c1.713 0 3.1-1.05 3.376-2.598l2.19-18.37h.753c.413 0 .75-.337.75-.75s-.336-.75-.75-.75zM10.972 4.887c0-.72.586-1.308 1.307-1.308h7.542c.72 0 1.308.587 1.308 1.308v1.63H10.972V4.89zm12.65 21.28c-.163.91-1.068 1.32-1.893 1.32H10.37c-.824 0-1.73-.41-1.887-1.276L6.313 8.02h19.472l-2.162 18.148z',
            }),
            y.createElement('path', {
              d: 'M13.312 23.123c.414 0 .75-.336.75-.75v-9.6c0-.414-.336-.75-.75-.75s-.75.336-.75.75v9.6c0 .414.336.75.75.75zm5.486 0c.414 0 .75-.336.75-.75v-9.6c0-.414-.336-.75-.75-.75s-.75.336-.75.75v9.6c0 .414.336.75.75.75z',
            }),
          ),
        )
      }
      ft.metadata = { width: 32, height: 32 }
      var ht = ft,
        mt = n('zIWA'),
        vt = n('5pef')
      function yt(e, t) {
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
      function bt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? yt(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : yt(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var gt = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(it.a)(
          'svg',
          bt(
            bt({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [at.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          y.createElement(
            'g',
            null,
            y.createElement('path', {
              d: 'M22.238 2.257c-.293-.293-.768-.293-1.06 0L2.52 20.917c-.293.292-.293.767 0 1.06.146.146.338.22.53.22s.384-.073.53-.22l18.658-18.66c.293-.293.293-.767 0-1.06zM2.986 17.82c.155 0 .312-.048.446-.148.112-.083 2.752-2.104 2.708-7.248-.02-2.16.643-3.98 1.913-5.266 1.093-1.107 2.577-1.72 4.18-1.727 1.325.006 2.562.42 3.578 1.195.137.104.297.153.455.153.227 0 .45-.102.598-.295.25-.33.188-.8-.142-1.052-1.278-.975-2.828-1.493-4.483-1.5h-.003c-2.008.008-3.87.78-5.248 2.173-1.536 1.551-2.368 3.8-2.348 6.332.037 4.33-2.02 5.967-2.103 6.03-.332.247-.4.718-.154 1.05.147.2.374.303.603.303zm16.844-7.382c.002-.246-.003-.487-.017-.723-.024-.414-.387-.74-.792-.706-.413.023-.728.378-.705.79.012.205.017.413.015.624-.024 2.868.785 4.765 1.526 5.896h-8.314c-.414 0-.75.336-.75.75s.336.75.75.75h3.522c-.1 1.48-1.323 2.66-2.828 2.66-1.003 0-1.913-.514-2.436-1.372-.214-.354-.675-.467-1.03-.25-.354.214-.467.675-.25 1.03.795 1.31 2.185 2.09 3.716 2.09 2.332 0 4.227-1.85 4.328-4.158h4.922c.32 0 .604-.206.707-.51.104-.305 0-.643-.255-.84-.087-.066-2.145-1.7-2.108-6.032z',
            }),
          ),
        )
      }
      gt.metadata = { width: 24, height: 24 }
      var _t = gt,
        Et = n('5oT/')
      function Ot(e, t) {
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
            ? Ot(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Ot(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function Ct(e) {
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
      var wt = I.a.d88d0790,
        Rt = I.a.ad63377d,
        It = {
          confirmButtonLabel: I.a.bb1d57b6,
          actionTextLeave: I.a.g9074da4,
          header: I.a.gdf4b79f,
          text: I.a.h09b49f7,
        },
        kt = I.a.e1c9ec9b,
        Pt = I.a.i6b19b07,
        xt = I.a.e3cfff7c,
        Tt = I.a.a8ed0eca,
        At = I.a.bdd91963,
        Mt = I.a.a30a206d,
        jt = I.a.ib4b1b85,
        Dt = I.a.bd3ca2ee,
        Lt = { component: 'low_quality_timeline' },
        Ft = function (e) {
          var t = e.children
          return y.createElement(je.a, { style: Nt.socialProofContainer }, t)
        },
        Bt = (function (e) {
          u()(n, e)
          var t = Ct(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              v()(s()(e), '_count', e.context.featureSwitches.getValue('dm_conversation_labels_max_pinned_count')),
              v()(
                s()(e),
                '_isPinnedInboxEnabled',
                e.context.featureSwitches.isTrue('dm_conversation_labels_pinned_enabled') &&
                  e.context.featureSwitches.isTrue('direct_messages_incremental_holdback_2022h1'),
              ),
              v()(
                s()(e),
                '_isVDLEnabled',
                e.context.featureSwitches.isTrue('dm_vdl_enabled') &&
                  e.context.featureSwitches.isTrue('dm_vdl_inbox_p0_enabled'),
              ),
              v()(s()(e), 'state', { showActionMenu: !1, showConfirmation: !1 }),
              v()(s()(e), '_renderConfirmationSheet', function () {
                var t = e.props.conversationId
                return y.createElement(Le.a, {
                  confirmButtonLabel: It.confirmButtonLabel,
                  confirmButtonType: 'destructiveFilled',
                  headline: It.header,
                  onCancel: e._handleHideConfirmation,
                  onConfirm: e._deleteConversation(t),
                  text: It.text,
                })
              }),
              v()(s()(e), '_renderMenu', function (t) {
                var n,
                  r = t.isFocused,
                  a = t.isFocusedWithin,
                  i = t.isHovered,
                  o = e.state.showActionMenu,
                  c = e.props,
                  s = c.addFlag,
                  l = c.conversation,
                  u = c.position,
                  d = c.shouldShowPinnedEducation,
                  p =
                    l &&
                    (null == l || null === (n = l.labels) || void 0 === n
                      ? void 0
                      : n.find(function (e) {
                          return e.label_type === tt.a.PINNED
                        })),
                  f = function () {
                    s(_.r)
                  },
                  h = function () {
                    e.setState({ showActionMenu: !0 })
                  },
                  m = d && 1 === u && !p,
                  v = !Fe.a.isEnabled || r || a || i || o || m
                return y.createElement(J.a.Consumer, null, function (t) {
                  var n = t.isDrawer
                  return y.createElement(Be.a, null, function (t) {
                    var r = t.windowWidth,
                      a = B.a.isTwoColumnLayout(r)
                    return y.createElement(Ne.a.Consumer, null, function (t) {
                      return y.createElement(
                        y.Fragment,
                        null,
                        y.createElement(
                          He.a,
                          {
                            actionPrimary: { text: Mt, onClick: f },
                            headline: jt,
                            onDismiss: f,
                            shouldDisplay: m && !n,
                            text: Dt({ count: e._count }),
                            withMask: !a,
                          },
                          a
                            ? y.createElement(Ue.a, {
                                onClick: h,
                                renderActionMenu: e._renderActionMenu,
                                style: v ? Nt.menu : Nt.hiddenMenu,
                              })
                            : null,
                        ),
                        a
                          ? null
                          : y.createElement(Ue.a, {
                              onClick: h,
                              renderActionMenu: e._renderActionMenu,
                              style: v ? Nt.menu : Nt.hiddenMenu,
                            }),
                      )
                    })
                  })
                })
              }),
              v()(s()(e), '_renderActionMenu', function (t) {
                var n,
                  r = e.props,
                  a = r.conversation,
                  i = r.conversationId,
                  o = r.togglePinState,
                  c = e.context.history,
                  s =
                    a &&
                    (null == a || null === (n = a.labels) || void 0 === n
                      ? void 0
                      : n.find(function (e) {
                          return e.label_type === tt.a.PINNED
                        })),
                  l = null == a ? void 0 : a.notifications_disabled,
                  u = []
                if (a) {
                  if (o) {
                    var d = {
                      Icon: s ? lt : ut.a,
                      onClick: function () {
                        return o(i, a)
                      },
                      text: s ? At : kt,
                      withBottomBorder: !0,
                    }
                    u.push(d)
                  }
                  var p = {
                      Icon: ht,
                      isEmphasized: !0,
                      onClick: e._handleDeleteMenuItemClick,
                      text: Rt,
                      withBottomBorder: !0,
                    },
                    f = {
                      Icon: mt.a,
                      onClick: function () {
                        return e._handleReportMenuItemClick(c)()
                      },
                      text: Pt,
                      withBottomBorder: !0,
                    },
                    h = {
                      Icon: l ? vt.a : _t,
                      onClick: function () {
                        return e._handleSnoozeMenuItemClick(i)
                      },
                      text: l ? Tt : xt,
                      withBottomBorder: !0,
                    }
                  u.push(f, h, p)
                }
                return y.createElement(Ve.a, {
                  items: u,
                  onCloseRequested: e._handleHideMenu(t),
                  shouldCloseOnClick: !0,
                })
              }),
              v()(s()(e), '_renderConversationActions', function (t) {
                var n = t.isFocused,
                  r = t.isFocusedWithin,
                  a = t.isHovered
                switch (e.props.inboxType) {
                  case tt.d.PRIMARY:
                    return e._isPinnedInboxEnabled
                      ? e._renderMenu({ isFocused: n, isFocusedWithin: r, isHovered: a })
                      : null
                  case tt.d.SECONDARY:
                  case tt.d.TERTIARY:
                    return e._renderX()
                  default:
                    return null
                }
              }),
              v()(s()(e), '_renderConversationEndCell', function (t) {
                var n = e.props,
                  r = n.inboxType,
                  a = n.searchQuery,
                  i = n.unread
                    ? y.createElement(We.a, {
                        pip: !0,
                        style: Nt.unreadMessagePip,
                        truncatedCountFormatter: function () {
                          return ''
                        },
                        unreadCountLabel: function () {
                          return ''
                        },
                      })
                    : null
                switch (r) {
                  case tt.d.PRIMARY:
                    return e._isVDLEnabled ? i : a ? null : e._renderTimestamp(t)
                  case tt.d.SECONDARY:
                    return e._isVDLEnabled ? i : null
                  default:
                    return null
                }
              }),
              v()(s()(e), '_renderConversationLabel', function (e) {
                var t = e.convo_label
                if (null == t || !t.text) return null
                var n = Object(xe.b)(t.icon)
                return y.createElement(
                  C.b,
                  { color: 'gray700', size: 'subtext2' },
                  n ? y.createElement(n, { style: Nt.convoLabelIcon }) : null,
                  t.text,
                )
              }),
              v()(s()(e), '_renderSocialProof', function (t) {
                var n = t.social_proof
                if (!n || 0 === n.length) return null
                var r = n[0]
                switch (r.proof_type) {
                  case rt.d.MUTUAL_FRIENDS:
                    if (0 === r.total) return null
                    var a = r.users.map(function (e) {
                        return e.profile_image_url_https
                      }),
                      i = r.users.map(function (e) {
                        return e.name
                      }),
                      o = e._isVDLEnabled ? { marginLeft: 0 } : null
                    return y.createElement(
                      Ft,
                      null,
                      y.createElement(ze.a, {
                        displayFacepileInline: !0,
                        knownFollowersAvatarUrls: a,
                        knownFollowersCount: r.total,
                        knownFollowersNames: i,
                        textStyle: o,
                        withFacepile: !e._isVDLEnabled,
                      }),
                    )
                  default:
                    return null
                }
              }),
              v()(s()(e), '_renderSearchConversationPreview', function () {
                var t = e.props,
                  n = t.conversation,
                  r = t.perspective,
                  a = t.searchQuery,
                  i = n ? Object(Te.a)(n, r) : [],
                  o = [],
                  c = function (e, t) {
                    return e.localeCompare(t)
                  },
                  s = i
                    .map(function (e) {
                      return e.user
                    })
                    .filter(function (e) {
                      var t,
                        n = null === (t = e.name) || void 0 === t ? void 0 : t.toLowerCase().includes(a)
                      return e.id_str !== r && (n && o.push(e.name), !n)
                    })
                    .map(function (e) {
                      return e.name
                    })
                    .sort(c),
                  l = o.sort(c).concat(s)
                if (n) {
                  if (n.type === A.CONVERSATION_TYPE.ONE_TO_ONE) {
                    var u = i.map(function (e) {
                        return e.user
                      }),
                      d = F()(u, 1)[0]
                    return y.createElement(Ke.a, { color: 'gray700', screenName: d.screen_name })
                  }
                  var p = Object(Ge.a)(l, !0)
                  return y.createElement(C.b, { color: 'gray700', numberOfLines: 2 }, p)
                }
              }),
              v()(s()(e), '_renderX', function () {
                var t = e.props,
                  n = t.conversation,
                  r = t.conversationId,
                  a = e.context.loggedInUserId,
                  i = Object(ce.i)(n, a),
                  o = (null == n ? void 0 : n.type) === A.CONVERSATION_TYPE.GROUP
                return y.createElement(Ne.a.Consumer, null, function (t) {
                  return y.createElement(
                    qe.a,
                    {
                      renderContent: function (n, a) {
                        return y.createElement(H.a, {
                          dismiss: n,
                          flatBorders: 'sheet' === a,
                          isGroup: o,
                          onBlockClick: e._blockUser(i.idStr),
                          onDeleteClick: e._deleteConversation(r),
                          onReportClick: e._handleReportMenuItemClick(t),
                          requestorScreenName: i.screenName,
                          showBlock: !o,
                          showCancel: 'sheet' === a,
                          showDelete: !0,
                        })
                      },
                    },
                    y.createElement(Ye.a, {
                      accessibilityLabel: wt,
                      icon: y.createElement(Et.a, { style: e._isVDLEnabled ? Nt.xIcon : void 0 }),
                      onPress: e._handleXPress,
                      style: e._isVDLEnabled ? Nt.vdlXButton : Nt.xButton,
                      type: e._isVDLEnabled ? void 0 : 'destructiveText',
                    }),
                  )
                })
              }),
              v()(s()(e), '_handleDeleteMenuItemClick', function () {
                e.setState({ showConfirmation: !0 })
              }),
              v()(s()(e), '_handleHideMenu', function (t) {
                return function () {
                  t && t(), e.setState({ showActionMenu: !1 })
                }
              }),
              v()(s()(e), '_handleReportMenuItemClick', function (t) {
                return function () {
                  var n = e.props,
                    r = n.analytics,
                    a = n.conversationId,
                    i = n.inboxType
                  if (a) {
                    r.scribeAction('report')
                    var o = Object(ce.f)(a, window.location.pathname, r.contextualScribeNamespace, i)
                    t.push(o)
                  }
                }
              }),
              v()(s()(e), '_handleSnoozeMenuItemClick', function (t) {
                var n = e.props,
                  r = n.conversation,
                  a = n.disableNotifications,
                  i = n.enableNotifications
                ;(null == r ? void 0 : r.notifications_disabled) ? i({ conversationId: t }) : a({ conversationId: t })
              }),
              v()(s()(e), '_handleXPress', function (e) {
                e.preventDefault()
              }),
              v()(s()(e), '_renderTimestamp', function (t) {
                var n = e.props,
                  r = n.conversation,
                  a = n.isMessageItem,
                  i =
                    e.context.featureSwitches.isTrue('dm_vdl_enabled') &&
                    e.context.featureSwitches.isTrue('dm_vdl_inbox_p0_enabled'),
                  o = [i || a ? Nt.inlineNotificationsDisabledIcon : Nt.notificationsDisabledIcon],
                  c = Number(t && a ? (null == t ? void 0 : t.time) : null == r ? void 0 : r.sort_timestamp)
                return y.createElement(
                  y.Fragment,
                  null,
                  y.createElement(
                    je.a,
                    { style: (i || a) && Nt.inlineTimestamp },
                    r && c ? y.createElement(Xe.a, { timestamp: c }) : null,
                    null != r && r.notifications_disabled ? y.createElement(_t, { style: o }) : null,
                  ),
                )
              }),
              v()(s()(e), '_deleteConversation', function (t) {
                return function () {
                  var n = e.props,
                    r = n.analytics,
                    a = n.conversation,
                    i = n.createLocalApiErrorHandler,
                    o = n.inboxType,
                    c = n.leaveConversation,
                    s = n.position,
                    l = e.context.history,
                    u = null != a && a.participants ? Object.keys(a.participants).length : 0,
                    d = a && a.type === A.CONVERSATION_TYPE.GROUP ? 'leave_group' : 'delete_thread',
                    p = {
                      conversation_type: (null == a ? void 0 : a.type) === A.CONVERSATION_TYPE.GROUP ? 1 : 0,
                      conversation_id: t,
                      conversation_participant_count: u,
                      position: s,
                      inbox_type: Object(ce.h)(o),
                      entry_point: nt.b.CELL_X_BUTTON,
                    }
                  e._handleHideConfirmation(),
                    r.scribe({ element: 'thread', action: d, data: p }),
                    c({ conversationId: t }).catch(i({ showToast: !0 })),
                    l.replace(Object(ce.e)(o))
                }
              }),
              v()(s()(e), '_blockUser', function (t) {
                return function () {
                  var n = e.props,
                    r = n.addToast,
                    a = n.analytics,
                    i = n.block,
                    o = n.createLocalApiErrorHandler
                  i(t).then(function () {
                    r({ action: { label: et.c, onAction: e._createUnblockUserHandler(t) }, text: et.a })
                  }, o(N.a)),
                    a.scribeAction('block')
                }
              }),
              v()(s()(e), '_createUnblockUserHandler', function (t) {
                return function () {
                  var n = e.props,
                    r = n.analytics,
                    a = n.createLocalApiErrorHandler
                  ;(0, n.unblock)(t).catch(a(Me.a)), r.scribeAction('unblock')
                }
              }),
              v()(s()(e), '_handleHideConfirmation', function () {
                e.setState({ showConfirmation: !1 })
              }),
              v()(s()(e), '_handleOnClick', function (t) {
                var n = e.props,
                  r = n.addRecentSearch,
                  a = n.analytics,
                  i = n.conversation,
                  o = n.conversationId,
                  c = n.onClick,
                  s = n.position,
                  l = n.searchQuery,
                  u = null != i && i.participants ? Object.keys(i.participants).length : 0,
                  d = (null == i ? void 0 : i.type) === A.CONVERSATION_TYPE.GROUP
                l &&
                  (a.scribe({
                    component: 'search',
                    element: 'conversation',
                    action: 'click',
                    data: {
                      conversation_id: o,
                      conversation_participant_count: u,
                      conversation_type: d ? nt.g.GROUP : nt.g.ONE_TO_ONE,
                      entry_point: nt.b.ALL,
                      inbox_type: nt.c.PRIMARY,
                      dm_search_result_type: nt.a.CONVERSATION,
                      message_type: nt.d.NOT_APPLICABLE,
                      position: s,
                    },
                  }),
                  a.scribe({ component: 'recent_search', action: 'add' }),
                  r(l)),
                  c(t, o, i, s)
              }),
              v()(s()(e), '_handleShowConfirmation', function (t) {
                var n = e.props.analytics
                t.stopPropagation(),
                  n.scribe(St(St({}, Lt), {}, { element: 'accessory_trashcan', action: 'click' })),
                  e.setState({ showConfirmation: !0 })
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'shouldComponentUpdate',
                value: function (e, t) {
                  var n = this.props.conversation,
                    r = null == n ? void 0 : n.conversation_id,
                    a = null == n ? void 0 : n.notifications_disabled,
                    i = null == n ? void 0 : n.last_read_event_id,
                    o = null == n ? void 0 : n.sort_event_id,
                    c = null == n ? void 0 : n.max_entry_id,
                    s = null == n ? void 0 : n.convo_label,
                    l = this.props.messageId,
                    u = this.props.shouldShowPinnedEducation,
                    d = e.conversation,
                    p = null == d ? void 0 : d.conversation_id,
                    f = null == d ? void 0 : d.notifications_disabled,
                    h = null == d ? void 0 : d.last_read_event_id,
                    m = null == d ? void 0 : d.sort_event_id,
                    v = null == d ? void 0 : d.max_entry_id,
                    y = null == d ? void 0 : d.convo_label,
                    b = e.messageId,
                    g = e.shouldShowPinnedEducation,
                    _ = this.props,
                    E = _.filter,
                    O = _.isActive,
                    S = e.filter,
                    C = e.isActive,
                    w = this.state.showConfirmation,
                    R = t.showConfirmation
                  return (
                    r !== p ||
                    a !== f ||
                    i !== h ||
                    o !== m ||
                    c !== v ||
                    l !== b ||
                    O !== C ||
                    w !== R ||
                    E !== S ||
                    s !== y ||
                    u !== g
                  )
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.conversation,
                    r = t.isActive,
                    a = t.isMessageItem,
                    i = t.link,
                    o = t.messageId,
                    c = t.perspective,
                    s = t.position,
                    l = t.searchQuery,
                    u = t.unread,
                    d = this.state.showConfirmation,
                    p = (null == n ? void 0 : n.entries) || [],
                    f = a
                      ? p.find(function (e) {
                          return e.id === o
                        })
                      : Object(Pe.a)(p, function (e) {
                          return ![
                            rt.b.MESSAGE_DELETE,
                            rt.b.REACTION_DELETE,
                            rt.b.MESSAGE_MARK_AS_SPAM,
                            rt.b.MESSAGE_MARK_AS_NOT_SPAM,
                            rt.b.CONVO_METADATA_UPDATE,
                            rt.b.DISABLE_NOTIFICATIONS,
                            rt.b.ENABLE_NOTIFICATIONS,
                          ].includes(e.type)
                        }),
                    h = [Nt.root, u && !this._isVDLEnabled && Nt.unread],
                    m = (null == n ? void 0 : n.type) === A.CONVERSATION_TYPE.GROUP,
                    v = this._isVDLEnabled && m
                  if (!n) return null
                  var b = !!n.convo_label,
                    g = !n.trusted && !b,
                    _ = this._isVDLEnabled ? 'xxxLarge' : 'xxLarge',
                    E = this._renderConversationEndCell(f),
                    O = l && !a
                  return !n || (!l && n.isSearchResultOnly)
                    ? null
                    : y.createElement(
                        y.Fragment,
                        null,
                        d ? this._renderConfirmationSheet() : null,
                        y.createElement(Qe.a, null, function (t) {
                          var o = t.isFocused,
                            u = t.isFocusedWithin,
                            d = t.isHovered
                          return y.createElement(
                            Ze.a,
                            {
                              accessibilityRole: 'tab',
                              accessibilityState: { selected: r },
                              link: {
                                pathname: null == i ? void 0 : i.pathname,
                                anchorless: !0,
                                state: St(St({}, null == i ? void 0 : i.state), {}, { position: s }),
                              },
                              onPress: e._handleOnClick,
                              style: h,
                              testID: Ae,
                            },
                            y.createElement(
                              Je.a,
                              {
                                avatarCell: y.createElement(Q.a, {
                                  conversation: n,
                                  perspective: c,
                                  withBadge: v,
                                  withVDLRefresh: e._isVDLEnabled,
                                }),
                                avatarSize: _,
                              },
                              y.createElement(
                                je.a,
                                { style: Nt.bodyColumn },
                                y.createElement(
                                  je.a,
                                  { style: Nt.titleContainer },
                                  y.createElement(Z.b, {
                                    conversation: n,
                                    isConversationSearchTitle: !!O,
                                    isMessageSearchTitle: !!a,
                                    perspective: c,
                                    renderTimestamp: function () {
                                      return e._renderTimestamp(f)
                                    },
                                    withScreenName: !l && !a,
                                    withVDLRefresh: e._isVDLEnabled,
                                  }),
                                  y.createElement(
                                    je.a,
                                    { style: Nt.snippet },
                                    f && !O
                                      ? y.createElement(ke, {
                                          conversationType: n.type,
                                          entry: f,
                                          isMessageItem: a,
                                          perspective: c,
                                        })
                                      : O
                                      ? e._renderSearchConversationPreview()
                                      : null,
                                  ),
                                  b ? e._renderConversationLabel(n) : null,
                                  g ? e._renderSocialProof(n) : null,
                                ),
                                E ? y.createElement(je.a, { style: Nt.endCell }, E) : null,
                                e._renderConversationActions({ isFocused: o, isFocusedWithin: u, isHovered: d }),
                              ),
                            ),
                          )
                        }),
                      )
                },
              },
            ]),
            n
          )
        })(y.Component)
      v()(Bt, 'contextType', g.a),
        v()(Bt, 'defaultProps', {
          searchQuery: '',
          inboxType: 'primary',
          isActive: !1,
          filter: function (e) {
            return !0
          },
        })
      var Nt = $e.a.create(function (e) {
          return {
            root: {
              backgroundColor: e.colors.cellBackground,
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.spaces.space16,
              width: '100%',
            },
            bodyColumn: { flexDirection: 'row' },
            inlineTimestamp: { flexDirection: 'row' },
            titleContainer: { flex: 1 },
            inlineNotificationsDisabledIcon: {
              paddingLeft: 'calc('.concat(e.spaces.space2, ' * 3)'),
              color: e.colors.gray700,
            },
            hiddenMenu: { opacity: 0, overflow: 'hidden', width: 0 },
            menu: {
              alignSelf: 'flex-start',
              marginLeft: 'calc('.concat(e.spaces.space8, ' + ').concat(e.spaces.space2, ')'),
            },
            notificationsDisabledIcon: { alignSelf: 'flex-end', color: e.colors.gray700, paddingTop: e.spaces.space4 },
            unreadMessagePip: {
              backgroundColor: e.colors.blue500,
              marginTop: 'calc('.concat(e.spaces.space8, ' - ').concat(e.spaces.space1, ')'),
            },
            vdlXButton: {
              border: 'none',
              marginLeft: 'calc('.concat(e.spaces.space8, ' + ').concat(e.spaces.space2, ')'),
              marginRight: 'calc(-1 * '.concat(e.spaces.space4, ')'),
              marginTop: 'calc(-1 * ('.concat(e.spaces.space8, ' - ').concat(e.spaces.space1, '))'),
            },
            xButton: { alignSelf: 'center', marginRight: 'calc(-1 * '.concat(e.spaces.space4, ')') },
            xIcon: {
              height: 'calc('.concat(e.spaces.space28, ' - ').concat(e.spaces.space1, ')'),
              width: 'calc('.concat(e.spaces.space28, ' - ').concat(e.spaces.space1, ')'),
            },
            trashcanIcon: { color: e.colors.gray700 },
            snippet: { maxHeight: e.spaces.space40, overflow: 'hidden' },
            unread: { backgroundColor: e.colors.unreadCellBackground },
            socialProofContainer: { marginTop: e.spaces.space4 },
            convoLabelIcon: { marginRight: e.spaces.space4 },
            endCell: { marginLeft: e.spaces.space16 },
          }
        }),
        Ht = Object(De.a)(X(Bt), { page: 'messages', section: 'inbox' }),
        Ut = Object(E.a)()
          .propsFromState(function () {
            return { pinnedConversationIds: A.selectPinnedConversationIds }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(j.createLocalApiErrorHandlerWithContextFactory)(
                'DM_PINNED_INBOX_CONTEXT',
              ),
            }
          }),
        Vt = n('oUUt'),
        Wt = (n('uFXj'), I.a.b08821f3),
        zt = I.a.e047b8fa,
        Kt = $e.a.create(function (e) {
          return {
            root: {
              backgroundColor: e.colors.cellBackground,
              paddingLeft: e.spaces.space16,
              paddingVertical: e.spaces.space4,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderBottomStyle: 'solid',
              borderBottomWidth: e.borderWidths.small,
              borderBottomColor: e.colors.borderColor,
            },
            backButton: { marginRight: e.spaces.space4 },
            iconContainer: { alignItems: 'center', flexDirection: 'row' },
            icon: {
              color: e.colors.text,
              marginRight: e.spaces.space12,
              fontSize: e.fontSizes.body,
              marginVertical: e.spaces.space8,
            },
            labelHeader: { borderBottomStyle: 'none', paddingVertical: e.spaces.space12 },
          }
        }),
        Gt = function (e) {
          var t = Object(De.b)(),
            n = e.clearRecentSearches,
            r = e.headerText,
            a = e.icon,
            i = e.isInboxLabelHeader,
            o = e.withClearButton
          y.useEffect(
            function () {
              t.scribe({ component: 'recent_search', action: 'impression' })
            },
            [t],
          )
          var c,
            s = [Kt.root, i && Kt.labelHeader]
          return y.createElement(
            je.a,
            { style: s },
            y.createElement(
              je.a,
              { style: Kt.iconContainer },
              (c = a) ? y.createElement(c, { style: Kt.icon }) : null,
              y.createElement(C.b, { size: 'headline1', weight: 'heavy' }, r),
            ),
            o
              ? y.createElement(
                  Ye.a,
                  { accessibilityLabel: Wt, onPress: n, style: Kt.backButton, type: 'onMediaWhiteFilled' },
                  zt,
                )
              : null,
          )
        },
        qt = n('h3MB'),
        Yt = (n('enFi'), n('1IsZ'), n('IAdD'), n('xPna'))
      function Xt(e, t) {
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
      function Qt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Xt(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Xt(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var Zt = function (e) {
          var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            n = {},
            r = {}
          return (
            null != e &&
              e.conversations &&
              (Object.values(e.conversations).forEach(function (e) {
                e && e.users && Object.assign(n, e.users), t && (e.isSearchResult = !0)
              }),
              (r = { conversations: null == e ? void 0 : e.conversations, users: n })),
            null != e && e.entries && (r = Qt(Qt({}, r), {}, { entries: null == e ? void 0 : e.entries })),
            Object(Yt.a)(r)
          )
        },
        Jt = n('VPAj')
      function $t(e, t) {
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
      function en(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? $t(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : $t(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var tn,
        nn,
        rn,
        an,
        on = en(
          en({}, n('7n04').a),
          {},
          { initialScrollHeadroom: Object(Jt.a)(0), scrollHeadroom: Object(Jt.a)(0), pinToNewestWhenAtNewest: !0 },
        ),
        cn = n('TEoO'),
        sn = n('NjAB'),
        ln = n('OIs+'),
        un = I.a.e4f6bd9e,
        dn = I.a.e4ff75a9,
        pn =
          ((tn = {}),
          v()(tn, ln.a.Offline, { toast: { text: dn } }),
          v()(tn, 'defaultToast', { text: un }),
          v()(tn, 'showToast', !0),
          tn),
        fn = n('Fr3L'),
        hn = n('uDfI'),
        mn = n('9SqB'),
        vn = n.n(mn),
        yn = n('DQzJ')
      function bn(e, t) {
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
      function gn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? bn(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : bn(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var _n = I.a.e4b3f520,
        En = I.a.ae4d666a,
        On = function (e) {
          return e
        },
        Sn = I.a.a219e217,
        Cn = I.a.d571e4f8,
        wn = I.a.a551bf7d,
        Rn = void 0 !== nn ? nn : (nn = n('X8um')),
        In = { context: 'DM_PINNED_INBOX' },
        kn = function (e) {
          var t,
            r = Object(hn.c)(),
            a = e.accessibilityTitle,
            i = e.cacheKey,
            o = e.conversationIds,
            c = e.createLocalApiErrorHandler,
            s = e.footer,
            l = e.header,
            u = e.onNearEnd,
            d = e.pinnedConversationIds,
            p = e.renderEmptyDMInbox,
            f = e.renderInboxItem,
            h = e.withKeyboardShortcuts,
            m = Object(yn.a)(Rn, { label: tt.a.PINNED }).data,
            b = c(pn),
            _ = y.useState(!1),
            E = F()(_, 2),
            O = E[0],
            S = E[1],
            C = y.useContext(g.a).featureSwitches.getValue('dm_conversation_labels_max_pinned_count'),
            w = (null == m || null === (t = m.labeled_conversation_slice) || void 0 === t ? void 0 : t.items) || [],
            R = Object(sn.b)(w, [qt.a]).entities
          y.useEffect(
            function () {
              r(Zt(R))
            },
            [m],
          )
          var I = vn()(void 0 !== rn ? rn : (rn = n('ZH9U'))),
            k = F()(I, 1)[0],
            P = vn()(void 0 !== an ? an : (an = n('rQjK'))),
            x = F()(P, 1)[0],
            T = function (e, t) {
              x({
                variables: { conversation_id: e, label_type: tt.a.PINNED },
                onCompleted: function (n) {
                  var a,
                    i = Object(Te.a)(t),
                    o = t
                      ? null == t || null === (a = t.labels) || void 0 === a
                        ? void 0
                        : a.filter(function (e) {
                            return e.label_type !== tt.a.PINNED
                          })
                      : []
                  r(Zt({ conversations: v()({}, e, gn(gn({}, t), {}, { participants: i, labels: o })) }))
                },
                updater: function (t) {
                  var n,
                    r,
                    a =
                      null ===
                        (n = w.find(function (t) {
                          return t.rest_id === e
                        })) || void 0 === n
                        ? void 0
                        : n.id,
                    i = null == m || null === (r = m.labeled_conversation_slice) || void 0 === r ? void 0 : r.__id
                  if (a && i) {
                    var o = t.get(a),
                      c = t.get(i)
                    c && o && (Object(Vt.b)(c, a), t.delete(a))
                  }
                },
                onError: function (e) {
                  b(e)
                },
              })
            },
            A =
              null == o
                ? void 0
                : o.filter(function (e) {
                    return -1 === d.indexOf(e)
                  }),
            M = d.length && A.length,
            j = y.createElement(
              y.Fragment,
              null,
              l,
              null != d && d.length
                ? y.createElement(
                    y.Fragment,
                    null,
                    Pn(_n),
                    d.map(function (e, t) {
                      return f({ conversationIds: d, togglePinState: T })(e)
                    }),
                  )
                : null,
              M ? Pn(En) : null,
            )
          return null != o && o.length
            ? y.createElement(
                y.Fragment,
                null,
                O
                  ? y.createElement(Le.a, {
                      confirmButtonLabel: Sn,
                      headline: Cn({ count: C }),
                      onConfirm: function () {
                        return S(!1)
                      },
                      text: wn,
                      withCancelButton: !1,
                    })
                  : null,
                i && null != A && A.length
                  ? y.createElement(cn.a, {
                      accessibilityRole: 'tablist',
                      accessibilityTitle: a,
                      anchoring: on,
                      assumedItemHeight: 100,
                      cacheKey: i,
                      footer: s,
                      header: j,
                      identityFunction: On,
                      items: A,
                      onNearEnd: u,
                      renderer: f({
                        conversationIds: A,
                        togglePinState: function (e, t) {
                          k({
                            variables: { conversation_id: e, label: tt.a.PINNED },
                            onCompleted: function (n) {
                              var a
                              switch (
                                null === (a = n.add_dm_conversation_label_v3) || void 0 === a ? void 0 : a.__typename
                              ) {
                                case 'DMConversationLabelInfo':
                                  var i = n.add_dm_conversation_label_v3,
                                    o = i.label_type,
                                    c = i.timestamp,
                                    s = Object(Te.a)(t)
                                  r(
                                    Zt({
                                      conversations: v()(
                                        {},
                                        e,
                                        gn(
                                          gn({}, t),
                                          {},
                                          { participants: s, labels: [{ label_type: o, timestamp: c }] },
                                        ),
                                      ),
                                    }),
                                  )
                                  break
                                case 'DMConversationLabelUnavailable':
                                  'ExceededMaxPinnedConversations' === n.add_dm_conversation_label_v3.failure_reason &&
                                    S(!0)
                              }
                            },
                            onError: function (e) {
                              b(e)
                            },
                          })
                        },
                      }),
                      withKeyboardShortcuts: h,
                      withoutHeadroom: !0,
                    })
                  : j,
                ';',
              )
            : p()
        },
        Pn = function (e) {
          return y.createElement(je.a, null, y.createElement(Gt, { headerText: e, isInboxLabelHeader: !0 }))
        }
      var xn = Ut(function (e) {
          return y.createElement(fn.a, { errorConfig: In }, y.createElement(kn, e))
        }),
        Tn =
          (n('LJOr'),
          n('tVqn'),
          n('Qavd'),
          n('JtPf'),
          n('M+/F'),
          function (e, t) {
            return t.module.selectItems(e)
          }),
        An = function (e, t) {
          return t.module.selectFetchStatus(e)
        },
        Mn = Object(E.a)()
          .propsFromState(function () {
            return { fetchStatus: An, sliceItems: Tn }
          })
          .adjustStateProps(function (e) {
            var t = e.fetchStatus,
              n = e.sliceItems,
              r = (function (e) {
                var t
                return (
                  (null ===
                    (t = e.find(function (e) {
                      return e.groupData
                    })) || void 0 === t
                    ? void 0
                    : t.groupData) || []
                )
              })(n),
              a = (function (e) {
                var t
                return (
                  (null ===
                    (t = e.find(function (e) {
                      return e.peopleData
                    })) || void 0 === t
                    ? void 0
                    : t.peopleData) || []
                )
              })(n),
              i = (function (e) {
                var t, n
                return (
                  (null ===
                    (t = e.find(function (e) {
                      return e.messageData
                    })) ||
                  void 0 === t ||
                  null === (n = t.messageData) ||
                  void 0 === n
                    ? void 0
                    : n.conversationIds) || []
                )
              })(n)
            return {
              entryIds: (function (e) {
                var t, n
                return (
                  (null ===
                    (t = e.find(function (e) {
                      return e.messageData
                    })) ||
                  void 0 === t ||
                  null === (n = t.messageData) ||
                  void 0 === n
                    ? void 0
                    : n.entryIds) || []
                )
              })(n),
              fetchStatus: t,
              groupConversationIds: r,
              messageConversationIds: i,
              peopleSearchConversationIds: a,
              sliceItems: n,
            }
          })
          .propsFromActions(function (e) {
            var t = e.module
            return {
              createLocalApiErrorHandler: Object(j.createLocalApiErrorHandlerWithContextFactory)(
                'DM_SEARCH_ALL_CONTEXT',
              ),
              fetchSearchIfNeeded: t.fetchIfNeeded,
            }
          }),
        jn = n('MDbM'),
        Dn = n('v//M'),
        Ln = n('0yYu'),
        Fn = n('lBmi'),
        Bn = n('91AQ'),
        Nn = n('6ZHn')
      function Hn(e) {
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
      var Un = I.a.c94ac69d,
        Vn = I.a.a2f8105f,
        Wn = I.a.g2fd3205,
        zn = I.a.ffd9cfe6,
        Kn = (function (e) {
          u()(n, e)
          var t = Hn(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              v()(
                s()(e),
                '_groupBucketSize',
                e.context.featureSwitches.getNumberValue('dm_inbox_search_groups_bucket_size'),
              ),
              v()(
                s()(e),
                '_messagesBucketSize',
                e.context.featureSwitches.getNumberValue('dm_inbox_search_messages_bucket_size'),
              ),
              v()(
                s()(e),
                '_peopleBucketSize',
                e.context.featureSwitches.getNumberValue('dm_inbox_search_people_bucket_size'),
              ),
              v()(s()(e), '_renderSearchResults', function () {
                var t = e.props,
                  n = t.groupConversationIds,
                  r = t.messageConversationIds,
                  a = t.peopleSearchConversationIds,
                  i = t.renderEmptyState,
                  o = a.length && n.length,
                  c = e._groupBucketSize < n.length,
                  s = e._messagesBucketSize < r.length,
                  l = e._peopleBucketSize < a.length
                return (null == n ? void 0 : n.length) || a.length || r.length
                  ? y.createElement(
                      y.Fragment,
                      null,
                      a.length ? e._renderPeopleSection() : null,
                      o && !l ? y.createElement(Ln.a, null) : null,
                      l ? e._renderDMSearchFooter(Wn) : null,
                      n.length ? e._renderGroupsSection() : null,
                      c ? e._renderDMSearchFooter(Un) : null,
                      r.length ? e._renderMessagesSection() : null,
                      s ? e._renderDMSearchFooter(Vn) : null,
                    )
                  : i()
              }),
              v()(s()(e), '_handleFetch', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchSearchIfNeeded)().catch(n())
              }),
              v()(s()(e), '_renderDMSearchFooter', function (t) {
                var n = e.props.location
                return y.createElement(
                  je.a,
                  { style: Gn.header },
                  y.createElement(C.b, { link: { pathname: n.pathname, state: { tab: t } } }, zn),
                )
              }),
              v()(s()(e), '_renderDMHeader', function (e) {
                var t = e.headerText,
                  n = e.icon
                return y.createElement(Gt, { headerText: t, icon: n })
              }),
              v()(s()(e), '_renderGroupsSection', function () {
                var t = e.props,
                  n = t.groupConversationIds,
                  r = t.renderInboxItem
                return y.createElement(
                  y.Fragment,
                  null,
                  e._renderDMHeader({ icon: Fn.a, headerText: Un }),
                  n
                    .map(function (e) {
                      return e ? r({ conversationIds: n })(e) : null
                    })
                    .slice(0, e._groupBucketSize),
                )
              }),
              v()(s()(e), '_renderMessagesSection', function () {
                var t = e.props,
                  n = t.entryIds,
                  r = t.messageConversationIds,
                  a = t.renderInboxItem
                return y.createElement(
                  y.Fragment,
                  null,
                  e._renderDMHeader({ icon: Bn.a, headerText: Vn }),
                  n
                    .map(function (e) {
                      return e
                        ? (function (e) {
                            return a({ conversationIds: r, isMessageItem: !0, messageIds: n })(e)
                          })(e)
                        : null
                    })
                    .slice(0, e._messagesBucketSize),
                )
              }),
              v()(s()(e), '_renderPeopleSection', function () {
                var t = e.props,
                  n = t.peopleSearchConversationIds,
                  r = t.renderInboxItem
                return y.createElement(
                  y.Fragment,
                  null,
                  e._renderDMHeader({ icon: Nn.a, headerText: Wn }),
                  n
                    .map(function (e) {
                      return e ? r({ conversationIds: n })(e) : null
                    })
                    .slice(0, e._peopleBucketSize),
                )
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t = this.props,
                    n = t.fetchStatus,
                    r = t.module
                  e.module !== r && n !== jn.a.FAILED && this._handleFetch()
                },
              },
              {
                key: 'componentDidMount',
                value: function () {
                  this._handleFetch()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    n = e.loadingLabel
                  return y.createElement(Dn.a, {
                    accessibilityLabel: n,
                    fetchStatus: t,
                    onRequestRetry: this._handleFetch,
                    render: this._renderSearchResults,
                  })
                },
              },
            ]),
            n
          )
        })(y.Component)
      v()(Kn, 'contextType', g.a)
      var Gn = $e.a.create(function (e) {
          return {
            header: {
              backgroundColor: e.colors.cellBackground,
              paddingLeft: e.spaces.space16,
              paddingVertical: e.spaces.space12,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderBottomStyle: 'solid',
              borderBottomWidth: e.borderWidths.small,
              borderBottomColor: e.colors.borderColor,
              borderTopStyle: 'solid',
              borderTopWidth: e.borderWidths.small,
              borderTopColor: e.colors.borderColor,
            },
          }
        }),
        qn = Mn(Kn),
        Yn = n('wAC9')
      function Xn(e, t) {
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
      function Qn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Xn(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Xn(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var Zn,
        Jn = function (e) {
          return Object(Yn.a)({
            contextSuffix: 'DM_SEARCH_SLICE',
            getFetchApiEndpoint: function (e) {
              return e.DirectMessagesGraphQL.fetchDMAllSearch
            },
            sliceKey: ''.concat(nt.e, '-').concat(e),
            getEndpointParams: function (t) {
              return Qn(Qn({}, t), {}, { query: e })
            },
            mapEntitiesToActions: Zt,
          })
        },
        $n = function (e, t) {
          return t.query
        },
        er = Object(E.a)().propsFromState(function () {
          return {
            sliceModule: Object(V.createSelector)($n, function (e) {
              return e ? Jn(e) : void 0
            }),
          }
        })(function (e) {
          var t = e.loadingLabel,
            n = e.location,
            r = e.query,
            a = e.renderEmptyState,
            i = e.renderInboxItem,
            o = e.sliceModule
          return o
            ? y.createElement(qn, {
                loadingLabel: t,
                location: n,
                module: o,
                query: r,
                renderEmptyState: a,
                renderInboxItem: i,
              })
            : a()
        }),
        tr = A.selectRecentSearches,
        nr = function (e, t) {
          return t.query ? A.selectSearchConversations(e, t.query) : []
        },
        rr = function (e, t) {
          return t.query ? A.selectSearchFetchStatus(e, t.query) : M.a.LOADED
        },
        ar = function (e, t) {
          return t.conversationIds || []
        },
        ir = function (e, t) {
          return null != e && e.length
            ? t.filter(function (t) {
                return e.indexOf(t) > -1
              })
            : e
        },
        or = Object(E.a)()
          .propsFromState(function () {
            return { conversationIds: ar, recentSearches: tr, searchFetchStatus: rr, searchConversationIds: nr }
          })
          .adjustStateProps(function (e) {
            var t = e.conversationIds,
              n = e.recentSearches,
              r = e.searchConversationIds
            return {
              conversationIds: t,
              recentSearches: n,
              searchFetchStatus: e.searchFetchStatus,
              searchConversationIds: ir(r, t),
            }
          })
          .propsFromActions(function () {
            return {
              addRecentSearch: A.addRecentSearches,
              createLocalApiErrorHandler: Object(j.createLocalApiErrorHandlerWithContextFactory)(
                'DIRECT_MESSAGES_SEARCH',
              ),
              search: A.searchConversations,
              clearRecentSearch: A.clearRecentSearch,
              clearRecentSearches: A.clearRecentSearches,
            }
          }),
        cr = n('VY6S'),
        sr = n('s14A'),
        lr = n('VPW4'),
        ur = n('mN6z')
      function dr(e, t) {
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
      function pr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? dr(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : dr(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var fr = void 0 !== Zn ? Zn : (Zn = n('y59G')),
        hr = 'DM_MESSAGE_SEARCH',
        mr = { context: hr },
        vr = function (e) {
          return e
        },
        yr = function (e) {
          var t,
            n,
            r,
            a,
            i,
            o = e.footer,
            c = e.noItemsRenderer,
            s = e.onScrollEnd,
            l = e.renderInboxItem,
            u = e.searchTerm,
            d = Object(hn.c)(),
            p = Object(yn.a)(fr, { query: u }),
            f = p.data,
            h = p.fetchNext,
            m = p.hasNext,
            v = null == f || null === (t = f.dm_message_slice_result) || void 0 === t ? void 0 : t.items,
            b =
              null == f ||
              null === (n = f.dm_message_slice_result) ||
              void 0 === n ||
              null === (r = n.items) ||
              void 0 === r
                ? void 0
                : r.map(function (e) {
                    var t, n
                    return null == e ||
                      null === (t = e.dm_event) ||
                      void 0 === t ||
                      null === (n = t.legacy) ||
                      void 0 === n
                      ? void 0
                      : n.conversation
                  }),
            g = Object(sn.b)(b, [qt.a]),
            _ = Object(sn.b)(v, [qt.b]),
            E = pr(pr({}, null == g ? void 0 : g.entities), null == _ ? void 0 : _.entities),
            O =
              ((a = f),
              (i = y.useRef()),
              y.useEffect(function () {
                i.current = a
              }),
              i.current)
          return (
            y.useEffect(
              function () {
                Object(ur.a)(f, O) || d(Zt(E, !0))
              },
              [E, f, O, d],
            ),
            y.createElement(cn.a, {
              cacheKey: hr,
              footer: m ? null : o,
              identityFunction: vr,
              items: null == _ ? void 0 : _.result,
              noItemsRenderer: c,
              onNearEnd: h,
              onScrollEnd: s,
              renderer: l({
                conversationIds: null == g ? void 0 : g.result,
                isMessageItem: !0,
                messageIds: null == _ ? void 0 : _.result,
              }),
              withoutHeadroom: !0,
            })
          )
        },
        br = $e.a.create(function (e) {
          return { activityIndicatior: { paddingVertical: 250 } }
        })
      function gr(e) {
        return y.createElement(
          fn.a,
          { errorConfig: mr },
          y.createElement(
            y.Suspense,
            { fallback: y.createElement(lr.a, { style: br.activityIndicatior }) },
            y.createElement(yr, e),
          ),
        )
      }
      var _r = n('j7Bv'),
        Er = n('VwDm'),
        Or = n('hOZg')
      function Sr(e) {
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
      var Cr = I.a.dbd5d40f,
        wr = (function (e) {
          u()(n, e)
          var t = Sr(n)
          function n() {
            return a()(this, n), t.apply(this, arguments)
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.clearRecentSearch,
                    n = e.handleRecentSearchClick,
                    r = e.recentSearch,
                    a = y.createElement(_r.a, { Icon: Er.a, color: 'neutral', size: 'xLarge', style: Rr.searchIcon }),
                    i = [Rr.listItemView, Rr.bottomBorder]
                  return y.createElement(
                    Ze.a,
                    { onPress: n, style: i },
                    y.createElement(
                      je.a,
                      null,
                      y.createElement(
                        Je.a,
                        { avatarCell: a, avatarSize: 'xLarge', cellStyle: Rr.avatarColumn },
                        y.createElement(
                          je.a,
                          { style: Rr.container },
                          y.createElement(C.b, { numberOfLines: 1 }, r),
                          y.createElement(Ye.a, {
                            accessibilityLabel: Cr,
                            borderColor: 'transparent',
                            icon: y.createElement(Or.a, null),
                            onPress: t,
                            type: 'brandText',
                          }),
                        ),
                      ),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(y.PureComponent),
        Rr = $e.a.create(function (e) {
          return {
            container: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
            searchIcon: { marginRight: e.spaces.space12, padding: e.spaces.space4 },
            avatarColumn: { flexGrow: 1, minWidth: '32px' },
            bottomBorder: {
              borderBottomStyle: 'solid',
              borderBottomWidth: e.borderWidths.small,
              borderBottomColor: e.colors.borderColor,
            },
            listItemView: {
              backgroundColor: e.colors.cellBackground,
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.spaces.space12,
              width: '100%',
            },
          }
        }),
        Ir = wr
      function kr(e, t) {
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
      function Pr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? kr(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : kr(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var xr = function (e) {
        return Object(Yn.a)({
          contextSuffix: 'DM_GROUP_SEARCH_SLICE',
          getFetchApiEndpoint: function (e) {
            return e.DirectMessagesGraphQL.fetchDMGroupSearch
          },
          sliceKey: ''.concat(nt.e, '-groups-').concat(e),
          getEndpointParams: function (t) {
            return Pr(Pr({}, t), {}, { query: e })
          },
          mapEntitiesToActions: Zt,
        })
      }
      function Tr(e, t) {
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
      function Ar(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Tr(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Tr(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var Mr = function (e) {
          return Object(Yn.a)({
            contextSuffix: 'DM_PEOPLE_SEARCH_SLICE',
            getFetchApiEndpoint: function (e) {
              return e.DirectMessagesGraphQL.fetchDMPeopleSearch
            },
            sliceKey: ''.concat(nt.e, '-people-').concat(e),
            getEndpointParams: function (t) {
              return Ar(Ar({}, t), {}, { query: e })
            },
            mapEntitiesToActions: Zt,
          })
        },
        jr = function (e, t) {
          return t.query
        },
        Dr = function (e, t) {
          return t.tabType
        },
        Lr = Object(E.a)().propsFromState(function () {
          return {
            sliceModule: Object(V.createSelector)(Dr, jr, function (e, t) {
              var n = t && e === nt.f.PEOPLE
              return t && e === nt.f.GROUPS ? xr(t) : n ? Mr(t) : void 0
            }),
          }
        }),
        Fr = n('FS1z'),
        Br = Lr(function (e) {
          var t = e.footer,
            n = e.onScrollEnd,
            r = e.renderEmptyState,
            a = e.renderInboxItem,
            i = e.sliceModule
          return i
            ? y.createElement(Fr.a, {
                footer: t,
                module: i,
                noItemsRenderer: r,
                onScrollEnd: n,
                renderer: a({ conversationIds: [] }),
                withoutHeadroom: !0,
              })
            : r()
        }),
        Nr = n('IG4P'),
        Hr = n('RJrc'),
        Ur = n('TnY3'),
        Vr = n('FIs5'),
        Wr = n('6OUF'),
        zr = n('k/OQ'),
        Kr = n('95Se')
      function Gr(e, t) {
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
      function qr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Gr(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Gr(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function Yr(e) {
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
      var Xr = 'dmSearchInbox',
        Qr = function (e) {
          return e
        },
        Zr = I.a.b08821f3,
        Jr = I.a.a66ac766,
        $r = I.a.fe61929d,
        ea = I.a.a846382a,
        ta = I.a.b9dae4f4,
        na = I.a.e7fb2027,
        ra = I.a.b92a21d8,
        aa = I.a.jdc67c42,
        ia = I.a.e8581ccd,
        oa = I.a.f08940ab,
        ca = I.a.gaae1fd5,
        sa = I.a.f8321d82,
        la = I.a.c94ac69d,
        ua = I.a.a2f8105f,
        da = I.a.g2fd3205,
        pa = I.a.fb3c8e74,
        fa = (function (e) {
          u()(n, e)
          var t = Yr(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              v()(s()(e), 'state', { debouncedQuery: '', isLoadingMore: !1, isRefreshing: !1 }),
              v()(
                s()(e),
                '_messageSearchEnabled',
                e.context.featureSwitches.isTrue('dm_inbox_search_message_results_enabled'),
              ),
              v()(
                s()(e),
                '_modularSearchEnabled',
                e.context.featureSwitches.isTrue('dm_inbox_search_modular_results_enabled'),
              ),
              v()(s()(e), '_setInputRef', function (t) {
                e._textInputRef = t
              }),
              v()(s()(e), '_renderEmptyDMSearchInbox', function () {
                var t = e.props,
                  n = t.analytics,
                  r = t.query,
                  a = e.state.debouncedQuery
                return a && r
                  ? (n.scribe({ component: 'search', element: 'results', action: 'empty' }),
                    y.createElement(Vr.a, {
                      buttonLink: '/messages/compose',
                      buttonText: oa,
                      header: ra({ query: a }),
                      message: e._messageSearchEnabled ? ia : aa,
                      onButtonPress: e._handleComposeButtonPress,
                    }))
                  : y.createElement(
                      je.a,
                      { style: ha.emptyState },
                      y.createElement(C.b, { align: 'center', color: 'gray700' }, ca),
                    )
              }),
              v()(s()(e), '_renderRecentSearches', function () {
                var t = e.props,
                  n = t.analytics,
                  r = t.query,
                  a = t.recentSearches
                return a.length && !r
                  ? y.createElement(
                      y.Fragment,
                      null,
                      y.createElement(Gt, {
                        analytics: n,
                        clearRecentSearches: e._clearRecentSearches,
                        headerText: pa,
                        withClearButton: !0,
                      }),
                      a.map(function (t) {
                        return y.createElement(Ir, {
                          clearRecentSearch: function (n) {
                            return e._handleClearRecentSearch(n, t)
                          },
                          handleRecentSearchClick: function () {
                            return e._handleRecentSearchClick(t)
                          },
                          key: t,
                          recentSearch: t,
                        })
                      }),
                    )
                  : e._renderEmptyDMSearchInbox()
              }),
              v()(s()(e), '_renderAllDMSearchResultsTab', function () {
                var t = e.props,
                  n = t.location,
                  r = t.renderInboxItem,
                  a = e.state.debouncedQuery
                return a
                  ? y.createElement(er, {
                      loadingLabel: Jr,
                      location: n,
                      query: a,
                      renderEmptyState: e._renderEmptyDMSearchInbox,
                      renderInboxItem: r,
                    })
                  : e._renderEmptyDMSearchInbox()
              }),
              v()(s()(e), '_renderConversationsTab', function (t) {
                var n = e.props.renderInboxItem,
                  r = e.state.debouncedQuery
                return y.createElement(Br, {
                  footer: e._renderFooter(),
                  onScrollEnd: e._handleScrollEnd,
                  query: r,
                  renderEmptyState: e._renderEmptyDMSearchInbox,
                  renderInboxItem: n,
                  tabType: t ? nt.f.GROUPS : nt.f.PEOPLE,
                })
              }),
              v()(s()(e), '_renderMessagesTab', function () {
                var t = e.props.renderInboxItem,
                  n = e.state.debouncedQuery
                return n
                  ? y.createElement(gr, {
                      footer: e._renderFooter(),
                      noItemsRenderer: e._renderEmptyDMSearchInbox,
                      onScrollEnd: e._handleScrollEnd,
                      renderInboxItem: t,
                      searchTerm: n,
                    })
                  : e._renderEmptyDMSearchInbox()
              }),
              v()(s()(e), '_renderTabContent', function () {
                var t = e.props.location
                switch (((null == t ? void 0 : t.state) || {}).tab) {
                  case da:
                    return e._renderConversationsTab(!1)
                  case la:
                    return e._renderConversationsTab(!0)
                  case ua:
                    return e._renderMessagesTab()
                  default:
                    return e._renderAllDMSearchResultsTab()
                }
              }),
              v()(s()(e), '_renderSearchResults', function () {
                var t = e.props,
                  n = t.accessibilityTitle,
                  r = t.renderInboxItem,
                  a = t.searchConversationIds,
                  i = e.state.isRefreshing
                return y.createElement(
                  sr.a,
                  null,
                  y.createElement(
                    Nr.a,
                    { isRefreshing: i, onRefresh: e._handlePullToRefresh },
                    y.createElement(cn.a, {
                      accessibilityRole: 'tablist',
                      accessibilityTitle: n,
                      anchoring: on,
                      assumedItemHeight: 100,
                      cacheKey: Xr,
                      footer: e._renderFooter(),
                      identityFunction: Qr,
                      items: a,
                      noItemsRenderer: e._renderRecentSearches,
                      onNearEnd: e._handleNearEnd,
                      onScrollEnd: e._handleScrollEnd,
                      renderer: r({ conversationIds: a }),
                      withoutHeadroom: !0,
                    }),
                  ),
                )
              }),
              v()(s()(e), '_renderFooter', function () {
                return e.state.isLoadingMore
                  ? y.createElement(Hr.a, null)
                  : y.createElement(
                      je.a,
                      { style: ha.footerContainer },
                      y.createElement(C.b, { align: 'center', size: 'body', weight: 'bold' }, na),
                      y.createElement(
                        Qe.a,
                        { interactiveStyles: null },
                        y.createElement(
                          C.b,
                          {
                            align: 'center',
                            color: 'primary',
                            onPress: e._handleFooterClick,
                            size: 'subtext2',
                            withInteractiveStyling: !0,
                          },
                          ta,
                        ),
                      ),
                    )
              }),
              v()(s()(e), '_clearRecentSearches', function () {
                var t = e.props,
                  n = t.analytics,
                  r = t.clearRecentSearches
                n.scribe({ component: 'recent_search', action: 'clear' }), r()
              }),
              v()(s()(e), '_handleComposeButtonPress', function () {
                e.props.analytics.scribe({ component: 'search', element: 'empty_results', action: 'compose' })
              }),
              v()(s()(e), '_handleFooterClick', function () {
                var t, n, r
                e._textInputRef && e._textInputRef.focus(),
                  null === (t = e._textInputRef) ||
                    void 0 === t ||
                    null === (n = t.textInput) ||
                    void 0 === n ||
                    null === (r = n.textInputNode) ||
                    void 0 === r ||
                    r.select()
              }),
              v()(s()(e), '_handleRefetchSearch', function () {
                var t = e.props,
                  n = t.analytics,
                  r = t.createLocalApiErrorHandler,
                  a = t.search,
                  i = e.state.debouncedQuery
                a &&
                  i &&
                  (n.scribe({ component: 'search', element: 'retry', action: 'click' }),
                  a({ query: i.toLowerCase(), preserveResults: !1, fetchNextPage: !1 }).catch(r()))
              }),
              v()(s()(e), '_handlePullToRefresh', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler,
                  r = t.search,
                  a = e.state.debouncedQuery
                e.setState({ isRefreshing: !0 }),
                  r &&
                    a &&
                    r({ query: a.toLowerCase(), preserveResults: !0, fetchNextPage: !1 })
                      .then(function () {
                        return e.setState({ isRefreshing: !1 })
                      })
                      .catch(function (t) {
                        return e.setState({ isRefreshing: !1 }), n()(t)
                      })
              }),
              v()(s()(e), '_handleSearchChangeInner', function (t) {
                var n = e.props,
                  r = n.createLocalApiErrorHandler,
                  a = n.onQueryChange,
                  i = n.search
                a(t),
                  e.setState({ debouncedQuery: t }),
                  i &&
                    t &&
                    !e._modularSearchEnabled &&
                    i({ query: t, preserveResults: !1, fetchNextPage: !1 }).catch(r())
              }),
              v()(s()(e), '_handleSearchChangeDebounced', Object(cr.a)(e._handleSearchChangeInner, 200)),
              v()(s()(e), '_handleSearchChange', function (t) {
                var n = t.currentTarget.value,
                  r = e.props.onQueryChange
                ;((n && n.trim()) || !n) && (r(n), e._handleSearchChangeDebounced(n))
              }),
              v()(s()(e), '_handleNearEnd', function () {
                var t = e.props,
                  n = t.analytics,
                  r = t.search,
                  a = e.state.debouncedQuery
                e.setState({ isLoadingMore: !0 }),
                  a &&
                    (n.scribe({ component: 'search', element: 'results', action: 'get_older' }),
                    r({ query: a, preserveResults: !1, fetchNextPage: !0 }).finally(function () {
                      return e.setState({ isLoadingMore: !1 })
                    }))
              }),
              v()(s()(e), '_handleScrollEnd', function () {
                var t = e.props,
                  n = t.addRecentSearch,
                  r = t.analytics,
                  a = t.query
                e.state.debouncedQuery && a && (n(a), r.scribe({ component: 'recent_search', action: 'add' }))
              }),
              v()(s()(e), '_handleSearchClear', function () {
                return e._handleSearchChangeInner('')
              }),
              v()(s()(e), '_handleHideRecentSearches', function () {
                ;(0, e.props.hideRecentSearches)()
              }),
              v()(s()(e), '_handleAddRecentSearch', function (t) {
                var n = t.currentTarget.value,
                  r = e.props,
                  a = r.addRecentSearch,
                  i = r.analytics
                n &&
                  (a(n),
                  i.scribe({ component: 'recent_search', action: 'add' }),
                  e._textInputRef && e._textInputRef.blur())
              }),
              v()(s()(e), '_handleRecentSearchClick', function (t) {
                var n = e.props,
                  r = n.analytics
                ;(0, n.onQueryChange)(t),
                  r.scribe({ component: 'recent_search', action: 'click' }),
                  e._handleSearchChangeInner(t)
              }),
              v()(s()(e), '_handleClearRecentSearch', function (t, n) {
                var r = e.props,
                  a = r.analytics,
                  i = r.clearRecentSearch
                t.stopPropagation(), t.preventDefault(), a.scribe({ component: 'recent_search', action: 'clear' }), i(n)
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._textInputRef && this._textInputRef.focus()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t = this.props,
                    n = t.analytics,
                    r = t.query,
                    a = t.recentSearches
                  e.query || !r || a.includes(r) || n.scribe({ component: 'search', action: 'began_typing' })
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.location,
                    n = e.query,
                    r = e.searchFetchStatus,
                    a = !(
                      (this.context.featureSwitches.isTrue('dm_vdl_enabled') &&
                        this.context.featureSwitches.isTrue('dm_vdl_inbox_p0_enabled')) ||
                      (this._modularSearchEnabled && n)
                    ),
                    i = [ha.searchInput, a ? ha.searchInputBorder : void 0],
                    o = ((null == t ? void 0 : t.state) || {}).tab,
                    c = [sa, da, la]
                  this._messageSearchEnabled && c.push(ua)
                  var s = c.map(function (e) {
                    return {
                      key: e,
                      label: e,
                      isActive: function () {
                        return o === e || (!o && e === sa)
                      },
                      to: qr(qr({}, t), {}, { state: qr(qr({}, t.state), {}, { tab: e }) }),
                    }
                  })
                  return y.createElement(
                    y.Fragment,
                    null,
                    y.createElement(
                      je.a,
                      { style: i },
                      y.createElement(Ye.a, {
                        accessibilityLabel: Zr,
                        icon: y.createElement(Kr.a, null),
                        onPress: this._handleHideRecentSearches,
                        pullLeft: !0,
                        type: 'primaryText',
                      }),
                      y.createElement(Wr.a, {
                        Icon: Er.a,
                        autoComplete: 'off',
                        onChange: this._handleSearchChange,
                        onClear: this._handleSearchClear,
                        onSubmitEditing: this._handleAddRecentSearch,
                        placeholder: this._messageSearchEnabled ? ea : $r,
                        ref: this._setInputRef,
                        value: n,
                        withClearButton: !0,
                      }),
                    ),
                    this._modularSearchEnabled && (n || o === da || o === la)
                      ? y.createElement(y.Fragment, null, y.createElement(zr.a, { links: s }), this._renderTabContent())
                      : y.createElement(Dn.a, {
                          accessibilityLabel: Jr,
                          fetchStatus: r,
                          onRequestRetry: this._handleRefetchSearch,
                          render: this._renderSearchResults,
                        }),
                  )
                },
              },
            ]),
            n
          )
        })(y.Component)
      v()(fa, 'contextType', g.a), v()(fa, 'defaultProps', { recentSearches: [], searchConversationIds: [], query: '' })
      var ha = $e.a.create(function (e) {
          return {
            emptyState: { marginTop: e.spaces.space32 },
            searchInput: {
              backgroundColor: e.colors.cellBackground,
              padding: e.spaces.space12,
              flexDirection: 'row',
              alignItems: 'center',
              zIndex: 1,
            },
            searchInputBorder: {
              borderBottomColor: e.colors.borderColor,
              borderBottomStyle: 'solid',
              borderBottomWidth: e.borderWidths.small,
            },
            footerContainer: { marginVertical: e.spaces.space32 },
          }
        }),
        ma = Object(Ur.a)(or(fa)),
        va = n('dwig'),
        ya = n('QB0K'),
        ba = n('Avzu'),
        ga = n('FRNI')
      function _a(e) {
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
      var Ea = I.a.h845f281,
        Oa = I.a.f325afc3,
        Sa = (function (e) {
          u()(n, e)
          var t = _a(n)
          function n() {
            return a()(this, n), t.apply(this, arguments)
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  return y.createElement(ya.a, {
                    accessibilityLabel: Ea,
                    href: '/messages/compose',
                    icon: y.createElement(ba.a, null),
                    label: Ea,
                    scribeComponent: 'floating_dm_button',
                    shortLabel: Oa,
                    testID: ga.a.message,
                  })
                },
              },
            ]),
            n
          )
        })(y.PureComponent),
        Ca = n('tI3i'),
        wa = n.n(Ca),
        Ra = n('883S'),
        Ia = n('yoO3'),
        ka = n('GSsg'),
        Pa = n('2g+p'),
        xa = n('mw9i'),
        Ta = n('BcsE'),
        Aa = n('+d3d')
      function Ma(e) {
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
      var ja = function (e) {
          return e
        },
        Da = I.a.a66ac766,
        La = I.a.fe61929d,
        Fa = I.a.a846382a,
        Ba = (function (e) {
          u()(n, e)
          var t = Ma(n)
          function n(e, r) {
            var i
            return (
              a()(this, n),
              (i = t.call(this, e, r)),
              v()(s()(i), 'state', { showSearchView: !1, searchQuery: '' }),
              v()(
                s()(i),
                '_enablePinnedInbox',
                i.context.featureSwitches.isTrue('dm_conversation_labels_pinned_enabled') &&
                  i.context.featureSwitches.isTrue('direct_messages_incremental_holdback_2022h1'),
              ),
              v()(
                s()(i),
                '_messageSearchEnabled',
                i.context.featureSwitches.isTrue('dm_inbox_search_message_results_enabled'),
              ),
              v()(
                s()(i),
                '_modularSearchEnabled',
                i.context.featureSwitches.isTrue('dm_inbox_search_modular_results_enabled'),
              ),
              v()(s()(i), '_render', function () {
                var e = i.props.withPinnedInbox,
                  t = i.state.showSearchView,
                  n = i._enablePinnedInbox && e ? i._renderPinnedInbox : i._renderInbox
                return t ? i._renderFocusedSearch() : n()
              }),
              v()(s()(i), '_renderFocusedSearch', function () {
                var e = i.props,
                  t = e.accessibilityTitle,
                  n = e.analytics,
                  r = e.conversationIds,
                  a = i.state.searchQuery
                return y.createElement(ma, {
                  accessibilityTitle: t,
                  analytics: n,
                  conversationIds: r,
                  hideRecentSearches: i._hideRecentSearches,
                  onQueryChange: i._handleQueryChange,
                  query: a,
                  renderInboxItem: i._renderInboxItem,
                })
              }),
              v()(s()(i), '_renderInbox', function () {
                var e = i.props,
                  t = e.accessibilityTitle,
                  n = e.conversationIds,
                  r = e.footer,
                  a = e.isDrawer,
                  o = e.isRefreshing,
                  c = e.renderEmptyDMInbox,
                  s = e.virtualScrollerCacheKey
                return y.createElement(
                  Nr.a,
                  { isRefreshing: o, onRefresh: i._handlePullToRefresh },
                  s && n
                    ? y.createElement(cn.a, {
                        accessibilityRole: 'tablist',
                        accessibilityTitle: t,
                        anchoring: on,
                        assumedItemHeight: 100,
                        cacheKey: s,
                        footer: r,
                        header: i._renderHeader(),
                        identityFunction: ja,
                        items: n,
                        noItemsRenderer: c,
                        onNearEnd: i._handleNearEnd,
                        renderer: i._renderInboxItem({ conversationIds: n }),
                        withKeyboardShortcuts: !a,
                        withoutHeadroom: !0,
                      })
                    : null,
                )
              }),
              v()(s()(i), '_handleNearEnd', function () {
                i._handleHistoryRequest()
              }),
              v()(s()(i), '_handleQueryChange', function (e) {
                i.setState({ searchQuery: e })
              }),
              v()(s()(i), '_handleSearchChange', function (e) {
                e.currentTarget.value
                i.state.showSearchView || i.setState({ showSearchView: !0 })
              }),
              v()(s()(i), '_handleSearchClick', function () {
                i.props.analytics.scribe({ component: 'search', action: 'click' }), i.setState({ showSearchView: !0 })
              }),
              v()(s()(i), '_hideRecentSearches', function () {
                i.setState({ showSearchView: !1, searchQuery: '' })
              }),
              v()(s()(i), '_renderInboxItem', function (e) {
                var t = e.conversationIds,
                  n = e.isMessageItem,
                  r = void 0 !== n && n,
                  a = e.messageIds,
                  o = e.togglePinState
                return function (e, n) {
                  var c = i.context.loggedInUserId,
                    s = i.props.location,
                    l = i.state.searchQuery,
                    u = r ? (a || []).indexOf(e) : -1,
                    d = -1 !== u && null != t && t.length ? t[u] : null,
                    p = d ? e : '',
                    f = d || e,
                    h = { pathname: '/messages/'.concat(f), state: null == s ? void 0 : s.state },
                    m = f && null != t && t.length ? t.indexOf(f) : null,
                    v = Object(Ta.a)(m) ? m + 1 : 0
                  return (
                    wa()(!!c, 'loggedInUserId must be defined'),
                    n && n(!0),
                    y.createElement(b.a, { exact: !1, path: h.pathname }, function (e) {
                      return y.createElement(Ht, {
                        conversationId: f,
                        inboxType: i.props.inboxType,
                        isActive: e,
                        isMessageItem: r,
                        key: f,
                        link: h,
                        messageId: p,
                        onClick: i._handleConversationClick,
                        perspective: c,
                        position: v,
                        searchQuery: l,
                        togglePinState: o,
                      })
                    })
                  )
                }
              }),
              v()(s()(i), '_renderPinnedInbox', function () {
                var e = i.props,
                  t = e.accessibilityTitle,
                  n = e.conversationIds,
                  r = e.footer,
                  a = e.isDrawer,
                  o = e.renderEmptyDMInbox,
                  c = e.virtualScrollerCacheKey
                return n.length
                  ? y.createElement(xn, {
                      accessibilityTitle: t,
                      cacheKey: c,
                      conversationIds: n,
                      footer: r,
                      header: i._renderHeader(),
                      onNearEnd: i._handleNearEnd,
                      renderEmptyDMInbox: o,
                      renderInboxItem: i._renderInboxItem,
                      withKeyboardShortcuts: !a,
                    })
                  : o()
              }),
              v()(s()(i), '_handleFetchInitialWrapper', function () {
                i._handleFetchInitial()
              }),
              v()(s()(i), '_handleFetchInitial', function () {
                var e = i.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.fetchInboxIfNeeded,
                  r = e.fetchUpdates
                return n()
                  .then(i._updateLastSeenEventId, t())
                  .then(function () {
                    i._updatePolling.start()
                  })
                  .then(function () {
                    return r().catch(t())
                  })
              }),
              v()(s()(i), '_handleConversationClick', function (e, t, n, r) {
                var a = i.props,
                  o = a.analytics,
                  c = a.customCellClick,
                  s = null != n && n.participants ? Object.keys(n.participants).length : 0,
                  l = (null == n ? void 0 : n.type) === A.CONVERSATION_TYPE.GROUP
                o.scribe({
                  element: 'thread',
                  action: 'click',
                  data: {
                    event_value: i.state.searchQuery.length,
                    conversation_id: t,
                    conversation_participant_count: s,
                    conversation_type: l ? nt.g.GROUP : nt.g.ONE_TO_ONE,
                    position: r,
                  },
                }),
                  c && c(e, t)
              }),
              v()(s()(i), '_handleEmptyDMInboxImpression', function () {
                i.props.analytics.scribe({ component: 'empty_message', action: 'impression' })
              }),
              v()(s()(i), '_handlePullToRefresh', function () {
                var e = i.props,
                  t = e.createLocalApiErrorHandler
                ;(0, e.fetchInbox)().then(i._updateLastSeenEventId, t())
              }),
              v()(s()(i), '_updateLastSeenEventIdIfActive', function () {
                if ('background' !== Pa.a.currentState) return i._updateLastSeenEventId()
              }),
              v()(s()(i), '_renderHeader', function () {
                var e =
                    i.context.featureSwitches.isTrue('dm_vdl_enabled') &&
                    i.context.featureSwitches.isTrue('dm_vdl_inbox_p0_enabled'),
                  t = i.props,
                  n = t.renderStickyContent,
                  r = t.withDmSearch,
                  a = [Na.searchInput, e ? void 0 : Na.searchInputBorder]
                return y.createElement(
                  y.Fragment,
                  null,
                  r
                    ? y.createElement(
                        je.a,
                        { onClick: i._handleSearchClick, style: a },
                        y.createElement(Wr.a, {
                          Icon: Er.a,
                          autoComplete: 'off',
                          isCompact: !0,
                          onChange: i._handleSearchChange,
                          placeholder: i._messageSearchEnabled ? Fa : La,
                          withClearButton: !0,
                        }),
                      )
                    : null,
                  n ? n() : null,
                )
              }),
              v()(s()(i), '_updateLastSeenEventId', function () {
                var e = i.props,
                  t = e.createLocalApiErrorHandler
                return (0, e.updateLastSeenEventId)().catch(t())
              }),
              (i._fab = y.createElement(Sa, null)),
              i
            )
          }
          return (
            o()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.createLocalApiErrorHandler,
                    r = t.fetchInboxHistory,
                    a = t.fetchUpdates
                  return (
                    (this._updatePolling = new ka.a(
                      function () {
                        a().then(e._updateLastSeenEventIdIfActive, n(Ra.a))
                      },
                      { interval: 8e3 },
                    )),
                    (this._handleHistoryRequest = Object(Aa.a)(function () {
                      r.apply(void 0, arguments).catch(n())
                    }, 1e3)),
                    this._handleFetchInitial()
                  )
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._updatePolling.stop()
                },
              },
              {
                key: 'render',
                value: function () {
                  return y.createElement(
                    Ia.a,
                    null,
                    y.createElement(T, null),
                    y.createElement(
                      va.a,
                      { component: xa.a, fab: this._fab, style: Na.root },
                      y.createElement(Dn.a, {
                        accessibilityLabel: Da,
                        fetchStatus: this.props.fetchStatus,
                        onRequestRetry: this._handleFetchInitialWrapper,
                        render: this._render,
                      }),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(y.Component)
      v()(Ba, 'contextType', g.a),
        v()(Ba, 'defaultProps', {
          conversationIds: [],
          inboxType: tt.d.PRIMARY,
          isDrawer: !1,
          withDmSearch: !1,
          withPinnedInbox: !1,
        })
      var Na = $e.a.create(function (e) {
        return {
          root: { backgroundColor: e.colors.cellBackground, flexGrow: 1 },
          searchInput: { backgroundColor: e.colors.cellBackground, padding: e.spaces.space12, zIndex: 1 },
          searchInputBorder: {
            borderBottomColor: e.colors.borderColor,
            borderBottomStyle: 'solid',
            borderBottomWidth: '1px',
          },
        }
      })
      t.a = Object(Ur.a)(D(Ba))
    },
    prG5: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return x
      })
      n('OZaJ')
      var r = n('97Jx'),
        a = n.n(r),
        i = n('m3Bd'),
        o = n.n(i),
        c = n('VrFO'),
        s = n.n(c),
        l = n('Y9Ll'),
        u = n.n(l),
        d = n('1Pcy'),
        p = n.n(d),
        f = n('5Yy7'),
        h = n.n(f),
        m = n('N+ot'),
        v = n.n(m),
        y = n('AuHH'),
        b = n.n(y),
        g = n('KEM+'),
        _ = n.n(g),
        E = (n('2G9S'), n('ERkP')),
        O = n('nT9l'),
        S = n('3XMw'),
        C = n.n(S),
        w = 'image',
        R = n('TIdA'),
        I = n('a6qo')
      function k(e) {
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
            r = b()(e)
          if (t) {
            var a = b()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return v()(this, n)
        }
      }
      var P = C.a.f93bb3ee,
        x = (function (e) {
          h()(n, e)
          var t = k(n)
          function n() {
            var e
            s()(this, n)
            for (var r = arguments.length, i = new Array(r), c = 0; c < r; c++) i[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              _()(p()(e), '_renderContent', function (t) {
                var n = t.resourceSelectionHandler,
                  r = t.useMinimumData,
                  i = e.props,
                  c = i.accessibilityLabel,
                  s = (i.hideAcceptOverlay, i.shouldShowAltLabel),
                  l = o()(i, ['accessibilityLabel', 'hideAcceptOverlay', 'shouldShowAltLabel'])
                return E.createElement(
                  E.Fragment,
                  null,
                  E.createElement(
                    R.a,
                    a()({}, l, { accessibilityLabel: c, onVariantSelection: n, previewMode: r, testID: w }),
                  ),
                  s ? E.createElement(I.a, { align: 'left', altLabel: c }) : null,
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
                  var e = this.props,
                    t = e.hideAcceptOverlay,
                    n = e.image
                  return E.createElement(O.a, {
                    acceptLabel: P,
                    hideAcceptOverlay: t,
                    renderContent: this._renderContent,
                    resourceId: 'string' == typeof n ? n : n.url,
                  })
                },
              },
            ]),
            n
          )
        })(E.Component)
    },
    rQjK: function (e, t, n) {
      'use strict'
      n.r(t)
      var r,
        a,
        i = {
          fragment: {
            argumentDefinitions: (r = [
              { defaultValue: null, kind: 'LocalArgument', name: 'conversation_id' },
              { defaultValue: null, kind: 'LocalArgument', name: 'label_type' },
            ]),
            kind: 'Fragment',
            metadata: null,
            name: 'DMPinnedInboxDelete_Mutation',
            selections: (a = [
              {
                alias: null,
                args: [
                  { kind: 'Variable', name: 'conversation_id', variableName: 'conversation_id' },
                  { kind: 'Variable', name: 'label_type', variableName: 'label_type' },
                ],
                kind: 'ScalarField',
                name: 'dm_conversation_label_delete',
                storageKey: null,
              },
            ]),
            type: 'Mutation',
            abstractKey: null,
          },
          kind: 'Request',
          operation: { argumentDefinitions: r, kind: 'Operation', name: 'DMPinnedInboxDelete_Mutation', selections: a },
          params: {
            id: '_TQxP2Rb0expwVP9ktGrTQ',
            metadata: {},
            name: 'DMPinnedInboxDelete_Mutation',
            operationKind: 'mutation',
            text: null,
          },
        }
      ;(i.hash = 'f0ba5e0b671c54ae94c7322d3036a375'), (t.default = i)
    },
    tZH3: function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        a = n('3XMw'),
        i = n.n(a),
        o = n('MWbm'),
        c = n('CKsB'),
        s = n('/yvb'),
        l = n('rHpw'),
        u = n('hiGS'),
        d = n('pu5c'),
        p = n('zIWA'),
        f = i.a.fcd4d489,
        h = i.a.gbed8594,
        m = i.a.g9074da4,
        v = i.a.ad63377d,
        y = i.a.h09b49f7,
        b = i.a.i6b19b07,
        g = i.a.j7bb1a42,
        _ = i.a.ea200ba6,
        E = i.a.cfd2f35d,
        O = function (e) {
          var t = e.dismiss,
            n = e.flatBorders,
            a = e.isGroup,
            i = e.onBlockClick,
            l = e.onDeleteClick,
            O = e.onReportClick,
            C = e.requestorScreenName,
            w = e.showBlock,
            R = e.showCancel,
            I = e.showDelete,
            k = r.useCallback(
              function () {
                O && O(), t()
              },
              [t, O],
            ),
            P = r.useCallback(
              function () {
                i && i(), t()
              },
              [t, i],
            ),
            x = r.useCallback(
              function () {
                l && l(), t()
              },
              [t, l],
            )
          return r.createElement(
            o.a,
            { accessibilityRole: 'dialog', style: n ? S.flatCorners : S.roundCorners },
            I
              ? r.createElement(c.a, {
                  Icon: u.a,
                  actionSubText: y,
                  actionText: a ? m : v,
                  onClick: x,
                  textColor: 'red500',
                })
              : null,
            w
              ? r.createElement(c.a, { Icon: d.a, actionSubText: h, actionText: f({ screenName: C }), onClick: P })
              : null,
            r.createElement(c.a, { Icon: p.a, actionSubText: _, actionText: a ? b : g({ screenName: C }), onClick: k }),
            R ? r.createElement(s.a, { onPress: t, style: S.cancelButton, type: 'primaryOutlined' }, E) : null,
          )
        }
      O.defaultProps = { isGroup: !1, flatBorders: !1, showBlock: !1, showCancel: !1, showDelete: !1 }
      var S = l.a.create(function (e) {
        return {
          roundCorners: { borderRadius: e.borderRadii.xLarge },
          flatCorners: { borderRadius: e.borderRadii.none },
          cancelButton: { marginHorizontal: e.spaces.space16, marginVertical: e.spaces.space16 },
        }
      })
      t.a = O
    },
    uB9N: function (e, t, n) {
      'use strict'
      n('OZaJ'), n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('97Jx'),
        a = n.n(r),
        i = n('VrFO'),
        o = n.n(i),
        c = n('Y9Ll'),
        s = n.n(c),
        l = n('1Pcy'),
        u = n.n(l),
        d = n('5Yy7'),
        p = n.n(d),
        f = n('N+ot'),
        h = n.n(f),
        m = n('AuHH'),
        v = n.n(m),
        y = n('KEM+'),
        b = n.n(y),
        g = (n('uFXj'), n('z84I'), n('tVqn'), n('ERkP')),
        _ = n('1YZw'),
        E = n('zh9S'),
        O = n('P1r1'),
        S = n('AspN'),
        C = n('rxPX'),
        w = Object(C.a)()
          .propsFromState(function () {
            return { dataSaverMode: O.k }
          })
          .propsFromActions(function () {
            return {
              addMedia: S.b,
              addToast: _.b,
              processMultipleMedia: S.g,
              removeMediaUpload: S.i,
              scribeAction: E.c,
              preUploadMedia: S.e,
            }
          }),
        R = n('wpu3'),
        I = n('cOB2'),
        k = n('MWbm'),
        P = n('0FVZ'),
        x = n('Oe3h'),
        T = n('rHpw')
      var A = function (e) {
          var t = e.accessibilityLabel,
            n = e.accessibilityRole,
            r = e.children,
            i = e.onLayout,
            o = e.sideNavPresent,
            c = e.style,
            s = g.useContext(I.a)
          return o
            ? g.createElement(
                g.Fragment,
                null,
                g.createElement(k.a, { accessibilityLabel: t, accessibilityRole: n, onLayout: i, style: c }, r),
              )
            : g.createElement(
                P.a.BottomComposer,
                null,
                g.createElement(x.a, { id: 'DMComposerWrapper' }, function (e, o) {
                  return g.createElement(
                    k.a,
                    a()({ ref: e() }, o({ accessibilityLabel: t, accessibilityRole: n, onLayout: i, style: c })),
                    r,
                    g.createElement(k.a, { style: !1 === s.keyboardVisible && M.offsetBottom }),
                  )
                }),
              )
        },
        M = T.a.create(function () {
          return { offsetBottom: { paddingBottom: T.a.iPhoneOffsetBottom } }
        }),
        j = (n('2G9S'), n('jQ/y'), n('HPNB')),
        D = n('htQn'),
        L = n('t62R')
      function F(e) {
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
            var a = v()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      var B = (function (e) {
          p()(n, e)
          var t = F(n)
          function n() {
            var e
            o()(this, n)
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              b()(u()(e), '_handleClick', function () {
                var t = e.props,
                  n = t.id,
                  r = t.label
                ;(0, t.onClick)({ id: n, label: r })
              }),
              e
            )
          }
          return (
            s()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.description,
                    n = e.isWide,
                    r = e.label
                  return g.createElement(
                    D.a,
                    {
                      accessibilityRole: 'button',
                      onClick: this._handleClick,
                      style: [N.root, n && N.isWide, !n && N.isNarrow],
                    },
                    g.createElement(L.b, { weight: 'bold' }, r),
                    g.createElement(L.b, { color: 'gray700', size: 'subtext2' }, t),
                  )
                },
              },
            ]),
            n
          )
        })(g.Component),
        N = T.a.create(function (e) {
          return {
            root: {
              backgroundColor: e.colors.cellBackground,
              borderColor: e.colors.borderColor,
              borderStyle: 'solid',
              paddingLeft: '1rem',
              paddingVertical: '1rem',
            },
            isWide: {
              borderRadius: e.borderRadii.xLarge,
              paddingVertical: '0.5rem',
              borderWidth: e.borderWidths.small,
            },
            isNarrow: { borderTopWidth: e.borderWidths.small },
          }
        }),
        H = B,
        U = n('cHvH'),
        V = n('mw9i')
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
            r = v()(e)
          if (t) {
            var a = v()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      var z = (function (e) {
          p()(n, e)
          var t = W(n)
          function n() {
            var e
            o()(this, n)
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              b()(u()(e), '_handleOptionChoose', function (t) {
                var n = e.props
                return (0, n.onOptionChoose)(n.quickReplyOptions.id, t)
              }),
              e
            )
          }
          return (
            s()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props.quickReplyOptions.options,
                    n = 1 === t.length
                  return g.createElement(U.a, null, function (r) {
                    var a = r.windowWidth,
                      i = j.a.isTwoColumnLayout(a),
                      o = [i && K.isWide, i && n && K.oneButtonOnly, !i && K.isNarrow]
                    return g.createElement(
                      V.a,
                      { style: o, withGutter: i },
                      t.map(function (t) {
                        return e.renderOption(t, i)
                      }),
                    )
                  })
                },
              },
              {
                key: 'renderOption',
                value: function (e, t) {
                  return g.createElement(H, {
                    description: e.description,
                    id: e.id,
                    isWide: t,
                    key: e.id,
                    label: e.label,
                    onClick: this._handleOptionChoose,
                  })
                },
              },
            ]),
            n
          )
        })(g.Component),
        K = T.a.create(function (e) {
          return {
            oneButtonOnly: { gridTemplateColumns: '1fr' },
            isWide: {
              backgroundColor: e.colors.gray0,
              display: 'grid',
              gridColumnGap: e.spaces.space12,
              gridRowGap: e.spaces.space12,
              gridTemplateColumns: '1fr 1fr',
              paddingVertical: e.spaces.space12,
            },
            isNarrow: { maxHeight: '168px', overflow: 'auto' },
          }
        }),
        G = z,
        q = n('krmn'),
        Y = n('cIoY'),
        X = n('w3n3'),
        Q = n('MLl7'),
        Z = n('3XMw'),
        J = n.n(Z),
        $ = n('J2UM'),
        ee = n('VPdC'),
        te = n('pKoL'),
        ne = n('eyty'),
        re = n('oQhu'),
        ae = n('JYMr')
      function ie(e) {
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
            var a = v()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      var oe = [
          { waitMs: 1e3, progress: 0.1 },
          { waitMs: 1400, progress: 0.3 },
          { waitMs: 1800, progress: 0.5 },
          { waitMs: 2400, progress: 0.6 },
          { waitMs: 3e3, progress: 0.9 },
        ],
        ce = (function (e) {
          p()(n, e)
          var t = ie(n)
          function n() {
            var e
            o()(this, n)
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i]
            return (e = t.call.apply(t, [this].concat(a))), b()(u()(e), 'state', { currentStepIndex: -1 }), e
          }
          return (
            s()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._scheduleNextStep(0)
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._currentTimeoutId && clearTimeout(this._currentTimeoutId)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.state.currentStepIndex,
                    t = e >= 0 && e < oe.length ? oe[e].progress : 0
                  return g.createElement(ae.a, { progress: t })
                },
              },
              {
                key: '_scheduleNextStep',
                value: function (e) {
                  var t = this
                  e < oe.length &&
                    (this._currentTimeoutId = setTimeout(function () {
                      ;(t._currentTimeoutId = void 0), t.setState({ currentStepIndex: e }), t._scheduleNextStep(e + 1)
                    }, oe[e].waitMs))
                },
              },
            ]),
            n
          )
        })(g.Component)
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
            r = v()(e)
          if (t) {
            var a = v()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      var le = (function (e) {
          p()(n, e)
          var t = se(n)
          function n() {
            return o()(this, n), t.apply(this, arguments)
          }
          return (
            s()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.isSending,
                    n = e.isUploading,
                    r = e.progress
                  return t && !n
                    ? g.createElement(ce, null)
                    : g.createElement(ae.a, { progress: t ? Math.max(r, 0.02) : 0 })
                },
              },
            ]),
            n
          )
        })(g.PureComponent),
        ue = n('Dtul'),
        de = n('Es6L'),
        pe = 'dmComposerAttachments',
        fe = 'dmComposerTextInput',
        he = 'dmComposerSendButton',
        me = n('GZwR'),
        ve = n('aITJ'),
        ye = n('6OUF'),
        be = n('9Xij'),
        ge = n('/yvb'),
        _e = n('v6aA'),
        Ee = n('gpVt'),
        Oe = n('Lsrn'),
        Se = n('k/Ka')
      function Ce(e, t) {
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
      function we(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Ce(Object(n), !0).forEach(function (t) {
                b()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Ce(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var Re = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(Se.a)(
          'svg',
          we(
            we({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [Oe.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          g.createElement(
            'g',
            null,
            g.createElement('path', {
              d: 'M19 13.5H5c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5h14c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5zm0 6H5c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5h14c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5zm0-12H5c-.828 0-1.5-.672-1.5-1.5S4.172 4.5 5 4.5h14c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5z',
            }),
          ),
        )
      }
      Re.metadata = { width: 24, height: 24 }
      var Ie = Re
      function ke(e, t) {
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
      function Pe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ke(Object(n), !0).forEach(function (t) {
                b()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ke(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var xe = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(Se.a)(
          'svg',
          Pe(
            Pe({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [Oe.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          g.createElement(
            'g',
            null,
            g.createElement('path', {
              d: 'M19 13H5c-.553 0-1-.447-1-1s.447-1 1-1h14c.553 0 1 .447 1 1s-.447 1-1 1zm0 6H5c-.553 0-1-.447-1-1s.447-1 1-1h14c.553 0 1 .447 1 1s-.447 1-1 1zm0-12H5c-.553 0-1-.447-1-1s.447-1 1-1h14c.553 0 1 .447 1 1s-.447 1-1 1z',
            }),
          ),
        )
      }
      xe.metadata = { width: 24, height: 24 }
      var Te = xe,
        Ae = n('iySH')
      function Me(e, t) {
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
      function je(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Me(Object(n), !0).forEach(function (t) {
                b()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Me(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function De(e) {
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
            var a = v()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      var Le = J.a.ee230734,
        Fe = J.a.ca0ce0e4,
        Be = J.a.cdcebd22,
        Ne = J.a.ic8c615d,
        He = J.a.a04077c4,
        Ue = function (e) {
          return !(!e || !e.media)
        },
        Ve = Object(R.b)({ maxNumberOfPhotos: 1 }),
        We = (function (e) {
          p()(n, e)
          var t = De(n)
          function n(e, r) {
            var i, c, s
            o()(this, n),
              (s = t.call(this, e, r)),
              b()(u()(s), '_handleLayout', function (e) {
                var t = s.props.onHeightChange,
                  n = s.state.mediaButtonsCollapsible,
                  r = e.nativeEvent.layout
                r &&
                  (Object(de.a)() || (t && t(r.height)),
                  r.width <= T.a.theme.breakpoints.small && !n
                    ? s.setState({ mediaButtonsCollapsible: !0 })
                    : r.width > T.a.theme.breakpoints.small && n && s.setState({ mediaButtonsCollapsible: !1 }))
              }),
              b()(u()(s), '_renderQuickReplyPicker', function () {
                var e = s.props.quickReplyOptions,
                  t = s.state.isQuickReplyOpen
                return e && t
                  ? g.createElement(G, { onOptionChoose: s._handleQROptionSelection, quickReplyOptions: e })
                  : null
              }),
              b()(u()(s), '_renderComposeBox', function () {
                return g.createElement(k.a, { style: ze.composeBoxContainer }, s._renderMainContent())
              }),
              b()(u()(s), '_renderMainContent', function () {
                var e = s.props,
                  t = e.richTextInputContext,
                  n = e.typeaheadWrapper,
                  r = s.state.value,
                  a = n
                return a
                  ? g.createElement(
                      a,
                      {
                        contextText: r,
                        isInline: !0,
                        onTextUpdated: t ? s._handleRichTextChange : s._handlePlainTextChange,
                        onTypeaheadStateChange: s._handleTypeaheadStateChange,
                        source: me.d.ComposeMessage,
                      },
                      s._renderFieldTextInput,
                    )
                  : s._renderFieldTextInput()
              }),
              b()(u()(s), '_renderFieldTextInput', function (e) {
                var t = s.props,
                  n = t.disabled,
                  r = t.placeholderText,
                  i = t.richTextInputContext,
                  o = ve.b.isKaiOS() ? Be : r || Fe,
                  c = s.state,
                  l = c.editorState,
                  u = c.mediaButtonsCollapsible,
                  d = c.value,
                  p = !!i,
                  f = i ? { editorState: l, element: i.element } : void 0,
                  h = i
                    ? {
                        onChange: s._getHandleRichTextChange(e),
                        richTextInputContext: { editorState: l, element: i.element },
                      }
                    : { onChange: s._getHandlePlainTextChange(e), richTextInputContext: void 0 }
                return g.createElement(
                  ye.a,
                  a()(
                    {
                      contentAbove: s._renderAttachments(),
                      editable: !n,
                      emojiPickerButton: s._renderEmojiPicker(),
                      handleReturn: p ? s._handleReturn : void 0,
                      isCompact: !0,
                      leftAligned: !0,
                      maxNumberOfLines: p ? 8 : 4,
                      multiline: !0,
                      numberOfLines: 1,
                      onBlur: s._handleOnBlur,
                      onFilesAdded: s._handleAddMediaFiles,
                      onFocus: s._handleTextInputFocus,
                      onKeyPress: p ? void 0 : s._handleReturn,
                      placeholder: o,
                      ref: s._setTextInputRef,
                      richTextInputContext: n ? void 0 : f,
                      style: ze.composeInput,
                      testID: fe,
                      useCacheForDOMMeasurements: !s._isSendDisabled() && !u,
                      value: d,
                    },
                    h,
                  ),
                )
              }),
              b()(
                u()(s),
                '_getHandleRichTextChange',
                Object(re.a)(function (e) {
                  return function (t) {
                    null == e || e(t), s._handleRichTextChange(t)
                  }
                }),
              ),
              b()(
                u()(s),
                '_getHandlePlainTextChange',
                Object(re.a)(function (e) {
                  return function (t) {
                    null == e || e(t), s._handlePlainTextChange(t)
                  }
                }),
              ),
              b()(u()(s), '_handleTypeaheadStateChange', function (e) {
                s.setState({ isTypeaheadActive: e })
              }),
              b()(u()(s), '_renderAttachments', function () {
                var e = s.props,
                  t = e.attachment,
                  n = e.conversationId,
                  r = e.isCardPreviewTombstoned,
                  a = e.isShareViaDM,
                  i = e.isUploading,
                  o = s.state.value,
                  c =
                    (t &&
                      ((t.media && t.media.mediaFile) || (t.provider && t.media && t.media.externalMediaDetails))) ||
                    {},
                  l = c.height,
                  u = c.width,
                  d = null == t ? void 0 : t.media,
                  p = null == d ? void 0 : d.mediaMetadata,
                  f = null == p ? void 0 : p.altText,
                  h = null == p ? void 0 : p.defaultAltText,
                  m = Object(Ee.b)(o)
                return g.createElement(
                  g.Fragment,
                  null,
                  d
                    ? g.createElement(
                        k.a,
                        { style: ze.attachmentContainer, testID: pe },
                        g.createElement(
                          be.a,
                          { ratio: u / l, style: ze.aspectContainer },
                          g.createElement(
                            k.a,
                            { style: ze.mediaPreviewContainer },
                            g.createElement(te.a, {
                              accessibilityLabel: f || h,
                              mediaItem: d,
                              onClick: s._canEditImage ? s._handleClickMediaDetail : void 0,
                              onEdit: s._canEditImage || s._canEditVideo ? s._handleClickMediaDetail : void 0,
                              onRemove: s._handleRemoveMedia(d.id),
                              resizeIfNeeded: 'width',
                              style: ze.mediaPreview,
                              withAltTextLabel: !!f,
                              withCloseButton: !i,
                              withEditButton: (s._canEditImage || s._canEditVideo) && !i,
                              withEditIcon: !0,
                            }),
                          ),
                        ),
                        t &&
                          t.provider &&
                          t.gifUrl &&
                          g.createElement(
                            k.a,
                            { style: ze.gifAttribution },
                            g.createElement(Y.a, { gifUrl: t.gifUrl, provider: t.provider }),
                          ),
                      )
                    : m && !a
                    ? g.createElement(Ee.a, {
                        conversationId: n,
                        isCardPreviewTombstoned: r,
                        style: ze.cardPreviewContainer,
                        urls: m,
                      })
                    : null,
                )
              }),
              b()(u()(s), '_renderEmojiPicker', function () {
                return s.props.withEmojiPicker && ve.b.isDesktopOS()
                  ? g.createElement(q.a, {
                      disabled: s.props.disabled,
                      onEmojiSelect: s._handleEmojiSelect,
                      onPress: s._handleTextInputFocus,
                      size: 'small',
                      textInputRef: s._textInput || void 0,
                    })
                  : null
              }),
              b()(u()(s), '_renderPrimaryActionButton', function (e) {
                var t = s.props,
                  n = t.primaryActionIcon,
                  r = t.primaryActionLabel,
                  a = t.quickReplyOptions,
                  i = s._hasMessageText()
                return !a || i || e
                  ? g.createElement(
                      ge.a,
                      {
                        accessibilityLabel: r,
                        disabled: s._isSendDisabled(),
                        hoverLabel: { label: r },
                        icon: n || void 0,
                        onPress: s._handlePrimaryAction,
                        size: 'medium',
                        style: ze.actionButton,
                        testID: he,
                        type: n ? 'brandText' : 'brandFilled',
                      },
                      n ? null : r,
                    )
                  : s._renderQRToggleButton()
              }),
              b()(u()(s), '_renderSecondaryActionButton', function () {
                var e = s.props,
                  t = e.secondaryActionLabel,
                  n = e.shouldEnableSecondaryActionFunc,
                  r = e.shouldShowSecondaryActionFunc
                if ((r && !r()) || !t) return null
                var a = !n || n()
                return g.createElement(
                  ge.a,
                  {
                    accessibilityLabel: t,
                    disabled: !a,
                    onPress: s._handleSecondaryAction,
                    style: ze.actionButton,
                    type: 'primaryOutlined',
                  },
                  s.props.secondaryActionLabel,
                )
              }),
              b()(u()(s), '_renderQRToggleButton', function () {
                var e = s.state.isQuickReplyOpen
                return g.createElement(ge.a, {
                  accessibilityLabel: Ne,
                  icon: e ? g.createElement(Ie, null) : g.createElement(Te, null),
                  onPress: s._handleQuickReplyPickerToggle,
                  size: 'medium',
                  style: ze.actionButton,
                  type: 'brandText',
                })
              }),
              b()(u()(s), '_renderComposer', function () {
                var e = s.props.attachment,
                  t = Ue(e),
                  n = s._renderComposeBox(),
                  r = s._renderPrimaryActionButton(t),
                  a = s._renderSecondaryActionButton()
                return g.createElement(
                  k.a,
                  { style: [ze.composer, t && ze.composerWithAttachment] },
                  t ? null : s._renderMediaButtons(),
                  n,
                  a,
                  r,
                )
              }),
              b()(u()(s), '_renderMediaButtons', function () {
                var e = s.props,
                  t = e.withGifPicker,
                  n = e.withMediaPicker,
                  r = s.state,
                  a = r.mediaButtonsCollapsed,
                  i = r.mediaButtonsCollapsible && a
                return g.createElement(
                  k.a,
                  { style: ze.uploadButtons },
                  i
                    ? g.createElement(ge.a, {
                        accessibilityLabel: Le,
                        icon: g.createElement(Ae.a, null),
                        onMouseDown: s._handleShowMediaControlsMouseDown,
                        type: 'brandText',
                      })
                    : null,
                  n && !i ? s._renderMediaPicker() : null,
                  t && !i ? s._renderGifButton() : null,
                )
              }),
              b()(u()(s), '_handleShowMediaControlsMouseDown', function () {
                var e = s.props,
                  t = e.scribeAction,
                  n = e.scribeNamespace
                s.setState({ mediaButtonsCollapsed: !1 }),
                  t(je(je({}, n), {}, { component: 'dm_composer', element: 'toggle', action: 'expand' }))
              }),
              b()(u()(s), '_handleReturn', function (e) {
                var t = e.nativeEvent,
                  n = t.ctrlKey,
                  r = t.key,
                  a = t.metaKey,
                  i = t.shiftKey,
                  o = 'Enter' === r
                return !s.state.isTypeaheadActive && o && s._keyboardOrMouseDetected && !(i || a || n)
                  ? (e.preventDefault(), s._handlePrimaryAction(e), 'handled')
                  : 'not-handled'
              }),
              b()(u()(s), '_handleClickMediaDetail', function () {
                var e = s.props,
                  t = e.attachment,
                  n = e.conversationId,
                  r = e.history
                if (s._canEditImage || s._canEditVideo) {
                  var a = t && t.media ? t.media.id : 0,
                    i = s._canEditVideo ? 'trimmer' : 'crop'
                  r.push('/messages/compose/media', { mediaId: a, conversationId: n, tab: i })
                }
              }),
              b()(u()(s), '_handleAddMediaFiles', function (e) {
                var t = s.props,
                  n = t.addMedia,
                  r = t.addToast,
                  a = t.dataSaverMode,
                  i = t.onAddMedia,
                  o = t.preUploadMedia,
                  c = t.processMultipleMedia,
                  l = t.removeMedia,
                  u = t.removeMediaUpload
                n(e, { location: ne.d.Dm }).then(function (e) {
                  var t = e.map(function (e) {
                    return e.id
                  })
                  s._validateMedia(e)
                    ? (i && i(t),
                      c(e, { onFailure: l }).then(function (e) {
                        a ||
                          o(
                            e.map(function (e) {
                              return e.id
                            }),
                          )
                      }))
                    : (r({ text: He }), u(t))
                })
              }),
              b()(u()(s), '_handleEmojiSelect', function (e) {
                var t = s.state.editorState,
                  n = s.props.richTextInputContext
                if (n && t) {
                  var r = n.insertTextAtCursor(t, e.text)
                  s._handleRichTextChange(r)
                }
              }),
              b()(u()(s), '_handleRemoveMedia', function (e) {
                return function () {
                  s.props.removeMedia && s.props.removeMedia(e)
                }
              }),
              b()(u()(s), '_handlePrimaryAction', function (e) {
                if (!s._isSendDisabled()) {
                  var t = s.props.onPrimaryAction
                  s._textInput &&
                    s._textInput.applyFinalValue(function (e) {
                      t({ type: 'richText' }, e)
                    }),
                    s._closeQuickReplyPicker()
                }
              }),
              b()(u()(s), '_handleSecondaryAction', function (e) {
                var t = s.props.onSecondaryAction
                s._textInput &&
                  s._textInput.applyFinalValue(function (e) {
                    t && t({ type: 'richText' }, e)
                  })
              }),
              b()(u()(s), '_handleRichTextChange', function (e) {
                var t = s.props,
                  n = t.onTyping,
                  r = t.richTextInputContext,
                  a = s.state.value,
                  i = e.getCurrentContent().getPlainText(),
                  o = r ? r.convertEmojiToEntities(e) : null
                s.setState({ editorState: o, value: i }), a !== i && (null == n || n())
              }),
              b()(u()(s), '_handlePlainTextChange', function (e) {
                var t = s.props.onTyping,
                  n = s.state.value,
                  r = e.target.value
                s.setState({ value: r }), n !== r && (null == t || t())
              }),
              b()(u()(s), '_handleOnBlur', function () {
                var e = s.props.onBlur,
                  t = s.state.mediaButtonsCollapsible
                e && e(), t && s.setState({ mediaButtonsCollapsed: !1 })
              }),
              b()(u()(s), '_handleTextInputFocus', function () {
                var e = s.props.quickReplyOptions,
                  t = s.state,
                  n = t.isQuickReplyOpen,
                  r = t.mediaButtonsCollapsible
                e && n && s._closeQuickReplyPicker(), r && s.setState({ mediaButtonsCollapsed: !0 })
              }),
              b()(u()(s), '_handleQROptionSelection', function (e, t) {
                var n = s.props,
                  r = n.disabled,
                  a = n.onPrimaryAction
                r || (a({ quickReply: { id: e, selected_id: t.id } }, t.label), s._closeQuickReplyPicker())
              }),
              b()(u()(s), '_handleQuickReplyPickerToggle', function () {
                s.setState({ isQuickReplyOpen: !s.state.isQuickReplyOpen })
              }),
              b()(u()(s), '_validateMedia', function (e) {
                return !Ue(s.props.attachment) && Ve(e)
              }),
              b()(u()(s), '_detectKeyboardOrMouse', function (e) {
                var t = e.KEYBOARD,
                  n = e.MOUSE
                ;(0, e.registerSome)(
                  function () {
                    s._keyboardOrMouseDetected = !0
                  },
                  [t, n],
                )
              }),
              b()(u()(s), '_isSendDisabled', function () {
                var e = s.props,
                  t = e.attachment,
                  n = e.canSendEmptyMessage,
                  r = e.disabled,
                  a = e.isUploading,
                  i = Ue(t),
                  o = s._hasMessageText() || n,
                  c = !(!t || !t.media) && (t.media.needsProcessing || a)
                return r || (!o && !i) || c || a
              }),
              b()(u()(s), '_hasMessageText', function () {
                return !!(s.state.value || '').trim()
              }),
              b()(u()(s), '_closeQuickReplyPicker', function () {
                s.setState({ isQuickReplyOpen: !1 })
              }),
              b()(u()(s), 'handleAddMediaFiles', function (e) {
                return s._handleAddMediaFiles(e)
              }),
              b()(u()(s), '_setTextInputRef', function (e) {
                s._textInput = e
              })
            var l = e.prefillText,
              d = e.richTextInputContext
            return (
              (s.state = {
                isQuickReplyOpen: !0,
                value: l,
                editorState:
                  null !==
                    (i = null == d || null === (c = d.initEditorState) || void 0 === c ? void 0 : c.call(d, l)) &&
                  void 0 !== i
                    ? i
                    : null,
                isTypeaheadActive: !1,
                mediaButtonsCollapsed: !1,
                mediaButtonsCollapsible: !1,
              }),
              s
            )
          }
          return (
            s()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  Object($.a)().then(this._detectKeyboardOrMouse), (this._unlockReload = ue.a.acquire())
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._unlockReload()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function () {
                  this.props.quickReplyOptions &&
                    this.state.isQuickReplyOpen &&
                    this._textInput &&
                    this._textInput.blur()
                },
              },
              {
                key: 'UNSAFE_componentWillReceiveProps',
                value: function (e) {
                  var t = this.props.quickReplyOptions,
                    n = e.quickReplyOptions
                  t && !n
                    ? this.setState({ isQuickReplyOpen: !1 })
                    : ((!t && n) || (t && n && t.id !== n.id)) && this.setState({ isQuickReplyOpen: !0 }),
                    this.props.conversationId !== e.conversationId && this.clear()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.dtabBarInfo,
                    n = e.isSending,
                    r = e.isUploading,
                    a = e.mediaUploadProgress,
                    i = e.placeholderText,
                    o = e.style,
                    c = i || Fe,
                    s = Object(de.a)(),
                    l = s && t && (t.dtabAll || t.ttsToken) && !t.hide
                  return g.createElement(
                    A,
                    {
                      accessibilityLabel: c,
                      accessibilityRole: 'complementary',
                      onLayout: this._handleLayout,
                      sideNavPresent: s,
                      style: [ze.root, l && ze.dtabOffset, o],
                    },
                    g.createElement(le, { isSending: n, isUploading: r, progress: n ? Math.max(a, 0.02) : 0 }),
                    this._renderComposer(),
                    this._renderQuickReplyPicker(),
                  )
                },
              },
              {
                key: '_renderMediaPicker',
                value: function () {
                  return g.createElement(ee.a, {
                    onChange: this._handleAddMediaFiles,
                    style: ze.mediaPicker,
                    type: 'brandText',
                  })
                },
              },
              {
                key: '_renderGifButton',
                value: function () {
                  var e = this.props,
                    t = e.conversationId,
                    n = e.history
                  return g.createElement(X.a, {
                    dmConversationId: t,
                    enabled: !0,
                    gifSearchKeySource: Q.a.DMComposition,
                    history: n,
                  })
                },
              },
              {
                key: '_canEditImage',
                get: function () {
                  var e, t, n
                  return !(
                    null === (e = this.props.attachment) ||
                    void 0 === e ||
                    null === (t = e.media) ||
                    void 0 === t ||
                    null === (n = t.mediaFile) ||
                    void 0 === n ||
                    !n.isImage
                  )
                },
              },
              {
                key: '_canEditVideo',
                get: function () {
                  var e,
                    t,
                    n = this.props.attachment,
                    r =
                      null == n || null === (e = n.media) || void 0 === e || null === (t = e.mediaFile) || void 0 === t
                        ? void 0
                        : t.isVideo
                  return (
                    r &&
                      ((this._videoTrimmerEnabled = this.context.featureSwitches.isTrue(
                        'responsive_web_video_trimmer_enabled',
                      )),
                      (r = this._videoTrimmerEnabled)),
                    !!r
                  )
                },
              },
              {
                key: 'clear',
                value: function () {
                  var e = this.props.richTextInputContext
                  if (e) {
                    var t = (e || {}).initEditorState
                    this.setState({ value: '', editorState: t && t('') })
                  } else this.setState({ value: '' })
                },
              },
              {
                key: 'focus',
                value: function () {
                  this._textInput && this._textInput.focus()
                },
              },
              {
                key: 'value',
                value: function () {
                  return this.state.value
                },
              },
            ]),
            n
          )
        })(g.Component)
      b()(We, 'contextType', _e.a),
        b()(We, 'defaultProps', { prefillText: '', withEmojiPicker: !0, withGifPicker: !0, withMediaPicker: !0 })
      var ze = T.a.create(function (e) {
        return {
          root: {
            backgroundColor: e.colors.navigationBackground,
            borderTopColor: e.colors.borderColor,
            borderTopWidth: e.borderWidths.small,
          },
          attachmentContainer: { maxHeight: '10rem', margin: e.spaces.space12 },
          aspectContainer: { flexShrink: 1 },
          cardPreviewContainer: { margin: e.spaces.space12 },
          dtabOffset: { marginBottom: e.spaces.space40 },
          gifAttribution: { flexDirection: 'row', marginVertical: e.spaces.space4, marginHorizontal: 0 },
          mediaPicker: { margin: 0 },
          icon: { color: e.colors.primary, fontSize: '1.5em' },
          composeBoxContainer: { flexGrow: 1, flexShrink: 1, alignSelf: 'center' },
          composeInput: { width: '100%' },
          mediaPreviewContainer: { flexDirection: 'row', height: '100%' },
          mediaPreview: { borderRadius: e.borderRadii.xLarge, overflow: 'hidden', minWidth: '10em' },
          composer: { alignItems: 'center', flexDirection: 'row', padding: e.spaces.space4, width: '100%' },
          composerWithAttachment: { paddingLeft: e.spaces.space12 },
          actionButton: { marginLeft: e.spaces.space4 },
          uploadButtons: { flexDirection: 'row', marginRight: e.spaces.space4 },
        }
      })
      t.a = w.forwardRef(We)
    },
    uHIe: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'DMMediaScreen', function () {
          return g
        })
      n('MvUL'), n('KqXw')
      var r = n('ERkP'),
        a = (n('WNMA'), n('MMRb')),
        i = n('hqKg'),
        o = n('zh9S'),
        c = n('H9MA'),
        s = n('oEGd'),
        l = function (e, t) {
          return t.match.params.entryId
        },
        u = Object(i.createSelector)(
          l,
          function (e, t) {
            return a.selectEntry(e, l(0, t))
          },
          function (e, t) {
            return t.match.params.conversationId
          },
          c.c,
          function (e, t, n, r) {
            var a,
              i = null == t || null === (a = t.message_data) || void 0 === a ? void 0 : a.attachment
            return {
              conversationId: n,
              mediaItem:
                (null == i ? void 0 : i.photo) ||
                (null == i ? void 0 : i.animated_gif) ||
                (null == i ? void 0 : i.video) ||
                void 0,
              messageId: e,
              dataSaver: r,
            }
          },
        ),
        d = { scribeAction: o.c },
        p = Object(s.g)(u, d),
        f = n('2doW'),
        h = n('UPvq'),
        m = n('wiP2'),
        v = n('lklz'),
        y = n('7JQg'),
        b = n('RCZO'),
        g = function (e) {
          var t = e.conversationId,
            n = e.dataSaver,
            a = e.history,
            i = e.mediaItem,
            o = e.messageId,
            c = Object(b.b)(i),
            s = Object(b.h)(),
            l = s.handleMediaDetailZoomed,
            u = s.handleMediaItemTapped,
            d = s.hideButtons,
            p = function () {
              var e = t ? '/messages/'.concat(t) : '/messages'
              a.goBack({ backLocation: e })
            }
          return (
            r.useEffect(
              function () {
                i || a.replace(t ? '/messages/'.concat(t) : '/messages')
              },
              [a, t, i],
            ),
            i
              ? r.createElement(
                  m.a.Configure,
                  { headerless: !0 },
                  r.createElement(
                    h.a,
                    { backgroundColor: c, hideButtons: d, mediaItem: i, onCloseButtonPress: p },
                    r.createElement(f.a, {
                      dataSaver: n,
                      mediaItems: [i],
                      onDismiss: p,
                      onMediaDetailZoomed: l,
                      onTap: u,
                      videoId: v.b.forDm(o),
                    }),
                  ),
                )
              : null
          )
        }
      t.default = Object(y.c)({ page: 'messages', section: 'media' })(p(g))
    },
    wO1l: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return S
      }),
        n.d(t, 'a', function () {
          return C
        })
      n('+KXO'), n('1t7P'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('ddV6'),
        a = n.n(r),
        i = n('KEM+'),
        o = n.n(i),
        c = n('m3Bd'),
        s = n.n(c),
        l =
          (n('z84I'),
          n('ho0z'),
          n('iKE+'),
          n('KqXw'),
          n('DZ+c'),
          n('LW0h'),
          n('tQbP'),
          n('5BYb'),
          n('2G9S'),
          n('aWyx')),
        u = n('4q8G'),
        d = n('lL5k'),
        p = n.n(d),
        f = n('XnpN'),
        h = n('w6IS'),
        m = n('s1N3'),
        v = n('VIKJ'),
        y = n('vy4g'),
        b = n('GZwR')
      function g(e, t) {
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
      function _(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? g(Object(n), !0).forEach(function (t) {
                o()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : g(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var E = function (e, t) {
        return Object(h.a)(
          e.map(function (e) {
            return Object(f.a)(e, t).map(function (e) {
              return e.user
            })
          }),
        )
      }
      var O = function (e) {
          var t = e.id_str,
            n = Object(y.a)(Object(y.b)(e), b.c.DMInjected),
            r = n.rounded_score,
            a = n.src,
            i = n.tokens
          return {
            data: _(_({}, s()(n, ['rounded_score', 'src', 'tokens'])), {}, { can_dm: !0 }),
            rounded_score: r,
            tokens: i,
            src: a,
            id: t,
            type: b.b.User,
          }
        },
        S = function (e, t, n) {
          var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            a = e && new RegExp('(^|.*\\s)'.concat(p()(e), '.*'), 'i'),
            i = E(t.sort(u.a), n)
              .filter(function (e) {
                return (!a || a.test(e.screen_name) || a.test(e.name)) && (e.followed_by || r)
              })
              .map(function (e) {
                return O(e)
              })
          return Object(m.a)(i, function (e) {
            return e.id
          })
        }
      function C(e, t, n) {
        var r,
          i = e && new RegExp('(^|.*\\s)'.concat(p()(e), '.*'), 'i'),
          o = t
            .filter(function (e) {
              return e.trusted
            })
            .filter(function (t) {
              if (!e) return !0
              var r = i && t.name && i.test(t.name),
                a = Object(f.a)(t, n).map(function (e) {
                  return e.user
                }),
                o =
                  i &&
                  a.some(function (e) {
                    return i.test(e.screen_name) || i.test(e.name)
                  })
              return r || o
            })
            .sort(u.a),
          c = o
        if (e) {
          var s = Object(v.a)(o, function (e) {
              return e.type === l.a.ONE_TO_ONE
            }),
            d = a()(s, 2),
            y = d[0],
            g = d[1]
          c = y.concat(g)
        }
        return (
          (r = Object(h.a)(
            c.map(function (t) {
              var r = t.type === l.a.GROUP,
                a = []
              return (
                r &&
                  a.push(
                    (function (e) {
                      return {
                        data: { name: e.name || '', conversationId: e.conversation_id },
                        id: e.conversation_id,
                        type: b.b.DMConversation,
                      }
                    })(t),
                  ),
                (!e && r) || (a = a.concat(S(r ? e : null, [t], n, !r))),
                a
              )
            }),
          )),
          Object(m.a)(r, function (e) {
            var t = e.id
            return e.type === b.b.DMConversation ? 'c_'.concat(t) : 'u_'.concat(t)
          })
        )
      }
    },
    y59G: function (e, t, n) {
      'use strict'
      n.r(t)
      var r,
        a,
        i,
        o,
        c,
        s,
        l,
        u,
        d,
        p,
        f,
        h,
        m,
        v,
        y,
        b,
        g,
        _,
        E,
        O,
        S,
        C,
        w,
        R,
        I,
        k,
        P,
        x,
        T,
        A,
        M,
        j,
        D,
        L,
        F,
        B,
        N = {
          fragment: {
            argumentDefinitions: (r = [
              { defaultValue: null, kind: 'LocalArgument', name: 'cursor' },
              { defaultValue: null, kind: 'LocalArgument', name: 'query' },
            ]),
            kind: 'Fragment',
            metadata: null,
            name: 'DMMessageSearchTabQuery',
            selections: [
              {
                alias: 'dm_message_slice_result',
                args: [
                  (a = { kind: 'Variable', name: 'query', variableName: 'query' }),
                  (i = { kind: 'Literal', name: 's', value: 17 }),
                ],
                concreteType: null,
                kind: 'LinkedField',
                name: '__DMMessageSearchTabQuery_dm_message_slice_result_slice',
                plural: !1,
                selections: [
                  {
                    kind: 'InlineFragment',
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: 'LinkedField',
                        name: 'items',
                        plural: !0,
                        selections: [
                          {
                            kind: 'InlineFragment',
                            selections: [
                              {
                                alias: null,
                                args: null,
                                concreteType: 'DMEvent',
                                kind: 'LinkedField',
                                name: 'dm_event',
                                plural: !1,
                                selections: [
                                  (o = {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'rest_id',
                                    storageKey: null,
                                  }),
                                  (c = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: 'DMEventMetadata',
                                    kind: 'LinkedField',
                                    name: 'legacy',
                                    plural: !1,
                                    selections: [
                                      (s = {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'affects_sort',
                                        storageKey: null,
                                      }),
                                      (l = {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'created_at_millis',
                                        storageKey: null,
                                      }),
                                      (u = {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'request_id',
                                        storageKey: null,
                                      }),
                                      (d = {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'event_id',
                                        storageKey: null,
                                      }),
                                      (p = {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'event_type',
                                        storageKey: null,
                                      }),
                                      {
                                        alias: null,
                                        args: null,
                                        concreteType: 'DMConversation',
                                        kind: 'LinkedField',
                                        name: 'conversation',
                                        plural: !1,
                                        selections: [
                                          c,
                                          o,
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'ConversationInfo',
                                            kind: 'LinkedField',
                                            name: 'legacy',
                                            plural: !1,
                                            selections: [
                                              (f = {
                                                alias: null,
                                                args: null,
                                                kind: 'ScalarField',
                                                name: 'conversation_id',
                                                storageKey: null,
                                              }),
                                              {
                                                alias: null,
                                                args: null,
                                                concreteType: 'ConversationMetadata',
                                                kind: 'LinkedField',
                                                name: 'metadata',
                                                plural: !1,
                                                selections: [
                                                  f,
                                                  (h = {
                                                    alias: null,
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'conversation_type',
                                                    storageKey: null,
                                                  }),
                                                  (m = {
                                                    alias: null,
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'name',
                                                    storageKey: null,
                                                  }),
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: 'UserResults',
                                                    kind: 'LinkedField',
                                                    name: 'created_by_user_results',
                                                    plural: !1,
                                                    selections: (b = [
                                                      {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: null,
                                                        kind: 'LinkedField',
                                                        name: 'result',
                                                        plural: !1,
                                                        selections: [
                                                          {
                                                            kind: 'InlineFragment',
                                                            selections: [
                                                              c,
                                                              o,
                                                              (y = {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: 'ApiUser',
                                                                kind: 'LinkedField',
                                                                name: 'legacy',
                                                                plural: !1,
                                                                selections: [
                                                                  m,
                                                                  (v = {
                                                                    alias: null,
                                                                    args: null,
                                                                    kind: 'ScalarField',
                                                                    name: 'screen_name',
                                                                    storageKey: null,
                                                                  }),
                                                                ],
                                                                storageKey: null,
                                                              }),
                                                            ],
                                                            type: 'User',
                                                            abstractKey: null,
                                                          },
                                                        ],
                                                        storageKey: null,
                                                      },
                                                    ]),
                                                    storageKey: null,
                                                  },
                                                  l,
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: 'UserResults',
                                                    kind: 'LinkedField',
                                                    name: 'admin_user_results',
                                                    plural: !1,
                                                    selections: b,
                                                    storageKey: null,
                                                  },
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: 'ApiMedia',
                                                    kind: 'LinkedField',
                                                    name: 'avatar',
                                                    plural: !1,
                                                    selections: [
                                                      c,
                                                      {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: null,
                                                        kind: 'LinkedField',
                                                        name: 'media_info',
                                                        plural: !1,
                                                        selections: [
                                                          (g = {
                                                            kind: 'InlineFragment',
                                                            selections: [
                                                              {
                                                                alias: null,
                                                                args: null,
                                                                kind: 'ScalarField',
                                                                name: 'original_img_url',
                                                                storageKey: null,
                                                              },
                                                              {
                                                                alias: null,
                                                                args: null,
                                                                kind: 'ScalarField',
                                                                name: 'original_img_width',
                                                                storageKey: null,
                                                              },
                                                              {
                                                                alias: null,
                                                                args: null,
                                                                kind: 'ScalarField',
                                                                name: 'original_img_height',
                                                                storageKey: null,
                                                              },
                                                            ],
                                                            type: 'ApiImage',
                                                            abstractKey: null,
                                                          }),
                                                        ],
                                                        storageKey: null,
                                                      },
                                                    ],
                                                    storageKey: null,
                                                  },
                                                ],
                                                storageKey: null,
                                              },
                                              {
                                                alias: null,
                                                args: null,
                                                concreteType: 'ParticipantConversationMetadata',
                                                kind: 'LinkedField',
                                                name: 'participants_metadata',
                                                plural: !0,
                                                selections: [
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: 'UserResults',
                                                    kind: 'LinkedField',
                                                    name: 'user_results',
                                                    plural: !1,
                                                    selections: [
                                                      {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: null,
                                                        kind: 'LinkedField',
                                                        name: 'result',
                                                        plural: !1,
                                                        selections: [
                                                          {
                                                            kind: 'InlineFragment',
                                                            selections: [
                                                              c,
                                                              o,
                                                              (_ = {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: 'ApiUser',
                                                                kind: 'LinkedField',
                                                                name: 'legacy',
                                                                plural: !1,
                                                                selections: [
                                                                  {
                                                                    alias: null,
                                                                    args: null,
                                                                    kind: 'ScalarField',
                                                                    name: 'id_str',
                                                                    storageKey: null,
                                                                  },
                                                                  m,
                                                                  v,
                                                                  {
                                                                    alias: null,
                                                                    args: null,
                                                                    kind: 'ScalarField',
                                                                    name: 'profile_image_url_https',
                                                                    storageKey: null,
                                                                  },
                                                                ],
                                                                storageKey: null,
                                                              }),
                                                            ],
                                                            type: 'User',
                                                            abstractKey: null,
                                                          },
                                                        ],
                                                        storageKey: null,
                                                      },
                                                    ],
                                                    storageKey: null,
                                                  },
                                                  (E = {
                                                    alias: null,
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'last_read_event_id',
                                                    storageKey: null,
                                                  }),
                                                  (O = {
                                                    alias: null,
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'join_time_millis',
                                                    storageKey: null,
                                                  }),
                                                  (S = {
                                                    alias: null,
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'join_conversation_event_id',
                                                    storageKey: null,
                                                  }),
                                                ],
                                                storageKey: null,
                                              },
                                              (C = {
                                                alias: null,
                                                args: null,
                                                concreteType: 'PerspectivalConversationMetadata',
                                                kind: 'LinkedField',
                                                name: 'perspectival_conversation_metadata',
                                                plural: !1,
                                                selections: [
                                                  E,
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'low_quality',
                                                    storageKey: null,
                                                  },
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'muted',
                                                    storageKey: null,
                                                  },
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'muted_due_to_muted_user',
                                                    storageKey: null,
                                                  },
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'read_only',
                                                    storageKey: null,
                                                  },
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'trusted',
                                                    storageKey: null,
                                                  },
                                                ],
                                                storageKey: null,
                                              }),
                                            ],
                                            storageKey: null,
                                          },
                                        ],
                                        storageKey: null,
                                      },
                                      {
                                        alias: null,
                                        args: null,
                                        concreteType: 'DMEventDetail',
                                        kind: 'LinkedField',
                                        name: 'event_detail',
                                        plural: !1,
                                        selections: [
                                          (w = {
                                            alias: null,
                                            args: null,
                                            concreteType: 'DMInitialLowQualityState',
                                            kind: 'LinkedField',
                                            name: 'initial_low_quality_state',
                                            plural: !1,
                                            selections: [
                                              {
                                                alias: null,
                                                args: null,
                                                kind: 'ScalarField',
                                                name: 'is_low_quality',
                                                storageKey: null,
                                              },
                                            ],
                                            storageKey: null,
                                          }),
                                          (R = {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'is_new_one_to_one_convo',
                                            storageKey: null,
                                          }),
                                          (I = {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'is_spam_hide',
                                            storageKey: null,
                                          }),
                                          (k = {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'marked_as_abuse',
                                            storageKey: null,
                                          }),
                                          (P = {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'message_id',
                                            storageKey: null,
                                          }),
                                          m,
                                          (x = {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'possibly_spam',
                                            storageKey: null,
                                          }),
                                          (T = {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'sender_registration_token',
                                            storageKey: null,
                                          }),
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'UserResults',
                                            kind: 'LinkedField',
                                            name: 'users_results',
                                            plural: !0,
                                            selections: b,
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'UserResults',
                                            kind: 'LinkedField',
                                            name: 'participants_snapshot_results',
                                            plural: !0,
                                            selections: b,
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'UserResults',
                                            kind: 'LinkedField',
                                            name: 'initiating_user_results',
                                            plural: !1,
                                            selections: b,
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'DirectMessageInfo',
                                            kind: 'LinkedField',
                                            name: 'dm',
                                            plural: !1,
                                            selections: [
                                              (A = {
                                                alias: null,
                                                args: null,
                                                kind: 'ScalarField',
                                                name: 'created_at_sec',
                                                storageKey: null,
                                              }),
                                              c,
                                              (M = {
                                                alias: null,
                                                args: null,
                                                kind: 'ScalarField',
                                                name: 'text',
                                                storageKey: null,
                                              }),
                                              {
                                                alias: null,
                                                args: null,
                                                concreteType: 'UserResults',
                                                kind: 'LinkedField',
                                                name: 'recipient_results',
                                                plural: !1,
                                                selections: b,
                                                storageKey: null,
                                              },
                                              {
                                                alias: null,
                                                args: null,
                                                concreteType: 'UserResults',
                                                kind: 'LinkedField',
                                                name: 'sender_results',
                                                plural: !1,
                                                selections: b,
                                                storageKey: null,
                                              },
                                            ],
                                            storageKey: null,
                                          },
                                        ],
                                        storageKey: null,
                                      },
                                    ],
                                    storageKey: null,
                                  },
                                ],
                                storageKey: null,
                              },
                            ],
                            type: 'DMMessageSearchItem',
                            abstractKey: null,
                          },
                        ],
                        storageKey: null,
                      },
                      (j = {
                        alias: null,
                        args: null,
                        concreteType: 'SliceInfo',
                        kind: 'LinkedField',
                        name: 'slice_info',
                        plural: !1,
                        selections: [
                          { alias: null, args: null, kind: 'ScalarField', name: 'next_cursor', storageKey: null },
                          { alias: null, args: null, kind: 'ScalarField', name: 'previous_cursor', storageKey: null },
                        ],
                        storageKey: null,
                      }),
                    ],
                    type: 'DMMessageSlice',
                    abstractKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            type: 'Query',
            abstractKey: null,
          },
          kind: 'Request',
          operation: {
            argumentDefinitions: r,
            kind: 'Operation',
            name: 'DMMessageSearchTabQuery',
            selections: [
              {
                alias: null,
                args: (D = [{ kind: 'Variable', name: 'cursor', variableName: 'cursor' }, a, i]),
                concreteType: null,
                kind: 'LinkedField',
                name: 'dm_message_slice_result',
                plural: !1,
                selections: [
                  (L = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
                  {
                    kind: 'InlineFragment',
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: 'LinkedField',
                        name: 'items',
                        plural: !0,
                        selections: [
                          L,
                          {
                            kind: 'InlineFragment',
                            selections: [
                              {
                                alias: null,
                                args: null,
                                concreteType: 'DMEvent',
                                kind: 'LinkedField',
                                name: 'dm_event',
                                plural: !1,
                                selections: [
                                  o,
                                  c,
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: 'DMEventMetadata',
                                    kind: 'LinkedField',
                                    name: 'legacy',
                                    plural: !1,
                                    selections: [
                                      s,
                                      l,
                                      u,
                                      d,
                                      p,
                                      {
                                        alias: null,
                                        args: null,
                                        concreteType: 'DMConversation',
                                        kind: 'LinkedField',
                                        name: 'conversation',
                                        plural: !1,
                                        selections: [
                                          c,
                                          o,
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'ConversationInfo',
                                            kind: 'LinkedField',
                                            name: 'legacy',
                                            plural: !1,
                                            selections: [
                                              f,
                                              {
                                                alias: null,
                                                args: null,
                                                concreteType: 'ConversationMetadata',
                                                kind: 'LinkedField',
                                                name: 'metadata',
                                                plural: !1,
                                                selections: [
                                                  f,
                                                  h,
                                                  m,
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: 'UserResults',
                                                    kind: 'LinkedField',
                                                    name: 'created_by_user_results',
                                                    plural: !1,
                                                    selections: (B = [
                                                      {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: null,
                                                        kind: 'LinkedField',
                                                        name: 'result',
                                                        plural: !1,
                                                        selections: [
                                                          L,
                                                          {
                                                            kind: 'InlineFragment',
                                                            selections: [
                                                              c,
                                                              o,
                                                              y,
                                                              (F = {
                                                                alias: null,
                                                                args: null,
                                                                filters: null,
                                                                handle: 'defaultScalars',
                                                                key: '',
                                                                kind: 'LinkedHandle',
                                                                name: 'legacy',
                                                              }),
                                                            ],
                                                            type: 'User',
                                                            abstractKey: null,
                                                          },
                                                        ],
                                                        storageKey: null,
                                                      },
                                                    ]),
                                                    storageKey: null,
                                                  },
                                                  l,
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: 'UserResults',
                                                    kind: 'LinkedField',
                                                    name: 'admin_user_results',
                                                    plural: !1,
                                                    selections: B,
                                                    storageKey: null,
                                                  },
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: 'ApiMedia',
                                                    kind: 'LinkedField',
                                                    name: 'avatar',
                                                    plural: !1,
                                                    selections: [
                                                      c,
                                                      {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: null,
                                                        kind: 'LinkedField',
                                                        name: 'media_info',
                                                        plural: !1,
                                                        selections: [L, g],
                                                        storageKey: null,
                                                      },
                                                    ],
                                                    storageKey: null,
                                                  },
                                                ],
                                                storageKey: null,
                                              },
                                              {
                                                alias: null,
                                                args: null,
                                                concreteType: 'ParticipantConversationMetadata',
                                                kind: 'LinkedField',
                                                name: 'participants_metadata',
                                                plural: !0,
                                                selections: [
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: 'UserResults',
                                                    kind: 'LinkedField',
                                                    name: 'user_results',
                                                    plural: !1,
                                                    selections: [
                                                      {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: null,
                                                        kind: 'LinkedField',
                                                        name: 'result',
                                                        plural: !1,
                                                        selections: [
                                                          L,
                                                          {
                                                            kind: 'InlineFragment',
                                                            selections: [c, o, _, F],
                                                            type: 'User',
                                                            abstractKey: null,
                                                          },
                                                        ],
                                                        storageKey: null,
                                                      },
                                                    ],
                                                    storageKey: null,
                                                  },
                                                  E,
                                                  O,
                                                  S,
                                                ],
                                                storageKey: null,
                                              },
                                              C,
                                            ],
                                            storageKey: null,
                                          },
                                        ],
                                        storageKey: null,
                                      },
                                      {
                                        alias: null,
                                        args: null,
                                        concreteType: 'DMEventDetail',
                                        kind: 'LinkedField',
                                        name: 'event_detail',
                                        plural: !1,
                                        selections: [
                                          w,
                                          R,
                                          I,
                                          k,
                                          P,
                                          m,
                                          x,
                                          T,
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'UserResults',
                                            kind: 'LinkedField',
                                            name: 'users_results',
                                            plural: !0,
                                            selections: B,
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'UserResults',
                                            kind: 'LinkedField',
                                            name: 'participants_snapshot_results',
                                            plural: !0,
                                            selections: B,
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'UserResults',
                                            kind: 'LinkedField',
                                            name: 'initiating_user_results',
                                            plural: !1,
                                            selections: B,
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'DirectMessageInfo',
                                            kind: 'LinkedField',
                                            name: 'dm',
                                            plural: !1,
                                            selections: [
                                              A,
                                              c,
                                              M,
                                              {
                                                alias: null,
                                                args: null,
                                                concreteType: 'UserResults',
                                                kind: 'LinkedField',
                                                name: 'recipient_results',
                                                plural: !1,
                                                selections: B,
                                                storageKey: null,
                                              },
                                              {
                                                alias: null,
                                                args: null,
                                                concreteType: 'UserResults',
                                                kind: 'LinkedField',
                                                name: 'sender_results',
                                                plural: !1,
                                                selections: B,
                                                storageKey: null,
                                              },
                                            ],
                                            storageKey: null,
                                          },
                                        ],
                                        storageKey: null,
                                      },
                                    ],
                                    storageKey: null,
                                  },
                                ],
                                storageKey: null,
                              },
                            ],
                            type: 'DMMessageSearchItem',
                            abstractKey: null,
                          },
                        ],
                        storageKey: null,
                      },
                      j,
                    ],
                    type: 'DMMessageSlice',
                    abstractKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: D,
                filters: ['query', 's'],
                handle: 'slice',
                key: 'DMMessageSearchTabQuery_dm_message_slice_result',
                kind: 'LinkedHandle',
                name: 'dm_message_slice_result',
              },
            ],
          },
          params: {
            id: 'bbdRrkndYmyQHx463K9HSA',
            metadata: { sliceInfoPath: ['dm_message_slice_result', 'slice_info'] },
            name: 'DMMessageSearchTabQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(N.hash = 'f240afda618da0d5e047ef48ee76dd56'), (t.default = N)
    },
    yV8l: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'ConversationInfoScreen', function () {
          return Ne
        }),
        n.d(t, 'styles', function () {
          return He
        })
      n('OZaJ'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
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
        y = (n('ho0z'), n('z84I'), n('+KXO'), n('ERkP')),
        b = n('v6aA'),
        g = n('EbOo'),
        _ = n('EPsT'),
        E = (n('WNMA'), n('KqXw'), n('6U7i'), n('M+/F'), n('MMRb')),
        O = n('RqPI'),
        S = n('1YZw'),
        C = n('hqKg'),
        w = n('p9G8'),
        R = n('X/yg'),
        I = n('AQOc'),
        k = n('zh9S'),
        P = n('G6rE'),
        x = n('0KEI'),
        T = n('oEGd'),
        A = function (e, t) {
          return t.match.params.conversationId
        },
        M = function (e, t) {
          var n = A(0, t)
          return E.selectInboxTypeByConversation(e, n)
        },
        j = Object(C.createSelector)(
          function (e, t) {
            return E.selectConversation(e, A(0, t))
          },
          E.selectEntries,
          A,
          function (e, t) {
            return E.selectConversationFetchStatus(e, A(0, t))
          },
          O.o,
          O.q,
          P.e.selectAll,
          function (e, t) {
            var n = M(e, t)
            return Object(R.g)(n)
          },
          M,
          function (e, t, n, r, a, i, o, c, s) {
            var l = e && e.data,
              u = l && Object(I.b)(l, t, o),
              d = u && Object(w.a)(u, i),
              p = !(!l || !l.notifications_disabled),
              f = !(!l || !l.mention_notifications_disabled),
              h = l && l.mute_expiration_time && Number(l.mute_expiration_time),
              m = u ? Object.keys(u.participants) : [],
              v = m && 1 === m.length && m[0] === i,
              y =
                m &&
                m.filter(function (e) {
                  return e !== i
                }),
              b = v ? m : y.slice(0, 5),
              g = b.length < y.length
            if (!i) throw new Error('logged-in user not found')
            return {
              conversation: u,
              conversationId: n,
              fetchStatus: r,
              groupName: d,
              inboxType: s,
              mentionNotificationsDisabled: f,
              language: a,
              muteExpirationTime: h,
              notificationsDisabled: p,
              perspective: i,
              scribeComponent: c,
              showViewPeople: g,
              visibleParticipants: b,
              isSelfConversation: v,
            }
          },
        ),
        D = {
          addToast: S.b,
          block: P.e.block,
          createLocalApiErrorHandler: Object(x.createLocalApiErrorHandlerWithContextFactory)(
            'DIRECT_MESSAGES_CONVERSATION_INFO',
          ),
          disableMentionNotifications: E.disableMentionNotifications,
          disableNotifications: E.disableNotifications,
          enableMentionNotifications: E.enableMentionNotifications,
          enableNotifications: E.enableNotifications,
          fetchConversationIfNeeded: E.fetchConversationIfNeeded,
          leaveConversation: E.leaveConversation,
          muteDMUser: E.muteDMUser,
          scribeAction: k.c,
          unblock: P.e.unblock,
          unmuteDMUser: E.unmuteDMUser,
          updateConversationName: E.updateConversationName,
        },
        L = Object(T.g)(j, D),
        F = n('aWyx'),
        B = n('I2k/'),
        N = n('aA19'),
        H = n('pHkl'),
        U = n('v//M'),
        V = n('Gpeq'),
        W = n('XnpN'),
        z = n('3XMw'),
        K = n.n(z),
        G = n('tuLS'),
        q = n('M2mT'),
        Y = n('u0B7'),
        X = n('Re5t'),
        Q = n('hqDb'),
        Z = n('MWbm'),
        J = n('mjJ+'),
        $ = n('mw9i'),
        ee = n('5mJL'),
        te = n('t62R'),
        ne = n('0yYu'),
        re = n('6vad'),
        ae = n('jtO7'),
        ie = n('CK8+'),
        oe = n('rHpw'),
        ce = n('7JQg'),
        se = n('mN6z'),
        le = n('fs1G')
      function ue(e, t) {
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
      function de(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ue(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ue(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function pe(e) {
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
      var fe = K.a.e3e58b6d,
        he = K.a.a9ddbb94,
        me = K.a.abd845fd,
        ve = K.a.g2fd3205,
        ye = K.a.eb1bb5a1,
        be = K.a.c6026009,
        ge = K.a.eb75875d,
        _e = K.a.a7f20222,
        Ee = K.a.g2f04a6a,
        Oe = K.a.i453fedf,
        Se = K.a.b3dfd519,
        Ce = K.a.cc7c8ce6,
        we = K.a.hab58673,
        Re = K.a.e3c6e080,
        Ie = {
          confirmButtonLabel: K.a.bb1d57b6,
          actionTextDelete: K.a.ad63377d,
          actionTextLeave: K.a.g9074da4,
          header: K.a.gdf4b79f,
          text: K.a.h09b49f7,
        },
        ke = K.a.i6b19b07,
        Pe = K.a.j7bb1a42,
        xe = K.a.fcd4d489,
        Te = K.a.a30e1677,
        Ae = K.a.a9fd20be,
        Me = K.a.e133be4e,
        je = K.a.c9623eeb,
        De = K.a.cceeaf2b,
        Le = K.a.d87bff5a,
        Fe = [
          { duration: 1, displayText: K.a.j37c4674, toast: K.a.je7e1fec, toastOld: K.a.hf94a2d5 },
          { duration: 2, displayText: K.a.fb7a43c5, toast: K.a.e95c8f8a, toastOld: K.a.bd54fad1 },
          { duration: 3, displayText: K.a.cb5bf56e, toast: K.a.gb7a130b, toastOld: K.a.f6fce0fd },
          { duration: 0, displayText: K.a.cabeb6c1, toast: K.a.i78153dd, toastOld: K.a.hfc86556 },
        ],
        Be = { page: 'messages', section: 'conversation_settings' },
        Ne = (function (e) {
          u()(n, e)
          var t = pe(n)
          function n(e) {
            var r
            return (
              a()(this, n),
              (r = t.call(this, e)),
              v()(s()(r), '_getNameOfGroupOrOneToOneConvo', function () {
                var e = r.props,
                  t = e.conversation,
                  n = e.groupName
                return (null == t ? void 0 : t.type) === F.a.GROUP ? n || '' : r._getNameOfOneToOneConvo()
              }),
              v()(s()(r), '_getScreenNameOfOneToOneConvo', function () {
                var e = r._getSenderOfOneToOneConvo()
                return e ? e.screen_name : ''
              }),
              v()(s()(r), '_getNameOfOneToOneConvo', function () {
                var e = r._getSenderOfOneToOneConvo()
                return e ? e.name : ''
              }),
              v()(s()(r), '_getBlockedOfOneToOneConvo', function () {
                var e = r._getSenderOfOneToOneConvo()
                return e ? e.blocking : null
              }),
              v()(s()(r), '_getSenderOfOneToOneConvo', function () {
                var e = r.props,
                  t = e.conversation,
                  n = e.perspective,
                  a =
                    t &&
                    Object(W.a)(t, n).map(function (e) {
                      return e.user
                    })
                return (a && a[0]) || null
              }),
              v()(s()(r), '_renderContent', function () {
                var e = r.props.conversation,
                  t = !(null != e && e.trusted)
                return y.createElement(b.a.Consumer, null, function (e) {
                  e.featureSwitches
                  return y.createElement(
                    Z.a,
                    null,
                    r._renderGroupSection(),
                    r._renderParticipantsSection(),
                    t ? null : r._renderNotificationsSection(),
                    r._renderConversationActions(),
                  )
                })
              }),
              v()(s()(r), '_getItems', function () {
                return Fe.map(function (e) {
                  return {
                    text: e.displayText,
                    onClick: function () {
                      return r._handleNotificationsDisabled(e)
                    },
                  }
                })
              }),
              v()(s()(r), '_renderActionMenu', function () {
                return function (e) {
                  return y.createElement(J.a, { items: r._getItems(), onCloseRequested: e })
                }
              }),
              v()(s()(r), '_handleViewPeople', function () {
                r._scribeAction('view_participants')
              }),
              v()(s()(r), '_handleMuteDMUser', function () {
                var e = r.props,
                  t = e.conversationId,
                  n = e.createLocalApiErrorHandler,
                  a = e.muteDMUser,
                  i = r._getSenderOfOneToOneConvo()
                i && (a(i.id_str, t).catch(n()), r._scribeAction('mute_user'))
              }),
              v()(s()(r), '_handleUnmuteDMUser', function () {
                var e = r.props,
                  t = e.conversationId,
                  n = e.createLocalApiErrorHandler,
                  a = e.unmuteDMUser,
                  i = r._getSenderOfOneToOneConvo()
                i && (a(i.id_str, t).catch(n()), r._scribeAction('unmute_user'))
              }),
              v()(s()(r), '_handleBlockUser', function () {
                var e = r.props,
                  t = e.addToast,
                  n = e.block,
                  a = e.createLocalApiErrorHandler,
                  i = r._getSenderOfOneToOneConvo(),
                  o = i ? i.id_str : ''
                '' !== o &&
                  (n(o).then(function () {
                    t({ action: { label: Me, onAction: r._handleUnblockUser }, text: Ae })
                  }, a(g.a)),
                  r._scribeAction('block'))
              }),
              v()(s()(r), '_handleUnblockUser', function () {
                var e = r._getSenderOfOneToOneConvo(),
                  t = e ? e.id_str : '',
                  n = r.props,
                  a = n.createLocalApiErrorHandler
                ;(0, n.unblock)(t).catch(a(Y.a)), r._scribeAction('unblock')
              }),
              v()(s()(r), '_handleReportConversation', function () {
                r._scribeAction('report')
              }),
              v()(s()(r), '_handleFetch', function () {
                var e = r.props,
                  t = e.conversationId,
                  n = e.createLocalApiErrorHandler
                ;(0, e.fetchConversationIfNeeded)({ conversationId: t }).catch(n(Object(B.a)(t)))
              }),
              v()(s()(r), '_handleLeaveConversation', function () {
                var e,
                  t = r.props,
                  n = t.conversation,
                  a = t.conversationId,
                  i = t.createLocalApiErrorHandler,
                  o = t.inboxType,
                  c = t.leaveConversation,
                  s = t.location
                c({ conversationId: a }).catch(i({ showToast: !0 }))
                var l = (null == n ? void 0 : n.type) === F.a.GROUP ? 'leave_group' : 'delete_thread',
                  u = (null == s || null === (e = s.state) || void 0 === e ? void 0 : e.position) || 0,
                  d = null != n && n.participants ? Object.keys(n.participants).length : 0,
                  p = {
                    conversation_type: (null == n ? void 0 : n.type) === F.a.GROUP ? 1 : 0,
                    conversation_id: a,
                    conversation_participant_count: d,
                    position: u,
                    inbox_type: Object(R.h)(o),
                    entry_point: H.b.CONVERSATION_INFO,
                  }
                r._scribeAction(l, p), r._handleConversationClose()
              }),
              v()(s()(r), '_handleNotificationsDisabled', function (e) {
                var t = r.props,
                  n = t.addToast,
                  a = t.conversationId,
                  i = t.disableNotifications,
                  o = r._getNameOfGroupOrOneToOneConvo()
                i({ conversationId: a, duration: e.duration }), n({ text: e.toast({ name: o }) })
              }),
              v()(s()(r), '_handleNotificationsEnabled', function () {
                return function () {
                  var e = r.props,
                    t = e.addToast,
                    n = e.conversationId,
                    a = e.createLocalApiErrorHandler,
                    i = e.enableNotifications,
                    o = r._getNameOfGroupOrOneToOneConvo(),
                    c = Ee({ name: o })
                  i({ conversationId: n }).then(function () {
                    t({ text: c })
                  }, a({ showToast: !0 }))
                }
              }),
              v()(s()(r), '_handleMentionSwitchChanged', function (e) {
                var t = r.props,
                  n = t.addToast,
                  a = t.conversationId,
                  i = t.createLocalApiErrorHandler,
                  o = t.disableMentionNotifications,
                  c = t.enableMentionNotifications
                ;(0, t.scribeAction)(
                  de(
                    de({}, t.scribeNamespace),
                    {},
                    {
                      component: 'dm_existing_conversation_dialog',
                      action: e ? 'disable_mentions' : 'enable_mentions',
                    },
                  ),
                ),
                  e
                    ? o({ conversationId: a }).then(function () {
                        n({ text: we })
                      }, i({ showToast: !0 }))
                    : c({ conversationId: a }).then(function () {
                        n({ text: Re })
                      }, i({ showToast: !0 }))
              }),
              v()(s()(r), '_handleConversationClose', function () {
                r._returnToInbox()
              }),
              v()(s()(r), '_returnToInbox', function () {
                var e = r.props,
                  t = e.history,
                  n = e.inboxType
                t.push(Object(R.e)(n))
              }),
              v()(s()(r), '_scribeAction', function (e, t) {
                var n = r.props,
                  a = n.scribeAction,
                  i = n.scribeComponent
                a(de(de({}, n.scribeNamespace), {}, { component: i, action: e }), t || r._getScribeData())
              }),
              v()(s()(r), '_getScribeData', function () {
                var e = r.props.conversation
                return { items: [{ conversation_type: (null == e ? void 0 : e.type) === F.a.GROUP ? 1 : 0 }] }
              }),
              (r.state = { notificationsDisabled: e.notificationsDisabled, muteExpirationTime: e.muteExpirationTime }),
              r
            )
          }
          return (
            o()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._handleFetch()
                },
              },
              {
                key: 'shouldComponentUpdate',
                value: function (e, t) {
                  return !Object(se.a)(e, this.props) || !Object(se.a)(t, this.state)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.conversation,
                    n = e.conversationId,
                    r = e.fetchStatus,
                    a = (null == t ? void 0 : t.type) === F.a.GROUP
                  return y.createElement(
                    q.a,
                    {
                      backLocation: '/messages/'.concat(n),
                      screenType: 'secondaryDetail',
                      title: a ? he : fe,
                      withBottomTabBar: !1,
                    },
                    y.createElement(
                      $.a,
                      { style: He.root },
                      y.createElement(U.a, {
                        accessibilityLabel: Le,
                        fetchStatus: r,
                        onRequestRetry: this._handleFetch,
                        render: this._renderContent,
                      }),
                    ),
                  )
                },
              },
              {
                key: '_renderGroupSection',
                value: function () {
                  var e = this.props,
                    t = e.conversation,
                    n = e.conversationId,
                    r = e.groupName,
                    a = e.perspective,
                    i = (null == t ? void 0 : t.type) === F.a.GROUP,
                    o = null == t ? void 0 : t.trusted
                  return i
                    ? y.createElement(
                        ee.a,
                        {
                          avatarCell: y.createElement(N.a, { conversation: t, perspective: a }),
                          cellStyle: He.groupSectionRight,
                          style: He.groupSection,
                        },
                        y.createElement(te.b, { numberOfLines: 1, weight: 'bold' }, r),
                        o
                          ? y.createElement(te.b, { link: '/messages/'.concat(n, '/group-info'), style: He.edit }, me)
                          : null,
                      )
                    : null
                },
              },
              {
                key: '_renderParticipantsSection',
                value: function () {
                  var e = this.props,
                    t = e.conversation,
                    n = e.conversationId,
                    r = e.showViewPeople,
                    a = e.visibleParticipants,
                    i = (null == t ? void 0 : t.type) === F.a.GROUP,
                    o = null == t ? void 0 : t.trusted
                  return y.createElement(
                    Z.a,
                    null,
                    i
                      ? y.createElement(
                          y.Fragment,
                          null,
                          y.createElement(ne.a, null),
                          y.createElement(re.b, { text: ve }),
                        )
                      : null,
                    y.createElement(Q.a, {
                      displayMode: X.a.UserCompact,
                      userIds: a,
                      withFinalItemBorder: i,
                      withItemBorder: !0,
                    }),
                    r
                      ? y.createElement(ae.a, {
                          color: 'primary',
                          label: ye,
                          link: '/messages/'.concat(n, '/participants'),
                          onClick: this._handleViewPeople,
                        })
                      : null,
                    i && o
                      ? y.createElement(ae.a, { color: 'primary', label: be, link: '/messages/'.concat(n, '/add') })
                      : null,
                  )
                },
              },
              {
                key: '_renderSnoozeConversationSwitch',
                value: function () {
                  var e = this.props,
                    t = e.muteExpirationTime,
                    n = e.notificationsDisabled,
                    r = this._getNameOfGroupOrOneToOneConvo(),
                    a = _e({ name: r })
                  return n
                    ? y.createElement(
                        Z.a,
                        { accessibilityRole: 'label' },
                        y.createElement(
                          Z.a,
                          { style: He.notificationsToggleContainer },
                          y.createElement(te.b, { color: 'normal' }, a),
                          y.createElement(ie.a, { onValueChange: this._handleNotificationsEnabled(), value: n }),
                        ),
                        t
                          ? y.createElement(
                              te.b,
                              { color: 'gray700', size: 'subtext2', style: He.notificationsDescription },
                              this._displayExpirationTime(),
                            )
                          : null,
                      )
                    : y.createElement(
                        Z.a,
                        { style: He.notificationsToggleContainer },
                        y.createElement(te.b, { color: 'normal' }, a),
                        y.createElement(
                          G.a,
                          { accessibilityLabel: a, renderMenu: this._renderActionMenu() },
                          y.createElement(ie.a, { onValueChange: le.a, value: n }),
                        ),
                      )
                },
              },
              {
                key: '_renderSnoozeMentionsSwitch',
                value: function () {
                  var e = this.props.mentionNotificationsDisabled
                  return y.createElement(
                    Z.a,
                    null,
                    y.createElement(
                      Z.a,
                      { accessibilityRole: 'label', style: He.notificationsToggleContainer },
                      y.createElement(te.b, { color: 'normal' }, Se),
                      y.createElement(ie.a, { onValueChange: this._handleMentionSwitchChanged, value: e }),
                    ),
                    y.createElement(
                      te.b,
                      { color: 'gray700', size: 'subtext2', style: He.notificationsDescription },
                      Ce,
                    ),
                  )
                },
              },
              {
                key: '_renderNotificationsSection',
                value: function () {
                  var e = this.props,
                    t = e.conversation,
                    n = e.isSelfConversation,
                    r = (null == t ? void 0 : t.type) === F.a.GROUP
                  return n
                    ? null
                    : y.createElement(
                        Z.a,
                        null,
                        y.createElement(ne.a, null),
                        y.createElement(re.b, { text: ge }),
                        y.createElement(Z.a, null, this._renderSnoozeConversationSwitch()),
                        r ? this._renderSnoozeMentionsSwitch() : null,
                      )
                },
              },
              {
                key: '_displayExpirationTime',
                value: function () {
                  var e = this.props,
                    t = e.language,
                    n = e.muteExpirationTime
                  if (!n) return null
                  var r = n - new Date().getTime() < 864e5,
                    a = new Date(n).toLocaleString(
                      Object(V.a)(t || 'en'),
                      r ? { hour: '2-digit', minute: '2-digit' } : { weekday: 'long', month: 'short', day: '2-digit' },
                    )
                  return Oe({ expiration: a })
                },
              },
              {
                key: '_renderConversationActions',
                value: function () {
                  var e = this.props.conversation,
                    t = (null == e ? void 0 : e.type) !== F.a.GROUP,
                    n = !(null != e && e.trusted)
                  return y.createElement(
                    Z.a,
                    null,
                    y.createElement(ne.a, null),
                    t ? this._renderBlockUserButton() : null,
                    this._renderReportConversationButton(),
                    y.createElement(_.a, {
                      confirmationSheetConfirmButtonLabel: Ie.confirmButtonLabel,
                      confirmationSheetConfirmButtonType: 'destructiveFilled',
                      confirmationSheetHeadline: Ie.header,
                      confirmationSheetText: Ie.text,
                      label: n ? Ie.actionTextDelete : Ie.actionTextLeave,
                      onConfirmationSheetConfirm: this._handleLeaveConversation,
                      withBottomBorder: !1,
                    }),
                  )
                },
              },
              {
                key: '_renderBlockUserButton',
                value: function () {
                  var e = this.props.isSelfConversation,
                    t = this._getScreenNameOfOneToOneConvo(),
                    n = this._getBlockedOfOneToOneConvo(),
                    r = n ? De({ screenName: t }) : Te({ screenName: t }),
                    a = n ? je({ screenName: t }) : xe({ screenName: t })
                  return e
                    ? null
                    : y.createElement(_.a, {
                        color: 'primary',
                        confirmationSheetText: r,
                        label: a,
                        onConfirmationSheetConfirm: n ? this._handleUnblockUser : this._handleBlockUser,
                      })
                },
              },
              {
                key: '_renderReportConversationButton',
                value: function () {
                  var e = this.props,
                    t = e.conversation,
                    n = e.conversationId,
                    r = e.inboxType,
                    a = e.isSelfConversation,
                    i =
                      (null == t ? void 0 : t.type) !== F.a.GROUP
                        ? Pe({ screenName: this._getScreenNameOfOneToOneConvo() })
                        : ke,
                    o = {
                      pathname: '/i/report/dm_conversation/'.concat(n),
                      state: { clientReferer: window.location.pathname, scribeNamespace: Be, inboxType: r },
                    }
                  return a
                    ? null
                    : y.createElement(ae.a, {
                        color: 'primary',
                        label: i,
                        link: o,
                        onPress: this._handleReportConversation,
                      })
                },
              },
            ]),
            n
          )
        })(y.Component),
        He = oe.a.create(function (e) {
          return {
            root: { backgroundColor: e.colors.cellBackground },
            edit: { flexShrink: 0 },
            groupSection: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            groupSectionRight: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
            notificationsToggleContainer: {
              alignItems: 'center',
              flexDirection: 'row',
              flexGrow: 1,
              justifyContent: 'space-between',
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            notificationsDescription: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingBottom: e.componentDimensions.gutterVertical,
              paddingTop: 0,
            },
          }
        })
      t.default = Object(ce.c)(Be)(L(Ne))
    },
    zQEV: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return p
      }),
        n.d(t, 'a', function () {
          return h
        })
      n('z84I'), n('ho0z')
      var r = n('ERkP'),
        a = n('t62R'),
        i = n('aWyx'),
        o = n('3XMw'),
        c = n.n(o),
        s = c.a.c1d4ac83,
        l = c.a.abc7b032,
        u = c.a.i263b293,
        d = function (e) {
          var t = e.children,
            n = e.conversationId
          return r.createElement(a.b, { link: '/messages/'.concat(n, '/participants') }, t)
        },
        p = function (e, t) {
          return e >= 2
            ? r.createElement(
                c.a.I18NFormatMessage,
                { $i18n: 'e3534476' },
                r.createElement(d, { conversationId: t }, c.a.d1242bcc({ count: e })),
              )
            : r.createElement(c.a.I18NFormatMessage, { $i18n: 'b6656850', count: e })
        },
        f = function (e) {
          var t = e.entry,
            n = e.users
          return t.participants
            ? r.createElement(
                'span',
                null,
                t.participants.map(function (e, t) {
                  var i = e.user_id,
                    o = n[i]
                  return o
                    ? r.createElement('span', { key: t }, t > 0 ? ', ' : null, r.createElement(a.b, null, o.name))
                    : null
                }),
              )
            : null
        },
        h = function (e, t, n, o) {
          var d,
            p = n === e.by_user_id
          switch (t) {
            case i.b.CONVERSATION_AVATAR_UPDATE:
              return (d = e.by_user_id && o[e.by_user_id] && o[e.by_user_id].name)
                ? p
                  ? s
                  : (function (e) {
                      return r.createElement(
                        c.a.I18NFormatMessage,
                        { $i18n: 'bff29c94' },
                        r.createElement(a.b, null, e),
                      )
                    })(d)
                : l
            case i.b.CONVERSATION_NAME_UPDATE:
              var h = r.createElement(a.b, null, e.conversation_name)
              return (d = e.by_user_id && o[e.by_user_id] && o[e.by_user_id].name)
                ? p
                  ? (function (e) {
                      return r.createElement(c.a.I18NFormatMessage, { $i18n: 'b16e4d45' }, e)
                    })(h)
                  : (function (e, t) {
                      return r.createElement(
                        c.a.I18NFormatMessage,
                        { $i18n: 'c5760698' },
                        r.createElement(a.b, null, e),
                        t,
                      )
                    })(d, h)
                : (function (e) {
                    return r.createElement(c.a.I18NFormatMessage, { $i18n: 'a72730a0' }, e)
                  })(h)
            case i.b.JOIN_CONVERSATION:
              return (d = e.sender_id && o[e.sender_id] && o[e.sender_id].name)
                ? (function (e) {
                    return r.createElement(c.a.I18NFormatMessage, { $i18n: 'fa95b019' }, r.createElement(a.b, null, e))
                  })(d)
                : u
            case i.b.PARTICIPANTS_LEAVE:
              return (function (e) {
                return r.createElement(c.a.I18NFormatMessage, { $i18n: 'fc10875e' }, e)
              })(r.createElement(f, { entry: e, users: o }))
            case i.b.PARTICIPANTS_JOIN:
              return (function (e, t) {
                return e
                  ? r.createElement(c.a.I18NFormatMessage, { $i18n: 'a4bc88c2' }, r.createElement(a.b, null, e), t)
                  : r.createElement(c.a.I18NFormatMessage, { $i18n: 'bfdff0c3' }, t)
              })((d = e.sender_id && o[e.sender_id] && o[e.sender_id].name), r.createElement(f, { entry: e, users: o }))
            default:
              return ''
          }
        }
    },
  },
])
//# sourceMappingURL=WIPED
