;(window.webpackJsonp = window.webpackJsonp || []).push([
  [37],
  {
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
          return ae
        }),
        n.d(t, 'a', function () {
          return oe
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
        w = n.n(C),
        S = n('6rlp'),
        I = n('zh9S'),
        _ = n('G6rE'),
        k = n('rxPX'),
        x = n('0KEI'),
        P = function (e, t) {
          return _.e.select(e, t.userId)
        },
        L = function (e, t) {
          return t.promotedContent
        },
        R = Object(k.a)()
          .propsFromState(function () {
            return { promotedContent: L, user: P }
          })
          .adjustStateProps(function (e) {
            var t = e.promotedContent,
              n = e.user
            return { promotedContent: t || (n ? n.promoted_content : void 0), user: n }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(x.createLocalApiErrorHandlerWithContextFactory)('USER_CELL_CONTAINER'),
              log: S.a,
              scribeAction: I.c,
            }
          }),
        A = n('I57f'),
        B = n('vMjK'),
        D = n('MWbm'),
        F = n('IG7M'),
        H = n('rHpw'),
        T = function (e) {
          var t = e.children,
            n = e.promotedContent,
            a = e.user
          return w.a.createElement(
            D.a,
            { style: O.decorationWrapper },
            t,
            w.a.createElement(F.a, {
              renderActionMenu: function (e) {
                return w.a.createElement(B.b, { onClose: e, promotedContent: n, user: a, view: 'follower' })
              },
              style: O.actionMenu,
            }),
          )
        },
        O = H.a.create(function (e) {
          return { decorationWrapper: { flexDirection: 'row' }, actionMenu: { marginLeft: e.spaces.space12 } }
        }),
        U = n('uIZp'),
        j = n('mN6z'),
        M = n('caTy'),
        N = n('3IPs'),
        z = n('Rp9C'),
        W = n('X04g'),
        G = n('Re5t'),
        q = n('TnY3'),
        J = n('hxu0'),
        V = n('v6aA'),
        K = n('7JQg'),
        X = n('nBUg'),
        Y = n('IMA+'),
        Z = n('cFuS'),
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
        $ = function (e) {
          var t = e.user
          return t && t.profile_image_url_https
            ? w.a.createElement(
                re,
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
      $.defaultProps = {
        cellClickable: !0,
        decoration: null,
        displayMode: G.a.UserCompact,
        followRequestReceived: !1,
        hideBlocked: !1,
        promotedItemType: Z.c.USER,
        shouldScribeProfileClick: !0,
        shouldScribeImpression: !1,
        withFollowsYou: !1,
      }
      var ee = function (e) {
          var t = e.isDeviceFollowing,
            n = e.userId
          return w.a.createElement(A.a, { isFollowing: t, style: ie.followButton, userId: n })
        },
        te = function (e) {
          var t = e.loggedInUserId,
            n = e.promotedContent,
            a = e.userId
          return t !== a
            ? w.a.createElement(U.a, { promotedContent: n, size: 'small', style: ie.followButton, userId: a })
            : null
        },
        ne = function (e) {
          return w.a.createElement(T, { promotedContent: e.promotedContent, user: e.user }, te(e))
        },
        ae = function (e) {
          return w.a.createElement(F.a, {
            renderActionMenu: function (t) {
              return w.a.createElement(B.b, {
                onClose: t,
                promotedContent: e.promotedContent,
                user: e.user,
                view: 'rito_flagged_accounts',
              })
            },
          })
        },
        re = (function (e) {
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
                  e._handleAsyncPromotedEvent(Z.b.PROFILE_IMAGE_CLICK)
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
                  e._handleAsyncPromotedEvent(Z.b.SCREEN_NAME_CLICK)
              }),
              v()(p()(e), '_handleSaveAsRecentSearch', function () {
                var t = e.props,
                  n = t.saveAsRecentSearch,
                  a = t.shouldStoreTypeaheadItem,
                  r = t.userId
                n && a && a(W.a.ItemType.USER) && n({ user: { id: r, type: N.a.User } })
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
                  var e = this,
                    t = this.props,
                    n = t.avatarDecoration,
                    a = (t.bottomControl, t.cellClickable),
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
                    o =
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
                    s = t.user,
                    c = r()(t, Q)
                  return this._shouldRender()
                    ? w.a.createElement(
                        X.b.Provider,
                        {
                          value: {
                            socialContextRefreshEnabled: function () {
                              return e.context.featureSwitches.isTrue(
                                'social_context_and_topic_context_refresh_alignment_enabled',
                              )
                            },
                          },
                        },
                        w.a.createElement(
                          Y.a,
                          E()({}, c, {
                            avatarDecoration: n,
                            bottomControl: this._renderBottomControl(),
                            decoration: this._renderDecoration(),
                            highlightedLabel: this._getHighlightedLabel(),
                            isBlocking: s.blocking,
                            onAvatarClick: this._handleAvatarClick,
                            onCellClick: a ? this._handleCellClick : void 0,
                            onScreenNameClick: this._handleScreenNameClick,
                            socialContext: o
                              ? {
                                  contextType: o.contextType,
                                  text: o.text,
                                  link: o.landingUrl ? Object(M.b)(o.landingUrl) : void 0,
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
                  return t && n === Z.c.TWEET ? { promotedTweetState: t } : null
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
                  if (a && r === Z.c.USER) {
                    var s = a.disclosure_type,
                      c = a.impression_id
                    n({
                      disclosureType: s,
                      itemId: o,
                      itemType: Z.c.USER,
                      params: { event: Z.b.IMPRESSION, impression_id: c },
                    }).catch(t())
                  } else i && this._scribeAction({ action: 'impression' })
                },
              },
            ]),
            n
          )
        })(w.a.Component)
      v()(re, 'contextType', V.a), v()(re, 'defaultProps', $.defaultProps)
      var ie = H.a.create(function (e) {
          return { followButton: { marginLeft: e.spaces.space12 } }
        }),
        oe = Object(q.a)(Object(J.a)(R($)))
      t.b = Object(K.a)({ element: 'user' })(oe)
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
        w = function (e) {
          return function (t, n, a) {
            return a.api.AudioSpaces.byId(e, { isMetatagsQuery: !0 })
          }
        },
        S = Object(E.a)()
          .propsFromState(function () {
            return { broadcastId: C }
          })
          .propsFromActions(function () {
            return { fetchAudioSpace: w }
          }),
        I = (n('1t7P'), n('jQ/y'), n('3XMw')),
        _ = n.n(I),
        k = n('rJoH'),
        x = n('fzjU'),
        P = n('Tg44')
      function L(e) {
        var t = e.space
        if (!t) return null
        var n = (function (e) {
          var t = (function (e) {
              var t,
                n,
                a,
                r,
                i = null == e || null === (t = e.host) || void 0 === t ? void 0 : t.display_name,
                o = i ? R.hostSpace({ name: i }) : R.hostSpaceFallback,
                s = e.title || o,
                c = R.descriptionGeneric,
                l = (null == e ? void 0 : e.participants.total) || 0,
                d = x.a.formatCountShort(l),
                u = R.descriptionListening({ count: d })
              if (e.state === P.a.SpaceState.Running)
                (n = R.titleRunning({ spaceTitle: s })),
                  (a = R.descriptionFormatRunning({ hostSpace: o, descriptionListening: u, descriptionGeneric: c })),
                  (r = A.ttl.Frequent)
              else if (e.state === P.a.SpaceState.NotStarted || e.state === P.a.SpaceState.PrePublished) {
                var p = R.scheduledSpaceGeneric
                ;(n = R.titleScheduled({ date: p, spaceTitle: s })),
                  (a = R.descriptionFormatScheduled({ hostSpace: o, descriptionGeneric: c })),
                  (r = A.ttl.Frequent)
              } else
                (n = R.titleEnded({ spaceTitle: s })),
                  (a = R.descriptionFormatEnded({ hostSpace: o, descriptionGeneric: c })),
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
      var R = {
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
            alt: R.twitterSpaces,
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
                    g.a.createElement(L, { space: this.state.space }),
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
      var H = S(Object(B.a)(D))
    },
    UUFr: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'default', function () {
          return Ne
        })
      var a = n('97Jx'),
        r = n.n(a),
        i = (n('KqXw'), n('WNMA'), n('ERkP')),
        o = n.n(i),
        s = n('Fg/a'),
        c = n('Z5jE'),
        l = n('yiKp'),
        d = n.n(l),
        u = (n('7xRU'), n('3XMw')),
        p = n.n(u),
        h = n('t62R'),
        m = n('rHpw')
      function f(e) {
        return o.a.createElement(
          h.b,
          { numberOfLines: 1, size: 'headline1', style: b.container, weight: 'bold' },
          g.connecting,
        )
      }
      var g = { connecting: p.a.e4e811fb },
        b = m.a.create(function (e) {
          return { container: { paddingBottom: e.spaces.space48 } }
        }),
        v = n('Pc/x'),
        y = (n('z84I'), n('p3P5')),
        E = n('m3Bd'),
        C = n.n(E),
        w = n('ddV6'),
        S = n.n(w),
        I = n('hOZg'),
        _ = n('RqPI')
      var k = n('zCf4'),
        x = n('uDfI'),
        P = n('dgjd'),
        L = n('mjJ+'),
        R = n('/yvb'),
        A = n('FXw/'),
        B = n('GCOQ')
      function D(e) {
        var t = (function (e) {
            var t = Object(k.f)(),
              n = Object(P.a)(e).utils,
              a = Object(x.d)(_.m),
              r = [],
              i = {
                Icon: B.a,
                isEmphasized: !0,
                onClick: function () {
                  n.scribe(':audiospace::caret:report:click'),
                    t.push(
                      (function (e) {
                        return '/i/spaces/'.concat(e, '/peek/report')
                      })(e),
                    )
                },
                text: F.reportThisSpace,
              }
            a && r.push(i)
            return { items: r }
          })(e.audioSpaceId),
          n = o.a.useState(!1),
          a = S()(n, 2),
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
          o.a.createElement(R.a, {
            accessibilityLabel: F.more,
            borderColor: 'transparent',
            color: 'text',
            hoverLabel: { label: F.more },
            icon: o.a.createElement(A.a, null),
            onPress: function () {
              return i(!0)
            },
            pullRight: e.pullRight,
            size: 'medium',
          }),
          s,
        )
      }
      var F = { more: p.a.h63a5c3b, reportThisSpace: p.a.b3481ffd },
        H = n('0nhk'),
        T = n('xVWt')
      var O = n('MWbm'),
        U = n('sgih'),
        j = ['Content', 'CustomHeader', 'withoutDescription', 'withoutPadding'],
        M = ['Content', 'CustomHeader', 'shellLayout', 'withoutDescription', 'withoutPadding']
      function N(e) {
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
            (n = S()(t, 2)),
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
          d = S()(l, 2),
          u = d[0],
          p = d[1],
          h = [J.sheetContainer, e.withoutPadding && J.withoutPadding]
        return o.a.createElement(
          U.a,
          c,
          o.a.createElement(
            O.a,
            { onLayout: p, style: h },
            o.a.createElement(O.a, { style: J.sheetSpacerTop }),
            o.a.createElement(z, e),
            o.a.createElement(W, e),
            o.a.createElement(G, r()({}, e, { shellLayout: u })),
          ),
        )
      }
      function z(e) {
        e.Content, e.CustomHeader, e.withoutDescription, e.withoutPadding
        var t = C()(e, j),
          n = o.a.createElement(
            R.a,
            r()(
              {
                accessibilityLabel: K.close,
                icon: o.a.createElement(I.a, { style: J.closeIcon }),
                onPress: e.onClose,
                pullLeft: !0,
              },
              V,
            ),
          )
        if (e.CustomHeader) return o.a.createElement(e.CustomHeader, r()({}, t, { closeButton: n }))
        var a = e.space.rest_id
        return o.a.createElement(
          O.a,
          { style: J.header },
          o.a.createElement(O.a, { style: J.headerLeft }, n),
          o.a.createElement(
            O.a,
            { style: J.headerRight },
            o.a.createElement(
              O.a,
              { style: J.headerRightItem },
              o.a.createElement(H.a, { audioSpaceId: a, type: 'icon-borderless' }),
            ),
            o.a.createElement(
              O.a,
              { style: J.headerRightItem },
              o.a.createElement(D, { audioSpaceId: a, pullRight: !0 }),
            ),
          ),
        )
      }
      function W(e) {
        return e.withoutDescription
          ? null
          : o.a.createElement(
              O.a,
              { style: J.descriptionContainer },
              o.a.createElement(T.b, { audioSpaceId: e.space.rest_id, isOutsideDock: !0 }),
            )
      }
      function G(e) {
        if (!e.Content) return null
        e.Content, e.CustomHeader
        var t = e.shellLayout,
          n = (e.withoutDescription, e.withoutPadding, C()(e, M))
        return o.a.createElement(
          O.a,
          { style: [J.content, e.withoutPadding && J.withoutPadding] },
          o.a.createElement(e.Content, r()({}, n, { onClose: e.onClose, shellLayout: t })),
        )
      }
      function q(e) {
        return { sheetContainer: { paddingHorizontal: e.spacesPx.space16 } }
      }
      var J = m.a.create(function (e) {
          var t = q(e),
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
        V = { borderColor: 'transparent', color: 'text', size: 'medium' },
        K = { close: p.a.ia5e7487 }
      function X(e, t) {
        var n,
          a,
          r = t.width,
          i = t.height,
          o =
            ((n = m.a.theme),
            (a = q(n)),
            {
              getHorizontal: function (e) {
                return e - 2 * a.sheetContainer.paddingHorizontal
              },
            }),
          s = Object(y.b)(m.a.theme),
          c = m.a.theme.spacesPx.space40,
          l = i * Q - c - e.height,
          d = r > m.a.theme.breakpoints.medium ? Math.min(Y, r * Z) : r,
          u = o.getHorizontal(d),
          p = s.getHeight(),
          h = s.getWidth(),
          f = Math.min(4, Math.floor(l / p)),
          g = 4 === f ? 3 : 4,
          b = Math.min(g, Math.floor(u / h))
        return { maxDisplayParticipantCount: b * f, dynamicParticipantWidth: u / b }
      }
      var Y = 600,
        Z = 0.8,
        Q = 1,
        $ = n('4EYz'),
        ee = n('s1N3'),
        te = n('i4Oy'),
        ne = n('VKFJ')
      function ae(e) {
        var t = e.shellLayout
        if (!t) return null
        var n = ie(te.a.get('window')),
          a = X(ie(t), n),
          r = e.cohosts,
          i = e.host,
          s = e.participants,
          c = []
        i && c.push({ user: i, kind: ne.a.host })
        for (
          var l = Object(ee.a)(r, function (e) {
              return e.twitter_screen_name
            }).map(function (e) {
              return { user: e, kind: ne.a.cohost }
            }),
            d = 0;
          d < l.length && !(c.length >= a.maxDisplayParticipantCount);
          d++
        )
          c.push(l[d])
        for (
          var u = Object(ee.a)(s.speakers, function (e) {
              return e.twitter_screen_name
            }).map(function (e) {
              return { user: e, kind: ne.a.speaker }
            }),
            p = 0;
          p < u.length && !(c.length >= a.maxDisplayParticipantCount);
          p++
        )
          c.push(u[p])
        for (var h = 0; h < s.listeners.length && !(c.length >= a.maxDisplayParticipantCount); h++) {
          var m = s.listeners[h]
          m && e._temp_omitByScreenName !== m.twitter_screen_name && c.push({ user: m, kind: ne.a.listener })
        }
        var f = s.total || l.length + u.length,
          g = Math.max(0, f - c.length)
        return o.a.createElement(
          o.a.Fragment,
          null,
          o.a.createElement(
            O.a,
            { style: re.participantsGridContainer },
            o.a.createElement(
              O.a,
              { style: re.participantsGridContent },
              c.map(function (e, t) {
                return o.a.createElement(y.a, {
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
          o.a.createElement($.a, { audioSpaceId: e.audioSpaceId, count: g, interactive: !1 }),
        )
      }
      var re = m.a.create(function (e) {
        return {
          participantsGridContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' },
          participantsGridContent: { flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start' },
        }
      })
      function ie(e) {
        var t = e.height
        return { width: e.width, height: t }
      }
      var oe = n('ISLN')
      function se(e) {
        var t = e.space
        if (!t) return null
        var n = v.a.loggedInUser(),
          a = n && n.screen_name
        return o.a.createElement(
          o.a.Fragment,
          null,
          o.a.createElement(ae, {
            _temp_omitByScreenName: a,
            audioSpaceId: t.rest_id,
            cohosts: t.cohosts,
            host: t.host,
            participants: t.participants,
            shellLayout: e.shellLayout,
          }),
          o.a.createElement(
            O.a,
            { style: le.joinSubtitleContainer },
            o.a.createElement(
              h.b,
              { align: 'center', numberOfLines: 1, size: 'subtext2', style: le.joinSubtitle },
              ce.spaceJoinSubtitle,
            ),
          ),
          o.a.createElement(
            O.a,
            { style: le.joinButtonContainer },
            o.a.createElement(
              oe.a,
              {
                accessibilityLabel: ce.spaceJoin,
                onPress: function () {
                  e.onJoin(), e.onClose()
                },
              },
              o.a.createElement(
                h.b,
                { align: 'center', color: 'white', numberOfLines: 1, size: 'headline1', weight: 'bold' },
                ce.spaceJoin,
              ),
            ),
          ),
        )
      }
      var ce = { spaceJoin: p.a.cc8f82bb, spaceJoinSubtitle: p.a.e51df2e6 },
        le = m.a.create(function (e) {
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
        de = n('BXJq'),
        ue = n('VRZ4'),
        pe = n('CDzS'),
        he = n('Tg44')
      function me(e) {
        var t = Object(de.a)(e.broadcastId)
        return o.a.createElement(
          O.a,
          { style: fe.container },
          o.a.createElement(
            O.a,
            { style: fe.cardContainer },
            o.a.createElement(ue.a, { audioSpaceId: e.broadcastId, withoutButton: !0 }),
          ),
          o.a.createElement(
            pe.a.Default,
            { style: fe.ctaButton },
            o.a.createElement(he.a.Button, {
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
            O.a,
            { style: fe.shareButtonContainer },
            o.a.createElement(H.a, { audioSpaceId: e.broadcastId }),
          ),
        )
      }
      var fe = m.a.create(function (e) {
        var t = { width: '100%', paddingHorizontal: e.spaces.space8, paddingBottom: e.spaces.space48 }
        return {
          cardContainer: { paddingBottom: e.spaces.space32 },
          container: t,
          ctaButton: { width: '100%', marginTop: e.spaces.space32, borderRadius: e.borderRadii.infinite },
          shareButtonContainer: { marginTop: e.spaces.space8 },
        }
      })
      function ge(e) {
        return o.a.createElement(h.b, { size: 'headline1', style: ve.container, weight: 'bold' }, be.message)
      }
      var be = { message: p.a.h87bdd64 },
        ve = m.a.create(function (e) {
          return { container: { paddingBottom: e.spaces.space48 } }
        }),
        ye = (n('LW0h'), n('7x/C'), n('cFuS'))
      function Ee(e) {
        return o.a.createElement(
          O.a,
          { style: we.endedContainer },
          o.a.createElement(
            h.b,
            { align: 'center', style: we.endedTitle },
            o.a.createElement('span', { role: 'img' }, '🙉'),
          ),
          o.a.createElement(h.b, { align: 'center', numberOfLines: 1, size: 'title4', weight: 'bold' }, Ce.spaceEnded),
          o.a.createElement(
            h.b,
            {
              align: 'center',
              color: 'gray700',
              numberOfLines: 1,
              size: 'body',
              style: we.endedSubtitle,
              weight: 'bold',
            },
            Ce.spaceEndedSubtitle,
          ),
        )
      }
      var Ce = { spaceEnded: p.a.cc5ab041, spaceEndedSubtitle: p.a.eadd5677 },
        we = m.a.create(function (e) {
          return {
            endedContainer: { paddingBottom: e.spaces.space48 },
            endedTitle: {
              paddingBottom: e.spaces.space32,
              fontSize: e.spaces.space64,
              lineHeight: ''.concat(m.a.theme.spacesPx.space64 + m.a.theme.spacesPx.space20, 'px'),
            },
            endedSubtitle: { paddingTop: e.spaces.space12 },
          }
        }),
        Se = n('hqDb'),
        Ie = n('cHvH'),
        _e = n('88ay'),
        ke = ['windowWidth']
      function xe(e, t) {
        return o.a.createElement(_e.b, {
          decoration: _e.e,
          displayMode: 'UserCompact',
          key: t,
          promotedItemType: ye.c.USER,
          style: e ? Fe.userCellWide : Fe.userCell,
          userId: t,
          withFollowsYou: !0,
        })
      }
      function Pe(e) {
        return xe(!1, e)
      }
      function Le(e) {
        return xe(!0, e)
      }
      function Re(e) {
        var t = e.isWide,
          n = e.label,
          a = e.style,
          r = e.users
        return 0 === r.length
          ? null
          : o.a.createElement(
              O.a,
              { style: a },
              o.a.createElement(
                h.b,
                {
                  numberOfLines: 1,
                  size: 'headline2',
                  style: t ? Fe.endedSubtitleWide : Fe.endedSubtitle,
                  weight: 'bold',
                },
                n,
              ),
              o.a.createElement(Se.a, { displayMode: 'UserCompact', renderUserCell: t ? Le : Pe, userIds: r }),
            )
      }
      function Ae(e) {
        var t,
          n,
          a = e.windowWidth,
          r = C()(e, ke),
          i = r.space
        if (!i) return o.a.createElement(Ee, r)
        var s = function (e) {
            return Object(ee.a)(
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
          u = a > m.a.theme.breakpoints.medium
        return o.a.createElement(
          O.a,
          { style: u ? Fe.endedContainerWide : Fe.endedContainer },
          o.a.createElement(
            O.a,
            { style: Fe.overflow },
            o.a.createElement(Re, { isWide: u, label: De.host, users: c ? [c] : [] }),
            o.a.createElement(Re, {
              isWide: u,
              label: De.cohosts({ hostCount: l.length }),
              style: Fe.userSectionPadding,
              users: l,
            }),
            o.a.createElement(Re, {
              isWide: u,
              label: De.speakers({ speakerCount: d.length }),
              style: Fe.userSectionPadding,
              users: d,
            }),
          ),
        )
      }
      function Be(e) {
        return o.a.createElement(Ie.a, null, function (t) {
          var n = t.windowWidth
          return o.a.createElement(Ae, r()({ windowWidth: n }, e))
        })
      }
      var De = { spaceEnded: p.a.ba55e824, host: p.a.cededf29, cohosts: p.a.aadbc746, speakers: p.a.hbd6035f },
        Fe = m.a.create(function (e) {
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
        He = n('21zW'),
        Te = n('MH+I')
      function Oe(e) {
        var t,
          n,
          a = null === (t = e.space) || void 0 === t ? void 0 : t.ended_at,
          r = null === (n = e.space) || void 0 === n ? void 0 : n.started_at,
          i = 0
        return (
          null != a && null != r && (i = a - r),
          o.a.createElement(Ie.a, null, function (t) {
            var n,
              a = t.windowWidth
            return o.a.createElement(
              O.a,
              { style: a > m.a.theme.breakpoints.medium ? je.endedHeaderWide : je.endedHeader },
              o.a.createElement(
                O.a,
                null,
                o.a.createElement(O.a, { style: je.closeButton }, e.closeButton),
                o.a.createElement(
                  O.a,
                  { style: je.row },
                  o.a.createElement(
                    h.b,
                    { color: 'gray700', size: 'subtext1', style: [je.endedLabel, je.upper], weight: 'bold' },
                    Ue.ended,
                    ' ',
                    o.a.createElement(He.a, null),
                  ),
                  o.a.createElement(Te.a, {
                    color: 'gray700',
                    short: !0,
                    size: 'subtext1',
                    style: je.endedLabel,
                    timeMs: i,
                  }),
                ),
              ),
              o.a.createElement(
                h.b,
                { size: 'title2', weight: 'bold' },
                null === (n = e.space) || void 0 === n ? void 0 : n.title,
              ),
            )
          })
        )
      }
      var Ue = { ended: p.a.ba55e824 },
        je = m.a.create(function (e) {
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
          i = Object(P.a)(e.broadcastId || '')
        o.a.useEffect(function () {
          var e
          return (
            i.utils.is.joined && (e = setTimeout(c, 1e3)),
            i.utils.scribe(':audiospace:preview:::impression', { origin: a }),
            function () {
              clearTimeout(e)
            }
          )
        }, [])
        var s = i.space
        if (!s) return null
        function c() {
          e.history.goBackThroughModals()
        }
        var l = d()(
          d()({}, e),
          {},
          {
            space: s,
            onClose: c,
            onJoin: function () {
              return i.handlers.join(a)
            },
          },
        )
        return null !== (n = i.space) && void 0 !== n && n.ticket_group_id
          ? o.a.createElement(N, r()({}, l, { Content: ge }))
          : i.utils.is.joined
          ? o.a.createElement(N, r()({}, l, { Content: f }))
          : i.utils.is.Running
          ? o.a.createElement(N, r()({}, l, { Content: se }))
          : i.utils.is.NotStarted || i.utils.is.PrePublished
          ? o.a.createElement(N, r()({}, l, { Content: me, withoutDescription: !0 }))
          : i.utils.is.loaded
          ? o.a.createElement(
              N,
              r()({}, l, { Content: Be, CustomHeader: Oe, withoutDescription: !0, withoutPadding: !0 }),
            )
          : o.a.createElement(N, r()({}, l, { Content: f }))
      }
      function Ne(e) {
        return o.a.createElement(s.a, e, o.a.createElement(ze, e))
      }
      function ze(e) {
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
        w = (n('LW0h'), n('7x/C'), n('KOtZ'), n('vrRf'), n('6xIQ')),
        S = n('kGix'),
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
        L = function (e, t) {
          return t.userIds.reduce(function (t, n) {
            var a = I.e.selectFetchStatus(e, n)
            return (t[n] = a === S.a.NONE ? S.a.LOADING : a), t
          }, {})
        },
        R = Object(_.a)()
          .propsFromState(function () {
            return {
              availableUserIds: Object(w.a)(P, function (e) {
                return e
              }),
              fetchStatus: Object(w.a)(P, L, x, function (e, t, n) {
                for (var a = S.a.LOADED, r = 0; r < n.length; r++) {
                  var i = n[r]
                  if (-1 === e.indexOf(i)) {
                    var o = t[i] || S.a.LOADING
                    a = a === S.a.LOADED ? o : a
                  }
                  if (a === S.a.LOADED) break
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
        T = (n('z84I'), n('cFuS')),
        O = n('Re5t'),
        U = n('MWbm'),
        j = n('88ay'),
        M = function (e) {
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
                    promotedItemType: T.c.USER,
                    userId: e,
                    withFollowsYou: !0,
                  })
            }),
          )
        }
      M.defaultProps = { displayMode: O.a.UserDetailed, withFinalItemBorder: !0, withItemBorder: !1 }
      var N = M,
        z = ['availableUserIds', 'createLocalApiErrorHandler', 'fetchStatus', 'fetchUsersIfNeeded', 'userIds'],
        W = D.a.f5b426c2,
        G = { viewType: 'user_list' },
        q = R(
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
                  return E.a.createElement(N, r()({}, a, { userIds: n }))
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
                      fetchStatus: this.state.allUsersUnavailable ? S.a.LOADED : this.props.fetchStatus,
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
