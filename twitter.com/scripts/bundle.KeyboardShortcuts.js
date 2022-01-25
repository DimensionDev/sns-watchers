;(window.webpackJsonp = window.webpackJsonp || []).push([
  [58],
  {
    '5VcM': function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'KeyboardShortcutsScreen', function () {
          return M
        })
      var r = a('ddV6'),
        n = a.n(r),
        s =
          (a('jQ3i'),
          a('x4t0'),
          a('MvUL'),
          a('KqXw'),
          a('LW0h'),
          a('z84I'),
          a('1t7P'),
          a('jQ/y'),
          a('7x/C'),
          a('lTEL'),
          a('kYxP'),
          a('Ysgh'),
          a('uFXj'),
          a('ERkP')),
        i = a('v6aA'),
        o = a('hqKg'),
        c = a('G6rE'),
        l = a('oEGd'),
        d = Object(o.createSelector)(c.e.selectLoggedInUser, function (e) {
          return { loggedInUserScreenName: e && e.screen_name }
        }),
        u = Object(l.c)(d),
        p = a('jHSc'),
        m = a('ObVQ'),
        b = a('3XMw'),
        y = a.n(b),
        g = a('MWbm'),
        h = a('7N4s'),
        f = a('k/OQ'),
        v = a('6vad'),
        k = a('t62R'),
        w = a('rHpw'),
        x = a('7JQg'),
        E = a('OrGc'),
        P = y.a.dfef5ab8,
        j = y.a.h54e6137,
        O = y.a.aefd89c7,
        R = y.a.cafdefb1,
        S = y.a.add55c97,
        T = y.a.e95b9448,
        I = y.a.c106055a,
        M = function (e) {
          var t,
            a,
            r = e.history,
            o = e.location,
            c = e.loggedInUserScreenName,
            l = s.useContext(i.a),
            d = l.featureSwitches,
            u = l.userClaims,
            b = s.useContext(h.b).isModal,
            y =
              null === (t = o.state) || void 0 === t || null === (a = t.previousPath) || void 0 === a
                ? void 0
                : a.includes('/i/moment_maker'),
            k = s.useState(!1),
            w = n()(k, 2),
            x = w[0],
            M = w[1]
          s.useEffect(
            function () {
              y && (M(!0), r.replace('/i/keyboard_shortcuts/moments'))
            },
            [r, y],
          )
          var C = function (e) {
              return c
                ? e
                : e.filter(function (e) {
                    return e && e.universal
                  })
            },
            N = [
              { key: I, label: I, to: { pathname: '/i/keyboard_shortcuts/moments', state: o.state } },
              { key: T, label: T, to: { pathname: '/i/keyboard_shortcuts', state: o.state } },
            ],
            Q = '/i/keyboard_shortcuts/moments' === o.pathname,
            W = Object(E.c)(d, u.isTrueAndEnabled('subscriptions_feature_1007')),
            L = Object(E.a)(d),
            V = Object(E.b)(d),
            z = Object(m.a)(d),
            D = C(W),
            B = C(L),
            G = C(V),
            K = C(z),
            U = Q
              ? [{ headerText: void 0, shortcuts: K }]
              : [
                  { headerText: O, shortcuts: D },
                  { headerText: R, shortcuts: B },
                  { headerText: S, shortcuts: G },
                ]
          return s.createElement(
            p.b,
            { documentTitle: P, history: r, isLarge: !0, title: j },
            x ? s.createElement(f.a, { links: N }) : null,
            s.createElement(
              g.a,
              { style: [_.root, b && _.row] },
              U.map(function (e, t) {
                var a = e.headerText,
                  r = e.shortcuts,
                  n = t === U.length - 1,
                  i = U.length > 1
                return s.createElement(
                  g.a,
                  { key: t, style: [_.section, !n && !b && _.sectionBottomMargin] },
                  a ? s.createElement(v.b, { style: _.moduleHeader, text: a }) : null,
                  s.createElement(
                    g.a,
                    { accessibilityRole: 'table', style: !n && i && b && _.divider },
                    r.map(function (e, t) {
                      return s.createElement(H, { description: e.description, key: t, keys: e.keys })
                    }),
                  ),
                )
              }),
            ),
          )
        },
        H = function (e) {
          var t = e.description,
            a = e.keys.split(' ')
          return s.createElement(
            g.a,
            { accessibilityRole: 'row', style: _.entry },
            s.createElement(k.b, { accessibilityRole: 'cell' }, t),
            s.createElement(
              g.a,
              { accessibilityRole: 'cell', style: _.keyRow },
              a.map(function (e, t, a) {
                return s.createElement(
                  s.Fragment,
                  { key: t },
                  s.createElement(k.b, { align: 'center', style: _.key, withoutTwemojiAndHashflags: !0 }, e),
                  t !== a.length - 1 ? s.createElement(k.b, { style: _.plus }, '+') : null,
                )
              }),
            ),
          )
        },
        _ = w.a.create(function (e) {
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
        })
      t.default = Object(x.c)({ page: 'keyboard_shortcuts' })(u(M))
    },
    ObVQ: function (e, t, a) {
      'use strict'
      a.d(t, 'b', function () {
        return o
      }),
        a.d(t, 'a', function () {
          return c
        })
      a('yH/f')
      var r = a('3XMw'),
        n = a.n(r),
        s = a('oQhu'),
        i = a('OrGc'),
        o = Object.freeze({
          editingPanelNextItem: 'w',
          editingPanelPreviousItem: 'q',
          rightEditingPreviewPanel: 'g t',
          leftNavigationMenuPanel: 'g o',
          tweetDiscoveryPanel: 'g x',
          addTweet: 'i t',
          removeTweet: 'd t',
        }),
        c = Object(s.a)(function (e) {
          return [
            { description: n.a.d5696fcb, keys: i.e.openKeyboardShortcuts, universal: !0 },
            { description: n.a.e814ed10, keys: o.editingPanelNextItem, universal: !0 },
            { description: n.a.c1250b41, keys: o.editingPanelPreviousItem, universal: !0 },
            { description: n.a.ddd4bf24, keys: i.e.nextItem, universal: !0 },
            { description: n.a.ia2742f9, keys: i.e.previousItem, universal: !0 },
            { description: n.a.a8b6f61a, keys: 'space', universal: !1 },
            { description: n.a.dfe59ab8, keys: 'esc', universal: !1 },
            { description: n.a.c602967d, keys: o.rightEditingPreviewPanel, universal: !1 },
            { description: n.a.g42208cb, keys: o.leftNavigationMenuPanel, universal: !1 },
            { description: n.a.gf73b335, keys: o.tweetDiscoveryPanel, universal: !1 },
            { description: n.a.g45af04e, keys: o.addTweet, universal: !1 },
            { description: n.a.ee9c4013, keys: o.removeTweet, universal: !1 },
          ]
        })
    },
  },
])
//# sourceMappingURL=WIPED
