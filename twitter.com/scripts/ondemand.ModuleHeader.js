;(window.webpackJsonp = window.webpackJsonp || []).push([
  [225],
  {
    RoyM: function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        a = n.n(r),
        c = (n('lTEL'), n('7x/C'), n('JtPf'), n('87if'), n('kYxP'), n('zb92')),
        o = Object(c.a)({
          loader: function () {
            return n.e(175).then(n.bind(null, 'ACNv'))
          },
        }),
        i = n('4bW+'),
        l = n('IG7M'),
        u = n('rHpw'),
        s = n('Irs7'),
        d = u.a.create(function (e) {
          return { curationControl: { marginStart: e.spaces.space20 } }
        })
      t.a = Object(s.a)(function (e) {
        var t = e.analytics,
          n = e.feedbackItems,
          r = e.isDisplayedOnMedia
        if (n && n.length > 0) {
          return a.a.createElement(l.a, {
            onClick: function () {
              return t.scribe({ element: 'caret', action: 'click' })
            },
            renderActionMenu: function (e) {
              return a.a.createElement(o, { actionItems: n, onClose: e })
            },
            style: d.curationControl,
            testID: i.a.caret,
            withDarkBackground: r,
          })
        }
        return null
      })
    },
    oiEo: function (e, t, n) {
      'use strict'
      n.r(t)
      var r = n('ezF+'),
        a = n('VPAj'),
        c = n('ERkP'),
        o = n.n(c),
        i = n('RoyM'),
        l = n('Irs7'),
        u = n('cm6r'),
        s = n('6vad'),
        d = function (e) {
          var t = e.entry,
            n = e.feedbackItems,
            r = t.content.header,
            a = r.icon,
            c = r.landingUrl,
            d = r.renderCustomControl,
            m = r.socialContext,
            b = r.text,
            f = Object(l.b)(),
            k = o.a.useCallback(
              function () {
                f.scribe({ element: 'header', action: 'click' })
              },
              [f],
            ),
            C = m && m.generalContext && m.generalContext.text,
            p = o.a.useMemo(
              function () {
                return d ? d() : o.a.createElement(i.a, { feedbackItems: n })
              },
              [n, d],
            )
          return (
            o.a.useEffect(function () {
              c && f.scribe({ element: 'header', action: 'impression' })
            }, []),
            c
              ? o.a.createElement(
                  u.a,
                  { interactive: !1, onPress: k },
                  o.a.createElement(s.b, { icon: a, landingUrl: c, rightControl: p, subtext: C, text: b }),
                )
              : o.a.createElement(s.b, { icon: a, landingUrl: c, rightControl: p, subtext: C, text: b })
          )
        },
        m = o.a.memo(d),
        b = { viewType: 'module_header' },
        f = r
          .b({
            component: m,
            defaultScribeNamespace: { element: 'header' },
            feedbackEntrySelector: function (e) {
              return e.content.timelineModule
            },
            shouldDisplayBorder: Object(a.a)(!1),
            getBehavioralEventContextOverride: function () {
              return b
            },
          })
          .getHandler()
      t.default = f
    },
  },
])
//# sourceMappingURL=WIPED
