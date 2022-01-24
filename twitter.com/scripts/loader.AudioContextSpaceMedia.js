;(window.webpackJsonp = window.webpackJsonp || []).push([
  [160],
  {
    BXJq: function (t, e, r) {
      'use strict'
      r.d(e, 'a', function () {
        return s
      })
      var n = r('ddV6'),
        i = r.n(n),
        a = (r('Qavd'), r('JtPf'), r('7x/C'), r('ERkP')),
        o = r('dgjd')
      function s(t) {
        var e = Object(o.a)(t),
          r = e.handlers,
          n = e.space,
          s = a.useState(!1),
          u = i()(s, 2),
          c = u[0],
          l = u[1],
          d = { hasReminderSet: !1, onClick: void 0, scheduledStart: void 0 }
        return (
          (function (t) {
            return t && t.host && t.scheduled_start && ('NotStarted' === t.state || 'PrePublished' === t.state)
          })(n) &&
            ((d.hasReminderSet = Boolean(null == n ? void 0 : n.is_subscribed)),
            (d.onClick = function () {
              var t = function () {
                return l(!1)
              }
              l(!0), d.hasReminderSet ? r.unsubscribe().finally(t) : r.subscribe().finally(t)
            }),
            (d.scheduledStart = null == n ? void 0 : n.scheduled_start)),
          { props: d, isSubscribing: c }
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
      var n = r('RhWx'),
        i = r.n(n),
        a = r('97Jx'),
        o = r.n(a),
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
          var n = Object.getOwnPropertySymbols(t)
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            r.push.apply(r, n)
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
          n = Object(d.a)(t.audioSpaceId),
          a = Object(h.a)(t.audioSpaceId),
          s = a.handlers,
          u = a.space,
          b = a.utils,
          S = b.state() === f.a.StateEnum.unavailable,
          O = Object(v.a)(t.audioSpaceId),
          j = {}
        j =
          !1 === t.isInteractive
            ? { link: void 0, onButtonClick: void 0 }
            : (t.withDirectJoin && b.is.Running) || b.is.replayable
            ? {
                onClick: function () {
                  return s.join('card')
                },
              }
            : { link: n, onButtonClick: O.props.onClick }
        var w = b.state(),
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
            j,
          ),
          B = u || {},
          k = B.ended_at,
          R = B.started_at
        R && k && ((g.replayStartTime = R), (g.replayDuration = k - R))
        var _ = { shouldUseV2: !1, propsForV2: void 0 }
        2 === r.getValue('voice_rooms_card_version') &&
          ((_.shouldUseV2 = !0),
          (_.propsForV2 = y(
            y({}, g),
            {},
            {
              host: null == u ? void 0 : u.host,
              participants: P.slice(0, 3),
              palette: null == u ? void 0 : u.hostPalette,
              total: null == u ? void 0 : u.participants.total,
              state: w,
              button: void 0,
            },
          )),
          b.is.joined && b.is.replayable && (_.propsForV2.button = c.createElement(m, _.propsForV2)))
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
                isReplay: w === f.a.StateEnum.replay,
                isUnavailable: S,
                participants: P,
                state: null == u ? void 0 : u.state,
              },
              g,
              _,
            ),
          ),
        )
      }
      function m(t) {
        var e = b.a.usePlayButtonProps(),
          r = e.isPlaying,
          n = e.togglePlayback
        return c.createElement(f.a.ButtonV2, o()({}, t, { onButtonClick: n, replayIsPlaying: r }))
      }
    },
  },
])
//# sourceMappingURL=WIPED
