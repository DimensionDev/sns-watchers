;(window.webpackJsonp = window.webpackJsonp || []).push([
  [190],
  {
    '0nHQ': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return S
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
        _ = n.n(E),
        R = n('Yyzf'),
        b = n('3XMw'),
        m = n.n(b),
        O = m.a.c1658fc6,
        g = {
          BROADCAST_REQUEST_ERROR: O,
          BROADCAST_ENDED_NO_REPLAY: m.a.ce871584,
          BROADCAST_NOT_FOUND: m.a.c101eb95,
          CONFIG_USER_DATA_NETWORK_ERROR: O,
          CONFIG_NETWORK_ERROR: O,
          DMCA_TAKEDOWN_ERROR: m.a.gb24a513,
          EUROPEAN_COPYRIGHT_VIOLATION: m.a.hcaf3e62,
          LIVE_PARSE_ERROR: O,
          LIVE_STREAM_ACQUISITION_MISSING_CONTENT_ID: O,
          LIVE_STREAM_ACQUISITION_NETWORK_ERROR: O,
          LIVE_VIDEO_GEOBLOCK_ERROR: m.a.if05c037,
          LIVE_VIDEO_COPYRIGHT_VIOLATION_ERROR: m.a.d420171a,
          LIVE_VIDEO_GEOLOCATION_PROMPT: m.a.b1eb72f9,
          MEDIA_NOT_SUPPORTED: m.a.c057680b,
          MEDIA_SRC_INVALID_ERROR: O,
          MEDIA_ABORTED: O,
          MEDIA_NETWORK_ERROR: O,
          MEDIA_DECODE_ERROR: O,
          MEDIA_GEOBLOCK_ERROR: m.a.i5dfae6e,
          MEDIA_UNKNOWN_CODE_ERROR: O,
          ORIGINAL_CONTEXT_DELETED: m.a.c2388276,
          UNSUPPORTED_TYPE: O,
          VMAP_NETWORK_ERROR: O,
          VMAP_PARSE_ERROR: O,
        }
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
                  ? _.a.createElement(R.a, {
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
                    return r ? g[t]({ holder: r }) : O
                  }
                  return (t && g[t]) || O
                }
              },
            },
          ]),
          n
        )
      })(_.a.Component)
    },
    KoZZ: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'default', function () {
          return R
        })
      var r = n('ERkP'),
        a = n.n(r),
        o = n('t62R'),
        i = n('aoyV'),
        c = n('kCRK'),
        u = n('fZNH'),
        l = n('0nHQ'),
        s = n('USG3'),
        f = n('Q0n6'),
        p = n('n8uP'),
        d = n('Wms4'),
        y = n('Ur4q'),
        h = n('oH2E'),
        v = n('rHpw'),
        E = n('zCLo'),
        _ = n('MWbm')
      function R(e) {
        var t,
          n = e.hashtagHighlightProps,
          r = e.playerApi,
          v = e.playerDisplayOptions,
          R = e.playerState,
          m = e.poster,
          O = e.useKeyboardShortcuts
        if (!r || !R) return null
        var g = R && Object(f.e)(R)
        if (!g || g.contentType !== c.a.GIF || !n) return null
        if (!!R.error)
          return a.a.createElement(
            s.a,
            { show: !0 },
            a.a.createElement(l.a, { imageSrc: m, playerApi: r, playerState: R }),
          )
        var C = !(null != v && v.hidePosterImage),
          S = 'PLAY_REQUESTED' !== (null === (t = R.controls) || void 0 === t ? void 0 : t.playState),
          P = R.tracksFinished
        return a.a.createElement(
          E.a,
          { enabled: !!O, playerApi: r, playerState: R },
          a.a.createElement(
            u.a,
            { playerState: R },
            a.a.createElement(
              a.a.Fragment,
              null,
              a.a.createElement(y.a, { playerApi: r, playerDisplayOptions: v, playerState: R }),
              C && !P && a.a.createElement(h.a, { imageSrc: m, playerApi: r, playerState: R, withPlayButton: S }),
              a.a.createElement(i.a, { playerState: R }),
              a.a.createElement(
                _.a,
                { style: b.root },
                a.a.createElement(
                  _.a,
                  { style: b.gifLabel },
                  a.a.createElement(d.a, null, a.a.createElement(o.b, { weight: 'bold' }, 'GIF')),
                ),
                a.a.createElement(_.a, { style: b.hashtagHighlight }, a.a.createElement(p.a, n)),
                a.a.createElement(
                  d.a,
                  { style: [b.gifLabel, b.invisibleBadge] },
                  a.a.createElement(o.b, { weight: 'bold' }, 'GIF'),
                ),
              ),
            ),
          ),
        )
      }
      var b = v.a.create(function (e) {
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
        return p
      })
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        o = n('ddV6'),
        i = n.n(o),
        c = n('ERkP'),
        u = n.n(c)
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
      function s(e) {
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
      var f = {
        transitionDuration: '250ms',
        transitionProperty: 'opacity, height',
        transitionTimingFunction: 'ease',
        willChange: 'opacity',
      }
      function p(e) {
        var t = e.children,
          n = e.show,
          r = u.a.useState(!n),
          a = i()(r, 2),
          o = a[0],
          c = a[1]
        return (
          u.a.useEffect(
            function () {
              n && o && c(!1)
            },
            [o, n],
          ),
          u.a.useMemo(
            function () {
              var e = s(s({}, f), {}, { opacity: n ? 1 : 0 })
              return u.a.createElement(
                'div',
                {
                  onTransitionEnd: function (e) {
                    n || o || c(!0)
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
        _ = n.n(E),
        R = n('kCRK'),
        b = n('Q0n6'),
        m = n('7nmT'),
        O = n.n(m),
        g = n('rHpw'),
        C = n('MWbm')
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
            r = y()(e)
          if (t) {
            var a = y()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var P = (function (e) {
          s()(n, e)
          var t = S(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              v()(u()(e), 'state', { grabbing: !1 }),
              v()(u()(e), '_firstClick', !0),
              v()(u()(e), '_componentRef', _.a.createRef()),
              v()(u()(e), '_handleMouseDown', function () {
                var t = e.props.playerState,
                  n = t && Object(b.e)(t)
                n && n.is360 && e._setEventListener('mousemove', e._handleMouseMove),
                  e._setEventListener('mouseup', e._handleMouseUp)
              }),
              v()(u()(e), '_handleMouseMove', function () {
                var t = e.props.playerState,
                  n = t && Object(b.e)(t)
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
                  var l = Object(b.e)(u),
                    s = l && l.contentType && l.contentType === R.a.GIF
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
                var r = O.a.findDOMNode(e._componentRef.current)
                r && r.addEventListener(t, n)
              }),
              v()(u()(e), '_unsetEventListener', function (t, n) {
                var r = O.a.findDOMNode(e._componentRef.current)
                r && r.removeEventListener(t, n)
              }),
              v()(u()(e), '_handleLiveClickthrough', function () {
                var t = e.props,
                  n = t.playerApi,
                  r = t.playerDisplayOptions,
                  a = t.playerState,
                  o = r && r.liveClickthrough,
                  i = a && Object(b.e)(a)
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
                    n = e && Object(b.e)(e),
                    r = n && n.is360
                  return _.a.createElement(C.a, {
                    onMouseDown: this._handleMouseDown,
                    ref: this._componentRef,
                    style: [g.a.absoluteFill, r ? (t ? T.base360grabbing : T.base360) : T.base],
                  })
                },
              },
            ]),
            n
          )
        })(_.a.Component),
        T = g.a.create(function (e) {
          return { base: { cursor: 'pointer' }, base360: { cursor: 'grab' }, base360grabbing: { cursor: 'grabbing' } }
        })
      t.a = P
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
        _ = n.n(E),
        R = n('Qwev'),
        b = n('Q0n6'),
        m = n('rHpw'),
        O = n('MWbm')
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
                  var t = Object(b.e)(e)
                  return (t && t.isBuffering) || this.state.waitingForPlayback
                    ? _.a.createElement(
                        O.a,
                        { pointerEvents: 'none', style: [m.a.absoluteFill, S.buttonContainer] },
                        _.a.createElement(R.a, { color: m.a.theme.colors.white, size: 60 }),
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
      })(_.a.Component)
      v()(C, 'defaultProps', { waitingForPlaybackThresholdMs: 1e3 })
      var S = m.a.create(function (e) {
        return { buttonContainer: { justifyContent: 'center', alignItems: 'center' } }
      })
      t.a = C
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
        _ = n.n(E),
        R = n('Q0n6'),
        b = n('3XMw'),
        m = n.n(b),
        O = n('CKsB'),
        g = n('rHpw'),
        C = n('kCRK'),
        S = n('shC7'),
        P = n('MWbm')
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
            r = y()(e)
          if (t) {
            var a = y()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var M = m.a.d26d8730,
        A = m.a.f1b6bcec,
        I = (function (e) {
          s()(n, e)
          var t = T(n)
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
                      (t.source.type === C.e.TWEET || t.source.type === C.e.BROADCAST))
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
                  (i === C.e.BROADCAST
                    ? t.clipboardData.setData('text/plain', 'https://twitter.com/i/broadcasts/'.concat(o))
                    : i === C.e.TWEET &&
                      t.clipboardData.setData('text/plain', 'https://twitter.com/i/status/'.concat(o)),
                  t.preventDefault()),
                  document.removeEventListener('copy', e._handleCopy)
              }),
              v()(u()(e), '_isGif', function (e) {
                var t = e && Object(R.j)(e)
                return t && t.contentType === C.a.GIF
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
                    u = S.a.getConstants().isRTL ? { top: i, right: o } : { top: i, left: o }
                  return _.a.createElement(
                    P.a,
                    { onContextMenu: this._handleOpenContextMenu(n), style: g.a.absoluteFill },
                    t,
                    a &&
                      _.a.createElement(
                        P.a,
                        { style: [k.menuWrapper, u] },
                        _.a.createElement(O.a, { actionText: c ? A : M, onClick: this._handleCopyVideoAddress }),
                      ),
                  )
                },
              },
            ]),
            n
          )
        })(_.a.Component)
      t.a = I
      var k = g.a.create(function (e) {
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
        b = n.n(R),
        m = n('3rX5'),
        O = n('cm6r'),
        g = n('rHpw'),
        C = n('mXq/'),
        S = n('Q0n6')
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
            r = v()(e)
          if (t) {
            var a = v()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return y()(this, n)
        }
      }
      var T = (function (e) {
        p()(n, e)
        var t = P(n)
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
                var o = Object(S.j)(n),
                  i = this.props.imageSrc || n.posterImage,
                  c = Object(S.l)(o)
                return b.a.createElement(
                  O.a,
                  a()({}, r ? null : { accessibilityLabel: c }, {
                    focusable: !r,
                    interactiveStyles: null,
                    onPress: this._playVideo(t),
                    style: [g.a.absoluteFill, M.buttonContainer],
                  }),
                  i && b.a.createElement(m.a, { resizeMode: 'cover', source: i, style: g.a.absoluteFill }),
                  r && b.a.createElement(C.a, { accessibilityLabel: c, onPress: this._playVideo(t), type: 'video' }),
                )
              },
            },
          ]),
          n
        )
      })(b.a.Component)
      _()(T, 'defaultProps', { withPlayButton: !0 })
      var M = g.a.create(function (e) {
        return { buttonContainer: { justifyContent: 'center', alignItems: 'center' } }
      })
      t.a = T
    },
    zCLo: function (e, t, n) {
      'use strict'
      var r = n('KEM+'),
        a = n.n(r),
        o = (n('Blm6'), n('ERkP')),
        i = n.n(o),
        c = n('wD1h'),
        u = n('oLZl'),
        l = n('rHpw'),
        s = n('MWbm')
      t.a = function (e) {
        var t,
          n = i.a.useRef(null),
          r = e.enabled,
          o = e.playerApi,
          f = e.playerState
        if (!r) return e.children || null
        var p = function (e) {
            o && f && (f.isPlaying ? o.pause() : o.play())
          },
          d = function (e) {
            if (o && f) {
              var t = parseInt(e.key, 10) / 10
              o.scrubToFraction(t)
            }
          }
        return i.a.createElement(
          c.a,
          {
            containerRef: n,
            enabled: !0,
            handlers:
              ((t = {}),
              a()(t, u.a.K, p),
              a()(t, u.a.M, function (e) {
                o && f && (f.isMuted ? o.unmute() : o.mute())
              }),
              a()(t, u.a.Space, p),
              a()(t, u.a.C, function (e) {
                o && f && o.toggleCaptions()
              }),
              a()(t, u.a.Home, function (e) {
                o && f && o.scrubToFraction(0)
              }),
              a()(t, u.a[0], d),
              a()(t, u.a[1], d),
              a()(t, u.a[2], d),
              a()(t, u.a[3], d),
              a()(t, u.a[4], d),
              a()(t, u.a[5], d),
              a()(t, u.a[6], d),
              a()(t, u.a[7], d),
              a()(t, u.a[8], d),
              a()(t, u.a[9], d),
              a()(t, u.a.End, function (e) {
                o && f && o.scrubToFraction(1)
              }),
              t),
          },
          i.a.createElement(s.a, { focusable: !0, ref: n, style: l.a.absoluteFill }, e.children),
        )
      }
    },
  },
])
//# sourceMappingURL=WIPED
