;(window.webpackJsonp = window.webpackJsonp || []).push([
  [36],
  {
    '88ay': function (e, t, n) {
      'use strict'
      n.d(t, 'c', function () {
        return $
      }),
        n.d(t, 'e', function () {
          return ee
        }),
        n.d(t, 'f', function () {
          return te
        }),
        n.d(t, 'd', function () {
          return ne
        }),
        n.d(t, 'a', function () {
          return ie
        })
      var a = n('m3Bd'),
        r = n.n(a),
        i = n('yiKp'),
        o = n.n(i),
        s = n('VrFO'),
        c = n.n(s),
        l = n('Y9Ll'),
        d = n.n(l),
        u = n('1Pcy'),
        p = n.n(u),
        h = n('5Yy7'),
        m = n.n(h),
        f = n('2VqO'),
        g = n.n(f),
        b = n('KEM+'),
        v = n.n(b),
        y = n('97Jx'),
        E = n.n(y),
        C = (n('1t7P'), n('jQ/y'), n('ho0z'), n('2G9S'), n('hBpG'), n('7x/C'), n('ERkP')),
        S = n.n(C),
        w = n('6rlp'),
        I = n('zh9S'),
        _ = n('G6rE'),
        k = n('rxPX'),
        x = n('0KEI'),
        P = function (e, t) {
          return _.e.select(e, t.userId)
        },
        R = function (e, t) {
          return t.promotedContent
        },
        L = Object(k.a)()
          .propsFromState(function () {
            return { promotedContent: R, user: P }
          })
          .adjustStateProps(function (e) {
            var t = e.promotedContent,
              n = e.user
            return { promotedContent: t || (n ? n.promoted_content : void 0), user: n }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(x.createLocalApiErrorHandlerWithContextFactory)('USER_CELL_CONTAINER'),
              log: w.a,
              scribeAction: I.c,
            }
          }),
        A = n('I57f'),
        B = n('vMjK'),
        D = n('MWbm'),
        F = n('IG7M'),
        H = n('rHpw'),
        O = function (e) {
          var t = e.children,
            n = e.promotedContent,
            a = e.user
          return S.a.createElement(
            D.a,
            { style: T.decorationWrapper },
            t,
            S.a.createElement(F.a, {
              renderActionMenu: function (e) {
                return S.a.createElement(B.b, { onClose: e, promotedContent: n, user: a, view: 'follower' })
              },
              style: T.actionMenu,
            }),
          )
        },
        T = H.a.create(function (e) {
          return { decorationWrapper: { flexDirection: 'row' }, actionMenu: { marginLeft: e.spaces.space12 } }
        }),
        U = n('uIZp'),
        j = n('mN6z'),
        N = n('caTy'),
        M = n('3IPs'),
        z = n('Rp9C'),
        W = n('X04g'),
        G = n('Re5t'),
        q = n('TnY3'),
        J = n('hxu0'),
        V = n('v6aA'),
        K = n('7JQg'),
        X = n('IMA+'),
        Y = n('cFuS'),
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
            ? S.a.createElement(
                ae,
                E()({}, e, {
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
        promotedItemType: Y.c.USER,
        shouldScribeProfileClick: !0,
        shouldScribeImpression: !1,
        withFollowsYou: !1,
      }
      var $ = function (e) {
          var t = e.isDeviceFollowing,
            n = e.userId
          return S.a.createElement(A.a, { isFollowing: t, style: re.followButton, userId: n })
        },
        ee = function (e) {
          var t = e.loggedInUserId,
            n = e.promotedContent,
            a = e.userId
          return t !== a
            ? S.a.createElement(U.a, { promotedContent: n, size: 'small', style: re.followButton, userId: a })
            : null
        },
        te = function (e) {
          return S.a.createElement(O, { promotedContent: e.promotedContent, user: e.user }, ee(e))
        },
        ne = function (e) {
          return S.a.createElement(F.a, {
            renderActionMenu: function (t) {
              return S.a.createElement(B.b, {
                onClose: t,
                promotedContent: e.promotedContent,
                user: e.user,
                view: 'rito_flagged_accounts',
              })
            },
          })
        },
        ae = (function (e) {
          m()(n, e)
          var t = g()(n)
          function n() {
            var e
            c()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              v()(p()(e), '_handleAvatarClick', function () {
                var t = e.props.shouldScribeProfileClick
                e._handleSaveAsRecentSearch(),
                  t && e._scribeAction({ element: 'avatar', action: 'profile_click' }),
                  e._handleAsyncPromotedEvent(Y.b.PROFILE_IMAGE_CLICK)
              }),
              v()(p()(e), '_handleCellClick', function () {
                var t = e.props,
                  n = t.history,
                  a = t.onClick,
                  r = t.screenName,
                  i = t.user,
                  o = e._getPromotedTweetState()
                e._handleSaveAsRecentSearch(),
                  e._handleScreenNameClick(),
                  a ? a({ user: i, state: o }) : n.push({ pathname: '/'.concat(r), state: o || void 0 })
              }),
              v()(p()(e), '_handleScreenNameClick', function () {
                var t = e.props.shouldScribeProfileClick
                e._handleSaveAsRecentSearch(),
                  t && e._scribeAction({ action: 'profile_click' }),
                  e._handleAsyncPromotedEvent(Y.b.SCREEN_NAME_CLICK)
              }),
              v()(p()(e), '_handleSaveAsRecentSearch', function () {
                var t = e.props,
                  n = t.saveAsRecentSearch,
                  a = t.shouldStoreTypeaheadItem,
                  r = t.userId
                n && a && a(W.a.ItemType.USER) && n({ user: { id: r, type: M.a.User } })
              }),
              v()(p()(e), '_scribeAction', function (t) {
                var n,
                  a = e.props,
                  r = a.promotedContent,
                  i = a.scribeAction,
                  s = a.scribeData,
                  c = a.scribeNamespace,
                  l = a.user,
                  d = a.userId,
                  u =
                    null == s || null === (n = s.items) || void 0 === n
                      ? void 0
                      : n.find(function (e) {
                          return e.item_type === W.a.ItemType.USER && e.id === d
                        }),
                  p = s.search_details,
                  h = { items: [o()(o()({}, u), z.a.getUserItem(l, r))], profile_id: d, search_details: p }
                i(o()(o()({}, c), t), h)
              }),
              e
            )
          }
          return (
            d()(n, [
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
                    n = (e.bottomControl, e.cellClickable),
                    a =
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
                    o = e.user,
                    s = r()(e, Q)
                  return this._shouldRender()
                    ? S.a.createElement(
                        X.a,
                        E()({}, s, {
                          avatarDecoration: t,
                          bottomControl: this._renderBottomControl(),
                          decoration: this._renderDecoration(),
                          highlightedLabel: this._getHighlightedLabel(),
                          isBlocking: o.blocking,
                          onAvatarClick: this._handleAvatarClick,
                          onCellClick: n ? this._handleCellClick : void 0,
                          onScreenNameClick: this._handleScreenNameClick,
                          socialContext: i
                            ? {
                                contextType: i.contextType,
                                text: i.text,
                                link: i.landingUrl ? Object(N.b)(i.landingUrl) : void 0,
                              }
                            : void 0,
                          withDarkerInteractiveBackground: a,
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
                    a = n.displayMode,
                    r = n.followRequestReceived,
                    i = n.isAutoblocking,
                    o = n.isBlocking,
                    s = n.isDeviceFollowing,
                    c = n.isFollowing,
                    l = n.promotedContent,
                    d = n.screenName,
                    u = n.user,
                    p = n.userId
                  return 'function' == typeof e
                    ? e({
                        displayMode: a,
                        followRequestReceived: r,
                        isAutoblocking: i,
                        isBlocking: o,
                        isDeviceFollowing: !!s,
                        isFollowing: !!c,
                        loggedInUserId: t,
                        promotedContent: l,
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
                    n = e.isBlockedBy,
                    a = e.isBlocking,
                    r = e.screenName
                  return e.userId && r && !(t && (n || a))
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
                  return t && n === Y.c.TWEET ? { promotedTweetState: t } : null
                },
              },
              {
                key: '_handleAsyncPromotedEvent',
                value: function (e) {
                  var t = this.props,
                    n = t.createLocalApiErrorHandler,
                    a = t.log,
                    r = t.promotedContent,
                    i = t.promotedItemId,
                    o = t.promotedItemType,
                    s = t.userId
                  r &&
                    a({
                      disclosureType: r.disclosure_type,
                      itemId: i || s,
                      itemType: o,
                      params: { event: e, impression_id: r.impression_id },
                    }).catch(n())
                },
              },
              {
                key: '_handleImpression',
                value: function () {
                  var e = this.props,
                    t = e.createLocalApiErrorHandler,
                    n = e.log,
                    a = e.promotedContent,
                    r = e.promotedItemType,
                    i = e.shouldScribeImpression,
                    o = e.userId
                  if (a && r === Y.c.USER) {
                    var s = a.disclosure_type,
                      c = a.impression_id
                    n({
                      disclosureType: s,
                      itemId: o,
                      itemType: Y.c.USER,
                      params: { event: Y.b.IMPRESSION, impression_id: c },
                    }).catch(t())
                  } else i && this._scribeAction({ action: 'impression' })
                },
              },
            ]),
            n
          )
        })(S.a.Component)
      v()(ae, 'contextType', V.a), v()(ae, 'defaultProps', Z.defaultProps)
      var re = H.a.create(function (e) {
          return { followButton: { marginLeft: e.spaces.space12 } }
        }),
        ie = Object(q.a)(Object(J.a)(L(Z)))
      t.b = Object(K.c)({ element: 'user' })(ie)
    },
    BXJq: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return c
      })
      var a = n('ddV6'),
        r = n.n(a),
        i = (n('7x/C'), n('JtPf'), n('Qavd'), n('ERkP')),
        o = n.n(i),
        s = n('dgjd')
      function c(e) {
        var t = Object(s.a)(e),
          n = t.handlers,
          a = t.space,
          i = o.a.useState(!1),
          c = r()(i, 2),
          l = c[0],
          d = c[1],
          u = { hasReminderSet: !1, onClick: void 0, scheduledStart: void 0 }
        return (
          (function (e) {
            return e && e.host && e.scheduled_start && ('NotStarted' === e.state || 'PrePublished' === e.state)
          })(a) &&
            ((u.hasReminderSet = Boolean(null == a ? void 0 : a.is_subscribed)),
            (u.onClick = function () {
              var e = function () {
                return d(!1)
              }
              d(!0), u.hasReminderSet ? n.unsubscribe().finally(e) : n.subscribe().finally(e)
            }),
            (u.scheduledStart = null == a ? void 0 : a.scheduled_start)),
          { props: u, isSubscribing: l }
        )
      }
    },
    'Fg/a': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return H
      })
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        s = n('1Pcy'),
        c = n.n(s),
        l = n('5Yy7'),
        d = n.n(l),
        u = n('2VqO'),
        p = n.n(u),
        h = n('KEM+'),
        m = n.n(h),
        f = (n('2G9S'), n('849X'), n('TJCb'), n('ERkP')),
        g = n.n(f),
        b = n('Pc/x'),
        v = n('6/RC'),
        y = (n('KqXw'), n('WNMA'), n('Z5jE')),
        E = n('rxPX'),
        C = function (e, t) {
          return Object(y.a)(t.match)
        },
        S = function (e) {
          return function (t, n, a) {
            return a.api.AudioSpaces.byId(e, { isMetatagsQuery: !0 })
          }
        },
        w = Object(E.a)()
          .propsFromState(function () {
            return { broadcastId: C }
          })
          .propsFromActions(function () {
            return { fetchAudioSpace: S }
          }),
        I = (n('1t7P'), n('jQ/y'), n('3XMw')),
        _ = n.n(I),
        k = n('rJoH'),
        x = n('Rumh'),
        P = n('AooF')
      function R(e) {
        var t = e.space
        if (!t) return null
        var n = (function (e) {
          var t = (function (e) {
              var t,
                n,
                a,
                r,
                i = null == e || null === (t = e.host) || void 0 === t ? void 0 : t.display_name,
                o = i ? L.hostSpace({ name: i }) : L.hostSpaceFallback,
                s = e.title || o,
                c = L.descriptionGeneric,
                l = (null == e ? void 0 : e.participants.total) || 0,
                d = x.a.formatCountShort(l),
                u = L.descriptionListening({ count: d })
              if (e.state === P.a.SpaceState.Running)
                (n = L.titleRunning({ spaceTitle: s })),
                  (a = L.descriptionFormatRunning({ hostSpace: o, descriptionListening: u, descriptionGeneric: c })),
                  (r = A.ttl.Frequent)
              else if (e.state === P.a.SpaceState.NotStarted || e.state === P.a.SpaceState.PrePublished) {
                var p = L.scheduledSpaceGeneric
                ;(n = L.titleScheduled({ date: p, spaceTitle: s })),
                  (a = L.descriptionFormatScheduled({ hostSpace: o, descriptionGeneric: c })),
                  (r = A.ttl.Frequent)
              } else
                (n = L.titleEnded({ spaceTitle: s })),
                  (a = L.descriptionFormatEnded({ hostSpace: o, descriptionGeneric: c })),
                  (r = A.ttl.LongLivedCache)
              var h = 'https://twitter.com/i/spaces/'.concat(e.rest_id)
              return { title: n, canonical: h, description: a, ttl: r }
            })(e),
            n = t.canonical,
            a = t.description,
            r = t.title,
            i = t.ttl
          return {
            type: 'website',
            canonical: n,
            title: r,
            description: a,
            image: A.image.url,
            imageType: A.image.type,
            imageW: A.image.width,
            imageH: A.image.height,
            imageAlt: A.image.alt,
            ttl: i,
          }
        })(t)
        return g.a.createElement(k.a, n)
      }
      var L = {
          twitterSpaces: _.a.gaa01f2c,
          hostSpace: _.a.b6d3e0ee,
          hostSpaceFallback: _.a.ab4fc8bb,
          descriptionGeneric: _.a.fec3c1ef,
          descriptionListeners: _.a.ce447fcb,
          descriptionListening: _.a.ef7da97e,
          scheduledSpaceGeneric: _.a.f8464691,
          titleRunning: _.a.a065e7e7,
          titleScheduled: _.a.hd5e7b20,
          titleEnded: _.a.f826f7ee,
          descriptionFormatRunning: _.a.b2a94e92,
          descriptionFormatScheduled: _.a.f6432ce5,
          descriptionFormatEnded: _.a.f6432ce5,
        },
        A = {
          ttl: { Frequent: 300, LongLivedCache: 86400 },
          image: {
            type: 'image/jpeg',
            url: 'https://abs.twimg.com/sticky/cards/TwitterSpacesCardImage.2.jpg',
            width: 1200,
            height: 630,
            alt: L.twitterSpaces,
          },
        },
        B = n('G8HL'),
        D = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (e = t.call.apply(t, [this].concat(i))), m()(c()(e), 'state', { space: null }), e
          }
          return (
            o()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this
                  this.props
                    .fetchAudioSpace(this.props.broadcastId)
                    .catch(function () {
                      return null
                    })
                    .then(function (t) {
                      !t || t instanceof Error || e.setState({ space: t })
                    })
                },
              },
              {
                key: 'render',
                value: function () {
                  return g.a.createElement(
                    g.a.Fragment,
                    null,
                    g.a.createElement(F, this.props),
                    g.a.createElement(R, { space: this.state.space }),
                  )
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      function F(e) {
        return (
          g.a.useEffect(function () {
            v.canUseDOM && b.a.proxsee.login()
          }, []),
          e.children
        )
      }
      var H = w(Object(B.a)(D))
    },
    UUFr: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'default', function () {
          return ze
        })
      var a = n('97Jx'),
        r = n.n(a),
        i = (n('KqXw'), n('WNMA'), n('ERkP')),
        o = n.n(i),
        s = n('Fg/a'),
        c = n('Z5jE'),
        l = n('yiKp'),
        d = n.n(l),
        u = (n('7xRU'), n('v6aA')),
        p = n('3XMw'),
        h = n.n(p),
        m = n('t62R'),
        f = n('rHpw')
      function g(e) {
        return o.a.createElement(
          m.b,
          { numberOfLines: 1, size: 'headline1', style: v.container, weight: 'bold' },
          b.connecting,
        )
      }
      var b = { connecting: h.a.e4e811fb },
        v = f.a.create(function (e) {
          return { container: { paddingBottom: e.spaces.space48 } }
        }),
        y = n('Pc/x'),
        E = (n('z84I'), n('p3P5')),
        C = n('m3Bd'),
        S = n.n(C),
        w = n('ddV6'),
        I = n.n(w),
        _ = n('hOZg'),
        k = n('RqPI')
      var x = n('zCf4'),
        P = n('uDfI'),
        R = n('dgjd'),
        L = n('mjJ+'),
        A = n('/yvb'),
        B = n('FXw/'),
        D = n('GCOQ')
      function F(e) {
        var t = (function (e) {
            var t = Object(x.f)(),
              n = Object(R.a)(e).utils,
              a = Object(P.d)(k.m),
              r = [],
              i = {
                Icon: D.a,
                isEmphasized: !0,
                onClick: function () {
                  n.scribe(':audiospace::caret:report:click'),
                    t.push(
                      (function (e) {
                        return '/i/spaces/'.concat(e, '/peek/report')
                      })(e),
                    )
                },
                text: H.reportThisSpace,
              }
            a && r.push(i)
            return { items: r }
          })(e.audioSpaceId),
          n = o.a.useState(!1),
          a = I()(n, 2),
          r = a[0],
          i = a[1]
        if (t.items.length < 1) return null
        var s = r
          ? o.a.createElement(L.a, {
              isFixed: !0,
              items: t.items,
              onCloseRequested: function () {
                return i(!1)
              },
              shouldCloseOnClick: !0,
            })
          : null
        return o.a.createElement(
          o.a.Fragment,
          null,
          o.a.createElement(A.a, {
            accessibilityLabel: H.more,
            borderColor: 'transparent',
            color: 'text',
            hoverLabel: { label: H.more },
            icon: o.a.createElement(B.a, null),
            onPress: function () {
              return i(!0)
            },
            pullRight: e.pullRight,
            size: 'medium',
          }),
          s,
        )
      }
      var H = { more: h.a.h63a5c3b, reportThisSpace: h.a.b3481ffd },
        O = n('0nhk'),
        T = n('xVWt')
      var U = n('MWbm'),
        j = n('sgih'),
        N = ['Content', 'CustomHeader', 'withoutDescription', 'withoutPadding'],
        M = ['Content', 'CustomHeader', 'shellLayout', 'withoutDescription', 'withoutPadding']
      function z(e) {
        var t,
          n,
          a,
          i,
          s,
          c = {
            type: 'bottom',
            accessibilityRole: 'menu',
            onMaskClick: e.onClose,
            allowBackNavigation: !0,
            withKeyboardNavigation: !0,
            withMask: !0,
          },
          l =
            ((t = o.a.useState(null)),
            (n = I()(t, 2)),
            (a = n[0]),
            (i = n[1]),
            (s = o.a.useMemo(
              function () {
                if (!a)
                  return function (e) {
                    var t = e.nativeEvent.layout
                    t && i(t)
                  }
              },
              [a],
            )),
            [a, s]),
          d = I()(l, 2),
          u = d[0],
          p = d[1],
          h = [V.sheetContainer, e.withoutPadding && V.withoutPadding]
        return o.a.createElement(
          j.a,
          c,
          o.a.createElement(
            U.a,
            { onLayout: p, style: h },
            o.a.createElement(U.a, { style: V.sheetSpacerTop }),
            o.a.createElement(W, e),
            o.a.createElement(G, e),
            o.a.createElement(q, r()({}, e, { shellLayout: u })),
          ),
        )
      }
      function W(e) {
        e.Content, e.CustomHeader, e.withoutDescription, e.withoutPadding
        var t = S()(e, N),
          n = o.a.createElement(
            A.a,
            r()(
              {
                accessibilityLabel: X.close,
                icon: o.a.createElement(_.a, { style: V.closeIcon }),
                onPress: e.onClose,
                pullLeft: !0,
              },
              K,
            ),
          )
        if (e.CustomHeader) return o.a.createElement(e.CustomHeader, r()({}, t, { closeButton: n }))
        var a = e.space.rest_id
        return o.a.createElement(
          U.a,
          { style: V.header },
          o.a.createElement(U.a, { style: V.headerLeft }, n),
          o.a.createElement(
            U.a,
            { style: V.headerRight },
            o.a.createElement(
              U.a,
              { style: V.headerRightItem },
              o.a.createElement(O.a, { audioSpaceId: a, type: 'icon-borderless' }),
            ),
            o.a.createElement(
              U.a,
              { style: V.headerRightItem },
              o.a.createElement(F, { audioSpaceId: a, pullRight: !0 }),
            ),
          ),
        )
      }
      function G(e) {
        return e.withoutDescription
          ? null
          : o.a.createElement(
              U.a,
              { style: V.descriptionContainer },
              o.a.createElement(T.b, { audioSpaceId: e.space.rest_id }),
            )
      }
      function q(e) {
        if (!e.Content) return null
        e.Content, e.CustomHeader
        var t = e.shellLayout,
          n = (e.withoutDescription, e.withoutPadding, S()(e, M))
        return o.a.createElement(
          U.a,
          { style: [V.content, e.withoutPadding && V.withoutPadding] },
          o.a.createElement(e.Content, r()({}, n, { onClose: e.onClose, shellLayout: t })),
        )
      }
      function J(e) {
        return { sheetContainer: { paddingHorizontal: e.spacesPx.space16 } }
      }
      var V = f.a.create(function (e) {
          var t = J(e),
            n = { height: e.spacesPx.space24 },
            a = d()({ flex: 1 }, t.sheetContainer),
            r = { flex: 1, paddingVertical: e.spacesPx.space20 },
            i = { marginLeft: e.spaces.space8 },
            o = { paddingVertical: e.spacesPx.space16 },
            s = e.spacesPx.space24
          return {
            sheetSpacerTop: n,
            sheetContainer: a,
            withoutPadding: { paddingHorizontal: 0, paddingVertical: 0 },
            content: r,
            header: { flexDirection: 'row' },
            headerLeft: { flex: 1, alignItems: 'flex-start' },
            headerRight: { flexDirection: 'row' },
            headerRightItem: i,
            descriptionContainer: o,
            closeIcon: { width: s, height: s },
          }
        }),
        K = { borderColor: 'transparent', color: 'text', size: 'medium' },
        X = { close: h.a.ia5e7487 }
      function Y(e, t) {
        var n,
          a,
          r = t.width,
          i = t.height,
          o =
            ((n = f.a.theme),
            (a = J(n)),
            {
              getHorizontal: function (e) {
                return e - 2 * a.sheetContainer.paddingHorizontal
              },
            }),
          s = Object(E.b)(f.a.theme),
          c = f.a.theme.spacesPx.space40,
          l = i * $ - c - e.height,
          d = r > f.a.theme.breakpoints.medium ? Math.min(Q, r * Z) : r,
          u = o.getHorizontal(d),
          p = s.getHeight(),
          h = s.getWidth(),
          m = Math.min(4, Math.floor(l / p)),
          g = 4 === m ? 3 : 4,
          b = Math.min(g, Math.floor(u / h))
        return { maxDisplayParticipantCount: b * m, dynamicParticipantWidth: u / b }
      }
      var Q = 600,
        Z = 0.8,
        $ = 1,
        ee = n('4EYz'),
        te = n('s1N3'),
        ne = n('i4Oy'),
        ae = n('VKFJ')
      function re(e) {
        var t = e.shellLayout
        if (!t) return null
        var n = oe(ne.a.get('window')),
          a = Y(oe(t), n),
          r = e.cohosts,
          i = e.host,
          s = e.participants,
          c = []
        i && c.push({ user: i, kind: ae.a.host })
        for (
          var l = Object(te.a)(r, function (e) {
              return e.twitter_screen_name
            }).map(function (e) {
              return { user: e, kind: ae.a.cohost }
            }),
            d = 0;
          d < l.length && !(c.length >= a.maxDisplayParticipantCount);
          d++
        )
          c.push(l[d])
        for (
          var u = Object(te.a)(s.speakers, function (e) {
              return e.twitter_screen_name
            }).map(function (e) {
              return { user: e, kind: ae.a.speaker }
            }),
            p = 0;
          p < u.length && !(c.length >= a.maxDisplayParticipantCount);
          p++
        )
          c.push(u[p])
        for (var h = 0; h < s.listeners.length && !(c.length >= a.maxDisplayParticipantCount); h++) {
          var m = s.listeners[h]
          m && e._temp_omitByScreenName !== m.twitter_screen_name && c.push({ user: m, kind: ae.a.listener })
        }
        var f = s.total || l.length + u.length,
          g = Math.max(0, f - c.length)
        return o.a.createElement(
          o.a.Fragment,
          null,
          o.a.createElement(
            U.a,
            { style: ie.participantsGridContainer },
            o.a.createElement(
              U.a,
              { style: ie.participantsGridContent },
              c.map(function (e, t) {
                return o.a.createElement(E.a, {
                  hasNftAvatar: e.user.has_nft_avatar,
                  isVerified: e.user.is_verified,
                  key: e.user.twitter_screen_name,
                  kind: e.kind,
                  name: e.user.display_name,
                  profile_image_url_https: e.user.avatar_url,
                  screenName: e.user.twitter_screen_name,
                  width: a.dynamicParticipantWidth,
                })
              }),
            ),
          ),
          o.a.createElement(ee.a, { audioSpaceId: e.audioSpaceId, count: g, interactive: !1 }),
        )
      }
      var ie = f.a.create(function (e) {
        return {
          participantsGridContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' },
          participantsGridContent: { flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start' },
        }
      })
      function oe(e) {
        var t = e.height
        return { width: e.width, height: t }
      }
      var se = n('ISLN')
      function ce(e) {
        var t = e.space
        if (!t) return null
        var n = y.a.loggedInUser(),
          a = n && n.screen_name
        return o.a.createElement(
          o.a.Fragment,
          null,
          o.a.createElement(re, {
            _temp_omitByScreenName: a,
            audioSpaceId: t.rest_id,
            cohosts: t.cohosts,
            host: t.host,
            participants: t.participants,
            shellLayout: e.shellLayout,
          }),
          o.a.createElement(
            U.a,
            { style: de.joinSubtitleContainer },
            o.a.createElement(
              m.b,
              { align: 'center', numberOfLines: 1, size: 'subtext2', style: de.joinSubtitle },
              le.spaceJoinSubtitle,
            ),
          ),
          o.a.createElement(
            U.a,
            { style: de.joinButtonContainer },
            o.a.createElement(
              se.a,
              {
                accessibilityLabel: le.spaceJoin,
                onPress: function () {
                  e.onJoin(), e.onClose()
                },
              },
              o.a.createElement(
                m.b,
                { align: 'center', color: 'white', numberOfLines: 1, size: 'headline1', weight: 'bold' },
                le.spaceJoin,
              ),
            ),
          ),
        )
      }
      var le = { spaceJoin: h.a.cc8f82bb, spaceJoinSubtitle: h.a.e51df2e6 },
        de = f.a.create(function (e) {
          return {
            joinSubtitleContainer: { width: '100%', marginTop: e.spacesPx.space20 },
            joinSubtitle: { lineHeight: e.lineHeightsPx.subtext2 },
            joinButtonContainer: {
              width: '100%',
              paddingHorizontal: e.spaces.space20,
              paddingVertical: e.spacesPx.space16,
            },
          }
        }),
        ue = n('BXJq'),
        pe = n('bNYH'),
        he = n('Xyrk'),
        me = n('AooF')
      function fe(e) {
        var t = Object(ue.a)(e.broadcastId)
        return o.a.createElement(
          U.a,
          { style: ge.container },
          o.a.createElement(
            U.a,
            { style: ge.cardContainer },
            o.a.createElement(pe.a, { audioSpaceId: e.broadcastId, withoutButton: !0 }),
          ),
          o.a.createElement(
            he.a.Default,
            { style: ge.ctaButton },
            o.a.createElement(me.a.Button, {
              disablePassiveBackgroundColor: !0,
              hasReminderSet: t.props.hasReminderSet,
              isJoined: !1,
              isSmall: !1,
              onClick: t.props.onClick,
              scheduledStart: t.props.scheduledStart,
              state: 'NotStarted',
            }),
          ),
          o.a.createElement(
            U.a,
            { style: ge.shareButtonContainer },
            o.a.createElement(O.a, { audioSpaceId: e.broadcastId }),
          ),
        )
      }
      var ge = f.a.create(function (e) {
        var t = { width: '100%', paddingHorizontal: e.spaces.space8, paddingBottom: e.spaces.space48 }
        return {
          cardContainer: { paddingBottom: e.spaces.space32 },
          container: t,
          ctaButton: { width: '100%', marginTop: e.spaces.space32, borderRadius: e.borderRadii.infinite },
          shareButtonContainer: { marginTop: e.spaces.space8 },
        }
      })
      function be(e) {
        return o.a.createElement(m.b, { size: 'headline1', style: ye.container, weight: 'bold' }, ve.message)
      }
      var ve = { message: h.a.h87bdd64 },
        ye = f.a.create(function (e) {
          return { container: { paddingBottom: e.spaces.space48 } }
        }),
        Ee = (n('LW0h'), n('7x/C'), n('cFuS'))
      function Ce(e) {
        return o.a.createElement(
          U.a,
          { style: we.endedContainer },
          o.a.createElement(
            m.b,
            { align: 'center', style: we.endedTitle },
            o.a.createElement('span', { role: 'img' }, '🙉'),
          ),
          o.a.createElement(m.b, { align: 'center', numberOfLines: 1, size: 'title4', weight: 'bold' }, Se.spaceEnded),
          o.a.createElement(
            m.b,
            {
              align: 'center',
              color: 'gray700',
              numberOfLines: 1,
              size: 'body',
              style: we.endedSubtitle,
              weight: 'bold',
            },
            Se.spaceEndedSubtitle,
          ),
        )
      }
      var Se = { spaceEnded: h.a.cc5ab041, spaceEndedSubtitle: h.a.eadd5677 },
        we = f.a.create(function (e) {
          return {
            endedContainer: { paddingBottom: e.spaces.space48 },
            endedTitle: {
              paddingBottom: e.spaces.space32,
              fontSize: e.spaces.space64,
              lineHeight: ''.concat(f.a.theme.spacesPx.space64 + f.a.theme.spacesPx.space20, 'px'),
            },
            endedSubtitle: { paddingTop: e.spaces.space12 },
          }
        }),
        Ie = n('hqDb'),
        _e = n('cHvH'),
        ke = n('88ay'),
        xe = ['windowWidth']
      function Pe(e, t) {
        return o.a.createElement(ke.b, {
          decoration: ke.e,
          displayMode: 'UserCompact',
          key: t,
          promotedItemType: Ee.c.USER,
          style: e ? He.userCellWide : He.userCell,
          userId: t,
          withFollowsYou: !0,
        })
      }
      function Re(e) {
        return Pe(!1, e)
      }
      function Le(e) {
        return Pe(!0, e)
      }
      function Ae(e) {
        var t = e.isWide,
          n = e.label,
          a = e.style,
          r = e.users
        return 0 === r.length
          ? null
          : o.a.createElement(
              U.a,
              { style: a },
              o.a.createElement(
                m.b,
                {
                  numberOfLines: 1,
                  size: 'headline2',
                  style: t ? He.endedSubtitleWide : He.endedSubtitle,
                  weight: 'bold',
                },
                n,
              ),
              o.a.createElement(Ie.a, { displayMode: 'UserCompact', renderUserCell: t ? Le : Re, userIds: r }),
            )
      }
      function Be(e) {
        var t,
          n,
          a = e.windowWidth,
          r = S()(e, xe),
          i = r.space
        if (!i) return o.a.createElement(Ce, r)
        var s = function (e) {
            return Object(te.a)(
              (null == e
                ? void 0
                : e
                    .map(function (e) {
                      var t
                      return null === (t = e.user) || void 0 === t ? void 0 : t.rest_id
                    })
                    .filter(Boolean)) || [],
            )
          },
          c = null === (t = i.host) || void 0 === t || null === (n = t.user) || void 0 === n ? void 0 : n.rest_id,
          l = s(i.cohosts),
          d = s(i.participants.speakers),
          u = a > f.a.theme.breakpoints.medium
        return o.a.createElement(
          U.a,
          { style: u ? He.endedContainerWide : He.endedContainer },
          o.a.createElement(
            U.a,
            { style: He.overflow },
            o.a.createElement(Ae, { isWide: u, label: Fe.host, users: c ? [c] : [] }),
            o.a.createElement(Ae, {
              isWide: u,
              label: Fe.cohosts({ hostCount: l.length }),
              style: He.userSectionPadding,
              users: l,
            }),
            o.a.createElement(Ae, {
              isWide: u,
              label: Fe.speakers({ speakerCount: d.length }),
              style: He.userSectionPadding,
              users: d,
            }),
          ),
        )
      }
      function De(e) {
        return o.a.createElement(_e.a, null, function (t) {
          var n = t.windowWidth
          return o.a.createElement(Be, r()({ windowWidth: n }, e))
        })
      }
      var Fe = { spaceEnded: h.a.ba55e824, host: h.a.cededf29, cohosts: h.a.aadbc746, speakers: h.a.hbd6035f },
        He = f.a.create(function (e) {
          var t = { paddingTop: e.spaces.space12, paddingBottom: e.spaces.space4 },
            n = { width: '100%', maxHeight: 550, overflow: 'auto' }
          return {
            endedContainer: n,
            endedContainerWide: d()(d()({}, n), {}, { paddingBottom: e.componentDimensions.gutterHorizontalPx }),
            endedSubtitle: d()(d()({}, t), {}, { paddingHorizontal: e.componentDimensions.gutterHorizontalPx }),
            endedSubtitleWide: d()(d()({}, t), {}, { paddingHorizontal: 2 * e.componentDimensions.gutterHorizontalPx }),
            userCell: { paddingHorizontal: e.componentDimensions.gutterHorizontalPx },
            userCellWide: { paddingHorizontal: 2 * e.componentDimensions.gutterHorizontalPx },
            overflow: { overflow: 'visible' },
            userSectionPadding: { paddingTop: e.spacesPx.space16 },
          }
        }),
        Oe = n('21zW'),
        Te = n('MH+I')
      function Ue(e) {
        var t,
          n,
          a = null === (t = e.space) || void 0 === t ? void 0 : t.ended_at,
          r = null === (n = e.space) || void 0 === n ? void 0 : n.started_at,
          i = 0
        return (
          null != a && null != r && (i = a - r),
          o.a.createElement(_e.a, null, function (t) {
            var n,
              a = t.windowWidth
            return o.a.createElement(
              U.a,
              { style: a > f.a.theme.breakpoints.medium ? Ne.endedHeaderWide : Ne.endedHeader },
              o.a.createElement(
                U.a,
                null,
                o.a.createElement(U.a, { style: Ne.closeButton }, e.closeButton),
                o.a.createElement(
                  U.a,
                  { style: Ne.row },
                  o.a.createElement(
                    m.b,
                    { color: 'gray700', size: 'subtext1', style: [Ne.endedLabel, Ne.upper], weight: 'bold' },
                    je.ended,
                    ' ',
                    o.a.createElement(Oe.a, null),
                  ),
                  o.a.createElement(Te.a, {
                    color: 'gray700',
                    short: !0,
                    size: 'subtext1',
                    style: Ne.endedLabel,
                    timeMs: i,
                  }),
                ),
              ),
              o.a.createElement(
                m.b,
                { size: 'title2', weight: 'bold' },
                null === (n = e.space) || void 0 === n ? void 0 : n.title,
              ),
            )
          })
        )
      }
      var je = { ended: h.a.ba55e824 },
        Ne = f.a.create(function (e) {
          return {
            endedHeader: { paddingHorizontal: e.componentDimensions.gutterHorizontalPx },
            endedHeaderWide: { paddingHorizontal: 2 * e.componentDimensions.gutterHorizontalPx },
            endedLabel: { lineHeight: 38 },
            row: { flexDirection: 'row' },
            spaceBetween: { justifyContent: 'space-between' },
            upper: { textTransform: 'uppercase' },
            closeButton: { alignItems: 'flex-start' },
          }
        })
      function Me(e) {
        var t,
          n,
          a = null === (t = e.location.state) || void 0 === t ? void 0 : t.origin,
          i = o.a.useContext(u.a).featureSwitches,
          s = Object(R.a)(e.broadcastId || '')
        o.a.useEffect(function () {
          var e
          return (
            s.utils.is.joined && (e = setTimeout(l, 1e3)),
            s.utils.scribe(':audiospace:preview:::impression', { origin: a }),
            function () {
              clearTimeout(e)
            }
          )
        }, [])
        var c = s.space
        if (!c) return null
        function l() {
          e.history.goBackThroughModals()
        }
        var p = d()(
          d()({}, e),
          {},
          {
            space: c,
            onClose: l,
            onJoin: function () {
              return s.handlers.join(a)
            },
          },
        )
        return null !== (n = s.space) && void 0 !== n && n.ticket_group_id
          ? o.a.createElement(z, r()({}, p, { Content: be }))
          : s.utils.is.joined
          ? o.a.createElement(z, r()({}, p, { Content: g }))
          : s.utils.is.Running
          ? o.a.createElement(z, r()({}, p, { Content: ce }))
          : s.utils.is.NotStarted || s.utils.is.PrePublished
          ? o.a.createElement(z, r()({}, p, { Content: fe, withoutDescription: !0 }))
          : s.utils.is.loaded
          ? i.isTrue('voice_rooms_end_screen_participants')
            ? o.a.createElement(
                z,
                r()({}, p, { Content: De, CustomHeader: Ue, withoutDescription: !0, withoutPadding: !0 }),
              )
            : o.a.createElement(z, r()({}, p, { Content: Ce }))
          : o.a.createElement(z, r()({}, p, { Content: g }))
      }
      function ze(e) {
        return o.a.createElement(s.a, e, o.a.createElement(We, e))
      }
      function We(e) {
        var t = Object(c.a)(e.match)
        return o.a.createElement(Me, r()({}, e, { broadcastId: t }))
      }
    },
    Z5jE: function (e, t, n) {
      'use strict'
      function a(e) {
        return e.params.broadcastId || ''
      }
      n.d(t, 'a', function () {
        return a
      })
    },
    hqDb: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        i = n('m3Bd'),
        o = n.n(i),
        s = n('VrFO'),
        c = n.n(s),
        l = n('Y9Ll'),
        d = n.n(l),
        u = n('1Pcy'),
        p = n.n(u),
        h = n('5Yy7'),
        m = n.n(h),
        f = n('2VqO'),
        g = n.n(f),
        b = n('KEM+'),
        v = n.n(b),
        y = (n('2G9S'), n('ERkP')),
        E = n.n(y),
        C = n('k49u'),
        S = (n('LW0h'), n('7x/C'), n('KOtZ'), n('vrRf'), n('6xIQ')),
        w = n('kGix'),
        I = n('G6rE'),
        _ = n('rxPX'),
        k = n('0KEI'),
        x = function (e, t) {
          return t.userIds
        },
        P = function (e, t) {
          return t.userIds.filter(function (t) {
            return !!I.e.select(e, t)
          })
        },
        R = function (e, t) {
          return t.userIds.reduce(function (t, n) {
            var a = I.e.selectFetchStatus(e, n)
            return (t[n] = a === w.a.NONE ? w.a.LOADING : a), t
          }, {})
        },
        L = Object(_.a)()
          .propsFromState(function () {
            return {
              availableUserIds: Object(S.a)(P, function (e) {
                return e
              }),
              fetchStatus: Object(S.a)(P, R, x, function (e, t, n) {
                for (var a = w.a.LOADED, r = 0; r < n.length; r++) {
                  var i = n[r]
                  if (-1 === e.indexOf(i)) {
                    var o = t[i] || w.a.LOADING
                    a = a === w.a.LOADED ? o : a
                  }
                  if (a === w.a.LOADED) break
                }
                return a
              }),
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(k.createLocalApiErrorHandlerWithContextFactory)(
                'USERS_LIST_CONTAINER',
              ),
              fetchUsersIfNeeded: I.e.fetchManyIfNeeded,
            }
          }),
        A = n('v//M'),
        B = n('3XMw'),
        D = n.n(B),
        F = n('pQ3Z'),
        H = n.n(F),
        O = (n('z84I'), n('cFuS')),
        T = n('Re5t'),
        U = n('MWbm'),
        j = n('88ay'),
        N = function (e) {
          var t = e.displayMode,
            n = e.renderUserCell,
            a = e.userIds
          e.withFinalItemBorder, e.withItemBorder
          return E.a.createElement(
            U.a,
            null,
            a.map(function (e, a) {
              return n
                ? n(e)
                : E.a.createElement(j.b, {
                    decoration: j.e,
                    displayMode: t,
                    key: e,
                    promotedItemType: O.c.USER,
                    userId: e,
                    withFollowsYou: !0,
                  })
            }),
          )
        }
      N.defaultProps = { displayMode: T.a.UserDetailed, withFinalItemBorder: !0, withItemBorder: !1 }
      var M = N,
        z = ['availableUserIds', 'createLocalApiErrorHandler', 'fetchStatus', 'fetchUsersIfNeeded', 'userIds'],
        W = D.a.f5b426c2,
        G = { viewType: 'user_list' },
        q = L(
          (function (e) {
            m()(n, e)
            var t = g()(n)
            function n() {
              var e
              c()(this, n)
              for (var a = arguments.length, i = new Array(a), s = 0; s < a; s++) i[s] = arguments[s]
              return (
                (e = t.call.apply(t, [this].concat(i))),
                v()(p()(e), 'state', { allUsersUnavailable: !1 }),
                v()(p()(e), '_renderContent', function () {
                  var t = e.props,
                    n = t.availableUserIds,
                    a = (t.createLocalApiErrorHandler, t.fetchStatus, t.fetchUsersIfNeeded, t.userIds, o()(t, z))
                  return E.a.createElement(M, r()({}, a, { userIds: n }))
                }),
                v()(p()(e), '_handleFetch', function () {
                  e._fetchUsersIfNeeded()
                }),
                e
              )
            }
            return (
              d()(n, [
                {
                  key: 'componentDidMount',
                  value: function () {
                    this._fetchUsersIfNeeded()
                  },
                },
                {
                  key: 'componentDidUpdate',
                  value: function (e) {
                    H()(e.userIds, this.props.userIds) || this._fetchUsersIfNeeded()
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    return E.a.createElement(A.a, {
                      accessibilityLabel: W,
                      behavioralEventContext: G,
                      fetchStatus: this.state.allUsersUnavailable ? w.a.LOADED : this.props.fetchStatus,
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
                      n = this.props,
                      a = n.availableUserIds,
                      r = n.createLocalApiErrorHandler
                    ;(0, n.fetchUsersIfNeeded)(n.userIds).then(
                      function () {
                        t.setState({ allUsersUnavailable: !1 })
                      },
                      r(
                        ((e = {}),
                        v()(e, C.a.AddressBookLookupNotFound, {
                          customAction: function () {
                            0 === a.length && t.setState({ allUsersUnavailable: !0 })
                          },
                        }),
                        v()(e, C.a.OtherUserSuspended, {
                          customAction: function () {
                            0 === a.length && t.setState({ allUsersUnavailable: !0 })
                          },
                        }),
                        e),
                      ),
                    )
                  },
                },
              ]),
              n
            )
          })(E.a.Component),
        )
      t.a = q
    },
    hxu0: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        s = n('vqbU')
      t.a = function (e) {
        return function (t) {
          return o.a.createElement(s.a.Consumer, null, function (n) {
            return o.a.createElement(e, r()({}, t, { isInSidebar: n }))
          })
        }
      }
    },
  },
])
//# sourceMappingURL=WIPED
