;(window.webpackJsonp = window.webpackJsonp || []).push([
  [223],
  {
    '6vad': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return f
      })
      n('yH/f')
      var r = n('ERkP'),
        a = n.n(r),
        o = n('t62R'),
        l = n('EHV7'),
        c = n('rHpw'),
        i = c.a.create(function (e) {
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
        m = n('cm6r'),
        d = n('MWbm'),
        f = Object.freeze({ TopicFilled: 'TOPIC_FILLED' })
      var g = c.a.create(function (e) {
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
          b = e.rightControl,
          h = e.style,
          y = e.subtext,
          p = e.testID,
          C = e.text,
          x = (function (e) {
            switch (e) {
              case f.TopicFilled:
                return a.a.createElement(l.a, { style: i.icon })
              default:
                return null
            }
          })(t),
          E = y ? null : g.withSubtext,
          w = u.a.generate({
            backgroundColor: c.a.theme.colors.gray0,
            color: c.a.theme.colors.cellBackground,
            customFocusBackgroundColor: c.a.theme.colors.gray0,
            customHoverBackgroundColor: c.a.theme.colors.gray0,
            customPressedBackgroundColor: c.a.theme.colors.gray0,
          })
        return a.a.createElement(
          m.a,
          {
            interactiveStyles: n ? w : null,
            link: null == n ? void 0 : n.url,
            nativeID: r,
            style: [g.root, h],
            testID: p,
          },
          a.a.createElement(
            d.a,
            { accessibilityLevel: 2, accessibilityRole: 'heading', style: g.mainContent },
            a.a.createElement(d.a, { style: g.icon }, x),
            a.a.createElement(
              o.b,
              { numberOfLines: 3, size: 'headline1', style: E, weight: 'heavy', withHashflags: !0 },
              C,
            ),
            a.a.createElement(
              d.a,
              { style: g.rightControlGroup },
              n ? a.a.createElement(d.a, { style: E }, a.a.createElement(s.a, { style: g.iconArrow })) : null,
              b ? a.a.createElement(d.a, null, b) : null,
            ),
          ),
          y
            ? a.a.createElement(
                o.b,
                { color: 'gray700', numberOfLines: 2, size: 'subtext2', style: g.subtext, withHashflags: !0 },
                y,
              )
            : null,
        )
      }
    },
    RoyM: function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        a = n.n(r),
        o = (n('lTEL'), n('7x/C'), n('JtPf'), n('87if'), n('kYxP'), n('zb92')),
        l = Object(o.a)({
          loader: function () {
            return n.e(173).then(n.bind(null, 'ACNv'))
          },
        }),
        c = n('4bW+'),
        i = n('IG7M'),
        s = n('rHpw'),
        u = n('Irs7'),
        m = s.a.create(function (e) {
          return { curationControl: { marginStart: e.spaces.space20 } }
        })
      t.a = Object(u.a)(function (e) {
        var t = e.analytics,
          n = e.feedbackItems,
          r = e.isDisplayedOnMedia
        if (n && n.length > 0) {
          return a.a.createElement(i.a, {
            onClick: function () {
              return t.scribe({ element: 'caret', action: 'click' })
            },
            renderActionMenu: function (e) {
              return a.a.createElement(l, { actionItems: n, onClose: e })
            },
            style: m.curationControl,
            testID: c.a.caret,
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
        l = n.n(o),
        c = n('RoyM'),
        i = n('Irs7'),
        s = n('cm6r'),
        u = n('6vad'),
        m = function (e) {
          var t = e.entry,
            n = e.feedbackItems,
            r = t.content.header,
            a = r.icon,
            o = r.landingUrl,
            m = r.renderCustomControl,
            d = r.socialContext,
            f = r.text,
            g = Object(i.b)(),
            b = l.a.useCallback(
              function () {
                g.scribe({ element: 'header', action: 'click' })
              },
              [g],
            ),
            h = d && d.generalContext && d.generalContext.text,
            y = l.a.useMemo(
              function () {
                return m ? m() : l.a.createElement(c.a, { feedbackItems: n })
              },
              [n, m],
            )
          return (
            l.a.useEffect(function () {
              o && g.scribe({ element: 'header', action: 'impression' })
            }, []),
            o
              ? l.a.createElement(
                  s.a,
                  { interactive: !1, onPress: b },
                  l.a.createElement(u.b, { icon: a, landingUrl: o, rightControl: y, subtext: h, text: f }),
                )
              : l.a.createElement(u.b, { icon: a, landingUrl: o, rightControl: y, subtext: h, text: f })
          )
        },
        d = l.a.memo(m),
        f = { viewType: 'module_header' },
        g = r
          .b({
            component: d,
            defaultScribeNamespace: { element: 'header' },
            feedbackEntrySelector: function (e) {
              return e.content.timelineModule
            },
            shouldDisplayBorder: Object(a.a)(!1),
            getBehavioralEventContextOverride: function () {
              return f
            },
          })
          .getHandler()
      t.default = g
    },
  },
])
//# sourceMappingURL=WIPED
