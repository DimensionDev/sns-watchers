;(window.webpackJsonp = window.webpackJsonp || []).push([
  [208],
  {
    '1Cz6': function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        o = n.n(r),
        a = n('t62R'),
        i = n('MAI/'),
        s = n('3XMw'),
        c = n.n(s),
        l = n('3rX5'),
        u = n('cm6r'),
        d = n('cHvH'),
        f = n('Wd7d'),
        p = n('rHpw'),
        m = n('MWbm'),
        h = function (e) {
          var t = e.children,
            n = e.context,
            r = e.imageSrc,
            s = e.knownFollowers,
            h = e.onFacepilesClick,
            w = e.onFacepilesImpression,
            b = e.subtitle,
            g = e.title,
            y = e.withAdditionalControls,
            E = s || {},
            _ = E.firstUsername,
            C = E.knownFollowersAvatarUrls,
            k = E.trendingFollowersUrl,
            S = E.usersCount,
            x = s && s.knownFollowersAvatarUrls.length > 3
          o.a.useEffect(
            function () {
              x && w && w()
            },
            [x, w],
          )
          var F = r ? o.a.createElement(l.a, { source: r, style: v.iconCustom }) : null,
            I = n
              ? o.a.createElement(
                  m.a,
                  { style: y ? v.condensedContextV2 : v.condensedContext },
                  o.a.createElement(a.b, { align: 'left', color: 'gray700', numberOfLines: 3, size: 'subtext2' }, n),
                  o.a.createElement(
                    m.a,
                    { style: y ? v.buttonTopMargin : [v.buttonBottomMargin, v.buttonLeftMargin] },
                    t,
                  ),
                )
              : null,
            A = o.a.createElement(d.a, null, function (e) {
              var r = e.windowWidth,
                s = f.a.isNarrowScreenWidth(r) ? 'xLarge' : 'xxLarge',
                l = r < p.a.theme.breakpoints.xSmall ? v.buttonWrap : void 0,
                d = y ? v.facepileV2 : null
              return o.a.createElement(
                m.a,
                { style: y ? null : [v.knownFollowersContainer, l] },
                o.a.createElement(
                  u.a,
                  {
                    interactiveStyles: null,
                    link: k,
                    onPress: h,
                    style: y ? v.interactiveStyleV2 : v.interactiveStyle,
                  },
                  function (e) {
                    var t = e.isHovered
                    return o.a.createElement(
                      o.a.Fragment,
                      null,
                      o.a.createElement(i.a, { style: [v.facepile, d], userAvatarSize: s, userAvatarUrls: C }),
                      o.a.createElement(
                        a.b,
                        { color: 'gray700', dir: 'ltr', numberOfLines: 2, size: 'subtext2', style: t && v.underline },
                        n ||
                          (function (e, t) {
                            return o.a.createElement(c.a.I18NFormatMessage, { $i18n: 'bb2cd6d3' }, e, t)
                          })(_, S),
                      ),
                    )
                  },
                ),
                (function (e) {
                  var n =
                    e < p.a.theme.breakpoints.xSmall ? v.buttonBottomMargin : [v.buttonBottomMargin, v.buttonLeftMargin]
                  return y ? [t] : o.a.createElement(m.a, { style: n }, t)
                })(r),
              )
            }),
            O = s && x ? A : I
          return o.a.createElement(
            o.a.Fragment,
            null,
            F,
            o.a.createElement(a.b, { color: 'normal', size: 'title2', weight: 'heavy' }, g),
            b ? o.a.createElement(a.b, { color: 'gray700', size: 'subtext2', weight: 'bold' }, b) : null,
            O,
          )
        }
      h.defaultProps = { withAdditionalControls: !1 }
      var v = p.a.create(function (e) {
        return {
          buttonBottomMargin: { marginBottom: e.spaces.space16 },
          buttonLeftMargin: { marginLeft: e.spaces.space20 },
          buttonTopMargin: { marginTop: e.spaces.space20 },
          buttonWrap: { flexWrap: 'wrap-reverse' },
          condensedContext: {
            marginTop: e.spaces.space16,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          },
          condensedContextV2: { marginTop: e.spaces.space16 },
          iconCustom: {
            alignSelf: 'flex-start',
            borderRadius: e.borderRadii.infinite,
            height: e.spaces.space32,
            width: e.spaces.space32,
            marginTop: e.spaces.space8,
            marginBottom: e.spaces.space8,
          },
          facepile: { marginBottom: e.spaces.space16, alignSelf: 'flex-start' },
          facepileV2: { marginRight: e.spaces.space8, marginTop: e.spaces.space16 },
          interactiveStyle: { flexShrink: 1 },
          interactiveStyleV2: { flexDirection: 'row', alignItems: 'center' },
          knownFollowersContainer: {
            marginTop: e.spaces.space16,
            marginBottom: e.spaces.space16,
            flexDirection: 'row',
            justifyContent: 'space-between',
            flexGrow: 1,
            flexShrink: 1,
          },
          underline: { textDecorationLine: 'underline' },
        }
      })
      t.a = h
    },
    K0xN: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'TopicHeader', function () {
          return Y
        })
      n('OZaJ')
      var r = n('VrFO'),
        o = n.n(r),
        a = n('Y9Ll'),
        i = n.n(a),
        s = n('1Pcy'),
        c = n.n(s),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('N+ot'),
        f = n.n(d),
        p = n('AuHH'),
        m = n.n(p),
        h = n('KEM+'),
        v = n.n(h),
        w = (n('2G9S'), n('1t7P'), n('jQ/y'), n('ho0z'), n('z84I'), n('M+/F'), n('ERkP')),
        b = n.n(w),
        g = n('Qyxo'),
        y = n('Zejx'),
        E = n('G6rE'),
        _ = n('rxPX'),
        C = n('0KEI'),
        k = function (e, t) {
          return y.a.select(e, t.topicId)
        },
        S = function (e, t) {
          var n = (function (e, t) {
            var n
            return E.e.selectMany(e, (null === (n = t.facepile) || void 0 === n ? void 0 : n.userIds) || [])
          })(e, t)
          return Object(g.a)(n, function (e) {
            return !e || e.blocking || e.muting ? void 0 : e
          })
        },
        x = Object(_.a)()
          .propsFromState(function () {
            return { topic: k, users: S }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(C.createLocalApiErrorHandlerWithContextFactory)('TOPIC_HEADER'),
              follow: y.a.follow,
              unfollow: y.a.unfollow,
              undoTopicNotInterested: y.a.undoNotInterested,
            }
          })
          .withAnalytics(),
        F = n('LWCC'),
        I = n('9B+1'),
        A = n('3XMw'),
        O = n.n(A),
        N = n('Tp1h'),
        P = n('YICZ'),
        L = n('vYiB'),
        T = n('caTy'),
        B = n('Jkc4'),
        U = n('xM7j'),
        R = n('XcJG'),
        j = n('MWbm'),
        M = n('v6aA'),
        H = n('1Cz6'),
        W = n('cHvH'),
        V = n('Wd7d'),
        D = n('rHpw')
      function X(e) {
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
            r = m()(e)
          if (t) {
            var o = m()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var K = O.a.b1850062,
        G = O.a.d69b2d90,
        z = O.a.gf5e9ea6,
        Y = (function (e) {
          u()(n, e)
          var t = X(n)
          function n() {
            var e
            o()(this, n)
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              v()(
                c()(e),
                '_additionalControlsEnabled',
                e.context.featureSwitches.isTrue('topic_landing_page_clearer_controls_enabled'),
              ),
              v()(
                c()(e),
                '_followButtonTextVariant',
                Object(I.b)(e.context.featureSwitches.getStringValue('topic_landing_page_cta_text')),
              ),
              v()(c()(e), '_handleUndoTopicNotInterested', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler,
                  r = t.topic,
                  o = t.undoTopicNotInterested
                e._scribeAction({ element: 'topic', action: 'un_not_interested' }), r && o(r.id).catch(n())
              }),
              v()(c()(e), '_handleOnClickFacepiles', function () {
                e._scribeAction({ element: 'facepile', action: 'click' })
              }),
              v()(c()(e), '_handleFacepilesImpression', function () {
                e._scribeAction({ element: 'facepile', action: 'impression' })
              }),
              e
            )
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.facepile,
                    r = t.onFollowHeaderOffscreen,
                    o = t.topic,
                    a = t.topicLandingContext,
                    i = t.users,
                    s = o || {},
                    c = s.description,
                    l = s.name,
                    u = i.slice(0, 4).map(function (e) {
                      return e.profile_image_url_https
                    }),
                    d = (null == n ? void 0 : n.facepileUrl) && Object(T.b)(n.facepileUrl),
                    f =
                      i && i.length > 3
                        ? {
                            firstUsername: i[0].name || '',
                            usersCount: i.length - 1,
                            knownFollowersAvatarUrls: u,
                            trendingFollowersUrl: d || '',
                          }
                        : void 0
                  return o
                    ? b.a.createElement(
                        j.a,
                        { style: Z.root },
                        b.a.createElement(B.a, { customText: l, displayMode: N.a.topic }, function () {
                          return b.a.createElement(
                            L.a,
                            { onOffscreenChange: r },
                            b.a.createElement(H.a, {
                              children: e._renderTopicActions(),
                              context: a,
                              knownFollowers: f,
                              onFacepilesClick: e._handleOnClickFacepiles,
                              onFacepilesImpression: e._handleFacepilesImpression,
                              subtitle: c,
                              title: l,
                              withAdditionalControls: e._additionalControlsEnabled,
                            }),
                          )
                        }),
                      )
                    : null
                },
              },
              {
                key: '_renderTopicActions',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.displayType,
                    r = t.topic
                  return r
                    ? b.a.createElement(W.a, null, function (t) {
                        var o = t.windowWidth,
                          a = V.a.isNarrowScreenWidth(o) ? Z.mainViewSmall : Z.mainView,
                          i = e._additionalControlsEnabled
                            ? V.a.isNarrowScreenWidth(o)
                              ? Z.followButtonSmall
                              : Z.followButton
                            : null,
                          s = V.a.isNarrowScreenWidth(o) ? Z.notInterestButtonSmall : Z.notInterestButton
                        return b.a.createElement(
                          b.a.Fragment,
                          null,
                          r.not_interested && e._additionalControlsEnabled
                            ? e._renderTopicContextTombstone()
                            : n === R.c.Basic
                            ? b.a.createElement(
                                j.a,
                                { style: a },
                                !e._additionalControlsEnabled || r.following || r.not_interested
                                  ? null
                                  : b.a.createElement(P.a, {
                                      size: 'medium',
                                      style: s,
                                      text: K,
                                      topicId: r.id,
                                      type: 'primaryOutlined',
                                      withIconOnly: !1,
                                    }),
                                b.a.createElement(F.a, {
                                  showRelationshipChangeConfirmation: !0,
                                  size: 'medium',
                                  style: i,
                                  textMode: e._followButtonTextVariant,
                                  topic: r,
                                }),
                              )
                            : null,
                        )
                      })
                    : null
                },
              },
              {
                key: '_renderTopicContextTombstone',
                value: function () {
                  return b.a.createElement(U.a, {
                    actionText: z,
                    children: G,
                    inline: !0,
                    onClick: this._handleUndoTopicNotInterested,
                  })
                },
              },
              {
                key: '_scribeAction',
                value: function (e) {
                  this.props.analytics.scribe(e)
                },
              },
            ]),
            n
          )
        })(b.a.Component)
      v()(Y, 'contextType', M.a), v()(Y, 'defaultProps', { displayType: R.c.Basic })
      var Z = D.a.create(function (e) {
          return {
            root: {
              marginHorizontal: e.componentDimensions.gutterHorizontal,
              marginVertical: e.componentDimensions.gutterVertical,
            },
            mainView: { flexDirection: 'row', flexGrow: 1 },
            mainViewSmall: { flexWrap: 'wrap' },
            notInterestButton: { justifyContent: 'center', flexBasis: 1, flexGrow: 1, marginRight: e.spaces.space4 },
            followButton: {
              justifyContent: 'center',
              flexBasis: 1,
              flexGrow: 1,
              marginLeft: e.spaces.space4,
              minWidth: 'inherit',
            },
            followButtonSmall: { marginTop: e.spaces.space8, marginLeft: 0, width: '100%' },
            notInterestButtonSmall: { width: '100%' },
          }
        }),
        J = x(Y)
      t.default = J
    },
    Ox2E: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return d
      }),
        n.d(t, 'c', function () {
          return f
        }),
        n.d(t, 'a', function () {
          return p
        })
      n('LW0h')
      var r = n('1YZw'),
        o = n('k49u'),
        a = n('3XMw'),
        i = n.n(a),
        s = i.a.add55942,
        c = i.a.ib8f5f3b,
        l = i.a.e20fc755,
        u = i.a.hae1c933,
        d = {
          customErrorHandler: function () {
            return Object(r.b)({ text: s })
          },
          showToast: !0,
        },
        f = {
          customErrorHandler: function () {
            return Object(r.b)({ text: c })
          },
          showToast: !0,
        },
        p = {
          customErrorHandler: function (e) {
            var t = e.errors
            if (
              t &&
              t.filter(function (e) {
                return (null == e ? void 0 : e.code) === o.a.ListAdminRightsError
              }).length
            )
              return Object(r.b)({ text: l })
            return Object(r.b)({ text: u })
          },
          showToast: !0,
        }
    },
    ZQ2e: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return U
      })
      n('OZaJ')
      var r = n('VrFO'),
        o = n.n(r),
        a = n('Y9Ll'),
        i = n.n(a),
        s = n('5Yy7'),
        c = n.n(s),
        l = n('N+ot'),
        u = n.n(l),
        d = n('AuHH'),
        f = n.n(d),
        p = n('KEM+'),
        m = n.n(p),
        h = n('ERkP'),
        v = n.n(h),
        w = n('1Pcy'),
        b = n.n(w),
        g = (n('2G9S'), n('1t7P'), n('jQ/y'), n('t62R')),
        y = n('ir4X'),
        E = n('0PHd'),
        _ = n('rHpw'),
        C = n('jhWN'),
        k = n('pBrB'),
        S = n('jV+4'),
        x = n('wCd/'),
        F = n('MWbm')
      function I(e) {
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
            r = f()(e)
          if (t) {
            var o = f()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return u()(this, n)
        }
      }
      var A = (function (e) {
          c()(n, e)
          var t = I(n)
          function n() {
            var e
            o()(this, n)
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              m()(b()(e), '_renderKnownFollowerSocialContext', function () {
                var t = e.props,
                  n = t.isAllowedToViewOptions,
                  r = t.isLoggedIn,
                  o = t.knownFollowers,
                  a = t.userScreenName,
                  i = o.avatarUrls,
                  s = o.count,
                  c = o.names
                return n.followersYouKnow && r
                  ? v.a.createElement(
                      F.a,
                      { style: [O.marginTopXSmall, O.minHeight] },
                      'number' == typeof s &&
                        v.a.createElement(E.a, {
                          knownFollowersAvatarUrls: i,
                          knownFollowersCount: s,
                          knownFollowersNames: c,
                          userScreenName: a,
                        }),
                    )
                  : null
              }),
              e
            )
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  return v.a.createElement(
                    F.a,
                    { style: O.root },
                    this._renderUserAvatar(),
                    v.a.createElement(
                      F.a,
                      { style: O.marginTopXXSmall },
                      this._renderUserName(),
                      this._renderHighlightedUserLabel(),
                    ),
                    this._renderErrorMessage(),
                    this._renderUserDescription(),
                    this._renderUserStats(),
                    this._renderKnownFollowerSocialContext(),
                  )
                },
              },
              {
                key: '_renderUserAvatar',
                value: function () {
                  var e = this.props,
                    t = e.followButton,
                    n = e.isAllowedToViewOptions,
                    r = e.isLoggedIn,
                    o = e.onAvatarClick,
                    a = e.promotedContent,
                    i = e.userAvatarUri,
                    s = e.userScreenName,
                    c = n.avatar,
                    l = n.followButton
                  return v.a.createElement(
                    F.a,
                    { style: O.row },
                    v.a.createElement(C.a, {
                      onClick: o,
                      promotedContent: a,
                      screenName: s,
                      size: 'jumbo',
                      uri: c ? i : void 0,
                      withLink: !0,
                    }),
                    l && r && t ? t : null,
                  )
                },
              },
              {
                key: '_renderUserName',
                value: function () {
                  var e = this.props,
                    t = e.isAllowedToViewOptions,
                    n = e.isUserProtected,
                    r = e.isUserVerified,
                    o = e.onScreenNameClick,
                    a = e.promotedContent,
                    i = e.userName,
                    s = e.userScreenName,
                    c = e.userTranslatorType,
                    l = e.userWithFollowsYou,
                    u = t.badges,
                    d = t.followIndicator,
                    f = t.fullName
                  return v.a.createElement(S.a, {
                    badgeContext: 'account',
                    isProtected: u ? n : void 0,
                    isVerified: u ? r : void 0,
                    name: f ? i : s,
                    onLinkClick: o,
                    promotedContent: a,
                    screenName: s,
                    translatorType: u ? c : void 0,
                    withFollowsYou: d && l,
                    withLink: !0,
                    withStackedLayout: !0,
                  })
                },
              },
              {
                key: '_renderHighlightedUserLabel',
                value: function () {
                  var e = this.props,
                    t = e.isAllowedToViewOptions,
                    n = e.userHighlightedLabel
                  return t.label && n ? v.a.createElement(y.a, { label: n }) : null
                },
              },
              {
                key: '_renderErrorMessage',
                value: function () {
                  var e = this.props.errorMessage
                  return e
                    ? v.a.createElement(F.a, { style: O.marginTopXXSmall }, v.a.createElement(g.b, null, e))
                    : null
                },
              },
              {
                key: '_renderUserDescription',
                value: function () {
                  var e = this.props,
                    t = e.isAllowedToViewOptions,
                    n = e.userDescription,
                    r = e.userEntities,
                    o = e.userId,
                    a = e.userWithheldDescription,
                    i = e.userWithheldEntities
                  return t.description && n
                    ? v.a.createElement(
                        F.a,
                        { style: [O.row, O.marginTopXSmall] },
                        v.a.createElement(k.a, {
                          description: n,
                          entities: r,
                          userId: o,
                          withheldDescription: a,
                          withheldEntities: i,
                        }),
                      )
                    : null
                },
              },
              {
                key: '_renderUserStats',
                value: function () {
                  var e = this.props,
                    t = e.isAllowedToViewOptions,
                    n = e.isUserStatsWithLink,
                    r = e.onUserStatsPress,
                    o = e.userFollowersCount,
                    a = e.userFriendsCount,
                    i = e.userScreenName
                  return t.stats
                    ? v.a.createElement(
                        F.a,
                        { style: [O.row, O.marginTopXSmall] },
                        v.a.createElement(x.a, {
                          followersCount: o,
                          friendsCount: a,
                          onPress: r,
                          screenName: i,
                          withLink: n,
                        }),
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(v.a.PureComponent),
        O = _.a.create(function (e) {
          return {
            root: { padding: e.spaces.space16 },
            row: { flexDirection: 'row', justifyContent: 'space-between' },
            marginTopXSmall: { marginTop: e.spaces.space12 },
            marginTopXXSmall: { marginTop: e.spaces.space4 },
            minHeight: { minHeight: e.spaces.space20 },
          }
        }),
        N = n('3XMw')
      function P(e) {
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
            r = f()(e)
          if (t) {
            var o = f()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return u()(this, n)
        }
      }
      var L = n.n(N).a.ef633577,
        T = (function (e) {
          c()(n, e)
          var t = P(n)
          function n() {
            return o()(this, n), t.apply(this, arguments)
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.onAvatarClick,
                    n = e.onScreenNameClick,
                    r = e.userScreenName,
                    o = {
                      protected: !1,
                      isUserStatsWithLink: !1,
                      verified: !1,
                      profile_image_url_https: '',
                      description: '',
                      entities: {},
                      followers_count: 0,
                      friends_count: 0,
                      id_str: '',
                      followed_by: !1,
                    }
                  return v.a.createElement(A, {
                    errorMessage: L,
                    isAllowedToViewOptions: {
                      avatar: !1,
                      badges: !0,
                      description: !1,
                      followButton: !1,
                      followIndicator: !0,
                      followersYouKnow: !1,
                      fullName: !1,
                      label: !1,
                      stats: !1,
                    },
                    isLoggedIn: !1,
                    isUserProtected: o.protected,
                    isUserStatsWithLink: o.isUserStatsWithLink,
                    isUserVerified: o.verified,
                    knownFollowers: { avatarUrls: [], names: [] },
                    onAvatarClick: t,
                    onScreenNameClick: n,
                    userAvatarUri: o.profile_image_url_https,
                    userDescription: o.description,
                    userEntities: o.entities,
                    userFollowersCount: o.followers_count,
                    userFriendsCount: o.friends_count,
                    userId: o.id_str,
                    userName: r,
                    userScreenName: r,
                    userWithFollowsYou: o.followed_by,
                    userWithheldDescription: void 0,
                    userWithheldEntities: void 0,
                  })
                },
              },
            ]),
            n
          )
        })(v.a.PureComponent)
      function B(e) {
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
            r = f()(e)
          if (t) {
            var o = f()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return u()(this, n)
        }
      }
      var U = (function (e) {
        c()(n, e)
        var t = B(n)
        function n() {
          return o()(this, n), t.apply(this, arguments)
        }
        return (
          i()(n, [
            {
              key: 'render',
              value: function () {
                return v.a.createElement(A, this.props)
              },
            },
          ]),
          n
        )
      })(v.a.PureComponent)
      m()(U, 'Suspended', T)
    },
    ehWl: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'formatNumber', function () {
          return Z
        }),
        n.d(t, 'ListDetail', function () {
          return $
        })
      n('OZaJ')
      var r = n('VrFO'),
        o = n.n(r),
        a = n('Y9Ll'),
        i = n.n(a),
        s = n('1Pcy'),
        c = n.n(s),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('N+ot'),
        f = n.n(d),
        p = n('AuHH'),
        m = n.n(p),
        h = n('KEM+'),
        v = n.n(h),
        w = (n('2G9S'), n('1t7P'), n('jQ/y'), n('ho0z'), n('tVqn'), n('uFXj'), n('ERkP')),
        b = n.n(w),
        g = n('iPch'),
        y = n('kHBp'),
        E = n('RqPI'),
        _ = n('G6rE'),
        C = n('rxPX'),
        k = n('0KEI'),
        S = function (e, t) {
          var n = t.listId
          return n ? y.a.select(e, n) : void 0
        },
        x = function (e, t) {
          var n = S(e, t),
            r = null == n ? void 0 : n.user
          return r ? _.e.select(e, r) : void 0
        },
        F = function (e, t) {
          return g.h(e, t.listId)
        },
        I = Object(C.a)()
          .propsFromState(function () {
            return { list: S, user: x, loggedInUserId: E.q, media: F }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(k.createLocalApiErrorHandlerWithContextFactory)('LIST_DETAIL'),
              subscribe: y.a.subscribe,
              unsubscribe: y.a.unsubscribe,
            }
          })
          .withAnalytics(),
        A = n('f5/l'),
        O = n('muX9'),
        N = n('a5gf'),
        P = n('YeIG'),
        L = n('Tp1h'),
        T = n('Jkc4'),
        B = n('MWbm'),
        U = n('MtXG'),
        R = n('TIdA'),
        j = n('A91F'),
        M = n('rHpw'),
        H = n('9Xij'),
        W = n('t62R'),
        V = n('jV+4'),
        D = n('/yvb'),
        X = n('CGyZ'),
        K = n('v6aA'),
        G = n('3XMw'),
        z = n.n(G)
      function Y(e) {
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
            r = m()(e)
          if (t) {
            var o = m()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var Z = z.a.d58baa7e,
        J = function (e, t) {
          return b.a.createElement(
            z.a.I18NFormatMessage,
            { $i18n: 'd2924acb' },
            b.a.createElement(U.a.Value, null, z.a.ec08efe3({ formattedCount: t })),
            b.a.createElement(U.a.Label, null, z.a.h9f711f0({ count: e })),
          )
        },
        q = z.a.ca5d0a81,
        Q = z.a.j681933d,
        $ = (function (e) {
          u()(n, e)
          var t = Y(n)
          function n() {
            var e
            o()(this, n)
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              v()(c()(e), '_renderImage', function () {
                var t = e.props.media.image
                if (t && !Object(P.a)(t)) {
                  var n = t.url
                  return b.a.createElement(
                    b.a.Fragment,
                    null,
                    b.a.createElement(O.a, null, b.a.createElement('meta', { content: n, property: 'og:image' })),
                    b.a.createElement(R.a, {
                      accessibilityLabel: '',
                      aspectMode: j.a.exact(3),
                      backgroundColor: M.a.theme.colors.gray300,
                      image: t,
                    }),
                  )
                }
                return b.a.createElement(
                  H.a,
                  { ratio: 3 },
                  b.a.createElement(B.a, { style: ee.placeholderImageContainer }),
                )
              }),
              v()(c()(e), '_renderListDescription', function () {
                var t = e.props,
                  n = t.list,
                  r = t.user
                if (n) {
                  var o = n.description,
                    a = n.member_count,
                    i = n.mode,
                    s = n.name,
                    c = n.subscriber_count || 0,
                    l = a || 0,
                    u = 'private' === i
                  return b.a.createElement(
                    B.a,
                    { style: ee.description },
                    b.a.createElement(
                      B.a,
                      { style: [ee.name, ee.text] },
                      b.a.createElement(W.b, { align: 'center', size: 'headline1', weight: 'bold' }, s.trim()),
                      u ? b.a.createElement(N.a, { accessibilityLabel: Q, style: ee.iconLock }) : null,
                    ),
                    o
                      ? b.a.createElement(
                          b.a.Fragment,
                          null,
                          b.a.createElement(
                            O.a,
                            null,
                            b.a.createElement('meta', { content: o.trim(), property: 'og:description' }),
                          ),
                          b.a.createElement(W.b, { align: 'center', style: ee.text }, o.trim()),
                        )
                      : null,
                    r
                      ? b.a.createElement(V.a, {
                          isProtected: r.protected,
                          isVerified: r.verified,
                          name: r.name,
                          onLinkClick: e._handleUserNamePress,
                          profileImageUrl: r.profile_image_url_https,
                          screenName: r.screen_name,
                          style: ee.text,
                          withLink: !0,
                        })
                      : null,
                    e._renderCount(c, l),
                    e._renderActionButton(),
                  )
                }
              }),
              v()(c()(e), '_renderCount', function (t, n) {
                var r = e.props.basePath,
                  o = Z(t),
                  a = Z(n)
                return b.a.createElement(
                  U.a.Group,
                  null,
                  b.a.createElement(
                    U.a,
                    { count: n, link: ''.concat(r, '/members'), onPress: e._handleMembersCountPress },
                    b.a.createElement(
                      z.a.I18NFormatMessage,
                      { $i18n: 'b38e130b' },
                      b.a.createElement(U.a.Value, null, z.a.ibd0106d({ formattedCount: a })),
                      b.a.createElement(U.a.Label, null, z.a.cface2d0({ count: n })),
                    ),
                  ),
                  b.a.createElement(
                    U.a,
                    { count: t, link: ''.concat(r, '/followers'), onPress: e._handleSubscribersCountPress },
                    J(t, o),
                  ),
                )
              }),
              v()(c()(e), '_handleEditPress', function () {
                e._scribe({ element: 'edit', action: 'click' })
              }),
              v()(c()(e), '_handleUserNamePress', function () {
                e._scribe({ element: 'user', action: 'click' })
              }),
              v()(c()(e), '_handleMembersCountPress', function () {
                e._scribe({ element: 'list_member', action: 'click' })
              }),
              v()(c()(e), '_handleSubscribersCountPress', function () {
                e._scribe({ element: 'list_subscribed', action: 'click' })
              }),
              v()(c()(e), '_handleSubscribeActions', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler,
                  r = t.list,
                  o = t.subscribe,
                  a = t.unsubscribe
                if (r) {
                  var i = r.following,
                    s = r.id_str
                  Object(A.a)(n, i, s, o, a, e._scribe)
                }
              }),
              v()(c()(e), '_renderActionButton', function () {
                var t = e.props,
                  n = t.basePath,
                  r = t.list,
                  o = t.loggedInUserId,
                  a = t.user,
                  i = t.withEditButton
                if (r && r.user) {
                  var s = null == a ? void 0 : a.blocking
                  return r.user === o && i
                    ? b.a.createElement(
                        D.a,
                        {
                          link: ''.concat(n, '/info'),
                          onPress: e._handleEditPress,
                          style: ee.button,
                          type: 'primaryOutlined',
                        },
                        q,
                      )
                    : r.user !== o
                    ? b.a.createElement(
                        B.a,
                        { style: ee.button },
                        b.a.createElement(
                          T.a,
                          { customText: r.name, displayMode: L.a.subscribe, userFullName: a && a.name },
                          function (t) {
                            return b.a.createElement(X.a, {
                              disabled: s,
                              isFollowing: !!r.following,
                              onFollow: t(e._handleSubscribeActions),
                              onUnfollow: t(e._handleSubscribeActions),
                              showRelationshipChangeConfirmation: !1,
                              type: 'list',
                            })
                          },
                        ),
                      )
                    : null
                }
              }),
              v()(c()(e), '_scribe', function (t) {
                e.props.analytics.scribe(t)
              }),
              e
            )
          }
          return (
            i()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._scribe({ action: 'impression' })
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.list,
                    n = e.withRoundedCorners
                  return t
                    ? b.a.createElement(
                        B.a,
                        { style: [ee.container, n && ee.hoverCard] },
                        this._renderImage(),
                        this._renderListDescription(),
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(b.a.Component)
      v()($, 'contextType', K.a), v()($, 'defaultProps', { withEditButton: !0 })
      var ee = M.a.create(function (e) {
          return {
            container: {
              borderBottomWidth: e.borderWidths.small,
              borderBottomColor: e.colors.borderColor,
              borderStyle: 'solid',
            },
            hoverCard: { borderRadius: e.borderRadii.xLarge, overflow: 'hidden' },
            button: { marginTop: e.spaces.space20, marginBottom: e.spaces.space12 },
            description: {
              paddingVertical: e.spaces.space12,
              paddingHorizontal: e.spaces.space12,
              alignItems: 'center',
            },
            name: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
            iconLock: { color: e.colors.text, marginLeft: e.spaces.space2 },
            text: { width: '100%', marginBottom: e.spaces.space12 },
            placeholderImageContainer: { backgroundColor: e.colors.gray300, height: '100%' },
          }
        }),
        te = I($)
      t.default = te
    },
    'f5/l': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return o
      }),
        n.d(t, 'b', function () {
          return a
        })
      var r = n('Ox2E'),
        o = function (e, t, n, o, a, i) {
          t
            ? (a({ listId: n }).catch(e(r.c)), i && i({ element: 'unsubscribed', action: 'click' }))
            : (o({ listId: n }).catch(e(r.b)), i && i({ element: 'subscribed', action: 'click' }))
        },
        a = function (e, t) {
          return (e && e.id_str === t) || !1
        }
    },
    gNWl: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return p
      }),
        n.d(t, 'b', function () {
          return v
        })
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        o = n.n(r),
        a = (n('yH/f'), n('JtPf'), n('7x/C'), n('kHBp')),
        i = n('Ssj5'),
        s = n('RqPI')
      function c(e, t) {
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
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? c(Object(n), !0).forEach(function (t) {
                o()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : c(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var u = 'rweb.channelsTimelineBehavior',
        d = 'channelsTimelineBehavior',
        f = Object.freeze({})
      var p = function (e) {
          return e[d]
        },
        m = 'rweb/channelsTimelineBehavior/UPDATE_LIST_RANKINGS',
        h = function (e) {
          return { payload: e, type: m }
        },
        v = function (e) {
          var t = e.listId,
            n = e.useRanked
          return function (e, r, i) {
            var s = i.userPersistence,
              c = r(),
              d = l(l({}, p(c)), {}, o()({}, t, { useRanked: n }))
            e(h(d))
            var f = a.a.select(c, t)
            return f && f.following
              ? s.get(u).then(function (e) {
                  return s.set(u, l(l({}, e), {}, o()({}, t, { useRanked: n })))
                })
              : Promise.resolve()
          }
        }
      i.a.register(
        o()({}, d, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case m:
              return l({}, t.payload)
            default:
              return e
          }
        }),
        function () {
          return function (e, t, n) {
            var r = n.userPersistence
            return Object(s.m)(t())
              ? r.get(u).then(function (t) {
                  t && e(h(t))
                })
              : Promise.resolve()
          }
        },
      )
    },
    iPch: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return u
      }),
        n.d(t, 'k', function () {
          return f
        }),
        n.d(t, 'f', function () {
          return p
        }),
        n.d(t, 'g', function () {
          return m
        }),
        n.d(t, 'c', function () {
          return h
        }),
        n.d(t, 'b', function () {
          return v
        }),
        n.d(t, 'j', function () {
          return w
        }),
        n.d(t, 'l', function () {
          return b
        }),
        n.d(t, 'm', function () {
          return g
        }),
        n.d(t, 'e', function () {
          return E
        }),
        n.d(t, 'd', function () {
          return _
        }),
        n.d(t, 'n', function () {
          return C
        }),
        n.d(t, 'h', function () {
          return k
        }),
        n.d(t, 'i', function () {
          return S
        })
      n('2G9S'), n('WNMA'), n('KqXw'), n('ho0z')
      var r = n('qKWj'),
        o = n('tI3i'),
        a = n.n(o),
        i = n('kHBp'),
        s = n('gNWl'),
        c = n('G6rE'),
        l = { url: 'https://pbs.twimg.com/media/EXZ2rMvVAAAAfrN.png', width: 1125, height: 375 },
        u = function (e, t) {
          var n = m(e, t),
            r = b(e, t),
            o = g(e, t)
          return n ? '/i/lists/'.concat(n) : r && o ? '/'.concat(r, '/lists/').concat(o) : ''
        },
        d = function (e, t) {
          return t.match.params.listId || void 0
        },
        f = function (e, t) {
          var n = t.match.params.listId
          return a()(n, 'listId should always be specified'), n
        },
        p = function (e, t) {
          var n = h(e, t)
          return n && n.id_str
        },
        m = function (e, t) {
          return d(0, t) || p(e, t)
        },
        h = function (e, t) {
          var n = d(0, t)
          return n ? i.a.select(e, n) : i.a.selectByKey(e, y(e, t))
        },
        v = function (e, t) {
          var n = h(e, t)
          return n && n.following
        },
        w = function (e, t) {
          var n = h(e, t)
          return n && n.name
        },
        b = function (e, t) {
          var n = d(0, t)
          return t.match.params.screenName || void 0 || (n && i.a.selectListAuthorScreenName(e, n))
        },
        g = function (e, t) {
          var n = h(e, t)
          return t.match.params.slug || (n && n.slug)
        },
        y = function (e, t) {
          var n = t.match.params.slug,
            o = t.match.params.screenName
          return n && o ? Object(r.a)(o, n) : ''
        },
        E = function (e, t) {
          var n =
            m(e, t) ||
            (function (e, t) {
              var n = g(e, t),
                o = b(e, t)
              return n && o ? Object(r.a)(o, n) : ''
            })(e, t)
          return i.a.selectFetchStatus(e, n)
        },
        _ = function (e, t) {
          var n = b(e, t)
          return n ? c.e.selectByScreenName(e, n) : void 0
        },
        C = function (e, t) {
          var n = m(e, t),
            r = Object(s.a)(e)
          return (n && r[n] && r[n].useRanked) || !1
        },
        k = function (e, t) {
          var n = i.a.select(e, t)
          if (n) {
            var r = n.customBanner
            return r || n.defaultBanner
          }
          return { crop: [], image: l }
        },
        S = function (e, t) {
          var n = h(e, t)
          return null == n ? void 0 : n.mode
        }
    },
    uvhM: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'UserProfileCardContainer', function () {
          return D
        })
      n('OZaJ')
      var r = n('VrFO'),
        o = n.n(r),
        a = n('Y9Ll'),
        i = n.n(a),
        s = n('1Pcy'),
        c = n.n(s),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('N+ot'),
        f = n.n(d),
        p = n('AuHH'),
        m = n.n(p),
        h = n('KEM+'),
        v = n.n(h),
        w = (n('2G9S'), n('1t7P'), n('jQ/y'), n('ho0z'), n('ERkP')),
        b = n.n(w),
        g = n('XnvM'),
        y = n('SwJK'),
        E = n('P1r1'),
        _ = n('rxPX'),
        C = n('0KEI'),
        k = n('G6rE'),
        S = Object(k.g)([k.a]),
        x = function (e, t) {
          return S(e, t.screenName)
        },
        F = function (e, t) {
          return k.e.selectByScreenName(e, t.screenName)
        },
        I = function (e, t) {
          return k.e.selectIsUserNotFound(e, t.screenName)
        },
        A = function (e, t) {
          return k.e.selectIsUserSuspended(e, t.screenName)
        },
        O = function (e, t) {
          return k.e.selectIsUserWithheld(e, t.screenName)
        },
        N = function (e, t) {
          var n = F(e, t)
          return null == n ? void 0 : n.highlightedLabel
        },
        P = function (e, t) {
          var n = (function (e, t) {
            return k.e.selectIdByScreenName(e, t.screenName)
          })(e, t)
          return { avatarUrls: y.a(e, n), count: y.b(e, n), names: y.c(e, n) }
        },
        L = Object(_.a)()
          .propsFromState(function () {
            return {
              displaySensitiveMedia: E.l,
              fetchStatus: x,
              isNotFound: I,
              isSuspended: A,
              isWithheld: O,
              knownFollowers: P,
              user: F,
              userHighlightedLabel: N,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(C.createLocalApiErrorHandlerWithContextFactory)('USER_PROFILE_CARD'),
              fetchOneUserByScreenNameIfNeeded: k.e.fetchOneByScreenNameIfNeeded,
              fetchKnownFollowersIfNeeded: g.a,
            }
          })
          .withAnalytics(),
        T = n('GOQE'),
        B = n('kGix'),
        U = n('v//M'),
        R = n('uIZp'),
        j = n('Jkc4'),
        M = n('ZQ2e'),
        H = n('v6aA'),
        W = n('7wqI')
      function V(e) {
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
            r = m()(e)
          if (t) {
            var o = m()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var D = (function (e) {
        u()(n, e)
        var t = V(n)
        function n() {
          var e
          o()(this, n)
          for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i]
          return (
            (e = t.call.apply(t, [this].concat(a))),
            v()(c()(e), '_renderUserProfileCard', function () {
              var t = e.props,
                n = t.displaySensitiveMedia,
                r = t.isNotFound,
                o = t.isSuspended,
                a = t.isWithheld,
                i = t.knownFollowers,
                s = t.onAvatarClick,
                c = t.onScreenNameClick,
                l = t.promotedContent,
                u = t.screenName,
                d = t.user,
                f = t.userHighlightedLabel
              if (o)
                return b.a.createElement(M.a.Suspended, { onAvatarClick: s, onScreenNameClick: c, userScreenName: u })
              if (!d) return null
              var p = e.context.loggedInUserId,
                m = Object(W.a)({
                  displaySensitiveMedia: n,
                  isNotFound: r,
                  isSuspended: o,
                  isWithheld: a,
                  loggedInUserId: p,
                  user: d,
                }),
                h = !!p && p === d.id_str,
                v = Object(W.b)({ isOwnProfile: h, user: d })
              return b.a.createElement(j.a, null, function (t) {
                return b.a.createElement(M.a, {
                  followButton: e._renderFollowUserButton(),
                  isAllowedToViewOptions: m,
                  isLoggedIn: !!p,
                  isUserProtected: d.protected,
                  isUserStatsWithLink: v,
                  isUserVerified: d.verified,
                  knownFollowers: i,
                  onAvatarClick: s,
                  onScreenNameClick: c,
                  onUserStatsPress: t(),
                  promotedContent: l,
                  userAvatarUri: d.profile_image_url_https,
                  userDescription: d.description,
                  userEntities: d.entities,
                  userFollowersCount: d.followers_count,
                  userFriendsCount: d.friends_count,
                  userHighlightedLabel: f,
                  userId: d.id_str,
                  userName: d.name,
                  userScreenName: u,
                  userTranslatorType: d.translator_type,
                  userWithFollowsYou: d.followed_by,
                  userWithheldDescription: d.withheld_description,
                  userWithheldEntities: d.withheld_entities,
                })
              })
            }),
            v()(c()(e), '_renderFollowUserButton', function () {
              var t = e.props,
                n = t.promotedContent,
                r = t.showRelationshipChangeConfirmation,
                o = t.user,
                a = null == o ? void 0 : o.id_str
              return a
                ? b.a.createElement(R.a, { promotedContent: n, showRelationshipChangeConfirmation: r, userId: a })
                : void 0
            }),
            v()(c()(e), '_handleFetchUser', function () {
              var t = e.props,
                n = t.createLocalApiErrorHandler
              ;(0, t.fetchOneUserByScreenNameIfNeeded)(t.screenName).catch(function (e) {
                n(T.a)(e)
              })
            }),
            v()(c()(e), '_handleFetchKnownFollowers', function () {
              var t = e.props,
                n = t.createLocalApiErrorHandler,
                r = t.fetchKnownFollowersIfNeeded,
                o = t.user,
                a = null == o ? void 0 : o.id_str
              a && r(a).catch(n({}))
            }),
            e
          )
        }
        return (
          i()(n, [
            {
              key: 'componentDidMount',
              value: function () {
                this._handleFetchUser(), this._handleFetchKnownFollowers()
              },
            },
            {
              key: 'componentDidUpdate',
              value: function (e) {
                var t, n
                ;(null === (t = e.user) || void 0 === t ? void 0 : t.id_str) !==
                  (null === (n = this.props.user) || void 0 === n ? void 0 : n.id_str) &&
                  this._handleFetchKnownFollowers()
              },
            },
            {
              key: 'render',
              value: function () {
                var e = this.props,
                  t = e.fetchStatus,
                  n = e.isSuspended
                return b.a.createElement(U.a, {
                  fetchStatus: n ? B.a.LOADED : t,
                  onRequestRetry: this._handleFetchUser,
                  render: this._renderUserProfileCard,
                })
              },
            },
          ]),
          n
        )
      })(b.a.Component)
      v()(D, 'contextType', H.a)
      var X = L(D)
      t.default = X
    },
  },
])
//# sourceMappingURL=WIPED
