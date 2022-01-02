;(window.webpackJsonp = window.webpackJsonp || []).push([
  [97],
  {
    '3GUV': function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('VrFO'),
        o = n.n(r),
        i = n('Y9Ll'),
        c = n.n(i),
        a = n('5Yy7'),
        l = n.n(a),
        s = n('N+ot'),
        u = n.n(s),
        d = n('AuHH'),
        p = n.n(d),
        f = n('ERkP'),
        m = n('rHpw'),
        h = n('MWbm')
      function y(e) {
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
      var v = (function (e) {
          l()(n, e)
          var t = y(n)
          function n() {
            return o()(this, n), t.apply(this, arguments)
          }
          return (
            c()(n, [
              {
                key: 'shouldComponentUpdate',
                value: function () {
                  return !1
                },
              },
              {
                key: 'render',
                value: function () {
                  return f.createElement(h.a, { style: b.root })
                },
              },
            ]),
            n
          )
        })(f.Component),
        b = m.a.create(function (e) {
          return { root: { height: 5 * e.lineHeightsPx.body } }
        })
      t.a = v
    },
    '5UID': function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('VrFO'),
        o = n.n(r),
        i = n('Y9Ll'),
        c = n.n(i),
        a = n('5Yy7'),
        l = n.n(a),
        s = n('N+ot'),
        u = n.n(s),
        d = n('AuHH'),
        p = n.n(d),
        f = n('ERkP'),
        m = n('3XMw'),
        h = n.n(m),
        y = n('rHpw'),
        v = n('+/1j'),
        b = n('MWbm')
      function E(e) {
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
      var w = h.a.e5b0063d,
        _ = 0,
        g = (function (e) {
          l()(n, e)
          var t = E(n)
          function n() {
            var e
            return o()(this, n), ((e = t.call(this))._listDomId = 'accessible-list-'.concat(_)), (_ += 1), e
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    n = e.title,
                    r = w({ title: n })
                  return f.createElement(
                    b.a,
                    { accessibilityLabelledBy: this._listDomId, accessibilityRole: 'region' },
                    f.createElement(
                      v.a,
                      {
                        accessibilityLevel: 1,
                        accessibilityRole: 'heading',
                        nativeID: this._listDomId,
                        style: y.a.visuallyHidden,
                      },
                      n,
                    ),
                    f.createElement(b.a, { accessibilityLabel: r }, t),
                  )
                },
              },
            ]),
            n
          )
        })(f.Component)
      t.a = g
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
          return ce
        })
      n('OZaJ'), n('+KXO'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('m3Bd'),
        o = n.n(r),
        i = n('VrFO'),
        c = n.n(i),
        a = n('Y9Ll'),
        l = n.n(a),
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
        g = n('6rlp'),
        T = n('zh9S'),
        R = n('G6rE'),
        I = n('rxPX'),
        O = n('0KEI'),
        C = function (e, t) {
          return R.e.select(e, t.userId)
        },
        k = function (e, t) {
          return t.promotedContent
        },
        S = Object(I.a)()
          .propsFromState(function () {
            return { promotedContent: k, user: C }
          })
          .adjustStateProps(function (e) {
            var t = e.promotedContent,
              n = e.user
            return { promotedContent: t || (n ? n.promoted_content : void 0), user: n }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(O.createLocalApiErrorHandlerWithContextFactory)('USER_CELL_CONTAINER'),
              log: g.a,
              scribeAction: T.c,
            }
          }),
        A = n('I57f'),
        P = n('vMjK'),
        j = n('MWbm'),
        L = n('IG7M'),
        D = n('rHpw'),
        F = function (e) {
          var t = e.children,
            n = e.promotedContent,
            r = e.user
          return _.createElement(
            j.a,
            { style: H.decorationWrapper },
            t,
            _.createElement(L.a, {
              renderActionMenu: function (e) {
                return _.createElement(P.b, { onClose: e, promotedContent: n, user: r, view: 'follower' })
              },
              style: H.actionMenu,
            }),
          )
        },
        H = D.a.create(function (e) {
          return { decorationWrapper: { flexDirection: 'row' }, actionMenu: { marginLeft: e.spaces.space12 } }
        }),
        B = n('uIZp'),
        N = n('mN6z'),
        x = n('caTy'),
        U = n('3IPs'),
        M = n('Rp9C'),
        W = n('X04g'),
        K = n('Re5t'),
        Y = n('TnY3'),
        q = n('hxu0'),
        G = n('v6aA'),
        J = n('7JQg'),
        X = n('IMA+'),
        V = n('cFuS')
      function Z(e, t) {
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
      function Q(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Z(Object(n), !0).forEach(function (t) {
                b()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Z(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function z(e) {
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
      var $ = function (e) {
        var t = e.user
        return t && t.profile_image_url_https
          ? _.createElement(
              oe,
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
      $.defaultProps = {
        cellClickable: !0,
        decoration: null,
        displayMode: K.a.UserCompact,
        followRequestReceived: !1,
        hideBlocked: !1,
        promotedItemType: V.c.USER,
        shouldScribeProfileClick: !0,
        shouldScribeImpression: !1,
        withFollowsYou: !1,
      }
      var ee = function (e) {
          var t = e.isDeviceFollowing,
            n = e.userId
          return _.createElement(A.a, { isFollowing: t, style: ie.followButton, userId: n })
        },
        te = function (e) {
          var t = e.loggedInUserId,
            n = e.promotedContent,
            r = e.userId
          return t !== r
            ? _.createElement(B.a, { promotedContent: n, size: 'small', style: ie.followButton, userId: r })
            : null
        },
        ne = function (e) {
          return _.createElement(F, { promotedContent: e.promotedContent, user: e.user }, te(e))
        },
        re = function (e) {
          return _.createElement(L.a, {
            renderActionMenu: function (t) {
              return _.createElement(P.b, {
                onClose: t,
                promotedContent: e.promotedContent,
                user: e.user,
                view: 'rito_flagged_accounts',
              })
            },
          })
        },
        oe = (function (e) {
          p()(n, e)
          var t = z(n)
          function n() {
            var e
            c()(this, n)
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              b()(u()(e), '_handleAvatarClick', function () {
                var t = e.props.shouldScribeProfileClick
                e._handleSaveAsRecentSearch(),
                  t && e._scribeAction({ element: 'avatar', action: 'profile_click' }),
                  e._handleAsyncPromotedEvent(V.b.PROFILE_IMAGE_CLICK)
              }),
              b()(u()(e), '_handleCellClick', function () {
                var t = e.props,
                  n = t.history,
                  r = t.onClick,
                  o = t.screenName,
                  i = t.user,
                  c = e._getPromotedTweetState()
                e._handleSaveAsRecentSearch(),
                  e._handleScreenNameClick(),
                  r ? r({ user: i, state: c }) : n.push({ pathname: '/'.concat(o), state: c || void 0 })
              }),
              b()(u()(e), '_handleScreenNameClick', function () {
                var t = e.props.shouldScribeProfileClick
                e._handleSaveAsRecentSearch(),
                  t && e._scribeAction({ action: 'profile_click' }),
                  e._handleAsyncPromotedEvent(V.b.SCREEN_NAME_CLICK)
              }),
              b()(u()(e), '_handleSaveAsRecentSearch', function () {
                var t = e.props,
                  n = t.saveAsRecentSearch,
                  r = t.shouldStoreTypeaheadItem,
                  o = t.userId
                n && r && r(W.a.ItemType.USER) && n({ user: { id: o, type: U.a.User } })
              }),
              b()(u()(e), '_scribeAction', function (t) {
                var n,
                  r = e.props,
                  o = r.promotedContent,
                  i = r.scribeAction,
                  c = r.scribeData,
                  a = r.scribeNamespace,
                  l = r.user,
                  s = r.userId,
                  u =
                    null == c || null === (n = c.items) || void 0 === n
                      ? void 0
                      : n.find(function (e) {
                          return e.item_type === W.a.ItemType.USER && e.id === s
                        }),
                  d = c.search_details,
                  p = { items: [Q(Q({}, u), M.a.getUserItem(l, o))], profile_id: s, search_details: d }
                i(Q(Q({}, a), t), p)
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
                  return !Object(N.a)(this.props, e)
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
                    c = e.user,
                    a = o()(e, [
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
                    ? _.createElement(
                        X.a,
                        w()({}, a, {
                          avatarDecoration: t,
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
                                link: i.landingUrl ? Object(x.b)(i.landingUrl) : void 0,
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
                    c = n.isBlocking,
                    a = n.isDeviceFollowing,
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
                        isBlocking: c,
                        isDeviceFollowing: !!a,
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
                  return t && n === V.c.TWEET ? { promotedTweetState: t } : null
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
                    c = t.promotedItemType,
                    a = t.userId
                  o &&
                    r({
                      disclosureType: o.disclosure_type,
                      itemId: i || a,
                      itemType: c,
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
                    c = e.userId
                  if (r && o === V.c.USER) {
                    var a = r.disclosure_type,
                      l = r.impression_id
                    n({
                      disclosureType: a,
                      itemId: c,
                      itemType: V.c.USER,
                      params: { event: V.b.IMPRESSION, impression_id: l },
                    }).catch(t())
                  } else i && this._scribeAction({ action: 'impression' })
                },
              },
            ]),
            n
          )
        })(_.Component)
      b()(oe, 'contextType', G.a), b()(oe, 'defaultProps', $.defaultProps)
      var ie = D.a.create(function (e) {
          return { followButton: { marginLeft: e.spaces.space12 } }
        }),
        ce = Object(Y.a)(Object(q.a)(S($)))
      t.b = Object(J.c)({ element: 'user' })(ce)
    },
    TEoO: function (e, t, n) {
      'use strict'
      var r = n('m3Bd'),
        o = n.n(r),
        i = n('ERkP'),
        c = n('5UID'),
        a = n('3GUV'),
        l = n('iBK2'),
        s = i.createElement(a.a, null),
        u = function (e) {
          var t = e.accessibilityTitle,
            n = o()(e, ['accessibilityTitle']),
            r = i.createElement(l.b, n)
          return t ? i.createElement(c.a, { title: t }, r) : r
        }
      ;(u.defaultProps = { footer: s }), (t.a = u)
    },
    'jv9/': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'truncateNumber', function () {
          return se
        }),
        n.d(t, 'TweetActivityReactionsScreen', function () {
          return pe
        })
      n('OZaJ'), n('+KXO'), n('1t7P'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('RhWx'),
        o = n.n(r),
        i = n('VrFO'),
        c = n.n(i),
        a = n('Y9Ll'),
        l = n.n(a),
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
        w = (n('WNMA'), n('KqXw'), n('rxPX')),
        _ = n('0KEI'),
        g = (n('yH/f'), n('/kEJ')),
        T = n('oEOe'),
        R = n('kGix'),
        I = n('Ssj5')
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
      function C(e) {
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
      var k = 'tweetReactionTimeline',
        S = { tweetReactionTimelines: {} },
        A = Object.freeze({
          REQUEST: 'rweb/tweetReactionTimeline/FETCH_TWEET_REACTION_TIMELINE_REQUEST',
          SUCCESS: 'rweb/tweetReactionTimeline/FETCH_TWEET_REACTION_TIMELINE_SUCCESS',
          FAILURE: 'rweb/tweetReactionTimeline/FETCH_TWEET_REACTION_TIMELINE_FAILURE',
        })
      function P() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S,
          t = arguments.length > 1 ? arguments[1] : void 0
        if (!t.meta) return e
        switch (t.type) {
          case A.REQUEST:
            return C(
              C({}, e),
              {},
              {
                tweetReactionTimelines: C(
                  C({}, e.tweetReactionTimelines),
                  {},
                  b()({}, t.meta.tweetId, { fetchStatus: R.a.LOADING, tweetReactionTimeline: void 0 }),
                ),
              },
            )
          case A.SUCCESS:
            return C(
              C({}, e),
              {},
              {
                tweetReactionTimelines: C(
                  C({}, e.tweetReactionTimelines),
                  {},
                  b()({}, t.meta.tweetId, { fetchStatus: R.a.LOADED, tweetReactionTimeline: t.payload }),
                ),
              },
            )
          case A.FAILURE:
            return C(
              C({}, e),
              {},
              {
                tweetReactionTimelines: C(
                  C({}, e.tweetReactionTimelines),
                  {},
                  b()({}, t.meta.tweetId, { fetchStatus: R.a.FAILED, tweetReactionTimeline: void 0 }),
                ),
              },
            )
          default:
            return e
        }
      }
      I.a.register(b()({}, k, P))
      var j = function (e) {
          return function (t, n, r) {
            var o = r.api
            return Object(T.b)(t, { request: o.TweetActivity.fetchReactedBy, params: e })(
              { actionTypes: A, context: 'FETCH_TWEET_REACTION_TIMELINE', meta: e },
              function (e) {
                if (e) return [Object(g.c)({ users: e.userEntities })]
              },
            )
          }
        },
        L = n('XOJV'),
        D = function (e, t) {
          return t.match.params.statusId
        },
        F = function (e, t) {
          return t.match.params.screenName
        },
        H = function (e, t) {
          var n = t.match.params.statusId
          return L.a.select(e, n)
        },
        B = function (e, t) {
          return (function (e, t) {
            var n
            return null === (n = e[k].tweetReactionTimelines[t]) || void 0 === n ? void 0 : n.tweetReactionTimeline
          })(e, t.match.params.statusId)
        },
        N = function (e, t) {
          return (function (e, t) {
            var n
            return (null === (n = e[k].tweetReactionTimelines[t]) || void 0 === n ? void 0 : n.fetchStatus) || R.a.NONE
          })(e, t.match.params.statusId)
        },
        x = Object(w.a)()
          .propsFromState(function () {
            return { tweet: H, fetchStatus: N, reactionTimeline: B, screenName: F, statusId: D }
          })
          .propsFromActions(function () {
            return {
              fetchTweetReactionTimeline: j,
              createLocalApiErrorHandler: Object(_.createLocalApiErrorHandlerWithContextFactory)(
                'TWEET_ACTIVITY_REACTIONS',
              ),
            }
          })
          .withAnalytics({ page: 'reactions_detail' }),
        U = n('jHSc'),
        M = n('3XMw'),
        W = n.n(M),
        K = n('TEoO'),
        Y = n('Re5t'),
        q = n('MWbm'),
        G = n('de1q'),
        J = n('t62R'),
        X = n('k/OQ'),
        V = n('FIs5'),
        Z = n('G1WX'),
        Q = n('rHpw'),
        z = n('v6aA'),
        $ = n('88ay')
      function ee(e, t) {
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
      function te(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ee(Object(n), !0).forEach(function (t) {
                b()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ee(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function ne(e) {
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
      var re = W.a.aca3184d,
        oe = W.a.h7f7183f,
        ie = { Like: W.a.d4c3c63a, Haha: W.a.d40cca4c, Hmm: W.a.cb46dd2a, Sad: W.a.b65bb361, Cheer: W.a.d02b6077 },
        ce = W.a.jeb4436c,
        ae = W.a.db29b5a9,
        le = W.a.c0098d49,
        se = W.a.d58baa7e,
        ue = function (e) {
          return Object($.e)(e)
        },
        de = function (e) {
          return e.index.toString()
        },
        pe = (function (e) {
          p()(n, e)
          var t = ne(n)
          function n() {
            var e
            c()(this, n)
            for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a]
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
                  c = null === (t = r.state) || void 0 === t ? void 0 : t.reactionType
                return (
                  c &&
                    i &&
                    (i = i.filter(function (e) {
                      return e.reactionType === c
                    })),
                  E.createElement(
                    E.Fragment,
                    null,
                    e._renderTabs(),
                    i
                      ? E.createElement(K.a, {
                          accessibilityRole: 'tablist',
                          accessibilityTitle: le,
                          assumedItemHeight: 75,
                          cacheKey: 'tweetActivityReactions',
                          identityFunction: de,
                          items: i.map(function (e, t) {
                            return te(te({}, e), {}, { index: t })
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
                var r = n && se(n)
                return {
                  isActive: e._isActive,
                  key: t,
                  to: { state: { reactionType: t, lockScroll: !0 }, pathname: location.pathname },
                  label: E.createElement(
                    q.a,
                    { style: fe.tab },
                    E.createElement(G.a, {
                      legacyHeart: e._reactionsLegacyHeartEnabled,
                      reactionType: t,
                      style: fe.tabDecoration,
                      withAnimation: !1,
                    }),
                    E.createElement(J.b, null, ie[t]({ count: r || '' })),
                  ),
                }
              }),
              b()(u()(e), '_renderTabs', function () {
                var t = e.props,
                  n = t.location,
                  r = t.reactionTimeline,
                  i = null == r ? void 0 : r.reactionCounts,
                  c =
                    i &&
                    i.filter(function (e) {
                      return e.count > 0
                    }).length > 1,
                  a =
                    (i &&
                      i.reduce(function (e, t) {
                        return (t.count || 0) + e
                      }, 0)) ||
                    0,
                  l = a && se(a)
                if (!c || !i) return null
                var s = i
                    .sort(function (e, t) {
                      return t.count - e.count
                    })
                    .filter(function (e) {
                      return e.count > 0
                    }),
                  u = [{ isActive: e._isActive, key: 'all', to: n.pathname, label: oe({ count: l }) }].concat(
                    o()(
                      s.map(function (t) {
                        return e._getTab(t.type, t.count)
                      }),
                    ),
                  )
                return E.createElement(X.a, { links: u })
              }),
              b()(u()(e), '_renderEmptyState', function () {
                return E.createElement(V.a, { header: ce, message: ae })
              }),
              b()(u()(e), '_itemRenderer', function (t, n) {
                var r = E.createElement(G.a, {
                  legacyHeart: e._reactionsLegacyHeartEnabled,
                  reactionType: t.reactionType,
                  style: fe.avatarDecoration,
                  withAnimation: !1,
                })
                return (
                  n && n(!0),
                  E.createElement($.b, {
                    avatarDecoration: r,
                    decoration: ue,
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
                  return E.createElement(
                    U.b,
                    { backLocation: '/'.concat(r.toLowerCase(), '/status/').concat(o), history: n, title: le },
                    E.createElement(Z.a, {
                      accessibilityLabel: re,
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
        })(E.PureComponent)
      b()(pe, 'contextType', z.a)
      var fe = Q.a.create(function (e) {
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
        me = x(pe)
      t.default = me
    },
  },
])
//# sourceMappingURL=WIPED
