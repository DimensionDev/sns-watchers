;(window.webpackJsonp = window.webpackJsonp || []).push([
  [173],
  {
    WOwf: function (e, t, n) {
      'use strict'
      function r(e, t) {
        return Math.min(1, 1 - e / t)
      }
      n.d(t, 'a', function () {
        return r
      })
    },
    aRdY: function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        i = n('WOwf'),
        a = n('k6Ei'),
        o = n('rHpw'),
        s = n('MWbm'),
        u = o.a.create(function (e) {
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
          c = o - n,
          l = Object(i.a)(c, o),
          d = r.createElement(a.a, {
            accessibilityLabel: t,
            color: 'primary',
            progress: l,
            size: 20,
            strokeWidth: 'thick',
            style: u.progressCircle,
          })
        return r.createElement(s.a, { style: u.root }, d)
      }
    },
    mL9d: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'PreviewActions', function () {
          return S
        })
      var r = n('ddV6'),
        i = n.n(r),
        a = (n('uFXj'), n('ERkP')),
        o = n('qlwE'),
        s = n('rxPX'),
        u = n('5oBF'),
        c = Object(s.a)()
          .propsFromState(function () {
            return { previewTweet: u.d, undoTweetSettings: o.p }
          })
          .adjustStateProps(function (e) {
            var t,
              n = e.previewTweet,
              r = e.undoTweetSettings,
              i = null == n ? void 0 : n.timeToSend,
              a = null == n || null === (t = n.previewData) || void 0 === t ? void 0 : t.inReplyToStatus,
              o = r.durationSecs || u.a
            return { timeToSend: i, inReplyToStatusId: null == a ? void 0 : a.id_str, undoPeriod: o }
          })
          .propsFromActions(function () {
            return { undoTweet: u.h, sendNow: u.g }
          })
          .withAnalytics({ page: 'undo_tweet_details', section: 'timeline' }),
        l = n('3XMw'),
        d = n.n(l)
      var p = n('Ty5D'),
        m = n('MWbm'),
        w = n('t62R'),
        f = n('aRdY'),
        b = n('/yvb'),
        y = n('rHpw'),
        v = d.a.bc2ceaf2,
        g = d.a.gf5e9ea6,
        h = d.a.j4c40da3,
        T = d.a.b23688c7,
        S = function (e) {
          var t = Object(p.g)(),
            n = e.analytics,
            r = e.inReplyToStatusId,
            o = e.previewTweetId,
            s = e.sendNow,
            u = e.timeToSend,
            c = e.undoPeriod,
            l = e.undoTweet,
            d = a.useState(0),
            y = i()(d, 2),
            S = y[0],
            W = y[1],
            x = a.useState(),
            _ = i()(x, 2),
            R = _[0],
            C = _[1],
            j = a.useState(!1),
            k = i()(j, 2),
            D = k[0],
            F = k[1]
          a.useEffect(
            function () {
              'number' == typeof u && W(Math.round(u - Date.now()))
            },
            [u],
          )
          var L = (function (e) {
            var t = a.useState(0),
              n = i()(t, 2),
              r = n[0],
              o = n[1],
              s = a.useRef()
            return (
              a.useEffect(
                function () {
                  var t = Date.now()
                  return (
                    (s.current = window.requestAnimationFrame(function n() {
                      var r = Math.min(1, (Date.now() - t) / e)
                      r < 1 && (o(r), (s.current = window.requestAnimationFrame(n)))
                    })),
                    function () {
                      window.cancelAnimationFrame(s.current)
                    }
                  )
                },
                [e],
              ),
              r
            )
          })(S)
          if (S <= 0 || !S) return null
          return 'number' != typeof u
            ? null
            : a.createElement(
                m.a,
                {
                  onLayout: function (e) {
                    var t, n
                    C(
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
                  !R || R < 470 ? null : a.createElement(w.b, { style: E.sendingLabel, weight: 'bold' }, v),
                ),
                a.createElement(
                  m.a,
                  { style: E.buttonWrapper },
                  a.createElement(
                    b.a,
                    {
                      disabled: D,
                      onClick: function () {
                        s(o),
                          F(!0),
                          n.scribe({
                            element: 'send_now',
                            action: 'send_now',
                            data: { subscription_details: { draft_id: o, undo_period: c } },
                          })
                      },
                      size: 'xSmall',
                      style: { marginRight: 4 },
                      type: 'brandText',
                    },
                    h,
                  ),
                  a.createElement(
                    b.a,
                    {
                      onClick: function () {
                        n.scribe({
                          element: 'undo_tweet',
                          action: 'undo',
                          data: { subscription_details: { draft_id: o, undo_period: c } },
                        }),
                          l(o),
                          t.push({ pathname: '/compose/tweet', state: { previewTweetId: o, inReplyToStatusId: r } })
                      },
                      size: 'xSmall',
                      type: 'brandFilled',
                    },
                    g,
                  ),
                ),
              )
        },
        E = y.a.create(function (e) {
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
        W = c(S)
      t.default = W
    },
  },
])
//# sourceMappingURL=WIPED
