;(window.webpackJsonp = window.webpackJsonp || []).push([
  [234],
  {
    D9QQ: function (e, n, t) {
      'use strict'
      t.r(n)
      var o = t('ezF+'),
        r = t('VPAj'),
        a = t('yiKp'),
        c = t.n(a),
        i = (t('2G9S'), t('ERkP')),
        s = t.n(i),
        l = t('jtO7'),
        u = t('rxPX'),
        m = function (e, n) {
          return n.entry.content
        },
        d = function (e, n) {
          return m(0, n).timelineModule
        },
        p = function (e, n) {
          return m(0, n).showMore
        },
        f = Object(u.a)()
          .propsFromState(function () {
            return { showMoreModule: p, timelineModule: d }
          })
          .propsFromActions(function (e) {
            return { updateEntry: e.module.updateEntry }
          })
          .withAnalytics({ element: 'footer' }),
        b = t('3XMw'),
        h = t.n(b).a.d228a9a0,
        w = function (e) {
          var n = e.analytics,
            t = e.showMoreModule,
            o = e.timelineModule,
            r = e.updateEntry
          s.a.useEffect(function () {
            t.shouldScribeImpression && n.scribeAction('impression')
          }, [])
          var a = s.a.useCallback(
            function () {
              var e = o.content,
                a = e.items,
                i = e.numItemsShown,
                s = o.entryId,
                l = t.initialItemsCount,
                u = t.showMoreItemsCount,
                m = i || l
              r(
                s,
                c()(
                  c()({}, o.content),
                  {},
                  {
                    numItemsShown: Math.min(m + u, a.length),
                    showMore: c()(
                      c()({}, t),
                      {},
                      { entryToFocus: 'verticalGridItem-'.concat(m, '-').concat(s), shouldScribeImpression: !1 },
                    ),
                  },
                ),
              ),
                n.scribeAction('click')
            },
            [n, t, o, r],
          )
          return s.a.createElement(l.a, { color: 'primary', label: h, onPress: a })
        },
        y = f(s.a.memo(w)),
        g = Object(r.a)(!1),
        v = Object(r.a)(!0),
        M = { viewType: 'module_footer' },
        E = { element: 'footer' }
      n.default = function (e) {
        var n = e.isInSidebar
        return o
          .b({
            shouldDisplayBorder: n ? g : void 0,
            component: y,
            defaultScribeNamespace: E,
            isFocusable: v,
            getBehavioralEventContextOverride: function () {
              return M
            },
          })
          .getHandler()
      }
    },
    jtO7: function (e, n, t) {
      'use strict'
      var o = t('97Jx'),
        r = t.n(o),
        a = t('m3Bd'),
        c = t.n(a),
        i = t('ERkP'),
        s = t.n(i),
        l = t('t62R'),
        u = t('I4+6'),
        m = t('cm6r'),
        d = t('rHpw'),
        p = t('MWbm'),
        f = ['align', 'color', 'label'],
        b = d.a.create(function (e) {
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
      n.a = function (e) {
        var n = e.align,
          t = void 0 === n ? 'center' : n,
          o = e.color,
          a = e.label,
          i = c()(e, f),
          h = u.a.generate({
            backgroundColor: d.a.theme.colors.transparent,
            color: d.a.theme.colors[o],
            insetFocusRing: !0,
          })
        return s.a.createElement(
          p.a,
          { style: b.container },
          s.a.createElement(
            m.a,
            r()({}, i, { interactiveStyles: h, style: b.root }),
            s.a.createElement(l.b, { align: t, color: o }, a),
          ),
        )
      }
    },
  },
])
//# sourceMappingURL=WIPED
