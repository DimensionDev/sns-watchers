;(window.webpackJsonp = window.webpackJsonp || []).push([
  [353],
  {
    '5bSN': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return f
      })
      n('hBvt')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('3XMw'),
        c = n.n(i),
        o = n('MWbm'),
        s = n('htQn'),
        l = n('Qwev'),
        p = n('h0NW'),
        u = n('t62R'),
        d = n('rHpw'),
        m = c.a.ee8c6c61,
        b = c.a.i8005e73
      function f(e) {
        var t = e.children,
          n = void 0 === t ? m : t,
          a = e.isLoading,
          i = e.link,
          c = e.onClick,
          d = e.isTransparentCursor
        return r.a.createElement(
          s.a,
          { link: i, onClick: c, style: v.root },
          r.a.createElement(
            o.a,
            { style: v.inner },
            a
              ? r.a.createElement(l.a, { accessibilityLabel: b })
              : d
              ? r.a.createElement(
                  r.a.Fragment,
                  null,
                  r.a.createElement(p.a, {
                    containerStyle: v.cursor,
                    items: [
                      {
                        description: 'These may include replies that are potentially spammy, harmful, or offensive.',
                        label: 'Other replies',
                      },
                    ],
                  }),
                  r.a.createElement(u.b, { children: 'View Replies', color: 'link', style: v.link }),
                )
              : r.a.createElement(u.b, { align: 'center', children: n, color: 'link' }),
          ),
        )
      }
      var v = d.a.create(function (e) {
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
        c = n('ERkP'),
        o = n.n(c),
        s = n('rxPX'),
        l = { component: i },
        p = Object(s.a)()
          .propsFromActions(function (e) {
            return { applyInstructions: e.module.applyNewTweetsBarInstructions }
          })
          .withAnalytics(l),
        u = n('SrtL'),
        d = n('3XMw'),
        m = n.n(d),
        b = n('855f'),
        f = n('5bSN'),
        v = n('FGLp'),
        w = m.a.d6917e0c
      function h(e) {
        var t = e.analytics,
          n = e.applyInstructions,
          a = e.entry.content.count
        Object(v.a)(function () {
          t.scribe({ action: 'impression', data: { event_value: a } })
        })
        var r = o.a.useCallback(
            function () {
              t.scribe({ action: 'click', data: { event_value: a } }), n()
            },
            [t, n, a],
          ),
          i = o.a.useMemo(
            function () {
              return w({ count: b.a.getFormattedCount(a) })
            },
            [a],
          )
        return o.a.createElement(
          o.a.Fragment,
          null,
          o.a.createElement(u.a.Configure, { timelineNewCount: a }),
          o.a.createElement(f.a, { children: i, onClick: r }),
        )
      }
      var y = p(o.a.memo(h)),
        k = a
          .b({
            component: y,
            divider: { top: !0, bottom: !0 },
            isFocusable: Object(r.a)(!0),
            shouldDisplayBorder: Object(r.a)(!0),
            getBehavioralEventContextOverride: function () {
              return { viewType: i }
            },
          })
          .getHandler()
      t.default = k
    },
  },
])
//# sourceMappingURL=WIPED
