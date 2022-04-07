;(window.webpackJsonp = window.webpackJsonp || []).push([
  [192],
  {
    KoZZ: function (e, a, t) {
      'use strict'
      t.r(a),
        t.d(a, 'default', function () {
          return g
        })
      var n = t('ERkP'),
        l = t.n(n),
        r = t('t62R'),
        i = t('aoyV'),
        o = t('kCRK'),
        c = t('fZNH'),
        s = t('0nHQ'),
        p = t('USG3'),
        u = t('Q0n6'),
        y = t('n8uP'),
        m = t('Wms4'),
        f = t('Ur4q'),
        d = t('oH2E'),
        h = t('rHpw'),
        b = t('zCLo'),
        E = t('MWbm')
      function g(e) {
        var a,
          t = e.hashtagHighlightProps,
          n = e.playerApi,
          h = e.playerDisplayOptions,
          g = e.playerState,
          S = e.poster,
          v = e.useKeyboardShortcuts
        if (!n || !g) return null
        var H = g && Object(u.f)(g)
        if (!H || H.contentType !== o.a.GIF || !t) return null
        if (!!g.error)
          return l.a.createElement(
            p.a,
            { show: !0 },
            l.a.createElement(s.a, { imageSrc: S, playerApi: n, playerState: g }),
          )
        var F = !(null != h && h.hidePosterImage),
          P = 'PLAY_REQUESTED' !== (null === (a = g.controls) || void 0 === a ? void 0 : a.playState),
          k = g.tracksFinished
        return l.a.createElement(
          b.a,
          { enabled: !!v, playerApi: n, playerState: g },
          l.a.createElement(
            c.a,
            { playerState: g },
            l.a.createElement(
              l.a.Fragment,
              null,
              l.a.createElement(f.a, { playerApi: n, playerDisplayOptions: h, playerState: g }),
              F && !k && l.a.createElement(d.a, { imageSrc: S, playerApi: n, playerState: g, withPlayButton: P }),
              l.a.createElement(i.a, { playerState: g }),
              l.a.createElement(
                E.a,
                { style: w.root },
                l.a.createElement(
                  E.a,
                  { style: w.gifLabel },
                  l.a.createElement(m.a, null, l.a.createElement(r.b, { weight: 'bold' }, 'GIF')),
                ),
                l.a.createElement(E.a, { style: w.hashtagHighlight }, l.a.createElement(y.a, t)),
                l.a.createElement(
                  m.a,
                  { style: [w.gifLabel, w.invisibleBadge] },
                  l.a.createElement(r.b, { weight: 'bold' }, 'GIF'),
                ),
              ),
            ),
          ),
        )
      }
      var w = h.a.create(function (e) {
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
    zCLo: function (e, a, t) {
      'use strict'
      var n = t('KEM+'),
        l = t.n(n),
        r = (t('Blm6'), t('ERkP')),
        i = t.n(r),
        o = t('wD1h'),
        c = t('oLZl'),
        s = t('rHpw'),
        p = t('MWbm')
      a.a = function (e) {
        var a,
          t = i.a.useRef(null),
          n = e.enabled,
          r = e.playerApi,
          u = e.playerState
        if (!n) return e.children || null
        var y = function (e) {
            r && u && (u.isPlaying ? r.pause() : r.play())
          },
          m = function (e) {
            if (r && u) {
              var a = parseInt(e.key, 10) / 10
              r.scrubToFraction(a)
            }
          }
        return i.a.createElement(
          o.a,
          {
            containerRef: t,
            enabled: !0,
            handlers:
              ((a = {}),
              l()(a, c.a.K, y),
              l()(a, c.a.M, function (e) {
                r && u && (u.isMuted ? r.unmute() : r.mute())
              }),
              l()(a, c.a.Space, y),
              l()(a, c.a.C, function (e) {
                r && u && r.toggleCaptions()
              }),
              l()(a, c.a.Home, function (e) {
                r && u && r.scrubToFraction(0)
              }),
              l()(a, c.a[0], m),
              l()(a, c.a[1], m),
              l()(a, c.a[2], m),
              l()(a, c.a[3], m),
              l()(a, c.a[4], m),
              l()(a, c.a[5], m),
              l()(a, c.a[6], m),
              l()(a, c.a[7], m),
              l()(a, c.a[8], m),
              l()(a, c.a[9], m),
              l()(a, c.a.End, function (e) {
                r && u && r.scrubToFraction(1)
              }),
              a),
          },
          i.a.createElement(p.a, { focusable: !0, ref: t, style: s.a.absoluteFill }, e.children),
        )
      }
    },
  },
])
//# sourceMappingURL=WIPED
