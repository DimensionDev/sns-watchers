;(window.webpackJsonp = window.webpackJsonp || []).push([
  [361],
  {
    '1Tet': function (n, e, o) {
      'use strict'
      o.r(e)
      var t = o('ezF+'),
        a = (o('ERkP'), o('3XMw')),
        r = o.n(a),
        c = o('xM7j'),
        i = r.a.e4c6c309
      e.default = t.g({
        component: c.a,
        createProps: function (n) {
          var e = n.entry,
            o = e.content,
            t = e.conversationPosition,
            a = e.conversationTreeMetadata
          return {
            children: (o.tombstoneInfo && o.tombstoneInfo.text) || i,
            conversationPosition: t,
            conversationTreeMetadata: a,
          }
        },
        shouldDisplayBorder: function (n) {
          return !n.conversationTreeMetadata
        },
      })
    },
  },
])
//# sourceMappingURL=WIPED
