;(window.webpackJsonp = window.webpackJsonp || []).push([
  [99],
  {
    '3GUV': function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('VrFO'),
        o = n.n(r),
        i = n('Y9Ll'),
        a = n.n(i),
        c = n('5Yy7'),
        l = n.n(c),
        s = n('N+ot'),
        u = n.n(s),
        d = n('AuHH'),
        p = n.n(d),
        f = n('ERkP'),
        m = n.n(f),
        h = n('rHpw'),
        y = n('MWbm')
      function v(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            r = p()(e)
          if (t) {
            var o = p()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return u()(this, n)
        }
      }
      var b = (function (e) {
          l()(n, e)
          var t = v(n)
          function n() {
            return o()(this, n), t.apply(this, arguments)
          }
          return (
            a()(n, [
              {
                key: 'shouldComponentUpdate',
                value: function () {
                  return !1
                },
              },
              {
                key: 'render',
                value: function () {
                  return m.a.createElement(y.a, { style: E.root })
                },
              },
            ]),
            n
          )
        })(m.a.Component),
        E = h.a.create(function (e) {
          return { root: { height: 5 * e.lineHeightsPx.body } }
        })
      t.a = b
    },
    '5UID': function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('VrFO'),
        o = n.n(r),
        i = n('Y9Ll'),
        a = n.n(i),
        c = n('5Yy7'),
        l = n.n(c),
        s = n('N+ot'),
        u = n.n(s),
        d = n('AuHH'),
        p = n.n(d),
        f = n('ERkP'),
        m = n.n(f),
        h = n('3XMw'),
        y = n.n(h),
        v = n('rHpw'),
        b = n('+/1j'),
        E = n('MWbm')
      function w(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            r = p()(e)
          if (t) {
            var o = p()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return u()(this, n)
        }
      }
      var _ = y.a.e5b0063d,
        g = 0,
        R = (function (e) {
          l()(n, e)
          var t = w(n)
          function n() {
            var e
            return o()(this, n), ((e = t.call(this))._listDomId = 'accessible-list-'.concat(g)), (g += 1), e
          }
          return (
            a()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    n = e.title,
                    r = _({ title: n })
                  return m.a.createElement(
                    E.a,
                    { accessibilityLabelledBy: this._listDomId, accessibilityRole: 'region' },
                    m.a.createElement(
                      b.a,
                      {
                        accessibilityLevel: 1,
                        accessibilityRole: 'heading',
                        nativeID: this._listDomId,
                        style: v.a.visuallyHidden,
                      },
                      n,
                    ),
                    m.a.createElement(E.a, { accessibilityLabel: r }, t),
                  )
                },
              },
            ]),
            n
          )
        })(m.a.Component)
      t.a = R
    },
    '88ay': function (e, t, n) {
      'use strict'
      n.d(t, 'c', function () {
        return te
      }),
        n.d(t, 'e', function () {
          return ne
        }),
        n.d(t, 'f', function () {
          return re
        }),
        n.d(t, 'd', function () {
          return oe
        }),
        n.d(t, 'a', function () {
          return ce
        })
      n('OZaJ'), n('+KXO'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('m3Bd'),
        o = n.n(r),
        i = n('VrFO'),
        a = n.n(i),
        c = n('Y9Ll'),
        l = n.n(c),
        s = n('1Pcy'),
        u = n.n(s),
        d = n('5Yy7'),
        p = n.n(d),
        f = n('N+ot'),
        m = n.n(f),
        h = n('AuHH'),
        y = n.n(h),
        v = n('KEM+'),
        b = n.n(v),
        E = n('97Jx'),
        w = n.n(E),
        _ = (n('1t7P'), n('jQ/y'), n('ho0z'), n('2G9S'), n('hBpG'), n('ERkP')),
        g = n.n(_),
        R = n('6rlp'),
        T = n('zh9S'),
        I = n('G6rE'),
        C = n('rxPX'),
        O = n('0KEI'),
        k = function (e, t) {
          return I.e.select(e, t.userId)
        },
        S = function (e, t) {
          return t.promotedContent
        },
        A = Object(C.a)()
          .propsFromState(function () {
            return { promotedContent: S, user: k }
          })
          .adjustStateProps(function (e) {
            var t = e.promotedContent,
              n = e.user
            return { promotedContent: t || (n ? n.promoted_content : void 0), user: n }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(O.createLocalApiErrorHandlerWithContextFactory)('USER_CELL_CONTAINER'),
              log: R.a,
              scribeAction: T.c,
            }
          }),
        P = n('I57f'),
        j = n('vMjK'),
        L = n('MWbm'),
        D = n('IG7M'),
        F = n('rHpw'),
        H = function (e) {
          var t = e.children,
            n = e.promotedContent,
            r = e.user
          return g.a.createElement(
            L.a,
            { style: B.decorationWrapper },
            t,
            g.a.createElement(D.a, {
              renderActionMenu: function (e) {
                return g.a.createElement(j.b, { onClose: e, promotedContent: n, user: r, view: 'follower' })
              },
              style: B.actionMenu,
            }),
          )
        },
        B = F.a.create(function (e) {
          return { decorationWrapper: { flexDirection: 'row' }, actionMenu: { marginLeft: e.spaces.space12 } }
        }),
        N = n('uIZp'),
        x = n('mN6z'),
        U = n('caTy'),
        M = n('3IPs'),
        W = n('Rp9C'),
        K = n('X04g'),
        q = n('Re5t'),
        Y = n('TnY3'),
        G = n('hxu0'),
        J = n('v6aA'),
        X = n('7JQg'),
        V = n('IMA+'),
        Z = n('cFuS')
      function Q(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function z(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Q(Object(n), !0).forEach(function (t) {
                b()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Q(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function $(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            r = y()(e)
          if (t) {
            var o = y()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return m()(this, n)
        }
      }
      var ee = function (e) {
        var t = e.user
        return t && t.profile_image_url_https
          ? g.a.createElement(
              ie,
              w()({}, e, {
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
      ee.defaultProps = {
        cellClickable: !0,
        decoration: null,
        displayMode: q.a.UserCompact,
        followRequestReceived: !1,
        hideBlocked: !1,
        promotedItemType: Z.c.USER,
        shouldScribeProfileClick: !0,
        shouldScribeImpression: !1,
        withFollowsYou: !1,
      }
      var te = function (e) {
          var t = e.isDeviceFollowing,
            n = e.userId
          return g.a.createElement(P.a, { isFollowing: t, style: ae.followButton, userId: n })
        },
        ne = function (e) {
          var t = e.loggedInUserId,
            n = e.promotedContent,
            r = e.userId
          return t !== r
            ? g.a.createElement(N.a, { promotedContent: n, size: 'small', style: ae.followButton, userId: r })
            : null
        },
        re = function (e) {
          return g.a.createElement(H, { promotedContent: e.promotedContent, user: e.user }, ne(e))
        },
        oe = function (e) {
          return g.a.createElement(D.a, {
            renderActionMenu: function (t) {
              return g.a.createElement(j.b, {
                onClose: t,
                promotedContent: e.promotedContent,
                user: e.user,
                view: 'rito_flagged_accounts',
              })
            },
          })
        },
        ie = (function (e) {
          p()(n, e)
          var t = $(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              b()(u()(e), '_handleAvatarClick', function () {
                var t = e.props.shouldScribeProfileClick
                e._handleSaveAsRecentSearch(),
                  t && e._scribeAction({ element: 'avatar', action: 'profile_click' }),
                  e._handleAsyncPromotedEvent(Z.b.PROFILE_IMAGE_CLICK)
              }),
              b()(u()(e), '_handleCellClick', function () {
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
              b()(u()(e), '_handleScreenNameClick', function () {
                var t = e.props.shouldScribeProfileClick
                e._handleSaveAsRecentSearch(),
                  t && e._scribeAction({ action: 'profile_click' }),
                  e._handleAsyncPromotedEvent(Z.b.SCREEN_NAME_CLICK)
              }),
              b()(u()(e), '_handleSaveAsRecentSearch', function () {
                var t = e.props,
                  n = t.saveAsRecentSearch,
                  r = t.shouldStoreTypeaheadItem,
                  o = t.userId
                n && r && r(K.a.ItemType.USER) && n({ user: { id: o, type: M.a.User } })
              }),
              b()(u()(e), '_scribeAction', function (t) {
                var n,
                  r = e.props,
                  o = r.promotedContent,
                  i = r.scribeAction,
                  a = r.scribeData,
                  c = r.scribeNamespace,
                  l = r.user,
                  s = r.userId,
                  u =
                    null == a || null === (n = a.items) || void 0 === n
                      ? void 0
                      : n.find(function (e) {
                          return e.item_type === K.a.ItemType.USER && e.id === s
                        }),
                  d = a.search_details,
                  p = { items: [z(z({}, u), W.a.getUserItem(l, o))], profile_id: s, search_details: d }
                i(z(z({}, c), t), p)
              }),
              e
            )
          }
          return (
            l()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._shouldRender() && this._handleImpression()
                },
              },
              {
                key: 'shouldComponentUpdate',
                value: function (e) {
                  return !Object(x.a)(this.props, e)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.avatarDecoration,
                    n = (e.bottomControl, e.cellClickable),
                    r =
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
                    c = o()(e, [
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
                    ])
                  return this._shouldRender()
                    ? g.a.createElement(
                        V.a,
                        w()({}, c, {
                          avatarDecoration: t,
                          bottomControl: this._renderBottomControl(),
                          decoration: this._renderDecoration(),
                          highlightedLabel: this._getHighlightedLabel(),
                          isBlocking: a.blocking,
                          onAvatarClick: this._handleAvatarClick,
                          onCellClick: n ? this._handleCellClick : void 0,
                          onScreenNameClick: this._handleScreenNameClick,
                          socialContext: i
                            ? {
                                contextType: i.contextType,
                                text: i.text,
                                link: i.landingUrl ? Object(U.b)(i.landingUrl) : void 0,
                              }
                            : void 0,
                          withDarkerInteractiveBackground: r,
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
                    n = this.props,
                    r = n.displayMode,
                    o = n.followRequestReceived,
                    i = n.isAutoblocking,
                    a = n.isBlocking,
                    c = n.isDeviceFollowing,
                    l = n.isFollowing,
                    s = n.promotedContent,
                    u = n.screenName,
                    d = n.user,
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
                  return t && n === Z.c.TWEET ? { promotedTweetState: t } : null
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
                  if (r && o === Z.c.USER) {
                    var c = r.disclosure_type,
                      l = r.impression_id
                    n({
                      disclosureType: c,
                      itemId: a,
                      itemType: Z.c.USER,
                      params: { event: Z.b.IMPRESSION, impression_id: l },
                    }).catch(t())
                  } else i && this._scribeAction({ action: 'impression' })
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      b()(ie, 'contextType', J.a), b()(ie, 'defaultProps', ee.defaultProps)
      var ae = F.a.create(function (e) {
          return { followButton: { marginLeft: e.spaces.space12 } }
        }),
        ce = Object(Y.a)(Object(G.a)(A(ee)))
      t.b = Object(X.c)({ element: 'user' })(ce)
    },
    TEoO: function (e, t, n) {
      'use strict'
      var r = n('m3Bd'),
        o = n.n(r),
        i = n('ERkP'),
        a = n.n(i),
        c = n('5UID'),
        l = n('3GUV'),
        s = n('iBK2'),
        u = a.a.createElement(l.a, null),
        d = function (e) {
          var t = e.accessibilityTitle,
            n = o()(e, ['accessibilityTitle']),
            r = a.a.createElement(s.b, n)
          return t ? a.a.createElement(c.a, { title: t }, r) : r
        }
      ;(d.defaultProps = { footer: u }), (t.a = d)
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
    'jv9/': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'truncateNumber', function () {
          return ue
        }),
        n.d(t, 'TweetActivityReactionsScreen', function () {
          return fe
        })
      n('OZaJ'), n('+KXO'), n('1t7P'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('RhWx'),
        o = n.n(r),
        i = n('VrFO'),
        a = n.n(i),
        c = n('Y9Ll'),
        l = n.n(c),
        s = n('1Pcy'),
        u = n.n(s),
        d = n('5Yy7'),
        p = n.n(d),
        f = n('N+ot'),
        m = n.n(f),
        h = n('AuHH'),
        y = n.n(h),
        v = n('KEM+'),
        b = n.n(v),
        E = (n('7x/C'), n('DZ+c'), n('2G9S'), n('LW0h'), n('z84I'), n('KOtZ'), n('tQbP'), n('ERkP')),
        w = n.n(E),
        _ = (n('WNMA'), n('KqXw'), n('rxPX')),
        g = n('0KEI'),
        R = (n('yH/f'), n('/kEJ')),
        T = n('oEOe'),
        I = n('kGix'),
        C = n('Ssj5')
      function O(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function k(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? O(Object(n), !0).forEach(function (t) {
                b()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : O(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var S = 'tweetReactionTimeline',
        A = { tweetReactionTimelines: {} },
        P = Object.freeze({
          REQUEST: 'rweb/tweetReactionTimeline/FETCH_TWEET_REACTION_TIMELINE_REQUEST',
          SUCCESS: 'rweb/tweetReactionTimeline/FETCH_TWEET_REACTION_TIMELINE_SUCCESS',
          FAILURE: 'rweb/tweetReactionTimeline/FETCH_TWEET_REACTION_TIMELINE_FAILURE',
        })
      function j() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : A,
          t = arguments.length > 1 ? arguments[1] : void 0
        if (!t.meta) return e
        switch (t.type) {
          case P.REQUEST:
            return k(
              k({}, e),
              {},
              {
                tweetReactionTimelines: k(
                  k({}, e.tweetReactionTimelines),
                  {},
                  b()({}, t.meta.tweetId, { fetchStatus: I.a.LOADING, tweetReactionTimeline: void 0 }),
                ),
              },
            )
          case P.SUCCESS:
            return k(
              k({}, e),
              {},
              {
                tweetReactionTimelines: k(
                  k({}, e.tweetReactionTimelines),
                  {},
                  b()({}, t.meta.tweetId, { fetchStatus: I.a.LOADED, tweetReactionTimeline: t.payload }),
                ),
              },
            )
          case P.FAILURE:
            return k(
              k({}, e),
              {},
              {
                tweetReactionTimelines: k(
                  k({}, e.tweetReactionTimelines),
                  {},
                  b()({}, t.meta.tweetId, { fetchStatus: I.a.FAILED, tweetReactionTimeline: void 0 }),
                ),
              },
            )
          default:
            return e
        }
      }
      C.a.register(b()({}, S, j))
      var L = function (e) {
          return function (t, n, r) {
            var o = r.api
            return Object(T.b)(t, { request: o.TweetActivity.fetchReactedBy, params: e })(
              { actionTypes: P, context: 'FETCH_TWEET_REACTION_TIMELINE', meta: e },
              function (e) {
                if (e) return [Object(R.c)({ users: e.userEntities })]
              },
            )
          }
        },
        D = n('XOJV'),
        F = function (e, t) {
          return t.match.params.statusId
        },
        H = function (e, t) {
          return t.match.params.screenName
        },
        B = function (e, t) {
          var n = t.match.params.statusId
          return D.a.select(e, n)
        },
        N = function (e, t) {
          return (function (e, t) {
            var n
            return null === (n = e[S].tweetReactionTimelines[t]) || void 0 === n ? void 0 : n.tweetReactionTimeline
          })(e, t.match.params.statusId)
        },
        x = function (e, t) {
          return (function (e, t) {
            var n
            return (null === (n = e[S].tweetReactionTimelines[t]) || void 0 === n ? void 0 : n.fetchStatus) || I.a.NONE
          })(e, t.match.params.statusId)
        },
        U = Object(_.a)()
          .propsFromState(function () {
            return { tweet: B, fetchStatus: x, reactionTimeline: N, screenName: H, statusId: F }
          })
          .propsFromActions(function () {
            return {
              fetchTweetReactionTimeline: L,
              createLocalApiErrorHandler: Object(g.createLocalApiErrorHandlerWithContextFactory)(
                'TWEET_ACTIVITY_REACTIONS',
              ),
            }
          })
          .withAnalytics({ page: 'reactions_detail' }),
        M = n('jHSc'),
        W = n('3XMw'),
        K = n.n(W),
        q = n('TEoO'),
        Y = n('Re5t'),
        G = n('MWbm'),
        J = n('de1q'),
        X = n('t62R'),
        V = n('k/OQ'),
        Z = n('FIs5'),
        Q = n('G1WX'),
        z = n('rHpw'),
        $ = n('v6aA'),
        ee = n('88ay')
      function te(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function ne(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? te(Object(n), !0).forEach(function (t) {
                b()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : te(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function re(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            r = y()(e)
          if (t) {
            var o = y()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return m()(this, n)
        }
      }
      var oe = K.a.aca3184d,
        ie = K.a.h7f7183f,
        ae = { Like: K.a.d4c3c63a, Haha: K.a.d40cca4c, Hmm: K.a.cb46dd2a, Sad: K.a.b65bb361, Cheer: K.a.d02b6077 },
        ce = K.a.jeb4436c,
        le = K.a.db29b5a9,
        se = K.a.c0098d49,
        ue = K.a.d58baa7e,
        de = function (e) {
          return Object(ee.e)(e)
        },
        pe = function (e) {
          return e.index.toString()
        },
        fe = (function (e) {
          p()(n, e)
          var t = re(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), c = 0; c < r; c++) i[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              b()(
                u()(e),
                '_reactionsLegacyHeartEnabled',
                e.context.featureSwitches.isTrue('responsive_web_reactions_legacy_heart'),
              ),
              b()(u()(e), '_handleFetchTimeline', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchTweetReactionTimeline)({ tweetId: t.statusId }).catch(n())
              }),
              b()(u()(e), '_render', function () {
                var t,
                  n = e.props,
                  r = n.location,
                  o = n.reactionTimeline,
                  i = null == o ? void 0 : o.reactionTimeline,
                  a = null === (t = r.state) || void 0 === t ? void 0 : t.reactionType
                return (
                  a &&
                    i &&
                    (i = i.filter(function (e) {
                      return e.reactionType === a
                    })),
                  w.a.createElement(
                    w.a.Fragment,
                    null,
                    e._renderTabs(),
                    i
                      ? w.a.createElement(q.a, {
                          accessibilityRole: 'tablist',
                          accessibilityTitle: se,
                          assumedItemHeight: 75,
                          cacheKey: 'tweetActivityReactions',
                          identityFunction: pe,
                          items: i.map(function (e, t) {
                            return ne(ne({}, e), {}, { index: t })
                          }),
                          noItemsRenderer: e._renderEmptyState,
                          renderer: e._itemRenderer,
                          withKeyboardShortcuts: !0,
                        })
                      : null,
                  )
                )
              }),
              b()(u()(e), '_isActive', function (t) {
                var n,
                  r = e.props.location,
                  o = (t.state && t.state.reactionType) || void 0
                return (
                  (t.pathname || t) === r.pathname &&
                  o === (null === (n = r.state) || void 0 === n ? void 0 : n.reactionType)
                )
              }),
              b()(u()(e), '_getTab', function (t, n) {
                var r = n && ue(n)
                return {
                  isActive: e._isActive,
                  key: t,
                  to: { state: { reactionType: t, lockScroll: !0 }, pathname: location.pathname },
                  label: w.a.createElement(
                    G.a,
                    { style: me.tab },
                    w.a.createElement(J.a, {
                      legacyHeart: e._reactionsLegacyHeartEnabled,
                      reactionType: t,
                      style: me.tabDecoration,
                      withAnimation: !1,
                    }),
                    w.a.createElement(X.b, null, ae[t]({ count: r || '' })),
                  ),
                }
              }),
              b()(u()(e), '_renderTabs', function () {
                var t = e.props,
                  n = t.location,
                  r = t.reactionTimeline,
                  i = null == r ? void 0 : r.reactionCounts,
                  a =
                    i &&
                    i.filter(function (e) {
                      return e.count > 0
                    }).length > 1,
                  c =
                    (i &&
                      i.reduce(function (e, t) {
                        return (t.count || 0) + e
                      }, 0)) ||
                    0,
                  l = c && ue(c)
                if (!a || !i) return null
                var s = i
                    .sort(function (e, t) {
                      return t.count - e.count
                    })
                    .filter(function (e) {
                      return e.count > 0
                    }),
                  u = [{ isActive: e._isActive, key: 'all', to: n.pathname, label: ie({ count: l }) }].concat(
                    o()(
                      s.map(function (t) {
                        return e._getTab(t.type, t.count)
                      }),
                    ),
                  )
                return w.a.createElement(V.a, { links: u })
              }),
              b()(u()(e), '_renderEmptyState', function () {
                return w.a.createElement(Z.a, { header: ce, message: le })
              }),
              b()(u()(e), '_itemRenderer', function (t, n) {
                var r = w.a.createElement(J.a, {
                  legacyHeart: e._reactionsLegacyHeartEnabled,
                  reactionType: t.reactionType,
                  style: me.avatarDecoration,
                  withAnimation: !1,
                })
                return (
                  n && n(!0),
                  w.a.createElement(ee.b, {
                    avatarDecoration: r,
                    decoration: de,
                    displayMode: Y.a.UserDetailed,
                    userId: t.user,
                    withFollowsYou: !0,
                  })
                )
              }),
              e
            )
          }
          return (
            l()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._handleFetchTimeline()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t,
                    n,
                    r = this.props,
                    o = r.analytics,
                    i = null === (t = r.location.state) || void 0 === t ? void 0 : t.reactionType
                  ;(null === (n = e.location.state) || void 0 === n ? void 0 : n.reactionType) !== i &&
                    o.scribe({ section: (null == i ? void 0 : i.toLowerCase()) || 'all', action: 'show' })
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    n = e.history,
                    r = e.screenName,
                    o = e.statusId
                  return w.a.createElement(
                    M.b,
                    { backLocation: '/'.concat(r.toLowerCase(), '/status/').concat(o), history: n, title: se },
                    w.a.createElement(Q.a, {
                      accessibilityLabel: oe,
                      fetchStatus: t,
                      onRequestRetry: this._handleFetchTimeline,
                      render: this._render,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(w.a.PureComponent)
      b()(fe, 'contextType', $.a)
      var me = z.a.create(function (e) {
          return {
            tab: { alignItems: 'center', flexDirection: 'row' },
            avatarDecoration: {
              width: '1.2em',
              height: '1.2em',
              position: 'absolute',
              top: e.spaces.space32,
              right: 0,
            },
            tabDecoration: { width: '1.2em', height: '1.2em', marginRight: '0.5em' },
          }
        }),
        he = U(fe)
      t.default = he
    },
  },
])
//# sourceMappingURL=WIPED
