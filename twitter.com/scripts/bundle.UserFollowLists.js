;(window.webpackJsonp = window.webpackJsonp || []).push([
  [104],
  {
    '88ay': function (e, t, o) {
      'use strict'
      o.d(t, 'c', function () {
        return te
      }),
        o.d(t, 'e', function () {
          return oe
        }),
        o.d(t, 'f', function () {
          return re
        }),
        o.d(t, 'd', function () {
          return ne
        }),
        o.d(t, 'a', function () {
          return ce
        })
      o('OZaJ'), o('+KXO'), o('LW0h'), o('daRM'), o('jwue'), o('+oxZ'), o('FtHn')
      var r = o('m3Bd'),
        n = o.n(r),
        l = o('VrFO'),
        i = o.n(l),
        c = o('Y9Ll'),
        a = o.n(c),
        s = o('1Pcy'),
        u = o.n(s),
        d = o('5Yy7'),
        f = o.n(d),
        p = o('N+ot'),
        h = o.n(p),
        m = o('AuHH'),
        w = o.n(m),
        y = o('KEM+'),
        b = o.n(y),
        v = o('97Jx'),
        _ = o.n(v),
        g = (o('1t7P'), o('jQ/y'), o('ho0z'), o('2G9S'), o('hBpG'), o('ERkP')),
        I = o.n(g),
        O = o('6rlp'),
        E = o('zh9S'),
        k = o('G6rE'),
        C = o('rxPX'),
        S = o('0KEI'),
        R = function (e, t) {
          return k.e.select(e, t.userId)
        },
        F = function (e, t) {
          return t.promotedContent
        },
        A = Object(C.a)()
          .propsFromState(function () {
            return { promotedContent: F, user: R }
          })
          .adjustStateProps(function (e) {
            var t = e.promotedContent,
              o = e.user
            return { promotedContent: t || (o ? o.promoted_content : void 0), user: o }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(S.createLocalApiErrorHandlerWithContextFactory)('USER_CELL_CONTAINER'),
              log: O.a,
              scribeAction: E.c,
            }
          }),
        P = o('I57f'),
        L = o('vMjK'),
        j = o('MWbm'),
        N = o('IG7M'),
        B = o('rHpw'),
        T = function (e) {
          var t = e.children,
            o = e.promotedContent,
            r = e.user
          return I.a.createElement(
            j.a,
            { style: U.decorationWrapper },
            t,
            I.a.createElement(N.a, {
              renderActionMenu: function (e) {
                return I.a.createElement(L.b, { onClose: e, promotedContent: o, user: r, view: 'follower' })
              },
              style: U.actionMenu,
            }),
          )
        },
        U = B.a.create(function (e) {
          return { decorationWrapper: { flexDirection: 'row' }, actionMenu: { marginLeft: e.spaces.space12 } }
        }),
        x = o('uIZp'),
        M = o('mN6z'),
        D = o('caTy'),
        K = o('3IPs'),
        G = o('Rp9C'),
        H = o('X04g'),
        q = o('Re5t'),
        W = o('TnY3'),
        Q = o('hxu0'),
        Y = o('v6aA'),
        z = o('7JQg'),
        J = o('IMA+'),
        X = o('cFuS')
      function Z(e, t) {
        var o = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            o.push.apply(o, r)
        }
        return o
      }
      function V(e) {
        for (var t = 1; t < arguments.length; t++) {
          var o = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Z(Object(o), !0).forEach(function (t) {
                b()(e, t, o[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o))
            : Z(Object(o)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
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
          var o,
            r = w()(e)
          if (t) {
            var n = w()(this).constructor
            o = Reflect.construct(r, arguments, n)
          } else o = r.apply(this, arguments)
          return h()(this, o)
        }
      }
      var ee = function (e) {
        var t = e.user
        return t && t.profile_image_url_https
          ? I.a.createElement(
              le,
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
      ee.defaultProps = {
        cellClickable: !0,
        decoration: null,
        displayMode: q.a.UserCompact,
        followRequestReceived: !1,
        hideBlocked: !1,
        promotedItemType: X.c.USER,
        shouldScribeProfileClick: !0,
        shouldScribeImpression: !1,
        withFollowsYou: !1,
      }
      var te = function (e) {
          var t = e.isDeviceFollowing,
            o = e.userId
          return I.a.createElement(P.a, { isFollowing: t, style: ie.followButton, userId: o })
        },
        oe = function (e) {
          var t = e.loggedInUserId,
            o = e.promotedContent,
            r = e.userId
          return t !== r
            ? I.a.createElement(x.a, { promotedContent: o, size: 'small', style: ie.followButton, userId: r })
            : null
        },
        re = function (e) {
          return I.a.createElement(T, { promotedContent: e.promotedContent, user: e.user }, oe(e))
        },
        ne = function (e) {
          return I.a.createElement(N.a, {
            renderActionMenu: function (t) {
              return I.a.createElement(L.b, {
                onClose: t,
                promotedContent: e.promotedContent,
                user: e.user,
                view: 'rito_flagged_accounts',
              })
            },
          })
        },
        le = (function (e) {
          f()(o, e)
          var t = $(o)
          function o() {
            var e
            i()(this, o)
            for (var r = arguments.length, n = new Array(r), l = 0; l < r; l++) n[l] = arguments[l]
            return (
              (e = t.call.apply(t, [this].concat(n))),
              b()(u()(e), '_handleAvatarClick', function () {
                var t = e.props.shouldScribeProfileClick
                e._handleSaveAsRecentSearch(),
                  t && e._scribeAction({ element: 'avatar', action: 'profile_click' }),
                  e._handleAsyncPromotedEvent(X.b.PROFILE_IMAGE_CLICK)
              }),
              b()(u()(e), '_handleCellClick', function () {
                var t = e.props,
                  o = t.history,
                  r = t.onClick,
                  n = t.screenName,
                  l = t.user,
                  i = e._getPromotedTweetState()
                e._handleSaveAsRecentSearch(),
                  e._handleScreenNameClick(),
                  r ? r({ user: l, state: i }) : o.push({ pathname: '/'.concat(n), state: i || void 0 })
              }),
              b()(u()(e), '_handleScreenNameClick', function () {
                var t = e.props.shouldScribeProfileClick
                e._handleSaveAsRecentSearch(),
                  t && e._scribeAction({ action: 'profile_click' }),
                  e._handleAsyncPromotedEvent(X.b.SCREEN_NAME_CLICK)
              }),
              b()(u()(e), '_handleSaveAsRecentSearch', function () {
                var t = e.props,
                  o = t.saveAsRecentSearch,
                  r = t.shouldStoreTypeaheadItem,
                  n = t.userId
                o && r && r(H.a.ItemType.USER) && o({ user: { id: n, type: K.a.User } })
              }),
              b()(u()(e), '_scribeAction', function (t) {
                var o,
                  r = e.props,
                  n = r.promotedContent,
                  l = r.scribeAction,
                  i = r.scribeData,
                  c = r.scribeNamespace,
                  a = r.user,
                  s = r.userId,
                  u =
                    null == i || null === (o = i.items) || void 0 === o
                      ? void 0
                      : o.find(function (e) {
                          return e.item_type === H.a.ItemType.USER && e.id === s
                        }),
                  d = i.search_details,
                  f = { items: [V(V({}, u), G.a.getUserItem(a, n))], profile_id: s, search_details: d }
                l(V(V({}, c), t), f)
              }),
              e
            )
          }
          return (
            a()(o, [
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
                    o = (e.bottomControl, e.cellClickable),
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
                    l =
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
                    c = n()(e, [
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
                    ? I.a.createElement(
                        J.a,
                        _()({}, c, {
                          avatarDecoration: t,
                          bottomControl: this._renderBottomControl(),
                          decoration: this._renderDecoration(),
                          highlightedLabel: this._getHighlightedLabel(),
                          isBlocking: i.blocking,
                          onAvatarClick: this._handleAvatarClick,
                          onCellClick: o ? this._handleCellClick : void 0,
                          onScreenNameClick: this._handleScreenNameClick,
                          socialContext: l
                            ? {
                                contextType: l.contextType,
                                text: l.text,
                                link: l.landingUrl ? Object(D.b)(l.landingUrl) : void 0,
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
                    o = this.props,
                    r = o.displayMode,
                    n = o.followRequestReceived,
                    l = o.isAutoblocking,
                    i = o.isBlocking,
                    c = o.isDeviceFollowing,
                    a = o.isFollowing,
                    s = o.promotedContent,
                    u = o.screenName,
                    d = o.user,
                    f = o.userId
                  return 'function' == typeof e
                    ? e({
                        displayMode: r,
                        followRequestReceived: n,
                        isAutoblocking: l,
                        isBlocking: i,
                        isDeviceFollowing: !!c,
                        isFollowing: !!a,
                        loggedInUserId: t,
                        promotedContent: s,
                        screenName: u,
                        user: d,
                        userId: f,
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
                    r = e.isBlocking,
                    n = e.screenName
                  return e.userId && n && !(t && (o || r))
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
                    r = t.log,
                    n = t.promotedContent,
                    l = t.promotedItemId,
                    i = t.promotedItemType,
                    c = t.userId
                  n &&
                    r({
                      disclosureType: n.disclosure_type,
                      itemId: l || c,
                      itemType: i,
                      params: { event: e, impression_id: n.impression_id },
                    }).catch(o())
                },
              },
              {
                key: '_handleImpression',
                value: function () {
                  var e = this.props,
                    t = e.createLocalApiErrorHandler,
                    o = e.log,
                    r = e.promotedContent,
                    n = e.promotedItemType,
                    l = e.shouldScribeImpression,
                    i = e.userId
                  if (r && n === X.c.USER) {
                    var c = r.disclosure_type,
                      a = r.impression_id
                    o({
                      disclosureType: c,
                      itemId: i,
                      itemType: X.c.USER,
                      params: { event: X.b.IMPRESSION, impression_id: a },
                    }).catch(t())
                  } else l && this._scribeAction({ action: 'impression' })
                },
              },
            ]),
            o
          )
        })(I.a.Component)
      b()(le, 'contextType', Y.a), b()(le, 'defaultProps', ee.defaultProps)
      var ie = B.a.create(function (e) {
          return { followButton: { marginLeft: e.spaces.space12 } }
        }),
        ce = Object(W.a)(Object(Q.a)(A(ee)))
      t.b = Object(z.c)({ element: 'user' })(ce)
    },
    hxu0: function (e, t, o) {
      'use strict'
      var r = o('97Jx'),
        n = o.n(r),
        l = o('ERkP'),
        i = o.n(l),
        c = o('vqbU')
      t.a = function (e) {
        return function (t) {
          return i.a.createElement(c.a.Consumer, null, function (o) {
            return i.a.createElement(e, n()({}, t, { isInSidebar: o }))
          })
        }
      }
    },
    k1Tk: function (e, t, o) {
      'use strict'
      o.r(t),
        o.d(t, 'FollowersScreen', function () {
          return fe
        })
      o('OZaJ')
      var r = o('VrFO'),
        n = o.n(r),
        l = o('Y9Ll'),
        i = o.n(l),
        c = o('1Pcy'),
        a = o.n(c),
        s = o('5Yy7'),
        u = o.n(s),
        d = o('N+ot'),
        f = o.n(d),
        p = o('AuHH'),
        h = o.n(p),
        m = o('KEM+'),
        w = o.n(m),
        y = (o('2G9S'), o('ho0z'), o('ERkP')),
        b = o.n(y),
        v = o('es0u'),
        _ = (o('WNMA'), o('KqXw'), o('XnvM')),
        g = (o('LW0h'), o('z84I'), o('8UdT')),
        I = o('WpDa'),
        O = o('ZNT5'),
        E = o('G6rE'),
        k = o('hqKg'),
        C = o('0KEI'),
        S = o('oEGd'),
        R = o('RqPI'),
        F = function (e, t) {
          return t.match.params.screenName
        },
        A = Object(k.createSelector)(
          function (e, t) {
            var o = (function (e, t) {
              return E.e.selectIdByScreenName(e, F(0, t))
            })(e, t)
            return o ? _.c(e, o) : void 0
          },
          function (e) {
            return e
          },
        ),
        P = Object(k.createSelector)(
          function (e, t) {
            return E.e.selectFetchStatusByScreenName(e, F(0, t))
          },
          R.l,
          function (e, t) {
            return t.match.params.followersSubroute
          },
          F,
          function (e, t) {
            return E.e.selectByScreenName(e, F(0, t))
          },
          R.q,
          A,
          function (e, t, o, r, n, l, i) {
            return {
              fetchStatus: e,
              isActiveCreator: t,
              mode: o,
              screenName: r,
              user: n,
              loggedInUserId: l,
              knownFollowersCount: i,
            }
          },
        ),
        L = {
          cleanupOwnFollowersList: function (e) {
            return function (t, o) {
              var r = o()
              t(
                e
                  .selectEntries(r)
                  .filter(function (e) {
                    if (!e.content || e.type !== g.b.User) return !1
                    var t = e.content.id,
                      o = E.e.select(r, t)
                    return o && !o.followed_by
                  })
                  .map(function (t) {
                    return e.removeEntry(t.entryId)
                  }),
              )
            }
          },
          createLocalApiErrorHandler: Object(C.createLocalApiErrorHandlerWithContextFactory)('USER_PROFILE_FOLLOWERS'),
          fetchOneUserByScreenNameIfNeeded: E.e.fetchOneByScreenNameIfNeeded,
          fetchKnownFollowersIfNeeded: _.a,
        },
        j = Object(S.g)(P, L),
        N = (o('+KXO'), o('1t7P'), o('daRM'), o('jwue'), o('+oxZ'), o('FtHn'), o('QIgh')),
        B = o('88ay'),
        T = o('Ka9G')
      function U(e, t) {
        var o = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            o.push.apply(o, r)
        }
        return o
      }
      function x(e) {
        for (var t = 1; t < arguments.length; t++) {
          var o = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? U(Object(o), !0).forEach(function (t) {
                w()(e, t, o[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o))
            : U(Object(o)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
              })
        }
        return e
      }
      var M = function (e) {
          var t = e.withFollowerActionMenu,
            o = void 0 !== t && t
          return x(x({}, Object(N.a)({})), {}, w()({}, g.b.User, Object(T.a)({ decoration: o ? B.f : void 0 })))
        },
        D = o('7wqI'),
        K = o('GOQE'),
        G = o('v//M'),
        H = o('oQhu'),
        q = o('yoO3'),
        W = o('txMZ'),
        Q = o('5FtR'),
        Y = o('fTQJ'),
        z = o('VS6U'),
        J = o('v6aA'),
        X = o('FIs5'),
        Z = o('k/OQ'),
        V = o('3XMw'),
        $ = o.n(V)
      function ee(e) {
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
          var o,
            r = h()(e)
          if (t) {
            var n = h()(this).constructor
            o = Reflect.construct(r, arguments, n)
          } else o = r.apply(this, arguments)
          return f()(this, o)
        }
      }
      var te = $.a.fe9d3af9,
        oe = $.a.fbce8dbd,
        re = {
          superfollowers: $.a.ab7fc3ee,
          followers_you_follow: $.a.j0d17377,
          followers: $.a.fa9e827f,
          following: $.a.ha979be5,
        },
        ne = {
          superfollowers: $.a.aa4209e8,
          followers_you_follow: $.a.i099d32d,
          followers: $.a.c64974fb,
          following: $.a.d960b55b,
        },
        le = {
          superfollowers: $.a.ed51baba,
          followers_you_follow: $.a.g65f4bab,
          followers: $.a.g65f4bab,
          following: $.a.f9b11c03,
        },
        ie = {
          superfollowers: $.a.a1f9e34c,
          followers_you_follow: $.a.j029a4db,
          followers: $.a.j029a4db,
          following: $.a.fdf1390e,
        },
        ce = {
          superfollowers: $.a.j759a7c2,
          followers_you_follow: $.a.d74ee2e2,
          followers: $.a.f69e85ed,
          following: $.a.ae5749c6,
        },
        ae = {
          superfollowers: $.a.b2f3c46a,
          followers_you_follow: $.a.ec251f36,
          followers: $.a.c0455f4a,
          following: $.a.i8bd07a9,
        },
        se = {
          superfollowers: function (e) {
            return Object(O.a)({
              timelineId: 'superFollowersGraphQL-'.concat(e),
              getEndpoint: function (e) {
                return e.Graphql.fetchSuperFollowers
              },
              getEndpointParams: function (e) {
                var t = e.count,
                  o = e.cursor
                return { count: t, cursor: 'string' == typeof o ? o : void 0 }
              },
              context: 'FETCH_SUPER_FOLLOWERS',
              perfKey: 'superFollowersGraphQL',
              formatResponse: I.a,
            })
          },
          followers_you_follow: function (e) {
            return Object(O.a)({
              timelineId: 'followersYouKnowGraphQL-'.concat(e),
              getEndpoint: function (e) {
                return e.Graphql.fetchFollowersYouKnow
              },
              getEndpointParams: function (t) {
                var o = t.count,
                  r = t.cursor
                return { count: o, cursor: 'string' == typeof r ? r : void 0, userId: e }
              },
              context: 'FETCH_FOLLOWERS_YOU_KNOW',
              perfKey: 'followersYouKnowGraphQL',
              formatResponse: I.a,
            })
          },
          followers: function (e) {
            return Object(O.a)({
              timelineId: 'followersGraphQL-'.concat(e),
              getEndpoint: function (e) {
                return e.Graphql.fetchFollowers
              },
              getEndpointParams: function (t) {
                var o = t.count,
                  r = t.cursor
                return { count: o, cursor: 'string' == typeof r ? r : void 0, userId: e }
              },
              context: 'FETCH_FOLLOWERS',
              perfKey: 'followersGraphQL',
              formatResponse: I.a,
            })
          },
          following: function (e) {
            return Object(O.a)({
              timelineId: 'followingGraphQL-'.concat(e),
              getEndpoint: function (e) {
                return e.Graphql.fetchFollowing
              },
              getEndpointParams: function (t) {
                var o = t.count,
                  r = t.cursor
                return { count: o, cursor: 'string' == typeof r ? r : void 0, userId: e }
              },
              context: 'FETCH_FOLLOWING',
              perfKey: 'followingGraphQL',
              formatResponse: I.a,
            })
          },
        },
        ue = Object(H.a)(function (e, t) {
          return e && se[t](e)
        }),
        de = Object(H.a)(function (e, t, o, r) {
          return function () {
            var n = t === e,
              l = n && 'following' === r ? oe : void 0,
              i = n && 'following' === r ? '/i/connect_people' : void 0,
              c = n ? le[r] : ce[r]({ screenName: o }),
              a = n ? ie[r] : ae[r]
            return b.a.createElement(X.a, { buttonLink: i, buttonText: l, header: c, message: a })
          }
        }),
        fe = (function (e) {
          u()(o, e)
          var t = ee(o)
          function o() {
            var e
            n()(this, o)
            for (var r = arguments.length, l = new Array(r), i = 0; i < r; i++) l[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(l))),
              w()(a()(e), '_render', function () {
                var t = e.props,
                  o = t.loggedInUserId,
                  r = t.mode,
                  n = t.screenName,
                  l = t.user,
                  i = ue(null == l ? void 0 : l.id_str, r),
                  c = de(o, null == l ? void 0 : l.id_str, n, r),
                  a =
                    e._isOwnProfile() &&
                    'followers' === r &&
                    e.context.featureSwitches.isTrue('followers_management_remove_follower_from_followers_list')
                return i
                  ? b.a.createElement(Y.a, {
                      entryConfiguration: e._getMemoizedEntryConfiguration(a),
                      loadingAccessibilityLabel: te,
                      module: i,
                      renderEmptyState: c,
                      title: ne[r],
                    })
                  : null
              }),
              w()(
                a()(e),
                '_getMemoizedEntryConfiguration',
                Object(H.a)(function (e) {
                  return M({ withFollowerActionMenu: e })
                }),
              ),
              w()(a()(e), '_handleFetchUser', function () {
                var t = e.props,
                  o = t.createLocalApiErrorHandler
                ;(0, t.fetchOneUserByScreenNameIfNeeded)(t.screenName).catch(o(K.a))
              }),
              e
            )
          }
          return (
            i()(o, [
              {
                key: 'UNSAFE_componentWillMount',
                value: function () {
                  this._handleFetchUser()
                },
              },
              {
                key: 'componentDidMount',
                value: function () {
                  this._handleCleanup(this.props.mode), this._fetchKnownFollowersIfNeeded()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  e.mode !== this.props.mode && this._handleCleanup(this.props.mode),
                    this._fetchKnownFollowersIfNeeded()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    o = e.history,
                    r = e.isActiveCreator,
                    n = e.knownFollowersCount,
                    l = e.loggedInUserId,
                    i = e.mode,
                    c = e.screenName,
                    a = e.user,
                    s = re[i]({ screenName: c, fullName: a ? a.name : '' }),
                    u = this._isOwnProfile(),
                    d = u && r,
                    f = !a || Object(D.b)({ isOwnProfile: u, user: a }),
                    p = 'superfollowers' === i ? d : f,
                    h = [
                      a && l === a.id_str && r
                        ? { key: 'superfollowers', to: '/'.concat(c, '/superfollowers'), label: ne.superfollowers }
                        : null,
                      a && l !== a.id_str && n
                        ? {
                            key: 'followers_you_follow',
                            to: '/'.concat(c, '/followers_you_follow'),
                            label: ne.followers_you_follow,
                          }
                        : null,
                      { key: 'followers', to: '/'.concat(c, '/followers'), label: ne.followers },
                      { key: 'following', to: '/'.concat(c, '/following'), label: ne.following },
                    ]
                  return p
                    ? b.a.createElement(
                        W.a,
                        { scribeSection: i, userId: a && a.id_str },
                        b.a.createElement(
                          q.a,
                          null,
                          b.a.createElement(z.a, {
                            backLocation: '/'.concat(c),
                            documentTitle: s,
                            history: o,
                            primaryContent: b.a.createElement(G.a, {
                              accessibilityLabel: te,
                              fetchStatus: t,
                              onRequestRetry: this._handleFetchUser,
                              render: this._render,
                            }),
                            secondaryBar: b.a.createElement(Z.a, { links: h }),
                            sidebarContent: b.a.createElement(v.a, null),
                            subtitle: '@'.concat(c),
                            title: a ? a.name : null,
                          }),
                        ),
                      )
                    : b.a.createElement(Q.a, { to: '/'.concat(c) })
                },
              },
              {
                key: '_fetchKnownFollowersIfNeeded',
                value: function () {
                  var e = this.props,
                    t = e.createLocalApiErrorHandler,
                    o = e.fetchKnownFollowersIfNeeded,
                    r = e.loggedInUserId,
                    n = e.user,
                    l = n && n.protected && !n.following && n.id_str !== r
                  n && n.id_str && !l && o(n.id_str).catch(t({}))
                },
              },
              {
                key: '_isOwnProfile',
                value: function () {
                  var e = this.props,
                    t = e.loggedInUserId,
                    o = e.user
                  return !(!o || o.id_str !== t)
                },
              },
              {
                key: '_handleCleanup',
                value: function (e) {
                  if ('followers' === e && this._isOwnProfile()) {
                    var t = this.props,
                      o = t.cleanupOwnFollowersList,
                      r = t.user,
                      n = ue(null == r ? void 0 : r.id_str, e)
                    n && o(n)
                  }
                },
              },
            ]),
            o
          )
        })(b.a.Component)
      w()(fe, 'contextType', J.a)
      t.default = j(fe)
    },
  },
])
//# sourceMappingURL=WIPED
