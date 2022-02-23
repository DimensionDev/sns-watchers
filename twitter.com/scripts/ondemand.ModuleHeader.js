;(window.webpackJsonp = window.webpackJsonp || []).push([
  [222],
  {
    RoyM: function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        a = n.n(r),
        c = (n('lTEL'), n('7x/C'), n('JtPf'), n('87if'), n('kYxP'), n('zb92')),
        o = Object(c.a)({
          loader: function () {
            return n.e(174).then(n.bind(null, 'ACNv'))
          },
        }),
        i = n('4bW+'),
        s = n('IG7M'),
        l = n('rHpw'),
        u = n('Irs7'),
        d = l.a.create(function (e) {
          return { curationControl: { marginStart: e.spaces.space20 } }
        })
      t.a = Object(u.a)(function (e) {
        var t = e.analytics,
          n = e.feedbackItems,
          r = e.isDisplayedOnMedia
        if (n && n.length > 0) {
          return a.a.createElement(s.a, {
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
      var r = n('yiKp'),
        a = n.n(r),
        c = n('ezF+'),
        o = n('ERkP'),
        i = n.n(o),
        s = n('VPAj'),
        l = n('zh9S'),
        u = n('RoyM'),
        d = n('cm6r'),
        m = n('6vad'),
        b = function (e) {
          var t = e.entry,
            n = e.feedbackItems,
            r = e.onPress,
            a = t.content.header,
            c = a.icon,
            o = a.landingUrl,
            s = a.renderCustomControl,
            l = a.socialContext,
            b = a.text,
            f = l && l.generalContext && l.generalContext.text,
            p = i.a.useMemo(
              function () {
                return s ? s() : i.a.createElement(u.a, { feedbackItems: n })
              },
              [n, s],
            )
          return o
            ? i.a.createElement(
                d.a,
                { interactive: !1, onPress: r },
                i.a.createElement(m.b, { icon: c, landingUrl: o, rightControl: p, subtext: f, text: b }),
              )
            : i.a.createElement(m.b, { icon: c, landingUrl: o, rightControl: p, subtext: f, text: b })
        },
        f = i.a.memo(b),
        p = { viewType: 'module_header' },
        h = c.g({
          shouldDisplayBorder: Object(s.a)(!1),
          component: f,
          bindActions: Object(s.a)({ scribe: l.c }),
          createProps: function (e) {
            var t = e.actions.scribe,
              n = e.entry,
              r = e.module,
              c = e.scribeNamespace
            return {
              entry: n,
              onPress: function () {
                t(a()(a()({}, c), {}, { element: 'header', action: 'click' }))
              },
              module: r,
            }
          },
          defaultScribeNamespace: { element: 'header' },
          isFocusable: Object(s.a)(!0),
          getBehavioralEventContextOverride: function () {
            return p
          },
          onImpression: function (e) {
            var t = e.actions.scribe,
              n = e.entry,
              r = e.scribeNamespace
            n.content.header.landingUrl && t(a()(a()({}, r), {}, { element: 'header', action: 'impression' }))
          },
        })
      t.default = h
    },
  },
])
//# sourceMappingURL=WIPED
