;(window.webpackJsonp = window.webpackJsonp || []).push([
  [242],
  {
    FITr: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        o = a('ERkP'),
        l = a.n(o),
        i = a('Lsrn'),
        c = a('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [i.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            l.a.createElement(
              'g',
              null,
              l.a.createElement('path', {
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
        l = a.n(o),
        i = a('Y9Ll'),
        c = a.n(i),
        s = a('1Pcy'),
        d = a.n(s),
        u = a('5Yy7'),
        m = a.n(u),
        h = a('2VqO'),
        p = a.n(h),
        y = a('KEM+'),
        v = a.n(y),
        b = (a('yH/f'), a('2G9S'), a('ho0z'), a('hBvt'), a('vrRf'), a('1t7P'), a('jQ/y'), a('SV7d')),
        C = a('ERkP'),
        g = a.n(C),
        f = a('TIdA'),
        w = a('t62R'),
        x = a('5mJL'),
        E = a('DNho'),
        k = a('nBUg'),
        S = a('qjak'),
        L = a('ir4X'),
        T = a('htQn'),
        I = a('e5HP'),
        B = a('FBXD'),
        P = a('Nqmc'),
        z = a('rHpw'),
        H = a('jhWN'),
        R = a('1I0O'),
        M = a('pBrB'),
        F = a('jV+4'),
        D = a('MWbm'),
        N = Object.freeze({ TWEET: 'tweets', USER: 'users' }),
        U = Object.freeze({
          UserCompact: 'UserCompact',
          UserConcise: 'UserConcise',
          UserDetailed: 'UserDetailed',
          ExperimentalUserTypeahead: 'ExperimentalUserTypeahead',
        }),
        _ = f.a.createLayoutCache(),
        O = { viewType: 'user_cell' },
        j = (function (e) {
          m()(a, e)
          var t = p()(a)
          function a() {
            var e
            l()(this, a)
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              v()(d()(e), '_renderUserName', function () {
                var t = e.props,
                  a = t.badgeContext,
                  n = t.disabledMessage,
                  r = t.displayNameLabel,
                  o = t.isBlocking,
                  l = t.isDisabled,
                  i = t.isFollowedBy,
                  c = t.isProtected,
                  s = t.isVerified,
                  d = t.name,
                  u = t.onScreenNameClick,
                  m = t.promotedContent,
                  h = t.promotedItemType,
                  p = t.screenName,
                  y = t.screenNameSuffix,
                  v = t.translatorType,
                  b = t.withFollowsYou,
                  C = t.withLink,
                  f = g.a.createElement(F.a, {
                    badgeContext: a,
                    displayNameLabel: r,
                    isProtected: c,
                    isVerified: s,
                    name: d,
                    onLinkClick: u,
                    promotedContent: h === N.TWEET ? m : void 0,
                    screenName: p,
                    screenNameSuffix: y,
                    translatorType: v,
                    withFollowsYou: b && i,
                    withHoverCard: !o && !l && C,
                    withLink: !l && C,
                    withScreenName: !n,
                    withStackedLayout: !0,
                  })
                return n
                  ? g.a.createElement(
                      D.a,
                      { style: V.disabledMessageContainer },
                      f,
                      g.a.createElement(w.b, { color: 'gray700' }, n),
                    )
                  : f
              }),
              v()(d()(e), '_renderSocialContext', function () {
                var t = e.props,
                  a = t.avatarSize,
                  n = t.displayMode,
                  r = t.socialContext
                return r
                  ? g.a.createElement(k.b.UseProps, null, function (e) {
                      return g.a.createElement(P.a, {
                        avatarSize: a,
                        contextType: r.contextType,
                        iconSize: 'large',
                        link: r.link,
                        style: V.socialContext,
                        text: r.text,
                        weight: 'bold',
                        withLeftPadding: !e.socialContextRefreshEnabled() && n !== U.ExperimentalUserTypeahead,
                      })
                    })
                  : null
              }),
              v()(d()(e), '_renderUserTypeaheadSocialContext', function () {
                var t = e.props.socialContext,
                  a =
                    (t && Object(S.a)({ link: t.link, text: t.text, iconSize: 'small', contextType: t.contextType })) ||
                    {},
                  n = a.Icon,
                  r = a.text
                return t
                  ? g.a.createElement(
                      D.a,
                      { style: V.userTypeaheadSocialContext },
                      g.a.createElement(D.a, { style: V.userTypeaheadSocialContextIcon }, n),
                      g.a.createElement(
                        w.b,
                        { color: 'gray700', numberOfLines: 1, style: V.userTypeaheadSocialContextText },
                        r,
                      ),
                    )
                  : null
              }),
              v()(d()(e), '_renderHighlightedUserLabel', function () {
                var t = e.props.highlightedLabel
                return t ? g.a.createElement(L.a, { label: t }) : null
              }),
              v()(d()(e), '_isEligibleForBio', function () {
                var t = e.props.displayMode
                return -1 !== [U.UserDetailed, U.UserConcise].indexOf(t)
              }),
              v()(d()(e), '_handleKeyPress', function (t) {
                t.defaultPrevented || 'Enter' !== t.key || e._handleClick(t)
              }),
              v()(
                d()(e),
                '_handleClick',
                Object(B.a)(function (t) {
                  var a = e.props.onCellClick
                  t.preventDefault(), a && a()
                }),
              ),
              e
            )
          }
          return (
            c()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.accessibilityLabel,
                    a = e.accessibilityState,
                    n = e.avatarDecoration,
                    o = e.avatarSize,
                    l = e.avatarUri,
                    i = e.bottomControl,
                    c = e.decoration,
                    s = e.displayMode,
                    d = e.isBlocking,
                    u = e.isDisabled,
                    m = e.onAvatarClick,
                    h = e.onCellClick,
                    p = e.onScreenNameClick,
                    y = e.presenceIndicator,
                    v = e.promotedContent,
                    C = e.promotedItemType,
                    f = e.screenName,
                    w = e.style,
                    k = e.testID,
                    S = e.userId,
                    L = e.withDarkerInteractiveBackground,
                    B = e.withInteractiveStyling,
                    P = e.withLink,
                    z = e.withUsernameCenterAligned,
                    M = P && !d,
                    F = s === U.UserCompact || z,
                    j = s === U.ExperimentalUserTypeahead,
                    K =
                      v && C === N.USER && 'earned' !== (v.disclosure_type && v.disclosure_type.toLowerCase())
                        ? g.a.createElement(I.a, { contentAuthorId: S, promotedContent: v, style: V.promotedIndicator })
                        : null,
                    A = {
                      accessibilityHidden: !0,
                      decoration: n,
                      focusable: !1,
                      imageLayoutCache: _,
                      onClick: m,
                      onHoverCardScreenNameClick: p,
                      promotedContent: v,
                      screenName: f,
                      style: V.avatar,
                      uri: l,
                      withHoverCard: M,
                      withLink: P,
                    },
                    W = g.a.createElement(E.a.Consumer, null, function (e) {
                      var t = e.avatarSize
                      return y
                        ? g.a.createElement(R.a, r()({}, A, y, { size: t }))
                        : g.a.createElement(H.a, r()({ size: t }, A))
                    }),
                    Y = a && 'boolean' == typeof a.checked,
                    q = void 0 !== h,
                    G = (Y ? 'radio' : q && 'button') || 'listitem',
                    X = this._renderUserName(),
                    Q = this._renderHighlightedUserLabel(),
                    J = this._renderBio(),
                    Z = Q || J || K || i,
                    $ = g.a.createElement(
                      g.a.Fragment,
                      null,
                      Q,
                      J,
                      K,
                      i ? g.a.createElement(D.a, { style: V.bottomControl }, i) : null,
                    )
                  return g.a.createElement(
                    b.a,
                    { behavioralEventContext: O },
                    g.a.createElement(
                      T.a,
                      {
                        accessibilityLabel: t,
                        accessibilityRole: G,
                        accessibilityState: a,
                        disabled: !!u,
                        focusable: Y || q,
                        onClick: this._handleClick,
                        onKeyPress: this._handleKeyPress,
                        pointerEvents: u ? 'none' : void 0,
                        style: [V.root, w],
                        testID: k,
                        withDarkerInteractiveBackground: L,
                        withInteractiveStyling: null != B ? B : !!h,
                      },
                      j ? null : this._renderSocialContext(),
                      g.a.createElement(
                        x.a,
                        {
                          avatarCell: W,
                          avatarCellStyle: [V.avatarColumn, F && V.bodyColumnCentered],
                          avatarSize: j ? 'xxxLarge' : o,
                          cellStyle: [V.bodyColumn, F && V.bodyColumnCentered],
                        },
                        g.a.createElement(D.a, { style: V.body }, X, c),
                        F ? null : $,
                        j ? this._renderUserTypeaheadSocialContext() : null,
                      ),
                      Z && F
                        ? g.a.createElement(
                            x.a,
                            { avatarCell: null, avatarCellStyle: V.avatarColumn, cellStyle: V.bodyColumn },
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
                    l = e.withheldEntities
                  return n && t && this._isEligibleForBio()
                    ? g.a.createElement(M.a, {
                        description: t,
                        entities: n,
                        isConcise: a === U.UserConcise,
                        style: V.bio,
                        userId: r,
                        withheldDescription: o,
                        withheldEntities: l,
                      })
                    : null
                },
              },
            ]),
            a
          )
        })(g.a.PureComponent)
      v()(j, 'defaultProps', { testID: 'UserCell', withLink: !0 })
      var V = z.a.create(function (e) {
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
      t.a = j
    },
    Nqmc: function (e, t, a) {
      'use strict'
      var n = a('m3Bd'),
        r = a.n(n),
        o = a('VrFO'),
        l = a.n(o),
        i = a('Y9Ll'),
        c = a.n(i),
        s = a('5Yy7'),
        d = a.n(s),
        u = a('2VqO'),
        m = a.n(u),
        h = a('KEM+'),
        p = a.n(h),
        y = (a('hBvt'), a('uFXj'), a('2G9S'), a('SV7d')),
        v = a('ERkP'),
        b = a.n(v),
        C = a('t62R'),
        g = a('5mJL'),
        f = a('nBUg'),
        w = a('qjak'),
        x = a('dC06'),
        E = a('rHpw'),
        k = a('XIXT'),
        S = a('yDX5'),
        L = a('MWbm'),
        T = [
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
        I = { viewType: 'social_context' },
        B = (function (e) {
          d()(a, e)
          var t = m()(a)
          function a() {
            return l()(this, a), t.apply(this, arguments)
          }
          return (
            c()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    a = t.avatarSize,
                    n = t.bottomControl,
                    o = t.iconStyle,
                    l = t.nativeID,
                    i = t.onLayout,
                    c = t.rightControl,
                    s = t.style,
                    d = t.testID,
                    u = t.textColor,
                    m = t.textSize,
                    h = t.topControl,
                    p = t.weight,
                    v = (t.withBottomBorder, t.withLeftPadding),
                    x = (t.withTextCentered, r()(t, T)),
                    E = Object(w.a)(x),
                    k = E.Icon,
                    S = E.accessibilityLabel,
                    B = E.link,
                    z = E.text,
                    H = b.a.createElement(
                      C.b,
                      { accessibilityLabel: S, color: u, nativeID: l, numberOfLines: 2, size: m, testID: d, weight: p },
                      z,
                    ),
                    R = this._getStyles(),
                    M = R.cellStyle,
                    F = R.viewStyle
                  return z
                    ? b.a.createElement(f.b.UseProps, null, function (t) {
                        return b.a.createElement(
                          y.a,
                          { behavioralEventContext: I },
                          b.a.createElement(
                            b.a.Fragment,
                            null,
                            h || null,
                            b.a.createElement(
                              L.a,
                              {
                                onLayout: i,
                                style: [s, F, t.socialContextRefreshEnabled() && !v && P.socialContextRefresh],
                              },
                              b.a.createElement(
                                g.a,
                                {
                                  avatarCell: k || (v ? null : void 0),
                                  avatarCellStyle: [
                                    o,
                                    P.socialContextIconColumn,
                                    !v && P.unsetIconWidth,
                                    t.socialContextRefreshEnabled() && !v && P.socialContextRefreshIcon,
                                  ],
                                  avatarSize: a,
                                  cellStyle: M,
                                },
                                b.a.createElement(
                                  L.a,
                                  { style: P.cellWrapper },
                                  b.a.createElement(
                                    L.a,
                                    {
                                      style: [
                                        P.socialContextTextColumn,
                                        t.socialContextRefreshEnabled() && !v && P.socialContextRefreshTextColumn,
                                      ],
                                    },
                                    B ? e._renderLink(B, H) : H,
                                  ),
                                  c || null,
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
                    l = a.retweetData,
                    i = a.textColor,
                    c = a.topicData,
                    s = (l || {}).screenName,
                    d = b.a.createElement(C.b, { color: i, link: e, nativeID: r, onClick: o }, t)
                  return n === x.a.Topic && c
                    ? b.a.createElement(k.a, { topicId: c.topicId }, d)
                    : n === x.a.Retweet && s
                    ? b.a.createElement(S.a, { screenName: s }, d)
                    : d
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
                    o = a === x.a.TextOnly,
                    l = n ? [P.bottomBorderMargin, t && P.bottomBorder] : [],
                    i = n && !t ? [P.bottomBorder] : []
                  return (
                    o && i.push(P.topicContext),
                    r && i.push(P.socialContextTextCentered),
                    { viewStyle: l, cellStyle: i }
                  )
                },
              },
            ]),
            a
          )
        })(b.a.PureComponent)
      p()(B, 'defaultProps', {
        iconSize: 'small',
        textColor: 'gray700',
        textSize: 'subtext2',
        withBottomBorder: !1,
        withLeftPadding: !0,
        withTextCentered: !1,
      })
      var P = E.a.create(function (e) {
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
      t.a = B
    },
    PzQN: function (e, t, a) {
      'use strict'
      a.r(t)
      a('ho0z')
      var n = a('ezF+'),
        r = a('VPAj'),
        o = a('IMA+'),
        l = a('G6rE'),
        i = n.g({
          component: o.a,
          selectData: function (e) {
            var t = e.entry
            return {
              user: function (e) {
                var a,
                  n,
                  r =
                    null == t ||
                    null === (a = t.content) ||
                    void 0 === a ||
                    null === (n = a.userThreadHeader) ||
                    void 0 === n
                      ? void 0
                      : n.userScreenName
                return r ? l.e.selectByScreenName(e, r) : void 0
              },
            }
          },
          createProps: function (e) {
            var t = e.data.user
            return {
              avatarUri: (null == t ? void 0 : t.profile_image_url_https) || '',
              displayMode: 'UserCompact',
              isProtected: null == t ? void 0 : t.protected,
              isVerified: null == t ? void 0 : t.verified,
              name: (null == t ? void 0 : t.name) || '',
              screenName: (null == t ? void 0 : t.screen_name) || '',
              userId: (null == t ? void 0 : t.id_str) || '',
              withLink: !0,
            }
          },
          shouldDisplayBorder: Object(r.a)(!1),
          divider: { top: !1, bottom: !1 },
        })
      t.default = i
    },
    aPcQ: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        o = a('ERkP'),
        l = a.n(o),
        i = a('Lsrn'),
        c = a('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [i.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            l.a.createElement(
              'g',
              null,
              l.a.createElement('path', {
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
        return R
      })
      var n = a('VrFO'),
        r = a.n(n),
        o = a('Y9Ll'),
        l = a.n(o),
        i = a('5Yy7'),
        c = a.n(i),
        s = a('2VqO'),
        d = a.n(s),
        u = a('KEM+'),
        m = a.n(u),
        h = a('ERkP'),
        p = a.n(h),
        y = a('t62R'),
        v = a('3XMw'),
        b = a.n(v),
        C = a('rHpw'),
        g = a('MWbm'),
        f = a('yiKp'),
        w = a.n(f),
        x = a('Lsrn'),
        E = a('k/Ka'),
        k = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(E.a)(
            'svg',
            w()(
              w()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [x.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            p.a.createElement(
              'g',
              null,
              p.a.createElement('path', {
                d: 'M12 1C5.92 1 1 5.92 1 12s4.92 11 11 11 11-4.92 11-11S18.08 1 12 1zm5.05 12.48c0 .48-.39.87-.88.87-.477 0-.87-.393-.87-.87V9.94l-6.85 6.85c-.163.166-.387.26-.62.26-.233 0-.457-.094-.62-.26-.338-.341-.338-.899 0-1.24l6.85-6.85h-3.54c-.477 0-.87-.393-.87-.87 0-.49.39-.88.87-.88h5.65c.11 0 .23.03.33.07.11.04.2.1.29.19.09.09.15.18.19.29.04.1.07.22.07.33v5.65z',
              }),
            ),
          )
        }
      k.metadata = { width: 24, height: 24 }
      var S = k,
        L = a('uFYP'),
        T = b.a.f1a1b790,
        I = b.a.if2bf8b3,
        B = b.a.f3624b5c,
        P = b.a.b4b3b113,
        z = b.a.be22205f,
        H = b.a.hcbbe447,
        R = (function (e) {
          c()(a, e)
          var t = d()(a)
          function a() {
            return r()(this, a), t.apply(this, arguments)
          }
          return (
            l()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.color,
                    a = e.nativeID,
                    n = e.style,
                    r = e.withCircleIcon ? S : L.a
                  return p.a.createElement(
                    g.a,
                    { style: [M.root, n] },
                    p.a.createElement(r, { style: [M.icon, t && M[t]] }),
                    p.a.createElement(y.b, { color: t, nativeID: a, size: 'subtext2' }, this._getPromotedLabel()),
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
                    l = n.advertiser_name,
                    i = n.disclosure_type,
                    c = t && o && t === o.id_str,
                    s = 'string' == typeof i && 'political' === i.toLowerCase(),
                    d = 'string' == typeof i && 'issue' === i.toLowerCase(),
                    u = !(!r || 'POLITICAL' !== r.disclaimerType) || s,
                    m = !(!r || 'ISSUE' !== r.disclaimerType) || d,
                    h = (r || {}).removePromotedAttributionForPreroll
                  return (
                    a ||
                    (!l || c || h
                      ? u
                        ? B
                        : m
                        ? z
                        : I
                      : u
                      ? P({ fullName: l })
                      : m
                      ? H({ fullName: l })
                      : T({ fullName: l }))
                  )
                },
              },
            ]),
            a
          )
        })(p.a.Component)
      m()(R, 'defaultProps', { color: 'gray700', withCircleIcon: !1 })
      var M = C.a.create(function (e) {
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
        l = a('MAI/'),
        i = a('shC7'),
        c = a('dC06'),
        s = a('rHpw'),
        d = a('3XMw'),
        u = a.n(d),
        m = a('FITr'),
        h = a('yVEN'),
        p = a('uCrx'),
        y = a('6ZHn'),
        v = a('GcQN'),
        b = a('x0mb'),
        C = a('Hp3u'),
        g = a('yiKp'),
        f = a.n(g),
        w = a('Lsrn'),
        x = a('k/Ka'),
        E = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(x.a)(
            'svg',
            f()(
              f()({}, e),
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
      E.metadata = { width: 24, height: 24 }
      var k = E,
        S = a('EHV7'),
        L = a('wpLu'),
        T = a('EfHu'),
        I = a('cOhU'),
        B = a('cap5'),
        P = a('r9x5'),
        z = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(x.a)(
            'svg',
            f()(
              f()({}, e),
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
      z.metadata = { width: 24, height: 24 }
      var H = z,
        R = a('0qK0'),
        M = a('aPcQ'),
        F = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(x.a)(
            'svg',
            f()(
              f()({}, e),
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
      F.metadata = { width: 24, height: 24 }
      var D = F,
        N = a('lUZE'),
        U = u.a.jb767df7,
        _ = u.a.bb3323fa,
        O = u.a.db0798ed,
        j = u.a.dc716ec8,
        V = function (e) {
          return r.a.createElement(o.b, { dir: i.a.getConstants().isRTL ? 'rtl' : 'ltr', withHashflags: !0 }, e)
        },
        K = function (e, t) {
          return t
            ? U
            : (function (e) {
                var t = V(e)
                return r.a.createElement(u.a.I18NFormatMessage, { $i18n: 'h99e9c95' }, t)
              })(e)
        },
        A = s.a.create(function (e) {
          return {
            small: { height: e.lineHeights.subtext3, width: e.lineHeights.subtext3 },
            large: { height: e.lineHeights.subtext1, width: e.lineHeights.subtext1 },
            xLarge: { height: e.lineHeights.headline1, width: e.lineHeights.headline1 },
          }
        }),
        W = s.a.create(function (e) {
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
          i = e.text,
          s = e.topicData,
          d = e.userAvatarUrls,
          u = o || {},
          g = u.isSelfRetweet,
          f = u.name,
          w = u.screenName,
          x = (function (e, t) {
            var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
              n = A[t],
              o = [W.colorDeepGray, n],
              i = r.a.createElement(m.a, { style: o }),
              s = r.a.createElement(h.a, { style: o }),
              d = r.a.createElement(p.a, { style: o }),
              u = r.a.createElement(y.a, { style: o }),
              g = r.a.createElement(v.a, { style: o }),
              f = r.a.createElement(b.a, { style: W.circle }),
              w = r.a.createElement(C.a, { style: o }),
              x = r.a.createElement(k, { style: o }),
              E = r.a.createElement(S.a, { style: o }),
              z = r.a.createElement(L.a, { style: o }),
              F = r.a.createElement(T.a, { style: o }),
              U = r.a.createElement(I.a, { style: o }),
              _ = r.a.createElement(B.a, { style: o }),
              O = r.a.createElement(P.a, { style: o }),
              j = r.a.createElement(H, { style: o }),
              V = r.a.createElement(R.a, { style: o }),
              K = r.a.createElement(M.a, { style: o }),
              Y = r.a.createElement(D, { style: o }),
              q = r.a.createElement(l.a, { borderColor: 'cellBackground', userAvatarSize: t, userAvatarUrls: a }),
              G = r.a.createElement(N.a, { style: o })
            switch (e) {
              case c.a.Pin:
                return i
              case c.a.Retweet:
                return s
              case c.a.Like:
                return d
              case c.a.Follow:
                return u
              case c.a.Moment:
                return g
              case c.a.NewTweets:
                return f
              case c.a.Reply:
              case c.a.Conversation:
                return w
              case c.a.Feedback:
                return x
              case c.a.Topic:
                return E
              case c.a.List:
                return z
              case c.a.Location:
                return F
              case c.a.Community:
                return U
              case c.a.Spaces:
                return _
              case c.a.Sparkle:
                return O
              case c.a.SmartBlockExpiration:
                return j
              case c.a.SocialProof:
              case c.a.FollowFollowed:
                return Y
              case c.a.FollowMutual:
                return K
              case c.a.FollowFollowing:
                return V
              case c.a.Facepile:
                return q
              case c.a.Bird:
                return G
              case c.a.TextOnly:
              default:
                return null
            }
          })(t, a, d)
        switch (t) {
          case c.a.Retweet:
            return { Icon: x, text: i || K(f, g), link: w ? 'https://twitter.com/'.concat(w) : void 0 }
          case c.a.Pin:
            return { Icon: x, text: i || _ }
          case c.a.Topic:
            return {
              Icon: x,
              accessibilityLabel:
                'Recommendation' === (null == s ? void 0 : s.functionalityType) ||
                'RecWithEducation' === (null == s ? void 0 : s.functionalityType)
                  ? j({ topicName: i })
                  : O({ topicName: i }),
              text: i ? V(i) : null,
              link: n,
            }
          default:
            return { Icon: x, text: i ? V(i) : null, link: n }
        }
      }
    },
    r9x5: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        o = a('ERkP'),
        l = a.n(o),
        i = a('Lsrn'),
        c = a('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [i.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            l.a.createElement(
              'g',
              null,
              l.a.createElement('path', {
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
        l = a.n(o),
        i = a('Lsrn'),
        c = a('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [i.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            l.a.createElement(
              'g',
              null,
              l.a.createElement('path', {
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
        l = a.n(o),
        i = a('Lsrn'),
        c = a('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [i.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            l.a.createElement(
              'g',
              null,
              l.a.createElement('path', {
                d: 'M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
  },
])
//# sourceMappingURL=WIPED
