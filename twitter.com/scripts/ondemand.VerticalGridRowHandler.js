;(window.webpackJsonp = window.webpackJsonp || []).push([
  [234],
  {
    JKhl: function (e, t, n) {
      'use strict'
      n.r(t)
      n('z84I'), n('2G9S')
      var r = n('ezF+'),
        o = n('ERkP'),
        a = n('7nmT'),
        c = n.n(a),
        i = n('rHpw'),
        s = n('MWbm'),
        u = function (e) {
          var t = e.entryToFocus,
            n = e.gridItems,
            r = e.numColumns,
            a = o.useRef(null)
          return (
            o.useEffect(
              function () {
                var e = c.a.findDOMNode(a.current),
                  t = (e && e instanceof window.HTMLElement && e.querySelector("a, [tabindex='0']")) || void 0
                t && t.focus()
              },
              [t, a],
            ),
            o.createElement(
              s.a,
              { style: m.root },
              n.map(function (e) {
                return o.createElement(
                  s.a,
                  {
                    accessibilityRole: 'listitem',
                    key: e.key,
                    nativeID: e.nativeID,
                    ref: t === e.nativeID ? a : void 0,
                    style: { width: 'calc(100% / '.concat(r, ')') },
                  },
                  o.createElement(o.Fragment, { key: e.key }, e.item),
                )
              }),
            )
          )
        }
      u.defaultProps = { numColumns: 2 }
      var m = i.a.create(function (e) {
          return { root: { flexDirection: 'row', marginHorizontal: e.spaces.space8 } }
        }),
        l = u,
        d = n('VPAj'),
        f = n('fs1G'),
        y = r.g({
          component: l,
          createProps: function (e) {
            var t = e.entry,
              n = t.content,
              r = n.entryToFocus,
              o = n.items,
              a = n.moduleEntryId,
              c = n.numColumns,
              i = n.rowIndex,
              s = (t.itemMetadata, e.renderEntry)
            e.scribeNamespace
            return {
              entryToFocus: r,
              gridItems: o.map(function (e, t) {
                return { item: s(e), key: e.entryId, nativeID: 'verticalGridItem-'.concat(i * c + t, '-').concat(a) }
              }),
              numColumns: c,
            }
          },
          isFocusable: Object(d.a)(!0),
          getBehavioralEventContextOverride: f.a,
          shouldDisplayBorder: Object(d.a)(!1),
        })
      t.default = y
    },
  },
])
//# sourceMappingURL=WIPED
