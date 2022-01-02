;(window.webpackJsonp = window.webpackJsonp || []).push([
  [187],
  {
    TlAO: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return _
      })
      r('OZaJ'), r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('VrFO'),
        a = r.n(n),
        l = r('Y9Ll'),
        o = r.n(l),
        i = r('5Yy7'),
        c = r.n(i),
        p = r('N+ot'),
        s = r.n(p),
        u = r('AuHH'),
        y = r.n(u),
        f = r('KEM+'),
        m = r.n(f),
        d = (r('ho0z'), r('ERkP')),
        h = r('t62R'),
        v = r('/yvb'),
        b = r('3XMw'),
        E = r.n(b),
        O = r('RUwF'),
        g = r('rHpw'),
        I = r('Q0n6'),
        R = r('Wms4'),
        w =
          (r('yH/f'),
          Object.freeze({
            LIVE_BROADCAST: 'liveBroadcast',
            REPLAY_BROADCAST: 'replayBroadcast',
            VOD: 'vod',
            GIF: 'gif',
            SLATE: 'slate',
          })),
        S = E.a.j190bf19,
        A = E.a.f6dc9146,
        P = function (e) {
          var t = e.playbackDurationMs
          switch (e.type) {
            case w.LIVE_BROADCAST:
              return d.createElement(R.a, { type: 'live' }, S)
            case w.REPLAY_BROADCAST:
              return d.createElement(R.a, { bold: !0 }, A)
            case w.VOD:
              return 'number' == typeof t && d.createElement(R.a, null, Object(I.c)(t) || '')
            case w.GIF:
              return d.createElement(R.a, { bold: !0 }, 'GIF')
            default:
              return null
          }
        },
        D = r('jV+4'),
        j = r('mXq/'),
        x = r('MWbm')
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
      function B(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? C(Object(r), !0).forEach(function (t) {
                m()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : C(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      function N(e) {
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
          return s()(this, r)
        }
      }
      var L = E.a.f17dfdb5,
        k = E.a.e9bd453e,
        T = E.a.ffeb2fc6,
        _ = (function (e) {
          c()(r, e)
          var t = N(r)
          function r() {
            return a()(this, r), t.apply(this, arguments)
          }
          return (
            o()(r, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.hideNextItemInfo
                  return d.createElement(
                    x.a,
                    { style: W.root },
                    d.createElement(
                      x.a,
                      { style: W.wrapper },
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
                    r = e.playbackDurationMs,
                    n = e.screenName,
                    a = e.type,
                    l = e.verified
                  return d.createElement(
                    x.a,
                    { style: W.nextItemInformationWrapper },
                    d.createElement(
                      x.a,
                      { style: W.upNextWrapper },
                      d.createElement(h.b, { align: 'left', color: 'white' }, T),
                    ),
                    d.createElement(D.a, {
                      color: 'white',
                      isVerified: l,
                      name: t,
                      screenName: n,
                      style: W.usernameWrapper,
                    }),
                    d.createElement(
                      x.a,
                      null,
                      d.createElement(
                        x.a,
                        { style: W.badgeContainer },
                        d.createElement(P, { playbackDurationMs: r, type: a }),
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
                    r = e.onComplete
                  return d.createElement(
                    x.a,
                    { style: W.playWrapper },
                    d.createElement(j.a, {
                      accessibilityLabel: L,
                      duration: t,
                      onComplete: r,
                      onPress: r,
                      type: 'upNext',
                    }),
                  )
                },
              },
              {
                key: '_renderReplayButton',
                value: function () {
                  var e = this.props.onReplay
                  return d.createElement(
                    x.a,
                    { style: W.replayWrapper },
                    d.createElement(v.a, {
                      accessibilityLabel: k,
                      icon: d.createElement(O.a, null),
                      onPress: e,
                      size: 'medium',
                      type: 'onMediaText',
                    }),
                  )
                },
              },
            ]),
            r
          )
        })(d.Component)
      m()(_, 'defaultProps', { autoAdvanceDurationMs: 5e3 })
      var W = g.a.create(function (e) {
        return {
          root: B(B({}, g.a.absoluteFillObject), {}, { alignItems: 'center', justifyContent: 'center' }),
          wrapper: { height: '100%', position: 'relative', width: '100%' },
          badgeContainer: { position: 'absolute' },
          playWrapper: B(B({}, g.a.absoluteFillObject), {}, { alignItems: 'center', justifyContent: 'center' }),
          replayWrapper: { bottom: e.spaces.space2, left: e.spaces.space4, position: 'absolute' },
          nextItemInformationWrapper: { left: 0, padding: e.spaces.space12, position: 'absolute', top: 0 },
          usernameWrapper: { paddingBottom: e.spaces.space4 },
          upNextWrapper: { paddingBottom: e.spaces.space16 },
        }
      })
    },
    'wHP+': function (e, t, r) {
      'use strict'
      r.r(t)
      r('OZaJ')
      var n = r('VrFO'),
        a = r.n(n),
        l = r('Y9Ll'),
        o = r.n(l),
        i = r('1Pcy'),
        c = r.n(i),
        p = r('5Yy7'),
        s = r.n(p),
        u = r('N+ot'),
        y = r.n(u),
        f = r('AuHH'),
        m = r.n(f),
        d = r('KEM+'),
        h = r.n(d),
        v = (r('2G9S'), r('ERkP')),
        b = r('+xEG'),
        E = r('aoyV'),
        O = r('kCRK'),
        g = r('fZNH'),
        I = r('ub6r'),
        R = r('mf6X'),
        w = r('0nHQ'),
        S = r('USG3'),
        A = r('Q0n6'),
        P = r('5VhU'),
        D = r('hhMf'),
        j = r('Ur4q'),
        x = r('oH2E'),
        C = r('TlAO'),
        B = r('mNIZ'),
        N = r('MWbm'),
        L = r('VLhD')
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
          var r,
            n = m()(e)
          if (t) {
            var a = m()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return y()(this, r)
        }
      }
      var T = (function (e) {
        s()(r, e)
        var t = k(r)
        function r() {
          var e
          a()(this, r)
          for (var n = arguments.length, l = new Array(n), o = 0; o < n; o++) l[o] = arguments[o]
          return (
            (e = t.call.apply(t, [this].concat(l))),
            h()(c()(e), '_render', function (t) {
              var r,
                n = e.props,
                a = n.guestsState,
                l = n.isDocked,
                o = n.nextItemInfo,
                i = n.onUpNextComplete,
                c = n.onUpNextReplay,
                p = n.playerApi,
                s = n.playerDisplayOptions,
                u = n.playerState,
                y = n.poster,
                f = n.renderUpNextImage,
                m = n.shouldRenderUpNext
              if (!p || !u) return null
              var d = Object(A.e)(u),
                h =
                  'PLAY_REQUESTED' !== (null == u || null === (r = u.controls) || void 0 === r ? void 0 : r.playState),
                b = t.Observer,
                O = t.observed,
                I = Object(L.c)(u, O, L.b),
                P = !!u.error,
                D = !(null != s && s.hidePosterImage)
              return v.createElement(
                g.a,
                { playerState: u },
                v.createElement(
                  b,
                  { click: !0, interactionKey: L.a.Root, mousemove: !0, mouseover: !0 },
                  P
                    ? null
                    : v.createElement(
                        v.Fragment,
                        null,
                        v.createElement(j.a, {
                          hideControls: I,
                          isTouchOnlyUI: L.b,
                          playerApi: p,
                          playerDisplayOptions: s,
                          playerState: u,
                        }),
                        D && v.createElement(x.a, { imageSrc: y, playerApi: p, playerState: u, withPlayButton: h }),
                        v.createElement(E.a, { playerState: u }),
                        m
                          ? v.createElement(C.a, {
                              hideNextItemInfo: l,
                              nextItemInfo: o,
                              onComplete: i,
                              onReplay: c,
                              renderImage: f,
                            })
                          : l && d
                          ? v.createElement(R.b, {
                              isLive: !!d.isLive,
                              mediaType: Object(L.d)(d.contentType, !!d.isLive),
                              playerApi: p,
                              playerState: u,
                            })
                          : e._renderDefault(u, a, p, I, b, d),
                      ),
                  v.createElement(
                    S.a,
                    { show: P },
                    P && v.createElement(w.a, { imageSrc: y, playerApi: p, playerState: u }),
                  ),
                ),
              )
            }),
            h()(c()(e), '_renderDefault', function (t, r, n, a, l, o) {
              var i,
                c = e.props,
                p = c.containerRef,
                s = c.playerDisplayOptions,
                u = (null == o ? void 0 : o.contentType) === O.a.GIF,
                y = a && t.isPreview,
                f = !(!a || null == o || !o.isLive),
                m = !(null != s && s.hideLeftBadges) && (u || y || f),
                d = !(null != s && s.hideRightBadges) && a,
                h = null == t || null === (i = t.controls) || void 0 === i ? void 0 : i.isPosterShown
              return v.createElement(
                v.Fragment,
                null,
                v.createElement(P.a, { guestsState: r, playerState: t }),
                !u &&
                  v.createElement(
                    l,
                    { focus: !0, interactionKey: L.a.VideoCTA, mouseover: !0 },
                    v.createElement(S.a, { show: !a }, v.createElement(B.a, { playerApi: n, playerState: t })),
                  ),
                !u &&
                  !h &&
                  v.createElement(
                    v.Fragment,
                    null,
                    v.createElement(
                      l,
                      { focus: !0, interactionKey: L.a.A11YHook },
                      v.createElement(N.a, { focusable: !0 }),
                    ),
                    v.createElement(
                      l,
                      { focus: !0, interactionKey: L.a.ControlBar, mouseover: !0, touch: !0 },
                      v.createElement(I.a, {
                        containerRef: p,
                        hideControls: a,
                        playerApi: n,
                        playerState: t,
                        publisherDisplayName: null == o ? void 0 : o.publisherDisplayName,
                        publisherProfileImageUrl: null == o ? void 0 : o.publisherProfileImageUrl,
                        showScrubber: 'ad' !== (null == o ? void 0 : o.displayType) && !(null != o && o.isLive),
                      }),
                    ),
                  ),
                v.createElement(
                  S.a,
                  { show: m },
                  v.createElement(b.a, { playerDisplayOptions: s, playerState: t, position: 'left' }),
                ),
                v.createElement(
                  S.a,
                  { show: d },
                  v.createElement(b.a, { playerDisplayOptions: s, playerState: t, position: 'right' }),
                ),
              )
            }),
            e
          )
        }
        return (
          o()(r, [
            {
              key: 'render',
              value: function () {
                var e = this.props,
                  t = e.playerApi,
                  r = e.playerState
                return t && r
                  ? v.createElement(D.a, null, v.createElement(D.a.Context.Consumer, null, this._render))
                  : null
              },
            },
          ]),
          r
        )
      })(v.Component)
      t.default = T
    },
  },
])
//# sourceMappingURL=WIPED
