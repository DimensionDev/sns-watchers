;(window.webpackJsonp = window.webpackJsonp || []).push([
  [253],
  {
    U0EQ: function (e, n, t) {
      'use strict'
      t.r(n)
      var a = t('ezF+'),
        r = (t('1t7P'), t('jQ/y'), t('ho0z'), t('ERkP')),
        c = t.n(r),
        o = t('G6rE'),
        s = t('rxPX'),
        i = Object(s.a)().propsFromState(function () {
          return {
            author: function (e, n) {
              var t = n.entry
              return o.e.select(e, t.content.authorId)
            },
          }
        }),
        p = t('3XMw'),
        u = t.n(p),
        d = t('MWbm'),
        m = t('t62R'),
        l = t('rHpw'),
        b = u.a.jb0429b1,
        h = function (e) {
          var n = e.author,
            t = e.entry.content,
            a = t.description,
            r = t.name,
            o = c.a.useMemo(
              function () {
                return n && c.a.createElement(m.b, { color: 'gray700' }, b({ name: n.name, screenName: n.screen_name }))
              },
              [n],
            )
          return c.a.createElement(
            d.a,
            { style: w.header },
            c.a.createElement(m.b, { accessibilityRole: 'heading', size: 'title4' }, r),
            o,
            a ? c.a.createElement(m.b, { style: w.description }, a) : null,
          )
        },
        w = l.a.create(function (e) {
          return {
            header: {
              paddingTop: e.spaces.space12,
              paddingHorizontal: e.spaces.space12,
              paddingBottom: e.spaces.space20,
            },
            description: { marginTop: e.spaces.space12 },
          }
        }),
        f = i(c.a.memo(h))
      n.default = a.b({ component: f }).getHandler()
    },
  },
])
//# sourceMappingURL=WIPED
