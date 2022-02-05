;(window.webpackJsonp = window.webpackJsonp || []).push([
  [20],
  {
    '+xEG': function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('RhWx'),
        a = n.n(r),
        o = n('VrFO'),
        i = n.n(o),
        c = n('Y9Ll'),
        l = n.n(c),
        u = n('1Pcy'),
        s = n.n(u),
        f = n('5Yy7'),
        p = n.n(f),
        d = n('N+ot'),
        y = n.n(d),
        v = n('AuHH'),
        b = n.n(v),
        h = n('KEM+'),
        O = n.n(h),
        m = (n('2G9S'), n('LW0h'), n('5BYb'), n('ERkP')),
        g = n.n(m),
        E = n('t62R'),
        R = n('Zl35'),
        _ = n('3XMw'),
        P = n.n(_),
        w = (n('+KXO'), n('1t7P'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('Lsrn')),
        j = n('k/Ka')
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
      function S(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? C(Object(n), !0).forEach(function (t) {
                O()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : C(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var k = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(j.a)(
          'svg',
          S(
            S({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [w.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          g.a.createElement(
            'g',
            null,
            g.a.createElement('path', {
              d: 'M17.273 15.78c-.148 0-.298-.045-.43-.137l-4.326-3.03c-.2-.14-.32-.368-.32-.613V7.89c0-.414.336-.75.75-.75s.75.336.75.75v3.72l4.007 2.806c.34.237.422.705.185 1.044-.147.208-.38.32-.617.32z',
            }),
            g.a.createElement('path', {
              d: 'M12.947 1.25c-4.633 0-8.713 3.002-10.172 7.298L1.51 5.538c-.158-.382-.594-.564-.98-.403-.382.16-.56.6-.4.982L2.175 11c.08.19.233.338.424.41.095.037.194.053.294.05.102-.005.203-.03.296-.074l4.778-2.282c.374-.178.532-.625.354-1-.178-.374-.63-.53-1-.352L4.103 9.29c1.175-3.837 4.764-6.54 8.845-6.54 5.1 0 9.25 4.15 9.25 9.25s-4.15 9.25-9.25 9.25c-3.337 0-6.428-1.81-8.066-4.72-.2-.36-.658-.488-1.02-.285-.36.203-.488.66-.285 1.02 1.903 3.383 5.495 5.484 9.373 5.484 5.928 0 10.75-4.823 10.75-10.75S18.874 1.25 12.948 1.25z',
            }),
          ),
        )
      }
      k.metadata = { width: 24, height: 24 }
      var D = k,
        I = n('Wms4'),
        A = n('vCAy'),
        M = n('rHpw'),
        L = n('Q0n6'),
        T = n('kCRK')
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
            r = b()(e)
          if (t) {
            var a = b()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return y()(this, n)
        }
      }
      var x = P.a.ed617674,
        V = P.a.j190bf19,
        H = P.a.f1ad0df1,
        N = P.a.ef16ab2b,
        F = (function (e) {
          p()(n, e)
          var t = B(n)
          function n() {
            var e
            i()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              O()(s()(e), '_renderLeftBadges', function (t) {
                var n = e.props,
                  r = n.additionalBadges,
                  o = n.mediaAccessibilityLabel,
                  i = [],
                  c = Object(L.e)(t)
                if (
                  ((null == c ? void 0 : c.contentType) === T.a.GIF &&
                    i.push(g.a.createElement(I.a, { bold: !0, key: 'gif', type: 'gif' })),
                  o && i.push(g.a.createElement(I.a, { altLabel: o, bold: !0, key: 'alt' })),
                  0 === i.length)
                ) {
                  var l = [e._renderDurationBadge(t), e._renderViewCountBadge(t)].concat(r).filter(Boolean)
                  i.push.apply(i, a()(l))
                }
                return i.length > 0 ? i : null
              }),
              O()(s()(e), '_renderRightBadges', function (t) {
                var n = [e._renderTimecodeBadge(t), e._render360Badge(t)]
                  .concat(e.props.additionalBadges)
                  .filter(Boolean)
                return n.length > 0 ? n : null
              }),
              O()(s()(e), '_render360Badge', function (e) {
                var t = Object(L.e)(e)
                if (t && t.is360) return g.a.createElement(I.a, { key: '360-badge' }, x)
              }),
              O()(s()(e), '_renderTimecodeBadge', function (e) {
                var t = Object(L.i)(Object(L.e)(e))
                if (t && t >= 1)
                  return g.a.createElement(
                    I.a,
                    { key: 'timecode-badge' },
                    g.a.createElement(E.b, null, g.a.createElement(D, { style: G.timecodeIcon }), Object(L.b)(t)),
                  )
              }),
              O()(s()(e), '_renderDurationBadge', function (t) {
                var n = e.props.playerDisplayOptions
                if (n && n.badgeConfiguration && n.badgeConfiguration.hideDuration) return null
                var r = Object(L.j)(t)
                return r && r.isLive
                  ? g.a.createElement(I.a, { key: 'live-badge', type: 'live' }, V)
                  : g.a.createElement(
                      I.a,
                      { key: 'time-badge' },
                      g.a.createElement(R.a, { periodic: !0 }, function (e) {
                        var t = e.playerState
                        return g.a.createElement(U, { key: 'time-badge-time', playerState: t })
                      }),
                    )
              }),
              O()(s()(e), '_renderViewCountBadge', function (t) {
                var n = e.props.playerDisplayOptions
                if (n && n.badgeConfiguration && n.badgeConfiguration.hideViewCount) return null
                var r = Object(L.k)(t),
                  a = r && Object(L.a)(r)
                return a ? g.a.createElement(I.a, { key: 'view-count-badge' }, a) : null
              }),
              e
            )
          }
          return (
            l()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.playerState,
                    n = e.position,
                    r = e.show
                  if (!t || !r) return null
                  var a = 'left' === n ? this._renderLeftBadges(t) : this._renderRightBadges(t)
                  return a ? g.a.createElement(A.a, { align: n }, a) : null
                },
              },
            ]),
            n
          )
        })(g.a.PureComponent)
      O()(F, 'defaultProps', { show: !0 })
      var G = M.a.create(function (e) {
          return {
            root: { position: 'relative' },
            rightBadges: { position: 'absolute', right: e.spaces.space12, bottom: e.spaces.space12 },
            leftBadges: { position: 'absolute', left: e.spaces.space12, bottom: e.spaces.space12 },
            timecodeIcon: { marginRight: e.spaces.space2, marginBottom: e.spaces.space1, height: '1em' },
          }
        }),
        U = g.a.memo(
          function (e) {
            var t = e.playerState,
              n = Object(L.e)(t)
            if (!n) return null
            var r = n.advertiserName,
              a = n.currentTimeMs,
              o = n.displayType,
              i = n.durationMs
            if (i && (t.isPlaying || a < i)) {
              var c = Object(L.b)((i - a) / 1e3)
              return o === T.c.AD
                ? r
                  ? g.a.createElement(E.b, null, N({ advertiserName: r, timeRemaining: c }))
                  : g.a.createElement(E.b, null, H({ timeRemaining: c }))
                : g.a.createElement(E.b, null, c)
            }
            return i ? g.a.createElement(E.b, null, Object(L.b)(i / 1e3)) : null
          },
          function (e, t) {
            var n = Object(L.e)(e.playerState),
              r = Object(L.e)(t.playerState)
            if (!r || !n) return !1
            if (
              ['advertiserName', 'durationMs', 'displayType'].some(function (e) {
                return r[e] !== n[e]
              })
            )
              return !1
            var a = function (e) {
              return e && Object(L.b)((e.durationMs - e.currentTimeMs) / 1e3)
            }
            return !(a(n) !== a(r))
          },
        )
      t.a = F
    },
    '0nHQ': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return w
      })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('1Pcy'),
        l = n.n(c),
        u = n('5Yy7'),
        s = n.n(u),
        f = n('N+ot'),
        p = n.n(f),
        d = n('AuHH'),
        y = n.n(d),
        v = n('KEM+'),
        b = n.n(v),
        h = (n('2G9S'), n('ERkP')),
        O = n.n(h),
        m = n('Yyzf'),
        g = n('3XMw'),
        E = n.n(g),
        R = E.a.c1658fc6,
        _ = {
          BROADCAST_REQUEST_ERROR: R,
          BROADCAST_ENDED_NO_REPLAY: E.a.ce871584,
          BROADCAST_NOT_FOUND: E.a.c101eb95,
          CONFIG_USER_DATA_NETWORK_ERROR: R,
          CONFIG_NETWORK_ERROR: R,
          DMCA_TAKEDOWN_ERROR: E.a.gb24a513,
          EUROPEAN_COPYRIGHT_VIOLATION: E.a.hcaf3e62,
          LIVE_PARSE_ERROR: R,
          LIVE_STREAM_ACQUISITION_MISSING_CONTENT_ID: R,
          LIVE_STREAM_ACQUISITION_NETWORK_ERROR: R,
          LIVE_VIDEO_GEOBLOCK_ERROR: E.a.if05c037,
          LIVE_VIDEO_COPYRIGHT_VIOLATION_ERROR: E.a.d420171a,
          LIVE_VIDEO_GEOLOCATION_PROMPT: E.a.b1eb72f9,
          MEDIA_NOT_SUPPORTED: E.a.c057680b,
          MEDIA_SRC_INVALID_ERROR: R,
          MEDIA_ABORTED: R,
          MEDIA_NETWORK_ERROR: R,
          MEDIA_DECODE_ERROR: R,
          MEDIA_GEOBLOCK_ERROR: E.a.i5dfae6e,
          MEDIA_UNKNOWN_CODE_ERROR: R,
          ORIGINAL_CONTEXT_DELETED: E.a.c2388276,
          UNSUPPORTED_TYPE: R,
          VMAP_NETWORK_ERROR: R,
          VMAP_PARSE_ERROR: R,
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
            r = y()(e)
          if (t) {
            var a = y()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var w = (function (e) {
        s()(n, e)
        var t = P(n)
        function n() {
          var e
          a()(this, n)
          for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
          return (
            (e = t.call.apply(t, [this].concat(o))),
            b()(l()(e), '_handleReload', function () {
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
                  ? O.a.createElement(m.a, {
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
                    return r ? _[t]({ holder: r }) : R
                  }
                  return (t && _[t]) || R
                }
              },
            },
          ]),
          n
        )
      })(O.a.Component)
    },
    '5VhU': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return D
      })
      n('OZaJ'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('1Pcy'),
        l = n.n(c),
        u = n('5Yy7'),
        s = n.n(u),
        f = n('N+ot'),
        p = n.n(f),
        d = n('AuHH'),
        y = n.n(d),
        v = n('KEM+'),
        b = n.n(v),
        h = (n('2G9S'), n('+KXO'), n('z84I'), n('ERkP')),
        O = n.n(h),
        m = n('6RCM'),
        g = n('3XMw'),
        E = n.n(g),
        R = n('rHpw'),
        _ = n('MWbm')
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
      function w(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? P(Object(n), !0).forEach(function (t) {
                b()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : P(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
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
          var n,
            r = y()(e)
          if (t) {
            var a = y()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var C = function (e) {
          return function () {
            var t = e.nativeEvent.layout,
              n = t.height
            return { dimensions: { width: t.width, height: n } }
          }
        },
        S = 0.1875,
        k = E.a.d2c9614f,
        D = (function (e) {
          s()(n, e)
          var t = j(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              b()(l()(e), 'state', { dimensions: { width: 0, height: 0 } }),
              b()(l()(e), '_renderGuests', function (t, n) {
                var r = Object.keys(t.guests).map(function (e) {
                    var n = t.audioLevels.guests[e] || 0
                    return w(w({}, t.guests[e]), {}, { AudioLevel: n / 100 })
                  }),
                  a = e.state.dimensions
                if (!a.width || !r.length) return null
                var o = S * a.width
                return O.a.createElement(
                  _.a,
                  { style: I.guestIndicators },
                  r.map(function (e) {
                    return O.a.createElement(
                      _.a,
                      { key: e.ParticipantIndex, style: I.guestIndicator },
                      O.a.createElement(m.a, {
                        accessibilityLabel: k,
                        audioLevel: e.AudioLevel,
                        participantIndex: e.ParticipantIndex,
                        paused: !n.isPlaying,
                        profileImageUrl: e.ProfileUrl,
                        size: o,
                      }),
                    )
                  }),
                )
              }),
              b()(l()(e), '_handleLayout', function (t) {
                e.setState(C(t))
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
                    t = e.guestsState,
                    n = e.playerState
                  return t && t.guests && n
                    ? O.a.createElement(
                        _.a,
                        { onLayout: this._handleLayout, pointerEvents: 'none', style: I.overlay },
                        this._renderGuests(t, n),
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(O.a.Component),
        I = R.a.create(function (e) {
          return {
            overlay: w(w({}, R.a.absoluteFillObject), {}, { flexGrow: 1 }),
            guestIndicators: { marginTop: e.spaces.space20, marginLeft: e.spaces.space20, flexDirection: 'row' },
            guestIndicator: { marginRight: e.spaces.space16 },
          }
        })
    },
    '6RCM': function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        o = n('m3Bd'),
        i = n.n(o),
        c = n('ERkP'),
        l = n.n(c),
        u = n('U+Jl'),
        s = n('rHpw'),
        f = n('MWbm')
      function p(e) {
        var t = { backgroundColor: e.color }
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(f.a, { style: [d.overlay, t] }),
          l.a.createElement(f.a, { style: [d.overlay, d.blackOverlay] }),
        )
      }
      var d = s.a.create(function (e) {
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
          (n('yH/f'),
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
      var v = n('3rX5'),
        b = n('xJf9'),
        h = n('8eiz')
      function O(e, t) {
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
      function m(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? O(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : O(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function g(e) {
        var t = e.profileImageUrl,
          n = void 0 === t ? E : t,
          r = i()(e, ['profileImageUrl']),
          a = Object(h.c)(r.size),
          o = m(m({}, a), {}, { transform: [{ scale: ''.concat(r.scale) }] })
        return l.a.createElement(
          f.a,
          { style: [o, b.a.transitionTransform, R.scalingAvatar] },
          l.a.createElement(v.a, { defaultSource: E, source: n, style: a }),
        )
      }
      var E = 'https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png',
        R = s.a.create(function (e) {
          return { scalingAvatar: { position: 'absolute', borderRadius: e.borderRadii.infinite, overflow: 'hidden' } }
        })
      function _(e) {
        var t,
          n,
          r = e.size,
          a = r * P,
          o = e.paused ? 0 : e.audioLevel,
          i = ((t = e.participantIndex), (n = (t - 1) % y.length), (y[n] || y[0]).value)
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(p, { color: i }),
          l.a.createElement(u.a, { scale: w(o), size: a, translate: C(o, r) }),
          l.a.createElement(u.a, { scale: w(o), size: a, translate: C(o, r) }),
          l.a.createElement(u.a, { scale: w(o), size: a, translate: C(o, r) }),
          l.a.createElement(g, { profileImageUrl: e.profileImageUrl, scale: j(o), size: a }),
        )
      }
      var P = 0.692,
        w = function (e) {
          return 0.95 + (0.2 + Object(h.a)(0.5)) * e
        },
        j = function (e) {
          return 1 + 0.05 * e
        },
        C = function (e, t) {
          return { x: Object(h.b)() * e * Object(h.a)(0.05 * t), y: Object(h.b)() * e * Object(h.a)(0.05 * t) }
        }
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
      var k = s.a.create(function (e) {
        return { root: { userSelect: 'none', overflow: 'hidden', justifyContent: 'center', alignItems: 'center' } }
      })
      t.a = function (e) {
        var t = e.accessibilityLabel,
          n = i()(e, ['accessibilityLabel']),
          r = n.size,
          o = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {}
              t % 2
                ? S(Object(n), !0).forEach(function (t) {
                    a()(e, t, n[t])
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                : S(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                  })
            }
            return e
          })({}, Object(h.c)(r))
        return l.a.createElement(f.a, { accessibilityLabel: t, style: [o, k.root] }, l.a.createElement(_, n))
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
        l = n.n(c),
        u = n('5Yy7'),
        s = n.n(u),
        f = n('N+ot'),
        p = n.n(f),
        d = n('AuHH'),
        y = n.n(d),
        v = n('KEM+'),
        b = n.n(v),
        h = (n('2G9S'), n('ERkP')),
        O = n.n(h),
        m = n('kCRK'),
        g = n('Q0n6'),
        E = n('7nmT'),
        R = n.n(E),
        _ = n('rHpw'),
        P = n('MWbm')
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
            r = y()(e)
          if (t) {
            var a = y()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var j = (function (e) {
          s()(n, e)
          var t = w(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              b()(l()(e), 'state', { grabbing: !1 }),
              b()(l()(e), '_firstClick', !0),
              b()(l()(e), '_componentRef', O.a.createRef()),
              b()(l()(e), '_handleMouseDown', function () {
                var t = e.props.playerState,
                  n = t && Object(g.e)(t)
                n && n.is360 && e._setEventListener('mousemove', e._handleMouseMove),
                  e._setEventListener('mouseup', e._handleMouseUp)
              }),
              b()(l()(e), '_handleMouseMove', function () {
                var t = e.props.playerState,
                  n = t && Object(g.e)(t)
                n && n.is360 && (e.setState({ grabbing: !0 }), e._setEventListener('mouseup', e._handleGrabRelease)),
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
                var n = e.props,
                  r = n.hideControls,
                  a = n.isTouchOnlyUI,
                  o = n.onClick,
                  i = n.playerApi,
                  c = n.playerDisplayOptions,
                  l = n.playerState
                if (o) return o(t)
                if (i && l) {
                  var u = Object(g.e)(l),
                    s = u && u.contentType && u.contentType === m.a.GIF
                  if (e._firstClick && !s && ((e._firstClick = !1), l.isMuted)) return void i.unmute()
                  if (a && r) return
                  var f = i.pause,
                    p = i.play,
                    d = i.replay,
                    y = u && u.isLive,
                    v = c && c.liveClickthrough,
                    b = u && v && v.enabled && u.isLive && l.isPlaying && !u.is360
                  if (a && r) return
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
              b()(l()(e), '_setEventListener', function (t, n) {
                var r = R.a.findDOMNode(e._componentRef.current)
                r && r.addEventListener(t, n)
              }),
              b()(l()(e), '_unsetEventListener', function (t, n) {
                var r = R.a.findDOMNode(e._componentRef.current)
                r && r.removeEventListener(t, n)
              }),
              b()(l()(e), '_handleLiveClickthrough', function () {
                var t = e.props,
                  n = t.playerApi,
                  r = t.playerDisplayOptions,
                  a = t.playerState,
                  o = r && r.liveClickthrough,
                  i = a && Object(g.e)(a)
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
                    n = e && Object(g.e)(e),
                    r = n && n.is360
                  return O.a.createElement(P.a, {
                    onMouseDown: this._handleMouseDown,
                    ref: this._componentRef,
                    style: [_.a.absoluteFill, r ? (t ? C.base360grabbing : C.base360) : C.base],
                  })
                },
              },
            ]),
            n
          )
        })(O.a.Component),
        C = _.a.create(function (e) {
          return { base: { cursor: 'pointer' }, base360: { cursor: 'grab' }, base360grabbing: { cursor: 'grabbing' } }
        })
      t.a = j
    },
    VLhD: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return o
      }),
        n.d(t, 'a', function () {
          return i
        }),
        n.d(t, 'c', function () {
          return c
        }),
        n.d(t, 'd', function () {
          return l
        })
      n('yH/f')
      var r = n('mf6X'),
        a = n('rOXj'),
        o = n('aITJ').b.isMobileOS() && a.a.isTouchSupported(),
        i = Object.freeze({
          A11YHook: 'VideoPlayerDefaultUI-A11YHook',
          ControlBar: 'VideoPlayerDefaultUI-ControlBar',
          HashtagHighlight: 'VideoPlayerDefaultUI-HashtagHighlight',
          Root: 'VideoPlayerDefaultUI-Root',
          VideoCTA: 'VideoPlayerDefaultUI-VideoCTA',
        })
      function c(e, t, n) {
        var r = e.isPlaying,
          a = !!e.error,
          o = e.controls.isPosterShown,
          c = a || o
        if (n) {
          var l = 0 !== t.click.size,
            u = t.touch.has(i.ControlBar)
          return c || (r && !l && !u)
        }
        var s = !t.focused.size && !t.mouseover.has(i.Root),
          f = t.mouseover.size > 1,
          p = 0 !== t.mousemove.size
        return c || (r && s) || (r && !t.focused.size && !p && !f)
      }
      var l = function (e, t) {
        switch (e) {
          case 'gif':
            return r.a.GIF
          case 'broadcast':
            return t ? r.a.LIVE_BROADCAST : r.a.REPLAY_BROADCAST
          case 'media_entity':
          case 'vmap':
          default:
            return r.a.VOD
        }
      }
    },
    aoyV: function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('1Pcy'),
        l = n.n(c),
        u = n('5Yy7'),
        s = n.n(u),
        f = n('N+ot'),
        p = n.n(f),
        d = n('AuHH'),
        y = n.n(d),
        v = n('KEM+'),
        b = n.n(v),
        h = (n('2G9S'), n('ERkP')),
        O = n.n(h),
        m = n('Qwev'),
        g = n('Q0n6'),
        E = n('rHpw'),
        R = n('MWbm')
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
        var t = _(n)
        function n() {
          var e
          a()(this, n)
          for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
          return (
            (e = t.call.apply(t, [this].concat(o))),
            b()(l()(e), '_playInitiatedTime', null),
            b()(l()(e), 'state', { waitingForPlayback: !1 }),
            b()(l()(e), '_checkPlayRequest', function (t, n) {
              var r = n && 'PLAY_REQUESTED' === n.controls.playState,
                a = r && (!t || 'PLAY_REQUESTED' !== t.controls.playState)
              r ? a && e._startPlaybackWait() : e._clearPlaybackWait()
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
                  var t = Object(g.e)(e)
                  return (t && t.isBuffering) || this.state.waitingForPlayback
                    ? O.a.createElement(
                        R.a,
                        { pointerEvents: 'none', style: [E.a.absoluteFill, w.buttonContainer] },
                        O.a.createElement(m.a, { color: E.a.theme.colors.white, size: 60 }),
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
      })(O.a.Component)
      b()(P, 'defaultProps', { waitingForPlaybackThresholdMs: 1e3 })
      var w = E.a.create(function (e) {
        return { buttonContainer: { justifyContent: 'center', alignItems: 'center' } }
      })
      t.a = P
    },
    fZNH: function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('1Pcy'),
        l = n.n(c),
        u = n('5Yy7'),
        s = n.n(u),
        f = n('N+ot'),
        p = n.n(f),
        d = n('AuHH'),
        y = n.n(d),
        v = n('KEM+'),
        b = n.n(v),
        h = (n('2G9S'), n('uFXj'), n('ERkP')),
        O = n.n(h),
        m = n('Q0n6'),
        g = n('3XMw'),
        E = n.n(g),
        R = n('CKsB'),
        _ = n('rHpw'),
        P = n('kCRK'),
        w = n('shC7'),
        j = n('MWbm')
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
      var S = E.a.d26d8730,
        k = E.a.f1b6bcec,
        D = (function (e) {
          s()(n, e)
          var t = C(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              b()(l()(e), 'state', { openContextMenu: !1, positionX: 0, positionY: 0 }),
              b()(l()(e), '_handleOpenContextMenu', function (t) {
                return function (n) {
                  var r
                  if (
                    (n.preventDefault(),
                    null != t &&
                      null !== (r = t.source) &&
                      void 0 !== r &&
                      r.id &&
                      (t.source.type === P.e.TWEET || t.source.type === P.e.BROADCAST))
                  ) {
                    document.addEventListener('click', e._handleCloseContextMenu)
                    var a = n.currentTarget.getBoundingClientRect()
                    e.setState({ openContextMenu: !0, positionX: n.clientX - a.left, positionY: n.clientY - a.top })
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
                var n,
                  r,
                  a = e.props.playerState,
                  o = null == a || null === (n = a.source) || void 0 === n ? void 0 : n.id,
                  i = null == a || null === (r = a.source) || void 0 === r ? void 0 : r.type
                o &&
                  i &&
                  t.clipboardData &&
                  (i === P.e.BROADCAST
                    ? t.clipboardData.setData('text/plain', 'https://twitter.com/i/broadcasts/'.concat(o))
                    : i === P.e.TWEET &&
                      t.clipboardData.setData('text/plain', 'https://twitter.com/i/status/'.concat(o)),
                  t.preventDefault()),
                  document.removeEventListener('copy', e._handleCopy)
              }),
              b()(l()(e), '_isGif', function (e) {
                var t = e && Object(m.j)(e)
                return t && t.contentType === P.a.GIF
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
                    l = w.a.getConstants().isRTL ? { top: i, right: o } : { top: i, left: o }
                  return O.a.createElement(
                    j.a,
                    { onContextMenu: this._handleOpenContextMenu(n), style: _.a.absoluteFill },
                    t,
                    a &&
                      O.a.createElement(
                        j.a,
                        { style: [I.menuWrapper, l] },
                        O.a.createElement(R.a, { actionText: c ? k : S, onClick: this._handleCopyVideoAddress }),
                      ),
                  )
                },
              },
            ]),
            n
          )
        })(O.a.Component)
      t.a = D
      var I = _.a.create(function (e) {
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
    mNIZ: function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('1Pcy'),
        l = n.n(c),
        u = n('5Yy7'),
        s = n.n(u),
        f = n('N+ot'),
        p = n.n(f),
        d = n('AuHH'),
        y = n.n(d),
        v = n('KEM+'),
        b = n.n(v),
        h = (n('2G9S'), n('vrRf'), n('ERkP')),
        O = n.n(h),
        m = n('/yvb'),
        g = n('Q0n6'),
        E = n('3XMw'),
        R = n.n(E),
        _ = n('I/9y'),
        P = n('rHpw'),
        w = n('+aTU'),
        j = n('kCRK'),
        C = n('w05h')
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
      var k = R.a.a681babd,
        D = R.a.db3cd325,
        I = (function (e) {
          s()(n, e)
          var t = S(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              b()(l()(e), '_buildMessage', function (t) {
                var n = e.props.playerState,
                  r = n && Object(g.e)(n)
                if (r && r.displayType === j.c.AD) {
                  var a = r.advertiserName
                  switch (t.type) {
                    case j.d.watch_now:
                      return a ? Object(C.e)({ advertiserName: a }) : C.j
                    case j.d.shop:
                      return a ? Object(C.c)({ advertiserName: a }) : C.h
                    case j.d.see_more:
                      return a ? Object(C.b)({ advertiserName: a }) : C.g
                    case j.d.go_to:
                      return a ? Object(C.a)({ advertiserName: a }) : C.f
                    case j.d.visit_site:
                    default:
                      return a ? Object(C.d)({ advertiserName: a }) : C.i
                  }
                }
                var o = new w.a(t.url).getHostname(),
                  i = 0 === o.indexOf('www.') ? o.substr(4) : o
                switch (t.type) {
                  case j.b.WATCH:
                    return k({ trimmedHostname: i })
                  case j.b.VISIT:
                  default:
                    return D({ trimmedHostname: i })
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
            i()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.playerApi,
                    n = e.playerState,
                    r = n && Object(g.e)(n)
                  r && r.cta && t && t.callToActionImpression()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.playerApi,
                    n = e.playerState
                  if (!n || !t) return null
                  var r = Object(g.e)(n)
                  if (r && r.cta) {
                    var a = r.cta,
                      o = this._buildMessage(a)
                    return O.a.createElement(
                      m.a,
                      {
                        accessibilityLabel: o,
                        icon: O.a.createElement(_.a, null),
                        onPress: this._handlePress(t, a),
                        style: A.root,
                        type: 'onMediaDominantColorFilled',
                      },
                      o,
                    )
                  }
                  return null
                },
              },
            ]),
            n
          )
        })(O.a.PureComponent),
        A = P.a.create(function (e) {
          return { root: { position: 'absolute', left: e.spaces.space12, top: e.spaces.space12 } }
        })
      t.a = I
    },
    mf6X: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return x
      })
      n('OZaJ'), n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('1Pcy'),
        l = n.n(c),
        u = n('5Yy7'),
        s = n.n(u),
        f = n('N+ot'),
        p = n.n(f),
        d = n('AuHH'),
        y = n.n(d),
        v = n('KEM+'),
        b = n.n(v),
        h = (n('yH/f'), n('2G9S'), n('ERkP')),
        O = n.n(h),
        m = n('Zl35'),
        g = n('3XMw'),
        E = n.n(g),
        R = n('cm6r'),
        _ = n('a6qo'),
        P = n('rHpw'),
        w = n('mXq/'),
        j = n('MWbm'),
        C = n('kRXa'),
        S = n('Q0n6')
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
      function D(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? k(Object(n), !0).forEach(function (t) {
                b()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : k(Object(n)).forEach(function (t) {
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
            r = y()(e)
          if (t) {
            var a = y()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var A = E.a.f17dfdb5,
        M = E.a.j190bf19,
        L = E.a.f6dc9146,
        T = E.a.d30c74fd,
        B = E.a.c9a642f9,
        x = Object.freeze({
          LIVE_BROADCAST: 'liveBroadcast',
          REPLAY_BROADCAST: 'replayBroadcast',
          VOD: 'vod',
          GIF: 'gif',
          SLATE: 'slate',
        }),
        V = (function (e) {
          s()(n, e)
          var t = I(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              b()(l()(e), '_handlePlayPress', function () {
                var t = e.props.playerApi
                t && t.play()
              }),
              b()(l()(e), '_renderBottomRow', function (t) {
                var n = t.isHovered,
                  r = e.props.playerState.isPlaying,
                  a = e.props,
                  o = a.isLive,
                  i = a.mediaType === x.VOD,
                  c = n && r
                return O.a.createElement(
                  j.a,
                  { style: H.bottomRow },
                  e._renderMediaLabel({ isVod: i, isLive: o, withRemaining: c }),
                  O.a.createElement(
                    j.a,
                    { style: H.right },
                    O.a.createElement(C.a, {
                      accessibilityLabelIcon: T,
                      accessibilityLabelSlider: B,
                      isMuted: e.props.playerState.isMuted,
                      onMuteToggle: e._handleMuteToggle,
                      onSliderChange: e._handleSliderChange,
                      volumePercent: 100 * e.props.playerState.volume,
                    }),
                  ),
                )
              }),
              b()(l()(e), '_renderMediaLabel', function (t) {
                var n = t.isLive,
                  r = t.isVod,
                  a = t.withRemaining
                return n
                  ? O.a.createElement(_.a, { align: 'left', type: 'live' }, M)
                  : O.a.createElement(m.a, { periodic: !0 }, function (t) {
                      var n = t.playerState
                      return e._renderPlaybackTime({ isVod: r, withRemaining: a, playerState: n })
                    })
              }),
              b()(l()(e), '_renderPlaybackTime', function (e) {
                var t,
                  n = e.isVod,
                  r = e.playerState,
                  a = e.withRemaining,
                  o = Object(S.e)(r),
                  i = Object(S.f)(o),
                  c = Object(S.d)(o),
                  l = i && c && Object(S.b)(i - c),
                  u = i && c && ''.concat(Object(S.b)(c), ' / ').concat(Object(S.b)(i))
                return (
                  n ? u && l && (t = a ? u : l) : (t = a ? u : L),
                  t ? O.a.createElement(_.a, { align: 'left', bold: !n && !a }, t) : null
                )
              }),
              b()(l()(e), '_handleSliderChange', function (t) {
                e.props.playerApi.setVolume(t / 100)
              }),
              b()(l()(e), '_handleMuteToggle', function () {
                var t = e.props,
                  n = t.playerApi
                t.playerState.isMuted ? n.unmute() : n.mute()
              }),
              b()(l()(e), '_handleClick', function () {
                var t = e.props,
                  n = t.playerApi
                t.playerState.isPlaying ? n.pause() : n.play()
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
                    t = this.props.playerState.isPlaying
                  return O.a.createElement(
                    R.a,
                    { interactiveStyles: null, pointerEvents: 'box-none', style: H.overlay },
                    function (n) {
                      var r = n.isHovered
                      return O.a.createElement(
                        O.a.Fragment,
                        null,
                        O.a.createElement(
                          j.a,
                          { onClick: e._handleClick, style: H.overlay },
                          O.a.createElement(
                            j.a,
                            { style: H.playButtonContainer },
                            !t && O.a.createElement(w.a, { accessibilityLabel: A, onPress: e._handlePlayPress }),
                          ),
                        ),
                        e._renderBottomRow({ isHovered: r }),
                      )
                    },
                  )
                },
              },
            ]),
            n
          )
        })(O.a.Component),
        H = P.a.create(function (e) {
          return {
            overlay: D(D({}, P.a.absoluteFillObject), {}, { flexGrow: 1 }),
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
    oH2E: function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('97Jx'),
        a = n.n(r),
        o = n('VrFO'),
        i = n.n(o),
        c = n('Y9Ll'),
        l = n.n(c),
        u = n('1Pcy'),
        s = n.n(u),
        f = n('5Yy7'),
        p = n.n(f),
        d = n('N+ot'),
        y = n.n(d),
        v = n('AuHH'),
        b = n.n(v),
        h = n('KEM+'),
        O = n.n(h),
        m = (n('2G9S'), n('ERkP')),
        g = n.n(m),
        E = n('3rX5'),
        R = n('cm6r'),
        _ = n('rHpw'),
        P = n('mXq/'),
        w = n('Q0n6')
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
          var n,
            r = b()(e)
          if (t) {
            var a = b()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return y()(this, n)
        }
      }
      var C = (function (e) {
        p()(n, e)
        var t = j(n)
        function n() {
          var e
          i()(this, n)
          for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
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
          l()(n, [
            {
              key: 'render',
              value: function () {
                var e = this.props,
                  t = e.playerApi,
                  n = e.playerState,
                  r = e.withPlayButton
                if (!(t && n && n.controls && n.controls.isPosterShown)) return null
                var o = Object(w.j)(n),
                  i = this.props.imageSrc || n.posterImage,
                  c = Object(w.l)(o)
                return g.a.createElement(
                  R.a,
                  a()({}, r ? null : { accessibilityLabel: c }, {
                    focusable: !r,
                    interactiveStyles: null,
                    onPress: this._playVideo(t),
                    style: [_.a.absoluteFill, S.buttonContainer],
                  }),
                  i && g.a.createElement(E.a, { resizeMode: 'cover', source: i, style: _.a.absoluteFill }),
                  r && g.a.createElement(P.a, { accessibilityLabel: c, onPress: this._playVideo(t), type: 'video' }),
                )
              },
            },
          ]),
          n
        )
      })(g.a.Component)
      O()(C, 'defaultProps', { withPlayButton: !0 })
      var S = _.a.create(function (e) {
        return { buttonContainer: { justifyContent: 'center', alignItems: 'center' } }
      })
      t.a = C
    },
  },
])
//# sourceMappingURL=WIPED
