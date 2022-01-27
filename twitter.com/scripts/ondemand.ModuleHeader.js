;(window.webpackJsonp = window.webpackJsonp || []).push([
  [214],
  {
    RoyM: function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        o = (n('JtPf'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('zb92')),
        a = Object(o.a)({
          loader: function () {
            return n.e(167).then(n.bind(null, 'ACNv'))
          },
        }),
        c = n('4bW+'),
        i = n('IG7M'),
        l = n('rHpw'),
        u = n('Irs7'),
        s = l.a.create(function (e) {
          return { curationControl: { marginStart: e.spaces.space20 } }
        })
      t.a = Object(u.a)(function (e) {
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
        l = function (e) {
          var t = e.entry,
            n = e.feedbackItems,
            r = t.content.header,
            o = r.icon,
            l = r.landingUrl,
            u = r.renderCustomControl,
            s = r.socialContext,
            d = r.text,
            f = s && s.generalContext && s.generalContext.text,
            m = a.useMemo(
              function () {
                return u ? u() : a.createElement(c.a, { feedbackItems: n })
              },
              [n, u],
            )
          return a.createElement(i.b, { icon: o, landingUrl: l, rightControl: m, subtext: f, text: d })
        },
        u = a.memo(l),
        s = { viewType: 'module_header' },
        d = r
          .b({
            component: u,
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
