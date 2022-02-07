;(window.webpackJsonp = window.webpackJsonp || []).push([
  [219],
  {
    RoyM: function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        a = n.n(r),
        o = (n('lTEL'), n('7x/C'), n('JtPf'), n('87if'), n('kYxP'), n('zb92')),
        c = Object(o.a)({
          loader: function () {
            return n.e(171).then(n.bind(null, 'ACNv'))
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
              return a.a.createElement(c, { actionItems: n, onClose: e })
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
        o = n('ERkP'),
        c = n.n(o),
        i = n('RoyM'),
        l = n('6vad'),
        u = function (e) {
          var t = e.entry,
            n = e.feedbackItems,
            r = t.content.header,
            a = r.icon,
            o = r.landingUrl,
            u = r.renderCustomControl,
            s = r.socialContext,
            d = r.text,
            f = s && s.generalContext && s.generalContext.text,
            m = c.a.useMemo(
              function () {
                return u ? u() : c.a.createElement(i.a, { feedbackItems: n })
              },
              [n, u],
            )
          return c.a.createElement(l.b, { icon: a, landingUrl: o, rightControl: m, subtext: f, text: d })
        },
        s = c.a.memo(u),
        d = { viewType: 'module_header' },
        f = r
          .b({
            component: s,
            feedbackEntrySelector: function (e) {
              return e.content.timelineModule
            },
            shouldDisplayBorder: Object(a.a)(!1),
            getBehavioralEventContextOverride: function () {
              return d
            },
          })
          .getHandler()
      t.default = f
    },
  },
])
//# sourceMappingURL=WIPED
