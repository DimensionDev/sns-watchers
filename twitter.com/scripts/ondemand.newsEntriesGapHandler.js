;(window.webpackJsonp = window.webpackJsonp || []).push([
  [351],
  {
    '5bSN': function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return b
      })
      t('hBvt')
      var a = t('ERkP'),
        r = t.n(a),
        c = t('3XMw'),
        i = t.n(c),
        o = t('MWbm'),
        s = t('htQn'),
        l = t('Qwev'),
        u = t('h0NW'),
        p = t('t62R'),
        d = t('rHpw'),
        m = i.a.ee8c6c61,
        f = i.a.i8005e73
      function b(e) {
        var n = e.children,
          t = void 0 === n ? m : n,
          a = e.isLoading,
          c = e.link,
          i = e.onClick,
          d = e.isTransparentCursor
        return r.a.createElement(
          s.a,
          { link: c, onClick: i, style: v.root },
          r.a.createElement(
            o.a,
            { style: v.inner },
            a
              ? r.a.createElement(l.a, { accessibilityLabel: f })
              : d
              ? r.a.createElement(
                  r.a.Fragment,
                  null,
                  r.a.createElement(u.a, {
                    containerStyle: v.cursor,
                    items: [
                      {
                        description: 'These may include replies that are potentially spammy, harmful, or offensive.',
                        label: 'Other replies',
                      },
                    ],
                  }),
                  r.a.createElement(p.b, { children: 'View Replies', color: 'link', style: v.link }),
                )
              : r.a.createElement(p.b, { align: 'center', children: t, color: 'link' }),
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
    jv0Q: function (e, n, t) {
      'use strict'
      t.r(n)
      var a = t('yiKp'),
        r = t.n(a),
        c = t('ezF+'),
        i = t('VPAj'),
        o = t('3XMw'),
        s = t.n(o),
        l = t('97Jx'),
        u = t.n(l),
        p = t('m3Bd'),
        d = t.n(p),
        m = t('ERkP'),
        f = t.n(m),
        b = t('SrtL'),
        v = t('5bSN'),
        h = ['children', 'count']
      var w = t('855f'),
        y = t('zh9S'),
        k = 'new_tweets_bar',
        g = { component: k },
        E = s.a.d6917e0c,
        C = c.g({
          divider: { top: !0, bottom: !0 },
          component: function (e) {
            var n = e.children,
              t = e.count,
              a = d()(e, h)
            return f.a.createElement(
              f.a.Fragment,
              null,
              f.a.createElement(b.a.Configure, { timelineNewCount: t }),
              f.a.createElement(v.a, u()({}, a, { children: n })),
            )
          },
          bindActions: function (e) {
            return { applyInstructions: e.module.applyNewTweetsBarInstructions, scribeAction: y.c }
          },
          createProps: function (e) {
            var n = e.actions,
              t = n.applyInstructions,
              a = n.scribeAction,
              c = e.entry,
              i = e.scribeNamespace,
              o = c.content.count
            return {
              children: E({ count: w.a.getFormattedCount(o) }),
              count: o,
              onClick: function () {
                a(r()(r()({}, i), {}, { action: 'click' }), { event_value: o }), t()
              },
            }
          },
          isFocusable: Object(i.a)(!0),
          defaultScribeNamespace: g,
          onImpression: function (e) {
            var n = e.actions.scribeAction,
              t = e.entry,
              a = (e.scribeData, e.scribeNamespace),
              c = t.content.count
            n(r()(r()({}, a), {}, { action: 'impression' }), { event_value: c })
          },
          shouldDisplayBorder: function (e) {
            return !0
          },
          getBehavioralEventContextOverride: function () {
            return { viewType: k }
          },
        })
      n.default = C
    },
  },
])
//# sourceMappingURL=WIPED
