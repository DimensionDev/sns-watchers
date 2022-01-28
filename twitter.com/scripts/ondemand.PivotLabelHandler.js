;(window.webpackJsonp = window.webpackJsonp || []).push([
  [223],
  {
    SdtT: function (e, t, r) {
      'use strict'
      r.r(t)
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        c = r.n(n),
        o = r('ezF+'),
        i = r('ERkP'),
        a = r.n(i),
        s = r('VPAj'),
        b = (r('hBvt'), r('fs1G')),
        p = r('t62R'),
        u = r('csss'),
        l = function (e) {
          var t = e.link,
            r = e.onClick,
            n = void 0 === r ? b.a : r,
            c = e.subtext,
            o = e.text,
            i = a.a.createElement(p.b, { color: t ? 'primary' : 'normal' }, o)
          return a.a.createElement(u.a, { description: c, label: i, link: t, onPress: n })
        },
        O = r('caTy'),
        f = r('zh9S')
      function j(e, t) {
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
      function y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? j(Object(r), !0).forEach(function (t) {
                c()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : j(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var w = o.g({
        component: l,
        bindActions: Object(s.a)({ scribe: f.c }),
        createProps: function (e) {
          var t = e.actions.scribe,
            r = e.entry,
            n = e.scribeData,
            c = e.scribeNamespace,
            o = r.content,
            i = o.subtext,
            a = o.text,
            s = o.url
          return {
            subtext: i,
            text: a,
            link: s && Object(O.b)(s),
            onClick: function () {
              t(y(y({}, c), {}, { action: 'click_label' }), n)
            },
          }
        },
      })
      t.default = w
    },
  },
])
//# sourceMappingURL=WIPED
