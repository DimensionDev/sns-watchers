;(window.webpackJsonp = window.webpackJsonp || []).push([
  [237],
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
          return ae
        })
      o('OZaJ'), o('+KXO'), o('LW0h'), o('daRM'), o('jwue'), o('+oxZ'), o('FtHn')
      var r = o('m3Bd'),
        n = o.n(r),
        i = o('VrFO'),
        c = o.n(i),
        a = o('Y9Ll'),
        l = o.n(a),
        s = o('1Pcy'),
        u = o.n(s),
        d = o('5Yy7'),
        p = o.n(d),
        m = o('N+ot'),
        h = o.n(m),
        f = o('AuHH'),
        v = o.n(f),
        b = o('KEM+'),
        y = o.n(b),
        C = o('97Jx'),
        g = o.n(C),
        _ = (o('1t7P'), o('jQ/y'), o('ho0z'), o('2G9S'), o('hBpG'), o('ERkP')),
        k = o.n(_),
        I = o('6rlp'),
        S = o('zh9S'),
        w = o('G6rE'),
        R = o('rxPX'),
        A = o('0KEI'),
        E = function (e, t) {
          return w.e.select(e, t.userId)
        },
        P = function (e, t) {
          return t.promotedContent
        },
        O = Object(R.a)()
          .propsFromState(function () {
            return { promotedContent: P, user: E }
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
        T = o('I57f'),
        B = o('vMjK'),
        j = o('MWbm'),
        D = o('IG7M'),
        x = o('rHpw'),
        F = function (e) {
          var t = e.children,
            o = e.promotedContent,
            r = e.user
          return k.a.createElement(
            j.a,
            { style: L.decorationWrapper },
            t,
            k.a.createElement(D.a, {
              renderActionMenu: function (e) {
                return k.a.createElement(B.b, { onClose: e, promotedContent: o, user: r, view: 'follower' })
              },
              style: L.actionMenu,
            }),
          )
        },
        L = x.a.create(function (e) {
          return { decorationWrapper: { flexDirection: 'row' }, actionMenu: { marginLeft: e.spaces.space12 } }
        }),
        M = o('uIZp'),
        N = o('mN6z'),
        U = o('caTy'),
        H = o('3IPs'),
        q = o('Rp9C'),
        K = o('X04g'),
        G = o('Re5t'),
        J = o('TnY3'),
        W = o('hxu0'),
        z = o('v6aA'),
        Y = o('7JQg'),
        X = o('IMA+'),
        Q = o('cFuS')
      function V(e, t) {
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
      function Z(e) {
        for (var t = 1; t < arguments.length; t++) {
          var o = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? V(Object(o), !0).forEach(function (t) {
                y()(e, t, o[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o))
            : V(Object(o)).forEach(function (t) {
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
            r = v()(e)
          if (t) {
            var n = v()(this).constructor
            o = Reflect.construct(r, arguments, n)
          } else o = r.apply(this, arguments)
          return h()(this, o)
        }
      }
      var ee = function (e) {
        var t = e.user
        return t && t.profile_image_url_https
          ? k.a.createElement(
              ie,
              g()({}, e, {
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
        displayMode: G.a.UserCompact,
        followRequestReceived: !1,
        hideBlocked: !1,
        promotedItemType: Q.c.USER,
        shouldScribeProfileClick: !0,
        shouldScribeImpression: !1,
        withFollowsYou: !1,
      }
      var te = function (e) {
          var t = e.isDeviceFollowing,
            o = e.userId
          return k.a.createElement(T.a, { isFollowing: t, style: ce.followButton, userId: o })
        },
        oe = function (e) {
          var t = e.loggedInUserId,
            o = e.promotedContent,
            r = e.userId
          return t !== r
            ? k.a.createElement(M.a, { promotedContent: o, size: 'small', style: ce.followButton, userId: r })
            : null
        },
        re = function (e) {
          return k.a.createElement(F, { promotedContent: e.promotedContent, user: e.user }, oe(e))
        },
        ne = function (e) {
          return k.a.createElement(D.a, {
            renderActionMenu: function (t) {
              return k.a.createElement(B.b, {
                onClose: t,
                promotedContent: e.promotedContent,
                user: e.user,
                view: 'rito_flagged_accounts',
              })
            },
          })
        },
        ie = (function (e) {
          p()(o, e)
          var t = $(o)
          function o() {
            var e
            c()(this, o)
            for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++) n[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(n))),
              y()(u()(e), '_handleAvatarClick', function () {
                var t = e.props.shouldScribeProfileClick
                e._handleSaveAsRecentSearch(),
                  t && e._scribeAction({ element: 'avatar', action: 'profile_click' }),
                  e._handleAsyncPromotedEvent(Q.b.PROFILE_IMAGE_CLICK)
              }),
              y()(u()(e), '_handleCellClick', function () {
                var t = e.props,
                  o = t.history,
                  r = t.onClick,
                  n = t.screenName,
                  i = t.user,
                  c = e._getPromotedTweetState()
                e._handleSaveAsRecentSearch(),
                  e._handleScreenNameClick(),
                  r ? r({ user: i, state: c }) : o.push({ pathname: '/'.concat(n), state: c || void 0 })
              }),
              y()(u()(e), '_handleScreenNameClick', function () {
                var t = e.props.shouldScribeProfileClick
                e._handleSaveAsRecentSearch(),
                  t && e._scribeAction({ action: 'profile_click' }),
                  e._handleAsyncPromotedEvent(Q.b.SCREEN_NAME_CLICK)
              }),
              y()(u()(e), '_handleSaveAsRecentSearch', function () {
                var t = e.props,
                  o = t.saveAsRecentSearch,
                  r = t.shouldStoreTypeaheadItem,
                  n = t.userId
                o && r && r(K.a.ItemType.USER) && o({ user: { id: n, type: H.a.User } })
              }),
              y()(u()(e), '_scribeAction', function (t) {
                var o,
                  r = e.props,
                  n = r.promotedContent,
                  i = r.scribeAction,
                  c = r.scribeData,
                  a = r.scribeNamespace,
                  l = r.user,
                  s = r.userId,
                  u =
                    null == c || null === (o = c.items) || void 0 === o
                      ? void 0
                      : o.find(function (e) {
                          return e.item_type === K.a.ItemType.USER && e.id === s
                        }),
                  d = c.search_details,
                  p = { items: [Z(Z({}, u), q.a.getUserItem(l, n))], profile_id: s, search_details: d }
                i(Z(Z({}, a), t), p)
              }),
              e
            )
          }
          return (
            l()(o, [
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
                    a = n()(e, [
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
                    ? k.a.createElement(
                        X.a,
                        g()({}, a, {
                          avatarDecoration: t,
                          bottomControl: this._renderBottomControl(),
                          decoration: this._renderDecoration(),
                          highlightedLabel: this._getHighlightedLabel(),
                          isBlocking: c.blocking,
                          onAvatarClick: this._handleAvatarClick,
                          onCellClick: o ? this._handleCellClick : void 0,
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
                    o = this.props,
                    r = o.displayMode,
                    n = o.followRequestReceived,
                    i = o.isAutoblocking,
                    c = o.isBlocking,
                    a = o.isDeviceFollowing,
                    l = o.isFollowing,
                    s = o.promotedContent,
                    u = o.screenName,
                    d = o.user,
                    p = o.userId
                  return 'function' == typeof e
                    ? e({
                        displayMode: r,
                        followRequestReceived: n,
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
                  return t && o === Q.c.TWEET ? { promotedTweetState: t } : null
                },
              },
              {
                key: '_handleAsyncPromotedEvent',
                value: function (e) {
                  var t = this.props,
                    o = t.createLocalApiErrorHandler,
                    r = t.log,
                    n = t.promotedContent,
                    i = t.promotedItemId,
                    c = t.promotedItemType,
                    a = t.userId
                  n &&
                    r({
                      disclosureType: n.disclosure_type,
                      itemId: i || a,
                      itemType: c,
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
                    i = e.shouldScribeImpression,
                    c = e.userId
                  if (r && n === Q.c.USER) {
                    var a = r.disclosure_type,
                      l = r.impression_id
                    o({
                      disclosureType: a,
                      itemId: c,
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
      y()(ie, 'contextType', z.a), y()(ie, 'defaultProps', ee.defaultProps)
      var ce = x.a.create(function (e) {
          return { followButton: { marginLeft: e.spaces.space12 } }
        }),
        ae = Object(J.a)(Object(W.a)(O(ee)))
      t.b = Object(Y.c)({ element: 'user' })(ae)
    },
    hxu0: function (e, t, o) {
      'use strict'
      var r = o('97Jx'),
        n = o.n(r),
        i = o('ERkP'),
        c = o.n(i),
        a = o('vqbU')
      t.a = function (e) {
        return function (t) {
          return c.a.createElement(a.a.Consumer, null, function (o) {
            return c.a.createElement(e, n()({}, t, { isInSidebar: o }))
          })
        }
      }
    },
    lX7a: function (e, t, o) {
      'use strict'
      o.r(t)
      o('jQ3i'), o('x4t0')
      var r = o('ezF+'),
        n = o('wtjx'),
        i = o('RgK2'),
        c = o.n(i),
        a = o('cFuS'),
        l = o('Rp9C'),
        s = o('Re5t'),
        u = o('VPAj'),
        d = o('fs1G'),
        p = o('88ay'),
        m = function (e) {
          return e ? { disclosure_type: e.disclosureType, impression_id: e.impressionId } : void 0
        },
        h = [p.e, p.f]
      t.default = function (e) {
        var t = e.cellClickable,
          o = void 0 === t || t,
          i = e.decoration,
          f = e.displayMode,
          v = void 0 === f ? s.a.UserCompact : f,
          b = e.onClick,
          y = e.shouldScribeProfileClick,
          C = void 0 === y || y,
          g = e.shouldScribeImpression,
          _ = void 0 !== g && g,
          k = e.shouldStoreTypeaheadItem,
          I = e.withLink,
          S = void 0 === I || I,
          w = i || p.e
        return r.g({
          component: p.a,
          selectData: Object(u.a)(c.a),
          bindActions: function () {
            return { saveAsRecentSearch: n.a }
          },
          defaultScribeNamespace: { element: 'user' },
          createProps: function (e) {
            var t = e.actions.saveAsRecentSearch,
              r = e.entry,
              n = e.scribeData,
              i = e.scribeNamespace,
              c = r.content,
              l = c.id,
              s = c.promotedMetadata,
              u = c.socialContext,
              d = m(s),
              p = (u && u.generalContext) || void 0
            return {
              decoration: w,
              displayMode: v,
              shouldStoreTypeaheadItem: k,
              promotedContent: d,
              promotedItemType: a.c.USER,
              scribeData: n,
              scribeNamespace: i,
              userId: l,
              withFollowsYou: h.includes(w),
              socialContext: p,
              withLink: S,
              cellClickable: o,
              shouldScribeProfileClick: C,
              shouldScribeImpression: _,
              onClick: b,
              saveAsRecentSearch: t,
            }
          },
          onImpression: d.a,
          getScribeDataItem: function (e) {
            var t = e.content,
              o = t.id,
              r = t.promotedMetadata,
              n = e.cursor,
              i = e.itemMetadata,
              c = e.position,
              a = i.clientEventInfo,
              s = m(r)
            return l.a.getUserItem({ id_str: o, promoted_content: s }, void 0, c, n, a)
          },
          isFocusable: Object(u.a)(!0),
        })
      }
    },
  },
])
//# sourceMappingURL=WIPED
