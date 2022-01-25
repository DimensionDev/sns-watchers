;(window.webpackJsonp = window.webpackJsonp || []).push([
  [204],
  {
    hKgB: function (e, t, r) {
      'use strict'
      r.r(t)
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        o = r.n(n),
        c = r('ezF+'),
        i = r('VPAj'),
        s = r('RgK2'),
        a = r.n(s),
        p = r('zh9S')
      function b(e, t) {
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
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? b(Object(r), !0).forEach(function (t) {
                o()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : b(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var O = Object(i.a)(!1),
        f = Object(i.a)(null),
        j = { viewType: 'module' },
        l = c.g({
          component: f,
          bindActions: Object(i.a)({ scribe: p.c }),
          createProps: Object(i.a)(a.a),
          onImpression: function (e) {
            var t = e.actions.scribe,
              r = e.entry,
              n = e.scribeData
            t(u(u({}, e.scribeNamespace), {}, { action: 'impression' }), u(u({}, n), {}, { position: r.position }))
          },
          shouldDisplayBorder: O,
          defaultScribeNamespace: { component: 'module' },
          getBehavioralEventContextOverride: function () {
            return j
          },
          isEmpty: !0,
        })
      t.default = l
    },
  },
])
//# sourceMappingURL=WIPED
