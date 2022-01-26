;(window.webpackJsonp = window.webpackJsonp || []).push([
  [173],
  {
    WOwf: function (e, t, n) {
      'use strict'
      function i(e, t) {
        return Math.min(1, 1 - e / t)
      }
      n.d(t, 'a', function () {
        return i
      })
    },
    aRdY: function (e, t, n) {
      'use strict'
      var i = n('ERkP'),
        r = n('WOwf'),
        a = n('k6Ei'),
        o = n('rHpw'),
        u = n('MWbm'),
        s = o.a.create(function (e) {
          e.colors
          return {
            root: { alignItems: 'flex-start', minHeight: 30, minWidth: 30, justifyContent: 'center', margin: 'auto' },
            progressCircle: { transitionDuration: '0.2s', transitionProperty: 'opacity' },
          }
        })
      t.a = function (e) {
        var t = e.accessibilityLabel,
          n = e.count,
          o = e.maxCount,
          l = o - n,
          c = Object(r.a)(l, o),
          d = i.createElement(a.a, {
            accessibilityLabel: t,
            color: 'primary',
            progress: c,
            size: 20,
            strokeWidth: 'thick',
            style: s.progressCircle,
          })
        return i.createElement(u.a, { style: s.root }, d)
      }
    },
    mL9d: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'PreviewActions', function () {
          return S
        })
      var i = n('ddV6'),
        r = n.n(i),
        a = (n('uFXj'), n('ERkP')),
        o = n('qlwE'),
        u = n('rxPX'),
        s = n('5oBF'),
        l = Object(u.a)()
          .propsFromState(function () {
            return { previewTweet: s.d, undoTweetSettings: o.p }
          })
          .adjustStateProps(function (e) {
            var t,
              n,
              i = e.previewTweet,
              r = e.undoTweetSettings,
              a = null == i ? void 0 : i.timeToSend,
              o = null == i || null === (t = i.previewData) || void 0 === t ? void 0 : t.communityIdValue,
              u = null == i || null === (n = i.previewData) || void 0 === n ? void 0 : n.inReplyToStatus,
              l = r.durationSecs || s.a
            return {
              timeToSend: a,
              inReplyToStatusId: null == u ? void 0 : u.id_str,
              undoPeriod: l,
              communityIdValue: o,
            }
          })
          .propsFromActions(function () {
            return { undoTweet: s.h, sendNow: s.g }
          })
          .withAnalytics({ page: 'undo_tweet_details', section: 'timeline' }),
        c = n('3XMw'),
        d = n.n(c)
      var p = n('Ty5D'),
        m = n('MWbm'),
        w = n('t62R'),
        f = n('aRdY'),
        y = n('/yvb'),
        b = n('rHpw'),
        v = d.a.bc2ceaf2,
        g = d.a.gf5e9ea6,
        h = d.a.j4c40da3,
        T = d.a.b23688c7,
        S = function (e) {
          var t = Object(p.g)(),
            n = e.analytics,
            i = e.communityIdValue,
            o = e.inReplyToStatusId,
            u = e.previewTweetId,
            s = e.sendNow,
            l = e.timeToSend,
            c = e.undoPeriod,
            d = e.undoTweet,
            b = a.useState(0),
            S = r()(b, 2),
            W = S[0],
            x = S[1],
            _ = a.useState(),
            C = r()(_, 2),
            I = C[0],
            R = C[1],
            D = a.useState(!1),
            j = r()(D, 2),
            k = j[0],
            F = j[1]
          a.useEffect(
            function () {
              'number' == typeof l && x(Math.round(l - Date.now()))
            },
            [l],
          )
          var L = (function (e) {
            var t = a.useState(0),
              n = r()(t, 2),
              i = n[0],
              o = n[1],
              u = a.useRef()
            return (
              a.useEffect(
                function () {
                  var t = Date.now()
                  return (
                    (u.current = window.requestAnimationFrame(function n() {
                      var i = Math.min(1, (Date.now() - t) / e)
                      i < 1 && (o(i), (u.current = window.requestAnimationFrame(n)))
                    })),
                    function () {
                      window.cancelAnimationFrame(u.current)
                    }
                  )
                },
                [e],
              ),
              i
            )
          })(W)
          if (W <= 0 || !W) return null
          return 'number' != typeof l
            ? null
            : a.createElement(
                m.a,
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
                  style: E.root,
                },
                a.createElement(
                  m.a,
                  { style: E.timer },
                  a.createElement(
                    m.a,
                    { style: E.timerWrapper },
                    a.createElement(f.a, { accessibilityLabel: T, count: L, maxCount: 1 }),
                  ),
                  !I || I < 470 ? null : a.createElement(w.b, { style: E.sendingLabel, weight: 'bold' }, v),
                ),
                a.createElement(
                  m.a,
                  { style: E.buttonWrapper },
                  a.createElement(
                    y.a,
                    {
                      disabled: k,
                      onClick: function () {
                        s(u),
                          F(!0),
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
                  a.createElement(
                    y.a,
                    {
                      onClick: function () {
                        n.scribe({
                          element: 'undo_tweet',
                          action: 'undo',
                          data: { subscription_details: { draft_id: u, undo_period: c } },
                        }),
                          d(u),
                          t.push({
                            pathname: '/compose/tweet',
                            state: { previewTweetId: u, inReplyToStatusId: o, selectedCommunityId: i },
                          })
                      },
                      size: 'xSmall',
                      type: 'brandFilled',
                    },
                    g,
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
        W = l(S)
      t.default = W
    },
  },
])
//# sourceMappingURL=WIPED
