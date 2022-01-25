;(window.webpackJsonp = window.webpackJsonp || []).push([
  [201],
  {
    '3Rb8': function (e, t, r) {
      'use strict'
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        i = r.n(n),
        c = r('ezF+'),
        o = r('VPAj'),
        a = r('caTy'),
        s = r('zh9S'),
        p = r('ywYn')
      function u(e, t) {
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
      function b(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? u(Object(r), !0).forEach(function (t) {
                i()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : u(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var l = Object(o.a)(!1),
        f = { viewType: 'module_footer' },
        y = { element: 'footer' }
      t.a = function (e) {
        var t = e.component,
          r = e.getDisplayTypeSpecificProps,
          n = e.isInSidebar
        return c.g({
          shouldDisplayBorder: n ? l : void 0,
          component: t,
          bindActions: Object(o.a)({ scribe: s.c }),
          createProps: function (e) {
            var t = e.actions.scribe,
              i = e.entry.content,
              c = i.landingUrl,
              o = i.text,
              s = i.url,
              u = e.scribeNamespace,
              l = c || (s && { urlType: p.a.DeepLink, url: s }),
              f = l && Object(a.b)(l)
            return b(
              b({}, r({ text: o, isInSidebar: n })),
              {},
              {
                link: f,
                onPress: function () {
                  t(b(b({}, u), {}, { element: 'footer', action: 'click' }))
                },
              },
            )
          },
          defaultScribeNamespace: y,
          isFocusable: Object(o.a)(!0),
          getBehavioralEventContextOverride: function () {
            return f
          },
          onImpression: function (e) {
            ;(0, e.actions.scribe)(b(b({}, e.scribeNamespace), {}, { element: 'footer', action: 'impression' }))
          },
        })
      }
    },
    RohR: function (e, t, r) {
      'use strict'
      r.r(t)
      var n = r('3Rb8'),
        i = r('/yvb'),
        c = r('rHpw'),
        o = function (e) {
          return { type: 'brandOutlined', children: e.text, style: a.containerStyle }
        }
      t.default = function (e) {
        var t = e.isInSidebar
        return Object(n.a)({ component: i.a, getDisplayTypeSpecificProps: o, isInSidebar: t })
      }
      var a = c.a.create(function (e) {
        return { containerStyle: { width: '90%', marginVertical: e.spaces.space12, marginHorizontal: 'auto' } }
      })
    },
    pODo: function (e, t, r) {
      'use strict'
      r.r(t)
      var n = r('3Rb8'),
        i = r('rC8y'),
        c = function (e) {
          var t = e.isInSidebar
          return { text: e.text, withDarkerInteractiveBackground: t }
        }
      t.default = function (e) {
        var t = e.isInSidebar
        return Object(n.a)({ component: i.a, getDisplayTypeSpecificProps: c, isInSidebar: t })
      }
    },
  },
])
//# sourceMappingURL=WIPED
