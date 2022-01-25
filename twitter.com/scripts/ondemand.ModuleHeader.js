;(window.webpackJsonp = window.webpackJsonp || []).push([
  [212],
  {
    RoyM: function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        o = (n('JtPf'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('zb92')),
        a = Object(o.a)({
          loader: function () {
            return n.e(166).then(n.bind(null, 'ACNv'))
          },
        }),
        c = n('4bW+'),
        i = n('IG7M'),
        u = n('rHpw'),
        l = n('Irs7'),
        s = u.a.create(function (e) {
          return { curationControl: { marginStart: e.spaces.space20 } }
        })
      t.a = Object(l.a)(function (e) {
        var t = e.analytics,
          n = e.feedbackItems,
          o = e.isDisplayedOnMedia
        if (n && n.length > 0) {
          return r.createElement(i.a, {
            onClick: function () {
              return t.scribe({ element: 'caret', action: 'click' })
            },
            renderActionMenu: function (e) {
              return r.createElement(a, { actionItems: n, onClose: e })
            },
            style: s.curationControl,
            testID: c.a.caret,
            withDarkBackground: o,
          })
        }
        return null
      })
    },
    oiEo: function (e, t, n) {
      'use strict'
      n.r(t)
      var r = n('ezF+'),
        o = n('VPAj'),
        a = n('ERkP'),
        c = n('RoyM'),
        i = n('6vad'),
        u = function (e) {
          var t = e.entry,
            n = e.feedbackItems,
            r = t.content.header,
            o = r.icon,
            u = r.renderCustomControl,
            l = r.socialContext,
            s = r.text,
            d = l && l.generalContext && l.generalContext.text,
            f = a.useMemo(
              function () {
                return u ? u() : a.createElement(c.a, { feedbackItems: n })
              },
              [n, u],
            )
          return a.createElement(i.b, { icon: o, rightControl: f, subtext: d, text: s })
        },
        l = a.memo(u),
        s = { viewType: 'module_header' },
        d = r
          .b({
            component: l,
            feedbackEntrySelector: function (e) {
              return e.content.timelineModule
            },
            shouldDisplayBorder: Object(o.a)(!1),
            getBehavioralEventContextOverride: function () {
              return s
            },
          })
          .getHandler()
      t.default = d
    },
  },
])
//# sourceMappingURL=WIPED
