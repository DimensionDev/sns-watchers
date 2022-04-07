;(window.webpackJsonp = window.webpackJsonp || []).push([
  [250],
  {
    JKhl: function (e, t, n) {
      'use strict'
      n.r(t)
      n('z84I'), n('2G9S')
      var r = n('ezF+'),
        a = n('ERkP'),
        o = n.n(a),
        c = n('7nmT'),
        i = n.n(c),
        s = n('rHpw'),
        u = n('MWbm'),
        m = function (e) {
          var t = e.entryToFocus,
            n = e.gridItems,
            r = e.numColumns,
            a = o.a.useRef(null)
          return (
            o.a.useEffect(
              function () {
                var e = i.a.findDOMNode(a.current),
                  t = (e && e instanceof window.HTMLElement && e.querySelector("a, [tabindex='0']")) || void 0
                t && t.focus()
              },
              [t, a],
            ),
            o.a.createElement(
              u.a,
              { style: l.root },
              n.map(function (e) {
                return o.a.createElement(
                  u.a,
                  {
                    accessibilityRole: 'listitem',
                    key: e.key,
                    nativeID: e.nativeID,
                    ref: t === e.nativeID ? a : void 0,
                    style: { width: 'calc(100% / '.concat(r, ')') },
                  },
                  o.a.createElement(o.a.Fragment, { key: e.key }, e.item),
                )
              }),
            )
          )
        }
      m.defaultProps = { numColumns: 2 }
      var l = s.a.create(function (e) {
          return { root: { flexDirection: 'row', marginHorizontal: e.spaces.space8 } }
        }),
        d = m,
        f = n('VPAj'),
        y = n('fs1G'),
        p = r.g({
          component: d,
          createProps: function (e) {
            var t = e.entry,
              n = t.content,
              r = n.entryToFocus,
              a = n.items,
              o = n.moduleEntryId,
              c = n.numColumns,
              i = n.rowIndex,
              s = (t.itemMetadata, e.renderEntry)
            e.scribeNamespace
            return {
              entryToFocus: r,
              gridItems: a.map(function (e, t) {
                return { item: s(e), key: e.entryId, nativeID: 'verticalGridItem-'.concat(i * c + t, '-').concat(o) }
              }),
              numColumns: c,
            }
          },
          isFocusable: Object(f.a)(!0),
          getBehavioralEventContextOverride: y.a,
          shouldDisplayBorder: Object(f.a)(!1),
        })
      t.default = p
    },
  },
])
//# sourceMappingURL=WIPED
