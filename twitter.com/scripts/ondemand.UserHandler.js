;(window.webpackJsonp = window.webpackJsonp || []).push([
  [243],
  {
    '88ay': function (e, t, o) {
      'use strict'
      o.d(t, 'c', function () {
        return ee
      }),
        o.d(t, 'e', function () {
          return te
        }),
        o.d(t, 'f', function () {
          return oe
        }),
        o.d(t, 'd', function () {
          return ne
        }),
        o.d(t, 'a', function () {
          return ae
        })
      var n = o('m3Bd'),
        r = o.n(n),
        i = o('yiKp'),
        a = o.n(i),
        l = o('VrFO'),
        c = o.n(l),
        s = o('Y9Ll'),
        d = o.n(s),
        u = o('1Pcy'),
        p = o.n(u),
        m = o('5Yy7'),
        h = o.n(m),
        f = o('2VqO'),
        v = o.n(f),
        b = o('KEM+'),
        C = o.n(b),
        _ = o('97Jx'),
        k = o.n(_),
        y = (o('1t7P'), o('jQ/y'), o('ho0z'), o('2G9S'), o('hBpG'), o('7x/C'), o('ERkP')),
        g = o.n(y),
        I = o('6rlp'),
        S = o('zh9S'),
        w = o('G6rE'),
        E = o('rxPX'),
        A = o('0KEI'),
        R = function (e, t) {
          return w.e.select(e, t.userId)
        },
        T = function (e, t) {
          return t.promotedContent
        },
        x = Object(E.a)()
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
              createLocalApiErrorHandler: Object(A.createLocalApiErrorHandlerWithContextFactory)('USER_CELL_CONTAINER'),
              log: I.a,
              scribeAction: S.c,
            }
          }),
        P = o('I57f'),
        B = o('vMjK'),
        F = o('MWbm'),
        L = o('IG7M'),
        M = o('rHpw'),
        D = function (e) {
          var t = e.children,
            o = e.promotedContent,
            n = e.user
          return g.a.createElement(
            F.a,
            { style: N.decorationWrapper },
            t,
            g.a.createElement(L.a, {
              renderActionMenu: function (e) {
                return g.a.createElement(B.b, { onClose: e, promotedContent: o, user: n, view: 'follower' })
              },
              style: N.actionMenu,
            }),
          )
        },
        N = M.a.create(function (e) {
          return { decorationWrapper: { flexDirection: 'row' }, actionMenu: { marginLeft: e.spaces.space12 } }
        }),
        U = o('uIZp'),
        j = o('mN6z'),
        O = o('caTy'),
        H = o('3IPs'),
        q = o('Rp9C'),
        Y = o('X04g'),
        K = o('Re5t'),
        z = o('TnY3'),
        G = o('hxu0'),
        J = o('v6aA'),
        W = o('7JQg'),
        V = o('nBUg'),
        X = o('IMA+'),
        Q = o('cFuS'),
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
            ? g.a.createElement(
                re,
                k()({}, e, {
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
            o = e.userId
          return g.a.createElement(P.a, { isFollowing: t, style: ie.followButton, userId: o })
        },
        te = function (e) {
          var t = e.loggedInUserId,
            o = e.promotedContent,
            n = e.userId
          return t !== n
            ? g.a.createElement(U.a, { promotedContent: o, size: 'small', style: ie.followButton, userId: n })
            : null
        },
        oe = function (e) {
          return g.a.createElement(D, { promotedContent: e.promotedContent, user: e.user }, te(e))
        },
        ne = function (e) {
          return g.a.createElement(L.a, {
            renderActionMenu: function (t) {
              return g.a.createElement(B.b, {
                onClose: t,
                promotedContent: e.promotedContent,
                user: e.user,
                view: 'rito_flagged_accounts',
              })
            },
          })
        },
        re = (function (e) {
          h()(o, e)
          var t = v()(o)
          function o() {
            var e
            c()(this, o)
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
                o && n && n(Y.a.ItemType.USER) && o({ user: { id: r, type: H.a.User } })
              }),
              C()(p()(e), '_scribeAction', function (t) {
                var o,
                  n = e.props,
                  r = n.promotedContent,
                  i = n.scribeAction,
                  l = n.scribeData,
                  c = n.scribeNamespace,
                  s = n.user,
                  d = n.userId,
                  u =
                    null == l || null === (o = l.items) || void 0 === o
                      ? void 0
                      : o.find(function (e) {
                          return e.item_type === Y.a.ItemType.USER && e.id === d
                        }),
                  p = l.search_details,
                  m = { items: [a()(a()({}, u), q.a.getUserItem(s, r))], profile_id: d, search_details: p }
                i(a()(a()({}, c), t), m)
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
                  var e = this,
                    t = this.props,
                    o = t.avatarDecoration,
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
                    l = t.user,
                    c = r()(t, Z)
                  return this._shouldRender()
                    ? g.a.createElement(
                        V.b.Provider,
                        {
                          value: {
                            socialContextRefreshEnabled: function () {
                              return e.context.featureSwitches.isTrue(
                                'social_context_and_topic_context_refresh_alignment_enabled',
                              )
                            },
                          },
                        },
                        g.a.createElement(
                          X.a,
                          k()({}, c, {
                            avatarDecoration: o,
                            bottomControl: this._renderBottomControl(),
                            decoration: this._renderDecoration(),
                            highlightedLabel: this._getHighlightedLabel(),
                            isBlocking: l.blocking,
                            onAvatarClick: this._handleAvatarClick,
                            onCellClick: n ? this._handleCellClick : void 0,
                            onScreenNameClick: this._handleScreenNameClick,
                            socialContext: a
                              ? {
                                  contextType: a.contextType,
                                  text: a.text,
                                  link: a.landingUrl ? Object(O.b)(a.landingUrl) : void 0,
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
                    o = this.props,
                    n = o.displayMode,
                    r = o.followRequestReceived,
                    i = o.isAutoblocking,
                    a = o.isBlocking,
                    l = o.isDeviceFollowing,
                    c = o.isFollowing,
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
                        isDeviceFollowing: !!l,
                        isFollowing: !!c,
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
                    l = t.userId
                  r &&
                    n({
                      disclosureType: r.disclosure_type,
                      itemId: i || l,
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
                    var l = n.disclosure_type,
                      c = n.impression_id
                    o({
                      disclosureType: l,
                      itemId: a,
                      itemType: Q.c.USER,
                      params: { event: Q.b.IMPRESSION, impression_id: c },
                    }).catch(t())
                  } else i && this._scribeAction({ action: 'impression' })
                },
              },
            ]),
            o
          )
        })(g.a.Component)
      C()(re, 'contextType', J.a), C()(re, 'defaultProps', $.defaultProps)
      var ie = M.a.create(function (e) {
          return { followButton: { marginLeft: e.spaces.space12 } }
        }),
        ae = Object(z.a)(Object(G.a)(x($)))
      t.b = Object(W.a)({ element: 'user' })(ae)
    },
    hxu0: function (e, t, o) {
      'use strict'
      var n = o('97Jx'),
        r = o.n(n),
        i = o('ERkP'),
        a = o.n(i),
        l = o('vqbU')
      t.a = function (e) {
        return function (t) {
          return a.a.createElement(l.a.Consumer, null, function (o) {
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
        r = o('VPAj'),
        i = function (e) {
          return e ? { disclosure_type: e.disclosureType, impression_id: e.impressionId } : void 0
        },
        a = o('Rp9C'),
        l = o('ERkP'),
        c = o.n(l),
        s = o('wtjx'),
        d = o('rxPX'),
        u = Object(d.a)()
          .propsFromActions(function () {
            return { saveAsRecentSearch: s.a }
          })
          .withAnalytics(),
        p = o('cFuS'),
        m = o('88ay'),
        h = function (e) {
          var t = e.analytics,
            o = e.cellClickable,
            n = e.decoration,
            r = e.entry,
            a = e.onClick,
            l = e.saveAsRecentSearch,
            s = e.shouldScribeImpression,
            d = e.shouldScribeProfileClick,
            u = e.shouldStoreTypeaheadItem,
            h = e.withFollowsYou,
            f = e.withLink,
            v = r.content,
            b = v.id,
            C = v.promotedMetadata,
            _ = v.socialContext,
            k = n || m.e,
            y = i(C),
            g = (_ && _.generalContext) || void 0,
            I = e.displayMode
          return c.a.createElement(m.a, {
            cellClickable: o,
            decoration: k,
            displayMode: I,
            onClick: a,
            promotedContent: y,
            promotedItemType: p.c.USER,
            saveAsRecentSearch: l,
            scribeData: t.contextualScribeData,
            scribeNamespace: t.contextualScribeNamespace,
            shouldScribeImpression: s,
            shouldScribeProfileClick: d,
            shouldStoreTypeaheadItem: u,
            socialContext: g,
            userId: b,
            withFollowsYou: h,
            withLink: f,
          })
        },
        f = u(c.a.memo(h)),
        v = o('Re5t'),
        b = [m.e, m.f]
      t.default = function (e) {
        var t = e.cellClickable,
          o = void 0 === t || t,
          l = e.decoration,
          c = e.displayMode,
          s = void 0 === c ? v.a.UserCompact : c,
          d = e.onClick,
          u = e.shouldScribeProfileClick,
          p = void 0 === u || u,
          m = e.shouldScribeImpression,
          h = void 0 !== m && m,
          C = e.shouldStoreTypeaheadItem,
          _ = e.withLink,
          k = void 0 === _ || _
        return n
          .b({
            component: f,
            defaultScribeNamespace: { element: 'user' },
            getScribeDataItem: function (e) {
              var t = e.content,
                o = t.id,
                n = t.promotedMetadata,
                r = e.cursor,
                l = e.itemMetadata,
                c = e.position,
                s = l.clientEventInfo,
                d = i(n)
              return a.a.getUserItem({ id_str: o, promoted_content: d }, void 0, c, r, s)
            },
            isFocusable: Object(r.a)(!0),
          })
          .getHandler(function () {
            return {
              cellClickable: o,
              decoration: l,
              displayMode: s,
              onClick: d,
              shouldScribeProfileClick: p,
              shouldScribeImpression: h,
              shouldStoreTypeaheadItem: C,
              withLink: k,
              withFollowsYou: !l || b.includes(l),
            }
          })
      }
    },
  },
])
//# sourceMappingURL=WIPED
