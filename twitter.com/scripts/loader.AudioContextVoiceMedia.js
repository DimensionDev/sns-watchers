;(window.webpackJsonp = window.webpackJsonp || []).push([
  [161],
  {
    NBL7: function (t, e, r) {
      'use strict'
      r.r(e),
        r.d(e, '__DANGEROUS_IMPORT__', function () {
          return l
        })
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        a = r.n(n),
        o = r('ERkP'),
        i = r('fs1G'),
        s = r('LxAE'),
        c = r('WRe9')
      function u(t, e) {
        var r = Object.keys(t)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t)
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function p(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {}
          e % 2
            ? u(Object(r), !0).forEach(function (e) {
                a()(t, e, r[e])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : u(Object(r)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
              })
        }
        return t
      }
      var l = function (t) {
        var e = (function (t) {
          var e = Object(s.a)(),
            r = t.tweet,
            n = t.withStraightBorders,
            a = e.activeItem && e.activeItem.id === r.id_str,
            u = a && e
          return o.useMemo(
            function () {
              var o = e.player.api,
                s = e.player.state,
                u = e.player.currentTrack
              return a && r.voiceInfo && s && o && u
                ? p(
                    p(
                      {
                        tweet: r,
                        withStraightBorders: n,
                        isMuted: s.isMuted,
                        isPlaying: s.isPlaying,
                        progressMs: u.currentTimeMs || 0,
                        durationMs: u.durationMs,
                      },
                      (function (t) {
                        var e,
                          r = { captionsState: c.a.CaptionsState.unavailable, caption: void 0 },
                          n = t.player.currentTrack
                        if (n)
                          if (n.hasCaptions)
                            if (null !== (e = t.player.state) && void 0 !== e && e.areCaptionsShown) {
                              var a
                              ;(r.captionsState = c.a.CaptionsState.on),
                                (r.caption =
                                  n.textCues && (null === (a = n.textCues[0]) || void 0 === a ? void 0 : a.text))
                            } else r.captionsState = c.a.CaptionsState.off
                          else r.captionsState = c.a.CaptionsState.unavailable
                        return r
                      })(e),
                    ),
                    {},
                    {
                      onPress: e.player.togglePlayback,
                      onMuteToggle: e.player.toggleMute,
                      onCaptionsToggle: o.toggleCaptions,
                    },
                  )
                : {
                    tweet: r,
                    withStraightBorders: n,
                    isMuted: !1,
                    isPlaying: !1,
                    progressMs: 0,
                    onPress: function () {
                      return e.load.voiceTweet(t.tweet)
                    },
                    onMuteToggle: i.a,
                    onCaptionsToggle: i.a,
                  }
            },
            [u],
          )
        })(t)
        return o.useMemo(
          function () {
            return o.createElement(c.a, e)
          },
          [e],
        )
      }
    },
  },
])
//# sourceMappingURL=WIPED
