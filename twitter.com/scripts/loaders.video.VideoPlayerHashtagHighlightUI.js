;(window.webpackJsonp = window.webpackJsonp || []).push([
  [188],
  {
    '0nHQ': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return C
      })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('1Pcy'),
        u = n.n(c),
        l = n('5Yy7'),
        s = n.n(l),
        f = n('N+ot'),
        p = n.n(f),
        d = n('AuHH'),
        y = n.n(d),
        h = n('KEM+'),
        v = n.n(h),
        E = (n('2G9S'), n('ERkP')),
        _ = n('Yyzf'),
        R = n('3XMw'),
        b = n.n(R),
        m = b.a.c1658fc6,
        O = {
          BROADCAST_REQUEST_ERROR: m,
          BROADCAST_ENDED_NO_REPLAY: b.a.ce871584,
          BROADCAST_NOT_FOUND: b.a.c101eb95,
          CONFIG_USER_DATA_NETWORK_ERROR: m,
          CONFIG_NETWORK_ERROR: m,
          DMCA_TAKEDOWN_ERROR: b.a.gb24a513,
          EUROPEAN_COPYRIGHT_VIOLATION: b.a.hcaf3e62,
          LIVE_PARSE_ERROR: m,
          LIVE_STREAM_ACQUISITION_MISSING_CONTENT_ID: m,
          LIVE_STREAM_ACQUISITION_NETWORK_ERROR: m,
          LIVE_VIDEO_GEOBLOCK_ERROR: b.a.if05c037,
          LIVE_VIDEO_COPYRIGHT_VIOLATION_ERROR: b.a.d420171a,
          LIVE_VIDEO_GEOLOCATION_PROMPT: b.a.b1eb72f9,
          MEDIA_NOT_SUPPORTED: b.a.c057680b,
          MEDIA_SRC_INVALID_ERROR: m,
          MEDIA_ABORTED: m,
          MEDIA_NETWORK_ERROR: m,
          MEDIA_DECODE_ERROR: m,
          MEDIA_GEOBLOCK_ERROR: b.a.i5dfae6e,
          MEDIA_UNKNOWN_CODE_ERROR: m,
          ORIGINAL_CONTEXT_DELETED: b.a.c2388276,
          UNSUPPORTED_TYPE: m,
          VMAP_NETWORK_ERROR: m,
          VMAP_PARSE_ERROR: m,
        }
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
            r = y()(e)
          if (t) {
            var a = y()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var C = (function (e) {
        s()(n, e)
        var t = g(n)
        function n() {
          var e
          a()(this, n)
          for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
          return (
            (e = t.call.apply(t, [this].concat(o))),
            v()(u()(e), '_handleReload', function () {
              var t = e.props,
                n = t.playerApi,
                r = t.playerState
              if (r && r.errorInfo && r.errorInfo.canRetry)
                return function () {
                  n && n.reload()
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
                  t = e.displayBackgroundImage,
                  n = void 0 !== t && t,
                  r = e.imageSrc,
                  a = e.playerApi,
                  o = e.playerState
                return a && o
                  ? E.createElement(_.a, {
                      displayBackgroundImage: n,
                      errorMessage: this._buildMessage(),
                      iconPlayError: 'BROADCAST_NOT_FOUND' === o.error,
                      imageSrc: r || o.posterImage,
                      onReloadPress: this._handleReload(),
                    })
                  : null
              },
            },
            {
              key: '_buildMessage',
              value: function () {
                if (this.props.playerState) {
                  var e = this.props.playerState,
                    t = e.error,
                    n = e.errorData
                  if ('LIVE_VIDEO_COPYRIGHT_VIOLATION_ERROR' === t || 'EUROPEAN_COPYRIGHT_VIOLATION' === t) {
                    var r = (n || {}).copyrightHolder
                    return r ? O[t]({ holder: r }) : m
                  }
                  return (t && O[t]) || m
                }
              },
            },
          ]),
          n
        )
      })(E.Component)
    },
    KoZZ: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'default', function () {
          return _
        })
      var r = n('ERkP'),
        a = n('t62R'),
        o = n('aoyV'),
        i = n('kCRK'),
        c = n('fZNH'),
        u = n('0nHQ'),
        l = n('USG3'),
        s = n('Q0n6'),
        f = n('n8uP'),
        p = n('Wms4'),
        d = n('Ur4q'),
        y = n('oH2E'),
        h = n('rHpw'),
        v = n('zCLo'),
        E = n('MWbm')
      function _(e) {
        var t,
          n = e.hashtagHighlightProps,
          h = e.playerApi,
          _ = e.playerDisplayOptions,
          b = e.playerState,
          m = e.poster,
          O = e.useKeyboardShortcuts
        if (!h || !b) return null
        var g = b && Object(s.e)(b)
        if (!g || g.contentType !== i.a.GIF || !n) return null
        if (!!b.error)
          return r.createElement(l.a, { show: !0 }, r.createElement(u.a, { imageSrc: m, playerApi: h, playerState: b }))
        var C = !(null != _ && _.hidePosterImage),
          S = 'PLAY_REQUESTED' !== (null === (t = b.controls) || void 0 === t ? void 0 : t.playState),
          P = b.tracksFinished
        return r.createElement(
          v.a,
          { enabled: !!O, playerApi: h, playerState: b },
          r.createElement(
            c.a,
            { playerState: b },
            r.createElement(
              r.Fragment,
              null,
              r.createElement(d.a, { playerApi: h, playerDisplayOptions: _, playerState: b }),
              C && !P && r.createElement(y.a, { imageSrc: m, playerApi: h, playerState: b, withPlayButton: S }),
              r.createElement(o.a, { playerState: b }),
              r.createElement(
                E.a,
                { style: R.root },
                r.createElement(
                  E.a,
                  { style: R.gifLabel },
                  r.createElement(p.a, null, r.createElement(a.b, { weight: 'bold' }, 'GIF')),
                ),
                r.createElement(E.a, { style: R.hashtagHighlight }, r.createElement(f.a, n)),
                r.createElement(
                  p.a,
                  { style: [R.gifLabel, R.invisibleBadge] },
                  r.createElement(a.b, { weight: 'bold' }, 'GIF'),
                ),
              ),
            ),
          ),
        )
      }
      var R = h.a.create(function (e) {
        return {
          root: {
            position: 'absolute',
            bottom: e.spaces.space12,
            flexDirection: 'row',
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            alignItems: 'flex-end',
          },
          gifLabel: { paddingHorizontal: e.spaces.space12, maxWidth: '20%' },
          hashtagHighlight: { display: 'flex', maxWidth: '80%' },
          invisibleBadge: { visibility: 'hidden' },
        }
      })
    },
    Q0n6: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return R
      }),
        n.d(t, 'l', function () {
          return b
        }),
        n.d(t, 'g', function () {
          return O
        }),
        n.d(t, 'h', function () {
          return g
        }),
        n.d(t, 'd', function () {
          return C
        }),
        n.d(t, 'f', function () {
          return S
        }),
        n.d(t, 'j', function () {
          return P
        }),
        n.d(t, 'e', function () {
          return T
        }),
        n.d(t, 'k', function () {
          return M
        }),
        n.d(t, 'i', function () {
          return A
        }),
        n.d(t, 'c', function () {
          return I
        }),
        n.d(t, 'b', function () {
          return k
        })
      n('7xRU'), n('hBpG'), n('2G9S')
      var r = n('kCRK'),
        a = n('3XMw'),
        o = n.n(a),
        i = o.a.d58baa7e,
        c = o.a.i3b7a017,
        u = o.a.ie5d110e,
        l = o.a.df5f11b3,
        s = o.a.a7cd5cf4,
        f = o.a.b6eb8f69,
        p = o.a.dcc2b9b2,
        d = o.a.hf4ffd4d,
        y = o.a.f6e90cd6,
        h = o.a.e7d191ec,
        v = o.a.h1888a33,
        E = o.a.c58b2ab7,
        _ = function (e) {
          return 'number' == typeof e ? i(e) : e
        },
        R = function (e) {
          var t = e.viewCount,
            n = e.viewerCount
          return t || 0 === t ? E({ viewCount: _(t) }) : n || 0 === n ? v({ viewerCount: _(n) }) : null
        },
        b = function (e) {
          return e
            ? (function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                  t = e.durationSeconds,
                  n = e.isBroadcast,
                  r = e.isLive,
                  a = e.timecode,
                  o = e.videoTrack,
                  i = [],
                  c = n || r ? f : s,
                  u = r ? d : p
                if ((i.push(u({ locVideoType: c })), 'number' == typeof t && t && !r)) {
                  var l = m(t),
                    v = l.hoursWord,
                    E = l.minutesWord,
                    _ = l.secondsWord
                  i.push(y({ hoursWord: v, minutesWord: E, secondsWord: _ }))
                }
                if ('number' == typeof a && a) {
                  var b = m(a),
                    O = b.hoursWord,
                    g = b.minutesWord,
                    C = b.secondsWord
                  i.push(h({ hoursWord: O, minutesWord: g, secondsWord: C }))
                }
                var S = o && R(o)
                return S && i.push(S), i.join('. ')
              })({
                isLive: e.isLive,
                isBroadcast: e.contentType === r.a.BROADCAST,
                durationSeconds: S(e),
                timecode: A(e),
                videoTrack: e,
              })
            : ''
        },
        m = function (e) {
          var t = D(e),
            n = t.hours,
            r = t.minutes,
            a = t.seconds,
            o = { hoursWord: '', minutesWord: '', secondsWord: '' }
          return 0 === a && 0 === r && 0 === n && 0 === r
            ? ((o.secondsWord = c(0)), o)
            : ((o.hoursWord = n > 0 ? l(n) : ''),
              (o.minutesWord = r > 0 ? u(r) : ''),
              (o.secondsWord = a > 0 ? c(a) : ''),
              o)
        },
        O = function (e) {
          return e ? (e.currentTimeMs || 0) / 1e3 : void 0
        },
        g = function (e) {
          return e ? (e.durationMs || 0) / 1e3 : void 0
        },
        C = function (e) {
          var t = O(e)
          return t && Math.round(t)
        },
        S = function (e) {
          var t = g(e)
          return t && Math.round(t)
        },
        P = function (e) {
          return e.tracks.find(function (e) {
            return 0 === e.id
          })
        },
        T = function (e) {
          return e.tracks.find(function (t) {
            return t.id === e.currentTrackId
          })
        },
        M = function (e) {
          return e.controls && e.controls.isPosterShown ? P(e) : T(e)
        },
        A = function (e) {
          if (e) {
            var t = e.requestedTimecode
            return t && t > 0 ? t : e.replayEditedStartTime
          }
        },
        I = function (e) {
          return k(Math.round(e / 1e3))
        },
        k = function (e) {
          var t = D(e),
            n = t.hours,
            r = t.minutes,
            a = t.seconds,
            o = a < 10 ? '0'.concat(a) : a,
            i = r < 10 && n ? '0'.concat(r) : r
          return n ? ''.concat(n, ':').concat(i, ':').concat(o) : ''.concat(i, ':').concat(o)
        },
        D = function (e) {
          return { hours: Math.floor(e / 3600), minutes: Math.floor((e % 3600) / 60), seconds: Math.floor(e % 60) }
        }
    },
    USG3: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return f
      })
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        o = n('ddV6'),
        i = n.n(o),
        c = n('ERkP')
      function u(e, t) {
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
            ? u(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : u(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var s = {
        transitionDuration: '250ms',
        transitionProperty: 'opacity, height',
        transitionTimingFunction: 'ease',
        willChange: 'opacity',
      }
      function f(e) {
        var t = e.children,
          n = e.show,
          r = c.useState(!n),
          a = i()(r, 2),
          o = a[0],
          u = a[1]
        return (
          c.useEffect(
            function () {
              n && o && u(!1)
            },
            [o, n],
          ),
          c.useMemo(
            function () {
              var e = l(l({}, s), {}, { opacity: n ? 1 : 0 })
              return c.createElement(
                'div',
                {
                  onTransitionEnd: function (e) {
                    n || o || u(!0)
                  },
                  style: e,
                },
                o ? null : t,
              )
            },
            [t, n, o],
          )
        )
      }
    },
    Ur4q: function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('1Pcy'),
        u = n.n(c),
        l = n('5Yy7'),
        s = n.n(l),
        f = n('N+ot'),
        p = n.n(f),
        d = n('AuHH'),
        y = n.n(d),
        h = n('KEM+'),
        v = n.n(h),
        E = (n('2G9S'), n('ERkP')),
        _ = n('kCRK'),
        R = n('Q0n6'),
        b = n('7nmT'),
        m = n.n(b),
        O = n('rHpw'),
        g = n('MWbm')
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
            r = y()(e)
          if (t) {
            var a = y()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var S = (function (e) {
          s()(n, e)
          var t = C(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              v()(u()(e), 'state', { grabbing: !1 }),
              v()(u()(e), '_firstClick', !0),
              v()(u()(e), '_componentRef', E.createRef()),
              v()(u()(e), '_handleMouseDown', function () {
                var t = e.props.playerState,
                  n = t && Object(R.e)(t)
                n && n.is360 && e._setEventListener('mousemove', e._handleMouseMove),
                  e._setEventListener('mouseup', e._handleMouseUp)
              }),
              v()(u()(e), '_handleMouseMove', function () {
                var t = e.props.playerState,
                  n = t && Object(R.e)(t)
                n && n.is360 && (e.setState({ grabbing: !0 }), e._setEventListener('mouseup', e._handleGrabRelease)),
                  e._unsetEventListener('mousemove', e._handleMouseMove),
                  e._unsetEventListener('mouseup', e._handleMouseUp)
              }),
              v()(u()(e), '_handleGrabRelease', function () {
                e.setState({ grabbing: !1 }), e._unsetEventListener('mouseup', e._handleGrabRelease)
              }),
              v()(u()(e), '_handleMouseUp', function (t) {
                e._unsetEventListener('mousemove', e._handleMouseMove),
                  e._unsetEventListener('mouseup', e._handleMouseUp),
                  e._handleClick(t)
              }),
              v()(u()(e), '_handleClick', function (t) {
                var n = e.props,
                  r = n.hideControls,
                  a = n.isTouchOnlyUI,
                  o = n.onClick,
                  i = n.playerApi,
                  c = n.playerDisplayOptions,
                  u = n.playerState
                if (o) return o(t)
                if (i && u) {
                  var l = Object(R.e)(u),
                    s = l && l.contentType && l.contentType === _.a.GIF
                  if (e._firstClick && !s && ((e._firstClick = !1), u.isMuted)) return void i.unmute()
                  if (a && r) return
                  var f = i.pause,
                    p = i.play,
                    d = i.replay,
                    y = l && l.isLive,
                    h = c && c.liveClickthrough,
                    v = l && h && h.enabled && l.isLive && u.isPlaying && !l.is360
                  if (a && r) return
                  if (s) return void (u.isPlaying ? f() : p())
                  l && l.currentTimeMs === l.durationMs
                    ? d()
                    : u.isPlaying
                    ? v
                      ? e._handleLiveClickthrough()
                      : y || f()
                    : p()
                }
              }),
              v()(u()(e), '_setEventListener', function (t, n) {
                var r = m.a.findDOMNode(e._componentRef.current)
                r && r.addEventListener(t, n)
              }),
              v()(u()(e), '_unsetEventListener', function (t, n) {
                var r = m.a.findDOMNode(e._componentRef.current)
                r && r.removeEventListener(t, n)
              }),
              v()(u()(e), '_handleLiveClickthrough', function () {
                var t = e.props,
                  n = t.playerApi,
                  r = t.playerDisplayOptions,
                  a = t.playerState,
                  o = r && r.liveClickthrough,
                  i = a && Object(R.e)(a)
                if (o && a && i && n) {
                  var c = o.url || a.eventUrl || i.broadcastShareUrl
                  c && (window.open(c, o.target || '_blank'), n.liveClickthroughClicked())
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
                  var e = this.props.playerState,
                    t = this.state.grabbing,
                    n = e && Object(R.e)(e),
                    r = n && n.is360
                  return E.createElement(g.a, {
                    onMouseDown: this._handleMouseDown,
                    ref: this._componentRef,
                    style: [O.a.absoluteFill, r ? (t ? P.base360grabbing : P.base360) : P.base],
                  })
                },
              },
            ]),
            n
          )
        })(E.Component),
        P = O.a.create(function (e) {
          return { base: { cursor: 'pointer' }, base360: { cursor: 'grab' }, base360grabbing: { cursor: 'grabbing' } }
        })
      t.a = S
    },
    aoyV: function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('1Pcy'),
        u = n.n(c),
        l = n('5Yy7'),
        s = n.n(l),
        f = n('N+ot'),
        p = n.n(f),
        d = n('AuHH'),
        y = n.n(d),
        h = n('KEM+'),
        v = n.n(h),
        E = (n('2G9S'), n('ERkP')),
        _ = n('Qwev'),
        R = n('Q0n6'),
        b = n('rHpw'),
        m = n('MWbm')
      function O(e) {
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
            r = y()(e)
          if (t) {
            var a = y()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var g = (function (e) {
        s()(n, e)
        var t = O(n)
        function n() {
          var e
          a()(this, n)
          for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
          return (
            (e = t.call.apply(t, [this].concat(o))),
            v()(u()(e), '_playInitiatedTime', null),
            v()(u()(e), 'state', { waitingForPlayback: !1 }),
            v()(u()(e), '_checkPlayRequest', function (t, n) {
              var r = n && 'PLAY_REQUESTED' === n.controls.playState,
                a = r && (!t || 'PLAY_REQUESTED' !== t.controls.playState)
              r ? a && e._startPlaybackWait() : e._clearPlaybackWait()
            }),
            v()(u()(e), '_clearPlaybackWait', function () {
              clearInterval(e._bufferingCheck), (e._playInitiatedTime = null)
            }),
            v()(u()(e), '_startPlaybackWait', function () {
              var t = e.props.waitingForPlaybackThresholdMs
              e._clearPlaybackWait(),
                (e._playInitiatedTime = Date.now()),
                (e._bufferingCheck = setInterval(function () {
                  if (!e._playInitiatedTime) return e._clearPlaybackWait()
                  var n = e._playInitiatedTime
                  Date.now() - n > t && (e.setState({ waitingForPlayback: !0 }), e._clearPlaybackWait())
                }, 100))
            }),
            e
          )
        }
        return (
          i()(
            n,
            [
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._clearPlaybackWait()
                },
              },
              {
                key: 'componentDidMount',
                value: function () {
                  this._checkPlayRequest(null, this.props.playerState)
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  this._checkPlayRequest(e.playerState, this.props.playerState)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props.playerState
                  if (!e) return null
                  var t = Object(R.e)(e)
                  return (t && t.isBuffering) || this.state.waitingForPlayback
                    ? E.createElement(
                        m.a,
                        { pointerEvents: 'none', style: [b.a.absoluteFill, C.buttonContainer] },
                        E.createElement(_.a, { color: b.a.theme.colors.white, size: 60 }),
                      )
                    : null
                },
              },
            ],
            [
              {
                key: 'getDerivedStateFromProps',
                value: function (e) {
                  var t = e.playerState
                  return t && 'PLAY_REQUESTED' === t.controls.playState ? null : { waitingForPlayback: !1 }
                },
              },
            ],
          ),
          n
        )
      })(E.Component)
      v()(g, 'defaultProps', { waitingForPlaybackThresholdMs: 1e3 })
      var C = b.a.create(function (e) {
        return { buttonContainer: { justifyContent: 'center', alignItems: 'center' } }
      })
      t.a = g
    },
    fZNH: function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('1Pcy'),
        u = n.n(c),
        l = n('5Yy7'),
        s = n.n(l),
        f = n('N+ot'),
        p = n.n(f),
        d = n('AuHH'),
        y = n.n(d),
        h = n('KEM+'),
        v = n.n(h),
        E = (n('2G9S'), n('uFXj'), n('ERkP')),
        _ = n('Q0n6'),
        R = n('3XMw'),
        b = n.n(R),
        m = n('CKsB'),
        O = n('rHpw'),
        g = n('kCRK'),
        C = n('shC7'),
        S = n('MWbm')
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
            r = y()(e)
          if (t) {
            var a = y()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var T = b.a.f5224367,
        M = b.a.f1b6bcec,
        A = (function (e) {
          s()(n, e)
          var t = P(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              v()(u()(e), 'state', { openContextMenu: !1, positionX: 0, positionY: 0 }),
              v()(u()(e), '_handleOpenContextMenu', function (t) {
                return function (n) {
                  var r
                  if (
                    (n.preventDefault(),
                    null != t &&
                      null !== (r = t.source) &&
                      void 0 !== r &&
                      r.id &&
                      (t.source.type === g.e.TWEET || t.source.type === g.e.BROADCAST))
                  ) {
                    document.addEventListener('click', e._handleCloseContextMenu)
                    var a = n.currentTarget.getBoundingClientRect()
                    e.setState({ openContextMenu: !0, positionX: n.clientX - a.left, positionY: n.clientY - a.top })
                  }
                }
              }),
              v()(u()(e), '_handleCloseContextMenu', function () {
                e.state.openContextMenu &&
                  (document.removeEventListener('click', e._handleCloseContextMenu),
                  e.setState({ openContextMenu: !1 }))
              }),
              v()(u()(e), '_handleCopyVideoAddress', function () {
                document.addEventListener('copy', e._handleCopy), document.execCommand('copy')
              }),
              v()(u()(e), '_handleCopy', function (t) {
                var n,
                  r,
                  a = e.props.playerState,
                  o = null == a || null === (n = a.source) || void 0 === n ? void 0 : n.id,
                  i = null == a || null === (r = a.source) || void 0 === r ? void 0 : r.type
                o &&
                  i &&
                  t.clipboardData &&
                  (i === g.e.BROADCAST
                    ? t.clipboardData.setData('text/plain', 'https://twitter.com/i/broadcasts/'.concat(o))
                    : i === g.e.TWEET &&
                      t.clipboardData.setData('text/plain', 'https://twitter.com/i/status/'.concat(o)),
                  t.preventDefault()),
                  document.removeEventListener('copy', e._handleCopy)
              }),
              v()(u()(e), '_isGif', function (e) {
                var t = e && Object(_.j)(e)
                return t && t.contentType === g.a.GIF
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
                    n = e.playerState,
                    r = this.state,
                    a = r.openContextMenu,
                    o = r.positionX,
                    i = r.positionY,
                    c = this._isGif(n),
                    u = C.a.getConstants().isRTL ? { top: i, right: o } : { top: i, left: o }
                  return E.createElement(
                    S.a,
                    { onContextMenu: this._handleOpenContextMenu(n), style: O.a.absoluteFill },
                    t,
                    a &&
                      E.createElement(
                        S.a,
                        { style: [I.menuWrapper, u] },
                        E.createElement(m.a, { actionText: c ? M : T, onClick: this._handleCopyVideoAddress }),
                      ),
                  )
                },
              },
            ]),
            n
          )
        })(E.Component)
      t.a = A
      var I = O.a.create(function (e) {
        return {
          menuWrapper: {
            borderRadius: e.borderRadii.small,
            position: 'absolute',
            overflow: 'hidden',
            backgroundColor: e.colors.navigationBackground,
            boxShadow: e.boxShadows.medium,
            display: 'table',
          },
        }
      })
    },
    kCRK: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return r
      }),
        n.d(t, 'd', function () {
          return a
        }),
        n.d(t, 'a', function () {
          return o
        }),
        n.d(t, 'c', function () {
          return i
        }),
        n.d(t, 'e', function () {
          return c
        })
      var r = { VISIT: 'url', WATCH: 'watch' },
        a = { watch_now: 'watch_now', visit_site: 'visit_site', shop: 'shop', see_more: 'see_more', go_to: 'go_to' },
        o = { MEDIA: 'media_entity', GIF: 'gif', VMAP: 'vmap', BROADCAST: 'broadcast' },
        i = { AD: 'ad', CONTENT: 'content' },
        c = { BROADCAST: 'broadcast', DM: 'dm', TWEET: 'tweet' }
    },
    oH2E: function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('97Jx'),
        a = n.n(r),
        o = n('VrFO'),
        i = n.n(o),
        c = n('Y9Ll'),
        u = n.n(c),
        l = n('1Pcy'),
        s = n.n(l),
        f = n('5Yy7'),
        p = n.n(f),
        d = n('N+ot'),
        y = n.n(d),
        h = n('AuHH'),
        v = n.n(h),
        E = n('KEM+'),
        _ = n.n(E),
        R = (n('2G9S'), n('ERkP')),
        b = n('3rX5'),
        m = n('cm6r'),
        O = n('rHpw'),
        g = n('mXq/'),
        C = n('Q0n6')
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
            r = v()(e)
          if (t) {
            var a = v()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return y()(this, n)
        }
      }
      var P = (function (e) {
        p()(n, e)
        var t = S(n)
        function n() {
          var e
          i()(this, n)
          for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
          return (
            (e = t.call.apply(t, [this].concat(a))),
            _()(s()(e), '_playVideo', function (e) {
              return function (t) {
                e && e.play(), t && t.stopPropagation()
              }
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
                  t = e.playerApi,
                  n = e.playerState,
                  r = e.withPlayButton
                if (!(t && n && n.controls && n.controls.isPosterShown)) return null
                var o = Object(C.j)(n),
                  i = this.props.imageSrc || n.posterImage,
                  c = Object(C.l)(o)
                return R.createElement(
                  m.a,
                  a()({}, r ? null : { accessibilityLabel: c }, {
                    focusable: !r,
                    interactiveStyles: null,
                    onPress: this._playVideo(t),
                    style: [O.a.absoluteFill, T.buttonContainer],
                  }),
                  i && R.createElement(b.a, { resizeMode: 'cover', source: i, style: O.a.absoluteFill }),
                  r && R.createElement(g.a, { accessibilityLabel: c, onPress: this._playVideo(t), type: 'video' }),
                )
              },
            },
          ]),
          n
        )
      })(R.Component)
      _()(P, 'defaultProps', { withPlayButton: !0 })
      var T = O.a.create(function (e) {
        return { buttonContainer: { justifyContent: 'center', alignItems: 'center' } }
      })
      t.a = P
    },
    zCLo: function (e, t, n) {
      'use strict'
      var r = n('KEM+'),
        a = n.n(r),
        o = (n('Blm6'), n('ERkP')),
        i = n('wD1h'),
        c = n('oLZl'),
        u = n('rHpw'),
        l = n('MWbm')
      t.a = function (e) {
        var t,
          n = o.useRef(null),
          r = e.enabled,
          s = e.playerApi,
          f = e.playerState
        if (!r) return e.children || null
        var p = function (e) {
            s && f && (f.isPlaying ? s.pause() : s.play())
          },
          d = function (e) {
            if (s && f) {
              var t = parseInt(e.key, 10) / 10
              s.scrubToFraction(t)
            }
          }
        return o.createElement(
          i.a,
          {
            containerRef: n,
            enabled: !0,
            handlers:
              ((t = {}),
              a()(t, c.a.K, p),
              a()(t, c.a.M, function (e) {
                s && f && (f.isMuted ? s.unmute() : s.mute())
              }),
              a()(t, c.a.Space, p),
              a()(t, c.a.C, function (e) {
                s && f && s.toggleCaptions()
              }),
              a()(t, c.a.Home, function (e) {
                s && f && s.scrubToFraction(0)
              }),
              a()(t, c.a[0], d),
              a()(t, c.a[1], d),
              a()(t, c.a[2], d),
              a()(t, c.a[3], d),
              a()(t, c.a[4], d),
              a()(t, c.a[5], d),
              a()(t, c.a[6], d),
              a()(t, c.a[7], d),
              a()(t, c.a[8], d),
              a()(t, c.a[9], d),
              a()(t, c.a.End, function (e) {
                s && f && s.scrubToFraction(1)
              }),
              t),
          },
          o.createElement(l.a, { focusable: !0, ref: n, style: u.a.absoluteFill }, e.children),
        )
      }
    },
  },
])
//# sourceMappingURL=WIPED
