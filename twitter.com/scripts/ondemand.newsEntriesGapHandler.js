;(window.webpackJsonp = window.webpackJsonp || []).push([
  [336],
  {
    '5bSN': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return m
      })
      n('hBvt')
      var r = n('ERkP'),
        c = n('3XMw'),
        i = n.n(c),
        o = n('MWbm'),
        a = n('htQn'),
        s = n('Qwev'),
        l = n('h0NW'),
        p = n('t62R'),
        u = n('rHpw'),
        d = i.a.ee8c6c61,
        b = i.a.i8005e73
      function m(e) {
        var t = e.children,
          n = void 0 === t ? d : t,
          c = e.isLoading,
          i = e.link,
          u = e.onClick,
          m = e.isTransparentCursor
        return r.createElement(
          a.a,
          { link: i, onClick: u, style: f.root },
          r.createElement(
            o.a,
            { style: f.inner },
            c
              ? r.createElement(s.a, { accessibilityLabel: b })
              : m
              ? r.createElement(
                  r.Fragment,
                  null,
                  r.createElement(l.a, {
                    containerStyle: f.cursor,
                    items: [
                      {
                        description: 'These may include replies that are potentially spammy, harmful, or offensive.',
                        label: 'Other replies',
                      },
                    ],
                  }),
                  r.createElement(p.b, { children: 'View Replies', color: 'link', style: f.link }),
                )
              : r.createElement(p.b, { align: 'center', children: n, color: 'link' }),
          ),
        )
      }
      var f = u.a.create(function (e) {
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
        i = n('ezF+'),
        o = n('VPAj'),
        a = n('3XMw'),
        s = n.n(a),
        l = n('97Jx'),
        p = n.n(l),
        u = n('m3Bd'),
        d = n.n(u),
        b = n('ERkP'),
        m = n('SrtL'),
        f = n('5bSN')
      var y = n('855f'),
        v = n('zh9S')
      function h(e, t) {
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
      function w(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? h(Object(n), !0).forEach(function (t) {
                c()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : h(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var g = 'new_tweets_bar',
        O = { component: g },
        j = s.a.d6917e0c,
        k = i.g({
          divider: { top: !0, bottom: !0 },
          component: function (e) {
            var t = e.children,
              n = e.count,
              r = d()(e, ['children', 'count'])
            return b.createElement(
              b.Fragment,
              null,
              b.createElement(m.a.Configure, { timelineNewCount: n }),
              b.createElement(f.a, p()({}, r, { children: t })),
            )
          },
          bindActions: function (e) {
            return { applyInstructions: e.module.applyNewTweetsBarInstructions, scribeAction: v.c }
          },
          createProps: function (e) {
            var t = e.actions,
              n = t.applyInstructions,
              r = t.scribeAction,
              c = e.entry,
              i = e.scribeNamespace,
              o = c.content.count
            return {
              children: j({ count: y.a.getFormattedCount(o) }),
              count: o,
              onClick: function () {
                r(w(w({}, i), {}, { action: 'click' }), { event_value: o }), n()
              },
            }
          },
          isFocusable: Object(o.a)(!0),
          defaultScribeNamespace: O,
          onImpression: function (e) {
            var t = e.actions.scribeAction,
              n = e.entry,
              r = (e.scribeData, e.scribeNamespace),
              c = n.content.count
            t(w(w({}, r), {}, { action: 'impression' }), { event_value: c })
          },
          shouldDisplayBorder: function (e) {
            return !0
          },
          getBehavioralEventContextOverride: function () {
            return { viewType: g }
          },
        })
      t.default = k
    },
  },
])
//# sourceMappingURL=WIPED
