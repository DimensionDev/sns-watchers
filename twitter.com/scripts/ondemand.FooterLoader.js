;(window.webpackJsonp = window.webpackJsonp || []).push([
  [207],
  {
    '3Rb8': function (e, n, t) {
      'use strict'
      var r = t('yiKp'),
        i = t.n(r),
        a = t('ezF+'),
        c = t('VPAj'),
        o = t('caTy'),
        s = t('zh9S'),
        p = t('ywYn'),
        u = Object(c.a)(!1),
        b = { viewType: 'module_footer' },
        l = { element: 'footer' }
      n.a = function (e) {
        var n = e.component,
          t = e.getDisplayTypeSpecificProps,
          r = e.isInSidebar
        return a.g({
          shouldDisplayBorder: r ? u : void 0,
          component: n,
          bindActions: Object(c.a)({ scribe: s.c }),
          createProps: function (e) {
            var n = e.actions.scribe,
              a = e.entry.content,
              c = a.landingUrl,
              s = a.text,
              u = a.url,
              b = e.scribeNamespace,
              l = c || (u && { urlType: p.a.DeepLink, url: u }),
              d = l && Object(o.b)(l),
              f = t({ text: s, isInSidebar: r })
            return i()(
              i()({}, f),
              {},
              {
                link: d,
                onPress: function () {
                  n(i()(i()({}, b), {}, { element: 'footer', action: 'click' }))
                },
              },
            )
          },
          defaultScribeNamespace: l,
          isFocusable: Object(c.a)(!0),
          getBehavioralEventContextOverride: function () {
            return b
          },
          onImpression: function (e) {
            var n = e.actions.scribe,
              t = e.scribeNamespace
            n(i()(i()({}, t), {}, { element: 'footer', action: 'impression' }))
          },
        })
      }
    },
    RohR: function (e, n, t) {
      'use strict'
      t.r(n)
      var r = t('3Rb8'),
        i = t('/yvb'),
        a = t('rHpw'),
        c = function (e) {
          return { type: 'brandOutlined', children: e.text, style: o.containerStyle }
        }
      n.default = function (e) {
        var n = e.isInSidebar
        return Object(r.a)({ component: i.a, getDisplayTypeSpecificProps: c, isInSidebar: n })
      }
      var o = a.a.create(function (e) {
        return { containerStyle: { width: '90%', marginVertical: e.spaces.space12, marginHorizontal: 'auto' } }
      })
    },
    pODo: function (e, n, t) {
      'use strict'
      t.r(n)
      var r = t('3Rb8'),
        i = t('rC8y'),
        a = function (e) {
          var n = e.isInSidebar
          return { text: e.text, withDarkerInteractiveBackground: n }
        }
      n.default = function (e) {
        var n = e.isInSidebar
        return Object(r.a)({ component: i.a, getDisplayTypeSpecificProps: a, isInSidebar: n })
      }
    },
  },
])
//# sourceMappingURL=WIPED
