;(window.webpackJsonp = window.webpackJsonp || []).push([
  [361],
  {
    '0rTF': function (e, t, n) {
      'use strict'
      n.r(t)
      var r = n('yiKp'),
        o = n.n(r),
        i = n('ezF+'),
        a = n('VPAj'),
        c = n('caTy'),
        s = n('zh9S'),
        d = n('gdQ4'),
        u = n('G6rE'),
        l = i.g({
          component: d.a,
          bindActions: Object(a.a)({ scribe: s.c }),
          selectData: function (e) {
            e.entry, e.module
            return {
              loggedInUser: function (e) {
                return u.e.selectLoggedInUser(e)
              },
            }
          },
          createProps: function (e) {
            var t = e.data.loggedInUser,
              n = void 0 === t ? {} : t,
              r = e.entry,
              i = e.actions.scribe,
              a = e.scribeNamespace,
              s = Object(c.a)(r.content.url.url)
            return {
              avatarUrl: n.profile_image_url_https,
              onClick: function () {
                return i(o()(o()({}, a), {}, { element: 'add_to_thread', action: 'click' }))
              },
              onImpression: function () {
                return i(o()(o()({}, a), {}, { element: 'add_to_thread', action: 'impression' }))
              },
              to: s
                ? o()(o()({}, s), {}, { state: o()(o()({}, s.state || {}), {}, { isSelfThreadReply: !0 }) })
                : void 0,
              userName: n.screen_name,
              withButton: !0,
              withConversationLine: r.withConversationLine,
            }
          },
          shouldDisplayBorder: Object(a.a)(!1),
          divider: { top: !1, bottom: !0 },
        })
      t.default = l
    },
  },
])
//# sourceMappingURL=WIPED
