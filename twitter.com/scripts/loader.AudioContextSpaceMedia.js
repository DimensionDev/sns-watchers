;(window.webpackJsonp = window.webpackJsonp || []).push([
  [160],
  {
    BXJq: function (t, e, r) {
      'use strict'
      r.d(e, 'a', function () {
        return s
      })
      var a = r('ddV6'),
        n = r.n(a),
        i = (r('Qavd'), r('JtPf'), r('7x/C'), r('ERkP')),
        o = r('dgjd')
      function s(t) {
        var e = Object(o.a)(t),
          r = e.handlers,
          a = e.space,
          s = i.useState(!1),
          c = n()(s, 2),
          u = c[0],
          l = c[1],
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
          { props: d, isSubscribing: u }
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
        n = r.n(a),
        i = r('97Jx'),
        o = r.n(i),
        s = r('KEM+'),
        c = r.n(s),
        u = (r('7xRU'), r('M+/F'), r('LW0h'), r('2G9S'), r('ERkP')),
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
                c()(t, e, r[e])
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
          r = u.useContext(l.a).featureSwitches,
          a = Object(d.a)(t.audioSpaceId),
          i = Object(h.a)(t.audioSpaceId),
          s = i.handlers,
          c = i.space,
          b = i.utils,
          S = b.state() === f.a.SpaceMediaStateEnum.unavailable,
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
            : { link: a, onButtonClick: O.props.onClick }
        var w = b.state(),
          P = (function (t) {
            return t ? [t.host].concat(n()(t.cohosts), n()(t.participants.speakers)).filter(Boolean) : []
          })(c),
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
          B = c || {},
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
              host: null == c ? void 0 : c.host,
              participants: P.slice(0, 3),
              palette: null == c ? void 0 : c.hostPalette,
              total: null == c ? void 0 : c.participants.total,
              state: w,
              button: void 0,
            },
          )),
          b.is.joined && b.is.replayable && (_.propsForV2.button = u.createElement(m, _.propsForV2)))
        return u.createElement(
          p.a,
          {
            onImpression: function () {
              b.scribe('::::audiospace_card:impression')
            },
          },
          u.createElement(
            f.a,
            o()(
              {
                disableInteractionsIfUnavailable: !0,
                hostName: null == c || null === (e = c.host) || void 0 === e ? void 0 : e.display_name,
                isReplay: w === f.a.SpaceMediaStateEnum.replay,
                isUnavailable: S,
                participants: P,
                state: null == c ? void 0 : c.state,
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
          a = e.togglePlayback
        return u.createElement(f.a.ButtonV2, o()({}, t, { onButtonClick: a, replayIsPlaying: r }))
      }
    },
  },
])
//# sourceMappingURL=WIPED
