;(window.webpackJsonp = window.webpackJsonp || []).push([
  [21],
  {
    '88ay': function (e, t, r) {
      'use strict'
      r.d(t, 'c', function () {
        return ee
      }),
        r.d(t, 'e', function () {
          return te
        }),
        r.d(t, 'f', function () {
          return re
        }),
        r.d(t, 'd', function () {
          return ne
        }),
        r.d(t, 'a', function () {
          return ae
        })
      var n = r('m3Bd'),
        o = r.n(n),
        i = r('yiKp'),
        a = r.n(i),
        s = r('VrFO'),
        c = r.n(s),
        l = r('Y9Ll'),
        d = r.n(l),
        u = r('1Pcy'),
        p = r.n(u),
        m = r('5Yy7'),
        h = r.n(m),
        f = r('2VqO'),
        v = r.n(f),
        I = r('KEM+'),
        y = r.n(I),
        b = r('97Jx'),
        _ = r.n(b),
        C = (r('1t7P'), r('jQ/y'), r('ho0z'), r('2G9S'), r('hBpG'), r('7x/C'), r('ERkP')),
        E = r.n(C),
        S = r('6rlp'),
        k = r('zh9S'),
        g = r('G6rE'),
        A = r('rxPX'),
        w = r('0KEI'),
        U = function (e, t) {
          return g.e.select(e, t.userId)
        },
        L = function (e, t) {
          return t.promotedContent
        },
        R = Object(A.a)()
          .propsFromState(function () {
            return { promotedContent: L, user: U }
          })
          .adjustStateProps(function (e) {
            var t = e.promotedContent,
              r = e.user
            return { promotedContent: t || (r ? r.promoted_content : void 0), user: r }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)('USER_CELL_CONTAINER'),
              log: S.a,
              scribeAction: k.c,
            }
          }),
        T = r('I57f'),
        F = r('vMjK'),
        N = r('MWbm'),
        D = r('IG7M'),
        O = r('rHpw'),
        B = function (e) {
          var t = e.children,
            r = e.promotedContent,
            n = e.user
          return E.a.createElement(
            N.a,
            { style: x.decorationWrapper },
            t,
            E.a.createElement(D.a, {
              renderActionMenu: function (e) {
                return E.a.createElement(F.b, { onClose: e, promotedContent: r, user: n, view: 'follower' })
              },
              style: x.actionMenu,
            }),
          )
        },
        x = O.a.create(function (e) {
          return { decorationWrapper: { flexDirection: 'row' }, actionMenu: { marginLeft: e.spaces.space12 } }
        }),
        P = r('uIZp'),
        M = r('mN6z'),
        H = r('caTy'),
        j = r('3IPs'),
        q = r('Rp9C'),
        G = r('X04g'),
        K = r('Re5t'),
        J = r('TnY3'),
        W = r('hxu0'),
        Y = r('v6aA'),
        z = r('7JQg'),
        Q = r('nBUg'),
        V = r('IMA+'),
        X = r('cFuS'),
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
            ? E.a.createElement(
                oe,
                _()({}, e, {
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
        displayMode: K.a.UserCompact,
        followRequestReceived: !1,
        hideBlocked: !1,
        promotedItemType: X.c.USER,
        shouldScribeProfileClick: !0,
        shouldScribeImpression: !1,
        withFollowsYou: !1,
      }
      var ee = function (e) {
          var t = e.isDeviceFollowing,
            r = e.userId
          return E.a.createElement(T.a, { isFollowing: t, style: ie.followButton, userId: r })
        },
        te = function (e) {
          var t = e.loggedInUserId,
            r = e.promotedContent,
            n = e.userId
          return t !== n
            ? E.a.createElement(P.a, { promotedContent: r, size: 'small', style: ie.followButton, userId: n })
            : null
        },
        re = function (e) {
          return E.a.createElement(B, { promotedContent: e.promotedContent, user: e.user }, te(e))
        },
        ne = function (e) {
          return E.a.createElement(D.a, {
            renderActionMenu: function (t) {
              return E.a.createElement(F.b, {
                onClose: t,
                promotedContent: e.promotedContent,
                user: e.user,
                view: 'rito_flagged_accounts',
              })
            },
          })
        },
        oe = (function (e) {
          h()(r, e)
          var t = v()(r)
          function r() {
            var e
            c()(this, r)
            for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              y()(p()(e), '_handleAvatarClick', function () {
                var t = e.props.shouldScribeProfileClick
                e._handleSaveAsRecentSearch(),
                  t && e._scribeAction({ element: 'avatar', action: 'profile_click' }),
                  e._handleAsyncPromotedEvent(X.b.PROFILE_IMAGE_CLICK)
              }),
              y()(p()(e), '_handleCellClick', function () {
                var t = e.props,
                  r = t.history,
                  n = t.onClick,
                  o = t.screenName,
                  i = t.user,
                  a = e._getPromotedTweetState()
                e._handleSaveAsRecentSearch(),
                  e._handleScreenNameClick(),
                  n ? n({ user: i, state: a }) : r.push({ pathname: '/'.concat(o), state: a || void 0 })
              }),
              y()(p()(e), '_handleScreenNameClick', function () {
                var t = e.props.shouldScribeProfileClick
                e._handleSaveAsRecentSearch(),
                  t && e._scribeAction({ action: 'profile_click' }),
                  e._handleAsyncPromotedEvent(X.b.SCREEN_NAME_CLICK)
              }),
              y()(p()(e), '_handleSaveAsRecentSearch', function () {
                var t = e.props,
                  r = t.saveAsRecentSearch,
                  n = t.shouldStoreTypeaheadItem,
                  o = t.userId
                r && n && n(G.a.ItemType.USER) && r({ user: { id: o, type: j.a.User } })
              }),
              y()(p()(e), '_scribeAction', function (t) {
                var r,
                  n = e.props,
                  o = n.promotedContent,
                  i = n.scribeAction,
                  s = n.scribeData,
                  c = n.scribeNamespace,
                  l = n.user,
                  d = n.userId,
                  u =
                    null == s || null === (r = s.items) || void 0 === r
                      ? void 0
                      : r.find(function (e) {
                          return e.item_type === G.a.ItemType.USER && e.id === d
                        }),
                  p = s.search_details,
                  m = { items: [a()(a()({}, u), q.a.getUserItem(l, o))], profile_id: d, search_details: p }
                i(a()(a()({}, c), t), m)
              }),
              e
            )
          }
          return (
            d()(r, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._shouldRender() && this._handleImpression()
                },
              },
              {
                key: 'shouldComponentUpdate',
                value: function (e) {
                  return !Object(M.a)(this.props, e)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    r = t.avatarDecoration,
                    n = (t.bottomControl, t.cellClickable),
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
                    s = t.user,
                    c = o()(t, Z)
                  return this._shouldRender()
                    ? E.a.createElement(
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
                        E.a.createElement(
                          V.a,
                          _()({}, c, {
                            avatarDecoration: r,
                            bottomControl: this._renderBottomControl(),
                            decoration: this._renderDecoration(),
                            highlightedLabel: this._getHighlightedLabel(),
                            isBlocking: s.blocking,
                            onAvatarClick: this._handleAvatarClick,
                            onCellClick: n ? this._handleCellClick : void 0,
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
                    r = this.props,
                    n = r.displayMode,
                    o = r.followRequestReceived,
                    i = r.isAutoblocking,
                    a = r.isBlocking,
                    s = r.isDeviceFollowing,
                    c = r.isFollowing,
                    l = r.promotedContent,
                    d = r.screenName,
                    u = r.user,
                    p = r.userId
                  return 'function' == typeof e
                    ? e({
                        displayMode: n,
                        followRequestReceived: o,
                        isAutoblocking: i,
                        isBlocking: a,
                        isDeviceFollowing: !!s,
                        isFollowing: !!c,
                        loggedInUserId: t,
                        promotedContent: l,
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
                    r = e.isBlockedBy,
                    n = e.isBlocking,
                    o = e.screenName
                  return e.userId && o && !(t && (r || n))
                },
              },
              {
                key: '_getHighlightedLabel',
                value: function () {
                  var e = this.props.user.highlightedLabel,
                    t = 'AutomatedLabel' === (null == e ? void 0 : e.userLabelType),
                    r = !!t && this.context.featureSwitches.isTrue('account_taxonomy_automated_label_enabled')
                  return !t || r ? e : void 0
                },
              },
              {
                key: '_getPromotedTweetState',
                value: function () {
                  var e = this.props,
                    t = e.promotedContent,
                    r = e.promotedItemType
                  return t && r === X.c.TWEET ? { promotedTweetState: t } : null
                },
              },
              {
                key: '_handleAsyncPromotedEvent',
                value: function (e) {
                  var t = this.props,
                    r = t.createLocalApiErrorHandler,
                    n = t.log,
                    o = t.promotedContent,
                    i = t.promotedItemId,
                    a = t.promotedItemType,
                    s = t.userId
                  o &&
                    n({
                      disclosureType: o.disclosure_type,
                      itemId: i || s,
                      itemType: a,
                      params: { event: e, impression_id: o.impression_id },
                    }).catch(r())
                },
              },
              {
                key: '_handleImpression',
                value: function () {
                  var e = this.props,
                    t = e.createLocalApiErrorHandler,
                    r = e.log,
                    n = e.promotedContent,
                    o = e.promotedItemType,
                    i = e.shouldScribeImpression,
                    a = e.userId
                  if (n && o === X.c.USER) {
                    var s = n.disclosure_type,
                      c = n.impression_id
                    r({
                      disclosureType: s,
                      itemId: a,
                      itemType: X.c.USER,
                      params: { event: X.b.IMPRESSION, impression_id: c },
                    }).catch(t())
                  } else i && this._scribeAction({ action: 'impression' })
                },
              },
            ]),
            r
          )
        })(E.a.Component)
      y()(oe, 'contextType', Y.a), y()(oe, 'defaultProps', $.defaultProps)
      var ie = O.a.create(function (e) {
          return { followButton: { marginLeft: e.spaces.space12 } }
        }),
        ae = Object(J.a)(Object(W.a)(R($)))
      t.b = Object(z.a)({ element: 'user' })(ae)
    },
    Xs4Y: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return s
      })
      var n = r('KEM+'),
        o = r.n(n),
        i = r('k49u'),
        a = r('fs1G'),
        s = o()({}, i.a.ResourceNotFound, { customAction: a.a })
    },
    hqDb: function (e, t, r) {
      'use strict'
      var n = r('97Jx'),
        o = r.n(n),
        i = r('m3Bd'),
        a = r.n(i),
        s = r('VrFO'),
        c = r.n(s),
        l = r('Y9Ll'),
        d = r.n(l),
        u = r('1Pcy'),
        p = r.n(u),
        m = r('5Yy7'),
        h = r.n(m),
        f = r('2VqO'),
        v = r.n(f),
        I = r('KEM+'),
        y = r.n(I),
        b = (r('2G9S'), r('ERkP')),
        _ = r.n(b),
        C = r('k49u'),
        E = (r('LW0h'), r('7x/C'), r('KOtZ'), r('vrRf'), r('6xIQ')),
        S = r('kGix'),
        k = r('G6rE'),
        g = r('rxPX'),
        A = r('0KEI'),
        w = function (e, t) {
          return t.userIds
        },
        U = function (e, t) {
          return t.userIds.filter(function (t) {
            return !!k.e.select(e, t)
          })
        },
        L = function (e, t) {
          return t.userIds.reduce(function (t, r) {
            var n = k.e.selectFetchStatus(e, r)
            return (t[r] = n === S.a.NONE ? S.a.LOADING : n), t
          }, {})
        },
        R = Object(g.a)()
          .propsFromState(function () {
            return {
              availableUserIds: Object(E.a)(U, function (e) {
                return e
              }),
              fetchStatus: Object(E.a)(U, L, w, function (e, t, r) {
                for (var n = S.a.LOADED, o = 0; o < r.length; o++) {
                  var i = r[o]
                  if (-1 === e.indexOf(i)) {
                    var a = t[i] || S.a.LOADING
                    n = n === S.a.LOADED ? a : n
                  }
                  if (n === S.a.LOADED) break
                }
                return n
              }),
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(A.createLocalApiErrorHandlerWithContextFactory)(
                'USERS_LIST_CONTAINER',
              ),
              fetchUsersIfNeeded: k.e.fetchManyIfNeeded,
            }
          }),
        T = r('v//M'),
        F = r('3XMw'),
        N = r.n(F),
        D = r('pQ3Z'),
        O = r.n(D),
        B = (r('z84I'), r('cFuS')),
        x = r('Re5t'),
        P = r('MWbm'),
        M = r('88ay'),
        H = function (e) {
          var t = e.displayMode,
            r = e.renderUserCell,
            n = e.userIds
          e.withFinalItemBorder, e.withItemBorder
          return _.a.createElement(
            P.a,
            null,
            n.map(function (e, n) {
              return r
                ? r(e)
                : _.a.createElement(M.b, {
                    decoration: M.e,
                    displayMode: t,
                    key: e,
                    promotedItemType: B.c.USER,
                    userId: e,
                    withFollowsYou: !0,
                  })
            }),
          )
        }
      H.defaultProps = { displayMode: x.a.UserDetailed, withFinalItemBorder: !0, withItemBorder: !1 }
      var j = H,
        q = ['availableUserIds', 'createLocalApiErrorHandler', 'fetchStatus', 'fetchUsersIfNeeded', 'userIds'],
        G = N.a.f5b426c2,
        K = { viewType: 'user_list' },
        J = R(
          (function (e) {
            h()(r, e)
            var t = v()(r)
            function r() {
              var e
              c()(this, r)
              for (var n = arguments.length, i = new Array(n), s = 0; s < n; s++) i[s] = arguments[s]
              return (
                (e = t.call.apply(t, [this].concat(i))),
                y()(p()(e), 'state', { allUsersUnavailable: !1 }),
                y()(p()(e), '_renderContent', function () {
                  var t = e.props,
                    r = t.availableUserIds,
                    n = (t.createLocalApiErrorHandler, t.fetchStatus, t.fetchUsersIfNeeded, t.userIds, a()(t, q))
                  return _.a.createElement(j, o()({}, n, { userIds: r }))
                }),
                y()(p()(e), '_handleFetch', function () {
                  e._fetchUsersIfNeeded()
                }),
                e
              )
            }
            return (
              d()(r, [
                {
                  key: 'componentDidMount',
                  value: function () {
                    this._fetchUsersIfNeeded()
                  },
                },
                {
                  key: 'componentDidUpdate',
                  value: function (e) {
                    O()(e.userIds, this.props.userIds) || this._fetchUsersIfNeeded()
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    return _.a.createElement(T.a, {
                      accessibilityLabel: G,
                      behavioralEventContext: K,
                      fetchStatus: this.state.allUsersUnavailable ? S.a.LOADED : this.props.fetchStatus,
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
                      r = this.props,
                      n = r.availableUserIds,
                      o = r.createLocalApiErrorHandler
                    ;(0, r.fetchUsersIfNeeded)(r.userIds).then(
                      function () {
                        t.setState({ allUsersUnavailable: !1 })
                      },
                      o(
                        ((e = {}),
                        y()(e, C.a.AddressBookLookupNotFound, {
                          customAction: function () {
                            0 === n.length && t.setState({ allUsersUnavailable: !0 })
                          },
                        }),
                        y()(e, C.a.OtherUserSuspended, {
                          customAction: function () {
                            0 === n.length && t.setState({ allUsersUnavailable: !0 })
                          },
                        }),
                        e),
                      ),
                    )
                  },
                },
              ]),
              r
            )
          })(_.a.Component),
        )
      t.a = J
    },
    hxu0: function (e, t, r) {
      'use strict'
      var n = r('97Jx'),
        o = r.n(n),
        i = r('ERkP'),
        a = r.n(i),
        s = r('vqbU')
      t.a = function (e) {
        return function (t) {
          return a.a.createElement(s.a.Consumer, null, function (r) {
            return a.a.createElement(e, o()({}, t, { isInSidebar: r }))
          })
        }
      }
    },
    lP98: function (e, t, r) {
      'use strict'
      r.d(t, 'c', function () {
        return C
      }),
        r.d(t, 'b', function () {
          return E
        }),
        r.d(t, 'a', function () {
          return S
        })
      var n = r('KEM+'),
        o = r.n(n),
        i = r('yiKp'),
        a = r.n(i),
        s = (r('z84I'), r('7x/C'), r('JtPf'), r('/kEJ')),
        c = r('oEOe'),
        l = r('RgK2'),
        d = r.n(l),
        u = r('kGix'),
        p = r('Ssj5'),
        m = 'recommendations',
        h = 'rweb/recommendations/FETCH_REQUEST',
        f = 'rweb/recommendations/FETCH_SUCCESS',
        v = 'rweb/recommendations/FETCH_FAILURE',
        I = {},
        y = function (e) {
          var t = e.displayLocation,
            r = e.similarToUserId
          return t + (r ? '_'.concat(r) : '')
        }
      p.a.register(
        o()({}, m, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : I,
            t = arguments.length > 1 ? arguments[1] : void 0
          if (!t.meta) return e
          switch (t.type) {
            case h:
              var r = y(t.meta)
              return a()(a()({}, e), {}, o()({}, r, a()(a()({}, e[r]), {}, { fetchStatus: u.a.LOADING })))
            case v:
              var n = y(t.meta)
              return a()(a()({}, e), {}, o()({}, n, a()(a()({}, e[n]), {}, { fetchStatus: u.a.FAILED })))
            case f:
              var i = y(t.meta),
                s = t.payload && t.payload.entities ? t.payload.entities : { recommendations: d.a },
                c = t.payload && t.payload.result ? t.payload.result : _,
                l = c.map(function (e) {
                  return s.recommendations[e]
                })
              return a()(
                a()({}, e),
                {},
                o()({}, i, a()(a()({}, e[i]), {}, { fetchStatus: u.a.LOADED, recommendations: l })),
              )
            default:
              return e
          }
        }),
      )
      var b = [],
        _ = [],
        C = function (e, t) {
          var r = t.displayLocation,
            n = t.similarToUserId,
            o = e.recommendations[y({ displayLocation: r, similarToUserId: n })]
          return o && o.recommendations ? o.recommendations : b
        },
        E = function (e, t) {
          var r = t.displayLocation,
            n = t.similarToUserId,
            o = e.recommendations[y({ displayLocation: r, similarToUserId: n })]
          return o ? o.fetchStatus : u.a.NONE
        },
        S = function (e) {
          return function (t, r, n) {
            var o = r(),
              i = e.displayLocation,
              a = e.similarToUserId,
              l = C(o, { displayLocation: i, similarToUserId: a }),
              p = E(o, { displayLocation: i, similarToUserId: a }) === u.a.LOADED
            return l && p
              ? Promise.resolve(d.a)
              : t(
                  (function (e) {
                    return function (t, r, n) {
                      var o = n.api,
                        i = e.displayLocation,
                        a = e.itsInterests,
                        l = e.limit,
                        d = void 0 === l ? 30 : l,
                        u = e.similarToUserId
                      return Object(c.b)(t, {
                        request: o.Recommendations.fetch,
                        params: { display_location: i, itsInterests: a, limit: d, user_id: u },
                      })(
                        {
                          actionTypes: { REQUEST: h, SUCCESS: f, FAILURE: v },
                          context: 'FETCH_RECOMMENDATIONS',
                          meta: { displayLocation: i, similarToUserId: u },
                        },
                        function (e) {
                          if (e && e.entities) return [Object(s.c)(e.entities)]
                        },
                      )
                    }
                  })(e),
                )
          }
        }
    },
  },
])
//# sourceMappingURL=WIPED
