;(window.webpackJsonp = window.webpackJsonp || []).push([
  [174],
  {
    EOJ2: function (e, a, t) {
      'use strict'
      t.r(a),
        t.d(a, '__DANGEROUS_IMPORT_VIDEOPLAYER__', function () {
          return b
        })
      var n = t('ddV6'),
        i = t.n(n),
        l = t('ERkP'),
        r = t.n(l),
        o = t('epkG'),
        u = t('62wY'),
        d = t('/run'),
        c = t('MWbm'),
        s = t('Zl35'),
        p = t('rHpw'),
        m = t('hhMf'),
        f = t('ub6r'),
        v = new o.a()
      function y(e) {
        var a,
          t,
          n = e.mediaFile,
          l = e.mediaId,
          o = e.subtitles,
          y = e.trimData,
          b = e.variants,
          E = r.a.useState(null),
          w = i()(E, 2),
          h = w[0],
          k = w[1],
          R = 1e3 * n.duration,
          T =
            (null == o || null === (a = o.upload) || void 0 === a ? void 0 : a.mediaFile) instanceof u.b
              ? o.upload.mediaFile.vtt
              : void 0
        if (T) {
          var _ = document.createElement('track')
          ;(_.default = !0),
            (_.label = (null == o ? void 0 : o.displayName) || ''),
            (_.lang = (null == o ? void 0 : o.lang) || ''),
            (_.src = T),
            (_.kind = 'subtitles'),
            (t = document.createElement('video')).appendChild(_)
        }
        return (
          r.a.useEffect(
            function () {
              if (h && y) {
                var e = y.startTime || 0,
                  a = y.endTime || n.duration
                h.scrubToFraction(e / n.duration), h.setPlaybackTimeRange({ startTimeS: e, endTimeS: a })
              }
            },
            [n.duration, y, h],
          ),
          r.a.createElement(
            s.b,
            {
              aspectRatio: n.width / n.height,
              basePlayerClass: d.a,
              configType: 'static',
              contentId: l,
              contentType: 'media_entity',
              durationMs: R,
              httpClient: v,
              initiallyMuted: !0,
              key: T,
              loop: !0,
              onApiReady: k,
              playerId: 'composer_media_preview',
              poster: n.thumbnail,
              size: 'fill',
              variants: b,
              videoEl: t,
            },
            function (e) {
              var a = e.containerRef,
                t = e.playerApi,
                n = e.playerState
              if (!t || !n || !a) return null
              return r.a.createElement(
                r.a.Fragment,
                null,
                r.a.createElement(c.a, {
                  onClick: function () {
                    n.isPlaying ? t.pause() : t.play()
                  },
                  style: p.a.absoluteFill,
                }),
                r.a.createElement(
                  m.a,
                  null,
                  r.a.createElement(f.a, { containerRef: a, playerApi: t, playerState: n, showScrubber: !0 }),
                ),
              )
            },
          )
        )
      }
      var b = y
      a.default = y
    },
  },
])
//# sourceMappingURL=WIPED
