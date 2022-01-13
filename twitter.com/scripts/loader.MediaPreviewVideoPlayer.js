;(window.webpackJsonp = window.webpackJsonp || []).push([
  [171],
  {
    EOJ2: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, '__DANGEROUS_IMPORT_VIDEOPLAYER__', function () {
          return y
        })
      var n = a('ddV6'),
        i = a.n(n),
        l = a('ERkP'),
        r = a('epkG'),
        o = a('62wY'),
        u = a('/run'),
        d = a('MWbm'),
        c = a('Zl35'),
        s = a('rHpw'),
        p = a('hhMf'),
        m = a('ub6r'),
        f = new r.a()
      function v(e) {
        var t,
          a,
          n = e.mediaFile,
          r = e.mediaId,
          v = e.subtitles,
          y = e.trimData,
          b = e.variants,
          E = l.useState(null),
          w = i()(E, 2),
          h = w[0],
          k = w[1],
          R = 1e3 * n.duration,
          T =
            (null == v || null === (t = v.upload) || void 0 === t ? void 0 : t.mediaFile) instanceof o.b
              ? v.upload.mediaFile.vtt
              : void 0
        if (T) {
          var _ = document.createElement('track')
          ;(_.default = !0),
            (_.label = (null == v ? void 0 : v.displayName) || ''),
            (_.lang = (null == v ? void 0 : v.lang) || ''),
            (_.src = T),
            (_.kind = 'subtitles'),
            (a = document.createElement('video')).appendChild(_)
        }
        return (
          l.useEffect(
            function () {
              if (h && y) {
                var e = y.startTime || 0,
                  t = y.endTime || n.duration
                h.scrubToFraction(e / n.duration), h.setPlaybackTimeRange({ startTimeS: e, endTimeS: t })
              }
            },
            [n.duration, y, h],
          ),
          l.createElement(
            c.b,
            {
              aspectRatio: n.width / n.height,
              basePlayerClass: u.a,
              configType: 'static',
              contentId: r,
              contentType: 'media_entity',
              durationMs: R,
              httpClient: f,
              initiallyMuted: !0,
              key: T,
              loop: !0,
              onApiReady: k,
              playerId: 'composer_media_preview',
              poster: n.thumbnail,
              size: 'fill',
              variants: b,
              videoEl: a,
            },
            function (e) {
              var t = e.containerRef,
                a = e.playerApi,
                n = e.playerState
              if (!a || !n || !t) return null
              return l.createElement(
                l.Fragment,
                null,
                l.createElement(d.a, {
                  onClick: function () {
                    n.isPlaying ? a.pause() : a.play()
                  },
                  style: s.a.absoluteFill,
                }),
                l.createElement(
                  p.a,
                  null,
                  l.createElement(m.a, { containerRef: t, playerApi: a, playerState: n, showScrubber: !0 }),
                ),
              )
            },
          )
        )
      }
      var y = v
      t.default = v
    },
  },
])
//# sourceMappingURL=WIPED
