;(window.webpackJsonp = window.webpackJsonp || []).push([
  [189],
  {
    TlAO: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return W
      })
      a('OZaJ'), a('+KXO'), a('1t7P'), a('LW0h'), a('daRM'), a('jwue'), a('+oxZ'), a('FtHn')
      var r = a('VrFO'),
        n = a.n(r),
        l = a('Y9Ll'),
        o = a.n(l),
        i = a('5Yy7'),
        c = a.n(i),
        p = a('N+ot'),
        s = a.n(p),
        u = a('AuHH'),
        y = a.n(u),
        f = a('KEM+'),
        m = a.n(f),
        d = (a('ho0z'), a('ERkP')),
        h = a.n(d),
        v = a('t62R'),
        b = a('/yvb'),
        E = a('3XMw'),
        O = a.n(E),
        g = a('RUwF'),
        I = a('rHpw'),
        R = a('Q0n6'),
        w = a('Wms4'),
        S =
          (a('yH/f'),
          Object.freeze({
            LIVE_BROADCAST: 'liveBroadcast',
            REPLAY_BROADCAST: 'replayBroadcast',
            VOD: 'vod',
            GIF: 'gif',
            SLATE: 'slate',
          })),
        A = O.a.j190bf19,
        P = O.a.f6dc9146,
        D = function (e) {
          var t = e.playbackDurationMs
          switch (e.type) {
            case S.LIVE_BROADCAST:
              return h.a.createElement(w.a, { type: 'live' }, A)
            case S.REPLAY_BROADCAST:
              return h.a.createElement(w.a, { bold: !0 }, P)
            case S.VOD:
              return 'number' == typeof t && h.a.createElement(w.a, null, Object(R.c)(t) || '')
            case S.GIF:
              return h.a.createElement(w.a, { bold: !0 }, 'GIF')
            default:
              return null
          }
        },
        j = a('jV+4'),
        x = a('mXq/'),
        C = a('MWbm')
      function B(e, t) {
        var a = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            a.push.apply(a, r)
        }
        return a
      }
      function N(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? B(Object(a), !0).forEach(function (t) {
                m()(e, t, a[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : B(Object(a)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
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
          var a,
            r = y()(e)
          if (t) {
            var n = y()(this).constructor
            a = Reflect.construct(r, arguments, n)
          } else a = r.apply(this, arguments)
          return s()(this, a)
        }
      }
      var k = O.a.f17dfdb5,
        T = O.a.e9bd453e,
        _ = O.a.ffeb2fc6,
        W = (function (e) {
          c()(a, e)
          var t = L(a)
          function a() {
            return n()(this, a), t.apply(this, arguments)
          }
          return (
            o()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.hideNextItemInfo
                  return h.a.createElement(
                    C.a,
                    { style: F.root },
                    h.a.createElement(
                      C.a,
                      { style: F.wrapper },
                      this.props.renderImage(),
                      e ? null : this._renderNextItemInformation(),
                      this._renderPlayButton(),
                      this._renderReplayButton(),
                    ),
                  )
                },
              },
              {
                key: '_renderNextItemInformation',
                value: function () {
                  var e = this.props.nextItemInfo
                  if (!e) return null
                  var t = e.name,
                    a = e.playbackDurationMs,
                    r = e.screenName,
                    n = e.type,
                    l = e.verified
                  return h.a.createElement(
                    C.a,
                    { style: F.nextItemInformationWrapper },
                    h.a.createElement(
                      C.a,
                      { style: F.upNextWrapper },
                      h.a.createElement(v.b, { align: 'left', color: 'white' }, _),
                    ),
                    h.a.createElement(j.a, {
                      color: 'white',
                      isVerified: l,
                      name: t,
                      screenName: r,
                      style: F.usernameWrapper,
                    }),
                    h.a.createElement(
                      C.a,
                      null,
                      h.a.createElement(
                        C.a,
                        { style: F.badgeContainer },
                        h.a.createElement(D, { playbackDurationMs: a, type: n }),
                      ),
                    ),
                  )
                },
              },
              {
                key: '_renderPlayButton',
                value: function () {
                  var e = this.props,
                    t = e.autoAdvanceDurationMs,
                    a = e.onComplete
                  return h.a.createElement(
                    C.a,
                    { style: F.playWrapper },
                    h.a.createElement(x.a, {
                      accessibilityLabel: k,
                      duration: t,
                      onComplete: a,
                      onPress: a,
                      type: 'upNext',
                    }),
                  )
                },
              },
              {
                key: '_renderReplayButton',
                value: function () {
                  var e = this.props.onReplay
                  return h.a.createElement(
                    C.a,
                    { style: F.replayWrapper },
                    h.a.createElement(b.a, {
                      accessibilityLabel: T,
                      icon: h.a.createElement(g.a, null),
                      onPress: e,
                      size: 'medium',
                      type: 'onMediaText',
                    }),
                  )
                },
              },
            ]),
            a
          )
        })(h.a.Component)
      m()(W, 'defaultProps', { autoAdvanceDurationMs: 5e3 })
      var F = I.a.create(function (e) {
        return {
          root: N(N({}, I.a.absoluteFillObject), {}, { alignItems: 'center', justifyContent: 'center' }),
          wrapper: { height: '100%', position: 'relative', width: '100%' },
          badgeContainer: { position: 'absolute' },
          playWrapper: N(N({}, I.a.absoluteFillObject), {}, { alignItems: 'center', justifyContent: 'center' }),
          replayWrapper: { bottom: e.spaces.space2, left: e.spaces.space4, position: 'absolute' },
          nextItemInformationWrapper: { left: 0, padding: e.spaces.space12, position: 'absolute', top: 0 },
          usernameWrapper: { paddingBottom: e.spaces.space4 },
          upNextWrapper: { paddingBottom: e.spaces.space16 },
        }
      })
    },
    'wHP+': function (e, t, a) {
      'use strict'
      a.r(t)
      a('OZaJ')
      var r = a('VrFO'),
        n = a.n(r),
        l = a('Y9Ll'),
        o = a.n(l),
        i = a('1Pcy'),
        c = a.n(i),
        p = a('5Yy7'),
        s = a.n(p),
        u = a('N+ot'),
        y = a.n(u),
        f = a('AuHH'),
        m = a.n(f),
        d = a('KEM+'),
        h = a.n(d),
        v = (a('2G9S'), a('ERkP')),
        b = a.n(v),
        E = a('+xEG'),
        O = a('aoyV'),
        g = a('kCRK'),
        I = a('fZNH'),
        R = a('ub6r'),
        w = a('mf6X'),
        S = a('0nHQ'),
        A = a('USG3'),
        P = a('Q0n6'),
        D = a('5VhU'),
        j = a('hhMf'),
        x = a('Ur4q'),
        C = a('oH2E'),
        B = a('TlAO'),
        N = a('mNIZ'),
        L = a('MWbm'),
        k = a('VLhD')
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
          var a,
            r = m()(e)
          if (t) {
            var n = m()(this).constructor
            a = Reflect.construct(r, arguments, n)
          } else a = r.apply(this, arguments)
          return y()(this, a)
        }
      }
      var _ = (function (e) {
        s()(a, e)
        var t = T(a)
        function a() {
          var e
          n()(this, a)
          for (var r = arguments.length, l = new Array(r), o = 0; o < r; o++) l[o] = arguments[o]
          return (
            (e = t.call.apply(t, [this].concat(l))),
            h()(c()(e), '_render', function (t) {
              var a,
                r = e.props,
                n = r.guestsState,
                l = r.isDocked,
                o = r.nextItemInfo,
                i = r.onUpNextComplete,
                c = r.onUpNextReplay,
                p = r.playerApi,
                s = r.playerDisplayOptions,
                u = r.playerState,
                y = r.poster,
                f = r.renderUpNextImage,
                m = r.shouldRenderUpNext
              if (!p || !u) return null
              var d = Object(P.e)(u),
                h =
                  'PLAY_REQUESTED' !== (null == u || null === (a = u.controls) || void 0 === a ? void 0 : a.playState),
                v = t.Observer,
                E = t.observed,
                g = Object(k.c)(u, E, k.b),
                R = !!u.error,
                D = !(null != s && s.hidePosterImage)
              return b.a.createElement(
                I.a,
                { playerState: u },
                b.a.createElement(
                  v,
                  { click: !0, interactionKey: k.a.Root, mousemove: !0, mouseover: !0 },
                  R
                    ? null
                    : b.a.createElement(
                        b.a.Fragment,
                        null,
                        b.a.createElement(x.a, {
                          hideControls: g,
                          isTouchOnlyUI: k.b,
                          playerApi: p,
                          playerDisplayOptions: s,
                          playerState: u,
                        }),
                        D && b.a.createElement(C.a, { imageSrc: y, playerApi: p, playerState: u, withPlayButton: h }),
                        b.a.createElement(O.a, { playerState: u }),
                        m
                          ? b.a.createElement(B.a, {
                              hideNextItemInfo: l,
                              nextItemInfo: o,
                              onComplete: i,
                              onReplay: c,
                              renderImage: f,
                            })
                          : l && d
                          ? b.a.createElement(w.b, {
                              isLive: !!d.isLive,
                              mediaType: Object(k.d)(d.contentType, !!d.isLive),
                              playerApi: p,
                              playerState: u,
                            })
                          : e._renderDefault(u, n, p, g, v, d),
                      ),
                  b.a.createElement(
                    A.a,
                    { show: R },
                    R && b.a.createElement(S.a, { imageSrc: y, playerApi: p, playerState: u }),
                  ),
                ),
              )
            }),
            h()(c()(e), '_renderDefault', function (t, a, r, n, l, o) {
              var i,
                c = e.props,
                p = c.containerRef,
                s = c.playerDisplayOptions,
                u = (null == o ? void 0 : o.contentType) === g.a.GIF,
                y = n && t.isPreview,
                f = !(!n || null == o || !o.isLive),
                m = !(null != s && s.hideLeftBadges) && (u || y || f),
                d = !(null != s && s.hideRightBadges) && n,
                h = null == t || null === (i = t.controls) || void 0 === i ? void 0 : i.isPosterShown
              return b.a.createElement(
                b.a.Fragment,
                null,
                b.a.createElement(D.a, { guestsState: a, playerState: t }),
                !u &&
                  b.a.createElement(
                    l,
                    { focus: !0, interactionKey: k.a.VideoCTA, mouseover: !0 },
                    b.a.createElement(A.a, { show: !n }, b.a.createElement(N.a, { playerApi: r, playerState: t })),
                  ),
                !u &&
                  !h &&
                  b.a.createElement(
                    b.a.Fragment,
                    null,
                    b.a.createElement(
                      l,
                      { focus: !0, interactionKey: k.a.A11YHook },
                      b.a.createElement(L.a, { focusable: !0 }),
                    ),
                    b.a.createElement(
                      l,
                      { focus: !0, interactionKey: k.a.ControlBar, mouseover: !0, touch: !0 },
                      b.a.createElement(R.a, {
                        containerRef: p,
                        hideControls: n,
                        playerApi: r,
                        playerState: t,
                        publisherDisplayName: null == o ? void 0 : o.publisherDisplayName,
                        publisherProfileImageUrl: null == o ? void 0 : o.publisherProfileImageUrl,
                        showScrubber: 'ad' !== (null == o ? void 0 : o.displayType) && !(null != o && o.isLive),
                      }),
                    ),
                  ),
                b.a.createElement(
                  A.a,
                  { show: m },
                  b.a.createElement(E.a, { playerDisplayOptions: s, playerState: t, position: 'left' }),
                ),
                b.a.createElement(
                  A.a,
                  { show: d },
                  b.a.createElement(E.a, { playerDisplayOptions: s, playerState: t, position: 'right' }),
                ),
              )
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
                  t = e.playerApi,
                  a = e.playerState
                return t && a
                  ? b.a.createElement(j.a, null, b.a.createElement(j.a.Context.Consumer, null, this._render))
                  : null
              },
            },
          ]),
          a
        )
      })(b.a.Component)
      t.default = _
    },
  },
])
//# sourceMappingURL=WIPED
