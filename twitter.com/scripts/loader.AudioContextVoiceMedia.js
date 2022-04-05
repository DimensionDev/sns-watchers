;(window.webpackJsonp = window.webpackJsonp || []).push([
  [167],
  {
    NBL7: function (t, e, a) {
      'use strict'
      a.r(e),
        a.d(e, '__DANGEROUS_IMPORT__', function () {
          return c
        })
      var n = a('yiKp'),
        i = a.n(n),
        o = a('ERkP'),
        r = a.n(o),
        s = a('fs1G'),
        u = a('LxAE'),
        p = a('pupE'),
        l = a('IV4V'),
        c = function (t) {
          var e = (function (t) {
            var e = Object(u.a)(),
              a = t.tweet,
              n = t.withStraightBorders,
              o = e.activeItem && e.activeItem.id === a.id_str,
              c = o && e
            return r.a.useMemo(
              function () {
                var r = e.player.api,
                  u = e.player.state,
                  c = e.player.currentTrack
                return o && l.a.hasVoiceMedia(a) && u && r && c
                  ? i()(
                      i()(
                        {
                          tweet: a,
                          withStraightBorders: n,
                          isMuted: u.isMuted,
                          isPlaying: u.isPlaying,
                          progressMs: c.currentTimeMs || 0,
                          durationMs: c.durationMs,
                        },
                        (function (t) {
                          var e,
                            a = { captionsState: p.a.CaptionsState.unavailable, caption: void 0 },
                            n = t.player.currentTrack
                          if (n)
                            if (n.hasCaptions)
                              if (null !== (e = t.player.state) && void 0 !== e && e.areCaptionsShown) {
                                var i
                                ;(a.captionsState = p.a.CaptionsState.on),
                                  (a.caption =
                                    n.textCues && (null === (i = n.textCues[0]) || void 0 === i ? void 0 : i.text))
                              } else a.captionsState = p.a.CaptionsState.off
                            else a.captionsState = p.a.CaptionsState.unavailable
                          return a
                        })(e),
                      ),
                      {},
                      {
                        onPress: e.player.togglePlayback,
                        onMuteToggle: e.player.toggleMute,
                        onCaptionsToggle: r.toggleCaptions,
                      },
                    )
                  : {
                      tweet: a,
                      withStraightBorders: n,
                      isMuted: !1,
                      isPlaying: !1,
                      progressMs: 0,
                      onPress: function () {
                        return e.load.voiceTweet(t.tweet)
                      },
                      onMuteToggle: s.a,
                      onCaptionsToggle: s.a,
                    }
              },
              [c],
            )
          })(t)
          return r.a.useMemo(
            function () {
              return r.a.createElement(p.a, e)
            },
            [e],
          )
        }
    },
  },
])
//# sourceMappingURL=WIPED
