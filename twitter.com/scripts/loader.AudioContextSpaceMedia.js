;(window.webpackJsonp = window.webpackJsonp || []).push([
  [163],
  {
    BXJq: function (t, e, r) {
      'use strict'
      r.d(e, 'a', function () {
        return u
      })
      var a = r('ddV6'),
        n = r.n(a),
        i = (r('Qavd'), r('JtPf'), r('7x/C'), r('ERkP')),
        o = r.n(i),
        s = r('dgjd')
      function u(t) {
        var e = Object(s.a)(t),
          r = e.handlers,
          a = e.space,
          i = o.a.useState(!1),
          u = n()(i, 2),
          c = u[0],
          l = u[1],
          d = { hasReminderSet: !1, onClick: void 0, scheduledStart: void 0 }
        return (
          (function (t) {
            return t && t.host && t.scheduled_start && ('NotStarted' === t.state || 'PrePublished' === t.state)
          })(a) &&
            ((d.hasReminderSet = Boolean(null == a ? void 0 : a.is_subscribed)),
            (d.onClick = function () {
              var t = function () {
                return l(!1)
              }
              l(!0), d.hasReminderSet ? r.unsubscribe().finally(t) : r.subscribe().finally(t)
            }),
            (d.scheduledStart = null == a ? void 0 : a.scheduled_start)),
          { props: d, isSubscribing: c }
        )
      }
    },
    U1mC: function (t, e, r) {
      'use strict'
      r.r(e),
        r.d(e, '__DANGEROUS_IMPORT__', function () {
          return m
        })
      r('+KXO'), r('1t7P'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var a = r('RhWx'),
        n = r.n(a),
        i = r('97Jx'),
        o = r.n(i),
        s = r('KEM+'),
        u = r.n(s),
        c = (r('7xRU'), r('M+/F'), r('LW0h'), r('2G9S'), r('ERkP')),
        l = r.n(c),
        d = r('v6aA'),
        p = r('B/Qy'),
        b = r('vYiB'),
        h = r('O07O'),
        v = r('dgjd'),
        f = r('BXJq'),
        S = r('AooF')
      function y(t, e) {
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
      function O(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {}
          e % 2
            ? y(Object(r), !0).forEach(function (e) {
                u()(t, e, r[e])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : y(Object(r)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
              })
        }
        return t
      }
      var m = function (t) {
        var e,
          r = l.a.useContext(d.a).featureSwitches,
          a = Object(p.a)(t.audioSpaceId),
          i = Object(v.a)(t.audioSpaceId),
          s = i.handlers,
          u = i.space,
          c = i.utils,
          h = c.state() === S.a.StateEnum.unavailable,
          y = Object(f.a)(t.audioSpaceId),
          m = {}
        m =
          !1 === t.isInteractive
            ? { link: void 0, onButtonClick: void 0 }
            : (t.withDirectJoin && c.is.Running) || c.is.replayable
            ? {
                onClick: function () {
                  return s.join('card')
                },
              }
            : { link: a, onButtonClick: y.props.onClick }
        var w = c.state(),
          P = (function (t) {
            return t ? [t.host].concat(n()(t.cohosts), n()(t.participants.speakers)).filter(Boolean) : []
          })(u),
          g = O(
            {
              disabled: y.isSubscribing,
              hasReminderSet: y.props.hasReminderSet,
              scheduledStart: y.props.scheduledStart,
              isJoined: c.is.joined,
              title: c.title(),
              replayStartTime: void 0,
              replayDuration: void 0,
              withSquareBottomBorderRadius: t.withSquareBottomBorderRadius,
              withStraightBorders: t.withStraightBorders,
              withoutButton: t.withoutButton,
            },
            m,
          ),
          B = u || {},
          k = B.ended_at,
          R = B.started_at
        R && k && ((g.replayStartTime = R), (g.replayDuration = k - R))
        var _ = { shouldUseV2: !1, propsForV2: void 0 }
        2 === r.getValue('voice_rooms_card_version') &&
          ((_.shouldUseV2 = !0),
          (_.propsForV2 = O(
            O({}, g),
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
          c.is.joined && c.is.replayable && (_.propsForV2.button = l.a.createElement(j, _.propsForV2)))
        return l.a.createElement(
          b.a,
          {
            onImpression: function () {
              c.scribe('::::audiospace_card:impression')
            },
          },
          l.a.createElement(
            S.a,
            o()(
              {
                disableInteractionsIfUnavailable: !0,
                hostName: null == u || null === (e = u.host) || void 0 === e ? void 0 : e.display_name,
                isReplay: w === S.a.StateEnum.replay,
                isUnavailable: h,
                participants: P,
                state: null == u ? void 0 : u.state,
              },
              g,
              _,
            ),
          ),
        )
      }
      function j(t) {
        var e = h.a.usePlayButtonProps(),
          r = e.isPlaying,
          a = e.togglePlayback
        return l.a.createElement(S.a.ButtonV2, o()({}, t, { onButtonClick: a, replayIsPlaying: r }))
      }
    },
  },
])
//# sourceMappingURL=WIPED
