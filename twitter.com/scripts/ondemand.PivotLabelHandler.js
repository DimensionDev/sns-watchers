;(window.webpackJsonp = window.webpackJsonp || []).push([
  [225],
  {
    SdtT: function (t, e, n) {
      'use strict'
      n.r(e)
      var c = n('yiKp'),
        i = n.n(c),
        a = n('ezF+'),
        r = n('ERkP'),
        o = n.n(r),
        s = n('VPAj'),
        b = (n('hBvt'), n('fs1G')),
        l = n('t62R'),
        u = n('csss'),
        p = function (t) {
          var e = t.link,
            n = t.onClick,
            c = void 0 === n ? b.a : n,
            i = t.subtext,
            a = t.text,
            r = o.a.createElement(l.b, { color: e ? 'primary' : 'normal' }, a)
          return o.a.createElement(u.a, { description: i, label: r, link: e, onPress: c })
        },
        k = n('caTy'),
        d = n('zh9S'),
        f = a.g({
          component: p,
          bindActions: Object(s.a)({ scribe: d.c }),
          createProps: function (t) {
            var e = t.actions.scribe,
              n = t.entry,
              c = t.scribeData,
              a = t.scribeNamespace,
              r = n.content,
              o = r.subtext,
              s = r.text,
              b = r.url
            return {
              subtext: o,
              text: s,
              link: b && Object(k.b)(b),
              onClick: function () {
                e(i()(i()({}, a), {}, { action: 'click_label' }), c)
              },
            }
          },
        })
      e.default = f
    },
  },
])
//# sourceMappingURL=WIPED
