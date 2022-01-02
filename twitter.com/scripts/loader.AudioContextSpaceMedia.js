;(window.webpackJsonp = window.webpackJsonp || []).push([
  [160],
  {
    BXJq: function (t, e, r) {
      'use strict'
      r.d(e, 'a', function () {
        return u
      })
      var a = r('ddV6'),
        i = r.n(a),
        n = (r('Qavd'), r('JtPf'), r('7x/C'), r('ERkP')),
        o = r('v6aA'),
        s = r('dgjd')
      function u(t) {
        var e = n.useContext(o.a).featureSwitches,
          r = Object(s.a)(t),
          a = r.handlers,
          u = r.space,
          c = n.useState(!1),
          l = i()(c, 2),
          d = l[0],
          p = l[1],
          b =
            e.isTrue('voice_rooms_scheduling_enabled') &&
            (function (t) {
              return t && t.host && t.scheduled_start && ('NotStarted' === t.state || 'PrePublished' === t.state)
            })(u),
          h = { hasReminderSet: !1, onClick: void 0, scheduledStart: void 0 }
        return (
          b &&
            ((h.hasReminderSet = Boolean(b && (null == u ? void 0 : u.is_subscribed))),
            (h.onClick = function () {
              var t = function () {
                return p(!1)
              }
              p(!0), h.hasReminderSet ? a.unsubscribe().finally(t) : a.subscribe().finally(t)
            }),
            (h.scheduledStart = null == u ? void 0 : u.scheduled_start)),
          { props: h, isSubscribing: d }
        )
      }
    },
    U1mC: function (t, e, r) {
      'use strict'
      r.r(e),
        r.d(e, '__DANGEROUS_IMPORT__', function () {
          return O
        })
      r('+KXO'), r('1t7P'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var a = r('RhWx'),
        i = r.n(a),
        n = r('97Jx'),
        o = r.n(n),
        s = r('KEM+'),
        u = r.n(s),
        c = (r('7xRU'), r('M+/F'), r('LW0h'), r('2G9S'), r('ERkP')),
        l = r('v6aA'),
        d = r('B/Qy'),
        p = r('vYiB'),
        b = r('O07O'),
        h = r('dgjd'),
        v = r('BXJq'),
        f = r('AooF')
      function S(t, e) {
        var r = Object.keys(t)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(t)
          e &&
            (a = a.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            r.push.apply(r, a)
        }
        return r
      }
      function y(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {}
          e % 2
            ? S(Object(r), !0).forEach(function (e) {
                u()(t, e, r[e])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : S(Object(r)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
              })
        }
        return t
      }
      var O = function (t) {
        var e,
          r = c.useContext(l.a).featureSwitches,
          a = Object(d.a)(t.audioSpaceId),
          n = Object(h.a)(t.audioSpaceId),
          s = n.handlers,
          u = n.space,
          b = n.utils,
          S = b.state() === f.a.SpaceMediaStateEnum.unavailable,
          O = Object(v.a)(t.audioSpaceId),
          w = {}
        w =
          !1 === t.isInteractive
            ? { link: void 0, onButtonClick: void 0 }
            : (t.withDirectJoin && b.is.Running) || b.is.replayable
            ? {
                onClick: function () {
                  return s.join('card')
                },
              }
            : { link: a, onButtonClick: O.props.onClick }
        var j = b.state(),
          P = (function (t) {
            return t ? [t.host].concat(i()(t.cohosts), i()(t.participants.speakers)).filter(Boolean) : []
          })(u),
          g = y(
            {
              disabled: O.isSubscribing,
              hasReminderSet: O.props.hasReminderSet,
              scheduledStart: O.props.scheduledStart,
              isJoined: b.is.joined,
              title: b.title(),
              replayStartTime: void 0,
              replayDuration: void 0,
              withSquareBottomBorderRadius: t.withSquareBottomBorderRadius,
              withStraightBorders: t.withStraightBorders,
              withoutButton: t.withoutButton,
            },
            w,
          ),
          B = u || {},
          _ = B.ended_at,
          k = B.started_at
        k && _ && ((g.replayStartTime = k), (g.replayDuration = _ - k))
        var R = { shouldUseV2: !1, propsForV2: void 0 }
        2 === r.getValue('voice_rooms_card_version') &&
          ((R.shouldUseV2 = !0),
          (R.propsForV2 = y(
            y({}, g),
            {},
            {
              host: null == u ? void 0 : u.host,
              participants: P.slice(0, 3),
              palette: null == u ? void 0 : u.hostPalette,
              total: null == u ? void 0 : u.participants.total,
              state: j,
              button: void 0,
            },
          )),
          b.is.joined && b.is.replayable && (R.propsForV2.button = c.createElement(m, R.propsForV2)))
        return c.createElement(
          p.a,
          {
            onImpression: function () {
              b.scribe('::::audiospace_card:impression')
            },
          },
          c.createElement(
            f.a,
            o()(
              {
                disableInteractionsIfUnavailable: !0,
                hostName: null == u || null === (e = u.host) || void 0 === e ? void 0 : e.display_name,
                isReplay: j === f.a.SpaceMediaStateEnum.replay,
                isUnavailable: S,
                participants: P,
                state: null == u ? void 0 : u.state,
              },
              g,
              R,
            ),
          ),
        )
      }
      function m(t) {
        var e = b.a.usePlayButtonProps(),
          r = e.isPlaying,
          a = e.togglePlayback
        return c.createElement(f.a.ButtonV2, o()({}, t, { onButtonClick: a, replayIsPlaying: r }))
      }
    },
  },
])
//# sourceMappingURL=WIPED
