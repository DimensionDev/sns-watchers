;(window.webpackJsonp = window.webpackJsonp || []).push([
  [338],
  {
    '0rTF': function (e, t, r) {
      'use strict'
      r.r(t)
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        o = r.n(n),
        c = r('ezF+'),
        i = r('VPAj'),
        a = r('caTy'),
        s = r('zh9S'),
        u = r('gdQ4'),
        p = r('G6rE')
      function l(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(r), !0).forEach(function (t) {
                o()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : l(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var b = c.g({
        component: u.a,
        bindActions: Object(i.a)({ scribe: s.c }),
        selectData: function (e) {
          e.entry, e.module
          return {
            loggedInUser: function (e) {
              return p.e.selectLoggedInUser(e)
            },
          }
        },
        createProps: function (e) {
          var t = e.data.loggedInUser,
            r = void 0 === t ? {} : t,
            n = e.entry,
            o = e.actions.scribe,
            c = e.scribeNamespace,
            i = Object(a.a)(n.content.url.url)
          return {
            avatarUrl: r.profile_image_url_https,
            onClick: function () {
              return o(d(d({}, c), {}, { element: 'add_to_thread', action: 'click' }))
            },
            onImpression: function () {
              return o(d(d({}, c), {}, { element: 'add_to_thread', action: 'impression' }))
            },
            to: i ? d(d({}, i), {}, { state: d(d({}, i.state || {}), {}, { isSelfThreadReply: !0 }) }) : void 0,
            userName: r.screen_name,
            withButton: !0,
            withConversationLine: n.withConversationLine,
          }
        },
        shouldDisplayBorder: Object(i.a)(!1),
        divider: { top: !1, bottom: !0 },
      })
      t.default = b
    },
  },
])
//# sourceMappingURL=WIPED
