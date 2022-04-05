;(window.webpackJsonp = window.webpackJsonp || []).push([
  [199],
  {
    V5fj: function (e, n, t) {
      'use strict'
      t.r(n)
      var m = t('ezF+'),
        r = t('ERkP'),
        o = t.n(r),
        a = (t('ho0z'), t('j57/')),
        c = t('eSoz'),
        u = t('rxPX'),
        i = function (e, n) {
          var t = n.communityId
          return t ? c.c.select(e, t) : void 0
        },
        d = function (e) {
          var n = e.community,
            t = e.communityId
          if (n) {
            var m = n.media,
              r = n.member_count,
              c = n.membersFacepileUrls,
              u = n.name
            return o.a.createElement(a.a, { communityId: t, media: m, memberCount: r, membersFacepile: c, name: u })
          }
          return null
        },
        s = Object(u.a)().propsFromState(function () {
          return { community: i }
        })(o.a.memo(d)),
        l = function (e) {
          var n = e.entry.content.id
          return o.a.createElement(s, { communityId: n })
        },
        b = o.a.memo(l),
        p = t('VPAj'),
        f = m.b({ component: b, shouldDisplayBorder: Object(p.a)(!1), isFocusable: Object(p.a)(!0) }).getHandler()
      n.default = f
    },
  },
])
//# sourceMappingURL=WIPED
