;(window.webpackJsonp = window.webpackJsonp || []).push([
  [219],
  {
    '6vad': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return m
      })
      n('yH/f')
      var r = n('ERkP'),
        o = n.n(r),
        a = n('t62R'),
        l = n('EHV7'),
        i = n('rHpw'),
        c = i.a.create(function (e) {
          return {
            icon: {
              color: e.colors.primary,
              height: e.fontSizes.title4,
              paddingRight: e.spaces.space12,
              width: e.fontSizes.title4,
            },
          }
        }),
        s = n('7Mjr'),
        u = n('I4+6'),
        g = n('cm6r'),
        f = n('MWbm'),
        m = Object.freeze({ TopicFilled: 'TOPIC_FILLED' })
      var d = i.a.create(function (e) {
        return {
          root: {
            justifyContent: 'space-between',
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.componentDimensions.gutterVertical,
          },
          mainContent: { flexDirection: 'row' },
          subtext: { alignSelf: 'flex-start' },
          withSubtext: { alignSelf: 'center' },
          icon: { alignSelf: 'flex-start', height: e.spaces.space20, justifyContent: 'center' },
          iconArrow: { color: e.colors.text },
          rightControlGroup: { flexDirection: 'row', justifyContent: 'flex-end', flexGrow: 1, alignSelf: 'center' },
        }
      })
      t.b = function (e) {
        var t = e.icon,
          n = e.landingUrl,
          r = e.nativeID,
          h = e.rightControl,
          y = e.style,
          p = e.subtext,
          b = e.testID,
          w = e.text,
          x = (function (e) {
            switch (e) {
              case m.TopicFilled:
                return o.a.createElement(l.a, { style: c.icon })
              default:
                return null
            }
          })(t),
          v = p ? null : d.withSubtext,
          E = u.a.generate({
            backgroundColor: i.a.theme.colors.gray0,
            color: i.a.theme.colors.cellBackground,
            customFocusBackgroundColor: i.a.theme.colors.gray0,
            customHoverBackgroundColor: i.a.theme.colors.gray0,
            customPressedBackgroundColor: i.a.theme.colors.gray0,
          })
        return o.a.createElement(
          g.a,
          {
            interactiveStyles: n ? E : null,
            link: null == n ? void 0 : n.url,
            nativeID: r,
            style: [d.root, y],
            testID: b,
          },
          o.a.createElement(
            f.a,
            { accessibilityLevel: 2, accessibilityRole: 'heading', style: d.mainContent },
            o.a.createElement(f.a, { style: d.icon }, x),
            o.a.createElement(
              a.b,
              { numberOfLines: 3, size: 'headline1', style: v, weight: 'heavy', withHashflags: !0 },
              w,
            ),
            o.a.createElement(
              f.a,
              { style: d.rightControlGroup },
              n ? o.a.createElement(f.a, { style: v }, o.a.createElement(s.a, { style: d.iconArrow })) : null,
              h ? o.a.createElement(f.a, null, h) : null,
            ),
          ),
          p
            ? o.a.createElement(
                a.b,
                { color: 'gray700', numberOfLines: 2, size: 'subtext2', style: d.subtext, withHashflags: !0 },
                p,
              )
            : null,
        )
      }
    },
    rtVL: function (e, t, n) {
      'use strict'
      n.r(t)
      var r = n('ezF+'),
        o = (n('ERkP'), n('6vad')),
        a = r.g({
          divider: { top: !0, bottom: !1 },
          component: o.b,
          createProps: function (e) {
            var t = e.entry.content,
              n = t.subtext
            return { text: t.text, subtext: n }
          },
        })
      t.default = a
    },
  },
])
//# sourceMappingURL=WIPED
