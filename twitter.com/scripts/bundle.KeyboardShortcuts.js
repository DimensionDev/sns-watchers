;(window.webpackJsonp = window.webpackJsonp || []).push([
  [64],
  {
    '5VcM': function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'KeyboardShortcutsScreen', function () {
          return I
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
        d = a('rxPX'),
        u = Object(d.a)()
          .propsFromState(function () {
            return {
              loggedInUserScreenName: Object(c.createSelector)(l.e.selectLoggedInUser, function (e) {
                return e ? e.screen_name : void 0
              }),
            }
          })
          .withAnalytics({ page: 'keyboard_shortcuts' }),
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
        x = a('OrGc'),
        E = y.a.dfef5ab8,
        P = y.a.h54e6137,
        j = y.a.aefd89c7,
        S = y.a.cafdefb1,
        O = y.a.add55c97,
        R = y.a.e95b9448,
        T = y.a.c106055a,
        I = function (e) {
          var t,
            a,
            r = e.history,
            s = e.location,
            c = e.loggedInUserScreenName,
            l = i.a.useContext(o.a),
            d = l.featureSwitches,
            u = l.userClaims,
            b = i.a.useContext(h.b).isModal,
            y =
              null === (t = s.state) || void 0 === t || null === (a = t.previousPath) || void 0 === a
                ? void 0
                : a.includes('/i/moment_maker'),
            k = i.a.useState(!1),
            w = n()(k, 2),
            I = w[0],
            _ = w[1]
          i.a.useEffect(
            function () {
              y && (_(!0), r.replace('/i/keyboard_shortcuts/moments'))
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
              { key: T, label: T, to: { pathname: '/i/keyboard_shortcuts/moments', state: s.state } },
              { key: R, label: R, to: { pathname: '/i/keyboard_shortcuts', state: s.state } },
            ],
            W = '/i/keyboard_shortcuts/moments' === s.pathname,
            L = Object(x.c)(d, u.isTrueAndEnabled('subscriptions_feature_1007')),
            Q = Object(x.a)(d),
            V = Object(x.b)(d),
            z = Object(m.a)(d),
            D = C(L),
            X = C(Q),
            A = C(V),
            B = C(z),
            F = W
              ? [{ headerText: void 0, shortcuts: B }]
              : [
                  { headerText: j, shortcuts: D },
                  { headerText: S, shortcuts: X },
                  { headerText: O, shortcuts: A },
                ]
          return i.a.createElement(
            p.b,
            { documentTitle: E, history: r, isLarge: !0, title: P },
            I ? i.a.createElement(f.a, { links: N }) : null,
            i.a.createElement(
              g.a,
              { style: [H.root, b && H.row] },
              F.map(function (e, t) {
                var a = e.headerText,
                  r = e.shortcuts,
                  n = t === F.length - 1,
                  s = F.length > 1
                return i.a.createElement(
                  g.a,
                  { key: t, style: [H.section, !n && !b && H.sectionBottomMargin] },
                  a ? i.a.createElement(v.b, { style: H.moduleHeader, text: a }) : null,
                  i.a.createElement(
                    g.a,
                    { accessibilityRole: 'table', style: !n && s && b && H.divider },
                    r.map(function (e, t) {
                      return i.a.createElement(M, { description: e.description, key: t, keys: e.keys })
                    }),
                  ),
                )
              }),
            ),
          )
        },
        M = function (e) {
          var t = e.description,
            a = e.keys.split(' ')
          return i.a.createElement(
            g.a,
            { accessibilityRole: 'row', style: H.entry },
            i.a.createElement(k.b, { accessibilityRole: 'cell' }, t),
            i.a.createElement(
              g.a,
              { accessibilityRole: 'cell', style: H.keyRow },
              a.map(function (e, t, a) {
                return i.a.createElement(
                  i.a.Fragment,
                  { key: t },
                  i.a.createElement(k.b, { align: 'center', style: H.key, withoutTwemojiAndHashflags: !0 }, e),
                  t !== a.length - 1 ? i.a.createElement(k.b, { style: H.plus }, '+') : null,
                )
              }),
            ),
          )
        },
        H = w.a.create(function (e) {
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
        _ = u(I)
      t.default = _
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
