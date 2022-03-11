;(window.webpackJsonp = window.webpackJsonp || []).push([
  [248],
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
          return ce
        })
      var n = r('m3Bd'),
        o = r.n(n),
        i = r('yiKp'),
        c = r.n(i),
        a = r('VrFO'),
        s = r.n(a),
        l = r('Y9Ll'),
        u = r.n(l),
        d = r('1Pcy'),
        p = r.n(d),
        h = r('5Yy7'),
        m = r.n(h),
        f = r('2VqO'),
        v = r.n(f),
        b = r('KEM+'),
        y = r.n(b),
        S = r('97Jx'),
        C = r.n(S),
        _ = (r('1t7P'), r('jQ/y'), r('ho0z'), r('2G9S'), r('hBpG'), r('7x/C'), r('ERkP')),
        k = r.n(_),
        g = r('6rlp'),
        I = r('zh9S'),
        w = r('G6rE'),
        E = r('rxPX'),
        A = r('0KEI'),
        R = function (e, t) {
          return w.e.select(e, t.userId)
        },
        P = function (e, t) {
          return t.promotedContent
        },
        T = Object(E.a)()
          .propsFromState(function () {
            return { promotedContent: P, user: R }
          })
          .adjustStateProps(function (e) {
            var t = e.promotedContent,
              r = e.user
            return { promotedContent: t || (r ? r.promoted_content : void 0), user: r }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(A.createLocalApiErrorHandlerWithContextFactory)('USER_CELL_CONTAINER'),
              log: g.a,
              scribeAction: I.c,
            }
          }),
        x = r('I57f'),
        L = r('vMjK'),
        B = r('MWbm'),
        F = r('IG7M'),
        M = r('rHpw'),
        D = function (e) {
          var t = e.children,
            r = e.promotedContent,
            n = e.user
          return k.a.createElement(
            B.a,
            { style: U.decorationWrapper },
            t,
            k.a.createElement(F.a, {
              renderActionMenu: function (e) {
                return k.a.createElement(L.b, { onClose: e, promotedContent: r, user: n, view: 'follower' })
              },
              style: U.actionMenu,
            }),
          )
        },
        U = M.a.create(function (e) {
          return { decorationWrapper: { flexDirection: 'row' }, actionMenu: { marginLeft: e.spaces.space12 } }
        }),
        N = r('uIZp'),
        j = r('mN6z'),
        O = r('caTy'),
        q = r('3IPs'),
        H = r('Rp9C'),
        Y = r('X04g'),
        K = r('Re5t'),
        J = r('TnY3'),
        W = r('hxu0'),
        z = r('v6aA'),
        G = r('7JQg'),
        Q = r('nBUg'),
        V = r('IMA+'),
        X = r('cFuS'),
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
                C()({}, e, {
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
        promotedItemType: X.c.USER,
        shouldScribeProfileClick: !0,
        shouldScribeImpression: !1,
        withFollowsYou: !1,
      }
      var ee = function (e) {
          var t = e.isDeviceFollowing,
            r = e.userId
          return k.a.createElement(x.a, { isFollowing: t, style: ie.followButton, userId: r })
        },
        te = function (e) {
          var t = e.loggedInUserId,
            r = e.promotedContent,
            n = e.userId
          return t !== n
            ? k.a.createElement(N.a, { promotedContent: r, size: 'small', style: ie.followButton, userId: n })
            : null
        },
        re = function (e) {
          return k.a.createElement(D, { promotedContent: e.promotedContent, user: e.user }, te(e))
        },
        ne = function (e) {
          return k.a.createElement(F.a, {
            renderActionMenu: function (t) {
              return k.a.createElement(L.b, {
                onClose: t,
                promotedContent: e.promotedContent,
                user: e.user,
                view: 'rito_flagged_accounts',
              })
            },
          })
        },
        oe = (function (e) {
          m()(r, e)
          var t = v()(r)
          function r() {
            var e
            s()(this, r)
            for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              y()(p()(e), '_handleAvatarClick', function () {
                var t = e.props.shouldScribeProfileClick
                e._handleSaveAsRecentSearch(),
                  t && e._scribeAction({ element: 'avatar', action: 'profile_click' }),
                  e._handleAsyncPromotedEvent(X.b.PROFILE_IMAGE_CLICK)
              }),
              y()(p()(e), '_handleCellClick', function () {
                var t = e.props,
                  r = t.history,
                  n = t.onClick,
                  o = t.screenName,
                  i = t.user,
                  c = e._getPromotedTweetState()
                e._handleSaveAsRecentSearch(),
                  e._handleScreenNameClick(),
                  n ? n({ user: i, state: c }) : r.push({ pathname: '/'.concat(o), state: c || void 0 })
              }),
              y()(p()(e), '_handleScreenNameClick', function () {
                var t = e.props.shouldScribeProfileClick
                e._handleSaveAsRecentSearch(),
                  t && e._scribeAction({ action: 'profile_click' }),
                  e._handleAsyncPromotedEvent(X.b.SCREEN_NAME_CLICK)
              }),
              y()(p()(e), '_handleSaveAsRecentSearch', function () {
                var t = e.props,
                  r = t.saveAsRecentSearch,
                  n = t.shouldStoreTypeaheadItem,
                  o = t.userId
                r && n && n(Y.a.ItemType.USER) && r({ user: { id: o, type: q.a.User } })
              }),
              y()(p()(e), '_scribeAction', function (t) {
                var r,
                  n = e.props,
                  o = n.promotedContent,
                  i = n.scribeAction,
                  a = n.scribeData,
                  s = n.scribeNamespace,
                  l = n.user,
                  u = n.userId,
                  d =
                    null == a || null === (r = a.items) || void 0 === r
                      ? void 0
                      : r.find(function (e) {
                          return e.item_type === Y.a.ItemType.USER && e.id === u
                        }),
                  p = a.search_details,
                  h = { items: [c()(c()({}, d), H.a.getUserItem(l, o))], profile_id: u, search_details: p }
                i(c()(c()({}, s), t), h)
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
                  return !Object(j.a)(this.props, e)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    r = t.avatarDecoration,
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
                    c =
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
                    a = t.user,
                    s = o()(t, Z)
                  return this._shouldRender()
                    ? k.a.createElement(
                        Q.b.Provider,
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
                          V.a,
                          C()({}, s, {
                            avatarDecoration: r,
                            bottomControl: this._renderBottomControl(),
                            decoration: this._renderDecoration(),
                            highlightedLabel: this._getHighlightedLabel(),
                            isBlocking: a.blocking,
                            onAvatarClick: this._handleAvatarClick,
                            onCellClick: n ? this._handleCellClick : void 0,
                            onScreenNameClick: this._handleScreenNameClick,
                            socialContext: c
                              ? {
                                  contextType: c.contextType,
                                  text: c.text,
                                  link: c.landingUrl ? Object(O.b)(c.landingUrl) : void 0,
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
                    r = this.props,
                    n = r.displayMode,
                    o = r.followRequestReceived,
                    i = r.isAutoblocking,
                    c = r.isBlocking,
                    a = r.isDeviceFollowing,
                    s = r.isFollowing,
                    l = r.promotedContent,
                    u = r.screenName,
                    d = r.user,
                    p = r.userId
                  return 'function' == typeof e
                    ? e({
                        displayMode: n,
                        followRequestReceived: o,
                        isAutoblocking: i,
                        isBlocking: c,
                        isDeviceFollowing: !!a,
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
                  return t && r === X.c.TWEET ? { promotedTweetState: t } : null
                },
              },
              {
                key: '_handleAsyncPromotedEvent',
                value: function (e) {
                  var t = this.props,
                    r = t.createLocalApiErrorHandler,
                    n = t.log,
                    o = t.promotedContent,
                    i = t.promotedItemId,
                    c = t.promotedItemType,
                    a = t.userId
                  o &&
                    n({
                      disclosureType: o.disclosure_type,
                      itemId: i || a,
                      itemType: c,
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
                    i = e.shouldScribeImpression,
                    c = e.userId
                  if (n && o === X.c.USER) {
                    var a = n.disclosure_type,
                      s = n.impression_id
                    r({
                      disclosureType: a,
                      itemId: c,
                      itemType: X.c.USER,
                      params: { event: X.b.IMPRESSION, impression_id: s },
                    }).catch(t())
                  } else i && this._scribeAction({ action: 'impression' })
                },
              },
            ]),
            r
          )
        })(k.a.Component)
      y()(oe, 'contextType', z.a), y()(oe, 'defaultProps', $.defaultProps)
      var ie = M.a.create(function (e) {
          return { followButton: { marginLeft: e.spaces.space12 } }
        }),
        ce = Object(J.a)(Object(W.a)(T($)))
      t.b = Object(G.a)({ element: 'user' })(ce)
    },
    hxu0: function (e, t, r) {
      'use strict'
      var n = r('97Jx'),
        o = r.n(n),
        i = r('ERkP'),
        c = r.n(i),
        a = r('vqbU')
      t.a = function (e) {
        return function (t) {
          return c.a.createElement(a.a.Consumer, null, function (r) {
            return c.a.createElement(e, o()({}, t, { isInSidebar: r }))
          })
        }
      }
    },
    lX7a: function (e, t, r) {
      'use strict'
      r.r(t)
      r('jQ3i'), r('x4t0')
      var n = r('ezF+'),
        o = r('VPAj'),
        i = function (e) {
          return e ? { disclosure_type: e.disclosureType, impression_id: e.impressionId } : void 0
        },
        c = r('Rp9C'),
        a = r('ERkP'),
        s = r.n(a),
        l = r('wtjx'),
        u = r('rxPX'),
        d = Object(u.a)()
          .propsFromActions(function () {
            return { saveAsRecentSearch: l.a }
          })
          .withAnalytics(),
        p = r('cFuS'),
        h = r('88ay'),
        m = function (e) {
          var t = e.analytics,
            r = e.cellClickable,
            n = e.decoration,
            o = e.entry,
            c = e.onClick,
            a = e.saveAsRecentSearch,
            l = e.shouldScribeImpression,
            u = e.shouldScribeProfileClick,
            d = e.shouldStoreTypeaheadItem,
            m = e.withFollowsYou,
            f = e.withLink,
            v = o.content,
            b = v.id,
            y = v.promotedMetadata,
            S = v.socialContext,
            C = n || h.e,
            _ = i(y),
            k = (S && S.generalContext) || void 0,
            g = e.displayMode
          return s.a.createElement(h.a, {
            cellClickable: r,
            decoration: C,
            displayMode: g,
            onClick: c,
            promotedContent: _,
            promotedItemType: p.c.USER,
            saveAsRecentSearch: a,
            scribeData: t.contextualScribeData,
            scribeNamespace: t.contextualScribeNamespace,
            shouldScribeImpression: l,
            shouldScribeProfileClick: u,
            shouldStoreTypeaheadItem: d,
            socialContext: k,
            userId: b,
            withFollowsYou: m,
            withLink: f,
          })
        },
        f = d(s.a.memo(m)),
        v = r('Re5t'),
        b = [h.e, h.f]
      t.default = function (e) {
        var t = e.cellClickable,
          r = void 0 === t || t,
          a = e.decoration,
          s = e.displayMode,
          l = void 0 === s ? v.a.UserCompact : s,
          u = e.onClick,
          d = e.shouldScribeProfileClick,
          p = void 0 === d || d,
          h = e.shouldScribeImpression,
          m = void 0 !== h && h,
          y = e.shouldStoreTypeaheadItem,
          S = e.withLink,
          C = void 0 === S || S
        return n
          .b({
            component: f,
            defaultScribeNamespace: { element: 'user' },
            getScribeDataItem: function (e) {
              var t = e.content,
                r = t.id,
                n = t.promotedMetadata,
                o = e.cursor,
                a = e.itemMetadata,
                s = e.position,
                l = a.clientEventInfo,
                u = i(n)
              return c.a.getUserItem({ id_str: r, promoted_content: u }, void 0, s, o, l)
            },
            isFocusable: Object(o.a)(!0),
          })
          .getHandler(function () {
            return {
              cellClickable: r,
              decoration: a,
              displayMode: l,
              onClick: u,
              shouldScribeProfileClick: p,
              shouldScribeImpression: m,
              shouldStoreTypeaheadItem: y,
              withLink: C,
              withFollowsYou: !a || b.includes(a),
            }
          })
      }
    },
    wtjx: function (e, t, r) {
      'use strict'
      r.d(t, 'g', function () {
        return m
      }),
        r.d(t, 'f', function () {
          return f
        }),
        r.d(t, 'e', function () {
          return v
        }),
        r.d(t, 'd', function () {
          return C
        }),
        r.d(t, 'b', function () {
          return k
        }),
        r.d(t, 'a', function () {
          return I
        }),
        r.d(t, 'c', function () {
          return w
        })
      var n = r('KEM+'),
        o = r.n(n),
        i = r('yiKp'),
        c = r.n(i),
        a = (r('7x/C'), r('JtPf'), r('LW0h'), r('Ee2X'), r('Ssj5')),
        s = r('RqPI'),
        l = 'recentSearches',
        u = 'rweb.recentSearches',
        d = function (e) {
          return function (t, r, n) {
            return n.userPersistence.set(u, { recentSearches: e }).catch(function () {
              Promise.resolve()
            })
          }
        },
        p = function (e, t) {
          var r = []
          if (e && e.user) {
            var n = e.user
            r = t.filter(function (e) {
              return e.keyword || e.topic || e.event || (e.user && e.user.id !== n.id)
            })
          } else if (e && e.topic) {
            var o = e.topic
            r = t.filter(function (e) {
              return e.keyword || e.user || e.event || (e.topic && e.topic.id !== o.id)
            })
          } else if (e && e.event) {
            var i = e.event
            r = t.filter(function (e) {
              return e.keyword || e.user || e.topic || (e.event && e.event.id !== i.id)
            })
          } else if (e && e.keyword) {
            var c = e.keyword
            r = t.filter(function (e) {
              return (e.keyword && e.keyword.query !== c.query) || e.user || e.topic || e.event
            })
          }
          return r
        },
        h = { fetched: !1, recentSearches: [] }
      var m = function (e) {
          return e.recentSearches.recentSearches
        },
        f = function (e) {
          return m(e)[0] || null
        },
        v = function (e) {
          return e.recentSearches.fetched
        },
        b = 'rweb/recentSearches/INIT_FROM_CACHE',
        y = function (e) {
          return { type: b, payload: e }
        },
        S = 'rweb/recentSearches/REMOVE_QUERY',
        C = function (e) {
          return function (t, r, n) {
            n.userPersistence
            t({ payload: e, type: S })
            var o = r().recentSearches
            return Object(s.m)(r()) ? t(d(o.recentSearches)) : Promise.resolve()
          }
        },
        _ = 'rweb/recentSearches/CLEAR_ALL',
        k = function () {
          return function (e, t, r) {
            r.userPersistence
            e({ type: _ })
            var n = t().recentSearches
            return Object(s.m)(t()) ? e(d(n.recentSearches)) : Promise.resolve()
          }
        },
        g = 'rweb/recentSearches/ADD_QUERY',
        I = function (e) {
          return function (t, r, n) {
            n.userPersistence
            t({ payload: e, type: g })
            var o = r().recentSearches
            return Object(s.m)(r()) ? t(d(o.recentSearches)) : Promise.resolve()
          }
        },
        w = function () {
          return function (e, t, r) {
            r.userPersistence
            return t().recentSearches.fetched
              ? Promise.resolve()
              : e(function (e, t, r) {
                  var n = r.userPersistence,
                    o = t()
                  return Object(s.m)(o)
                    ? n
                        .get(u)
                        .then(function (t) {
                          e(y(t))
                        })
                        .catch(function () {
                          e(y())
                        })
                    : (e(y()), Promise.resolve())
                })
          }
        }
      a.a.register(
        o()({}, l, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case g:
              var r = t.payload,
                n = r ? p(r, e.recentSearches) : []
              return n.length > 49 && n.splice(49, 1), r && n.unshift(r), c()(c()({}, e), {}, { recentSearches: n })
            case S:
              var o = t.payload,
                i = o ? p(o, e.recentSearches) : []
              return c()(c()({}, e), {}, { recentSearches: i })
            case _:
              return { fetched: !0, recentSearches: [] }
            case b:
              return c()(c()(c()({}, e), t.payload), {}, { fetched: !0 })
            default:
              return e
          }
        }),
      )
    },
  },
])
//# sourceMappingURL=WIPED
