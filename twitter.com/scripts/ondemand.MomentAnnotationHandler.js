;(window.webpackJsonp = window.webpackJsonp || []).push([
  [225],
  {
    'l+4e': function (e, t, n) {
      'use strict'
      var o = n('ERkP'),
        i = n.n(o),
        a = n('rcen'),
        r = n('rHpw'),
        c = n('MWbm'),
        l = function (e) {
          var t = e.header,
            n = void 0 === t ? {} : t,
            o = e.body,
            r = void 0 === o ? {} : o,
            l = e.controls,
            d = void 0 === l ? null : l,
            u = e.focusable,
            m = void 0 === u || u
          return i.a.createElement(
            c.a,
            { focusable: m, style: s.root, tabIndex: '0' },
            n.text
              ? i.a.createElement(
                  c.a,
                  { style: s.textContainer },
                  i.a.createElement(a.a, {
                    entities: n.entities,
                    forceAutoTextDirection: !0,
                    size: 'headline1',
                    style: [s.text, r.text && s.headerWithBody],
                    text: n.text,
                    weight: 'bold',
                  }),
                  d,
                )
              : null,
            r.text
              ? i.a.createElement(
                  c.a,
                  { style: s.textContainer },
                  i.a.createElement(a.a, {
                    entities: r.entities,
                    forceAutoTextDirection: !0,
                    style: s.text,
                    text: r.text,
                  }),
                  n.text ? null : d,
                )
              : null,
          )
        },
        s = r.a.create(function (e) {
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
      t.a = i.a.memo(l)
    },
    tFiq: function (e, t, n) {
      'use strict'
      n.r(t)
      var o = n('ezF+'),
        i = n('VPAj'),
        a = n('ERkP'),
        r = n.n(a),
        c = n('l+4e'),
        l = n('Irs7'),
        s = function (e) {
          var t = e.entry.content,
            n = t.header,
            o = t.text,
            i = Object(l.b)()
          return (
            r.a.useEffect(function () {
              i.scribeAction('impression')
            }, []),
            r.a.createElement(c.a, { body: o, header: n })
          )
        },
        d = r.a.memo(s)
      t.default = o.b({ component: d, divider: { bottom: !0, top: !0 }, isFocusable: Object(i.a)(!0) }).getHandler()
    },
  },
])
//# sourceMappingURL=WIPED
