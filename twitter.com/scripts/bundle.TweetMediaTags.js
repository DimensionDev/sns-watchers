;(window.webpackJsonp = window.webpackJsonp || []).push([
  [106],
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
        b = r('KEM+'),
        I = r.n(b),
        _ = r('97Jx'),
        y = r.n(_),
        g = (r('1t7P'), r('jQ/y'), r('ho0z'), r('2G9S'), r('hBpG'), r('7x/C'), r('ERkP')),
        C = r.n(g),
        k = r('6rlp'),
        E = r('zh9S'),
        S = r('G6rE'),
        A = r('rxPX'),
        w = r('0KEI'),
        R = function (e, t) {
          return S.e.select(e, t.userId)
        },
        U = function (e, t) {
          return t.promotedContent
        },
        L = Object(A.a)()
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
              createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)('USER_CELL_CONTAINER'),
              log: k.a,
              scribeAction: E.c,
            }
          }),
        N = r('I57f'),
        T = r('vMjK'),
        F = r('MWbm'),
        x = r('IG7M'),
        B = r('rHpw'),
        O = function (e) {
          var t = e.children,
            r = e.promotedContent,
            n = e.user
          return C.a.createElement(
            F.a,
            { style: D.decorationWrapper },
            t,
            C.a.createElement(x.a, {
              renderActionMenu: function (e) {
                return C.a.createElement(T.b, { onClose: e, promotedContent: r, user: n, view: 'follower' })
              },
              style: D.actionMenu,
            }),
          )
        },
        D = B.a.create(function (e) {
          return { decorationWrapper: { flexDirection: 'row' }, actionMenu: { marginLeft: e.spaces.space12 } }
        }),
        P = r('uIZp'),
        M = r('mN6z'),
        j = r('caTy'),
        H = r('3IPs'),
        q = r('Rp9C'),
        G = r('X04g'),
        K = r('Re5t'),
        W = r('TnY3'),
        V = r('hxu0'),
        z = r('v6aA'),
        X = r('7JQg'),
        J = r('nBUg'),
        Y = r('IMA+'),
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
            ? C.a.createElement(
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
        displayMode: K.a.UserCompact,
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
          return C.a.createElement(N.a, { isFollowing: t, style: ae.followButton, userId: r })
        },
        te = function (e) {
          var t = e.loggedInUserId,
            r = e.promotedContent,
            n = e.userId
          return t !== n
            ? C.a.createElement(P.a, { promotedContent: r, size: 'small', style: ae.followButton, userId: n })
            : null
        },
        re = function (e) {
          return C.a.createElement(O, { promotedContent: e.promotedContent, user: e.user }, te(e))
        },
        ne = function (e) {
          return C.a.createElement(x.a, {
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
          f()(r, e)
          var t = v()(r)
          function r() {
            var e
            s()(this, r)
            for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++) o[a] = arguments[a]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              I()(p()(e), '_handleAvatarClick', function () {
                var t = e.props.shouldScribeProfileClick
                e._handleSaveAsRecentSearch(),
                  t && e._scribeAction({ element: 'avatar', action: 'profile_click' }),
                  e._handleAsyncPromotedEvent(Q.b.PROFILE_IMAGE_CLICK)
              }),
              I()(p()(e), '_handleCellClick', function () {
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
              I()(p()(e), '_handleScreenNameClick', function () {
                var t = e.props.shouldScribeProfileClick
                e._handleSaveAsRecentSearch(),
                  t && e._scribeAction({ action: 'profile_click' }),
                  e._handleAsyncPromotedEvent(Q.b.SCREEN_NAME_CLICK)
              }),
              I()(p()(e), '_handleSaveAsRecentSearch', function () {
                var t = e.props,
                  r = t.saveAsRecentSearch,
                  n = t.shouldStoreTypeaheadItem,
                  o = t.userId
                r && n && n(G.a.ItemType.USER) && r({ user: { id: o, type: H.a.User } })
              }),
              I()(p()(e), '_scribeAction', function (t) {
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
                          return e.item_type === G.a.ItemType.USER && e.id === u
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
                    ? C.a.createElement(
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
                        C.a.createElement(
                          Y.a,
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
        })(C.a.Component)
      I()(oe, 'contextType', z.a), I()(oe, 'defaultProps', $.defaultProps)
      var ae = B.a.create(function (e) {
          return { followButton: { marginLeft: e.spaces.space12 } }
        }),
        ie = Object(W.a)(Object(V.a)(L($)))
      t.b = Object(X.a)({ element: 'user' })(ie)
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
        b = r('KEM+'),
        I = r.n(b),
        _ = (r('2G9S'), r('ERkP')),
        y = r.n(_),
        g = r('k49u'),
        C = (r('LW0h'), r('7x/C'), r('KOtZ'), r('vrRf'), r('6xIQ')),
        k = r('kGix'),
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
        U = function (e, t) {
          return t.userIds.reduce(function (t, r) {
            var n = E.e.selectFetchStatus(e, r)
            return (t[r] = n === k.a.NONE ? k.a.LOADING : n), t
          }, {})
        },
        L = Object(S.a)()
          .propsFromState(function () {
            return {
              availableUserIds: Object(C.a)(R, function (e) {
                return e
              }),
              fetchStatus: Object(C.a)(R, U, w, function (e, t, r) {
                for (var n = k.a.LOADED, o = 0; o < r.length; o++) {
                  var a = r[o]
                  if (-1 === e.indexOf(a)) {
                    var i = t[a] || k.a.LOADING
                    n = n === k.a.LOADED ? i : n
                  }
                  if (n === k.a.LOADED) break
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
        N = r('v//M'),
        T = r('3XMw'),
        F = r.n(T),
        x = r('pQ3Z'),
        B = r.n(x),
        O = (r('z84I'), r('cFuS')),
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
                    promotedItemType: O.c.USER,
                    userId: e,
                    withFollowsYou: !0,
                  })
            }),
          )
        }
      j.defaultProps = { displayMode: D.a.UserDetailed, withFinalItemBorder: !0, withItemBorder: !1 }
      var H = j,
        q = ['availableUserIds', 'createLocalApiErrorHandler', 'fetchStatus', 'fetchUsersIfNeeded', 'userIds'],
        G = F.a.f5b426c2,
        K = { viewType: 'user_list' },
        W = L(
          (function (e) {
            f()(r, e)
            var t = v()(r)
            function r() {
              var e
              s()(this, r)
              for (var n = arguments.length, a = new Array(n), c = 0; c < n; c++) a[c] = arguments[c]
              return (
                (e = t.call.apply(t, [this].concat(a))),
                I()(p()(e), 'state', { allUsersUnavailable: !1 }),
                I()(p()(e), '_renderContent', function () {
                  var t = e.props,
                    r = t.availableUserIds,
                    n = (t.createLocalApiErrorHandler, t.fetchStatus, t.fetchUsersIfNeeded, t.userIds, i()(t, q))
                  return y.a.createElement(H, o()({}, n, { userIds: r }))
                }),
                I()(p()(e), '_handleFetch', function () {
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
                    return y.a.createElement(N.a, {
                      accessibilityLabel: G,
                      behavioralEventContext: K,
                      fetchStatus: this.state.allUsersUnavailable ? k.a.LOADED : this.props.fetchStatus,
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
                        I()(e, g.a.AddressBookLookupNotFound, {
                          customAction: function () {
                            0 === n.length && t.setState({ allUsersUnavailable: !0 })
                          },
                        }),
                        I()(e, g.a.OtherUserSuspended, {
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
      t.a = W
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
    nDeN: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'MediaTagsScreen', function () {
          return U
        })
      var n = r('ddV6'),
        o = r.n(n),
        a = (r('z84I'), r('ERkP')),
        i = r.n(a),
        c = (r('KqXw'), r('WNMA'), r('o52z')),
        s = r('XOJV'),
        l = r('rxPX'),
        u = r('0KEI'),
        d = function (e, t) {
          var r = h(e, t) || {}
          return (r.extended_entities && r.extended_entities.media) || Object(c.a)()
        },
        p = function (e, t) {
          return t.match.params.statusId
        },
        h = function (e, t) {
          return s.a.selectHydrated(e, p(0, t))
        },
        f = function (e, t) {
          return s.a.selectFetchStatus(e, p(0, t))
        },
        m = Object(l.a)()
          .propsFromState(function () {
            return { fetchStatus: f, mediaItems: d, statusId: p, tweet: h }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(u.createLocalApiErrorHandlerWithContextFactory)('MEDIA_TAGS_SCREEN'),
              fetchTweetIfNeeded: s.a.fetchOneIfNeeded,
            }
          })
          .withAnalytics({ page: 'tweet', section: 'media_tags' }),
        v = r('v//M'),
        b = r('W5XZ'),
        I = r('jHSc'),
        _ = r('3XMw'),
        y = r.n(_),
        g = r('VTxf'),
        C = r('hqDb'),
        k = r('VAyw'),
        E = r('t62R'),
        S = y.a.b98764b1,
        A = y.a.cb2054fa,
        w = y.a.e4ad6bda,
        R = function () {
          return i.a.createElement(g.a, null)
        }
      function U(e) {
        var t = e.createLocalApiErrorHandler,
          r = e.fetchStatus,
          n = e.fetchTweetIfNeeded,
          a = e.history,
          c = e.mediaItems,
          s = e.statusId,
          l = e.tweet,
          u = i.a.useState(!1),
          d = o()(u, 2),
          p = d[0],
          h = d[1],
          f = i.a.useCallback(
            function () {
              n(s).catch(function (e) {
                t(b.a)(e), e && e.status && h(!0)
              })
            },
            [s, n, t, h],
          )
        i.a.useEffect(
          function () {
            f()
          },
          [f],
        )
        var m = i.a.useCallback(
            function () {
              var e = k.a.mergeTaggedUsers(c).map(function (e) {
                return e.user_id
              })
              return e.length
                ? i.a.createElement(C.a, { userIds: e, withItemBorder: !0 })
                : i.a.createElement(E.b, { align: 'center', color: 'gray700', size: 'headline1' }, S)
            },
            [c],
          ),
          _ = l ? l.permalink : '/'
        return i.a.createElement(
          I.b,
          { backLocation: _, history: a, title: w },
          i.a.createElement(v.a, {
            accessibilityLabel: A,
            fetchStatus: r,
            onRequestRetry: f,
            render: m,
            renderFailure: R,
            retryable: !p,
          }),
        )
      }
      t.default = m(U)
    },
    o52z: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return o
      })
      var n = r('VPAj'),
        o = Object(n.a)([])
      Object(n.a)({})
    },
  },
])
//# sourceMappingURL=WIPED
