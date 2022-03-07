;(window.webpackJsonp = window.webpackJsonp || []).push([
  [250],
  {
    U0EQ: function (e, n, a) {
      'use strict'
      a.r(n)
      a('1t7P'), a('jQ/y'), a('ho0z')
      var t = a('ezF+'),
        r = a('ERkP'),
        c = a.n(r),
        o = a('3XMw'),
        s = a.n(o),
        i = a('MWbm'),
        p = a('t62R'),
        l = a('rHpw'),
        u = s.a.jb0429b1,
        d = l.a.create(function (e) {
          return {
            header: {
              paddingTop: e.spaces.space12,
              paddingHorizontal: e.spaces.space12,
              paddingBottom: e.spaces.space20,
            },
            description: { marginTop: e.spaces.space12 },
          }
        }),
        m = function (e) {
          var n = e.collectionName,
            a = e.description,
            t = e.userLabel
          return c.a.createElement(
            i.a,
            { style: d.header },
            c.a.createElement(p.b, { accessibilityRole: 'heading', size: 'title4' }, n),
            t && c.a.createElement(p.b, { color: 'gray700' }, u({ name: t.name, screenName: t.screenName })),
            a ? c.a.createElement(p.b, { style: d.description }, a) : null,
          )
        },
        b = a('G6rE'),
        h = t.g({
          component: m,
          selectData: function (e) {
            var n = e.entry
            return {
              author: function (e) {
                return b.e.select(e, n.content.authorId)
              },
            }
          },
          createProps: function (e) {
            var n = e.data.author,
              a = e.entry.content,
              t = a.description
            return {
              collectionName: a.name,
              description: t,
              userLabel: n && { name: n.name, screenName: n.screen_name },
            }
          },
        })
      n.default = h
    },
  },
])
//# sourceMappingURL=WIPED
