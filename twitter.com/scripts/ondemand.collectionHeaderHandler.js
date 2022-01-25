;(window.webpackJsonp = window.webpackJsonp || []).push([
  [235],
  {
    U0EQ: function (e, n, t) {
      'use strict'
      t.r(n)
      t('1t7P'), t('jQ/y'), t('ho0z')
      var a = t('ezF+'),
        r = t('ERkP'),
        c = t('3XMw'),
        o = t.n(c),
        s = t('MWbm'),
        i = t('t62R'),
        p = t('rHpw'),
        l = o.a.jb0429b1,
        u = p.a.create(function (e) {
          return {
            header: {
              paddingTop: e.spaces.space12,
              paddingHorizontal: e.spaces.space12,
              paddingBottom: e.spaces.space20,
            },
            description: { marginTop: e.spaces.space12 },
          }
        }),
        d = function (e) {
          var n = e.collectionName,
            t = e.description,
            a = e.userLabel
          return r.createElement(
            s.a,
            { style: u.header },
            r.createElement(i.b, { accessibilityRole: 'heading', size: 'title4' }, n),
            a && r.createElement(i.b, { color: 'gray700' }, l({ name: a.name, screenName: a.screenName })),
            t ? r.createElement(i.b, { style: u.description }, t) : null,
          )
        },
        m = t('G6rE'),
        b = a.g({
          component: d,
          selectData: function (e) {
            var n = e.entry
            return {
              author: function (e) {
                return m.e.select(e, n.content.authorId)
              },
            }
          },
          createProps: function (e) {
            var n = e.data.author,
              t = e.entry.content,
              a = t.description
            return {
              collectionName: t.name,
              description: a,
              userLabel: n && { name: n.name, screenName: n.screen_name },
            }
          },
        })
      n.default = b
    },
  },
])
//# sourceMappingURL=WIPED
