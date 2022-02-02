;(window.webpackJsonp = window.webpackJsonp || []).push([
  [168],
  {
    '0kTQ': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return u
      })
      var a,
        r = n('KEM+'),
        i = n.n(r),
        o = n('k49u'),
        c = n('LVU8'),
        l = n('3XMw'),
        s = n.n(l).a.b20a3893,
        u =
          ((a = {}),
          i()(a, o.a.AppInReadOnlyMode, { customAction: c.b }),
          i()(a, o.a.TargetUserNotFound, { toast: { text: s } }),
          i()(a, 'showToast', !0),
          a)
    },
    Ddqr: function (e, t, n) {
      'use strict'
      n('OZaJ'), n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        c = n('1Pcy'),
        l = n.n(c),
        s = n('5Yy7'),
        u = n.n(s),
        f = n('N+ot'),
        d = n.n(f),
        m = n('AuHH'),
        h = n.n(m),
        p = n('KEM+'),
        b = n.n(p),
        y = (n('uFXj'), n('ERkP')),
        g = n.n(y),
        w = n('38/B'),
        _ = n('xKuM'),
        C = n('/yvb'),
        v = n('w9LO'),
        E = n('3XMw'),
        k = n.n(E),
        O = n('hOZg'),
        M = n('0FVZ'),
        A = n('rHpw'),
        P = n('k/Ka'),
        S = n('shC7'),
        D = n('MWbm')
      function L(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function T(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? L(Object(n), !0).forEach(function (t) {
                b()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : L(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function x(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            a = h()(e)
          if (t) {
            var r = h()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return d()(this, n)
        }
      }
      var j = k.a.af8fa2ad,
        R = g.a.createElement(O.a, null),
        U = (function (e) {
          u()(n, e)
          var t = x(n)
          function n(e) {
            var a
            return (
              r()(this, n),
              (a = t.call(this)),
              b()(l()(a), '_isMounted', !0),
              b()(l()(a), '_setAnimationNode', function (e) {
                a._animationNode = e
              }),
              b()(l()(a), '_handleTransitionEnd', function (e) {
                !1 === a.state.isVisible &&
                  e.target instanceof window.HTMLElement &&
                  e.target === a._animationNode &&
                  a.props.onDismissed()
              }),
              b()(l()(a), '_handleMaskClick', function () {
                a._handleDismiss()
              }),
              b()(l()(a), '_handleEsc', function (e) {
                var t = e.altKey,
                  n = e.ctrlKey,
                  r = e.key,
                  i = e.metaKey
                !(t || n || i) && 'Escape' === r && a._handleDismiss()
              }),
              b()(l()(a), '_handleDismiss', function () {
                a.setState({ isVisible: !1 }), w.a.reducedMotionEnabled && a.props.onDismissed()
              }),
              (a.state = { isVisible: !1 }),
              a
            )
          }
          return (
            o()(n, [
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
                    r = e.children,
                    i = e.style,
                    o = e.subtitle,
                    c = e.title,
                    l = this.state.isVisible,
                    s = l
                      ? N.visibleDrawer
                      : ('left' === n) === S.a.getConstants().isRTL
                      ? N.offscreenRightDrawer
                      : N.offscreenLeftDrawer,
                    u = l ? N.maskWithBg : N.maskTransparent,
                    f = l ? N.animateOpen : N.animateClose,
                    d = w.a.reducedMotionEnabled ? null : f
                  return g.a.createElement(
                    M.a.Modal,
                    null,
                    g.a.createElement(
                      v.a,
                      { withKeyboardNavigation: !0 },
                      g.a.createElement(
                        D.a,
                        {
                          onClick: this._handleMaskClick,
                          onKeyUp: this._handleEsc,
                          style: [N.mask, u, d, 'left' === n ? N.alignLeft : N.alignRight],
                        },
                        Object(P.a)('div', {
                          accessibilityRole: 'dialog',
                          onTransitionEnd: this._handleTransitionEnd,
                          ref: this._setAnimationNode,
                          onClick: I,
                          style: [N.root, s, d, i],
                          children: g.a.createElement(
                            g.a.Fragment,
                            null,
                            g.a.createElement(_.a, {
                              leftControl: 'left' === n ? t : 'right' === n ? this._renderCloseButton(a) : null,
                              rightControl: 'left' === n ? this._renderCloseButton(a) : 'right' === n ? t : null,
                              subtitle: o,
                              title: c,
                              withBottomBorder: !0,
                            }),
                            g.a.createElement(D.a, { style: N.contentContainer }, r),
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
                  return g.a.createElement(C.a, {
                    accessibilityLabel: j,
                    icon: R,
                    onPress: this._handleMaskClick,
                    type: e,
                  })
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      b()(U, 'defaultProps', { align: 'left', onDismissed: function () {} })
      var I = function (e) {
          e.stopPropagation()
        },
        N = A.a.create(function (e) {
          return {
            mask: T(
              T({}, A.a.absoluteFillObject),
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
      t.a = U
    },
    'qtu+': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return c
      })
      var a = n('4+NY'),
        r = n('oEOe'),
        i = n('5oBF'),
        o = {
          REQUEST: 'rweb/multiAccount/SWITCH_REQUEST',
          SUCCESS: 'rweb/multiAccount/SWITCH_SUCCESS',
          FAILURE: 'rweb/multiAccount/SWITCH_FAILURE',
        },
        c = function (e) {
          return function (t, n, c) {
            var l = c.api,
              s = Object(r.b)(t, { request: l.Auth.switch, params: e })
            return t(Object(i.f)()).then(function () {
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
          return $
        })
      n('OZaJ')
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        c = n('1Pcy'),
        l = n.n(c),
        s = n('5Yy7'),
        u = n.n(s),
        f = n('N+ot'),
        d = n.n(f),
        m = n('AuHH'),
        h = n.n(m),
        p = n('KEM+'),
        b = n.n(p),
        y = (n('2G9S'), n('ho0z'), n('z84I'), n('ERkP')),
        g = n.n(y),
        w = n('H9MA'),
        _ = n('qtu+'),
        C = n('G6rE'),
        v = n('rxPX'),
        E = n('0KEI'),
        k = n('auX9'),
        O = Object(v.a)()
          .propsFromState(function () {
            return { loggedInUser: C.e.selectLoggedInUser, multiAccountUsers: k.k, showMultiAccountOverflowPip: k.i }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(E.createLocalApiErrorHandlerWithContextFactory)(
                'DASH_MENU_ACCOUNT_SWITCH',
              ),
              fetchDataUsageSettingsIfNeeded: w.b,
              switchAccount: _.a,
            }
          })
          .withAnalytics({ page: 'dash' }),
        M = n('VN5n'),
        A = (n('JtPf'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('zb92')),
        P = Object(A.a)({
          loader: function () {
            return Promise.all([n.e(0), n.e(7), n.e(185)]).then(n.bind(null, 'sAnO'))
          },
        }),
        S = n('3XMw'),
        D = n.n(S),
        L = n('0kTQ'),
        T = n('Es6L'),
        x = n('45lU'),
        j = n('9qNn'),
        R = n('MWbm'),
        U = n('jhWN'),
        I = n('/yvb'),
        N = n('Znyr'),
        H = n('cm6r'),
        F = n('jV+4'),
        W = n('wCd/'),
        B = n('Ddqr'),
        V = n('v6aA'),
        K = n('iY63'),
        X = n('ACHU')
      function Y(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            a = h()(e)
          if (t) {
            var r = h()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return d()(this, n)
        }
      }
      var q = D.a.i5f7b6b8,
        z = D.a.c5960556,
        Z = D.a.da4691aa,
        J = D.a.c7e55cce,
        G = D.a.d86bbf0f,
        Q = D.a.h6beb5fa,
        $ = (function (e) {
          u()(n, e)
          var t = Y(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              b()(l()(e), '_renderMenuContent', function (t) {
                var n = t.withPadding,
                  a = e.props,
                  r = a.loggedInUser,
                  i = a.multiAccountUsers,
                  o = a.onClose,
                  c = a.showMultiAccountOverflowPip,
                  l = a.withMoreSideNavOverflow
                if (!r) return null
                var s = r.followers_count,
                  u = r.friends_count,
                  f = r.name,
                  d = r.profile_image_url_https,
                  m = r.protected,
                  h = r.screen_name,
                  p = r.translator_type,
                  b = r.verified
                return Object(T.a)()
                  ? g.a.createElement(M.a, { onClose: o, withMoreSideNavOverflow: l })
                  : g.a.createElement(
                      R.a,
                      { style: [n && x.a.scrollableContentPadding, Object(T.a)() && x.a.menuContentWidth] },
                      g.a.createElement(
                        R.a,
                        { style: x.a.header },
                        g.a.createElement(
                          R.a,
                          { accessibilityHidden: !0, style: [x.a.item, x.a.itemAccount] },
                          g.a.createElement(
                            R.a,
                            { style: x.a.avatarWrapper },
                            g.a.createElement(U.a, {
                              onClick: e._handleProfileClick,
                              screenName: h,
                              size: 'xLarge',
                              uri: d,
                              withLink: !0,
                            }),
                          ),
                          e._renderMultiAccountUsers(),
                          g.a.createElement(
                            R.a,
                            null,
                            g.a.createElement(I.a, {
                              accessibilityLabel: Z,
                              icon: 0 === i.length ? g.a.createElement(K.a, null) : g.a.createElement(X.a, null),
                              link: '/account/switch',
                              onPress: e._handleSwitcherButton,
                              size: 'small',
                              testID: j.a.switcher,
                              type: 'primaryOutlined',
                            }),
                            c
                              ? g.a.createElement(N.a, { pip: !0, truncatedCountFormatter: Q, unreadCountLabel: G })
                              : null,
                          ),
                        ),
                        g.a.createElement(
                          R.a,
                          null,
                          g.a.createElement(
                            H.a,
                            {
                              accessibilityLabel: q,
                              interactiveStyles: null,
                              link: '/'.concat(h),
                              onClick: e._handleProfileClick,
                              style: [x.a.item, x.a.userNames],
                            },
                            g.a.createElement(F.a, {
                              badgeContext: 'account',
                              isProtected: m,
                              isVerified: b,
                              name: f,
                              screenName: h,
                              translatorType: p,
                              withStackedLayout: !0,
                            }),
                          ),
                        ),
                        Object(T.a)()
                          ? null
                          : g.a.createElement(W.a, {
                              followersCount: s,
                              friendsCount: u,
                              screenName: h,
                              style: [x.a.item, x.a.itemProfileStats],
                            }),
                      ),
                      g.a.createElement(M.a, { onClose: o }),
                    )
              }),
              b()(l()(e), '_renderMultiAccountUsers', function () {
                return e.props.multiAccountUsers.map(function (t) {
                  return g.a.createElement(
                    R.a,
                    {
                      accessibilityLabel: J({ screenname: t.screen_name }),
                      accessibilityRole: 'button',
                      key: t.user_id,
                      onClick: e._handleMultiAccountSwitch(t.user_id, !!t.badgeCount, t.is_protected),
                      style: x.a.multiAccountLink,
                    },
                    g.a.createElement(U.a, { size: 'large', uri: t.avatar_image_url }),
                    t.badgeCount
                      ? g.a.createElement(N.a, { count: t.badgeCount, truncatedCountFormatter: Q, unreadCountLabel: G })
                      : null,
                  )
                })
              }),
              b()(l()(e), '_handleMenuItemClick', function (t) {
                return function () {
                  var n = e.props,
                    a = n.analytics,
                    r = n.onClose
                  t && a.scribe({ section: 'overflow_menu', element: t, action: 'click' }), r && r()
                }
              }),
              b()(l()(e), '_handleProfileClick', e._handleMenuItemClick('profile_overflow_item')),
              b()(l()(e), '_handleSimpleClick', e._handleMenuItemClick()),
              b()(l()(e), '_handleMultiAccountSwitch', function (t, n, a) {
                return function () {
                  var r = e.props,
                    i = r.analytics,
                    o = r.createLocalApiErrorHandler,
                    c = r.switchAccount
                  i.scribe({
                    section: a ? 'switch_to_protected_account' : 'switch_account',
                    element: n ? 'account_bubble_badged' : 'account_bubble',
                    action: 'click',
                  }),
                    c({ user_id: t }).catch(o(L.a))
                }
              }),
              b()(l()(e), '_handleSwitcherButton', function () {
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
                  return Object(T.a)()
                    ? g.a.createElement(
                        P,
                        {
                          animateInDuration: 'long',
                          isFixed: !0,
                          onDismiss: n,
                          preferredHorizontalOrientation: 'right',
                          preferredVerticalOrientation: 'up',
                        },
                        this._renderMenuContent({ withPadding: !1 }),
                      )
                    : g.a.createElement(
                        B.a,
                        { align: t, buttonType: 'primaryText', onDismissed: n, style: x.a.drawer, title: z },
                        this._renderMenuContent({ withPadding: !0 }),
                      )
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      b()($, 'contextType', V.a)
      var ee = O($)
      t.default = ee
    },
  },
])
//# sourceMappingURL=WIPED
