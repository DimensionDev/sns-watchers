;(window.webpackJsonp = window.webpackJsonp || []).push([
  [191],
  {
    TlAO: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return T
      })
      var r = a('yiKp'),
        n = a.n(r),
        l = a('VrFO'),
        o = a.n(l),
        i = a('Y9Ll'),
        p = a.n(i),
        s = a('5Yy7'),
        c = a.n(s),
        u = a('2VqO'),
        m = a.n(u),
        y = a('KEM+'),
        d = a.n(y),
        f = (a('ho0z'), a('ERkP')),
        E = a.n(f),
        h = a('t62R'),
        v = a('/yvb'),
        b = a('3XMw'),
        I = a.n(b),
        A = a('RUwF'),
        S = a('rHpw'),
        g = a('Q0n6'),
        O = a('Wms4'),
        w =
          (a('yH/f'),
          Object.freeze({
            LIVE_BROADCAST: 'liveBroadcast',
            REPLAY_BROADCAST: 'replayBroadcast',
            AUDIOSPACE: 'audiospace',
            VOD: 'vod',
            GIF: 'gif',
            SLATE: 'slate',
          })),
        D = I.a.j190bf19,
        C = I.a.f6dc9146,
        R = function (e) {
          var t = e.playbackDurationMs
          switch (e.type) {
            case w.LIVE_BROADCAST:
              return E.a.createElement(O.a, { type: 'live' }, D)
            case w.REPLAY_BROADCAST:
              return E.a.createElement(O.a, { bold: !0 }, C)
            case w.VOD:
              return 'number' == typeof t && E.a.createElement(O.a, null, Object(g.c)(t) || '')
            case w.GIF:
              return E.a.createElement(O.a, { bold: !0 }, 'GIF')
            default:
              return null
          }
        },
        x = a('jV+4'),
        P = a('mXq/'),
        L = a('MWbm'),
        N = I.a.f17dfdb5,
        k = I.a.e9bd453e,
        B = I.a.ffeb2fc6,
        T = (function (e) {
          c()(a, e)
          var t = m()(a)
          function a() {
            return o()(this, a), t.apply(this, arguments)
          }
          return (
            p()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.hideNextItemInfo
                  return E.a.createElement(
                    L.a,
                    { style: _.root },
                    E.a.createElement(
                      L.a,
                      { style: _.wrapper },
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
                  return E.a.createElement(
                    L.a,
                    { style: _.nextItemInformationWrapper },
                    E.a.createElement(
                      L.a,
                      { style: _.upNextWrapper },
                      E.a.createElement(h.b, { align: 'left', color: 'white' }, B),
                    ),
                    E.a.createElement(x.a, {
                      color: 'white',
                      isVerified: l,
                      name: t,
                      screenName: r,
                      style: _.usernameWrapper,
                    }),
                    E.a.createElement(
                      L.a,
                      null,
                      E.a.createElement(
                        L.a,
                        { style: _.badgeContainer },
                        E.a.createElement(R, { playbackDurationMs: a, type: n }),
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
                  return E.a.createElement(
                    L.a,
                    { style: _.playWrapper },
                    E.a.createElement(P.a, {
                      accessibilityLabel: N,
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
                  return E.a.createElement(
                    L.a,
                    { style: _.replayWrapper },
                    E.a.createElement(v.a, {
                      accessibilityLabel: k,
                      icon: E.a.createElement(A.a, null),
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
        })(E.a.Component)
      d()(T, 'defaultProps', { autoAdvanceDurationMs: 5e3 })
      var _ = S.a.create(function (e) {
        return {
          root: n()(n()({}, S.a.absoluteFillObject), {}, { alignItems: 'center', justifyContent: 'center' }),
          wrapper: { height: '100%', position: 'relative', width: '100%' },
          badgeContainer: { position: 'absolute' },
          playWrapper: n()(n()({}, S.a.absoluteFillObject), {}, { alignItems: 'center', justifyContent: 'center' }),
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
      var r = a('VrFO'),
        n = a.n(r),
        l = a('Y9Ll'),
        o = a.n(l),
        i = a('1Pcy'),
        p = a.n(i),
        s = a('5Yy7'),
        c = a.n(s),
        u = a('2VqO'),
        m = a.n(u),
        y = a('KEM+'),
        d = a.n(y),
        f = (a('2G9S'), a('ERkP')),
        E = a.n(f),
        h = a('+xEG'),
        v = a('aoyV'),
        b = a('kCRK'),
        I = a('fZNH'),
        A = a('ub6r'),
        S = a('mf6X'),
        g = a('0nHQ'),
        O = a('USG3'),
        w = a('Q0n6'),
        D = a('5VhU'),
        C = a('hhMf'),
        R = a('Ur4q'),
        x = a('oH2E'),
        P = a('TlAO'),
        L = a('mNIZ'),
        N = a('MWbm'),
        k = a('VLhD'),
        B = (function (e) {
          c()(a, e)
          var t = m()(a)
          function a() {
            var e
            n()(this, a)
            for (var r = arguments.length, l = new Array(r), o = 0; o < r; o++) l[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(l))),
              d()(p()(e), '_render', function (t) {
                var a,
                  r = e.props,
                  n = r.guestsState,
                  l = r.isDocked,
                  o = r.nextItemInfo,
                  i = r.onUpNextComplete,
                  p = r.onUpNextReplay,
                  s = r.playerApi,
                  c = r.playerDisplayOptions,
                  u = r.playerState,
                  m = r.poster,
                  y = r.renderUpNextImage,
                  d = r.shouldRenderUpNext
                if (!s || !u) return null
                var f = Object(w.f)(u),
                  h =
                    'PLAY_REQUESTED' !==
                    (null == u || null === (a = u.controls) || void 0 === a ? void 0 : a.playState),
                  b = t.Observer,
                  A = t.observed,
                  D = Object(k.c)(u, A, k.b),
                  C = !!u.error,
                  L = !(null != c && c.hidePosterImage)
                return E.a.createElement(
                  I.a,
                  { playerState: u },
                  E.a.createElement(
                    b,
                    { click: !0, interactionKey: k.a.Root, mousemove: !0, mouseover: !0 },
                    C
                      ? null
                      : E.a.createElement(
                          E.a.Fragment,
                          null,
                          E.a.createElement(R.a, {
                            hideControls: D,
                            isTouchOnlyUI: k.b,
                            playerApi: s,
                            playerDisplayOptions: c,
                            playerState: u,
                          }),
                          L && E.a.createElement(x.a, { imageSrc: m, playerApi: s, playerState: u, withPlayButton: h }),
                          E.a.createElement(v.a, { playerState: u }),
                          d
                            ? E.a.createElement(P.a, {
                                hideNextItemInfo: l,
                                nextItemInfo: o,
                                onComplete: i,
                                onReplay: p,
                                renderImage: y,
                              })
                            : l && f
                            ? E.a.createElement(S.b, {
                                isLive: !!f.isLive,
                                mediaType: Object(k.d)(f.contentType, !!f.isLive),
                                playerApi: s,
                                playerState: u,
                              })
                            : e._renderDefault(u, n, s, D, b, f),
                        ),
                    E.a.createElement(
                      O.a,
                      { show: C },
                      C && E.a.createElement(g.a, { imageSrc: m, playerApi: s, playerState: u }),
                    ),
                  ),
                )
              }),
              d()(p()(e), '_renderDefault', function (t, a, r, n, l, o) {
                var i,
                  p = e.props,
                  s = p.containerRef,
                  c = p.playerDisplayOptions,
                  u = (null == o ? void 0 : o.contentType) === b.a.GIF,
                  m = n && t.isPreview,
                  y = !(!n || null == o || !o.isLive),
                  d = !(null != c && c.hideLeftBadges) && (u || m || y),
                  f = !(null != c && c.hideRightBadges) && n,
                  v = null == t || null === (i = t.controls) || void 0 === i ? void 0 : i.isPosterShown
                return E.a.createElement(
                  E.a.Fragment,
                  null,
                  E.a.createElement(D.a, { guestsState: a, playerState: t }),
                  !u &&
                    E.a.createElement(
                      l,
                      { focus: !0, interactionKey: k.a.VideoCTA, mouseover: !0 },
                      E.a.createElement(O.a, { show: !n }, E.a.createElement(L.a, { playerApi: r, playerState: t })),
                    ),
                  !u &&
                    !v &&
                    E.a.createElement(
                      E.a.Fragment,
                      null,
                      E.a.createElement(
                        l,
                        { focus: !0, interactionKey: k.a.A11YHook },
                        E.a.createElement(N.a, { focusable: !0 }),
                      ),
                      E.a.createElement(
                        l,
                        { focus: !0, interactionKey: k.a.ControlBar, mouseover: !0, touch: !0 },
                        E.a.createElement(A.a, {
                          containerRef: s,
                          hideControls: n,
                          playerApi: r,
                          playerState: t,
                          publisherDisplayName: null == o ? void 0 : o.publisherDisplayName,
                          publisherProfileImageUrl: null == o ? void 0 : o.publisherProfileImageUrl,
                          showScrubber: 'ad' !== (null == o ? void 0 : o.displayType) && !(null != o && o.isLive),
                        }),
                      ),
                    ),
                  E.a.createElement(
                    O.a,
                    { show: d },
                    E.a.createElement(h.a, { playerDisplayOptions: c, playerState: t, position: 'left' }),
                  ),
                  E.a.createElement(
                    O.a,
                    { show: f },
                    E.a.createElement(h.a, { playerDisplayOptions: c, playerState: t, position: 'right' }),
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
                    ? E.a.createElement(C.a, null, E.a.createElement(C.a.Context.Consumer, null, this._render))
                    : null
                },
              },
            ]),
            a
          )
        })(E.a.Component)
      t.default = B
    },
  },
])
//# sourceMappingURL=WIPED
