;(window.webpackJsonp = window.webpackJsonp || []).push([
  [211],
  {
    tzdO: function (n, e, o) {
      'use strict'
      o.r(e)
      var r = o('ezF+'),
        t = o('VPAj'),
        i = o('3Lh0'),
        s = r.g({
          component: i.a,
          bindActions: function (n) {
            return { removeEntry: n.module.removeEntry }
          },
          createProps: function (n) {
            var e = n.actions.removeEntry,
              o = n.entry
            return {
              onDismiss: function () {
                e(o.entryId)
              },
            }
          },
          shouldDisplayBorder: Object(t.a)(!0),
        })
      e.default = s
    },
  },
])
//# sourceMappingURL=WIPED
