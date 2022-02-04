;(window.webpackJsonp = window.webpackJsonp || []).push([
  [177],
  {
    WOwf: function (e, t, n) {
      'use strict'
      function a(e, t) {
        return Math.min(1, 1 - e / t)
      }
      n.d(t, 'a', function () {
        return a
      })
    },
    aRdY: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        i = n.n(a),
        r = n('WOwf'),
        o = n('k6Ei'),
        u = n('rHpw'),
        s = n('MWbm'),
        l = u.a.create(function (e) {
          e.colors
          return {
            root: { alignItems: 'flex-start', minHeight: 30, minWidth: 30, justifyContent: 'center', margin: 'auto' },
            progressCircle: { transitionDuration: '0.2s', transitionProperty: 'opacity' },
          }
        })
      t.a = function (e) {
        var t = e.accessibilityLabel,
          n = e.count,
          a = e.maxCount,
          u = a - n,
          d = Object(r.a)(u, a),
          c = i.a.createElement(o.a, {
            accessibilityLabel: t,
            color: 'primary',
            progress: d,
            size: 20,
            strokeWidth: 'thick',
            style: l.progressCircle,
          })
        return i.a.createElement(s.a, { style: l.root }, c)
      }
    },
    mL9d: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'PreviewActions', function () {
          return E
        })
      var a = n('ddV6'),
        i = n.n(a),
        r = (n('uFXj'), n('ERkP')),
        o = n.n(r),
        u = n('qlwE'),
        s = n('rxPX'),
        l = n('5oBF'),
        d = Object(s.a)()
          .propsFromState(function () {
            return { previewTweet: l.d, undoTweetSettings: u.p }
          })
          .adjustStateProps(function (e) {
            var t,
              n,
              a,
              i,
              r = e.previewTweet,
              o = e.undoTweetSettings,
              u = null == r ? void 0 : r.timeToSend,
              s = null == r || null === (t = r.previewData) || void 0 === t ? void 0 : t.communityIdValue,
              d = null == r || null === (n = r.previewData) || void 0 === n ? void 0 : n.inReplyToStatus,
              c =
                null == r ||
                null === (a = r.previewData.sendData[0]) ||
                void 0 === a ||
                null === (i = a.quotedStatus) ||
                void 0 === i
                  ? void 0
                  : i.id_str,
              p = o.durationSecs || l.a
            return {
              timeToSend: u,
              inReplyToStatusId: null == d ? void 0 : d.id_str,
              undoPeriod: p,
              communityIdValue: s,
              quotedStatusId: c,
            }
          })
          .propsFromActions(function () {
            return { undoTweet: l.h, sendNow: l.g }
          })
          .withAnalytics({ page: 'undo_tweet_details', section: 'timeline' }),
        c = n('3XMw'),
        p = n.n(c)
      var m = n('zCf4'),
        w = n('MWbm'),
        f = n('t62R'),
        b = n('aRdY'),
        y = n('/yvb'),
        v = n('rHpw'),
        g = p.a.bc2ceaf2,
        S = p.a.gf5e9ea6,
        h = p.a.j4c40da3,
        T = p.a.b23688c7,
        E = function (e) {
          var t = Object(m.f)(),
            n = e.analytics,
            a = e.communityIdValue,
            r = e.inReplyToStatusId,
            u = e.previewTweetId,
            s = e.quotedStatusId,
            l = e.sendNow,
            d = e.timeToSend,
            c = e.undoPeriod,
            p = e.undoTweet,
            v = o.a.useState(0),
            E = i()(v, 2),
            W = E[0],
            x = E[1],
            _ = o.a.useState(),
            C = i()(_, 2),
            D = C[0],
            R = C[1],
            j = o.a.useState(!1),
            k = i()(j, 2),
            F = k[0],
            L = k[1]
          o.a.useEffect(
            function () {
              'number' == typeof d && x(Math.round(d - Date.now()))
            },
            [d],
          )
          var P = (function (e) {
            var t = o.a.useState(0),
              n = i()(t, 2),
              a = n[0],
              r = n[1],
              u = o.a.useRef()
            return (
              o.a.useEffect(
                function () {
                  var t = Date.now()
                  return (
                    (u.current = window.requestAnimationFrame(function n() {
                      var a = Math.min(1, (Date.now() - t) / e)
                      a < 1 && (r(a), (u.current = window.requestAnimationFrame(n)))
                    })),
                    function () {
                      window.cancelAnimationFrame(u.current)
                    }
                  )
                },
                [e],
              ),
              a
            )
          })(W)
          if (W <= 0 || !W) return null
          return 'number' != typeof d
            ? null
            : o.a.createElement(
                w.a,
                {
                  onLayout: function (e) {
                    var t, n
                    R(
                      (null == e ||
                      null === (t = e.nativeEvent) ||
                      void 0 === t ||
                      null === (n = t.layout) ||
                      void 0 === n
                        ? void 0
                        : n.width) || 0,
                    )
                  },
                  style: I.root,
                },
                o.a.createElement(
                  w.a,
                  { style: I.timer },
                  o.a.createElement(
                    w.a,
                    { style: I.timerWrapper },
                    o.a.createElement(b.a, { accessibilityLabel: T, count: P, maxCount: 1 }),
                  ),
                  !D || D < 470 ? null : o.a.createElement(f.b, { style: I.sendingLabel, weight: 'bold' }, g),
                ),
                o.a.createElement(
                  w.a,
                  { style: I.buttonWrapper },
                  o.a.createElement(
                    y.a,
                    {
                      disabled: F,
                      onClick: function () {
                        l(u),
                          L(!0),
                          n.scribe({
                            element: 'send_now',
                            action: 'send_now',
                            data: { subscription_details: { draft_id: u, undo_period: c } },
                          })
                      },
                      size: 'xSmall',
                      style: { marginRight: 4 },
                      type: 'brandText',
                    },
                    h,
                  ),
                  o.a.createElement(
                    y.a,
                    {
                      onClick: function () {
                        n.scribe({
                          element: 'undo_tweet',
                          action: 'undo',
                          data: { subscription_details: { draft_id: u, undo_period: c } },
                        }),
                          p(u),
                          t.push({
                            pathname: '/compose/tweet',
                            state: {
                              previewTweetId: u,
                              inReplyToStatusId: r,
                              selectedCommunityId: a,
                              quotedStatusId: s,
                            },
                          })
                      },
                      size: 'xSmall',
                      type: 'brandFilled',
                    },
                    S,
                  ),
                ),
              )
        },
        I = v.a.create(function (e) {
          return {
            root: {
              marginTop: e.spaces.space12,
              paddingTop: e.spaces.space12,
              borderTopWidth: e.borderWidths.small,
              borderTopColor: e.colors.gray50,
              flexDirection: 'row',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
            },
            timer: { justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'center' },
            timerWrapper: { width: '2em', height: '2em' },
            sendingLabel: { fontWeight: 'bold', marginLeft: e.spaces.space8 },
            buttonWrapper: { display: 'flex', flexDirection: 'row' },
          }
        }),
        W = d(E)
      t.default = W
    },
  },
])
//# sourceMappingURL=WIPED
