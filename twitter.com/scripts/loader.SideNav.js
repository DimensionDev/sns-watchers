;(window.webpackJsonp = window.webpackJsonp || []).push([
  [184],
  {
    '0kTQ': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return u
      })
      var a,
        r = n('KEM+'),
        c = n.n(r),
        i = n('k49u'),
        o = n('LVU8'),
        s = n('3XMw'),
        l = n.n(s).a.b20a3893,
        u =
          ((a = {}),
          c()(a, i.a.AppInReadOnlyMode, { customAction: o.b }),
          c()(a, i.a.TargetUserNotFound, { toast: { text: l } }),
          c()(a, 'showToast', !0),
          a)
    },
    '55jz': function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        c = n('Y9Ll'),
        i = n.n(c),
        o = n('1Pcy'),
        s = n.n(o),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('2VqO'),
        p = n.n(d),
        h = n('KEM+'),
        m = n.n(h),
        g = (n('2G9S'), n('z84I'), n('hBvt'), n('LW0h'), n('7x/C'), n('ho0z'), n('ERkP')),
        f = n.n(g),
        _ = n('k49u'),
        w = n('3XMw'),
        E = n.n(w),
        y = n('IMYl'),
        b = n('fs1G'),
        v = n('MWbm'),
        A = n('Irs7'),
        C = n('OOKO'),
        S = n('CKsB'),
        I = n('t62R'),
        M = n('IMA+'),
        k = n('Znyr'),
        T = n('G1WX'),
        U = n('rHpw'),
        x = E.a.d86bbf0f,
        L = E.a.h6beb5fa,
        B = E.a.b7dc3884,
        H = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, c = new Array(a), i = 0; i < a; i++) c[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              m()(s()(e), '_renderAdditionalMenuItems', function () {
                return (e.props.additionalMenuItems || []).map(function (t, n) {
                  return f.a.createElement(
                    f.a.Fragment,
                    { key: n },
                    0 === n ? f.a.createElement(C.a, null) : null,
                    f.a.createElement(S.a, {
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
              m()(s()(e), '_renderTitle', function () {
                var t = e.props.title
                return t ? f.a.createElement(I.b, { size: 'headline1', style: O.title, weight: 'bold' }, t) : null
              }),
              m()(s()(e), '_renderUserAccounts', function () {
                var t = e.props,
                  n = t.accountUsers,
                  a = t.activeUser,
                  r = t.withBadges,
                  c = void 0 !== r && r
                return n.filter(function (e) {
                  return e.user_id !== (null == a ? void 0 : a.id_str)
                }).length > 0
                  ? f.a.createElement(
                      f.a.Fragment,
                      null,
                      n.map(function (t) {
                        var n = t.user_id === a.id_str,
                          r = t.badgeCount
                        return f.a.createElement(M.a, {
                          accessibilityLabel: n ? void 0 : B({ screenName: t.screen_name }),
                          avatarUri: t.avatar_image_url,
                          decoration: e._renderUserDecoration({ badgeCount: r, withBadges: c, isActiveUser: n }),
                          displayMode: 'UserCompact',
                          isProtected: t.is_protected,
                          isVerified: t.is_verified,
                          key: t.user_id,
                          name: t.name,
                          onCellClick: n
                            ? void 0
                            : e._handleMultiAccountSwitch({
                                hasBadge: !!r,
                                isProtected: t.is_protected,
                                userId: t.user_id,
                              }),
                          screenName: t.screen_name,
                          userId: t.user_id,
                          withLink: !1,
                        })
                      }),
                    )
                  : f.a.createElement(M.a, {
                      avatarUri: a.profile_image_url_https,
                      decoration: e._renderUserDecoration({ withBadges: c, isActiveUser: !0 }),
                      displayMode: 'UserCompact',
                      isProtected: a.protected,
                      isVerified: a.verified,
                      name: a.name,
                      screenName: a.screen_name,
                      userId: a.id_str,
                      withLink: !1,
                    })
              }),
              m()(s()(e), '_renderUserDecoration', function (e) {
                var t = e.badgeCount,
                  n = e.isActiveUser,
                  a = e.withBadges
                return n
                  ? f.a.createElement(y.a, { style: [O.iconCheckMark, O.userDecoration] })
                  : t && a
                  ? f.a.createElement(k.a, {
                      count: t,
                      standalone: !0,
                      style: O.userDecoration,
                      truncatedCountFormatter: L,
                      unreadCountLabel: x,
                    })
                  : void 0
              }),
              m()(s()(e), '_handleMultiAccountSwitch', function (t) {
                var n = t.hasBadge,
                  a = t.isProtected,
                  r = t.userId
                return function () {
                  var t = e.props,
                    c = t.accountSwitch,
                    i = t.onClose
                  c({ hasBadge: n, isProtected: a, userId: r }), i()
                }
              }),
              m()(s()(e), '_handleFetch', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandlerAccountsFetch
                ;(0, t.fetchAccounts)().catch(n(m()({}, _.a.AppInReadOnlyMode, { customAction: b.a })))
              }),
              m()(s()(e), '_handleMenuItemClick', function (t, n) {
                return function () {
                  var a = e.props,
                    r = a.analytics,
                    c = a.onClose
                  t && r.scribe({ element: t, action: 'click' }), null == n || n(), c()
                }
              }),
              e
            )
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    n = e.shouldDisplayFetchRenderer
                  return f.a.createElement(
                    v.a,
                    { style: O.menuContainer },
                    this._renderTitle(),
                    n
                      ? f.a.createElement(T.a, {
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
        })(f.a.Component),
        O = U.a.create(function (e) {
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
      t.a = Object(A.a)(H)
    },
    LzTg: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'default', function () {
          return ee
        })
      var a = n('VrFO'),
        r = n.n(a),
        c = n('Y9Ll'),
        i = n.n(c),
        o = n('5Yy7'),
        s = n.n(o),
        l = n('2VqO'),
        u = n.n(l),
        d = n('KEM+'),
        p = n.n(d),
        h = n('ERkP'),
        m = n.n(h),
        g = n('1Pcy'),
        f = n.n(g),
        _ = (n('2G9S'), n('qtu+')),
        w = n('G6rE'),
        E = n('rxPX'),
        y = n('0KEI'),
        b = n('auX9'),
        v = n('kGix'),
        A = Object(E.a)()
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
              createLocalApiErrorHandlerAccountSwitch: Object(y.createLocalApiErrorHandlerWithContextFactory)(
                'ACCOUNT_SWITCHER_ACCOUNT_SWITCH',
              ),
              createLocalApiErrorHandlerMultiListFetch: Object(y.createLocalApiErrorHandlerWithContextFactory)(
                'ACCOUNT_SWITCHER_MULTI_LIST_FETCH',
              ),
              fetchMultiAccountList: b.c,
              switchAccount: _.a,
            }
          })
          .adjustStateProps(function (e) {
            var t = e.fetchStatus,
              n = e.hasMultiAccountBadges,
              a = e.loggedInUser,
              r = e.multiAccountUsers
            return {
              fetchStatus: t === v.a.NONE ? v.a.LOADING : t,
              hasMultiAccountBadges: !!a && n,
              loggedInUser: a,
              multiAccountUsers: r,
            }
          })
          .withAnalytics({ page: 'nav', section: 'account_switcher' }),
        C = n('3Wr5'),
        S = n('55jz'),
        I = n('0kTQ'),
        M = 'SideNav_AccountSwitcher_Button',
        k = 'AccountSwitcher_AddAccount_Button',
        T = 'AccountSwitcher_Logout_Button',
        U = 'AccountSwitcher_ManageAccounts_Button',
        x = n('yrzJ'),
        L = n('y8wG'),
        B = n('v6aA'),
        H = n('3XMw'),
        O = n.n(H),
        F = O.a.j0a8da6e,
        N = O.a.c6f2bf00,
        P = function (e) {
          return m.a.createElement(
            O.a.I18NFormatMessage,
            { $i18n: 'i9bec47a' },
            m.a.createElement(x.a, { color: 'normal', screenName: e }),
          )
        },
        D = (function (e) {
          s()(n, e)
          var t = u()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, c = new Array(a), i = 0; i < a; i++) c[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              p()(f()(e), '_renderMenuSheet', function (t) {
                var n = e.props,
                  a = n.createLocalApiErrorHandlerMultiListFetch,
                  r = n.fetchMultiAccountList,
                  c = n.fetchStatus,
                  i = n.loggedInUser,
                  o = n.multiAccountUsers
                return i
                  ? m.a.createElement(S.a, {
                      accountSwitch: e._multiAccountSwitch,
                      accountUsers: o,
                      activeUser: i,
                      additionalMenuItems: e._getAdditionalAccountMenuItems(),
                      createLocalApiErrorHandlerAccountsFetch: a,
                      fetchAccounts: r,
                      fetchStatus: c,
                      onClose: t,
                      shouldDisplayFetchRenderer: e._hasMultiAccountCookie(),
                      withBadges: !0,
                    })
                  : null
              }),
              p()(f()(e), '_multiAccountSwitch', function (t) {
                var n = t.hasBadge,
                  a = t.isProtected,
                  r = t.userId,
                  c = e.props,
                  i = c.analytics,
                  o = c.createLocalApiErrorHandlerAccountSwitch,
                  s = c.switchAccount
                i.scribe({
                  component: a ? 'switch_to_protected_account' : 'switch_account',
                  element: n ? 'account_badged' : 'account',
                  action: 'click',
                }),
                  s({ user_id: r }).catch(o(I.a))
              }),
              p()(f()(e), '_getAdditionalAccountMenuItems', function () {
                var t = e.props,
                  n = t.loggedInUser,
                  a = t.multiAccountUsers,
                  r = a.length > 1,
                  c = []
                return (
                  a.length >= 5 ||
                    c.push({
                      actionText: F,
                      link: e.context.featureSwitches.isTrue('stateful_login_enabled')
                        ? '/i/flow/login'
                        : '/account/add',
                      scribeElement: 'add_existing_account',
                      testID: k,
                    }),
                  r && c.push({ actionText: N, link: '/account/switch', scribeElement: 'manage_accounts', testID: U }),
                  n && c.push({ actionText: P(n.screen_name), link: '/logout', scribeElement: 'log_out', testID: T }),
                  c
                )
              }),
              p()(f()(e), '_handleAccountSwitcherClick', function () {
                e.props.analytics.scribe({ action: 'click' })
              }),
              p()(f()(e), '_hasMultiAccountCookie', function () {
                return Object(C.a)().hasMultiAccountCookie
              }),
              e
            )
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.analytics,
                    n = e.hasMultiAccountBadges,
                    a = e.isExpanded,
                    r = e.loggedInUser
                  return m.a.createElement(L.a, {
                    analytics: t,
                    currentUser: r,
                    hasMultiAccountBadges: n,
                    interactiveViewTestId: M,
                    isExpanded: a,
                    renderMenuSheet: this._renderMenuSheet,
                  })
                },
              },
            ]),
            n
          )
        })(m.a.Component)
      p()(D, 'contextType', B.a)
      var R = A(D),
        W = n('1eTX'),
        z = n('jwTb'),
        V = n('Irs7'),
        j = n('eqgg'),
        G = O.a.g34f2c63({ verb: '' }),
        q = (function (e) {
          s()(n, e)
          var t = u()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, c = new Array(a), i = 0; i < a; i++) c[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              p()(f()(e), '_handlePress', function (t) {
                e.props.analytics.scribe({ component: 'new_tweet_button', action: 'click' })
              }),
              e
            )
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.composeOptions,
                    n = e.isExpanded,
                    a = e.testID
                  return m.a.createElement(j.a, {
                    icon: X,
                    isExpanded: n,
                    label: G,
                    link: { pathname: '/compose/tweet', state: t },
                    onPress: this._handlePress,
                    testID: a,
                  })
                },
              },
            ]),
            n
          )
        })(m.a.Component),
        X = m.a.createElement(z.a, null),
        Y = Object(V.a)(q),
        K = n('N5qz'),
        Q = 'SideNav_NewTweet_Button',
        J = n('MWbm'),
        Z = n('cHvH'),
        $ = n('rHpw'),
        ee = (function (e) {
          s()(n, e)
          var t = u()(n)
          function n() {
            return r()(this, n), t.apply(this, arguments)
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.SideNavButton,
                    a = t.TabBar,
                    r = t.TeamsSwitcher,
                    c = t.history,
                    i = t.isCollapsedSmall,
                    o = t.isExpanded,
                    s = t.isLoggedIn,
                    l = t.isTwoColumn,
                    u = t.location,
                    d = t.logoButton,
                    p = t.onTabRefresh,
                    h = t.widthStyle,
                    g = t.withTweetButton,
                    f = [te.root, h, i ? te.rootPaddingSmall : te.rootPaddingNormal],
                    _ = d || m.a.createElement(W.a, { onClick: p, pullLeft: !1, size: 'large' })
                  return m.a.createElement(Z.a, null, function (t) {
                    var i = t.windowHeight
                    return m.a.createElement(
                      J.a,
                      { style: f },
                      m.a.createElement(
                        J.a,
                        { style: [te.topSection, !o && te.alignItemsCenter] },
                        m.a.createElement(J.a, { style: te.topControl }, _),
                        m.a.createElement(
                          J.a,
                          { style: [te.appTabBar, !o && te.alignItemsCenter] },
                          m.a.createElement(a, {
                            history: c,
                            layout: 'vertical',
                            location: u,
                            onTabRefresh: p,
                            wideMode: l,
                            withExtendedItems: !0,
                            withLabel: o,
                          }),
                        ),
                        s && (n || g) ? e._renderButton(i) : null,
                      ),
                      s
                        ? m.a.createElement(
                            J.a,
                            { style: [te.footerContainer, !o && te.alignItemsCenter] },
                            m.a.createElement(R, { isExpanded: o }),
                            r ? m.a.createElement(r, { isExpanded: o }) : null,
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
                    a = t.composeOptions,
                    r = t.isExpanded
                  return m.a.createElement(
                    J.a,
                    {
                      style: [
                        te.button,
                        !r && te.alignItemsCenter,
                        'tall' === K.a.getHeightMode(e) && te.withTallHeight,
                      ],
                    },
                    n
                      ? m.a.createElement(n, { isExpanded: r })
                      : m.a.createElement(Y, { composeOptions: a, isExpanded: r, testID: Q }),
                  )
                },
              },
            ]),
            n
          )
        })(m.a.Component)
      p()(ee, 'defaultProps', { withTweetButton: !0 })
      var te = $.a.create(function (e) {
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
        return o
      })
      var a = n('4+NY'),
        r = n('oEOe'),
        c = n('5oBF'),
        i = {
          REQUEST: 'rweb/multiAccount/SWITCH_REQUEST',
          SUCCESS: 'rweb/multiAccount/SWITCH_SUCCESS',
          FAILURE: 'rweb/multiAccount/SWITCH_FAILURE',
        },
        o = function (e) {
          return function (t, n, o) {
            var s = o.api,
              l = Object(r.b)(t, { request: s.Auth.switch, params: e })
            return t(Object(c.g)()).then(function () {
              return t(Object(a.b)()).then(function () {
                return l({ actionTypes: i, context: 'SWITCH' }).then(function () {
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
        return H
      })
      var a = n('VrFO'),
        r = n.n(a),
        c = n('Y9Ll'),
        i = n.n(c),
        o = n('1Pcy'),
        s = n.n(o),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('2VqO'),
        p = n.n(d),
        h = n('KEM+'),
        m = n.n(h),
        g = (n('2G9S'), n('ho0z'), n('ERkP')),
        f = n.n(g),
        _ = n('ZUOq'),
        w = n('3XMw'),
        E = n.n(w),
        y = n('ACHU'),
        b = n('aWzz'),
        v = n('MWbm'),
        A = n('I4+6'),
        C = n('rHpw'),
        S = n('XP29'),
        I = n('jV+4'),
        M = n('Znyr'),
        k = n('OiMc'),
        T = n('cm6r'),
        U = E.a.d86bbf0f,
        x = E.a.h6beb5fa,
        L = E.a.b8e1d524,
        B = E.a.gef27c4c,
        H = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, c = new Array(a), i = 0; i < a; i++) c[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              m()(s()(e), '_renderUser', function (t) {
                var n = e.props.isExpanded,
                  a = t.name,
                  r = t.profile_image_url_https,
                  c = t.protected,
                  i = t.screen_name,
                  o = t.verified
                return f.a.createElement(
                  f.a.Fragment,
                  null,
                  f.a.createElement(
                    v.a,
                    null,
                    f.a.createElement(S.a, { accessibilityLabel: a, screenName: i, size: 'xLarge', uri: r }),
                    n ? null : e._renderBadge(),
                  ),
                  n
                    ? f.a.createElement(
                        f.a.Fragment,
                        null,
                        f.a.createElement(I.a, {
                          isProtected: c,
                          isVerified: o,
                          name: a,
                          screenName: i,
                          style: O.userName,
                          withStackedLayout: !0,
                        }),
                        f.a.createElement(
                          v.a,
                          { style: O.iconContainer },
                          f.a.createElement(y.a, { style: O.icon }),
                          n ? e._renderBadge() : null,
                        ),
                      )
                    : null,
                )
              }),
              m()(s()(e), '_renderEmptyState', function () {
                var t = e.props.renderEmptyState
                return t ? f.a.createElement(v.a, { style: O.emptyStateWrapper }, t()) : null
              }),
              m()(s()(e), '_renderBadge', function () {
                var t = e.props,
                  n = t.hasMultiAccountBadges,
                  a = t.isExpanded
                return n
                  ? f.a.createElement(M.a, {
                      pip: !0,
                      style: a && O.pip,
                      truncatedCountFormatter: x,
                      unreadCountLabel: U,
                    })
                  : null
              }),
              m()(s()(e), '_handleAccountSwitcherClick', function () {
                e.props.analytics.scribe({ action: 'click' })
              }),
              e
            )
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.accessibilityLabel,
                    n = e.currentUser,
                    a = e.hoverLabel,
                    r = e.interactiveViewTestId,
                    c = e.isExpanded,
                    i = e.renderEmptyState,
                    o = e.renderMenuSheet
                  return n || i
                    ? f.a.createElement(
                        k.a,
                        {
                          contentStyle: O.menuContainer,
                          enableEnterKeyToggle: !0,
                          renderContent: o,
                          withArrow: !0,
                          withFixedPosition: !0,
                        },
                        f.a.createElement(
                          T.a,
                          {
                            accessibilityLabel: t || B,
                            accessibilityRole: 'button',
                            hoverLabel: c ? void 0 : { label: a || L },
                            interactiveStyles: A.a.generate({
                              backgroundColor: 'transparent',
                              color: C.a.theme.colors.text,
                            }),
                            onClick: this._handleAccountSwitcherClick,
                            style: O.anchorContainer,
                            testID: r,
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
        })(f.a.Component)
      m()(H, 'contextTypes', { featureSwitches: b.object })
      var O = C.a.create(function (e) {
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
