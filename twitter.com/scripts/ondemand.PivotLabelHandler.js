;(window.webpackJsonp = window.webpackJsonp || []).push([
  [229],
  {
    SdtT: function (t, e, n) {
      'use strict'
      n.r(e)
      var c = n('yiKp'),
        i = n.n(c),
        r = n('ezF+'),
        a = n('ERkP'),
        s = n.n(a),
        o = n('VPAj'),
        b = (n('hBvt'), n('fs1G')),
        l = n('t62R'),
        u = n('csss'),
        p = function (t) {
          var e = t.link,
            n = t.onClick,
            c = void 0 === n ? b.a : n,
            i = t.subtext,
            r = t.text,
            a = s.a.createElement(l.b, { color: e ? 'primary' : 'text' }, r)
          return s.a.createElement(u.a, { description: i, label: a, link: e, onPress: c })
        },
        k = n('caTy'),
        d = n('zh9S'),
        x = r.g({
          component: p,
          bindActions: Object(o.a)({ scribe: d.scribeAction }),
          createProps: function (t) {
            var e = t.actions.scribe,
              n = t.entry,
              c = t.scribeData,
              r = t.scribeNamespace,
              a = n.content,
              s = a.subtext,
              o = a.text,
              b = a.url
            return {
              subtext: s,
              text: o,
              link: b && Object(k.b)(b),
              onClick: function () {
                e(i()(i()({}, r), {}, { action: 'click_label' }), c)
              },
            }
          },
        })
      e.default = x
    },
  },
])
//# sourceMappingURL=WIPED
