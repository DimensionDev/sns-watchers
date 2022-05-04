;(window.webpackJsonp = window.webpackJsonp || []).push([
  [22],
  {
    '+/OB': function (t, e, i) {
      var n = i('ax0f'),
        a = i('9JhN'),
        s = i('cLeC'),
        r = a.Date,
        o = s(r.prototype.getTime)
      n(
        { target: 'Date', stat: !0 },
        {
          now: function () {
            return o(new r())
          },
        },
      )
    },
    5878: function (t, e, i) {
      var n = i('ax0f'),
        a = i('zh11')
      n({ target: 'Function', proto: !0, forced: Function.bind !== a }, { bind: a })
    },
    'W/Kd': function (t, e, i) {
      var n = i('695J')
      ;(t.exports = function (t, e) {
        ;(t.prototype = Object.create(e.prototype)), (t.prototype.constructor = t), n(t, e)
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports)
    },
    XmKV: function (t, e, i) {
      'use strict'
      i.d(e, 'b', function () {
        return s
      }),
        i.d(e, 'a', function () {
          return r
        })
      i('6U7i'), i('LW0h'), i('7x/C')
      var n = function (t, e) {
          if (0 !== t.length) {
            for (var i = t[0], n = e(i), a = 1; a < t.length; a++) {
              var s = t[a],
                r = e(s)
              r < n && ((i = s), (n = r))
            }
            return i
          }
        },
        a = i('HT/6'),
        s = function (t) {
          var e,
            i,
            a =
              null == t || null === (e = t[0]) || void 0 === e || null === (i = e.placement) || void 0 === i
                ? void 0
                : i.scrollY()
          return n(
            t,
            0 === a
              ? function (t) {
                  return t.placement ? t.placement.distanceToTop() : Number.MAX_VALUE
                }
              : function (t) {
                  return t.placement ? t.placement.distanceToCenter() : Number.MAX_VALUE
                },
          )
        },
        r = function (t) {
          var e = t.filter(function (t) {
            return t.playbackPriority === a.a.DOCKABLE
          })
          return e.length ? e[0] : s(t)
        }
    },
    aLgo: function (t, e, i) {
      i('aokA')('iterator')
    },
    cARO: function (t, e, i) {
      var n = i('cLeC'),
        a = i('uLp7'),
        s = Date.prototype,
        r = 'Invalid Date',
        o = 'toString',
        c = n(s.toString),
        l = n(s.getTime)
      String(new Date(NaN)) != r &&
        a(s, o, function () {
          var t = l(this)
          return t == t ? c(this) : r
        })
    },
    gOg7: function (t, e, i) {
      'use strict'
      i('1t7P'),
        i('jQ/y'),
        i('aLgo'),
        i('hBpG'),
        i('jwue'),
        i('hCOa'),
        i('vrRf'),
        i('plBw'),
        i('lTEL'),
        i('z84I'),
        i('KOtZ'),
        i('M+/F'),
        i('+/OB'),
        i('cARO'),
        i('5878'),
        i('ho0z'),
        i('6U7i'),
        i('ssvU'),
        i('kH1Z'),
        i('IAdD'),
        i('+KXO'),
        i('7x/C'),
        i('JtPf'),
        i('KqXw'),
        i('DZ+c'),
        i('87if'),
        i('+oxZ'),
        i('kYxP'),
        i('sVFb')
      var n,
        a,
        s,
        r,
        o = i('1Pcy'),
        c = i.n(o),
        l = i('W/Kd'),
        u = i.n(l),
        d = i('KEM+'),
        h = i.n(d),
        p = i('r2q8'),
        v = i.n(p)
      function y(t, e) {
        var i
        if ('undefined' == typeof Symbol || null == t[Symbol.iterator]) {
          if (
            Array.isArray(t) ||
            (i = (function (t, e) {
              if (!t) return
              if ('string' == typeof t) return _(t, e)
              var i = Object.prototype.toString.call(t).slice(8, -1)
              'Object' === i && t.constructor && (i = t.constructor.name)
              if ('Map' === i || 'Set' === i) return Array.from(t)
              if ('Arguments' === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return _(t, e)
            })(t)) ||
            (e && t && 'number' == typeof t.length)
          ) {
            i && (t = i)
            var n = 0
            return function () {
              return n >= t.length ? { done: !0 } : { done: !1, value: t[n++] }
            }
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
          )
        }
        return (i = t[Symbol.iterator]()).next.bind(i)
      }
      function _(t, e) {
        ;(null == e || e > t.length) && (e = t.length)
        for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i]
        return n
      }
      var f = 'AD_SKIP_EVENT',
        m = 'CAPTIONS_TOGGLED_EVENT',
        g = 'CONFIG_LOADED_EVENT',
        b = 'CTA_CLICK_EVENT',
        T = 'CTA_IMPRESSION_EVENT',
        E = 'ERROR_EVENT',
        P = 'FULL_SCREEN_EVENT',
        M = 'GROUPM_VIEW_EVENT',
        k = 'HEARTBEAT_EVENT',
        w = 'HEARTBEAT_START_EVENT',
        S = 'INITIAL_CTA_IMPRESSION_EVENT',
        I = 'INITIAL_INTEND_TO_PLAY_EVENT',
        A = 'INTEND_TO_PLAY_EVENT',
        C = 'LOOP_EVENT',
        L = 'MRC_AUDIBLE_VIEW_EVENT',
        V = 'MRC_VIEW_EVENT',
        N = 'MUTE_EVENT',
        W = 'ONE_SEC_VIEW_EVENT',
        O = 'SIX_SEC_VIEW_EVENT',
        D = 'SHORT_FORM_COMPLETE_EVENT',
        F = 'PAUSE_EVENT',
        x = 'PLAY_EVENT',
        B = 'PLAY_FROM_TAP_EVENT',
        R = 'PLAYBACK_25_EVENT',
        H = 'PLAYBACK_50_EVENT',
        U = 'PLAYBACK_75_EVENT',
        K = 'PLAYBACK_95_EVENT',
        Y = 'PLAYBACK_COMPLETE_EVENT',
        G = 'PLAYBACK_ERROR_EVENT',
        j = 'PLAYBACK_LAPSE_EVENT',
        z = 'PLAYBACK_SPEED_CHANGE_EVENT',
        q = 'PLAYBACK_START_EVENT',
        X = 'REPLAY_EVENT',
        J = 'REWIND_EVENT',
        Z = 'SHRINK_EVENT',
        Q = 'STARTUP_ERROR_EVENT',
        $ = 'TEARDOWN_EVENT',
        tt = 'TICK_EVENT',
        et = 'TRACK_FINISHED_EVENT',
        it = 'UNMUTE_EVENT',
        nt = 'VIDEO_SESSION_EVENT',
        at = 'VIDEO_QUALITY_VIEW_EVENT',
        st = 'VIDEO_VIEW_EVENT',
        rt = 'VIEW_THRESHOLD_EVENT',
        ot = 'ad',
        ct = 'content',
        lt = 'broadcast',
        ut = 'gif',
        dt = 'live',
        ht = 'media_entity',
        pt = 'partner_video',
        vt = 'periscope',
        yt = 'vine',
        _t = 'vmap',
        ft = (((n = {})[yt] = 2), (n[ut] = 3), (n[_t] = 1), (n[ht] = 1), (n[dt] = 1), (n[vt] = 5), (n[lt] = 1), n),
        mt = {
          event: 'url',
          go_to: 'url',
          image: 'url',
          url: 'url',
          shop: 'url',
          see_more: 'url',
          visit: 'url',
          visit_site: 'url',
          watch: 'url',
          watch_now: 'watch',
        },
        gt = 1,
        bt = 2,
        Tt = 3,
        Et = 4,
        Pt = 5,
        Mt = 6,
        kt = 7,
        wt = 8
      function St(t) {
        return At(t, t.source.trackId)
      }
      function It(t) {
        return At(t, t.currentTrackId)
      }
      function At(t, e) {
        return t.tracks.find(function (t) {
          return e === t.id
        })
      }
      function Ct(t) {
        return t.tracks.find(function (t) {
          return ot === t.displayType
        })
      }
      function Lt(t) {
        return Boolean(t) && t.isPlaying && !t.isSeeking && !t.isMuted
      }
      function Vt(t) {
        var e
        switch (t) {
          case 0.25:
            e = Pt
            break
          case 0.5:
            e = gt
            break
          case 0.75:
            e = Mt
            break
          case 1.25:
            e = kt
            break
          case 1.5:
            e = Tt
            break
          case 1.75:
            e = wt
            break
          case 2:
            e = Et
            break
          default:
            e = bt
        }
        return e
      }
      var Nt =
          (((a = {})[st] = 'creativeView'),
          (a[R] = 'firstQuartile'),
          (a[H] = 'midpoint'),
          (a[U] = 'thirdQuartile'),
          (a[Y] = 'complete'),
          (a[x] = 'resume'),
          (a[F] = 'pause'),
          (a[J] = 'rewind'),
          (a[E] = 'adError'),
          a),
        Wt = (function () {
          function t(t) {
            var e = this
            Object.keys(Nt).forEach(function (i) {
              t.on(i, function (t) {
                e.fireBeacon(Nt[i], t)
              })
            }),
              t.on(q, this.onPlaybackStart.bind(this))
          }
          var e = t.prototype
          return (
            (e.onPlaybackStart = function (t) {
              this.fireBeacon('start', t), this.fireBeacon('adImpression', t)
            }),
            (e.fireBeacon = function (t, e) {
              var i = It(e)
              if (void 0 !== i && void 0 !== i.beacons && void 0 !== i.beacons[t])
                for (var n, a = y(i.beacons[t]); !(n = a()).done; ) {
                  var s = n.value
                  new window.Image().src = s
                }
            }),
            t
          )
        })(),
        Ot = (function () {
          function t(t) {
            ;(this.analytics = t), this.analytics.on(tt, this.onTickEvent.bind(this))
          }
          return (
            (t.prototype.onTickEvent = function (t) {
              var e = t.areCaptionsShown,
                i = this.currentCaptionsState
              i !== e &&
                (((!1 === i && !0 === e) || (!0 === i && !1 === e)) && this.analytics.emit(m, t, e),
                (this.currentCaptionsState = e))
            }),
            t
          )
        })(),
        Dt = (function () {
          function t(t) {
            ;(this.analytics = t),
              (this.hasFiredOnTrackMap = {}),
              this.analytics.on(T, this.onCtaImpressionEvent.bind(this))
          }
          return (
            (t.prototype.onCtaImpressionEvent = function (t) {
              var e = t.currentTrackId
              this.hasFiredOnTrackMap[e] || ((this.hasFiredOnTrackMap[e] = !0), this.analytics.emit(S, t))
            }),
            t
          )
        })(),
        Ft = (function () {
          function t(t) {
            ;(this.analytics = t),
              (this.hasStarted = !1),
              (this.hasFired = !1),
              this.analytics.on(q, this.onPlaybackStartEvent.bind(this)),
              this.analytics.on(A, this.onShowEvent.bind(this)),
              this.analytics.on(E, this.onErrorEvent.bind(this))
          }
          var e = t.prototype
          return (
            (e.onPlaybackStartEvent = function () {
              this.hasStarted = !0
            }),
            (e.onShowEvent = function () {
              this.intentToPlayTime = new Date()
            }),
            (e.onErrorEvent = function (t, e) {
              var i = this.constructClientMediaEventError(t, e)
              if (!this.hasStarted && !this.hasFired) {
                var n,
                  a = void 0 !== this.intentToPlayTime ? new Date() - this.intentToPlayTime : void 0
                i && (n = { latency_millis: a, error: i }),
                  this.analytics.emit(Q, t, Object.assign({ latency: a }, e), n),
                  (this.hasFired = !0)
              }
              this.analytics.emit(G, t, e, i)
            }),
            (e.constructClientMediaEventError = function (t, e) {
              var i = (e && e.media_details && e.media_details.media_error) || {}
              return { is_fatal: i.is_fatal, category: i.category, message: i.message, retry_count: i.retry_count }
            }),
            t
          )
        })(),
        xt = (function () {
          function t(t) {
            ;(this.bufferingCount = 0),
              (this.bufferingDurationMs = 0),
              (this.bufferingBeginTimeMs = void 0),
              t.on(tt, this.onTickEvent.bind(this)),
              t.on(w, this.onHeartbeatStart.bind(this)),
              t.on(k, this.onHeartbeat.bind(this))
          }
          var e = t.prototype
          return (
            (e.onHeartbeat = function (t) {
              this.reset(t)
            }),
            (e.onHeartbeatStart = function (t) {
              this.reset(t)
            }),
            (e.onTickEvent = function (t) {
              var e = It(t)
              void 0 !== e &&
                (e.isBuffering && null == this.bufferingBeginTimeMs
                  ? ((this.bufferingBeginTimeMs = Date.now()), this.bufferingCount++)
                  : e.isBuffering ||
                    null == this.bufferingBeginTimeMs ||
                    ((this.bufferingDurationMs += Date.now() - this.bufferingBeginTimeMs),
                    (this.bufferingBeginTimeMs = void 0)))
            }),
            (e.getBufferTime = function (t) {
              var e = It(t)
              if (void 0 !== e) {
                var i = this.bufferingDurationMs
                return (
                  e.isBuffering && null != this.bufferingBeginTimeMs && (i += Date.now() - this.bufferingBeginTimeMs), i
                )
              }
            }),
            (e.reset = function (t) {
              var e = It(t)
              void 0 !== e &&
                ((this.bufferingBeginTimeMs = e.isBuffering ? Date.now() : void 0),
                (this.bufferingCount = e.isBuffering ? 1 : 0),
                (this.bufferingDurationMs = 0))
            }),
            t
          )
        })()
      function Bt(t) {
        return 'number' != typeof t || Number.isNaN(t) || t === 1 / 0 || t === -1 / 0
          ? 'string' == typeof t
            ? t
            : void 0
          : t.toString()
      }
      var Rt = (function () {
        function t(t) {
          ;(this.analytics = t),
            (this.bufferingDurationListener = new xt(t)),
            (this.lastKnownDataUsageBytes = 0),
            (this.audibleDuration = 0),
            (this.bitrateHistory = []),
            (this.latencyHistory = []),
            this.previousTickTimestamp,
            this.analytics.on(tt, this.onTickEvent.bind(this)),
            this.analytics.on(x, this.onPlayEvent.bind(this)),
            this.analytics.on(q, this.onPlaybackStartEvent.bind(this)),
            this.analytics.on(et, this.onTrackFinishedEvent.bind(this)),
            this.analytics.on(E, this.onErrorEvent.bind(this)),
            this.analytics.on(F, this.onPauseEvent.bind(this)),
            this.analytics.on($, this.onTeardownEvent.bind(this)),
            this.analytics.on(C, this.onLoopEvent.bind(this)),
            this.analytics.on(f, this.onAdSkip.bind(this))
        }
        var e = t.prototype
        return (
          (e.onTickEvent = function (t) {
            var e = It(t)
            if (void 0 !== e) {
              if (
                (this.updateTimesOnTick(e, t),
                this.updatePerfMetrics(e),
                t.isSeeking ? this.stopPolling() : t.isPlaying && this.startPolling(t),
                void 0 !== this.lastKnownPlayerState)
              ) {
                var i = this.lastKnownPlayerState.percentVisible,
                  n = t.percentVisible
                ;((i > 0 && 0 === n) || (0 === i && n > 0)) && (this.stopPolling(), this.startPolling(t))
              }
              ;(this.lastKnownPlayerState = t), (this.previousTickTimestamp = Date.now())
            }
          }),
          (e.onPlayEvent = function (t) {
            this.hasPlaybackStarted && this.startPolling(t), (this.lastKnownPlayerState = t)
          }),
          (e.onPlaybackStartEvent = function (t) {
            this.startPolling(t), (this.lastKnownPlayerState = t), (this.hasPlaybackStarted = !0)
          }),
          (e.onTrackFinishedEvent = function (t) {
            ;(this.hasPlaybackStarted = !1), void 0 !== It(t) && (this.stopPolling(), (this.lastKnownPlayerState = t))
          }),
          (e.onErrorEvent = function (t, e) {
            e &&
              e.media_details &&
              e.media_details.media_error &&
              e.media_details.media_error.is_fatal &&
              (this.stopPolling(), (this.lastKnownPlayerState = t))
          }),
          (e.onPauseEvent = function (t, e) {
            this.stopPolling(), (this.lastKnownPlayerState = t)
          }),
          (e.onTeardownEvent = function (t, e) {
            this.stopPolling(!0), (this.lastKnownPlayerState = t)
          }),
          (e.onLoopEvent = function (t) {
            this.startPolling(t)
          }),
          (e.onAdSkip = function () {
            this.stopPolling()
          }),
          (e.updateTimesOnTick = function (t, e) {
            var i
            void 0 !==
              (i =
                t.contentType === lt || t.contentType === dt || t.contentType === vt
                  ? t.absoluteTimeMs
                  : t.currentTimeMs) &&
              (Lt(e) && void 0 !== this.lastTimeMs && (this.audibleDuration += i - this.lastTimeMs),
              (this.lastTimeMs = i),
              void 0 === this.startTimeMs && (this.startTimeMs = i))
          }),
          (e.startPolling = function (t) {
            var e = St(t)
            void 0 === this.intervalId &&
              void 0 !== e &&
              e.contentType !== yt &&
              (this.analytics.emit(w, t), this.onHeartbeatStart(t))
          }),
          (e.stopPolling = function (t) {
            ;(this.intervalId || t) && (this.onHeartbeat(), (this.lastTimeMs = void 0), (this.startTimeMs = void 0)),
              void 0 !== this.intervalId && (clearInterval(this.intervalId), (this.intervalId = void 0))
          }),
          (e.onHeartbeatStart = function (t) {
            ;(this.intervalId = setInterval(this.onHeartbeat.bind(this), t.heartbeatIntervalMs || 5e3)),
              (this.lastTimeMs = void 0),
              (this.startTimeMs = void 0),
              (this.bitrateHistory = []),
              (this.latencyHistory = [])
          }),
          (e.updatePerfMetrics = function (t) {
            if (this.previousTickTimestamp) {
              var e = Date.now() - this.previousTickTimestamp
              t.currentBitrate && this.bitrateHistory.push({ value: t.currentBitrate, weight: e }),
                t.liveLatencyMs && this.latencyHistory.push({ value: t.liveLatencyMs, weight: e })
            }
          }),
          (e.onHeartbeat = function () {
            var t = this.lastKnownPlayerState
            if (t) {
              var e = It(t),
                i = this.getProgramDateTimeMs()
              if (void 0 !== i && void 0 !== e) {
                var n = e.currentBitrate ? { sampled_bitrate: e.currentBitrate } : {},
                  a = 0
                t.dataUsageBytes &&
                  ((a = t.dataUsageBytes - this.lastKnownDataUsageBytes),
                  (this.lastKnownDataUsageBytes = t.dataUsageBytes))
                var s,
                  r,
                  o = { data_usage_bytes: a },
                  c = this.bufferingDurationListener.bufferingCount,
                  l = this.bufferingDurationListener.getBufferTime(t),
                  u = Math.floor(100 * t.percentVisible),
                  d = Object.assign(
                    { buffering_duration_millis: l, video_visibility: u },
                    {
                      start_program_date_time_millis: i.start_program_date_time_millis,
                      end_program_date_time_millis: i.end_program_date_time_millis,
                    },
                    n,
                    o,
                  ),
                  h = {
                    buffering_duration_millis: Bt(l),
                    buffering_count: c,
                    percent_in_view: u,
                    sampled_bits_per_second: e.currentBitrate,
                    data_usage_bytes: Bt(o.data_usage_bytes),
                    start_program_date_time_millis: Bt(i.start_program_date_time_millis),
                    end_program_date_time_millis: Bt(i.end_program_date_time_millis),
                    audible_duration_millis: Bt(i.audible_duration_millis),
                    bandwidth_estimate_bps: Bt(t.bandwidthEstimateBps),
                    bitrate_metrics:
                      ((s = this.bitrateHistory),
                      (r = Ut(s)),
                      r && { min_bps: Math.round(r.min), max_bps: Math.round(r.max), avg_bps: Math.round(r.avg) }),
                    live_or_non_live_heartbeat_metrics: Ht(e.isLive, this.latencyHistory),
                  }
                this.analytics.emit(k, t, d, h)
              }
            }
          }),
          (e.getProgramDateTimeMs = function () {
            if (void 0 !== this.startTimeMs && void 0 !== this.lastTimeMs) {
              var t = this.startTimeMs,
                e = this.lastTimeMs,
                i = this.audibleDuration
              return (
                (this.startTimeMs = this.lastTimeMs),
                (this.audibleDuration = 0),
                {
                  start_program_date_time_millis: Math.round(t),
                  end_program_date_time_millis: Math.round(e),
                  audible_duration_millis: Math.round(i),
                }
              )
            }
            return {}
          }),
          t
        )
      })()
      function Ht(t, e) {
        var i = Ut(e)
        return t
          ? {
              live_heartbeat_metrics: {
                latency_metrics: i && {
                  min_ms: Math.round(i.min),
                  max_ms: Math.round(i.max),
                  avg_ms: Math.round(i.avg),
                },
              },
            }
          : { non_live_heartbeat_metrics: {} }
      }
      function Ut(t) {
        if (t && t.length) {
          var e = (function (t) {
            if (!t || 0 === t.length) return [Math.min(), Math.max()]
            for (var e, i = 1 / 0, n = -1 / 0, a = y(t); !(e = a()).done; ) {
              var s = e.value
              ;(i = Math.min(i, s)), (n = Math.max(n, s))
            }
            return [i, n]
          })(
            t.map(function (t) {
              return t.value
            }),
          )
          return {
            min: e[0],
            max: e[1],
            avg: (function (t) {
              var e = t.reduce(function (t, e) {
                return t + e.weight
              }, 0)
              return (
                t.reduce(function (t, e) {
                  return t + e.value * e.weight
                }, 0) / e
              )
            })(t),
          }
        }
      }
      var Kt = (function () {
          function t(t) {
            ;(this.analytics = t),
              (this.hasFiredOnTrackMap = {}),
              this.analytics.on(A, this.onIntendToPlayEvent.bind(this)),
              this.analytics.on(X, this.onIntendToPlayEvent.bind(this)),
              this.analytics.on(et, this.onTrackFinishedEvent.bind(this))
          }
          var e = t.prototype
          return (
            (e.onIntendToPlayEvent = function (t) {
              this.hasFiredOnTrackMap[t.currentTrackId] ||
                ((this.hasFiredOnTrackMap[t.currentTrackId] = !0), this.analytics.emit(I, t))
            }),
            (e.onTrackFinishedEvent = function (t) {
              var e = It(t)
              e && (e.shouldLoop || (this.hasFiredOnTrackMap[t.currentTrackId] = !1))
            }),
            t
          )
        })(),
        Yt = (function () {
          function t(t) {
            ;(this.analytics = t), this.analytics.on(et, this.onTrackFinishedEvent.bind(this))
          }
          return (
            (t.prototype.onTrackFinishedEvent = function (t) {
              var e = It(t)
              void 0 !== e && e.shouldLoop && this.analytics.emit(C, t)
            }),
            t
          )
        })(),
        Gt = {
          home: 'HomeTimeline',
          list: 'Lists',
          live_broadcast: 'BroadcastPage',
          live_event_timeline: 'EventPage',
          me: 'UserTimeline',
          moments: 'Moments',
          permalink: 'TweetCard',
          profile: 'UserTimeline',
          search: 'Search',
        },
        jt = function (t) {
          return '/api/v2/' + t
        }
      function zt(t, e, i, n) {
        return { start: { method: t, path: jt(e) }, ping: { method: t, path: jt(i) }, stop: { method: t, path: jt(n) } }
      }
      var qt,
        Xt = {
          public: {
            live: zt('GET', 'startPublic', 'pingPublic', 'stopPublic'),
            replay: zt('GET', 'replayViewedPublic', 'pingReplayViewedPublic', 'endReplayViewedPublic'),
          },
          auth: {
            live: zt('POST', 'startWatching', 'pingWatching', 'stopWatching'),
            replay: zt('POST', 'replayViewed', 'pingReplayViewed', 'endReplayViewed'),
          },
        },
        Jt = (function () {
          function t(t, e) {
            if (
              ((this.httpClient = t),
              (this.authToken = null == e ? void 0 : e.periscopeAuthToken),
              (this.lifecycles = this.authToken ? Xt.auth : Xt.public),
              (null == e ? void 0 : e.scribeContext) && (null == e ? void 0 : e.periscopeComponent))
            ) {
              var i = e.scribeContext,
                n = e.periscopeComponent
              ;(this.pageContext = this.getPageContext(i)), (this.componentContext = n)
            }
          }
          var e = t.prototype
          return (
            (e.getPageContext = function (t) {
              var e = t.page
              return 'permalink_overlay' === t.section ? 'TweetCard' : Gt[e] || ''
            }),
            (e.call = function (t, e) {
              var i = Date.now(),
                n = {
                  'X-Idempotence': (qt = i <= qt ? qt + 1 : i),
                  'X-Attempt': 1,
                  'X-Periscope-User-Agent': 'Twitter/video-analytics',
                  'content-type': 'application/json',
                },
                a = Object.assign({}, e)
              this.authToken && (a.cookie = this.authToken)
              var s = t.method,
                r = t.path,
                o = {}
              return (
                'POST' === s ? (o.data = a) : (o.params = a),
                this.httpClient.dispatch(
                  Object.assign({ headers: n, host: 'https://proxsee.pscp.tv', method: s, path: r }, o),
                )
              )
            }),
            (e.videoStartWatching = function (t, e, i) {
              var n = this
              return new Promise(function (a, s) {
                ;('string' != typeof t || t.length < 1) &&
                  s(new Error('Cannot videoStartWatching. lifecycleToken not valid, lifecycleToken=' + t))
                var r = e ? n.lifecycles.replay.start : n.lifecycles.live.start,
                  o = { life_cycle_token: t, auto_play: !!i }
                n.pageContext && (o.page = n.pageContext),
                  n.componentContext && (o.component = n.componentContext),
                  n.call(r, o).then(function (t) {
                    var e = JSON.parse(t.body).session
                    e ? a(e) : s('No valid Session')
                  }, s)
              })
            }),
            (e.videoPingWatching = function (t, e) {
              var i = this
              return new Promise(function (n, a) {
                ;('string' != typeof t || t.length < 1) &&
                  a(new Error('Cannot videoPingWatching. session not valid, session=' + t))
                var s = e ? i.lifecycles.replay.ping : i.lifecycles.live.ping
                i.call(s, { session: t }).then(function (t) {
                  JSON.parse(t.body).success ? n() : a('Ping request failed')
                }, a)
              })
            }),
            (e.videoStopWatching = function (t, e) {
              var i = this
              return new Promise(function (n, a) {
                ;('string' != typeof t || t.length < 1) &&
                  a(new Error('Cannot videoStopWatching. session not valid, session=' + t))
                var s = e ? i.lifecycles.replay.stop : i.lifecycles.live.stop
                i.call(s, { session: t }).then(function (t) {
                  JSON.parse(t.body).success ? n() : a('StopWatching request failed')
                }, a)
              })
            }),
            t
          )
        })(),
        Zt = 3e3
      var Qt = (function () {
          function t(t) {
            ;(this.api = t),
              (this.handleStartWatching = this.handleStartWatching.bind(this)),
              (this.updateSession = this.updateSession.bind(this)),
              (this.startPingWatching = this.startPingWatching.bind(this)),
              (this.isVideoPreview = !1),
              (this.isReplay = !0)
          }
          var e = t.prototype
          return (
            (e.updateSession = function (t) {
              this.session = t
            }),
            (e.setStartWatchingTimer = function () {
              this.startWatchingTimer = setTimeout(this.handleStartWatching, Zt)
            }),
            (e.clearStartWatchingTimer = function () {
              this.startWatchingTimer && clearTimeout(this.startWatchingTimer)
            }),
            (e.handleStartWatching = function () {
              if (!this.isWatching) {
                this.stopPingWatching()
                var t = this.api
                  .videoStartWatching(this.lifecycleToken, this.isReplay, this.isVideoPreview)
                  .then(this.updateSession)
                  .then(this.startPingWatching)
                return (this.isWatching = !0), t
              }
            }),
            (e.startPingWatching = function () {
              var t = this
              this.stopPingWatching(),
                (this.pingWatchingTimer = setInterval(function () {
                  t.isWatching ? t.api.videoPingWatching(t.session, t.isReplay) : t.stopPingWatching()
                }, 3e4))
            }),
            (e.stopPingWatching = function () {
              clearInterval(this.pingWatchingTimer)
            }),
            (e.updateLifecycleToken = function (t) {
              void 0 !== t &&
                t !== this.lifecycleToken &&
                ((this.lifecycleToken = t), this.isWatching && (this.stopWatching(), this.handleStartWatching()))
            }),
            (e.updateIsReplay = function (t) {
              void 0 !== t && t !== this.isReplay && (this.isReplay = t)
            }),
            (e.startWatching = function () {
              return (this.isVideoPreview = !1), this.handleStartWatching()
            }),
            (e.startWatchingPreview = function () {
              ;(this.isVideoPreview = !0), this.clearStartWatchingTimer(), this.setStartWatchingTimer()
            }),
            (e.stopWatching = function () {
              this.isWatching &&
                (this.stopPingWatching(),
                this.session && this.api.videoStopWatching(this.session, this.isReplay),
                (this.isWatching = !1))
            }),
            (e.destroy = function () {
              this.stopWatching(),
                this.clearStartWatchingTimer(),
                (this.isVideoPreview = void 0),
                (this.lifecycleToken = void 0),
                (this.session = void 0),
                (this.isReplay = void 0),
                (this.isWatching = void 0),
                (this.pingWatchingTimer = void 0)
            }),
            t
          )
        })(),
        $t = [g, x, F, et, $],
        te = (function () {
          function t(t, e) {
            var i = this
            ;(this.analytics = t),
              (this.lifecycleController = e),
              $t.map(function (t) {
                return i.analytics.on(t, i.possiblyHandleEvent.bind(i, t))
              })
          }
          var e = t.prototype
          return (
            (e.possiblyHandleEvent = function (t, e) {
              if (this.shouldSendPeriscopeAnalytics(e)) {
                var i = It(e)
                switch (t) {
                  case g:
                    this.updateLifecycleToken(e), this.updateReplayState(!i.isLive)
                    break
                  case x:
                    this.handleStartWatching(e)
                    break
                  case F:
                    this.handleStopWatching(e)
                    break
                  case et:
                    this.handleStopWatching(e), this.updateReplayState(!0)
                    break
                  case $:
                    this.teardownPeriscopeLifecycle()
                }
              }
            }),
            (e.shouldSendPeriscopeAnalytics = function (t) {
              var e = It(t)
              return void 0 !== e && (e.contentType === vt || e.contentType === lt)
            }),
            (e.getLifecycleToken = function (t) {
              return It(t).lifecycleToken
            }),
            (e.updateLifecycleToken = function (t) {
              var e = this.getLifecycleToken(t)
              this.lifecycleController.updateLifecycleToken(e)
            }),
            (e.updateReplayState = function (t) {
              this.lifecycleController.updateIsReplay(t)
            }),
            (e.handleStartWatching = function (t) {
              this.getLifecycleToken(t) &&
                (t.isPreview
                  ? this.lifecycleController.startWatchingPreview()
                  : this.lifecycleController.startWatching())
            }),
            (e.handleStopWatching = function (t) {
              this.getLifecycleToken(t) && this.lifecycleController.stopWatching()
            }),
            (e.teardownPeriscopeLifecycle = function () {
              this.lifecycleController.destroy(), (this.lifecycleController = null)
            }),
            t
          )
        })(),
        ee = (function () {
          function t(t) {
            ;(this.analytics = t),
              (this.lapseMap = {}),
              this.analytics.on(tt, this.onTickEvent.bind(this)),
              this.analytics.on(et, this.onTrackFinishedEvent.bind(this)),
              this.analytics.on(f, this.onAdSkipEvent.bind(this)),
              this.analytics.on(st, this.onVideoViewEvent.bind(this))
          }
          var e = t.prototype
          return (
            (e.onTrackFinishedEvent = function (t) {
              var e = It(t)
              if (void 0 !== e) {
                var i = this.lapseMap[e.id]
                if (void 0 !== i) {
                  i.timePlayedToMs = 0
                  var n = St(t)
                  n && n.contentType !== ut && !e.shouldLoop && (this.emit(i, t), (i.viewFired = !1))
                }
              }
            }),
            (e.onAdSkipEvent = function (t) {
              this.onTickEvent(t)
              var e = It(t)
              if (void 0 !== e) {
                var i = this.lapseMap[e.id]
                this.emit(i, t)
              }
            }),
            (e.onVideoViewEvent = function (t) {
              var e = It(t)
              if (void 0 !== e) {
                var i = this.lapseMap[e.id]
                void 0 === i && ((i = this.initializeLapseMapForTrack(e)), (this.lapseMap[e.id] = i)),
                  (i.viewFired = !0)
              }
            }),
            (e.onTickEvent = function (t) {
              var e = It(t)
              if (void 0 !== e) {
                var i = this.lapseMap[e.id]
                void 0 === i && ((i = this.initializeLapseMapForTrack(e)), (this.lapseMap[e.id] = i)),
                  t.isSeeking
                    ? (i.timePlayedToMs = e.currentTimeMs)
                    : (this.updateTimingData(e, i), this.checkPlaybackLapse(i, t))
              }
            }),
            (e.initializeLapseMapForTrack = function (t) {
              return { timePlayedMs: 0, timePlayedToMs: t.currentTimeMs, viewFired: !1 }
            }),
            (e.updateTimingData = function (t, e) {
              var i = t.currentTimeMs - e.timePlayedToMs
              ;(e.timePlayedToMs = t.currentTimeMs), (e.timePlayedMs += i)
            }),
            (e.checkPlaybackLapse = function (t, e) {
              t.timePlayedMs > 1e4 && this.emit(t, e)
            }),
            (e.emit = function (t, e) {
              var i = St(e),
                n = t.viewFired,
                a = t.timePlayedMs
              n &&
                a > 0 &&
                i &&
                i.contentType !== dt &&
                (this.analytics.emit(j, e, { playback_lapse_ms: Math.round(a) }), (t.timePlayedMs = 0))
            }),
            t
          )
        })(),
        ie = function (t) {
          return (
            (e = 'AD_CTA_TO_ENGAGEMENT_MAPPING_ERROR'),
            ((i = new Error('Unable to map CTA type to engagement type for: ' + t)).name = e),
            i
          )
          var e, i
        },
        ne = (function () {
          function t() {}
          return (
            (t.set = function (e) {
              t.report = e
            }),
            t
          )
        })()
      h()(ne, 'report', function (t) {})
      var ae =
          (((s = {})[q] = 'playback_start'),
          (s[R] = 'playback_25'),
          (s[H] = 'playback_50'),
          (s[U] = 'playback_75'),
          (s[K] = 'playback_95'),
          (s[Y] = 'playback_complete'),
          (s[V] = 'mrc_view'),
          (s[M] = 'groupm_view'),
          (s[W] = '1sec_view'),
          (s[O] = '6sec_view'),
          (s[D] = 'short_form_complete'),
          (s[st] = 'view'),
          (s[B] = 'play_from_tap'),
          (s[rt] = 'view_threshold'),
          s),
        se = (function () {
          function t(t, e) {
            var i = this
            ;(this.promotedLogHandler = e),
              Object.keys(ae).forEach(function (e) {
                t.on(e, function (t, n) {
                  var a = It(t)
                  if (void 0 !== a) {
                    var s = a.displayType === ot
                    i.log(i.buildEventName(e, a), t, n, {
                      video_details: { is_preroll_video: s, video_type: ft[a.contentType] },
                    })
                  }
                })
              }),
              t.on(q, this.logImpression.bind(this)),
              t.on(b, this.onCtaClickEvent.bind(this)),
              t.on(nt, this.onVideoSessionEvent.bind(this))
          }
          var e = t.prototype
          return (
            (e.buildEventName = function (t, e) {
              var i = ae[t]
              return 'video_' + e.displayType + '_' + i
            }),
            (e.log = function (t, e, i, n) {
              void 0 === i && (i = {})
              var a = It(e),
                s = this.getPromotedEventData(e, a)
              if (void 0 !== s.impression_id) {
                var r = this.getAmplifyDetailsData(e, a, i),
                  o = JSON.stringify({ amplify_details: r }),
                  c = n && JSON.stringify(n),
                  l = Object.assign(s, r, { event: t, card_event: o, engagement_metadata: c })
                this.promotedLogHandler.log(l)
              }
            }),
            (e.logImpression = function (t) {
              var e = It(t)
              this.isPromotedTrack(t, e) && this.log('impression', t)
            }),
            (e.onCtaClickEvent = function (t) {
              var e = It(t),
                i = null == e ? void 0 : e.cta,
                n = mt[null == i ? void 0 : i.type]
              if (!n) return ne.report(ie(null == i ? void 0 : i.type))
              e.displayType === ot
                ? this.log('video_' + e.displayType + '_cta_' + n + '_click', t)
                : this.log('video_cta_' + n + '_click', t)
            }),
            (e.onVideoSessionEvent = function (t, e) {
              void 0 !== e && this.log('video_session', t, {}, e)
            }),
            (e.isPromotedTrack = function (t, e) {
              return e && e.impressionId && e.disclosureType
            }),
            (e.getPromotedEventData = function (t, e) {
              var i = e.disclosureType || t.disclosureType
              return { impression_id: e.impressionId || t.impressionId, earned: 'earned' === i }
            }),
            (e.getAmplifyDetailsData = function (t, e, i) {
              var n = St(t),
                a = Ct(t) || {}
              return Object.assign(
                {
                  content_id: n.contentId,
                  dynamic_preroll_type: a.dynamicPrerollType,
                  preroll_uuid: a.contentId,
                  preroll_owner_id: a.publisherId,
                  video_owner_id: e.publisherId,
                  video_uuid: e.contentId,
                  video_type: e.displayType === ct ? 'video' : 'ad',
                  video_is_muted: t.isMuted,
                  video_visibility: Math.floor(100 * t.percentVisible),
                },
                i,
              )
            }),
            t
          )
        })(),
        re = (function () {
          function t(t) {
            ;(this.analytics = t), this.analytics.on(tt, this.onTickEvent.bind(this))
          }
          return (
            (t.prototype.onTickEvent = function (t) {
              var e = It(t)
              void 0 !== e &&
                (t.isSeeking && void 0 === this.seekingStartTime
                  ? (this.seekingStartTime = e.currentTimeMs)
                  : t.isSeeking ||
                    void 0 === this.seekingStartTime ||
                    (e.currentTimeMs < this.seekingStartTime && this.analytics.emit(J, t),
                    (this.seekingStartTime = void 0)))
            }),
            t
          )
        })(),
        oe =
          (((r = {})[st] = 'video_view'),
          (r[B] = 'play_from_tap'),
          (r[rt] = 'view_threshold'),
          (r[L] = 'video_mrc_audible_view'),
          (r[V] = 'video_mrc_view'),
          (r[O] = 'video_6sec_view'),
          (r[D] = 'video_short_form_complete'),
          (r[q] = 'playback_start'),
          (r[R] = 'playback_25'),
          (r[H] = 'playback_50'),
          (r[U] = 'playback_75'),
          (r[K] = 'playback_95'),
          (r[Y] = 'playback_complete'),
          (r[I] = 'intent_to_play'),
          (r[x] = 'play'),
          (r[F] = 'pause'),
          (r[X] = 'replay'),
          (r[C] = 'loop'),
          (r[N] = 'mute'),
          (r[it] = 'unmute'),
          (r[P] = 'full_screen'),
          (r[Z] = 'shrink'),
          (r[j] = 'playback_lapse'),
          (r[G] = 'error'),
          (r[Q] = 'playback_startup_error'),
          (r[at] = 'video_quality_view'),
          (r[f] = 'video_ad_skip'),
          r),
        ce = ['playback_lapse', 'video_1sec_view', 'shrink', 'full_screen'].reduce(function (t, e) {
          return (t[e] = !0), t
        }, {}),
        le = 'tweet',
        ue = 'client_event',
        de = 'live_video_heartbeat_event',
        he = 7,
        pe = 13,
        ve = 16,
        ye = 26,
        _e = 28,
        fe = 1,
        me = 2,
        ge = 1,
        be = 2,
        Te = [
          'appplayer',
          'poll2choice_video',
          'poll3choice_video',
          'poll4choice_video',
          'promo_video_convo',
          'promo_video_website',
          'video_direct_message',
        ],
        Ee = /^([0-9]{1,2})_([0-9]+)$/,
        Pe = (function () {
          function t(t, e, i) {
            var n = this
            ;(this.scribeHandler = e),
              (this.context = i || {}),
              (this.isAdFormatsCard = -1 !== Te.indexOf(this.context.cardType)),
              Object.keys(oe).forEach(function (e) {
                t.on(e, function (t, i, a) {
                  n.scribe(oe[e], t, i, a)
                })
              }),
              t.on(b, this.onCtaClickEvent.bind(this)),
              t.on(S, this.onCtaImpressionEvent.bind(this)),
              t.on(k, this.onHeartbeatEvent.bind(this)),
              t.on(m, this.onCaptionsToggledEvent.bind(this)),
              t.on(z, this.onPlaybackSpeedChangeEvent.bind(this))
          }
          var e = t.prototype
          return (
            (e.onCaptionsToggledEvent = function (t, e) {
              var i = e ? 'enable' : 'disable',
                n = { page: 'settings', section: 'captions', element: 'display_audio_transcriptions', action: i }
              this.scribe(i, t, {}, {}, ue, n)
            }),
            (e.onCtaClickEvent = function (t) {
              var e = It(t).cta,
                i = mt[null == e ? void 0 : e.type]
              if (!i) return ne.report(ie(null == e ? void 0 : e.type))
              var n =
                null != (null == e ? void 0 : e.click_tracking_embed_details)
                  ? { click_tracking_embed_details: null == e ? void 0 : e.click_tracking_embed_details }
                  : {}
              this.scribe('cta_' + i + '_click', t, {}, {}, ue, null, n)
            }),
            (e.onCtaImpressionEvent = function (t) {
              var e = It(t).cta,
                i = mt[null == e ? void 0 : e.type]
              if (!i) return ne.report(ie(null == e ? void 0 : e.type))
              this.scribe('cta_' + i + '_impression', t)
            }),
            (e.onHeartbeatEvent = function (t, e, i) {
              var n = St(t)
              if (void 0 !== n) {
                var a
                switch (n.contentType) {
                  case dt:
                  case lt:
                    a = de
                    break
                  default:
                    a = ue
                }
                this.scribe('heartbeat', t, e, i, a)
              }
            }),
            (e.onPlaybackSpeedChangeEvent = function (t, e) {
              var i = e.newSpeed,
                n = e.oldSpeed,
                a = { newSpeed: Vt(i), oldSpeed: Vt(n) }
              this.scribe('playback_speed_change', t, {}, a)
            }),
            (e.scribe = function (t, e, i, n, a, s, r) {
              void 0 === i && (i = {}),
                void 0 === n && (n = {}),
                void 0 === a && (a = ue),
                void 0 === s && (s = null),
                void 0 === r && (r = {})
              var o,
                c,
                l = St(e) || {},
                u = It(e) || {},
                d = Ct(e) || {},
                h = e.session || {},
                p =
                  (e.features || {}).isLiveTimecodeEnabled && u.requestedTimecode > 0
                    ? 1e3 * u.requestedTimecode
                    : void 0
              this.isActionSupportedInClientMediaEvent(t) &&
                (o = {
                  media_client_event_type: ((c = {}), (c[t] = n), c),
                  session_state: {
                    session_id: h.id,
                    content_video_identifier: ke(this.getContentIdentifier(l), this.context.scribeContext),
                    video_ads_passthrough_data: e.videoAnalyticsScribePassthrough,
                    live_event_identifier: this.getLiveEventIdentifier(e, l.contentType),
                    tweet_id: this.getTweetId(e.source, l.contentType),
                  },
                  playing_media_state: {
                    video_type: u.displayType === ct ? me : fe,
                    media_asset_url: this.getVariantUrl(u),
                    media_timecode_millis: Bt(p),
                    media_metadata: {
                      broadcast_id: u.broadcastId,
                      twitter_publisher_id: Bt(u.publisherId),
                      publisher_identifier: we(u.publisherId, u.periscopePublisherId, this.context.scribeContext),
                    },
                    broadcast_media_state: Se(u.contentType, u.isLive),
                  },
                  player_state: { is_muted: e.isMuted },
                })
              var v = Object.assign(
                  {},
                  this.getBaseItem(e.source, e.eventId),
                  {
                    media_asset_url: this.getVariantUrl(u),
                    video_uuid: u.contentId,
                    video_owner_id: u.publisherId,
                    video_type: u.displayType === ct ? 'video' : 'ad',
                    promoted_id: u.impressionId || e.impressionId,
                    content_id: l.contentId,
                    dynamic_preroll_type: d.dynamicPrerollType,
                    preroll_uuid: d.contentId,
                    preroll_owner_id: d.publisherId,
                    publisher_id: l.publisherId,
                    media_session_id: h.id,
                    video_analytics_scribe_passthrough: e.videoAnalyticsScribePassthrough,
                    client_media_event: o,
                    media_timecode_millis: p,
                    disclosure_type: u.disclosureType || e.disclosureType,
                  },
                  i,
                  this.getLexMetadata(e, l),
                ),
                y = s || { element: this.getScribeElement(l), action: t }
              this.scribeHandler.log({ namespace: y, category: a, data: Object.assign({}, r, { items: [v] }) })
            }),
            (e.getContentIdentifier = function (t) {
              var e = t.contentId,
                i = this.parseMediaKeyString(e)
              if (i) return { media_platform_identifier: i }
              switch (t.contentType) {
                case ht:
                case ut:
                case dt:
                case lt:
                  return this.getMediaPlatformIdentifierUsingDefaultCategory(t)
                case _t:
                  return this.isAdFormatsCard
                    ? {
                        media_platform_identifier: {
                          media_category: this.getMediaEntityCategoryUsingPlaybackUrl(t),
                          media_id: e,
                        },
                      }
                    : { amplify_card_identifier: { vmap_url: t.vmapUrl, content_id: e } }
                case yt:
                case vt:
                case pt:
                default:
                  return { unknown_identifier: { content_id: e } }
              }
            }),
            (e.parseMediaKeyString = function (t) {
              var e = Ee.exec(t) || [],
                i = e[1],
                n = e[2],
                a = +i
              if (a && n) return { media_category: a, media_id: n }
            }),
            (e.getMediaPlatformIdentifierUsingDefaultCategory = function (t) {
              var e = this.defaultMediaCategory(t)
              return e
                ? { media_platform_identifier: { media_category: e, media_id: t.contentId } }
                : { unknown_identifier: { content_id: t.contentId } }
            }),
            (e.getMediaEntityCategoryUsingPlaybackUrl = function (t) {
              var e = this.getVariantUrl(t)
              if (e) {
                if (-1 !== e.indexOf('amplify_video')) return pe
                if (-1 !== e.indexOf('ext_tw_video')) return he
              }
            }),
            (e.defaultMediaCategory = function (t) {
              switch (t.contentType) {
                case ut:
                  return ve
                case dt:
                  return ye
                case lt:
                  return _e
                case ht:
                  return this.getMediaEntityCategoryUsingPlaybackUrl(t)
                default:
                  return
              }
            }),
            (e.getLiveEventIdentifier = function (t, e) {
              return t.eventId
                ? { lex_event_identifier: { lex_event_id: t.eventId } }
                : e === dt
                ? { legacy_live_event_identifier: { legacy_live_event_id: t.source.id } }
                : void 0
            }),
            (e.getTweetId = function (t, e) {
              return e === lt || e === dt ? t.tweetId : t.type === le ? t.id : void 0
            }),
            (e.getScribeElement = function (t) {
              switch (t.contentType) {
                case yt:
                  return 'vine_player'
                case ut:
                  return 'gif_player'
                case _t:
                  return 'platform_amplify_card'
                case dt:
                case lt:
                  return 'live_video_player'
                case pt:
                  return 'partner_video_player'
                case vt:
                  return 'periscope_player'
                case ht:
                default:
                  return 'video_player'
              }
            }),
            (e.getBaseItem = function (t, e) {
              var i = this.context.baseScribeItem
              return (
                i ||
                (t.type === le
                  ? { id: t.id, item_type: '0' }
                  : t.tweetId
                  ? { id: t.tweetId, item_type: '0' }
                  : e
                  ? { id: e, item_type: '28' }
                  : void 0)
              )
            }),
            (e.getLexMetadata = function (t, e) {
              var i = this.context.scribeContext || {},
                n = {},
                a = {}
              return (
                e.broadcastId &&
                  ((n.is_replay_broadcast = !e.isLive),
                  (a.tweet_id = t.source.tweetId),
                  'live_event_timeline' === i.page && 'tweet' !== i.component
                    ? (n.host_broadcast_id = e.broadcastId)
                    : (n.target_broadcast_id = e.broadcastId)),
                t.eventId &&
                  ('live_event_timeline' === i.page && 'tweet' !== i.component
                    ? (a.host_event_id = t.eventId)
                    : (a.target_event_id = t.eventId)),
                { live_broadcast_details: n, live_video_event_details: a }
              )
            }),
            (e.getVariantUrl = function (t) {
              var e = t.variants && t.variants[t.currentVariantIndex]
              return e && e.src
            }),
            (e.isActionSupportedInClientMediaEvent = function (t) {
              return !ce[t]
            }),
            t
          )
        })()
      function Me(t) {
        return t && 'messages' === t.page
      }
      function ke(t, e) {
        return Me(e) ? { scrubbed_identifier: {} } : t
      }
      function we(t, e, i) {
        return Me(i)
          ? { scrubbed_publisher_identifier: {} }
          : t && e
          ? { twitter_periscope_publisher_identifier: { twitter_id: Bt(t), periscope_id: e } }
          : t
          ? { twitter_publisher_identifier: { id: Bt(t) } }
          : e
          ? { periscope_publisher_identifier: { id: e } }
          : { unknown_publisher_identifier: {} }
      }
      function Se(t, e) {
        if (t === lt || t === dt || t === vt) return { broadcast_state: e ? ge : be }
      }
      var Ie = (function () {
          function t(t) {
            ;(this.analytics = t),
              this.analytics.on(X, this.onReplayEvent.bind(this)),
              this.analytics.on(et, this.onTrackFinishedEvent.bind(this)),
              this.analytics.on(I, this.onInitialIntendToPlayEvent.bind(this))
          }
          var e = t.prototype
          return (
            (e.onInitialIntendToPlayEvent = function (t) {
              this.resetLatencyStartDate(t.intentToPlayTime)
            }),
            (e.onReplayEvent = function () {
              this.resetLatencyStartDate()
            }),
            (e.onTrackFinishedEvent = function (t) {
              this.resetLatencyStartDate(), this.trackId !== t.currentTrackId && (this.trackId = t.currentTrackId)
            }),
            (e.resetLatencyStartDate = function (t) {
              this.latencyStartDate = t || new Date()
            }),
            (e.getLatencyData = function () {
              if (void 0 !== this.latencyStartDate) return { latency: new Date() - this.latencyStartDate }
            }),
            t
          )
        })(),
        Ae = [
          { progress: 0.25, event: R },
          { progress: 0.5, event: H },
          { progress: 0.75, event: U },
          { progress: 0.95, event: K },
          { progress: 1, event: Y },
        ],
        Ce = (function () {
          function t(t) {
            ;(this.analytics = t),
              (this.eventMap = {}),
              (this.playbackLatencyListener = new Ie(t)),
              this.analytics.on(et, this.onTrackFinishedEvent.bind(this)),
              this.analytics.on(tt, this.onTickEvent.bind(this))
          }
          var e = t.prototype
          return (
            (e.onTrackFinishedEvent = function (t) {
              var e = It(t)
              void 0 !== e && (e.shouldLoop || (this.eventMap[t.currentTrackId] = {}))
            }),
            (e.onTickEvent = function (t) {
              var e = It(t)
              if (void 0 !== e && e.durationMs) {
                var i = this.eventMap[e.id]
                void 0 === i && ((i = {}), (this.eventMap[e.id] = i)), this.checkAllTentpoles(e, i, t)
              }
            }),
            (e.checkAllTentpoles = function (t, e, i) {
              if (i.isPlaying) {
                var n = t.durationMs,
                  a = t.currentTimeMs,
                  s = this.playbackLatencyListener.getLatencyData() || {},
                  r = { latency_millis: s.latency, cache_info: { notCached: {} } }
                this.emitOnce(q, e, i, s, r), t.isLive || this.checkProgressTentpoles(n, a, e, i)
              }
            }),
            (e.checkProgressTentpoles = function (t, e, i, n) {
              var a = this
              Ae.forEach(function (s) {
                var r = s.progress * t
                e >= r - 1e3 && e <= r + 1e3 && a.emitOnce(s.event, i, n)
              })
            }),
            (e.emitOnce = function (t, e, i, n, a) {
              e[t] || (this.analytics.emit(t, i, n, a), (e[t] = !0))
            }),
            t
          )
        })(),
        Le = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100],
        Ve = (function () {
          function t(t) {
            ;(this.analytics = t),
              (this.sessionDataStore = {}),
              this.analytics.on(tt, this.onTickEvent.bind(this)),
              this.analytics.on(P, this.onFullscreenEvent.bind(this)),
              this.analytics.on(Z, this.onShrinkEvent.bind(this)),
              this.analytics.on(et, this.onTrackFinishedEvent.bind(this)),
              this.analytics.on(f, this.onTrackInterrupt.bind(this)),
              this.analytics.on($, this.onTrackInterrupt.bind(this))
          }
          var e = t.prototype
          return (
            (e.onTickEvent = function (t) {
              var e = It(t)
              if (void 0 !== e) {
                var i = this.getOrCreateNewSessionDataForTrack(e, t)
                t.isSeeking ? (i.currentTimeMs = e.currentTimeMs) : this.updateViewData(e, i, t)
              }
            }),
            (e.onFullscreenEvent = function (t) {
              var e = It(t)
              void 0 !== e && (this.getOrCreateNewSessionDataForTrack(e, t).isFullscreenMode = !0)
            }),
            (e.onShrinkEvent = function (t) {
              var e = It(t)
              void 0 !== e && (this.getOrCreateNewSessionDataForTrack(e, t).isFullscreenMode = !1)
            }),
            (e.onTrackFinishedEvent = function (t) {
              var e = It(t)
              if (void 0 !== e) {
                var i = this.sessionDataStore[e.id]
                if (void 0 !== i)
                  if (e.shouldLoop) i.currentTimeMs = 0
                  else {
                    if (i.timeWatchedMs > 0) {
                      var n = this.constructVideoSessionDetails(i, e)
                      this.emitVideoSessionEvent(t, n)
                    }
                    this.sessionDataStore[e.id] = void 0
                  }
              }
            }),
            (e.onTrackInterrupt = function (t) {
              var e = It(t)
              if (void 0 !== e) {
                var i = this.sessionDataStore[e.id]
                if (void 0 !== i) {
                  if (i.timeWatchedMs > 0) {
                    var n = this.constructVideoSessionDetails(i, e)
                    this.emitVideoSessionEvent(t, n)
                  }
                  this.sessionDataStore[e.id] = void 0
                }
              }
            }),
            (e.getOrCreateNewSessionDataForTrack = function (t, e) {
              var i = this.sessionDataStore[t.id]
              return (
                void 0 === i &&
                  ((i = {
                    sizesInfoAtTheStart: e.sizesInfo,
                    currentTimeMs: t.currentTimeMs,
                    isFullscreenMode: !1,
                    timeWatchedMs: 0,
                    timeWatchedFullscreenMs: 0,
                    timeWatchedWithAudioMs: 0,
                    timeWatchedFullscreenWithAudioMs: 0,
                    watchedMsByInViewPct: this.generateNewAggregateHistogram(),
                    watchedWithAudioMsByInViewPct: this.generateNewAggregateHistogram(),
                    watchedMsByViewportPct: this.generateNewAggregateHistogram(),
                    maxContinuousWatchedMsByInViewPct: this.generateNewMaxContinuousHistogram(),
                    maxContinuousWatchedWithAudioMsByInViewPct: this.generateNewMaxContinuousHistogram(),
                  }),
                  (this.sessionDataStore[t.id] = i)),
                i
              )
            }),
            (e.generateNewAggregateHistogram = function () {
              for (var t, e = {}, i = y(Le); !(t = i()).done; ) {
                e[t.value] = 0
              }
              return e
            }),
            (e.generateNewMaxContinuousHistogram = function () {
              for (var t, e = {}, i = y(Le); !(t = i()).done; ) {
                e[t.value] = { current: 0, max: 0 }
              }
              return e
            }),
            (e.resetContinuousViewDataForHistogram = function (t) {
              for (var e, i = y(Le); !(e = i()).done; ) {
                var n = e.value
                this.resetContinuousViewDataForBucket(t[n])
              }
            }),
            (e.resetContinuousViewDataForBucket = function (t) {
              ;(t.max = Math.max(t.current, t.max)), (t.current = 0)
            }),
            (e.updateViewData = function (t, e, i) {
              var n = t.currentTimeMs - e.currentTimeMs,
                a = e.isFullscreenMode ? 1 : i.percentVisible,
                s = e.isFullscreenMode ? 1 : i.percentOfViewportOccupied
              ;(e.currentTimeMs = t.currentTimeMs),
                n < 0 ||
                  ((e.timeWatchedMs += n),
                  this.updateAggregateHistogram(e.watchedMsByInViewPct, a, n),
                  this.updateAggregateHistogram(e.watchedMsByViewportPct, s, n),
                  this.updateMaxContinuousHistogram(e.maxContinuousWatchedMsByInViewPct, a, n),
                  i.isMuted
                    ? this.resetContinuousViewDataForHistogram(e.maxContinuousWatchedWithAudioMsByInViewPct)
                    : ((e.timeWatchedWithAudioMs += n),
                      this.updateAggregateHistogram(e.watchedWithAudioMsByInViewPct, a, n),
                      this.updateMaxContinuousHistogram(e.maxContinuousWatchedWithAudioMsByInViewPct, a, n)),
                  e.isFullscreenMode &&
                    ((e.timeWatchedFullscreenMs += n), i.isMuted || (e.timeWatchedFullscreenWithAudioMs += n)))
            }),
            (e.updateAggregateHistogram = function (t, e, i) {
              if (0 !== e)
                for (var n, a = 100 * e, s = y(Le); !(n = s()).done; ) {
                  var r = n.value
                  a >= r && (t[r] += i)
                }
            }),
            (e.updateMaxContinuousHistogram = function (t, e, i) {
              if (0 !== e)
                for (var n, a = 100 * e, s = y(Le); !(n = s()).done; ) {
                  var r = n.value
                  a >= r ? (t[r].current += i) : t[r].current > 0 && this.resetContinuousViewDataForBucket(t[r])
                }
              else this.resetContinuousViewDataForHistogram(t)
            }),
            (e.constructVideoSessionDetails = function (t, e) {
              return {
                video_details: {
                  is_preroll_video: e.displayType === ot,
                  video_length: Math.round(e.durationMs),
                  time_watched: Math.round(t.timeWatchedMs),
                  time_watched_fullscreen: Math.round(t.timeWatchedFullscreenMs),
                  time_watched_with_audio: Math.round(t.timeWatchedWithAudioMs),
                  time_watched_fullscreen_with_audio: Math.round(t.timeWatchedFullscreenWithAudioMs),
                  time_watched_100_with_audio: Math.round(t.watchedWithAudioMsByInViewPct[100]),
                  video_type: ft[e.contentType],
                  watched_ms_by_in_view_pct: this.constructAggregateHistogramPayload(t.watchedMsByInViewPct),
                  watched_with_audio_ms_by_in_view_pct: this.constructAggregateHistogramPayload(
                    t.watchedWithAudioMsByInViewPct,
                  ),
                  watched_ms_by_viewport_pct: this.constructAggregateHistogramPayload(t.watchedMsByViewportPct),
                  max_continuous_watched_ms_by_in_view_pct: this.constructMaxContinuousHistogramPayload(
                    t.maxContinuousWatchedMsByInViewPct,
                  ),
                  max_continuous_watched_with_audio_ms_by_in_view_pct: this.constructMaxContinuousHistogramPayload(
                    t.maxContinuousWatchedWithAudioMsByInViewPct,
                  ),
                  sizes_info_at_the_start: {
                    viewport_size: t.sizesInfoAtTheStart.viewportSize,
                    ad_size: t.sizesInfoAtTheStart.mediaSize,
                  },
                },
              }
            }),
            (e.constructAggregateHistogramPayload = function (t) {
              for (var e, i = {}, n = y(Le); !(e = n()).done; ) {
                var a = e.value
                i[a] = Math.round(t[a])
              }
              return { histogram: i }
            }),
            (e.constructMaxContinuousHistogramPayload = function (t) {
              for (var e, i = {}, n = y(Le); !(e = n()).done; ) {
                var a = e.value,
                  s = t[a]
                i[a] = Math.round(Math.max(s.current, s.max))
              }
              return { histogram: i }
            }),
            (e.emitVideoSessionEvent = function (t, e) {
              this.analytics.emit(nt, t, e)
            }),
            t
          )
        })(),
        Ne = [st, B, rt, W, M, L, V, at, O, D],
        We = [W, L, V, at],
        Oe = (function () {
          function t(t, e) {
            ;(this.analytics = t),
              (this.context = e),
              (this.eventMap = {}),
              this.analytics.on(tt, this.onTickEvent.bind(this)),
              this.analytics.on(et, this.onTrackFinishedEvent.bind(this)),
              this.analytics.on(F, this.onPauseEvent.bind(this)),
              this.analytics.on(Y, this.onPlaybackComplete.bind(this))
          }
          var e = t.prototype
          return (
            (e.onTrackFinishedEvent = function (t) {
              var e = It(t)
              if (void 0 !== e) {
                var i = this.eventMap[e.id]
                void 0 !== i && (e.shouldLoop ? (i.timePlayedToMs = 0) : (this.eventMap[e.id] = void 0))
              }
            }),
            (e.onPlaybackComplete = function (t) {
              var e = It(t)
              if (void 0 !== e) {
                var i = this.eventMap[e.id]
                void 0 !== i && this.context && this.context.enableShortFormCompleteLogging && this.emitOnce(D, i, t)
              }
            }),
            (e.onPauseEvent = function (t) {
              this.resetContinuousViewEventTimingData(t)
            }),
            (e.onTickEvent = function (t) {
              var e = It(t)
              if (void 0 !== e) {
                var i = this.eventMap[e.id]
                if (void 0 === i) {
                  i = { timePlayedToMs: e.currentTimeMs }
                  for (var n, a = y(Ne); !(n = a()).done; ) {
                    i[n.value] = { timePlayedMs: 0, visibilityWeightedTimePlayedMs: 0, fired: !1 }
                  }
                  this.eventMap[e.id] = i
                }
                t.isSeeking
                  ? ((i.timePlayedToMs = e.currentTimeMs), this.resetContinuousViewEventTimingData(t))
                  : (this.updateTimingData(e, i, t), this.checkViewEvents(e, i, t)),
                  this.checkPlayFromTap(i, t)
              }
            }),
            (e.updateTimingData = function (t, e, i) {
              var n = t.currentTimeMs - e.timePlayedToMs
              e.timePlayedToMs = t.currentTimeMs
              var a = i.percentVisible
              a >= 1 && (e[rt].timePlayedMs += n),
                a >= 1 ? (e[W].timePlayedMs += n) : (e[W].timePlayedMs = 0),
                a >= 0.5 && Lt(i) ? (e[L].timePlayedMs += n) : (e[L].timePlayedMs = 0),
                a >= 0.5 ? (e[V].timePlayedMs += n) : (e[V].timePlayedMs = 0),
                a >= 1 && !i.isMuted && (e[M].timePlayedMs += n),
                a >= 0.5 ? (e[at].timePlayedMs += n) : (e[at].timePlayedMs = 0),
                (e[O].timePlayedMs += n),
                a >= 0.5 && (e[O].visibilityWeightedTimePlayedMs += a * n),
                (e[D].timePlayedMs += n)
            }),
            (e.resetContinuousViewEventTimingData = function (t) {
              var e = this.eventMap[t.currentTrackId]
              if (void 0 !== e)
                for (var i, n = y(We); !(i = n()).done; ) {
                  e[i.value].timePlayedMs = 0
                }
            }),
            (e.checkViewEvents = function (t, e, i) {
              var n
              e[rt].timePlayedMs >=
                (!(n = t).isLive && n.durationMs > 0 && !n.shouldLoop ? Math.min(n.durationMs - 500, Zt) : Zt) &&
                (this.emitOnce(rt, e, i), this.emitOnce(st, e, i)),
                e[W].timePlayedMs >= 1e3 && this.emitOnce(W, e, i),
                e[M].timePlayedMs >=
                  (function (t) {
                    return !t.isLive && t.durationMs > 0 ? 0.5 * t.durationMs : Number.MAX_SAFE_INTEGER
                  })(t) && this.emitOnce(M, e, i),
                e[L].timePlayedMs >= 2e3 && this.emitOnce(L, e, i),
                e[V].timePlayedMs >= 2e3 && this.emitOnce(V, e, i),
                e[at].timePlayedMs >=
                  (function (t) {
                    return !t.isLive && t.durationMs > 0 ? Math.min(0.95 * t.durationMs, 1e4) : 1e4
                  })(t) && this.emitOnce(at, e, i)
              var a = e[O]
              a.timePlayedMs >=
                (function (t) {
                  return !t.isLive && t.durationMs > 0 ? Math.min(0.95 * t.durationMs, 6e3) : 6e3
                })(t) &&
                a.visibilityWeightedTimePlayedMs >=
                  (function (t) {
                    return !t.isLive && t.durationMs > 0 ? Math.min(0.5 * t.durationMs, 3e3) : 3e3
                  })(t) &&
                this.emitOnce(O, e, i),
                this.context &&
                  this.context.enableShortFormCompleteLogging &&
                  e[D].timePlayedMs >= 15e3 &&
                  this.emitOnce(D, e, i)
            }),
            (e.checkPlayFromTap = function (t, e) {
              e.isPlaying && !e.isPreview && (this.emitOnce(B, t, e), this.emitOnce(st, t, e))
            }),
            (e.emitOnce = function (t, e, i) {
              e[t].fired || (this.analytics.emit(t, i), (e[t].fired = !0))
            }),
            t
          )
        })(),
        De = (function (t) {
          function e(e, i, n, a) {
            var s
            ;((s = t.call(this) || this).scribeListener = new Pe(c()(s), e, a)),
              (s.promotedLogListener = new se(c()(s), i)),
              (s.tentpoleListener = new Ce(c()(s))),
              (s.viewListener = new Oe(c()(s), a)),
              (s.playbackLapseListener = new ee(c()(s))),
              (s.errorListener = new Ft(c()(s))),
              (s.beaconListener = new Wt(c()(s))),
              (s.rewindListener = new re(c()(s))),
              (s.heartbeatListener = new Rt(c()(s))),
              (s.loopListener = new Yt(c()(s))),
              (s.intendToPlayListener = new Kt(c()(s))),
              (s.videoSessionListener = new Ve(c()(s))),
              (s.ctaImpressionListener = new Dt(c()(s))),
              (s.captionsListener = new Ot(c()(s)))
            var r = new Jt(n, a),
              o = new Qt(r)
            return (s.lifecycleListener = new te(c()(s), o)), s
          }
          u()(e, t)
          var i = e.prototype
          return (
            (i.onTickEvent = function (t) {
              this.emit(tt, t)
            }),
            (i.onReplay = function (t) {
              var e = It(t)
              void 0 !== e && (e.shouldLoop || this.emit(X, t))
            }),
            (i.onTrackFinished = function (t) {
              this.emit(et, t)
            }),
            (i.onIntendToPlay = function (t) {
              this.emit(A, t)
            }),
            (i.onPlay = function (t) {
              this.emit(x, t)
            }),
            (i.onPause = function (t) {
              this.emit(F, t)
            }),
            (i.onMute = function (t) {
              this.emit(N, t)
            }),
            (i.onUnmute = function (t) {
              this.emit(it, t)
            }),
            (i.onFullScreen = function (t) {
              this.emit(P, t)
            }),
            (i.onShrink = function (t) {
              this.emit(Z, t)
            }),
            (i.onAdSkip = function (t) {
              this.emit(f, t)
            }),
            (i.onCtaImpression = function (t) {
              this.emit(T, t)
            }),
            (i.onCtaClick = function (t) {
              this.emit(b, t)
            }),
            (i.onConfigLoaded = function (t) {
              this.emit(g, t)
            }),
            (i.onError = function (t, e) {
              this.emit(E, t, e)
            }),
            (i.onTeardown = function (t) {
              this.emit($, t)
            }),
            (i.onPlaybackSpeedChange = function (t, e) {
              this.emit(z, t, e)
            }),
            e
          )
        })(v.a)
      e.a = De
    },
    jHwr: function (t, e, i) {
      'use strict'
      e.a = function (t, e) {
        var i = null,
          n = function () {
            ;(i = null), t()
          }
        return function () {
          return i || (i = e(n)), i
        }
      }
    },
    mf9H: function (t, e, i) {
      'use strict'
      i.d(e, 'a', function () {
        return _
      }),
        i.d(e, 'b', function () {
          return f
        })
      var n = i('VrFO'),
        a = i.n(n),
        s = i('Y9Ll'),
        r = i.n(s),
        o = i('KEM+'),
        c = i.n(o),
        l = (i('hBpG'), i('7x/C'), i('jwue'), i('+oxZ'), i('vrRf'), i('Ee2X'), i('LW0h'), i('6U7i'), i('6/RC')),
        u = i('XmKV'),
        d = i('HT/6'),
        h = i('jHwr'),
        p = i('+d3d'),
        v = i('fs1G'),
        y = { autoplayPrioritizationPolicy: u.a, minimumVisibilityForAutoplay: 0.25 },
        _ = (function () {
          function t() {
            var e = this,
              i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : y
            a()(this, t),
              c()(this, '_players', []),
              c()(this, '_setPlayerState', function (t, e) {
                ;(t.previousPlaybackState = t.playbackState), (t.playbackState = e)
              }),
              c()(this, '_updatePlaybackStates', function () {
                var t = e._players.find(function (t) {
                  return t.playbackState === d.b.USER_PLAYING && t.playbackPriority !== d.a.SPACE
                })
                t && !e._canPlay(t)
                  ? (e._pausePlayer(t), e._triggerAutoplay())
                  : t
                  ? e._stopAllExcept(t)
                  : e._triggerAutoplay()
              }),
              c()(
                this,
                '_scheduleUpdate',
                l.canUseDOM
                  ? Object(p.a)(
                      Object(h.a)(
                        this._updatePlaybackStates,
                        window.requestIdleCallback
                          ? function (t) {
                              return window.requestIdleCallback(t, { timeout: 200 })
                            }
                          : window.requestAnimationFrame,
                      ),
                      300,
                      { leading: !1, trailing: !0 },
                    )
                  : v.a,
              )
            var n = i.autoplayPrioritizationPolicy,
              s = i.minimumVisibilityForAutoplay
            ;(this._autoplayPrioritizationPolicy = n), (this._minimumVisibilityForAutoplay = s)
          }
          return (
            r()(t, [
              {
                key: 'register',
                value: function (t) {
                  var e = this,
                    i = t.canAutoplay,
                    n = t.onAutoPlayRequest,
                    a = t.onFullscreenEntered,
                    s = t.onFullscreenExited,
                    r = t.onPauseRequest,
                    o = t.isLooping,
                    c = t.playbackPriority,
                    l = void 0 === c ? d.a.NORMAL : c,
                    u = {
                      placement: void 0,
                      playbackPriority: l,
                      playbackState: d.b.INITIAL,
                      previousPlaybackState: d.b.INITIAL,
                      commandHandlers: {
                        onAutoPlayRequest: n,
                        onFullscreenEntered: a,
                        onFullscreenExited: s,
                        onPauseRequest: r,
                      },
                      canAutoplay: i && l !== d.a.INELIGIBLE,
                      isLooping: o,
                    }
                  return (
                    this._players.push(u),
                    {
                      reset: function () {
                        return e._handleReset(u)
                      },
                      signalFullscreenChange: function (t) {
                        return e._handleFullscreenChanged(t)
                      },
                      signalPlacementChange: function (t) {
                        return e._handlePlacementChange(u, t)
                      },
                      signalPlay: function () {
                        return e._handlePlay(u)
                      },
                      signalPause: function () {
                        return e._handlePause(u)
                      },
                      signalPlaybackFinish: function () {
                        return e._handlePlaybackFinished(u)
                      },
                      signalPlaybackPriorityChange: function (t, i) {
                        return e._handlePlaybackPriorityChange(u, t, i)
                      },
                      unregister: function () {
                        return e._handleUnregister(u)
                      },
                    }
                  )
                },
              },
              {
                key: '_handleFullscreenChanged',
                value: function (t) {
                  this._players.forEach(function (e) {
                    var i = e.commandHandlers,
                      n = i.onFullscreenEntered,
                      a = i.onFullscreenExited
                    t && n ? n() : !t && a && a()
                  })
                },
              },
              {
                key: '_handlePlacementChange',
                value: function (t, e) {
                  var i = e.scrollY()
                  ;(t.placement = e),
                    this._scrollY !== i && (this._scrollY = i),
                    t.playbackState === d.b.FINISHED &&
                      0 === e.visibleFraction() &&
                      this._setPlayerState(t, d.b.INITIAL),
                    this._scheduleUpdate()
                },
              },
              {
                key: '_handlePlay',
                value: function (t) {
                  t.playbackState !== d.b.AUTO_PLAYING &&
                    (t.previousPlaybackState === d.b.AUTO_PLAYING && t.isLooping
                      ? this._setPlayerState(t, d.b.AUTO_PLAYING)
                      : this._setPlayerState(t, d.b.USER_PLAYING)),
                    this._stopAllExcept(t)
                },
              },
              {
                key: '_handlePause',
                value: function (t) {
                  t.playbackState !== d.b.AUTO_PAUSED && this._setPlayerState(t, d.b.USER_PAUSED)
                },
              },
              {
                key: '_handlePlaybackFinished',
                value: function (t) {
                  this._setPlayerState(t, d.b.FINISHED)
                },
              },
              {
                key: '_handlePlaybackPriorityChange',
                value: function (t, e, i) {
                  ;(t.playbackPriority = e), (t.canAutoplay = i && e !== d.a.INELIGIBLE), this._scheduleUpdate()
                },
              },
              {
                key: '_handleReset',
                value: function (t) {
                  this._setPlayerState(t, d.b.INITIAL), this._scheduleUpdate()
                },
              },
              {
                key: '_handleUnregister',
                value: function (t) {
                  var e = this._players.indexOf(t)
                  e >= 0 && this._players.splice(e, 1), this._scheduleUpdate()
                },
              },
              {
                key: '_triggerAutoplay',
                value: function () {
                  var t = this,
                    e = this._players.filter(function (e) {
                      return t._canAutoPlay(e)
                    }),
                    i = this._findBestAutoplayFit(e)
                  i
                    ? (this._stopAllExcept(i), this._autoPlayVideo(i))
                    : this._players.forEach(function (e) {
                        e.playbackState === d.b.AUTO_PLAYING && t._pausePlayer(e)
                      })
                },
              },
              {
                key: '_canAutoPlay',
                value: function (t) {
                  var e = !!t.placement && t.placement.visibleFraction() >= this._minimumVisibilityForAutoplay,
                    i = t.playbackState === d.b.USER_PAUSED,
                    n = t.playbackState === d.b.FINISHED
                  return t.canAutoplay && e && !i && !n
                },
              },
              {
                key: '_canPlay',
                value: function (t) {
                  var e = !!t.placement && t.placement.visibleFraction() >= this._minimumVisibilityForAutoplay,
                    i = !!t.placement && t.placement.visibleFraction() > 0
                  return t.playbackPriority !== d.a.INELIGIBLE && (!t.placement || i || e)
                },
              },
              {
                key: '_stopAllExcept',
                value: function (t) {
                  var e = this
                  this._players.forEach(function (i) {
                    var n = i.playbackPriority !== d.a.SPACE
                    i === t ||
                      !n ||
                      (i.playbackState !== d.b.USER_PLAYING && i.playbackState !== d.b.AUTO_PLAYING) ||
                      e._pausePlayer(i)
                  })
                },
              },
              {
                key: '_pausePlayer',
                value: function (t) {
                  var e = t.commandHandlers.onPauseRequest
                  this._setPlayerState(t, d.b.AUTO_PAUSED), e()
                },
              },
              {
                key: '_autoPlayVideo',
                value: function (t) {
                  var e = t.commandHandlers.onAutoPlayRequest
                  this._setPlayerState(t, d.b.AUTO_PLAYING), e()
                },
              },
              {
                key: '_findBestAutoplayFit',
                value: function (t) {
                  return this._autoplayPrioritizationPolicy(t)
                },
              },
              {
                key: '_getDistanceToCenter',
                value: function (t) {
                  return t.placement ? t.placement.distanceToCenter() : Number.MAX_VALUE
                },
              },
              {
                key: '_getDistanceToTop',
                value: function (t) {
                  return t.placement ? t.placement.distanceToTop() : Number.MAX_VALUE
                },
              },
            ]),
            t
          )
        })(),
        f = new _()
    },
    sVFb: function (t, e, i) {
      var n = i('ax0f'),
        a = i('9JhN'),
        s = i('1U8s'),
        r = i('POgt'),
        o = i('ZORK'),
        c = i('3gKR'),
        l = i('rl0V'),
        u = /MSIE .\./.test(o),
        d = a.Function,
        h = function (t) {
          return function (e, i) {
            var n = l(arguments.length, 1) > 2,
              a = r(e) ? e : d(e),
              o = n ? c(arguments, 2) : void 0
            return t(
              n
                ? function () {
                    s(a, this, o)
                  }
                : a,
              i,
            )
          }
        }
      n({ global: !0, bind: !0, forced: u }, { setTimeout: h(a.setTimeout), setInterval: h(a.setInterval) })
    },
  },
])
//# sourceMappingURL=WIPED
