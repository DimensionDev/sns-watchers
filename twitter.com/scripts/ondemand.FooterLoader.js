;(window.webpackJsonp = window.webpackJsonp || []).push([
  [211],
  {
    '3Rb8': function (e, n, t) {
      'use strict'
      t.r(n)
      var r = t('yiKp'),
        i = t.n(r),
        o = t('ezF+'),
        c = t('VPAj'),
        a = t('rC8y'),
        s = t('caTy'),
        u = t('zh9S'),
        b = t('ywYn'),
        l = Object(c.a)(!1),
        p = { viewType: 'module_footer' },
        d = { element: 'footer' }
      n.default = function (e) {
        var n = e.isInSidebar
        return o.g({
          shouldDisplayBorder: n ? l : void 0,
          component: a.a,
          bindActions: Object(c.a)({ scribe: u.c }),
          createProps: function (e) {
            var t = e.actions.scribe,
              r = e.entry.content,
              o = r.landingUrl,
              c = r.text,
              a = r.url,
              u = e.scribeNamespace,
              l = o || (a && { urlType: b.a.DeepLink, url: a })
            return {
              link: l && Object(s.b)(l),
              text: c,
              onPress: function () {
                t(i()(i()({}, u), {}, { element: 'footer', action: 'click' }))
              },
              withDarkerInteractiveBackground: n,
            }
          },
          defaultScribeNamespace: d,
          isFocusable: Object(c.a)(!0),
          getBehavioralEventContextOverride: function () {
            return p
          },
          onImpression: function (e) {
            var n = e.actions.scribe,
              t = e.scribeNamespace
            n(i()(i()({}, t), {}, { element: 'footer', action: 'impression' }))
          },
        })
      }
    },
  },
])
//# sourceMappingURL=WIPED
