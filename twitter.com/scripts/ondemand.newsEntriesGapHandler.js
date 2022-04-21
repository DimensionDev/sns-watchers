;(window.webpackJsonp = window.webpackJsonp || []).push([
  [354],
  {
    '5bSN': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return v
      })
      n('hBvt')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('3XMw'),
        c = n.n(i),
        o = n('MWbm'),
        s = n('htQn'),
        l = n('Qwev'),
        u = n('h0NW'),
        p = n('t62R'),
        m = n('rHpw'),
        d = c.a.ee8c6c61,
        f = c.a.i8005e73
      function v(e) {
        var t = e.children,
          n = void 0 === t ? d : t,
          a = e.isLoading,
          i = e.link,
          c = e.onClick,
          m = e.isTransparentCursor
        return r.a.createElement(
          s.a,
          { link: i, onClick: c, style: b.root },
          r.a.createElement(
            o.a,
            { style: b.inner },
            a
              ? r.a.createElement(l.a, { accessibilityLabel: f })
              : m
              ? r.a.createElement(
                  r.a.Fragment,
                  null,
                  r.a.createElement(u.a, {
                    containerStyle: b.cursor,
                    items: [
                      {
                        description: 'These may include replies that are potentially spammy, harmful, or offensive.',
                        label: 'Other replies',
                      },
                    ],
                  }),
                  r.a.createElement(p.b, { children: 'View Replies', color: 'link', style: b.link }),
                )
              : r.a.createElement(p.b, { align: 'center', children: n, color: 'link' }),
          ),
        )
      }
      var b = m.a.create(function (e) {
        return {
          root: { justifyContent: 'center', minHeight: e.spaces.space48, width: '100%' },
          inner: { flexGrow: 1, flexShrink: 1, justifyContent: 'center' },
          cursor: {
            paddingTop: e.spaces.space20,
            paddingBottom: e.spaces.space16,
            paddingHorizontal: e.spaces.space16,
          },
          link: { paddingBottom: e.spaces.space20, paddingHorizontal: e.spaces.space16 },
        }
      })
    },
    jv0Q: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = n('ezF+'),
        r = n('VPAj'),
        i = 'new_tweets_bar',
        c = n('ddV6'),
        o = n.n(c),
        s = n('ERkP'),
        l = n.n(s),
        u = n('rxPX'),
        p = { component: i },
        m = function (e, t) {
          return t.module.selectTopFetchStatus(e)
        },
        d = Object(u.a)()
          .propsFromState(function () {
            return { fetchStatus: m }
          })
          .propsFromActions(function (e) {
            return { applyInstructions: e.module.applyNewTweetsBarInstructions }
          })
          .withAnalytics(p),
        f = n('SrtL'),
        v = n('MDbM'),
        b = n('3XMw'),
        h = n.n(b),
        w = n('855f'),
        y = n('5bSN'),
        k = n('FGLp'),
        g = h.a.d6917e0c
      function E(e) {
        var t = e.analytics,
          n = e.applyInstructions,
          a = e.entry,
          r = e.fetchStatus,
          i = a.content,
          c = i.count,
          s = i.lastRevealedTimestamp,
          u = l.a.useState(!1),
          p = o()(u, 2),
          m = p[0],
          d = p[1],
          b = l.a.useRef(!1)
        Object(k.a)(function () {
          t.scribe({ action: 'impression', data: { event_value: c } })
        })
        var h = l.a.useCallback(
            function () {
              t.scribe({ action: 'click', data: { event_value: c } }), n()
            },
            [t, n, c],
          ),
          E = l.a.useMemo(
            function () {
              return g({ count: w.a.getFormattedCount(c) })
            },
            [c],
          )
        return (
          l.a.useEffect(
            function () {
              var e = null
              return (
                (function t() {
                  var n = Date.now()
                  if (s && n - s < 2e4) {
                    d(!1), (e = setTimeout(t, 2e4 + s - n))
                  } else
                    r !== v.a.LOADING || m || b.current
                      ? (clearTimeout(e), d(!0))
                      : ((e = setTimeout(t, 5e3)), (b.current = !0))
                })(),
                function () {
                  clearTimeout(e)
                }
              )
            },
            [r, s, d, m],
          ),
          m
            ? l.a.createElement(
                l.a.Fragment,
                null,
                l.a.createElement(f.a.Configure, { timelineNewCount: c }),
                l.a.createElement(y.a, { children: E, onClick: h }),
              )
            : null
        )
      }
      var C = d(l.a.memo(E)),
        T = a
          .b({
            component: C,
            divider: { top: !0, bottom: !0 },
            isFocusable: Object(r.a)(!0),
            shouldDisplayBorder: Object(r.a)(!0),
            getBehavioralEventContextOverride: function () {
              return { viewType: i }
            },
          })
          .getHandler()
      t.default = T
    },
  },
])
//# sourceMappingURL=WIPED
