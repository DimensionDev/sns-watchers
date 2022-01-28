;(window.webpackJsonp = window.webpackJsonp || []).push([
  [167],
  {
    '0kTQ': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return u
      })
      var r,
        a = n('KEM+'),
        i = n.n(a),
        o = n('k49u'),
        c = n('LVU8'),
        l = n('3XMw'),
        s = n.n(l).a.b20a3893,
        u =
          ((r = {}),
          i()(r, o.a.AppInReadOnlyMode, { customAction: c.b }),
          i()(r, o.a.TargetUserNotFound, { toast: { text: s } }),
          i()(r, 'showToast', !0),
          r)
    },
    Ddqr: function (e, t, n) {
      'use strict'
      n('OZaJ'), n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('VrFO'),
        a = n.n(r),
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
        v = n('xKuM'),
        O = n('/yvb'),
        _ = n('w9LO'),
        C = n('3XMw'),
        E = n.n(C),
        k = n('hOZg'),
        P = n('0FVZ'),
        M = n('rHpw'),
        j = n('k/Ka'),
        A = n('shC7'),
        S = n('MWbm')
      function D(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function L(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? D(Object(n), !0).forEach(function (t) {
                b()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : D(Object(n)).forEach(function (t) {
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
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return d()(this, n)
        }
      }
      var T = E.a.af8fa2ad,
        H = g.a.createElement(k.a, null),
        R = (function (e) {
          u()(n, e)
          var t = x(n)
          function n(e) {
            var r
            return (
              a()(this, n),
              (r = t.call(this)),
              b()(l()(r), '_isMounted', !0),
              b()(l()(r), '_setAnimationNode', function (e) {
                r._animationNode = e
              }),
              b()(l()(r), '_handleTransitionEnd', function (e) {
                !1 === r.state.isVisible &&
                  e.target instanceof window.HTMLElement &&
                  e.target === r._animationNode &&
                  r.props.onDismissed()
              }),
              b()(l()(r), '_handleMaskClick', function () {
                r._handleDismiss()
              }),
              b()(l()(r), '_handleEsc', function (e) {
                var t = e.altKey,
                  n = e.ctrlKey,
                  a = e.key,
                  i = e.metaKey
                !(t || n || i) && 'Escape' === a && r._handleDismiss()
              }),
              b()(l()(r), '_handleDismiss', function () {
                r.setState({ isVisible: !1 }), w.a.reducedMotionEnabled && r.props.onDismissed()
              }),
              (r.state = { isVisible: !1 }),
              r
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
                    r = e.buttonType,
                    a = e.children,
                    i = e.style,
                    o = e.subtitle,
                    c = e.title,
                    l = this.state.isVisible,
                    s = l
                      ? I.visibleDrawer
                      : ('left' === n) === A.a.getConstants().isRTL
                      ? I.offscreenRightDrawer
                      : I.offscreenLeftDrawer,
                    u = l ? I.maskWithBg : I.maskTransparent,
                    f = l ? I.animateOpen : I.animateClose,
                    d = w.a.reducedMotionEnabled ? null : f
                  return g.a.createElement(
                    P.a.Modal,
                    null,
                    g.a.createElement(
                      _.a,
                      { withKeyboardNavigation: !0 },
                      g.a.createElement(
                        S.a,
                        {
                          onClick: this._handleMaskClick,
                          onKeyUp: this._handleEsc,
                          style: [I.mask, u, d, 'left' === n ? I.alignLeft : I.alignRight],
                        },
                        Object(j.a)('div', {
                          accessibilityRole: 'dialog',
                          onTransitionEnd: this._handleTransitionEnd,
                          ref: this._setAnimationNode,
                          onClick: U,
                          style: [I.root, s, d, i],
                          children: g.a.createElement(
                            g.a.Fragment,
                            null,
                            g.a.createElement(v.a, {
                              leftControl: 'left' === n ? t : 'right' === n ? this._renderCloseButton(r) : null,
                              rightControl: 'left' === n ? this._renderCloseButton(r) : 'right' === n ? t : null,
                              subtitle: o,
                              title: c,
                              withBottomBorder: !0,
                            }),
                            g.a.createElement(S.a, { style: I.contentContainer }, a),
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
                  return g.a.createElement(O.a, {
                    accessibilityLabel: T,
                    icon: H,
                    onPress: this._handleMaskClick,
                    type: e,
                  })
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      b()(R, 'defaultProps', { align: 'left', onDismissed: function () {} })
      var U = function (e) {
          e.stopPropagation()
        },
        I = M.a.create(function (e) {
          return {
            mask: L(
              L({}, M.a.absoluteFillObject),
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
      t.a = R
    },
    iY63: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        i = n('ERkP'),
        o = n.n(i),
        c = n('Lsrn'),
        l = n('k/Ka')
      function s(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? s(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var f = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(l.a)(
          'svg',
          u(
            u({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [c.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          o.a.createElement(
            'g',
            null,
            o.a.createElement('path', {
              d: 'M19.75 11H13V4.25c0-.553-.447-1-1-1s-1 .447-1 1V11H4.25c-.553 0-1 .447-1 1s.447 1 1 1H11v6.75c0 .553.447 1 1 1s1-.447 1-1V13h6.75c.553 0 1-.447 1-1s-.447-1-1-1z',
            }),
          ),
        )
      }
      ;(f.metadata = { width: 24, height: 24 }), (t.a = f)
    },
    'qtu+': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return c
      })
      var r = n('4+NY'),
        a = n('oEOe'),
        i = n('5oBF'),
        o = {
          REQUEST: 'rweb/multiAccount/SWITCH_REQUEST',
          SUCCESS: 'rweb/multiAccount/SWITCH_SUCCESS',
          FAILURE: 'rweb/multiAccount/SWITCH_FAILURE',
        },
        c = function (e) {
          return function (t, n, c) {
            var l = c.api,
              s = Object(a.b)(t, { request: l.Auth.switch, params: e })
            return t(Object(i.f)()).then(function () {
              return t(Object(r.b)()).then(function () {
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
      var r = n('VrFO'),
        a = n.n(r),
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
        v = n('qtu+'),
        O = n('G6rE'),
        _ = n('rxPX'),
        C = n('0KEI'),
        E = n('auX9'),
        k = Object(_.a)()
          .propsFromState(function () {
            return { loggedInUser: O.e.selectLoggedInUser, multiAccountUsers: E.k, showMultiAccountOverflowPip: E.i }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(C.createLocalApiErrorHandlerWithContextFactory)(
                'DASH_MENU_ACCOUNT_SWITCH',
              ),
              fetchDataUsageSettingsIfNeeded: w.b,
              switchAccount: v.a,
            }
          })
          .withAnalytics({ page: 'dash' }),
        P = n('VN5n'),
        M = (n('JtPf'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('zb92')),
        j = Object(M.a)({
          loader: function () {
            return Promise.all([n.e(0), n.e(7), n.e(184)]).then(n.bind(null, 'sAnO'))
          },
        }),
        A = n('3XMw'),
        S = n.n(A),
        D = n('0kTQ'),
        L = n('Es6L'),
        x = n('45lU'),
        T = n('9qNn'),
        H = n('MWbm'),
        R = n('jhWN'),
        U = n('/yvb'),
        I = n('Znyr'),
        N = n('cm6r'),
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
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return d()(this, n)
        }
      }
      var z = S.a.i5f7b6b8,
        q = S.a.c5960556,
        Z = S.a.da4691aa,
        J = S.a.c7e55cce,
        G = S.a.d86bbf0f,
        Q = S.a.h6beb5fa,
        $ = (function (e) {
          u()(n, e)
          var t = Y(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              b()(l()(e), '_renderMenuContent', function (t) {
                var n = t.withPadding,
                  r = e.props,
                  a = r.loggedInUser,
                  i = r.multiAccountUsers,
                  o = r.onClose,
                  c = r.showMultiAccountOverflowPip,
                  l = r.withMoreSideNavOverflow
                if (!a) return null
                var s = a.followers_count,
                  u = a.friends_count,
                  f = a.name,
                  d = a.profile_image_url_https,
                  m = a.protected,
                  h = a.screen_name,
                  p = a.translator_type,
                  b = a.verified
                return Object(L.a)()
                  ? g.a.createElement(P.a, { onClose: o, withMoreSideNavOverflow: l })
                  : g.a.createElement(
                      H.a,
                      { style: [n && x.a.scrollableContentPadding, Object(L.a)() && x.a.menuContentWidth] },
                      g.a.createElement(
                        H.a,
                        { style: x.a.header },
                        g.a.createElement(
                          H.a,
                          { accessibilityHidden: !0, style: [x.a.item, x.a.itemAccount] },
                          g.a.createElement(
                            H.a,
                            { style: x.a.avatarWrapper },
                            g.a.createElement(R.a, {
                              onClick: e._handleProfileClick,
                              screenName: h,
                              size: 'xLarge',
                              uri: d,
                              withLink: !0,
                            }),
                          ),
                          e._renderMultiAccountUsers(),
                          g.a.createElement(
                            H.a,
                            null,
                            g.a.createElement(U.a, {
                              accessibilityLabel: Z,
                              icon: 0 === i.length ? g.a.createElement(K.a, null) : g.a.createElement(X.a, null),
                              link: '/account/switch',
                              onPress: e._handleSwitcherButton,
                              size: 'small',
                              testID: T.a.switcher,
                              type: 'primaryOutlined',
                            }),
                            c
                              ? g.a.createElement(I.a, { pip: !0, truncatedCountFormatter: Q, unreadCountLabel: G })
                              : null,
                          ),
                        ),
                        g.a.createElement(
                          H.a,
                          null,
                          g.a.createElement(
                            N.a,
                            {
                              accessibilityLabel: z,
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
                        Object(L.a)()
                          ? null
                          : g.a.createElement(W.a, {
                              followersCount: s,
                              friendsCount: u,
                              screenName: h,
                              style: [x.a.item, x.a.itemProfileStats],
                            }),
                      ),
                      g.a.createElement(P.a, { onClose: o }),
                    )
              }),
              b()(l()(e), '_renderMultiAccountUsers', function () {
                return e.props.multiAccountUsers.map(function (t) {
                  return g.a.createElement(
                    H.a,
                    {
                      accessibilityLabel: J({ screenname: t.screen_name }),
                      accessibilityRole: 'button',
                      key: t.user_id,
                      onClick: e._handleMultiAccountSwitch(t.user_id, !!t.badgeCount, t.is_protected),
                      style: x.a.multiAccountLink,
                    },
                    g.a.createElement(R.a, { size: 'large', uri: t.avatar_image_url }),
                    t.badgeCount
                      ? g.a.createElement(I.a, { count: t.badgeCount, truncatedCountFormatter: Q, unreadCountLabel: G })
                      : null,
                  )
                })
              }),
              b()(l()(e), '_handleMenuItemClick', function (t) {
                return function () {
                  var n = e.props,
                    r = n.analytics,
                    a = n.onClose
                  t && r.scribe({ section: 'overflow_menu', element: t, action: 'click' }), a && a()
                }
              }),
              b()(l()(e), '_handleProfileClick', e._handleMenuItemClick('profile_overflow_item')),
              b()(l()(e), '_handleSimpleClick', e._handleMenuItemClick()),
              b()(l()(e), '_handleMultiAccountSwitch', function (t, n, r) {
                return function () {
                  var a = e.props,
                    i = a.analytics,
                    o = a.createLocalApiErrorHandler,
                    c = a.switchAccount
                  i.scribe({
                    section: r ? 'switch_to_protected_account' : 'switch_account',
                    element: n ? 'account_bubble_badged' : 'account_bubble',
                    action: 'click',
                  }),
                    c({ user_id: t }).catch(o(D.a))
                }
              }),
              b()(l()(e), '_handleSwitcherButton', function () {
                var t = e.props,
                  n = t.analytics,
                  r = t.onClose
                n.scribe({ section: 'switch_account', element: 'dash_account_switcher', action: 'click' }), r && r()
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
                    ? g.a.createElement(
                        j,
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
                        { align: t, buttonType: 'primaryText', onDismissed: n, style: x.a.drawer, title: q },
                        this._renderMenuContent({ withPadding: !0 }),
                      )
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      b()($, 'contextType', V.a)
      var ee = k($)
      t.default = ee
    },
  },
])
//# sourceMappingURL=WIPED
