;(window.webpackJsonp = window.webpackJsonp || []).push([
  [169],
  {
    '0kTQ': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return u
      })
      var a,
        i = n('KEM+'),
        r = n.n(i),
        o = n('k49u'),
        l = n('LVU8'),
        c = n('3XMw'),
        s = n.n(c).a.b20a3893,
        u =
          ((a = {}),
          r()(a, o.a.AppInReadOnlyMode, { customAction: l.b }),
          r()(a, o.a.TargetUserNotFound, { toast: { text: s } }),
          r()(a, 'showToast', !0),
          a)
    },
    Ddqr: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        i = n.n(a),
        r = n('VrFO'),
        o = n.n(r),
        l = n('Y9Ll'),
        c = n.n(l),
        s = n('1Pcy'),
        u = n.n(s),
        d = n('5Yy7'),
        m = n.n(d),
        f = n('2VqO'),
        h = n.n(f),
        p = n('KEM+'),
        b = n.n(p),
        _ = (n('uFXj'), n('ERkP')),
        g = n.n(_),
        C = n('38/B'),
        w = n('xKuM'),
        y = n('/yvb'),
        E = n('w9LO'),
        k = n('3XMw'),
        v = n.n(k),
        M = n('hOZg'),
        A = n('0FVZ'),
        S = n('rHpw'),
        O = n('k/Ka'),
        T = n('shC7'),
        L = n('MWbm'),
        D = v.a.af8fa2ad,
        P = g.a.createElement(M.a, null),
        x = (function (e) {
          m()(n, e)
          var t = h()(n)
          function n(e) {
            var a
            return (
              o()(this, n),
              (a = t.call(this)),
              b()(u()(a), '_isMounted', !0),
              b()(u()(a), '_setAnimationNode', function (e) {
                a._animationNode = e
              }),
              b()(u()(a), '_handleTransitionEnd', function (e) {
                !1 === a.state.isVisible &&
                  e.target instanceof window.HTMLElement &&
                  e.target === a._animationNode &&
                  a.props.onDismissed()
              }),
              b()(u()(a), '_handleMaskClick', function () {
                a._handleDismiss()
              }),
              b()(u()(a), '_handleEsc', function (e) {
                var t = e.altKey,
                  n = e.ctrlKey,
                  i = e.key,
                  r = e.metaKey
                !(t || n || r) && 'Escape' === i && a._handleDismiss()
              }),
              b()(u()(a), '_handleDismiss', function () {
                a.setState({ isVisible: !1 }), C.a.reducedMotionEnabled && a.props.onDismissed()
              }),
              (a.state = { isVisible: !1 }),
              a
            )
          }
          return (
            c()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this
                  window.requestAnimationFrame(function () {
                    e._isMounted && e.setState({ isVisible: !0 })
                  })
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._isMounted = !1
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.additionalControl,
                    n = e.align,
                    a = e.buttonType,
                    i = e.children,
                    r = e.style,
                    o = e.subtitle,
                    l = e.title,
                    c = this.state.isVisible,
                    s = c
                      ? I.visibleDrawer
                      : ('left' === n) === T.a.getConstants().isRTL
                      ? I.offscreenRightDrawer
                      : I.offscreenLeftDrawer,
                    u = c ? I.maskWithBg : I.maskTransparent,
                    d = c ? I.animateOpen : I.animateClose,
                    m = C.a.reducedMotionEnabled ? null : d
                  return g.a.createElement(
                    A.a.Modal,
                    null,
                    g.a.createElement(
                      E.a,
                      { withKeyboardNavigation: !0 },
                      g.a.createElement(
                        L.a,
                        {
                          onClick: this._handleMaskClick,
                          onKeyUp: this._handleEsc,
                          style: [I.mask, u, m, 'left' === n ? I.alignLeft : I.alignRight],
                        },
                        Object(O.a)('div', {
                          accessibilityRole: 'dialog',
                          onTransitionEnd: this._handleTransitionEnd,
                          ref: this._setAnimationNode,
                          onClick: U,
                          style: [I.root, s, m, r],
                          children: g.a.createElement(
                            g.a.Fragment,
                            null,
                            g.a.createElement(w.a, {
                              leftControl: 'left' === n ? t : 'right' === n ? this._renderCloseButton(a) : null,
                              rightControl: 'left' === n ? this._renderCloseButton(a) : 'right' === n ? t : null,
                              subtitle: o,
                              title: l,
                            }),
                            g.a.createElement(L.a, { style: I.contentContainer }, i),
                          ),
                        }),
                      ),
                    ),
                  )
                },
              },
              {
                key: '_renderCloseButton',
                value: function (e) {
                  return g.a.createElement(y.a, {
                    accessibilityLabel: D,
                    icon: P,
                    onPress: this._handleMaskClick,
                    type: e,
                  })
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      b()(x, 'defaultProps', { align: 'left', onDismissed: function () {} })
      var U = function (e) {
          e.stopPropagation()
        },
        I = S.a.create(function (e) {
          return {
            mask: i()(
              i()({}, S.a.absoluteFillObject),
              {},
              { position: 'fixed', transitionProperty: 'background-color', transitionTimingFunction: 'ease' },
            ),
            maskWithBg: { backgroundColor: e.colors.maskColor },
            maskTransparent: { backgroundColor: e.colors.transparent },
            root: {
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: e.colors.navigationBackground,
              boxShadow: e.boxShadows.small,
              minWidth: 280,
              maxWidth: '100%',
              flexGrow: 1,
              flexShrink: 1,
              minHeight: 0,
              height: '100vh',
              transitionProperty: 'transform',
              transitionTimingFunction: 'ease',
            },
            visibleDrawer: { transform: [{ translateX: '0%' }] },
            offscreenLeftDrawer: { transform: [{ translateX: '-100%' }] },
            offscreenRightDrawer: { transform: [{ translateX: '100%' }] },
            alignLeft: { alignItems: 'flex-start' },
            alignRight: { alignItems: 'flex-end' },
            animateOpen: { transitionDuration: ''.concat(250, 'ms') },
            animateClose: { transitionDuration: ''.concat(200, 'ms') },
            contentContainer: {
              flexGrow: 1,
              flexShrink: 1,
              minHeight: 0,
              overflowY: 'auto',
              overscrollBehavior: 'contain',
            },
          }
        })
      t.a = x
    },
    'qtu+': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return l
      })
      var a = n('4+NY'),
        i = n('oEOe'),
        r = n('5oBF'),
        o = {
          REQUEST: 'rweb/multiAccount/SWITCH_REQUEST',
          SUCCESS: 'rweb/multiAccount/SWITCH_SUCCESS',
          FAILURE: 'rweb/multiAccount/SWITCH_FAILURE',
        },
        l = function (e) {
          return function (t, n, l) {
            var c = l.api,
              s = Object(i.b)(t, { request: c.Auth.switch, params: e })
            return t(Object(r.f)()).then(function () {
              return t(Object(a.b)()).then(function () {
                return s({ actionTypes: o, context: 'SWITCH' }).then(function () {
                  window.location.assign('/home')
                })
              })
            })
          }
        }
    },
    xXOT: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'DashMenu', function () {
          return Q
        })
      var a = n('VrFO'),
        i = n.n(a),
        r = n('Y9Ll'),
        o = n.n(r),
        l = n('1Pcy'),
        c = n.n(l),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('2VqO'),
        m = n.n(d),
        f = n('KEM+'),
        h = n.n(f),
        p = (n('2G9S'), n('ho0z'), n('z84I'), n('ERkP')),
        b = n.n(p),
        _ = n('H9MA'),
        g = n('qtu+'),
        C = n('G6rE'),
        w = n('rxPX'),
        y = n('0KEI'),
        E = n('auX9'),
        k = Object(w.a)()
          .propsFromState(function () {
            return { loggedInUser: C.e.selectLoggedInUser, multiAccountUsers: E.k, showMultiAccountOverflowPip: E.i }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(y.createLocalApiErrorHandlerWithContextFactory)(
                'DASH_MENU_ACCOUNT_SWITCH',
              ),
              fetchDataUsageSettingsIfNeeded: _.b,
              switchAccount: g.a,
            }
          })
          .withAnalytics({ page: 'dash' }),
        v = n('VN5n'),
        M = (n('lTEL'), n('7x/C'), n('JtPf'), n('87if'), n('kYxP'), n('zb92')),
        A = Object(M.a)({
          loader: function () {
            return Promise.all([n.e(0), n.e(20), n.e(186)]).then(n.bind(null, 'sAnO'))
          },
        }),
        S = n('3XMw'),
        O = n.n(S),
        T = n('0kTQ'),
        L = n('Es6L'),
        D = n('45lU'),
        P = n('9qNn'),
        x = n('MWbm'),
        U = n('jhWN'),
        I = n('/yvb'),
        N = n('Znyr'),
        F = n('cm6r'),
        H = n('jV+4'),
        W = n('wCd/'),
        j = n('Ddqr'),
        V = n('v6aA'),
        R = n('iY63'),
        K = n('ACHU'),
        B = O.a.i5f7b6b8,
        X = O.a.c5960556,
        q = O.a.da4691aa,
        Y = O.a.c7e55cce,
        z = O.a.d86bbf0f,
        G = O.a.h6beb5fa,
        Q = (function (e) {
          u()(n, e)
          var t = m()(n)
          function n() {
            var e
            i()(this, n)
            for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              h()(c()(e), '_renderMenuContent', function (t) {
                var n = t.withPadding,
                  a = e.props,
                  i = a.loggedInUser,
                  r = a.multiAccountUsers,
                  o = a.onClose,
                  l = a.showMultiAccountOverflowPip,
                  c = a.withMoreSideNavOverflow
                if (!i) return null
                var s = i.followers_count,
                  u = i.friends_count,
                  d = i.name,
                  m = i.profile_image_url_https,
                  f = i.protected,
                  h = i.screen_name,
                  p = i.translator_type,
                  _ = i.verified
                return Object(L.a)()
                  ? b.a.createElement(v.a, { onClose: o, withMoreSideNavOverflow: c })
                  : b.a.createElement(
                      x.a,
                      { style: [n && D.a.scrollableContentPadding, Object(L.a)() && D.a.menuContentWidth] },
                      b.a.createElement(
                        x.a,
                        { style: D.a.header },
                        b.a.createElement(
                          x.a,
                          { accessibilityHidden: !0, style: [D.a.item, D.a.itemAccount] },
                          b.a.createElement(
                            x.a,
                            { style: D.a.avatarWrapper },
                            b.a.createElement(U.a, {
                              onClick: e._handleProfileClick,
                              screenName: h,
                              size: 'xLarge',
                              uri: m,
                              withLink: !0,
                            }),
                          ),
                          e._renderMultiAccountUsers(),
                          b.a.createElement(
                            x.a,
                            null,
                            b.a.createElement(I.a, {
                              accessibilityLabel: q,
                              icon: 0 === r.length ? b.a.createElement(R.a, null) : b.a.createElement(K.a, null),
                              link: '/account/switch',
                              onPress: e._handleSwitcherButton,
                              size: 'small',
                              testID: P.a.switcher,
                              type: 'primaryOutlined',
                            }),
                            l
                              ? b.a.createElement(N.a, { pip: !0, truncatedCountFormatter: G, unreadCountLabel: z })
                              : null,
                          ),
                        ),
                        b.a.createElement(
                          x.a,
                          null,
                          b.a.createElement(
                            F.a,
                            {
                              accessibilityLabel: B,
                              interactiveStyles: null,
                              link: '/'.concat(h),
                              onClick: e._handleProfileClick,
                              style: [D.a.item, D.a.userNames],
                            },
                            b.a.createElement(H.a, {
                              badgeContext: 'account',
                              isProtected: f,
                              isVerified: _,
                              name: d,
                              screenName: h,
                              translatorType: p,
                              withStackedLayout: !0,
                            }),
                          ),
                        ),
                        Object(L.a)()
                          ? null
                          : b.a.createElement(W.a, {
                              followersCount: s,
                              friendsCount: u,
                              screenName: h,
                              style: [D.a.item, D.a.itemProfileStats],
                            }),
                      ),
                      b.a.createElement(v.a, { onClose: o }),
                    )
              }),
              h()(c()(e), '_renderMultiAccountUsers', function () {
                return e.props.multiAccountUsers.map(function (t) {
                  return b.a.createElement(
                    x.a,
                    {
                      accessibilityLabel: Y({ screenname: t.screen_name }),
                      accessibilityRole: 'button',
                      key: t.user_id,
                      onClick: e._handleMultiAccountSwitch(t.user_id, !!t.badgeCount, t.is_protected),
                      style: D.a.multiAccountLink,
                    },
                    b.a.createElement(U.a, { size: 'large', uri: t.avatar_image_url }),
                    t.badgeCount
                      ? b.a.createElement(N.a, { count: t.badgeCount, truncatedCountFormatter: G, unreadCountLabel: z })
                      : null,
                  )
                })
              }),
              h()(c()(e), '_handleMenuItemClick', function (t) {
                return function () {
                  var n = e.props,
                    a = n.analytics,
                    i = n.onClose
                  t && a.scribe({ section: 'overflow_menu', element: t, action: 'click' }), i && i()
                }
              }),
              h()(c()(e), '_handleProfileClick', e._handleMenuItemClick('profile_overflow_item')),
              h()(c()(e), '_handleSimpleClick', e._handleMenuItemClick()),
              h()(c()(e), '_handleMultiAccountSwitch', function (t, n, a) {
                return function () {
                  var i = e.props,
                    r = i.analytics,
                    o = i.createLocalApiErrorHandler,
                    l = i.switchAccount
                  r.scribe({
                    section: a ? 'switch_to_protected_account' : 'switch_account',
                    element: n ? 'account_bubble_badged' : 'account_bubble',
                    action: 'click',
                  }),
                    l({ user_id: t }).catch(o(T.a))
                }
              }),
              h()(c()(e), '_handleSwitcherButton', function () {
                var t = e.props,
                  n = t.analytics,
                  a = t.onClose
                n.scribe({ section: 'switch_account', element: 'dash_account_switcher', action: 'click' }), a && a()
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'UNSAFE_componentWillMount',
                value: function () {
                  var e = this.props,
                    t = e.analytics
                  ;(0, e.fetchDataUsageSettingsIfNeeded)(), t.scribePageImpression()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.alignMenu,
                    n = e.onClose
                  return Object(L.a)()
                    ? b.a.createElement(
                        A,
                        {
                          animateInDuration: 'long',
                          isFixed: !0,
                          onDismiss: n,
                          preferredHorizontalOrientation: 'right',
                          preferredVerticalOrientation: 'up',
                        },
                        this._renderMenuContent({ withPadding: !1 }),
                      )
                    : b.a.createElement(
                        j.a,
                        { align: t, buttonType: 'primaryText', onDismissed: n, style: D.a.drawer, title: X },
                        this._renderMenuContent({ withPadding: !0 }),
                      )
                },
              },
            ]),
            n
          )
        })(b.a.Component)
      h()(Q, 'contextType', V.a)
      var J = k(Q)
      t.default = J
    },
  },
])
//# sourceMappingURL=WIPED
