;(window.webpackJsonp = window.webpackJsonp || []).push([
  [215],
  {
    hKgB: function (e, n, t) {
      'use strict'
      t.r(n)
      var o = t('ezF+'),
        i = t('VPAj'),
        r = t('ERkP'),
        a = t.n(r),
        c = t('Irs7'),
        s = function (e) {
          var n = e.entry,
            t = Object(c.b)()
          return (
            a.a.useEffect(function () {
              t.scribe({ action: 'impression', data: { position: n.position } })
            }, []),
            null
          )
        },
        u = a.a.memo(s),
        p = Object(i.a)(!1),
        d = { viewType: 'module' },
        l = o
          .b({
            component: u,
            shouldDisplayBorder: p,
            defaultScribeNamespace: { component: 'module' },
            getBehavioralEventContextOverride: function () {
              return d
            },
            isEmpty: !0,
          })
          .getHandler()
      n.default = l
    },
  },
])
//# sourceMappingURL=WIPED
