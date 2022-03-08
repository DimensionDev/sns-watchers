;(window.webpackJsonp = window.webpackJsonp || []).push([
  [170],
  {
    U1mC: function (t, e, a) {
      'use strict'
      a.r(e),
        a.d(e, '__DANGEROUS_IMPORT__', function () {
          return B
        })
      var i = a('RhWx'),
        o = a.n(i),
        n = a('97Jx'),
        r = a.n(n),
        s = a('yiKp'),
        l = a.n(s),
        u = (a('7xRU'), a('M+/F'), a('LW0h'), a('7x/C'), a('2G9S'), a('ERkP')),
        d = a.n(u),
        c = a('v6aA'),
        p = a('B/Qy'),
        h = a('vYiB'),
        v = a('O07O'),
        S = a('dgjd'),
        b = a('BXJq'),
        m = a('Tg44'),
        B = function (t) {
          var e,
            a = d.a.useContext(c.a).featureSwitches,
            i = Object(p.a)(t.audioSpaceId),
            n = Object(S.a)(t.audioSpaceId),
            s = n.handlers,
            u = n.space,
            v = n.utils,
            B = v.state() === m.a.StateEnum.unavailable,
            w = Object(b.a)(t.audioSpaceId),
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
              : { link: i, onButtonClick: w.props.onClick }
          var _ = v.state(),
            g = (function (t) {
              return t ? [t.host].concat(o()(t.cohosts), o()(t.participants.speakers)).filter(Boolean) : []
            })(u),
            R = l()(
              {
                disabled: w.isSubscribing,
                hasReminderSet: w.props.hasReminderSet,
                scheduledStart: w.props.scheduledStart,
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
            f = u || {},
            I = f.ended_at,
            C = f.started_at
          C && I && ((R.replayStartTime = C), (R.replayDuration = I - C))
          var E = { shouldUseV2: !1, propsForV2: void 0 }
          2 === a.getValue('voice_rooms_card_version') &&
            ((E.shouldUseV2 = !0),
            (E.propsForV2 = l()(
              l()({}, R),
              {},
              {
                host: null == u ? void 0 : u.host,
                participants: g.slice(0, 3),
                palette: null == u ? void 0 : u.hostPalette,
                total: null == u ? void 0 : u.participants.total,
                state: _,
                button: void 0,
              },
            )),
            v.is.joined && v.is.replayable && (E.propsForV2.button = d.a.createElement(y, E.propsForV2)))
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
                  participants: g,
                  state: null == u ? void 0 : u.state,
                },
                R,
                E,
              ),
            ),
          )
        }
      function y(t) {
        var e = v.a.usePlayButtonProps(),
          a = e.isPlaying,
          i = e.togglePlayback
        return d.a.createElement(m.a.ButtonV2, r()({}, t, { onButtonClick: i, replayIsPlaying: a }))
      }
    },
  },
])
//# sourceMappingURL=WIPED
