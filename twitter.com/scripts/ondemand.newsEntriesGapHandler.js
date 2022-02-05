;(window.webpackJsonp = window.webpackJsonp || []).push([
  [343],
  {
    '5bSN': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return f
      })
      n('hBvt')
      var r = n('ERkP'),
        c = n.n(r),
        a = n('3XMw'),
        i = n.n(a),
        o = n('MWbm'),
        s = n('htQn'),
        l = n('Qwev'),
        p = n('h0NW'),
        u = n('t62R'),
        d = n('rHpw'),
        b = i.a.ee8c6c61,
        m = i.a.i8005e73
      function f(e) {
        var t = e.children,
          n = void 0 === t ? b : t,
          r = e.isLoading,
          a = e.link,
          i = e.onClick,
          d = e.isTransparentCursor
        return c.a.createElement(
          s.a,
          { link: a, onClick: i, style: y.root },
          c.a.createElement(
            o.a,
            { style: y.inner },
            r
              ? c.a.createElement(l.a, { accessibilityLabel: m })
              : d
              ? c.a.createElement(
                  c.a.Fragment,
                  null,
                  c.a.createElement(p.a, {
                    containerStyle: y.cursor,
                    items: [
                      {
                        description: 'These may include replies that are potentially spammy, harmful, or offensive.',
                        label: 'Other replies',
                      },
                    ],
                  }),
                  c.a.createElement(u.b, { children: 'View Replies', color: 'link', style: y.link }),
                )
              : c.a.createElement(u.b, { align: 'center', children: n, color: 'link' }),
          ),
        )
      }
      var y = d.a.create(function (e) {
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
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        c = n.n(r),
        a = n('ezF+'),
        i = n('VPAj'),
        o = n('3XMw'),
        s = n.n(o),
        l = n('97Jx'),
        p = n.n(l),
        u = n('m3Bd'),
        d = n.n(u),
        b = n('ERkP'),
        m = n.n(b),
        f = n('SrtL'),
        y = n('5bSN')
      var v = n('855f'),
        h = n('zh9S')
      function w(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function g(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? w(Object(n), !0).forEach(function (t) {
                c()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : w(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var O = 'new_tweets_bar',
        j = { component: O },
        k = s.a.d6917e0c,
        E = a.g({
          divider: { top: !0, bottom: !0 },
          component: function (e) {
            var t = e.children,
              n = e.count,
              r = d()(e, ['children', 'count'])
            return m.a.createElement(
              m.a.Fragment,
              null,
              m.a.createElement(f.a.Configure, { timelineNewCount: n }),
              m.a.createElement(y.a, p()({}, r, { children: t })),
            )
          },
          bindActions: function (e) {
            return { applyInstructions: e.module.applyNewTweetsBarInstructions, scribeAction: h.c }
          },
          createProps: function (e) {
            var t = e.actions,
              n = t.applyInstructions,
              r = t.scribeAction,
              c = e.entry,
              a = e.scribeNamespace,
              i = c.content.count
            return {
              children: k({ count: v.a.getFormattedCount(i) }),
              count: i,
              onClick: function () {
                r(g(g({}, a), {}, { action: 'click' }), { event_value: i }), n()
              },
            }
          },
          isFocusable: Object(i.a)(!0),
          defaultScribeNamespace: j,
          onImpression: function (e) {
            var t = e.actions.scribeAction,
              n = e.entry,
              r = (e.scribeData, e.scribeNamespace),
              c = n.content.count
            t(g(g({}, r), {}, { action: 'impression' }), { event_value: c })
          },
          shouldDisplayBorder: function (e) {
            return !0
          },
          getBehavioralEventContextOverride: function () {
            return { viewType: O }
          },
        })
      t.default = E
    },
  },
])
//# sourceMappingURL=WIPED
