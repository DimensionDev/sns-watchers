;(window.webpackJsonp = window.webpackJsonp || []).push([
  [62],
  {
    '5VcM': function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'KeyboardShortcutsScreen', function () {
          return H
        })
      var r = a('ddV6'),
        n = a.n(r),
        s =
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
        i = a.n(s),
        o = a('v6aA'),
        c = a('hqKg'),
        l = a('G6rE'),
        d = a('oEGd'),
        u = Object(c.createSelector)(l.e.selectLoggedInUser, function (e) {
          return { loggedInUserScreenName: e && e.screen_name }
        }),
        p = Object(d.c)(u),
        m = a('jHSc'),
        b = a('ObVQ'),
        y = a('3XMw'),
        g = a.n(y),
        h = a('MWbm'),
        f = a('7N4s'),
        v = a('k/OQ'),
        k = a('6vad'),
        w = a('t62R'),
        x = a('rHpw'),
        E = a('7JQg'),
        P = a('OrGc'),
        j = g.a.dfef5ab8,
        O = g.a.h54e6137,
        R = g.a.aefd89c7,
        S = g.a.cafdefb1,
        T = g.a.add55c97,
        I = g.a.e95b9448,
        M = g.a.c106055a,
        H = function (e) {
          var t,
            a,
            r = e.history,
            s = e.location,
            c = e.loggedInUserScreenName,
            l = i.a.useContext(o.a),
            d = l.featureSwitches,
            u = l.userClaims,
            p = i.a.useContext(f.b).isModal,
            y =
              null === (t = s.state) || void 0 === t || null === (a = t.previousPath) || void 0 === a
                ? void 0
                : a.includes('/i/moment_maker'),
            g = i.a.useState(!1),
            w = n()(g, 2),
            x = w[0],
            E = w[1]
          i.a.useEffect(
            function () {
              y && (E(!0), r.replace('/i/keyboard_shortcuts/moments'))
            },
            [r, y],
          )
          var H = function (e) {
              return c
                ? e
                : e.filter(function (e) {
                    return e && e.universal
                  })
            },
            N = [
              { key: M, label: M, to: { pathname: '/i/keyboard_shortcuts/moments', state: s.state } },
              { key: I, label: I, to: { pathname: '/i/keyboard_shortcuts', state: s.state } },
            ],
            Q = '/i/keyboard_shortcuts/moments' === s.pathname,
            W = Object(P.c)(d, u.isTrueAndEnabled('subscriptions_feature_1007')),
            L = Object(P.a)(d),
            V = Object(P.b)(d),
            z = Object(b.a)(d),
            D = H(W),
            B = H(L),
            G = H(V),
            K = H(z),
            U = Q
              ? [{ headerText: void 0, shortcuts: K }]
              : [
                  { headerText: R, shortcuts: D },
                  { headerText: S, shortcuts: B },
                  { headerText: T, shortcuts: G },
                ]
          return i.a.createElement(
            m.b,
            { documentTitle: j, history: r, isLarge: !0, title: O },
            x ? i.a.createElement(v.a, { links: N }) : null,
            i.a.createElement(
              h.a,
              { style: [C.root, p && C.row] },
              U.map(function (e, t) {
                var a = e.headerText,
                  r = e.shortcuts,
                  n = t === U.length - 1,
                  s = U.length > 1
                return i.a.createElement(
                  h.a,
                  { key: t, style: [C.section, !n && !p && C.sectionBottomMargin] },
                  a ? i.a.createElement(k.b, { style: C.moduleHeader, text: a }) : null,
                  i.a.createElement(
                    h.a,
                    { accessibilityRole: 'table', style: !n && s && p && C.divider },
                    r.map(function (e, t) {
                      return i.a.createElement(_, { description: e.description, key: t, keys: e.keys })
                    }),
                  ),
                )
              }),
            ),
          )
        },
        _ = function (e) {
          var t = e.description,
            a = e.keys.split(' ')
          return i.a.createElement(
            h.a,
            { accessibilityRole: 'row', style: C.entry },
            i.a.createElement(w.b, { accessibilityRole: 'cell' }, t),
            i.a.createElement(
              h.a,
              { accessibilityRole: 'cell', style: C.keyRow },
              a.map(function (e, t, a) {
                return i.a.createElement(
                  i.a.Fragment,
                  { key: t },
                  i.a.createElement(w.b, { align: 'center', style: C.key, withoutTwemojiAndHashflags: !0 }, e),
                  t !== a.length - 1 ? i.a.createElement(w.b, { style: C.plus }, '+') : null,
                )
              }),
            ),
          )
        },
        C = x.a.create(function (e) {
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
      t.default = Object(E.c)({ page: 'keyboard_shortcuts' })(p(H))
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
