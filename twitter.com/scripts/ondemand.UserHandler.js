;(window.webpackJsonp = window.webpackJsonp || []).push([
  [242],
  {
    '88ay': function (e, t, o) {
      'use strict'
      o.d(t, 'c', function () {
        return $
      }),
        o.d(t, 'e', function () {
          return ee
        }),
        o.d(t, 'f', function () {
          return te
        }),
        o.d(t, 'd', function () {
          return oe
        }),
        o.d(t, 'a', function () {
          return ie
        })
      var n = o('m3Bd'),
        r = o.n(n),
        i = o('yiKp'),
        a = o.n(i),
        c = o('VrFO'),
        l = o.n(c),
        s = o('Y9Ll'),
        d = o.n(s),
        u = o('1Pcy'),
        p = o.n(u),
        m = o('5Yy7'),
        h = o.n(m),
        v = o('2VqO'),
        f = o.n(v),
        b = o('KEM+'),
        C = o.n(b),
        _ = o('97Jx'),
        y = o.n(_),
        g = (o('1t7P'), o('jQ/y'), o('ho0z'), o('2G9S'), o('hBpG'), o('7x/C'), o('ERkP')),
        k = o.n(g),
        I = o('6rlp'),
        S = o('zh9S'),
        w = o('G6rE'),
        A = o('rxPX'),
        E = o('0KEI'),
        R = function (e, t) {
          return w.e.select(e, t.userId)
        },
        T = function (e, t) {
          return t.promotedContent
        },
        B = Object(A.a)()
          .propsFromState(function () {
            return { promotedContent: T, user: R }
          })
          .adjustStateProps(function (e) {
            var t = e.promotedContent,
              o = e.user
            return { promotedContent: t || (o ? o.promoted_content : void 0), user: o }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(E.createLocalApiErrorHandlerWithContextFactory)('USER_CELL_CONTAINER'),
              log: I.a,
              scribeAction: S.c,
            }
          }),
        P = o('I57f'),
        x = o('vMjK'),
        F = o('MWbm'),
        L = o('IG7M'),
        D = o('rHpw'),
        M = function (e) {
          var t = e.children,
            o = e.promotedContent,
            n = e.user
          return k.a.createElement(
            F.a,
            { style: N.decorationWrapper },
            t,
            k.a.createElement(L.a, {
              renderActionMenu: function (e) {
                return k.a.createElement(x.b, { onClose: e, promotedContent: o, user: n, view: 'follower' })
              },
              style: N.actionMenu,
            }),
          )
        },
        N = D.a.create(function (e) {
          return { decorationWrapper: { flexDirection: 'row' }, actionMenu: { marginLeft: e.spaces.space12 } }
        }),
        U = o('uIZp'),
        j = o('mN6z'),
        O = o('caTy'),
        q = o('3IPs'),
        H = o('Rp9C'),
        K = o('X04g'),
        G = o('Re5t'),
        z = o('TnY3'),
        J = o('hxu0'),
        W = o('v6aA'),
        Y = o('7JQg'),
        V = o('IMA+'),
        Q = o('cFuS'),
        X = [
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
        displayMode: G.a.UserCompact,
        followRequestReceived: !1,
        hideBlocked: !1,
        promotedItemType: Q.c.USER,
        shouldScribeProfileClick: !0,
        shouldScribeImpression: !1,
        withFollowsYou: !1,
      }
      var $ = function (e) {
          var t = e.isDeviceFollowing,
            o = e.userId
          return k.a.createElement(P.a, { isFollowing: t, style: re.followButton, userId: o })
        },
        ee = function (e) {
          var t = e.loggedInUserId,
            o = e.promotedContent,
            n = e.userId
          return t !== n
            ? k.a.createElement(U.a, { promotedContent: o, size: 'small', style: re.followButton, userId: n })
            : null
        },
        te = function (e) {
          return k.a.createElement(M, { promotedContent: e.promotedContent, user: e.user }, ee(e))
        },
        oe = function (e) {
          return k.a.createElement(L.a, {
            renderActionMenu: function (t) {
              return k.a.createElement(x.b, {
                onClose: t,
                promotedContent: e.promotedContent,
                user: e.user,
                view: 'rito_flagged_accounts',
              })
            },
          })
        },
        ne = (function (e) {
          h()(o, e)
          var t = f()(o)
          function o() {
            var e
            l()(this, o)
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              C()(p()(e), '_handleAvatarClick', function () {
                var t = e.props.shouldScribeProfileClick
                e._handleSaveAsRecentSearch(),
                  t && e._scribeAction({ element: 'avatar', action: 'profile_click' }),
                  e._handleAsyncPromotedEvent(Q.b.PROFILE_IMAGE_CLICK)
              }),
              C()(p()(e), '_handleCellClick', function () {
                var t = e.props,
                  o = t.history,
                  n = t.onClick,
                  r = t.screenName,
                  i = t.user,
                  a = e._getPromotedTweetState()
                e._handleSaveAsRecentSearch(),
                  e._handleScreenNameClick(),
                  n ? n({ user: i, state: a }) : o.push({ pathname: '/'.concat(r), state: a || void 0 })
              }),
              C()(p()(e), '_handleScreenNameClick', function () {
                var t = e.props.shouldScribeProfileClick
                e._handleSaveAsRecentSearch(),
                  t && e._scribeAction({ action: 'profile_click' }),
                  e._handleAsyncPromotedEvent(Q.b.SCREEN_NAME_CLICK)
              }),
              C()(p()(e), '_handleSaveAsRecentSearch', function () {
                var t = e.props,
                  o = t.saveAsRecentSearch,
                  n = t.shouldStoreTypeaheadItem,
                  r = t.userId
                o && n && n(K.a.ItemType.USER) && o({ user: { id: r, type: q.a.User } })
              }),
              C()(p()(e), '_scribeAction', function (t) {
                var o,
                  n = e.props,
                  r = n.promotedContent,
                  i = n.scribeAction,
                  c = n.scribeData,
                  l = n.scribeNamespace,
                  s = n.user,
                  d = n.userId,
                  u =
                    null == c || null === (o = c.items) || void 0 === o
                      ? void 0
                      : o.find(function (e) {
                          return e.item_type === K.a.ItemType.USER && e.id === d
                        }),
                  p = c.search_details,
                  m = { items: [a()(a()({}, u), H.a.getUserItem(s, r))], profile_id: d, search_details: p }
                i(a()(a()({}, l), t), m)
              }),
              e
            )
          }
          return (
            d()(o, [
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
                  var e = this.props,
                    t = e.avatarDecoration,
                    o = (e.bottomControl, e.cellClickable),
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
                    i =
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
                    a = e.user,
                    c = r()(e, X)
                  return this._shouldRender()
                    ? k.a.createElement(
                        V.a,
                        y()({}, c, {
                          avatarDecoration: t,
                          bottomControl: this._renderBottomControl(),
                          decoration: this._renderDecoration(),
                          highlightedLabel: this._getHighlightedLabel(),
                          isBlocking: a.blocking,
                          onAvatarClick: this._handleAvatarClick,
                          onCellClick: o ? this._handleCellClick : void 0,
                          onScreenNameClick: this._handleScreenNameClick,
                          socialContext: i
                            ? {
                                contextType: i.contextType,
                                text: i.text,
                                link: i.landingUrl ? Object(O.b)(i.landingUrl) : void 0,
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
                    o = this.props,
                    n = o.displayMode,
                    r = o.followRequestReceived,
                    i = o.isAutoblocking,
                    a = o.isBlocking,
                    c = o.isDeviceFollowing,
                    l = o.isFollowing,
                    s = o.promotedContent,
                    d = o.screenName,
                    u = o.user,
                    p = o.userId
                  return 'function' == typeof e
                    ? e({
                        displayMode: n,
                        followRequestReceived: r,
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
                    o = e.isBlockedBy,
                    n = e.isBlocking,
                    r = e.screenName
                  return e.userId && r && !(t && (o || n))
                },
              },
              {
                key: '_getHighlightedLabel',
                value: function () {
                  var e = this.props.user.highlightedLabel,
                    t = 'AutomatedLabel' === (null == e ? void 0 : e.userLabelType),
                    o = !!t && this.context.featureSwitches.isTrue('account_taxonomy_automated_label_enabled')
                  return !t || o ? e : void 0
                },
              },
              {
                key: '_getPromotedTweetState',
                value: function () {
                  var e = this.props,
                    t = e.promotedContent,
                    o = e.promotedItemType
                  return t && o === Q.c.TWEET ? { promotedTweetState: t } : null
                },
              },
              {
                key: '_handleAsyncPromotedEvent',
                value: function (e) {
                  var t = this.props,
                    o = t.createLocalApiErrorHandler,
                    n = t.log,
                    r = t.promotedContent,
                    i = t.promotedItemId,
                    a = t.promotedItemType,
                    c = t.userId
                  r &&
                    n({
                      disclosureType: r.disclosure_type,
                      itemId: i || c,
                      itemType: a,
                      params: { event: e, impression_id: r.impression_id },
                    }).catch(o())
                },
              },
              {
                key: '_handleImpression',
                value: function () {
                  var e = this.props,
                    t = e.createLocalApiErrorHandler,
                    o = e.log,
                    n = e.promotedContent,
                    r = e.promotedItemType,
                    i = e.shouldScribeImpression,
                    a = e.userId
                  if (n && r === Q.c.USER) {
                    var c = n.disclosure_type,
                      l = n.impression_id
                    o({
                      disclosureType: c,
                      itemId: a,
                      itemType: Q.c.USER,
                      params: { event: Q.b.IMPRESSION, impression_id: l },
                    }).catch(t())
                  } else i && this._scribeAction({ action: 'impression' })
                },
              },
            ]),
            o
          )
        })(k.a.Component)
      C()(ne, 'contextType', W.a), C()(ne, 'defaultProps', Z.defaultProps)
      var re = D.a.create(function (e) {
          return { followButton: { marginLeft: e.spaces.space12 } }
        }),
        ie = Object(z.a)(Object(J.a)(B(Z)))
      t.b = Object(Y.c)({ element: 'user' })(ie)
    },
    hxu0: function (e, t, o) {
      'use strict'
      var n = o('97Jx'),
        r = o.n(n),
        i = o('ERkP'),
        a = o.n(i),
        c = o('vqbU')
      t.a = function (e) {
        return function (t) {
          return a.a.createElement(c.a.Consumer, null, function (o) {
            return a.a.createElement(e, r()({}, t, { isInSidebar: o }))
          })
        }
      }
    },
    lX7a: function (e, t, o) {
      'use strict'
      o.r(t)
      o('jQ3i'), o('x4t0')
      var n = o('ezF+'),
        r = o('wtjx'),
        i = o('RgK2'),
        a = o.n(i),
        c = o('cFuS'),
        l = o('Rp9C'),
        s = o('Re5t'),
        d = o('VPAj'),
        u = o('fs1G'),
        p = o('88ay'),
        m = function (e) {
          return e ? { disclosure_type: e.disclosureType, impression_id: e.impressionId } : void 0
        },
        h = [p.e, p.f]
      t.default = function (e) {
        var t = e.cellClickable,
          o = void 0 === t || t,
          i = e.decoration,
          v = e.displayMode,
          f = void 0 === v ? s.a.UserCompact : v,
          b = e.onClick,
          C = e.shouldScribeProfileClick,
          _ = void 0 === C || C,
          y = e.shouldScribeImpression,
          g = void 0 !== y && y,
          k = e.shouldStoreTypeaheadItem,
          I = e.withLink,
          S = void 0 === I || I,
          w = i || p.e
        return n.g({
          component: p.a,
          selectData: Object(d.a)(a.a),
          bindActions: function () {
            return { saveAsRecentSearch: r.a }
          },
          defaultScribeNamespace: { element: 'user' },
          createProps: function (e) {
            var t = e.actions.saveAsRecentSearch,
              n = e.entry,
              r = e.scribeData,
              i = e.scribeNamespace,
              a = n.content,
              l = a.id,
              s = a.promotedMetadata,
              d = a.socialContext,
              u = m(s),
              p = (d && d.generalContext) || void 0
            return {
              decoration: w,
              displayMode: f,
              shouldStoreTypeaheadItem: k,
              promotedContent: u,
              promotedItemType: c.c.USER,
              scribeData: r,
              scribeNamespace: i,
              userId: l,
              withFollowsYou: h.includes(w),
              socialContext: p,
              withLink: S,
              cellClickable: o,
              shouldScribeProfileClick: _,
              shouldScribeImpression: g,
              onClick: b,
              saveAsRecentSearch: t,
            }
          },
          onImpression: u.a,
          getScribeDataItem: function (e) {
            var t = e.content,
              o = t.id,
              n = t.promotedMetadata,
              r = e.cursor,
              i = e.itemMetadata,
              a = e.position,
              c = i.clientEventInfo,
              s = m(n)
            return l.a.getUserItem({ id_str: o, promoted_content: s }, void 0, a, r, c)
          },
          isFocusable: Object(d.a)(!0),
        })
      }
    },
  },
])
//# sourceMappingURL=WIPED
