;(window.webpackJsonp = window.webpackJsonp || []).push([
  [205],
  {
    QvpQ: function (t, e, n) {
      'use strict'
      n.r(e)
      var o = n('ezF+'),
        a = (n('ERkP'), n('wChl')),
        c = n('VPAj'),
        i = n('Rp9C'),
        r = o.g({
          component: a.a,
          createProps: function (t) {
            var e = t.entry,
              n = (e.content.socialContext || {}).generalContext,
              o = void 0 === n ? void 0 : n
            return { id: e.content.articleId, socialContext: o, withInternalLink: !0 }
          },
          shouldDisplayBorder: Object(c.a)(!0),
          isFocusable: Object(c.a)(!0),
          getScribeDataItem: function (t) {
            return (function (t) {
              var e = t.content.articleId
              return i.a.getArticleItem(e, t.itemMetadata.clientEventInfo)
            })(t)
          },
        })
      e.default = r
    },
  },
])
//# sourceMappingURL=WIPED
