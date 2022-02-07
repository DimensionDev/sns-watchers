;(window.webpackJsonp = window.webpackJsonp || []).push([
  [191],
  {
    '0nHQ': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return O
      })
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        u = n('1Pcy'),
        c = n.n(u),
        s = n('5Yy7'),
        l = n.n(s),
        d = n('2VqO'),
        p = n.n(d),
        f = n('KEM+'),
        y = n.n(f),
        h = (n('2G9S'), n('ERkP')),
        v = n.n(h),
        E = n('Yyzf'),
        _ = n('3XMw'),
        m = n.n(_),
        b = m.a.c1658fc6,
        R = {
          BROADCAST_REQUEST_ERROR: b,
          BROADCAST_ENDED_NO_REPLAY: m.a.ce871584,
          BROADCAST_NOT_FOUND: m.a.c101eb95,
          CONFIG_USER_DATA_NETWORK_ERROR: b,
          CONFIG_NETWORK_ERROR: b,
          DMCA_TAKEDOWN_ERROR: m.a.gb24a513,
          EUROPEAN_COPYRIGHT_VIOLATION: m.a.hcaf3e62,
          LIVE_PARSE_ERROR: b,
          LIVE_STREAM_ACQUISITION_MISSING_CONTENT_ID: b,
          LIVE_STREAM_ACQUISITION_NETWORK_ERROR: b,
          LIVE_VIDEO_GEOBLOCK_ERROR: m.a.if05c037,
          LIVE_VIDEO_COPYRIGHT_VIOLATION_ERROR: m.a.d420171a,
          LIVE_VIDEO_GEOLOCATION_PROMPT: m.a.b1eb72f9,
          MEDIA_NOT_SUPPORTED: m.a.c057680b,
          MEDIA_SRC_INVALID_ERROR: b,
          MEDIA_ABORTED: b,
          MEDIA_NETWORK_ERROR: b,
          MEDIA_DECODE_ERROR: b,
          MEDIA_GEOBLOCK_ERROR: m.a.i5dfae6e,
          MEDIA_UNKNOWN_CODE_ERROR: b,
          ORIGINAL_CONTEXT_DELETED: m.a.c2388276,
          UNSUPPORTED_TYPE: b,
          VMAP_NETWORK_ERROR: b,
          VMAP_PARSE_ERROR: b,
        },
        O = (function (e) {
          l()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              y()(c()(e), '_handleReload', function () {
                var t = e.props,
                  n = t.playerApi,
                  a = t.playerState
                if (a && a.errorInfo && a.errorInfo.canRetry)
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
                    a = e.imageSrc,
                    r = e.playerApi,
                    o = e.playerState
                  return r && o
                    ? v.a.createElement(E.a, {
                        displayBackgroundImage: n,
                        errorMessage: this._buildMessage(),
                        iconPlayError: 'BROADCAST_NOT_FOUND' === o.error,
                        imageSrc: a || o.posterImage,
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
                      var a = (n || {}).copyrightHolder
                      return a ? R[t]({ holder: a }) : b
                    }
                    return (t && R[t]) || b
                  }
                },
              },
            ]),
            n
          )
        })(v.a.Component)
    },
    KoZZ: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'default', function () {
          return m
        })
      var a = n('ERkP'),
        r = n.n(a),
        o = n('t62R'),
        i = n('aoyV'),
        u = n('kCRK'),
        c = n('fZNH'),
        s = n('0nHQ'),
        l = n('USG3'),
        d = n('Q0n6'),
        p = n('n8uP'),
        f = n('Wms4'),
        y = n('Ur4q'),
        h = n('oH2E'),
        v = n('rHpw'),
        E = n('zCLo'),
        _ = n('MWbm')
      function m(e) {
        var t,
          n = e.hashtagHighlightProps,
          a = e.playerApi,
          v = e.playerDisplayOptions,
          m = e.playerState,
          R = e.poster,
          O = e.useKeyboardShortcuts
        if (!a || !m) return null
        var g = m && Object(d.e)(m)
        if (!g || g.contentType !== u.a.GIF || !n) return null
        if (!!m.error)
          return r.a.createElement(
            l.a,
            { show: !0 },
            r.a.createElement(s.a, { imageSrc: R, playerApi: a, playerState: m }),
          )
        var C = !(null != v && v.hidePosterImage),
          S = 'PLAY_REQUESTED' !== (null === (t = m.controls) || void 0 === t ? void 0 : t.playState),
          T = m.tracksFinished
        return r.a.createElement(
          E.a,
          { enabled: !!O, playerApi: a, playerState: m },
          r.a.createElement(
            c.a,
            { playerState: m },
            r.a.createElement(
              r.a.Fragment,
              null,
              r.a.createElement(y.a, { playerApi: a, playerDisplayOptions: v, playerState: m }),
              C && !T && r.a.createElement(h.a, { imageSrc: R, playerApi: a, playerState: m, withPlayButton: S }),
              r.a.createElement(i.a, { playerState: m }),
              r.a.createElement(
                _.a,
                { style: b.root },
                r.a.createElement(
                  _.a,
                  { style: b.gifLabel },
                  r.a.createElement(f.a, null, r.a.createElement(o.b, { weight: 'bold' }, 'GIF')),
                ),
                r.a.createElement(_.a, { style: b.hashtagHighlight }, r.a.createElement(p.a, n)),
                r.a.createElement(
                  f.a,
                  { style: [b.gifLabel, b.invisibleBadge] },
                  r.a.createElement(o.b, { weight: 'bold' }, 'GIF'),
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
        return m
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
          return T
        }),
        n.d(t, 'e', function () {
          return M
        }),
        n.d(t, 'k', function () {
          return I
        }),
        n.d(t, 'i', function () {
          return A
        }),
        n.d(t, 'c', function () {
          return P
        }),
        n.d(t, 'b', function () {
          return k
        })
      n('7xRU'), n('hBpG'), n('7x/C'), n('2G9S')
      var a = n('kCRK'),
        r = n('3XMw'),
        o = n.n(r),
        i = o.a.d58baa7e,
        u = o.a.i3b7a017,
        c = o.a.ie5d110e,
        s = o.a.df5f11b3,
        l = o.a.a7cd5cf4,
        d = o.a.b6eb8f69,
        p = o.a.dcc2b9b2,
        f = o.a.hf4ffd4d,
        y = o.a.f6e90cd6,
        h = o.a.e7d191ec,
        v = o.a.h1888a33,
        E = o.a.c58b2ab7,
        _ = function (e) {
          return 'number' == typeof e ? i(e) : e
        },
        m = function (e) {
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
                  a = e.isLive,
                  r = e.timecode,
                  o = e.videoTrack,
                  i = [],
                  u = n || a ? d : l,
                  c = a ? f : p
                if ((i.push(c({ locVideoType: u })), 'number' == typeof t && t && !a)) {
                  var s = R(t),
                    v = s.hoursWord,
                    E = s.minutesWord,
                    _ = s.secondsWord
                  i.push(y({ hoursWord: v, minutesWord: E, secondsWord: _ }))
                }
                if ('number' == typeof r && r) {
                  var b = R(r),
                    O = b.hoursWord,
                    g = b.minutesWord,
                    C = b.secondsWord
                  i.push(h({ hoursWord: O, minutesWord: g, secondsWord: C }))
                }
                var S = o && m(o)
                return S && i.push(S), i.join('. ')
              })({
                isLive: e.isLive,
                isBroadcast: e.contentType === a.a.BROADCAST,
                durationSeconds: S(e),
                timecode: A(e),
                videoTrack: e,
              })
            : ''
        },
        R = function (e) {
          var t = D(e),
            n = t.hours,
            a = t.minutes,
            r = t.seconds,
            o = { hoursWord: '', minutesWord: '', secondsWord: '' }
          return 0 === r && 0 === a && 0 === n && 0 === a
            ? ((o.secondsWord = u(0)), o)
            : ((o.hoursWord = n > 0 ? s(n) : ''),
              (o.minutesWord = a > 0 ? c(a) : ''),
              (o.secondsWord = r > 0 ? u(r) : ''),
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
        T = function (e) {
          return e.tracks.find(function (e) {
            return 0 === e.id
          })
        },
        M = function (e) {
          return e.tracks.find(function (t) {
            return t.id === e.currentTrackId
          })
        },
        I = function (e) {
          return e.controls && e.controls.isPosterShown ? T(e) : M(e)
        },
        A = function (e) {
          if (e) {
            var t = e.requestedTimecode
            return t && t > 0 ? t : e.replayEditedStartTime
          }
        },
        P = function (e) {
          return k(Math.round(e / 1e3))
        },
        k = function (e) {
          var t = D(e),
            n = t.hours,
            a = t.minutes,
            r = t.seconds,
            o = r < 10 ? '0'.concat(r) : r,
            i = a < 10 && n ? '0'.concat(a) : a
          return n ? ''.concat(n, ':').concat(i, ':').concat(o) : ''.concat(i, ':').concat(o)
        },
        D = function (e) {
          return { hours: Math.floor(e / 3600), minutes: Math.floor((e % 3600) / 60), seconds: Math.floor(e % 60) }
        }
    },
    USG3: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return l
      })
      var a = n('yiKp'),
        r = n.n(a),
        o = n('ddV6'),
        i = n.n(o),
        u = n('ERkP'),
        c = n.n(u),
        s = {
          transitionDuration: '250ms',
          transitionProperty: 'opacity, height',
          transitionTimingFunction: 'ease',
          willChange: 'opacity',
        }
      function l(e) {
        var t = e.children,
          n = e.show,
          a = c.a.useState(!n),
          o = i()(a, 2),
          u = o[0],
          l = o[1]
        return (
          c.a.useEffect(
            function () {
              n && u && l(!1)
            },
            [u, n],
          ),
          c.a.useMemo(
            function () {
              var e = r()(r()({}, s), {}, { opacity: n ? 1 : 0 })
              return c.a.createElement(
                'div',
                {
                  onTransitionEnd: function (e) {
                    n || u || l(!0)
                  },
                  style: e,
                },
                u ? null : t,
              )
            },
            [t, n, u],
          )
        )
      }
    },
    Ur4q: function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        u = n('1Pcy'),
        c = n.n(u),
        s = n('5Yy7'),
        l = n.n(s),
        d = n('2VqO'),
        p = n.n(d),
        f = n('KEM+'),
        y = n.n(f),
        h = (n('2G9S'), n('ERkP')),
        v = n.n(h),
        E = n('kCRK'),
        _ = n('Q0n6'),
        m = n('7nmT'),
        b = n.n(m),
        R = n('rHpw'),
        O = n('MWbm'),
        g = (function (e) {
          l()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              y()(c()(e), 'state', { grabbing: !1 }),
              y()(c()(e), '_firstClick', !0),
              y()(c()(e), '_componentRef', v.a.createRef()),
              y()(c()(e), '_handleMouseDown', function () {
                var t = e.props.playerState,
                  n = t && Object(_.e)(t)
                n && n.is360 && e._setEventListener('mousemove', e._handleMouseMove),
                  e._setEventListener('mouseup', e._handleMouseUp)
              }),
              y()(c()(e), '_handleMouseMove', function () {
                var t = e.props.playerState,
                  n = t && Object(_.e)(t)
                n && n.is360 && (e.setState({ grabbing: !0 }), e._setEventListener('mouseup', e._handleGrabRelease)),
                  e._unsetEventListener('mousemove', e._handleMouseMove),
                  e._unsetEventListener('mouseup', e._handleMouseUp)
              }),
              y()(c()(e), '_handleGrabRelease', function () {
                e.setState({ grabbing: !1 }), e._unsetEventListener('mouseup', e._handleGrabRelease)
              }),
              y()(c()(e), '_handleMouseUp', function (t) {
                e._unsetEventListener('mousemove', e._handleMouseMove),
                  e._unsetEventListener('mouseup', e._handleMouseUp),
                  e._handleClick(t)
              }),
              y()(c()(e), '_handleClick', function (t) {
                var n = e.props,
                  a = n.hideControls,
                  r = n.isTouchOnlyUI,
                  o = n.onClick,
                  i = n.playerApi,
                  u = n.playerDisplayOptions,
                  c = n.playerState
                if (o) return o(t)
                if (i && c) {
                  var s = Object(_.e)(c),
                    l = s && s.contentType && s.contentType === E.a.GIF
                  if (e._firstClick && !l && ((e._firstClick = !1), c.isMuted)) return void i.unmute()
                  if (r && a) return
                  var d = i.pause,
                    p = i.play,
                    f = i.replay,
                    y = s && s.isLive,
                    h = u && u.liveClickthrough,
                    v = s && h && h.enabled && s.isLive && c.isPlaying && !s.is360
                  if (r && a) return
                  if (l) return void (c.isPlaying ? d() : p())
                  s && s.currentTimeMs === s.durationMs
                    ? f()
                    : c.isPlaying
                    ? v
                      ? e._handleLiveClickthrough()
                      : y || d()
                    : p()
                }
              }),
              y()(c()(e), '_setEventListener', function (t, n) {
                var a = b.a.findDOMNode(e._componentRef.current)
                a && a.addEventListener(t, n)
              }),
              y()(c()(e), '_unsetEventListener', function (t, n) {
                var a = b.a.findDOMNode(e._componentRef.current)
                a && a.removeEventListener(t, n)
              }),
              y()(c()(e), '_handleLiveClickthrough', function () {
                var t = e.props,
                  n = t.playerApi,
                  a = t.playerDisplayOptions,
                  r = t.playerState,
                  o = a && a.liveClickthrough,
                  i = r && Object(_.e)(r)
                if (o && r && i && n) {
                  var u = o.url || r.eventUrl || i.broadcastShareUrl
                  u && (window.open(u, o.target || '_blank'), n.liveClickthroughClicked())
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
                    n = e && Object(_.e)(e),
                    a = n && n.is360
                  return v.a.createElement(O.a, {
                    onMouseDown: this._handleMouseDown,
                    ref: this._componentRef,
                    style: [R.a.absoluteFill, a ? (t ? C.base360grabbing : C.base360) : C.base],
                  })
                },
              },
            ]),
            n
          )
        })(v.a.Component),
        C = R.a.create(function (e) {
          return { base: { cursor: 'pointer' }, base360: { cursor: 'grab' }, base360grabbing: { cursor: 'grabbing' } }
        })
      t.a = g
    },
    aoyV: function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        u = n('1Pcy'),
        c = n.n(u),
        s = n('5Yy7'),
        l = n.n(s),
        d = n('2VqO'),
        p = n.n(d),
        f = n('KEM+'),
        y = n.n(f),
        h = (n('2G9S'), n('ERkP')),
        v = n.n(h),
        E = n('Qwev'),
        _ = n('Q0n6'),
        m = n('rHpw'),
        b = n('MWbm'),
        R = (function (e) {
          l()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              y()(c()(e), '_playInitiatedTime', null),
              y()(c()(e), 'state', { waitingForPlayback: !1 }),
              y()(c()(e), '_checkPlayRequest', function (t, n) {
                var a = n && 'PLAY_REQUESTED' === n.controls.playState,
                  r = a && (!t || 'PLAY_REQUESTED' !== t.controls.playState)
                a ? r && e._startPlaybackWait() : e._clearPlaybackWait()
              }),
              y()(c()(e), '_clearPlaybackWait', function () {
                clearInterval(e._bufferingCheck), (e._playInitiatedTime = null)
              }),
              y()(c()(e), '_startPlaybackWait', function () {
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
                    var t = Object(_.e)(e)
                    return (t && t.isBuffering) || this.state.waitingForPlayback
                      ? v.a.createElement(
                          b.a,
                          { pointerEvents: 'none', style: [m.a.absoluteFill, O.buttonContainer] },
                          v.a.createElement(E.a, { color: m.a.theme.colors.white, size: 60 }),
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
        })(v.a.Component)
      y()(R, 'defaultProps', { waitingForPlaybackThresholdMs: 1e3 })
      var O = m.a.create(function (e) {
        return { buttonContainer: { justifyContent: 'center', alignItems: 'center' } }
      })
      t.a = R
    },
    fZNH: function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        u = n('1Pcy'),
        c = n.n(u),
        s = n('5Yy7'),
        l = n.n(s),
        d = n('2VqO'),
        p = n.n(d),
        f = n('KEM+'),
        y = n.n(f),
        h = (n('2G9S'), n('uFXj'), n('ERkP')),
        v = n.n(h),
        E = n('Q0n6'),
        _ = n('3XMw'),
        m = n.n(_),
        b = n('CKsB'),
        R = n('rHpw'),
        O = n('kCRK'),
        g = n('shC7'),
        C = n('MWbm'),
        S = m.a.d26d8730,
        T = m.a.f1b6bcec,
        M = (function (e) {
          l()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              y()(c()(e), 'state', { openContextMenu: !1, positionX: 0, positionY: 0 }),
              y()(c()(e), '_handleOpenContextMenu', function (t) {
                return function (n) {
                  var a
                  if (
                    (n.preventDefault(),
                    null != t &&
                      null !== (a = t.source) &&
                      void 0 !== a &&
                      a.id &&
                      (t.source.type === O.e.TWEET || t.source.type === O.e.BROADCAST))
                  ) {
                    document.addEventListener('click', e._handleCloseContextMenu)
                    var r = n.currentTarget.getBoundingClientRect()
                    e.setState({ openContextMenu: !0, positionX: n.clientX - r.left, positionY: n.clientY - r.top })
                  }
                }
              }),
              y()(c()(e), '_handleCloseContextMenu', function () {
                e.state.openContextMenu &&
                  (document.removeEventListener('click', e._handleCloseContextMenu),
                  e.setState({ openContextMenu: !1 }))
              }),
              y()(c()(e), '_handleCopyVideoAddress', function () {
                document.addEventListener('copy', e._handleCopy), document.execCommand('copy')
              }),
              y()(c()(e), '_handleCopy', function (t) {
                var n,
                  a,
                  r = e.props.playerState,
                  o = null == r || null === (n = r.source) || void 0 === n ? void 0 : n.id,
                  i = null == r || null === (a = r.source) || void 0 === a ? void 0 : a.type
                o &&
                  i &&
                  t.clipboardData &&
                  (i === O.e.BROADCAST
                    ? t.clipboardData.setData('text/plain', 'https://twitter.com/i/broadcasts/'.concat(o))
                    : i === O.e.TWEET &&
                      t.clipboardData.setData('text/plain', 'https://twitter.com/i/status/'.concat(o)),
                  t.preventDefault()),
                  document.removeEventListener('copy', e._handleCopy)
              }),
              y()(c()(e), '_isGif', function (e) {
                var t = e && Object(E.j)(e)
                return t && t.contentType === O.a.GIF
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
                    a = this.state,
                    r = a.openContextMenu,
                    o = a.positionX,
                    i = a.positionY,
                    u = this._isGif(n),
                    c = g.a.getConstants().isRTL ? { top: i, right: o } : { top: i, left: o }
                  return v.a.createElement(
                    C.a,
                    { onContextMenu: this._handleOpenContextMenu(n), style: R.a.absoluteFill },
                    t,
                    r &&
                      v.a.createElement(
                        C.a,
                        { style: [I.menuWrapper, c] },
                        v.a.createElement(b.a, { actionText: u ? T : S, onClick: this._handleCopyVideoAddress }),
                      ),
                  )
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      t.a = M
      var I = R.a.create(function (e) {
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
        return a
      }),
        n.d(t, 'd', function () {
          return r
        }),
        n.d(t, 'a', function () {
          return o
        }),
        n.d(t, 'c', function () {
          return i
        }),
        n.d(t, 'e', function () {
          return u
        })
      var a = { VISIT: 'url', WATCH: 'watch' },
        r = { watch_now: 'watch_now', visit_site: 'visit_site', shop: 'shop', see_more: 'see_more', go_to: 'go_to' },
        o = { MEDIA: 'media_entity', GIF: 'gif', VMAP: 'vmap', BROADCAST: 'broadcast' },
        i = { AD: 'ad', CONTENT: 'content' },
        u = { BROADCAST: 'broadcast', DM: 'dm', TWEET: 'tweet' }
    },
    oH2E: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        o = n('VrFO'),
        i = n.n(o),
        u = n('Y9Ll'),
        c = n.n(u),
        s = n('1Pcy'),
        l = n.n(s),
        d = n('5Yy7'),
        p = n.n(d),
        f = n('2VqO'),
        y = n.n(f),
        h = n('KEM+'),
        v = n.n(h),
        E = (n('2G9S'), n('ERkP')),
        _ = n.n(E),
        m = n('3rX5'),
        b = n('cm6r'),
        R = n('rHpw'),
        O = n('mXq/'),
        g = n('Q0n6'),
        C = (function (e) {
          p()(n, e)
          var t = y()(n)
          function n() {
            var e
            i()(this, n)
            for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              v()(l()(e), '_playVideo', function (e) {
                return function (t) {
                  e && e.play(), t && t.stopPropagation()
                }
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
                    t = e.playerApi,
                    n = e.playerState,
                    a = e.withPlayButton
                  if (!(t && n && n.controls && n.controls.isPosterShown)) return null
                  var o = Object(g.j)(n),
                    i = this.props.imageSrc || n.posterImage,
                    u = Object(g.l)(o)
                  return _.a.createElement(
                    b.a,
                    r()({}, a ? null : { accessibilityLabel: u }, {
                      focusable: !a,
                      interactiveStyles: null,
                      onPress: this._playVideo(t),
                      style: [R.a.absoluteFill, S.buttonContainer],
                    }),
                    i && _.a.createElement(m.a, { resizeMode: 'cover', source: i, style: R.a.absoluteFill }),
                    a && _.a.createElement(O.a, { accessibilityLabel: u, onPress: this._playVideo(t), type: 'video' }),
                  )
                },
              },
            ]),
            n
          )
        })(_.a.Component)
      v()(C, 'defaultProps', { withPlayButton: !0 })
      var S = R.a.create(function (e) {
        return { buttonContainer: { justifyContent: 'center', alignItems: 'center' } }
      })
      t.a = C
    },
    zCLo: function (e, t, n) {
      'use strict'
      var a = n('KEM+'),
        r = n.n(a),
        o = (n('Blm6'), n('ERkP')),
        i = n.n(o),
        u = n('wD1h'),
        c = n('oLZl'),
        s = n('rHpw'),
        l = n('MWbm')
      t.a = function (e) {
        var t,
          n = i.a.useRef(null),
          a = e.enabled,
          o = e.playerApi,
          d = e.playerState
        if (!a) return e.children || null
        var p = function (e) {
            o && d && (d.isPlaying ? o.pause() : o.play())
          },
          f = function (e) {
            if (o && d) {
              var t = parseInt(e.key, 10) / 10
              o.scrubToFraction(t)
            }
          }
        return i.a.createElement(
          u.a,
          {
            containerRef: n,
            enabled: !0,
            handlers:
              ((t = {}),
              r()(t, c.a.K, p),
              r()(t, c.a.M, function (e) {
                o && d && (d.isMuted ? o.unmute() : o.mute())
              }),
              r()(t, c.a.Space, p),
              r()(t, c.a.C, function (e) {
                o && d && o.toggleCaptions()
              }),
              r()(t, c.a.Home, function (e) {
                o && d && o.scrubToFraction(0)
              }),
              r()(t, c.a[0], f),
              r()(t, c.a[1], f),
              r()(t, c.a[2], f),
              r()(t, c.a[3], f),
              r()(t, c.a[4], f),
              r()(t, c.a[5], f),
              r()(t, c.a[6], f),
              r()(t, c.a[7], f),
              r()(t, c.a[8], f),
              r()(t, c.a[9], f),
              r()(t, c.a.End, function (e) {
                o && d && o.scrubToFraction(1)
              }),
              t),
          },
          i.a.createElement(l.a, { focusable: !0, ref: n, style: s.a.absoluteFill }, e.children),
        )
      }
    },
  },
])
//# sourceMappingURL=WIPED
