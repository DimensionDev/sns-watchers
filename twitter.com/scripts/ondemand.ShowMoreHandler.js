;(window.webpackJsonp = window.webpackJsonp || []).push([
  [232],
  {
    D9QQ: function (e, t, n) {
      'use strict'
      n.r(t)
      var r = n('ezF+'),
        o = n('VPAj'),
        c = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('KEM+')),
        a = n.n(c),
        i = (n('2G9S'), n('ERkP')),
        s = n.n(i),
        l = n('jtO7'),
        u = n('rxPX'),
        p = function (e, t) {
          return t.entry.content
        },
        m = function (e, t) {
          return p(0, t).timelineModule
        },
        d = function (e, t) {
          return p(0, t).showMore
        },
        b = Object(u.a)()
          .propsFromState(function () {
            return { showMoreModule: d, timelineModule: m }
          })
          .propsFromActions(function (e) {
            return { updateEntry: e.module.updateEntry }
          })
          .withAnalytics({ element: 'footer' }),
        f = n('3XMw')
      function y(e, t) {
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
      function w(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? y(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : y(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var O = n.n(f).a.d228a9a0,
        h = function (e) {
          var t = e.analytics,
            n = e.showMoreModule,
            r = e.timelineModule,
            o = e.updateEntry
          s.a.useEffect(function () {
            n.shouldScribeImpression && t.scribeAction('impression')
          }, [])
          var c = s.a.useCallback(
            function () {
              var e = r.content,
                c = e.items,
                a = e.numItemsShown,
                i = r.entryId,
                s = n.initialItemsCount,
                l = n.showMoreItemsCount,
                u = a || s
              o(
                i,
                w(
                  w({}, r.content),
                  {},
                  {
                    numItemsShown: Math.min(u + l, c.length),
                    showMore: w(
                      w({}, n),
                      {},
                      { entryToFocus: 'verticalGridItem-'.concat(u, '-').concat(i), shouldScribeImpression: !1 },
                    ),
                  },
                ),
              ),
                t.scribeAction('click')
            },
            [t, n, r, o],
          )
          return s.a.createElement(l.a, { color: 'primary', label: O, onPress: c })
        },
        g = b(s.a.memo(h)),
        v = Object(o.a)(!1),
        j = Object(o.a)(!0),
        M = { viewType: 'module_footer' },
        E = { element: 'footer' }
      t.default = function (e) {
        var t = e.isInSidebar
        return r
          .b({
            shouldDisplayBorder: t ? v : void 0,
            component: g,
            defaultScribeNamespace: E,
            isFocusable: j,
            getBehavioralEventContextOverride: function () {
              return M
            },
          })
          .getHandler()
      }
    },
    jtO7: function (e, t, n) {
      'use strict'
      var r = n('97Jx'),
        o = n.n(r),
        c = n('m3Bd'),
        a = n.n(c),
        i = n('ERkP'),
        s = n.n(i),
        l = n('t62R'),
        u = n('I4+6'),
        p = n('cm6r'),
        m = n('rHpw'),
        d = n('MWbm'),
        b = m.a.create(function (e) {
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
          i = a()(e, ['align', 'color', 'label']),
          f = u.a.generate({
            backgroundColor: m.a.theme.colors.transparent,
            color: m.a.theme.colors[r],
            insetFocusRing: !0,
          })
        return s.a.createElement(
          d.a,
          { style: b.container },
          s.a.createElement(
            p.a,
            o()({}, i, { interactiveStyles: f, style: b.root }),
            s.a.createElement(l.b, { align: n, color: r }, c),
          ),
        )
      }
    },
  },
])
//# sourceMappingURL=WIPED
