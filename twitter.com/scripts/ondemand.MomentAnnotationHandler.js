;(window.webpackJsonp = window.webpackJsonp || []).push([
  [214],
  {
    'l+4e': function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        o = n('rcen'),
        i = n('rHpw'),
        c = n('MWbm'),
        a = i.a.create(function (e) {
          return {
            root: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            text: { overflow: 'visible' },
            headerWithBody: { marginBottom: e.componentDimensions.gutterVertical },
            textContainer: {
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
            },
          }
        })
      t.a = function (e) {
        var t = e.header,
          n = void 0 === t ? {} : t,
          i = e.body,
          s = void 0 === i ? {} : i,
          l = e.controls,
          u = void 0 === l ? null : l,
          b = e.focusable,
          p = void 0 === b || b
        return r.createElement(
          c.a,
          { focusable: p, style: a.root, tabIndex: '0' },
          n.text
            ? r.createElement(
                c.a,
                { style: a.textContainer },
                r.createElement(o.a, {
                  entities: n.entities,
                  forceAutoTextDirection: !0,
                  size: 'headline1',
                  style: [a.text, s.text && a.headerWithBody],
                  text: n.text,
                  weight: 'bold',
                }),
                u,
              )
            : null,
          s.text
            ? r.createElement(
                c.a,
                { style: a.textContainer },
                r.createElement(o.a, { entities: s.entities, forceAutoTextDirection: !0, style: a.text, text: s.text }),
                n.text ? null : u,
              )
            : null,
        )
      }
    },
    tFiq: function (e, t, n) {
      'use strict'
      n.r(t)
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        o = n.n(r),
        i = n('ezF+'),
        c = (n('ERkP'), n('VPAj')),
        a = n('l+4e'),
        s = n('zh9S')
      function l(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                o()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      t.default = i.g({
        component: a.a,
        bindActions: function () {
          return { scribe: s.c }
        },
        createProps: function (e) {
          var t = e.entry.content
          return { header: t.header, body: t.text }
        },
        onImpression: function (e) {
          var t = e.actions.scribe,
            n = e.scribeData
          t(u(u({}, e.scribeNamespace), {}, { action: 'impression' }), n)
        },
        divider: { bottom: !0, top: !0 },
        isFocusable: Object(c.a)(!0),
      })
    },
  },
])
//# sourceMappingURL=WIPED
