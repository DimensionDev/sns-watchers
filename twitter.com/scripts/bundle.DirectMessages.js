;(window.webpackJsonp = window.webpackJsonp || []).push([
  [50, 7, 12, 18, 173],
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
        a = n.n(r),
        i = n('3XMw'),
        o = n.n(i),
        c = n('M2x3'),
        s = 'settingsAppBar',
        l = n('/yvb'),
        u = n('rHpw'),
        d = o.a.bb081ea1,
        p = { viewType: 'settings_button' },
        f = a.a.memo(function (e) {
          var t = e.onPress,
            n = e.pullRight,
            r = e.to
          return a.a.createElement(l.a, {
            accessibilityLabel: d,
            behavioralEventContext: p,
            hoverLabel: { label: d },
            icon: a.a.createElement(c.a, null),
            link: r,
            onPress: t,
            pullRight: n,
            style: h.button,
            testID: s,
            type: 'primaryText',
          })
        }),
        h = u.a.create(function (e) {
          return { button: { marginVertical: 'calc(-'.concat(e.spaces.space12, ')') } }
        })
      t.a = f
    },
    '/FNr': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'default', function () {
          return l
        })
      n('uFXj')
      var r = n('ERkP'),
        a = n.n(r),
        i = n('i4Oy')
      function o(e) {
        return a.a.createElement('span', null, 'This is a placeholder for "DMConversationEvolution".')
      }
      var c = n('rHpw'),
        s = n('Ty5D')
      function l(e) {
        var t = e.history,
          n = e.richTextInputContext,
          r = e.typeaheadWrapper,
          l = Object(s.i)().conversationId,
          u = Object(s.h)(),
          d = 'string' == typeof u.query.text ? u.query.text : void 0,
          p = i.a.get('window').width >= c.a.theme.breakpoints.small
        return a.a.createElement(o, {
          conversationId: l || void 0,
          history: t,
          isWide: p,
          prefillText: d,
          richTextInputContext: n,
          typeaheadWrapper: r,
        })
      }
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
        b = n.n(y),
        g = n('CHgo'),
        _ = n('fs1G'),
        E = n('rHpw'),
        O = n('rOXj'),
        S = n('MWbm'),
        C = n('Enqy')
      function w(e, t) {
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
            ? w(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : w(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
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
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var k = O.a.isTouchSupported(),
        P = { zoom: 1, lastX: 0, lastY: 0, zoomCenter: { x: 0, y: 0 } },
        x = { height: 0, width: 0, left: 0, right: 0, top: 0, bottom: 0 },
        T = function (e, t, n) {
          return Math.min(t, Math.max(e, n))
        },
        A = function (e, t) {
          return Math.sqrt(Math.pow(e.clientY - t.clientY, 2) + Math.pow(e.clientX - t.clientX, 2))
        },
        M = (function (e) {
          u()(n, e)
          var t = I(n)
          function n(e) {
            var r
            return (
              a()(this, n),
              (r = t.call(this, e)),
              v()(s()(r), '_itemDimensions', x),
              v()(s()(r), '_ref', b.a.createRef()),
              v()(s()(r), '_setTouchableNode', function (e) {
                r._touchableNode !== e &&
                  ((r._touchableNode = e),
                  r._removeTouchListener && r._removeTouchListener(),
                  r._touchableNode && (r._removeTouchListener = Object(g.a)(r._touchableNode, r._handleTouchMove, !1)))
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
                  o = T(a, n, r.state.zoom),
                  c = r.state.zoom
                c !== o && 1 === o ? r.resetZoom() : r.setState({ lastX: 0, lastY: 0, zoom: o }),
                  0 === e.touches.length
                    ? (r._lastTouchTime && r._lastTouchTime + 300 > e.timeStamp
                        ? (r._clickTimer && clearTimeout(r._clickTimer), r._handleDoubleTap(e))
                        : c <= 1 && !r._moved && (r._clickTimer = setTimeout(i, 300)),
                      (r._lastTouchTime = e.timeStamp))
                    : e.preventDefault()
              }),
              (r.state = R({}, P)),
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
                    if (!k) return this.props.children
                    var t = this.state,
                      n = t.zoom,
                      r = t.zoomCenter,
                      a = this._moved,
                      i = {
                        zoom: Object(C.spring)(n),
                        zoomCenterX: Object(C.spring)(r.x),
                        zoomCenterY: Object(C.spring)(r.y),
                      }
                    return b.a.createElement(
                      S.a,
                      {
                        onTouchEnd: this._handleTouchEnd,
                        onTouchStart: this._handleTouchStart,
                        ref: this._setTouchableNode,
                        style: j.fill,
                      },
                      b.a.createElement(C.Motion, { style: i }, function (t) {
                        var n = t.zoom,
                          i = t.zoomCenterX,
                          o = t.zoomCenterY
                        return b.a.createElement(
                          S.a,
                          {
                            ref: e._ref,
                            style: [
                              j.fill,
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
                    k && this._updateWindowDimensions()
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
                    this.props.onZoomed(!1), this.setState({ zoom: P.zoom })
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
                    if ((this._updateWindowDimensions(), (this._lastDistance = A(r[0], r[1])), 1 === this.state.zoom)) {
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
                      var l = A(e.touches[0], e.touches[1]),
                        u = this._lastDistance ? l / this._lastDistance : 1,
                        d = T(c - s, i + o, n * u)
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
                        this.setState({ zoom: n, zoomCenter: this._tapCenter || P.zoomCenter }),
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
                    return k && e.resetZoom ? (e.onZoomed(!1), R({}, P)) : t
                  },
                },
              ],
            ),
            n
          )
        })(b.a.Component)
      v()(M, 'defaultProps', {
        maxZoom: 2.5,
        maxZoomBounce: 0.15,
        minZoom: 1,
        minZoomBounce: 0.15,
        onTap: _.a,
        onZoomed: _.a,
        resetZoom: !1,
      })
      var j = E.a.create(function (e) {
        return { fill: { flex: 1 } }
      })
      t.a = M
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
        return M
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
        v = n.n(m),
        y = n('LCtV'),
        b = n('3XMw'),
        g = n.n(b),
        _ = n('VPdC'),
        E = n('pKoL'),
        O = n('MWbm'),
        S = n('rFBM'),
        C = n('/yvb'),
        w = n('9Xij'),
        R = n('rHpw'),
        I = n('hOZg'),
        k = n('Mbn/'),
        P = n('T8pk')
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
      var T = g.a.b87ca51a,
        A = g.a.eebff22c,
        M = (function (e) {
          s()(n, e)
          var t = x(n)
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
                    u = v.a.createElement(
                      v.a.Fragment,
                      null,
                      this._renderPreview(),
                      l
                        ? null
                        : v.a.createElement(
                            v.a.Fragment,
                            null,
                            v.a.createElement(O.a, { style: [D.mask, n, j[t]] }),
                            v.a.createElement(
                              O.a,
                              { style: D.mediaPicker },
                              this._renderMediaEdit(),
                              i ? this._renderMediaCrop() : null,
                              o ? this._renderMediaRemove() : null,
                            ),
                          ),
                    )
                  return v.a.createElement(
                    O.a,
                    { style: [D.container, c, j[t]] },
                    s && a ? v.a.createElement(S.a, { onFilesAdded: a, style: [D.dragDropContainer, j[t]] }, u) : u,
                  )
                },
              },
              {
                key: '_renderMediaRemove',
                value: function () {
                  var e = this.props.onRemove
                  return v.a.createElement(C.a, {
                    accessibilityLabel: T,
                    hoverLabel: { label: T },
                    icon: v.a.createElement(I.a, null),
                    onPress: e,
                    size: 'large',
                    style: D.rightButton,
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
                  return v.a.createElement(C.a, {
                    accessibilityLabel: A,
                    icon: v.a.createElement(k.a, null),
                    onPress: t,
                    size: 'large',
                    style: n ? D.middleButton : D.rightButton,
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
                    o = v.a.createElement(P.a, null)
                  return a
                    ? v.a.createElement(_.a, {
                        acceptGifs: t,
                        acceptVideo: n,
                        accessibilityLabel: r,
                        icon: o,
                        onChange: a,
                        size: 'large',
                        type: 'onMediaDominantColorFilled',
                      })
                    : v.a.createElement(C.a, {
                        accessibilityLabel: r,
                        icon: o,
                        onPress: i,
                        size: 'large',
                        style: D.edit,
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
                    ? v.a.createElement(
                        w.a,
                        { ratio: t },
                        v.a.createElement(E.a, {
                          borderRadius: n,
                          enableGif: !1,
                          mediaItem: a,
                          style: D.mediaPreview,
                          withCloseButton: !1,
                        }),
                      )
                    : r
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      h()(M, 'defaultProps', { acceptGifs: !1, acceptVideo: !1, aspectRatio: 1, borderRadius: y.a.NONE })
      var j = R.a.create(function (e) {
          return {
            infinite: { borderRadius: e.borderRadii.infinite },
            medium: { borderRadius: e.borderRadii.small },
            none: { borderRadius: e.borderRadii.none },
          }
        }),
        D = R.a.create(function (e) {
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
        b = n.n(y),
        g = n('97Jx'),
        _ = n.n(g),
        E = n('ddV6'),
        O = n.n(E),
        S = n('m3Bd'),
        C = n.n(S),
        w =
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
        R = n.n(w),
        I = n('mN6z'),
        k = n('U+bB'),
        P = n('MWbm'),
        x = n('0Ki6'),
        T = n('3dad'),
        A = n('r1lV'),
        M = n('rHpw'),
        j = n('JYMr')
      function D(e, t) {
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
      function L(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? D(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : D(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
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
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var B = R.a.b327c129,
        N = R.a.gff1f69e,
        H = (function (e) {
          u()(n, e)
          var t = F(n)
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
                    Object(I.a)(e.photo, this.props.photo) ||
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
                    var h = b.a.createElement(k.a, {
                      accessibilityLabel: s.ext_alt_text ? s.ext_alt_text : B,
                      defaultSource: p && p.uri,
                      draggable: !0,
                      onError: p ? void 0 : a,
                      onLoad: i,
                      onLoadEnd: this._handleLoadEnd,
                      onLoadStart: this._handleLoadStart,
                      resizeMode: 'contain',
                      source: f,
                      style: [U.img, r],
                    })
                    return b.a.createElement(
                      P.a,
                      { style: u },
                      this.state.imageLoading ? V : null,
                      d ? b.a.createElement(x.a, { onTap: o, onZoomed: c, resetZoom: l }, h) : h,
                    )
                  },
                },
              ],
              [
                {
                  key: '_selectCachedVariant',
                  value: function (e) {
                    var t = T.a.getOriginalImage(e)
                    return t ? A.a.selectLargestCachedVariant(t) : Promise.resolve()
                  },
                },
                {
                  key: '_selectSource',
                  value: function (e) {
                    var t = T.a.getOriginalImage(e)
                    return t && A.a.selectLargestUrl(t)
                  },
                },
              ],
            ),
            n
          )
        })(b.a.PureComponent)
      v()(H, 'defaultProps', { zoomable: !1 })
      var U = M.a.create(function (e) {
          return {
            img: L(
              L({}, M.a.absoluteFillObject),
              {},
              { height: 'auto', margin: 'auto', maxHeight: '100%', maxWidth: '100%', width: 'auto' },
            ),
            progressBar: { position: 'absolute', top: 0, zIndex: 1 },
          }
        }),
        V = b.a.createElement(j.a, { ariaValueText: N, indeterminate: !0, style: U.progressBar }),
        W = H,
        z = n('RCZO'),
        K = n('Modb'),
        G = n('XrEN')
      function q(e) {
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
      var Y = (function (e) {
          u()(n, e)
          var t = q(n)
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
                  return b.a.createElement(
                    P.a,
                    { style: e },
                    b.a.createElement(P.a, { style: X.root }, this._renderVideo()),
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
                  return b.a.createElement(
                    K.a,
                    _()({}, G.a.extractVideoProps(r, n), {
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
        })(b.a.PureComponent),
        X = M.a.create({ root: { flexBasis: 0, flexGrow: 1, flexShrink: 1, justifyContent: 'center' } }),
        Q = Y
      function Z(e, t) {
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
      function J(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Z(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Z(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function $(e) {
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
      var ee = { startX: 0, startY: 0 },
        te = (function (e) {
          u()(n, e)
          var t = $(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              v()(s()(e), '_pullDistanceY', 0),
              v()(s()(e), '_pullInfo', J({}, ee)),
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
                e._updatePullPosition(0), (e._pullInfo = J({}, ee))
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
                  return b.a.createElement(
                    P.a,
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
        })(b.a.Component),
        ne = n('7N4s'),
        re = n('q9Zt'),
        ae = R.a.ac85c6b1,
        ie = function (e) {
          var t = e.isAvatar,
            n = e.isCurrentlyDisplayed,
            r = e.mediaDetail,
            a = e.onDismiss,
            i = e.onTap,
            o = e.promotedContent,
            c = e.videoId,
            s = C()(e, [
              'isAvatar',
              'isCurrentlyDisplayed',
              'mediaDetail',
              'onDismiss',
              'onTap',
              'promotedContent',
              'videoId',
            ]),
            l = b.a.useState(null),
            u = O()(l, 2),
            d = u[0],
            p = u[1],
            f = b.a.useState({ width: 0, height: 0 }),
            h = O()(f, 2),
            m = h[0],
            v = h[1],
            y = b.a.useContext(ne.b).isModal,
            g = r.original_info || {},
            E = g.height,
            S = g.width,
            w = m.height,
            R = m.width,
            I =
              y || t
                ? Object(z.f)({ mediaWidth: S, mediaHeight: E, containerWidth: R, containerHeight: w }, t)
                : oe.mediaItem
          b.a.useEffect(
            function () {
              d && p(null)
            },
            [e, d],
          )
          return b.a.createElement(
            te,
            {
              onDismiss: a,
              onLayout:
                y || t
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
              ? b.a.createElement(re.a, {
                  onRetry: function () {
                    p(null)
                  },
                  style: oe.errorDetail,
                  title: ae,
                  withLightOnDarkColorScheme: !0,
                })
              : null,
            d
              ? null
              : b.a.createElement(
                  P.a,
                  {
                    onClick: function (e) {
                      e.stopPropagation()
                    },
                    style: I,
                  },
                  'photo' === r.type
                    ? b.a.createElement(
                        W,
                        _()({}, s, {
                          imageStyle: t && oe.avatarImage,
                          onError: function (e) {
                            p(e.nativeEvent.error)
                          },
                          onLoad: function () {
                            p(null)
                          },
                          onTap: i,
                          photo: r,
                          style: oe.container,
                          zoomable: !0,
                        }),
                      )
                    : G.a.isVideo(r) && c
                    ? b.a.createElement(Q, {
                        isCurrentlyDisplayed: n,
                        promotedContent: o,
                        style: oe.container,
                        video: r,
                        videoId: c,
                      })
                    : null,
                ),
          )
        },
        oe = M.a.create(function (e) {
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
        ce = b.a.memo(ie, function (e, t) {
          return Object(I.a)(e, t)
        }),
        se = n('lklz'),
        le = n('v6aA'),
        ue = n('6iuV'),
        de = n('uavX'),
        pe = n('fs1G')
      function fe(e) {
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
      var he = (function (e) {
        u()(n, e)
        var t = fe(n)
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
                  return se.b.forTweet(e.expanded_url.split('/')[3])
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
                return !Object(I.a)(e, this.props) || !Object(I.a)(t, this.state)
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
                    var u = G.a.isVideo(t),
                      d = e._getItemVideoId(t),
                      p = r === l
                    return (u && d) || !u
                      ? b.a.createElement(ce, {
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
                return b.a.createElement(P.a, { style: me.root }, a.length > 1 ? this._renderCarousel(l) : l)
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
                  c = G.a.isVideo(a[r])
                return this.context.featureSwitches.isTrue('responsive_web_carousel_v2_media_detail_enabled')
                  ? b.a.createElement(
                      ue.a,
                      {
                        childrenStyle: [me.dimensions, me.scrollSnap],
                        dominantButtonColor: n,
                        isLocked: o,
                        onVisibleRangeChange: this._handleChangeV2,
                        style: me.dimensions,
                        visibleItemIndex: r,
                        withAddedNavButtonClickArea: !c,
                      },
                      e,
                    )
                  : b.a.createElement(
                      de.b,
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
      })(b.a.Component)
      v()(he, 'contextType', le.a),
        v()(he, 'defaultProps', { mediaIndex: 0, onMediaDetailZoomed: pe.a, onMediaItemChanged: pe.a })
      var me = M.a.create(function (e) {
        return {
          root: { flex: 1, zIndex: 1 },
          dimensions: { height: '100%', width: '100%' },
          scrollSnap: { scrollSnapAlign: 'center', scrollSnapStop: 'always' },
        }
      })
      t.a = he
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
        h = n.n(f),
        m = n('rHpw'),
        v = n('MWbm')
      function y(e) {
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
      var b = (function (e) {
          s()(n, e)
          var t = y(n)
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
                  return h.a.createElement(v.a, { style: g.root })
                },
              },
            ]),
            n
          )
        })(h.a.Component),
        g = m.a.create(function (e) {
          return { root: { height: 5 * e.lineHeightsPx.body } }
        })
      t.a = b
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
        h = n.n(f),
        m = n('3XMw'),
        v = n.n(m),
        y = n('rHpw'),
        b = n('+/1j'),
        g = n('MWbm')
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
            r = p()(e)
          if (t) {
            var a = p()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return u()(this, n)
        }
      }
      var E = v.a.e5b0063d,
        O = 0,
        S = (function (e) {
          s()(n, e)
          var t = _(n)
          function n() {
            var e
            return a()(this, n), ((e = t.call(this))._listDomId = 'accessible-list-'.concat(O)), (O += 1), e
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    n = e.title,
                    r = E({ title: n })
                  return h.a.createElement(
                    g.a,
                    { accessibilityLabelledBy: this._listDomId, accessibilityRole: 'region' },
                    h.a.createElement(
                      b.a,
                      {
                        accessibilityLevel: 1,
                        accessibilityRole: 'heading',
                        nativeID: this._listDomId,
                        style: y.a.visuallyHidden,
                      },
                      n,
                    ),
                    h.a.createElement(g.a, { accessibilityLabel: r }, t),
                  )
                },
              },
            ]),
            n
          )
        })(h.a.Component)
      t.a = S
    },
    '64vW': function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        a = n.n(r).a.createContext({ heightsReady: !0 })
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
        return te
      }),
        n.d(t, 'e', function () {
          return ne
        }),
        n.d(t, 'f', function () {
          return re
        }),
        n.d(t, 'd', function () {
          return ae
        }),
        n.d(t, 'a', function () {
          return ce
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
        O = n.n(E),
        S = n('6rlp'),
        C = n('zh9S'),
        w = n('G6rE'),
        R = n('rxPX'),
        I = n('0KEI'),
        k = function (e, t) {
          return w.e.select(e, t.userId)
        },
        P = function (e, t) {
          return t.promotedContent
        },
        x = Object(R.a)()
          .propsFromState(function () {
            return { promotedContent: P, user: k }
          })
          .adjustStateProps(function (e) {
            var t = e.promotedContent,
              n = e.user
            return { promotedContent: t || (n ? n.promoted_content : void 0), user: n }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(I.createLocalApiErrorHandlerWithContextFactory)('USER_CELL_CONTAINER'),
              log: S.a,
              scribeAction: C.c,
            }
          }),
        T = n('I57f'),
        A = n('vMjK'),
        M = n('MWbm'),
        j = n('IG7M'),
        D = n('rHpw'),
        L = function (e) {
          var t = e.children,
            n = e.promotedContent,
            r = e.user
          return O.a.createElement(
            M.a,
            { style: F.decorationWrapper },
            t,
            O.a.createElement(j.a, {
              renderActionMenu: function (e) {
                return O.a.createElement(A.b, { onClose: e, promotedContent: n, user: r, view: 'follower' })
              },
              style: F.actionMenu,
            }),
          )
        },
        F = D.a.create(function (e) {
          return { decorationWrapper: { flexDirection: 'row' }, actionMenu: { marginLeft: e.spaces.space12 } }
        }),
        B = n('uIZp'),
        N = n('mN6z'),
        H = n('caTy'),
        U = n('3IPs'),
        V = n('Rp9C'),
        W = n('X04g'),
        z = n('Re5t'),
        K = n('TnY3'),
        G = n('hxu0'),
        q = n('v6aA'),
        Y = n('7JQg'),
        X = n('IMA+'),
        Q = n('cFuS')
      function Z(e, t) {
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
      function J(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Z(Object(n), !0).forEach(function (t) {
                b()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Z(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function $(e) {
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
      var ee = function (e) {
        var t = e.user
        return t && t.profile_image_url_https
          ? O.a.createElement(
              ie,
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
      ee.defaultProps = {
        cellClickable: !0,
        decoration: null,
        displayMode: z.a.UserCompact,
        followRequestReceived: !1,
        hideBlocked: !1,
        promotedItemType: Q.c.USER,
        shouldScribeProfileClick: !0,
        shouldScribeImpression: !1,
        withFollowsYou: !1,
      }
      var te = function (e) {
          var t = e.isDeviceFollowing,
            n = e.userId
          return O.a.createElement(T.a, { isFollowing: t, style: oe.followButton, userId: n })
        },
        ne = function (e) {
          var t = e.loggedInUserId,
            n = e.promotedContent,
            r = e.userId
          return t !== r
            ? O.a.createElement(B.a, { promotedContent: n, size: 'small', style: oe.followButton, userId: r })
            : null
        },
        re = function (e) {
          return O.a.createElement(L, { promotedContent: e.promotedContent, user: e.user }, ne(e))
        },
        ae = function (e) {
          return O.a.createElement(j.a, {
            renderActionMenu: function (t) {
              return O.a.createElement(A.b, {
                onClose: t,
                promotedContent: e.promotedContent,
                user: e.user,
                view: 'rito_flagged_accounts',
              })
            },
          })
        },
        ie = (function (e) {
          p()(n, e)
          var t = $(n)
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
                  e._handleAsyncPromotedEvent(Q.b.PROFILE_IMAGE_CLICK)
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
                  e._handleAsyncPromotedEvent(Q.b.SCREEN_NAME_CLICK)
              }),
              b()(u()(e), '_handleSaveAsRecentSearch', function () {
                var t = e.props,
                  n = t.saveAsRecentSearch,
                  r = t.shouldStoreTypeaheadItem,
                  a = t.userId
                n && r && r(W.a.ItemType.USER) && n({ user: { id: a, type: U.a.User } })
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
                          return e.item_type === W.a.ItemType.USER && e.id === l
                        }),
                  d = o.search_details,
                  p = { items: [J(J({}, u), V.a.getUserItem(s, a))], profile_id: l, search_details: d }
                i(J(J({}, c), t), p)
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
                  return !Object(N.a)(this.props, e)
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
                    ? O.a.createElement(
                        X.a,
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
                                link: i.landingUrl ? Object(H.b)(i.landingUrl) : void 0,
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
                  return t && n === Q.c.TWEET ? { promotedTweetState: t } : null
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
                  if (r && a === Q.c.USER) {
                    var c = r.disclosure_type,
                      s = r.impression_id
                    n({
                      disclosureType: c,
                      itemId: o,
                      itemType: Q.c.USER,
                      params: { event: Q.b.IMPRESSION, impression_id: s },
                    }).catch(t())
                  } else i && this._scribeAction({ action: 'impression' })
                },
              },
            ]),
            n
          )
        })(O.a.Component)
      b()(ie, 'contextType', q.a), b()(ie, 'defaultProps', ee.defaultProps)
      var oe = D.a.create(function (e) {
          return { followButton: { marginLeft: e.spaces.space12 } }
        }),
        ce = Object(K.a)(Object(G.a)(x(ee)))
      t.b = Object(Y.c)({ element: 'user' })(ce)
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
          return Promise.all([n.e(22), n.e(166)])
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
          return _
        })
      n('JtPf'), n('7x/C'), n('MvUL'), n('KqXw')
      var r = n('ERkP'),
        a = n.n(r),
        i = (n('WNMA'), n('RqPI')),
        o = n('3nOA'),
        c = n('rxPX'),
        s = n('0KEI'),
        l = n('G6rE'),
        u = function (e, t) {
          return t.match.params.screenName
        },
        d = function (e, t) {
          var n = i.q(e),
            r = (function (e, t) {
              var n = u(0, t)
              return n ? l.e.selectIdByScreenName(e, n) : null
            })(e, t)
          return n && r ? Object(o.a)(n, r) : null
        },
        p = Object(c.a)()
          .propsFromState(function () {
            return { screenName: u, conversationId: d }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(s.createLocalApiErrorHandlerWithContextFactory)('CREATE_CONVERSATION'),
              fetchOneByScreenNameWithExtraFieldsIfNeeded: l.e.createFetchOneByScreenNameWithExtraFieldsIfNeeded([
                l.a,
                l.d,
              ]),
            }
          }),
        f = n('GOQE'),
        h = n('kGix'),
        m = n('v//M'),
        v = n('tI3i'),
        y = n.n(v),
        b = n('5FtR'),
        g = n('0zXz'),
        _ = function (e) {
          var t = e.conversationId,
            n = e.createLocalApiErrorHandler,
            r = e.fetchOneByScreenNameWithExtraFieldsIfNeeded,
            i = e.history,
            o = e.screenName
          return (
            a.a.useEffect(
              function () {
                Promise.resolve()
                  .then(function () {
                    return y()(!!o, 'screenName must be defined'), r(o)
                  })
                  .catch(function (e) {
                    n(f.a)(e), i.replace('/messages')
                  })
              },
              [o, r, n, i],
            ),
            a.a.createElement(
              a.a.Fragment,
              null,
              t && a.a.createElement(b.a, { to: '/messages/'.concat(t) }),
              a.a.createElement(m.a, { fetchStatus: h.a.LOADING, render: g.a }),
            )
          )
        },
        E = p(_)
      t.default = E
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
        o = n.n(i),
        c = n('Lsrn'),
        s = n('k/Ka')
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
      var d = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(s.a)(
          'svg',
          u(
            u({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [c.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          o.a.createElement(
            'g',
            null,
            o.a.createElement('path', {
              d: 'M23.25 3.25h-2.425V.825c0-.414-.336-.75-.75-.75s-.75.336-.75.75V3.25H16.9c-.414 0-.75.336-.75.75s.336.75.75.75h2.425v2.425c0 .414.336.75.75.75s.75-.336.75-.75V4.75h2.425c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm-3.175 6.876c-.414 0-.75.336-.75.75v8.078c0 .414-.337.75-.75.75H4.095c-.412 0-.75-.336-.75-.75V8.298l6.778 4.518c.368.246.79.37 1.213.37.422 0 .844-.124 1.212-.37l4.53-3.013c.336-.223.428-.676.204-1.012-.223-.332-.675-.425-1.012-.2l-4.53 3.014c-.246.162-.563.163-.808 0l-7.586-5.06V5.5c0-.414.337-.75.75-.75h9.094c.414 0 .75-.336.75-.75s-.336-.75-.75-.75H4.096c-1.24 0-2.25 1.01-2.25 2.25v13.455c0 1.24 1.01 2.25 2.25 2.25h14.48c1.24 0 2.25-1.01 2.25-2.25v-8.078c0-.415-.337-.75-.75-.75z',
            }),
          ),
        )
      }
      ;(d.metadata = { width: 24, height: 24 }), (t.a = d)
    },
    BUB3: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        i = n('m3Bd'),
        o = n.n(i),
        c = n('ERkP'),
        s = n.n(c),
        l = n('sNn6'),
        u = n('rHpw'),
        d = n('MWbm')
      function p(e, t) {
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
      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? p(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : p(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var h = u.a.create(function (e) {
        return {
          activeRoot: { backgroundColor: e.colors.gray0 },
          overlay: f(
            f({}, u.a.absoluteFillObject),
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
        return s.a.createElement(l.a, n, function (e) {
          return s.a.createElement(
            d.a,
            { style: e && h.activeRoot },
            'function' == typeof t ? t(e) : t,
            e ? s.a.createElement(d.a, { pointerEvents: 'none', style: h.overlay }) : null,
          )
        })
      }
    },
    CFcj: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'ConversationGroupInfoScreen', function () {
          return re
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
        _ = n.n(g),
        E = n('LCtV'),
        O = (n('WNMA'), n('KqXw'), n('MMRb')),
        S = n('AspN'),
        C = n('RqPI'),
        w = n('hqKg'),
        R = n('p9G8'),
        I = n('AQOc'),
        k = n('/NU0'),
        P = n('G6rE'),
        x = n('0KEI'),
        T = n('oEGd'),
        A = function (e, t) {
          return t.match.params.conversationId
        },
        M = Object(w.createSelector)(
          function (e, t) {
            return O.selectConversation(e, A(0, t))
          },
          O.selectEntries,
          A,
          function (e, t) {
            return O.selectConversationFetchStatus(e, A(0, t))
          },
          C.q,
          P.e.selectAll,
          function (e, t) {
            var n = O.selectConversationAvatarMediaId(e, A(0, t)),
              r = Object(k.a)(n) ? S.k(e, n) : []
            return a()(r, 1)[0]
          },
          function (e, t) {
            return O.selectConversationAvatarMediaIsUploading(e, A(0, t))
          },
          function (e, t) {
            return O.selectConversationAvatarMediaUploadProgress(e, A(0, t))
          },
          function (e, t, n, r, a, i, o, c, s) {
            var l = e && e.data,
              u = l && Object(I.b)(l, t, i),
              d = u && Object(R.a)(u, a)
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
        j = {
          addAvatarMedia: O.addAvatarMedia,
          createLocalApiErrorHandler: Object(x.createLocalApiErrorHandlerWithContextFactory)(
            'CONVERSATION_GROUP_INFO_SCREEN',
          ),
          fetchConversation: O.fetchConversation,
          fetchConversationIfNeeded: O.fetchConversationIfNeeded,
          removeAvatarMedia: O.removeAvatarMedia,
          removeMediaUpload: S.i,
          setConversationAvatar: O.setConversationAvatar,
          updateConversationName: O.updateConversationName,
        },
        D = Object(T.g)(M, j),
        L = n('I2k/'),
        F = n('aA19'),
        B = n('v//M'),
        N = n('jHSc'),
        H = n('3XMw'),
        U = n.n(H),
        V = n('mN6z'),
        W = n('P68U'),
        z = n('eyty'),
        K = n('MWbm'),
        G = n('mw9i'),
        q = n('/yvb'),
        Y = n('JYMr'),
        X = n('p+r5'),
        Q = n('rHpw'),
        Z = n('7JQg')
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
      var $ = U.a.abd845fd,
        ee = U.a.d87bff5a,
        te = U.a.i2209530,
        ne = U.a.cabb453d,
        re = (function (e) {
          p()(n, e)
          var t = J(n)
          function n(e, r) {
            var i
            return (
              o()(this, n),
              (i = t.call(this, e, r)),
              b()(u()(i), '_renderContent', function () {
                return _.a.createElement(K.a, null, i._renderGroupAvatarPicker(), i._renderGroupNameEditor())
              }),
              b()(u()(i), '_handleFetch', function () {
                var e = i.props,
                  t = e.conversationId,
                  n = e.createLocalApiErrorHandler
                ;(0, e.fetchConversationIfNeeded)({ conversationId: t }).catch(n(Object(L.a)(t)))
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
                      a({ conversationId: n }).catch(r(Object(L.a)(n))),
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
                    return !Object(V.a)(e, this.props) || !Object(V.a)(t, this.state)
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var e = this.props,
                      t = e.conversationId,
                      n = e.fetchStatus,
                      r = e.history
                    return _.a.createElement(
                      N.b,
                      {
                        backLocation: '/messages/'.concat(t, '/info'),
                        history: r,
                        rightControl: this._renderRightControl(),
                        title: $,
                      },
                      _.a.createElement(
                        G.a,
                        { style: ae.root },
                        _.a.createElement(B.a, {
                          accessibilityLabel: ee,
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
                    return _.a.createElement(q.a, {
                      children: te,
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
                      i = _.a.createElement(F.a, { conversation: n, perspective: a })
                    return _.a.createElement(
                      K.a,
                      null,
                      _.a.createElement(Y.a, { progress: r }),
                      _.a.createElement(
                        K.a,
                        { style: ae.avatarContainerRoot },
                        _.a.createElement(W.default, {
                          borderRadius: E.a.INFINITE,
                          currentContent: i,
                          location: z.d.Avatar,
                          mediaItem: t || void 0,
                          onChange: this._handleAvatarMediaChange,
                          onFailure: this._handleMediaFailure,
                          rootStyle: ae.avatarContainer,
                        }),
                      ),
                    )
                  },
                },
                {
                  key: '_renderGroupNameEditor',
                  value: function () {
                    return _.a.createElement(X.a, {
                      label: ne,
                      maxLength: 50,
                      name: 'groupNameEdit',
                      onChange: this._handleGroupNameUpdated,
                      style: ae.groupNameEditor,
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
        })(_.a.Component),
        ae = Q.a.create(function (e) {
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
      t.default = Object(Z.c)({ page: 'messages', section: 'group_settings' })(D(re))
    },
    EPsT: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return O
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
        b = n.n(y),
        g = n('jtO7'),
        _ = n('eb3s')
      function E(e) {
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
      var O = (function (e) {
        u()(n, e)
        var t = E(n)
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
                return b.a.createElement(
                  b.a.Fragment,
                  null,
                  b.a.createElement(g.a, { align: t, color: n, label: c, onPress: this._handleClick }),
                  this.state.showConfirmation
                    ? b.a.createElement(_.a, {
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
      })(b.a.Component)
      v()(O, 'defaultProps', { color: 'red500', align: 'center' })
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
        b = n.n(y),
        g = n('rxPX'),
        _ = n('0KEI'),
        E = function (e, t) {
          return t.module.selectFetchStatus(e)
        },
        O = function (e, t) {
          return t.module.selectItems(e)
        },
        S = Object(g.a)()
          .propsFromState(function (e) {
            return { fetchStatus: E, items: O }
          })
          .propsFromActions(function (e) {
            var t = e.module
            return {
              createLocalApiErrorHandler: Object(_.createLocalApiErrorHandlerWithContextFactory)('SLICES_TIMELINE'),
              fetch: t.fetch,
              fetchIfNeeded: t.fetchIfNeeded,
              fetchBottom: t.fetchBottom,
            }
          }),
        C = n('v//M'),
        w = n('sIe2'),
        R = n('3XMw'),
        I = n.n(R),
        k = n('TEoO')
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
      var x = I.a.i9028824,
        T = 'sliceTimeline',
        A = function (e) {
          return e
        },
        M = { viewType: 'timeline' },
        j = (function (e) {
          u()(n, e)
          var t = P(n)
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
                  ? b.a.createElement(k.a, {
                      cacheKey: T,
                      footer: n,
                      identityFunction: A,
                      items: r,
                      noItemsRenderer: a,
                      onNearEnd: e._handleNearEnd,
                      onScrollEnd: o,
                      renderer: c,
                      withoutHeadroom: s,
                    })
                  : b.a.createElement(w.a, {
                      ListEmptyComponent: a,
                      data: r,
                      keyExtractor: A,
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
                    ? b.a.createElement(C.a, {
                        accessibilityLabel: x,
                        behavioralEventContext: M,
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
        })(b.a.Component)
      v()(j, 'defaultProps', { numColumns: 1, alwaysFetch: !1 })
      var D = S(j)
      t.a = D
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
        a = n.n(r),
        i = n('3XMw'),
        o = n.n(i),
        c = n('MWbm'),
        s = n('rHpw'),
        l = n('t62R'),
        u = s.a.create(function (e) {
          return { root: { paddingBottom: e.spaces.space20 } }
        }),
        d = o.a.d84b485d,
        p = o.a.be0c83d7
      t.a = function (e) {
        var t = e.entry,
          n = e.isCompact,
          r = 'follow' === t.reason ? d : p
        return n
          ? a.a.createElement(l.b, { color: 'gray700' }, r)
          : a.a.createElement(
              c.a,
              { style: u.root },
              a.a.createElement(l.b, { align: 'center', color: 'gray700', size: 'subtext2' }, r),
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
        u = n.n(l),
        d = n('PnKw'),
        p = n('vYiB'),
        f = n('X3+4'),
        h = n('rcen'),
        m = n('k89r')
      function v(e, t) {
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
      function y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? v(Object(n), !0).forEach(function (t) {
                o()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : v(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function b(e) {
        var t = e.bodyRichText,
          n = e.bodyText,
          r = e.onImpression,
          i = e.primaryAction,
          o = e.titleRichText,
          c = e.titleText,
          l = s()(e, ['bodyRichText', 'bodyText', 'onImpression', 'primaryAction', 'titleRichText', 'titleText']),
          v = Object(m.a)(),
          b = function () {
            v.scribe({ action: 'click' })
          },
          g = o
            ? u.a.createElement(h.a, { entities: o.entities, onEntityClick: b, text: o.text })
            : c && c.length
            ? c
            : null,
          _ = t
            ? u.a.createElement(h.a, { entities: t.entities, onEntityClick: b, text: t.text })
            : n && n.length
            ? n
            : null,
          E = function (e) {
            return y(
              y({}, i),
              {},
              {
                onClick: function (t) {
                  ;(null == i ? void 0 : i.onClick) && i.onClick(t), e(t)
                },
              },
            )
          },
          O = u.a.createElement(f.a.Consumer, null, function (e) {
            var t = e.handleNextSlide
            return u.a.createElement(d.a, a()({}, l, { headline: g, primaryAction: i ? E(t) : void 0, subtext: _ }))
          })
        return 'function' == typeof r ? u.a.createElement(p.a, { onImpression: r }, O) : O
      }
      ;(b.defaultProps = { shouldRenderBorder: !1 }), (t.a = b)
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
        E = n.n(_),
        O = n('HPNB'),
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
            appBarContainer: {
              position: 'sticky',
              top: 0,
              backfaceVisibility: 'hidden',
              zIndex: e.componentZIndices.appBarZIndex,
            },
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
            b()(u()(e), '_renderChildren', function () {
              var t = e.props.children
              return e.context.rootDetailPerColumnScroll
                ? E.a.createElement(
                    x.a,
                    { style: P.fill },
                    E.a.createElement(T.a, { style: P.viewportView }, e._renderInlineNav({ isTwoColumnLayout: !0 }), t),
                  )
                : t
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
                return E.a.createElement(M.a, null, function (t) {
                  var n = t.windowWidth
                  return O.a.isTwoColumnLayout(n) ? e._renderForTwoColumnLayout() : e._renderForOneColumnLayout()
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
                return E.a.createElement(
                  E.a.Fragment,
                  null,
                  Object(w.a)()
                    ? this._renderInlineNav({ isTwoColumnLayout: !1 })
                    : E.a.createElement(C.a.Configure, n),
                  t,
                )
              },
            },
            {
              key: '_renderForTwoColumnLayout',
              value: function () {
                var e = this.context.rootDetailPerColumnScroll
                return E.a.createElement(
                  E.a.Fragment,
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
                  r = n.SideNavButton,
                  a = n.TabBar,
                  i = n.TeamsSwitcher,
                  o = n.backLocation,
                  c = n.documentTitle,
                  s = n.headerless,
                  l = n.history,
                  u = n.leftControl,
                  d = n.middleControl,
                  p = n.onBackClick,
                  f = n.rightControl,
                  h = n.screenType,
                  m = n.searchBoxOptions,
                  v = n.secondaryBar,
                  y = n.showSubtitleOnRoot,
                  b = n.showSubtitleOnWideDetail,
                  _ = n.subtitle,
                  O = n.title,
                  w = n.titleIconCell,
                  R = n.titleIconCellSize,
                  I = n.withBottomBorder,
                  k = n.withDetailOpen,
                  T = n.withSearchBox,
                  A = n.withTweetButton,
                  M = 'root' === h,
                  j = 'secondaryRoot' === h,
                  D = 'primaryDetail' === h,
                  L = (D && b) || (M && y),
                  F = M || (D && t),
                  B = M ? g.c : D ? g.a : void 0,
                  N = E.a.createElement(
                    x.a,
                    { style: P.appBarContainer },
                    E.a.createElement(S.a, {
                      backLocation: o,
                      fixed: !1,
                      hideBackButton: F,
                      history: l,
                      leftControl: u,
                      middleControl: d,
                      onBackClick: p,
                      rightControl: f,
                      secondaryBar: v,
                      subtitle: L ? _ : void 0,
                      title: O,
                      titleDomId: B,
                      titleIconCell: w,
                      titleIconCellSize: R,
                      withBottomBorder: I,
                    }),
                  ),
                  H =
                    M || (j && k)
                      ? null
                      : E.a.createElement(C.a.Configure, {
                          SideNavButton: r,
                          TabBar: a,
                          TeamsSwitcher: i,
                          backLocation: o,
                          documentTitle: c,
                          headerless: s,
                          middleControl: d,
                          onBackClick: p,
                          rightControl: f,
                          searchBoxOptions: m,
                          subtitle: _,
                          title: O,
                          withSearchBox: T,
                          withTweetButton: A,
                        })
                return E.a.createElement(E.a.Fragment, null, H, N)
              },
            },
          ]),
          n
        )
      })(E.a.Component)
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
        o = n.n(i),
        c = n('Lsrn'),
        s = n('k/Ka')
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
      var d = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(s.a)(
          'svg',
          u(
            u({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [c.a.root, e.style], viewBox: '0 0 24 24' },
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
      ;(d.metadata = { width: 24, height: 24 }), (t.a = d)
    },
    OhSZ: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return g
      })
      var r = n('ddV6'),
        a = n.n(r),
        i = (n('z84I'), n('ho0z'), n('+KXO'), n('ERkP')),
        o = n.n(i),
        c = n('aWyx'),
        s = n('XnpN'),
        l = n('3XMw'),
        u = n.n(l),
        d = n('jV+4'),
        p = n('pjBI'),
        f = n('t62R'),
        h = n('rHpw'),
        m = n('p9G8'),
        v = u.a.cfd94063,
        y = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
          return e.map(function (e) {
            return e.data
          })
        },
        b = h.a.create(function (e) {
          return { title: { maxWidth: '50%' } }
        }),
        g = function (e) {
          var t = e.conversation,
            n = e.newConversationParticipants,
            r = e.perspective
          if (t) {
            if (t.type === c.a.ONE_TO_ONE) {
              var i = Object(s.a)(t, r).map(function (e) {
                return e.user
              })
              return a()(i, 1)[0].name
            }
            return Object(m.a)(t, r)
          }
          var o = y(n)
          return Object(m.b)(o, r)
        }
      t.b = function (e) {
        var t = e.conversation,
          n = e.isConversationSearchTitle,
          r = void 0 !== n && n,
          i = e.isMessageSearchTitle,
          l = void 0 !== i && i,
          u = e.newConversationParticipants,
          h = e.perspective,
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
          if (t.type === c.a.ONE_TO_ONE) {
            var P = Object(s.a)(t, h).map(function (e) {
                return e.user
              }),
              x = a()(P, 1)[0],
              T = o.a.createElement(d.a, {
                color: E,
                isProtected: x.protected,
                isVerified: x.verified,
                name: x.name,
                screenName: x.screen_name,
                weight: S,
                withLink: !1,
                withScreenName: w,
              })
            return (I && !r) || l ? o.a.createElement(p.a, null, T, k) : T
          }
          var A = t.participants,
            M = Object.keys(A).length
          if (r)
            return o.a.createElement(
              p.a,
              { color: E },
              o.a.createElement(f.b, { color: E, numberOfLines: 1, style: b.title, weight: S }, Object(m.a)(t, h, r)),
              I
                ? null
                : o.a.createElement(
                    f.b,
                    { color: 'gray700', numberOfLines: 1, weight: 'normal' },
                    v({ peopleCount: M }),
                  ),
            )
          var j = o.a.createElement(f.b, { color: E, numberOfLines: 1, weight: S }, Object(m.a)(t, h, r))
          return (I && !r) || l ? o.a.createElement(p.a, null, j, k) : j
        }
        var D = y(u)
        return o.a.createElement(f.b, { color: E, numberOfLines: 1, weight: S }, Object(m.b)(D, h))
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
        b = n.n(y),
        g = n('0JOx'),
        _ = n('zh9S'),
        E = n('MMRb'),
        O = n('CDB5'),
        S = n('RqPI'),
        C = n('1YZw'),
        w = n('hqKg'),
        R = n('kGix'),
        I = n('AQOc'),
        k = n('UhuB'),
        P = n('pNZL'),
        x = n('G6rE'),
        T = n('oEGd'),
        A = n('X/yg'),
        M = n('0KEI'),
        j = n('P1r1'),
        D = function (e, t) {
          return t.conversationId
        },
        L = Object(w.createSelector)(
          E.selectFetchStatus,
          function (e, t) {
            return E.selectConversationFetchStatus(e, D(0, t))
          },
          function (e, t) {
            return e === R.a.LOADED ? t : e
          },
        ),
        F = Object(w.createSelector)(
          function (e, t) {
            return E.selectEntriesForConversation(e, D(0, t))
          },
          S.q,
          function (e, t) {
            return t ? Object(A.d)(e, t) : void 0
          },
        ),
        B = Object(w.createSelector)(
          function (e, t) {
            return E.selectConversation(e, D(0, t))
          },
          E.selectEntries,
          A.l,
          S.q,
          A.m,
          A.n,
          x.e.selectAll,
          L,
          function (e, t) {
            return O.g(e, D(0, t))
          },
          function (e, t) {
            return O.j(e, D(0, t))
          },
          function (e, t) {
            return O.i(e, D(0, t))
          },
          function (e, t) {
            return O.k(e, D(0, t))
          },
          function (e, t) {
            return O.h(e, D(0, t))
          },
          function (e, t) {
            return O.l(e, D(0, t))
          },
          j.k,
          k.n,
          F,
          j.n,
          function (e, t) {
            var n = D(0, t)
            return E.selectInboxTypeByConversation(e, n)
          },
          function (e, t, n, r, a, i, o, c, s, l, u, d, p, f, h, m, v, y, b) {
            var g = e && e.data
            return {
              conversation: (g && Object(I.a)(g, t, o)) || void 0,
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
        N = Object(T.d)(B, function (e) {
          return {
            acceptConversation: E.acceptConversation,
            addMedia:
              ((t = e.conversationId),
              function (e, n) {
                return O.a(t, e, n)
              }),
            saveText: O.f,
            addToast: C.b,
            addWelcomeMessageToConversation: E.addWelcomeMessageToConversation,
            cancelUpload: Object(A.a)(e.conversationId),
            createLocalApiErrorHandler: Object(M.createLocalApiErrorHandlerWithContextFactory)(
              'DIRECT_MESSAGES_CONVERSATION',
            ),
            fetchConversationHistory: E.fetchConversationHistory,
            fetchConversationIfNeeded: E.fetchConversationIfNeeded,
            fetchInboxIfNeeded: E.fetchInboxIfNeeded,
            fetchUpdatesIfNeeded: E.fetchUpdatesIfNeeded,
            googleAnalyticsPageView: _.a,
            leaveConversation: E.leaveConversation,
            removeMedia: Object(A.b)(e.conversationId),
            removeText: O.d,
            scribeAction: _.c,
            scribePageImpression: _.d,
            sendMessage: O.m,
            updateConversationReadState: E.updateConversationReadState,
            updateTweetDetailNav: P.b,
            updateTyping: E.updateTyping,
            removeConversation: E.removeConversation,
            popOutConversation: E.popOutConversation,
          }
          var t
        }),
        H = n('I2k/'),
        U = n('ejT/'),
        V = n('7n04'),
        W = n('Myq3'),
        z = n('VPAj')
      function K(e, t) {
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
            ? K(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : K(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var q = function (e, t) {
          return e.getForItem(t).doesIntersectWith(e.getForViewport())
        },
        Y = function (e) {
          return e.getForList().getBottom() - e.getForViewport().getBottom()
        },
        X = function (e) {
          var t = e.isOwnMessage,
            n = e.typingIndicatorId,
            r = function (e) {
              return Object(W.a)(e.getList(), function (e) {
                return e.id !== n
              })
            }
          return G(
            G({}, V.a),
            {},
            {
              initialScrollHeadroom: Object(z.a)(0),
              scrollHeadroom: Object(z.a)(0),
              offsetCorrection: function (e, a) {
                var i = r(e),
                  o = r(a),
                  c = o && (!i || i.id !== o.id),
                  s = o && t(o.data.data),
                  l = i && q(e, i.id)
                return (c && (s || l)) ||
                  (l &&
                    (function (e, t) {
                      var r = e.getForItem(n),
                        a = t.getForItem(n)
                      return !r || (a && a.getHeight() > r.getHeight())
                    })(e, a))
                  ? Math.max(0, Y(a))
                  : V.a.offsetCorrection(e, a)
              },
            },
          )
        },
        Q = (n('KOtZ'), n('gbD7')),
        Z = (n('Blm6'), n('b9JY')),
        J = function (e, t) {
          if (e && e.message_data && t && t.message_data && Object(Z.b)(e) && Object(Z.b)(t)) {
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
        $ = n('jat/'),
        ee = (n('jQ/y'), n('ho0z'), n('uFXj'), n('v6aA')),
        te = n('XnpN'),
        ne = n('LhSm'),
        re = n('I4+6'),
        ae = n('rHpw'),
        ie = n('PbQQ'),
        oe = n('cm6r'),
        ce = n('jV+4'),
        se = n('pBrB'),
        le = n('wCd/'),
        ue = function (e, t) {
          var n = Object(te.a)(e, t).map(function (e) {
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
        de = ae.a.create(function (e) {
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
        pe = function (e) {
          var t = e.conversation,
            n = e.withBottomBorder,
            r = void 0 === n || n,
            a = b.a.useContext(ee.a).loggedInUserId
          if (!t) return null
          var i = ue(t, a || ''),
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
            y = !!(f && h && ((s && l) || p)),
            g = re.a.generate({
              color: ae.a.theme.colors.text,
              backgroundColor: ae.a.theme.colors.transparent,
              customFocusBackgroundColor: ae.a.theme.colors.gray0,
              customHoverBackgroundColor: ae.a.theme.colors.gray0,
              customPressedBackgroundColor: ae.a.theme.colors.activeFaintGray,
            })
          return b.a.createElement(ie.a.Consumer, null, function (e) {
            return b.a.createElement(
              oe.a,
              {
                interactiveStyles: g,
                link: e.withAnchorless('https://twitter.com/'.concat(h || '')),
                style: [de.root, r && y && de.borderBottom],
              },
              b.a.createElement(ce.a, {
                isVerified: d,
                name: f,
                screenName: h,
                style: de.profileInfoItemMargin,
                weight: 'bold',
                withHoverCard: !0,
                withLink: !0,
              }),
              o && c && u
                ? b.a.createElement(se.a, {
                    description: o,
                    entities: c,
                    style: [de.profileInfoItemMargin, de.description],
                    userId: u,
                    withheldDescription: m,
                    withheldEntities: v,
                  })
                : null,
              s && l
                ? b.a.createElement(le.a, {
                    followersCount: s,
                    friendsCount: l,
                    screenName: h || '',
                    style: de.profileInfoItemMargin,
                    withLink: !1,
                  })
                : null,
              p ? b.a.createElement(ne.a, { joinDate: p }) : null,
            )
          })
        },
        fe = n('V/6K'),
        he = n('cFyg'),
        me = (n('hBvt'), n('2G9S'), n('M+/F'), n('vrRf'), n('g54k')),
        ve = n('aA19'),
        ye = n('aWyx'),
        be = n('mN6z'),
        ge = n('MWbm'),
        _e = n('t62R'),
        Ee = n('jhWN'),
        Oe = n('MAI/'),
        Se = n('zQEV')
      function Ce(e) {
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
      var we = function (e) {
          var t = e.children,
            n = e.link,
            r = e.style
          return b.a.createElement(_e.b, { align: 'center', color: 'gray700', link: n, size: 'subtext2', style: r }, t)
        },
        Re = (function (e) {
          u()(n, e)
          var t = Ce(n)
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
                  c = Object(Se.a)(r, a, i, o)
                switch (a) {
                  case ye.b.CONVERSATION_AVATAR_UPDATE:
                    var s = n.avatar_image_https === r.conversation_avatar_image_https
                    return b.a.createElement(
                      b.a.Fragment,
                      null,
                      e._isValidImageSource(n.avatar_image_https) && s
                        ? b.a.createElement(
                            ge.a,
                            { style: Ie.conversationAvatarContainer },
                            b.a.createElement(ve.a, { conversation: n, perspective: i }),
                          )
                        : null,
                      b.a.createElement(we, null, c),
                    )
                  case ye.b.JOIN_CONVERSATION:
                    var l = e._getAddedYouMessageWithProfileInfo(c),
                      u = e._getParticipantsFromEntry(),
                      d = b.a.createElement(
                        _e.b,
                        { align: 'center', color: 'gray700', size: 'subtext2' },
                        e._getParticipantsFromEntryText(u),
                      ),
                      p = e._getJoinConversationDetailsWithFacepile(u, d)
                    return b.a.createElement(b.a.Fragment, null, l, p)
                  default:
                    return b.a.createElement(we, null, c)
                }
              }),
              v()(s()(e), '_getAddedYouMessageWithProfileInfo', function (t) {
                var n = e.props,
                  r = n.entry,
                  a = n.users,
                  i = r.sender_id ? a[r.sender_id] : void 0,
                  o = i ? { pathname: 'https://twitter.com/'.concat(i.screen_name) } : void 0
                return b.a.createElement(
                  oe.a,
                  { interactiveStyles: null, link: o, style: Ie.userAddedYouContainer },
                  i
                    ? b.a.createElement(Ee.a, {
                        accessibilityLabel: i.screen_name,
                        screenName: i.screen_name,
                        size: 'medium',
                        uri: i.profile_image_url_https,
                        withHoverCard: !0,
                        withLink: !0,
                      })
                    : null,
                  b.a.createElement(we, { link: o, style: Ie.userAddedYouText }, t),
                )
              }),
              v()(s()(e), '_getJoinConversationDetailsWithFacepile', function (t, n) {
                var r = e.props.conversation,
                  a = t.slice(0, 20).map(function (e) {
                    return e.profile_image_url_https
                  })
                return b.a.createElement(
                  oe.a,
                  {
                    interactiveStyles: null,
                    link: { pathname: '/messages/'.concat(r.conversation_id, '/participants') },
                    style: Ie.joinConversationDetails,
                  },
                  n,
                  b.a.createElement(Oe.a, {
                    style: Ie.userAvatarFacepile,
                    userAvatarSize: 'xLarge',
                    userAvatarUrls: a,
                  }),
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
                  return !Object(be.a)(this.props, e)
                },
              },
              {
                key: 'render',
                value: function () {
                  return b.a.createElement(ge.a, { style: Ie.root }, this._renderContents())
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
                  return Object(Se.b)(e.length, t)
                },
              },
            ]),
            n
          )
        })(b.a.Component),
        Ie = ae.a.create(function (e) {
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
        ke = Object(me.a)(Re),
        Pe = n('ddV6'),
        xe = n.n(Pe),
        Te = n('oQhu')
      var Ae = Object(Te.a)(function (e) {
          var t = ae.a.theme.spacesPx.space40
          return {
            DMUserAvatarSizeType: 'xLarge',
            DMUserAvatarSizePx: t,
            DMUserAvatarSpacerPx: t + ae.a.theme.spacesPx.space12,
          }
        }),
        Me = n('shC7'),
        je = n('38/B'),
        De = function (e) {
          return Le(e, je.a.reducedMotionEnabled)
        },
        Le = Object(Te.a)(function (e, t) {
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
              ((n = Ae(ae.a.theme.scale)),
              (r = n.DMUserAvatarSizePx),
              (a = n.DMUserAvatarSpacerPx),
              (i = He[ae.a.theme.scale]),
              (o = Be / i),
              (c = Ne / r),
              (l = Ne - (s = Ne / 2)),
              (u = Ne - s - a),
              {
                cssTransition: je.a.reducedMotionEnabled
                  ? {}
                  : { transition: 'transform '.concat(Ve, ', opacity ').concat(Ve) },
                messageContainer: {
                  base: { transform: [{ translateX: 0 }] },
                  active: {
                    sent: { transform: [{ translateX: (Me.a.getConstants().isRTL ? 1 : -1) * l }] },
                    received: { transform: [{ translateX: (Me.a.getConstants().isRTL ? -1 : 1) * u }] },
                  },
                },
                actionsContainer: {
                  base: { transform: [{ translateX: 0 }] },
                  active: {
                    sent: { transform: [{ translateX: (Me.a.getConstants().isRTL ? 1 : -1) * Ue[ae.a.theme.scale] }] },
                    received: {
                      transform: [
                        { translateX: (Me.a.getConstants().isRTL ? -1 : 1) * (Ue[ae.a.theme.scale] + u) - s },
                      ],
                    },
                  },
                },
                voiceMessage: {
                  container: { base: { height: i }, active: { height: Be } },
                  base: { height: i, transform: [{ scale: 1 }] },
                  active: {
                    base: { transform: [{ scale: o }] },
                    sent: {
                      paddingRight: s / o,
                      transformOrigin: Me.a.getConstants().isRTL ? 'bottom left' : 'bottom right',
                    },
                    received: {
                      paddingLeft: s / o,
                      transformOrigin: Me.a.getConstants().isRTL ? 'bottom right' : 'bottom left',
                    },
                  },
                },
                userAvatar: {
                  base: { transform: [{ scale: 1 }] },
                  sent: { transformOrigin: Me.a.getConstants().isRTL ? 'bottom left' : 'bottom right' },
                  received: { transformOrigin: Me.a.getConstants().isRTL ? 'bottom right' : 'bottom left' },
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
      var Fe,
        Be = 60,
        Ne = Be,
        He = { xSmall: 42, small: 42, normal: 47, large: 47, xLarge: 47 },
        Ue = {
          xSmall: 72.26,
          small: 165.61 - 89.3,
          normal: 158.22 - 94.4,
          large: 166.64 - 100.58,
          xLarge: 181.55 - 111.81,
        },
        Ve = '0.2s 0s ease-in-out',
        We = n('+Kfv'),
        ze = { scribeAction: _.c },
        Ke = Object(w.createSelector)(
          function (e, t) {
            return x.e.select(e, t.senderId)
          },
          j.l,
          j.r,
          function (e, t, n) {
            return { user: e, displaySensitiveMedia: t, isDmNsfwMediaFilterEnabled: n }
          },
        ),
        Ge = Object(T.g)(Ke, ze),
        qe = {
          addToast: C.b,
          createLocalApiErrorHandler: Object(M.createLocalApiErrorHandlerWithContextFactory)(
            'DIRECT_MESSAGES_OVERFLOW_ACTIONS',
          ),
          deleteEntry: E.deleteEntry,
        },
        Ye = Object(T.b)(qe),
        Xe = n('k49u'),
        Qe = n('LVU8'),
        Ze = n('3XMw'),
        Je = n.n(Ze),
        $e = Je.a.f58dff33,
        et = Je.a.ad5a8e8e,
        tt =
          ((Fe = {}),
          v()(Fe, Xe.a.MissingParameter, { toast: Object(Qe.a)($e) }),
          v()(Fe, Xe.a.DirectMessageDestroyPermissionsError, { toast: { text: et } }),
          v()(Fe, 'showToast', !0),
          Fe),
        nt = (n('jQ3i'), n('x4t0'), n('xCUF')),
        rt = n('uKEd'),
        at = [],
        it = Object(w.createSelector)(
          function (e) {
            return Object(rt.l)(e).entries
          },
          function (e, t) {
            return Object(rt.p)(e, t.entry.id) || at
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
          createReaction: rt.d,
          createLocalApiErrorHandler: Object(M.createLocalApiErrorHandlerWithContextFactory)(
            'DIRECT_MESSAGES_REACTIONS_POPOVER',
          ),
          fetchUpdatesIfNeeded: nt.d,
          removeReaction: rt.k,
        },
        ct = Object(T.g)(it, ot),
        st = n('RhWx'),
        lt = n.n(st),
        ut = n('33Kz'),
        dt = n('wTX1'),
        pt = function (e) {
          var t = e.accessibilityLabelFormatter,
            n = e.count,
            r = e.emojiSize,
            a = e.emotion,
            i = e.enableHoverStyle,
            o = e.focusable,
            c = e.onPress,
            s = e.style,
            l = b.a.useContext(ee.a).featureSwitches,
            u = Object(ut.b)(a, l),
            d = t && u ? t({ emoji: u, count: n }) : void 0,
            p = re.a.generate({ backgroundColor: ae.a.theme.colors.gray50, color: ae.a.theme.colors.gray700 })
          return b.a.createElement(
            oe.a,
            {
              accessibilityLabel: d,
              focusable: o,
              interactiveStyles: i ? p : null,
              onPress: c,
              style: [ft.container].concat(lt()(s || [])),
            },
            b.a.createElement(_e.b, { size: r, style: ft.unsetLineHeight }, u),
            n
              ? b.a.createElement(dt.a, { color: 'gray700', containerStyle: ft.count, count: n, size: 'subtext3' }, n)
              : null,
          )
        },
        ft = ae.a.create(function (e) {
          return {
            container: { flexDirection: 'row' },
            count: { alignSelf: 'center', minWidth: e.spaces.space16, paddingLeft: e.spaces.space2 },
            unsetLineHeight: { lineHeight: 'unset' },
          }
        }),
        ht = n('pHkl'),
        mt = n('Irs7')
      function vt(e) {
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
      var yt = Je.a.ca7a2214,
        bt = Je.a.fc0e94b7,
        gt = (function (e) {
          u()(n, e)
          var t = vt(n)
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
                  l = Object(A.c)(i)
                a.scribe({
                  section: 'twitter_service',
                  component: 'direct_messages',
                  element: s,
                  action: 'success',
                  data: {
                    conversation_id: i.conversation_id,
                    conversation_participant_count: c,
                    conversation_type: o ? ht.g.GROUP : ht.g.ONE_TO_ONE,
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
                    n = Object(ut.a)(this.context.featureSwitches).map(function (n) {
                      var r = t.includes(n)
                      return b.a.createElement(pt, {
                        accessibilityLabelFormatter: r ? yt : bt,
                        emojiSize: 'title4',
                        emotion: n,
                        enableHoverStyle: !0,
                        focusable: !0,
                        key: n,
                        onPress: e._reactionClickHandler(n, r),
                        style: [Et.reaction, r && Et.selectedReaction],
                      })
                    })
                  return b.a.createElement(ge.a, { style: Et.reactions }, n)
                },
              },
            ]),
            n
          )
        })(b.a.Component)
      v()(gt, 'contextType', ee.a)
      var _t = Object(mt.a)(ct(gt)),
        Et = ae.a.create(function (e) {
          return {
            reactions: { cursor: 'pointer', flexDirection: 'row', padding: e.spaces.space12 },
            reaction: { borderRadius: e.borderRadii.small, padding: e.spaces.space4 },
            selectedReaction: { backgroundColor: e.colors.gray50 },
          }
        }),
        Ot = n('OiMc')
      function St(e) {
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
      var Ct = (function (e) {
        u()(n, e)
        var t = St(n)
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
              return b.a.createElement(_t, { dismiss: t, entry: r, isGroupDM: a, participantsCount: i, perspective: o })
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
                return b.a.createElement(
                  Ot.a,
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
      })(b.a.Component)
      v()(Ct, 'contextType', fe.a)
      var wt = n('fz3c'),
        Rt = n('TnY3'),
        It = n('mjJ+'),
        kt = n('Q0VY'),
        Pt = n('eb3s'),
        xt = n('/yvb'),
        Tt = n('ZToW'),
        At = n('CaKu'),
        Mt = n('i4Oy'),
        jt = (n('hBpG'), n('tVqn'), n('tQbP'), n('4w6w')),
        Dt = function (e, t) {
          if (null == e) return !1
          var n = t || [0, 0],
            r = xe()(n, 2),
            a = r[0],
            i = r[1]
          return !((0 === a || 1 === a) && e.length === i)
        },
        Lt = function (e) {
          var t = e.message_data
          if (!t) return !1
          var n = t.attachment
          if (!n) return !0
          if (n.sticker) return !1
          var r = n.tweet || n.photo || n.animated_gif || n.video || void 0
          if (r) return Dt(t.text, r.indices)
          if (n.card) {
            var a,
              i = ((null === (a = t.entities) || void 0 === a ? void 0 : a.urls) || []).find(function (e) {
                return e.url === n.card
              })
            return Dt(t.text, i && i.indices)
          }
          return !0
        },
        Ft = function (e) {
          var t,
            n = null == e || null === (t = e.message_data) || void 0 === t ? void 0 : t.attachment
          return !(!n || !(n.card || n.tweet || n.photo || n.animated_gif || n.video))
        },
        Bt = function (e) {
          var t,
            n = null == e || null === (t = e.message_data) || void 0 === t ? void 0 : t.attachment
          return !(!n || !n.fleet)
        },
        Nt = function (e, t, n) {
          var r = 1.25 * ae.a.theme.fontSizesPx.body
          return {
            compositeRendered: e ? void 0 !== t && void 0 !== n : void 0 !== t,
            isTextSquared: void 0 !== t && void 0 !== n && (n === t || n <= t - r),
            isAttachmentSquared: void 0 !== n && void 0 !== t && (t === n || t <= n - r),
          }
        },
        Ht = n('hiGS'),
        Ut = n('zIWA'),
        Vt = n('Lsrn'),
        Wt = n('k/Ka')
      function zt(e, t) {
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
      function Kt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? zt(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : zt(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var Gt = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(Wt.a)(
          'svg',
          Kt(
            Kt({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [Vt.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          b.a.createElement(
            'g',
            null,
            b.a.createElement('path', {
              d: 'M16.925 9.5H14.5V7.075c0-.414-.336-.75-.75-.75s-.75.336-.75.75V9.5h-2.425c-.414 0-.75.336-.75.75s.336.75.75.75H13v2.425c0 .414.336.75.75.75s.75-.336.75-.75V11h2.425c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm-.3 11H4.25c-.413 0-.75-.337-.75-.75V8.402c0-.414-.336-.75-.75-.75s-.75.336-.75.75V19.75C2 20.99 3.01 22 4.25 22h12.375c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z',
            }),
            b.a.createElement('path', {
              d: 'M19.75 2h-12C6.51 2 5.5 3.01 5.5 4.25v12c0 1.24 1.01 2.25 2.25 2.25h12c1.24 0 2.25-1.01 2.25-2.25v-12C22 3.01 20.99 2 19.75 2zm.75 14.25c0 .413-.337.75-.75.75h-12c-.413 0-.75-.337-.75-.75v-12c0-.413.337-.75.75-.75h12c.413 0 .75.337.75.75v12z',
            }),
          ),
        )
      }
      Gt.metadata = { width: 24, height: 24 }
      var qt = Gt,
        Yt = n('DlVf'),
        Xt = n('ACHU'),
        Qt = n('UgB4')
      function Zt(e, t) {
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
      function Jt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Zt(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Zt(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function $t(e) {
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
      var en = Je.a.ba60339a,
        tn = Je.a.j4bfee22,
        nn = Je.a.d96cf7cd,
        rn = Je.a.faddd3a2,
        an = Je.a.eb497e08,
        on = Je.a.b170974a,
        cn = Je.a.i202bd22,
        sn = Je.a.f2e5491a,
        ln = Je.a.f88553c8,
        un = Je.a.ifea3114,
        dn = Je.a.cac14829,
        pn = Je.a.h63a5c3b,
        fn = (function (e) {
          u()(n, e)
          var t = $t(n)
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
                  c = [{ text: en, Icon: Ht.a, isEmphasized: !0, onClick: i._handleShowDeleteConfirmation(e) }]
                return (
                  a ||
                    c.push({
                      text: cn,
                      Icon: Ut.a,
                      link: {
                        pathname: '/i/report/'.concat(wt.a.DMMessage, '/').concat(r.id),
                        state: {
                          clientReferer: window.location.pathname,
                          conversationId: r.conversation_id,
                          scribeNamespace: o,
                        },
                      },
                      onClick: i.props.onReportMessage,
                    }),
                  At.a.isAvailable() && c.push({ text: sn, Icon: qt, onClick: i._handleCopyMessageText }),
                  b.a.createElement(It.a, {
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
                n && (At.a.setString(n), t({ text: ln })), e && e()
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
                    state: { tweetAttachment: Jt(Jt({}, o), {}, { id_str: o.status }) },
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
                  l = Object(A.c)(a)
                t.scribe({
                  action: 'delete',
                  data: {
                    conversation_id: a.conversation_id,
                    conversation_type: c ? 1 : 0,
                    conversation_participant_count: s,
                    message_type: l,
                    inbox_type: Object(A.h)(o),
                  },
                }),
                  r({ conversationId: a.conversation_id, id: a.id }).catch(n(tt))
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
                t.scribe({ component: 'reaction_button', element: Object(A.c)(n), action: 'click' }),
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
                  kt.a.tweetTextParts(n, [0, n.length], t).forEach(function (e) {
                    'url' === e.entityType && (n = n.replace(e.url, e.expandedUrl))
                  }),
                  n
                )
              }),
              (i.state = { actionsAreActive: !1, showDeleteConfirmation: !1 }),
              (i._hasMedia = Ft(i.props.entry)),
              (i._isNarrow = Mt.a.get('screen').width < ae.a.theme.breakpoints.xSmall),
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
                  return b.a.createElement(
                    ge.a,
                    {
                      pointerEvents: s ? 'auto' : 'none',
                      style: [
                        mn.messageActions,
                        a ? mn.messageActionsLeft : mn.messageActionsRight,
                        s ? mn.visible : mn.invisible,
                        c && mn.vdlMessageActions,
                        this._isNarrow && (this._hasMedia ? mn.messageActionsMediaNarrow : mn.messageActionsNarrow),
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
                    ? b.a.createElement(Pt.a, {
                        confirmButtonLabel: nn,
                        confirmButtonType: 'destructiveFilled',
                        headline: tn,
                        onCancel: this._handleHideDeleteConfirmation,
                        onConfirm: this._handleDelete,
                        text: rn,
                      })
                    : null
                },
              },
              {
                key: '_renderForwardButton',
                value: function () {
                  return b.a.createElement(xt.a, {
                    accessibilityLabel: un,
                    hoverLabel: { label: un },
                    icon: vn,
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
                    c = b.a.createElement(Yt.a, { style: i ? mn.vdlActionIcon : mn.actionIcon })
                  return b.a.createElement(
                    Ct,
                    {
                      entry: t,
                      isGroupDM: n,
                      onDismiss: this._handleHideActionsAndMenus(),
                      participantsCount: r,
                      perspective: a,
                    },
                    b.a.createElement(xt.a, {
                      accessibilityExpanded: !!o,
                      accessibilityHasPopup: 'menu',
                      accessibilityLabel: on,
                      hoverLabel: { label: dn },
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
                    t = b.a.createElement(Xt.a, { style: e ? mn.vdlActionIcon : mn.actionIcon })
                  return b.a.createElement(xt.a, {
                    accessibilityLabel: an,
                    hoverLabel: { label: pn },
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
                    c = ((e = this.props.entry), !Lt(e) && Ft(e) && !Tt.a.isEnabled)
                  return !i && (c || (n && !Tt.a.isEnabled) || r || a || o)
                },
              },
            ]),
            n
          )
        })(b.a.Component)
      v()(fn, 'contextType', fe.a)
      var hn = Object(Rt.a)(Object(mt.a)(Ye(fn))),
        mn = ae.a.create(function (e) {
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
        vn = b.a.createElement(Qt.a, { style: mn.vdlActionIcon }),
        yn = n('97Jx'),
        bn = n.n(yn),
        gn = (n('6U7i'), n('rxPX')),
        _n = Object(gn.a)()
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(M.createLocalApiErrorHandlerWithContextFactory)(
                'DIRECT_MESSAGES_CONVERSATION',
              ),
              removeEntry: E.removeEntry,
              sendMessage: O.m,
            }
          })
          .withAnalytics(),
        En = '87.5%',
        On = (n('hCOa'), n('87if'), n('dlmX'), n('m9LP'), n('wrlS')),
        Sn = [],
        Cn = function (e, t) {
          return Object(rt.p)(e, t.entryId) || Sn
        },
        wn = function (e) {
          return Object(rt.l)(e).entries
        },
        Rn = {
          createLocalApiErrorHandler: Object(M.createLocalApiErrorHandlerWithContextFactory)(
            'DIRECT_MESSAGES_REACTIONS',
          ),
        },
        In = Object(T.e)(function () {
          return Object(w.createSelector)(wn, Cn, S.q, On.d, function (e, t, n, r) {
            var a,
              i = Object(ut.a)(r, { includeInactive: !0 }),
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
        }, Rn),
        kn = (n('vfdX'), n('Ee2X'), []),
        Pn = function (e, t) {
          return t.entryId
        },
        xn = function (e) {
          return Object(rt.l)(e).entries
        },
        Tn = function (e, t) {
          return Object(rt.p)(e, Pn(0, t)) || kn
        },
        An = function (e, t) {
          return x.e.selectMany(
            e,
            (function (e, t) {
              return Object(rt.q)(e, Pn(0, t))
            })(e, t),
          )
        },
        Mn = {
          removeReaction: rt.k,
          fetchUpdatesIfNeeded: nt.d,
          createLocalApiErrorHandler: Object(M.createLocalApiErrorHandlerWithContextFactory)(
            'DIRECT_MESSAGES_REACTION_SUMMARY_CONTEXT',
          ),
        },
        jn = Object(T.e)(function () {
          return Object(w.createSelector)(xn, Tn, S.q, An, On.d, function (e, t, n, r, a) {
            var i = Object(ut.a)(a, { includeInactive: !0 }),
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
            return c > -1 && o.push.apply(o, lt()(o.splice(0, c))), { loggedInUserId: n, usersWithReactions: o }
          })
        }, Mn),
        Dn = n('TIdA'),
        Ln = n('htQn'),
        Fn = Je.a.gf5e9ea6,
        Bn = Je.a.a2d48778,
        Nn = Dn.a.createLayoutCache()
      var Hn = ae.a.create(function (e) {
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
        Un = function (e) {
          var t = b.a.useContext(ee.a).featureSwitches,
            n = e.onUndoPress,
            r = e.renderUndo,
            a = e.user,
            i = e.withBottomBorder,
            o = a.avatarUri,
            c = a.isProtected,
            s = a.isVerified,
            l = a.name,
            u = a.screenName,
            d = b.a.useMemo(
              function () {
                return function (e) {
                  e.stopPropagation(), n()
                }
              },
              [n],
            ),
            p = b.a.createElement(Ee.a, { imageLayoutCache: Nn, screenName: u, size: 'xxLarge', uri: o }),
            f = b.a.createElement(pt, { emojiSize: 'title4', emotion: a.reactionKey, focusable: !1 }),
            h = b.a.createElement(ce.a, {
              badgeContext: 'content',
              isProtected: c,
              isVerified: s,
              name: l,
              screenName: u,
              withHoverCard: !0,
              withStackedLayout: !0,
            })
          return b.a.createElement(
            Ln.a,
            { link: { pathname: '/'.concat(u), anchorless: !0 }, style: [Hn.root, i && Hn.bottomBorder] },
            b.a.createElement(ge.a, { style: Hn.reactionColumn }, f),
            b.a.createElement(ge.a, { style: Hn.column }, p),
            b.a.createElement(ge.a, { style: Hn.bodyColumn }, b.a.createElement(ge.a, { style: Hn.body }, h)),
            r
              ? b.a.createElement(
                  ge.a,
                  { style: Hn.column },
                  b.a.createElement(
                    xt.a,
                    {
                      accessibilityLabel: Bn({ emoji: Object(ut.b)(a.reactionKey, t) }),
                      onClick: d,
                      size: 'small',
                      type: 'brandText',
                    },
                    Fn,
                  ),
                )
              : null,
          )
        },
        Vn = n('xKuM'),
        Wn = n('efqG')
      function zn(e) {
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
      var Kn = Je.a.b772cd65,
        Gn = Je.a.c0098d49,
        qn = Je.a.j85999eb,
        Yn = (function (e) {
          u()(n, e)
          var t = zn(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              v()(s()(e), '_renderContent', function (t, n) {
                return b.a.createElement(
                  ge.a,
                  null,
                  e._renderHeader(t, n),
                  e._renderUsers(t, n),
                  e._renderDoneButton(t, n),
                )
              }),
              v()(s()(e), '_renderHeader', function (e, t) {
                return 'sheet' === t
                  ? b.a.createElement(Vn.a, { title: Gn, withBottomBorder: !0 })
                  : b.a.createElement(_e.b, { visuallyHidden: !0 }, Gn)
              }),
              v()(s()(e), '_renderUsers', function (t, n) {
                return b.a.createElement(
                  ge.a,
                  { accessibilityLabel: qn, style: [Xn.container, 'sheet' === n ? Xn.sheet : Xn.popover] },
                  e._renderUserCells(t),
                )
              }),
              v()(s()(e), '_renderDoneButton', function (e, t) {
                return (
                  'sheet' === t &&
                  b.a.createElement(
                    xt.a,
                    { key: 'button_done', onPress: e, style: Xn.cancelButton, type: 'primaryOutlined' },
                    Kn,
                  )
                )
              }),
              v()(s()(e), '_renderUserCells', function (t) {
                return e.props.usersWithReactions.filter(Boolean).map(function (n, r) {
                  return b.a.createElement(Un, {
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
                  return b.a.createElement(
                    Wn.a,
                    { renderContent: this._renderContent, withFixedPosition: this.context.isDrawer },
                    e,
                  )
                },
              },
            ]),
            n
          )
        })(b.a.PureComponent)
      v()(Yn, 'contextType', fe.a)
      var Xn = ae.a.create(function (e) {
          return {
            cancelButton: { marginHorizontal: e.spaces.space12, marginVertical: e.spaces.space12 },
            container: { overflowY: 'auto', paddingVertical: e.spaces.space12 },
            popover: { maxHeight: '35vh', minWidth: '320px' },
            sheet: { maxHeight: '65vh' },
          }
        }),
        Qn = Object(Rt.a)(Object(mt.a)(jn(Yn)))
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
      var $n = Je.a.h95f9e76,
        er = (function (e) {
          u()(n, e)
          var t = Jn(n)
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
                  var r = xe()(e, 2),
                    a = r[0],
                    s = r[1]
                  return b.a.createElement(pt, {
                    count: s,
                    emojiSize: o,
                    emotion: a,
                    enableHoverStyle: !1,
                    focusable: !0,
                    key: a,
                    style: [
                      n === c && tr.rightPadding,
                      tr.elementPadding,
                      i === a ? tr.selfSelect : null,
                      t && tr.isHoveredDMReaction,
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
                  var c = re.a.generate({
                      backgroundColor: ae.a.theme.colors.gray50,
                      color: ae.a.theme.colors.gray700,
                    }),
                    s = $n({ reactionCount: i })
                  return b.a.createElement(
                    ge.a,
                    {
                      style: [
                        tr.container,
                        r ? tr.marginShort : tr.marginLong,
                        a ? tr.alignRight : tr.alignLeft,
                        o ? tr.visible : tr.invisible,
                      ],
                    },
                    b.a.createElement(
                      Qn,
                      { conversationId: t, entryId: n },
                      b.a.createElement(
                        oe.a,
                        {
                          accessibilityLabel: s,
                          focusable: !0,
                          interactiveStyles: c,
                          onPress: this._handleScribeDMReactionSummary,
                          ref: this._onSetReactionsNode,
                          style: tr.content,
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
                    })({}, n),
                  )
                },
              },
            ]),
            n
          )
        })(b.a.PureComponent),
        tr = ae.a.create(function (e) {
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
            selfSelect: { borderColor: ae.a.theme.colors.gray50, borderRadius: e.borderRadii.infinite },
            alignLeft: { alignSelf: 'flex-start' },
            alignRight: { alignSelf: 'flex-end' },
            invisible: { opacity: 0 },
            visible: { opacity: 1 },
            marginShort: { marginBottom: e.spaces.space4 },
            marginLong: { marginBottom: e.spaces.space12 },
            isHoveredDMReaction: { borderColor: e.colors.transparent, cursor: 'pointer' },
          }
        }),
        nr = Object(mt.a)(In(er)),
        rr = n('Xrkv')
      function ar(e) {
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
      var ir = Je.a.icd0bf34,
        or = Je.a.e8bd8fec,
        cr = Je.a.b2d32fad,
        sr = Je.a.a763d33e,
        lr = (function (e) {
          u()(n, e)
          var t = ar(n)
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
                  return b.a.createElement(
                    ge.a,
                    { style: ur.root },
                    b.a.createElement(
                      _e.b,
                      { align: 'right', color: 'gray700', size: 'subtext2', style: ur.seenLabel },
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
                  return n ? (t ? cr : ir) : r.length ? sr({ count: r.length }) : or
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
                      return b.a.createElement(
                        Je.a.I18NFormatMessage,
                        { $i18n: 'f6464106' },
                        b.a.createElement(_e.b, null, n),
                        b.a.createElement(
                          _e.b,
                          { color: 'link', onPress: e._handlePress },
                          Je.a.d7a0722f({ othersCount: r }),
                        ),
                      )
                    }
                  n && (t = t.slice(0, 10))
                  var i = Object(rr.a)(t, n)
                  return b.a.createElement(
                    _e.b,
                    { align: 'right', color: 'gray700', size: 'subtext2', style: ur.namesList },
                    n ? b.a.createElement(a, { namesList: i, othersCount: r }) : b.a.createElement(_e.b, null, i),
                  )
                },
              },
            ]),
            n
          )
        })(b.a.PureComponent),
        ur = ae.a.create(function (e) {
          return {
            root: { alignItems: 'flex-end', width: 'calc(100% - '.concat(e.spaces.space2, ')') },
            seenLabel: { cursor: 'pointer' },
            namesList: { marginBottom: e.spaces.space2, whiteSpace: 'pre-line' },
          }
        }),
        dr = lr,
        pr = n('t0aI'),
        fr = function (e) {
          var t = e.entryId,
            n = e.participants,
            r = e.user,
            a = Object.keys(n),
            i = hr({ entryId: t, participants: n, user: r })
          return { namesToDisplay: i, isSeenByEveryone: i.length === a.length - 1 }
        },
        hr = function (e) {
          var t = e.entryId,
            n = e.participants,
            r = e.user
          return Object.keys(n).reduce(function (e, a) {
            var i = n[a],
              o = i.join_conversation_event_id,
              c = i.last_read_event_id,
              s = i.user.name,
              l = a !== r.id_str,
              u = c && 1 !== Object(pr.a)(t, c),
              d = !o || 1 !== Object(pr.a)(o, t)
            return l && u && d && e.push(s), e
          }, [])
        },
        mr = n('IMYl'),
        vr = n('21zW'),
        yr = n('gmpV')
      function br(e) {
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
      var gr = Je.a.fad48ee9,
        _r = Je.a.ba60339a,
        Er = Je.a.d338f53e,
        Or = Je.a.ae7d7a24,
        Sr = Je.a.d725a288,
        Cr = Je.a.bbe74f3f,
        wr = Je.a.h0e4cdf4,
        Rr = Je.a.bfbc051c,
        Ir = (function (e) {
          u()(n, e)
          var t = br(n)
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
                    b.a.createElement(
                      ge.a,
                      { style: [kr.root, d && kr.vdlRootMargin, t && kr.sentMessage] },
                      r,
                      a,
                      s,
                      l
                        ? b.a.createElement(
                            oe.a,
                            { interactiveStyles: null, onPress: n, style: t && kr.sentContainer },
                            b.a.createElement(ge.a, { style: t && kr.groupedItems }, i, c),
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
                    b.a.createElement(
                      ge.a,
                      null,
                      b.a.createElement(_e.b, { align: 'right', color: 'gray700', size: 'subtext2' }, Or),
                      b.a.createElement(
                        ge.a,
                        { style: kr.groupedItems },
                        b.a.createElement(
                          _e.b,
                          {
                            accessibilityRole: 'button',
                            color: 'magenta500',
                            onPress: this._handleRemove,
                            size: 'subtext2',
                            withInteractiveStyling: !0,
                          },
                          _r,
                        ),
                        b.a.createElement(vr.a, null),
                        b.a.createElement(
                          _e.b,
                          {
                            accessibilityRole: 'button',
                            color: 'primary',
                            onPress: this._handleTryAgain,
                            size: 'subtext2',
                            withInteractiveStyling: !0,
                          },
                          Er,
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
                    ? b.a.createElement(
                        ge.a,
                        { style: o && kr.footerPadderWithAvatar },
                        b.a.createElement(nr, { conversationId: t, entryId: n, isEndOfDM: c, isSent: i }),
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
                    ? b.a.createElement(dr, bn()({ isGroupDM: i }, fr({ entryId: t, participants: c, user: s })))
                    : null
                },
              },
              {
                key: '_renderSending',
                value: function () {
                  var e = this.props,
                    t = e.isDraft,
                    n = e.isError
                  return t && !n && b.a.createElement(_e.b, { align: 'right', color: 'gray700', size: 'subtext2' }, gr)
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
                    l = fr({ entryId: t, participants: c, user: s }).isSeenByEveryone
                  return !o || n || r || (i && !a)
                    ? null
                    : b.a.createElement(
                        _e.b,
                        { color: l ? 'primary' : 'gray700', style: kr.checkmarkContainer },
                        b.a.createElement(mr.a, { style: kr.checkmark }),
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
                  u = Object(yr.c)(d) ? Sr(d) : Object(yr.d)(d) ? Cr({ time: Sr(d) }) : Object(yr.e)(d) ? wr(d) : Rr(d)
                  var p = a && !c,
                    f = c ? 'right' : 'left'
                  return b.a.createElement(
                    ge.a,
                    { style: [l && kr.footerPadderWithAvatar, c && kr.timestamp] },
                    b.a.createElement(
                      _e.b,
                      { align: f, color: 'gray700', size: 'subtext2', withInteractiveStyling: c || !Tt.a.isEnabled },
                      p &&
                        b.a.createElement(
                          Je.a.I18NFormatMessage,
                          { $i18n: 'c8b914d4' },
                          b.a.createElement(_e.b, null, s),
                        ),
                      p && ' ',
                      u,
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(b.a.PureComponent)
      v()(Ir, 'contextType', ee.a)
      var kr = ae.a.create(function (e) {
          return {
            root: { marginTop: e.spaces.space2, overflow: 'hidden', width: En },
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
        Pr = _n(Ir),
        xr = n('jtO7'),
        Tr = ae.a.create(function (e) {
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
        Ar = function (e) {
          var t = e.insideTopRounded,
            n = e.isLast,
            r = e.isSent,
            a = e.label,
            i = e.onClick,
            o = e.outsideTopRounded,
            c = e.tcoUrl,
            s = [
              Tr.root,
              n && Tr.isLast,
              n && r && Tr.sentLast,
              n && !r && Tr.receivedLast,
              t && r && Tr.insideTopRoundedSent,
              t && !r && Tr.insideTopRoundedReceived,
              o && r && Tr.outsideTopRoundedSent,
              o && !r && Tr.outsideTopRoundedReceived,
            ]
          return b.a.createElement(
            ge.a,
            { style: s },
            b.a.createElement(xr.a, { align: 'center', color: 'primary', label: a, link: c, onClick: i }),
          )
        },
        Mr = n('fs1G')
      function jr(e) {
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
      var Dr = (function (e) {
        u()(n, e)
        var t = jr(n)
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
                    return b.a.createElement(Ar, {
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
                return b.a.createElement(ge.a, null, o)
              },
            },
          ]),
          n
        )
      })(b.a.Component)
      v()(Dr, 'defaultProps', { onCtaClick: Mr.a, onImpression: Mr.a })
      var Lr = Dr,
        Fr = (n('1IsZ'), n('vjRr')),
        Br = n('EGrD'),
        Nr = function (e, t) {
          return Fr.a.createManyHydratedSelector([t.cardUrl])(e)[0]
        },
        Hr = Object(gn.a)()
          .propsFromState(function () {
            return { adFreeArticleDomains: Br.c, card: Nr }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(M.createLocalApiErrorHandlerWithContextFactory)('DM_CARD_MESSAGE'),
              fetchAdFreeToken: Br.a,
              loadAdFreeArticleDomainsFromPersistence: Br.b,
              popOutConversation: E.popOutConversation,
            }
          }),
        Ur = ae.a.create(function (e) {
          return { root: { width: '100%' }, invisible: { opacity: 0 }, visible: { opacity: 1 } }
        }),
        Vr = function (e) {
          var t = e.attachmentContent,
            n = e.attachmentHeader,
            r = e.isVisible,
            a = void 0 === r || r,
            i = e.textContent
          return b.a.createElement(ge.a, { style: [a ? Ur.visible : Ur.invisible, Ur.root] }, n, t, i)
        },
        Wr = n('cTG8'),
        zr = function (e) {
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
            y = e.withMessageBubble,
            g = b.a.useContext(ee.a).featureSwitches,
            _ = g.isTrue('dm_vdl_enabled') && g.isTrue('dm_vdl_chat_p0_enabled'),
            E = [
              f,
              y && Kr.messageTextContainer,
              y && l && Kr.sent,
              y && !l && Kr.received,
              a && Kr.failedDraft,
              s && !o && !l && Kr.rapidFireReceived,
              s && !o && l && Kr.rapidFireSent,
              u && l && Kr.hasAssociatedAttachmentSent,
              u && !l && Kr.hasAssociatedAttachmentReceived,
              y && _ && l && Kr.vdlSent,
              y && r && l && Kr.activeSent,
              y && _ && r && l && Kr.vdlActiveSent,
              y && r && !l && !Tt.a.isEnabled && Kr.activeReceived,
              m && Kr.withCta,
            ],
            O = [Kr.tweetText, y && Kr.textAlignLeft, !y && l && Kr.textAlignRight],
            S = ae.a.theme.colors,
            C = S.gray0,
            w = S.magenta500,
            R = S.primary,
            I = S.text,
            k = S.white,
            P = re.a.generate({ color: l ? k : I, backgroundColor: a ? w : l ? R : C }),
            x = (p.text && p.text.length) || 0
          return b.a.createElement(
            oe.a,
            { accessibilityRole: 'none', interactive: l, interactiveStyles: y ? P : null, style: E },
            b.a.createElement(Wr.a, {
              color: ae.a.isDarkMode() || l ? 'whiteOnColor' : void 0,
              displayTextRange: [0, x],
              entities: p.entities,
              excludeCardUrl: t,
              linkColor: (y && l) || ae.a.isDarkMode() ? 'whiteOnColor' : 'link',
              linkify: !0,
              quotedTweetId: h,
              size: y ? void 0 : 'title2',
              style: O,
              text: p.text || '',
              underlineLinks: !0,
              withMediaLinks: v,
            }),
          )
        },
        Kr = ae.a.create(function (e) {
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
      zr.defaultProps = { withMediaLinks: !1 }
      var Gr = zr,
        qr = function (e) {
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
          return b.a.createElement(Gr, {
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
        Yr = n('LSr9'),
        Xr = n('aX4+'),
        Qr = n('/Ikv')
      function Zr(e) {
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
      var Jr = Qr.a.CardNames,
        $r = (function (e) {
          u()(n, e)
          var t = Zr(n)
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
                    u = new Yr.a(l, s()).getAdFreeArticlesClickHandler({
                      destinationUrl: Qr.a.getBindingValue(n, 'card_url'),
                      linkDomain: Qr.a.getBindingValue(n, 'domain'),
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
                    h = !!Object.values(Jr).includes(t.name),
                    m = Nt(n, p, f),
                    v = m.isAttachmentSquared ? 'both' : c ? 'right' : 'left',
                    y = b.a.createElement(
                      ge.a,
                      { onClick: this._handleOnClick, onLayout: this._handleAttachmentLayout },
                      b.a.createElement(Xr.a, {
                        card: { name: t.name, url: t.url, binding_values: t.binding_values, users: t.users },
                        cardContext: { tweetUserId: s.sender_id },
                        dmSentOrReceived: c ? 'sent' : 'received',
                        withSquareBottomBorderRadius: v,
                      }),
                    ),
                    g = n
                      ? b.a.createElement(
                          ge.a,
                          {
                            onLayout: this._handleTextContentLayout,
                            style: c ? ea.sentMessageWrapper : ea.receivedMessageWrapper,
                          },
                          b.a.createElement(Gr, {
                            excludeCardUrl: t.url,
                            hasAssociatedAttachment: !0,
                            isActive: r,
                            isFailedDraft: a,
                            isFirstRapidFire: i,
                            isRapidFire: o,
                            isSent: c,
                            messageData: s,
                            rootStyle: m.isTextSquared ? (c ? ea.textSentSquared : ea.textReceivedSquared) : void 0,
                            withCta: l,
                            withMessageBubble: u,
                          }),
                        )
                      : null
                  return h
                    ? b.a.createElement(Vr, { attachmentContent: y, isVisible: m.compositeRendered, textContent: g })
                    : b.a.createElement(qr, {
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
        })(b.a.Component)
      v()($r, 'defaultProps', { hasUserText: !1 }), v()($r, 'contextType', ee.a)
      var ea = ae.a.create(function (e) {
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
        ta = Hr($r)
      function na(e) {
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
      var ra = Je.a.f720438f,
        aa = (function (e) {
          u()(n, e)
          var t = na(n)
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
                return t ? (r = 'both') : n && (r = 'right'), ia[r]
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
                  var f = Nt(t, d, p),
                    h = f.compositeRendered,
                    m = f.isAttachmentSquared,
                    v = f.isTextSquared,
                    y = [
                      oa.tombstoneWrapper,
                      o ? oa.sentMessageWrapper : oa.receivedMessageWrapper,
                      this._getSquareBottomStyles(m),
                    ],
                    g = b.a.createElement(
                      ge.a,
                      { onLayout: this._handleAttachmentLayout, style: y },
                      b.a.createElement(_e.b, { color: 'gray700' }, ra),
                    ),
                    _ = t
                      ? b.a.createElement(
                          ge.a,
                          {
                            onLayout: this._handleTextContentLayout,
                            style: [
                              o ? oa.sentMessageWrapper : oa.receivedMessageWrapper,
                              !l && oa.fleetReactionSpacing,
                            ],
                          },
                          b.a.createElement(Gr, {
                            hasAssociatedAttachment: !0,
                            isActive: n,
                            isFailedDraft: r,
                            isFirstRapidFire: a,
                            isRapidFire: i,
                            isSent: o,
                            messageData: c,
                            rootStyle: v ? (o ? oa.sentSquared : oa.receivedSquared) : void 0,
                            withCta: s,
                            withMessageBubble: l,
                          }),
                        )
                      : null
                  return b.a.createElement(Vr, { attachmentContent: g, isVisible: h, textContent: _ })
                },
              },
            ]),
            n
          )
        })(b.a.Component),
        ia = ae.a.create(function (e) {
          return {
            both: { borderBottomRightRadius: e.borderRadii.none, borderBottomLeftRadius: e.borderRadii.none },
            left: { borderBottomLeftRadius: e.borderRadii.none },
            right: { borderBottomRightRadius: e.borderRadii.none },
          }
        }),
        oa = ae.a.create(function (e) {
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
        ca = aa,
        sa = n('prG5'),
        la = n('RCZO'),
        ua = n('A91F'),
        da = Je.a.b327c129,
        pa = function (e) {
          e.stopPropagation()
        },
        fa = function (e) {
          var t = e.media,
            n = e.mediaUrl,
            r = t.ext_alt_text || da,
            a = t.media_url_https,
            i = t.original_info || {},
            o = i.height,
            c = i.width,
            s = Object(la.b)(t).rgb,
            l = b.a.createElement(sa.a, {
              accessibilityLabel: r,
              aspectMode: ua.a.withinRange(9 / 16, 10),
              backgroundColor: s,
              image: { url: a, width: c, height: o },
              shouldShowAltLabel: !!t.ext_alt_text,
            })
          return n ? b.a.createElement(oe.a, { interactiveStyles: null, link: n, onPress: pa }, l) : l
        },
        ha = n('Modb'),
        ma = n('lklz'),
        va = n('XrEN'),
        ya = n('ZvMt'),
        ba = function (e) {
          var t = e.media,
            n = e.messageId,
            r = t && va.a.extractVideoProps(ma.b.forDm(n), t)
          return r
            ? b.a.createElement(
                ha.a,
                bn()({}, r, { aspectRatio: ya.a.getAspectRatio(t.video_info), withPostPlayback: !0 }),
              )
            : null
        },
        ga = Object(gn.a)().withAnalytics()
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
      var Ea = (function (e) {
        u()(n, e)
        var t = _a(n)
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
                  c = i.width < ae.a.theme.breakpoints.micro
                return o
                  ? b.a.createElement(
                      ge.a,
                      {
                        focusable: !0,
                        onLayout: this._handleLayout,
                        style: [
                          Sa.root,
                          c ? { flexDirection: 'column' } : { flexDirection: 'row', alignItems: 'center' },
                          a && Oa[a],
                        ],
                      },
                      b.a.createElement(ge.a, { style: Sa.description }, b.a.createElement(_e.b, null, r)),
                      b.a.createElement(
                        ge.a,
                        { style: [Sa.button, c ? Sa.breakButtonWrapper : void 0] },
                        b.a.createElement(
                          xt.a,
                          { onClick: this._handleClick, size: 'small', style: Sa.buttonElement, type: 'brandText' },
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
      })(b.a.PureComponent)
      v()(Ea, 'defaultProps', { isSensitive: !1 })
      var Oa = ae.a.create(function (e) {
          return {
            both: { borderBottomRightRadius: e.borderRadii.none, borderBottomLeftRadius: e.borderRadii.none },
            left: { borderBottomLeftRadius: e.borderRadii.none },
            right: { borderBottomRightRadius: e.borderRadii.none },
          }
        }),
        Sa = ae.a.create(function (e) {
          return {
            breakButtonWrapper: {
              marginTop: ae.a.theme.spaces.space4,
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
        Ca = Object(mt.a)(ga(Ea)),
        wa = n('CoGJ')
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
      function Ia(e) {
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
      function ka(e) {
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
      var Pa = b.a.createElement(wa.a, null),
        xa = Je.a.d9de7b57,
        Ta = Je.a.f2879f4d,
        Aa = Je.a.b518221e,
        Ma = Je.a.eeaa9f90,
        ja = Je.a.g2b43663,
        Da = Je.a.f277e949,
        La = (function (e) {
          u()(n, e)
          var t = ka(n)
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
                  v = Nt(i, p, f),
                  y = [
                    Fa.mediaAttachment,
                    s && Fa.isSent,
                    !s && Fa.received,
                    s && v.isAttachmentSquared && Fa.equalComponentDimensionsSent,
                    !s && v.isAttachmentSquared && Fa.equalComponentDimensionsReceived,
                    c && !o && s && Fa.rapidFireSent,
                    c && !o && !s && Fa.rapidFireReceived,
                  ],
                  g = null
                if (
                  (!m && a.conversation_id && (g = '/messages/'.concat(a.conversation_id, '/media/').concat(a.id)), h)
                )
                  if (h.photo) (t = h.photo), (n = b.a.createElement(fa, { media: t, mediaUrl: g }))
                  else if (h.animated_gif)
                    (t = h.animated_gif), (n = b.a.createElement(ba, { media: t, messageId: a.id }))
                  else if (h.video) {
                    if (((t = h.video), Object(A.k)(h, e.context.featureSwitches)))
                      throw new Error('DMMediaMessage should not be used to render voice messages')
                    n = b.a.createElement(ba, { media: t, messageId: a.id })
                  }
                var _ = v.isAttachmentSquared ? 'both' : s ? 'right' : 'left',
                  E = t && n && (s ? n : e._getMediaContentWithGuard(t, l, n, _))
                return {
                  attachmentContent: b.a.createElement(ge.a, { onLayout: e._handleAttachmentLayout, style: y }, E),
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
                    m = Nt(n, p, f),
                    v = this._renderAttachment(),
                    y = v.attachmentContent,
                    g = v.media,
                    _ = n
                      ? b.a.createElement(
                          ge.a,
                          {
                            onLayout: this._handleTextContentLayout,
                            style: c ? Fa.sentMessageWrapper : Fa.receivedMessageWrapper,
                          },
                          b.a.createElement(Gr, {
                            hasAssociatedAttachment: !0,
                            isActive: !!r,
                            isFailedDraft: a,
                            isFirstRapidFire: !!i,
                            isRapidFire: !!o,
                            isSent: c,
                            messageData: h ? s : this._parseMessageData(s, g),
                            rootStyle: m.isTextSquared ? (c ? Fa.sentSquared : Fa.receivedSquared) : void 0,
                            withCta: l,
                            withMessageBubble: u,
                          }),
                        )
                      : null
                  return b.a.createElement(Vr, { attachmentContent: y, isVisible: m.compositeRendered, textContent: _ })
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
                      var c = ('animated_gif' === e.type && ja) || ('video' === e.type && Ma) || Aa
                      return b.a.createElement(
                        Ca,
                        {
                          contentType: e.type,
                          ctaText: c,
                          description: Ta,
                          isSensitive: !0,
                          withSquareBottomBorderRadius: r,
                        },
                        n,
                      )
                    }
                  } else if (!i && e.possibly_sensitive)
                    return b.a.createElement(
                      Ca,
                      {
                        contentType: e.type,
                        ctaText: Da,
                        description: Pa,
                        isSensitive: !0,
                        withSquareBottomBorderRadius: r,
                      },
                      n,
                    )
                  return t
                    ? n
                    : b.a.createElement(
                        Ca,
                        { contentType: e.type, ctaText: Da, description: xa, withSquareBottomBorderRadius: r },
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
                    ? Ia(Ia({}, e), {}, { entities: Ia(Ia({}, e.entities), {}, { urls: r, media: t ? [t] : [] }) })
                    : void 0
                },
              },
            ]),
            n
          )
        })(b.a.Component)
      v()(La, 'contextType', ee.a), v()(La, 'defaultProps', { hasUserText: !1 })
      var Fa = ae.a.create(function (e) {
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
        Ba = La,
        Na = Object(gn.a)().propsFromActions(function () {
          return { markSpamStatus: E.markSpamStatus }
        })
      function Ha(e) {
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
      var Ua = Je.a.fd07947f,
        Va = Je.a.c7a92dc9,
        Wa = Je.a.f277e949,
        za = Je.a.fb3ccb55,
        Ka = Na(
          (function (e) {
            u()(n, e)
            var t = Ha(n)
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
                    return b.a.createElement(
                      Ca,
                      { contentType: 'dm', ctaText: Wa, description: za },
                      e,
                      this._renderButtons(),
                    )
                  },
                },
                {
                  key: '_renderButtons',
                  value: function () {
                    return b.a.createElement(
                      ge.a,
                      { style: Ga.buttons },
                      b.a.createElement(
                        xt.a,
                        { onPress: this._handlePress(!1), style: Ga.leftButton, type: 'brandOutlined' },
                        Va,
                      ),
                      b.a.createElement(xt.a, { onPress: this._handlePress(!0), type: 'brandOutlined' }, Ua),
                    )
                  },
                },
              ]),
              n
            )
          })(b.a.PureComponent),
        ),
        Ga = ae.a.create(function (e) {
          return {
            buttons: { flexDirection: 'row', paddingTop: e.spaces.space4 },
            leftButton: { marginRight: e.spaces.space12 },
          }
        }),
        qa = n('U+bB'),
        Ya = function (e) {
          var t = e.images,
            n = t.svg || t.size_1x
          if (n) return n.url
        },
        Xa = ae.a.create(function (e) {
          return {
            stickerItem: {
              height: 'calc(3 * '.concat(e.fontSizes.title2, ')'),
              width: 'calc(3 * '.concat(e.fontSizes.title2, ')'),
            },
          }
        }),
        Qa = function (e) {
          var t = e.sticker
          return b.a.createElement(qa.a, { accessibilityLabel: t.display_name, source: Ya(t), style: Xa.stickerItem })
        },
        Za = n('XOJV'),
        Ja = function (e, t) {
          var n,
            r = null === (n = t.messageData) || void 0 === n ? void 0 : n.attachment
          if (r && r.tweet) return r.tweet.status
        },
        $a = Object(gn.a)()
          .propsFromState(function () {
            return { tweet: Za.a.createHydratedTweetSelector(Ja) }
          })
          .propsFromActions(function () {
            return { popOutConversation: E.popOutConversation }
          }),
        ei = n('b5s6'),
        ti = b.a.createElement(_e.b, { link: '/settings/safety' }),
        ni = function (e) {
          return b.a.createElement(
            Je.a.I18NFormatMessage,
            { $i18n: 'j3c7dd33' },
            b.a.cloneElement(ti, null, Je.a.adcf07b5),
          )
        },
        ri = Je.a.e4df0ad7,
        ai = Je.a.f277e949,
        ii = Je.a.b5b91d58,
        oi = Je.a.bb594d7b,
        ci = b.a.createElement(ni, null)
      var si = ae.a.create(function (e) {
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
        li = $a(function (e) {
          var t = b.a.useContext(ee.a).featureSwitches,
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
            y = e.popOutConversation,
            g = e.tweet,
            _ = e.withCta,
            E = e.withMessageBubble,
            O = b.a.useState(void 0),
            S = xe()(O, 2),
            C = S[0],
            w = S[1],
            R = b.a.useState(void 0),
            I = xe()(R, 2),
            k = I[0],
            P = I[1],
            x = b.a.useMemo(
              function () {
                return function () {
                  n && y(n)
                }
              },
              [n, y],
            ),
            T = b.a.useMemo(
              function () {
                return function (e) {
                  var t = e.nativeEvent.layout.width
                  C !== t && w(t)
                }
              },
              [C],
            ),
            A = b.a.useMemo(
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
            D = Nt(i, C, k),
            L = b.a.createElement(ei.a, {
              onPress: x,
              style: [
                si[j],
                i && si.attachment,
                D.isAttachmentSquared ? (h ? si.sentAttachmentSquared : si.receivedAttachmentSquared) : void 0,
              ],
              tweetId: M.status,
            }),
            F = D.isAttachmentSquared ? 'both' : h ? 'right' : 'left',
            B = (function () {
              if (!g) return null
              if (h) return L
              if (g.possibly_sensitive && t.isTrue('dm_conversations_nsfw_media_filter_enabled')) {
                if (s || void 0 === s)
                  return b.a.createElement(
                    Ca,
                    { contentType: 'photo', ctaText: oi, description: ii, withSquareBottomBorderRadius: F },
                    L,
                  )
              } else if (!r && g.possibly_sensitive)
                return b.a.createElement(
                  Ca,
                  { contentType: 'photo', ctaText: ai, description: ci, withSquareBottomBorderRadius: F },
                  L,
                )
              return m
                ? L
                : b.a.createElement(
                    Ca,
                    { contentType: 'tweet', ctaText: ai, description: ri, withSquareBottomBorderRadius: F },
                    L,
                  )
            })(),
            N = b.a.createElement(ge.a, { onLayout: T, style: si.attachment }, B),
            H = i
              ? b.a.createElement(
                  ge.a,
                  { onLayout: A, style: h ? si.sentMessageWrapper : si.receivedMessageWrapper },
                  b.a.createElement(Gr, {
                    hasAssociatedAttachment: !0,
                    isActive: c,
                    isFailedDraft: l,
                    isFirstRapidFire: d,
                    isRapidFire: f,
                    isSent: h,
                    messageData: v,
                    rootStyle: D.isTextSquared ? (h ? si.sentSquared : si.receivedSquared) : void 0,
                    tweetId: M.status,
                    withCta: _,
                    withMediaLinks: !0,
                    withMessageBubble: E,
                  }),
                )
              : null
          return b.a.createElement(Vr, { attachmentContent: N, isVisible: D.compositeRendered, textContent: H })
        }),
        ui = n('8W85')
      function di() {
        var e = b.a.useContext(Si),
          t = xe()(e.activeVoiceMessage, 2),
          n = t[0],
          r = t[1],
          a = xe()(e.playerApi, 2)[1],
          i = xe()(e.playerState, 2)[1]
        var o = {
          media: xe()(n, 2)[1],
          onEnded: function () {
            r([null, null]), e.scribeAction && e.scribeAction.complete()
          },
          onPlayerApi: a,
          onPlayerState: i,
        }
        return b.a.createElement(ui.a, o)
      }
      var pi = n('89tF'),
        fi = n('k89r')
      function hi(e, t) {
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
      function mi(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? hi(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : hi(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function vi(e) {
        var t,
          n,
          r,
          a,
          i,
          o =
            ((t = b.a.useState(gi.activeVoiceMessage)),
            (n = b.a.useState(gi.playerApi)),
            (r = b.a.useState(gi.playerState)),
            (i = Object(fi.a)()),
            (a = b.a.useMemo(
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
                      ? i.scribe(mi(mi({}, t({ action: e })), {}, { data: n.data }))
                      : i.scribe(mi({}, t({ action: e, component: bi(n) })))
                    : i.scribe(mi({}, t({ action: e })))
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
        return b.a.createElement(_i.Provider, { value: o }, e.children)
      }
      var yi = {
        Timelines: Object(pi.a)({ message: !0, inbox_timeline: !0, low_quality_timeline: !0, requests_timeline: !0 }),
      }
      function bi(e) {
        var t = e.isLowQuality
        return e.isTrusted
          ? yi.Timelines.inbox_timeline
          : t
          ? yi.Timelines.low_quality_timeline
          : yi.Timelines.requests_timeline
      }
      var gi = { activeVoiceMessage: [null, null], playerApi: null, playerState: null, scribeAction: null },
        _i = b.a.createContext({
          activeVoiceMessage: [gi.activeVoiceMessage, Ei],
          playerApi: [gi.playerApi, Ei],
          playerState: [gi.playerState, Ei],
          scribeAction: null,
        })
      function Ei() {
        throw new Error('DMVoiceContext is not initialized')
      }
      function Oi(e) {
        var t = b.a.useContext(ee.a).featureSwitches
        return Object(A.j)(t) ? b.a.createElement(vi, null, e.children, b.a.createElement(di, null)) : e.children
      }
      var Si = _i,
        Ci = n('MH+I'),
        wi = n('5Ixf'),
        Ri = n('AtEG')
      function Ii(e) {
        var t,
          n,
          r = b.a.useContext(Si),
          a = e.isLowQuality,
          i = e.isSent,
          o = e.isTrusted
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
        var m = Pi(d),
          v = (null === (n = e.media) || void 0 === n ? void 0 : n.video_info.duration_millis) || 0,
          y = {
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
            ((y.playerApi = u),
            (y.playerState = d),
            null != m && m.durationMs && (y.durationMs = null == m ? void 0 : m.durationMs)),
          b.a.createElement(ki, y)
        )
      }
      function ki(e) {
        var t = e.isActive,
          n = e.isSent,
          r = e.playerApi,
          a = e.playerState,
          i = null == a ? void 0 : a.isPlaying,
          o = Pi(a),
          c = (null == o ? void 0 : o.currentTimeMs) || 0,
          s = (null == o ? void 0 : o.durationMs) || e.durationMs,
          l = Math.max(t ? s - c : s, 0)
        b.a.useLayoutEffect(function () {
          e.onImpression()
        }, []),
          b.a.useEffect(
            function () {
              r && 0 === c && (r.play(), e.onPlay())
            },
            [r],
          )
        var u = ae.a.isDarkMode() || n,
          d = { color: u ? 'whiteOnColor' : 'normal' },
          p = [
            Ai.voiceMessage,
            Mi({ isSent: n, squared: t }),
            n ? Ai.voiceMessageSent : Ai.voiceMessageReceived,
            De(ae.a.theme.scale).voiceMessage({ isVoiceMessageActive: t, isSent: n }),
          ],
          f = i ? wi.a : Ri.a
        return b.a.createElement(
          ge.a,
          { style: [Ai.container, De(ae.a.theme.scale).voiceMessageContainer({ isVoiceMessageActive: t, isSent: n })] },
          b.a.createElement(
            ge.a,
            { style: p },
            b.a.createElement(ge.a, { style: Ai.startSpacer }),
            b.a.createElement(xt.a, {
              accessibilityLabel: i ? Ti : xi,
              icon: b.a.createElement(f, { style: u ? Ai.iconColorDark : Ai.iconColorDefault }),
              onPress: function () {
                r ? (i ? (r.pause(), e.onPause()) : (r.play(), e.onPlay())) : e.onPlayRequest()
              },
              type: 'onMediaText',
            }),
            b.a.createElement(ge.a, { style: Ai.durationSpacer }),
            b.a.createElement(
              ge.a,
              { style: n ? Ai.durationOpacity : void 0 },
              b.a.createElement(
                Ci.a,
                bn()({ countdown: !0, timeMs: l }, d, {
                  color: 'gray700',
                  size: 'subtext2',
                  style: n ? Ai.durationDark : void 0,
                  weight: 'bold',
                  withCountdownSymbol: t,
                }),
              ),
            ),
            b.a.createElement(ge.a, { style: Ai.endSpacer }),
          ),
        )
      }
      var Pi = function (e) {
          return e ? e.tracks[e.currentTrackId] : null
        },
        xi = Je.a.c94b7d89,
        Ti = Je.a.eb6f9582,
        Ai = ae.a.create(function (e) {
          return {
            displayNone: { display: 'none' },
            container: { flexDirection: 'row', alignSelf: 'flex-end', alignItems: 'center', justifyContent: 'center' },
            voiceMessage: {
              alignSelf: 'flex-end',
              flexDirection: Me.a.getConstants().isRTL ? 'row-reverse' : 'row',
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
      function Mi(e) {
        var t = e.isSent,
          n = e.squared
        return [ji.base, t ? ji.sent : ji.received, n ? (t ? ji.sentSquared : ji.receivedSquared) : void 0]
      }
      var ji = ae.a.create(function (e) {
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
      function Di(e, t) {
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
      function Li(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Di(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Di(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function Fi(e) {
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
      var Bi = (function (e) {
        u()(n, e)
        var t = Fi(n)
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
                  l = Ft(n),
                  u = !!o && !!o.ctas,
                  d = Lt(n),
                  p = (function (e) {
                    var t = e.message_data
                    if (!t) return !1
                    if (Ft(e) && !Bt(e)) return !1
                    if (!t.text) return !1
                    var n = Object(jt.parse)(t.text)
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
                e = c.sticker ? b.a.createElement(Qa, { sticker: c.sticker }) : this._renderDMMessage(d, u, f)
                var m = s ? b.a.createElement(Ka, { conversationId: n.conversation_id, dmId: n.id }, e) : e,
                  v = l && !h && !Object(A.k)(null == o ? void 0 : o.attachment, this.context.featureSwitches),
                  y = [
                    r ? Ni.isSent : Ni.isReceived,
                    u && Ni.withCta,
                    v ? Ni.mediaRoot : Ni.flexShrink,
                    this.props.style,
                  ]
                return b.a.createElement(
                  ge.a,
                  { style: y },
                  m,
                  o && o.ctas
                    ? b.a.createElement(Lr, {
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
                  m = h && Li(Li({}, h), {}, { entities: (h && h.entities) || void 0, error: f }),
                  v = null == m ? void 0 : m.attachment,
                  y = {
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
                    return b.a.createElement(
                      li,
                      bn()(
                        {
                          conversationId: i.conversation_id,
                          displaySensitiveMedia: a,
                          hasUserText: e,
                          isDmNsfwMediaFilterEnabled: c,
                          isTrusted: p,
                          messageData: m,
                        },
                        y,
                      ),
                    )
                  if (v.photo || v.animated_gif || v.video)
                    return v.video && Object(A.k)(v, this.context.featureSwitches)
                      ? b.a.createElement(Ii, {
                          isLowQuality: l,
                          isSent: !!d,
                          isTrusted: p,
                          media: v.video,
                          messageId: i.id,
                        })
                      : b.a.createElement(
                          Ba,
                          bn()(
                            {
                              displaySensitiveMedia: a,
                              entry: i,
                              hasUserText: e,
                              isDmNsfwMediaFilterEnabled: c,
                              isTrusted: p,
                              messageData: m,
                            },
                            y,
                          ),
                        )
                  if (v.card)
                    return b.a.createElement(
                      ta,
                      bn()({ cardUrl: v.card, conversationId: i.conversation_id, hasUserText: e, messageData: m }, y),
                    )
                  if (v.fleet) return b.a.createElement(ca, bn()({ entry: i, hasUserText: e, messageData: m }, y))
                }
                return b.a.createElement(qr, bn()({}, y, { messageData: m }))
              },
            },
          ]),
          n
        )
      })(b.a.Component)
      v()(Bi, 'contextType', ee.a)
      var Ni = ae.a.create(function (e) {
          return {
            flexShrink: { flexShrink: 1 },
            mediaRoot: { flex: 1 },
            isSent: { alignItems: 'flex-end' },
            isReceived: { alignItems: 'flex-start' },
            withCta: { alignItems: 'stretch' },
          }
        }),
        Hi = Bi,
        Ui = ae.a.create(function (e) {
          return { avatar: { borderRadius: e.borderRadii.infinite } }
        }),
        Vi = function (e) {
          var t = e.showAvatar,
            n = e.size,
            r = void 0 === n ? 'xLarge' : n,
            a = e.user
          return t
            ? b.a.createElement(Ee.a, {
                accessibilityLabel: a.name,
                link: { pathname: '/'.concat(a.screen_name) },
                size: r,
                uri: a.profile_image_url_https,
              })
            : b.a.createElement(ge.a, { style: [Ui.avatar, Ee.a.getSizeStyle(r)] })
        },
        Wi = n('m3Bd'),
        zi = n.n(Wi),
        Ki = n('B3eJ')
      function Gi(e) {
        var t = e.color,
          n = e.isActive,
          r = e.size,
          a = zi()(e, ['color', 'isActive', 'size']),
          i = b.a.useContext(Si),
          o = b.a.useState(0.5),
          c = xe()(o, 2),
          s = c[0],
          l = c[1],
          u = xe()(i.playerState, 1)[0]
        b.a.useEffect(
          function () {
            n && u && u.isPlaying && l(Math.random())
          },
          [n, u],
        )
        var d = n && (null == u ? void 0 : u.isPlaying),
          p = r + 2 * qi,
          f = [Yi.container, a.style, { width: r, height: r }]
        return b.a.createElement(
          ge.a,
          { style: f },
          b.a.createElement(
            ge.a,
            { style: [Yi.container, Yi.transitionOpacity, d ? Yi.show : Yi.hide] },
            je.a.reducedMotionEnabled
              ? null
              : b.a.createElement(Ki.a, { audioLevel: s, color: t, paused: !d, size: r }),
          ),
          b.a.createElement(ge.a, {
            style: [Yi.border, { width: p, height: p }, Yi.transitionOpacity, n ? Yi.show : Yi.hide],
          }),
        )
      }
      var qi = parseInt(ae.a.theme.spaces.space2, 10),
        Yi = ae.a.create(function (e) {
          return {
            container: { alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' },
            border: {
              position: 'absolute',
              top: -1 * qi,
              left: -1 * qi,
              backgroundColor: e.colors.navigationBackground,
              borderRadius: e.borderRadii.infinite,
            },
            transitionOpacity: { transition: 'opacity 0.2s 0s ease-in-out' },
            hide: { opacity: 0 },
            show: { opacity: 1 },
          }
        }),
        Xi = n('uArA'),
        Qi = 'messageEntry'
      function Zi(e, t) {
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
      function Ji(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Zi(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Zi(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function $i(e) {
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
      var eo = { element: 'cta_dm' },
        to = { isGroupDM: !1, isRapidFire: !1, isFirstRapidFire: !1, isLastRapidFire: !1 },
        no = (function (e) {
          u()(n, e)
          var t = $i(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              v()(
                s()(e),
                '_handleClick',
                Object(Xi.a)(function () {
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
                if (!Tt.a.isEnabled && !t) {
                  var n = e.props.entry,
                    r = { component: 'message', element: Object(A.c)(n), action: 'click' }
                  e._scribeAction(r)
                }
              }),
              v()(s()(e), '_handleCtaImpression', function () {
                e._scribeAction(Ji(Ji({}, eo), {}, { action: 'show' }))
              }),
              v()(s()(e), '_handleCtaClick', function () {
                e._scribeAction(Ji(Ji({}, eo), {}, { action: 'click' }))
              }),
              v()(s()(e), '_isDMVoiceMessage', function () {
                var t
                return Object(A.k)(
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
                  return !Object(be.a)(this.props, e)
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
                      ao.root.base,
                      s && ao.root.vdlPadding,
                      c && ao.root.contentSpacing,
                      c && s && ao.root.vdlContentSpacing,
                    ],
                    u = this._isDMVoiceMessage(),
                    d = s ? r && !a : !a || u
                  if (!i) return null
                  var p = !Tt.a.isEnabled || a
                  return b.a.createElement(
                    We.a,
                    { viewType: 'message' },
                    b.a.createElement(
                      ge.a,
                      { style: l },
                      b.a.createElement(
                        oe.a,
                        {
                          accessibilityExpanded: !(!p || !n),
                          focusable: !0,
                          interactiveStyles: null,
                          onPress: p ? this._handleClick : void 0,
                          style: a ? ao.root.sent : ao.root.received,
                          testID: Qi,
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
                    y = c.isTrusted,
                    g = c.isVoiceMessageActive,
                    _ = c.isWide,
                    E = c.participants,
                    O = c.perspective,
                    S = c.scribeVoiceMessage,
                    C = c.setShouldFreezeUpdates,
                    w = a.isFirstRapidFire,
                    R = a.isRapidFire,
                    I = [
                      v ? ao.messageContainer.sent : ao.messageContainer.received,
                      _ ? ao.messageContainer.wide : ao.messageContainer.narrow,
                      v && _ && ao.messageContainer.sentWide,
                      !v && _ && ao.messageContainer.receivedWide,
                    ],
                    k = y && !m,
                    P = this._isDMVoiceMessage(),
                    x = null === (t = Object.keys(E)) || void 0 === t ? void 0 : t.length
                  return b.a.createElement(
                    ge.a,
                    { style: I },
                    l.error
                      ? null
                      : b.a.createElement(hn, {
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
                                  return S.report({ isLowQuality: h, isTrusted: y })
                                }
                              : void 0,
                          participantsCount: x,
                          perspective: O,
                          setShouldFreezeUpdates: C,
                          shouldShowReactionButton: k,
                          style: P && De(ae.a.theme.scale).actionsContainer({ isSent: v, isVoiceMessageActive: g }),
                          withVDLRefresh: o,
                        }),
                    b.a.createElement(Hi, {
                      displaySensitiveMedia: s,
                      entry: l,
                      isActive: d,
                      isDmNsfwMediaFilterEnabled: p,
                      isFirstRapidFire: w,
                      isLowQuality: h,
                      isRapidFire: R,
                      isSent: v,
                      isTrusted: y,
                      key: l.id,
                      onCtaClick: this._handleClick,
                      onCtaImpression: this._handleCtaImpression,
                      style: P && De(ae.a.theme.scale).messageContainer({ isSent: v, isVoiceMessageActive: g }),
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
                    ? b.a.createElement(Pr, {
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
                  var l = Ae(ae.a.theme.scale),
                    u = l.DMUserAvatarSizePx,
                    d = { showAvatar: !!s || !r || !!n, size: l.DMUserAvatarSizeType, user: c },
                    p = [
                      ao.userAvatar.base,
                      i ? ao.userAvatar.sent : ao.userAvatar.received,
                      s && De(ae.a.theme.scale).userAvatar({ isVoiceMessageActive: o, isSent: i }),
                    ]
                  return b.a.createElement(
                    ge.a,
                    { style: ao.userAvatar.container },
                    i ? null : b.a.createElement(ge.a, { style: ao.userAvatar.spacer }),
                    s
                      ? b.a.createElement(Gi, {
                          color: i ? ae.a.theme.colors.primary : ae.a.theme.colors.text,
                          isActive: !!o,
                          size: u,
                          style: p,
                        })
                      : null,
                    b.a.createElement(ge.a, { style: p }, b.a.createElement(Vi, d)),
                  )
                },
              },
              {
                key: '_scribeAction',
                value: function (e) {
                  this.props.analytics.scribe(Ji({}, e))
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
        })(b.a.Component)
      v()(no, 'contextType', ee.a), v()(no, 'defaultProps', to)
      var ro = Object(mt.a)(
          Ge(
            (function (e) {
              function t(t) {
                var n = t.entry,
                  r = b.a.useContext(Si),
                  a = xe()(r.activeVoiceMessage, 1)[0],
                  i = r.scribeAction,
                  o = xe()(a, 1)[0] === n.id,
                  c = Ji(Ji({}, t), {}, { isVoiceMessageActive: o, scribeVoiceMessage: i })
                return b.a.createElement(e, c)
              }
              return (t.defaultProps = to), t
            })(no),
          ),
        ),
        ao = {
          root: ae.a.create(function (e) {
            return {
              base: { flexDirection: 'column', paddingBottom: e.spaces.space2 },
              vdlPadding: { paddingBottom: '0px' },
              received: { cursor: 'default', alignItems: 'flex-start' },
              sent: { cursor: 'pointer', alignItems: 'flex-end' },
              contentSpacing: { paddingBottom: e.spaces.space20 },
              vdlContentSpacing: { paddingBottom: e.spaces.space24 },
            }
          }),
          messageContainer: ae.a.create(function (e) {
            return {
              sent: { flexDirection: 'row', justifyContent: 'flex-end' },
              received: { flexDirection: 'row-reverse', justifyContent: 'flex-end' },
              narrow: { width: '100%' },
              wide: { width: En },
              receivedWide: { paddingRight: e.spaces.space12 },
              sentWide: { paddingLeft: e.spaces.space12 },
            }
          }),
          userAvatar: ae.a.create(function (e) {
            return {
              container: { flexDirection: 'row', alignItems: 'flex-end' },
              base: { position: 'absolute' },
              sent: { right: 0 },
              received: { left: 0 },
              spacer: { width: Ae(e.scale).DMUserAvatarSpacerPx },
            }
          }),
        },
        io = n('H4nC'),
        oo = function (e) {
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
          if (Object(Z.b)(n) || Object(Z.e)(n)) {
            var f = t.conversation_id,
              h = t.low_quality,
              m = t.participants,
              v = t.read_only,
              y = t.trusted,
              g = t.type,
              _ = n.message_data,
              O = (_ = void 0 === _ ? {} : _).sender_id,
              S = void 0 === f || y
            return b.a.createElement(ro, {
              entry: n,
              inboxType: r,
              isActive: a,
              isFirstRapidFire: i,
              isGroupDM: g === E.CONVERSATION_TYPE.GROUP,
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
          return Object(Z.a)(n)
            ? b.a.createElement(ke, { conversation: t, entry: n, entryType: n.type, perspective: l })
            : Object(Z.d)(n)
            ? b.a.createElement(io.a, { entry: n, isCompact: !1 })
            : null
        },
        co = Object(w.createSelector)(
          function (e, t) {
            var n = Object(rt.o)(e, t.conversationId),
              r = n && Object($.a)(n)
            return r && Object(E.selectEntry)(e, r)
          },
          function (e) {
            return { lastEntry: e }
          },
        ),
        so = Object(T.c)(co),
        lo = (n('Ef13'), n('uDfI')),
        uo = Object(w.createSelector)(
          function (e, t) {
            return x.e.selectMany(e, t.userIds || [])
          },
          function (e) {
            return { users: e }
          },
        ),
        po = Object(lo.b)(uo),
        fo = n('Enqy'),
        ho = n('+/1j')
      function mo(e) {
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
      var vo = 'overflow',
        yo = function (e, t) {
          return e.id_str < t.id_str ? -1 : e.id_str > t.id_str ? 1 : 0
        },
        bo = { stiffness: 1e3, damping: 70 },
        go = 140,
        _o = { scale: Object(fo.spring)(1, bo), translateY: Object(fo.spring)(0, bo) },
        Eo = function (e, t) {
          return { key: e.id_str, data: e, style: _o }
        },
        Oo = Object(z.a)({ translateY: go, scale: 0 }),
        So = Object(z.a)({ scale: Object(fo.spring)(1, bo), translateY: Object(fo.spring)(go, bo) }),
        Co = [{ key: 'bubble', style: { scale: Object(fo.spring)(1, bo), translateY: Object(fo.spring)(0, bo) } }],
        wo = Object(z.a)({ translateY: go, scale: 0 }),
        Ro = Object(z.a)({ scale: Object(fo.spring)(1, bo), translateY: Object(fo.spring)(go, bo) }),
        Io = function (e) {
          return [
            isFinite(e.scale) && { scale: e.scale.toFixed(3) },
            isFinite(e.translateY) && { translateY: ''.concat(Math.round(e.translateY), '%') },
          ].filter(Boolean)
        },
        ko = (function (e) {
          u()(n, e)
          var t = mo(n)
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
                  return !Object(be.a)(this.props, e) || !Object(be.a)(this.state, t)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.state.isHidden,
                    t = this.props.users,
                    n = t.sort(yo).slice(0, 5).map(Eo)
                  return (
                    t.length > 5 && n.push({ key: vo, style: _o }),
                    b.a.createElement(
                      ge.a,
                      { style: [Po.root, e && Po.hidden] },
                      b.a.createElement(
                        ge.a,
                        { style: Po.avatarRow },
                        b.a.createElement(
                          fo.TransitionMotion,
                          { styles: n, willEnter: Oo, willLeave: So },
                          function (e) {
                            return b.a.createElement(
                              b.a.Fragment,
                              null,
                              e.map(function (e, n) {
                                if (e.style.scale <= 0.05) return null
                                var r = Io(e.style)
                                return e.key === vo
                                  ? b.a.createElement(
                                      ge.a,
                                      {
                                        key: e.key,
                                        style: [Po.avatar, Po.avatarSpacer, Po.overflowAvatar, { transform: r }],
                                      },
                                      b.a.createElement(ho.a, { style: Po.overflowAvatarText }, '+', t.length - 5),
                                    )
                                  : b.a.createElement(
                                      ge.a,
                                      { key: e.key, style: [Po.avatar, { transform: r }] },
                                      b.a.createElement(Ee.a, {
                                        accessibilityLabel: e.data && e.data.name,
                                        size: 'xLarge',
                                        uri: e.data && e.data.profile_image_url_https,
                                      }),
                                    )
                              }),
                            )
                          },
                        ),
                      ),
                      b.a.createElement(
                        fo.TransitionMotion,
                        { didLeave: this._afterLeave, styles: t.length > 0 ? Co : [], willEnter: wo, willLeave: Ro },
                        function (e) {
                          return b.a.createElement(
                            b.a.Fragment,
                            null,
                            e.map(function (e) {
                              return b.a.createElement(
                                ge.a,
                                { key: e.key, style: [Po.messageBubble, { transform: Io(e.style) }] },
                                b.a.createElement(ge.a, { style: Po.dot }),
                                b.a.createElement(ge.a, { style: [Po.dot, Po.dot1] }),
                                b.a.createElement(ge.a, { style: [Po.dot, Po.dot2] }),
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
        })(b.a.Component),
        Po = ae.a.create(function (e) {
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
        xo = po(ko),
        To = n('tn7R')
      function Ao(e) {
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
      var Mo = (function (e) {
        u()(n, e)
        var t = Ao(n)
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
                      lt()(
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
                return !t && b.a.createElement(xo, { userIds: n })
              },
            },
            {
              key: '_teardownLivePipeline',
              value: function () {
                Object(To.a)(this._timers).forEach(function (e) {
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
                Object(g.h)().then(function (n) {
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
      })(b.a.PureComponent)
      v()(Mo, 'contextType', ee.a)
      var jo = so(Mo),
        Do = n('3AAD'),
        Lo = n('iBK2'),
        Fo = n('Fz18'),
        Bo = n('RJrc'),
        No = n('yw4N'),
        Ho = (n('XygZ'), n('dPJJ')),
        Uo = n('zrc3'),
        Vo = n('pQ3Z'),
        Wo = n.n(Vo),
        zo = n('VY6S'),
        Ko = n('Resy'),
        Go = (function () {
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
                    i = new Ko.a(a, r),
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
              (this._debouncedNormalize = Object(zo.a)(this._normalize, 500)),
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
      function qo(e) {
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
      var Yo = (function (e) {
        u()(n, e)
        var t = qo(n)
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
            (i._offsetHandler = new Go(e.viewport)),
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
                var n = !Wo()(this.props, e) || !Wo()(this.state, t)
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
                  (this._unlistenFullscreenEnter = Ho.a(this._handleEnterFullscreen)),
                  (this._unlistenFullscreenExit = Ho.b(this._handleExitFullscreen))
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
                return b.a.createElement(
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
                    var n = Object(Uo.a)(t, function (t) {
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
      })(b.a.Component)
      v()(Yo, 'defaultProps', { anchoring: Do.a })
      var Xo = n('AOWc'),
        Qo = n('180P'),
        Zo = n('Ey+e'),
        Jo = n('SrIh'),
        $o = n('E6XO'),
        ec = n('06eB'),
        tc = n.n(ec),
        nc = n('aITJ')
      function rc(e) {
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
      var ac = function () {
          return window.performance ? window.performance.now() : Date.now()
        },
        ic = (function (e) {
          u()(n, e)
          var t = rc(n)
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
                  a = xe()(e, 1)[0]
                i._isResizeObserverHeightUpdatesEnabled &&
                  a &&
                  a.contentRect.height !== i._currentHeight &&
                  ((i._currentHeight = a.contentRect.height), r(n, a.contentRect.height)),
                  i._perfReported || (i.props.onVisible(n, ac() - i._perfStart), (i._perfReported = !0))
              }),
              v()(s()(i), '_setRef', function (e) {
                var t = i.props,
                  n = t.id,
                  r = t.setAPI
                e ? ((i._element = e), r(n, s()(i)), i._observeElement(e)) : (r(n, void 0), (i._element = void 0))
              }),
              (i._isResizeObserverHeightUpdatesEnabled =
                i.context.featureSwitches.isTrue('responsive_web_vs_config_resize_observer_enabled') &&
                nc.b.isDesktopOS() &&
                nc.b.isSafari()),
              (i._resizeObserver = new window.ResizeObserver(i._handleResize)),
              (i._perfStart = ac()),
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
                  return t.render !== e.render || !tc()(n, e.data)
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
                  return b.a.createElement('div', { ref: this._setRef }, n(t))
                },
              },
            ]),
            n
          )
        })(b.a.Component)
      v()(ic, 'contextType', ee.a)
      var oc = n('+d3d'),
        cc = n('iChn')
      function sc(e) {
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
      var lc = (function (e) {
          u()(n, e)
          var t = sc(n)
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
                    r = nc.b.isDesktopOS() ? 'scroller_legacy' : 'scroller_legacy_mobile'
                  $o.c('scroller:ttfv:'.concat(r), { duration_ms: n }), e._visibilityMeasurements.clear()
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
                  return Object(cc.a)(
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
                  return b.a.createElement(
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
                    return b.a.createElement(ic, {
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
        })(b.a.PureComponent),
        uc = n('oi7R'),
        dc = n('aWzz'),
        pc = n('JD1h'),
        fc = n('OeMK'),
        hc = n('0zXz'),
        mc = (n('IAdD'), n('jHwr')),
        vc = n('qdp+'),
        yc = (function () {
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
                  if (0 === e.length) return new Ko.a(0, 0)
                  var t = this._rectangles,
                    n = e[0].id,
                    r = e[e.length - 1].id,
                    a = t[n].getTop(),
                    i = t[r].getBottom() - a
                  return new Ko.a(a, i)
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
                    r = Object(Uo.a)(this._list, function (e) {
                      var r = e.id
                      return n[r].doesIntersectWith(t)
                    })
                  if (r < 0) return []
                  var a = Object(Uo.a)(
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
                  return Object(vc.a)(this.getRenderedItems(), function (t) {
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
        bc = n('64vW'),
        gc = function (e, t, n) {
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
        _c = function (e) {
          var t = e.list,
            n = e.nextList,
            r = e.sliceEnd,
            a = e.sliceStart,
            i = n.reduce(function (e, t) {
              return (e[t.id] = !0), e
            }, {}),
            o = gc(t, a, function (e) {
              var t = e.id
              return !Object(fc.a)(t) && i.hasOwnProperty(t) && i[t]
            })
          if (-1 === o) return null
          var c = Object(Uo.a)(n, function (e) {
            var n = e.id
            return t[o].id === n
          })
          return (
            Object(Xo.a)(c >= 0, 'newSliceStart should be defined if we found a common item'),
            o > 0 && Object(fc.a)(t[o - 1].id) && c > 0 && Object(fc.a)(n[c - 1].id) && (c -= 1),
            { sliceStart: c, sliceEnd: Math.min(n.length, c + r - a) }
          )
        }
      function Ec(e, t) {
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
      function Oc(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Ec(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Ec(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function Sc(e) {
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
      var Cc = { heightsReady: !0 },
        wc = (function (e) {
          u()(n, e)
          var t = Sc(n)
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
              (i._getMemoizedSlice = Object(Te.a)(function (e, t, n) {
                return e.slice(t, n)
              })),
              (i._getRectangles = function (e) {
                var t = e || s()(i),
                  n = t._assumedItemHeight,
                  r = t._heights,
                  a = t.props.list
                return t._getMemoizedRectangles(a, r, n)
              }),
              (i._getMemoizedRectangles = Object(Te.a)(function (e, t, n) {
                return Rc(e, t, n)
              })),
              (i._heights = {})
            var u = i.props,
              d = u.cacheKey,
              p = u.heightCache
            d && p.hasOwnProperty(d) && (i._heights = p[d]), (i.state = i._getDefaultSlice(l, c))
            var f = Object(mc.a)(function () {
              return i._criticalUpdate()
            }, window.requestAnimationFrame)
            return (
              (i._scheduleUpdate = window.requestIdleCallback
                ? Object(mc.a)(function () {
                    return i._criticalUpdate()
                  }, window.requestIdleCallback)
                : f),
              (i._schedulePositioningNotification = Object(mc.a)(
                function () {
                  return i._notifyPositioning()
                },
                window.requestIdleCallback
                  ? function (e) {
                      return window.requestIdleCallback(e, { timeout: 500 })
                    }
                  : window.requestAnimationFrame,
              )),
              (i._handleScroll = Object(oc.a)(f, 100, { trailing: !0 })),
              (i._scheduleDebouncedUpdate = Object(zo.a)(function () {
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
                    var o = _c({ list: t, nextList: i, sliceStart: a, sliceEnd: r }) || this._getDefaultSlice(i)
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
                  return new yc({
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
                  return b.a.createElement(
                    bc.a.Provider,
                    { value: Cc },
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
                    o = Object($.a)(e)
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
                    r && (this._heights = Object.assign(Oc({}, this._heights), n)),
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
                    s = Object(Uo.a)(n, function (e) {
                      var t = e.id
                      return c[t].getBottom() > i
                    }),
                    l = s >= 0 ? s : n.length - 1,
                    u = Object(Uo.a)(
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
                  if (!this._ref) return new Ko.a(0, 0)
                  var e = this._ref.getWrapperNode()
                  if (!e) return new Ko.a(0, 0)
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
                    a = Oc(
                      Oc({}, this),
                      {},
                      {
                        props: Oc(Oc({}, this.props), {}, { list: e }),
                        state: Oc({}, this.state),
                        context: Oc({}, this.context),
                        refs: null,
                      },
                    ),
                    i = this._getRectangles(a),
                    o = e[t].id,
                    c = i[o].getBottom(),
                    s = Object(Uo.a)(
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
        })(b.a.PureComponent)
      v()(wc, 'defaultProps', {
        assumedItemHeight: 400,
        heightCache: {},
        initialItemIndex: 0,
        minimumOffscreenToViewportRatio: 0.5,
        preferredOffscreenToViewportRatio: 2.5,
      })
      var Rc = function (e, t, n) {
          var r = {}
          return (
            e.reduce(function (e, a) {
              var i = a.id,
                o = t.hasOwnProperty(i) ? t[i] : n,
                c = new Ko.a(e, o)
              return (r[i] = c), c.getBottom()
            }, 0),
            r
          )
        },
        Ic = wc
      function kc(e) {
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
      var Pc = function (e) {
          return (
            Object(Jo.a)('Fallback to slow hashing in VirtualScroller (type = '.concat(e ? e.type : '', ')')),
            Object(Qo.a)(e)
          )
        },
        xc = (function (e) {
          u()(n, e)
          var t = kc(n)
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
                return b.a.createElement(
                  Ic,
                  bn()({}, e, {
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
                return b.a.createElement(lc, e)
              }),
              v()(s()(i), '_getItemRenderer', function () {
                return i._getMemoizedItemRenderer(i.props.renderer)
              }),
              v()(
                s()(i),
                '_getMemoizedItemRenderer',
                Object(Te.a)(function (e) {
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
                Object(Te.a)(function (e, t, n, r) {
                  var a = {},
                    i = t.reduce(function (t, n) {
                      var r = e(n) || n.id || Pc(n)
                      return (
                        Object(Xo.a)('number' == typeof r || 'string' == typeof r, 'Item id must not be falsy'),
                        a.hasOwnProperty(r)
                          ? Object(Jo.a)(
                              'Duplicate item id generated in VirtualScroller. Latter item will be discarded',
                              { extra: { id: r } },
                            )
                          : (t.push({ data: { data: n }, id: r }), (a[r] = !0)),
                        t
                      )
                    }, []),
                    o = n
                      ? {
                          id: fc.c,
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
                          id: fc.b,
                          data: {
                            presentational: !0,
                            renderNode: function () {
                              return r
                            },
                          },
                        }
                      : null
                  return i.length ? [].concat(lt()(o ? [o] : []), lt()(i), lt()(c ? [c] : [])) : []
                }),
              ),
              (i._viewport = e.viewport || r.viewport || uc.a.root()),
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
                    ? b.a.createElement(Yo, {
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
                  return new pc.b([
                    {
                      condition: pc.a.nearTop(5),
                      callback: function (t) {
                        return e.props.onAtStart(t)
                      },
                    },
                    {
                      condition: pc.a.nearTopRatio(r),
                      callback: function (t) {
                        return e.props.onNearStart(t)
                      },
                    },
                    {
                      condition: pc.a.nearBottomRatio(n),
                      callback: function (t) {
                        return e.props.onNearEnd(t)
                      },
                    },
                    {
                      condition: pc.a.nearBottom(5),
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
        })(b.a.Component)
      v()(xc, 'displayName', 'VirtualScroller'),
        v()(xc, 'contextTypes', { viewport: dc.object, getCustomLocation: dc.func }),
        v()(xc, 'defaultProps', {
          anchoring: Yo.defaultProps.anchoring,
          assumedItemHeight: Ic.defaultProps.assumedItemHeight,
          identityFunction: Pc,
          minimumOffscreenToViewportRatio: Ic.defaultProps.minimumOffscreenToViewportRatio,
          nearEndProximityRatio: 1.75,
          nearStartProximityRatio: 0.25,
          noItemsRenderer: hc.a,
          onPositionRestored: Mr.a,
          onAtEnd: Mr.a,
          onAtStart: Mr.a,
          onNearEnd: Mr.a,
          onNearStart: Mr.a,
          onScrollEnd: Mr.a,
          preferredOffscreenToViewportRatio: Ic.defaultProps.preferredOffscreenToViewportRatio,
          withKeyboardShortcuts: !1,
        })
      var Tc = Object(Zo.a)(xc),
        Ac = n('mw9i')
      function Mc(e) {
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
      var jc = Je.a.i859a9d3,
        Dc = Je.a.i8ecae5b,
        Lc = function (e) {
          return e.entry.id
        },
        Fc = function (e) {
          return e.entry.type === ye.b.MESSAGE
        },
        Bc = (function (e) {
          u()(n, e)
          var t = Mc(n)
          function n(e, r) {
            var i
            return (
              a()(this, n),
              (i = t.call(this, e, r)),
              v()(
                s()(i),
                '_shouldUseNewScroller',
                i.context.featureSwitches.isTrue('responsive_web_dm_new_scroller_enabled'),
              ),
              v()(s()(i), '_renderItem', function (e) {
                var t = i.props.conversation,
                  n = t.conversation_id
                switch (e.type) {
                  case ye.b.TYPING_INDICATOR:
                    return n ? b.a.createElement(jo, { conversationId: n }) : null
                  case ye.b.READ_ONLY_INDICATOR:
                    return n
                      ? b.a.createElement(
                          ge.a,
                          { style: Nc.readOnly },
                          b.a.createElement(
                            _e.b,
                            { align: 'center', color: 'gray700', size: 'subtext2' },
                            Dc,
                            ' ',
                            b.a.createElement(_e.b, { link: 'https://support.twitter.com/articles/14606#faq' }, jc),
                          ),
                        )
                      : null
                  case ye.b.CONVERSATION_PROFILE_INFO_HEADER:
                    return b.a.createElement(pe, { conversation: t })
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
              (i._anchoring = X({
                isOwnMessage: function (e) {
                  var t, n
                  return (
                    (null === (t = e.entry) || void 0 === t || null === (n = t.message_data) || void 0 === n
                      ? void 0
                      : n.sender_id) === i.props.perspective || !1
                  )
                },
                typingIndicatorId: Q.a,
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
                          n && 0 === i && e.push(Q.b)
                          var c = Object($.a)(e),
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
                            var l = J(c.entry, a),
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
                      footer: Q.d,
                      readOnlyEntry: Q.c,
                      canInjectConversationProfileInfoHeader: n.status === ye.c.AT_END && n.type === ye.a.ONE_TO_ONE,
                      activeEntryId: c,
                    }),
                    l = n.conversation_id,
                    u = function (e) {
                      return e[e.length - 1]
                    },
                    d = function (e) {
                      for (var t = e.length - 1; t >= 0; t--) {
                        var n = e[t]
                        if (n && Fc(n)) return n
                      }
                      return u(e)
                    },
                    p = 'dm-activity-'.concat(l)
                  return b.a.createElement(fe.a.Consumer, null, function (t) {
                    var c = t.isDrawer ? he.b.drawerHeaderRadius : Nc.scrollSpace
                    return b.a.createElement(
                      ge.a,
                      { style: [Nc.scrollContainer, c] },
                      b.a.createElement(
                        No.a,
                        { style: [Nc.scrollContainer, a && Nc.conversationsPadding, c, o] },
                        r || null,
                        n.status && n.status !== ye.c.AT_END ? b.a.createElement(Bo.a, null) : null,
                        b.a.createElement(
                          Ac.a,
                          { style: [Nc.content, Nc.alignTop], withGutter: !0 },
                          e._shouldUseNewScroller
                            ? b.a.createElement(Lo.b, {
                                anchoring: Do.a,
                                assumedItemHeight: 50,
                                cacheKey: p,
                                canBeAnchorFunction: Fc,
                                hasNewContentAtBottom: !0,
                                identityFunction: Lc,
                                initialAnchor: s.length > 0 ? U.a(Lc(d(s))) : void 0,
                                items: s,
                                nearStartProximityRatio: 2,
                                onNearStart: i,
                                renderer: e._renderItem,
                                withoutHeadroom: !1,
                              })
                            : b.a.createElement(
                                Fo.a,
                                { identifier: p },
                                b.a.createElement(Tc, {
                                  anchoring: e._anchoring,
                                  assumedItemHeight: 50,
                                  cacheKey: p,
                                  hasNewContentAtBottom: !1,
                                  identityFunction: Lc,
                                  initialAnchor: s.length > 0 ? U.a(Lc(u(s))) : void 0,
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
                    ? b.a.createElement(oo, {
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
        })(b.a.Component)
      v()(Bc, 'contextType', ee.a)
      var Nc = ae.a.create(function (e) {
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
        Hc = n('uB9N'),
        Uc = n('v//M'),
        Vc = n('J2UM'),
        Wc = n('07FG'),
        zc = n('I8M8'),
        Kc = n('7myi'),
        Gc = n('883S'),
        qc = n('z0MJ'),
        Yc = n.n(qc),
        Xc = n('Es6L'),
        Qc = n('LsPn'),
        Zc = ae.a.create(function (e) {
          return {
            root: { flexGrow: 1 },
            activity: { flexBasis: e.spacesPx.space1, flexGrow: 1, height: '100%' },
            kaiOSFix: { paddingBottom: e.spaces.space20 },
            dragDrop: { flexGrow: 1 },
            scrollView: { flexGrow: 1 },
          }
        }),
        Jc = n('GSsg'),
        $c = n('EbOo'),
        es = Object(gn.a)().propsFromActions(function () {
          return {
            addToast: C.b,
            block: x.e.block,
            createLocalApiErrorHandler: Object(M.createLocalApiErrorHandlerWithContextFactory)(
              'UNTRUSTED_CONVERSATION_ACTIONS',
            ),
            muteDMUser: E.muteDMUser,
            unmuteDMUser: E.unmuteDMUser,
            unblock: x.e.unblock,
          }
        }),
        ts = (n('AQ79'), n('u0B7')),
        ns = n('tZH3'),
        rs = Je.a.ccf2f24e,
        as = Je.a.ib3fe8a9,
        is = function (e) {
          var t = e.isGroup,
            n = e.onBlockClick,
            r = e.onReportClick,
            a = e.requestorScreenName,
            i = { type: 'destructiveOutlined' },
            o = b.a.createElement(xt.a, bn()({}, i, { accessibilityRole: 'button' }), as),
            c = b.a.createElement(xt.a, bn()({}, i, { onPress: r }), rs),
            s = b.a.useCallback(
              function (e, t) {
                return b.a.createElement(ns.a, {
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
          return t ? c : b.a.createElement(Wn.a, { renderContent: s }, o)
        },
        os = n('cHvH'),
        cs = function (e) {
          var t = b.a.useContext(ee.a),
            n = t.featureSwitches.isTrue('dm_vdl_enabled') && t.featureSwitches.isTrue('dm_vdl_chat_p0_enabled'),
            r = t.loggedInUserId,
            a = function () {
              return e.onAccept()
            },
            i = function () {
              return e.onBlock()
            },
            o = function () {
              return e.onReport()
            },
            c = function () {
              return e.onLeave()
            }
          return b.a.createElement(os.a, null, function (t) {
            var s = t.windowWidth <= ae.a.theme.breakpoints.small
            return b.a.createElement(
              ge.a,
              { style: ss.actionsContainer },
              n &&
                b.a.createElement(
                  xt.a,
                  {
                    onPress: a,
                    size: 'medium',
                    style: [ss.actionFullWidth, ss.actionMarginBottom],
                    type: 'primaryOutlined',
                  },
                  e.acceptButtonText,
                ),
              b.a.createElement(
                ge.a,
                { style: s ? ss.actionFullWidth : [ss.actionHalfWidth, ss.actionMarginRight] },
                b.a.createElement(is, {
                  isGroup: e.isGroup,
                  onBlockClick: i,
                  onReportClick: o,
                  requestorScreenName: Object(A.i)(e.conversation, r).screenName,
                }),
              ),
              b.a.createElement(
                xt.a,
                {
                  onPress: c,
                  size: 'medium',
                  style: s ? [ss.actionFullWidth, ss.actionMarginTop] : [ss.actionHalfWidth, ss.actionMarginLeft],
                  type: 'destructiveOutlined',
                },
                e.declineButtonText,
              ),
              !n &&
                b.a.createElement(
                  xt.a,
                  {
                    onPress: a,
                    size: 'medium',
                    style: [ss.actionFullWidth, ss.actionMarginTop],
                    type: 'primaryOutlined',
                  },
                  e.acceptButtonText,
                ),
            )
          })
        },
        ss = ae.a.create(function (e) {
          return {
            actionsContainer: { display: 'flex', flexWrap: 'wrap', flexDirection: 'row' },
            actionFullWidth: { width: '100%' },
            actionHalfWidth: { width: 'calc(50% - '.concat(e.spaces.space4, ')') },
            actionMarginRight: { marginRight: e.spaces.space4 },
            actionMarginLeft: { marginLeft: e.spaces.space4 },
            actionMarginTop: { marginTop: e.spaces.space12 },
            actionMarginBottom: { marginBottom: e.spaces.space12 },
          }
        }),
        ls = n('vMjK'),
        us = n('7JQg'),
        ds = n('24HD'),
        ps = n('Ty5D')
      function fs(e, t) {
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
      function hs(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? fs(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : fs(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var ms = Je.a.da878dcf,
        vs = Je.a.d96cf7cd,
        ys = (Je.a.gde6b424, Je.a.e308019b, Je.a.gf5e9ea6, Je.a.hc52446b),
        bs = Je.a.f7e1ad65,
        gs = { headline: Je.a.gdf4b79f, text: Je.a.bbf83d83, confirmButtonLabel: Je.a.bb1d57b6 },
        _s = ae.a.create(function (e) {
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
          }
        }),
        Es = Object(us.c)({ element: 'untrusted_interstitial' })(
          es(function (e) {
            var t = e.conversation,
              n = e.scribeAction,
              r = e.scribeNamespace,
              a = b.a.useContext(ee.a),
              i = Object(ps.g)(),
              o = Object(ps.h)(),
              c = b.a.useState(!1),
              s = xe()(c, 2),
              l = s[0],
              u = s[1],
              d = b.a.useState(!1),
              p = xe()(d, 2),
              f = p[0],
              h = p[1],
              m = b.a.useCallback(
                function () {
                  return { items: [{ conversation_type: t.type === E.CONVERSATION_TYPE.GROUP ? 1 : 0 }] }
                },
                [t.type],
              ),
              v = b.a.useCallback(
                function (e, t) {
                  n(hs(hs({}, r), {}, { action: e }), t || m())
                },
                [m, n, r],
              )
            b.a.useEffect(
              function () {
                v('impression')
              },
              [v],
            )
            var y,
              g,
              _,
              O,
              S = function () {
                u(!0), h(!1)
              },
              C = function () {
                u(!1)
              },
              w = function () {
                h(!1)
              },
              R = function () {
                var n,
                  r = e.conversationId,
                  a = e.inboxType,
                  i = e.leaveConversation,
                  c = t.type === E.CONVERSATION_TYPE.GROUP ? 'leave_group' : 'delete_thread',
                  s = null != t && t.participants ? Object.keys(t.participants).length : 0,
                  l = (null == o || null === (n = o.state) || void 0 === n ? void 0 : n.position) || 0,
                  d = {
                    conversation_type: (null == t ? void 0 : t.type) === E.CONVERSATION_TYPE.GROUP ? 1 : 0,
                    conversation_id: r,
                    conversation_participant_count: s,
                    position: l,
                    inbox_type: Object(A.h)(a),
                    entry_point: ht.b.REQUEST_ACTION_SHEET,
                  }
                u(!1), i({ conversationId: r }), v(c, d), I()
              },
              I = function () {
                var t = e.inboxType
                i.push(Object(A.e)(t))
              },
              k = function () {
                !(function () {
                  var n,
                    r = e.acceptConversation,
                    a = e.conversationId,
                    i = e.inboxType,
                    c = e.scribeAction,
                    s = e.scribeNamespace,
                    l = null != t && t.participants ? Object.keys(t.participants).length : 0,
                    u = (null == o || null === (n = o.state) || void 0 === n ? void 0 : n.position) || 0
                  a &&
                    (r(a),
                    c(hs(hs({}, s), {}, { action: 'accept' }), {
                      conversation_id: a,
                      conversation_type: t.type === E.CONVERSATION_TYPE.GROUP ? ht.g.GROUP : ht.g.ONE_TO_ONE,
                      conversation_participant_count: l,
                      entry_point: ht.b.REQUEST_ACTION_SHEET,
                      inbox_type: Object(A.h)(i),
                      position: u,
                    }))
                })()
              },
              P = function (t) {
                return function () {
                  var n = e.addToast,
                    r = e.block,
                    a = e.createLocalApiErrorHandler
                  h(!1),
                    r(t).then(function () {
                      n({ action: { label: ls.c, onAction: x(t) }, text: ls.a })
                    }, a($c.a)),
                    v('block')
                }
              },
              x = function (t) {
                return function () {
                  var n = e.createLocalApiErrorHandler
                  ;(0, e.unblock)(t).catch(n(ts.a)), v('unblock')
                }
              },
              T = (t && t.type) === E.CONVERSATION_TYPE.GROUP
            return b.a.createElement(
              b.a.Fragment,
              null,
              b.a.createElement(
                ge.a,
                { style: _s.root },
                (function (e) {
                  var n = a.loggedInUserId
                  return b.a.createElement(
                    _e.b,
                    { style: _s.copy },
                    e ? ys : bs({ senderName: Object(A.i)(t, n).name }),
                  )
                })(T),
                b.a.createElement(cs, {
                  acceptButtonText: ms,
                  conversation: t,
                  declineButtonText: vs,
                  isGroup: T,
                  onAccept: k,
                  onBlock: function () {
                    u(!1), h(!0)
                  },
                  onLeave: S,
                  onReport: function () {
                    var t = e.conversationId,
                      n = e.inboxType
                    t && (v('report'), i.push(Object(A.f)(t, window.location.pathname, r, n)))
                  },
                }),
              ),
              nc.b.isKaiOS()
                ? b.a.createElement(Qc.a, { leftText: vs, onLeftClick: S, onRightClick: k, rightText: ms })
                : null,
              l
                ? b.a.createElement(Pt.a, {
                    confirmButtonLabel: gs.confirmButtonLabel,
                    confirmButtonType: 'destructiveFilled',
                    headline: gs.headline,
                    onCancel: C,
                    onConfirm: R,
                    text: gs.text,
                  })
                : null,
              f
                ? ((y = a.loggedInUserId),
                  (g = Object(A.i)(t, y)),
                  (_ = g.idStr),
                  (O = g.screenName),
                  Object(ds.j)({ confirmation: Object(ds.f)(O), onClose: w, handleConfirm: P(_) }))
                : null,
            )
          }),
        ),
        Os = n('rFBM'),
        Ss = n('jTgF')
      function Cs(e, t) {
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
            ? Cs(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Cs(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function Rs(e) {
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
      var Is = b.a.createElement(Qt.a, null),
        ks = Je.a.badb01a0,
        Ps = Je.a.e3275464,
        xs = Je.a.d6b11d9c,
        Ts = Je.a.i7ca1446,
        As = function (e) {
          return e && (e.tweet || e.media)
        },
        Ms = function (e) {
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
        js = (function (e) {
          u()(n, e)
          var t = Rs(n)
          function n(e, r) {
            var i
            return (
              a()(this, n),
              (i = t.call(this, e, r)),
              v()(s()(i), '_composer', b.a.createRef()),
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
                    nc.b.isMobileOS() && i._fetchConversation(e)
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
                      b.a.createElement(Es, {
                        acceptConversation: i._acceptConversation,
                        conversation: t,
                        conversationId: n,
                        inboxType: r,
                        leaveConversation: i._leaveConversation,
                        scribeAction: a,
                      })
                  : b.a.createElement(
                      b.a.Fragment,
                      null,
                      i._renderComposerBar(),
                      nc.b.isKaiOS()
                        ? b.a.createElement(Qc.a, {
                            leftText: Ts,
                            onLeftClick: i._handleInfoClick,
                            onRightClick: i._handleComposeClick,
                            rightText: ks,
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
                return b.a.createElement(
                  Oi,
                  { key: n },
                  b.a.createElement(
                    Os.a,
                    { allowDragDrop: !As(u), onFilesAdded: i._handleDragDrop, style: Zc.dragDrop },
                    b.a.createElement(
                      No.a,
                      {
                        style: [
                          Zc.scrollView,
                          !Object(Xc.a)() && !i._isUntrustedConversation(t) && { paddingBottom: d },
                        ],
                      },
                      c && t
                        ? b.a.createElement(Bc, {
                            conversation: t,
                            drawerHeader: r,
                            inboxType: a,
                            isWide: o,
                            onHistoryRequest: i._handleHistoryRequest,
                            perspective: c,
                            scribeNamespace: s,
                            style: Zc.activity,
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
                Object(oc.a)(
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
                Object(oc.a)(
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
                  _ = i.state.attachment,
                  O = _ && _.media,
                  S = null != s && s.participants ? Object.keys(s.participants).length : 0,
                  C = (null == s ? void 0 : s.type) === E.CONVERSATION_TYPE.GROUP,
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
                    I = null == _ || null === (R = _.media) || void 0 === R ? void 0 : R.mediaFile,
                    k = null != I && I.isVideo ? 'video' : null != I && I.isGif ? 'gif' : 'photo'
                  w = I ? k : t ? 'text' : 'unknown'
                }
                return (
                  l &&
                    v(ws(ws({}, y), {}, { element: w, action: 'send_dm' }), {
                      conversation_id: l,
                      conversation_participant_count: S,
                      conversation_type: C ? ht.g.GROUP : ht.g.ONE_TO_ONE,
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
                        ws(
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
                          if ((i.setState({ isSending: !1 }), !Object(Ss.d)(e) || e.code !== zc.b.CANCELED))
                            if (Object(Ss.d)(e)) {
                              var t = Object(Ss.b)(e, xs)
                              t && o(t)
                            } else u(Gc.b)(e)
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
                        v(ws(ws({}, y), {}, { element: w, action: 'send_dm' }), {
                          conversation_id: e,
                          conversation_participant_count: h ? h.length + 1 : 0,
                          conversation_type: ht.g.GROUP,
                        }),
                          i.setState({ attachment: null, isSending: !1 }),
                          p.replace('/messages/'.concat(e))
                      }, u(Gc.b)),
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
                attachment: Ms(e),
                composerHeight: ae.a.theme.componentDimensions.appBarHeight,
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
                  Yc()(function () {
                    return Object(Vc.a)().then(function (t) {
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
                  Object(g.h)().then(function (n) {
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
                    (this._updatePolling = new Jc.a(this._fetchUpdatesIfNeeded, { interval: t }))
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
                      e.fetchStatus === R.a.LOADED && o !== R.a.LOADED && i && this._fetchConversation(i))
                },
              },
              {
                key: 'UNSAFE_componentWillReceiveProps',
                value: function (e) {
                  var t = this.props.media,
                    n = e.media
                  Object(be.a)(t, n) || this.setState({ attachment: Ms(e) })
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props.fetchStatus
                  return b.a.createElement(
                    Ac.a,
                    { style: [Zc.root, nc.b.isKaiOS() && Zc.kaiOSFix] },
                    b.a.createElement(Uc.a, {
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
                    y = v.attachment,
                    g = v.isSending,
                    _ = this.props.prefillText || o
                  return null != r && r.read_only
                    ? null
                    : b.a.createElement(Hc.a, {
                        attachment: y,
                        conversationId: a,
                        disabled: l,
                        dtabBarInfo: c,
                        history: s,
                        isCardPreviewTombstoned: Object(Wc.a)(n),
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
                        primaryActionIcon: Is,
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
                    .catch(n(Object(H.a)(e)))
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
                    l = !r || !r.type || r.type === E.CONVERSATION_TYPE.GROUP,
                    u = r && r.participants && Object.keys(r.participants).length <= 1
                  return s || l || u ? Promise.resolve() : n(e, c).catch(a({ showToast: !1 }))
                },
              },
            ]),
            n
          )
        })(b.a.PureComponent)
      v()(js, 'contextType', ee.a), v()(js, 'defaultProps', { isNewGroupConversation: !1, typeaheadWrapper: Kc.a })
      t.a = Object(us.c)()(N(js))
    },
    P68U: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'MediaPickerWithPreview', function () {
          return w
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
        b = n.n(y),
        g = n('AspN'),
        _ = n('rxPX'),
        E = Object(_.a)().propsFromActions(function () {
          return { addMedia: g.b, processMultipleMedia: g.g }
        }),
        O = n('2Daw'),
        S = n('VPdC')
      function C(e) {
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
      var w = (function (e) {
        u()(n, e)
        var t = C(n)
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
              return Object(S.b)({ acceptGifs: n, acceptVideo: r })
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
                return b.a.createElement(O.a, {
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
      })(b.a.Component)
      v()(w, 'defaultProps', { acceptGifs: !1, acceptVideo: !1 })
      var R = E(w)
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
        b = n.n(y),
        g = n('TIdA'),
        _ = n('t62R'),
        E = n('A91F'),
        O = n('/yvb'),
        S = n('rHpw'),
        C = 'inlinePrompt',
        w = 'inlinePrompt-primaryAction',
        R = 'inlinePrompt-secondaryAction',
        I = 'inlinePrompt-centeredImageContainer',
        k = n('MWbm')
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
      var x = (function (e) {
        u()(n, e)
        var t = P(n)
        function n() {
          var e
          a()(this, n)
          for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
          return (
            (e = t.call.apply(t, [this].concat(i))),
            v()(s()(e), '_renderImage', function (e) {
              var t = b.a.createElement(g.a, {
                accessibilityLabel: '',
                aspectMode: E.a.exact(e.width / e.height),
                backgroundColor: e.backgroundColor,
                image: e,
              })
              return e.isCentered
                ? b.a.createElement(
                    k.a,
                    { style: T.centeredImage, testID: I },
                    b.a.createElement(
                      k.a,
                      { style: { width: ''.concat(e.width, 'px'), height: ''.concat(e.height, 'px') } },
                      t,
                    ),
                  )
                : t
            }),
            v()(s()(e), '_renderTitle', function () {
              var t = e.props.headline
              return t
                ? b.a.createElement(
                    _.b,
                    {
                      accessibilityRole: 'heading',
                      align: 'left',
                      size: 'title4',
                      style: T.flexGrow,
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
                ? b.a.createElement(
                    _.b,
                    { align: 'left', color: 'gray700', style: e.styles.body, withHashflags: !0 },
                    t,
                  )
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
              return b.a.createElement(
                k.a,
                { style: [e.styles.actionContainer, i, { justifyContent: 'flex-start' }], testID: o },
                b.a.createElement(
                  O.a,
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
                return b.a.createElement(
                  k.a,
                  { style: i ? [A.root, A.rootMargin] : T.root },
                  b.a.createElement(
                    b.a.Fragment,
                    null,
                    t ? this._renderImage(t) : null,
                    b.a.createElement(
                      k.a,
                      { style: this.styles.rootPadding, testID: C },
                      this._renderTitle(),
                      this._renderBodyText(),
                      n
                        ? this._renderAction({
                            action: n,
                            buttonType: 'primaryFilled',
                            style: this.styles.primaryAction,
                            buttonSize: 'large',
                            testID: w,
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
                  r ? b.a.createElement(k.a, { style: T.rightControl }, r) : null,
                )
              },
            },
            {
              key: 'styles',
              get: function () {
                return this.props.isCompact ? j : M
              },
            },
          ]),
          n
        )
      })(b.a.Component)
      v()(x, 'defaultProps', { shouldRenderBorder: !1 })
      var T = S.a.create(function (e) {
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
        A = S.a.create(function (e) {
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
        M = S.a.create(function (e) {
          return {
            rootPadding: { padding: e.spaces.space32 },
            body: { marginTop: e.spaces.space8 },
            actionContainer: { flexDirection: 'row' },
            primaryAction: { marginTop: e.spaces.space28 },
            secondaryAction: { marginTop: e.spaces.space16 },
          }
        }),
        j = S.a.create(function (e) {
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
        a = n.n(r),
        i = n('3XMw'),
        o = n.n(i),
        c = n('MWbm'),
        s = n('Qwev'),
        l = n('rHpw'),
        u = o.a.ffde2fdb,
        d = l.a.create(function (e) {
          return { spinner: { alignItems: 'center', marginVertical: '30px' } }
        })
      t.a = function () {
        return a.a.createElement(c.a, { style: d.spinner }, a.a.createElement(s.a, { accessibilityLabel: u }))
      }
    },
    'S+H3': function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        i = n('ERkP'),
        o = n.n(i),
        c = n('Lsrn'),
        s = n('k/Ka')
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
      var d = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(s.a)(
          'svg',
          u(
            u({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [c.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          o.a.createElement(
            'g',
            null,
            o.a.createElement('path', {
              d: 'M15.09 9.07c-.25-1.83-1.43-2.98-3.1-2.98-1.66 0-2.85 1.15-3.09 2.98-.18 1.32 0 2.26.55 2.89.66.76 1.66.86 2.54.86.89 0 1.88-.1 2.54-.86.56-.63.74-1.57.56-2.89zm-1.68 1.9c-.21.24-.65.35-1.42.35-.76 0-1.2-.11-1.41-.35-.24-.28-.31-.86-.2-1.7.1-.76.47-1.68 1.61-1.68.58 0 .95.23 1.2.56.24.32.36.74.41 1.12.12.84.05 1.42-.19 1.7zm2.67 4.09c-.99-.99-2.4-1.52-4.07-1.52h-.03c-1.62 0-3.06.55-4.06 1.55-.87.87-1.34 2.02-1.34 3.25 0 .79.64 1.44 1.44 1.44h7.95c.79 0 1.44-.65 1.44-1.44 0-1.26-.47-2.43-1.33-3.28zm-7.44 3.276c-.318.002-.562-.288-.502-.6.116-.595.406-1.14.842-1.576.72-.72 1.78-1.12 3.01-1.12H12c1.27 0 2.32.37 3.02 1.08.432.432.715.962.83 1.564.06.308-.178.598-.492.6l-6.72.052zM21.75 6.97c-.22-1.7-1.32-2.75-2.86-2.75-1.53 0-2.64 1.05-2.87 2.75-.16 1.2.02 2.07.52 2.65.62.71 1.53.81 2.35.81.81 0 1.73-.1 2.34-.8.39-.45.59-1.07.59-1.85 0-.22-.02-.47-.07-.81zm-4.22.2c.13-.95.59-1.43 1.36-1.43.43 0 .77.15 1 .46.23.29.32.69.35.97.03.22.05.43.05.61 0 .4-.07.69-.21.84-.16.2-.54.28-1.19.28-.66 0-1.04-.08-1.2-.28-.2-.22-.25-.73-.16-1.45zm6.3 8.37c0 .74-.62 1.34-1.37 1.34h-3.75c-.41 0-.76-.34-.76-.76 0-.43.34-.76.76-.76h3.24c.1 0 .2-.05.26-.13.07-.09.1-.2.07-.3-.12-.53-.37-.99-.74-1.36-.61-.62-1.53-.94-2.64-.94-.73 0-1.39.15-1.93.44l-.5.32c-.36.21-.83.1-1.04-.25-.23-.36-.12-.82.24-1.05l.54-.34c.78-.42 1.71-.64 2.66-.64h.03c1.52 0 2.81.47 3.72 1.38.79.8 1.22 1.88 1.21 3.05zM2.18 7.78c0 .78.2 1.4.59 1.85.61.7 1.53.8 2.34.8.82 0 1.73-.1 2.35-.81.5-.58.68-1.45.52-2.65-.23-1.7-1.34-2.75-2.87-2.75-1.54 0-2.64 1.05-2.86 2.75-.05.34-.07.59-.07.81zm4.13.84c-.16.2-.54.28-1.2.28-.65 0-1.03-.08-1.19-.28-.14-.15-.21-.44-.21-.84 0-.18.02-.39.05-.61.03-.28.12-.68.35-.97.23-.31.57-.46 1-.46.77 0 1.23.48 1.36 1.43.09.72.04 1.23-.16 1.45zM.17 15.54c0 .74.62 1.34 1.37 1.34h3.75c.41 0 .76-.34.76-.76 0-.43-.34-.76-.76-.76H2.05c-.1 0-.2-.05-.26-.13-.07-.09-.1-.2-.07-.3.12-.53.37-.99.74-1.36.61-.62 1.53-.94 2.64-.94.73 0 1.39.15 1.93.44l.5.32c.36.21.83.1 1.04-.25.23-.36.12-.82-.24-1.05l-.54-.34c-.78-.42-1.71-.64-2.66-.64H5.1c-1.52 0-2.81.47-3.72 1.38-.79.8-1.22 1.88-1.21 3.05z',
            }),
          ),
        )
      }
      ;(d.metadata = { width: 24, height: 24 }), (t.a = d)
    },
    'ShJ/': function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        i = n('ERkP'),
        o = n.n(i),
        c = n('Lsrn'),
        s = n('k/Ka')
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
      var d = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(s.a)(
          'svg',
          u(
            u({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [c.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          o.a.createElement(
            'g',
            null,
            o.a.createElement('path', {
              d: 'M20.472 14.738c-.388-1.808-2.24-3.517-3.908-4.246l-.474-4.307 1.344-2.016c.258-.387.28-.88.062-1.286-.218-.406-.64-.66-1.102-.66H7.54c-.46 0-.884.254-1.1.66-.22.407-.197.9.06 1.284l1.35 2.025-.42 4.3c-1.667.732-3.515 2.44-3.896 4.222-.066.267-.043.672.222 1.01.14.178.46.474 1.06.474h3.858l2.638 6.1c.12.273.39.45.688.45s.57-.177.688-.45l2.638-6.1h3.86c.6 0 .92-.297 1.058-.474.265-.34.288-.745.228-.988zM12 20.11l-1.692-3.912h3.384L12 20.11zm-6.896-5.413c.456-1.166 1.904-2.506 3.265-2.96l.46-.153.566-5.777-1.39-2.082h7.922l-1.39 2.08.637 5.78.456.153c1.355.45 2.796 1.78 3.264 2.96H5.104z',
            }),
          ),
        )
      }
      ;(d.metadata = { width: 24, height: 24 }), (t.a = d)
    },
    T8pk: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        i = n('ERkP'),
        o = n.n(i),
        c = n('Lsrn'),
        s = n('k/Ka')
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
      var d = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(s.a)(
          'svg',
          u(
            u({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [c.a.root, e.style], viewBox: '0 0 24 24' },
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
      ;(d.metadata = { width: 24, height: 24 }), (t.a = d)
    },
    TEoO: function (e, t, n) {
      'use strict'
      var r = n('m3Bd'),
        a = n.n(r),
        i = n('ERkP'),
        o = n.n(i),
        c = n('5UID'),
        s = n('3GUV'),
        l = n('iBK2'),
        u = o.a.createElement(s.a, null),
        d = function (e) {
          var t = e.accessibilityTitle,
            n = a()(e, ['accessibilityTitle']),
            r = o.a.createElement(l.b, n)
          return t ? o.a.createElement(c.a, { title: t }, r) : r
        }
      ;(d.defaultProps = { footer: u }), (t.a = d)
    },
    UPvq: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return M
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
        b = n.n(y),
        g = n('RCZO'),
        _ = n('3XMw'),
        E = n.n(_),
        O = n('hOZg'),
        S = n('MWbm'),
        C = n('mw9i'),
        w = n('cm6r'),
        R = n('/yvb'),
        I = n('7N4s'),
        k = n('rHpw')
      function P(e, t) {
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
            ? P(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : P(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function T(e) {
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
      var A = E.a.ia5e7487,
        M = (function (e) {
          u()(n, e)
          var t = T(n)
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
                    p = x({ backgroundColor: n.rgba }, g.a),
                    f = x({ backgroundColor: n.rgb }, g.a),
                    h = [j.root, d ? p : f, { position: d || i ? 'relative' : 'fixed' }]
                  return b.a.createElement(
                    b.a.Fragment,
                    null,
                    b.a.createElement(
                      S.a,
                      { onClick: this._handleBackgroundPress, style: h },
                      r,
                      a
                        ? b.a.createElement(
                            S.a,
                            {
                              pointerEvents: o ? 'none' : void 0,
                              style: [j.footerButtons, l && p, l && j.footerButtonsAbsolute, o && j.fadeOut],
                            },
                            b.a.createElement(C.a, { withGutter: !0 }, a),
                          )
                        : null,
                    ),
                    b.a.createElement(
                      w.a,
                      {
                        accessibilityRole: 'none',
                        interactiveStyles: null,
                        onClick: this._handleCloseButtonPress,
                        pointerEvents: o ? 'none' : void 0,
                        style: [j.buttonWrapper, j.buttonWrapperLeft, g.a, o && j.fadeOut],
                      },
                      function (t) {
                        return b.a.createElement(R.a, {
                          accessibilityLabel: A,
                          dominantColor: n.rgb,
                          hoverLabel: { label: A },
                          icon: b.a.createElement(O.a, null),
                          interactivityState: t,
                          onClick: e._handleCloseButtonPress,
                          type: c || s ? 'onMediaDominantColorFilled' : 'onMediaWhiteFilled',
                        })
                      },
                    ),
                    u
                      ? b.a.createElement(
                          S.a,
                          {
                            pointerEvents: o ? 'none' : void 0,
                            style: [j.buttonWrapper, j.buttonWrapperRight, g.a, o && j.fadeOut],
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
        })(b.a.Component)
      v()(M, 'contextType', I.b), v()(M, 'defaultProps', { hideButtons: !1 })
      var j = k.a.create(function (e) {
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
          footerButtonsAbsolute: { position: 'absolute', bottom: 0, paddingBottom: k.a.iPhoneOffsetBottom, zIndex: 1 },
        }
      })
    },
    'V/6K': function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        a = n.n(r).a.createContext({ isDrawer: !1 })
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
        return o
      })
      var r = n('ERkP'),
        a = n.n(r),
        i = n('fs1G'),
        o = a.a.createContext({ handleNextSlide: i.a })
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
          return je
        }),
        n.d(t, 'DMComposeScreen', function () {
          return De
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
        b = n.n(y),
        g = n('s14A'),
        _ = n('uB9N'),
        E = n('3nOA'),
        O = n('jHSc'),
        S = n('wO1l'),
        C = n('p9G8'),
        w = n('AQOc'),
        R = n('3XMw'),
        I = n.n(R),
        k = n('oQhu'),
        P = 'nextButton',
        x = n('aITJ'),
        T = n('2dXj'),
        A = n('MWbm'),
        M = n('w9LO'),
        j = n('/yvb'),
        D = n('t62R'),
        L = n('htQn'),
        F = n('7N4s'),
        B = n('rHpw'),
        N = n('v6aA'),
        H = n('MMRb'),
        U = n('CDB5'),
        V = n('1YZw'),
        W = n('hqKg'),
        z = n('tn7R'),
        K = n('Hw0q'),
        G = n('RqPI'),
        q = n('X/yg'),
        Y = n('G6rE'),
        X = n('rxPX'),
        Q = n('0KEI')
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
      function J(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
        return r
      }
      var $ = { page: 'messages', section: 'compose', component: 'dm' },
        ee = 'text',
        te = 'recipient_id',
        ne = Object(K.b)(ee),
        re =
          (Object(K.b)(te),
          function (e) {
            var t = Object(G.q)(e)
            if (!t) throw new Error('logged-in user not found')
            return t
          }),
        ae = Object(X.a)()
          .propsFromState(function () {
            return {
              conversations: Object(W.createSelector)(H.selectConversations, function (e) {
                var t,
                  n = [],
                  r = Z(Object(z.a)(e))
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
              initialMessage: ne,
              perspective: re,
              tweetAttachment: q.n,
              users: Y.e.selectAll,
              recipientId: Object(K.b)(te),
            }
          })
          .propsFromActions(function () {
            return {
              addToast: V.b,
              createLocalApiErrorHandler: Object(Q.createLocalApiErrorHandlerWithContextFactory)(
                'DIRECT_MESSAGES_COMPOSE',
              ),
              fetchConversationFromParticipants: H.fetchConversationFromParticipants,
              fetchInboxIfNeeded: H.fetchInboxIfNeeded,
              popOutConversation: H.popOutConversation,
              sendMessage: U.m,
            }
          })
          .withAnalytics($),
        ie = n('UgB4'),
        oe = n('S+H3'),
        ce = n('883S'),
        se = n('GZwR')
      function le(e, t) {
        var n
        if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (!e) return
              if ('string' == typeof e) return ue(e, t)
              var n = Object.prototype.toString.call(e).slice(8, -1)
              'Object' === n && e.constructor && (n = e.constructor.name)
              if ('Map' === n || 'Set' === n) return Array.from(e)
              if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ue(e, t)
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
      function ue(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
        return r
      }
      function de(e, t) {
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
      function pe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? de(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : de(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function fe(e) {
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
      var he = I.a.de4669e2,
        me = I.a.ff599111,
        ve = I.a.c6026009,
        ye = I.a.f61c4bbf,
        be = I.a.cdcebd22,
        ge = I.a.a7013cb6,
        _e = I.a.f277e949,
        Ee = I.a.a2ccb2e7,
        Oe = I.a.a6add339,
        Se = I.a.aca6eb1b,
        Ce = I.a.e3275464,
        we = I.a.hbbc401c,
        Re = I.a.c1df579e,
        Ie = I.a.e1bde73e,
        ke = I.a.f7289cd6,
        Pe = I.a.e6cced4e,
        xe = I.a.a893d601,
        Te = b.a.createElement(ie.a, null),
        Ae = Object.freeze({ BACK: 'back', CLOSE: 'close' }),
        Me = Object.freeze({
          COMPOSE_ROUTE: '/messages/compose',
          GROUP_COMPOSE_ROUTE: '/messages/compose/group',
          MESSAGES_ROUTE: '/messages',
        }),
        je = Object.freeze({ COMPOSE_MESSAGE: 0, CREATE_GROUP: 1, SHARE_TWEET: 2, SHARE_TWEET_INDIVIDUALLY: 3 }),
        De = (function (e) {
          u()(n, e)
          var t = fe(n)
          function n(e, r) {
            var i
            return (
              a()(this, n),
              (i = t.call(this, e, r)),
              v()(s()(i), '_composer', b.a.createRef()),
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
                  ? je.CREATE_GROUP
                  : a
                  ? r.isTrue('dm_share_sheet_send_individually_enabled') &&
                    r.isTrue('direct_messages_incremental_holdback_2022h1')
                    ? je.SHARE_TWEET_INDIVIDUALLY
                    : je.SHARE_TWEET
                  : je.COMPOSE_MESSAGE
              }),
              v()(s()(i), '_isSharingMode', function (e) {
                return e === je.SHARE_TWEET || e === je.SHARE_TWEET_INDIVIDUALLY
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
                  case je.COMPOSE_MESSAGE:
                    t = be
                    break
                  case je.CREATE_GROUP:
                    ;(t = me), (n = ve)
                    break
                  case je.SHARE_TWEET:
                    t = ye
                    break
                  case je.SHARE_TWEET_INDIVIDUALLY:
                    t = s.length > 1 ? ge : ye
                    break
                  default:
                    t = ''
                }
                var l = i._isSharingMode(c)
                return b.a.createElement(
                  O.b,
                  {
                    backButtonType: c === je.CREATE_GROUP ? Ae.BACK : Ae.CLOSE,
                    backLocation: c === je.CREATE_GROUP ? Me.COMPOSE_ROUTE : Me.MESSAGES_ROUTE,
                    containerStyle: Fe.fill,
                    documentTitle: t,
                    history: a,
                    onBackClick: c === je.CREATE_GROUP ? i._handleBackClick : i._handleClose,
                    rightControl: l ? void 0 : i._renderAppBarRightControl(),
                    subtitle: n,
                    title: t,
                    withBottomBorder: !1,
                  },
                  b.a.createElement(M.a.Context.Consumer, null, i._setDisableFocusingPreviousActiveElement),
                  b.a.createElement(
                    g.a,
                    { style: Fe.fill },
                    i._renderUserPicker(),
                    l && !r ? b.a.createElement(A.a, { style: Fe.placeholder }) : null,
                    i._renderComposer(r),
                  ),
                )
              }),
              v()(s()(i), '_setDisableFocusingPreviousActiveElement', function (e) {
                var t = e.disableFocusingPreviousActiveElement
                i._disableFocusingPreviousActiveElement = t
              }),
              v()(s()(i), '_renderAppBarRightControl', function () {
                var e = i.props.tweetAttachment ? Ce : Re
                return b.a.createElement(
                  A.a,
                  { style: Fe.rightColumn },
                  b.a.createElement(
                    j.a,
                    {
                      disabled: 0 === i.state.participants.length,
                      onPress: i._handleConversationRouting,
                      size: 'small',
                      style: Fe.button,
                      testID: P,
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
                  ? b.a.createElement(_.a, {
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
                      placeholderText: he,
                      prefillText: r,
                      primaryActionIcon: s === je.SHARE_TWEET_INDIVIDUALLY ? void 0 : Te,
                      primaryActionLabel: Ce,
                      ref: i._composer,
                      scribeNamespace: $,
                      secondaryActionDisabledPopoverRenderer: i._renderSendToGroupDisabledPopover,
                      secondaryActionLabel: s === je.SHARE_TWEET_INDIVIDUALLY ? we : void 0,
                      shouldEnableSecondaryActionFunc: i._shouldEnableSendToGroup,
                      shouldShowSecondaryActionFunc: i._shouldShowSendToGroup,
                      style: [Fe.shadow, !e && Fe.fixToBottom],
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
                return b.a.createElement(T.d, {
                  getItemDisabledMessage: i._getItemDisabledMessage,
                  getItemIsDisabled: i._getItemIsDisabled(i._separateShareLimit),
                  injections: i._getInjections(t, n, c),
                  onQueryChange: i._handleQueryChange,
                  onRemove: i._handleRemoveParticipant,
                  onSelect: i._getHandleSuggestionSelected(),
                  renderHeader: i._renderHeader(),
                  selectedUsers: o,
                  shouldAutoFocus: !i._isSharingMode(a) || !x.b.isIOS(),
                  source: se.d.ComposeMessage,
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
                  i.setState({ mode: je.CREATE_GROUP })
              }),
              v()(s()(i), '_shouldShowSendToGroup', function () {
                return i.state.participants.length > 1
              }),
              v()(s()(i), '_shouldEnableSendToGroup', function () {
                return !i._hasAtLeastOneGroupSelected()
              }),
              v()(s()(i), '_renderSendToGroupDisabledPopover', function (e) {
                return b.a.createElement(
                  A.a,
                  { style: Fe.popover },
                  b.a.createElement(D.b, { size: 'headline1', style: Fe.popoverElement, weight: 'bold' }, ke),
                  b.a.createElement(D.b, { style: Fe.popoverElement }, Pe),
                  b.a.createElement(
                    j.a,
                    { onPress: e, style: [Fe.popoverElement, Fe.popoverButton], type: 'primaryFilled' },
                    xe,
                  ),
                )
              }),
              v()(s()(i), '_renderHeader', function () {
                return function () {
                  var e = i.state,
                    t = e.mode,
                    n = e.participants,
                    r = e.query,
                    a = i.props.tweetAttachment
                  return n.length || r || t !== je.COMPOSE_MESSAGE
                    ? null
                    : b.a.createElement(
                        L.a,
                        {
                          link: {
                            pathname: Me.GROUP_COMPOSE_ROUTE,
                            state: pe(pe({}, i.state), {}, { isNewGroup: !0, participants: n, tweetAttachment: a }),
                            anchorless: !0,
                          },
                          onPress: i._handleCreateGroup,
                          style: Fe.container,
                        },
                        b.a.createElement(j.a, {
                          accessibilityLabel: me,
                          borderColor: 'blue500',
                          color: 'blue500',
                          hoverLabel: { label: 'Group' },
                          icon: b.a.createElement(oe.a, { style: Fe.searchIcon }),
                          onPress: i._handleCreateGroup,
                          size: 'small',
                          style: Fe.createGroupButton,
                          type: 'brandOutlined',
                        }),
                        b.a.createElement(D.b, { color: 'link', numberOfLines: 1, weight: 'bold' }, me),
                      )
                }
              }),
              v()(s()(i), '_isShareLimitMet', function (e) {
                var t = i.state,
                  n = t.mode,
                  r = t.participants,
                  a = n === je.SHARE_TWEET_INDIVIDUALLY && i._separateShareLimit && r.length >= i._separateShareLimit,
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
                  n !== je.SHARE_TWEET_INDIVIDUALLY &&
                  (i._hasAtLeastOneGroupSelected() ||
                    (e.type === se.b.DMConversation && (r.length > 0 || n === je.CREATE_GROUP)))
                )
                  return !0
              }),
              v()(s()(i), '_canDMUser', function (e) {
                if (e.type === se.b.User) return !(e.data.can_dm || e.data.is_dm_able)
              }),
              v()(s()(i), '_hasAtLeastOneGroupSelected', function () {
                var e,
                  t = le(i.state.participants)
                try {
                  for (t.s(); !(e = t.n()).done; ) {
                    if (e.value.type === se.b.DMConversation) return !0
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
                return e.type === se.b.User ? Ie({ screenName: e.data.screen_name }) : void 0
              }),
              v()(
                s()(i),
                '_getInjections',
                Object(k.a)(function (e, t, n) {
                  return Object(S.a)(
                    n,
                    e.map(function (e) {
                      return Object(w.b)(e, void 0, i.props.users)
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
                  if (e.type === se.b.User || e.type === se.b.DMConversation)
                    if (i._hasAtLeastOneGroupSelected() && r !== je.SHARE_TWEET_INDIVIDUALLY)
                      e.id === a[0].id && i._handleRemoveParticipant(e)
                    else if (e.type === se.b.DMConversation)
                      if (r === je.SHARE_TWEET || r === je.SHARE_TWEET_INDIVIDUALLY)
                        i._createConversationObjectForSelectionPill(e, r === je.SHARE_TWEET_INDIVIDUALLY)
                      else {
                        var o = Le(e, t)
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
                  var l = Object(w.b)(s, void 0, o),
                    u = Object(C.a)(l, a)
                  ;(e.data = pe(pe({}, l), {}, { conversationId: e.data.conversationId, name: u || '' })),
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
                  var c = Le(o[0], r)
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
                          query: v()({}, ee, n),
                          state: { participants: o, tweetAttachment: a, isNewGroupConversation: !0 },
                        })
                      }),
                    i._disableFocusingPreviousActiveElement && i._disableFocusingPreviousActiveElement()
                }
              }),
              v()(s()(i), '_handleShareTweetToGroup', function (e, t) {
                return i.setState({ mode: je.CREATE_GROUP, isSending: !0 }), i._handleShareTweet(e, t)
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
                  d = Le(l, a)
                return d
                  ? i._sendMessage(d, c, u)
                  : i
                      ._getExistingGroupConversation(c)
                      .catch(r(ce.a))
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
                  u = pe({ conversationId: void 0, recipients: void 0 }, n)
                if (!e && Array.isArray(t)) {
                  var d = t
                    .map(function (e) {
                      if (e.type === se.b.User) return e.data.id_str
                    })
                    .filter(Boolean)
                  u.recipients = d
                } else u.conversationId = e
                var p = o(ce.b),
                  f = o(ce.c),
                  h = { action: 'send_tweet_dm' },
                  m = { action: 'share_error' }
                if (
                  (i._isSharingMode(l) &&
                    null != t &&
                    t.length &&
                    t.forEach(function () {
                      a.scribe(h)
                    }),
                  l === je.SHARE_TWEET_INDIVIDUALLY && (null == t ? void 0 : t.length) > 1)
                ) {
                  var v =
                    null == t
                      ? void 0
                      : t.map(function (e) {
                          var t = Le(e, i.props.perspective)
                          return pe(pe({}, u), {}, { conversationId: t, recipients: void 0 })
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
                        query: v()({}, ee, o),
                        state: { tweetAttachment: s },
                      }))
              }),
              v()(s()(i), '_displayDMMessageSentSuccessToast', function (e) {
                ;(0,
                i.props
                  .addToast)({ text: e ? (i.state.mode === je.CREATE_GROUP ? Oe : Ee) : Se, action: { link: e ? '/messages/'.concat(e) : '/messages', label: _e } })
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
                    var c = Object(E.a)(o, i)
                    n.replace({ pathname: '/messages/'.concat(c), query: pe(pe({}, a), {}, v()({}, ee, r)) })
                  } else this.props.fetchInboxIfNeeded().catch(t())
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e, t) {
                  var n = this.state.participants
                  ;(this.state.mode === je.SHARE_TWEET || this.state.mode === je.SHARE_TWEET_INDIVIDUALLY) &&
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
                  return this.props.recipientId ? null : b.a.createElement(F.b.Consumer, null, this._renderScreen)
                },
              },
            ]),
            n
          )
        })(b.a.Component)
      v()(De, 'contextType', N.a)
      var Le = function (e, t) {
          return Array.isArray(e) || e.type !== se.b.DMConversation
            ? Array.isArray(e) || e.type !== se.b.User
              ? null
              : Object(E.a)(e.data.id_str, t)
            : e.data.conversationId
        },
        Fe = B.a.create(function (e) {
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
            popover: { padding: e.spaces.space24 },
            popoverButton: { paddingVertical: e.spaces.space12 },
            popoverElement: { marginVertical: e.spaces.space8 },
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
        }),
        Be = ae(De)
      t.default = Be
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
          return w
        })
      n('z84I'), n('2G9S')
      var r = n('ERkP'),
        a = n.n(r),
        i = (n('WNMA'), n('KqXw'), n('MMRb')),
        o = n('rxPX'),
        c = n('RqPI'),
        s = n('0KEI'),
        l = function (e, t) {
          return t.match.params.conversationId
        },
        u = function (e, t) {
          return i.selectConversationFetchStatus(e, l(0, t))
        },
        d = function (e, t) {
          var n
          return null === (n = i.selectConversation(e, t.match.params.conversationId)) || void 0 === n ? void 0 : n.data
        },
        p = Object(o.a)()
          .propsFromState(function () {
            return { conversationId: l, fetchStatus: u, perspective: c.q, conversation: d }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(s.createLocalApiErrorHandlerWithContextFactory)(
                'DIRECT_MESSAGES_PARTICIPANTS',
              ),
              fetchConversationIfNeeded: i.fetchConversationIfNeeded,
            }
          }),
        f = n('I2k/'),
        h = n('v//M'),
        m = n('3XMw'),
        v = n.n(m),
        y = n('M2mT'),
        b = n('Es6L'),
        g = n('rHpw'),
        _ = n('hqDb'),
        E = n('yw4N'),
        O = n('7JQg'),
        S = v.a.g2fd3205,
        C = v.a.d4986f85
      function w(e) {
        var t = e.conversation,
          n = e.conversationId,
          r = e.createLocalApiErrorHandler,
          i = e.fetchConversationIfNeeded,
          o = e.fetchStatus,
          c = a.a.useCallback(
            function () {
              i({ conversationId: n }).catch(r(Object(f.a)(n)))
            },
            [r, n, i],
          ),
          s = a.a.useCallback(
            function () {
              var e = ((null == t ? void 0 : t.participants) || []).map(function (e) {
                return e.user_id
              })
              return a.a.createElement(_.a, { userIds: e, withItemBorder: !0 })
            },
            [t],
          )
        return (
          a.a.useEffect(
            function () {
              c()
            },
            [c],
          ),
          a.a.createElement(
            y.a,
            {
              backLocation: '/messages/'.concat(n, '/info'),
              documentTitle: C,
              screenType: 'secondaryDetail',
              title: S,
            },
            a.a.createElement(
              E.a,
              { style: [R.root, !Object(b.a)() && R.bottomOffset] },
              a.a.createElement(h.a, { fetchStatus: o, onRequestRetry: c, render: s }),
            ),
          )
        )
      }
      var R = g.a.create(function (e) {
        return {
          root: { backgroundColor: e.colors.cellBackground },
          bottomOffset: {
            paddingBottom: 'calc('
              .concat(g.a.theme.componentDimensions.appBarHeight, ' + ')
              .concat(g.a.iPhoneOffsetBottom, ')'),
          },
        }
      })
      t.default = Object(O.c)({ page: 'messages', section: 'view_participants' })(p(w))
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
        a = n.n(r),
        i = n('aWyx'),
        o = n('XnpN'),
        c = n('3XMw'),
        s = n.n(c),
        l = n('rHpw'),
        u = n('TIdA'),
        d = n('A91F'),
        p = n('jhWN'),
        f = n('9Xij'),
        h = n('Znyr'),
        m = n('cm6r'),
        v = n('U+bB'),
        y = n('MWbm'),
        b = s.a.fd48249b,
        g = l.a.create(function (e) {
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
        _ = l.a.create(function (e) {
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
        E = l.a.create(function (e) {
          return {
            container: { flexDirection: 'column' },
            top: { flex: 1, marginBottom: e.borderWidths.small },
            bottom: { flex: 1 },
          }
        }),
        O = function (e) {
          var t = e.left,
            n = e.right
          return a.a.createElement(
            y.a,
            { style: _.container },
            a.a.createElement(y.a, { style: _.left }, t),
            a.a.createElement(y.a, { style: _.right }, n),
          )
        },
        S = function (e) {
          var t = e.bottom,
            n = e.top
          return a.a.createElement(
            y.a,
            { style: E.container },
            a.a.createElement(y.a, { style: E.top }, n),
            a.a.createElement(y.a, { style: E.bottom }, t),
          )
        }
      t.a = function (e) {
        var t = function (t) {
            var n = e.size,
              r = e.withVDLRefresh ? 'xxxLarge' : 'xxLarge'
            return a.a.createElement(
              y.a,
              { key: t.id_str, style: g.container },
              a.a.createElement(p.a, { size: n || r, uri: t.profile_image_url_https }),
            )
          },
          n = function (e) {
            var t = e.length,
              n = e.map(function (e, n) {
                var r = 2 === t || (3 === t && 0 === n) ? 0.5 : 1
                return a.a.createElement(
                  y.a,
                  { key: e.id_str, style: g.container },
                  a.a.createElement(p.a, {
                    aspectRatio: r,
                    shape: 'none',
                    size: 'custom',
                    uri: e.profile_image_url_https,
                  }),
                )
              })
            if (2 === t) return a.a.createElement(f.a, { ratio: 1 }, a.a.createElement(O, { left: n[1], right: n[0] }))
            var r = a.a.createElement(S, { bottom: n[2], top: n[1] }),
              i = n[0]
            return a.a.createElement(O, { left: r, right: i })
          },
          r = e.conversation,
          c = e.link,
          s = e.perspective,
          _ = e.withBadge,
          E = r && r.avatar_image_https,
          C = r
            ? Object(o.a)(r, s).map(function (e) {
                return e.user
              })
            : [],
          w = C.slice(0, 3),
          R =
            (function (e) {
              var t = e && e.avatar && e.avatar.image && e.avatar.image.original_info
              return t
                ? a.a.createElement(u.a, {
                    accessibilityLabel: '',
                    aspectMode: d.a.SQUARE,
                    backgroundColor: l.a.theme.colors.gray50,
                    image: t,
                    rounded: !0,
                  })
                : null
            })(r) ||
            (function (e) {
              return e ? a.a.createElement(v.a, { source: e }) : null
            })(E) ||
            (function (e) {
              var r = e.length
              return 0 === r ? null : 1 === r ? t(e[0]) : a.a.createElement(y.a, { style: g.circle }, n(e))
            })(w),
          I =
            c ||
            (function (e, t) {
              if (e)
                return e.type === i.a.GROUP
                  ? '/messages/'.concat(e.conversation_id, '/participants')
                  : e.type === i.a.ONE_TO_ONE
                  ? '/'.concat(t[0].screen_name)
                  : void 0
            })(r, C),
          k = _ && null != r && r.participants ? Object.keys(r.participants).length - 1 : 0
        return R
          ? a.a.createElement(
              a.a.Fragment,
              null,
              a.a.createElement(
                f.a,
                { ratio: 1 },
                I ? a.a.createElement(m.a, { interactiveStyles: null, link: I }, R) : R,
              ),
              k
                ? (function (e) {
                    var t = e.badgeCount
                    return a.a.createElement(
                      y.a,
                      { style: g.itemAccessory },
                      a.a.createElement(h.a, {
                        count: t,
                        standalone: !0,
                        style: g.userDecoration,
                        textColor: 'normal',
                        truncatedCountFormatter: function () {
                          return ''
                        },
                        unreadCountLabel: b,
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
          return ne
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
        b = n.n(y),
        g = n('v6aA'),
        _ = n('+Kfv'),
        E = (n('WNMA'), n('zh9S')),
        O = n('MMRb'),
        S = n('CDB5'),
        C = n('RqPI'),
        w = n('hqKg'),
        R = n('AQOc'),
        I = n('z2Pn'),
        k = n('pNZL'),
        P = n('G6rE'),
        x = n('oEGd'),
        T = n('X/yg'),
        A = function (e, t) {
          return t.match.params.conversationId
        },
        M = Object(w.createSelector)(
          function (e, t) {
            return O.selectConversation(e, A(0, t))
          },
          O.selectEntries,
          A,
          T.l,
          C.q,
          T.m,
          T.n,
          P.e.selectAll,
          function (e, t) {
            return S.j(e, A(0, t))
          },
          function (e, t) {
            return S.i(e, A(0, t))
          },
          function (e, t, n, r, a, i, o, c, s, l) {
            var u = e && e.data
            return {
              conversation: (u && Object(R.a)(u, t, c)) || void 0,
              conversationId: n,
              isNewGroupConversation: r,
              isUploading: s,
              media: l,
              newConversationParticipants: i,
              perspective: a,
            }
          },
        ),
        j = Object(x.d)(M, function (e) {
          return {
            cancelUpload: Object(T.a)(e.match.params.conversationId),
            googleAnalyticsPageView: E.a,
            removeMedia: Object(T.b)(e.match.params.conversationId),
            scribePageImpression: E.d,
            setLastViewedDmInboxPath: I.h,
            updateTweetDetailNav: k.b,
          }
        }),
        D = n('i4Oy'),
        L = n('Oi4X'),
        F = n('aA19'),
        B = n('XnpN'),
        N = n('3XMw'),
        H = n.n(N),
        U = (n('hBvt'), n('/yvb')),
        V = n('6s7X'),
        W = H.a.h810143c,
        z = function (e) {
          var t = e.accessibilityLabel,
            n = e.conversationId,
            r = e.link,
            a = e.style,
            i = b.a.createElement(V.a, null)
          return b.a.createElement(U.a, {
            accessibilityLabel: t || W,
            hoverLabel: { label: W },
            icon: i,
            key: n,
            link: r,
            pullRight: !0,
            style: a,
            type: 'primaryText',
          })
        },
        K = n('7myi'),
        G = n('M2mT'),
        q = n('rHpw'),
        Y = n('aITJ'),
        X = n('MWbm'),
        Q = n('7JQg'),
        Z = n('OhSZ')
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
      var $ = H.a.d4986f85,
        ee = H.a.e3e58b6d,
        te = H.a.a9ddbb94,
        ne = (function (e) {
          u()(n, e)
          var t = J(n)
          function n(e, r) {
            var i
            a()(this, n),
              (i = t.call(this, e, r)),
              v()(s()(i), '_composer', b.a.createRef()),
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
                    c = D.a.get('window').width >= q.a.theme.breakpoints.small
                  return b.a.createElement(
                    G.a,
                    this._getNavProps(),
                    b.a.createElement(
                      _.a,
                      { viewType: 'messages' },
                      b.a.createElement(L.a, {
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
                        ? Object(Z.a)({ conversation: t, perspective: r })
                        : n
                        ? Object(Z.a)({ newConversationParticipants: n, perspective: r })
                        : $,
                    i =
                      t && Object.keys(t.participants).length
                        ? b.a.createElement(Z.b, { conversation: t, perspective: r, withScreenName: !1 })
                        : n
                        ? b.a.createElement(Z.b, { newConversationParticipants: n, perspective: r, withScreenName: !1 })
                        : $,
                    o = this._isVDLEnabled ? 'large' : 'medium',
                    c = r ? b.a.createElement(F.a, { conversation: t, perspective: r, size: o }) : void 0,
                    s =
                      t &&
                      t.type === O.CONVERSATION_TYPE.ONE_TO_ONE &&
                      r &&
                      Object(B.a)(t, r).map(function (e) {
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
                    headerless: Y.b.isKaiOS(),
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
                    i = (null == n ? void 0 : n.type) === O.CONVERSATION_TYPE.GROUP,
                    o = (null == a || null === (e = a.state) || void 0 === e ? void 0 : e.position) || 0
                  return r
                    ? b.a.createElement(
                        X.a,
                        { style: re.rightControlStyles },
                        b.a.createElement(z, {
                          accessibilityLabel: i ? te : ee,
                          conversationId: r,
                          link: { pathname: '/messages/'.concat(r, '/info'), state: { position: o } },
                          style: re.infoButton,
                        }),
                      )
                    : void 0
                },
              },
            ]),
            n
          )
        })(b.a.PureComponent)
      v()(ne, 'contextType', g.a), v()(ne, 'defaultProps', { isNewGroupConversation: !1, typeaheadWrapper: K.a })
      var re = q.a.create(function (e) {
        return { infoButton: { marginRight: e.spaces.space4 }, rightControlStyles: { flexDirection: 'row' } }
      })
      t.default = Object(Q.c)({ page: 'messages', section: 'thread' })(j(ne))
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
        return S
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
          (n('2G9S'),
          n('+KXO'),
          n('JtPf'),
          n('7x/C'),
          n('87if'),
          n('lTEL'),
          n('kYxP'),
          n('z84I'),
          n('KOtZ'),
          n('ERkP')),
        _ = n.n(g)
      function E(e) {
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
      var O = (function (e) {
          p()(n, e)
          var t = E(n)
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
                  return _.a.Children.only(this.props.children(e || {}))
                },
              },
            ]),
            n
          )
        })(_.a.Component),
        S = function (e, t) {
          return function (n) {
            return _.a.createElement(O, { modules: t }, function (t) {
              return _.a.createElement(e, a()({}, t, n))
            })
          }
        }
    },
    fzwJ: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'DMAddParticipantsScreen', function () {
          return Z
        }),
        n.d(t, 'getItemIsDisabled', function () {
          return J
        })
      var r = n('KEM+'),
        a = n.n(r),
        i = n('RhWx'),
        o = n.n(i),
        c = n('ddV6'),
        s = n.n(c),
        l = (n('hBpG'), n('2G9S'), n('LW0h'), n('z84I'), n('M+/F'), n('i4UL'), n('ERkP')),
        u = n.n(l),
        d = n('k49u'),
        p = n('VAZu'),
        f = (n('WNMA'), n('KqXw'), n('+KXO'), n('MMRb')),
        h = n('1YZw'),
        m = n('lnti'),
        v = n('hqKg'),
        y = n('RqPI'),
        b = n('G6rE'),
        g = n('rxPX'),
        _ = n('0KEI'),
        E = function (e, t) {
          return t.match.params.conversationId
        },
        O = function (e, t) {
          var n = f.selectConversation(e, E(0, t)),
            r = null == n ? void 0 : n.data
          return null == r ? void 0 : r.participants
        },
        S = function (e, t) {
          return f.selectConversationFetchStatus(e, E(0, t))
        },
        C = Object(v.createSelector)(f.selectConversations, function (e) {
          return Object(m.a)(
            Object.keys(e).map(function (t) {
              var n = e[t]
              if (!n.isDeleted) return n.data
            }),
          )
        }),
        w = Object(g.a)()
          .propsFromState(function () {
            return {
              conversationId: E,
              conversations: C,
              existingParticipants: O,
              fetchStatus: S,
              perspective: y.q,
              users: b.e.selectAll,
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
              addParticipants: f.addParticipants,
              addToast: h.b,
              createLocalApiErrorHandler: Object(_.createLocalApiErrorHandlerWithContextFactory)(
                'DIRECT_MESSAGES_ADD_PARTICIPANTS',
              ),
              fetchConversationIfNeeded: f.fetchConversationIfNeeded,
            }
          })
          .withAnalytics({ page: 'messages', section: 'add_participants' }),
        R = n('I2k/'),
        I = n('s14A'),
        k = n('kGix'),
        P = n('jHSc'),
        x = n('wO1l'),
        T = n('AQOc'),
        A = n('3XMw'),
        M = n.n(A),
        j = n('oQhu'),
        D = 'addPeopleButtonText',
        L = n('2dXj'),
        F = n('MWbm'),
        B = n('/yvb'),
        N = n('rHpw'),
        H = n('GZwR'),
        U = M.a.c6026009,
        V = M.a.d4986f85,
        W = M.a.af40a8ef,
        z = M.a.e1bde73e,
        K = M.a.e62d3c10,
        G = M.a.f17f716a,
        q = M.a.e3fc3547,
        Y = M.a.c55f5c9a,
        X = M.a.h8403fb5,
        Q = M.a.ja522ed3
      function Z(e) {
        var t = u.a.useRef(null),
          n = u.a.useState([]),
          r = s()(n, 2),
          i = r[0],
          c = r[1],
          l = u.a.useState(''),
          f = s()(l, 2),
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
          w = e.perspective,
          A = e.users
        u.a.useEffect(
          function () {
            b({ conversationId: y }).catch(v(Object(R.a)(y)))
          },
          [b, y, v],
        )
        var M = function () {
            return u.a.createElement(
              F.a,
              { style: $.rightColumn },
              u.a.createElement(
                B.a,
                {
                  disabled: 0 === i.length || E !== k.a.LOADED,
                  onPress: Z,
                  size: 'small',
                  testID: D,
                  type: 'primaryFilled',
                },
                W,
              ),
            )
          },
          N = function (e) {
            c(
              i.filter(function (t) {
                return t.id !== e.id
              }),
            )
          },
          Z = function () {
            var e,
              n = i.map(function (e) {
                return e.id
              })
            _(y, n).then(function (e) {
              t.current && t.current.goBack()
            }, v(
              ((e = { defaultToast: { text: Q } }),
              a()(e, d.a.DirectMessageCannotDmOtherUser, { toast: { text: Y } }),
              a()(e, d.a.DirectMessageGenericUserCouldNotBeAdded, { toast: { text: X } }),
              a()(e, d.a.DirectMessageOtherUserNotFollowing, { toast: { text: G } }),
              a()(e, d.a.TargetUserNotFound, { toast: { text: K } }),
              a()(e, d.a.TieredActionTweetSpammer, { toast: { text: q } }),
              a()(e, 'showToast', !0),
              e),
            ))
          },
          ee = Object(j.a)(function (e, t, n, r) {
            return Object(x.b)(
              n,
              e.map(function (e) {
                return Object(T.b)(e, void 0, r)
              }),
              t,
            ).slice(0, 12)
          }),
          te = C.map(function (e) {
            return e.user_id
          })
        return u.a.createElement(
          P.b,
          {
            containerStyle: $.fill,
            documentTitle: V,
            renderHeader: function () {
              return u.a.createElement(p.a, {
                backButtonType: 'close',
                backLocation: '/messages/'.concat(y),
                history: g,
                ref: t,
                rightControl: M(),
                title: U,
                withBottomBorder: !1,
              })
            },
          },
          u.a.createElement(
            I.a,
            { style: $.fill },
            u.a.createElement(L.d, {
              getItemDisabledMessage: function (e) {
                return e.type === H.b.User ? z({ screenName: e.data.screen_name }) : void 0
              },
              getItemIsDisabled: J,
              injections: ee(O, w, h, A),
              onQueryChange: function (e) {
                m(e)
              },
              onRemove: N,
              onSelect: function (e) {
                e.type === H.b.User &&
                  (i.find(function (t) {
                    return t.id === e.id
                  })
                    ? N(e)
                    : c([].concat(o()(i), [e])))
              },
              preselectedUsers: te,
              selectedUsers: i,
              source: H.d.ComposeMessage,
              withCompactPills: !0,
            }),
          ),
        )
      }
      var J = function (e) {
          return e.type === H.b.User && !(e.data.can_dm || e.data.is_dm_able)
        },
        $ = N.a.create(function (e) {
          return {
            fill: { flex: 1 },
            rightColumn: { flexDirection: 'row', flexGrow: 1, justifyContent: 'flex-end', alignItems: 'center' },
          }
        })
      t.default = w(Z)
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
        O = n.n(E),
        S = n('k49u'),
        C = (n('LW0h'), n('KOtZ'), n('vrRf'), n('6xIQ')),
        w = n('kGix'),
        R = n('G6rE'),
        I = n('rxPX'),
        k = n('0KEI'),
        P = function (e, t) {
          return t.userIds
        },
        x = function (e, t) {
          return t.userIds.filter(function (t) {
            return !!R.e.select(e, t)
          })
        },
        T = function (e, t) {
          return t.userIds.reduce(function (t, n) {
            var r = R.e.selectFetchStatus(e, n)
            return (t[n] = r === w.a.NONE ? w.a.LOADING : r), t
          }, {})
        },
        A = Object(I.a)()
          .propsFromState(function () {
            return {
              availableUserIds: Object(C.a)(x, function (e) {
                return e
              }),
              fetchStatus: Object(C.a)(x, T, P, function (e, t, n) {
                for (var r = w.a.LOADED, a = 0; a < n.length; a++) {
                  var i = n[a]
                  if (-1 === e.indexOf(i)) {
                    var o = t[i] || w.a.LOADING
                    r = r === w.a.LOADED ? o : r
                  }
                  if (r === w.a.LOADED) break
                }
                return r
              }),
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(k.createLocalApiErrorHandlerWithContextFactory)(
                'USERS_LIST_CONTAINER',
              ),
              fetchUsersIfNeeded: R.e.fetchManyIfNeeded,
            }
          }),
        M = n('v//M'),
        j = n('3XMw'),
        D = n.n(j),
        L = n('pQ3Z'),
        F = n.n(L),
        B = (n('z84I'), n('cFuS')),
        N = n('Re5t'),
        H = n('MWbm'),
        U = n('88ay'),
        V = function (e) {
          var t = e.displayMode,
            n = e.renderUserCell,
            r = e.userIds
          e.withFinalItemBorder, e.withItemBorder
          return O.a.createElement(
            H.a,
            null,
            r.map(function (e, r) {
              return n
                ? n(e)
                : O.a.createElement(U.b, {
                    decoration: U.e,
                    displayMode: t,
                    key: e,
                    promotedItemType: B.c.USER,
                    userId: e,
                    withFollowsYou: !0,
                  })
            }),
          )
        }
      V.defaultProps = { displayMode: N.a.UserDetailed, withFinalItemBorder: !0, withItemBorder: !1 }
      var W = V
      function z(e) {
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
      var K = D.a.f5b426c2,
        G = { viewType: 'user_list' },
        q = A(
          (function (e) {
            h()(n, e)
            var t = z(n)
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
                  return O.a.createElement(W, a()({}, r, { userIds: n }))
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
                    F()(e.userIds, this.props.userIds) || this._fetchUsersIfNeeded()
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    return O.a.createElement(M.a, {
                      accessibilityLabel: K,
                      behavioralEventContext: G,
                      fetchStatus: this.state.allUsersUnavailable ? w.a.LOADED : this.props.fetchStatus,
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
                        _()(e, S.a.AddressBookLookupNotFound, {
                          customAction: function () {
                            0 === r.length && t.setState({ allUsersUnavailable: !0 })
                          },
                        }),
                        _()(e, S.a.OtherUserSuspended, {
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
          })(O.a.Component),
        )
      t.a = q
    },
    hxu0: function (e, t, n) {
      'use strict'
      var r = n('97Jx'),
        a = n.n(r),
        i = n('ERkP'),
        o = n.n(i),
        c = n('vqbU')
      t.a = function (e) {
        return function (t) {
          return o.a.createElement(c.a.Consumer, null, function (n) {
            return o.a.createElement(e, a()({}, t, { isInSidebar: n }))
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
        o = n.n(i),
        c = n('TIdA'),
        s = n('t62R'),
        l = n('A91F'),
        u = n('/yvb'),
        d = n('Eqye'),
        p = n('efqG'),
        f = n('sgih'),
        h = n('rHpw'),
        m = n('MWbm'),
        v = n('3dyc'),
        y = h.a.create(function (e) {
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
          i = e.headline,
          b = e.icon,
          g = e.iconColor,
          _ = e.imageUrl,
          E = e.onDismiss,
          O = e.shouldDisplay,
          S = e.text,
          C = e.withMask,
          w = void 0 === C || C,
          R = o.a.useState(!1),
          I = a()(R, 2),
          k = I[0],
          P = I[1],
          x = function (e) {
            return o.a.createElement(
              p.a,
              {
                onDismiss: F,
                renderContent: function () {
                  return A(F)
                },
                switchOnlyOnXSmallBreakpoint: !0,
                visibilityBehavior: v.b.forceVisible,
                withArrow: !0,
                withFixedPosition: !0,
                withMask: w,
              },
              e,
            )
          },
          T = function () {
            return o.a.createElement(
              f.a,
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
            return o.a.createElement(
              m.a,
              { style: [y.root, _ && y.rootWithImage] },
              M(),
              o.a.createElement(
                m.a,
                { style: y.container },
                j(),
                D(),
                L({ action: t, dismiss: e, type: n && 'primaryFilled' }),
                L({ action: n, dismiss: e }),
              ),
            )
          },
          M = function () {
            var e = b && o.a.createElement(b, { style: g ? [y.icon, { color: h.a.theme.colors[g] }] : y.icon })
            return (
              _ &&
                !d.a.isEnabled &&
                (e = o.a.createElement(c.a, { accessibilityLabel: '', aspectMode: l.a.exact(2), image: _ })),
              e && o.a.createElement(m.a, { style: y.graphic }, e)
            )
          },
          j = function () {
            return o.a.createElement(s.b, { size: 'title3', weight: 'heavy' }, i)
          },
          D = function () {
            return o.a.createElement(s.b, { color: 'gray700', style: y.description }, S)
          },
          L = function (e) {
            var t = e.action,
              n = e.dismiss,
              r = e.type
            return (
              t &&
              o.a.createElement(
                u.a,
                {
                  link: t.link && t.link,
                  onPress: t.onClick ? t.onClick : n,
                  size: 'large',
                  style: y.actionButton,
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
        o = n.n(i),
        c = n('Y6L+'),
        s = n('Ty5D'),
        l = n('MMRb'),
        u = n('rxPX'),
        d = function (e, t) {
          var n = Object(s.f)(t.location.pathname, { path: '/messages/'.concat(c.j, '(/.*)?'), exact: !0, strict: !1 })
          return null == n ? void 0 : n.params.conversationId
        },
        p = function (e, t) {
          var n = d(0, t)
          return Object(l.selectInboxTypeByConversation)(e, n)
        },
        f = Object(u.a)().propsFromState(function () {
          return { conversationId: d, inboxType: p }
        }),
        h = (n('OZaJ'), n('VrFO')),
        m = n.n(h),
        v = n('Y9Ll'),
        y = n.n(v),
        b = n('1Pcy'),
        g = n.n(b),
        _ = n('5Yy7'),
        E = n.n(_),
        O = n('N+ot'),
        S = n.n(O),
        C = n('AuHH'),
        w = n.n(C),
        R = n('KEM+'),
        I = n.n(R),
        k = (n('2G9S'), n('uFXj'), n('JtPf'), n('7x/C'), n('P1r1')),
        P = n('qdEw'),
        x = n('6xIQ'),
        T = n('X/yg'),
        A = n('AQ79'),
        M = n('z2Pn'),
        j = n('0KEI'),
        D = function (e) {
          return e === A.d.PRIMARY
            ? l.fetchTrustedInboxHistory
            : e === A.d.SECONDARY
            ? l.fetchUntrustedInboxHistory
            : l.fetchUntrustedLowQualityInboxHistory
        },
        L = function (e) {
          return e === A.d.PRIMARY
            ? l.updateTrustedLastSeenEventId
            : e === A.d.SECONDARY
            ? l.updateUntrustedLastSeenEventId
            : function () {
                return function () {
                  return Promise.resolve()
                }
              }
        },
        F = function (e) {
          var t = e.inbox
          return Object(u.a)()
            .propsFromState(function () {
              return {
                conversationIds: Object(x.a)(
                  function (e) {
                    return l.selectConversationIdsByInbox(e, t)
                  },
                  function (e) {
                    return e
                  },
                ),
                dmNsfwMediaFilter: k.m,
                isLoadingTop: l.selectIsLoadingTop,
                isDmNsfwMediaFilterEnabled: k.r,
                isDmsOpenForAll: k.t,
                hasConversations: l.selectHasConversations,
                untrustedUnreadCount: l.selectUntrustedUnreadCount,
                untrustedCursor: l.selectUntrustedCursor,
                untrustedConversationCount: l.selectUntrustedConversationCount,
                untrustedLowQualityConversationCount: l.selectUntrustedLowQualityConversationCount,
                untrustedLowQualityCursor: l.selectUntrustedLowQualityCursor,
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
                createLocalApiErrorHandler: Object(j.createLocalApiErrorHandlerWithContextFactory)(
                  'DIRECT_MESSAGES_INBOX',
                ),
                clearSearchCache: l.clearSearchCache,
                clearSearchSlicesCache: P.b,
                fetchInboxHistory: D(t),
                setLastViewedDmInboxPath: M.h,
                updateLastSeenEventId: L(t),
                updateDmNsfwMediaFilter: k.K,
              }
            })
            .withAnalytics({ page: 'messages', section: 'inbox', component: Object(T.g)(t) })
        },
        B = n('/yvb'),
        N = n('3XMw'),
        H = n.n(N),
        U = n('Avzu'),
        V = H.a.f325afc3,
        W = H.a.cdcebd22,
        z = function (e) {
          var t = e.testID
          return o.a.createElement(B.a, {
            accessibilityLabel: V,
            hoverLabel: { label: W },
            icon: o.a.createElement(U.a, null),
            link: '/messages/compose',
            pullRight: !0,
            testID: t,
            type: 'primaryText',
          })
        },
        K = n('qz2E'),
        G = n('pXKu'),
        q = n('SOvA'),
        Y = n('f42t'),
        X = n('pHkl'),
        Q = n('M2mT'),
        Z = n('Es6L'),
        J = 'NewDM_Button',
        $ = n('MWbm'),
        ee = n('pxuL'),
        te = n('csss'),
        ne = n('j7Bv'),
        re = n('Znyr'),
        ae = n('FIs5'),
        ie = n('rHpw'),
        oe = n('nySH')
      function ce(e) {
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
            r = w()(e)
          if (t) {
            var a = w()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return S()(this, n)
        }
      }
      var se = H.a.a2f8105f,
        le = H.a.cf2d1047,
        ue = H.a.b8aa3744,
        de = H.a.j06309e1,
        pe = H.a.gee5150a,
        fe = H.a.da2f9224,
        he = H.a.a74e7c76,
        me = H.a.h6beb5fa,
        ve = (function (e) {
          E()(n, e)
          var t = ce(n)
          function n() {
            var e
            m()(this, n)
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              I()(g()(e), '_renderPivot', function () {
                var t = e.props,
                  n = t.allowUntrustedInbox,
                  r = t.untrustedUnreadCount,
                  a =
                    e.context.featureSwitches.isTrue('dm_vdl_enabled') &&
                    e.context.featureSwitches.isTrue('dm_vdl_inbox_p0_enabled'),
                  i = [ye.requestPivotContainer, a ? void 0 : ye.requestPivotContainerBorder],
                  c = a && r > 0
                return n
                  ? o.a.createElement(
                      $.a,
                      { style: i },
                      o.a.createElement(te.a, {
                        description: c ? he({ count: r }) : void 0,
                        label: le,
                        link: Object(oe.a)(A.d.SECONDARY),
                        onPress: e._handleRequestsPivotClick,
                        renderRightContent: a ? void 0 : e._renderPivotBadge,
                        thumbnail: a
                          ? o.a.createElement(
                              $.a,
                              null,
                              o.a.createElement(ne.a, { Icon: q.a, color: 'neutral' }),
                              c
                                ? o.a.createElement(re.a, {
                                    count: r,
                                    pip: !0,
                                    standalone: !0,
                                    style: ye.inboxPip,
                                    truncatedCountFormatter: me,
                                    unreadCountLabel: fe,
                                  })
                                : null,
                            )
                          : null,
                      }),
                    )
                  : null
              }),
              I()(g()(e), '_renderPivotBadge', function () {
                var t = e.props.untrustedUnreadCount
                return t > 0
                  ? o.a.createElement(re.a, {
                      count: t,
                      standalone: !0,
                      truncatedCountFormatter: me,
                      unreadCountLabel: fe,
                    })
                  : null
              }),
              I()(g()(e), '_renderEmptyDMInbox', function () {
                return o.a.createElement(
                  o.a.Fragment,
                  null,
                  e._renderPivot(),
                  o.a.createElement(ae.a, {
                    buttonLink: '/messages/compose',
                    buttonText: pe,
                    header: ue,
                    message: de,
                    onImpression: e._handleEmptyDMInboxImpression,
                  }),
                )
              }),
              I()(g()(e), '_handleEmptyDMInboxImpression', function () {
                e.props.analytics.scribe({ component: 'empty_message', action: 'impression' })
              }),
              I()(g()(e), '_handleRequestsPivotClick', function () {
                e.props.analytics.scribe({ element: 'requests_pivot', action: 'click' })
              }),
              e
            )
          }
          return (
            y()(n, [
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
                    this.props.clearSearchSlicesCache(X.e),
                    this.props.clearSearchCache(),
                    this.context.decrementDmDrawerInhibitorCount()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = Object(Z.a)()
                      ? o.a.createElement(
                          $.a,
                          { style: ye.appBarButtons },
                          Object(oe.b)('/messages/settings', !1),
                          o.a.createElement(z, { testID: J }),
                        )
                      : Object(oe.b)('/messages/settings', !0),
                    t = this.props,
                    n = t.analytics,
                    r = t.conversationIds,
                    a = t.fetchInboxHistory,
                    i = t.updateLastSeenEventId
                  return o.a.createElement(
                    Q.a,
                    { rightControl: e, screenType: 'root', title: se },
                    o.a.createElement(G.a, {
                      accessibilityTitle: se,
                      analytics: n,
                      conversationIds: r,
                      fetchInboxHistory: a,
                      renderEmptyDMInbox: this._renderEmptyDMInbox,
                      renderStickyContent: this._renderPivot,
                      updateLastSeenEventId: i,
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
        })(o.a.Component)
      I()(ve, 'contextType', ee.a), I()(ve, 'defaultProps', { conversationIds: [], untrustedUnreadCount: 0 })
      var ye = ie.a.create(function (e) {
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
        be = Object(Y.a)(F({ inbox: A.d.PRIMARY })(ve), { directMessages: K.a }),
        ge = (n('WNMA'), n('KqXw'), n('v6aA')),
        _e = n('jYSG'),
        Ee = n('5FtR'),
        Oe = n('Lz2T'),
        Se = n('0yYu'),
        Ce = n('t62R'),
        we = n('cm6r')
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
            r = w()(e)
          if (t) {
            var a = w()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return S()(this, n)
        }
      }
      var Ie = H.a.cf2d1047,
        ke = H.a.bef0039f,
        Pe = H.a.eb7de4a9,
        xe = H.a.a0e81a2e,
        Te = H.a.f5dc353c,
        Ae = H.a.fe1eaa95,
        Me = H.a.j24c37b2,
        je = H.a.daeda053,
        De = (function (e) {
          E()(n, e)
          var t = Re(n)
          function n() {
            var e
            m()(this, n)
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              I()(g()(e), '_nsfwBannerWasShown', !1),
              I()(g()(e), 'componentDidMount', function () {
                var t = e.props.analytics
                e._shouldRenderTombstone() && t.scribe({ element: 'low_quality_pivot', action: 'impression' }),
                  e.context.incrementDmDrawerInhibitorCount()
              }),
              I()(g()(e), 'componentDidUpdate', function (t) {
                var n = e.props.analytics
                !e._shouldRenderTombstone() ||
                  (t.allowLowQualityUntrustedInbox && t.isAtEndOfUntrustedInbox) ||
                  n.scribe({ element: 'low_quality_pivot', action: 'impression' })
              }),
              I()(g()(e), 'componentWillUnmount', function () {
                e.context.decrementDmDrawerInhibitorCount(), e._nsfwBannerWasShown && e._hideNsfwTimelineMessage()
              }),
              I()(g()(e), '_renderNsfwSettingBanner', function (t) {
                var n = t.featureSwitches,
                  r = e.props.dmNsfwMediaFilter
                return n.isTrue('dm_conversations_nsfw_media_filter_enabled') && void 0 === r
                  ? ((e._nsfwBannerWasShown = !0),
                    o.a.createElement(
                      o.a.Fragment,
                      null,
                      o.a.createElement(Oe.a, {
                        bodyText: Ae,
                        primaryAction: { onClick: e._handleNsfwTimelineMessagePrimaryClick, text: Me },
                        secondaryAction: {
                          link: '/settings/direct_messages',
                          onClick: e._handleNsfwTimelineMessageSecondaryClick,
                          text: je,
                        },
                        titleText: Te,
                      }),
                      o.a.createElement(Se.a, null),
                    ))
                  : null
              }),
              I()(g()(e), '_shouldRenderTombstone', function () {
                var t = e.props,
                  n = t.allowLowQualityUntrustedInbox,
                  r = t.isAtEndOfUntrustedInbox
                return n && r
              }),
              I()(g()(e), '_renderTombstone', function () {
                var t = e.props.conversationIds
                return e._shouldRenderTombstone()
                  ? o.a.createElement(
                      $.a,
                      null,
                      t.length > 0 && o.a.createElement(Se.a, null),
                      o.a.createElement(
                        $.a,
                        { style: Le.tombstoneDescription },
                        o.a.createElement(Ce.b, { color: 'gray700', size: 'subtext2' }, Pe),
                      ),
                      o.a.createElement(
                        we.a,
                        {
                          link: Object(oe.a)(A.d.TERTIARY),
                          onPress: e._handleTombstoneClick,
                          style: Le.tombstoneContainer,
                        },
                        o.a.createElement(Ce.b, { align: 'center', color: 'primary', size: 'body' }, xe),
                      ),
                    )
                  : null
              }),
              I()(g()(e), '_renderEmptyDMInbox', function () {
                var t = e._renderTombstone()
                return o.a.createElement(
                  o.a.Fragment,
                  null,
                  o.a.createElement(ae.a, { header: t ? '' : ke, message: _e.a, style: Le.emptyMessage }),
                  t,
                )
              }),
              I()(g()(e), '_handleNsfwTimelineMessagePrimaryClick', function () {
                e.props.analytics.scribe({ component: 'dm_nsfw_prompt', element: 'primary_action', action: 'click' }),
                  e._hideNsfwTimelineMessage()
              }),
              I()(g()(e), '_handleNsfwTimelineMessageSecondaryClick', function () {
                e.props.analytics.scribe({ component: 'dm_nsfw_prompt', element: 'secondary_action', action: 'click' })
              }),
              I()(g()(e), '_hideNsfwTimelineMessage', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.updateDmNsfwMediaFilter)(!0).catch(n())
              }),
              I()(g()(e), '_handleBackClick', function () {
                e.props.history.push(Object(oe.a)(A.d.PRIMARY))
              }),
              I()(g()(e), '_handleTombstoneClick', function () {
                e.props.analytics.scribe({ element: 'low_quality_pivot', action: 'click' })
              }),
              I()(g()(e), '_hasConversationOpen', function () {
                return !e.props.match.isExact
              }),
              e
            )
          }
          return (
            y()(n, [
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
                    ? o.a.createElement(
                        Q.a,
                        {
                          backLocation: '/messages',
                          onBackClick: this._handleBackClick,
                          rightControl: Object(oe.b)('/settings/direct_messages', !0),
                          screenType: 'secondaryRoot',
                          title: Ie,
                          withDetailOpen: this._hasConversationOpen(),
                        },
                        o.a.createElement(ge.a.Consumer, null, this._renderNsfwSettingBanner),
                        o.a.createElement(G.a, {
                          accessibilityTitle: Ie,
                          analytics: r,
                          conversationIds: a,
                          fetchInboxHistory: i,
                          footer: this._renderTombstone(),
                          inboxType: A.d.SECONDARY,
                          renderEmptyDMInbox: this._renderEmptyDMInbox,
                          renderStickyContent: function () {
                            return Object(oe.c)(e.props.conversationIds)
                          },
                          updateLastSeenEventId: c,
                          virtualScrollerCacheKey: 'dmUntrustedInbox',
                        }),
                      )
                    : o.a.createElement(Ee.a, { to: '/messages' })
                },
              },
            ]),
            n
          )
        })(o.a.Component)
      I()(De, 'contextType', ee.a), I()(De, 'defaultProps', { conversationIds: [] })
      var Le = ie.a.create(function (e) {
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
        Fe = Object(Y.a)(F({ inbox: A.d.SECONDARY })(De), { directMessages: K.a })
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
            r = w()(e)
          if (t) {
            var a = w()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return S()(this, n)
        }
      }
      var Ne = H.a.e7172d70,
        He = H.a.bef0039f,
        Ue = (function (e) {
          E()(n, e)
          var t = Be(n)
          function n() {
            var e
            m()(this, n)
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              I()(g()(e), 'componentDidMount', function () {
                e.context.incrementDmDrawerInhibitorCount()
              }),
              I()(g()(e), 'componentWillUnmount', function () {
                e.context.decrementDmDrawerInhibitorCount()
              }),
              I()(g()(e), '_renderEmptyDMInbox', function () {
                return o.a.createElement(ae.a, { header: He, message: _e.a })
              }),
              I()(g()(e), '_handleBackClick', function () {
                e.props.history.push(Object(oe.a)(A.d.SECONDARY))
              }),
              I()(g()(e), '_hasDetailOpen', function () {
                return !e.props.match.isExact
              }),
              e
            )
          }
          return (
            y()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.analytics,
                    r = t.conversationIds,
                    a = t.fetchInboxHistory,
                    i = t.updateLastSeenEventId
                  return o.a.createElement(
                    Q.a,
                    {
                      backLocation: Object(oe.a)(A.d.SECONDARY),
                      onBackClick: this._handleBackClick,
                      rightControl: Object(oe.b)('/settings/direct_messages', !0),
                      screenType: 'secondaryRoot',
                      title: Ne,
                      withDetailOpen: this._hasDetailOpen(),
                    },
                    o.a.createElement(G.a, {
                      accessibilityTitle: Ne,
                      analytics: n,
                      conversationIds: r,
                      fetchInboxHistory: a,
                      inboxType: A.d.TERTIARY,
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
        })(o.a.Component)
      I()(Ue, 'contextType', ee.a)
      var Ve = Object(Y.a)(F({ inbox: A.d.TERTIARY })(Ue), { directMessages: K.a }),
        We = f(function (e) {
          e.conversationId
          var t = e.inboxType,
            n = a()(e, ['conversationId', 'inboxType']),
            r = e.location
          return t === A.d.TERTIARY || '/messages/requests/additional' === r.pathname
            ? o.a.createElement(Ve, n)
            : t === A.d.SECONDARY || '/messages/requests' === r.pathname
            ? o.a.createElement(Fe, n)
            : o.a.createElement(be, n)
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
        return h
      }),
        n.d(t, 'b', function () {
          return m
        }),
        n.d(t, 'c', function () {
          return v
        })
      n('uFXj')
      var r = n('ERkP'),
        a = n.n(r),
        i = n('HPNB'),
        o = n('v6aA'),
        c = n('jYSG'),
        s = n('AQ79'),
        l = n('+Bsv'),
        u = n('MWbm'),
        d = n('cHvH'),
        p = n('t62R'),
        f = n('rHpw'),
        h = function (e) {
          switch (e) {
            case s.d.SECONDARY:
              return '/messages/requests'
            case s.d.TERTIARY:
              return '/messages/requests/additional'
            case s.d.PRIMARY:
            default:
              return '/messages'
          }
        },
        m = function (e, t) {
          return a.a.createElement(o.a.Consumer, null, function (n) {
            var r = n.featureSwitches.isTrue('responsive_web_settings_revamp_enabled') ? e : '/settings/safety'
            return a.a.createElement(l.a, { pullRight: t, to: r })
          })
        },
        v = function (e) {
          return a.a.createElement(d.a, null, function (t) {
            var n = t.windowWidth,
              r = i.a.isTwoColumnLayout(n),
              o = 0 === e.length
            return r || o
              ? null
              : a.a.createElement(
                  u.a,
                  { style: y.stickyCopyContainer },
                  a.a.createElement(p.b, { style: y.stickyCopy }, c.a),
                )
          })
        },
        y = f.a.create(function (e) {
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
        b = n.n(y),
        g = n('BUB3'),
        _ = n('v6aA'),
        E = n('xZGM'),
        O = n('rxPX'),
        S = Object(O.a)()
          .propsFromState(function () {
            return {
              shouldShowPrompt: function (e, t) {
                return Object(E.z)(e, E.j)
              },
            }
          })
          .propsFromActions(function () {
            return { addFlag: E.w }
          })
          .withAnalytics({ component: 'dm_education_flags_prompt' }),
        C = n('fs1G'),
        w = n('t62R'),
        R = n('feu+'),
        I = n('3XMw'),
        k = n.n(I),
        P = k.a.fd6150fc,
        x = b.a.createElement(
          k.a.I18NFormatMessage,
          { $i18n: 'iac7f92a' },
          b.a.createElement(w.b, { link: '/privacy' }, k.a.d42d239f),
        ),
        T = k.a.j24c37b2,
        A = S(function (e) {
          var t = e.addFlag,
            n = e.analytics,
            r = e.shouldShowPrompt,
            a = b.a.useContext(_.a).featureSwitches
          if (!(r && a.isTrue('dm_education_flags_prompt'))) return !1
          return (
            n.scribeAction('impression'),
            b.a.createElement(R.a, {
              actionLabel: T,
              headline: P,
              onAction: function () {
                n.scribeAction('click'), t(E.j)
              },
              onClose: C.a,
              subtext: x,
              withCloseButton: !1,
            })
          )
        }),
        M = n('MMRb'),
        j = n('kGix'),
        D = n('0KEI'),
        L = Object(O.a)()
          .propsFromState(function () {
            return {
              hasConversations: M.selectHasConversations,
              fetchStatus: M.selectFetchStatus,
              isLoadingTop: M.selectIsLoadingTop,
            }
          })
          .adjustStateProps(function (e) {
            var t = e.fetchStatus,
              n = e.hasConversations,
              r = e.isLoadingTop
            return { fetchStatus: n ? j.a.LOADED : t, isRefreshing: n && r }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(D.createLocalApiErrorHandlerWithContextFactory)(
                'DIRECT_MESSAGES_INBOX',
              ),
              fetchInbox: M.fetchInbox,
              fetchInboxIfNeeded: M.fetchInboxIfNeeded,
              fetchUpdates: M.fetchUpdatesIfNeeded,
            }
          }),
        F = (n('1t7P'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('ddV6')),
        B = n.n(F),
        N =
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
        H = n('EbOo'),
        U = n('tZH3'),
        V = n('1YZw'),
        W = n('hqKg'),
        z = n('AQOc'),
        K = n('G6rE'),
        G = n('oEGd'),
        q = function (e, t) {
          return t.conversationId
        },
        Y = Object(W.createSelector)(
          q,
          function (e, t) {
            return M.selectConversation(e, q(0, t))
          },
          M.selectEntries,
          K.e.selectAll,
          function (e, t) {
            return !M.selectConversationIsRead(e, q(0, t))
          },
          function (e, t) {
            var n = q(0, t)
            return Object(M.selectInboxTypeByConversation)(e, n)
          },
          function (e, t) {
            return Object(E.z)(e, E.r)
          },
          function (e, t, n, r, a, i, o) {
            return {
              conversation: (null == t ? void 0 : t.data) && Object(z.a)(t.data, n, r),
              conversationId: e,
              unread: a,
              inboxType: i,
              shouldShowPinnedEducation: o,
            }
          },
        ),
        X = {
          addFlag: E.w,
          addRecentSearch: M.addRecentSearches,
          addToast: V.b,
          block: K.e.block,
          createLocalApiErrorHandler: Object(D.createLocalApiErrorHandlerWithContextFactory)(
            'DIRECT_MESSAGES_INBOX_ITEM',
          ),
          disableNotifications: M.disableNotifications,
          enableNotifications: M.enableNotifications,
          leaveConversation: M.leaveConversation,
          muteDMUser: M.muteDMUser,
          unmuteDMUser: M.unmuteDMUser,
          unblock: K.e.unblock,
        },
        Q = Object(G.g)(Y, X),
        Z = n('aA19'),
        J = n('OhSZ'),
        $ = n('V/6K'),
        ee = n('g54k')
      function te(e, t) {
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
      var ne = function (e, t) {
          return t.entry
        },
        re = Object(O.a)()
          .propsFromState(function () {
            return { users: Object(W.createSelector)(K.e.selectAll, ne, ee.b) }
          })
          .adjustStateProps(function (e) {
            return (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}
                t % 2
                  ? te(Object(n), !0).forEach(function (t) {
                      v()(e, t, n[t])
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                  : te(Object(n)).forEach(function (t) {
                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
              }
              return e
            })({}, e.users)
          }),
        ae = n('zQEV'),
        ie = re(function (e) {
          var t = e.entry,
            n = e.entryType,
            r = e.perspective,
            a = e.users,
            i = Object(ae.a)(t, n, r, a)
          return b.a.createElement(w.b, { color: 'gray700' }, i)
        }),
        oe = Object(W.createSelector)(
          function (e, t) {
            return K.e.select(e, t.senderId)
          },
          function (e, t) {
            return t.recipientId ? K.e.select(e, t.recipientId) : void 0
          },
          function (e, t) {
            return { user: e, recipient: t }
          },
        ),
        ce = Object(G.c)(oe),
        se = n('X/yg'),
        le = n('cTG8'),
        ue = function (e) {
          return b.a.createElement(k.a.I18NFormatMessage, { $i18n: 'b3a2b11c' }, b.a.createElement(w.b, null, e))
        },
        de = k.a.dedfd265
      var pe = k.a.a876e58b,
        fe = k.a.bf584cd1,
        he = k.a.a9cc8cfd,
        me = k.a.e20b65b0,
        ve = k.a.e5bfe07d,
        ye = k.a.b1a614fe,
        be = ce(function (e) {
          var t = e.entry,
            n = e.perspective,
            r = e.isGroupDM,
            a = e.user,
            i = void 0 === a ? {} : a,
            o = e.recipient,
            c = void 0 === o ? {} : o,
            s = b.a.useContext(_.a).featureSwitches,
            l = t && t.message_data
          if (!l) return null
          var u = l.attachment,
            d = u && !!(u.video || u.photo || u.animated_gif || u.tweet || u.fleet || u.sticker || u.card),
            p = n === i.id_str,
            f = !(!d || !p) || !(!r || p),
            h = i.name,
            m = c.name,
            v = [
              f && b.a.createElement(w.b, { key: 'senderName' }, ue(h), ' '),
              l &&
                l.text &&
                b.a.createElement(le.a, {
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
                          ? b.a.createElement(w.b, null, k.a.d5b762c8)
                          : b.a.createElement(
                              k.a.I18NFormatMessage,
                              { $i18n: 'dfd2b3b9' },
                              b.a.createElement(w.b, null, t),
                            )
                      })(p, h)
                    : ye)
                : u.fleet
                ? (v = (function (e, t, n) {
                    return e
                      ? b.a.createElement(
                          k.a.I18NFormatMessage,
                          { $i18n: 'i005f1fd' },
                          b.a.createElement(w.b, null, t),
                          b.a.createElement(w.b, null, n || ''),
                        )
                      : b.a.createElement(
                          k.a.I18NFormatMessage,
                          { $i18n: 'b35cee40' },
                          b.a.createElement(w.b, null, n || ''),
                        )
                  })(p, m, l.text))
                : u.video
                ? (v = Object(se.k)(u, s)
                    ? f
                      ? (function (e, t) {
                          return e
                            ? b.a.createElement(w.b, null, k.a.h7033cac)
                            : b.a.createElement(
                                k.a.I18NFormatMessage,
                                { $i18n: 'be5a9616' },
                                b.a.createElement(w.b, null, t),
                              )
                        })(p, h)
                      : de
                    : f
                    ? (function (e, t) {
                        return e
                          ? b.a.createElement(w.b, null, k.a.j7d81019)
                          : b.a.createElement(
                              k.a.I18NFormatMessage,
                              { $i18n: 'eee2f120' },
                              b.a.createElement(w.b, null, t),
                            )
                      })(p, h)
                    : pe)
                : u.photo
                ? (v = f
                    ? (function (e, t) {
                        return e
                          ? b.a.createElement(w.b, null, k.a.f80629ba)
                          : b.a.createElement(
                              k.a.I18NFormatMessage,
                              { $i18n: 'c1e1f848' },
                              b.a.createElement(w.b, null, t),
                            )
                      })(p, h)
                    : fe)
                : u.animated_gif
                ? (v = f
                    ? (function (e, t) {
                        return e
                          ? b.a.createElement(w.b, null, k.a.eb3d722e)
                          : b.a.createElement(
                              k.a.I18NFormatMessage,
                              { $i18n: 'dc4b75a1' },
                              b.a.createElement(w.b, null, t),
                            )
                      })(p, h)
                    : he)
                : u.sticker
                ? (v = f
                    ? (function (e, t) {
                        return e
                          ? b.a.createElement(w.b, null, k.a.d30c2d4f)
                          : b.a.createElement(
                              k.a.I18NFormatMessage,
                              { $i18n: 'c7e2464e' },
                              b.a.createElement(w.b, null, t),
                            )
                      })(p, h)
                    : me)
                : u.card &&
                  (v = f
                    ? (function (e, t) {
                        return e
                          ? b.a.createElement(w.b, null, k.a.db53c017)
                          : b.a.createElement(
                              k.a.I18NFormatMessage,
                              { $i18n: 'hcbbbb34' },
                              b.a.createElement(w.b, null, t),
                            )
                      })(p, h)
                    : ve)),
            b.a.createElement(w.b, { color: 'gray700', numberOfLines: 1 }, v)
          )
        }),
        ge = n('uKEd'),
        _e = function (e, t) {
          return t.senderId ? K.e.select(e, t.senderId) : void 0
        },
        Ee = function (e, t) {
          return Object(ge.n)(e, t.reactionEntry.message_id)
        },
        Oe = function (e, t) {
          var n = Ee(e, t)
          return n && n.message_data && K.e.select(e, n.message_data.sender_id)
        },
        Se = Object(G.e)(function () {
          return Object(W.createSelector)(_e, Ee, Oe, function (e, t, n) {
            return { reactedMessageEntry: t, reactingUser: e, messageUser: n }
          })
        }, {}),
        Ce = n('33Kz'),
        we = Se(function (e) {
          var t,
            n = e.isGroupDM,
            r = e.messageUser,
            a = e.perspective,
            i = e.reactedMessageEntry,
            o = e.reactingUser,
            c = e.reactionEntry,
            s = b.a.useContext(_.a).featureSwitches,
            l = i && i.message_data,
            u = l && l.attachment,
            d = l && l.text,
            p = r && r.screen_name,
            f = a === (o && o.id_str),
            h = o && o.name,
            m = Object(Ce.b)(c.reaction_key || '', s)
          return (
            (t =
              u && u.tweet
                ? n
                  ? (function (e, t, n, r) {
                      return e
                        ? b.a.createElement(
                            k.a.I18NFormatMessage,
                            { $i18n: 'c4202784' },
                            b.a.createElement(w.b, null, n),
                            b.a.createElement(w.b, null, r),
                          )
                        : b.a.createElement(
                            k.a.I18NFormatMessage,
                            { $i18n: 'b493a890' },
                            b.a.createElement(w.b, null, t),
                            b.a.createElement(w.b, null, n),
                            b.a.createElement(w.b, null, r),
                          )
                    })(f, h, p, m)
                  : (function (e, t, n) {
                      return e
                        ? b.a.createElement(
                            k.a.I18NFormatMessage,
                            { $i18n: 'ca684bf5' },
                            b.a.createElement(w.b, null, n),
                          )
                        : b.a.createElement(
                            k.a.I18NFormatMessage,
                            { $i18n: 'h5797be5' },
                            b.a.createElement(w.b, null, t),
                            b.a.createElement(w.b, null, n),
                          )
                    })(f, h, m)
                : u && u.video
                ? n
                  ? (function (e, t, n, r) {
                      return e
                        ? b.a.createElement(
                            k.a.I18NFormatMessage,
                            { $i18n: 'd1f8bdd9' },
                            b.a.createElement(w.b, null, n),
                            b.a.createElement(w.b, null, r),
                          )
                        : b.a.createElement(
                            k.a.I18NFormatMessage,
                            { $i18n: 'd764af97' },
                            b.a.createElement(w.b, null, t),
                            b.a.createElement(w.b, null, n),
                            b.a.createElement(w.b, null, r),
                          )
                    })(f, h, p, m)
                  : (function (e, t, n) {
                      return e
                        ? b.a.createElement(
                            k.a.I18NFormatMessage,
                            { $i18n: 'ab1cdfe2' },
                            b.a.createElement(w.b, null, n),
                          )
                        : b.a.createElement(
                            k.a.I18NFormatMessage,
                            { $i18n: 'f0cf1699' },
                            b.a.createElement(w.b, null, t),
                            b.a.createElement(w.b, null, n),
                          )
                    })(f, h, m)
                : u && u.photo
                ? n
                  ? (function (e, t, n, r) {
                      return e
                        ? b.a.createElement(
                            k.a.I18NFormatMessage,
                            { $i18n: 'hec0fd4d' },
                            b.a.createElement(w.b, null, n),
                            b.a.createElement(w.b, null, r),
                          )
                        : b.a.createElement(
                            k.a.I18NFormatMessage,
                            { $i18n: 'j55320de' },
                            b.a.createElement(w.b, null, t),
                            b.a.createElement(w.b, null, n),
                            b.a.createElement(w.b, null, r),
                          )
                    })(f, h, p, m)
                  : (function (e, t, n) {
                      return e
                        ? b.a.createElement(
                            k.a.I18NFormatMessage,
                            { $i18n: 'jf27606a' },
                            b.a.createElement(w.b, null, n),
                          )
                        : b.a.createElement(
                            k.a.I18NFormatMessage,
                            { $i18n: 'cd110359' },
                            b.a.createElement(w.b, null, t),
                            b.a.createElement(w.b, null, n),
                          )
                    })(f, h, m)
                : u && u.animated_gif
                ? n
                  ? (function (e, t, n, r) {
                      return e
                        ? b.a.createElement(
                            k.a.I18NFormatMessage,
                            { $i18n: 'e70dcc35' },
                            b.a.createElement(w.b, null, n),
                            b.a.createElement(w.b, null, r),
                          )
                        : b.a.createElement(
                            k.a.I18NFormatMessage,
                            { $i18n: 'g1bf440b' },
                            b.a.createElement(w.b, null, t),
                            b.a.createElement(w.b, null, n),
                            b.a.createElement(w.b, null, r),
                          )
                    })(f, h, p, m)
                  : (function (e, t, n) {
                      return e
                        ? b.a.createElement(
                            k.a.I18NFormatMessage,
                            { $i18n: 'b2da1bf8' },
                            b.a.createElement(w.b, null, n),
                          )
                        : b.a.createElement(
                            k.a.I18NFormatMessage,
                            { $i18n: 'g84c0421' },
                            b.a.createElement(w.b, null, t),
                            b.a.createElement(w.b, null, n),
                          )
                    })(f, h, m)
                : u && u.card
                ? n
                  ? (function (e, t, n, r) {
                      return e
                        ? b.a.createElement(
                            k.a.I18NFormatMessage,
                            { $i18n: 'cd2e7c18' },
                            b.a.createElement(w.b, null, n),
                            b.a.createElement(w.b, null, r),
                          )
                        : b.a.createElement(
                            k.a.I18NFormatMessage,
                            { $i18n: 'aee9e7fa' },
                            b.a.createElement(w.b, null, t),
                            b.a.createElement(w.b, null, n),
                            b.a.createElement(w.b, null, r),
                          )
                    })(f, h, p, m)
                  : (function (e, t, n) {
                      return e
                        ? b.a.createElement(
                            k.a.I18NFormatMessage,
                            { $i18n: 'f9fb1cf6' },
                            b.a.createElement(w.b, null, n),
                          )
                        : b.a.createElement(
                            k.a.I18NFormatMessage,
                            { $i18n: 'f2bf910e' },
                            b.a.createElement(w.b, null, t),
                            b.a.createElement(w.b, null, n),
                          )
                    })(f, h, m)
                : d
                ? n
                  ? (function (e, t, n, r, a) {
                      return e
                        ? b.a.createElement(
                            k.a.I18NFormatMessage,
                            { $i18n: 'i6cec545' },
                            b.a.createElement(w.b, null, r),
                            b.a.createElement(w.b, null, n),
                            b.a.createElement(w.b, null, a),
                          )
                        : b.a.createElement(
                            k.a.I18NFormatMessage,
                            { $i18n: 'd6998baa' },
                            b.a.createElement(w.b, null, t),
                            b.a.createElement(w.b, null, r),
                            b.a.createElement(w.b, null, n),
                            b.a.createElement(w.b, null, a),
                          )
                    })(f, h, m, p, d)
                  : (function (e, t, n, r) {
                      return e
                        ? b.a.createElement(
                            k.a.I18NFormatMessage,
                            { $i18n: 'cec676f3' },
                            b.a.createElement(w.b, null, n),
                            b.a.createElement(w.b, null, r),
                          )
                        : b.a.createElement(
                            k.a.I18NFormatMessage,
                            { $i18n: 'a2706f9a' },
                            b.a.createElement(w.b, null, t),
                            b.a.createElement(w.b, null, n),
                            b.a.createElement(w.b, null, r),
                          )
                    })(f, h, m, d)
                : (function (e, t, n) {
                    return e
                      ? b.a.createElement(k.a.I18NFormatMessage, { $i18n: 'd6b15bbf' }, b.a.createElement(w.b, null, n))
                      : b.a.createElement(
                          k.a.I18NFormatMessage,
                          { $i18n: 'ac0d4bc7' },
                          b.a.createElement(w.b, null, t),
                          b.a.createElement(w.b, null, n),
                        )
                  })(f, h, m)),
            b.a.createElement(w.b, { color: 'gray700', numberOfLines: 1 }, t)
          )
        }),
        Re = n('H4nC'),
        Ie = n('b9JY'),
        ke = k.a.fb3ccb55,
        Pe = function (e) {
          var t = e.conversationType,
            n = e.entry,
            r = e.perspective
          if (n.marked_as_spam) return b.a.createElement(w.b, { color: 'gray700', numberOfLines: 1 }, ke)
          if (Object(Ie.b)(n)) {
            var a = n.message_data,
              i = (a = void 0 === a ? {} : a).recipient_id,
              o = a.sender_id
            return b.a.createElement(be, {
              entry: n,
              isGroupDM: t === M.CONVERSATION_TYPE.GROUP,
              perspective: r,
              recipientId: i,
              senderId: o,
            })
          }
          return Object(Ie.c)(n)
            ? b.a.createElement(we, {
                isGroupDM: t === M.CONVERSATION_TYPE.GROUP,
                perspective: r,
                reactionEntry: n,
                senderId: n.sender_id,
              })
            : Object(Ie.a)(n)
            ? b.a.createElement(ie, { entry: n, entryType: n.type, perspective: r })
            : Object(Ie.d)(n)
            ? b.a.createElement(Re.a, { entry: n, isCompact: !0 })
            : null
        },
        xe = n('Myq3'),
        Te = n('3wZR'),
        Ae = n('XnpN'),
        Me = 'conversation',
        je = n('u0B7'),
        De = n('MWbm'),
        Le = n('Irs7'),
        Fe = n('eb3s'),
        Be = n('ZToW'),
        Ne = n('cHvH'),
        He = n('lHOd'),
        Ue = n('kb9v'),
        Ve = n('IG7M'),
        We = n('mjJ+'),
        ze = n('Znyr'),
        Ke = n('0PHd'),
        Ge = n('yrzJ'),
        qe = n('Xrkv'),
        Ye = n('efqG'),
        Xe = n('/yvb'),
        Qe = n('GBcw'),
        Ze = n('cm6r'),
        Je = n('htQn'),
        $e = n('5mJL'),
        et = n('rHpw'),
        tt = n('vMjK'),
        nt = n('AQ79'),
        rt = n('pHkl'),
        at = n('aWyx'),
        it = n('Lsrn'),
        ot = n('k/Ka')
      function ct(e, t) {
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
      function st(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ct(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ct(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var lt = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(ot.a)(
          'svg',
          st(
            st({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [it.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          b.a.createElement(
            'g',
            null,
            b.a.createElement('path', {
              d: 'M17.931 2.508c0 .42-.34.75-.75.75h-8.39l1.38 2.08-.56 5.78-.47.16c-1.5.49-3.1 2.07-3.37 3.31-.07.35-.39.59-.73.59-.05 0-.11 0-.16-.01-.4-.09-.66-.49-.58-.89.39-1.81 2.24-3.52 3.91-4.25l.42-4.3-1.35-2.02c-.26-.38-.29-.87-.07-1.29.24-.41.66-.66 1.11-.66h8.86c.41 0 .75.34.75.75zm3.09 12.76c-.14.17-.46.46-1.05.46h-3.86l-2.64 6.1c-.12.28-.39.45-.69.45s-.57-.17-.69-.45l-1.96-4.53c-.16-.38.01-.82.39-.98.38-.17.82.01.99.39l1.27 2.93 1.69-3.91h-1.61c-.42 0-.75-.33-.75-.75 0-.41.33-.75.75-.75h6.81c-.41-1.06-1.64-2.26-2.91-2.82-.09-.04-.16-.09-.22-.16-.22-.21-.3-.54-.17-.83.17-.38.61-.55.99-.39 1.59.7 3.5 2.43 3.89 4.25.06.25.03.66-.23.99zm.839-12.259L3.2 21.659c-.15.15-.34.22-.53.22s-.39-.07-.53-.22c-.29-.29-.29-.76 0-1.06L20.8 1.939c.29-.29.76-.29 1.06 0 .29.3.29.77 0 1.07z',
            }),
          ),
        )
      }
      lt.metadata = { width: 24, height: 24 }
      var ut = lt,
        dt = n('ShJ/')
      function pt(e, t) {
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
      function ft(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? pt(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : pt(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var ht = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(ot.a)(
          'svg',
          ft(
            ft({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [it.a.root, e.style], viewBox: '0 0 32 32' },
          ),
          b.a.createElement(
            'g',
            null,
            b.a.createElement('path', {
              d: 'M28.05 6.52h-5.42V4.887c0-1.548-1.26-2.808-2.81-2.808h-7.54c-1.548 0-2.807 1.26-2.807 2.808v1.63H4.05c-.414 0-.75.337-.75.75s.336.75.75.75h.753L7 26.435c.27 1.504 1.657 2.554 3.37 2.554h11.36c1.713 0 3.1-1.05 3.376-2.598l2.19-18.37h.753c.413 0 .75-.337.75-.75s-.336-.75-.75-.75zM10.972 4.887c0-.72.586-1.308 1.307-1.308h7.542c.72 0 1.308.587 1.308 1.308v1.63H10.972V4.89zm12.65 21.28c-.163.91-1.068 1.32-1.893 1.32H10.37c-.824 0-1.73-.41-1.887-1.276L6.313 8.02h19.472l-2.162 18.148z',
            }),
            b.a.createElement('path', {
              d: 'M13.312 23.123c.414 0 .75-.336.75-.75v-9.6c0-.414-.336-.75-.75-.75s-.75.336-.75.75v9.6c0 .414.336.75.75.75zm5.486 0c.414 0 .75-.336.75-.75v-9.6c0-.414-.336-.75-.75-.75s-.75.336-.75.75v9.6c0 .414.336.75.75.75z',
            }),
          ),
        )
      }
      ht.metadata = { width: 32, height: 32 }
      var mt = ht,
        vt = n('zIWA'),
        yt = n('5pef')
      function bt(e, t) {
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
      function gt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? bt(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : bt(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var _t = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(ot.a)(
          'svg',
          gt(
            gt({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [it.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          b.a.createElement(
            'g',
            null,
            b.a.createElement('path', {
              d: 'M22.238 2.257c-.293-.293-.768-.293-1.06 0L2.52 20.917c-.293.292-.293.767 0 1.06.146.146.338.22.53.22s.384-.073.53-.22l18.658-18.66c.293-.293.293-.767 0-1.06zM2.986 17.82c.155 0 .312-.048.446-.148.112-.083 2.752-2.104 2.708-7.248-.02-2.16.643-3.98 1.913-5.266 1.093-1.107 2.577-1.72 4.18-1.727 1.325.006 2.562.42 3.578 1.195.137.104.297.153.455.153.227 0 .45-.102.598-.295.25-.33.188-.8-.142-1.052-1.278-.975-2.828-1.493-4.483-1.5h-.003c-2.008.008-3.87.78-5.248 2.173-1.536 1.551-2.368 3.8-2.348 6.332.037 4.33-2.02 5.967-2.103 6.03-.332.247-.4.718-.154 1.05.147.2.374.303.603.303zm16.844-7.382c.002-.246-.003-.487-.017-.723-.024-.414-.387-.74-.792-.706-.413.023-.728.378-.705.79.012.205.017.413.015.624-.024 2.868.785 4.765 1.526 5.896h-8.314c-.414 0-.75.336-.75.75s.336.75.75.75h3.522c-.1 1.48-1.323 2.66-2.828 2.66-1.003 0-1.913-.514-2.436-1.372-.214-.354-.675-.467-1.03-.25-.354.214-.467.675-.25 1.03.795 1.31 2.185 2.09 3.716 2.09 2.332 0 4.227-1.85 4.328-4.158h4.922c.32 0 .604-.206.707-.51.104-.305 0-.643-.255-.84-.087-.066-2.145-1.7-2.108-6.032z',
            }),
          ),
        )
      }
      _t.metadata = { width: 24, height: 24 }
      var Et = _t,
        Ot = n('5oT/')
      function St(e, t) {
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
      function Ct(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? St(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : St(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function wt(e) {
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
      var Rt = k.a.d88d0790,
        It = k.a.ad63377d,
        kt = {
          confirmButtonLabel: k.a.bb1d57b6,
          actionTextLeave: k.a.g9074da4,
          header: k.a.gdf4b79f,
          text: k.a.h09b49f7,
        },
        Pt = k.a.e1c9ec9b,
        xt = k.a.i6b19b07,
        Tt = k.a.e3cfff7c,
        At = k.a.a8ed0eca,
        Mt = k.a.bdd91963,
        jt = k.a.a30a206d,
        Dt = k.a.ib4b1b85,
        Lt = k.a.bd3ca2ee,
        Ft = { component: 'low_quality_timeline' },
        Bt = function (e) {
          var t = e.children
          return b.a.createElement(De.a, { style: Ht.socialProofContainer }, t)
        },
        Nt = (function (e) {
          u()(n, e)
          var t = wt(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              v()(s()(e), '_count', e.context.featureSwitches.getValue('dm_conversation_labels_max_pinned_count')),
              v()(
                s()(e),
                '_isPinnedEducationEnabled',
                e.context.featureSwitches.isTrue('dm_conversation_labels_pinned_education_enabled'),
              ),
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
              v()(s()(e), 'state', { showActionMenu: !1, showConfirmation: !1, showPinnedAnnouncement: !1 }),
              v()(s()(e), '_renderConfirmationSheet', function () {
                var t = e.props.conversationId
                return b.a.createElement(Fe.a, {
                  confirmButtonLabel: kt.confirmButtonLabel,
                  confirmButtonType: 'destructiveFilled',
                  headline: kt.header,
                  onCancel: e._handleHideConfirmation,
                  onConfirm: e._deleteConversation(t),
                  text: kt.text,
                })
              }),
              v()(s()(e), '_renderMenu', function (t) {
                var n,
                  r = t.isFocused,
                  a = t.isFocusedWithin,
                  i = t.isHovered,
                  o = e.state,
                  c = o.showActionMenu,
                  s = o.showPinnedAnnouncement,
                  l = e.props,
                  u = l.conversation,
                  d = l.position,
                  p =
                    u &&
                    (null == u || null === (n = u.labels) || void 0 === n
                      ? void 0
                      : n.find(function (e) {
                          return e.label_type === nt.a.PINNED
                        })),
                  f = function () {
                    e.setState({ showPinnedAnnouncement: !1 })
                  },
                  h = function () {
                    e.setState({ showActionMenu: !0 })
                  },
                  m = e._isPinnedEducationEnabled && s && 1 === d && !p,
                  v = !Be.a.isEnabled || r || a || i || c || m
                return b.a.createElement($.a.Consumer, null, function (t) {
                  var n = t.isDrawer
                  return b.a.createElement(Ne.a, null, function (t) {
                    var r = t.windowWidth,
                      a = N.a.isTwoColumnLayout(r)
                    return b.a.createElement(He.a.Consumer, null, function (t) {
                      return b.a.createElement(
                        b.a.Fragment,
                        null,
                        b.a.createElement(
                          Ue.a,
                          {
                            actionPrimary: { text: jt, onClick: f },
                            headline: Dt,
                            onDismiss: f,
                            shouldDisplay: m && !n,
                            text: Lt({ count: e._count }),
                            withMask: !a,
                          },
                          a
                            ? b.a.createElement(Ve.a, {
                                onClick: h,
                                renderActionMenu: e._renderActionMenu,
                                style: v ? Ht.menu : Ht.hiddenMenu,
                              })
                            : null,
                        ),
                        a
                          ? null
                          : b.a.createElement(Ve.a, {
                              onClick: h,
                              renderActionMenu: e._renderActionMenu,
                              style: v ? Ht.menu : Ht.hiddenMenu,
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
                          return e.label_type === nt.a.PINNED
                        })),
                  l = null == a ? void 0 : a.notifications_disabled,
                  u = []
                if (a) {
                  if (o) {
                    var d = {
                      Icon: s ? ut : dt.a,
                      onClick: function () {
                        return o(i, a)
                      },
                      text: s ? Mt : Pt,
                      withBottomBorder: !0,
                    }
                    u.push(d)
                  }
                  var p = {
                      Icon: mt,
                      isEmphasized: !0,
                      onClick: e._handleDeleteMenuItemClick,
                      text: It,
                      withBottomBorder: !0,
                    },
                    f = {
                      Icon: vt.a,
                      onClick: function () {
                        return e._handleReportMenuItemClick(c)()
                      },
                      text: xt,
                      withBottomBorder: !0,
                    },
                    h = {
                      Icon: l ? yt.a : Et,
                      onClick: function () {
                        return e._handleSnoozeMenuItemClick(i)
                      },
                      text: l ? At : Tt,
                      withBottomBorder: !0,
                    }
                  u.push(f, h, p)
                }
                return b.a.createElement(We.a, {
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
                  case nt.d.PRIMARY:
                    return e._isPinnedInboxEnabled
                      ? e._renderMenu({ isFocused: n, isFocusedWithin: r, isHovered: a })
                      : null
                  case nt.d.SECONDARY:
                  case nt.d.TERTIARY:
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
                    ? b.a.createElement(ze.a, {
                        pip: !0,
                        style: Ht.unreadMessagePip,
                        truncatedCountFormatter: function () {
                          return ''
                        },
                        unreadCountLabel: function () {
                          return ''
                        },
                      })
                    : null
                switch (r) {
                  case nt.d.PRIMARY:
                    return e._isVDLEnabled ? i : a ? null : e._renderTimestamp(t)
                  case nt.d.SECONDARY:
                    return e._isVDLEnabled ? i : null
                  default:
                    return null
                }
              }),
              v()(s()(e), '_renderConversationLabel', function (e) {
                var t = e.convo_label
                if (null == t || !t.text) return null
                var n = Object(Te.b)(t.icon)
                return b.a.createElement(
                  w.b,
                  { color: 'gray700', size: 'subtext2' },
                  n ? b.a.createElement(n, { style: Ht.convoLabelIcon }) : null,
                  t.text,
                )
              }),
              v()(s()(e), '_renderSocialProof', function (t) {
                var n = t.social_proof
                if (!n || 0 === n.length) return null
                var r = n[0]
                switch (r.proof_type) {
                  case at.d.MUTUAL_FRIENDS:
                    if (0 === r.total) return null
                    var a = r.users.map(function (e) {
                        return e.profile_image_url_https
                      }),
                      i = r.users.map(function (e) {
                        return e.name
                      }),
                      o = e._isVDLEnabled ? { marginLeft: 0 } : null
                    return b.a.createElement(
                      Bt,
                      null,
                      b.a.createElement(Ke.a, {
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
                  i = n ? Object(Ae.a)(n, r) : [],
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
                  if (n.type === M.CONVERSATION_TYPE.ONE_TO_ONE) {
                    var u = i.map(function (e) {
                        return e.user
                      }),
                      d = B()(u, 1)[0]
                    return b.a.createElement(Ge.a, { color: 'gray700', screenName: d.screen_name })
                  }
                  var p = Object(qe.a)(l, !0)
                  return b.a.createElement(w.b, { color: 'gray700', numberOfLines: 2 }, p)
                }
              }),
              v()(s()(e), '_renderX', function () {
                var t = e.props,
                  n = t.conversation,
                  r = t.conversationId,
                  a = e.context.loggedInUserId,
                  i = Object(se.i)(n, a),
                  o = (null == n ? void 0 : n.type) === M.CONVERSATION_TYPE.GROUP
                return b.a.createElement(He.a.Consumer, null, function (t) {
                  return b.a.createElement(
                    Ye.a,
                    {
                      renderContent: function (n, a) {
                        return b.a.createElement(U.a, {
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
                    b.a.createElement(Xe.a, {
                      accessibilityLabel: Rt,
                      icon: b.a.createElement(Ot.a, { style: e._isVDLEnabled ? Ht.xIcon : void 0 }),
                      onPress: e._handleXPress,
                      style: e._isVDLEnabled ? Ht.vdlXButton : Ht.xButton,
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
                    var o = Object(se.f)(a, window.location.pathname, r.contextualScribeNamespace, i)
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
                  o = [i || a ? Ht.inlineNotificationsDisabledIcon : Ht.notificationsDisabledIcon],
                  c = Number(t && a ? (null == t ? void 0 : t.time) : null == r ? void 0 : r.sort_timestamp)
                return b.a.createElement(
                  b.a.Fragment,
                  null,
                  b.a.createElement(
                    De.a,
                    { style: (i || a) && Ht.inlineTimestamp },
                    r && c ? b.a.createElement(Qe.a, { timestamp: c }) : null,
                    null != r && r.notifications_disabled ? b.a.createElement(Et, { style: o }) : null,
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
                    d = a && a.type === M.CONVERSATION_TYPE.GROUP ? 'leave_group' : 'delete_thread',
                    p = {
                      conversation_type: (null == a ? void 0 : a.type) === M.CONVERSATION_TYPE.GROUP ? 1 : 0,
                      conversation_id: t,
                      conversation_participant_count: u,
                      position: s,
                      inbox_type: Object(se.h)(o),
                      entry_point: rt.b.CELL_X_BUTTON,
                    }
                  e._handleHideConfirmation(),
                    r.scribe({ element: 'thread', action: d, data: p }),
                    c({ conversationId: t }).catch(i({ showToast: !0 })),
                    l.replace(Object(se.e)(o))
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
                    r({ action: { label: tt.c, onAction: e._createUnblockUserHandler(t) }, text: tt.a })
                  }, o(H.a)),
                    a.scribeAction('block')
                }
              }),
              v()(s()(e), '_createUnblockUserHandler', function (t) {
                return function () {
                  var n = e.props,
                    r = n.analytics,
                    a = n.createLocalApiErrorHandler
                  ;(0, n.unblock)(t).catch(a(je.a)), r.scribeAction('unblock')
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
                  d = (null == i ? void 0 : i.type) === M.CONVERSATION_TYPE.GROUP
                l &&
                  (a.scribe({
                    component: 'search',
                    element: 'conversation',
                    action: 'click',
                    data: {
                      conversation_id: o,
                      conversation_participant_count: u,
                      conversation_type: d ? rt.g.GROUP : rt.g.ONE_TO_ONE,
                      entry_point: rt.b.ALL,
                      inbox_type: rt.c.PRIMARY,
                      dm_search_result_type: rt.a.CONVERSATION,
                      message_type: rt.d.NOT_APPLICABLE,
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
                  n.scribe(Ct(Ct({}, Ft), {}, { element: 'accessory_trashcan', action: 'click' })),
                  e.setState({ showConfirmation: !0 })
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.addFlag
                  e.shouldShowPinnedEducation && (this.setState({ showPinnedAnnouncement: !0 }), t(E.r))
                },
              },
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
                    S = this.state,
                    C = S.showConfirmation,
                    w = S.showPinnedAnnouncement,
                    R = t.showConfirmation,
                    I = t.showPinnedAnnouncement
                  return (
                    r !== d ||
                    a !== p ||
                    i !== f ||
                    o !== h ||
                    c !== m ||
                    l !== y ||
                    _ !== O ||
                    C !== R ||
                    g !== E ||
                    s !== v ||
                    w !== I
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
                      : Object(xe.a)(p, function (e) {
                          return ![
                            at.b.MESSAGE_DELETE,
                            at.b.REACTION_DELETE,
                            at.b.MESSAGE_MARK_AS_SPAM,
                            at.b.MESSAGE_MARK_AS_NOT_SPAM,
                            at.b.CONVO_METADATA_UPDATE,
                            at.b.DISABLE_NOTIFICATIONS,
                            at.b.ENABLE_NOTIFICATIONS,
                          ].includes(e.type)
                        }),
                    h = [Ht.root, u && !this._isVDLEnabled && Ht.unread],
                    m = (null == n ? void 0 : n.type) === M.CONVERSATION_TYPE.GROUP,
                    v = this._isVDLEnabled && m
                  if (!n) return null
                  var y = !!n.convo_label,
                    g = !n.trusted && !y,
                    _ = this._isVDLEnabled ? 'xxxLarge' : 'xxLarge',
                    E = this._renderConversationEndCell(f),
                    O = l && !a
                  return !n || (!l && n.isSearchResultOnly)
                    ? null
                    : b.a.createElement(
                        b.a.Fragment,
                        null,
                        d ? this._renderConfirmationSheet() : null,
                        b.a.createElement(Ze.a, null, function (t) {
                          var o = t.isFocused,
                            u = t.isFocusedWithin,
                            d = t.isHovered
                          return b.a.createElement(
                            Je.a,
                            {
                              accessibilityRole: 'tab',
                              accessibilityState: { selected: r },
                              link: {
                                pathname: null == i ? void 0 : i.pathname,
                                anchorless: !0,
                                state: Ct(Ct({}, null == i ? void 0 : i.state), {}, { position: s }),
                              },
                              onPress: e._handleOnClick,
                              style: h,
                              testID: Me,
                            },
                            b.a.createElement(
                              $e.a,
                              {
                                avatarCell: b.a.createElement(Z.a, {
                                  conversation: n,
                                  perspective: c,
                                  withBadge: v,
                                  withVDLRefresh: e._isVDLEnabled,
                                }),
                                avatarSize: _,
                              },
                              b.a.createElement(
                                De.a,
                                { style: Ht.bodyColumn },
                                b.a.createElement(
                                  De.a,
                                  { style: Ht.titleContainer },
                                  b.a.createElement(J.b, {
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
                                  b.a.createElement(
                                    De.a,
                                    { style: Ht.snippet },
                                    f && !O
                                      ? b.a.createElement(Pe, {
                                          conversationType: n.type,
                                          entry: f,
                                          isMessageItem: a,
                                          perspective: c,
                                        })
                                      : O
                                      ? e._renderSearchConversationPreview()
                                      : null,
                                  ),
                                  y ? e._renderConversationLabel(n) : null,
                                  g ? e._renderSocialProof(n) : null,
                                ),
                                E ? b.a.createElement(De.a, { style: Ht.endCell }, E) : null,
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
        })(b.a.Component)
      v()(Nt, 'contextType', _.a),
        v()(Nt, 'defaultProps', {
          searchQuery: '',
          inboxType: 'primary',
          isActive: !1,
          filter: function (e) {
            return !0
          },
        })
      var Ht = et.a.create(function (e) {
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
        Ut = Object(Le.a)(Q(Nt), { page: 'messages', section: 'inbox' }),
        Vt = Object(O.a)()
          .propsFromState(function () {
            return { pinnedConversationIds: M.selectPinnedConversationIds }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(D.createLocalApiErrorHandlerWithContextFactory)(
                'DM_PINNED_INBOX_CONTEXT',
              ),
            }
          }),
        Wt = n('oUUt'),
        zt = (n('uFXj'), k.a.b08821f3),
        Kt = k.a.e047b8fa,
        Gt = et.a.create(function (e) {
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
        qt = function (e) {
          var t = Object(Le.b)(),
            n = e.clearRecentSearches,
            r = e.headerText,
            a = e.icon,
            i = e.isInboxLabelHeader,
            o = e.withClearButton
          b.a.useEffect(
            function () {
              t.scribe({ component: 'recent_search', action: 'impression' })
            },
            [t],
          )
          var c,
            s = [Gt.root, i && Gt.labelHeader]
          return b.a.createElement(
            De.a,
            { style: s },
            b.a.createElement(
              De.a,
              { style: Gt.iconContainer },
              (c = a) ? b.a.createElement(c, { style: Gt.icon }) : null,
              b.a.createElement(w.b, { size: 'headline1', weight: 'heavy' }, r),
            ),
            o
              ? b.a.createElement(
                  Xe.a,
                  { accessibilityLabel: zt, onPress: n, style: Gt.backButton, type: 'onMediaWhiteFilled' },
                  Kt,
                )
              : null,
          )
        },
        Yt = n('h3MB'),
        Xt = (n('enFi'), n('1IsZ'), n('IAdD'), n('xPna'))
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
        },
        $t = n('VPAj')
      function en(e, t) {
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
      function tn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? en(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : en(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var nn,
        rn,
        an,
        on,
        cn = tn(
          tn({}, n('7n04').a),
          {},
          { initialScrollHeadroom: Object($t.a)(0), scrollHeadroom: Object($t.a)(0), pinToNewestWhenAtNewest: !0 },
        ),
        sn = n('TEoO'),
        ln = n('NjAB'),
        un = n('OIs+'),
        dn = k.a.e4f6bd9e,
        pn = k.a.e4ff75a9,
        fn =
          ((nn = {}),
          v()(nn, un.a.Offline, { toast: { text: pn } }),
          v()(nn, 'defaultToast', { text: dn }),
          v()(nn, 'showToast', !0),
          nn),
        hn = n('Fr3L'),
        mn = n('uDfI'),
        vn = n('9SqB'),
        yn = n.n(vn),
        bn = n('DQzJ')
      function gn(e, t) {
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
      function _n(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? gn(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : gn(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var En = k.a.e4b3f520,
        On = k.a.ae4d666a,
        Sn = function (e) {
          return e
        },
        Cn = k.a.a219e217,
        wn = k.a.d571e4f8,
        Rn = k.a.a551bf7d,
        In = void 0 !== rn ? rn : (rn = n('X8um')),
        kn = { context: 'DM_PINNED_INBOX' },
        Pn = function (e) {
          var t,
            r = Object(mn.c)(),
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
            m = Object(bn.a)(In, { label: nt.a.PINNED }).data,
            y = c(fn),
            g = b.a.useState(!1),
            E = B()(g, 2),
            O = E[0],
            S = E[1],
            C = b.a.useContext(_.a).featureSwitches.getValue('dm_conversation_labels_max_pinned_count'),
            w = (null == m || null === (t = m.labeled_conversation_slice) || void 0 === t ? void 0 : t.items) || [],
            R = Object(ln.b)(w, [Yt.a]).entities
          b.a.useEffect(
            function () {
              r(Jt(R))
            },
            [m],
          )
          var I = yn()(void 0 !== an ? an : (an = n('ZH9U'))),
            k = B()(I, 1)[0],
            P = yn()(void 0 !== on ? on : (on = n('rQjK'))),
            x = B()(P, 1)[0],
            T = function (e, t) {
              x({
                variables: { conversation_id: e, label_type: nt.a.PINNED },
                onCompleted: function (n) {
                  var a,
                    i = Object(Ae.a)(t),
                    o = t
                      ? null == t || null === (a = t.labels) || void 0 === a
                        ? void 0
                        : a.filter(function (e) {
                            return e.label_type !== nt.a.PINNED
                          })
                      : []
                  r(Jt({ conversations: v()({}, e, _n(_n({}, t), {}, { participants: i, labels: o })) }))
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
                    c && o && (Object(Wt.b)(c, a), t.delete(a))
                  }
                },
                onError: function (e) {
                  y(e)
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
            j = b.a.createElement(
              b.a.Fragment,
              null,
              l,
              null != d && d.length
                ? b.a.createElement(
                    b.a.Fragment,
                    null,
                    xn(En),
                    d.map(function (e, t) {
                      return f({ conversationIds: d, togglePinState: T })(e)
                    }),
                  )
                : null,
              M ? xn(On) : null,
            )
          return null != o && o.length
            ? b.a.createElement(
                b.a.Fragment,
                null,
                O
                  ? b.a.createElement(Fe.a, {
                      confirmButtonLabel: Cn,
                      headline: wn({ count: C }),
                      onConfirm: function () {
                        return S(!1)
                      },
                      text: Rn,
                      withCancelButton: !1,
                    })
                  : null,
                i && null != A && A.length
                  ? b.a.createElement(sn.a, {
                      accessibilityRole: 'tablist',
                      accessibilityTitle: a,
                      anchoring: cn,
                      assumedItemHeight: 100,
                      cacheKey: i,
                      footer: s,
                      header: j,
                      identityFunction: Sn,
                      items: A,
                      onNearEnd: u,
                      renderer: f({
                        conversationIds: A,
                        togglePinState: function (e, t) {
                          k({
                            variables: { conversation_id: e, label: nt.a.PINNED },
                            onCompleted: function (n) {
                              var a
                              switch (
                                null === (a = n.add_dm_conversation_label_v3) || void 0 === a ? void 0 : a.__typename
                              ) {
                                case 'DMConversationLabelInfo':
                                  var i = n.add_dm_conversation_label_v3,
                                    o = i.label_type,
                                    c = i.timestamp,
                                    s = Object(Ae.a)(t)
                                  r(
                                    Jt({
                                      conversations: v()(
                                        {},
                                        e,
                                        _n(
                                          _n({}, t),
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
                              y(e)
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
        xn = function (e) {
          return b.a.createElement(De.a, null, b.a.createElement(qt, { headerText: e, isInboxLabelHeader: !0 }))
        }
      var Tn = Vt(function (e) {
          return b.a.createElement(hn.a, { errorConfig: kn }, b.a.createElement(Pn, e))
        }),
        An =
          (n('LJOr'),
          n('tVqn'),
          n('Qavd'),
          n('JtPf'),
          n('M+/F'),
          function (e, t) {
            return t.module.selectItems(e)
          }),
        Mn = function (e, t) {
          return t.module.selectFetchStatus(e)
        },
        jn = Object(O.a)()
          .propsFromState(function () {
            return { fetchStatus: Mn, sliceItems: An }
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
              createLocalApiErrorHandler: Object(D.createLocalApiErrorHandlerWithContextFactory)(
                'DM_SEARCH_ALL_CONTEXT',
              ),
              fetchSearchIfNeeded: t.fetchIfNeeded,
            }
          }),
        Dn = n('MDbM'),
        Ln = n('v//M'),
        Fn = n('0yYu'),
        Bn = n('lBmi'),
        Nn = n('91AQ'),
        Hn = n('6ZHn')
      function Un(e) {
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
      var Vn = k.a.c94ac69d,
        Wn = k.a.a2f8105f,
        zn = k.a.g2fd3205,
        Kn = k.a.ffd9cfe6,
        Gn = (function (e) {
          u()(n, e)
          var t = Un(n)
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
                  ? b.a.createElement(
                      b.a.Fragment,
                      null,
                      a.length ? e._renderPeopleSection() : null,
                      o && !l ? b.a.createElement(Fn.a, null) : null,
                      l ? e._renderDMSearchFooter(zn) : null,
                      n.length ? e._renderGroupsSection() : null,
                      c ? e._renderDMSearchFooter(Vn) : null,
                      r.length ? e._renderMessagesSection() : null,
                      s ? e._renderDMSearchFooter(Wn) : null,
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
                return b.a.createElement(
                  De.a,
                  { style: qn.header },
                  b.a.createElement(w.b, { link: { pathname: n.pathname, state: { tab: t } } }, Kn),
                )
              }),
              v()(s()(e), '_renderDMHeader', function (e) {
                var t = e.headerText,
                  n = e.icon
                return b.a.createElement(qt, { headerText: t, icon: n })
              }),
              v()(s()(e), '_renderGroupsSection', function () {
                var t = e.props,
                  n = t.groupConversationIds,
                  r = t.renderInboxItem
                return b.a.createElement(
                  b.a.Fragment,
                  null,
                  e._renderDMHeader({ icon: Bn.a, headerText: Vn }),
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
                return b.a.createElement(
                  b.a.Fragment,
                  null,
                  e._renderDMHeader({ icon: Nn.a, headerText: Wn }),
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
                return b.a.createElement(
                  b.a.Fragment,
                  null,
                  e._renderDMHeader({ icon: Hn.a, headerText: zn }),
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
                  e.module !== r && n !== Dn.a.FAILED && this._handleFetch()
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
                  return b.a.createElement(Ln.a, {
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
        })(b.a.Component)
      v()(Gn, 'contextType', _.a)
      var qn = et.a.create(function (e) {
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
        Yn = jn(Gn),
        Xn = n('wAC9')
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
      }
      var Jn,
        $n = function (e) {
          return Object(Xn.a)({
            contextSuffix: 'DM_SEARCH_SLICE',
            getFetchApiEndpoint: function (e) {
              return e.DirectMessagesGraphQL.fetchDMAllSearch
            },
            sliceKey: ''.concat(rt.e, '-').concat(e),
            getEndpointParams: function (t) {
              return Zn(Zn({}, t), {}, { query: e })
            },
            mapEntitiesToActions: Jt,
          })
        },
        er = function (e, t) {
          return t.query
        },
        tr = Object(O.a)().propsFromState(function () {
          return {
            sliceModule: Object(W.createSelector)(er, function (e) {
              return e ? $n(e) : void 0
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
            ? b.a.createElement(Yn, {
                loadingLabel: t,
                location: n,
                module: o,
                query: r,
                renderEmptyState: a,
                renderInboxItem: i,
              })
            : a()
        }),
        nr = M.selectRecentSearches,
        rr = function (e, t) {
          return t.query ? M.selectSearchConversations(e, t.query) : []
        },
        ar = function (e, t) {
          return t.query ? M.selectSearchFetchStatus(e, t.query) : j.a.LOADED
        },
        ir = function (e, t) {
          return t.conversationIds || []
        },
        or = function (e, t) {
          return null != e && e.length
            ? t.filter(function (t) {
                return e.indexOf(t) > -1
              })
            : e
        },
        cr = Object(O.a)()
          .propsFromState(function () {
            return { conversationIds: ir, recentSearches: nr, searchFetchStatus: ar, searchConversationIds: rr }
          })
          .adjustStateProps(function (e) {
            var t = e.conversationIds,
              n = e.recentSearches,
              r = e.searchConversationIds
            return {
              conversationIds: t,
              recentSearches: n,
              searchFetchStatus: e.searchFetchStatus,
              searchConversationIds: or(r, t),
            }
          })
          .propsFromActions(function () {
            return {
              addRecentSearch: M.addRecentSearches,
              createLocalApiErrorHandler: Object(D.createLocalApiErrorHandlerWithContextFactory)(
                'DIRECT_MESSAGES_SEARCH',
              ),
              search: M.searchConversations,
              clearRecentSearch: M.clearRecentSearch,
              clearRecentSearches: M.clearRecentSearches,
            }
          }),
        sr = n('VY6S'),
        lr = n('s14A'),
        ur = n('VPW4'),
        dr = n('mN6z')
      function pr(e, t) {
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
      function fr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? pr(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : pr(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var hr = void 0 !== Jn ? Jn : (Jn = n('y59G')),
        mr = 'DM_MESSAGE_SEARCH',
        vr = { context: mr },
        yr = function (e) {
          return e
        },
        br = function (e) {
          var t,
            n,
            r,
            a = e.footer,
            i = e.noItemsRenderer,
            o = e.onScrollEnd,
            c = e.renderInboxItem,
            s = e.searchTerm,
            l = Object(mn.c)(),
            u = Object(bn.a)(hr, { query: s }),
            d = u.data,
            p = u.fetchNext,
            f = u.hasNext,
            h = b.a.useMemo(
              function () {
                var e,
                  t,
                  n,
                  r =
                    null == d ||
                    null === (e = d.dm_message_slice_result) ||
                    void 0 === e ||
                    null === (t = e.items) ||
                    void 0 === t
                      ? void 0
                      : t.map(function (e) {
                          var t, n
                          return null == e ||
                            null === (t = e.dm_event) ||
                            void 0 === t ||
                            null === (n = t.legacy) ||
                            void 0 === n
                            ? void 0
                            : n.conversation
                        }),
                  a = null == d || null === (n = d.dm_message_slice_result) || void 0 === n ? void 0 : n.items,
                  i = Object(ln.b)(r, [Yt.a]),
                  o = Object(ln.b)(a, [Yt.b])
                return {
                  normalizedConversations: i,
                  normalizedMessages: o,
                  entities: fr(fr({}, null == i ? void 0 : i.entities), null == o ? void 0 : o.entities),
                }
              },
              [null == d || null === (t = d.dm_message_slice_result) || void 0 === t ? void 0 : t.items],
            ),
            m = h.entities,
            v = h.normalizedConversations,
            y = h.normalizedMessages,
            g =
              ((n = d),
              (r = b.a.useRef()),
              b.a.useEffect(function () {
                r.current = n
              }),
              r.current)
          return (
            b.a.useEffect(
              function () {
                Object(dr.a)(d, g) || l(Jt(m, !0))
              },
              [m, d, g, l],
            ),
            b.a.createElement(sn.a, {
              cacheKey: mr,
              footer: f ? null : a,
              identityFunction: yr,
              items: null == y ? void 0 : y.result,
              noItemsRenderer: i,
              onNearEnd: p,
              onScrollEnd: o,
              renderer: c({
                conversationIds: null == v ? void 0 : v.result,
                isMessageItem: !0,
                messageIds: null == y ? void 0 : y.result,
              }),
              withoutHeadroom: !0,
            })
          )
        },
        gr = et.a.create(function (e) {
          return { activityIndicatior: { paddingVertical: 250 } }
        })
      function _r(e) {
        return b.a.createElement(
          hn.a,
          { errorConfig: vr },
          b.a.createElement(
            b.a.Suspense,
            { fallback: b.a.createElement(ur.a, { style: gr.activityIndicatior }) },
            b.a.createElement(br, e),
          ),
        )
      }
      var Er = n('j7Bv'),
        Or = n('VwDm'),
        Sr = n('hOZg')
      function Cr(e) {
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
      var wr = k.a.dbd5d40f,
        Rr = (function (e) {
          u()(n, e)
          var t = Cr(n)
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
                    a = b.a.createElement(Er.a, { Icon: Or.a, color: 'neutral', size: 'xLarge', style: Ir.searchIcon }),
                    i = [Ir.listItemView, Ir.bottomBorder]
                  return b.a.createElement(
                    Je.a,
                    { onPress: n, style: i },
                    b.a.createElement(
                      De.a,
                      null,
                      b.a.createElement(
                        $e.a,
                        { avatarCell: a, avatarSize: 'xLarge', cellStyle: Ir.avatarColumn },
                        b.a.createElement(
                          De.a,
                          { style: Ir.container },
                          b.a.createElement(w.b, { numberOfLines: 1 }, r),
                          b.a.createElement(Xe.a, {
                            accessibilityLabel: wr,
                            borderColor: 'transparent',
                            icon: b.a.createElement(Sr.a, null),
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
        })(b.a.PureComponent),
        Ir = et.a.create(function (e) {
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
        kr = Rr
      function Pr(e, t) {
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
      function xr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Pr(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Pr(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var Tr = function (e) {
        return Object(Xn.a)({
          contextSuffix: 'DM_GROUP_SEARCH_SLICE',
          getFetchApiEndpoint: function (e) {
            return e.DirectMessagesGraphQL.fetchDMGroupSearch
          },
          sliceKey: ''.concat(rt.e, '-groups-').concat(e),
          getEndpointParams: function (t) {
            return xr(xr({}, t), {}, { query: e })
          },
          mapEntitiesToActions: Jt,
        })
      }
      function Ar(e, t) {
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
      function Mr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Ar(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Ar(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var jr = function (e) {
          return Object(Xn.a)({
            contextSuffix: 'DM_PEOPLE_SEARCH_SLICE',
            getFetchApiEndpoint: function (e) {
              return e.DirectMessagesGraphQL.fetchDMPeopleSearch
            },
            sliceKey: ''.concat(rt.e, '-people-').concat(e),
            getEndpointParams: function (t) {
              return Mr(Mr({}, t), {}, { query: e })
            },
            mapEntitiesToActions: Jt,
          })
        },
        Dr = function (e, t) {
          return t.query
        },
        Lr = function (e, t) {
          return t.tabType
        },
        Fr = Object(O.a)().propsFromState(function () {
          return {
            sliceModule: Object(W.createSelector)(Lr, Dr, function (e, t) {
              var n = t && e === rt.f.PEOPLE
              return t && e === rt.f.GROUPS ? Tr(t) : n ? jr(t) : void 0
            }),
          }
        }),
        Br = n('FS1z'),
        Nr = Fr(function (e) {
          var t = e.footer,
            n = e.onScrollEnd,
            r = e.renderEmptyState,
            a = e.renderInboxItem,
            i = e.sliceModule
          return i
            ? b.a.createElement(Br.a, {
                footer: t,
                module: i,
                noItemsRenderer: r,
                onScrollEnd: n,
                renderer: a({ conversationIds: [] }),
                withoutHeadroom: !0,
              })
            : r()
        }),
        Hr = n('IG4P'),
        Ur = n('RJrc'),
        Vr = n('TnY3'),
        Wr = n('FIs5'),
        zr = n('6OUF'),
        Kr = n('k/OQ'),
        Gr = n('95Se')
      function qr(e, t) {
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
      function Yr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? qr(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : qr(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function Xr(e) {
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
      var Qr = 'dmSearchInbox',
        Zr = function (e) {
          return e
        },
        Jr = k.a.b08821f3,
        $r = k.a.a66ac766,
        ea = k.a.fe61929d,
        ta = k.a.a846382a,
        na = k.a.b9dae4f4,
        ra = k.a.e7fb2027,
        aa = k.a.b92a21d8,
        ia = k.a.jdc67c42,
        oa = k.a.e8581ccd,
        ca = k.a.f08940ab,
        sa = k.a.gaae1fd5,
        la = k.a.f8321d82,
        ua = k.a.c94ac69d,
        da = k.a.a2f8105f,
        pa = k.a.g2fd3205,
        fa = k.a.fb3c8e74,
        ha = (function (e) {
          u()(n, e)
          var t = Xr(n)
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
                    b.a.createElement(Wr.a, {
                      buttonLink: '/messages/compose',
                      buttonText: ca,
                      header: aa({ query: a }),
                      message: e._messageSearchEnabled ? oa : ia,
                      onButtonPress: e._handleComposeButtonPress,
                    }))
                  : b.a.createElement(
                      De.a,
                      { style: ma.emptyState },
                      b.a.createElement(w.b, { align: 'center', color: 'gray700' }, sa),
                    )
              }),
              v()(s()(e), '_renderRecentSearches', function () {
                var t = e.props,
                  n = t.analytics,
                  r = t.query,
                  a = t.recentSearches
                return a.length && !r
                  ? b.a.createElement(
                      b.a.Fragment,
                      null,
                      b.a.createElement(qt, {
                        analytics: n,
                        clearRecentSearches: e._clearRecentSearches,
                        headerText: fa,
                        withClearButton: !0,
                      }),
                      a.map(function (t) {
                        return b.a.createElement(kr, {
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
                  ? b.a.createElement(tr, {
                      loadingLabel: $r,
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
                return b.a.createElement(Nr, {
                  footer: e._renderFooter(),
                  onScrollEnd: e._handleScrollEnd,
                  query: r,
                  renderEmptyState: e._renderEmptyDMSearchInbox,
                  renderInboxItem: n,
                  tabType: t ? rt.f.GROUPS : rt.f.PEOPLE,
                })
              }),
              v()(s()(e), '_renderMessagesTab', function () {
                var t = e.props.renderInboxItem,
                  n = e.state.debouncedQuery
                return n
                  ? b.a.createElement(_r, {
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
                  case pa:
                    return e._renderConversationsTab(!1)
                  case ua:
                    return e._renderConversationsTab(!0)
                  case da:
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
                return b.a.createElement(
                  lr.a,
                  null,
                  b.a.createElement(
                    Hr.a,
                    { isRefreshing: i, onRefresh: e._handlePullToRefresh },
                    b.a.createElement(sn.a, {
                      accessibilityRole: 'tablist',
                      accessibilityTitle: n,
                      anchoring: cn,
                      assumedItemHeight: 100,
                      cacheKey: Qr,
                      footer: e._renderFooter(),
                      identityFunction: Zr,
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
                  ? b.a.createElement(Ur.a, null)
                  : b.a.createElement(
                      De.a,
                      { style: ma.footerContainer },
                      b.a.createElement(w.b, { align: 'center', size: 'body', weight: 'bold' }, ra),
                      b.a.createElement(
                        Ze.a,
                        { interactiveStyles: null },
                        b.a.createElement(
                          w.b,
                          {
                            align: 'center',
                            color: 'primary',
                            onPress: e._handleFooterClick,
                            size: 'subtext2',
                            withInteractiveStyling: !0,
                          },
                          na,
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
              v()(s()(e), '_handleSearchChangeDebounced', Object(sr.a)(e._handleSearchChangeInner, 200)),
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
                    i = [ma.searchInput, a ? ma.searchInputBorder : void 0],
                    o = ((null == t ? void 0 : t.state) || {}).tab,
                    c = [la, pa, ua]
                  this._messageSearchEnabled && c.push(da)
                  var s = c.map(function (e) {
                    return {
                      key: e,
                      label: e,
                      isActive: function () {
                        return o === e || (!o && e === la)
                      },
                      to: Yr(Yr({}, t), {}, { state: Yr(Yr({}, t.state), {}, { tab: e }) }),
                    }
                  })
                  return b.a.createElement(
                    b.a.Fragment,
                    null,
                    b.a.createElement(
                      De.a,
                      { style: i },
                      b.a.createElement(Xe.a, {
                        accessibilityLabel: Jr,
                        icon: b.a.createElement(Gr.a, null),
                        onPress: this._handleHideRecentSearches,
                        pullLeft: !0,
                        type: 'primaryText',
                      }),
                      b.a.createElement(zr.a, {
                        Icon: Or.a,
                        autoComplete: 'off',
                        onChange: this._handleSearchChange,
                        onClear: this._handleSearchClear,
                        onSubmitEditing: this._handleAddRecentSearch,
                        placeholder: this._messageSearchEnabled ? ta : ea,
                        ref: this._setInputRef,
                        value: n,
                        withClearButton: !0,
                      }),
                    ),
                    this._modularSearchEnabled && (n || o === pa || o === ua)
                      ? b.a.createElement(
                          b.a.Fragment,
                          null,
                          b.a.createElement(Kr.a, { links: s }),
                          this._renderTabContent(),
                        )
                      : b.a.createElement(Ln.a, {
                          accessibilityLabel: $r,
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
        })(b.a.Component)
      v()(ha, 'contextType', _.a), v()(ha, 'defaultProps', { recentSearches: [], searchConversationIds: [], query: '' })
      var ma = et.a.create(function (e) {
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
        va = Object(Vr.a)(cr(ha)),
        ya = n('dwig'),
        ba = n('QB0K'),
        ga = n('Avzu'),
        _a = n('FRNI')
      function Ea(e) {
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
      var Oa = k.a.h845f281,
        Sa = k.a.f325afc3,
        Ca = (function (e) {
          u()(n, e)
          var t = Ea(n)
          function n() {
            return a()(this, n), t.apply(this, arguments)
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  return b.a.createElement(ba.a, {
                    accessibilityLabel: Oa,
                    href: '/messages/compose',
                    icon: b.a.createElement(ga.a, null),
                    label: Oa,
                    scribeComponent: 'floating_dm_button',
                    shortLabel: Sa,
                    testID: _a.a.message,
                  })
                },
              },
            ]),
            n
          )
        })(b.a.PureComponent),
        wa = n('tI3i'),
        Ra = n.n(wa),
        Ia = n('883S'),
        ka = n('yoO3'),
        Pa = n('GSsg'),
        xa = n('2g+p'),
        Ta = n('mw9i'),
        Aa = n('BcsE'),
        Ma = n('+d3d')
      function ja(e) {
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
      var Da = function (e) {
          return e
        },
        La = k.a.a66ac766,
        Fa = k.a.fe61929d,
        Ba = k.a.a846382a,
        Na = (function (e) {
          u()(n, e)
          var t = ja(n)
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
                return b.a.createElement(va, {
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
                return b.a.createElement(
                  Hr.a,
                  { isRefreshing: o, onRefresh: i._handlePullToRefresh },
                  s && n
                    ? b.a.createElement(sn.a, {
                        accessibilityRole: 'tablist',
                        accessibilityTitle: t,
                        anchoring: cn,
                        assumedItemHeight: 100,
                        cacheKey: s,
                        footer: r,
                        header: i._renderHeader(),
                        identityFunction: Da,
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
                    v = Object(Aa.a)(m) ? m + 1 : 0
                  return (
                    Ra()(!!c, 'loggedInUserId must be defined'),
                    n && n(!0),
                    b.a.createElement(g.a, { exact: !1, path: h.pathname }, function (e) {
                      return b.a.createElement(Ut, {
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
                  ? b.a.createElement(Tn, {
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
                  l = (null == n ? void 0 : n.type) === M.CONVERSATION_TYPE.GROUP
                o.scribe({
                  element: 'thread',
                  action: 'click',
                  data: {
                    event_value: i.state.searchQuery.length,
                    conversation_id: t,
                    conversation_participant_count: s,
                    conversation_type: l ? rt.g.GROUP : rt.g.ONE_TO_ONE,
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
                if ('background' !== xa.a.currentState) return i._updateLastSeenEventId()
              }),
              v()(s()(i), '_renderHeader', function () {
                var e =
                    i.context.featureSwitches.isTrue('dm_vdl_enabled') &&
                    i.context.featureSwitches.isTrue('dm_vdl_inbox_p0_enabled'),
                  t = i.props,
                  n = t.renderStickyContent,
                  r = t.withDmSearch,
                  a = [Ha.searchInput, e ? void 0 : Ha.searchInputBorder]
                return b.a.createElement(
                  b.a.Fragment,
                  null,
                  r
                    ? b.a.createElement(
                        De.a,
                        { onClick: i._handleSearchClick, style: a },
                        b.a.createElement(zr.a, {
                          Icon: Or.a,
                          autoComplete: 'off',
                          isCompact: !0,
                          onChange: i._handleSearchChange,
                          placeholder: i._messageSearchEnabled ? Ba : Fa,
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
              (i._fab = b.a.createElement(Ca, null)),
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
                    (this._updatePolling = new Pa.a(
                      function () {
                        a().then(e._updateLastSeenEventIdIfActive, n(Ia.a))
                      },
                      { interval: 8e3 },
                    )),
                    (this._handleHistoryRequest = Object(Ma.a)(function () {
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
                  return b.a.createElement(
                    ka.a,
                    null,
                    b.a.createElement(A, null),
                    b.a.createElement(
                      ya.a,
                      { component: Ta.a, fab: this._fab, style: Ha.root },
                      b.a.createElement(Ln.a, {
                        accessibilityLabel: La,
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
        })(b.a.Component)
      v()(Na, 'contextType', _.a),
        v()(Na, 'defaultProps', {
          conversationIds: [],
          inboxType: nt.d.PRIMARY,
          isDrawer: !1,
          withDmSearch: !1,
          withPinnedInbox: !1,
        })
      var Ha = et.a.create(function (e) {
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
      t.a = Object(Vr.a)(L(Na))
    },
    prG5: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return T
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
        O = n.n(E),
        S = n('nT9l'),
        C = n('3XMw'),
        w = n.n(C),
        R = 'image',
        I = n('TIdA'),
        k = n('a6qo')
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
            r = b()(e)
          if (t) {
            var a = b()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return v()(this, n)
        }
      }
      var x = w.a.f93bb3ee,
        T = (function (e) {
          h()(n, e)
          var t = P(n)
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
                return O.a.createElement(
                  O.a.Fragment,
                  null,
                  O.a.createElement(
                    I.a,
                    a()({}, l, { accessibilityLabel: c, onVariantSelection: n, previewMode: r, testID: R }),
                  ),
                  s ? O.a.createElement(k.a, { align: 'left', altLabel: c }) : null,
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
                  return O.a.createElement(S.a, {
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
        })(O.a.Component)
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
        a = n.n(r),
        i = n('3XMw'),
        o = n.n(i),
        c = n('MWbm'),
        s = n('CKsB'),
        l = n('/yvb'),
        u = n('rHpw'),
        d = n('hiGS'),
        p = n('pu5c'),
        f = n('zIWA'),
        h = o.a.fcd4d489,
        m = o.a.gbed8594,
        v = o.a.g9074da4,
        y = o.a.ad63377d,
        b = o.a.h09b49f7,
        g = o.a.i6b19b07,
        _ = o.a.j7bb1a42,
        E = o.a.ea200ba6,
        O = o.a.cfd2f35d,
        S = function (e) {
          var t = e.dismiss,
            n = e.flatBorders,
            r = e.isGroup,
            i = e.onBlockClick,
            o = e.onDeleteClick,
            u = e.onReportClick,
            S = e.requestorScreenName,
            w = e.showBlock,
            R = e.showCancel,
            I = e.showDelete,
            k = a.a.useCallback(
              function () {
                u && u(), t()
              },
              [t, u],
            ),
            P = a.a.useCallback(
              function () {
                i && i(), t()
              },
              [t, i],
            ),
            x = a.a.useCallback(
              function () {
                o && o(), t()
              },
              [t, o],
            )
          return a.a.createElement(
            c.a,
            { accessibilityRole: 'dialog', style: n ? C.flatCorners : C.roundCorners },
            I
              ? a.a.createElement(s.a, {
                  Icon: d.a,
                  actionSubText: b,
                  actionText: r ? v : y,
                  onClick: x,
                  textColor: 'red500',
                })
              : null,
            w
              ? a.a.createElement(s.a, { Icon: p.a, actionSubText: m, actionText: h({ screenName: S }), onClick: P })
              : null,
            a.a.createElement(s.a, {
              Icon: f.a,
              actionSubText: E,
              actionText: r ? g : _({ screenName: S }),
              onClick: k,
            }),
            R ? a.a.createElement(l.a, { onPress: t, style: C.cancelButton, type: 'primaryOutlined' }, O) : null,
          )
        }
      S.defaultProps = { isGroup: !1, flatBorders: !1, showBlock: !1, showCancel: !1, showDelete: !1 }
      var C = u.a.create(function (e) {
        return {
          roundCorners: { borderRadius: e.borderRadii.xLarge },
          flatCorners: { borderRadius: e.borderRadii.none },
          cancelButton: { marginHorizontal: e.spaces.space16, marginVertical: e.spaces.space16 },
        }
      })
      t.a = S
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
        _ = n.n(g),
        E = n('1YZw'),
        O = n('zh9S'),
        S = n('P1r1'),
        C = n('AspN'),
        w = n('rxPX'),
        R = Object(w.a)()
          .propsFromState(function () {
            return { dataSaverMode: S.k }
          })
          .propsFromActions(function () {
            return {
              addMedia: C.b,
              addToast: E.b,
              processMultipleMedia: C.g,
              removeMediaUpload: C.i,
              scribeAction: O.c,
              preUploadMedia: C.e,
            }
          }),
        I = n('wpu3'),
        k = n('cOB2'),
        P = n('MWbm'),
        x = n('0FVZ'),
        T = n('Oe3h'),
        A = n('rHpw')
      var M = function (e) {
          var t = e.accessibilityLabel,
            n = e.accessibilityRole,
            r = e.children,
            i = e.onLayout,
            o = e.sideNavPresent,
            c = e.style,
            s = _.a.useContext(k.a)
          return o
            ? _.a.createElement(
                _.a.Fragment,
                null,
                _.a.createElement(P.a, { accessibilityLabel: t, accessibilityRole: n, onLayout: i, style: c }, r),
              )
            : _.a.createElement(
                x.a.BottomComposer,
                null,
                _.a.createElement(T.a, { id: 'DMComposerWrapper' }, function (e, o) {
                  return _.a.createElement(
                    P.a,
                    a()({ ref: e() }, o({ accessibilityLabel: t, accessibilityRole: n, onLayout: i, style: c })),
                    r,
                    _.a.createElement(P.a, { style: !1 === s.keyboardVisible && j.offsetBottom }),
                  )
                }),
              )
        },
        j = A.a.create(function () {
          return { offsetBottom: { paddingBottom: A.a.iPhoneOffsetBottom } }
        }),
        D = (n('2G9S'), n('jQ/y'), n('HPNB')),
        L = n('htQn'),
        F = n('t62R')
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
      var N = (function (e) {
          p()(n, e)
          var t = B(n)
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
                  return _.a.createElement(
                    L.a,
                    {
                      accessibilityRole: 'button',
                      onClick: this._handleClick,
                      style: [H.root, n && H.isWide, !n && H.isNarrow],
                    },
                    _.a.createElement(F.b, { weight: 'bold' }, r),
                    _.a.createElement(F.b, { color: 'gray700', size: 'subtext2' }, t),
                  )
                },
              },
            ]),
            n
          )
        })(_.a.Component),
        H = A.a.create(function (e) {
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
        U = N,
        V = n('cHvH'),
        W = n('mw9i')
      function z(e) {
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
      var K = (function (e) {
          p()(n, e)
          var t = z(n)
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
                  return _.a.createElement(V.a, null, function (r) {
                    var a = r.windowWidth,
                      i = D.a.isTwoColumnLayout(a),
                      o = [i && G.isWide, i && n && G.oneButtonOnly, !i && G.isNarrow]
                    return _.a.createElement(
                      W.a,
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
                  return _.a.createElement(U, {
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
        })(_.a.Component),
        G = A.a.create(function (e) {
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
        q = K,
        Y = n('krmn'),
        X = n('cIoY'),
        Q = n('w3n3'),
        Z = n('MLl7'),
        J = n('3XMw'),
        $ = n.n(J),
        ee = n('J2UM'),
        te = n('VPdC'),
        ne = n('pKoL'),
        re = n('eyty'),
        ae = n('oQhu'),
        ie = n('JYMr')
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
      var ce = [
          { waitMs: 1e3, progress: 0.1 },
          { waitMs: 1400, progress: 0.3 },
          { waitMs: 1800, progress: 0.5 },
          { waitMs: 2400, progress: 0.6 },
          { waitMs: 3e3, progress: 0.9 },
        ],
        se = (function (e) {
          p()(n, e)
          var t = oe(n)
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
                    t = e >= 0 && e < ce.length ? ce[e].progress : 0
                  return _.a.createElement(ie.a, { progress: t })
                },
              },
              {
                key: '_scheduleNextStep',
                value: function (e) {
                  var t = this
                  e < ce.length &&
                    (this._currentTimeoutId = setTimeout(function () {
                      ;(t._currentTimeoutId = void 0), t.setState({ currentStepIndex: e }), t._scheduleNextStep(e + 1)
                    }, ce[e].waitMs))
                },
              },
            ]),
            n
          )
        })(_.a.Component)
      function le(e) {
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
      var ue = (function (e) {
          p()(n, e)
          var t = le(n)
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
                    ? _.a.createElement(se, null)
                    : _.a.createElement(ie.a, { progress: t ? Math.max(r, 0.02) : 0 })
                },
              },
            ]),
            n
          )
        })(_.a.PureComponent),
        de = n('Dtul'),
        pe = n('Es6L'),
        fe = 'dmComposerAttachments',
        he = 'dmComposerTextInput',
        me = 'dmComposerSendButton',
        ve = n('GZwR'),
        ye = n('aITJ'),
        be = n('6OUF'),
        ge = n('9Xij'),
        _e = n('/yvb'),
        Ee = n('OiMc'),
        Oe = n('v6aA'),
        Se = n('gpVt'),
        Ce = n('Lsrn'),
        we = n('k/Ka')
      function Re(e, t) {
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
      function Ie(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Re(Object(n), !0).forEach(function (t) {
                b()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Re(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var ke = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(we.a)(
          'svg',
          Ie(
            Ie({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [Ce.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          _.a.createElement(
            'g',
            null,
            _.a.createElement('path', {
              d: 'M19 13.5H5c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5h14c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5zm0 6H5c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5h14c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5zm0-12H5c-.828 0-1.5-.672-1.5-1.5S4.172 4.5 5 4.5h14c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5z',
            }),
          ),
        )
      }
      ke.metadata = { width: 24, height: 24 }
      var Pe = ke
      function xe(e, t) {
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
      function Te(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? xe(Object(n), !0).forEach(function (t) {
                b()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : xe(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var Ae = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(we.a)(
          'svg',
          Te(
            Te({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [Ce.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          _.a.createElement(
            'g',
            null,
            _.a.createElement('path', {
              d: 'M19 13H5c-.553 0-1-.447-1-1s.447-1 1-1h14c.553 0 1 .447 1 1s-.447 1-1 1zm0 6H5c-.553 0-1-.447-1-1s.447-1 1-1h14c.553 0 1 .447 1 1s-.447 1-1 1zm0-12H5c-.553 0-1-.447-1-1s.447-1 1-1h14c.553 0 1 .447 1 1s-.447 1-1 1z',
            }),
          ),
        )
      }
      Ae.metadata = { width: 24, height: 24 }
      var Me = Ae,
        je = n('iySH')
      function De(e, t) {
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
      function Le(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? De(Object(n), !0).forEach(function (t) {
                b()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : De(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
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
            r = v()(e)
          if (t) {
            var a = v()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      var Be = $.a.ee230734,
        Ne = $.a.ca0ce0e4,
        He = $.a.cdcebd22,
        Ue = $.a.ic8c615d,
        Ve = $.a.a04077c4,
        We = function (e) {
          return !(!e || !e.media)
        },
        ze = Object(I.b)({ maxNumberOfPhotos: 1 }),
        Ke = (function (e) {
          p()(n, e)
          var t = Fe(n)
          function n(e, r) {
            var i, c, s
            o()(this, n),
              (s = t.call(this, e, r)),
              b()(u()(s), '_handleLayout', function (e) {
                var t = s.props.onHeightChange,
                  n = s.state.mediaButtonsCollapsible,
                  r = e.nativeEvent.layout
                r &&
                  (Object(pe.a)() || (t && t(r.height)),
                  r.width <= A.a.theme.breakpoints.small && !n
                    ? s.setState({ mediaButtonsCollapsible: !0 })
                    : r.width > A.a.theme.breakpoints.small && n && s.setState({ mediaButtonsCollapsible: !1 }))
              }),
              b()(u()(s), '_renderQuickReplyPicker', function () {
                var e = s.props.quickReplyOptions,
                  t = s.state.isQuickReplyOpen
                return e && t
                  ? _.a.createElement(q, { onOptionChoose: s._handleQROptionSelection, quickReplyOptions: e })
                  : null
              }),
              b()(u()(s), '_renderComposeBox', function () {
                return _.a.createElement(P.a, { style: Ge.composeBoxContainer }, s._renderMainContent())
              }),
              b()(u()(s), '_renderMainContent', function () {
                var e = s.props,
                  t = e.richTextInputContext,
                  n = e.typeaheadWrapper,
                  r = s.state.value,
                  a = n
                return a
                  ? _.a.createElement(
                      a,
                      {
                        contextText: r,
                        isInline: !0,
                        onTextUpdated: t ? s._handleRichTextChange : s._handlePlainTextChange,
                        onTypeaheadStateChange: s._handleTypeaheadStateChange,
                        source: ve.d.ComposeMessage,
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
                  o = ye.b.isKaiOS() ? He : r || Ne,
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
                return _.a.createElement(
                  be.a,
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
                      style: Ge.composeInput,
                      testID: he,
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
                Object(ae.a)(function (e) {
                  return function (t) {
                    null == e || e(t), s._handleRichTextChange(t)
                  }
                }),
              ),
              b()(
                u()(s),
                '_getHandlePlainTextChange',
                Object(ae.a)(function (e) {
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
                  m = Object(Se.b)(o)
                return _.a.createElement(
                  _.a.Fragment,
                  null,
                  d
                    ? _.a.createElement(
                        P.a,
                        { style: Ge.attachmentContainer, testID: fe },
                        _.a.createElement(
                          ge.a,
                          { ratio: u / l, style: Ge.aspectContainer },
                          _.a.createElement(
                            P.a,
                            { style: Ge.mediaPreviewContainer },
                            _.a.createElement(ne.a, {
                              accessibilityLabel: f || h,
                              mediaItem: d,
                              onClick: s._canEditImage ? s._handleClickMediaDetail : void 0,
                              onEdit: s._canEditImage || s._canEditVideo ? s._handleClickMediaDetail : void 0,
                              onRemove: s._handleRemoveMedia(d.id),
                              resizeIfNeeded: 'width',
                              style: Ge.mediaPreview,
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
                          _.a.createElement(
                            P.a,
                            { style: Ge.gifAttribution },
                            _.a.createElement(X.a, { gifUrl: t.gifUrl, provider: t.provider }),
                          ),
                      )
                    : m && !a
                    ? _.a.createElement(Se.a, {
                        conversationId: n,
                        isCardPreviewTombstoned: r,
                        style: Ge.cardPreviewContainer,
                        urls: m,
                      })
                    : null,
                )
              }),
              b()(u()(s), '_renderEmojiPicker', function () {
                return s.props.withEmojiPicker && ye.b.isDesktopOS()
                  ? _.a.createElement(Y.a, {
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
                  ? _.a.createElement(
                      _e.a,
                      {
                        accessibilityLabel: r,
                        disabled: s._isSendDisabled(),
                        hoverLabel: { label: r },
                        icon: n || void 0,
                        onPress: s._handlePrimaryAction,
                        size: 'medium',
                        style: Ge.actionButton,
                        testID: me,
                        type: n ? 'brandText' : 'brandFilled',
                      },
                      n ? null : r,
                    )
                  : s._renderQRToggleButton()
              }),
              b()(u()(s), '_renderSecondaryActionButton', function () {
                var e = s.props,
                  t = e.secondaryActionDisabledPopoverRenderer,
                  n = e.secondaryActionLabel,
                  r = e.shouldEnableSecondaryActionFunc,
                  a = e.shouldShowSecondaryActionFunc
                if ((a && !a()) || !n) return null
                var i = !r || r(),
                  o = _.a.createElement(
                    _e.a,
                    {
                      accessibilityLabel: n,
                      disabled: !i,
                      onPress: s._handleSecondaryAction,
                      style: Ge.actionButton,
                      type: 'primaryOutlined',
                    },
                    s.props.secondaryActionLabel,
                  )
                return i || !t
                  ? o
                  : _.a.createElement(
                      Ee.a,
                      { enableHover: !0, preferredVerticalOrientation: 'up', renderContent: t, withArrow: !0 },
                      o,
                    )
              }),
              b()(u()(s), '_renderQRToggleButton', function () {
                var e = s.state.isQuickReplyOpen
                return _.a.createElement(_e.a, {
                  accessibilityLabel: Ue,
                  icon: e ? _.a.createElement(Pe, null) : _.a.createElement(Me, null),
                  onPress: s._handleQuickReplyPickerToggle,
                  size: 'medium',
                  style: Ge.actionButton,
                  type: 'brandText',
                })
              }),
              b()(u()(s), '_renderComposer', function () {
                var e = s.props.attachment,
                  t = We(e),
                  n = s._renderComposeBox(),
                  r = s._renderPrimaryActionButton(t),
                  a = s._renderSecondaryActionButton()
                return _.a.createElement(
                  P.a,
                  { style: [Ge.composer, t && Ge.composerWithAttachment] },
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
                return _.a.createElement(
                  P.a,
                  { style: Ge.uploadButtons },
                  i
                    ? _.a.createElement(_e.a, {
                        accessibilityLabel: Be,
                        icon: _.a.createElement(je.a, null),
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
                  t(Le(Le({}, n), {}, { component: 'dm_composer', element: 'toggle', action: 'expand' }))
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
                n(e, { location: re.d.Dm }).then(function (e) {
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
                    : (r({ text: Ve }), u(t))
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
                return !We(s.props.attachment) && ze(e)
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
                  i = We(t),
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
                  Object(ee.a)().then(this._detectKeyboardOrMouse), (this._unlockReload = de.a.acquire())
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
                    c = i || Ne,
                    s = Object(pe.a)(),
                    l = s && t && (t.dtabAll || t.ttsToken) && !t.hide
                  return _.a.createElement(
                    M,
                    {
                      accessibilityLabel: c,
                      accessibilityRole: 'complementary',
                      onLayout: this._handleLayout,
                      sideNavPresent: s,
                      style: [Ge.root, l && Ge.dtabOffset, o],
                    },
                    _.a.createElement(ue, { isSending: n, isUploading: r, progress: n ? Math.max(a, 0.02) : 0 }),
                    this._renderComposer(),
                    this._renderQuickReplyPicker(),
                  )
                },
              },
              {
                key: '_renderMediaPicker',
                value: function () {
                  return _.a.createElement(te.a, {
                    onChange: this._handleAddMediaFiles,
                    style: Ge.mediaPicker,
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
                  return _.a.createElement(Q.a, {
                    dmConversationId: t,
                    enabled: !0,
                    gifSearchKeySource: Z.a.DMComposition,
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
        })(_.a.Component)
      b()(Ke, 'contextType', Oe.a),
        b()(Ke, 'defaultProps', { prefillText: '', withEmojiPicker: !0, withGifPicker: !0, withMediaPicker: !0 })
      var Ge = A.a.create(function (e) {
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
      t.a = R.forwardRef(Ke)
    },
    uHIe: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'DMMediaScreen', function () {
          return _
        })
      n('MvUL'), n('KqXw')
      var r = n('ERkP'),
        a = n.n(r),
        i = (n('WNMA'), n('MMRb')),
        o = n('hqKg'),
        c = n('zh9S'),
        s = n('H9MA'),
        l = n('oEGd'),
        u = function (e, t) {
          return t.match.params.entryId
        },
        d = Object(o.createSelector)(
          u,
          function (e, t) {
            return i.selectEntry(e, u(0, t))
          },
          function (e, t) {
            return t.match.params.conversationId
          },
          s.c,
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
        p = { scribeAction: c.c },
        f = Object(l.g)(d, p),
        h = n('2doW'),
        m = n('UPvq'),
        v = n('wiP2'),
        y = n('lklz'),
        b = n('7JQg'),
        g = n('RCZO'),
        _ = function (e) {
          var t = e.conversationId,
            n = e.dataSaver,
            r = e.history,
            i = e.mediaItem,
            o = e.messageId,
            c = Object(g.b)(i),
            s = Object(g.h)(),
            l = s.handleMediaDetailZoomed,
            u = s.handleMediaItemTapped,
            d = s.hideButtons,
            p = function () {
              var e = t ? '/messages/'.concat(t) : '/messages'
              r.goBack({ backLocation: e })
            }
          return (
            a.a.useEffect(
              function () {
                i || r.replace(t ? '/messages/'.concat(t) : '/messages')
              },
              [r, t, i],
            ),
            i
              ? a.a.createElement(
                  v.a.Configure,
                  { headerless: !0 },
                  a.a.createElement(
                    m.a,
                    { backgroundColor: c, hideButtons: d, mediaItem: i, onCloseButtonPress: p },
                    a.a.createElement(h.a, {
                      dataSaver: n,
                      mediaItems: [i],
                      onDismiss: p,
                      onMediaDetailZoomed: l,
                      onTap: u,
                      videoId: y.b.forDm(o),
                    }),
                  ),
                )
              : null
          )
        }
      t.default = Object(b.c)({ page: 'messages', section: 'media' })(f(_))
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
          return He
        }),
        n.d(t, 'styles', function () {
          return Ue
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
        b = n.n(y),
        g = n('v6aA'),
        _ = n('EbOo'),
        E = n('EPsT'),
        O = (n('WNMA'), n('KqXw'), n('6U7i'), n('M+/F'), n('MMRb')),
        S = n('RqPI'),
        C = n('1YZw'),
        w = n('hqKg'),
        R = n('p9G8'),
        I = n('X/yg'),
        k = n('AQOc'),
        P = n('zh9S'),
        x = n('G6rE'),
        T = n('0KEI'),
        A = n('oEGd'),
        M = function (e, t) {
          return t.match.params.conversationId
        },
        j = function (e, t) {
          var n = M(0, t)
          return O.selectInboxTypeByConversation(e, n)
        },
        D = Object(w.createSelector)(
          function (e, t) {
            return O.selectConversation(e, M(0, t))
          },
          O.selectEntries,
          M,
          function (e, t) {
            return O.selectConversationFetchStatus(e, M(0, t))
          },
          S.o,
          S.q,
          x.e.selectAll,
          function (e, t) {
            var n = j(e, t)
            return Object(I.g)(n)
          },
          j,
          function (e, t, n, r, a, i, o, c, s) {
            var l = e && e.data,
              u = l && Object(k.b)(l, t, o),
              d = u && Object(R.a)(u, i),
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
        L = {
          addToast: C.b,
          block: x.e.block,
          createLocalApiErrorHandler: Object(T.createLocalApiErrorHandlerWithContextFactory)(
            'DIRECT_MESSAGES_CONVERSATION_INFO',
          ),
          disableMentionNotifications: O.disableMentionNotifications,
          disableNotifications: O.disableNotifications,
          enableMentionNotifications: O.enableMentionNotifications,
          enableNotifications: O.enableNotifications,
          fetchConversationIfNeeded: O.fetchConversationIfNeeded,
          leaveConversation: O.leaveConversation,
          muteDMUser: O.muteDMUser,
          scribeAction: P.c,
          unblock: x.e.unblock,
          unmuteDMUser: O.unmuteDMUser,
          updateConversationName: O.updateConversationName,
        },
        F = Object(A.g)(D, L),
        B = n('aWyx'),
        N = n('I2k/'),
        H = n('aA19'),
        U = n('pHkl'),
        V = n('v//M'),
        W = n('Gpeq'),
        z = n('XnpN'),
        K = n('3XMw'),
        G = n.n(K),
        q = n('tuLS'),
        Y = n('M2mT'),
        X = n('u0B7'),
        Q = n('Re5t'),
        Z = n('hqDb'),
        J = n('MWbm'),
        $ = n('mjJ+'),
        ee = n('mw9i'),
        te = n('5mJL'),
        ne = n('t62R'),
        re = n('0yYu'),
        ae = n('6vad'),
        ie = n('jtO7'),
        oe = n('CK8+'),
        ce = n('rHpw'),
        se = n('7JQg'),
        le = n('mN6z'),
        ue = n('fs1G')
      function de(e, t) {
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
      function pe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? de(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : de(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function fe(e) {
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
      var he = G.a.e3e58b6d,
        me = G.a.a9ddbb94,
        ve = G.a.abd845fd,
        ye = G.a.g2fd3205,
        be = G.a.eb1bb5a1,
        ge = G.a.c6026009,
        _e = G.a.eb75875d,
        Ee = G.a.a7f20222,
        Oe = G.a.g2f04a6a,
        Se = G.a.i453fedf,
        Ce = G.a.b3dfd519,
        we = G.a.cc7c8ce6,
        Re = G.a.hab58673,
        Ie = G.a.e3c6e080,
        ke = {
          confirmButtonLabel: G.a.bb1d57b6,
          actionTextDelete: G.a.ad63377d,
          actionTextLeave: G.a.g9074da4,
          header: G.a.gdf4b79f,
          text: G.a.h09b49f7,
        },
        Pe = G.a.i6b19b07,
        xe = G.a.j7bb1a42,
        Te = G.a.fcd4d489,
        Ae = G.a.a30e1677,
        Me = G.a.a9fd20be,
        je = G.a.e133be4e,
        De = G.a.c9623eeb,
        Le = G.a.cceeaf2b,
        Fe = G.a.d87bff5a,
        Be = [
          { duration: 1, displayText: G.a.j37c4674, toast: G.a.je7e1fec, toastOld: G.a.hf94a2d5 },
          { duration: 2, displayText: G.a.fb7a43c5, toast: G.a.e95c8f8a, toastOld: G.a.bd54fad1 },
          { duration: 3, displayText: G.a.cb5bf56e, toast: G.a.gb7a130b, toastOld: G.a.f6fce0fd },
          { duration: 0, displayText: G.a.cabeb6c1, toast: G.a.i78153dd, toastOld: G.a.hfc86556 },
        ],
        Ne = { page: 'messages', section: 'conversation_settings' },
        He = (function (e) {
          u()(n, e)
          var t = fe(n)
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
                    Object(z.a)(t, n).map(function (e) {
                      return e.user
                    })
                return (a && a[0]) || null
              }),
              v()(s()(r), '_renderContent', function () {
                var e = r.props.conversation,
                  t = !(null != e && e.trusted)
                return b.a.createElement(g.a.Consumer, null, function (e) {
                  e.featureSwitches
                  return b.a.createElement(
                    J.a,
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
                  return b.a.createElement($.a, { items: r._getItems(), onCloseRequested: e })
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
                    t({ action: { label: je, onAction: r._handleUnblockUser }, text: Me })
                  }, a(_.a)),
                  r._scribeAction('block'))
              }),
              v()(s()(r), '_handleUnblockUser', function () {
                var e = r._getSenderOfOneToOneConvo(),
                  t = e ? e.id_str : '',
                  n = r.props,
                  a = n.createLocalApiErrorHandler
                ;(0, n.unblock)(t).catch(a(X.a)), r._scribeAction('unblock')
              }),
              v()(s()(r), '_handleReportConversation', function () {
                r._scribeAction('report')
              }),
              v()(s()(r), '_handleFetch', function () {
                var e = r.props,
                  t = e.conversationId,
                  n = e.createLocalApiErrorHandler
                ;(0, e.fetchConversationIfNeeded)({ conversationId: t }).catch(n(Object(N.a)(t)))
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
                var l = (null == n ? void 0 : n.type) === B.a.GROUP ? 'leave_group' : 'delete_thread',
                  u = (null == s || null === (e = s.state) || void 0 === e ? void 0 : e.position) || 0,
                  d = null != n && n.participants ? Object.keys(n.participants).length : 0,
                  p = {
                    conversation_type: (null == n ? void 0 : n.type) === B.a.GROUP ? 1 : 0,
                    conversation_id: a,
                    conversation_participant_count: d,
                    position: u,
                    inbox_type: Object(I.h)(o),
                    entry_point: U.b.CONVERSATION_INFO,
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
                    c = Oe({ name: o })
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
                  pe(
                    pe({}, t.scribeNamespace),
                    {},
                    {
                      component: 'dm_existing_conversation_dialog',
                      action: e ? 'disable_mentions' : 'enable_mentions',
                    },
                  ),
                ),
                  e
                    ? o({ conversationId: a }).then(function () {
                        n({ text: Re })
                      }, i({ showToast: !0 }))
                    : c({ conversationId: a }).then(function () {
                        n({ text: Ie })
                      }, i({ showToast: !0 }))
              }),
              v()(s()(r), '_handleConversationClose', function () {
                r._returnToInbox()
              }),
              v()(s()(r), '_returnToInbox', function () {
                var e = r.props,
                  t = e.history,
                  n = e.inboxType
                t.push(Object(I.e)(n))
              }),
              v()(s()(r), '_scribeAction', function (e, t) {
                var n = r.props,
                  a = n.scribeAction,
                  i = n.scribeComponent
                a(pe(pe({}, n.scribeNamespace), {}, { component: i, action: e }), t || r._getScribeData())
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
                  return !Object(le.a)(e, this.props) || !Object(le.a)(t, this.state)
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
                  return b.a.createElement(
                    Y.a,
                    {
                      backLocation: '/messages/'.concat(n),
                      screenType: 'secondaryDetail',
                      title: a ? me : he,
                      withBottomTabBar: !1,
                    },
                    b.a.createElement(
                      ee.a,
                      { style: Ue.root },
                      b.a.createElement(V.a, {
                        accessibilityLabel: Fe,
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
                    i = (null == t ? void 0 : t.type) === B.a.GROUP,
                    o = null == t ? void 0 : t.trusted
                  return i
                    ? b.a.createElement(
                        te.a,
                        {
                          avatarCell: b.a.createElement(H.a, { conversation: t, perspective: a }),
                          cellStyle: Ue.groupSectionRight,
                          style: Ue.groupSection,
                        },
                        b.a.createElement(ne.b, { numberOfLines: 1, weight: 'bold' }, r),
                        o
                          ? b.a.createElement(ne.b, { link: '/messages/'.concat(n, '/group-info'), style: Ue.edit }, ve)
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
                    i = (null == t ? void 0 : t.type) === B.a.GROUP,
                    o = null == t ? void 0 : t.trusted
                  return b.a.createElement(
                    J.a,
                    null,
                    i
                      ? b.a.createElement(
                          b.a.Fragment,
                          null,
                          b.a.createElement(re.a, null),
                          b.a.createElement(ae.b, { text: ye }),
                        )
                      : null,
                    b.a.createElement(Z.a, {
                      displayMode: Q.a.UserCompact,
                      userIds: a,
                      withFinalItemBorder: i,
                      withItemBorder: !0,
                    }),
                    r
                      ? b.a.createElement(ie.a, {
                          color: 'primary',
                          label: be,
                          link: '/messages/'.concat(n, '/participants'),
                          onClick: this._handleViewPeople,
                        })
                      : null,
                    i && o
                      ? b.a.createElement(ie.a, { color: 'primary', label: ge, link: '/messages/'.concat(n, '/add') })
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
                    a = Ee({ name: r })
                  return n
                    ? b.a.createElement(
                        J.a,
                        { accessibilityRole: 'label' },
                        b.a.createElement(
                          J.a,
                          { style: Ue.notificationsToggleContainer },
                          b.a.createElement(ne.b, { color: 'normal' }, a),
                          b.a.createElement(oe.a, { onValueChange: this._handleNotificationsEnabled(), value: n }),
                        ),
                        t
                          ? b.a.createElement(
                              ne.b,
                              { color: 'gray700', size: 'subtext2', style: Ue.notificationsDescription },
                              this._displayExpirationTime(),
                            )
                          : null,
                      )
                    : b.a.createElement(
                        J.a,
                        { style: Ue.notificationsToggleContainer },
                        b.a.createElement(ne.b, { color: 'normal' }, a),
                        b.a.createElement(
                          q.a,
                          { accessibilityLabel: a, renderMenu: this._renderActionMenu() },
                          b.a.createElement(oe.a, { onValueChange: ue.a, value: n }),
                        ),
                      )
                },
              },
              {
                key: '_renderSnoozeMentionsSwitch',
                value: function () {
                  var e = this.props.mentionNotificationsDisabled
                  return b.a.createElement(
                    J.a,
                    null,
                    b.a.createElement(
                      J.a,
                      { accessibilityRole: 'label', style: Ue.notificationsToggleContainer },
                      b.a.createElement(ne.b, { color: 'normal' }, Ce),
                      b.a.createElement(oe.a, { onValueChange: this._handleMentionSwitchChanged, value: e }),
                    ),
                    b.a.createElement(
                      ne.b,
                      { color: 'gray700', size: 'subtext2', style: Ue.notificationsDescription },
                      we,
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
                    : b.a.createElement(
                        J.a,
                        null,
                        b.a.createElement(re.a, null),
                        b.a.createElement(ae.b, { text: _e }),
                        b.a.createElement(J.a, null, this._renderSnoozeConversationSwitch()),
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
                  return Se({ expiration: a })
                },
              },
              {
                key: '_renderConversationActions',
                value: function () {
                  var e = this.props.conversation,
                    t = (null == e ? void 0 : e.type) !== B.a.GROUP,
                    n = !(null != e && e.trusted)
                  return b.a.createElement(
                    J.a,
                    null,
                    b.a.createElement(re.a, null),
                    t ? this._renderBlockUserButton() : null,
                    this._renderReportConversationButton(),
                    b.a.createElement(E.a, {
                      confirmationSheetConfirmButtonLabel: ke.confirmButtonLabel,
                      confirmationSheetConfirmButtonType: 'destructiveFilled',
                      confirmationSheetHeadline: ke.header,
                      confirmationSheetText: ke.text,
                      label: n ? ke.actionTextDelete : ke.actionTextLeave,
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
                    r = n ? Le({ screenName: t }) : Ae({ screenName: t }),
                    a = n ? De({ screenName: t }) : Te({ screenName: t })
                  return e
                    ? null
                    : b.a.createElement(E.a, {
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
                      (null == t ? void 0 : t.type) !== B.a.GROUP
                        ? xe({ screenName: this._getScreenNameOfOneToOneConvo() })
                        : Pe,
                    o = {
                      pathname: '/i/report/dm_conversation/'.concat(n),
                      state: { clientReferer: window.location.pathname, scribeNamespace: Ne, inboxType: r },
                    }
                  return a
                    ? null
                    : b.a.createElement(ie.a, {
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
        })(b.a.Component),
        Ue = ce.a.create(function (e) {
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
      t.default = Object(se.c)(Ne)(F(He))
    },
    zQEV: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return f
      }),
        n.d(t, 'a', function () {
          return m
        })
      n('z84I'), n('ho0z')
      var r = n('ERkP'),
        a = n.n(r),
        i = n('t62R'),
        o = n('aWyx'),
        c = n('3XMw'),
        s = n.n(c),
        l = s.a.c1d4ac83,
        u = s.a.abc7b032,
        d = s.a.i263b293,
        p = function (e) {
          var t = e.children,
            n = e.conversationId
          return a.a.createElement(i.b, { link: '/messages/'.concat(n, '/participants') }, t)
        },
        f = function (e, t) {
          return e >= 2
            ? a.a.createElement(
                s.a.I18NFormatMessage,
                { $i18n: 'e3534476' },
                a.a.createElement(p, { conversationId: t }, s.a.d1242bcc({ count: e })),
              )
            : a.a.createElement(s.a.I18NFormatMessage, { $i18n: 'b6656850', count: e })
        },
        h = function (e) {
          var t = e.entry,
            n = e.users
          return t.participants
            ? a.a.createElement(
                'span',
                null,
                t.participants.map(function (e, t) {
                  var r = e.user_id,
                    o = n[r]
                  return o
                    ? a.a.createElement('span', { key: t }, t > 0 ? ', ' : null, a.a.createElement(i.b, null, o.name))
                    : null
                }),
              )
            : null
        },
        m = function (e, t, n, r) {
          var c,
            p = n === e.by_user_id
          switch (t) {
            case o.b.CONVERSATION_AVATAR_UPDATE:
              return (c = e.by_user_id && r[e.by_user_id] && r[e.by_user_id].name)
                ? p
                  ? l
                  : (function (e) {
                      return a.a.createElement(
                        s.a.I18NFormatMessage,
                        { $i18n: 'bff29c94' },
                        a.a.createElement(i.b, null, e),
                      )
                    })(c)
                : u
            case o.b.CONVERSATION_NAME_UPDATE:
              var f = a.a.createElement(i.b, null, e.conversation_name)
              return (c = e.by_user_id && r[e.by_user_id] && r[e.by_user_id].name)
                ? p
                  ? (function (e) {
                      return a.a.createElement(s.a.I18NFormatMessage, { $i18n: 'b16e4d45' }, e)
                    })(f)
                  : (function (e, t) {
                      return a.a.createElement(
                        s.a.I18NFormatMessage,
                        { $i18n: 'c5760698' },
                        a.a.createElement(i.b, null, e),
                        t,
                      )
                    })(c, f)
                : (function (e) {
                    return a.a.createElement(s.a.I18NFormatMessage, { $i18n: 'a72730a0' }, e)
                  })(f)
            case o.b.JOIN_CONVERSATION:
              return (c = e.sender_id && r[e.sender_id] && r[e.sender_id].name)
                ? (function (e) {
                    return a.a.createElement(
                      s.a.I18NFormatMessage,
                      { $i18n: 'fa95b019' },
                      a.a.createElement(i.b, null, e),
                    )
                  })(c)
                : d
            case o.b.PARTICIPANTS_LEAVE:
              return (function (e) {
                return a.a.createElement(s.a.I18NFormatMessage, { $i18n: 'fc10875e' }, e)
              })(a.a.createElement(h, { entry: e, users: r }))
            case o.b.PARTICIPANTS_JOIN:
              return (function (e, t) {
                return e
                  ? a.a.createElement(s.a.I18NFormatMessage, { $i18n: 'a4bc88c2' }, a.a.createElement(i.b, null, e), t)
                  : a.a.createElement(s.a.I18NFormatMessage, { $i18n: 'bfdff0c3' }, t)
              })(
                (c = e.sender_id && r[e.sender_id] && r[e.sender_id].name),
                a.a.createElement(h, { entry: e, users: r }),
              )
            default:
              return ''
          }
        }
    },
  },
])
//# sourceMappingURL=WIPED
