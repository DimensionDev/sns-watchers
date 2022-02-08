;(window.webpackJsonp = window.webpackJsonp || []).push([
  [164],
  {
    BXJq: function (t, e, a) {
      'use strict'
      a.d(e, 'a', function () {
        return l
      })
      var i = a('ddV6'),
        n = a.n(i),
        o = (a('7x/C'), a('JtPf'), a('Qavd'), a('ERkP')),
        r = a.n(o),
        s = a('dgjd')
      function l(t) {
        var e = Object(s.a)(t),
          a = e.handlers,
          i = e.space,
          o = r.a.useState(!1),
          l = n()(o, 2),
          u = l[0],
          d = l[1],
          c = { hasReminderSet: !1, onClick: void 0, scheduledStart: void 0 }
        return (
          (function (t) {
            return t && t.host && t.scheduled_start && ('NotStarted' === t.state || 'PrePublished' === t.state)
          })(i) &&
            ((c.hasReminderSet = Boolean(null == i ? void 0 : i.is_subscribed)),
            (c.onClick = function () {
              var t = function () {
                return d(!1)
              }
              d(!0), c.hasReminderSet ? a.unsubscribe().finally(t) : a.subscribe().finally(t)
            }),
            (c.scheduledStart = null == i ? void 0 : i.scheduled_start)),
          { props: c, isSubscribing: u }
        )
      }
    },
    U1mC: function (t, e, a) {
      'use strict'
      a.r(e),
        a.d(e, '__DANGEROUS_IMPORT__', function () {
          return B
        })
      var i = a('RhWx'),
        n = a.n(i),
        o = a('97Jx'),
        r = a.n(o),
        s = a('yiKp'),
        l = a.n(s),
        u = (a('7xRU'), a('M+/F'), a('LW0h'), a('7x/C'), a('2G9S'), a('ERkP')),
        d = a.n(u),
        c = a('v6aA'),
        p = a('B/Qy'),
        h = a('vYiB'),
        v = a('O07O'),
        b = a('dgjd'),
        S = a('BXJq'),
        m = a('AooF'),
        B = function (t) {
          var e,
            a = d.a.useContext(c.a).featureSwitches,
            i = Object(p.a)(t.audioSpaceId),
            o = Object(b.a)(t.audioSpaceId),
            s = o.handlers,
            u = o.space,
            v = o.utils,
            B = v.state() === m.a.StateEnum.unavailable,
            y = Object(S.a)(t.audioSpaceId),
            k = {}
          k =
            !1 === t.isInteractive
              ? { link: void 0, onButtonClick: void 0 }
              : null != u && u.ticket_group_id
              ? { link: i, withoutButton: !0 }
              : (t.withDirectJoin && v.is.Running) || v.is.replayable
              ? {
                  onClick: function () {
                    return s.join('card')
                  },
                }
              : { link: i, onButtonClick: y.props.onClick }
          var _ = v.state(),
            w = (function (t) {
              return t ? [t.host].concat(n()(t.cohosts), n()(t.participants.speakers)).filter(Boolean) : []
            })(u),
            R = l()(
              {
                disabled: y.isSubscribing,
                hasReminderSet: y.props.hasReminderSet,
                scheduledStart: y.props.scheduledStart,
                isJoined: v.is.joined,
                title: v.title(),
                replayStartTime: void 0,
                replayDuration: void 0,
                withSquareBottomBorderRadius: t.withSquareBottomBorderRadius,
                withStraightBorders: t.withStraightBorders,
                withoutButton: t.withoutButton,
              },
              k,
            ),
            g = u || {},
            P = g.ended_at,
            C = g.started_at
          C && P && ((R.replayStartTime = C), (R.replayDuration = P - C))
          var j = { shouldUseV2: !1, propsForV2: void 0 }
          2 === a.getValue('voice_rooms_card_version') &&
            ((j.shouldUseV2 = !0),
            (j.propsForV2 = l()(
              l()({}, R),
              {},
              {
                host: null == u ? void 0 : u.host,
                participants: w.slice(0, 3),
                palette: null == u ? void 0 : u.hostPalette,
                total: null == u ? void 0 : u.participants.total,
                state: _,
                button: void 0,
              },
            )),
            v.is.joined && v.is.replayable && (j.propsForV2.button = d.a.createElement(f, j.propsForV2)))
          return d.a.createElement(
            h.a,
            {
              onImpression: function () {
                v.scribe('::::audiospace_card:impression')
              },
            },
            d.a.createElement(
              m.a,
              r()(
                {
                  disableInteractionsIfUnavailable: !0,
                  hostName: null == u || null === (e = u.host) || void 0 === e ? void 0 : e.display_name,
                  isReplay: _ === m.a.StateEnum.replay,
                  isUnavailable: B,
                  participants: w,
                  state: null == u ? void 0 : u.state,
                },
                R,
                j,
              ),
            ),
          )
        }
      function f(t) {
        var e = v.a.usePlayButtonProps(),
          a = e.isPlaying,
          i = e.togglePlayback
        return d.a.createElement(m.a.ButtonV2, r()({}, t, { onButtonClick: i, replayIsPlaying: a }))
      }
    },
  },
])
//# sourceMappingURL=WIPED
