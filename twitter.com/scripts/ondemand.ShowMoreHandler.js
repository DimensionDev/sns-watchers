;(window.webpackJsonp = window.webpackJsonp || []).push([
  [227],
  {
    D9QQ: function (e, t, n) {
      'use strict'
      n.r(t)
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        o = n.n(r),
        c = (n('2G9S'), n('ezF+')),
        i = n('jtO7'),
        a = n('VPAj'),
        s = n('3XMw'),
        l = n.n(s),
        u = n('zh9S'),
        p = n('eR3e')
      function m(e, t) {
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
      function b(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? m(Object(n), !0).forEach(function (t) {
                o()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : m(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var d = l.a.d228a9a0,
        f = Object(a.a)(!1),
        y = Object(a.a)(!0),
        w = { viewType: 'module_footer' },
        O = { element: 'footer' }
      t.default = function (e) {
        var t = e.isInSidebar
        return c.g({
          shouldDisplayBorder: t ? f : void 0,
          component: i.a,
          bindActions: Object(a.a)({ scribe: u.c, updateEntry: p.w }),
          createProps: function (e) {
            var t = e.actions,
              n = t.scribe,
              r = t.updateEntry,
              o = e.entry,
              c = o.content,
              i = c.showMore,
              a = i.initialItemsCount,
              s = i.showMoreItemsCount,
              l = c.timelineModule,
              u = (o.entryId, e.module.timelineId),
              p = e.scribeNamespace,
              m = l.content,
              f = m.items,
              y = m.numItemsShown || a
            return {
              color: 'primary',
              label: d,
              onPress: function () {
                r(
                  u,
                  l.entryId,
                  b(
                    b({}, l.content),
                    {},
                    {
                      numItemsShown: Math.min(y + s, f.length),
                      showMore: b(
                        b({}, l.content.showMore),
                        {},
                        {
                          entryToFocus: 'verticalGridItem-'.concat(y, '-').concat(l.entryId),
                          shouldScribeImpression: !1,
                        },
                      ),
                    },
                  ),
                ),
                  n(b(b({}, p), {}, { element: 'footer', action: 'click' }))
              },
            }
          },
          defaultScribeNamespace: O,
          isFocusable: y,
          getBehavioralEventContextOverride: function () {
            return w
          },
          onImpression: function (e) {
            var t = e.actions.scribe,
              n = e.entry.content.showMore,
              r = e.scribeNamespace
            n.shouldScribeImpression && t(b(b({}, r), {}, { element: 'footer', action: 'impression' }))
          },
        })
      }
    },
    jtO7: function (e, t, n) {
      'use strict'
      var r = n('97Jx'),
        o = n.n(r),
        c = n('m3Bd'),
        i = n.n(c),
        a = n('ERkP'),
        s = n('t62R'),
        l = n('I4+6'),
        u = n('cm6r'),
        p = n('rHpw'),
        m = n('MWbm'),
        b = p.a.create(function (e) {
          return {
            container: { backgroundColor: e.colors.cellBackground },
            root: {
              justifyContent: 'center',
              minHeight: e.spaces.space48,
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.spaces.space16,
            },
          }
        })
      t.a = function (e) {
        var t = e.align,
          n = void 0 === t ? 'center' : t,
          r = e.color,
          c = e.label,
          d = i()(e, ['align', 'color', 'label']),
          f = l.a.generate({
            backgroundColor: p.a.theme.colors.transparent,
            color: p.a.theme.colors[r],
            insetFocusRing: !0,
          })
        return a.createElement(
          m.a,
          { style: b.container },
          a.createElement(
            u.a,
            o()({}, d, { interactiveStyles: f, style: b.root }),
            a.createElement(s.b, { align: n, color: r }, c),
          ),
        )
      }
    },
  },
])
//# sourceMappingURL=WIPED
