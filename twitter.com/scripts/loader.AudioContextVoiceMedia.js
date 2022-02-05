;(window.webpackJsonp = window.webpackJsonp || []).push([
  [164],
  {
    NBL7: function (t, e, r) {
      'use strict'
      r.r(e),
        r.d(e, '__DANGEROUS_IMPORT__', function () {
          return g
        })
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        a = r.n(n),
        o = r('ERkP'),
        i = r.n(o),
        s = r('fs1G'),
        c = r('LxAE'),
        u = r('WRe9')
      function p(t, e) {
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
      function l(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {}
          e % 2
            ? p(Object(r), !0).forEach(function (e) {
                a()(t, e, r[e])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : p(Object(r)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
              })
        }
        return t
      }
      var g = function (t) {
        var e = (function (t) {
          var e = Object(c.a)(),
            r = t.tweet,
            n = t.withStraightBorders,
            a = e.activeItem && e.activeItem.id === r.id_str,
            o = a && e
          return i.a.useMemo(
            function () {
              var o = e.player.api,
                i = e.player.state,
                c = e.player.currentTrack
              return a && r.voiceInfo && i && o && c
                ? l(
                    l(
                      {
                        tweet: r,
                        withStraightBorders: n,
                        isMuted: i.isMuted,
                        isPlaying: i.isPlaying,
                        progressMs: c.currentTimeMs || 0,
                        durationMs: c.durationMs,
                      },
                      (function (t) {
                        var e,
                          r = { captionsState: u.a.CaptionsState.unavailable, caption: void 0 },
                          n = t.player.currentTrack
                        if (n)
                          if (n.hasCaptions)
                            if (null !== (e = t.player.state) && void 0 !== e && e.areCaptionsShown) {
                              var a
                              ;(r.captionsState = u.a.CaptionsState.on),
                                (r.caption =
                                  n.textCues && (null === (a = n.textCues[0]) || void 0 === a ? void 0 : a.text))
                            } else r.captionsState = u.a.CaptionsState.off
                          else r.captionsState = u.a.CaptionsState.unavailable
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
                    onMuteToggle: s.a,
                    onCaptionsToggle: s.a,
                  }
            },
            [o],
          )
        })(t)
        return i.a.useMemo(
          function () {
            return i.a.createElement(u.a, e)
          },
          [e],
        )
      }
    },
  },
])
//# sourceMappingURL=WIPED
