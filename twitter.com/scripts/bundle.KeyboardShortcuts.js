;(window.webpackJsonp = window.webpackJsonp || []).push([
  [60],
  {
    '5VcM': function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'KeyboardShortcutsScreen', function () {
          return O
        })
      var r = a('ddV6'),
        n = a.n(r),
        i =
          (a('jQ3i'),
          a('x4t0'),
          a('KqXw'),
          a('MvUL'),
          a('LW0h'),
          a('7x/C'),
          a('z84I'),
          a('1t7P'),
          a('jQ/y'),
          a('lTEL'),
          a('kYxP'),
          a('Ysgh'),
          a('uFXj'),
          a('ERkP')),
        o = a.n(i),
        s = a('v6aA'),
        c = a('hqKg'),
        l = a('G6rE'),
        u = a('rxPX'),
        d = Object(u.a)()
          .propsFromState(function () {
            return {
              loggedInUserScreenName: Object(c.createSelector)(l.e.selectLoggedInUser, function (e) {
                return e ? e.screen_name : void 0
              }),
            }
          })
          .withAnalytics({ page: 'keyboard_shortcuts' }),
        m = a('jHSc'),
        p = a('ObVQ'),
        g = a('3XMw'),
        y = a.n(g),
        b = a('MWbm'),
        f = a('7N4s'),
        h = a('k/OQ'),
        v = a('6vad'),
        w = a('t62R'),
        k = a('rHpw'),
        x = a('OrGc'),
        E = y.a.dfef5ab8,
        S = y.a.h54e6137,
        P = y.a.aefd89c7,
        C = y.a.cafdefb1,
        j = y.a.add55c97,
        I = y.a.e95b9448,
        H = y.a.c106055a,
        O = function (e) {
          var t,
            a,
            r = e.history,
            i = e.location,
            c = e.loggedInUserScreenName,
            l = o.a.useContext(s.a),
            u = l.featureSwitches,
            d = l.userClaims,
            g = o.a.useContext(f.b).isModal,
            y =
              null === (t = i.state) || void 0 === t || null === (a = t.previousPath) || void 0 === a
                ? void 0
                : a.includes('/i/moment_maker'),
            w = o.a.useState(!1),
            k = n()(w, 2),
            O = k[0],
            D = k[1]
          o.a.useEffect(
            function () {
              y && (D(!0), r.replace('/i/keyboard_shortcuts/moments'))
            },
            [r, y],
          )
          var z = function (e) {
              return c
                ? e
                : e.filter(function (e) {
                    return e && e.universal
                  })
            },
            M = [
              { key: H, label: H, to: { pathname: '/i/keyboard_shortcuts/moments', state: i.state } },
              { key: I, label: I, to: { pathname: '/i/keyboard_shortcuts', state: i.state } },
            ],
            L = '/i/keyboard_shortcuts/moments' === i.pathname,
            _ = Object(x.c)(u, d.isTrueAndEnabled('subscriptions_feature_1007')),
            V = Object(x.a)(u),
            B = Object(x.b)(u),
            F = Object(p.a)(u),
            W = z(_),
            N = z(V),
            A = z(B),
            G = z(F),
            Q = L
              ? [{ headerText: void 0, shortcuts: G }]
              : [
                  { headerText: P, shortcuts: W },
                  { headerText: C, shortcuts: N },
                  { headerText: j, shortcuts: A },
                ]
          return o.a.createElement(
            m.b,
            { documentTitle: E, history: r, isLarge: !0, title: S },
            O ? o.a.createElement(h.a, { links: M }) : null,
            o.a.createElement(
              b.a,
              { style: [T.root, g && T.row] },
              Q.map(function (e, t) {
                var a = e.headerText,
                  r = e.shortcuts,
                  n = t === Q.length - 1,
                  i = Q.length > 1
                return o.a.createElement(
                  b.a,
                  { key: t, style: [T.section, !n && !g && T.sectionBottomMargin] },
                  a ? o.a.createElement(v.b, { style: T.moduleHeader, text: a }) : null,
                  o.a.createElement(
                    b.a,
                    { accessibilityRole: 'table', style: !n && i && g && T.divider },
                    r.map(function (e, t) {
                      return o.a.createElement(R, { description: e.description, key: t, keys: e.keys })
                    }),
                  ),
                )
              }),
            ),
          )
        },
        R = function (e) {
          var t = e.description,
            a = e.keys.split(' ')
          return o.a.createElement(
            b.a,
            { accessibilityRole: 'row', style: T.entry },
            o.a.createElement(w.b, { accessibilityRole: 'cell' }, t),
            o.a.createElement(
              b.a,
              { accessibilityRole: 'cell', style: T.keyRow },
              a.map(function (e, t, a) {
                return o.a.createElement(
                  o.a.Fragment,
                  { key: t },
                  o.a.createElement(w.b, { align: 'center', style: T.key, withoutTwemojiAndHashflags: !0 }, e),
                  t !== a.length - 1 ? o.a.createElement(w.b, { style: T.plus }, '+') : null,
                )
              }),
            ),
          )
        },
        T = k.a.create(function (e) {
          return {
            root: { padding: e.spaces.space12, paddingBottom: e.spaces.space20 },
            row: { flexDirection: 'row' },
            keyRow: { flexDirection: 'row', alignItems: 'center' },
            section: { flexShrink: 1 },
            sectionBottomMargin: { marginBottom: e.spaces.space12 },
            divider: {
              borderStyle: 'solid',
              borderRightWidth: e.borderWidths.small,
              borderColor: e.colors.gray50,
              paddingRight: e.spaces.space12,
              marginRight: e.spaces.space12,
            },
            entry: {
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: e.spaces.space12,
              marginVertical: e.spaces.space2,
            },
            key: {
              backgroundColor: e.colors.gray0,
              borderColor: e.colors.gray50,
              borderRadius: e.borderRadii.small,
              borderStyle: 'solid',
              borderWidth: e.borderWidths.small,
              boxShadow: 'inset 0 -1px 0 '.concat(e.colors.gray200),
              fontFamily: 'monospace, monospace',
              minWidth: '1.7em',
              paddingHorizontal: e.spaces.space4,
              paddingVertical: e.spaces.space1,
            },
            plus: { marginHorizontal: e.spaces.space2 },
            moduleHeader: { paddingLeft: e.spaces.space12 },
          }
        }),
        D = d(O)
      t.default = D
    },
    '6vad': function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return p
      })
      a('yH/f')
      var r = a('ERkP'),
        n = a.n(r),
        i = a('t62R'),
        o = a('EHV7'),
        s = a('rHpw'),
        c = s.a.create(function (e) {
          return {
            icon: {
              color: e.colors.primary,
              height: e.fontSizes.title4,
              paddingRight: e.spaces.space12,
              width: e.fontSizes.title4,
            },
          }
        }),
        l = a('7Mjr'),
        u = a('I4+6'),
        d = a('cm6r'),
        m = a('MWbm'),
        p = Object.freeze({ TopicFilled: 'TOPIC_FILLED' })
      var g = s.a.create(function (e) {
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
          a = e.landingUrl,
          r = e.nativeID,
          y = e.rightControl,
          b = e.style,
          f = e.subtext,
          h = e.testID,
          v = e.text,
          w = (function (e) {
            switch (e) {
              case p.TopicFilled:
                return n.a.createElement(o.a, { style: c.icon })
              default:
                return null
            }
          })(t),
          k = f ? null : g.withSubtext,
          x = u.a.generate({
            backgroundColor: s.a.theme.colors.gray0,
            color: s.a.theme.colors.cellBackground,
            customFocusBackgroundColor: s.a.theme.colors.gray0,
            customHoverBackgroundColor: s.a.theme.colors.gray0,
            customPressedBackgroundColor: s.a.theme.colors.gray0,
          })
        return n.a.createElement(
          d.a,
          {
            interactiveStyles: a ? x : null,
            link: null == a ? void 0 : a.url,
            nativeID: r,
            style: [g.root, b],
            testID: h,
          },
          n.a.createElement(
            m.a,
            { accessibilityLevel: 2, accessibilityRole: 'heading', style: g.mainContent },
            n.a.createElement(m.a, { style: g.icon }, w),
            n.a.createElement(
              i.b,
              { numberOfLines: 3, size: 'headline1', style: k, weight: 'heavy', withHashflags: !0 },
              v,
            ),
            n.a.createElement(
              m.a,
              { style: g.rightControlGroup },
              a ? n.a.createElement(m.a, { style: k }, n.a.createElement(l.a, { style: g.iconArrow })) : null,
              y ? n.a.createElement(m.a, null, y) : null,
            ),
          ),
          f
            ? n.a.createElement(
                i.b,
                { color: 'gray700', numberOfLines: 2, size: 'subtext2', style: g.subtext, withHashflags: !0 },
                f,
              )
            : null,
        )
      }
    },
    ObVQ: function (e, t, a) {
      'use strict'
      a.d(t, 'b', function () {
        return s
      }),
        a.d(t, 'a', function () {
          return c
        })
      a('yH/f')
      var r = a('3XMw'),
        n = a.n(r),
        i = a('oQhu'),
        o = a('OrGc'),
        s = Object.freeze({
          editingPanelNextItem: 'w',
          editingPanelPreviousItem: 'q',
          rightEditingPreviewPanel: 'g t',
          leftNavigationMenuPanel: 'g o',
          tweetDiscoveryPanel: 'g x',
          addTweet: 'i t',
          removeTweet: 'd t',
        }),
        c = Object(i.a)(function (e) {
          return [
            { description: n.a.d5696fcb, keys: o.e.openKeyboardShortcuts, universal: !0 },
            { description: n.a.e814ed10, keys: s.editingPanelNextItem, universal: !0 },
            { description: n.a.c1250b41, keys: s.editingPanelPreviousItem, universal: !0 },
            { description: n.a.ddd4bf24, keys: o.e.nextItem, universal: !0 },
            { description: n.a.ia2742f9, keys: o.e.previousItem, universal: !0 },
            { description: n.a.a8b6f61a, keys: 'space', universal: !1 },
            { description: n.a.dfe59ab8, keys: 'esc', universal: !1 },
            { description: n.a.c602967d, keys: s.rightEditingPreviewPanel, universal: !1 },
            { description: n.a.g42208cb, keys: s.leftNavigationMenuPanel, universal: !1 },
            { description: n.a.gf73b335, keys: s.tweetDiscoveryPanel, universal: !1 },
            { description: n.a.g45af04e, keys: s.addTweet, universal: !1 },
            { description: n.a.ee9c4013, keys: s.removeTweet, universal: !1 },
          ]
        })
    },
  },
])
//# sourceMappingURL=WIPED
