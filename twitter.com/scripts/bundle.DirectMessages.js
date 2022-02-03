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
        s = n('M2x3'),
        c = 'settingsAppBar',
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
            icon: a.a.createElement(s.a, null),
            link: r,
            onPress: t,
            pullRight: n,
            style: m.button,
            testID: c,
            type: 'primaryText',
          })
        }),
        m = u.a.create(function (e) {
          return { button: { marginVertical: 'calc(-'.concat(e.spaces.space12, ')') } }
        })
      t.a = f
    },
    '/FNr': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'default', function () {
          return I
        })
      n('MvUL'), n('KqXw'), n('uFXj')
      var r,
        a = n('ERkP'),
        i = n.n(a),
        o = n('+Kfv'),
        s = n('i4Oy'),
        c = n('KEM+'),
        l = n.n(c),
        u =
          (n('7x/C'),
          n('lTEL'),
          n('kYxP'),
          n('+KXO'),
          n('1t7P'),
          n('LW0h'),
          n('daRM'),
          n('jwue'),
          n('+oxZ'),
          n('FtHn'),
          n('mw9i')),
        d = n('4AMG'),
        p = (n('enFi'), n('NjAB')),
        f = (n('aWzz'), n('sl05')),
        m = n('n0Rl'),
        h = n('h3MB')
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
                l()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : v(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var b = void 0 !== r ? r : (r = n('GjeS')),
        g = Object(m.b)(b, { errorConfig: { context: 'DM_CONVERSATION_TIMELINE' } })
      function _(e) {
        var t = e.conversationId,
          n = e.isWide,
          r = i.a.useCallback(
            function (e) {
              if ('loaded' !== e.fetchStatus) return null
              var t = null == e ? void 0 : e.data
              if (!t) return null
              var r = (function (e) {
                var t,
                  n,
                  r,
                  a,
                  i,
                  o =
                    null == e ||
                    null === (t = e.dm_conversation_by_rest_id) ||
                    void 0 === t ||
                    null === (n = t.legacy_conversation_slice) ||
                    void 0 === n
                      ? void 0
                      : n.items
                if (!o || !o.length) return null
                var s,
                  c =
                    null === (r = o[0]) ||
                    void 0 === r ||
                    null === (a = r.dm_event) ||
                    void 0 === a ||
                    null === (i = a.legacy) ||
                    void 0 === i
                      ? void 0
                      : i.conversation,
                  l = Object(p.b)(o, [h.b]),
                  u = Object(p.b)([c], [h.a]).entities.conversations
                for (var d in u) {
                  s = u[d]
                  break
                }
                var f = l.entities.entries,
                  m = []
                for (var v in f) m.push(f[v])
                return y(y({}, s), {}, { participants: [], entries: m })
              })(t)
              return r
                ? i.a.createElement(
                    u.a,
                    { style: f.a.root },
                    i.a.createElement(d.a, {
                      conversation: r,
                      inboxType: 'primary',
                      isWide: n,
                      onHistoryRequest: function () {},
                      perspective: '',
                      scribeNamespace: {},
                      style: f.a.activity,
                    }),
                  )
                : null
            },
            [n],
          )
        return t ? i.a.createElement(g, { fetchPolicy: 'store-and-network', render: r, variables: { id: t } }) : null
      }
      var E = n('3XMw'),
        O = n.n(E),
        S = n('M2mT'),
        C = n('rHpw'),
        w = n('aITJ'),
        k = n('Ty5D'),
        R = O.a.d4986f85
      function I(e) {
        var t = e.history,
          n = e.isNewGroupConversation,
          r = e.richTextInputContext,
          a = e.typeaheadWrapper,
          c = Object(k.i)().conversationId,
          l = Object(k.h)()
        c || n || l.pathname !== window.location.pathname || t.replace({ pathname: '/messages' })
        var u = 'string' == typeof l.query.text ? l.query.text : void 0,
          d = s.a.get('window').width >= C.a.theme.breakpoints.small,
          p = function (e) {
            e()
          }
        return i.a.createElement(
          S.a,
          {
            backLocation: '/messages',
            onBackClick: p,
            documentTitle: 'Unformatted title placeholder',
            title: R,
            titleIconCell: i.a.createElement('span', null, 'Title icon cell'),
            titleIconCellSize: 'medium',
            subtitle: 'Subtitle placeholder',
            screenType: 'primaryDetail',
            withBottomTabBar: !1,
            headerless: w.b.isKaiOS(),
          },
          i.a.createElement(
            o.a,
            { viewType: 'messages' },
            i.a.createElement(_, {
              conversationId: c || void 0,
              history: t,
              isWide: d,
              prefillText: u,
              richTextInputContext: r,
              typeaheadWrapper: a,
            }),
          ),
        )
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
                    if (s(e) || s(t)) return !1
                    if (e.prototype !== t.prototype) return !1
                    if (i(e)) return !!i(t) && ((e = r.call(e)), (t = r.call(t)), o(e, t, n))
                    if (c(e)) {
                      if (!c(t)) return !1
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
      function s(e) {
        return null == e
      }
      function c(e) {
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
        s = n('1Pcy'),
        c = n.n(s),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('N+ot'),
        p = n.n(d),
        f = n('AuHH'),
        m = n.n(f),
        h = n('KEM+'),
        v = n.n(h),
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
      function k(e) {
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
            r = m()(e)
          if (t) {
            var a = m()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var I = O.a.isTouchSupported(),
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
          var t = R(n)
          function n(e) {
            var r
            return (
              a()(this, n),
              (r = t.call(this, e)),
              v()(c()(r), '_itemDimensions', x),
              v()(c()(r), '_ref', b.a.createRef()),
              v()(c()(r), '_setTouchableNode', function (e) {
                r._touchableNode !== e &&
                  ((r._touchableNode = e),
                  r._removeTouchListener && r._removeTouchListener(),
                  r._touchableNode && (r._removeTouchListener = Object(g.a)(r._touchableNode, r._handleTouchMove, !1)))
              }),
              v()(c()(r), '_handleTouchStart', function (e) {
                r._ref.current && (r._zoomedDimensions = r._ref.current.getBoundingClientRect()), (r._moved = !1)
                var t = e.touches.length
                2 === t ? (e.preventDefault(), r._handlePinchStart(e)) : 1 === t && r._handleTapStart(e)
              }),
              v()(c()(r), '_handleTouchMove', function (e) {
                var t = e.touches.length
                2 === t ? r._handlePinchMove(e) : 1 === t && ((r._moved = !0), r._handlePanMove(e)), e.preventDefault()
              }),
              v()(c()(r), '_handleTouchEnd', function (e) {
                var t = r.props,
                  n = t.maxZoom,
                  a = t.minZoom,
                  i = t.onTap,
                  o = T(a, n, r.state.zoom),
                  s = r.state.zoom
                s !== o && 1 === o ? r.resetZoom() : r.setState({ lastX: 0, lastY: 0, zoom: o }),
                  0 === e.touches.length
                    ? (r._lastTouchTime && r._lastTouchTime + 300 > e.timeStamp
                        ? (r._clickTimer && clearTimeout(r._clickTimer), r._handleDoubleTap(e))
                        : s <= 1 && !r._moved && (r._clickTimer = setTimeout(i, 300)),
                      (r._lastTouchTime = e.timeStamp))
                    : e.preventDefault()
              }),
              (r.state = k({}, P)),
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
                          s = a.zoomCenter,
                          c = s.x,
                          l = s.y,
                          u = this._windowDimensions,
                          d = u.height,
                          p = u.width,
                          f = this._zoomedDimensions,
                          m = f.height,
                          h = 0,
                          v = 0
                        f.width - p > 0 && (h = n - i),
                          m - d > 0 && (v = r - o),
                          this.setState({
                            lastX: n,
                            lastY: r,
                            zoomCenter: { x: Math.min(Math.max(c - h, 0), p), y: Math.min(Math.max(l - v, 0), d) },
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
                      s = a.minZoom,
                      c = a.minZoomBounce
                    if (0 !== r.x || 0 !== r.y) {
                      var l = A(e.touches[0], e.touches[1]),
                        u = this._lastDistance ? l / this._lastDistance : 1,
                        d = T(s - c, i + o, n * u)
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
                    return I && e.resetZoom ? (e.onZoomed(!1), k({}, P)) : t
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
    '21nk': function (e, t, n) {
      'use strict'
      var r = n('I9iR'),
        a = n('3KVO'),
        i = n('yLYC'),
        o = n('Ud88'),
        s = (n('/2Cm'), n('aQQo').useTrackLoadQueryInRender),
        c = (n('ERkP').useDebugValue, n('K1lQ').__internal),
        l = c.fetchQueryDeduped,
        u = c.fetchQuery
      e.exports = function (e, t, n) {
        s()
        var c,
          d = o(),
          p = t.fetchKey,
          f = t.fetchPolicy,
          m = t.source,
          h = t.variables,
          v = t.networkCacheConfig,
          y = i(e, h, v)
        if ('PreloadedQuery_DEPRECATED' === t.kind)
          y.request.node.params.name !== t.name && r(!1),
            (c = {
              componentDisplayName: 'usePreloadedQuery()',
              fetchKey: p,
              fetchObservable: l(d, y.request.identifier, function () {
                return d === t.environment && null != m
                  ? d.executeWithSource({ operation: y, source: m })
                  : d.execute({ operation: y })
              }),
              fetchPolicy: f,
              query: y,
              renderPolicy: null == n ? void 0 : n.UNSTABLE_renderPolicy,
            })
        else {
          var b = u(d, y)
          c = {
            componentDisplayName: 'usePreloadedQuery()',
            fetchObservable: null != m && d === t.environment ? m.ifEmpty(b) : (t.environment, b),
            fetchKey: p,
            fetchPolicy: f,
            query: y,
            renderPolicy: null == n ? void 0 : n.UNSTABLE_renderPolicy,
          }
        }
        return a(c)
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
        s = n('5Yy7'),
        c = n.n(s),
        l = n('N+ot'),
        u = n.n(l),
        d = n('AuHH'),
        p = n.n(d),
        f = n('KEM+'),
        m = n.n(f),
        h = (n('uFXj'), n('ERkP')),
        v = n.n(h),
        y = n('LCtV'),
        b = n('3XMw'),
        g = n.n(b),
        _ = n('VPdC'),
        E = n('pKoL'),
        O = n('MWbm'),
        S = n('rFBM'),
        C = n('/yvb'),
        w = n('9Xij'),
        k = n('rHpw'),
        R = n('hOZg'),
        I = n('Mbn/'),
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
          c()(n, e)
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
                    s = e.rootStyle,
                    c = e.withDragDrop,
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
                    { style: [D.container, s, j[t]] },
                    c && a ? v.a.createElement(S.a, { onFilesAdded: a, style: [D.dragDropContainer, j[t]] }, u) : u,
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
                    icon: v.a.createElement(R.a, null),
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
                    icon: v.a.createElement(I.a, null),
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
      m()(M, 'defaultProps', { acceptGifs: !1, acceptVideo: !1, aspectRatio: 1, borderRadius: y.a.NONE })
      var j = k.a.create(function (e) {
          return {
            infinite: { borderRadius: e.borderRadii.infinite },
            medium: { borderRadius: e.borderRadii.small },
            none: { borderRadius: e.borderRadii.none },
          }
        }),
        D = k.a.create(function (e) {
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
        s = n('1Pcy'),
        c = n.n(s),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('N+ot'),
        p = n.n(d),
        f = n('AuHH'),
        m = n.n(f),
        h = n('KEM+'),
        v = n.n(h),
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
        k = n.n(w),
        R = n('mN6z'),
        I = n('U+bB'),
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
            r = m()(e)
          if (t) {
            var a = m()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var B = k.a.b327c129,
        N = k.a.gff1f69e,
        U = (function (e) {
          u()(n, e)
          var t = F(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              v()(c()(e), 'state', { loadingVariant: null, imageLoading: !1 }),
              v()(c()(e), '_handleLoadStart', function () {
                return e.setState({ imageLoading: !0 })
              }),
              v()(c()(e), '_handleLoadEnd', function () {
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
                      s = e.onZoomed,
                      c = e.photo,
                      l = e.resetZoom,
                      u = e.style,
                      d = e.zoomable,
                      p = this.state.loadingVariant,
                      f = (t && p && Math.max(p.width, p.height) >= 680 ? p.uri : null) || n._selectSource(c)
                    if (!f || null === p) return null
                    var m = b.a.createElement(I.a, {
                      accessibilityLabel: c.ext_alt_text ? c.ext_alt_text : B,
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
                    return b.a.createElement(
                      P.a,
                      { style: u },
                      this.state.imageLoading ? K : null,
                      d ? b.a.createElement(x.a, { onTap: o, onZoomed: s, resetZoom: l }, m) : m,
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
      v()(U, 'defaultProps', { zoomable: !1 })
      var H = M.a.create(function (e) {
          return {
            img: L(
              L({}, M.a.absoluteFillObject),
              {},
              { height: 'auto', margin: 'auto', maxHeight: '100%', maxWidth: '100%', width: 'auto' },
            ),
            progressBar: { position: 'absolute', top: 0, zIndex: 1 },
          }
        }),
        K = b.a.createElement(j.a, { ariaValueText: N, indeterminate: !0, style: H.progressBar }),
        V = U,
        W = n('RCZO'),
        z = n('Modb'),
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
            r = m()(e)
          if (t) {
            var a = m()(this).constructor
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
              v()(c()(e), '_handlePlaybackStarted', function () {
                e._player && !e.props.isCurrentlyDisplayed && e._player.pause()
              }),
              v()(c()(e), '_setPlayer', function (t) {
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
                    z.a,
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
            r = m()(e)
          if (t) {
            var a = m()(this).constructor
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
              v()(c()(e), '_pullDistanceY', 0),
              v()(c()(e), '_pullInfo', J({}, ee)),
              v()(c()(e), '_handleTouchStart', function (t) {
                ;(e._pullInfo.startX = t.touches[0].clientX), (e._pullInfo.startY = t.touches[0].clientY)
              }),
              v()(c()(e), '_handleTouchMove', function (t) {
                if ('number' == typeof e._pullInfo.startX && 'number' == typeof e._pullInfo.startY) {
                  var n = t.touches[0],
                    r = n.clientX - e._pullInfo.startX,
                    a = n.clientY - e._pullInfo.startY
                  Math.abs(r) > 10 || (t.preventDefault(), e._updatePullPosition(a))
                }
              }),
              v()(c()(e), '_handleTouchEnd', function (t) {
                Math.abs(e._pullDistanceY) > 50 ? e._handleDismiss() : e._resetPullInfo()
              }),
              v()(c()(e), '_updatePullPosition', function (t) {
                e._pullDistanceY = t
              }),
              v()(c()(e), '_handleDismiss', function () {
                var t = e.props.onDismiss
                t && t(), e._resetPullInfo()
              }),
              v()(c()(e), '_resetPullInfo', function () {
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
        ae = k.a.ac85c6b1,
        ie = function (e) {
          var t = e.isAvatar,
            n = e.isCurrentlyDisplayed,
            r = e.mediaDetail,
            a = e.onDismiss,
            i = e.onTap,
            o = e.promotedContent,
            s = e.videoId,
            c = C()(e, [
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
            m = O()(f, 2),
            h = m[0],
            v = m[1],
            y = b.a.useContext(ne.b).isModal,
            g = r.original_info || {},
            E = g.height,
            S = g.width,
            w = h.height,
            k = h.width,
            R =
              y || t
                ? Object(W.f)({ mediaWidth: S, mediaHeight: E, containerWidth: k, containerHeight: w }, t)
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
                      ;(r === h.width && n === h.height) || v({ width: r, height: n })
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
                    style: R,
                  },
                  'photo' === r.type
                    ? b.a.createElement(
                        V,
                        _()({}, c, {
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
                    : G.a.isVideo(r) && s
                    ? b.a.createElement(Q, {
                        isCurrentlyDisplayed: n,
                        promotedContent: o,
                        style: oe.container,
                        video: r,
                        videoId: s,
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
        se = b.a.memo(ie, function (e, t) {
          return Object(R.a)(e, t)
        }),
        ce = n('lklz'),
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
            r = m()(e)
          if (t) {
            var a = m()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var me = (function (e) {
        u()(n, e)
        var t = fe(n)
        function n(e, r) {
          var i
          return (
            a()(this, n),
            (i = t.call(this, e, r)),
            v()(c()(i), '_handleChangeV2', function (e) {
              var t = e.index,
                n = e.intersectionRatio,
                r = i.props.onMediaItemChanged
              1 === n && r && r(t)
            }),
            v()(c()(i), '_getItemVideoId', function (e) {
              return (
                i.props.videoId ||
                (function (e) {
                  return ce.b.forTweet(e.expanded_url.split('/')[3])
                })(e)
              )
            }),
            v()(c()(i), '_handleMediaDetailZoomed', function (e) {
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
                  s = t.promotedContent,
                  c = this.state.isZoomed,
                  l = a.map(function (t, l) {
                    var u = G.a.isVideo(t),
                      d = e._getItemVideoId(t),
                      p = r === l
                    return (u && d) || !u
                      ? b.a.createElement(se, {
                          dataSaver: n,
                          isAvatar: e.props.isAvatar,
                          isCurrentlyDisplayed: p,
                          key: l,
                          mediaDetail: a[l],
                          onDismiss: c ? void 0 : i,
                          onTap: o,
                          onZoomed: p ? e._handleMediaDetailZoomed : void 0,
                          promotedContent: s,
                          resetZoom: r !== l,
                          videoId: d,
                        })
                      : null
                  })
                return b.a.createElement(P.a, { style: he.root }, a.length > 1 ? this._renderCarousel(l) : l)
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
                  s = G.a.isVideo(a[r])
                return this.context.featureSwitches.isTrue('responsive_web_carousel_v2_media_detail_enabled')
                  ? b.a.createElement(
                      ue.a,
                      {
                        childrenStyle: [he.dimensions, he.scrollSnap],
                        dominantButtonColor: n,
                        isLocked: o,
                        onVisibleRangeChange: this._handleChangeV2,
                        style: he.dimensions,
                        visibleItemIndex: r,
                        withAddedNavButtonClickArea: !s,
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
      v()(me, 'contextType', le.a),
        v()(me, 'defaultProps', { mediaIndex: 0, onMediaDetailZoomed: pe.a, onMediaItemChanged: pe.a })
      var he = M.a.create(function (e) {
        return {
          root: { flex: 1, zIndex: 1 },
          dimensions: { height: '100%', width: '100%' },
          scrollSnap: { scrollSnapAlign: 'center', scrollSnapStop: 'always' },
        }
      })
      t.a = me
    },
    '33Kz': function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return s
      }),
        n.d(t, 'a', function () {
          return c
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
        s = function (e, t) {
          var n = o(t).find(function (t) {
            return t.endsWith(e)
          })
          if (n) return n.split(':')[0]
        },
        c = function (e) {
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
      var s = o(o({}, n('7n04').a), {}, { pinToNewestWhenAtNewest: !0 })
      t.a = s
    },
    '3GUV': function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        i = n('Y9Ll'),
        o = n.n(i),
        s = n('5Yy7'),
        c = n.n(s),
        l = n('N+ot'),
        u = n.n(l),
        d = n('AuHH'),
        p = n.n(d),
        f = n('ERkP'),
        m = n.n(f),
        h = n('rHpw'),
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
          c()(n, e)
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
                  return m.a.createElement(v.a, { style: g.root })
                },
              },
            ]),
            n
          )
        })(m.a.Component),
        g = h.a.create(function (e) {
          return { root: { height: 5 * e.lineHeightsPx.body } }
        })
      t.a = b
    },
    '4AMG': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return hs
      })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        i = n('Y9Ll'),
        o = n.n(i),
        s = n('1Pcy'),
        c = n.n(s),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('N+ot'),
        p = n.n(d),
        f = n('AuHH'),
        m = n.n(f),
        h = n('KEM+'),
        v = n.n(h),
        y = n('ejT/'),
        b = n('ERkP'),
        g = n.n(b),
        _ = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('7n04')),
        E = n('Myq3'),
        O = n('VPAj')
      function S(e, t) {
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
      function C(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? S(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : S(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var w = function (e, t) {
          return e.getForItem(t).doesIntersectWith(e.getForViewport())
        },
        k = function (e) {
          return e.getForList().getBottom() - e.getForViewport().getBottom()
        },
        R = function (e) {
          var t = e.isOwnMessage,
            n = e.typingIndicatorId,
            r = function (e) {
              return Object(E.a)(e.getList(), function (e) {
                return e.id !== n
              })
            }
          return C(
            C({}, _.a),
            {},
            {
              initialScrollHeadroom: Object(O.a)(0),
              scrollHeadroom: Object(O.a)(0),
              offsetCorrection: function (e, a) {
                var i = r(e),
                  o = r(a),
                  s = o && (!i || i.id !== o.id),
                  c = o && t(o.data.data),
                  l = i && w(e, i.id)
                return (s && (c || l)) ||
                  (l &&
                    (function (e, t) {
                      var r = e.getForItem(n),
                        a = t.getForItem(n)
                      return !r || (a && a.getHeight() > r.getHeight())
                    })(e, a))
                  ? Math.max(0, k(a))
                  : _.a.offsetCorrection(e, a)
              },
            },
          )
        },
        I = (n('7x/C'), n('lTEL'), n('kYxP'), n('KOtZ'), n('gbD7')),
        P = (n('Blm6'), n('b9JY')),
        x = function (e, t) {
          if (e && e.message_data && t && t.message_data && Object(P.b)(e) && Object(P.b)(t)) {
            var n = e.message_data,
              r = n.sender_id,
              a = n.time,
              i = t.message_data,
              o = i.sender_id,
              s = i.time,
              c = parseInt(s, 10) - parseInt(a, 10)
            return r === o && c >= 0 && c <= 6e4
          }
          return !1
        },
        T = n('jat/'),
        A = (n('jQ/y'), n('z84I'), n('ho0z'), n('uFXj'), n('v6aA')),
        M = n('XnpN'),
        j = n('LhSm'),
        D = n('I4+6'),
        L = n('rHpw'),
        F = n('PbQQ'),
        B = n('cm6r'),
        N = n('jV+4'),
        U = n('pBrB'),
        H = n('wCd/'),
        K = function (e, t) {
          var n = Object(M.a)(e, t).map(function (e) {
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
        V = L.a.create(function (e) {
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
        W = function (e) {
          var t = e.conversation,
            n = e.withBottomBorder,
            r = void 0 === n || n,
            a = g.a.useContext(A.a).loggedInUserId
          if (!t) return null
          var i = K(t, a || ''),
            o = i.userDescription,
            s = i.userEntities,
            c = i.userFollowerCount,
            l = i.userFriendsCount,
            u = i.userIdStr,
            d = i.userIsVerified,
            p = i.userJoinDate,
            f = i.userName,
            m = i.userScreenName,
            h = i.userWithheldDescription,
            v = i.userWithheldEntities,
            y = !!(f && m && ((c && l) || p)),
            b = D.a.generate({
              color: L.a.theme.colors.text,
              backgroundColor: L.a.theme.colors.transparent,
              customFocusBackgroundColor: L.a.theme.colors.gray0,
              customHoverBackgroundColor: L.a.theme.colors.gray0,
              customPressedBackgroundColor: L.a.theme.colors.activeFaintGray,
            })
          return g.a.createElement(F.a.Consumer, null, function (e) {
            return g.a.createElement(
              B.a,
              {
                interactiveStyles: b,
                link: e.withAnchorless('https://twitter.com/'.concat(m || '')),
                style: [V.root, r && y && V.borderBottom],
              },
              g.a.createElement(N.a, {
                isVerified: d,
                name: f,
                screenName: m,
                style: V.profileInfoItemMargin,
                weight: 'bold',
                withHoverCard: !0,
                withLink: !0,
              }),
              o && s && u
                ? g.a.createElement(U.a, {
                    description: o,
                    entities: s,
                    style: [V.profileInfoItemMargin, V.description],
                    userId: u,
                    withheldDescription: h,
                    withheldEntities: v,
                  })
                : null,
              c && l
                ? g.a.createElement(H.a, {
                    followersCount: c,
                    friendsCount: l,
                    screenName: m || '',
                    style: V.profileInfoItemMargin,
                    withLink: !1,
                  })
                : null,
              p ? g.a.createElement(j.a, { joinDate: p }) : null,
            )
          })
        },
        z = n('V/6K'),
        G = n('cFyg'),
        q = n('MMRb'),
        Y = (n('hBvt'), n('2G9S'), n('M+/F'), n('vrRf'), n('g54k')),
        X = n('aA19'),
        Q = n('aWyx'),
        Z = n('mN6z'),
        J = n('MWbm'),
        $ = n('t62R'),
        ee = n('jhWN'),
        te = n('MAI/'),
        ne = n('zQEV')
      function re(e) {
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
            var a = m()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var ae = function (e) {
          var t = e.children,
            n = e.link,
            r = e.style
          return g.a.createElement($.b, { align: 'center', color: 'gray700', link: n, size: 'subtext2', style: r }, t)
        },
        ie = (function (e) {
          u()(n, e)
          var t = re(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              v()(c()(e), '_renderContents', function () {
                var t = e.props,
                  n = t.conversation,
                  r = t.entry,
                  a = t.entryType,
                  i = t.perspective,
                  o = t.users,
                  s = Object(ne.a)(r, a, i, o)
                switch (a) {
                  case Q.b.CONVERSATION_AVATAR_UPDATE:
                    var c = n.avatar_image_https === r.conversation_avatar_image_https
                    return g.a.createElement(
                      g.a.Fragment,
                      null,
                      e._isValidImageSource(n.avatar_image_https) && c
                        ? g.a.createElement(
                            J.a,
                            { style: oe.conversationAvatarContainer },
                            g.a.createElement(X.a, { conversation: n, perspective: i }),
                          )
                        : null,
                      g.a.createElement(ae, null, s),
                    )
                  case Q.b.JOIN_CONVERSATION:
                    var l = e._getAddedYouMessageWithProfileInfo(s),
                      u = e._getParticipantsFromEntry(),
                      d = g.a.createElement(
                        $.b,
                        { align: 'center', color: 'gray700', size: 'subtext2' },
                        e._getParticipantsFromEntryText(u),
                      ),
                      p = e._getJoinConversationDetailsWithFacepile(u, d)
                    return g.a.createElement(g.a.Fragment, null, l, p)
                  default:
                    return g.a.createElement(ae, null, s)
                }
              }),
              v()(c()(e), '_getAddedYouMessageWithProfileInfo', function (t) {
                var n = e.props,
                  r = n.entry,
                  a = n.users,
                  i = r.sender_id ? a[r.sender_id] : void 0,
                  o = i ? { pathname: 'https://twitter.com/'.concat(i.screen_name) } : void 0
                return g.a.createElement(
                  B.a,
                  { interactiveStyles: null, link: o, style: oe.userAddedYouContainer },
                  i
                    ? g.a.createElement(ee.a, {
                        accessibilityLabel: i.screen_name,
                        screenName: i.screen_name,
                        size: 'medium',
                        uri: i.profile_image_url_https,
                        withHoverCard: !0,
                        withLink: !0,
                      })
                    : null,
                  g.a.createElement(ae, { link: o, style: oe.userAddedYouText }, t),
                )
              }),
              v()(c()(e), '_getJoinConversationDetailsWithFacepile', function (t, n) {
                var r = e.props.conversation,
                  a = t.slice(0, 20).map(function (e) {
                    return e.profile_image_url_https
                  })
                return g.a.createElement(
                  B.a,
                  {
                    interactiveStyles: null,
                    link: { pathname: '/messages/'.concat(r.conversation_id, '/participants') },
                    style: oe.joinConversationDetails,
                  },
                  n,
                  g.a.createElement(te.a, {
                    style: oe.userAvatarFacepile,
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
                  return !Object(Z.a)(this.props, e)
                },
              },
              {
                key: 'render',
                value: function () {
                  return g.a.createElement(J.a, { style: oe.root }, this._renderContents())
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
                  return Object(ne.b)(e.length, t)
                },
              },
            ]),
            n
          )
        })(g.a.Component),
        oe = L.a.create(function (e) {
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
        se = Object(Y.a)(ie),
        ce = n('ddV6'),
        le = n.n(ce),
        ue = n('oQhu')
      var de = Object(ue.a)(function (e) {
          var t = L.a.theme.spacesPx.space40
          return {
            DMUserAvatarSizeType: 'xLarge',
            DMUserAvatarSizePx: t,
            DMUserAvatarSpacerPx: t + L.a.theme.spacesPx.space12,
          }
        }),
        pe = n('shC7'),
        fe = n('38/B'),
        me = function (e) {
          return he(e, fe.a.reducedMotionEnabled)
        },
        he = Object(ue.a)(function (e, t) {
          var n,
            r,
            a,
            i,
            o,
            s,
            c,
            l,
            u,
            d =
              ((n = de(L.a.theme.scale)),
              (r = n.DMUserAvatarSizePx),
              (a = n.DMUserAvatarSpacerPx),
              (i = ge[L.a.theme.scale]),
              (o = ye / i),
              (s = be / r),
              (l = be - (c = be / 2)),
              (u = be - c - a),
              {
                cssTransition: fe.a.reducedMotionEnabled
                  ? {}
                  : { transition: 'transform '.concat(Ee, ', opacity ').concat(Ee) },
                messageContainer: {
                  base: { transform: [{ translateX: 0 }] },
                  active: {
                    sent: { transform: [{ translateX: (pe.a.getConstants().isRTL ? 1 : -1) * l }] },
                    received: { transform: [{ translateX: (pe.a.getConstants().isRTL ? -1 : 1) * u }] },
                  },
                },
                actionsContainer: {
                  base: { transform: [{ translateX: 0 }] },
                  active: {
                    sent: { transform: [{ translateX: (pe.a.getConstants().isRTL ? 1 : -1) * _e[L.a.theme.scale] }] },
                    received: {
                      transform: [{ translateX: (pe.a.getConstants().isRTL ? -1 : 1) * (_e[L.a.theme.scale] + u) - c }],
                    },
                  },
                },
                voiceMessage: {
                  container: { base: { height: i }, active: { height: ye } },
                  base: { height: i, transform: [{ scale: 1 }] },
                  active: {
                    base: { transform: [{ scale: o }] },
                    sent: {
                      paddingRight: c / o,
                      transformOrigin: pe.a.getConstants().isRTL ? 'bottom left' : 'bottom right',
                    },
                    received: {
                      paddingLeft: c / o,
                      transformOrigin: pe.a.getConstants().isRTL ? 'bottom right' : 'bottom left',
                    },
                  },
                },
                userAvatar: {
                  base: { transform: [{ scale: 1 }] },
                  sent: { transformOrigin: pe.a.getConstants().isRTL ? 'bottom left' : 'bottom right' },
                  received: { transformOrigin: pe.a.getConstants().isRTL ? 'bottom right' : 'bottom left' },
                  active: { opacity: 1, pointerEvents: 'all', transform: [{ scale: s }] },
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
      var ve,
        ye = 60,
        be = ye,
        ge = { xSmall: 42, small: 42, normal: 47, large: 47, xLarge: 47 },
        _e = {
          xSmall: 72.26,
          small: 165.61 - 89.3,
          normal: 158.22 - 94.4,
          large: 166.64 - 100.58,
          xLarge: 181.55 - 111.81,
        },
        Ee = '0.2s 0s ease-in-out',
        Oe = n('+Kfv'),
        Se = n('hqKg'),
        Ce = n('oEGd'),
        we = n('zh9S'),
        ke = n('G6rE'),
        Re = n('P1r1'),
        Ie = { scribeAction: we.c },
        Pe = Object(Se.createSelector)(
          function (e, t) {
            return ke.e.select(e, t.senderId)
          },
          Re.l,
          Re.r,
          function (e, t, n) {
            return { user: e, displaySensitiveMedia: t, isDmNsfwMediaFilterEnabled: n }
          },
        ),
        xe = Object(Ce.g)(Pe, Ie),
        Te = (n('MvUL'), n('KqXw'), n('1YZw')),
        Ae = n('0KEI'),
        Me = {
          addToast: Te.b,
          createLocalApiErrorHandler: Object(Ae.createLocalApiErrorHandlerWithContextFactory)(
            'DIRECT_MESSAGES_OVERFLOW_ACTIONS',
          ),
          deleteEntry: q.deleteEntry,
        },
        je = Object(Ce.b)(Me),
        De = n('k49u'),
        Le = n('LVU8'),
        Fe = n('3XMw'),
        Be = n.n(Fe),
        Ne = Be.a.f58dff33,
        Ue = Be.a.ad5a8e8e,
        He =
          ((ve = {}),
          v()(ve, De.a.MissingParameter, { toast: Object(Le.a)(Ne) }),
          v()(ve, De.a.DirectMessageDestroyPermissionsError, { toast: { text: Ue } }),
          v()(ve, 'showToast', !0),
          ve),
        Ke = (n('jQ3i'), n('x4t0'), n('xCUF')),
        Ve = n('uKEd'),
        We = [],
        ze = Object(Se.createSelector)(
          function (e) {
            return Object(Ve.l)(e).entries
          },
          function (e, t) {
            return Object(Ve.p)(e, t.entry.id) || We
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
        Ge = {
          createReaction: Ve.d,
          createLocalApiErrorHandler: Object(Ae.createLocalApiErrorHandlerWithContextFactory)(
            'DIRECT_MESSAGES_REACTIONS_POPOVER',
          ),
          fetchUpdatesIfNeeded: Ke.d,
          removeReaction: Ve.k,
        },
        qe = Object(Ce.g)(ze, Ge),
        Ye = n('X/yg'),
        Xe = n('RhWx'),
        Qe = n.n(Xe),
        Ze = n('33Kz'),
        Je = n('wTX1'),
        $e = function (e) {
          var t = e.accessibilityLabelFormatter,
            n = e.count,
            r = e.emojiSize,
            a = e.emotion,
            i = e.enableHoverStyle,
            o = e.focusable,
            s = e.onPress,
            c = e.style,
            l = g.a.useContext(A.a).featureSwitches,
            u = Object(Ze.b)(a, l),
            d = t && u ? t({ emoji: u, count: n }) : void 0,
            p = D.a.generate({ backgroundColor: L.a.theme.colors.gray50, color: L.a.theme.colors.gray700 })
          return g.a.createElement(
            B.a,
            {
              accessibilityLabel: d,
              focusable: o,
              interactiveStyles: i ? p : null,
              onPress: s,
              style: [et.container].concat(Qe()(c || [])),
            },
            g.a.createElement($.b, { size: r, style: et.unsetLineHeight }, u),
            n
              ? g.a.createElement(Je.a, { color: 'gray700', containerStyle: et.count, count: n, size: 'subtext3' }, n)
              : null,
          )
        },
        et = L.a.create(function (e) {
          return {
            container: { flexDirection: 'row' },
            count: { alignSelf: 'center', minWidth: e.spaces.space16, paddingLeft: e.spaces.space2 },
            unsetLineHeight: { lineHeight: 'unset' },
          }
        }),
        tt = n('pHkl'),
        nt = n('Irs7')
      function rt(e) {
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
            var a = m()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var at = Be.a.ca7a2214,
        it = Be.a.fc0e94b7,
        ot = (function (e) {
          u()(n, e)
          var t = rt(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              v()(c()(e), '_handleReactionScribing', function (t, n) {
                var r = e.props,
                  a = r.analytics,
                  i = r.entry,
                  o = r.isGroupDM,
                  s = r.participantsCount,
                  c = n ? 'delete_reaction' : 'create_reaction',
                  l = Object(Ye.c)(i)
                a.scribe({
                  section: 'twitter_service',
                  component: 'direct_messages',
                  element: c,
                  action: 'success',
                  data: {
                    conversation_id: i.conversation_id,
                    conversation_participant_count: s,
                    conversation_type: o ? tt.g.GROUP : tt.g.ONE_TO_ONE,
                    message_type: l,
                    reaction_emotion: t,
                  },
                })
              }),
              v()(c()(e), '_reactionClickHandler', function (t, n) {
                return function () {
                  var r = e.props,
                    a = r.createLocalApiErrorHandler,
                    i = r.createReaction,
                    o = r.dismiss,
                    s = r.entry,
                    c = r.fetchUpdatesIfNeeded,
                    l = r.perspective,
                    u = r.removeReaction,
                    d = { reaction_key: t, conversation_id: s.conversation_id, dm_id: s.id, perspective: l }
                  ;(n ? u : i)(d)
                    .then(e._handleReactionScribing(t, n))
                    .then(function () {
                      return c()
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
                    n = Object(Ze.a)(this.context.featureSwitches).map(function (n) {
                      var r = t.includes(n)
                      return g.a.createElement($e, {
                        accessibilityLabelFormatter: r ? at : it,
                        emojiSize: 'title4',
                        emotion: n,
                        enableHoverStyle: !0,
                        focusable: !0,
                        key: n,
                        onPress: e._reactionClickHandler(n, r),
                        style: [ct.reaction, r && ct.selectedReaction],
                      })
                    })
                  return g.a.createElement(J.a, { style: ct.reactions }, n)
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      v()(ot, 'contextType', A.a)
      var st = Object(nt.a)(qe(ot)),
        ct = L.a.create(function (e) {
          return {
            reactions: { cursor: 'pointer', flexDirection: 'row', padding: e.spaces.space12 },
            reaction: { borderRadius: e.borderRadii.small, padding: e.spaces.space4 },
            selectedReaction: { backgroundColor: e.colors.gray50 },
          }
        }),
        lt = n('OiMc')
      function ut(e) {
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
            var a = m()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var dt = (function (e) {
        u()(n, e)
        var t = ut(n)
        function n() {
          var e
          a()(this, n)
          for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
          return (
            (e = t.call.apply(t, [this].concat(i))),
            v()(c()(e), '_renderDMReactionPickerContent', function (t) {
              var n = e.props,
                r = n.entry,
                a = n.isGroupDM,
                i = n.participantsCount,
                o = n.perspective
              return g.a.createElement(st, { dismiss: t, entry: r, isGroupDM: a, participantsCount: i, perspective: o })
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
                return g.a.createElement(
                  lt.a,
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
      })(g.a.Component)
      v()(dt, 'contextType', z.a)
      var pt = n('fz3c'),
        ft = n('TnY3'),
        mt = n('mjJ+'),
        ht = n('Q0VY'),
        vt = n('eb3s'),
        yt = n('/yvb'),
        bt = n('ZToW'),
        gt = n('CaKu'),
        _t = n('i4Oy'),
        Et = (n('hBpG'), n('tVqn'), n('tQbP'), n('4w6w')),
        Ot = function (e, t) {
          if (null == e) return !1
          var n = t || [0, 0],
            r = le()(n, 2),
            a = r[0],
            i = r[1]
          return !((0 === a || 1 === a) && e.length === i)
        },
        St = function (e) {
          var t = e.message_data
          if (!t) return !1
          var n = t.attachment
          if (!n) return !0
          if (n.sticker) return !1
          var r = n.tweet || n.photo || n.animated_gif || n.video || void 0
          if (r) return Ot(t.text, r.indices)
          if (n.card) {
            var a,
              i = ((null === (a = t.entities) || void 0 === a ? void 0 : a.urls) || []).find(function (e) {
                return e.url === n.card
              })
            return Ot(t.text, i && i.indices)
          }
          return !0
        },
        Ct = function (e) {
          var t,
            n = null == e || null === (t = e.message_data) || void 0 === t ? void 0 : t.attachment
          return !(!n || !(n.card || n.tweet || n.photo || n.animated_gif || n.video))
        },
        wt = function (e) {
          var t,
            n = null == e || null === (t = e.message_data) || void 0 === t ? void 0 : t.attachment
          return !(!n || !n.fleet)
        },
        kt = function (e, t, n) {
          var r = 1.25 * L.a.theme.fontSizesPx.body
          return {
            compositeRendered: e ? void 0 !== t && void 0 !== n : void 0 !== t,
            isTextSquared: void 0 !== t && void 0 !== n && (n === t || n <= t - r),
            isAttachmentSquared: void 0 !== n && void 0 !== t && (t === n || t <= n - r),
          }
        },
        Rt = n('hiGS'),
        It = n('zIWA'),
        Pt = n('Lsrn'),
        xt = n('k/Ka')
      function Tt(e, t) {
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
      function At(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Tt(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Tt(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var Mt = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(xt.a)(
          'svg',
          At(
            At({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [Pt.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          g.a.createElement(
            'g',
            null,
            g.a.createElement('path', {
              d: 'M16.925 9.5H14.5V7.075c0-.414-.336-.75-.75-.75s-.75.336-.75.75V9.5h-2.425c-.414 0-.75.336-.75.75s.336.75.75.75H13v2.425c0 .414.336.75.75.75s.75-.336.75-.75V11h2.425c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm-.3 11H4.25c-.413 0-.75-.337-.75-.75V8.402c0-.414-.336-.75-.75-.75s-.75.336-.75.75V19.75C2 20.99 3.01 22 4.25 22h12.375c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z',
            }),
            g.a.createElement('path', {
              d: 'M19.75 2h-12C6.51 2 5.5 3.01 5.5 4.25v12c0 1.24 1.01 2.25 2.25 2.25h12c1.24 0 2.25-1.01 2.25-2.25v-12C22 3.01 20.99 2 19.75 2zm.75 14.25c0 .413-.337.75-.75.75h-12c-.413 0-.75-.337-.75-.75v-12c0-.413.337-.75.75-.75h12c.413 0 .75.337.75.75v12z',
            }),
          ),
        )
      }
      Mt.metadata = { width: 24, height: 24 }
      var jt = Mt,
        Dt = n('DlVf'),
        Lt = n('ACHU'),
        Ft = n('UgB4')
      function Bt(e, t) {
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
      function Nt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Bt(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Bt(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function Ut(e) {
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
            var a = m()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var Ht = Be.a.ba60339a,
        Kt = Be.a.j4bfee22,
        Vt = Be.a.d96cf7cd,
        Wt = Be.a.faddd3a2,
        zt = Be.a.eb497e08,
        Gt = Be.a.b170974a,
        qt = Be.a.i202bd22,
        Yt = Be.a.f2e5491a,
        Xt = Be.a.f88553c8,
        Qt = Be.a.ifea3114,
        Zt = Be.a.cac14829,
        Jt = Be.a.h63a5c3b,
        $t = (function (e) {
          u()(n, e)
          var t = Ut(n)
          function n(e, r) {
            var i
            return (
              a()(this, n),
              (i = t.call(this, e, r)),
              v()(c()(i), '_renderOverflowMenu', function (e) {
                var t = i.props,
                  n = t.analytics,
                  r = t.entry,
                  a = t.isSent,
                  o = n.contextualScribeNamespace,
                  s = [{ text: Ht, Icon: Rt.a, isEmphasized: !0, onClick: i._handleShowDeleteConfirmation(e) }]
                return (
                  a ||
                    s.push({
                      text: qt,
                      Icon: It.a,
                      link: {
                        pathname: '/i/report/'.concat(pt.a.DMMessage, '/').concat(r.id),
                        state: {
                          clientReferer: window.location.pathname,
                          conversationId: r.conversation_id,
                          scribeNamespace: o,
                        },
                      },
                      onClick: i.props.onReportMessage,
                    }),
                  gt.a.isAvailable() && s.push({ text: Yt, Icon: jt, onClick: i._handleCopyMessageText }),
                  g.a.createElement(mt.a, {
                    isFixed: i.context.isDrawer,
                    items: s,
                    onCloseRequested: i._handleHideActionsAndMenus(e),
                    preferredHorizontalOrientation: 'right',
                  })
                )
              }),
              v()(c()(i), '_handleCopyMessageText', function (e) {
                var t = i.props.addToast,
                  n = i._replaceMessageUrls()
                n && (gt.a.setString(n), t({ text: Xt })), e && e()
              }),
              v()(c()(i), '_handleForwardButton', function () {
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
                    state: { tweetAttachment: Nt(Nt({}, o), {}, { id_str: o.status }) },
                  })
                }
              }),
              v()(c()(i), '_handleSetActionsActive', function () {
                var e = i.props.setShouldFreezeUpdates
                i.setState({ actionsAreActive: !0 }), e(!0)
              }),
              v()(c()(i), '_handleDelete', function () {
                var e = i.props,
                  t = e.analytics,
                  n = e.createLocalApiErrorHandler,
                  r = e.deleteEntry,
                  a = e.entry,
                  o = e.inboxType,
                  s = e.isGroupDM,
                  c = e.participantsCount,
                  l = Object(Ye.c)(a)
                t.scribe({
                  action: 'delete',
                  data: {
                    conversation_id: a.conversation_id,
                    conversation_type: s ? 1 : 0,
                    conversation_participant_count: c,
                    message_type: l,
                    inbox_type: Object(Ye.h)(o),
                  },
                }),
                  r({ conversationId: a.conversation_id, id: a.id }).catch(n(He))
              }),
              v()(c()(i), '_handleHideDeleteConfirmation', function () {
                i.setState({ showDeleteConfirmation: !1 })
              }),
              v()(c()(i), '_handleHideActionsAndMenus', function (e) {
                return function () {
                  var t = i.props.setShouldFreezeUpdates
                  e && e(), i.setState({ actionsAreActive: !1 }), t(!1)
                }
              }),
              v()(c()(i), '_handlePressReactionPickerButton', function () {
                var e = i.props,
                  t = e.analytics,
                  n = e.entry
                t.scribe({ component: 'reaction_button', element: Object(Ye.c)(n), action: 'click' }),
                  i._handleSetActionsActive()
              }),
              v()(c()(i), '_handleShowDeleteConfirmation', function (e) {
                return function () {
                  var t = i.props.setShouldFreezeUpdates
                  e(), i.setState({ actionsAreActive: !1, showDeleteConfirmation: !0 }), t(!1)
                }
              }),
              v()(c()(i), '_replaceMessageUrls', function () {
                var e = i.props.entry,
                  t = e && e.message_data && e.message_data.entities,
                  n = (e && e.message_data && e.message_data.text) || ''
                return (
                  ht.a.tweetTextParts(n, [0, n.length], t).forEach(function (e) {
                    'url' === e.entityType && (n = n.replace(e.url, e.expandedUrl))
                  }),
                  n
                )
              }),
              (i.state = { actionsAreActive: !1, showDeleteConfirmation: !1 }),
              (i._hasMedia = Ct(i.props.entry)),
              (i._isNarrow = _t.a.get('screen').width < L.a.theme.breakpoints.xSmall),
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
                    s = n.withVDLRefresh,
                    c = this._areActionsVisible()
                  return g.a.createElement(
                    J.a,
                    {
                      pointerEvents: c ? 'auto' : 'none',
                      style: [
                        tn.messageActions,
                        a ? tn.messageActionsLeft : tn.messageActionsRight,
                        c ? tn.visible : tn.invisible,
                        s && tn.vdlMessageActions,
                        this._isNarrow && (this._hasMedia ? tn.messageActionsMediaNarrow : tn.messageActionsNarrow),
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
                      s &&
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
                    ? g.a.createElement(vt.a, {
                        confirmButtonLabel: Vt,
                        confirmButtonType: 'destructiveFilled',
                        headline: Kt,
                        onCancel: this._handleHideDeleteConfirmation,
                        onConfirm: this._handleDelete,
                        text: Wt,
                      })
                    : null
                },
              },
              {
                key: '_renderForwardButton',
                value: function () {
                  return g.a.createElement(yt.a, {
                    accessibilityLabel: Qt,
                    hoverLabel: { label: Qt },
                    icon: nn,
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
                    s = g.a.createElement(Dt.a, { style: i ? tn.vdlActionIcon : tn.actionIcon })
                  return g.a.createElement(
                    dt,
                    {
                      entry: t,
                      isGroupDM: n,
                      onDismiss: this._handleHideActionsAndMenus(),
                      participantsCount: r,
                      perspective: a,
                    },
                    g.a.createElement(yt.a, {
                      accessibilityExpanded: !!o,
                      accessibilityHasPopup: 'menu',
                      accessibilityLabel: Gt,
                      hoverLabel: { label: Zt },
                      icon: s,
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
                    t = g.a.createElement(Lt.a, { style: e ? tn.vdlActionIcon : tn.actionIcon })
                  return g.a.createElement(yt.a, {
                    accessibilityLabel: zt,
                    hoverLabel: { label: Jt },
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
                    s = ((e = this.props.entry), !St(e) && Ct(e) && !bt.a.isEnabled)
                  return !i && (s || (n && !bt.a.isEnabled) || r || a || o)
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      v()($t, 'contextType', z.a)
      var en = Object(ft.a)(Object(nt.a)(je($t))),
        tn = L.a.create(function (e) {
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
        nn = g.a.createElement(Ft.a, { style: tn.vdlActionIcon }),
        rn = n('97Jx'),
        an = n.n(rn),
        on = (n('6U7i'), n('CDB5')),
        sn = n('rxPX'),
        cn = Object(sn.a)()
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(Ae.createLocalApiErrorHandlerWithContextFactory)(
                'DIRECT_MESSAGES_CONVERSATION',
              ),
              removeEntry: q.removeEntry,
              sendMessage: on.m,
            }
          })
          .withAnalytics(),
        ln = '87.5%',
        un = (n('hCOa'), n('87if'), n('dlmX'), n('m9LP'), n('wrlS')),
        dn = n('RqPI'),
        pn = [],
        fn = function (e, t) {
          return Object(Ve.p)(e, t.entryId) || pn
        },
        mn = function (e) {
          return Object(Ve.l)(e).entries
        },
        hn = {
          createLocalApiErrorHandler: Object(Ae.createLocalApiErrorHandlerWithContextFactory)(
            'DIRECT_MESSAGES_REACTIONS',
          ),
        },
        vn = Object(Ce.e)(function () {
          return Object(Se.createSelector)(mn, fn, dn.q, un.d, function (e, t, n, r) {
            var a,
              i = Object(Ze.a)(r, { includeInactive: !0 }),
              o = 0
            return {
              reactionsWithCounts: t.reduceRight(function (t, r) {
                var s = e[r] && e[r].data
                if (!s) return t
                if (!i.includes(s.reaction_key)) return t
                var c = (t.get(s.reaction_key) || 0) + 1
                return (
                  t.set(s.reaction_key, c),
                  (null == s ? void 0 : s.sender_id) === n && (a = s.reaction_key),
                  (o += 1),
                  t
                )
              }, new Map()),
              selectedReactionKey: a,
              totalReactionCount: o,
            }
          })
        }, hn),
        yn = (n('vfdX'), n('Ee2X'), []),
        bn = function (e, t) {
          return t.entryId
        },
        gn = function (e) {
          return Object(Ve.l)(e).entries
        },
        _n = function (e, t) {
          return Object(Ve.p)(e, bn(0, t)) || yn
        },
        En = function (e, t) {
          return ke.e.selectMany(
            e,
            (function (e, t) {
              return Object(Ve.q)(e, bn(0, t))
            })(e, t),
          )
        },
        On = {
          removeReaction: Ve.k,
          fetchUpdatesIfNeeded: Ke.d,
          createLocalApiErrorHandler: Object(Ae.createLocalApiErrorHandlerWithContextFactory)(
            'DIRECT_MESSAGES_REACTION_SUMMARY_CONTEXT',
          ),
        },
        Sn = Object(Ce.e)(function () {
          return Object(Se.createSelector)(gn, _n, dn.q, En, un.d, function (e, t, n, r, a) {
            var i = Object(Ze.a)(a, { includeInactive: !0 }),
              o = []
            t.forEach(function (t) {
              var a = e[t] && e[t].data
              if (a && i.includes(a.reaction_key)) {
                var s = r.find(function (e) {
                    return e && e.id_str === a.sender_id
                  }),
                  c = s && {
                    avatarUri: s.profile_image_url_https,
                    userId: s.id_str,
                    reactionKey: a.reaction_key,
                    isLoggedInUser: s.id_str === n,
                    screenName: s.screen_name,
                    name: s.name,
                    isProtected: s.protected,
                    isVerified: s.verified,
                    time: a.time,
                  }
                c && o.push(c)
              }
            }),
              o.sort(function (e, t) {
                return t.time - e.time
              })
            var s = o.findIndex(function (e) {
              return e.userId === n
            })
            return s > -1 && o.push.apply(o, Qe()(o.splice(0, s))), { loggedInUserId: n, usersWithReactions: o }
          })
        }, On),
        Cn = n('TIdA'),
        wn = n('htQn'),
        kn = Be.a.gf5e9ea6,
        Rn = Be.a.a2d48778,
        In = Cn.a.createLayoutCache()
      var Pn = L.a.create(function (e) {
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
        xn = function (e) {
          var t = g.a.useContext(A.a).featureSwitches,
            n = e.onUndoPress,
            r = e.renderUndo,
            a = e.user,
            i = e.withBottomBorder,
            o = a.avatarUri,
            s = a.isProtected,
            c = a.isVerified,
            l = a.name,
            u = a.screenName,
            d = g.a.useMemo(
              function () {
                return function (e) {
                  e.stopPropagation(), n()
                }
              },
              [n],
            ),
            p = g.a.createElement(ee.a, { imageLayoutCache: In, screenName: u, size: 'xxLarge', uri: o }),
            f = g.a.createElement($e, { emojiSize: 'title4', emotion: a.reactionKey, focusable: !1 }),
            m = g.a.createElement(N.a, {
              badgeContext: 'content',
              isProtected: s,
              isVerified: c,
              name: l,
              screenName: u,
              withHoverCard: !0,
              withStackedLayout: !0,
            })
          return g.a.createElement(
            wn.a,
            { link: { pathname: '/'.concat(u), anchorless: !0 }, style: [Pn.root, i && Pn.bottomBorder] },
            g.a.createElement(J.a, { style: Pn.reactionColumn }, f),
            g.a.createElement(J.a, { style: Pn.column }, p),
            g.a.createElement(J.a, { style: Pn.bodyColumn }, g.a.createElement(J.a, { style: Pn.body }, m)),
            r
              ? g.a.createElement(
                  J.a,
                  { style: Pn.column },
                  g.a.createElement(
                    yt.a,
                    {
                      accessibilityLabel: Rn({ emoji: Object(Ze.b)(a.reactionKey, t) }),
                      onClick: d,
                      size: 'small',
                      type: 'brandText',
                    },
                    kn,
                  ),
                )
              : null,
          )
        },
        Tn = n('xKuM'),
        An = n('efqG')
      function Mn(e) {
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
            var a = m()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var jn = Be.a.b772cd65,
        Dn = Be.a.c0098d49,
        Ln = Be.a.j85999eb,
        Fn = (function (e) {
          u()(n, e)
          var t = Mn(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              v()(c()(e), '_renderContent', function (t, n) {
                return g.a.createElement(
                  J.a,
                  null,
                  e._renderHeader(t, n),
                  e._renderUsers(t, n),
                  e._renderDoneButton(t, n),
                )
              }),
              v()(c()(e), '_renderHeader', function (e, t) {
                return 'sheet' === t
                  ? g.a.createElement(Tn.a, { title: Dn, withBottomBorder: !0 })
                  : g.a.createElement($.b, { visuallyHidden: !0 }, Dn)
              }),
              v()(c()(e), '_renderUsers', function (t, n) {
                return g.a.createElement(
                  J.a,
                  { accessibilityLabel: Ln, style: [Bn.container, 'sheet' === n ? Bn.sheet : Bn.popover] },
                  e._renderUserCells(t),
                )
              }),
              v()(c()(e), '_renderDoneButton', function (e, t) {
                return (
                  'sheet' === t &&
                  g.a.createElement(
                    yt.a,
                    { key: 'button_done', onPress: e, style: Bn.cancelButton, type: 'primaryOutlined' },
                    jn,
                  )
                )
              }),
              v()(c()(e), '_renderUserCells', function (t) {
                return e.props.usersWithReactions.filter(Boolean).map(function (n, r) {
                  return g.a.createElement(xn, {
                    history: e.props.history,
                    key: n.userId,
                    onUndoPress: e._reactionUndoHandler(n.reactionKey, t),
                    renderUndo: n.isLoggedInUser,
                    user: n,
                    withBottomBorder: r !== e.props.usersWithReactions.length - 1,
                  })
                })
              }),
              v()(c()(e), '_reactionUndoHandler', function (t, n) {
                return function () {
                  var r = e.props,
                    a = r.conversationId,
                    i = r.createLocalApiErrorHandler,
                    o = r.entryId,
                    s = r.fetchUpdatesIfNeeded,
                    c = r.loggedInUserId,
                    l = r.removeReaction,
                    u = { reaction_key: t, conversation_id: a, dm_id: o, perspective: c }
                  n(), l(u).then(e._handleScribeRemoveReaction(t)).then(s).catch(i())
                }
              }),
              v()(c()(e), '_handleScribeRemoveReaction', function (t) {
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
                  return g.a.createElement(
                    An.a,
                    { renderContent: this._renderContent, withFixedPosition: this.context.isDrawer },
                    e,
                  )
                },
              },
            ]),
            n
          )
        })(g.a.PureComponent)
      v()(Fn, 'contextType', z.a)
      var Bn = L.a.create(function (e) {
          return {
            cancelButton: { marginHorizontal: e.spaces.space12, marginVertical: e.spaces.space12 },
            container: { overflowY: 'auto', paddingVertical: e.spaces.space12 },
            popover: { maxHeight: '35vh', minWidth: '320px' },
            sheet: { maxHeight: '65vh' },
          }
        }),
        Nn = Object(ft.a)(Object(nt.a)(Sn(Fn)))
      function Un(e, t) {
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
            var a = m()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var Kn = Be.a.h95f9e76,
        Vn = (function (e) {
          u()(n, e)
          var t = Hn(n)
          function n(e) {
            var r
            return (
              a()(this, n),
              (r = t.call(this, e)),
              v()(c()(r), '_handleScribeDMReactionSummary', function () {
                r.props.analytics.scribe({ component: 'dm_reaction_summary', action: 'show' })
              }),
              v()(c()(r), '_onSetReactionsNode', function (e) {
                r._measureWidths(e || void 0)
              }),
              v()(c()(r), '_renderReactions', function (e) {
                var t = e.isHovered,
                  n = r.props,
                  a = n.reactionsWithCounts,
                  i = n.selectedReactionKey,
                  o = r.state.emojiSize || 'headline1',
                  s = a.size - 1
                return Array.from(a, function (e, n) {
                  var r = le()(e, 2),
                    a = r[0],
                    c = r[1]
                  return g.a.createElement($e, {
                    count: c,
                    emojiSize: o,
                    emotion: a,
                    enableHoverStyle: !1,
                    focusable: !0,
                    key: a,
                    style: [
                      n === s && Wn.rightPadding,
                      Wn.elementPadding,
                      i === a ? Wn.selfSelect : null,
                      t && Wn.isHoveredDMReaction,
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
                  var s = D.a.generate({ backgroundColor: L.a.theme.colors.gray50, color: L.a.theme.colors.gray700 }),
                    c = Kn({ reactionCount: i })
                  return g.a.createElement(
                    J.a,
                    {
                      style: [
                        Wn.container,
                        r ? Wn.marginShort : Wn.marginLong,
                        a ? Wn.alignRight : Wn.alignLeft,
                        o ? Wn.visible : Wn.invisible,
                      ],
                    },
                    g.a.createElement(
                      Nn,
                      { conversationId: t, entryId: n },
                      g.a.createElement(
                        B.a,
                        {
                          accessibilityLabel: c,
                          focusable: !0,
                          interactiveStyles: s,
                          onPress: this._handleScribeDMReactionSummary,
                          ref: this._onSetReactionsNode,
                          style: Wn.content,
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
                          ? Un(Object(n), !0).forEach(function (t) {
                              v()(e, t, n[t])
                            })
                          : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                          : Un(Object(n)).forEach(function (t) {
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
        })(g.a.PureComponent),
        Wn = L.a.create(function (e) {
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
            selfSelect: { borderColor: L.a.theme.colors.gray50, borderRadius: e.borderRadii.infinite },
            alignLeft: { alignSelf: 'flex-start' },
            alignRight: { alignSelf: 'flex-end' },
            invisible: { opacity: 0 },
            visible: { opacity: 1 },
            marginShort: { marginBottom: e.spaces.space4 },
            marginLong: { marginBottom: e.spaces.space12 },
            isHoveredDMReaction: { borderColor: e.colors.transparent, cursor: 'pointer' },
          }
        }),
        zn = Object(nt.a)(vn(Vn)),
        Gn = n('Xrkv')
      function qn(e) {
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
            var a = m()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var Yn = Be.a.icd0bf34,
        Xn = Be.a.e8bd8fec,
        Qn = Be.a.b2d32fad,
        Zn = Be.a.a763d33e,
        Jn = (function (e) {
          u()(n, e)
          var t = qn(n)
          function n(e) {
            var r
            return (
              a()(this, n),
              (r = t.call(this, e)),
              v()(c()(r), '_handlePress', function (e) {
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
                  return g.a.createElement(
                    J.a,
                    { style: $n.root },
                    g.a.createElement(
                      $.b,
                      { align: 'right', color: 'gray700', size: 'subtext2', style: $n.seenLabel },
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
                  return n ? (t ? Qn : Yn) : r.length ? Zn({ count: r.length }) : Xn
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
                      return g.a.createElement(
                        Be.a.I18NFormatMessage,
                        { $i18n: 'f6464106' },
                        g.a.createElement($.b, null, n),
                        g.a.createElement(
                          $.b,
                          { color: 'link', onPress: e._handlePress },
                          Be.a.d7a0722f({ othersCount: r }),
                        ),
                      )
                    }
                  n && (t = t.slice(0, 10))
                  var i = Object(Gn.a)(t, n)
                  return g.a.createElement(
                    $.b,
                    { align: 'right', color: 'gray700', size: 'subtext2', style: $n.namesList },
                    n ? g.a.createElement(a, { namesList: i, othersCount: r }) : g.a.createElement($.b, null, i),
                  )
                },
              },
            ]),
            n
          )
        })(g.a.PureComponent),
        $n = L.a.create(function (e) {
          return {
            root: { alignItems: 'flex-end', width: 'calc(100% - '.concat(e.spaces.space2, ')') },
            seenLabel: { cursor: 'pointer' },
            namesList: { marginBottom: e.spaces.space2, whiteSpace: 'pre-line' },
          }
        }),
        er = Jn,
        tr = n('t0aI'),
        nr = function (e) {
          var t = e.entryId,
            n = e.participants,
            r = e.user,
            a = Object.keys(n),
            i = rr({ entryId: t, participants: n, user: r })
          return { namesToDisplay: i, isSeenByEveryone: i.length === a.length - 1 }
        },
        rr = function (e) {
          var t = e.entryId,
            n = e.participants,
            r = e.user
          return Object.keys(n).reduce(function (e, a) {
            var i = n[a],
              o = i.join_conversation_event_id,
              s = i.last_read_event_id,
              c = i.user.name,
              l = a !== r.id_str,
              u = s && 1 !== Object(tr.a)(t, s),
              d = !o || 1 !== Object(tr.a)(o, t)
            return l && u && d && e.push(c), e
          }, [])
        },
        ar = n('IMYl'),
        ir = n('21zW'),
        or = n('gmpV')
      function sr(e) {
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
            var a = m()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var cr = Be.a.fad48ee9,
        lr = Be.a.ba60339a,
        ur = Be.a.d338f53e,
        dr = Be.a.ae7d7a24,
        pr = Be.a.d725a288,
        fr = Be.a.bbe74f3f,
        mr = Be.a.h0e4cdf4,
        hr = Be.a.bfbc051c,
        vr = (function (e) {
          u()(n, e)
          var t = sr(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              v()(c()(e), '_handleRemove', function () {
                var t = e.props,
                  n = t.conversationId,
                  r = t.entryId
                ;(0, t.removeEntry)(n, null, { id: r })
              }),
              v()(c()(e), '_handleTryAgain', function () {
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
                    s = this._renderSentCheckmark(),
                    c = this._renderReactions(),
                    l = i || o || s,
                    u = r || a || c || l,
                    d =
                      this.context.featureSwitches.isTrue('dm_vdl_enabled') &&
                      this.context.featureSwitches.isTrue('dm_vdl_chat_p0_enabled')
                  return (
                    u &&
                    g.a.createElement(
                      J.a,
                      { style: [yr.root, d && yr.vdlRootMargin, t && yr.sentMessage] },
                      r,
                      a,
                      c,
                      l
                        ? g.a.createElement(
                            B.a,
                            { interactiveStyles: null, onPress: n, style: t && yr.sentContainer },
                            g.a.createElement(J.a, { style: t && yr.groupedItems }, i, s),
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
                    g.a.createElement(
                      J.a,
                      null,
                      g.a.createElement($.b, { align: 'right', color: 'gray700', size: 'subtext2' }, dr),
                      g.a.createElement(
                        J.a,
                        { style: yr.groupedItems },
                        g.a.createElement(
                          $.b,
                          {
                            accessibilityRole: 'button',
                            color: 'magenta500',
                            onPress: this._handleRemove,
                            size: 'subtext2',
                            withInteractiveStyling: !0,
                          },
                          lr,
                        ),
                        g.a.createElement(ir.a, null),
                        g.a.createElement(
                          $.b,
                          {
                            accessibilityRole: 'button',
                            color: 'primary',
                            onPress: this._handleTryAgain,
                            size: 'subtext2',
                            withInteractiveStyling: !0,
                          },
                          ur,
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
                    s = !a || r
                  return t
                    ? g.a.createElement(
                        J.a,
                        { style: o && yr.footerPadderWithAvatar },
                        g.a.createElement(zn, { conversationId: t, entryId: n, isEndOfDM: s, isSent: i }),
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
                    s = e.participants,
                    c = e.user
                  return n && o && !r && !a
                    ? g.a.createElement(er, an()({ isGroupDM: i }, nr({ entryId: t, participants: s, user: c })))
                    : null
                },
              },
              {
                key: '_renderSending',
                value: function () {
                  var e = this.props,
                    t = e.isDraft,
                    n = e.isError
                  return t && !n && g.a.createElement($.b, { align: 'right', color: 'gray700', size: 'subtext2' }, cr)
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
                    s = e.participants,
                    c = e.user,
                    l = nr({ entryId: t, participants: s, user: c }).isSeenByEveryone
                  return !o || n || r || (i && !a)
                    ? null
                    : g.a.createElement(
                        $.b,
                        { color: l ? 'primary' : 'gray700', style: yr.checkmarkContainer },
                        g.a.createElement(ar.a, { style: yr.checkmark }),
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
                    s = e.isSent,
                    c = e.user.name,
                    l = e.withUserAvatar
                  if (n || r || (o && !i)) return null
                  var u,
                    d = new Date(Number(t))
                  u = Object(or.c)(d) ? pr(d) : Object(or.d)(d) ? fr({ time: pr(d) }) : Object(or.e)(d) ? mr(d) : hr(d)
                  var p = a && !s,
                    f = s ? 'right' : 'left'
                  return g.a.createElement(
                    J.a,
                    { style: [l && yr.footerPadderWithAvatar, s && yr.timestamp] },
                    g.a.createElement(
                      $.b,
                      { align: f, color: 'gray700', size: 'subtext2', withInteractiveStyling: s || !bt.a.isEnabled },
                      p &&
                        g.a.createElement(
                          Be.a.I18NFormatMessage,
                          { $i18n: 'c8b914d4' },
                          g.a.createElement($.b, null, c),
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
        })(g.a.PureComponent)
      v()(vr, 'contextType', A.a)
      var yr = L.a.create(function (e) {
          return {
            root: { marginTop: e.spaces.space2, overflow: 'hidden', width: ln },
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
        br = cn(vr),
        gr = n('jtO7'),
        _r = L.a.create(function (e) {
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
        Er = function (e) {
          var t = e.insideTopRounded,
            n = e.isLast,
            r = e.isSent,
            a = e.label,
            i = e.onClick,
            o = e.outsideTopRounded,
            s = e.tcoUrl,
            c = [
              _r.root,
              n && _r.isLast,
              n && r && _r.sentLast,
              n && !r && _r.receivedLast,
              t && r && _r.insideTopRoundedSent,
              t && !r && _r.insideTopRoundedReceived,
              o && r && _r.outsideTopRoundedSent,
              o && !r && _r.outsideTopRoundedReceived,
            ]
          return g.a.createElement(
            J.a,
            { style: c },
            g.a.createElement(gr.a, { align: 'center', color: 'primary', label: a, link: s, onClick: i }),
          )
        },
        Or = n('fs1G')
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
            r = m()(e)
          if (t) {
            var a = m()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var Cr = (function (e) {
        u()(n, e)
        var t = Sr(n)
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
                    var s = 0 === o
                    return g.a.createElement(Er, {
                      insideTopRounded: s && (a || !i),
                      isLast: o === t.length - 1,
                      isSent: n,
                      key: o,
                      label: e.label,
                      onClick: r,
                      outsideTopRounded: s && a,
                      tcoUrl: e.tco_url,
                    })
                  })
                return g.a.createElement(J.a, null, o)
              },
            },
          ]),
          n
        )
      })(g.a.Component)
      v()(Cr, 'defaultProps', { onCtaClick: Or.a, onImpression: Or.a })
      var wr = Cr,
        kr = (n('1IsZ'), n('vjRr')),
        Rr = n('EGrD'),
        Ir = function (e, t) {
          return kr.a.createManyHydratedSelector([t.cardUrl])(e)[0]
        },
        Pr = Object(sn.a)()
          .propsFromState(function () {
            return { adFreeArticleDomains: Rr.c, card: Ir }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(Ae.createLocalApiErrorHandlerWithContextFactory)('DM_CARD_MESSAGE'),
              fetchAdFreeToken: Rr.a,
              loadAdFreeArticleDomainsFromPersistence: Rr.b,
              popOutConversation: q.popOutConversation,
            }
          }),
        xr = L.a.create(function (e) {
          return { root: { width: '100%' }, invisible: { opacity: 0 }, visible: { opacity: 1 } }
        }),
        Tr = function (e) {
          var t = e.attachmentContent,
            n = e.attachmentHeader,
            r = e.isVisible,
            a = void 0 === r || r,
            i = e.textContent
          return g.a.createElement(J.a, { style: [a ? xr.visible : xr.invisible, xr.root] }, n, t, i)
        },
        Ar = n('cTG8'),
        Mr = function (e) {
          var t = e.excludeCardUrl,
            n = e.isActive,
            r = void 0 !== n && n,
            a = e.isFailedDraft,
            i = e.isFirstRapidFire,
            o = void 0 !== i && i,
            s = e.isRapidFire,
            c = void 0 !== s && s,
            l = e.isSent,
            u = e.hasAssociatedAttachment,
            d = e.messageData,
            p = void 0 === d ? {} : d,
            f = e.rootStyle,
            m = e.tweetId,
            h = e.withCta,
            v = e.withMediaLinks,
            y = e.withMessageBubble,
            b = g.a.useContext(A.a).featureSwitches,
            _ = b.isTrue('dm_vdl_enabled') && b.isTrue('dm_vdl_chat_p0_enabled'),
            E = [
              f,
              y && jr.messageTextContainer,
              y && l && jr.sent,
              y && !l && jr.received,
              a && jr.failedDraft,
              c && !o && !l && jr.rapidFireReceived,
              c && !o && l && jr.rapidFireSent,
              u && l && jr.hasAssociatedAttachmentSent,
              u && !l && jr.hasAssociatedAttachmentReceived,
              y && _ && l && jr.vdlSent,
              y && r && l && jr.activeSent,
              y && _ && r && l && jr.vdlActiveSent,
              y && r && !l && !bt.a.isEnabled && jr.activeReceived,
              h && jr.withCta,
            ],
            O = [jr.tweetText, y && jr.textAlignLeft, !y && l && jr.textAlignRight],
            S = L.a.theme.colors,
            C = S.gray0,
            w = S.magenta500,
            k = S.primary,
            R = S.text,
            I = S.white,
            P = D.a.generate({ color: l ? I : R, backgroundColor: a ? w : l ? k : C }),
            x = (p.text && p.text.length) || 0
          return g.a.createElement(
            B.a,
            { accessibilityRole: 'none', interactive: l, interactiveStyles: y ? P : null, style: E },
            g.a.createElement(Ar.a, {
              color: L.a.isDarkMode() || l ? 'whiteOnColor' : void 0,
              displayTextRange: [0, x],
              entities: p.entities,
              excludeCardUrl: t,
              linkColor: (y && l) || L.a.isDarkMode() ? 'whiteOnColor' : 'link',
              linkify: !0,
              quotedTweetId: m,
              size: y ? void 0 : 'title2',
              style: O,
              text: p.text || '',
              underlineLinks: !0,
              withMediaLinks: v,
            }),
          )
        },
        jr = L.a.create(function (e) {
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
      Mr.defaultProps = { withMediaLinks: !1 }
      var Dr = Mr,
        Lr = function (e) {
          var t = e.isActive,
            n = void 0 !== t && t,
            r = e.isFailedDraft,
            a = e.isFirstRapidFire,
            i = void 0 !== a && a,
            o = e.isRapidFire,
            s = void 0 !== o && o,
            c = e.isSent,
            l = e.messageData,
            u = e.withCta,
            d = e.withMessageBubble
          return g.a.createElement(Dr, {
            isActive: n,
            isFailedDraft: r,
            isFirstRapidFire: i,
            isRapidFire: s,
            isSent: c,
            messageData: l,
            withCta: u,
            withMediaLinks: !0,
            withMessageBubble: d,
          })
        },
        Fr = n('LSr9'),
        Br = n('aX4+'),
        Nr = n('/Ikv')
      function Ur(e) {
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
            var a = m()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var Hr = Nr.a.CardNames,
        Kr = (function (e) {
          u()(n, e)
          var t = Ur(n)
          function n() {
            var e, r
            a()(this, n)
            for (var i = arguments.length, o = new Array(i), s = 0; s < i; s++) o[s] = arguments[s]
            return (
              (r = t.call.apply(t, [this].concat(o))),
              v()(c()(r), 'state', { attachmentWidth: void 0, textContentWidth: void 0 }),
              v()(
                c()(r),
                '_hasClaimsForAdFreeArticles',
                null === (e = r.context.userClaims) || void 0 === e
                  ? void 0
                  : e.isTrueAndEnabled('subscriptions_feature_1006'),
              ),
              v()(c()(r), '_handleAttachmentLayout', function (e) {
                var t = e.nativeEvent.layout.width
                if (r.state.attachmentWidth !== t) {
                  var n = { attachmentWidth: t }
                  r.setState(n)
                }
              }),
              v()(c()(r), '_handleOnClick', function (e) {
                var t = r.props,
                  n = t.card.binding_values,
                  a = t.conversationId,
                  i = t.popOutConversation
                if ((a && i(a), r._hasClaimsForAdFreeArticles)) {
                  var o = r.props,
                    s = o.adFreeArticleDomains,
                    c = o.createLocalApiErrorHandler,
                    l = o.fetchAdFreeToken,
                    u = new Fr.a(l, c()).getAdFreeArticlesClickHandler({
                      destinationUrl: Nr.a.getBindingValue(n, 'card_url'),
                      linkDomain: Nr.a.getBindingValue(n, 'domain'),
                      adFreeArticleDomains: s,
                    }),
                    d = le()(u, 2),
                    p = d[0],
                    f = d[1]
                  p && f(e)
                }
              }),
              v()(c()(r), '_handleTextContentLayout', function (e) {
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
                    s = e.isSent,
                    c = e.messageData,
                    l = e.withCta,
                    u = e.withMessageBubble,
                    d = this.state,
                    p = d.attachmentWidth,
                    f = d.textContentWidth,
                    m = !!Object.values(Hr).includes(t.name),
                    h = kt(n, p, f),
                    v = h.isAttachmentSquared ? 'both' : s ? 'right' : 'left',
                    y = g.a.createElement(
                      J.a,
                      { onClick: this._handleOnClick, onLayout: this._handleAttachmentLayout },
                      g.a.createElement(Br.a, {
                        card: { name: t.name, url: t.url, binding_values: t.binding_values, users: t.users },
                        cardContext: { tweetUserId: c.sender_id },
                        dmSentOrReceived: s ? 'sent' : 'received',
                        withSquareBottomBorderRadius: v,
                      }),
                    ),
                    b = n
                      ? g.a.createElement(
                          J.a,
                          {
                            onLayout: this._handleTextContentLayout,
                            style: s ? Vr.sentMessageWrapper : Vr.receivedMessageWrapper,
                          },
                          g.a.createElement(Dr, {
                            excludeCardUrl: t.url,
                            hasAssociatedAttachment: !0,
                            isActive: r,
                            isFailedDraft: a,
                            isFirstRapidFire: i,
                            isRapidFire: o,
                            isSent: s,
                            messageData: c,
                            rootStyle: h.isTextSquared ? (s ? Vr.textSentSquared : Vr.textReceivedSquared) : void 0,
                            withCta: l,
                            withMessageBubble: u,
                          }),
                        )
                      : null
                  return m
                    ? g.a.createElement(Tr, { attachmentContent: y, isVisible: h.compositeRendered, textContent: b })
                    : g.a.createElement(Lr, {
                        isActive: r,
                        isFailedDraft: a,
                        isFirstRapidFire: i,
                        isRapidFire: o,
                        isSent: s,
                        messageData: c,
                        withCta: l,
                        withMessageBubble: u,
                      })
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      v()(Kr, 'defaultProps', { hasUserText: !1 }), v()(Kr, 'contextType', A.a)
      var Vr = L.a.create(function (e) {
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
        Wr = Pr(Kr)
      function zr(e) {
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
            var a = m()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var Gr = Be.a.f720438f,
        qr = (function (e) {
          u()(n, e)
          var t = zr(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              v()(c()(e), 'state', { attachmentWidth: void 0, textContentWidth: void 0 }),
              v()(c()(e), '_getSquareBottomStyles', function (t) {
                var n = e.props.isSent,
                  r = 'left'
                return t ? (r = 'both') : n && (r = 'right'), Yr[r]
              }),
              v()(c()(e), '_handleAttachmentLayout', function (t) {
                var n = t.nativeEvent.layout.width
                e.state.attachmentWidth !== n && e.setState({ attachmentWidth: n })
              }),
              v()(c()(e), '_handleTextContentLayout', function (t) {
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
                    s = e.messageData,
                    c = e.withCta,
                    l = e.withMessageBubble,
                    u = this.state,
                    d = u.attachmentWidth,
                    p = u.textContentWidth
                  if (!s || !s.attachment || !s.attachment.fleet) return null
                  var f = kt(t, d, p),
                    m = f.compositeRendered,
                    h = f.isAttachmentSquared,
                    v = f.isTextSquared,
                    y = [
                      Xr.tombstoneWrapper,
                      o ? Xr.sentMessageWrapper : Xr.receivedMessageWrapper,
                      this._getSquareBottomStyles(h),
                    ],
                    b = g.a.createElement(
                      J.a,
                      { onLayout: this._handleAttachmentLayout, style: y },
                      g.a.createElement($.b, { color: 'gray700' }, Gr),
                    ),
                    _ = t
                      ? g.a.createElement(
                          J.a,
                          {
                            onLayout: this._handleTextContentLayout,
                            style: [
                              o ? Xr.sentMessageWrapper : Xr.receivedMessageWrapper,
                              !l && Xr.fleetReactionSpacing,
                            ],
                          },
                          g.a.createElement(Dr, {
                            hasAssociatedAttachment: !0,
                            isActive: n,
                            isFailedDraft: r,
                            isFirstRapidFire: a,
                            isRapidFire: i,
                            isSent: o,
                            messageData: s,
                            rootStyle: v ? (o ? Xr.sentSquared : Xr.receivedSquared) : void 0,
                            withCta: c,
                            withMessageBubble: l,
                          }),
                        )
                      : null
                  return g.a.createElement(Tr, { attachmentContent: b, isVisible: m, textContent: _ })
                },
              },
            ]),
            n
          )
        })(g.a.Component),
        Yr = L.a.create(function (e) {
          return {
            both: { borderBottomRightRadius: e.borderRadii.none, borderBottomLeftRadius: e.borderRadii.none },
            left: { borderBottomLeftRadius: e.borderRadii.none },
            right: { borderBottomRightRadius: e.borderRadii.none },
          }
        }),
        Xr = L.a.create(function (e) {
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
        Qr = qr,
        Zr = n('prG5'),
        Jr = n('RCZO'),
        $r = n('A91F'),
        ea = Be.a.b327c129,
        ta = function (e) {
          e.stopPropagation()
        },
        na = function (e) {
          var t = e.media,
            n = e.mediaUrl,
            r = t.ext_alt_text || ea,
            a = t.media_url_https,
            i = t.original_info || {},
            o = i.height,
            s = i.width,
            c = Object(Jr.b)(t).rgb,
            l = g.a.createElement(Zr.a, {
              accessibilityLabel: r,
              aspectMode: $r.a.withinRange(9 / 16, 10),
              backgroundColor: c,
              image: { url: a, width: s, height: o },
              shouldShowAltLabel: !!t.ext_alt_text,
            })
          return n ? g.a.createElement(B.a, { interactiveStyles: null, link: n, onPress: ta }, l) : l
        },
        ra = n('Modb'),
        aa = n('lklz'),
        ia = n('XrEN'),
        oa = n('ZvMt'),
        sa = function (e) {
          var t = e.media,
            n = e.messageId,
            r = t && ia.a.extractVideoProps(aa.b.forDm(n), t)
          return r
            ? g.a.createElement(
                ra.a,
                an()({}, r, { aspectRatio: oa.a.getAspectRatio(t.video_info), withPostPlayback: !0 }),
              )
            : null
        },
        ca = Object(sn.a)().withAnalytics()
      function la(e) {
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
            var a = m()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var ua = (function (e) {
        u()(n, e)
        var t = la(n)
        function n(e, r) {
          var i
          return (
            a()(this, n),
            (i = t.call(this, e, r)),
            v()(c()(i), '_handleLayout', function (e) {
              var t = e.nativeEvent.layout.width
              i.state.width !== t && i.setState({ width: t })
            }),
            v()(c()(i), '_getElement', function () {
              var e = i.props,
                t = e.contentType,
                n = e.isSensitive
              return ''.concat(n ? 'sensitive' : 'untrusted', '_').concat(t, '_interstitial')
            }),
            v()(c()(i), '_handleClick', function () {
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
                  s = i.width < L.a.theme.breakpoints.micro
                return o
                  ? g.a.createElement(
                      J.a,
                      {
                        focusable: !0,
                        onLayout: this._handleLayout,
                        style: [
                          pa.root,
                          s ? { flexDirection: 'column' } : { flexDirection: 'row', alignItems: 'center' },
                          a && da[a],
                        ],
                      },
                      g.a.createElement(J.a, { style: pa.description }, g.a.createElement($.b, null, r)),
                      g.a.createElement(
                        J.a,
                        { style: [pa.button, s ? pa.breakButtonWrapper : void 0] },
                        g.a.createElement(
                          yt.a,
                          { onClick: this._handleClick, size: 'small', style: pa.buttonElement, type: 'brandText' },
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
      })(g.a.PureComponent)
      v()(ua, 'defaultProps', { isSensitive: !1 })
      var da = L.a.create(function (e) {
          return {
            both: { borderBottomRightRadius: e.borderRadii.none, borderBottomLeftRadius: e.borderRadii.none },
            left: { borderBottomLeftRadius: e.borderRadii.none },
            right: { borderBottomRightRadius: e.borderRadii.none },
          }
        }),
        pa = L.a.create(function (e) {
          return {
            breakButtonWrapper: {
              marginTop: L.a.theme.spaces.space4,
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
        fa = Object(nt.a)(ca(ua)),
        ma = n('CoGJ')
      function ha(e, t) {
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
      function va(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ha(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ha(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function ya(e) {
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
            var a = m()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var ba = g.a.createElement(ma.a, null),
        ga = Be.a.d9de7b57,
        _a = Be.a.f2879f4d,
        Ea = Be.a.b518221e,
        Oa = Be.a.eeaa9f90,
        Sa = Be.a.g2b43663,
        Ca = Be.a.f277e949,
        wa = (function (e) {
          u()(n, e)
          var t = ya(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              v()(c()(e), 'state', { attachmentWidth: void 0, textContentWidth: void 0 }),
              v()(c()(e), '_renderAttachment', function () {
                var t,
                  n,
                  r = e.props,
                  a = r.entry,
                  i = r.hasUserText,
                  o = r.isFirstRapidFire,
                  s = r.isRapidFire,
                  c = r.isSent,
                  l = r.isTrusted,
                  u = r.messageData,
                  d = e.state,
                  p = d.attachmentWidth,
                  f = d.textContentWidth,
                  m = (u || {}).attachment,
                  h = a.is_draft,
                  v = kt(i, p, f),
                  y = [
                    ka.mediaAttachment,
                    c && ka.isSent,
                    !c && ka.received,
                    c && v.isAttachmentSquared && ka.equalComponentDimensionsSent,
                    !c && v.isAttachmentSquared && ka.equalComponentDimensionsReceived,
                    s && !o && c && ka.rapidFireSent,
                    s && !o && !c && ka.rapidFireReceived,
                  ],
                  b = null
                if (
                  (!h && a.conversation_id && (b = '/messages/'.concat(a.conversation_id, '/media/').concat(a.id)), m)
                )
                  if (m.photo) (t = m.photo), (n = g.a.createElement(na, { media: t, mediaUrl: b }))
                  else if (m.animated_gif)
                    (t = m.animated_gif), (n = g.a.createElement(sa, { media: t, messageId: a.id }))
                  else if (m.video) {
                    if (((t = m.video), Object(Ye.k)(m, e.context.featureSwitches)))
                      throw new Error('DMMediaMessage should not be used to render voice messages')
                    n = g.a.createElement(sa, { media: t, messageId: a.id })
                  }
                var _ = v.isAttachmentSquared ? 'both' : c ? 'right' : 'left',
                  E = t && n && (c ? n : e._getMediaContentWithGuard(t, l, n, _))
                return {
                  attachmentContent: g.a.createElement(J.a, { onLayout: e._handleAttachmentLayout, style: y }, E),
                  media: t,
                }
              }),
              v()(c()(e), '_handleAttachmentLayout', function (t) {
                var n = t.nativeEvent.layout.width
                if (e.state.attachmentWidth !== n) {
                  var r = { attachmentWidth: n }
                  e.setState(r)
                }
              }),
              v()(c()(e), '_handleTextContentLayout', function (t) {
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
                    s = e.isSent,
                    c = e.messageData,
                    l = e.withCta,
                    u = e.withMessageBubble,
                    d = this.state,
                    p = d.attachmentWidth,
                    f = d.textContentWidth,
                    m = t.is_draft,
                    h = kt(n, p, f),
                    v = this._renderAttachment(),
                    y = v.attachmentContent,
                    b = v.media,
                    _ = n
                      ? g.a.createElement(
                          J.a,
                          {
                            onLayout: this._handleTextContentLayout,
                            style: s ? ka.sentMessageWrapper : ka.receivedMessageWrapper,
                          },
                          g.a.createElement(Dr, {
                            hasAssociatedAttachment: !0,
                            isActive: !!r,
                            isFailedDraft: a,
                            isFirstRapidFire: !!i,
                            isRapidFire: !!o,
                            isSent: s,
                            messageData: m ? c : this._parseMessageData(c, b),
                            rootStyle: h.isTextSquared ? (s ? ka.sentSquared : ka.receivedSquared) : void 0,
                            withCta: l,
                            withMessageBubble: u,
                          }),
                        )
                      : null
                  return g.a.createElement(Tr, { attachmentContent: y, isVisible: h.compositeRendered, textContent: _ })
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
                      var s = ('animated_gif' === e.type && Sa) || ('video' === e.type && Oa) || Ea
                      return g.a.createElement(
                        fa,
                        {
                          contentType: e.type,
                          ctaText: s,
                          description: _a,
                          isSensitive: !0,
                          withSquareBottomBorderRadius: r,
                        },
                        n,
                      )
                    }
                  } else if (!i && e.possibly_sensitive)
                    return g.a.createElement(
                      fa,
                      {
                        contentType: e.type,
                        ctaText: Ca,
                        description: ba,
                        isSensitive: !0,
                        withSquareBottomBorderRadius: r,
                      },
                      n,
                    )
                  return t
                    ? n
                    : g.a.createElement(
                        fa,
                        { contentType: e.type, ctaText: Ca, description: ga, withSquareBottomBorderRadius: r },
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
                    ? va(va({}, e), {}, { entities: va(va({}, e.entities), {}, { urls: r, media: t ? [t] : [] }) })
                    : void 0
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      v()(wa, 'contextType', A.a), v()(wa, 'defaultProps', { hasUserText: !1 })
      var ka = L.a.create(function (e) {
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
        Ra = wa,
        Ia = Object(sn.a)().propsFromActions(function () {
          return { markSpamStatus: q.markSpamStatus }
        })
      function Pa(e) {
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
            var a = m()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var xa = Be.a.fd07947f,
        Ta = Be.a.c7a92dc9,
        Aa = Be.a.f277e949,
        Ma = Be.a.fb3ccb55,
        ja = Ia(
          (function (e) {
            u()(n, e)
            var t = Pa(n)
            function n() {
              var e
              a()(this, n)
              for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
              return (
                (e = t.call.apply(t, [this].concat(i))),
                v()(c()(e), '_handlePress', function (t) {
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
                    return g.a.createElement(
                      fa,
                      { contentType: 'dm', ctaText: Aa, description: Ma },
                      e,
                      this._renderButtons(),
                    )
                  },
                },
                {
                  key: '_renderButtons',
                  value: function () {
                    return g.a.createElement(
                      J.a,
                      { style: Da.buttons },
                      g.a.createElement(
                        yt.a,
                        { onPress: this._handlePress(!1), style: Da.leftButton, type: 'brandOutlined' },
                        Ta,
                      ),
                      g.a.createElement(yt.a, { onPress: this._handlePress(!0), type: 'brandOutlined' }, xa),
                    )
                  },
                },
              ]),
              n
            )
          })(g.a.PureComponent),
        ),
        Da = L.a.create(function (e) {
          return {
            buttons: { flexDirection: 'row', paddingTop: e.spaces.space4 },
            leftButton: { marginRight: e.spaces.space12 },
          }
        }),
        La = n('U+bB'),
        Fa = function (e) {
          var t = e.images,
            n = t.svg || t.size_1x
          if (n) return n.url
        },
        Ba = L.a.create(function (e) {
          return {
            stickerItem: {
              height: 'calc(3 * '.concat(e.fontSizes.title2, ')'),
              width: 'calc(3 * '.concat(e.fontSizes.title2, ')'),
            },
          }
        }),
        Na = function (e) {
          var t = e.sticker
          return g.a.createElement(La.a, { accessibilityLabel: t.display_name, source: Fa(t), style: Ba.stickerItem })
        },
        Ua = n('XOJV'),
        Ha = function (e, t) {
          var n,
            r = null === (n = t.messageData) || void 0 === n ? void 0 : n.attachment
          if (r && r.tweet) return r.tweet.status
        },
        Ka = Object(sn.a)()
          .propsFromState(function () {
            return { tweet: Ua.a.createHydratedTweetSelector(Ha) }
          })
          .propsFromActions(function () {
            return { popOutConversation: q.popOutConversation }
          }),
        Va = n('b5s6'),
        Wa = g.a.createElement($.b, { link: '/settings/safety' }),
        za = function (e) {
          return g.a.createElement(
            Be.a.I18NFormatMessage,
            { $i18n: 'j3c7dd33' },
            g.a.cloneElement(Wa, null, Be.a.adcf07b5),
          )
        },
        Ga = Be.a.e4df0ad7,
        qa = Be.a.f277e949,
        Ya = Be.a.b5b91d58,
        Xa = Be.a.bb594d7b,
        Qa = g.a.createElement(za, null)
      var Za = L.a.create(function (e) {
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
        Ja = Ka(function (e) {
          var t = g.a.useContext(A.a).featureSwitches,
            n = e.conversationId,
            r = e.displaySensitiveMedia,
            a = e.hasUserText,
            i = void 0 !== a && a,
            o = e.isActive,
            s = void 0 !== o && o,
            c = e.isDmNsfwMediaFilterEnabled,
            l = e.isFailedDraft,
            u = e.isFirstRapidFire,
            d = void 0 !== u && u,
            p = e.isRapidFire,
            f = void 0 !== p && p,
            m = e.isSent,
            h = e.isTrusted,
            v = e.messageData,
            y = e.popOutConversation,
            b = e.tweet,
            _ = e.withCta,
            E = e.withMessageBubble,
            O = g.a.useState(void 0),
            S = le()(O, 2),
            C = S[0],
            w = S[1],
            k = g.a.useState(void 0),
            R = le()(k, 2),
            I = R[0],
            P = R[1],
            x = g.a.useMemo(
              function () {
                return function () {
                  n && y(n)
                }
              },
              [n, y],
            ),
            T = g.a.useMemo(
              function () {
                return function (e) {
                  var t = e.nativeEvent.layout.width
                  C !== t && w(t)
                }
              },
              [C],
            ),
            M = g.a.useMemo(
              function () {
                return function (e) {
                  var t = e.nativeEvent.layout.width
                  I !== t && P(t)
                }
              },
              [I],
            )
          if (!v || !v.attachment || !v.attachment.tweet) return null
          var j = v.attachment.tweet,
            D = m ? 'sent' : 'received',
            L = kt(i, C, I),
            F = g.a.createElement(Va.a, {
              onPress: x,
              style: [
                Za[D],
                i && Za.attachment,
                L.isAttachmentSquared ? (m ? Za.sentAttachmentSquared : Za.receivedAttachmentSquared) : void 0,
              ],
              tweetId: j.status,
            }),
            B = L.isAttachmentSquared ? 'both' : m ? 'right' : 'left',
            N = (function () {
              if (!b) return null
              if (m) return F
              if (b.possibly_sensitive && t.isTrue('dm_conversations_nsfw_media_filter_enabled')) {
                if (c || void 0 === c)
                  return g.a.createElement(
                    fa,
                    { contentType: 'photo', ctaText: Xa, description: Ya, withSquareBottomBorderRadius: B },
                    F,
                  )
              } else if (!r && b.possibly_sensitive)
                return g.a.createElement(
                  fa,
                  { contentType: 'photo', ctaText: qa, description: Qa, withSquareBottomBorderRadius: B },
                  F,
                )
              return h
                ? F
                : g.a.createElement(
                    fa,
                    { contentType: 'tweet', ctaText: qa, description: Ga, withSquareBottomBorderRadius: B },
                    F,
                  )
            })(),
            U = g.a.createElement(J.a, { onLayout: T, style: Za.attachment }, N),
            H = i
              ? g.a.createElement(
                  J.a,
                  { onLayout: M, style: m ? Za.sentMessageWrapper : Za.receivedMessageWrapper },
                  g.a.createElement(Dr, {
                    hasAssociatedAttachment: !0,
                    isActive: s,
                    isFailedDraft: l,
                    isFirstRapidFire: d,
                    isRapidFire: f,
                    isSent: m,
                    messageData: v,
                    rootStyle: L.isTextSquared ? (m ? Za.sentSquared : Za.receivedSquared) : void 0,
                    tweetId: j.status,
                    withCta: _,
                    withMediaLinks: !0,
                    withMessageBubble: E,
                  }),
                )
              : null
          return g.a.createElement(Tr, { attachmentContent: U, isVisible: L.compositeRendered, textContent: H })
        }),
        $a = n('htvZ'),
        ei = n('MH+I'),
        ti = n('5Ixf'),
        ni = n('AtEG')
      function ri(e) {
        var t,
          n,
          r = g.a.useContext($a.a),
          a = e.isLowQuality,
          i = e.isSent,
          o = e.isTrusted
        if (null === (t = e.media) || void 0 === t || !t.video_info) return null
        var s = le()(r.activeVoiceMessage, 2),
          c = s[0],
          l = s[1],
          u = le()(r.playerApi, 1)[0],
          d = le()(r.playerState, 1)[0],
          p = r.scribeAction,
          f = le()(c, 1)[0],
          m = e.messageId === f
        if (!p) return null
        var h = ii(d),
          v = (null === (n = e.media) || void 0 === n ? void 0 : n.video_info.duration_millis) || 0,
          y = {
            durationMs: v,
            isActive: m,
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
          m &&
            h &&
            h.contentId === e.media.id_str &&
            ((y.playerApi = u),
            (y.playerState = d),
            null != h && h.durationMs && (y.durationMs = null == h ? void 0 : h.durationMs)),
          g.a.createElement(ai, y)
        )
      }
      function ai(e) {
        var t = e.isActive,
          n = e.isSent,
          r = e.playerApi,
          a = e.playerState,
          i = null == a ? void 0 : a.isPlaying,
          o = ii(a),
          s = (null == o ? void 0 : o.currentTimeMs) || 0,
          c = (null == o ? void 0 : o.durationMs) || e.durationMs,
          l = Math.max(t ? c - s : c, 0)
        g.a.useLayoutEffect(function () {
          e.onImpression()
        }, []),
          g.a.useEffect(
            function () {
              r && 0 === s && (r.play(), e.onPlay())
            },
            [r],
          )
        var u = L.a.isDarkMode() || n,
          d = { color: u ? 'whiteOnColor' : 'normal' },
          p = [
            ci.voiceMessage,
            li({ isSent: n, squared: t }),
            n ? ci.voiceMessageSent : ci.voiceMessageReceived,
            me(L.a.theme.scale).voiceMessage({ isVoiceMessageActive: t, isSent: n }),
          ],
          f = i ? ti.a : ni.a
        return g.a.createElement(
          J.a,
          { style: [ci.container, me(L.a.theme.scale).voiceMessageContainer({ isVoiceMessageActive: t, isSent: n })] },
          g.a.createElement(
            J.a,
            { style: p },
            g.a.createElement(J.a, { style: ci.startSpacer }),
            g.a.createElement(yt.a, {
              accessibilityLabel: i ? si : oi,
              icon: g.a.createElement(f, { style: u ? ci.iconColorDark : ci.iconColorDefault }),
              onPress: function () {
                r ? (i ? (r.pause(), e.onPause()) : (r.play(), e.onPlay())) : e.onPlayRequest()
              },
              type: 'onMediaText',
            }),
            g.a.createElement(J.a, { style: ci.durationSpacer }),
            g.a.createElement(
              J.a,
              { style: n ? ci.durationOpacity : void 0 },
              g.a.createElement(
                ei.a,
                an()({ countdown: !0, timeMs: l }, d, {
                  color: 'gray700',
                  size: 'subtext2',
                  style: n ? ci.durationDark : void 0,
                  weight: 'bold',
                  withCountdownSymbol: t,
                }),
              ),
            ),
            g.a.createElement(J.a, { style: ci.endSpacer }),
          ),
        )
      }
      var ii = function (e) {
          return e ? e.tracks[e.currentTrackId] : null
        },
        oi = Be.a.c94b7d89,
        si = Be.a.eb6f9582,
        ci = L.a.create(function (e) {
          return {
            displayNone: { display: 'none' },
            container: { flexDirection: 'row', alignSelf: 'flex-end', alignItems: 'center', justifyContent: 'center' },
            voiceMessage: {
              alignSelf: 'flex-end',
              flexDirection: pe.a.getConstants().isRTL ? 'row-reverse' : 'row',
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
      function li(e) {
        var t = e.isSent,
          n = e.squared
        return [ui.base, t ? ui.sent : ui.received, n ? (t ? ui.sentSquared : ui.receivedSquared) : void 0]
      }
      var ui = L.a.create(function (e) {
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
      function di(e, t) {
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
      function pi(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? di(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : di(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function fi(e) {
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
            var a = m()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var mi = (function (e) {
        u()(n, e)
        var t = fi(n)
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
                  s = o && o.attachment ? o.attachment : {},
                  c = n.marked_as_spam,
                  l = Ct(n),
                  u = !!o && !!o.ctas,
                  d = St(n),
                  p = (function (e) {
                    var t = e.message_data
                    if (!t) return !1
                    if (Ct(e) && !wt(e)) return !1
                    if (!t.text) return !1
                    var n = Object(Et.parse)(t.text)
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
                  m = wt(n)
                e = s.sticker ? g.a.createElement(Na, { sticker: s.sticker }) : this._renderDMMessage(d, u, f)
                var h = c ? g.a.createElement(ja, { conversationId: n.conversation_id, dmId: n.id }, e) : e,
                  v = l && !m && !Object(Ye.k)(null == o ? void 0 : o.attachment, this.context.featureSwitches),
                  y = [
                    r ? hi.isSent : hi.isReceived,
                    u && hi.withCta,
                    v ? hi.mediaRoot : hi.flexShrink,
                    this.props.style,
                  ]
                return g.a.createElement(
                  J.a,
                  { style: y },
                  h,
                  o && o.ctas
                    ? g.a.createElement(wr, {
                        callToActions: o.ctas,
                        isSent: r,
                        onCtaClick: a,
                        onImpression: i,
                        withSticker: !!s.sticker || p,
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
                  s = r.isDmNsfwMediaFilterEnabled,
                  c = r.isFirstRapidFire,
                  l = r.isLowQuality,
                  u = r.isRapidFire,
                  d = r.isSent,
                  p = r.isTrusted,
                  f = i.error,
                  m = i.message_data,
                  h = m && pi(pi({}, m), {}, { entities: (m && m.entities) || void 0, error: f }),
                  v = null == h ? void 0 : h.attachment,
                  y = {
                    isActive: o,
                    isFailedDraft: !!f,
                    isFirstRapidFire: c,
                    isRapidFire: u,
                    isSent: d,
                    withCta: t,
                    withMessageBubble: n,
                  }
                if (h && v) {
                  if (v.tweet)
                    return g.a.createElement(
                      Ja,
                      an()(
                        {
                          conversationId: i.conversation_id,
                          displaySensitiveMedia: a,
                          hasUserText: e,
                          isDmNsfwMediaFilterEnabled: s,
                          isTrusted: p,
                          messageData: h,
                        },
                        y,
                      ),
                    )
                  if (v.photo || v.animated_gif || v.video)
                    return v.video && Object(Ye.k)(v, this.context.featureSwitches)
                      ? g.a.createElement(ri, {
                          isLowQuality: l,
                          isSent: !!d,
                          isTrusted: p,
                          media: v.video,
                          messageId: i.id,
                        })
                      : g.a.createElement(
                          Ra,
                          an()(
                            {
                              displaySensitiveMedia: a,
                              entry: i,
                              hasUserText: e,
                              isDmNsfwMediaFilterEnabled: s,
                              isTrusted: p,
                              messageData: h,
                            },
                            y,
                          ),
                        )
                  if (v.card)
                    return g.a.createElement(
                      Wr,
                      an()({ cardUrl: v.card, conversationId: i.conversation_id, hasUserText: e, messageData: h }, y),
                    )
                  if (v.fleet) return g.a.createElement(Qr, an()({ entry: i, hasUserText: e, messageData: h }, y))
                }
                return g.a.createElement(Lr, an()({}, y, { messageData: h }))
              },
            },
          ]),
          n
        )
      })(g.a.Component)
      v()(mi, 'contextType', A.a)
      var hi = L.a.create(function (e) {
          return {
            flexShrink: { flexShrink: 1 },
            mediaRoot: { flex: 1 },
            isSent: { alignItems: 'flex-end' },
            isReceived: { alignItems: 'flex-start' },
            withCta: { alignItems: 'stretch' },
          }
        }),
        vi = mi,
        yi = L.a.create(function (e) {
          return { avatar: { borderRadius: e.borderRadii.infinite } }
        }),
        bi = function (e) {
          var t = e.showAvatar,
            n = e.size,
            r = void 0 === n ? 'xLarge' : n,
            a = e.user
          return t
            ? g.a.createElement(ee.a, {
                accessibilityLabel: a.name,
                link: { pathname: '/'.concat(a.screen_name) },
                size: r,
                uri: a.profile_image_url_https,
              })
            : g.a.createElement(J.a, { style: [yi.avatar, ee.a.getSizeStyle(r)] })
        },
        gi = n('m3Bd'),
        _i = n.n(gi),
        Ei = n('B3eJ')
      function Oi(e) {
        var t = e.color,
          n = e.isActive,
          r = e.size,
          a = _i()(e, ['color', 'isActive', 'size']),
          i = g.a.useContext($a.a),
          o = g.a.useState(0.5),
          s = le()(o, 2),
          c = s[0],
          l = s[1],
          u = le()(i.playerState, 1)[0]
        g.a.useEffect(
          function () {
            n && u && u.isPlaying && l(Math.random())
          },
          [n, u],
        )
        var d = n && (null == u ? void 0 : u.isPlaying),
          p = r + 2 * Si,
          f = [Ci.container, a.style, { width: r, height: r }]
        return g.a.createElement(
          J.a,
          { style: f },
          g.a.createElement(
            J.a,
            { style: [Ci.container, Ci.transitionOpacity, d ? Ci.show : Ci.hide] },
            fe.a.reducedMotionEnabled
              ? null
              : g.a.createElement(Ei.a, { audioLevel: c, color: t, paused: !d, size: r }),
          ),
          g.a.createElement(J.a, {
            style: [Ci.border, { width: p, height: p }, Ci.transitionOpacity, n ? Ci.show : Ci.hide],
          }),
        )
      }
      var Si = parseInt(L.a.theme.spaces.space2, 10),
        Ci = L.a.create(function (e) {
          return {
            container: { alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' },
            border: {
              position: 'absolute',
              top: -1 * Si,
              left: -1 * Si,
              backgroundColor: e.colors.navigationBackground,
              borderRadius: e.borderRadii.infinite,
            },
            transitionOpacity: { transition: 'opacity 0.2s 0s ease-in-out' },
            hide: { opacity: 0 },
            show: { opacity: 1 },
          }
        }),
        wi = n('uArA'),
        ki = 'messageEntry'
      function Ri(e, t) {
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
      function Ii(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Ri(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Ri(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function Pi(e) {
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
            var a = m()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var xi = { element: 'cta_dm' },
        Ti = { isGroupDM: !1, isRapidFire: !1, isFirstRapidFire: !1, isLastRapidFire: !1 },
        Ai = (function (e) {
          u()(n, e)
          var t = Pi(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              v()(
                c()(e),
                '_handleClick',
                Object(wi.a)(function () {
                  var t = e.props,
                    n = t.entry,
                    r = n.error,
                    a = n.id,
                    i = n.is_draft,
                    o = t.isActive,
                    s = t.setActiveEntry
                  i || r || (s(o ? null : a), e._handleScribeMessageEntryClick())
                }),
              ),
              v()(c()(e), '_handleScribeMessageEntryClick', function () {
                var t = e.props.isActive
                if (!bt.a.isEnabled && !t) {
                  var n = e.props.entry,
                    r = { component: 'message', element: Object(Ye.c)(n), action: 'click' }
                  e._scribeAction(r)
                }
              }),
              v()(c()(e), '_handleCtaImpression', function () {
                e._scribeAction(Ii(Ii({}, xi), {}, { action: 'show' }))
              }),
              v()(c()(e), '_handleCtaClick', function () {
                e._scribeAction(Ii(Ii({}, xi), {}, { action: 'click' }))
              }),
              v()(c()(e), '_isDMVoiceMessage', function () {
                var t
                return Object(Ye.k)(
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
                  return !Object(Z.a)(this.props, e)
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
                    s = !o.isRapidFire || o.isLastRapidFire,
                    c =
                      this.context.featureSwitches.isTrue('dm_vdl_enabled') &&
                      this.context.featureSwitches.isTrue('dm_vdl_chat_p0_enabled'),
                    l = [
                      ji.root.base,
                      c && ji.root.vdlPadding,
                      s && ji.root.contentSpacing,
                      s && c && ji.root.vdlContentSpacing,
                    ],
                    u = this._isDMVoiceMessage(),
                    d = c ? r && !a : !a || u
                  if (!i) return null
                  var p = !bt.a.isEnabled || a
                  return g.a.createElement(
                    Oe.a,
                    { viewType: 'message' },
                    g.a.createElement(
                      J.a,
                      { style: l },
                      g.a.createElement(
                        B.a,
                        {
                          accessibilityExpanded: !(!p || !n),
                          focusable: !0,
                          interactiveStyles: null,
                          onPress: p ? this._handleClick : void 0,
                          style: a ? ji.root.sent : ji.root.received,
                          testID: ki,
                        },
                        function (t) {
                          var n = t.isFocused,
                            r = t.isHovered
                          return e._renderMessage({
                            isFocused: n,
                            isHovered: r,
                            rapidFireProps: o,
                            withVDLRefresh: c,
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
                    s = this.props,
                    c = s.displaySensitiveMedia,
                    l = s.entry,
                    u = s.inboxType,
                    d = s.isActive,
                    p = s.isDmNsfwMediaFilterEnabled,
                    f = s.isGroupDM,
                    m = s.isLowQuality,
                    h = s.isReadOnly,
                    v = s.isSent,
                    y = s.isTrusted,
                    b = s.isVoiceMessageActive,
                    _ = s.isWide,
                    E = s.participants,
                    O = s.perspective,
                    S = s.scribeVoiceMessage,
                    C = s.setShouldFreezeUpdates,
                    w = a.isFirstRapidFire,
                    k = a.isRapidFire,
                    R = [
                      v ? ji.messageContainer.sent : ji.messageContainer.received,
                      _ ? ji.messageContainer.wide : ji.messageContainer.narrow,
                      v && _ && ji.messageContainer.sentWide,
                      !v && _ && ji.messageContainer.receivedWide,
                    ],
                    I = y && !h,
                    P = this._isDMVoiceMessage(),
                    x = null === (t = Object.keys(E)) || void 0 === t ? void 0 : t.length
                  return g.a.createElement(
                    J.a,
                    { style: R },
                    l.error
                      ? null
                      : g.a.createElement(en, {
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
                                  return S.report({ isLowQuality: m, isTrusted: y })
                                }
                              : void 0,
                          participantsCount: x,
                          perspective: O,
                          setShouldFreezeUpdates: C,
                          shouldShowReactionButton: I,
                          style: P && me(L.a.theme.scale).actionsContainer({ isSent: v, isVoiceMessageActive: b }),
                          withVDLRefresh: o,
                        }),
                    g.a.createElement(vi, {
                      displaySensitiveMedia: c,
                      entry: l,
                      isActive: d,
                      isDmNsfwMediaFilterEnabled: p,
                      isFirstRapidFire: w,
                      isLowQuality: m,
                      isRapidFire: k,
                      isSent: v,
                      isTrusted: y,
                      key: l.id,
                      onCtaClick: this._handleClick,
                      onCtaImpression: this._handleCtaImpression,
                      style: P && me(L.a.theme.scale).messageContainer({ isSent: v, isVoiceMessageActive: b }),
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
                    s = o.entry,
                    c = o.isActive,
                    l = o.isGroupDM,
                    u = o.isSent,
                    d = o.participants,
                    p = o.user
                  return p
                    ? g.a.createElement(br, {
                        conversationId: s.conversation_id,
                        entryId: s.id,
                        entryText: null === (n = s.message_data) || void 0 === n ? void 0 : n.text,
                        entryTime: s.time,
                        isActive: c,
                        isDraft: !!s.is_draft,
                        isError: !!s.error,
                        isGroupDM: l,
                        isLastRapidFire: a,
                        isRapidFire: i,
                        isSent: u,
                        localMediaId: null === (r = s.message_data) || void 0 === r ? void 0 : r.localMediaId,
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
                    s = a.user,
                    c = this._isDMVoiceMessage()
                  if (!s || (!t && !o)) return null
                  var l = de(L.a.theme.scale),
                    u = l.DMUserAvatarSizePx,
                    d = { showAvatar: !!c || !r || !!n, size: l.DMUserAvatarSizeType, user: s },
                    p = [
                      ji.userAvatar.base,
                      i ? ji.userAvatar.sent : ji.userAvatar.received,
                      c && me(L.a.theme.scale).userAvatar({ isVoiceMessageActive: o, isSent: i }),
                    ]
                  return g.a.createElement(
                    J.a,
                    { style: ji.userAvatar.container },
                    i ? null : g.a.createElement(J.a, { style: ji.userAvatar.spacer }),
                    c
                      ? g.a.createElement(Oi, {
                          color: i ? L.a.theme.colors.primary : L.a.theme.colors.text,
                          isActive: !!o,
                          size: u,
                          style: p,
                        })
                      : null,
                    g.a.createElement(J.a, { style: p }, g.a.createElement(bi, d)),
                  )
                },
              },
              {
                key: '_scribeAction',
                value: function (e) {
                  this.props.analytics.scribe(Ii({}, e))
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
        })(g.a.Component)
      v()(Ai, 'contextType', A.a), v()(Ai, 'defaultProps', Ti)
      var Mi = Object(nt.a)(
          xe(
            (function (e) {
              function t(t) {
                var n = t.entry,
                  r = g.a.useContext($a.a),
                  a = le()(r.activeVoiceMessage, 1)[0],
                  i = r.scribeAction,
                  o = le()(a, 1)[0] === n.id,
                  s = Ii(Ii({}, t), {}, { isVoiceMessageActive: o, scribeVoiceMessage: i })
                return g.a.createElement(e, s)
              }
              return (t.defaultProps = Ti), t
            })(Ai),
          ),
        ),
        ji = {
          root: L.a.create(function (e) {
            return {
              base: { flexDirection: 'column', paddingBottom: e.spaces.space2 },
              vdlPadding: { paddingBottom: '0px' },
              received: { cursor: 'default', alignItems: 'flex-start' },
              sent: { cursor: 'pointer', alignItems: 'flex-end' },
              contentSpacing: { paddingBottom: e.spaces.space20 },
              vdlContentSpacing: { paddingBottom: e.spaces.space24 },
            }
          }),
          messageContainer: L.a.create(function (e) {
            return {
              sent: { flexDirection: 'row', justifyContent: 'flex-end' },
              received: { flexDirection: 'row-reverse', justifyContent: 'flex-end' },
              narrow: { width: '100%' },
              wide: { width: ln },
              receivedWide: { paddingRight: e.spaces.space12 },
              sentWide: { paddingLeft: e.spaces.space12 },
            }
          }),
          userAvatar: L.a.create(function (e) {
            return {
              container: { flexDirection: 'row', alignItems: 'flex-end' },
              base: { position: 'absolute' },
              sent: { right: 0 },
              received: { left: 0 },
              spacer: { width: de(e.scale).DMUserAvatarSpacerPx },
            }
          }),
        },
        Di = n('H4nC'),
        Li = function (e) {
          var t = e.conversation,
            n = e.entry,
            r = e.inboxType,
            a = e.isActive,
            i = e.isFirstRapidFire,
            o = e.isLastRapidFire,
            s = e.isRapidFire,
            c = e.isWide,
            l = e.perspective,
            u = e.scribeNamespace,
            d = e.setActiveEntry,
            p = e.setShouldFreezeUpdates
          if (Object(P.b)(n) || Object(P.e)(n)) {
            var f = t.conversation_id,
              m = t.low_quality,
              h = t.participants,
              v = t.read_only,
              y = t.trusted,
              b = t.type,
              _ = n.message_data,
              E = (_ = void 0 === _ ? {} : _).sender_id,
              O = void 0 === f || y
            return g.a.createElement(Mi, {
              entry: n,
              inboxType: r,
              isActive: a,
              isFirstRapidFire: i,
              isGroupDM: b === q.CONVERSATION_TYPE.GROUP,
              isLastRapidFire: o,
              isLowQuality: !!m,
              isRapidFire: s,
              isReadOnly: v,
              isSent: E === l,
              isTrusted: !!O,
              isWide: c,
              participants: h,
              perspective: l,
              scribeNamespace: u,
              senderId: E,
              setActiveEntry: d,
              setShouldFreezeUpdates: p,
            })
          }
          return Object(P.a)(n)
            ? g.a.createElement(se, { conversation: t, entry: n, entryType: n.type, perspective: l })
            : Object(P.d)(n)
            ? g.a.createElement(Di.a, { entry: n, isCompact: !1 })
            : null
        },
        Fi = n('0JOx'),
        Bi = Object(Se.createSelector)(
          function (e, t) {
            var n = Object(Ve.o)(e, t.conversationId),
              r = n && Object(T.a)(n)
            return r && Object(q.selectEntry)(e, r)
          },
          function (e) {
            return { lastEntry: e }
          },
        ),
        Ni = Object(Ce.c)(Bi),
        Ui = (n('Ef13'), n('uDfI')),
        Hi = Object(Se.createSelector)(
          function (e, t) {
            return ke.e.selectMany(e, t.userIds || [])
          },
          function (e) {
            return { users: e }
          },
        ),
        Ki = Object(Ui.b)(Hi),
        Vi = n('Enqy'),
        Wi = n('+/1j')
      function zi(e) {
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
            var a = m()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var Gi = 'overflow',
        qi = function (e, t) {
          return e.id_str < t.id_str ? -1 : e.id_str > t.id_str ? 1 : 0
        },
        Yi = { stiffness: 1e3, damping: 70 },
        Xi = 140,
        Qi = { scale: Object(Vi.spring)(1, Yi), translateY: Object(Vi.spring)(0, Yi) },
        Zi = function (e, t) {
          return { key: e.id_str, data: e, style: Qi }
        },
        Ji = Object(O.a)({ translateY: Xi, scale: 0 }),
        $i = Object(O.a)({ scale: Object(Vi.spring)(1, Yi), translateY: Object(Vi.spring)(Xi, Yi) }),
        eo = [{ key: 'bubble', style: { scale: Object(Vi.spring)(1, Yi), translateY: Object(Vi.spring)(0, Yi) } }],
        to = Object(O.a)({ translateY: Xi, scale: 0 }),
        no = Object(O.a)({ scale: Object(Vi.spring)(1, Yi), translateY: Object(Vi.spring)(Xi, Yi) }),
        ro = function (e) {
          return [
            isFinite(e.scale) && { scale: e.scale.toFixed(3) },
            isFinite(e.translateY) && { translateY: ''.concat(Math.round(e.translateY), '%') },
          ].filter(Boolean)
        },
        ao = (function (e) {
          u()(n, e)
          var t = zi(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              v()(c()(e), 'state', { isHidden: !0 }),
              v()(c()(e), '_afterLeave', function () {
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
                  return !Object(Z.a)(this.props, e) || !Object(Z.a)(this.state, t)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.state.isHidden,
                    t = this.props.users,
                    n = t.sort(qi).slice(0, 5).map(Zi)
                  return (
                    t.length > 5 && n.push({ key: Gi, style: Qi }),
                    g.a.createElement(
                      J.a,
                      { style: [io.root, e && io.hidden] },
                      g.a.createElement(
                        J.a,
                        { style: io.avatarRow },
                        g.a.createElement(
                          Vi.TransitionMotion,
                          { styles: n, willEnter: Ji, willLeave: $i },
                          function (e) {
                            return g.a.createElement(
                              g.a.Fragment,
                              null,
                              e.map(function (e, n) {
                                if (e.style.scale <= 0.05) return null
                                var r = ro(e.style)
                                return e.key === Gi
                                  ? g.a.createElement(
                                      J.a,
                                      {
                                        key: e.key,
                                        style: [io.avatar, io.avatarSpacer, io.overflowAvatar, { transform: r }],
                                      },
                                      g.a.createElement(Wi.a, { style: io.overflowAvatarText }, '+', t.length - 5),
                                    )
                                  : g.a.createElement(
                                      J.a,
                                      { key: e.key, style: [io.avatar, { transform: r }] },
                                      g.a.createElement(ee.a, {
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
                      g.a.createElement(
                        Vi.TransitionMotion,
                        { didLeave: this._afterLeave, styles: t.length > 0 ? eo : [], willEnter: to, willLeave: no },
                        function (e) {
                          return g.a.createElement(
                            g.a.Fragment,
                            null,
                            e.map(function (e) {
                              return g.a.createElement(
                                J.a,
                                { key: e.key, style: [io.messageBubble, { transform: ro(e.style) }] },
                                g.a.createElement(J.a, { style: io.dot }),
                                g.a.createElement(J.a, { style: [io.dot, io.dot1] }),
                                g.a.createElement(J.a, { style: [io.dot, io.dot2] }),
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
        })(g.a.Component),
        io = L.a.create(function (e) {
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
        oo = Ki(ao),
        so = n('tn7R')
      function co(e) {
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
            var a = m()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var lo = (function (e) {
        u()(n, e)
        var t = co(n)
        function n() {
          var e
          a()(this, n)
          for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
          return (
            (e = t.call.apply(t, [this].concat(i))),
            v()(c()(e), '_timers', {}),
            v()(c()(e), 'state', { forceHide: !1, userIds: [] }),
            v()(c()(e), '_handleLivePipelineUpdate', function (t) {
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
                      Qe()(
                        e.userIds.filter(function (e) {
                          return e !== n
                        }),
                      ),
                      [n],
                    ),
                  }
                }))
            }),
            v()(c()(e), '_removeAvatar', function (t) {
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
                return !t && g.a.createElement(oo, { userIds: n })
              },
            },
            {
              key: '_teardownLivePipeline',
              value: function () {
                Object(so.a)(this._timers).forEach(function (e) {
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
                Object(Fi.h)().then(function (n) {
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
      })(g.a.PureComponent)
      v()(lo, 'contextType', A.a)
      var uo = Ni(lo),
        po = n('3AAD'),
        fo = n('iBK2'),
        mo = n('Fz18'),
        ho = n('RJrc'),
        vo = n('yw4N'),
        yo = (n('XygZ'), n('dPJJ')),
        bo = n('zrc3'),
        go = n('pQ3Z'),
        _o = n.n(go),
        Eo = n('VY6S'),
        Oo = n('Resy'),
        So = (function () {
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
                    i = new Oo.a(a, r),
                    o = i.translateBy(-1 * n._transform),
                    s = e.getRect()
                  s.contains(o.getTop()) ||
                  s.contains(o.getBottom()) ||
                  s.contains(i.getTop()) ||
                  s.contains(i.getBottom())
                    ? n._normalize()
                    : n._debouncedNormalize()
                }
              }),
              (this._transform = 0),
              (this._viewport = t),
              (this._lastScrollTs = 0),
              (this._debouncedNormalize = Object(Eo.a)(this._normalize, 500)),
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
      function Co(e) {
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
            var a = m()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var wo = (function (e) {
        u()(n, e)
        var t = Co(n)
        function n(e, r) {
          var i
          a()(this, n),
            (i = t.call(this, e, r)),
            v()(c()(i), '_updatesSuspended', !1),
            v()(c()(i), '_handleHeightsUpdate', function (e, t) {
              var n = i.props.anchoring
              i._scrollBy(n.offsetCorrection(e, t))
            }),
            v()(c()(i), '_receiveWrapperNode', function (e) {
              return i._offsetHandler.setWrapperNode(e)
            }),
            v()(c()(i), '_handleRefUpdate', function (e) {
              i._ref = e
            }),
            v()(c()(i), '_handleEnterFullscreen', function () {
              ;(i._updatesSuspended = !0), i._ref && i._ref.freezeUpdates()
            }),
            v()(c()(i), '_handleExitFullscreen', function () {
              ;(i._updatesSuspended = !1), i.forceUpdate(), i._ref && i._ref.resumeUpdates()
            })
          var o = i._findInitialAnchor(e.initialAnchors || [])
          return (
            (i._initialItemIndex = o ? o.anchorIndex : 0),
            (i._initialAnchor = o && o.anchor),
            (i._offsetHandler = new So(e.viewport)),
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
                var n = !_o()(this.props, e) || !_o()(this.state, t)
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
                  (this._unlistenFullscreenEnter = yo.a(this._handleEnterFullscreen)),
                  (this._unlistenFullscreenExit = yo.b(this._handleExitFullscreen))
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
                return g.a.createElement(
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
                    var n = Object(bo.a)(t, function (t) {
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
      })(g.a.Component)
      v()(wo, 'defaultProps', { anchoring: po.a })
      var ko = n('AOWc'),
        Ro = n('180P'),
        Io = n('Ey+e'),
        Po = n('SrIh'),
        xo = n('E6XO'),
        To = n('06eB'),
        Ao = n.n(To),
        Mo = n('aITJ')
      function jo(e) {
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
            var a = m()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var Do = function () {
          return window.performance ? window.performance.now() : Date.now()
        },
        Lo = (function (e) {
          u()(n, e)
          var t = jo(n)
          function n(e, r) {
            var i
            return (
              a()(this, n),
              (i = t.call(this, e, r)),
              v()(c()(i), '_perfReported', !1),
              v()(c()(i), '_observeElement', function (e) {
                var t = i._resizeObserver
                t && (t.disconnect(), t.observe(e))
              }),
              v()(c()(i), '_handleResize', function (e) {
                var t = i.props,
                  n = t.id,
                  r = t.onHeightChanged,
                  a = le()(e, 1)[0]
                i._isResizeObserverHeightUpdatesEnabled &&
                  a &&
                  a.contentRect.height !== i._currentHeight &&
                  ((i._currentHeight = a.contentRect.height), r(n, a.contentRect.height)),
                  i._perfReported || (i.props.onVisible(n, Do() - i._perfStart), (i._perfReported = !0))
              }),
              v()(c()(i), '_setRef', function (e) {
                var t = i.props,
                  n = t.id,
                  r = t.setAPI
                e ? ((i._element = e), r(n, c()(i)), i._observeElement(e)) : (r(n, void 0), (i._element = void 0))
              }),
              (i._isResizeObserverHeightUpdatesEnabled =
                i.context.featureSwitches.isTrue('responsive_web_vs_config_resize_observer_enabled') &&
                Mo.b.isDesktopOS() &&
                Mo.b.isSafari()),
              (i._resizeObserver = new window.ResizeObserver(i._handleResize)),
              (i._perfStart = Do()),
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
                  return t.render !== e.render || !Ao()(n, e.data)
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
                  return g.a.createElement('div', { ref: this._setRef }, n(t))
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      v()(Lo, 'contextType', A.a)
      var Fo = n('+d3d'),
        Bo = n('iChn')
      function No(e) {
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
            var a = m()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var Uo = (function (e) {
          u()(n, e)
          var t = No(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              v()(c()(e), '_cells', new Map()),
              v()(c()(e), '_heightUpdates', {}),
              v()(c()(e), '_visibilityMeasurements', new Map()),
              v()(c()(e), '_handleItemVisible', function (t, n) {
                e._visibilityMeasurements.has(t) || e._visibilityMeasurements.set(t, n)
              }),
              v()(c()(e), '_reportVisibilityMeasurements', function () {
                if (e._visibilityMeasurements.size) {
                  var t = 0
                  e._visibilityMeasurements.forEach(function (e) {
                    return (t += e)
                  })
                  var n = Math.round(t / e._visibilityMeasurements.size),
                    r = Mo.b.isDesktopOS() ? 'scroller_legacy' : 'scroller_legacy_mobile'
                  xo.c('scroller:ttfv:'.concat(r), { duration_ms: n }), e._visibilityMeasurements.clear()
                }
              }),
              v()(c()(e), '_handleCellHeightChanged', function (t, n) {
                ;(e._heightUpdates[t] = n), e._flushHeightUpdates()
              }),
              v()(
                c()(e),
                '_flushHeightUpdates',
                Object(Fo.a)(
                  function () {
                    ;(0, e.props.onHeightsChange)(e._heightUpdates), (e._heightUpdates = {})
                  },
                  100,
                  { trailing: !0 },
                ),
              ),
              v()(c()(e), '_setCellRef', function (t, n) {
                n ? e._cells.set(t, n) : e._cells.delete(t)
              }),
              v()(c()(e), '_handleDivRefUpdate', function (t) {
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
                  return Object(Bo.a)(
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
                  return g.a.createElement(
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
                    return g.a.createElement(Lo, {
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
        })(g.a.PureComponent),
        Ho = n('oi7R'),
        Ko = n('aWzz'),
        Vo = n('JD1h'),
        Wo = n('OeMK'),
        zo = n('0zXz'),
        Go = (n('IAdD'), n('jHwr')),
        qo = n('qdp+'),
        Yo = (function () {
          function e(t) {
            var n = t.list,
              r = t.rectangles,
              i = t.sliceEnd,
              o = t.sliceStart,
              s = t.viewportRectangle
            a()(this, e),
              (this._viewportRectangle = s),
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
                  if (0 === e.length) return new Oo.a(0, 0)
                  var t = this._rectangles,
                    n = e[0].id,
                    r = e[e.length - 1].id,
                    a = t[n].getTop(),
                    i = t[r].getBottom() - a
                  return new Oo.a(a, i)
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
                    r = Object(bo.a)(this._list, function (e) {
                      var r = e.id
                      return n[r].doesIntersectWith(t)
                    })
                  if (r < 0) return []
                  var a = Object(bo.a)(
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
                  return Object(qo.a)(this.getRenderedItems(), function (t) {
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
        Xo = n('64vW'),
        Qo = function (e, t, n) {
          if (t < 0 || t >= e.length) return -1
          if (n(e[t])) return t
          for (var r = 1; ; r++) {
            var a = t - r,
              i = t + r,
              o = a < 0,
              s = i >= e.length
            if (o && s) break
            if (!s && n(e[i])) return i
            if (!o && n(e[a])) return a
          }
          return -1
        },
        Zo = function (e) {
          var t = e.list,
            n = e.nextList,
            r = e.sliceEnd,
            a = e.sliceStart,
            i = n.reduce(function (e, t) {
              return (e[t.id] = !0), e
            }, {}),
            o = Qo(t, a, function (e) {
              var t = e.id
              return !Object(Wo.a)(t) && i.hasOwnProperty(t) && i[t]
            })
          if (-1 === o) return null
          var s = Object(bo.a)(n, function (e) {
            var n = e.id
            return t[o].id === n
          })
          return (
            Object(ko.a)(s >= 0, 'newSliceStart should be defined if we found a common item'),
            o > 0 && Object(Wo.a)(t[o - 1].id) && s > 0 && Object(Wo.a)(n[s - 1].id) && (s -= 1),
            { sliceStart: s, sliceEnd: Math.min(n.length, s + r - a) }
          )
        }
      function Jo(e, t) {
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
      function $o(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Jo(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Jo(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function es(e) {
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
            var a = m()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var ts = { heightsReady: !0 },
        ns = (function (e) {
          u()(n, e)
          var t = es(n)
          function n(e, r) {
            var i
            a()(this, n),
              (i = t.call(this, e, r)),
              v()(c()(i), '_updatesSuspended', !1),
              v()(c()(i), 'freezeUpdates', function () {
                i._updatesSuspended = !0
              }),
              v()(c()(i), 'resumeUpdates', function () {
                ;(i._updatesSuspended = !1), i._scheduleUpdate()
              }),
              v()(c()(i), '_handleHeightsChange', function (e) {
                i._postRenderProcessing({ hasListChanged: !1, newHeights: e })
              }),
              v()(c()(i), '_handleRefUpdate', function (e) {
                i._ref = e
              }),
              v()(c()(i), '_setNecessarySlice', function (e, t) {
                var n = i.state,
                  r = n.sliceEnd,
                  a = (function (e, t) {
                    if (t.start >= e.start && t.end <= e.end) return e
                    if (t.start >= e.end || t.end <= e.start) return t
                    var n = Math.max(e.start - t.start, t.end - e.end)
                    return { start: Math.min(e.start + n, t.start), end: Math.max(e.end - n, t.end) }
                  })({ start: n.sliceStart, end: r }, { start: e, end: t }),
                  o = a.end,
                  s = a.start
                i._setSlice(s, o)
              }),
              v()(c()(i), '_setSlice', function (e, t) {
                if (!i._updatesSuspended) {
                  var n = i.state,
                    r = n.sliceEnd
                  ;(e === n.sliceStart && t === r) || i.setState({ sliceStart: e, sliceEnd: t })
                }
              })
            var o = i.props,
              s = o.initialItemIndex,
              l = o.list
            ;(i._assumedItemHeight = e.assumedItemHeight),
              (i._getSlice = function () {
                var e = i.props.list,
                  t = i.state,
                  n = t.sliceEnd,
                  r = t.sliceStart
                return i._getMemoizedSlice(e, r, n)
              }),
              (i._getMemoizedSlice = Object(ue.a)(function (e, t, n) {
                return e.slice(t, n)
              })),
              (i._getRectangles = function (e) {
                var t = e || c()(i),
                  n = t._assumedItemHeight,
                  r = t._heights,
                  a = t.props.list
                return t._getMemoizedRectangles(a, r, n)
              }),
              (i._getMemoizedRectangles = Object(ue.a)(function (e, t, n) {
                return rs(e, t, n)
              })),
              (i._heights = {})
            var u = i.props,
              d = u.cacheKey,
              p = u.heightCache
            d && p.hasOwnProperty(d) && (i._heights = p[d]), (i.state = i._getDefaultSlice(l, s))
            var f = Object(Go.a)(function () {
              return i._criticalUpdate()
            }, window.requestAnimationFrame)
            return (
              (i._scheduleUpdate = window.requestIdleCallback
                ? Object(Go.a)(function () {
                    return i._criticalUpdate()
                  }, window.requestIdleCallback)
                : f),
              (i._schedulePositioningNotification = Object(Go.a)(
                function () {
                  return i._notifyPositioning()
                },
                window.requestIdleCallback
                  ? function (e) {
                      return window.requestIdleCallback(e, { timeout: 500 })
                    }
                  : window.requestAnimationFrame,
              )),
              (i._handleScroll = Object(Fo.a)(f, 100, { trailing: !0 })),
              (i._scheduleDebouncedUpdate = Object(Eo.a)(function () {
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
                    var o = Zo({ list: t, nextList: i, sliceStart: a, sliceEnd: r }) || this._getDefaultSlice(i)
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
                  return new Yo({
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
                  return g.a.createElement(
                    Xo.a.Provider,
                    { value: ts },
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
                    o = Object(T.a)(e)
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
                    r && (this._heights = Object.assign($o({}, this._heights), n)),
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
                    s = this._getRectangles(),
                    c = Object(bo.a)(n, function (e) {
                      var t = e.id
                      return s[t].getBottom() > i
                    }),
                    l = c >= 0 ? c : n.length - 1,
                    u = Object(bo.a)(
                      n,
                      function (e) {
                        var t = e.id
                        return s[t].getTop() >= o
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
                  if (!this._ref) return new Oo.a(0, 0)
                  var e = this._ref.getWrapperNode()
                  if (!e) return new Oo.a(0, 0)
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
                    a = $o(
                      $o({}, this),
                      {},
                      {
                        props: $o($o({}, this.props), {}, { list: e }),
                        state: $o({}, this.state),
                        context: $o({}, this.context),
                        refs: null,
                      },
                    ),
                    i = this._getRectangles(a),
                    o = e[t].id,
                    s = i[o].getBottom(),
                    c = Object(bo.a)(
                      e,
                      function (e) {
                        var t = e.id
                        return i[t].getTop() - s >= r
                      },
                      t,
                    ),
                    l = c >= 0 ? c : e.length
                  return { sliceStart: t, sliceEnd: Math.min(e.length, l) }
                },
              },
            ]),
            n
          )
        })(g.a.PureComponent)
      v()(ns, 'defaultProps', {
        assumedItemHeight: 400,
        heightCache: {},
        initialItemIndex: 0,
        minimumOffscreenToViewportRatio: 0.5,
        preferredOffscreenToViewportRatio: 2.5,
      })
      var rs = function (e, t, n) {
          var r = {}
          return (
            e.reduce(function (e, a) {
              var i = a.id,
                o = t.hasOwnProperty(i) ? t[i] : n,
                s = new Oo.a(e, o)
              return (r[i] = s), s.getBottom()
            }, 0),
            r
          )
        },
        as = ns
      function is(e) {
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
            var a = m()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var os = function (e) {
          return (
            Object(Po.a)('Fallback to slow hashing in VirtualScroller (type = '.concat(e ? e.type : '', ')')),
            Object(Ro.a)(e)
          )
        },
        ss = (function (e) {
          u()(n, e)
          var t = is(n)
          function n(e, r) {
            var i
            return (
              a()(this, n),
              (i = t.call(this, e, r)),
              v()(c()(i), '_onDemandRenderer', function (e) {
                var t = i.props,
                  n = t.assumedItemHeight,
                  r = t.minimumOffscreenToViewportRatio,
                  a = t.preferredOffscreenToViewportRatio,
                  o = 'function' == typeof n ? n('') : n
                return g.a.createElement(
                  as,
                  an()({}, e, {
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
              v()(c()(i), '_viewRenderer', function (e) {
                return g.a.createElement(Uo, e)
              }),
              v()(c()(i), '_getItemRenderer', function () {
                return i._getMemoizedItemRenderer(i.props.renderer)
              }),
              v()(
                c()(i),
                '_getMemoizedItemRenderer',
                Object(ue.a)(function (e) {
                  return function (t) {
                    return t ? (t.presentational ? t.renderNode() : e(t.data)) : null
                  }
                }),
              ),
              v()(c()(i), '_handleAnchorRendererRefUpdate', function (e) {
                i._anchorRenderer = e
              }),
              v()(c()(i), '_handlePositionRestored', function () {
                ;(0, i.props.onPositionRestored)(), (i._edgeProximity = i._createEdgeProximity())
                var e = i._anchorRenderer && i._anchorRenderer.getPositioning()
                e && i._edgeProximity.handlePositioningUpdate(e)
              }),
              v()(c()(i), '_handlePositioningUpdate', function (e) {
                i._edgeProximity && i._edgeProximity.handlePositioningUpdate(e)
                var t = i.props.onItemsRendered
                t && t({ positions: e.getRenderedItems(), viewport: e.getForViewport() })
              }),
              v()(c()(i), '_getList', function () {
                var e = i.props,
                  t = e.footer,
                  n = e.header,
                  r = e.identityFunction,
                  a = e.items
                return i._getMemoizedList(r, a, n, t)
              }),
              v()(
                c()(i),
                '_getMemoizedList',
                Object(ue.a)(function (e, t, n, r) {
                  var a = {},
                    i = t.reduce(function (t, n) {
                      var r = e(n) || n.id || os(n)
                      return (
                        Object(ko.a)('number' == typeof r || 'string' == typeof r, 'Item id must not be falsy'),
                        a.hasOwnProperty(r)
                          ? Object(Po.a)(
                              'Duplicate item id generated in VirtualScroller. Latter item will be discarded',
                              { extra: { id: r } },
                            )
                          : (t.push({ data: { data: n }, id: r }), (a[r] = !0)),
                        t
                      )
                    }, []),
                    o = n
                      ? {
                          id: Wo.c,
                          data: {
                            presentational: !0,
                            renderNode: function () {
                              return n
                            },
                          },
                        }
                      : null,
                    s = r
                      ? {
                          id: Wo.b,
                          data: {
                            presentational: !0,
                            renderNode: function () {
                              return r
                            },
                          },
                        }
                      : null
                  return i.length ? [].concat(Qe()(o ? [o] : []), Qe()(i), Qe()(s ? [s] : [])) : []
                }),
              ),
              (i._viewport = e.viewport || r.viewport || Ho.a.root()),
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
                    ? g.a.createElement(wo, {
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
                  return new Vo.b([
                    {
                      condition: Vo.a.nearTop(5),
                      callback: function (t) {
                        return e.props.onAtStart(t)
                      },
                    },
                    {
                      condition: Vo.a.nearTopRatio(r),
                      callback: function (t) {
                        return e.props.onNearStart(t)
                      },
                    },
                    {
                      condition: Vo.a.nearBottomRatio(n),
                      callback: function (t) {
                        return e.props.onNearEnd(t)
                      },
                    },
                    {
                      condition: Vo.a.nearBottom(5),
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
        })(g.a.Component)
      v()(ss, 'displayName', 'VirtualScroller'),
        v()(ss, 'contextTypes', { viewport: Ko.object, getCustomLocation: Ko.func }),
        v()(ss, 'defaultProps', {
          anchoring: wo.defaultProps.anchoring,
          assumedItemHeight: as.defaultProps.assumedItemHeight,
          identityFunction: os,
          minimumOffscreenToViewportRatio: as.defaultProps.minimumOffscreenToViewportRatio,
          nearEndProximityRatio: 1.75,
          nearStartProximityRatio: 0.25,
          noItemsRenderer: zo.a,
          onPositionRestored: Or.a,
          onAtEnd: Or.a,
          onAtStart: Or.a,
          onNearEnd: Or.a,
          onNearStart: Or.a,
          onScrollEnd: Or.a,
          preferredOffscreenToViewportRatio: as.defaultProps.preferredOffscreenToViewportRatio,
          withKeyboardShortcuts: !1,
        })
      var cs = Object(Io.a)(ss),
        ls = n('mw9i')
      function us(e) {
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
            var a = m()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var ds = Be.a.i859a9d3,
        ps = Be.a.i8ecae5b,
        fs = function (e) {
          return e.entry.id
        },
        ms = function (e) {
          return e.entry.type === Q.b.MESSAGE
        },
        hs = (function (e) {
          u()(n, e)
          var t = us(n)
          function n(e, r) {
            var i
            return (
              a()(this, n),
              (i = t.call(this, e, r)),
              v()(
                c()(i),
                '_shouldUseNewScroller',
                i.context.featureSwitches.isTrue('responsive_web_dm_new_scroller_enabled'),
              ),
              v()(c()(i), '_renderItem', function (e) {
                var t = i.props.conversation,
                  n = t.conversation_id
                switch (e.type) {
                  case Q.b.TYPING_INDICATOR:
                    return n ? g.a.createElement(uo, { conversationId: n }) : null
                  case Q.b.READ_ONLY_INDICATOR:
                    return n
                      ? g.a.createElement(
                          J.a,
                          { style: vs.readOnly },
                          g.a.createElement(
                            $.b,
                            { align: 'center', color: 'gray700', size: 'subtext2' },
                            ps,
                            ' ',
                            g.a.createElement($.b, { link: 'https://support.twitter.com/articles/14606#faq' }, ds),
                          ),
                        )
                      : null
                  case Q.b.CONVERSATION_PROFILE_INFO_HEADER:
                    return g.a.createElement(W, { conversation: t })
                  default:
                    return i._renderDMEntry(e)
                }
              }),
              v()(c()(i), '_setActiveEntry', function (e) {
                i.setState({ activeEntryId: e })
              }),
              v()(c()(i), '_setShouldFreezeUpdates', function (e) {
                i.setState({ shouldFreezeUpdates: e })
              }),
              (i._anchoring = R({
                isOwnMessage: function (e) {
                  var t, n
                  return (
                    (null === (t = e.entry) || void 0 === t || null === (n = t.message_data) || void 0 === n
                      ? void 0
                      : n.sender_id) === i.props.perspective || !1
                  )
                },
                typingIndicatorId: I.a,
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
                    s = this.state.activeEntryId,
                    c = (function (e) {
                      var t = e.activeEntryId,
                        n = e.canInjectConversationProfileInfoHeader,
                        r = e.conversation,
                        a = e.footer,
                        i = e.readOnlyEntry,
                        o = (r && r.entries) || [],
                        s = o.reduce(function (e, a, i) {
                          n && 0 === i && e.push(I.b)
                          var s = Object(T.a)(e),
                            c = i === o.length - 1
                          if (
                            (e.push({
                              isRapidFire: !1,
                              isFirstRapidFire: !1,
                              isLastRapidFire: !1,
                              entry: a,
                              isActive: t === a.id,
                              isTrusted: !(null == r || !r.trusted),
                            }),
                            s)
                          ) {
                            var l = x(s.entry, a),
                              u = e[e.length - 2]
                            l
                              ? ((e[e.length - 1].isRapidFire = !0),
                                u.isRapidFire || ((u.isFirstRapidFire = !0), (u.isRapidFire = !0)),
                                c && (e[e.length - 1].isLastRapidFire = !0))
                              : u.isRapidFire && (u.isLastRapidFire = !0)
                          }
                          return e
                        }, [])
                      return a && s.push(a), r.read_only && i && s.push(i), s
                    })({
                      conversation: n,
                      footer: I.d,
                      readOnlyEntry: I.c,
                      canInjectConversationProfileInfoHeader: n.status === Q.c.AT_END && n.type === Q.a.ONE_TO_ONE,
                      activeEntryId: s,
                    }),
                    l = n.conversation_id,
                    u = function (e) {
                      return e[e.length - 1]
                    },
                    d = function (e) {
                      for (var t = e.length - 1; t >= 0; t--) {
                        var n = e[t]
                        if (n && ms(n)) return n
                      }
                      return u(e)
                    },
                    p = 'dm-activity-'.concat(l)
                  return g.a.createElement(z.a.Consumer, null, function (t) {
                    var s = t.isDrawer ? G.b.drawerHeaderRadius : vs.scrollSpace
                    return g.a.createElement(
                      J.a,
                      { style: [vs.scrollContainer, s] },
                      g.a.createElement(
                        vo.a,
                        { style: [vs.scrollContainer, a && vs.conversationsPadding, s, o] },
                        r || null,
                        n.status && n.status !== Q.c.AT_END ? g.a.createElement(ho.a, null) : null,
                        g.a.createElement(
                          ls.a,
                          { style: [vs.content, vs.alignTop], withGutter: !0 },
                          e._shouldUseNewScroller
                            ? g.a.createElement(fo.b, {
                                anchoring: po.a,
                                assumedItemHeight: 50,
                                cacheKey: p,
                                canBeAnchorFunction: ms,
                                hasNewContentAtBottom: !0,
                                identityFunction: fs,
                                initialAnchor: c.length > 0 ? y.a(fs(d(c))) : void 0,
                                items: c,
                                nearStartProximityRatio: 2,
                                onNearStart: i,
                                renderer: e._renderItem,
                                withoutHeadroom: !1,
                              })
                            : g.a.createElement(
                                mo.a,
                                { identifier: p },
                                g.a.createElement(cs, {
                                  anchoring: e._anchoring,
                                  assumedItemHeight: 50,
                                  cacheKey: p,
                                  hasNewContentAtBottom: !1,
                                  identityFunction: fs,
                                  initialAnchor: c.length > 0 ? y.a(fs(u(c))) : void 0,
                                  items: c,
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
                    s = o.conversation,
                    c = o.inboxType,
                    l = o.isWide,
                    u = o.perspective,
                    d = o.scribeNamespace
                  return t && c
                    ? g.a.createElement(Li, {
                        conversation: s,
                        entry: t,
                        inboxType: c,
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
        })(g.a.Component)
      v()(hs, 'contextType', A.a)
      var vs = L.a.create(function (e) {
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
      })
    },
    '5UID': function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        i = n('Y9Ll'),
        o = n.n(i),
        s = n('5Yy7'),
        c = n.n(s),
        l = n('N+ot'),
        u = n.n(l),
        d = n('AuHH'),
        p = n.n(d),
        f = n('ERkP'),
        m = n.n(f),
        h = n('3XMw'),
        v = n.n(h),
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
          c()(n, e)
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
                  return m.a.createElement(
                    g.a,
                    { accessibilityLabelledBy: this._listDomId, accessibilityRole: 'region' },
                    m.a.createElement(
                      b.a,
                      {
                        accessibilityLevel: 1,
                        accessibilityRole: 'heading',
                        nativeID: this._listDomId,
                        style: y.a.visuallyHidden,
                      },
                      n,
                    ),
                    m.a.createElement(g.a, { accessibilityLabel: r }, t),
                  )
                },
              },
            ]),
            n
          )
        })(m.a.Component)
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
        s = n('3XMw'),
        c = n.n(s),
        l = n('fs1G'),
        u = c.a.c3752568,
        d = c.a.f78aa3e9,
        p = c.a.f9690dc0,
        f = c.a.i859a9d3,
        m = c.a.b1d35407,
        h = c.a.g539cca6,
        v = c.a.bbac0019,
        y = c.a.a1d2a68d,
        b = c.a.d4f2d9d8,
        g = c.a.hf383be4,
        _ = c.a.b25c5b2a,
        E = c.a.c4fdbd16,
        O = c.a.hf3e7e38,
        S = i()({}, o.a.DirectMessageConversationNotFound, {
          customAction: function () {
            return !1
          },
        }),
        C = { defaultToast: { text: d }, showToast: !0 },
        w =
          ((r = { defaultToast: { text: u } }),
          i()(r, o.a.CurrentUserSuspended, {
            toast: { text: h, action: { label: f, link: 'https://support.twitter.com/articles/15790' } },
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
            toast: { action: { label: f, link: 'https://support.twitter.com/articles/15364' }, text: m },
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
          return se
        })
      n('OZaJ'), n('+KXO'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('m3Bd'),
        a = n.n(r),
        i = n('VrFO'),
        o = n.n(i),
        s = n('Y9Ll'),
        c = n.n(s),
        l = n('1Pcy'),
        u = n.n(l),
        d = n('5Yy7'),
        p = n.n(d),
        f = n('N+ot'),
        m = n.n(f),
        h = n('AuHH'),
        v = n.n(h),
        y = n('KEM+'),
        b = n.n(y),
        g = n('97Jx'),
        _ = n.n(g),
        E = (n('1t7P'), n('jQ/y'), n('ho0z'), n('2G9S'), n('hBpG'), n('ERkP')),
        O = n.n(E),
        S = n('6rlp'),
        C = n('zh9S'),
        w = n('G6rE'),
        k = n('rxPX'),
        R = n('0KEI'),
        I = function (e, t) {
          return w.e.select(e, t.userId)
        },
        P = function (e, t) {
          return t.promotedContent
        },
        x = Object(k.a)()
          .propsFromState(function () {
            return { promotedContent: P, user: I }
          })
          .adjustStateProps(function (e) {
            var t = e.promotedContent,
              n = e.user
            return { promotedContent: t || (n ? n.promoted_content : void 0), user: n }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(R.createLocalApiErrorHandlerWithContextFactory)('USER_CELL_CONTAINER'),
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
        U = n('caTy'),
        H = n('3IPs'),
        K = n('Rp9C'),
        V = n('X04g'),
        W = n('Re5t'),
        z = n('TnY3'),
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
          return m()(this, n)
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
        displayMode: W.a.UserCompact,
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
                n && r && r(V.a.ItemType.USER) && n({ user: { id: a, type: H.a.User } })
              }),
              b()(u()(e), '_scribeAction', function (t) {
                var n,
                  r = e.props,
                  a = r.promotedContent,
                  i = r.scribeAction,
                  o = r.scribeData,
                  s = r.scribeNamespace,
                  c = r.user,
                  l = r.userId,
                  u =
                    null == o || null === (n = o.items) || void 0 === n
                      ? void 0
                      : n.find(function (e) {
                          return e.item_type === V.a.ItemType.USER && e.id === l
                        }),
                  d = o.search_details,
                  p = { items: [J(J({}, u), K.a.getUserItem(c, a))], profile_id: l, search_details: d }
                i(J(J({}, s), t), p)
              }),
              e
            )
          }
          return (
            c()(n, [
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
                    s = a()(e, [
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
                        _()({}, s, {
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
                                link: i.landingUrl ? Object(U.b)(i.landingUrl) : void 0,
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
                    s = n.isDeviceFollowing,
                    c = n.isFollowing,
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
                        isDeviceFollowing: !!s,
                        isFollowing: !!c,
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
                    s = t.userId
                  a &&
                    r({
                      disclosureType: a.disclosure_type,
                      itemId: i || s,
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
                    var s = r.disclosure_type,
                      c = r.impression_id
                    n({
                      disclosureType: s,
                      itemId: o,
                      itemType: Q.c.USER,
                      params: { event: Q.b.IMPRESSION, impression_id: c },
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
        se = Object(z.a)(Object(G.a)(x(ee)))
      t.b = Object(Y.c)({ element: 'user' })(se)
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
        s = a.useState,
        c = a.useEffect,
        l = a.useRef,
        u = a.useCallback,
        d = n('23An')
      e.exports = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o,
          n = i(),
          a = d(),
          p = l(n),
          f = l(e),
          m = l(new Set()),
          h = s(!1),
          v = h[0],
          y = h[1],
          b = u(
            function (t) {
              p.current === n && f.current === e && (m.current.delete(t), a.current && y(m.current.size > 0))
            },
            [n, a, e],
          )
        c(
          function () {
            ;(p.current === n && f.current === e) ||
              ((m.current = new Set()), a.current && y(!1), (p.current = n), (f.current = e))
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
            return m.current.add(o), a.current && y(!0), o
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
        s = n('rxPX'),
        c = n('0KEI'),
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
        p = Object(s.a)()
          .propsFromState(function () {
            return { screenName: u, conversationId: d }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(c.createLocalApiErrorHandlerWithContextFactory)('CREATE_CONVERSATION'),
              fetchOneByScreenNameWithExtraFieldsIfNeeded: l.e.createFetchOneByScreenNameWithExtraFieldsIfNeeded([
                l.a,
                l.d,
              ]),
            }
          }),
        f = n('GOQE'),
        m = n('kGix'),
        h = n('v//M'),
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
              a.a.createElement(h.a, { fetchStatus: m.a.LOADING, render: g.a }),
            )
          )
        },
        E = p(_)
      t.default = E
    },
    AQOc: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return m
      }),
        n.d(t, 'a', function () {
          return h
        })
      n('+KXO'), n('1t7P'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        i = n('m3Bd'),
        o = n.n(i),
        s = (n('z84I'), n('KOtZ'), n('7x/C'), n('lTEL'), n('kYxP'), n('LW0h'), n('lnti')),
        c = n('aWyx')
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
      var m = function (e) {
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
        h = function (e, t, n) {
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
                  if (t.proof_type === c.d.MUTUAL_FRIENDS) {
                    var n = t.users
                    return u(
                      u({}, o()(t, ['users'])),
                      {},
                      {
                        users: Object(s.a)(
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
        s = n('Lsrn'),
        c = n('k/Ka')
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
        return Object(c.a)(
          'svg',
          u(
            u({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [s.a.root, e.style], viewBox: '0 0 24 24' },
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
        s = n('ERkP'),
        c = n.n(s),
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
      var m = u.a.create(function (e) {
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
        return c.a.createElement(l.a, n, function (e) {
          return c.a.createElement(
            d.a,
            { style: e && m.activeRoot },
            'function' == typeof t ? t(e) : t,
            e ? c.a.createElement(d.a, { pointerEvents: 'none', style: m.overlay }) : null,
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
        s = n('Y9Ll'),
        c = n.n(s),
        l = n('1Pcy'),
        u = n.n(l),
        d = n('5Yy7'),
        p = n.n(d),
        f = n('N+ot'),
        m = n.n(f),
        h = n('AuHH'),
        v = n.n(h),
        y = n('KEM+'),
        b = n.n(y),
        g = (n('JtPf'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('ERkP')),
        _ = n.n(g),
        E = n('LCtV'),
        O = (n('WNMA'), n('KqXw'), n('MMRb')),
        S = n('AspN'),
        C = n('RqPI'),
        w = n('hqKg'),
        k = n('p9G8'),
        R = n('AQOc'),
        I = n('/NU0'),
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
              r = Object(I.a)(n) ? S.k(e, n) : []
            return a()(r, 1)[0]
          },
          function (e, t) {
            return O.selectConversationAvatarMediaIsUploading(e, A(0, t))
          },
          function (e, t) {
            return O.selectConversationAvatarMediaUploadProgress(e, A(0, t))
          },
          function (e, t, n, r, a, i, o, s, c) {
            var l = e && e.data,
              u = l && Object(R.b)(l, t, i),
              d = u && Object(k.a)(u, a)
            if (!a) throw new Error('logged-in user not found')
            return {
              avatarMedia: o,
              conversation: u,
              conversationId: n,
              fetchStatus: r,
              isUploading: s,
              groupName: d,
              mediaUploadProgress: c,
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
        U = n('3XMw'),
        H = n.n(U),
        K = n('mN6z'),
        V = n('P68U'),
        W = n('eyty'),
        z = n('MWbm'),
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
          return m()(this, n)
        }
      }
      var $ = H.a.abd845fd,
        ee = H.a.d87bff5a,
        te = H.a.i2209530,
        ne = H.a.cabb453d,
        re = (function (e) {
          p()(n, e)
          var t = J(n)
          function n(e, r) {
            var i
            return (
              o()(this, n),
              (i = t.call(this, e, r)),
              b()(u()(i), '_renderContent', function () {
                return _.a.createElement(z.a, null, i._renderGroupAvatarPicker(), i._renderGroupNameEditor())
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
                  s = e.history,
                  c = e.setConversationAvatar,
                  l = e.updateConversationName,
                  u = i.state.groupNameEdit,
                  d = []
                return (
                  t && d.push(c(n).catch(r())),
                  u && o !== u && d.push(l({ conversationId: n, name: u }).catch(r({ showToast: !0 }))),
                  Promise.all(d).then(
                    function () {
                      a({ conversationId: n }).catch(r(Object(L.a)(n))),
                        s.goBack({ backLocation: '/messages/'.concat(n, '/info'), shouldReplaceOnFallback: !0 })
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
                  s = n.conversationId
                o && i._clearAvatarMedia(o.id), r(s, t)
              }),
              b()(u()(i), '_handleMediaFailure', function (e) {
                i._clearAvatarMedia(e)
              }),
              (i.state = { groupNameEdit: e.groupName }),
              i
            )
          }
          return (
            c()(
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
                    return !Object(K.a)(e, this.props) || !Object(K.a)(t, this.state)
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
                      z.a,
                      null,
                      _.a.createElement(Y.a, { progress: r }),
                      _.a.createElement(
                        z.a,
                        { style: ae.avatarContainerRoot },
                        _.a.createElement(V.default, {
                          borderRadius: E.a.INFINITE,
                          currentContent: i,
                          location: W.d.Avatar,
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
        s = n('1Pcy'),
        c = n.n(s),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('N+ot'),
        p = n.n(d),
        f = n('AuHH'),
        m = n.n(f),
        h = n('KEM+'),
        v = n.n(h),
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
            r = m()(e)
          if (t) {
            var a = m()(this).constructor
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
            v()(c()(r), '_handleClick', function (e) {
              r.setState({ showConfirmation: !0 })
            }),
            v()(c()(r), '_handleCancel', function () {
              r.setState({ showConfirmation: !1 })
            }),
            v()(c()(r), '_handleConfirm', function () {
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
                  s = e.label
                return b.a.createElement(
                  b.a.Fragment,
                  null,
                  b.a.createElement(g.a, { align: t, color: n, label: s, onPress: this._handleClick }),
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
        s = n('1Pcy'),
        c = n.n(s),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('N+ot'),
        p = n.n(d),
        f = n('AuHH'),
        m = n.n(f),
        h = n('KEM+'),
        v = n.n(h),
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
        k = n('3XMw'),
        R = n.n(k),
        I = n('TEoO')
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
            r = m()(e)
          if (t) {
            var a = m()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var x = R.a.i9028824,
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
              v()(c()(e), '_render', function () {
                var t = e.props,
                  n = t.footer,
                  r = t.items,
                  a = t.noItemsRenderer,
                  i = t.numColumns,
                  o = t.onScrollEnd,
                  s = t.renderer,
                  c = t.withoutHeadroom
                return !r || i < 1
                  ? null
                  : 1 === i
                  ? b.a.createElement(I.a, {
                      cacheKey: T,
                      footer: n,
                      identityFunction: A,
                      items: r,
                      noItemsRenderer: a,
                      onNearEnd: e._handleNearEnd,
                      onScrollEnd: o,
                      renderer: s,
                      withoutHeadroom: c,
                    })
                  : b.a.createElement(w.a, {
                      ListEmptyComponent: a,
                      data: r,
                      keyExtractor: A,
                      numColumns: i,
                      renderItem: s,
                    })
              }),
              v()(c()(e), '_handleNearEnd', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchBottom)().catch(n())
              }),
              v()(c()(e), '_handleFetch', function () {
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
        return c
      })
      var r = n('VrFO'),
        a = n.n(r),
        i = n('Y9Ll'),
        o = n.n(i),
        s = (n('yH/f'), n('B5iK')),
        c = (function () {
          function e(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.freeze({})
            a()(this, e)
            var r = n.interval,
              i = void 0 === r ? 6e4 : r,
              o = n.burstInterval,
              c = void 0 === o ? 3e3 : o,
              l = n.burstDuration,
              u = void 0 === l ? 3e5 : l
            ;(this.pollTimer = new s.b(i).interval(t)), (this.burstTimer = new s.a(this.pollTimer, c, u))
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
    GjeS: function (e, t, n) {
      'use strict'
      n.r(t)
      var r,
        a,
        i,
        o,
        s,
        c,
        l,
        u,
        d,
        p,
        f,
        m,
        h,
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
        k,
        R,
        I,
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
        N,
        U = {
          fragment: {
            argumentDefinitions: (r = [
              { defaultValue: null, kind: 'LocalArgument', name: 'id' },
              { defaultValue: null, kind: 'LocalArgument', name: 'next_cursor' },
              { defaultValue: null, kind: 'LocalArgument', name: 'previous_cursor' },
            ]),
            kind: 'Fragment',
            metadata: null,
            name: 'evolutionDmConversationTimelineQuery',
            selections: [
              {
                alias: null,
                args: (a = [
                  { kind: 'Variable', name: 'conversation_id', variableName: 'id' },
                  { kind: 'Literal', name: 's', value: 23 },
                ]),
                concreteType: 'DMConversation',
                kind: 'LinkedField',
                name: 'dm_conversation_by_rest_id',
                plural: !1,
                selections: [
                  (i = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                  (o = { alias: null, args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null }),
                  (f = {
                    alias: null,
                    args: null,
                    concreteType: 'ConversationInfo',
                    kind: 'LinkedField',
                    name: 'legacy',
                    plural: !1,
                    selections: [
                      (s = { alias: null, args: null, kind: 'ScalarField', name: 'conversation_id', storageKey: null }),
                      {
                        alias: null,
                        args: null,
                        concreteType: 'ConversationMetadata',
                        kind: 'LinkedField',
                        name: 'metadata',
                        plural: !1,
                        selections: [
                          (c = {
                            alias: null,
                            args: null,
                            kind: 'ScalarField',
                            name: 'conversation_type',
                            storageKey: null,
                          }),
                          (l = { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null }),
                        ],
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        concreteType: 'PerspectivalConversationMetadata',
                        kind: 'LinkedField',
                        name: 'perspectival_conversation_metadata',
                        plural: !1,
                        selections: [
                          (u = {
                            alias: null,
                            args: null,
                            kind: 'ScalarField',
                            name: 'last_read_event_id',
                            storageKey: null,
                          }),
                          (d = { alias: null, args: null, kind: 'ScalarField', name: 'low_quality', storageKey: null }),
                          (p = { alias: null, args: null, kind: 'ScalarField', name: 'trusted', storageKey: null }),
                        ],
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  }),
                  {
                    alias: null,
                    args: (m = [
                      { kind: 'Variable', name: 'next_cursor', variableName: 'next_cursor' },
                      { kind: 'Variable', name: 'previous_cursor', variableName: 'previous_cursor' },
                    ]),
                    concreteType: null,
                    kind: 'LinkedField',
                    name: 'legacy_conversation_slice',
                    plural: !1,
                    selections: [
                      {
                        kind: 'InlineFragment',
                        selections: [
                          {
                            alias: null,
                            args: null,
                            concreteType: 'DMEventItem',
                            kind: 'LinkedField',
                            name: 'items',
                            plural: !0,
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
                                      (h = {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'affects_sort',
                                        storageKey: null,
                                      }),
                                      (v = {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'created_at_millis',
                                        storageKey: null,
                                      }),
                                      (y = {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'request_id',
                                        storageKey: null,
                                      }),
                                      (b = {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'event_id',
                                        storageKey: null,
                                      }),
                                      (g = {
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
                                              s,
                                              {
                                                alias: null,
                                                args: null,
                                                concreteType: 'ConversationMetadata',
                                                kind: 'LinkedField',
                                                name: 'metadata',
                                                plural: !1,
                                                selections: [
                                                  s,
                                                  c,
                                                  l,
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: 'UserResults',
                                                    kind: 'LinkedField',
                                                    name: 'created_by_user_results',
                                                    plural: !1,
                                                    selections: (O = [
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
                                                              (E = {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: 'ApiUser',
                                                                kind: 'LinkedField',
                                                                name: 'legacy',
                                                                plural: !1,
                                                                selections: [
                                                                  l,
                                                                  (_ = {
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
                                                  v,
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: 'UserResults',
                                                    kind: 'LinkedField',
                                                    name: 'admin_user_results',
                                                    plural: !1,
                                                    selections: O,
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
                                                          (S = {
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
                                                              (C = {
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
                                                                  _,
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
                                                  u,
                                                  (w = {
                                                    alias: null,
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'join_time_millis',
                                                    storageKey: null,
                                                  }),
                                                  (k = {
                                                    alias: null,
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'join_conversation_event_id',
                                                    storageKey: null,
                                                  }),
                                                ],
                                                storageKey: null,
                                              },
                                              (R = {
                                                alias: null,
                                                args: null,
                                                concreteType: 'PerspectivalConversationMetadata',
                                                kind: 'LinkedField',
                                                name: 'perspectival_conversation_metadata',
                                                plural: !1,
                                                selections: [
                                                  u,
                                                  d,
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
                                                  p,
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
                                          (I = {
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
                                          (P = {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'is_new_one_to_one_convo',
                                            storageKey: null,
                                          }),
                                          (x = {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'is_spam_hide',
                                            storageKey: null,
                                          }),
                                          (T = {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'marked_as_abuse',
                                            storageKey: null,
                                          }),
                                          (A = {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'message_id',
                                            storageKey: null,
                                          }),
                                          l,
                                          (M = {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'possibly_spam',
                                            storageKey: null,
                                          }),
                                          (j = {
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
                                            selections: O,
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'UserResults',
                                            kind: 'LinkedField',
                                            name: 'participants_snapshot_results',
                                            plural: !0,
                                            selections: O,
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'UserResults',
                                            kind: 'LinkedField',
                                            name: 'initiating_user_results',
                                            plural: !1,
                                            selections: O,
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
                                              (D = {
                                                alias: null,
                                                args: null,
                                                kind: 'ScalarField',
                                                name: 'created_at_sec',
                                                storageKey: null,
                                              }),
                                              i,
                                              (L = {
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
                                                selections: O,
                                                storageKey: null,
                                              },
                                              {
                                                alias: null,
                                                args: null,
                                                concreteType: 'UserResults',
                                                kind: 'LinkedField',
                                                name: 'sender_results',
                                                plural: !1,
                                                selections: O,
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
                            storageKey: null,
                          },
                        ],
                        type: 'DMEventSlice',
                        abstractKey: null,
                      },
                    ],
                    storageKey: null,
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
            name: 'evolutionDmConversationTimelineQuery',
            selections: [
              {
                alias: null,
                args: a,
                concreteType: 'DMConversation',
                kind: 'LinkedField',
                name: 'dm_conversation_by_rest_id',
                plural: !1,
                selections: [
                  i,
                  o,
                  f,
                  {
                    alias: null,
                    args: m,
                    concreteType: null,
                    kind: 'LinkedField',
                    name: 'legacy_conversation_slice',
                    plural: !1,
                    selections: [
                      (F = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
                      { kind: 'TypeDiscriminator', abstractKey: '__isDMEventSliceResult' },
                      {
                        kind: 'InlineFragment',
                        selections: [
                          {
                            alias: null,
                            args: null,
                            concreteType: 'DMEventItem',
                            kind: 'LinkedField',
                            name: 'items',
                            plural: !0,
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
                                      h,
                                      v,
                                      y,
                                      b,
                                      g,
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
                                              s,
                                              {
                                                alias: null,
                                                args: null,
                                                concreteType: 'ConversationMetadata',
                                                kind: 'LinkedField',
                                                name: 'metadata',
                                                plural: !1,
                                                selections: [
                                                  s,
                                                  c,
                                                  l,
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: 'UserResults',
                                                    kind: 'LinkedField',
                                                    name: 'created_by_user_results',
                                                    plural: !1,
                                                    selections: (N = [
                                                      {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: null,
                                                        kind: 'LinkedField',
                                                        name: 'result',
                                                        plural: !1,
                                                        selections: [
                                                          F,
                                                          {
                                                            kind: 'InlineFragment',
                                                            selections: [
                                                              i,
                                                              o,
                                                              E,
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
                                                  v,
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: 'UserResults',
                                                    kind: 'LinkedField',
                                                    name: 'admin_user_results',
                                                    plural: !1,
                                                    selections: N,
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
                                                        selections: [F, S],
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
                                                          F,
                                                          {
                                                            kind: 'InlineFragment',
                                                            selections: [i, o, C, B],
                                                            type: 'User',
                                                            abstractKey: null,
                                                          },
                                                        ],
                                                        storageKey: null,
                                                      },
                                                    ],
                                                    storageKey: null,
                                                  },
                                                  u,
                                                  w,
                                                  k,
                                                ],
                                                storageKey: null,
                                              },
                                              R,
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
                                          I,
                                          P,
                                          x,
                                          T,
                                          A,
                                          l,
                                          M,
                                          j,
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'UserResults',
                                            kind: 'LinkedField',
                                            name: 'users_results',
                                            plural: !0,
                                            selections: N,
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'UserResults',
                                            kind: 'LinkedField',
                                            name: 'participants_snapshot_results',
                                            plural: !0,
                                            selections: N,
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'UserResults',
                                            kind: 'LinkedField',
                                            name: 'initiating_user_results',
                                            plural: !1,
                                            selections: N,
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
                                              D,
                                              i,
                                              L,
                                              {
                                                alias: null,
                                                args: null,
                                                concreteType: 'UserResults',
                                                kind: 'LinkedField',
                                                name: 'recipient_results',
                                                plural: !1,
                                                selections: N,
                                                storageKey: null,
                                              },
                                              {
                                                alias: null,
                                                args: null,
                                                concreteType: 'UserResults',
                                                kind: 'LinkedField',
                                                name: 'sender_results',
                                                plural: !1,
                                                selections: N,
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
                            storageKey: null,
                          },
                        ],
                        type: 'DMEventSlice',
                        abstractKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
          },
          params: {
            id: '-Uh--djo528J1lVvN90ehw',
            metadata: {},
            name: 'evolutionDmConversationTimelineQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(U.hash = 'd10dca8514788699003806db1db0d5f0'), (t.default = U)
    },
    H4nC: function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        a = n.n(r),
        i = n('3XMw'),
        o = n.n(i),
        s = n('MWbm'),
        c = n('rHpw'),
        l = n('t62R'),
        u = c.a.create(function (e) {
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
              s.a,
              { style: u.root },
              a.a.createElement(l.b, { align: 'center', color: 'gray700', size: 'subtext2' }, r),
            )
      }
    },
    'I2k/': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return c
      })
      var r = n('KEM+'),
        a = n.n(r),
        i = n('k49u'),
        o = n('lRnM'),
        s = n('LVU8'),
        c = function (e) {
          return a()({}, i.a.ClientNotPermitted, {
            customAction: function () {
              return Object(s.d)('/messages/', { statusCode: 401 }), Object(o.t)(e)
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
        return c
      }),
        n.d(t, 'b', function () {
          return d
        })
      var r = n('VrFO'),
        a = n.n(r),
        i = n('Y9Ll'),
        o = n.n(i),
        s =
          (n('yH/f'),
          n('z84I'),
          n('jwue'),
          n('+oxZ'),
          Object.freeze({ MOVEMENT: 'movement', LIST_UPDATE: 'list_update', INITIAL_POSITION: 'initial_position' })),
        c = {
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
            ? s.INITIAL_POSITION
            : (function (e, t) {
                return e === l.OUTSIDE && t === l.INSIDE
              })(e, n)
            ? s.MOVEMENT
            : (function (e, t) {
                return e === l.INSIDE && t === l.INSIDE
              })(e, n) && r !== t
            ? s.LIST_UPDATE
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
                      s = n.proximity,
                      c = (function (e, t) {
                        return e(t.getForList(), t.getForViewport()) ? l.INSIDE : l.OUTSIDE
                      })(i, e),
                      d = e.getListLength(),
                      p = u(s, o, c, d)
                    ;(n.proximity = c), (n.listLength = d), p && a({ triggerCause: p })
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
        s = n('m3Bd'),
        c = n.n(s),
        l = n('ERkP'),
        u = n.n(l),
        d = n('PnKw'),
        p = n('vYiB'),
        f = n('X3+4'),
        m = n('rcen'),
        h = n('k89r')
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
          s = e.titleText,
          l = c()(e, ['bodyRichText', 'bodyText', 'onImpression', 'primaryAction', 'titleRichText', 'titleText']),
          v = Object(h.a)(),
          b = function () {
            v.scribe({ action: 'click' })
          },
          g = o
            ? u.a.createElement(m.a, { entities: o.entities, onEntityClick: b, text: o.text })
            : s && s.length
            ? s
            : null,
          _ = t
            ? u.a.createElement(m.a, { entities: t.entities, onEntityClick: b, text: t.text })
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
        s = n('Y9Ll'),
        c = n.n(s),
        l = n('1Pcy'),
        u = n.n(l),
        d = n('5Yy7'),
        p = n.n(d),
        f = n('N+ot'),
        m = n.n(f),
        h = n('AuHH'),
        v = n.n(h),
        y = n('KEM+'),
        b = n.n(y),
        g = (n('2G9S'), n('i4UL'), n('+/5o')),
        _ = n('ERkP'),
        E = n.n(_),
        O = n('HPNB'),
        S = n('VAZu'),
        C = n('wiP2'),
        w = n('Es6L'),
        k = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('rHpw'))
      function R(e, t) {
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
      function I(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? R(Object(n), !0).forEach(function (t) {
                b()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : R(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var P = k.a.create(function (e) {
          return {
            fill: { flex: 1, alignSelf: 'stretch' },
            viewportView: I(I({}, k.a.absoluteFillObject), {}, { overflowY: 'auto' }),
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
          return m()(this, n)
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
          c()(n, [
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
                  s = n.documentTitle,
                  c = n.headerless,
                  l = n.history,
                  u = n.leftControl,
                  d = n.middleControl,
                  p = n.onBackClick,
                  f = n.rightControl,
                  m = n.screenType,
                  h = n.searchBoxOptions,
                  v = n.secondaryBar,
                  y = n.showSubtitleOnRoot,
                  b = n.showSubtitleOnWideDetail,
                  _ = n.subtitle,
                  O = n.title,
                  w = n.titleIconCell,
                  k = n.titleIconCellSize,
                  R = n.withBottomBorder,
                  I = n.withDetailOpen,
                  T = n.withSearchBox,
                  A = n.withTweetButton,
                  M = 'root' === m,
                  j = 'secondaryRoot' === m,
                  D = 'primaryDetail' === m,
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
                      titleIconCellSize: k,
                      withBottomBorder: R,
                    }),
                  ),
                  U =
                    M || (j && I)
                      ? null
                      : E.a.createElement(C.a.Configure, {
                          SideNavButton: r,
                          TabBar: a,
                          TeamsSwitcher: i,
                          backLocation: o,
                          documentTitle: s,
                          headerless: c,
                          middleControl: d,
                          onBackClick: p,
                          rightControl: f,
                          searchBoxOptions: h,
                          subtitle: _,
                          title: O,
                          withSearchBox: T,
                          withTweetButton: A,
                        })
                return E.a.createElement(E.a.Fragment, null, U, N)
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
        s = n('Lsrn'),
        c = n('k/Ka')
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
        return Object(c.a)(
          'svg',
          u(
            u({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [s.a.root, e.style], viewBox: '0 0 24 24' },
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
        s = n('aWyx'),
        c = n('XnpN'),
        l = n('3XMw'),
        u = n.n(l),
        d = n('jV+4'),
        p = n('pjBI'),
        f = n('t62R'),
        m = n('rHpw'),
        h = n('p9G8'),
        v = u.a.cfd94063,
        y = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
          return e.map(function (e) {
            return e.data
          })
        },
        b = m.a.create(function (e) {
          return { title: { maxWidth: '50%' } }
        }),
        g = function (e) {
          var t = e.conversation,
            n = e.newConversationParticipants,
            r = e.perspective
          if (t) {
            if (t.type === s.a.ONE_TO_ONE) {
              var i = Object(c.a)(t, r).map(function (e) {
                return e.user
              })
              return a()(i, 1)[0].name
            }
            return Object(h.a)(t, r)
          }
          var o = y(n)
          return Object(h.b)(o, r)
        }
      t.b = function (e) {
        var t = e.conversation,
          n = e.isConversationSearchTitle,
          r = void 0 !== n && n,
          i = e.isMessageSearchTitle,
          l = void 0 !== i && i,
          u = e.newConversationParticipants,
          m = e.perspective,
          g = e.renderTimestamp,
          _ = e.textColor,
          E = void 0 === _ ? 'normal' : _,
          O = e.titleWeight,
          S = void 0 === O ? 'bold' : O,
          C = e.withScreenName,
          w = void 0 === C || C,
          k = e.withVDLRefresh,
          R = void 0 !== k && k
        if (t) {
          var I = g ? g() : null
          if (t.type === s.a.ONE_TO_ONE) {
            var P = Object(c.a)(t, m).map(function (e) {
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
            return (R && !r) || l ? o.a.createElement(p.a, null, T, I) : T
          }
          var A = t.participants,
            M = Object.keys(A).length
          if (r)
            return o.a.createElement(
              p.a,
              { color: E },
              o.a.createElement(f.b, { color: E, numberOfLines: 1, style: b.title, weight: S }, Object(h.a)(t, m, r)),
              R
                ? null
                : o.a.createElement(
                    f.b,
                    { color: 'gray700', numberOfLines: 1, weight: 'normal' },
                    v({ peopleCount: M }),
                  ),
            )
          var j = o.a.createElement(f.b, { color: E, numberOfLines: 1, weight: S }, Object(h.a)(t, m, r))
          return (R && !r) || l ? o.a.createElement(p.a, null, j, I) : j
        }
        var D = y(u)
        return o.a.createElement(f.b, { color: E, numberOfLines: 1, weight: S }, Object(h.b)(D, m))
      }
    },
    Oi4X: function (e, t, n) {
      'use strict'
      n('OZaJ'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('VrFO'),
        a = n.n(r),
        i = n('Y9Ll'),
        o = n.n(i),
        s = n('1Pcy'),
        c = n.n(s),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('N+ot'),
        p = n.n(d),
        f = n('AuHH'),
        m = n.n(f),
        h = n('KEM+'),
        v = n.n(h),
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
        k = n('kGix'),
        R = n('AQOc'),
        I = n('UhuB'),
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
            return e === k.a.LOADED ? t : e
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
          I.n,
          F,
          j.n,
          function (e, t) {
            var n = D(0, t)
            return E.selectInboxTypeByConversation(e, n)
          },
          function (e, t, n, r, a, i, o, s, c, l, u, d, p, f, m, h, v, y, b) {
            var g = e && e.data
            return {
              conversation: (g && Object(R.a)(g, t, o)) || void 0,
              dataSaverMode: m,
              draftText: f,
              dtabBarInfo: y,
              fetchStatus: s,
              gifMetadata: p,
              inboxType: b,
              isDmReceiptSettingEnabled: h,
              cardUrl: c,
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
        U = n('I2k/'),
        H = n('4AMG'),
        K = n('uB9N'),
        V = n('htvZ'),
        W = n('v//M'),
        z = n('3XMw'),
        G = n.n(z),
        q = n('UgB4'),
        Y = n('J2UM'),
        X = n('07FG'),
        Q = n('I8M8'),
        Z = n('7myi'),
        J = n('pHkl'),
        $ = n('883S'),
        ee = n('z0MJ'),
        te = n.n(ee),
        ne = n('Es6L'),
        re = n('LsPn'),
        ae = n('sl05'),
        ie = n('GSsg'),
        oe = n('ddV6'),
        se = n.n(oe),
        ce = (n('ho0z'), n('v6aA')),
        le = n('EbOo'),
        ue = n('rxPX'),
        de = Object(ue.a)().propsFromActions(function () {
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
        pe = (n('AQ79'), n('aWzz'), n('u0B7')),
        fe = (n('uFXj'), n('97Jx')),
        me = n.n(fe),
        he = n('tZH3'),
        ve = n('/yvb'),
        ye = n('efqG'),
        be = G.a.ccf2f24e,
        ge = G.a.ib3fe8a9,
        _e = function (e) {
          var t = e.isGroup,
            n = e.onBlockClick,
            r = e.onReportClick,
            a = e.requestorScreenName,
            i = { type: 'destructiveOutlined' },
            o = b.a.createElement(ve.a, me()({}, i, { accessibilityRole: 'button' }), ge),
            s = b.a.createElement(ve.a, me()({}, i, { onPress: r }), be),
            c = b.a.useCallback(
              function (e, t) {
                return b.a.createElement(he.a, {
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
          return t ? s : b.a.createElement(ye.a, { renderContent: c }, o)
        },
        Ee = n('MWbm'),
        Oe = n('cHvH'),
        Se = n('rHpw'),
        Ce = function (e) {
          var t = b.a.useContext(ce.a),
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
            s = function () {
              return e.onLeave()
            }
          return b.a.createElement(Oe.a, null, function (t) {
            var c = t.windowWidth <= Se.a.theme.breakpoints.small
            return b.a.createElement(
              Ee.a,
              { style: we.actionsContainer },
              n &&
                b.a.createElement(
                  ve.a,
                  {
                    onPress: a,
                    size: 'medium',
                    style: [we.actionFullWidth, we.actionMarginBottom],
                    type: 'primaryOutlined',
                  },
                  e.acceptButtonText,
                ),
              b.a.createElement(
                Ee.a,
                { style: c ? we.actionFullWidth : [we.actionHalfWidth, we.actionMarginRight] },
                b.a.createElement(_e, {
                  isGroup: e.isGroup,
                  onBlockClick: i,
                  onReportClick: o,
                  requestorScreenName: Object(A.i)(e.conversation, r).screenName,
                }),
              ),
              b.a.createElement(
                ve.a,
                {
                  onPress: s,
                  size: 'medium',
                  style: c ? [we.actionFullWidth, we.actionMarginTop] : [we.actionHalfWidth, we.actionMarginLeft],
                  type: 'destructiveOutlined',
                },
                e.declineButtonText,
              ),
              !n &&
                b.a.createElement(
                  ve.a,
                  {
                    onPress: a,
                    size: 'medium',
                    style: [we.actionFullWidth, we.actionMarginTop],
                    type: 'primaryOutlined',
                  },
                  e.acceptButtonText,
                ),
            )
          })
        },
        we = Se.a.create(function (e) {
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
        ke = n('aITJ'),
        Re = n('t62R'),
        Ie = n('eb3s'),
        Pe = n('vMjK'),
        xe = n('7JQg'),
        Te = n('24HD'),
        Ae = n('Ty5D')
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
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Me(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var De = G.a.da878dcf,
        Le = G.a.d96cf7cd,
        Fe = (G.a.gde6b424, G.a.e308019b, G.a.gf5e9ea6, G.a.hc52446b),
        Be = G.a.f7e1ad65,
        Ne = { headline: G.a.gdf4b79f, text: G.a.bbf83d83, confirmButtonLabel: G.a.bb1d57b6 },
        Ue = Se.a.create(function (e) {
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
        He = Object(xe.c)({ element: 'untrusted_interstitial' })(
          de(function (e) {
            var t = e.conversation,
              n = e.scribeAction,
              r = e.scribeNamespace,
              a = b.a.useContext(ce.a),
              i = Object(Ae.g)(),
              o = Object(Ae.h)(),
              s = b.a.useState(!1),
              c = se()(s, 2),
              l = c[0],
              u = c[1],
              d = b.a.useState(!1),
              p = se()(d, 2),
              f = p[0],
              m = p[1],
              h = b.a.useCallback(
                function () {
                  return { items: [{ conversation_type: t.type === E.CONVERSATION_TYPE.GROUP ? 1 : 0 }] }
                },
                [t.type],
              ),
              v = b.a.useCallback(
                function (e, t) {
                  n(je(je({}, r), {}, { action: e }), t || h())
                },
                [h, n, r],
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
                u(!0), m(!1)
              },
              C = function () {
                u(!1)
              },
              w = function () {
                m(!1)
              },
              k = function () {
                var n,
                  r = e.conversationId,
                  a = e.inboxType,
                  i = e.leaveConversation,
                  s = t.type === E.CONVERSATION_TYPE.GROUP ? 'leave_group' : 'delete_thread',
                  c = null != t && t.participants ? Object.keys(t.participants).length : 0,
                  l = (null == o || null === (n = o.state) || void 0 === n ? void 0 : n.position) || 0,
                  d = {
                    conversation_type: (null == t ? void 0 : t.type) === E.CONVERSATION_TYPE.GROUP ? 1 : 0,
                    conversation_id: r,
                    conversation_participant_count: c,
                    position: l,
                    inbox_type: Object(A.h)(a),
                    entry_point: J.b.REQUEST_ACTION_SHEET,
                  }
                u(!1), i({ conversationId: r }), v(s, d), R()
              },
              R = function () {
                var t = e.inboxType
                i.push(Object(A.e)(t))
              },
              I = function () {
                !(function () {
                  var n,
                    r = e.acceptConversation,
                    a = e.conversationId,
                    i = e.inboxType,
                    s = e.scribeAction,
                    c = e.scribeNamespace,
                    l = null != t && t.participants ? Object.keys(t.participants).length : 0,
                    u = (null == o || null === (n = o.state) || void 0 === n ? void 0 : n.position) || 0
                  a &&
                    (r(a),
                    s(je(je({}, c), {}, { action: 'accept' }), {
                      conversation_id: a,
                      conversation_type: t.type === E.CONVERSATION_TYPE.GROUP ? J.g.GROUP : J.g.ONE_TO_ONE,
                      conversation_participant_count: l,
                      entry_point: J.b.REQUEST_ACTION_SHEET,
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
                  m(!1),
                    r(t).then(function () {
                      n({ action: { label: Pe.c, onAction: x(t) }, text: Pe.a })
                    }, a(le.a)),
                    v('block')
                }
              },
              x = function (t) {
                return function () {
                  var n = e.createLocalApiErrorHandler
                  ;(0, e.unblock)(t).catch(n(pe.a)), v('unblock')
                }
              },
              T = (t && t.type) === E.CONVERSATION_TYPE.GROUP
            return b.a.createElement(
              b.a.Fragment,
              null,
              b.a.createElement(
                Ee.a,
                { style: Ue.root },
                (function (e) {
                  var n = a.loggedInUserId
                  return b.a.createElement(
                    Re.b,
                    { style: Ue.copy },
                    e ? Fe : Be({ senderName: Object(A.i)(t, n).name }),
                  )
                })(T),
                b.a.createElement(Ce, {
                  acceptButtonText: De,
                  conversation: t,
                  declineButtonText: Le,
                  isGroup: T,
                  onAccept: I,
                  onBlock: function () {
                    u(!1), m(!0)
                  },
                  onLeave: S,
                  onReport: function () {
                    var t = e.conversationId,
                      n = e.inboxType
                    t && (v('report'), i.push(Object(A.f)(t, window.location.pathname, r, n)))
                  },
                }),
              ),
              ke.b.isKaiOS()
                ? b.a.createElement(re.a, { leftText: Le, onLeftClick: S, onRightClick: I, rightText: De })
                : null,
              l
                ? b.a.createElement(Ie.a, {
                    confirmButtonLabel: Ne.confirmButtonLabel,
                    confirmButtonType: 'destructiveFilled',
                    headline: Ne.headline,
                    onCancel: C,
                    onConfirm: k,
                    text: Ne.text,
                  })
                : null,
              f
                ? ((y = a.loggedInUserId),
                  (g = Object(A.i)(t, y)),
                  (_ = g.idStr),
                  (O = g.screenName),
                  Object(Te.j)({ confirmation: Object(Te.f)(O), onClose: w, handleConfirm: P(_) }))
                : null,
            )
          }),
        ),
        Ke = n('yw4N'),
        Ve = n('rFBM'),
        We = n('mw9i'),
        ze = n('jTgF'),
        Ge = n('+d3d'),
        qe = n('mN6z')
      function Ye(e, t) {
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
      function Xe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Ye(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Ye(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function Qe(e) {
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
            var a = m()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var Ze = b.a.createElement(q.a, null),
        Je = G.a.badb01a0,
        $e = G.a.e3275464,
        et = G.a.d6b11d9c,
        tt = G.a.i7ca1446,
        nt = function (e) {
          return e && (e.tweet || e.media)
        },
        rt = function (e) {
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
        at = (function (e) {
          u()(n, e)
          var t = Qe(n)
          function n(e, r) {
            var i
            return (
              a()(this, n),
              (i = t.call(this, e, r)),
              v()(c()(i), '_composer', b.a.createRef()),
              v()(c()(i), '_handleLivePipelineUpdate', function () {
                i._fetchUpdatesIfNeeded(), i._updatePolling && i._updatePolling.restart()
              }),
              v()(c()(i), '_fetchUpdatesIfNeeded', function () {
                var e = i.props,
                  t = e.conversationId,
                  n = e.createLocalApiErrorHandler
                ;(0, e.fetchUpdatesIfNeeded)(
                  e.isDmReceiptSettingEnabled ? { active_conversation_id: t, dm_users: !0 } : {},
                ).catch(n())
              }),
              v()(c()(i), '_handleInitialFetch', function () {
                i._initialFetch()
              }),
              v()(c()(i), '_initialFetch', function () {
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
              v()(c()(i), '_isUntrustedConversation', function (e) {
                var t = i.props.isNewGroupConversation
                return !((null != e && e.trusted) || t)
              }),
              v()(c()(i), '_leaveConversation', function (e) {
                var t = i.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.leaveConversation)(e).catch(n({ showToast: !0 }))
              }),
              v()(c()(i), '_acceptConversation', function (e) {
                var t = i.props,
                  n = t.acceptConversation,
                  r = t.createLocalApiErrorHandler
                n(e)
                  .then(function () {
                    ke.b.isMobileOS() && i._fetchConversation(e)
                  })
                  .catch(r({ showToast: !0 }))
              }),
              v()(c()(i), '_renderActions', function () {
                var e = i.props,
                  t = e.conversation,
                  n = e.conversationId,
                  r = e.inboxType,
                  a = e.scribeAction
                return t && i._isUntrustedConversation(t)
                  ? t.read_only
                    ? null
                    : n &&
                      b.a.createElement(He, {
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
                      ke.b.isKaiOS()
                        ? b.a.createElement(re.a, {
                            leftText: tt,
                            onLeftClick: i._handleInfoClick,
                            onRightClick: i._handleComposeClick,
                            rightText: Je,
                          })
                        : null,
                    )
              }),
              v()(c()(i), '_render', function () {
                var e = i.props,
                  t = e.conversation,
                  n = e.conversationId,
                  r = e.drawerHeader,
                  a = e.inboxType,
                  o = e.isWide,
                  s = e.perspective,
                  c = e.scribeNamespace,
                  l = i.state,
                  u = l.attachment,
                  d = l.composerHeight
                return b.a.createElement(
                  V.b,
                  { key: n },
                  b.a.createElement(
                    Ve.a,
                    { allowDragDrop: !nt(u), onFilesAdded: i._handleDragDrop, style: ae.a.dragDrop },
                    b.a.createElement(
                      Ke.a,
                      {
                        style: [
                          ae.a.scrollView,
                          !Object(ne.a)() && !i._isUntrustedConversation(t) && { paddingBottom: d },
                        ],
                      },
                      s && t
                        ? b.a.createElement(H.a, {
                            conversation: t,
                            drawerHeader: r,
                            inboxType: a,
                            isWide: o,
                            onHistoryRequest: i._handleHistoryRequest,
                            perspective: s,
                            scribeNamespace: c,
                            style: ae.a.activity,
                          })
                        : null,
                    ),
                    i._renderActions(),
                  ),
                )
              }),
              v()(c()(i), '_handleNavHeightChange', function (e) {
                i.setState({ composerHeight: ''.concat(e, 'px') })
              }),
              v()(c()(i), '_handleTyping', function () {
                i._throttleSaveDraftText(), i._throttleUpdateTyping()
              }),
              v()(
                c()(i),
                '_throttleUpdateTyping',
                Object(Ge.a)(
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
                c()(i),
                '_throttleSaveDraftText',
                Object(Ge.a)(
                  function () {
                    i.props.conversationId && i._handleSaveDraftText()
                  },
                  1e3,
                  { leading: !1 },
                ),
              ),
              v()(c()(i), '_handleDragDrop', function (e) {
                i._currentComposer && i._currentComposer.handleAddMediaFiles(e)
              }),
              v()(c()(i), '_handleHistoryRequest', function () {
                var e = i.props,
                  t = e.conversationId,
                  n = e.createLocalApiErrorHandler
                ;(0, e.fetchConversationHistory)({ conversationId: t }).catch(n())
              }),
              v()(c()(i), '_handleSendMessage', function (e, t) {
                var n,
                  r,
                  a = i.props,
                  o = a.addToast,
                  s = a.cardUrl,
                  c = a.conversation,
                  l = a.conversationId,
                  u = a.createLocalApiErrorHandler,
                  d = a.gifMetadata,
                  p = a.history,
                  f = a.location,
                  m = a.newConversationParticipants,
                  h = a.perspective,
                  v = a.scribeAction,
                  y = a.scribeNamespace,
                  b = a.sendMessage,
                  g = a.tweetAttachment,
                  _ = i.state.attachment,
                  O = _ && _.media,
                  S = null != c && c.participants ? Object.keys(c.participants).length : 0,
                  C = (null == c ? void 0 : c.type) === E.CONVERSATION_TYPE.GROUP,
                  w = 'unknown'
                if (
                  (e.quickReply ||
                    O ||
                    (i._currentComposer && i._currentComposer.clear(),
                    i._currentComposer && i._currentComposer.focus()),
                  d)
                )
                  w = 'gif'
                else if (s) w = 'card'
                else if (g) w = 'tweet'
                else {
                  var k,
                    R = null == _ || null === (k = _.media) || void 0 === k ? void 0 : k.mediaFile,
                    I = null != R && R.isVideo ? 'video' : null != R && R.isGif ? 'gif' : 'photo'
                  w = R ? I : t ? 'text' : 'unknown'
                }
                return (
                  l &&
                    v(Xe(Xe({}, y), {}, { element: w, action: 'send_dm' }), {
                      conversation_id: l,
                      conversation_participant_count: S,
                      conversation_type: C ? J.g.GROUP : J.g.ONE_TO_ONE,
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
                        Xe(
                          { senderId: h, cardUrl: s, conversationId: l, text: t, tweetAttachment: g },
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
                          if ((i.setState({ isSending: !1 }), !Object(ze.d)(e) || e.code !== Q.b.CANCELED))
                            if (Object(ze.d)(e)) {
                              var t = Object(ze.b)(e, et)
                              t && o(t)
                            } else u($.b)(e)
                        }))
                    : (b({
                        senderId: h,
                        recipients:
                          m &&
                          m.map(function (e) {
                            return e.data.id_str
                          }),
                        text: t,
                        tweetAttachment: g,
                      }).then(function (e) {
                        v(Xe(Xe({}, y), {}, { element: w, action: 'send_dm' }), {
                          conversation_id: e,
                          conversation_participant_count: m ? m.length + 1 : 0,
                          conversation_type: J.g.GROUP,
                        }),
                          i.setState({ attachment: null, isSending: !1 }),
                          p.replace('/messages/'.concat(e))
                      }, u($.b)),
                      Promise.resolve())
                )
              }),
              v()(c()(i), '_handlePopOutConvo', function () {
                var e = i.props,
                  t = e.conversationId
                ;(0, e.popOutConversation)(t)
              }),
              v()(c()(i), '_handleInfoClick', function () {
                var e = i.props,
                  t = e.conversationId,
                  n = e.history
                t && n.push('/messages/'.concat(t, '/info'))
              }),
              v()(c()(i), '_handleComposeClick', function () {
                i._currentComposer && i._currentComposer.focus()
              }),
              v()(c()(i), '_handleSaveDraftText', function () {
                var e = i.props,
                  t = e.conversationId,
                  n = e.saveText
                t && i._currentComposer && n(t, i._currentComposer.value())
              }),
              (i.state = {
                attachment: rt(e),
                composerHeight: Se.a.theme.componentDimensions.appBarHeight,
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
                  te()(function () {
                    return Object(Y.a)().then(function (t) {
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
                    (this._updatePolling = new ie.a(this._fetchUpdatesIfNeeded, { interval: t }))
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
                    s = r.isUploading,
                    c = r.quickReplyOptions,
                    l = r.updateConversationReadState
                  i !== e.conversationId
                    ? (i && this._fetchConversation(i),
                      this._focusComposerIfNeeded(),
                      this._livePipelineSubscription && this._livePipelineSubscription.teardown(),
                      this._initializeLivePipeline())
                    : ((null == a ? void 0 : a.sort_event_id) !==
                        (null === (n = e.conversation) || void 0 === n ? void 0 : n.sort_event_id) && l(i),
                      s || !e.isUploading || c || (this._currentComposer && this._currentComposer.focus()),
                      e.fetchStatus === k.a.LOADED && o !== k.a.LOADED && i && this._fetchConversation(i))
                },
              },
              {
                key: 'UNSAFE_componentWillReceiveProps',
                value: function (e) {
                  var t = this.props.media,
                    n = e.media
                  Object(qe.a)(t, n) || this.setState({ attachment: rt(e) })
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props.fetchStatus
                  return b.a.createElement(
                    We.a,
                    { style: [ae.a.root, ke.b.isKaiOS() && ae.a.kaiOSFix] },
                    b.a.createElement(W.a, {
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
                    s = e.dtabBarInfo,
                    c = e.history,
                    l = e.isUploading,
                    u = e.mediaUploadProgress,
                    d = e.quickReplyOptions,
                    p = e.removeMedia,
                    f = e.richTextInputContext,
                    m = e.scribeNamespace,
                    h = e.typeaheadWrapper,
                    v = this.state,
                    y = v.attachment,
                    g = v.isSending,
                    _ = this.props.prefillText || o
                  return null != r && r.read_only
                    ? null
                    : b.a.createElement(K.a, {
                        attachment: y,
                        conversationId: a,
                        disabled: l,
                        dtabBarInfo: s,
                        history: c,
                        isCardPreviewTombstoned: Object(X.a)(n),
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
                        primaryActionIcon: Ze,
                        primaryActionLabel: $e,
                        quickReplyOptions: d,
                        ref: this._composer,
                        removeMedia: p,
                        richTextInputContext: f,
                        scribeNamespace: m,
                        typeaheadWrapper: h,
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
                    .catch(n(Object(U.a)(e)))
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
                    s = Array.isArray(i.query.welcome_message_id)
                      ? i.query.welcome_message_id[0]
                      : i.query.welcome_message_id,
                    c = !!this.state.attachment || !(!o || s),
                    l = !r || !r.type || r.type === E.CONVERSATION_TYPE.GROUP,
                    u = r && r.participants && Object.keys(r.participants).length <= 1
                  return c || l || u ? Promise.resolve() : n(e, s).catch(a({ showToast: !1 }))
                },
              },
            ]),
            n
          )
        })(b.a.PureComponent)
      v()(at, 'contextType', ce.a), v()(at, 'defaultProps', { isNewGroupConversation: !1, typeaheadWrapper: Z.a })
      t.a = Object(xe.c)()(N(at))
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
        s = n('1Pcy'),
        c = n.n(s),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('N+ot'),
        p = n.n(d),
        f = n('AuHH'),
        m = n.n(f),
        h = n('KEM+'),
        v = n.n(h),
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
            r = m()(e)
          if (t) {
            var a = m()(this).constructor
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
            v()(c()(e), '_handleAddMediaFiles', function (t) {
              var n = e.props,
                r = n.addMedia,
                a = n.location,
                i = n.onChange,
                o = n.onFailure,
                s = n.processMultipleMedia,
                c = e._getAcceptedFileInputs(),
                l = Array.from(t).find(function (e) {
                  return c.includes(e.type)
                })
              l &&
                r([l], { location: a }).then(function (e) {
                  i &&
                    i(
                      e.map(function (e) {
                        return e.id
                      }),
                    ),
                    s(e, { onFailure: o })
                })
            }),
            v()(c()(e), '_getAcceptedFileInputs', function () {
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
                  s = e.maskStyle,
                  c = e.mediaItem,
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
                  maskStyle: s,
                  mediaItem: c,
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
      var k = E(w)
      t.default = k
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
        s = n('1Pcy'),
        c = n.n(s),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('N+ot'),
        p = n.n(d),
        f = n('AuHH'),
        m = n.n(f),
        h = n('KEM+'),
        v = n.n(h),
        y = (n('2G9S'), n('hBvt'), n('uFXj'), n('ERkP')),
        b = n.n(y),
        g = n('TIdA'),
        _ = n('t62R'),
        E = n('A91F'),
        O = n('/yvb'),
        S = n('rHpw'),
        C = 'inlinePrompt',
        w = 'inlinePrompt-primaryAction',
        k = 'inlinePrompt-secondaryAction',
        R = 'inlinePrompt-centeredImageContainer',
        I = n('MWbm')
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
            r = m()(e)
          if (t) {
            var a = m()(this).constructor
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
            v()(c()(e), '_renderImage', function (e) {
              var t = b.a.createElement(g.a, {
                accessibilityLabel: '',
                aspectMode: E.a.exact(e.width / e.height),
                backgroundColor: e.backgroundColor,
                image: e,
              })
              return e.isCentered
                ? b.a.createElement(
                    I.a,
                    { style: T.centeredImage, testID: R },
                    b.a.createElement(
                      I.a,
                      { style: { width: ''.concat(e.width, 'px'), height: ''.concat(e.height, 'px') } },
                      t,
                    ),
                  )
                : t
            }),
            v()(c()(e), '_renderTitle', function () {
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
            v()(c()(e), '_renderBodyText', function () {
              var t = e.props.subtext
              return t
                ? b.a.createElement(
                    _.b,
                    { align: 'left', color: 'gray700', style: e.styles.body, withHashflags: !0 },
                    t,
                  )
                : null
            }),
            v()(c()(e), '_renderAction', function (t) {
              var n = t.action,
                r = t.buttonSize,
                a = t.buttonType,
                i = t.style,
                o = t.testID,
                s = e.props.secondaryAction,
                c = n.link,
                l = n.onClick,
                u = n.text
              return b.a.createElement(
                I.a,
                { style: [e.styles.actionContainer, i, { justifyContent: 'flex-start' }], testID: o },
                b.a.createElement(
                  O.a,
                  { link: c, onPress: l, size: r, style: { width: s ? '100%' : 'auto' }, type: a },
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
                  I.a,
                  { style: i ? [A.root, A.rootMargin] : T.root },
                  b.a.createElement(
                    b.a.Fragment,
                    null,
                    t ? this._renderImage(t) : null,
                    b.a.createElement(
                      I.a,
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
                            testID: k,
                          })
                        : null,
                    ),
                  ),
                  r ? b.a.createElement(I.a, { style: T.rightControl }, r) : null,
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
        s = n('MWbm'),
        c = n('Qwev'),
        l = n('rHpw'),
        u = o.a.ffde2fdb,
        d = l.a.create(function (e) {
          return { spinner: { alignItems: 'center', marginVertical: '30px' } }
        })
      t.a = function () {
        return a.a.createElement(s.a, { style: d.spinner }, a.a.createElement(c.a, { accessibilityLabel: u }))
      }
    },
    'S+H3': function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        i = n('ERkP'),
        o = n.n(i),
        s = n('Lsrn'),
        c = n('k/Ka')
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
        return Object(c.a)(
          'svg',
          u(
            u({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [s.a.root, e.style], viewBox: '0 0 24 24' },
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
        s = n('Lsrn'),
        c = n('k/Ka')
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
        return Object(c.a)(
          'svg',
          u(
            u({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [s.a.root, e.style], viewBox: '0 0 24 24' },
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
        s = n('Lsrn'),
        c = n('k/Ka')
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
        return Object(c.a)(
          'svg',
          u(
            u({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [s.a.root, e.style], viewBox: '0 0 24 24' },
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
        s = n('5UID'),
        c = n('3GUV'),
        l = n('iBK2'),
        u = o.a.createElement(c.a, null),
        d = function (e) {
          var t = e.accessibilityTitle,
            n = a()(e, ['accessibilityTitle']),
            r = o.a.createElement(l.b, n)
          return t ? o.a.createElement(s.a, { title: t }, r) : r
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
        s = n('1Pcy'),
        c = n.n(s),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('N+ot'),
        p = n.n(d),
        f = n('AuHH'),
        m = n.n(f),
        h = n('KEM+'),
        v = n.n(h),
        y = (n('2G9S'), n('ERkP')),
        b = n.n(y),
        g = n('RCZO'),
        _ = n('3XMw'),
        E = n.n(_),
        O = n('hOZg'),
        S = n('MWbm'),
        C = n('mw9i'),
        w = n('cm6r'),
        k = n('/yvb'),
        R = n('7N4s'),
        I = n('rHpw')
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
            r = m()(e)
          if (t) {
            var a = m()(this).constructor
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
                    s = t.mediaItem,
                    c = t.mediaUrl,
                    l = t.overlayFooter,
                    u = t.topRightButton,
                    d = this.context.isModal,
                    p = x({ backgroundColor: n.rgba }, g.a),
                    f = x({ backgroundColor: n.rgb }, g.a),
                    m = [j.root, d ? p : f, { position: d || i ? 'relative' : 'fixed' }]
                  return b.a.createElement(
                    b.a.Fragment,
                    null,
                    b.a.createElement(
                      S.a,
                      { onClick: this._handleBackgroundPress, style: m },
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
                        return b.a.createElement(k.a, {
                          accessibilityLabel: A,
                          dominantColor: n.rgb,
                          hoverLabel: { label: A },
                          icon: b.a.createElement(O.a, null),
                          interactivityState: t,
                          onClick: e._handleCloseButtonPress,
                          type: s || c ? 'onMediaDominantColorFilled' : 'onMediaWhiteFilled',
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
      v()(M, 'contextType', R.b), v()(M, 'defaultProps', { hideButtons: !1 })
      var j = I.a.create(function (e) {
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
        a = n.n(r).a.createContext({ isDrawer: !1 })
      t.a = a
    },
    'X/yg': function (e, t, n) {
      'use strict'
      n.d(t, 'n', function () {
        return c
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
          return m
        }),
        n.d(t, 'f', function () {
          return h
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
        s = n('pHkl'),
        c = function (e, t) {
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
            n = s.d.UNKNOWN,
            r = (t && t.attachment) || {}
          return (
            r.tweet
              ? (n = s.d.TWEET)
              : r.photo
              ? (n = s.d.PHOTO)
              : r.animated_gif
              ? (n = s.d.GIF)
              : r.video
              ? (n = r.video.audio_only ? s.d.VOICE : s.d.VIDEO)
              : r.card
              ? (n = s.d.CARD)
              : null != t && t.text && (n = s.d.TEXT),
            n
          )
        }
      function p(e) {
        return e === o.d.SECONDARY ? s.c.REQUESTS : e === o.d.TERTIARY ? s.c.LOW_QUALITY : s.c.PRIMARY
      }
      function f(e) {
        return e.isTrue('dm_voice_rendering_enabled')
      }
      function m(e, t) {
        return !!(e && e.video && f(t)) && !!e.video.audio_only
      }
      function h(e, t, n, r) {
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
        s,
        c,
        l,
        u,
        d,
        p,
        f,
        m,
        h,
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
                          (s = {
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
                              s,
                              (c = {
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
                  (m = {
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
                  (h = {
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
                          s,
                          {
                            alias: null,
                            args: null,
                            concreteType: 'ConversationMetadata',
                            kind: 'LinkedField',
                            name: 'metadata',
                            plural: !1,
                            selections: [
                              s,
                              c,
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
                  m,
                  h,
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
        s = n('1Pcy'),
        c = n.n(s),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('N+ot'),
        p = n.n(d),
        f = n('AuHH'),
        m = n.n(f),
        h = n('KEM+'),
        v = n.n(h),
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
        k = n('3XMw'),
        R = n.n(k),
        I = n('oQhu'),
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
        U = n('MMRb'),
        H = n('CDB5'),
        K = n('1YZw'),
        V = n('hqKg'),
        W = n('tn7R'),
        z = n('Hw0q'),
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
          s = !1
        return {
          s: function () {
            n = e[Symbol.iterator]()
          },
          n: function () {
            var e = n.next()
            return (o = e.done), e
          },
          e: function (e) {
            ;(s = !0), (i = e)
          },
          f: function () {
            try {
              o || null == n.return || n.return()
            } finally {
              if (s) throw i
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
        ne = Object(z.b)(ee),
        re =
          (Object(z.b)(te),
          function (e) {
            var t = Object(G.q)(e)
            if (!t) throw new Error('logged-in user not found')
            return t
          }),
        ae = Object(X.a)()
          .propsFromState(function () {
            return {
              conversations: Object(V.createSelector)(U.selectConversations, function (e) {
                var t,
                  n = [],
                  r = Z(Object(W.a)(e))
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
              recipientId: Object(z.b)(te),
            }
          })
          .propsFromActions(function () {
            return {
              addToast: K.b,
              createLocalApiErrorHandler: Object(Q.createLocalApiErrorHandlerWithContextFactory)(
                'DIRECT_MESSAGES_COMPOSE',
              ),
              fetchConversationFromParticipants: U.fetchConversationFromParticipants,
              fetchInboxIfNeeded: U.fetchInboxIfNeeded,
              popOutConversation: U.popOutConversation,
              sendMessage: H.m,
            }
          })
          .withAnalytics($),
        ie = n('UgB4'),
        oe = n('S+H3'),
        se = n('883S'),
        ce = n('GZwR')
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
          s = !1
        return {
          s: function () {
            n = e[Symbol.iterator]()
          },
          n: function () {
            var e = n.next()
            return (o = e.done), e
          },
          e: function (e) {
            ;(s = !0), (i = e)
          },
          f: function () {
            try {
              o || null == n.return || n.return()
            } finally {
              if (s) throw i
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
            r = m()(e)
          if (t) {
            var a = m()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var me = R.a.de4669e2,
        he = R.a.ff599111,
        ve = R.a.c6026009,
        ye = R.a.f61c4bbf,
        be = R.a.cdcebd22,
        ge = R.a.a7013cb6,
        _e = R.a.f277e949,
        Ee = R.a.a2ccb2e7,
        Oe = R.a.a6add339,
        Se = R.a.aca6eb1b,
        Ce = R.a.e3275464,
        we = R.a.hbbc401c,
        ke = R.a.c1df579e,
        Re = R.a.e1bde73e,
        Ie = R.a.f7289cd6,
        Pe = R.a.e6cced4e,
        xe = R.a.a893d601,
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
              v()(c()(i), '_composer', b.a.createRef()),
              v()(c()(i), '_determineMode', function (e) {
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
              v()(c()(i), '_isSharingMode', function (e) {
                return e === je.SHARE_TWEET || e === je.SHARE_TWEET_INDIVIDUALLY
              }),
              v()(c()(i), '_renderScreen', function (e) {
                var t,
                  n,
                  r = e.isModal,
                  a = i.props.history,
                  o = i.state,
                  s = o.mode,
                  c = o.participants
                switch (s) {
                  case je.COMPOSE_MESSAGE:
                    t = be
                    break
                  case je.CREATE_GROUP:
                    ;(t = he), (n = ve)
                    break
                  case je.SHARE_TWEET:
                    t = ye
                    break
                  case je.SHARE_TWEET_INDIVIDUALLY:
                    t = c.length > 1 ? ge : ye
                    break
                  default:
                    t = ''
                }
                var l = i._isSharingMode(s)
                return b.a.createElement(
                  O.b,
                  {
                    backButtonType: s === je.CREATE_GROUP ? Ae.BACK : Ae.CLOSE,
                    backLocation: s === je.CREATE_GROUP ? Me.COMPOSE_ROUTE : Me.MESSAGES_ROUTE,
                    containerStyle: Fe.fill,
                    documentTitle: t,
                    history: a,
                    onBackClick: s === je.CREATE_GROUP ? i._handleBackClick : i._handleClose,
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
              v()(c()(i), '_setDisableFocusingPreviousActiveElement', function (e) {
                var t = e.disableFocusingPreviousActiveElement
                i._disableFocusingPreviousActiveElement = t
              }),
              v()(c()(i), '_renderAppBarRightControl', function () {
                var e = i.props.tweetAttachment ? Ce : ke
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
              v()(c()(i), '_renderComposer', function (e) {
                var t = i.props,
                  n = t.history,
                  r = t.initialMessage,
                  a = t.tweetAttachment,
                  o = i.state,
                  s = o.isSending,
                  c = o.mode,
                  l = o.participants,
                  u = i._isSharingMode(i.state.mode)
                return u
                  ? b.a.createElement(_.a, {
                      canSendEmptyMessage: !!a,
                      conversationId: 'DMComposeScreen',
                      disabled: 0 === l.length || s,
                      history: n,
                      isSending: s,
                      isShareViaDM: !!u,
                      isUploading: !1,
                      mediaUploadProgress: 0,
                      onPrimaryAction: i._handleShareTweet,
                      onSecondaryAction: i._handleShareTweetToGroup,
                      placeholderText: me,
                      prefillText: r,
                      primaryActionIcon: c === je.SHARE_TWEET_INDIVIDUALLY ? void 0 : Te,
                      primaryActionLabel: Ce,
                      ref: i._composer,
                      scribeNamespace: $,
                      secondaryActionDisabledPopoverRenderer: i._renderSendToGroupDisabledPopover,
                      secondaryActionLabel: c === je.SHARE_TWEET_INDIVIDUALLY ? we : void 0,
                      shouldEnableSecondaryActionFunc: i._shouldEnableSendToGroup,
                      shouldShowSecondaryActionFunc: i._shouldShowSendToGroup,
                      style: [Fe.shadow, !e && Fe.fixToBottom],
                      withEmojiPicker: !1,
                      withGifPicker: !1,
                      withMediaPicker: !1,
                    })
                  : null
              }),
              v()(c()(i), '_renderUserPicker', function () {
                var e = i.props,
                  t = e.conversations,
                  n = e.perspective,
                  r = i.state,
                  a = r.mode,
                  o = r.participants,
                  s = r.query
                return b.a.createElement(T.d, {
                  getItemDisabledMessage: i._getItemDisabledMessage,
                  getItemIsDisabled: i._getItemIsDisabled(i._separateShareLimit),
                  injections: i._getInjections(t, n, s),
                  onQueryChange: i._handleQueryChange,
                  onRemove: i._handleRemoveParticipant,
                  onSelect: i._getHandleSuggestionSelected(),
                  renderHeader: i._renderHeader(),
                  selectedUsers: o,
                  shouldAutoFocus: !i._isSharingMode(a) || !x.b.isIOS(),
                  source: ce.d.ComposeMessage,
                  withCompactPills: !0,
                })
              }),
              v()(c()(i), '_handleBackClick', function () {
                i.props.history.goBack()
              }),
              v()(c()(i), '_handleClose', function () {
                i.props.history.goBackThroughModals()
              }),
              v()(c()(i), '_handleCreateGroup', function () {
                i.props.analytics.scribe({ element: 'create_group', action: 'click' }),
                  i.setState({ mode: je.CREATE_GROUP })
              }),
              v()(c()(i), '_shouldShowSendToGroup', function () {
                return i.state.participants.length > 1
              }),
              v()(c()(i), '_shouldEnableSendToGroup', function () {
                return !i._hasAtLeastOneGroupSelected()
              }),
              v()(c()(i), '_renderSendToGroupDisabledPopover', function (e) {
                return b.a.createElement(
                  A.a,
                  { style: Fe.popover },
                  b.a.createElement(D.b, { size: 'headline1', style: Fe.popoverElement, weight: 'bold' }, Ie),
                  b.a.createElement(D.b, { style: Fe.popoverElement }, Pe),
                  b.a.createElement(
                    j.a,
                    { onPress: e, style: [Fe.popoverElement, Fe.popoverButton], type: 'primaryFilled' },
                    xe,
                  ),
                )
              }),
              v()(c()(i), '_renderHeader', function () {
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
                          accessibilityLabel: he,
                          borderColor: 'blue500',
                          color: 'blue500',
                          hoverLabel: { label: 'Group' },
                          icon: b.a.createElement(oe.a, { style: Fe.searchIcon }),
                          onPress: i._handleCreateGroup,
                          size: 'small',
                          style: Fe.createGroupButton,
                          type: 'brandOutlined',
                        }),
                        b.a.createElement(D.b, { color: 'link', numberOfLines: 1, weight: 'bold' }, he),
                      )
                }
              }),
              v()(c()(i), '_isShareLimitMet', function (e) {
                var t = i.state,
                  n = t.mode,
                  r = t.participants,
                  a = n === je.SHARE_TWEET_INDIVIDUALLY && i._separateShareLimit && r.length >= i._separateShareLimit,
                  o = r.filter(function (t) {
                    return t.id === e.id
                  }).length
                return !(!a || o)
              }),
              v()(c()(i), '_isGroupOptionDisabled', function (e) {
                var t = i.state,
                  n = t.mode,
                  r = t.participants
                if (
                  !i._isSelectedGroup(e) &&
                  n !== je.SHARE_TWEET_INDIVIDUALLY &&
                  (i._hasAtLeastOneGroupSelected() ||
                    (e.type === ce.b.DMConversation && (r.length > 0 || n === je.CREATE_GROUP)))
                )
                  return !0
              }),
              v()(c()(i), '_canDMUser', function (e) {
                if (e.type === ce.b.User) return !(e.data.can_dm || e.data.is_dm_able)
              }),
              v()(c()(i), '_hasAtLeastOneGroupSelected', function () {
                var e,
                  t = le(i.state.participants)
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
              v()(c()(i), '_isSelectedGroup', function (e) {
                var t = i.state.participants
                if (i._hasAtLeastOneGroupSelected() && t[0].id === e.id) return !0
              }),
              v()(c()(i), '_getItemIsDisabled', function (e) {
                return function (e) {
                  var t = i._isShareLimitMet(e),
                    n = i._isGroupOptionDisabled(e),
                    r = i._canDMUser(e)
                  return n || t || r
                }
              }),
              v()(c()(i), '_getItemDisabledMessage', function (e) {
                return e.type === ce.b.User ? Re({ screenName: e.data.screen_name }) : void 0
              }),
              v()(
                c()(i),
                '_getInjections',
                Object(I.a)(function (e, t, n) {
                  return Object(S.a)(
                    n,
                    e.map(function (e) {
                      return Object(w.b)(e, void 0, i.props.users)
                    }),
                    t,
                  ).slice(0, 12)
                }),
              ),
              v()(c()(i), '_handleQueryChange', function (e) {
                i.setState({ query: e })
              }),
              v()(c()(i), '_getHandleSuggestionSelected', function () {
                return function (e) {
                  var t = i.props.perspective,
                    n = i.state,
                    r = n.mode,
                    a = n.participants
                  if (e.type === ce.b.User || e.type === ce.b.DMConversation)
                    if (i._hasAtLeastOneGroupSelected() && r !== je.SHARE_TWEET_INDIVIDUALLY)
                      e.id === a[0].id && i._handleRemoveParticipant(e)
                    else if (e.type === ce.b.DMConversation)
                      if (r === je.SHARE_TWEET || r === je.SHARE_TWEET_INDIVIDUALLY)
                        i._createConversationObjectForSelectionPill(e, r === je.SHARE_TWEET_INDIVIDUALLY)
                      else {
                        var o = Le(e, t)
                        i._goToConversation(o)
                      }
                    else i._handleParticipantToggle(e)
                }
              }),
              v()(c()(i), '_createConversationObjectForSelectionPill', function (e, t) {
                var n = i.props,
                  r = n.conversations,
                  a = n.perspective,
                  o = n.users,
                  s = i.state.participants,
                  c = r.find(function (t) {
                    return e.id === t.conversation_id
                  })
                if (c) {
                  var l = Object(w.b)(c, void 0, o),
                    u = Object(C.a)(l, a)
                  ;(e.data = pe(pe({}, l), {}, { conversationId: e.data.conversationId, name: u || '' })),
                    t
                      ? s.find(function (t) {
                          return t.id === e.id
                        })
                        ? i._handleRemoveParticipant(e)
                        : i.setState({ participants: s.concat(e) })
                      : i.setState({ participants: [e] })
                }
              }),
              v()(c()(i), '_handleParticipantToggle', function (e) {
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
              v()(c()(i), '_handleRemoveParticipant', function (e) {
                var t = i.state.participants.filter(function (t) {
                  return t.id !== e.id
                })
                i.setState({ participants: t })
              }),
              v()(c()(i), '_handleConversationRouting', function () {
                i.props.tweetAttachment ? i._handleShareTweet() : i._handleCreateConversation()
              }),
              v()(c()(i), '_getExistingGroupConversationFromCache', function (e) {
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
              v()(c()(i), '_getExistingGroupConversationFromApi', function (e) {
                var t = e
                  .map(function (e) {
                    return e.id
                  })
                  .join(',')
                return i.props.fetchConversationFromParticipants(t)
              }),
              v()(c()(i), '_getExistingGroupConversation', function (e) {
                if (e.length <= 1) return Promise.resolve()
                var t = i._getExistingGroupConversationFromCache(e)
                return t ? Promise.resolve(t) : i._getExistingGroupConversationFromApi(e)
              }),
              v()(c()(i), '_handleCreateConversation', function () {
                var e = i.props,
                  t = e.history,
                  n = e.initialMessage,
                  r = e.perspective,
                  a = e.tweetAttachment,
                  o = i.state.participants
                if (1 === o.length) {
                  var s = Le(o[0], r)
                  i._goToConversation(s)
                } else {
                  var c = i._getExistingGroupConversation(o)
                  i._disableFocusingPreviousActiveElement && i._disableFocusingPreviousActiveElement(),
                    c
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
              v()(c()(i), '_handleShareTweetToGroup', function (e, t) {
                return i.setState({ mode: je.CREATE_GROUP, isSending: !0 }), i._handleShareTweet(e, t)
              }),
              v()(c()(i), '_handleShareTweet', function (e, t) {
                var n = i.props,
                  r = n.createLocalApiErrorHandler,
                  a = n.perspective,
                  o = n.tweetAttachment,
                  s = i.state.participants,
                  c = 1 === s.length
                i.setState({ isSending: !0 })
                var l = s
                c && (l = s[0])
                var u = { senderId: a, tweetAttachment: o, text: t },
                  d = Le(l, a)
                return d
                  ? i._sendMessage(d, s, u)
                  : i
                      ._getExistingGroupConversation(s)
                      .catch(r(se.a))
                      .then(function (e) {
                        var t = e ? e.conversation_id : null
                        return i._sendMessage(t, s, u)
                      })
              }),
              v()(c()(i), '_sendMessage', function (e, t, n) {
                var r = i.props,
                  a = r.analytics,
                  o = r.createLocalApiErrorHandler,
                  s = r.history,
                  c = r.sendMessage,
                  l = i.state.mode,
                  u = pe({ conversationId: void 0, recipients: void 0 }, n)
                if (!e && Array.isArray(t)) {
                  var d = t
                    .map(function (e) {
                      if (e.type === ce.b.User) return e.data.id_str
                    })
                    .filter(Boolean)
                  u.recipients = d
                } else u.conversationId = e
                var p = o(se.b),
                  f = o(se.c),
                  m = { action: 'send_tweet_dm' },
                  h = { action: 'share_error' }
                if (
                  (i._isSharingMode(l) &&
                    null != t &&
                    t.length &&
                    t.forEach(function () {
                      a.scribe(m)
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
                      return c(e)
                    }),
                  )
                    .then(function () {
                      i._displayDMMessageSentSuccessToast(), i.setState({ isSending: !1 }), s.goBack()
                    })
                    .catch(function (e) {
                      a.scribe(h), i.setState({ isSending: !1 }), f(e)
                    })
                }
                return c(u).then(
                  function (e) {
                    i._displayDMMessageSentSuccessToast(e), i.setState({ isSending: !1 }), s.goBackThroughModals()
                  },
                  function (e) {
                    i._isSharingMode(l) && a.scribe(h), i.setState({ isSending: !1 }), p(e)
                  },
                )
              }),
              v()(c()(i), '_goToConversation', function (e) {
                var t,
                  n,
                  r = i.props,
                  a = r.history,
                  o = r.initialMessage,
                  s = r.popOutConversation,
                  c = r.tweetAttachment
                ;(i._disableFocusingPreviousActiveElement && i._disableFocusingPreviousActiveElement(), e) &&
                  ('drawer' ===
                  (null === (t = a.location) || void 0 === t || null === (n = t.state) || void 0 === n
                    ? void 0
                    : n.source)
                    ? (s(e), a.goBack())
                    : a.replace({
                        pathname: '/messages/'.concat(e),
                        query: v()({}, ee, o),
                        state: { tweetAttachment: c },
                      }))
              }),
              v()(c()(i), '_displayDMMessageSentSuccessToast', function (e) {
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
                    var s = Object(E.a)(o, i)
                    n.replace({ pathname: '/messages/'.concat(s), query: pe(pe({}, a), {}, v()({}, ee, r)) })
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
          return Array.isArray(e) || e.type !== ce.b.DMConversation
            ? Array.isArray(e) || e.type !== ce.b.User
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
        s = (n('2G9S'), n('tQbP'), n('aWyx')),
        c = (n('6U7i'), n('LW0h'), n('z84I'), n('t0aI')),
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
          return Object(c.a)(n.id_str, r.id_str)
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
        m = n('VIKJ')
      t.a = function (e, t) {
        var n = e.created_by_user_id,
          r = e.participants,
          i = e.type,
          c = Object(f.a)(r),
          l = Object(m.a)(c, function (e) {
            return e.user.id_str === t
          }),
          u = o()(l, 2),
          d = u[0],
          h = u[1]
        return h.length ? (i === s.a.GROUP && 1 === h.length ? [].concat(a()(d), a()(h)) : n ? h.sort(p(n)) : h) : d
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
        s = n('RqPI'),
        c = n('0KEI'),
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
            return { conversationId: l, fetchStatus: u, perspective: s.q, conversation: d }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(c.createLocalApiErrorHandlerWithContextFactory)(
                'DIRECT_MESSAGES_PARTICIPANTS',
              ),
              fetchConversationIfNeeded: i.fetchConversationIfNeeded,
            }
          }),
        f = n('I2k/'),
        m = n('v//M'),
        h = n('3XMw'),
        v = n.n(h),
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
          s = a.a.useCallback(
            function () {
              i({ conversationId: n }).catch(r(Object(f.a)(n)))
            },
            [r, n, i],
          ),
          c = a.a.useCallback(
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
              s()
            },
            [s],
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
              { style: [k.root, !Object(b.a)() && k.bottomOffset] },
              a.a.createElement(m.a, { fetchStatus: o, onRequestRetry: s, render: c }),
            ),
          )
        )
      }
      var k = g.a.create(function (e) {
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
        s = n('3XMw'),
        c = n.n(s),
        l = n('rHpw'),
        u = n('TIdA'),
        d = n('A91F'),
        p = n('jhWN'),
        f = n('9Xij'),
        m = n('Znyr'),
        h = n('cm6r'),
        v = n('U+bB'),
        y = n('MWbm'),
        b = c.a.fd48249b,
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
          s = e.link,
          c = e.perspective,
          _ = e.withBadge,
          E = r && r.avatar_image_https,
          C = r
            ? Object(o.a)(r, c).map(function (e) {
                return e.user
              })
            : [],
          w = C.slice(0, 3),
          k =
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
          R =
            s ||
            (function (e, t) {
              if (e)
                return e.type === i.a.GROUP
                  ? '/messages/'.concat(e.conversation_id, '/participants')
                  : e.type === i.a.ONE_TO_ONE
                  ? '/'.concat(t[0].screen_name)
                  : void 0
            })(r, C),
          I = _ && null != r && r.participants ? Object.keys(r.participants).length - 1 : 0
        return k
          ? a.a.createElement(
              a.a.Fragment,
              null,
              a.a.createElement(
                f.a,
                { ratio: 1 },
                R ? a.a.createElement(h.a, { interactiveStyles: null, link: R }, k) : k,
              ),
              I
                ? (function (e) {
                    var t = e.badgeCount
                    return a.a.createElement(
                      y.a,
                      { style: g.itemAccessory },
                      a.a.createElement(m.a, {
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
                  })({ badgeCount: I })
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
          return s
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
        s = function (e) {
          return e && e.type === r.b.REACTION_CREATE
        },
        c = [
          r.b.CONVERSATION_AVATAR_UPDATE,
          r.b.CONVERSATION_NAME_UPDATE,
          r.b.JOIN_CONVERSATION,
          r.b.PARTICIPANTS_JOIN,
          r.b.PARTICIPANTS_LEAVE,
        ],
        l = function (e) {
          return e && c.indexOf(e.type) > -1
        }
    },
    bCEw: function (e, t, n) {
      'use strict'
      var r = n('IGGJ')(n('K1iM')),
        a = n('23An'),
        i = n('Ud88'),
        o = n('aQQo'),
        s = o.loadQuery,
        c = o.useTrackLoadQueryInRender,
        l = n('ERkP'),
        u = l.useCallback,
        d = l.useEffect,
        p = l.useRef,
        f = l.useState,
        m = n('K1lQ').getRequest,
        h = { kind: 'NullQueryReference' }
      function v(e) {
        return 'PreloadableConcreteRequest' === e.kind
          ? void 0 !== e.params.metadata.live
          : void 0 !== m(e).params.metadata.live
      }
      e.exports = function (e, t) {
        var n = null != t ? t : h,
          o = i()
        c()
        var l = a(),
          m = p(new Set([n])),
          y = f(function () {
            return n
          }),
          b = y[0],
          g = y[1],
          _ = f(function () {
            return n
          }),
          E = _[0],
          O = _[1]
        n !== E && (m.current.add(n), O(n), g(n))
        var S = u(
            function () {
              l.current && (m.current.add(h), g(h))
            },
            [l],
          ),
          C = u(
            function (t, n) {
              var r =
                null != n && n.hasOwnProperty('__environment')
                  ? {
                      fetchPolicy: n.fetchPolicy,
                      networkCacheConfig: n.networkCacheConfig,
                      __nameForWarning: n.__nameForWarning,
                    }
                  : n
              if (l.current) {
                var a,
                  i = s(null !== (a = null == n ? void 0 : n.__environment) && void 0 !== a ? a : o, e, t, r)
                m.current.add(i), g(i)
              }
            },
            [o, e, g, l],
          ),
          w = p(!1)
        return (
          d(function () {
            return function () {
              w.current = !0
            }
          }, []),
          d(
            function () {
              if (!0 === w.current)
                return (
                  (w.current = !1),
                  void (
                    'NullQueryReference' !== b.kind &&
                    C(b.variables, { fetchPolicy: b.fetchPolicy, networkCacheConfig: b.networkCacheConfig })
                  )
                )
              var t = m.current
              if (l.current) {
                var n,
                  a = (0, r.default)(t)
                try {
                  for (a.s(); !(n = a.n()).done; ) {
                    var i = n.value
                    if (i === b) break
                    t.delete(i),
                      'NullQueryReference' !== i.kind &&
                        (v(e) ? i.dispose && i.dispose() : i.releaseQuery && i.releaseQuery())
                  }
                } catch (o) {
                  a.e(o)
                } finally {
                  a.f()
                }
              }
            },
            [b, l, C, e],
          ),
          d(
            function () {
              return function () {
                var t,
                  n = (0, r.default)(m.current)
                try {
                  for (n.s(); !(t = n.n()).done; ) {
                    var a = t.value
                    'NullQueryReference' !== a.kind &&
                      (v(e) ? a.dispose && a.dispose() : a.releaseQuery && a.releaseQuery())
                  }
                } catch (i) {
                  n.e(i)
                } finally {
                  n.f()
                }
              }
            },
            [e],
          ),
          ['NullQueryReference' === b.kind ? null : b, C, S]
        )
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
        s = n('1Pcy'),
        c = n.n(s),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('N+ot'),
        p = n.n(d),
        f = n('AuHH'),
        m = n.n(f),
        h = n('KEM+'),
        v = n.n(h),
        y = (n('MvUL'), n('KqXw'), n('uFXj'), n('+KXO'), n('z84I'), n('ERkP')),
        b = n.n(y),
        g = n('v6aA'),
        _ = n('+Kfv'),
        E = (n('WNMA'), n('zh9S')),
        O = n('MMRb'),
        S = n('CDB5'),
        C = n('RqPI'),
        w = n('hqKg'),
        k = n('AQOc'),
        R = n('z2Pn'),
        I = n('pNZL'),
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
          function (e, t, n, r, a, i, o, s, c, l) {
            var u = e && e.data
            return {
              conversation: (u && Object(k.a)(u, t, s)) || void 0,
              conversationId: n,
              isNewGroupConversation: r,
              isUploading: c,
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
            setLastViewedDmInboxPath: R.h,
            updateTweetDetailNav: I.b,
          }
        }),
        D = n('i4Oy'),
        L = n('Oi4X'),
        F = n('aA19'),
        B = n('XnpN'),
        N = n('3XMw'),
        U = n.n(N),
        H = (n('hBvt'), n('/yvb')),
        K = n('6s7X'),
        V = U.a.h810143c,
        W = function (e) {
          var t = e.accessibilityLabel,
            n = e.conversationId,
            r = e.link,
            a = e.style,
            i = b.a.createElement(K.a, null)
          return b.a.createElement(H.a, {
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
            r = m()(e)
          if (t) {
            var a = m()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var $ = U.a.d4986f85,
        ee = U.a.e3e58b6d,
        te = U.a.a9ddbb94,
        ne = (function (e) {
          u()(n, e)
          var t = J(n)
          function n(e, r) {
            var i
            a()(this, n),
              (i = t.call(this, e, r)),
              v()(c()(i), '_composer', b.a.createRef()),
              v()(
                c()(i),
                '_isVDLEnabled',
                i.context.featureSwitches.isTrue('dm_vdl_enabled') &&
                  i.context.featureSwitches.isTrue('dm_vdl_chat_p0_enabled'),
              ),
              v()(c()(i), '_handleConversationClose', function (e) {
                var t = i.props,
                  n = t.conversation,
                  r = t.history
                null != n && n.trusted ? r.push('/messages') : e()
              }),
              v()(c()(i), '_handleInfoClick', function () {
                var e = i.props,
                  t = e.conversationId,
                  n = e.history
                t && n.push('/messages/'.concat(t, '/info'))
              }),
              v()(c()(i), '_updateLastViewDmInboxPath', function () {
                var e = i.props,
                  t = e.location
                ;(0, e.setLastViewedDmInboxPath)(t.pathname)
              })
            var o = e.conversationId,
              s = e.history,
              l = e.isNewGroupConversation,
              u = e.location
            return o || l || u.pathname !== window.location.pathname || s.replace({ pathname: '/messages' }), i
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
                    s = D.a.get('window').width >= q.a.theme.breakpoints.small
                  return b.a.createElement(
                    G.a,
                    this._getNavProps(),
                    b.a.createElement(
                      _.a,
                      { viewType: 'messages' },
                      b.a.createElement(L.a, {
                        conversationId: t,
                        history: n,
                        isWide: s,
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
                    s = r ? b.a.createElement(F.a, { conversation: t, perspective: r, size: o }) : void 0,
                    c =
                      t &&
                      t.type === O.CONVERSATION_TYPE.ONE_TO_ONE &&
                      r &&
                      Object(B.a)(t, r).map(function (e) {
                        return e.user.screen_name
                      }),
                    l = c ? '@'.concat(c[0]) : void 0
                  return {
                    backLocation: '/messages',
                    onBackClick: this._handleConversationClose,
                    documentTitle: a,
                    rightControl: this._renderRightControl(),
                    title: i,
                    titleIconCell: s,
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
                        b.a.createElement(W, {
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
      v()(ne, 'contextType', g.a), v()(ne, 'defaultProps', { isNewGroupConversation: !1, typeaheadWrapper: z.a })
      var re = q.a.create(function (e) {
        return { infoButton: { marginRight: e.spaces.space4 }, rightControlStyles: { flexDirection: 'row' } }
      })
      t.default = Object(Q.c)({ page: 'messages', section: 'thread' })(j(ne))
    },
    dPJJ: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return c
      }),
        n.d(t, 'b', function () {
          return l
        })
      n('LqLs'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('jwue'), n('LW0h'), n('z84I'), n('+oxZ')
      var r = n('6/RC'),
        a = new Set(),
        i = new Set(),
        o = !1
      function s() {
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
      var c = function (e) {
          return (
            o || s(),
            a.add(e),
            function () {
              return a.delete(e)
            }
          )
        },
        l = function (e) {
          return (
            o || s(),
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
        s = n('Y9Ll'),
        c = n.n(s),
        l = n('1Pcy'),
        u = n.n(l),
        d = n('5Yy7'),
        p = n.n(d),
        f = n('N+ot'),
        m = n.n(f),
        h = n('AuHH'),
        v = n.n(h),
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
          return m()(this, n)
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
            c()(n, [
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
        s = n('ddV6'),
        c = n.n(s),
        l = (n('hBpG'), n('2G9S'), n('LW0h'), n('z84I'), n('M+/F'), n('i4UL'), n('ERkP')),
        u = n.n(l),
        d = n('k49u'),
        p = n('VAZu'),
        f = (n('WNMA'), n('KqXw'), n('+KXO'), n('MMRb')),
        m = n('1YZw'),
        h = n('lnti'),
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
          return Object(h.a)(
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
              addToast: m.b,
              createLocalApiErrorHandler: Object(_.createLocalApiErrorHandlerWithContextFactory)(
                'DIRECT_MESSAGES_ADD_PARTICIPANTS',
              ),
              fetchConversationIfNeeded: f.fetchConversationIfNeeded,
            }
          })
          .withAnalytics({ page: 'messages', section: 'add_participants' }),
        k = n('I2k/'),
        R = n('s14A'),
        I = n('kGix'),
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
        U = n('GZwR'),
        H = M.a.c6026009,
        K = M.a.d4986f85,
        V = M.a.af40a8ef,
        W = M.a.e1bde73e,
        z = M.a.e62d3c10,
        G = M.a.f17f716a,
        q = M.a.e3fc3547,
        Y = M.a.c55f5c9a,
        X = M.a.h8403fb5,
        Q = M.a.ja522ed3
      function Z(e) {
        var t = u.a.useRef(null),
          n = u.a.useState([]),
          r = c()(n, 2),
          i = r[0],
          s = r[1],
          l = u.a.useState(''),
          f = c()(l, 2),
          m = f[0],
          h = f[1],
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
            b({ conversationId: y }).catch(v(Object(k.a)(y)))
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
                  disabled: 0 === i.length || E !== I.a.LOADED,
                  onPress: Z,
                  size: 'small',
                  testID: D,
                  type: 'primaryFilled',
                },
                V,
              ),
            )
          },
          N = function (e) {
            s(
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
              a()(e, d.a.TargetUserNotFound, { toast: { text: z } }),
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
            documentTitle: K,
            renderHeader: function () {
              return u.a.createElement(p.a, {
                backButtonType: 'close',
                backLocation: '/messages/'.concat(y),
                history: g,
                ref: t,
                rightControl: M(),
                title: H,
                withBottomBorder: !1,
              })
            },
          },
          u.a.createElement(
            R.a,
            { style: $.fill },
            u.a.createElement(L.d, {
              getItemDisabledMessage: function (e) {
                return e.type === U.b.User ? W({ screenName: e.data.screen_name }) : void 0
              },
              getItemIsDisabled: J,
              injections: ee(O, w, m, A),
              onQueryChange: function (e) {
                h(e)
              },
              onRemove: N,
              onSelect: function (e) {
                e.type === U.b.User &&
                  (i.find(function (t) {
                    return t.id === e.id
                  })
                    ? N(e)
                    : s([].concat(o()(i), [e])))
              },
              preselectedUsers: te,
              selectedUsers: i,
              source: U.d.ComposeMessage,
              withCompactPills: !0,
            }),
          ),
        )
      }
      var J = function (e) {
          return e.type === U.b.User && !(e.data.can_dm || e.data.is_dm_able)
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
        return c
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
        s = n('oEGd'),
        c = function (e, t) {
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
          c,
        )
      t.a = Object(s.c)(l)
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
          return s
        }),
        n.d(t, 'c', function () {
          return c
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
        s = a(r.b.TYPING_INDICATOR, o),
        c = a(r.b.READ_ONLY_INDICATOR, 'readOnlyIndicator')
    },
    hqDb: function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('97Jx'),
        a = n.n(r),
        i = n('m3Bd'),
        o = n.n(i),
        s = n('VrFO'),
        c = n.n(s),
        l = n('Y9Ll'),
        u = n.n(l),
        d = n('1Pcy'),
        p = n.n(d),
        f = n('5Yy7'),
        m = n.n(f),
        h = n('N+ot'),
        v = n.n(h),
        y = n('AuHH'),
        b = n.n(y),
        g = n('KEM+'),
        _ = n.n(g),
        E = (n('2G9S'), n('ERkP')),
        O = n.n(E),
        S = n('k49u'),
        C = (n('LW0h'), n('KOtZ'), n('vrRf'), n('6xIQ')),
        w = n('kGix'),
        k = n('G6rE'),
        R = n('rxPX'),
        I = n('0KEI'),
        P = function (e, t) {
          return t.userIds
        },
        x = function (e, t) {
          return t.userIds.filter(function (t) {
            return !!k.e.select(e, t)
          })
        },
        T = function (e, t) {
          return t.userIds.reduce(function (t, n) {
            var r = k.e.selectFetchStatus(e, n)
            return (t[n] = r === w.a.NONE ? w.a.LOADING : r), t
          }, {})
        },
        A = Object(R.a)()
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
              createLocalApiErrorHandler: Object(I.createLocalApiErrorHandlerWithContextFactory)(
                'USERS_LIST_CONTAINER',
              ),
              fetchUsersIfNeeded: k.e.fetchManyIfNeeded,
            }
          }),
        M = n('v//M'),
        j = n('3XMw'),
        D = n.n(j),
        L = n('pQ3Z'),
        F = n.n(L),
        B = (n('z84I'), n('cFuS')),
        N = n('Re5t'),
        U = n('MWbm'),
        H = n('88ay'),
        K = function (e) {
          var t = e.displayMode,
            n = e.renderUserCell,
            r = e.userIds
          e.withFinalItemBorder, e.withItemBorder
          return O.a.createElement(
            U.a,
            null,
            r.map(function (e, r) {
              return n
                ? n(e)
                : O.a.createElement(H.b, {
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
      K.defaultProps = { displayMode: N.a.UserDetailed, withFinalItemBorder: !0, withItemBorder: !1 }
      var V = K
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
      var z = D.a.f5b426c2,
        G = { viewType: 'user_list' },
        q = A(
          (function (e) {
            m()(n, e)
            var t = W(n)
            function n() {
              var e
              c()(this, n)
              for (var r = arguments.length, i = new Array(r), s = 0; s < r; s++) i[s] = arguments[s]
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
                  return O.a.createElement(V, a()({}, r, { userIds: n }))
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
                      accessibilityLabel: z,
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
    htvZ: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return S
      }),
        n.d(t, 'a', function () {
          return C
        })
      var r = n('ERkP'),
        a = n.n(r),
        i = n('v6aA'),
        o = n('ddV6'),
        s = n.n(o),
        c = n('8W85')
      function l() {
        var e = a.a.useContext(C),
          t = s()(e.activeVoiceMessage, 2),
          n = t[0],
          r = t[1],
          i = s()(e.playerApi, 2)[1],
          o = s()(e.playerState, 2)[1]
        var l = {
          media: s()(n, 2)[1],
          onEnded: function () {
            r([null, null]), e.scribeAction && e.scribeAction.complete()
          },
          onPlayerApi: i,
          onPlayerState: o,
        }
        return a.a.createElement(c.a, l)
      }
      var u = n('X/yg'),
        d = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('KEM+')),
        p = n.n(d),
        f = n('89tF'),
        m = n('k89r')
      function h(e, t) {
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
            ? h(Object(n), !0).forEach(function (t) {
                p()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : h(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function y(e) {
        var t,
          n,
          r,
          i,
          o,
          s =
            ((t = a.a.useState(_.activeVoiceMessage)),
            (n = a.a.useState(_.playerApi)),
            (r = a.a.useState(_.playerState)),
            (o = Object(m.a)()),
            (i = a.a.useMemo(
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
                      ? o.scribe(v(v({}, t({ action: e })), {}, { data: n.data }))
                      : o.scribe(v({}, t({ action: e, component: g(n) })))
                    : o.scribe(v({}, t({ action: e })))
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
            { activeVoiceMessage: t, playerApi: n, playerState: r, scribeAction: i })
        return a.a.createElement(E.Provider, { value: s }, e.children)
      }
      var b = {
        Timelines: Object(f.a)({ message: !0, inbox_timeline: !0, low_quality_timeline: !0, requests_timeline: !0 }),
      }
      function g(e) {
        var t = e.isLowQuality
        return e.isTrusted
          ? b.Timelines.inbox_timeline
          : t
          ? b.Timelines.low_quality_timeline
          : b.Timelines.requests_timeline
      }
      var _ = { activeVoiceMessage: [null, null], playerApi: null, playerState: null, scribeAction: null },
        E = a.a.createContext({
          activeVoiceMessage: [_.activeVoiceMessage, O],
          playerApi: [_.playerApi, O],
          playerState: [_.playerState, O],
          scribeAction: null,
        })
      function O() {
        throw new Error('DMVoiceContext is not initialized')
      }
      function S(e) {
        var t = a.a.useContext(i.a).featureSwitches
        return Object(u.j)(t) ? a.a.createElement(y, null, e.children, a.a.createElement(l, null)) : e.children
      }
      var C = E
    },
    hxu0: function (e, t, n) {
      'use strict'
      var r = n('97Jx'),
        a = n.n(r),
        i = n('ERkP'),
        o = n.n(i),
        s = n('vqbU')
      t.a = function (e) {
        return function (t) {
          return o.a.createElement(s.a.Consumer, null, function (n) {
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
        s = n('TIdA'),
        c = n('t62R'),
        l = n('A91F'),
        u = n('/yvb'),
        d = n('Eqye'),
        p = n('efqG'),
        f = n('sgih'),
        m = n('rHpw'),
        h = n('MWbm'),
        v = n('3dyc'),
        y = m.a.create(function (e) {
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
          k = o.a.useState(!1),
          R = a()(k, 2),
          I = R[0],
          P = R[1],
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
              h.a,
              { style: [y.root, _ && y.rootWithImage] },
              M(),
              o.a.createElement(
                h.a,
                { style: y.container },
                j(),
                D(),
                L({ action: t, dismiss: e, type: n && 'primaryFilled' }),
                L({ action: n, dismiss: e }),
              ),
            )
          },
          M = function () {
            var e = b && o.a.createElement(b, { style: g ? [y.icon, { color: m.a.theme.colors[g] }] : y.icon })
            return (
              _ &&
                !d.a.isEnabled &&
                (e = o.a.createElement(s.a, { accessibilityLabel: '', aspectMode: l.a.exact(2), image: _ })),
              e && o.a.createElement(h.a, { style: y.graphic }, e)
            )
          },
          j = function () {
            return o.a.createElement(c.b, { size: 'title3', weight: 'heavy' }, i)
          },
          D = function () {
            return o.a.createElement(c.b, { color: 'gray700', style: y.description }, S)
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
        return O && !I ? (r ? x(r) : T()) : r || null
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
        s = n('Y6L+'),
        c = n('Ty5D'),
        l = n('MMRb'),
        u = n('rxPX'),
        d = function (e, t) {
          var n = Object(c.f)(t.location.pathname, { path: '/messages/'.concat(s.j, '(/.*)?'), exact: !0, strict: !1 })
          return null == n ? void 0 : n.params.conversationId
        },
        p = function (e, t) {
          var n = d(0, t)
          return Object(l.selectInboxTypeByConversation)(e, n)
        },
        f = Object(u.a)().propsFromState(function () {
          return { conversationId: d, inboxType: p }
        }),
        m = (n('OZaJ'), n('VrFO')),
        h = n.n(m),
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
        k = n('KEM+'),
        R = n.n(k),
        I = (n('2G9S'), n('uFXj'), n('JtPf'), n('7x/C'), n('P1r1')),
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
                dmNsfwMediaFilter: I.m,
                isLoadingTop: l.selectIsLoadingTop,
                isDmNsfwMediaFilterEnabled: I.r,
                isDmsOpenForAll: I.t,
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
                s = e.untrustedLowQualityConversationCount
              e.untrustedLowQualityCursor
              return {
                dmNsfwMediaFilter: n,
                isDmNsfwMediaFilterEnabled: r,
                conversationIds: t,
                untrustedUnreadCount: e.untrustedUnreadCount,
                allowUntrustedInbox: a && i > 0,
                allowLowQualityUntrustedInbox: a && s > 0,
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
                updateDmNsfwMediaFilter: I.K,
              }
            })
            .withAnalytics({ page: 'messages', section: 'inbox', component: Object(T.g)(t) })
        },
        B = n('/yvb'),
        N = n('3XMw'),
        U = n.n(N),
        H = n('Avzu'),
        K = U.a.f325afc3,
        V = U.a.cdcebd22,
        W = function (e) {
          var t = e.testID
          return o.a.createElement(B.a, {
            accessibilityLabel: K,
            hoverLabel: { label: V },
            icon: o.a.createElement(H.a, null),
            link: '/messages/compose',
            pullRight: !0,
            testID: t,
            type: 'primaryText',
          })
        },
        z = n('qz2E'),
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
            r = w()(e)
          if (t) {
            var a = w()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return S()(this, n)
        }
      }
      var ce = U.a.a2f8105f,
        le = U.a.cf2d1047,
        ue = U.a.b8aa3744,
        de = U.a.j06309e1,
        pe = U.a.gee5150a,
        fe = U.a.da2f9224,
        me = U.a.a74e7c76,
        he = U.a.h6beb5fa,
        ve = (function (e) {
          E()(n, e)
          var t = se(n)
          function n() {
            var e
            h()(this, n)
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              R()(g()(e), '_renderPivot', function () {
                var t = e.props,
                  n = t.allowUntrustedInbox,
                  r = t.untrustedUnreadCount,
                  a =
                    e.context.featureSwitches.isTrue('dm_vdl_enabled') &&
                    e.context.featureSwitches.isTrue('dm_vdl_inbox_p0_enabled'),
                  i = [ye.requestPivotContainer, a ? void 0 : ye.requestPivotContainerBorder],
                  s = a && r > 0
                return n
                  ? o.a.createElement(
                      $.a,
                      { style: i },
                      o.a.createElement(te.a, {
                        description: s ? me({ count: r }) : void 0,
                        label: le,
                        link: Object(oe.a)(A.d.SECONDARY),
                        onPress: e._handleRequestsPivotClick,
                        renderRightContent: a ? void 0 : e._renderPivotBadge,
                        thumbnail: a
                          ? o.a.createElement(
                              $.a,
                              null,
                              o.a.createElement(ne.a, { Icon: q.a, color: 'neutral' }),
                              s
                                ? o.a.createElement(re.a, {
                                    count: r,
                                    pip: !0,
                                    standalone: !0,
                                    style: ye.inboxPip,
                                    truncatedCountFormatter: he,
                                    unreadCountLabel: fe,
                                  })
                                : null,
                            )
                          : null,
                      }),
                    )
                  : null
              }),
              R()(g()(e), '_renderPivotBadge', function () {
                var t = e.props.untrustedUnreadCount
                return t > 0
                  ? o.a.createElement(re.a, {
                      count: t,
                      standalone: !0,
                      truncatedCountFormatter: he,
                      unreadCountLabel: fe,
                    })
                  : null
              }),
              R()(g()(e), '_renderEmptyDMInbox', function () {
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
              R()(g()(e), '_handleEmptyDMInboxImpression', function () {
                e.props.analytics.scribe({ component: 'empty_message', action: 'impression' })
              }),
              R()(g()(e), '_handleRequestsPivotClick', function () {
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
                          o.a.createElement(W, { testID: J }),
                        )
                      : Object(oe.b)('/messages/settings', !0),
                    t = this.props,
                    n = t.analytics,
                    r = t.conversationIds,
                    a = t.fetchInboxHistory,
                    i = t.updateLastSeenEventId
                  return o.a.createElement(
                    Q.a,
                    { rightControl: e, screenType: 'root', title: ce },
                    o.a.createElement(G.a, {
                      accessibilityTitle: ce,
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
      R()(ve, 'contextType', ee.a), R()(ve, 'defaultProps', { conversationIds: [], untrustedUnreadCount: 0 })
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
        be = Object(Y.a)(F({ inbox: A.d.PRIMARY })(ve), { directMessages: z.a }),
        ge = (n('WNMA'), n('KqXw'), n('v6aA')),
        _e = n('jYSG'),
        Ee = n('5FtR'),
        Oe = n('Lz2T'),
        Se = n('0yYu'),
        Ce = n('t62R'),
        we = n('cm6r')
      function ke(e) {
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
      var Re = U.a.cf2d1047,
        Ie = U.a.bef0039f,
        Pe = U.a.eb7de4a9,
        xe = U.a.a0e81a2e,
        Te = U.a.f5dc353c,
        Ae = U.a.fe1eaa95,
        Me = U.a.j24c37b2,
        je = U.a.daeda053,
        De = (function (e) {
          E()(n, e)
          var t = ke(n)
          function n() {
            var e
            h()(this, n)
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              R()(g()(e), '_nsfwBannerWasShown', !1),
              R()(g()(e), 'componentDidMount', function () {
                var t = e.props.analytics
                e._shouldRenderTombstone() && t.scribe({ element: 'low_quality_pivot', action: 'impression' }),
                  e.context.incrementDmDrawerInhibitorCount()
              }),
              R()(g()(e), 'componentDidUpdate', function (t) {
                var n = e.props.analytics
                !e._shouldRenderTombstone() ||
                  (t.allowLowQualityUntrustedInbox && t.isAtEndOfUntrustedInbox) ||
                  n.scribe({ element: 'low_quality_pivot', action: 'impression' })
              }),
              R()(g()(e), 'componentWillUnmount', function () {
                e.context.decrementDmDrawerInhibitorCount(), e._nsfwBannerWasShown && e._hideNsfwTimelineMessage()
              }),
              R()(g()(e), '_renderNsfwSettingBanner', function (t) {
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
              R()(g()(e), '_shouldRenderTombstone', function () {
                var t = e.props,
                  n = t.allowLowQualityUntrustedInbox,
                  r = t.isAtEndOfUntrustedInbox
                return n && r
              }),
              R()(g()(e), '_renderTombstone', function () {
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
              R()(g()(e), '_renderEmptyDMInbox', function () {
                var t = e._renderTombstone()
                return o.a.createElement(
                  o.a.Fragment,
                  null,
                  o.a.createElement(ae.a, { header: t ? '' : Ie, message: _e.a, style: Le.emptyMessage }),
                  t,
                )
              }),
              R()(g()(e), '_handleNsfwTimelineMessagePrimaryClick', function () {
                e.props.analytics.scribe({ component: 'dm_nsfw_prompt', element: 'primary_action', action: 'click' }),
                  e._hideNsfwTimelineMessage()
              }),
              R()(g()(e), '_handleNsfwTimelineMessageSecondaryClick', function () {
                e.props.analytics.scribe({ component: 'dm_nsfw_prompt', element: 'secondary_action', action: 'click' })
              }),
              R()(g()(e), '_hideNsfwTimelineMessage', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.updateDmNsfwMediaFilter)(!0).catch(n())
              }),
              R()(g()(e), '_handleBackClick', function () {
                e.props.history.push(Object(oe.a)(A.d.PRIMARY))
              }),
              R()(g()(e), '_handleTombstoneClick', function () {
                e.props.analytics.scribe({ element: 'low_quality_pivot', action: 'click' })
              }),
              R()(g()(e), '_hasConversationOpen', function () {
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
                    s = t.updateLastSeenEventId
                  return n
                    ? o.a.createElement(
                        Q.a,
                        {
                          backLocation: '/messages',
                          onBackClick: this._handleBackClick,
                          rightControl: Object(oe.b)('/settings/direct_messages', !0),
                          screenType: 'secondaryRoot',
                          title: Re,
                          withDetailOpen: this._hasConversationOpen(),
                        },
                        o.a.createElement(ge.a.Consumer, null, this._renderNsfwSettingBanner),
                        o.a.createElement(G.a, {
                          accessibilityTitle: Re,
                          analytics: r,
                          conversationIds: a,
                          fetchInboxHistory: i,
                          footer: this._renderTombstone(),
                          inboxType: A.d.SECONDARY,
                          renderEmptyDMInbox: this._renderEmptyDMInbox,
                          renderStickyContent: function () {
                            return Object(oe.c)(e.props.conversationIds)
                          },
                          updateLastSeenEventId: s,
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
      R()(De, 'contextType', ee.a), R()(De, 'defaultProps', { conversationIds: [] })
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
        Fe = Object(Y.a)(F({ inbox: A.d.SECONDARY })(De), { directMessages: z.a })
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
      var Ne = U.a.e7172d70,
        Ue = U.a.bef0039f,
        He = (function (e) {
          E()(n, e)
          var t = Be(n)
          function n() {
            var e
            h()(this, n)
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              R()(g()(e), 'componentDidMount', function () {
                e.context.incrementDmDrawerInhibitorCount()
              }),
              R()(g()(e), 'componentWillUnmount', function () {
                e.context.decrementDmDrawerInhibitorCount()
              }),
              R()(g()(e), '_renderEmptyDMInbox', function () {
                return o.a.createElement(ae.a, { header: Ue, message: _e.a })
              }),
              R()(g()(e), '_handleBackClick', function () {
                e.props.history.push(Object(oe.a)(A.d.SECONDARY))
              }),
              R()(g()(e), '_hasDetailOpen', function () {
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
      R()(He, 'contextType', ee.a)
      var Ke = Object(Y.a)(F({ inbox: A.d.TERTIARY })(He), { directMessages: z.a }),
        Ve = f(function (e) {
          e.conversationId
          var t = e.inboxType,
            n = a()(e, ['conversationId', 'inboxType']),
            r = e.location
          return t === A.d.TERTIARY || '/messages/requests/additional' === r.pathname
            ? o.a.createElement(Ke, n)
            : t === A.d.SECONDARY || '/messages/requests' === r.pathname
            ? o.a.createElement(Fe, n)
            : o.a.createElement(be, n)
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
    n0Rl: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return U
      })
      n('OZaJ')
      var r = n('ddV6'),
        a = n.n(r),
        i = n('VrFO'),
        o = n.n(i),
        s = n('Y9Ll'),
        c = n.n(s),
        l = n('1Pcy'),
        u = n.n(l),
        d = n('5Yy7'),
        p = n.n(d),
        f = n('N+ot'),
        m = n.n(f),
        h = n('AuHH'),
        v = n.n(h),
        y = n('KEM+'),
        b = n.n(y),
        g = (n('2G9S'), n('ZUdG'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('ERkP')),
        _ = n.n(g),
        E = n('pXBW'),
        O = n('6/RC'),
        S = n('UIzd'),
        C = n.n(S),
        w = n('kGix')
      n.d(t, 'a', function () {
        return w.a
      })
      var k = n('fs1G'),
        R = n('0KEI'),
        I = n('lU4h'),
        P = n.n(I),
        x = n('21nk'),
        T = n.n(x),
        A = n('bCEw'),
        M = n.n(A),
        j = n('Ud88'),
        D = n.n(j)
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
            r = v()(e)
          if (t) {
            var a = v()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return m()(this, n)
        }
      }
      var F = function (e) {
          return (0, e.render)({ fetchStatus: w.a.LOADING, data: null, error: null, retry: k.a })
        },
        B = (function (e) {
          p()(n, e)
          var t = L(n)
          function n() {
            var e
            o()(this, n)
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i]
            return (e = t.call.apply(t, [this].concat(a))), b()(u()(e), 'state', { error: null }), e
          }
          return (
            c()(
              n,
              [
                {
                  key: 'componentDidCatch',
                  value: function (e, t) {
                    if (!(e instanceof E.a)) throw e
                    this.props.errorHandler(e)
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    return this.props.children(this.state.error, this.props.retry)
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromError',
                  value: function (e) {
                    return { error: e }
                  },
                },
              ],
            ),
            n
          )
        })(_.a.Component),
        N = function (e) {
          var t = e.query,
            n = e.queryRef,
            r = e.render,
            a = T()(t, n)
          return r({ fetchStatus: w.a.LOADED, data: a, error: null, retry: k.a })
        },
        U = function (e, t) {
          if (O.canUseDOM)
            return function (n) {
              var r = n.fetchPolicy,
                i = void 0 === r ? 'store-or-network' : r,
                o = n.render,
                s = n.variables,
                c = M()(e),
                l = a()(c, 2),
                u = l[0],
                d = l[1],
                p = Object(R.useCreateLocalApiErrorHandler)(t.errorConfig.context),
                f = P()(s),
                m = a()(f, 1)[0],
                h = _.a.useCallback(
                  function () {
                    d(m, { fetchPolicy: 'network-only' })
                  },
                  [d, m],
                )
              return (
                _.a.useLayoutEffect(
                  function () {
                    d(m, { fetchPolicy: i })
                  },
                  [i, d, m],
                ),
                u
                  ? _.a.createElement(
                      _.a.Suspense,
                      { fallback: _.a.createElement(F, { render: o }) },
                      _.a.createElement(
                        B,
                        { errorHandler: p(t.errorConfig.options || {}), key: u.fetchKey, retry: h },
                        function (t, n) {
                          return t
                            ? o({ fetchStatus: w.a.FAILED, error: t, data: null, retry: n })
                            : _.a.createElement(N, { query: e, queryRef: u, render: o })
                        },
                      ),
                    )
                  : null
              )
            }
          var n = new WeakMap()
          return function (r) {
            r.fetchPolicy
            var i = r.render,
              o = r.variables,
              s = D()(),
              c = Object(R.useCreateLocalApiErrorHandler)(t.errorConfig.context),
              l = P()(o),
              u = a()(l, 1)[0],
              d = n.get(s)
            if (d) return d
            var p = _.a.lazy(function () {
              return C()(s, e, u)
                .toPromise()
                .then(
                  function (e) {
                    return i({ fetchStatus: w.a.LOADED, data: e, error: null, retry: k.a })
                  },
                  function (e) {
                    return e instanceof E.a
                      ? (c(t.errorConfig.options || {})(e),
                        i({ fetchStatus: w.a.FAILED, data: null, error: e, retry: k.a }))
                      : _.a.createElement(function () {
                          throw e
                        })
                  },
                )
                .then(function (e) {
                  return { default: n.set(s, e).get.bind(n, s) }
                })
            })
            return _.a.createElement(_.a.Suspense, null, _.a.createElement(p, null))
          }
        }
    },
    nySH: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return m
      }),
        n.d(t, 'b', function () {
          return h
        }),
        n.d(t, 'c', function () {
          return v
        })
      n('uFXj')
      var r = n('ERkP'),
        a = n.n(r),
        i = n('HPNB'),
        o = n('v6aA'),
        s = n('jYSG'),
        c = n('AQ79'),
        l = n('+Bsv'),
        u = n('MWbm'),
        d = n('cHvH'),
        p = n('t62R'),
        f = n('rHpw'),
        m = function (e) {
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
                  a.a.createElement(p.b, { style: y.stickyCopy }, s.a),
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
        s = n('XnpN'),
        c = n('3XMw'),
        l = n.n(c),
        u = l.a.b5b7fb93,
        d = l.a.g755fcde,
        p = l.a.f6b1ff81
      t.a = function (e, t, n) {
        var r = e.type,
          a = e.name,
          i = e.participants,
          c = void 0 === i ? {} : i
        if (r === o.a.GROUP && a) return a
        if (Object.keys(c).length) {
          if (r === o.a.GROUP && n) return u
          var l = Object(s.a)(e, t).map(function (e) {
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
            var s = a()(r, 1),
              c = s[0]
            return n === o.a.GROUP ? p({ name: c }) : c
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
        s = n('1Pcy'),
        c = n.n(s),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('N+ot'),
        p = n.n(d),
        f = n('AuHH'),
        m = n.n(f),
        h = n('KEM+'),
        v = n.n(h),
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
        k = n('feu+'),
        R = n('3XMw'),
        I = n.n(R),
        P = I.a.fd6150fc,
        x = b.a.createElement(
          I.a.I18NFormatMessage,
          { $i18n: 'iac7f92a' },
          b.a.createElement(w.b, { link: '/privacy' }, I.a.d42d239f),
        ),
        T = I.a.j24c37b2,
        A = S(function (e) {
          var t = e.addFlag,
            n = e.analytics,
            r = e.shouldShowPrompt,
            a = b.a.useContext(_.a).featureSwitches
          if (!(r && a.isTrue('dm_education_flags_prompt'))) return !1
          return (
            n.scribeAction('impression'),
            b.a.createElement(k.a, {
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
        U = n('EbOo'),
        H = n('tZH3'),
        K = n('1YZw'),
        V = n('hqKg'),
        W = n('AQOc'),
        z = n('G6rE'),
        G = n('oEGd'),
        q = function (e, t) {
          return t.conversationId
        },
        Y = Object(V.createSelector)(
          q,
          function (e, t) {
            return M.selectConversation(e, q(0, t))
          },
          M.selectEntries,
          z.e.selectAll,
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
              conversation: (null == t ? void 0 : t.data) && Object(W.a)(t.data, n, r),
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
          addToast: K.b,
          block: z.e.block,
          createLocalApiErrorHandler: Object(D.createLocalApiErrorHandlerWithContextFactory)(
            'DIRECT_MESSAGES_INBOX_ITEM',
          ),
          disableNotifications: M.disableNotifications,
          enableNotifications: M.enableNotifications,
          leaveConversation: M.leaveConversation,
          muteDMUser: M.muteDMUser,
          unmuteDMUser: M.unmuteDMUser,
          unblock: z.e.unblock,
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
            return { users: Object(V.createSelector)(z.e.selectAll, ne, ee.b) }
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
        oe = Object(V.createSelector)(
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
        se = Object(G.c)(oe),
        ce = n('X/yg'),
        le = n('cTG8'),
        ue = function (e) {
          return b.a.createElement(I.a.I18NFormatMessage, { $i18n: 'b3a2b11c' }, b.a.createElement(w.b, null, e))
        },
        de = I.a.dedfd265
      var pe = I.a.a876e58b,
        fe = I.a.bf584cd1,
        me = I.a.a9cc8cfd,
        he = I.a.e20b65b0,
        ve = I.a.e5bfe07d,
        ye = I.a.b1a614fe,
        be = se(function (e) {
          var t = e.entry,
            n = e.perspective,
            r = e.isGroupDM,
            a = e.user,
            i = void 0 === a ? {} : a,
            o = e.recipient,
            s = void 0 === o ? {} : o,
            c = b.a.useContext(_.a).featureSwitches,
            l = t && t.message_data
          if (!l) return null
          var u = l.attachment,
            d = u && !!(u.video || u.photo || u.animated_gif || u.tweet || u.fleet || u.sticker || u.card),
            p = n === i.id_str,
            f = !(!d || !p) || !(!r || p),
            m = i.name,
            h = s.name,
            v = [
              f && b.a.createElement(w.b, { key: 'senderName' }, ue(m), ' '),
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
                          ? b.a.createElement(w.b, null, I.a.d5b762c8)
                          : b.a.createElement(
                              I.a.I18NFormatMessage,
                              { $i18n: 'dfd2b3b9' },
                              b.a.createElement(w.b, null, t),
                            )
                      })(p, m)
                    : ye)
                : u.fleet
                ? (v = (function (e, t, n) {
                    return e
                      ? b.a.createElement(
                          I.a.I18NFormatMessage,
                          { $i18n: 'i005f1fd' },
                          b.a.createElement(w.b, null, t),
                          b.a.createElement(w.b, null, n || ''),
                        )
                      : b.a.createElement(
                          I.a.I18NFormatMessage,
                          { $i18n: 'b35cee40' },
                          b.a.createElement(w.b, null, n || ''),
                        )
                  })(p, h, l.text))
                : u.video
                ? (v = Object(ce.k)(u, c)
                    ? f
                      ? (function (e, t) {
                          return e
                            ? b.a.createElement(w.b, null, I.a.h7033cac)
                            : b.a.createElement(
                                I.a.I18NFormatMessage,
                                { $i18n: 'be5a9616' },
                                b.a.createElement(w.b, null, t),
                              )
                        })(p, m)
                      : de
                    : f
                    ? (function (e, t) {
                        return e
                          ? b.a.createElement(w.b, null, I.a.j7d81019)
                          : b.a.createElement(
                              I.a.I18NFormatMessage,
                              { $i18n: 'eee2f120' },
                              b.a.createElement(w.b, null, t),
                            )
                      })(p, m)
                    : pe)
                : u.photo
                ? (v = f
                    ? (function (e, t) {
                        return e
                          ? b.a.createElement(w.b, null, I.a.f80629ba)
                          : b.a.createElement(
                              I.a.I18NFormatMessage,
                              { $i18n: 'c1e1f848' },
                              b.a.createElement(w.b, null, t),
                            )
                      })(p, m)
                    : fe)
                : u.animated_gif
                ? (v = f
                    ? (function (e, t) {
                        return e
                          ? b.a.createElement(w.b, null, I.a.eb3d722e)
                          : b.a.createElement(
                              I.a.I18NFormatMessage,
                              { $i18n: 'dc4b75a1' },
                              b.a.createElement(w.b, null, t),
                            )
                      })(p, m)
                    : me)
                : u.sticker
                ? (v = f
                    ? (function (e, t) {
                        return e
                          ? b.a.createElement(w.b, null, I.a.d30c2d4f)
                          : b.a.createElement(
                              I.a.I18NFormatMessage,
                              { $i18n: 'c7e2464e' },
                              b.a.createElement(w.b, null, t),
                            )
                      })(p, m)
                    : he)
                : u.card &&
                  (v = f
                    ? (function (e, t) {
                        return e
                          ? b.a.createElement(w.b, null, I.a.db53c017)
                          : b.a.createElement(
                              I.a.I18NFormatMessage,
                              { $i18n: 'hcbbbb34' },
                              b.a.createElement(w.b, null, t),
                            )
                      })(p, m)
                    : ve)),
            b.a.createElement(w.b, { color: 'gray700', numberOfLines: 1 }, v)
          )
        }),
        ge = n('uKEd'),
        _e = function (e, t) {
          return t.senderId ? z.e.select(e, t.senderId) : void 0
        },
        Ee = function (e, t) {
          return Object(ge.n)(e, t.reactionEntry.message_id)
        },
        Oe = function (e, t) {
          var n = Ee(e, t)
          return n && n.message_data && z.e.select(e, n.message_data.sender_id)
        },
        Se = Object(G.e)(function () {
          return Object(V.createSelector)(_e, Ee, Oe, function (e, t, n) {
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
            s = e.reactionEntry,
            c = b.a.useContext(_.a).featureSwitches,
            l = i && i.message_data,
            u = l && l.attachment,
            d = l && l.text,
            p = r && r.screen_name,
            f = a === (o && o.id_str),
            m = o && o.name,
            h = Object(Ce.b)(s.reaction_key || '', c)
          return (
            (t =
              u && u.tweet
                ? n
                  ? (function (e, t, n, r) {
                      return e
                        ? b.a.createElement(
                            I.a.I18NFormatMessage,
                            { $i18n: 'c4202784' },
                            b.a.createElement(w.b, null, n),
                            b.a.createElement(w.b, null, r),
                          )
                        : b.a.createElement(
                            I.a.I18NFormatMessage,
                            { $i18n: 'b493a890' },
                            b.a.createElement(w.b, null, t),
                            b.a.createElement(w.b, null, n),
                            b.a.createElement(w.b, null, r),
                          )
                    })(f, m, p, h)
                  : (function (e, t, n) {
                      return e
                        ? b.a.createElement(
                            I.a.I18NFormatMessage,
                            { $i18n: 'ca684bf5' },
                            b.a.createElement(w.b, null, n),
                          )
                        : b.a.createElement(
                            I.a.I18NFormatMessage,
                            { $i18n: 'h5797be5' },
                            b.a.createElement(w.b, null, t),
                            b.a.createElement(w.b, null, n),
                          )
                    })(f, m, h)
                : u && u.video
                ? n
                  ? (function (e, t, n, r) {
                      return e
                        ? b.a.createElement(
                            I.a.I18NFormatMessage,
                            { $i18n: 'd1f8bdd9' },
                            b.a.createElement(w.b, null, n),
                            b.a.createElement(w.b, null, r),
                          )
                        : b.a.createElement(
                            I.a.I18NFormatMessage,
                            { $i18n: 'd764af97' },
                            b.a.createElement(w.b, null, t),
                            b.a.createElement(w.b, null, n),
                            b.a.createElement(w.b, null, r),
                          )
                    })(f, m, p, h)
                  : (function (e, t, n) {
                      return e
                        ? b.a.createElement(
                            I.a.I18NFormatMessage,
                            { $i18n: 'ab1cdfe2' },
                            b.a.createElement(w.b, null, n),
                          )
                        : b.a.createElement(
                            I.a.I18NFormatMessage,
                            { $i18n: 'f0cf1699' },
                            b.a.createElement(w.b, null, t),
                            b.a.createElement(w.b, null, n),
                          )
                    })(f, m, h)
                : u && u.photo
                ? n
                  ? (function (e, t, n, r) {
                      return e
                        ? b.a.createElement(
                            I.a.I18NFormatMessage,
                            { $i18n: 'hec0fd4d' },
                            b.a.createElement(w.b, null, n),
                            b.a.createElement(w.b, null, r),
                          )
                        : b.a.createElement(
                            I.a.I18NFormatMessage,
                            { $i18n: 'j55320de' },
                            b.a.createElement(w.b, null, t),
                            b.a.createElement(w.b, null, n),
                            b.a.createElement(w.b, null, r),
                          )
                    })(f, m, p, h)
                  : (function (e, t, n) {
                      return e
                        ? b.a.createElement(
                            I.a.I18NFormatMessage,
                            { $i18n: 'jf27606a' },
                            b.a.createElement(w.b, null, n),
                          )
                        : b.a.createElement(
                            I.a.I18NFormatMessage,
                            { $i18n: 'cd110359' },
                            b.a.createElement(w.b, null, t),
                            b.a.createElement(w.b, null, n),
                          )
                    })(f, m, h)
                : u && u.animated_gif
                ? n
                  ? (function (e, t, n, r) {
                      return e
                        ? b.a.createElement(
                            I.a.I18NFormatMessage,
                            { $i18n: 'e70dcc35' },
                            b.a.createElement(w.b, null, n),
                            b.a.createElement(w.b, null, r),
                          )
                        : b.a.createElement(
                            I.a.I18NFormatMessage,
                            { $i18n: 'g1bf440b' },
                            b.a.createElement(w.b, null, t),
                            b.a.createElement(w.b, null, n),
                            b.a.createElement(w.b, null, r),
                          )
                    })(f, m, p, h)
                  : (function (e, t, n) {
                      return e
                        ? b.a.createElement(
                            I.a.I18NFormatMessage,
                            { $i18n: 'b2da1bf8' },
                            b.a.createElement(w.b, null, n),
                          )
                        : b.a.createElement(
                            I.a.I18NFormatMessage,
                            { $i18n: 'g84c0421' },
                            b.a.createElement(w.b, null, t),
                            b.a.createElement(w.b, null, n),
                          )
                    })(f, m, h)
                : u && u.card
                ? n
                  ? (function (e, t, n, r) {
                      return e
                        ? b.a.createElement(
                            I.a.I18NFormatMessage,
                            { $i18n: 'cd2e7c18' },
                            b.a.createElement(w.b, null, n),
                            b.a.createElement(w.b, null, r),
                          )
                        : b.a.createElement(
                            I.a.I18NFormatMessage,
                            { $i18n: 'aee9e7fa' },
                            b.a.createElement(w.b, null, t),
                            b.a.createElement(w.b, null, n),
                            b.a.createElement(w.b, null, r),
                          )
                    })(f, m, p, h)
                  : (function (e, t, n) {
                      return e
                        ? b.a.createElement(
                            I.a.I18NFormatMessage,
                            { $i18n: 'f9fb1cf6' },
                            b.a.createElement(w.b, null, n),
                          )
                        : b.a.createElement(
                            I.a.I18NFormatMessage,
                            { $i18n: 'f2bf910e' },
                            b.a.createElement(w.b, null, t),
                            b.a.createElement(w.b, null, n),
                          )
                    })(f, m, h)
                : d
                ? n
                  ? (function (e, t, n, r, a) {
                      return e
                        ? b.a.createElement(
                            I.a.I18NFormatMessage,
                            { $i18n: 'i6cec545' },
                            b.a.createElement(w.b, null, r),
                            b.a.createElement(w.b, null, n),
                            b.a.createElement(w.b, null, a),
                          )
                        : b.a.createElement(
                            I.a.I18NFormatMessage,
                            { $i18n: 'd6998baa' },
                            b.a.createElement(w.b, null, t),
                            b.a.createElement(w.b, null, r),
                            b.a.createElement(w.b, null, n),
                            b.a.createElement(w.b, null, a),
                          )
                    })(f, m, h, p, d)
                  : (function (e, t, n, r) {
                      return e
                        ? b.a.createElement(
                            I.a.I18NFormatMessage,
                            { $i18n: 'cec676f3' },
                            b.a.createElement(w.b, null, n),
                            b.a.createElement(w.b, null, r),
                          )
                        : b.a.createElement(
                            I.a.I18NFormatMessage,
                            { $i18n: 'a2706f9a' },
                            b.a.createElement(w.b, null, t),
                            b.a.createElement(w.b, null, n),
                            b.a.createElement(w.b, null, r),
                          )
                    })(f, m, h, d)
                : (function (e, t, n) {
                    return e
                      ? b.a.createElement(I.a.I18NFormatMessage, { $i18n: 'd6b15bbf' }, b.a.createElement(w.b, null, n))
                      : b.a.createElement(
                          I.a.I18NFormatMessage,
                          { $i18n: 'ac0d4bc7' },
                          b.a.createElement(w.b, null, t),
                          b.a.createElement(w.b, null, n),
                        )
                  })(f, m, h)),
            b.a.createElement(w.b, { color: 'gray700', numberOfLines: 1 }, t)
          )
        }),
        ke = n('H4nC'),
        Re = n('b9JY'),
        Ie = I.a.fb3ccb55,
        Pe = function (e) {
          var t = e.conversationType,
            n = e.entry,
            r = e.perspective
          if (n.marked_as_spam) return b.a.createElement(w.b, { color: 'gray700', numberOfLines: 1 }, Ie)
          if (Object(Re.b)(n)) {
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
          return Object(Re.c)(n)
            ? b.a.createElement(we, {
                isGroupDM: t === M.CONVERSATION_TYPE.GROUP,
                perspective: r,
                reactionEntry: n,
                senderId: n.sender_id,
              })
            : Object(Re.a)(n)
            ? b.a.createElement(ie, { entry: n, entryType: n.type, perspective: r })
            : Object(Re.d)(n)
            ? b.a.createElement(ke.a, { entry: n, isCompact: !0 })
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
        Ue = n('lHOd'),
        He = n('kb9v'),
        Ke = n('IG7M'),
        Ve = n('mjJ+'),
        We = n('Znyr'),
        ze = n('0PHd'),
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
      function ct(e) {
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
      var lt = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(ot.a)(
          'svg',
          ct(
            ct({}, e),
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
      var mt = function () {
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
      mt.metadata = { width: 32, height: 32 }
      var ht = mt,
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
            r = m()(e)
          if (t) {
            var a = m()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var kt = I.a.d88d0790,
        Rt = I.a.ad63377d,
        It = {
          confirmButtonLabel: I.a.bb1d57b6,
          actionTextLeave: I.a.g9074da4,
          header: I.a.gdf4b79f,
          text: I.a.h09b49f7,
        },
        Pt = I.a.e1c9ec9b,
        xt = I.a.i6b19b07,
        Tt = I.a.e3cfff7c,
        At = I.a.a8ed0eca,
        Mt = I.a.bdd91963,
        jt = I.a.a30a206d,
        Dt = I.a.ib4b1b85,
        Lt = I.a.bd3ca2ee,
        Ft = { component: 'low_quality_timeline' },
        Bt = function (e) {
          var t = e.children
          return b.a.createElement(De.a, { style: Ut.socialProofContainer }, t)
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
              v()(c()(e), '_count', e.context.featureSwitches.getValue('dm_conversation_labels_max_pinned_count')),
              v()(
                c()(e),
                '_isPinnedEducationEnabled',
                e.context.featureSwitches.isTrue('dm_conversation_labels_pinned_education_enabled'),
              ),
              v()(
                c()(e),
                '_isPinnedInboxEnabled',
                e.context.featureSwitches.isTrue('dm_conversation_labels_pinned_enabled') &&
                  e.context.featureSwitches.isTrue('direct_messages_incremental_holdback_2022h1'),
              ),
              v()(
                c()(e),
                '_isVDLEnabled',
                e.context.featureSwitches.isTrue('dm_vdl_enabled') &&
                  e.context.featureSwitches.isTrue('dm_vdl_inbox_p0_enabled'),
              ),
              v()(c()(e), 'state', { showActionMenu: !1, showConfirmation: !1, showPinnedAnnouncement: !1 }),
              v()(c()(e), '_renderConfirmationSheet', function () {
                var t = e.props.conversationId
                return b.a.createElement(Fe.a, {
                  confirmButtonLabel: It.confirmButtonLabel,
                  confirmButtonType: 'destructiveFilled',
                  headline: It.header,
                  onCancel: e._handleHideConfirmation,
                  onConfirm: e._deleteConversation(t),
                  text: It.text,
                })
              }),
              v()(c()(e), '_renderMenu', function (t) {
                var n,
                  r = t.isFocused,
                  a = t.isFocusedWithin,
                  i = t.isHovered,
                  o = e.state,
                  s = o.showActionMenu,
                  c = o.showPinnedAnnouncement,
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
                  m = function () {
                    e.setState({ showActionMenu: !0 })
                  },
                  h = e._isPinnedEducationEnabled && c && 1 === d && !p,
                  v = !Be.a.isEnabled || r || a || i || s || h
                return b.a.createElement($.a.Consumer, null, function (t) {
                  var n = t.isDrawer
                  return b.a.createElement(Ne.a, null, function (t) {
                    var r = t.windowWidth,
                      a = N.a.isTwoColumnLayout(r)
                    return b.a.createElement(Ue.a.Consumer, null, function (t) {
                      return b.a.createElement(
                        b.a.Fragment,
                        null,
                        b.a.createElement(
                          He.a,
                          {
                            actionPrimary: { text: jt, onClick: f },
                            headline: Dt,
                            onDismiss: f,
                            shouldDisplay: h && !n,
                            text: Lt({ count: e._count }),
                            withMask: !a,
                          },
                          a
                            ? b.a.createElement(Ke.a, {
                                onClick: m,
                                renderActionMenu: e._renderActionMenu,
                                style: v ? Ut.menu : Ut.hiddenMenu,
                              })
                            : null,
                        ),
                        a
                          ? null
                          : b.a.createElement(Ke.a, {
                              onClick: m,
                              renderActionMenu: e._renderActionMenu,
                              style: v ? Ut.menu : Ut.hiddenMenu,
                            }),
                      )
                    })
                  })
                })
              }),
              v()(c()(e), '_renderActionMenu', function (t) {
                var n,
                  r = e.props,
                  a = r.conversation,
                  i = r.conversationId,
                  o = r.togglePinState,
                  s = e.context.history,
                  c =
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
                      Icon: c ? ut : dt.a,
                      onClick: function () {
                        return o(i, a)
                      },
                      text: c ? Mt : Pt,
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
                      Icon: vt.a,
                      onClick: function () {
                        return e._handleReportMenuItemClick(s)()
                      },
                      text: xt,
                      withBottomBorder: !0,
                    },
                    m = {
                      Icon: l ? yt.a : Et,
                      onClick: function () {
                        return e._handleSnoozeMenuItemClick(i)
                      },
                      text: l ? At : Tt,
                      withBottomBorder: !0,
                    }
                  u.push(f, m, p)
                }
                return b.a.createElement(Ve.a, {
                  items: u,
                  onCloseRequested: e._handleHideMenu(t),
                  shouldCloseOnClick: !0,
                })
              }),
              v()(c()(e), '_renderConversationActions', function (t) {
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
              v()(c()(e), '_renderConversationEndCell', function (t) {
                var n = e.props,
                  r = n.inboxType,
                  a = n.searchQuery,
                  i = n.unread
                    ? b.a.createElement(We.a, {
                        pip: !0,
                        style: Ut.unreadMessagePip,
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
              v()(c()(e), '_renderConversationLabel', function (e) {
                var t = e.convo_label
                if (null == t || !t.text) return null
                var n = Object(Te.b)(t.icon)
                return b.a.createElement(
                  w.b,
                  { color: 'gray700', size: 'subtext2' },
                  n ? b.a.createElement(n, { style: Ut.convoLabelIcon }) : null,
                  t.text,
                )
              }),
              v()(c()(e), '_renderSocialProof', function (t) {
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
                      b.a.createElement(ze.a, {
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
              v()(c()(e), '_renderSearchConversationPreview', function () {
                var t = e.props,
                  n = t.conversation,
                  r = t.perspective,
                  a = t.searchQuery,
                  i = n ? Object(Ae.a)(n, r) : [],
                  o = [],
                  s = function (e, t) {
                    return e.localeCompare(t)
                  },
                  c = i
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
                    .sort(s),
                  l = o.sort(s).concat(c)
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
              v()(c()(e), '_renderX', function () {
                var t = e.props,
                  n = t.conversation,
                  r = t.conversationId,
                  a = e.context.loggedInUserId,
                  i = Object(ce.i)(n, a),
                  o = (null == n ? void 0 : n.type) === M.CONVERSATION_TYPE.GROUP
                return b.a.createElement(Ue.a.Consumer, null, function (t) {
                  return b.a.createElement(
                    Ye.a,
                    {
                      renderContent: function (n, a) {
                        return b.a.createElement(H.a, {
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
                      accessibilityLabel: kt,
                      icon: b.a.createElement(Ot.a, { style: e._isVDLEnabled ? Ut.xIcon : void 0 }),
                      onPress: e._handleXPress,
                      style: e._isVDLEnabled ? Ut.vdlXButton : Ut.xButton,
                      type: e._isVDLEnabled ? void 0 : 'destructiveText',
                    }),
                  )
                })
              }),
              v()(c()(e), '_handleDeleteMenuItemClick', function () {
                e.setState({ showConfirmation: !0 })
              }),
              v()(c()(e), '_handleHideMenu', function (t) {
                return function () {
                  t && t(), e.setState({ showActionMenu: !1 })
                }
              }),
              v()(c()(e), '_handleReportMenuItemClick', function (t) {
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
              v()(c()(e), '_handleSnoozeMenuItemClick', function (t) {
                var n = e.props,
                  r = n.conversation,
                  a = n.disableNotifications,
                  i = n.enableNotifications
                ;(null == r ? void 0 : r.notifications_disabled) ? i({ conversationId: t }) : a({ conversationId: t })
              }),
              v()(c()(e), '_handleXPress', function (e) {
                e.preventDefault()
              }),
              v()(c()(e), '_renderTimestamp', function (t) {
                var n = e.props,
                  r = n.conversation,
                  a = n.isMessageItem,
                  i =
                    e.context.featureSwitches.isTrue('dm_vdl_enabled') &&
                    e.context.featureSwitches.isTrue('dm_vdl_inbox_p0_enabled'),
                  o = [i || a ? Ut.inlineNotificationsDisabledIcon : Ut.notificationsDisabledIcon],
                  s = Number(t && a ? (null == t ? void 0 : t.time) : null == r ? void 0 : r.sort_timestamp)
                return b.a.createElement(
                  b.a.Fragment,
                  null,
                  b.a.createElement(
                    De.a,
                    { style: (i || a) && Ut.inlineTimestamp },
                    r && s ? b.a.createElement(Qe.a, { timestamp: s }) : null,
                    null != r && r.notifications_disabled ? b.a.createElement(Et, { style: o }) : null,
                  ),
                )
              }),
              v()(c()(e), '_deleteConversation', function (t) {
                return function () {
                  var n = e.props,
                    r = n.analytics,
                    a = n.conversation,
                    i = n.createLocalApiErrorHandler,
                    o = n.inboxType,
                    s = n.leaveConversation,
                    c = n.position,
                    l = e.context.history,
                    u = null != a && a.participants ? Object.keys(a.participants).length : 0,
                    d = a && a.type === M.CONVERSATION_TYPE.GROUP ? 'leave_group' : 'delete_thread',
                    p = {
                      conversation_type: (null == a ? void 0 : a.type) === M.CONVERSATION_TYPE.GROUP ? 1 : 0,
                      conversation_id: t,
                      conversation_participant_count: u,
                      position: c,
                      inbox_type: Object(ce.h)(o),
                      entry_point: rt.b.CELL_X_BUTTON,
                    }
                  e._handleHideConfirmation(),
                    r.scribe({ element: 'thread', action: d, data: p }),
                    s({ conversationId: t }).catch(i({ showToast: !0 })),
                    l.replace(Object(ce.e)(o))
                }
              }),
              v()(c()(e), '_blockUser', function (t) {
                return function () {
                  var n = e.props,
                    r = n.addToast,
                    a = n.analytics,
                    i = n.block,
                    o = n.createLocalApiErrorHandler
                  i(t).then(function () {
                    r({ action: { label: tt.c, onAction: e._createUnblockUserHandler(t) }, text: tt.a })
                  }, o(U.a)),
                    a.scribeAction('block')
                }
              }),
              v()(c()(e), '_createUnblockUserHandler', function (t) {
                return function () {
                  var n = e.props,
                    r = n.analytics,
                    a = n.createLocalApiErrorHandler
                  ;(0, n.unblock)(t).catch(a(je.a)), r.scribeAction('unblock')
                }
              }),
              v()(c()(e), '_handleHideConfirmation', function () {
                e.setState({ showConfirmation: !1 })
              }),
              v()(c()(e), '_handleOnClick', function (t) {
                var n = e.props,
                  r = n.addRecentSearch,
                  a = n.analytics,
                  i = n.conversation,
                  o = n.conversationId,
                  s = n.onClick,
                  c = n.position,
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
                      position: c,
                    },
                  }),
                  a.scribe({ component: 'recent_search', action: 'add' }),
                  r(l)),
                  s(t, o, i, c)
              }),
              v()(c()(e), '_handleShowConfirmation', function (t) {
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
                    s = null == n ? void 0 : n.max_entry_id,
                    c = null == n ? void 0 : n.convo_label,
                    l = this.props.messageId,
                    u = e.conversation,
                    d = null == u ? void 0 : u.conversation_id,
                    p = null == u ? void 0 : u.notifications_disabled,
                    f = null == u ? void 0 : u.last_read_event_id,
                    m = null == u ? void 0 : u.sort_event_id,
                    h = null == u ? void 0 : u.max_entry_id,
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
                    k = t.showConfirmation,
                    R = t.showPinnedAnnouncement
                  return (
                    r !== d ||
                    a !== p ||
                    i !== f ||
                    o !== m ||
                    s !== h ||
                    l !== y ||
                    _ !== O ||
                    C !== k ||
                    g !== E ||
                    c !== v ||
                    w !== R
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
                    s = t.perspective,
                    c = t.position,
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
                    m = [Ut.root, u && !this._isVDLEnabled && Ut.unread],
                    h = (null == n ? void 0 : n.type) === M.CONVERSATION_TYPE.GROUP,
                    v = this._isVDLEnabled && h
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
                                state: Ct(Ct({}, null == i ? void 0 : i.state), {}, { position: c }),
                              },
                              onPress: e._handleOnClick,
                              style: m,
                              testID: Me,
                            },
                            b.a.createElement(
                              $e.a,
                              {
                                avatarCell: b.a.createElement(Z.a, {
                                  conversation: n,
                                  perspective: s,
                                  withBadge: v,
                                  withVDLRefresh: e._isVDLEnabled,
                                }),
                                avatarSize: _,
                              },
                              b.a.createElement(
                                De.a,
                                { style: Ut.bodyColumn },
                                b.a.createElement(
                                  De.a,
                                  { style: Ut.titleContainer },
                                  b.a.createElement(J.b, {
                                    conversation: n,
                                    isConversationSearchTitle: !!O,
                                    isMessageSearchTitle: !!a,
                                    perspective: s,
                                    renderTimestamp: function () {
                                      return e._renderTimestamp(f)
                                    },
                                    withScreenName: !l && !a,
                                    withVDLRefresh: e._isVDLEnabled,
                                  }),
                                  b.a.createElement(
                                    De.a,
                                    { style: [Ut.snippet, !o && !u && !d && Ut.snippetPadding] },
                                    f && !O
                                      ? b.a.createElement(Pe, {
                                          conversationType: n.type,
                                          entry: f,
                                          isMessageItem: a,
                                          perspective: s,
                                        })
                                      : O
                                      ? e._renderSearchConversationPreview()
                                      : null,
                                  ),
                                  y ? e._renderConversationLabel(n) : null,
                                  g ? e._renderSocialProof(n) : null,
                                ),
                                E ? b.a.createElement(De.a, { style: Ut.endCell }, E) : null,
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
      var Ut = et.a.create(function (e) {
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
            snippetPadding: {
              paddingRight: 'calc('.concat(e.spaces.space28, ' + ').concat(e.spaces.space1, ' * 0.75)'),
            },
            unread: { backgroundColor: e.colors.unreadCellBackground },
            socialProofContainer: { marginTop: e.spaces.space4 },
            convoLabelIcon: { marginRight: e.spaces.space4 },
            endCell: { marginLeft: e.spaces.space16 },
          }
        }),
        Ht = Object(Le.a)(Q(Nt), { page: 'messages', section: 'inbox' }),
        Kt = Object(O.a)()
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
        Vt = n('oUUt'),
        Wt = (n('uFXj'), I.a.b08821f3),
        zt = I.a.e047b8fa,
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
          var s,
            c = [Gt.root, i && Gt.labelHeader]
          return b.a.createElement(
            De.a,
            { style: c },
            b.a.createElement(
              De.a,
              { style: Gt.iconContainer },
              (s = a) ? b.a.createElement(s, { style: Gt.icon }) : null,
              b.a.createElement(w.b, { size: 'headline1', weight: 'heavy' }, r),
            ),
            o
              ? b.a.createElement(
                  Xe.a,
                  { accessibilityLabel: Wt, onPress: n, style: Gt.backButton, type: 'onMediaWhiteFilled' },
                  zt,
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
        sn,
        cn = tn(
          tn({}, n('7n04').a),
          {},
          { initialScrollHeadroom: Object($t.a)(0), scrollHeadroom: Object($t.a)(0), pinToNewestWhenAtNewest: !0 },
        ),
        ln = n('TEoO'),
        un = n('NjAB'),
        dn = n('Fr3L'),
        pn = n('uDfI'),
        fn = n('9SqB'),
        mn = n.n(fn),
        hn = n('DQzJ'),
        vn = n('OIs+'),
        yn = I.a.cb367657,
        bn = I.a.ie9a7e48,
        gn = I.a.hd3927c6,
        _n = I.a.f1ac0968,
        En =
          ((nn = {}),
          v()(nn, vn.a.Offline, { toast: { text: bn } }),
          v()(nn, 'defaultToast', { text: yn }),
          v()(nn, 'showToast', !0),
          nn),
        On =
          ((rn = {}),
          v()(rn, vn.a.Offline, { toast: { text: _n } }),
          v()(rn, 'defaultToast', { text: gn }),
          v()(rn, 'showToast', !0),
          rn)
      function Sn(e, t) {
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
      function Cn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Sn(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Sn(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var wn = I.a.e4b3f520,
        kn = I.a.ae4d666a,
        Rn = function (e) {
          return e
        },
        In = I.a.a219e217,
        Pn = I.a.d571e4f8,
        xn = I.a.a551bf7d,
        Tn = I.a.d98e066b,
        An = I.a.j302dba7,
        Mn = void 0 !== an ? an : (an = n('X8um')),
        jn = { context: 'DM_PINNED_INBOX' },
        Dn = function (e) {
          var t,
            r = Object(pn.c)(),
            a = e.accessibilityTitle,
            i = e.cacheKey,
            o = e.conversationIds,
            s = e.createLocalApiErrorHandler,
            c = e.footer,
            l = e.header,
            u = e.onNearEnd,
            d = e.pinnedConversationIds,
            p = e.renderEmptyDMInbox,
            f = e.renderInboxItem,
            m = e.withKeyboardShortcuts,
            h = Object(hn.a)(Mn, { label: nt.a.PINNED }).data,
            y = b.a.useState(!1),
            g = B()(y, 2),
            E = g[0],
            O = g[1],
            S = b.a.useContext(_.a).featureSwitches.getValue('dm_conversation_labels_max_pinned_count'),
            C = (null == h || null === (t = h.labeled_conversation_slice) || void 0 === t ? void 0 : t.items) || [],
            w = Object(un.b)(C, [Yt.a]).entities
          b.a.useEffect(
            function () {
              r(Jt(w))
            },
            [h],
          )
          var k = mn()(void 0 !== on ? on : (on = n('ZH9U'))),
            R = B()(k, 1)[0],
            I = mn()(void 0 !== sn ? sn : (sn = n('rQjK'))),
            P = B()(I, 1)[0],
            x = function (e, t) {
              P({
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
                  r(Jt({ conversations: v()({}, e, Cn(Cn({}, t), {}, { participants: i, labels: o })) })),
                    r(Object(K.b)({ ariaOnly: !0, text: An }))
                },
                updater: function (t) {
                  var n,
                    r,
                    a =
                      null ===
                        (n = C.find(function (t) {
                          return t.rest_id === e
                        })) || void 0 === n
                        ? void 0
                        : n.id,
                    i = null == h || null === (r = h.labeled_conversation_slice) || void 0 === r ? void 0 : r.__id
                  if (a && i) {
                    var o = t.get(a),
                      s = t.get(i)
                    s && o && (Object(Vt.b)(s, a), t.delete(a))
                  }
                },
                onError: function (e) {
                  s(On)(e)
                },
              })
            },
            T =
              null == o
                ? void 0
                : o.filter(function (e) {
                    return -1 === d.indexOf(e)
                  }),
            A = d.length && T.length,
            M = b.a.createElement(
              b.a.Fragment,
              null,
              l,
              null != d && d.length
                ? b.a.createElement(
                    b.a.Fragment,
                    null,
                    Ln(wn),
                    d.map(function (e, t) {
                      return f({ conversationIds: d, togglePinState: x })(e)
                    }),
                  )
                : null,
              A ? Ln(kn) : null,
            )
          return null != o && o.length
            ? b.a.createElement(
                b.a.Fragment,
                null,
                E
                  ? b.a.createElement(Fe.a, {
                      confirmButtonLabel: In,
                      headline: Pn({ count: S }),
                      onConfirm: function () {
                        return O(!1)
                      },
                      text: xn,
                      withCancelButton: !1,
                    })
                  : null,
                i && null != T && T.length
                  ? b.a.createElement(ln.a, {
                      accessibilityRole: 'tablist',
                      accessibilityTitle: a,
                      anchoring: cn,
                      assumedItemHeight: 100,
                      cacheKey: i,
                      footer: c,
                      header: M,
                      identityFunction: Rn,
                      items: T,
                      onNearEnd: u,
                      renderer: f({
                        conversationIds: T,
                        togglePinState: function (e, t) {
                          R({
                            variables: { conversation_id: e, label: nt.a.PINNED },
                            onCompleted: function (n) {
                              var a
                              switch (
                                null === (a = n.add_dm_conversation_label_v3) || void 0 === a ? void 0 : a.__typename
                              ) {
                                case 'DMConversationLabelInfo':
                                  var i = n.add_dm_conversation_label_v3,
                                    o = i.label_type,
                                    s = i.timestamp,
                                    c = Object(Ae.a)(t)
                                  r(
                                    Jt({
                                      conversations: v()(
                                        {},
                                        e,
                                        Cn(
                                          Cn({}, t),
                                          {},
                                          { participants: c, labels: [{ label_type: o, timestamp: s }] },
                                        ),
                                      ),
                                    }),
                                  ),
                                    r(Object(K.b)({ ariaOnly: !0, text: Tn }))
                                  break
                                case 'DMConversationLabelUnavailable':
                                  'ExceededMaxPinnedConversations' === n.add_dm_conversation_label_v3.failure_reason &&
                                    O(!0)
                              }
                            },
                            onError: function (e) {
                              s(En)(e)
                            },
                          })
                        },
                      }),
                      withKeyboardShortcuts: m,
                      withoutHeadroom: !0,
                    })
                  : M,
                ';',
              )
            : p()
        },
        Ln = function (e) {
          return b.a.createElement(De.a, null, b.a.createElement(qt, { headerText: e, isInboxLabelHeader: !0 }))
        }
      var Fn = Kt(function (e) {
          return b.a.createElement(dn.a, { errorConfig: jn }, b.a.createElement(Dn, e))
        }),
        Bn =
          (n('LJOr'),
          n('tVqn'),
          n('Qavd'),
          n('JtPf'),
          n('M+/F'),
          function (e, t) {
            return t.module.selectItems(e)
          }),
        Nn = function (e, t) {
          return t.module.selectFetchStatus(e)
        },
        Un = Object(O.a)()
          .propsFromState(function () {
            return { fetchStatus: Nn, sliceItems: Bn }
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
        Hn = n('MDbM'),
        Kn = n('v//M'),
        Vn = n('0yYu'),
        Wn = n('lBmi'),
        zn = n('91AQ'),
        Gn = n('6ZHn')
      function qn(e) {
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
            var a = m()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var Yn = I.a.c94ac69d,
        Xn = I.a.a2f8105f,
        Qn = I.a.g2fd3205,
        Zn = I.a.ffd9cfe6,
        Jn = (function (e) {
          u()(n, e)
          var t = qn(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              v()(
                c()(e),
                '_groupBucketSize',
                e.context.featureSwitches.getNumberValue('dm_inbox_search_groups_bucket_size'),
              ),
              v()(
                c()(e),
                '_messagesBucketSize',
                e.context.featureSwitches.getNumberValue('dm_inbox_search_messages_bucket_size'),
              ),
              v()(
                c()(e),
                '_peopleBucketSize',
                e.context.featureSwitches.getNumberValue('dm_inbox_search_people_bucket_size'),
              ),
              v()(c()(e), '_renderSearchResults', function () {
                var t = e.props,
                  n = t.groupConversationIds,
                  r = t.messageConversationIds,
                  a = t.peopleSearchConversationIds,
                  i = t.renderEmptyState,
                  o = a.length && n.length,
                  s = e._groupBucketSize < n.length,
                  c = e._messagesBucketSize < r.length,
                  l = e._peopleBucketSize < a.length
                return (null == n ? void 0 : n.length) || a.length || r.length
                  ? b.a.createElement(
                      b.a.Fragment,
                      null,
                      a.length ? e._renderPeopleSection() : null,
                      o && !l ? b.a.createElement(Vn.a, null) : null,
                      l ? e._renderDMSearchFooter(Qn) : null,
                      n.length ? e._renderGroupsSection() : null,
                      s ? e._renderDMSearchFooter(Yn) : null,
                      r.length ? e._renderMessagesSection() : null,
                      c ? e._renderDMSearchFooter(Xn) : null,
                    )
                  : i()
              }),
              v()(c()(e), '_handleFetch', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchSearchIfNeeded)().catch(n())
              }),
              v()(c()(e), '_renderDMSearchFooter', function (t) {
                var n = e.props.location
                return b.a.createElement(
                  De.a,
                  { style: $n.header },
                  b.a.createElement(w.b, { link: { pathname: n.pathname, state: { tab: t } } }, Zn),
                )
              }),
              v()(c()(e), '_renderDMHeader', function (e) {
                var t = e.headerText,
                  n = e.icon
                return b.a.createElement(qt, { headerText: t, icon: n })
              }),
              v()(c()(e), '_renderGroupsSection', function () {
                var t = e.props,
                  n = t.groupConversationIds,
                  r = t.renderInboxItem
                return b.a.createElement(
                  b.a.Fragment,
                  null,
                  e._renderDMHeader({ icon: Wn.a, headerText: Yn }),
                  n
                    .map(function (e) {
                      return e ? r({ conversationIds: n })(e) : null
                    })
                    .slice(0, e._groupBucketSize),
                )
              }),
              v()(c()(e), '_renderMessagesSection', function () {
                var t = e.props,
                  n = t.entryIds,
                  r = t.messageConversationIds,
                  a = t.renderInboxItem
                return b.a.createElement(
                  b.a.Fragment,
                  null,
                  e._renderDMHeader({ icon: zn.a, headerText: Xn }),
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
              v()(c()(e), '_renderPeopleSection', function () {
                var t = e.props,
                  n = t.peopleSearchConversationIds,
                  r = t.renderInboxItem
                return b.a.createElement(
                  b.a.Fragment,
                  null,
                  e._renderDMHeader({ icon: Gn.a, headerText: Qn }),
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
                  e.module !== r && n !== Hn.a.FAILED && this._handleFetch()
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
                  return b.a.createElement(Kn.a, {
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
      v()(Jn, 'contextType', _.a)
      var $n = et.a.create(function (e) {
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
        er = Un(Jn),
        tr = n('wAC9')
      function nr(e, t) {
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
      function rr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? nr(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : nr(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var ar,
        ir = function (e) {
          return Object(tr.a)({
            contextSuffix: 'DM_SEARCH_SLICE',
            getFetchApiEndpoint: function (e) {
              return e.DirectMessagesGraphQL.fetchDMAllSearch
            },
            sliceKey: ''.concat(rt.e, '-').concat(e),
            getEndpointParams: function (t) {
              return rr(rr({}, t), {}, { query: e })
            },
            mapEntitiesToActions: Jt,
          })
        },
        or = function (e, t) {
          return t.query
        },
        sr = Object(O.a)().propsFromState(function () {
          return {
            sliceModule: Object(V.createSelector)(or, function (e) {
              return e ? ir(e) : void 0
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
            ? b.a.createElement(er, {
                loadingLabel: t,
                location: n,
                module: o,
                query: r,
                renderEmptyState: a,
                renderInboxItem: i,
              })
            : a()
        }),
        cr = M.selectRecentSearches,
        lr = function (e, t) {
          return t.query ? M.selectSearchConversations(e, t.query) : []
        },
        ur = function (e, t) {
          return t.query ? M.selectSearchFetchStatus(e, t.query) : j.a.LOADED
        },
        dr = function (e, t) {
          return t.conversationIds || []
        },
        pr = function (e, t) {
          return null != e && e.length
            ? t.filter(function (t) {
                return e.indexOf(t) > -1
              })
            : e
        },
        fr = Object(O.a)()
          .propsFromState(function () {
            return { conversationIds: dr, recentSearches: cr, searchFetchStatus: ur, searchConversationIds: lr }
          })
          .adjustStateProps(function (e) {
            var t = e.conversationIds,
              n = e.recentSearches,
              r = e.searchConversationIds
            return {
              conversationIds: t,
              recentSearches: n,
              searchFetchStatus: e.searchFetchStatus,
              searchConversationIds: pr(r, t),
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
        mr = n('VY6S'),
        hr = n('s14A'),
        vr = n('VPW4'),
        yr = n('mN6z')
      function br(e, t) {
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
      function gr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? br(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : br(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var _r = void 0 !== ar ? ar : (ar = n('y59G')),
        Er = 'DM_MESSAGE_SEARCH',
        Or = { context: Er },
        Sr = function (e) {
          return e
        },
        Cr = function (e) {
          var t,
            n,
            r,
            a = e.footer,
            i = e.noItemsRenderer,
            o = e.onScrollEnd,
            s = e.renderInboxItem,
            c = e.searchTerm,
            l = Object(pn.c)(),
            u = Object(hn.a)(_r, { query: c }),
            d = u.data,
            p = u.fetchNext,
            f = u.hasNext,
            m = b.a.useMemo(
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
                  i = Object(un.b)(r, [Yt.a]),
                  o = Object(un.b)(a, [Yt.b])
                return {
                  normalizedConversations: i,
                  normalizedMessages: o,
                  entities: gr(gr({}, null == i ? void 0 : i.entities), null == o ? void 0 : o.entities),
                }
              },
              [null == d || null === (t = d.dm_message_slice_result) || void 0 === t ? void 0 : t.items],
            ),
            h = m.entities,
            v = m.normalizedConversations,
            y = m.normalizedMessages,
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
                Object(yr.a)(d, g) || l(Jt(h, !0))
              },
              [h, d, g, l],
            ),
            b.a.createElement(ln.a, {
              cacheKey: Er,
              footer: f ? null : a,
              identityFunction: Sr,
              items: null == y ? void 0 : y.result,
              noItemsRenderer: i,
              onNearEnd: p,
              onScrollEnd: o,
              renderer: s({
                conversationIds: null == v ? void 0 : v.result,
                isMessageItem: !0,
                messageIds: null == y ? void 0 : y.result,
              }),
              withoutHeadroom: !0,
            })
          )
        },
        wr = et.a.create(function (e) {
          return { activityIndicatior: { paddingVertical: 250 } }
        })
      function kr(e) {
        return b.a.createElement(
          dn.a,
          { errorConfig: Or },
          b.a.createElement(
            b.a.Suspense,
            { fallback: b.a.createElement(vr.a, { style: wr.activityIndicatior }) },
            b.a.createElement(Cr, e),
          ),
        )
      }
      var Rr = n('j7Bv'),
        Ir = n('VwDm'),
        Pr = n('hOZg')
      function xr(e) {
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
            var a = m()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var Tr = I.a.dbd5d40f,
        Ar = (function (e) {
          u()(n, e)
          var t = xr(n)
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
                    a = b.a.createElement(Rr.a, { Icon: Ir.a, color: 'neutral', size: 'xLarge', style: Mr.searchIcon }),
                    i = [Mr.listItemView, Mr.bottomBorder]
                  return b.a.createElement(
                    Je.a,
                    { onPress: n, style: i },
                    b.a.createElement(
                      De.a,
                      null,
                      b.a.createElement(
                        $e.a,
                        { avatarCell: a, avatarSize: 'xLarge', cellStyle: Mr.avatarColumn },
                        b.a.createElement(
                          De.a,
                          { style: Mr.container },
                          b.a.createElement(w.b, { numberOfLines: 1 }, r),
                          b.a.createElement(Xe.a, {
                            accessibilityLabel: Tr,
                            borderColor: 'transparent',
                            icon: b.a.createElement(Pr.a, null),
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
        Mr = et.a.create(function (e) {
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
        jr = Ar
      function Dr(e, t) {
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
      function Lr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Dr(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Dr(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var Fr = function (e) {
        return Object(tr.a)({
          contextSuffix: 'DM_GROUP_SEARCH_SLICE',
          getFetchApiEndpoint: function (e) {
            return e.DirectMessagesGraphQL.fetchDMGroupSearch
          },
          sliceKey: ''.concat(rt.e, '-groups-').concat(e),
          getEndpointParams: function (t) {
            return Lr(Lr({}, t), {}, { query: e })
          },
          mapEntitiesToActions: Jt,
        })
      }
      function Br(e, t) {
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
      function Nr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Br(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Br(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var Ur = function (e) {
          return Object(tr.a)({
            contextSuffix: 'DM_PEOPLE_SEARCH_SLICE',
            getFetchApiEndpoint: function (e) {
              return e.DirectMessagesGraphQL.fetchDMPeopleSearch
            },
            sliceKey: ''.concat(rt.e, '-people-').concat(e),
            getEndpointParams: function (t) {
              return Nr(Nr({}, t), {}, { query: e })
            },
            mapEntitiesToActions: Jt,
          })
        },
        Hr = function (e, t) {
          return t.query
        },
        Kr = function (e, t) {
          return t.tabType
        },
        Vr = Object(O.a)().propsFromState(function () {
          return {
            sliceModule: Object(V.createSelector)(Kr, Hr, function (e, t) {
              var n = t && e === rt.f.PEOPLE
              return t && e === rt.f.GROUPS ? Fr(t) : n ? Ur(t) : void 0
            }),
          }
        }),
        Wr = n('FS1z'),
        zr = Vr(function (e) {
          var t = e.footer,
            n = e.onScrollEnd,
            r = e.renderEmptyState,
            a = e.renderInboxItem,
            i = e.sliceModule
          return i
            ? b.a.createElement(Wr.a, {
                footer: t,
                module: i,
                noItemsRenderer: r,
                onScrollEnd: n,
                renderer: a({ conversationIds: [] }),
                withoutHeadroom: !0,
              })
            : r()
        }),
        Gr = n('IG4P'),
        qr = n('RJrc'),
        Yr = n('TnY3'),
        Xr = n('FIs5'),
        Qr = n('6OUF'),
        Zr = n('k/OQ'),
        Jr = n('95Se')
      function $r(e, t) {
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
      function ea(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? $r(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : $r(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
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
            r = m()(e)
          if (t) {
            var a = m()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var na = 'dmSearchInbox',
        ra = function (e) {
          return e
        },
        aa = I.a.b08821f3,
        ia = I.a.a66ac766,
        oa = I.a.fe61929d,
        sa = I.a.a846382a,
        ca = I.a.b9dae4f4,
        la = I.a.e7fb2027,
        ua = I.a.b92a21d8,
        da = I.a.jdc67c42,
        pa = I.a.e8581ccd,
        fa = I.a.f08940ab,
        ma = I.a.gaae1fd5,
        ha = I.a.f8321d82,
        va = I.a.c94ac69d,
        ya = I.a.a2f8105f,
        ba = I.a.g2fd3205,
        ga = I.a.fb3c8e74,
        _a = (function (e) {
          u()(n, e)
          var t = ta(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              v()(c()(e), 'state', { debouncedQuery: '', isLoadingMore: !1, isRefreshing: !1 }),
              v()(
                c()(e),
                '_messageSearchEnabled',
                e.context.featureSwitches.isTrue('dm_inbox_search_message_results_enabled'),
              ),
              v()(
                c()(e),
                '_modularSearchEnabled',
                e.context.featureSwitches.isTrue('dm_inbox_search_modular_results_enabled'),
              ),
              v()(c()(e), '_setInputRef', function (t) {
                e._textInputRef = t
              }),
              v()(c()(e), '_renderEmptyDMSearchInbox', function () {
                var t = e.props,
                  n = t.analytics,
                  r = t.query,
                  a = e.state.debouncedQuery
                return a && r
                  ? (n.scribe({ component: 'search', element: 'results', action: 'empty' }),
                    b.a.createElement(Xr.a, {
                      buttonLink: '/messages/compose',
                      buttonText: fa,
                      header: ua({ query: a }),
                      message: e._messageSearchEnabled ? pa : da,
                      onButtonPress: e._handleComposeButtonPress,
                    }))
                  : b.a.createElement(
                      De.a,
                      { style: Ea.emptyState },
                      b.a.createElement(w.b, { align: 'center', color: 'gray700' }, ma),
                    )
              }),
              v()(c()(e), '_renderRecentSearches', function () {
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
                        headerText: ga,
                        withClearButton: !0,
                      }),
                      a.map(function (t) {
                        return b.a.createElement(jr, {
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
              v()(c()(e), '_renderAllDMSearchResultsTab', function () {
                var t = e.props,
                  n = t.location,
                  r = t.renderInboxItem,
                  a = e.state.debouncedQuery
                return a
                  ? b.a.createElement(sr, {
                      loadingLabel: ia,
                      location: n,
                      query: a,
                      renderEmptyState: e._renderEmptyDMSearchInbox,
                      renderInboxItem: r,
                    })
                  : e._renderEmptyDMSearchInbox()
              }),
              v()(c()(e), '_renderConversationsTab', function (t) {
                var n = e.props.renderInboxItem,
                  r = e.state.debouncedQuery
                return b.a.createElement(zr, {
                  footer: e._renderFooter(),
                  onScrollEnd: e._handleScrollEnd,
                  query: r,
                  renderEmptyState: e._renderEmptyDMSearchInbox,
                  renderInboxItem: n,
                  tabType: t ? rt.f.GROUPS : rt.f.PEOPLE,
                })
              }),
              v()(c()(e), '_renderMessagesTab', function () {
                var t = e.props.renderInboxItem,
                  n = e.state.debouncedQuery
                return n
                  ? b.a.createElement(kr, {
                      footer: e._renderFooter(),
                      noItemsRenderer: e._renderEmptyDMSearchInbox,
                      onScrollEnd: e._handleScrollEnd,
                      renderInboxItem: t,
                      searchTerm: n,
                    })
                  : e._renderEmptyDMSearchInbox()
              }),
              v()(c()(e), '_renderTabContent', function () {
                var t = e.props.location
                switch (((null == t ? void 0 : t.state) || {}).tab) {
                  case ba:
                    return e._renderConversationsTab(!1)
                  case va:
                    return e._renderConversationsTab(!0)
                  case ya:
                    return e._renderMessagesTab()
                  default:
                    return e._renderAllDMSearchResultsTab()
                }
              }),
              v()(c()(e), '_renderSearchResults', function () {
                var t = e.props,
                  n = t.accessibilityTitle,
                  r = t.renderInboxItem,
                  a = t.searchConversationIds,
                  i = e.state.isRefreshing
                return b.a.createElement(
                  hr.a,
                  null,
                  b.a.createElement(
                    Gr.a,
                    { isRefreshing: i, onRefresh: e._handlePullToRefresh },
                    b.a.createElement(ln.a, {
                      accessibilityRole: 'tablist',
                      accessibilityTitle: n,
                      anchoring: cn,
                      assumedItemHeight: 100,
                      cacheKey: na,
                      footer: e._renderFooter(),
                      identityFunction: ra,
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
              v()(c()(e), '_renderFooter', function () {
                return e.state.isLoadingMore
                  ? b.a.createElement(qr.a, null)
                  : b.a.createElement(
                      De.a,
                      { style: Ea.footerContainer },
                      b.a.createElement(w.b, { align: 'center', size: 'body', weight: 'bold' }, la),
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
                          ca,
                        ),
                      ),
                    )
              }),
              v()(c()(e), '_clearRecentSearches', function () {
                var t = e.props,
                  n = t.analytics,
                  r = t.clearRecentSearches
                n.scribe({ component: 'recent_search', action: 'clear' }), r()
              }),
              v()(c()(e), '_handleComposeButtonPress', function () {
                e.props.analytics.scribe({ component: 'search', element: 'empty_results', action: 'compose' })
              }),
              v()(c()(e), '_handleFooterClick', function () {
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
              v()(c()(e), '_handleRefetchSearch', function () {
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
              v()(c()(e), '_handlePullToRefresh', function () {
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
              v()(c()(e), '_handleSearchChangeInner', function (t) {
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
              v()(c()(e), '_handleSearchChangeDebounced', Object(mr.a)(e._handleSearchChangeInner, 200)),
              v()(c()(e), '_handleSearchChange', function (t) {
                var n = t.currentTarget.value,
                  r = e.props.onQueryChange
                ;((n && n.trim()) || !n) && (r(n), e._handleSearchChangeDebounced(n))
              }),
              v()(c()(e), '_handleNearEnd', function () {
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
              v()(c()(e), '_handleScrollEnd', function () {
                var t = e.props,
                  n = t.addRecentSearch,
                  r = t.analytics,
                  a = t.query
                e.state.debouncedQuery && a && (n(a), r.scribe({ component: 'recent_search', action: 'add' }))
              }),
              v()(c()(e), '_handleSearchClear', function () {
                return e._handleSearchChangeInner('')
              }),
              v()(c()(e), '_handleHideRecentSearches', function () {
                ;(0, e.props.hideRecentSearches)()
              }),
              v()(c()(e), '_handleAddRecentSearch', function (t) {
                var n = t.currentTarget.value,
                  r = e.props,
                  a = r.addRecentSearch,
                  i = r.analytics
                n &&
                  (a(n),
                  i.scribe({ component: 'recent_search', action: 'add' }),
                  e._textInputRef && e._textInputRef.blur())
              }),
              v()(c()(e), '_handleRecentSearchClick', function (t) {
                var n = e.props,
                  r = n.analytics
                ;(0, n.onQueryChange)(t),
                  r.scribe({ component: 'recent_search', action: 'click' }),
                  e._handleSearchChangeInner(t)
              }),
              v()(c()(e), '_handleClearRecentSearch', function (t, n) {
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
                    i = [Ea.searchInput, a ? Ea.searchInputBorder : void 0],
                    o = ((null == t ? void 0 : t.state) || {}).tab,
                    s = [ha, ba, va]
                  this._messageSearchEnabled && s.push(ya)
                  var c = s.map(function (e) {
                    return {
                      key: e,
                      label: e,
                      isActive: function () {
                        return o === e || (!o && e === ha)
                      },
                      to: ea(ea({}, t), {}, { state: ea(ea({}, t.state), {}, { tab: e }) }),
                    }
                  })
                  return b.a.createElement(
                    b.a.Fragment,
                    null,
                    b.a.createElement(
                      De.a,
                      { style: i },
                      b.a.createElement(Xe.a, {
                        accessibilityLabel: aa,
                        icon: b.a.createElement(Jr.a, null),
                        onPress: this._handleHideRecentSearches,
                        pullLeft: !0,
                        type: 'primaryText',
                      }),
                      b.a.createElement(Qr.a, {
                        Icon: Ir.a,
                        autoComplete: 'off',
                        onChange: this._handleSearchChange,
                        onClear: this._handleSearchClear,
                        onSubmitEditing: this._handleAddRecentSearch,
                        placeholder: this._messageSearchEnabled ? sa : oa,
                        ref: this._setInputRef,
                        value: n,
                        withClearButton: !0,
                      }),
                    ),
                    this._modularSearchEnabled && (n || o === ba || o === va)
                      ? b.a.createElement(
                          b.a.Fragment,
                          null,
                          b.a.createElement(Zr.a, { links: c }),
                          this._renderTabContent(),
                        )
                      : b.a.createElement(Kn.a, {
                          accessibilityLabel: ia,
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
      v()(_a, 'contextType', _.a), v()(_a, 'defaultProps', { recentSearches: [], searchConversationIds: [], query: '' })
      var Ea = et.a.create(function (e) {
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
        Oa = Object(Yr.a)(fr(_a)),
        Sa = n('dwig'),
        Ca = n('QB0K'),
        wa = n('Avzu'),
        ka = n('FRNI')
      function Ra(e) {
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
            var a = m()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var Ia = I.a.h845f281,
        Pa = I.a.f325afc3,
        xa = (function (e) {
          u()(n, e)
          var t = Ra(n)
          function n() {
            return a()(this, n), t.apply(this, arguments)
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  return b.a.createElement(Ca.a, {
                    accessibilityLabel: Ia,
                    href: '/messages/compose',
                    icon: b.a.createElement(wa.a, null),
                    label: Ia,
                    scribeComponent: 'floating_dm_button',
                    shortLabel: Pa,
                    testID: ka.a.message,
                  })
                },
              },
            ]),
            n
          )
        })(b.a.PureComponent),
        Ta = n('tI3i'),
        Aa = n.n(Ta),
        Ma = n('883S'),
        ja = n('yoO3'),
        Da = n('GSsg'),
        La = n('2g+p'),
        Fa = n('mw9i'),
        Ba = n('BcsE'),
        Na = n('+d3d')
      function Ua(e) {
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
            var a = m()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var Ha = function (e) {
          return e
        },
        Ka = I.a.a66ac766,
        Va = I.a.fe61929d,
        Wa = I.a.a846382a,
        za = (function (e) {
          u()(n, e)
          var t = Ua(n)
          function n(e, r) {
            var i
            return (
              a()(this, n),
              (i = t.call(this, e, r)),
              v()(c()(i), 'state', { showSearchView: !1, searchQuery: '' }),
              v()(
                c()(i),
                '_enablePinnedInbox',
                i.context.featureSwitches.isTrue('dm_conversation_labels_pinned_enabled') &&
                  i.context.featureSwitches.isTrue('direct_messages_incremental_holdback_2022h1'),
              ),
              v()(
                c()(i),
                '_messageSearchEnabled',
                i.context.featureSwitches.isTrue('dm_inbox_search_message_results_enabled'),
              ),
              v()(
                c()(i),
                '_modularSearchEnabled',
                i.context.featureSwitches.isTrue('dm_inbox_search_modular_results_enabled'),
              ),
              v()(c()(i), '_render', function () {
                var e = i.props.withPinnedInbox,
                  t = i.state.showSearchView,
                  n = i._enablePinnedInbox && e ? i._renderPinnedInbox : i._renderInbox
                return t ? i._renderFocusedSearch() : n()
              }),
              v()(c()(i), '_renderFocusedSearch', function () {
                var e = i.props,
                  t = e.accessibilityTitle,
                  n = e.analytics,
                  r = e.conversationIds,
                  a = i.state.searchQuery
                return b.a.createElement(Oa, {
                  accessibilityTitle: t,
                  analytics: n,
                  conversationIds: r,
                  hideRecentSearches: i._hideRecentSearches,
                  onQueryChange: i._handleQueryChange,
                  query: a,
                  renderInboxItem: i._renderInboxItem,
                })
              }),
              v()(c()(i), '_renderInbox', function () {
                var e = i.props,
                  t = e.accessibilityTitle,
                  n = e.conversationIds,
                  r = e.footer,
                  a = e.isDrawer,
                  o = e.isRefreshing,
                  s = e.renderEmptyDMInbox,
                  c = e.virtualScrollerCacheKey
                return b.a.createElement(
                  Gr.a,
                  { isRefreshing: o, onRefresh: i._handlePullToRefresh },
                  c && n
                    ? b.a.createElement(ln.a, {
                        accessibilityRole: 'tablist',
                        accessibilityTitle: t,
                        anchoring: cn,
                        assumedItemHeight: 100,
                        cacheKey: c,
                        footer: r,
                        header: i._renderHeader(),
                        identityFunction: Ha,
                        items: n,
                        noItemsRenderer: s,
                        onNearEnd: i._handleNearEnd,
                        renderer: i._renderInboxItem({ conversationIds: n }),
                        withKeyboardShortcuts: !a,
                        withoutHeadroom: !0,
                      })
                    : null,
                )
              }),
              v()(c()(i), '_handleNearEnd', function () {
                i._handleHistoryRequest()
              }),
              v()(c()(i), '_handleQueryChange', function (e) {
                i.setState({ searchQuery: e })
              }),
              v()(c()(i), '_handleSearchChange', function (e) {
                e.currentTarget.value
                i.state.showSearchView || i.setState({ showSearchView: !0 })
              }),
              v()(c()(i), '_handleSearchClick', function () {
                i.props.analytics.scribe({ component: 'search', action: 'click' }), i.setState({ showSearchView: !0 })
              }),
              v()(c()(i), '_hideRecentSearches', function () {
                i.setState({ showSearchView: !1, searchQuery: '' })
              }),
              v()(c()(i), '_renderInboxItem', function (e) {
                var t = e.conversationIds,
                  n = e.isMessageItem,
                  r = void 0 !== n && n,
                  a = e.messageIds,
                  o = e.togglePinState
                return function (e, n) {
                  var s = i.context.loggedInUserId,
                    c = i.props.location,
                    l = i.state.searchQuery,
                    u = r ? (a || []).indexOf(e) : -1,
                    d = -1 !== u && null != t && t.length ? t[u] : null,
                    p = d ? e : '',
                    f = d || e,
                    m = { pathname: '/messages/'.concat(f), state: null == c ? void 0 : c.state },
                    h = f && null != t && t.length ? t.indexOf(f) : null,
                    v = Object(Ba.a)(h) ? h + 1 : 0
                  return (
                    Aa()(!!s, 'loggedInUserId must be defined'),
                    n && n(!0),
                    b.a.createElement(g.a, { exact: !1, path: m.pathname }, function (e) {
                      return b.a.createElement(Ht, {
                        conversationId: f,
                        inboxType: i.props.inboxType,
                        isActive: e,
                        isMessageItem: r,
                        key: f,
                        link: m,
                        messageId: p,
                        onClick: i._handleConversationClick,
                        perspective: s,
                        position: v,
                        searchQuery: l,
                        togglePinState: o,
                      })
                    })
                  )
                }
              }),
              v()(c()(i), '_renderPinnedInbox', function () {
                var e = i.props,
                  t = e.accessibilityTitle,
                  n = e.conversationIds,
                  r = e.footer,
                  a = e.isDrawer,
                  o = e.renderEmptyDMInbox,
                  s = e.virtualScrollerCacheKey
                return n.length
                  ? b.a.createElement(Fn, {
                      accessibilityTitle: t,
                      cacheKey: s,
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
              v()(c()(i), '_handleFetchInitialWrapper', function () {
                i._handleFetchInitial()
              }),
              v()(c()(i), '_handleFetchInitial', function () {
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
              v()(c()(i), '_handleConversationClick', function (e, t, n, r) {
                var a = i.props,
                  o = a.analytics,
                  s = a.customCellClick,
                  c = null != n && n.participants ? Object.keys(n.participants).length : 0,
                  l = (null == n ? void 0 : n.type) === M.CONVERSATION_TYPE.GROUP
                o.scribe({
                  element: 'thread',
                  action: 'click',
                  data: {
                    event_value: i.state.searchQuery.length,
                    conversation_id: t,
                    conversation_participant_count: c,
                    conversation_type: l ? rt.g.GROUP : rt.g.ONE_TO_ONE,
                    position: r,
                  },
                }),
                  s && s(e, t)
              }),
              v()(c()(i), '_handleEmptyDMInboxImpression', function () {
                i.props.analytics.scribe({ component: 'empty_message', action: 'impression' })
              }),
              v()(c()(i), '_handlePullToRefresh', function () {
                var e = i.props,
                  t = e.createLocalApiErrorHandler
                ;(0, e.fetchInbox)().then(i._updateLastSeenEventId, t())
              }),
              v()(c()(i), '_updateLastSeenEventIdIfActive', function () {
                if ('background' !== La.a.currentState) return i._updateLastSeenEventId()
              }),
              v()(c()(i), '_renderHeader', function () {
                var e =
                    i.context.featureSwitches.isTrue('dm_vdl_enabled') &&
                    i.context.featureSwitches.isTrue('dm_vdl_inbox_p0_enabled'),
                  t = i.props,
                  n = t.renderStickyContent,
                  r = t.withDmSearch,
                  a = [Ga.searchInput, e ? void 0 : Ga.searchInputBorder]
                return b.a.createElement(
                  b.a.Fragment,
                  null,
                  r
                    ? b.a.createElement(
                        De.a,
                        { onClick: i._handleSearchClick, style: a },
                        b.a.createElement(Qr.a, {
                          Icon: Ir.a,
                          autoComplete: 'off',
                          isCompact: !0,
                          onChange: i._handleSearchChange,
                          placeholder: i._messageSearchEnabled ? Wa : Va,
                          withClearButton: !0,
                        }),
                      )
                    : null,
                  n ? n() : null,
                )
              }),
              v()(c()(i), '_updateLastSeenEventId', function () {
                var e = i.props,
                  t = e.createLocalApiErrorHandler
                return (0, e.updateLastSeenEventId)().catch(t())
              }),
              (i._fab = b.a.createElement(xa, null)),
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
                    (this._updatePolling = new Da.a(
                      function () {
                        a().then(e._updateLastSeenEventIdIfActive, n(Ma.a))
                      },
                      { interval: 8e3 },
                    )),
                    (this._handleHistoryRequest = Object(Na.a)(function () {
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
                    ja.a,
                    null,
                    b.a.createElement(A, null),
                    b.a.createElement(
                      Sa.a,
                      { component: Fa.a, fab: this._fab, style: Ga.root },
                      b.a.createElement(Kn.a, {
                        accessibilityLabel: Ka,
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
      v()(za, 'contextType', _.a),
        v()(za, 'defaultProps', {
          conversationIds: [],
          inboxType: nt.d.PRIMARY,
          isDrawer: !1,
          withDmSearch: !1,
          withPinnedInbox: !1,
        })
      var Ga = et.a.create(function (e) {
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
      t.a = Object(Yr.a)(L(za))
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
        s = n('VrFO'),
        c = n.n(s),
        l = n('Y9Ll'),
        u = n.n(l),
        d = n('1Pcy'),
        p = n.n(d),
        f = n('5Yy7'),
        m = n.n(f),
        h = n('N+ot'),
        v = n.n(h),
        y = n('AuHH'),
        b = n.n(y),
        g = n('KEM+'),
        _ = n.n(g),
        E = (n('2G9S'), n('ERkP')),
        O = n.n(E),
        S = n('nT9l'),
        C = n('3XMw'),
        w = n.n(C),
        k = 'image',
        R = n('TIdA'),
        I = n('a6qo')
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
          m()(n, e)
          var t = P(n)
          function n() {
            var e
            c()(this, n)
            for (var r = arguments.length, i = new Array(r), s = 0; s < r; s++) i[s] = arguments[s]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              _()(p()(e), '_renderContent', function (t) {
                var n = t.resourceSelectionHandler,
                  r = t.useMinimumData,
                  i = e.props,
                  s = i.accessibilityLabel,
                  c = (i.hideAcceptOverlay, i.shouldShowAltLabel),
                  l = o()(i, ['accessibilityLabel', 'hideAcceptOverlay', 'shouldShowAltLabel'])
                return O.a.createElement(
                  O.a.Fragment,
                  null,
                  O.a.createElement(
                    R.a,
                    a()({}, l, { accessibilityLabel: s, onVariantSelection: n, previewMode: r, testID: k }),
                  ),
                  c ? O.a.createElement(I.a, { align: 'left', altLabel: s }) : null,
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
    sl05: function (e, t, n) {
      'use strict'
      var r = n('rHpw')
      t.a = r.a.create(function (e) {
        return {
          root: { flexGrow: 1 },
          activity: { flexBasis: e.spacesPx.space1, flexGrow: 1, height: '100%' },
          kaiOSFix: { paddingBottom: e.spaces.space20 },
          dragDrop: { flexGrow: 1 },
          scrollView: { flexGrow: 1 },
        }
      })
    },
    tZH3: function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        a = n.n(r),
        i = n('3XMw'),
        o = n.n(i),
        s = n('MWbm'),
        c = n('CKsB'),
        l = n('/yvb'),
        u = n('rHpw'),
        d = n('hiGS'),
        p = n('pu5c'),
        f = n('zIWA'),
        m = o.a.fcd4d489,
        h = o.a.gbed8594,
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
            k = e.showCancel,
            R = e.showDelete,
            I = a.a.useCallback(
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
            s.a,
            { accessibilityRole: 'dialog', style: n ? C.flatCorners : C.roundCorners },
            R
              ? a.a.createElement(c.a, {
                  Icon: d.a,
                  actionSubText: b,
                  actionText: r ? v : y,
                  onClick: x,
                  textColor: 'red500',
                })
              : null,
            w
              ? a.a.createElement(c.a, { Icon: p.a, actionSubText: h, actionText: m({ screenName: S }), onClick: P })
              : null,
            a.a.createElement(c.a, {
              Icon: f.a,
              actionSubText: E,
              actionText: r ? g : _({ screenName: S }),
              onClick: I,
            }),
            k ? a.a.createElement(l.a, { onPress: t, style: C.cancelButton, type: 'primaryOutlined' }, O) : null,
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
        s = n('Y9Ll'),
        c = n.n(s),
        l = n('1Pcy'),
        u = n.n(l),
        d = n('5Yy7'),
        p = n.n(d),
        f = n('N+ot'),
        m = n.n(f),
        h = n('AuHH'),
        v = n.n(h),
        y = n('KEM+'),
        b = n.n(y),
        g = (n('uFXj'), n('z84I'), n('tVqn'), n('ERkP')),
        _ = n.n(g),
        E = n('1YZw'),
        O = n('zh9S'),
        S = n('P1r1'),
        C = n('AspN'),
        w = n('rxPX'),
        k = Object(w.a)()
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
        R = n('wpu3'),
        I = n('cOB2'),
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
            s = e.style,
            c = _.a.useContext(I.a)
          return o
            ? _.a.createElement(
                _.a.Fragment,
                null,
                _.a.createElement(P.a, { accessibilityLabel: t, accessibilityRole: n, onLayout: i, style: s }, r),
              )
            : _.a.createElement(
                x.a.BottomComposer,
                null,
                _.a.createElement(T.a, { id: 'DMComposerWrapper' }, function (e, o) {
                  return _.a.createElement(
                    P.a,
                    a()({ ref: e() }, o({ accessibilityLabel: t, accessibilityRole: n, onLayout: i, style: s })),
                    r,
                    _.a.createElement(P.a, { style: !1 === c.keyboardVisible && j.offsetBottom }),
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
          return m()(this, n)
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
            c()(n, [
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
                      style: [U.root, n && U.isWide, !n && U.isNarrow],
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
        U = A.a.create(function (e) {
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
        H = N,
        K = n('cHvH'),
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
          return m()(this, n)
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
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props.quickReplyOptions.options,
                    n = 1 === t.length
                  return _.a.createElement(K.a, null, function (r) {
                    var a = r.windowWidth,
                      i = D.a.isTwoColumnLayout(a),
                      o = [i && G.isWide, i && n && G.oneButtonOnly, !i && G.isNarrow]
                    return _.a.createElement(
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
                  return _.a.createElement(H, {
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
        q = z,
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
          return m()(this, n)
        }
      }
      var se = [
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
            o()(this, n)
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i]
            return (e = t.call.apply(t, [this].concat(a))), b()(u()(e), 'state', { currentStepIndex: -1 }), e
          }
          return (
            c()(n, [
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
                    t = e >= 0 && e < se.length ? se[e].progress : 0
                  return _.a.createElement(ie.a, { progress: t })
                },
              },
              {
                key: '_scheduleNextStep',
                value: function (e) {
                  var t = this
                  e < se.length &&
                    (this._currentTimeoutId = setTimeout(function () {
                      ;(t._currentTimeoutId = void 0), t.setState({ currentStepIndex: e }), t._scheduleNextStep(e + 1)
                    }, se[e].waitMs))
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
          return m()(this, n)
        }
      }
      var ue = (function (e) {
          p()(n, e)
          var t = le(n)
          function n() {
            return o()(this, n), t.apply(this, arguments)
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.isSending,
                    n = e.isUploading,
                    r = e.progress
                  return t && !n
                    ? _.a.createElement(ce, null)
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
        me = 'dmComposerTextInput',
        he = 'dmComposerSendButton',
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
      function Re(e) {
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
      var Ie = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(we.a)(
          'svg',
          Re(
            Re({}, e),
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
      Ie.metadata = { width: 24, height: 24 }
      var Pe = Ie
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
          return m()(this, n)
        }
      }
      var Be = $.a.ee230734,
        Ne = $.a.ca0ce0e4,
        Ue = $.a.cdcebd22,
        He = $.a.ic8c615d,
        Ke = $.a.a04077c4,
        Ve = function (e) {
          return !(!e || !e.media)
        },
        We = Object(R.b)({ maxNumberOfPhotos: 1 }),
        ze = (function (e) {
          p()(n, e)
          var t = Fe(n)
          function n(e, r) {
            var i, s, c
            o()(this, n),
              (c = t.call(this, e, r)),
              b()(u()(c), '_handleLayout', function (e) {
                var t = c.props.onHeightChange,
                  n = c.state.mediaButtonsCollapsible,
                  r = e.nativeEvent.layout
                r &&
                  (Object(pe.a)() || (t && t(r.height)),
                  r.width <= A.a.theme.breakpoints.small && !n
                    ? c.setState({ mediaButtonsCollapsible: !0 })
                    : r.width > A.a.theme.breakpoints.small && n && c.setState({ mediaButtonsCollapsible: !1 }))
              }),
              b()(u()(c), '_renderQuickReplyPicker', function () {
                var e = c.props.quickReplyOptions,
                  t = c.state.isQuickReplyOpen
                return e && t
                  ? _.a.createElement(q, { onOptionChoose: c._handleQROptionSelection, quickReplyOptions: e })
                  : null
              }),
              b()(u()(c), '_renderComposeBox', function () {
                return _.a.createElement(P.a, { style: Ge.composeBoxContainer }, c._renderMainContent())
              }),
              b()(u()(c), '_renderMainContent', function () {
                var e = c.props,
                  t = e.richTextInputContext,
                  n = e.typeaheadWrapper,
                  r = c.state.value,
                  a = n
                return a
                  ? _.a.createElement(
                      a,
                      {
                        contextText: r,
                        isInline: !0,
                        onTextUpdated: t ? c._handleRichTextChange : c._handlePlainTextChange,
                        onTypeaheadStateChange: c._handleTypeaheadStateChange,
                        source: ve.d.ComposeMessage,
                      },
                      c._renderFieldTextInput,
                    )
                  : c._renderFieldTextInput()
              }),
              b()(u()(c), '_renderFieldTextInput', function (e) {
                var t = c.props,
                  n = t.disabled,
                  r = t.placeholderText,
                  i = t.richTextInputContext,
                  o = ye.b.isKaiOS() ? Ue : r || Ne,
                  s = c.state,
                  l = s.editorState,
                  u = s.mediaButtonsCollapsible,
                  d = s.value,
                  p = !!i,
                  f = i ? { editorState: l, element: i.element } : void 0,
                  m = i
                    ? {
                        onChange: c._getHandleRichTextChange(e),
                        richTextInputContext: { editorState: l, element: i.element },
                      }
                    : { onChange: c._getHandlePlainTextChange(e), richTextInputContext: void 0 }
                return _.a.createElement(
                  be.a,
                  a()(
                    {
                      contentAbove: c._renderAttachments(),
                      editable: !n,
                      emojiPickerButton: c._renderEmojiPicker(),
                      handleReturn: p ? c._handleReturn : void 0,
                      isCompact: !0,
                      leftAligned: !0,
                      maxNumberOfLines: p ? 8 : 4,
                      multiline: !0,
                      numberOfLines: 1,
                      onBlur: c._handleOnBlur,
                      onFilesAdded: c._handleAddMediaFiles,
                      onFocus: c._handleTextInputFocus,
                      onKeyPress: p ? void 0 : c._handleReturn,
                      placeholder: o,
                      ref: c._setTextInputRef,
                      richTextInputContext: n ? void 0 : f,
                      style: Ge.composeInput,
                      testID: me,
                      useCacheForDOMMeasurements: !c._isSendDisabled() && !u,
                      value: d,
                    },
                    m,
                  ),
                )
              }),
              b()(
                u()(c),
                '_getHandleRichTextChange',
                Object(ae.a)(function (e) {
                  return function (t) {
                    null == e || e(t), c._handleRichTextChange(t)
                  }
                }),
              ),
              b()(
                u()(c),
                '_getHandlePlainTextChange',
                Object(ae.a)(function (e) {
                  return function (t) {
                    null == e || e(t), c._handlePlainTextChange(t)
                  }
                }),
              ),
              b()(u()(c), '_handleTypeaheadStateChange', function (e) {
                c.setState({ isTypeaheadActive: e })
              }),
              b()(u()(c), '_renderAttachments', function () {
                var e = c.props,
                  t = e.attachment,
                  n = e.conversationId,
                  r = e.isCardPreviewTombstoned,
                  a = e.isShareViaDM,
                  i = e.isUploading,
                  o = c.state.value,
                  s =
                    (t &&
                      ((t.media && t.media.mediaFile) || (t.provider && t.media && t.media.externalMediaDetails))) ||
                    {},
                  l = s.height,
                  u = s.width,
                  d = null == t ? void 0 : t.media,
                  p = null == d ? void 0 : d.mediaMetadata,
                  f = null == p ? void 0 : p.altText,
                  m = null == p ? void 0 : p.defaultAltText,
                  h = Object(Se.b)(o)
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
                              accessibilityLabel: f || m,
                              mediaItem: d,
                              onClick: c._canEditImage ? c._handleClickMediaDetail : void 0,
                              onEdit: c._canEditImage || c._canEditVideo ? c._handleClickMediaDetail : void 0,
                              onRemove: c._handleRemoveMedia(d.id),
                              resizeIfNeeded: 'width',
                              style: Ge.mediaPreview,
                              withAltTextLabel: !!f,
                              withCloseButton: !i,
                              withEditButton: (c._canEditImage || c._canEditVideo) && !i,
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
                    : h && !a
                    ? _.a.createElement(Se.a, {
                        conversationId: n,
                        isCardPreviewTombstoned: r,
                        style: Ge.cardPreviewContainer,
                        urls: h,
                      })
                    : null,
                )
              }),
              b()(u()(c), '_renderEmojiPicker', function () {
                return c.props.withEmojiPicker && ye.b.isDesktopOS()
                  ? _.a.createElement(Y.a, {
                      disabled: c.props.disabled,
                      onEmojiSelect: c._handleEmojiSelect,
                      onPress: c._handleTextInputFocus,
                      size: 'small',
                      textInputRef: c._textInput || void 0,
                    })
                  : null
              }),
              b()(u()(c), '_renderPrimaryActionButton', function (e) {
                var t = c.props,
                  n = t.primaryActionIcon,
                  r = t.primaryActionLabel,
                  a = t.quickReplyOptions,
                  i = c._hasMessageText()
                return !a || i || e
                  ? _.a.createElement(
                      _e.a,
                      {
                        accessibilityLabel: r,
                        disabled: c._isSendDisabled(),
                        hoverLabel: { label: r },
                        icon: n || void 0,
                        onPress: c._handlePrimaryAction,
                        size: 'medium',
                        style: Ge.actionButton,
                        testID: he,
                        type: n ? 'brandText' : 'brandFilled',
                      },
                      n ? null : r,
                    )
                  : c._renderQRToggleButton()
              }),
              b()(u()(c), '_renderSecondaryActionButton', function () {
                var e = c.props,
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
                      onPress: c._handleSecondaryAction,
                      style: Ge.actionButton,
                      type: 'primaryOutlined',
                    },
                    c.props.secondaryActionLabel,
                  )
                return i || !t
                  ? o
                  : _.a.createElement(
                      Ee.a,
                      { enableHover: !0, preferredVerticalOrientation: 'up', renderContent: t, withArrow: !0 },
                      o,
                    )
              }),
              b()(u()(c), '_renderQRToggleButton', function () {
                var e = c.state.isQuickReplyOpen
                return _.a.createElement(_e.a, {
                  accessibilityLabel: He,
                  icon: e ? _.a.createElement(Pe, null) : _.a.createElement(Me, null),
                  onPress: c._handleQuickReplyPickerToggle,
                  size: 'medium',
                  style: Ge.actionButton,
                  type: 'brandText',
                })
              }),
              b()(u()(c), '_renderComposer', function () {
                var e = c.props.attachment,
                  t = Ve(e),
                  n = c._renderComposeBox(),
                  r = c._renderPrimaryActionButton(t),
                  a = c._renderSecondaryActionButton()
                return _.a.createElement(
                  P.a,
                  { style: [Ge.composer, t && Ge.composerWithAttachment] },
                  t ? null : c._renderMediaButtons(),
                  n,
                  a,
                  r,
                )
              }),
              b()(u()(c), '_renderMediaButtons', function () {
                var e = c.props,
                  t = e.withGifPicker,
                  n = e.withMediaPicker,
                  r = c.state,
                  a = r.mediaButtonsCollapsed,
                  i = r.mediaButtonsCollapsible && a
                return _.a.createElement(
                  P.a,
                  { style: Ge.uploadButtons },
                  i
                    ? _.a.createElement(_e.a, {
                        accessibilityLabel: Be,
                        icon: _.a.createElement(je.a, null),
                        onMouseDown: c._handleShowMediaControlsMouseDown,
                        type: 'brandText',
                      })
                    : null,
                  n && !i ? c._renderMediaPicker() : null,
                  t && !i ? c._renderGifButton() : null,
                )
              }),
              b()(u()(c), '_handleShowMediaControlsMouseDown', function () {
                var e = c.props,
                  t = e.scribeAction,
                  n = e.scribeNamespace
                c.setState({ mediaButtonsCollapsed: !1 }),
                  t(Le(Le({}, n), {}, { component: 'dm_composer', element: 'toggle', action: 'expand' }))
              }),
              b()(u()(c), '_handleReturn', function (e) {
                var t = e.nativeEvent,
                  n = t.ctrlKey,
                  r = t.key,
                  a = t.metaKey,
                  i = t.shiftKey,
                  o = 'Enter' === r
                return !c.state.isTypeaheadActive && o && c._keyboardOrMouseDetected && !(i || a || n)
                  ? (e.preventDefault(), c._handlePrimaryAction(e), 'handled')
                  : 'not-handled'
              }),
              b()(u()(c), '_handleClickMediaDetail', function () {
                var e = c.props,
                  t = e.attachment,
                  n = e.conversationId,
                  r = e.history
                if (c._canEditImage || c._canEditVideo) {
                  var a = t && t.media ? t.media.id : 0,
                    i = c._canEditVideo ? 'trimmer' : 'crop'
                  r.push('/messages/compose/media', { mediaId: a, conversationId: n, tab: i })
                }
              }),
              b()(u()(c), '_handleAddMediaFiles', function (e) {
                var t = c.props,
                  n = t.addMedia,
                  r = t.addToast,
                  a = t.dataSaverMode,
                  i = t.onAddMedia,
                  o = t.preUploadMedia,
                  s = t.processMultipleMedia,
                  l = t.removeMedia,
                  u = t.removeMediaUpload
                n(e, { location: re.d.Dm }).then(function (e) {
                  var t = e.map(function (e) {
                    return e.id
                  })
                  c._validateMedia(e)
                    ? (i && i(t),
                      s(e, { onFailure: l }).then(function (e) {
                        a ||
                          o(
                            e.map(function (e) {
                              return e.id
                            }),
                          )
                      }))
                    : (r({ text: Ke }), u(t))
                })
              }),
              b()(u()(c), '_handleEmojiSelect', function (e) {
                var t = c.state.editorState,
                  n = c.props.richTextInputContext
                if (n && t) {
                  var r = n.insertTextAtCursor(t, e.text)
                  c._handleRichTextChange(r)
                }
              }),
              b()(u()(c), '_handleRemoveMedia', function (e) {
                return function () {
                  c.props.removeMedia && c.props.removeMedia(e)
                }
              }),
              b()(u()(c), '_handlePrimaryAction', function (e) {
                if (!c._isSendDisabled()) {
                  var t = c.props.onPrimaryAction
                  c._textInput &&
                    c._textInput.applyFinalValue(function (e) {
                      t({ type: 'richText' }, e)
                    }),
                    c._closeQuickReplyPicker()
                }
              }),
              b()(u()(c), '_handleSecondaryAction', function (e) {
                var t = c.props.onSecondaryAction
                c._textInput &&
                  c._textInput.applyFinalValue(function (e) {
                    t && t({ type: 'richText' }, e)
                  })
              }),
              b()(u()(c), '_handleRichTextChange', function (e) {
                var t = c.props,
                  n = t.onTyping,
                  r = t.richTextInputContext,
                  a = c.state.value,
                  i = e.getCurrentContent().getPlainText(),
                  o = r ? r.convertEmojiToEntities(e) : null
                c.setState({ editorState: o, value: i }), a !== i && (null == n || n())
              }),
              b()(u()(c), '_handlePlainTextChange', function (e) {
                var t = c.props.onTyping,
                  n = c.state.value,
                  r = e.target.value
                c.setState({ value: r }), n !== r && (null == t || t())
              }),
              b()(u()(c), '_handleOnBlur', function () {
                var e = c.props.onBlur,
                  t = c.state.mediaButtonsCollapsible
                e && e(), t && c.setState({ mediaButtonsCollapsed: !1 })
              }),
              b()(u()(c), '_handleTextInputFocus', function () {
                var e = c.props.quickReplyOptions,
                  t = c.state,
                  n = t.isQuickReplyOpen,
                  r = t.mediaButtonsCollapsible
                e && n && c._closeQuickReplyPicker(), r && c.setState({ mediaButtonsCollapsed: !0 })
              }),
              b()(u()(c), '_handleQROptionSelection', function (e, t) {
                var n = c.props,
                  r = n.disabled,
                  a = n.onPrimaryAction
                r || (a({ quickReply: { id: e, selected_id: t.id } }, t.label), c._closeQuickReplyPicker())
              }),
              b()(u()(c), '_handleQuickReplyPickerToggle', function () {
                c.setState({ isQuickReplyOpen: !c.state.isQuickReplyOpen })
              }),
              b()(u()(c), '_validateMedia', function (e) {
                return !Ve(c.props.attachment) && We(e)
              }),
              b()(u()(c), '_detectKeyboardOrMouse', function (e) {
                var t = e.KEYBOARD,
                  n = e.MOUSE
                ;(0, e.registerSome)(
                  function () {
                    c._keyboardOrMouseDetected = !0
                  },
                  [t, n],
                )
              }),
              b()(u()(c), '_isSendDisabled', function () {
                var e = c.props,
                  t = e.attachment,
                  n = e.canSendEmptyMessage,
                  r = e.disabled,
                  a = e.isUploading,
                  i = Ve(t),
                  o = c._hasMessageText() || n,
                  s = !(!t || !t.media) && (t.media.needsProcessing || a)
                return r || (!o && !i) || s || a
              }),
              b()(u()(c), '_hasMessageText', function () {
                return !!(c.state.value || '').trim()
              }),
              b()(u()(c), '_closeQuickReplyPicker', function () {
                c.setState({ isQuickReplyOpen: !1 })
              }),
              b()(u()(c), 'handleAddMediaFiles', function (e) {
                return c._handleAddMediaFiles(e)
              }),
              b()(u()(c), '_setTextInputRef', function (e) {
                c._textInput = e
              })
            var l = e.prefillText,
              d = e.richTextInputContext
            return (
              (c.state = {
                isQuickReplyOpen: !0,
                value: l,
                editorState:
                  null !==
                    (i = null == d || null === (s = d.initEditorState) || void 0 === s ? void 0 : s.call(d, l)) &&
                  void 0 !== i
                    ? i
                    : null,
                isTypeaheadActive: !1,
                mediaButtonsCollapsed: !1,
                mediaButtonsCollapsible: !1,
              }),
              c
            )
          }
          return (
            c()(n, [
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
                    s = i || Ne,
                    c = Object(pe.a)(),
                    l = c && t && (t.dtabAll || t.ttsToken) && !t.hide
                  return _.a.createElement(
                    M,
                    {
                      accessibilityLabel: s,
                      accessibilityRole: 'complementary',
                      onLayout: this._handleLayout,
                      sideNavPresent: c,
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
      b()(ze, 'contextType', Oe.a),
        b()(ze, 'defaultProps', { prefillText: '', withEmojiPicker: !0, withGifPicker: !0, withMediaPicker: !0 })
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
      t.a = k.forwardRef(ze)
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
        s = n('zh9S'),
        c = n('H9MA'),
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
        p = { scribeAction: s.c },
        f = Object(l.g)(d, p),
        m = n('2doW'),
        h = n('UPvq'),
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
            s = Object(g.b)(i),
            c = Object(g.h)(),
            l = c.handleMediaDetailZoomed,
            u = c.handleMediaItemTapped,
            d = c.hideButtons,
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
                    h.a,
                    { backgroundColor: s, hideButtons: d, mediaItem: i, onCloseButtonPress: p },
                    a.a.createElement(m.a, {
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
        s = n('m3Bd'),
        c = n.n(s),
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
        m = n('w6IS'),
        h = n('s1N3'),
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
        return Object(m.a)(
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
            data: _(_({}, c()(n, ['rounded_score', 'src', 'tokens'])), {}, { can_dm: !0 }),
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
          return Object(h.a)(i, function (e) {
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
          s = o
        if (e) {
          var c = Object(v.a)(o, function (e) {
              return e.type === l.a.ONE_TO_ONE
            }),
            d = a()(c, 2),
            y = d[0],
            g = d[1]
          s = y.concat(g)
        }
        return (
          (r = Object(m.a)(
            s.map(function (t) {
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
          Object(h.a)(r, function (e) {
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
        s,
        c,
        l,
        u,
        d,
        p,
        f,
        m,
        h,
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
        k,
        R,
        I,
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
                                  (s = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
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
                                          s,
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
                                                  (m = {
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
                                                              s,
                                                              o,
                                                              (y = {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: 'ApiUser',
                                                                kind: 'LinkedField',
                                                                name: 'legacy',
                                                                plural: !1,
                                                                selections: [
                                                                  h,
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
                                                      s,
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
                                                              s,
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
                                                                  h,
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
                                          (k = {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'is_new_one_to_one_convo',
                                            storageKey: null,
                                          }),
                                          (R = {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'is_spam_hide',
                                            storageKey: null,
                                          }),
                                          (I = {
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
                                          h,
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
                                              s,
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
                                  s,
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: 'DMEventMetadata',
                                    kind: 'LinkedField',
                                    name: 'legacy',
                                    plural: !1,
                                    selections: [
                                      c,
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
                                          s,
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
                                                  m,
                                                  h,
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
                                                              s,
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
                                                      s,
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
                                                            selections: [s, o, _, F],
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
                                          k,
                                          R,
                                          I,
                                          P,
                                          h,
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
                                              s,
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
          return Ue
        }),
        n.d(t, 'styles', function () {
          return He
        })
      n('OZaJ'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('VrFO'),
        a = n.n(r),
        i = n('Y9Ll'),
        o = n.n(i),
        s = n('1Pcy'),
        c = n.n(s),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('N+ot'),
        p = n.n(d),
        f = n('AuHH'),
        m = n.n(f),
        h = n('KEM+'),
        v = n.n(h),
        y = (n('ho0z'), n('z84I'), n('+KXO'), n('ERkP')),
        b = n.n(y),
        g = n('v6aA'),
        _ = n('EbOo'),
        E = n('EPsT'),
        O = (n('WNMA'), n('KqXw'), n('6U7i'), n('M+/F'), n('MMRb')),
        S = n('RqPI'),
        C = n('1YZw'),
        w = n('hqKg'),
        k = n('p9G8'),
        R = n('X/yg'),
        I = n('AQOc'),
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
            return Object(R.g)(n)
          },
          j,
          function (e, t, n, r, a, i, o, s, c) {
            var l = e && e.data,
              u = l && Object(I.b)(l, t, o),
              d = u && Object(k.a)(u, i),
              p = !(!l || !l.notifications_disabled),
              f = !(!l || !l.mention_notifications_disabled),
              m = l && l.mute_expiration_time && Number(l.mute_expiration_time),
              h = u ? Object.keys(u.participants) : [],
              v = h && 1 === h.length && h[0] === i,
              y =
                h &&
                h.filter(function (e) {
                  return e !== i
                }),
              b = v ? h : y.slice(0, 5),
              g = b.length < y.length
            if (!i) throw new Error('logged-in user not found')
            return {
              conversation: u,
              conversationId: n,
              fetchStatus: r,
              groupName: d,
              inboxType: c,
              mentionNotificationsDisabled: f,
              language: a,
              muteExpirationTime: m,
              notificationsDisabled: p,
              perspective: i,
              scribeComponent: s,
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
        U = n('aA19'),
        H = n('pHkl'),
        K = n('v//M'),
        V = n('Gpeq'),
        W = n('XnpN'),
        z = n('3XMw'),
        G = n.n(z),
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
        se = n('rHpw'),
        ce = n('7JQg'),
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
            r = m()(e)
          if (t) {
            var a = m()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var me = G.a.e3e58b6d,
        he = G.a.a9ddbb94,
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
        ke = G.a.hab58673,
        Re = G.a.e3c6e080,
        Ie = {
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
        Ue = (function (e) {
          u()(n, e)
          var t = fe(n)
          function n(e) {
            var r
            return (
              a()(this, n),
              (r = t.call(this, e)),
              v()(c()(r), '_getNameOfGroupOrOneToOneConvo', function () {
                var e = r.props,
                  t = e.conversation,
                  n = e.groupName
                return (null == t ? void 0 : t.type) === B.a.GROUP ? n || '' : r._getNameOfOneToOneConvo()
              }),
              v()(c()(r), '_getScreenNameOfOneToOneConvo', function () {
                var e = r._getSenderOfOneToOneConvo()
                return e ? e.screen_name : ''
              }),
              v()(c()(r), '_getNameOfOneToOneConvo', function () {
                var e = r._getSenderOfOneToOneConvo()
                return e ? e.name : ''
              }),
              v()(c()(r), '_getBlockedOfOneToOneConvo', function () {
                var e = r._getSenderOfOneToOneConvo()
                return e ? e.blocking : null
              }),
              v()(c()(r), '_getSenderOfOneToOneConvo', function () {
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
              v()(c()(r), '_renderContent', function () {
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
              v()(c()(r), '_getItems', function () {
                return Be.map(function (e) {
                  return {
                    text: e.displayText,
                    onClick: function () {
                      return r._handleNotificationsDisabled(e)
                    },
                  }
                })
              }),
              v()(c()(r), '_renderActionMenu', function () {
                return function (e) {
                  return b.a.createElement($.a, { items: r._getItems(), onCloseRequested: e })
                }
              }),
              v()(c()(r), '_handleViewPeople', function () {
                r._scribeAction('view_participants')
              }),
              v()(c()(r), '_handleMuteDMUser', function () {
                var e = r.props,
                  t = e.conversationId,
                  n = e.createLocalApiErrorHandler,
                  a = e.muteDMUser,
                  i = r._getSenderOfOneToOneConvo()
                i && (a(i.id_str, t).catch(n()), r._scribeAction('mute_user'))
              }),
              v()(c()(r), '_handleUnmuteDMUser', function () {
                var e = r.props,
                  t = e.conversationId,
                  n = e.createLocalApiErrorHandler,
                  a = e.unmuteDMUser,
                  i = r._getSenderOfOneToOneConvo()
                i && (a(i.id_str, t).catch(n()), r._scribeAction('unmute_user'))
              }),
              v()(c()(r), '_handleBlockUser', function () {
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
              v()(c()(r), '_handleUnblockUser', function () {
                var e = r._getSenderOfOneToOneConvo(),
                  t = e ? e.id_str : '',
                  n = r.props,
                  a = n.createLocalApiErrorHandler
                ;(0, n.unblock)(t).catch(a(X.a)), r._scribeAction('unblock')
              }),
              v()(c()(r), '_handleReportConversation', function () {
                r._scribeAction('report')
              }),
              v()(c()(r), '_handleFetch', function () {
                var e = r.props,
                  t = e.conversationId,
                  n = e.createLocalApiErrorHandler
                ;(0, e.fetchConversationIfNeeded)({ conversationId: t }).catch(n(Object(N.a)(t)))
              }),
              v()(c()(r), '_handleLeaveConversation', function () {
                var e,
                  t = r.props,
                  n = t.conversation,
                  a = t.conversationId,
                  i = t.createLocalApiErrorHandler,
                  o = t.inboxType,
                  s = t.leaveConversation,
                  c = t.location
                s({ conversationId: a }).catch(i({ showToast: !0 }))
                var l = (null == n ? void 0 : n.type) === B.a.GROUP ? 'leave_group' : 'delete_thread',
                  u = (null == c || null === (e = c.state) || void 0 === e ? void 0 : e.position) || 0,
                  d = null != n && n.participants ? Object.keys(n.participants).length : 0,
                  p = {
                    conversation_type: (null == n ? void 0 : n.type) === B.a.GROUP ? 1 : 0,
                    conversation_id: a,
                    conversation_participant_count: d,
                    position: u,
                    inbox_type: Object(R.h)(o),
                    entry_point: H.b.CONVERSATION_INFO,
                  }
                r._scribeAction(l, p), r._handleConversationClose()
              }),
              v()(c()(r), '_handleNotificationsDisabled', function (e) {
                var t = r.props,
                  n = t.addToast,
                  a = t.conversationId,
                  i = t.disableNotifications,
                  o = r._getNameOfGroupOrOneToOneConvo()
                i({ conversationId: a, duration: e.duration }), n({ text: e.toast({ name: o }) })
              }),
              v()(c()(r), '_handleNotificationsEnabled', function () {
                return function () {
                  var e = r.props,
                    t = e.addToast,
                    n = e.conversationId,
                    a = e.createLocalApiErrorHandler,
                    i = e.enableNotifications,
                    o = r._getNameOfGroupOrOneToOneConvo(),
                    s = Oe({ name: o })
                  i({ conversationId: n }).then(function () {
                    t({ text: s })
                  }, a({ showToast: !0 }))
                }
              }),
              v()(c()(r), '_handleMentionSwitchChanged', function (e) {
                var t = r.props,
                  n = t.addToast,
                  a = t.conversationId,
                  i = t.createLocalApiErrorHandler,
                  o = t.disableMentionNotifications,
                  s = t.enableMentionNotifications
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
                        n({ text: ke })
                      }, i({ showToast: !0 }))
                    : s({ conversationId: a }).then(function () {
                        n({ text: Re })
                      }, i({ showToast: !0 }))
              }),
              v()(c()(r), '_handleConversationClose', function () {
                r._returnToInbox()
              }),
              v()(c()(r), '_returnToInbox', function () {
                var e = r.props,
                  t = e.history,
                  n = e.inboxType
                t.push(Object(R.e)(n))
              }),
              v()(c()(r), '_scribeAction', function (e, t) {
                var n = r.props,
                  a = n.scribeAction,
                  i = n.scribeComponent
                a(pe(pe({}, n.scribeNamespace), {}, { component: i, action: e }), t || r._getScribeData())
              }),
              v()(c()(r), '_getScribeData', function () {
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
                      title: a ? he : me,
                      withBottomTabBar: !1,
                    },
                    b.a.createElement(
                      ee.a,
                      { style: He.root },
                      b.a.createElement(K.a, {
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
                          avatarCell: b.a.createElement(U.a, { conversation: t, perspective: a }),
                          cellStyle: He.groupSectionRight,
                          style: He.groupSection,
                        },
                        b.a.createElement(ne.b, { numberOfLines: 1, weight: 'bold' }, r),
                        o
                          ? b.a.createElement(ne.b, { link: '/messages/'.concat(n, '/group-info'), style: He.edit }, ve)
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
                          { style: He.notificationsToggleContainer },
                          b.a.createElement(ne.b, { color: 'normal' }, a),
                          b.a.createElement(oe.a, { onValueChange: this._handleNotificationsEnabled(), value: n }),
                        ),
                        t
                          ? b.a.createElement(
                              ne.b,
                              { color: 'gray700', size: 'subtext2', style: He.notificationsDescription },
                              this._displayExpirationTime(),
                            )
                          : null,
                      )
                    : b.a.createElement(
                        J.a,
                        { style: He.notificationsToggleContainer },
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
                      { accessibilityRole: 'label', style: He.notificationsToggleContainer },
                      b.a.createElement(ne.b, { color: 'normal' }, Ce),
                      b.a.createElement(oe.a, { onValueChange: this._handleMentionSwitchChanged, value: e }),
                    ),
                    b.a.createElement(
                      ne.b,
                      { color: 'gray700', size: 'subtext2', style: He.notificationsDescription },
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
                      Object(V.a)(t || 'en'),
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
        He = se.a.create(function (e) {
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
      t.default = Object(ce.c)(Ne)(F(Ue))
    },
    zQEV: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return f
      }),
        n.d(t, 'a', function () {
          return h
        })
      n('z84I'), n('ho0z')
      var r = n('ERkP'),
        a = n.n(r),
        i = n('t62R'),
        o = n('aWyx'),
        s = n('3XMw'),
        c = n.n(s),
        l = c.a.c1d4ac83,
        u = c.a.abc7b032,
        d = c.a.i263b293,
        p = function (e) {
          var t = e.children,
            n = e.conversationId
          return a.a.createElement(i.b, { link: '/messages/'.concat(n, '/participants') }, t)
        },
        f = function (e, t) {
          return e >= 2
            ? a.a.createElement(
                c.a.I18NFormatMessage,
                { $i18n: 'e3534476' },
                a.a.createElement(p, { conversationId: t }, c.a.d1242bcc({ count: e })),
              )
            : a.a.createElement(c.a.I18NFormatMessage, { $i18n: 'b6656850', count: e })
        },
        m = function (e) {
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
        h = function (e, t, n, r) {
          var s,
            p = n === e.by_user_id
          switch (t) {
            case o.b.CONVERSATION_AVATAR_UPDATE:
              return (s = e.by_user_id && r[e.by_user_id] && r[e.by_user_id].name)
                ? p
                  ? l
                  : (function (e) {
                      return a.a.createElement(
                        c.a.I18NFormatMessage,
                        { $i18n: 'bff29c94' },
                        a.a.createElement(i.b, null, e),
                      )
                    })(s)
                : u
            case o.b.CONVERSATION_NAME_UPDATE:
              var f = a.a.createElement(i.b, null, e.conversation_name)
              return (s = e.by_user_id && r[e.by_user_id] && r[e.by_user_id].name)
                ? p
                  ? (function (e) {
                      return a.a.createElement(c.a.I18NFormatMessage, { $i18n: 'b16e4d45' }, e)
                    })(f)
                  : (function (e, t) {
                      return a.a.createElement(
                        c.a.I18NFormatMessage,
                        { $i18n: 'c5760698' },
                        a.a.createElement(i.b, null, e),
                        t,
                      )
                    })(s, f)
                : (function (e) {
                    return a.a.createElement(c.a.I18NFormatMessage, { $i18n: 'a72730a0' }, e)
                  })(f)
            case o.b.JOIN_CONVERSATION:
              return (s = e.sender_id && r[e.sender_id] && r[e.sender_id].name)
                ? (function (e) {
                    return a.a.createElement(
                      c.a.I18NFormatMessage,
                      { $i18n: 'fa95b019' },
                      a.a.createElement(i.b, null, e),
                    )
                  })(s)
                : d
            case o.b.PARTICIPANTS_LEAVE:
              return (function (e) {
                return a.a.createElement(c.a.I18NFormatMessage, { $i18n: 'fc10875e' }, e)
              })(a.a.createElement(m, { entry: e, users: r }))
            case o.b.PARTICIPANTS_JOIN:
              return (function (e, t) {
                return e
                  ? a.a.createElement(c.a.I18NFormatMessage, { $i18n: 'a4bc88c2' }, a.a.createElement(i.b, null, e), t)
                  : a.a.createElement(c.a.I18NFormatMessage, { $i18n: 'bfdff0c3' }, t)
              })(
                (s = e.sender_id && r[e.sender_id] && r[e.sender_id].name),
                a.a.createElement(m, { entry: e, users: r }),
              )
            default:
              return ''
          }
        }
    },
  },
])
//# sourceMappingURL=WIPED
