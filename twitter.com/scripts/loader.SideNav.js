;(window.webpackJsonp = window.webpackJsonp || []).push([
  [184],
  {
    '0kTQ': function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return u
      })
      var n,
        r = a('KEM+'),
        o = a.n(r),
        i = a('k49u'),
        c = a('LVU8'),
        l = a('3XMw'),
        s = a.n(l).a.b20a3893,
        u =
          ((n = {}),
          o()(n, i.a.AppInReadOnlyMode, { customAction: c.b }),
          o()(n, i.a.TargetUserNotFound, { toast: { text: s } }),
          o()(n, 'showToast', !0),
          n)
    },
    '55jz': function (e, t, a) {
      'use strict'
      var n = a('VrFO'),
        r = a.n(n),
        o = a('Y9Ll'),
        i = a.n(o),
        c = a('1Pcy'),
        l = a.n(c),
        s = a('5Yy7'),
        u = a.n(s),
        d = a('2VqO'),
        p = a.n(d),
        m = a('KEM+'),
        h = a.n(m),
        y = (a('2G9S'), a('z84I'), a('hBvt'), a('LW0h'), a('7x/C'), a('ho0z'), a('ERkP')),
        g = a.n(y),
        v = a('k49u'),
        f = a('3XMw'),
        b = a.n(f),
        C = a('IMYl'),
        w = a('fs1G'),
        E = a('MWbm'),
        x = a('Irs7'),
        S = a('OOKO'),
        k = a('CKsB'),
        I = a('t62R'),
        _ = a('IMA+'),
        T = a('Znyr'),
        L = a('G1WX'),
        B = a('rHpw'),
        A = b.a.d86bbf0f,
        M = b.a.h6beb5fa,
        U = b.a.b7dc3884,
        H = (function (e) {
          u()(a, e)
          var t = p()(a)
          function a() {
            var e
            r()(this, a)
            for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              h()(l()(e), '_renderAdditionalMenuItems', function () {
                return (e.props.additionalMenuItems || []).map(function (t, a) {
                  return g.a.createElement(
                    g.a.Fragment,
                    { key: a },
                    0 === a ? g.a.createElement(S.a, null) : null,
                    g.a.createElement(k.a, {
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
              h()(l()(e), '_renderTitle', function () {
                var t = e.props.title
                return t ? g.a.createElement(I.b, { size: 'headline1', style: P.title, weight: 'bold' }, t) : null
              }),
              h()(l()(e), '_renderUserAccounts', function () {
                var t = e.props,
                  a = t.accountUsers,
                  n = t.activeUser,
                  r = t.withBadges,
                  o = void 0 !== r && r
                return a.filter(function (e) {
                  return e.user_id !== (null == n ? void 0 : n.id_str)
                }).length > 0
                  ? g.a.createElement(
                      g.a.Fragment,
                      null,
                      a.map(function (t) {
                        var a = t.user_id === n.id_str,
                          r = t.badgeCount
                        return g.a.createElement(_.a, {
                          accessibilityLabel: a ? void 0 : U({ screenName: t.screen_name }),
                          avatarUri: t.avatar_image_url,
                          decoration: e._renderUserDecoration({ badgeCount: r, withBadges: o, isActiveUser: a }),
                          displayMode: 'UserCompact',
                          isProtected: t.is_protected,
                          isVerified: t.is_verified,
                          key: t.user_id,
                          name: t.name,
                          onCellClick: a
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
                  : g.a.createElement(_.a, {
                      avatarUri: n.profile_image_url_https,
                      decoration: e._renderUserDecoration({ withBadges: o, isActiveUser: !0 }),
                      displayMode: 'UserCompact',
                      isProtected: n.protected,
                      isVerified: n.verified,
                      name: n.name,
                      screenName: n.screen_name,
                      userId: n.id_str,
                      withLink: !1,
                    })
              }),
              h()(l()(e), '_renderUserDecoration', function (e) {
                var t = e.badgeCount,
                  a = e.isActiveUser,
                  n = e.withBadges
                return a
                  ? g.a.createElement(C.a, { style: [P.iconCheckMark, P.userDecoration] })
                  : t && n
                  ? g.a.createElement(T.a, {
                      count: t,
                      standalone: !0,
                      style: P.userDecoration,
                      truncatedCountFormatter: M,
                      unreadCountLabel: A,
                    })
                  : void 0
              }),
              h()(l()(e), '_handleMultiAccountSwitch', function (t) {
                var a = t.hasBadge,
                  n = t.isProtected,
                  r = t.userId
                return function () {
                  var t = e.props,
                    o = t.accountSwitch,
                    i = t.onClose
                  o({ hasBadge: a, isProtected: n, userId: r }), i()
                }
              }),
              h()(l()(e), '_handleFetch', function () {
                var t = e.props,
                  a = t.createLocalApiErrorHandlerAccountsFetch
                ;(0, t.fetchAccounts)().catch(a(h()({}, v.a.AppInReadOnlyMode, { customAction: w.a })))
              }),
              h()(l()(e), '_handleMenuItemClick', function (t, a) {
                return function () {
                  var n = e.props,
                    r = n.analytics,
                    o = n.onClose
                  t && r.scribe({ element: t, action: 'click' }), null == a || a(), o()
                }
              }),
              e
            )
          }
          return (
            i()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    a = e.shouldDisplayFetchRenderer
                  return g.a.createElement(
                    E.a,
                    { style: P.menuContainer },
                    this._renderTitle(),
                    a
                      ? g.a.createElement(L.a, {
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
            a
          )
        })(g.a.Component),
        P = B.a.create(function (e) {
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
      t.a = Object(x.a)(H)
    },
    FITr: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        o = a('ERkP'),
        i = a.n(o),
        c = a('Lsrn'),
        l = a('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [c.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M20.235 14.61c-.375-1.745-2.342-3.506-4.01-4.125l-.544-4.948 1.495-2.242c.157-.236.172-.538.037-.787-.134-.25-.392-.403-.675-.403h-9.14c-.284 0-.542.154-.676.403-.134.25-.12.553.038.788l1.498 2.247-.484 4.943c-1.668.62-3.633 2.38-4.004 4.116-.04.16-.016.404.132.594.103.132.304.29.68.29H8.64l2.904 6.712c.078.184.26.302.458.302s.38-.118.46-.302l2.903-6.713h4.057c.376 0 .576-.156.68-.286.146-.188.172-.434.135-.59z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    'IMA+': function (e, t, a) {
      'use strict'
      var n = a('97Jx'),
        r = a.n(n),
        o = a('VrFO'),
        i = a.n(o),
        c = a('Y9Ll'),
        l = a.n(c),
        s = a('1Pcy'),
        u = a.n(s),
        d = a('5Yy7'),
        p = a.n(d),
        m = a('2VqO'),
        h = a.n(m),
        y = a('KEM+'),
        g = a.n(y),
        v = (a('yH/f'), a('2G9S'), a('ho0z'), a('hBvt'), a('vrRf'), a('1t7P'), a('jQ/y'), a('SV7d')),
        f = a('ERkP'),
        b = a.n(f),
        C = a('TIdA'),
        w = a('t62R'),
        E = a('5mJL'),
        x = a('DNho'),
        S = a('nBUg'),
        k = a('qjak'),
        I = a('ir4X'),
        _ = a('htQn'),
        T = a('e5HP'),
        L = a('FBXD'),
        B = a('Nqmc'),
        A = a('rHpw'),
        M = a('oSwX'),
        U = a('1I0O'),
        H = a('pBrB'),
        P = a('jV+4'),
        F = a('MWbm'),
        R = Object.freeze({ TWEET: 'tweets', USER: 'users' }),
        z = Object.freeze({
          UserCompact: 'UserCompact',
          UserConcise: 'UserConcise',
          UserDetailed: 'UserDetailed',
          ExperimentalUserTypeahead: 'ExperimentalUserTypeahead',
        }),
        O = C.a.createLayoutCache(),
        D = { viewType: 'user_cell' },
        N = (function (e) {
          p()(a, e)
          var t = h()(a)
          function a() {
            var e
            i()(this, a)
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              g()(u()(e), '_renderUserName', function () {
                var t = e.props,
                  a = t.badgeContext,
                  n = t.disabledMessage,
                  r = t.displayNameLabel,
                  o = t.isBlocking,
                  i = t.isDisabled,
                  c = t.isFollowedBy,
                  l = t.isProtected,
                  s = t.isVerified,
                  u = t.name,
                  d = t.onScreenNameClick,
                  p = t.promotedContent,
                  m = t.promotedItemType,
                  h = t.screenName,
                  y = t.screenNameSuffix,
                  g = t.translatorType,
                  v = t.withFollowsYou,
                  f = t.withLink,
                  C = b.a.createElement(P.a, {
                    badgeContext: a,
                    displayNameLabel: r,
                    isProtected: l,
                    isVerified: s,
                    name: u,
                    onLinkClick: d,
                    promotedContent: m === R.TWEET ? p : void 0,
                    screenName: h,
                    screenNameSuffix: y,
                    translatorType: g,
                    withFollowsYou: v && c,
                    withHoverCard: !o && !i && f,
                    withLink: !i && f,
                    withScreenName: !n,
                    withStackedLayout: !0,
                  })
                return n
                  ? b.a.createElement(
                      F.a,
                      { style: j.disabledMessageContainer },
                      C,
                      b.a.createElement(w.b, { color: 'gray700' }, n),
                    )
                  : C
              }),
              g()(u()(e), '_renderSocialContext', function () {
                var t = e.props,
                  a = t.avatarSize,
                  n = t.displayMode,
                  r = t.socialContext
                return r
                  ? b.a.createElement(S.b.UseProps, null, function (e) {
                      return b.a.createElement(B.a, {
                        avatarSize: a,
                        contextType: r.contextType,
                        iconSize: 'large',
                        link: r.link,
                        style: j.socialContext,
                        text: r.text,
                        weight: 'bold',
                        withLeftPadding: !e.socialContextRefreshEnabled() && n !== z.ExperimentalUserTypeahead,
                      })
                    })
                  : null
              }),
              g()(u()(e), '_renderUserTypeaheadSocialContext', function () {
                var t = e.props.socialContext,
                  a =
                    (t && Object(k.a)({ link: t.link, text: t.text, iconSize: 'small', contextType: t.contextType })) ||
                    {},
                  n = a.Icon,
                  r = a.text
                return t
                  ? b.a.createElement(
                      F.a,
                      { style: j.userTypeaheadSocialContext },
                      b.a.createElement(F.a, { style: j.userTypeaheadSocialContextIcon }, n),
                      b.a.createElement(
                        w.b,
                        { color: 'gray700', numberOfLines: 1, style: j.userTypeaheadSocialContextText },
                        r,
                      ),
                    )
                  : null
              }),
              g()(u()(e), '_renderHighlightedUserLabel', function () {
                var t = e.props.highlightedLabel
                return t ? b.a.createElement(I.a, { label: t }) : null
              }),
              g()(u()(e), '_isEligibleForBio', function () {
                var t = e.props.displayMode
                return -1 !== [z.UserDetailed, z.UserConcise].indexOf(t)
              }),
              g()(u()(e), '_handleKeyPress', function (t) {
                t.defaultPrevented || 'Enter' !== t.key || e._handleClick(t)
              }),
              g()(
                u()(e),
                '_handleClick',
                Object(L.a)(function (t) {
                  var a = e.props.onCellClick
                  t.preventDefault(), a && a()
                }),
              ),
              e
            )
          }
          return (
            l()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.accessibilityLabel,
                    a = e.accessibilityState,
                    n = e.avatarDecoration,
                    o = e.avatarSize,
                    i = e.avatarUri,
                    c = e.bottomControl,
                    l = e.decoration,
                    s = e.displayMode,
                    u = e.isBlocking,
                    d = e.isDisabled,
                    p = e.onAvatarClick,
                    m = e.onCellClick,
                    h = e.onScreenNameClick,
                    y = e.presenceIndicator,
                    g = e.promotedContent,
                    f = e.promotedItemType,
                    C = e.screenName,
                    w = e.style,
                    S = e.testID,
                    k = e.userId,
                    I = e.withDarkerInteractiveBackground,
                    L = e.withInteractiveStyling,
                    B = e.withLink,
                    A = e.withUsernameCenterAligned,
                    H = B && !u,
                    P = s === z.UserCompact || A,
                    N = s === z.ExperimentalUserTypeahead,
                    V =
                      g && f === R.USER && 'earned' !== (g.disclosure_type && g.disclosure_type.toLowerCase())
                        ? b.a.createElement(T.a, { contentAuthorId: k, promotedContent: g, style: j.promotedIndicator })
                        : null,
                    W = {
                      accessibilityHidden: !0,
                      decoration: n,
                      focusable: !1,
                      imageLayoutCache: O,
                      onClick: p,
                      onHoverCardScreenNameClick: h,
                      promotedContent: g,
                      screenName: C,
                      style: j.avatar,
                      uri: i,
                      withHoverCard: H,
                      withLink: B,
                    },
                    K = b.a.createElement(x.a.Consumer, null, function (e) {
                      var t = e.avatarSize
                      return y
                        ? b.a.createElement(U.a, r()({}, W, y, { size: t }))
                        : b.a.createElement(M.default, r()({ size: t }, W))
                    }),
                    q = a && 'boolean' == typeof a.checked,
                    G = void 0 !== m,
                    X = (q ? 'radio' : G && 'button') || 'listitem',
                    Y = this._renderUserName(),
                    Q = this._renderHighlightedUserLabel(),
                    J = this._renderBio(),
                    Z = Q || J || V || c,
                    $ = b.a.createElement(
                      b.a.Fragment,
                      null,
                      Q,
                      J,
                      V,
                      c ? b.a.createElement(F.a, { style: j.bottomControl }, c) : null,
                    )
                  return b.a.createElement(
                    v.a,
                    { behavioralEventContext: D },
                    b.a.createElement(
                      _.a,
                      {
                        accessibilityLabel: t,
                        accessibilityRole: X,
                        accessibilityState: a,
                        disabled: !!d,
                        focusable: q || G,
                        onClick: this._handleClick,
                        onKeyPress: this._handleKeyPress,
                        pointerEvents: d ? 'none' : void 0,
                        style: [j.root, w],
                        testID: S,
                        withDarkerInteractiveBackground: I,
                        withInteractiveStyling: null != L ? L : !!m,
                      },
                      N ? null : this._renderSocialContext(),
                      b.a.createElement(
                        E.a,
                        {
                          avatarCell: K,
                          avatarCellStyle: [j.avatarColumn, P && j.bodyColumnCentered],
                          avatarSize: N ? 'xxxLarge' : o,
                          cellStyle: [j.bodyColumn, P && j.bodyColumnCentered],
                        },
                        b.a.createElement(F.a, { style: j.body }, Y, l),
                        P ? null : $,
                        N ? this._renderUserTypeaheadSocialContext() : null,
                      ),
                      Z && P
                        ? b.a.createElement(
                            E.a,
                            { avatarCell: null, avatarCellStyle: j.avatarColumn, cellStyle: j.bodyColumn },
                            $,
                          )
                        : null,
                    ),
                  )
                },
              },
              {
                key: '_renderBio',
                value: function () {
                  var e = this.props,
                    t = e.description,
                    a = e.displayMode,
                    n = e.entities,
                    r = e.userId,
                    o = e.withheldDescription,
                    i = e.withheldEntities
                  return n && t && this._isEligibleForBio()
                    ? b.a.createElement(H.a, {
                        description: t,
                        entities: n,
                        isConcise: a === z.UserConcise,
                        style: j.bio,
                        userId: r,
                        withheldDescription: o,
                        withheldEntities: i,
                      })
                    : null
                },
              },
            ]),
            a
          )
        })(b.a.PureComponent)
      g()(N, 'defaultProps', { testID: 'UserCell', withLink: !0 })
      var j = A.a.create(function (e) {
        return {
          root: {
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.componentDimensions.gutterVertical,
          },
          avatarColumn: { justifyContent: 'flex-start' },
          bodyColumn: { flexGrow: 1 },
          bodyColumnCentered: { justifyContent: 'center' },
          avatar: { display: 'block', width: '100%' },
          bio: { paddingTop: e.spaces.space4, whiteSpace: 'normal' },
          socialContext: { marginBottom: e.spaces.space4 },
          userTypeaheadSocialContext: { alignItems: 'center', flexDirection: 'row', textColor: e.colors.gray700 },
          userTypeaheadSocialContextIcon: { flexShrink: 0 },
          userTypeaheadSocialContextText: { paddingLeft: e.spaces.space2 },
          body: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
          promotedIndicator: { margin: 0, paddingTop: e.spaces.space4, paddingBottom: 0, paddingHorizontal: 0 },
          bottomControl: { paddingTop: e.spaces.space4 },
          disabledMessageContainer: { flexShrink: 1 },
        }
      })
      t.a = N
    },
    LzTg: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'default', function () {
          return $
        })
      var n = a('VrFO'),
        r = a.n(n),
        o = a('Y9Ll'),
        i = a.n(o),
        c = a('5Yy7'),
        l = a.n(c),
        s = a('2VqO'),
        u = a.n(s),
        d = a('KEM+'),
        p = a.n(d),
        m = a('ERkP'),
        h = a.n(m),
        y = a('1Pcy'),
        g = a.n(y),
        v = (a('2G9S'), a('qtu+')),
        f = a('G6rE'),
        b = a('rxPX'),
        C = a('0KEI'),
        w = a('auX9'),
        E = a('kGix'),
        x = Object(b.a)()
          .propsFromState(function () {
            return {
              fetchStatus: w.g,
              loggedInUser: f.e.selectLoggedInUser,
              multiAccountUsers: w.j,
              hasMultiAccountBadges: w.h,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandlerAccountSwitch: Object(C.createLocalApiErrorHandlerWithContextFactory)(
                'ACCOUNT_SWITCHER_ACCOUNT_SWITCH',
              ),
              createLocalApiErrorHandlerMultiListFetch: Object(C.createLocalApiErrorHandlerWithContextFactory)(
                'ACCOUNT_SWITCHER_MULTI_LIST_FETCH',
              ),
              fetchMultiAccountList: w.c,
              switchAccount: v.a,
            }
          })
          .adjustStateProps(function (e) {
            var t = e.fetchStatus,
              a = e.hasMultiAccountBadges,
              n = e.loggedInUser,
              r = e.multiAccountUsers
            return {
              fetchStatus: t === E.a.NONE ? E.a.LOADING : t,
              hasMultiAccountBadges: !!n && a,
              loggedInUser: n,
              multiAccountUsers: r,
            }
          })
          .withAnalytics({ page: 'nav', section: 'account_switcher' }),
        S = a('3Wr5'),
        k = a('3XMw'),
        I = a.n(k),
        _ = a('55jz'),
        T = a('0kTQ'),
        L = 'SideNav_AccountSwitcher_Button',
        B = 'AccountSwitcher_AddAccount_Button',
        A = 'AccountSwitcher_Logout_Button',
        M = 'AccountSwitcher_ManageAccounts_Button',
        U = a('y8wG'),
        H = a('v6aA'),
        P = I.a.j0a8da6e,
        F = I.a.c6f2bf00,
        R = I.a.a58e0e51,
        z = (function (e) {
          l()(a, e)
          var t = u()(a)
          function a() {
            var e
            r()(this, a)
            for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              p()(g()(e), '_renderMenuSheet', function (t) {
                var a = e.props,
                  n = a.createLocalApiErrorHandlerMultiListFetch,
                  r = a.fetchMultiAccountList,
                  o = a.fetchStatus,
                  i = a.loggedInUser,
                  c = a.multiAccountUsers
                return i
                  ? h.a.createElement(_.a, {
                      accountSwitch: e._multiAccountSwitch,
                      accountUsers: c,
                      activeUser: i,
                      additionalMenuItems: e._getAdditionalAccountMenuItems(),
                      createLocalApiErrorHandlerAccountsFetch: n,
                      fetchAccounts: r,
                      fetchStatus: o,
                      onClose: t,
                      shouldDisplayFetchRenderer: e._hasMultiAccountCookie(),
                      withBadges: !0,
                    })
                  : null
              }),
              p()(g()(e), '_multiAccountSwitch', function (t) {
                var a = t.hasBadge,
                  n = t.isProtected,
                  r = t.userId,
                  o = e.props,
                  i = o.analytics,
                  c = o.createLocalApiErrorHandlerAccountSwitch,
                  l = o.switchAccount
                i.scribe({
                  component: n ? 'switch_to_protected_account' : 'switch_account',
                  element: a ? 'account_badged' : 'account',
                  action: 'click',
                }),
                  l({ user_id: r }).catch(c(T.a))
              }),
              p()(g()(e), '_getAdditionalAccountMenuItems', function () {
                var t = e.props,
                  a = t.loggedInUser,
                  n = t.multiAccountUsers,
                  r = n.length > 1,
                  o = []
                return (
                  n.length >= 5 ||
                    o.push({
                      actionText: P,
                      link: e.context.featureSwitches.isTrue('stateful_login_enabled')
                        ? '/i/flow/login'
                        : '/account/add',
                      scribeElement: 'add_existing_account',
                      testID: B,
                    }),
                  r && o.push({ actionText: F, link: '/account/switch', scribeElement: 'manage_accounts', testID: M }),
                  a &&
                    o.push({
                      actionText: R({ screenName: a.screen_name }),
                      link: '/logout',
                      scribeElement: 'log_out',
                      testID: A,
                    }),
                  o
                )
              }),
              p()(g()(e), '_handleAccountSwitcherClick', function () {
                e.props.analytics.scribe({ action: 'click' })
              }),
              p()(g()(e), '_hasMultiAccountCookie', function () {
                return Object(S.a)().hasMultiAccountCookie
              }),
              e
            )
          }
          return (
            i()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.analytics,
                    a = e.hasMultiAccountBadges,
                    n = e.isExpanded,
                    r = e.loggedInUser
                  return h.a.createElement(U.a, {
                    analytics: t,
                    currentUser: r,
                    hasMultiAccountBadges: a,
                    interactiveViewTestId: L,
                    isExpanded: n,
                    renderMenuSheet: this._renderMenuSheet,
                  })
                },
              },
            ]),
            a
          )
        })(h.a.Component)
      p()(z, 'contextType', H.a)
      var O = x(z),
        D = a('1eTX'),
        N = a('jwTb'),
        j = a('Irs7'),
        V = a('eqgg'),
        W = I.a.g34f2c63({ verb: '' }),
        K = (function (e) {
          l()(a, e)
          var t = u()(a)
          function a() {
            var e
            r()(this, a)
            for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              p()(g()(e), '_handlePress', function (t) {
                e.props.analytics.scribe({ component: 'new_tweet_button', action: 'click' })
              }),
              e
            )
          }
          return (
            i()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.composeOptions,
                    a = e.isExpanded,
                    n = e.testID
                  return h.a.createElement(V.a, {
                    icon: q,
                    isExpanded: a,
                    label: W,
                    link: { pathname: '/compose/tweet', state: t },
                    onPress: this._handlePress,
                    testID: n,
                  })
                },
              },
            ]),
            a
          )
        })(h.a.Component),
        q = h.a.createElement(N.a, null),
        G = Object(j.a)(K),
        X = a('N5qz'),
        Y = 'SideNav_NewTweet_Button',
        Q = a('MWbm'),
        J = a('cHvH'),
        Z = a('rHpw'),
        $ = (function (e) {
          l()(a, e)
          var t = u()(a)
          function a() {
            return r()(this, a), t.apply(this, arguments)
          }
          return (
            i()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    a = t.SideNavButton,
                    n = t.TabBar,
                    r = t.TeamsSwitcher,
                    o = t.history,
                    i = t.isCollapsedSmall,
                    c = t.isExpanded,
                    l = t.isLoggedIn,
                    s = t.isTwoColumn,
                    u = t.location,
                    d = t.logoButton,
                    p = t.onTabRefresh,
                    m = t.widthStyle,
                    y = t.withTweetButton,
                    g = [ee.root, m, i ? ee.rootPaddingSmall : ee.rootPaddingNormal],
                    v = d || h.a.createElement(D.a, { onClick: p, pullLeft: !1, size: 'large' })
                  return h.a.createElement(J.a, null, function (t) {
                    var i = t.windowHeight
                    return h.a.createElement(
                      Q.a,
                      { style: g },
                      h.a.createElement(
                        Q.a,
                        { style: [ee.topSection, !c && ee.alignItemsCenter] },
                        h.a.createElement(Q.a, { style: ee.topControl }, v),
                        h.a.createElement(
                          Q.a,
                          { style: [ee.appTabBar, !c && ee.alignItemsCenter] },
                          h.a.createElement(n, {
                            history: o,
                            layout: 'vertical',
                            location: u,
                            onTabRefresh: p,
                            wideMode: s,
                            withExtendedItems: !0,
                            withLabel: c,
                          }),
                        ),
                        l && (a || y) ? e._renderButton(i) : null,
                      ),
                      l
                        ? h.a.createElement(
                            Q.a,
                            { style: [ee.footerContainer, !c && ee.alignItemsCenter] },
                            h.a.createElement(O, { isExpanded: c }),
                            r ? h.a.createElement(r, { isExpanded: c }) : null,
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
                    a = t.SideNavButton,
                    n = t.composeOptions,
                    r = t.isExpanded
                  return h.a.createElement(
                    Q.a,
                    {
                      style: [
                        ee.button,
                        !r && ee.alignItemsCenter,
                        'tall' === X.a.getHeightMode(e) && ee.withTallHeight,
                      ],
                    },
                    a
                      ? h.a.createElement(a, { isExpanded: r })
                      : h.a.createElement(G, { composeOptions: n, isExpanded: r, testID: Y }),
                  )
                },
              },
            ]),
            a
          )
        })(h.a.Component)
      p()($, 'defaultProps', { withTweetButton: !0 })
      var ee = Z.a.create(function (e) {
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
    Nqmc: function (e, t, a) {
      'use strict'
      var n = a('m3Bd'),
        r = a.n(n),
        o = a('VrFO'),
        i = a.n(o),
        c = a('Y9Ll'),
        l = a.n(c),
        s = a('5Yy7'),
        u = a.n(s),
        d = a('2VqO'),
        p = a.n(d),
        m = a('KEM+'),
        h = a.n(m),
        y = (a('hBvt'), a('uFXj'), a('2G9S'), a('SV7d')),
        g = a('ERkP'),
        v = a.n(g),
        f = a('t62R'),
        b = a('5mJL'),
        C = a('nBUg'),
        w = a('qjak'),
        E = a('dC06'),
        x = a('rHpw'),
        S = a('XIXT'),
        k = a('yDX5'),
        I = a('MWbm'),
        _ = [
          'avatarSize',
          'bottomControl',
          'iconStyle',
          'nativeID',
          'onLayout',
          'rightControl',
          'style',
          'testID',
          'textColor',
          'textSize',
          'topControl',
          'weight',
          'withBottomBorder',
          'withLeftPadding',
          'withTextCentered',
        ],
        T = { viewType: 'social_context' },
        L = (function (e) {
          u()(a, e)
          var t = p()(a)
          function a() {
            return i()(this, a), t.apply(this, arguments)
          }
          return (
            l()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    a = t.avatarSize,
                    n = t.bottomControl,
                    o = t.iconStyle,
                    i = t.nativeID,
                    c = t.onLayout,
                    l = t.rightControl,
                    s = t.style,
                    u = t.testID,
                    d = t.textColor,
                    p = t.textSize,
                    m = t.topControl,
                    h = t.weight,
                    g = (t.withBottomBorder, t.withLeftPadding),
                    E = (t.withTextCentered, r()(t, _)),
                    x = Object(w.a)(E),
                    S = x.Icon,
                    k = x.accessibilityLabel,
                    L = x.link,
                    A = x.text,
                    M = v.a.createElement(
                      f.b,
                      { accessibilityLabel: k, color: d, nativeID: i, numberOfLines: 2, size: p, testID: u, weight: h },
                      A,
                    ),
                    U = this._getStyles(),
                    H = U.cellStyle,
                    P = U.viewStyle
                  return A
                    ? v.a.createElement(C.b.UseProps, null, function (t) {
                        return v.a.createElement(
                          y.a,
                          { behavioralEventContext: T },
                          v.a.createElement(
                            v.a.Fragment,
                            null,
                            m || null,
                            v.a.createElement(
                              I.a,
                              {
                                onLayout: c,
                                style: [s, P, t.socialContextRefreshEnabled() && !g && B.socialContextRefresh],
                              },
                              v.a.createElement(
                                b.a,
                                {
                                  avatarCell: S || (g ? null : void 0),
                                  avatarCellStyle: [
                                    o,
                                    B.socialContextIconColumn,
                                    !g && B.unsetIconWidth,
                                    t.socialContextRefreshEnabled() && !g && B.socialContextRefreshIcon,
                                  ],
                                  avatarSize: a,
                                  cellStyle: H,
                                },
                                v.a.createElement(
                                  I.a,
                                  { style: B.cellWrapper },
                                  v.a.createElement(
                                    I.a,
                                    {
                                      style: [
                                        B.socialContextTextColumn,
                                        t.socialContextRefreshEnabled() && !g && B.socialContextRefreshTextColumn,
                                      ],
                                    },
                                    L ? e._renderLink(L, M) : M,
                                  ),
                                  l || null,
                                ),
                              ),
                              n || null,
                            ),
                          ),
                        )
                      })
                    : null
                },
              },
              {
                key: '_renderLink',
                value: function (e, t) {
                  var a = this.props,
                    n = a.contextType,
                    r = a.nativeID,
                    o = a.onClick,
                    i = a.retweetData,
                    c = a.textColor,
                    l = a.topicData,
                    s = (i || {}).screenName,
                    u = v.a.createElement(f.b, { color: c, link: e, nativeID: r, onClick: o }, t)
                  return n === E.a.Topic && l
                    ? v.a.createElement(S.a, { topicId: l.topicId }, u)
                    : n === E.a.Retweet && s
                    ? v.a.createElement(k.a, { screenName: s }, u)
                    : u
                },
              },
              {
                key: '_getStyles',
                value: function () {
                  var e = this.props,
                    t = e.bottomControl,
                    a = e.contextType,
                    n = e.withBottomBorder,
                    r = e.withTextCentered,
                    o = a === E.a.TextOnly,
                    i = n ? [B.bottomBorderMargin, t && B.bottomBorder] : [],
                    c = n && !t ? [B.bottomBorder] : []
                  return (
                    o && c.push(B.topicContext),
                    r && c.push(B.socialContextTextCentered),
                    { viewStyle: i, cellStyle: c }
                  )
                },
              },
            ]),
            a
          )
        })(v.a.PureComponent)
      h()(L, 'defaultProps', {
        iconSize: 'small',
        textColor: 'gray700',
        textSize: 'subtext2',
        withBottomBorder: !1,
        withLeftPadding: !0,
        withTextCentered: !1,
      })
      var B = x.a.create(function (e) {
        return {
          socialContextIconColumn: { alignItems: 'flex-end', justifyContent: 'center' },
          bottomBorderMargin: { marginBottom: e.componentDimensions.gutterVertical },
          cellWrapper: { flexDirection: 'row' },
          bottomBorder: {
            paddingBottom: e.spaces.space4,
            borderBottomStyle: 'solid',
            borderBottomWidth: e.borderWidths.small,
            borderBottomColor: e.colors.borderColor,
          },
          topicContext: { paddingBottom: 'calc('.concat(e.spaces.space4, ' + ').concat(e.spaces.space2, ')') },
          socialContextTextColumn: { alignItems: 'flex-start', flexShrink: 1, justifyContent: 'center' },
          unsetIconWidth: { flexBasis: 'unset' },
          socialContextRefreshIcon: { marginRight: e.spaces.space8 },
          socialContextRefresh: { marginBottom: e.spaces.space8 },
          socialContextRefreshTextColumn: { minHeight: e.spaces.space32 },
          socialContextTextCentered: { justifyContent: 'center' },
        }
      })
      t.a = L
    },
    OOKO: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return c
      })
      a('uFXj')
      var n = a('ERkP'),
        r = a.n(n),
        o = a('rHpw'),
        i = a('MWbm')
      function c(e) {
        var t = e.spacing
        return r.a.createElement(i.a, {
          accessibilityRole: 'separator',
          style: [l.divider, { marginVertical: null != t ? o.a.theme.spaces[t] : void 0 }],
        })
      }
      var l = o.a.create(function (e) {
        return { divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }
      })
    },
    aPcQ: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        o = a('ERkP'),
        i = a.n(o),
        c = a('Lsrn'),
        l = a('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [c.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M20 16H5.81l2.72-2.72c.294-.293.294-.768 0-1.06s-.767-.294-1.06 0l-4 4c-.293.292-.293.767 0 1.06l4 4c.146.147.338.22.53.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06L5.81 17.5H20c.414 0 .75-.337.75-.75S20.414 16 20 16zm.53-9.28l-4-4c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l2.72 2.72H4c-.414 0-.75.337-.75.75S3.586 8 4 8h14.19l-2.72 2.72c-.294.293-.294.768 0 1.06.146.147.338.22.53.22s.384-.073.53-.22l4-4c.293-.293.293-.767 0-1.06z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    dC06: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return n
      })
      a('yH/f'), a('ERkP')
      var n = Object.freeze({
        Community: 'Community',
        Pin: 'Pin',
        Retweet: 'Retweet',
        Like: 'Like',
        Follow: 'Follow',
        Moment: 'Moment',
        NewTweets: 'NewTweets',
        Reply: 'Reply',
        Conversation: 'Conversation',
        TextOnly: 'TextOnly',
        Facepile: 'Facepile',
        Feedback: 'Feedback',
        Topic: 'Topic',
        List: 'List',
        Location: 'Location',
        Megaphone: 'Megaphone',
        Bird: 'Bird',
        NewUser: 'NewUser',
        SmartBlockExpiration: 'SmartBlockExpiration',
        FollowMutual: 'FollowMutual',
        FollowFollowing: 'FollowFollowing',
        FollowFollowed: 'FollowFollowed',
        SocialProof: 'SocialProof',
        Spaces: 'Spaces',
        Sparkle: 'Sparkle',
        Trending: 'Trending',
      })
    },
    e5HP: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return U
      })
      var n = a('VrFO'),
        r = a.n(n),
        o = a('Y9Ll'),
        i = a.n(o),
        c = a('5Yy7'),
        l = a.n(c),
        s = a('2VqO'),
        u = a.n(s),
        d = a('KEM+'),
        p = a.n(d),
        m = a('ERkP'),
        h = a.n(m),
        y = a('t62R'),
        g = a('3XMw'),
        v = a.n(g),
        f = a('rHpw'),
        b = a('MWbm'),
        C = a('yiKp'),
        w = a.n(C),
        E = a('Lsrn'),
        x = a('k/Ka'),
        S = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(x.a)(
            'svg',
            w()(
              w()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [E.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            h.a.createElement(
              'g',
              null,
              h.a.createElement('path', {
                d: 'M12 1C5.92 1 1 5.92 1 12s4.92 11 11 11 11-4.92 11-11S18.08 1 12 1zm5.05 12.48c0 .48-.39.87-.88.87-.477 0-.87-.393-.87-.87V9.94l-6.85 6.85c-.163.166-.387.26-.62.26-.233 0-.457-.094-.62-.26-.338-.341-.338-.899 0-1.24l6.85-6.85h-3.54c-.477 0-.87-.393-.87-.87 0-.49.39-.88.87-.88h5.65c.11 0 .23.03.33.07.11.04.2.1.29.19.09.09.15.18.19.29.04.1.07.22.07.33v5.65z',
              }),
            ),
          )
        }
      S.metadata = { width: 24, height: 24 }
      var k = S,
        I = a('uFYP'),
        _ = v.a.f1a1b790,
        T = v.a.if2bf8b3,
        L = v.a.f3624b5c,
        B = v.a.b4b3b113,
        A = v.a.be22205f,
        M = v.a.hcbbe447,
        U = (function (e) {
          l()(a, e)
          var t = u()(a)
          function a() {
            return r()(this, a), t.apply(this, arguments)
          }
          return (
            i()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.color,
                    a = e.nativeID,
                    n = e.style,
                    r = e.withCircleIcon ? k : I.a
                  return h.a.createElement(
                    b.a,
                    { style: [H.root, n] },
                    h.a.createElement(r, { style: [H.icon, t && H[t]] }),
                    h.a.createElement(y.b, { color: t, nativeID: a, size: 'subtext2' }, this._getPromotedLabel()),
                  )
                },
              },
              {
                key: '_getPromotedLabel',
                value: function () {
                  var e = this.props,
                    t = e.contentAuthorId,
                    a = e.label,
                    n = e.promotedContent,
                    r = n.adMetadataContainer,
                    o = n.advertiser,
                    i = n.advertiser_name,
                    c = n.disclosure_type,
                    l = t && o && t === o.id_str,
                    s = 'string' == typeof c && 'political' === c.toLowerCase(),
                    u = 'string' == typeof c && 'issue' === c.toLowerCase(),
                    d = !(!r || 'POLITICAL' !== r.disclaimerType) || s,
                    p = !(!r || 'ISSUE' !== r.disclaimerType) || u,
                    m = (r || {}).removePromotedAttributionForPreroll
                  return (
                    a ||
                    (!i || l || m
                      ? d
                        ? L
                        : p
                        ? A
                        : T
                      : d
                      ? B({ fullName: i })
                      : p
                      ? M({ fullName: i })
                      : _({ fullName: i }))
                  )
                },
              },
            ]),
            a
          )
        })(h.a.Component)
      p()(U, 'defaultProps', { color: 'gray700', withCircleIcon: !1 })
      var H = f.a.create(function (e) {
        return {
          root: { alignItems: 'center', flexDirection: 'row' },
          icon: { color: e.colors.gray700, height: '1em', marginRight: e.spaces.space4, flexShrink: 0 },
          gray700: { color: e.colors.gray700 },
          white: { color: e.colors.white },
        }
      })
    },
    qjak: function (e, t, a) {
      'use strict'
      a('hBvt'), a('ho0z')
      var n = a('ERkP'),
        r = a.n(n),
        o = a('t62R'),
        i = a('MAI/'),
        c = a('shC7'),
        l = a('dC06'),
        s = a('rHpw'),
        u = a('3XMw'),
        d = a.n(u),
        p = a('FITr'),
        m = a('yVEN'),
        h = a('uCrx'),
        y = a('6ZHn'),
        g = a('GcQN'),
        v = a('x0mb'),
        f = a('Hp3u'),
        b = a('yiKp'),
        C = a.n(b),
        w = a('Lsrn'),
        E = a('k/Ka'),
        x = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(E.a)(
            'svg',
            C()(
              C()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [w.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M19.75 2H4.25C3.01 2 2 3.01 2 4.25v13.003c0 1.24 1.01 2.25 2.25 2.25h4.56l2.59 3.45c.142.19.364.3.6.3.235 0 .457-.11.598-.3l2.588-3.45h4.563c1.24 0 2.25-1.01 2.25-2.25V4.25C22 3.01 20.99 2 19.75 2zM6.963 12.375c-.76 0-1.375-.616-1.375-1.375s.616-1.375 1.375-1.375S8.338 10.24 8.338 11s-.616 1.375-1.375 1.375zm4.85 0c-.76 0-1.375-.616-1.375-1.375s.616-1.375 1.375-1.375 1.375.616 1.375 1.375-.616 1.375-1.375 1.375zm4.85 0c-.76 0-1.375-.616-1.375-1.375s.616-1.375 1.375-1.375c.76 0 1.375.616 1.375 1.375s-.616 1.375-1.375 1.375z',
              }),
            ),
          )
        }
      x.metadata = { width: 24, height: 24 }
      var S = x,
        k = a('EHV7'),
        I = a('wpLu'),
        _ = a('EfHu'),
        T = a('cOhU'),
        L = a('cap5'),
        B = a('r9x5'),
        A = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(E.a)(
            'svg',
            C()(
              C()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [w.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M12 1.25C6.072 1.25 1.25 6.072 1.25 12S6.072 22.75 12 22.75 22.75 17.928 22.75 12 17.928 1.25 12 1.25zm3.75 12.257c-.038 0-.074-.003-.11-.008l-3.667-.54s-.28-.048-.292-.053c-.343-.07-.602-.372-.602-.735V6.417c0-.414.336-.75.75-.75s.75.336.75.75v5.115l3.28.483c.41.06.692.44.632.852-.055.372-.375.64-.74.64z',
              }),
            ),
          )
        }
      A.metadata = { width: 24, height: 24 }
      var M = A,
        U = a('0qK0'),
        H = a('aPcQ'),
        P = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(E.a)(
            'svg',
            C()(
              C()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [w.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M8.417 11.816c1.355 0 2.872-.15 3.84-1.256.813-.93 1.077-2.367.806-4.392-.38-2.826-2.116-4.513-4.645-4.513-2.53 0-4.267 1.687-4.646 4.513-.273 2.025-.01 3.462.805 4.393.968 1.108 2.485 1.257 3.84 1.257zm8.28 7.42c-.88-3.526-4.283-5.99-8.28-5.99-3.998 0-7.403 2.464-8.28 5.99-.172.692-.03 1.4.395 1.94.408.52 1.04.82 1.733.82H14.57c.69 0 1.323-.3 1.73-.82.425-.54.568-1.246.396-1.94zM23.24 3.47h-5.624l1.64-1.642c.315-.316.315-.827 0-1.143-.316-.315-.826-.316-1.143 0l-2.96 2.96c-.16.16-.238.366-.238.572 0 .207.08.414.237.57l2.96 2.962c.16.156.365.234.572.234s.413-.08.57-.236c.316-.316.316-.828 0-1.144l-1.64-1.64h5.623c.414 0 .75-.336.75-.75s-.334-.747-.748-.747z',
              }),
            ),
          )
        }
      P.metadata = { width: 24, height: 24 }
      var F = P,
        R = a('lUZE'),
        z = d.a.jb767df7,
        O = d.a.bb3323fa,
        D = d.a.db0798ed,
        N = d.a.dc716ec8,
        j = function (e) {
          return r.a.createElement(o.b, { dir: c.a.getConstants().isRTL ? 'rtl' : 'ltr', withHashflags: !0 }, e)
        },
        V = function (e, t) {
          return t
            ? z
            : (function (e) {
                var t = j(e)
                return r.a.createElement(d.a.I18NFormatMessage, { $i18n: 'h99e9c95' }, t)
              })(e)
        },
        W = s.a.create(function (e) {
          return {
            small: { height: e.lineHeights.subtext3, width: e.lineHeights.subtext3 },
            large: { height: e.lineHeights.subtext1, width: e.lineHeights.subtext1 },
            xLarge: { height: e.lineHeights.headline1, width: e.lineHeights.headline1 },
          }
        }),
        K = s.a.create(function (e) {
          return {
            circle: { color: e.colors.primary, width: '0.5em' },
            colorDeepGray: { color: e.colors.gray700 },
            colorBlue: { color: e.colors.blue500 },
            colorGreen: { color: e.colors.green500 },
            colorOrange: { color: e.colors.orange500 },
            colorPrimary: { color: e.colors.primary },
            colorRed: { color: e.colors.magenta500 },
            grayscaleImage: { borderRadius: e.borderRadii.infinite, filter: 'grayscale(100%)' },
            brandColor: { color: e.colors.brandColor },
          }
        })
      t.a = function (e) {
        var t = e.contextType,
          a = e.iconSize,
          n = e.link,
          o = e.retweetData,
          c = e.text,
          s = e.topicData,
          u = e.userAvatarUrls,
          d = o || {},
          b = d.isSelfRetweet,
          C = d.name,
          w = d.screenName,
          E = (function (e, t) {
            var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
              n = W[t],
              o = [K.colorDeepGray, n],
              c = r.a.createElement(p.a, { style: o }),
              s = r.a.createElement(m.a, { style: o }),
              u = r.a.createElement(h.a, { style: o }),
              d = r.a.createElement(y.a, { style: o }),
              b = r.a.createElement(g.a, { style: o }),
              C = r.a.createElement(v.a, { style: K.circle }),
              w = r.a.createElement(f.a, { style: o }),
              E = r.a.createElement(S, { style: o }),
              x = r.a.createElement(k.a, { style: o }),
              A = r.a.createElement(I.a, { style: o }),
              P = r.a.createElement(_.a, { style: o }),
              z = r.a.createElement(T.a, { style: o }),
              O = r.a.createElement(L.a, { style: o }),
              D = r.a.createElement(B.a, { style: o }),
              N = r.a.createElement(M, { style: o }),
              j = r.a.createElement(U.a, { style: o }),
              V = r.a.createElement(H.a, { style: o }),
              q = r.a.createElement(F, { style: o }),
              G = r.a.createElement(i.a, { borderColor: 'cellBackground', userAvatarSize: t, userAvatarUrls: a }),
              X = r.a.createElement(R.a, { style: o })
            switch (e) {
              case l.a.Pin:
                return c
              case l.a.Retweet:
                return s
              case l.a.Like:
                return u
              case l.a.Follow:
                return d
              case l.a.Moment:
                return b
              case l.a.NewTweets:
                return C
              case l.a.Reply:
              case l.a.Conversation:
                return w
              case l.a.Feedback:
                return E
              case l.a.Topic:
                return x
              case l.a.List:
                return A
              case l.a.Location:
                return P
              case l.a.Community:
                return z
              case l.a.Spaces:
                return O
              case l.a.Sparkle:
                return D
              case l.a.SmartBlockExpiration:
                return N
              case l.a.SocialProof:
              case l.a.FollowFollowed:
                return q
              case l.a.FollowMutual:
                return V
              case l.a.FollowFollowing:
                return j
              case l.a.Facepile:
                return G
              case l.a.Bird:
                return X
              case l.a.TextOnly:
              default:
                return null
            }
          })(t, a, u)
        switch (t) {
          case l.a.Retweet:
            return { Icon: E, text: c || V(C, b), link: w ? 'https://twitter.com/'.concat(w) : void 0 }
          case l.a.Pin:
            return { Icon: E, text: c || O }
          case l.a.Topic:
            return {
              Icon: E,
              accessibilityLabel:
                'Recommendation' === (null == s ? void 0 : s.functionalityType) ||
                'RecWithEducation' === (null == s ? void 0 : s.functionalityType)
                  ? N({ topicName: c })
                  : D({ topicName: c }),
              text: c ? j(c) : null,
              link: n,
            }
          default:
            return { Icon: E, text: c ? j(c) : null, link: n }
        }
      }
    },
    'qtu+': function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return c
      })
      var n = a('4+NY'),
        r = a('oEOe'),
        o = a('5oBF'),
        i = {
          REQUEST: 'rweb/multiAccount/SWITCH_REQUEST',
          SUCCESS: 'rweb/multiAccount/SWITCH_SUCCESS',
          FAILURE: 'rweb/multiAccount/SWITCH_FAILURE',
        },
        c = function (e) {
          return function (t, a, c) {
            var l = c.api,
              s = Object(r.b)(t, { request: l.Auth.switch, params: e })
            return t(Object(o.g)()).then(function () {
              return t(Object(n.b)()).then(function () {
                return s({ actionTypes: i, context: 'SWITCH' }).then(function () {
                  window.location.assign('/home')
                })
              })
            })
          }
        }
    },
    r9x5: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        o = a('ERkP'),
        i = a.n(o),
        c = a('Lsrn'),
        l = a('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [c.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M22.772 10.506l-5.618-2.192-2.16-6.5c-.102-.307-.39-.514-.712-.514s-.61.207-.712.513l-2.16 6.5-5.62 2.192c-.287.112-.477.39-.477.7s.19.585.478.698l5.62 2.192 2.16 6.5c.102.306.39.513.712.513s.61-.207.712-.513l2.16-6.5 5.62-2.192c.287-.112.477-.39.477-.7s-.19-.585-.478-.697zM7.413 4.562c0-.414-.336-.75-.75-.75h-1.88V2.05c0-.414-.337-.75-.75-.75s-.75.336-.75.75v1.762H1.5c-.414 0-.75.336-.75.75s.336.75.75.75h1.782v1.762c0 .414.336.75.75.75s.75-.336.75-.75V5.312h1.88c.415 0 .75-.336.75-.75zm1.785 14.872h-1.1v-1.016c0-.414-.335-.75-.75-.75s-.75.336-.75.75v1.016H5.57c-.414 0-.75.336-.75.75s.336.75.75.75H6.6v1.016c0 .414.335.75.75.75s.75-.336.75-.75v-1.016h1.098c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    uFYP: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        o = a('ERkP'),
        i = a.n(o),
        c = a('Lsrn'),
        l = a('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [c.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M20.75 2H3.25C2.007 2 1 3.007 1 4.25v15.5C1 20.993 2.007 22 3.25 22h17.5c1.243 0 2.25-1.007 2.25-2.25V4.25C23 3.007 21.993 2 20.75 2zM17.5 13.504c0 .483-.392.875-.875.875s-.875-.393-.875-.876V9.967l-7.547 7.546c-.17.17-.395.256-.62.256s-.447-.086-.618-.257c-.342-.342-.342-.896 0-1.237l7.547-7.547h-3.54c-.482 0-.874-.393-.874-.876s.392-.875.875-.875h5.65c.483 0 .875.39.875.874v5.65z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    x0mb: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        o = a('ERkP'),
        i = a.n(o),
        c = a('Lsrn'),
        l = a('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [c.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    y8wG: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return H
      })
      var n = a('VrFO'),
        r = a.n(n),
        o = a('Y9Ll'),
        i = a.n(o),
        c = a('1Pcy'),
        l = a.n(c),
        s = a('5Yy7'),
        u = a.n(s),
        d = a('2VqO'),
        p = a.n(d),
        m = a('KEM+'),
        h = a.n(m),
        y = (a('2G9S'), a('ho0z'), a('ERkP')),
        g = a.n(y),
        v = a('ZUOq'),
        f = a('3XMw'),
        b = a.n(f),
        C = a('ACHU'),
        w = a('aWzz'),
        E = a('MWbm'),
        x = a('I4+6'),
        S = a('rHpw'),
        k = a('XP29'),
        I = a('jV+4'),
        _ = a('Znyr'),
        T = a('OiMc'),
        L = a('cm6r'),
        B = b.a.d86bbf0f,
        A = b.a.h6beb5fa,
        M = b.a.b8e1d524,
        U = b.a.gef27c4c,
        H = (function (e) {
          u()(a, e)
          var t = p()(a)
          function a() {
            var e
            r()(this, a)
            for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              h()(l()(e), '_renderUser', function (t) {
                var a = e.props.isExpanded,
                  n = t.name,
                  r = t.profile_image_url_https,
                  o = t.protected,
                  i = t.screen_name,
                  c = t.verified
                return g.a.createElement(
                  g.a.Fragment,
                  null,
                  g.a.createElement(
                    E.a,
                    null,
                    g.a.createElement(k.a, { accessibilityLabel: n, screenName: i, size: 'xLarge', uri: r }),
                    a ? null : e._renderBadge(),
                  ),
                  a
                    ? g.a.createElement(
                        g.a.Fragment,
                        null,
                        g.a.createElement(I.a, {
                          isProtected: o,
                          isVerified: c,
                          name: n,
                          screenName: i,
                          style: P.userName,
                          withStackedLayout: !0,
                        }),
                        g.a.createElement(
                          E.a,
                          { style: P.iconContainer },
                          g.a.createElement(C.a, { style: P.icon }),
                          a ? e._renderBadge() : null,
                        ),
                      )
                    : null,
                )
              }),
              h()(l()(e), '_renderEmptyState', function () {
                var t = e.props.renderEmptyState
                return t ? g.a.createElement(E.a, { style: P.emptyStateWrapper }, t()) : null
              }),
              h()(l()(e), '_renderBadge', function () {
                var t = e.props,
                  a = t.hasMultiAccountBadges,
                  n = t.isExpanded
                return a
                  ? g.a.createElement(_.a, {
                      pip: !0,
                      style: n && P.pip,
                      truncatedCountFormatter: A,
                      unreadCountLabel: B,
                    })
                  : null
              }),
              h()(l()(e), '_handleAccountSwitcherClick', function () {
                e.props.analytics.scribe({ action: 'click' })
              }),
              e
            )
          }
          return (
            i()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.accessibilityLabel,
                    a = e.currentUser,
                    n = e.hoverLabel,
                    r = e.interactiveViewTestId,
                    o = e.isExpanded,
                    i = e.renderEmptyState,
                    c = e.renderMenuSheet
                  return a || i
                    ? g.a.createElement(
                        T.a,
                        {
                          contentStyle: P.menuContainer,
                          enableEnterKeyToggle: !0,
                          renderContent: c,
                          withArrow: !0,
                          withFixedPosition: !0,
                        },
                        g.a.createElement(
                          L.a,
                          {
                            accessibilityLabel: t || U,
                            accessibilityRole: 'button',
                            hoverLabel: o ? void 0 : { label: n || M },
                            interactiveStyles: x.a.generate({
                              backgroundColor: 'transparent',
                              color: S.a.theme.colors.text,
                            }),
                            onClick: this._handleAccountSwitcherClick,
                            style: P.anchorContainer,
                            testID: r,
                          },
                          a ? this._renderUser(a) : this._renderEmptyState(),
                        ),
                      )
                    : null
                },
              },
            ]),
            a
          )
        })(g.a.Component)
      h()(H, 'contextTypes', { featureSwitches: w.object })
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
