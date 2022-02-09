;(window.webpackJsonp = window.webpackJsonp || []).push([
  [49],
  {
    '88ay': function (e, t, r) {
      'use strict'
      r.d(t, 'c', function () {
        return $
      }),
        r.d(t, 'e', function () {
          return ee
        }),
        r.d(t, 'f', function () {
          return te
        }),
        r.d(t, 'd', function () {
          return re
        }),
        r.d(t, 'a', function () {
          return ae
        })
      var n = r('m3Bd'),
        o = r.n(n),
        a = r('yiKp'),
        i = r.n(a),
        c = r('VrFO'),
        s = r.n(c),
        l = r('Y9Ll'),
        u = r.n(l),
        d = r('1Pcy'),
        p = r.n(d),
        h = r('5Yy7'),
        f = r.n(h),
        m = r('2VqO'),
        v = r.n(m),
        I = r('KEM+'),
        b = r.n(I),
        _ = r('97Jx'),
        y = r.n(_),
        C = (r('1t7P'), r('jQ/y'), r('ho0z'), r('2G9S'), r('hBpG'), r('7x/C'), r('ERkP')),
        k = r.n(C),
        g = r('6rlp'),
        E = r('zh9S'),
        S = r('G6rE'),
        A = r('rxPX'),
        w = r('0KEI'),
        R = function (e, t) {
          return S.e.select(e, t.userId)
        },
        L = function (e, t) {
          return t.promotedContent
        },
        N = Object(A.a)()
          .propsFromState(function () {
            return { promotedContent: L, user: R }
          })
          .adjustStateProps(function (e) {
            var t = e.promotedContent,
              r = e.user
            return { promotedContent: t || (r ? r.promoted_content : void 0), user: r }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)('USER_CELL_CONTAINER'),
              log: g.a,
              scribeAction: E.c,
            }
          }),
        U = r('I57f'),
        F = r('vMjK'),
        O = r('MWbm'),
        T = r('IG7M'),
        B = r('rHpw'),
        D = function (e) {
          var t = e.children,
            r = e.promotedContent,
            n = e.user
          return k.a.createElement(
            O.a,
            { style: P.decorationWrapper },
            t,
            k.a.createElement(T.a, {
              renderActionMenu: function (e) {
                return k.a.createElement(F.b, { onClose: e, promotedContent: r, user: n, view: 'follower' })
              },
              style: P.actionMenu,
            }),
          )
        },
        P = B.a.create(function (e) {
          return { decorationWrapper: { flexDirection: 'row' }, actionMenu: { marginLeft: e.spaces.space12 } }
        }),
        x = r('uIZp'),
        M = r('mN6z'),
        j = r('caTy'),
        H = r('3IPs'),
        q = r('Rp9C'),
        K = r('X04g'),
        W = r('Re5t'),
        G = r('TnY3'),
        V = r('hxu0'),
        X = r('v6aA'),
        Y = r('7JQg'),
        J = r('IMA+'),
        z = r('cFuS'),
        Q = [
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
        Z = function (e) {
          var t = e.user
          return t && t.profile_image_url_https
            ? k.a.createElement(
                ne,
                y()({}, e, {
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
      Z.defaultProps = {
        cellClickable: !0,
        decoration: null,
        displayMode: W.a.UserCompact,
        followRequestReceived: !1,
        hideBlocked: !1,
        promotedItemType: z.c.USER,
        shouldScribeProfileClick: !0,
        shouldScribeImpression: !1,
        withFollowsYou: !1,
      }
      var $ = function (e) {
          var t = e.isDeviceFollowing,
            r = e.userId
          return k.a.createElement(U.a, { isFollowing: t, style: oe.followButton, userId: r })
        },
        ee = function (e) {
          var t = e.loggedInUserId,
            r = e.promotedContent,
            n = e.userId
          return t !== n
            ? k.a.createElement(x.a, { promotedContent: r, size: 'small', style: oe.followButton, userId: n })
            : null
        },
        te = function (e) {
          return k.a.createElement(D, { promotedContent: e.promotedContent, user: e.user }, ee(e))
        },
        re = function (e) {
          return k.a.createElement(T.a, {
            renderActionMenu: function (t) {
              return k.a.createElement(F.b, {
                onClose: t,
                promotedContent: e.promotedContent,
                user: e.user,
                view: 'rito_flagged_accounts',
              })
            },
          })
        },
        ne = (function (e) {
          f()(r, e)
          var t = v()(r)
          function r() {
            var e
            s()(this, r)
            for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++) o[a] = arguments[a]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              b()(p()(e), '_handleAvatarClick', function () {
                var t = e.props.shouldScribeProfileClick
                e._handleSaveAsRecentSearch(),
                  t && e._scribeAction({ element: 'avatar', action: 'profile_click' }),
                  e._handleAsyncPromotedEvent(z.b.PROFILE_IMAGE_CLICK)
              }),
              b()(p()(e), '_handleCellClick', function () {
                var t = e.props,
                  r = t.history,
                  n = t.onClick,
                  o = t.screenName,
                  a = t.user,
                  i = e._getPromotedTweetState()
                e._handleSaveAsRecentSearch(),
                  e._handleScreenNameClick(),
                  n ? n({ user: a, state: i }) : r.push({ pathname: '/'.concat(o), state: i || void 0 })
              }),
              b()(p()(e), '_handleScreenNameClick', function () {
                var t = e.props.shouldScribeProfileClick
                e._handleSaveAsRecentSearch(),
                  t && e._scribeAction({ action: 'profile_click' }),
                  e._handleAsyncPromotedEvent(z.b.SCREEN_NAME_CLICK)
              }),
              b()(p()(e), '_handleSaveAsRecentSearch', function () {
                var t = e.props,
                  r = t.saveAsRecentSearch,
                  n = t.shouldStoreTypeaheadItem,
                  o = t.userId
                r && n && n(K.a.ItemType.USER) && r({ user: { id: o, type: H.a.User } })
              }),
              b()(p()(e), '_scribeAction', function (t) {
                var r,
                  n = e.props,
                  o = n.promotedContent,
                  a = n.scribeAction,
                  c = n.scribeData,
                  s = n.scribeNamespace,
                  l = n.user,
                  u = n.userId,
                  d =
                    null == c || null === (r = c.items) || void 0 === r
                      ? void 0
                      : r.find(function (e) {
                          return e.item_type === K.a.ItemType.USER && e.id === u
                        }),
                  p = c.search_details,
                  h = { items: [i()(i()({}, d), q.a.getUserItem(l, o))], profile_id: u, search_details: p }
                a(i()(i()({}, s), t), h)
              }),
              e
            )
          }
          return (
            u()(r, [
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
                  var e = this.props,
                    t = e.avatarDecoration,
                    r = (e.bottomControl, e.cellClickable),
                    n =
                      (e.createLocalApiErrorHandler,
                      e.decoration,
                      e.followRequestReceived,
                      e.hideBlocked,
                      e.history,
                      e.isAutoblocking,
                      e.isBlockedBy,
                      e.isBlocking,
                      e.isDeviceFollowing,
                      e.isFollowing,
                      e.isInSidebar),
                    a =
                      (e.location,
                      e.log,
                      e.onClick,
                      e.promotedItemId,
                      e.saveAsRecentSearch,
                      e.scribeAction,
                      e.scribeData,
                      e.scribeNamespace,
                      e.shouldScribeImpression,
                      e.shouldScribeProfileClick,
                      e.shouldStoreTypeaheadItem,
                      e.socialContext),
                    i = e.user,
                    c = o()(e, Q)
                  return this._shouldRender()
                    ? k.a.createElement(
                        J.a,
                        y()({}, c, {
                          avatarDecoration: t,
                          bottomControl: this._renderBottomControl(),
                          decoration: this._renderDecoration(),
                          highlightedLabel: this._getHighlightedLabel(),
                          isBlocking: i.blocking,
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
                          withDarkerInteractiveBackground: n,
                        }),
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
                    a = r.isAutoblocking,
                    i = r.isBlocking,
                    c = r.isDeviceFollowing,
                    s = r.isFollowing,
                    l = r.promotedContent,
                    u = r.screenName,
                    d = r.user,
                    p = r.userId
                  return 'function' == typeof e
                    ? e({
                        displayMode: n,
                        followRequestReceived: o,
                        isAutoblocking: a,
                        isBlocking: i,
                        isDeviceFollowing: !!c,
                        isFollowing: !!s,
                        loggedInUserId: t,
                        promotedContent: l,
                        screenName: u,
                        user: d,
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
                  return t && r === z.c.TWEET ? { promotedTweetState: t } : null
                },
              },
              {
                key: '_handleAsyncPromotedEvent',
                value: function (e) {
                  var t = this.props,
                    r = t.createLocalApiErrorHandler,
                    n = t.log,
                    o = t.promotedContent,
                    a = t.promotedItemId,
                    i = t.promotedItemType,
                    c = t.userId
                  o &&
                    n({
                      disclosureType: o.disclosure_type,
                      itemId: a || c,
                      itemType: i,
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
                    a = e.shouldScribeImpression,
                    i = e.userId
                  if (n && o === z.c.USER) {
                    var c = n.disclosure_type,
                      s = n.impression_id
                    r({
                      disclosureType: c,
                      itemId: i,
                      itemType: z.c.USER,
                      params: { event: z.b.IMPRESSION, impression_id: s },
                    }).catch(t())
                  } else a && this._scribeAction({ action: 'impression' })
                },
              },
            ]),
            r
          )
        })(k.a.Component)
      b()(ne, 'contextType', X.a), b()(ne, 'defaultProps', Z.defaultProps)
      var oe = B.a.create(function (e) {
          return { followButton: { marginLeft: e.spaces.space12 } }
        }),
        ae = Object(G.a)(Object(V.a)(N(Z)))
      t.b = Object(Y.c)({ element: 'user' })(ae)
    },
    gLwk: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'ConversationParticipantsScreen', function () {
          return x
        })
      var n = r('VrFO'),
        o = r.n(n),
        a = r('Y9Ll'),
        i = r.n(a),
        c = r('1Pcy'),
        s = r.n(c),
        l = r('5Yy7'),
        u = r.n(l),
        d = r('2VqO'),
        p = r.n(d),
        h = r('KEM+'),
        f = r.n(h),
        m = (r('2G9S'), r('ERkP')),
        v = r.n(m),
        I = r('RhWx'),
        b = r.n(I),
        _ = (r('KqXw'), r('WNMA'), r('LW0h'), r('7x/C'), r('z84I'), r('hqKg')),
        y = r('XOJV'),
        C = r('lnti'),
        k = r('s1N3'),
        g = r('rxPX'),
        E = r('0KEI'),
        S = function (e, t) {
          return t.match.params.screenName
        },
        A = function (e, t) {
          return t.match.params.statusId
        },
        w = function (e, t) {
          return y.a.selectHydrated(e, t.match.params.statusId)
        },
        R = function (e, t) {
          return y.a.selectFetchStatus(e, t.match.params.statusId)
        },
        L = Object(g.a)()
          .propsFromState(function () {
            return {
              fetchStatus: R,
              screenName: S,
              statusId: A,
              participantIds: Object(_.createSelector)(w, function (e) {
                if (!e) return []
                var t = (e.entities || {}).user_mentions,
                  r = void 0 === t ? [] : t,
                  n = { id_str: e.in_reply_to_user_id_str },
                  o = r.filter(function (t) {
                    return t.indices[0] < e.display_text_range[0]
                  }),
                  a = [n].concat(b()(o))
                return Object(C.a)(
                  Object(k.a)(
                    a.map(function (e) {
                      return e.id_str
                    }),
                  ),
                )
              }),
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(E.createLocalApiErrorHandlerWithContextFactory)(
                'CONVERSATION_PARTICIPANTS_SCREEN',
              ),
              fetchTweetIfNeeded: y.a.fetchOneIfNeeded,
            }
          })
          .withAnalytics({ page: 'conversation_participants' }),
        N = r('v//M'),
        U = r('W5XZ'),
        F = r('jHSc'),
        O = r('3XMw'),
        T = r.n(O),
        B = r('hqDb'),
        D = T.a.cdd4aafe,
        P = T.a.aac3fad1,
        x = (function (e) {
          u()(r, e)
          var t = p()(r)
          function r() {
            var e
            o()(this, r)
            for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++) a[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              f()(s()(e), '_renderList', function () {
                return v.a.createElement(B.a, { userIds: e.props.participantIds, withItemBorder: !0 })
              }),
              f()(s()(e), '_handleFetch', function () {
                var t = e.props,
                  r = t.createLocalApiErrorHandler
                ;(0, t.fetchTweetIfNeeded)(t.statusId).catch(r(U.a))
              }),
              e
            )
          }
          return (
            i()(r, [
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
                    r = e.history,
                    n = e.screenName,
                    o = e.statusId
                  return v.a.createElement(
                    F.b,
                    { backLocation: '/'.concat(n.toLowerCase(), '/status/').concat(o), history: r, title: P },
                    v.a.createElement(N.a, {
                      accessibilityLabel: D,
                      fetchStatus: t,
                      onRequestRetry: this._handleFetch,
                      render: this._renderList,
                    }),
                  )
                },
              },
            ]),
            r
          )
        })(v.a.Component),
        M = L(x)
      t.default = M
    },
    hqDb: function (e, t, r) {
      'use strict'
      var n = r('97Jx'),
        o = r.n(n),
        a = r('m3Bd'),
        i = r.n(a),
        c = r('VrFO'),
        s = r.n(c),
        l = r('Y9Ll'),
        u = r.n(l),
        d = r('1Pcy'),
        p = r.n(d),
        h = r('5Yy7'),
        f = r.n(h),
        m = r('2VqO'),
        v = r.n(m),
        I = r('KEM+'),
        b = r.n(I),
        _ = (r('2G9S'), r('ERkP')),
        y = r.n(_),
        C = r('k49u'),
        k = (r('LW0h'), r('7x/C'), r('KOtZ'), r('vrRf'), r('6xIQ')),
        g = r('kGix'),
        E = r('G6rE'),
        S = r('rxPX'),
        A = r('0KEI'),
        w = function (e, t) {
          return t.userIds
        },
        R = function (e, t) {
          return t.userIds.filter(function (t) {
            return !!E.e.select(e, t)
          })
        },
        L = function (e, t) {
          return t.userIds.reduce(function (t, r) {
            var n = E.e.selectFetchStatus(e, r)
            return (t[r] = n === g.a.NONE ? g.a.LOADING : n), t
          }, {})
        },
        N = Object(S.a)()
          .propsFromState(function () {
            return {
              availableUserIds: Object(k.a)(R, function (e) {
                return e
              }),
              fetchStatus: Object(k.a)(R, L, w, function (e, t, r) {
                for (var n = g.a.LOADED, o = 0; o < r.length; o++) {
                  var a = r[o]
                  if (-1 === e.indexOf(a)) {
                    var i = t[a] || g.a.LOADING
                    n = n === g.a.LOADED ? i : n
                  }
                  if (n === g.a.LOADED) break
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
              fetchUsersIfNeeded: E.e.fetchManyIfNeeded,
            }
          }),
        U = r('v//M'),
        F = r('3XMw'),
        O = r.n(F),
        T = r('pQ3Z'),
        B = r.n(T),
        D = (r('z84I'), r('cFuS')),
        P = r('Re5t'),
        x = r('MWbm'),
        M = r('88ay'),
        j = function (e) {
          var t = e.displayMode,
            r = e.renderUserCell,
            n = e.userIds
          e.withFinalItemBorder, e.withItemBorder
          return y.a.createElement(
            x.a,
            null,
            n.map(function (e, n) {
              return r
                ? r(e)
                : y.a.createElement(M.b, {
                    decoration: M.e,
                    displayMode: t,
                    key: e,
                    promotedItemType: D.c.USER,
                    userId: e,
                    withFollowsYou: !0,
                  })
            }),
          )
        }
      j.defaultProps = { displayMode: P.a.UserDetailed, withFinalItemBorder: !0, withItemBorder: !1 }
      var H = j,
        q = ['availableUserIds', 'createLocalApiErrorHandler', 'fetchStatus', 'fetchUsersIfNeeded', 'userIds'],
        K = O.a.f5b426c2,
        W = { viewType: 'user_list' },
        G = N(
          (function (e) {
            f()(r, e)
            var t = v()(r)
            function r() {
              var e
              s()(this, r)
              for (var n = arguments.length, a = new Array(n), c = 0; c < n; c++) a[c] = arguments[c]
              return (
                (e = t.call.apply(t, [this].concat(a))),
                b()(p()(e), 'state', { allUsersUnavailable: !1 }),
                b()(p()(e), '_renderContent', function () {
                  var t = e.props,
                    r = t.availableUserIds,
                    n = (t.createLocalApiErrorHandler, t.fetchStatus, t.fetchUsersIfNeeded, t.userIds, i()(t, q))
                  return y.a.createElement(H, o()({}, n, { userIds: r }))
                }),
                b()(p()(e), '_handleFetch', function () {
                  e._fetchUsersIfNeeded()
                }),
                e
              )
            }
            return (
              u()(r, [
                {
                  key: 'componentDidMount',
                  value: function () {
                    this._fetchUsersIfNeeded()
                  },
                },
                {
                  key: 'componentDidUpdate',
                  value: function (e) {
                    B()(e.userIds, this.props.userIds) || this._fetchUsersIfNeeded()
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    return y.a.createElement(U.a, {
                      accessibilityLabel: K,
                      behavioralEventContext: W,
                      fetchStatus: this.state.allUsersUnavailable ? g.a.LOADED : this.props.fetchStatus,
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
                        b()(e, C.a.AddressBookLookupNotFound, {
                          customAction: function () {
                            0 === n.length && t.setState({ allUsersUnavailable: !0 })
                          },
                        }),
                        b()(e, C.a.OtherUserSuspended, {
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
          })(y.a.Component),
        )
      t.a = G
    },
    hxu0: function (e, t, r) {
      'use strict'
      var n = r('97Jx'),
        o = r.n(n),
        a = r('ERkP'),
        i = r.n(a),
        c = r('vqbU')
      t.a = function (e) {
        return function (t) {
          return i.a.createElement(c.a.Consumer, null, function (r) {
            return i.a.createElement(e, o()({}, t, { isInSidebar: r }))
          })
        }
      }
    },
  },
])
//# sourceMappingURL=WIPED
