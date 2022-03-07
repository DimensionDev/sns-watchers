;(window.webpackJsonp = window.webpackJsonp || []).push([
  [58],
  {
    '180P': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      })
      n('TJCb'), n('7x/C'), n('DZ+c'), n('KOtZ'), n('0zG9'), n('KqXw'), n('Ysgh'), n('tQbP'), n('7xRU')
      var r = function (e) {
          var t = (JSON.stringify(e) || '').split('')
          t.sort()
          var n = t.join('')
          return o(n, 0).toString()
        },
        o = function (e, t) {
          for (var n = 'string' == typeof e ? e : String(e), r = t, o = 0; o < n.length; o++) {
            ;(r = (r << 5) - r + n.charCodeAt(o)), (r &= r)
          }
          return r
        }
    },
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
          return re
        }),
        n.d(t, 'a', function () {
          return ae
        })
      var r = n('m3Bd'),
        o = n.n(r),
        i = n('yiKp'),
        a = n.n(i),
        c = n('VrFO'),
        l = n.n(c),
        s = n('Y9Ll'),
        d = n.n(s),
        u = n('1Pcy'),
        p = n.n(u),
        h = n('5Yy7'),
        f = n.n(h),
        m = n('2VqO'),
        v = n.n(m),
        _ = n('KEM+'),
        g = n.n(_),
        y = n('97Jx'),
        b = n.n(y),
        I = (n('1t7P'), n('jQ/y'), n('ho0z'), n('2G9S'), n('hBpG'), n('7x/C'), n('ERkP')),
        C = n.n(I),
        E = n('6rlp'),
        w = n('zh9S'),
        k = n('G6rE'),
        S = n('rxPX'),
        A = n('0KEI'),
        R = function (e, t) {
          return k.e.select(e, t.userId)
        },
        F = function (e, t) {
          return t.promotedContent
        },
        P = Object(S.a)()
          .propsFromState(function () {
            return { promotedContent: F, user: R }
          })
          .adjustStateProps(function (e) {
            var t = e.promotedContent,
              n = e.user
            return { promotedContent: t || (n ? n.promoted_content : void 0), user: n }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(A.createLocalApiErrorHandlerWithContextFactory)('USER_CELL_CONTAINER'),
              log: E.a,
              scribeAction: w.c,
            }
          }),
        L = n('I57f'),
        T = n('vMjK'),
        x = n('MWbm'),
        O = n('IG7M'),
        B = n('rHpw'),
        N = function (e) {
          var t = e.children,
            n = e.promotedContent,
            r = e.user
          return C.a.createElement(
            x.a,
            { style: D.decorationWrapper },
            t,
            C.a.createElement(O.a, {
              renderActionMenu: function (e) {
                return C.a.createElement(T.b, { onClose: e, promotedContent: n, user: r, view: 'follower' })
              },
              style: D.actionMenu,
            }),
          )
        },
        D = B.a.create(function (e) {
          return { decorationWrapper: { flexDirection: 'row' }, actionMenu: { marginLeft: e.spaces.space12 } }
        }),
        U = n('uIZp'),
        q = n('mN6z'),
        j = n('caTy'),
        M = n('3IPs'),
        H = n('Rp9C'),
        K = n('X04g'),
        G = n('Re5t'),
        W = n('TnY3'),
        z = n('hxu0'),
        J = n('v6aA'),
        Y = n('7JQg'),
        Q = n('nBUg'),
        V = n('IMA+'),
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
            ? C.a.createElement(
                oe,
                b()({}, e, {
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
        displayMode: G.a.UserCompact,
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
          return C.a.createElement(L.a, { isFollowing: t, style: ie.followButton, userId: n })
        },
        te = function (e) {
          var t = e.loggedInUserId,
            n = e.promotedContent,
            r = e.userId
          return t !== r
            ? C.a.createElement(U.a, { promotedContent: n, size: 'small', style: ie.followButton, userId: r })
            : null
        },
        ne = function (e) {
          return C.a.createElement(N, { promotedContent: e.promotedContent, user: e.user }, te(e))
        },
        re = function (e) {
          return C.a.createElement(O.a, {
            renderActionMenu: function (t) {
              return C.a.createElement(T.b, {
                onClose: t,
                promotedContent: e.promotedContent,
                user: e.user,
                view: 'rito_flagged_accounts',
              })
            },
          })
        },
        oe = (function (e) {
          f()(n, e)
          var t = v()(n)
          function n() {
            var e
            l()(this, n)
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              g()(p()(e), '_handleAvatarClick', function () {
                var t = e.props.shouldScribeProfileClick
                e._handleSaveAsRecentSearch(),
                  t && e._scribeAction({ element: 'avatar', action: 'profile_click' }),
                  e._handleAsyncPromotedEvent(X.b.PROFILE_IMAGE_CLICK)
              }),
              g()(p()(e), '_handleCellClick', function () {
                var t = e.props,
                  n = t.history,
                  r = t.onClick,
                  o = t.screenName,
                  i = t.user,
                  a = e._getPromotedTweetState()
                e._handleSaveAsRecentSearch(),
                  e._handleScreenNameClick(),
                  r ? r({ user: i, state: a }) : n.push({ pathname: '/'.concat(o), state: a || void 0 })
              }),
              g()(p()(e), '_handleScreenNameClick', function () {
                var t = e.props.shouldScribeProfileClick
                e._handleSaveAsRecentSearch(),
                  t && e._scribeAction({ action: 'profile_click' }),
                  e._handleAsyncPromotedEvent(X.b.SCREEN_NAME_CLICK)
              }),
              g()(p()(e), '_handleSaveAsRecentSearch', function () {
                var t = e.props,
                  n = t.saveAsRecentSearch,
                  r = t.shouldStoreTypeaheadItem,
                  o = t.userId
                n && r && r(K.a.ItemType.USER) && n({ user: { id: o, type: M.a.User } })
              }),
              g()(p()(e), '_scribeAction', function (t) {
                var n,
                  r = e.props,
                  o = r.promotedContent,
                  i = r.scribeAction,
                  c = r.scribeData,
                  l = r.scribeNamespace,
                  s = r.user,
                  d = r.userId,
                  u =
                    null == c || null === (n = c.items) || void 0 === n
                      ? void 0
                      : n.find(function (e) {
                          return e.item_type === K.a.ItemType.USER && e.id === d
                        }),
                  p = c.search_details,
                  h = { items: [a()(a()({}, u), H.a.getUserItem(s, o))], profile_id: d, search_details: p }
                i(a()(a()({}, l), t), h)
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
                  return !Object(q.a)(this.props, e)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.avatarDecoration,
                    r = (t.bottomControl, t.cellClickable),
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
                    c = t.user,
                    l = o()(t, Z)
                  return this._shouldRender()
                    ? C.a.createElement(
                        Q.b.Provider,
                        {
                          value: {
                            socialContextRefreshEnabled: function () {
                              return e.context.featureSwitches.isTrue(
                                'social_context_and_topic_context_refresh_alignment_enabled',
                              )
                            },
                          },
                        },
                        C.a.createElement(
                          V.a,
                          b()({}, l, {
                            avatarDecoration: n,
                            bottomControl: this._renderBottomControl(),
                            decoration: this._renderDecoration(),
                            highlightedLabel: this._getHighlightedLabel(),
                            isBlocking: c.blocking,
                            onAvatarClick: this._handleAvatarClick,
                            onCellClick: r ? this._handleCellClick : void 0,
                            onScreenNameClick: this._handleScreenNameClick,
                            socialContext: a
                              ? {
                                  contextType: a.contextType,
                                  text: a.text,
                                  link: a.landingUrl ? Object(j.b)(a.landingUrl) : void 0,
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
                    r = n.displayMode,
                    o = n.followRequestReceived,
                    i = n.isAutoblocking,
                    a = n.isBlocking,
                    c = n.isDeviceFollowing,
                    l = n.isFollowing,
                    s = n.promotedContent,
                    d = n.screenName,
                    u = n.user,
                    p = n.userId
                  return 'function' == typeof e
                    ? e({
                        displayMode: r,
                        followRequestReceived: o,
                        isAutoblocking: i,
                        isBlocking: a,
                        isDeviceFollowing: !!c,
                        isFollowing: !!l,
                        loggedInUserId: t,
                        promotedContent: s,
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
                    r = e.isBlocking,
                    o = e.screenName
                  return e.userId && o && !(t && (n || r))
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
                    r = t.log,
                    o = t.promotedContent,
                    i = t.promotedItemId,
                    a = t.promotedItemType,
                    c = t.userId
                  o &&
                    r({
                      disclosureType: o.disclosure_type,
                      itemId: i || c,
                      itemType: a,
                      params: { event: e, impression_id: o.impression_id },
                    }).catch(n())
                },
              },
              {
                key: '_handleImpression',
                value: function () {
                  var e = this.props,
                    t = e.createLocalApiErrorHandler,
                    n = e.log,
                    r = e.promotedContent,
                    o = e.promotedItemType,
                    i = e.shouldScribeImpression,
                    a = e.userId
                  if (r && o === X.c.USER) {
                    var c = r.disclosure_type,
                      l = r.impression_id
                    n({
                      disclosureType: c,
                      itemId: a,
                      itemType: X.c.USER,
                      params: { event: X.b.IMPRESSION, impression_id: l },
                    }).catch(t())
                  } else i && this._scribeAction({ action: 'impression' })
                },
              },
            ]),
            n
          )
        })(C.a.Component)
      g()(oe, 'contextType', J.a), g()(oe, 'defaultProps', $.defaultProps)
      var ie = B.a.create(function (e) {
          return { followButton: { marginLeft: e.spaces.space12 } }
        }),
        ae = Object(W.a)(Object(z.a)(P($)))
      t.b = Object(Y.a)({ element: 'user' })(ae)
    },
    gemt: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'FollowerRequestsScreen', function () {
          return te
        })
      var r,
        o = n('VrFO'),
        i = n.n(o),
        a = n('Y9Ll'),
        c = n.n(a),
        l = n('1Pcy'),
        s = n.n(l),
        d = n('5Yy7'),
        u = n.n(d),
        p = n('2VqO'),
        h = n.n(p),
        f = n('KEM+'),
        m = n.n(f),
        v = (n('2G9S'), n('ERkP')),
        _ = n.n(v),
        g = (n('z84I'), n('xQWt')),
        y = n('hqKg'),
        b = n('rxPX'),
        I = n('0KEI'),
        C = n('kGix'),
        E = function (e) {
          return g.f(e).hydratedIds
        },
        w = Object(b.a)()
          .propsFromState(function () {
            return {
              followerRequestIds: E,
              fetchStatus: Object(y.createSelector)(g.f, g.g, g.h, function (e, t, n) {
                var r = e.hydratedIds,
                  o = e.ids
                return t === C.a.LOADED ? (o.length && r.length !== o.length ? n || C.a.LOADING : C.a.LOADED) : t
              }),
            }
          })
          .adjustStateProps(function (e) {
            var t = e.followerRequestIds,
              n = void 0 === t ? [] : t
            return {
              fetchStatus: e.fetchStatus,
              timeline: n.map(function (e) {
                return { type: 'user_cell', data: e }
              }),
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(I.createLocalApiErrorHandlerWithContextFactory)('FOLLOWER_REQUESTS'),
              fetchPendingFollowersIfNeeded: g.d,
              fetchPendingFollowersUsersIfNeeded: g.e,
              fetchNextPendingFollowersUsers: g.c,
            }
          }),
        k = n('FIs5'),
        S = n('v//M'),
        A = Object(b.a)().propsFromActions(function () {
          return {
            acceptPendingFollower: g.a,
            createLocalApiErrorHandler: Object(I.createLocalApiErrorHandlerWithContextFactory)(
              'FOLLOWER_REQUEST_ACTIONS_CONTAINER',
            ),
            declinePendingFollower: g.b,
          }
        }),
        R = n('k49u'),
        F = n('3XMw'),
        P = n.n(F),
        L = P.a.j85d8d9f,
        T = ((r = {}), m()(r, R.a.NoFollowRequest, { toast: { text: L } }), m()(r, 'showToast', !0), r),
        x = n('MWbm'),
        O = n('/yvb'),
        B = n('rHpw'),
        N = P.a.da878dcf,
        D = P.a.ec2d8341,
        U = B.a.create(function (e) {
          return {
            root: { paddingTop: e.spaces.space4, flexDirection: 'row', flexGrow: 1, justifyContent: 'center' },
            declineButton: { marginRight: e.spaces.space12 },
            followerRequestActionButton: { flexGrow: 1 },
          }
        }),
        q = function (e) {
          var t = e.onAccept,
            n = e.onDecline
          return _.a.createElement(
            x.a,
            { style: U.root },
            _.a.createElement(
              O.a,
              {
                accessibilityLabel: D,
                onPress: n,
                size: 'small',
                style: [U.followerRequestActionButton, U.declineButton],
                type: 'destructiveOutlined',
              },
              D,
            ),
            _.a.createElement(
              O.a,
              {
                accessibilityLabel: N,
                onPress: t,
                size: 'small',
                style: U.followerRequestActionButton,
                type: 'brandOutlined',
              },
              N,
            ),
          )
        },
        j = A(
          (function (e) {
            u()(n, e)
            var t = h()(n)
            function n() {
              var e
              i()(this, n)
              for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a]
              return (
                (e = t.call.apply(t, [this].concat(o))),
                m()(s()(e), '_handleAccept', function () {
                  var t = e.props,
                    n = t.acceptPendingFollower,
                    r = t.createLocalApiErrorHandler
                  n({ id_str: t.userId }).catch(r(T))
                }),
                m()(s()(e), '_handleDecline', function () {
                  var t = e.props,
                    n = t.createLocalApiErrorHandler
                  ;(0, t.declinePendingFollower)({ id_str: t.userId }).catch(n(T))
                }),
                e
              )
            }
            return (
              c()(n, [
                {
                  key: 'render',
                  value: function () {
                    return _.a.createElement(q, { onAccept: this._handleAccept, onDecline: this._handleDecline })
                  },
                },
              ]),
              n
            )
          })(_.a.Component),
        ),
        M = n('jHSc'),
        H = n('TEoO'),
        K = n('7JQg'),
        G = n('180P'),
        W = function (e) {
          return e && 'user_cell' === e.type ? e.data : Object(G.a)(e)
        },
        z = n('Re5t'),
        J = n('88ay'),
        Y = P.a.ce281ddf,
        Q = P.a.d441fe05,
        V = P.a.i83d4f13,
        X = { page: 'follower_requests' },
        Z = function (e) {
          var t = e.followRequestReceived,
            n = e.loggedInUserId,
            r = e.userId
          return !(!t || n === r)
        },
        $ = function (e) {
          return Z(e) ? null : Object(J.e)(e)
        },
        ee = function (e) {
          return Z(e) ? _.a.createElement(j, { userId: e.userId }) : null
        },
        te = (function (e) {
          u()(n, e)
          var t = h()(n)
          function n() {
            var e
            i()(this, n)
            for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              m()(s()(e), '_render', function () {
                var t = e.props.timeline
                return _.a.createElement(H.a, {
                  accessibilityTitle: V,
                  assumedItemHeight: 75,
                  cacheKey: 'userFollowerRequests',
                  identityFunction: W,
                  items: t,
                  noItemsRenderer: e._renderEmptyState,
                  onNearEnd: e._handleNearEnd,
                  renderer: e._itemRenderer,
                })
              }),
              m()(s()(e), '_renderEmptyState', function () {
                return _.a.createElement(k.a, { header: Y, message: Q })
              }),
              m()(s()(e), '_handleFetch', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler,
                  r = t.fetchPendingFollowersIfNeeded,
                  o = t.fetchPendingFollowersUsersIfNeeded
                r().then(function () {
                  return o()
                }, n({}))
              }),
              m()(s()(e), '_itemRenderer', function (e) {
                return 'user_cell' === e.type
                  ? _.a.createElement(
                      x.a,
                      null,
                      _.a.createElement(J.b, {
                        bottomControl: ee,
                        decoration: $,
                        displayMode: z.a.UserDetailed,
                        userId: e.data,
                        withFollowsYou: !0,
                      }),
                    )
                  : null
              }),
              m()(s()(e), '_handleNearEnd', function () {
                e.props.fetchNextPendingFollowersUsers()
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._handleFetch()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    n = e.history
                  return _.a.createElement(
                    K.c,
                    { namespace: X },
                    _.a.createElement(
                      M.b,
                      { history: n, title: V },
                      _.a.createElement(S.a, {
                        fetchStatus: t,
                        onRequestRetry: this._handleFetch,
                        render: this._render,
                      }),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(_.a.Component),
        ne = w(te)
      t.default = ne
    },
    hxu0: function (e, t, n) {
      'use strict'
      var r = n('97Jx'),
        o = n.n(r),
        i = n('ERkP'),
        a = n.n(i),
        c = n('vqbU')
      t.a = function (e) {
        return function (t) {
          return a.a.createElement(c.a.Consumer, null, function (n) {
            return a.a.createElement(e, o()({}, t, { isInSidebar: n }))
          })
        }
      }
    },
  },
])
//# sourceMappingURL=WIPED
