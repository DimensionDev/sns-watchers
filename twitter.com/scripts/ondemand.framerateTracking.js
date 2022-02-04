;(window.webpackJsonp = window.webpackJsonp || []).push([
  [341],
  {
    Iid0: function (e, t, r) {
      'use strict'
      r.r(t)
      var n = r('VrFO'),
        i = r.n(n),
        o = r('Y9Ll'),
        a = r.n(o),
        s = r('KEM+'),
        l = r.n(s),
        u = r('E6XO'),
        c = r('0tL4')
      t.default = function (e) {
        var t,
          r = e.reportNamespace,
          n = e.scrollTrailWindowMs,
          i = void 0 === n ? 144 : n,
          o = e.minScrollDurationMs,
          a = void 0 === o ? 2e3 : o,
          s = function () {
            var e = window.performance.now() + i
            t
              ? t.updateDeadline(e)
              : (t = d.start(e, function (e) {
                  e.durationMs() >= a &&
                    (u.c('framerate:longscroll:'.concat(r), { duration_ms: Math.round(e.averageFPS()) }),
                    u.c('consecutive_frames_dropped:at_least_4:'.concat(r), { event_value: e.longFrames() })),
                    (t = void 0)
                }))
          }
        return (
          window.addEventListener('scroll', s, !!c.a && { passive: !0 }),
          {
            stop: function () {
              window.removeEventListener('scroll', s, !!c.a && { passive: !0 }), t && t.stop()
            },
          }
        )
      }
      var d = (function () {
          function e(t, r) {
            var n = this
            i()(this, e),
              l()(this, '_frameRequestId', void 0),
              l()(this, '_scheduleNextFrameMeasurement', function () {
                n._frameRequestId = window.requestAnimationFrame(n._handleFrame)
              }),
              l()(this, '_handleFrame', function (e) {
                ;(n._frameRequestId = void 0),
                  n._previousFrameStartTime
                    ? n._metricReport.recordFrame(n._previousFrameStartTime, e)
                    : n._metricReport.recordScrollingStartY(window.scrollY),
                  (n._previousFrameStartTime = e),
                  e < n._deadline
                    ? n._scheduleNextFrameMeasurement()
                    : (n._metricReport.recordScrollingEndY(window.scrollY),
                      n._onCompletion.call(void 0, n._metricReport))
              }),
              (this._deadline = t),
              (this._onCompletion = r),
              (this._metricReport = new m())
          }
          return (
            a()(
              e,
              [
                {
                  key: 'updateDeadline',
                  value: function (e) {
                    this._deadline = e
                  },
                },
                {
                  key: 'stop',
                  value: function () {
                    this._frameRequestId &&
                      (window.cancelAnimationFrame(this._frameRequestId), (this._frameRequestId = void 0))
                  },
                },
                {
                  key: '_start',
                  value: function () {
                    this._scheduleNextFrameMeasurement()
                  },
                },
              ],
              [
                {
                  key: 'start',
                  value: function (t, r) {
                    var n = new e(t, r)
                    return n._start(), n
                  },
                },
              ],
            ),
            e
          )
        })(),
        m = (function () {
          function e() {
            i()(this, e),
              l()(this, '_frameCount', 0),
              l()(this, '_scrollingStartTime', 0),
              l()(this, '_scrollingStartY', 0),
              l()(this, '_scrollingEndTime', 0),
              l()(this, '_scrollingEndY', 0),
              l()(this, '_longFramesCount', 0)
          }
          return (
            a()(e, [
              {
                key: 'recordFrame',
                value: function (e, t) {
                  this._scrollingStartTime || (this._scrollingStartTime = e),
                    (this._scrollingEndTime = t),
                    (this._frameCount += 1),
                    this._countDroppedFrames(e, t) && (this._longFramesCount += 1)
                },
              },
              {
                key: 'recordScrollingStartY',
                value: function (e) {
                  this._scrollingStartY = e
                },
              },
              {
                key: 'recordScrollingEndY',
                value: function (e) {
                  this._scrollingEndY = e
                },
              },
              {
                key: 'averageFPS',
                value: function () {
                  var e = this.durationMs()
                  return e > 0 ? (1e3 * this._frameCount) / e : 0
                },
              },
              {
                key: 'durationMs',
                value: function () {
                  return Math.max(0, this._scrollingEndTime - this._scrollingStartTime)
                },
              },
              {
                key: 'longFrames',
                value: function () {
                  var e = Math.abs(this._scrollingEndY - this._scrollingStartY) / 1e3
                  return e > 0 ? Math.round(this._longFramesCount / e) : 0
                },
              },
              {
                key: '_countDroppedFrames',
                value: function (e, t) {
                  return (t - e) / 16 >= 5
                },
              },
            ]),
            e
          )
        })()
    },
  },
])
//# sourceMappingURL=WIPED
