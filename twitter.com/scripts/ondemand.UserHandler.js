;(window.webpackJsonp = window.webpackJsonp || []).push([
  [243],
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
        l = o('VrFO'),
        c = o.n(l),
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
        k = o('97Jx'),
        y = o.n(k),
        _ = (o('1t7P'), o('jQ/y'), o('ho0z'), o('2G9S'), o('hBpG'), o('7x/C'), o('ERkP')),
        I = o.n(_),
        g = o('6rlp'),
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
        P = Object(A.a)()
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
              log: g.a,
              scribeAction: S.c,
            }
          }),
        B = o('I57f'),
        x = o('vMjK'),
        F = o('MWbm'),
        L = o('IG7M'),
        M = o('rHpw'),
        D = function (e) {
          var t = e.children,
            o = e.promotedContent,
            n = e.user
          return I.a.createElement(
            F.a,
            { style: N.decorationWrapper },
            t,
            I.a.createElement(L.a, {
              renderActionMenu: function (e) {
                return I.a.createElement(x.b, { onClose: e, promotedContent: o, user: n, view: 'follower' })
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
        V = o('IMA+'),
        X = o('cFuS'),
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
            ? I.a.createElement(
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
        displayMode: K.a.UserCompact,
        followRequestReceived: !1,
        hideBlocked: !1,
        promotedItemType: X.c.USER,
        shouldScribeProfileClick: !0,
        shouldScribeImpression: !1,
        withFollowsYou: !1,
      }
      var $ = function (e) {
          var t = e.isDeviceFollowing,
            o = e.userId
          return I.a.createElement(B.a, { isFollowing: t, style: re.followButton, userId: o })
        },
        ee = function (e) {
          var t = e.loggedInUserId,
            o = e.promotedContent,
            n = e.userId
          return t !== n
            ? I.a.createElement(U.a, { promotedContent: o, size: 'small', style: re.followButton, userId: n })
            : null
        },
        te = function (e) {
          return I.a.createElement(D, { promotedContent: e.promotedContent, user: e.user }, ee(e))
        },
        oe = function (e) {
          return I.a.createElement(L.a, {
            renderActionMenu: function (t) {
              return I.a.createElement(x.b, {
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
            c()(this, o)
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              C()(p()(e), '_handleAvatarClick', function () {
                var t = e.props.shouldScribeProfileClick
                e._handleSaveAsRecentSearch(),
                  t && e._scribeAction({ element: 'avatar', action: 'profile_click' }),
                  e._handleAsyncPromotedEvent(X.b.PROFILE_IMAGE_CLICK)
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
                  e._handleAsyncPromotedEvent(X.b.SCREEN_NAME_CLICK)
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
                    l = r()(e, Q)
                  return this._shouldRender()
                    ? I.a.createElement(
                        V.a,
                        y()({}, l, {
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
                  return t && o === X.c.TWEET ? { promotedTweetState: t } : null
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
                  if (n && r === X.c.USER) {
                    var l = n.disclosure_type,
                      c = n.impression_id
                    o({
                      disclosureType: l,
                      itemId: a,
                      itemType: X.c.USER,
                      params: { event: X.b.IMPRESSION, impression_id: c },
                    }).catch(t())
                  } else i && this._scribeAction({ action: 'impression' })
                },
              },
            ]),
            o
          )
        })(I.a.Component)
      C()(ne, 'contextType', J.a), C()(ne, 'defaultProps', Z.defaultProps)
      var re = M.a.create(function (e) {
          return { followButton: { marginLeft: e.spaces.space12 } }
        }),
        ie = Object(z.a)(Object(G.a)(P(Z)))
      t.b = Object(W.a)({ element: 'user' })(ie)
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
            v = e.withLink,
            f = r.content,
            b = f.id,
            C = f.promotedMetadata,
            k = f.socialContext,
            y = n || m.e,
            _ = i(C),
            I = (k && k.generalContext) || void 0,
            g = e.displayMode
          return c.a.createElement(m.a, {
            cellClickable: o,
            decoration: y,
            displayMode: g,
            onClick: a,
            promotedContent: _,
            promotedItemType: p.c.USER,
            saveAsRecentSearch: l,
            scribeData: t.contextualScribeData,
            scribeNamespace: t.contextualScribeNamespace,
            shouldScribeImpression: s,
            shouldScribeProfileClick: d,
            shouldStoreTypeaheadItem: u,
            socialContext: I,
            userId: b,
            withFollowsYou: h,
            withLink: v,
          })
        },
        v = u(c.a.memo(h)),
        f = o('Re5t'),
        b = [m.e, m.f]
      t.default = function (e) {
        var t = e.cellClickable,
          o = void 0 === t || t,
          l = e.decoration,
          c = e.displayMode,
          s = void 0 === c ? f.a.UserCompact : c,
          d = e.onClick,
          u = e.shouldScribeProfileClick,
          p = void 0 === u || u,
          m = e.shouldScribeImpression,
          h = void 0 !== m && m,
          C = e.shouldStoreTypeaheadItem,
          k = e.withLink,
          y = void 0 === k || k
        return n
          .b({
            component: v,
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
              withLink: y,
              withFollowsYou: !l || b.includes(l),
            }
          })
      }
    },
  },
])
//# sourceMappingURL=WIPED
