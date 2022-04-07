;(window.webpackJsonp = window.webpackJsonp || []).push([
  [242],
  {
    WunU: function (e, n, t) {
      'use strict'
      t.r(n)
      t('hBpG'), t('7x/C')
      var o = t('ezF+'),
        r = t('ERkP'),
        a = t.n(r),
        i = (t('lTEL'), t('JtPf'), t('87if'), t('kYxP'), t('zb92')),
        c = t('RuTB'),
        s = t('rHpw').a.create(function (e) {
          return { root: { minHeight: 200 } }
        }),
        d = function (e) {
          var n = e.hasError,
            t = e.onRetry
          return a.a.createElement(c.a, { hasError: n, onRetry: t, style: s.root })
        },
        u = Object(i.a)({
          loader: function () {
            return t.e(174).then(t.bind(null, '6l+S'))
          },
          renderPlaceholder: function (e, n) {
            return a.a.createElement(d, { hasError: e, onRetry: n })
          },
        }),
        l = t('fs1G'),
        f = o.g({
          component: u,
          createProps: function (e) {
            var n,
              t,
              o,
              r = e.entry,
              a = e.feedbackItems,
              i = e.module,
              c = (e.scribeData, e.scribeNamespace, r.content),
              s = c.dismissedEntry,
              d = c.feedbackKeys,
              u = r.conversationPosition,
              l = r.conversationTreeMetadata,
              f =
                d[0] &&
                a.find(function (e) {
                  return e.feedbackKey === d[0]
                })
            return (
              f && f.onUndo && (o = f.onUndo),
              {
                conversationPosition: u,
                conversationTreeMetadata: l,
                behavioralEventContext: {
                  token:
                    null === (n = r.content.dismissedEntry.itemMetadata) ||
                    void 0 === n ||
                    null === (t = n.clientEventInfo) ||
                    void 0 === t
                      ? void 0
                      : t.entityToken,
                },
                entry: s,
                feedbackKeys: d,
                onUndoRichAction: o,
                module: i,
              }
            )
          },
          feedbackEntrySelector: function (e) {
            return e.content.dismissedEntry
          },
          shouldDisplayBorder: function (e) {
            var n = e.conversationPosition
            return !n || !!n.isEnd
          },
          getBehavioralEventContextOverride: l.a,
        })
      n.default = f
    },
  },
])
//# sourceMappingURL=WIPED
