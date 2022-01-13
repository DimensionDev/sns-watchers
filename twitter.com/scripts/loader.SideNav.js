;(window.webpackJsonp = window.webpackJsonp || []).push([
  [176],
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
        v = n('k49u'),
        _ = n('3XMw'),
        w = n.n(_),
        E = n('IMYl'),
        A = n('fs1G'),
        b = n('MWbm'),
        C = n('Irs7'),
        S = n('OOKO'),
        I = n('CKsB'),
        M = n('t62R'),
        k = n('IMA+'),
        B = n('Znyr'),
        T = n('G1WX'),
        U = n('rHpw')
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
      var R = w.a.d86bbf0f,
        L = w.a.h6beb5fa,
        H = w.a.b7dc3884,
        O = (function (e) {
          l()(n, e)
          var t = x(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, c = new Array(r), o = 0; o < r; o++) c[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              g()(s()(e), '_renderAdditionalMenuItems', function () {
                return (e.props.additionalMenuItems || []).map(function (t, n) {
                  return y.createElement(
                    y.Fragment,
                    { key: n },
                    0 === n ? y.createElement(S.a, null) : null,
                    y.createElement(I.a, {
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
                return t ? y.createElement(M.b, { size: 'headline1', style: P.title, weight: 'bold' }, t) : null
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
                  ? y.createElement(
                      y.Fragment,
                      null,
                      n.map(function (t) {
                        var n = t.user_id === r.id_str,
                          a = t.badgeCount
                        return y.createElement(k.a, {
                          accessibilityLabel: n ? void 0 : H({ screenName: t.screen_name }),
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
                  : y.createElement(k.a, {
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
                  ? y.createElement(E.a, { style: [P.iconCheckMark, P.userDecoration] })
                  : t && r
                  ? y.createElement(B.a, {
                      count: t,
                      standalone: !0,
                      style: P.userDecoration,
                      truncatedCountFormatter: L,
                      unreadCountLabel: R,
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
                ;(0, t.fetchAccounts)().catch(n(g()({}, v.a.AppInReadOnlyMode, { customAction: A.a })))
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
                  return y.createElement(
                    b.a,
                    { style: P.menuContainer },
                    this._renderTitle(),
                    n
                      ? y.createElement(T.a, {
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
        })(y.Component),
        P = U.a.create(function (e) {
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
      t.a = Object(C.a)(O)
    },
    LzTg: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'default', function () {
          return ae
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
        g = n('1Pcy'),
        y = n.n(g),
        v = (n('2G9S'), n('qtu+')),
        _ = n('G6rE'),
        w = n('rxPX'),
        E = n('0KEI'),
        A = n('auX9'),
        b = n('kGix'),
        C = Object(w.a)()
          .propsFromState(function () {
            return {
              fetchStatus: A.g,
              loggedInUser: _.e.selectLoggedInUser,
              multiAccountUsers: A.j,
              hasMultiAccountBadges: A.h,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandlerAccountSwitch: Object(E.createLocalApiErrorHandlerWithContextFactory)(
                'ACCOUNT_SWITCHER_ACCOUNT_SWITCH',
              ),
              createLocalApiErrorHandlerMultiListFetch: Object(E.createLocalApiErrorHandlerWithContextFactory)(
                'ACCOUNT_SWITCHER_MULTI_LIST_FETCH',
              ),
              fetchMultiAccountList: A.c,
              switchAccount: v.a,
            }
          })
          .adjustStateProps(function (e) {
            var t = e.fetchStatus,
              n = e.hasMultiAccountBadges,
              r = e.loggedInUser,
              a = e.multiAccountUsers
            return {
              fetchStatus: t === b.a.NONE ? b.a.LOADING : t,
              hasMultiAccountBadges: !!r && n,
              loggedInUser: r,
              multiAccountUsers: a,
            }
          })
          .withAnalytics({ page: 'nav', section: 'account_switcher' }),
        S = n('3Wr5'),
        I = n('55jz'),
        M = n('0kTQ'),
        k = 'SideNav_AccountSwitcher_Button',
        B = 'AccountSwitcher_AddAccount_Button',
        T = 'AccountSwitcher_Logout_Button',
        U = 'AccountSwitcher_ManageAccounts_Button',
        x = n('yrzJ'),
        R = n('y8wG'),
        L = n('v6aA'),
        H = n('3XMw'),
        O = n.n(H)
      function P(e) {
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
      var F = O.a.j0a8da6e,
        N = O.a.c6f2bf00,
        D = function (e) {
          return m.createElement(
            O.a.I18NFormatMessage,
            { $i18n: 'i9bec47a' },
            m.createElement(x.a, { color: 'normal', screenName: e }),
          )
        },
        W = (function (e) {
          s()(n, e)
          var t = P(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, c = new Array(r), o = 0; o < r; o++) c[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              h()(y()(e), '_renderMenuSheet', function (t) {
                var n = e.props,
                  r = n.createLocalApiErrorHandlerMultiListFetch,
                  a = n.fetchMultiAccountList,
                  c = n.fetchStatus,
                  o = n.loggedInUser,
                  i = n.multiAccountUsers
                return o
                  ? m.createElement(I.a, {
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
              h()(y()(e), '_multiAccountSwitch', function (t) {
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
                  s({ user_id: a }).catch(i(M.a))
              }),
              h()(y()(e), '_getAdditionalAccountMenuItems', function () {
                var t = e.props,
                  n = t.loggedInUser,
                  r = t.multiAccountUsers,
                  a = r.length > 1,
                  c = []
                return (
                  r.length >= 5 ||
                    c.push({
                      actionText: F,
                      link: e.context.featureSwitches.isTrue('stateful_login_enabled')
                        ? '/i/flow/login'
                        : '/account/add',
                      scribeElement: 'add_existing_account',
                      testID: B,
                    }),
                  a && c.push({ actionText: N, link: '/account/switch', scribeElement: 'manage_accounts', testID: U }),
                  n && c.push({ actionText: D(n.screen_name), link: '/logout', scribeElement: 'log_out', testID: T }),
                  c
                )
              }),
              h()(y()(e), '_handleAccountSwitcherClick', function () {
                e.props.analytics.scribe({ action: 'click' })
              }),
              h()(y()(e), '_hasMultiAccountCookie', function () {
                return Object(S.a)().hasMultiAccountCookie
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
                  return m.createElement(R.a, {
                    analytics: t,
                    currentUser: a,
                    hasMultiAccountBadges: n,
                    interactiveViewTestId: k,
                    isExpanded: r,
                    renderMenuSheet: this._renderMenuSheet,
                  })
                },
              },
            ]),
            n
          )
        })(m.Component)
      h()(W, 'contextType', L.a)
      var z = C(W),
        j = n('1eTX'),
        V = n('jwTb'),
        G = n('Irs7'),
        X = n('eqgg')
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
            r = p()(e)
          if (t) {
            var a = p()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return l()(this, n)
        }
      }
      var K = O.a.g34f2c63({ verb: '' }),
        q = (function (e) {
          s()(n, e)
          var t = Y(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, c = new Array(r), o = 0; o < r; o++) c[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              h()(y()(e), '_handlePress', function (t) {
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
                  return m.createElement(X.a, {
                    icon: J,
                    isExpanded: n,
                    label: K,
                    link: { pathname: '/compose/tweet', state: t },
                    onPress: this._handlePress,
                    testID: r,
                  })
                },
              },
            ]),
            n
          )
        })(m.Component),
        J = m.createElement(V.a, null),
        Z = Object(G.a)(q),
        Q = n('N5qz'),
        $ = 'SideNav_NewTweet_Button',
        ee = n('MWbm'),
        te = n('cHvH'),
        ne = n('rHpw')
      function re(e) {
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
      var ae = (function (e) {
        s()(n, e)
        var t = re(n)
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
                  g = [ce.root, f, o ? ce.rootPaddingSmall : ce.rootPaddingNormal],
                  y = d || m.createElement(j.a, { onClick: p, pullLeft: !1, size: 'large' })
                return m.createElement(te.a, null, function (t) {
                  var o = t.windowHeight
                  return m.createElement(
                    ee.a,
                    { style: g },
                    m.createElement(
                      ee.a,
                      { style: [ce.topSection, !i && ce.alignItemsCenter] },
                      m.createElement(ee.a, { style: ce.topControl }, y),
                      m.createElement(
                        ee.a,
                        { style: [ce.appTabBar, !i && ce.alignItemsCenter] },
                        m.createElement(r, {
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
                      ? m.createElement(
                          ee.a,
                          { style: [ce.footerContainer, !i && ce.alignItemsCenter] },
                          m.createElement(z, { isExpanded: i }),
                          a ? m.createElement(a, { isExpanded: i }) : null,
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
                return m.createElement(
                  ee.a,
                  {
                    style: [ce.button, !a && ce.alignItemsCenter, 'tall' === Q.a.getHeightMode(e) && ce.withTallHeight],
                  },
                  n
                    ? m.createElement(n, { isExpanded: a })
                    : m.createElement(Z, { composeOptions: r, isExpanded: a, testID: $ }),
                )
              },
            },
          ]),
          n
        )
      })(m.Component)
      h()(ae, 'defaultProps', { withTweetButton: !0 })
      var ce = ne.a.create(function (e) {
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
        return O
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
        v = n('ZUOq'),
        _ = n('3XMw'),
        w = n.n(_),
        E = n('ACHU'),
        A = n('aWzz'),
        b = n('MWbm'),
        C = n('I4+6'),
        S = n('rHpw'),
        I = n('XP29'),
        M = n('jV+4'),
        k = n('Znyr'),
        B = n('OiMc'),
        T = n('cm6r')
      function U(e) {
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
      var x = w.a.d86bbf0f,
        R = w.a.h6beb5fa,
        L = w.a.b8e1d524,
        H = w.a.gef27c4c,
        O = (function (e) {
          l()(n, e)
          var t = U(n)
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
                return y.createElement(
                  y.Fragment,
                  null,
                  y.createElement(
                    b.a,
                    null,
                    y.createElement(I.a, { accessibilityLabel: r, screenName: o, size: 'xLarge', uri: a }),
                    n ? null : e._renderBadge(),
                  ),
                  n
                    ? y.createElement(
                        y.Fragment,
                        null,
                        y.createElement(M.a, {
                          isProtected: c,
                          isVerified: i,
                          name: r,
                          screenName: o,
                          style: P.userName,
                          withStackedLayout: !0,
                        }),
                        y.createElement(
                          b.a,
                          { style: P.iconContainer },
                          y.createElement(E.a, { style: P.icon }),
                          n ? e._renderBadge() : null,
                        ),
                      )
                    : null,
                )
              }),
              g()(s()(e), '_renderEmptyState', function () {
                var t = e.props.renderEmptyState
                return t ? y.createElement(b.a, { style: P.emptyStateWrapper }, t()) : null
              }),
              g()(s()(e), '_renderBadge', function () {
                var t = e.props,
                  n = t.hasMultiAccountBadges,
                  r = t.isExpanded
                return n
                  ? y.createElement(k.a, {
                      pip: !0,
                      style: r && P.pip,
                      truncatedCountFormatter: R,
                      unreadCountLabel: x,
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
                    ? y.createElement(
                        B.a,
                        {
                          contentStyle: P.menuContainer,
                          enableEnterKeyToggle: !0,
                          renderContent: i,
                          withArrow: !0,
                          withFixedPosition: !0,
                        },
                        y.createElement(
                          T.a,
                          {
                            accessibilityLabel: t || H,
                            accessibilityRole: 'button',
                            hoverLabel: c ? void 0 : { label: r || L },
                            interactiveStyles: C.a.generate({
                              backgroundColor: 'transparent',
                              color: S.a.theme.colors.text,
                            }),
                            onClick: this._handleAccountSwitcherClick,
                            style: P.anchorContainer,
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
        })(y.Component)
      g()(O, 'contextTypes', { featureSwitches: A.object })
      var P = S.a.create(function (e) {
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
          menuContainer: { width: v.a.cardWidth.normal },
          emptyStateWrapper: { height: e.spaces.space40, minWidth: e.spaces.space40, width: '100%' },
        }
      })
    },
  },
])
//# sourceMappingURL=WIPED
