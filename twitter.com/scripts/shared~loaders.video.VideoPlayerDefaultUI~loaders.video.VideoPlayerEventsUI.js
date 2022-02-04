;(window.webpackJsonp = window.webpackJsonp || []).push([
  [21],
  {
    '+xEG': function (e, t, a) {
      'use strict'
      var n = a('RhWx'),
        r = a.n(n),
        i = a('VrFO'),
        o = a.n(i),
        l = a('Y9Ll'),
        s = a.n(l),
        c = a('1Pcy'),
        u = a.n(c),
        p = a('5Yy7'),
        d = a.n(p),
        f = a('2VqO'),
        y = a.n(f),
        v = a('KEM+'),
        b = a.n(v),
        m = (a('2G9S'), a('LW0h'), a('7x/C'), a('5BYb'), a('ERkP')),
        h = a.n(m),
        g = a('t62R'),
        _ = a('Zl35'),
        E = a('3XMw'),
        O = a.n(E),
        R = a('yiKp'),
        C = a.n(R),
        w = a('Lsrn'),
        S = a('k/Ka'),
        P = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(S.a)(
            'svg',
            C()(
              C()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [w.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            h.a.createElement(
              'g',
              null,
              h.a.createElement('path', {
                d: 'M17.273 15.78c-.148 0-.298-.045-.43-.137l-4.326-3.03c-.2-.14-.32-.368-.32-.613V7.89c0-.414.336-.75.75-.75s.75.336.75.75v3.72l4.007 2.806c.34.237.422.705.185 1.044-.147.208-.38.32-.617.32z',
              }),
              h.a.createElement('path', {
                d: 'M12.947 1.25c-4.633 0-8.713 3.002-10.172 7.298L1.51 5.538c-.158-.382-.594-.564-.98-.403-.382.16-.56.6-.4.982L2.175 11c.08.19.233.338.424.41.095.037.194.053.294.05.102-.005.203-.03.296-.074l4.778-2.282c.374-.178.532-.625.354-1-.178-.374-.63-.53-1-.352L4.103 9.29c1.175-3.837 4.764-6.54 8.845-6.54 5.1 0 9.25 4.15 9.25 9.25s-4.15 9.25-9.25 9.25c-3.337 0-6.428-1.81-8.066-4.72-.2-.36-.658-.488-1.02-.285-.36.203-.488.66-.285 1.02 1.903 3.383 5.495 5.484 9.373 5.484 5.928 0 10.75-4.823 10.75-10.75S18.874 1.25 12.948 1.25z',
              }),
            ),
          )
        }
      P.metadata = { width: 24, height: 24 }
      var k = P,
        I = a('Wms4'),
        T = a('vCAy'),
        M = a('rHpw'),
        A = a('Q0n6'),
        L = a('kCRK'),
        D = O.a.ed617674,
        V = O.a.j190bf19,
        j = O.a.f1ad0df1,
        B = O.a.ef16ab2b,
        x = (function (e) {
          d()(a, e)
          var t = y()(a)
          function a() {
            var e
            o()(this, a)
            for (var n = arguments.length, i = new Array(n), l = 0; l < n; l++) i[l] = arguments[l]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              b()(u()(e), '_renderLeftBadges', function (t) {
                var a = e.props,
                  n = a.additionalBadges,
                  i = a.mediaAccessibilityLabel,
                  o = [],
                  l = Object(A.e)(t)
                if (
                  ((null == l ? void 0 : l.contentType) === L.a.GIF &&
                    o.push(h.a.createElement(I.a, { bold: !0, key: 'gif', type: 'gif' })),
                  i && o.push(h.a.createElement(I.a, { altLabel: i, bold: !0, key: 'alt' })),
                  0 === o.length)
                ) {
                  var s = [e._renderDurationBadge(t), e._renderViewCountBadge(t)].concat(n).filter(Boolean)
                  o.push.apply(o, r()(s))
                }
                return o.length > 0 ? o : null
              }),
              b()(u()(e), '_renderRightBadges', function (t) {
                var a = [e._renderTimecodeBadge(t), e._render360Badge(t)]
                  .concat(e.props.additionalBadges)
                  .filter(Boolean)
                return a.length > 0 ? a : null
              }),
              b()(u()(e), '_render360Badge', function (e) {
                var t = Object(A.e)(e)
                if (t && t.is360) return h.a.createElement(I.a, { key: '360-badge' }, D)
              }),
              b()(u()(e), '_renderTimecodeBadge', function (e) {
                var t = Object(A.i)(Object(A.e)(e))
                if (t && t >= 1)
                  return h.a.createElement(
                    I.a,
                    { key: 'timecode-badge' },
                    h.a.createElement(g.b, null, h.a.createElement(k, { style: N.timecodeIcon }), Object(A.b)(t)),
                  )
              }),
              b()(u()(e), '_renderDurationBadge', function (t) {
                var a = e.props.playerDisplayOptions
                if (a && a.badgeConfiguration && a.badgeConfiguration.hideDuration) return null
                var n = Object(A.j)(t)
                return n && n.isLive
                  ? h.a.createElement(I.a, { key: 'live-badge', type: 'live' }, V)
                  : h.a.createElement(
                      I.a,
                      { key: 'time-badge' },
                      h.a.createElement(_.a, { periodic: !0 }, function (e) {
                        var t = e.playerState
                        return h.a.createElement(G, { key: 'time-badge-time', playerState: t })
                      }),
                    )
              }),
              b()(u()(e), '_renderViewCountBadge', function (t) {
                var a = e.props.playerDisplayOptions
                if (a && a.badgeConfiguration && a.badgeConfiguration.hideViewCount) return null
                var n = Object(A.k)(t),
                  r = n && Object(A.a)(n)
                return r ? h.a.createElement(I.a, { key: 'view-count-badge' }, r) : null
              }),
              e
            )
          }
          return (
            s()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.playerState,
                    a = e.position,
                    n = e.show
                  if (!t || !n) return null
                  var r = 'left' === a ? this._renderLeftBadges(t) : this._renderRightBadges(t)
                  return r ? h.a.createElement(T.a, { align: a }, r) : null
                },
              },
            ]),
            a
          )
        })(h.a.PureComponent)
      b()(x, 'defaultProps', { show: !0 })
      var N = M.a.create(function (e) {
          return {
            root: { position: 'relative' },
            rightBadges: { position: 'absolute', right: e.spaces.space12, bottom: e.spaces.space12 },
            leftBadges: { position: 'absolute', left: e.spaces.space12, bottom: e.spaces.space12 },
            timecodeIcon: { marginRight: e.spaces.space2, marginBottom: e.spaces.space1, height: '1em' },
          }
        }),
        G = h.a.memo(
          function (e) {
            var t = e.playerState,
              a = Object(A.e)(t)
            if (!a) return null
            var n = a.advertiserName,
              r = a.currentTimeMs,
              i = a.displayType,
              o = a.durationMs
            if (o && (t.isPlaying || r < o)) {
              var l = Object(A.b)((o - r) / 1e3)
              return i === L.c.AD
                ? n
                  ? h.a.createElement(g.b, null, B({ advertiserName: n, timeRemaining: l }))
                  : h.a.createElement(g.b, null, j({ timeRemaining: l }))
                : h.a.createElement(g.b, null, l)
            }
            return o ? h.a.createElement(g.b, null, Object(A.b)(o / 1e3)) : null
          },
          function (e, t) {
            var a = Object(A.e)(e.playerState),
              n = Object(A.e)(t.playerState)
            if (!n || !a) return !1
            if (
              ['advertiserName', 'durationMs', 'displayType'].some(function (e) {
                return n[e] !== a[e]
              })
            )
              return !1
            var r = function (e) {
              return e && Object(A.b)((e.durationMs - e.currentTimeMs) / 1e3)
            }
            return !(r(a) !== r(n))
          },
        )
      t.a = x
    },
    '0nHQ': function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return O
      })
      var n = a('VrFO'),
        r = a.n(n),
        i = a('Y9Ll'),
        o = a.n(i),
        l = a('1Pcy'),
        s = a.n(l),
        c = a('5Yy7'),
        u = a.n(c),
        p = a('2VqO'),
        d = a.n(p),
        f = a('KEM+'),
        y = a.n(f),
        v = (a('2G9S'), a('ERkP')),
        b = a.n(v),
        m = a('Yyzf'),
        h = a('3XMw'),
        g = a.n(h),
        _ = g.a.c1658fc6,
        E = {
          BROADCAST_REQUEST_ERROR: _,
          BROADCAST_ENDED_NO_REPLAY: g.a.ce871584,
          BROADCAST_NOT_FOUND: g.a.c101eb95,
          CONFIG_USER_DATA_NETWORK_ERROR: _,
          CONFIG_NETWORK_ERROR: _,
          DMCA_TAKEDOWN_ERROR: g.a.gb24a513,
          EUROPEAN_COPYRIGHT_VIOLATION: g.a.hcaf3e62,
          LIVE_PARSE_ERROR: _,
          LIVE_STREAM_ACQUISITION_MISSING_CONTENT_ID: _,
          LIVE_STREAM_ACQUISITION_NETWORK_ERROR: _,
          LIVE_VIDEO_GEOBLOCK_ERROR: g.a.if05c037,
          LIVE_VIDEO_COPYRIGHT_VIOLATION_ERROR: g.a.d420171a,
          LIVE_VIDEO_GEOLOCATION_PROMPT: g.a.b1eb72f9,
          MEDIA_NOT_SUPPORTED: g.a.c057680b,
          MEDIA_SRC_INVALID_ERROR: _,
          MEDIA_ABORTED: _,
          MEDIA_NETWORK_ERROR: _,
          MEDIA_DECODE_ERROR: _,
          MEDIA_GEOBLOCK_ERROR: g.a.i5dfae6e,
          MEDIA_UNKNOWN_CODE_ERROR: _,
          ORIGINAL_CONTEXT_DELETED: g.a.c2388276,
          UNSUPPORTED_TYPE: _,
          VMAP_NETWORK_ERROR: _,
          VMAP_PARSE_ERROR: _,
        },
        O = (function (e) {
          u()(a, e)
          var t = d()(a)
          function a() {
            var e
            r()(this, a)
            for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              y()(s()(e), '_handleReload', function () {
                var t = e.props,
                  a = t.playerApi,
                  n = t.playerState
                if (n && n.errorInfo && n.errorInfo.canRetry)
                  return function () {
                    a && a.reload()
                  }
              }),
              e
            )
          }
          return (
            o()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.displayBackgroundImage,
                    a = void 0 !== t && t,
                    n = e.imageSrc,
                    r = e.playerApi,
                    i = e.playerState
                  return r && i
                    ? b.a.createElement(m.a, {
                        displayBackgroundImage: a,
                        errorMessage: this._buildMessage(),
                        iconPlayError: 'BROADCAST_NOT_FOUND' === i.error,
                        imageSrc: n || i.posterImage,
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
                      a = e.errorData
                    if ('LIVE_VIDEO_COPYRIGHT_VIOLATION_ERROR' === t || 'EUROPEAN_COPYRIGHT_VIOLATION' === t) {
                      var n = (a || {}).copyrightHolder
                      return n ? E[t]({ holder: n }) : _
                    }
                    return (t && E[t]) || _
                  }
                },
              },
            ]),
            a
          )
        })(b.a.Component)
    },
    '5VhU': function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return P
      })
      var n = a('yiKp'),
        r = a.n(n),
        i = a('VrFO'),
        o = a.n(i),
        l = a('Y9Ll'),
        s = a.n(l),
        c = a('1Pcy'),
        u = a.n(c),
        p = a('5Yy7'),
        d = a.n(p),
        f = a('2VqO'),
        y = a.n(f),
        v = a('KEM+'),
        b = a.n(v),
        m = (a('2G9S'), a('+KXO'), a('z84I'), a('ERkP')),
        h = a.n(m),
        g = a('6RCM'),
        _ = a('3XMw'),
        E = a.n(_),
        O = a('rHpw'),
        R = a('MWbm'),
        C = function (e) {
          return function () {
            var t = e.nativeEvent.layout,
              a = t.height
            return { dimensions: { width: t.width, height: a } }
          }
        },
        w = 0.1875,
        S = E.a.d2c9614f,
        P = (function (e) {
          d()(a, e)
          var t = y()(a)
          function a() {
            var e
            o()(this, a)
            for (var n = arguments.length, i = new Array(n), l = 0; l < n; l++) i[l] = arguments[l]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              b()(u()(e), 'state', { dimensions: { width: 0, height: 0 } }),
              b()(u()(e), '_renderGuests', function (t, a) {
                var n = Object.keys(t.guests).map(function (e) {
                    var a = t.audioLevels.guests[e] || 0
                    return r()(r()({}, t.guests[e]), {}, { AudioLevel: a / 100 })
                  }),
                  i = e.state.dimensions
                if (!i.width || !n.length) return null
                var o = w * i.width
                return h.a.createElement(
                  R.a,
                  { style: k.guestIndicators },
                  n.map(function (e) {
                    return h.a.createElement(
                      R.a,
                      { key: e.ParticipantIndex, style: k.guestIndicator },
                      h.a.createElement(g.a, {
                        accessibilityLabel: S,
                        audioLevel: e.AudioLevel,
                        participantIndex: e.ParticipantIndex,
                        paused: !a.isPlaying,
                        profileImageUrl: e.ProfileUrl,
                        size: o,
                      }),
                    )
                  }),
                )
              }),
              b()(u()(e), '_handleLayout', function (t) {
                e.setState(C(t))
              }),
              e
            )
          }
          return (
            s()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.guestsState,
                    a = e.playerState
                  return t && t.guests && a
                    ? h.a.createElement(
                        R.a,
                        { onLayout: this._handleLayout, pointerEvents: 'none', style: k.overlay },
                        this._renderGuests(t, a),
                      )
                    : null
                },
              },
            ]),
            a
          )
        })(h.a.Component),
        k = O.a.create(function (e) {
          return {
            overlay: r()(r()({}, O.a.absoluteFillObject), {}, { flexGrow: 1 }),
            guestIndicators: { marginTop: e.spaces.space20, marginLeft: e.spaces.space20, flexDirection: 'row' },
            guestIndicator: { marginRight: e.spaces.space16 },
          }
        })
    },
    '6RCM': function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        i = a('m3Bd'),
        o = a.n(i),
        l = a('ERkP'),
        s = a.n(l),
        c = a('U+Jl'),
        u = a('rHpw'),
        p = a('MWbm')
      function d(e) {
        var t = { backgroundColor: e.color }
        return s.a.createElement(
          s.a.Fragment,
          null,
          s.a.createElement(p.a, { style: [f.overlay, t] }),
          s.a.createElement(p.a, { style: [f.overlay, f.blackOverlay] }),
        )
      }
      var f = u.a.create(function (e) {
          return {
            overlay: {
              position: 'absolute',
              width: '100%',
              height: '100%',
              borderRadius: e.borderRadii.xLarge,
              backgroundColor: e.colors.translucentBlack77,
            },
            blackOverlay: { backgroundColor: 'rgba(0,0,0,0.2)' },
          }
        }),
        y =
          (a('yH/f'),
          Object.freeze([
            { label: 'Orange', value: 'rgb(245, 166, 35)' },
            { label: 'Purple', value: 'rgb(171, 112, 212)' },
            { label: 'Green', value: 'rgb(153, 206, 98)' },
            { label: 'Periwinkle', value: 'rgb(92, 117, 220)' },
            { label: 'Red', value: 'rgb(213, 77, 129)' },
            { label: 'Yellow', value: 'rgb(222, 213, 105)' },
            { label: 'Teal', value: 'rgb(94, 213, 177)' },
            { label: 'Pink', value: 'rgb(230, 151, 220)' },
            { label: 'Brown', value: 'rgb(146, 100, 62)' },
            { label: 'VividTangerine', value: 'rgb(255, 169, 138)' },
            { label: 'SkyBlue', value: 'rgb(132, 225, 235)' },
            { label: 'Fern', value: 'rgb(105, 171, 99)' },
            { label: 'Carnation', value: 'rgb(248, 91, 91)' },
          ]))
      var v = a('3rX5'),
        b = a('xJf9'),
        m = a('8eiz'),
        h = ['profileImageUrl']
      function g(e) {
        var t = e.profileImageUrl,
          a = void 0 === t ? _ : t,
          n = o()(e, h),
          i = Object(m.c)(n.size),
          l = r()(r()({}, i), {}, { transform: [{ scale: ''.concat(n.scale) }] })
        return s.a.createElement(
          p.a,
          { style: [l, b.a.transitionTransform, E.scalingAvatar] },
          s.a.createElement(v.a, { defaultSource: _, source: a, style: i }),
        )
      }
      var _ = 'https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png',
        E = u.a.create(function (e) {
          return { scalingAvatar: { position: 'absolute', borderRadius: e.borderRadii.infinite, overflow: 'hidden' } }
        })
      function O(e) {
        var t,
          a,
          n = e.size,
          r = n * R,
          i = e.paused ? 0 : e.audioLevel,
          o = ((t = e.participantIndex), (a = (t - 1) % y.length), (y[a] || y[0]).value)
        return s.a.createElement(
          s.a.Fragment,
          null,
          s.a.createElement(d, { color: o }),
          s.a.createElement(c.a, { scale: C(i), size: r, translate: S(i, n) }),
          s.a.createElement(c.a, { scale: C(i), size: r, translate: S(i, n) }),
          s.a.createElement(c.a, { scale: C(i), size: r, translate: S(i, n) }),
          s.a.createElement(g, { profileImageUrl: e.profileImageUrl, scale: w(i), size: r }),
        )
      }
      var R = 0.692,
        C = function (e) {
          return 0.95 + (0.2 + Object(m.a)(0.5)) * e
        },
        w = function (e) {
          return 1 + 0.05 * e
        },
        S = function (e, t) {
          return { x: Object(m.b)() * e * Object(m.a)(0.05 * t), y: Object(m.b)() * e * Object(m.a)(0.05 * t) }
        },
        P = ['accessibilityLabel']
      var k = u.a.create(function (e) {
        return { root: { userSelect: 'none', overflow: 'hidden', justifyContent: 'center', alignItems: 'center' } }
      })
      t.a = function (e) {
        var t = e.accessibilityLabel,
          a = o()(e, P),
          n = a.size,
          i = r()({}, Object(m.c)(n))
        return s.a.createElement(p.a, { accessibilityLabel: t, style: [i, k.root] }, s.a.createElement(O, a))
      }
    },
    Ur4q: function (e, t, a) {
      'use strict'
      var n = a('VrFO'),
        r = a.n(n),
        i = a('Y9Ll'),
        o = a.n(i),
        l = a('1Pcy'),
        s = a.n(l),
        c = a('5Yy7'),
        u = a.n(c),
        p = a('2VqO'),
        d = a.n(p),
        f = a('KEM+'),
        y = a.n(f),
        v = (a('2G9S'), a('ERkP')),
        b = a.n(v),
        m = a('kCRK'),
        h = a('Q0n6'),
        g = a('7nmT'),
        _ = a.n(g),
        E = a('rHpw'),
        O = a('MWbm'),
        R = (function (e) {
          u()(a, e)
          var t = d()(a)
          function a() {
            var e
            r()(this, a)
            for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              y()(s()(e), 'state', { grabbing: !1 }),
              y()(s()(e), '_firstClick', !0),
              y()(s()(e), '_componentRef', b.a.createRef()),
              y()(s()(e), '_handleMouseDown', function () {
                var t = e.props.playerState,
                  a = t && Object(h.e)(t)
                a && a.is360 && e._setEventListener('mousemove', e._handleMouseMove),
                  e._setEventListener('mouseup', e._handleMouseUp)
              }),
              y()(s()(e), '_handleMouseMove', function () {
                var t = e.props.playerState,
                  a = t && Object(h.e)(t)
                a && a.is360 && (e.setState({ grabbing: !0 }), e._setEventListener('mouseup', e._handleGrabRelease)),
                  e._unsetEventListener('mousemove', e._handleMouseMove),
                  e._unsetEventListener('mouseup', e._handleMouseUp)
              }),
              y()(s()(e), '_handleGrabRelease', function () {
                e.setState({ grabbing: !1 }), e._unsetEventListener('mouseup', e._handleGrabRelease)
              }),
              y()(s()(e), '_handleMouseUp', function (t) {
                e._unsetEventListener('mousemove', e._handleMouseMove),
                  e._unsetEventListener('mouseup', e._handleMouseUp),
                  e._handleClick(t)
              }),
              y()(s()(e), '_handleClick', function (t) {
                var a = e.props,
                  n = a.hideControls,
                  r = a.isTouchOnlyUI,
                  i = a.onClick,
                  o = a.playerApi,
                  l = a.playerDisplayOptions,
                  s = a.playerState
                if (i) return i(t)
                if (o && s) {
                  var c = Object(h.e)(s),
                    u = c && c.contentType && c.contentType === m.a.GIF
                  if (e._firstClick && !u && ((e._firstClick = !1), s.isMuted)) return void o.unmute()
                  if (r && n) return
                  var p = o.pause,
                    d = o.play,
                    f = o.replay,
                    y = c && c.isLive,
                    v = l && l.liveClickthrough,
                    b = c && v && v.enabled && c.isLive && s.isPlaying && !c.is360
                  if (r && n) return
                  if (u) return void (s.isPlaying ? p() : d())
                  c && c.currentTimeMs === c.durationMs
                    ? f()
                    : s.isPlaying
                    ? b
                      ? e._handleLiveClickthrough()
                      : y || p()
                    : d()
                }
              }),
              y()(s()(e), '_setEventListener', function (t, a) {
                var n = _.a.findDOMNode(e._componentRef.current)
                n && n.addEventListener(t, a)
              }),
              y()(s()(e), '_unsetEventListener', function (t, a) {
                var n = _.a.findDOMNode(e._componentRef.current)
                n && n.removeEventListener(t, a)
              }),
              y()(s()(e), '_handleLiveClickthrough', function () {
                var t = e.props,
                  a = t.playerApi,
                  n = t.playerDisplayOptions,
                  r = t.playerState,
                  i = n && n.liveClickthrough,
                  o = r && Object(h.e)(r)
                if (i && r && o && a) {
                  var l = i.url || r.eventUrl || o.broadcastShareUrl
                  l && (window.open(l, i.target || '_blank'), a.liveClickthroughClicked())
                }
              }),
              e
            )
          }
          return (
            o()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.playerState,
                    t = this.state.grabbing,
                    a = e && Object(h.e)(e),
                    n = a && a.is360
                  return b.a.createElement(O.a, {
                    onMouseDown: this._handleMouseDown,
                    ref: this._componentRef,
                    style: [E.a.absoluteFill, n ? (t ? C.base360grabbing : C.base360) : C.base],
                  })
                },
              },
            ]),
            a
          )
        })(b.a.Component),
        C = E.a.create(function (e) {
          return { base: { cursor: 'pointer' }, base360: { cursor: 'grab' }, base360grabbing: { cursor: 'grabbing' } }
        })
      t.a = R
    },
    VLhD: function (e, t, a) {
      'use strict'
      a.d(t, 'b', function () {
        return i
      }),
        a.d(t, 'a', function () {
          return o
        }),
        a.d(t, 'c', function () {
          return l
        }),
        a.d(t, 'd', function () {
          return s
        })
      a('yH/f')
      var n = a('mf6X'),
        r = a('rOXj'),
        i = a('aITJ').b.isMobileOS() && r.a.isTouchSupported(),
        o = Object.freeze({
          A11YHook: 'VideoPlayerDefaultUI-A11YHook',
          ControlBar: 'VideoPlayerDefaultUI-ControlBar',
          HashtagHighlight: 'VideoPlayerDefaultUI-HashtagHighlight',
          Root: 'VideoPlayerDefaultUI-Root',
          VideoCTA: 'VideoPlayerDefaultUI-VideoCTA',
        })
      function l(e, t, a) {
        var n = e.isPlaying,
          r = !!e.error,
          i = e.controls.isPosterShown,
          l = r || i
        if (a) {
          var s = 0 !== t.click.size,
            c = t.touch.has(o.ControlBar)
          return l || (n && !s && !c)
        }
        var u = !t.focused.size && !t.mouseover.has(o.Root),
          p = t.mouseover.size > 1,
          d = 0 !== t.mousemove.size
        return l || (n && u) || (n && !t.focused.size && !d && !p)
      }
      var s = function (e, t) {
        switch (e) {
          case 'gif':
            return n.a.GIF
          case 'broadcast':
            return t ? n.a.LIVE_BROADCAST : n.a.REPLAY_BROADCAST
          case 'media_entity':
          case 'vmap':
          default:
            return n.a.VOD
        }
      }
    },
    aoyV: function (e, t, a) {
      'use strict'
      var n = a('VrFO'),
        r = a.n(n),
        i = a('Y9Ll'),
        o = a.n(i),
        l = a('1Pcy'),
        s = a.n(l),
        c = a('5Yy7'),
        u = a.n(c),
        p = a('2VqO'),
        d = a.n(p),
        f = a('KEM+'),
        y = a.n(f),
        v = (a('2G9S'), a('ERkP')),
        b = a.n(v),
        m = a('Qwev'),
        h = a('Q0n6'),
        g = a('rHpw'),
        _ = a('MWbm'),
        E = (function (e) {
          u()(a, e)
          var t = d()(a)
          function a() {
            var e
            r()(this, a)
            for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              y()(s()(e), '_playInitiatedTime', null),
              y()(s()(e), 'state', { waitingForPlayback: !1 }),
              y()(s()(e), '_checkPlayRequest', function (t, a) {
                var n = a && 'PLAY_REQUESTED' === a.controls.playState,
                  r = n && (!t || 'PLAY_REQUESTED' !== t.controls.playState)
                n ? r && e._startPlaybackWait() : e._clearPlaybackWait()
              }),
              y()(s()(e), '_clearPlaybackWait', function () {
                clearInterval(e._bufferingCheck), (e._playInitiatedTime = null)
              }),
              y()(s()(e), '_startPlaybackWait', function () {
                var t = e.props.waitingForPlaybackThresholdMs
                e._clearPlaybackWait(),
                  (e._playInitiatedTime = Date.now()),
                  (e._bufferingCheck = setInterval(function () {
                    if (!e._playInitiatedTime) return e._clearPlaybackWait()
                    var a = e._playInitiatedTime
                    Date.now() - a > t && (e.setState({ waitingForPlayback: !0 }), e._clearPlaybackWait())
                  }, 100))
              }),
              e
            )
          }
          return (
            o()(
              a,
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
                    var t = Object(h.e)(e)
                    return (t && t.isBuffering) || this.state.waitingForPlayback
                      ? b.a.createElement(
                          _.a,
                          { pointerEvents: 'none', style: [g.a.absoluteFill, O.buttonContainer] },
                          b.a.createElement(m.a, { color: g.a.theme.colors.white, size: 60 }),
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
            a
          )
        })(b.a.Component)
      y()(E, 'defaultProps', { waitingForPlaybackThresholdMs: 1e3 })
      var O = g.a.create(function (e) {
        return { buttonContainer: { justifyContent: 'center', alignItems: 'center' } }
      })
      t.a = E
    },
    fZNH: function (e, t, a) {
      'use strict'
      var n = a('VrFO'),
        r = a.n(n),
        i = a('Y9Ll'),
        o = a.n(i),
        l = a('1Pcy'),
        s = a.n(l),
        c = a('5Yy7'),
        u = a.n(c),
        p = a('2VqO'),
        d = a.n(p),
        f = a('KEM+'),
        y = a.n(f),
        v = (a('2G9S'), a('uFXj'), a('ERkP')),
        b = a.n(v),
        m = a('Q0n6'),
        h = a('3XMw'),
        g = a.n(h),
        _ = a('CKsB'),
        E = a('rHpw'),
        O = a('kCRK'),
        R = a('shC7'),
        C = a('MWbm'),
        w = g.a.d26d8730,
        S = g.a.f1b6bcec,
        P = (function (e) {
          u()(a, e)
          var t = d()(a)
          function a() {
            var e
            r()(this, a)
            for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              y()(s()(e), 'state', { openContextMenu: !1, positionX: 0, positionY: 0 }),
              y()(s()(e), '_handleOpenContextMenu', function (t) {
                return function (a) {
                  var n
                  if (
                    (a.preventDefault(),
                    null != t &&
                      null !== (n = t.source) &&
                      void 0 !== n &&
                      n.id &&
                      (t.source.type === O.e.TWEET || t.source.type === O.e.BROADCAST))
                  ) {
                    document.addEventListener('click', e._handleCloseContextMenu)
                    var r = a.currentTarget.getBoundingClientRect()
                    e.setState({ openContextMenu: !0, positionX: a.clientX - r.left, positionY: a.clientY - r.top })
                  }
                }
              }),
              y()(s()(e), '_handleCloseContextMenu', function () {
                e.state.openContextMenu &&
                  (document.removeEventListener('click', e._handleCloseContextMenu),
                  e.setState({ openContextMenu: !1 }))
              }),
              y()(s()(e), '_handleCopyVideoAddress', function () {
                document.addEventListener('copy', e._handleCopy), document.execCommand('copy')
              }),
              y()(s()(e), '_handleCopy', function (t) {
                var a,
                  n,
                  r = e.props.playerState,
                  i = null == r || null === (a = r.source) || void 0 === a ? void 0 : a.id,
                  o = null == r || null === (n = r.source) || void 0 === n ? void 0 : n.type
                i &&
                  o &&
                  t.clipboardData &&
                  (o === O.e.BROADCAST
                    ? t.clipboardData.setData('text/plain', 'https://twitter.com/i/broadcasts/'.concat(i))
                    : o === O.e.TWEET &&
                      t.clipboardData.setData('text/plain', 'https://twitter.com/i/status/'.concat(i)),
                  t.preventDefault()),
                  document.removeEventListener('copy', e._handleCopy)
              }),
              y()(s()(e), '_isGif', function (e) {
                var t = e && Object(m.j)(e)
                return t && t.contentType === O.a.GIF
              }),
              e
            )
          }
          return (
            o()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    a = e.playerState,
                    n = this.state,
                    r = n.openContextMenu,
                    i = n.positionX,
                    o = n.positionY,
                    l = this._isGif(a),
                    s = R.a.getConstants().isRTL ? { top: o, right: i } : { top: o, left: i }
                  return b.a.createElement(
                    C.a,
                    { onContextMenu: this._handleOpenContextMenu(a), style: E.a.absoluteFill },
                    t,
                    r &&
                      b.a.createElement(
                        C.a,
                        { style: [k.menuWrapper, s] },
                        b.a.createElement(_.a, { actionText: l ? S : w, onClick: this._handleCopyVideoAddress }),
                      ),
                  )
                },
              },
            ]),
            a
          )
        })(b.a.Component)
      t.a = P
      var k = E.a.create(function (e) {
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
    mNIZ: function (e, t, a) {
      'use strict'
      var n = a('VrFO'),
        r = a.n(n),
        i = a('Y9Ll'),
        o = a.n(i),
        l = a('1Pcy'),
        s = a.n(l),
        c = a('5Yy7'),
        u = a.n(c),
        p = a('2VqO'),
        d = a.n(p),
        f = a('KEM+'),
        y = a.n(f),
        v = (a('2G9S'), a('vrRf'), a('ERkP')),
        b = a.n(v),
        m = a('/yvb'),
        h = a('Q0n6'),
        g = a('3XMw'),
        _ = a.n(g),
        E = a('I/9y'),
        O = a('rHpw'),
        R = a('+aTU'),
        C = a('kCRK'),
        w = a('w05h'),
        S = _.a.a681babd,
        P = _.a.db3cd325,
        k = (function (e) {
          u()(a, e)
          var t = d()(a)
          function a() {
            var e
            r()(this, a)
            for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              y()(s()(e), '_buildMessage', function (t) {
                var a = e.props.playerState,
                  n = a && Object(h.e)(a)
                if (n && n.displayType === C.c.AD) {
                  var r = n.advertiserName
                  switch (t.type) {
                    case C.d.watch_now:
                      return r ? Object(w.e)({ advertiserName: r }) : w.j
                    case C.d.shop:
                      return r ? Object(w.c)({ advertiserName: r }) : w.h
                    case C.d.see_more:
                      return r ? Object(w.b)({ advertiserName: r }) : w.g
                    case C.d.go_to:
                      return r ? Object(w.a)({ advertiserName: r }) : w.f
                    case C.d.visit_site:
                    default:
                      return r ? Object(w.d)({ advertiserName: r }) : w.i
                  }
                }
                var i = new R.a(t.url).getHostname(),
                  o = 0 === i.indexOf('www.') ? i.substr(4) : i
                switch (t.type) {
                  case C.b.WATCH:
                    return S({ trimmedHostname: o })
                  case C.b.VISIT:
                  default:
                    return P({ trimmedHostname: o })
                }
              }),
              y()(s()(e), '_handlePress', function (e, t) {
                return function () {
                  e.callToActionClicked(), window.open(t.url, '_blank')
                }
              }),
              e
            )
          }
          return (
            o()(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.playerApi,
                    a = e.playerState,
                    n = a && Object(h.e)(a)
                  n && n.cta && t && t.callToActionImpression()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.playerApi,
                    a = e.playerState
                  if (!a || !t) return null
                  var n = Object(h.e)(a)
                  if (n && n.cta) {
                    var r = n.cta,
                      i = this._buildMessage(r)
                    return b.a.createElement(
                      m.a,
                      {
                        accessibilityLabel: i,
                        icon: b.a.createElement(E.a, null),
                        onPress: this._handlePress(t, r),
                        style: I.root,
                        type: 'onMediaDominantColorFilled',
                      },
                      i,
                    )
                  }
                  return null
                },
              },
            ]),
            a
          )
        })(b.a.PureComponent),
        I = O.a.create(function (e) {
          return { root: { position: 'absolute', left: e.spaces.space12, top: e.spaces.space12 } }
        })
      t.a = k
    },
    mf6X: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return D
      })
      var n = a('yiKp'),
        r = a.n(n),
        i = a('VrFO'),
        o = a.n(i),
        l = a('Y9Ll'),
        s = a.n(l),
        c = a('1Pcy'),
        u = a.n(c),
        p = a('5Yy7'),
        d = a.n(p),
        f = a('2VqO'),
        y = a.n(f),
        v = a('KEM+'),
        b = a.n(v),
        m = (a('yH/f'), a('2G9S'), a('ERkP')),
        h = a.n(m),
        g = a('Zl35'),
        _ = a('3XMw'),
        E = a.n(_),
        O = a('cm6r'),
        R = a('a6qo'),
        C = a('rHpw'),
        w = a('mXq/'),
        S = a('MWbm'),
        P = a('kRXa'),
        k = a('Q0n6'),
        I = E.a.f17dfdb5,
        T = E.a.j190bf19,
        M = E.a.f6dc9146,
        A = E.a.d30c74fd,
        L = E.a.c9a642f9,
        D = Object.freeze({
          LIVE_BROADCAST: 'liveBroadcast',
          REPLAY_BROADCAST: 'replayBroadcast',
          VOD: 'vod',
          GIF: 'gif',
          SLATE: 'slate',
        }),
        V = (function (e) {
          d()(a, e)
          var t = y()(a)
          function a() {
            var e
            o()(this, a)
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              b()(u()(e), '_handlePlayPress', function () {
                var t = e.props.playerApi
                t && t.play()
              }),
              b()(u()(e), '_renderBottomRow', function (t) {
                var a = t.isHovered,
                  n = e.props.playerState.isPlaying,
                  r = e.props,
                  i = r.isLive,
                  o = r.mediaType === D.VOD,
                  l = a && n
                return h.a.createElement(
                  S.a,
                  { style: j.bottomRow },
                  e._renderMediaLabel({ isVod: o, isLive: i, withRemaining: l }),
                  h.a.createElement(
                    S.a,
                    { style: j.right },
                    h.a.createElement(P.a, {
                      accessibilityLabelIcon: A,
                      accessibilityLabelSlider: L,
                      isMuted: e.props.playerState.isMuted,
                      onMuteToggle: e._handleMuteToggle,
                      onSliderChange: e._handleSliderChange,
                      volumePercent: 100 * e.props.playerState.volume,
                    }),
                  ),
                )
              }),
              b()(u()(e), '_renderMediaLabel', function (t) {
                var a = t.isLive,
                  n = t.isVod,
                  r = t.withRemaining
                return a
                  ? h.a.createElement(R.a, { align: 'left', type: 'live' }, T)
                  : h.a.createElement(g.a, { periodic: !0 }, function (t) {
                      var a = t.playerState
                      return e._renderPlaybackTime({ isVod: n, withRemaining: r, playerState: a })
                    })
              }),
              b()(u()(e), '_renderPlaybackTime', function (e) {
                var t,
                  a = e.isVod,
                  n = e.playerState,
                  r = e.withRemaining,
                  i = Object(k.e)(n),
                  o = Object(k.f)(i),
                  l = Object(k.d)(i),
                  s = o && l && Object(k.b)(o - l),
                  c = o && l && ''.concat(Object(k.b)(l), ' / ').concat(Object(k.b)(o))
                return (
                  a ? c && s && (t = r ? c : s) : (t = r ? c : M),
                  t ? h.a.createElement(R.a, { align: 'left', bold: !a && !r }, t) : null
                )
              }),
              b()(u()(e), '_handleSliderChange', function (t) {
                e.props.playerApi.setVolume(t / 100)
              }),
              b()(u()(e), '_handleMuteToggle', function () {
                var t = e.props,
                  a = t.playerApi
                t.playerState.isMuted ? a.unmute() : a.mute()
              }),
              b()(u()(e), '_handleClick', function () {
                var t = e.props,
                  a = t.playerApi
                t.playerState.isPlaying ? a.pause() : a.play()
              }),
              e
            )
          }
          return (
            s()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props.playerState.isPlaying
                  return h.a.createElement(
                    O.a,
                    { interactiveStyles: null, pointerEvents: 'box-none', style: j.overlay },
                    function (a) {
                      var n = a.isHovered
                      return h.a.createElement(
                        h.a.Fragment,
                        null,
                        h.a.createElement(
                          S.a,
                          { onClick: e._handleClick, style: j.overlay },
                          h.a.createElement(
                            S.a,
                            { style: j.playButtonContainer },
                            !t && h.a.createElement(w.a, { accessibilityLabel: I, onPress: e._handlePlayPress }),
                          ),
                        ),
                        e._renderBottomRow({ isHovered: n }),
                      )
                    },
                  )
                },
              },
            ]),
            a
          )
        })(h.a.Component),
        j = C.a.create(function (e) {
          return {
            overlay: r()(r()({}, C.a.absoluteFillObject), {}, { flexGrow: 1 }),
            playButtonContainer: { alignItems: 'center', flexGrow: 1, justifyContent: 'center' },
            bottomRow: {
              position: 'absolute',
              bottom: 0,
              flexGrow: 1,
              zIndex: 1,
              paddingStart: e.spaces.space12,
              paddingEnd: e.spaces.space4,
              width: '100%',
            },
            controlsContainer: {
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
              flexGrow: 1,
              flexShrink: 0,
            },
            left: { alignItems: 'center', flexDirection: 'row', flexGrow: 1, justifyContent: 'flex-start' },
            right: { alignItems: 'center', flexDirection: 'row', flexGrow: 1, justifyContent: 'flex-end' },
            totalTime: { paddingHorizontal: e.spaces.space4 },
          }
        })
      t.b = V
    },
    oH2E: function (e, t, a) {
      'use strict'
      var n = a('97Jx'),
        r = a.n(n),
        i = a('VrFO'),
        o = a.n(i),
        l = a('Y9Ll'),
        s = a.n(l),
        c = a('1Pcy'),
        u = a.n(c),
        p = a('5Yy7'),
        d = a.n(p),
        f = a('2VqO'),
        y = a.n(f),
        v = a('KEM+'),
        b = a.n(v),
        m = (a('2G9S'), a('ERkP')),
        h = a.n(m),
        g = a('3rX5'),
        _ = a('cm6r'),
        E = a('rHpw'),
        O = a('mXq/'),
        R = a('Q0n6'),
        C = (function (e) {
          d()(a, e)
          var t = y()(a)
          function a() {
            var e
            o()(this, a)
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              b()(u()(e), '_playVideo', function (e) {
                return function (t) {
                  e && e.play(), t && t.stopPropagation()
                }
              }),
              e
            )
          }
          return (
            s()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.playerApi,
                    a = e.playerState,
                    n = e.withPlayButton
                  if (!(t && a && a.controls && a.controls.isPosterShown)) return null
                  var i = Object(R.j)(a),
                    o = this.props.imageSrc || a.posterImage,
                    l = Object(R.l)(i)
                  return h.a.createElement(
                    _.a,
                    r()({}, n ? null : { accessibilityLabel: l }, {
                      focusable: !n,
                      interactiveStyles: null,
                      onPress: this._playVideo(t),
                      style: [E.a.absoluteFill, w.buttonContainer],
                    }),
                    o && h.a.createElement(g.a, { resizeMode: 'cover', source: o, style: E.a.absoluteFill }),
                    n && h.a.createElement(O.a, { accessibilityLabel: l, onPress: this._playVideo(t), type: 'video' }),
                  )
                },
              },
            ]),
            a
          )
        })(h.a.Component)
      b()(C, 'defaultProps', { withPlayButton: !0 })
      var w = E.a.create(function (e) {
        return { buttonContainer: { justifyContent: 'center', alignItems: 'center' } }
      })
      t.a = C
    },
  },
])
//# sourceMappingURL=WIPED
