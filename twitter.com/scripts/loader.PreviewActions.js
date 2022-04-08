;(window.webpackJsonp = window.webpackJsonp || []).push([
  [179],
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
          return I
        })
      var a = n('ddV6'),
        i = n.n(a),
        r = (n('Blm6'), n('uFXj'), n('ERkP')),
        o = n.n(r),
        u = n('u7LJ'),
        s = n('rxPX'),
        l = n('5oBF'),
        d = Object(s.a)()
          .propsFromState(function () {
            return { previewTweet: l.e, undoTweetSettings: u.d }
          })
          .adjustStateProps(function (e) {
            var t,
              n,
              a,
              i,
              r,
              o = e.previewTweet,
              u = (e.undoTweetSettings, null == o ? void 0 : o.timeToSend),
              s = null == o || null === (t = o.previewData) || void 0 === t ? void 0 : t.communityIdValue,
              d = null == o || null === (n = o.previewData) || void 0 === n ? void 0 : n.inReplyToStatus,
              c =
                null == o ||
                null === (a = o.previewData.sendData[0]) ||
                void 0 === a ||
                null === (i = a.quotedStatus) ||
                void 0 === i
                  ? void 0
                  : i.id_str,
              p = null == o ? void 0 : o.previewData.tweetType,
              m = null !== (r = null == o ? void 0 : o.undoDurationSecs) && void 0 !== r ? r : l.a
            return {
              timeToSend: u,
              inReplyToStatusId: null == d ? void 0 : d.id_str,
              undoPeriod: m,
              communityIdValue: s,
              quotedStatusId: c,
              tweetType: p,
            }
          })
          .propsFromActions(function () {
            return { undoTweet: l.i, sendNow: l.h }
          })
          .withAnalytics({ page: 'undo_tweet_details', section: 'timeline' }),
        c = n('3XMw'),
        p = n.n(c)
      var m = n('zCf4'),
        w = n('MWbm'),
        f = n('t62R'),
        y = n('aRdY'),
        v = n('/yvb'),
        b = n('rHpw'),
        S = p.a.bc2ceaf2,
        T = p.a.gf5e9ea6,
        g = p.a.j4c40da3,
        h = p.a.b23688c7,
        I = function (e) {
          var t = Object(m.f)(),
            n = e.analytics,
            a = e.communityIdValue,
            r = e.inReplyToStatusId,
            u = e.previewTweetId,
            s = e.quotedStatusId,
            l = e.sendNow,
            d = e.timeToSend,
            c = e.tweetType,
            p = e.undoPeriod,
            b = e.undoTweet,
            I = o.a.useState(),
            _ = i()(I, 2),
            W = _[0],
            x = _[1],
            C = o.a.useState(!1),
            D = i()(C, 2),
            R = D[0],
            j = D[1],
            k = o.a.useState(1e3 * parseInt(p, 10)),
            L = i()(k, 1)[0],
            F = o.a.useState(parseInt(d, 10) - L),
            P = (function (e, t) {
              var n = o.a.useState(0),
                a = i()(n, 2),
                r = a[0],
                u = a[1],
                s = o.a.useRef()
              return (
                o.a.useEffect(
                  function () {
                    return (
                      (s.current = window.requestAnimationFrame(function n() {
                        var a = Math.min(1, (Date.now() - t) / e)
                        a < 1 && (u(a), (s.current = window.requestAnimationFrame(n)))
                      })),
                      function () {
                        window.cancelAnimationFrame(s.current)
                      }
                    )
                  },
                  [t, e],
                ),
                r
              )
            })(L, i()(F, 1)[0])
          if (P >= 1) return null
          return 'number' != typeof d
            ? null
            : o.a.createElement(
                w.a,
                {
                  onLayout: function (e) {
                    var t, n
                    x(
                      (null == e ||
                      null === (t = e.nativeEvent) ||
                      void 0 === t ||
                      null === (n = t.layout) ||
                      void 0 === n
                        ? void 0
                        : n.width) || 0,
                    )
                  },
                  style: E.root,
                },
                o.a.createElement(
                  w.a,
                  { style: E.timer },
                  o.a.createElement(
                    w.a,
                    { style: E.timerWrapper },
                    o.a.createElement(y.a, { accessibilityLabel: h, count: P, maxCount: 1 }),
                  ),
                  !W || W < 470 ? null : o.a.createElement(f.b, { style: E.sendingLabel, weight: 'bold' }, S),
                ),
                o.a.createElement(
                  w.a,
                  { style: E.buttonWrapper },
                  o.a.createElement(
                    v.a,
                    {
                      disabled: R,
                      onClick: function () {
                        l(u),
                          j(!0),
                          n.scribe({
                            element: 'send_now',
                            action: 'send_now',
                            data: { subscription_details: { draft_id: u, undo_period: p, tweet_type: c } },
                          })
                      },
                      size: 'xSmall',
                      style: { marginRight: 4 },
                      type: 'brandText',
                    },
                    g,
                  ),
                  o.a.createElement(
                    v.a,
                    {
                      onClick: function () {
                        n.scribe({
                          element: 'undo_tweet',
                          action: 'undo',
                          data: { subscription_details: { draft_id: u, undo_period: p, tweet_type: c } },
                        }),
                          b(u),
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
                    T,
                  ),
                ),
              )
        },
        E = b.a.create(function (e) {
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
        _ = d(I)
      t.default = _
    },
  },
])
//# sourceMappingURL=WIPED
