;(window.webpackJsonp = window.webpackJsonp || []).push([
  [21],
  {
    '+xEG': function (e, t, r) {
      'use strict'
      r('OZaJ')
      var n = r('RhWx'),
        a = r.n(n),
        o = r('VrFO'),
        i = r.n(o),
        c = r('Y9Ll'),
        l = r.n(c),
        u = r('1Pcy'),
        s = r.n(u),
        f = r('5Yy7'),
        p = r.n(f),
        d = r('N+ot'),
        y = r.n(d),
        v = r('AuHH'),
        b = r.n(v),
        h = r('KEM+'),
        O = r.n(h),
        m = (r('2G9S'), r('LW0h'), r('5BYb'), r('ERkP')),
        g = r('t62R'),
        E = r('Zl35'),
        R = r('3XMw'),
        _ = r.n(R),
        P = (r('+KXO'), r('1t7P'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn'), r('Lsrn')),
        w = r('k/Ka')
      function j(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function C(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? j(Object(r), !0).forEach(function (t) {
                O()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : j(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var S = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(w.a)(
          'svg',
          C(
            C({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [P.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          m.createElement(
            'g',
            null,
            m.createElement('path', {
              d: 'M17.273 15.78c-.148 0-.298-.045-.43-.137l-4.326-3.03c-.2-.14-.32-.368-.32-.613V7.89c0-.414.336-.75.75-.75s.75.336.75.75v3.72l4.007 2.806c.34.237.422.705.185 1.044-.147.208-.38.32-.617.32z',
            }),
            m.createElement('path', {
              d: 'M12.947 1.25c-4.633 0-8.713 3.002-10.172 7.298L1.51 5.538c-.158-.382-.594-.564-.98-.403-.382.16-.56.6-.4.982L2.175 11c.08.19.233.338.424.41.095.037.194.053.294.05.102-.005.203-.03.296-.074l4.778-2.282c.374-.178.532-.625.354-1-.178-.374-.63-.53-1-.352L4.103 9.29c1.175-3.837 4.764-6.54 8.845-6.54 5.1 0 9.25 4.15 9.25 9.25s-4.15 9.25-9.25 9.25c-3.337 0-6.428-1.81-8.066-4.72-.2-.36-.658-.488-1.02-.285-.36.203-.488.66-.285 1.02 1.903 3.383 5.495 5.484 9.373 5.484 5.928 0 10.75-4.823 10.75-10.75S18.874 1.25 12.948 1.25z',
            }),
          ),
        )
      }
      S.metadata = { width: 24, height: 24 }
      var k = S,
        D = r('Wms4'),
        I = r('vCAy'),
        A = r('rHpw'),
        M = r('Q0n6'),
        L = r('kCRK')
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
          var r,
            n = b()(e)
          if (t) {
            var a = b()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return y()(this, r)
        }
      }
      var B = _.a.ed617674,
        x = _.a.j190bf19,
        V = _.a.f1ad0df1,
        H = _.a.ef16ab2b,
        N = (function (e) {
          p()(r, e)
          var t = T(r)
          function r() {
            var e
            i()(this, r)
            for (var n = arguments.length, o = new Array(n), c = 0; c < n; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              O()(s()(e), '_renderLeftBadges', function (t) {
                var r = e.props,
                  n = r.additionalBadges,
                  o = r.mediaAccessibilityLabel,
                  i = [],
                  c = Object(M.e)(t)
                if (
                  ((null == c ? void 0 : c.contentType) === L.a.GIF &&
                    i.push(m.createElement(D.a, { bold: !0, key: 'gif', type: 'gif' })),
                  o && i.push(m.createElement(D.a, { altLabel: o, bold: !0, key: 'alt' })),
                  0 === i.length)
                ) {
                  var l = [e._renderDurationBadge(t), e._renderViewCountBadge(t)].concat(n).filter(Boolean)
                  i.push.apply(i, a()(l))
                }
                return i.length > 0 ? i : null
              }),
              O()(s()(e), '_renderRightBadges', function (t) {
                var r = [e._renderTimecodeBadge(t), e._render360Badge(t)]
                  .concat(e.props.additionalBadges)
                  .filter(Boolean)
                return r.length > 0 ? r : null
              }),
              O()(s()(e), '_render360Badge', function (e) {
                var t = Object(M.e)(e)
                if (t && t.is360) return m.createElement(D.a, { key: '360-badge' }, B)
              }),
              O()(s()(e), '_renderTimecodeBadge', function (e) {
                var t = Object(M.i)(Object(M.e)(e))
                if (t && t >= 1)
                  return m.createElement(
                    D.a,
                    { key: 'timecode-badge' },
                    m.createElement(g.b, null, m.createElement(k, { style: F.timecodeIcon }), Object(M.b)(t)),
                  )
              }),
              O()(s()(e), '_renderDurationBadge', function (t) {
                var r = e.props.playerDisplayOptions
                if (r && r.badgeConfiguration && r.badgeConfiguration.hideDuration) return null
                var n = Object(M.j)(t)
                return n && n.isLive
                  ? m.createElement(D.a, { key: 'live-badge', type: 'live' }, x)
                  : m.createElement(
                      D.a,
                      { key: 'time-badge' },
                      m.createElement(E.a, { periodic: !0 }, function (e) {
                        var t = e.playerState
                        return m.createElement(G, { key: 'time-badge-time', playerState: t })
                      }),
                    )
              }),
              O()(s()(e), '_renderViewCountBadge', function (t) {
                var r = e.props.playerDisplayOptions
                if (r && r.badgeConfiguration && r.badgeConfiguration.hideViewCount) return null
                var n = Object(M.k)(t),
                  a = n && Object(M.a)(n)
                return a ? m.createElement(D.a, { key: 'view-count-badge' }, a) : null
              }),
              e
            )
          }
          return (
            l()(r, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.playerState,
                    r = e.position,
                    n = e.show
                  if (!t || !n) return null
                  var a = 'left' === r ? this._renderLeftBadges(t) : this._renderRightBadges(t)
                  return a ? m.createElement(I.a, { align: r }, a) : null
                },
              },
            ]),
            r
          )
        })(m.PureComponent)
      O()(N, 'defaultProps', { show: !0 })
      var F = A.a.create(function (e) {
          return {
            root: { position: 'relative' },
            rightBadges: { position: 'absolute', right: e.spaces.space12, bottom: e.spaces.space12 },
            leftBadges: { position: 'absolute', left: e.spaces.space12, bottom: e.spaces.space12 },
            timecodeIcon: { marginRight: e.spaces.space2, marginBottom: e.spaces.space1, height: '1em' },
          }
        }),
        G = m.memo(
          function (e) {
            var t = e.playerState,
              r = Object(M.e)(t)
            if (!r) return null
            var n = r.advertiserName,
              a = r.currentTimeMs,
              o = r.displayType,
              i = r.durationMs
            if (i && (t.isPlaying || a < i)) {
              var c = Object(M.b)((i - a) / 1e3)
              return o === L.c.AD
                ? n
                  ? m.createElement(g.b, null, H({ advertiserName: n, timeRemaining: c }))
                  : m.createElement(g.b, null, V({ timeRemaining: c }))
                : m.createElement(g.b, null, c)
            }
            return i ? m.createElement(g.b, null, Object(M.b)(i / 1e3)) : null
          },
          function (e, t) {
            var r = Object(M.e)(e.playerState),
              n = Object(M.e)(t.playerState)
            if (!n || !r) return !1
            if (
              ['advertiserName', 'durationMs', 'displayType'].some(function (e) {
                return n[e] !== r[e]
              })
            )
              return !1
            var a = function (e) {
              return e && Object(M.b)((e.durationMs - e.currentTimeMs) / 1e3)
            }
            return !(a(r) !== a(n))
          },
        )
      t.a = N
    },
    '0nHQ': function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return P
      })
      r('OZaJ')
      var n = r('VrFO'),
        a = r.n(n),
        o = r('Y9Ll'),
        i = r.n(o),
        c = r('1Pcy'),
        l = r.n(c),
        u = r('5Yy7'),
        s = r.n(u),
        f = r('N+ot'),
        p = r.n(f),
        d = r('AuHH'),
        y = r.n(d),
        v = r('KEM+'),
        b = r.n(v),
        h = (r('2G9S'), r('ERkP')),
        O = r('Yyzf'),
        m = r('3XMw'),
        g = r.n(m),
        E = g.a.c1658fc6,
        R = {
          BROADCAST_REQUEST_ERROR: E,
          BROADCAST_ENDED_NO_REPLAY: g.a.ce871584,
          BROADCAST_NOT_FOUND: g.a.c101eb95,
          CONFIG_USER_DATA_NETWORK_ERROR: E,
          CONFIG_NETWORK_ERROR: E,
          DMCA_TAKEDOWN_ERROR: g.a.gb24a513,
          EUROPEAN_COPYRIGHT_VIOLATION: g.a.hcaf3e62,
          LIVE_PARSE_ERROR: E,
          LIVE_STREAM_ACQUISITION_MISSING_CONTENT_ID: E,
          LIVE_STREAM_ACQUISITION_NETWORK_ERROR: E,
          LIVE_VIDEO_GEOBLOCK_ERROR: g.a.if05c037,
          LIVE_VIDEO_COPYRIGHT_VIOLATION_ERROR: g.a.d420171a,
          LIVE_VIDEO_GEOLOCATION_PROMPT: g.a.b1eb72f9,
          MEDIA_NOT_SUPPORTED: g.a.c057680b,
          MEDIA_SRC_INVALID_ERROR: E,
          MEDIA_ABORTED: E,
          MEDIA_NETWORK_ERROR: E,
          MEDIA_DECODE_ERROR: E,
          MEDIA_GEOBLOCK_ERROR: g.a.i5dfae6e,
          MEDIA_UNKNOWN_CODE_ERROR: E,
          ORIGINAL_CONTEXT_DELETED: g.a.c2388276,
          UNSUPPORTED_TYPE: E,
          VMAP_NETWORK_ERROR: E,
          VMAP_PARSE_ERROR: E,
        }
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
          var r,
            n = y()(e)
          if (t) {
            var a = y()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return p()(this, r)
        }
      }
      var P = (function (e) {
        s()(r, e)
        var t = _(r)
        function r() {
          var e
          a()(this, r)
          for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++) o[i] = arguments[i]
          return (
            (e = t.call.apply(t, [this].concat(o))),
            b()(l()(e), '_handleReload', function () {
              var t = e.props,
                r = t.playerApi,
                n = t.playerState
              if (n && n.errorInfo && n.errorInfo.canRetry)
                return function () {
                  r && r.reload()
                }
            }),
            e
          )
        }
        return (
          i()(r, [
            {
              key: 'render',
              value: function () {
                var e = this.props,
                  t = e.displayBackgroundImage,
                  r = void 0 !== t && t,
                  n = e.imageSrc,
                  a = e.playerApi,
                  o = e.playerState
                return a && o
                  ? h.createElement(O.a, {
                      displayBackgroundImage: r,
                      errorMessage: this._buildMessage(),
                      iconPlayError: 'BROADCAST_NOT_FOUND' === o.error,
                      imageSrc: n || o.posterImage,
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
                    r = e.errorData
                  if ('LIVE_VIDEO_COPYRIGHT_VIOLATION_ERROR' === t || 'EUROPEAN_COPYRIGHT_VIOLATION' === t) {
                    var n = (r || {}).copyrightHolder
                    return n ? R[t]({ holder: n }) : E
                  }
                  return (t && R[t]) || E
                }
              },
            },
          ]),
          r
        )
      })(h.Component)
    },
    '5VhU': function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return k
      })
      r('OZaJ'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('VrFO'),
        a = r.n(n),
        o = r('Y9Ll'),
        i = r.n(o),
        c = r('1Pcy'),
        l = r.n(c),
        u = r('5Yy7'),
        s = r.n(u),
        f = r('N+ot'),
        p = r.n(f),
        d = r('AuHH'),
        y = r.n(d),
        v = r('KEM+'),
        b = r.n(v),
        h = (r('2G9S'), r('+KXO'), r('z84I'), r('ERkP')),
        O = r('6RCM'),
        m = r('3XMw'),
        g = r.n(m),
        E = r('rHpw'),
        R = r('MWbm')
      function _(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function P(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? _(Object(r), !0).forEach(function (t) {
                b()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : _(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
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
          var r,
            n = y()(e)
          if (t) {
            var a = y()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return p()(this, r)
        }
      }
      var j = function (e) {
          return function () {
            var t = e.nativeEvent.layout,
              r = t.height
            return { dimensions: { width: t.width, height: r } }
          }
        },
        C = 0.1875,
        S = g.a.d2c9614f,
        k = (function (e) {
          s()(r, e)
          var t = w(r)
          function r() {
            var e
            a()(this, r)
            for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              b()(l()(e), 'state', { dimensions: { width: 0, height: 0 } }),
              b()(l()(e), '_renderGuests', function (t, r) {
                var n = Object.keys(t.guests).map(function (e) {
                    var r = t.audioLevels.guests[e] || 0
                    return P(P({}, t.guests[e]), {}, { AudioLevel: r / 100 })
                  }),
                  a = e.state.dimensions
                if (!a.width || !n.length) return null
                var o = C * a.width
                return h.createElement(
                  R.a,
                  { style: D.guestIndicators },
                  n.map(function (e) {
                    return h.createElement(
                      R.a,
                      { key: e.ParticipantIndex, style: D.guestIndicator },
                      h.createElement(O.a, {
                        accessibilityLabel: S,
                        audioLevel: e.AudioLevel,
                        participantIndex: e.ParticipantIndex,
                        paused: !r.isPlaying,
                        profileImageUrl: e.ProfileUrl,
                        size: o,
                      }),
                    )
                  }),
                )
              }),
              b()(l()(e), '_handleLayout', function (t) {
                e.setState(j(t))
              }),
              e
            )
          }
          return (
            i()(r, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.guestsState,
                    r = e.playerState
                  return t && t.guests && r
                    ? h.createElement(
                        R.a,
                        { onLayout: this._handleLayout, pointerEvents: 'none', style: D.overlay },
                        this._renderGuests(t, r),
                      )
                    : null
                },
              },
            ]),
            r
          )
        })(h.Component),
        D = E.a.create(function (e) {
          return {
            overlay: P(P({}, E.a.absoluteFillObject), {}, { flexGrow: 1 }),
            guestIndicators: { marginTop: e.spaces.space20, marginLeft: e.spaces.space20, flexDirection: 'row' },
            guestIndicator: { marginRight: e.spaces.space16 },
          }
        })
    },
    '6RCM': function (e, t, r) {
      'use strict'
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        a = r.n(n),
        o = r('m3Bd'),
        i = r.n(o),
        c = r('ERkP'),
        l = r('U+Jl'),
        u = r('rHpw'),
        s = r('MWbm')
      function f(e) {
        var t = { backgroundColor: e.color }
        return c.createElement(
          c.Fragment,
          null,
          c.createElement(s.a, { style: [p.overlay, t] }),
          c.createElement(s.a, { style: [p.overlay, p.blackOverlay] }),
        )
      }
      var p = u.a.create(function (e) {
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
        d =
          (r('yH/f'),
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
      var y = r('3rX5'),
        v = r('xJf9'),
        b = r('8eiz')
      function h(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function O(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? h(Object(r), !0).forEach(function (t) {
                a()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : h(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      function m(e) {
        var t = e.profileImageUrl,
          r = void 0 === t ? g : t,
          n = i()(e, ['profileImageUrl']),
          a = Object(b.c)(n.size),
          o = O(O({}, a), {}, { transform: [{ scale: ''.concat(n.scale) }] })
        return c.createElement(
          s.a,
          { style: [o, v.a.transitionTransform, E.scalingAvatar] },
          c.createElement(y.a, { defaultSource: g, source: r, style: a }),
        )
      }
      var g = 'https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png',
        E = u.a.create(function (e) {
          return { scalingAvatar: { position: 'absolute', borderRadius: e.borderRadii.infinite, overflow: 'hidden' } }
        })
      function R(e) {
        var t,
          r,
          n = e.size,
          a = n * _,
          o = e.paused ? 0 : e.audioLevel,
          i = ((t = e.participantIndex), (r = (t - 1) % d.length), (d[r] || d[0]).value)
        return c.createElement(
          c.Fragment,
          null,
          c.createElement(f, { color: i }),
          c.createElement(l.a, { scale: P(o), size: a, translate: j(o, n) }),
          c.createElement(l.a, { scale: P(o), size: a, translate: j(o, n) }),
          c.createElement(l.a, { scale: P(o), size: a, translate: j(o, n) }),
          c.createElement(m, { profileImageUrl: e.profileImageUrl, scale: w(o), size: a }),
        )
      }
      var _ = 0.692,
        P = function (e) {
          return 0.95 + (0.2 + Object(b.a)(0.5)) * e
        },
        w = function (e) {
          return 1 + 0.05 * e
        },
        j = function (e, t) {
          return { x: Object(b.b)() * e * Object(b.a)(0.05 * t), y: Object(b.b)() * e * Object(b.a)(0.05 * t) }
        }
      function C(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      var S = u.a.create(function (e) {
        return { root: { userSelect: 'none', overflow: 'hidden', justifyContent: 'center', alignItems: 'center' } }
      })
      t.a = function (e) {
        var t = e.accessibilityLabel,
          r = i()(e, ['accessibilityLabel']),
          n = r.size,
          o = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {}
              t % 2
                ? C(Object(r), !0).forEach(function (t) {
                    a()(e, t, r[t])
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                : C(Object(r)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                  })
            }
            return e
          })({}, Object(b.c)(n))
        return c.createElement(s.a, { accessibilityLabel: t, style: [o, S.root] }, c.createElement(R, r))
      }
    },
    Ur4q: function (e, t, r) {
      'use strict'
      r('OZaJ')
      var n = r('VrFO'),
        a = r.n(n),
        o = r('Y9Ll'),
        i = r.n(o),
        c = r('1Pcy'),
        l = r.n(c),
        u = r('5Yy7'),
        s = r.n(u),
        f = r('N+ot'),
        p = r.n(f),
        d = r('AuHH'),
        y = r.n(d),
        v = r('KEM+'),
        b = r.n(v),
        h = (r('2G9S'), r('ERkP')),
        O = r('kCRK'),
        m = r('Q0n6'),
        g = r('7nmT'),
        E = r.n(g),
        R = r('rHpw'),
        _ = r('MWbm')
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
          var r,
            n = y()(e)
          if (t) {
            var a = y()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return p()(this, r)
        }
      }
      var w = (function (e) {
          s()(r, e)
          var t = P(r)
          function r() {
            var e
            a()(this, r)
            for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              b()(l()(e), 'state', { grabbing: !1 }),
              b()(l()(e), '_firstClick', !0),
              b()(l()(e), '_componentRef', h.createRef()),
              b()(l()(e), '_handleMouseDown', function () {
                var t = e.props.playerState,
                  r = t && Object(m.e)(t)
                r && r.is360 && e._setEventListener('mousemove', e._handleMouseMove),
                  e._setEventListener('mouseup', e._handleMouseUp)
              }),
              b()(l()(e), '_handleMouseMove', function () {
                var t = e.props.playerState,
                  r = t && Object(m.e)(t)
                r && r.is360 && (e.setState({ grabbing: !0 }), e._setEventListener('mouseup', e._handleGrabRelease)),
                  e._unsetEventListener('mousemove', e._handleMouseMove),
                  e._unsetEventListener('mouseup', e._handleMouseUp)
              }),
              b()(l()(e), '_handleGrabRelease', function () {
                e.setState({ grabbing: !1 }), e._unsetEventListener('mouseup', e._handleGrabRelease)
              }),
              b()(l()(e), '_handleMouseUp', function (t) {
                e._unsetEventListener('mousemove', e._handleMouseMove),
                  e._unsetEventListener('mouseup', e._handleMouseUp),
                  e._handleClick(t)
              }),
              b()(l()(e), '_handleClick', function (t) {
                var r = e.props,
                  n = r.hideControls,
                  a = r.isTouchOnlyUI,
                  o = r.onClick,
                  i = r.playerApi,
                  c = r.playerDisplayOptions,
                  l = r.playerState
                if (o) return o(t)
                if (i && l) {
                  var u = Object(m.e)(l),
                    s = u && u.contentType && u.contentType === O.a.GIF
                  if (e._firstClick && !s && ((e._firstClick = !1), l.isMuted)) return void i.unmute()
                  if (a && n) return
                  var f = i.pause,
                    p = i.play,
                    d = i.replay,
                    y = u && u.isLive,
                    v = c && c.liveClickthrough,
                    b = u && v && v.enabled && u.isLive && l.isPlaying && !u.is360
                  if (a && n) return
                  if (s) return void (l.isPlaying ? f() : p())
                  u && u.currentTimeMs === u.durationMs
                    ? d()
                    : l.isPlaying
                    ? b
                      ? e._handleLiveClickthrough()
                      : y || f()
                    : p()
                }
              }),
              b()(l()(e), '_setEventListener', function (t, r) {
                var n = E.a.findDOMNode(e._componentRef.current)
                n && n.addEventListener(t, r)
              }),
              b()(l()(e), '_unsetEventListener', function (t, r) {
                var n = E.a.findDOMNode(e._componentRef.current)
                n && n.removeEventListener(t, r)
              }),
              b()(l()(e), '_handleLiveClickthrough', function () {
                var t = e.props,
                  r = t.playerApi,
                  n = t.playerDisplayOptions,
                  a = t.playerState,
                  o = n && n.liveClickthrough,
                  i = a && Object(m.e)(a)
                if (o && a && i && r) {
                  var c = o.url || a.eventUrl || i.broadcastShareUrl
                  c && (window.open(c, o.target || '_blank'), r.liveClickthroughClicked())
                }
              }),
              e
            )
          }
          return (
            i()(r, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.playerState,
                    t = this.state.grabbing,
                    r = e && Object(m.e)(e),
                    n = r && r.is360
                  return h.createElement(_.a, {
                    onMouseDown: this._handleMouseDown,
                    ref: this._componentRef,
                    style: [R.a.absoluteFill, n ? (t ? j.base360grabbing : j.base360) : j.base],
                  })
                },
              },
            ]),
            r
          )
        })(h.Component),
        j = R.a.create(function (e) {
          return { base: { cursor: 'pointer' }, base360: { cursor: 'grab' }, base360grabbing: { cursor: 'grabbing' } }
        })
      t.a = w
    },
    VLhD: function (e, t, r) {
      'use strict'
      r.d(t, 'b', function () {
        return o
      }),
        r.d(t, 'a', function () {
          return i
        }),
        r.d(t, 'c', function () {
          return c
        }),
        r.d(t, 'd', function () {
          return l
        })
      r('yH/f')
      var n = r('mf6X'),
        a = r('rOXj'),
        o = r('aITJ').b.isMobileOS() && a.a.isTouchSupported(),
        i = Object.freeze({
          A11YHook: 'VideoPlayerDefaultUI-A11YHook',
          ControlBar: 'VideoPlayerDefaultUI-ControlBar',
          HashtagHighlight: 'VideoPlayerDefaultUI-HashtagHighlight',
          Root: 'VideoPlayerDefaultUI-Root',
          VideoCTA: 'VideoPlayerDefaultUI-VideoCTA',
        })
      function c(e, t, r) {
        var n = e.isPlaying,
          a = !!e.error,
          o = e.controls.isPosterShown,
          c = a || o
        if (r) {
          var l = 0 !== t.click.size,
            u = t.touch.has(i.ControlBar)
          return c || (n && !l && !u)
        }
        var s = !t.focused.size && !t.mouseover.has(i.Root),
          f = t.mouseover.size > 1,
          p = 0 !== t.mousemove.size
        return c || (n && s) || (n && !t.focused.size && !p && !f)
      }
      var l = function (e, t) {
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
    aoyV: function (e, t, r) {
      'use strict'
      r('OZaJ')
      var n = r('VrFO'),
        a = r.n(n),
        o = r('Y9Ll'),
        i = r.n(o),
        c = r('1Pcy'),
        l = r.n(c),
        u = r('5Yy7'),
        s = r.n(u),
        f = r('N+ot'),
        p = r.n(f),
        d = r('AuHH'),
        y = r.n(d),
        v = r('KEM+'),
        b = r.n(v),
        h = (r('2G9S'), r('ERkP')),
        O = r('Qwev'),
        m = r('Q0n6'),
        g = r('rHpw'),
        E = r('MWbm')
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
          var r,
            n = y()(e)
          if (t) {
            var a = y()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return p()(this, r)
        }
      }
      var _ = (function (e) {
        s()(r, e)
        var t = R(r)
        function r() {
          var e
          a()(this, r)
          for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++) o[i] = arguments[i]
          return (
            (e = t.call.apply(t, [this].concat(o))),
            b()(l()(e), '_playInitiatedTime', null),
            b()(l()(e), 'state', { waitingForPlayback: !1 }),
            b()(l()(e), '_checkPlayRequest', function (t, r) {
              var n = r && 'PLAY_REQUESTED' === r.controls.playState,
                a = n && (!t || 'PLAY_REQUESTED' !== t.controls.playState)
              n ? a && e._startPlaybackWait() : e._clearPlaybackWait()
            }),
            b()(l()(e), '_clearPlaybackWait', function () {
              clearInterval(e._bufferingCheck), (e._playInitiatedTime = null)
            }),
            b()(l()(e), '_startPlaybackWait', function () {
              var t = e.props.waitingForPlaybackThresholdMs
              e._clearPlaybackWait(),
                (e._playInitiatedTime = Date.now()),
                (e._bufferingCheck = setInterval(function () {
                  if (!e._playInitiatedTime) return e._clearPlaybackWait()
                  var r = e._playInitiatedTime
                  Date.now() - r > t && (e.setState({ waitingForPlayback: !0 }), e._clearPlaybackWait())
                }, 100))
            }),
            e
          )
        }
        return (
          i()(
            r,
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
                  var t = Object(m.e)(e)
                  return (t && t.isBuffering) || this.state.waitingForPlayback
                    ? h.createElement(
                        E.a,
                        { pointerEvents: 'none', style: [g.a.absoluteFill, P.buttonContainer] },
                        h.createElement(O.a, { color: g.a.theme.colors.white, size: 60 }),
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
          r
        )
      })(h.Component)
      b()(_, 'defaultProps', { waitingForPlaybackThresholdMs: 1e3 })
      var P = g.a.create(function (e) {
        return { buttonContainer: { justifyContent: 'center', alignItems: 'center' } }
      })
      t.a = _
    },
    fZNH: function (e, t, r) {
      'use strict'
      r('OZaJ')
      var n = r('VrFO'),
        a = r.n(n),
        o = r('Y9Ll'),
        i = r.n(o),
        c = r('1Pcy'),
        l = r.n(c),
        u = r('5Yy7'),
        s = r.n(u),
        f = r('N+ot'),
        p = r.n(f),
        d = r('AuHH'),
        y = r.n(d),
        v = r('KEM+'),
        b = r.n(v),
        h = (r('2G9S'), r('uFXj'), r('ERkP')),
        O = r('Q0n6'),
        m = r('3XMw'),
        g = r.n(m),
        E = r('CKsB'),
        R = r('rHpw'),
        _ = r('kCRK'),
        P = r('shC7'),
        w = r('MWbm')
      function j(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var r,
            n = y()(e)
          if (t) {
            var a = y()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return p()(this, r)
        }
      }
      var C = g.a.f5224367,
        S = g.a.f1b6bcec,
        k = (function (e) {
          s()(r, e)
          var t = j(r)
          function r() {
            var e
            a()(this, r)
            for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              b()(l()(e), 'state', { openContextMenu: !1, positionX: 0, positionY: 0 }),
              b()(l()(e), '_handleOpenContextMenu', function (t) {
                return function (r) {
                  var n
                  if (
                    (r.preventDefault(),
                    null != t &&
                      null !== (n = t.source) &&
                      void 0 !== n &&
                      n.id &&
                      (t.source.type === _.e.TWEET || t.source.type === _.e.BROADCAST))
                  ) {
                    document.addEventListener('click', e._handleCloseContextMenu)
                    var a = r.currentTarget.getBoundingClientRect()
                    e.setState({ openContextMenu: !0, positionX: r.clientX - a.left, positionY: r.clientY - a.top })
                  }
                }
              }),
              b()(l()(e), '_handleCloseContextMenu', function () {
                e.state.openContextMenu &&
                  (document.removeEventListener('click', e._handleCloseContextMenu),
                  e.setState({ openContextMenu: !1 }))
              }),
              b()(l()(e), '_handleCopyVideoAddress', function () {
                document.addEventListener('copy', e._handleCopy), document.execCommand('copy')
              }),
              b()(l()(e), '_handleCopy', function (t) {
                var r,
                  n,
                  a = e.props.playerState,
                  o = null == a || null === (r = a.source) || void 0 === r ? void 0 : r.id,
                  i = null == a || null === (n = a.source) || void 0 === n ? void 0 : n.type
                o &&
                  i &&
                  t.clipboardData &&
                  (i === _.e.BROADCAST
                    ? t.clipboardData.setData('text/plain', 'https://twitter.com/i/broadcasts/'.concat(o))
                    : i === _.e.TWEET &&
                      t.clipboardData.setData('text/plain', 'https://twitter.com/i/status/'.concat(o)),
                  t.preventDefault()),
                  document.removeEventListener('copy', e._handleCopy)
              }),
              b()(l()(e), '_isGif', function (e) {
                var t = e && Object(O.j)(e)
                return t && t.contentType === _.a.GIF
              }),
              e
            )
          }
          return (
            i()(r, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    r = e.playerState,
                    n = this.state,
                    a = n.openContextMenu,
                    o = n.positionX,
                    i = n.positionY,
                    c = this._isGif(r),
                    l = P.a.getConstants().isRTL ? { top: i, right: o } : { top: i, left: o }
                  return h.createElement(
                    w.a,
                    { onContextMenu: this._handleOpenContextMenu(r), style: R.a.absoluteFill },
                    t,
                    a &&
                      h.createElement(
                        w.a,
                        { style: [D.menuWrapper, l] },
                        h.createElement(E.a, { actionText: c ? S : C, onClick: this._handleCopyVideoAddress }),
                      ),
                  )
                },
              },
            ]),
            r
          )
        })(h.Component)
      t.a = k
      var D = R.a.create(function (e) {
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
    mNIZ: function (e, t, r) {
      'use strict'
      r('OZaJ')
      var n = r('VrFO'),
        a = r.n(n),
        o = r('Y9Ll'),
        i = r.n(o),
        c = r('1Pcy'),
        l = r.n(c),
        u = r('5Yy7'),
        s = r.n(u),
        f = r('N+ot'),
        p = r.n(f),
        d = r('AuHH'),
        y = r.n(d),
        v = r('KEM+'),
        b = r.n(v),
        h = (r('2G9S'), r('vrRf'), r('ERkP')),
        O = r('/yvb'),
        m = r('Q0n6'),
        g = r('3XMw'),
        E = r.n(g),
        R = r('I/9y'),
        _ = r('rHpw'),
        P = r('+aTU'),
        w = r('kCRK'),
        j = r('w05h')
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
          var r,
            n = y()(e)
          if (t) {
            var a = y()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return p()(this, r)
        }
      }
      var S = E.a.a681babd,
        k = E.a.db3cd325,
        D = (function (e) {
          s()(r, e)
          var t = C(r)
          function r() {
            var e
            a()(this, r)
            for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              b()(l()(e), '_buildMessage', function (t) {
                var r = e.props.playerState,
                  n = r && Object(m.e)(r)
                if (n && n.displayType === w.c.AD) {
                  var a = n.advertiserName
                  switch (t.type) {
                    case w.d.watch_now:
                      return a ? Object(j.e)({ advertiserName: a }) : j.j
                    case w.d.shop:
                      return a ? Object(j.c)({ advertiserName: a }) : j.h
                    case w.d.see_more:
                      return a ? Object(j.b)({ advertiserName: a }) : j.g
                    case w.d.go_to:
                      return a ? Object(j.a)({ advertiserName: a }) : j.f
                    case w.d.visit_site:
                    default:
                      return a ? Object(j.d)({ advertiserName: a }) : j.i
                  }
                }
                var o = new P.a(t.url).getHostname(),
                  i = 0 === o.indexOf('www.') ? o.substr(4) : o
                switch (t.type) {
                  case w.b.WATCH:
                    return S({ trimmedHostname: i })
                  case w.b.VISIT:
                  default:
                    return k({ trimmedHostname: i })
                }
              }),
              b()(l()(e), '_handlePress', function (e, t) {
                return function () {
                  e.callToActionClicked(), window.open(t.url, '_blank')
                }
              }),
              e
            )
          }
          return (
            i()(r, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.playerApi,
                    r = e.playerState,
                    n = r && Object(m.e)(r)
                  n && n.cta && t && t.callToActionImpression()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.playerApi,
                    r = e.playerState
                  if (!r || !t) return null
                  var n = Object(m.e)(r)
                  if (n && n.cta) {
                    var a = n.cta,
                      o = this._buildMessage(a)
                    return h.createElement(
                      O.a,
                      {
                        accessibilityLabel: o,
                        icon: h.createElement(R.a, null),
                        onPress: this._handlePress(t, a),
                        style: I.root,
                        type: 'onMediaDominantColorFilled',
                      },
                      o,
                    )
                  }
                  return null
                },
              },
            ]),
            r
          )
        })(h.PureComponent),
        I = _.a.create(function (e) {
          return { root: { position: 'absolute', left: e.spaces.space12, top: e.spaces.space12 } }
        })
      t.a = D
    },
    mf6X: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return B
      })
      r('OZaJ'), r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('VrFO'),
        a = r.n(n),
        o = r('Y9Ll'),
        i = r.n(o),
        c = r('1Pcy'),
        l = r.n(c),
        u = r('5Yy7'),
        s = r.n(u),
        f = r('N+ot'),
        p = r.n(f),
        d = r('AuHH'),
        y = r.n(d),
        v = r('KEM+'),
        b = r.n(v),
        h = (r('yH/f'), r('2G9S'), r('ERkP')),
        O = r('Zl35'),
        m = r('3XMw'),
        g = r.n(m),
        E = r('cm6r'),
        R = r('a6qo'),
        _ = r('rHpw'),
        P = r('mXq/'),
        w = r('MWbm'),
        j = r('kRXa'),
        C = r('Q0n6')
      function S(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function k(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? S(Object(r), !0).forEach(function (t) {
                b()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : S(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
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
          var r,
            n = y()(e)
          if (t) {
            var a = y()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return p()(this, r)
        }
      }
      var I = g.a.f17dfdb5,
        A = g.a.j190bf19,
        M = g.a.f6dc9146,
        L = g.a.d30c74fd,
        T = g.a.c9a642f9,
        B = Object.freeze({
          LIVE_BROADCAST: 'liveBroadcast',
          REPLAY_BROADCAST: 'replayBroadcast',
          VOD: 'vod',
          GIF: 'gif',
          SLATE: 'slate',
        }),
        x = (function (e) {
          s()(r, e)
          var t = D(r)
          function r() {
            var e
            a()(this, r)
            for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              b()(l()(e), '_handlePlayPress', function () {
                var t = e.props.playerApi
                t && t.play()
              }),
              b()(l()(e), '_renderBottomRow', function (t) {
                var r = t.isHovered,
                  n = e.props.playerState.isPlaying,
                  a = e.props,
                  o = a.isLive,
                  i = a.mediaType === B.VOD,
                  c = r && n
                return h.createElement(
                  w.a,
                  { style: V.bottomRow },
                  e._renderMediaLabel({ isVod: i, isLive: o, withRemaining: c }),
                  h.createElement(
                    w.a,
                    { style: V.right },
                    h.createElement(j.a, {
                      accessibilityLabelIcon: L,
                      accessibilityLabelSlider: T,
                      isMuted: e.props.playerState.isMuted,
                      onMuteToggle: e._handleMuteToggle,
                      onSliderChange: e._handleSliderChange,
                      volumePercent: 100 * e.props.playerState.volume,
                    }),
                  ),
                )
              }),
              b()(l()(e), '_renderMediaLabel', function (t) {
                var r = t.isLive,
                  n = t.isVod,
                  a = t.withRemaining
                return r
                  ? h.createElement(R.a, { align: 'left', type: 'live' }, A)
                  : h.createElement(O.a, { periodic: !0 }, function (t) {
                      var r = t.playerState
                      return e._renderPlaybackTime({ isVod: n, withRemaining: a, playerState: r })
                    })
              }),
              b()(l()(e), '_renderPlaybackTime', function (e) {
                var t,
                  r = e.isVod,
                  n = e.playerState,
                  a = e.withRemaining,
                  o = Object(C.e)(n),
                  i = Object(C.f)(o),
                  c = Object(C.d)(o),
                  l = i && c && Object(C.b)(i - c),
                  u = i && c && ''.concat(Object(C.b)(c), ' / ').concat(Object(C.b)(i))
                return (
                  r ? u && l && (t = a ? u : l) : (t = a ? u : M),
                  t ? h.createElement(R.a, { align: 'left', bold: !r && !a }, t) : null
                )
              }),
              b()(l()(e), '_handleSliderChange', function (t) {
                e.props.playerApi.setVolume(t / 100)
              }),
              b()(l()(e), '_handleMuteToggle', function () {
                var t = e.props,
                  r = t.playerApi
                t.playerState.isMuted ? r.unmute() : r.mute()
              }),
              b()(l()(e), '_handleClick', function () {
                var t = e.props,
                  r = t.playerApi
                t.playerState.isPlaying ? r.pause() : r.play()
              }),
              e
            )
          }
          return (
            i()(r, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props.playerState.isPlaying
                  return h.createElement(
                    E.a,
                    { interactiveStyles: null, pointerEvents: 'box-none', style: V.overlay },
                    function (r) {
                      var n = r.isHovered
                      return h.createElement(
                        h.Fragment,
                        null,
                        h.createElement(
                          w.a,
                          { onClick: e._handleClick, style: V.overlay },
                          h.createElement(
                            w.a,
                            { style: V.playButtonContainer },
                            !t && h.createElement(P.a, { accessibilityLabel: I, onPress: e._handlePlayPress }),
                          ),
                        ),
                        e._renderBottomRow({ isHovered: n }),
                      )
                    },
                  )
                },
              },
            ]),
            r
          )
        })(h.Component),
        V = _.a.create(function (e) {
          return {
            overlay: k(k({}, _.a.absoluteFillObject), {}, { flexGrow: 1 }),
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
      t.b = x
    },
    oH2E: function (e, t, r) {
      'use strict'
      r('OZaJ')
      var n = r('97Jx'),
        a = r.n(n),
        o = r('VrFO'),
        i = r.n(o),
        c = r('Y9Ll'),
        l = r.n(c),
        u = r('1Pcy'),
        s = r.n(u),
        f = r('5Yy7'),
        p = r.n(f),
        d = r('N+ot'),
        y = r.n(d),
        v = r('AuHH'),
        b = r.n(v),
        h = r('KEM+'),
        O = r.n(h),
        m = (r('2G9S'), r('ERkP')),
        g = r('3rX5'),
        E = r('cm6r'),
        R = r('rHpw'),
        _ = r('mXq/'),
        P = r('Q0n6')
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
          var r,
            n = b()(e)
          if (t) {
            var a = b()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return y()(this, r)
        }
      }
      var j = (function (e) {
        p()(r, e)
        var t = w(r)
        function r() {
          var e
          i()(this, r)
          for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o]
          return (
            (e = t.call.apply(t, [this].concat(a))),
            O()(s()(e), '_playVideo', function (e) {
              return function (t) {
                e && e.play(), t && t.stopPropagation()
              }
            }),
            e
          )
        }
        return (
          l()(r, [
            {
              key: 'render',
              value: function () {
                var e = this.props,
                  t = e.playerApi,
                  r = e.playerState,
                  n = e.withPlayButton
                if (!(t && r && r.controls && r.controls.isPosterShown)) return null
                var o = Object(P.j)(r),
                  i = this.props.imageSrc || r.posterImage,
                  c = Object(P.l)(o)
                return m.createElement(
                  E.a,
                  a()({}, n ? null : { accessibilityLabel: c }, {
                    focusable: !n,
                    interactiveStyles: null,
                    onPress: this._playVideo(t),
                    style: [R.a.absoluteFill, C.buttonContainer],
                  }),
                  i && m.createElement(g.a, { resizeMode: 'cover', source: i, style: R.a.absoluteFill }),
                  n && m.createElement(_.a, { accessibilityLabel: c, onPress: this._playVideo(t), type: 'video' }),
                )
              },
            },
          ]),
          r
        )
      })(m.Component)
      O()(j, 'defaultProps', { withPlayButton: !0 })
      var C = R.a.create(function (e) {
        return { buttonContainer: { justifyContent: 'center', alignItems: 'center' } }
      })
      t.a = j
    },
  },
])
//# sourceMappingURL=WIPED
