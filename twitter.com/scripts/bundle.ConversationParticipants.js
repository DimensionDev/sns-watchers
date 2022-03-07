;(window.webpackJsonp = window.webpackJsonp || []).push([
  [48],
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
          return ie
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
        _ = r.n(I),
        b = r('97Jx'),
        y = r.n(b),
        C = (r('1t7P'), r('jQ/y'), r('ho0z'), r('2G9S'), r('hBpG'), r('7x/C'), r('ERkP')),
        k = r.n(C),
        E = r('6rlp'),
        S = r('zh9S'),
        g = r('G6rE'),
        w = r('rxPX'),
        A = r('0KEI'),
        R = function (e, t) {
          return g.e.select(e, t.userId)
        },
        U = function (e, t) {
          return t.promotedContent
        },
        L = Object(w.a)()
          .propsFromState(function () {
            return { promotedContent: U, user: R }
          })
          .adjustStateProps(function (e) {
            var t = e.promotedContent,
              r = e.user
            return { promotedContent: t || (r ? r.promoted_content : void 0), user: r }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(A.createLocalApiErrorHandlerWithContextFactory)('USER_CELL_CONTAINER'),
              log: E.a,
              scribeAction: S.c,
            }
          }),
        N = r('I57f'),
        F = r('vMjK'),
        O = r('MWbm'),
        T = r('IG7M'),
        x = r('rHpw'),
        B = function (e) {
          var t = e.children,
            r = e.promotedContent,
            n = e.user
          return k.a.createElement(
            O.a,
            { style: D.decorationWrapper },
            t,
            k.a.createElement(T.a, {
              renderActionMenu: function (e) {
                return k.a.createElement(F.b, { onClose: e, promotedContent: r, user: n, view: 'follower' })
              },
              style: D.actionMenu,
            }),
          )
        },
        D = x.a.create(function (e) {
          return { decorationWrapper: { flexDirection: 'row' }, actionMenu: { marginLeft: e.spaces.space12 } }
        }),
        P = r('uIZp'),
        M = r('mN6z'),
        j = r('caTy'),
        H = r('3IPs'),
        q = r('Rp9C'),
        K = r('X04g'),
        W = r('Re5t'),
        G = r('TnY3'),
        Y = r('hxu0'),
        V = r('v6aA'),
        X = r('7JQg'),
        J = r('nBUg'),
        z = r('IMA+'),
        Q = r('cFuS'),
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
            ? k.a.createElement(
                oe,
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
      $.defaultProps = {
        cellClickable: !0,
        decoration: null,
        displayMode: W.a.UserCompact,
        followRequestReceived: !1,
        hideBlocked: !1,
        promotedItemType: Q.c.USER,
        shouldScribeProfileClick: !0,
        shouldScribeImpression: !1,
        withFollowsYou: !1,
      }
      var ee = function (e) {
          var t = e.isDeviceFollowing,
            r = e.userId
          return k.a.createElement(N.a, { isFollowing: t, style: ae.followButton, userId: r })
        },
        te = function (e) {
          var t = e.loggedInUserId,
            r = e.promotedContent,
            n = e.userId
          return t !== n
            ? k.a.createElement(P.a, { promotedContent: r, size: 'small', style: ae.followButton, userId: n })
            : null
        },
        re = function (e) {
          return k.a.createElement(B, { promotedContent: e.promotedContent, user: e.user }, te(e))
        },
        ne = function (e) {
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
        oe = (function (e) {
          f()(r, e)
          var t = v()(r)
          function r() {
            var e
            s()(this, r)
            for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++) o[a] = arguments[a]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              _()(p()(e), '_handleAvatarClick', function () {
                var t = e.props.shouldScribeProfileClick
                e._handleSaveAsRecentSearch(),
                  t && e._scribeAction({ element: 'avatar', action: 'profile_click' }),
                  e._handleAsyncPromotedEvent(Q.b.PROFILE_IMAGE_CLICK)
              }),
              _()(p()(e), '_handleCellClick', function () {
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
              _()(p()(e), '_handleScreenNameClick', function () {
                var t = e.props.shouldScribeProfileClick
                e._handleSaveAsRecentSearch(),
                  t && e._scribeAction({ action: 'profile_click' }),
                  e._handleAsyncPromotedEvent(Q.b.SCREEN_NAME_CLICK)
              }),
              _()(p()(e), '_handleSaveAsRecentSearch', function () {
                var t = e.props,
                  r = t.saveAsRecentSearch,
                  n = t.shouldStoreTypeaheadItem,
                  o = t.userId
                r && n && n(K.a.ItemType.USER) && r({ user: { id: o, type: H.a.User } })
              }),
              _()(p()(e), '_scribeAction', function (t) {
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
                  var e = this,
                    t = this.props,
                    r = t.avatarDecoration,
                    n = (t.bottomControl, t.cellClickable),
                    a =
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
                    i =
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
                    s = o()(t, Z)
                  return this._shouldRender()
                    ? k.a.createElement(
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
                        k.a.createElement(
                          z.a,
                          y()({}, s, {
                            avatarDecoration: r,
                            bottomControl: this._renderBottomControl(),
                            decoration: this._renderDecoration(),
                            highlightedLabel: this._getHighlightedLabel(),
                            isBlocking: c.blocking,
                            onAvatarClick: this._handleAvatarClick,
                            onCellClick: n ? this._handleCellClick : void 0,
                            onScreenNameClick: this._handleScreenNameClick,
                            socialContext: i
                              ? {
                                  contextType: i.contextType,
                                  text: i.text,
                                  link: i.landingUrl ? Object(j.b)(i.landingUrl) : void 0,
                                }
                              : void 0,
                            withDarkerInteractiveBackground: a,
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
                  return t && r === Q.c.TWEET ? { promotedTweetState: t } : null
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
                  if (n && o === Q.c.USER) {
                    var c = n.disclosure_type,
                      s = n.impression_id
                    r({
                      disclosureType: c,
                      itemId: i,
                      itemType: Q.c.USER,
                      params: { event: Q.b.IMPRESSION, impression_id: s },
                    }).catch(t())
                  } else a && this._scribeAction({ action: 'impression' })
                },
              },
            ]),
            r
          )
        })(k.a.Component)
      _()(oe, 'contextType', V.a), _()(oe, 'defaultProps', $.defaultProps)
      var ae = x.a.create(function (e) {
          return { followButton: { marginLeft: e.spaces.space12 } }
        }),
        ie = Object(G.a)(Object(Y.a)(L($)))
      t.b = Object(X.a)({ element: 'user' })(ie)
    },
    gLwk: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'ConversationParticipantsScreen', function () {
          return H
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
        m = (r('2G9S'), r('jQ3i'), r('x4t0'), r('ERkP')),
        v = r.n(m),
        I = r('RhWx'),
        _ = r.n(I),
        b = (r('KqXw'), r('WNMA'), r('LW0h'), r('7x/C'), r('z84I'), r('hqKg')),
        y = r('XOJV'),
        C = r('lnti'),
        k = r('s1N3'),
        E = r('rxPX'),
        S = r('0KEI'),
        g = function (e, t) {
          return t.match.params.screenName
        },
        w = function (e, t) {
          return t.match.params.statusId
        },
        A = function (e, t) {
          return y.a.selectHydrated(e, t.match.params.statusId)
        },
        R = function (e, t) {
          return y.a.selectFetchStatus(e, t.match.params.statusId)
        },
        U = Object(E.a)()
          .propsFromState(function () {
            return {
              fetchStatus: R,
              screenName: g,
              statusId: w,
              participantIds: Object(b.createSelector)(A, function (e) {
                if (!e) return []
                var t = (e.entities || {}).user_mentions,
                  r = void 0 === t ? [] : t,
                  n = { id_str: e.in_reply_to_user_id_str },
                  o = r.filter(function (t) {
                    return t.indices[0] < e.display_text_range[0]
                  }),
                  a = [n].concat(_()(o))
                return Object(C.a)(
                  Object(k.a)(
                    a.map(function (e) {
                      return e.id_str
                    }),
                  ),
                )
              }),
              unmentionedUserIds: Object(b.createSelector)(A, function (e) {
                var t
                return null !== (t = null == e ? void 0 : e.unmentioned_user_ids) && void 0 !== t ? t : []
              }),
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(S.createLocalApiErrorHandlerWithContextFactory)(
                'CONVERSATION_PARTICIPANTS_SCREEN',
              ),
              fetchTweetIfNeeded: y.a.fetchOneIfNeeded,
            }
          })
          .withAnalytics({ page: 'conversation_participants' }),
        L = r('v//M'),
        N = r('W5XZ'),
        F = r('jHSc'),
        O = r('3XMw'),
        T = r.n(O),
        x = r('cFuS'),
        B = r('Re5t'),
        D = r('hqDb'),
        P = r('88ay'),
        M = T.a.cdd4aafe,
        j = T.a.aac3fad1,
        H = (function (e) {
          u()(r, e)
          var t = p()(r)
          function r() {
            var e
            o()(this, r)
            for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++) a[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              f()(s()(e), '_renderUserCell', function (t) {
                var r = e.props.unmentionedUserIds.includes(t)
                return v.a.createElement(P.b, {
                  cellClickable: !r,
                  decoration: r ? null : P.e,
                  displayMode: B.a.UserDetailed,
                  key: t,
                  promotedItemType: x.c.USER,
                  userId: t,
                  withFollowsYou: !0,
                  withLink: !r,
                })
              }),
              f()(s()(e), '_renderList', function () {
                return v.a.createElement(D.a, {
                  renderUserCell: e._renderUserCell,
                  userIds: e.props.participantIds,
                  withItemBorder: !0,
                })
              }),
              f()(s()(e), '_handleFetch', function () {
                var t = e.props,
                  r = t.createLocalApiErrorHandler
                ;(0, t.fetchTweetIfNeeded)(t.statusId).catch(r(N.a))
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
                    { backLocation: '/'.concat(n.toLowerCase(), '/status/').concat(o), history: r, title: j },
                    v.a.createElement(L.a, {
                      accessibilityLabel: M,
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
        q = U(H)
      t.default = q
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
        _ = r.n(I),
        b = (r('2G9S'), r('ERkP')),
        y = r.n(b),
        C = r('k49u'),
        k = (r('LW0h'), r('7x/C'), r('KOtZ'), r('vrRf'), r('6xIQ')),
        E = r('kGix'),
        S = r('G6rE'),
        g = r('rxPX'),
        w = r('0KEI'),
        A = function (e, t) {
          return t.userIds
        },
        R = function (e, t) {
          return t.userIds.filter(function (t) {
            return !!S.e.select(e, t)
          })
        },
        U = function (e, t) {
          return t.userIds.reduce(function (t, r) {
            var n = S.e.selectFetchStatus(e, r)
            return (t[r] = n === E.a.NONE ? E.a.LOADING : n), t
          }, {})
        },
        L = Object(g.a)()
          .propsFromState(function () {
            return {
              availableUserIds: Object(k.a)(R, function (e) {
                return e
              }),
              fetchStatus: Object(k.a)(R, U, A, function (e, t, r) {
                for (var n = E.a.LOADED, o = 0; o < r.length; o++) {
                  var a = r[o]
                  if (-1 === e.indexOf(a)) {
                    var i = t[a] || E.a.LOADING
                    n = n === E.a.LOADED ? i : n
                  }
                  if (n === E.a.LOADED) break
                }
                return n
              }),
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)(
                'USERS_LIST_CONTAINER',
              ),
              fetchUsersIfNeeded: S.e.fetchManyIfNeeded,
            }
          }),
        N = r('v//M'),
        F = r('3XMw'),
        O = r.n(F),
        T = r('pQ3Z'),
        x = r.n(T),
        B = (r('z84I'), r('cFuS')),
        D = r('Re5t'),
        P = r('MWbm'),
        M = r('88ay'),
        j = function (e) {
          var t = e.displayMode,
            r = e.renderUserCell,
            n = e.userIds
          e.withFinalItemBorder, e.withItemBorder
          return y.a.createElement(
            P.a,
            null,
            n.map(function (e, n) {
              return r
                ? r(e)
                : y.a.createElement(M.b, {
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
      j.defaultProps = { displayMode: D.a.UserDetailed, withFinalItemBorder: !0, withItemBorder: !1 }
      var H = j,
        q = ['availableUserIds', 'createLocalApiErrorHandler', 'fetchStatus', 'fetchUsersIfNeeded', 'userIds'],
        K = O.a.f5b426c2,
        W = { viewType: 'user_list' },
        G = L(
          (function (e) {
            f()(r, e)
            var t = v()(r)
            function r() {
              var e
              s()(this, r)
              for (var n = arguments.length, a = new Array(n), c = 0; c < n; c++) a[c] = arguments[c]
              return (
                (e = t.call.apply(t, [this].concat(a))),
                _()(p()(e), 'state', { allUsersUnavailable: !1 }),
                _()(p()(e), '_renderContent', function () {
                  var t = e.props,
                    r = t.availableUserIds,
                    n = (t.createLocalApiErrorHandler, t.fetchStatus, t.fetchUsersIfNeeded, t.userIds, i()(t, q))
                  return y.a.createElement(H, o()({}, n, { userIds: r }))
                }),
                _()(p()(e), '_handleFetch', function () {
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
                    x()(e.userIds, this.props.userIds) || this._fetchUsersIfNeeded()
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    return y.a.createElement(N.a, {
                      accessibilityLabel: K,
                      behavioralEventContext: W,
                      fetchStatus: this.state.allUsersUnavailable ? E.a.LOADED : this.props.fetchStatus,
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
                        _()(e, C.a.AddressBookLookupNotFound, {
                          customAction: function () {
                            0 === n.length && t.setState({ allUsersUnavailable: !0 })
                          },
                        }),
                        _()(e, C.a.OtherUserSuspended, {
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
