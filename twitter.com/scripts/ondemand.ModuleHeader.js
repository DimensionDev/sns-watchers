;(window.webpackJsonp = window.webpackJsonp || []).push([
  [213],
  {
    RoyM: function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        c = (n('JtPf'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('zb92')),
        o = Object(c.a)({
          loader: function () {
            return n.e(167).then(n.bind(null, 'ACNv'))
          },
        }),
        a = n('4bW+'),
        i = n('IG7M'),
        u = n('rHpw'),
        l = n('Irs7'),
        s = u.a.create(function (e) {
          return { curationControl: { marginStart: e.spaces.space20 } }
        })
      t.a = Object(l.a)(function (e) {
        var t = e.analytics,
          n = e.feedbackItems,
          c = e.isDisplayedOnMedia
        if (n && n.length > 0) {
          return r.createElement(i.a, {
            onClick: function () {
              return t.scribe({ element: 'caret', action: 'click' })
            },
            renderActionMenu: function (e) {
              return r.createElement(o, { actionItems: n, onClose: e })
            },
            style: s.curationControl,
            testID: a.a.caret,
            withDarkBackground: c,
          })
        }
        return null
      })
    },
    oiEo: function (e, t, n) {
      'use strict'
      n.r(t)
      var r = n('ezF+'),
        c = n('ERkP'),
        o = n('VPAj'),
        a = n('RoyM'),
        i = n('RgK2'),
        u = n.n(i),
        l = n('6vad'),
        s = n('zh9S'),
        d = { viewType: 'module_header' },
        b = r.g({
          component: l.b,
          selectData: Object(o.a)(u.a),
          bindActions: function (e) {
            e.module
            return { scribe: s.c }
          },
          feedbackEntrySelector: function (e) {
            return e.content.timelineModule
          },
          createProps: function (e) {
            e.actions.scribe
            var t = e.entry,
              n = e.feedbackItems,
              r = (e.module.selectFeedbackActions, e.scribeNamespace, t.content.header),
              o = r.icon,
              i = r.renderCustomControl,
              u = r.socialContext,
              l = r.text,
              s = u && u.generalContext && u.generalContext.text,
              d = i ? i() : c.createElement(a.a, { feedbackItems: n })
            return s || l ? { icon: o, rightControl: d, subtext: s, text: l } : null
          },
          shouldDisplayBorder: Object(o.a)(!1),
          getBehavioralEventContextOverride: function () {
            return d
          },
        })
      t.default = b
    },
  },
])
//# sourceMappingURL=WIPED
