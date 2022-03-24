;(window.webpackJsonp = window.webpackJsonp || []).push([
  [182],
  {
    FITr: function (e, t, a) {
      'use strict'
      var r = a('yiKp'),
        n = a.n(r),
        o = a('ERkP'),
        i = a.n(o),
        l = a('Lsrn'),
        c = a('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            n()(
              n()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [l.a.root, e.style],
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
    Gffe: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'ProfileClusterFollowContainer', function () {
          return q
        })
      var r = a('yiKp'),
        n = a.n(r),
        o = a('VrFO'),
        i = a.n(o),
        l = a('Y9Ll'),
        c = a.n(l),
        s = a('1Pcy'),
        u = a.n(s),
        d = a('5Yy7'),
        m = a.n(d),
        h = a('2VqO'),
        p = a.n(h),
        f = a('KEM+'),
        y = a.n(f),
        v = (a('2G9S'), a('z84I'), a('M+/F'), a('ERkP')),
        b = a.n(v),
        E = a('Xs4Y'),
        g = a('kGix'),
        w = a('Rp9C'),
        C = a('lP98'),
        I = a('rxPX'),
        x = a('0KEI'),
        L = 'profile-cluster-follow',
        S = function (e, t) {
          return t.userId
        },
        k = function (e, t) {
          var a = S(0, t)
          return C.c(e, { displayLocation: L, similarToUserId: a })
        },
        R = function (e, t) {
          var a = S(0, t)
          return C.b(e, { displayLocation: L, similarToUserId: a })
        },
        F = Object(I.a)()
          .propsFromState(function () {
            return { fetchStatus: R, recommendations: k }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(x.createLocalApiErrorHandlerWithContextFactory)(
                'WHO_TO_FOLLOW_CONTAINER',
              ),
              fetchRecommendationsIfNeeded: C.a,
            }
          })
          .withAnalytics(),
        T = a('3XMw'),
        U = a.n(T),
        O = a('hOZg'),
        B = a('Re5t'),
        _ = a('hqDb'),
        M = a('MWbm'),
        H = a('/yvb'),
        P = a('zfvc'),
        D = a('0yYu'),
        N = a('6vad'),
        A = a('rHpw'),
        z = U.a.ba5a88e3,
        j = U.a.a526aa66,
        K = b.a.createElement(O.a, null),
        V = (function (e) {
          m()(a, e)
          var t = p()(a)
          function a() {
            var e
            i()(this, a)
            for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++) n[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(n))),
              y()(u()(e), '_handleRemoveClusterFollow', function () {
                e.props.onRemoveClusterFollow()
              }),
              y()(u()(e), '_renderCloseButton', function () {
                return b.a.createElement(H.a, {
                  icon: K,
                  onPress: e._handleRemoveClusterFollow,
                  size: 'xSmall',
                  type: 'brandText',
                })
              }),
              e
            )
          }
          return (
            c()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.userIds
                  return b.a.createElement(
                    P.b,
                    { animateMount: !0, duration: 'longer', show: !0, type: 'slide' },
                    b.a.createElement(
                      M.a,
                      { accessibilityLabel: j, accessibilityRole: 'complementary', style: G.root },
                      b.a.createElement(D.a, null),
                      b.a.createElement(N.b, { rightControl: this._renderCloseButton(), text: z }),
                      b.a.createElement(_.a, {
                        displayMode: B.a.UserCompact,
                        userIds: e.slice(0, 3),
                        withItemBorder: !0,
                      }),
                      b.a.createElement(D.a, null),
                    ),
                  )
                },
              },
            ]),
            a
          )
        })(b.a.Component),
        G = A.a.create(function (e) {
          return { root: { marginTop: e.spaces.space12 } }
        }),
        W = { component: 'suggest_profile_cluster_follow', element: 'user', action: 'results' },
        Y = { component: 'suggest_profile_cluster_follow', element: 'close_button', action: 'click' },
        q = (function (e) {
          m()(a, e)
          var t = p()(a)
          function a() {
            var e
            i()(this, a)
            for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++) o[l] = arguments[l]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              y()(u()(e), '_handleImpression', function (t) {
                var a = e.props.analytics,
                  r =
                    t &&
                    t.slice(0, 3).map(function (e) {
                      return n()(n()({}, w.a.forUser(e.user)), {}, { suggestion_details: { source_data: e.token } })
                    })
                a.scribe(n()(n()({}, W), {}, { data: { items: r } }))
              }),
              y()(u()(e), '_handleCloseButtonImpression', function () {
                var t = e.props,
                  a = t.analytics,
                  r = t.onRemoveClusterFollow
                a.scribe(Y), r()
              }),
              e
            )
          }
          return (
            c()(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props.recommendations
                  this._fetchRecommendations(this.props), e && e.length > 0 && this._handleImpression(e)
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t = this.props.recommendations
                  t !== e.recommendations && t && t.length > 0 && this._handleImpression(t)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props.recommendations,
                    t =
                      e &&
                      e.map(function (e) {
                        return e.user
                      })
                  return this._hasLoadedUsers()
                    ? b.a.createElement(V, { onRemoveClusterFollow: this._handleCloseButtonImpression, userIds: t })
                    : null
                },
              },
              {
                key: '_fetchRecommendations',
                value: function (e) {
                  var t = e.createLocalApiErrorHandler,
                    a = e.fetchRecommendationsIfNeeded,
                    r = e.userId
                  a({ limit: 3, displayLocation: L, similarToUserId: r }).catch(t(E.a))
                },
              },
              {
                key: '_hasLoadedUsers',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    a = e.recommendations
                  return t === g.a.LOADED && a.length > 0
                },
              },
            ]),
            a
          )
        })(b.a.PureComponent),
        X = F(q)
      t.default = X
    },
    Nqmc: function (e, t, a) {
      'use strict'
      var r = a('m3Bd'),
        n = a.n(r),
        o = a('VrFO'),
        i = a.n(o),
        l = a('Y9Ll'),
        c = a.n(l),
        s = a('5Yy7'),
        u = a.n(s),
        d = a('2VqO'),
        m = a.n(d),
        h = a('KEM+'),
        p = a.n(h),
        f = (a('hBvt'), a('uFXj'), a('2G9S'), a('SV7d')),
        y = a('ERkP'),
        v = a.n(y),
        b = a('t62R'),
        E = a('5mJL'),
        g = a('nBUg'),
        w = a('qjak'),
        C = a('dC06'),
        I = a('rHpw'),
        x = a('XIXT'),
        L = a('yDX5'),
        S = a('MWbm'),
        k = [
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
        R = { viewType: 'social_context' },
        F = (function (e) {
          u()(a, e)
          var t = m()(a)
          function a() {
            return i()(this, a), t.apply(this, arguments)
          }
          return (
            c()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    a = t.avatarSize,
                    r = t.bottomControl,
                    o = t.iconStyle,
                    i = t.nativeID,
                    l = t.onLayout,
                    c = t.rightControl,
                    s = t.style,
                    u = t.testID,
                    d = t.textColor,
                    m = t.textSize,
                    h = t.topControl,
                    p = t.weight,
                    y = (t.withBottomBorder, t.withLeftPadding),
                    C = (t.withTextCentered, n()(t, k)),
                    I = Object(w.a)(C),
                    x = I.Icon,
                    L = I.accessibilityLabel,
                    F = I.link,
                    U = I.text,
                    O = v.a.createElement(
                      b.b,
                      { accessibilityLabel: L, color: d, nativeID: i, numberOfLines: 2, size: m, testID: u, weight: p },
                      U,
                    ),
                    B = this._getStyles(),
                    _ = B.cellStyle,
                    M = B.viewStyle
                  return U
                    ? v.a.createElement(g.b.UseProps, null, function (t) {
                        return v.a.createElement(
                          f.a,
                          { behavioralEventContext: R },
                          v.a.createElement(
                            v.a.Fragment,
                            null,
                            h || null,
                            v.a.createElement(
                              S.a,
                              {
                                onLayout: l,
                                style: [s, M, t.socialContextRefreshEnabled() && !y && T.socialContextRefresh],
                              },
                              v.a.createElement(
                                E.a,
                                {
                                  avatarCell: x || (y ? null : void 0),
                                  avatarCellStyle: [
                                    o,
                                    T.socialContextIconColumn,
                                    !y && T.unsetIconWidth,
                                    t.socialContextRefreshEnabled() && !y && T.socialContextRefreshIcon,
                                  ],
                                  avatarSize: a,
                                  cellStyle: _,
                                },
                                v.a.createElement(
                                  S.a,
                                  { style: T.cellWrapper },
                                  v.a.createElement(
                                    S.a,
                                    {
                                      style: [
                                        T.socialContextTextColumn,
                                        t.socialContextRefreshEnabled() && !y && T.socialContextRefreshTextColumn,
                                      ],
                                    },
                                    F ? e._renderLink(F, O) : O,
                                  ),
                                  c || null,
                                ),
                              ),
                              r || null,
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
                    r = a.contextType,
                    n = a.nativeID,
                    o = a.onClick,
                    i = a.retweetData,
                    l = a.textColor,
                    c = a.topicData,
                    s = (i || {}).screenName,
                    u = v.a.createElement(b.b, { color: l, link: e, nativeID: n, onClick: o }, t)
                  return r === C.a.Topic && c
                    ? v.a.createElement(x.a, { topicId: c.topicId }, u)
                    : r === C.a.Retweet && s
                    ? v.a.createElement(L.a, { screenName: s }, u)
                    : u
                },
              },
              {
                key: '_getStyles',
                value: function () {
                  var e = this.props,
                    t = e.bottomControl,
                    a = e.contextType,
                    r = e.withBottomBorder,
                    n = e.withTextCentered,
                    o = a === C.a.TextOnly,
                    i = r ? [T.bottomBorderMargin, t && T.bottomBorder] : [],
                    l = r && !t ? [T.bottomBorder] : []
                  return (
                    o && l.push(T.topicContext),
                    n && l.push(T.socialContextTextCentered),
                    { viewStyle: i, cellStyle: l }
                  )
                },
              },
            ]),
            a
          )
        })(v.a.PureComponent)
      p()(F, 'defaultProps', {
        iconSize: 'small',
        textColor: 'gray700',
        textSize: 'subtext2',
        withBottomBorder: !1,
        withLeftPadding: !0,
        withTextCentered: !1,
      })
      var T = I.a.create(function (e) {
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
      t.a = F
    },
    Xs4Y: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return l
      })
      var r = a('KEM+'),
        n = a.n(r),
        o = a('k49u'),
        i = a('fs1G'),
        l = n()({}, o.a.ResourceNotFound, { customAction: i.a })
    },
    aPcQ: function (e, t, a) {
      'use strict'
      var r = a('yiKp'),
        n = a.n(r),
        o = a('ERkP'),
        i = a.n(o),
        l = a('Lsrn'),
        c = a('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            n()(
              n()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [l.a.root, e.style],
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
        return r
      })
      a('yH/f'), a('ERkP')
      var r = Object.freeze({
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
        return B
      })
      var r = a('VrFO'),
        n = a.n(r),
        o = a('Y9Ll'),
        i = a.n(o),
        l = a('5Yy7'),
        c = a.n(l),
        s = a('2VqO'),
        u = a.n(s),
        d = a('KEM+'),
        m = a.n(d),
        h = a('ERkP'),
        p = a.n(h),
        f = a('t62R'),
        y = a('3XMw'),
        v = a.n(y),
        b = a('rHpw'),
        E = a('MWbm'),
        g = a('yiKp'),
        w = a.n(g),
        C = a('Lsrn'),
        I = a('k/Ka'),
        x = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(I.a)(
            'svg',
            w()(
              w()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [C.a.root, e.style],
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
      x.metadata = { width: 24, height: 24 }
      var L = x,
        S = a('uFYP'),
        k = v.a.f1a1b790,
        R = v.a.if2bf8b3,
        F = v.a.f3624b5c,
        T = v.a.b4b3b113,
        U = v.a.be22205f,
        O = v.a.hcbbe447,
        B = (function (e) {
          c()(a, e)
          var t = u()(a)
          function a() {
            return n()(this, a), t.apply(this, arguments)
          }
          return (
            i()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.color,
                    a = e.nativeID,
                    r = e.style,
                    n = e.withCircleIcon ? L : S.a
                  return p.a.createElement(
                    E.a,
                    { style: [_.root, r] },
                    p.a.createElement(n, { style: [_.icon, t && _[t]] }),
                    p.a.createElement(f.b, { color: t, nativeID: a, size: 'subtext2' }, this._getPromotedLabel()),
                  )
                },
              },
              {
                key: '_getPromotedLabel',
                value: function () {
                  var e = this.props,
                    t = e.contentAuthorId,
                    a = e.label,
                    r = e.promotedContent,
                    n = r.adMetadataContainer,
                    o = r.advertiser,
                    i = r.advertiser_name,
                    l = r.disclosure_type,
                    c = t && o && t === o.id_str,
                    s = 'string' == typeof l && 'political' === l.toLowerCase(),
                    u = 'string' == typeof l && 'issue' === l.toLowerCase(),
                    d = !(!n || 'POLITICAL' !== n.disclaimerType) || s,
                    m = !(!n || 'ISSUE' !== n.disclaimerType) || u,
                    h = (n || {}).removePromotedAttributionForPreroll
                  return (
                    a ||
                    (!i || c || h
                      ? d
                        ? F
                        : m
                        ? U
                        : R
                      : d
                      ? T({ fullName: i })
                      : m
                      ? O({ fullName: i })
                      : k({ fullName: i }))
                  )
                },
              },
            ]),
            a
          )
        })(p.a.Component)
      m()(B, 'defaultProps', { color: 'gray700', withCircleIcon: !1 })
      var _ = b.a.create(function (e) {
        return {
          root: { alignItems: 'center', flexDirection: 'row' },
          icon: { color: e.colors.gray700, height: '1em', marginRight: e.spaces.space4, flexShrink: 0 },
          gray700: { color: e.colors.gray700 },
          white: { color: e.colors.white },
        }
      })
    },
    hqDb: function (e, t, a) {
      'use strict'
      var r = a('97Jx'),
        n = a.n(r),
        o = a('m3Bd'),
        i = a.n(o),
        l = a('VrFO'),
        c = a.n(l),
        s = a('Y9Ll'),
        u = a.n(s),
        d = a('1Pcy'),
        m = a.n(d),
        h = a('5Yy7'),
        p = a.n(h),
        f = a('2VqO'),
        y = a.n(f),
        v = a('KEM+'),
        b = a.n(v),
        E = (a('2G9S'), a('ERkP')),
        g = a.n(E),
        w = a('k49u'),
        C = (a('LW0h'), a('7x/C'), a('KOtZ'), a('vrRf'), a('6xIQ')),
        I = a('kGix'),
        x = a('G6rE'),
        L = a('rxPX'),
        S = a('0KEI'),
        k = function (e, t) {
          return t.userIds
        },
        R = function (e, t) {
          return t.userIds.filter(function (t) {
            return !!x.e.select(e, t)
          })
        },
        F = function (e, t) {
          return t.userIds.reduce(function (t, a) {
            var r = x.e.selectFetchStatus(e, a)
            return (t[a] = r === I.a.NONE ? I.a.LOADING : r), t
          }, {})
        },
        T = Object(L.a)()
          .propsFromState(function () {
            return {
              availableUserIds: Object(C.a)(R, function (e) {
                return e
              }),
              fetchStatus: Object(C.a)(R, F, k, function (e, t, a) {
                for (var r = I.a.LOADED, n = 0; n < a.length; n++) {
                  var o = a[n]
                  if (-1 === e.indexOf(o)) {
                    var i = t[o] || I.a.LOADING
                    r = r === I.a.LOADED ? i : r
                  }
                  if (r === I.a.LOADED) break
                }
                return r
              }),
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(S.createLocalApiErrorHandlerWithContextFactory)(
                'USERS_LIST_CONTAINER',
              ),
              fetchUsersIfNeeded: x.e.fetchManyIfNeeded,
            }
          }),
        U = a('v//M'),
        O = a('3XMw'),
        B = a.n(O),
        _ = a('pQ3Z'),
        M = a.n(_),
        H = (a('z84I'), a('cFuS')),
        P = a('Re5t'),
        D = a('MWbm'),
        N = a('88ay'),
        A = function (e) {
          var t = e.displayMode,
            a = e.renderUserCell,
            r = e.userIds
          e.withFinalItemBorder, e.withItemBorder
          return g.a.createElement(
            D.a,
            null,
            r.map(function (e, r) {
              return a
                ? a(e)
                : g.a.createElement(N.b, {
                    decoration: N.e,
                    displayMode: t,
                    key: e,
                    promotedItemType: H.c.USER,
                    userId: e,
                    withFollowsYou: !0,
                  })
            }),
          )
        }
      A.defaultProps = { displayMode: P.a.UserDetailed, withFinalItemBorder: !0, withItemBorder: !1 }
      var z = A,
        j = ['availableUserIds', 'createLocalApiErrorHandler', 'fetchStatus', 'fetchUsersIfNeeded', 'userIds'],
        K = B.a.f5b426c2,
        V = { viewType: 'user_list' },
        G = T(
          (function (e) {
            p()(a, e)
            var t = y()(a)
            function a() {
              var e
              c()(this, a)
              for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++) o[l] = arguments[l]
              return (
                (e = t.call.apply(t, [this].concat(o))),
                b()(m()(e), 'state', { allUsersUnavailable: !1 }),
                b()(m()(e), '_renderContent', function () {
                  var t = e.props,
                    a = t.availableUserIds,
                    r = (t.createLocalApiErrorHandler, t.fetchStatus, t.fetchUsersIfNeeded, t.userIds, i()(t, j))
                  return g.a.createElement(z, n()({}, r, { userIds: a }))
                }),
                b()(m()(e), '_handleFetch', function () {
                  e._fetchUsersIfNeeded()
                }),
                e
              )
            }
            return (
              u()(a, [
                {
                  key: 'componentDidMount',
                  value: function () {
                    this._fetchUsersIfNeeded()
                  },
                },
                {
                  key: 'componentDidUpdate',
                  value: function (e) {
                    M()(e.userIds, this.props.userIds) || this._fetchUsersIfNeeded()
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    return g.a.createElement(U.a, {
                      accessibilityLabel: K,
                      behavioralEventContext: V,
                      fetchStatus: this.state.allUsersUnavailable ? I.a.LOADED : this.props.fetchStatus,
                      onRequestRetry: this._handleFetch,
                      render: this._renderContent,
                      retryable: !1,
                    })
                  },
                },
                {
                  key: '_fetchUsersIfNeeded',
                  value: function () {
                    var e,
                      t = this,
                      a = this.props,
                      r = a.availableUserIds,
                      n = a.createLocalApiErrorHandler
                    ;(0, a.fetchUsersIfNeeded)(a.userIds).then(
                      function () {
                        t.setState({ allUsersUnavailable: !1 })
                      },
                      n(
                        ((e = {}),
                        b()(e, w.a.AddressBookLookupNotFound, {
                          customAction: function () {
                            0 === r.length && t.setState({ allUsersUnavailable: !0 })
                          },
                        }),
                        b()(e, w.a.OtherUserSuspended, {
                          customAction: function () {
                            0 === r.length && t.setState({ allUsersUnavailable: !0 })
                          },
                        }),
                        e),
                      ),
                    )
                  },
                },
              ]),
              a
            )
          })(g.a.Component),
        )
      t.a = G
    },
    lP98: function (e, t, a) {
      'use strict'
      a.d(t, 'c', function () {
        return w
      }),
        a.d(t, 'b', function () {
          return C
        }),
        a.d(t, 'a', function () {
          return I
        })
      var r = a('KEM+'),
        n = a.n(r),
        o = a('yiKp'),
        i = a.n(o),
        l = (a('z84I'), a('7x/C'), a('JtPf'), a('/kEJ')),
        c = a('oEOe'),
        s = a('RgK2'),
        u = a.n(s),
        d = a('kGix'),
        m = a('Ssj5'),
        h = 'recommendations',
        p = 'rweb/recommendations/FETCH_REQUEST',
        f = 'rweb/recommendations/FETCH_SUCCESS',
        y = 'rweb/recommendations/FETCH_FAILURE',
        v = {},
        b = function (e) {
          var t = e.displayLocation,
            a = e.similarToUserId
          return t + (a ? '_'.concat(a) : '')
        }
      m.a.register(
        n()({}, h, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v,
            t = arguments.length > 1 ? arguments[1] : void 0
          if (!t.meta) return e
          switch (t.type) {
            case p:
              var a = b(t.meta)
              return i()(i()({}, e), {}, n()({}, a, i()(i()({}, e[a]), {}, { fetchStatus: d.a.LOADING })))
            case y:
              var r = b(t.meta)
              return i()(i()({}, e), {}, n()({}, r, i()(i()({}, e[r]), {}, { fetchStatus: d.a.FAILED })))
            case f:
              var o = b(t.meta),
                l = t.payload && t.payload.entities ? t.payload.entities : { recommendations: u.a },
                c = t.payload && t.payload.result ? t.payload.result : g,
                s = c.map(function (e) {
                  return l.recommendations[e]
                })
              return i()(
                i()({}, e),
                {},
                n()({}, o, i()(i()({}, e[o]), {}, { fetchStatus: d.a.LOADED, recommendations: s })),
              )
            default:
              return e
          }
        }),
      )
      var E = [],
        g = [],
        w = function (e, t) {
          var a = t.displayLocation,
            r = t.similarToUserId,
            n = e.recommendations[b({ displayLocation: a, similarToUserId: r })]
          return n && n.recommendations ? n.recommendations : E
        },
        C = function (e, t) {
          var a = t.displayLocation,
            r = t.similarToUserId,
            n = e.recommendations[b({ displayLocation: a, similarToUserId: r })]
          return n ? n.fetchStatus : d.a.NONE
        },
        I = function (e) {
          return function (t, a, r) {
            var n = a(),
              o = e.displayLocation,
              i = e.similarToUserId,
              s = w(n, { displayLocation: o, similarToUserId: i }),
              m = C(n, { displayLocation: o, similarToUserId: i }) === d.a.LOADED
            return s && m
              ? Promise.resolve(u.a)
              : t(
                  (function (e) {
                    return function (t, a, r) {
                      var n = r.api,
                        o = e.displayLocation,
                        i = e.itsInterests,
                        s = e.limit,
                        u = void 0 === s ? 30 : s,
                        d = e.similarToUserId
                      return Object(c.b)(t, {
                        request: n.Recommendations.fetch,
                        params: { display_location: o, itsInterests: i, limit: u, user_id: d },
                      })(
                        {
                          actionTypes: { REQUEST: p, SUCCESS: f, FAILURE: y },
                          context: 'FETCH_RECOMMENDATIONS',
                          meta: { displayLocation: o, similarToUserId: d },
                        },
                        function (e) {
                          if (e && e.entities) return [Object(l.c)(e.entities)]
                        },
                      )
                    }
                  })(e),
                )
          }
        }
    },
    qjak: function (e, t, a) {
      'use strict'
      a('hBvt'), a('ho0z')
      var r = a('ERkP'),
        n = a.n(r),
        o = a('t62R'),
        i = a('MAI/'),
        l = a('shC7'),
        c = a('dC06'),
        s = a('rHpw'),
        u = a('3XMw'),
        d = a.n(u),
        m = a('FITr'),
        h = a('yVEN'),
        p = a('uCrx'),
        f = a('6ZHn'),
        y = a('GcQN'),
        v = a('x0mb'),
        b = a('Hp3u'),
        E = a('yiKp'),
        g = a.n(E),
        w = a('Lsrn'),
        C = a('k/Ka'),
        I = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(C.a)(
            'svg',
            g()(
              g()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [w.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            n.a.createElement(
              'g',
              null,
              n.a.createElement('path', {
                d: 'M19.75 2H4.25C3.01 2 2 3.01 2 4.25v13.003c0 1.24 1.01 2.25 2.25 2.25h4.56l2.59 3.45c.142.19.364.3.6.3.235 0 .457-.11.598-.3l2.588-3.45h4.563c1.24 0 2.25-1.01 2.25-2.25V4.25C22 3.01 20.99 2 19.75 2zM6.963 12.375c-.76 0-1.375-.616-1.375-1.375s.616-1.375 1.375-1.375S8.338 10.24 8.338 11s-.616 1.375-1.375 1.375zm4.85 0c-.76 0-1.375-.616-1.375-1.375s.616-1.375 1.375-1.375 1.375.616 1.375 1.375-.616 1.375-1.375 1.375zm4.85 0c-.76 0-1.375-.616-1.375-1.375s.616-1.375 1.375-1.375c.76 0 1.375.616 1.375 1.375s-.616 1.375-1.375 1.375z',
              }),
            ),
          )
        }
      I.metadata = { width: 24, height: 24 }
      var x = I,
        L = a('EHV7'),
        S = a('wpLu'),
        k = a('EfHu'),
        R = a('cOhU'),
        F = a('cap5'),
        T = a('r9x5'),
        U = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(C.a)(
            'svg',
            g()(
              g()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [w.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            n.a.createElement(
              'g',
              null,
              n.a.createElement('path', {
                d: 'M12 1.25C6.072 1.25 1.25 6.072 1.25 12S6.072 22.75 12 22.75 22.75 17.928 22.75 12 17.928 1.25 12 1.25zm3.75 12.257c-.038 0-.074-.003-.11-.008l-3.667-.54s-.28-.048-.292-.053c-.343-.07-.602-.372-.602-.735V6.417c0-.414.336-.75.75-.75s.75.336.75.75v5.115l3.28.483c.41.06.692.44.632.852-.055.372-.375.64-.74.64z',
              }),
            ),
          )
        }
      U.metadata = { width: 24, height: 24 }
      var O = U,
        B = a('0qK0'),
        _ = a('aPcQ'),
        M = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(C.a)(
            'svg',
            g()(
              g()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [w.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            n.a.createElement(
              'g',
              null,
              n.a.createElement('path', {
                d: 'M8.417 11.816c1.355 0 2.872-.15 3.84-1.256.813-.93 1.077-2.367.806-4.392-.38-2.826-2.116-4.513-4.645-4.513-2.53 0-4.267 1.687-4.646 4.513-.273 2.025-.01 3.462.805 4.393.968 1.108 2.485 1.257 3.84 1.257zm8.28 7.42c-.88-3.526-4.283-5.99-8.28-5.99-3.998 0-7.403 2.464-8.28 5.99-.172.692-.03 1.4.395 1.94.408.52 1.04.82 1.733.82H14.57c.69 0 1.323-.3 1.73-.82.425-.54.568-1.246.396-1.94zM23.24 3.47h-5.624l1.64-1.642c.315-.316.315-.827 0-1.143-.316-.315-.826-.316-1.143 0l-2.96 2.96c-.16.16-.238.366-.238.572 0 .207.08.414.237.57l2.96 2.962c.16.156.365.234.572.234s.413-.08.57-.236c.316-.316.316-.828 0-1.144l-1.64-1.64h5.623c.414 0 .75-.336.75-.75s-.334-.747-.748-.747z',
              }),
            ),
          )
        }
      M.metadata = { width: 24, height: 24 }
      var H = M,
        P = a('lUZE'),
        D = d.a.jb767df7,
        N = d.a.bb3323fa,
        A = d.a.db0798ed,
        z = d.a.dc716ec8,
        j = function (e) {
          return n.a.createElement(o.b, { dir: l.a.getConstants().isRTL ? 'rtl' : 'ltr', withHashflags: !0 }, e)
        },
        K = function (e, t) {
          return t
            ? D
            : (function (e) {
                var t = j(e)
                return n.a.createElement(d.a.I18NFormatMessage, { $i18n: 'h99e9c95' }, t)
              })(e)
        },
        V = s.a.create(function (e) {
          return {
            small: { height: e.lineHeights.subtext3, width: e.lineHeights.subtext3 },
            large: { height: e.lineHeights.subtext1, width: e.lineHeights.subtext1 },
            xLarge: { height: e.lineHeights.headline1, width: e.lineHeights.headline1 },
          }
        }),
        G = s.a.create(function (e) {
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
          r = e.link,
          o = e.retweetData,
          l = e.text,
          s = e.topicData,
          u = e.userAvatarUrls,
          d = o || {},
          E = d.isSelfRetweet,
          g = d.name,
          w = d.screenName,
          C = (function (e, t) {
            var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
              r = V[t],
              o = [G.colorDeepGray, r],
              l = n.a.createElement(m.a, { style: o }),
              s = n.a.createElement(h.a, { style: o }),
              u = n.a.createElement(p.a, { style: o }),
              d = n.a.createElement(f.a, { style: o }),
              E = n.a.createElement(y.a, { style: o }),
              g = n.a.createElement(v.a, { style: G.circle }),
              w = n.a.createElement(b.a, { style: o }),
              C = n.a.createElement(x, { style: o }),
              I = n.a.createElement(L.a, { style: o }),
              U = n.a.createElement(S.a, { style: o }),
              M = n.a.createElement(k.a, { style: o }),
              D = n.a.createElement(R.a, { style: o }),
              N = n.a.createElement(F.a, { style: o }),
              A = n.a.createElement(T.a, { style: o }),
              z = n.a.createElement(O, { style: o }),
              j = n.a.createElement(B.a, { style: o }),
              K = n.a.createElement(_.a, { style: o }),
              W = n.a.createElement(H, { style: o }),
              Y = n.a.createElement(i.a, { borderColor: 'cellBackground', userAvatarSize: t, userAvatarUrls: a }),
              q = n.a.createElement(P.a, { style: o })
            switch (e) {
              case c.a.Pin:
                return l
              case c.a.Retweet:
                return s
              case c.a.Like:
                return u
              case c.a.Follow:
                return d
              case c.a.Moment:
                return E
              case c.a.NewTweets:
                return g
              case c.a.Reply:
              case c.a.Conversation:
                return w
              case c.a.Feedback:
                return C
              case c.a.Topic:
                return I
              case c.a.List:
                return U
              case c.a.Location:
                return M
              case c.a.Community:
                return D
              case c.a.Spaces:
                return N
              case c.a.Sparkle:
                return A
              case c.a.SmartBlockExpiration:
                return z
              case c.a.SocialProof:
              case c.a.FollowFollowed:
                return W
              case c.a.FollowMutual:
                return K
              case c.a.FollowFollowing:
                return j
              case c.a.Facepile:
                return Y
              case c.a.Bird:
                return q
              case c.a.TextOnly:
              default:
                return null
            }
          })(t, a, u)
        switch (t) {
          case c.a.Retweet:
            return { Icon: C, text: l || K(g, E), link: w ? 'https://twitter.com/'.concat(w) : void 0 }
          case c.a.Pin:
            return { Icon: C, text: l || N }
          case c.a.Topic:
            return {
              Icon: C,
              accessibilityLabel:
                'Recommendation' === (null == s ? void 0 : s.functionalityType) ||
                'RecWithEducation' === (null == s ? void 0 : s.functionalityType)
                  ? z({ topicName: l })
                  : A({ topicName: l }),
              text: l ? j(l) : null,
              link: r,
            }
          default:
            return { Icon: C, text: l ? j(l) : null, link: r }
        }
      }
    },
    r9x5: function (e, t, a) {
      'use strict'
      var r = a('yiKp'),
        n = a.n(r),
        o = a('ERkP'),
        i = a.n(o),
        l = a('Lsrn'),
        c = a('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            n()(
              n()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [l.a.root, e.style],
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
      var r = a('yiKp'),
        n = a.n(r),
        o = a('ERkP'),
        i = a.n(o),
        l = a('Lsrn'),
        c = a('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            n()(
              n()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [l.a.root, e.style],
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
      var r = a('yiKp'),
        n = a.n(r),
        o = a('ERkP'),
        i = a.n(o),
        l = a('Lsrn'),
        c = a('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            n()(
              n()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [l.a.root, e.style],
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
  },
])
//# sourceMappingURL=WIPED
