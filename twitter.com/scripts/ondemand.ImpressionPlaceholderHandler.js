;(window.webpackJsonp = window.webpackJsonp || []).push([
  [206],
  {
    hKgB: function (e, n, t) {
      'use strict'
      t.r(n)
      var o = t('ezF+'),
        i = t('VPAj'),
        r = t('ERkP'),
        a = t('Irs7'),
        c = function (e) {
          var n = e.entry,
            t = Object(a.b)()
          return (
            r.useEffect(function () {
              t.scribe({ action: 'impression', data: { position: n.position } })
            }, []),
            null
          )
        },
        s = r.memo(c),
        u = Object(i.a)(!1),
        p = { viewType: 'module' },
        d = o
          .b({
            component: s,
            shouldDisplayBorder: u,
            defaultScribeNamespace: { component: 'module' },
            getBehavioralEventContextOverride: function () {
              return p
            },
            isEmpty: !0,
          })
          .getHandler()
      n.default = d
    },
  },
])
//# sourceMappingURL=WIPED
