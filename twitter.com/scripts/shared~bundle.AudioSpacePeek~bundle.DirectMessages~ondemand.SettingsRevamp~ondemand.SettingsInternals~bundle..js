;(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    '88ay': function (e, t, n) {
      'use strict'
      n.d(t, 'c', function () {
        return ee
      }),
        n.d(t, 'e', function () {
          return te
        }),
        n.d(t, 'f', function () {
          return ne
        }),
        n.d(t, 'd', function () {
          return oe
        }),
        n.d(t, 'a', function () {
          return ae
        })
      var o = n('m3Bd'),
        r = n.n(o),
        i = n('yiKp'),
        a = n.n(i),
        l = n('VrFO'),
        s = n.n(l),
        c = n('Y9Ll'),
        d = n.n(c),
        u = n('1Pcy'),
        p = n.n(u),
        m = n('5Yy7'),
        h = n.n(m),
        C = n('2VqO'),
        y = n.n(C),
        v = n('KEM+'),
        f = n.n(v),
        b = n('97Jx'),
        g = n.n(b),
        k = (n('1t7P'), n('jQ/y'), n('ho0z'), n('2G9S'), n('hBpG'), n('7x/C'), n('ERkP')),
        _ = n.n(k),
        S = n('6rlp'),
        E = n('zh9S'),
        w = n('G6rE'),
        I = n('rxPX'),
        x = n('0KEI'),
        T = function (e, t) {
          return w.e.select(e, t.userId)
        },
        A = function (e, t) {
          return t.promotedContent
        },
        B = Object(I.a)()
          .propsFromState(function () {
            return { promotedContent: A, user: T }
          })
          .adjustStateProps(function (e) {
            var t = e.promotedContent,
              n = e.user
            return { promotedContent: t || (n ? n.promoted_content : void 0), user: n }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(x.createLocalApiErrorHandlerWithContextFactory)('USER_CELL_CONTAINER'),
              log: S.a,
              scribeAction: E.scribeAction,
            }
          }),
        L = n('I57f'),
        U = n('vMjK'),
        R = n('MWbm'),
        D = n('IG7M'),
        P = n('rHpw'),
        N = function (e) {
          var t = e.children,
            n = e.promotedContent,
            o = e.user
          return _.a.createElement(
            R.a,
            { style: F.decorationWrapper },
            t,
            _.a.createElement(D.a, {
              renderActionMenu: function (e) {
                return _.a.createElement(U.b, { onClose: e, promotedContent: n, user: o, view: 'follower' })
              },
              style: F.actionMenu,
            }),
          )
        },
        F = P.a.create(function (e) {
          return { decorationWrapper: { flexDirection: 'row' }, actionMenu: { marginLeft: e.spaces.space12 } }
        }),
        M = n('uIZp'),
        j = n('mN6z'),
        H = n('caTy'),
        O = n('3IPs'),
        z = n('Rp9C'),
        q = n('X04g'),
        V = n('Re5t'),
        K = n('TnY3'),
        W = n('hxu0'),
        Y = n('v6aA'),
        G = n('7JQg'),
        J = n('nBUg'),
        Q = n('IMA+'),
        X = n('cFuS'),
        Z = [
          'avatarDecoration',
          'bottomControl',
          'cellClickable',
          'createLocalApiErrorHandler',
          'decoration',
          'followRequestReceived',
          'hideBlocked',
          'history',
          'isAutoblocking',
          'isBlockedBy',
          'isBlocking',
          'isDeviceFollowing',
          'isFollowing',
          'isInSidebar',
          'location',
          'log',
          'onClick',
          'promotedItemId',
          'saveAsRecentSearch',
          'scribeAction',
          'scribeData',
          'scribeNamespace',
          'shouldScribeImpression',
          'shouldScribeProfileClick',
          'shouldStoreTypeaheadItem',
          'socialContext',
          'user',
        ],
        $ = function (e) {
          var t = e.user
          return t && t.profile_image_url_https
            ? _.a.createElement(
                re,
                g()({}, e, {
                  avatarUri: t.profile_image_url_https,
                  description: t.description,
                  entities: t.entities,
                  followRequestReceived: t.follow_request_received,
                  highlightedLabel: t.highlightedLabel,
                  isAutoblocking: t.smart_blocking,
                  isBlockedBy: t.blocked_by,
                  isBlocking: t.blocking,
                  isDeviceFollowing: t.notifications,
                  isFollowedBy: t.followed_by,
                  isFollowing: t.following,
                  isProtected: t.protected,
                  isVerified: t.verified,
                  name: t.name,
                  screenName: t.screen_name,
                  translatorType: t.translator_type,
                  user: t,
                  withheldDescription: t.withheld_description,
                  withheldEntities: t.withheld_entities,
                }),
              )
            : null
        }
      $.defaultProps = {
        cellClickable: !0,
        decoration: null,
        displayMode: V.a.UserCompact,
        followRequestReceived: !1,
        hideBlocked: !1,
        promotedItemType: X.c.USER,
        shouldScribeProfileClick: !0,
        shouldScribeImpression: !1,
        withFollowsYou: !1,
      }
      var ee = function (e) {
          var t = e.isDeviceFollowing,
            n = e.userId
          return _.a.createElement(L.a, { isFollowing: t, style: ie.followButton, userId: n })
        },
        te = function (e) {
          var t = e.loggedInUserId,
            n = e.promotedContent,
            o = e.userId
          return t !== o
            ? _.a.createElement(M.a, { promotedContent: n, size: 'small', style: ie.followButton, userId: o })
            : null
        },
        ne = function (e) {
          return _.a.createElement(N, { promotedContent: e.promotedContent, user: e.user }, te(e))
        },
        oe = function (e) {
          return _.a.createElement(D.a, {
            renderActionMenu: function (t) {
              return _.a.createElement(U.b, {
                onClose: t,
                promotedContent: e.promotedContent,
                user: e.user,
                view: 'rito_flagged_accounts',
              })
            },
          })
        },
        re = (function (e) {
          h()(n, e)
          var t = y()(n)
          function n() {
            var e
            s()(this, n)
            for (var o = arguments.length, r = new Array(o), i = 0; i < o; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              f()(p()(e), '_handleAvatarClick', function () {
                var t = e.props.shouldScribeProfileClick
                e._handleSaveAsRecentSearch(),
                  t && e._scribeAction({ element: 'avatar', action: 'profile_click' }),
                  e._handleAsyncPromotedEvent(X.b.PROFILE_IMAGE_CLICK)
              }),
              f()(p()(e), '_handleCellClick', function () {
                var t = e.props,
                  n = t.history,
                  o = t.onClick,
                  r = t.screenName,
                  i = t.user,
                  a = e._getPromotedTweetState()
                e._handleSaveAsRecentSearch(),
                  e._handleScreenNameClick(),
                  o ? o({ user: i, state: a }) : n.push({ pathname: '/'.concat(r), state: a || void 0 })
              }),
              f()(p()(e), '_handleScreenNameClick', function () {
                var t = e.props.shouldScribeProfileClick
                e._handleSaveAsRecentSearch(),
                  t && e._scribeAction({ action: 'profile_click' }),
                  e._handleAsyncPromotedEvent(X.b.SCREEN_NAME_CLICK)
              }),
              f()(p()(e), '_handleSaveAsRecentSearch', function () {
                var t = e.props,
                  n = t.saveAsRecentSearch,
                  o = t.shouldStoreTypeaheadItem,
                  r = t.userId
                n && o && o(q.a.ItemType.USER) && n({ user: { id: r, type: O.a.User } })
              }),
              f()(p()(e), '_scribeAction', function (t) {
                var n,
                  o = e.props,
                  r = o.promotedContent,
                  i = o.scribeAction,
                  l = o.scribeData,
                  s = o.scribeNamespace,
                  c = o.user,
                  d = o.userId,
                  u =
                    null == l || null === (n = l.items) || void 0 === n
                      ? void 0
                      : n.find(function (e) {
                          return e.item_type === q.a.ItemType.USER && e.id === d
                        }),
                  p = l.search_details,
                  m = { items: [a()(a()({}, u), z.a.getUserItem(c, r))], profile_id: d, search_details: p }
                i(a()(a()({}, s), t), m)
              }),
              e
            )
          }
          return (
            d()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._shouldRender() && this._handleImpression()
                },
              },
              {
                key: 'shouldComponentUpdate',
                value: function (e) {
                  return !Object(j.a)(this.props, e)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.avatarDecoration,
                    o = (t.bottomControl, t.cellClickable),
                    i =
                      (t.createLocalApiErrorHandler,
                      t.decoration,
                      t.followRequestReceived,
                      t.hideBlocked,
                      t.history,
                      t.isAutoblocking,
                      t.isBlockedBy,
                      t.isBlocking,
                      t.isDeviceFollowing,
                      t.isFollowing,
                      t.isInSidebar),
                    a =
                      (t.location,
                      t.log,
                      t.onClick,
                      t.promotedItemId,
                      t.saveAsRecentSearch,
                      t.scribeAction,
                      t.scribeData,
                      t.scribeNamespace,
                      t.shouldScribeImpression,
                      t.shouldScribeProfileClick,
                      t.shouldStoreTypeaheadItem,
                      t.socialContext),
                    l = t.user,
                    s = r()(t, Z)
                  return this._shouldRender()
                    ? _.a.createElement(
                        J.b.Provider,
                        {
                          value: {
                            socialContextRefreshEnabled: function () {
                              return e.context.featureSwitches.isTrue(
                                'social_context_and_topic_context_refresh_alignment_enabled',
                              )
                            },
                          },
                        },
                        _.a.createElement(
                          Q.a,
                          g()({}, s, {
                            avatarDecoration: n,
                            bottomControl: this._renderBottomControl(),
                            decoration: this._renderDecoration(),
                            highlightedLabel: this._getHighlightedLabel(),
                            isBlocking: l.blocking,
                            onAvatarClick: this._handleAvatarClick,
                            onCellClick: o ? this._handleCellClick : void 0,
                            onScreenNameClick: this._handleScreenNameClick,
                            socialContext: a
                              ? {
                                  contextType: a.contextType,
                                  text: a.text,
                                  link: a.landingUrl ? Object(H.b)(a.landingUrl) : void 0,
                                }
                              : void 0,
                            withDarkerInteractiveBackground: i,
                          }),
                        ),
                      )
                    : null
                },
              },
              {
                key: '_renderBottomControl',
                value: function () {
                  return this._renderControl(this.props.bottomControl || null)
                },
              },
              {
                key: '_renderDecoration',
                value: function () {
                  return this._renderControl(this.props.decoration)
                },
              },
              {
                key: '_renderControl',
                value: function (e) {
                  var t = this.context.loggedInUserId,
                    n = this.props,
                    o = n.displayMode,
                    r = n.followRequestReceived,
                    i = n.isAutoblocking,
                    a = n.isBlocking,
                    l = n.isDeviceFollowing,
                    s = n.isFollowing,
                    c = n.promotedContent,
                    d = n.screenName,
                    u = n.user,
                    p = n.userId
                  return 'function' == typeof e
                    ? e({
                        displayMode: o,
                        followRequestReceived: r,
                        isAutoblocking: i,
                        isBlocking: a,
                        isDeviceFollowing: !!l,
                        isFollowing: !!s,
                        loggedInUserId: t,
                        promotedContent: c,
                        screenName: d,
                        user: u,
                        userId: p,
                      })
                    : e
                },
              },
              {
                key: '_shouldRender',
                value: function () {
                  var e = this.props,
                    t = e.hideBlocked,
                    n = e.isBlockedBy,
                    o = e.isBlocking,
                    r = e.screenName
                  return e.userId && r && !(t && (n || o))
                },
              },
              {
                key: '_getHighlightedLabel',
                value: function () {
                  var e = this.props.user.highlightedLabel,
                    t = 'AutomatedLabel' === (null == e ? void 0 : e.userLabelType),
                    n = !!t && this.context.featureSwitches.isTrue('account_taxonomy_automated_label_enabled')
                  return !t || n ? e : void 0
                },
              },
              {
                key: '_getPromotedTweetState',
                value: function () {
                  var e = this.props,
                    t = e.promotedContent,
                    n = e.promotedItemType
                  return t && n === X.c.TWEET ? { promotedTweetState: t } : null
                },
              },
              {
                key: '_handleAsyncPromotedEvent',
                value: function (e) {
                  var t = this.props,
                    n = t.createLocalApiErrorHandler,
                    o = t.log,
                    r = t.promotedContent,
                    i = t.promotedItemId,
                    a = t.promotedItemType,
                    l = t.userId
                  r &&
                    o({
                      disclosureType: r.disclosure_type,
                      itemId: i || l,
                      itemType: a,
                      params: { event: e, impression_id: r.impression_id },
                    }).catch(n())
                },
              },
              {
                key: '_handleImpression',
                value: function () {
                  var e = this.props,
                    t = e.createLocalApiErrorHandler,
                    n = e.log,
                    o = e.promotedContent,
                    r = e.promotedItemType,
                    i = e.shouldScribeImpression,
                    a = e.userId
                  if (o && r === X.c.USER) {
                    var l = o.disclosure_type,
                      s = o.impression_id
                    n({
                      disclosureType: l,
                      itemId: a,
                      itemType: X.c.USER,
                      params: { event: X.b.IMPRESSION, impression_id: s },
                    }).catch(t())
                  } else i && this._scribeAction({ action: 'impression' })
                },
              },
            ]),
            n
          )
        })(_.a.Component)
      f()(re, 'contextType', Y.a), f()(re, 'defaultProps', $.defaultProps)
      var ie = P.a.create(function (e) {
          return { followButton: { marginLeft: e.spaces.space12 } }
        }),
        ae = Object(K.a)(Object(W.a)(B($)))
      t.b = Object(G.a)({ element: 'user' })(ae)
    },
    'IMA+': function (e, t, n) {
      'use strict'
      var o = n('97Jx'),
        r = n.n(o),
        i = n('VrFO'),
        a = n.n(i),
        l = n('Y9Ll'),
        s = n.n(l),
        c = n('1Pcy'),
        d = n.n(c),
        u = n('5Yy7'),
        p = n.n(u),
        m = n('2VqO'),
        h = n.n(m),
        C = n('KEM+'),
        y = n.n(C),
        v = (n('yH/f'), n('2G9S'), n('ho0z'), n('hBvt'), n('vrRf'), n('1t7P'), n('jQ/y'), n('SV7d')),
        f = n('ERkP'),
        b = n.n(f),
        g = n('TIdA'),
        k = n('t62R'),
        _ = n('5mJL'),
        S = n('DNho'),
        E = n('nBUg'),
        w = n('qjak'),
        I = n('ir4X'),
        x = n('htQn'),
        T = n('e5HP'),
        A = n('FBXD'),
        B = n('Nqmc'),
        L = n('rHpw'),
        U = n('jhWN'),
        R = n('1I0O'),
        D = n('pBrB'),
        P = n('jV+4'),
        N = n('MWbm'),
        F = Object.freeze({ TWEET: 'tweets', USER: 'users' }),
        M = Object.freeze({
          UserCompact: 'UserCompact',
          UserConcise: 'UserConcise',
          UserDetailed: 'UserDetailed',
          ExperimentalUserTypeahead: 'ExperimentalUserTypeahead',
        }),
        j = g.a.createLayoutCache(),
        H = { viewType: 'user_cell' },
        O = (function (e) {
          p()(n, e)
          var t = h()(n)
          function n() {
            var e
            a()(this, n)
            for (var o = arguments.length, r = new Array(o), i = 0; i < o; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              y()(d()(e), '_renderUserName', function () {
                var t = e.props,
                  n = t.badgeContext,
                  o = t.disabledMessage,
                  r = t.displayNameLabel,
                  i = t.isBlocking,
                  a = t.isDisabled,
                  l = t.isFollowedBy,
                  s = t.isProtected,
                  c = t.isVerified,
                  d = t.name,
                  u = t.onScreenNameClick,
                  p = t.promotedContent,
                  m = t.promotedItemType,
                  h = t.screenName,
                  C = t.screenNameSuffix,
                  y = t.translatorType,
                  v = t.withFollowsYou,
                  f = t.withLink,
                  g = b.a.createElement(P.a, {
                    badgeContext: n,
                    displayNameLabel: r,
                    isProtected: s,
                    isVerified: c,
                    name: d,
                    onLinkClick: u,
                    promotedContent: m === F.TWEET ? p : void 0,
                    screenName: h,
                    screenNameSuffix: C,
                    translatorType: y,
                    withFollowsYou: v && l,
                    withHoverCard: !i && !a && f,
                    withLink: !a && f,
                    withScreenName: !o,
                    withStackedLayout: !0,
                  })
                return o
                  ? b.a.createElement(
                      N.a,
                      { style: z.disabledMessageContainer },
                      g,
                      b.a.createElement(k.b, { color: 'gray700' }, o),
                    )
                  : g
              }),
              y()(d()(e), '_renderSocialContext', function () {
                var t = e.props,
                  n = t.avatarSize,
                  o = t.displayMode,
                  r = t.socialContext
                return r
                  ? b.a.createElement(E.b.UseProps, null, function (e) {
                      return b.a.createElement(B.a, {
                        avatarSize: n,
                        contextType: r.contextType,
                        iconSize: 'large',
                        link: r.link,
                        style: z.socialContext,
                        text: r.text,
                        weight: 'bold',
                        withLeftPadding: !e.socialContextRefreshEnabled() && o !== M.ExperimentalUserTypeahead,
                      })
                    })
                  : null
              }),
              y()(d()(e), '_renderUserTypeaheadSocialContext', function () {
                var t = e.props.socialContext,
                  n =
                    (t && Object(w.a)({ link: t.link, text: t.text, iconSize: 'small', contextType: t.contextType })) ||
                    {},
                  o = n.Icon,
                  r = n.text
                return t
                  ? b.a.createElement(
                      N.a,
                      { style: z.userTypeaheadSocialContext },
                      b.a.createElement(N.a, { style: z.userTypeaheadSocialContextIcon }, o),
                      b.a.createElement(
                        k.b,
                        { color: 'gray700', numberOfLines: 1, style: z.userTypeaheadSocialContextText },
                        r,
                      ),
                    )
                  : null
              }),
              y()(d()(e), '_renderHighlightedUserLabel', function () {
                var t = e.props.highlightedLabel
                return t ? b.a.createElement(I.a, { label: t }) : null
              }),
              y()(d()(e), '_isEligibleForBio', function () {
                var t = e.props.displayMode
                return -1 !== [M.UserDetailed, M.UserConcise].indexOf(t)
              }),
              y()(d()(e), '_handleKeyPress', function (t) {
                t.defaultPrevented || 'Enter' !== t.key || e._handleClick(t)
              }),
              y()(
                d()(e),
                '_handleClick',
                Object(A.a)(function (t) {
                  var n = e.props.onCellClick
                  t.preventDefault(), n && n()
                }),
              ),
              e
            )
          }
          return (
            s()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.accessibilityLabel,
                    n = e.accessibilityState,
                    o = e.avatarDecoration,
                    i = e.avatarSize,
                    a = e.avatarUri,
                    l = e.bottomControl,
                    s = e.decoration,
                    c = e.displayMode,
                    d = e.isBlocking,
                    u = e.isDisabled,
                    p = e.onAvatarClick,
                    m = e.onCellClick,
                    h = e.onScreenNameClick,
                    C = e.presenceIndicator,
                    y = e.promotedContent,
                    f = e.promotedItemType,
                    g = e.screenName,
                    k = e.style,
                    E = e.testID,
                    w = e.userId,
                    I = e.withDarkerInteractiveBackground,
                    A = e.withInteractiveStyling,
                    B = e.withLink,
                    L = e.withUsernameCenterAligned,
                    D = B && !d,
                    P = c === M.UserCompact || L,
                    O = c === M.ExperimentalUserTypeahead,
                    q =
                      y && f === F.USER && 'earned' !== (y.disclosure_type && y.disclosure_type.toLowerCase())
                        ? b.a.createElement(T.a, { contentAuthorId: w, promotedContent: y, style: z.promotedIndicator })
                        : null,
                    V = {
                      accessibilityHidden: !0,
                      decoration: o,
                      focusable: !1,
                      imageLayoutCache: j,
                      onClick: p,
                      onHoverCardScreenNameClick: h,
                      promotedContent: y,
                      screenName: g,
                      style: z.avatar,
                      uri: a,
                      withHoverCard: D,
                      withLink: B,
                    },
                    K = b.a.createElement(S.a.Consumer, null, function (e) {
                      var t = e.avatarSize
                      return C
                        ? b.a.createElement(R.a, r()({}, V, C, { size: t }))
                        : b.a.createElement(U.a, r()({ size: t }, V))
                    }),
                    W = n && 'boolean' == typeof n.checked,
                    Y = void 0 !== m,
                    G = (W ? 'radio' : Y && 'button') || 'listitem',
                    J = this._renderUserName(),
                    Q = this._renderHighlightedUserLabel(),
                    X = this._renderBio(),
                    Z = Q || X || q || l,
                    $ = b.a.createElement(
                      b.a.Fragment,
                      null,
                      Q,
                      X,
                      q,
                      l ? b.a.createElement(N.a, { style: z.bottomControl }, l) : null,
                    )
                  return b.a.createElement(
                    v.a,
                    { behavioralEventContext: H },
                    b.a.createElement(
                      x.a,
                      {
                        accessibilityLabel: t,
                        accessibilityRole: G,
                        accessibilityState: n,
                        disabled: !!u,
                        focusable: W || Y,
                        onClick: this._handleClick,
                        onKeyPress: this._handleKeyPress,
                        pointerEvents: u ? 'none' : void 0,
                        style: [z.root, k],
                        testID: E,
                        withDarkerInteractiveBackground: I,
                        withInteractiveStyling: null != A ? A : !!m,
                      },
                      O ? null : this._renderSocialContext(),
                      b.a.createElement(
                        _.a,
                        {
                          avatarCell: K,
                          avatarCellStyle: [z.avatarColumn, P && z.bodyColumnCentered],
                          avatarSize: O ? 'xxxLarge' : i,
                          cellStyle: [z.bodyColumn, P && z.bodyColumnCentered],
                        },
                        b.a.createElement(N.a, { style: z.body }, J, s),
                        P ? null : $,
                        O ? this._renderUserTypeaheadSocialContext() : null,
                      ),
                      Z && P
                        ? b.a.createElement(
                            _.a,
                            { avatarCell: null, avatarCellStyle: z.avatarColumn, cellStyle: z.bodyColumn },
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
                    n = e.displayMode,
                    o = e.entities,
                    r = e.userId,
                    i = e.withheldDescription,
                    a = e.withheldEntities
                  return o && t && this._isEligibleForBio()
                    ? b.a.createElement(D.a, {
                        description: t,
                        entities: o,
                        isConcise: n === M.UserConcise,
                        style: z.bio,
                        userId: r,
                        withheldDescription: i,
                        withheldEntities: a,
                      })
                    : null
                },
              },
            ]),
            n
          )
        })(b.a.PureComponent)
      y()(O, 'defaultProps', { testID: 'UserCell', withLink: !0 })
      var z = L.a.create(function (e) {
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
      t.a = O
    },
    hxu0: function (e, t, n) {
      'use strict'
      var o = n('97Jx'),
        r = n.n(o),
        i = n('ERkP'),
        a = n.n(i),
        l = n('vqbU')
      t.a = function (e) {
        return function (t) {
          return a.a.createElement(l.a.Consumer, null, function (n) {
            return a.a.createElement(e, r()({}, t, { isInSidebar: n }))
          })
        }
      }
    },
  },
])
//# sourceMappingURL=WIPED
