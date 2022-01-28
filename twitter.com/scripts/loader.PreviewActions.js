;(window.webpackJsonp = window.webpackJsonp || []).push([
  [175],
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
          c = Object(r.a)(u, a),
          d = i.a.createElement(o.a, {
            accessibilityLabel: t,
            color: 'primary',
            progress: c,
            size: 20,
            strokeWidth: 'thick',
            style: l.progressCircle,
          })
        return i.a.createElement(s.a, { style: l.root }, d)
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
        c = Object(s.a)()
          .propsFromState(function () {
            return { previewTweet: l.d, undoTweetSettings: u.p }
          })
          .adjustStateProps(function (e) {
            var t,
              n,
              a = e.previewTweet,
              i = e.undoTweetSettings,
              r = null == a ? void 0 : a.timeToSend,
              o = null == a || null === (t = a.previewData) || void 0 === t ? void 0 : t.communityIdValue,
              u = null == a || null === (n = a.previewData) || void 0 === n ? void 0 : n.inReplyToStatus,
              s = i.durationSecs || l.a
            return {
              timeToSend: r,
              inReplyToStatusId: null == u ? void 0 : u.id_str,
              undoPeriod: s,
              communityIdValue: o,
            }
          })
          .propsFromActions(function () {
            return { undoTweet: l.h, sendNow: l.g }
          })
          .withAnalytics({ page: 'undo_tweet_details', section: 'timeline' }),
        d = n('3XMw'),
        p = n.n(d)
      var m = n('Ty5D'),
        w = n('MWbm'),
        f = n('t62R'),
        y = n('aRdY'),
        b = n('/yvb'),
        v = n('rHpw'),
        g = p.a.bc2ceaf2,
        h = p.a.gf5e9ea6,
        T = p.a.j4c40da3,
        S = p.a.b23688c7,
        E = function (e) {
          var t = Object(m.g)(),
            n = e.analytics,
            a = e.communityIdValue,
            r = e.inReplyToStatusId,
            u = e.previewTweetId,
            s = e.sendNow,
            l = e.timeToSend,
            c = e.undoPeriod,
            d = e.undoTweet,
            p = o.a.useState(0),
            v = i()(p, 2),
            E = v[0],
            x = v[1],
            _ = o.a.useState(),
            C = i()(_, 2),
            I = C[0],
            R = C[1],
            D = o.a.useState(!1),
            j = i()(D, 2),
            k = j[0],
            F = j[1]
          o.a.useEffect(
            function () {
              'number' == typeof l && x(Math.round(l - Date.now()))
            },
            [l],
          )
          var L = (function (e) {
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
          })(E)
          if (E <= 0 || !E) return null
          return 'number' != typeof l
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
                  style: W.root,
                },
                o.a.createElement(
                  w.a,
                  { style: W.timer },
                  o.a.createElement(
                    w.a,
                    { style: W.timerWrapper },
                    o.a.createElement(y.a, { accessibilityLabel: S, count: L, maxCount: 1 }),
                  ),
                  !I || I < 470 ? null : o.a.createElement(f.b, { style: W.sendingLabel, weight: 'bold' }, g),
                ),
                o.a.createElement(
                  w.a,
                  { style: W.buttonWrapper },
                  o.a.createElement(
                    b.a,
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
                    T,
                  ),
                  o.a.createElement(
                    b.a,
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
                            state: { previewTweetId: u, inReplyToStatusId: r, selectedCommunityId: a },
                          })
                      },
                      size: 'xSmall',
                      type: 'brandFilled',
                    },
                    h,
                  ),
                ),
              )
        },
        W = v.a.create(function (e) {
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
        x = c(E)
      t.default = x
    },
  },
])
//# sourceMappingURL=WIPED
