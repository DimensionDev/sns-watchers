;(window.webpackJsonp = window.webpackJsonp || []).push([
  [231],
  {
    SdtT: function (t, e, n) {
      'use strict'
      n.r(e)
      var c = n('yiKp'),
        i = n.n(c),
        a = n('ezF+'),
        r = n('ERkP'),
        s = n.n(r),
        o = n('VPAj'),
        b = (n('hBvt'), n('fs1G')),
        l = n('t62R'),
        u = n('csss'),
        p = function (t) {
          var e = t.link,
            n = t.onClick,
            c = void 0 === n ? b.a : n,
            i = t.subtext,
            a = t.text,
            r = s.a.createElement(l.b, { color: e ? 'primary' : 'text' }, a)
          return s.a.createElement(u.a, { description: i, label: r, link: e, onPress: c })
        },
        k = n('caTy'),
        d = n('zh9S'),
        x = a.g({
          component: p,
          bindActions: Object(o.a)({ scribe: d.c }),
          createProps: function (t) {
            var e = t.actions.scribe,
              n = t.entry,
              c = t.scribeData,
              a = t.scribeNamespace,
              r = n.content,
              s = r.subtext,
              o = r.text,
              b = r.url
            return {
              subtext: s,
              text: o,
              link: b && Object(k.b)(b),
              onClick: function () {
                e(i()(i()({}, a), {}, { action: 'click_label' }), c)
              },
            }
          },
        })
      e.default = x
    },
  },
])
//# sourceMappingURL=WIPED
