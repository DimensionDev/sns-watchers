;(window.webpackJsonp = window.webpackJsonp || []).push([
  [178],
  {
    '0kTQ': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return l
      })
      var r,
        a = n('KEM+'),
        c = n.n(a),
        o = n('k49u'),
        i = n('LVU8'),
        s = n('3XMw'),
        u = n.n(s).a.b20a3893,
        l =
          ((r = {}),
          c()(r, o.a.AppInReadOnlyMode, { customAction: i.b }),
          c()(r, o.a.TargetUserNotFound, { toast: { text: u } }),
          c()(r, 'showToast', !0),
          r)
    },
    '55jz': function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        c = n('Y9Ll'),
        o = n.n(c),
        i = n('1Pcy'),
        s = n.n(i),
        u = n('5Yy7'),
        l = n.n(u),
        d = n('N+ot'),
        p = n.n(d),
        f = n('AuHH'),
        h = n.n(f),
        m = n('KEM+'),
        g = n.n(m),
        y = (n('2G9S'), n('z84I'), n('hBvt'), n('LW0h'), n('ho0z'), n('ERkP')),
        v = n.n(y),
        _ = n('k49u'),
        w = n('3XMw'),
        E = n.n(w),
        A = n('IMYl'),
        b = n('fs1G'),
        C = n('MWbm'),
        S = n('Irs7'),
        I = n('OOKO'),
        M = n('CKsB'),
        k = n('t62R'),
        B = n('IMA+'),
        T = n('Znyr'),
        U = n('G1WX'),
        x = n('rHpw')
      function R(e) {
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
          return p()(this, n)
        }
      }
      var L = E.a.d86bbf0f,
        H = E.a.h6beb5fa,
        O = E.a.b7dc3884,
        P = (function (e) {
          l()(n, e)
          var t = R(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, c = new Array(r), o = 0; o < r; o++) c[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              g()(s()(e), '_renderAdditionalMenuItems', function () {
                return (e.props.additionalMenuItems || []).map(function (t, n) {
                  return v.a.createElement(
                    v.a.Fragment,
                    { key: n },
                    0 === n ? v.a.createElement(I.a, null) : null,
                    v.a.createElement(M.a, {
                      Icon: t.Icon,
                      actionText: t.actionText,
                      isSelected: t.isSelected,
                      link: t.link,
                      onClick: e._handleMenuItemClick(t.scribeElement, t.onClick),
                      selectable: !0,
                      testID: t.testID,
                    }),
                  )
                })
              }),
              g()(s()(e), '_renderTitle', function () {
                var t = e.props.title
                return t ? v.a.createElement(k.b, { size: 'headline1', style: F.title, weight: 'bold' }, t) : null
              }),
              g()(s()(e), '_renderUserAccounts', function () {
                var t = e.props,
                  n = t.accountUsers,
                  r = t.activeUser,
                  a = t.withBadges,
                  c = void 0 !== a && a
                return n.filter(function (e) {
                  return e.user_id !== (null == r ? void 0 : r.id_str)
                }).length > 0
                  ? v.a.createElement(
                      v.a.Fragment,
                      null,
                      n.map(function (t) {
                        var n = t.user_id === r.id_str,
                          a = t.badgeCount
                        return v.a.createElement(B.a, {
                          accessibilityLabel: n ? void 0 : O({ screenName: t.screen_name }),
                          avatarUri: t.avatar_image_url,
                          decoration: e._renderUserDecoration({ badgeCount: a, withBadges: c, isActiveUser: n }),
                          displayMode: 'UserCompact',
                          isProtected: t.is_protected,
                          isVerified: t.is_verified,
                          key: t.user_id,
                          name: t.name,
                          onCellClick: n
                            ? void 0
                            : e._handleMultiAccountSwitch({
                                hasBadge: !!a,
                                isProtected: t.is_protected,
                                userId: t.user_id,
                              }),
                          screenName: t.screen_name,
                          userId: t.user_id,
                          withLink: !1,
                        })
                      }),
                    )
                  : v.a.createElement(B.a, {
                      avatarUri: r.profile_image_url_https,
                      decoration: e._renderUserDecoration({ withBadges: c, isActiveUser: !0 }),
                      displayMode: 'UserCompact',
                      isProtected: r.protected,
                      isVerified: r.verified,
                      name: r.name,
                      screenName: r.screen_name,
                      userId: r.id_str,
                      withLink: !1,
                    })
              }),
              g()(s()(e), '_renderUserDecoration', function (e) {
                var t = e.badgeCount,
                  n = e.isActiveUser,
                  r = e.withBadges
                return n
                  ? v.a.createElement(A.a, { style: [F.iconCheckMark, F.userDecoration] })
                  : t && r
                  ? v.a.createElement(T.a, {
                      count: t,
                      standalone: !0,
                      style: F.userDecoration,
                      truncatedCountFormatter: H,
                      unreadCountLabel: L,
                    })
                  : void 0
              }),
              g()(s()(e), '_handleMultiAccountSwitch', function (t) {
                var n = t.hasBadge,
                  r = t.isProtected,
                  a = t.userId
                return function () {
                  var t = e.props,
                    c = t.accountSwitch,
                    o = t.onClose
                  c({ hasBadge: n, isProtected: r, userId: a }), o()
                }
              }),
              g()(s()(e), '_handleFetch', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandlerAccountsFetch
                ;(0, t.fetchAccounts)().catch(n(g()({}, _.a.AppInReadOnlyMode, { customAction: b.a })))
              }),
              g()(s()(e), '_handleMenuItemClick', function (t, n) {
                return function () {
                  var r = e.props,
                    a = r.analytics,
                    c = r.onClose
                  t && a.scribe({ element: t, action: 'click' }), null == n || n(), c()
                }
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    n = e.shouldDisplayFetchRenderer
                  return v.a.createElement(
                    C.a,
                    { style: F.menuContainer },
                    this._renderTitle(),
                    n
                      ? v.a.createElement(U.a, {
                          fetchStatus: t,
                          onRequestRetry: this._handleFetch,
                          render: this._renderUserAccounts,
                        })
                      : this._renderUserAccounts(),
                    this._renderAdditionalMenuItems(),
                  )
                },
              },
            ]),
            n
          )
        })(v.a.Component),
        F = x.a.create(function (e) {
          return {
            iconCheckMark: { color: e.colors.primary, flexShrink: 0 },
            menuContainer: { paddingVertical: e.spaces.space12 },
            userDecoration: { marginLeft: e.spaces.space12 },
            title: {
              paddingBottom: e.componentDimensions.gutterVertical,
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
            },
          }
        })
      t.a = Object(S.a)(P)
    },
    LzTg: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'default', function () {
          return ce
        })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        c = n('Y9Ll'),
        o = n.n(c),
        i = n('5Yy7'),
        s = n.n(i),
        u = n('N+ot'),
        l = n.n(u),
        d = n('AuHH'),
        p = n.n(d),
        f = n('KEM+'),
        h = n.n(f),
        m = n('ERkP'),
        g = n.n(m),
        y = n('1Pcy'),
        v = n.n(y),
        _ = (n('2G9S'), n('qtu+')),
        w = n('G6rE'),
        E = n('rxPX'),
        A = n('0KEI'),
        b = n('auX9'),
        C = n('kGix'),
        S = Object(E.a)()
          .propsFromState(function () {
            return {
              fetchStatus: b.g,
              loggedInUser: w.e.selectLoggedInUser,
              multiAccountUsers: b.j,
              hasMultiAccountBadges: b.h,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandlerAccountSwitch: Object(A.createLocalApiErrorHandlerWithContextFactory)(
                'ACCOUNT_SWITCHER_ACCOUNT_SWITCH',
              ),
              createLocalApiErrorHandlerMultiListFetch: Object(A.createLocalApiErrorHandlerWithContextFactory)(
                'ACCOUNT_SWITCHER_MULTI_LIST_FETCH',
              ),
              fetchMultiAccountList: b.c,
              switchAccount: _.a,
            }
          })
          .adjustStateProps(function (e) {
            var t = e.fetchStatus,
              n = e.hasMultiAccountBadges,
              r = e.loggedInUser,
              a = e.multiAccountUsers
            return {
              fetchStatus: t === C.a.NONE ? C.a.LOADING : t,
              hasMultiAccountBadges: !!r && n,
              loggedInUser: r,
              multiAccountUsers: a,
            }
          })
          .withAnalytics({ page: 'nav', section: 'account_switcher' }),
        I = n('3Wr5'),
        M = n('55jz'),
        k = n('0kTQ'),
        B = 'SideNav_AccountSwitcher_Button',
        T = 'AccountSwitcher_AddAccount_Button',
        U = 'AccountSwitcher_Logout_Button',
        x = 'AccountSwitcher_ManageAccounts_Button',
        R = n('yrzJ'),
        L = n('y8wG'),
        H = n('v6aA'),
        O = n('3XMw'),
        P = n.n(O)
      function F(e) {
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
            r = p()(e)
          if (t) {
            var a = p()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return l()(this, n)
        }
      }
      var N = P.a.j0a8da6e,
        D = P.a.c6f2bf00,
        W = function (e) {
          return g.a.createElement(
            P.a.I18NFormatMessage,
            { $i18n: 'i9bec47a' },
            g.a.createElement(R.a, { color: 'normal', screenName: e }),
          )
        },
        z = (function (e) {
          s()(n, e)
          var t = F(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, c = new Array(r), o = 0; o < r; o++) c[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              h()(v()(e), '_renderMenuSheet', function (t) {
                var n = e.props,
                  r = n.createLocalApiErrorHandlerMultiListFetch,
                  a = n.fetchMultiAccountList,
                  c = n.fetchStatus,
                  o = n.loggedInUser,
                  i = n.multiAccountUsers
                return o
                  ? g.a.createElement(M.a, {
                      accountSwitch: e._multiAccountSwitch,
                      accountUsers: i,
                      activeUser: o,
                      additionalMenuItems: e._getAdditionalAccountMenuItems(),
                      createLocalApiErrorHandlerAccountsFetch: r,
                      fetchAccounts: a,
                      fetchStatus: c,
                      onClose: t,
                      shouldDisplayFetchRenderer: e._hasMultiAccountCookie(),
                      withBadges: !0,
                    })
                  : null
              }),
              h()(v()(e), '_multiAccountSwitch', function (t) {
                var n = t.hasBadge,
                  r = t.isProtected,
                  a = t.userId,
                  c = e.props,
                  o = c.analytics,
                  i = c.createLocalApiErrorHandlerAccountSwitch,
                  s = c.switchAccount
                o.scribe({
                  component: r ? 'switch_to_protected_account' : 'switch_account',
                  element: n ? 'account_badged' : 'account',
                  action: 'click',
                }),
                  s({ user_id: a }).catch(i(k.a))
              }),
              h()(v()(e), '_getAdditionalAccountMenuItems', function () {
                var t = e.props,
                  n = t.loggedInUser,
                  r = t.multiAccountUsers,
                  a = r.length > 1,
                  c = []
                return (
                  r.length >= 5 ||
                    c.push({
                      actionText: N,
                      link: e.context.featureSwitches.isTrue('stateful_login_enabled')
                        ? '/i/flow/login'
                        : '/account/add',
                      scribeElement: 'add_existing_account',
                      testID: T,
                    }),
                  a && c.push({ actionText: D, link: '/account/switch', scribeElement: 'manage_accounts', testID: x }),
                  n && c.push({ actionText: W(n.screen_name), link: '/logout', scribeElement: 'log_out', testID: U }),
                  c
                )
              }),
              h()(v()(e), '_handleAccountSwitcherClick', function () {
                e.props.analytics.scribe({ action: 'click' })
              }),
              h()(v()(e), '_hasMultiAccountCookie', function () {
                return Object(I.a)().hasMultiAccountCookie
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.analytics,
                    n = e.hasMultiAccountBadges,
                    r = e.isExpanded,
                    a = e.loggedInUser
                  return g.a.createElement(L.a, {
                    analytics: t,
                    currentUser: a,
                    hasMultiAccountBadges: n,
                    interactiveViewTestId: B,
                    isExpanded: r,
                    renderMenuSheet: this._renderMenuSheet,
                  })
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      h()(z, 'contextType', H.a)
      var j = S(z),
        V = n('1eTX'),
        G = n('jwTb'),
        X = n('Irs7'),
        Y = n('eqgg')
      function K(e) {
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
            r = p()(e)
          if (t) {
            var a = p()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return l()(this, n)
        }
      }
      var q = P.a.g34f2c63({ verb: '' }),
        J = (function (e) {
          s()(n, e)
          var t = K(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, c = new Array(r), o = 0; o < r; o++) c[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              h()(v()(e), '_handlePress', function (t) {
                e.props.analytics.scribe({ component: 'new_tweet_button', action: 'click' })
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.composeOptions,
                    n = e.isExpanded,
                    r = e.testID
                  return g.a.createElement(Y.a, {
                    icon: Z,
                    isExpanded: n,
                    label: q,
                    link: { pathname: '/compose/tweet', state: t },
                    onPress: this._handlePress,
                    testID: r,
                  })
                },
              },
            ]),
            n
          )
        })(g.a.Component),
        Z = g.a.createElement(G.a, null),
        Q = Object(X.a)(J),
        $ = n('N5qz'),
        ee = 'SideNav_NewTweet_Button',
        te = n('MWbm'),
        ne = n('cHvH'),
        re = n('rHpw')
      function ae(e) {
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
            r = p()(e)
          if (t) {
            var a = p()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return l()(this, n)
        }
      }
      var ce = (function (e) {
        s()(n, e)
        var t = ae(n)
        function n() {
          return a()(this, n), t.apply(this, arguments)
        }
        return (
          o()(n, [
            {
              key: 'render',
              value: function () {
                var e = this,
                  t = this.props,
                  n = t.SideNavButton,
                  r = t.TabBar,
                  a = t.TeamsSwitcher,
                  c = t.history,
                  o = t.isCollapsedSmall,
                  i = t.isExpanded,
                  s = t.isLoggedIn,
                  u = t.isTwoColumn,
                  l = t.location,
                  d = t.logoButton,
                  p = t.onTabRefresh,
                  f = t.widthStyle,
                  h = t.withTweetButton,
                  m = [oe.root, f, o ? oe.rootPaddingSmall : oe.rootPaddingNormal],
                  y = d || g.a.createElement(V.a, { onClick: p, pullLeft: !1, size: 'large' })
                return g.a.createElement(ne.a, null, function (t) {
                  var o = t.windowHeight
                  return g.a.createElement(
                    te.a,
                    { style: m },
                    g.a.createElement(
                      te.a,
                      { style: [oe.topSection, !i && oe.alignItemsCenter] },
                      g.a.createElement(te.a, { style: oe.topControl }, y),
                      g.a.createElement(
                        te.a,
                        { style: [oe.appTabBar, !i && oe.alignItemsCenter] },
                        g.a.createElement(r, {
                          history: c,
                          layout: 'vertical',
                          location: l,
                          onTabRefresh: p,
                          wideMode: u,
                          withExtendedItems: !0,
                          withLabel: i,
                        }),
                      ),
                      s && (n || h) ? e._renderButton(o) : null,
                    ),
                    s
                      ? g.a.createElement(
                          te.a,
                          { style: [oe.footerContainer, !i && oe.alignItemsCenter] },
                          g.a.createElement(j, { isExpanded: i }),
                          a ? g.a.createElement(a, { isExpanded: i }) : null,
                        )
                      : null,
                  )
                })
              },
            },
            {
              key: '_renderButton',
              value: function (e) {
                var t = this.props,
                  n = t.SideNavButton,
                  r = t.composeOptions,
                  a = t.isExpanded
                return g.a.createElement(
                  te.a,
                  {
                    style: [oe.button, !a && oe.alignItemsCenter, 'tall' === $.a.getHeightMode(e) && oe.withTallHeight],
                  },
                  n
                    ? g.a.createElement(n, { isExpanded: a })
                    : g.a.createElement(Q, { composeOptions: r, isExpanded: a, testID: ee }),
                )
              },
            },
          ]),
          n
        )
      })(g.a.Component)
      h()(ce, 'defaultProps', { withTweetButton: !0 })
      var oe = re.a.create(function (e) {
        return {
          root: { height: '100%', overflowY: 'auto', justifyContent: 'space-between' },
          rootPaddingNormal: { paddingHorizontal: e.spaces.space12 },
          rootPaddingSmall: { paddingHorizontal: e.spaces.space4 },
          topSection: { alignItems: 'flex-start' },
          topControl: { paddingVertical: e.spaces.space2, maxWidth: '100%' },
          appTabBar: { marginBottom: e.spaces.space4, marginTop: e.spaces.space2, width: '100%' },
          button: { marginVertical: e.spaces.space4, width: '90%' },
          withTallHeight: { marginVertical: e.spaces.space16 },
          alignItemsCenter: { alignItems: 'center' },
          settingsButton: { marginBottom: e.spaces.space20, marginHorizontal: e.spaces.space4 },
          footerContainer: { marginVertical: e.spaces.space12 },
        }
      })
    },
    'qtu+': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return i
      })
      var r = n('4+NY'),
        a = n('oEOe'),
        c = n('5oBF'),
        o = {
          REQUEST: 'rweb/multiAccount/SWITCH_REQUEST',
          SUCCESS: 'rweb/multiAccount/SWITCH_SUCCESS',
          FAILURE: 'rweb/multiAccount/SWITCH_FAILURE',
        },
        i = function (e) {
          return function (t, n, i) {
            var s = i.api,
              u = Object(a.b)(t, { request: s.Auth.switch, params: e })
            return t(Object(c.f)()).then(function () {
              return t(Object(r.b)()).then(function () {
                return u({ actionTypes: o, context: 'SWITCH' }).then(function () {
                  window.location.assign('/home')
                })
              })
            })
          }
        }
    },
    y8wG: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return P
      })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        c = n('Y9Ll'),
        o = n.n(c),
        i = n('1Pcy'),
        s = n.n(i),
        u = n('5Yy7'),
        l = n.n(u),
        d = n('N+ot'),
        p = n.n(d),
        f = n('AuHH'),
        h = n.n(f),
        m = n('KEM+'),
        g = n.n(m),
        y = (n('2G9S'), n('ho0z'), n('ERkP')),
        v = n.n(y),
        _ = n('ZUOq'),
        w = n('3XMw'),
        E = n.n(w),
        A = n('ACHU'),
        b = n('aWzz'),
        C = n('MWbm'),
        S = n('I4+6'),
        I = n('rHpw'),
        M = n('XP29'),
        k = n('jV+4'),
        B = n('Znyr'),
        T = n('OiMc'),
        U = n('cm6r')
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
          return p()(this, n)
        }
      }
      var R = E.a.d86bbf0f,
        L = E.a.h6beb5fa,
        H = E.a.b8e1d524,
        O = E.a.gef27c4c,
        P = (function (e) {
          l()(n, e)
          var t = x(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, c = new Array(r), o = 0; o < r; o++) c[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              g()(s()(e), '_renderUser', function (t) {
                var n = e.props.isExpanded,
                  r = t.name,
                  a = t.profile_image_url_https,
                  c = t.protected,
                  o = t.screen_name,
                  i = t.verified
                return v.a.createElement(
                  v.a.Fragment,
                  null,
                  v.a.createElement(
                    C.a,
                    null,
                    v.a.createElement(M.a, { accessibilityLabel: r, screenName: o, size: 'xLarge', uri: a }),
                    n ? null : e._renderBadge(),
                  ),
                  n
                    ? v.a.createElement(
                        v.a.Fragment,
                        null,
                        v.a.createElement(k.a, {
                          isProtected: c,
                          isVerified: i,
                          name: r,
                          screenName: o,
                          style: F.userName,
                          withStackedLayout: !0,
                        }),
                        v.a.createElement(
                          C.a,
                          { style: F.iconContainer },
                          v.a.createElement(A.a, { style: F.icon }),
                          n ? e._renderBadge() : null,
                        ),
                      )
                    : null,
                )
              }),
              g()(s()(e), '_renderEmptyState', function () {
                var t = e.props.renderEmptyState
                return t ? v.a.createElement(C.a, { style: F.emptyStateWrapper }, t()) : null
              }),
              g()(s()(e), '_renderBadge', function () {
                var t = e.props,
                  n = t.hasMultiAccountBadges,
                  r = t.isExpanded
                return n
                  ? v.a.createElement(B.a, {
                      pip: !0,
                      style: r && F.pip,
                      truncatedCountFormatter: L,
                      unreadCountLabel: R,
                    })
                  : null
              }),
              g()(s()(e), '_handleAccountSwitcherClick', function () {
                e.props.analytics.scribe({ action: 'click' })
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.accessibilityLabel,
                    n = e.currentUser,
                    r = e.hoverLabel,
                    a = e.interactiveViewTestId,
                    c = e.isExpanded,
                    o = e.renderEmptyState,
                    i = e.renderMenuSheet
                  return n || o
                    ? v.a.createElement(
                        T.a,
                        {
                          contentStyle: F.menuContainer,
                          enableEnterKeyToggle: !0,
                          renderContent: i,
                          withArrow: !0,
                          withFixedPosition: !0,
                        },
                        v.a.createElement(
                          U.a,
                          {
                            accessibilityLabel: t || O,
                            accessibilityRole: 'button',
                            hoverLabel: c ? void 0 : { label: r || H },
                            interactiveStyles: S.a.generate({
                              backgroundColor: 'transparent',
                              color: I.a.theme.colors.text,
                            }),
                            onClick: this._handleAccountSwitcherClick,
                            style: F.anchorContainer,
                            testID: a,
                          },
                          n ? this._renderUser(n) : this._renderEmptyState(),
                        ),
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      g()(P, 'contextTypes', { featureSwitches: b.object })
      var F = I.a.create(function (e) {
        return {
          anchorContainer: {
            alignItems: 'center',
            borderRadius: e.borderRadii.infinite,
            display: 'flex',
            flexDirection: 'row',
            padding: e.spaces.space12,
          },
          icon: { color: e.colors.text },
          iconContainer: { alignItems: 'flex-end', flexGrow: 1 },
          pip: {
            position: 'absolute',
            right: 'calc(-1 * '.concat(e.spaces.space4, ')'),
            top: 'calc(-1 * '.concat(e.spaces.space4, ')'),
          },
          userName: { flexGrow: 1, marginHorizontal: e.spaces.space12 },
          menuContainer: { width: _.a.cardWidth.normal },
          emptyStateWrapper: { height: e.spaces.space40, minWidth: e.spaces.space40, width: '100%' },
        }
      })
    },
  },
])
//# sourceMappingURL=WIPED
