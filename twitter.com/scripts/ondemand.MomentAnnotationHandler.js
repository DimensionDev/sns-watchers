;(window.webpackJsonp = window.webpackJsonp || []).push([
  [224],
  {
    'l+4e': function (e, t, n) {
      'use strict'
      var i = n('ERkP'),
        o = n.n(i),
        r = n('rcen'),
        a = n('rHpw'),
        c = n('MWbm'),
        s = a.a.create(function (e) {
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
          a = void 0 === i ? {} : i,
          l = e.controls,
          u = void 0 === l ? null : l,
          d = e.focusable,
          m = void 0 === d || d
        return o.a.createElement(
          c.a,
          { focusable: m, style: s.root, tabIndex: '0' },
          n.text
            ? o.a.createElement(
                c.a,
                { style: s.textContainer },
                o.a.createElement(r.a, {
                  entities: n.entities,
                  forceAutoTextDirection: !0,
                  size: 'headline1',
                  style: [s.text, a.text && s.headerWithBody],
                  text: n.text,
                  weight: 'bold',
                }),
                u,
              )
            : null,
          a.text
            ? o.a.createElement(
                c.a,
                { style: s.textContainer },
                o.a.createElement(r.a, {
                  entities: a.entities,
                  forceAutoTextDirection: !0,
                  style: s.text,
                  text: a.text,
                }),
                n.text ? null : u,
              )
            : null,
        )
      }
    },
    tFiq: function (e, t, n) {
      'use strict'
      n.r(t)
      var i = n('yiKp'),
        o = n.n(i),
        r = n('ezF+'),
        a = (n('ERkP'), n('VPAj')),
        c = n('l+4e'),
        s = n('zh9S')
      t.default = r.g({
        component: c.a,
        bindActions: function () {
          return { scribe: s.c }
        },
        createProps: function (e) {
          var t = e.entry.content
          return { header: t.header, body: t.text }
        },
        onImpression: function (e) {
          var t = e.actions.scribe,
            n = e.scribeData,
            i = e.scribeNamespace
          t(o()(o()({}, i), {}, { action: 'impression' }), n)
        },
        divider: { bottom: !0, top: !0 },
        isFocusable: Object(a.a)(!0),
      })
    },
  },
])
//# sourceMappingURL=WIPED
