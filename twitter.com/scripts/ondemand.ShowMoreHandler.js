;(window.webpackJsonp = window.webpackJsonp || []).push([
  [226],
  {
    D9QQ: function (e, t, n) {
      'use strict'
      n.r(t)
      var r = n('ezF+'),
        o = n('VPAj'),
        c = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('KEM+')),
        i = n.n(c),
        a = (n('2G9S'), n('ERkP')),
        s = n('jtO7'),
        l = n('rxPX'),
        u = function (e, t) {
          return t.entry.content
        },
        p = function (e, t) {
          return u(0, t).timelineModule
        },
        m = function (e, t) {
          return u(0, t).showMore
        },
        d = Object(l.a)()
          .propsFromState(function () {
            return { showMoreModule: m, timelineModule: p }
          })
          .propsFromActions(function (e) {
            return { updateEntry: e.module.updateEntry }
          })
          .withAnalytics({ element: 'footer' }),
        b = n('3XMw')
      function f(e, t) {
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
      function y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? f(Object(n), !0).forEach(function (t) {
                i()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : f(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var w = n.n(b).a.d228a9a0,
        O = function (e) {
          var t = e.analytics,
            n = e.showMoreModule,
            r = e.timelineModule,
            o = e.updateEntry
          a.useEffect(function () {
            n.shouldScribeImpression && t.scribeAction('impression')
          }, [])
          var c = a.useCallback(
            function () {
              var e = r.content,
                c = e.items,
                i = e.numItemsShown,
                a = r.entryId,
                s = n.initialItemsCount,
                l = n.showMoreItemsCount,
                u = i || s
              o(
                a,
                y(
                  y({}, r.content),
                  {},
                  {
                    numItemsShown: Math.min(u + l, c.length),
                    showMore: y(
                      y({}, n),
                      {},
                      { entryToFocus: 'verticalGridItem-'.concat(u, '-').concat(a), shouldScribeImpression: !1 },
                    ),
                  },
                ),
              ),
                t.scribeAction('click')
            },
            [t, n, r, o],
          )
          return a.createElement(s.a, { color: 'primary', label: w, onPress: c })
        },
        h = d(a.memo(O)),
        g = Object(o.a)(!1),
        v = Object(o.a)(!0),
        j = { viewType: 'module_footer' },
        M = { element: 'footer' }
      t.default = function (e) {
        var t = e.isInSidebar
        return r
          .b({
            shouldDisplayBorder: t ? g : void 0,
            component: h,
            defaultScribeNamespace: M,
            isFocusable: v,
            getBehavioralEventContextOverride: function () {
              return j
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
        i = n.n(c),
        a = n('ERkP'),
        s = n('t62R'),
        l = n('I4+6'),
        u = n('cm6r'),
        p = n('rHpw'),
        m = n('MWbm'),
        d = p.a.create(function (e) {
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
          b = i()(e, ['align', 'color', 'label']),
          f = l.a.generate({
            backgroundColor: p.a.theme.colors.transparent,
            color: p.a.theme.colors[r],
            insetFocusRing: !0,
          })
        return a.createElement(
          m.a,
          { style: d.container },
          a.createElement(
            u.a,
            o()({}, b, { interactiveStyles: f, style: d.root }),
            a.createElement(s.b, { align: n, color: r }, c),
          ),
        )
      }
    },
  },
])
//# sourceMappingURL=WIPED
