;(window.webpackJsonp = window.webpackJsonp || []).push([
  [202],
  {
    '3Rb8': function (e, t, r) {
      'use strict'
      r.r(t)
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        o = r.n(n),
        c = r('ezF+'),
        i = r('VPAj'),
        a = r('rC8y'),
        s = r('caTy'),
        u = r('zh9S'),
        b = r('ywYn')
      function p(e, t) {
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
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? p(Object(r), !0).forEach(function (t) {
                o()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : p(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var f = Object(i.a)(!1),
        O = { viewType: 'module_footer' },
        y = { element: 'footer' }
      t.default = function (e) {
        var t = e.isInSidebar
        return c.g({
          shouldDisplayBorder: t ? f : void 0,
          component: a.a,
          bindActions: Object(i.a)({ scribe: u.c }),
          createProps: function (e) {
            var r = e.actions.scribe,
              n = e.entry.content,
              o = n.landingUrl,
              c = n.text,
              i = n.url,
              a = e.scribeNamespace,
              u = o || (i && { urlType: b.a.DeepLink, url: i })
            return {
              link: u && Object(s.b)(u),
              text: c,
              onPress: function () {
                r(l(l({}, a), {}, { element: 'footer', action: 'click' }))
              },
              withDarkerInteractiveBackground: t,
            }
          },
          defaultScribeNamespace: y,
          isFocusable: Object(i.a)(!0),
          getBehavioralEventContextOverride: function () {
            return O
          },
          onImpression: function (e) {
            ;(0, e.actions.scribe)(l(l({}, e.scribeNamespace), {}, { element: 'footer', action: 'impression' }))
          },
        })
      }
    },
  },
])
//# sourceMappingURL=WIPED
