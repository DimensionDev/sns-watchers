;(window.webpackJsonp = window.webpackJsonp || []).push([
  [50, 10, 18, 170],
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
        o = n.n(a),
        i = n('M2x3'),
        c = 'settingsAppBar',
        s = n('/yvb'),
        l = n('rHpw'),
        u = o.a.bb081ea1,
        d = { viewType: 'settings_button' },
        p = r.memo(function (e) {
          var t = e.onPress,
            n = e.pullRight,
            a = e.to
          return r.createElement(s.a, {
            accessibilityLabel: u,
            behavioralEventContext: d,
            hoverLabel: { label: u },
            icon: r.createElement(i.a, null),
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
        o = n('+0pD'),
        i = (e.exports = function (e, t, n) {
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
                    if (o(e)) return !!o(t) && ((e = r.call(e)), (t = r.call(t)), i(e, t, n))
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
                    for (l = d.length - 1; l >= 0; l--) if (((u = d[l]), !i(e[u], t[u], n))) return !1
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
        o = n('Y9Ll'),
        i = n.n(o),
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
      function R(e) {
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
      function w(e) {
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
        x = { height: 0, width: 0, left: 0, right: 0, top: 0, bottom: 0 },
        P = function (e, t, n) {
          return Math.min(t, Math.max(e, n))
        },
        T = function (e, t) {
          return Math.sqrt(Math.pow(e.clientY - t.clientY, 2) + Math.pow(e.clientX - t.clientX, 2))
        },
        A = (function (e) {
          u()(n, e)
          var t = w(n)
          function n(e) {
            var r
            return (
              a()(this, n),
              (r = t.call(this, e)),
              v()(s()(r), '_itemDimensions', x),
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
                  o = t.onTap,
                  i = P(a, n, r.state.zoom),
                  c = r.state.zoom
                c !== i && 1 === i ? r.resetZoom() : r.setState({ lastX: 0, lastY: 0, zoom: i }),
                  0 === e.touches.length
                    ? (r._lastTouchTime && r._lastTouchTime + 300 > e.timeStamp
                        ? (r._clickTimer && clearTimeout(r._clickTimer), r._handleDoubleTap(e))
                        : c <= 1 && !r._moved && (r._clickTimer = setTimeout(o, 300)),
                      (r._lastTouchTime = e.timeStamp))
                    : e.preventDefault()
              }),
              (r.state = R({}, k)),
              r
            )
          }
          return (
            i()(
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
                      o = {
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
                      y.createElement(S.Motion, { style: o }, function (t) {
                        var n = t.zoom,
                          o = t.zoomCenterX,
                          i = t.zoomCenterY
                        return y.createElement(
                          O.a,
                          {
                            ref: e._ref,
                            style: [
                              M.fill,
                              {
                                transform: [{ scale: n }],
                                transformOrigin: ''.concat(a ? o : r.x, 'px ').concat(a ? i : r.y, 'px'),
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
                          o = a.lastX,
                          i = a.lastY,
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
                        f.width - p > 0 && (m = n - o),
                          h - d > 0 && (v = r - i),
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
                      o = a.maxZoom,
                      i = a.maxZoomBounce,
                      c = a.minZoom,
                      s = a.minZoomBounce
                    if (0 !== r.x || 0 !== r.y) {
                      var l = T(e.touches[0], e.touches[1]),
                        u = this._lastDistance ? l / this._lastDistance : 1,
                        d = P(c - s, o + i, n * u)
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
                    return I && e.resetZoom ? (e.onZoomed(!1), R({}, k)) : t
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
    '2Daw': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return A
      })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        i = n.n(o),
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
        R = n('rHpw'),
        w = n('hOZg'),
        I = n('Mbn/'),
        k = n('T8pk')
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
            r = p()(e)
          if (t) {
            var a = p()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return u()(this, n)
        }
      }
      var P = b.a.b87ca51a,
        T = b.a.eebff22c,
        A = (function (e) {
          s()(n, e)
          var t = x(n)
          function n() {
            return a()(this, n), t.apply(this, arguments)
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.borderRadius,
                    n = e.maskStyle,
                    r = e.mediaItem,
                    a = e.onAddMediaFiles,
                    o = e.onCrop,
                    i = e.onRemove,
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
                              o ? this._renderMediaCrop() : null,
                              i ? this._renderMediaRemove() : null,
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
                    accessibilityLabel: P,
                    hoverLabel: { label: P },
                    icon: m.createElement(w.a, null),
                    onPress: e,
                    style: j.rightButton,
                    type: 'onMediaText',
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
                    style: n ? j.middleButton : j.rightButton,
                    type: 'onMediaText',
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
                    o = e.onEdit,
                    i = m.createElement(k.a, null)
                  return a
                    ? m.createElement(g.a, {
                        acceptGifs: t,
                        acceptVideo: n,
                        accessibilityLabel: r,
                        icon: i,
                        onChange: a,
                        type: 'onMediaText',
                      })
                    : m.createElement(S.a, {
                        accessibilityLabel: r,
                        icon: i,
                        onPress: o,
                        style: j.edit,
                        type: 'onMediaText',
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
      var M = R.a.create(function (e) {
          return {
            infinite: { borderRadius: e.borderRadii.infinite },
            medium: { borderRadius: e.borderRadii.small },
            none: { borderRadius: e.borderRadii.none },
          }
        }),
        j = R.a.create(function (e) {
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
        o = n('Y9Ll'),
        i = n.n(o),
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
        R = n.n(C),
        w = n('mN6z'),
        I = n('U+bB'),
        k = n('MWbm'),
        x = n('0Ki6'),
        P = n('3dad'),
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
      var B = R.a.b327c129,
        F = R.a.gff1f69e,
        N = (function (e) {
          u()(n, e)
          var t = L(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
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
            i()(
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
                    Object(w.a)(e.photo, this.props.photo) ||
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
                      o = e.onLoad,
                      i = e.onTap,
                      c = e.onZoomed,
                      s = e.photo,
                      l = e.resetZoom,
                      u = e.style,
                      d = e.zoomable,
                      p = this.state.loadingVariant,
                      f = (t && p && Math.max(p.width, p.height) >= 680 ? p.uri : null) || n._selectSource(s)
                    if (!f || null === p) return null
                    var h = y.createElement(I.a, {
                      accessibilityLabel: s.ext_alt_text ? s.ext_alt_text : B,
                      defaultSource: p && p.uri,
                      draggable: !0,
                      onError: p ? void 0 : a,
                      onLoad: o,
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
                      d ? y.createElement(x.a, { onTap: i, onZoomed: c, resetZoom: l }, h) : h,
                    )
                  },
                },
              ],
              [
                {
                  key: '_selectCachedVariant',
                  value: function (e) {
                    var t = P.a.getOriginalImage(e)
                    return t ? T.a.selectLargestCachedVariant(t) : Promise.resolve()
                  },
                },
                {
                  key: '_selectSource',
                  value: function (e) {
                    var t = P.a.getOriginalImage(e)
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
        U = y.createElement(M.a, { ariaValueText: F, indeterminate: !0, style: H.progressBar }),
        W = N,
        V = n('RCZO'),
        z = n('Modb'),
        G = n('XrEN')
      function K(e) {
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
          var t = K(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
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
            i()(n, [
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
                    g()({}, G.a.extractVideoProps(r, n), {
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
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
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
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    n = e.onDismiss,
                    r = e.onLayout,
                    a = e.style,
                    o = !!n
                  return y.createElement(
                    k.a,
                    {
                      onLayout: r,
                      onTouchEnd: o ? this._handleTouchEnd : void 0,
                      onTouchMove: o ? this._handleTouchMove : void 0,
                      onTouchStart: o ? this._handleTouchStart : void 0,
                      style: a,
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
        re = R.a.ac85c6b1,
        ae = function (e) {
          var t = e.isAvatar,
            n = e.isCurrentlyDisplayed,
            r = e.mediaDetail,
            a = e.onDismiss,
            o = e.onTap,
            i = e.promotedContent,
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
            R = m.height,
            w = m.width,
            I =
              b || t
                ? Object(V.f)({ mediaWidth: C, mediaHeight: O, containerWidth: w, containerHeight: R }, t)
                : oe.mediaItem
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
              style: oe.root,
            },
            d
              ? y.createElement(ne.a, {
                  onRetry: function () {
                    p(null)
                  },
                  style: oe.errorDetail,
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
                        W,
                        g()({}, s, {
                          imageStyle: t && oe.avatarImage,
                          onError: function (e) {
                            p(e.nativeEvent.error)
                          },
                          onLoad: function () {
                            p(null)
                          },
                          onTap: o,
                          photo: r,
                          style: oe.container,
                          zoomable: !0,
                        }),
                      )
                    : G.a.isVideo(r) && c
                    ? y.createElement(X, {
                        isCurrentlyDisplayed: n,
                        promotedContent: i,
                        style: oe.container,
                        video: r,
                        videoId: c,
                      })
                    : null,
                ),
          )
        },
        oe = A.a.create(function (e) {
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
        ie = y.memo(ae, function (e, t) {
          return Object(w.a)(e, t)
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
          var o
          return (
            a()(this, n),
            (o = t.call(this, e, r)),
            v()(s()(o), '_handleChangeV2', function (e) {
              var t = e.index,
                n = e.intersectionRatio,
                r = o.props.onMediaItemChanged
              1 === n && r && r(t)
            }),
            v()(s()(o), '_getItemVideoId', function (e) {
              return (
                o.props.videoId ||
                (function (e) {
                  return ce.b.forTweet(e.expanded_url.split('/')[3])
                })(e)
              )
            }),
            v()(s()(o), '_handleMediaDetailZoomed', function (e) {
              var t = o.props.onMediaDetailZoomed
              o.state.isZoomed !== e && o.setState({ isZoomed: e }), t && t(e)
            }),
            (o.state = { isZoomed: !1 }),
            o
          )
        }
        return (
          i()(n, [
            {
              key: 'shouldComponentUpdate',
              value: function (e, t) {
                return !Object(w.a)(e, this.props) || !Object(w.a)(t, this.state)
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
                  o = t.onDismiss,
                  i = t.onTap,
                  c = t.promotedContent,
                  s = this.state.isZoomed,
                  l = a.map(function (t, l) {
                    var u = G.a.isVideo(t),
                      d = e._getItemVideoId(t),
                      p = r === l
                    return (u && d) || !u
                      ? y.createElement(ie, {
                          dataSaver: n,
                          isAvatar: e.props.isAvatar,
                          isCurrentlyDisplayed: p,
                          key: l,
                          mediaDetail: a[l],
                          onDismiss: s ? void 0 : o,
                          onTap: i,
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
                  o = t.onMediaItemChanged,
                  i = this.state.isZoomed,
                  c = G.a.isVideo(a[r])
                return this.context.featureSwitches.isTrue('responsive_web_carousel_v2_media_detail_enabled')
                  ? y.createElement(
                      le.a,
                      {
                        childrenStyle: [he.dimensions, he.scrollSnap],
                        dominantButtonColor: n,
                        isLocked: i,
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
                        locked: i,
                        onChange: o,
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
        o =
          (n('2G9S'),
          n('hBpG'),
          n('mlET'),
          n('Ysgh'),
          n('KqXw'),
          n('z84I'),
          function (e) {
            return e.getArrayValue('dm_reactions_config_active_reactions')
          }),
        i = function (e) {
          var t = e.getArrayValue('dm_reactions_config_inactive_reactions'),
            n = o(e)
          return [].concat(a()(n), a()(t))
        },
        c = function (e, t) {
          var n = i(t).find(function (t) {
            return t.endsWith(e)
          })
          if (n) return n.split(':')[0]
        },
        s = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { includeInactive: !1 }
          return t.includeInactive
            ? i(e).map(function (e) {
                return e.split(':')[1]
              })
            : o(e).map(function (e) {
                return e.split(':')[1]
              })
        }
    },
    '3AAD': function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r)
      function o(e, t) {
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
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? o(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : o(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var c = i(i({}, n('7n04').a), {}, { pinToNewestWhenAtNewest: !0 })
      t.a = c
    },
    '3GUV': function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        i = n.n(o),
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
        o = n('Y9Ll'),
        i = n.n(o),
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
            i()(n, [
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
          return R
        })
      var r,
        a = n('KEM+'),
        o = n.n(a),
        i = n('k49u'),
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
        S = o()({}, i.a.DirectMessageConversationNotFound, {
          customAction: function () {
            return !1
          },
        }),
        C = { defaultToast: { text: d }, showToast: !0 },
        R =
          ((r = { defaultToast: { text: u } }),
          o()(r, i.a.CurrentUserSuspended, {
            toast: { text: m, action: { label: f, link: 'https://support.twitter.com/articles/15790' } },
          }),
          o()(r, i.a.DirectMessageCannotDmOtherUser, { toast: { text: p } }),
          o()(r, i.a.DirectMessageDuplicate, { toast: { text: _ } }),
          o()(r, i.a.DirectMessageOtherUserNotFollowing, {
            toast: { text: y, action: { label: f, link: 'https://support.twitter.com/articles/14606' } },
          }),
          o()(r, i.a.DirectMessagesSenderBlocksRecipient, { toast: { text: E } }),
          o()(r, i.a.DirectMessageTooLongError, { toast: { text: v } }),
          o()(r, i.a.DirectMessageTweetNotFound, { toast: { text: b } }),
          o()(r, i.a.GenericBadRequest, { customAction: l.a }),
          o()(r, i.a.MessageSendError, { toast: { text: O } }),
          o()(r, i.a.OverStatusUpdateLimit, {
            toast: { action: { label: f, link: 'https://support.twitter.com/articles/15364' }, text: h },
          }),
          o()(r, i.a.TargetUserNotFound, { toast: { text: g } }),
          o()(r, 'showToast', !0),
          r)
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
    'A/tJ': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'DMConversationCreator', function () {
          return b
        })
      n('JtPf'), n('7x/C'), n('MvUL'), n('KqXw')
      var r = n('ERkP'),
        a = (n('WNMA'), n('RqPI')),
        o = n('3nOA'),
        i = n('rxPX'),
        c = n('0KEI'),
        s = n('G6rE'),
        l = function (e, t) {
          return t.match.params.screenName
        },
        u = function (e, t) {
          var n = a.p(e),
            r = (function (e, t) {
              var n = l(0, t)
              return n ? s.e.selectIdByScreenName(e, n) : null
            })(e, t)
          return n && r ? Object(o.a)(n, r) : null
        },
        d = Object(i.a)()
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
            o = e.history,
            i = e.screenName
          return (
            r.useEffect(
              function () {
                Promise.resolve()
                  .then(function () {
                    return v()(!!i, 'screenName must be defined'), a(i)
                  })
                  .catch(function (e) {
                    n(p.a)(e), o.replace('/messages')
                  })
              },
              [i, a, n, o],
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
        o = n('m3Bd'),
        i = n.n(o),
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
            o = i()(e, ['conversation_id', 'participants'])
          return u(
            u({ conversation_id: r }, o),
            {},
            { entries: t.entryIdsByConversationId[r] || [], participants: p(a, n) },
          )
        },
        m = function (e, t, n) {
          var r = e.conversation_id,
            a = e.participants,
            o = e.social_proof,
            l = u(
              u({ conversation_id: r }, i()(e, ['conversation_id', 'participants', 'social_proof'])),
              {},
              { entries: f(r, t), participants: p(a, n), social_proof: void 0 },
            )
          return (
            o &&
              (l.social_proof = (function () {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).map(function (t) {
                  if (t.proof_type === s.d.MUTUAL_FRIENDS) {
                    var n = t.users
                    return u(
                      u({}, i()(t, ['users'])),
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
              })(o, n)),
            l
          )
        }
    },
    Avzu: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        o = n('ERkP'),
        i = n('Lsrn'),
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
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [i.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          o.createElement(
            'g',
            null,
            o.createElement('path', {
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
        o = n('m3Bd'),
        i = n.n(o),
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
          n = i()(e, ['children'])
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
        o = n('VrFO'),
        i = n.n(o),
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
        R = n('p9G8'),
        w = n('AQOc'),
        I = n('/NU0'),
        k = n('G6rE'),
        x = n('0KEI'),
        P = n('oEGd'),
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
          S.p,
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
          function (e, t, n, r, a, o, i, c, s) {
            var l = e && e.data,
              u = l && Object(w.b)(l, t, o),
              d = u && Object(R.a)(u, a)
            if (!a) throw new Error('logged-in user not found')
            return {
              avatarMedia: i,
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
          createLocalApiErrorHandler: Object(x.createLocalApiErrorHandlerWithContextFactory)(
            'CONVERSATION_GROUP_INFO_SCREEN',
          ),
          fetchConversation: E.fetchConversation,
          fetchConversationIfNeeded: E.fetchConversationIfNeeded,
          removeAvatarMedia: E.removeAvatarMedia,
          removeMediaUpload: O.i,
          setConversationAvatar: E.setConversationAvatar,
          updateConversationName: E.updateConversationName,
        },
        j = Object(P.g)(A, M),
        D = n('I2k/'),
        L = n('aA19'),
        B = n('v//M'),
        F = n('jHSc'),
        N = n('3XMw'),
        H = n.n(N),
        U = n('mN6z'),
        W = n('P68U'),
        V = n('eyty'),
        z = n('MWbm'),
        G = n('mw9i'),
        K = n('/yvb'),
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
            var o
            return (
              i()(this, n),
              (o = t.call(this, e, r)),
              b()(u()(o), '_renderContent', function () {
                return g.createElement(z.a, null, o._renderGroupAvatarPicker(), o._renderGroupNameEditor())
              }),
              b()(u()(o), '_handleFetch', function () {
                var e = o.props,
                  t = e.conversationId,
                  n = e.createLocalApiErrorHandler
                ;(0, e.fetchConversationIfNeeded)({ conversationId: t }).catch(n(Object(D.a)(t)))
              }),
              b()(u()(o), '_handleGroupNameUpdated', function (e) {
                o.setState({ groupNameEdit: e.target.value })
              }),
              b()(u()(o), '_handleSavePress', function () {
                o._savePress()
              }),
              b()(u()(o), '_savePress', function () {
                var e = o.props,
                  t = e.avatarMedia,
                  n = e.conversationId,
                  r = e.createLocalApiErrorHandler,
                  a = e.fetchConversation,
                  i = e.groupName,
                  c = e.history,
                  s = e.setConversationAvatar,
                  l = e.updateConversationName,
                  u = o.state.groupNameEdit,
                  d = []
                return (
                  t && d.push(s(n).catch(r())),
                  u && i !== u && d.push(l({ conversationId: n, name: u }).catch(r({ showToast: !0 }))),
                  Promise.all(d).then(
                    function () {
                      a({ conversationId: n }).catch(r(Object(D.a)(n))),
                        c.goBack({ backLocation: '/messages/'.concat(n, '/info'), shouldReplaceOnFallback: !0 })
                    },
                    function () {
                      return t && o._clearAvatarMedia(t.id)
                    },
                  )
                )
              }),
              b()(u()(o), '_handleAvatarMediaChange', function (e) {
                var t = a()(e, 1)[0],
                  n = o.props,
                  r = n.addAvatarMedia,
                  i = n.avatarMedia,
                  c = n.conversationId
                i && o._clearAvatarMedia(i.id), r(c, t)
              }),
              b()(u()(o), '_handleMediaFailure', function (e) {
                o._clearAvatarMedia(e)
              }),
              (o.state = { groupNameEdit: e.groupName }),
              o
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
                      F.b,
                      {
                        backLocation: '/messages/'.concat(t, '/info'),
                        history: r,
                        rightControl: this._renderRightControl(),
                        title: J,
                      },
                      g.createElement(
                        G.a,
                        { style: re.root },
                        g.createElement(B.a, {
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
                      o = r || !((a && a !== n) || t)
                    return g.createElement(K.a, {
                      children: ee,
                      disabled: o,
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
                      o = g.createElement(L.a, { conversation: n, perspective: a })
                    return g.createElement(
                      z.a,
                      null,
                      g.createElement(q.a, { progress: r }),
                      g.createElement(
                        z.a,
                        { style: re.avatarContainerRoot },
                        g.createElement(W.default, {
                          borderRadius: _.a.INFINITE,
                          currentContent: o,
                          location: V.d.Avatar,
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
                      o = t.removeMediaUpload
                    ;(n && n.uploading) || o(e), a(r, e)
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
        o = n('Y9Ll'),
        i = n.n(o),
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
          i()(n, [
            {
              key: 'render',
              value: function () {
                var e = this.props,
                  t = e.align,
                  n = e.color,
                  r = e.confirmationSheetConfirmButtonLabel,
                  a = e.confirmationSheetConfirmButtonType,
                  o = e.confirmationSheetHeadline,
                  i = e.confirmationSheetText,
                  c = e.label
                return y.createElement(
                  y.Fragment,
                  null,
                  y.createElement(b.a, { align: t, color: n, label: c, onPress: this._handleClick }),
                  this.state.showConfirmation
                    ? y.createElement(g.a, {
                        confirmButtonLabel: r,
                        confirmButtonType: a,
                        headline: o,
                        onCancel: this._handleCancel,
                        onConfirm: this._handleConfirm,
                        text: i,
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
        o = n('Y9Ll'),
        i = n.n(o),
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
        R = n('3XMw'),
        w = n.n(R),
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
      var x = w.a.i9028824,
        P = 'sliceTimeline',
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
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              v()(s()(e), '_render', function () {
                var t = e.props,
                  n = t.footer,
                  r = t.items,
                  a = t.noItemsRenderer,
                  o = t.numColumns,
                  i = t.onScrollEnd,
                  c = t.renderer,
                  s = t.withoutHeadroom
                return !r || o < 1
                  ? null
                  : 1 === o
                  ? y.createElement(I.a, {
                      cacheKey: P,
                      footer: n,
                      identityFunction: T,
                      items: r,
                      noItemsRenderer: a,
                      onNearEnd: e._handleNearEnd,
                      onScrollEnd: i,
                      renderer: c,
                      withoutHeadroom: s,
                    })
                  : y.createElement(C.a, {
                      ListEmptyComponent: a,
                      data: r,
                      keyExtractor: T,
                      numColumns: o,
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
                  o = t.fetchIfNeeded
                ;(n ? a : o)().catch(r())
              }),
              e
            )
          }
          return (
            i()(n, [
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
                        accessibilityLabel: x,
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
        o = n('Y9Ll'),
        i = n.n(o),
        c = (n('yH/f'), n('B5iK')),
        s = (function () {
          function e(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.freeze({})
            a()(this, e)
            var r = n.interval,
              o = void 0 === r ? 6e4 : r,
              i = n.burstInterval,
              s = void 0 === i ? 3e3 : i,
              l = n.burstDuration,
              u = void 0 === l ? 3e5 : l
            ;(this.pollTimer = new c.b(o).interval(t)), (this.burstTimer = new c.a(this.pollTimer, s, u))
          }
          return (
            i()(e, [
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
        o = n.n(a),
        i = n('MWbm'),
        c = n('rHpw'),
        s = n('t62R'),
        l = c.a.create(function (e) {
          return { root: { paddingBottom: e.spaces.space20 } }
        }),
        u = o.a.d84b485d,
        d = o.a.be0c83d7
      t.a = function (e) {
        var t = e.entry,
          n = e.isCompact,
          a = 'follow' === t.reason ? u : d
        return n
          ? r.createElement(s.b, { color: 'gray700' }, a)
          : r.createElement(
              i.a,
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
        o = n('k49u'),
        i = n('lRnM'),
        c = n('LVU8'),
        s = function (e) {
          return a()({}, o.a.ClientNotPermitted, {
            customAction: function () {
              return Object(c.d)('/messages/', { statusCode: 401 }), Object(i.t)(e)
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
        o = n('Y9Ll'),
        i = n.n(o),
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
            i()(e, [
              {
                key: 'handlePositioningUpdate',
                value: function (e) {
                  this._handlers.forEach(function (t) {
                    var n = t.state,
                      r = t.zone,
                      a = r.callback,
                      o = r.condition,
                      i = n.listLength,
                      c = n.proximity,
                      s = (function (e, t) {
                        return e(t.getForList(), t.getForViewport()) ? l.INSIDE : l.OUTSIDE
                      })(o, e),
                      d = e.getListLength(),
                      p = u(c, i, s, d)
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
        o = n('KEM+'),
        i = n.n(o),
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
                i()(e, t, n[t])
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
          o = e.primaryAction,
          i = e.titleRichText,
          c = e.titleText,
          m = s()(e, ['bodyRichText', 'bodyText', 'onImpression', 'primaryAction', 'titleRichText', 'titleText']),
          y = Object(h.a)(),
          b = function () {
            y.scribe({ action: 'click' })
          },
          g = i
            ? l.createElement(f.a, { entities: i.entities, onEntityClick: b, text: i.text })
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
              v({}, o),
              {},
              {
                onClick: function (t) {
                  ;(null == o ? void 0 : o.onClick) && o.onClick(t), e(t)
                },
              },
            )
          },
          O = l.createElement(p.a.Consumer, null, function (e) {
            var t = e.handleNextSlide
            return l.createElement(u.a, a()({}, m, { headline: g, primaryAction: o ? E(t) : void 0, subtext: _ }))
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
        o = n('VrFO'),
        i = n.n(o),
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
        R = n('Es6L'),
        w = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('rHpw'))
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
      var x = w.a.create(function (e) {
          return {
            fill: { flex: 1, alignSelf: 'stretch' },
            viewportView: k(k({}, w.a.absoluteFillObject), {}, { overflowY: 'auto' }),
            appBarContainer: { position: 'sticky', top: 0 },
            appBarZindex: { backfaceVisibility: 'hidden', zIndex: e.componentZIndices.appBarZIndex },
          }
        }),
        P = n('MWbm'),
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
          i()(this, n)
          for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
          return (
            (e = t.call.apply(t, [this].concat(a))),
            b()(u()(e), '_renderChildren', function (t) {
              var n = e.props.children
              return e.context.rootDetailPerColumnScroll
                ? _.createElement(
                    P.a,
                    { style: x.fill },
                    _.createElement(
                      T.a,
                      { style: x.viewportView },
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
                  Object(R.a)() ? this._renderInlineNav({ isTwoColumnLayout: !1 }) : _.createElement(C.a.Configure, n),
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
                  o = a.SideNavButton,
                  i = a.TabBar,
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
                  R = a.subtitle,
                  w = a.title,
                  I = a.titleIconCell,
                  k = a.titleIconCellSize,
                  T = a.withBottomBorder,
                  A = a.withDetailOpen,
                  M = a.withSearchBox,
                  j = a.withTweetButton,
                  D = 'root' === v,
                  L = 'secondaryRoot' === v,
                  B = 'primaryDetail' === v,
                  F = (B && O) || (D && E),
                  N = D || (B && r),
                  H = D ? g.c : B ? g.a : void 0,
                  U = _.createElement(
                    P.a,
                    { style: n ? [x.appBarContainer, x.appBarZindex] : x.appBarZindex },
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
                      subtitle: F ? R : void 0,
                      title: w,
                      titleDomId: H,
                      titleIconCell: I,
                      titleIconCellSize: k,
                      withBottomBorder: T,
                    }),
                  ),
                  W =
                    D || (L && A)
                      ? null
                      : _.createElement(C.a.Configure, {
                          SideNavButton: o,
                          TabBar: i,
                          TeamsSwitcher: c,
                          backLocation: s,
                          documentTitle: l,
                          headerless: u,
                          middleControl: f,
                          onBackClick: h,
                          rightControl: m,
                          searchBoxOptions: y,
                          subtitle: R,
                          title: w,
                          withSearchBox: M,
                          withTweetButton: j,
                        })
                return _.createElement(_.Fragment, null, W, U, n ? null : b)
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
        o = n('ERkP'),
        i = n('Lsrn'),
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
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [i.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          o.createElement(
            'g',
            null,
            o.createElement('path', {
              d: 'M3.5 5.25H2c-.414 0-.75.336-.75.75s.336.75.75.75h1.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm18.5 12H7.5c-.414 0-.75-.337-.75-.75V2c0-.414-.336-.75-.75-.75s-.75.336-.75.75v14.5c0 1.24 1.01 2.25 2.25 2.25H22c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm-4 2.5c-.414 0-.75.336-.75.75V22c0 .414.336.75.75.75s.75-.336.75-.75v-1.5c0-.414-.336-.75-.75-.75z',
            }),
            o.createElement('path', {
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
        o = (n('z84I'), n('ho0z'), n('+KXO'), n('ERkP')),
        i = n('aWyx'),
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
            if (t.type === i.a.ONE_TO_ONE) {
              var o = Object(c.a)(t, r).map(function (e) {
                return e.user
              })
              return a()(o, 1)[0].name
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
          R = void 0 === C || C,
          w = e.withVDLRefresh,
          I = void 0 !== w && w
        if (t) {
          var k = g ? g() : null
          if (t.type === i.a.ONE_TO_ONE) {
            var x = Object(c.a)(t, b).map(function (e) {
                return e.user
              }),
              P = a()(x, 1)[0],
              T = o.createElement(u.a, {
                color: E,
                isProtected: P.protected,
                isVerified: P.verified,
                name: P.name,
                screenName: P.screen_name,
                weight: S,
                withLink: !1,
                withScreenName: R,
              })
            return (I && !r) || l ? o.createElement(d.a, null, T, k) : T
          }
          var A = t.participants,
            M = Object.keys(A).length
          if (r)
            return o.createElement(
              d.a,
              { color: E },
              o.createElement(p.b, { color: E, numberOfLines: 1, style: y.title, weight: S }, Object(h.a)(t, b, r)),
              I
                ? null
                : o.createElement(p.b, { color: 'gray700', numberOfLines: 1, weight: 'normal' }, m({ peopleCount: M })),
            )
          var j = o.createElement(p.b, { color: E, numberOfLines: 1, weight: S }, Object(h.a)(t, b, r))
          return (I && !r) || l ? o.createElement(d.a, null, j, k) : j
        }
        var D = v(f)
        return o.createElement(p.b, { color: E, numberOfLines: 1, weight: S }, Object(h.b)(D, b))
      }
    },
    Oi4X: function (e, t, n) {
      'use strict'
      n('OZaJ'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        i = n.n(o),
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
        R = n('kGix'),
        w = n('AQOc'),
        I = n('UhuB'),
        k = n('pNZL'),
        x = n('G6rE'),
        P = n('oEGd'),
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
            return e === R.a.LOADED ? t : e
          },
        ),
        L = Object(C.createSelector)(
          function (e, t) {
            return _.selectEntriesForConversation(e, j(0, t))
          },
          O.p,
          function (e, t) {
            return t ? Object(T.d)(e, t) : void 0
          },
        ),
        B = Object(C.createSelector)(
          function (e, t) {
            return _.selectConversation(e, j(0, t))
          },
          _.selectEntries,
          T.l,
          O.p,
          T.m,
          T.n,
          x.e.selectAll,
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
          function (e, t, n, r, a, o, i, c, s, l, u, d, p, f, h, m, v, y, b) {
            var g = e && e.data
            return {
              conversation: (g && Object(w.a)(g, t, i)) || void 0,
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
              tweetAttachment: o,
            }
          },
        ),
        F = Object(P.d)(B, function (e) {
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
        W = n('Myq3'),
        V = n('VPAj')
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
      function G(e) {
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
      var K = function (e, t) {
          return e.getForItem(t).doesIntersectWith(e.getForViewport())
        },
        q = function (e) {
          return e.getForList().getBottom() - e.getForViewport().getBottom()
        },
        Y = function (e) {
          var t = e.isOwnMessage,
            n = e.typingIndicatorId,
            r = function (e) {
              return Object(W.a)(e.getList(), function (e) {
                return e.id !== n
              })
            }
          return G(
            G({}, U.a),
            {},
            {
              initialScrollHeadroom: Object(V.a)(0),
              scrollHeadroom: Object(V.a)(0),
              offsetCorrection: function (e, a) {
                var o = r(e),
                  i = r(a),
                  c = i && (!o || o.id !== i.id),
                  s = i && t(i.data.data),
                  l = o && K(e, o.id)
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
              o = t.message_data,
              i = o.sender_id,
              c = o.time,
              s = parseInt(c, 10) - parseInt(a, 10)
            return r === i && s >= 0 && s <= 6e4
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
        oe = n('cm6r'),
        ie = n('jV+4'),
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
          var o = le(t, a || ''),
            i = o.userDescription,
            c = o.userEntities,
            s = o.userFollowerCount,
            l = o.userFriendsCount,
            u = o.userIdStr,
            d = o.userIsVerified,
            p = o.userJoinDate,
            f = o.userName,
            h = o.userScreenName,
            m = o.userWithheldDescription,
            v = o.userWithheldEntities,
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
              oe.a,
              {
                interactiveStyles: g,
                link: e.withAnchorless('https://twitter.com/'.concat(h || '')),
                style: [ue.root, r && b && ue.borderBottom],
              },
              y.createElement(ie.a, {
                isVerified: d,
                name: f,
                screenName: h,
                style: ue.profileInfoItemMargin,
                weight: 'bold',
                withHoverCard: !0,
                withLink: !0,
              }),
              i && c && u
                ? y.createElement(ce.a, {
                    description: i,
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
        Re = (function (e) {
          u()(n, e)
          var t = Se(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              v()(s()(e), '_renderContents', function () {
                var t = e.props,
                  n = t.conversation,
                  r = t.entry,
                  a = t.entryType,
                  o = t.perspective,
                  i = t.users,
                  c = Object(Oe.a)(r, a, o, i)
                switch (a) {
                  case ve.b.CONVERSATION_AVATAR_UPDATE:
                    var s = n.avatar_image_https === r.conversation_avatar_image_https
                    return y.createElement(
                      y.Fragment,
                      null,
                      e._isValidImageSource(n.avatar_image_https) && s
                        ? y.createElement(
                            be.a,
                            { style: we.conversationAvatarContainer },
                            y.createElement(me.a, { conversation: n, perspective: o }),
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
                  o = r.sender_id ? a[r.sender_id] : void 0,
                  i = o ? { pathname: 'https://twitter.com/'.concat(o.screen_name) } : void 0
                return y.createElement(
                  oe.a,
                  { interactiveStyles: null, link: i, style: we.userAddedYouContainer },
                  o
                    ? y.createElement(_e.a, {
                        accessibilityLabel: o.screen_name,
                        screenName: o.screen_name,
                        size: 'medium',
                        uri: o.profile_image_url_https,
                        withHoverCard: !0,
                        withLink: !0,
                      })
                    : null,
                  y.createElement(Ce, { link: i, style: we.userAddedYouText }, t),
                )
              }),
              v()(s()(e), '_getJoinConversationDetailsWithFacepile', function (t, n) {
                var r = e.props.conversation,
                  a = t.slice(0, 20).map(function (e) {
                    return e.profile_image_url_https
                  })
                return y.createElement(
                  oe.a,
                  {
                    interactiveStyles: null,
                    link: { pathname: '/messages/'.concat(r.conversation_id, '/participants') },
                    style: we.joinConversationDetails,
                  },
                  n,
                  y.createElement(Ee.a, { style: we.userAvatarFacepile, userAvatarSize: 'xLarge', userAvatarUrls: a }),
                )
              }),
              e
            )
          }
          return (
            i()(n, [
              {
                key: 'shouldComponentUpdate',
                value: function (e) {
                  return !Object(ye.a)(this.props, e)
                },
              },
              {
                key: 'render',
                value: function () {
                  return y.createElement(be.a, { style: we.root }, this._renderContents())
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
        we = re.a.create(function (e) {
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
        Ie = Object(he.a)(Re),
        ke = n('ddV6'),
        xe = n.n(ke),
        Pe = n('oQhu')
      var Te = Object(Pe.a)(function (e) {
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
        De = Object(Pe.a)(function (e, t) {
          var n,
            r,
            a,
            o,
            i,
            c,
            s,
            l,
            u,
            d =
              ((n = Te(re.a.theme.scale)),
              (r = n.DMUserAvatarSizePx),
              (a = n.DMUserAvatarSpacerPx),
              (o = Ne[re.a.theme.scale]),
              (i = Be / o),
              (c = Fe / r),
              (l = Fe - (s = Fe / 2)),
              (u = Fe - s - a),
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
                  container: { base: { height: o }, active: { height: Be } },
                  base: { height: o, transform: [{ scale: 1 }] },
                  active: {
                    base: { transform: [{ scale: i }] },
                    sent: {
                      paddingRight: s / i,
                      transformOrigin: Ae.a.getConstants().isRTL ? 'bottom left' : 'bottom right',
                    },
                    received: {
                      paddingLeft: s / i,
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
        Be = 60,
        Fe = Be,
        Ne = { xSmall: 42, small: 42, normal: 47, large: 47, xLarge: 47 },
        He = {
          xSmall: 72.26,
          small: 165.61 - 89.3,
          normal: 158.22 - 94.4,
          large: 166.64 - 100.58,
          xLarge: 181.55 - 111.81,
        },
        Ue = '0.2s 0s ease-in-out',
        We = n('+Kfv'),
        Ve = { scribeAction: g.c },
        ze = Object(C.createSelector)(
          function (e, t) {
            return x.e.select(e, t.senderId)
          },
          M.l,
          M.r,
          function (e, t, n) {
            return { user: e, displaySensitiveMedia: t, isDmNsfwMediaFilterEnabled: n }
          },
        ),
        Ge = Object(P.g)(ze, Ve),
        Ke = {
          addToast: S.b,
          createLocalApiErrorHandler: Object(A.createLocalApiErrorHandlerWithContextFactory)(
            'DIRECT_MESSAGES_OVERFLOW_ACTIONS',
          ),
          deleteEntry: _.deleteEntry,
        },
        qe = Object(P.b)(Ke),
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
        ot = {
          createReaction: nt.d,
          createLocalApiErrorHandler: Object(A.createLocalApiErrorHandlerWithContextFactory)(
            'DIRECT_MESSAGES_REACTIONS_POPOVER',
          ),
          fetchUpdatesIfNeeded: tt.d,
          removeReaction: nt.k,
        },
        it = Object(P.g)(at, ot),
        ct = n('RhWx'),
        st = n.n(ct),
        lt = n('33Kz'),
        ut = n('wTX1'),
        dt = function (e) {
          var t = e.accessibilityLabelFormatter,
            n = e.count,
            r = e.emojiSize,
            a = e.emotion,
            o = e.enableHoverStyle,
            i = e.focusable,
            c = e.onPress,
            s = e.style,
            l = y.useContext($.a).featureSwitches,
            u = Object(lt.b)(a, l),
            d = t && u ? t({ emoji: u, count: n }) : void 0,
            p = ne.a.generate({ backgroundColor: re.a.theme.colors.gray50, color: re.a.theme.colors.gray700 })
          return y.createElement(
            oe.a,
            {
              accessibilityLabel: d,
              focusable: i,
              interactiveStyles: o ? p : null,
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
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              v()(s()(e), '_handleReactionScribing', function (t, n) {
                var r = e.props,
                  a = r.analytics,
                  o = r.entry,
                  i = r.isGroupDM,
                  c = r.participantsCount,
                  s = n ? 'delete_reaction' : 'create_reaction',
                  l = Object(T.c)(o)
                a.scribe({
                  section: 'twitter_service',
                  component: 'direct_messages',
                  element: s,
                  action: 'success',
                  data: {
                    conversation_id: o.conversation_id,
                    conversation_participant_count: c,
                    conversation_type: i ? ft.g.GROUP : ft.g.ONE_TO_ONE,
                    message_type: l,
                    reaction_emotion: t,
                  },
                })
              }),
              v()(s()(e), '_reactionClickHandler', function (t, n) {
                return function () {
                  var r = e.props,
                    a = r.createLocalApiErrorHandler,
                    o = r.createReaction,
                    i = r.dismiss,
                    c = r.entry,
                    s = r.fetchUpdatesIfNeeded,
                    l = r.perspective,
                    u = r.removeReaction,
                    d = { reaction_key: t, conversation_id: c.conversation_id, dm_id: c.id, perspective: l }
                  ;(n ? u : o)(d)
                    .then(e._handleReactionScribing(t, n))
                    .then(function () {
                      return s()
                    })
                    .catch(a()),
                    i()
                }
              }),
              e
            )
          }
          return (
            i()(n, [
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
      var gt = Object(ht.a)(it(bt)),
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
          for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
          return (
            (e = t.call.apply(t, [this].concat(o))),
            v()(s()(e), '_renderDMReactionPickerContent', function (t) {
              var n = e.props,
                r = n.entry,
                a = n.isGroupDM,
                o = n.participantsCount,
                i = n.perspective
              return y.createElement(gt, { dismiss: t, entry: r, isGroupDM: a, participantsCount: o, perspective: i })
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
        Rt = n('TnY3'),
        wt = n('mjJ+'),
        It = n('Q0VY'),
        kt = n('eb3s'),
        xt = n('/yvb'),
        Pt = n('ZToW'),
        Tt = n('CaKu'),
        At = n('i4Oy'),
        Mt = (n('hBpG'), n('tVqn'), n('tQbP'), n('4w6w')),
        jt = function (e, t) {
          if (null == e) return !1
          var n = t || [0, 0],
            r = xe()(n, 2),
            a = r[0],
            o = r[1]
          return !((0 === a || 1 === a) && e.length === o)
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
              o = ((null === (a = t.entities) || void 0 === a ? void 0 : a.urls) || []).find(function (e) {
                return e.url === n.card
              })
            return jt(t.text, o && o.indices)
          }
          return !0
        },
        Lt = function (e) {
          var t,
            n = null == e || null === (t = e.message_data) || void 0 === t ? void 0 : t.attachment
          return !(!n || !(n.card || n.tweet || n.photo || n.animated_gif || n.video))
        },
        Bt = function (e) {
          var t,
            n = null == e || null === (t = e.message_data) || void 0 === t ? void 0 : t.attachment
          return !(!n || !n.fleet)
        },
        Ft = function (e, t, n) {
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
        Wt = n('k/Ka')
      function Vt(e, t) {
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
            ? Vt(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Vt(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var Gt = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(Wt.a)(
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
      Gt.metadata = { width: 24, height: 24 }
      var Kt = Gt,
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
            var o
            return (
              a()(this, n),
              (o = t.call(this, e, r)),
              v()(s()(o), '_renderOverflowMenu', function (e) {
                var t = o.props,
                  n = t.analytics,
                  r = t.entry,
                  a = t.isSent,
                  i = n.contextualScribeNamespace,
                  c = [{ text: $t, Icon: Nt.a, isEmphasized: !0, onClick: o._handleShowDeleteConfirmation(e) }]
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
                          scribeNamespace: i,
                        },
                      },
                      onClick: o.props.onReportMessage,
                    }),
                  Tt.a.isAvailable() && c.push({ text: cn, Icon: Kt, onClick: o._handleCopyMessageText }),
                  y.createElement(wt.a, {
                    isFixed: o.context.isDrawer,
                    items: c,
                    onCloseRequested: o._handleHideActionsAndMenus(e),
                    preferredHorizontalOrientation: 'right',
                  })
                )
              }),
              v()(s()(o), '_handleCopyMessageText', function (e) {
                var t = o.props.addToast,
                  n = o._replaceMessageUrls()
                n && (Tt.a.setString(n), t({ text: sn })), e && e()
              }),
              v()(s()(o), '_handleForwardButton', function () {
                var e,
                  t,
                  n = o.props,
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
                  var i = r.message_data.attachment.tweet
                  a.push({
                    pathname: '/messages/compose',
                    state: { tweetAttachment: Zt(Zt({}, i), {}, { id_str: i.status }) },
                  })
                }
              }),
              v()(s()(o), '_handleSetActionsActive', function () {
                var e = o.props.setShouldFreezeUpdates
                o.setState({ actionsAreActive: !0 }), e(!0)
              }),
              v()(s()(o), '_handleDelete', function () {
                var e = o.props,
                  t = e.analytics,
                  n = e.createLocalApiErrorHandler,
                  r = e.deleteEntry,
                  a = e.entry,
                  i = e.inboxType,
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
                    inbox_type: Object(T.h)(i),
                  },
                }),
                  r({ conversationId: a.conversation_id, id: a.id }).catch(n(et))
              }),
              v()(s()(o), '_handleHideDeleteConfirmation', function () {
                o.setState({ showDeleteConfirmation: !1 })
              }),
              v()(s()(o), '_handleHideActionsAndMenus', function (e) {
                return function () {
                  var t = o.props.setShouldFreezeUpdates
                  e && e(), o.setState({ actionsAreActive: !1 }), t(!1)
                }
              }),
              v()(s()(o), '_handlePressReactionPickerButton', function () {
                var e = o.props,
                  t = e.analytics,
                  n = e.entry
                t.scribe({ component: 'reaction_button', element: Object(T.c)(n), action: 'click' }),
                  o._handleSetActionsActive()
              }),
              v()(s()(o), '_handleShowDeleteConfirmation', function (e) {
                return function () {
                  var t = o.props.setShouldFreezeUpdates
                  e(), o.setState({ actionsAreActive: !1, showDeleteConfirmation: !0 }), t(!1)
                }
              }),
              v()(s()(o), '_replaceMessageUrls', function () {
                var e = o.props.entry,
                  t = e && e.message_data && e.message_data.entities,
                  n = (e && e.message_data && e.message_data.text) || ''
                return (
                  It.a.tweetTextParts(n, [0, n.length], t).forEach(function (e) {
                    'url' === e.entityType && (n = n.replace(e.url, e.expandedUrl))
                  }),
                  n
                )
              }),
              (o.state = { actionsAreActive: !1, showDeleteConfirmation: !1 }),
              (o._hasMedia = Lt(o.props.entry)),
              (o._isNarrow = At.a.get('screen').width < re.a.theme.breakpoints.xSmall),
              o
            )
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e,
                    t,
                    n = this.props,
                    r = n.entry,
                    a = n.isSent,
                    o = n.shouldShowReactionButton,
                    i = n.style,
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
                        i,
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
                    o && this._renderReactionButton(),
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
                  return y.createElement(xt.a, {
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
                    o = e.withVDLRefresh,
                    i = this.state.actionsAreActive,
                    c = y.createElement(qt.a, { style: o ? hn.vdlActionIcon : hn.actionIcon })
                  return y.createElement(
                    St,
                    {
                      entry: t,
                      isGroupDM: n,
                      onDismiss: this._handleHideActionsAndMenus(),
                      participantsCount: r,
                      perspective: a,
                    },
                    y.createElement(xt.a, {
                      accessibilityExpanded: !!i,
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
                  return y.createElement(xt.a, {
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
                    o = t.isDraft,
                    i = this.state.actionsAreActive,
                    c = ((e = this.props.entry), !Dt(e) && Lt(e) && !Pt.a.isEnabled)
                  return !o && (c || (n && !Pt.a.isEnabled) || r || a || i)
                },
              },
            ]),
            n
          )
        })(y.Component)
      v()(pn, 'contextType', pe.a)
      var fn = Object(Rt.a)(Object(ht.a)(qe(pn))),
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
        Rn = {
          createLocalApiErrorHandler: Object(A.createLocalApiErrorHandlerWithContextFactory)(
            'DIRECT_MESSAGES_REACTIONS',
          ),
        },
        wn = Object(P.e)(function () {
          return Object(C.createSelector)(Cn, Sn, O.p, En.d, function (e, t, n, r) {
            var a,
              o = Object(lt.a)(r, { includeInactive: !0 }),
              i = 0
            return {
              reactionsWithCounts: t.reduceRight(function (t, r) {
                var c = e[r] && e[r].data
                if (!c) return t
                if (!o.includes(c.reaction_key)) return t
                var s = (t.get(c.reaction_key) || 0) + 1
                return (
                  t.set(c.reaction_key, s),
                  (null == c ? void 0 : c.sender_id) === n && (a = c.reaction_key),
                  (i += 1),
                  t
                )
              }, new Map()),
              selectedReactionKey: a,
              totalReactionCount: i,
            }
          })
        }, Rn),
        In = (n('vfdX'), n('Ee2X'), []),
        kn = function (e, t) {
          return t.entryId
        },
        xn = function (e) {
          return Object(nt.l)(e).entries
        },
        Pn = function (e, t) {
          return Object(nt.p)(e, kn(0, t)) || In
        },
        Tn = function (e, t) {
          return x.e.selectMany(
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
        Mn = Object(P.e)(function () {
          return Object(C.createSelector)(xn, Pn, O.p, Tn, En.d, function (e, t, n, r, a) {
            var o = Object(lt.a)(a, { includeInactive: !0 }),
              i = []
            t.forEach(function (t) {
              var a = e[t] && e[t].data
              if (a && o.includes(a.reaction_key)) {
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
                s && i.push(s)
              }
            }),
              i.sort(function (e, t) {
                return t.time - e.time
              })
            var c = i.findIndex(function (e) {
              return e.userId === n
            })
            return c > -1 && i.push.apply(i, st()(i.splice(0, c))), { loggedInUserId: n, usersWithReactions: i }
          })
        }, An),
        jn = n('TIdA'),
        Dn = n('htQn'),
        Ln = Ze.a.gf5e9ea6,
        Bn = Ze.a.a2d48778,
        Fn = jn.a.createLayoutCache()
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
            o = e.withBottomBorder,
            i = a.avatarUri,
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
            p = y.createElement(_e.a, { imageLayoutCache: Fn, screenName: u, size: 'xxLarge', uri: i }),
            f = y.createElement(dt, { emojiSize: 'title4', emotion: a.reactionKey, focusable: !1 }),
            h = y.createElement(ie.a, {
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
            { link: { pathname: '/'.concat(u), anchorless: !0 }, style: [Nn.root, o && Nn.bottomBorder] },
            y.createElement(be.a, { style: Nn.reactionColumn }, f),
            y.createElement(be.a, { style: Nn.column }, p),
            y.createElement(be.a, { style: Nn.bodyColumn }, y.createElement(be.a, { style: Nn.body }, h)),
            r
              ? y.createElement(
                  be.a,
                  { style: Nn.column },
                  y.createElement(
                    xt.a,
                    {
                      accessibilityLabel: Bn({ emoji: Object(lt.b)(a.reactionKey, t) }),
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
        Wn = n('efqG')
      function Vn(e) {
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
        Gn = Ze.a.c0098d49,
        Kn = Ze.a.j85999eb,
        qn = (function (e) {
          u()(n, e)
          var t = Vn(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
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
                  ? y.createElement(Un.a, { title: Gn, withBottomBorder: !0 })
                  : y.createElement(ge.b, { visuallyHidden: !0 }, Gn)
              }),
              v()(s()(e), '_renderUsers', function (t, n) {
                return y.createElement(
                  be.a,
                  { accessibilityLabel: Kn, style: [Yn.container, 'sheet' === n ? Yn.sheet : Yn.popover] },
                  e._renderUserCells(t),
                )
              }),
              v()(s()(e), '_renderDoneButton', function (e, t) {
                return (
                  'sheet' === t &&
                  y.createElement(
                    xt.a,
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
                    o = r.createLocalApiErrorHandler,
                    i = r.entryId,
                    c = r.fetchUpdatesIfNeeded,
                    s = r.loggedInUserId,
                    l = r.removeReaction,
                    u = { reaction_key: t, conversation_id: a, dm_id: i, perspective: s }
                  n(), l(u).then(e._handleScribeRemoveReaction(t)).then(c).catch(o())
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
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.children
                  return y.createElement(
                    Wn.a,
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
        Xn = Object(Rt.a)(Object(ht.a)(Mn(qn)))
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
                  o = n.selectedReactionKey,
                  i = r.state.emojiSize || 'headline1',
                  c = a.size - 1
                return Array.from(a, function (e, n) {
                  var r = xe()(e, 2),
                    a = r[0],
                    s = r[1]
                  return y.createElement(dt, {
                    count: s,
                    emojiSize: i,
                    emotion: a,
                    enableHoverStyle: !1,
                    focusable: !0,
                    key: a,
                    style: [
                      n === c && er.rightPadding,
                      er.elementPadding,
                      o === a ? er.selfSelect : null,
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
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.conversationId,
                    n = e.entryId,
                    r = e.isEndOfDM,
                    a = e.isSent,
                    o = e.totalReactionCount,
                    i = this.state.emojiSize
                  if (0 === o) return null
                  var c = ne.a.generate({
                      backgroundColor: re.a.theme.colors.gray50,
                      color: re.a.theme.colors.gray700,
                    }),
                    s = Jn({ reactionCount: o })
                  return y.createElement(
                    be.a,
                    {
                      style: [
                        er.container,
                        r ? er.marginShort : er.marginLong,
                        a ? er.alignRight : er.alignLeft,
                        i ? er.visible : er.invisible,
                      ],
                    },
                    y.createElement(
                      Xn,
                      { conversationId: t, entryId: n },
                      y.createElement(
                        oe.a,
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
        tr = Object(ht.a)(wn($n)),
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
        or = Ze.a.e8bd8fec,
        ir = Ze.a.b2d32fad,
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
            i()(n, [
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
                  return n ? (t ? ir : ar) : r.length ? cr({ count: r.length }) : or
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
                  var o = Object(nr.a)(t, n)
                  return y.createElement(
                    ge.b,
                    { align: 'right', color: 'gray700', size: 'subtext2', style: lr.namesList },
                    n ? y.createElement(a, { namesList: o, othersCount: r }) : y.createElement(ge.b, null, o),
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
            o = fr({ entryId: t, participants: n, user: r })
          return { namesToDisplay: o, isSeenByEveryone: o.length === a.length - 1 }
        },
        fr = function (e) {
          var t = e.entryId,
            n = e.participants,
            r = e.user
          return Object.keys(n).reduce(function (e, a) {
            var o = n[a],
              i = o.join_conversation_event_id,
              c = o.last_read_event_id,
              s = o.user.name,
              l = a !== r.id_str,
              u = c && 1 !== Object(dr.a)(t, c),
              d = !i || 1 !== Object(dr.a)(i, t)
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
        Rr = Ze.a.bfbc051c,
        wr = (function (e) {
          u()(n, e)
          var t = yr(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
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
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.isSent,
                    n = e.onPress,
                    r = this._renderSending(),
                    a = this._renderError(),
                    o = this._renderTimestamp(),
                    i = this._renderReadReceipt(),
                    c = this._renderSentCheckmark(),
                    s = this._renderReactions(),
                    l = o || i || c,
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
                            oe.a,
                            { interactiveStyles: null, onPress: n, style: t && Ir.sentContainer },
                            y.createElement(be.a, { style: t && Ir.groupedItems }, o, c),
                            i,
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
                    o = e.isSent,
                    i = !a || r
                  return t
                    ? y.createElement(
                        be.a,
                        { style: !o && Ir.footerPadderWithAvatar },
                        y.createElement(tr, { conversationId: t, entryId: n, isEndOfDM: i, isSent: o }),
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
                    o = e.isGroupDM,
                    i = e.isSent,
                    c = e.participants,
                    s = e.user
                  return n && i && !r && !a
                    ? y.createElement(ur, yn()({ isGroupDM: o }, pr({ entryId: t, participants: c, user: s })))
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
                    o = e.isRapidFire,
                    i = e.isSent,
                    c = e.participants,
                    s = e.user,
                    l = pr({ entryId: t, participants: c, user: s }).isSeenByEveryone
                  return !i || n || r || (o && !a)
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
                    o = e.isLastRapidFire,
                    i = e.isRapidFire,
                    c = e.isSent,
                    s = e.user.name
                  if (n || r || (i && !o)) return null
                  var l,
                    u = new Date(Number(t))
                  l = Object(vr.c)(u) ? Or(u) : Object(vr.d)(u) ? Sr({ time: Or(u) }) : Object(vr.e)(u) ? Cr(u) : Rr(u)
                  var d = a && !c,
                    p = c ? 'right' : 'left',
                    f = !c
                  return y.createElement(
                    be.a,
                    { style: [f && Ir.footerPadderWithAvatar, c && Ir.timestamp] },
                    y.createElement(
                      ge.b,
                      { align: p, color: 'gray700', size: 'subtext2', withInteractiveStyling: c || !Pt.a.isEnabled },
                      d &&
                        y.createElement(Ze.a.I18NFormatMessage, { $i18n: 'c8b914d4' }, y.createElement(ge.b, null, s)),
                      d && ' ',
                      l,
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(y.PureComponent)
      v()(wr, 'contextType', $.a)
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
        kr = gn(wr),
        xr = n('jtO7'),
        Pr = re.a.create(function (e) {
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
            o = e.onClick,
            i = e.outsideTopRounded,
            c = e.tcoUrl,
            s = [
              Pr.root,
              n && Pr.isLast,
              n && r && Pr.sentLast,
              n && !r && Pr.receivedLast,
              t && r && Pr.insideTopRoundedSent,
              t && !r && Pr.insideTopRoundedReceived,
              i && r && Pr.outsideTopRoundedSent,
              i && !r && Pr.outsideTopRoundedReceived,
            ]
          return y.createElement(
            be.a,
            { style: s },
            y.createElement(xr.a, { align: 'center', color: 'primary', label: a, link: c, onClick: o }),
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
          i()(n, [
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
                  o = e.withUserText,
                  i = t.map(function (e, i) {
                    var c = 0 === i
                    return y.createElement(Tr, {
                      insideTopRounded: c && (a || !o),
                      isLast: i === t.length - 1,
                      isSent: n,
                      key: i,
                      label: e.label,
                      onClick: r,
                      outsideTopRounded: c && a,
                      tcoUrl: e.tco_url,
                    })
                  })
                return y.createElement(be.a, null, i)
              },
            },
          ]),
          n
        )
      })(y.Component)
      v()(jr, 'defaultProps', { onCtaClick: Ar.a, onImpression: Ar.a })
      var Dr = jr,
        Lr = (n('1IsZ'), n('vjRr')),
        Br = n('EGrD'),
        Fr = function (e, t) {
          return Lr.a.createManyHydratedSelector([t.cardUrl])(e)[0]
        },
        Nr = Object(bn.a)()
          .propsFromState(function () {
            return { adFreeArticleDomains: Br.c, card: Fr }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(A.createLocalApiErrorHandlerWithContextFactory)('DM_CARD_MESSAGE'),
              fetchAdFreeToken: Br.a,
              loadAdFreeArticleDomainsFromPersistence: Br.b,
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
            o = e.textContent
          return y.createElement(be.a, { style: [a ? Hr.visible : Hr.invisible, Hr.root] }, n, t, o)
        },
        Wr = n('cTG8'),
        Vr = function (e) {
          var t = e.excludeCardUrl,
            n = e.isActive,
            r = void 0 !== n && n,
            a = e.isFailedDraft,
            o = e.isFirstRapidFire,
            i = void 0 !== o && o,
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
              s && !i && !l && zr.rapidFireReceived,
              s && !i && l && zr.rapidFireSent,
              u && l && zr.hasAssociatedAttachmentSent,
              u && !l && zr.hasAssociatedAttachmentReceived,
              b && _ && l && zr.vdlSent,
              b && r && l && zr.activeSent,
              b && _ && r && l && zr.vdlActiveSent,
              b && r && !l && !Pt.a.isEnabled && zr.activeReceived,
              m && zr.withCta,
            ],
            O = [zr.tweetText, b && zr.textAlignLeft, !b && l && zr.textAlignRight],
            S = re.a.theme.colors,
            C = S.gray0,
            R = S.magenta500,
            w = S.primary,
            I = S.text,
            k = S.white,
            x = ne.a.generate({ color: l ? k : I, backgroundColor: a ? R : l ? w : C }),
            P = (p.text && p.text.length) || 0
          return y.createElement(
            oe.a,
            { accessibilityRole: 'none', interactive: l, interactiveStyles: b ? x : null, style: E },
            y.createElement(Wr.a, {
              color: re.a.isDarkMode() || l ? 'whiteOnColor' : void 0,
              displayTextRange: [0, P],
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
      Vr.defaultProps = { withMediaLinks: !1 }
      var Gr = Vr,
        Kr = function (e) {
          var t = e.isActive,
            n = void 0 !== t && t,
            r = e.isFailedDraft,
            a = e.isFirstRapidFire,
            o = void 0 !== a && a,
            i = e.isRapidFire,
            c = void 0 !== i && i,
            s = e.isSent,
            l = e.messageData,
            u = e.withCta,
            d = e.withMessageBubble
          return y.createElement(Gr, {
            isActive: n,
            isFailedDraft: r,
            isFirstRapidFire: o,
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
            for (var o = arguments.length, i = new Array(o), c = 0; c < o; c++) i[c] = arguments[c]
            return (
              (r = t.call.apply(t, [this].concat(i))),
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
                  o = t.popOutConversation
                if ((a && o(a), r._hasClaimsForAdFreeArticles)) {
                  var i = r.props,
                    c = i.adFreeArticleDomains,
                    s = i.createLocalApiErrorHandler,
                    l = i.fetchAdFreeToken,
                    u = new qr.a(l, s()).getAdFreeArticlesClickHandler({
                      destinationUrl: Xr.a.getBindingValue(n, 'card_url'),
                      linkDomain: Xr.a.getBindingValue(n, 'domain'),
                      adFreeArticleDomains: c,
                    }),
                    d = xe()(u, 2),
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
            i()(n, [
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
                    o = e.isFirstRapidFire,
                    i = e.isRapidFire,
                    c = e.isSent,
                    s = e.messageData,
                    l = e.withCta,
                    u = e.withMessageBubble,
                    d = this.state,
                    p = d.attachmentWidth,
                    f = d.textContentWidth,
                    h = !!Object.values(Zr).includes(t.name),
                    m = Ft(n, p, f),
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
                          y.createElement(Gr, {
                            excludeCardUrl: t.url,
                            hasAssociatedAttachment: !0,
                            isActive: r,
                            isFailedDraft: a,
                            isFirstRapidFire: o,
                            isRapidFire: i,
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
                    : y.createElement(Kr, {
                        isActive: r,
                        isFailedDraft: a,
                        isFirstRapidFire: o,
                        isRapidFire: i,
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
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
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
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.hasUserText,
                    n = e.isActive,
                    r = e.isFailedDraft,
                    a = e.isFirstRapidFire,
                    o = e.isRapidFire,
                    i = e.isSent,
                    c = e.messageData,
                    s = e.withCta,
                    l = e.withMessageBubble,
                    u = this.state,
                    d = u.attachmentWidth,
                    p = u.textContentWidth
                  if (!c || !c.attachment || !c.attachment.fleet) return null
                  var f = Ft(t, d, p),
                    h = f.compositeRendered,
                    m = f.isAttachmentSquared,
                    v = f.isTextSquared,
                    b = [
                      oa.tombstoneWrapper,
                      i ? oa.sentMessageWrapper : oa.receivedMessageWrapper,
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
                              i ? oa.sentMessageWrapper : oa.receivedMessageWrapper,
                              !l && oa.fleetReactionSpacing,
                            ],
                          },
                          y.createElement(Gr, {
                            hasAssociatedAttachment: !0,
                            isActive: n,
                            isFailedDraft: r,
                            isFirstRapidFire: a,
                            isRapidFire: o,
                            isSent: i,
                            messageData: c,
                            rootStyle: v ? (i ? oa.sentSquared : oa.receivedSquared) : void 0,
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
        oa = re.a.create(function (e) {
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
        ia = ra,
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
            o = t.original_info || {},
            i = o.height,
            c = o.width,
            s = Object(sa.b)(t).rgb,
            l = y.createElement(ca.a, {
              accessibilityLabel: r,
              aspectMode: la.a.withinRange(9 / 16, 10),
              backgroundColor: s,
              image: { url: a, width: c, height: i },
              shouldShowAltLabel: !!t.ext_alt_text,
            })
          return n ? y.createElement(oe.a, { interactiveStyles: null, link: n, onPress: da }, l) : l
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
          var o
          return (
            a()(this, n),
            (o = t.call(this, e, r)),
            v()(s()(o), '_handleLayout', function (e) {
              var t = e.nativeEvent.layout.width
              o.state.width !== t && o.setState({ width: t })
            }),
            v()(s()(o), '_getElement', function () {
              var e = o.props,
                t = e.contentType,
                n = e.isSensitive
              return ''.concat(n ? 'sensitive' : 'untrusted', '_').concat(t, '_interstitial')
            }),
            v()(s()(o), '_handleClick', function () {
              var e = o.props.analytics
              o.setState({ hide: !1 }), e.scribe({ element: o._getElement(), action: 'reveal' })
            }),
            (o.state = { hide: !0, width: 0 }),
            o
          )
        }
        return (
          i()(n, [
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
                  o = this.state,
                  i = o.hide,
                  c = o.width < re.a.theme.breakpoints.micro
                return i
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
                          xt.a,
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
      function Ra(e, t) {
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
      function wa(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Ra(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Ra(Object(n)).forEach(function (t) {
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
        xa = Ze.a.d9de7b57,
        Pa = Ze.a.f2879f4d,
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
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              v()(s()(e), 'state', { attachmentWidth: void 0, textContentWidth: void 0 }),
              v()(s()(e), '_renderAttachment', function () {
                var t,
                  n,
                  r = e.props,
                  a = r.entry,
                  o = r.hasUserText,
                  i = r.isFirstRapidFire,
                  c = r.isRapidFire,
                  s = r.isSent,
                  l = r.isTrusted,
                  u = r.messageData,
                  d = e.state,
                  p = d.attachmentWidth,
                  f = d.textContentWidth,
                  h = (u || {}).attachment,
                  m = a.is_draft,
                  v = Ft(o, p, f),
                  b = [
                    La.mediaAttachment,
                    s && La.isSent,
                    !s && La.received,
                    s && v.isAttachmentSquared && La.equalComponentDimensionsSent,
                    !s && v.isAttachmentSquared && La.equalComponentDimensionsReceived,
                    c && !i && s && La.rapidFireSent,
                    c && !i && !s && La.rapidFireReceived,
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
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.entry,
                    n = e.hasUserText,
                    r = e.isActive,
                    a = e.isFailedDraft,
                    o = e.isFirstRapidFire,
                    i = e.isRapidFire,
                    c = e.isSent,
                    s = e.messageData,
                    l = e.withCta,
                    u = e.withMessageBubble,
                    d = this.state,
                    p = d.attachmentWidth,
                    f = d.textContentWidth,
                    h = t.is_draft,
                    m = Ft(n, p, f),
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
                          y.createElement(Gr, {
                            hasAssociatedAttachment: !0,
                            isActive: !!r,
                            isFailedDraft: a,
                            isFirstRapidFire: !!o,
                            isRapidFire: !!i,
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
                    o = a.displaySensitiveMedia,
                    i = a.isDmNsfwMediaFilterEnabled
                  if (
                    e.possibly_sensitive &&
                    this.context.featureSwitches.isTrue('dm_conversations_nsfw_media_filter_enabled')
                  ) {
                    if (i) {
                      var c = ('animated_gif' === e.type && Ma) || ('video' === e.type && Aa) || Ta
                      return y.createElement(
                        Sa,
                        {
                          contentType: e.type,
                          ctaText: c,
                          description: Pa,
                          isSensitive: !0,
                          withSquareBottomBorderRadius: r,
                        },
                        n,
                      )
                    }
                  } else if (!o && e.possibly_sensitive)
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
                        { contentType: e.type, ctaText: ja, description: xa, withSquareBottomBorderRadius: r },
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
                    ? wa(wa({}, e), {}, { entities: wa(wa({}, e.entities), {}, { urls: r, media: t ? [t] : [] }) })
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
        Ba = Da,
        Fa = Object(bn.a)().propsFromActions(function () {
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
        Wa = Ze.a.f277e949,
        Va = Ze.a.fb3ccb55,
        za = Fa(
          (function (e) {
            u()(n, e)
            var t = Na(n)
            function n() {
              var e
              a()(this, n)
              for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
              return (
                (e = t.call.apply(t, [this].concat(o))),
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
              i()(n, [
                {
                  key: 'render',
                  value: function () {
                    var e = this.props.children
                    return y.createElement(
                      Sa,
                      { contentType: 'dm', ctaText: Wa, description: Va },
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
                      { style: Ga.buttons },
                      y.createElement(
                        xt.a,
                        { onPress: this._handlePress(!1), style: Ga.leftButton, type: 'brandOutlined' },
                        Ua,
                      ),
                      y.createElement(xt.a, { onPress: this._handlePress(!0), type: 'brandOutlined' }, Ha),
                    )
                  },
                },
              ]),
              n
            )
          })(y.PureComponent),
        ),
        Ga = re.a.create(function (e) {
          return {
            buttons: { flexDirection: 'row', paddingTop: e.spaces.space4 },
            leftButton: { marginRight: e.spaces.space12 },
          }
        }),
        Ka = n('U+bB'),
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
          return y.createElement(Ka.a, { accessibilityLabel: t.display_name, source: qa(t), style: Ya.stickerItem })
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
        eo = y.createElement(ge.b, { link: '/settings/safety' }),
        to = function (e) {
          return y.createElement(Ze.a.I18NFormatMessage, { $i18n: 'j3c7dd33' }, y.cloneElement(eo, null, Ze.a.adcf07b5))
        },
        no = Ze.a.e4df0ad7,
        ro = Ze.a.f277e949,
        ao = Ze.a.b5b91d58,
        oo = Ze.a.bb594d7b,
        io = y.createElement(to, null)
      var co = re.a.create(function (e) {
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
        so = Ja(function (e) {
          var t = y.useContext($.a).featureSwitches,
            n = e.conversationId,
            r = e.displaySensitiveMedia,
            a = e.hasUserText,
            o = void 0 !== a && a,
            i = e.isActive,
            c = void 0 !== i && i,
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
            S = xe()(O, 2),
            C = S[0],
            R = S[1],
            w = y.useState(void 0),
            I = xe()(w, 2),
            k = I[0],
            x = I[1],
            P = y.useMemo(
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
                  C !== t && R(t)
                }
              },
              [C],
            ),
            A = y.useMemo(
              function () {
                return function (e) {
                  var t = e.nativeEvent.layout.width
                  k !== t && x(t)
                }
              },
              [k],
            )
          if (!v || !v.attachment || !v.attachment.tweet) return null
          var M = v.attachment.tweet,
            j = h ? 'sent' : 'received',
            D = Ft(o, C, k),
            L = y.createElement($a.a, {
              onPress: P,
              style: [
                co[j],
                o && co.attachment,
                D.isAttachmentSquared ? (h ? co.sentAttachmentSquared : co.receivedAttachmentSquared) : void 0,
              ],
              tweetId: M.status,
            }),
            B = D.isAttachmentSquared ? 'both' : h ? 'right' : 'left',
            F = (function () {
              if (!g) return null
              if (h) return L
              if (g.possibly_sensitive && t.isTrue('dm_conversations_nsfw_media_filter_enabled')) {
                if (s || void 0 === s)
                  return y.createElement(
                    Sa,
                    { contentType: 'photo', ctaText: oo, description: ao, withSquareBottomBorderRadius: B },
                    L,
                  )
              } else if (!r && g.possibly_sensitive)
                return y.createElement(
                  Sa,
                  { contentType: 'photo', ctaText: ro, description: io, withSquareBottomBorderRadius: B },
                  L,
                )
              return m
                ? L
                : y.createElement(
                    Sa,
                    { contentType: 'tweet', ctaText: ro, description: no, withSquareBottomBorderRadius: B },
                    L,
                  )
            })(),
            N = y.createElement(be.a, { onLayout: T, style: co.attachment }, F),
            H = o
              ? y.createElement(
                  be.a,
                  { onLayout: A, style: h ? co.sentMessageWrapper : co.receivedMessageWrapper },
                  y.createElement(Gr, {
                    hasAssociatedAttachment: !0,
                    isActive: c,
                    isFailedDraft: l,
                    isFirstRapidFire: d,
                    isRapidFire: f,
                    isSent: h,
                    messageData: v,
                    rootStyle: D.isTextSquared ? (h ? co.sentSquared : co.receivedSquared) : void 0,
                    tweetId: M.status,
                    withCta: _,
                    withMediaLinks: !0,
                    withMessageBubble: E,
                  }),
                )
              : null
          return y.createElement(Ur, { attachmentContent: N, isVisible: D.compositeRendered, textContent: H })
        }),
        lo = n('8W85')
      function uo() {
        var e = y.useContext(So),
          t = xe()(e.activeVoiceMessage, 2),
          n = t[0],
          r = t[1],
          a = xe()(e.playerApi, 2)[1],
          o = xe()(e.playerState, 2)[1]
        var i = {
          media: xe()(n, 2)[1],
          onEnded: function () {
            r([null, null]), e.scribeAction && e.scribeAction.complete()
          },
          onPlayerApi: a,
          onPlayerState: o,
        }
        return y.createElement(lo.a, i)
      }
      var po = n('89tF'),
        fo = n('k89r')
      function ho(e, t) {
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
      function mo(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ho(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ho(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function vo(e) {
        var t,
          n,
          r,
          a,
          o,
          i =
            ((t = y.useState(go.activeVoiceMessage)),
            (n = y.useState(go.playerApi)),
            (r = y.useState(go.playerState)),
            (o = Object(fo.a)()),
            (a = y.useMemo(
              function () {
                var e = { page: 'messages', section: 'thread', component: 'message', element: 'voice' }
                function t(t) {
                  var n = t.action,
                    r = t.component,
                    a = void 0 === r ? e.component : r,
                    o = e.element
                  return { page: e.page, section: e.section, component: a, element: o, action: n }
                }
                var n = function (e, n) {
                  return n
                    ? n.data
                      ? o.scribe(mo(mo({}, t({ action: e })), {}, { data: n.data }))
                      : o.scribe(mo({}, t({ action: e, component: bo(n) })))
                    : o.scribe(mo({}, t({ action: e })))
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
              [o],
            )),
            { activeVoiceMessage: t, playerApi: n, playerState: r, scribeAction: a })
        return y.createElement(_o.Provider, { value: i }, e.children)
      }
      var yo = {
        Timelines: Object(po.a)({ message: !0, inbox_timeline: !0, low_quality_timeline: !0, requests_timeline: !0 }),
      }
      function bo(e) {
        var t = e.isLowQuality
        return e.isTrusted
          ? yo.Timelines.inbox_timeline
          : t
          ? yo.Timelines.low_quality_timeline
          : yo.Timelines.requests_timeline
      }
      var go = { activeVoiceMessage: [null, null], playerApi: null, playerState: null, scribeAction: null },
        _o = y.createContext({
          activeVoiceMessage: [go.activeVoiceMessage, Eo],
          playerApi: [go.playerApi, Eo],
          playerState: [go.playerState, Eo],
          scribeAction: null,
        })
      function Eo() {
        throw new Error('DMVoiceContext is not initialized')
      }
      function Oo(e) {
        var t = y.useContext($.a).featureSwitches
        return Object(T.j)(t) ? y.createElement(vo, null, e.children, y.createElement(uo, null)) : e.children
      }
      var So = _o,
        Co = n('MH+I'),
        Ro = n('5Ixf'),
        wo = n('AtEG')
      function Io(e) {
        var t,
          n,
          r = y.useContext(So),
          a = e.isLowQuality,
          o = e.isSent,
          i = e.isTrusted
        if (null === (t = e.media) || void 0 === t || !t.video_info) return null
        var c = xe()(r.activeVoiceMessage, 2),
          s = c[0],
          l = c[1],
          u = xe()(r.playerApi, 1)[0],
          d = xe()(r.playerState, 1)[0],
          p = r.scribeAction,
          f = xe()(s, 1)[0],
          h = e.messageId === f
        if (!p) return null
        var m = xo(d),
          v = (null === (n = e.media) || void 0 === n ? void 0 : n.video_info.duration_millis) || 0,
          b = {
            durationMs: v,
            isActive: h,
            isSent: o,
            playerApi: null,
            playerState: null,
            onImpression: function () {
              return p.impression({ isLowQuality: a, isTrusted: i })
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
          y.createElement(ko, b)
        )
      }
      function ko(e) {
        var t = e.isActive,
          n = e.isSent,
          r = e.playerApi,
          a = e.playerState,
          o = null == a ? void 0 : a.isPlaying,
          i = xo(a),
          c = (null == i ? void 0 : i.currentTimeMs) || 0,
          s = (null == i ? void 0 : i.durationMs) || e.durationMs,
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
            Ao.voiceMessage,
            Mo({ isSent: n, squared: t }),
            n ? Ao.voiceMessageSent : Ao.voiceMessageReceived,
            je(re.a.theme.scale).voiceMessage({ isVoiceMessageActive: t, isSent: n }),
          ],
          f = o ? Ro.a : wo.a
        return y.createElement(
          be.a,
          { style: [Ao.container, je(re.a.theme.scale).voiceMessageContainer({ isVoiceMessageActive: t, isSent: n })] },
          y.createElement(
            be.a,
            { style: p },
            y.createElement(be.a, { style: Ao.startSpacer }),
            y.createElement(xt.a, {
              accessibilityLabel: o ? To : Po,
              icon: y.createElement(f, { style: u ? Ao.iconColorDark : Ao.iconColorDefault }),
              onPress: function () {
                r ? (o ? (r.pause(), e.onPause()) : (r.play(), e.onPlay())) : e.onPlayRequest()
              },
              type: 'onMediaText',
            }),
            y.createElement(be.a, { style: Ao.durationSpacer }),
            y.createElement(
              be.a,
              { style: n ? Ao.durationOpacity : void 0 },
              y.createElement(
                Co.a,
                yn()({ countdown: !0, timeMs: l }, d, {
                  color: 'gray700',
                  size: 'subtext2',
                  style: n ? Ao.durationDark : void 0,
                  weight: 'bold',
                  withCountdownSymbol: t,
                }),
              ),
            ),
            y.createElement(be.a, { style: Ao.endSpacer }),
          ),
        )
      }
      var xo = function (e) {
          return e ? e.tracks[e.currentTrackId] : null
        },
        Po = Ze.a.c94b7d89,
        To = Ze.a.eb6f9582,
        Ao = re.a.create(function (e) {
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
      function Mo(e) {
        var t = e.isSent,
          n = e.squared
        return [jo.base, t ? jo.sent : jo.received, n ? (t ? jo.sentSquared : jo.receivedSquared) : void 0]
      }
      var jo = re.a.create(function (e) {
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
      function Do(e, t) {
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
      function Lo(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Do(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Do(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
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
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var Fo = (function (e) {
        u()(n, e)
        var t = Bo(n)
        function n() {
          return a()(this, n), t.apply(this, arguments)
        }
        return (
          i()(n, [
            {
              key: 'render',
              value: function () {
                var e,
                  t = this.props,
                  n = t.entry,
                  r = t.isSent,
                  a = t.onCtaClick,
                  o = t.onCtaImpression,
                  i = n.message_data,
                  c = i && i.attachment ? i.attachment : {},
                  s = n.marked_as_spam,
                  l = Lt(n),
                  u = !!i && !!i.ctas,
                  d = Dt(n),
                  p = (function (e) {
                    var t = e.message_data
                    if (!t) return !1
                    if (Lt(e) && !Bt(e)) return !1
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
                  h = Bt(n)
                e = c.sticker ? y.createElement(Xa, { sticker: c.sticker }) : this._renderDMMessage(d, u, f)
                var m = s ? y.createElement(za, { conversationId: n.conversation_id, dmId: n.id }, e) : e,
                  v = l && !h && !Object(T.k)(null == i ? void 0 : i.attachment, this.context.featureSwitches),
                  b = [
                    r ? No.isSent : No.isReceived,
                    u && No.withCta,
                    v ? No.mediaRoot : No.flexShrink,
                    this.props.style,
                  ]
                return y.createElement(
                  be.a,
                  { style: b },
                  m,
                  i && i.ctas
                    ? y.createElement(Dr, {
                        callToActions: i.ctas,
                        isSent: r,
                        onCtaClick: a,
                        onImpression: o,
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
                  o = r.entry,
                  i = r.isActive,
                  c = r.isDmNsfwMediaFilterEnabled,
                  s = r.isFirstRapidFire,
                  l = r.isLowQuality,
                  u = r.isRapidFire,
                  d = r.isSent,
                  p = r.isTrusted,
                  f = o.error,
                  h = o.message_data,
                  m = h && Lo(Lo({}, h), {}, { entities: (h && h.entities) || void 0, error: f }),
                  v = null == m ? void 0 : m.attachment,
                  b = {
                    isActive: i,
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
                      so,
                      yn()(
                        {
                          conversationId: o.conversation_id,
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
                      ? y.createElement(Io, {
                          isLowQuality: l,
                          isSent: !!d,
                          isTrusted: p,
                          media: v.video,
                          messageId: o.id,
                        })
                      : y.createElement(
                          Ba,
                          yn()(
                            {
                              displaySensitiveMedia: a,
                              entry: o,
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
                      yn()({ cardUrl: v.card, conversationId: o.conversation_id, hasUserText: e, messageData: m }, b),
                    )
                  if (v.fleet) return y.createElement(ia, yn()({ entry: o, hasUserText: e, messageData: m }, b))
                }
                return y.createElement(Kr, yn()({}, b, { messageData: m }))
              },
            },
          ]),
          n
        )
      })(y.Component)
      v()(Fo, 'contextType', $.a)
      var No = re.a.create(function (e) {
          return {
            flexShrink: { flexShrink: 1 },
            mediaRoot: { flex: 1 },
            isSent: { alignItems: 'flex-end' },
            isReceived: { alignItems: 'flex-start' },
            withCta: { alignItems: 'stretch' },
          }
        }),
        Ho = Fo,
        Uo = re.a.create(function (e) {
          return { avatar: { borderRadius: e.borderRadii.infinite } }
        }),
        Wo = function (e) {
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
            : y.createElement(be.a, { style: [Uo.avatar, _e.a.getSizeStyle(r)] })
        },
        Vo = n('m3Bd'),
        zo = n.n(Vo),
        Go = n('B3eJ')
      function Ko(e) {
        var t = e.color,
          n = e.isActive,
          r = e.size,
          a = zo()(e, ['color', 'isActive', 'size']),
          o = y.useContext(So),
          i = y.useState(0.5),
          c = xe()(i, 2),
          s = c[0],
          l = c[1],
          u = xe()(o.playerState, 1)[0]
        y.useEffect(
          function () {
            n && u && u.isPlaying && l(Math.random())
          },
          [n, u],
        )
        var d = n && (null == u ? void 0 : u.isPlaying),
          p = r + 2 * qo,
          f = [Yo.container, a.style, { width: r, height: r }]
        return y.createElement(
          be.a,
          { style: f },
          y.createElement(
            be.a,
            { style: [Yo.container, Yo.transitionOpacity, d ? Yo.show : Yo.hide] },
            Me.a.reducedMotionEnabled ? null : y.createElement(Go.a, { audioLevel: s, color: t, paused: !d, size: r }),
          ),
          y.createElement(be.a, {
            style: [Yo.border, { width: p, height: p }, Yo.transitionOpacity, n ? Yo.show : Yo.hide],
          }),
        )
      }
      var qo = parseInt(re.a.theme.spaces.space2, 10),
        Yo = re.a.create(function (e) {
          return {
            container: { alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' },
            border: {
              position: 'absolute',
              top: -1 * qo,
              left: -1 * qo,
              backgroundColor: e.colors.navigationBackground,
              borderRadius: e.borderRadii.infinite,
            },
            transitionOpacity: { transition: 'opacity 0.2s 0s ease-in-out' },
            hide: { opacity: 0 },
            show: { opacity: 1 },
          }
        }),
        Xo = n('uArA'),
        Qo = 'messageEntry'
      function Zo(e, t) {
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
      function Jo(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Zo(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Zo(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function $o(e) {
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
      var ei = { element: 'cta_dm' },
        ti = { isGroupDM: !1, isRapidFire: !1, isFirstRapidFire: !1, isLastRapidFire: !1 },
        ni = (function (e) {
          u()(n, e)
          var t = $o(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              v()(
                s()(e),
                '_handleClick',
                Object(Xo.a)(function () {
                  var t = e.props,
                    n = t.entry,
                    r = n.error,
                    a = n.id,
                    o = n.is_draft,
                    i = t.isActive,
                    c = t.setActiveEntry
                  o || r || (c(i ? null : a), e._handleScribeMessageEntryClick())
                }),
              ),
              v()(s()(e), '_handleScribeMessageEntryClick', function () {
                var t = e.props.isActive
                if (!Pt.a.isEnabled && !t) {
                  var n = e.props.entry,
                    r = { component: 'message', element: Object(T.c)(n), action: 'click' }
                  e._scribeAction(r)
                }
              }),
              v()(s()(e), '_handleCtaImpression', function () {
                e._scribeAction(Jo(Jo({}, ei), {}, { action: 'show' }))
              }),
              v()(s()(e), '_handleCtaClick', function () {
                e._scribeAction(Jo(Jo({}, ei), {}, { action: 'click' }))
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
            i()(n, [
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
                    r = t.isSent,
                    a = t.user,
                    o = this._getRapidFireProps(),
                    i = !o.isRapidFire || o.isLastRapidFire,
                    c =
                      this.context.featureSwitches.isTrue('dm_vdl_enabled') &&
                      this.context.featureSwitches.isTrue('dm_vdl_chat_p0_enabled'),
                    s = [
                      ai.root.base,
                      c && ai.root.vdlPadding,
                      i && ai.root.contentSpacing,
                      i && c && ai.root.vdlContentSpacing,
                    ]
                  if (!a) return null
                  var l = !Pt.a.isEnabled || r
                  return y.createElement(
                    We.a,
                    { viewType: 'message' },
                    y.createElement(
                      be.a,
                      { style: s },
                      y.createElement(
                        oe.a,
                        {
                          accessibilityExpanded: !(!l || !n),
                          focusable: !0,
                          interactiveStyles: null,
                          onPress: l ? this._handleClick : void 0,
                          style: r ? ai.root.sent : ai.root.received,
                          testID: Qo,
                        },
                        function (t) {
                          var n = t.isFocused,
                            r = t.isHovered
                          return e._renderMessage({ isFocused: n, isHovered: r, rapidFireProps: o, withVDLRefresh: c })
                        },
                      ),
                      this._renderFooter(o),
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
                    o = e.withVDLRefresh,
                    i = this.props,
                    c = i.displaySensitiveMedia,
                    s = i.entry,
                    l = i.inboxType,
                    u = i.isActive,
                    d = i.isDmNsfwMediaFilterEnabled,
                    p = i.isGroupDM,
                    f = i.isLowQuality,
                    h = i.isReadOnly,
                    m = i.isSent,
                    v = i.isTrusted,
                    b = i.isVoiceMessageActive,
                    g = i.isWide,
                    _ = i.participants,
                    E = i.perspective,
                    O = i.scribeVoiceMessage,
                    S = i.setShouldFreezeUpdates,
                    C = a.isFirstRapidFire,
                    R = a.isRapidFire,
                    w = [
                      m ? ai.messageContainer.sent : ai.messageContainer.received,
                      g ? ai.messageContainer.wide : ai.messageContainer.narrow,
                      m && g && ai.messageContainer.sentWide,
                      !m && g && ai.messageContainer.receivedWide,
                    ],
                    I = v && !h,
                    k = this._isDMVoiceMessage(),
                    x = null === (t = Object.keys(_)) || void 0 === t ? void 0 : t.length
                  return y.createElement(
                    be.a,
                    { style: w },
                    s.error
                      ? null
                      : y.createElement(fn, {
                          containerIsActive: u,
                          containerIsFocused: n,
                          containerIsHovered: r,
                          entry: s,
                          inboxType: l,
                          isDraft: !!s.is_draft,
                          isGroupDM: p,
                          isSent: m,
                          onReportMessage:
                            k && O
                              ? function () {
                                  return O.report({ isLowQuality: f, isTrusted: v })
                                }
                              : void 0,
                          participantsCount: x,
                          perspective: E,
                          setShouldFreezeUpdates: S,
                          shouldShowReactionButton: I,
                          style: k && je(re.a.theme.scale).actionsContainer({ isSent: m, isVoiceMessageActive: b }),
                          withVDLRefresh: o,
                        }),
                    y.createElement(Ho, {
                      displaySensitiveMedia: c,
                      entry: s,
                      isActive: u,
                      isDmNsfwMediaFilterEnabled: d,
                      isFirstRapidFire: C,
                      isLowQuality: f,
                      isRapidFire: R,
                      isSent: m,
                      isTrusted: v,
                      key: s.id,
                      onCtaClick: this._handleClick,
                      onCtaImpression: this._handleCtaImpression,
                      style: k && je(re.a.theme.scale).messageContainer({ isSent: m, isVoiceMessageActive: b }),
                    }),
                    this._possiblyRenderUserAvatar(a),
                  )
                },
              },
              {
                key: '_renderFooter',
                value: function (e) {
                  var t,
                    n,
                    r = e.isLastRapidFire,
                    a = e.isRapidFire,
                    o = this.props,
                    i = o.entry,
                    c = o.isActive,
                    s = o.isGroupDM,
                    l = o.isSent,
                    u = o.participants,
                    d = o.user
                  return d
                    ? y.createElement(kr, {
                        conversationId: i.conversation_id,
                        entryId: i.id,
                        entryText: null === (t = i.message_data) || void 0 === t ? void 0 : t.text,
                        entryTime: i.time,
                        isActive: c,
                        isDraft: !!i.is_draft,
                        isError: !!i.error,
                        isGroupDM: s,
                        isLastRapidFire: r,
                        isRapidFire: a,
                        isSent: l,
                        localMediaId: null === (n = i.message_data) || void 0 === n ? void 0 : n.localMediaId,
                        onPress: this._handleClick,
                        participants: u,
                        user: d,
                      })
                    : null
                },
              },
              {
                key: '_possiblyRenderUserAvatar',
                value: function (e) {
                  var t = e.isLastRapidFire,
                    n = e.isRapidFire,
                    r = this.props,
                    a = r.isSent,
                    o = r.isVoiceMessageActive,
                    i = r.user,
                    c = this._isDMVoiceMessage()
                  if (!i || (a && !c)) return null
                  var s = Te(re.a.theme.scale),
                    l = s.DMUserAvatarSizePx,
                    u = { showAvatar: !!c || !n || !!t, size: s.DMUserAvatarSizeType, user: i },
                    d = [
                      ai.userAvatar.base,
                      a ? ai.userAvatar.sent : ai.userAvatar.received,
                      c && je(re.a.theme.scale).userAvatar({ isVoiceMessageActive: o, isSent: a }),
                    ]
                  return y.createElement(
                    be.a,
                    { style: ai.userAvatar.container },
                    a ? null : y.createElement(be.a, { style: ai.userAvatar.spacer }),
                    c
                      ? y.createElement(Ko, {
                          color: a ? re.a.theme.colors.primary : re.a.theme.colors.text,
                          isActive: !!o,
                          size: l,
                          style: d,
                        })
                      : null,
                    y.createElement(be.a, { style: d }, y.createElement(Wo, u)),
                  )
                },
              },
              {
                key: '_scribeAction',
                value: function (e) {
                  this.props.analytics.scribe(Jo({}, e))
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
      v()(ni, 'contextType', $.a), v()(ni, 'defaultProps', ti)
      var ri = Object(ht.a)(
          Ge(
            (function (e) {
              function t(t) {
                var n = t.entry,
                  r = y.useContext(So),
                  a = xe()(r.activeVoiceMessage, 1)[0],
                  o = r.scribeAction,
                  i = xe()(a, 1)[0] === n.id,
                  c = Jo(Jo({}, t), {}, { isVoiceMessageActive: i, scribeVoiceMessage: o })
                return y.createElement(e, c)
              }
              return (t.defaultProps = ti), t
            })(ni),
          ),
        ),
        ai = {
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
        oi = n('H4nC'),
        ii = function (e) {
          var t = e.conversation,
            n = e.entry,
            r = e.inboxType,
            a = e.isActive,
            o = e.isFirstRapidFire,
            i = e.isLastRapidFire,
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
            return y.createElement(ri, {
              entry: n,
              inboxType: r,
              isActive: a,
              isFirstRapidFire: o,
              isGroupDM: g === _.CONVERSATION_TYPE.GROUP,
              isLastRapidFire: i,
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
            ? y.createElement(oi.a, { entry: n, isCompact: !1 })
            : null
        },
        ci = Object(C.createSelector)(
          function (e, t) {
            var n = Object(nt.o)(e, t.conversationId),
              r = n && Object(J.a)(n)
            return r && Object(_.selectEntry)(e, r)
          },
          function (e) {
            return { lastEntry: e }
          },
        ),
        si = Object(P.c)(ci),
        li = (n('Ef13'), n('uDfI')),
        ui = Object(C.createSelector)(
          function (e, t) {
            return x.e.selectMany(e, t.userIds || [])
          },
          function (e) {
            return { users: e }
          },
        ),
        di = Object(li.b)(ui),
        pi = n('Enqy'),
        fi = n('+/1j')
      function hi(e) {
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
      var mi = 'overflow',
        vi = function (e, t) {
          return e.id_str < t.id_str ? -1 : e.id_str > t.id_str ? 1 : 0
        },
        yi = { stiffness: 1e3, damping: 70 },
        bi = 140,
        gi = { scale: Object(pi.spring)(1, yi), translateY: Object(pi.spring)(0, yi) },
        _i = function (e, t) {
          return { key: e.id_str, data: e, style: gi }
        },
        Ei = Object(V.a)({ translateY: bi, scale: 0 }),
        Oi = Object(V.a)({ scale: Object(pi.spring)(1, yi), translateY: Object(pi.spring)(bi, yi) }),
        Si = [{ key: 'bubble', style: { scale: Object(pi.spring)(1, yi), translateY: Object(pi.spring)(0, yi) } }],
        Ci = Object(V.a)({ translateY: bi, scale: 0 }),
        Ri = Object(V.a)({ scale: Object(pi.spring)(1, yi), translateY: Object(pi.spring)(bi, yi) }),
        wi = function (e) {
          return [
            isFinite(e.scale) && { scale: e.scale.toFixed(3) },
            isFinite(e.translateY) && { translateY: ''.concat(Math.round(e.translateY), '%') },
          ].filter(Boolean)
        },
        Ii = (function (e) {
          u()(n, e)
          var t = hi(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
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
            i()(n, [
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
                    n = t.sort(vi).slice(0, 5).map(_i)
                  return (
                    t.length > 5 && n.push({ key: mi, style: gi }),
                    y.createElement(
                      be.a,
                      { style: [ki.root, e && ki.hidden] },
                      y.createElement(
                        be.a,
                        { style: ki.avatarRow },
                        y.createElement(pi.TransitionMotion, { styles: n, willEnter: Ei, willLeave: Oi }, function (e) {
                          return y.createElement(
                            y.Fragment,
                            null,
                            e.map(function (e, n) {
                              if (e.style.scale <= 0.05) return null
                              var r = wi(e.style)
                              return e.key === mi
                                ? y.createElement(
                                    be.a,
                                    {
                                      key: e.key,
                                      style: [ki.avatar, ki.avatarSpacer, ki.overflowAvatar, { transform: r }],
                                    },
                                    y.createElement(fi.a, { style: ki.overflowAvatarText }, '+', t.length - 5),
                                  )
                                : y.createElement(
                                    be.a,
                                    { key: e.key, style: [ki.avatar, { transform: r }] },
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
                        pi.TransitionMotion,
                        { didLeave: this._afterLeave, styles: t.length > 0 ? Si : [], willEnter: Ci, willLeave: Ri },
                        function (e) {
                          return y.createElement(
                            y.Fragment,
                            null,
                            e.map(function (e) {
                              return y.createElement(
                                be.a,
                                { key: e.key, style: [ki.messageBubble, { transform: wi(e.style) }] },
                                y.createElement(be.a, { style: ki.dot }),
                                y.createElement(be.a, { style: [ki.dot, ki.dot1] }),
                                y.createElement(be.a, { style: [ki.dot, ki.dot2] }),
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
        ki = re.a.create(function (e) {
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
        xi = di(Ii),
        Pi = n('tn7R')
      function Ti(e) {
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
      var Ai = (function (e) {
        u()(n, e)
        var t = Ti(n)
        function n() {
          var e
          a()(this, n)
          for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
          return (
            (e = t.call.apply(t, [this].concat(o))),
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
          i()(n, [
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
                return !t && y.createElement(xi, { userIds: n })
              },
            },
            {
              key: '_teardownLivePipeline',
              value: function () {
                Object(Pi.a)(this._timers).forEach(function (e) {
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
      v()(Ai, 'contextType', $.a)
      var Mi = si(Ai),
        ji = n('3AAD'),
        Di = n('iBK2'),
        Li = n('Fz18'),
        Bi = n('RJrc'),
        Fi = n('yw4N'),
        Ni = (n('XygZ'), n('dPJJ')),
        Hi = n('zrc3'),
        Ui = n('pQ3Z'),
        Wi = n.n(Ui),
        Vi = n('VY6S'),
        zi = n('Resy'),
        Gi = (function () {
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
                    o = new zi.a(a, r),
                    i = o.translateBy(-1 * n._transform),
                    c = e.getRect()
                  c.contains(i.getTop()) ||
                  c.contains(i.getBottom()) ||
                  c.contains(o.getTop()) ||
                  c.contains(o.getBottom())
                    ? n._normalize()
                    : n._debouncedNormalize()
                }
              }),
              (this._transform = 0),
              (this._viewport = t),
              (this._lastScrollTs = 0),
              (this._debouncedNormalize = Object(Vi.a)(this._normalize, 500)),
              (this._removeScrollListener = t.addScrollListener(this._normalizeIfNeeded)),
              (this._removeScrollTracker = t.addScrollListener(this._trackScroll))
          }
          return (
            i()(e, [
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
      function Ki(e) {
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
      var qi = (function (e) {
        u()(n, e)
        var t = Ki(n)
        function n(e, r) {
          var o
          a()(this, n),
            (o = t.call(this, e, r)),
            v()(s()(o), '_updatesSuspended', !1),
            v()(s()(o), '_handleHeightsUpdate', function (e, t) {
              var n = o.props.anchoring
              o._scrollBy(n.offsetCorrection(e, t))
            }),
            v()(s()(o), '_receiveWrapperNode', function (e) {
              return o._offsetHandler.setWrapperNode(e)
            }),
            v()(s()(o), '_handleRefUpdate', function (e) {
              o._ref = e
            }),
            v()(s()(o), '_handleEnterFullscreen', function () {
              ;(o._updatesSuspended = !0), o._ref && o._ref.freezeUpdates()
            }),
            v()(s()(o), '_handleExitFullscreen', function () {
              ;(o._updatesSuspended = !1), o.forceUpdate(), o._ref && o._ref.resumeUpdates()
            })
          var i = o._findInitialAnchor(e.initialAnchors || [])
          return (
            (o._initialItemIndex = i ? i.anchorIndex : 0),
            (o._initialAnchor = i && i.anchor),
            (o._offsetHandler = new Gi(e.viewport)),
            o
          )
        }
        return (
          i()(n, [
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
                var n = !Wi()(this.props, e) || !Wi()(this.state, t)
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
                  (this._unlistenFullscreenEnter = Ni.a(this._handleEnterFullscreen)),
                  (this._unlistenFullscreenExit = Ni.b(this._handleExitFullscreen))
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
                    var n = Object(Hi.a)(t, function (t) {
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
      v()(qi, 'defaultProps', { anchoring: ji.a })
      var Yi = n('AOWc'),
        Xi = n('180P'),
        Qi = n('Ey+e'),
        Zi = n('SrIh'),
        Ji = n('E6XO'),
        $i = n('06eB'),
        ec = n.n($i),
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
            var o
            return (
              a()(this, n),
              (o = t.call(this, e, r)),
              v()(s()(o), '_perfReported', !1),
              v()(s()(o), '_observeElement', function (e) {
                var t = o._resizeObserver
                t && (t.disconnect(), t.observe(e))
              }),
              v()(s()(o), '_handleResize', function (e) {
                var t = o.props,
                  n = t.id,
                  r = t.onHeightChanged,
                  a = xe()(e, 1)[0]
                o._isResizeObserverHeightUpdatesEnabled &&
                  a &&
                  a.contentRect.height !== o._currentHeight &&
                  ((o._currentHeight = a.contentRect.height), r(n, a.contentRect.height)),
                  o._perfReported || (o.props.onVisible(n, rc() - o._perfStart), (o._perfReported = !0))
              }),
              v()(s()(o), '_setRef', function (e) {
                var t = o.props,
                  n = t.id,
                  r = t.setAPI
                e ? ((o._element = e), r(n, s()(o)), o._observeElement(e)) : (r(n, void 0), (o._element = void 0))
              }),
              (o._isResizeObserverHeightUpdatesEnabled =
                o.context.featureSwitches.isTrue('responsive_web_vs_config_resize_observer_enabled') &&
                tc.b.isDesktopOS() &&
                tc.b.isSafari()),
              (o._resizeObserver = new window.ResizeObserver(o._handleResize)),
              (o._perfStart = rc()),
              o
            )
          }
          return (
            i()(n, [
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
      var oc = n('+d3d'),
        ic = n('iChn')
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
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
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
                  Ji.c('scroller:ttfv:'.concat(r), { duration_ms: n }), e._visibilityMeasurements.clear()
                }
              }),
              v()(s()(e), '_handleCellHeightChanged', function (t, n) {
                ;(e._heightUpdates[t] = n), e._flushHeightUpdates()
              }),
              v()(
                s()(e),
                '_flushHeightUpdates',
                Object(oc.a)(
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
            i()(n, [
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
                  return Object(ic.a)(
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
              o = t.sliceEnd,
              i = t.sliceStart,
              c = t.viewportRectangle
            a()(this, e),
              (this._viewportRectangle = c),
              (this._list = n),
              (this._rectangles = r),
              (this._sliceStart = i),
              (this._sliceEnd = o)
          }
          return (
            i()(e, [
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
                  if (0 === e.length) return new zi.a(0, 0)
                  var t = this._rectangles,
                    n = e[0].id,
                    r = e[e.length - 1].id,
                    a = t[n].getTop(),
                    o = t[r].getBottom() - a
                  return new zi.a(a, o)
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
                    r = Object(Hi.a)(this._list, function (e) {
                      var r = e.id
                      return n[r].doesIntersectWith(t)
                    })
                  if (r < 0) return []
                  var a = Object(Hi.a)(
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
              o = t + r,
              i = a < 0,
              c = o >= e.length
            if (i && c) break
            if (!c && n(e[o])) return o
            if (!i && n(e[a])) return a
          }
          return -1
        },
        bc = function (e) {
          var t = e.list,
            n = e.nextList,
            r = e.sliceEnd,
            a = e.sliceStart,
            o = n.reduce(function (e, t) {
              return (e[t.id] = !0), e
            }, {}),
            i = yc(t, a, function (e) {
              var t = e.id
              return !Object(pc.a)(t) && o.hasOwnProperty(t) && o[t]
            })
          if (-1 === i) return null
          var c = Object(Hi.a)(n, function (e) {
            var n = e.id
            return t[i].id === n
          })
          return (
            Object(Yi.a)(c >= 0, 'newSliceStart should be defined if we found a common item'),
            i > 0 && Object(pc.a)(t[i - 1].id) && c > 0 && Object(pc.a)(n[c - 1].id) && (c -= 1),
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
            var o
            a()(this, n),
              (o = t.call(this, e, r)),
              v()(s()(o), '_updatesSuspended', !1),
              v()(s()(o), 'freezeUpdates', function () {
                o._updatesSuspended = !0
              }),
              v()(s()(o), 'resumeUpdates', function () {
                ;(o._updatesSuspended = !1), o._scheduleUpdate()
              }),
              v()(s()(o), '_handleHeightsChange', function (e) {
                o._postRenderProcessing({ hasListChanged: !1, newHeights: e })
              }),
              v()(s()(o), '_handleRefUpdate', function (e) {
                o._ref = e
              }),
              v()(s()(o), '_setNecessarySlice', function (e, t) {
                var n = o.state,
                  r = n.sliceEnd,
                  a = (function (e, t) {
                    if (t.start >= e.start && t.end <= e.end) return e
                    if (t.start >= e.end || t.end <= e.start) return t
                    var n = Math.max(e.start - t.start, t.end - e.end)
                    return { start: Math.min(e.start + n, t.start), end: Math.max(e.end - n, t.end) }
                  })({ start: n.sliceStart, end: r }, { start: e, end: t }),
                  i = a.end,
                  c = a.start
                o._setSlice(c, i)
              }),
              v()(s()(o), '_setSlice', function (e, t) {
                if (!o._updatesSuspended) {
                  var n = o.state,
                    r = n.sliceEnd
                  ;(e === n.sliceStart && t === r) || o.setState({ sliceStart: e, sliceEnd: t })
                }
              })
            var i = o.props,
              c = i.initialItemIndex,
              l = i.list
            ;(o._assumedItemHeight = e.assumedItemHeight),
              (o._getSlice = function () {
                var e = o.props.list,
                  t = o.state,
                  n = t.sliceEnd,
                  r = t.sliceStart
                return o._getMemoizedSlice(e, r, n)
              }),
              (o._getMemoizedSlice = Object(Pe.a)(function (e, t, n) {
                return e.slice(t, n)
              })),
              (o._getRectangles = function (e) {
                var t = e || s()(o),
                  n = t._assumedItemHeight,
                  r = t._heights,
                  a = t.props.list
                return t._getMemoizedRectangles(a, r, n)
              }),
              (o._getMemoizedRectangles = Object(Pe.a)(function (e, t, n) {
                return Cc(e, t, n)
              })),
              (o._heights = {})
            var u = o.props,
              d = u.cacheKey,
              p = u.heightCache
            d && p.hasOwnProperty(d) && (o._heights = p[d]), (o.state = o._getDefaultSlice(l, c))
            var f = Object(fc.a)(function () {
              return o._criticalUpdate()
            }, window.requestAnimationFrame)
            return (
              (o._scheduleUpdate = window.requestIdleCallback
                ? Object(fc.a)(function () {
                    return o._criticalUpdate()
                  }, window.requestIdleCallback)
                : f),
              (o._schedulePositioningNotification = Object(fc.a)(
                function () {
                  return o._notifyPositioning()
                },
                window.requestIdleCallback
                  ? function (e) {
                      return window.requestIdleCallback(e, { timeout: 500 })
                    }
                  : window.requestAnimationFrame,
              )),
              (o._handleScroll = Object(oc.a)(f, 100, { trailing: !0 })),
              (o._scheduleDebouncedUpdate = Object(Vi.a)(function () {
                window.requestAnimationFrame(function () {
                  o._debouncedUpdate()
                })
              }, 500)),
              (o._removeDebouncedListener = e.viewport.addScrollListener(o._scheduleDebouncedUpdate)),
              o
            )
          }
          return (
            i()(n, [
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
                    o = e.list
                  if (o !== t) {
                    var i = bc({ list: t, nextList: o, sliceStart: a, sliceEnd: r }) || this._getDefaultSlice(o)
                    this._setSlice(i.sliceStart, i.sliceEnd)
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
                    o = r.blankSpaceBelow
                  return y.createElement(
                    vc.a.Provider,
                    { value: Oc },
                    n({
                      ref: this._handleRefUpdate,
                      list: this._getSlice(),
                      blankSpaceAbove: a,
                      blankSpaceBelow: o,
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
                    o = 0 === e.length ? 0 : a[e[r].id].getTop() - a[e[0].id].getTop(),
                    i = Object(J.a)(e)
                  return {
                    blankSpaceAbove: o,
                    blankSpaceBelow: n >= e.length || !i ? 0 : a[i.id].getBottom() - a[e[n].id].getTop(),
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
                    o = a.minimumOffscreenToViewportRatio,
                    i = a.preferredOffscreenToViewportRatio
                  t || !this._sliceIncludesScaledViewport(o)
                    ? this._scheduleUpdate()
                    : this._sliceIncludesScaledViewport(i) || this._scheduleDebouncedUpdate(),
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
                      var o = t._heights.hasOwnProperty(a) ? t._heights[a] : t._assumedItemHeight,
                        i = n[a]
                      return (r = r || o !== i), e + (i - o)
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
                    o = r.getTop() - a,
                    i = r.getBottom() + a,
                    c = this._getRectangles(),
                    s = Object(Hi.a)(n, function (e) {
                      var t = e.id
                      return c[t].getBottom() > o
                    }),
                    l = s >= 0 ? s : n.length - 1,
                    u = Object(Hi.a)(
                      n,
                      function (e) {
                        var t = e.id
                        return c[t].getTop() >= i
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
                  if (!this._ref) return new zi.a(0, 0)
                  var e = this._ref.getWrapperNode()
                  if (!e) return new zi.a(0, 0)
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
                    o = this._getRectangles(a),
                    i = e[t].id,
                    c = o[i].getBottom(),
                    s = Object(Hi.a)(
                      e,
                      function (e) {
                        var t = e.id
                        return o[t].getTop() - c >= r
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
              var o = a.id,
                i = t.hasOwnProperty(o) ? t[o] : n,
                c = new zi.a(e, i)
              return (r[o] = c), c.getBottom()
            }, 0),
            r
          )
        },
        Rc = Sc
      function wc(e) {
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
            Object(Zi.a)('Fallback to slow hashing in VirtualScroller (type = '.concat(e ? e.type : '', ')')),
            Object(Xi.a)(e)
          )
        },
        kc = (function (e) {
          u()(n, e)
          var t = wc(n)
          function n(e, r) {
            var o
            return (
              a()(this, n),
              (o = t.call(this, e, r)),
              v()(s()(o), '_onDemandRenderer', function (e) {
                var t = o.props,
                  n = t.assumedItemHeight,
                  r = t.minimumOffscreenToViewportRatio,
                  a = t.preferredOffscreenToViewportRatio,
                  i = 'function' == typeof n ? n('') : n
                return y.createElement(
                  Rc,
                  yn()({}, e, {
                    assumedItemHeight: i,
                    cacheKey: o.props.cacheKey,
                    minimumOffscreenToViewportRatio: r,
                    onPositioningUpdate: o._handlePositioningUpdate,
                    preferredOffscreenToViewportRatio: a,
                    renderList: o._viewRenderer,
                    viewport: o._viewport,
                  }),
                )
              }),
              v()(s()(o), '_viewRenderer', function (e) {
                return y.createElement(sc, e)
              }),
              v()(s()(o), '_getItemRenderer', function () {
                return o._getMemoizedItemRenderer(o.props.renderer)
              }),
              v()(
                s()(o),
                '_getMemoizedItemRenderer',
                Object(Pe.a)(function (e) {
                  return function (t) {
                    return t ? (t.presentational ? t.renderNode() : e(t.data)) : null
                  }
                }),
              ),
              v()(s()(o), '_handleAnchorRendererRefUpdate', function (e) {
                o._anchorRenderer = e
              }),
              v()(s()(o), '_handlePositionRestored', function () {
                ;(0, o.props.onPositionRestored)(), (o._edgeProximity = o._createEdgeProximity())
                var e = o._anchorRenderer && o._anchorRenderer.getPositioning()
                e && o._edgeProximity.handlePositioningUpdate(e)
              }),
              v()(s()(o), '_handlePositioningUpdate', function (e) {
                o._edgeProximity && o._edgeProximity.handlePositioningUpdate(e)
                var t = o.props.onItemsRendered
                t && t({ positions: e.getRenderedItems(), viewport: e.getForViewport() })
              }),
              v()(s()(o), '_getList', function () {
                var e = o.props,
                  t = e.footer,
                  n = e.header,
                  r = e.identityFunction,
                  a = e.items
                return o._getMemoizedList(r, a, n, t)
              }),
              v()(
                s()(o),
                '_getMemoizedList',
                Object(Pe.a)(function (e, t, n, r) {
                  var a = {},
                    o = t.reduce(function (t, n) {
                      var r = e(n) || n.id || Ic(n)
                      return (
                        Object(Yi.a)('number' == typeof r || 'string' == typeof r, 'Item id must not be falsy'),
                        a.hasOwnProperty(r)
                          ? Object(Zi.a)(
                              'Duplicate item id generated in VirtualScroller. Latter item will be discarded',
                              { extra: { id: r } },
                            )
                          : (t.push({ data: { data: n }, id: r }), (a[r] = !0)),
                        t
                      )
                    }, []),
                    i = n
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
                  return o.length ? [].concat(st()(i ? [i] : []), st()(o), st()(c ? [c] : [])) : []
                }),
              ),
              (o._viewport = e.viewport || r.viewport || lc.a.root()),
              o
            )
          }
          return (
            i()(n, [
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
                    ? y.createElement(qi, {
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
          anchoring: qi.defaultProps.anchoring,
          assumedItemHeight: Rc.defaultProps.assumedItemHeight,
          identityFunction: Ic,
          minimumOffscreenToViewportRatio: Rc.defaultProps.minimumOffscreenToViewportRatio,
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
          preferredOffscreenToViewportRatio: Rc.defaultProps.preferredOffscreenToViewportRatio,
          withKeyboardShortcuts: !1,
        })
      var xc = Object(Qi.a)(kc),
        Pc = n('mw9i')
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
            var o
            return (
              a()(this, n),
              (o = t.call(this, e, r)),
              v()(
                s()(o),
                '_appBarScrollEnabled',
                o.context.featureSwitches.isTrue('responsive_web_app_bar_scroll_enabled'),
              ),
              v()(
                s()(o),
                '_shouldUseNewScroller',
                o.context.featureSwitches.isTrue('responsive_web_dm_new_scroller_enabled'),
              ),
              v()(s()(o), '_renderItem', function (e) {
                var t = o.props.conversation,
                  n = t.conversation_id
                switch (e.type) {
                  case ve.b.TYPING_INDICATOR:
                    return n ? y.createElement(Mi, { conversationId: n }) : null
                  case ve.b.READ_ONLY_INDICATOR:
                    return n
                      ? y.createElement(
                          be.a,
                          { style: Bc.readOnly },
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
                    return o._renderDMEntry(e)
                }
              }),
              v()(s()(o), '_setActiveEntry', function (e) {
                o.setState({ activeEntryId: e })
              }),
              v()(s()(o), '_setShouldFreezeUpdates', function (e) {
                o.setState({ shouldFreezeUpdates: e })
              }),
              (o._anchoring = Y({
                isOwnMessage: function (e) {
                  var t, n
                  return (
                    (null === (t = e.entry) || void 0 === t || null === (n = t.message_data) || void 0 === n
                      ? void 0
                      : n.sender_id) === o.props.perspective || !1
                  )
                },
                typingIndicatorId: X.a,
              })),
              (o.state = { activeEntryId: null, shouldFreezeUpdates: !1 }),
              o
            )
          }
          return (
            i()(n, [
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
                    o = t.onHistoryRequest,
                    i = t.style,
                    c = this.state.activeEntryId,
                    s = (function (e) {
                      var t = e.activeEntryId,
                        n = e.canInjectConversationProfileInfoHeader,
                        r = e.conversation,
                        a = e.footer,
                        o = e.readOnlyEntry,
                        i = (r && r.entries) || [],
                        c = i.reduce(function (e, a, o) {
                          n && 0 === o && e.push(X.b)
                          var c = Object(J.a)(e),
                            s = o === i.length - 1
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
                      return a && c.push(a), r.read_only && o && c.push(o), c
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
                      l = e._appBarScrollEnabled ? (c ? fe.b.drawerHeaderRadius : Bc.scrollSpace) : null
                    return y.createElement(
                      be.a,
                      { style: [Bc.scrollContainer, l] },
                      y.createElement(
                        Fi.a,
                        { style: [Bc.scrollContainer, a && Bc.conversationsPadding, l, i] },
                        r || null,
                        n.status && n.status !== ve.c.AT_END ? y.createElement(Bi.a, null) : null,
                        y.createElement(
                          Pc.a,
                          { style: [Bc.content, Bc.alignTop], withGutter: !0 },
                          e._shouldUseNewScroller
                            ? y.createElement(Di.b, {
                                anchoring: ji.a,
                                assumedItemHeight: 50,
                                cacheKey: p,
                                canBeAnchorFunction: Dc,
                                hasNewContentAtBottom: !0,
                                identityFunction: jc,
                                initialAnchor: s.length > 0 ? H.a(jc(d(s))) : void 0,
                                items: s,
                                nearStartProximityRatio: 2,
                                onNearStart: o,
                                renderer: e._renderItem,
                                withoutHeadroom: !1,
                              })
                            : y.createElement(
                                Li.a,
                                { identifier: p },
                                y.createElement(xc, {
                                  anchoring: e._anchoring,
                                  assumedItemHeight: 50,
                                  cacheKey: p,
                                  hasNewContentAtBottom: !1,
                                  identityFunction: jc,
                                  initialAnchor: s.length > 0 ? H.a(jc(u(s))) : void 0,
                                  items: s,
                                  nearStartProximityRatio: 2,
                                  onNearStart: o,
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
                    o = e.isRapidFire,
                    i = this.props,
                    c = i.conversation,
                    s = i.inboxType,
                    l = i.isWide,
                    u = i.perspective,
                    d = i.scribeNamespace
                  return t && s
                    ? y.createElement(ii, {
                        conversation: c,
                        entry: t,
                        inboxType: s,
                        isActive: n,
                        isFirstRapidFire: r,
                        isLastRapidFire: a,
                        isRapidFire: o,
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
      var Bc = re.a.create(function (e) {
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
        Fc = n('uB9N'),
        Nc = n('v//M'),
        Hc = n('J2UM'),
        Uc = n('07FG'),
        Wc = n('I8M8'),
        Vc = n('7myi'),
        zc = n('883S'),
        Gc = n('z0MJ'),
        Kc = n.n(Gc),
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
            o = { type: 'destructiveOutlined' },
            i = y.createElement(xt.a, yn()({}, o, { accessibilityRole: 'button' }), $c),
            c = y.createElement(xt.a, yn()({}, o, { onPress: r }), Jc),
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
          return t ? c : y.createElement(Wn.a, { renderContent: s }, i)
        },
        ts = Object(bn.a)().propsFromActions(function () {
          return {
            addToast: S.b,
            block: x.e.block,
            createLocalApiErrorHandler: Object(A.createLocalApiErrorHandlerWithContextFactory)(
              'UNTRUSTED_CONVERSATION_ACTIONS',
            ),
            muteDMUser: _.muteDMUser,
            unmuteDMUser: _.unmuteDMUser,
            unblock: x.e.unblock,
          }
        }),
        ns = n('AQ79'),
        rs = n('u0B7'),
        as = n('cHvH'),
        os = n('lHOd'),
        is = n('vMjK'),
        cs = n('7JQg'),
        ss = n('24HD')
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
      function ds(e) {
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
      var ps = Ze.a.da878dcf,
        fs = Ze.a.d96cf7cd,
        hs = Ze.a.gde6b424,
        ms = Ze.a.e308019b,
        vs = Ze.a.gf5e9ea6,
        ys = Ze.a.hc52446b,
        bs = Ze.a.f7e1ad65,
        gs = { headline: Ze.a.gdf4b79f, text: Ze.a.bbf83d83, confirmButtonLabel: Ze.a.bb1d57b6 },
        _s = (function (e) {
          u()(n, e)
          var t = ds(n)
          function n(e, r) {
            var o
            return (
              a()(this, n),
              (o = t.call(this, e, r)),
              v()(s()(o), '_renderCopy', function (e) {
                var t = o.props.conversation,
                  n = o.context.loggedInUserId
                return y.createElement(ge.b, { style: Es.copy }, e ? ys : bs({ senderName: Object(T.i)(t, n).name }))
              }),
              v()(s()(o), '_renderActionButtons', function (e) {
                var t = o.props.conversation,
                  n = o.context.loggedInUserId
                return y.createElement(as.a, null, function (r) {
                  var a = r.windowWidth <= re.a.theme.breakpoints.small
                  return y.createElement(
                    be.a,
                    { style: Es.actionsContainer },
                    y.createElement(
                      be.a,
                      { style: a ? Es.actionFullWidth : [Es.actionHalfWidth, Es.actionMarginRight] },
                      y.createElement(os.a.Consumer, null, function (r) {
                        return y.createElement(es, {
                          isGroup: e,
                          onBlockClick: o._handleBlockClick,
                          onReportClick: o._handleReportMenuItemClick,
                          requestorScreenName: Object(T.i)(t, n).screenName,
                        })
                      }),
                    ),
                    y.createElement(
                      xt.a,
                      {
                        onPress: o._handleLeaveConversationClick,
                        size: 'medium',
                        style: a ? [Es.actionFullWidth, Es.actionMarginTop] : [Es.actionHalfWidth, Es.actionMarginLeft],
                        type: 'destructiveOutlined',
                      },
                      fs,
                    ),
                    y.createElement(
                      xt.a,
                      {
                        onPress: o._handleAcceptConversation,
                        size: 'medium',
                        style: [Es.actionFullWidth, Es.actionMarginTop],
                        type: 'primaryOutlined',
                      },
                      ps,
                    ),
                  )
                })
              }),
              v()(s()(o), '_renderLeaveConfirmationSheet', function () {
                return y.createElement(kt.a, {
                  confirmButtonLabel: gs.confirmButtonLabel,
                  confirmButtonType: 'destructiveFilled',
                  headline: gs.headline,
                  onCancel: o._handleCancelLeave,
                  onConfirm: o._handleConfirmLeave,
                  text: gs.text,
                })
              }),
              v()(s()(o), '_renderBlockConfirmationSheet', function () {
                var e = o.props.conversation,
                  t = o.context.loggedInUserId,
                  n = Object(T.i)(e, t),
                  r = n.idStr,
                  a = n.screenName
                return Object(ss.j)({
                  confirmation: Object(ss.f)(a),
                  onClose: o._handleBlockLeave,
                  handleConfirm: o._createBlockUserHandler(r),
                })
              }),
              v()(s()(o), '_scribeAction', function (e, t) {
                var n = o.props
                ;(0, n.scribeAction)(us(us({}, n.scribeNamespace), {}, { action: e }), t || o._getScribeData())
              }),
              v()(s()(o), '_getScribeData', function () {
                return {
                  items: [{ conversation_type: o.props.conversation.type === _.CONVERSATION_TYPE.GROUP ? 1 : 0 }],
                }
              }),
              v()(s()(o), '_handleReportTextClick', function () {
                o._scribeAction('report')
              }),
              v()(s()(o), '_handleReportMenuItemClick', function () {
                var e = o.props,
                  t = e.conversationId,
                  n = e.history,
                  r = e.inboxType,
                  a = e.scribeNamespace
                t && (o._scribeAction('report'), n.push(Object(T.f)(t, window.location.pathname, a, r)))
              }),
              v()(s()(o), '_handleLeaveConversationClick', function () {
                o.setState({ showLeaveConfirmation: !0, showBlockConfirmation: !1 })
              }),
              v()(s()(o), '_handleMuteDMUserClick', function (e) {
                return function () {
                  var t = o.props,
                    n = t.addToast,
                    r = t.conversation,
                    a = t.conversationId,
                    i = t.createLocalApiErrorHandler,
                    c = t.inboxType,
                    s = t.muteDMUser,
                    l = o.context.loggedInUserId,
                    u = Object(T.i)(r, l),
                    d = u.idStr,
                    p = u.name
                  s(d, a).then(function () {
                    n({ action: { label: vs, onAction: o._handleUnmuteDMUserClick(e) }, text: hs({ name: p }) }),
                      c !== ns.c.TERTIARY && e.replace('/messages/requests')
                  }, i()),
                    o._scribeAction('mute_user')
                }
              }),
              v()(s()(o), '_handleUnmuteDMUserClick', function (e) {
                return function () {
                  var t = o.props,
                    n = t.addToast,
                    r = t.conversation,
                    a = t.conversationId,
                    i = t.createLocalApiErrorHandler,
                    c = t.unmuteDMUser,
                    s = o.context.loggedInUserId,
                    l = Object(T.i)(r, s),
                    u = l.idStr,
                    d = l.name
                  a &&
                    (c(u, a).then(function () {
                      n({ action: { label: vs, onAction: o._handleMuteDMUserClick(e) }, text: ms({ name: d }) })
                    }, i()),
                    o._scribeAction('unmute_user'))
                }
              }),
              v()(s()(o), '_handleBlockClick', function () {
                o.setState({ showBlockConfirmation: !0, showLeaveConfirmation: !1 })
              }),
              v()(s()(o), '_handleCancelLeave', function () {
                o.setState({ showLeaveConfirmation: !1 })
              }),
              v()(s()(o), '_handleBlockLeave', function () {
                o.setState({ showBlockConfirmation: !1 })
              }),
              v()(s()(o), '_handleConfirmLeave', function () {
                var e,
                  t = o.props,
                  n = t.conversation,
                  r = t.conversationId,
                  a = t.inboxType,
                  i = t.leaveConversation,
                  c = t.location,
                  s = n.type === _.CONVERSATION_TYPE.GROUP ? 'leave_group' : 'delete_thread',
                  l = null != n && n.participants ? Object.keys(n.participants).length : 0,
                  u = (null == c || null === (e = c.state) || void 0 === e ? void 0 : e.position) || 0,
                  d = {
                    conversation_type: (null == n ? void 0 : n.type) === _.CONVERSATION_TYPE.GROUP ? 1 : 0,
                    conversation_id: r,
                    conversation_participant_count: l,
                    position: u,
                    inbox_type: Object(T.h)(a),
                    entry_point: ft.b.REQUEST_ACTION_SHEET,
                  }
                o.setState({ showLeaveConfirmation: !1 }),
                  i({ conversationId: r }),
                  o._scribeAction(s, d),
                  o._returnToInbox()
              }),
              v()(s()(o), '_returnToInbox', function () {
                var e = o.props,
                  t = e.history,
                  n = e.inboxType
                t.push(Object(T.e)(n))
              }),
              v()(s()(o), '_handleConfirmAccept', function () {
                var e,
                  t = o.props,
                  n = t.acceptConversation,
                  r = t.conversation,
                  a = t.conversationId,
                  i = t.inboxType,
                  c = t.location,
                  s = t.scribeAction,
                  l = t.scribeNamespace,
                  u = r.type === _.CONVERSATION_TYPE.GROUP,
                  d = null != r && r.participants ? Object.keys(r.participants).length : 0,
                  p = (null == c || null === (e = c.state) || void 0 === e ? void 0 : e.position) || 0
                a &&
                  (n(a),
                  s(us(us({}, l), {}, { action: 'accept' }), {
                    conversation_id: a,
                    conversation_type: u ? 1 : 0,
                    conversation_participant_count: d,
                    entry_point: ft.b.REQUEST_ACTION_SHEET,
                    inbox_type: Object(T.h)(i),
                    position: p,
                  }))
              }),
              v()(s()(o), '_handleAcceptConversation', function () {
                o._handleConfirmAccept()
              }),
              v()(s()(o), '_createBlockUserHandler', function (e) {
                return function () {
                  var t = o.props,
                    n = t.addToast,
                    r = t.block,
                    a = t.createLocalApiErrorHandler
                  o.setState({ showBlockConfirmation: !1 }),
                    r(e).then(function () {
                      n({ action: { label: is.c, onAction: o._createUnblockUserHandler(e) }, text: is.a })
                    }, a(Qc.a)),
                    o._scribeAction('block')
                }
              }),
              v()(s()(o), '_createUnblockUserHandler', function (e) {
                return function () {
                  var t = o.props,
                    n = t.createLocalApiErrorHandler
                  ;(0, t.unblock)(e).catch(n(rs.a)), o._scribeAction('unblock')
                }
              }),
              (o.state = { showLeaveConfirmation: !1, showBlockConfirmation: !1 }),
              o
            )
          }
          return (
            i()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._scribeAction('impression')
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props.conversation,
                    t = this.state,
                    n = t.showBlockConfirmation,
                    r = t.showLeaveConfirmation,
                    a = (e && e.type) === _.CONVERSATION_TYPE.GROUP
                  return y.createElement(
                    y.Fragment,
                    null,
                    y.createElement(be.a, { style: Es.root }, this._renderCopy(a), this._renderActionButtons(a)),
                    tc.b.isKaiOS()
                      ? y.createElement(Yc.a, {
                          leftText: fs,
                          onLeftClick: this._handleLeaveConversationClick,
                          onRightClick: this._handleAcceptConversation,
                          rightText: ps,
                        })
                      : null,
                    r ? this._renderLeaveConfirmationSheet() : null,
                    n ? this._renderBlockConfirmationSheet() : null,
                  )
                },
              },
            ]),
            n
          )
        })(y.PureComponent)
      v()(_s, 'contextType', $.a)
      var Es = re.a.create(function (e) {
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
          }
        }),
        Os = Object(cs.c)({ element: 'untrusted_interstitial' })(ts(_s)),
        Ss = n('rFBM'),
        Cs = n('jTgF')
      function Rs(e, t) {
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
      function ws(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Rs(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Rs(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function Is(e) {
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
      var ks = y.createElement(Xt.a, null),
        xs = Ze.a.badb01a0,
        Ps = Ze.a.e3275464,
        Ts = Ze.a.d6b11d9c,
        As = Ze.a.i7ca1446,
        Ms = function (e) {
          return e && (e.tweet || e.media)
        },
        js = function (e) {
          var t,
            n = e.gifMetadata,
            r = void 0 === n ? {} : n,
            a = e.tweetAttachment,
            o = e.media
          return (
            a
              ? (t = { tweet: a })
              : o
              ? o.mediaFile
                ? (t = { media: o })
                : o.externalMediaDetails && (t = { media: o, provider: r.provider, gifUrl: r.url })
              : (t = null),
            t
          )
        },
        Ds = (function (e) {
          u()(n, e)
          var t = Is(n)
          function n(e, r) {
            var o
            return (
              a()(this, n),
              (o = t.call(this, e, r)),
              v()(s()(o), '_composer', y.createRef()),
              v()(s()(o), '_handleLivePipelineUpdate', function () {
                o._fetchUpdatesIfNeeded(), o._updatePolling && o._updatePolling.restart()
              }),
              v()(s()(o), '_fetchUpdatesIfNeeded', function () {
                var e = o.props,
                  t = e.conversationId,
                  n = e.createLocalApiErrorHandler
                ;(0, e.fetchUpdatesIfNeeded)(
                  e.isDmReceiptSettingEnabled ? { active_conversation_id: t, dm_users: !0 } : {},
                ).catch(n())
              }),
              v()(s()(o), '_handleInitialFetch', function () {
                o._initialFetch()
              }),
              v()(s()(o), '_initialFetch', function () {
                var e = o.props,
                  t = e.conversationId,
                  n = e.createLocalApiErrorHandler,
                  r = e.fetchInboxIfNeeded,
                  a = e.fetchUpdatesIfNeeded
                return r()
                  .then(function () {
                    if (t)
                      return o._fetchConversation(t).then(function () {
                        return o._requestWelcomeMessage(t)
                      })
                  })
                  .then(function () {
                    return a()
                  })
                  .catch(n())
                  .finally(function () {
                    o._updatePolling && o._updatePolling.start()
                  })
              }),
              v()(s()(o), '_isUntrustedConversation', function (e) {
                var t = o.props.isNewGroupConversation
                return !((null != e && e.trusted) || t)
              }),
              v()(s()(o), '_leaveConversation', function (e) {
                var t = o.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.leaveConversation)(e).catch(n({ showToast: !0 }))
              }),
              v()(s()(o), '_acceptConversation', function (e) {
                var t = o.props,
                  n = t.acceptConversation,
                  r = t.createLocalApiErrorHandler
                n(e)
                  .then(function () {
                    tc.b.isMobileOS() && o._fetchConversation(e)
                  })
                  .catch(r({ showToast: !0 }))
              }),
              v()(s()(o), '_renderActions', function () {
                var e = o.props,
                  t = e.conversation,
                  n = e.conversationId,
                  r = e.history,
                  a = e.inboxType,
                  i = e.location,
                  c = e.scribeAction
                return t && o._isUntrustedConversation(t)
                  ? t.read_only
                    ? null
                    : n &&
                      y.createElement(Os, {
                        acceptConversation: o._acceptConversation,
                        conversation: t,
                        conversationId: n,
                        history: r,
                        inboxType: a,
                        leaveConversation: o._leaveConversation,
                        location: i,
                        scribeAction: c,
                      })
                  : y.createElement(
                      y.Fragment,
                      null,
                      o._renderComposerBar(),
                      tc.b.isKaiOS()
                        ? y.createElement(Yc.a, {
                            leftText: As,
                            onLeftClick: o._handleInfoClick,
                            onRightClick: o._handleComposeClick,
                            rightText: xs,
                          })
                        : null,
                    )
              }),
              v()(s()(o), '_render', function () {
                var e = o.props,
                  t = e.conversation,
                  n = e.conversationId,
                  r = e.drawerHeader,
                  a = e.inboxType,
                  i = e.isWide,
                  c = e.perspective,
                  s = e.scribeNamespace,
                  l = o.state,
                  u = l.attachment,
                  d = l.composerHeight
                return y.createElement(
                  Oo,
                  { key: n },
                  y.createElement(
                    Ss.a,
                    { allowDragDrop: !Ms(u), onFilesAdded: o._handleDragDrop, style: Ls.dragDrop },
                    y.createElement(
                      Fi.a,
                      {
                        style: [
                          Ls.scrollView,
                          !Object(qc.a)() && !o._isUntrustedConversation(t) && { paddingBottom: d },
                        ],
                      },
                      c && t
                        ? y.createElement(Lc, {
                            conversation: t,
                            drawerHeader: r,
                            inboxType: a,
                            isWide: i,
                            onHistoryRequest: o._handleHistoryRequest,
                            perspective: c,
                            scribeNamespace: s,
                            style: Ls.activity,
                          })
                        : null,
                    ),
                    o._renderActions(),
                  ),
                )
              }),
              v()(s()(o), '_handleNavHeightChange', function (e) {
                o.setState({ composerHeight: ''.concat(e, 'px') })
              }),
              v()(s()(o), '_handleTyping', function () {
                o._throttleSaveDraftText(), o._throttleUpdateTyping()
              }),
              v()(
                s()(o),
                '_throttleUpdateTyping',
                Object(oc.a)(
                  function () {
                    var e = o.props,
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
                s()(o),
                '_throttleSaveDraftText',
                Object(oc.a)(
                  function () {
                    o.props.conversationId && o._handleSaveDraftText()
                  },
                  1e3,
                  { leading: !1 },
                ),
              ),
              v()(s()(o), '_handleDragDrop', function (e) {
                o._currentComposer && o._currentComposer.handleAddMediaFiles(e)
              }),
              v()(s()(o), '_handleHistoryRequest', function () {
                var e = o.props,
                  t = e.conversationId,
                  n = e.createLocalApiErrorHandler
                ;(0, e.fetchConversationHistory)({ conversationId: t }).catch(n())
              }),
              v()(s()(o), '_handleSendMessage', function (e, t) {
                var n,
                  r,
                  a = o.props,
                  i = a.addToast,
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
                  E = o.state.attachment,
                  O = E && E.media,
                  S = null != s && s.participants ? Object.keys(s.participants).length : 0,
                  C = (null == s ? void 0 : s.type) === _.CONVERSATION_TYPE.GROUP,
                  R = 'unknown'
                if (
                  (e.quickReply ||
                    O ||
                    (o._currentComposer && o._currentComposer.clear(),
                    o._currentComposer && o._currentComposer.focus()),
                  d)
                )
                  R = 'gif'
                else if (c) R = 'card'
                else if (g) R = 'tweet'
                else {
                  var w,
                    I = null == E || null === (w = E.media) || void 0 === w ? void 0 : w.mediaFile,
                    k = null != I && I.isVideo ? 'video' : null != I && I.isGif ? 'gif' : 'photo'
                  R = I ? k : t ? 'text' : 'unknown'
                }
                return (
                  l &&
                    v(ws(ws({}, y), {}, { element: R, action: 'send_dm' }), {
                      conversation_id: l,
                      conversation_participant_count: S,
                      conversation_type: C ? ft.g.GROUP : ft.g.ONE_TO_ONE,
                    }),
                  o.setState({ isSending: !0 }),
                  l
                    ? (!o.state.attachment ||
                        (null !== (n = o.state.attachment) &&
                          void 0 !== n &&
                          null !== (r = n.media) &&
                          void 0 !== r &&
                          r.uploading) ||
                        (o.setState({ attachment: null }), p.replace(f.pathname)),
                      b(
                        ws(
                          { senderId: m, cardUrl: c, conversationId: l, text: t, tweetAttachment: g },
                          e && e.quickReply && { quickReply: e.quickReply },
                        ),
                      )
                        .then(function () {
                          !e.quickReply &&
                            O &&
                            (o._currentComposer && o._currentComposer.clear(),
                            o._currentComposer && o._currentComposer.focus()),
                            o.setState({ isSending: !1 })
                        })
                        .catch(function (e) {
                          if ((o.setState({ isSending: !1 }), !Object(Cs.d)(e) || e.code !== Wc.b.CANCELED))
                            if (Object(Cs.d)(e)) {
                              var t = Object(Cs.b)(e, Ts)
                              t && i(t)
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
                        v(ws(ws({}, y), {}, { element: R, action: 'send_dm' }), {
                          conversation_id: e,
                          conversation_participant_count: h ? h.length + 1 : 0,
                          conversation_type: ft.g.GROUP,
                        }),
                          o.setState({ attachment: null, isSending: !1 }),
                          p.replace('/messages/'.concat(e))
                      }, u(zc.b)),
                      Promise.resolve())
                )
              }),
              v()(s()(o), '_handlePopOutConvo', function () {
                var e = o.props,
                  t = e.conversationId
                ;(0, e.popOutConversation)(t)
              }),
              v()(s()(o), '_handleInfoClick', function () {
                var e = o.props,
                  t = e.conversationId,
                  n = e.history
                t && n.push('/messages/'.concat(t, '/info'))
              }),
              v()(s()(o), '_handleComposeClick', function () {
                o._currentComposer && o._currentComposer.focus()
              }),
              v()(s()(o), '_handleSaveDraftText', function () {
                var e = o.props,
                  t = e.conversationId,
                  n = e.saveText
                t && o._currentComposer && n(t, o._currentComposer.value())
              }),
              (o.state = {
                attachment: js(e),
                composerHeight: re.a.theme.componentDimensions.appBarHeight,
                isSending: !1,
              }),
              o
            )
          }
          return (
            i()(n, [
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
                  Kc()(function () {
                    return Object(Hc.a)().then(function (t) {
                      var n = t.KEYBOARD,
                        r = t.MOUSE,
                        a = t.detectedType,
                        o = e.props.quickReplyOptions
                      ;(a(n) || a(r)) && !o && e._currentComposer && e._currentComposer.focus()
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
                    o = r.conversationId,
                    i = r.fetchStatus,
                    c = r.isUploading,
                    s = r.quickReplyOptions,
                    l = r.updateConversationReadState
                  o !== e.conversationId
                    ? (o && this._fetchConversation(o),
                      this._focusComposerIfNeeded(),
                      this._livePipelineSubscription && this._livePipelineSubscription.teardown(),
                      this._initializeLivePipeline())
                    : ((null == a ? void 0 : a.sort_event_id) !==
                        (null === (n = e.conversation) || void 0 === n ? void 0 : n.sort_event_id) && l(o),
                      c || !e.isUploading || s || (this._currentComposer && this._currentComposer.focus()),
                      e.fetchStatus === R.a.LOADED && i !== R.a.LOADED && o && this._fetchConversation(o))
                },
              },
              {
                key: 'UNSAFE_componentWillReceiveProps',
                value: function (e) {
                  var t = this.props.media,
                    n = e.media
                  Object(ye.a)(t, n) || this.setState({ attachment: js(e) })
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props.fetchStatus
                  return y.createElement(
                    Pc.a,
                    { style: [Ls.root, tc.b.isKaiOS() && Ls.kaiOSFix] },
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
                    o = e.dataSaverMode,
                    i = e.draftText,
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
                    _ = this.props.prefillText || i
                  return null != r && r.read_only
                    ? null
                    : y.createElement(Fc.a, {
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
                        onTyping: o ? this._throttleSaveDraftText : this._handleTyping,
                        prefillText: 'string' == typeof _ ? _ : void 0,
                        primaryActionIcon: ks,
                        primaryActionLabel: Ps,
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
                    o = t.location,
                    i = o.query.text,
                    c = Array.isArray(o.query.welcome_message_id)
                      ? o.query.welcome_message_id[0]
                      : o.query.welcome_message_id,
                    s = !!this.state.attachment || !(!i || c),
                    l = !r || !r.type || r.type === _.CONVERSATION_TYPE.GROUP,
                    u = r && r.participants && Object.keys(r.participants).length <= 1
                  return s || l || u ? Promise.resolve() : n(e, c).catch(a({ showToast: !1 }))
                },
              },
            ]),
            n
          )
        })(y.PureComponent)
      v()(Ds, 'contextType', $.a), v()(Ds, 'defaultProps', { isNewGroupConversation: !1, typeaheadWrapper: Vc.a })
      var Ls = re.a.create(function (e) {
        return {
          root: { flexGrow: 1 },
          activity: { flexBasis: e.spacesPx.space1, flexGrow: 1, height: '100%' },
          kaiOSFix: { paddingBottom: e.spaces.space20 },
          dragDrop: { flexGrow: 1 },
          scrollView: { flexGrow: 1 },
          infoButton: { marginRight: e.spaces.space4 },
        }
      })
      t.a = Object(cs.c)()(F(Ds))
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
        o = n('Y9Ll'),
        i = n.n(o),
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
          for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
          return (
            (e = t.call.apply(t, [this].concat(o))),
            v()(s()(e), '_handleAddMediaFiles', function (t) {
              var n = e.props,
                r = n.addMedia,
                a = n.location,
                o = n.onChange,
                i = n.onFailure,
                c = n.processMultipleMedia,
                s = e._getAcceptedFileInputs(),
                l = Array.from(t).find(function (e) {
                  return s.includes(e.type)
                })
              l &&
                r([l], { location: a }).then(function (e) {
                  o &&
                    o(
                      e.map(function (e) {
                        return e.id
                      }),
                    ),
                    c(e, { onFailure: i })
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
          i()(n, [
            {
              key: 'render',
              value: function () {
                var e = this.props,
                  t = e.acceptGifs,
                  n = e.acceptVideo,
                  r = e.accessibilityLabel,
                  a = e.aspectRatio,
                  o = e.borderRadius,
                  i = e.currentContent,
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
                  borderRadius: o,
                  currentContent: i,
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
      var R = _(C)
      t.default = R
    },
    PnKw: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return x
      })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        i = n.n(o),
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
        R = 'inlinePrompt-secondaryAction',
        w = 'inlinePrompt-centeredImageContainer',
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
      var x = (function (e) {
        u()(n, e)
        var t = k(n)
        function n() {
          var e
          a()(this, n)
          for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
          return (
            (e = t.call.apply(t, [this].concat(o))),
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
                    { style: P.centeredImage, testID: w },
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
                      style: P.flexGrow,
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
                o = t.style,
                i = t.testID,
                c = e.props.secondaryAction,
                s = n.link,
                l = n.onClick,
                u = n.text
              return y.createElement(
                I.a,
                { style: [e.styles.actionContainer, o, { justifyContent: 'flex-start' }], testID: i },
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
          i()(n, [
            {
              key: 'render',
              value: function () {
                var e = this.props,
                  t = e.image,
                  n = e.primaryAction,
                  r = e.rightControl,
                  a = e.secondaryAction,
                  o = e.shouldRenderBorder
                return y.createElement(
                  I.a,
                  { style: o ? [T.root, T.rootMargin] : P.root },
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
                            testID: R,
                          })
                        : null,
                    ),
                  ),
                  r ? y.createElement(I.a, { style: P.rightControl }, r) : null,
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
      v()(x, 'defaultProps', { shouldRenderBorder: !1 })
      var P = O.a.create(function (e) {
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
        o = n.n(a),
        i = n('MWbm'),
        c = n('Qwev'),
        s = n('rHpw'),
        l = o.a.ffde2fdb,
        u = s.a.create(function (e) {
          return { spinner: { alignItems: 'center', marginVertical: '30px' } }
        })
      t.a = function () {
        return r.createElement(i.a, { style: u.spinner }, r.createElement(c.a, { accessibilityLabel: l }))
      }
    },
    'S+H3': function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        o = n('ERkP'),
        i = n('Lsrn'),
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
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [i.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          o.createElement(
            'g',
            null,
            o.createElement('path', {
              d: 'M15.09 9.07c-.25-1.83-1.43-2.98-3.1-2.98-1.66 0-2.85 1.15-3.09 2.98-.18 1.32 0 2.26.55 2.89.66.76 1.66.86 2.54.86.89 0 1.88-.1 2.54-.86.56-.63.74-1.57.56-2.89zm-1.68 1.9c-.21.24-.65.35-1.42.35-.76 0-1.2-.11-1.41-.35-.24-.28-.31-.86-.2-1.7.1-.76.47-1.68 1.61-1.68.58 0 .95.23 1.2.56.24.32.36.74.41 1.12.12.84.05 1.42-.19 1.7zm2.67 4.09c-.99-.99-2.4-1.52-4.07-1.52h-.03c-1.62 0-3.06.55-4.06 1.55-.87.87-1.34 2.02-1.34 3.25 0 .79.64 1.44 1.44 1.44h7.95c.79 0 1.44-.65 1.44-1.44 0-1.26-.47-2.43-1.33-3.28zm-7.44 3.276c-.318.002-.562-.288-.502-.6.116-.595.406-1.14.842-1.576.72-.72 1.78-1.12 3.01-1.12H12c1.27 0 2.32.37 3.02 1.08.432.432.715.962.83 1.564.06.308-.178.598-.492.6l-6.72.052zM21.75 6.97c-.22-1.7-1.32-2.75-2.86-2.75-1.53 0-2.64 1.05-2.87 2.75-.16 1.2.02 2.07.52 2.65.62.71 1.53.81 2.35.81.81 0 1.73-.1 2.34-.8.39-.45.59-1.07.59-1.85 0-.22-.02-.47-.07-.81zm-4.22.2c.13-.95.59-1.43 1.36-1.43.43 0 .77.15 1 .46.23.29.32.69.35.97.03.22.05.43.05.61 0 .4-.07.69-.21.84-.16.2-.54.28-1.19.28-.66 0-1.04-.08-1.2-.28-.2-.22-.25-.73-.16-1.45zm6.3 8.37c0 .74-.62 1.34-1.37 1.34h-3.75c-.41 0-.76-.34-.76-.76 0-.43.34-.76.76-.76h3.24c.1 0 .2-.05.26-.13.07-.09.1-.2.07-.3-.12-.53-.37-.99-.74-1.36-.61-.62-1.53-.94-2.64-.94-.73 0-1.39.15-1.93.44l-.5.32c-.36.21-.83.1-1.04-.25-.23-.36-.12-.82.24-1.05l.54-.34c.78-.42 1.71-.64 2.66-.64h.03c1.52 0 2.81.47 3.72 1.38.79.8 1.22 1.88 1.21 3.05zM2.18 7.78c0 .78.2 1.4.59 1.85.61.7 1.53.8 2.34.8.82 0 1.73-.1 2.35-.81.5-.58.68-1.45.52-2.65-.23-1.7-1.34-2.75-2.87-2.75-1.54 0-2.64 1.05-2.86 2.75-.05.34-.07.59-.07.81zm4.13.84c-.16.2-.54.28-1.2.28-.65 0-1.03-.08-1.19-.28-.14-.15-.21-.44-.21-.84 0-.18.02-.39.05-.61.03-.28.12-.68.35-.97.23-.31.57-.46 1-.46.77 0 1.23.48 1.36 1.43.09.72.04 1.23-.16 1.45zM.17 15.54c0 .74.62 1.34 1.37 1.34h3.75c.41 0 .76-.34.76-.76 0-.43-.34-.76-.76-.76H2.05c-.1 0-.2-.05-.26-.13-.07-.09-.1-.2-.07-.3.12-.53.37-.99.74-1.36.61-.62 1.53-.94 2.64-.94.73 0 1.39.15 1.93.44l.5.32c.36.21.83.1 1.04-.25.23-.36.12-.82-.24-1.05l-.54-.34c-.78-.42-1.71-.64-2.66-.64H5.1c-1.52 0-2.81.47-3.72 1.38-.79.8-1.22 1.88-1.21 3.05z',
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
        o = n('ERkP'),
        i = n('Lsrn'),
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
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [i.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          o.createElement(
            'g',
            null,
            o.createElement('path', {
              d: 'M19.708 22H4.292C3.028 22 2 20.972 2 19.708V7.375C2 6.11 3.028 5.083 4.292 5.083h2.146C7.633 3.17 9.722 2 12 2c2.277 0 4.367 1.17 5.562 3.083h2.146C20.972 5.083 22 6.11 22 7.375v12.333C22 20.972 20.972 22 19.708 22zM4.292 6.583c-.437 0-.792.355-.792.792v12.333c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V7.375c0-.437-.355-.792-.792-.792h-2.45c-.317.05-.632-.095-.782-.382-.88-1.665-2.594-2.7-4.476-2.7-1.883 0-3.598 1.035-4.476 2.702-.16.302-.502.46-.833.38H4.293z',
            }),
            o.createElement('path', {
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
        o = n('ERkP'),
        i = n('5UID'),
        c = n('3GUV'),
        s = n('iBK2'),
        l = o.createElement(c.a, null),
        u = function (e) {
          var t = e.accessibilityTitle,
            n = a()(e, ['accessibilityTitle']),
            r = o.createElement(s.b, n)
          return t ? o.createElement(i.a, { title: t }, r) : r
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
        o = n('Y9Ll'),
        i = n.n(o),
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
        R = n('/yvb'),
        w = n('7N4s'),
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
      function x(e) {
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
          var t = P(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
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
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.backgroundColor,
                    r = t.children,
                    a = t.footerButtons,
                    o = t.forceModalStyle,
                    i = t.hideButtons,
                    c = t.mediaItem,
                    s = t.mediaUrl,
                    l = t.overlayFooter,
                    u = t.topRightButton,
                    d = this.context.isModal,
                    p = x({ backgroundColor: n.rgba }, b.a),
                    f = x({ backgroundColor: n.rgb }, b.a),
                    h = [M.root, d ? p : f, { position: d || o ? 'relative' : 'fixed' }]
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
                              pointerEvents: i ? 'none' : void 0,
                              style: [M.footerButtons, l && p, l && M.footerButtonsAbsolute, i && M.fadeOut],
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
                        pointerEvents: i ? 'none' : void 0,
                        style: [M.buttonWrapper, M.buttonWrapperLeft, b.a, i && M.fadeOut],
                      },
                      function (t) {
                        return y.createElement(R.a, {
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
                            pointerEvents: i ? 'none' : void 0,
                            style: [M.buttonWrapper, M.buttonWrapperRight, b.a, i && M.fadeOut],
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
      v()(A, 'contextType', w.b), v()(A, 'defaultProps', { hideButtons: !1 })
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
        o = n('XnpN'),
        i = n('AQ79'),
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
        return e === i.c.SECONDARY ? c.c.REQUESTS : e === i.c.TERTIARY ? c.c.LOW_QUALITY : c.c.PRIMARY
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
        var n = Object(o.a)(e, t).map(function (e) {
            return e.user
          }),
          r = n && n[0]
        return { name: (r && r.name) || '', screenName: (r && r.screen_name) || '', idStr: (r && r.id_str) || '' }
      }
      var y = function (e) {
          return e === i.c.TERTIARY
            ? 'low_quality_timeline'
            : e === i.c.SECONDARY
            ? 'requests_timeline'
            : 'inbox_timeline'
        },
        b = function (e) {
          return e === i.c.TERTIARY
            ? '/messages/requests/additional'
            : e === i.c.SECONDARY
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
        return o
      })
      var r = n('ERkP'),
        a = n('fs1G'),
        o = r.createContext({ handleNextSlide: a.a })
    },
    XG7v: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'Mode', function () {
          return Me
        }),
        n.d(t, 'DMComposeScreen', function () {
          return je
        })
      n('OZaJ'), n('+KXO'), n('1t7P'), n('daRM'), n('FtHn'), n('hCOa'), n('jQ/y'), n('aLgo')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        i = n.n(o),
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
        R = n('3XMw'),
        w = n.n(R),
        I = n('oQhu'),
        k = 'nextButton',
        x = n('aITJ'),
        P = n('2dXj'),
        T = n('MWbm'),
        A = n('w9LO'),
        M = n('/yvb'),
        j = n('htQn'),
        D = n('t62R'),
        L = n('7N4s'),
        B = n('rHpw'),
        F = n('v6aA'),
        N = n('zh9S'),
        H = n('MMRb'),
        U = n('CDB5'),
        W = n('1YZw'),
        V = n('hqKg'),
        z = n('tn7R'),
        G = n('Hw0q'),
        K = n('RqPI'),
        q = n('X/yg'),
        Y = n('G6rE'),
        X = n('0KEI'),
        Q = n('oEGd')
      function Z(e, t) {
        var n
        if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (!e) return
              if ('string' == typeof e) return J(e, t)
              var n = Object.prototype.toString.call(e).slice(8, -1)
              'Object' === n && e.constructor && (n = e.constructor.name)
              if ('Map' === n || 'Set' === n) return Array.from(e)
              if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return J(e, t)
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
        var o,
          i = !0,
          c = !1
        return {
          s: function () {
            n = e[Symbol.iterator]()
          },
          n: function () {
            var e = n.next()
            return (i = e.done), e
          },
          e: function (e) {
            ;(c = !0), (o = e)
          },
          f: function () {
            try {
              i || null == n.return || n.return()
            } finally {
              if (c) throw o
            }
          },
        }
      }
      function J(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
        return r
      }
      var $ = 'text',
        ee = Object(G.b)($),
        te = Object(G.b)('recipient_id'),
        ne = Object(V.createSelector)(H.selectConversations, function (e) {
          var t,
            n = [],
            r = Z(Object(z.a)(e))
          try {
            for (r.s(); !(t = r.n()).done; ) {
              var a = t.value
              !a.isDeleted && a.data && n.push(a.data)
            }
          } catch (o) {
            r.e(o)
          } finally {
            r.f()
          }
          return n
        }),
        re = Object(V.createSelector)(ne, ee, K.p, q.n, Y.e.selectAll, te, function (e, t, n, r, a, o) {
          if (!n) throw new Error('logged-in user not found')
          return { conversations: e, initialMessage: t, perspective: n, recipientId: o, tweetAttachment: r, users: a }
        }),
        ae = {
          addToast: W.b,
          createLocalApiErrorHandler: Object(X.createLocalApiErrorHandlerWithContextFactory)('DIRECT_MESSAGES_COMPOSE'),
          fetchConversationFromParticipants: H.fetchConversationFromParticipants,
          fetchInboxIfNeeded: H.fetchInboxIfNeeded,
          popOutConversation: H.popOutConversation,
          scribeAction: N.c,
          sendMessage: U.m,
        },
        oe = Object(Q.g)(re, ae),
        ie = n('7JQg'),
        ce = n('UgB4'),
        se = n('S+H3'),
        le = n('883S'),
        ue = n('GZwR')
      function de(e, t) {
        var n
        if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (!e) return
              if ('string' == typeof e) return pe(e, t)
              var n = Object.prototype.toString.call(e).slice(8, -1)
              'Object' === n && e.constructor && (n = e.constructor.name)
              if ('Map' === n || 'Set' === n) return Array.from(e)
              if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return pe(e, t)
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
        var o,
          i = !0,
          c = !1
        return {
          s: function () {
            n = e[Symbol.iterator]()
          },
          n: function () {
            var e = n.next()
            return (i = e.done), e
          },
          e: function (e) {
            ;(c = !0), (o = e)
          },
          f: function () {
            try {
              i || null == n.return || n.return()
            } finally {
              if (c) throw o
            }
          },
        }
      }
      function pe(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
        return r
      }
      function fe(e, t) {
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
      function he(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? fe(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : fe(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function me(e) {
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
      var ve = { page: 'messages', section: 'compose', component: 'dm' },
        ye = w.a.de4669e2,
        be = w.a.ff599111,
        ge = w.a.c6026009,
        _e = w.a.f61c4bbf,
        Ee = w.a.cdcebd22,
        Oe = w.a.a7013cb6,
        Se = w.a.f277e949,
        Ce = w.a.a2ccb2e7,
        Re = w.a.a6add339,
        we = w.a.aca6eb1b,
        Ie = w.a.e3275464,
        ke = w.a.c1df579e,
        xe = w.a.e1bde73e,
        Pe = y.createElement(ce.a, null),
        Te = Object.freeze({ BACK: 'back', CLOSE: 'close' }),
        Ae = Object.freeze({
          COMPOSE_ROUTE: '/messages/compose',
          GROUP_COMPOSE_ROUTE: '/messages/compose/group',
          MESSAGES_ROUTE: '/messages',
        }),
        Me = Object.freeze({ COMPOSE_MESSAGE: 0, CREATE_GROUP: 1, SHARE_TWEET: 2, SHARE_TWEET_INDIVIDUALLY: 3 }),
        je = (function (e) {
          u()(n, e)
          var t = me(n)
          function n(e, r) {
            var o
            return (
              a()(this, n),
              (o = t.call(this, e, r)),
              v()(s()(o), '_composer', y.createRef()),
              v()(s()(o), '_determineMode', function (e) {
                var t,
                  n,
                  r = e.tweetAttachment || !!e.initialMessage
                return null !== (t = o.props.location) &&
                  void 0 !== t &&
                  null !== (n = t.state) &&
                  void 0 !== n &&
                  n.isNewGroup
                  ? Me.CREATE_GROUP
                  : r
                  ? o.context.featureSwitches.isTrue('dm_share_sheet_send_individually_enabled')
                    ? Me.SHARE_TWEET_INDIVIDUALLY
                    : Me.SHARE_TWEET
                  : Me.COMPOSE_MESSAGE
              }),
              v()(s()(o), '_isSharingMode', function (e) {
                return e === Me.SHARE_TWEET || e === Me.SHARE_TWEET_INDIVIDUALLY
              }),
              v()(s()(o), '_renderScreen', function (e) {
                var t,
                  n,
                  r = e.isModal,
                  a = o.props.history,
                  i = o.state,
                  c = i.mode,
                  s = i.participants
                switch (c) {
                  case Me.COMPOSE_MESSAGE:
                    t = Ee
                    break
                  case Me.CREATE_GROUP:
                    ;(t = be), (n = ge)
                    break
                  case Me.SHARE_TWEET:
                    t = _e
                    break
                  case Me.SHARE_TWEET_INDIVIDUALLY:
                    t = s.length > 1 ? Oe : _e
                    break
                  default:
                    t = ''
                }
                var l = o._isSharingMode(c)
                return y.createElement(
                  E.b,
                  {
                    backButtonType: c === Me.CREATE_GROUP ? Te.BACK : Te.CLOSE,
                    backLocation: c === Me.CREATE_GROUP ? Ae.COMPOSE_ROUTE : Ae.MESSAGES_ROUTE,
                    containerStyle: Le.fill,
                    documentTitle: t,
                    history: a,
                    onBackClick: c === Me.CREATE_GROUP ? o._handleBackClick : o._handleClose,
                    rightControl: l ? void 0 : o._renderAppBarRightControl(),
                    subtitle: n,
                    title: t,
                    withBottomBorder: !1,
                  },
                  y.createElement(A.a.Context.Consumer, null, o._setDisableFocusingPreviousActiveElement),
                  y.createElement(
                    b.a,
                    { style: Le.fill },
                    o._renderUserPicker(),
                    l && !r ? y.createElement(T.a, { style: Le.placeholder }) : null,
                    o._renderComposer(r),
                  ),
                )
              }),
              v()(s()(o), '_setDisableFocusingPreviousActiveElement', function (e) {
                var t = e.disableFocusingPreviousActiveElement
                o._disableFocusingPreviousActiveElement = t
              }),
              v()(s()(o), '_renderAppBarRightControl', function () {
                var e = o.props.tweetAttachment ? Ie : ke
                return y.createElement(
                  T.a,
                  { style: Le.rightColumn },
                  y.createElement(
                    M.a,
                    {
                      disabled: 0 === o.state.participants.length,
                      onPress: o._handleConversationRouting,
                      size: 'small',
                      style: Le.button,
                      testID: k,
                      type: 'primaryFilled',
                    },
                    e,
                  ),
                )
              }),
              v()(s()(o), '_renderComposer', function (e) {
                var t = o.props,
                  n = t.history,
                  r = t.initialMessage,
                  a = t.scribeNamespace,
                  i = t.tweetAttachment,
                  c = o.state,
                  s = c.isSending,
                  l = c.participants,
                  u = o._isSharingMode(o.state.mode)
                return u
                  ? y.createElement(g.a, {
                      canSendEmptyMessage: !!i,
                      conversationId: 'DMComposeScreen',
                      disabled: 0 === l.length || s,
                      history: n,
                      isSending: s,
                      isShareViaDM: !!u,
                      isUploading: !1,
                      mediaUploadProgress: 0,
                      onPrimaryAction: o._handleShareTweet,
                      placeholderText: ye,
                      prefillText: r,
                      primaryActionIcon: Pe,
                      primaryActionLabel: Ie,
                      ref: o._composer,
                      scribeNamespace: a,
                      style: [Le.shadow, !e && Le.fixToBottom],
                      withEmojiPicker: !1,
                      withGifPicker: !1,
                      withMediaPicker: !1,
                    })
                  : null
              }),
              v()(s()(o), '_renderUserPicker', function () {
                var e = o.props,
                  t = e.conversations,
                  n = e.perspective,
                  r = o.state,
                  a = r.mode,
                  i = r.participants,
                  c = r.query
                return y.createElement(P.d, {
                  getItemDisabledMessage: o._getItemDisabledMessage,
                  getItemIsDisabled: o._getItemIsDisabled(o._separateShareLimit),
                  injections: o._getInjections(t, n, c),
                  onQueryChange: o._handleQueryChange,
                  onRemove: o._handleRemoveParticipant,
                  onSelect: o._getHandleSuggestionSelected(),
                  renderHeader: o._renderHeader(),
                  selectedUsers: i,
                  shouldAutoFocus: !o._isSharingMode(a) || !x.b.isIOS(),
                  source: ue.d.ComposeMessage,
                  withCompactPills: !0,
                })
              }),
              v()(s()(o), '_handleBackClick', function () {
                o.props.history.goBack()
              }),
              v()(s()(o), '_handleClose', function () {
                o.props.history.goBackThroughModals()
              }),
              v()(s()(o), '_handleCreateGroup', function () {
                ;(0, o.props.scribeAction)(he(he({}, ve), {}, { element: 'create_group', action: 'click' })),
                  o.setState({ mode: Me.CREATE_GROUP })
              }),
              v()(s()(o), '_renderHeader', function () {
                return function () {
                  var e = o.state,
                    t = e.mode,
                    n = e.participants,
                    r = e.query,
                    a = o.props.tweetAttachment
                  return n.length || r || (t !== Me.SHARE_TWEET_INDIVIDUALLY && t !== Me.COMPOSE_MESSAGE)
                    ? null
                    : y.createElement(
                        j.a,
                        {
                          link: {
                            pathname: Ae.GROUP_COMPOSE_ROUTE,
                            state: he(he({}, o.state), {}, { isNewGroup: !0, participants: n, tweetAttachment: a }),
                            anchorless: !0,
                          },
                          onPress: o._handleCreateGroup,
                          style: Le.container,
                        },
                        y.createElement(M.a, {
                          accessibilityLabel: be,
                          borderColor: 'blue500',
                          color: 'blue500',
                          hoverLabel: { label: 'Group' },
                          icon: y.createElement(se.a, { style: Le.searchIcon }),
                          onPress: o._handleCreateGroup,
                          size: 'small',
                          style: Le.createGroupButton,
                          type: 'brandOutlined',
                        }),
                        y.createElement(D.b, { color: 'link', numberOfLines: 1, weight: 'bold' }, be),
                      )
                }
              }),
              v()(s()(o), '_isShareLimitMet', function (e) {
                var t = o.state,
                  n = t.mode,
                  r = t.participants,
                  a = n === Me.SHARE_TWEET_INDIVIDUALLY && o._separateShareLimit && r.length >= o._separateShareLimit,
                  i = r.filter(function (t) {
                    return t.id === e.id
                  }).length
                return !(!a || i)
              }),
              v()(s()(o), '_isGroupOptionDisabled', function (e) {
                var t = o.state,
                  n = t.mode,
                  r = t.participants
                if (
                  !o._isSelectedGroup(e) &&
                  n !== Me.SHARE_TWEET_INDIVIDUALLY &&
                  (o._hasAtLeastOneGroupSelected() ||
                    (e.type === ue.b.DMConversation && (r.length > 0 || n === Me.CREATE_GROUP)))
                )
                  return !0
              }),
              v()(s()(o), '_canDMUser', function (e) {
                if (e.type === ue.b.User) return !(e.data.can_dm || e.data.is_dm_able)
              }),
              v()(s()(o), '_hasAtLeastOneGroupSelected', function () {
                var e,
                  t = de(o.state.participants)
                try {
                  for (t.s(); !(e = t.n()).done; ) {
                    if (e.value.type === ue.b.DMConversation) return !0
                  }
                } catch (n) {
                  t.e(n)
                } finally {
                  t.f()
                }
                return !1
              }),
              v()(s()(o), '_isSelectedGroup', function (e) {
                var t = o.state.participants
                if (o._hasAtLeastOneGroupSelected() && t[0].id === e.id) return !0
              }),
              v()(s()(o), '_getItemIsDisabled', function (e) {
                return function (e) {
                  var t = o._isShareLimitMet(e),
                    n = o._isGroupOptionDisabled(e),
                    r = o._canDMUser(e)
                  return n || t || r
                }
              }),
              v()(s()(o), '_getItemDisabledMessage', function (e) {
                return e.type === ue.b.User ? xe({ screenName: e.data.screen_name }) : void 0
              }),
              v()(
                s()(o),
                '_getInjections',
                Object(I.a)(function (e, t, n) {
                  return Object(O.a)(
                    n,
                    e.map(function (e) {
                      return Object(C.b)(e, void 0, o.props.users)
                    }),
                    t,
                  ).slice(0, 12)
                }),
              ),
              v()(s()(o), '_handleQueryChange', function (e) {
                o.setState({ query: e })
              }),
              v()(s()(o), '_getHandleSuggestionSelected', function () {
                return function (e) {
                  var t = o.props.perspective,
                    n = o.state,
                    r = n.mode,
                    a = n.participants
                  if (e.type === ue.b.User || e.type === ue.b.DMConversation)
                    if (o._hasAtLeastOneGroupSelected() && r !== Me.SHARE_TWEET_INDIVIDUALLY)
                      e.id === a[0].id && o._handleRemoveParticipant(e)
                    else if (e.type === ue.b.DMConversation)
                      if (r === Me.SHARE_TWEET || r === Me.SHARE_TWEET_INDIVIDUALLY)
                        o._createConversationObjectForSelectionPill(e, r === Me.SHARE_TWEET_INDIVIDUALLY)
                      else {
                        var i = De(e, t)
                        o._goToConversation(i)
                      }
                    else o._handleParticipantToggle(e)
                }
              }),
              v()(s()(o), '_createConversationObjectForSelectionPill', function (e, t) {
                var n = o.props,
                  r = n.conversations,
                  a = n.perspective,
                  i = n.users,
                  c = o.state.participants,
                  s = r.find(function (t) {
                    return e.id === t.conversation_id
                  })
                if (s) {
                  var l = Object(C.b)(s, void 0, i),
                    u = Object(S.a)(l, a)
                  ;(e.data = he(he({}, l), {}, { conversationId: e.data.conversationId, name: u || '' })),
                    t
                      ? c.find(function (t) {
                          return t.id === e.id
                        })
                        ? o._handleRemoveParticipant(e)
                        : o.setState({ participants: c.concat(e) })
                      : o.setState({ participants: [e] })
                }
              }),
              v()(s()(o), '_handleParticipantToggle', function (e) {
                var t = o.state.participants
                if (
                  t.find(function (t) {
                    return t.id === e.id
                  })
                )
                  o._handleRemoveParticipant(e)
                else {
                  var n = t.concat(e)
                  o.setState({ participants: n })
                }
              }),
              v()(s()(o), '_handleRemoveParticipant', function (e) {
                var t = o.state.participants.filter(function (t) {
                  return t.id !== e.id
                })
                o.setState({ participants: t })
              }),
              v()(s()(o), '_handleConversationRouting', function () {
                o.props.tweetAttachment ? o._handleShareTweet() : o._handleCreateConversation()
              }),
              v()(s()(o), '_getExistingGroupConversationFromCache', function (e) {
                return o.props.conversations.find(function (t) {
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
              v()(s()(o), '_getExistingGroupConversationFromApi', function (e) {
                var t = e
                  .map(function (e) {
                    return e.id
                  })
                  .join(',')
                return o.props.fetchConversationFromParticipants(t)
              }),
              v()(s()(o), '_getExistingGroupConversation', function (e) {
                if (e.length <= 1) return Promise.resolve()
                var t = o._getExistingGroupConversationFromCache(e)
                return t ? Promise.resolve(t) : o._getExistingGroupConversationFromApi(e)
              }),
              v()(s()(o), '_handleCreateConversation', function () {
                var e = o.props,
                  t = e.history,
                  n = e.initialMessage,
                  r = e.perspective,
                  a = e.tweetAttachment,
                  i = o.state.participants
                if (1 === i.length) {
                  var c = De(i[0], r)
                  o._goToConversation(c)
                } else {
                  var s = o._getExistingGroupConversation(i)
                  o._disableFocusingPreviousActiveElement && o._disableFocusingPreviousActiveElement(),
                    s
                      .then(function (e) {
                        if (!e) throw new Error('No conversation found')
                        o._goToConversation(e.conversation_id)
                      })
                      .catch(function () {
                        t.replace({
                          pathname: '/messages/group',
                          query: v()({}, $, n),
                          state: { participants: i, tweetAttachment: a, isNewGroupConversation: !0 },
                        })
                      }),
                    o._disableFocusingPreviousActiveElement && o._disableFocusingPreviousActiveElement()
                }
              }),
              v()(s()(o), '_handleShareTweet', function (e, t) {
                var n = o.props,
                  r = n.createLocalApiErrorHandler,
                  a = n.perspective,
                  i = n.tweetAttachment,
                  c = o.state.participants,
                  s = 1 === c.length,
                  l = c
                s && (l = c[0])
                var u = { senderId: a, tweetAttachment: i, text: t },
                  d = De(l, a)
                return d
                  ? o._sendMessage(d, c, u)
                  : o
                      ._getExistingGroupConversation(c)
                      .catch(r(le.a))
                      .then(function (e) {
                        var t = e ? e.conversation_id : null
                        return o._sendMessage(t, c, u)
                      })
              }),
              v()(s()(o), '_sendMessage', function (e, t, n) {
                var r = o.props,
                  a = r.createLocalApiErrorHandler,
                  i = r.history,
                  c = r.scribeAction,
                  s = r.sendMessage,
                  l = o.state.mode,
                  u = he({ conversationId: void 0, recipients: void 0 }, n)
                if (!e && Array.isArray(t)) {
                  var d = t
                    .map(function (e) {
                      if (e.type === ue.b.User) return e.data.id_str
                    })
                    .filter(Boolean)
                  u.recipients = d
                } else u.conversationId = e
                var p = a(le.b),
                  f = a(le.c),
                  h = he(he({}, ve), {}, { action: 'send_tweet_dm' }),
                  m = he(he({}, ve), {}, { action: 'share_error' })
                if (
                  (o.setState({ isSending: !0 }),
                  o._isSharingMode(l) &&
                    null != t &&
                    t.length &&
                    t.forEach(function () {
                      c(h)
                    }),
                  l === Me.SHARE_TWEET_INDIVIDUALLY && (null == t ? void 0 : t.length) > 1)
                ) {
                  var v =
                    null == t
                      ? void 0
                      : t.map(function (e) {
                          var t = De(e, o.props.perspective)
                          return he(he({}, u), {}, { conversationId: t, recipients: void 0 })
                        })
                  return Promise.all(
                    v.map(function (e) {
                      return s(e)
                    }),
                  )
                    .then(function () {
                      o._displayDMMessageSentSuccessToast(), o.setState({ isSending: !1 }), i.goBack()
                    })
                    .catch(function (e) {
                      c(m), o.setState({ isSending: !1 }), f(e)
                    })
                }
                return s(u).then(
                  function (e) {
                    o._displayDMMessageSentSuccessToast(e), o.setState({ isSending: !1 }), i.goBackThroughModals()
                  },
                  function (e) {
                    o._isSharingMode(l) && c(m), o.setState({ isSending: !1 }), p(e)
                  },
                )
              }),
              v()(s()(o), '_goToConversation', function (e) {
                var t,
                  n,
                  r = o.props,
                  a = r.history,
                  i = r.initialMessage,
                  c = r.popOutConversation,
                  s = r.tweetAttachment
                ;(o._disableFocusingPreviousActiveElement && o._disableFocusingPreviousActiveElement(), e) &&
                  ('drawer' ===
                  (null === (t = a.location) || void 0 === t || null === (n = t.state) || void 0 === n
                    ? void 0
                    : n.source)
                    ? (c(e), a.goBack())
                    : a.replace({
                        pathname: '/messages/'.concat(e),
                        query: v()({}, $, i),
                        state: { tweetAttachment: s },
                      }))
              }),
              v()(s()(o), '_displayDMMessageSentSuccessToast', function (e) {
                ;(0,
                o.props
                  .addToast)({ text: e ? (o.state.mode === Me.CREATE_GROUP ? Re : Ce) : we, action: { link: e ? '/messages/'.concat(e) : '/messages', label: Se } })
              }),
              (o._separateShareLimit = r.featureSwitches.getNumberValue('dm_share_sheet_send_individually_max_count')),
              (o.state = { mode: o._determineMode(o.props), participants: [], query: '', isSending: !1 }),
              o
            )
          }
          return (
            i()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.createLocalApiErrorHandler,
                    n = e.history,
                    r = e.initialMessage,
                    a = e.location.query,
                    o = e.perspective,
                    i = e.recipientId
                  if (i) {
                    var c = Object(_.a)(i, o)
                    n.replace({ pathname: '/messages/'.concat(c), query: he(he({}, a), {}, v()({}, $, r)) })
                  } else this.props.fetchInboxIfNeeded().catch(t())
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e, t) {
                  var n = this.state.participants
                  ;(this.state.mode === Me.SHARE_TWEET || this.state.mode === Me.SHARE_TWEET_INDIVIDUALLY) &&
                    t.participants.length < n.length &&
                    this._composer.current &&
                    this._composer.current.focus()
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
      v()(je, 'contextType', F.a)
      var De = function (e, t) {
          return Array.isArray(e) || e.type !== ue.b.DMConversation
            ? Array.isArray(e) || e.type !== ue.b.User
              ? null
              : Object(_.a)(e.data.id_str, t)
            : e.data.conversationId
        },
        Le = B.a.create(function (e) {
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
              paddingBottom: B.a.iPhoneOffsetBottom,
            },
          }
        })
      t.default = Object(ie.c)(ve)(oe(je))
    },
    XnpN: function (e, t, n) {
      'use strict'
      var r = n('RhWx'),
        a = n.n(r),
        o = n('ddV6'),
        i = n.n(o),
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
          o = e.type,
          s = Object(f.a)(r),
          l = Object(h.a)(s, function (e) {
            return e.user.id_str === t
          }),
          u = i()(l, 2),
          d = u[0],
          m = u[1]
        return m.length ? (o === c.a.GROUP && 1 === m.length ? [].concat(a()(d), a()(m)) : n ? m.sort(p(n)) : m) : d
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
        o = n('rxPX'),
        i = n('RqPI'),
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
        d = Object(o.a)()
          .propsFromState(function () {
            return { conversationId: s, fetchStatus: l, perspective: i.p, conversation: u }
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
          o = e.fetchConversationIfNeeded,
          i = e.fetchStatus,
          c = r.useCallback(
            function () {
              o({ conversationId: n }).catch(a(Object(p.a)(n)))
            },
            [a, n, o],
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
              { style: [R.root, !Object(y.a)() && R.bottomOffset] },
              r.createElement(f.a, { fetchStatus: i, onRequestRetry: c, render: s }),
            ),
          )
        )
      }
      var R = b.a.create(function (e) {
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
    aA19: function (e, t, n) {
      'use strict'
      n('uFXj'), n('z84I'), n('hBvt'), n('M+/F'), n('+KXO')
      var r = n('ERkP'),
        a = n('aWyx'),
        o = n('XnpN'),
        i = n('3XMw'),
        c = n.n(i),
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
              o = n[0]
            return r.createElement(E, { left: a, right: o })
          },
          i = e.conversation,
          c = e.link,
          g = e.perspective,
          _ = e.withBadge,
          S = i && i.avatar_image_https,
          C = i
            ? Object(o.a)(i, g).map(function (e) {
                return e.user
              })
            : [],
          R = C.slice(0, 3),
          w =
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
            })(i) ||
            (function (e) {
              return e ? r.createElement(m.a, { source: e }) : null
            })(S) ||
            (function (e) {
              var a = e.length
              return 0 === a ? null : 1 === a ? t(e[0]) : r.createElement(v.a, { style: b.circle }, n(e))
            })(R),
          I =
            c ||
            (function (e, t) {
              if (e)
                return e.type === a.a.GROUP
                  ? '/messages/'.concat(e.conversation_id, '/participants')
                  : e.type === a.a.ONE_TO_ONE
                  ? '/'.concat(t[0].screen_name)
                  : void 0
            })(i, C),
          k = _ && null != i && i.participants ? Object.keys(i.participants).length - 1 : 0
        return w
          ? r.createElement(
              r.Fragment,
              null,
              r.createElement(p.a, { ratio: 1 }, I ? r.createElement(h.a, { interactiveStyles: null, link: I }, w) : w),
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
          return o
        }),
        n.d(t, 'd', function () {
          return i
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
        o = function (e) {
          return e && e.type === r.b.WELCOME_MESSAGE
        },
        i = function (e) {
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
        return o
      })
      var r = n('ZUOq'),
        a = n('rHpw'),
        o = { durationMs: 300 },
        i = a.a.create(function (e) {
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
            expandable: { transition: 'all '.concat(o.durationMs, 'ms ease') },
            expanded: { maxHeight: r.a.dmDrawerHeight.expanded, height: '80vh' },
            drawerHeaderRadius: {
              borderTopLeftRadius: e.borderRadii.xLarge,
              borderTopRightRadius: e.borderRadii.xLarge,
            },
          }
        })
      t.b = i
    },
    cOtO: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'DMConversationScreen', function () {
          return ee
        })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        i = n.n(o),
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
        b = n('+Kfv'),
        g = (n('WNMA'), n('zh9S')),
        _ = n('MMRb'),
        E = n('CDB5'),
        O = n('RqPI'),
        S = n('hqKg'),
        C = n('AQOc'),
        R = n('z2Pn'),
        w = n('pNZL'),
        I = n('G6rE'),
        k = n('oEGd'),
        x = n('X/yg'),
        P = function (e, t) {
          return t.match.params.conversationId
        },
        T = Object(S.createSelector)(
          function (e, t) {
            return _.selectConversation(e, P(0, t))
          },
          _.selectEntries,
          P,
          x.l,
          O.p,
          x.m,
          x.n,
          I.e.selectAll,
          function (e, t) {
            return E.j(e, P(0, t))
          },
          function (e, t) {
            return E.i(e, P(0, t))
          },
          function (e, t, n, r, a, o, i, c, s, l) {
            var u = e && e.data
            return {
              conversation: (u && Object(C.a)(u, t, c)) || void 0,
              conversationId: n,
              isNewGroupConversation: r,
              isUploading: s,
              media: l,
              newConversationParticipants: o,
              perspective: a,
            }
          },
        ),
        A = Object(k.d)(T, function (e) {
          return {
            cancelUpload: Object(x.a)(e.match.params.conversationId),
            googleAnalyticsPageView: g.a,
            removeMedia: Object(x.b)(e.match.params.conversationId),
            scribePageImpression: g.d,
            setLastViewedDmInboxPath: R.h,
            updateTweetDetailNav: w.b,
          }
        }),
        M = n('i4Oy'),
        j = n('Oi4X'),
        D = n('aA19'),
        L = n('XnpN'),
        B = n('3XMw'),
        F = n.n(B),
        N = (n('hBvt'), n('/yvb')),
        H = n('6s7X'),
        U = F.a.h810143c,
        W = function (e) {
          var t = e.accessibilityLabel,
            n = e.conversationId,
            r = e.link,
            a = e.style,
            o = y.createElement(H.a, null)
          return y.createElement(N.a, {
            accessibilityLabel: t || U,
            hoverLabel: { label: U },
            icon: o,
            key: n,
            link: r,
            pullRight: !0,
            style: a,
            type: 'primaryText',
          })
        },
        V = n('7myi'),
        z = n('M2mT'),
        G = n('rHpw'),
        K = n('aITJ'),
        q = n('MWbm'),
        Y = n('7JQg'),
        X = n('OhSZ')
      function Q(e) {
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
      var Z = F.a.d4986f85,
        J = F.a.e3e58b6d,
        $ = F.a.a9ddbb94,
        ee = (function (e) {
          u()(n, e)
          var t = Q(n)
          function n(e) {
            var r
            a()(this, n),
              (r = t.call(this, e)),
              v()(s()(r), '_composer', y.createRef()),
              v()(s()(r), '_handleConversationClose', function (e) {
                var t = r.props,
                  n = t.conversation,
                  a = t.history
                null != n && n.trusted ? a.push('/messages') : e()
              }),
              v()(s()(r), '_handleInfoClick', function () {
                var e = r.props,
                  t = e.conversationId,
                  n = e.history
                t && n.push('/messages/'.concat(t, '/info'))
              }),
              v()(s()(r), '_updateLastViewDmInboxPath', function () {
                var e = r.props,
                  t = e.location
                ;(0, e.setLastViewedDmInboxPath)(t.pathname)
              })
            var o = e.conversationId,
              i = e.history,
              c = e.isNewGroupConversation,
              l = e.location
            return o || c || l.pathname !== window.location.pathname || i.replace({ pathname: '/messages' }), r
          }
          return (
            i()(n, [
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
                    o = e.typeaheadWrapper,
                    i = 'string' == typeof r.query.text ? r.query.text : void 0,
                    c = M.a.get('window').width >= G.a.theme.breakpoints.small
                  return y.createElement(
                    z.a,
                    this._getNavProps(),
                    y.createElement(
                      b.a,
                      { viewType: 'messages' },
                      y.createElement(j.a, {
                        conversationId: t,
                        history: n,
                        isWide: c,
                        location: r,
                        prefillText: i,
                        richTextInputContext: a,
                        typeaheadWrapper: o,
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
                        ? Object(X.a)({ conversation: t, perspective: r })
                        : n
                        ? Object(X.a)({ newConversationParticipants: n, perspective: r })
                        : Z,
                    o =
                      t && Object.keys(t.participants).length
                        ? y.createElement(X.b, { conversation: t, perspective: r, withScreenName: !1 })
                        : n
                        ? y.createElement(X.b, { newConversationParticipants: n, perspective: r, withScreenName: !1 })
                        : Z,
                    i = 'medium',
                    c = r ? y.createElement(D.a, { conversation: t, perspective: r, size: i }) : void 0,
                    s =
                      t &&
                      t.type === _.CONVERSATION_TYPE.ONE_TO_ONE &&
                      r &&
                      Object(L.a)(t, r).map(function (e) {
                        return e.user.screen_name
                      }),
                    l = s ? '@'.concat(s[0]) : void 0
                  return {
                    backLocation: '/messages',
                    onBackClick: this._handleConversationClose,
                    documentTitle: a,
                    rightControl: this._renderRightControl(),
                    title: o,
                    titleIconCell: c,
                    titleIconCellSize: i,
                    subtitle: l,
                    screenType: 'primaryDetail',
                    withBottomTabBar: !1,
                    headerless: K.b.isKaiOS(),
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
                    o = (null == n ? void 0 : n.type) === _.CONVERSATION_TYPE.GROUP,
                    i = (null == a || null === (e = a.state) || void 0 === e ? void 0 : e.position) || 0
                  return r
                    ? y.createElement(
                        q.a,
                        { style: te.rightControlStyles },
                        y.createElement(W, {
                          accessibilityLabel: o ? $ : J,
                          conversationId: r,
                          link: { pathname: '/messages/'.concat(r, '/info'), state: { position: i } },
                          style: te.infoButton,
                        }),
                      )
                    : void 0
                },
              },
            ]),
            n
          )
        })(y.PureComponent)
      v()(ee, 'defaultProps', { isNewGroupConversation: !1, typeaheadWrapper: V.a })
      var te = G.a.create(function (e) {
        return {
          root: { flexGrow: 1 },
          activity: { flexBasis: '1px', flexGrow: 1, height: '100%' },
          kaiOSFix: { paddingBottom: 20 },
          dragDrop: { flexGrow: 1 },
          scrollView: { flexGrow: 1 },
          infoButton: { marginRight: e.spaces.space4 },
          offsetBottom: { paddingBottom: G.a.iPhoneOffsetBottom },
          rightControlStyles: { flexDirection: 'row' },
        }
      })
      t.default = Object(Y.c)({ page: 'messages', section: 'thread' })(A(ee))
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
        o = new Set(),
        i = !1
      function c() {
        if (r.canUseDOM && !i) {
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
                  : o.forEach(function (e) {
                      return e()
                    })
              })
            },
          )
        }
        i = !0
      }
      var s = function (e) {
          return (
            i || c(),
            a.add(e),
            function () {
              return a.delete(e)
            }
          )
        },
        l = function (e) {
          return (
            i || c(),
            o.add(e),
            function () {
              return o.delete(e)
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
        o = n('VrFO'),
        i = n.n(o),
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
            i()(this, n)
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
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
        o = n('RhWx'),
        i = n.n(o),
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
              perspective: v.p,
              users: y.e.selectAll,
            }
          })
          .adjustStateProps(function (e) {
            var t = e.conversationId,
              n = e.conversations,
              r = e.existingParticipants,
              a = e.fetchStatus,
              o = e.perspective,
              i = e.users
            if (!o) throw new Error('logged-in user not found')
            return {
              conversationId: t,
              conversations: n,
              existingParticipants: r,
              fetchStatus: a,
              perspective: o,
              users: i,
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
        R = n('I2k/'),
        w = n('s14A'),
        I = n('kGix'),
        k = n('jHSc'),
        x = n('wO1l'),
        P = n('AQOc'),
        T = n('3XMw'),
        A = n.n(T),
        M = n('oQhu'),
        j = 'addPeopleButtonText',
        D = n('2dXj'),
        L = n('MWbm'),
        B = n('/yvb'),
        F = n('rHpw'),
        N = n('GZwR'),
        H = A.a.c6026009,
        U = A.a.d4986f85,
        W = A.a.af40a8ef,
        V = A.a.e1bde73e,
        z = A.a.e62d3c10,
        G = A.a.f17f716a,
        K = A.a.e3fc3547,
        q = A.a.c55f5c9a,
        Y = A.a.h8403fb5,
        X = A.a.ja522ed3
      function Q(e) {
        var t = l.useRef(null),
          n = l.useState([]),
          r = s()(n, 2),
          o = r[0],
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
            b({ conversationId: y }).catch(v(Object(R.a)(y)))
          },
          [b, y, v],
        )
        var F = function () {
            return l.createElement(
              L.a,
              { style: J.rightColumn },
              l.createElement(
                B.a,
                {
                  disabled: 0 === o.length || E !== I.a.LOADED,
                  onPress: $,
                  size: 'small',
                  testID: j,
                  type: 'primaryFilled',
                },
                W,
              ),
            )
          },
          Q = function (e) {
            c(
              o.filter(function (t) {
                return t.id !== e.id
              }),
            )
          },
          $ = function () {
            var e,
              n = o.map(function (e) {
                return e.id
              })
            _(y, n).then(function (e) {
              t.current && t.current.goBack()
            }, v(
              ((e = { defaultToast: { text: X } }),
              a()(e, u.a.DirectMessageCannotDmOtherUser, { toast: { text: q } }),
              a()(e, u.a.DirectMessageGenericUserCouldNotBeAdded, { toast: { text: Y } }),
              a()(e, u.a.DirectMessageOtherUserNotFollowing, { toast: { text: G } }),
              a()(e, u.a.TargetUserNotFound, { toast: { text: z } }),
              a()(e, u.a.TieredActionTweetSpammer, { toast: { text: K } }),
              a()(e, 'showToast', !0),
              e),
            ))
          },
          ee = Object(M.a)(function (e, t, n, r) {
            return Object(x.b)(
              n,
              e.map(function (e) {
                return Object(P.b)(e, void 0, r)
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
                rightControl: F(),
                title: H,
                withBottomBorder: !1,
              })
            },
          },
          l.createElement(
            w.a,
            { style: J.fill },
            l.createElement(D.d, {
              getItemDisabledMessage: function (e) {
                return e.type === N.b.User ? V({ screenName: e.data.screen_name }) : void 0
              },
              getItemIsDisabled: Z,
              injections: ee(O, T, h, A),
              onQueryChange: function (e) {
                m(e)
              },
              onRemove: Q,
              onSelect: function (e) {
                e.type === N.b.User &&
                  (o.find(function (t) {
                    return t.id === e.id
                  })
                    ? Q(e)
                    : c([].concat(i()(o), [e])))
              },
              preselectedUsers: te,
              selectedUsers: o,
              source: N.d.ComposeMessage,
              withCompactPills: !0,
            }),
          ),
        )
      }
      var Z = function (e) {
          return e.type === N.b.User && !(e.data.can_dm || e.data.is_dm_able)
        },
        J = F.a.create(function (e) {
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
        o = function (e) {
          var t = e.sender_id,
            n = e.by_user_id,
            r = e.participants,
            o = void 0 === r ? [] : r
          return Object(a.a)(
            o
              .map(function (e) {
                return e.user_id
              })
              .concat([t, n])
              .filter(Boolean),
          )
        },
        i = n('G6rE'),
        c = n('oEGd'),
        s = function (e, t) {
          return {
            users: o(t).reduce(function (t, n) {
              return (t[n] = e[n]), t
            }, {}),
          }
        },
        l = Object(r.createSelector)(
          i.e.selectAll,
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
        return o
      }),
        n.d(t, 'a', function () {
          return i
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
        o = a(r.b.CONVERSATION_PROFILE_INFO_HEADER, 'conversationProfileInfoHeader'),
        i = 'typingIndicator',
        c = a(r.b.TYPING_INDICATOR, i),
        s = a(r.b.READ_ONLY_INDICATOR, 'readOnlyIndicator')
    },
    hqDb: function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('97Jx'),
        a = n.n(r),
        o = n('m3Bd'),
        i = n.n(o),
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
        R = n('G6rE'),
        w = n('rxPX'),
        I = n('0KEI'),
        k = function (e, t) {
          return t.userIds
        },
        x = function (e, t) {
          return t.userIds.filter(function (t) {
            return !!R.e.select(e, t)
          })
        },
        P = function (e, t) {
          return t.userIds.reduce(function (t, n) {
            var r = R.e.selectFetchStatus(e, n)
            return (t[n] = r === C.a.NONE ? C.a.LOADING : r), t
          }, {})
        },
        T = Object(w.a)()
          .propsFromState(function () {
            return {
              availableUserIds: Object(S.a)(x, function (e) {
                return e
              }),
              fetchStatus: Object(S.a)(x, P, k, function (e, t, n) {
                for (var r = C.a.LOADED, a = 0; a < n.length; a++) {
                  var o = n[a]
                  if (-1 === e.indexOf(o)) {
                    var i = t[o] || C.a.LOADING
                    r = r === C.a.LOADED ? i : r
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
              fetchUsersIfNeeded: R.e.fetchManyIfNeeded,
            }
          }),
        A = n('v//M'),
        M = n('3XMw'),
        j = n.n(M),
        D = n('pQ3Z'),
        L = n.n(D),
        B = (n('z84I'), n('cFuS')),
        F = n('Re5t'),
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
                    promotedItemType: B.c.USER,
                    userId: e,
                    withFollowsYou: !0,
                  })
            }),
          )
        }
      U.defaultProps = { displayMode: F.a.UserDetailed, withFinalItemBorder: !0, withItemBorder: !1 }
      var W = U
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
            r = b()(e)
          if (t) {
            var a = b()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return v()(this, n)
        }
      }
      var z = j.a.f5b426c2,
        G = { viewType: 'user_list' },
        K = T(
          (function (e) {
            h()(n, e)
            var t = V(n)
            function n() {
              var e
              s()(this, n)
              for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
              return (
                (e = t.call.apply(t, [this].concat(o))),
                _()(p()(e), 'state', { allUsersUnavailable: !1 }),
                _()(p()(e), '_renderContent', function () {
                  var t = e.props,
                    n = t.availableUserIds,
                    r =
                      (t.createLocalApiErrorHandler,
                      t.fetchStatus,
                      t.fetchUsersIfNeeded,
                      t.userIds,
                      i()(t, [
                        'availableUserIds',
                        'createLocalApiErrorHandler',
                        'fetchStatus',
                        'fetchUsersIfNeeded',
                        'userIds',
                      ]))
                  return E.createElement(W, a()({}, r, { userIds: n }))
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
                      behavioralEventContext: G,
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
      t.a = K
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
        o = n('ERkP'),
        i = n('Y6L+'),
        c = n('Ty5D'),
        s = n('MMRb'),
        l = n('rxPX'),
        u = function (e, t) {
          var n = Object(c.f)(t.location.pathname, { path: '/messages/'.concat(i.j, '(/.*)?'), exact: !0, strict: !1 })
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
        R = n('KEM+'),
        w = n.n(R),
        I = (n('2G9S'), n('uFXj'), n('JtPf'), n('7x/C'), n('P1r1')),
        k = n('qdEw'),
        x = n('6xIQ'),
        P = n('X/yg'),
        T = n('AQ79'),
        A = n('z2Pn'),
        M = n('0KEI'),
        j = function (e) {
          return e === T.c.PRIMARY
            ? s.fetchTrustedInboxHistory
            : e === T.c.SECONDARY
            ? s.fetchUntrustedInboxHistory
            : s.fetchUntrustedLowQualityInboxHistory
        },
        D = function (e) {
          return e === T.c.PRIMARY
            ? s.updateTrustedLastSeenEventId
            : e === T.c.SECONDARY
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
                conversationIds: Object(x.a)(
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
                o = (e.isLoadingTop, e.untrustedConversationCount),
                i = e.untrustedCursor,
                c = e.untrustedLowQualityConversationCount
              e.untrustedLowQualityCursor
              return {
                dmNsfwMediaFilter: n,
                isDmNsfwMediaFilterEnabled: r,
                conversationIds: t,
                untrustedUnreadCount: e.untrustedUnreadCount,
                allowUntrustedInbox: a && o > 0,
                allowLowQualityUntrustedInbox: a && c > 0,
                isAtEndOfUntrustedInbox: i && 'AT_END' === i.status,
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
            .withAnalytics({ page: 'messages', section: 'inbox', component: Object(P.g)(t) })
        },
        B = n('/yvb'),
        F = n('3XMw'),
        N = n.n(F),
        H = n('Avzu'),
        U = N.a.f325afc3,
        W = N.a.cdcebd22,
        V = function (e) {
          var t = e.testID
          return o.createElement(B.a, {
            accessibilityLabel: U,
            hoverLabel: { label: W },
            icon: o.createElement(H.a, null),
            link: '/messages/compose',
            pullRight: !0,
            testID: t,
            type: 'primaryText',
          })
        },
        z = n('qz2E'),
        G = n('pXKu'),
        K = n('SOvA'),
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
        oe = n('nySH')
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
          var t = ie(n)
          function n() {
            var e
            h()(this, n)
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              w()(b()(e), '_renderPivot', function () {
                var t = e.props,
                  n = t.allowUntrustedInbox,
                  r = t.untrustedUnreadCount,
                  a =
                    e.context.featureSwitches.isTrue('dm_vdl_enabled') &&
                    e.context.featureSwitches.isTrue('dm_vdl_inbox_p0_enabled'),
                  i = [ve.requestPivotContainer, a ? void 0 : ve.requestPivotContainerBorder],
                  c = a && r > 0
                return n
                  ? o.createElement(
                      J.a,
                      { style: i },
                      o.createElement(ee.a, {
                        description: c ? fe({ count: r }) : void 0,
                        label: se,
                        link: Object(oe.a)(T.c.SECONDARY),
                        onPress: e._handleRequestsPivotClick,
                        renderRightContent: a ? void 0 : e._renderPivotBadge,
                        thumbnail: a
                          ? o.createElement(
                              J.a,
                              null,
                              o.createElement(te.a, { Icon: K.a, color: 'neutral' }),
                              c
                                ? o.createElement(ne.a, {
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
              w()(b()(e), '_renderPivotBadge', function () {
                var t = e.props.untrustedUnreadCount
                return t > 0
                  ? o.createElement(ne.a, {
                      count: t,
                      standalone: !0,
                      truncatedCountFormatter: he,
                      unreadCountLabel: pe,
                    })
                  : null
              }),
              w()(b()(e), '_renderEmptyDMInbox', function () {
                return o.createElement(
                  o.Fragment,
                  null,
                  e._renderPivot(),
                  o.createElement(re.a, {
                    buttonLink: '/messages/compose',
                    buttonText: de,
                    header: le,
                    message: ue,
                    onImpression: e._handleEmptyDMInboxImpression,
                  }),
                )
              }),
              w()(b()(e), '_handleEmptyDMInboxImpression', function () {
                e.props.analytics.scribe({ component: 'empty_message', action: 'impression' })
              }),
              w()(b()(e), '_handleRequestsPivotClick', function () {
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
                      ? o.createElement(
                          J.a,
                          { style: ve.appBarButtons },
                          Object(oe.b)('/messages/settings', !1),
                          o.createElement(V, { testID: Z }),
                        )
                      : Object(oe.b)('/messages/settings', !0),
                    t = this.props,
                    n = t.analytics,
                    r = t.conversationIds,
                    a = t.fetchInboxHistory,
                    i = t.updateLastSeenEventId
                  return o.createElement(
                    X.a,
                    { rightControl: e, screenType: 'root', title: ce },
                    o.createElement(G.a, {
                      accessibilityTitle: ce,
                      analytics: n,
                      conversationIds: r,
                      fetchInboxHistory: a,
                      renderEmptyDMInbox: this._renderEmptyDMInbox,
                      renderStickyContent: this._renderPivot,
                      updateLastSeenEventId: i,
                      virtualScrollerCacheKey: 'dmInbox',
                      withDmSearch: !0,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(o.Component)
      w()(me, 'contextType', $.a), w()(me, 'defaultProps', { conversationIds: [], untrustedUnreadCount: 0 })
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
        ye = Object(q.a)(L({ inbox: T.c.PRIMARY })(me), { directMessages: z.a }),
        be = (n('WNMA'), n('KqXw'), n('v6aA')),
        ge = n('jYSG'),
        _e = n('5FtR'),
        Ee = n('Lz2T'),
        Oe = n('0yYu'),
        Se = n('t62R'),
        Ce = n('cm6r')
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
            r = C()(e)
          if (t) {
            var a = C()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return O()(this, n)
        }
      }
      var we = N.a.cf2d1047,
        Ie = N.a.bef0039f,
        ke = N.a.eb7de4a9,
        xe = N.a.a0e81a2e,
        Pe = N.a.f5dc353c,
        Te = N.a.fe1eaa95,
        Ae = N.a.j24c37b2,
        Me = N.a.daeda053,
        je = (function (e) {
          _()(n, e)
          var t = Re(n)
          function n() {
            var e
            h()(this, n)
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              w()(b()(e), '_nsfwBannerWasShown', !1),
              w()(b()(e), 'componentDidMount', function () {
                var t = e.props.analytics
                e._shouldRenderTombstone() && t.scribe({ element: 'low_quality_pivot', action: 'impression' }),
                  e.context.incrementDmDrawerInhibitorCount()
              }),
              w()(b()(e), 'componentDidUpdate', function (t) {
                var n = e.props.analytics
                !e._shouldRenderTombstone() ||
                  (t.allowLowQualityUntrustedInbox && t.isAtEndOfUntrustedInbox) ||
                  n.scribe({ element: 'low_quality_pivot', action: 'impression' })
              }),
              w()(b()(e), 'componentWillUnmount', function () {
                e.context.decrementDmDrawerInhibitorCount(), e._nsfwBannerWasShown && e._hideNsfwTimelineMessage()
              }),
              w()(b()(e), '_renderNsfwSettingBanner', function (t) {
                var n = t.featureSwitches,
                  r = e.props.dmNsfwMediaFilter
                return n.isTrue('dm_conversations_nsfw_media_filter_enabled') && void 0 === r
                  ? ((e._nsfwBannerWasShown = !0),
                    o.createElement(
                      o.Fragment,
                      null,
                      o.createElement(Ee.a, {
                        bodyText: Te,
                        primaryAction: { onClick: e._handleNsfwTimelineMessagePrimaryClick, text: Ae },
                        secondaryAction: {
                          link: '/settings/direct_messages',
                          onClick: e._handleNsfwTimelineMessageSecondaryClick,
                          text: Me,
                        },
                        titleText: Pe,
                      }),
                      o.createElement(Oe.a, null),
                    ))
                  : null
              }),
              w()(b()(e), '_shouldRenderTombstone', function () {
                var t = e.props,
                  n = t.allowLowQualityUntrustedInbox,
                  r = t.isAtEndOfUntrustedInbox
                return n && r
              }),
              w()(b()(e), '_renderTombstone', function () {
                var t = e.props.conversationIds
                return e._shouldRenderTombstone()
                  ? o.createElement(
                      J.a,
                      null,
                      t.length > 0 && o.createElement(Oe.a, null),
                      o.createElement(
                        J.a,
                        { style: De.tombstoneDescription },
                        o.createElement(Se.b, { color: 'gray700', size: 'subtext2' }, ke),
                      ),
                      o.createElement(
                        Ce.a,
                        {
                          link: Object(oe.a)(T.c.TERTIARY),
                          onPress: e._handleTombstoneClick,
                          style: De.tombstoneContainer,
                        },
                        o.createElement(Se.b, { align: 'center', color: 'primary', size: 'body' }, xe),
                      ),
                    )
                  : null
              }),
              w()(b()(e), '_renderEmptyDMInbox', function () {
                var t = e._renderTombstone()
                return o.createElement(
                  o.Fragment,
                  null,
                  o.createElement(re.a, { header: t ? '' : Ie, message: ge.a, style: De.emptyMessage }),
                  t,
                )
              }),
              w()(b()(e), '_handleNsfwTimelineMessagePrimaryClick', function () {
                e.props.analytics.scribe({ component: 'dm_nsfw_prompt', element: 'primary_action', action: 'click' }),
                  e._hideNsfwTimelineMessage()
              }),
              w()(b()(e), '_handleNsfwTimelineMessageSecondaryClick', function () {
                e.props.analytics.scribe({ component: 'dm_nsfw_prompt', element: 'secondary_action', action: 'click' })
              }),
              w()(b()(e), '_hideNsfwTimelineMessage', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.updateDmNsfwMediaFilter)(!0).catch(n())
              }),
              w()(b()(e), '_handleBackClick', function () {
                e.props.history.push(Object(oe.a)(T.c.PRIMARY))
              }),
              w()(b()(e), '_handleTombstoneClick', function () {
                e.props.analytics.scribe({ element: 'low_quality_pivot', action: 'click' })
              }),
              w()(b()(e), '_hasConversationOpen', function () {
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
                    i = t.fetchInboxHistory,
                    c = t.updateLastSeenEventId
                  return n
                    ? o.createElement(
                        X.a,
                        {
                          backLocation: '/messages',
                          onBackClick: this._handleBackClick,
                          rightControl: Object(oe.b)('/settings/direct_messages', !0),
                          screenType: 'secondaryRoot',
                          title: we,
                          withDetailOpen: this._hasConversationOpen(),
                        },
                        o.createElement(be.a.Consumer, null, this._renderNsfwSettingBanner),
                        o.createElement(G.a, {
                          accessibilityTitle: we,
                          analytics: r,
                          conversationIds: a,
                          fetchInboxHistory: i,
                          footer: this._renderTombstone(),
                          inboxType: T.c.SECONDARY,
                          renderEmptyDMInbox: this._renderEmptyDMInbox,
                          renderStickyContent: function () {
                            return Object(oe.c)(e.props.conversationIds)
                          },
                          updateLastSeenEventId: c,
                          virtualScrollerCacheKey: 'dmUntrustedInbox',
                        }),
                      )
                    : o.createElement(_e.a, { to: '/messages' })
                },
              },
            ]),
            n
          )
        })(o.Component)
      w()(je, 'contextType', $.a), w()(je, 'defaultProps', { conversationIds: [] })
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
        Le = Object(q.a)(L({ inbox: T.c.SECONDARY })(je), { directMessages: z.a })
      function Be(e) {
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
      var Fe = N.a.e7172d70,
        Ne = N.a.bef0039f,
        He = (function (e) {
          _()(n, e)
          var t = Be(n)
          function n() {
            var e
            h()(this, n)
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              w()(b()(e), 'componentDidMount', function () {
                e.context.incrementDmDrawerInhibitorCount()
              }),
              w()(b()(e), 'componentWillUnmount', function () {
                e.context.decrementDmDrawerInhibitorCount()
              }),
              w()(b()(e), '_renderEmptyDMInbox', function () {
                return o.createElement(re.a, { header: Ne, message: ge.a })
              }),
              w()(b()(e), '_handleBackClick', function () {
                e.props.history.push(Object(oe.a)(T.c.SECONDARY))
              }),
              w()(b()(e), '_hasDetailOpen', function () {
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
                    i = t.updateLastSeenEventId
                  return o.createElement(
                    X.a,
                    {
                      backLocation: Object(oe.a)(T.c.SECONDARY),
                      onBackClick: this._handleBackClick,
                      rightControl: Object(oe.b)('/settings/direct_messages', !0),
                      screenType: 'secondaryRoot',
                      title: Fe,
                      withDetailOpen: this._hasDetailOpen(),
                    },
                    o.createElement(G.a, {
                      accessibilityTitle: Fe,
                      analytics: n,
                      conversationIds: r,
                      fetchInboxHistory: a,
                      inboxType: T.c.TERTIARY,
                      renderEmptyDMInbox: this._renderEmptyDMInbox,
                      renderStickyContent: function () {
                        return Object(oe.c)(e.props.conversationIds)
                      },
                      updateLastSeenEventId: i,
                      virtualScrollerCacheKey: 'dmLowQualityUntrustedInbox',
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(o.Component)
      w()(He, 'contextType', $.a)
      var Ue = Object(q.a)(L({ inbox: T.c.TERTIARY })(He), { directMessages: z.a }),
        We = p(function (e) {
          e.conversationId
          var t = e.inboxType,
            n = a()(e, ['conversationId', 'inboxType']),
            r = e.location
          return t === T.c.TERTIARY || '/messages/requests/additional' === r.pathname
            ? o.createElement(Ue, n)
            : t === T.c.SECONDARY || '/messages/requests' === r.pathname
            ? o.createElement(Le, n)
            : o.createElement(ye, n)
        })
      t.default = We
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
        o = n('v6aA'),
        i = n('jYSG'),
        c = n('AQ79'),
        s = n('+Bsv'),
        l = n('MWbm'),
        u = n('cHvH'),
        d = n('t62R'),
        p = n('rHpw'),
        f = function (e) {
          switch (e) {
            case c.c.SECONDARY:
              return '/messages/requests'
            case c.c.TERTIARY:
              return '/messages/requests/additional'
            case c.c.PRIMARY:
            default:
              return '/messages'
          }
        },
        h = function (e, t) {
          return r.createElement(o.a.Consumer, null, function (n) {
            var a = n.featureSwitches.isTrue('responsive_web_settings_revamp_enabled') ? e : '/settings/safety'
            return r.createElement(s.a, { pullRight: t, to: a })
          })
        },
        m = function (e) {
          return r.createElement(u.a, null, function (t) {
            var n = t.windowWidth,
              o = a.a.isTwoColumnLayout(n),
              c = 0 === e.length
            return o || c
              ? null
              : r.createElement(
                  l.a,
                  { style: v.stickyCopyContainer },
                  r.createElement(d.b, { style: v.stickyCopy }, i.a),
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
        o = (n('ho0z'), n('+KXO'), n('z84I'), n('LW0h'), n('Xrkv')),
        i = n('aWyx'),
        c = n('XnpN'),
        s = n('3XMw'),
        l = n.n(s),
        u = l.a.b5b7fb93,
        d = l.a.g755fcde,
        p = l.a.f6b1ff81
      t.a = function (e, t, n) {
        var r = e.type,
          a = e.name,
          o = e.participants,
          s = void 0 === o ? {} : o
        if (r === i.a.GROUP && a) return a
        if (Object.keys(s).length) {
          if (r === i.a.GROUP && n) return u
          var l = Object(c.a)(e, t).map(function (e) {
            return e.user
          })
          return f(l, t, r)
        }
      }
      var f = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          t = arguments.length > 1 ? arguments[1] : void 0,
          n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.a.GROUP,
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
            return n === i.a.GROUP ? p({ name: s }) : s
          default:
            var l = !0
            return Object(o.a)(r, l)
        }
      }
    },
    pXKu: function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        i = n.n(o),
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
                return Object(_.y)(e, _.j)
              },
            }
          })
          .propsFromActions(function () {
            return { addFlag: _.v }
          })
          .withAnalytics({ component: 'dm_education_flags_prompt' }),
        S = n('fs1G'),
        C = n('t62R'),
        R = n('feu+'),
        w = n('3XMw'),
        I = n.n(w),
        k = I.a.fd6150fc,
        x = y.createElement(
          I.a.I18NFormatMessage,
          { $i18n: 'iac7f92a' },
          y.createElement(C.b, { link: '/privacy' }, I.a.d42d239f),
        ),
        P = I.a.j24c37b2,
        T = O(function (e) {
          var t = e.addFlag,
            n = e.analytics,
            r = e.shouldShowPrompt,
            a = y.useContext(g.a).featureSwitches
          if (!(r && a.isTrue('dm_education_flags_prompt'))) return !1
          return (
            n.scribeAction('impression'),
            y.createElement(R.a, {
              actionLabel: P,
              headline: k,
              onAction: function () {
                n.scribeAction('click'), t(_.j)
              },
              onClose: S.a,
              subtext: x,
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
        B = n.n(L),
        F =
          (n('2G9S'),
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
          n('hBpG'),
          n('EbOo')),
        N = n('tZH3'),
        H = n('1YZw'),
        U = n('hqKg'),
        W = n('AQOc'),
        V = n('G6rE'),
        z = n('oEGd'),
        G = function (e, t) {
          return t.conversationId
        },
        K = Object(U.createSelector)(
          G,
          function (e, t) {
            return A.selectConversation(e, G(0, t))
          },
          A.selectEntries,
          V.e.selectAll,
          function (e, t) {
            return !A.selectConversationIsRead(e, G(0, t))
          },
          function (e, t) {
            var n = G(0, t)
            return Object(A.selectInboxTypeByConversation)(e, n)
          },
          function (e, t, n, r, a, o) {
            return {
              conversation: (null == t ? void 0 : t.data) && Object(W.a)(t.data, n, r),
              conversationId: e,
              unread: a,
              inboxType: o,
            }
          },
        ),
        q = {
          addRecentSearch: A.addRecentSearches,
          addToast: H.b,
          block: V.e.block,
          createLocalApiErrorHandler: Object(j.createLocalApiErrorHandlerWithContextFactory)(
            'DIRECT_MESSAGES_INBOX_ITEM',
          ),
          disableNotifications: A.disableNotifications,
          enableNotifications: A.enableNotifications,
          leaveConversation: A.leaveConversation,
          muteDMUser: A.muteDMUser,
          unmuteDMUser: A.unmuteDMUser,
          unblock: V.e.unblock,
        },
        Y = Object(z.g)(K, q),
        X = n('aA19'),
        Q = n('OhSZ'),
        Z = n('g54k')
      function J(e, t) {
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
      var $ = function (e, t) {
          return t.entry
        },
        ee = Object(E.a)()
          .propsFromState(function () {
            return { users: Object(U.createSelector)(V.e.selectAll, $, Z.b) }
          })
          .adjustStateProps(function (e) {
            return (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}
                t % 2
                  ? J(Object(n), !0).forEach(function (t) {
                      v()(e, t, n[t])
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                  : J(Object(n)).forEach(function (t) {
                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
              }
              return e
            })({}, e.users)
          }),
        te = n('zQEV'),
        ne = ee(function (e) {
          var t = e.entry,
            n = e.entryType,
            r = e.perspective,
            a = e.users,
            o = Object(te.a)(t, n, r, a)
          return y.createElement(C.b, { color: 'gray700' }, o)
        }),
        re = Object(U.createSelector)(
          function (e, t) {
            return V.e.select(e, t.senderId)
          },
          function (e, t) {
            return t.recipientId ? V.e.select(e, t.recipientId) : void 0
          },
          function (e, t) {
            return { user: e, recipient: t }
          },
        ),
        ae = Object(z.c)(re),
        oe = n('X/yg'),
        ie = n('cTG8'),
        ce = function (e) {
          return y.createElement(I.a.I18NFormatMessage, { $i18n: 'b3a2b11c' }, y.createElement(C.b, null, e))
        },
        se = I.a.dedfd265
      var le = I.a.a876e58b,
        ue = I.a.bf584cd1,
        de = I.a.a9cc8cfd,
        pe = I.a.e20b65b0,
        fe = I.a.e5bfe07d,
        he = I.a.b1a614fe,
        me = ae(function (e) {
          var t = e.entry,
            n = e.perspective,
            r = e.isGroupDM,
            a = e.user,
            o = void 0 === a ? {} : a,
            i = e.recipient,
            c = void 0 === i ? {} : i,
            s = y.useContext(g.a).featureSwitches,
            l = t && t.message_data
          if (!l) return null
          var u = l.attachment,
            d = u && !!(u.video || u.photo || u.animated_gif || u.tweet || u.fleet || u.sticker || u.card),
            p = n === o.id_str,
            f = !(!d || !p) || !(!r || p),
            h = o.name,
            m = c.name,
            v = [
              f && y.createElement(C.b, { key: 'senderName' }, ce(h), ' '),
              l &&
                l.text &&
                y.createElement(ie.a, {
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
                    : he)
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
                ? (v = Object(oe.k)(u, s)
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
                      : se
                    : f
                    ? (function (e, t) {
                        return e
                          ? y.createElement(C.b, null, I.a.j7d81019)
                          : y.createElement(I.a.I18NFormatMessage, { $i18n: 'eee2f120' }, y.createElement(C.b, null, t))
                      })(p, h)
                    : le)
                : u.photo
                ? (v = f
                    ? (function (e, t) {
                        return e
                          ? y.createElement(C.b, null, I.a.f80629ba)
                          : y.createElement(I.a.I18NFormatMessage, { $i18n: 'c1e1f848' }, y.createElement(C.b, null, t))
                      })(p, h)
                    : ue)
                : u.animated_gif
                ? (v = f
                    ? (function (e, t) {
                        return e
                          ? y.createElement(C.b, null, I.a.eb3d722e)
                          : y.createElement(I.a.I18NFormatMessage, { $i18n: 'dc4b75a1' }, y.createElement(C.b, null, t))
                      })(p, h)
                    : de)
                : u.sticker
                ? (v = f
                    ? (function (e, t) {
                        return e
                          ? y.createElement(C.b, null, I.a.d30c2d4f)
                          : y.createElement(I.a.I18NFormatMessage, { $i18n: 'c7e2464e' }, y.createElement(C.b, null, t))
                      })(p, h)
                    : pe)
                : u.card &&
                  (v = f
                    ? (function (e, t) {
                        return e
                          ? y.createElement(C.b, null, I.a.db53c017)
                          : y.createElement(I.a.I18NFormatMessage, { $i18n: 'hcbbbb34' }, y.createElement(C.b, null, t))
                      })(p, h)
                    : fe)),
            y.createElement(C.b, { color: 'gray700', numberOfLines: 1 }, v)
          )
        }),
        ve = n('uKEd'),
        ye = function (e, t) {
          return t.senderId ? V.e.select(e, t.senderId) : void 0
        },
        be = function (e, t) {
          return Object(ve.n)(e, t.reactionEntry.message_id)
        },
        ge = function (e, t) {
          var n = be(e, t)
          return n && n.message_data && V.e.select(e, n.message_data.sender_id)
        },
        _e = Object(z.e)(function () {
          return Object(U.createSelector)(ye, be, ge, function (e, t, n) {
            return { reactedMessageEntry: t, reactingUser: e, messageUser: n }
          })
        }, {}),
        Ee = n('33Kz'),
        Oe = _e(function (e) {
          var t,
            n = e.isGroupDM,
            r = e.messageUser,
            a = e.perspective,
            o = e.reactedMessageEntry,
            i = e.reactingUser,
            c = e.reactionEntry,
            s = y.useContext(g.a).featureSwitches,
            l = o && o.message_data,
            u = l && l.attachment,
            d = l && l.text,
            p = r && r.screen_name,
            f = a === (i && i.id_str),
            h = i && i.name,
            m = Object(Ee.b)(c.reaction_key || '', s)
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
        Se = n('H4nC'),
        Ce = n('b9JY'),
        Re = I.a.fb3ccb55,
        we = function (e) {
          var t = e.conversationType,
            n = e.entry,
            r = e.perspective
          if (n.marked_as_spam) return y.createElement(C.b, { color: 'gray700', numberOfLines: 1 }, Re)
          if (Object(Ce.b)(n)) {
            var a = n.message_data,
              o = (a = void 0 === a ? {} : a).recipient_id,
              i = a.sender_id
            return y.createElement(me, {
              entry: n,
              isGroupDM: t === A.CONVERSATION_TYPE.GROUP,
              perspective: r,
              recipientId: o,
              senderId: i,
            })
          }
          return Object(Ce.c)(n)
            ? y.createElement(Oe, {
                isGroupDM: t === A.CONVERSATION_TYPE.GROUP,
                perspective: r,
                reactionEntry: n,
                senderId: n.sender_id,
              })
            : Object(Ce.a)(n)
            ? y.createElement(ne, { entry: n, entryType: n.type, perspective: r })
            : Object(Ce.d)(n)
            ? y.createElement(Se.a, { entry: n, isCompact: !0 })
            : null
        },
        Ie = n('Myq3'),
        ke = n('3wZR'),
        xe = n('XnpN'),
        Pe = n('AQ79'),
        Te = 'conversation',
        Ae = n('u0B7'),
        Me = n('MWbm'),
        je = n('Irs7'),
        De = n('eb3s'),
        Le = n('ZToW'),
        Be = n('lHOd'),
        Fe = n('IG7M'),
        Ne = n('mjJ+'),
        He = n('Znyr'),
        Ue = n('0PHd'),
        We = n('yrzJ'),
        Ve = n('Xrkv'),
        ze = n('efqG'),
        Ge = n('/yvb'),
        Ke = n('GBcw'),
        qe = n('cm6r'),
        Ye = n('htQn'),
        Xe = n('5mJL'),
        Qe = n('rHpw'),
        Ze = n('vMjK'),
        Je = n('pHkl'),
        $e = n('aWyx'),
        et = n('Lsrn'),
        tt = n('k/Ka')
      function nt(e, t) {
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
      function rt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? nt(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : nt(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var at = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(tt.a)(
          'svg',
          rt(
            rt({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [et.a.root, e.style], viewBox: '0 0 32 32' },
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
      at.metadata = { width: 32, height: 32 }
      var ot = at,
        it = n('zIWA'),
        ct = n('5pef')
      function st(e, t) {
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
      function lt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? st(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : st(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var ut = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(tt.a)(
          'svg',
          lt(
            lt({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [et.a.root, e.style], viewBox: '0 0 24 24' },
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
      ut.metadata = { width: 24, height: 24 }
      var dt = ut,
        pt = n('5oT/')
      function ft(e, t) {
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
      function ht(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ft(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ft(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
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
      var vt = I.a.d88d0790,
        yt = I.a.ad63377d,
        bt = {
          confirmButtonLabel: I.a.bb1d57b6,
          actionTextLeave: I.a.g9074da4,
          header: I.a.gdf4b79f,
          text: I.a.h09b49f7,
        },
        gt = I.a.i6b19b07,
        _t = I.a.e3cfff7c,
        Et = I.a.a8ed0eca,
        Ot = { component: 'low_quality_timeline' },
        St = function (e) {
          var t = e.children
          return y.createElement(Me.a, { style: Rt.socialProofContainer }, t)
        },
        Ct = (function (e) {
          u()(n, e)
          var t = mt(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
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
                return y.createElement(De.a, {
                  confirmButtonLabel: bt.confirmButtonLabel,
                  confirmButtonType: 'destructiveFilled',
                  headline: bt.header,
                  onCancel: e._handleHideConfirmation,
                  onConfirm: e._deleteConversation(t),
                  text: bt.text,
                })
              }),
              v()(s()(e), '_renderMenu', function (t) {
                var n = t.isFocused,
                  r = t.isFocusedWithin,
                  a = t.isHovered,
                  o = e.state.showActionMenu,
                  i = function () {
                    e.setState({ showActionMenu: !0 })
                  },
                  c = !Le.a.isEnabled || n || r || a || o
                return y.createElement(Be.a.Consumer, null, function (t) {
                  return y.createElement(Fe.a, {
                    onClick: i,
                    renderActionMenu: e._renderActionMenu,
                    style: c ? Rt.menu : Rt.hiddenMenu,
                  })
                })
              }),
              v()(s()(e), '_renderActionMenu', function (t) {
                var n = e.props,
                  r = n.conversation,
                  a = n.conversationId,
                  o = e.context.history,
                  i = null == r ? void 0 : r.notifications_disabled,
                  c = {
                    Icon: ot,
                    isEmphasized: !0,
                    onClick: e._handleDeleteMenuItemClick,
                    text: yt,
                    withBottomBorder: !0,
                  },
                  s = [
                    {
                      Icon: it.a,
                      onClick: function () {
                        return e._handleReportMenuItemClick(o)()
                      },
                      text: gt,
                      withBottomBorder: !0,
                    },
                    {
                      Icon: i ? ct.a : dt,
                      onClick: function () {
                        return e._handleSnoozeMenuItemClick(a)
                      },
                      text: i ? Et : _t,
                      withBottomBorder: !0,
                    },
                    c,
                  ]
                return y.createElement(Ne.a, {
                  items: s,
                  onCloseRequested: e._handleHideMenu(t),
                  shouldCloseOnClick: !0,
                })
              }),
              v()(s()(e), '_renderConversationActions', function (t) {
                var n = t.isFocused,
                  r = t.isFocusedWithin,
                  a = t.isHovered
                switch (e.props.inboxType) {
                  case Pe.c.PRIMARY:
                    return e._isPinnedInboxEnabled
                      ? e._renderMenu({ isFocused: n, isFocusedWithin: r, isHovered: a })
                      : null
                  case Pe.c.SECONDARY:
                  case Pe.c.TERTIARY:
                    return e._renderX()
                  default:
                    return null
                }
              }),
              v()(s()(e), '_renderConversationEndCell', function (t) {
                var n = e.props,
                  r = n.inboxType,
                  a = n.searchQuery,
                  o = n.unread
                    ? y.createElement(He.a, {
                        pip: !0,
                        style: Rt.unreadMessagePip,
                        truncatedCountFormatter: function () {
                          return ''
                        },
                        unreadCountLabel: function () {
                          return ''
                        },
                      })
                    : null
                switch (r) {
                  case Pe.c.PRIMARY:
                    return e._isVDLEnabled ? o : a ? null : e._renderTimestamp(t)
                  case Pe.c.SECONDARY:
                    return e._isVDLEnabled ? o : null
                  default:
                    return null
                }
              }),
              v()(s()(e), '_renderConversationLabel', function (e) {
                var t = e.convo_label
                if (null == t || !t.text) return null
                var n = Object(ke.b)(t.icon)
                return y.createElement(
                  C.b,
                  { color: 'gray700', size: 'subtext2' },
                  n ? y.createElement(n, { style: Rt.convoLabelIcon }) : null,
                  t.text,
                )
              }),
              v()(s()(e), '_renderSocialProof', function (t) {
                var n = t.social_proof
                if (!n || 0 === n.length) return null
                var r = n[0]
                switch (r.proof_type) {
                  case $e.d.MUTUAL_FRIENDS:
                    if (0 === r.total) return null
                    var a = r.users.map(function (e) {
                        return e.profile_image_url_https
                      }),
                      o = r.users.map(function (e) {
                        return e.name
                      }),
                      i = e._isVDLEnabled ? { marginLeft: 0 } : null
                    return y.createElement(
                      St,
                      null,
                      y.createElement(Ue.a, {
                        displayFacepileInline: !0,
                        knownFollowersAvatarUrls: a,
                        knownFollowersCount: r.total,
                        knownFollowersNames: o,
                        textStyle: i,
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
                  o = n ? Object(xe.a)(n, r) : [],
                  i = [],
                  c = function (e, t) {
                    return e.localeCompare(t)
                  },
                  s = o
                    .map(function (e) {
                      return e.user
                    })
                    .filter(function (e) {
                      var t,
                        n = null === (t = e.name) || void 0 === t ? void 0 : t.toLowerCase().includes(a)
                      return e.id_str !== r && (n && i.push(e.name), !n)
                    })
                    .map(function (e) {
                      return e.name
                    })
                    .sort(c),
                  l = i.sort(c).concat(s)
                if (n) {
                  if (n.type === A.CONVERSATION_TYPE.ONE_TO_ONE) {
                    var u = o.map(function (e) {
                        return e.user
                      }),
                      d = B()(u, 1)[0]
                    return y.createElement(We.a, { color: 'gray700', screenName: d.screen_name })
                  }
                  var p = Object(Ve.a)(l, !0)
                  return y.createElement(C.b, { color: 'gray700', numberOfLines: 2 }, p)
                }
              }),
              v()(s()(e), '_renderX', function () {
                var t = e.props,
                  n = t.conversation,
                  r = t.conversationId,
                  a = e.context.loggedInUserId,
                  o = Object(oe.i)(n, a),
                  i = (null == n ? void 0 : n.type) === A.CONVERSATION_TYPE.GROUP
                return y.createElement(Be.a.Consumer, null, function (t) {
                  return y.createElement(
                    ze.a,
                    {
                      renderContent: function (n, a) {
                        return y.createElement(N.a, {
                          dismiss: n,
                          flatBorders: 'sheet' === a,
                          isGroup: i,
                          onBlockClick: e._blockUser(o.idStr),
                          onDeleteClick: e._deleteConversation(r),
                          onReportClick: e._handleReportMenuItemClick(t),
                          requestorScreenName: o.screenName,
                          showBlock: !i,
                          showCancel: 'sheet' === a,
                          showDelete: !0,
                        })
                      },
                    },
                    y.createElement(Ge.a, {
                      accessibilityLabel: vt,
                      icon: y.createElement(pt.a, { style: e._isVDLEnabled ? Rt.xIcon : void 0 }),
                      onPress: e._handleXPress,
                      style: e._isVDLEnabled ? Rt.vdlXButton : Rt.xButton,
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
                    o = n.inboxType
                  if (a) {
                    r.scribeAction('report')
                    var i = Object(oe.f)(a, window.location.pathname, r.contextualScribeNamespace, o)
                    t.push(i)
                  }
                }
              }),
              v()(s()(e), '_handleSnoozeMenuItemClick', function (t) {
                var n = e.props,
                  r = n.conversation,
                  a = n.disableNotifications,
                  o = n.enableNotifications
                ;(null == r ? void 0 : r.notifications_disabled) ? o({ conversationId: t }) : a({ conversationId: t })
              }),
              v()(s()(e), '_handleXPress', function (e) {
                e.preventDefault()
              }),
              v()(s()(e), '_renderTimestamp', function (t) {
                var n = e.props,
                  r = n.conversation,
                  a = n.isMessageItem,
                  o =
                    e.context.featureSwitches.isTrue('dm_vdl_enabled') &&
                    e.context.featureSwitches.isTrue('dm_vdl_inbox_p0_enabled'),
                  i = [o || a ? Rt.inlineNotificationsDisabledIcon : Rt.notificationsDisabledIcon],
                  c = Number(t && a ? (null == t ? void 0 : t.time) : null == r ? void 0 : r.sort_timestamp)
                return y.createElement(
                  y.Fragment,
                  null,
                  y.createElement(
                    Me.a,
                    { style: (o || a) && Rt.inlineTimestamp },
                    r && c ? y.createElement(Ke.a, { timestamp: c }) : null,
                    null != r && r.notifications_disabled ? y.createElement(dt, { style: i }) : null,
                  ),
                )
              }),
              v()(s()(e), '_deleteConversation', function (t) {
                return function () {
                  var n = e.props,
                    r = n.analytics,
                    a = n.conversation,
                    o = n.createLocalApiErrorHandler,
                    i = n.inboxType,
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
                      inbox_type: Object(oe.h)(i),
                      entry_point: Je.b.CELL_X_BUTTON,
                    }
                  e._handleHideConfirmation(),
                    r.scribe({ element: 'thread', action: d, data: p }),
                    c({ conversationId: t }).catch(o({ showToast: !0 })),
                    l.replace(Object(oe.e)(i))
                }
              }),
              v()(s()(e), '_blockUser', function (t) {
                return function () {
                  var n = e.props,
                    r = n.addToast,
                    a = n.analytics,
                    o = n.block,
                    i = n.createLocalApiErrorHandler
                  o(t).then(function () {
                    r({ action: { label: Ze.c, onAction: e._createUnblockUserHandler(t) }, text: Ze.a })
                  }, i(F.a)),
                    a.scribeAction('block')
                }
              }),
              v()(s()(e), '_createUnblockUserHandler', function (t) {
                return function () {
                  var n = e.props,
                    r = n.analytics,
                    a = n.createLocalApiErrorHandler
                  ;(0, n.unblock)(t).catch(a(Ae.a)), r.scribeAction('unblock')
                }
              }),
              v()(s()(e), '_handleHideConfirmation', function () {
                e.setState({ showConfirmation: !1 })
              }),
              v()(s()(e), '_handleOnClick', function (t) {
                var n = e.props,
                  r = n.addRecentSearch,
                  a = n.analytics,
                  o = n.conversation,
                  i = n.conversationId,
                  c = n.onClick,
                  s = n.position,
                  l = n.searchQuery,
                  u = null != o && o.participants ? Object.keys(o.participants).length : 0,
                  d = (null == o ? void 0 : o.type) === A.CONVERSATION_TYPE.GROUP
                l &&
                  (a.scribe({
                    component: 'search',
                    element: 'conversation',
                    action: 'click',
                    data: {
                      conversation_id: i,
                      conversation_participant_count: u,
                      conversation_type: d ? Je.g.GROUP : Je.g.ONE_TO_ONE,
                      entry_point: Je.b.ALL,
                      inbox_type: Je.c.PRIMARY,
                      dm_search_result_type: Je.a.CONVERSATION,
                      message_type: Je.d.NOT_APPLICABLE,
                      position: s,
                    },
                  }),
                  a.scribe({ component: 'recent_search', action: 'add' }),
                  r(l)),
                  c(t, i, o, s)
              }),
              v()(s()(e), '_handleShowConfirmation', function (t) {
                var n = e.props.analytics
                t.stopPropagation(),
                  n.scribe(ht(ht({}, Ot), {}, { element: 'accessory_trashcan', action: 'click' })),
                  e.setState({ showConfirmation: !0 })
              }),
              e
            )
          }
          return (
            i()(n, [
              {
                key: 'shouldComponentUpdate',
                value: function (e, t) {
                  var n = this.props.conversation,
                    r = null == n ? void 0 : n.conversation_id,
                    a = null == n ? void 0 : n.notifications_disabled,
                    o = null == n ? void 0 : n.last_read_event_id,
                    i = null == n ? void 0 : n.sort_event_id,
                    c = null == n ? void 0 : n.max_entry_id,
                    s = null == n ? void 0 : n.convo_label,
                    l = this.props.messageId,
                    u = e.conversation,
                    d = null == u ? void 0 : u.conversation_id,
                    p = null == u ? void 0 : u.notifications_disabled,
                    f = null == u ? void 0 : u.last_read_event_id,
                    h = null == u ? void 0 : u.sort_event_id,
                    m = null == u ? void 0 : u.max_entry_id,
                    v = null == u ? void 0 : u.convo_label,
                    y = e.messageId,
                    b = this.props,
                    g = b.filter,
                    _ = b.isActive,
                    E = e.filter,
                    O = e.isActive,
                    S = this.state.showConfirmation,
                    C = t.showConfirmation
                  return (
                    r !== d ||
                    a !== p ||
                    o !== f ||
                    i !== h ||
                    c !== m ||
                    l !== y ||
                    _ !== O ||
                    S !== C ||
                    g !== E ||
                    s !== v
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
                    o = t.link,
                    i = t.messageId,
                    c = t.perspective,
                    s = t.position,
                    l = t.searchQuery,
                    u = t.unread,
                    d = this.state.showConfirmation,
                    p = (null == n ? void 0 : n.entries) || [],
                    f = a
                      ? p.find(function (e) {
                          return e.id === i
                        })
                      : Object(Ie.a)(p, function (e) {
                          return ![
                            $e.b.MESSAGE_DELETE,
                            $e.b.REACTION_DELETE,
                            $e.b.MESSAGE_MARK_AS_SPAM,
                            $e.b.MESSAGE_MARK_AS_NOT_SPAM,
                            $e.b.CONVO_METADATA_UPDATE,
                            $e.b.DISABLE_NOTIFICATIONS,
                            $e.b.ENABLE_NOTIFICATIONS,
                          ].includes(e.type)
                        }),
                    h = [Rt.root, u && !this._isVDLEnabled && Rt.unread],
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
                        y.createElement(qe.a, null, function (t) {
                          var i = t.isFocused,
                            u = t.isFocusedWithin,
                            d = t.isHovered
                          return y.createElement(
                            Ye.a,
                            {
                              accessibilityRole: 'tab',
                              accessibilityState: { selected: r },
                              link: {
                                pathname: null == o ? void 0 : o.pathname,
                                anchorless: !0,
                                state: ht(ht({}, null == o ? void 0 : o.state), {}, { position: s }),
                              },
                              onPress: e._handleOnClick,
                              style: h,
                              testID: Te,
                            },
                            y.createElement(
                              Xe.a,
                              {
                                avatarCell: y.createElement(X.a, {
                                  conversation: n,
                                  perspective: c,
                                  withBadge: v,
                                  withVDLRefresh: e._isVDLEnabled,
                                }),
                                avatarSize: _,
                              },
                              y.createElement(
                                Me.a,
                                { style: Rt.bodyColumn },
                                y.createElement(
                                  Me.a,
                                  { style: Rt.titleContainer },
                                  y.createElement(Q.b, {
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
                                    Me.a,
                                    { style: Rt.snippet },
                                    f && !O
                                      ? y.createElement(we, {
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
                                E ? y.createElement(Me.a, { style: Rt.endCell }, E) : null,
                                e._renderConversationActions({ isFocused: i, isFocusedWithin: u, isHovered: d }),
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
      v()(Ct, 'contextType', g.a),
        v()(Ct, 'defaultProps', {
          searchQuery: '',
          inboxType: 'primary',
          isActive: !1,
          filter: function (e) {
            return !0
          },
        })
      var Rt = Qe.a.create(function (e) {
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
            hiddenMenu: { opacity: 0, width: 0 },
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
        wt = Object(je.a)(Y(Ct), { page: 'messages', section: 'inbox' }),
        It =
          (n('LJOr'),
          n('tVqn'),
          n('Qavd'),
          n('JtPf'),
          n('uFXj'),
          n('M+/F'),
          function (e, t) {
            return t.module.selectItems(e)
          }),
        kt = function (e, t) {
          return t.module.selectFetchStatus(e)
        },
        xt = Object(E.a)()
          .propsFromState(function () {
            return { fetchStatus: kt, sliceItems: It }
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
              o = (function (e) {
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
              messageConversationIds: o,
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
        Pt = I.a.b08821f3,
        Tt = I.a.e047b8fa,
        At = Qe.a.create(function (e) {
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
        Mt = function (e) {
          var t = Object(je.b)(),
            n = e.clearRecentSearches,
            r = e.headerText,
            a = e.icon,
            o = e.isInboxLabelHeader,
            i = e.withClearButton
          y.useEffect(
            function () {
              t.scribe({ component: 'recent_search', action: 'impression' })
            },
            [t],
          )
          var c,
            s = [At.root, o && At.labelHeader]
          return y.createElement(
            Me.a,
            { style: s },
            y.createElement(
              Me.a,
              { style: At.iconContainer },
              (c = a) ? y.createElement(c, { style: At.icon }) : null,
              y.createElement(C.b, { size: 'headline1', weight: 'heavy' }, r),
            ),
            i
              ? y.createElement(
                  Ge.a,
                  { accessibilityLabel: Pt, onPress: n, style: At.backButton, type: 'onMediaWhiteFilled' },
                  Tt,
                )
              : null,
          )
        },
        jt = n('MDbM'),
        Dt = n('v//M'),
        Lt = n('0yYu'),
        Bt = n('lBmi'),
        Ft = n('91AQ'),
        Nt = n('6ZHn')
      function Ht(e) {
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
      var Ut = I.a.c94ac69d,
        Wt = I.a.a2f8105f,
        Vt = I.a.g2fd3205,
        zt = I.a.ffd9cfe6,
        Gt = (function (e) {
          u()(n, e)
          var t = Ht(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
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
                  o = t.renderEmptyState,
                  i = a.length && n.length,
                  c = e._groupBucketSize < n.length,
                  s = e._messagesBucketSize < r.length,
                  l = e._peopleBucketSize < a.length
                return (null == n ? void 0 : n.length) || a.length || r.length
                  ? y.createElement(
                      y.Fragment,
                      null,
                      a.length ? e._renderPeopleSection() : null,
                      i && !l ? y.createElement(Lt.a, null) : null,
                      l ? e._renderDMSearchFooter(Vt) : null,
                      n.length ? e._renderGroupsSection() : null,
                      c ? e._renderDMSearchFooter(Ut) : null,
                      r.length ? e._renderMessagesSection() : null,
                      s ? e._renderDMSearchFooter(Wt) : null,
                    )
                  : o()
              }),
              v()(s()(e), '_handleFetch', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchSearchIfNeeded)().catch(n())
              }),
              v()(s()(e), '_renderDMSearchFooter', function (t) {
                var n = e.props.location
                return y.createElement(
                  Me.a,
                  { style: Kt.header },
                  y.createElement(C.b, { link: { pathname: n.pathname, state: { tab: t } } }, zt),
                )
              }),
              v()(s()(e), '_renderDMHeader', function (e) {
                var t = e.headerText,
                  n = e.icon
                return y.createElement(Mt, { headerText: t, icon: n })
              }),
              v()(s()(e), '_renderGroupsSection', function () {
                var t = e.props,
                  n = t.groupConversationIds,
                  r = t.renderInboxItem
                return y.createElement(
                  y.Fragment,
                  null,
                  e._renderDMHeader({ icon: Bt.a, headerText: Ut }),
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
                  e._renderDMHeader({ icon: Ft.a, headerText: Wt }),
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
                  e._renderDMHeader({ icon: Nt.a, headerText: Vt }),
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
            i()(n, [
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t = this.props,
                    n = t.fetchStatus,
                    r = t.module
                  e.module !== r && n !== jt.a.FAILED && this._handleFetch()
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
                  return y.createElement(Dt.a, {
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
      v()(Gt, 'contextType', g.a)
      var Kt = Qe.a.create(function (e) {
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
        qt = xt(Gt),
        Yt = n('wAC9'),
        Xt = (n('1IsZ'), n('IAdD'), n('xPna'))
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
      var Jt = function (e) {
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
          null != e && e.entries && (r = Zt(Zt({}, r), {}, { entries: null == e ? void 0 : e.entries })),
          Object(Xt.a)(r)
        )
      }
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
        nn = function (e) {
          return Object(Yt.a)({
            contextSuffix: 'DM_SEARCH_SLICE',
            getFetchApiEndpoint: function (e) {
              return e.DirectMessagesGraphQL.fetchDMAllSearch
            },
            sliceKey: ''.concat(Je.e, '-').concat(e),
            getEndpointParams: function (t) {
              return en(en({}, t), {}, { query: e })
            },
            mapEntitiesToActions: Jt,
          })
        },
        rn = function (e, t) {
          return t.query
        },
        an = Object(E.a)().propsFromState(function () {
          return {
            sliceModule: Object(U.createSelector)(rn, function (e) {
              return e ? nn(e) : void 0
            }),
          }
        })(function (e) {
          var t = e.loadingLabel,
            n = e.location,
            r = e.query,
            a = e.renderEmptyState,
            o = e.renderInboxItem,
            i = e.sliceModule
          return i
            ? y.createElement(qt, {
                loadingLabel: t,
                location: n,
                module: i,
                query: r,
                renderEmptyState: a,
                renderInboxItem: o,
              })
            : a()
        }),
        on = A.selectRecentSearches,
        cn = function (e, t) {
          return t.query ? A.selectSearchConversations(e, t.query) : []
        },
        sn = function (e, t) {
          return t.query ? A.selectSearchFetchStatus(e, t.query) : M.a.LOADED
        },
        ln = function (e, t) {
          return t.conversationIds || []
        },
        un = function (e, t) {
          return null != e && e.length
            ? t.filter(function (t) {
                return e.indexOf(t) > -1
              })
            : e
        },
        dn = Object(E.a)()
          .propsFromState(function () {
            return { conversationIds: ln, recentSearches: on, searchFetchStatus: sn, searchConversationIds: cn }
          })
          .adjustStateProps(function (e) {
            var t = e.conversationIds,
              n = e.recentSearches,
              r = e.searchConversationIds
            return {
              conversationIds: t,
              recentSearches: n,
              searchFetchStatus: e.searchFetchStatus,
              searchConversationIds: un(r, t),
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
        pn = n('VY6S'),
        fn = n('s14A'),
        hn = n('VPW4'),
        mn = (n('enFi'), n('mN6z')),
        vn = n('TEoO'),
        yn = n('NjAB'),
        bn = n('Fr3L'),
        gn = n('uDfI'),
        _n = n('DQzJ'),
        En = n('h3MB')
      function On(e, t) {
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
      function Sn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? On(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : On(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var Cn = void 0 !== tn ? tn : (tn = n('y59G')),
        Rn = 'DM_MESSAGE_SEARCH',
        wn = { context: Rn },
        In = function (e) {
          return e
        },
        kn = function (e) {
          var t,
            n,
            r,
            a,
            o,
            i = e.footer,
            c = e.noItemsRenderer,
            s = e.onScrollEnd,
            l = e.renderInboxItem,
            u = e.searchTerm,
            d = Object(gn.c)(),
            p = Object(_n.a)(Cn, { query: u }, wn),
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
            g = Object(yn.b)(b, [En.a]),
            _ = Object(yn.b)(v, [En.b]),
            E = Sn(Sn({}, null == g ? void 0 : g.entities), null == _ ? void 0 : _.entities),
            O =
              ((a = f),
              (o = y.useRef()),
              y.useEffect(function () {
                o.current = a
              }),
              o.current)
          return (
            y.useEffect(
              function () {
                Object(mn.a)(f, O) || d(Jt(E, !0))
              },
              [E, f, O, d],
            ),
            y.createElement(vn.a, {
              cacheKey: Rn,
              footer: m ? null : i,
              identityFunction: In,
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
        xn = Qe.a.create(function (e) {
          return { activityIndicatior: { paddingVertical: 250 } }
        })
      function Pn(e) {
        return y.createElement(
          bn.a,
          { errorConfig: wn },
          y.createElement(
            y.Suspense,
            { fallback: y.createElement(hn.a, { style: xn.activityIndicatior }) },
            y.createElement(kn, e),
          ),
        )
      }
      var Tn = n('j7Bv'),
        An = n('VwDm'),
        Mn = n('hOZg')
      function jn(e) {
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
      var Dn = I.a.dbd5d40f,
        Ln = (function (e) {
          u()(n, e)
          var t = jn(n)
          function n() {
            return a()(this, n), t.apply(this, arguments)
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.clearRecentSearch,
                    n = e.handleRecentSearchClick,
                    r = e.recentSearch,
                    a = y.createElement(Tn.a, { Icon: An.a, color: 'neutral', size: 'xLarge', style: Bn.searchIcon }),
                    o = [Bn.listItemView, Bn.bottomBorder]
                  return y.createElement(
                    Ye.a,
                    { onPress: n, style: o },
                    y.createElement(
                      Me.a,
                      null,
                      y.createElement(
                        Xe.a,
                        { avatarCell: a, avatarSize: 'xLarge', cellStyle: Bn.avatarColumn },
                        y.createElement(
                          Me.a,
                          { style: Bn.container },
                          y.createElement(C.b, { numberOfLines: 1 }, r),
                          y.createElement(Ge.a, {
                            accessibilityLabel: Dn,
                            borderColor: 'transparent',
                            icon: y.createElement(Mn.a, null),
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
        Bn = Qe.a.create(function (e) {
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
        Fn = Ln
      function Nn(e, t) {
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
      function Hn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Nn(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Nn(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var Un = function (e) {
        return Object(Yt.a)({
          contextSuffix: 'DM_GROUP_SEARCH_SLICE',
          getFetchApiEndpoint: function (e) {
            return e.DirectMessagesGraphQL.fetchDMGroupSearch
          },
          sliceKey: ''.concat(Je.e, '-groups-').concat(e),
          getEndpointParams: function (t) {
            return Hn(Hn({}, t), {}, { query: e })
          },
          mapEntitiesToActions: Jt,
        })
      }
      function Wn(e, t) {
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
      function Vn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Wn(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Wn(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var zn = function (e) {
          return Object(Yt.a)({
            contextSuffix: 'DM_PEOPLE_SEARCH_SLICE',
            getFetchApiEndpoint: function (e) {
              return e.DirectMessagesGraphQL.fetchDMPeopleSearch
            },
            sliceKey: ''.concat(Je.e, '-people-').concat(e),
            getEndpointParams: function (t) {
              return Vn(Vn({}, t), {}, { query: e })
            },
            mapEntitiesToActions: Jt,
          })
        },
        Gn = function (e, t) {
          return t.query
        },
        Kn = function (e, t) {
          return t.tabType
        },
        qn = Object(E.a)().propsFromState(function () {
          return {
            sliceModule: Object(U.createSelector)(Kn, Gn, function (e, t) {
              var n = t && e === Je.f.PEOPLE
              return t && e === Je.f.GROUPS ? Un(t) : n ? zn(t) : void 0
            }),
          }
        }),
        Yn = n('FS1z'),
        Xn = qn(function (e) {
          var t = e.footer,
            n = e.onScrollEnd,
            r = e.renderEmptyState,
            a = e.renderInboxItem,
            o = e.sliceModule
          return o
            ? y.createElement(Yn.a, {
                footer: t,
                module: o,
                noItemsRenderer: r,
                onScrollEnd: n,
                renderer: a({ conversationIds: [] }),
                withoutHeadroom: !0,
              })
            : r()
        }),
        Qn = n('VPAj')
      function Zn(e, t) {
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
      function Jn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Zn(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Zn(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var $n = Jn(
          Jn({}, n('7n04').a),
          {},
          { initialScrollHeadroom: Object(Qn.a)(0), scrollHeadroom: Object(Qn.a)(0), pinToNewestWhenAtNewest: !0 },
        ),
        er = n('IG4P'),
        tr = n('RJrc'),
        nr = n('TnY3'),
        rr = n('FIs5'),
        ar = n('6OUF'),
        or = n('k/OQ'),
        ir = n('95Se')
      function cr(e, t) {
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
      function sr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? cr(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : cr(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function lr(e) {
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
      var ur = 'dmSearchInbox',
        dr = function (e) {
          return e
        },
        pr = I.a.b08821f3,
        fr = I.a.a66ac766,
        hr = I.a.fe61929d,
        mr = I.a.a846382a,
        vr = I.a.b9dae4f4,
        yr = I.a.e7fb2027,
        br = I.a.b92a21d8,
        gr = I.a.jdc67c42,
        _r = I.a.e8581ccd,
        Er = I.a.f08940ab,
        Or = I.a.gaae1fd5,
        Sr = I.a.f8321d82,
        Cr = I.a.c94ac69d,
        Rr = I.a.a2f8105f,
        wr = I.a.g2fd3205,
        Ir = I.a.fb3c8e74,
        kr = (function (e) {
          u()(n, e)
          var t = lr(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
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
                    y.createElement(rr.a, {
                      buttonLink: '/messages/compose',
                      buttonText: Er,
                      header: br({ query: a }),
                      message: e._messageSearchEnabled ? _r : gr,
                      onButtonPress: e._handleComposeButtonPress,
                    }))
                  : y.createElement(
                      Me.a,
                      { style: xr.emptyState },
                      y.createElement(C.b, { align: 'center', color: 'gray700' }, Or),
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
                      y.createElement(Mt, {
                        analytics: n,
                        clearRecentSearches: e._clearRecentSearches,
                        headerText: Ir,
                        withClearButton: !0,
                      }),
                      a.map(function (t) {
                        return y.createElement(Fn, {
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
                  ? y.createElement(an, {
                      loadingLabel: fr,
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
                return y.createElement(Xn, {
                  footer: e._renderFooter(),
                  onScrollEnd: e._handleScrollEnd,
                  query: r,
                  renderEmptyState: e._renderEmptyDMSearchInbox,
                  renderInboxItem: n,
                  tabType: t ? Je.f.GROUPS : Je.f.PEOPLE,
                })
              }),
              v()(s()(e), '_renderMessagesTab', function () {
                var t = e.props.renderInboxItem,
                  n = e.state.debouncedQuery
                return n
                  ? y.createElement(Pn, {
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
                  case wr:
                    return e._renderConversationsTab(!1)
                  case Cr:
                    return e._renderConversationsTab(!0)
                  case Rr:
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
                  o = e.state.isRefreshing
                return y.createElement(
                  fn.a,
                  null,
                  y.createElement(
                    er.a,
                    { isRefreshing: o, onRefresh: e._handlePullToRefresh },
                    y.createElement(vn.a, {
                      accessibilityRole: 'tablist',
                      accessibilityTitle: n,
                      anchoring: $n,
                      assumedItemHeight: 100,
                      cacheKey: ur,
                      footer: e._renderFooter(),
                      identityFunction: dr,
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
                  ? y.createElement(tr.a, null)
                  : y.createElement(
                      Me.a,
                      { style: xr.footerContainer },
                      y.createElement(C.b, { align: 'center', size: 'body', weight: 'bold' }, yr),
                      y.createElement(
                        qe.a,
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
                          vr,
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
                  o = e.state.debouncedQuery
                a &&
                  o &&
                  (n.scribe({ component: 'search', element: 'retry', action: 'click' }),
                  a({ query: o.toLowerCase(), preserveResults: !1, fetchNextPage: !1 }).catch(r()))
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
                  o = n.search
                a(t),
                  e.setState({ debouncedQuery: t }),
                  o &&
                    t &&
                    !e._modularSearchEnabled &&
                    o({ query: t, preserveResults: !1, fetchNextPage: !1 }).catch(r())
              }),
              v()(s()(e), '_handleSearchChangeDebounced', Object(pn.a)(e._handleSearchChangeInner, 200)),
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
                  o = r.analytics
                n &&
                  (a(n),
                  o.scribe({ component: 'recent_search', action: 'add' }),
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
                  o = r.clearRecentSearch
                t.stopPropagation(), t.preventDefault(), a.scribe({ component: 'recent_search', action: 'clear' }), o(n)
              }),
              e
            )
          }
          return (
            i()(n, [
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
                    o = [xr.searchInput, a ? xr.searchInputBorder : void 0],
                    i = ((null == t ? void 0 : t.state) || {}).tab,
                    c = [Sr, wr, Cr]
                  this._messageSearchEnabled && c.push(Rr)
                  var s = c.map(function (e) {
                    return {
                      key: e,
                      label: e,
                      isActive: function () {
                        return i === e || (!i && e === Sr)
                      },
                      to: sr(sr({}, t), {}, { state: sr(sr({}, t.state), {}, { tab: e }) }),
                    }
                  })
                  return y.createElement(
                    y.Fragment,
                    null,
                    y.createElement(
                      Me.a,
                      { style: o },
                      y.createElement(Ge.a, {
                        accessibilityLabel: pr,
                        icon: y.createElement(ir.a, null),
                        onPress: this._handleHideRecentSearches,
                        pullLeft: !0,
                        type: 'primaryText',
                      }),
                      y.createElement(ar.a, {
                        Icon: An.a,
                        autoComplete: 'off',
                        onChange: this._handleSearchChange,
                        onClear: this._handleSearchClear,
                        onSubmitEditing: this._handleAddRecentSearch,
                        placeholder: this._messageSearchEnabled ? mr : hr,
                        ref: this._setInputRef,
                        value: n,
                        withClearButton: !0,
                      }),
                    ),
                    this._modularSearchEnabled && (n || i === wr || i === Cr)
                      ? y.createElement(y.Fragment, null, y.createElement(or.a, { links: s }), this._renderTabContent())
                      : y.createElement(Dt.a, {
                          accessibilityLabel: fr,
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
      v()(kr, 'contextType', g.a), v()(kr, 'defaultProps', { recentSearches: [], searchConversationIds: [], query: '' })
      var xr = Qe.a.create(function (e) {
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
        Pr = Object(nr.a)(dn(kr)),
        Tr = n('dwig'),
        Ar = n('QB0K'),
        Mr = n('Avzu'),
        jr = n('FRNI')
      function Dr(e) {
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
      var Lr = I.a.h845f281,
        Br = I.a.f325afc3,
        Fr = (function (e) {
          u()(n, e)
          var t = Dr(n)
          function n() {
            return a()(this, n), t.apply(this, arguments)
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  return y.createElement(Ar.a, {
                    accessibilityLabel: Lr,
                    href: '/messages/compose',
                    icon: y.createElement(Mr.a, null),
                    label: Lr,
                    scribeComponent: 'floating_dm_button',
                    shortLabel: Br,
                    testID: jr.a.message,
                  })
                },
              },
            ]),
            n
          )
        })(y.PureComponent),
        Nr = n('tI3i'),
        Hr = n.n(Nr),
        Ur = n('883S'),
        Wr = n('yoO3'),
        Vr = n('GSsg'),
        zr = n('2g+p'),
        Gr = n('mw9i'),
        Kr = n('BcsE'),
        qr = n('+d3d')
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
      var Xr = function (e) {
          return e
        },
        Qr = I.a.a66ac766,
        Zr = I.a.fe61929d,
        Jr = I.a.a846382a,
        $r = (function (e) {
          u()(n, e)
          var t = Yr(n)
          function n(e, r) {
            var o
            return (
              a()(this, n),
              (o = t.call(this, e, r)),
              v()(s()(o), 'state', { showSearchView: !1, searchQuery: '' }),
              v()(
                s()(o),
                '_messageSearchEnabled',
                o.context.featureSwitches.isTrue('dm_inbox_search_message_results_enabled'),
              ),
              v()(
                s()(o),
                '_modularSearchEnabled',
                o.context.featureSwitches.isTrue('dm_inbox_search_modular_results_enabled'),
              ),
              v()(s()(o), '_render', function () {
                return o.state.showSearchView ? o._renderFocusedSearch() : o._renderInbox()
              }),
              v()(s()(o), '_renderFocusedSearch', function () {
                var e = o.props,
                  t = e.accessibilityTitle,
                  n = e.analytics,
                  r = e.conversationIds,
                  a = o.state.searchQuery
                return y.createElement(Pr, {
                  accessibilityTitle: t,
                  analytics: n,
                  conversationIds: r,
                  hideRecentSearches: o._hideRecentSearches,
                  onQueryChange: o._handleQueryChange,
                  query: a,
                  renderInboxItem: o._renderInboxItem,
                })
              }),
              v()(s()(o), '_renderInbox', function () {
                var e = o.props,
                  t = e.accessibilityTitle,
                  n = e.conversationIds,
                  r = e.footer,
                  a = e.isDrawer,
                  i = e.isRefreshing,
                  c = e.renderEmptyDMInbox,
                  s = e.renderStickyContent,
                  l = e.virtualScrollerCacheKey,
                  u = e.withDmSearch,
                  d =
                    o.context.featureSwitches.isTrue('dm_vdl_enabled') &&
                    o.context.featureSwitches.isTrue('dm_vdl_inbox_p0_enabled'),
                  p = [ea.searchInput, d ? void 0 : ea.searchInputBorder],
                  f = y.createElement(
                    y.Fragment,
                    null,
                    u
                      ? y.createElement(
                          Me.a,
                          { onClick: o._handleSearchClick, style: p },
                          y.createElement(ar.a, {
                            Icon: An.a,
                            autoComplete: 'off',
                            isCompact: !0,
                            onChange: o._handleSearchChange,
                            placeholder: o._messageSearchEnabled ? Jr : Zr,
                            withClearButton: !0,
                          }),
                        )
                      : null,
                    s ? s() : null,
                  )
                return y.createElement(
                  er.a,
                  { isRefreshing: i, onRefresh: o._handlePullToRefresh },
                  l && n
                    ? y.createElement(vn.a, {
                        accessibilityRole: 'tablist',
                        accessibilityTitle: t,
                        anchoring: $n,
                        assumedItemHeight: 100,
                        cacheKey: l,
                        footer: r,
                        header: f,
                        identityFunction: Xr,
                        items: n,
                        noItemsRenderer: c,
                        onNearEnd: o._handleNearEnd,
                        renderer: o._renderInboxItem({ conversationIds: n }),
                        withKeyboardShortcuts: !a,
                        withoutHeadroom: !0,
                      })
                    : null,
                )
              }),
              v()(s()(o), '_handleNearEnd', function () {
                o._handleHistoryRequest()
              }),
              v()(s()(o), '_handleQueryChange', function (e) {
                o.setState({ searchQuery: e })
              }),
              v()(s()(o), '_handleSearchChange', function (e) {
                e.currentTarget.value
                o.state.showSearchView || o.setState({ showSearchView: !0 })
              }),
              v()(s()(o), '_handleSearchClick', function () {
                o.props.analytics.scribe({ component: 'search', action: 'click' }), o.setState({ showSearchView: !0 })
              }),
              v()(s()(o), '_hideRecentSearches', function () {
                o.setState({ showSearchView: !1, searchQuery: '' })
              }),
              v()(s()(o), '_renderInboxItem', function (e) {
                var t = e.conversationIds,
                  n = e.isMessageItem,
                  r = void 0 !== n && n,
                  a = e.messageIds
                return function (e, n) {
                  var i = o.context.loggedInUserId,
                    c = o.props.location,
                    s = o.state.searchQuery,
                    l = r ? (a || []).indexOf(e) : -1,
                    u = -1 !== l && null != t && t.length ? t[l] : null,
                    d = u ? e : '',
                    p = u || e,
                    f = { pathname: '/messages/'.concat(p), state: null == c ? void 0 : c.state },
                    h = p && null != t && t.length ? t.indexOf(p) : null,
                    m = Object(Kr.a)(h) ? h + 1 : 0
                  return (
                    Hr()(!!i, 'loggedInUserId must be defined'),
                    n && n(!0),
                    y.createElement(b.a, { exact: !1, path: f.pathname }, function (e) {
                      return y.createElement(wt, {
                        conversationId: p,
                        inboxType: o.props.inboxType,
                        isActive: e,
                        isMessageItem: r,
                        key: p,
                        link: f,
                        messageId: d,
                        onClick: o._handleConversationClick,
                        perspective: i,
                        position: m,
                        searchQuery: s,
                      })
                    })
                  )
                }
              }),
              v()(s()(o), '_handleFetchInitialWrapper', function () {
                o._handleFetchInitial()
              }),
              v()(s()(o), '_handleFetchInitial', function () {
                var e = o.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.fetchInboxIfNeeded,
                  r = e.fetchUpdates
                return n()
                  .then(o._updateLastSeenEventId, t())
                  .then(function () {
                    o._updatePolling.start()
                  })
                  .then(function () {
                    return r().catch(t())
                  })
              }),
              v()(s()(o), '_handleConversationClick', function (e, t, n, r) {
                var a = o.props,
                  i = a.analytics,
                  c = a.customCellClick,
                  s = null != n && n.participants ? Object.keys(n.participants).length : 0,
                  l = (null == n ? void 0 : n.type) === A.CONVERSATION_TYPE.GROUP
                i.scribe({
                  element: 'thread',
                  action: 'click',
                  data: {
                    event_value: o.state.searchQuery.length,
                    conversation_id: t,
                    conversation_participant_count: s,
                    conversation_type: l ? Je.g.GROUP : Je.g.ONE_TO_ONE,
                    position: r,
                  },
                }),
                  c && c(e, t)
              }),
              v()(s()(o), '_handleEmptyDMInboxImpression', function () {
                o.props.analytics.scribe({ component: 'empty_message', action: 'impression' })
              }),
              v()(s()(o), '_handlePullToRefresh', function () {
                var e = o.props,
                  t = e.createLocalApiErrorHandler
                ;(0, e.fetchInbox)().then(o._updateLastSeenEventId, t())
              }),
              v()(s()(o), '_updateLastSeenEventIdIfActive', function () {
                if ('background' !== zr.a.currentState) return o._updateLastSeenEventId()
              }),
              v()(s()(o), '_updateLastSeenEventId', function () {
                var e = o.props,
                  t = e.createLocalApiErrorHandler
                return (0, e.updateLastSeenEventId)().catch(t())
              }),
              (o._fab = y.createElement(Fr, null)),
              o
            )
          }
          return (
            i()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.createLocalApiErrorHandler,
                    r = t.fetchInboxHistory,
                    a = t.fetchUpdates
                  return (
                    (this._updatePolling = new Vr.a(
                      function () {
                        a().then(e._updateLastSeenEventIdIfActive, n(Ur.a))
                      },
                      { interval: 8e3 },
                    )),
                    (this._handleHistoryRequest = Object(qr.a)(function () {
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
                    Wr.a,
                    null,
                    y.createElement(T, null),
                    y.createElement(
                      Tr.a,
                      { component: Gr.a, fab: this._fab, style: ea.root },
                      y.createElement(Dt.a, {
                        accessibilityLabel: Qr,
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
      v()($r, 'contextType', g.a),
        v()($r, 'defaultProps', { conversationIds: [], inboxType: Pe.c.PRIMARY, isDrawer: !1, withDmSearch: !1 })
      var ea = Qe.a.create(function (e) {
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
      t.a = Object(nr.a)(D($r))
    },
    prG5: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return P
      })
      n('OZaJ')
      var r = n('97Jx'),
        a = n.n(r),
        o = n('m3Bd'),
        i = n.n(o),
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
        R = 'image',
        w = n('TIdA'),
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
      var x = C.a.f93bb3ee,
        P = (function (e) {
          h()(n, e)
          var t = k(n)
          function n() {
            var e
            s()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              _()(p()(e), '_renderContent', function (t) {
                var n = t.resourceSelectionHandler,
                  r = t.useMinimumData,
                  o = e.props,
                  c = o.accessibilityLabel,
                  s = (o.hideAcceptOverlay, o.shouldShowAltLabel),
                  l = i()(o, ['accessibilityLabel', 'hideAcceptOverlay', 'shouldShowAltLabel'])
                return E.createElement(
                  E.Fragment,
                  null,
                  E.createElement(
                    w.a,
                    a()({}, l, { accessibilityLabel: c, onVariantSelection: n, previewMode: r, testID: R }),
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
                    acceptLabel: x,
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
    tZH3: function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        a = n('3XMw'),
        o = n.n(a),
        i = n('MWbm'),
        c = n('CKsB'),
        s = n('/yvb'),
        l = n('rHpw'),
        u = n('hiGS'),
        d = n('pu5c'),
        p = n('zIWA'),
        f = o.a.fcd4d489,
        h = o.a.gbed8594,
        m = o.a.g9074da4,
        v = o.a.ad63377d,
        y = o.a.h09b49f7,
        b = o.a.i6b19b07,
        g = o.a.j7bb1a42,
        _ = o.a.ea200ba6,
        E = o.a.cfd2f35d,
        O = function (e) {
          var t = e.dismiss,
            n = e.flatBorders,
            a = e.isGroup,
            o = e.onBlockClick,
            l = e.onDeleteClick,
            O = e.onReportClick,
            C = e.requestorScreenName,
            R = e.showBlock,
            w = e.showCancel,
            I = e.showDelete,
            k = r.useCallback(
              function () {
                O && O(), t()
              },
              [t, O],
            ),
            x = r.useCallback(
              function () {
                o && o(), t()
              },
              [t, o],
            ),
            P = r.useCallback(
              function () {
                l && l(), t()
              },
              [t, l],
            )
          return r.createElement(
            i.a,
            { accessibilityRole: 'dialog', style: n ? S.flatCorners : S.roundCorners },
            I
              ? r.createElement(c.a, {
                  Icon: u.a,
                  actionSubText: y,
                  actionText: a ? m : v,
                  onClick: P,
                  textColor: 'red500',
                })
              : null,
            R
              ? r.createElement(c.a, { Icon: d.a, actionSubText: h, actionText: f({ screenName: C }), onClick: x })
              : null,
            r.createElement(c.a, { Icon: p.a, actionSubText: _, actionText: a ? b : g({ screenName: C }), onClick: k }),
            w ? r.createElement(s.a, { onPress: t, style: S.cancelButton, type: 'primaryOutlined' }, E) : null,
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
        o = n('VrFO'),
        i = n.n(o),
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
        R = Object(C.a)()
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
        w = n('wpu3'),
        I = n('cOB2'),
        k = n('MWbm'),
        x = n('0FVZ'),
        P = n('Oe3h'),
        T = n('rHpw')
      var A = function (e) {
          var t = e.accessibilityLabel,
            n = e.accessibilityRole,
            r = e.children,
            o = e.onLayout,
            i = e.sideNavPresent,
            c = e.style,
            s = g.useContext(I.a)
          return i
            ? g.createElement(
                g.Fragment,
                null,
                g.createElement(k.a, { accessibilityLabel: t, accessibilityRole: n, onLayout: o, style: c }, r),
              )
            : g.createElement(
                x.a.BottomComposer,
                null,
                g.createElement(P.a, { id: 'DMComposerWrapper' }, function (e, i) {
                  return g.createElement(
                    k.a,
                    a()({ ref: e() }, i({ accessibilityLabel: t, accessibilityRole: n, onLayout: o, style: c })),
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
      function B(e) {
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
      var F = (function (e) {
          p()(n, e)
          var t = B(n)
          function n() {
            var e
            i()(this, n)
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
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
        H = F,
        U = n('cHvH'),
        W = n('mw9i')
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
            var a = v()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      var z = (function (e) {
          p()(n, e)
          var t = V(n)
          function n() {
            var e
            i()(this, n)
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
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
                      o = j.a.isTwoColumnLayout(a),
                      i = [o && G.isWide, o && n && G.oneButtonOnly, !o && G.isNarrow]
                    return g.createElement(
                      W.a,
                      { style: i, withGutter: o },
                      t.map(function (t) {
                        return e.renderOption(t, o)
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
        G = T.a.create(function (e) {
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
        K = z,
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
            r = v()(e)
          if (t) {
            var a = v()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      var ie = [
          { waitMs: 1e3, progress: 0.1 },
          { waitMs: 1400, progress: 0.3 },
          { waitMs: 1800, progress: 0.5 },
          { waitMs: 2400, progress: 0.6 },
          { waitMs: 3e3, progress: 0.9 },
        ],
        ce = (function (e) {
          p()(n, e)
          var t = oe(n)
          function n() {
            var e
            i()(this, n)
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
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
                    t = e >= 0 && e < ie.length ? ie[e].progress : 0
                  return g.createElement(ae.a, { progress: t })
                },
              },
              {
                key: '_scheduleNextStep',
                value: function (e) {
                  var t = this
                  e < ie.length &&
                    (this._currentTimeoutId = setTimeout(function () {
                      ;(t._currentTimeoutId = void 0), t.setState({ currentStepIndex: e }), t._scheduleNextStep(e + 1)
                    }, ie[e].waitMs))
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
            return i()(this, n), t.apply(this, arguments)
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
      function Re(e) {
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
      var we = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(Se.a)(
          'svg',
          Re(
            Re({}, e),
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
      we.metadata = { width: 24, height: 24 }
      var Ie = we
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
      function xe(e) {
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
      var Pe = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(Se.a)(
          'svg',
          xe(
            xe({}, e),
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
      Pe.metadata = { width: 24, height: 24 }
      var Te = Pe,
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
        Be = J.a.ca0ce0e4,
        Fe = J.a.cdcebd22,
        Ne = J.a.ic8c615d,
        He = J.a.a04077c4,
        Ue = function (e) {
          return !(!e || !e.media)
        },
        We = Object(w.b)({ maxNumberOfPhotos: 1 }),
        Ve = (function (e) {
          p()(n, e)
          var t = De(n)
          function n(e, r) {
            var o, c, s
            i()(this, n),
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
                  ? g.createElement(K, { onOptionChoose: s._handleQROptionSelection, quickReplyOptions: e })
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
                  o = t.richTextInputContext,
                  i = ve.b.isKaiOS() ? Fe : r || Be,
                  c = s.state,
                  l = c.editorState,
                  u = c.mediaButtonsCollapsible,
                  d = c.value,
                  p = !!o,
                  f = o ? { editorState: l, element: o.element } : void 0,
                  h = o
                    ? {
                        onChange: s._getHandleRichTextChange(e),
                        richTextInputContext: { editorState: l, element: o.element },
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
                      placeholder: i,
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
                  o = e.isUploading,
                  i = s.state.value,
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
                  m = Object(Ee.b)(i)
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
                              withCloseButton: !o,
                              withEditButton: (s._canEditImage || s._canEditVideo) && !o,
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
              b()(u()(s), '_renderActionButton', function (e) {
                var t = s.props,
                  n = t.primaryActionIcon,
                  r = t.primaryActionLabel,
                  a = t.quickReplyOptions,
                  o = s._hasMessageText()
                return !a || o || e
                  ? g.createElement(
                      ge.a,
                      {
                        accessibilityLabel: r,
                        disabled: s._isSendDisabled(),
                        hoverLabel: { label: r },
                        icon: n || void 0,
                        onPress: s._handleSend,
                        size: 'medium',
                        testID: he,
                        type: n ? 'brandText' : 'brandFilled',
                      },
                      n ? null : r,
                    )
                  : s._renderQRToggleButton()
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
                  r = s._renderActionButton(t)
                return g.createElement(
                  k.a,
                  { style: [ze.composer, t && ze.composerWithAttachment] },
                  t ? null : s._renderMediaButtons(),
                  n,
                  r,
                )
              }),
              b()(u()(s), '_renderMediaButtons', function () {
                var e = s.props,
                  t = e.withGifPicker,
                  n = e.withMediaPicker,
                  r = s.state,
                  a = r.mediaButtonsCollapsed,
                  o = r.mediaButtonsCollapsible && a
                return g.createElement(
                  k.a,
                  { style: ze.uploadButtons },
                  o
                    ? g.createElement(ge.a, {
                        accessibilityLabel: Le,
                        icon: g.createElement(Ae.a, null),
                        onMouseDown: s._handleShowMediaControlsMouseDown,
                        type: 'brandText',
                      })
                    : null,
                  n && !o ? s._renderMediaPicker() : null,
                  t && !o ? s._renderGifButton() : null,
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
                  o = t.shiftKey,
                  i = 'Enter' === r
                return !s.state.isTypeaheadActive && i && s._keyboardOrMouseDetected && !(o || a || n)
                  ? (e.preventDefault(), s._handleSend(e), 'handled')
                  : 'not-handled'
              }),
              b()(u()(s), '_handleClickMediaDetail', function () {
                var e = s.props,
                  t = e.attachment,
                  n = e.conversationId,
                  r = e.history
                if (s._canEditImage || s._canEditVideo) {
                  var a = t && t.media ? t.media.id : 0,
                    o = s._canEditVideo ? 'trimmer' : 'crop'
                  r.push('/messages/compose/media', { mediaId: a, conversationId: n, tab: o })
                }
              }),
              b()(u()(s), '_handleAddMediaFiles', function (e) {
                var t = s.props,
                  n = t.addMedia,
                  r = t.addToast,
                  a = t.dataSaverMode,
                  o = t.onAddMedia,
                  i = t.preUploadMedia,
                  c = t.processMultipleMedia,
                  l = t.removeMedia,
                  u = t.removeMediaUpload
                n(e, { location: ne.d.Dm }).then(function (e) {
                  var t = e.map(function (e) {
                    return e.id
                  })
                  s._validateMedia(e)
                    ? (o && o(t),
                      c(e, { onFailure: l }).then(function (e) {
                        a ||
                          i(
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
              b()(u()(s), '_handleSend', function (e) {
                if (!s._isSendDisabled()) {
                  var t = s.props.onPrimaryAction
                  s._textInput &&
                    s._textInput.applyFinalValue(function (e) {
                      t({ type: 'richText' }, e)
                    }),
                    s._closeQuickReplyPicker()
                }
              }),
              b()(u()(s), '_handleRichTextChange', function (e) {
                var t = s.props,
                  n = t.onTyping,
                  r = t.richTextInputContext,
                  a = s.state.value,
                  o = e.getCurrentContent().getPlainText(),
                  i = r ? r.convertEmojiToEntities(e) : null
                s.setState({ editorState: i, value: o }), a !== o && (null == n || n())
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
                return !Ue(s.props.attachment) && We(e)
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
                  o = Ue(t),
                  i = s._hasMessageText() || n,
                  c = !(!t || !t.media) && (t.media.needsProcessing || a)
                return r || (!i && !o) || c || a
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
                    (o = null == d || null === (c = d.initEditorState) || void 0 === c ? void 0 : c.call(d, l)) &&
                  void 0 !== o
                    ? o
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
                    o = e.placeholderText,
                    i = e.style,
                    c = o || Be,
                    s = Object(de.a)(),
                    l = s && t && (t.dtabAll || t.ttsToken) && !t.hide
                  return g.createElement(
                    A,
                    {
                      accessibilityLabel: c,
                      accessibilityRole: 'complementary',
                      onLayout: this._handleLayout,
                      sideNavPresent: s,
                      style: [ze.root, l && ze.dtabOffset, i],
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
      b()(Ve, 'contextType', _e.a),
        b()(Ve, 'defaultProps', { prefillText: '', withEmojiPicker: !0, withGifPicker: !0, withMediaPicker: !0 })
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
      t.a = R.forwardRef(Ve)
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
        o = n('hqKg'),
        i = n('zh9S'),
        c = n('H9MA'),
        s = n('oEGd'),
        l = function (e, t) {
          return t.match.params.entryId
        },
        u = Object(o.createSelector)(
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
              o = null == t || null === (a = t.message_data) || void 0 === a ? void 0 : a.attachment
            return {
              conversationId: n,
              mediaItem:
                (null == o ? void 0 : o.photo) ||
                (null == o ? void 0 : o.animated_gif) ||
                (null == o ? void 0 : o.video) ||
                void 0,
              messageId: e,
              dataSaver: r,
            }
          },
        ),
        d = { scribeAction: i.c },
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
            o = e.mediaItem,
            i = e.messageId,
            c = Object(b.b)(o),
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
                o || a.replace(t ? '/messages/'.concat(t) : '/messages')
              },
              [a, t, o],
            ),
            o
              ? r.createElement(
                  m.a.Configure,
                  { headerless: !0 },
                  r.createElement(
                    h.a,
                    { backgroundColor: c, hideButtons: d, mediaItem: o, onCloseButtonPress: p },
                    r.createElement(f.a, {
                      dataSaver: n,
                      mediaItems: [o],
                      onDismiss: p,
                      onMediaDetailZoomed: l,
                      onTap: u,
                      videoId: v.b.forDm(i),
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
        o = n('KEM+'),
        i = n.n(o),
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
                i()(e, t, n[t])
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
            o = n.tokens
          return {
            data: _(_({}, s()(n, ['rounded_score', 'src', 'tokens'])), {}, { can_dm: !0 }),
            rounded_score: r,
            tokens: o,
            src: a,
            id: t,
            type: b.b.User,
          }
        },
        S = function (e, t, n) {
          var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            a = e && new RegExp('(^|.*\\s)'.concat(p()(e), '.*'), 'i'),
            o = E(t.sort(u.a), n)
              .filter(function (e) {
                return (!a || a.test(e.screen_name) || a.test(e.name)) && (e.followed_by || r)
              })
              .map(function (e) {
                return O(e)
              })
          return Object(m.a)(o, function (e) {
            return e.id
          })
        }
      function C(e, t, n) {
        var r,
          o = e && new RegExp('(^|.*\\s)'.concat(p()(e), '.*'), 'i'),
          i = t
            .filter(function (e) {
              return e.trusted
            })
            .filter(function (t) {
              if (!e) return !0
              var r = o && t.name && o.test(t.name),
                a = Object(f.a)(t, n).map(function (e) {
                  return e.user
                }),
                i =
                  o &&
                  a.some(function (e) {
                    return o.test(e.screen_name) || o.test(e.name)
                  })
              return r || i
            })
            .sort(u.a),
          c = i
        if (e) {
          var s = Object(v.a)(i, function (e) {
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
        o,
        i,
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
        R,
        w,
        I,
        k,
        x,
        P,
        T,
        A,
        M,
        j,
        D,
        L,
        B,
        F,
        N = {
          fragment: {
            argumentDefinitions: (r = [
              { defaultValue: null, kind: 'LocalArgument', name: 'cursor' },
              { defaultValue: null, kind: 'LocalArgument', name: 'query' },
              { defaultValue: !1, kind: 'LocalArgument', name: 'withLabels' },
            ]),
            kind: 'Fragment',
            metadata: null,
            name: 'DMMessageSearchTabQuery',
            selections: [
              {
                alias: 'dm_message_slice_result',
                args: [(a = { kind: 'Variable', name: 'query', variableName: 'query' })],
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
                                  (i = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: 'DMEventMetadata',
                                    kind: 'LinkedField',
                                    name: 'legacy',
                                    plural: !1,
                                    selections: [
                                      (c = {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'affects_sort',
                                        storageKey: null,
                                      }),
                                      (s = {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'created_at_millis',
                                        storageKey: null,
                                      }),
                                      (l = {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'request_id',
                                        storageKey: null,
                                      }),
                                      (u = {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'event_id',
                                        storageKey: null,
                                      }),
                                      (d = {
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
                                              (p = {
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
                                                  p,
                                                  (f = {
                                                    alias: null,
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'conversation_type',
                                                    storageKey: null,
                                                  }),
                                                  (h = {
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
                                                    selections: (y = [
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
                                                              (v = {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: 'ApiUser',
                                                                kind: 'LinkedField',
                                                                name: 'legacy',
                                                                plural: !1,
                                                                selections: [
                                                                  h,
                                                                  (m = {
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
                                                  s,
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: 'UserResults',
                                                    kind: 'LinkedField',
                                                    name: 'admin_user_results',
                                                    plural: !1,
                                                    selections: y,
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
                                                      i,
                                                      {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: null,
                                                        kind: 'LinkedField',
                                                        name: 'media_info',
                                                        plural: !1,
                                                        selections: [
                                                          (b = {
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
                                                              (g = {
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
                                                                  h,
                                                                  m,
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
                                                  (_ = {
                                                    alias: null,
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'last_read_event_id',
                                                    storageKey: null,
                                                  }),
                                                  (E = {
                                                    alias: null,
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'join_time_millis',
                                                    storageKey: null,
                                                  }),
                                                  (O = {
                                                    alias: null,
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'join_conversation_event_id',
                                                    storageKey: null,
                                                  }),
                                                ],
                                                storageKey: null,
                                              },
                                              (S = {
                                                alias: null,
                                                args: null,
                                                concreteType: 'PerspectivalConversationMetadata',
                                                kind: 'LinkedField',
                                                name: 'perspectival_conversation_metadata',
                                                plural: !1,
                                                selections: [
                                                  _,
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
                                          (C = {
                                            condition: 'withLabels',
                                            kind: 'Condition',
                                            passingValue: !0,
                                            selections: [
                                              {
                                                alias: null,
                                                args: null,
                                                concreteType: 'DMConversationLabelInfo',
                                                kind: 'LinkedField',
                                                name: 'labels',
                                                plural: !0,
                                                selections: [
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'label_type',
                                                    storageKey: null,
                                                  },
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'timestamp',
                                                    storageKey: null,
                                                  },
                                                ],
                                                storageKey: null,
                                              },
                                            ],
                                          }),
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
                                          (R = {
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
                                          (w = {
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
                                          (x = {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'message_id',
                                            storageKey: null,
                                          }),
                                          h,
                                          (P = {
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
                                            selections: y,
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'UserResults',
                                            kind: 'LinkedField',
                                            name: 'participants_snapshot_results',
                                            plural: !0,
                                            selections: y,
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'UserResults',
                                            kind: 'LinkedField',
                                            name: 'initiating_user_results',
                                            plural: !1,
                                            selections: y,
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
                                              i,
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
                                                selections: y,
                                                storageKey: null,
                                              },
                                              {
                                                alias: null,
                                                args: null,
                                                concreteType: 'UserResults',
                                                kind: 'LinkedField',
                                                name: 'sender_results',
                                                plural: !1,
                                                selections: y,
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
                args: (D = [
                  { kind: 'Variable', name: 'cursor', variableName: 'cursor' },
                  a,
                  { kind: 'Literal', name: 's', value: 17 },
                ]),
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
                                  i,
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: 'DMEventMetadata',
                                    kind: 'LinkedField',
                                    name: 'legacy',
                                    plural: !1,
                                    selections: [
                                      c,
                                      s,
                                      l,
                                      u,
                                      d,
                                      {
                                        alias: null,
                                        args: null,
                                        concreteType: 'DMConversation',
                                        kind: 'LinkedField',
                                        name: 'conversation',
                                        plural: !1,
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
                                              p,
                                              {
                                                alias: null,
                                                args: null,
                                                concreteType: 'ConversationMetadata',
                                                kind: 'LinkedField',
                                                name: 'metadata',
                                                plural: !1,
                                                selections: [
                                                  p,
                                                  f,
                                                  h,
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: 'UserResults',
                                                    kind: 'LinkedField',
                                                    name: 'created_by_user_results',
                                                    plural: !1,
                                                    selections: (F = [
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
                                                              i,
                                                              o,
                                                              v,
                                                              (B = {
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
                                                  s,
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: 'UserResults',
                                                    kind: 'LinkedField',
                                                    name: 'admin_user_results',
                                                    plural: !1,
                                                    selections: F,
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
                                                      i,
                                                      {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: null,
                                                        kind: 'LinkedField',
                                                        name: 'media_info',
                                                        plural: !1,
                                                        selections: [L, b],
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
                                                            selections: [i, o, g, B],
                                                            type: 'User',
                                                            abstractKey: null,
                                                          },
                                                        ],
                                                        storageKey: null,
                                                      },
                                                    ],
                                                    storageKey: null,
                                                  },
                                                  _,
                                                  E,
                                                  O,
                                                ],
                                                storageKey: null,
                                              },
                                              S,
                                            ],
                                            storageKey: null,
                                          },
                                          C,
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
                                          R,
                                          w,
                                          I,
                                          k,
                                          x,
                                          h,
                                          P,
                                          T,
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'UserResults',
                                            kind: 'LinkedField',
                                            name: 'users_results',
                                            plural: !0,
                                            selections: F,
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'UserResults',
                                            kind: 'LinkedField',
                                            name: 'participants_snapshot_results',
                                            plural: !0,
                                            selections: F,
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'UserResults',
                                            kind: 'LinkedField',
                                            name: 'initiating_user_results',
                                            plural: !1,
                                            selections: F,
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
                                              i,
                                              M,
                                              {
                                                alias: null,
                                                args: null,
                                                concreteType: 'UserResults',
                                                kind: 'LinkedField',
                                                name: 'recipient_results',
                                                plural: !1,
                                                selections: F,
                                                storageKey: null,
                                              },
                                              {
                                                alias: null,
                                                args: null,
                                                concreteType: 'UserResults',
                                                kind: 'LinkedField',
                                                name: 'sender_results',
                                                plural: !1,
                                                selections: F,
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
                filters: ['query', 'safety_level'],
                handle: 'slice',
                key: 'DMMessageSearchTabQuery_dm_message_slice_result',
                kind: 'LinkedHandle',
                name: 'dm_message_slice_result',
              },
            ],
          },
          params: {
            id: 'sQISYch0uTb7uyIQBc2_iA',
            metadata: { sliceInfoPath: ['dm_message_slice_result', 'slice_info'] },
            name: 'DMMessageSearchTabQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(N.hash = '2941cf22a71996356c51765bade2759b'), (t.default = N)
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
        o = n('Y9Ll'),
        i = n.n(o),
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
        R = n('p9G8'),
        w = n('X/yg'),
        I = n('AQOc'),
        k = n('zh9S'),
        x = n('G6rE'),
        P = n('0KEI'),
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
          O.n,
          O.p,
          x.e.selectAll,
          function (e, t) {
            var n = M(e, t)
            return Object(w.g)(n)
          },
          M,
          function (e, t, n, r, a, o, i, c, s) {
            var l = e && e.data,
              u = l && Object(I.b)(l, t, i),
              d = u && Object(R.a)(u, o),
              p = !(!l || !l.notifications_disabled),
              f = !(!l || !l.mention_notifications_disabled),
              h = l && l.mute_expiration_time && Number(l.mute_expiration_time),
              m = u ? Object.keys(u.participants) : [],
              v = m && 1 === m.length && m[0] === o,
              y =
                m &&
                m.filter(function (e) {
                  return e !== o
                }),
              b = v ? m : y.slice(0, 5),
              g = b.length < y.length
            if (!o) throw new Error('logged-in user not found')
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
              perspective: o,
              scribeComponent: c,
              showViewPeople: g,
              visibleParticipants: b,
              isSelfConversation: v,
            }
          },
        ),
        D = {
          addToast: S.b,
          block: x.e.block,
          createLocalApiErrorHandler: Object(P.createLocalApiErrorHandlerWithContextFactory)(
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
          unblock: x.e.unblock,
          unmuteDMUser: E.unmuteDMUser,
          updateConversationName: E.updateConversationName,
        },
        L = Object(T.g)(j, D),
        B = n('aWyx'),
        F = n('I2k/'),
        N = n('aA19'),
        H = n('pHkl'),
        U = n('v//M'),
        W = n('Gpeq'),
        V = n('XnpN'),
        z = n('3XMw'),
        G = n.n(z),
        K = n('tuLS'),
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
        oe = n('CK8+'),
        ie = n('rHpw'),
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
      var fe = G.a.e3e58b6d,
        he = G.a.a9ddbb94,
        me = G.a.abd845fd,
        ve = G.a.g2fd3205,
        ye = G.a.eb1bb5a1,
        be = G.a.c6026009,
        ge = G.a.eb75875d,
        _e = G.a.a7f20222,
        Ee = G.a.g2f04a6a,
        Oe = G.a.i453fedf,
        Se = G.a.b3dfd519,
        Ce = G.a.cc7c8ce6,
        Re = G.a.hab58673,
        we = G.a.e3c6e080,
        Ie = {
          confirmButtonLabel: G.a.bb1d57b6,
          actionTextDelete: G.a.ad63377d,
          actionTextLeave: G.a.g9074da4,
          header: G.a.gdf4b79f,
          text: G.a.h09b49f7,
        },
        ke = G.a.i6b19b07,
        xe = G.a.j7bb1a42,
        Pe = G.a.fcd4d489,
        Te = G.a.a30e1677,
        Ae = G.a.a9fd20be,
        Me = G.a.e133be4e,
        je = G.a.c9623eeb,
        De = G.a.cceeaf2b,
        Le = G.a.d87bff5a,
        Be = [
          { duration: 1, displayText: G.a.j37c4674, toast: G.a.je7e1fec, toastOld: G.a.hf94a2d5 },
          { duration: 2, displayText: G.a.fb7a43c5, toast: G.a.e95c8f8a, toastOld: G.a.bd54fad1 },
          { duration: 3, displayText: G.a.cb5bf56e, toast: G.a.gb7a130b, toastOld: G.a.f6fce0fd },
          { duration: 0, displayText: G.a.cabeb6c1, toast: G.a.i78153dd, toastOld: G.a.hfc86556 },
        ],
        Fe = { page: 'messages', section: 'conversation_settings' },
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
                return (null == t ? void 0 : t.type) === B.a.GROUP ? n || '' : r._getNameOfOneToOneConvo()
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
                    Object(V.a)(t, n).map(function (e) {
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
                return Be.map(function (e) {
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
                  o = r._getSenderOfOneToOneConvo()
                o && (a(o.id_str, t).catch(n()), r._scribeAction('mute_user'))
              }),
              v()(s()(r), '_handleUnmuteDMUser', function () {
                var e = r.props,
                  t = e.conversationId,
                  n = e.createLocalApiErrorHandler,
                  a = e.unmuteDMUser,
                  o = r._getSenderOfOneToOneConvo()
                o && (a(o.id_str, t).catch(n()), r._scribeAction('unmute_user'))
              }),
              v()(s()(r), '_handleBlockUser', function () {
                var e = r.props,
                  t = e.addToast,
                  n = e.block,
                  a = e.createLocalApiErrorHandler,
                  o = r._getSenderOfOneToOneConvo(),
                  i = o ? o.id_str : ''
                '' !== i &&
                  (n(i).then(function () {
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
                ;(0, e.fetchConversationIfNeeded)({ conversationId: t }).catch(n(Object(F.a)(t)))
              }),
              v()(s()(r), '_handleLeaveConversation', function () {
                var e,
                  t = r.props,
                  n = t.conversation,
                  a = t.conversationId,
                  o = t.createLocalApiErrorHandler,
                  i = t.inboxType,
                  c = t.leaveConversation,
                  s = t.location
                c({ conversationId: a }).catch(o({ showToast: !0 }))
                var l = (null == n ? void 0 : n.type) === B.a.GROUP ? 'leave_group' : 'delete_thread',
                  u = (null == s || null === (e = s.state) || void 0 === e ? void 0 : e.position) || 0,
                  d = null != n && n.participants ? Object.keys(n.participants).length : 0,
                  p = {
                    conversation_type: (null == n ? void 0 : n.type) === B.a.GROUP ? 1 : 0,
                    conversation_id: a,
                    conversation_participant_count: d,
                    position: u,
                    inbox_type: Object(w.h)(i),
                    entry_point: H.b.CONVERSATION_INFO,
                  }
                r._scribeAction(l, p), r._handleConversationClose()
              }),
              v()(s()(r), '_handleNotificationsDisabled', function (e) {
                var t = r.props,
                  n = t.addToast,
                  a = t.conversationId,
                  o = t.disableNotifications,
                  i = r._getNameOfGroupOrOneToOneConvo()
                o({ conversationId: a, duration: e.duration }), n({ text: e.toast({ name: i }) })
              }),
              v()(s()(r), '_handleNotificationsEnabled', function () {
                return function () {
                  var e = r.props,
                    t = e.addToast,
                    n = e.conversationId,
                    a = e.createLocalApiErrorHandler,
                    o = e.enableNotifications,
                    i = r._getNameOfGroupOrOneToOneConvo(),
                    c = Ee({ name: i })
                  o({ conversationId: n }).then(function () {
                    t({ text: c })
                  }, a({ showToast: !0 }))
                }
              }),
              v()(s()(r), '_handleMentionSwitchChanged', function (e) {
                var t = r.props,
                  n = t.addToast,
                  a = t.conversationId,
                  o = t.createLocalApiErrorHandler,
                  i = t.disableMentionNotifications,
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
                    ? i({ conversationId: a }).then(function () {
                        n({ text: Re })
                      }, o({ showToast: !0 }))
                    : c({ conversationId: a }).then(function () {
                        n({ text: we })
                      }, o({ showToast: !0 }))
              }),
              v()(s()(r), '_handleConversationClose', function () {
                r._returnToInbox()
              }),
              v()(s()(r), '_returnToInbox', function () {
                var e = r.props,
                  t = e.history,
                  n = e.inboxType
                t.push(Object(w.e)(n))
              }),
              v()(s()(r), '_scribeAction', function (e, t) {
                var n = r.props,
                  a = n.scribeAction,
                  o = n.scribeComponent
                a(de(de({}, n.scribeNamespace), {}, { component: o, action: e }), t || r._getScribeData())
              }),
              v()(s()(r), '_getScribeData', function () {
                var e = r.props.conversation
                return { items: [{ conversation_type: (null == e ? void 0 : e.type) === B.a.GROUP ? 1 : 0 }] }
              }),
              (r.state = { notificationsDisabled: e.notificationsDisabled, muteExpirationTime: e.muteExpirationTime }),
              r
            )
          }
          return (
            i()(n, [
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
                    a = (null == t ? void 0 : t.type) === B.a.GROUP
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
                    o = (null == t ? void 0 : t.type) === B.a.GROUP,
                    i = null == t ? void 0 : t.trusted
                  return o
                    ? y.createElement(
                        ee.a,
                        {
                          avatarCell: y.createElement(N.a, { conversation: t, perspective: a }),
                          cellStyle: He.groupSectionRight,
                          style: He.groupSection,
                        },
                        y.createElement(te.b, { numberOfLines: 1, weight: 'bold' }, r),
                        i
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
                    o = (null == t ? void 0 : t.type) === B.a.GROUP,
                    i = null == t ? void 0 : t.trusted
                  return y.createElement(
                    Z.a,
                    null,
                    o
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
                      withFinalItemBorder: o,
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
                    o && i
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
                          y.createElement(oe.a, { onValueChange: this._handleNotificationsEnabled(), value: n }),
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
                          K.a,
                          { accessibilityLabel: a, renderMenu: this._renderActionMenu() },
                          y.createElement(oe.a, { onValueChange: le.a, value: n }),
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
                      y.createElement(oe.a, { onValueChange: this._handleMentionSwitchChanged, value: e }),
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
                    r = (null == t ? void 0 : t.type) === B.a.GROUP
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
                      Object(W.a)(t || 'en'),
                      r ? { hour: '2-digit', minute: '2-digit' } : { weekday: 'long', month: 'short', day: '2-digit' },
                    )
                  return Oe({ expiration: a })
                },
              },
              {
                key: '_renderConversationActions',
                value: function () {
                  var e = this.props.conversation,
                    t = (null == e ? void 0 : e.type) !== B.a.GROUP,
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
                    a = n ? je({ screenName: t }) : Pe({ screenName: t })
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
                    o =
                      (null == t ? void 0 : t.type) !== B.a.GROUP
                        ? xe({ screenName: this._getScreenNameOfOneToOneConvo() })
                        : ke,
                    i = {
                      pathname: '/i/report/dm_conversation/'.concat(n),
                      state: { clientReferer: window.location.pathname, scribeNamespace: Fe, inboxType: r },
                    }
                  return a
                    ? null
                    : y.createElement(ae.a, {
                        color: 'primary',
                        label: o,
                        link: i,
                        onPress: this._handleReportConversation,
                      })
                },
              },
            ]),
            n
          )
        })(y.Component),
        He = ie.a.create(function (e) {
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
      t.default = Object(ce.c)(Fe)(L(Ne))
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
        o = n('aWyx'),
        i = n('3XMw'),
        c = n.n(i),
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
                  var o = e.user_id,
                    i = n[o]
                  return i
                    ? r.createElement('span', { key: t }, t > 0 ? ', ' : null, r.createElement(a.b, null, i.name))
                    : null
                }),
              )
            : null
        },
        h = function (e, t, n, i) {
          var d,
            p = n === e.by_user_id
          switch (t) {
            case o.b.CONVERSATION_AVATAR_UPDATE:
              return (d = e.by_user_id && i[e.by_user_id] && i[e.by_user_id].name)
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
            case o.b.CONVERSATION_NAME_UPDATE:
              var h = r.createElement(a.b, null, e.conversation_name)
              return (d = e.by_user_id && i[e.by_user_id] && i[e.by_user_id].name)
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
            case o.b.JOIN_CONVERSATION:
              return (d = e.sender_id && i[e.sender_id] && i[e.sender_id].name)
                ? (function (e) {
                    return r.createElement(c.a.I18NFormatMessage, { $i18n: 'fa95b019' }, r.createElement(a.b, null, e))
                  })(d)
                : u
            case o.b.PARTICIPANTS_LEAVE:
              return (function (e) {
                return r.createElement(c.a.I18NFormatMessage, { $i18n: 'fc10875e' }, e)
              })(r.createElement(f, { entry: e, users: i }))
            case o.b.PARTICIPANTS_JOIN:
              return (function (e, t) {
                return e
                  ? r.createElement(c.a.I18NFormatMessage, { $i18n: 'a4bc88c2' }, r.createElement(a.b, null, e), t)
                  : r.createElement(c.a.I18NFormatMessage, { $i18n: 'bfdff0c3' }, t)
              })((d = e.sender_id && i[e.sender_id] && i[e.sender_id].name), r.createElement(f, { entry: e, users: i }))
            default:
              return ''
          }
        }
    },
  },
])
//# sourceMappingURL=WIPED
